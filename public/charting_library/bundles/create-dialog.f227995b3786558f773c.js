(window.webpackJsonp=window.webpackJsonp||[]).push([["create-dialog"],{"F/us":function(n,t,e){var r;(function(){var e=this,i=e._,o=Array.prototype,u=Object.prototype,a=Function.prototype,c=o.push,s=o.slice,l=u.toString,f=u.hasOwnProperty,p=Array.isArray,h=Object.keys,d=a.bind,v=Object.create,g=function(){},y=function(n){return n instanceof y?n:this instanceof y?void(this._wrapped=n):new y(n)};n.exports&&(t=n.exports=y),t._=y,y.VERSION="1.8.3";var b=function(n,t,e){if(void 0===t)return n;switch(null==e?3:e){case 1:return function(e){return n.call(t,e)};case 2:return function(e,r){return n.call(t,e,r)};case 3:return function(e,r,i){return n.call(t,e,r,i)};case 4:return function(e,r,i,o){return n.call(t,e,r,i,o)}}return function(){return n.apply(t,arguments)}},m=function(n,t,e){return null==n?y.identity:y.isFunction(n)?b(n,t,e):y.isObject(n)?y.matcher(n):y.property(n)};y.iteratee=function(n,t){return m(n,t,1/0)};var x=function(n,t){return function(e){var r=arguments.length;if(r<2||null==e)return e;for(var i=1;i<r;i++)for(var o=arguments[i],u=n(o),a=u.length,c=0;c<a;c++){var s=u[c];t&&void 0!==e[s]||(e[s]=o[s])}return e}},_=function(n){if(!y.isObject(n))return{};if(v)return v(n);g.prototype=n;var t=new g;return g.prototype=null,t},w=function(n){return function(t){return null==t?void 0:t[n]}},k=Math.pow(2,53)-1,C=w("length"),A=function(n){var t=C(n);return"number"==typeof t&&t>=0&&t<=k};function j(n){function t(t,e,r,i,o,u){for(;o>=0&&o<u;o+=n){var a=i?i[o]:o;r=e(r,t[a],a,t)}return r}return function(e,r,i,o){r=b(r,o,4);var u=!A(e)&&y.keys(e),a=(u||e).length,c=n>0?0:a-1;return arguments.length<3&&(i=e[u?u[c]:c],c+=n),t(e,r,i,u,c,a)}}y.each=y.forEach=function(n,t,e){var r,i;if(t=b(t,e),A(n))for(r=0,i=n.length;r<i;r++)t(n[r],r,n);else{var o=y.keys(n);for(r=0,i=o.length;r<i;r++)t(n[o[r]],o[r],n)}return n},y.map=y.collect=function(n,t,e){t=m(t,e);for(var r=!A(n)&&y.keys(n),i=(r||n).length,o=Array(i),u=0;u<i;u++){var a=r?r[u]:u;o[u]=t(n[a],a,n)}return o},y.reduce=y.foldl=y.inject=j(1),y.reduceRight=y.foldr=j(-1),y.find=y.detect=function(n,t,e){var r;if(void 0!==(r=A(n)?y.findIndex(n,t,e):y.findKey(n,t,e))&&-1!==r)return n[r]},y.filter=y.select=function(n,t,e){var r=[];return t=m(t,e),y.each(n,(function(n,e,i){t(n,e,i)&&r.push(n)})),r},y.reject=function(n,t,e){return y.filter(n,y.negate(m(t)),e)},y.every=y.all=function(n,t,e){t=m(t,e);for(var r=!A(n)&&y.keys(n),i=(r||n).length,o=0;o<i;o++){var u=r?r[o]:o;if(!t(n[u],u,n))return!1}return!0},y.some=y.any=function(n,t,e){t=m(t,e);for(var r=!A(n)&&y.keys(n),i=(r||n).length,o=0;o<i;o++){var u=r?r[o]:o;if(t(n[u],u,n))return!0}return!1},y.contains=y.includes=y.include=function(n,t,e,r){return A(n)||(n=y.values(n)),("number"!=typeof e||r)&&(e=0),y.indexOf(n,t,e)>=0},y.invoke=function(n,t){var e=s.call(arguments,2),r=y.isFunction(t);return y.map(n,(function(n){var i=r?t:n[t];return null==i?i:i.apply(n,e)}))},y.pluck=function(n,t){return y.map(n,y.property(t))},y.where=function(n,t){return y.filter(n,y.matcher(t))},y.findWhere=function(n,t){return y.find(n,y.matcher(t))},
y.max=function(n,t,e){var r,i,o=-1/0,u=-1/0;if(null==t&&null!=n)for(var a=0,c=(n=A(n)?n:y.values(n)).length;a<c;a++)(r=n[a])>o&&(o=r);else t=m(t,e),y.each(n,(function(n,e,r){((i=t(n,e,r))>u||i===-1/0&&o===-1/0)&&(o=n,u=i)}));return o},y.min=function(n,t,e){var r,i,o=1/0,u=1/0;if(null==t&&null!=n)for(var a=0,c=(n=A(n)?n:y.values(n)).length;a<c;a++)(r=n[a])<o&&(o=r);else t=m(t,e),y.each(n,(function(n,e,r){((i=t(n,e,r))<u||i===1/0&&o===1/0)&&(o=n,u=i)}));return o},y.shuffle=function(n){for(var t,e=A(n)?n:y.values(n),r=e.length,i=Array(r),o=0;o<r;o++)(t=y.random(0,o))!==o&&(i[o]=i[t]),i[t]=e[o];return i},y.sample=function(n,t,e){return null==t||e?(A(n)||(n=y.values(n)),n[y.random(n.length-1)]):y.shuffle(n).slice(0,Math.max(0,t))},y.sortBy=function(n,t,e){return t=m(t,e),y.pluck(y.map(n,(function(n,e,r){return{value:n,index:e,criteria:t(n,e,r)}})).sort((function(n,t){var e=n.criteria,r=t.criteria;if(e!==r){if(e>r||void 0===e)return 1;if(e<r||void 0===r)return-1}return n.index-t.index})),"value")};var I=function(n){return function(t,e,r){var i={};return e=m(e,r),y.each(t,(function(r,o){var u=e(r,o,t);n(i,r,u)})),i}};y.groupBy=I((function(n,t,e){y.has(n,e)?n[e].push(t):n[e]=[t]})),y.indexBy=I((function(n,t,e){n[e]=t})),y.countBy=I((function(n,t,e){y.has(n,e)?n[e]++:n[e]=1})),y.toArray=function(n){return n?y.isArray(n)?s.call(n):A(n)?y.map(n,y.identity):y.values(n):[]},y.size=function(n){return null==n?0:A(n)?n.length:y.keys(n).length},y.partition=function(n,t,e){t=m(t,e);var r=[],i=[];return y.each(n,(function(n,e,o){(t(n,e,o)?r:i).push(n)})),[r,i]},y.first=y.head=y.take=function(n,t,e){if(null!=n)return null==t||e?n[0]:y.initial(n,n.length-t)},y.initial=function(n,t,e){return s.call(n,0,Math.max(0,n.length-(null==t||e?1:t)))},y.last=function(n,t,e){if(null!=n)return null==t||e?n[n.length-1]:y.rest(n,Math.max(0,n.length-t))},y.rest=y.tail=y.drop=function(n,t,e){return s.call(n,null==t||e?1:t)},y.compact=function(n){return y.filter(n,y.identity)};var O=function(n,t,e,r){for(var i=[],o=0,u=r||0,a=C(n);u<a;u++){var c=n[u];if(A(c)&&(y.isArray(c)||y.isArguments(c))){t||(c=O(c,t,e));var s=0,l=c.length;for(i.length+=l;s<l;)i[o++]=c[s++]}else e||(i[o++]=c)}return i};function E(n){return function(t,e,r){e=m(e,r);for(var i=C(t),o=n>0?0:i-1;o>=0&&o<i;o+=n)if(e(t[o],o,t))return o;return-1}}function B(n,t,e){return function(r,i,o){var u=0,a=C(r);if("number"==typeof o)n>0?u=o>=0?o:Math.max(o+a,u):a=o>=0?Math.min(o+1,a):o+a+1;else if(e&&o&&a)return r[o=e(r,i)]===i?o:-1;if(i!=i)return(o=t(s.call(r,u,a),y.isNaN))>=0?o+u:-1;for(o=n>0?u:a-1;o>=0&&o<a;o+=n)if(r[o]===i)return o;return-1}}y.flatten=function(n,t){return O(n,t,!1)},y.without=function(n){return y.difference(n,s.call(arguments,1))},y.uniq=y.unique=function(n,t,e,r){y.isBoolean(t)||(r=e,e=t,t=!1),null!=e&&(e=m(e,r));for(var i=[],o=[],u=0,a=C(n);u<a;u++){var c=n[u],s=e?e(c,u,n):c;t?(u&&o===s||i.push(c),o=s):e?y.contains(o,s)||(o.push(s),i.push(c)):y.contains(i,c)||i.push(c)}return i},y.union=function(){return y.uniq(O(arguments,!0,!0))},y.intersection=function(n){
for(var t=[],e=arguments.length,r=0,i=C(n);r<i;r++){var o=n[r];if(!y.contains(t,o)){for(var u=1;u<e&&y.contains(arguments[u],o);u++);u===e&&t.push(o)}}return t},y.difference=function(n){var t=O(arguments,!0,!0,1);return y.filter(n,(function(n){return!y.contains(t,n)}))},y.zip=function(){return y.unzip(arguments)},y.unzip=function(n){for(var t=n&&y.max(n,C).length||0,e=Array(t),r=0;r<t;r++)e[r]=y.pluck(n,r);return e},y.object=function(n,t){for(var e={},r=0,i=C(n);r<i;r++)t?e[n[r]]=t[r]:e[n[r][0]]=n[r][1];return e},y.findIndex=E(1),y.findLastIndex=E(-1),y.sortedIndex=function(n,t,e,r){for(var i=(e=m(e,r,1))(t),o=0,u=C(n);o<u;){var a=Math.floor((o+u)/2);e(n[a])<i?o=a+1:u=a}return o},y.indexOf=B(1,y.findIndex,y.sortedIndex),y.lastIndexOf=B(-1,y.findLastIndex),y.range=function(n,t,e){null==t&&(t=n||0,n=0),e=e||1;for(var r=Math.max(Math.ceil((t-n)/e),0),i=Array(r),o=0;o<r;o++,n+=e)i[o]=n;return i};var L=function(n,t,e,r,i){if(!(r instanceof t))return n.apply(e,i);var o=_(n.prototype),u=n.apply(o,i);return y.isObject(u)?u:o};y.bind=function(n,t){if(d&&n.bind===d)return d.apply(n,s.call(arguments,1));if(!y.isFunction(n))throw new TypeError("Bind must be called on a function");var e=s.call(arguments,2),r=function(){return L(n,r,t,this,e.concat(s.call(arguments)))};return r},y.partial=function(n){var t=s.call(arguments,1),e=function(){for(var r=0,i=t.length,o=Array(i),u=0;u<i;u++)o[u]=t[u]===y?arguments[r++]:t[u];for(;r<arguments.length;)o.push(arguments[r++]);return L(n,e,this,this,o)};return e},y.bindAll=function(n){var t,e,r=arguments.length;if(r<=1)throw new Error("bindAll must be passed function names");for(t=1;t<r;t++)n[e=arguments[t]]=y.bind(n[e],n);return n},y.memoize=function(n,t){var e=function(r){var i=e.cache,o=""+(t?t.apply(this,arguments):r);return y.has(i,o)||(i[o]=n.apply(this,arguments)),i[o]};return e.cache={},e},y.delay=function(n,t){var e=s.call(arguments,2);return setTimeout((function(){return n.apply(null,e)}),t)},y.defer=y.partial(y.delay,y,1),y.throttle=function(n,t,e){var r,i,o,u=null,a=0;e||(e={});var c=function(){a=!1===e.leading?0:y.now(),u=null,o=n.apply(r,i),u||(r=i=null)};return function(){var s=y.now();a||!1!==e.leading||(a=s);var l=t-(s-a);return r=this,i=arguments,l<=0||l>t?(u&&(clearTimeout(u),u=null),a=s,o=n.apply(r,i),u||(r=i=null)):u||!1===e.trailing||(u=setTimeout(c,l)),o}},y.debounce=function(n,t,e){var r,i,o,u,a,c=function(){var s=y.now()-u;s<t&&s>=0?r=setTimeout(c,t-s):(r=null,e||(a=n.apply(o,i),r||(o=i=null)))};return function(){o=this,i=arguments,u=y.now();var s=e&&!r;return r||(r=setTimeout(c,t)),s&&(a=n.apply(o,i),o=i=null),a}},y.wrap=function(n,t){return y.partial(t,n)},y.negate=function(n){return function(){return!n.apply(this,arguments)}},y.compose=function(){var n=arguments,t=n.length-1;return function(){for(var e=t,r=n[t].apply(this,arguments);e--;)r=n[e].call(this,r);return r}},y.after=function(n,t){return function(){if(--n<1)return t.apply(this,arguments)}},y.before=function(n,t){var e;return function(){return--n>0&&(e=t.apply(this,arguments)),n<=1&&(t=null),e}},
y.once=y.partial(y.before,2);var M=!{toString:null}.propertyIsEnumerable("toString"),S=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];function T(n,t){var e=S.length,r=n.constructor,i=y.isFunction(r)&&r.prototype||u,o="constructor";for(y.has(n,o)&&!y.contains(t,o)&&t.push(o);e--;)(o=S[e])in n&&n[o]!==i[o]&&!y.contains(t,o)&&t.push(o)}y.keys=function(n){if(!y.isObject(n))return[];if(h)return h(n);var t=[];for(var e in n)y.has(n,e)&&t.push(e);return M&&T(n,t),t},y.allKeys=function(n){if(!y.isObject(n))return[];var t=[];for(var e in n)t.push(e);return M&&T(n,t),t},y.values=function(n){for(var t=y.keys(n),e=t.length,r=Array(e),i=0;i<e;i++)r[i]=n[t[i]];return r},y.mapObject=function(n,t,e){t=m(t,e);for(var r,i=y.keys(n),o=i.length,u={},a=0;a<o;a++)u[r=i[a]]=t(n[r],r,n);return u},y.pairs=function(n){for(var t=y.keys(n),e=t.length,r=Array(e),i=0;i<e;i++)r[i]=[t[i],n[t[i]]];return r},y.invert=function(n){for(var t={},e=y.keys(n),r=0,i=e.length;r<i;r++)t[n[e[r]]]=e[r];return t},y.functions=y.methods=function(n){var t=[];for(var e in n)y.isFunction(n[e])&&t.push(e);return t.sort()},y.extend=x(y.allKeys),y.extendOwn=y.assign=x(y.keys),y.findKey=function(n,t,e){t=m(t,e);for(var r,i=y.keys(n),o=0,u=i.length;o<u;o++)if(t(n[r=i[o]],r,n))return r},y.pick=function(n,t,e){var r,i,o={},u=n;if(null==u)return o;y.isFunction(t)?(i=y.allKeys(u),r=b(t,e)):(i=O(arguments,!1,!1,1),r=function(n,t,e){return t in e},u=Object(u));for(var a=0,c=i.length;a<c;a++){var s=i[a],l=u[s];r(l,s,u)&&(o[s]=l)}return o},y.omit=function(n,t,e){if(y.isFunction(t))t=y.negate(t);else{var r=y.map(O(arguments,!1,!1,1),String);t=function(n,t){return!y.contains(r,t)}}return y.pick(n,t,e)},y.defaults=x(y.allKeys,!0),y.create=function(n,t){var e=_(n);return t&&y.extendOwn(e,t),e},y.clone=function(n){return y.isObject(n)?y.isArray(n)?n.slice():y.extend({},n):n},y.tap=function(n,t){return t(n),n},y.isMatch=function(n,t){var e=y.keys(t),r=e.length;if(null==n)return!r;for(var i=Object(n),o=0;o<r;o++){var u=e[o];if(t[u]!==i[u]||!(u in i))return!1}return!0};var $=function(n,t,e,r){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof y&&(n=n._wrapped),t instanceof y&&(t=t._wrapped);var i=l.call(n);if(i!==l.call(t))return!1;switch(i){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!=+n?+t!=+t:0==+n?1/+n==1/t:+n==+t;case"[object Date]":case"[object Boolean]":return+n==+t}var o="[object Array]"===i;if(!o){if("object"!=typeof n||"object"!=typeof t)return!1;var u=n.constructor,a=t.constructor;if(u!==a&&!(y.isFunction(u)&&u instanceof u&&y.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in t)return!1}r=r||[];for(var c=(e=e||[]).length;c--;)if(e[c]===n)return r[c]===t;if(e.push(n),r.push(t),o){if((c=n.length)!==t.length)return!1;for(;c--;)if(!$(n[c],t[c],e,r))return!1}else{var s,f=y.keys(n);if(c=f.length,y.keys(t).length!==c)return!1;for(;c--;)if(s=f[c],!y.has(t,s)||!$(n[s],t[s],e,r))return!1}return e.pop(),r.pop(),!0};y.isEqual=function(n,t){
return $(n,t)},y.isEmpty=function(n){return null==n||(A(n)&&(y.isArray(n)||y.isString(n)||y.isArguments(n))?0===n.length:0===y.keys(n).length)},y.isElement=function(n){return!(!n||1!==n.nodeType)},y.isArray=p||function(n){return"[object Array]"===l.call(n)},y.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},y.each(["Arguments","Function","String","Number","Date","RegExp","Error"],(function(n){y["is"+n]=function(t){return l.call(t)==="[object "+n+"]"}})),y.isArguments(arguments)||(y.isArguments=function(n){return y.has(n,"callee")}),"object"!=typeof Int8Array&&(y.isFunction=function(n){return"function"==typeof n||!1}),y.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},y.isNaN=function(n){return y.isNumber(n)&&n!==+n},y.isBoolean=function(n){return!0===n||!1===n||"[object Boolean]"===l.call(n)},y.isNull=function(n){return null===n},y.isUndefined=function(n){return void 0===n},y.has=function(n,t){return null!=n&&f.call(n,t)},y.noConflict=function(){return e._=i,this},y.identity=function(n){return n},y.constant=function(n){return function(){return n}},y.noop=function(){},y.property=w,y.propertyOf=function(n){return null==n?function(){}:function(t){return n[t]}},y.matcher=y.matches=function(n){return n=y.extendOwn({},n),function(t){return y.isMatch(t,n)}},y.times=function(n,t,e){var r=Array(Math.max(0,n));t=b(t,e,1);for(var i=0;i<n;i++)r[i]=t(i);return r},y.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},y.now=Date.now||function(){return(new Date).getTime()};var F={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},N=y.invert(F),W=function(n){var t=function(t){return n[t]},e="(?:"+y.keys(n).join("|")+")",r=RegExp(e),i=RegExp(e,"g");return function(n){return n=null==n?"":""+n,r.test(n)?n.replace(i,t):n}};y.escape=W(F),y.unescape=W(N),y.result=function(n,t,e){var r=null==n?void 0:n[t];return void 0===r&&(r=e),y.isFunction(r)?r.call(n):r};var D=0;y.uniqueId=function(n){var t=++D+"";return n?n+t:t},y.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var R=/(.)^/,P={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},q=/\\|'|\r|\n|\u2028|\u2029/g,z=function(n){return"\\"+P[n]};y.template=function(n,t,e){!t&&e&&(t=e),t=y.defaults({},t,y.templateSettings);var r=RegExp([(t.escape||R).source,(t.interpolate||R).source,(t.evaluate||R).source].join("|")+"|$","g"),i=0,o="__p+='";n.replace(r,(function(t,e,r,u,a){return o+=n.slice(i,a).replace(q,z),i=a+t.length,e?o+="'+\n((__t=("+e+"))==null?'':_.escape(__t))+\n'":r?o+="'+\n((__t=("+r+"))==null?'':__t)+\n'":u&&(o+="';\n"+u+"\n__p+='"),t})),o+="';\n",t.variable||(o="with(obj||{}){\n"+o+"}\n"),o="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+o+"return __p;\n";try{var u=new Function(t.variable||"obj","_",o)}catch(s){throw s.source=o,s}var a=function(n){return u.call(this,n,y)},c=t.variable||"obj";return a.source="function("+c+"){\n"+o+"}",a},y.chain=function(n){var t=y(n)
;return t._chain=!0,t};var K=function(n,t){return n._chain?y(t).chain():t};y.mixin=function(n){y.each(y.functions(n),(function(t){var e=y[t]=n[t];y.prototype[t]=function(){var n=[this._wrapped];return c.apply(n,arguments),K(this,e.apply(y,n))}}))},y.mixin(y),y.each(["pop","push","reverse","shift","sort","splice","unshift"],(function(n){var t=o[n];y.prototype[n]=function(){var e=this._wrapped;return t.apply(e,arguments),"shift"!==n&&"splice"!==n||0!==e.length||delete e[0],K(this,e)}})),y.each(["concat","join","slice"],(function(n){var t=o[n];y.prototype[n]=function(){return K(this,t.apply(this._wrapped,arguments))}})),y.prototype.value=function(){return this._wrapped},y.prototype.valueOf=y.prototype.toJSON=y.prototype.value,y.prototype.toString=function(){return""+this._wrapped},void 0===(r=function(){return y}.apply(t,[]))||(n.exports=r)}).call(this)},IWoC:function(n,t,e){"use strict";const r=e("txPx").getLogger("CommonUI.CreateTVBlockPlugin");n.exports.createTvBlockPlugin=function(n){if(n)return function(t,e,r){var i,o=$(this);function u(t,e){return e?n[t](o,e):n[t](o)}return"get"===t?"function"==typeof n[i=e]?u(i,r):n[i]:n[t]?o.each((function(){return u(t,void 0)})):o}},n.exports.createTvBlockWithInstance=function(n,t){if(n&&t)return n=n.toString(),function(i,o,u){var a,c,s;return"get"===i?a=o:(c=o,"object"==typeof i&&void 0===o?(c=i,i="init"):"string"!=typeof i&&(i="init")),"getInstance"===i?$(this).eq(0).data(n):"destroy"===i?(s=$(this).eq(0).data(n))?void("function"==typeof s.destroy?(e(s,"destroy",c),$(this).eq(0).removeData(n)):r.logError("[Block Plugin] "+n+" does not support destroy command")):void console.warn("[Block Plugin] Trying to execute destroy method of "+n+" but it has not been inited"):"get"===i?(s=$(this).eq(0).data(n))?"function"==typeof s[a]?e(s,a,u):s[a]:void console.warn("[Block Plugin] Trying to get prop or execute method of "+n+" but it has not been inited"):$(this).each((function(){var o=$(this),u=o.data(n);void 0===u&&(u=void 0===c?t(o):t(o,c),o.data(n,u)),"init"!==i&&("function"==typeof u[i]?e(u,i,c):r.logError("[Block Plugin] "+n+" does not support command "+i))}))};function e(n,t,e){return void 0===e?n[t]():n[t](e)}}},IwoD:function(n,t,e){},QwKQ:function(n,t,e){"use strict";(function(r){Object.defineProperty(t,"__esModule",{value:!0});var i=e("IWoC");e("b6p+");const o=e("txPx").getLogger("Ui.TvControlCheckbox"),u={labelWrapper:'{{#hasLabel}}<label>{{#labelLeft}}<span class="tv-control-checkbox__label {{#labelAddClass}}{{labelAddClass}}{{/labelAddClass}}">{{labelLeft}}</span>{{/labelLeft}}{{> inputWrapper }}{{#labelRight}}<span class="tv-control-checkbox__label {{#labelAddClass}}{{labelAddClass}}{{/labelAddClass}}">{{labelRight}}</span>{{/labelRight}}</label>{{/hasLabel}}{{^hasLabel}}{{> inputWrapper }}{{/hasLabel}}',inputWrapper:'<{{ tag }} class="{{ customClass }}{{#disabled}} i-disabled{{/disabled}}">{{^hasCheckbox}}{{> checkbox }}{{/hasCheckbox}}{{> box }}{{> ripple }}</{{ tag }}>',
checkbox:'<input{{#id}} id="{{ id }}"{{/id}} class="{{> checkboxClass }}" type="checkbox"{{#name}} name="{{ name }}"{{/name}}{{#checked}} checked{{/checked}}{{#disabled}} disabled{{/disabled}}>',checkboxClass:"{{ customClass }}__input",box:'<span class="{{ customClass }}__box {{#boxAddClass}}{{boxAddClass}}{{/boxAddClass}}">'+e("aLUT")+"</span>",ripple:'<span class="{{ customClass }}__ripple js-ripple"></span>'};class a{constructor({customClass:n="tv-control-checkbox",$checkbox:t,tag:e,id:r,name:i,checked:u,disabled:a,labelLeft:c,labelRight:s,labelAddClass:l,boxAddClass:f}){this.$el=null,void 0===e&&(e=c||s?"span":"label");const p=t instanceof $&&!!t.length;if(p){if(!t.is("input[type=checkbox]"))return void o.logError("`$checkbox` need to be input[type=checkbox]");if(t.hasClass("i-inited"))return;this._setInputId(t,r),this._setInputClass(t,n),this._setInputName(t,i),this._setInputChecked(t,u),this._setInputDisabled(t,a),u=!!t.prop("checked"),a=!!t.attr("disabled")}this.$el=this.render({$checkbox:t,hasCheckbox:p,customClass:n,tag:e,id:r,name:i,checked:u,disabled:a,labelLeft:c,labelRight:s,hasLabel:c||s,labelAddClass:l,boxAddClass:f}),this.$checkbox=p?t:this.$el.find("input[type=checkbox]")}_setInputId(n,t){void 0!==t&&n.attr("id",t)}_setInputClass(n,t){const e=r.render(u.checkboxClass,{customClass:t});n.addClass(e)}_setInputName(n,t){void 0!==t&&n.attr("name",t)}_setInputChecked(n,t){void 0!==t&&n.prop("checked",!!t)}_setInputDisabled(n,t){void 0!==t&&(t?n.setAttribute("disabled","disabled"):n.removeAttr("disabled"))}render(n){const t=n.$checkbox,e=$(r.render(u.labelWrapper,n,u));if(n.hasCheckbox){e.insertBefore(t);e.find("."+n.customClass).andSelf().filter("."+n.customClass).eq(0).prepend(t.detach()),t.addClass("i-inited")}return e}set checked(n){this._setInputChecked(this.$checkbox,!!n)}get checked(){return!!this.$checkbox.prop("checked")}}$.fn.tvControlCheckbox=(0,i.createTvBlockWithInstance)("tv-control-checkbox",(function(n,t={}){return new a(TradingView.mergeObj(t,{$checkbox:n}))})),t.default=a,n.exports=t.default}).call(this,e("nbsC"))},YDhE:function(n,t,e){"use strict";e.r(t),e.d(t,"createDialog",(function(){return o}));var r=e("6aJD"),i=e("tKRU");function o(n){const t=n.type||"popup";return delete n.type,"modal"===t?new r.a(n):new i.a(n)}},aLUT:function(n,t){n.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 9" width="11px" height="9px"><path fill="none" fill-rule="evenodd" stroke-width="2" d="M1 3.22l3.415 3.496L10 1"/></svg>'},"b6p+":function(n,t,e){},jAh7:function(n,t,e){"use strict";e.r(t),e.d(t,"OverlapManager",(function(){return o})),e.d(t,"getRootOverlapManager",(function(){return a}));var r=e("Eyy1");class i{constructor(){this._storage=[]}add(n){this._storage.push(n)}remove(n){this._storage=this._storage.filter(t=>n!==t)}has(n){return this._storage.includes(n)}getItems(){return this._storage}}class o{constructor(n=document){this._storage=new i,this._windows=new Map,this._index=0,this._document=n,this._container=n.createDocumentFragment()}setContainer(n){
const t=this._container,e=null===n?this._document.createDocumentFragment():n;!function(n,t){Array.from(n.childNodes).forEach(n=>{n.nodeType===Node.ELEMENT_NODE&&t.appendChild(n)})}(t,e),this._container=e}registerWindow(n){this._storage.has(n)||this._storage.add(n)}ensureWindow(n,t={position:"fixed",direction:"normal"}){const e=this._windows.get(n);if(void 0!==e)return e;this.registerWindow(n);const r=this._document.createElement("div");if(r.style.position=t.position,r.style.zIndex=this._index.toString(),r.dataset.id=n,void 0!==t.index){const n=this._container.childNodes.length;if(t.index>=n)this._container.appendChild(r);else if(t.index<=0)this._container.insertBefore(r,this._container.firstChild);else{const n=this._container.childNodes[t.index];this._container.insertBefore(r,n)}}else"reverse"===t.direction?this._container.insertBefore(r,this._container.firstChild):this._container.appendChild(r);return this._windows.set(n,r),++this._index,r}unregisterWindow(n){this._storage.remove(n);const t=this._windows.get(n);void 0!==t&&(null!==t.parentElement&&t.parentElement.removeChild(t),this._windows.delete(n))}getZindex(n){const t=this.ensureWindow(n);return parseInt(t.style.zIndex||"0")}moveToTop(n){if(this.getZindex(n)!==this._index){this.ensureWindow(n).style.zIndex=(++this._index).toString()}}removeWindow(n){this.unregisterWindow(n)}}const u=new WeakMap;function a(n=document){const t=n.getElementById("overlap-manager-root");if(null!==t)return Object(r.ensureDefined)(u.get(t));{const t=new o(n),e=function(n){const t=n.createElement("div");return t.style.position="absolute",t.style.zIndex=150..toString(),t.style.top="0px",t.style.left="0px",t.id="overlap-manager-root",t}(n);return u.set(e,t),t.setContainer(e),n.body.appendChild(e),t}}},nec0:function(n,t,e){},uo4K:function(n,t){n.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13" width="13" height="13"><path fill="currentColor" d="M5.18 6.6L1.3 2.7.6 2 2 .59l.7.7 3.9 3.9 3.89-3.9.7-.7L12.61 2l-.71.7L8 6.6l3.89 3.89.7.7-1.4 1.42-.71-.71L6.58 8 2.72 11.9l-.71.7-1.41-1.4.7-.71 3.9-3.9z"/></svg>'}}]);