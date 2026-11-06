---
title: "OpenVax Neoantigen Prediction Pipeline: A Tutorial"
author: Julia Kodysh
date: 2020-10-20 18:48:23 -0700
---

We've previously written about the OpenVax [neoantigen prediction pipeline,](/blog/computational-pipeline-for-neoantigen-vaccine-trials-at-mount-sinai) which is the computational basis of 3 clinical trials at Mount Sinai. The purpose of this post is to provide a quick-start tutorial for using our pipeline on your own data to predict cancer neoantigens and select peptide vaccine contents, aiming to elicit a T cell response against those neoantigens.

In a nutshell, the OpenVax pipeline is a Dockerized end-to-end workflow using [Snakemake](https://snakemake.readthedocs.io/en/stable/) that starts with raw tumor/normal sequencing data and does all the necessary processing to generate neoantigen predictions. It is easy to set up and run, contains all needed dependencies, and does not require a cluster. All you need is a Docker installation and a relatively beefy machine - we run it on a 24-core server, but 16 cores should be enough as well.

## Overview

These are the steps performed by the OpenVax pipeline:

- Tumor and normal whole exome sequencing FASTQ files are aligned to a particular reference genome using bwa mem. RNA-seq of the tumor sample is aligned by STAR to the same reference genome. (We generally use GRCh37+decoy sequences or GRCh38.)
- Aligned tumor and normal exome reads pass through several steps using GATK 3.7: MarkDuplicates, IndelRealigner, BQSR.
- Aligned RNA-seq reads are grouped into two sets: those spanning introns and those aligning entirely within an exon (determined based on the CIGAR string). The latter group is passed through IndelRealigner, and the two groups of reads are merged.
- Somatic variant calling is performed by running Mutect 1.1.7, Mutect 2, and/or Strelka version 1. The pipeline configuration, which we go into below, specifies which of those 3 variant callers the pipeline should run.
- Once both somatic variants and aligned RNA are ready, a custom tool called Vaxrank coordinates variant effect annotation, expression estimation, and MHC binding prediction. Vaxrank prioritizes somatic variants based on expression and predicted MHC class I binding affinity.

![Flowchart of the OpenVax pipeline. Normal and tumor DNA reads are aligned with BWA-MEM, post-processed (duplicate marking, BQSR, indel realignment) and passed to variant calling with Mutect, Strelka and MuTect2. Tumor RNA reads are aligned with STAR and post-processed. Somatic variants, aligned tumor RNA and class I MHC alleles feed vaccine peptide selection with Vaxrank, Isovar, MHCtools, Varcode and PyEnsembl.](/blog/images/openvax-neoantigen-prediction-pipeline-a-tutorial/pipeline-overview.png)

## Getting Started

The OpenVax pipeline assumes you have the following datasets:

### Sample data

You will need to provide tumor and normal whole exome sequencing data, as well as tumor RNA-seq data. These files need to be in gzip-compressed FASTQ format. The pipeline also expects as input a list of MHC class I alleles for the individual.

### Reference

You will need to provide a reference genome and associated files:

- Reference sequence file (FASTA)
- Known transcripts file (GTF)
- dbSNP known mutation file for your reference genome (VCF)

## Installation

To install the latest version of the OpenVax pipeline from Dockerhub, run this one-liner:

```
docker pull openvax/neoantigen-vaccine-pipeline:latest
```

Verify everything installed correctly and see all available pipeline options (e.g. ability to execute a dry run listing all commands, specify memory/CPU resources for the pipeline, and others):

```
docker run openvax/neoantigen-vaccine-pipeline:latest -h
```

## Setup

You run the pipeline by invoking a Docker entrypoint in the image, giving it three directories as mounted Docker [volumes](https://docs.docker.com/storage/volumes/):

- /inputs: FASTQ files and a configuration YAML (see example YAML [here](https://github.com/openvax/neoantigen-vaccine-pipeline/blob/master/test/idh1_config.yaml))
- /outputs: directory to write results to
- /reference-genome: reference genome data, may be shared across pipeline runs

Make sure that all 3 directories are world-writable - the Docker pipeline runs as an unprivileged user, and the pipeline will need to write data to one or more of these directories.

Let’s say you want to run the pipeline using the GRCh38 reference genome. If you’re using our provided processed files, download and uncompress them (and make the reference genome directory world-writable):

```
gsutil -m cp gs://reference-genomes/grch38.tar.gz /your/path/to/reference/genome/
cd /your/path/to/reference/genome/ && tar -zxvf grch38.tar.gz
chmod -R a+w grch38
```

## Configuration

![Example YAML config: sample-specific settings (sample id, MHC alleles, and single-end FASTQ files for normal, tumor and RNA) followed by pipeline settings (work directory, b37decoy reference files, the netmhcpan-iedb MHC predictor, and the mutect and strelka variant callers).](/blog/images/openvax-neoantigen-prediction-pipeline-a-tutorial/example-config.png)

An OpenVax pipeline YAML config file contains sample-specific settings and tool configurations that may be common across samples and shared in multiple pipeline runs. This config file needs to live in the directory /your/path/to/fastq/inputs, the same directory as your input FASTQ files. Some notes about this:

- All paths in the config are expected to be relative to the inputs, outputs, and reference genome directories you're mounting as Docker volumes.
- In most cases, you should only need to edit the sample-specific configuration (first half of the config YAML file).
- You can list up to 6 MHC class I alleles for your sample. Make sure that each allele is supported by NetMHCpan; otherwise no vaccine peptide results will be returned.
- The sample ID will determine the subdirectory where the results get written, so you should use a unique sample name for each pipeline run.
- If you have data in paired-end FASTQ files, the two files must be specified as "r1" and "r2" entries instead of the singular entry in the config template. You’ll also need to change the "type" to "paired-end".
- If you have data for a single sample that's spread across multiple sequencing runs or lanes, this can be accommodated also: the "tumor", "normal", and "rna" sections in the configuration file each contain a list of fragments. This allows for multiple list elements, as long as each entry has a distinct "fragment\_id" value. For example, if the tumor RNA data comes from multiple sequencing runs, you can add another list element to the "rna" block with "fragment\_id: L002".

## Test run

For an example run, try starting with test data from our GitHub repo, consisting of a YAML config file and two small FASTQ files of reads overlapping a single somatic mutation, set up to run using the GRCh38 reference genome. First, download this reference genome as described in the Setup section above. For this simple test, we will re-use the tumor DNA sequencing as our RNA reads. Download the test data from these files to the directory you'll have mounted as your /inputs volume:

```
cd /your/path/to/fastq/inputs
wget https://github.com/openvax/neoantigen-vaccine-pipeline/raw/master/test/idh1_config_grch38.yaml
wget https://github.com/openvax/neoantigen-vaccine-pipeline/raw/master/datagen/idh1_r132h_normal.fastq.gz
wget https://github.com/openvax/neoantigen-vaccine-pipeline/raw/master/datagen/idh1_r132h_tumor.fastq.gz
```

After you create your /outputs directory, we may now run the pipeline:

```
docker run -it \
-v /your/path/to/fastq/inputs:/inputs \
-v /your/path/to/pipeline/outputs:/outputs \
-v /your/path/to/reference/genome:/reference-genome \
openvax/neoantigen-vaccine-pipeline:latest \
--configfile=/inputs/idh1_config_grch38.yaml
```

The first time you run this, it may take several minutes as necessary processing files are being downloaded and cached. The output will be a set of ranked variants and proposed vaccine peptide results in several file formats, including basic text (ASCII) and PDF. If everything works correctly, you should see a single IDH1 R132H variant in the final output.

## What if I want to use OpenVax to just call somatic variants?

You can also run the OpenVax pipeline just to call somatic variants, if you don't have tumor expression data or MHC alleles for your sample. Simply use the same pipeline configuration, but omit the tumor RNA part of the sample as well as HLA alleles - this will call and write MuTect and Strelka variants into their own respective VCFs! See an example of a variant-calling-only pipeline config [here](https://github.com/openvax/neoantigen-vaccine-pipeline/blob/master/test/idh1_config_dna_only.yaml).

There’s all sorts of other intermediate output in the pipeline as well in the pipeline - for a description of that, or for any other details about the pipeline, check out our [README](https://github.com/openvax/neoantigen-vaccine-pipeline) on GitHub. And if you have any other questions, please contact [julia@openvax.org](mailto:julia@openvax.org).
