(window.webpackJsonp=window.webpackJsonp||[]).push([["global-toasts"],{NDyO:function(e,t,s){"use strict";s.r(t),s.d(t,"globalToasts",(function(){return g})),s.d(t,"showToast",(function(){return y}));var a=s("mrSG"),o=s("q1tI"),r=s.n(o),n=s("TSYQ"),i=s("YIzy"),c=s("BI5g"),u=s("ncbA");const d=`screen and (min-width: ${c.b.phone}px)`;function h(e){const{suggestedLayout:t,children:s}=e;return r.a.createElement("div",{className:n(u["toast-wrapper"],"compact"===t&&u.compact)},s)}const g=new class{constructor(){this._mediaQuery=window.matchMedia(d),this._handleMediaQueryChange=()=>{this._toastsLayer.update({suggestedLayout:this._getSuggestedLayout()})},this._toastsLayer=new i.a(this._getSuggestedLayout()),this._mediaQuery.addListener(this._handleMediaQueryChange)}destroy(){this._toastsLayer.destroy(),this._mediaQuery.removeListener(this._handleMediaQueryChange)}showCustomToast(e){const{render:t}=e,s=Object(a.a)(e,["render"]);var o;return this._toastsLayer.showToast(Object.assign({render:(o=t,e=>r.a.createElement(h,{suggestedLayout:e.suggestedLayout,children:o(e)}))},s)).remove}forceRender(){this._toastsLayer.forceRender()}merge(e){this._toastsLayer.merge(e)}split(e){this._toastsLayer.split(e)}_getSuggestedLayout(){return this._mediaQuery.matches?"loose":"compact"}};function y(e){return g.showCustomToast(e)}},ncbA:function(e,t,s){e.exports={"toast-wrapper":"toast-wrapper-10sMgQBn",compact:"compact-10sMgQBn"}}}]);