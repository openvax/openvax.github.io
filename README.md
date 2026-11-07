# openvax.github.io

Source for https://www.openvax.org. GitHub Pages builds it with Jekyll on every push to `master`; there is no local build step.

- `index.html` is the home page. It has no front matter, so Jekyll copies it unchanged and you can preview it by opening the file.
- `assets/site.css` styles every page.
- `_posts/` holds the blog, served at `/blog/<slug>` with an index at `/blog/` and a feed at `/blog/feed.xml`.

## Adding a blog post

Create `_posts/YYYY-MM-DD-slug.md`:

```markdown
---
title: "Post title"
subtitle: "Optional one-line summary"
author: Your Name
date: 2026-11-06
---

Write the post in Markdown.

![Describe the image](/blog/images/slug/figure.png)
```

Put images in `blog/images/<slug>/`. The post appears at `https://www.openvax.org/blog/slug` once the push deploys.

To preview the blog locally, build with the same image GitHub Pages uses:

```sh
docker run --rm --platform linux/amd64 -v "$PWD":/site --entrypoint sh \
  -e JEKYLL_ENV=production -e PAGES_REPO_NWO=openvax/openvax.github.io \
  ghcr.io/actions/jekyll-build-pages:v1.0.13 \
  -c 'cd /usr/local/bundle && bin/github-pages build --source /site --destination /site/_site'
cd _site && python3 -m http.server
```

`_site/` is build output; don't commit it.
