(window.webpackJsonp=window.webpackJsonp||[]).push([["symbol-details"],{"24R9":function(e,t,a){"use strict";function r(e){return decodeURIComponent(e.replace(/\+/g," ")).replace(/<\/?[^>]+(>|$)/g,"")}function n(e){const t=/([^&=]+)=?([^&]*)/g,a={};if(!e)return a;let n=t.exec(e);for(;n;)a[r(n[1])]=r(n[2]),n=t.exec(e);return a}function s(){return n(window.location.search.substring(1))}function i(e){const t=[];for(const a in e)e.hasOwnProperty(a)&&null!=e[a]&&t.push({key:a,pair:encodeURIComponent(a)+"="+encodeURIComponent(e[a])});return t.sort((e,t)=>e.key>t.key?1:e.key<t.key?-1:0).map(e=>e.pair).join("&")}a.d(t,"b",(function(){return s})),a.d(t,"a",(function(){return i}))},FPYy:function(e,t,a){e.exports={container:"container-3PT2D-PK",price:"price-3PT2D-PK",info:"info-3PT2D-PK",mode:"mode-3PT2D-PK",currency:"currency-3PT2D-PK",change:"change-3PT2D-PK",priceWrapper:"priceWrapper-3PT2D-PK"}},Iivm:function(e,t,a){"use strict";var r=a("mrSG"),n=a("q1tI");const s=n.forwardRef((e,t)=>{const{icon:a=""}=e,s=Object(r.a)(e,["icon"]);return n.createElement("span",Object.assign({},s,{ref:t,dangerouslySetInnerHTML:{__html:a}}))});a.d(t,"a",(function(){return s}))},"J/15":function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><circle fill="#9598A1" cx="9" cy="9" r="4"/></svg>'},M8iM:function(e,t,a){e.exports={status:"status-1wcMUg0D",open:"open-1wcMUg0D",dot:"dot-1wcMUg0D",text:"text-1wcMUg0D",close:"close-1wcMUg0D",textWithIcon:"textWithIcon-1wcMUg0D",lastPriceTimeWithIcon:"lastPriceTimeWithIcon-1wcMUg0D",lastPrice:"lastPrice-1wcMUg0D",plus:"plus-1wcMUg0D",change:"change-1wcMUg0D",changePercent:"changePercent-1wcMUg0D",minus:"minus-1wcMUg0D",price:"price-1wcMUg0D",extra:"extra-1wcMUg0D",pre:"pre-1wcMUg0D",label:"label-1wcMUg0D",post:"post-1wcMUg0D",icon:"icon-1wcMUg0D"}},MGjX:function(e,t,a){e.exports={container:"container-1c6h-6Rx",header:"header-1c6h-6Rx",title:"title-1c6h-6Rx",price:"price-1c6h-6Rx",range:"range-1c6h-6Rx",bar:"bar-1c6h-6Rx",low:"low-1c6h-6Rx",roundedLeft:"roundedLeft-1c6h-6Rx",roundedRight:"roundedRight-1c6h-6Rx",arrowContainer:"arrowContainer-1c6h-6Rx",arrow:"arrow-1c6h-6Rx",extraMargin:"extraMargin-1c6h-6Rx"}},SHLv:function(e,t,a){e.exports={container:"container-2ahQmZbQ",logo:"logo-2ahQmZbQ",title:"title-2ahQmZbQ",daysCounter:"daysCounter-2ahQmZbQ",daysCounterSoon:"daysCounterSoon-2ahQmZbQ"}},SLyS:function(e,t,a){e.exports={highlight:"highlight-2GhssDiZ",growing:"growing-2GhssDiZ",falling:"falling-2GhssDiZ"}},TuZa:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),n=a.n(r),s=a("TSYQ"),i=a.n(s),o=a("Kxc7"),c=a("YFKU"),l=a("Eyy1"),d=a("XAms"),u=a("GH0z"),m=a("cxEv");var h=a("SLyS");function p(e){const{value:t,formatter:a,className:s}=e,o=Object(r.useRef)(null),c=Object(m.a)(t),l=function(e){const t=Object(m.a)(e),a=Object(r.useRef)(null);return Object(r.useEffect)(()=>{t!==e&&(a.current=t)},[e]),a.current}(t),d=Object(r.useCallback)(()=>{null!==o.current&&(clearTimeout(o.current),o.current=null)
},[]),[u,p]=Object(r.useState)(s),[f,g]=Object(r.useMemo)(()=>{if(void 0===t||!a)return["",""];if(null==l)return[a.format(t),""];const e=a.format(l),r=a.format(t),n=Math.min(e.length,r.length);let s=0;for(;s<n&&e.charAt(s)===r.charAt(s);)s++;return[r.slice(0,s),r.slice(s)]},[t,l,a]);Object(r.useEffect)(()=>d,[]),Object(r.useEffect)(()=>{if(void 0===t||null==c)return void p(s);c!==t&&(d(),o.current=setTimeout(()=>p(s),500),p(i()(s,t>c&&h.growing,t<c&&h.falling)))},[t,c,s]);const b=l||c;return n.a.createElement("span",{className:i()(h.highlight,u)},f,!!g.length&&n.a.createElement("span",{className:i()(h.highlight,t&&b&&t>b&&h.growing,t&&b&&t<b&&h.falling)},(null==a?void 0:a.hasForexAdditionalPrecision())?n.a.createElement(n.a.Fragment,null,g.slice(0,g.length-1),n.a.createElement("sup",null,g.slice(g.length-1))):g))}function f(e){return e?i()(h.highlight,e>0?h.growing:h.falling):""}var g=a("Wc1E"),b=a("FPYy");const _=new u.PercentageFormatter;function v(e){const{className:t,symbol:a,updateMode:s,currencyCode:o,lastPrice:c,change:l,changePercent:d,priceFormatter:u}=e,m=Object(r.useRef)(null),h=Object(r.useRef)(null);return Object(r.useEffect)(()=>(null!==m.current&&(h.current=new g.a({classSuffix:"--for-details",el:m.current,short:!0,symbol:a,manualUpdate:!0})),()=>{h.current=null}),[]),Object(r.useEffect)(()=>{const e=h.current;null!==e&&(void 0===s?e.hide():(e.show(),e.update({values:{update_mode:s}})))},[s]),n.a.createElement("div",{className:i()(b.container,t)},n.a.createElement("span",{className:b.priceWrapper},n.a.createElement(p,{key:a,className:b.price,value:c,formatter:u}),n.a.createElement("span",{className:b.info},n.a.createElement("span",{className:b.mode,ref:m}),n.a.createElement("span",{className:b.currency},o))),n.a.createElement("span",null,n.a.createElement("span",{className:i()(b.change,f(l))},void 0!==l&&(null==u?void 0:u.format(l))),n.a.createElement("span",{className:i()(b.change,f(d))},void 0!==d&&`(${_.format(d)})`)))}var w=a("Iivm"),y=a("ayGZ"),x=a("J/15"),M=a("plrO"),P=a("M8iM");const E=new u.PercentageFormatter;function N(e){const{className:t,currentSession:a,lastPriceTime:r,extraHoursPrice:s,extraHoursChange:o=0,extraHoursChangePercent:l,priceFormatter:d,dateFormatter:u}=e,m="market"===a,h="pre_market"===a,p=h||"post_market"===a;return n.a.createElement("div",{className:t},n.a.createElement("div",{className:i()(P.status,m?P.open:P.close)},!p&&n.a.createElement("span",{className:P.dot}),n.a.createElement("span",{className:i()(P.text,!p&&P.textWithIcon)},p?Object(c.t)("At close"):j(a)),r&&!m&&n.a.createElement("span",{className:i()(P.text,!p&&P.lastPriceTimeWithIcon)},"(",u.format(r),")")),p&&n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:i()(P.lastPrice,o<0&&P.minus,o>0&&P.plus)},n.a.createElement("span",{className:P.price},s&&(null==d?void 0:d.format(s))),n.a.createElement("span",null,n.a.createElement("span",{className:P.change},null==d?void 0:d.format(o)),void 0!==l&&n.a.createElement("span",{className:P.changePercent},"(",E.format(l),")"))),n.a.createElement("div",{
className:i()(P.extra,h?P.pre:P.post)},n.a.createElement(w.a,{className:P.icon,icon:O(a)}),n.a.createElement("span",{className:P.label},j(a)))))}function O(e){switch(e){case"pre_market":return y;case"holiday":case"out_of_session":return x;case"post_market":return M;default:return}}function j(e){switch(e){case"market":return Object(c.t)("Market Open");case"out_of_session":return Object(c.t)("Market Closed");case"pre_market":return Object(c.t)("Pre Market");case"post_market":return Object(c.t)("Post Market");case"holiday":return Object(c.t)("Holiday");default:return}}a("JWMC");var S=a("+GxX"),k=a("s0So");function F(e){return n.a.createElement("div",{className:i()(k.dotWrap,e.className)},n.a.createElement("div",{className:k.dot}))}function T(e){const{description:t,exchange:a,additionalMain:r,additionalSecondary:s,invalid:i,symbolPagePath:o}=e;return i?n.a.createElement("div",null,n.a.createElement("span",{className:k.invalid},t)):n.a.createElement(n.a.Fragment,null,n.a.createElement("div",null,n.a.createElement("span",{className:k.main},t,a&&n.a.createElement(F,{className:k.smallMargin}),n.a.createElement("span",{"data-name":"details-exchange"},a))),(r||s)&&n.a.createElement("div",null,n.a.createElement("span",{className:k.additional},r&&n.a.createElement("span",{className:k.additionalText,"data-name":"details-additional-main"},r),s&&n.a.createElement(n.a.Fragment,null,n.a.createElement(F,null),n.a.createElement("span",{className:k.additionalText,"data-name":"details-additional-secondary"},s)))))}const D=new Set(["stock","fund","dr","right","warrant"]);function C(e){const{price:t,priceFormatter:a,size:r,className:s}=e;if(a&&t){const e=a.hasForexAdditionalPrecision(),i=a.format(t);if(e){const e=i.toString();return n.a.createElement("span",{className:s},e.slice(0,e.length-1),n.a.createElement("sup",null,e.slice(e.length-1)),!!r&&n.a.createElement("span",null,"×"+r))}return n.a.createElement("span",{className:s},i,!!r&&n.a.createElement("span",null,"×"+r))}return n.a.createElement("span",{className:s},t)}var R=a("j4pv");function I(e){const{className:t,priceFormatter:a,bid:r,ask:s,bidSize:o,askSize:c}=e;return n.a.createElement("div",{className:i()(R.container,t)},n.a.createElement(C,{price:r,priceFormatter:a,size:o,className:R.bid}),n.a.createElement(C,{price:s,priceFormatter:a,size:c,className:R.ask}))}var W=a("Ialn"),L=a("VFf6"),z=a("MGjX");function U(e){const{lowPrice:t,highPrice:a,priceFormatter:r,title:s,open:o,close:c,lastPrice:l,dataName:d}=e,u=a-t,m=(Math.min(c,o)-t)/u*100,h=(Math.max(c,o)-t)/u*100,p=c<o,f=m<=1,g=h>=99,b=100*(l-t)/u,_={width:h-m+"%"},v={};Object(W.isRtl)()?(_.right=m+"%",v.right=b+"%"):(_.left=m+"%",v.left=b+"%");const w=i()(z.bar,p&&z.low,f&&z.roundedLeft,g&&z.roundedRight),y=i()(z.arrow,f&&z.extraMargin);return n.a.createElement("div",{className:z.container,"data-name":d},n.a.createElement("div",{className:z.header},t&&n.a.createElement(C,{price:t,priceFormatter:r,className:z.price}),n.a.createElement("span",{className:z.title},s),a&&n.a.createElement(C,{price:a,priceFormatter:r,className:z.price
})),n.a.createElement("div",{className:z.range},n.a.createElement("div",{className:w,style:_})),n.a.createElement("div",{className:z.arrowContainer},n.a.createElement("div",{className:y,style:v,dangerouslySetInnerHTML:{__html:L}})))}function A(e){const{openPrice:t,lastPrice:a,lowPrice:r,highPrice:s,price52WeekHigh:i,price52WeekLow:o,priceFormatter:l}=e,d=!(!t||!a)&&t>a,u=d?s:r,m=d?r:s,h=s&&i?Math.max(s,i):i,p=r&&o?Math.min(r,o):o;return n.a.createElement(U,{dataName:"details-52wk-range",lowPrice:p,highPrice:h,priceFormatter:l,title:Object(c.t)("52wk Range"),open:u,close:m,lastPrice:a})}function H(e){const{className:t,priceFormatter:a}=e;return n.a.createElement("div",{className:t},B(e)&&n.a.createElement(U,{dataName:"details-days-range",title:Object(c.t)("Day's Range"),lowPrice:e.lowPrice,highPrice:e.highPrice,priceFormatter:a,open:e.openPrice,close:e.lastPrice,lastPrice:e.lastPrice}),q(e)&&n.a.createElement(A,{openPrice:e.openPrice,lastPrice:e.lastPrice,lowPrice:e.lowPrice,highPrice:e.highPrice,price52WeekHigh:e.price52WeekHigh,price52WeekLow:e.price52WeekLow,priceFormatter:a}))}function q(e){const{openPrice:t,lastPrice:a,lowPrice:r,highPrice:n,price52WeekHigh:s,price52WeekLow:i}=e;return void 0!==t&&void 0!==a&&void 0!==r&&void 0!==n&&void 0!==i&&void 0!==s}function B(e){const{openPrice:t,lastPrice:a,lowPrice:r,highPrice:n}=e;return void 0!==t&&void 0!==a&&void 0!==r&&void 0!==n}var V=a("kcTO"),Q=a("/+9u"),K=a("gQ5K"),J=a("4kQX");const G={dateFormat:"MMM dd",timeFormat:"%h:%m"};class Y{constructor(e={}){this._dateFormatter=null,this._timeFormatter=null,this._options=Object.assign({},G,e),""!==this._options.dateFormat&&(this._dateFormatter=new K.DateFormatter(this._options.dateFormat)),this._options.timeFormat.length>0&&(this._timeFormatter=new J.TimeFormatter(this._options.timeFormat)),this._timezone=this._options.timezone}format(e){void 0===this._tzOffset&&void 0!==this._timezone&&(this._tzOffset=Object(Q.a)(this._timezone,1e3*e));const t=this._tzOffset?this._tzOffset:{offset:0,string:"UTC"},a=1e3*e+t.offset,r=new Date(a),n=[];if(null!==this._dateFormatter&&n.push(this._dateFormatter.format(r)),null!==this._timeFormatter){const e=this._timeFormatter.format(r);n.push(e)}return n.push(t.string),n.join(" ")}setTimezone(e){this._timezone=e,this._tzOffset=void 0}}var Z=a("tWVy"),$=a("mrSG"),X=a("0lNN"),ee=a("n9z6"),te=a("yzhJ");function ae(e){const{children:t,className:a,hasCustomTouchScrollAnimation:r}=e,s=Object($.a)(e,["children","className","hasCustomTouchScrollAnimation"]),[o,c,l,d]=Object(ee.a)(void 0,r);return n.a.createElement("div",Object.assign({},s,c,{className:i()(te.container,a)}),n.a.createElement(X.a,Object.assign({},o,{className:te.overlayScrollWrap})),n.a.createElement("div",{className:te.wrapper,ref:function(e){l.current=e},onScroll:d},t))}a("bSeV"),a("24R9"),a("25b6");function re(e){const t={shortName:e.shortName,exchange:e.exchange,proName:e.proName,type:e.type};return e.proName&&e.proName.includes(":")&&([t.exchange,t.shortName]=e.proName.split(":")),t}function ne(e,t){
const a=encodeURIComponent(t.shortName||""),r=encodeURIComponent(t.exchange||""),n=encodeURIComponent(t.proName||"");return e.replace("{tvexchange}",r).replace("{tvsymbol}",a).replace("{tvprosymbol}",n)}function se(e,t=""){return e.type&&["spread","expression"].includes(e.type)?e.proName?"/symbols/spread/{tvprosymbol}/"+t:"/"+t:void 0===e.shortName&&void 0===e.proName?(console.warn("Params missed"),"/"):ie(e)?e.exchange?"/symbols/{tvsymbol}/?exchange={tvexchange}":"/symbols/{tvsymbol}/"+t:e.exchange||e.proName?"/symbols/{tvexchange}-{tvsymbol}/"+t:"/symbols/{tvsymbol}/"+t}function ie(e){return!!e.type&&(t=e.type,["forex","bitcoin","crypto"].includes(t));var t}var oe=a("txPx"),ce=a("g+KV"),le=a("sZXL");a.d(t,"Details",(function(){return pe}));const de=Object(oe.getLogger)("Details"),ue=["Description","Price","MarketStatus","BidAndAsk","Ranges","FuturesChart","KeyStats","Earnings","Financials","MoreFinancials","Performance","Technicals","Profile"],me=new Set(["BidAndAsk","FuturesChart"]),he=new Map;for(let be=0;be<ue.length;be++)he.set(ue[be],be);function pe(e){const[t,a]=Object(r.useState)(!0),s=Object(ce.a)(e.symbol,Boolean(e.complete)),o=Object(ce.b)(e,(function(e,t,a){if(null===e&&!Le(a)&&Le(t))return!0;if(!Le(a)||!Le(t))return!1;return(null==e?void 0:e.symbol)!==(null==t?void 0:t.symbol)&&(null==t?void 0:t.symbol)!==a.symbol})),u=We()?e:Object(l.ensureNotNull)(o),{className:m,complete:h,descriptionClassName:p,volume:f,averageVolume:g,averageVolume10dCalc:b,currentSession:_,updateMode:w,lastPrice:y,contracts:x,change:M,changePercent:P,currencyCode:E,lastPriceTime:O,extraHoursPrice:j,extraHoursChange:S,extraHoursChangePercent:k,timezone:F,proName:D,shortName:C,type:R,symbolDescription:W,exchange:L,invalid:z,marketCap:U,basicEarningsTTM:A,dividendsYield:q,priceToEarningsRatioTTM:B,employees:Q,floatShares:K,showTechnicalsDialog:J,performance:G,widgetWidth:$,symbol:X,pricescale:ee,minMovePrimary:te,minMoveSecondary:ie,fractional:oe,summaryCoefficient:pe,openPrice:be,lowPrice:_e,highPrice:ve,price52WeekHigh:we,price52WeekLow:ye,bid:xe,ask:Me,bidSize:Pe,askSize:Ee,financialsData:Ne,earningsData:Oe,websiteUrl:je,businessDescription:Se}=u,ke=Object(r.useRef)(new Map),Fe=Object(r.useRef)(new Map),{additionalMain:Te,additionalSecondary:De}=ge(u),Ce=Object(r.useMemo)(()=>new V.PriceFormatter(ee,te,oe,ie),[ee,te,oe,ie]),Re=Object(r.useMemo)(()=>{const e=new Y;return F&&e.setTimezone(F),e},[F]);return Object(r.useEffect)(()=>{s&&(ke.current.forEach((e,t)=>{de.logDebug(`${t} render reason: ${e}`)}),Fe.current.forEach((e,t)=>{de.logDebug(`${t} were blocked by ${JSON.stringify(Array.from(e))}`)}))},[s]),Object(r.useEffect)(()=>{ke.current=new Map,Fe.current=new Map},[e.symbol]),n.a.createElement(ae,{className:i()(m,!t&&le.hiddenWrapper,!We()&&le.opacity),onContextMenu:d.b,onScroll:function(){Z.a.fire()}},(!We()||(fe("Description",u)||s))&&n.a.createElement("div",{className:i()(le.widgetWrapper,p)},z?n.a.createElement(T,{description:Object(c.t)("Invalid symbol"),invalid:z}):n.a.createElement(T,{description:W,exchange:L,
symbolPagePath:D||C?(Ie={exchange:L,proName:D,shortName:C,type:R},ne(se(Ie),re(Ie))):void 0,additionalMain:Te,additionalSecondary:De})),ze("Price")&&n.a.createElement(v,{className:i()(le.widgetWrapper,_&&le.offsetDisabled),updateMode:w,symbol:X,priceFormatter:Ce,lastPrice:y,change:M,changePercent:P,currencyCode:E}),ze("MarketStatus")&&_&&n.a.createElement(N,{className:le.widgetWrapper,currentSession:_,priceFormatter:Ce,dateFormatter:Re,lastPriceTime:O,extraHoursPrice:j,extraHoursChange:S,extraHoursChangePercent:k}),ze("BidAndAsk")&&n.a.createElement(I,{className:le.widgetWrapper,bid:xe,bidSize:Pe,ask:Me,askSize:Ee,priceFormatter:Ce}),ze("Ranges")&&n.a.createElement(H,{className:le.widgetWrapper,openPrice:be,lastPrice:y,lowPrice:_e,highPrice:ve,price52WeekHigh:we,price52WeekLow:ye,priceFormatter:Ce}),!1);var Ie;function We(){return Le(e)||null===o}function Le(e){return null!==e&&(fe("Description",e)||s)}function ze(e){if(s&&fe(e,u))return ke.current.has(e)||ke.current.set(e,h?"complete":"timeout"),!0;const t=ue.slice(0,Object(l.ensureDefined)(he.get(e))).filter(e=>!me.has(e)),a=!We()||t.every(e=>fe(e,u)),r=a&&fe(e,u);if(!a&&fe(e,u)){const a=t.find(e=>!fe(e,u));if(void 0!==a){const t=Fe.current.get(e);t?t.add(a):Fe.current.set(e,new Set([a]))}}return r&&!ke.current.has(e)&&ke.current.set(e,"data exist"),r}}function fe(e,t){switch(e){case"Description":return t.invalid||Boolean(ge(t).additionalMain);case"Price":return void 0!==t.lastPrice;case"MarketStatus":return o.enabled("display_market_status")&&Boolean(t.currentSession);case"BidAndAsk":return!Object(S.isFeatureEnabled)("details_disable_bid_ask")&&Boolean(t.bid)&&Boolean(t.ask);case"Ranges":return B(t)||q(t);case"FuturesChart":return Boolean(t.contracts&&t.contracts.length>0);case"KeyStats":return hasKeyStats(t.type);case"Earnings":return Boolean(t.earningsData);case"Financials":return Boolean(t.financialsData&&t.financialsData.FY);case"MoreFinancials":return!1;case"Performance":return checkPerformanceVisible(t.performance);case"Technicals":return void 0!==t.summaryCoefficient;case"Profile":return"stock"===t.type&&Boolean(t.websiteUrl||t.businessDescription||t.employees);default:return!1}}function ge(e){const{type:t,proName:a,sector:r,industry:n}=e,s=t&&D.has(t),i=a&&r||"";return{additionalMain:s?Object(c.t)(i):function(e){const{proName:t,type:a,country:r,sector:n}=e,s=t&&r||"",i=t&&n||"";let o;switch(a){case"bitcoin":case"crypto":o=Object(c.t)("Crypto");break;case"equity":o=Object(c.t)("Equity");break;case"futures":o=Object(c.t)("Futures");break;case"index":o=Object(c.t)("Index");break;case"spread":o=Object(c.t)("Composite Symbols");break;case"economic":o=Object(c.t)("Economy");break;case"cfd":o="CFD";break;case"bond":o="Bond";break;case"forex":let e;switch(i){case"Minor":e=Object(c.t)("Minor",{context:"currency"});break;case"Major":e=Object(c.t)("Major",{context:"currency"});break;case"Exotic":e=Object(c.t)("Exotic");break;default:e=i}e&&(o=Object(c.t)("Forex {sector}: {country}").replace("{sector}",e).replace("{country}",Object(c.t)(s)))}return o}(e),
additionalSecondary:s?Object(c.t)(n||""):void 0}}},VFf6:function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 8" width="12" height="8" fill="none"><path fill="currentColor" d="M10 8H2a1 1 0 0 1-.8-1.6l4-5.33a1 1 0 0 1 1.6 0l4 5.33A1 1 0 0 1 10 8z"/></svg>'},Wc1E:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));a("YFKU"),a("HbRj"),a("quTg");var r=a("r8Gw");const n={connecting:window.t("Connecting"),delayed:window.t("Delayed"),delayed_streaming:window.t("Delayed"),endofday:window.t("End of Day"),forbidden:window.t("Instrument is not allowed"),realtime:window.t("Real-time"),snapshot:window.t("Snapshot"),loading:"",replay:window.t("Replay Mode")},s={connecting:window.t("C",{context:"data_mode_connecting_letter"}),delayed:window.t("D",{context:"data_mode_delayed_letter"}),delayed_streaming:window.t("D",{context:"data_mode_delayed_streaming_letter"}),endofday:window.t("E",{context:"data_mode_end_of_day_letter"}),forbidden:window.t("F",{context:"data_mode_forbidden_letter"}),realtime:window.t("R",{context:"data_mode_realtime_letter"}),snapshot:window.t("S",{context:"data_mode_snapshot_letter"}),loading:"",replay:window.t("R",{context:"data_mode_replay_letter"})},i={streaming:"realtime"},o={classMap:{connecting:"tv-data-mode--connecting",delayed:"tv-data-mode--delayed",delayed_streaming:"tv-data-mode--delayed",endofday:"tv-data-mode--endofday",forbidden:"tv-data-mode--forbidden",realtime:"tv-data-mode--realtime",snapshot:"tv-data-mode--snapshot",loading:"tv-data-mode--loading",replay:"tv-data-mode--replay"},classSuffix:"",data:{values:{update_mode:"connecting"}},labelMap:n,modeInterval:600,short:!1,shortLabelMap:s,showTooltip:!0,tooltipType:"custom"};class c extends r.a{constructor(e){super(e),this._quoteSessionPrefix="data-mode-indicator",this._componentClass="tv-data-mode",this._init(e)}getLabel(){return!0===this._shortMode?this._shortLabelMap[this._value]||"":super.getLabel()}setMode(e,t){this.update({values:{update_mode:e,update_mode_seconds:t}})}hide(){this._el.classList.add("i-hidden")}show(){this._el.classList.remove("i-hidden")}getTooltipText(){let e="";const t=this.getValue();if(""===t)return e;switch(t){case"delayed":e=window.t("Quotes are delayed by {0} min and updated every 30 seconds");break;case"delayed_streaming":e=window.t("Quotes are delayed by {0} min");break;default:e=this._labelMap[t]||e}return["delayed","delayed_streaming"].includes(t)&&(e=e.format(Math.round(this._modeInterval/60))),e}_init(e={}){const t=Object.assign({},o,e);this._modeInterval=t.modeInterval||600,this._shortLabelMap=t.shortLabelMap||s,super._init(t),this._render()}_getValueFromData(e){let t;return t=void 0!==e.values&&void 0!==e.values.update_mode?e.values.update_mode:this.getValue(),i[t]||t}_updateValue(e,t){void 0!==e.values&&void 0!==e.values.update_mode_seconds&&(this._modeInterval=e.values.update_mode_seconds),super._updateValue(e,t)}}},ayGZ:function(e,t){
e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 17" width="14" height="17" fill="none"><g fill="#FB8C00" fillRule="evenodd" clip-path="url(#ai0qyr3iu)" clipRule="evenodd"><path d="M9.93 11.64A3.01 3.01 0 0 0 7 8a3 3 0 0 0-2.93 3.64 6.97 6.97 0 0 1 5.86 0zM3.12 10.44l-2.07-.56.31-1.15 2.07.55-.3 1.16zM4.92 7.68l-.96-1.91 1.08-.54L6 7.14l-1.08.54zM8 7.14l.96-1.9 1.08.53-.96 1.91L8 7.14zM10.57 9.56l2.07-.55.31 1.16-2.06.55-.32-1.16z"/></g><defs><clipPath id="ai0qyr3iu"><path fill="#fff" d="M0 0h14v17H0z"/></clipPath></defs></svg>'},cxEv:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var r=a("q1tI");function n(e){const t=Object(r.useRef)(null);return Object(r.useEffect)(()=>{t.current=e},[e]),t.current}},"g+KV":function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return i}));var r=a("q1tI"),n=a("cxEv");function s(e,t){const a=Object(r.useRef)(null),[s,i]=Object(r.useState)(!1),o=Object(n.a)(e);return Object(r.useEffect)(()=>{t&&null!==a.current&&(clearTimeout(a.current),a.current=null,i(!0))},[t]),Object(r.useEffect)(()=>(e!==o&&(i(!1),a.current=setTimeout(()=>i(!0),500)),()=>{null!==a.current&&(clearTimeout(a.current),a.current=null)}),[e]),t||s}function i(e,t){const a=Object(n.a)(e),s=Object(r.useRef)(null);return(t=null!=t?t:(e,t,a)=>e!==t&&t!==a)(s.current,a,e)&&(s.current=a),s.current}},j4pv:function(e,t,a){e.exports={container:"container-2jieF7_C",bid:"bid-2jieF7_C",ask:"ask-2jieF7_C"}},mF3H:function(e,t,a){"use strict";a.r(t),a.d(t,"DetailsHeader",(function(){return c}));var r=a("q1tI"),n=a.n(r),s=a("ehHn"),i=a("g+KV"),o=(a("Kxc7"),a("SHLv"));function c(e){const{complete:t,logoId:a,symbolName:r,baseCurrencyLogoId:c,currencyLogoId:l,earningsReleaseNextDate:d,earningsPerShareForecastNextFq:u,earningsReleaseNextCalendarDate:m}=e;Object(i.a)(r,Boolean(t));return n.a.createElement("div",{className:o.container},!1,n.a.createElement("span",{className:o.title},Object(s.l)(r)),!1)}},plrO:function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path fill="#2196F3" fillRule="evenodd" clipRule="evenodd" d="M12.57 5.5h-.07a3.5 3.5 0 1 0 .07 7A4.98 4.98 0 0 1 4 9a5 5 0 0 1 8.57-3.5z"/></svg>'},quTg:function(e,t,a){},r8Gw:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var r=a("txPx"),n=a("e3/o"),s=a("IWXC");a("+6II");const i=Object(r.getLogger)("GUI.Blocks.AbstractIndicator");class o{constructor(e){this._classSuffix="",this._quoteSessionPrefix="abstract-indicator",this._shortMode=!1,this._showTooltip=!0,this._subscribed=!1,this._tooltipType="custom",this._lastTooltipText="",this._quoteSession=e.quoteSession}getValue(){return this._value}getTooltipText(){return this._labelMap[this._value]||""}getLabel(){return this._labelMap[this._value]||""}getElement(){return this._el}update(e,t){this._updateValue(e,t),this._render()}setTooltipEnabled(e=!1){this._showTooltip!==e&&(this._showTooltip=e,this._renderTooltip())}enableShortMode(){!0!==this._shortMode&&(this._shortMode=!0,
this._render())}disableShortMode(){!1!==this._shortMode&&(this._shortMode=!1,this._render())}isShortModeEnabled(){return this._shortMode}start(){!this._subscribed&&this._symbolName&&(this._quoteSession||(this._quoteSession=Object(s.getQuoteSessionInstance)("simple")),this._quoteSession.subscribe(this._getQuoteSessionId(),this._symbolName,this.update.bind(this)),this._subscribed=!0)}stop(){this._subscribed&&this._quoteSession&&this._symbolName&&(this._quoteSession.unsubscribe(this._getQuoteSessionId(),this._symbolName),this._subscribed=!1)}_init(e){this._el=e.el?e.el:document.createElement("span"),this._el.innerHTML="",this._classMap=e.classMap,this._labelMap=e.labelMap,this._showTooltip=e.showTooltip,this._classSuffix=e.classSuffix,this._symbolName=e.symbol,e.tooltipType&&(this._tooltipType=e.tooltipType),this._quoteSessionGUID=Object(n.guid)(),!0===e.short&&this.enableShortMode(),e.data&&this._updateValue(e.data)}_clearClasses(){Object.values(this._classMap).map(e=>{this._el.classList.remove(""+e),this._el.classList.remove(`${e}${this._classSuffix}`)})}_render(){this._renderClasses(),this._renderTooltip(),this._renderLabel()}_renderLabel(){this._el.textContent=this.getLabel()}_updateValue(e,t){const a=this._getValueFromData(e);(t||a!==this._value)&&(this._value=a)}_renderClasses(){const e=this._el.classList;e.add(this._componentClass,this._componentClass+this._classSuffix);const t=this._classMap[this._value];for(const a in this._classMap){const r=this._classMap[a];r&&(r===t?e.add(r,r+this._classSuffix):e.remove(r,r+this._classSuffix))}!t&&this._value&&i.logWarn("no className for status "+this._value)}_renderTooltip(){const e=this._showTooltip?this.getTooltipText():"";e!==this._lastTooltipText&&(this._lastTooltipText=e,this._el.setAttribute("title",e),"custom"===this._tooltipType&&this._el.classList.toggle("apply-common-tooltip",this._showTooltip))}_getQuoteSessionId(){return`${this._quoteSessionPrefix}.${this._quoteSessionGUID}`}}window.AbstractIndicator=o},s0So:function(e,t,a){e.exports={main:"main-2YcAJyht",additional:"additional-2YcAJyht",invalid:"invalid-2YcAJyht",dotWrap:"dotWrap-2YcAJyht",smallMargin:"smallMargin-2YcAJyht",dot:"dot-2YcAJyht"}},sZXL:function(e,t,a){e.exports={hiddenWrapper:"hiddenWrapper-2rvm3OC4",container:"container-2rvm3OC4",opacity:"opacity-2rvm3OC4",widgetWrapper:"widgetWrapper-2rvm3OC4",large:"large-2rvm3OC4",offsetDisabled:"offsetDisabled-2rvm3OC4",separator:"separator-2rvm3OC4"}},yzhJ:function(e,t,a){e.exports={container:"container-3OdqYJdx",overlayScrollWrap:"overlayScrollWrap-3OdqYJdx",wrapper:"wrapper-3OdqYJdx"}}}]);