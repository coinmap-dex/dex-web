(window.webpackJsonp=window.webpackJsonp||[]).push([["simple-dialog"],{"+EG+":function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i}));var o=n("q1tI");class r extends o.Component{shouldComponentUpdate(){return!1}render(){return o.createElement("div",{style:{position:"fixed",zIndex:150,left:0,top:0},ref:this.props.reference})}}const i=o.createContext(null)},"/KDZ":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n("q1tI");class r extends o.PureComponent{constructor(e){super(e),this._handleChange=()=>{this.forceUpdate()},this.state={query:window.matchMedia(this.props.rule)}}componentDidMount(){this._subscribe(this.state.query)}componentDidUpdate(e,t){this.state.query!==t.query&&(this._unsubscribe(t.query),this._subscribe(this.state.query))}componentWillUnmount(){this._unsubscribe(this.state.query)}render(){return this.props.children(this.state.query.matches)}static getDerivedStateFromProps(e,t){return e.rule!==t.query.media?{query:window.matchMedia(e.rule)}:null}_subscribe(e){e.addListener(this._handleChange)}_unsubscribe(e){e.removeListener(this._handleChange)}}},"8Rai":function(e,t,n){"use strict";var o=n("q1tI");const r=function(e,{bubbles:t=!1,cancelable:n=!1,detail:o=null}={}){try{return new window.CustomEvent(e,{bubbles:t,cancelable:n,detail:o})}catch(r){const i=document.createEvent("CustomEvent");return i.initCustomEvent(e,t,n,o),i}};var i=n("R5JZ");function s(e){const{click:t,mouseDown:n,touchEnd:s,touchStart:c,handler:u,reference:a,ownerDocument:d=document}=e,l=Object(o.useRef)(null),h=Object(o.useRef)(new r("timestamp").timeStamp);return Object(o.useLayoutEffect)(()=>{const e={click:t,mouseDown:n,touchEnd:s,touchStart:c},o=a?a.current:l.current;return Object(i.a)(h.current,o,u,d,e)},[t,n,s,c,u]),a||l}n.d(t,"a",(function(){return s}))},ASyk:function(e,t,n){e.exports={"tablet-normal-breakpoint":"screen and (max-width: 768px)","small-height-breakpoint":"screen and (max-height: 360px)","tablet-small-breakpoint":"screen and (max-width: 428px)"}},AiMB:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return a}));var o=n("q1tI"),r=n("i8i4"),i=n("e3/o"),s=n("jAh7"),c=n("+EG+");class u extends o.PureComponent{constructor(){super(...arguments),this._uuid=Object(i.guid)()}componentWillUnmount(){this._manager().removeWindow(this._uuid)}render(){const e=this._manager().ensureWindow(this._uuid,this.props.layerOptions);return e.style.top=this.props.top||"",e.style.bottom=this.props.bottom||"",e.style.left=this.props.left||"",e.style.right=this.props.right||"",e.style.pointerEvents=this.props.pointerEvents||"",r.createPortal(o.createElement(a.Provider,{value:this},this.props.children),e)}moveToTop(){this._manager().moveToTop(this._uuid)}_manager(){return null===this.context?Object(s.getRootOverlapManager)():this.context}}u.contextType=c.b;const a=o.createContext(null)},Iivm:function(e,t,n){"use strict";var o=n("mrSG"),r=n("q1tI");const i=r.forwardRef((e,t)=>{const{icon:n=""}=e,i=Object(o.a)(e,["icon"])
;return r.createElement("span",Object.assign({},i,{ref:t,dangerouslySetInnerHTML:{__html:n}}))});n.d(t,"a",(function(){return i}))},R5JZ:function(e,t,n){"use strict";function o(e,t,n,o,r){function i(r){if(e>r.timeStamp)return;const i=r.target;void 0!==n&&null!==t&&null!==i&&i.ownerDocument===o&&(t.contains(i)||n(r))}return r.click&&o.addEventListener("click",i,!1),r.mouseDown&&o.addEventListener("mousedown",i,!1),r.touchEnd&&o.addEventListener("touchend",i,!1),r.touchStart&&o.addEventListener("touchstart",i,!1),()=>{o.removeEventListener("click",i,!1),o.removeEventListener("mousedown",i,!1),o.removeEventListener("touchend",i,!1),o.removeEventListener("touchstart",i,!1)}}n.d(t,"a",(function(){return o}))},ijHL:function(e,t,n){"use strict";function o(e){return i(e,s)}function r(e){return i(e,c)}function i(e,t){const n=Object.entries(e).filter(t),o={};for(const[r,i]of n)o[r]=i;return o}function s(e){const[t,n]=e;return 0===t.indexOf("data-")&&"string"==typeof n}function c(e){return 0===e[0].indexOf("aria-")}n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return r}))},jAh7:function(e,t,n){"use strict";n.r(t),n.d(t,"OverlapManager",(function(){return i})),n.d(t,"getRootOverlapManager",(function(){return c}));var o=n("Eyy1");class r{constructor(){this._storage=[]}add(e){this._storage.push(e)}remove(e){this._storage=this._storage.filter(t=>e!==t)}has(e){return this._storage.includes(e)}getItems(){return this._storage}}class i{constructor(e=document){this._storage=new r,this._windows=new Map,this._index=0,this._document=e,this._container=e.createDocumentFragment()}setContainer(e){const t=this._container,n=null===e?this._document.createDocumentFragment():e;!function(e,t){Array.from(e.childNodes).forEach(e=>{e.nodeType===Node.ELEMENT_NODE&&t.appendChild(e)})}(t,n),this._container=n}registerWindow(e){this._storage.has(e)||this._storage.add(e)}ensureWindow(e,t={position:"fixed",direction:"normal"}){const n=this._windows.get(e);if(void 0!==n)return n;this.registerWindow(e);const o=this._document.createElement("div");if(o.style.position=t.position,o.style.zIndex=this._index.toString(),o.dataset.id=e,void 0!==t.index){const e=this._container.childNodes.length;if(t.index>=e)this._container.appendChild(o);else if(t.index<=0)this._container.insertBefore(o,this._container.firstChild);else{const e=this._container.childNodes[t.index];this._container.insertBefore(o,e)}}else"reverse"===t.direction?this._container.insertBefore(o,this._container.firstChild):this._container.appendChild(o);return this._windows.set(e,o),++this._index,o}unregisterWindow(e){this._storage.remove(e);const t=this._windows.get(e);void 0!==t&&(null!==t.parentElement&&t.parentElement.removeChild(t),this._windows.delete(e))}getZindex(e){const t=this.ensureWindow(e);return parseInt(t.style.zIndex||"0")}moveToTop(e){if(this.getZindex(e)!==this._index){this.ensureWindow(e).style.zIndex=(++this._index).toString()}}removeWindow(e){this.unregisterWindow(e)}}const s=new WeakMap;function c(e=document){const t=e.getElementById("overlap-manager-root")
;if(null!==t)return Object(o.ensureDefined)(s.get(t));{const t=new i(e),n=function(e){const t=e.createElement("div");return t.style.position="absolute",t.style.zIndex=150..toString(),t.style.top="0px",t.style.left="0px",t.id="overlap-manager-root",t}(e);return s.set(n,t),t.setContainer(n),e.body.appendChild(n),t}}},uhCe:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n("ASyk");const r={SmallHeight:o["small-height-breakpoint"],TabletSmall:o["tablet-small-breakpoint"],TabletNormal:o["tablet-normal-breakpoint"]}},"x0D+":function(e,t,n){var o,r,i;r=[t],void 0===(i="function"==typeof(o=function(e){"use strict";function t(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(e,"__esModule",{value:!0});var n=!1;if("undefined"!=typeof window){var o={get passive(){n=!0}};window.addEventListener("testPassive",null,o),window.removeEventListener("testPassive",null,o)}var r="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&/iP(ad|hone|od)/.test(window.navigator.platform),i=[],s=!1,c=-1,u=void 0,a=void 0,d=function(e){return i.some((function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))}))},l=function(e){var t=e||window.event;return!!d(t.target)||1<t.touches.length||(t.preventDefault&&t.preventDefault(),!1)},h=function(){setTimeout((function(){void 0!==a&&(document.body.style.paddingRight=a,a=void 0),void 0!==u&&(document.body.style.overflow=u,u=void 0)}))};e.disableBodyScroll=function(e,o){if(r){if(!e)return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");if(e&&!i.some((function(t){return t.targetElement===e}))){var h={targetElement:e,options:o||{}};i=[].concat(t(i),[h]),e.ontouchstart=function(e){1===e.targetTouches.length&&(c=e.targetTouches[0].clientY)},e.ontouchmove=function(t){var n,o,r,i;1===t.targetTouches.length&&(o=e,i=(n=t).targetTouches[0].clientY-c,!d(n.target)&&(o&&0===o.scrollTop&&0<i||(r=o)&&r.scrollHeight-r.scrollTop<=r.clientHeight&&i<0?l(n):n.stopPropagation()))},s||(document.addEventListener("touchmove",l,n?{passive:!1}:void 0),s=!0)}}else{p=o,setTimeout((function(){if(void 0===a){var e=!!p&&!0===p.reserveScrollBarGap,t=window.innerWidth-document.documentElement.clientWidth;e&&0<t&&(a=document.body.style.paddingRight,document.body.style.paddingRight=t+"px")}void 0===u&&(u=document.body.style.overflow,document.body.style.overflow="hidden")}));var m={targetElement:e,options:o||{}};i=[].concat(t(i),[m])}var p},e.clearAllBodyScrollLocks=function(){r?(i.forEach((function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null})),s&&(document.removeEventListener("touchmove",l,n?{passive:!1}:void 0),s=!1),i=[],c=-1):(h(),i=[])},e.enableBodyScroll=function(e){if(r){if(!e)return void console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");e.ontouchstart=null,e.ontouchmove=null,i=i.filter((function(t){
return t.targetElement!==e})),s&&0===i.length&&(document.removeEventListener("touchmove",l,n?{passive:!1}:void 0),s=!1)}else 1===i.length&&i[0].targetElement===e?(h(),i=[]):i=i.filter((function(t){return t.targetElement!==e}))}})?o.apply(t,r):o)||(e.exports=i)},zztK:function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" width="17" height="17" fill="none"><path stroke="currentColor" stroke-width="1.2" d="M1 1l15 15m0-15L1 16"/></svg>'}}]);