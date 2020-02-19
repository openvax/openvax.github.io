/*! no_rails_asset_compression */
webpackJsonp([14,25],{1272:function(e,t,n){"use strict";(function(o){function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,o,i){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=i
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),s=n(0),l=i(s),u=n(3),c=i(u),d=n(444),p=i(d),f=n(4),m=i(f),g=n(16),h=i(g),v=n(683),y=(i(v),n(6)),b=i(y),_=n(18),w=i(_),N=n(10),E=i(N),x=n(119),k=i(x),C=n(7),S=i(C),P=n(150),L=i(P),O=n(94),T=i(O),M=n(42),I=i(M),B=n(258),D=i(B),j=n(118),A=i(j),H=n(452),R=i(H),F=n(1242),U=i(F),V=n(12),z=i(V),W=n(47),K=i(W),G=n(34),$=n(682),Y=n(37),q=i(Y),J=n(97),X=i(J),Q=!1,Z=w.default.createPageComponent({displayName:"Ecommerce",mixins:[(0,I.default)("editor"),K.default],bobcatPropTypes:{data:{text:c.default.string,category:c.default.oneOfType([c.default.string,c.default.number]),binding:c.default.object},internal:{onConnectionFailed:c.default.func}},componentWillMount:function(){var e=this._getProperLocation(),t=e.pathname.split("/")
this.initMeta({currentCategory:z.default.isInStorePage()?T.default.getCategoryIdByName(t.pop()):this.dtProps.category,nextCategory:this.dtProps.category,currentPage:1,detailMode:!1})},componentDidMount:function(){var e=this
this._loadProductsFromServer()
T.default.getFistLoadingState("settings")&&k.default.getEcommerceSettings({pageId:S.default.getId()})
T.default.getFistLoadingState("categories")&&k.default.getEcommerceCategories({pageId:S.default.getId()})
this._token=D.default.register(function(e){switch(e.actionType){case A.default.ActionTypes.GET_ECOMMERCE_PRODUCTS_SUCCESS:if(!Q){Q=!0
var t=n(168)
t.init()
t.trackEcommerceBuyerEvent(m.default.getKeenIoEcommerceBuyerLanding())}}})
this._onCategoryChangeListenId=T.default.getCategoriesBinding().addListener("",this._onCategoryChange);(0,b.default)(window).on("resize.ecommerce",q.default.debounce(function(){return e.forceUpdate()},300))},componentDidUpdate:function(e){if(this._getRenderCategory(this.dtProps.category)!==this._getRenderCategory(e.category)||e.category!==this.dtProps.category){if("all"===this._getRenderCategory(this.dtProps.category)||"all"===this.dtProps.category){this.setMeta("nextCategory","all")
this.setMeta("currentCategory","all")
this.setMeta("currentPage",1)}else{this.setMeta("nextCategory",this.dtProps.category)
this.setMeta("currentCategory",this.dtProps.category)
this.setMeta("currentPage",1)}this._loadProductsFromServer()}},componentWillUnmount:function(){D.default.unregister(this._token)
T.default.getCategoriesBinding().removeListener(this._onCategoryChangeListenId);(0,b.default)(window).off("resize.ecommerce")},_getProperLocation:function(){return location},_changeRouteByCategoryId:function(e){var t=T.default.getCategories(),n=t.find(function(t){return t.id===e})||{name:""}
history.replaceState({},"/store/categories","/store/categories/"+n.name)},_onCategoryChange:function(){var e=this
return this.setTimeout(function(){return e._loadProductsFromServer()},10)},_getProductsData:function(){return T.default.getProducts(this._getRenderCategory(this.getMeta("currentCategory")),this.getMeta("currentPage"))},_getEditBtnText:function(){var e=this._getProductsData().length
return o(0===e?"Ecommerce|Add Product":1===e?"Ecommerce|Manage Product":"Ecommerce|Manage Products")},_getRenderCategory:function(e){var t="all"===e?this.getMeta("currentCategory"):e
T.default.isCategoryIdExist(t)||(t="all")
return t},_loadProductsFromServer:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments[1]
this.setMeta("currentPage",t)
var o=k.default.getEcommerceProducts({pageId:S.default.getId(),category:n||this._getRenderCategory(this.getMeta("currentCategory")),page:t})
if(o)return o.fail(function(){return e.props.onConnectionFailed()})},_getCurrentPageNum:function(){return this.getMeta("currentPage")},_loadNextPage:function(){var e=this._getCurrentPageNum()
this.setMeta("currentPage",e+1)
return this._loadProductsFromServer(e+1)},_onClickEditor:function(e){if("editor"===X.default.getRole())return window.alert(o("Editor|No permission, please contact your site administrator."))
E.default.openEcommerceManagerDialog(e)},_changeCategory:function(e){z.default.isInStorePage()&&this._changeRouteByCategoryId(e)
this.setMeta("currentCategory",e)
return this._loadProductsFromServer(1,e)},_changeToDetailMode:function(){return this.setMeta("detailMode",!0)},_changeToNormalMode:function(){return this.setMeta("detailMode",!1)},_getCategoryBarProps:function(){return{currentCategory:this.getMeta("currentCategory"),changeCategory:this._changeCategory,categories:T.default.getCategories()}},_getWrapperProps:function(){return{products:this._getProductsData().filter(function(e){return"visible"===e.status}),pageId:S.default.getId(),hasMultipleProducts:T.default.getProducts().length>=2,settings:T.default.getSettings(),cartData:L.default.getCart(),layout:this.props.layout||"landscape-one",category:this.props.category||"all",changeToDetailMode:this._changeToDetailMode,changeToNormalMode:this._changeToNormalMode}},render:function(){var e=this
this.observeBinding(T.default.getBinding())
this.observeBinding(L.default.getCartBinding())
var t=T.default.getPagination(this.getMeta("currentCategory")),n=this.getMeta("detailMode"),i=this._getEditBtnText(),s=T.default.getLoadingState("product")||T.default.getLoadingState("settings")||T.default.getLoadingState("category"),u=T.default.getFistLoadingState("categories")||T.default.getFistLoadingState("settings"),c="persona"===S.default.getTheme().get("name")?"":"sixteen columns",d=m.default.getFromSiteToApp(),p=r("div",{className:c+" s-ecommerce-empty-box s-common-status no-float"},void 0,r("div",{className:"tags"},void 0,r("div",{className:"fa fa-tag"}),r("div",{className:"entypo-bag"}),r("div",{className:"fa fa-shopping-cart"})),r("div",{className:"text s-font-body"},void 0,o("Ecommerce|No products in this shop now!"))),f=t&&t.totalPages>=2&&(d?r("div",{className:"s-ecommerce-pagination"},void 0,r(G.Link,{className:"s-ecommerce-pagination-item s-font-body",to:"/store/page?category="+this.getMeta("currentCategory")},void 0,o("Ecommerce|View more"))):r("div",{className:"s-ecommerce-pagination"},void 0,t.totalPages>this._getCurrentPageNum()&&r("span",{className:"s-ecommerce-pagination-item s-font-body",onClick:this._loadNextPage},void 0,o("Ecommerce|Show more")),this._getCurrentPageNum()>1&&r("span",{className:"s-ecommerce-pagination-item s-font-body",onClick:function(){return e.setMeta("currentPage",1)}},void 0,o("Ecommerce|Show less"))))
return l.default.createElement("div",{className:"s-component s-ecommerce",ref:"root"},r("div",{className:"s-ecommerce-content"},void 0,T.default.getCategories().length>0&&("all"===this.dtProps.category||!T.default.isCategoryIdExist(this.dtProps.category))&&r("div",{className:"persona"===S.default.getTheme().get("name")?"":"sixteen columns",style:{display:n?"none":"block"}},void 0,l.default.createElement(U.default,a({sbClass:this.props.sbClass},this._getCategoryBarProps()),r("div",{className:"s-component-editor-wrapper"},void 0,r("div",{className:(0,h.default)("s-component-overlay",{visible:m.default.getInWeChat()}),onClick:function(){return e._onClickEditor({tab:"category"})}},void 0,r("div",{className:"overlay"},void 0,r("div",{className:"center"},void 0,r("span",{},void 0,o("Ecommerce|Manage Categories")))))))),s&&r("div",{className:(0,h.default)("s-loading-wrapper",{"relative-wrapper":!this._getProductsData().length})},void 0,r("div",{className:"s-loading"})),l.default.createElement(R.default,a({},this._getWrapperProps(),{isLoading:s,isFirstLoading:u,emptyComponent:p,paginationComponent:f}),!s&&r("div",{className:"s-component-editor-wrapper"},void 0,r("div",{className:"s-component-overlay"+(m.default.getInWeChat()?" visible":""),onClick:function(){return e._onClickEditor({category:e.getMeta("currentCategory"),tab:"product"})}},void 0,r("div",{className:"overlay"},void 0,r("div",{className:"center"},void 0,r("span",{},void 0,i))))))))}}),ee=(0,$.addOffline)(Z)
Z.WaypointLazy=(0,p.default)(ee)
t.default=ee
e.exports=t.default}).call(t,n(1))},3604:function(e,t,n){"use strict"
var o=n(3614),i=n(3615),a=n(3616),r=i([o])
e.exports=r
e.exports.touchStyles=a
e.exports.Mixin=o},3610:function(e,t,n){"use strict"
function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var i=n(6),a=o(i),r=n(2),s=o(r),l=n(3),u=o(l),c=n(15),d=o(c),p=n(18),f=o(p),m=n(32),g=o(m),h=n(36),v=o(h),y=n(444),b=o(y),_=n(318),w=o(_),N=n(3622),E=o(N),x=f.default.createPageComponent({displayName:"VideoBgContent",bobcatPropTypes:{data:{videoHtml:u.default.string,videoUrl:u.default.string,className:u.default.string,style:u.default.object}},observedProps:["videoHtml"],getBobcatDefaultProps:function(){return{data:{videoHtml:""}}},_removeIframe:function(){return(0,a.default)(d.default.findDOMNode(this)).find("iframe").remove()},_isSliderCloneComponent:function(){var e=(0,a.default)(d.default.findDOMNode(this)),t=e.closest(".slick-track").find(".slick-slide").length-2,n=e.closest(".slick-slide")
return n.length>0&&("-1"===n.attr("data-index")||n.attr("data-index")===""+t)},componentDidMount:function(){this._isSliderCloneComponent()?this._removeIframe():this._setupBgVideo()},componentDidUpdate:function(e){e.videoHtml===this.dtProps.videoHtml||this._isSliderCloneComponent()||this._setupBgVideo()},componentWillUnmount:function(){var e=this
if(!this._isSliderCloneComponent()&&this._video&&null!=this._video.frame&&null!=this._video.frame.youTubePlayer){"function"==typeof this._video.frame.youTubePlayer.stopVideo&&this._video.frame.youTubePlayer.stopVideo()
"function"==typeof this._video.frame.youTubePlayer.clearVideo&&this._video.frame.youTubePlayer.clearVideo()
this._video.frame.isRemoved=!0
s.default.remove(window.youTubeVideoBgList,function(t){return t===e._video.frame})}},afterLayoutChange:function(){return this._setupBgVideo()},_setupBgVideo:function(){var e=this
v.default.Event.unsubscribe(this._token)
this._video||(this._video={})
var t=(0,a.default)(d.default.findDOMNode(this))
if(t.length&&!g.default.isMobile()){window.clearInterval(null!=this._video.frame?this._video.frame.loopTimer:void 0)
var n=function(){switch(e._video.type){case"youtube":var t=e._video.frame
window.youTubeVideoBgList||(window.youTubeVideoBgList=[])
Array.from(window.youTubeVideoBgList).includes(t)||window.youTubeVideoBgList.push(t)
window.onYouTubeIframeAPIReady=function(){if(null!=(null!=window.YT?window.YT.Player:void 0)){var e=!0,n=!1,o=void 0
try{for(var i,a=Array.from(window.youTubeVideoBgList)[Symbol.iterator]();!(e=(i=a.next()).done);e=!0){t=i.value
!function(e){var t=new window.YT.Player(e.attr("id"),{videoId:e.attr("id").split("_")[0],height:e.attr("height"),width:e.attr("width"),events:{onReady:function(t){var n=void 0
e.player=n=t.target
if(!w.default.get("enableSoundForVideoBg")){n.setVolume(0)
n.mute&&n.mute()}n.setLoop(!0)
e.duration=n.getDuration()
e.loopTimer=null
e.startLoop=function(){var e=this
window.clearInterval(this.loopTimer)
return this.loopTimer=window.setInterval(function(){return e.isRemoved?window.clearInterval(e.loopTimer):e.player.seekTo(0)},1e3*(this.duration-1))}
return e.startLoop()},onStateChange:function(t){try{if(t.data===window.YT.PlayerState.PLAYING){e.css("opacity",1)
e.closest(".video-bg-wrap").addClass("no-bg")}if([window.YT.PlayerState.ENDED,window.YT.PlayerState.PAUSED].includes(t.data)){t.target.playVideo()
return e.startLoop()}}catch(e){}}}})
e.youTubePlayer=t}(t)}}catch(e){n=!0
o=e}finally{try{!e&&a.return&&a.return()}finally{if(n)throw o}}return window.youTubeVideoBgList=[]}}
if(null==window.YT)return(0,a.default)("body").append((0,a.default)("<script src='https://www.youtube.com/iframe_api'></script>"))
break
case"vimeo":var o={method:"setVolume",value:"0"},i={method:"addEventListener",value:"pause"},r={method:"play"},s=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=e.attr("src").split("?")[0]
n="https:"+n.replace(/^https?:/,"")
try{e[0].contentWindow.postMessage(JSON.stringify(i),n)
if(t)return e[0].contentWindow.postMessage(JSON.stringify(o),n)}catch(e){}},l=function(e){e.css("opacity",1)
var t=e.attr("src").split("?")[0]
t="https:"+t.replace(/^https?:/,"")
try{return e[0].contentWindow.postMessage(JSON.stringify(r),t)}catch(e){}}
return(0,a.default)(window).bind("message",function(t){if(t.originalEvent.origin.match(/player\.vimeo\.com/)){switch(JSON.parse(t.originalEvent.data).event){case"ready":n=!w.default.get("enableSoundForVideoBg")
s(e._video.frame,n)
l(e._video.frame);[1e3,2e3,5e3,1e4].forEach(function(t){return setTimeout(function(){return l(e._video.frame)},t)})
break
case"pause":l(e._video.frame)}}})}}
!function(){var n=(e.dtProps.videoHtml||"").replace("&origin=","&origin="+a.default.url().attr("base")).replace(/^(https?):/,"")
t.html(n)
if(""!==n){var o=t.find("iframe")
o.length||(o=t.find("video"))
e._video.frame=o
e._video.type=-1!==n.indexOf("youtube.com")?"youtube":n.indexOf("vimeo.com")?"vimeo":"mp4"
if(o.length){"youtube"===e._video.type&&o.addClass("youtube-video")
var i=t.closest(".slide, #s-header, .s-blog-header"),r=t.closest(".video-bg");["static","initial"].includes(r.css("position"))&&r.css("position","relative")
r.children().each(function(){var e=(0,a.default)(this)
window.edit_page.v4?e.hasClass("video-bg-wrap")||!["static","initial"].includes(e.css("position"))||e.hasClass("s-section-editor-wrapper")||e.css("position","relative"):!e.hasClass("video-bg-wrap")&&["static","initial"].includes(e.css("position"))&&e.css("position","relative")
if((parseInt(e.css("z-index"),10)||1)<3)return e.css("z-index",3)})
r.find(".video-bg-wrap").css("z-index",1)
e._resizeFn&&(0,a.default)(window).off("resize",e._resizeFn)
e._resizeFn=s.default.debounce(function(){var t=Math.max(i.outerHeight(),r.height()),n=Math.max(i.outerWidth(),r.width()),a=(n/t).toFixed(2)
!function(){var e=void 0,i=void 0
o.css({position:"absolute",top:0,left:0})
var r=parseInt(o.attr("height"),10),s=parseInt(o.attr("width"),10),l=(s/r).toFixed(2)
if(l>a){e=t+100
i=(t+100)*l}else{e=(n+100)/l
i=n+100}var u=(t-e)/2,c=(n-i)/2
o.css({height:e+"px",width:i+"px",top:u+"px",left:c+"px"})}()
return window.setTimeout(function(){if(t!==Math.max(i.height(),r.height()))return e._resizeFn()},50)},100)
e._resizeFn}}}()
n()
null!=window.YT&&window.onYouTubeIframeAPIReady()
if(this._resizeFn){for(var o=[100,500,1e3,2e3,5e3],i=0;i<o.length;i++){var r=o[i]
window.setTimeout(this._resizeFn,r)}(0,a.default)(window).on("resize",this._resizeFn)
this._token=v.default.Event.subscribe("Section.changed",function(){return e._resizeFn()})
return this._token}}},render:function(){return E.default.apply(this)}})
x.WaypointLazy=(0,b.default)(x,{noWrapper:!0})
t.default=x.WaypointLazy
e.exports=t.default},3611:function(e,t,n){"use strict";(function(o){function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n
return e}Object.defineProperty(t,"__esModule",{value:!0})
var r,s=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,o,i){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=i
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),l=n(0),u=(i(l),n(3)),c=i(u),d=n(18),p=i(d),f=n(3604),m=i(f),g=n(17),h=function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
t.default=e
return t}(g),v=p.default.createPageComponent({displayName:"RepeatableItem",bobcatPropTypes:(r={data:{children:c.default.oneOfType([c.default.object,c.default.array]),binding:c.default.object.isRequired,components:c.default.object},designer:{index:c.default.number.isRequired,vertical:c.default.bool,outerView:c.default.bool,hasEditorOpened:c.default.bool.isRequired,parentSize:c.default.number.isRequired,className:c.default.string,style:c.default.object,moveButtonStyle:c.default.object,alwaysShowButtons:c.default.bool}},a(r,"data",{isArranging:c.default.bool}),a(r,"callback",{onMoveUp:c.default.func,onMoveDown:c.default.func,onDeleteItem:c.default.func}),r),getBobcatDefaultProps:function(){return{designer:{vertical:!1,outerView:!1,className:""},data:{isArranging:!1}}},_clickDeleteButton:function(e){return this.props.onDeleteItem(e)},componentDidMount:function(){this.showMoveOverlay=!1
this.showDeleteOverlay=!1},onMouseEnterMoveButton:function(){this.showMoveOverlay=!0
this.forceUpdate()},onMouseLeaveMoveButton:function(){this.showMoveOverlay=!1
this.forceUpdate()},onMouseEnterDeleteButton:function(){this.showDeleteOverlay=!0
this.forceUpdate()},onMouseLeaveDeleteButton:function(){this.showDeleteOverlay=!1
this.forceUpdate()},_renderNativeEditorButtons:function(){return s("div",{className:"native-controls"},void 0,this.dsProps.parentSize>1&&s("div",{className:"f-s-repeatable-item-order-indicator"},void 0,this.props.index+1),s("div",{className:"native-buttons"},void 0,s("div",{className:"s-repeatable-delete-button f-s-repeatable-delete-button main-button",title:o("Remove this item"),onClick:this._clickDeleteButton.bind(null,this.dsProps.index),onMouseEnter:this.onMouseEnterDeleteButton,onMouseLeave:this.onMouseLeaveDeleteButton},void 0,s("span",{}),s("img",{src:h.cdnAssetPath("/images/icons/native/ic_delete_nog@3x.png")})),this.props.index>0&&s(m.default,{onTap:this.props.onMoveUp.bind(this,this.props.index),className:"f-s-repeatable-move-button f-s-repeatable-move-button--up main-button"},void 0,s("span",{}),s("img",{src:h.cdnAssetPath("/images/icons/native/ic_down_arrow_white@3x.png")})),this.props.index+1<this.props.parentSize&&s(m.default,{onTap:this.props.onMoveDown.bind(this,this.props.index),className:"f-s-repeatable-move-button f-s-repeatable-move-button--down main-button"},void 0,s("span",{}),s("img",{src:h.cdnAssetPath("/images/icons/native/ic_down_arrow_white@3x.png")}))))},_renderEditorButtons:function(){return(!this.dsProps.hasEditorOpened||this.dsProps.alwaysShowButtons)&&s("div",{className:"buttons"},void 0,this.dsProps.parentSize>1&&s("div",{className:"s-repeatable-move-button",title:o("Drag to reorder"),onMouseEnter:this.onMouseEnterMoveButton,onMouseLeave:this.onMouseLeaveMoveButton,style:this.props.moveButtonStyle||{}}),s("div",{className:"s-repeatable-delete-button",title:o("Remove this item"),onClick:this._clickDeleteButton.bind(null,this.dsProps.index),onMouseEnter:this.onMouseEnterDeleteButton,onMouseLeave:this.onMouseLeaveDeleteButton},void 0,s("div",{className:"delete-button-wrap"},void 0,s("div",{className:"delete-button-confirm"},void 0,o("Sure?")))))},render:function(){return s("div",{"data-sorting-index":this.props.index,className:this.props.className+" s-repeatable-item",style:this.props.style},void 0,!1,this.props.children,!1)}})
t.default=v
e.exports=t.default}).call(t,n(1))},3612:function(e,t,n){"use strict"
function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t,n){for(var o=[],i=e<t,a=n?i?t+1:t-1:t,r=e;i?r<a:r>a;i?r++:r--)o.push(r)
return o}Object.defineProperty(t,"__esModule",{value:!0})
var a=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,o,i){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=i
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),r=n(0),s=o(r),l=n(3),u=o(l),c=n(15),d=(o(c),n(2)),p=(o(d),n(11)),f=(o(p),n(210)),m=o(f),g=n(18),h=o(g),v=n(17),y=(function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
t.default=e}(v),n(170)),b=(o(y),n(315)),_=(o(b),n(3611)),w=o(_),N=n(88),E=o(N),x=n(70),k=o(x),C=void 0,S={displayName:"Repeatable",bobcatPropTypes:{data:{children:u.default.oneOfType([u.default.object,u.default.array]),binding:u.default.object.isRequired,components:u.default.object,list:m.default.list.isRequired},designer:{className:u.default.string,style:u.default.object,sortableContainment:u.default.string,sortableContainmentSelector:u.default.string,canAddItems:u.default.bool}},statics:{hasContent:function(e){return e.get("list").size>0}},getBobcatDefaultProps:function(){return{designer:{className:"",sortableContainment:"parent"}}},hasContent:function(){return C.hasContent(this.getDefaultBinding())},componentDidUpdate:function(){},_onClickSave:function(){this.updateState("normal")
this.savePage()},_isFirst:function(e){return 0===e},_isLast:function(e){return this.props.list.size===e+1},_navigateToItem:function(e){var t=$(this.refs.repeatable),n=t.find(".s-repeatable-item").eq(e),o=(window.innerHeight-n.height())/2
o<0&&(o=20)
var i=n.offset().top-o
k.default.navigateToPosition(i)},_renderChildren:function(){var e=this
return s.default.Children.map(this.props.children,function(t){if((null!=t?t.type.displayName:void 0)===w.default.displayName){var n=Object.assign({},{onMoveUp:function(t){var n=e.props.list
if(0!==n.size&&!e._isFirst(t)){var o=i(0,n.size,!1),a=[o[t],o[t-1]]
o[t-1]=a[0]
o[t]=a[1]
E.default.reorderRepeatable(o,e.getDefaultBinding().sub("list"))
e.savePage()
return e._navigateToItem(t-1)}},onMoveDown:function(t){var n=e.props.list
if(!e._isLast(t)&&0!==n.size){var o=i(0,n.size,!1),a=[o[t+1],o[t]]
o[t]=a[0]
o[t+1]=a[1]
E.default.reorderRepeatable(o,e.getDefaultBinding().sub("list"))
e.savePage()
return e._navigateToItem(t+1)}},onDeleteItem:function(t){e._deleteItem(t)
e.savePage()},isArranging:e.isState("editor")})
return s.default.cloneElement(t,n)}return t})},render:function(){var e=this,t=(this.getDefaultBinding(),this.props.style||{})
return s.default.createElement("div",{className:this.props.className+" s-repeatable",ref:"repeatable"},!1,function(){return a("div",{style:t},void 0,e.props.children)}())}}
C=h.default.createPageComponent(S)
t.default=C
e.exports=t.default},3613:function(e,t,n){"use strict";(function(o){function i(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
t.default=e
return t}function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var r=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,o,i){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=i
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),s=n(0),l=a(s),u=n(2),c=i(u),d=n(3),p=a(d),f=n(48),m=(a(f),n(136)),g=a(m),h=n(21),v=a(h),y=n(67),b=a(y),_=n(3604),w=a(_),N=n(18),E=a(N),x=n(42),k=a(x),C=n(445),S=a(C),P=n(1239),L=a(P),O=n(671),T=a(O),M=n(80),I=a(M),B=n(10),D=(a(B),n(208)),j=(a(D),n(169)),A=a(j),H=n(116),R=a(H),F=n(1238),U=n(1240),V=a(U),z=n(443),W=a(z),K=n(58),G=i(K),$=n(41),Y=i($),q=Y.addProtocol,J=E.default.createPageComponent({displayName:"ImageLinkEditor",mixins:[(0,k.default)("editor"),L.default,S.default,I.default.enableAfterMount(),I.default.enableAfterUpdate()],bobcatPropTypes:{data:{url:T.default.url,textColor:p.default.oneOf(["dark","light","overlay"]),sizing:p.default.oneOf(["cover","contain","tile","center"]),backgroundVariation:p.default.string,focus:p.default.object,videoUrl:p.default.string,videoHtml:p.default.string,stockKey:p.default.string,binding:p.default.object,h:p.default.number,w:p.default.number,s:p.default.number,storageKey:p.default.string,storage:p.default.oneOf(["ali","c","qn","un"]),linkUrl:p.default.string.isRequired,linkTarget:p.default.string.isRequired},designer:{warnningInfo:p.default.string,setStateFunc:p.default.func,showBackgroundOverlayToggle:p.default.bool,showRemoveImageButton:p.default.bool,compactButtonLayout:p.default.bool}},componentDidMount:function(){this.setData("displayName",this.constructor.displayName)},_onClickSave:function(){this.savePage()
this.updateState("normal")},getBobcatDefaultProps:function(){return{data:{linkUrl:"",linkTarget:"_blank",warnningInfo:""}}},_onChangeUrl:function(e){this.updateData({linkUrl:q(e.target.value,!0)})
this.savePage()},_onChangeTarget:function(e){this.updateData({linkTarget:e.target.checked?"_blank":"_self"})
this.savePage()},_isNewTab:function(){return"_blank"===this.dtProps.linkTarget},_hasImage:function(){var e=G.createImage(this.dtProps).getUrl(this.dsProps.size)
return Y.imageHasContent(e)},_hasBackgroundOverlay:function(){return"overlay"===this.dtProps.textColor},_toggleBackgroundOverlay:function(){var e=this._hasBackgroundOverlay()?"light":"overlay"
this.updateData({textColor:e})
this.savePage()},_removeImage:function(){this.updateData((0,F.dataForEmptyBackground)())
this.savePage()},_renderWarnningInfoIcon:function(){return r("div",{className:"show-pub-alert pub-alert"},void 0,r("a",{className:"page publish-button"},void 0,r("div",{className:"pub-alert-icon"},void 0,r("div",{className:"fa fa-circle"},void 0,r("div",{id:"unpubed-count",className:"pub-count"},void 0,"!")))))},_onClickEditImage:function(){var e=this
V.default.launchTuiEditor(this._getUrlForImageEditor(),{onSavedCallback:function(t){return e._imageUploaded(t)}})},_getUrlForImageEditor:function(){var e=c.assign({},this.props,{s:10})
return G.createImage(e).getUrl(this.props.size)},_onClickUpload:function(){R.default.pick({initialTabIdx:0,iconLibComponents:"background",from:"banner",handlers:{itemUploaded:this._imageUploaded,itemSelected:this._imageUploaded}})},_setImage:function(e){this.updateData((0,F.imageDataForSaving)(e))},_imageUploaded:function(e){/\.mp4$/.test(e.getUrl())?this.updateData(Object.assign((0,F.imageDataForSaving)(e),{videoHtml:W.default.getVideoHtmlByUrl(e.getUrl(),1280,720),videoUrl:e.getUrl(),textColor:"light"})):this._setImage(e)
this.savePage()},_renderImgEditButton:function(){return this._hasImage()?r("div",{className:"clearfix s-layout-menu-button"},void 0,r("div",{className:"s-btn small no-margin dark-gray",onClick:this._onClickEditImage},void 0,o("Edit Image"))):null},_afterClickEditor:function(){this.props.setStateFunc("editor")},_afterClickCancel:function(){this.props.setStateFunc("normal")},render:function(){var e=v.default.DOM.input,t=this.dtProps,n=t.linkUrl,i=t.warnningInfo,a=this.props,s=a.showBackgroundOverlayToggle,u=a.showRemoveImageButton,c=a.compactButtonLayout,d="editor"===this.getDefaultBinding().get("_state"),p=this.isIframeEditing()
return l.default.createElement("div",{ref:"componentDOM",className:"s-component s-linker"+this.addIframeEditingClass()},r("div",{className:"s-component-editor dark-bg "+(d?"_open":""),onClick:this.onToggleMobileViewEditorBox},void 0,i&&this._renderWarnningInfoIcon(),r(w.default,{className:"title center clickable"+(p?" hidden":"")+" "+(c?"compact":"small"),onTap:this.toggleEditor,rel:"tooltip-left","data-original-title":i||""},void 0,this.isState("editor")?r("div",{className:"minus"},void 0,r("i",{className:"entypo-down-open-mini"})):r("div",{className:"plus"},void 0,r("i",{className:"entypo-right-open-mini"})),o("Editor|Image & Link")),r(b.default,{},void 0,this.isState("editor")&&!0&&r(A.default,{component:g.default.div,className:"main-editor"},void 0,r("div",{className:"s-layout-menu-field"},void 0,r("div",{className:"clearfix s-layout-menu-button"},void 0,r("div",{className:"s-btn small no-margin dark-gray",onClick:this._onClickUpload},void 0,o("Upload Image"))),l.default.createElement("img",{style:{display:"none"},src:this._getUrlForImageEditor(),ref:"aviaryImage"}),this._renderImgEditButton(),this._hasImage()&&u?r("div",{className:"clearfix s-layout-menu-button"},void 0,r("div",{className:"s-btn small no-margin dark-gray",onClick:this._removeImage},void 0,o("Remove Image"))):null,this._hasImage()&&s?r("label",{className:"s-layout-menu-label"},void 0,r(e,{type:"checkbox",checked:this._hasBackgroundOverlay(),onChange:this._toggleBackgroundOverlay}),o("Editor|Overlay")):null),r("div",{className:"s-layout-menu-field"},void 0,r("div",{className:"s-layout-menu-label"},void 0,o("Editor|Link URL")),r(e,{type:"text",name:"url",value:n,onChange:this._onChangeUrl}),r("label",{className:"s-layout-menu-label"},void 0,r(e,{type:"checkbox",checked:this._isNewTab(),onChange:this._onChangeTarget}),o("Editor|Open in new tab"))),r("div",{className:"clearfix"},void 0,r("div",{className:"s-btn green small done-button no-margin",onClick:this._onClickSave},void 0,o("Save")))))))}})
t.default=J
e.exports=t.default}).call(t,n(1))},3614:function(e,t,n){e.exports=n(14)(1326)},3615:function(e,t,n){e.exports=n(14)(1328)},3616:function(e,t,n){e.exports=n(14)(837)},3617:function(e,t,n){"use strict"
function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s,l,u,c,d,p,f,m,g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n]
o.enumerable=o.enumerable||!1
o.configurable=!0
"value"in o&&(o.writable=!0)
Object.defineProperty(e,o.key,o)}}return function(t,n,o){n&&e(t.prototype,n)
o&&e(t,o)
return t}}(),y=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,o,i){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=i
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),b=n(6),_=o(b),w=n(2),N=o(w),E=n(0),x=o(E),k=n(3),C=(o(k),n(22)),S=o(C),P=n(47),L=o(P),O=n(21),T=o(O),M=n(673),I=o(M),B=n(681),D=o(B),j=n(32),A=o(j),H=n(3618),R=o(H),F=n(41),U=(function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
t.default=e}(F),n(42)),V=o(U),z=n(101),W=o(z),K=n(1246),G=o(K),$=n(70),Y=o($),q=n(1236),J=(o(q),n(36)),X=o(J),Q=n(58),Z=n(3619),ee=o(Z),te=440,ne=(s=S.default.decorate(G.default.Mixin),l=S.default.decorate(W.default),u=S.default.decorate(T.default.Mixin),c=S.default.decorate((0,V.default)("editor")),d=S.default.decorate(L.default),s(p=l(p=u(p=c(p=d(p=(m=f=function(e){function t(e){i(this,t)
var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
n.getCurrentSlide=function(){return n.getData("_current")}
n._addListenerToBinding=function(){if(n._listenerId){n._clearTimer()
n.getDefaultBinding().removeListener(n._listenerId)}n._listenerId=n.getDefaultBinding().addListener("_current",function(e){var t=e.getCurrentValue();(void 0===t?"undefined":h(t))||(t=n._currentIndex)
n.refs.slick&&(n.mTimeoutId=n.setTimeout(function(){if(n.isInPrevious){n.refs.slick.slickPrev()
n.isInPrevious=!1}else if(n.isInNext){n.refs.slick.slickNext()
n.isInNext=!1}else n.refs.slick.slickGoTo(t)},100))})}
n._stopAutoplayWhenPlayMedia=function(){if(!n._stopAutoPlayInitialized){var e=n._getSliderEl(),t=e.find(".s-video-content iframe")
if(t&&t.length>0){(0,R.default)(e,n.handleChangeAutoPlay)
n._stopAutoPlayInitialized=!0}}}
n._unsubscribeEvent=function(){n.tokenArr.every(function(e){X.default.Event.unsubscribe(e)})}
n._respondTo=function(e){var t=X.default.Event.subscribe(e,function(){n.forceUpdate()})
n.tokenArr.push(t)}
n._registSliderEvent=function(){n.tokenArr=[]
n._respondTo("Editor.SideMenu.Opened")
n._respondTo("Editor.SideMenu.Closed")
n._respondTo("Slider.ContentChanged");(0,_.default)(window).resize(n._renderSliderHeightDebounced)
n._bindWindowScroll();(0,_.default)(window).bind("repaint-slider",function(){})}
n._getSliderEl=function(){return(0,_.default)(n.refs.iosslider)}
n._checkIsInAnimation=function(){return n.isInAnimation}
n._previous=function(){if(!n._checkIsInAnimation()){n.isInAnimation=!0
var e=n._modCurrentSlide(-1)
n.setData("_current",e)
n.isInPrevious=!0}}
n._next=function(){if(!n._checkIsInAnimation()){n.isInAnimation=!0
var e=n._modCurrentSlide(1)
n.setData("_current",e)
n.isInNext=!0}}
n._modCurrentSlide=function(e){var t=n.getData("_current"),o=n.props.children,i=t+e
return n._mod(i,o.length)}
n._mod=function(e,t){var n=e%t
return n<0?n+t:n}
n._getEditorProps=function(){return N.default.extend({},n.props,{binding:n.getDefaultBinding()})}
n._showNavButtons=function(){return n.getMeta("showNavButtons")}
n._renderEditor=function(){return null}
n._goToSpecifySlide=function(e){n.isInAnimation=!0
n.setData("_current",e)}
n._autoScrollPage=function(e){if(!A.default.isSmallScreen()){n._getSliderEl().offset().top-(0,_.default)(window).scrollTop()<0&&n._shouldScroll(e)&&Y.default.navigateToHash("#"+(n._getSliderSection()+1))}}
n._shouldScroll=function(e){return(0,_.default)(n._getSliderEl().find(".slick-slide[data-index="+e+"]")).find(".inner").outerHeight(!0)>n._getViewHeight()}
n._getSliderSection=function(){return n.props.index}
n.handleChangeAutoPlay=function(e){n.setMeta("autoplay",e)}
n._getChildren=function(){var e=n.props,t=e.children,o=e.transition,i=n.props.auto_play,a=t.length
if(a<=0)return null
var r=void 0,s="fade"===o,l={accessibility:!1,infinite:1!==a,slidesToShow:1,draggable:!1,speed:A.default.isMobile()?500:750,slidesToScroll:1,arrows:!1,pauseOnHover:!1,dots:!1,autoplay:!0,autoplaySpeed:i,lazyLoad:!1,fade:s,beforeChange:function(e,t){n._transitionBannerSize(e,t)
if(s){var o=n._getSliderEl().find(".slick-list"),i=n.getData("_current"),a=o.find(".slick-slide>div:nth-child("+i+")")
a.css({opacity:"1"})
r=a}},afterChange:function(e){n.isInAnimation=!1
n.setData("_current",e)
n._adaptiveCurrentSlide()
n._currentIndex=e
s&&setTimeout(function(){(0,_.default)(r).css({opacity:""})},1e3)}},u=t.map(function(e){return y("div",{},e.key,e)})
return x.default.createElement(I.default,g({ref:"slick",className:"transition-"+o},l),u)}
n._shouldSliderFullScreen=function(){return n.props.fullscreen}
n._shouldFullscreenSliderOnlyFirstSection=function(){return!(!n.props.fullscreenSliderOnlyFirstSection||!n._checkSliderIsFirstSection())}
n._checkSliderIsFirstSection=function(){var e=n._getSliderSection()
return!(!n.getMeta("ready")||0!==e)}
n._useDarkOverlays=function(){var e=!0,t=n.getData("list")
if(t.size>0){var o=n.getCurrentSlide(),i=t.get(o)
if(!i)return
var a=i.getIn(["components","background1"]),r=D.default.hasContent(a),s="dark"!==a.get("textColor")
r&&s&&(e=!1)}return e}
n._getMaxForegroundHeightInList=function(){var e=n._getSliderEl(),t=0,o=0,i=n._getLimitedMaxHeight()
e.find(".item").each(function(e,n){var i=(0,_.default)(n).find(".inner").first()
t=0===i.width()?0:i.outerHeight(!0)
o=Math.max(t,o)})
t=null
return Math.min(o,i)}
n._getLimitedMaxHeight=function(){var e=n._getViewHeight()
return(0,_.default)(window).width()<=727?2*e:1.5*e}
n._catchIOSIframeBug=function(e){var t=n._getViewHeight()
return A.default.isIOS()&&window.parent.length>0&&e>4*t}
n._getViewHeight=function(){var e=(0,_.default)(window).height()
if(window.parent.length>0)try{e=(0,_.default)(window.top).height()}catch(e){console.warn("Warnning: window.top is a cross-origin frame.")}if(e>5e3){console.warn("Warnning: In slider got an error device view height.")
e=2048}return e}
n._getSliderHeightByContent=function(){var e=te,t=n._getLimitedMaxHeight(),o=n._getViewHeight(),i="none"===(0,_.default)("#header-container").css("display")?0:(0,_.default)("#header-container").outerHeight(),a=o-Math.max(i,0)-130,r=n._getMaxForegroundHeightInList()
n._catchIOSIframeBug(r)&&(r=t)
if(n._shouldFullscreenSliderOnlyFirstSection())return Math.max(a,r)
if(n.props.fullscreen)return Math.max(r,o)
if(r<e)return e
if(r>t){console.info("[Slide] your content of slider is bigger than the max limited height (",t,")")
return t}return r}
n._getSlideHeightByImageRatio=function(e){var t=n.getData("list").get(e).getIn(["components","background1"]).toObject(),o=!1
if(!t||!t.w||!t.h){var i=n.asyncImageLoadedShapeArr[e]
if(i)t=i
else{t={w:16,h:9}
o=!0}}return{height:n._getFullViewImageHeight(t),isHardCode:o}}
n._getFullViewImageHeight=function(e){if(e&&e.w&&e.h){var t=n._getSliderEl().width(),o=e.h*t/e.w
return Math.ceil(o)}return 440}
n._transitionBannerSize=function(e){var t=n.slideHeightArr[e],o=n._getSliderEl().find(".slick-list")
o.css({height:t-1+"px"})
o.find(".slick-slide").each(function(e,n){(0,_.default)(n).find(".item").css({height:t+"px",minHeight:t+"px"})})}
n._resizeSliderInEditor=function(){var e=n.getCurrentSlide(),t=n.slideHeightArr[e],o=n._getSliderEl().find(".slider")
if(t<240)if("editor"===n.props.imgEditorState){n._adaptiveSlideByIndex(240)
o.addClass("img-editor-open")}else{n._adaptiveSlideByIndex(t)
n.setTimeout(function(){o.removeClass("img-editor-open")},200)}}
n._adaptiveSlideByIndex=function(e){var t=n._getSliderEl().find(".slick-list")
t.css({height:e-1+"px"})
t.find(".slick-slide.slick-active").each(function(t,n){(0,_.default)(n).find(".item").css({height:e+"px",minHeight:e+"px"})})}
n._getImageShapByLoad=function(e){var t=n.getData("list")
e%=t.size
var o=t.get(e).getIn(["components","background1"]).toJS(),i=(0,Q.createImage)(o)
return new Promise(function(t,o){var a=new Image
a.src=i.getUrl();(0,_.default)(a).one("load",function(){if(a.width&&a.height){n.asyncImageLoadedShapeArr[e]={w:a.width,h:a.height}
var i=n._getFullViewImageHeight({w:a.width,h:a.height})
t(i)}else o("Miss the size of image")})})}
n._asyncSetSlideHeight=function(e){n._getImageShapByLoad(e).then(function(t){n.slideHeightArr[e]=t
n._adaptiveCurrentSlide()}).catch(function(e){console.info("[Banner] func/asyncSetSlideHeight: ",e)})}
n._getCurrentLayout=function(){var e=n.getCurrentSlide()
return n.props.getSliderLayouts()[e]}
n._getSlideHeight=function(e,t){var o=n.props.getSliderLayouts(),i=0
if("noForeground"===o[e]){var a=n._getSlideHeightByImageRatio(e)
i=a.height
a.isHardCode&&n._asyncSetSlideHeight(e)}else i=t
return Math.floor(i)}
n._adaptiveCurrentSlide=function(){var e=n.getCurrentSlide(),t=n._getSlideHeight(e)
"editor"===n.props.imgEditorState&&t<240&&(t=240)
n._adaptiveSlideByIndex(t)
n.slideHeightArr[e]=t}
n._renderSliderHeight=function(){var e=n._getSliderEl().find(".slick-list"),t=n.getData("list").size,o=n.getCurrentSlide()
n.slideHeightArr=Array.from(new Array(t),function(){return 0})
var i=n._getSliderHeightByContent()
e.find(".slick-slide").each(function(a,r){var s=parseInt((0,_.default)(r).attr("data-index"),10);-1===s&&(s=t-1)
s===t&&(s=0)
var l=n._getSlideHeight(s,i)
"editor"===n.props.imgEditorState&&l<240&&(l=240);(0,_.default)(r).find(".item").css({height:l+"px",minHeight:l+"px"})
o===s&&e.css({height:l-1+"px"})
n.slideHeightArr[s]=l})}
n._renderSliderHeightDebounced=N.default.debounce(n._renderSliderHeight,A.default.isMobile()?1e3:250)
n._onScroll=n._onScroll.bind(n)
return n}r(t,e)
v(t,[{key:"componentWillMount",value:function(){this.initMeta({ready:!1,autoplay:!1,showNavButtons:!0,isScrolling:!1})
this.setData("_current",0)
this.isInAnimation=!1
this.isInPrevious=!1
this.isInNext=!1
this.slideHeightArr=[]
this.asyncImageLoadedShapeArr=[]
this.tokenArr=[]
this._currentIndex=0}},{key:"componentDidMount",value:function(){this.updateMeta({ready:!0,showNavButtons:!A.default.isMobile()})
this._addListenerToBinding()
this._registSliderEvent()
this._renderSliderHeight()}},{key:"componentDidUpdate",value:function(e){this.isInAnimation||this._renderSliderHeightDebounced()
this._stopAutoplayWhenPlayMedia()
this.props.index!==e.index&&this._addListenerToBinding()}},{key:"componentWillUnmount",value:function(){this._unbindWindowScroll()
this._listenerId&&this.getDefaultBinding().removeListener(this._listenerId);(0,_.default)(window).off("resize",this._renderSliderHeightDebounced)
this._clearTimer()
this._unsubscribeEvent()}},{key:"_clearTimer",value:function(){if(this.mTimeoutId){clearTimeout(this.mTimeoutId)
this.mTimeoutId=void 0}}},{key:"_bindWindowScroll",value:function(){(0,_.default)(document).on("scroll",this._onScroll)}},{key:"_unbindWindowScroll",value:function(){(0,_.default)(document).off("scroll",this._onScroll)}},{key:"_onScroll",value:function(){var e=this
if(this.refs.slick&&!this.getMeta("isScrolling")){this.updateMeta({isScrolling:!0})
var t=function(e){return e.stopPropagation()},n=function n(){e.updateMeta({isScrolling:!1});(0,_.default)("body").off("touchend touchcancel touchleave",n)
e._getSliderEl().off("touchmove",t)}
this._getSliderEl().on("touchmove",t);(0,_.default)("body").on("touchend touchcancel touchleave",n)}}},{key:"render",value:function(){return ee.default.apply(this)}}])
return t}(x.default.Component),f.defaultProps={uiOutside:!1,fullscreen:!1,imgEditorState:""},m))||p)||p)||p)||p)||p)
e.exports=ne},3618:function(e,t){"use strict"
function n(e,t){function n(e){return JSON.stringify({method:"addEventListener",value:e,listener:i,context:"player.js",version:"0.0.10"})}function o(e){var n=e.originalEvent.data
if("string"==typeof n){try{n=JSON.parse(n)}catch(e){console.error(e)}if(n.listener===i)switch(n.event){case"play":t(!1)
break
case"pause":case"ended":t(!0)}}}if(window.postMessage){var i="listener-xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0
return("x"===e?t:3&t|8).toString(16)})
e.find(".s-video-content iframe").each(function(e,t){t.onload=function(){var e=t.src.match(/^(?:http:)?\/\/[^\/]+\//)[0]
if(/(embedly|embed\.ly)/.test(e)){t.contentWindow.postMessage(n("play"),e)
t.contentWindow.postMessage(n("pause"),e)
t.contentWindow.postMessage(n("ended"),e)}}})
$(window).on("message",function(e){o(e)})}}Object.defineProperty(t,"__esModule",{value:!0})
t.default=n
e.exports=t.default},3619:function(e,t,n){"use strict"
function o(e,t,n){this._goToSpecifySlide(n)}function i(e,t,n){return f.createElement("div",{className:"selector-wrapper",key:n},f.createElement("div",{className:m.keys(m.pick({selector:!0,selected:n==this.getCurrentSlide()},m.identity)).join(" "),key:n,onClick:o.bind(this,e,t,n)}))}function a(){this._previous()}function r(e){var t="noForeground"===this._getCurrentLayout()
return f.createElement("div",{},f.createElement("div",{className:"prev-button "+m.keys(m.pick({"has-upper-button":t},m.identity)).join(" "),onClick:a.bind(this,e,t)},f.createElement("div",{className:"arrow"})))}function s(){this._next()}function l(){this._previous()}function u(e,t,n){this._goToSpecifySlide(n)}function c(e,t,n){return f.createElement("div",{className:"selector-wrapper",key:n},f.createElement("div",{className:m.keys(m.pick({selector:!0,selected:n==this.getCurrentSlide()},m.identity)).join(" "),key:n,onClick:u.bind(this,e,t,n)}))}function d(){this._next()}function p(){var e=this.getDefaultBinding().sub("list")
return f.createElement("div",{className:m.keys(m.pick({"slider-container":!0,loading:!this.getMeta("ready")},m.identity)).join(" ")},e.get().size>0?f.createElement("div",{"data-auto-play":this.props.auto_play,ref:"iosslider",className:m.keys(m.pick({iosslider:!0,"dark-overlays":this._useDarkOverlays()},m.identity)).join(" ")},e.get().size>0?f.createElement("div",{className:"slider"},"\n          ",this._getChildren(),"\n        "):null,!this.props.uiOutside&&e.get().size>1?f.createElement("div",{className:"center slide-selectors"},f.createElement("div",{className:"slide-selectors-inner"},f.createElement.apply(this,["div",{className:"content repeatable-component"},m.map(e.get().toArray(),i.bind(this,e)),f.createElement("div",{className:"clearfix"})]))):null,!this.props.uiOutside&&e.get().size>1?r.apply(this,[e]):null,!this.props.uiOutside&&e.get().size>1?f.createElement("div",{className:m.keys(m.pick({"next-button":!0},m.identity)).join(" "),onClick:s.bind(this,e)},f.createElement("div",{className:"arrow"})):null):null,this._showNavButtons()&&this.props.uiOutside&&e.get().size>1?f.createElement("div",{className:"outside prev-button",onClick:l.bind(this,e)},f.createElement("div",{className:"arrow"},"←")):null,this.props.uiOutside&&e.get().size>1?f.createElement("div",{className:"center outside slide-selectors"},f.createElement("div",{className:"slide-selectors-inner"},f.createElement.apply(this,["div",{className:"content repeatable-component"},m.map(e.get().toArray(),c.bind(this,e))]))):null,this._showNavButtons()&&this.props.uiOutside&&e.get().size>1?f.createElement("div",{className:"next-button outside",onClick:d.bind(this,e)},f.createElement("div",{className:"arrow"},"→")):null,0==e.get().size?f.createElement("div",{className:"s-slider-placeholder"},null):null)}var f=n(0),m=n(2)
e.exports=function(){return f.createElement("div",{className:"s-component s-slider"+(this.props.className?" "+this.props.className:" ")},"\n  ",this._renderEditor(),"\n  ",f.createElement("div",{className:"s-component-content"},p.apply(this,[])))}},3620:function(e,t,n){"use strict"
function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var i=n(2),a=(o(i),n(84)),r=n(3613),s=o(r)
s.default.sharedProps=(0,a.sharedPropsBuilder)(function(){return[]})
t.default=s.default
e.exports=t.default},3621:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var o=n(207),i=function(e){return e&&e.__esModule?e:{default:e}}(o),a=n(1242)
t.default=(0,a.createCategoryBar)(i.default)
e.exports=t.default},3622:function(e,t,n){"use strict"
var o=n(0)
n(2)
e.exports=function(){return o.createElement("div",{className:"video-bg-wrap","data-video-html":this.dtProps.videoHtml})}},3652:function(e,t,n){var o=n(3771)
n(2)
e.exports={internal:"profile",displayName:"Profile",description:"Present yourself beautifully. Great for resumes and personal sites.",activated:!0,thumbnail:o.correctThumbnailPath(n(4283)),defaultFonts:{heading:"open sans",title:"open sans",body:"open sans"},features:{disableBackgrounds:!0,backgroundColorClassNames:[],backgroundColorRotate:!1},variations:[{id:"default",displayName:"Variation|Black",fonts:{heading:null,title:null,body:null}},{id:"blue",displayName:"Variation|Blue",fonts:{heading:null,title:null,body:null}}],callbacks:{CustomColorsTemplate:n(4284),after_render:n(4285)},sections:{columns:{proFeature:!1,canEditInMobileApp:!0,component:n(3869),template:n(3842),thumbnail:{cover:o.correctThumbnailPath(n(4286)),template:n(3826)}},contact_form:{proFeature:!1,canEditInMobileApp:!0,component:n(3827),template:n(3870),thumbnail:{cover:o.correctThumbnailPath(n(4287)),template:n(3828)}},cta:{proFeature:!1,canEditInMobileApp:!0,component:n(3785),template:n(3843),thumbnail:{cover:o.correctThumbnailPath(n(4288)),template:n(3786)}},ecommerce:{proFeature:!1,canEditInMobileApp:!1,component:n(3787),template:n(3871),thumbnail:{cover:o.correctThumbnailPath(n(4289)),template:n(3788)}},gallery:{proFeature:!1,canEditInMobileApp:!0,component:n(3844),template:n(4290),thumbnail:{cover:o.correctThumbnailPath(n(4291)),template:n(3830)}},html:{proFeature:!1,canEditInMobileApp:!1,component:n(3791),template:n(3845),thumbnail:{cover:o.correctThumbnailPath(n(4292)),template:n(3792)}},icons:{proFeature:!1,canEditInMobileApp:!0,component:n(3793),template:n(3846),thumbnail:{cover:o.correctThumbnailPath(n(4293)),template:n(3831)}},media:{proFeature:!1,canEditInMobileApp:!0,component:n(3849),template:n(3850),thumbnail:{cover:o.correctThumbnailPath(n(4294)),template:n(3833)}},navbar:{proFeature:!1,canEditInMobileApp:!1,component:n(3834),template:n(4295)},rows:{proFeature:!1,canEditInMobileApp:!0,component:n(3872),template:n(3851),thumbnail:{cover:o.correctThumbnailPath(n(4296)),template:n(3835)}},signup_form:{proFeature:!1,canEditInMobileApp:!0,component:n(3798),template:n(3852),thumbnail:{cover:o.correctThumbnailPath(n(4297)),template:n(3800)}},slider:{proFeature:!0,canEditInMobileApp:!1,component:n(3801),template:n(4298),thumbnail:{cover:o.correctThumbnailPath(n(4299)),template:n(3802)}},text:{proFeature:!1,canEditInMobileApp:!0,component:n(3854),template:n(3855),thumbnail:{cover:o.correctThumbnailPath(n(4300)),template:n(3837)}},title:{proFeature:!1,canEditInMobileApp:!0,component:n(3838),template:n(3856),thumbnail:{cover:o.correctThumbnailPath(n(4301)),template:n(3877)}},block:{proFeature:!0,canEditInMobileApp:!1,component:n(3804),template:n(3857),thumbnail:{template:n(3805)}},blog:{proFeature:!1,canEditInMobileApp:!1,component:n(3774),template:n(3868),thumbnail:{template:n(3783)}},donation:{proFeature:!1,canEditInMobileApp:!1,component:n(3806),template:n(3858),thumbnail:{template:n(3808)}},footer:{proFeature:!1,canEditInMobileApp:!1,component:n(3839),template:n(3859)},grid:{proFeature:!1,canEditInMobileApp:!1,component:n(3809),template:n(3813),thumbnail:{template:n(3814)}},hero:{proFeature:!1,canEditInMobileApp:!0,component:n(3860),template:n(3861),thumbnail:{cover:o.correctThumbnailPath(n(3840)),template:n(3841)}},info:{proFeature:!1,canEditInMobileApp:!0,component:n(3847),template:n(3848),thumbnail:{template:n(3832)}},portfolio:{proFeature:!1,canEditInMobileApp:!1,component:n(3815),template:n(3862),thumbnail:{template:n(3818)}},process:{proFeature:!1,canEditInMobileApp:!0,component:n(3819),template:n(3863),thumbnail:{template:n(3822)}},social_feed:{proFeature:!1,canEditInMobileApp:!1,component:n(3836),template:n(3853),thumbnail:{cover:o.correctThumbnailPath(n(3901)),template:n(3803)}}}}},3738:function(e,t,n){"use strict";(function(o){function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,o,i){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=i
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),s=n(0),l=i(s),u=n(3),c=i(u),d=n(18),p=i(d),f=n(449),m=i(f)
t.default=p.default.create({displayName:"TitleGroup",mixins:[],propTypes:{className:c.default.string,section:c.default.object.isRequired,parentBinding:c.default.object,subtitleOnTop:c.default.bool,canHide:c.default.bool,titleSize:c.default.oneOf(["large","normal"]),titleTag:c.default.oneOf(["h2","h3","h4","h5","h6"]),subtitleTag:c.default.string,contentCheck:c.default.string,binding:c.default.object.isRequired},getDefaultProps:function(){return{className:"",subtitleOnTop:!1,parentBinding:void 0,titleSize:"normal",titleTag:"h2",subtitleTag:"h4",canHide:!0}},componentWillMount:function(){this.showDeleteOverlay=!1
this.hideInEditor=!this.props.section.sbAnyHasContent("text1 text2",{parentBinding:this.props.parentBinding,showOnly:!1})},componentWillUpdate:function(e){this.props.section.sbAnyHasContent("text1 text2",{parentBinding:e.parentBinding,showOnly:!1})&&(this.hideInEditor=!1)},onMouseEnterDeleteButton:function(){this.showDeleteOverlay=!0
this.forceUpdate()},onMouseLeaveDeleteButton:function(){this.showDeleteOverlay=!1
this.forceUpdate()},onClickDeleteButton:function(){this.hideInEditor=!0
this.showDeleteOverlay=!1
this.forceUpdate()},onClickShowButton:function(){this.hideInEditor=!1
this.showDeleteOverlay=!1
this.forceUpdate()},shouldComponentUpdateOverride:function(){return!0},render:function(){var e=void 0,t=void 0,n=this.props.section,i=this.props.parentBinding,s="",u=n.sbUniformTextAlignment("text1",{parentBinding:i}),c=u?"sb-title-"+u:""
this.props.contentCheck&&(n.sbHasContent(this.props.contentCheck,{parentBinding:i,showOnly:!1})||(s="s-only-title-group"))
if(!n)throw new Error("TitleGroup is expecting a section prop!")
if(n.sbHasContent("text1",{parentBinding:i})){var d=void 0,p=void 0,f=n.getComponentProps("text1",i)
p="first"===this.props.section.props.indexType?"h1":this.props.titleTag
d="large"===this.props.titleSize&&"h1"!==p?"s-title-large":""
t=r("div",{className:"s-title "+c},"title",l.default.createElement(m.default,a({slideSettingsBinding:n.getBinding().sub("components.slideSettings"),tagName:p,tagClassName:d,textType:"title",emptyMessage:o("Editor|Add title.")},f)))}else t=null
if(n.sbHasContent("text2",{parentBinding:i})){var g=n.getComponentProps("text2",i)
e=r("div",{className:"s-subtitle"},"subtitle",l.default.createElement(m.default,a({tagName:this.props.subtitleTag,textType:"heading",emptyMessage:o("Editor|Add subtitle.")},g)))}else e=null
return n.sbAnyHasContent("text1 text2",{parentBinding:i})?r("div",{className:"s-title-group "+s+" "+this.props.className},void 0,void 0,this.props.subtitleOnTop?[e,t]:[t,e]):null}})
e.exports=t.default}).call(t,n(1))},3739:function(e,t,n){"use strict"
function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
var s,l,u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},c=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,o,i){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=i
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n]
o.enumerable=o.enumerable||!1
o.configurable=!0
"value"in o&&(o.writable=!0)
Object.defineProperty(e,o.key,o)}}return function(t,n,o){n&&e(t.prototype,n)
o&&e(t,o)
return t}}(),p=n(0),f=o(p),m=n(3),g=(o(m),n(32)),h=(o(g),n(15)),v=(o(h),n(41)),y=n(12),b=o(y),_=n(27),w=o(_),N=n(1279),E=n(2),x=o(E),k=n(6),C=o(k),S="undefined"!=typeof window
if(Boolean(S&&window.document&&window.document.createElement)){n(1275)
document.addEventListener("lazybeforeunveil",function(e){var t=void 0
if(!e.defaultPrevented){t=e.target.getAttribute("data-bg")
if(t){e.target.style.backgroundImage="url("+t+")"
lazySizes.fire(e.target,"_lazyloaded",{},!0,!0)}}})}var P=(l=s=function(e){function t(e){i(this,t)
var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),o=n.props.dataSrc
n.state={isBackgroundImageLoaded:!o,canUseFocus:!1}
return n}r(t,e)
d(t,[{key:"componentWillMount",value:function(){this.updateEnableBackgroundAnimationsInState()}},{key:"componentDidMount",value:function(){var e=this,t=this.props.dataSrc
if(t){this.backgroundImageCopy=new Image
this.backgroundImageCopy.src=t
this.backgroundImageCopy.onload=function(){e.setState({isBackgroundImageLoaded:!0})}
this.backgroundImageCopy.onerror=function(){e.setState({isBackgroundImageLoaded:!0})}}this.afterResize=x.default.debounce(this.afterResize.bind(this),300);(0,C.default)(window).on("resize",this.afterResize)}},{key:"componentWillReceiveProps",value:function(e){this.updateEnableBackgroundAnimationsInState(e)}},{key:"componentWillUpdate",value:function(e){for(var t=!1,n=["src","dataSrc"],o=0;o<n.length;o++){var i=n[o]
if(this.props[i]!==e[i]){t=!0
break}}if(t){var a=this.lazyElement
a&&a.classList.contains("lazyloaded")&&a.classList.remove("lazyloaded")}if(this.lazyElement){var r=this.lazyElement,s=this.props.className
if(r){var l=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").trim()},u=s.split(" ").map(l),c=r.className.split(" ").map(l).filter(function(e){return e&&!u.includes(e)&&!e.startsWith("_")})
this.extraClass=c.join(" ")}}}},{key:"componentDidUpdate",value:function(){var e=this.lazyElement
!e||e.classList.contains("lazyloaded")||e.classList.contains("lazyload")||e.classList.add("lazyload")}},{key:"componentWillUnmount",value:function(){(0,C.default)(window).off("resize",this.afterResize)
this.removeImageLoadListener()}},{key:"getContainerSize",value:function(){var e=this.lazyElement||{clientWidth:0,clientHeight:0}
return{width:e.clientWidth,height:e.clientHeight}}},{key:"removeImageLoadListener",value:function(){if(this.backgroundImageCopy){this.backgroundImageCopy.onload=function(){}
this.backgroundImageCopy=null}}},{key:"afterResize",value:function(){this.updateEnableBackgroundAnimationsInState()}},{key:"updateEnableBackgroundAnimationsInState",value:function(e){e=e||this.props
var t="contain"!==e.style.backgroundSize,n="none"!==e.animations.background&&(0,N.areBackgroundAnimationsEnabledOnThisDevice)()&&t
this.state.enableBackgroundAnimations!==n&&this.setState({enableBackgroundAnimations:n})
this.setState({canUseFocus:!n||S&&window.innerWidth<=700})}},{key:"imagePositioningIsCenter",value:function(e){e=e||this.props
return"auto"===e.style.backgroundSize&&"50% 50%"===e.style.backgroundPosition&&"repeat"!==e.style.backgroundRepeat}},{key:"renderBackgroundImage",value:function(){var e=this,t=this.props,n=t.className,o=t.src,i=t.dataSrc,a=t.eagerLoad,r=t.image,s=t.textColor,l=this.state,d=l.enableBackgroundAnimations,p=l.canUseFocus,m=l.isBackgroundImageLoaded,g=d?" _animate-background":""
this.imagePositioningIsCenter()&&(g+=" _image-position-center")
var h=this.props.style,v=r&&r.getFocusCoordinate(),y=this.getContainerSize(),b=m>0?"loaded":""
p&&v&&y.width>0&&(h=Object.assign({},h,{backgroundPosition:r.transformFocusToBackgroundPosition(y)}))
if(a){h=Object.assign({},h,{backgroundImage:"url("+i+")"})
return f.default.createElement("div",{className:n+g+" background-image",ref:function(t){return e.lazyElement=t},style:h,"data-react-style":this.getDataReactStyle(h)},p&&v&&c("div",{className:"background-overlay overlay-"+s+" "+b}),this.props.children)}var _={}
if(i){h=u({},h,{backgroundImage:"url("+o+")"})
_={"data-bg":i}}return f.default.createElement("div",u({className:"lazyload "+(this.extraClass||"")+" "+n+g+" background-image",style:h},_,{ref:function(t){return e.lazyElement=t},"data-react-style":this.getDataReactStyle(h)}),p&&v&&c("div",{className:"background-overlay overlay-"+s+" "+b}),this.props.children)}},{key:"getDataReactStyle",value:function(e){e=e||{}
e=x.default.omit(e,"backgroundImage")
return JSON.stringify(e)}},{key:"render",value:function(){var e=this.props,t=e.linkTarget,n=e.linkUrl,o=this.renderBackgroundImage(),i=(0,v.addProtocol)(n)
return n&&t?c("a",{href:i,target:t},void 0,o):o}}])
return t}(f.default.Component),s.defaultProps={className:"",style:{},eagerLoad:!1,src:"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",linkUrl:null,linkTarget:null,image:null,textColor:""},l)
t.default=(0,w.default)(P,[b.default],function(){return{animations:b.default.getSiteAnimations()}})
e.exports=t.default},3740:function(e,t,n){"use strict"
function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var i=n(2),a=(o(i),n(84)),r=n(3745),s=o(r)
s.default.sharedProps=(0,a.sharedPropsBuilder)(function(){return[]})
t.default=s.default
e.exports=t.default},3741:function(e,t){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
t.default={_getLayoutVariation:function(){return this._getLayoutBinding().get("layout_variation")||""},_getFirstLayout:function(){return this._getLayoutVariation().split("-")[0]},_updateLayout:function(e){this._getLayoutBinding().sub("layout_variation").set(e)},_getLayoutStatusName:function(){return"ABCDEFGHIJKLMNOPQRSTUVWXYZ"[arguments.length>0&&void 0!==arguments[0]?arguments[0]:0]}}
e.exports=t.default},3742:function(e,t,n){"use strict";(function(e){function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e,t){return"object"!==(void 0===e?"undefined":m(e))?"":e[t]?t:Object.keys(e)[0]}function l(t){return{media:e("Editor|Big Media"),col:e("Editor|Columns"),row:e("Editor|Rows"),box:e("Editor|Text In Box"),one:1,two:2,three:3,four:4,five:5,six:6,small:f("i",{className:"small fa fa-photo"}),medium1:f("i",{className:"medium1 fa fa-photo"}),medium2:f("i",{className:"medium2 fa fa-photo"}),large:f("i",{className:"large fa fa-photo"}),mediaLeft:e("Editor|Left"),mediaRight:e("Editor|Right"),center:e("Editor|Center"),left:e("Editor|Media on Left"),right:e("Editor|Media on Right"),noImage:e("Editor|No Media"),alt:e("Editor|Alternating"),text:e("Editor|Text"),button:e("Editor|Button"),signup:e("Editor|Sign Up"),images:e("Editor|App Store"),overlay:e("Editor|Overlay"),card:e("Editor|Card"),swap:e("Editor|Swap Titles")}[t]}function u(e){return(0,Y.default)(e,[],function(){return{themeName:W.default.getThemeName()}})}Object.defineProperty(t,"__esModule",{value:!0})
t.BaseLayoutButton=void 0
var c,d,p=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n]
o.enumerable=o.enumerable||!1
o.configurable=!0
"value"in o&&(o.writable=!0)
Object.defineProperty(e,o.key,o)}}return function(t,n,o){n&&e(t.prototype,n)
o&&e(t,o)
return t}}(),f=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,o,i){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=i
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}
t.connectToStores=u
var g=n(0),h=o(g),v=n(15),y=o(v),b=n(136),_=o(b),w=n(6),N=o(w),E=n(67),x=o(E),k=n(3604),C=o(k),S=n(22),P=o(S),L=n(16),O=o(L),T=n(2),M=o(T),I=n(24),B=o(I),D=n(80),j=o(D),A=n(10),H=o(A),R=n(169),F=o(R),U=n(101),V=o(U),z=n(7),W=o(z),K=n(3746),G=o(K),$=n(27),Y=o($)
t.BaseLayoutButton=(c=P.default.decorate(j.default.enableAfterMount()))(d=function(t){function n(e){i(this,n)
var t=a(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e))
t.state={showLayoutOptions:!1}
t._bind("_updateLayout","_toggleLayoutOptions","_onClickSave","_clickRotateLayout","_getKeysByLevel")
t._getSetLevelFn=V.default.boundParamsMemoizer(t._setLevelKey,t)
t._createLevelKeys(t.props.layoutVariation)
t._keyCaches={}
t.cacheLevel=-1
return t}r(n,t)
p(n,[{key:"componentDidMount",value:function(){if(-1!==this.cacheLevel){var e=this.cacheLevel,t=this._levelKeys[e]
this._keyCaches[t]=M.default.clone(this._levelKeys)}this.props.layoutOptions||console.warn("Section has no layout options defined!")}},{key:"componentWillUpdate",value:function(e){e.layoutVariation!==this.props.layoutVariation&&this._createLevelKeys(e.layoutVariation)}},{key:"componentDidUpdate",value:function(e,t){e.layoutVariation!==this.props.layoutVariation&&window.edit_page.Event.publish("Layout.afterChange",{target:(0,N.default)(y.default.findDOMNode(this))})
!t.showLayoutOptions&&this.state.showLayoutOptions&&(0,N.default)(this.refs.componentDOM).closest(".s-section-editor-wrapper").addClass("background-editor-opened")
t.showLayoutOptions&&!this.state.showLayoutOptions&&(0,N.default)(this.refs.componentDOM).closest(".s-section-editor-wrapper").removeClass("background-editor-opened")}},{key:"_bind",value:function(){for(var e=this,t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o]
n.forEach(function(t){return e[t]=e[t].bind(e)})}},{key:"_createLevelKeys",value:function(e){this._levelKeys=e.split("-")}},{key:"_updateLayout",value:function(e){this.props.updateLayout(M.default.remove(M.default.clone(e),function(e){return""!==e.trim()}).join("-"))}},{key:"_setLevelKey",value:function(e,t){var n=this.cacheLevel
if(e===n&&this._levelKeys[e]!==t)return this._keyCaches[t]?this.updateCachedKeys(M.default.clone(this._keyCaches[t])):this.updateToDefaultLayout(t)
for(var o=this._levelKeys,i=[],a=this.props.layoutOptions,r=0;r<e;r++)a=a[o[r]]
i[e]=t
a=a[t]
for(var l=o.length,u=e+1;u<l;u++){i[u]=s(a,o[u])
a=a[i[u]]}var c=M.default.merge([],o,i)
this._updateLayout(c)
e!==n&&-1!==n&&(this._keyCaches[o[n]]=c)}},{key:"_getKeysByLevel",value:function(e){for(var t=this.props.layoutOptions,n=0;n<e;n++){t=t[this._levelKeys[n]]
if(!t)return[]}return"object"===(void 0===t?"undefined":m(t))?Object.keys(t):[]}},{key:"_getSmallButtonClass",value:function(e){var t=this._getKeysByLevel(e).length
return 2===t?"small-buttons two":4===t?"small-buttons four":5===t?"small-buttons five":"small-buttons"}},{key:"_getLayoutIndex",value:function(){var e=this.props.layoutVariation,t=this.getRotationKeys().indexOf(e)
return e&&-1!=t?t:null}},{key:"_getLayoutStatus",value:function(){return null!==this._getLayoutIndex()?"ABCDEFGHI"[this._getLayoutIndex()]:"A"}},{key:"_clickRotateLayout",value:function(){if(this.state.showLayoutOptions)this._onClickSave()
else if(this._shouldDirectlyOpenAdvancedOptions())this.setState({showLayoutOptions:!this.state.showLayoutOptions})
else{var e=(this.props.layoutVariation,this.getRotationKeys()),t=this._getLayoutIndex()+1;(!t||t>=e.length)&&(t=0)
var n=e[t]||""
if(n){this.props.updateLayout(n)
H.default.clickLayout()
H.default.save()}}}},{key:"_shouldDirectlyOpenAdvancedOptions",value:function(){return 0===this.getRotationKeys().length&&!this.hideAdvancedOptions}},{key:"_onClickSave",value:function(){this.setState({showLayoutOptions:!1})
H.default.save()}},{key:"_toggleLayoutOptions",value:function(){this.setState({showLayoutOptions:!this.state.showLayoutOptions})
this.state.showLayoutOptions||B.default.track("Click Advanced Layout - Editor v1",{section:this.sectionName})}},{key:"_renderCheckBox",value:function(e){var t=e.levelNum,n=e.labelText,o=e.checkedKey,i=e.unCheckedKey,a=this._levelKeys[t],r=this._getKeysByLevel(t)
if(a&&r.length>=2){var s=this._getSetLevelFn(t,a===o?i:o)
return f("div",{className:"s-layout-menu-field layout-level-button layout-checkbox dark-bg",onClick:s},void 0,f("input",{type:"checkbox",checked:a===o,onChange:s}),f("span",{},void 0,n))}}},{key:"_renderLayoutButtons",value:function(e,t){var n=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:l,i=this._levelKeys[e],a=this._getKeysByLevel(e)
if(i&&a.length>=2){var r=this.getButtonClassMapping()[e]
return f(G.default,{keys:a,selectedKey:i,textMapping:o,className:r,labelText:t,onSelect:function(t){return n._getSetLevelFn(e,t)()}})}}},{key:"render",value:function(){var t=this._getLayoutStatus(),n=this.hideAdvancedOptions||!1,o=this.state.showLayoutOptions,i=f(C.default,{className:"center clickable small title layout-button",onTap:this._clickRotateLayout,rel:"tooltip-left",title:e("Editor|Click to change layouts.")},void 0,f("span",{},void 0,this.buttonTitle||e("Layout"),t&&!o&&f("span",{className:"layout-status"},void 0,t)))
if(!this.props.layoutOptions)return null
var a=(0,O.default)("s-component s-layout",{advanced:!n,opened:o,closed:!o})
return h.default.createElement("div",{ref:"componentDOM",className:a},f("div",{className:"s-component-editor dark-bg"},void 0,n?i:f("div",{className:"layout-button-wrapper"},void 0,i,this._shouldDirectlyOpenAdvancedOptions()?null:f(C.default,{className:"advanced-options-button",rel:"tooltip-left",title:e("Editor|More layout options!"),onClick:this._toggleLayoutOptions},void 0,e("Editor|Advanced"),f("i",{className:"fa fa-angle-down",style:{marginLeft:"5px"}}))),!n&&f(x.default,{},void 0,o&&f(F.default,{component:_.default.div,className:"layout-panel"},void 0,this.renderLayoutOptions(),f("div",{className:"save-button green s-btn small",onClick:this._onClickSave},void 0,e("Editor|Save"))))))}}])
return n}(h.default.Component))||d}).call(t,n(1))},3743:function(e,t,n){"use strict"
function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,o,i){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=i
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),r=n(0),s=o(r),l=n(3),u=o(l),c=n(18),d=o(c),p=n(449),f=o(p),m=!1
t.default=d.default.create({displayName:"ItemTextGroup",propTypes:{section:u.default.object.isRequired,itemBinding:u.default.object.isRequired,className:u.default.string,binding:u.default.object.isRequired,upperChildrenPosition:u.default.bool},shouldComponentUpdateOverride:function(){return!0},renderChildren:function(e){return a("div",{className:e},void 0,this.props.children)},_onChange:function(){if(this.props.onChange)return this.props.onChange()},render:function(){var e=void 0,t=void 0,n=void 0,o=this.props.section,r=this.props.itemBinding,l=null==this.props.showItemSubtitle||this.props.showItemSubtitle,u=this.props.deprecateItemSubtitle,c=this.props.upperChildrenPosition,d=null!=this.props.className?this.props.className:"",p=this.props.hideTextGroupTitle
if(!o)throw new Error("ItemTextGroup is expecting a section prop!")
if(!r)throw new Error("ItemTextGroup is expecting an itemBinding prop!")
if(l){var g=o.getThemeFeature("itemSubtitleDefaultStyle"),h=g?{defaultStyle:g}:h={}
n=a("div",{className:"s-item-subtitle"},void 0,s.default.createElement(f.default,i({tagName:"h6",textType:"body"},h,o.getComponentProps("text2",r),{onChange:this._onChange})))
e="text3"
t="text1 text2 text3"}else{n=null
e="text2"
t="text1 text2"}var v=o.sbUniformTextAlignment(t,{parentBinding:r})
return o.sbAnyHasContent(t,{parentBinding:r})||this.props.children?a("div",{className:"s-item-text-group "+d},void 0,c&&this.renderChildren(v),o.sbHasContent("text1",{parentBinding:r})&&!p&&a("div",{className:"s-item-title"},void 0,s.default.createElement(f.default,i({tagName:"h3",textType:"heading"},o.getComponentProps("text1",r),{onChange:this._onChange}))),function(){if(l){if(!u)return n
!m&&o.sbHasContent("text2",{parentBinding:r,showOnly:!1})&&(m=!0)
if(m)return n}}(),a("div",{className:"s-item-text"},void 0,s.default.createElement(f.default,i({tagName:"div",textType:"body"},o.getComponentProps(e,r),{onChange:this._onChange}))),!c&&this.renderChildren(v)):null}})
e.exports=t.default},3744:function(e,t,n){"use strict"
function o(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n
return e}function i(){return v}function a(e){return Object.assign({},v,e)}function r(e,t,n){var o=(0,h.getThemeFeature)("narrowMedia")&&11!==e,i=o?14:16,r=16,s=o?e-1:e,l=o?8:s,u=o?10:16
if(11===e)u=l=14
else if("onyx_new"===y&&"right"===t){i=15
u=15}if("persona"===y){i=12
r=12
u=12}var c=(0,h.generateColumnClassWithOffset)(s,i,r),d=(0,h.generateColumnClass)(i-s),p=(0,h.generateColumnClassWithOffset)(l,l,r),f=(0,h.generateColumnClassWithOffset)(u,u,r),m="half-offset-right",g="half-offset-left"
11!==s&&9!==s||(m=g="")
if("persona"===y)switch(t){case"right":return function(){return a({repeatableClass:"s-media-right s-layout-mediaRight",innerItemClass:(0,h.generateColumnClass)(12),mediaClass:c+" s-right-in-row right omega",singleMediaClass:p+" s-right-in-row right alpha omega",textClass:d+" s-left-in-row right alpha",singleTextClass:f+" s-left-in-row right alpha omega",textInnerClass:m,buttonClass:n?"s-text-button":""})}
case"alt":return function(){return a({repeatableClass:"s-media-alt s-layout-alt",innerItemClass:(0,h.generateColumnClass)(12),mediaClass:function(e,t){return c+" "+(t%2?"s-right-in-row right omega":"s-left-in-row alpha")},singleMediaClass:function(e,t){return p+" "+(t%2?"s-right-in-row right alpha omega":"s-left-in-row alpha omega")},textClass:function(e,t){return d+" "+(t%2?"s-left-in-row right alpha":"s-right-in-row omega")},singleTextClass:function(e,t){return f+" "+(t%2?"s-left-in-row right alpha omega":"s-right-in-row alpha omega")},textInnerClass:function(e,t){return t%2?m:g},buttonClass:n?"s-text-button":""})}}switch(t){case"left":return function(){return a({repeatableClass:"s-media-left s-layout-mediaLeft",mediaClass:c+" s-left-in-row",singleMediaClass:p+" s-left-in-row",textClass:d+" s-right-in-row",singleTextClass:f+" s-right-in-row",textInnerClass:g,buttonClass:n?"s-text-button":""})}
case"right":return function(){return a({repeatableClass:"s-media-right s-layout-mediaRight",mediaClass:c+" s-right-in-row right",singleMediaClass:p+" s-right-in-row right",textClass:d+" s-left-in-row right",singleTextClass:f+" s-left-in-row right",textInnerClass:m,buttonClass:n?"s-text-button":""})}
case"alt":return function(){return a({repeatableClass:"s-media-alt s-layout-alt",mediaClass:function(e,t){return c+" "+(t%2?"s-right-in-row right":"s-left-in-row")},singleMediaClass:function(e,t){return p+" "+(t%2?"s-right-in-row right":"s-left-in-row")},textClass:function(e,t){return d+" "+(t%2?"s-left-in-row right":"s-right-in-row")},singleTextClass:function(e,t){return f+" "+(t%2?"s-left-in-row right":"s-right-in-row")},textInnerClass:function(e,t){return t%2?m:g},buttonClass:n?"s-text-button":""})}}}function s(e){function t(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
return{left:r(e.mediaColumns,"left",t),right:r(e.mediaColumns,"right",t),alt:r(e.mediaColumns,"alt",t)}}return{text:t(),button:t(!0)}}function l(e,t){var n=e,o=n.getRepeatableBinding("repeatable1").sub(t),i=""
i=(0,h.getThemeFeature)("leftAlignColumnsMedia")?"text1":"text1 text2 text3"
var a=n.sbUniformTextAlignment(i,{parentBinding:o})
return"glow"===y?"s-mhi "+a+" fourteen columns offset-one":"s-mhi "+a}function u(e){return e<2?"s-mh":function(t){var n=t,o=n.getRepeatableBinding("repeatable1"),i=""
if((0,h.getThemeFeature)("leftAlign")){o.get().size<e&&(i=n.sbUniformTextAlignment("text1 text2"))}return"s-mh "+i}}function c(e){return{text:function(){return a(e)},button:function(){return a(g.default.extend({},e,{buttonClass:"s-text-button"}))}}}function d(e){return c({repeatableClass:u(e.columnsNum),itemClass:(0,h.generateItemClassByColumnsNum)(e.columnsNum),mediaClass:l})}function p(){return c({repeatableClass:u(1)+" s-layout-normal",innerItemClass:(0,h.generateItemClassByColumnsNum)(1).replace("no-float","")+("persona"===y?"":" center"),mediaClass:l})}Object.defineProperty(t,"__esModule",{value:!0})
var f,m=n(2),g=function(e){return e&&e.__esModule?e:{default:e}}(m),h=n(679),v={repeatableClass:"",itemClass:"",innerItemClass:"",mediaClass:"",singleMediaClass:"",textClass:"",singleTextClass:"",textInnerClass:"",buttonClass:""},y=(0,h.getThemeName)(),b={two:d({columnsNum:2}),three:d({columnsNum:3}),four:d({columnsNum:4}),five:d({columnsNum:5}),six:d({columnsNum:6})},_={default:{col:b,row:{small:s({mediaColumns:4}),medium1:s({mediaColumns:6}),medium2:s({mediaColumns:8}),large:s({mediaColumns:10})},media:{center:p(),left:{text:r(11,"left"),button:r(11,"left",!0)},right:{text:r(11,"right"),button:r(11,"right",!0)},alt:{text:r(11,"alt"),button:r(11,"alt",!0)}}},persona:{col:b,row:{small:s({mediaColumns:3}),medium1:s({mediaColumns:4}),medium2:s({mediaColumns:6}),large:s({mediaColumns:8})},media:{center:p(),left:{text:r(9,"left"),button:r(9,"left",!0)},right:{text:r(9,"right"),button:r(9,"right",!0)},alt:{text:r(9,"alt"),button:r(9,"alt",!0)}}},perspective:function(){var e={col:{three:{text:function(){return a({itemClass:"s-persp-column third"})},button:function(){return a({itemClass:"s-persp-column third",buttonClass:"s-text-button s-persp-column"})}}},row:{large:{text:function(){return a({mediaClass:"s-persp-column half",textClass:"s-persp-column half"})},button:function(){return a({mediaClass:"s-persp-column half",textClass:"s-persp-column half",buttonClass:"s-text-button"})}}},media:{center:p()}}
return{center:e,mediaLeft:e,mediaRight:e}}()},w=(0,h.getLayoutMapping)(_),N={default:(f={"columns-2col":"col-two-text","columns-3col":"col-three-text","columns-4col":"col-four-text","columns-5col":"col-five-text","columns-6col":"col-six-text","columns-":"col-five-text","media-normal":"media-center-text","media-mediaLeft":"media-left-text","media-mediaRight":"media-right-text","media-alt":"media-alt-text","media-":"media-center-text"},o(f,"media-alt","media-alt-text"),o(f,"rows-mediaLeft","row-medium1-text-left"),o(f,"rows-mediaRight","row-medium1-text-right"),o(f,"rows-alt","row-medium1-text-alt"),o(f,"rows-","row-medium1-text-left"),f),perspective:{"columns-mediaLeft":"mediaLeft-col-three-text","columns-mediaRight":"mediaRight-col-three-text","columns-center":"center-col-three-text","columns-":"mediaLeft-col-three-text","rows-mediaLeft":"mediaLeft-row-large-text","rows-mediaRight":"mediaRight-row-large-text","rows-center":"center-row-large-text","rows-":"mediaLeft-row-large-text","media-mediaLeft":"mediaLeft-media-center-text","media-mediaRight":"mediaRight-media-center-text","media-center":"center-media-center-text","media-":"mediaLeft-media-center-text"}},E={default:{col:function(e){return"col-three-"+e},row:function(e){return"row-medium1-"+e+"-left"},media:function(e){return"media-center-"+e}},perspective:{col:function(e,t){return e+"-col-three-"+t},row:function(e,t){return e+"-row-large-"+t},media:function(e,t){return e+"-media-center-"+t}}}
t.default={getDefaultLayoutKey:function(e,t,n){var o=void 0
t=t||""
if((w[e]||w.default)[t])return t
n&&(o=(N[e]||N.default)[n+"-"+t])
if(!o){var i=-1!==t.indexOf("button")?"button":"text",a="perspective"===e?1:0,r=t.split("-"),s=(E[e]||E.default)[r[a]]
o="perspective"===e?s?s(r[0],i):"":s?s(i):""}o||(o=Object.keys(w[e]||w.default)[0])
return o},getLayout:function(e,t){return(w[e]||w.default)[t]||v||i},getLayoutOptions:function(e){return _[e]||_.default}}
e.exports=t.default},3745:function(e,t,n){"use strict";(function(o){function i(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
t.default=e
return t}function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var r=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,o,i){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=i
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},l=n(0),u=a(l),c=n(3),d=a(c),p=n(67),f=a(p),m=n(136),g=a(m),h=n(3604),v=a(h),y=n(21),b=a(y),_=n(6),w=a(_),N=n(2),E=a(N),x=n(18),k=a(x),C=n(19),S=(a(C),n(20)),P=(a(S),n(4)),L=a(P),O=n(7),T=(a(O),n(681)),M=a(T),I=n(41),B=i(I),D=n(1240),j=(a(D),n(58)),A=i(j),H=n(88),R=a(H),F=n(42),U=a(F),V=n(445),z=a(V),W=n(1239),K=a(W),G=n(671),$=a(G),Y=n(169),q=a(Y),J=n(689),X=a(J),Q=n(260),Z=a(Q),ee=n(102),te=(a(ee),n(75)),ne=a(te),oe=n(1238),ie=n(257),ae=(a(ie),n(36)),re=a(ae),se=n(28),le=a(se),ue={data:{url:$.default.url,textColor:d.default.oneOf(["dark","light","overlay"]),sizing:d.default.oneOf(["cover","contain","tile","center"]),backgroundVariation:d.default.string,videoUrl:d.default.string,videoHtml:d.default.string,stockKey:d.default.string,binding:d.default.object,h:d.default.number,w:d.default.number,s:d.default.number,storageKey:d.default.string,storage:d.default.oneOf(["ali","c","qn","s"]),format:d.default.oneOf(["jpg","jpeg","png","gif","bmp","ico"]),bgClassNames:d.default.array,userClassName:d.default.string,focus:d.default.object},designer:{size:d.default.string,assetType:d.default.string,minimal:d.default.bool,allowColors:d.default.bool,footerSection:d.default.bool}},ce=function(){return{data:{url:"",textColor:"light",sizing:"cover",backgroundVariation:"",videoUrl:"",videoHtml:"",userClassName:"",bgClassNames:[]},designer:{size:"background",assetType:"background",minimal:!1,allowColors:!0,footerSection:!1}}},de=k.default.createPageComponent({displayName:"BackgroundEditor",mixins:[(0,U.default)("editor"),K.default,z.default],bobcatPropTypes:ue,getBobcatDefaultProps:ce,componentWillMount:function(){this.backgroundItemSelectionHandlers={image:null,video:null}
this.initMeta({currentType:L.default.getInChina()||!this._hasVideoBg()?"image":"video",showVideoPanel:!1,showFocusPanel:!1,showFocusIndicator:!1,deltaPosition:{x:0,y:0},imageSize:{width:0,height:0,naturalWidth:0,naturalHeight:0}})},componentDidMount:function(){this.getData("style")&&this.updateData({sizing:this.getData("style")})
if(this.getData("selectedClassName")){var e=this.getData("selectedClassName");-1!==e.indexOf("strikingly-dark-text")?this.updateData({textColor:"dark"}):-1!==e.indexOf("strikingly-text-overlay")?this.updateData({textColor:"overlay"}):this.updateData({textColor:"light"})}},componentDidUpdate:function(e){"normal"===e._state&&"editor"===this.props._state&&(0,w.default)(this.refs.componentDOM).closest(".s-section-editor-wrapper").addClass("background-editor-opened")
if("editor"===e._state&&"normal"===this.props._state){(0,w.default)(this.refs.componentDOM).closest(".s-section-editor-wrapper").removeClass("background-editor-opened")
this._setShowVideoPanel(!1)
this._setShowFocusPanel(!1)}},componentWillUnmount:function(){},_hasImage:function(){var e=this.props,t=e.wasMinimal,n=(e.defaultValue,e.useImage)
if(!0===n)return!0
if(!1===n)return!1
if(void 0===n){if(t&&!L.default.getBackgroundForAllSections())return!1
var o=A.createImage(this.dtProps).getUrl(this.dsProps.size)
this._dataBeforePreview&&(o=A.createImage(this._dataBeforePreview).getUrl(this.dsProps.size))
return B.imageHasContent(o)}},_hasVideoBg:function(){var e=this.dtProps.videoHtml
this._dataBeforePreview&&(e=this._dataBeforePreview.videoHtml)
return Boolean(e)},_hasOverlay:function(){return"overlay"===this.dtProps.textColor},_needToShowRemoveButton:function(){return this._hasImage()||this._hasVideoBg()},_changePositionOfAddVideoPanel:function(){var e=(0,w.default)(this.refs.componentDOM),t=e.find(".bg-video-panel"),n=e.find(".add-video-btn")
t.css({top:n.closest(".clearfix").position().top-31+"px"})},_storePreviewData:function(){re.default.isBackgroundPreviewOn=!0
this.updateMeta({isPreview:!0})
this._dataBeforePreview=this.getDefaultBinding().toJS()},_clearPreviewData:function(){re.default.isBackgroundPreviewOn=!1
this.updateMeta({isPreview:!1})
this._dataBeforePreview&&(this._dataBeforePreview=null)},_restorePreviewData:function(){re.default.isBackgroundPreviewOn=!1
this.updateMeta({isPreview:!1})
if(this._dataBeforePreview){this.updateData(R.default.deleteMeta(this._dataBeforePreview))
this._dataBeforePreview=null}},_getImageProps:function(){return E.default.extend({},this.props,{storePreviewData:this._storePreviewData,clearPreviewData:this._clearPreviewData,restorePreviewData:this._restorePreviewData,showImageOptions:this._hasImage()&&!this._hasVideoBg(),showDefaultColor:this._isAllowUserClassName()})},_isAllowUserClassName:function(){return!(!this.dtProps.bgClassNames.length||!this.dsProps.allowColors)},_getVideoProps:function(){return E.default.extend({},this.props,{storePreviewData:this._storePreviewData,clearPreviewData:this._clearPreviewData,restorePreviewData:this._restorePreviewData,hasVideo:this._hasVideoBg(),changePositionOfAddVideoPanel:this._changePositionOfAddVideoPanel})},onSetType:function(e){this._onClickSwitchType(e)},_onChangeUrlByAdmin:function(e){this.updateData({url:e.target.value})},_onChangeOverlayByAdmin:function(e){this.updateData({textColor:e.target.checked?"light":"overlay"})
this.savePage()},_onClickSwitchType:function(e){this._setCurrentType(e)
this.forceUpdate()},_onClickRemove:function(){this.updateData(Object.assign({},(0,oe.dataForEmptyBackground)(),{useImage:!1}))
this._clearPreviewData()
this.savePage()},_onClickSave:function(){this.savePage()
this.updateState("normal")},_notifyNative:function(){return null},_rotateClassNames:function(e){var t=this.dtProps,n=t.bgClassNames,o=t.userClassName,i=""
if(o){var a=n.indexOf(o)
i=M.default.getSectionBackgroundByIndex(a+1,n)}else i=n[e]
this.updateData({userClassName:i})},_onClickChangeColor:function(){var e=(0,w.default)(this.refs.componentDOM).closest(".s-section"),t=e.css("backgroundColor"),n=""
this._rotateClassNames(0)
n=e.css("backgroundColor")
t===n&&this._rotateClassNames(1)
this.savePage()},_onToggleCompression:function(){this.updateData({noCompression:!this.props.noCompression})},onSetBackgroundItemSelectionHandlers:function(e,t){this.backgroundItemSelectionHandlers[e]=t
this.forceUpdate()},renderNativeWeb:function(){var e=this,t=this._hasImage(),n=t?{position:"static"}:{}
return u.default.createElement("div",{className:"s-component s-background",ref:"componentDOM",style:n},t?r("div",{className:"s-background-editor-wrapper",onClick:function(t){return e._notifyNative(t,ne.default.BACKGROUND_CLICK_MESSAGE)}}):r("div",{className:"s-component-editor"},void 0,r("div",{className:"native-add-background-button",onClick:function(t){return e._notifyNative(t,ne.default.CLICK_ADD_BACKGROUND_MESSAGE)}},void 0,o("Editor|Background"))))},renderMinimalEditor:function(){return u.default.createElement("div",{className:"s-component s-background",ref:"componentDOM"},r("div",{className:"s-component-editor minimal-size",title:o("Change background color"),onClick:this._onClickChangeColor},void 0,r("div",{className:"title clickable"},void 0,r("div",{className:"s-current-bg-thumbnail "+this.dtProps.userClassName}))))},renderFullBackgroundEditor:function(){var e=this,t=f.default,i=b.default.DOM.input,a=n(3775),l=n(3778),c=L.default.getInChina(),d=L.default.getIsSxl(),p=this._getCurrentType(),m=le.default.isAdmin(),h=le.default.isSupport(),y=this.isIframeEditing()
return u.default.createElement("div",{ref:"componentDOM",className:"s-component s-background"+this.addIframeEditingClass()},r("div",{className:"s-component-editor dark-bg",onClick:this.onToggleMobileViewEditorBox},void 0,r(v.default,{className:"title small center clickable"+(y?" hidden":""),onTap:this.toggleEditor},void 0,this.isState("editor")?r("div",{className:"minus"},void 0,r("i",{className:"entypo-down-open-mini"})):r("div",{className:"plus"},void 0,r("i",{className:"entypo-right-open-mini"})),o("Background")),r(t,{},void 0,this.isState("editor")?r(q.default,{component:g.default.div,className:"main-editor"},void 0,c||d?null:r("div",{className:"s-layout-menu-field"},void 0,r(X.default,{labelLeft:o("IMAGE"),labelRight:o("VIDEO"),checkedLeft:"image"===p,checkedRight:"video"===p,onClickLeft:function(){return e._onClickSwitchType("image")},onClickRight:function(){return e._onClickSwitchType("video")}})),u.default.createElement(a,s({visible:"image"===p},this._getImageProps(),{onSetBackgroundItemSelectionHandlers:this.onSetBackgroundItemSelectionHandlers,backgroundItemSelectionHandlers:this.backgroundItemSelectionHandlers})),u.default.createElement(l,s({visible:"video"===p},this._getVideoProps(),{onSetBackgroundItemSelectionHandlers:this.onSetBackgroundItemSelectionHandlers,backgroundItemSelectionHandlers:this.backgroundItemSelectionHandlers})),this._needToShowRemoveButton()?r("div",{className:"clearfix mb"},void 0,r("div",{className:"s-btn small no-margin dark-gray",onClick:this._onClickRemove},void 0,o("Remove"))):null,r("div",{className:"clearfix"},void 0,r("div",{className:"s-btn green small done-button no-margin",onClick:this._onClickSave},void 0,o("Save"))),m||h?r("div",{style:{overflow:"hidden"}},void 0,r("div",{className:"separator"},void 0,r("hr",{})),"ADMIN ONLY:",r("br",{}),r(i,{type:"text",name:"url",value:this.dtProps.url,onChange:this._onChangeUrlByAdmin}),this._hasVideoBg()?r("div",{},void 0,r(i,{type:"checkbox",checked:!this._hasOverlay(),onChange:this._onChangeOverlayByAdmin}),"Check to remove overlay"):"image"===p&&r("div",{style:{marginTop:"30px"},rel:"tooltip-left",title:o("Editor|Notice: No compression will make image slower to load!")},void 0,r(Z.default,{label:"No compression",checked:this.props.noCompression,onToggle:this._onToggleCompression}))):null):null)))},render:function(){var e=L.default.getBackgroundForAllSections()
return this.dsProps.minimal?e&&!this.dsProps.footerSection?this.renderFullBackgroundEditor():this._isAllowUserClassName()?this.renderMinimalEditor():null:this.renderFullBackgroundEditor()}})
de.bobcatPropTypes=ue
de.getBobcatDefaultProps=ce
t.default=de
e.exports=t.default}).call(t,n(1))},3746:function(e,t,n){"use strict"
function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
t.default=void 0
var s=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,o,i){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=i
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n]
o.enumerable=o.enumerable||!1
o.configurable=!0
"value"in o&&(o.writable=!0)
Object.defineProperty(e,o.key,o)}}return function(t,n,o){n&&e(t.prototype,n)
o&&e(t,o)
return t}}(),u=n(0),c=o(u),d=n(16),p=o(d),f=function(e){function t(){i(this,t)
return a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}r(t,e)
l(t,[{key:"render",value:function(){var e=this.props,t=e.keys,n=e.selectedKey,o=e.textMapping,i=e.className,a=e.onSelect,r=e.labelText
return s("div",{className:"s-layout-menu-field layout-level-button dark-bg "+(i||"")},void 0,r&&s("div",{className:"s-layout-menu-label"},void 0," ",r," "),s("div",{},void 0,t.map(function(e){return s("div",{className:(0,p.default)("s-btn small dark-gray no-margin",{selected:n===e}),onClick:function(){return a(e)}},e,o(e))})))}}])
return t}(c.default.Component)
t.default=f
e.exports=t.default},3747:function(e,t,n){"use strict"
function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,o,i){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=i
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),r=n(0),s=o(r),l=n(15),u=o(l),c=n(6),d=o(c),p=n(7),f=o(p),m=n(1237),g=o(m),h=n(1269),v=o(h),y=n(3612),b=o(y),_=n(3611),w=o(_),N=n(3743),E=o(N),x=n(3741),k=o(x),C={mixins:[k.default],displayName:"NewMediaSection",componentWillMount:function(){var e=f.default.getThemeName(),t=this._getLayoutVariation(),o=this.getDefaultBinding().get("template_name")
t.split("-").length>=2&&("perspective"===e?["mediaLeft","mediaRight","center"].includes(t.split("-")[0])||(t="center-"+t):["mediaLeft","mediaRight","center"].includes(t.split("-")[0])&&(t=t.split("-").slice(1).join("-")))
var i=n(3744),a="new_media"===o?"":o
this._getLayoutBinding().sub("layout_variation").set(i.getDefaultLayoutKey(e,t,a))},componentDidUpdate:function(){if(-1===this._getLayoutVariation().indexOf("col")){(0,d.default)(u.default.findDOMNode(this)).find(".s-mh-nudge").css({"padding-top":0});(0,d.default)(u.default.findDOMNode(this)).find(".s-item-media-wrapper").css({"line-height":"","min-height":""})}},_getLayoutOptions:function(){var e=f.default.getThemeName()
return n(3744).getLayoutOptions(e)},_getSectionType:function(){var e=f.default.getThemeName(),t=0
"perspective"===e&&(t=1)
var n=void 0
switch(this._getLayoutVariation().split("-")[t]){case"col":n="s-columns-section"
break
case"row":n="s-rows-section"
break
case"media":n="s-media-section"}return n},_getContentAlignmentClass:function(){return this.sbUniformTextAlignment("text1 text2")},_renderRepeatable:function(e){var t=this,o=n(3744),r=f.default.getThemeName(),l=this._getLayoutVariation(),u=this.getComponentBinding(e),c=this.getRepeatableBinding(e),d=this._getLayoutBinding(),p=void 0
"function"==typeof o.getLayout(r,l)&&(p=o.getLayout(r,l)(this))
var m=p,h=m.repeatableClass
"function"==typeof h&&(h=h(this))
var y=this.getComponentProps("repeatable1")
r=f.default.getThemeName()
var _=0
"perspective"===r&&(_=1)
var N="media"===this._getLayoutVariation().split("-")[_],x="fresh"===r&&"s-columns-section"===this._getSectionType(),k="s-rows-section"===this._getSectionType(),C=k&&this.getThemeFeature("verticalAlignRowsSection")
return s.default.createElement(b.default,i({className:h+("editor"===u.get("_state")?" s-arranging":"")},y),u.get("list").map(function(e,n){var o=c.sub(n),l={default:o,layout:d},u=t.sbHasContent("media1",{parentBinding:o}),f=t.sbAnyHasContent("text1 text2 text3",{parentBinding:o}),m=t.sbHasContent("button1",{parentBinding:o}),h="editor"!==t.getComponentBinding("button1",o).get("_state")&&!t.sbHasContent("button1",{parentBinding:o,showOnly:!1}),y=f||m&&p.buttonClass,b=p,_=b.itemClass,k=b.textClass,S=b.innerItemClass,P=b.mediaClass,L=b.singleMediaClass,O=b.singleTextClass,T=b.buttonClass,M=b.textInnerClass
"function"==typeof _&&(_=_(t,n))
"function"==typeof S&&(S=S(t,n))
S+=C?" s-rva":""
"function"==typeof P&&(P=P(t,n))
"function"==typeof L&&(L=L(t,n))
L=L||P
"function"==typeof k&&(k=k(t,n))
"function"==typeof O&&(O=O(t,n))
O=O||k
"function"==typeof T&&(T=T(t,n))
"function"==typeof M&&(M=M(t,n))
var I="s-item-media-wrapper "
I+=y?P:L
I+=C?" s-rva-media":""
k=u?k:O
k+=C?" s-rva-text":""
"glow"===r&&(k=k||"fourteen columns offset-one")
return s.default.createElement(w.default,i({className:_,index:n,binding:l},t._getRepeatableItemProps(c,n)),a("div",{className:"clearfix"},void 0,a("div",{className:S},void 0,u&&a("div",{className:I},void 0,a("div",{className:"s-item-media-group"},void 0,s.default.createElement(g.default,i({size:N?"large":"medium",isFreshColumn:x},t.getReduxComponentProps("media1",o))))),y&&a("div",{className:k},void 0,a(E.default,{deprecateItemSubtitle:N,section:t,itemBinding:o,binding:o,className:u?M:""},void 0,T&&m&&a("div",{className:T+(h?" s-placeholder-button":"")},void 0,s.default.createElement(v.default,i({},t.getComponentProps("button1",o),{smallButton:!0}))))))))}).toArray())},render:function(){return this.getTemplate().apply(this)}}
t.default=C
e.exports=t.default},3748:function(e,t,n){"use strict"
function o(){return c}function i(e){return Object.assign({},c,e)}function a(e){return{normal:e,full:e}}function r(e){return d[e]||d.default}Object.defineProperty(t,"__esModule",{value:!0})
var s=n(2),l=function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
t.default=e
return t}(s),u=n(679),c={outerContainerClass:"container",innerContainerClass:"sixteen columns",outerMediaClass:"",innerMediaClass:"",textClass:"",buttonClass:"",isSubtitleOnBottom:!0}
if("perspective"===(0,u.getThemeName)()){c.outerContainerClass="s-persp-container"
c.innerContainerClass="s-persp-column"}var d={default:{center:function(e){function t(e){return{innerMediaClass:"media-wrapper "+e.sbUniformTextAlignment("text1 text2"),buttonClass:"s-button-group "+e.sbUniformTextAlignment("text1 text2")}}return{subTop:a(function(n){return i(l.extend({},e,t(n),{isSubtitleOnBottom:!1}))}),bottom:a(function(n){return i(l.extend({},e,t(n),{}))}),right:a(function(n){return i(l.extend({},e,t(n),{outerMediaClass:"sixteen columns media-outer",textClass:"ten columns no-float",buttonClass:"six columns no-float s-button-group",outerContainerClass:"container s-layout-skinny",innerContainerClass:""}))})}}({})},perspective:{center:function(e){function t(e){return{innerMediaClass:"media-wrapper "+e.sbUniformTextAlignment("text1 text2"),outerContainerClass:"s-persp-container s-layout-center",buttonClass:"s-button-group "+e.sbUniformTextAlignment("text1 text2")}}return{subTop:a(function(n){return i(l.extend({},e,t(n),{isSubtitleOnBottom:!1}))}),bottom:a(function(n){return i(l.extend({},e,t(n),{}))})}}({})}},p=(0,u.getLayoutMapping)(d),f={default:{normal:"center-subTop-full",subBottom:"center-bottom-full",withMedia:"center-bottom-full",center:"center-bottom-normal",skinny:"center-right-normal",mediaTop:"center-bottom-normal"}},m={default:"center-subTop-normal"}
t.default={getDefaultLayoutKey:function(e,t){t=t||""
var n=(f[e]||f.default)[t];(p[e]||p.default)[t]&&(n=t)
n||(n=(0,u.getClosestKey)(r(e),t,3))
if(!n){t.indexOf("button")
n=m.default}return n},getLayout:function(e,t){return(p[e]||p.default)[t]||o},getLayoutOptions:r}
e.exports=t.default},3749:function(e,t,n){"use strict"
function o(){return d}function i(e){return Object.assign({},d,e)}function a(){var e="columns half-fixed no-float small-icons"
"perspective"===p&&(e="s-persp-column half-fixed no-float small-icons")
return i({itemClass:e,naturalImage:!0})}function r(e){var t=e.get().size,n=(0,c.getThemeFeature)("narrowMedia"),o=""
o=t<=1?n?"third":"sixteen":2==t?n?"third":"eight":3==t?"third":4==t?"four":"three"
"persona"===p&&(o="three")
"ion"===p&&(o="four")
o+=" columns half-fixed no-float"
return i({itemClass:o,naturalImage:!1})}function s(e,t){var n=t.get().size,o="half";(3===n&&"center"===e||n>4)&&(o="third")
o+=" half-fixed s-persp-column"
return i({itemClass:o,naturalImage:!1})}Object.defineProperty(t,"__esModule",{value:!0})
var l=n(2),u=function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
t.default=e
return t}(l),c=n(679),d={itemClass:"columns half-fixed no-float",naturalImage:!0},p=(0,c.getThemeName)(),f={default:{col:r,natural:a},perspective:function(){var e=function(e){return{col:u.curry(s)(e)}}
return{center:e("center"),mediaLeft:e("left"),mediaRight:e("right")}}()},m=(0,c.getLayoutMapping)(f),g={perspective:{mediaLeft:"mediaLeft-col",mediaRight:"mediaRight-col",center:"center-col"}}
t.default={getDefaultLayoutKey:function(e,t,n){var o=void 0
t=t||""
if((m[e]||m.default)[t])return t
n&&(o=(g[e]||g.default)[n+"-"+t])
o||(o=Object.keys(m[e]||m.default)[0])
return o},getLayout:function(e,t){return(m[e]||m.default)[t]||d||o},getLayoutOptions:function(e){return f[e]||f.default}}
e.exports=t.default},3750:function(e,t,n){"use strict"
function o(){return d}function i(e){return Object.assign({},d,e)}function a(e,t){return function(){var n="right"===e?"right":"",o="container s-rva s-layout-"+u.default.camelCase(t+"-"+e),a="noImage"!=e,r="",s="",l=""
if("noImage"===e)r="s-rva-text sixteen columns"
else{l="right"===e?"half-offset-left":"half-offset-right"
r="s-rva-text eight columns "+n
s="s-rva-media eight columns "+n}return i({layoutClass:o,textClass:r,textOffsetClass:l,mediaClass:s,type:t,showImage:a})}}function r(e){return{left:a("right",e),right:a("left",e),noImage:a("noImage",e)}}function s(e){return{left:{swap:function(){return i(Object.assign(r(e).left(),{type:e,swapTitle:!0}))},unswap:function(){return i(Object.assign(r(e).left(),{type:e,swapTitle:!1}))}},right:{swap:function(){return i(Object.assign(r(e).right(),{type:e,swapTitle:!0}))},unswap:function(){return i(Object.assign(r(e).right(),{type:e,swapTitle:!1}))}},noImage:{swap:function(){return i(Object.assign(r(e).noImage(),{type:e,showImage:!1,swapTitle:!0}))},unswap:function(){return i(Object.assign(r(e).noImage(),{type:e,showImage:!1,swapTitle:!1}))}}}}Object.defineProperty(t,"__esModule",{value:!0})
var l=n(2),u=function(e){return e&&e.__esModule?e:{default:e}}(l),c=n(679),d={layoutClass:"",mediaClass:"",textClass:"",textOffsetClass:"",type:"",showImage:!0},p={button:{left:function(){return i({type:"button"})},right:function(){return i({type:"button"})},noImage:function(){return i({type:"button",showImage:!1})}},images:{left:function(){return i({type:"images"})},right:function(){return i({type:"images"})},noImage:function(){return i({type:"images",showImage:!1})}},signup:{left:function(){return i({type:"signup"})},right:function(){return i({type:"signup"})},noImage:function(){return i({type:"signup",showImage:!1})}}},f={button:s("button"),images:s("images"),signup:s("signup")},m={default:{button:r("button"),images:r("images"),signup:r("signup")},persona:p,perspective:p,glow:f},g=(0,c.getLayoutMapping)(m),h={default:{buttonRight:"button-left",signupRight:"signup-left",imagesRight:"images-left",buttonLeft:"button-right",signupLeft:"signup-right",imagesLeft:"images-right"}}
t.default={getDefaultLayoutKey:function(e,t,n){t=t||""
var o=(h[e]||h.default)[t];(g[e]||g.default)[t]&&(o=t)
if("glow"===e){o||(-1!==t.indexOf("button")?o="button-left-swap":-1!==t.indexOf("signup")?o="signup-left-swap":-1!==t.indexOf("images")&&(o="images-left-swap"))
o||"signup_form"!==n||(o="signup-noImage-swap")}else{o||(-1!==t.indexOf("button")?o="button-left":-1!==t.indexOf("signup")?o="signup-left":-1!==t.indexOf("images")&&(o="images-left"))
o||"signup_form"!==n||(o="signup-noImage")}o||(o=Object.keys(g[e]||g.default)[0])
return o},getLayout:function(e,t){return(g[e]||g.default)[t]||o},getLayoutOptions:function(e){return m[e]||m.default}}
e.exports=t.default},3751:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var o=n(2),i=(function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
t.default=e}(o),n(679)),a={itemClass:"columns half-fixed no-float"},r={default:["four","four","four","four","fifth","third","four","four","fifth"],persona:["three","three","three","three","four","four","three","three","four"]},s=(0,i.getThemeName)(),l=function(){return a},u=function(e){return Object.assign({},a,e)},c=function(e,t){var n=e
r[n]||(n="default")
var o=t-1
r[n][o]||(o=r[n].length-1)
return r[n][o]},d=function(e){return e.get().size},p=function(e){var t=d(e),n=[]
n.push(c(s,t))
"persona"===s?5==t||6==t||9==t?n.push("hide-linker-three"):n.push("hide-linker-four"):6==t?n.push("hide-linker-three"):7==t||8==t?n.push("hide-linker-four"):n.push("hide-linker-five")
n.push("columns")
n.push("no-float")
n.push("process-horizontal-layout")
return u({itemClass:n.join(" ")})},f=function(){var e=["eight"]
"perspective"===s?e.push("s-persp-column"):e.push("columns")
e.push("no-float")
e.push("process-vertical-layout")
return u({itemClass:e.join(" ")})},m={default:{horizontal:p,vertical:f}},g=(0,i.getLayoutMapping)(m),h={getDefaultLayoutKey:function(e,t){var n=Object.keys(g[e]||g.default)
return n.includes(t)?t:n[0]},getLayout:function(e,t){return(g[e]||g.default)[t]||a||l},getLayoutOptions:function(e){return m[e]||m.default},getItemSize:d}
t.default=h
e.exports=t.default},3752:function(e,t,n){"use strict"
function o(e,t){var n=a.assign({},e,t)
e.hasOwnProperty("style")&&(n.style=a.defaults(n.style,e.style))
e.hasOwnProperty("className")&&t.hasOwnProperty("className")&&(n.className=t.className+" "+e.className)
return n}var i=n(0),a=n(2),r=(n(3784),n(3738)),s=(n(3740),n(3739)),l=n(3610)
e.exports=function(){return i.createElement(s,o({className:"s-new-media-section s-section "+this._getSectionType()+"  "+this._getContentAlignmentClass()},this.getThemeFeature("disableBackgrounds")?{}:this.getBackgroundProps("background1",null,!0)),null,!this.getThemeFeature("disableBackgrounds")&&this.hasBackgroundVideo("background1")?i.createElement(l,this.getBackgroundProps("background1")):null,i.createElement("div",{className:"container"},i.createElement("div",{className:"columns sixteen"},i.createElement(r,{contentCheck:"repeatable1",section:this,binding:this.getDefaultBinding()})),"\n    ",this._renderRepeatable("repeatable1"),"\n  "))}},3753:function(e,t,n){"use strict";(function(o){function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var a=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,o,i){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=i
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),r=n(0),s=(i(r),n(3)),l=i(s),u={},c=n(15),d=n(3604),p=n(18),f=(n(24),n(2)),m=n(10),g=n(80)
u=p.createPageComponent({displayName:"LayoutSelector",mixins:[g.enableAfterMount()],bobcatPropTypes:{data:{layoutOptions:l.default.array,layoutVariation:l.default.string,binding:l.default.object.isRequired}},getBobcatDefaultProps:function(){return{layoutOptions:[],layoutVariation:null}},componentDidMount:function(){this.props.layoutOptions.length||console.warn("Section has no layout options defined!")},componentDidUpdate:function(e){e.layoutVariation!==this.props.layoutVariation&&window.edit_page.Event.publish("Layout.afterChange",{target:$(c.findDOMNode(this))})},_updateLayout:function(e){return this.updateData({layout_variation:e})},_getLayoutKeys:function(){return f.pluck(this.props.layoutOptions,"key")},_getLayoutIndex:function(){var e=this._getLayoutKeys(),t=this.props.layoutVariation,n=e.indexOf(t)
return t&&-1!==n?n:null},_clickLayout:function(){var e=this._getLayoutKeys(),t=this._getLayoutIndex()
null==t&&(t=0)
this._updateLayout(e[(t+1)%e.length])
m.clickLayout()
m.save()},_layoutStatus:function(){return null!=this._getLayoutIndex()?"ABCDEFGHI"[this._getLayoutIndex()]:"A"},render:function(){return this.props.layoutOptions.length?a("div",{className:"s-component s-layout"},void 0,a("div",{className:"s-component-editor"},void 0,a(d,{className:"center clickable small title",onTap:this._clickLayout,rel:"tooltip-left",title:o("Editor|Switch layout for this section.")},void 0,a("span",{},void 0,o("Layout"),this._layoutStatus()?a("span",{className:"layout-status"},void 0,this._layoutStatus()):void 0)))):null}})
t.default=u
e.exports=t.default}).call(t,n(1))},3754:function(e,t,n){"use strict"
function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,o,i){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=i
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),r=n(0),s=o(r),l=n(11),u=o(l),c=n(7),d=o(c),p=n(1269),f=o(p),m=n(1237),g=o(m),h=n(3738),v=o(h),y=n(3741),b=o(y),_={mixins:[b.default],displayName:"NewTitleSection",componentWillMount:function(){var e=d.default.getThemeName();["normal","subBottom","center","skinny"].includes(this._getLayoutVariation())&&"perspective"!==e&&this.getComponentBinding("media1").sub("image").merge(u.default.fromJS({url:"",thumbnail_url:"",s:null,storage:null,storageKey:null,format:null}))
var t=n(3748)
this._getLayoutBinding().sub("layout_variation").set(t.getDefaultLayoutKey(e,this._getLayoutVariation()))},_getLayoutOptions:function(){var e=d.default.getThemeName()
return n(3748).getLayoutOptions(e)},_getSectionType:function(){var e=d.default.getThemeName(),t="";-1!==this._getLayoutVariation().indexOf("full")&&(t+="s-section-full ")
"persona"===e&&(t+="cta"===this.getDefaultBinding().get("template_name")?"s-cta-section":"s-title-section")
return t},_renderContent:function(){var e=d.default.getThemeName(),t=n(3748),o=void 0
"function"==typeof t.getLayout(e,this._getLayoutVariation())&&(o=t.getLayout(e,this._getLayoutVariation())(this))
var r=o,l=r.outerContainerClass,u=r.innerContainerClass,c=r.outerMediaClass,p=r.innerMediaClass,m=r.textClass,h=r.buttonClass,y=r.isSubtitleOnBottom,b=this.sbHasContent("button1"),_=(this.sbHasContent("button1",{showOnly:!1}),this.sbHasContent("media1")),w="editor"!==this.getComponentBinding("button1").get("_state")&&!this.sbHasContent("button1",{showOnly:!1}),N="editor"!==this.getComponentBinding("media1").get("_state")&&!this.sbHasContent("media1",{showOnly:!1})
return a("div",{className:l,style:{zIndex:3}},void 0,a("div",{className:u},void 0,_&&c&&a("div",{className:c},void 0,a("div",{className:p},void 0,s.default.createElement(g.default,i({},this.getReduxComponentProps("media1"),{showBlackButton:!0})))),_&&!c&&a("div",{className:p+(N?" s-placeholder-button":"")},void 0,s.default.createElement(g.default,i({},this.getReduxComponentProps("media1"),{showBlackButton:!0}))),a(v.default,{className:m,contentCheck:"button1",subtitleOnTop:!y,section:this,binding:this.getDefaultBinding()}),b&&a("div",{className:h+(w?" s-placeholder-button":"")},void 0,s.default.createElement(f.default,this.getComponentProps("button1")))))},render:function(){return this.getTemplate().apply(this)}}
t.default=_
e.exports=t.default},3755:function(e,t,n){"use strict";(function(o){function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var a=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,o,i){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=i
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),r=n(0),s=(i(r),n(3)),l=i(s),u=n(15),c=(i(u),n(1274)),d=i(c),p=n(80),f=i(p),m=n(18),g=i(m),h=n(94),v=i(h),y=n(27),b=(i(y),n(24)),_=i(b),w=function(e,t,n){return g.default.createPageComponent({mixins:[f.default.enableAfterUpdate()],displayName:t,bobcatPropTypes:{data:{text:l.default.string,category:l.default.oneOfType(l.default.string,l.default.number),binding:l.default.object}},getBobcatDefaultProps:function(){return{data:{category:"all"}}},componentWillReceiveProps:function(t){e.getCategories().length&&!e.isCategoryIdExist(t.category)&&this._onChangeCategory({value:"all"})},_createDropdownOptions:function(){var t=this,i=e.getCategories().map(function(e){return{value:e.id,label:e.id.toString()===t.props.category.toString()?a("div",{className:"option selected"},void 0,e.name):a("div",{className:"option"},void 0,e.name)}})
i.length&&"all"!==this.props.category&&i.unshift({value:"all",label:a("div",{className:"option"},void 0,o(n?"Portfolio|All Categories":"Ecommerce|All Categories"))})
return i},_getSelectedCategory:function(t){var i=e.getCategories(),a=i.find(function(e){return e.id.toString()===t.toString()})
return a?a.name:o(n?"Portfolio|All Categories":"Ecommerce|All Categories")},_onChangeCategory:function(e){this.updateData({category:e.value})
this.savePage()
n?_.default.track("Editor - Select Portfolio Section Category"):_.default.track("Editor - Select Ecommerce Section Category")},render:function(){this.observeBinding(e.getCategoriesBinding())
this.observeBinding(e.getSettingsBinding())
return this._createDropdownOptions().length<1?null:a("div",{className:"s-component s-category-selector"},void 0,a("div",{className:"s-component-editor",rel:"tooltip-left",title:o(n?"Portfolio|Select a category for this section.":"Ecommerce|Select a category for this section."),"data-original-title":o(n?"Portfolio|Select a category for this section.":"Ecommerce|Select a category for this section.")},void 0,a(d.default,{options:this._createDropdownOptions(),value:this._getSelectedCategory(this.props.category),onChange:this._onChangeCategory})))}})},N=w(v.default,"EcommerceCategorySelector")
N.createCategorySelector=w
t.default=N
e.exports=t.default}).call(t,n(1))},3756:function(e,t,n){"use strict"
function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=(function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103}(),n(0)),r=o(a),s=n(3),l=o(s),u=n(6),c=o(u),d=n(2),p=o(d),f=n(18),m=o(f),g=n(24),h=o(g),v=n(209),y=o(v),b=n(318),_=o(b),w=n(75),N=o(w),E=n(102),x=o(E),k=n(1273),C=o(k),S=n(454),P=o(S),L=n(3757),O=o(L),T=n(58),M=function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
t.default=e
return t}(T),I=n(686),B=o(I),D=n(153),j=o(D),A=n(36),H=(o(A),n(88)),R=o(H),F=n(7),U=o(F),V=n(42),z=o(V),W=n(3789),K=o(W),G=void 0,$=function(){return p.default.extend({type:"Video"},P.default.Video().toJS())},Y=function(){return p.default.extend({type:"Image"},P.default.Image().toJS())},q=m.default.createPageComponent({displayName:"GalleryList",mixins:[(0,z.default)("editor")],bobcatPropTypes:{data:{binding:l.default.object,sources:l.default.object},designer:{layout:l.default.string,sortableContainment:l.default.string,eagerLoad:l.default.bool}},getBobcatDefaultProps:function(){return{designer:{sortableContainment:"parent"},data:{layout:"normal"},internal:{isArranging:!1}}},componentWillMount:function(){this.initMeta({selectedKey:""})
this._columnsNum=1
var e=_.default.get("forceGalleryItemsNumPerPage")
this._baseItemNum=null!=e?e:50
this._pagesNum=1
this._lastPagesNum=this._pagesNum
this._lastBaseItemNum=this._baseItemNum
this._resizeFn=p.default.debounce(this._resizeFn,10)
this._onClickAddImageFromTop=this._onClickAddImage.bind(this,"top")
this._onClickAddVideoFromTop=this._onClickAddVideo.bind(this,"top")},componentDidMount:function(){this._enableFancyBox()
if(-1===this.props.layout.indexOf("vertical")){this._resizeFn();(0,c.default)(window).on("resize",this._resizeFn)}},componentDidUpdate:function(){if(this._lastPagesNum!==this._pagesNum||this._lastBaseItemNum!==this._baseItemNum){this._enableFancyBox()
this._lastPagesNum=this._pagesNum
this._lastBaseItemNum=this._baseItemNum}},componentWillUnmount:function(){(0,c.default)(window).off("resize",this._resizeFn)},nativeAddImage:function(e){return this._addImage(M.createImage(e.image),e.newItemDirection)},_onNativeClickManage:function(){var e=this.getData("isManagingFromNative")||!1
return this.setData("isManagingFromNative",!e)},_isGalleryEmpty:function(){return 0===this.getData("sources").size},_updateLayoutMeta:function(){var e=(0,c.default)(this.refs.galleryListDOM),t=Math.min(6,Math.max(2,Math.floor(e.width()/180))),n=this._columnsNum,o={2:20,3:30,4:40,5:50,6:60}
if(t!==n){this._columnsNum=t
var i=_.default.get("forceGalleryItemsNumPerPage")
this._baseItemNum=null!=i?i:o[this._columnsNum]}return t!==n},_resizeFn:function(){this._updateLayoutMeta()&&this.forceUpdate()},_needToShowPagination:function(){return this.getData("sources").size>this._pagesNum*this._baseItemNum||1!==this._pagesNum},_onSelectItem:function(e){this.updateMeta(e,"selectedKey")},_onDeleteItem:function(e){return null!=this._visualDelete?this._visualDelete(e):this._deleteItem(e)},_isInNativeWeb:function(){return!1},_onClickNativeAddImage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"bottom",t=n(84)
x.default.setTarget(this)
return x.default.sendMessageToNative({type:N.default.GALLERY_ADD_IMAGE_MESSAGE,payload:C.default.convertToCamel(this.dtProps.type,t.dtPropsBuilder(this)),meta:Object.assign(t.buildMetaFromComponent(this),{direction:e})})},_getGalleryItemProps:function(e){var t=e.get("id"),n=this.getMeta("selectedKey")
return{binding:{default:e},_isAddInIframe:e.get("_isAddInIframe"),path:e._path,dataProps:P.default[e.get("type")](e.get()),onSelectItem:this._onSelectItem,deleteItem:this._onDeleteItem,key:t,selected:t===n,layout:this.props.layout,eagerLoad:this.props.eagerLoad,sideMenuOpened:y.default.getSideMenuOpenState().opened}},_getGalleryClassName:function(){var e=[];-1!==this.props.layout.indexOf("fullWidth")&&e.push("full-width")
Math.min(this._pagesNum*this._baseItemNum,this.getData("sources").size)
e.push("s-gallery-columns-"+this._columnsNum)
return e.join(" ")},_deleteItem:function(e){R.default.deleteRepeatItem({binding:this.getDefaultBinding().sub("sources"),index:e})
this.savePage()},_onReorder:function(e){var t=this.getDefaultBinding().sub("sources")
R.default.reorderRepeatable(e,t)
this.savePage()},_getNewImageProps:function(e){return e.dataToSave()},_addVideo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"bottom",t=this.getData("sources"),n=$()
t=R.default.addRepeatItem({binding:this.getDefaultBinding().sub("sources"),newItem:n,position:"top"===e?0:null})
this.savePage()
return"top"===e?t.first().toJS():t.last().toJS()},_addImage:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"bottom",n=(this.getData("sources"),Y())
p.default.extend(n,e.dataToSave())
R.default.addRepeatItem({binding:this.getDefaultBinding().sub("sources"),newItem:n,position:"top"===t?0:null})
this.savePage()
h.default.track("Editor - Upload Image Gallery")},_onClickAddImage:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"bottom"
this.updateMeta("","selectedKey")
this._pendingTimestamp=null
return G.pick({mode:"multi",initialTabIdx:0,hideTabs:[2],handlers:{itemUploaded:function(n){return e._addImage(n,t)},itemSelected:function(n){return Array.from(n).map(function(n){return e._addImage(n,t)})}},pendingTimestamp:this._pendingTimestamp})},_onClickAddVideo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"bottom",t=this._addVideo(e)
this.updateMeta(t.id,"selectedKey")},_onClickShowMore:function(){this._pagesNum+=1
this.forceUpdate()},_onClickShowLess:function(){this._pagesNum=1
this.forceUpdate();(0,c.default)("body").animate({scrollTop:(0,c.default)(this.refs.galleryListDOM).closest(".s-gallery-section").offset().top},1e3)
if("perspective"===U.default.getTheme().get("name"))return(0,c.default)(window).resize()},_enableFancyBox:function(){var e=this
return n.e(0).then(function(){n(453)
if(!e.isEditMode()){var t=j.default.GALLERY((0,c.default)(e.refs.galleryListDOM))
B.default.transformVideoSrc((0,c.default)(e.refs.galleryListDOM))
return t.fancybox(Object.assign({},B.default.onlyCloseBtnOpts,{baseTpl:B.default.getCustomArrowTpl(),caption:B.default.getCaption,beforeMove:B.default.indicatorBeforeMove,onInit:B.default.indicatorOnInit}))}}.bind(null,n)).catch(n.oe)},_renderForEditor:function(){},_renderForShow:function(){var e=this,t=this._baseItemNum*this._pagesNum,n=this.getDefaultBinding().sub("sources")
return n.get().map(function(o,a){if(a<t){n.sub(a)
return r.default.createElement(O.default,i({index:a},e._getGalleryItemProps(n.sub(a)),{key:o.get("id")}))}})},render:function(){return K.default.apply(this)}})
t.default=q
e.exports=t.default},3757:function(e,t,n){"use strict"
function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n]
o.enumerable=o.enumerable||!1
o.configurable=!0
"value"in o&&(o.writable=!0)
Object.defineProperty(e,o.key,o)}}return function(t,n,o){n&&e(t.prototype,n)
o&&e(t,o)
return t}}(),s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l=function(e,t,n,o){var i,a=arguments.length,r=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o
if("object"===("undefined"==typeof Reflect?"undefined":s(Reflect))&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,o)
else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(r=(a<3?i(r):a>3?i(t,n,r):i(t,n))||r)
return a>3&&r&&Object.defineProperty(t,n,r),r}
Object.defineProperty(t,"__esModule",{value:!0})
var u=n(0),c=n(3),d=n(15),p=n(2),f=n(6),m=n(22),g=n(47),h=n(445),v=n(58),y=(n(17),n(67)),b=n(139),_=(n(1273),n(257),n(75),n(259)),w=n(687),N=n(688),E=(n(456),{designer:{type:c.string,selected:c.bool,isArranging:c.bool,index:c.number,showType:c.string,layout:c.string,eagerLoad:c.bool,sideMenuOpened:c.bool,_isAddInIframe:c.bool},callbacks:{updateItemHeight:c.func,onSelectItem:c.func.isRequired,deleteItem:c.func.isRequired}}),x=function(e){function t(e){o(this,t)
var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
n._afterClickCancel=function(){n._isEmptyItem()&&n._onClickDeleteButton(n.props.index)}
n._deselect=function(){n._isEmptyItem()?n._onClickDeleteButton(n.props.index):n.updateState("normal")}
n._isEmptyItem=function(){switch(n.getData("type")){case"Image":return p.isEmpty(n.getData("url"))
case"Video":return p.isEmpty(n.getData("url"))||""===n.getData("html")
default:return!1}}
n._onImageLoaded=function(e){var t=e.h&&e.w?e.h/e.w:0
if("Image"===n.getData("type")&&"verticalGallery"!==n.props.showType){var o=f(d.findDOMNode(n.refs.imageContent)),i=o.find("img"),a=void 0,r=void 0
if(t<1){a=100/t
i.css({position:"absolute",width:a+"%",top:0,left:-(a-100)/2+"%"})}else if(t>1){r=100*t
i.css({position:"absolute",width:"100%",top:-(r-100)/2+"%",left:0})}}}
n._getPureDataProps=function(){var e=n.props,t=e.dataProps,o=e.updateItemHeight,i=e.eagerLoad
return{dataProps:t,path:e.path,updateItemHeight:o,onImageLoaded:n._onImageLoaded,eagerLoad:i}}
n._getImageProps=function(){return Object.assign({afterUploaded:n._deselect,afterSelected:n._deselect,afterRemove:function(){return n._onClickDeleteButton(n.props.index)},afterSave:function(){n._deselect()
n.savePage()}},n._getPureDataProps())}
n._getVideoProps=function(){return Object.assign({afterRemove:function(){return n._onClickDeleteButton(n.props.index)},beforeUpload:function(){return n.setState({isLoading:!0})},uploadFailed:function(){return n.setState({isLoading:!1})},uploadSucceed:function(){n.setState({isLoading:!1})
n.setTimeout(function(){n._deselect()
n.savePage()},100)}},n._getPureDataProps())}
n._getThumbSize=function(){var e=n.props.layout
return-1!==e.indexOf("fullWidth")?"300x300#":-1!==e.indexOf("vertical")?"250x1000>":"200x200#"}
n._getDOMData=function(){var e={"data-type":n.getData("type").toLowerCase()}
switch(n.getData("type")){case"Image":e=Object.assign({href:v.createImage(n.getData()).getUrl("1920x9000>")},e)
case"Video":e=Object.assign({"data-html":n.getData("html"),"data-description":n.getData("description")},e)}return e}
n._getSaveButtonProps=function(){return{onClickCancel:function(){n.onClickCancel()},onClickSave:function(){n.setState({saveClicked:!0})}}}
n._restoreSaveClickedState=function(){n.setState({saveClicked:!1})}
n._getSaveButtonClickedProps=function(){return{saveClicked:n.state.saveClicked,restoreSaveClickedState:n._restoreSaveClickedState,fromType:"gallery"}}
n._onMouseEnterDeleteButton=function(){n.setState({showDeleteOverlay:!0})}
n._onMouseLeaveDeleteButton=function(){n.setState({showDeleteOverlay:!1})}
n._onClickDeleteButton=function(e){n.props.deleteItem(e)}
n.nativeDeleteButton=function(e){n._onClickDeleteButton(e.index)}
n._onClickEditItem=function(){if(!n.state.showDeleteOverlay){n.props.onSelectItem(n.getData("id"))
n.onClickEditor()}}
n._adjustEditorPosition=function(){if("verticalGallery"!==n.props.showType){var e=f(n.refs.itemEditor).find(".s-component-editor")
if(e.length){var t=n.props.sideMenuOpened?200:0,o=f(window).width()-e.width(),i=e.offset().left
i<t&&e.css("left","0")
i>o&&e.css({marginLeft:o-i+"px"})}}}
n.state={showDeleteOverlay:!1,isLoading:!1,saveClicked:!1}
return n}a(t,e)
r(t,[{key:"componentWillMount",value:function(){this.props.selected&&this.updateState("editor")}},{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e){e.selected&&!this.props.selected&&this.isState("editor")&&this._deselect()}},{key:"_renderEditor",value:function(){return null}},{key:"render",value:function(){var e=this.isState("editor"),t=this.props,n=t.showType,o=t.style,i=t.index,a=t.layout,r=this.getData("type")
return u.createElement("div",{style:o,className:"s-component s-gallery-item "+("verticalGallery"===n?"vertical-item":""),"data-sorting-index":i},!1,u.createElement(y,null,!e&&u.createElement(b,{className:"s-component-content",key:this.getData("id")+"content"},u.createElement("div",{className:"image-wrapper"},u.createElement("a",Object.assign({className:"item"},this._getDOMData()),"Image"===r?u.createElement(w.default,Object.assign({ref:"imageContent",showType:n||"galleryItem",layout:a,thumbSize:this._getThumbSize()},this._getPureDataProps())):u.createElement(N.default.WaypointLazy,Object.assign({ref:"videoContent",showType:n||"galleryItem"},this._getPureDataProps())))))))}}])
return t}(_.default)
x.displayName="GalleryItem"
x.originalProps=E
x=l([m.decorate(h),m.decorate(g)],x)
t.default=x},3758:function(e,t,n){"use strict"
function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,o,i){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=i
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),r=n(0),s=o(r),l=n(7),u=o(l),c=n(3612),d=o(c),p=n(3611),f=o(p),m=n(3743),g=o(m),h=n(1269),v=o(h),y=n(449),b=o(y),_=n(3741),w=o(_),N={mixins:[w.default],displayName:"NewTextSection",componentWillMount:function(){n(679).removeOldBackgroundForText(this)
var e=u.default.getThemeName(),t=n(1271)
this._getLayoutBinding().sub("layout_variation").set(t.getDefaultLayoutKey(e,this._getLayoutVariation()))},_getLayoutOptions:function(){var e=u.default.getThemeName()
return n(1271).getLayoutOptions(e)},_getPositionLayout:function(){return this._getLayoutVariation().split("-")[1]},_getTitleOverlayClass:function(){var e=this._getLayoutVariation()
return this.sbAnyHasContent("text1 text2",{showOnly:!1})?-1!==e.indexOf("overlay")?"s-persp-overlay":-1!==e.indexOf("card")?"s-persp-card":void 0:""},_getSectionType:function(){u.default.getThemeName()
switch(this._getLayoutVariation().split("-")[0]){case"text":return"s-text-section"
case"box":return"s-info-section"}},_renderPerspectiveText:function(e){var t=this,n=this.getComponentBinding("repeatable1"),o=this._getLayoutBinding(),r=this.getRepeatableBinding("repeatable1"),l=r.get().size,u=function(n,l){if(l>=3)return null
var u=r.sub(l),c=e.itemClass,d=e.textClass
"function"==typeof c&&(c=c(t,l))
"function"==typeof d&&(d=d(t,l))
return s.default.createElement(f.default,i({className:c,binding:{default:u,layout:o},index:l},t._getRepeatableItemProps(r,l)),a("div",{className:"s-persp-column"},void 0,a("div",{className:d},void 0,a("div",{className:"s-title-group"},void 0,t.sbHasContent("text1",{parentBinding:u})&&a("div",{className:"s-title"},void 0,s.default.createElement(b.default,i({tagName:"h2",textType:"title"},t.getComponentProps("text1",u)))),a("div",{className:"s-item-text"},void 0,s.default.createElement(b.default,i({tagName:"div",textType:"body"},t.getComponentProps("text2",u))))))))},c=this.getComponentProps("repeatable1")
return s.default.createElement(d.default,i({className:(l>=3?"s-hide-add-button":"")+("editor"===n.get("_state")?" s-arranging":"")},c),n.get("list").map(u.bind(this)).toArray())},_renderRepeatable:function(e){var t=this,o=n(1271),r=u.default.getThemeName(),l=this.getComponentBinding(e),c=this._getLayoutBinding(),p=this.getRepeatableBinding(e),m=void 0
"function"==typeof o.getLayout(r,this._getLayoutVariation())&&(m=o.getLayout(r,this._getLayoutVariation())(this))
var h=m,y=h.repeatableClass
if("s-text-section"===this._getSectionType()&&"perspective"===r)return this._renderPerspectiveText(m)
var b=function(e,n){var o=p.sub(n),r={default:o,layout:c},l=m,u=l.itemClass,d=l.textClass,h=l.buttonClass
"function"==typeof u&&(u=u(t,n))
"function"==typeof d&&(d=d(t,n))
"function"==typeof h&&(h=h(t,n))
var y=t.sbHasContent("button1",{parentBinding:o}),b="editor"!==t.getComponentBinding("button1",o).get("_state")&&!t.sbHasContent("button1",{parentBinding:o,showOnly:!1})
return s.default.createElement(f.default,i({index:n,className:u,binding:r},t._getRepeatableItemProps(p,n)),a("div",{className:d},void 0,a(g.default,{section:t,itemBinding:o,binding:o,showItemSubtitle:!1},void 0,h&&y&&a("div",{className:h+(b?" s-placeholder-button":"")},void 0,s.default.createElement(v.default,i({},t.getComponentProps("button1",o),{smallButton:!0}))))))},_=this.getComponentProps("repeatable1")
return s.default.createElement(d.default,i({className:y+("editor"===l.get("_state")?" s-arranging":"")},_),p.get().map(b.bind(this)).toArray())},render:function(){return this.getTemplate().apply(this)}}
t.default=N
e.exports=t.default},3759:function(e,t,n){"use strict";(function(o){function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,o,i){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=i
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),s=n(0),l=i(s),u=n(2),c=i(u),d=n(3),p=i(d),f=n(3738),m=i(f),g=n(450),h=i(g),v=n(1237),y=i(v),b=n(1269),_=i(b),w=n(1241),N=i(w),E=n(7),x=i(E),k=n(3741),C=i(k),S={mixins:[C.default],displayName:"NewHeroSection",propTypes:{eagerLoad:p.default.bool.isRequired,binding:p.default.object.isRequired},componentWillMount:function(){var e=x.default.getThemeName(),t=this._getLayoutVariation(),o=this.getDefaultBinding().get("template_name"),i=n(3750)
this._getLayoutBinding().sub("layout_variation").set(i.getDefaultLayoutKey(e,t,o))},_getLayoutOptions:function(){var e=x.default.getThemeName()
return n(3750).getLayoutOptions(e)},_getSectionType:function(){return this._showImage()?"s-hero-section":"s-signup-section"},_getLayout:function(){return c.default.camelCase(this._getLayoutVariation())},_getLayoutObj:function(){var e=n(3750),t=this._getLayoutVariation(),o=x.default.getThemeName(),i=void 0
"function"==typeof e.getLayout(o,t)&&(i=e.getLayout(o,t)(this))
return i},_getType:function(){return this._getLayoutObj().type},_showImage:function(){return this._getLayoutObj().showImage},_renderContent:function(){var e=this._getLayoutObj(),t=e.layoutClass,n=e.mediaClass,o=e.textClass,i=e.textOffsetClass,s=e.type,u=e.showImage,c=e.swapTitle,d="button"===s&&this.sbHasContent("button1"),p="button"===s&&this.sbHasContent("button1",{showOnly:!1}),f="images"===s&&this.sbAnyHasContent("image1 image2"),g=this.sbAnyHasContent("media1"),v=x.default.getThemeName()
return r("div",{className:t},void 0,r("div",{className:n+(g?"":" empty-media")},void 0,u&&l.default.createElement(y.default,this.getReduxComponentProps("media1"))),r("div",{className:o},void 0,r("div",{className:i},void 0,"glow"===v&&r(m.default,{section:this,binding:this.getDefaultBinding(),subtitleOnTop:c}),"glow"!==v&&r(m.default,{section:this,binding:this.getDefaultBinding()}),(d||f||"signup"===s)&&r("div",{className:(p?"":"empty-button")+" "+this.sbUniformTextAlignment("text1 text2",{parentBinding:this.getDefaultBinding()})},void 0,"button"===s&&r("div",{className:"s-button-group ib"},void 0,l.default.createElement(_.default,this.getComponentProps("button1"))),"signup"===s&&r("div",{className:"s-email-form-container"},void 0,l.default.createElement(N.default,a({signup:!0},this.getComponentProps("email1")))),"images"===s&&r("div",{className:"s-image-wrapper"},void 0,r("div",{className:"s-image-item"},void 0,l.default.createElement(h.default,a({},this.getReduxComponentProps("image1"),{eagerLoad:!0}))),r("div",{className:"s-image-item"},void 0,l.default.createElement(h.default,a({},this.getReduxComponentProps("image2"),{eagerLoad:!0}))))))))},render:function(){o("Editor|Hero")
o("Editor|Great for the top of a page. Add images, a button, or even a sign-up form.")
return this.getTemplate().apply(this)}}
t.default=S
e.exports=t.default}).call(t,n(1))},3760:function(e,t,n){"use strict";(function(o){function i(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
t.default=e
return t}function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
var u,c,d=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n]
o.enumerable=o.enumerable||!1
o.configurable=!0
"value"in o&&(o.writable=!0)
Object.defineProperty(e,o.key,o)}}return function(t,n,o){n&&e(t.prototype,n)
o&&e(t,o)
return t}}(),p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},f=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,o,i){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=i
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),m=n(0),g=a(m),h=n(15),v=a(h),y=n(2),b=a(y),_=n(6),w=a(_),N=n(22),E=a(N),x=n(3),k=(a(x),n(21)),C=a(k),S=n(16),P=a(S),L=n(3810),O=a(L),T=n(7),M=a(T),I=n(12),B=(a(I),n(670)),D=a(B),j=n(3612),A=a(j),H=n(3611),R=a(H),F=n(3743),U=a(F),V=n(3613),z=(a(V),n(3739)),W=a(z),K=n(170),G=a(K),$=n(88),Y=a($),q=n(11),J=a(q),X=n(58),Q=i(X),Z=n(42),ee=a(Z),te=n(41),ne=i(te),oe=n(3811),ie=(a(oe),n(1236)),ae=(a(ie),n(101)),re=a(ae),se=n(3738),le=a(se),ue=n(32),ce=a(ue),de=n(3741),pe=a(de),fe=n(3761),me=a(fe),ge=n(319),he={mixins:[pe.default,(0,ee.default)("editor")],displayName:"GridSection",mapStateToProps:function(e){return{s5NavOverlapsContent:"s5-theme"===M.default.getThemeName()&&(0,ge.getNavOverlapsContent)(e),s5NavHeight:D.default.get("navHeight")}},componentWillMount:function(){this._applyTitleGroupMigrationToData()
this._getOnToggleImageLinkEditorFn=re.default.boundParamsMemoizer(this._onToggleImageLinkEditor,this)
var e=M.default.getThemeName(),t=this._getLayoutVariation()
return this._getLayoutBinding().sub("layout_variation").set(me.default.getDefaultLayoutKey(e,t))},componentDidMount:function(){this._debouncedUpdateJQueryMeasurements=b.default.debounce(this._updateJQueryMeasurements,200);(0,w.default)(window).on("resize",this._debouncedUpdateJQueryMeasurements)
return this._updateJQueryMeasurements()},componentWillUnmount:function(){return(0,w.default)(window).off("resize",this._debouncedUpdateJQueryMeasurements)},componentDidUpdate:function(){this._updateJQueryMeasurements()},_updateJQueryMeasurements:function(){if(0===this.props.index){var e=(0,w.default)(".navigator").outerHeight()||(0,w.default)(".s-nav-inner").outerHeight()||0,t=(0,w.default)(v.default.findDOMNode(this)),n=parseFloat(t.find(".s-persp-container").css("padding-top"))||parseFloat(t.css("padding-top"))||0
this.updateMeta({navHeight:e,paddingTop:n})}},_getNavHeight:function(){var e=M.default.getThemeName(),t=void 0
t="s5-theme"===e?this.props.s5NavHeight:this.getMeta("navHeight")
return t},_applyTitleGroupMigrationToData:function(){var e=this.getDefaultBinding().sub("components")
if("Add subtitle"===e.get("text2").get("value")){var t={type:"RichText",defaultValue:!0,value:"",backupValue:null,version:null}
e.set("text1",J.default.fromJS(t))
e.set("text2",J.default.fromJS(t))}},_getLayoutOptions:function(){var e=M.default.getThemeName()
return me.default.getLayoutOptions(e)},_updateLayoutAndAdjustCellCount:function(e){var t=me.default.parseLayoutVariation(e),n=t.getCellCount()
if(!this._adjustNumberOfCellsInData(n)){"extraLarge"!==t.cellHeight||t.canBeExtraLarge()||(t.cellHeight="large")
this._updateLayout.call(this,t.serialize())}},_onToggleImageLinkEditor:function(e){var t=this.getRepeatableBinding("repeatable1")
t.get().forEach(function(n,o){"editor"===n.get("components").get("background1").get("_state")&&e!==o&&t.sub(o).update("components.background1",function(e){return e.set("_state","normal")})})},_renderRepeatable:function(e){var t=this,n=this.getComponentBinding(e),o=this.getRepeatableBinding(e),i=this._getLayoutObject(),a=this.props.index,r=this._getNavHeight(),s=this.getMeta("paddingTop"),l=function(e,n){var l=o.sub(n)
return f(ve,{layoutVariation:t._getLayoutVariation(),layoutObj:i,binding:l,section:t,index:n,sectionIndex:a,navHeight:r,sectionPaddingTop:s,hasTitleGroup:t._hasTitleGroup(),repeatableItemProps:t._getRepeatableItemProps(o,n),getComponentProps:t.getComponentProps,getBackgroundProps:t.getBackgroundProps,onToggleImageLinkEditor:t._getOnToggleImageLinkEditorFn(n)},n)},u=this.getComponentProps("repeatable1"),c=n.get("list").map(l).toArray()
i.useMagazineColumnDom&&(c=[f("div",{className:i.magazineColumnClass},1,c[0],c[1]),f("div",{className:i.magazineColumnClass},2,c[2])])
return g.default.createElement(A.default,p({className:"s-mh"+("editor"===n.get("_state")?" s-arranging":""),style:{margin:i.containerMargin,padding:i.containerPadding},canAddItems:!1},u),c)},_renderLayoutButton:function(){return null},_hasTitleGroup:function(){return this.sbAnyHasContent("text1 text2",{showOnly:!1})},_getSectionStyle:function(){return{paddingTop:this._getLayoutObject().getSectionPaddingTop(this._getNavHeight(),this._hasTitleGroup(),this.props.index,this.props.s5NavOverlapsContent)}},_getLayoutObject:function(){var e=M.default.getThemeName(),t=this._getLayoutVariation(),n=ce.default.isSmallerThanDesktop()
return me.default.getLayout(e,t,n)()},_adjustNumberOfCellsInData:function(e){var t=G.default.getSectionDataBySectionName("grid"),n=t.content.components.repeatable1.components,i=[].concat(t.content.components.repeatable1.list.map(function(e){return e.components}),n),a=this.getRepeatableBinding("repeatable1"),r=function(e){var t=e.components
return b.default.some(i,function(e){return t.text1.value===e.text1.value&&t.text2.value===e.text2.value&&t.background1.url===e.background1.url&&t.background1.linkUrl===e.background1.linkUrl})},s=a.get().count()
if(s===e)return!1
if(s<e)!function(e){for(var t=a.get(),o=0;o<e;){o++
var i={type:"RepeatableItem",components:n},r=J.default.fromJS(Y.default.addMetaId(i))
t=t.push(r)}a.set(t)}(e-s)
else if(s>e){var l=a.get().slice(e)
if(!function(e){return e.toJS().every(r)}(l)&&!confirm(o("Editor|Are you sure you want to reduce the number of grid items? Some grid items will be deleted.")))return!0
var u=a.get().slice(0,e)
a.set(u)}return!1},render:function(){var e=this._getLayoutObject(),t=M.default.getThemeName(),n=null
if(this._hasTitleGroup()||(e.contentWidthIsNormal,!1)){n=f("div",{},"section-title",f(le.default,{contentCheck:"repeatable1",section:this,binding:this.getDefaultBinding(),canHide:!0}))
e.isWideWithLeftAlignedHeading?n=f("div",{style:{paddingLeft:40,paddingRight:40}},"section-title",n):"persona"!==t&&"profile"!==t&&(n=f("div",{},"section-title",f("div",{className:(0,P.default)("container title-group-container",{"title-group-container--no-title-content":!this._hasTitleGroup()})},void 0,f("div",{className:"sixteen columns"},void 0,n))))}var o="profile"===t||"persona"===t,i=f("div",{},void 0,o&&n,f("div",{className:"s-grid-section-repeatable-container "+this.sbUniformTextAlignment("text1 text2")},void 0,this._renderRepeatable("repeatable1")))
"persona"===t&&(i=f("div",{className:"twelve columns offset-three"},void 0,f("div",{className:"s-persona-content"},void 0,i)))
e.needs16ColumnContainer&&(i=f("div",{className:"columns sixteen"},void 0,i))
i=[this._renderLayoutButton(),!o&&n,f("div",{className:"s-grid-section-content "+this._getLayoutObject().containerClass},"section-content",i)]
e.needsPerspContainer&&(i=f("div",{className:"s-persp-container"},void 0,f("div",{className:"s-persp-column"},void 0,i)))
return f("div",{className:"s-section s-grid-section "+this._getLayoutObject().sectionClass+" "+(this._hasTitleGroup()?" _hasTitleGroup":""),style:this._getSectionStyle()},void 0,f("div",{style:{width:"100%"}},void 0,i))}},ve=(u=E.default.decorate(C.default.Mixin))(c=function(e){function t(e){r(this,t)
var n=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
n._updateMinHeight=b.default.throttle(n._updateMinHeight.bind(n),200)
return n}l(t,e)
d(t,[{key:"componentDidMount",value:function(){this._updateMinHeight()}},{key:"componentDidUpdate",value:function(){this._updateMinHeight()}},{key:"getPropCompareFunctions",value:function(){return{repeatableItemProps:function(e,t){return(0,O.default)(e,t)}}}},{key:"_updateMinHeight",value:function(){var e=(0,w.default)(v.default.findDOMNode(this)),t=e.find(".s-item-text-group").outerHeight(),n=Math.max(this.props.layoutObj.cellMinHeight,t+50)
e.css("min-height",n+"px")}},{key:"_getDefaultBackground",value:function(){return G.default.getSectionDataBySectionName("grid").content.components.repeatable1.components.background1}},{key:"render",value:function(){var e=this.props,t=e.layoutObj,n=e.index,o=e.sectionIndex,i=e.navHeight,a=e.sectionPaddingTop,r=e.hasTitleGroup,s=this.getDefaultBinding(),l=s.sub("components.background1").toJS()||this._getDefaultBackground(),u=Q.createImage(l).getUrl(),c=l.linkUrl,d=l.linkTarget,m=ne.imageHasContent(u),h=t.cellClassName
"editor"===s.sub("components.background1").get("_state")&&(h+=" _image-link-editor-open")
var v=t.getItemButtonStyles({cellIndex:n,sectionIndex:o,navHeight:i,sectionPaddingTop:a,hasTitleGroup:r,s5NavOverlapsContent:this.props.s5NavOverlapsContent}),y=null,b=this.props.getBackgroundProps("background1",s)
b.linkUrl=c
b.linkTarget=d
var _=f("div",{className:"s-grid-section-cell-content"},void 0,g.default.createElement(W.default,p({key:n},b),y,f("div",{className:"s-grid-section-item-text-group-wrapper",style:{border:t.getItemBorder(m)}},void 0,f(U.default,{section:this.props.section,itemBinding:s,binding:s,showItemSubtitle:!1,upperChildrenPosition:!0,onChange:this._updateMinHeight}))))
return g.default.createElement(R.default,p({className:h+" "+(t.isTopRightCell(n)?"_top-right-cell":""),style:{padding:t.cellPadding,minHeight:t.cellMinHeight},binding:s,index:n,alwaysShowButtons:!0,moveButtonStyle:v.moveButton},this.props.repeatableItemProps),_)}}])
return t}(g.default.Component))||c
t.default=he
e.exports=t.default}).call(t,n(1))},3761:function(e,t,n){"use strict"
function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0})
var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n]
o.enumerable=o.enumerable||!1
o.configurable=!0
"value"in o&&(o.writable=!0)
Object.defineProperty(e,o.key,o)}}return function(t,n,o){n&&e(t.prototype,n)
o&&e(t,o)
return t}}(),a=n(2),r=function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
t.default=e
return t}(a),s={twoLeftOneRight:{cellCount:3},oneLeftTwoRight:{cellCount:3},twoTopThreeBottom:{cellCount:5},twoTopTwoBottom:{cellCount:4}}
r.forOwn(s,function(e,t){e.name=t})
var l=function(){function e(t){o(this,e)
var n=t.split("-")
this.rows=""
this.columns=""
this.magazineLayoutName=""
this.gridType=n[0]
this.cellHeight=n[4]
this.cellSpacing=n[5]
this.contentWidth=n[6]
if("grid"===n[0]){this.rows=parseFloat(n[1])
this.columns=parseFloat(n[2])}else"magazine"===n[0]&&(this.magazineLayoutName=n[3])}i(e,[{key:"isMagazine",value:function(){return"magazine"===this.gridType}},{key:"isGrid",value:function(){return"grid"===this.gridType}},{key:"canBeExtraLarge",value:function(){return this.isGrid()&&1===this.rows}},{key:"serialize",value:function(){return[this.gridType,this.rows,this.columns,this.magazineLayoutName,this.cellHeight,this.cellSpacing,this.contentWidth].join("-")}},{key:"getCellCount",value:function(){return this.isGrid()?this.rows*this.columns:s[this.magazineLayoutName].cellCount}},{key:"getTopRightCellIndex",value:function(){return this.isGrid()?this.columns-1:{twoLeftOneRight:2,oneLeftTwoRight:0,twoTopThreeBottom:1,twoTopTwoBottom:1}[this.magazineLayoutName]}},{key:"getTopRowCellIndices",value:function(){return this.isGrid()?r.range(0,this.columns):{twoLeftOneRight:[0,2],oneLeftTwoRight:[0,2],twoTopThreeBottom:[0,1],twoTopTwoBottom:[0,1]}[this.magazineLayoutName]}}])
return e}(),u=34,c=["profile","ion","sleek","persona"],d=["sleek","ion","persona"],p={},f={getDefaultLayoutKey:function(e,t){return t},getLayout:function(e,t,n){function o(t){return"s5-theme"===e?t:["pitch_new","zine","bright","glow","minimal"].includes(e)}var i=this.parseLayoutVariation(t)
return function(){function a(t,n,i,a){var r=o(a)?Math.max(0,n-i):0,c=s?0:2*l.cellPadding,d=10+Math.max(0,r-c),p=s&&0!==t&&"ion"!==e?10:-30
0===t&&(p=10-i+(o(a)?n:0))
"ion"===e&&(p=-46)
var f=d+c,m=p+u
return{layoutButtonTop:p,topRowimageAndLinkButtonTop:d,layoutButtonOverlapsTopRightButton:!s&&m+10>f}}var r=e+"-"+t+"-"+n
if(p[r])return p[r]
var s="normal"===i.contentWidth
c.includes(e)&&(s=!0)
var l={}
l.contentWidthIsNormal=s
l.containerClass=s?"container ":""
l.containerClass+="_cell-spacing-"+i.cellSpacing+" "
l.needsPerspContainer=s&&"perspective"===e
l.needs16ColumnContainer=s&&!["perspective","persona"].includes(e)
l.sectionClass=s?"":" _wide "
var f=d.includes(e)?"mobile":"desktop"
l.sectionClass+=" s-grid-section__"+f+"-view-on-tablet"
var m="onyx_new"===e
l.isWideWithLeftAlignedHeading=m&&!s
l.cellPadding={none:0,small:n?3:5,large:n?7:15}[i.cellSpacing]
l.containerMargin=s?-l.cellPadding:0
l.containerPadding=s?0:l.cellPadding
l.cellClassName="s-grid-section-cell "
l.cellMinHeight={small:{desktop:160,mobile:120},medium:{desktop:250,mobile:150},large:{desktop:350,mobile:200},extraLarge:{desktop:600,mobile:300}}[i.cellHeight][n?"mobile":"desktop"]
i.getCellCount()%2!=0&&(l.cellClassName+=" _odd-cell-count ")
if(i.isGrid()){l.containerClass+="_grid"
l.cellClassName+=" _"+i.columns+"-columns "}else if(i.isMagazine()){l.containerClass+="_magazine "
l.cellClassName+=" _"+i.magazineLayoutName+" "}l.useMagazineColumnDom=i.isMagazine()&&("twoLeftOneRight"===i.magazineLayoutName||"oneLeftTwoRight"===i.magazineLayoutName)
l.magazineColumnClass="s-magazine-column _"+i.magazineLayoutName
l.getItemBorder=function(e){return e||"none"===i.cellSpacing?null:"1px solid #eee"}
l.isTopRightCell=function(e){return i.getTopRightCellIndex()===e}
l.isTopRowCell=function(e){return i.getTopRowCellIndices().includes(e)}
l.getItemButtonStyles=function(e){var t=e.cellIndex,n=e.sectionIndex,o=e.navHeight,r=e.sectionPaddingTop,s=e.hasTitleGroup,l=e.s5NavOverlapsFirstSection,u=10,c=10,d=0
if(this.isTopRowCell(t)&&!s){var p=a(n,o,r,l)
u=p.topRowimageAndLinkButtonTop
if(this.isTopRightCell(t)&&p.layoutButtonOverlapsTopRightButton){c+=140
d+=140}}i.isGrid()&&(d+=28)
return{moveButton:{top:u,right:c},imageAndLinkButton:{top:u,right:d}}}
l.getLayoutButtonStyle=function(e){return{top:a(e.sectionIndex,e.navHeight,e.sectionPaddingTop,e.s5NavOverlapsFirstSection).layoutButtonTop}}
l.getSectionPaddingTop=function(t,n,i,a){if("perspective"===e&&n&&!s)return 80
if("minimal"===e||"pitch_new"===e){var r=s||n,l="minimal"===e&&r?70:0,u="pitch_new"===e&&r?90:0,c={minimal:l,pitch_new:u}[e]
return(0===i?t:0)+c}return s||n?"":o(a)&&0===i?t:0}
p[r]=l
return l}},parseLayoutVariation:function(e){return new l(e)},magazineLayouts:s,themesWithoutWideGridLayout:c}
t.default=f
e.exports=t.default},3762:function(e,t,n){"use strict";(function(o){function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
var l=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,o,i){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=i
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),u=function(){function e(e,t){var n=[],o=!0,i=!1,a=void 0
try{for(var r,s=e[Symbol.iterator]();!(o=(r=s.next()).done);o=!0){n.push(r.value)
if(t&&n.length===t)break}}catch(e){i=!0
a=e}finally{try{!o&&s.return&&s.return()}finally{if(i)throw a}}return n}return function(t,n){if(Array.isArray(t))return t
if(Symbol.iterator in Object(t))return e(t,n)
throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n]
o.enumerable=o.enumerable||!1
o.configurable=!0
"value"in o&&(o.writable=!0)
Object.defineProperty(e,o.key,o)}}return function(t,n,o){n&&e(t.prototype,n)
o&&e(t,o)
return t}}(),d=n(0),p=(i(d),n(2)),f=i(p),m=n(3742),g=n(4),h=(i(g),function(e){function t(e){a(this,t)
var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
n.cacheLevel=-1
n.sectionName="store section"
return n}s(t,e)
c(t,[{key:"updateToDefaultLayout",value:function(e){var t=n(1270),o=this.props.themeName,i=f.default.clone(this._levelKeys)
i[0]=e
var a=t.getDefaultLayoutKey(o,i.join("-"))
this.props.updateLayout(a)}},{key:"getRotationKeys",value:function(){var e=u(this._levelKeys,1),t=e[0]
return this._getKeysByLevel(1).map(function(e){return t+"-"+e})}},{key:"getButtonClassMapping",value:function(){return["",this._getSmallButtonClass(1)]}},{key:"renderLayoutOptions",value:function(){var e=this,t=u(this._levelKeys,2),n=t[0],i=t[1]
return l("div",{},void 0,this._getKeysByLevel(1)&&this._renderLayoutButtons(1,o("Editor|Columns Per Row")),"one"!==i&&l("div",{className:"s-layout-menu-field drop-down-select"},void 0,l("div",{className:"s-layout-menu-label"},void 0,o("Editor|Image Size")),l("select",{value:n,onChange:function(t){return e._getSetLevelFn(0,t.target.value)()}},void 0,l("option",{value:"landscape"},void 0,o("Editor|Landscape")),l("option",{value:"square"},void 0,o("Editor|Square")),l("option",{value:"portrait"},void 0,o("Editor|Portrait")),l("option",{value:"auto"},void 0,o("Editor|Auto")))))}}])
return t}(m.BaseLayoutButton))
t.default=(0,m.connectToStores)(h)
e.exports=t.default}).call(t,n(1))},3763:function(e,t,n){"use strict"
function o(e,t){var n=a.assign({},e,t)
e.hasOwnProperty("style")&&(n.style=a.defaults(n.style,e.style))
e.hasOwnProperty("className")&&t.hasOwnProperty("className")&&(n.className=t.className+" "+e.className)
return n}var i=n(0),a=n(2),r=(n(449),n(1269),n(3740)),s=n(3610),l=n(3829),u=(n(3738),n(3739))
e.exports=function(){return i.createElement(u,o({className:"s-new-title-section s-section "+this._getSectionType()},this.getThemeFeature("disableBackgrounds")?{}:this.getBackgroundProps("background1")),this.isEditMode()?i.createElement("div",{className:"s-section-editor-wrapper"},this.getThemeFeature("disableBackgrounds")?null:i.createElement(r,this.getComponentProps("background1")),i.createElement(l,a.assign({},{layoutOptions:this._getLayoutOptions(),updateLayout:this._updateLayout},this._getLayoutProps()))):null,!this.getThemeFeature("disableBackgrounds")&&this.hasBackgroundVideo("background1")?i.createElement(s,a.assign({},{layout:this._getLayoutKey()},this.getBackgroundProps("background1"))):null,"\n  ",this._renderContent(),"\n")}},3764:function(e,t,n){"use strict"
function o(e,t){var n=a.assign({},e,t)
e.hasOwnProperty("style")&&(n.style=a.defaults(n.style,e.style))
e.hasOwnProperty("className")&&t.hasOwnProperty("className")&&(n.className=t.className+" "+e.className)
return n}var i=n(0),a=n(2),r=(n(449),n(3740)),s=n(3610),l=n(3795),u=n(3738),c=n(3739)
e.exports=function(){return i.createElement(c,o({className:"s-new-text-section s-section "+this._getSectionType()},this.getThemeFeature("disableBackgrounds")?{}:this.getBackgroundProps("background1")),this.isEditMode()?i.createElement("div",{className:"s-section-editor-wrapper"},this.getThemeFeature("disableBackgrounds")?null:i.createElement(r,this.getComponentProps("background1")),i.createElement(l,a.assign({},{layoutOptions:this._getLayoutOptions(),updateLayout:this._updateLayout},this._getLayoutProps()))):null,!this.getThemeFeature("disableBackgrounds")&&this.hasBackgroundVideo("background1")?i.createElement(s,this.getBackgroundProps("background1")):null,i.createElement("div",{className:"container"},i.createElement("div",{className:"clearfix"},i.createElement("div",{className:"columns sixteen"},i.createElement(u,{contentCheck:"repeatable1",section:this,binding:this.getDefaultBinding()}))),i.createElement("div",{className:this.sbUniformTextAlignment("text1 text2")},"\n      ",this._renderRepeatable("repeatable1"),"\n    ")))}},3765:function(e,t,n){"use strict"
function o(e,t){var n=a.assign({},e,t)
e.hasOwnProperty("style")&&(n.style=a.defaults(n.style,e.style))
e.hasOwnProperty("className")&&t.hasOwnProperty("className")&&(n.className=t.className+" "+e.className)
return n}var i=n(0),a=n(2),r=n(3740),s=n(3610),l=n(3799),u=n(3739)
e.exports=function(){return i.createElement(u,o({className:"s-new-hero-section s-section "+this._getSectionType()},this.getThemeFeature("disableBackgrounds")?{}:this.getBackgroundProps("background1")),this.isEditMode()?i.createElement("div",{className:"s-section-editor-wrapper"},this.getThemeFeature("disableBackgrounds")?null:i.createElement(r,a.assign({},{bgClassNames:this.getThemeFeature("backgroundColorClassNames")},this.getComponentProps("background1"))),i.createElement(l,a.assign({},{layoutOptions:this._getLayoutOptions(),updateLayout:this._updateLayout},this._getLayoutProps()))):null,!this.getThemeFeature("disableBackgrounds")&&this.hasBackgroundVideo("background1")?i.createElement(s,a.assign({},{layout:this._getLayoutKey()},this.getBackgroundProps("background1"))):null,"\n  ",this._renderContent(),"\n")}},3771:function(e,t){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var n=function(e){return e.replace("../../../../public/images/v4","../../../../images/v4")}
t.default={correctThumbnailPath:n}
e.exports=t.default},3772:function(e,t,n){"use strict"
function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){var n=f[e]||e
n=n.split(",").map(function(e){return p+e.trim()}).join(",")
var o=m[e]||m.default
if(s.default.isString(t))return-1!==t.indexOf(":")?n+"{"+t+"}":n+"{"+o+":"+t+"}"
var i=u.default.prototype.validate(t)
return i?n+"{"+o+":"+i.toRgba()+";}":void 0}function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n="",o=null
for(o in e)if(e.hasOwnProperty(o)){var a=o.split(" ")
d.default[o]?function(){var a=d.default[o](e[o])
for(var r in a)!function(e){Array.isArray(t.prefix)?t.prefix.forEach(function(t){n+=i(t+" "+e,a[e])}):n+=i((t.prefix||"")+" "+e,a[e])}(r)}():f[a[0]]?a.forEach(function(t){return n+=i(t,e[o])}):i(o,e[o])}return n}Object.defineProperty(t,"__esModule",{value:!0})
var r=n(2),s=o(r),l=n(138),u=o(l),c=n(3773),d=o(c),p=".s-custom-colors ",f={title:".s-title",subtitle:".s-subtitle",itemTitle:".s-item-title",itemSubtitle:".s-item-subtitle",titleLink:".s-title .s-text .s-component-content a",itemTitleLink:".s-item-title .s-text .s-component-content a",subtitleLink:".s-subtitle .s-text .s-component-content a",itemSubtitleLink:".s-item-subtitle .s-text .s-component-content a",textLink:".s-text .s-component-content a",socialFeedLink:".s-social-feed .s-feeds-item .s-feed-content .s-feed-text-main a",button:".s-common-button",buttonHover:".s-common-button:hover",overlay:".s-bg-overlay:before",blogInfo:".s-blog-wrapper .s-blog-col-placeholder .s-blog-details .s-blog-info",storePrice:".s-ecommerce-row-view-product .s-ecommerce-row-view-product-pricing, .s-ecommerce-card-view-card-price",termsLink:".s-terms-link a",socialLinks:".s-component.s-social-media ul.s-social-media-buttons .s-social-icon",socialLinks2:".s-component.s-social-media ul.s-social-media-buttons .s-social-icon",mobileActionButton:".s-mobile-actions .s-mobile-actions-item.one-item",mobileActionButtonForApp:".s-mobile-actions .s-mobile-actions-item.selected:not(.one-item)",mobileNavbarButtons:".navbar-drawer-bar .navbar, .navbar-drawer-bar .mobile",mobileNavbarButtonsOpen:".navbar-drawer-bar.drawer-open .navbar, .navbar-drawer-bar.drawer-open .mobile"},m={default:"color",button:"background",buttonHover:"background",mobileActionButton:"background",mobileActionButtonForApp:"color",overlay:"background",mobileNavbarButtons:"background",mobileNavbarButtonsOpen:"background",socialLinks:"background",socialLinks2:"color"}
t.default={generate:a}
e.exports=t.default},3773:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var o=n(138),i=function(e){return e&&e.__esModule?e:{default:e}}(o),a={donationGroup:function(e){var t=e.main.toHex()
return{".s-donation-section .s-component.s-donation .s-donation-progress .progress-bar .progress":"background: "+t,".s-donation-section .s-component.s-donation .s-donation-progress .progress-bar .indicator:before":"background: "+t,".s-donation-section .s-component.s-donation .s-donation-progress .progress-bar .indicator:after":"border-top-color: "+t}},ecommerceTextGroup:function(e){var t=e.textColor.toHex(),n=e.textColor.lighten(.2).toHex(),o="color: "+t+";",i="color: "+n+";",a=".s-ecommerce .s-ecommerce-products-wrapper .s-ecommerce-card-view-wrapper .s-ecommerce-card-view-detail .s-ecommerce-card-view-detail-header",r={".s-ecommerce-card-view-wrapper .s-ecommerce-card-view-cards .s-ecommerce-card-view-card .s-ecommerce-card-view-card-price":o,".s-ecommerce .s-ecommerce-row-view-product .s-ecommerce-row-view-product-detail-panel .s-ecommerce-row-view-product-pricing":o,".s-section .s-category-bar .category-list .category-link-item.selected":o,".s-section .s-category-bar .category-list .category-link-item.selected:after":"background: "+t,".s-section .s-category-bar .category-list .category-link-item-wrapper:hover .category-link-item:not(.no-hover)":o}
r[a+" .back-btn"]=r[a+" .prev-product-btn"]=r[a+" .next-product-btn"]=o
r[a+" .back-btn:hover"]=r[a+" .prev-product-btn:hover"]=r[a+" .next-product-btn:hover"]=i
return r},ecommerceGroup:function(e){e.textColor=e.textColor||e.main
e.mobileBg=e.mobileBg||new i.default("#f2f2f2")
var t=e.main.toHex(),n=e.mobileBg.toHex(),o=e.mobileBg.mix("#000",.2).toHex(),r="background: "+t+";",s="background: "+n+";"
return Object.assign({".fixed-login-container .login-container":r,".s-ecommerce-row-view-product .s-ecommerce-row-view-product-thumbnail-list ul li.current":"border: 2px solid "+t,".s-ecommerce-card-view-wrapper .s-ecommerce-card-view-card .s-ecommerce-card-view-card-stock-warning":r,".s-ecommerce-shopping-cart-wrapper .s-ecommerce-shopping-cart":r,".s-ecommerce-shopping-cart-wrapper .s-ecommerce-shopping-cart.hovered":r,".s-ecommerce-shopping-cart-wrapper .s-ecommerce-shopping-cart-mobile":"\n        "+s+"\n        border-top: 1px solid "+o+";",".s-ecommerce-shopping-cart-wrapper .s-ecommerce-shopping-cart-mobile .check-btn":r,".s-ecommerce-animation-item":"\n        border: 2px solid "+t+";\n        color: "+t+";",".s-ecommerce-row-view-product .mobile-select .price-label":"color: "+t,".s-ecommerce-row-view-product .mobile-select .variation-item.selected":"border: 1px solid "+t+"; "+r,".s-ecommerce-row-view-product .mobile-select .add-btn":r,".s-ecommerce-row-view-product .slider-wrapper .slider-dot-wrapper .slider-dot":"border: 1px solid "+t,".s-ecommerce-row-view-product .slider-wrapper .slider-dot-wrapper .slider-dot.selected":"background: "+t},a.ecommerceTextGroup({textColor:e.textColor}))}}
t.default=a
e.exports=t.default},3774:function(e,t,n){"use strict";(function(o){function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var a=n(15),r=i(a),s=n(12),l=i(s),u=n(7),c=i(u),d=n(4),p=i(d),f=n(74),m=i(f),g=n(11),h=i(g),v=n(3741),y=i(v),b=n(451),_=i(b),w=n(2),N=i(w),E=!1,x={mixins:[y.default],displayName:"BlogSection",waypointHandler:function(){var e=this._getLayoutProps().layoutVariation
if(!E&&l.default.getSections().length<3&&-1!==["A","B","C"].indexOf(e)){var t=$(r.default.findDOMNode(this)).find(".s-layout .s-component-editor")
t.tooltip({placement:"left",trigger:"manual",extraClassNames:"swing-right",title:o("Blog|Try different layouts for blog!")})
E=!0
t.tooltip("show")
t.one("mouseenter",function(){return t.tooltip("destroy")})
return setTimeout(function(){return t.tooltip("destroy")},2e4)}},componentWillMount:function(){var e=this._getLayoutProps().layoutVariation,t=c.default.getThemeName()
this._getLayoutBinding().sub("layout_variation").set(_.default.getDefaultLayoutKey(t,e))
var n=this.getDefaultBinding().get("components.blog1").toJS()
N.default.isEmpty(n.category)&&this.getDefaultBinding().set("components.blog1.category",h.default.fromJS({id:"all",name:o("Section|All Categories")}))},_getWaypointProps:function(){return{handler:this.waypointHandler,offset:20}},_getLayoutOptions:function(){var e=c.default.getThemeName()
return _.default.getLayoutOptions(e)},_isBlogCategoryFeatureAvailable:function(){return m.default.canUse("blog_category")&&p.default.isBlogCategoryRolledOut()},render:function(){o("Editor|Simple Blog")
o("Editor|Write beautiful blog posts that open in a new page.")
return this.getTemplate().apply(this)}}
t.default=x
e.exports=t.default}).call(t,n(1))},3775:function(e,t,n){"use strict"
function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var i=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,o,i){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=i
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),a=n(0),r=o(a),s=n(15),l=o(s),u=n(6),c=o(u),d=n(2),p=o(d),f=n(48),m=(o(f),n(18)),g=o(m),h=n(4),v=o(h),y=n(42),b=o(y),_=n(1240),w=o(_),N=n(58),E=function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
t.default=e
return t}(N),x=n(1239),k=o(x),C=n(80),S=o(C),P=n(12),L=o(P),O=n(10),T=(o(O),n(208)),M=(o(T),n(116)),I=o(M),B=n(1238),D=n(3745),j=o(D),A=n(3776),H=o(A),R=n(24),F=o(R),U=n(32),V=o(U),z=n(443),W=o(z),K=n(1),G=o(K),$=function(e){return{url:"//uploads.strikinglycdn.com/static/backgrounds/"+e+".jpg",thumbUrl:"//uploads.strikinglycdn.com/static/backgrounds/"+e.replace(/(\/)(\d)/,"$1t$2")+".jpg",sizing:"cover"}},Y=function(e){return{url:"//uploads.strikinglycdn.com/page/images/backgrounds/"+e+".jpg",thumbUrl:"//uploads.strikinglycdn.com/page/images/backgrounds/"+e+"-thumb.jpg",sizing:"cover"}},q=function(e){return{url:"http://uploads.strikinglycdn.com/static/backgrounds/pastel-solids/"+e+".jpg",thumbUrl:"http://uploads.strikinglycdn.com/static/backgrounds/pastel-solids/"+e+".jpg",sizing:"tile"}},J=function(e){return{url:"https://uploads.sxlcdn.com/static/backgrounds/"+e+".jpg",thumbUrl:"https://uploads.sxlcdn.com/static/backgrounds/"+e.replace(/(\/)(\d)/,"$1t$2")+".jpg",sizing:"cover"}},X=function(e,t,n){var o=["nature/194","cityscape/170","things/121","cityscape/166","nature/184"],i=$
if("solidBanner"===e){o=["banners/banner1","bg3","banners/banner3","banners/banner4","bg1"]
i=Y}if(v.default.getIsSxl()){o=["abstract/76","nature/190","cityscape/155","business-2/136","nature/171"]
i=J}if("pastelSolids"===e){o=["44","42","36","39","48"]
i=q}t&&t>0&&t<=n&&(o=o.splice(0,t))
return o.map(function(e){return i(e)})}
t.default=g.default.create({displayName:"BackgroundImage",mixins:[(0,b.default)("editor"),k.default,S.default.enableAfterMount()],image:null,onMouseDown:!1,bobcatPropTypes:j.default.bobcatPropTypes,getBobcatDefaultProps:j.default.getBobcatDefaultProps,componentDidMount:function(){var e=this
this.image=l.default.findDOMNode(this.refs.aviaryImage)
this.props.onSetBackgroundItemSelectionHandlers("image",this._getBackgroundImageItemSelectionHandlers())
if(this.image){this.image.onload=function(){e.getMeta("showFocusPanel")&&e.setImageSize()}
this.image.onerror=function(){e.image=null}}},componentWillUnmount:function(){this.removeImageLoadListner()
"undefined"!=typeof window&&document.removeEventListener("mouseup",this.onMouseUp)},removeImageLoadListner:function(){if(this.image){this.image.onload=function(){}
this.image.onerror=function(){}
this.image=null}},componentDidUpdate:function(){var e=l.default.findDOMNode(this.refs.aviaryImage)
if(this.image&&e.src!==this.image.src){this.image=e
this.setImageSize()}},_setImage:function(e){this.updateData(Object.assign({},(0,B.imageDataForSaving)(e),{useImage:!0}))},_imageUploaded:function(e){/\.mp4$/.test(e.getUrl())?this.updateData(Object.assign((0,B.imageDataForSaving)(e),{videoHtml:W.default.getVideoHtmlByUrl(e.getUrl(),1280,720),videoUrl:e.getUrl(),textColor:"overlay"})):this._setImage(e)
this.savePage()},_onPreviewColor:function(e){var t=this
return function(){t.props.storePreviewData()
t.updateData({textColor:e})}},_onClickTextColor:function(e){var t=this
return function(){t.updateData({textColor:e})
t.props.clearPreviewData()
t.savePage()}},_imageUrlMixin:function(e){var t={s:null,storage:null,storageKey:null,format:null,focus:null,w:null,h:null}
return Object.assign(t,e)},_createEnterStockImageFn:function(e){var t=this
return function(){t.props.storePreviewData()
t.updateData(t._imageUrlMixin({url:e.url,videoHtml:"",sizing:e.sizing,textColor:"overlay",userClassName:"",useImage:!0}))}},_createEnterStockBgColorFn:function(e){var t=this
return function(){t.props.storePreviewData()
t.updateData(t._imageUrlMixin({url:"",videoHtml:"",sizing:e.sizing,userClassName:e,useImage:!1}))}},_createClickStockImageFn:function(e){var t=this
return function(){t.updateData(t._imageUrlMixin({url:e.url,videoHtml:"",sizing:e.sizing,userClassName:"",w:16,h:9,useImage:!0}))
t.props.clearPreviewData()
t.savePage()
F.default.track("Editor - Edit Background")}},_createClickStockBgColorFn:function(e){var t=this
return function(){t.updateData(t._imageUrlMixin({url:"",videoHtml:"",sizing:e.sizing,userClassName:e,useImage:!1}))
t.props.clearPreviewData()
t.savePage()
F.default.track("Editor - Edit Background")}},_onClickEditImage:function(){var e=this
w.default.launchTuiEditor(this._getUrlForImageEditor(),{onSavedCallback:function(t){return e._imageUploaded(t)}})},_getUrlForImageEditor:function(){var e=p.default.assign({},this.props,{s:10})
return E.createImage(e).getUrlWithoutFocus(this.props.size)},_url:function(){return E.createImage(this.props).getUrl(this.props.size)},_onClickUpload:function(){var e=this.props.backgroundItemSelectionHandlers
I.default.pick({initialTabIdx:0,iconLibComponents:"background",from:"background",handlers:e.image,backgroudImageHandlers:e.image,backgroudVideoHandlers:e.video})},_getBackgroundImageItemSelectionHandlers:function(){return{itemUploaded:this._imageUploaded,itemSelected:this._imageUploaded}},_onClickMoreImage:function(){var e=this.props.backgroundItemSelectionHandlers
I.default.pick({initialTabIdx:2,iconLibComponents:"background",from:"background",handlers:e.image,backgroudImageHandlers:e.image,backgroudVideoHandlers:e.video})},_onChangeBackgroundSize:function(e){this.updateData({sizing:e.target.value})
this.savePage()},_onClickToggleFocusPanel:function(){if(this.image){var e=this.getMeta("showFocusPanel")
this.updateMeta({showFocusPanel:!e,showFocusIndicator:!1})
!e&&this.image.width>0&&this.setImageSize()}else{this.updateMeta({showFocusPanel:!1,showFocusIndicator:!1})
window.alert((0,G.default)("Error in loading the image due to network issue. Please try again."))}},transformCoordinates:function(e){var t=e.naturalWidth/e.width,n=this.getData().get("focus")
this.updateMeta({showFocusIndicator:!0,deltaPosition:{x:n.get("x")/t-10,y:n.get("y")/t-10}})},setImageSize:function(){var e=this.image
if(0!==e.height){var t=310/e.naturalWidth,n={width:310,height:Number((e.naturalHeight*t).toFixed(2)),naturalWidth:e.naturalWidth,naturalHeight:e.naturalHeight}
this.updateMeta({imageSize:n})
this.setFocusInitPosition(n)}},setFocusInitPosition:function(e){var t=this.getData().get("focus")
t&&!isNaN(t.get("x"))?this.transformCoordinates(e):this.updateMeta({showFocusIndicator:!0,deltaPosition:{x:e.width/2-10,y:e.height/2-10}})},_renderStockImage:function(e){var t=this,n=e,o=this.props.wasMinimal?3:5
n=void 0===n?o:n
var a=X(this.getData("stockKey"),n,o)
return i("span",{},void 0,a.map(function(e,n){var o={backgroundImage:"url("+e.thumbUrl+")"}
return i("li",{style:o,onClick:t._createClickStockImageFn(e),onMouseEnter:t._createEnterStockImageFn(e),onMouseLeave:t.props.restorePreviewData},n)}))},saveImageFocus:function(e){var t=e||this.getMeta("deltaPosition").toJS(),n=this.getMeta("imageSize").toJS(),o=n.naturalWidth/n.width
this.updateData({w:n.naturalWidth,h:n.naturalHeight,focus:{x:(t.x+10)*o,y:(t.y+10)*o}})},onDragStop:function(){this.saveImageFocus()},isShowSetFocus:function(){var e=this.getData(),t=L.default.getSiteAnimations().background
return v.default.getIsStrikingly()&&"parallax"!==t&&"fixed"!==t&&"cover"===e.get("sizing")},onMouseDownOnFocus:function(e){if(!e.target.className.includes("focus-indicator")&&3!==e.nativeEvent.which){this.$focusPanel=(0,c.default)(".focus-panel-background").eq(0)
document.addEventListener("mousemove",this.onDraging)
document.addEventListener("mouseup",this.onMouseUp)
this.choseFocus(e)}},onDraging:function(e){if(!e.target.className.includes("focus-indicator")&&this.$focusPanel){var t=e.pageX-this.$focusPanel.offset().left,n=e.pageY-this.$focusPanel.offset().top,o=this.getMeta("imageSize")
this.updateMeta({deltaPosition:{x:Math.min(o.get("width"),Math.max(0,t))-10,y:Math.min(o.get("height"),Math.max(0,n))-10}})}},choseFocus:function(e){if(this.$focusPanel){var t=this.getMeta("imageSize"),n=[0,t.get("width")+10],o=[0,t.get("height")+10],i={x:Math.min(n[1],Math.max(n[0],e.pageX-this.$focusPanel.offset().left)),y:Math.min(o[1],Math.max(o[0],e.pageY-this.$focusPanel.offset().top))},a={x:i.x-10,y:i.y-10}
this.updateMeta({deltaPosition:a})
this.saveImageFocus(a)}},onMouseUp:function(){document.removeEventListener("mousemove",this.onDraging)
document.removeEventListener("mouseup",this.onMouseUp)
this.onDragStop()},handleDrag:function(e,t){var n=this.getMeta("deltaPosition").toJS()
this.updateMeta({deltaPosition:{x:n.x+t.deltaX,y:n.y+t.deltaY}})},_renderColor$Image:function(){var e=this,t=this.props,n=t.bgClassNames,o=t.wasMinimal,a=n.length,r=o?3:5,s=""
a<r&&(s=this._renderStockImage(r-a))
return i("span",{},void 0,n.map(function(t,n){return i("li",{className:t,onClick:e._createClickStockBgColorFn(t),onMouseEnter:e._createEnterStockBgColorFn(t),onMouseLeave:e.props.restorePreviewData},n)}),s)},_renderImgEditButton:function(){return i("div",{className:"clearfix mb"},void 0,i("div",{className:"s-btn small no-margin dark-gray",onClick:this._onClickEditImage},void 0,(0,G.default)("Edit Image")))},render:function(){var e=this.props.visible
return i("div",{style:{display:e?"block":"none"}},void 0,r.default.createElement("img",{style:{display:"none"},src:this._getUrlForImageEditor(),ref:"aviaryImage"}),i("ul",{className:"s-layout-menu-field stock-images clearfix"},void 0,this.props.showDefaultColor?this._renderColor$Image():this._renderStockImage(),!this.props.wasMinimal&&i("li",{className:"btn",onClick:this._onClickMoreImage},void 0,i("span",{},void 0," ",(0,G.default)("More")," "))),i("div",{className:"clearfix mb"},void 0,i("div",{className:"s-btn small no-margin dark-gray",onClick:this._onClickUpload},void 0,(0,G.default)("Upload Image"))),this.props.showImageOptions?i("div",{},void 0,this._renderImgEditButton(),!V.default.isSmallScreen()&&i("div",{className:"drop-down-select mb"},void 0,i("div",{className:"icon"}),i("select",{onChange:this._onChangeBackgroundSize,value:this.props.sizing},void 0,i("option",{value:"cover"},void 0,(0,G.default)("Stretch")),i("option",{value:"contain"},void 0,(0,G.default)("Contain")),i("option",{value:"tile"},void 0,(0,G.default)("Tile")),i("option",{value:"center"},void 0,(0,G.default)("Center")))),this.isShowSetFocus()&&i("div",{className:"set-focus"},void 0,i("div",{onClick:this._onClickToggleFocusPanel},void 0,i("i",{className:"entypo-target"})," "+(0,G.default)("Set Focus")),i(H.default,{style:{display:this.getMeta("showFocusPanel")?"block":"none"},imageSize:this.getMeta("imageSize").toJS(),focusIndicatorRadius:10,handleDrag:this.handleDrag,onDragStop:this.onDragStop,onMouseDownOnFocus:this.onMouseDownOnFocus,deltaPosition:this.getMeta("deltaPosition").toJS(),showFocusIndicator:this.getMeta("showFocusIndicator"),imgSrc:this._getUrlForImageEditor()})),i("div",{className:"text-selection-wrap"},void 0,i("div",{className:"selection light-text "+("light"===this.props.textColor?"current":""),rel:"tooltip-left","data-original-title":(0,G.default)("Light Text"),onMouseEnter:this._onPreviewColor("light"),onMouseLeave:this.props.restorePreviewData,onClick:this._onClickTextColor("light")},void 0,"Tt"),i("div",{className:"selection text-overlay "+("overlay"===this.props.textColor?"current":""),rel:"tooltip-left","data-original-title":(0,G.default)("Light Text + Overlay"),onMouseEnter:this._onPreviewColor("overlay"),onMouseLeave:this.props.restorePreviewData,onClick:this._onClickTextColor("overlay")},void 0,"Tt"),i("div",{className:"selection dark-text "+("dark"===this.props.textColor?"current":""),rel:"tooltip-left","data-original-title":(0,G.default)("Dark Text"),onMouseEnter:this._onPreviewColor("dark"),onMouseLeave:this.props.restorePreviewData,onClick:this._onClickTextColor("dark")},void 0,"Tt"))):null)}})
e.exports=t.default},3776:function(e,t,n){"use strict";(function(o){function i(e){return e&&e.__esModule?e:{default:e}}function a(e){return r("div",{className:"focus-panel s-point-right",rel:"tooltip-left",style:e.style,title:o("Editor|Click the focal point of the image")},void 0,"Set the focus of the image:",r("div",{style:{height:e.imageSize.height,backgroundImage:"url("+e.imgSrc+")"},className:"focus-panel-draggable-wrapper focus-panel-background ",onMouseDown:e.onMouseDownOnFocus},void 0,e.showFocusIndicator&&r(u.default,{bounds:{left:-e.focusIndicatorRadius,right:e.imageSize.width-e.focusIndicatorRadius,top:-e.focusIndicatorRadius,bottom:e.imageSize.height-e.focusIndicatorRadius},onDrag:e.handleDrag,onStop:e.onDragStop,position:e.deltaPosition},void 0,r("div",{className:"focus-indicator cursor"}))))}Object.defineProperty(t,"__esModule",{value:!0})
var r=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,o,i){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=i
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}()
t.default=a
var s=n(0),l=(i(s),n(3777)),u=i(l)
e.exports=t.default}).call(t,n(1))},3777:function(e,t,n){!function(t,o){e.exports=o(n(15),n(0))}(0,function(e,t){return function(e){function t(o){if(n[o])return n[o].exports
var i=n[o]={i:o,l:!1,exports:{}}
e[o].call(i.exports,i,i.exports,t)
i.l=!0
return i.exports}var n={}
t.m=e
t.c=n
t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})}
t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e}
t.d(n,"a",n)
return n}
t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}
t.p=""
return t(t.s=12)}([function(e,t){"use strict"
function n(e,t){for(var n=0,o=e.length;n<o;n++)if(t.apply(t,[e[n],n,e]))return e[n]}function o(e){return"function"==typeof e||"[object Function]"===Object.prototype.toString.call(e)}function i(e){return"number"==typeof e&&!isNaN(e)}function a(e){return parseInt(e,10)}function r(e,t,n){if(e[t])return new Error("Invalid prop "+t+" passed to "+n+" - do not set this, set it on the child.")}Object.defineProperty(t,"__esModule",{value:!0})
t.findInArray=n
t.isFunction=o
t.isNum=i
t.int=a
t.dontSetMe=r},function(e){"use strict"
function t(e){return function(){return e}}var n=function(){}
n.thatReturns=t
n.thatReturnsFalse=t(!1)
n.thatReturnsTrue=t(!0)
n.thatReturnsNull=t(null)
n.thatReturnsThis=function(){return this}
n.thatReturnsArgument=function(e){return e}
e.exports=n},function(e){"use strict"
function t(e,t,o,i,a,r,s,l){n(t)
if(!e){var u
if(void 0===t)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.")
else{var c=[o,i,a,r,s,l],d=0
u=new Error(t.replace(/%s/g,function(){return c[d++]}))
u.name="Invariant Violation"}u.framesToPop=1
throw u}}var n=function(){}
"production"!==Object({DRAGGABLE_DEBUG:void 0}).NODE_ENV&&(n=function(e){if(void 0===e)throw new Error("invariant requires an error message argument")})
e.exports=t},function(e){"use strict"
e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(t){t.exports=e},function(e,t,n){"use strict"
function o(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n
return e}function i(e,t){C||(C=(0,E.findInArray)(["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"],function(t){return(0,E.isFunction)(e[t])}))
return!!(0,E.isFunction)(e[C])&&e[C](t)}function a(e,t,n){var o=e
do{if(i(o,t))return!0
if(o===n)return!1
o=o.parentNode}while(o)
return!1}function r(e,t,n){e&&(e.attachEvent?e.attachEvent("on"+t,n):e.addEventListener?e.addEventListener(t,n,!0):e["on"+t]=n)}function s(e,t,n){e&&(e.detachEvent?e.detachEvent("on"+t,n):e.removeEventListener?e.removeEventListener(t,n,!0):e["on"+t]=null)}function l(e){var t=e.clientHeight,n=e.ownerDocument.defaultView.getComputedStyle(e)
t+=(0,E.int)(n.borderTopWidth)
t+=(0,E.int)(n.borderBottomWidth)
return t}function u(e){var t=e.clientWidth,n=e.ownerDocument.defaultView.getComputedStyle(e)
t+=(0,E.int)(n.borderLeftWidth)
t+=(0,E.int)(n.borderRightWidth)
return t}function c(e){var t=e.clientHeight,n=e.ownerDocument.defaultView.getComputedStyle(e)
t-=(0,E.int)(n.paddingTop)
t-=(0,E.int)(n.paddingBottom)
return t}function d(e){var t=e.clientWidth,n=e.ownerDocument.defaultView.getComputedStyle(e)
t-=(0,E.int)(n.paddingLeft)
t-=(0,E.int)(n.paddingRight)
return t}function p(e,t){var n=t===t.ownerDocument.body,o=n?{left:0,top:0}:t.getBoundingClientRect()
return{x:e.clientX+t.scrollLeft-o.left,y:e.clientY+t.scrollTop-o.top}}function f(e){var t=e.x,n=e.y
return o({},(0,x.browserPrefixToKey)("transform",k.default),"translate("+t+"px,"+n+"px)")}function m(e){return"translate("+e.x+","+e.y+")"}function g(e,t){return e.targetTouches&&(0,E.findInArray)(e.targetTouches,function(e){return t===e.identifier})||e.changedTouches&&(0,E.findInArray)(e.changedTouches,function(e){return t===e.identifier})}function h(e){return e.targetTouches&&e.targetTouches[0]?e.targetTouches[0].identifier:e.changedTouches&&e.changedTouches[0]?e.changedTouches[0].identifier:void 0}function v(e){if(e){var t=e.getElementById("react-draggable-style-el")
if(!t){t=e.createElement("style")
t.type="text/css"
t.id="react-draggable-style-el"
t.innerHTML=".react-draggable-transparent-selection *::-moz-selection {background: transparent;}\n"
t.innerHTML+=".react-draggable-transparent-selection *::selection {background: transparent;}\n"
e.getElementsByTagName("head")[0].appendChild(t)}e.body&&_(e.body,"react-draggable-transparent-selection")}}function y(e){try{e&&e.body&&w(e.body,"react-draggable-transparent-selection")
window.getSelection().removeAllRanges()}catch(e){}}function b(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return N({touchAction:"none"},e)}function _(e,t){e.classList?e.classList.add(t):e.className.match(new RegExp("(?:^|\\s)"+t+"(?!\\S)"))||(e.className+=" "+t)}function w(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(?:^|\\s)"+t+"(?!\\S)","g"),"")}Object.defineProperty(t,"__esModule",{value:!0})
var N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}
t.matchesSelector=i
t.matchesSelectorAndParentsTo=a
t.addEvent=r
t.removeEvent=s
t.outerHeight=l
t.outerWidth=u
t.innerHeight=c
t.innerWidth=d
t.offsetXYFromParent=p
t.createCSSTransform=f
t.createSVGTransform=m
t.getTouch=g
t.getTouchIdentifier=h
t.addUserSelectStyles=v
t.removeUserSelectStyles=y
t.styleHacks=b
t.addClassName=_
t.removeClassName=w
var E=n(0),x=n(19),k=function(e){return e&&e.__esModule?e:{default:e}}(x),C=""},function(e){e.exports=t},function(e,t,n){if("production"!==Object({DRAGGABLE_DEBUG:void 0}).NODE_ENV){var o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,i=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}
e.exports=n(14)(i,!0)}else e.exports=n(17)()},function(e,t,n){"use strict"
var o=n(1),i=o
if("production"!==Object({DRAGGABLE_DEBUG:void 0}).NODE_ENV){var a=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o]
var i=0,a="Warning: "+e.replace(/%s/g,function(){return n[i++]})
"undefined"!=typeof console&&console.error(a)
try{throw new Error(a)}catch(e){}}
i=function(e,t){if(void 0===t)throw new Error("`warning(condition, format, ...args)` requires a warning message argument")
if(0!==t.indexOf("Failed Composite propType: ")&&!e){for(var n=arguments.length,o=Array(n>2?n-2:0),i=2;i<n;i++)o[i-2]=arguments[i]
a.apply(void 0,[t].concat(o))}}}e.exports=i},function(e,t,n){"use strict"
function o(e,t,n){if(!e.props.bounds)return[t,n]
var o=e.props.bounds
o="string"==typeof o?o:c(o)
var i=d(e)
if("string"==typeof o){var a=i.ownerDocument,r=a.defaultView,s=void 0
s="parent"===o?i.parentNode:a.querySelector(o)
if(!(s instanceof HTMLElement))throw new Error('Bounds selector "'+o+'" could not find an element.')
var l=r.getComputedStyle(i),u=r.getComputedStyle(s)
o={left:-i.offsetLeft+(0,p.int)(u.paddingLeft)+(0,p.int)(l.marginLeft),top:-i.offsetTop+(0,p.int)(u.paddingTop)+(0,p.int)(l.marginTop),right:(0,g.innerWidth)(s)-(0,g.outerWidth)(i)-i.offsetLeft+(0,p.int)(u.paddingRight)-(0,p.int)(l.marginRight),bottom:(0,g.innerHeight)(s)-(0,g.outerHeight)(i)-i.offsetTop+(0,p.int)(u.paddingBottom)-(0,p.int)(l.marginBottom)}}(0,p.isNum)(o.right)&&(t=Math.min(t,o.right));(0,p.isNum)(o.bottom)&&(n=Math.min(n,o.bottom));(0,p.isNum)(o.left)&&(t=Math.max(t,o.left));(0,p.isNum)(o.top)&&(n=Math.max(n,o.top))
return[t,n]}function i(e,t,n){return[Math.round(t/e[0])*e[0],Math.round(n/e[1])*e[1]]}function a(e){return"both"===e.props.axis||"x"===e.props.axis}function r(e){return"both"===e.props.axis||"y"===e.props.axis}function s(e,t,n){var o="number"==typeof t?(0,g.getTouch)(e,t):null
if("number"==typeof t&&!o)return null
var i=d(n),a=n.props.offsetParent||i.offsetParent||i.ownerDocument.body
return(0,g.offsetXYFromParent)(o||e,a)}function l(e,t,n){var o=e.state,i=!(0,p.isNum)(o.lastX),a=d(e)
return i?{node:a,deltaX:0,deltaY:0,lastX:t,lastY:n,x:t,y:n}:{node:a,deltaX:t-o.lastX,deltaY:n-o.lastY,lastX:o.lastX,lastY:o.lastY,x:t,y:n}}function u(e,t){return{node:t.node,x:e.state.x+t.deltaX,y:e.state.y+t.deltaY,deltaX:t.deltaX,deltaY:t.deltaY,lastX:e.state.x,lastY:e.state.y}}function c(e){return{left:e.left,top:e.top,right:e.right,bottom:e.bottom}}function d(e){var t=m.default.findDOMNode(e)
if(!t)throw new Error("<DraggableCore>: Unmounted during event!")
return t}Object.defineProperty(t,"__esModule",{value:!0})
t.getBoundPosition=o
t.snapToGrid=i
t.canDragX=a
t.canDragY=r
t.getControlPosition=s
t.createCoreData=l
t.createDraggableData=u
var p=n(0),f=n(4),m=function(e){return e&&e.__esModule?e:{default:e}}(f),g=n(5)},function(e,t,n){"use strict";(function(e){function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
var s=function(){function e(e,t){var n=[],o=!0,i=!1,a=void 0
try{for(var r,s=e[Symbol.iterator]();!(o=(r=s.next()).done);o=!0){n.push(r.value)
if(t&&n.length===t)break}}catch(e){i=!0
a=e}finally{try{!o&&s.return&&s.return()}finally{if(i)throw a}}return n}return function(t,n){if(Array.isArray(t))return t
if(Symbol.iterator in Object(t))return e(t,n)
throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n]
o.enumerable=o.enumerable||!1
o.configurable=!0
"value"in o&&(o.writable=!0)
Object.defineProperty(e,o.key,o)}}return function(t,n,o){n&&e(t.prototype,n)
o&&e(t,o)
return t}}(),u=n(6),c=o(u),d=n(7),p=o(d),f=n(4),m=o(f),g=n(5),h=n(9),v=n(0),y=n(11),b=o(y),_={touch:{start:"touchstart",move:"touchmove",stop:"touchend"},mouse:{start:"mousedown",move:"mousemove",stop:"mouseup"}},w=_.mouse,N=function(e){function t(){var e,n,o,r
i(this,t)
for(var l=arguments.length,u=Array(l),c=0;c<l;c++)u[c]=arguments[c]
return r=(n=o=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),o.state={dragging:!1,lastX:NaN,lastY:NaN,touchIdentifier:null},o.handleDragStart=function(e){o.props.onMouseDown(e)
if(!o.props.allowAnyClick&&"number"==typeof e.button&&0!==e.button)return!1
var t=m.default.findDOMNode(o)
if(!t||!t.ownerDocument||!t.ownerDocument.body)throw new Error("<DraggableCore> not mounted on DragStart!")
var n=t.ownerDocument
if(!(o.props.disabled||!(e.target instanceof n.defaultView.Node)||o.props.handle&&!(0,g.matchesSelectorAndParentsTo)(e.target,o.props.handle,t)||o.props.cancel&&(0,g.matchesSelectorAndParentsTo)(e.target,o.props.cancel,t))){var i=(0,g.getTouchIdentifier)(e)
o.setState({touchIdentifier:i})
var a=(0,h.getControlPosition)(e,i,o)
if(null!=a){var r=a.x,s=a.y,l=(0,h.createCoreData)(o,r,s);(0,b.default)("DraggableCore: handleDragStart: %j",l);(0,b.default)("calling",o.props.onStart)
if(!1!==o.props.onStart(e,l)){o.props.enableUserSelectHack&&(0,g.addUserSelectStyles)(n)
o.setState({dragging:!0,lastX:r,lastY:s});(0,g.addEvent)(n,w.move,o.handleDrag);(0,g.addEvent)(n,w.stop,o.handleDragStop)}}}},o.handleDrag=function(e){"touchmove"===e.type&&e.preventDefault()
var t=(0,h.getControlPosition)(e,o.state.touchIdentifier,o)
if(null!=t){var n=t.x,i=t.y
if(Array.isArray(o.props.grid)){var a=n-o.state.lastX,r=i-o.state.lastY,l=(0,h.snapToGrid)(o.props.grid,a,r),u=s(l,2)
a=u[0]
r=u[1]
if(!a&&!r)return
n=o.state.lastX+a,i=o.state.lastY+r}var c=(0,h.createCoreData)(o,n,i);(0,b.default)("DraggableCore: handleDrag: %j",c)
if(!1!==o.props.onDrag(e,c))o.setState({lastX:n,lastY:i})
else try{o.handleDragStop(new MouseEvent("mouseup"))}catch(e){var d=document.createEvent("MouseEvents")
d.initMouseEvent("mouseup",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null)
o.handleDragStop(d)}}},o.handleDragStop=function(e){if(o.state.dragging){var t=(0,h.getControlPosition)(e,o.state.touchIdentifier,o)
if(null!=t){var n=t.x,i=t.y,a=(0,h.createCoreData)(o,n,i),r=m.default.findDOMNode(o)
r&&o.props.enableUserSelectHack&&(0,g.removeUserSelectStyles)(r.ownerDocument);(0,b.default)("DraggableCore: handleDragStop: %j",a)
o.setState({dragging:!1,lastX:NaN,lastY:NaN})
o.props.onStop(e,a)
if(r){(0,b.default)("DraggableCore: Removing handlers");(0,g.removeEvent)(r.ownerDocument,w.move,o.handleDrag);(0,g.removeEvent)(r.ownerDocument,w.stop,o.handleDragStop)}}}},o.onMouseDown=function(e){w=_.mouse
return o.handleDragStart(e)},o.onMouseUp=function(e){w=_.mouse
return o.handleDragStop(e)},o.onTouchStart=function(e){w=_.touch
return o.handleDragStart(e)},o.onTouchEnd=function(e){w=_.touch
return o.handleDragStop(e)},n),a(o,r)}r(t,e)
l(t,[{key:"componentWillUnmount",value:function(){var e=m.default.findDOMNode(this)
if(e){var t=e.ownerDocument;(0,g.removeEvent)(t,_.mouse.move,this.handleDrag);(0,g.removeEvent)(t,_.touch.move,this.handleDrag);(0,g.removeEvent)(t,_.mouse.stop,this.handleDragStop);(0,g.removeEvent)(t,_.touch.stop,this.handleDragStop)
this.props.enableUserSelectHack&&(0,g.removeUserSelectStyles)(t)}}},{key:"render",value:function(){return c.default.cloneElement(c.default.Children.only(this.props.children),{style:(0,g.styleHacks)(this.props.children.props.style),onMouseDown:this.onMouseDown,onTouchStart:this.onTouchStart,onMouseUp:this.onMouseUp,onTouchEnd:this.onTouchEnd})}}])
return t}(c.default.Component)
N.displayName="DraggableCore"
N.propTypes={allowAnyClick:p.default.bool,disabled:p.default.bool,enableUserSelectHack:p.default.bool,offsetParent:function(t,n){if(!0===e.browser&&t[n]&&1!==t[n].nodeType)throw new Error("Draggable's offsetParent must be a DOM Node.")},grid:p.default.arrayOf(p.default.number),handle:p.default.string,cancel:p.default.string,onStart:p.default.func,onDrag:p.default.func,onStop:p.default.func,onMouseDown:p.default.func,className:v.dontSetMe,style:v.dontSetMe,transform:v.dontSetMe}
N.defaultProps={allowAnyClick:!1,cancel:null,disabled:!1,enableUserSelectHack:!0,offsetParent:null,handle:null,grid:null,transform:null,onStart:function(){},onDrag:function(){},onStop:function(){},onMouseDown:function(){}}
t.default=N}).call(t,n(20))},function(e,t){"use strict"
function n(){}Object.defineProperty(t,"__esModule",{value:!0})
t.default=n},function(e,t,n){"use strict"
var o=n(13).default
e.exports=o
e.exports.default=o
e.exports.DraggableCore=n(10).default},function(e,t,n){"use strict"
function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n
return e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},u=function(){function e(e,t){var n=[],o=!0,i=!1,a=void 0
try{for(var r,s=e[Symbol.iterator]();!(o=(r=s.next()).done);o=!0){n.push(r.value)
if(t&&n.length===t)break}}catch(e){i=!0
a=e}finally{try{!o&&s.return&&s.return()}finally{if(i)throw a}}return n}return function(t,n){if(Array.isArray(t))return t
if(Symbol.iterator in Object(t))return e(t,n)
throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n]
o.enumerable=o.enumerable||!1
o.configurable=!0
"value"in o&&(o.writable=!0)
Object.defineProperty(e,o.key,o)}}return function(t,n,o){n&&e(t.prototype,n)
o&&e(t,o)
return t}}(),d=n(6),p=o(d),f=n(7),m=o(f),g=n(4),h=o(g),v=n(18),y=o(v),b=n(5),_=n(9),w=n(0),N=n(10),E=o(N),x=n(11),k=o(x),C=function(e){function t(e){a(this,t)
var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
n.onDragStart=function(e,t){(0,k.default)("Draggable: onDragStart: %j",t)
if(!1===n.props.onStart(e,(0,_.createDraggableData)(n,t)))return!1
n.setState({dragging:!0,dragged:!0})}
n.onDrag=function(e,t){if(!n.state.dragging)return!1;(0,k.default)("Draggable: onDrag: %j",t)
var o=(0,_.createDraggableData)(n,t),i={x:o.x,y:o.y}
if(n.props.bounds){var a=i.x,r=i.y
i.x+=n.state.slackX
i.y+=n.state.slackY
var s=(0,_.getBoundPosition)(n,i.x,i.y),l=u(s,2),c=l[0],d=l[1]
i.x=c
i.y=d
i.slackX=n.state.slackX+(a-i.x)
i.slackY=n.state.slackY+(r-i.y)
o.x=i.x
o.y=i.y
o.deltaX=i.x-n.state.x
o.deltaY=i.y-n.state.y}if(!1===n.props.onDrag(e,o))return!1
n.setState(i)}
n.onDragStop=function(e,t){if(!n.state.dragging)return!1
if(!1===n.props.onStop(e,(0,_.createDraggableData)(n,t)))return!1;(0,k.default)("Draggable: onDragStop: %j",t)
var o={dragging:!1,slackX:0,slackY:0}
if(Boolean(n.props.position)){var i=n.props.position,a=i.x,r=i.y
o.x=a
o.y=r}n.setState(o)}
n.state={dragging:!1,dragged:!1,x:e.position?e.position.x:e.defaultPosition.x,y:e.position?e.position.y:e.defaultPosition.y,slackX:0,slackY:0,isElementSVG:!1}
return n}s(t,e)
c(t,[{key:"componentWillMount",value:function(){!this.props.position||this.props.onDrag||this.props.onStop||console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.")}},{key:"componentDidMount",value:function(){void 0!==window.SVGElement&&h.default.findDOMNode(this)instanceof window.SVGElement&&this.setState({isElementSVG:!0})}},{key:"componentWillReceiveProps",value:function(e){!e.position||this.props.position&&e.position.x===this.props.position.x&&e.position.y===this.props.position.y||this.setState({x:e.position.x,y:e.position.y})}},{key:"componentWillUnmount",value:function(){this.setState({dragging:!1})}},{key:"render",value:function(){var e,t={},n=null,o=Boolean(this.props.position),a=!o||this.state.dragging,r=this.props.position||this.props.defaultPosition,s={x:(0,_.canDragX)(this)&&a?this.state.x:r.x,y:(0,_.canDragY)(this)&&a?this.state.y:r.y}
this.state.isElementSVG?n=(0,b.createSVGTransform)(s):t=(0,b.createCSSTransform)(s)
var u=this.props,c=u.defaultClassName,d=u.defaultClassNameDragging,f=u.defaultClassNameDragged,m=p.default.Children.only(this.props.children),g=(0,y.default)(m.props.className||"",c,(e={},i(e,d,this.state.dragging),i(e,f,this.state.dragged),e))
return p.default.createElement(E.default,l({},this.props,{onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop}),p.default.cloneElement(m,{className:g,style:l({},m.props.style,t),transform:n}))}}])
return t}(p.default.Component)
C.displayName="Draggable"
C.propTypes=l({},E.default.propTypes,{axis:m.default.oneOf(["both","x","y","none"]),bounds:m.default.oneOfType([m.default.shape({left:m.default.number,right:m.default.number,top:m.default.number,bottom:m.default.number}),m.default.string,m.default.oneOf([!1])]),defaultClassName:m.default.string,defaultClassNameDragging:m.default.string,defaultClassNameDragged:m.default.string,defaultPosition:m.default.shape({x:m.default.number,y:m.default.number}),position:m.default.shape({x:m.default.number,y:m.default.number}),className:w.dontSetMe,style:w.dontSetMe,transform:w.dontSetMe})
C.defaultProps=l({},E.default.defaultProps,{axis:"both",bounds:!1,defaultClassName:"react-draggable",defaultClassNameDragging:"react-draggable-dragging",defaultClassNameDragged:"react-draggable-dragged",defaultPosition:{x:0,y:0},position:null})
t.default=C},function(e,t,n){"use strict"
var o=n(1),i=n(2),a=n(8),r=n(15),s=n(3),l=n(16)
e.exports=function(e,t){function n(e){var t=e&&(C&&e[C]||e[S])
if("function"==typeof t)return t}function u(e,t){return e===t?0!==e||1/e==1/t:e!==e&&t!==t}function c(e){this.message=e
this.stack=""}function d(e){function n(n,l,u,d,p,f,m){d=d||P
f=f||u
if(m!==s)if(t)i(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types")
else if("production"!==Object({DRAGGABLE_DEBUG:void 0}).NODE_ENV&&"undefined"!=typeof console){var g=d+":"+u
if(!o[g]&&r<3){a(!1,"You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.",f,d)
o[g]=!0
r++}}return null==l[u]?n?new c(null===l[u]?"The "+p+" `"+f+"` is marked as required in `"+d+"`, but its value is `null`.":"The "+p+" `"+f+"` is marked as required in `"+d+"`, but its value is `undefined`."):null:e(l,u,d,p,f)}if("production"!==Object({DRAGGABLE_DEBUG:void 0}).NODE_ENV)var o={},r=0
var l=n.bind(null,!1)
l.isRequired=n.bind(null,!0)
return l}function p(e){function t(t,n,o,i,a){var r=t[n]
if(N(r)!==e)return new c("Invalid "+i+" `"+a+"` of type `"+E(r)+"` supplied to `"+o+"`, expected `"+e+"`.")
return null}return d(t)}function f(e){function t(t,n,o,i,a){if("function"!=typeof e)return new c("Property `"+a+"` of component `"+o+"` has invalid PropType notation inside arrayOf.")
var r=t[n]
if(!Array.isArray(r)){return new c("Invalid "+i+" `"+a+"` of type `"+N(r)+"` supplied to `"+o+"`, expected an array.")}for(var l=0;l<r.length;l++){var u=e(r,l,o,i,a+"["+l+"]",s)
if(u instanceof Error)return u}return null}return d(t)}function m(e){function t(t,n,o,i,a){if(!(t[n]instanceof e)){var r=e.name||P
return new c("Invalid "+i+" `"+a+"` of type `"+k(t[n])+"` supplied to `"+o+"`, expected instance of `"+r+"`.")}return null}return d(t)}function g(e){function t(t,n,o,i,a){for(var r=t[n],s=0;s<e.length;s++)if(u(r,e[s]))return null
return new c("Invalid "+i+" `"+a+"` of value `"+r+"` supplied to `"+o+"`, expected one of "+JSON.stringify(e)+".")}if(!Array.isArray(e)){"production"!==Object({DRAGGABLE_DEBUG:void 0}).NODE_ENV&&a(!1,"Invalid argument supplied to oneOf, expected an instance of array.")
return o.thatReturnsNull}return d(t)}function h(e){function t(t,n,o,i,a){if("function"!=typeof e)return new c("Property `"+a+"` of component `"+o+"` has invalid PropType notation inside objectOf.")
var r=t[n],l=N(r)
if("object"!==l)return new c("Invalid "+i+" `"+a+"` of type `"+l+"` supplied to `"+o+"`, expected an object.")
for(var u in r)if(r.hasOwnProperty(u)){var d=e(r,u,o,i,a+"."+u,s)
if(d instanceof Error)return d}return null}return d(t)}function v(e){function t(t,n,o,i,a){for(var r=0;r<e.length;r++){if(null==(0,e[r])(t,n,o,i,a,s))return null}return new c("Invalid "+i+" `"+a+"` supplied to `"+o+"`.")}if(!Array.isArray(e)){"production"!==Object({DRAGGABLE_DEBUG:void 0}).NODE_ENV&&a(!1,"Invalid argument supplied to oneOfType, expected an instance of array.")
return o.thatReturnsNull}for(var n=0;n<e.length;n++){var i=e[n]
if("function"!=typeof i){a(!1,"Invalid argument supplied to oneOfType. Expected an array of check functions, but received %s at index %s.",x(i),n)
return o.thatReturnsNull}}return d(t)}function y(e){function t(t,n,o,i,a){var r=t[n],l=N(r)
if("object"!==l)return new c("Invalid "+i+" `"+a+"` of type `"+l+"` supplied to `"+o+"`, expected `object`.")
for(var u in e){var d=e[u]
if(d){var p=d(r,u,o,i,a+"."+u,s)
if(p)return p}}return null}return d(t)}function b(e){function t(t,n,o,i,a){var l=t[n],u=N(l)
if("object"!==u)return new c("Invalid "+i+" `"+a+"` of type `"+u+"` supplied to `"+o+"`, expected `object`.")
var d=r({},t[n],e)
for(var p in d){var f=e[p]
if(!f)return new c("Invalid "+i+" `"+a+"` key `"+p+"` supplied to `"+o+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "))
var m=f(l,p,o,i,a+"."+p,s)
if(m)return m}return null}return d(t)}function _(t){switch(typeof t){case"number":case"string":case"undefined":return!0
case"boolean":return!t
case"object":if(Array.isArray(t))return t.every(_)
if(null===t||e(t))return!0
var o=n(t)
if(!o)return!1
var i,a=o.call(t)
if(o!==t.entries){for(;!(i=a.next()).done;)if(!_(i.value))return!1}else for(;!(i=a.next()).done;){var r=i.value
if(r&&!_(r[1]))return!1}return!0
default:return!1}}function w(e,t){return"symbol"===e||("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}function N(e){var t=typeof e
return Array.isArray(e)?"array":e instanceof RegExp?"object":w(t,e)?"symbol":t}function E(e){if(void 0===e||null===e)return""+e
var t=N(e)
if("object"===t){if(e instanceof Date)return"date"
if(e instanceof RegExp)return"regexp"}return t}function x(e){var t=E(e)
switch(t){case"array":case"object":return"an "+t
case"boolean":case"date":case"regexp":return"a "+t
default:return t}}function k(e){return e.constructor&&e.constructor.name?e.constructor.name:P}var C="function"==typeof Symbol&&Symbol.iterator,S="@@iterator",P="<<anonymous>>",L={array:p("array"),bool:p("boolean"),func:p("function"),number:p("number"),object:p("object"),string:p("string"),symbol:p("symbol"),any:function(){return d(o.thatReturnsNull)}(),arrayOf:f,element:function(){function t(t,n,o,i,a){var r=t[n]
if(!e(r)){return new c("Invalid "+i+" `"+a+"` of type `"+N(r)+"` supplied to `"+o+"`, expected a single ReactElement.")}return null}return d(t)}(),instanceOf:m,node:function(){function e(e,t,n,o,i){return _(e[t])?null:new c("Invalid "+o+" `"+i+"` supplied to `"+n+"`, expected a ReactNode.")}return d(e)}(),objectOf:h,oneOf:g,oneOfType:v,shape:y,exact:b}
c.prototype=Error.prototype
L.checkPropTypes=l
L.PropTypes=L
return L}},function(e){"use strict"
function t(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined")
return Object(e)}var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable
e.exports=function(){try{if(!Object.assign)return!1
var e=new String("abc")
e[5]="de"
if("5"===Object.getOwnPropertyNames(e)[0])return!1
for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n
if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1
var o={}
"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e})
return"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}()?Object.assign:function(e){for(var a,r,s=t(e),l=1;l<arguments.length;l++){a=Object(arguments[l])
for(var u in a)o.call(a,u)&&(s[u]=a[u])
if(n){r=n(a)
for(var c=0;c<r.length;c++)i.call(a,r[c])&&(s[r[c]]=a[r[c]])}}return s}},function(e,t,n){"use strict"
function o(e,t,n,o,l){if("production"!==Object({DRAGGABLE_DEBUG:void 0}).NODE_ENV)for(var u in e)if(e.hasOwnProperty(u)){var c
try{i("function"==typeof e[u],"%s: %s type `%s` is invalid; it must be a function, usually from the `prop-types` package, but received `%s`.",o||"React class",n,u,typeof e[u])
c=e[u](t,u,o,n,null,r)}catch(e){c=e}a(!c||c instanceof Error,"%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",o||"React class",n,u,typeof c)
if(c instanceof Error&&!(c.message in s)){s[c.message]=!0
var d=l?l():""
a(!1,"Failed %s type: %s%s",n,c.message,null!=d?d:"")}}}if("production"!==Object({DRAGGABLE_DEBUG:void 0}).NODE_ENV)var i=n(2),a=n(8),r=n(3),s={}
e.exports=o},function(e,t,n){"use strict"
var o=n(1),i=n(2),a=n(3)
e.exports=function(){function e(e,t,n,o,r,s){s!==a&&i(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e
var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t}
n.checkPropTypes=o
n.PropTypes=n
return n}},function(e,t){var n,o
!function(){"use strict"
function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t]
if(n){var o=typeof n
if("string"===o||"number"===o)e.push(n)
else if(Array.isArray(n))e.push(i.apply(null,n))
else if("object"===o)for(var r in n)a.call(n,r)&&n[r]&&e.push(r)}}return e.join(" ")}var a={}.hasOwnProperty
void 0!==e&&e.exports?e.exports=i:(n=[],void 0!==(o=function(){return i}.apply(t,n))&&(e.exports=o))}()},function(e,t){"use strict"
function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"transform"
if("undefined"==typeof window||void 0===window.document)return""
var t=window.document.documentElement.style
if(e in t)return""
for(var n=0;n<r.length;n++)if(o(e,r[n])in t)return r[n]
return""}function o(e,t){return t?""+t+a(e):e}function i(e,t){return t?"-"+t.toLowerCase()+"-"+e:e}function a(e){for(var t="",n=!0,o=0;o<e.length;o++)if(n){t+=e[o].toUpperCase()
n=!1}else"-"===e[o]?n=!0:t+=e[o]
return t}Object.defineProperty(t,"__esModule",{value:!0})
t.getPrefix=n
t.browserPrefixToKey=o
t.browserPrefixToStyle=i
var r=["Moz","Webkit","O","ms"]
t.default=n()},function(e){function t(){throw new Error("setTimeout has not been defined")}function n(){throw new Error("clearTimeout has not been defined")}function o(e){if(u===setTimeout)return setTimeout(e,0)
if((u===t||!u)&&setTimeout){u=setTimeout
return setTimeout(e,0)}try{return u(e,0)}catch(t){try{return u.call(null,e,0)}catch(t){return u.call(this,e,0)}}}function i(e){if(c===clearTimeout)return clearTimeout(e)
if((c===n||!c)&&clearTimeout){c=clearTimeout
return clearTimeout(e)}try{return c(e)}catch(t){try{return c.call(null,e)}catch(t){return c.call(this,e)}}}function a(){if(m&&p){m=!1
p.length?f=p.concat(f):g=-1
f.length&&r()}}function r(){if(!m){var e=o(a)
m=!0
for(var t=f.length;t;){p=f
f=[]
for(;++g<t;)p&&p[g].run()
g=-1
t=f.length}p=null
m=!1
i(e)}}function s(e,t){this.fun=e
this.array=t}function l(){}var u,c,d=e.exports={}
!function(){try{u="function"==typeof setTimeout?setTimeout:t}catch(e){u=t}try{c="function"==typeof clearTimeout?clearTimeout:n}catch(e){c=n}}()
var p,f=[],m=!1,g=-1
d.nextTick=function(e){var t=new Array(arguments.length-1)
if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n]
f.push(new s(e,t))
1!==f.length||m||o(r)}
s.prototype.run=function(){this.fun.apply(null,this.array)}
d.title="browser"
d.browser=!0
d.env={}
d.argv=[]
d.version=""
d.versions={}
d.on=l
d.addListener=l
d.once=l
d.off=l
d.removeListener=l
d.removeAllListeners=l
d.emit=l
d.prependListener=l
d.prependOnceListener=l
d.listeners=function(){return[]}
d.binding=function(){throw new Error("process.binding is not supported")}
d.cwd=function(){return"/"}
d.chdir=function(){throw new Error("process.chdir is not supported")}
d.umask=function(){return 0}}])})},3778:function(e,t,n){"use strict";(function(o){function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var a=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,o,i){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=i
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),r=n(0),s=i(r),l=n(3),u=(i(l),n(6)),c=i(u),d=n(18),p=i(d),f=n(42),m=i(f),g=n(443),h=i(g),v=n(116),y=i(v),b=n(3745),_=i(b),w=n(3779),N=i(w),E=n(4),x=i(E),k=["qTd16Oo7sC4","WDXckTq7eYU","WWI4wacb-p0","m703dyf06rU","PxrCJjTrLJs"].map(function(e){return{url:"https://www.youtube.com/watch?v="+e,thumbUrl:"https://img.youtube.com/vi/"+e+"/maxresdefault.jpg"}})
t.default=p.default.create({displayName:"BackgroundVideo",mixins:[(0,m.default)("editor")],bobcatPropTypes:_.default.bobcatPropTypes,getBobcatDefaultProps:_.default.getBobcatDefaultProps,componentDidMount:function(){this.props.onSetBackgroundItemSelectionHandlers("video",this._getBackgroundVideoItemSelectionHandlers())},_getVideoProps:function(){return{videoHtml:this.props.vidoeHtml,videoUrl:this.props.videoUrl,binding:this.getDefaultBinding().sub("_addVideoPanel"),onComponentDidMount:this.props.changePositionOfAddVideoPanel,updateVideoBg:this._updateVideoBg,showVideoPanel:this.getMeta("showVideoPanel")}},_updateVideoBg:function(e){switch(e.actionState){case"add":var t={videoHtml:e.videoHtml,url:e.url,textColor:"overlay",w:null,h:null,storage:null,storageKey:null,format:null,useImage:!1}
e.videoUrl&&(t.videoUrl=e.videoUrl)
this.updateData(t)
this.updateMeta({showVideoPanel:!1})
this.props.clearPreviewData()
e.lowResThumbnail&&this._adjustVideoBgThumbnail(e)
break
case"preview":this.props.storePreviewData()
this.updateData({videoHtml:e.videoHtml,url:e.url,textColor:"overlay",w:null,h:null,storage:null,storageKey:null,format:null})
break
case"endPreview":this.props.restorePreviewData()}},_adjustVideoBgThumbnail:function(e){var t=this,n=(0,c.default)("<img src='"+e.url+"' />")
n.load(function(){n[0].naturalWidth<200&&t.updateData({url:e.lowResThumbnail})})
n.error(function(){t.updateData({url:e.lowResThumbnail})})},_createEnterStockVideoFn:function(e){var t=this
return function(){t._updateVideoBg({videoHtml:h.default.getVideoHtmlByUrl(e.url,1280,720),url:e.thumbUrl,actionState:"preview"})}},_createClickStockVideoFn:function(e){var t=this
return function(){t._updateVideoBg({videoHtml:h.default.getVideoHtmlByUrl(e.url,1280,720),url:e.thumbUrl,actionState:"add"})
t.savePage()}},_onMouseLeaveStockVideo:function(){this._updateVideoBg({actionState:"endPreview"})},_onClickToggleVideoPanel:function(){this.updateMeta({showVideoPanel:!this.getMeta("showVideoPanel")})},_getBackgroundVideoItemSelectionHandlers:function(){var e=this
return{itemSelected:function(t){e._updateVideoBg({videoHtml:h.default.getVideoHtmlByUrl(t.url,1280,720),url:t.thumbUrl,actionState:"add"})
e.savePage()}}},_onClickMoreVideo:function(){var e=this.props.backgroundItemSelectionHandlers
y.default.pick({dialogType:"video",from:"background",handlers:e.video,backgroudImageHandlers:e.image,backgroudVideoHandlers:e.video})},_renderStockVideo:function(){var e=this
return a("ul",{className:"s-layout-menu-field stock-videos clearfix"},void 0,k.map(function(t,n){var o={backgroundImage:"url("+t.thumbUrl.replace("maxresdefault","mqdefault")+")",backgroundSize:"cover"}
return a("li",{className:"stock-video-button",style:o,onClick:e._createClickStockVideoFn(t),onMouseEnter:e._createEnterStockVideoFn(t),onMouseLeave:e._onMouseLeaveStockVideo},n,a("i",{className:"fa fa-video-camera"}))}),a("li",{className:"btn",onClick:this._onClickMoreVideo},void 0,a("span",{},void 0,o("Video|More"))))},render:function(){var e=this.props.visible
return a("div",{style:{display:e?"block":"none"}},void 0,this.getMeta("showVideoPanel")&&s.default.createElement(N.default,this._getVideoProps()),x.default.getIsStrikingly()&&this._renderStockVideo(),a("div",{className:"clearfix mb"},void 0,a("div",{className:"add-video-btn s-btn small no-margin dark-gray",onClick:this._onClickToggleVideoPanel},void 0,o("Video|Embed Video"))))}})
e.exports=t.default}).call(t,n(1))},3779:function(e,t,n){"use strict";(function(o){function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var a=n(3),r=i(a),s=n(6),l=i(s),u=n(18),c=i(u),d=n(1280),p=i(d),f=n(443),m=i(f),g=n(120),h=i(g),v=n(41),y=function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
t.default=e
return t}(v),b=n(42),_=i(b),w=n(24),N=i(w),E=n(3780),x=i(E)
t.default=c.default.createPageComponent({displayName:"BackgroundVideoPanel",mixins:[(0,_.default)("editor")],bobcatPropTypes:{callbacks:{onComponentDidMount:r.default.func.isRequired,updateVideoBg:r.default.func.isRequired,showVideoPanel:r.default.bool.isRequired}},componentWillMount:function(){this.initMeta({needToShowUrlError:!1,tempVideoUrl:this.props.videoUrl,isUploading:!1})},componentDidMount:function(){this.cbProps.onComponentDidMount()},_tempVideoUrl:function(){return this.getMeta("tempVideoUrl")},_needToShowUrlError:function(){return this.getMeta("needToShowUrlError")},_updateVideo:function(e){return this.cbProps.updateVideoBg(e)},_uploadSuccess:function(e,t){var n=this
return function(i){var a=(0,l.default)(i.message.html),r=a.attr("height"),s=a.attr("width")
switch(t){case"youtube":n._updateVideo({videoHtml:m.default.getYTIFrameHtml(m.default.getVideoID(e,t),s,r),videoUrl:e,url:m.default.getHDYTThumbnail(m.default.getVideoID(e,t)),lowResThumbnail:m.default.getNormalYTThumbnail(m.default.getVideoID(e,t)),actionState:"add"})
break
case"vimeo":n._updateVideo({videoHtml:m.default.getVimeoIFrameHtml(m.default.getVideoID(e,t),s,r),videoUrl:e,url:i.message.thumbnail_url,actionState:"add"})
break
default:window.alert(o("Video|Video format is not supported. Please use Youtube/Vimeo full URL only."))}n.updateMeta({isUploading:!1,needToShowUrlError:!1})
n.savePage()
N.default.track("Editor - Add Video Background")}},_uploadFail:function(){status.responseJSON
this.updateMeta({needToShowUrlError:!0,isUploading:!1})},_uploadVideo:function(){this.updateMeta({isUploading:!0})
var e=y.addProtocol(this.getMeta("tempVideoUrl")),t=m.default.getVideoType(e)
return p.default.upload({url:e,maxwidth:1440,success:this._uploadSuccess(e,t),error:this._uploadFail})},_onChangeUrl:function(e){this.updateMeta({tempVideoUrl:h.default.escapedValue(e.target.value)})},render:function(){return x.default.apply(this)}})
e.exports=t.default}).call(t,n(1))},3780:function(e,t,n){"use strict";(function(t){function o(){var e=r.DOM.input
return i.createElement("div",{className:"bg-video-panel s-point-right s-tooltip-dialog "+a.keys(a.pick({active:this.cbProps.showVideoPanel},a.identity)).join(" ")},i.createElement("div",{className:"menu-title"},t("Video|Use Youtube/Vimeo Video")),i.createElement("div",{className:"input-wrap"},i.createElement(e,{type:"text",placeholder:t("Video|Enter Youtube/Vimeo URL"),onChange:this._onChangeUrl,value:this._tempVideoUrl()}),this._getIsUploading()?null:i.createElement("span",{className:"no-border no-margin s-btn small yellow",onClick:this._uploadVideo},t("Video|Upload")),this._getIsUploading()?i.createElement("span",{className:"gray no-border no-margin s-btn small"},t("Video|Uploading...")):null),this._needToShowUrlError()?i.createElement("div",{className:"error-message"},i.createElement("div",{className:"fa fa-question-circle"}),"\n    ",t("Video|Video URL is invalid."),"\n    ",i.createElement(s,{},i.createElement("a",{href:"http://support.strikingly.com/hc/en-us/articles/215046387",target:"_blank"},t("Video|Learn more.")),i.createElement("a",{href:"http://help.sxl.cn/hc/zh-cn/articles/215309018",target:"_blank"},"了解更多"))):null,i.createElement("div",{className:"hint"},t("Video|Note: Video backgrounds won't play on phones or tablets. A thumbnail will be shown instead.")))}var i=n(0),a=n(2),r=n(21),s=n(56)
e.exports=function(){return o.apply(this,[])}}).call(t,n(1))},3781:function(e,t,n){"use strict";(function(o){function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
var l=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,o,i){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=i
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n]
o.enumerable=o.enumerable||!1
o.configurable=!0
"value"in o&&(o.writable=!0)
Object.defineProperty(e,o.key,o)}}return function(t,n,o){n&&e(t.prototype,n)
o&&e(t,o)
return t}}(),c=n(0),d=(i(c),n(2)),p=i(d),f=n(3742),m=n(451),g=i(m),h=n(3746),v=i(h),y=n(152),b=i(y),_=n(7),w=i(_),N=n(4),E=(i(N),n(27)),x=i(E),k=n(70),C=i(k),S=function(e){function t(e){a(this,t)
var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
n.cacheLevel=-1
n.sectionName="blog section"
return n}s(t,e)
u(t,[{key:"componentDidMount",value:function(){var e=this;(0,this.props.addBlogCategoriesChangeListener)(function(){e.forceUpdate()})}},{key:"getRotationKeys",value:function(){var e=(this.props.themeName,this._getParsedLayoutVariation()),t=e.columns,n=e.thumbnail,o=e.snippet,i=e.showCategoryTabs
return this.props.layoutOptions.map(function(e){var a=e.replace("thumbnail","smallCircle"===n||"smallSquare"===n?n:"smallCircle")
a=a.replace("snippet","short"===o||"long"===o?o:"short")
a=a.replace("num","one"!==t?t:"three")
return a+"-"+(i?"show":"none")})}},{key:"_renderColumnsButton",value:function(){function e(e){return r[e]}var t=this,n=this._getParsedLayoutVariation(),i=n.columns,a=n.getAllColumns,r=a(),s=Object.keys(r)
return l(v.default,{keys:s,selectedKey:i,textMapping:e,labelText:o("Editor|Columns Per Row"),className:"small-buttons four",onSelect:function(e){return t._changeColumns({columns:e})}})}},{key:"_renderThumbnailDropdown",value:function(){var e=this,t=this._getParsedLayoutVariation(),n=t.getThumbnailSelectItem()
return n.length>0&&l("div",{className:"s-layout-menu-field drop-down-select"},void 0,l("div",{className:"s-layout-menu-label"},void 0,o("Editor|Thumbnail")),l("select",{value:this._getParsedLayoutVariation().thumbnail,onChange:function(t){return e._changeThumbnail({thumbnail:t.target.value})}},void 0,n.map(function(e,t){return l("option",{value:e.value},t,e.name)})))}},{key:"_renderSnippetDropdown",value:function(){var e=this,t=this._getParsedLayoutVariation(),n=t.getSnippetSelectItem()
return n.length>1&&l("div",{className:"s-layout-menu-field drop-down-select"},void 0,l("div",{className:"s-layout-menu-label"},void 0,o("Editor|Snippet")),l("select",{value:this._getParsedLayoutVariation().snippet,onChange:function(t){return e._patchLayout({snippet:t.target.value})}},void 0,n.map(function(e,t){return l("option",{value:e.value},t,e.name)})))}},{key:"_renderPostPerPageDropdown",value:function(){var e=this
return l("div",{className:"s-layout-menu-field drop-down-select"},void 0,l("div",{className:"s-layout-menu-label"},void 0,o("Editor|Posts Per Page")),l("select",{value:this.state.postsNumPerPage||b.default.getBlogSetting().previewNumber||10,onChange:function(t){e._changePostPerPage(t.target.value)}},void 0,p.default.range(3,21).map(function(e,t){return l("option",{value:e},t,e)})))}},{key:"_renderShowCategoryCheckbox",value:function(){var e=this,t=this._getParsedLayoutVariation(),n=t.showCategoryTabs
return(0,this.props.getCategories)().length>0&&l("div",{className:"s-layout-menu-field layout-level-button layout-checkbox dark-bg",onClick:function(){e._patchLayout({showCategoryTabs:!n})}},void 0,l("input",{type:"checkbox",checked:n,onChange:function(){e._patchLayout({showCategoryTabs:!n})}}),l("span",{},void 0,o("Editor|Show category tabs")))}},{key:"renderLayoutOptions",value:function(){return l("div",{},void 0,this._renderColumnsButton(),this._renderThumbnailDropdown(),this._renderSnippetDropdown(),this._renderPostPerPageDropdown(),this._renderShowCategoryCheckbox())}},{key:"_changePostPerPage",value:function(e){var t=this.props,n=t.siteId,o=t.saveBlogPreviewNum
this.setState({postsNumPerPage:e})
o(n,e)}},{key:"_changeThumbnail",value:function(e){"one"!==this._getParsedLayoutVariation().columns&&"card"===e.thumbnail&&(e.snippet="none")
this._patchLayout(e)}},{key:"_changeColumns",value:function(e){var t=this._getParsedLayoutVariation(),n=t.columns
if(e.columns!==n&&("one"===n||"one"===e.columns)){e.thumbnail="landscape"
e.snippet="none"}this._patchLayout(e)}},{key:"_patchLayout",value:function(e){var t=Object.assign(this._getParsedLayoutVariation(),e),n=t.serialize()
this.props.updateLayout(n)}},{key:"_getParsedLayoutVariation",value:function(){return g.default.parseLayoutVariation(this._levelKeys.join("-"))}}])
return t}(f.BaseLayoutButton)
t.default=(0,x.default)(S,[],function(){return{themeName:w.default.getThemeName(),siteId:w.default.getId()}},function(){return{saveBlogPreviewNum:function(e,t){C.default.saveBlogPreviewNum(e,t)},getCategories:function(){return b.default.getCategories()},addBlogCategoriesChangeListener:function(e){b.default.addBlogCategoriesChangeListener(e)}}})
e.exports=t.default}).call(t,n(1))},3782:function(e,t,n){"use strict";(function(o){function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var a=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,o,i){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=i
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),r=n(0),s=(i(r),n(3)),l=i(s),u=n(1274),c=i(u),d=n(11),p=i(d),f=n(80),m=i(f),g=n(18),h=i(g),v=n(152),y=i(v),b=n(7),_=i(b),w=n(27),N=i(w),E=h.default.createPageComponent({mixins:[m.default.enableAfterUpdate()],displayName:"BlogSectionCategorySelector",bobcatPropTypes:{data:{category:l.default.object,binding:l.default.object}},getBobcatDefaultProps:function(){return{data:{category:p.default.Map({id:"all"})}}},componentDidMount:function(){var e=this;(0,this.props.addBlogCategoriesChangeListener)(function(t){"all"===e.props.category.get("id")||y.default.isCategoryIdExist(e.props.category.get("id"))?t===e.props.category.get("id")&&e.forceUpdate():e._onChangeCategory({value:"all"})})},_createDropdownOptions:function(){var e=this.props.getCategories,t=this.props.category.get("id"),n=e().map(function(e){return{value:e.id,label:e.id.toString()===t.toString()?a("div",{className:"option capitalize selected"},void 0,e.name):a("div",{className:"option capitalize"},void 0,e.name)}})
n.length&&"all"!==t&&n.unshift({value:"all",label:a("div",{className:"option"},void 0,o("Sections|All Categories"))})
return n},_getSelectedCategoryName:function(e){var t=this.props.getCategories,n=t(),i=n.find(function(t){return t.id.toString()===e.toString()})
return i?i.name:o("Sections|All Categories")},_onChangeCategory:function(e){var t=this,n=e.value
this.updateData({category:{id:n,name:this._getSelectedCategoryName(n)}})
setTimeout(function(){t.savePage()},1)},render:function(){var e=this.props.category
return this._createDropdownOptions().length<1?null:a("div",{className:"s-component s-category-selector no-text-transform"},void 0,a("div",{className:"s-component-editor",rel:"tooltip-left",title:o("all"===e.get("id")?"Sections|Select a category for this section.":"Sections|Only show posts from a certain category.")},void 0,a(c.default,{options:this._createDropdownOptions(),value:this._getSelectedCategoryName(this.props.category.get("id")),onChange:this._onChangeCategory})))}})
t.default=(0,N.default)(E,[],function(){return{pageId:_.default.getId()}},function(){return{addBlogCategoriesChangeListener:function(e){y.default.addBlogCategoriesChangeListener(e)},getCategories:function(){return y.default.getCategories()}}})
e.exports=t.default}).call(t,n(1))},3783:function(e,t,n){"use strict";(function(t){var o=n(0)
n(2)
e.exports=function(){return o.createElement("div",{className:"s-blog-thumb s-section-thumb "+this._getBackgroundClass(),style:this._getBackgroundStyle()},o.createElement("div",{className:"s-section-thumb-content"},o.createElement("div",{className:"p100"},o.createElement("div",{className:"title-group"},o.createElement("div",{className:"s-font-title title"},t("Sections|Our Blog"))),o.createElement("div",{className:"blog"},o.createElement("div",{className:"blog-row"},o.createElement("div",{className:"blog-post"},o.createElement("div",{className:"blog-post-image"},o.createElement("img",{src:"//uploads.strikinglycdn.com/static/sections/blog-image-1.jpg"})),o.createElement("div",{className:"blog-post-content"},o.createElement("div",{className:"blog-post-title s-font-heading"},t("Sections|New Blog Feature!")),o.createElement("div",{className:"blog-post-subtitle"},t("Sections|September 17")))),o.createElement("div",{className:"blog-post"},o.createElement("div",{className:"blog-post-image"},o.createElement("img",{src:"//uploads.strikinglycdn.com/static/sections/blog-image-2.jpg"})),o.createElement("div",{className:"blog-post-content"},o.createElement("div",{className:"blog-post-title s-font-heading"},t("Sections|Lessons Learned from Starting Up")),o.createElement("div",{className:"blog-post-subtitle"},t("Sections|September 12")))),o.createElement("div",{className:"blog-post"},o.createElement("div",{className:"blog-post-image"},o.createElement("img",{src:"//uploads.strikinglycdn.com/static/sections/blog-image-3.jpg"})),o.createElement("div",{className:"blog-post-content"},o.createElement("div",{className:"blog-post-title s-font-heading"},t("Sections|Our Commitment to Service")),o.createElement("div",{className:"blog-post-subtitle"},t("Sections|August 30"))))),o.createElement("div",{className:"blog-row"},o.createElement("div",{className:"blog-post"},o.createElement("div",{className:"blog-post-image"},o.createElement("img",{src:"//uploads.strikinglycdn.com/static/backgrounds/things/t121.jpg"})),o.createElement("div",{className:"blog-post-content"},o.createElement("div",{className:"blog-post-title s-font-heading"},t("Sections|New Blog Feature!")),o.createElement("div",{className:"blog-post-subtitle"},t("Sections|September 17")))),o.createElement("div",{className:"blog-post"},o.createElement("div",{className:"blog-post-image"},o.createElement("img",{src:"//uploads.strikinglycdn.com/static/backgrounds/cityscape/t170.jpg"})),o.createElement("div",{className:"blog-post-content"},o.createElement("div",{className:"blog-post-title s-font-heading"},t("Sections|Lessons Learned from Starting Up")),o.createElement("div",{className:"blog-post-subtitle"},t("Sections|September 12")))),o.createElement("div",{className:"blog-post"},o.createElement("div",{className:"blog-post-image"},o.createElement("img",{src:"//uploads.strikinglycdn.com/static/backgrounds/things/t121.jpg"})),o.createElement("div",{className:"blog-post-content"},o.createElement("div",{className:"blog-post-title s-font-heading"},t("Sections|Our Commitment to Service")),o.createElement("div",{className:"blog-post-subtitle"},t("Sections|August 30")))))))))}}).call(t,n(1))},3784:function(e,t,n){"use strict";(function(o){function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
var l=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,o,i){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=i
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),u=function(){function e(e,t){var n=[],o=!0,i=!1,a=void 0
try{for(var r,s=e[Symbol.iterator]();!(o=(r=s.next()).done);o=!0){n.push(r.value)
if(t&&n.length===t)break}}catch(e){i=!0
a=e}finally{try{!o&&s.return&&s.return()}finally{if(i)throw a}}return n}return function(t,n){if(Array.isArray(t))return t
if(Symbol.iterator in Object(t))return e(t,n)
throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n]
o.enumerable=o.enumerable||!1
o.configurable=!0
"value"in o&&(o.writable=!0)
Object.defineProperty(e,o.key,o)}}return function(t,n,o){n&&e(t.prototype,n)
o&&e(t,o)
return t}}(),d=n(2),p=i(d),f=n(0),m=(i(f),n(3742)),g=function(e){function t(e){a(this,t)
var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),o=e.themeName
n.cacheLevel="perspective"===o?1:0
n.sectionName="new_media"
return n}s(t,e)
c(t,[{key:"updateCachedKeys",value:function(e){var t=this.props.themeName,n="perspective"===t?3:2
e[n]=this._levelKeys[n]
this._updateLayout(e)}},{key:"updateToDefaultLayout",value:function(e){var t=n(3744),o=this.props.themeName,i="perspective"===o?1:0,a=p.default.clone(this._levelKeys)
a[i]=e
var r=t.getDefaultLayoutKey(o,a.join("-"))
this.props.updateLayout(r)}},{key:"getRotationKeys",value:function(){var e=u(this._levelKeys,4),t=e[0],n=e[1],o=e[2],i=e[3]
switch(t){case"row":return this._getKeysByLevel(3).map(function(e){return"row-"+n+"-"+o+"-"+e})
case"col":return this._getKeysByLevel(1).map(function(e){return"col-"+e+"-"+o})
case"media":return this._getKeysByLevel(1).map(function(e){return"media-"+e+"-"+o})
case"mediaLeft":case"mediaRight":case"center":return["mediaLeft","mediaRight","center"].map(function(e){return e+"-"+n+"-"+o+"-"+i})
default:return[]}}},{key:"getButtonClassMapping",value:function(){return"perspective"===this.props.themeName?["big-buttons","big-buttons",this._getSmallButtonClass(2),"big-buttons"]:["big-buttons","media"===this._levelKeys[0]?"big-buttons":this._getSmallButtonClass(1),"big-buttons","big-buttons"]}},{key:"renderLayoutOptions",value:function(){var e=this.props.themeName
return l("div",{},void 0,this._getKeysByLevel(0)&&this._renderLayoutButtons(0),this._getKeysByLevel(1)&&this._renderLayoutButtons(1),"perspective"===e?this._getKeysByLevel(3)&&this._renderCheckBox({levelNum:3,checkedKey:"button",unCheckedKey:"text",labelText:o("Editor|Show Buttons")}):l("div",{},void 0,this._getKeysByLevel(3)&&this._renderLayoutButtons(3),this._getKeysByLevel(2)&&this._renderCheckBox({levelNum:2,checkedKey:"button",unCheckedKey:"text",labelText:o("Editor|Show Buttons")})))}}])
return t}(m.BaseLayoutButton)
t.default=(0,m.connectToStores)(g)
e.exports=t.default}).call(t,n(1))},3785:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
t.default=n(3754)
e.exports=t.default},3786:function(e,t,n){"use strict";(function(t){var o=n(0)
n(2)
e.exports=function(){return o.createElement("div",{className:"s-cta-thumb s-section-thumb "+this._getBackgroundClass(),style:this._getBackgroundStyle()},o.createElement("div",{className:"s-section-thumb-content"},o.createElement("div",{className:"p100"},o.createElement("div",{className:"title-group"},o.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text1.value)}}),o.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text2.value)}})),o.createElement("div",{className:"button s-font-body"},t("Sections|"+this.props.content.components.button1.text)))))}}).call(t,n(1))},3787:function(e,t,n){"use strict";(function(o){function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var a=n(74),r=i(a),s=n(7),l=i(s),u=n(3741),c=i(u),d={mixins:[c.default],displayName:"EcommerceSection",_showLayoutButton:function(){return r.default.canUse("ecommerce_layout")},componentWillMount:function(){var e=l.default.getThemeName(),t=n(1270)
this._getLayoutBinding().sub("layout_variation").set(t.getDefaultLayoutKey(e,this._getLayoutVariation()))},_getLayoutOptions:function(){var e=n(1270),t=l.default.getThemeName()
return e.getLayoutOptions(t)},render:function(){o("Editor|Simple Store")
o("Editor|Sell products right on your site! Manage orders, payments, and more.")
return this.getTemplate().apply(this)}}
t.default=d
e.exports=t.default}).call(t,n(1))},3788:function(e,t,n){"use strict";(function(t){var o=n(0)
n(2)
e.exports=function(){return o.createElement("div",{className:"no-bg s-ecommerce-thumb s-section-thumb"},o.createElement("div",{className:"s-section-thumb-content"},o.createElement("div",{className:"p100"},o.createElement("div",{className:"title-group"},o.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text1.value)}}),o.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text2.value)}}))),o.createElement("div",{className:"p50"},o.createElement("div",{className:"store-image"},o.createElement("img",{src:this._getEcommerceProductImage()}))),o.createElement("div",{className:"p50"},o.createElement("div",{className:"item-title s-font-heading"},t("Sections|Smart Light Bulbs")),o.createElement("div",{className:"item-body-text s-font-body"},"$49.99"),o.createElement("div",{className:"item-subtitle s-font-body"},t("Sections|While you might not need all...")),o.createElement("div",{className:"form-thumb s-font-body"},o.createElement("div",{className:"selection-thumb"},o.createElement("div",{className:"select-box"},t("Sections|Purple"),"\n            ",o.createElement("img",{src:"//uploads.strikinglycdn.com/static/sections/content/selector.png"}))),o.createElement("div",{className:"input-thumb"},o.createElement("div",{className:"input-box"},"1")),o.createElement("div",{className:"button"},t("Sections|Buy Now"))))))}}).call(t,n(1))},3789:function(e,t,n){"use strict";(function(t){function o(){var e=this.getDefaultBinding().sub("sources")
return i.createElement("div",{className:"s-gallery "+this._getGalleryClassName()+(this.props.isArranging?" s-arranging":""),ref:"galleryListDOM"},!this.isEditMode()||this._isInNativeWeb()||this._isGalleryEmpty()?null:i.createElement("div",{className:"center edit-buttons gallery-add-image top-gallery-buttons"},i.createElement("div",{className:"s-small-black-button",onClick:this._onClickAddImageFromTop},"\n      ",t("Add Images"),"\n    "),i.createElement("div",{className:"s-small-black-button",onClick:this._onClickAddVideoFromTop,style:{marginLeft:"20px"}},"\n      ",t("Add Videos"),"\n    ")),this.isEditMode()?i.createElement("div",{},"\n    ",this._renderForEditor(),"\n  "):null,this.isEditMode()?null:i.createElement("div",{},i.createElement("div",{},this._renderForShow()),this._needToShowPagination()?i.createElement("div",{className:"s-component s-gallery-pagination s-text"},i.createElement("div",{className:"s-component-content"},1!=this._pagesNum?i.createElement("a",{className:"less-link s-common-link",onClick:this._onClickShowLess},t("Editor|Show less")):null,e.get().size>this._pagesNum*this._baseItemNum?i.createElement("a",{className:"more-link s-common-link",onClick:this._onClickShowMore},t("Editor|Show more")):null)):null),null,this.isEditMode()&&!this._isInNativeWeb()?i.createElement("div",{className:"center edit-buttons gallery-add-image"},i.createElement("div",{className:"s-small-black-button",onClick:this._onClickAddImage},"\n      ",t("Add Images"),"\n    "),i.createElement("div",{className:"s-small-black-button",onClick:this._onClickAddVideo,style:{marginLeft:"20px"}},"\n      ",t("Add Videos"),"\n    ")):null,this._isInNativeWeb()?i.createElement("div",{className:"native-button-wrapper"},!this.props.isArranging&&this.props.sources.size>0?i.createElement("div",{className:"s-small-black-button",onClick:this.props.toggleEditor},i.createElement("img",{src:a.cdnAssetPath("/images/icons/native/ic_settings_white_3x.png")}),"\n      ",t("Mobile|Manage items"),"\n    "):null,this.props.isArranging&&this.props.sources.size>0?i.createElement("div",{className:"s-small-black-button",onClick:this.props.toggleEditor},i.createElement("img",{src:a.cdnAssetPath("/images/icons/native/ic_check_1_white_3x.png")}),"\n      ",t("Mobile|Done"),"\n    "):null,i.createElement("div",{className:"s-small-black-button",onClick:this._onClickNativeAddImage.bind(null,"bottom")},i.createElement("img",{src:a.cdnAssetPath("/images/icons/native/ic_add_3x.png")}),"\n      ",t("Mobile|Add Image"),"\n    ")):null)}var i=n(0),a=(n(2),n(17))
e.exports=function(){return o.apply(this,[])}}).call(t,n(1))},3790:function(e,t,n){"use strict";(function(o){function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
t.default=void 0
var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},u=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,o,i){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=i
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n]
o.enumerable=o.enumerable||!1
o.configurable=!0
"value"in o&&(o.writable=!0)
Object.defineProperty(e,o.key,o)}}return function(t,n,o){n&&e(t.prototype,n)
o&&e(t,o)
return t}}(),d=function e(t,n,o){null===t&&(t=Function.prototype)
var i=Object.getOwnPropertyDescriptor(t,n)
if(void 0===i){var a=Object.getPrototypeOf(t)
return null===a?void 0:e(a,n,o)}if("value"in i)return i.value
var r=i.get
return void 0!==r?r.call(o):void 0},p=n(0),f=i(p),m=n(2),g=i(m),h=n(101),v=i(h),y=n(88),b=i(y),_=n(3756),w=i(_),N=n(3757),E=i(N),x=n(17),k=(function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
t.default=e}(x),null),C=10,S=function(e){function t(){a(this,t)
var e=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))
e._canRenderLayout=void 0
e._currentIndex=void 0
e._isDragging=!1
e._itemWidth=0
e._columnsNum=3
e._renderList=void 0
e._heightList=void 0
e._itemsList=void 0
e._resizeFn=g.default.debounce(function(){var t=e._updateLayoutMeta()
e._updateSize()
e._canRenderLayout&&(t?e._renderLayout():e.forceUpdate())},100)
e._onDrag=g.default.debounce(function(t,n){if(e._isDragging){var o=e._itemsList[e._currentIndex].listIndex,i=-1
Math.abs(n.x)>e._itemWidth/2+C&&(n.x>=0?o+=Math.ceil((n.x-e._itemWidth/2-C)/(e._itemWidth+C),10):o-=Math.ceil((-n.x-e._itemWidth/2-C)/(e._itemWidth+C),10))
o<0&&(o=0)
o>=e._renderList.length&&(o=e._renderList.length-1)
for(var a=e._renderList[o].itemList,r=e._itemsList[e._currentIndex].top+e._heightList[e._currentIndex]*e._itemWidth/2+n.y,s=0;s<a.length;s++)if(a[s].top<r&&a[s].bottom>r){i=s
break}var l=e._itemsList[e._currentIndex].listIndex===o
l&&r>a[a.length-1].bottom&&(i=a.length)
l&&i===a.length&&(i=a.length-1)
var u=e._itemsList[e._currentIndex].indexInList===i;-1===i||l&&u||e._doVisualReorder({oldListIndex:e._itemsList[e._currentIndex].listIndex,oldIndexInList:e._itemsList[e._currentIndex].indexInList,newListIndex:o,newIndexInList:i})}},50)
e._getUpdateHeightFn=v.default.boundParamsMemoizer(e._updateHeight,e)
return e}s(t,e)
c(t,[{key:"componentWillMount",value:function(){d(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"componentWillMount",this).call(this)
this._updateList("reset")}},{key:"componentWillReceiveProps",value:function(e){var t=e.binding.default.sub("sources").get().size
if(t>this._heightList.length){this._updateList("add")
this._renderLayout()}else if(t<this._heightList.length){this._updateList("delete")
this._renderLayout()}}},{key:"componentDidMount",value:function(){d(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"componentDidMount",this).call(this)
$(window).on("resize",this._resizeFn)
this._resizeFn()}},{key:"componentWillUnmount",value:function(){$(window).off("resize",this._resizeFn)}},{key:"_updateHeight",value:function(e,t){if(!isNaN(t)&&this._heightList[e]!==t){this._heightList[e]=t
if(this._heightList.every(function(e){return!isNaN(e)})&&this._heightList.join("")!==this._lastHeightList.join("")){this._lastHeightList=g.default.clone(this._heightList)
this._renderLayout()}}}},{key:"_visualDelete",value:function(e){this._heightList[e]=0
var t=this._itemsList[e],n=t.listIndex,o=t.indexInList
this._renderList[n].itemList.splice(o,1)
this._adjustListItemPosition(n)
this._adjustHeight()
this._reorderGallery()}},{key:"_doVisualReorder",value:function(e){var t=this._itemsList[this._currentIndex].top,n=this._itemsList[this._currentIndex].listIndex,o=this._renderList[e.oldListIndex].itemList,i=this._renderList[e.newListIndex].itemList,a=o[e.oldIndexInList]
if(o===i){o[e.oldIndexInList]=o[e.newIndexInList]
o[e.newIndexInList]=a
this._adjustListItemPosition(e.oldListIndex)}else{var r={index:a.index,listIndex:e.newListIndex}
o.splice(e.oldIndexInList,1)
i.splice(e.newIndexInList,0,r)
this._adjustListItemPosition(e.oldListIndex)
this._adjustListItemPosition(e.newListIndex)}var s=this._itemsList[this._currentIndex].top,l=this._itemsList[this._currentIndex].listIndex,u=(l-n)*(this._itemWidth+C),c=s-t
this._adjustHeight()
this._resetCurrentPosition(u,c)
this.forceUpdate()}},{key:"_reorderGallery",value:function(){var e=this,t=[],n=[]
this._renderList.forEach(function(){t.push({currentHeight:0,itemList:[]})})
var o=0
this._renderList.forEach(function(e){o+=e.itemList.length})
for(var i=0;i<o;i++){for(var a=null,r=null,s=[];!r;){a=function(e){var n=-1,o=999999
t.forEach(function(t,i){if(!e.some(function(e){return e===i})&&t.currentHeight<o){n=i
o=t.currentHeight}})
return n}(s)
r=this._renderList[a].itemList[t[a].itemList.length]
s.push(a)}n.push(r.index)
t[a].currentHeight+=this._heightList[r.index]
t[a].itemList.push(r.index)}n.length<this.getDefaultBinding().sub("sources").get().size?this._onReorderAfterDelete(n):this._onReorder(n)
this._heightList=n.map(function(t){return e._heightList[t]})
this._renderLayout()}},{key:"_onReorderAfterDelete",value:function(e){var t=this.getDefaultBinding().sub("sources")
b.default.reorderRepeatableWithSplice(e,t)
this.savePage()}},{key:"_updateSize",value:function(){this._itemWidth=($(this.refs.galleryListDOM).width()-(this._columnsNum-1)*C)/this._columnsNum
this._adjustAllList()}},{key:"_updateList",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"reset",t=this.getDefaultBinding().sub("sources").get().size
this._renderList=[]
this._renderList.length=this._columnsNum
switch(e){case"reset":this._heightList=[]
this._heightList.length=t
for(var n=0;n<t;n++)this._heightList[n]=0
break
case"add":this._heightList.length=t
for(var o=0;o<t;o++)this._heightList[o]=this._heightList[o]||0
break
case"delete":this._heightList.length=t}this._lastHeightList=[]}},{key:"_isEditing",value:function(){var e=this
return this._heightList.some(function(t,n){return"editor"===e.getDefaultBinding().sub("sources."+n).get("_state")})}},{key:"_getShortestIndex",value:function(){var e=-1,t=999999
this._renderList.forEach(function(n,o){var i=n.currentHeight+5e-4*o
if(i<t){e=o
t=i}})
return e}},{key:"_getTallestIndex",value:function(){var e=-1,t=-1
this._renderList.forEach(function(n,o){if(n.currentHeight>t){e=o
t=n.currentHeight}})
return e}},{key:"_getTotalHeight",value:function(){if(!this._itemsList)return 0
for(var e=Math.min(this._pagesNum*this._baseItemNum,this._itemsList.length),t=0,n=0;n<e;n++)this._itemsList[n].bottom>t&&(t=this._itemsList[n].bottom)
return t}},{key:"_getItemPosition",value:function(e,t){if(!this._itemsList)return{width:this._itemWidth+"px",left:0,top:0}
var n={opacity:this._heightList[e]?1:0,width:this._itemWidth+"px",height:this._itemsList[e].bottom-this._itemsList[e].top+"px",left:this._itemsList[e].left+"px",top:this._itemsList[e].top+"px",zIndex:"editor"===this.getDefaultBinding().sub("sources."+e).get("_state")?100:"initial"}
t&&(n.height=this._itemsList[e].bottom-this._itemsList[e].top+"px")
return n}},{key:"_getDragProps",value:function(e){var t=this
return{onStart:function(){t._currentIndex=e},onDrag:function(e,n){if(!t._isDragging){t._isDragging=!0
return t.forceUpdate()}t._onDrag(e,n)},onStop:function(){if(t._isDragging){t._resetCurrentPosition()
t._isDragging=!1
t._reorderGallery()}},allowAnyClick:!1,disabled:this._isEditing()||!1,start:{x:0,y:0},zIndex:100}}},{key:"_adjustHeight",value:function(){var e=this._getTallestIndex(),t=this._renderList[e].itemList.pop()
if(t){this._renderList[e].currentHeight-=this._heightList[t.index]
if(this._getShortestIndex()===e){this._renderList[e].itemList.push(t)
this._renderList[e].currentHeight+=this._heightList[t.index]}else{var n=this._getShortestIndex()
this._renderList[n].itemList.push(t)
this._renderList[n].currentHeight+=this._heightList[t.index]
this._adjustListItemPosition(n)
this._adjustHeight()}}}},{key:"_adjustListItemPosition",value:function(e){var t=this,n=this._renderList[e],o=this._renderList[e].itemList,i=e*(this._itemWidth+C)
n.currentHeight=0
o.forEach(function(o,a){o.listIndex=e
o.indexInList=a
o.left=i
o.top=n.currentHeight*t._itemWidth+a*C
o.bottom=o.top+t._heightList[o.index]*t._itemWidth
t._itemsList[o.index]=g.default.clone(o)
n.currentHeight+=t._heightList[o.index]})}},{key:"_adjustAllList",value:function(){var e=this
this._renderList.forEach(function(t,n){e._adjustListItemPosition(n)})}},{key:"_resetCurrentPosition",value:function(e,t){if(this.refs["draggableItem"+this._currentIndex]){var n=this.refs["draggableItem"+this._currentIndex]
e||t?n.setState({x:n.state.x-e,y:n.state.y-t}):n.setState({x:0,y:0})}}},{key:"_renderLayout",value:function(){var e=this
this._canRenderLayout=!0
this._renderList=[]
this._itemsList=[]
for(var t=0;t<this._columnsNum;t++)this._renderList.push({currentHeight:0,itemList:[]})
this._heightList.forEach(function(t,n){var o=e._getShortestIndex(),i=e._renderList[o],a={index:n}
i.itemList.push(a)
i.currentHeight+=t})
this._adjustAllList()
this.forceUpdate()}},{key:"render",value:function(){var e=this,t=this.getDefaultBinding().sub("sources"),n={height:this._getTotalHeight()+"px",width:"100%",display:this._isGalleryEmpty()||!this._canRenderLayout?"none":"block"},i=this._canRenderLayout&&this._isDragging&&"number"==typeof this._currentIndex,a=t.get().size,r=this._baseItemNum*this._pagesNum,s=function(n){return u("div",{className:"position-wrapper","data-index":n,style:e._getItemPosition(n)},t.sub(n).get("id")+"_wrapper",u("div",{className:"inner-wrapper"},void 0,f.default.createElement(E.default,l({showType:"verticalGallery",index:n,key:t.sub(n).get("id"),updateItemHeight:e._getUpdateHeightFn(n),isArranging:e.props.isArranging},e._getGalleryItemProps(t.sub(n))))))}
return f.default.createElement("div",{ref:"galleryListDOM",className:"s-gallery s-vertical-gallery "+(this._isDragging?"dragging":"")+(this.props.isArranging?" s-arranging":"")},!1,this._isGalleryEmpty()?u("div",{className:"empty-list s-common-status s-font-body"},void 0,o("Mobile|No content.")):u("div",{style:{position:"relative"}},void 0,f.default.createElement("div",{style:n,className:"vertical-list",ref:"verticalList"},t.get().map(function(n,o){var i=o<r,a=o>=r,u=!e.props.isArranging&&!1,c=u||i
return a?null:c?s(o):f.default.createElement(k,l({ref:"draggableItem"+o},e._getDragProps(o),{key:t.sub(o).get("id")+"_drag_wrapper"}),s(o))}),i&&u("div",{className:"position-wrapper dragging-placeholder",style:this._getItemPosition(this._currentIndex,"placeholder")},"placeholder"))),this._needToShowPagination()&&u("div",{className:"s-gallery-pagination s-component s-text"},void 0,u("div",{className:"s-component-content"},void 0,this._pagesNum>1&&u("a",{className:"s-common-link less-link",onClick:this._onClickShowLess},void 0,o("Editor|Show less")),a>r&&u("a",{className:"s-common-link more-link",onClick:this._onClickShowMore},void 0,o("Editor|Show more")))),!1,!1)}}])
return t}(w.default)
t.default=S
e.exports=t.default}).call(t,n(1))},3791:function(e,t,n){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0})
var o={mixins:[],displayName:"HTMLSection",render:function(){n("Editor|App Store & HTML")
n("Editor|Embed a map, a calendar, a document, a form or any HTML code!")
return this.getTemplate().apply(this)}}
t.default=o
e.exports=t.default}).call(t,n(1))},3792:function(e,t,n){"use strict";(function(t){var o=n(0),i=(n(2),n(56)),a=n(17)
e.exports=function(){return o.createElement("div",{className:"s-html-thumb s-section-thumb "+this._getBackgroundClass(),style:this._getBackgroundStyle()},o.createElement("div",{className:"s-section-thumb-content"},o.createElement("div",{className:"p100"},o.createElement("div",{className:"title-group"},o.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text1.value)}}),o.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text2.value)}})),o.createElement("div",{className:"app-store-thumb"},o.createElement(i,{},o.createElement("img",{src:"//uploads.strikinglycdn.com/static/sections/content/appstore.jpg"}),o.createElement("img",{src:a.cdnAssetPath("/images/editor2/appstore-sxl-1-min.png")}))))))}}).call(t,n(1))},3793:function(e,t,n){"use strict";(function(o){function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,o,i){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=i
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),s=n(0),l=i(s),u=n(449),c=i(u),d=n(450),p=i(d),f=n(3612),m=i(f),g=n(3611),h=i(g),v=n(7),y=i(v),b=n(4),_=i(b),w=n(3741),N=i(w),E={mixins:[N.default],displayName:"ContactsSection",componentWillMount:function(){var e=y.default.getThemeName(),t=this._getLayoutVariation()
this.getDefaultBinding().get("template_name")
t.split("-").length>=2&&("perspective"===e?["mediaLeft","mediaRight","center"].includes(t.split("-")[0])||(t="center-"+t):["mediaLeft","mediaRight","center"].includes(t.split("-")[0])&&(t=t.split("-").slice(1).join("-")))
var o=n(3749)
this._getLayoutBinding().sub("layout_variation").set(o.getDefaultLayoutKey(e,t))},_getLayoutOptions:function(){var e=y.default.getThemeName()
return n(3749).getLayoutOptions(e)},_renderRepeatable:function(e){var t=this,o=n(3749),i=y.default.getThemeName(),s=this._getLayoutVariation(),u=this.getComponentBinding(e),d=this.getRepeatableBinding(e),f=void 0
"function"==typeof o.getLayout(i,s)&&(f=o.getLayout(i,s)(d))
var g=function(e,n){var o=d.sub(n),i=f,s=i.itemClass,u=f,m=u.naturalImage
return l.default.createElement(h.default,a({className:s,binding:{default:o,listBinding:d},index:n},t._getRepeatableItemProps(d,n)),r("div",{className:"s-item-media-group s-mhi"},void 0,l.default.createElement(p.default,a({size:"480x960>",moreIcons:!0,naturalSize:m},t.getReduxComponentProps("image1",o)))),t.sbHasContent("text1",{parentBinding:o})&&(_.default.getIsSxl()||!m)&&r("div",{className:"s-item-text-group"},void 0,l.default.createElement(c.default,a({tagName:"div",applyWordBreaks:!0,textType:"body"},t.getComponentProps("text1",o)))))},v=this.getComponentProps("repeatable1")
return l.default.createElement(m.default,a({className:"s-mh"+("editor"===u.get("_state")?" s-arranging":"")},v),u.get("list").map(g).toArray())},render:function(){o("Editor|Contact")
o("Editor|A list of small icons. Good for social media.")
return this.getTemplate().apply(this)}}
t.default=E
e.exports=t.default}).call(t,n(1))},3794:function(e,t,n){"use strict"
function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n]
o.enumerable=o.enumerable||!1
o.configurable=!0
"value"in o&&(o.writable=!0)
Object.defineProperty(e,o.key,o)}}return function(t,n,o){n&&e(t.prototype,n)
o&&e(t,o)
return t}}(),s=n(3742),l=n(2),u=(function(e){e&&e.__esModule}(l),function(e){function t(e){o(this,t)
var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
n.cacheLevel=-1
n.hideAdvancedOptions=!0
n.sectionName="new_icon"
return n}a(t,e)
r(t,[{key:"getRotationKeys",value:function(){return"perspective"===this.props.themeName?["mediaLeft-col","mediaRight-col","center-col"]:["col","natural"]}}])
return t}(s.BaseLayoutButton))
t.default=(0,s.connectToStores)(u)
e.exports=t.default},3795:function(e,t,n){"use strict";(function(o){function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
var s=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,o,i){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=i
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),l=function(){function e(e,t){var n=[],o=!0,i=!1,a=void 0
try{for(var r,s=e[Symbol.iterator]();!(o=(r=s.next()).done);o=!0){n.push(r.value)
if(t&&n.length===t)break}}catch(e){i=!0
a=e}finally{try{!o&&s.return&&s.return()}finally{if(i)throw a}}return n}return function(t,n){if(Array.isArray(t))return t
if(Symbol.iterator in Object(t))return e(t,n)
throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n]
o.enumerable=o.enumerable||!1
o.configurable=!0
"value"in o&&(o.writable=!0)
Object.defineProperty(e,o.key,o)}}return function(t,n,o){n&&e(t.prototype,n)
o&&e(t,o)
return t}}(),c=n(0),d=(function(e){e&&e.__esModule}(c),n(3742)),p=function(e){function t(e){i(this,t)
var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
n.cacheLevel=-1
"perspective"===n.props.themeName&&"text"===n._levelKeys[0]&&(n.hideAdvancedOptions=!0)
n.sectionName="new_text"
return n}r(t,e)
u(t,[{key:"updateToDefaultLayout",value:function(e){var t=n(1271),o=this.props.themeName,i=_.clone(this._levelKeys)
i[0]=e
var a=t.getDefaultLayoutKey(o,i.join("-"))
this.props.updateLayout(a)}},{key:"getRotationKeys",value:function(){var e=l(this._levelKeys,3),t=e[0],n=(e[1],e[2])
switch(t){case"box":return this._getKeysByLevel(1).map(function(e){return"box-"+e+"-"+n})
case"text":return this._getKeysByLevel(1).map(function(e){return"text-"+e+"-"+n})
default:return[]}}},{key:"getButtonClassMapping",value:function(){return"perspective"===this.props.themeName?["big-buttons","big-buttons","big-buttons"]:["big-buttons",this._getSmallButtonClass(1),"big-buttons"]}},{key:"renderLayoutOptions",value:function(){var e=this.props.themeName
return s("div",{},void 0,"perspective"!==e&&this._getKeysByLevel(0)&&this._renderLayoutButtons(0),this._getKeysByLevel(1)&&this._renderLayoutButtons(1),this._getKeysByLevel(2)&&this._renderCheckBox({levelNum:2,checkedKey:"button",unCheckedKey:"text",labelText:o("Editor|Show Buttons")}))}}])
return t}(d.BaseLayoutButton)
t.default=(0,d.connectToStores)(p)
e.exports=t.default}).call(t,n(1))},3796:function(e,t,n){"use strict"
function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var i=n(3),a=o(i),r=n(18),s=o(r),l=n(3797),u=o(l),c=n(41),d=function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
t.default=e
return t}(c),p=n(256),f=o(p),m=n(12),g=o(m),h=n(7),v=o(h),y=function(e){return d.getExternalLinkMappingRS(e,f.default.getPagesList())}
t.default=s.default.createPageComponent({displayName:"ExternalLinkNav",observedProps:["url","text","updateTimeStamp"],bobcatPropTypes:{data:{updateTimeStamp:a.default.number,new_target:a.default.bool,text:a.default.string,url:a.default.string,id:a.default.string,link_type:a.default.string,page_id:a.default.string,section_id:a.default.string}},_getUrlToShow:function(){var e=this.props,t=e.link_type,n=e.url,o=e.page_id,i=e.section_id
if("section"===t)return g.default.getExternalLinkUrl(t,n,o,i)
var a=y(n)
return d.addProtocol(null!=a.publicURL?a.publicURL:a.siteDeleted?"#":n)},_getTarget:function(){var e=this.props,t=e.link_type
return e.new_target&&"section"!==t?"_blank":"_self"},_isS5Theme:function(){return"s5-theme"===v.default.getThemeName()},render:function(){return g.default.getShowInNavLinks(this.props.id)?u.default.apply(this):null}})
e.exports=t.default},3797:function(e,t,n){"use strict"
var o=n(0)
n(2)
e.exports=function(){return o.createElement("li",{className:this.props.liClassName},this._isS5Theme()?null:o.createElement("a",{className:"s-external-link-item s-nav-item",href:this._getUrlToShow(),target:this._getTarget()},o.createElement("span",{className:"s-font-body"},this.props.text)),this._isS5Theme()?o.createElement("div",{className:"s-nav-link-container"},o.createElement("a",{className:"s-external-link-item s-nav-item",href:this._getUrlToShow(),target:this._getTarget()},o.createElement("span",{className:"s-font-body"},this.props.text))):null)}},3798:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
t.default=n(3759)
e.exports=t.default},3799:function(e,t,n){"use strict";(function(o){function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
var s=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,o,i){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=i
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n]
o.enumerable=o.enumerable||!1
o.configurable=!0
"value"in o&&(o.writable=!0)
Object.defineProperty(e,o.key,o)}}return function(t,n,o){n&&e(t.prototype,n)
o&&e(t,o)
return t}}(),u=n(3742),c=function(e){function t(e){i(this,t)
var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),o=n.props.themeName
n.cacheLevel=-1
"persona"!==o&&"perspective"!==o||(n.hideAdvancedOptions=!0)
n.sectionName="new_hero"
return n}r(t,e)
l(t,[{key:"getRotationKeys",value:function(){var e=this.props.themeName,t=this._levelKeys[1]
return["persona","perspective"].includes(e)?this._getKeysByLevel(0).map(function(e){return e+"-"+t}):"glow"===e?this.props.layoutVariation.indexOf("unswap")>-1?["button-left-unswap","signup-left-unswap","images-left-unswap","button-right-unswap","signup-right-unswap","images-right-unswap","button-noImage-unswap","signup-noImage-unswap","images-noImage-unswap"]:["button-left-swap","signup-left-swap","images-left-swap","button-right-swap","signup-right-swap","images-right-swap","button-noImage-swap","signup-noImage-swap","images-noImage-swap"]:["button-left","signup-left","images-left","button-right","signup-right","images-right","button-noImage","signup-noImage","images-noImage"]}},{key:"getButtonClassMapping",value:function(){return["big-buttons","big-buttons"]}},{key:"renderLayoutOptions",value:function(){var e=this.props.themeName
return s("div",{},void 0,this._getKeysByLevel(0)&&this._renderLayoutButtons(0),this._getKeysByLevel(1)&&this._renderLayoutButtons(1),"glow"===e&&this._getKeysByLevel(2)&&this._renderCheckBox({levelNum:2,labelText:o("Editor|Swap Title"),checkedKey:"swap",unCheckedKey:"unswap"}))}}])
return t}(u.BaseLayoutButton)
t.default=(0,u.connectToStores)(c)
e.exports=t.default}).call(t,n(1))},3800:function(e,t,n){"use strict";(function(t){var o=n(0)
n(2)
e.exports=function(){return o.createElement("div",{className:"s-section-thumb s-signup-thumb "+this._getBackgroundClass(),style:this._getBackgroundStyle()},o.createElement("div",{className:"s-section-thumb-content"},o.createElement("div",{className:"p100"},o.createElement("div",{className:"title-group"},o.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text1.value)}}),o.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text2.value)}})),o.createElement("div",{className:"form-thumb s-font-body"},o.createElement("input",{placeholder:t("Sections|"+this.props.content.components.email1.name_label)}),o.createElement("input",{placeholder:t("Sections|"+this.props.content.components.email1.email_label)}),o.createElement("div",{className:"button"},t("Sections|"+this.props.content.components.email1.submit_label))))))}}).call(t,n(1))},3801:function(e,t,n){"use strict";(function(o){function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var a=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,o,i){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=i
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),r=n(0),s=(i(r),n(3741)),l=i(s),u=n(3604),c=i(u),d=n(670),p=i(d),f=n(7),m=i(f),g=n(319),h={mixins:[l.default],displayName:"SliderSection",componentWillMount:function(){this.layoutOptions=["left","right","noImage"]
this.layoutName=this._getLayoutProps().binding.get("layout_variation")
"noForeground"===this.layoutName&&this.layoutOptions.push("noForeground")},getInitialState:function(){return{imgEditorState:""}},setStateFunc:function(e){this.setState({imgEditorState:e||""})},mapStateToProps:function(e){return"s5-theme"===m.default.getThemeName()?{navHeight:p.default.get("navHeight"),navOverlapsContent:(0,g.getNavOverlapsContent)(e)}:{}},_showMediaWrapper:function(e){return-1===["noImage","noForeground"].indexOf(e)},_sbAnyHasContent:function(e,t){var n=this.getRepeatableBinding("slider1")
return Boolean(this.sbAnyHasContent(t,{parentBinding:n.sub(e)}))},_sbHasMediaContent:function(e){var t=this.getRepeatableBinding("slider1")
return Boolean(this.sbHasContent("media1",{parentBinding:t.sub(e)}))},_getSliderLayoutArr:function(){var e=this._getLayoutVariation(),t=[]
if(-1!==e.indexOf("["))try{t=JSON.parse(e)}catch(e){}else{e||(e=this.layoutOptions[1])
var n=this.getRepeatableBinding("slider1").get().size
t=Array.from(new Array(n),function(){return e})}return t},_imageRatioWarnning:function(e){var t=this.getRepeatableBinding("slider1"),n=t.sub(e+".components.background1"),i=n.get("w"),a=n.get("h")
n.get("url")
if(!i||!a){i=16
a=9}var r=o("Editor|This image is too tall! Please upload a banner with a wider aspect ratio."),s=parseFloat(i/a)
if(s<1.25)return r
if(t.get().size<2)return""
var l=t.sub("0.components.background1")
r=o("Editor|Your banner images are different sizes! You should keep all banner images the same size.")
var u=l.get("w"),c=l.get("h")
if(!u||!c){u=16
c=9}var d=parseFloat(u/c)
return e>0&&Math.abs(s-d)>.2?r:""},_getSliderLayout:function(e){var t=this._getSliderLayoutArr(),n=t[e]
return null!=n?n:this.layoutOptions[1]},_isBannerSection:function(){return"noForeground"===this.layoutName},isS5FirstSection:function(){return!("s5-theme"!==m.default.getThemeName()||!this.props.navOverlapsContent||0!==this.props.index)},getSectionStyle:function(){return"s5-theme"===m.default.getThemeName()&&this.props.navOverlapsContent&&0===this.props.index?{paddingTop:this.props.navHeight}:{}},_renderSliderLayoutBtn:function(e){var t=this,n=this._getSliderLayoutArr(),i=n[e],r=this.layoutOptions.indexOf(i),s=this._getLayoutStatusName(r)||"B",l=function(){-1===r&&(r=0)
r===t.layoutOptions.length-1&&(r=-1)
n[e]=t.layoutOptions[++r]
return t._updateLayout(JSON.stringify(n))}
return a("div",{className:"s-component s-layout"},void 0,a("div",{className:"s-component-editor"},void 0,a(c.default,{className:"center clickable small title layout-button",onTap:l,rel:"tooltip-left",title:o("Editor|Click to change layouts.")},void 0,a("span",{},void 0,o("Layout"),a("span",{className:"layout-status"},void 0,s)))))},render:function(){return this.getTemplate().apply(this)}}
t.default=h
e.exports=t.default}).call(t,n(1))},3802:function(e,t,n){"use strict";(function(t){function o(){var e=this.props.content.components.slideSettings.layout_variation
return s.createElement("div",{className:"s-section-thumb-content"},s.createElement("div",{className:"p100 "+l.keys(l.pick({"dark-overlays":"noForeground"!==e},l.identity)).join(" ")},"noForeground"!==e?s.createElement("div",{className:"s-slider-demo"},s.createElement("div",{className:"title-media"},s.createElement("img",{src:this._getImageUrl(this.props.content.components.slider1.list[0].components.media1.image)})),s.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.slider1.list[0].components.text1.value)}}),s.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.slider1.list[0].components.text2.value)}}),s.createElement("div",{className:"button s-font-body"},t("Sections|"+this.props.content.components.slider1.list[0].components.button1.text))):null))}function i(){var e=this.props.content.components.slideSettings.layout_variation
return s.createElement("div",{className:"s-section-thumb-content"},s.createElement("div",{className:"p100 "+l.keys(l.pick({"dark-overlays":"noForeground"!==e},l.identity)).join(" ")},"noForeground"!==e?s.createElement("div",{className:"s-slider-demo"},s.createElement("div",{className:"title-media"},s.createElement("img",{src:this._getImageUrl(this.props.content.components.slider1.list[1].components.media1.image)})),s.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.slider1.list[1].components.text1.value)}}),s.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.slider1.list[1].components.text2.value)}}),s.createElement("div",{className:"button s-font-body"},t("Sections|"+this.props.content.components.slider1.list[1].components.button1.text))):null))}function a(){var e=this.props.content.components.slideSettings.layout_variation
return s.createElement("div",{className:"s-section-thumb-content"},s.createElement("div",{className:"p100 "+l.keys(l.pick({"dark-overlays":"noForeground"!==e},l.identity)).join(" ")},"noForeground"!==e?s.createElement("div",{className:"s-slider-demo"},s.createElement("div",{className:"title-media"},s.createElement("img",{src:this._getImageUrl(this.props.content.components.slider1.list[0].components.media1.image)})),s.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.slider1.list[0].components.text1.value)}}),s.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.slider1.list[0].components.text2.value)}}),s.createElement("div",{className:"button s-font-body"},t("Sections|"+this.props.content.components.slider1.list[0].components.button1.text))):null))}function r(){var e=this.props.content.components.slideSettings.layout_variation
return s.createElement("div",{className:"thumb-slider-controller"},s.createElement("div",{className:"prev-arrow "+l.keys(l.pick({"dark-overlays":"noForeground"!==e},l.identity)).join(" ")}),s.createElement("div",{className:"next-arrow "+l.keys(l.pick({"dark-overlays":"noForeground"!==e},l.identity)).join(" ")}),s.createElement("div",{className:"selector-container "+l.keys(l.pick({"no-foreground":"noForeground"===e},l.identity)).join(" ")},s.createElement("div",{className:"selector-inner"},s.createElement("div",{className:"selected selector"}),s.createElement("div",{className:"selector"}))))}var s=n(0),l=n(2)
e.exports=function(){return s.createElement("div",{className:"s-section-thumb s-slider-thumb"},s.createElement("div",{className:"thumb-slider-wrapper"},s.createElement("div",{className:"s-slider-thumb-wrap "+this._getBackgroundClass(this.props.content.components.slider1.list[0].components.background1),style:this._getBackgroundStyle(this.props.content.components.slider1.list[0].components.background1)},o.apply(this,[])),s.createElement("div",{className:"s-slider-thumb-wrap "+this._getBackgroundClass(this.props.content.components.slider1.list[1].components.background1),style:this._getBackgroundStyle(this.props.content.components.slider1.list[1].components.background1)},i.apply(this,[])),s.createElement("div",{className:"s-slider-thumb-wrap "+this._getBackgroundClass(this.props.content.components.slider1.list[0].components.background1),style:this._getBackgroundStyle(this.props.content.components.slider1.list[0].components.background1)},a.apply(this,[]))),r.apply(this,[]))}}).call(t,n(1))},3803:function(e,t,n){"use strict";(function(t){var o=n(0),i=(n(2),n(17))
e.exports=function(){return o.createElement("div",{className:"no-bg s-section-thumb s-social-thumb"},o.createElement("div",{className:"s-section-thumb-content"},o.createElement("div",{className:"title-group"},o.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text1.value)}}),o.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text2.value)}})),o.createElement("div",{className:"social-thumb"},o.createElement("img",{src:i.cdnAssetPath("/images/editor2/social_feed_thumb.png")}))))}}).call(t,n(1))},3804:function(e,t,n){"use strict";(function(o){function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var a=n(7),r=i(a),s=n(89),l=i(s),u={mixins:[],displayName:"BlockSection",getWholeThemeFeature:function(){var e=l.default.get(r.default.getTheme().get("name"))
return null!=e?e.features:void 0},render:function(){o("Editor|Make Your Own Section")
o("Editor|Want more control over layouts? Arrange components yourself!")
return this.getTemplate().apply(this)}}
t.default=u
e.exports=t.default}).call(t,n(1))},3805:function(e,t,n){"use strict";(function(t){var o=n(0),i=(n(2),n(17))
e.exports=function(){return o.createElement("div",{className:"no-bg s-block-thumb s-section-thumb"},o.createElement("div",{className:"s-section-thumb-content"},o.createElement("div",{className:"p100"},o.createElement("div",{className:"title-group"},o.createElement("div",{className:"s-font-title title"},t("Make Your Own Section!")))),o.createElement("div",{},o.createElement("img",{src:i.cdnAssetPath("/images/editor2/block-components.png")}))))}}).call(t,n(1))},3806:function(e,t,n){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0})
var o={mixins:[],displayName:"DonationSection",render:function(){n("Editor|Simple Store")
n("Editor|Sell products right on your site! Manage orders, payments, and more.")
return this.getTemplate().apply(this)}}
t.default=o
e.exports=t.default}).call(t,n(1))},3807:function(e,t,n){"use strict";(function(o){function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
t.default=void 0
var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n]
o.enumerable=o.enumerable||!1
o.configurable=!0
"value"in o&&(o.writable=!0)
Object.defineProperty(e,o.key,o)}}return function(t,n,o){n&&e(t.prototype,n)
o&&e(t,o)
return t}}(),u=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,o,i){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=i
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),c=n(0),d=i(c),p=n(10),f=i(p),m=n(1276),g=i(m),h=n(7),v=i(h),y=n(171),b=i(y),_=n(455),w=function(e){var t=e.leftPrice,n=e.rightPrice,o={width:Math.min(t/n*100,100)+"%"},i={left:"calc("+Math.min(t/n*100,100)+"% - 10px)"}
return u("div",{className:"progress-bar"},void 0,u("div",{className:"progress",style:o}),u("div",{className:"indicator",style:i}))},N=function(e){function t(e){a(this,t)
var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
n._listener=n._listener.bind(n)
return n}s(t,e)
l(t,[{key:"componentDidMount",value:function(){f.default.getDonationSettings({pageId:v.default.getId()})
g.default.addChangeListener(this._listener)}},{key:"componentWillUnmount",value:function(){g.default.removeChangeListener(this._listener)}},{key:"_listener",value:function(){this.forceUpdate()}},{key:"_onClickOpenManager",value:function(){f.default.openDialog("donationManager")}},{key:"_onClickOpenDonateDialog",value:function(){f.default.openDialog("donateDialog",{strong:!0})}},{key:"render",value:function(){var e=g.default.getData(),t=e.settings,n=(e.state,e.currencyFormat)
return u("div",{className:"s-component s-donation "+(this.props.sbClass?this.props.sbClass:"")},void 0,!1,t.data.showProgress&&u("div",{className:"s-donation-progress"},void 0,u(w,{leftPrice:t.paid,rightPrice:t.goal}),u("div",{className:"left-price"},void 0,u("div",{className:"price"},void 0,(0,_.getFormattedPrice)(t.paid,n)),u("div",{className:"text"},void 0,o("Donation|Raised"))),u("div",{className:"right-price"},void 0,u("div",{className:"price"},void 0,(0,_.getFormattedPrice)(t.goal,n)),u("div",{className:"text"},void 0,o("Donation|Goal")))),u(b.default,{component:"div",className:"s-common-button s-cta-button",onClick:this._onClickOpenDonateDialog},void 0,t.data.buttonText||o("Donation|Donate")))}}])
return t}(d.default.Component)
t.default=N
e.exports=t.default}).call(t,n(1))},3808:function(e,t,n){"use strict";(function(t){var o=n(0)
n(2)
e.exports=function(){return o.createElement("div",{className:"no-bg s-donation-thumb s-section-thumb"},o.createElement("div",{className:"s-section-thumb-content"},o.createElement("div",{className:"p100"},o.createElement("div",{className:"title-group"},o.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text1.value)}}),o.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text2.value)}}))),o.createElement("div",{className:"p100"},o.createElement("div",{className:"progress-bar"},o.createElement("div",{className:"progress"}),o.createElement("div",{className:"indicator"})),o.createElement("div",{className:"price-bar"},o.createElement("div",{className:"left-price"},o.createElement("div",{className:"price"},"400"),o.createElement("div",{className:"text"},t("Donation|Raised"))),o.createElement("div",{className:"right-price"},o.createElement("div",{className:"price"},"10000"),o.createElement("div",{className:"text"},t("Donation|Goal")))),o.createElement("div",{className:"button"},t("Sections|Donate Now")))))}}).call(t,n(1))},3809:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
t.default=n(3760)
e.exports=t.default},3810:function(e){e.exports=function(e,t){if(e===t)return!0
var n=Object.keys(e),o=Object.keys(t),i=n.length
if(o.length!==i)return!1
for(var a=0;a<i;a++){var r=n[a]
if(e[r]!==t[r])return!1}return!0}},3811:function(e,t,n){"use strict";(function(o){function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
var l=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,o,i){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=i
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n]
o.enumerable=o.enumerable||!1
o.configurable=!0
"value"in o&&(o.writable=!0)
Object.defineProperty(e,o.key,o)}}return function(t,n,o){n&&e(t.prototype,n)
o&&e(t,o)
return t}}(),c=n(3742),d=n(3812),p=i(d),f=n(0),m=(i(f),n(2)),g=i(m),h=n(16),v=i(h),y=n(3746),b=i(y),_=n(7),w=i(_),N=n(3761),E=i(N),x=function(e){function t(e){a(this,t)
var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
n.cacheLevel=-1
n.hideAdvancedOptions=!1
n.buttonTitle=o("Editor|Grid Layout")
return n}s(t,e)
u(t,[{key:"getRotationKeys",value:function(){return[]}},{key:"renderLayoutOptions",value:function(){var e=this._getParsedLayoutVariation()
return l("div",{},void 0,this._renderMagazineGridToggle(),e.isGrid()?this._renderGridUI():this._renderMagazineUI(),this._renderDropdowns())}},{key:"_renderDropdowns",value:function(){var e=this,t=w.default.getThemeName(),n=null,i=this._getParsedLayoutVariation()
E.default.themesWithoutWideGridLayout.includes(t)||(n=l("div",{className:"s-layout-menu-field drop-down-select"},void 0,l("div",{className:"s-layout-menu-label"},void 0,o("Editor|Content Width")),l("select",{value:i.contentWidth,onChange:function(t){return e._patchLayout({contentWidth:t.target.value})}},void 0,l("option",{value:"normal"},void 0,o("Editor|Normal")),l("option",{value:"wide"},void 0,o("Editor|Wide")))))
return l("div",{},void 0,l("div",{className:"s-layout-menu-field drop-down-select"},void 0,l("div",{className:"s-layout-menu-label"},void 0,o("Editor|Height")),l("select",{value:this._getParsedLayoutVariation().cellHeight,onChange:function(t){return e._patchLayout({cellHeight:t.target.value})}},void 0,l("option",{value:"small"},void 0,o("Editor|Small")),l("option",{value:"medium"},void 0,o("Editor|Medium")),l("option",{value:"large"},void 0,o("Editor|Large")),i.canBeExtraLarge()?l("option",{value:"extraLarge"},void 0,o("Editor|Extra Large")):null)),l("div",{className:"s-layout-menu-field drop-down-select"},void 0,l("div",{className:"s-layout-menu-label"},void 0,o("Editor|Spacing")),l("select",{value:i.cellSpacing,onChange:function(t){return e._patchLayout({cellSpacing:t.target.value})}},void 0,l("option",{value:"none"},void 0,o("Editor|None")),l("option",{value:"small"},void 0,o("Editor|Small")),l("option",{value:"large"},void 0,o("Editor|Large")))),n)}},{key:"_renderMagazineGridToggle",value:function(){var e=this,t=function(e){return{grid:o("Editor|Grid"),magazine:o("Editor|Magazine")}[e]}
return l(b.default,{keys:["grid","magazine"],selectedKey:this._getParsedLayoutVariation().gridType,textMapping:t,className:"big-buttons",onSelect:function(t){var n=e._getParsedLayoutVariation(),o=n.getCellCount(),i={gridType:t}
if("magazine"===t)i.magazineLayoutName=o<=3?"twoLeftOneRight":4===o?"twoTopTwoBottom":"twoTopThreeBottom"
else if(o<=4){i.rows=2
i.columns=2}else{i.rows=2
i.columns=3}e._patchLayout(i)}})}},{key:"_patchLayout",value:function(e){var t=Object.assign(this._getParsedLayoutVariation(),e),n=t.serialize()
this.props.updateLayout(n)}},{key:"_renderGridUI",value:function(){var e=this,t=this._getParsedLayoutVariation()
return l(p.default,{maxRows:4,maxColumns:4,selectedRows:t.rows,selectedColumns:t.columns,onSelect:function(t,n){e._patchLayout({rows:t,columns:n})}})}},{key:"_renderMagazineUI",value:function(){var e=this,t=g.default.map(E.default.magazineLayouts,function(t){var n=t.name===e._getParsedLayoutVariation().magazineLayoutName,o=(0,v.default)("s-grid-layout-button-magazine",{_selected:n}),i=g.default.range(0,t.cellCount).map(function(e){return l("div",{className:"s-grid-section-cell _"+t.name},e,l("div",{}))})
if("oneLeftTwoRight"===t.name||"twoLeftOneRight"===t.name){var a="s-magazine-column _"+t.name
i=[l("div",{className:a},"column-1",i[0],i[1]),l("div",{className:a},"column-2",i[2])]}var r=l("div",{},void 0,l("div",{className:"s-grid-layout-button-preview"},void 0,i))
return l("button",{onClick:function(){return e._patchLayout({magazineLayoutName:t.name})},className:o},t.name,r)})
return l("div",{className:"s-layout-menu-field s-grid-layout-buttons-magazine"},void 0,t)}},{key:"_getParsedLayoutVariation",value:function(){return E.default.parseLayoutVariation(this._levelKeys.join("-"))}}])
return t}(c.BaseLayoutButton)
t.default=(0,c.connectToStores)(x)
e.exports=t.default}).call(t,n(1))},3812:function(e,t,n){"use strict"
function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function r(e,t,n,o){return n<=e&&o<=t}var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n]
o.enumerable=o.enumerable||!1
o.configurable=!0
"value"in o&&(o.writable=!0)
Object.defineProperty(e,o.key,o)}}return function(t,n,o){n&&e(t.prototype,n)
o&&e(t,o)
return t}}()
Object.defineProperty(t,"__esModule",{value:!0})
var l=n(0),u=n(2),c=n(16),d=function(e){function t(e){o(this,t)
var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
n.state={previewRows:null,previewColumns:null}
return n}a(t,e)
s(t,[{key:"_isInPreviewSelection",value:function(e,t){return!!this._hasPreview()&&r(this.state.previewRows,this.state.previewColumns,e,t)}},{key:"_isInSelection",value:function(e,t){return r(this.props.selectedRows,this.props.selectedColumns,e,t)}},{key:"_isSelectedSize",value:function(e,t){return e===this.props.selectedRows&&t===this.props.selectedColumns}},{key:"_isPreviewSize",value:function(e,t){return e===this.state.previewRows&&t===this.state.previewColumns}},{key:"_hasPreview",value:function(){return null!==this.state.previewRows&&null!==this.state.previewColumns}},{key:"_renderRow",value:function(e){var t=this,n=this.props.maxColumns,o=u.range(1,n+1).map(function(n){return t._renderCell(e,n)})
return l.createElement("tr",{key:e},o)}},{key:"_renderCell",value:function(e,t){var n=this,o=this._hasPreview(),i=1===e&&1===t,a=void 0
a=o?this.state.previewRows+"×"+this.state.previewColumns:this.props.selectedRows+"×"+this.props.selectedColumns
var r=c("s-grid-size-selector-cell",{"_in-selection":this._isInSelection(e,t),"_in-preview":this._isInPreviewSelection(e,t)})
return l.createElement("td",{key:e+"-"+t,onMouseEnter:function(){return n.setState({previewColumns:t,previewRows:e})},onMouseLeave:function(){return n.setState({previewColumns:null,previewRows:null})},onClick:function(){return n.props.onSelect(e,t)},className:r},i?a:null)}},{key:"render",value:function(){var e=this,t=this.props.maxRows,n=u.range(1,t+1).map(function(t){return e._renderRow(t)}),o=c("s-grid-size-selector",{"_has-preview":this._hasPreview()})
return l.createElement("table",{className:o+" s-layout-menu-field"},l.createElement("tbody",null,n))}}])
return t}(l.Component)
t.default=d},3813:function(e,t,n){"use strict"
var o=n(0)
n(2),n(3760)
e.exports=function(){return o.createElement("div",{},"\n  ",this.renderSection(),"\n")}},3814:function(e,t,n){"use strict"
function o(e){return i.createElement("div",{className:"grid-thumb-item"},i.createElement("div",{className:"grid-thumb-item-content",style:this._getBackgroundStyle(e.components.background1)},i.createElement("div",{className:"s-item-title"},"\n            ",e.components.text1.value,"\n          ")))}var i=n(0),a=n(2)
e.exports=function(){return i.createElement("div",{className:"s-grid-thumb s-section-thumb","=undefined":!0},i.createElement("div",{className:"s-section-thumb-content"},i.createElement.apply(this,["div",{className:"grid-thumb-container"},a.map(this.props.content.components.repeatable1.list,o.bind(this))])))}},3815:function(e,t,n){"use strict";(function(o){function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var a=n(74),r=i(a),s=n(7),l=i(s),u=n(1270),c=i(u),d=n(3741),p=i(d),f={mixins:[p.default],displayName:"PortfolioSection",componentWillMount:function(){var e=l.default.getThemeName(),t=this._getLayoutVariation()
if(c.default.isOldLayoutKey(e,t)){var n=c.default.getDefaultLayoutKey(e,t)
this._updateLayout(n)}},_showLayoutButton:function(){return r.default.canUse("portfolio_layout")},_getLayoutOptions:function(){var e=l.default.getThemeName()
return c.default.getLayoutOptions(e)},render:function(){o("Editor|Product Showcase")
o("Editor|Add details and descriptions to each product.")
return this.getTemplate().apply(this)}}
t.default=f
e.exports=t.default}).call(t,n(1))},3816:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var o=n(207),i=function(e){return e&&e.__esModule?e:{default:e}}(o),a=n(3755)
t.default=(0,a.createCategorySelector)(i.default,"PortfolioCategorySelector",!0)
e.exports=t.default},3817:function(e,t,n){"use strict";(function(o){function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,o,i){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=i
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),s=n(0),l=i(s),u=n(3),c=i(u),d=n(444),p=i(d),f=n(4),m=i(f),g=n(16),h=i(g),v=n(6),y=i(v),b=n(18),_=i(b),w=n(10),N=i(w),E=n(672),x=i(E),k=n(7),C=i(k),S=n(207),P=i(S),L=n(42),O=i(L),T=n(684),M=i(T),I=n(320),B=i(I),D=n(1243),j=i(D),A=n(3621),H=i(A),R=n(47),F=i(R),U=n(34),V=n(682),z=n(37),W=i(z),K=n(97),G=i(K),$=!1,Y=_.default.createPageComponent({displayName:"Portfolio",mixins:[(0,O.default)("editor"),F.default],bobcatPropTypes:{data:{text:c.default.string,category:c.default.oneOfType([c.default.string,c.default.number]),binding:c.default.object},internal:{onConnectionFailed:c.default.func}},getBobcatDefaultProps:function(){return{data:{category:"all"}}},componentWillMount:function(){this.initMeta({currentCategory:this.dtProps.category,nextCategory:this.dtProps.category,currentPage:1,detailMode:!1})},componentDidMount:function(){var e=this
this._loadProductsFromServer()
P.default.getFirstLoadingState("settings")&&x.default.getPortfolioSettings({pageId:C.default.getId()})
P.default.getFirstLoadingState("categories")&&x.default.getPortfolioCategories({pageId:C.default.getId()})
this._token=M.default.register(function(t){switch(t.actionType){case B.default.ActionTypes.GET_ECOMMERCE_PRODUCTS_SUCCESS:e.setMeta("currentCategory",e.getMeta("nextCategory"))
if(!$){$=!0
var o=n(168)
o.init()
o.trackPortfolioBuyerEvent(m.default.getKeenIoPortfolioBuyerLanding())}}})
this._onCategoryChangeListenId=P.default.getCategoriesBinding().addListener("",this._onCategoryChange);(0,y.default)(window).on("resize.portfolio",W.default.debounce(function(){return e.forceUpdate()},300))},componentDidUpdate:function(e){if(this._getRenderCategory(this.dtProps.category)!==this._getRenderCategory(e.category)||e.category!==this.dtProps.category){if("all"===this._getRenderCategory(this.dtProps.category)||"all"===this.dtProps.category){this.setMeta("nextCategory","all")
this.setMeta("currentCategory","all")
this.setMeta("currentPage",1)}else{this.setMeta("nextCategory",this.dtProps.category)
this.setMeta("currentCategory",this.dtProps.category)
this.setMeta("currentPage",1)}this._loadProductsFromServer()}},componentWillUnmount:function(){M.default.unregister(this._token)
P.default.getCategoriesBinding().removeListener(this._onCategoryChangeListenId);(0,y.default)(window).off("resize.portfolio")},_onCategoryChange:function(){var e=this
return this.setTimeout(function(){return e._loadProductsFromServer()},10)},_getProductsData:function(){return P.default.getProducts(this._getRenderCategory(this.dtProps.category),this.getMeta("currentPage"))},_getEditBtnText:function(){var e=this._getProductsData().length
return o(0===e?"Portfolio|Add Product":1===e?"Portfolio|Manage Product":"Portfolio|Manage Products")},_getRenderCategory:function(e){var t="all"===e?this.getMeta("currentCategory"):e
P.default.isCategoryIdExist(t)||(t="all")
return t},_loadProductsFromServer:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments[1]
this.setMeta("currentPage",t)
var o=x.default.getPortfolioProducts({pageId:C.default.getId(),category:n||this._getRenderCategory(this.dtProps.category),page:t})
if(o)return o.fail(function(){return e.props.onConnectionFailed()})},_getCurrentPageNum:function(){return this.getMeta("currentPage")},_loadNextPage:function(){var e=this._getCurrentPageNum()
this.setMeta("currentPage",e+1)
return this._loadProductsFromServer(e+1)},_onClickEditor:function(e){if("editor"===G.default.getRole())return window.alert(o("Editor|No permission, please contact your site administrator."))
N.default.openPortfolioManagerDialog(e)},_changeCategory:function(e){this.setMeta("nextCategory",e)
this.setMeta("currentCategory",e)
return this._loadProductsFromServer(1,e)},_changeToDetailMode:function(){return this.setMeta("detailMode",!0)},_changeToNormalMode:function(){return this.setMeta("detailMode",!1)},_getCategoryBarProps:function(){return{currentCategory:this.getMeta("nextCategory"),changeCategory:this._changeCategory,categories:P.default.getCategories()}},_getWrapperProps:function(){return{products:this._getProductsData().filter(function(e){return"visible"===e.status}),pageId:C.default.getId(),hasMultipleProducts:P.default.getProducts().length>=2,settings:P.default.getSettings(),layout:this.props.layout||"landscape-three",category:this.props.category||"all",changeToDetailMode:this._changeToDetailMode,changeToNormalMode:this._changeToNormalMode}},render:function(){var e=this
this.observeBinding(P.default.getBinding())
var t=P.default.getPagination(this.getMeta("currentCategory")),n=this.getMeta("detailMode"),i=this._getEditBtnText(),s=P.default.getLoadingState("product")||P.default.getLoadingState("settings")||P.default.getLoadingState("category"),u="persona"===C.default.getTheme().get("name")?"":"sixteen columns",c=m.default.getFromSiteToApp(),d=r("div",{className:u+" s-ecommerce-empty-box s-common-status no-float"},void 0,r("div",{className:"tags"},void 0,r("div",{className:"fa fa-folder-open"}),r("div",{className:"fa fa-folder-open"}),r("div",{className:"fa fa-folder-open"})),r("div",{className:"text s-font-body"},void 0,o("Portfolio|No products in this product showcase now!"))),p=t&&t.totalPages>=2&&(c?r("div",{className:"s-ecommerce-pagination"},void 0,r(U.Link,{className:"s-ecommerce-pagination-item s-font-body",to:"/store/page?category="+this.dtProps.category},void 0,o("Ecommerce|View more"))):r("div",{className:"s-ecommerce-pagination"},void 0,t.totalPages>this._getCurrentPageNum()&&r("span",{className:"s-ecommerce-pagination-item s-font-body",onClick:this._loadNextPage},void 0,o("Ecommerce|Show more")),this._getCurrentPageNum()>1&&r("span",{className:"s-ecommerce-pagination-item s-font-body",onClick:function(){return e.setMeta("currentPage",1)}},void 0,o("Ecommerce|Show less"))))
return l.default.createElement("div",{className:"s-component s-ecommerce",ref:"root"},r("div",{className:"s-ecommerce-content"},void 0,P.default.getCategories().length>0&&("all"===this.dtProps.category||!P.default.isCategoryIdExist(this.dtProps.category))&&r("div",{className:"persona"===C.default.getTheme().get("name")?"":"sixteen columns",style:{display:n?"none":"block"}},void 0,l.default.createElement(H.default,a({sbClass:this.props.sbClass},this._getCategoryBarProps()),r("div",{className:"s-component-editor-wrapper"},void 0,r("div",{className:(0,h.default)("s-component-overlay",{visible:m.default.getInWeChat()}),onClick:function(){return e._onClickEditor({tab:"category"})}},void 0,r("div",{className:"overlay"},void 0,r("div",{className:"center"},void 0,r("span",{},void 0,o("Portfolio|Manage Categories")))))))),s&&r("div",{className:(0,h.default)("s-loading-wrapper",{"relative-wrapper":!this._getProductsData().length})},void 0,r("div",{className:"s-loading"})),l.default.createElement(j.default,a({},this._getWrapperProps(),{isLoading:s,emptyComponent:d,paginationComponent:p}),!s&&r("div",{className:"s-component-editor-wrapper"},void 0,r("div",{className:"s-component-overlay"+(m.default.getInWeChat()?" visible":""),onClick:function(){return e._onClickEditor({category:e.dtProps.category,tab:"product"})}},void 0,r("div",{className:"overlay"},void 0,r("div",{className:"center"},void 0,r("span",{},void 0,i))))))))}}),q=(0,V.addOffline)(Y)
Y.WaypointLazy=(0,p.default)(q)
t.default=q
e.exports=t.default}).call(t,n(1))},3818:function(e,t,n){"use strict";(function(t){function o(e,t){return i.createElement("div",{className:"column-image",key:t},i.createElement("div",{className:"image-wrapper"},i.createElement("img",{src:r.cdnAssetPath(this._getImageUrl(e.components.media1.image))})),i.createElement("div",{className:"item-text-group"},e.components.text1.value?i.createElement("div",{className:"item-title s-font-heading",dangerouslySetInnerHTML:{__html:e.components.text1.value}}):null))}var i=n(0),a=n(2),r=n(17)
e.exports=function(){return i.createElement("div",{className:"no-bg s-portfolio-thumb s-section-thumb"},i.createElement("div",{className:"s-section-thumb-content"},i.createElement("div",{className:"p100"},i.createElement("div",{className:"title-group"},i.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text1.value)}}),i.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text2.value)}}))),this.props.content.components.repeatable1.list.length?i.createElement("div",{className:"p100"},i.createElement.apply(this,["div",{className:"columns-media"},a.map(this._getRepetableList(this.props.content.components.repeatable1.list),o.bind(this))])):null))}}).call(t,n(1))},3819:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
t.default=n(3820)
e.exports=t.default},3820:function(e,t,n){"use strict";(function(o){function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,o,i){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=i
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),s=n(0),l=i(s),u=n(7),c=i(u),d=n(3612),p=i(d),f=n(3611),m=i(f),g=n(3743),h=i(g),v=n(3741),y=i(v),b={mixins:[y.default],displayName:"ProcessSection",componentWillMount:function(){n(679).removeOldBackgroundForText(this)
var e=c.default.getThemeName(),t=n(3751),o=this._getLayoutVariation()
this._getLayoutBinding().sub("layout_variation").set(t.getDefaultLayoutKey(e,o))},_getLayoutOptions:function(){var e=c.default.getThemeName()
return n(3751).getLayoutOptions(e)},_shouldRenderItemLinker:function(e,t){return e!==t},_renderItemLinker:function(){return r("div",{className:"process-item-linker"})},_renderRepeatable:function(e){var t=this,o=n(3751),i=c.default.getThemeName(),s=this._getLayoutVariation(),u=this.getComponentBinding(e),d=this.getRepeatableBinding(e),f=void 0
"function"==typeof o.getLayout(i,s)&&(f=o.getLayout(i,s)(d))
var g="function"==typeof o.getItemSize?o.getItemSize(d):void 0,v=function(e,n){var o=d.sub(n),i=f,s=i.itemClass
return l.default.createElement(m.default,a({className:s,binding:{default:o,listBinding:d},index:n},t._getRepeatableItemProps(d,n)),r("div",{className:"process-item-wrapper"},void 0,r("div",{className:"process-item-infos"},void 0,r("div",{className:"process-item-index s-font-body"},void 0,n+1),t._shouldRenderItemLinker(n+1,g)?t._renderItemLinker():null),r(h.default,{section:t,itemBinding:o,binding:o,showItemSubtitle:!1,upperChildrenPosition:!0})))},y=this.getComponentProps("repeatable1")
return l.default.createElement(p.default,a({className:"s-mh"+("editor"===u.get("_state")?" s-arranging":"")},y),u.get("list").map(v).toArray())},render:function(){o("Editor|Process")
o("Editor|A numbered list of steps. Explain how your service works!")
o("Sections|Process")
o("Sections|A numbered list of steps. Explain how your service works!")
o("Sections|Purchase")
o("Sections|Pick your favorites from our high-quality collections, and add to your cart.")
o("Sections|Online Pay")
o("Sections|Enter your address and pay with credit, debit, or PayPal. We ship anywhere.")
o("Sections|Deliver")
o("Sections|We'll deliver your goods within 5 business days. Ask us any questions!")
return this.getTemplate().apply(this)}}
t.default=b
e.exports=t.default}).call(t,n(1))},3821:function(e,t,n){"use strict"
function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n]
o.enumerable=o.enumerable||!1
o.configurable=!0
"value"in o&&(o.writable=!0)
Object.defineProperty(e,o.key,o)}}return function(t,n,o){n&&e(t.prototype,n)
o&&e(t,o)
return t}}(),s=n(3742),l=function(e){function t(e){o(this,t)
var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
n.cacheLevel=-1
n.hideAdvancedOptions=!0
n.sectionName="process"
return n}a(t,e)
r(t,[{key:"getRotationKeys",value:function(){return["horizontal","vertical"]}}])
return t}(s.BaseLayoutButton)
t.default=(0,s.connectToStores)(l)
e.exports=t.default},3822:function(e,t,n){"use strict"
function o(e,t){return i.createElement("div",{className:"info-box",key:t},i.createElement("div",{className:"number-box",dangerouslySetInnerHTML:{__html:t+1}}),e.components.text1.value?i.createElement("div",{className:"item-title s-font-heading",dangerouslySetInnerHTML:{__html:e.components.text1.value}}):null,e.components.text2.value?i.createElement("div",{className:"item-subtitle s-font-body",dangerouslySetInnerHTML:{__html:e.components.text2.value}}):null)}var i=n(0),a=n(2)
e.exports=function(){return i.createElement("div",{className:"s-process-thumb s-section-thumb "+this._getBackgroundClass(),style:this._getBackgroundStyle()},i.createElement("div",{className:"s-section-thumb-content"},i.createElement("div",{className:"p100"},i.createElement("div",{className:"title-group"},this.props.content.components.text1.value?i.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:this.props.content.components.text1.value}}):null)),i.createElement("div",{className:"p100"},i.createElement.apply(this,["div",{className:"info-boxes"},a.map(this._getRepetableList(this.props.content.components.repeatable1.list,3),o.bind(this))]))))}},3826:function(e,t,n){"use strict"
function o(e,t){return i.createElement("div",{className:"column-image",key:t},i.createElement("div",{className:"image-wrapper"},i.createElement("img",{src:this._getImageUrl(e.components.media1.image)})),i.createElement("div",{className:"item-text-group"},e.components.text1.value?i.createElement("div",{className:"item-title s-font-heading",dangerouslySetInnerHTML:{__html:e.components.text1.value}}):null,e.components.text3.value?i.createElement("div",{className:"item-body-text s-font-body",dangerouslySetInnerHTML:{__html:e.components.text3.value}}):null))}var i=n(0),a=n(2)
e.exports=function(){return i.createElement("div",{className:"no-bg s-columns-thumb s-section-thumb"},i.createElement("div",{className:"s-section-thumb-content"},i.createElement("div",{className:"p100"},i.createElement("div",{className:"title-group"},this.props.content.components.text1.value?i.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:this.props.content.components.text1.value}}):null,this.props.content.components.text2.value?i.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:this.props.content.components.text2.value}}):null)),this.props.content.components.repeatable1.list.length?i.createElement("div",{className:"p100"},i.createElement.apply(this,["div",{className:"columns-media"},a.map(this._getRepetableList(this.props.content.components.repeatable1.list),o.bind(this))])):null))}},3827:function(e,t,n){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0})
var o=void 0,i={mixins:[],displayName:"ContactFormSection",_showMap:function(){o.track("Add Map - Contact Form Section - Editor v1")
this.getComponentBinding("slideSettings").sub("display_settings").set("show_map",!0)
this.savePage()},_hideMap:function(){o.track("Remove Map - Contact Form Section - Editor v1")
this.getComponentBinding("slideSettings").sub("display_settings").set("show_map",!1)
this.savePage()},_showContactInfo:function(){o.track("Add Contact Info - Contact Form Section - Editor v1")
this.getComponentBinding("slideSettings").sub("display_settings").set("show_info",!0)
this.savePage()},_hideContactInfo:function(){o.track("Remove Contact Info - Contact Form Section - Editor v1")
this.getComponentBinding("slideSettings").sub("display_settings").set("show_info",!1)
this.savePage()},_isContactInfoEmpty:function(e){return!(e.address||e.phone||e.hours||e.email)},_fixMapHeight:function(e){var t=void 0,n=$(e)||$("#s-map")
if(n.length)if($(window).width()>=927){var o=n.closest(".s-contact-section").find(".s-email-form-inputs-group"),i=o.find(".s-email-form-field"),a=parseInt(i.first().css("padding-top"),10)||0,r=parseInt(i.last().css("padding-bottom"),10)||0
t=o.height()-a-r
t=Math.max(200,t)
n.height(t).css({"margin-top":a,"margin-bottom":r})}else n.height(250).css({"margin-top":0,"margin-bottom":0})},render:function(){n("Editor|Contact Form")
n("Editor|Let viewers drop their name, email, and message.")
return this.getTemplate().apply(this)}}
t.default=i
e.exports=t.default}).call(t,n(1))},3828:function(e,t,n){"use strict";(function(t){var o=n(0),i=(n(2),n(17)),a=n(56)
e.exports=function(){return o.createElement("div",{className:"s-contact-form-thumb s-section-thumb "+this._getBackgroundClass(),style:this._getBackgroundStyle()},o.createElement("div",{className:"s-section-thumb-content"},o.createElement("div",{className:"p100"},o.createElement("div",{className:"title-group"},o.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text1.value)}}),o.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text2.value)}})),o.createElement("div",{className:"form-thumb s-font-body"},o.createElement("div",{className:"form-wrapper"},o.createElement("input",{placeholder:t("Sections|"+this.props.content.components.email1.name_label)}),o.createElement("input",{placeholder:t("Sections|"+this.props.content.components.email1.email_label)}),o.createElement("textarea",{placeholder:t("Sections|"+this.props.content.components.email1.message_label)}),o.createElement("div",{className:"button"},t("Sections|"+this.props.content.components.email1.submit_label))),o.createElement(a,{},o.createElement("img",{src:i.cdnAssetPath("/images/editor2/contact_map.png")}),o.createElement("img",{src:i.cdnAssetPath("/images/editor2/contact_map_sxl.png")}))))))}}).call(t,n(1))},3829:function(e,t,n){"use strict"
function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
var r=function(){function e(e,t){var n=[],o=!0,i=!1,a=void 0
try{for(var r,s=e[Symbol.iterator]();!(o=(r=s.next()).done);o=!0){n.push(r.value)
if(t&&n.length===t)break}}catch(e){i=!0
a=e}finally{try{!o&&s.return&&s.return()}finally{if(i)throw a}}return n}return function(t,n){if(Array.isArray(t))return t
if(Symbol.iterator in Object(t))return e(t,n)
throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n]
o.enumerable=o.enumerable||!1
o.configurable=!0
"value"in o&&(o.writable=!0)
Object.defineProperty(e,o.key,o)}}return function(t,n,o){n&&e(t.prototype,n)
o&&e(t,o)
return t}}(),l=n(3742),u=n(2),c=(function(e){e&&e.__esModule}(u),function(e){function t(e){o(this,t)
var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
n.cacheLevel=-1
n.hideAdvancedOptions=!0
n.sectionName="new_title"
return n}a(t,e)
s(t,[{key:"componentDidMount",value:function(){this._rightLayout="center-right-normal"===this.props.layoutVariation}},{key:"getRotationKeys",value:function(){var e=r(this._levelKeys,3),t=(e[0],e[1],e[2]),n=["center-subTop-"+t,"center-bottom-"+t]
this._rightLayout&&n.push("center-right-"+t)
return n}}])
return t}(l.BaseLayoutButton))
t.default=(0,l.connectToStores)(c)
e.exports=t.default},3830:function(e,t,n){"use strict"
function o(e,t){return i.createElement("div",{className:"gallery-image",key:t},i.createElement("img",{src:this._getImageUrl(e,!0)}))}var i=n(0),a=n(2)
e.exports=function(){return i.createElement("div",{className:"no-bg s-gallery-thumb s-section-thumb"},i.createElement("div",{className:"s-section-thumb-content"},i.createElement("div",{className:"p100"},i.createElement("div",{className:"title-group"},this.props.content.components.text1.value?i.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:this.props.content.components.text1.value}}):null,this.props.content.components.text2.value?i.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:this.props.content.components.text1.value}}):null)),this.props.content.components.gallery1.sources.length?i.createElement("div",{className:"p100"},i.createElement.apply(this,["div",{className:"gallery-media"},a.map(this._getRepetableList(this.props.content.components.gallery1.sources,8),o.bind(this))])):null))}},3831:function(e,t,n){"use strict"
function o(e,t){return i.createElement("div",{className:"icon",key:t},i.createElement("img",{src:this._getImageUrl(e.components.image1)}),e.components.text1.value?i.createElement("div",{className:"item-subtitle",dangerouslySetInnerHTML:{__html:e.components.text1.value}}):null)}var i=n(0),a=n(2),r=n(56)
e.exports=function(){return i.createElement("div",{className:"no-bg s-icons-thumb s-section-thumb"},i.createElement("div",{className:"s-section-thumb-content"},i.createElement("div",{className:"p100"},i.createElement("div",{className:"title-group"},this.props.content.components.text1.value?i.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:this.props.content.components.text1.value}}):null,this.props.content.components.text2.value?i.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:this.props.content.components.text2.value}}):null)),i.createElement("div",{className:"p100"},i.createElement(r,{},i.createElement.apply(this,["div",{className:"icons-media s-font-body"},a.map(this._getRepetableList(this.props.content.components.repeatable1.list,4),o.bind(this))]),i.createElement("div",{className:"icons-media s-font-body"},i.createElement("div",{className:"icon"},i.createElement("img",{src:"//uploads.sxlcdn.com/static/icons/black/wechat-icon.png"}),i.createElement("div",{className:"item-subtitle"},"微信")),i.createElement("div",{className:"icon"},i.createElement("img",{src:"//uploads.sxlcdn.com/static/icons/black/weibo-icon.png"}),i.createElement("div",{className:"item-subtitle"},"微博")),i.createElement("div",{className:"icon"},i.createElement("img",{src:"//uploads.sxlcdn.com/page/images/icons/phone-icon.png"}),i.createElement("div",{className:"item-subtitle"},"电话")),i.createElement("div",{className:"icon"},i.createElement("img",{src:"//uploads.sxlcdn.com/page/images/icons/email-icon.png"}),i.createElement("div",{className:"item-subtitle"},"邮箱")))))))}},3832:function(e,t,n){"use strict"
function o(e,t){return i.createElement("div",{className:"info-box",key:t},e.components.text1.value?i.createElement("div",{className:"item-title s-font-heading",dangerouslySetInnerHTML:{__html:e.components.text1.value}}):null,e.components.text2.value?i.createElement("div",{className:"item-subtitle s-font-body",dangerouslySetInnerHTML:{__html:e.components.text2.value}}):null)}var i=n(0),a=n(2)
e.exports=function(){return i.createElement("div",{className:"s-info-thumb s-section-thumb "+this._getBackgroundClass(),style:this._getBackgroundStyle()},i.createElement("div",{className:"s-section-thumb-content"},i.createElement("div",{className:"p100"},i.createElement("div",{className:"title-group"},this.props.content.components.text1.value?i.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:this.props.content.components.text1.value}}):null,this.props.content.components.text2.value?i.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:this.props.content.components.text2.value}}):null)),i.createElement("div",{className:"p100"},i.createElement.apply(this,["div",{className:"info-boxes"},a.map(this._getRepetableList(this.props.content.components.repeatable1.list,4),o.bind(this))]))))}},3833:function(e,t,n){"use strict"
function o(e,t){return i.createElement("div",{key:t},i.createElement("div",{className:"media-image-thumb"},i.createElement("img",{src:this._getImageUrl(e.components.media1.image)})),e.components.text1.value?i.createElement("div",{className:"item-body-text s-font-body",dangerouslySetInnerHTML:{__html:e.components.text1.value}}):null)}var i=n(0),a=n(2)
e.exports=function(){return i.createElement("div",{className:"no-bg s-media-thumb s-section-thumb"},i.createElement("div",{className:"s-section-thumb-content"},i.createElement.apply(this,["div",{className:"p100"},i.createElement("div",{className:"title-group"},this.props.content.components.text1.value?i.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:this.props.content.components.text1.value}}):null,this.props.content.components.text2.value?i.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:this.props.content.components.text2.value}}):null),a.map(this.props.content.components.repeatable1.list,o.bind(this))])))}},3834:function(e,t,n){"use strict"
function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var i=n(3),a=o(i),r=n(256),s=o(r),l=n(7),u=o(l),c=n(137),d=o(c),p=n(108),f=o(p),m={observedProps:["showNav"],displayName:"NavbarSection",propTypes:{binding:a.default.object.isRequired,firstSectionBackgroundProps:a.default.object.isRequired,className:a.default.string,navbarItemData:a.default.oneOfType([a.default.object,a.default.array]),showNav:a.default.bool,eagerLoad:a.default.bool.isRequired},componentDidMount:function(){s.default.addChangeListener(this._pagesListListener)},componentWillUnmount:function(){s.default.removeChangeListener(this._pagesListListener)},_pagesListListener:function(){this.forceUpdate()},_getTimestampForLinks:function(){return(new Date).getTime()},getSectionHash:function(e){return d.default.getSectionHashByIndex(e)},_getFirstSectionBackgroundProps:function(){return this.props.firstSectionBackgroundProps},_getNavItemProps:function(e){return e.showNav&&e.name.length?{}:{style:{display:"none"}}},_switchPage:function(e,t){switch(u.default.getSiteMode()){case"editor":t.preventDefault()
return f.default.replace(e.path)
case"preview":t.preventDefault()
return f.default.push(e.path)}},render:function(){return this.getTemplate().apply(this)}}
t.default=m
e.exports=t.default},3835:function(e,t,n){"use strict"
function o(e,t){return i.createElement("div",{className:"row-container",key:t},i.createElement("div",{className:"rows-img"},i.createElement("img",{src:this._getImageUrl(e.components.media1.image)})),i.createElement("div",{className:"item-text-group"},e.components.text1.value?i.createElement("div",{className:"item-title s-font-heading",dangerouslySetInnerHTML:{__html:e.components.text1.value}}):null,e.components.text3.value?i.createElement("div",{className:"item-body-text s-font-body",dangerouslySetInnerHTML:{__html:e.components.text3.value}}):null))}var i=n(0),a=n(2)
e.exports=function(){return i.createElement("div",{className:"no-bg s-rows-thumb s-section-thumb "+this._getSectionTypeClass()},i.createElement("div",{className:"s-section-thumb-content s-thumb-"+this._getLayout()},i.createElement("div",{className:"p100"},i.createElement("div",{className:"title-group"},this.props.content.components.text1.value?i.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:this.props.content.components.text1.value}}):null)),this.props.content.components.repeatable1.list.length?i.createElement.apply(this,["div",{className:"p100"},a.map(this.props.content.components.repeatable1.list,o.bind(this))]):null))}},3836:function(e,t){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var n={mixins:[],displayName:"SocialFeedSection",render:function(){return this.getTemplate().apply(this)}}
t.default=n
e.exports=t.default},3837:function(e,t,n){"use strict"
function o(e,t){return i.createElement("div",{className:"text-container",key:t},e.components.text1.value?i.createElement("div",{className:"item-title s-font-heading",dangerouslySetInnerHTML:{__html:e.components.text1.value}}):null,e.components.text2.value?i.createElement("div",{className:"item-subtitle s-font-body",dangerouslySetInnerHTML:{__html:e.components.text2.value}}):null)}var i=n(0),a=n(2)
e.exports=function(){return i.createElement("div",{className:"no-bg s-section-thumb s-text-thumb"},i.createElement("div",{className:"s-section-thumb-content"},i.createElement("div",{className:"p100"},i.createElement("div",{className:"title-group"},this.props.content.components.text1.value?i.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:this.props.content.components.text1.value}}):null,this.props.content.components.text2.value?i.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:this.props.content.components.text2.value}}):null),this.props.content.components.repeatable1.list.length?i.createElement.apply(this,["div",{},a.map(this.props.content.components.repeatable1.list,o.bind(this))]):null)))}},3838:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
t.default=n(3754)
e.exports=t.default},3839:function(e,t,n){"use strict"
function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var i=n(3),a=o(i),r=n(7),s=o(r),l={observedProps:["showFooter","showTermsLink","showPrivacyPolicyLink"],propTypes:{showFooter:a.default.bool,showTermsLink:a.default.bool,showPrivacyPolicyLink:a.default.bool},displayName:"FooterSection",_getLayoutOptions:function(){return[{name:"Vertical",key:"vertical"},{name:"Horizontal",key:"horizontal"},{name:"Grid",key:"grid"},{name:"Image",key:"image"}]},_getFooterLayoutProps:function(){var e=this.getDefaultBinding()
return{layoutVariation:e.get("layout_variation"),binding:e}},_getLayout:function(){return this.getDefaultBinding().get("layout_variation")||"vertical"},_hasMobileActions:function(){return s.default.hasNewMobileActions()},render:function(){return this.getTemplate().apply(this)}}
t.default=l
e.exports=t.default},3840:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/base/sections/hero/thumbnail/cover.png"},3841:function(e,t,n){"use strict";(function(t){var o=n(0)
n(2)
e.exports=function(){return o.createElement("div",{className:"s-hero-thumb s-section-thumb "+this._getBackgroundClass(),style:this._getBackgroundStyle()},o.createElement("div",{className:"s-section-thumb-content"},o.createElement("div",{className:"p50"},o.createElement("div",{className:"media"},o.createElement("img",{src:this._getImageUrl(this.props.content.components.media1.image)}))),o.createElement("div",{className:"p50"},o.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text1.value)}}),o.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text2.value)}}),o.createElement("div",{className:"button s-font-body"},t("Sections|"+this.props.content.components.button1.text)))))}}).call(t,n(1))},3842:function(e,t,n){"use strict"
var o=n(0),i=(n(2),n(3752))
e.exports=function(){return o.createElement("div",{},"\n  ",i.apply(this),"\n")}},3843:function(e,t,n){"use strict"
var o=n(0),i=(n(2),n(3763))
e.exports=function(){return o.createElement("div",{},"\n  ",i.apply(this),"\n")}},3844:function(e,t,n){"use strict";(function(o){function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var a=n(32),r=i(a),s=n(3741),l=i(s)
t.default={mixins:[l.default],displayName:"GallerySection",_getLayoutOptions:function(){return[{name:"normal",key:"normal"},{name:"full width",key:"fullWidth"},{name:"vertical",key:"vertical"}]},_isSmallScreen:function(){return r.default.isSmallScreen()},render:function(){o("Editor|Gallery")
o("Editor|Image and video thumbnails that open in a full view.")
return this.getTemplate().apply(this)}}
e.exports=t.default}).call(t,n(1))},3845:function(e,t,n){"use strict"
function o(e,t){var n=a.assign({},e,t)
e.hasOwnProperty("style")&&(n.style=a.defaults(n.style,e.style))
e.hasOwnProperty("className")&&t.hasOwnProperty("className")&&(n.className=t.className+" "+e.className)
return n}var i=n(0),a=n(2),r=(n(449),n(3740)),s=n(3610),l=n(1281),u=n(3738),c=n(3739)
e.exports=function(){return i.createElement(c,o({className:"s-html-section s-section"},this.getThemeFeature("disableBackgrounds")?{}:this.getBackgroundProps("background1")),this.isEditMode()?i.createElement("div",{className:"s-section-editor-wrapper"},this.getThemeFeature("disableBackgrounds")?null:i.createElement(r,a.assign({},{bgClassNames:this.getThemeFeature("backgroundColorClassNames")},this.getComponentProps("background1")))):null,!this.getThemeFeature("disableBackgrounds")&&this.hasBackgroundVideo("background1")?i.createElement(s,this.getBackgroundProps("background1")):null,i.createElement("div",{className:"container"},i.createElement("div",{className:"columns sixteen"},i.createElement(u,{section:this,binding:this.getDefaultBinding()}),i.createElement(l,this.getComponentProps("html1")))))}},3846:function(e,t,n){"use strict"
function o(e,t){var n=a.assign({},e,t)
e.hasOwnProperty("style")&&(n.style=a.defaults(n.style,e.style))
e.hasOwnProperty("className")&&t.hasOwnProperty("className")&&(n.className=t.className+" "+e.className)
return n}var i=n(0),a=n(2),r=(n(3794),n(449),n(3738)),s=(n(3740),n(3739)),l=n(3610)
e.exports=function(){return i.createElement(s,o({className:"s-icons-section s-section"},this.getThemeFeature("disableBackgrounds")?{}:this.getBackgroundProps("background1",null,!0)),null,!this.getThemeFeature("disableBackgrounds")&&this.hasBackgroundVideo("background1")?i.createElement(l,this.getBackgroundProps("background1")):null,i.createElement("div",{className:"container"},i.createElement("div",{className:"columns sixteen"},i.createElement(r,{contentCheck:"repeatable1",section:this,binding:this.getDefaultBinding()})),i.createElement("div",{className:this.sbUniformTextAlignment("text1 text2")},"\n      ",this._renderRepeatable("repeatable1"),"\n    ")))}},3847:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
t.default=n(3758)
e.exports=t.default},3848:function(e,t,n){"use strict"
var o=n(0),i=(n(2),n(3753),n(449),n(3740),n(3610),n(3738),n(3739),n(4),n(3764))
e.exports=function(){return o.createElement("div",{},"\n  ",i.apply(this),"\n")}},3849:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
t.default=n(3747)
e.exports=t.default},3850:function(e,t,n){"use strict"
var o=n(0),i=(n(2),n(3752))
e.exports=function(){return o.createElement("div",{},"\n  ",i.apply(this),"\n")}},3851:function(e,t,n){"use strict"
var o=n(0),i=(n(2),n(3752))
e.exports=function(){return o.createElement("div",{},"\n  ",i.apply(this),"\n")}},3852:function(e,t,n){"use strict"
var o=n(0),i=(n(2),n(3765))
e.exports=function(){return o.createElement("div",{},"\n  ",i.apply(this),"\n")}},3853:function(e,t,n){"use strict"
function o(e,t){var n=a.assign({},e,t)
e.hasOwnProperty("style")&&(n.style=a.defaults(n.style,e.style))
e.hasOwnProperty("className")&&t.hasOwnProperty("className")&&(n.className=t.className+" "+e.className)
return n}var i=n(0),a=n(2),r=(n(449),n(680)),s=n(3738),l=(n(1236),n(3740)),u=n(3739),c=n(3610)
e.exports=function(){return i.createElement(u,o({className:"s-section s-social-feed-section"},this.getThemeFeature("disableBackgrounds")?{}:this.getBackgroundProps("background1",null,!0)),this.isEditMode()?i.createElement("div",{className:"s-section-editor-wrapper"},this.getThemeFeature("disableBackgrounds")?null:i.createElement(l,a.assign({},{wasMinimal:!0},this.getComponentProps("background1")))):null,!this.getThemeFeature("disableBackgrounds")&&this.hasBackgroundVideo("background1")?i.createElement(c,this.getBackgroundProps("background1")):null,i.createElement("div",{className:"container"},i.createElement("div",{className:"columns sixteen"},i.createElement(s,{section:this,binding:this.getDefaultBinding()})),i.createElement(r,{componentName:"socialFeedComponent",componentProps:this.getComponentProps("social_feed1"),binding:this.getComponentBinding("social_feed1")}),null))}},3854:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
t.default=n(3758)
e.exports=t.default},3855:function(e,t,n){"use strict"
var o=n(0),i=(n(2),n(3764))
e.exports=function(){return o.createElement("div",{},"\n  ",i.apply(this),"\n")}},3856:function(e,t,n){"use strict"
var o=n(0),i=(n(2),n(3763))
e.exports=function(){return o.createElement("div",{},"\n  ",i.apply(this),"\n")}},3857:function(e,t,n){"use strict"
function o(e,t){var n=a.assign({},e,t)
e.hasOwnProperty("style")&&(n.style=a.defaults(n.style,e.style))
e.hasOwnProperty("className")&&t.hasOwnProperty("className")&&(n.className=t.className+" "+e.className)
return n}var i=n(0),a=n(2),r=(n(449),n(3610)),s=n(3740),l=n(3738),u=n(321),c=n(3739)
e.exports=function(){return i.createElement(c,o({className:"s-block-section s-section"},this.getThemeFeature("disableBackgrounds")?{}:this.getBackgroundProps("background1")),this.isEditMode()?i.createElement("div",{className:"s-section-editor-wrapper"},this.getThemeFeature("disableBackgrounds")?null:i.createElement(s,this.getComponentProps("background1"))):null,!this.getThemeFeature("disableBackgrounds")&&this.hasBackgroundVideo("background1")?i.createElement(r,this.getBackgroundProps("background1")):null,i.createElement("div",{className:"container"},i.createElement("div",{className:"columns sixteen"},i.createElement(l,{section:this,binding:this.getDefaultBinding()})),i.createElement("div",{className:"alignment-container "+this.sbUniformTextAlignment("text1 text2")+(this.isState("editor")?" s-arranging":"")},i.createElement(u,{binding:this.getComponentBinding("block1"),items:this.getComponentBinding("block1").sub("items").get().toArray(),themeFeature:this.getWholeThemeFeature()}))))}},3858:function(e,t,n){"use strict"
function o(e,t){var n=a.assign({},e,t)
e.hasOwnProperty("style")&&(n.style=a.defaults(n.style,e.style))
e.hasOwnProperty("className")&&t.hasOwnProperty("className")&&(n.className=t.className+" "+e.className)
return n}var i=n(0),a=n(2),r=n(3610),s=n(3738),l=(n(1236),n(4),n(3740)),u=n(3807),c=n(3739)
e.exports=function(){return i.createElement(c,o({className:"s-donation-section s-section"},this.getThemeFeature("disableBackgrounds")?{}:this.getBackgroundProps("background1",null,!0)),this.isEditMode()?i.createElement("div",{className:"s-section-editor-wrapper"},this.getThemeFeature("disableBackgrounds")?null:i.createElement(l,a.assign({},{wasMinimal:!0},this.getComponentProps("background1")))):null,!this.getThemeFeature("disableBackgrounds")&&this.hasBackgroundVideo("background1")?i.createElement(r,this.getBackgroundProps("background1")):null,i.createElement("div",{className:"container"},i.createElement("div",{className:"columns sixteen"},i.createElement(s,{section:this,binding:this.getDefaultBinding()})),i.createElement("div",{className:"s-ecommerce-container"},i.createElement(u,a.assign({},{sbClass:this.sbUniformTextAlignment("text1 text2")},this.getComponentProps("donation1"))),null)))}},3859:function(e,t,n){"use strict"
function o(e,t){var n=l.assign({},e,t)
e.hasOwnProperty("style")&&(n.style=l.defaults(n.style,e.style))
e.hasOwnProperty("className")&&t.hasOwnProperty("className")&&(n.className=t.className+" "+e.className)
return n}function i(e){var t=this.props.showTermsLink
return s.createElement("div",{className:"has-copy-right"},s.createElement("div",{className:"columns no-float sixteen"},s.createElement("div",{className:"separate-line"})),s.createElement("div",{className:"columns no-float s-text-color-gray "+this.sbUniformTextAlignment("copyright")+" "+l.keys(l.pick({ten:t||this.props.showPrivacyPolicyLink,sixteen:!t&&!this.props.showPrivacyPolicyLink},l.identity)).join(" ")},s.createElement("div",{className:"left-align s-footer-text"},s.createElement(c,l.assign({},{textType:"body",binding:e},e.get().toObject())))),t||this.props.showPrivacyPolicyLink?s.createElement("div",{className:"columns no-float s-text-color-gray six"},s.createElement("div",{className:"right-align s-footer-text",style:{marginTop:"-10px"}},t?s.createElement(f,{className:"s-font-body",hasPrivacyPolicy:this.props.showPrivacyPolicyLink}):null,this.props.showPrivacyPolicyLink?s.createElement(m,{className:"s-font-body"}):null)):null)}function a(e){var t=this.props.showTermsLink
return s.createElement("div",{className:"has-copy-right"},s.createElement("div",{className:"columns no-float sixteen"},s.createElement("div",{className:"separate-line"})),s.createElement("div",{className:"columns no-float s-text-color-gray "+this.sbUniformTextAlignment("copyright")+" "+l.keys(l.pick({ten:t||this.props.showPrivacyPolicyLink,sixteen:!t&&!this.props.showPrivacyPolicyLink},l.identity)).join(" ")},s.createElement("div",{className:"left-align s-footer-text"},s.createElement(c,l.assign({},{textType:"body",binding:e},e.get().toObject())))),t||this.props.showPrivacyPolicyLink?s.createElement("div",{className:"columns no-float s-text-color-gray six"},s.createElement("div",{className:"right-align s-footer-text",style:{marginTop:"-10px"}},t?s.createElement(f,{className:"s-font-body",hasPrivacyPolicy:this.props.showPrivacyPolicyLink}):null,this.props.showPrivacyPolicyLink?s.createElement(m,{className:"s-font-body"}):null)):null)}function r(){var e=this.getComponentBinding("copyright"),t=this.getComponentBinding("socialMedia")
return s.createElement(v,o({className:"s-footer-section s-section "+l.keys(l.pick({"has-terms-link":this.props.showTermsLink,"has-new-mobile-actions":this._hasMobileActions()},l.identity)).join(" ")},this.getThemeFeature("disableBackgrounds")?{}:this.getFooterBackgroundProps("background1")),this.isEditMode()?s.createElement("div",{className:"s-section-editor-wrapper"},this.getThemeFeature("disableBackgrounds")?null:s.createElement(h,l.assign({},{minimal:!0,footerSection:!0},this.getComponentProps("background1"))),s.createElement(g,l.assign({},{layoutOptions:this._getLayoutOptions()},this._getFooterLayoutProps()))):null,"vertical"==this._getLayout()?s.createElement("div",{className:"container s-layout-vertical"},s.createElement("div",{className:"columns sixteen "+this.sbUniformTextAlignment("copyright")},s.createElement("div",{},s.createElement(p.WaypointLazy,l.assign({},{binding:t,")":!0},t.toJS()))),s.createElement("div",{className:"s-footer-text"},s.createElement(c,l.assign({},{textType:"body",binding:e},e.get().toObject()))),this.props.showTermsLink?s.createElement(f,{className:"s-font-body",hasPrivacyPolicy:this.props.showPrivacyPolicyLink}):null,this.props.showPrivacyPolicyLink?s.createElement(m,{className:"s-font-body"}):null)):null,"horizontal"==this._getLayout()?s.createElement("div",{className:"container s-layout-horizontal"},s.createElement("div",{className:"columns eight"},s.createElement("div",{},s.createElement(p.WaypointLazy,l.assign({},{binding:t,")":!0},t.toJS())))),s.createElement("div",{className:"columns eight"},s.createElement("div",{className:"right-align s-footer-text"},this.isEditMode()||e.get("value")?s.createElement(c,l.assign({},{textType:"body",binding:e},e.get().toObject())):null,this.props.showTermsLink?s.createElement(f,{className:u("s-font-body",{"s-compact":!this.isEditMode()&&!e.get("value")})+" "+this.sbUniformTextAlignment("copyright"),hasPrivacyPolicy:this.props.showPrivacyPolicyLink}):null,this.props.showPrivacyPolicyLink?s.createElement(m,{className:u("s-font-body",{"s-compact":!this.isEditMode()&&!e.get("value")})+" "+this.sbUniformTextAlignment("copyright")}):null))):null,"grid"==this._getLayout()?s.createElement("div",{className:"container s-layout-grid"},this.sbHasContent("text1")?s.createElement("div",{className:"columns four half-fixed"},s.createElement("div",{className:"left-align s-footer-text"},s.createElement(c,l.assign({},{textType:"body",applyWordBreaks:!0,binding:this.getComponentBinding("text1")},this.getComponentProps("text1"))))):null,this.sbHasContent("text2")?s.createElement("div",{className:"columns four half-fixed"},s.createElement("div",{className:"left-align s-footer-text"},s.createElement(c,l.assign({},{textType:"body",applyWordBreaks:!0,binding:this.getComponentBinding("text2")},this.getComponentProps("text2"))))):null,this.sbHasContent("text3")?s.createElement("div",{className:"columns four half-fixed"},s.createElement("div",{className:"left-align s-footer-text"},s.createElement(c,l.assign({},{textType:"body",applyWordBreaks:!0,binding:this.getComponentBinding("text3")},this.getComponentProps("text3"))))):null,s.createElement("div",{className:"columns float-right four half-fixed right-align"},this.sbHasContent("socialMedia")?s.createElement("div",{},s.createElement(p.WaypointLazy,l.assign({},{binding:t,")":!0},t.toJS()))):null,this.sbHasContent("copyright")?null:s.createElement("div",{},this.props.showTermsLink?s.createElement(f,{className:"s-font-body",hasPrivacyPolicy:this.props.showPrivacyPolicyLink}):null,this.props.showPrivacyPolicyLink?s.createElement(m,{className:"s-font-body"}):null)),this.sbHasContent("copyright")?i.apply(this,[e,t]):null):null,"image"==this._getLayout()?s.createElement("div",{className:"container s-layout-grid s-layout-image"},this.sbHasContent("image1")?s.createElement("div",{className:"columns half-fixed img three"},s.createElement("div",{className:"left-align s-footer-text"},s.createElement(d,l.assign({},{size:"small",needTrim:"true"},this.getReduxComponentProps("image1"))))):null,this.sbHasContent("text1")?s.createElement("div",{className:"columns half-fixed three"},s.createElement("div",{className:"left-align s-footer-text"},s.createElement(c,l.assign({},{textType:"body",applyWordBreaks:!0,binding:this.getComponentBinding("text1")},this.getComponentProps("text1"))))):null,this.sbHasContent("text2")?s.createElement("div",{className:"columns half-fixed three"},s.createElement("div",{className:"left-align s-footer-text"},s.createElement(c,l.assign({},{textType:"body",applyWordBreaks:!0,binding:this.getComponentBinding("text2")},this.getComponentProps("text2"))))):null,this.sbHasContent("text3")?s.createElement("div",{className:"columns half-fixed three"},s.createElement("div",{className:"left-align s-footer-text"},s.createElement(c,l.assign({},{textType:"body",applyWordBreaks:!0,binding:this.getComponentBinding("text3")},this.getComponentProps("text3"))))):null,s.createElement("div",{className:"columns float-right four half-fixed right-align"},this.sbHasContent("socialMedia")?s.createElement("div",{},s.createElement(p.WaypointLazy,l.assign({},{binding:t,")":!0},t.toJS()))):null,this.sbHasContent("copyright")?null:s.createElement("div",{},this.props.showTermsLink?s.createElement(f,{className:"s-font-body",hasPrivacyPolicy:this.props.showPrivacyPolicyLink}):null,this.props.showPrivacyPolicyLink?s.createElement(m,{className:"s-font-body"}):null)),this.sbHasContent("copyright")?a.apply(this,[e,t]):null):null)}var s=n(0),l=n(2),u=n(16),c=n(449),d=n(450),p=n(1282),f=n(1277),m=n(1278),g=n(3753),h=(n(4),n(3740)),v=n(3739)
e.exports=function(){return this.props.showFooter?r.apply(this,[]):null}},3860:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
t.default=n(3759)
e.exports=t.default},3861:function(e,t,n){"use strict"
var o=n(0),i=(n(2),n(3765))
e.exports=function(){return o.createElement("div",{},"\n  ",i.apply(this),"\n")}},3862:function(e,t,n){"use strict"
function o(e,t){var n=a.assign({},e,t)
e.hasOwnProperty("style")&&(n.style=a.defaults(n.style,e.style))
e.hasOwnProperty("className")&&t.hasOwnProperty("className")&&(n.className=t.className+" "+e.className)
return n}var i=n(0),a=n(2),r=(n(449),n(680),n(3738)),s=(n(1236),n(4),n(3762)),l=n(3740),u=n(3816),c=n(3817),d=n(3739),p=n(3610)
e.exports=function(){return i.createElement(d,o({className:"s-section s-store-section"},this.getThemeFeature("disableBackgrounds")?{}:this.getBackgroundProps("background1",null,!0)),this.isEditMode()?i.createElement("div",{className:"s-section-editor-wrapper"},this.getThemeFeature("disableBackgrounds")?null:i.createElement(l,a.assign({},{wasMinimal:!0},this.getComponentProps("background1"))),this._showLayoutButton()?i.createElement(s,a.assign({},{layoutOptions:this._getLayoutOptions(),updateLayout:this._updateLayout},this._getLayoutProps())):null,i.createElement(u,this.getComponentProps("portfolio1"))):null,!this.getThemeFeature("disableBackgrounds")&&this.hasBackgroundVideo("background1")?i.createElement(p,this.getBackgroundProps("background1")):null,i.createElement("div",{className:"container"},i.createElement("div",{className:"columns sixteen"},i.createElement(r,{section:this,binding:this.getDefaultBinding()})),i.createElement("div",{className:"s-ecommerce-container"},i.createElement(c,a.assign({},{sbClass:this.sbUniformTextAlignment("text1 text2")},this.getComponentProps("portfolio1"))),null)))}},3863:function(e,t,n){"use strict"
var o=n(0),i=(n(2),n(3864))
e.exports=function(){return o.createElement("div",{},"\n  ",i.apply(this),"\n")}},3864:function(e,t,n){"use strict"
function o(e,t){var n=a.assign({},e,t)
e.hasOwnProperty("style")&&(n.style=a.defaults(n.style,e.style))
e.hasOwnProperty("className")&&t.hasOwnProperty("className")&&(n.className=t.className+" "+e.className)
return n}var i=n(0),a=n(2),r=(n(3821),n(3740),n(449),n(3738)),s=n(3610),l=n(3739)
e.exports=function(){return i.createElement(l,o({className:"s-process-section s-section"},this.getThemeFeature("disableBackgrounds")?{}:this.getBackgroundProps("background1",null,!0)),null,!this.getThemeFeature("disableBackgrounds")&&this.hasBackgroundVideo("background1")?i.createElement(s,this.getBackgroundProps("background1")):null,i.createElement("div",{className:"container"},i.createElement("div",{className:"columns sixteen"},i.createElement(r,{contentCheck:"repeatable1",section:this,binding:this.getDefaultBinding()}),i.createElement("div",{className:this.sbUniformTextAlignment("text1 text2")},"\n        ",this._renderRepeatable("repeatable1"),"\n      "))))}},3868:function(e,t,n){"use strict"
function o(e,t){var n=a.assign({},e,t)
e.hasOwnProperty("style")&&(n.style=a.defaults(n.style,e.style))
e.hasOwnProperty("className")&&t.hasOwnProperty("className")&&(n.className=t.className+" "+e.className)
return n}var i=n(0),a=n(2),r=(n(449),n(3610)),s=n(1247),l=(n(3740),n(3738)),u=n(3739),c=(n(3781),n(685))
n(3782)
e.exports=function(){return i.createElement(u,o({className:"s-blog-section s-section"},this.getThemeFeature("disableBackgrounds")?{}:this.getBackgroundProps("background1")),i.createElement(c,this._getWaypointProps()),null,!this.getThemeFeature("disableBackgrounds")&&this.hasBackgroundVideo("background1")?i.createElement(r,this.getBackgroundProps("background1")):null,i.createElement("div",{className:"container"},i.createElement("div",{className:"columns no-float sixteen"},i.createElement(l,{section:this,binding:this.getDefaultBinding()})),i.createElement("div",{className:this.sbUniformTextAlignment("text1 text2")},i.createElement(s,o({className:"WaypointLazy"},this.getComponentProps("blog1"))))))}},3869:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
t.default=n(3747)
e.exports=t.default},3870:function(e,t,n){"use strict";(function(t){function o(e,t){var n=c.assign({},e,t)
e.hasOwnProperty("style")&&(n.style=c.defaults(n.style,e.style))
e.hasOwnProperty("className")&&t.hasOwnProperty("className")&&(n.className=t.className+" "+e.className)
return n}function i(){var e=this.getComponentProps("contactInfo1")
return u.createElement("div",{className:"s-contact-section-columns s-three-columns "+this.sbUniformTextAlignment("text1 text2")},u.createElement("div",{className:"s-contact-info-column"},u.createElement(v,c.assign({},{onDelete:this._hideContactInfo},e))),u.createElement("div",{className:"s-google-maps-column"},u.createElement(h,c.assign({},{onDelete:this._hideMap,fixHeight:this._fixMapHeight},e))),u.createElement("div",{className:"s-email-column"},u.createElement(f,c.assign({},{onToggleField:this._fixMapHeight,fieldType:"overlay_label_field"},this.getComponentProps("email1")))))}function a(){var e=this.getComponentProps("contactInfo1")
return u.createElement("div",{className:"s-contact-section-columns s-two-columns "+this.sbUniformTextAlignment("text1 text2")},u.createElement("div",{className:"s-google-maps-column"},u.createElement(h,c.assign({},{onDelete:this._hideMap,fixHeight:this._fixMapHeight},e))),u.createElement("div",{className:"s-email-column"},u.createElement(f,c.assign({},{onToggleField:this._fixMapHeight,fieldType:"overlay_label_field"},this.getComponentProps("email1")))))}function r(){var e=this.getComponentProps("contactInfo1")
return u.createElement("div",{className:"s-contact-section-columns s-three-columns "+this.sbUniformTextAlignment("text1 text2")},u.createElement("div",{className:"s-contact-info-column"},u.createElement(v,c.assign({},{onDelete:this._hideContactInfo},e))),u.createElement("div",{className:"s-google-maps-column"},u.createElement(h,c.assign({},{onDelete:this._hideMap,fixHeight:this._fixMapHeight},e))),u.createElement("div",{className:"s-email-column"},u.createElement(f,c.assign({},{onToggleField:this._fixMapHeight,fieldType:"overlay_label_field"},this.getComponentProps("email1")))))}function s(e){var t=this.getComponentProps("contactInfo1")
return u.createElement("div",{className:"s-contact-section-columns s-two-columns "+this.sbUniformTextAlignment("text1 text2")},!e.get("show_info")||!this.isEditMode()&&this._isContactInfoEmpty(t)?null:u.createElement("div",{className:"s-contact-info-column"},u.createElement(v,c.assign({},{onDelete:this._hideContactInfo},t))),e.get("show_map")?u.createElement("div",{className:"s-google-maps-column"},u.createElement(h,c.assign({},{onDelete:this._hideMap,fixHeight:this._fixMapHeight},this.getComponentProps("contactInfo1")))):null,u.createElement("div",{className:"s-email-column"},u.createElement(f,c.assign({},{onToggleField:this._fixMapHeight,fieldType:"overlay_label_field"},this.getComponentProps("email1")))))}function l(){var e=this.generateComponentBindingIfMissing(["slideSettings","display_settings"])
return u.createElement("div",{className:"container"},e.get("show_map")||e.get("show_info")?null:u.createElement("div",{className:"columns "+(this.getThemeFeature("narrowContactForm")?"twelve offset-two":"sixteen")},u.createElement(m,{section:this,binding:this.getDefaultBinding()}),u.createElement("div",{className:"s-email-form-container "+this.sbUniformTextAlignment("text1 text2")},u.createElement(f,c.assign({},{onToggleField:this._fixMapHeight,fieldType:"overlay_label_field"},this.getComponentProps("email1"))))),this.isEditMode()&&e.get("show_map")&&e.get("show_info")?u.createElement("div",{className:"columns sixteen"},u.createElement(m,{section:this,binding:this.getDefaultBinding()}),i.apply(this,[e])):null,!this.isEditMode()&&e.get("show_map")&&e.get("show_info")&&this._isContactInfoEmpty(this.getComponentProps("contactInfo1"))?u.createElement("div",{className:"columns sixteen"},u.createElement(m,{section:this,binding:this.getDefaultBinding()}),a.apply(this,[e])):null,!this.isEditMode()&&e.get("show_map")&&e.get("show_info")&&!this._isContactInfoEmpty(this.getComponentProps("contactInfo1"))?u.createElement("div",{className:"columns sixteen"},u.createElement(m,{section:this,binding:this.getDefaultBinding()}),r.apply(this,[e])):null,!e.get("show_map")&&e.get("show_info")||e.get("show_map")&&!e.get("show_info")?u.createElement("div",{className:"columns sixteen"},u.createElement(m,{section:this,binding:this.getDefaultBinding()}),s.apply(this,[e])):null,!this.isEditMode()||e.get("show_map")&&e.get("show_info")?null:u.createElement("div",{className:"s-black-button-container"},e.get("show_map")?null:u.createElement("div",{className:"s-small-black-button",onClick:this._showMap},t("Editor|Add Map")),e.get("show_info")?null:u.createElement("div",{className:"s-small-black-button",onClick:this._showContactInfo},t("Editor|Add Contact Info"))))}var u=n(0),c=n(2),d=(n(449),n(3740)),p=n(3610),f=n(1241),m=n(3738),g=n(3739),h=(n(4),n(1245)),v=n(1244)
e.exports=function(){return u.createElement(g,o({className:"s-contact-section s-section"},this.getThemeFeature("disableBackgrounds")?{}:this.getBackgroundProps("background1")),this.isEditMode()?u.createElement("div",{className:"s-section-editor-wrapper"},this.getThemeFeature("disableBackgrounds")?null:u.createElement(d,this.getComponentProps("background1"))):null,!this.getThemeFeature("disableBackgrounds")&&this.hasBackgroundVideo("background1")?u.createElement(p,this.getBackgroundProps("background1")):null,l.apply(this,[]))}}).call(t,n(1))},3871:function(e,t,n){"use strict"
function o(e,t){var n=a.assign({},e,t)
e.hasOwnProperty("style")&&(n.style=a.defaults(n.style,e.style))
e.hasOwnProperty("className")&&t.hasOwnProperty("className")&&(n.className=t.className+" "+e.className)
return n}var i=n(0),a=n(2),r=(n(449),n(680),n(3738)),s=(n(1236),n(4),n(3762)),l=n(3740),u=n(3755),c=n(1272),d=n(3739),p=n(3610)
e.exports=function(){return i.createElement(d,o({className:"s-section s-store-section"},this.getThemeFeature("disableBackgrounds")?{}:this.getBackgroundProps("background1",null,!0)),this.isEditMode()?i.createElement("div",{className:"s-section-editor-wrapper"},this.getThemeFeature("disableBackgrounds")?null:i.createElement(l,a.assign({},{wasMinimal:!0},this.getComponentProps("background1"))),this._showLayoutButton()?i.createElement(s,a.assign({},{layoutOptions:this._getLayoutOptions(),updateLayout:this._updateLayout},this._getLayoutProps())):null,i.createElement(u,this.getComponentProps("ecommerce1"))):null,!this.getThemeFeature("disableBackgrounds")&&this.hasBackgroundVideo("background1")?i.createElement(p,this.getBackgroundProps("background1")):null,i.createElement("div",{className:"container"},i.createElement("div",{className:"columns sixteen"},i.createElement(r,{section:this,binding:this.getDefaultBinding()})),i.createElement("div",{className:"s-ecommerce-container"},i.createElement(c,a.assign({},{sbClass:this.sbUniformTextAlignment("text1 text2")},this.getComponentProps("ecommerce1"))),null)))}},3872:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
t.default=n(3747)
e.exports=t.default},3877:function(e,t,n){"use strict"
var o=n(0)
n(2)
e.exports=function(){return o.createElement("div",{className:"s-section-thumb s-title-thumb "+this._getBackgroundClass(),style:this._getBackgroundStyle()},o.createElement("div",{className:"s-section-thumb-content"},o.createElement("div",{className:"p100"},o.createElement("div",{className:"title-group"},this.props.content.components.text1.value?o.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:this.props.content.components.text1.value}}):null,this.props.content.components.text2.value?o.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:this.props.content.components.text2.value}}):null),o.createElement("div",{className:"arrow-image"}))))}},3901:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/base/sections/social_feed/thumbnail/cover.jpg"},4283:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/profile/thumbnail.png"},4284:function(e,t,n){"use strict"
function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){var n=new r.default(e).lumaCorrection(),o=null,i=!1
if(t){o=new r.default(t).lumaCorrection()
i=!0}else o=n
var a=n.toHex(),s=o.toHex(),u=l.default.generate({"title itemTitle":n,blogInfo:n,button:"\n      background: "+a+";\n      box-shadow: 0 2px 0 "+n.mult(.8).toHex()+";\n    ",buttonHover:"\n      background: "+n.mult(1.2).toHex()+";\n      box-shadow: 0 2px 0 "+n.toHex()+";\n    ",mobileActionButton:n,mobileActionButtonForApp:n,mobileNavbarButtons:n,overlay:o.mult(.5).fade(.35),socialLinks:n,ecommerceGroup:{main:n},donationGroup:{main:n}})+"\n    .s-section .s-title:after { background: "+a+"; }\n  "
i&&(u+="\n      .s-custom-colors #s-nav .container {\n        background: "+s+";\n      }\n    ")
return u}Object.defineProperty(t,"__esModule",{value:!0})
t.default=i
var a=n(138),r=o(a),s=n(3772),l=o(s)
e.exports=t.default},4285:function(e,t,n){"use strict"
function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var i=n(6),a=o(i),r=n(37),s=o(r),l=n(36),u=o(l),c=function(){var e=function(){(0,a.default)(".s-section .container.layers").remove();(0,a.default)(".s-section:not(.s-footer-section) .container").last().addClass("last")
for(var e=0;e<=2;e++){var n=(0,a.default)("<div></div>").addClass("container layers");(0,a.default)("li.slide .s-section").last().append(n)}return t()},t=function(){var e=(0,a.default)(".s-section .container.layers"),t=e.length
e.each(function(e,n){return(0,a.default)(n).css({left:t-e,bottom:4*-(t-e),width:"calc(100% - "+2*(t-e)+"px)",padding:0})})}
e()
window.edit_page.Event.subscribe("Slide.afterReorder",function(){return setTimeout(e,1e3)})
window.edit_page.Event.subscribe("Slide.afterAdd",function(){return setTimeout(e,1e3)})
var n=(0,a.default)("#s-nav"),o=(0,a.default)("#s-nav-placeholder .container"),i=n.outerHeight(),r=function(){return n.is(":visible")?n.offset().top:0},l=r(),c=function(){var e=(0,a.default)(document).scrollTop()
if(!s.default.TH.Util.isSmallScreen())if(e>l-8){if(!n.hasClass("fixed")){n.addClass("fixed")
o.show().css("height",i)
var t=(0,a.default)(".s-mobile-top-bar").height()
return n.css("top",t)}}else if(e<l&&n.hasClass("fixed")){n.removeClass("fixed")
o.hide()
return n.css("top",0)}}
if(n.is(":visible")){c();(0,a.default)(window).scroll(c)}var d=function(){i=n.outerHeight()
var e=(0,a.default)("a.section-anchor")
e.css("top",-i)
e.first().css("top",-i-r())
t();(0,a.default)(".s-section:not(.s-slider-section) .s-section-editor-wrapper > .s-component:not(.s-category-selector)").width((0,a.default)(".container").outerWidth());(0,a.default)("#s-nav").width((0,a.default)("#s-content").outerWidth())
var o=(0,a.default)(".container").offset().left-(0,a.default)("#s-content").offset().left;(0,a.default)(".premium-section-outline.left").css("left",o);(0,a.default)(".premium-section-outline.right").css("right",o);(0,a.default)(".premium-section-notice").css("left",o+10);(0,a.default)(".slider-container").each(function(){var e=(0,a.default)(this),t=(e.find(".prev-button").height()-e.find(".prev-button .arrow").height())/2
e.find(".prev-button .arrow").css("top",t)
e.find(".next-button .arrow").css("top",t)});(0,a.default)(".prev-button .arrow").each(function(){var e=(0,a.default)(this)
0===e.find(".entypo").length&&e.prepend((0,a.default)('<span class="entypo entypo-left-open-big"></span>'))});(0,a.default)(".next-button .arrow").each(function(){var e=(0,a.default)(this)
0===e.find(".entypo").length&&e.prepend((0,a.default)('<span class="entypo entypo-right-open-big"></span>'))})}
d();(0,a.default)(window).resize(d)
u.default.Event.subscribe("Editor.SideMenu.Opened",d)
u.default.Event.subscribe("Editor.SideMenu.Closed",d)
u.default.Event.subscribe("Section.changed",function(){return setTimeout(d,500)})
u.default.Event.subscribe("Section.changed",function(){return setTimeout(d,1e3)})
return s.default.TH.Decorator.enableParallax((0,a.default)("#s-header-bg"),!0)}
t.default=c
e.exports=t.default},4286:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/profile/sections/columns/thumbnail/cover.jpg"},4287:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/profile/sections/contact_form/thumbnail/cover.jpg"},4288:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/profile/sections/cta/thumbnail/cover.jpg"},4289:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/profile/sections/ecommerce/thumbnail/cover.png"},4290:function(e,t,n){"use strict"
var o=n(0),i=n(2),a=(n(449),n(3740),n(3610),n(3756)),r=n(3790),s=n(3738)
n(3753)
e.exports=function(){return o.createElement("div",{className:"s-gallery-section s-section"},null,"fullWidth"!=this._getLayoutKey()?o.createElement("div",{className:"container"},o.createElement("div",{className:"columns sixteen"},o.createElement(s,{section:this,binding:this.getDefaultBinding()})),o.createElement("div",{className:"columns sixteen",style:{transition:"none"}},"vertical"!=this._getLayoutKey()?o.createElement(a,i.assign({},{layout:this._getLayoutKey(),isArranging:this.isState("editor"),toggleEditor:this.toggleEditor},this.getComponentProps("gallery1"))):null,"vertical"==this._getLayoutKey()?o.createElement(r,i.assign({},{layout:this._getLayoutKey(),isArranging:this.isState("editor"),toggleEditor:this.toggleEditor},this.getComponentProps("gallery1"))):null)):null,"fullWidth"==this._getLayoutKey()?o.createElement("div",{className:"full-width-gallery"},o.createElement("div",{className:"container"},o.createElement("div",{className:"columns sixteen"},o.createElement(s,{section:this,binding:this.getDefaultBinding()})),o.createElement(a,i.assign({},{layout:this._getLayoutKey(),isArranging:this.isState("editor"),toggleEditor:this.toggleEditor},this.getComponentProps("gallery1"))))):null)}},4291:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/profile/sections/gallery/thumbnail/cover.jpg"},4292:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/profile/sections/html/thumbnail/cover.jpg"},4293:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/profile/sections/icons/thumbnail/cover.jpg"},4294:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/profile/sections/media/thumbnail/cover.jpg"},4295:function(e,t,n){"use strict"
function o(e,t){var n=c.assign({},e,t)
e.hasOwnProperty("style")&&(n.style=c.defaults(n.style,e.style))
e.hasOwnProperty("className")&&t.hasOwnProperty("className")&&(n.className=t.className+" "+e.className)
return n}function i(e,t,n){return u.createElement("li",c.assign({},{key:n},this._getNavItemProps(t)),u.createElement("a",{className:"s-font-body s-nav-item",href:this.getSectionHash(n)},t.name))}function a(e,t,n,o){return u.createElement("li",{},u.createElement("a",{className:c.keys(c.pick({"s-nav-item":!0,selected:o.selected},c.identity)).join(" "),target:o.newTarget?"_blank":"_self",href:o.path},u.createElement("span",{className:"s-font-body"},o.title)))}function r(e,t,n){return u.createElement("li",{key:n},t.items?u.createElement("div",{className:c.keys(c.pick({"s-nav-item":!0,selected:t.selected,"s-nav-dropdown":!0},c.identity)).join(" "),href:t.path},u.createElement("a",{className:"s-nav-item "+c.keys(c.pick({selected:t.selected},c.identity)).join(" ")},u.createElement("span",{className:"s-font-body"},t.title+" ","\n                ",u.createElement("i",{className:"fa fa-angle-down"}))),u.createElement.apply(this,["ul",{className:c.keys(c.pick({"s-nav-item":!0,selected:t.selected},c.identity)).join(" ")},c.map(t.items,a.bind(this,e,t,n))])):null,t.items?null:u.createElement("a",{className:c.keys(c.pick({"s-nav-item":!0,"s-font-body":!0,selected:t.selected},c.identity)).join(" "),href:t.path,target:t.newTarget?"_blank":"_self"},t.title))}function s(e,t,n){return u.createElement(f,c.assign({},{key:n,updateTimeStamp:this._getTimestampForLinks()},t.getIn(["components","link"]).toObject()))}function l(){var e=h.Link
return u.createElement("div",{className:"navigator s-navbar-section",id:"s-header"},u.createElement("div",o({className:"strikingly-fixed",id:"s-header-bg"},this.getBackgroundProps("background1")),this.hasBackgroundVideo("background1")?u.createElement(g,this.getBackgroundProps("background1")):null),this.isEditMode()?u.createElement("div",{id:"s-header-bg-editor",skip:"true"},u.createElement(m,this.getComponentProps("background1"))):null,u.createElement("div",o({className:"container",id:"s-header-banner","no-logo":"!image1.hasContentOrIsEditMode()"},this.getBackgroundProps("background2")),this.hasBackgroundVideo("background2")?u.createElement(g,this.getBackgroundProps("background2")):null,this.isEditMode()?u.createElement(m,c.assign({},{skip:"true"},this.getComponentProps("background2"))):null,this.sbHasContent("image1")?u.createElement("div",{className:c.keys(c.pick({"logo ib":!0,editor:this.isEditMode(),transparent:!this.sbHasContent("image1")},c.identity)).join(" ")},u.createElement(p,c.assign({},{size:"200x200#"},this.getReduxComponentProps("image1")))):null,u.createElement("h1",{className:"header-title"},u.createElement(d,c.assign({},{textType:"title"},this.getComponentProps("text1")))),u.createElement("h3",{className:"header-subtitle"},u.createElement(d,c.assign({},{textType:"heading"},this.getComponentProps("text2"))))),this.props.showNav?null:u.createElement("div",{id:"s-nav-hidden"},u.createElement("div",{className:"container"})),this.props.showNav?u.createElement("div",{id:"s-nav-placeholder"},u.createElement("div",{className:"container"})):null,this.props.showNav?u.createElement("div",{className:"strikingly-fixed",id:"s-nav"},u.createElement("div",{className:"container"},u.createElement.apply(this,["ul",{className:"s-nav"},this.props.isMultiPage?null:c.map(this.props.navbarItemData,i.bind(this,e)),this.props.isMultiPage?c.map(this.props.navbarItemData,r.bind(this,e)):null,c.map(this.getBinding("submenu").get().toArray(),s.bind(this,e)),u.createElement("div",{id:"loginContainer"}),u.createElement("li",{id:"s-ecommerce-nav-shopping-cart-wrapper",className:"s-ecommerce-nav-shopping-cart-wrapper hidden"}),this.props.enableSiteSearch?u.createElement("li",{className:"nav-item",onClick:this.props.onClickSiteSearch},u.createElement(e,{className:"s-font-body s-nav-item site-search "+c.keys(c.pick({selected:this.props.selectSiteSearchTab},c.identity)).join(" "),to:this.props.siteSearchUrl},u.createElement("span",{className:"fa fa-search"}))):null]))):null)}var u=n(0),c=n(2),d=n(449),p=(n(1269),n(450)),f=n(3796),m=n(3740),g=n(3610),h=(n(3739),n(34))
e.exports=function(){return l.apply(this,[])}},4296:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/profile/sections/rows/thumbnail/cover.jpg"},4297:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/profile/sections/signup_form/thumbnail/cover.jpg"},4298:function(e,t,n){"use strict"
function o(e,t){var n=c.assign({},e,t)
e.hasOwnProperty("style")&&(n.style=c.defaults(n.style,e.style))
e.hasOwnProperty("className")&&t.hasOwnProperty("className")&&(n.className=t.className+" "+e.className)
return n}function i(e,t,n,o){var e=this._isBannerSection()
return u.createElement("div",{className:"s-section-editor-wrapper",skip:"true"},e?null:u.createElement(m,this.getComponentProps("background1",t.sub(o))),e?u.createElement(h,c.assign({},{warnningInfo:this._imageRatioWarnning(o),setStateFunc:this.setStateFunc},this.getComponentProps("background1",t.sub(o)))):null,"\n        ",!e&&this._renderSliderLayoutBtn(o),"\n      ")}function a(e,t,n,a){var r=this._getSliderLayout(a)
return u.createElement(y,o({className:"item "+r,key:a},this.getSliderBackgroundProps("background1",t.sub(a),r)),this.isEditMode()?i.apply(this,[e,t,n,a,r]):null,this.hasBackgroundVideo("background1",t.sub(a))?u.createElement(g,this.getBackgroundProps("background1",t.sub(a))):null,"noForeground"!==r?u.createElement("div",{className:"ib inner s-rva "+r},"noImage"!=r?u.createElement("div",{className:c.keys(c.pick({"eight columns media-outer s-rva-media":!0,"alpha left":"left"==r,"omega right":"right"==r,"offset-four right":!this.sbAnyHasContent("text1 text2 button1",{parentBinding:t.sub(a)})},c.identity)).join(" ")},u.createElement("div",{className:c.keys(c.pick({"slider-offset-right":"right"==r&&this.sbAnyHasContent("text1 text2 button1",{parentBinding:t.sub(a)}),"slider-offset-left":"left"==r&&this.sbAnyHasContent("text1 text2 button1",{parentBinding:t.sub(a)})},c.identity)).join(" ")},u.createElement("div",{className:"media-wrapper"},u.createElement(p,c.assign({},{size:"medium"},this.getReduxComponentProps("media1",t.sub(a))))))):null,this.sbAnyHasContent("text1 text2 button1",{parentBinding:t.sub(a)})?u.createElement("div",{className:c.keys(c.pick({"columns valign slider-desc s-rva-text":!0,eight:this.sbHasContent("media1",{parentBinding:t.sub(a)}),sixteen:"noImage"==r||!this.sbHasContent("media1",{parentBinding:t.sub(a)}),"alpha left":"right"==r&&this.sbHasContent("media1",{parentBinding:t.sub(a)}),"omega right":"left"==r&&this.sbHasContent("media1",{parentBinding:t.sub(a)})},c.identity)).join(" ")},u.createElement("div",{className:c.keys(c.pick({"slider-offset-left":"left"!=r||!this.sbHasContent("media1",{parentBinding:t.sub(a)}),"slider-offset-right":"right"!=r||!this.sbHasContent("media1",{parentBinding:t.sub(a)})},c.identity)).join(" ")},u.createElement("div",{className:"s-title-group"},u.createElement("div",{className:"s-title "+this.sbUniformTextAlignment("text1",{parentBinding:t.sub(a)})},u.createElement(d,c.assign({},{tagName:"h2",textType:"title"},this.getComponentProps("text1",t.sub(a))))),u.createElement("div",{className:"s-subtitle"},u.createElement(d,c.assign({},{tagName:"h4",textType:"heading"},this.getComponentProps("text2",t.sub(a)))))),u.createElement("div",{className:"cta-button-wrapper "+this.sbUniformTextAlignment("text1 text2",{parentBinding:t.sub(a)})},u.createElement(f,this.getComponentProps("button1",t.sub(a)))))):null):null)}function r(e,t,n,o){return a.apply(this,[e,t,n,o])}function s(e){var t=this.getRepeatableBinding("slider1")
return u.createElement.apply(this,[v,c.assign({},{className:"sixteen columns",uiOutside:!0,index:this.props.index,getSliderLayouts:this._getSliderLayoutArr,isBanner:e},this.getComponentProps("slider1")),c.map(t.get().toArray(),r.bind(this,e,t))])}function l(){var e=this._isBannerSection()
return u.createElement("div",{className:"container s-section s-slider-section"},s.apply(this,[e]))}var u=n(0),c=n(2),d=n(449),p=n(1237),f=n(1269),m=n(3740),g=n(3610),h=(n(3738),n(3620)),v=n(3617),y=n(3739)
e.exports=function(){return l.apply(this,[])}},4299:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/profile/sections/slider/thumbnail/cover.jpg"},4300:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/profile/sections/text/thumbnail/cover.png"},4301:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/profile/sections/title/thumbnail/cover.png"}})
