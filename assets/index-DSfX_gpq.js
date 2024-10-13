function rm(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const s in r)if(s!=="default"&&!(s in t)){const a=Object.getOwnPropertyDescriptor(r,s);a&&Object.defineProperty(t,s,a.get?a:{enumerable:!0,get:()=>r[s]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}})();var Vr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function sm(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function lk(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var s=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,s.get?s:{enumerable:!0,get:function(){return t[r]}})}),n}var am={exports:{}},Ki={},om={exports:{}},G={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eo=Symbol.for("react.element"),uk=Symbol.for("react.portal"),ck=Symbol.for("react.fragment"),pk=Symbol.for("react.strict_mode"),fk=Symbol.for("react.profiler"),dk=Symbol.for("react.provider"),hk=Symbol.for("react.context"),mk=Symbol.for("react.forward_ref"),gk=Symbol.for("react.suspense"),yk=Symbol.for("react.memo"),wk=Symbol.for("react.lazy"),ad=Symbol.iterator;function vk(t){return t===null||typeof t!="object"?null:(t=ad&&t[ad]||t["@@iterator"],typeof t=="function"?t:null)}var im={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},lm=Object.assign,um={};function Bs(t,e,n){this.props=t,this.context=e,this.refs=um,this.updater=n||im}Bs.prototype.isReactComponent={};Bs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Bs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function cm(){}cm.prototype=Bs.prototype;function jc(t,e,n){this.props=t,this.context=e,this.refs=um,this.updater=n||im}var Mc=jc.prototype=new cm;Mc.constructor=jc;lm(Mc,Bs.prototype);Mc.isPureReactComponent=!0;var od=Array.isArray,pm=Object.prototype.hasOwnProperty,Vc={current:null},fm={key:!0,ref:!0,__self:!0,__source:!0};function dm(t,e,n){var r,s={},a=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(a=""+e.key),e)pm.call(e,r)&&!fm.hasOwnProperty(r)&&(s[r]=e[r]);var i=arguments.length-2;if(i===1)s.children=n;else if(1<i){for(var l=Array(i),u=0;u<i;u++)l[u]=arguments[u+2];s.children=l}if(t&&t.defaultProps)for(r in i=t.defaultProps,i)s[r]===void 0&&(s[r]=i[r]);return{$$typeof:eo,type:t,key:a,ref:o,props:s,_owner:Vc.current}}function bk(t,e){return{$$typeof:eo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Uc(t){return typeof t=="object"&&t!==null&&t.$$typeof===eo}function kk(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var id=/\/+/g;function Ol(t,e){return typeof t=="object"&&t!==null&&t.key!=null?kk(""+t.key):e.toString(36)}function Uo(t,e,n,r,s){var a=typeof t;(a==="undefined"||a==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case eo:case uk:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+Ol(o,0):r,od(s)?(n="",t!=null&&(n=t.replace(id,"$&/")+"/"),Uo(s,e,n,"",function(u){return u})):s!=null&&(Uc(s)&&(s=bk(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(id,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",od(t))for(var i=0;i<t.length;i++){a=t[i];var l=r+Ol(a,i);o+=Uo(a,e,n,l,s)}else if(l=vk(t),typeof l=="function")for(t=l.call(t),i=0;!(a=t.next()).done;)a=a.value,l=r+Ol(a,i++),o+=Uo(a,e,n,l,s);else if(a==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function No(t,e,n){if(t==null)return t;var r=[],s=0;return Uo(t,r,"","",function(a){return e.call(n,a,s++)}),r}function Sk(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ze={current:null},Wo={transition:null},Nk={ReactCurrentDispatcher:Ze,ReactCurrentBatchConfig:Wo,ReactCurrentOwner:Vc};function hm(){throw Error("act(...) is not supported in production builds of React.")}G.Children={map:No,forEach:function(t,e,n){No(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return No(t,function(){e++}),e},toArray:function(t){return No(t,function(e){return e})||[]},only:function(t){if(!Uc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};G.Component=Bs;G.Fragment=ck;G.Profiler=fk;G.PureComponent=jc;G.StrictMode=pk;G.Suspense=gk;G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Nk;G.act=hm;G.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=lm({},t.props),s=t.key,a=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(a=e.ref,o=Vc.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var i=t.type.defaultProps;for(l in e)pm.call(e,l)&&!fm.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&i!==void 0?i[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){i=Array(l);for(var u=0;u<l;u++)i[u]=arguments[u+2];r.children=i}return{$$typeof:eo,type:t.type,key:s,ref:a,props:r,_owner:o}};G.createContext=function(t){return t={$$typeof:hk,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:dk,_context:t},t.Consumer=t};G.createElement=dm;G.createFactory=function(t){var e=dm.bind(null,t);return e.type=t,e};G.createRef=function(){return{current:null}};G.forwardRef=function(t){return{$$typeof:mk,render:t}};G.isValidElement=Uc;G.lazy=function(t){return{$$typeof:wk,_payload:{_status:-1,_result:t},_init:Sk}};G.memo=function(t,e){return{$$typeof:yk,type:t,compare:e===void 0?null:e}};G.startTransition=function(t){var e=Wo.transition;Wo.transition={};try{t()}finally{Wo.transition=e}};G.unstable_act=hm;G.useCallback=function(t,e){return Ze.current.useCallback(t,e)};G.useContext=function(t){return Ze.current.useContext(t)};G.useDebugValue=function(){};G.useDeferredValue=function(t){return Ze.current.useDeferredValue(t)};G.useEffect=function(t,e){return Ze.current.useEffect(t,e)};G.useId=function(){return Ze.current.useId()};G.useImperativeHandle=function(t,e,n){return Ze.current.useImperativeHandle(t,e,n)};G.useInsertionEffect=function(t,e){return Ze.current.useInsertionEffect(t,e)};G.useLayoutEffect=function(t,e){return Ze.current.useLayoutEffect(t,e)};G.useMemo=function(t,e){return Ze.current.useMemo(t,e)};G.useReducer=function(t,e,n){return Ze.current.useReducer(t,e,n)};G.useRef=function(t){return Ze.current.useRef(t)};G.useState=function(t){return Ze.current.useState(t)};G.useSyncExternalStore=function(t,e,n){return Ze.current.useSyncExternalStore(t,e,n)};G.useTransition=function(){return Ze.current.useTransition()};G.version="18.3.1";om.exports=G;var F=om.exports;const Bt=sm(F),Ek=rm({__proto__:null,default:Bt},[F]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xk=F,Tk=Symbol.for("react.element"),_k=Symbol.for("react.fragment"),$k=Object.prototype.hasOwnProperty,Ik=xk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ak={key:!0,ref:!0,__self:!0,__source:!0};function mm(t,e,n){var r,s={},a=null,o=null;n!==void 0&&(a=""+n),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)$k.call(e,r)&&!Ak.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:Tk,type:t,key:a,ref:o,props:s,_owner:Ik.current}}Ki.Fragment=_k;Ki.jsx=mm;Ki.jsxs=mm;am.exports=Ki;var $=am.exports,gm={exports:{}},vt={},ym={exports:{}},wm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,U){var W=z.length;z.push(U);e:for(;0<W;){var ke=W-1>>>1,Ae=z[ke];if(0<s(Ae,U))z[ke]=U,z[W]=Ae,W=ke;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var U=z[0],W=z.pop();if(W!==U){z[0]=W;e:for(var ke=0,Ae=z.length,ko=Ae>>>1;ke<ko;){var fr=2*(ke+1)-1,Al=z[fr],dr=fr+1,So=z[dr];if(0>s(Al,W))dr<Ae&&0>s(So,Al)?(z[ke]=So,z[dr]=W,ke=dr):(z[ke]=Al,z[fr]=W,ke=fr);else if(dr<Ae&&0>s(So,W))z[ke]=So,z[dr]=W,ke=dr;else break e}}return U}function s(z,U){var W=z.sortIndex-U.sortIndex;return W!==0?W:z.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;t.unstable_now=function(){return a.now()}}else{var o=Date,i=o.now();t.unstable_now=function(){return o.now()-i}}var l=[],u=[],p=1,c=null,f=3,h=!1,m=!1,w=!1,b=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,S=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(z){for(var U=n(u);U!==null;){if(U.callback===null)r(u);else if(U.startTime<=z)r(u),U.sortIndex=U.expirationTime,e(l,U);else break;U=n(u)}}function x(z){if(w=!1,v(z),!m)if(n(l)!==null)m=!0,Be(T);else{var U=n(u);U!==null&&dt(x,U.startTime-z)}}function T(z,U){m=!1,w&&(w=!1,y(O),O=-1),h=!0;var W=f;try{for(v(U),c=n(l);c!==null&&(!(c.expirationTime>U)||z&&!j());){var ke=c.callback;if(typeof ke=="function"){c.callback=null,f=c.priorityLevel;var Ae=ke(c.expirationTime<=U);U=t.unstable_now(),typeof Ae=="function"?c.callback=Ae:c===n(l)&&r(l),v(U)}else r(l);c=n(l)}if(c!==null)var ko=!0;else{var fr=n(u);fr!==null&&dt(x,fr.startTime-U),ko=!1}return ko}finally{c=null,f=W,h=!1}}var _=!1,A=null,O=-1,L=5,P=-1;function j(){return!(t.unstable_now()-P<L)}function q(){if(A!==null){var z=t.unstable_now();P=z;var U=!0;try{U=A(!0,z)}finally{U?Q():(_=!1,A=null)}}else _=!1}var Q;if(typeof S=="function")Q=function(){S(q)};else if(typeof MessageChannel<"u"){var ne=new MessageChannel,be=ne.port2;ne.port1.onmessage=q,Q=function(){be.postMessage(null)}}else Q=function(){b(q,0)};function Be(z){A=z,_||(_=!0,Q())}function dt(z,U){O=b(function(){z(t.unstable_now())},U)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){m||h||(m=!0,Be(T))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(z){switch(f){case 1:case 2:case 3:var U=3;break;default:U=f}var W=f;f=U;try{return z()}finally{f=W}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,U){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var W=f;f=z;try{return U()}finally{f=W}},t.unstable_scheduleCallback=function(z,U,W){var ke=t.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?ke+W:ke):W=ke,z){case 1:var Ae=-1;break;case 2:Ae=250;break;case 5:Ae=1073741823;break;case 4:Ae=1e4;break;default:Ae=5e3}return Ae=W+Ae,z={id:p++,callback:U,priorityLevel:z,startTime:W,expirationTime:Ae,sortIndex:-1},W>ke?(z.sortIndex=W,e(u,z),n(l)===null&&z===n(u)&&(w?(y(O),O=-1):w=!0,dt(x,W-ke))):(z.sortIndex=Ae,e(l,z),m||h||(m=!0,Be(T))),z},t.unstable_shouldYield=j,t.unstable_wrapCallback=function(z){var U=f;return function(){var W=f;f=U;try{return z.apply(this,arguments)}finally{f=W}}}})(wm);ym.exports=wm;var Ok=ym.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ck=F,wt=Ok;function C(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var vm=new Set,ka={};function Ur(t,e){Ns(t,e),Ns(t+"Capture",e)}function Ns(t,e){for(ka[t]=e,t=0;t<e.length;t++)vm.add(e[t])}var yn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pu=Object.prototype.hasOwnProperty,Dk=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ld={},ud={};function Pk(t){return pu.call(ud,t)?!0:pu.call(ld,t)?!1:Dk.test(t)?ud[t]=!0:(ld[t]=!0,!1)}function Fk(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Rk(t,e,n,r){if(e===null||typeof e>"u"||Fk(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Je(t,e,n,r,s,a,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=a,this.removeEmptyString=o}var ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ze[t]=new Je(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ze[e]=new Je(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ze[t]=new Je(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ze[t]=new Je(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ze[t]=new Je(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ze[t]=new Je(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ze[t]=new Je(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ze[t]=new Je(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ze[t]=new Je(t,5,!1,t.toLowerCase(),null,!1,!1)});var Wc=/[\-:]([a-z])/g;function Hc(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Wc,Hc);ze[e]=new Je(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Wc,Hc);ze[e]=new Je(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Wc,Hc);ze[e]=new Je(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ze[t]=new Je(t,1,!1,t.toLowerCase(),null,!1,!1)});ze.xlinkHref=new Je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ze[t]=new Je(t,1,!1,t.toLowerCase(),null,!0,!0)});function Gc(t,e,n,r){var s=ze.hasOwnProperty(e)?ze[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Rk(e,n,s,r)&&(n=null),r||s===null?Pk(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Sn=Ck.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Eo=Symbol.for("react.element"),Jr=Symbol.for("react.portal"),es=Symbol.for("react.fragment"),qc=Symbol.for("react.strict_mode"),fu=Symbol.for("react.profiler"),bm=Symbol.for("react.provider"),km=Symbol.for("react.context"),Kc=Symbol.for("react.forward_ref"),du=Symbol.for("react.suspense"),hu=Symbol.for("react.suspense_list"),Qc=Symbol.for("react.memo"),_n=Symbol.for("react.lazy"),Sm=Symbol.for("react.offscreen"),cd=Symbol.iterator;function Ks(t){return t===null||typeof t!="object"?null:(t=cd&&t[cd]||t["@@iterator"],typeof t=="function"?t:null)}var we=Object.assign,Cl;function sa(t){if(Cl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Cl=e&&e[1]||""}return`
`+Cl+t}var Dl=!1;function Pl(t,e){if(!t||Dl)return"";Dl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var s=u.stack.split(`
`),a=r.stack.split(`
`),o=s.length-1,i=a.length-1;1<=o&&0<=i&&s[o]!==a[i];)i--;for(;1<=o&&0<=i;o--,i--)if(s[o]!==a[i]){if(o!==1||i!==1)do if(o--,i--,0>i||s[o]!==a[i]){var l=`
`+s[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=i);break}}}finally{Dl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?sa(t):""}function Lk(t){switch(t.tag){case 5:return sa(t.type);case 16:return sa("Lazy");case 13:return sa("Suspense");case 19:return sa("SuspenseList");case 0:case 2:case 15:return t=Pl(t.type,!1),t;case 11:return t=Pl(t.type.render,!1),t;case 1:return t=Pl(t.type,!0),t;default:return""}}function mu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case es:return"Fragment";case Jr:return"Portal";case fu:return"Profiler";case qc:return"StrictMode";case du:return"Suspense";case hu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case km:return(t.displayName||"Context")+".Consumer";case bm:return(t._context.displayName||"Context")+".Provider";case Kc:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Qc:return e=t.displayName||null,e!==null?e:mu(t.type)||"Memo";case _n:e=t._payload,t=t._init;try{return mu(t(e))}catch{}}return null}function zk(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return mu(e);case 8:return e===qc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Qn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Nm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Bk(t){var e=Nm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,a=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function xo(t){t._valueTracker||(t._valueTracker=Bk(t))}function Em(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Nm(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ai(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function gu(t,e){var n=e.checked;return we({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function pd(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Qn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function xm(t,e){e=e.checked,e!=null&&Gc(t,"checked",e,!1)}function yu(t,e){xm(t,e);var n=Qn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?wu(t,e.type,n):e.hasOwnProperty("defaultValue")&&wu(t,e.type,Qn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function fd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function wu(t,e,n){(e!=="number"||ai(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var aa=Array.isArray;function ds(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Qn(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function vu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(C(91));return we({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function dd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(C(92));if(aa(n)){if(1<n.length)throw Error(C(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Qn(n)}}function Tm(t,e){var n=Qn(e.value),r=Qn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function hd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function _m(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function bu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?_m(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var To,$m=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(To=To||document.createElement("div"),To.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=To.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Sa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ca={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},jk=["Webkit","ms","Moz","O"];Object.keys(ca).forEach(function(t){jk.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ca[e]=ca[t]})});function Im(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ca.hasOwnProperty(t)&&ca[t]?(""+e).trim():e+"px"}function Am(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=Im(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var Mk=we({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ku(t,e){if(e){if(Mk[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(C(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(C(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(C(61))}if(e.style!=null&&typeof e.style!="object")throw Error(C(62))}}function Su(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nu=null;function Xc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Eu=null,hs=null,ms=null;function md(t){if(t=ro(t)){if(typeof Eu!="function")throw Error(C(280));var e=t.stateNode;e&&(e=Ji(e),Eu(t.stateNode,t.type,e))}}function Om(t){hs?ms?ms.push(t):ms=[t]:hs=t}function Cm(){if(hs){var t=hs,e=ms;if(ms=hs=null,md(t),e)for(t=0;t<e.length;t++)md(e[t])}}function Dm(t,e){return t(e)}function Pm(){}var Fl=!1;function Fm(t,e,n){if(Fl)return t(e,n);Fl=!0;try{return Dm(t,e,n)}finally{Fl=!1,(hs!==null||ms!==null)&&(Pm(),Cm())}}function Na(t,e){var n=t.stateNode;if(n===null)return null;var r=Ji(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(C(231,e,typeof n));return n}var xu=!1;if(yn)try{var Qs={};Object.defineProperty(Qs,"passive",{get:function(){xu=!0}}),window.addEventListener("test",Qs,Qs),window.removeEventListener("test",Qs,Qs)}catch{xu=!1}function Vk(t,e,n,r,s,a,o,i,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(p){this.onError(p)}}var pa=!1,oi=null,ii=!1,Tu=null,Uk={onError:function(t){pa=!0,oi=t}};function Wk(t,e,n,r,s,a,o,i,l){pa=!1,oi=null,Vk.apply(Uk,arguments)}function Hk(t,e,n,r,s,a,o,i,l){if(Wk.apply(this,arguments),pa){if(pa){var u=oi;pa=!1,oi=null}else throw Error(C(198));ii||(ii=!0,Tu=u)}}function Wr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Rm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function gd(t){if(Wr(t)!==t)throw Error(C(188))}function Gk(t){var e=t.alternate;if(!e){if(e=Wr(t),e===null)throw Error(C(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var a=s.alternate;if(a===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===n)return gd(s),t;if(a===r)return gd(s),e;a=a.sibling}throw Error(C(188))}if(n.return!==r.return)n=s,r=a;else{for(var o=!1,i=s.child;i;){if(i===n){o=!0,n=s,r=a;break}if(i===r){o=!0,r=s,n=a;break}i=i.sibling}if(!o){for(i=a.child;i;){if(i===n){o=!0,n=a,r=s;break}if(i===r){o=!0,r=a,n=s;break}i=i.sibling}if(!o)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?t:e}function Lm(t){return t=Gk(t),t!==null?zm(t):null}function zm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=zm(t);if(e!==null)return e;t=t.sibling}return null}var Bm=wt.unstable_scheduleCallback,yd=wt.unstable_cancelCallback,qk=wt.unstable_shouldYield,Kk=wt.unstable_requestPaint,Se=wt.unstable_now,Qk=wt.unstable_getCurrentPriorityLevel,Yc=wt.unstable_ImmediatePriority,jm=wt.unstable_UserBlockingPriority,li=wt.unstable_NormalPriority,Xk=wt.unstable_LowPriority,Mm=wt.unstable_IdlePriority,Qi=null,Zt=null;function Yk(t){if(Zt&&typeof Zt.onCommitFiberRoot=="function")try{Zt.onCommitFiberRoot(Qi,t,void 0,(t.current.flags&128)===128)}catch{}}var jt=Math.clz32?Math.clz32:eS,Zk=Math.log,Jk=Math.LN2;function eS(t){return t>>>=0,t===0?32:31-(Zk(t)/Jk|0)|0}var _o=64,$o=4194304;function oa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ui(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,a=t.pingedLanes,o=n&268435455;if(o!==0){var i=o&~s;i!==0?r=oa(i):(a&=o,a!==0&&(r=oa(a)))}else o=n&~s,o!==0?r=oa(o):a!==0&&(r=oa(a));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,a=e&-e,s>=a||s===16&&(a&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-jt(e),s=1<<n,r|=t[n],e&=~s;return r}function tS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,a=t.pendingLanes;0<a;){var o=31-jt(a),i=1<<o,l=s[o];l===-1?(!(i&n)||i&r)&&(s[o]=tS(i,e)):l<=e&&(t.expiredLanes|=i),a&=~i}}function _u(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Vm(){var t=_o;return _o<<=1,!(_o&4194240)&&(_o=64),t}function Rl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function to(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-jt(e),t[e]=n}function rS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-jt(n),a=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~a}}function Zc(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-jt(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var ee=0;function Um(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Wm,Jc,Hm,Gm,qm,$u=!1,Io=[],Bn=null,jn=null,Mn=null,Ea=new Map,xa=new Map,In=[],sS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wd(t,e){switch(t){case"focusin":case"focusout":Bn=null;break;case"dragenter":case"dragleave":jn=null;break;case"mouseover":case"mouseout":Mn=null;break;case"pointerover":case"pointerout":Ea.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":xa.delete(e.pointerId)}}function Xs(t,e,n,r,s,a){return t===null||t.nativeEvent!==a?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[s]},e!==null&&(e=ro(e),e!==null&&Jc(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function aS(t,e,n,r,s){switch(e){case"focusin":return Bn=Xs(Bn,t,e,n,r,s),!0;case"dragenter":return jn=Xs(jn,t,e,n,r,s),!0;case"mouseover":return Mn=Xs(Mn,t,e,n,r,s),!0;case"pointerover":var a=s.pointerId;return Ea.set(a,Xs(Ea.get(a)||null,t,e,n,r,s)),!0;case"gotpointercapture":return a=s.pointerId,xa.set(a,Xs(xa.get(a)||null,t,e,n,r,s)),!0}return!1}function Km(t){var e=kr(t.target);if(e!==null){var n=Wr(e);if(n!==null){if(e=n.tag,e===13){if(e=Rm(n),e!==null){t.blockedOn=e,qm(t.priority,function(){Hm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ho(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Iu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Nu=r,n.target.dispatchEvent(r),Nu=null}else return e=ro(n),e!==null&&Jc(e),t.blockedOn=n,!1;e.shift()}return!0}function vd(t,e,n){Ho(t)&&n.delete(e)}function oS(){$u=!1,Bn!==null&&Ho(Bn)&&(Bn=null),jn!==null&&Ho(jn)&&(jn=null),Mn!==null&&Ho(Mn)&&(Mn=null),Ea.forEach(vd),xa.forEach(vd)}function Ys(t,e){t.blockedOn===e&&(t.blockedOn=null,$u||($u=!0,wt.unstable_scheduleCallback(wt.unstable_NormalPriority,oS)))}function Ta(t){function e(s){return Ys(s,t)}if(0<Io.length){Ys(Io[0],t);for(var n=1;n<Io.length;n++){var r=Io[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Bn!==null&&Ys(Bn,t),jn!==null&&Ys(jn,t),Mn!==null&&Ys(Mn,t),Ea.forEach(e),xa.forEach(e),n=0;n<In.length;n++)r=In[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<In.length&&(n=In[0],n.blockedOn===null);)Km(n),n.blockedOn===null&&In.shift()}var gs=Sn.ReactCurrentBatchConfig,ci=!0;function iS(t,e,n,r){var s=ee,a=gs.transition;gs.transition=null;try{ee=1,ep(t,e,n,r)}finally{ee=s,gs.transition=a}}function lS(t,e,n,r){var s=ee,a=gs.transition;gs.transition=null;try{ee=4,ep(t,e,n,r)}finally{ee=s,gs.transition=a}}function ep(t,e,n,r){if(ci){var s=Iu(t,e,n,r);if(s===null)Gl(t,e,r,pi,n),wd(t,r);else if(aS(s,t,e,n,r))r.stopPropagation();else if(wd(t,r),e&4&&-1<sS.indexOf(t)){for(;s!==null;){var a=ro(s);if(a!==null&&Wm(a),a=Iu(t,e,n,r),a===null&&Gl(t,e,r,pi,n),a===s)break;s=a}s!==null&&r.stopPropagation()}else Gl(t,e,r,null,n)}}var pi=null;function Iu(t,e,n,r){if(pi=null,t=Xc(r),t=kr(t),t!==null)if(e=Wr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Rm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return pi=t,null}function Qm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Qk()){case Yc:return 1;case jm:return 4;case li:case Xk:return 16;case Mm:return 536870912;default:return 16}default:return 16}}var Dn=null,tp=null,Go=null;function Xm(){if(Go)return Go;var t,e=tp,n=e.length,r,s="value"in Dn?Dn.value:Dn.textContent,a=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[a-r];r++);return Go=s.slice(t,1<r?1-r:void 0)}function qo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ao(){return!0}function bd(){return!1}function bt(t){function e(n,r,s,a,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var i in t)t.hasOwnProperty(i)&&(n=t[i],this[i]=n?n(a):a[i]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Ao:bd,this.isPropagationStopped=bd,this}return we(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ao)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ao)},persist:function(){},isPersistent:Ao}),e}var js={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},np=bt(js),no=we({},js,{view:0,detail:0}),uS=bt(no),Ll,zl,Zs,Xi=we({},no,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Zs&&(Zs&&t.type==="mousemove"?(Ll=t.screenX-Zs.screenX,zl=t.screenY-Zs.screenY):zl=Ll=0,Zs=t),Ll)},movementY:function(t){return"movementY"in t?t.movementY:zl}}),kd=bt(Xi),cS=we({},Xi,{dataTransfer:0}),pS=bt(cS),fS=we({},no,{relatedTarget:0}),Bl=bt(fS),dS=we({},js,{animationName:0,elapsedTime:0,pseudoElement:0}),hS=bt(dS),mS=we({},js,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),gS=bt(mS),yS=we({},js,{data:0}),Sd=bt(yS),wS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=bS[t])?!!e[t]:!1}function rp(){return kS}var SS=we({},no,{key:function(t){if(t.key){var e=wS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=qo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?vS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rp,charCode:function(t){return t.type==="keypress"?qo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?qo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),NS=bt(SS),ES=we({},Xi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nd=bt(ES),xS=we({},no,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rp}),TS=bt(xS),_S=we({},js,{propertyName:0,elapsedTime:0,pseudoElement:0}),$S=bt(_S),IS=we({},Xi,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),AS=bt(IS),OS=[9,13,27,32],sp=yn&&"CompositionEvent"in window,fa=null;yn&&"documentMode"in document&&(fa=document.documentMode);var CS=yn&&"TextEvent"in window&&!fa,Ym=yn&&(!sp||fa&&8<fa&&11>=fa),Ed=" ",xd=!1;function Zm(t,e){switch(t){case"keyup":return OS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ts=!1;function DS(t,e){switch(t){case"compositionend":return Jm(e);case"keypress":return e.which!==32?null:(xd=!0,Ed);case"textInput":return t=e.data,t===Ed&&xd?null:t;default:return null}}function PS(t,e){if(ts)return t==="compositionend"||!sp&&Zm(t,e)?(t=Xm(),Go=tp=Dn=null,ts=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ym&&e.locale!=="ko"?null:e.data;default:return null}}var FS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Td(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!FS[t.type]:e==="textarea"}function eg(t,e,n,r){Om(r),e=fi(e,"onChange"),0<e.length&&(n=new np("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var da=null,_a=null;function RS(t){pg(t,0)}function Yi(t){var e=ss(t);if(Em(e))return t}function LS(t,e){if(t==="change")return e}var tg=!1;if(yn){var jl;if(yn){var Ml="oninput"in document;if(!Ml){var _d=document.createElement("div");_d.setAttribute("oninput","return;"),Ml=typeof _d.oninput=="function"}jl=Ml}else jl=!1;tg=jl&&(!document.documentMode||9<document.documentMode)}function $d(){da&&(da.detachEvent("onpropertychange",ng),_a=da=null)}function ng(t){if(t.propertyName==="value"&&Yi(_a)){var e=[];eg(e,_a,t,Xc(t)),Fm(RS,e)}}function zS(t,e,n){t==="focusin"?($d(),da=e,_a=n,da.attachEvent("onpropertychange",ng)):t==="focusout"&&$d()}function BS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Yi(_a)}function jS(t,e){if(t==="click")return Yi(e)}function MS(t,e){if(t==="input"||t==="change")return Yi(e)}function VS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Wt=typeof Object.is=="function"?Object.is:VS;function $a(t,e){if(Wt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!pu.call(e,s)||!Wt(t[s],e[s]))return!1}return!0}function Id(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ad(t,e){var n=Id(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Id(n)}}function rg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?rg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function sg(){for(var t=window,e=ai();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ai(t.document)}return e}function ap(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function US(t){var e=sg(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&rg(n.ownerDocument.documentElement,n)){if(r!==null&&ap(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,a=Math.min(r.start,s);r=r.end===void 0?a:Math.min(r.end,s),!t.extend&&a>r&&(s=r,r=a,a=s),s=Ad(n,a);var o=Ad(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),a>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var WS=yn&&"documentMode"in document&&11>=document.documentMode,ns=null,Au=null,ha=null,Ou=!1;function Od(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ou||ns==null||ns!==ai(r)||(r=ns,"selectionStart"in r&&ap(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ha&&$a(ha,r)||(ha=r,r=fi(Au,"onSelect"),0<r.length&&(e=new np("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ns)))}function Oo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var rs={animationend:Oo("Animation","AnimationEnd"),animationiteration:Oo("Animation","AnimationIteration"),animationstart:Oo("Animation","AnimationStart"),transitionend:Oo("Transition","TransitionEnd")},Vl={},ag={};yn&&(ag=document.createElement("div").style,"AnimationEvent"in window||(delete rs.animationend.animation,delete rs.animationiteration.animation,delete rs.animationstart.animation),"TransitionEvent"in window||delete rs.transitionend.transition);function Zi(t){if(Vl[t])return Vl[t];if(!rs[t])return t;var e=rs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in ag)return Vl[t]=e[n];return t}var og=Zi("animationend"),ig=Zi("animationiteration"),lg=Zi("animationstart"),ug=Zi("transitionend"),cg=new Map,Cd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sr(t,e){cg.set(t,e),Ur(e,[t])}for(var Ul=0;Ul<Cd.length;Ul++){var Wl=Cd[Ul],HS=Wl.toLowerCase(),GS=Wl[0].toUpperCase()+Wl.slice(1);sr(HS,"on"+GS)}sr(og,"onAnimationEnd");sr(ig,"onAnimationIteration");sr(lg,"onAnimationStart");sr("dblclick","onDoubleClick");sr("focusin","onFocus");sr("focusout","onBlur");sr(ug,"onTransitionEnd");Ns("onMouseEnter",["mouseout","mouseover"]);Ns("onMouseLeave",["mouseout","mouseover"]);Ns("onPointerEnter",["pointerout","pointerover"]);Ns("onPointerLeave",["pointerout","pointerover"]);Ur("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ur("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ur("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ur("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ur("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ur("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ia="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qS=new Set("cancel close invalid load scroll toggle".split(" ").concat(ia));function Dd(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Hk(r,e,void 0,t),t.currentTarget=null}function pg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var a=void 0;if(e)for(var o=r.length-1;0<=o;o--){var i=r[o],l=i.instance,u=i.currentTarget;if(i=i.listener,l!==a&&s.isPropagationStopped())break e;Dd(s,i,u),a=l}else for(o=0;o<r.length;o++){if(i=r[o],l=i.instance,u=i.currentTarget,i=i.listener,l!==a&&s.isPropagationStopped())break e;Dd(s,i,u),a=l}}}if(ii)throw t=Tu,ii=!1,Tu=null,t}function ce(t,e){var n=e[Ru];n===void 0&&(n=e[Ru]=new Set);var r=t+"__bubble";n.has(r)||(fg(e,t,2,!1),n.add(r))}function Hl(t,e,n){var r=0;e&&(r|=4),fg(n,t,r,e)}var Co="_reactListening"+Math.random().toString(36).slice(2);function Ia(t){if(!t[Co]){t[Co]=!0,vm.forEach(function(n){n!=="selectionchange"&&(qS.has(n)||Hl(n,!1,t),Hl(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Co]||(e[Co]=!0,Hl("selectionchange",!1,e))}}function fg(t,e,n,r){switch(Qm(e)){case 1:var s=iS;break;case 4:s=lS;break;default:s=ep}n=s.bind(null,e,n,t),s=void 0,!xu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function Gl(t,e,n,r,s){var a=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var i=r.stateNode.containerInfo;if(i===s||i.nodeType===8&&i.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===s||l.nodeType===8&&l.parentNode===s))return;o=o.return}for(;i!==null;){if(o=kr(i),o===null)return;if(l=o.tag,l===5||l===6){r=a=o;continue e}i=i.parentNode}}r=r.return}Fm(function(){var u=a,p=Xc(n),c=[];e:{var f=cg.get(t);if(f!==void 0){var h=np,m=t;switch(t){case"keypress":if(qo(n)===0)break e;case"keydown":case"keyup":h=NS;break;case"focusin":m="focus",h=Bl;break;case"focusout":m="blur",h=Bl;break;case"beforeblur":case"afterblur":h=Bl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=kd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=pS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=TS;break;case og:case ig:case lg:h=hS;break;case ug:h=$S;break;case"scroll":h=uS;break;case"wheel":h=AS;break;case"copy":case"cut":case"paste":h=gS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Nd}var w=(e&4)!==0,b=!w&&t==="scroll",y=w?f!==null?f+"Capture":null:f;w=[];for(var S=u,v;S!==null;){v=S;var x=v.stateNode;if(v.tag===5&&x!==null&&(v=x,y!==null&&(x=Na(S,y),x!=null&&w.push(Aa(S,x,v)))),b)break;S=S.return}0<w.length&&(f=new h(f,m,null,n,p),c.push({event:f,listeners:w}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",h=t==="mouseout"||t==="pointerout",f&&n!==Nu&&(m=n.relatedTarget||n.fromElement)&&(kr(m)||m[wn]))break e;if((h||f)&&(f=p.window===p?p:(f=p.ownerDocument)?f.defaultView||f.parentWindow:window,h?(m=n.relatedTarget||n.toElement,h=u,m=m?kr(m):null,m!==null&&(b=Wr(m),m!==b||m.tag!==5&&m.tag!==6)&&(m=null)):(h=null,m=u),h!==m)){if(w=kd,x="onMouseLeave",y="onMouseEnter",S="mouse",(t==="pointerout"||t==="pointerover")&&(w=Nd,x="onPointerLeave",y="onPointerEnter",S="pointer"),b=h==null?f:ss(h),v=m==null?f:ss(m),f=new w(x,S+"leave",h,n,p),f.target=b,f.relatedTarget=v,x=null,kr(p)===u&&(w=new w(y,S+"enter",m,n,p),w.target=v,w.relatedTarget=b,x=w),b=x,h&&m)t:{for(w=h,y=m,S=0,v=w;v;v=Kr(v))S++;for(v=0,x=y;x;x=Kr(x))v++;for(;0<S-v;)w=Kr(w),S--;for(;0<v-S;)y=Kr(y),v--;for(;S--;){if(w===y||y!==null&&w===y.alternate)break t;w=Kr(w),y=Kr(y)}w=null}else w=null;h!==null&&Pd(c,f,h,w,!1),m!==null&&b!==null&&Pd(c,b,m,w,!0)}}e:{if(f=u?ss(u):window,h=f.nodeName&&f.nodeName.toLowerCase(),h==="select"||h==="input"&&f.type==="file")var T=LS;else if(Td(f))if(tg)T=MS;else{T=BS;var _=zS}else(h=f.nodeName)&&h.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(T=jS);if(T&&(T=T(t,u))){eg(c,T,n,p);break e}_&&_(t,f,u),t==="focusout"&&(_=f._wrapperState)&&_.controlled&&f.type==="number"&&wu(f,"number",f.value)}switch(_=u?ss(u):window,t){case"focusin":(Td(_)||_.contentEditable==="true")&&(ns=_,Au=u,ha=null);break;case"focusout":ha=Au=ns=null;break;case"mousedown":Ou=!0;break;case"contextmenu":case"mouseup":case"dragend":Ou=!1,Od(c,n,p);break;case"selectionchange":if(WS)break;case"keydown":case"keyup":Od(c,n,p)}var A;if(sp)e:{switch(t){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else ts?Zm(t,n)&&(O="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(Ym&&n.locale!=="ko"&&(ts||O!=="onCompositionStart"?O==="onCompositionEnd"&&ts&&(A=Xm()):(Dn=p,tp="value"in Dn?Dn.value:Dn.textContent,ts=!0)),_=fi(u,O),0<_.length&&(O=new Sd(O,t,null,n,p),c.push({event:O,listeners:_}),A?O.data=A:(A=Jm(n),A!==null&&(O.data=A)))),(A=CS?DS(t,n):PS(t,n))&&(u=fi(u,"onBeforeInput"),0<u.length&&(p=new Sd("onBeforeInput","beforeinput",null,n,p),c.push({event:p,listeners:u}),p.data=A))}pg(c,e)})}function Aa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function fi(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,a=s.stateNode;s.tag===5&&a!==null&&(s=a,a=Na(t,n),a!=null&&r.unshift(Aa(t,a,s)),a=Na(t,e),a!=null&&r.push(Aa(t,a,s))),t=t.return}return r}function Kr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Pd(t,e,n,r,s){for(var a=e._reactName,o=[];n!==null&&n!==r;){var i=n,l=i.alternate,u=i.stateNode;if(l!==null&&l===r)break;i.tag===5&&u!==null&&(i=u,s?(l=Na(n,a),l!=null&&o.unshift(Aa(n,l,i))):s||(l=Na(n,a),l!=null&&o.push(Aa(n,l,i)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var KS=/\r\n?/g,QS=/\u0000|\uFFFD/g;function Fd(t){return(typeof t=="string"?t:""+t).replace(KS,`
`).replace(QS,"")}function Do(t,e,n){if(e=Fd(e),Fd(t)!==e&&n)throw Error(C(425))}function di(){}var Cu=null,Du=null;function Pu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Fu=typeof setTimeout=="function"?setTimeout:void 0,XS=typeof clearTimeout=="function"?clearTimeout:void 0,Rd=typeof Promise=="function"?Promise:void 0,YS=typeof queueMicrotask=="function"?queueMicrotask:typeof Rd<"u"?function(t){return Rd.resolve(null).then(t).catch(ZS)}:Fu;function ZS(t){setTimeout(function(){throw t})}function ql(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),Ta(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);Ta(e)}function Vn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ld(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ms=Math.random().toString(36).slice(2),Yt="__reactFiber$"+Ms,Oa="__reactProps$"+Ms,wn="__reactContainer$"+Ms,Ru="__reactEvents$"+Ms,JS="__reactListeners$"+Ms,eN="__reactHandles$"+Ms;function kr(t){var e=t[Yt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[wn]||n[Yt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ld(t);t!==null;){if(n=t[Yt])return n;t=Ld(t)}return e}t=n,n=t.parentNode}return null}function ro(t){return t=t[Yt]||t[wn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ss(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(C(33))}function Ji(t){return t[Oa]||null}var Lu=[],as=-1;function ar(t){return{current:t}}function pe(t){0>as||(t.current=Lu[as],Lu[as]=null,as--)}function ie(t,e){as++,Lu[as]=t.current,t.current=e}var Xn={},qe=ar(Xn),it=ar(!1),Or=Xn;function Es(t,e){var n=t.type.contextTypes;if(!n)return Xn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},a;for(a in n)s[a]=e[a];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function lt(t){return t=t.childContextTypes,t!=null}function hi(){pe(it),pe(qe)}function zd(t,e,n){if(qe.current!==Xn)throw Error(C(168));ie(qe,e),ie(it,n)}function dg(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(C(108,zk(t)||"Unknown",s));return we({},n,r)}function mi(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Xn,Or=qe.current,ie(qe,t),ie(it,it.current),!0}function Bd(t,e,n){var r=t.stateNode;if(!r)throw Error(C(169));n?(t=dg(t,e,Or),r.__reactInternalMemoizedMergedChildContext=t,pe(it),pe(qe),ie(qe,t)):pe(it),ie(it,n)}var on=null,el=!1,Kl=!1;function hg(t){on===null?on=[t]:on.push(t)}function tN(t){el=!0,hg(t)}function or(){if(!Kl&&on!==null){Kl=!0;var t=0,e=ee;try{var n=on;for(ee=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}on=null,el=!1}catch(s){throw on!==null&&(on=on.slice(t+1)),Bm(Yc,or),s}finally{ee=e,Kl=!1}}return null}var os=[],is=0,gi=null,yi=0,St=[],Nt=0,Cr=null,fn=1,dn="";function mr(t,e){os[is++]=yi,os[is++]=gi,gi=t,yi=e}function mg(t,e,n){St[Nt++]=fn,St[Nt++]=dn,St[Nt++]=Cr,Cr=t;var r=fn;t=dn;var s=32-jt(r)-1;r&=~(1<<s),n+=1;var a=32-jt(e)+s;if(30<a){var o=s-s%5;a=(r&(1<<o)-1).toString(32),r>>=o,s-=o,fn=1<<32-jt(e)+s|n<<s|r,dn=a+t}else fn=1<<a|n<<s|r,dn=t}function op(t){t.return!==null&&(mr(t,1),mg(t,1,0))}function ip(t){for(;t===gi;)gi=os[--is],os[is]=null,yi=os[--is],os[is]=null;for(;t===Cr;)Cr=St[--Nt],St[Nt]=null,dn=St[--Nt],St[Nt]=null,fn=St[--Nt],St[Nt]=null}var yt=null,mt=null,de=!1,Rt=null;function gg(t,e){var n=Et(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function jd(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,yt=t,mt=Vn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,yt=t,mt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Cr!==null?{id:fn,overflow:dn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Et(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,yt=t,mt=null,!0):!1;default:return!1}}function zu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Bu(t){if(de){var e=mt;if(e){var n=e;if(!jd(t,e)){if(zu(t))throw Error(C(418));e=Vn(n.nextSibling);var r=yt;e&&jd(t,e)?gg(r,n):(t.flags=t.flags&-4097|2,de=!1,yt=t)}}else{if(zu(t))throw Error(C(418));t.flags=t.flags&-4097|2,de=!1,yt=t}}}function Md(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;yt=t}function Po(t){if(t!==yt)return!1;if(!de)return Md(t),de=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Pu(t.type,t.memoizedProps)),e&&(e=mt)){if(zu(t))throw yg(),Error(C(418));for(;e;)gg(t,e),e=Vn(e.nextSibling)}if(Md(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(C(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){mt=Vn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}mt=null}}else mt=yt?Vn(t.stateNode.nextSibling):null;return!0}function yg(){for(var t=mt;t;)t=Vn(t.nextSibling)}function xs(){mt=yt=null,de=!1}function lp(t){Rt===null?Rt=[t]:Rt.push(t)}var nN=Sn.ReactCurrentBatchConfig;function Js(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,t));var s=r,a=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===a?e.ref:(e=function(o){var i=s.refs;o===null?delete i[a]:i[a]=o},e._stringRef=a,e)}if(typeof t!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,t))}return t}function Fo(t,e){throw t=Object.prototype.toString.call(e),Error(C(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Vd(t){var e=t._init;return e(t._payload)}function wg(t){function e(y,S){if(t){var v=y.deletions;v===null?(y.deletions=[S],y.flags|=16):v.push(S)}}function n(y,S){if(!t)return null;for(;S!==null;)e(y,S),S=S.sibling;return null}function r(y,S){for(y=new Map;S!==null;)S.key!==null?y.set(S.key,S):y.set(S.index,S),S=S.sibling;return y}function s(y,S){return y=Gn(y,S),y.index=0,y.sibling=null,y}function a(y,S,v){return y.index=v,t?(v=y.alternate,v!==null?(v=v.index,v<S?(y.flags|=2,S):v):(y.flags|=2,S)):(y.flags|=1048576,S)}function o(y){return t&&y.alternate===null&&(y.flags|=2),y}function i(y,S,v,x){return S===null||S.tag!==6?(S=tu(v,y.mode,x),S.return=y,S):(S=s(S,v),S.return=y,S)}function l(y,S,v,x){var T=v.type;return T===es?p(y,S,v.props.children,x,v.key):S!==null&&(S.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===_n&&Vd(T)===S.type)?(x=s(S,v.props),x.ref=Js(y,S,v),x.return=y,x):(x=ei(v.type,v.key,v.props,null,y.mode,x),x.ref=Js(y,S,v),x.return=y,x)}function u(y,S,v,x){return S===null||S.tag!==4||S.stateNode.containerInfo!==v.containerInfo||S.stateNode.implementation!==v.implementation?(S=nu(v,y.mode,x),S.return=y,S):(S=s(S,v.children||[]),S.return=y,S)}function p(y,S,v,x,T){return S===null||S.tag!==7?(S=_r(v,y.mode,x,T),S.return=y,S):(S=s(S,v),S.return=y,S)}function c(y,S,v){if(typeof S=="string"&&S!==""||typeof S=="number")return S=tu(""+S,y.mode,v),S.return=y,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Eo:return v=ei(S.type,S.key,S.props,null,y.mode,v),v.ref=Js(y,null,S),v.return=y,v;case Jr:return S=nu(S,y.mode,v),S.return=y,S;case _n:var x=S._init;return c(y,x(S._payload),v)}if(aa(S)||Ks(S))return S=_r(S,y.mode,v,null),S.return=y,S;Fo(y,S)}return null}function f(y,S,v,x){var T=S!==null?S.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return T!==null?null:i(y,S,""+v,x);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Eo:return v.key===T?l(y,S,v,x):null;case Jr:return v.key===T?u(y,S,v,x):null;case _n:return T=v._init,f(y,S,T(v._payload),x)}if(aa(v)||Ks(v))return T!==null?null:p(y,S,v,x,null);Fo(y,v)}return null}function h(y,S,v,x,T){if(typeof x=="string"&&x!==""||typeof x=="number")return y=y.get(v)||null,i(S,y,""+x,T);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Eo:return y=y.get(x.key===null?v:x.key)||null,l(S,y,x,T);case Jr:return y=y.get(x.key===null?v:x.key)||null,u(S,y,x,T);case _n:var _=x._init;return h(y,S,v,_(x._payload),T)}if(aa(x)||Ks(x))return y=y.get(v)||null,p(S,y,x,T,null);Fo(S,x)}return null}function m(y,S,v,x){for(var T=null,_=null,A=S,O=S=0,L=null;A!==null&&O<v.length;O++){A.index>O?(L=A,A=null):L=A.sibling;var P=f(y,A,v[O],x);if(P===null){A===null&&(A=L);break}t&&A&&P.alternate===null&&e(y,A),S=a(P,S,O),_===null?T=P:_.sibling=P,_=P,A=L}if(O===v.length)return n(y,A),de&&mr(y,O),T;if(A===null){for(;O<v.length;O++)A=c(y,v[O],x),A!==null&&(S=a(A,S,O),_===null?T=A:_.sibling=A,_=A);return de&&mr(y,O),T}for(A=r(y,A);O<v.length;O++)L=h(A,y,O,v[O],x),L!==null&&(t&&L.alternate!==null&&A.delete(L.key===null?O:L.key),S=a(L,S,O),_===null?T=L:_.sibling=L,_=L);return t&&A.forEach(function(j){return e(y,j)}),de&&mr(y,O),T}function w(y,S,v,x){var T=Ks(v);if(typeof T!="function")throw Error(C(150));if(v=T.call(v),v==null)throw Error(C(151));for(var _=T=null,A=S,O=S=0,L=null,P=v.next();A!==null&&!P.done;O++,P=v.next()){A.index>O?(L=A,A=null):L=A.sibling;var j=f(y,A,P.value,x);if(j===null){A===null&&(A=L);break}t&&A&&j.alternate===null&&e(y,A),S=a(j,S,O),_===null?T=j:_.sibling=j,_=j,A=L}if(P.done)return n(y,A),de&&mr(y,O),T;if(A===null){for(;!P.done;O++,P=v.next())P=c(y,P.value,x),P!==null&&(S=a(P,S,O),_===null?T=P:_.sibling=P,_=P);return de&&mr(y,O),T}for(A=r(y,A);!P.done;O++,P=v.next())P=h(A,y,O,P.value,x),P!==null&&(t&&P.alternate!==null&&A.delete(P.key===null?O:P.key),S=a(P,S,O),_===null?T=P:_.sibling=P,_=P);return t&&A.forEach(function(q){return e(y,q)}),de&&mr(y,O),T}function b(y,S,v,x){if(typeof v=="object"&&v!==null&&v.type===es&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Eo:e:{for(var T=v.key,_=S;_!==null;){if(_.key===T){if(T=v.type,T===es){if(_.tag===7){n(y,_.sibling),S=s(_,v.props.children),S.return=y,y=S;break e}}else if(_.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===_n&&Vd(T)===_.type){n(y,_.sibling),S=s(_,v.props),S.ref=Js(y,_,v),S.return=y,y=S;break e}n(y,_);break}else e(y,_);_=_.sibling}v.type===es?(S=_r(v.props.children,y.mode,x,v.key),S.return=y,y=S):(x=ei(v.type,v.key,v.props,null,y.mode,x),x.ref=Js(y,S,v),x.return=y,y=x)}return o(y);case Jr:e:{for(_=v.key;S!==null;){if(S.key===_)if(S.tag===4&&S.stateNode.containerInfo===v.containerInfo&&S.stateNode.implementation===v.implementation){n(y,S.sibling),S=s(S,v.children||[]),S.return=y,y=S;break e}else{n(y,S);break}else e(y,S);S=S.sibling}S=nu(v,y.mode,x),S.return=y,y=S}return o(y);case _n:return _=v._init,b(y,S,_(v._payload),x)}if(aa(v))return m(y,S,v,x);if(Ks(v))return w(y,S,v,x);Fo(y,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,S!==null&&S.tag===6?(n(y,S.sibling),S=s(S,v),S.return=y,y=S):(n(y,S),S=tu(v,y.mode,x),S.return=y,y=S),o(y)):n(y,S)}return b}var Ts=wg(!0),vg=wg(!1),wi=ar(null),vi=null,ls=null,up=null;function cp(){up=ls=vi=null}function pp(t){var e=wi.current;pe(wi),t._currentValue=e}function ju(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ys(t,e){vi=t,up=ls=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(at=!0),t.firstContext=null)}function At(t){var e=t._currentValue;if(up!==t)if(t={context:t,memoizedValue:e,next:null},ls===null){if(vi===null)throw Error(C(308));ls=t,vi.dependencies={lanes:0,firstContext:t}}else ls=ls.next=t;return e}var Sr=null;function fp(t){Sr===null?Sr=[t]:Sr.push(t)}function bg(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,fp(e)):(n.next=s.next,s.next=n),e.interleaved=n,vn(t,r)}function vn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var $n=!1;function dp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function kg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function hn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Un(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,X&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,vn(t,n)}return s=r.interleaved,s===null?(e.next=e,fp(r)):(e.next=s.next,s.next=e),r.interleaved=e,vn(t,n)}function Ko(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Zc(t,n)}}function Ud(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?s=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?s=a=e:a=a.next=e}else s=a=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function bi(t,e,n,r){var s=t.updateQueue;$n=!1;var a=s.firstBaseUpdate,o=s.lastBaseUpdate,i=s.shared.pending;if(i!==null){s.shared.pending=null;var l=i,u=l.next;l.next=null,o===null?a=u:o.next=u,o=l;var p=t.alternate;p!==null&&(p=p.updateQueue,i=p.lastBaseUpdate,i!==o&&(i===null?p.firstBaseUpdate=u:i.next=u,p.lastBaseUpdate=l))}if(a!==null){var c=s.baseState;o=0,p=u=l=null,i=a;do{var f=i.lane,h=i.eventTime;if((r&f)===f){p!==null&&(p=p.next={eventTime:h,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var m=t,w=i;switch(f=e,h=n,w.tag){case 1:if(m=w.payload,typeof m=="function"){c=m.call(h,c,f);break e}c=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=w.payload,f=typeof m=="function"?m.call(h,c,f):m,f==null)break e;c=we({},c,f);break e;case 2:$n=!0}}i.callback!==null&&i.lane!==0&&(t.flags|=64,f=s.effects,f===null?s.effects=[i]:f.push(i))}else h={eventTime:h,lane:f,tag:i.tag,payload:i.payload,callback:i.callback,next:null},p===null?(u=p=h,l=c):p=p.next=h,o|=f;if(i=i.next,i===null){if(i=s.shared.pending,i===null)break;f=i,i=f.next,f.next=null,s.lastBaseUpdate=f,s.shared.pending=null}}while(!0);if(p===null&&(l=c),s.baseState=l,s.firstBaseUpdate=u,s.lastBaseUpdate=p,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else a===null&&(s.shared.lanes=0);Pr|=o,t.lanes=o,t.memoizedState=c}}function Wd(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(C(191,s));s.call(r)}}}var so={},Jt=ar(so),Ca=ar(so),Da=ar(so);function Nr(t){if(t===so)throw Error(C(174));return t}function hp(t,e){switch(ie(Da,e),ie(Ca,t),ie(Jt,so),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:bu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=bu(e,t)}pe(Jt),ie(Jt,e)}function _s(){pe(Jt),pe(Ca),pe(Da)}function Sg(t){Nr(Da.current);var e=Nr(Jt.current),n=bu(e,t.type);e!==n&&(ie(Ca,t),ie(Jt,n))}function mp(t){Ca.current===t&&(pe(Jt),pe(Ca))}var ge=ar(0);function ki(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ql=[];function gp(){for(var t=0;t<Ql.length;t++)Ql[t]._workInProgressVersionPrimary=null;Ql.length=0}var Qo=Sn.ReactCurrentDispatcher,Xl=Sn.ReactCurrentBatchConfig,Dr=0,ye=null,Te=null,Oe=null,Si=!1,ma=!1,Pa=0,rN=0;function je(){throw Error(C(321))}function yp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Wt(t[n],e[n]))return!1;return!0}function wp(t,e,n,r,s,a){if(Dr=a,ye=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Qo.current=t===null||t.memoizedState===null?iN:lN,t=n(r,s),ma){a=0;do{if(ma=!1,Pa=0,25<=a)throw Error(C(301));a+=1,Oe=Te=null,e.updateQueue=null,Qo.current=uN,t=n(r,s)}while(ma)}if(Qo.current=Ni,e=Te!==null&&Te.next!==null,Dr=0,Oe=Te=ye=null,Si=!1,e)throw Error(C(300));return t}function vp(){var t=Pa!==0;return Pa=0,t}function Qt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Oe===null?ye.memoizedState=Oe=t:Oe=Oe.next=t,Oe}function Ot(){if(Te===null){var t=ye.alternate;t=t!==null?t.memoizedState:null}else t=Te.next;var e=Oe===null?ye.memoizedState:Oe.next;if(e!==null)Oe=e,Te=t;else{if(t===null)throw Error(C(310));Te=t,t={memoizedState:Te.memoizedState,baseState:Te.baseState,baseQueue:Te.baseQueue,queue:Te.queue,next:null},Oe===null?ye.memoizedState=Oe=t:Oe=Oe.next=t}return Oe}function Fa(t,e){return typeof e=="function"?e(t):e}function Yl(t){var e=Ot(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=Te,s=r.baseQueue,a=n.pending;if(a!==null){if(s!==null){var o=s.next;s.next=a.next,a.next=o}r.baseQueue=s=a,n.pending=null}if(s!==null){a=s.next,r=r.baseState;var i=o=null,l=null,u=a;do{var p=u.lane;if((Dr&p)===p)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var c={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(i=l=c,o=r):l=l.next=c,ye.lanes|=p,Pr|=p}u=u.next}while(u!==null&&u!==a);l===null?o=r:l.next=i,Wt(r,e.memoizedState)||(at=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do a=s.lane,ye.lanes|=a,Pr|=a,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Zl(t){var e=Ot(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,a=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do a=t(a,o.action),o=o.next;while(o!==s);Wt(a,e.memoizedState)||(at=!0),e.memoizedState=a,e.baseQueue===null&&(e.baseState=a),n.lastRenderedState=a}return[a,r]}function Ng(){}function Eg(t,e){var n=ye,r=Ot(),s=e(),a=!Wt(r.memoizedState,s);if(a&&(r.memoizedState=s,at=!0),r=r.queue,bp(_g.bind(null,n,r,t),[t]),r.getSnapshot!==e||a||Oe!==null&&Oe.memoizedState.tag&1){if(n.flags|=2048,Ra(9,Tg.bind(null,n,r,s,e),void 0,null),De===null)throw Error(C(349));Dr&30||xg(n,e,s)}return s}function xg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ye.updateQueue,e===null?(e={lastEffect:null,stores:null},ye.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Tg(t,e,n,r){e.value=n,e.getSnapshot=r,$g(e)&&Ig(t)}function _g(t,e,n){return n(function(){$g(e)&&Ig(t)})}function $g(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Wt(t,n)}catch{return!0}}function Ig(t){var e=vn(t,1);e!==null&&Mt(e,t,1,-1)}function Hd(t){var e=Qt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fa,lastRenderedState:t},e.queue=t,t=t.dispatch=oN.bind(null,ye,t),[e.memoizedState,t]}function Ra(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ye.updateQueue,e===null?(e={lastEffect:null,stores:null},ye.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Ag(){return Ot().memoizedState}function Xo(t,e,n,r){var s=Qt();ye.flags|=t,s.memoizedState=Ra(1|e,n,void 0,r===void 0?null:r)}function tl(t,e,n,r){var s=Ot();r=r===void 0?null:r;var a=void 0;if(Te!==null){var o=Te.memoizedState;if(a=o.destroy,r!==null&&yp(r,o.deps)){s.memoizedState=Ra(e,n,a,r);return}}ye.flags|=t,s.memoizedState=Ra(1|e,n,a,r)}function Gd(t,e){return Xo(8390656,8,t,e)}function bp(t,e){return tl(2048,8,t,e)}function Og(t,e){return tl(4,2,t,e)}function Cg(t,e){return tl(4,4,t,e)}function Dg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Pg(t,e,n){return n=n!=null?n.concat([t]):null,tl(4,4,Dg.bind(null,e,t),n)}function kp(){}function Fg(t,e){var n=Ot();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&yp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Rg(t,e){var n=Ot();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&yp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Lg(t,e,n){return Dr&21?(Wt(n,e)||(n=Vm(),ye.lanes|=n,Pr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,at=!0),t.memoizedState=n)}function sN(t,e){var n=ee;ee=n!==0&&4>n?n:4,t(!0);var r=Xl.transition;Xl.transition={};try{t(!1),e()}finally{ee=n,Xl.transition=r}}function zg(){return Ot().memoizedState}function aN(t,e,n){var r=Hn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Bg(t))jg(e,n);else if(n=bg(t,e,n,r),n!==null){var s=Xe();Mt(n,t,r,s),Mg(n,e,r)}}function oN(t,e,n){var r=Hn(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Bg(t))jg(e,s);else{var a=t.alternate;if(t.lanes===0&&(a===null||a.lanes===0)&&(a=e.lastRenderedReducer,a!==null))try{var o=e.lastRenderedState,i=a(o,n);if(s.hasEagerState=!0,s.eagerState=i,Wt(i,o)){var l=e.interleaved;l===null?(s.next=s,fp(e)):(s.next=l.next,l.next=s),e.interleaved=s;return}}catch{}finally{}n=bg(t,e,s,r),n!==null&&(s=Xe(),Mt(n,t,r,s),Mg(n,e,r))}}function Bg(t){var e=t.alternate;return t===ye||e!==null&&e===ye}function jg(t,e){ma=Si=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Mg(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Zc(t,n)}}var Ni={readContext:At,useCallback:je,useContext:je,useEffect:je,useImperativeHandle:je,useInsertionEffect:je,useLayoutEffect:je,useMemo:je,useReducer:je,useRef:je,useState:je,useDebugValue:je,useDeferredValue:je,useTransition:je,useMutableSource:je,useSyncExternalStore:je,useId:je,unstable_isNewReconciler:!1},iN={readContext:At,useCallback:function(t,e){return Qt().memoizedState=[t,e===void 0?null:e],t},useContext:At,useEffect:Gd,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Xo(4194308,4,Dg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Xo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Xo(4,2,t,e)},useMemo:function(t,e){var n=Qt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Qt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=aN.bind(null,ye,t),[r.memoizedState,t]},useRef:function(t){var e=Qt();return t={current:t},e.memoizedState=t},useState:Hd,useDebugValue:kp,useDeferredValue:function(t){return Qt().memoizedState=t},useTransition:function(){var t=Hd(!1),e=t[0];return t=sN.bind(null,t[1]),Qt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ye,s=Qt();if(de){if(n===void 0)throw Error(C(407));n=n()}else{if(n=e(),De===null)throw Error(C(349));Dr&30||xg(r,e,n)}s.memoizedState=n;var a={value:n,getSnapshot:e};return s.queue=a,Gd(_g.bind(null,r,a,t),[t]),r.flags|=2048,Ra(9,Tg.bind(null,r,a,n,e),void 0,null),n},useId:function(){var t=Qt(),e=De.identifierPrefix;if(de){var n=dn,r=fn;n=(r&~(1<<32-jt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Pa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=rN++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},lN={readContext:At,useCallback:Fg,useContext:At,useEffect:bp,useImperativeHandle:Pg,useInsertionEffect:Og,useLayoutEffect:Cg,useMemo:Rg,useReducer:Yl,useRef:Ag,useState:function(){return Yl(Fa)},useDebugValue:kp,useDeferredValue:function(t){var e=Ot();return Lg(e,Te.memoizedState,t)},useTransition:function(){var t=Yl(Fa)[0],e=Ot().memoizedState;return[t,e]},useMutableSource:Ng,useSyncExternalStore:Eg,useId:zg,unstable_isNewReconciler:!1},uN={readContext:At,useCallback:Fg,useContext:At,useEffect:bp,useImperativeHandle:Pg,useInsertionEffect:Og,useLayoutEffect:Cg,useMemo:Rg,useReducer:Zl,useRef:Ag,useState:function(){return Zl(Fa)},useDebugValue:kp,useDeferredValue:function(t){var e=Ot();return Te===null?e.memoizedState=t:Lg(e,Te.memoizedState,t)},useTransition:function(){var t=Zl(Fa)[0],e=Ot().memoizedState;return[t,e]},useMutableSource:Ng,useSyncExternalStore:Eg,useId:zg,unstable_isNewReconciler:!1};function Pt(t,e){if(t&&t.defaultProps){e=we({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Mu(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:we({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var nl={isMounted:function(t){return(t=t._reactInternals)?Wr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Xe(),s=Hn(t),a=hn(r,s);a.payload=e,n!=null&&(a.callback=n),e=Un(t,a,s),e!==null&&(Mt(e,t,s,r),Ko(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Xe(),s=Hn(t),a=hn(r,s);a.tag=1,a.payload=e,n!=null&&(a.callback=n),e=Un(t,a,s),e!==null&&(Mt(e,t,s,r),Ko(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Xe(),r=Hn(t),s=hn(n,r);s.tag=2,e!=null&&(s.callback=e),e=Un(t,s,r),e!==null&&(Mt(e,t,r,n),Ko(e,t,r))}};function qd(t,e,n,r,s,a,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,a,o):e.prototype&&e.prototype.isPureReactComponent?!$a(n,r)||!$a(s,a):!0}function Vg(t,e,n){var r=!1,s=Xn,a=e.contextType;return typeof a=="object"&&a!==null?a=At(a):(s=lt(e)?Or:qe.current,r=e.contextTypes,a=(r=r!=null)?Es(t,s):Xn),e=new e(n,a),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=nl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=a),e}function Kd(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&nl.enqueueReplaceState(e,e.state,null)}function Vu(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},dp(t);var a=e.contextType;typeof a=="object"&&a!==null?s.context=At(a):(a=lt(e)?Or:qe.current,s.context=Es(t,a)),s.state=t.memoizedState,a=e.getDerivedStateFromProps,typeof a=="function"&&(Mu(t,e,a,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&nl.enqueueReplaceState(s,s.state,null),bi(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function $s(t,e){try{var n="",r=e;do n+=Lk(r),r=r.return;while(r);var s=n}catch(a){s=`
Error generating stack: `+a.message+`
`+a.stack}return{value:t,source:e,stack:s,digest:null}}function Jl(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Uu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var cN=typeof WeakMap=="function"?WeakMap:Map;function Ug(t,e,n){n=hn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){xi||(xi=!0,Ju=r),Uu(t,e)},n}function Wg(t,e,n){n=hn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){Uu(t,e)}}var a=t.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Uu(t,e),typeof r!="function"&&(Wn===null?Wn=new Set([this]):Wn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Qd(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new cN;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=EN.bind(null,t,e,n),e.then(t,t))}function Xd(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Yd(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=hn(-1,1),e.tag=2,Un(n,e,1))),n.lanes|=1),t)}var pN=Sn.ReactCurrentOwner,at=!1;function Qe(t,e,n,r){e.child=t===null?vg(e,null,n,r):Ts(e,t.child,n,r)}function Zd(t,e,n,r,s){n=n.render;var a=e.ref;return ys(e,s),r=wp(t,e,n,r,a,s),n=vp(),t!==null&&!at?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,bn(t,e,s)):(de&&n&&op(e),e.flags|=1,Qe(t,e,r,s),e.child)}function Jd(t,e,n,r,s){if(t===null){var a=n.type;return typeof a=="function"&&!Ip(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=a,Hg(t,e,a,r,s)):(t=ei(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(a=t.child,!(t.lanes&s)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:$a,n(o,r)&&t.ref===e.ref)return bn(t,e,s)}return e.flags|=1,t=Gn(a,r),t.ref=e.ref,t.return=e,e.child=t}function Hg(t,e,n,r,s){if(t!==null){var a=t.memoizedProps;if($a(a,r)&&t.ref===e.ref)if(at=!1,e.pendingProps=r=a,(t.lanes&s)!==0)t.flags&131072&&(at=!0);else return e.lanes=t.lanes,bn(t,e,s)}return Wu(t,e,n,r,s)}function Gg(t,e,n){var r=e.pendingProps,s=r.children,a=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ie(cs,ht),ht|=n;else{if(!(n&1073741824))return t=a!==null?a.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ie(cs,ht),ht|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,ie(cs,ht),ht|=r}else a!==null?(r=a.baseLanes|n,e.memoizedState=null):r=n,ie(cs,ht),ht|=r;return Qe(t,e,s,n),e.child}function qg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Wu(t,e,n,r,s){var a=lt(n)?Or:qe.current;return a=Es(e,a),ys(e,s),n=wp(t,e,n,r,a,s),r=vp(),t!==null&&!at?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,bn(t,e,s)):(de&&r&&op(e),e.flags|=1,Qe(t,e,n,s),e.child)}function eh(t,e,n,r,s){if(lt(n)){var a=!0;mi(e)}else a=!1;if(ys(e,s),e.stateNode===null)Yo(t,e),Vg(e,n,r),Vu(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,i=e.memoizedProps;o.props=i;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=At(u):(u=lt(n)?Or:qe.current,u=Es(e,u));var p=n.getDerivedStateFromProps,c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(i!==r||l!==u)&&Kd(e,o,r,u),$n=!1;var f=e.memoizedState;o.state=f,bi(e,r,o,s),l=e.memoizedState,i!==r||f!==l||it.current||$n?(typeof p=="function"&&(Mu(e,n,p,r),l=e.memoizedState),(i=$n||qd(e,n,i,r,f,l,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=i):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,kg(t,e),i=e.memoizedProps,u=e.type===e.elementType?i:Pt(e.type,i),o.props=u,c=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=At(l):(l=lt(n)?Or:qe.current,l=Es(e,l));var h=n.getDerivedStateFromProps;(p=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(i!==c||f!==l)&&Kd(e,o,r,l),$n=!1,f=e.memoizedState,o.state=f,bi(e,r,o,s);var m=e.memoizedState;i!==c||f!==m||it.current||$n?(typeof h=="function"&&(Mu(e,n,h,r),m=e.memoizedState),(u=$n||qd(e,n,u,r,f,m,l)||!1)?(p||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,m,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,m,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||i===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||i===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=m),o.props=r,o.state=m,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||i===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||i===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Hu(t,e,n,r,a,s)}function Hu(t,e,n,r,s,a){qg(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&Bd(e,n,!1),bn(t,e,a);r=e.stateNode,pN.current=e;var i=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ts(e,t.child,null,a),e.child=Ts(e,null,i,a)):Qe(t,e,i,a),e.memoizedState=r.state,s&&Bd(e,n,!0),e.child}function Kg(t){var e=t.stateNode;e.pendingContext?zd(t,e.pendingContext,e.pendingContext!==e.context):e.context&&zd(t,e.context,!1),hp(t,e.containerInfo)}function th(t,e,n,r,s){return xs(),lp(s),e.flags|=256,Qe(t,e,n,r),e.child}var Gu={dehydrated:null,treeContext:null,retryLane:0};function qu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Qg(t,e,n){var r=e.pendingProps,s=ge.current,a=!1,o=(e.flags&128)!==0,i;if((i=o)||(i=t!==null&&t.memoizedState===null?!1:(s&2)!==0),i?(a=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),ie(ge,s&1),t===null)return Bu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,a?(r=e.mode,a=e.child,o={mode:"hidden",children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=al(o,r,0,null),t=_r(t,r,n,null),a.return=e,t.return=e,a.sibling=t,e.child=a,e.child.memoizedState=qu(n),e.memoizedState=Gu,t):Sp(e,o));if(s=t.memoizedState,s!==null&&(i=s.dehydrated,i!==null))return fN(t,e,o,r,i,s,n);if(a){a=r.fallback,o=e.mode,s=t.child,i=s.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Gn(s,l),r.subtreeFlags=s.subtreeFlags&14680064),i!==null?a=Gn(i,a):(a=_r(a,o,n,null),a.flags|=2),a.return=e,r.return=e,r.sibling=a,e.child=r,r=a,a=e.child,o=t.child.memoizedState,o=o===null?qu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=t.childLanes&~n,e.memoizedState=Gu,r}return a=t.child,t=a.sibling,r=Gn(a,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Sp(t,e){return e=al({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ro(t,e,n,r){return r!==null&&lp(r),Ts(e,t.child,null,n),t=Sp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function fN(t,e,n,r,s,a,o){if(n)return e.flags&256?(e.flags&=-257,r=Jl(Error(C(422))),Ro(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(a=r.fallback,s=e.mode,r=al({mode:"visible",children:r.children},s,0,null),a=_r(a,s,o,null),a.flags|=2,r.return=e,a.return=e,r.sibling=a,e.child=r,e.mode&1&&Ts(e,t.child,null,o),e.child.memoizedState=qu(o),e.memoizedState=Gu,a);if(!(e.mode&1))return Ro(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var i=r.dgst;return r=i,a=Error(C(419)),r=Jl(a,r,void 0),Ro(t,e,o,r)}if(i=(o&t.childLanes)!==0,at||i){if(r=De,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==a.retryLane&&(a.retryLane=s,vn(t,s),Mt(r,t,s,-1))}return $p(),r=Jl(Error(C(421))),Ro(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=xN.bind(null,t),s._reactRetry=e,null):(t=a.treeContext,mt=Vn(s.nextSibling),yt=e,de=!0,Rt=null,t!==null&&(St[Nt++]=fn,St[Nt++]=dn,St[Nt++]=Cr,fn=t.id,dn=t.overflow,Cr=e),e=Sp(e,r.children),e.flags|=4096,e)}function nh(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),ju(t.return,e,n)}function eu(t,e,n,r,s){var a=t.memoizedState;a===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(a.isBackwards=e,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=s)}function Xg(t,e,n){var r=e.pendingProps,s=r.revealOrder,a=r.tail;if(Qe(t,e,r.children,n),r=ge.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&nh(t,n,e);else if(t.tag===19)nh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ie(ge,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&ki(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),eu(e,!1,s,n,a);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&ki(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}eu(e,!0,n,null,a);break;case"together":eu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Yo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function bn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Pr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(C(153));if(e.child!==null){for(t=e.child,n=Gn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Gn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function dN(t,e,n){switch(e.tag){case 3:Kg(e),xs();break;case 5:Sg(e);break;case 1:lt(e.type)&&mi(e);break;case 4:hp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;ie(wi,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ie(ge,ge.current&1),e.flags|=128,null):n&e.child.childLanes?Qg(t,e,n):(ie(ge,ge.current&1),t=bn(t,e,n),t!==null?t.sibling:null);ie(ge,ge.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Xg(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),ie(ge,ge.current),r)break;return null;case 22:case 23:return e.lanes=0,Gg(t,e,n)}return bn(t,e,n)}var Yg,Ku,Zg,Jg;Yg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ku=function(){};Zg=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,Nr(Jt.current);var a=null;switch(n){case"input":s=gu(t,s),r=gu(t,r),a=[];break;case"select":s=we({},s,{value:void 0}),r=we({},r,{value:void 0}),a=[];break;case"textarea":s=vu(t,s),r=vu(t,r),a=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=di)}ku(n,r);var o;n=null;for(u in s)if(!r.hasOwnProperty(u)&&s.hasOwnProperty(u)&&s[u]!=null)if(u==="style"){var i=s[u];for(o in i)i.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ka.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var l=r[u];if(i=s!=null?s[u]:void 0,r.hasOwnProperty(u)&&l!==i&&(l!=null||i!=null))if(u==="style")if(i){for(o in i)!i.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&i[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(a||(a=[]),a.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,i=i?i.__html:void 0,l!=null&&i!==l&&(a=a||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ka.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ce("scroll",t),a||i===l||(a=[])):(a=a||[]).push(u,l))}n&&(a=a||[]).push("style",n);var u=a;(e.updateQueue=u)&&(e.flags|=4)}};Jg=function(t,e,n,r){n!==r&&(e.flags|=4)};function ea(t,e){if(!de)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Me(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function hN(t,e,n){var r=e.pendingProps;switch(ip(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Me(e),null;case 1:return lt(e.type)&&hi(),Me(e),null;case 3:return r=e.stateNode,_s(),pe(it),pe(qe),gp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Po(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Rt!==null&&(nc(Rt),Rt=null))),Ku(t,e),Me(e),null;case 5:mp(e);var s=Nr(Da.current);if(n=e.type,t!==null&&e.stateNode!=null)Zg(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(C(166));return Me(e),null}if(t=Nr(Jt.current),Po(e)){r=e.stateNode,n=e.type;var a=e.memoizedProps;switch(r[Yt]=e,r[Oa]=a,t=(e.mode&1)!==0,n){case"dialog":ce("cancel",r),ce("close",r);break;case"iframe":case"object":case"embed":ce("load",r);break;case"video":case"audio":for(s=0;s<ia.length;s++)ce(ia[s],r);break;case"source":ce("error",r);break;case"img":case"image":case"link":ce("error",r),ce("load",r);break;case"details":ce("toggle",r);break;case"input":pd(r,a),ce("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},ce("invalid",r);break;case"textarea":dd(r,a),ce("invalid",r)}ku(n,a),s=null;for(var o in a)if(a.hasOwnProperty(o)){var i=a[o];o==="children"?typeof i=="string"?r.textContent!==i&&(a.suppressHydrationWarning!==!0&&Do(r.textContent,i,t),s=["children",i]):typeof i=="number"&&r.textContent!==""+i&&(a.suppressHydrationWarning!==!0&&Do(r.textContent,i,t),s=["children",""+i]):ka.hasOwnProperty(o)&&i!=null&&o==="onScroll"&&ce("scroll",r)}switch(n){case"input":xo(r),fd(r,a,!0);break;case"textarea":xo(r),hd(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=di)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=_m(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Yt]=e,t[Oa]=r,Yg(t,e,!1,!1),e.stateNode=t;e:{switch(o=Su(n,r),n){case"dialog":ce("cancel",t),ce("close",t),s=r;break;case"iframe":case"object":case"embed":ce("load",t),s=r;break;case"video":case"audio":for(s=0;s<ia.length;s++)ce(ia[s],t);s=r;break;case"source":ce("error",t),s=r;break;case"img":case"image":case"link":ce("error",t),ce("load",t),s=r;break;case"details":ce("toggle",t),s=r;break;case"input":pd(t,r),s=gu(t,r),ce("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=we({},r,{value:void 0}),ce("invalid",t);break;case"textarea":dd(t,r),s=vu(t,r),ce("invalid",t);break;default:s=r}ku(n,s),i=s;for(a in i)if(i.hasOwnProperty(a)){var l=i[a];a==="style"?Am(t,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&$m(t,l)):a==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Sa(t,l):typeof l=="number"&&Sa(t,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(ka.hasOwnProperty(a)?l!=null&&a==="onScroll"&&ce("scroll",t):l!=null&&Gc(t,a,l,o))}switch(n){case"input":xo(t),fd(t,r,!1);break;case"textarea":xo(t),hd(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Qn(r.value));break;case"select":t.multiple=!!r.multiple,a=r.value,a!=null?ds(t,!!r.multiple,a,!1):r.defaultValue!=null&&ds(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=di)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Me(e),null;case 6:if(t&&e.stateNode!=null)Jg(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(C(166));if(n=Nr(Da.current),Nr(Jt.current),Po(e)){if(r=e.stateNode,n=e.memoizedProps,r[Yt]=e,(a=r.nodeValue!==n)&&(t=yt,t!==null))switch(t.tag){case 3:Do(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Do(r.nodeValue,n,(t.mode&1)!==0)}a&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Yt]=e,e.stateNode=r}return Me(e),null;case 13:if(pe(ge),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(de&&mt!==null&&e.mode&1&&!(e.flags&128))yg(),xs(),e.flags|=98560,a=!1;else if(a=Po(e),r!==null&&r.dehydrated!==null){if(t===null){if(!a)throw Error(C(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(C(317));a[Yt]=e}else xs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Me(e),a=!1}else Rt!==null&&(nc(Rt),Rt=null),a=!0;if(!a)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ge.current&1?Ie===0&&(Ie=3):$p())),e.updateQueue!==null&&(e.flags|=4),Me(e),null);case 4:return _s(),Ku(t,e),t===null&&Ia(e.stateNode.containerInfo),Me(e),null;case 10:return pp(e.type._context),Me(e),null;case 17:return lt(e.type)&&hi(),Me(e),null;case 19:if(pe(ge),a=e.memoizedState,a===null)return Me(e),null;if(r=(e.flags&128)!==0,o=a.rendering,o===null)if(r)ea(a,!1);else{if(Ie!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ki(t),o!==null){for(e.flags|=128,ea(a,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)a=n,t=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=t,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,t=o.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ie(ge,ge.current&1|2),e.child}t=t.sibling}a.tail!==null&&Se()>Is&&(e.flags|=128,r=!0,ea(a,!1),e.lanes=4194304)}else{if(!r)if(t=ki(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ea(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!de)return Me(e),null}else 2*Se()-a.renderingStartTime>Is&&n!==1073741824&&(e.flags|=128,r=!0,ea(a,!1),e.lanes=4194304);a.isBackwards?(o.sibling=e.child,e.child=o):(n=a.last,n!==null?n.sibling=o:e.child=o,a.last=o)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=Se(),e.sibling=null,n=ge.current,ie(ge,r?n&1|2:n&1),e):(Me(e),null);case 22:case 23:return _p(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?ht&1073741824&&(Me(e),e.subtreeFlags&6&&(e.flags|=8192)):Me(e),null;case 24:return null;case 25:return null}throw Error(C(156,e.tag))}function mN(t,e){switch(ip(e),e.tag){case 1:return lt(e.type)&&hi(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return _s(),pe(it),pe(qe),gp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return mp(e),null;case 13:if(pe(ge),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(C(340));xs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return pe(ge),null;case 4:return _s(),null;case 10:return pp(e.type._context),null;case 22:case 23:return _p(),null;case 24:return null;default:return null}}var Lo=!1,Ue=!1,gN=typeof WeakSet=="function"?WeakSet:Set,B=null;function us(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ve(t,e,r)}else n.current=null}function Qu(t,e,n){try{n()}catch(r){ve(t,e,r)}}var rh=!1;function yN(t,e){if(Cu=ci,t=sg(),ap(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,i=-1,l=-1,u=0,p=0,c=t,f=null;t:for(;;){for(var h;c!==n||s!==0&&c.nodeType!==3||(i=o+s),c!==a||r!==0&&c.nodeType!==3||(l=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(h=c.firstChild)!==null;)f=c,c=h;for(;;){if(c===t)break t;if(f===n&&++u===s&&(i=o),f===a&&++p===r&&(l=o),(h=c.nextSibling)!==null)break;c=f,f=c.parentNode}c=h}n=i===-1||l===-1?null:{start:i,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Du={focusedElem:t,selectionRange:n},ci=!1,B=e;B!==null;)if(e=B,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,B=t;else for(;B!==null;){e=B;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var w=m.memoizedProps,b=m.memoizedState,y=e.stateNode,S=y.getSnapshotBeforeUpdate(e.elementType===e.type?w:Pt(e.type,w),b);y.__reactInternalSnapshotBeforeUpdate=S}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(x){ve(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,B=t;break}B=e.return}return m=rh,rh=!1,m}function ga(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var a=s.destroy;s.destroy=void 0,a!==void 0&&Qu(e,n,a)}s=s.next}while(s!==r)}}function rl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Xu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function ey(t){var e=t.alternate;e!==null&&(t.alternate=null,ey(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Yt],delete e[Oa],delete e[Ru],delete e[JS],delete e[eN])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ty(t){return t.tag===5||t.tag===3||t.tag===4}function sh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ty(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Yu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=di));else if(r!==4&&(t=t.child,t!==null))for(Yu(t,e,n),t=t.sibling;t!==null;)Yu(t,e,n),t=t.sibling}function Zu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Zu(t,e,n),t=t.sibling;t!==null;)Zu(t,e,n),t=t.sibling}var Fe=null,Ft=!1;function xn(t,e,n){for(n=n.child;n!==null;)ny(t,e,n),n=n.sibling}function ny(t,e,n){if(Zt&&typeof Zt.onCommitFiberUnmount=="function")try{Zt.onCommitFiberUnmount(Qi,n)}catch{}switch(n.tag){case 5:Ue||us(n,e);case 6:var r=Fe,s=Ft;Fe=null,xn(t,e,n),Fe=r,Ft=s,Fe!==null&&(Ft?(t=Fe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Fe.removeChild(n.stateNode));break;case 18:Fe!==null&&(Ft?(t=Fe,n=n.stateNode,t.nodeType===8?ql(t.parentNode,n):t.nodeType===1&&ql(t,n),Ta(t)):ql(Fe,n.stateNode));break;case 4:r=Fe,s=Ft,Fe=n.stateNode.containerInfo,Ft=!0,xn(t,e,n),Fe=r,Ft=s;break;case 0:case 11:case 14:case 15:if(!Ue&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var a=s,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&Qu(n,e,o),s=s.next}while(s!==r)}xn(t,e,n);break;case 1:if(!Ue&&(us(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(i){ve(n,e,i)}xn(t,e,n);break;case 21:xn(t,e,n);break;case 22:n.mode&1?(Ue=(r=Ue)||n.memoizedState!==null,xn(t,e,n),Ue=r):xn(t,e,n);break;default:xn(t,e,n)}}function ah(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new gN),e.forEach(function(r){var s=TN.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Dt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var a=t,o=e,i=o;e:for(;i!==null;){switch(i.tag){case 5:Fe=i.stateNode,Ft=!1;break e;case 3:Fe=i.stateNode.containerInfo,Ft=!0;break e;case 4:Fe=i.stateNode.containerInfo,Ft=!0;break e}i=i.return}if(Fe===null)throw Error(C(160));ny(a,o,s),Fe=null,Ft=!1;var l=s.alternate;l!==null&&(l.return=null),s.return=null}catch(u){ve(s,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)ry(e,t),e=e.sibling}function ry(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Dt(e,t),Kt(t),r&4){try{ga(3,t,t.return),rl(3,t)}catch(w){ve(t,t.return,w)}try{ga(5,t,t.return)}catch(w){ve(t,t.return,w)}}break;case 1:Dt(e,t),Kt(t),r&512&&n!==null&&us(n,n.return);break;case 5:if(Dt(e,t),Kt(t),r&512&&n!==null&&us(n,n.return),t.flags&32){var s=t.stateNode;try{Sa(s,"")}catch(w){ve(t,t.return,w)}}if(r&4&&(s=t.stateNode,s!=null)){var a=t.memoizedProps,o=n!==null?n.memoizedProps:a,i=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{i==="input"&&a.type==="radio"&&a.name!=null&&xm(s,a),Su(i,o);var u=Su(i,a);for(o=0;o<l.length;o+=2){var p=l[o],c=l[o+1];p==="style"?Am(s,c):p==="dangerouslySetInnerHTML"?$m(s,c):p==="children"?Sa(s,c):Gc(s,p,c,u)}switch(i){case"input":yu(s,a);break;case"textarea":Tm(s,a);break;case"select":var f=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!a.multiple;var h=a.value;h!=null?ds(s,!!a.multiple,h,!1):f!==!!a.multiple&&(a.defaultValue!=null?ds(s,!!a.multiple,a.defaultValue,!0):ds(s,!!a.multiple,a.multiple?[]:"",!1))}s[Oa]=a}catch(w){ve(t,t.return,w)}}break;case 6:if(Dt(e,t),Kt(t),r&4){if(t.stateNode===null)throw Error(C(162));s=t.stateNode,a=t.memoizedProps;try{s.nodeValue=a}catch(w){ve(t,t.return,w)}}break;case 3:if(Dt(e,t),Kt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ta(e.containerInfo)}catch(w){ve(t,t.return,w)}break;case 4:Dt(e,t),Kt(t);break;case 13:Dt(e,t),Kt(t),s=t.child,s.flags&8192&&(a=s.memoizedState!==null,s.stateNode.isHidden=a,!a||s.alternate!==null&&s.alternate.memoizedState!==null||(xp=Se())),r&4&&ah(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(Ue=(u=Ue)||p,Dt(e,t),Ue=u):Dt(e,t),Kt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!p&&t.mode&1)for(B=t,p=t.child;p!==null;){for(c=B=p;B!==null;){switch(f=B,h=f.child,f.tag){case 0:case 11:case 14:case 15:ga(4,f,f.return);break;case 1:us(f,f.return);var m=f.stateNode;if(typeof m.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(w){ve(r,n,w)}}break;case 5:us(f,f.return);break;case 22:if(f.memoizedState!==null){ih(c);continue}}h!==null?(h.return=f,B=h):ih(c)}p=p.sibling}e:for(p=null,c=t;;){if(c.tag===5){if(p===null){p=c;try{s=c.stateNode,u?(a=s.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(i=c.stateNode,l=c.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,i.style.display=Im("display",o))}catch(w){ve(t,t.return,w)}}}else if(c.tag===6){if(p===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(w){ve(t,t.return,w)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;p===c&&(p=null),c=c.return}p===c&&(p=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Dt(e,t),Kt(t),r&4&&ah(t);break;case 21:break;default:Dt(e,t),Kt(t)}}function Kt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(ty(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Sa(s,""),r.flags&=-33);var a=sh(t);Zu(t,a,s);break;case 3:case 4:var o=r.stateNode.containerInfo,i=sh(t);Yu(t,i,o);break;default:throw Error(C(161))}}catch(l){ve(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function wN(t,e,n){B=t,sy(t)}function sy(t,e,n){for(var r=(t.mode&1)!==0;B!==null;){var s=B,a=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||Lo;if(!o){var i=s.alternate,l=i!==null&&i.memoizedState!==null||Ue;i=Lo;var u=Ue;if(Lo=o,(Ue=l)&&!u)for(B=s;B!==null;)o=B,l=o.child,o.tag===22&&o.memoizedState!==null?lh(s):l!==null?(l.return=o,B=l):lh(s);for(;a!==null;)B=a,sy(a),a=a.sibling;B=s,Lo=i,Ue=u}oh(t)}else s.subtreeFlags&8772&&a!==null?(a.return=s,B=a):oh(t)}}function oh(t){for(;B!==null;){var e=B;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ue||rl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ue)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:Pt(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=e.updateQueue;a!==null&&Wd(e,a,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Wd(e,o,n)}break;case 5:var i=e.stateNode;if(n===null&&e.flags&4){n=i;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var c=p.dehydrated;c!==null&&Ta(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}Ue||e.flags&512&&Xu(e)}catch(f){ve(e,e.return,f)}}if(e===t){B=null;break}if(n=e.sibling,n!==null){n.return=e.return,B=n;break}B=e.return}}function ih(t){for(;B!==null;){var e=B;if(e===t){B=null;break}var n=e.sibling;if(n!==null){n.return=e.return,B=n;break}B=e.return}}function lh(t){for(;B!==null;){var e=B;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{rl(4,e)}catch(l){ve(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(l){ve(e,s,l)}}var a=e.return;try{Xu(e)}catch(l){ve(e,a,l)}break;case 5:var o=e.return;try{Xu(e)}catch(l){ve(e,o,l)}}}catch(l){ve(e,e.return,l)}if(e===t){B=null;break}var i=e.sibling;if(i!==null){i.return=e.return,B=i;break}B=e.return}}var vN=Math.ceil,Ei=Sn.ReactCurrentDispatcher,Np=Sn.ReactCurrentOwner,$t=Sn.ReactCurrentBatchConfig,X=0,De=null,xe=null,Re=0,ht=0,cs=ar(0),Ie=0,La=null,Pr=0,sl=0,Ep=0,ya=null,st=null,xp=0,Is=1/0,an=null,xi=!1,Ju=null,Wn=null,zo=!1,Pn=null,Ti=0,wa=0,ec=null,Zo=-1,Jo=0;function Xe(){return X&6?Se():Zo!==-1?Zo:Zo=Se()}function Hn(t){return t.mode&1?X&2&&Re!==0?Re&-Re:nN.transition!==null?(Jo===0&&(Jo=Vm()),Jo):(t=ee,t!==0||(t=window.event,t=t===void 0?16:Qm(t.type)),t):1}function Mt(t,e,n,r){if(50<wa)throw wa=0,ec=null,Error(C(185));to(t,n,r),(!(X&2)||t!==De)&&(t===De&&(!(X&2)&&(sl|=n),Ie===4&&An(t,Re)),ut(t,r),n===1&&X===0&&!(e.mode&1)&&(Is=Se()+500,el&&or()))}function ut(t,e){var n=t.callbackNode;nS(t,e);var r=ui(t,t===De?Re:0);if(r===0)n!==null&&yd(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&yd(n),e===1)t.tag===0?tN(uh.bind(null,t)):hg(uh.bind(null,t)),YS(function(){!(X&6)&&or()}),n=null;else{switch(Um(r)){case 1:n=Yc;break;case 4:n=jm;break;case 16:n=li;break;case 536870912:n=Mm;break;default:n=li}n=fy(n,ay.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function ay(t,e){if(Zo=-1,Jo=0,X&6)throw Error(C(327));var n=t.callbackNode;if(ws()&&t.callbackNode!==n)return null;var r=ui(t,t===De?Re:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=_i(t,r);else{e=r;var s=X;X|=2;var a=iy();(De!==t||Re!==e)&&(an=null,Is=Se()+500,Tr(t,e));do try{SN();break}catch(i){oy(t,i)}while(!0);cp(),Ei.current=a,X=s,xe!==null?e=0:(De=null,Re=0,e=Ie)}if(e!==0){if(e===2&&(s=_u(t),s!==0&&(r=s,e=tc(t,s))),e===1)throw n=La,Tr(t,0),An(t,r),ut(t,Se()),n;if(e===6)An(t,r);else{if(s=t.current.alternate,!(r&30)&&!bN(s)&&(e=_i(t,r),e===2&&(a=_u(t),a!==0&&(r=a,e=tc(t,a))),e===1))throw n=La,Tr(t,0),An(t,r),ut(t,Se()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(C(345));case 2:gr(t,st,an);break;case 3:if(An(t,r),(r&130023424)===r&&(e=xp+500-Se(),10<e)){if(ui(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){Xe(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=Fu(gr.bind(null,t,st,an),e);break}gr(t,st,an);break;case 4:if(An(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-jt(r);a=1<<o,o=e[o],o>s&&(s=o),r&=~a}if(r=s,r=Se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*vN(r/1960))-r,10<r){t.timeoutHandle=Fu(gr.bind(null,t,st,an),r);break}gr(t,st,an);break;case 5:gr(t,st,an);break;default:throw Error(C(329))}}}return ut(t,Se()),t.callbackNode===n?ay.bind(null,t):null}function tc(t,e){var n=ya;return t.current.memoizedState.isDehydrated&&(Tr(t,e).flags|=256),t=_i(t,e),t!==2&&(e=st,st=n,e!==null&&nc(e)),t}function nc(t){st===null?st=t:st.push.apply(st,t)}function bN(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],a=s.getSnapshot;s=s.value;try{if(!Wt(a(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function An(t,e){for(e&=~Ep,e&=~sl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-jt(e),r=1<<n;t[n]=-1,e&=~r}}function uh(t){if(X&6)throw Error(C(327));ws();var e=ui(t,0);if(!(e&1))return ut(t,Se()),null;var n=_i(t,e);if(t.tag!==0&&n===2){var r=_u(t);r!==0&&(e=r,n=tc(t,r))}if(n===1)throw n=La,Tr(t,0),An(t,e),ut(t,Se()),n;if(n===6)throw Error(C(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,gr(t,st,an),ut(t,Se()),null}function Tp(t,e){var n=X;X|=1;try{return t(e)}finally{X=n,X===0&&(Is=Se()+500,el&&or())}}function Fr(t){Pn!==null&&Pn.tag===0&&!(X&6)&&ws();var e=X;X|=1;var n=$t.transition,r=ee;try{if($t.transition=null,ee=1,t)return t()}finally{ee=r,$t.transition=n,X=e,!(X&6)&&or()}}function _p(){ht=cs.current,pe(cs)}function Tr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,XS(n)),xe!==null)for(n=xe.return;n!==null;){var r=n;switch(ip(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&hi();break;case 3:_s(),pe(it),pe(qe),gp();break;case 5:mp(r);break;case 4:_s();break;case 13:pe(ge);break;case 19:pe(ge);break;case 10:pp(r.type._context);break;case 22:case 23:_p()}n=n.return}if(De=t,xe=t=Gn(t.current,null),Re=ht=e,Ie=0,La=null,Ep=sl=Pr=0,st=ya=null,Sr!==null){for(e=0;e<Sr.length;e++)if(n=Sr[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=s,r.next=o}n.pending=r}Sr=null}return t}function oy(t,e){do{var n=xe;try{if(cp(),Qo.current=Ni,Si){for(var r=ye.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Si=!1}if(Dr=0,Oe=Te=ye=null,ma=!1,Pa=0,Np.current=null,n===null||n.return===null){Ie=1,La=e,xe=null;break}e:{var a=t,o=n.return,i=n,l=e;if(e=Re,i.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,p=i,c=p.tag;if(!(p.mode&1)&&(c===0||c===11||c===15)){var f=p.alternate;f?(p.updateQueue=f.updateQueue,p.memoizedState=f.memoizedState,p.lanes=f.lanes):(p.updateQueue=null,p.memoizedState=null)}var h=Xd(o);if(h!==null){h.flags&=-257,Yd(h,o,i,a,e),h.mode&1&&Qd(a,u,e),e=h,l=u;var m=e.updateQueue;if(m===null){var w=new Set;w.add(l),e.updateQueue=w}else m.add(l);break e}else{if(!(e&1)){Qd(a,u,e),$p();break e}l=Error(C(426))}}else if(de&&i.mode&1){var b=Xd(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Yd(b,o,i,a,e),lp($s(l,i));break e}}a=l=$s(l,i),Ie!==4&&(Ie=2),ya===null?ya=[a]:ya.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,e&=-e,a.lanes|=e;var y=Ug(a,l,e);Ud(a,y);break e;case 1:i=l;var S=a.type,v=a.stateNode;if(!(a.flags&128)&&(typeof S.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Wn===null||!Wn.has(v)))){a.flags|=65536,e&=-e,a.lanes|=e;var x=Wg(a,i,e);Ud(a,x);break e}}a=a.return}while(a!==null)}uy(n)}catch(T){e=T,xe===n&&n!==null&&(xe=n=n.return);continue}break}while(!0)}function iy(){var t=Ei.current;return Ei.current=Ni,t===null?Ni:t}function $p(){(Ie===0||Ie===3||Ie===2)&&(Ie=4),De===null||!(Pr&268435455)&&!(sl&268435455)||An(De,Re)}function _i(t,e){var n=X;X|=2;var r=iy();(De!==t||Re!==e)&&(an=null,Tr(t,e));do try{kN();break}catch(s){oy(t,s)}while(!0);if(cp(),X=n,Ei.current=r,xe!==null)throw Error(C(261));return De=null,Re=0,Ie}function kN(){for(;xe!==null;)ly(xe)}function SN(){for(;xe!==null&&!qk();)ly(xe)}function ly(t){var e=py(t.alternate,t,ht);t.memoizedProps=t.pendingProps,e===null?uy(t):xe=e,Np.current=null}function uy(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=mN(n,e),n!==null){n.flags&=32767,xe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ie=6,xe=null;return}}else if(n=hN(n,e,ht),n!==null){xe=n;return}if(e=e.sibling,e!==null){xe=e;return}xe=e=t}while(e!==null);Ie===0&&(Ie=5)}function gr(t,e,n){var r=ee,s=$t.transition;try{$t.transition=null,ee=1,NN(t,e,n,r)}finally{$t.transition=s,ee=r}return null}function NN(t,e,n,r){do ws();while(Pn!==null);if(X&6)throw Error(C(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(C(177));t.callbackNode=null,t.callbackPriority=0;var a=n.lanes|n.childLanes;if(rS(t,a),t===De&&(xe=De=null,Re=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||zo||(zo=!0,fy(li,function(){return ws(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=$t.transition,$t.transition=null;var o=ee;ee=1;var i=X;X|=4,Np.current=null,yN(t,n),ry(n,t),US(Du),ci=!!Cu,Du=Cu=null,t.current=n,wN(n),Kk(),X=i,ee=o,$t.transition=a}else t.current=n;if(zo&&(zo=!1,Pn=t,Ti=s),a=t.pendingLanes,a===0&&(Wn=null),Yk(n.stateNode),ut(t,Se()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(xi)throw xi=!1,t=Ju,Ju=null,t;return Ti&1&&t.tag!==0&&ws(),a=t.pendingLanes,a&1?t===ec?wa++:(wa=0,ec=t):wa=0,or(),null}function ws(){if(Pn!==null){var t=Um(Ti),e=$t.transition,n=ee;try{if($t.transition=null,ee=16>t?16:t,Pn===null)var r=!1;else{if(t=Pn,Pn=null,Ti=0,X&6)throw Error(C(331));var s=X;for(X|=4,B=t.current;B!==null;){var a=B,o=a.child;if(B.flags&16){var i=a.deletions;if(i!==null){for(var l=0;l<i.length;l++){var u=i[l];for(B=u;B!==null;){var p=B;switch(p.tag){case 0:case 11:case 15:ga(8,p,a)}var c=p.child;if(c!==null)c.return=p,B=c;else for(;B!==null;){p=B;var f=p.sibling,h=p.return;if(ey(p),p===u){B=null;break}if(f!==null){f.return=h,B=f;break}B=h}}}var m=a.alternate;if(m!==null){var w=m.child;if(w!==null){m.child=null;do{var b=w.sibling;w.sibling=null,w=b}while(w!==null)}}B=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,B=o;else e:for(;B!==null;){if(a=B,a.flags&2048)switch(a.tag){case 0:case 11:case 15:ga(9,a,a.return)}var y=a.sibling;if(y!==null){y.return=a.return,B=y;break e}B=a.return}}var S=t.current;for(B=S;B!==null;){o=B;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,B=v;else e:for(o=S;B!==null;){if(i=B,i.flags&2048)try{switch(i.tag){case 0:case 11:case 15:rl(9,i)}}catch(T){ve(i,i.return,T)}if(i===o){B=null;break e}var x=i.sibling;if(x!==null){x.return=i.return,B=x;break e}B=i.return}}if(X=s,or(),Zt&&typeof Zt.onPostCommitFiberRoot=="function")try{Zt.onPostCommitFiberRoot(Qi,t)}catch{}r=!0}return r}finally{ee=n,$t.transition=e}}return!1}function ch(t,e,n){e=$s(n,e),e=Ug(t,e,1),t=Un(t,e,1),e=Xe(),t!==null&&(to(t,1,e),ut(t,e))}function ve(t,e,n){if(t.tag===3)ch(t,t,n);else for(;e!==null;){if(e.tag===3){ch(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Wn===null||!Wn.has(r))){t=$s(n,t),t=Wg(e,t,1),e=Un(e,t,1),t=Xe(),e!==null&&(to(e,1,t),ut(e,t));break}}e=e.return}}function EN(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Xe(),t.pingedLanes|=t.suspendedLanes&n,De===t&&(Re&n)===n&&(Ie===4||Ie===3&&(Re&130023424)===Re&&500>Se()-xp?Tr(t,0):Ep|=n),ut(t,e)}function cy(t,e){e===0&&(t.mode&1?(e=$o,$o<<=1,!($o&130023424)&&($o=4194304)):e=1);var n=Xe();t=vn(t,e),t!==null&&(to(t,e,n),ut(t,n))}function xN(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),cy(t,n)}function TN(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(e),cy(t,n)}var py;py=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||it.current)at=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return at=!1,dN(t,e,n);at=!!(t.flags&131072)}else at=!1,de&&e.flags&1048576&&mg(e,yi,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Yo(t,e),t=e.pendingProps;var s=Es(e,qe.current);ys(e,n),s=wp(null,e,r,t,s,n);var a=vp();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,lt(r)?(a=!0,mi(e)):a=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,dp(e),s.updater=nl,e.stateNode=s,s._reactInternals=e,Vu(e,r,t,n),e=Hu(null,e,r,!0,a,n)):(e.tag=0,de&&a&&op(e),Qe(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Yo(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=$N(r),t=Pt(r,t),s){case 0:e=Wu(null,e,r,t,n);break e;case 1:e=eh(null,e,r,t,n);break e;case 11:e=Zd(null,e,r,t,n);break e;case 14:e=Jd(null,e,r,Pt(r.type,t),n);break e}throw Error(C(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Pt(r,s),Wu(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Pt(r,s),eh(t,e,r,s,n);case 3:e:{if(Kg(e),t===null)throw Error(C(387));r=e.pendingProps,a=e.memoizedState,s=a.element,kg(t,e),bi(e,r,null,n);var o=e.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=a,e.memoizedState=a,e.flags&256){s=$s(Error(C(423)),e),e=th(t,e,r,n,s);break e}else if(r!==s){s=$s(Error(C(424)),e),e=th(t,e,r,n,s);break e}else for(mt=Vn(e.stateNode.containerInfo.firstChild),yt=e,de=!0,Rt=null,n=vg(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(xs(),r===s){e=bn(t,e,n);break e}Qe(t,e,r,n)}e=e.child}return e;case 5:return Sg(e),t===null&&Bu(e),r=e.type,s=e.pendingProps,a=t!==null?t.memoizedProps:null,o=s.children,Pu(r,s)?o=null:a!==null&&Pu(r,a)&&(e.flags|=32),qg(t,e),Qe(t,e,o,n),e.child;case 6:return t===null&&Bu(e),null;case 13:return Qg(t,e,n);case 4:return hp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ts(e,null,r,n):Qe(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Pt(r,s),Zd(t,e,r,s,n);case 7:return Qe(t,e,e.pendingProps,n),e.child;case 8:return Qe(t,e,e.pendingProps.children,n),e.child;case 12:return Qe(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,a=e.memoizedProps,o=s.value,ie(wi,r._currentValue),r._currentValue=o,a!==null)if(Wt(a.value,o)){if(a.children===s.children&&!it.current){e=bn(t,e,n);break e}}else for(a=e.child,a!==null&&(a.return=e);a!==null;){var i=a.dependencies;if(i!==null){o=a.child;for(var l=i.firstContext;l!==null;){if(l.context===r){if(a.tag===1){l=hn(-1,n&-n),l.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?l.next=l:(l.next=p.next,p.next=l),u.pending=l}}a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),ju(a.return,n,e),i.lanes|=n;break}l=l.next}}else if(a.tag===10)o=a.type===e.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(C(341));o.lanes|=n,i=o.alternate,i!==null&&(i.lanes|=n),ju(o,n,e),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===e){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}Qe(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,ys(e,n),s=At(s),r=r(s),e.flags|=1,Qe(t,e,r,n),e.child;case 14:return r=e.type,s=Pt(r,e.pendingProps),s=Pt(r.type,s),Jd(t,e,r,s,n);case 15:return Hg(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Pt(r,s),Yo(t,e),e.tag=1,lt(r)?(t=!0,mi(e)):t=!1,ys(e,n),Vg(e,r,s),Vu(e,r,s,n),Hu(null,e,r,!0,t,n);case 19:return Xg(t,e,n);case 22:return Gg(t,e,n)}throw Error(C(156,e.tag))};function fy(t,e){return Bm(t,e)}function _N(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Et(t,e,n,r){return new _N(t,e,n,r)}function Ip(t){return t=t.prototype,!(!t||!t.isReactComponent)}function $N(t){if(typeof t=="function")return Ip(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Kc)return 11;if(t===Qc)return 14}return 2}function Gn(t,e){var n=t.alternate;return n===null?(n=Et(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ei(t,e,n,r,s,a){var o=2;if(r=t,typeof t=="function")Ip(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case es:return _r(n.children,s,a,e);case qc:o=8,s|=8;break;case fu:return t=Et(12,n,e,s|2),t.elementType=fu,t.lanes=a,t;case du:return t=Et(13,n,e,s),t.elementType=du,t.lanes=a,t;case hu:return t=Et(19,n,e,s),t.elementType=hu,t.lanes=a,t;case Sm:return al(n,s,a,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case bm:o=10;break e;case km:o=9;break e;case Kc:o=11;break e;case Qc:o=14;break e;case _n:o=16,r=null;break e}throw Error(C(130,t==null?t:typeof t,""))}return e=Et(o,n,e,s),e.elementType=t,e.type=r,e.lanes=a,e}function _r(t,e,n,r){return t=Et(7,t,r,e),t.lanes=n,t}function al(t,e,n,r){return t=Et(22,t,r,e),t.elementType=Sm,t.lanes=n,t.stateNode={isHidden:!1},t}function tu(t,e,n){return t=Et(6,t,null,e),t.lanes=n,t}function nu(t,e,n){return e=Et(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function IN(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Rl(0),this.expirationTimes=Rl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rl(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Ap(t,e,n,r,s,a,o,i,l){return t=new IN(t,e,n,i,l),e===1?(e=1,a===!0&&(e|=8)):e=0,a=Et(3,null,null,e),t.current=a,a.stateNode=t,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},dp(a),t}function AN(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Jr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function dy(t){if(!t)return Xn;t=t._reactInternals;e:{if(Wr(t)!==t||t.tag!==1)throw Error(C(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(lt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(C(171))}if(t.tag===1){var n=t.type;if(lt(n))return dg(t,n,e)}return e}function hy(t,e,n,r,s,a,o,i,l){return t=Ap(n,r,!0,t,s,a,o,i,l),t.context=dy(null),n=t.current,r=Xe(),s=Hn(n),a=hn(r,s),a.callback=e??null,Un(n,a,s),t.current.lanes=s,to(t,s,r),ut(t,r),t}function ol(t,e,n,r){var s=e.current,a=Xe(),o=Hn(s);return n=dy(n),e.context===null?e.context=n:e.pendingContext=n,e=hn(a,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Un(s,e,o),t!==null&&(Mt(t,s,o,a),Ko(t,s,o)),o}function $i(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ph(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Op(t,e){ph(t,e),(t=t.alternate)&&ph(t,e)}function ON(){return null}var my=typeof reportError=="function"?reportError:function(t){console.error(t)};function Cp(t){this._internalRoot=t}il.prototype.render=Cp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(C(409));ol(t,e,null,null)};il.prototype.unmount=Cp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Fr(function(){ol(null,t,null,null)}),e[wn]=null}};function il(t){this._internalRoot=t}il.prototype.unstable_scheduleHydration=function(t){if(t){var e=Gm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<In.length&&e!==0&&e<In[n].priority;n++);In.splice(n,0,t),n===0&&Km(t)}};function Dp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ll(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function fh(){}function CN(t,e,n,r,s){if(s){if(typeof r=="function"){var a=r;r=function(){var u=$i(o);a.call(u)}}var o=hy(e,r,t,0,null,!1,!1,"",fh);return t._reactRootContainer=o,t[wn]=o.current,Ia(t.nodeType===8?t.parentNode:t),Fr(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var i=r;r=function(){var u=$i(l);i.call(u)}}var l=Ap(t,0,!1,null,null,!1,!1,"",fh);return t._reactRootContainer=l,t[wn]=l.current,Ia(t.nodeType===8?t.parentNode:t),Fr(function(){ol(e,l,n,r)}),l}function ul(t,e,n,r,s){var a=n._reactRootContainer;if(a){var o=a;if(typeof s=="function"){var i=s;s=function(){var l=$i(o);i.call(l)}}ol(e,o,t,s)}else o=CN(n,e,t,s,r);return $i(o)}Wm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=oa(e.pendingLanes);n!==0&&(Zc(e,n|1),ut(e,Se()),!(X&6)&&(Is=Se()+500,or()))}break;case 13:Fr(function(){var r=vn(t,1);if(r!==null){var s=Xe();Mt(r,t,1,s)}}),Op(t,1)}};Jc=function(t){if(t.tag===13){var e=vn(t,134217728);if(e!==null){var n=Xe();Mt(e,t,134217728,n)}Op(t,134217728)}};Hm=function(t){if(t.tag===13){var e=Hn(t),n=vn(t,e);if(n!==null){var r=Xe();Mt(n,t,e,r)}Op(t,e)}};Gm=function(){return ee};qm=function(t,e){var n=ee;try{return ee=t,e()}finally{ee=n}};Eu=function(t,e,n){switch(e){case"input":if(yu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=Ji(r);if(!s)throw Error(C(90));Em(r),yu(r,s)}}}break;case"textarea":Tm(t,n);break;case"select":e=n.value,e!=null&&ds(t,!!n.multiple,e,!1)}};Dm=Tp;Pm=Fr;var DN={usingClientEntryPoint:!1,Events:[ro,ss,Ji,Om,Cm,Tp]},ta={findFiberByHostInstance:kr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},PN={bundleType:ta.bundleType,version:ta.version,rendererPackageName:ta.rendererPackageName,rendererConfig:ta.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Sn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Lm(t),t===null?null:t.stateNode},findFiberByHostInstance:ta.findFiberByHostInstance||ON,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bo.isDisabled&&Bo.supportsFiber)try{Qi=Bo.inject(PN),Zt=Bo}catch{}}vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=DN;vt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Dp(e))throw Error(C(200));return AN(t,e,null,n)};vt.createRoot=function(t,e){if(!Dp(t))throw Error(C(299));var n=!1,r="",s=my;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Ap(t,1,!1,null,null,n,!1,r,s),t[wn]=e.current,Ia(t.nodeType===8?t.parentNode:t),new Cp(e)};vt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(C(188)):(t=Object.keys(t).join(","),Error(C(268,t)));return t=Lm(e),t=t===null?null:t.stateNode,t};vt.flushSync=function(t){return Fr(t)};vt.hydrate=function(t,e,n){if(!ll(e))throw Error(C(200));return ul(null,t,e,!0,n)};vt.hydrateRoot=function(t,e,n){if(!Dp(t))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,s=!1,a="",o=my;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=hy(e,null,t,1,n??null,s,!1,a,o),t[wn]=e.current,Ia(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new il(e)};vt.render=function(t,e,n){if(!ll(e))throw Error(C(200));return ul(null,t,e,!1,n)};vt.unmountComponentAtNode=function(t){if(!ll(t))throw Error(C(40));return t._reactRootContainer?(Fr(function(){ul(null,null,t,!1,function(){t._reactRootContainer=null,t[wn]=null})}),!0):!1};vt.unstable_batchedUpdates=Tp;vt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ll(n))throw Error(C(200));if(t==null||t._reactInternals===void 0)throw Error(C(38));return ul(t,e,n,!1,r)};vt.version="18.3.1-next-f1338f8080-20240426";function gy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gy)}catch(t){console.error(t)}}gy(),gm.exports=vt;var FN=gm.exports,yy,dh=FN;yy=dh.createRoot,dh.hydrateRoot;/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function za(){return za=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},za.apply(this,arguments)}var Fn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Fn||(Fn={}));const hh="popstate";function RN(t){t===void 0&&(t={});function e(r,s){let{pathname:a,search:o,hash:i}=r.location;return rc("",{pathname:a,search:o,hash:i},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(r,s){return typeof s=="string"?s:Ii(s)}return zN(e,n,null,t)}function Ne(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function wy(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function LN(){return Math.random().toString(36).substr(2,8)}function mh(t,e){return{usr:t.state,key:t.key,idx:e}}function rc(t,e,n,r){return n===void 0&&(n=null),za({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Vs(e):e,{state:n,key:e&&e.key||r||LN()})}function Ii(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Vs(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function zN(t,e,n,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:a=!1}=r,o=s.history,i=Fn.Pop,l=null,u=p();u==null&&(u=0,o.replaceState(za({},o.state,{idx:u}),""));function p(){return(o.state||{idx:null}).idx}function c(){i=Fn.Pop;let b=p(),y=b==null?null:b-u;u=b,l&&l({action:i,location:w.location,delta:y})}function f(b,y){i=Fn.Push;let S=rc(w.location,b,y);u=p()+1;let v=mh(S,u),x=w.createHref(S);try{o.pushState(v,"",x)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;s.location.assign(x)}a&&l&&l({action:i,location:w.location,delta:1})}function h(b,y){i=Fn.Replace;let S=rc(w.location,b,y);u=p();let v=mh(S,u),x=w.createHref(S);o.replaceState(v,"",x),a&&l&&l({action:i,location:w.location,delta:0})}function m(b){let y=s.location.origin!=="null"?s.location.origin:s.location.href,S=typeof b=="string"?b:Ii(b);return S=S.replace(/ $/,"%20"),Ne(y,"No window.location.(origin|href) available to create URL for href: "+S),new URL(S,y)}let w={get action(){return i},get location(){return t(s,o)},listen(b){if(l)throw new Error("A history only accepts one active listener");return s.addEventListener(hh,c),l=b,()=>{s.removeEventListener(hh,c),l=null}},createHref(b){return e(s,b)},createURL:m,encodeLocation(b){let y=m(b);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:f,replace:h,go(b){return o.go(b)}};return w}var gh;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(gh||(gh={}));function BN(t,e,n){return n===void 0&&(n="/"),jN(t,e,n,!1)}function jN(t,e,n,r){let s=typeof e=="string"?Vs(e):e,a=Pp(s.pathname||"/",n);if(a==null)return null;let o=vy(t);MN(o);let i=null;for(let l=0;i==null&&l<o.length;++l){let u=ZN(a);i=XN(o[l],u,r)}return i}function vy(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let s=(a,o,i)=>{let l={relativePath:i===void 0?a.path||"":i,caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};l.relativePath.startsWith("/")&&(Ne(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=qn([r,l.relativePath]),p=n.concat(l);a.children&&a.children.length>0&&(Ne(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),vy(a.children,e,p,u)),!(a.path==null&&!a.index)&&e.push({path:u,score:KN(u,a.index),routesMeta:p})};return t.forEach((a,o)=>{var i;if(a.path===""||!((i=a.path)!=null&&i.includes("?")))s(a,o);else for(let l of by(a.path))s(a,o,l)}),e}function by(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,s=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return s?[a,""]:[a];let o=by(r.join("/")),i=[];return i.push(...o.map(l=>l===""?a:[a,l].join("/"))),s&&i.push(...o),i.map(l=>t.startsWith("/")&&l===""?"/":l)}function MN(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:QN(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const VN=/^:[\w-]+$/,UN=3,WN=2,HN=1,GN=10,qN=-2,yh=t=>t==="*";function KN(t,e){let n=t.split("/"),r=n.length;return n.some(yh)&&(r+=qN),e&&(r+=WN),n.filter(s=>!yh(s)).reduce((s,a)=>s+(VN.test(a)?UN:a===""?HN:GN),r)}function QN(t,e){return t.length===e.length&&t.slice(0,-1).every((r,s)=>r===e[s])?t[t.length-1]-e[e.length-1]:0}function XN(t,e,n){let{routesMeta:r}=t,s={},a="/",o=[];for(let i=0;i<r.length;++i){let l=r[i],u=i===r.length-1,p=a==="/"?e:e.slice(a.length)||"/",c=wh({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},p),f=l.route;if(!c&&u&&n&&!r[r.length-1].route.index&&(c=wh({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},p)),!c)return null;Object.assign(s,c.params),o.push({params:s,pathname:qn([a,c.pathname]),pathnameBase:nE(qn([a,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(a=qn([a,c.pathnameBase]))}return o}function wh(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=YN(t.path,t.caseSensitive,t.end),s=e.match(n);if(!s)return null;let a=s[0],o=a.replace(/(.)\/+$/,"$1"),i=s.slice(1);return{params:r.reduce((u,p,c)=>{let{paramName:f,isOptional:h}=p;if(f==="*"){let w=i[c]||"";o=a.slice(0,a.length-w.length).replace(/(.)\/+$/,"$1")}const m=i[c];return h&&!m?u[f]=void 0:u[f]=(m||"").replace(/%2F/g,"/"),u},{}),pathname:a,pathnameBase:o,pattern:t}}function YN(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),wy(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],s="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,i,l)=>(r.push({paramName:i,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),s+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":t!==""&&t!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),r]}function ZN(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return wy(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Pp(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function JN(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:s=""}=typeof t=="string"?Vs(t):t;return{pathname:n?n.startsWith("/")?n:eE(n,e):e,search:rE(r),hash:sE(s)}}function eE(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function ru(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function tE(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Fp(t,e){let n=tE(t);return e?n.map((r,s)=>s===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Rp(t,e,n,r){r===void 0&&(r=!1);let s;typeof t=="string"?s=Vs(t):(s=za({},t),Ne(!s.pathname||!s.pathname.includes("?"),ru("?","pathname","search",s)),Ne(!s.pathname||!s.pathname.includes("#"),ru("#","pathname","hash",s)),Ne(!s.search||!s.search.includes("#"),ru("#","search","hash",s)));let a=t===""||s.pathname==="",o=a?"/":s.pathname,i;if(o==null)i=n;else{let c=e.length-1;if(!r&&o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),c-=1;s.pathname=f.join("/")}i=c>=0?e[c]:"/"}let l=JN(s,i),u=o&&o!=="/"&&o.endsWith("/"),p=(a||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||p)&&(l.pathname+="/"),l}const qn=t=>t.join("/").replace(/\/\/+/g,"/"),nE=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),rE=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,sE=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function aE(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const ky=["post","put","patch","delete"];new Set(ky);const oE=["get",...ky];new Set(oE);/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ba(){return Ba=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ba.apply(this,arguments)}const Lp=F.createContext(null),iE=F.createContext(null),ir=F.createContext(null),cl=F.createContext(null),lr=F.createContext({outlet:null,matches:[],isDataRoute:!1}),Sy=F.createContext(null);function lE(t,e){let{relative:n}=e===void 0?{}:e;Us()||Ne(!1);let{basename:r,navigator:s}=F.useContext(ir),{hash:a,pathname:o,search:i}=Ey(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:qn([r,o])),s.createHref({pathname:l,search:i,hash:a})}function Us(){return F.useContext(cl)!=null}function ao(){return Us()||Ne(!1),F.useContext(cl).location}function Ny(t){F.useContext(ir).static||F.useLayoutEffect(t)}function pl(){let{isDataRoute:t}=F.useContext(lr);return t?kE():uE()}function uE(){Us()||Ne(!1);let t=F.useContext(Lp),{basename:e,future:n,navigator:r}=F.useContext(ir),{matches:s}=F.useContext(lr),{pathname:a}=ao(),o=JSON.stringify(Fp(s,n.v7_relativeSplatPath)),i=F.useRef(!1);return Ny(()=>{i.current=!0}),F.useCallback(function(u,p){if(p===void 0&&(p={}),!i.current)return;if(typeof u=="number"){r.go(u);return}let c=Rp(u,JSON.parse(o),a,p.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:qn([e,c.pathname])),(p.replace?r.replace:r.push)(c,p.state,p)},[e,r,o,a,t])}function Ey(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=F.useContext(ir),{matches:s}=F.useContext(lr),{pathname:a}=ao(),o=JSON.stringify(Fp(s,r.v7_relativeSplatPath));return F.useMemo(()=>Rp(t,JSON.parse(o),a,n==="path"),[t,o,a,n])}function cE(t,e){return pE(t,e)}function pE(t,e,n,r){Us()||Ne(!1);let{navigator:s}=F.useContext(ir),{matches:a}=F.useContext(lr),o=a[a.length-1],i=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=ao(),p;if(e){var c;let b=typeof e=="string"?Vs(e):e;l==="/"||(c=b.pathname)!=null&&c.startsWith(l)||Ne(!1),p=b}else p=u;let f=p.pathname||"/",h=f;if(l!=="/"){let b=l.replace(/^\//,"").split("/");h="/"+f.replace(/^\//,"").split("/").slice(b.length).join("/")}let m=BN(t,{pathname:h}),w=gE(m&&m.map(b=>Object.assign({},b,{params:Object.assign({},i,b.params),pathname:qn([l,s.encodeLocation?s.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?l:qn([l,s.encodeLocation?s.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),a,n,r);return e&&w?F.createElement(cl.Provider,{value:{location:Ba({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:Fn.Pop}},w):w}function fE(){let t=bE(),e=aE(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return F.createElement(F.Fragment,null,F.createElement("h2",null,"Unexpected Application Error!"),F.createElement("h3",{style:{fontStyle:"italic"}},e),n?F.createElement("pre",{style:s},n):null,null)}const dE=F.createElement(fE,null);class hE extends F.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?F.createElement(lr.Provider,{value:this.props.routeContext},F.createElement(Sy.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function mE(t){let{routeContext:e,match:n,children:r}=t,s=F.useContext(Lp);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),F.createElement(lr.Provider,{value:e},r)}function gE(t,e,n,r){var s;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var a;if(!n)return null;if(n.errors)t=n.matches;else if((a=r)!=null&&a.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,i=(s=n)==null?void 0:s.errors;if(i!=null){let p=o.findIndex(c=>c.route.id&&(i==null?void 0:i[c.route.id])!==void 0);p>=0||Ne(!1),o=o.slice(0,Math.min(o.length,p+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let p=0;p<o.length;p++){let c=o[p];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=p),c.route.id){let{loaderData:f,errors:h}=n,m=c.route.loader&&f[c.route.id]===void 0&&(!h||h[c.route.id]===void 0);if(c.route.lazy||m){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((p,c,f)=>{let h,m=!1,w=null,b=null;n&&(h=i&&c.route.id?i[c.route.id]:void 0,w=c.route.errorElement||dE,l&&(u<0&&f===0?(m=!0,b=null):u===f&&(m=!0,b=c.route.hydrateFallbackElement||null)));let y=e.concat(o.slice(0,f+1)),S=()=>{let v;return h?v=w:m?v=b:c.route.Component?v=F.createElement(c.route.Component,null):c.route.element?v=c.route.element:v=p,F.createElement(mE,{match:c,routeContext:{outlet:p,matches:y,isDataRoute:n!=null},children:v})};return n&&(c.route.ErrorBoundary||c.route.errorElement||f===0)?F.createElement(hE,{location:n.location,revalidation:n.revalidation,component:w,error:h,children:S(),routeContext:{outlet:null,matches:y,isDataRoute:!0}}):S()},null)}var xy=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(xy||{}),Ai=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Ai||{});function yE(t){let e=F.useContext(Lp);return e||Ne(!1),e}function wE(t){let e=F.useContext(iE);return e||Ne(!1),e}function vE(t){let e=F.useContext(lr);return e||Ne(!1),e}function Ty(t){let e=vE(),n=e.matches[e.matches.length-1];return n.route.id||Ne(!1),n.route.id}function bE(){var t;let e=F.useContext(Sy),n=wE(Ai.UseRouteError),r=Ty(Ai.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function kE(){let{router:t}=yE(xy.UseNavigateStable),e=Ty(Ai.UseNavigateStable),n=F.useRef(!1);return Ny(()=>{n.current=!0}),F.useCallback(function(s,a){a===void 0&&(a={}),n.current&&(typeof s=="number"?t.navigate(s):t.navigate(s,Ba({fromRouteId:e},a)))},[t,e])}function SE(t){let{to:e,replace:n,state:r,relative:s}=t;Us()||Ne(!1);let{future:a,static:o}=F.useContext(ir),{matches:i}=F.useContext(lr),{pathname:l}=ao(),u=pl(),p=Rp(e,Fp(i,a.v7_relativeSplatPath),l,s==="path"),c=JSON.stringify(p);return F.useEffect(()=>u(JSON.parse(c),{replace:n,state:r,relative:s}),[u,c,s,n,r]),null}function Qr(t){Ne(!1)}function NE(t){let{basename:e="/",children:n=null,location:r,navigationType:s=Fn.Pop,navigator:a,static:o=!1,future:i}=t;Us()&&Ne(!1);let l=e.replace(/^\/*/,"/"),u=F.useMemo(()=>({basename:l,navigator:a,static:o,future:Ba({v7_relativeSplatPath:!1},i)}),[l,i,a,o]);typeof r=="string"&&(r=Vs(r));let{pathname:p="/",search:c="",hash:f="",state:h=null,key:m="default"}=r,w=F.useMemo(()=>{let b=Pp(p,l);return b==null?null:{location:{pathname:b,search:c,hash:f,state:h,key:m},navigationType:s}},[l,p,c,f,h,m,s]);return w==null?null:F.createElement(ir.Provider,{value:u},F.createElement(cl.Provider,{children:n,value:w}))}function EE(t){let{children:e,location:n}=t;return cE(sc(e),n)}new Promise(()=>{});function sc(t,e){e===void 0&&(e=[]);let n=[];return F.Children.forEach(t,(r,s)=>{if(!F.isValidElement(r))return;let a=[...e,s];if(r.type===F.Fragment){n.push.apply(n,sc(r.props.children,a));return}r.type!==Qr&&Ne(!1),!r.props.index||!r.props.children||Ne(!1);let o={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=sc(r.props.children,a)),n.push(o)}),n}/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ac(){return ac=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ac.apply(this,arguments)}function xE(t,e){if(t==null)return{};var n={},r=Object.keys(t),s,a;for(a=0;a<r.length;a++)s=r[a],!(e.indexOf(s)>=0)&&(n[s]=t[s]);return n}function TE(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function _E(t,e){return t.button===0&&(!e||e==="_self")&&!TE(t)}const $E=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],IE="6";try{window.__reactRouterVersion=IE}catch{}const AE="startTransition",vh=Ek[AE];function OE(t){let{basename:e,children:n,future:r,window:s}=t,a=F.useRef();a.current==null&&(a.current=RN({window:s,v5Compat:!0}));let o=a.current,[i,l]=F.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},p=F.useCallback(c=>{u&&vh?vh(()=>l(c)):l(c)},[l,u]);return F.useLayoutEffect(()=>o.listen(p),[o,p]),F.createElement(NE,{basename:e,children:n,location:i.location,navigationType:i.action,navigator:o,future:r})}const CE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",DE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ps=F.forwardRef(function(e,n){let{onClick:r,relative:s,reloadDocument:a,replace:o,state:i,target:l,to:u,preventScrollReset:p,viewTransition:c}=e,f=xE(e,$E),{basename:h}=F.useContext(ir),m,w=!1;if(typeof u=="string"&&DE.test(u)&&(m=u,CE))try{let v=new URL(window.location.href),x=u.startsWith("//")?new URL(v.protocol+u):new URL(u),T=Pp(x.pathname,h);x.origin===v.origin&&T!=null?u=T+x.search+x.hash:w=!0}catch{}let b=lE(u,{relative:s}),y=PE(u,{replace:o,state:i,target:l,preventScrollReset:p,relative:s,viewTransition:c});function S(v){r&&r(v),v.defaultPrevented||y(v)}return F.createElement("a",ac({},f,{href:m||b,onClick:w||a?r:S,ref:n,target:l}))});var bh;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(bh||(bh={}));var kh;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(kh||(kh={}));function PE(t,e){let{target:n,replace:r,state:s,preventScrollReset:a,relative:o,viewTransition:i}=e===void 0?{}:e,l=pl(),u=ao(),p=Ey(t,{relative:o});return F.useCallback(c=>{if(_E(c,n)){c.preventDefault();let f=r!==void 0?r:Ii(u)===Ii(p);l(t,{replace:f,state:s,preventScrollReset:a,relative:o,viewTransition:i})}},[u,l,p,r,s,n,t,a,o,i])}const FE=()=>{const[t,e]=F.useState(!1);return F.useEffect(()=>{const n=()=>{window.scrollY>50?e(!0):e(!1)};return window.addEventListener("scroll",n),()=>{window.removeEventListener("scroll",n)}},[]),$.jsx("div",{className:`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-200 ${t?"h-12 shadow-lg":"h-20"}`,style:{backgroundColor:"var(--verde)",clipPath:t?"ellipse(100% 100% at 65% 0%)":"ellipse(90% 85% at 50% 10%)"},children:$.jsxs("div",{className:"flex justify-center items-center h-full max-w-[1240px] mx-auto px-4",children:[$.jsx("h1",{className:"text-3xl font-bold",style:{color:"var(--blackish)"},children:$.jsx(ps,{to:"/",children:"Crisp.AI"})}),$.jsxs("ul",{className:"hidden md:flex",children:[$.jsx("li",{className:"p-4 border-b border-[var(--orange)] text-[var(--whitish)]",children:$.jsx(ps,{to:"/",children:"Home"})}),$.jsx("li",{className:"p-4 border-b border-[var(--medium-gray)] text-[var(--whitish)]",children:$.jsx(ps,{to:"/scan",children:"Scan Produce"})}),$.jsx("li",{className:"p-4 border-b border-[var(--medium-gray)] text-[var(--whitish)]",children:$.jsx(ps,{to:"/my-produce",children:"Recipes"})})]})]})})};var _y={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Sh=Bt.createContext&&Bt.createContext(_y),RE=["attr","size","title"];function LE(t,e){if(t==null)return{};var n=zE(t,e),r,s;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(s=0;s<a.length;s++)r=a[s],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function zE(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function Oi(){return Oi=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Oi.apply(this,arguments)}function Nh(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function Ci(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Nh(Object(n),!0).forEach(function(r){BE(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Nh(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function BE(t,e,n){return e=jE(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function jE(t){var e=ME(t,"string");return typeof e=="symbol"?e:e+""}function ME(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function $y(t){return t&&t.map((e,n)=>Bt.createElement(e.tag,Ci({key:n},e.attr),$y(e.child)))}function fl(t){return e=>Bt.createElement(VE,Oi({attr:Ci({},t.attr)},e),$y(t.child))}function VE(t){var e=n=>{var{attr:r,size:s,title:a}=t,o=LE(t,RE),i=s||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),Bt.createElement("svg",Oi({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:Ci(Ci({color:t.color||n.color},n.style),t.style),height:i,width:i,xmlns:"http://www.w3.org/2000/svg"}),a&&Bt.createElement("title",null,a),t.children)};return Sh!==void 0?Bt.createElement(Sh.Consumer,null,n=>e(n)):e(_y)}function UE(t){return fl({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0 0 42 42h216v494zM504 618H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM312 490v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8z"},child:[]}]})(t)}function WE(t){return fl({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"},child:[]}]})(t)}function HE(t){return fl({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M136 384h56c4.4 0 8-3.6 8-8V200h176c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H196c-37.6 0-68 30.4-68 68v180c0 4.4 3.6 8 8 8zm512-184h176v176c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V196c0-37.6-30.4-68-68-68H648c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zM376 824H200V648c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v180c0 37.6 30.4 68 68 68h180c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm512-184h-56c-4.4 0-8 3.6-8 8v176H648c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h180c37.6 0 68-30.4 68-68V648c0-4.4-3.6-8-8-8zm16-164H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"},child:[]}]})(t)}const GE=()=>{const t=pl();return $.jsxs("div",{className:"fixed bottom-0 left-0 w-full flex justify-around items-center h-16 bg-[#F2F2F2] text-dark-gray border-t border-var(--medium-gray)",children:[$.jsxs("div",{className:"flex flex-col items-center",onClick:()=>t("/"),children:[$.jsx(WE,{size:24}),$.jsx("span",{children:"Home"})]}),$.jsxs("div",{className:"flex flex-col items-center",onClick:()=>t("/scan"),children:[$.jsx(HE,{size:24}),$.jsx("span",{children:"Scan Produce"})]}),$.jsxs("div",{className:"flex flex-col items-center",onClick:()=>t("/my-produce"),children:[$.jsx(UE,{size:24}),$.jsx("span",{children:"Recipes"})]})]})},Iy="/FreshForecast/assets/pic1-CH87jW7j.jpg";function qE(t){return fl({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z"},child:[]}]})(t)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const KE=1e-7,QE=1e-4;class XE{constructor(e,n){this.backend=e,this.dataMover=n,this.data=new WeakMap,this.dataIdsCount=0}get(e){return this.data.has(e)||this.dataMover.moveData(this.backend,e),this.data.get(e)}set(e,n){this.dataIdsCount++,this.data.set(e,n)}has(e){return this.data.has(e)}delete(e){return this.dataIdsCount--,this.data.delete(e)}numDataIds(){return this.dataIdsCount}}class Ay{refCount(e){return et("refCount")}incRef(e){return et("incRef")}timerAvailable(){return!0}time(e){return et("time")}read(e){return et("read")}readSync(e){return et("readSync")}readToGPU(e,n){return et("readToGPU")}numDataIds(){return et("numDataIds")}disposeData(e,n){return et("disposeData")}write(e,n,r){return et("write")}move(e,n,r,s,a){return et("move")}createTensorFromGPUData(e,n,r){return et("createTensorFromGPUData")}memory(){return et("memory")}floatPrecision(){return et("floatPrecision")}epsilon(){return this.floatPrecision()===32?KE:QE}dispose(){return et("dispose")}}function et(t){throw new Error(`'${t}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Oy(t){let e=t.length,n=0;for(;e>0;)n=Math.random()*e|0,e--,Di(t,e,n)}function YE(t,e){if(t.length!==e.length)throw new Error(`Array sizes must match to be shuffled together First array length was ${t.length}Second array length was ${e.length}`);let n=t.length,r=0;for(;n>0;)r=Math.random()*n|0,n--,Di(t,n,r),Di(e,n,r)}function ja(t,e,n){return Math.max(t,Math.min(e,n))}function ZE(t){return t%2===0?t:t+1}function Di(t,e,n){const r=t[e];t[e]=t[n],t[n]=r}function JE(t){let e=0;for(let n=0;n<t.length;n++)e+=t[n];return e}function ex(t,e){const n=Math.random();return e*n+(1-n)*t}function tx(t,e){let n=0;for(let r=0;r<t.length;r++){const s=Number(t[r])-Number(e[r]);n+=s*s}return n}function k(t,e){if(!t)throw new Error(typeof e=="string"?e:e())}function Ke(t,e,n=""){k(Ht(t,e),()=>n+` Shapes ${t} and ${e} must match`)}function Hr(t){k(t!=null,()=>"The input to the tensor constructor must be a non-null value.")}function te(t){if(t.length===0)return 1;let e=t[0];for(let n=1;n<t.length;n++)e*=t[n];return e}function nx(t){return t.length===0}function Cy(t,e){if(t===e)return!0;if(t==null||e==null||t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==null&&e[n]!==null&&t[n]!==e[n])return!1;return!0}function Ht(t,e){if(t===e)return!0;if(t==null||e==null||t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}function As(t){return t%1===0}function rx(t){if(Math.tanh!=null)return Math.tanh(t);if(t===1/0)return 1;if(t===-1/0)return-1;{const e=Math.exp(2*t);return(e-1)/(e+1)}}function sx(t){const e=Math.ceil(Math.sqrt(t));return[e,Math.ceil(t/e)]}function ax(t){const e=new Uint32Array(t);for(let n=0;n<t;++n)e[n]=n;return Oy(e),e}function va(t,e){return e<=t.length?t:t+" ".repeat(e-t.length)}function ox(t,e=s=>0,n,r){return new Promise((s,a)=>{let o=0;const i=()=>{if(t()){s();return}o++;const l=e(o);if(n!=null&&o>=n){a();return}r!=null?r(i,l):setTimeout(i,l)};i()})}function ix(t,e){let n=1,r=-1;for(let a=0;a<t.length;++a)if(t[a]>=0)n*=t[a];else if(t[a]===-1){if(r!==-1)throw Error(`Shapes can only have 1 implicit size. Found -1 at dim ${r} and dim ${a}`);r=a}else if(t[a]<0)throw Error(`Shapes can not be < 0. Found ${t[a]} at dim ${a}`);if(r===-1){if(e>0&&e!==n)throw Error(`Size(${e}) must match the product of shape ${t}`);return t}if(n===0)throw Error(`Cannot infer the missing size in [${t}] when there are 0 elements`);if(e%n!==0)throw Error(`The implicit shape can't be a fractional number. Got ${e} / ${n}`);const s=t.slice();return s[r]=e/n,s}function oo(t,e){const n=e.length;return t=t==null?e.map((r,s)=>s):[].concat(t),k(t.every(r=>r>=-n&&r<n),()=>`All values in axis param must be in range [-${n}, ${n}) but got axis ${t}`),k(t.every(r=>As(r)),()=>`All values in axis param must be integers but got axis ${t}`),t.map(r=>r<0?n+r:r)}function Dy(t,e){const n=[],r=[],s=e!=null&&Array.isArray(e)&&e.length===0,a=e==null||s?null:oo(e,t).sort();let o=0;for(let i=0;i<t.length;++i){if(a!=null){if(a[o]===i&&t[i]!==1)throw new Error(`Can't squeeze axis ${i} since its dim '${t[i]}' is not 1`);(a[o]==null||a[o]>i)&&t[i]===1&&(n.push(t[i]),r.push(i)),a[o]<=i&&o++}t[i]!==1&&(n.push(t[i]),r.push(i))}return{newShape:n,keptDims:r}}function Py(t,e){return zp(t,e)}function zp(t,e){let n=null;if(t==null||t==="float32")n=new Float32Array(e);else if(t==="int32")n=new Int32Array(e);else if(t==="bool")n=new Uint8Array(e);else if(t==="string")n=new Array(e);else throw new Error(`Unknown data type ${t}`);return n}function Fy(t,e){for(let n=0;n<t.length;n++){const r=t[n];if(isNaN(r)||!isFinite(r))throw Error(`A tensor of type ${e} being uploaded contains ${r}.`)}}function Ry(t){return t==="bool"||t==="complex64"||t==="float32"||t==="int32"||t==="string"}function lx(t,e){return!(e==="complex64"||e==="float32"&&t!=="complex64"||e==="int32"&&t!=="float32"&&t!=="complex64"||e==="bool"&&t==="bool")}function Pi(t){if(t==="float32"||t==="int32")return 4;if(t==="complex64")return 8;if(t==="bool")return 1;throw new Error(`Unknown dtype ${t}`)}function Ly(t){if(t==null)return 0;let e=0;return t.forEach(n=>e+=n.length),e}function Rn(t){return typeof t=="string"||t instanceof String}function zy(t){return typeof t=="boolean"}function By(t){return typeof t=="number"}function io(t){return Array.isArray(t)?io(t[0]):t instanceof Float32Array?"float32":t instanceof Int32Array||t instanceof Uint8Array||t instanceof Uint8ClampedArray?"int32":By(t)?"float32":Rn(t)?"string":zy(t)?"bool":"float32"}function Yn(t){return!!(t&&t.constructor&&t.call&&t.apply)}function Fi(t,e){for(let n=e;n<t;++n)if(t%n===0)return n;return t}function Ws(t){const e=t.length;if(e<2)return[];const n=new Array(e-1);n[e-2]=t[e-1];for(let r=e-3;r>=0;--r)n[r]=n[r+1]*t[r+1];return n}function jy(t,e,n,r=!1){const s=new Array;if(e.length===1){const a=e[0]*(r?2:1);for(let o=0;o<a;o++)s[o]=n[t+o]}else{const a=e[0],o=e.slice(1),i=o.reduce((l,u)=>l*u)*(r?2:1);for(let l=0;l<a;l++)s[l]=jy(t+l*i,o,n,r)}return s}function $r(t,e,n=!1){if(t.length===0)return e[0];const r=t.reduce((s,a)=>s*a)*(n?2:1);if(r===0)return[];if(r!==e.length)throw new Error(`[${t}] does not match the input size ${e.length}${n?" for a complex tensor":""}.`);return jy(0,t,e,n)}function ux(t,e){if(Array.isArray(t))return t;if(e==="float32")return t instanceof Float32Array?t:new Float32Array(t);if(e==="int32")return t instanceof Int32Array?t:new Int32Array(t);if(e==="bool"||e==="string")return Uint8Array.from(new Int32Array(t));throw new Error(`Unknown dtype ${e}`)}function Bp(t,e){const n=dl(t,e);for(let r=0;r<n.length;r++)n[r]=1;return n}function dl(t,e){if(e==null||e==="float32"||e==="complex64")return new Float32Array(t);if(e==="int32")return new Int32Array(t);if(e==="bool")return new Uint8Array(t);throw new Error(`Unknown data type ${e}`)}function cx(t,e){const n=t.reduce((r,s)=>r*s,1);if(e==null||e==="float32")return $r(t,new Float32Array(n));if(e==="int32")return $r(t,new Int32Array(n));if(e==="bool")return $r(t,new Uint8Array(n));throw new Error(`Unknown data type ${e}`)}function pt(t){t.forEach(e=>{k(Number.isInteger(e)&&e>=0,()=>`Tensor must have a shape comprised of positive integers but got shape [${t}].`)})}function px(t,e,n){if(e===0)return 0;if(e===1)return t[0];let r=t[t.length-1];for(let s=0;s<t.length-1;++s)r+=n[s]*t[s];return r}function fx(t,e,n){if(e===0)return[];if(e===1)return[t];const r=new Array(e);for(let s=0;s<r.length-1;++s)r[s]=Math.floor(t/n[s]),t-=r[s]*n[s];return r[r.length-1]=t,r}function Zn(t){return t&&t.then&&typeof t.then=="function"}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Eh="tfjsflags";class My{constructor(e){this.global=e,this.flags={},this.flagRegistry={},this.urlFlags={},this.getQueryParams=dx,this.populateURLFlags()}setPlatform(e,n){this.platform!=null&&(V().getBool("IS_TEST")||V().getBool("PROD")||console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${e}.`)),this.platformName=e,this.platform=n}registerFlag(e,n,r){if(this.flagRegistry[e]={evaluationFn:n,setHook:r},this.urlFlags[e]!=null){const s=this.urlFlags[e];V().getBool("IS_TEST")||V().getBool("PROD")||console.warn(`Setting feature override from URL ${e}: ${s}.`),this.set(e,s)}}async getAsync(e){return e in this.flags?this.flags[e]:(this.flags[e]=await this.evaluateFlag(e),this.flags[e])}get(e){if(e in this.flags)return this.flags[e];const n=this.evaluateFlag(e);if(Zn(n))throw new Error(`Flag ${e} cannot be synchronously evaluated. Please use getAsync() instead.`);return this.flags[e]=n,this.flags[e]}getNumber(e){return this.get(e)}getBool(e){return this.get(e)}getString(e){return this.get(e)}getFlags(){return this.flags}get features(){return this.flags}set(e,n){if(this.flagRegistry[e]==null)throw new Error(`Cannot set flag ${e} as it has not been registered.`);this.flags[e]=n,this.flagRegistry[e].setHook!=null&&this.flagRegistry[e].setHook(n)}evaluateFlag(e){if(this.flagRegistry[e]==null)throw new Error(`Cannot evaluate flag '${e}': no evaluation function found.`);return this.flagRegistry[e].evaluationFn()}setFlags(e){this.flags=Object.assign({},e)}reset(){this.flags={},this.urlFlags={},this.populateURLFlags()}populateURLFlags(){if(typeof this.global>"u"||typeof this.global.location>"u"||typeof this.global.location.search>"u")return;const e=this.getQueryParams(this.global.location.search);Eh in e&&e[Eh].split(",").forEach(r=>{const[s,a]=r.split(":");this.urlFlags[s]=mx(s,a)})}}function dx(t){const e={};return t.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,(n,...r)=>(hx(e,r[0],r[1]),r.join("="))),e}function hx(t,e,n){t[decodeURIComponent(e)]=decodeURIComponent(n||"")}function mx(t,e){const n=e.toLowerCase();return n==="true"||n==="false"?n==="true":`${+n}`===n?+n:e}function V(){return jp}let jp=null;function gx(t){jp=t}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let su;function Vy(){if(su==null){let t;if(typeof window<"u")t=window;else if(typeof global<"u")t=global;else if(typeof process<"u")t=process;else if(typeof self<"u")t=self;else throw new Error("Could not find a global object");su=t}return su}function yx(){const t=Vy();return t._tfGlobals==null&&(t._tfGlobals=new Map),t._tfGlobals}function Mp(t,e){const n=yx();if(n.has(t))return n.get(t);{const r=e();return n.set(t,r),n.get(t)}}const Uy="Abs",Wy="Acos",Hy="Acosh",Vp="Add",Gy="AddN",qy="All",Ky="Any",Qy="ArgMax",Xy="ArgMin",Yy="Asin",Zy="Asinh",Jy="Atan",e0="Atanh",t0="Atan2",n0="AvgPool",wx="AvgPoolGrad",r0="AvgPool3D",vx="AvgPool3DGrad",s0="BatchMatMul",a0="BatchToSpaceND",o0="Bincount",i0="BitwiseAnd",bx="BroadcastTo",l0="BroadcastArgs",Up="Cast",u0="Ceil",c0="ClipByValue",p0="Complex",f0="ComplexAbs",d0="Concat",h0="Conv2D",m0="Conv2DBackpropFilter",g0="Conv2DBackpropInput",y0="Conv3D",kx="Conv3DBackpropFilterV2",w0="Conv3DBackpropInputV2",v0="Cos",b0="Cosh",k0="Cumprod",S0="Cumsum",N0="CropAndResize",E0="DenseBincount",x0="DepthToSpace",T0="DepthwiseConv2dNative",_0="DepthwiseConv2dNativeBackpropFilter",$0="DepthwiseConv2dNativeBackpropInput",I0="Diag",A0="Dilation2D",Sx="Dilation2DBackpropInput",Nx="Dilation2DBackpropFilter",Wp="Draw",O0="RealDiv",C0="Einsum",D0="Elu",Ex="EluGrad",P0="Erf",F0="Equal",R0="Exp",L0="ExpandDims",z0="Expm1",B0="FFT",j0="Fill",M0="FlipLeftRight",V0="Floor",U0="FloorDiv",W0="FusedBatchNorm",H0="GatherV2",G0="GatherNd",q0="Greater",K0="GreaterEqual",Hp="Identity",Q0="IFFT",X0="Imag",Y0="IsFinite",Z0="IsInf",J0="IsNan",e1="LeakyRelu",t1="Less",n1="LessEqual",r1="LinSpace",s1="Log",a1="Log1p",o1="LogicalAnd",i1="LogicalNot",l1="LogicalOr",xx="LogicalXor",Tx="LogSoftmax",_x="LowerBound",u1="LRN",$x="LRNGrad",Ix="MatrixBandPart",c1="Max",p1="Maximum",f1="MaxPool",Ax="MaxPoolGrad",d1="MaxPool3D",Ox="MaxPool3DGrad",h1="MaxPoolWithArgmax",m1="Mean",g1="Min",y1="Minimum",w1="MirrorPad",v1="Mod",b1="Multinomial",k1="Multiply",S1="Neg",N1="NotEqual",E1="NonMaxSuppressionV3",x1="NonMaxSuppressionV4",T1="NonMaxSuppressionV5",_1="OnesLike",$1="OneHot",I1="Pack",A1="PadV2",Cx="Pool",O1="Pow",C1="Prelu",D1="Prod",P1="RaggedGather",F1="RaggedRange",R1="RaggedTensorToTensor",L1="Range",z1="Real",B1="Reciprocal",j1="Relu",M1="Reshape",V1="ResizeNearestNeighbor",Dx="ResizeNearestNeighborGrad",U1="ResizeBilinear",Px="ResizeBilinearGrad",W1="Relu6",H1="Reverse",G1="Round",q1="Rsqrt",K1="ScatterNd",Q1="TensorScatterUpdate",X1="SearchSorted",Y1="Select",Z1="Selu",J1="Slice",ew="Sin",tw="Sinh",nw="Sign",rw="Sigmoid",sw="Softplus",aw="Sqrt",ow="Sum",iw="SpaceToBatchND",lw="SplitV",uw="Softmax",cw="SparseFillEmptyRows",pw="SparseReshape",fw="SparseSegmentMean",dw="SparseSegmentSum",hw="SparseToDense",mw="SquaredDifference",Fx="Square",gw="StaticRegexReplace",yw="StridedSlice",ww="StringNGrams",vw="StringSplit",bw="StringToHashBucketFast",kw="Sub",Sw="Tan",Nw="Tanh",Gp="Tile",Ew="TopK",xw="Transform",ti="Transpose",Tw="Unique",_w="Unpack",$w="UnsortedSegmentSum",Rx="UpperBound",Iw="ZerosLike",Aw="Step",oc="FromPixels",Ow="RotateWithOffset",ic="_FusedMatMul",lc="FusedConv2D",uc="FusedDepthwiseConv2D";/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function On(...t){V().getBool("IS_TEST")||V().getBool("PROD")||console.warn(...t)}function Lx(...t){V().getBool("IS_TEST")||V().getBool("PROD")||console.log(...t)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Os=Mp("kernelRegistry",()=>new Map),Ma=Mp("gradRegistry",()=>new Map);function Va(t,e){const n=qp(t,e);return Os.get(n)}function cc(t){return Ma.get(t)}function Ri(t){const e=Os.entries(),n=[];for(;;){const{done:r,value:s}=e.next();if(r)break;const[a,o]=s,[i]=a.split("_");i===t&&n.push(o)}return n}function Cw(t){const{kernelName:e,backendName:n}=t,r=qp(e,n);Os.has(r)&&On(`The kernel '${e}' for backend '${n}' is already registered`),Os.set(r,t)}function zx(t){const{kernelName:e}=t;Ma.has(e)&&V().getBool("DEBUG")&&On(`Overriding the gradient for '${e}'`),Ma.set(e,t)}function Bx(t,e){const n=qp(t,e);if(!Os.has(n))throw new Error(`The kernel '${t}' for backend '${e}' is not registered`);Os.delete(n)}function jx(t){if(!Ma.has(t))throw new Error(`The gradient '${t}' for backend is not registered`);Ma.delete(t)}function Mx(t,e){Ri(t).forEach(r=>{const s=Object.assign({},r,{backendName:e});Cw(s)})}function qp(t,e){return`${e}_${t}`}/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Dw(t){return t instanceof Float32Array||t instanceof Int32Array||t instanceof Uint8Array||t instanceof Uint8ClampedArray}var Pw=le,xt=null;try{xt=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch{}function le(t,e,n){this.low=t|0,this.high=e|0,this.unsigned=!!n}le.prototype.__isLong__;Object.defineProperty(le.prototype,"__isLong__",{value:!0});function ft(t){return(t&&t.__isLong__)===!0}le.isLong=ft;var xh={},Th={};function Gr(t,e){var n,r,s;return e?(t>>>=0,(s=0<=t&&t<256)&&(r=Th[t],r)?r:(n=ue(t,(t|0)<0?-1:0,!0),s&&(Th[t]=n),n)):(t|=0,(s=-128<=t&&t<128)&&(r=xh[t],r)?r:(n=ue(t,t<0?-1:0,!1),s&&(xh[t]=n),n))}le.fromInt=Gr;function Tt(t,e){if(isNaN(t))return e?Er:_t;if(e){if(t<0)return Er;if(t>=Fw)return zw}else{if(t<=-$h)return ot;if(t+1>=$h)return Lw}return t<0?Tt(-t,e).neg():ue(t%Cs|0,t/Cs|0,e)}le.fromNumber=Tt;function ue(t,e,n){return new le(t,e,n)}le.fromBits=ue;var Li=Math.pow;function Kp(t,e,n){if(t.length===0)throw Error("empty string");if(t==="NaN"||t==="Infinity"||t==="+Infinity"||t==="-Infinity")return _t;if(typeof e=="number"?(n=e,e=!1):e=!!e,n=n||10,n<2||36<n)throw RangeError("radix");var r;if((r=t.indexOf("-"))>0)throw Error("interior hyphen");if(r===0)return Kp(t.substring(1),e,n).neg();for(var s=Tt(Li(n,8)),a=_t,o=0;o<t.length;o+=8){var i=Math.min(8,t.length-o),l=parseInt(t.substring(o,o+i),n);if(i<8){var u=Tt(Li(n,i));a=a.mul(u).add(Tt(l))}else a=a.mul(s),a=a.add(Tt(l))}return a.unsigned=e,a}le.fromString=Kp;function Gt(t,e){return typeof t=="number"?Tt(t,e):typeof t=="string"?Kp(t,e):ue(t.low,t.high,typeof e=="boolean"?e:t.unsigned)}le.fromValue=Gt;var _h=65536,Vx=1<<24,Cs=_h*_h,Fw=Cs*Cs,$h=Fw/2,Ih=Gr(Vx),_t=Gr(0);le.ZERO=_t;var Er=Gr(0,!0);le.UZERO=Er;var fs=Gr(1);le.ONE=fs;var Rw=Gr(1,!0);le.UONE=Rw;var pc=Gr(-1);le.NEG_ONE=pc;var Lw=ue(-1,2147483647,!1);le.MAX_VALUE=Lw;var zw=ue(-1,-1,!0);le.MAX_UNSIGNED_VALUE=zw;var ot=ue(0,-2147483648,!1);le.MIN_VALUE=ot;var D=le.prototype;D.toInt=function(){return this.unsigned?this.low>>>0:this.low};D.toNumber=function(){return this.unsigned?(this.high>>>0)*Cs+(this.low>>>0):this.high*Cs+(this.low>>>0)};D.toString=function(e){if(e=e||10,e<2||36<e)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative())if(this.eq(ot)){var n=Tt(e),r=this.div(n),s=r.mul(n).sub(this);return r.toString(e)+s.toInt().toString(e)}else return"-"+this.neg().toString(e);for(var a=Tt(Li(e,6),this.unsigned),o=this,i="";;){var l=o.div(a),u=o.sub(l.mul(a)).toInt()>>>0,p=u.toString(e);if(o=l,o.isZero())return p+i;for(;p.length<6;)p="0"+p;i=""+p+i}};D.getHighBits=function(){return this.high};D.getHighBitsUnsigned=function(){return this.high>>>0};D.getLowBits=function(){return this.low};D.getLowBitsUnsigned=function(){return this.low>>>0};D.getNumBitsAbs=function(){if(this.isNegative())return this.eq(ot)?64:this.neg().getNumBitsAbs();for(var e=this.high!=0?this.high:this.low,n=31;n>0&&!(e&1<<n);n--);return this.high!=0?n+33:n+1};D.isZero=function(){return this.high===0&&this.low===0};D.eqz=D.isZero;D.isNegative=function(){return!this.unsigned&&this.high<0};D.isPositive=function(){return this.unsigned||this.high>=0};D.isOdd=function(){return(this.low&1)===1};D.isEven=function(){return(this.low&1)===0};D.equals=function(e){return ft(e)||(e=Gt(e)),this.unsigned!==e.unsigned&&this.high>>>31===1&&e.high>>>31===1?!1:this.high===e.high&&this.low===e.low};D.eq=D.equals;D.notEquals=function(e){return!this.eq(e)};D.neq=D.notEquals;D.ne=D.notEquals;D.lessThan=function(e){return this.comp(e)<0};D.lt=D.lessThan;D.lessThanOrEqual=function(e){return this.comp(e)<=0};D.lte=D.lessThanOrEqual;D.le=D.lessThanOrEqual;D.greaterThan=function(e){return this.comp(e)>0};D.gt=D.greaterThan;D.greaterThanOrEqual=function(e){return this.comp(e)>=0};D.gte=D.greaterThanOrEqual;D.ge=D.greaterThanOrEqual;D.compare=function(e){if(ft(e)||(e=Gt(e)),this.eq(e))return 0;var n=this.isNegative(),r=e.isNegative();return n&&!r?-1:!n&&r?1:this.unsigned?e.high>>>0>this.high>>>0||e.high===this.high&&e.low>>>0>this.low>>>0?-1:1:this.sub(e).isNegative()?-1:1};D.comp=D.compare;D.negate=function(){return!this.unsigned&&this.eq(ot)?ot:this.not().add(fs)};D.neg=D.negate;D.add=function(e){ft(e)||(e=Gt(e));var n=this.high>>>16,r=this.high&65535,s=this.low>>>16,a=this.low&65535,o=e.high>>>16,i=e.high&65535,l=e.low>>>16,u=e.low&65535,p=0,c=0,f=0,h=0;return h+=a+u,f+=h>>>16,h&=65535,f+=s+l,c+=f>>>16,f&=65535,c+=r+i,p+=c>>>16,c&=65535,p+=n+o,p&=65535,ue(f<<16|h,p<<16|c,this.unsigned)};D.subtract=function(e){return ft(e)||(e=Gt(e)),this.add(e.neg())};D.sub=D.subtract;D.multiply=function(e){if(this.isZero())return _t;if(ft(e)||(e=Gt(e)),xt){var n=xt.mul(this.low,this.high,e.low,e.high);return ue(n,xt.get_high(),this.unsigned)}if(e.isZero())return _t;if(this.eq(ot))return e.isOdd()?ot:_t;if(e.eq(ot))return this.isOdd()?ot:_t;if(this.isNegative())return e.isNegative()?this.neg().mul(e.neg()):this.neg().mul(e).neg();if(e.isNegative())return this.mul(e.neg()).neg();if(this.lt(Ih)&&e.lt(Ih))return Tt(this.toNumber()*e.toNumber(),this.unsigned);var r=this.high>>>16,s=this.high&65535,a=this.low>>>16,o=this.low&65535,i=e.high>>>16,l=e.high&65535,u=e.low>>>16,p=e.low&65535,c=0,f=0,h=0,m=0;return m+=o*p,h+=m>>>16,m&=65535,h+=a*p,f+=h>>>16,h&=65535,h+=o*u,f+=h>>>16,h&=65535,f+=s*p,c+=f>>>16,f&=65535,f+=a*u,c+=f>>>16,f&=65535,f+=o*l,c+=f>>>16,f&=65535,c+=r*p+s*u+a*l+o*i,c&=65535,ue(h<<16|m,c<<16|f,this.unsigned)};D.mul=D.multiply;D.divide=function(e){if(ft(e)||(e=Gt(e)),e.isZero())throw Error("division by zero");if(xt){if(!this.unsigned&&this.high===-2147483648&&e.low===-1&&e.high===-1)return this;var n=(this.unsigned?xt.div_u:xt.div_s)(this.low,this.high,e.low,e.high);return ue(n,xt.get_high(),this.unsigned)}if(this.isZero())return this.unsigned?Er:_t;var r,s,a;if(this.unsigned){if(e.unsigned||(e=e.toUnsigned()),e.gt(this))return Er;if(e.gt(this.shru(1)))return Rw;a=Er}else{if(this.eq(ot)){if(e.eq(fs)||e.eq(pc))return ot;if(e.eq(ot))return fs;var o=this.shr(1);return r=o.div(e).shl(1),r.eq(_t)?e.isNegative()?fs:pc:(s=this.sub(e.mul(r)),a=r.add(s.div(e)),a)}else if(e.eq(ot))return this.unsigned?Er:_t;if(this.isNegative())return e.isNegative()?this.neg().div(e.neg()):this.neg().div(e).neg();if(e.isNegative())return this.div(e.neg()).neg();a=_t}for(s=this;s.gte(e);){r=Math.max(1,Math.floor(s.toNumber()/e.toNumber()));for(var i=Math.ceil(Math.log(r)/Math.LN2),l=i<=48?1:Li(2,i-48),u=Tt(r),p=u.mul(e);p.isNegative()||p.gt(s);)r-=l,u=Tt(r,this.unsigned),p=u.mul(e);u.isZero()&&(u=fs),a=a.add(u),s=s.sub(p)}return a};D.div=D.divide;D.modulo=function(e){if(ft(e)||(e=Gt(e)),xt){var n=(this.unsigned?xt.rem_u:xt.rem_s)(this.low,this.high,e.low,e.high);return ue(n,xt.get_high(),this.unsigned)}return this.sub(this.div(e).mul(e))};D.mod=D.modulo;D.rem=D.modulo;D.not=function(){return ue(~this.low,~this.high,this.unsigned)};D.and=function(e){return ft(e)||(e=Gt(e)),ue(this.low&e.low,this.high&e.high,this.unsigned)};D.or=function(e){return ft(e)||(e=Gt(e)),ue(this.low|e.low,this.high|e.high,this.unsigned)};D.xor=function(e){return ft(e)||(e=Gt(e)),ue(this.low^e.low,this.high^e.high,this.unsigned)};D.shiftLeft=function(e){return ft(e)&&(e=e.toInt()),(e&=63)===0?this:e<32?ue(this.low<<e,this.high<<e|this.low>>>32-e,this.unsigned):ue(0,this.low<<e-32,this.unsigned)};D.shl=D.shiftLeft;D.shiftRight=function(e){return ft(e)&&(e=e.toInt()),(e&=63)===0?this:e<32?ue(this.low>>>e|this.high<<32-e,this.high>>e,this.unsigned):ue(this.high>>e-32,this.high>=0?0:-1,this.unsigned)};D.shr=D.shiftRight;D.shiftRightUnsigned=function(e){if(ft(e)&&(e=e.toInt()),e&=63,e===0)return this;var n=this.high;if(e<32){var r=this.low;return ue(r>>>e|n<<32-e,n>>>e,this.unsigned)}else return e===32?ue(n,0,this.unsigned):ue(n>>>e-32,0,this.unsigned)};D.shru=D.shiftRightUnsigned;D.shr_u=D.shiftRightUnsigned;D.toSigned=function(){return this.unsigned?ue(this.low,this.high,!1):this};D.toUnsigned=function(){return this.unsigned?this:ue(this.low,this.high,!0)};D.toBytes=function(e){return e?this.toBytesLE():this.toBytesBE()};D.toBytesLE=function(){var e=this.high,n=this.low;return[n&255,n>>>8&255,n>>>16&255,n>>>24,e&255,e>>>8&255,e>>>16&255,e>>>24]};D.toBytesBE=function(){var e=this.high,n=this.low;return[e>>>24,e>>>16&255,e>>>8&255,e&255,n>>>24,n>>>16&255,n>>>8&255,n&255]};le.fromBytes=function(e,n,r){return r?le.fromBytesLE(e,n):le.fromBytesBE(e,n)};le.fromBytesLE=function(e,n){return new le(e[0]|e[1]<<8|e[2]<<16|e[3]<<24,e[4]|e[5]<<8|e[6]<<16|e[7]<<24,n)};le.fromBytesBE=function(e,n){return new le(e[4]<<24|e[5]<<16|e[6]<<8|e[7],e[0]<<24|e[1]<<16|e[2]<<8|e[3],n)};const Bw=sm(Pw),Ux=rm({__proto__:null,default:Bw},[Pw]);/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const wr=Bw||Ux;function lo(t){return wr.fromString(t,!0,16)}const jw=lo("c3a5c85c97cb3127"),yr=lo("b492b66fbe98f273"),We=lo("9ae16a3b2f90404f");function fc(t){return t.xor(t.shru(47))}function Mw(t,e,n){const r=t.slice(e,e+n);return wr.fromBytes(Array.from(r),!0,!0)}function se(t,e){return Mw(t,e,8)}function Ah(t,e){return Mw(t,e,4)}function _e(t,e){return e===0?t:t.shru(e).or(t.shl(64-e))}function Kn(t,e,n=lo("9ddfea08eb382d69")){let r=t.xor(e).mul(n);r=r.xor(r.shru(47));let s=e.xor(r).mul(n);return s=s.xor(s.shru(47)),s=s.mul(n),s}function Wx(t,e,n,r,s,a){s=s.add(t),a=_e(a.add(s).add(r),21);const o=s;return s=s.add(e),s=s.add(n),a=a.add(_e(s,44)),[s.add(r),a.add(o)]}function jo(t,e,n,r){return Wx(se(t,e),se(t,e+8),se(t,e+16),se(t,e+24),n,r)}function Hx(t,e=t.length){if(e>=8){const n=We.add(e*2),r=se(t,0).add(We),s=se(t,e-8),a=_e(s,37).mul(n).add(r),o=_e(r,25).add(s).mul(n);return Kn(a,o,n)}if(e>=4){const n=We.add(e*2),r=Ah(t,0);return Kn(r.shl(3).add(e),Ah(t,e-4),n)}if(e>0){const n=t[0],r=t[e>>1],s=t[e-1],a=n+(r<<8),o=e+(s<<2);return fc(We.mul(a).xor(jw.mul(o))).mul(We)}return We}function Gx(t,e=t.length){const n=We.add(e*2),r=se(t,0).mul(yr),s=se(t,8),a=se(t,e-8).mul(n),o=se(t,e-16).mul(We);return Kn(_e(r.add(s),43).add(_e(a,30)).add(o),r.add(_e(s.add(We),18)).add(a),n)}function qx(t,e=t.length){const n=We.add(e*2),r=se(t,0).mul(We),s=se(t,8),a=se(t,e-8).mul(n),o=se(t,e-16).mul(We),i=_e(r.add(s),43).add(_e(a,30)).add(o),l=Kn(i,r.add(_e(s.add(We),18)).add(a),n),u=se(t,16).mul(n),p=se(t,24),c=i.add(se(t,e-32)).mul(n),f=l.add(se(t,e-24)).mul(n);return Kn(_e(u.add(p),43).add(_e(c,30)).add(f),u.add(_e(p.add(r),18)).add(c),n)}function Kx(t,e=t.length){const n=wr.fromNumber(81,!0);if(e<=32)return e<=16?Hx(t,e):Gx(t,e);if(e<=64)return qx(t,e);let r=n,s=n.mul(yr).add(113),a=fc(s.mul(We).add(113)).mul(We),o=[wr.UZERO,wr.UZERO],i=[wr.UZERO,wr.UZERO];r=r.mul(We).add(se(t,0));let l=0;const u=(e-1>>6)*64,p=u+(e-1&63)-63;do r=_e(r.add(s).add(o[0]).add(se(t,l+8)),37).mul(yr),s=_e(s.add(o[1]).add(se(t,l+48)),42).mul(yr),r=r.xor(i[1]),s=s.add(o[0]).add(se(t,l+40)),a=_e(a.add(i[0]),33).mul(yr),o=jo(t,l,o[1].mul(yr),r.add(i[0])),i=jo(t,l+32,a.add(i[1]),s.add(se(t,l+16))),[a,r]=[r,a],l+=64;while(l!==u);const c=yr.add(a.and(255).shl(1));return l=p,i[0]=i[0].add(e-1&63),o[0]=o[0].add(i[0]),i[0]=i[0].add(o[0]),r=_e(r.add(s).add(o[0]).add(se(t,l+8)),37).mul(c),s=_e(s.add(o[1]).add(se(t,l+48)),42).mul(c),r=r.xor(i[1].mul(9)),s=s.add(o[0].mul(9).add(se(t,l+40))),a=_e(a.add(i[0]),33).mul(c),o=jo(t,l,o[1].mul(c),r.add(i[0])),i=jo(t,l+32,a.add(i[1]),s.add(se(t,l+16))),[a,r]=[r,a],Kn(Kn(o[0],i[0],c).add(fc(s).mul(jw)).add(a),Kn(o[1],i[1],c).add(r),c)}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qx(t,e){return e==="string"?uo(t):hl([t],e)}function Xx(t,e){return t instanceof Float32Array&&e==="float32"||t instanceof Int32Array&&e==="int32"||t instanceof Uint8Array&&e==="bool"}function hl(t,e){if(e==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(t)&&(t=Jn(t)),V().getBool("DEBUG")&&Fy(t,e),Xx(t,e))return t;if(e==null||e==="float32"||e==="complex64")return new Float32Array(t);if(e==="int32")return new Int32Array(t);if(e==="bool"){const n=new Uint8Array(t.length);for(let r=0;r<n.length;++r)Math.round(t[r])!==0&&(n[r]=1);return n}else throw new Error(`Unknown data type ${e}`)}function Ua(){return V().platform.now()}function Yx(t,e){return V().platform.fetch(t,e)}function uo(t,e="utf-8"){return e=e||"utf-8",V().platform.encode(t,e)}function zi(t,e="utf-8"){return e=e||"utf-8",V().platform.decode(t,e)}function $e(t){return V().platform.isTypedArray!=null?V().platform.isTypedArray(t):Dw(t)}function Jn(t,e=[],n=!1){if(e==null&&(e=[]),typeof t=="boolean"||typeof t=="number"||typeof t=="string"||Zn(t)||t==null||$e(t)&&n)e.push(t);else if(Array.isArray(t)||$e(t))for(let r=0;r<t.length;++r)Jn(t[r],e,n);else{let r=-1;for(const s of Object.keys(t))/^([1-9]+[0-9]*|0)$/.test(s)&&(r=Math.max(r,Number(s)));for(let s=0;s<=r;s++)Jn(t[s],e,n)}return e}const Zx=Object.freeze(Object.defineProperty({__proto__:null,arraysEqual:Ht,arraysEqualWithNull:Cy,assert:k,assertNonNegativeIntegerDimensions:pt,assertNonNull:Hr,assertShapesMatch:Ke,bytesFromStringArray:Ly,bytesPerElement:Pi,checkConversionForErrors:Fy,clamp:ja,computeStrides:Ws,convertBackendValuesAndArrayBuffer:ux,createScalarValue:Qx,createShuffledIndices:ax,decodeString:zi,distSquared:tx,encodeString:uo,fetch:Yx,fingerPrint64:Kx,flatten:Jn,getArrayFromDType:zp,getTypedArrayFromDType:Py,hasEncodingLoss:lx,hexToLong:lo,indexToLoc:fx,inferDtype:io,inferFromImplicitShape:ix,isBoolean:zy,isFunction:Yn,isInt:As,isNumber:By,isPromise:Zn,isScalarShape:nx,isString:Rn,isTypedArray:$e,isValidDtype:Ry,locToIndex:px,makeOnesTypedArray:Bp,makeZerosNestedTypedArray:cx,makeZerosTypedArray:dl,nearestDivisor:Fi,nearestLargerEven:ZE,now:Ua,parseAxisParam:oo,randUniform:ex,repeatedTry:ox,rightPad:va,shuffle:Oy,shuffleCombo:YE,sizeFromShape:te,sizeToSquarishShape:sx,squeezeShape:Dy,sum:JE,swap:Di,tanh:rx,toNestedArray:$r,toTypedArray:hl},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Jx{constructor(e,n){this.backendTimer=e,this.logger=n,n==null&&(this.logger=new tT)}profileKernel(e,n,r){let s;const a=()=>{s=r()};let o;const i=Ua();if(this.backendTimer.timerAvailable())o=this.backendTimer.time(a);else{a();for(const u of s)u.dataSync();o=Promise.resolve({kernelMs:Ua()-i})}if(V().getBool("CHECK_COMPUTATION_FOR_ERRORS"))for(let u=0;u<s.length;u++){const p=s[u];p.data().then(c=>{eT(c,p.dtype,e)})}return{kernelName:e,outputs:s,inputs:n,timeMs:o.then(u=>u.kernelMs),extraInfo:o.then(u=>u.getExtraProfileInfo!=null?u.getExtraProfileInfo():"")}}logKernelProfile(e){const{kernelName:n,outputs:r,timeMs:s,inputs:a,extraInfo:o}=e;r.forEach(i=>{Promise.all([i.data(),s,o]).then(l=>{this.logger.logKernelProfile(n,i,l[0],l[1],a,l[2])})})}}function eT(t,e,n){if(e!=="float32")return!1;for(let r=0;r<t.length;r++){const s=t[r];if(isNaN(s)||!isFinite(s))return console.warn(`Found ${s} in the result of '${n}'`),!0}return!1}class tT{logKernelProfile(e,n,r,s,a,o){const i=typeof s=="number"?va(`${s}ms`,9):s.error,l=va(e,25),u=n.rank,p=n.size,c=va(n.shape.toString(),14);let f="";for(const h in a){const m=a[h];if(m!=null){const w=m.shape||n.shape,b=w.length;f+=`${h}: ${b}D ${b>0?w:""} `}}console.log(`%c${l}	%c${i}	%c${u}D ${c}	%c${p}	%c${f}	%c${o}`,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")}}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nT(t,e,n){const r={},s={};for(let l=0;l<e.length;l++)r[e[l].id]=!0;for(let l=0;l<t.length;l++){const u=t[l],p=u.inputs;for(const c in p){const f=p[c];let h=!1;for(let m=0;m<e.length;m++)if(r[f.id]){u.outputs.forEach(w=>r[w.id]=!0),h=!0,s[u.id]=!0;break}if(h)break}}const a={};a[n.id]=!0;const o={};for(let l=t.length-1;l>=0;l--){const u=t[l],p=u.inputs;for(let c=0;c<u.outputs.length;c++)if(a[u.outputs[c].id]){for(const f in p)a[p[f].id]=!0,o[u.id]=!0;break}}const i=[];for(let l=0;l<t.length;l++){const u=t[l];if(s[u.id]&&o[u.id]){const p={};for(const f in u.inputs){const h=u.inputs[f];r[h.id]&&(p[f]=h)}const c=Object.assign({},u);c.inputs=p,c.outputs=u.outputs,i.push(c)}}return i}function rT(t,e,n,r){for(let s=e.length-1;s>=0;s--){const a=e[s],o=[];if(a.outputs.forEach(l=>{const u=t[l.id];u!=null?o.push(u):o.push(null)}),a.gradient==null)throw new Error(`Cannot compute gradient: gradient function not found for ${a.kernelName}.`);const i=a.gradient(o);for(const l in a.inputs){if(!(l in i))throw new Error(`Cannot backprop through input ${l}. Available gradients found: ${Object.keys(i)}.`);const u=n(()=>i[l]());if(u.dtype!=="float32")throw new Error(`Error in gradient for op ${a.kernelName}. The gradient of input ${l} must have 'float32' dtype, but has '${u.dtype}'`);const p=a.inputs[l];if(!Ht(u.shape,p.shape))throw new Error(`Error in gradient for op ${a.kernelName}. The gradient of input '${l}' has shape '${u.shape}', which does not match the shape of the input '${p.shape}'`);if(t[p.id]==null)t[p.id]=u;else{const c=t[p.id];t[p.id]=r(c,u),c.dispose()}}}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Oh=20,na=3,au=7;function sT(t,e,n,r){const s=Ws(e),a=aT(t,e,n,s),o=e.length,i=ni(t,e,n,s,a),l=["Tensor"];return r&&(l.push(`  dtype: ${n}`),l.push(`  rank: ${o}`),l.push(`  shape: [${e}]`),l.push("  values:")),l.push(i.map(u=>"    "+u).join(`
`)),l.join(`
`)}function aT(t,e,n,r){const s=te(e),a=r[r.length-1],o=new Array(a).fill(0),i=e.length,l=n==="complex64"?ua(t):t;if(i>1)for(let u=0;u<s/a;u++){const p=u*a;for(let c=0;c<a;c++)o[c]=Math.max(o[c],la(l[p+c],0,n).length)}return o}function la(t,e,n){let r;return Array.isArray(t)?r=`${parseFloat(t[0].toFixed(au))} + ${parseFloat(t[1].toFixed(au))}j`:Rn(t)?r=`'${t}'`:n==="bool"?r=Vw(t):r=parseFloat(t.toFixed(au)).toString(),va(r,e)}function Vw(t){return t===0?"false":"true"}function ni(t,e,n,r,s,a=!0){const o=n==="complex64"?2:1,i=e[0],l=e.length;if(l===0){if(n==="complex64"){const w=ua(t);return[la(w[0],0,n)]}return n==="bool"?[Vw(t[0])]:[t[0].toString()]}if(l===1){if(i>Oh){const b=na*o;let y=Array.from(t.slice(0,b)),S=Array.from(t.slice((i-na)*o,i*o));return n==="complex64"&&(y=ua(y),S=ua(S)),["["+y.map((v,x)=>la(v,s[x],n)).join(", ")+", ..., "+S.map((v,x)=>la(v,s[i-na+x],n)).join(", ")+"]"]}return["["+(n==="complex64"?ua(t):Array.from(t)).map((b,y)=>la(b,s[y],n)).join(", ")+"]"]}const u=e.slice(1),p=r.slice(1),c=r[0]*o,f=[];if(i>Oh){for(let w=0;w<na;w++){const b=w*c,y=b+c;f.push(...ni(t.slice(b,y),u,n,p,s,!1))}f.push("...");for(let w=i-na;w<i;w++){const b=w*c,y=b+c;f.push(...ni(t.slice(b,y),u,n,p,s,w===i-1))}}else for(let w=0;w<i;w++){const b=w*c,y=b+c;f.push(...ni(t.slice(b,y),u,n,p,s,w===i-1))}const h=l===2?",":"";f[0]="["+(i>0?f[0]+h:"");for(let w=1;w<f.length-1;w++)f[w]=" "+f[w]+h;let m=`,
`;for(let w=2;w<l;w++)m+=`
`;return f[f.length-1]=" "+f[f.length-1]+"]"+(a?"":m),f}function ua(t){const e=[];for(let n=0;n<t.length;n+=2)e.push([t[n],t[n+1]]);return e}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Bi{constructor(e,n,r){if(this.dtype=n,this.shape=e.slice(),this.size=te(e),r!=null){const s=r.length;k(s===this.size,()=>`Length of values '${s}' does not match the size inferred by the shape '${this.size}'.`)}if(n==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=r||zp(n,this.size),this.strides=Ws(e)}set(e,...n){n.length===0&&(n=[0]),k(n.length===this.rank,()=>`The number of provided coordinates (${n.length}) must match the rank (${this.rank})`);const r=this.locToIndex(n);this.values[r]=e}get(...e){e.length===0&&(e=[0]);let n=0;for(const s of e){if(s<0||s>=this.shape[n]){const a=`Requested out of range element at ${e}.   Buffer shape=${this.shape}`;throw new Error(a)}n++}let r=e[e.length-1];for(let s=0;s<e.length-1;++s)r+=this.strides[s]*e[s];return this.values[r]}locToIndex(e){if(this.rank===0)return 0;if(this.rank===1)return e[0];let n=e[e.length-1];for(let r=0;r<e.length-1;++r)n+=this.strides[r]*e[r];return n}indexToLoc(e){if(this.rank===0)return[];if(this.rank===1)return[e];const n=new Array(this.shape.length);for(let r=0;r<n.length-1;++r)n[r]=Math.floor(e/this.strides[r]),e-=n[r]*this.strides[r];return n[n.length-1]=e,n}get rank(){return this.shape.length}toTensor(){return Lt().makeTensor(this.values,this.shape,this.dtype)}}let Lt=null,Xr=null;function oT(t){Lt=t}function iT(t){Xr=t}class he{constructor(e,n,r,s){this.kept=!1,this.isDisposedInternal=!1,this.shape=e.slice(),this.dtype=n||"float32",this.size=te(e),this.strides=Ws(e),this.dataId=r,this.id=s,this.rankType=this.rank<5?this.rank.toString():"higher"}get rank(){return this.shape.length}async buffer(){const e=await this.data();return Xr.buffer(this.shape,this.dtype,e)}bufferSync(){return Xr.buffer(this.shape,this.dtype,this.dataSync())}async array(){const e=await this.data();return $r(this.shape,e,this.dtype==="complex64")}arraySync(){return $r(this.shape,this.dataSync(),this.dtype==="complex64")}async data(){this.throwIfDisposed();const e=Lt().read(this.dataId);if(this.dtype==="string"){const n=await e;try{return n.map(r=>zi(r))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}}return e}dataToGPU(e){return this.throwIfDisposed(),Lt().readToGPU(this.dataId,e)}dataSync(){this.throwIfDisposed();const e=Lt().readSync(this.dataId);if(this.dtype==="string")try{return e.map(n=>zi(n))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return e}async bytes(){this.throwIfDisposed();const e=await Lt().read(this.dataId);return this.dtype==="string"?e:new Uint8Array(e.buffer)}dispose(){this.isDisposed||(this.kerasMask&&this.kerasMask.dispose(),Lt().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw new Error("Tensor is disposed.")}print(e=!1){return Xr.print(this,e)}clone(){return this.throwIfDisposed(),Xr.clone(this)}toString(e=!1){const n=this.dataSync();return sT(n,this.shape,this.dtype,e)}cast(e){return this.throwIfDisposed(),Xr.cast(this,e)}variable(e=!0,n,r){return this.throwIfDisposed(),Lt().makeVariable(this,e,n,r)}}Object.defineProperty(he,Symbol.hasInstance,{value:t=>!!t&&t.data!=null&&t.dataSync!=null&&t.throwIfDisposed!=null});function Uw(){return Mp("Tensor",()=>he)}Uw();class Wa extends he{constructor(e,n,r,s){super(e.shape,e.dtype,e.dataId,s),this.trainable=n,this.name=r}assign(e){if(e.dtype!==this.dtype)throw new Error(`dtype of the new value (${e.dtype}) and previous value (${this.dtype}) must match`);if(!Ht(e.shape,this.shape))throw new Error(`shape of the new value (${e.shape}) and previous value (${this.shape}) must match`);Lt().disposeTensor(this),this.dataId=e.dataId,Lt().incRef(this,null)}dispose(){Lt().disposeVariable(this),this.isDisposedInternal=!0}}Object.defineProperty(Wa,Symbol.hasInstance,{value:t=>t instanceof he&&t.assign!=null&&t.assign instanceof Function});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var dc;(function(t){t.R0="R0",t.R1="R1",t.R2="R2",t.R3="R3",t.R4="R4",t.R5="R5",t.R6="R6"})(dc||(dc={}));var hc;(function(t){t.float32="float32",t.int32="int32",t.bool="int32",t.complex64="complex64"})(hc||(hc={}));var mc;(function(t){t.float32="float32",t.int32="int32",t.bool="bool",t.complex64="complex64"})(mc||(mc={}));var gc;(function(t){t.float32="float32",t.int32="float32",t.bool="float32",t.complex64="complex64"})(gc||(gc={}));var yc;(function(t){t.float32="complex64",t.int32="complex64",t.bool="complex64",t.complex64="complex64"})(yc||(yc={}));const lT={float32:gc,int32:hc,bool:mc,complex64:yc};function ml(t,e){if(t==="string"||e==="string"){if(t==="string"&&e==="string")return"string";throw new Error(`Can not upcast ${t} with ${e}`)}return lT[t][e]}function uT(t){return ml(t,"int32")}function Ww(t){return t!=null&&typeof t=="object"&&"texture"in t&&t.texture instanceof WebGLTexture}function Hw(t){return typeof GPUBuffer<"u"&&t!=null&&typeof t=="object"&&"buffer"in t&&t.buffer instanceof GPUBuffer}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function me(t,e){if(t.dtype===e.dtype)return[t,e];const n=ml(t.dtype,e.dtype);return[t.cast(n),e.cast(n)]}function Gw(t,e){k(t.dtype===e.dtype,()=>`The dtypes of the first(${t.dtype}) and second(${e.dtype}) input must match`)}function cT(t,e){return e.some(n=>n.id===t.id)}function Qp(t){const e=[];return qw(t,e,new Set),e}function qw(t,e,n){if(t==null)return;if(t instanceof he){e.push(t);return}if(!pT(t))return;const r=t;for(const s in r){const a=r[s];n.has(a)||(n.add(a),qw(a,e,n))}}function pT(t){return Array.isArray(t)||typeof t=="object"}const fT=Object.freeze(Object.defineProperty({__proto__:null,assertTypesMatch:Gw,getTensorsInContainer:Qp,isTensorInList:cT,makeTypesMatch:me},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ou(t){return t.kernelName!=null}class Ch{constructor(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null,get kernelNames(){return Array.from(new Set(this.kernels.map(e=>e.name)))}}}dispose(){for(const e in this.registeredVariables)this.registeredVariables[e].dispose()}}class Ds{constructor(e){this.ENV=e,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new Ch}async ready(){if(this.pendingBackendInit!=null)return this.pendingBackendInit.then(()=>{});if(this.backendInstance!=null)return;const e=this.getSortedBackends();for(let n=0;n<e.length;n++){const r=e[n];if(await this.initializeBackend(r).success){await this.setBackend(r);return}}throw new Error("Could not initialize any backends, all backend initializations failed.")}get backend(){if(this.pendingBackendInit!=null)throw new Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(this.backendInstance==null){const{name:e,asyncInit:n}=this.initializeBackendsAndReturnBest();if(n)throw new Error(`The highest priority backend '${e}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(e)}return this.backendInstance}backendNames(){return Object.keys(this.registryFactory)}findBackend(e){if(!(e in this.registry))if(e in this.registryFactory){const{asyncInit:n}=this.initializeBackend(e);if(n)return null}else return null;return this.registry[e]}findBackendFactory(e){return e in this.registryFactory?this.registryFactory[e].factory:null}registerBackend(e,n,r=1){return e in this.registryFactory?(On(`${e} backend was already registered. Reusing existing backend factory.`),!1):(this.registryFactory[e]={factory:n,priority:r},!0)}async setBackend(e){if(this.registryFactory[e]==null)throw new Error(`Backend name '${e}' not found in registry`);if(this.backendName=e,this.registry[e]==null){this.backendInstance=null;const{success:n,asyncInit:r}=this.initializeBackend(e);if(!(r?await n:n))return!1}return this.backendInstance=this.registry[e],this.setupRegisteredKernels(),this.profiler=new Jx(this.backendInstance),!0}setupRegisteredKernels(){Ri(this.backendName).forEach(n=>{n.setupFunc!=null&&n.setupFunc(this.backendInstance)})}disposeRegisteredKernels(e){Ri(e).forEach(r=>{r.disposeFunc!=null&&r.disposeFunc(this.registry[e])})}initializeBackend(e){const n=this.registryFactory[e];if(n==null)throw new Error(`Cannot initialize backend ${e}, no registration found.`);try{const r=n.factory();if(r&&!(r instanceof Ay)&&typeof r.then=="function"){const s=++this.pendingBackendInitId,a=r.then(o=>s<this.pendingBackendInitId?!1:(this.registry[e]=o,this.pendingBackendInit=null,!0)).catch(o=>(s<this.pendingBackendInitId||(this.pendingBackendInit=null,On(`Initialization of backend ${e} failed`),On(o.stack||o.message)),!1));return this.pendingBackendInit=a,{success:a,asyncInit:!0}}else return this.registry[e]=r,{success:!0,asyncInit:!1}}catch(r){return On(`Initialization of backend ${e} failed`),On(r.stack||r.message),{success:!1,asyncInit:!1}}}removeBackend(e){if(!(e in this.registryFactory))throw new Error(`${e} backend not found in registry`);this.backendName===e&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,e in this.registry&&(this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e]),delete this.registryFactory[e],this.backendName===e&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)}getSortedBackends(){if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort((e,n)=>this.registryFactory[n].priority-this.registryFactory[e].priority)}initializeBackendsAndReturnBest(){const e=this.getSortedBackends();for(let n=0;n<e.length;n++){const r=e[n],{success:s,asyncInit:a}=this.initializeBackend(r);if(a||s)return{name:r,asyncInit:a}}throw new Error("Could not initialize any backends, all backend initializations failed.")}moveData(e,n){const r=this.state.tensorInfo.get(n),s=r.backend,a=this.readSync(n),o=s.refCount(n);s.disposeData(n,!0),r.backend=e,e.move(n,a,r.shape,r.dtype,o),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++}tidy(e,n){let r=null;if(n==null){if(typeof e!="function")throw new Error("Please provide a function to tidy()");n=e}else{if(typeof e!="string"&&!(e instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof n!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");r=e}let s;return this.scopedRun(()=>this.startScope(r),()=>this.endScope(s),()=>(s=n(),s instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),s))}scopedRun(e,n,r){e();try{const s=r();return n(),s}catch(s){throw n(),s}}nextTensorId(){return Ds.nextTensorId++}nextVariableId(){return Ds.nextVariableId++}clone(e){const n=E.runKernel(Hp,{x:e}),r={x:e},s=o=>({x:()=>{const i="float32",l={x:o},u={dtype:i};return E.runKernel(Up,l,u)}}),a=[];return this.addTapeNode(this.state.activeScope.name,r,[n],s,a,{}),n}runKernel(e,n,r){if(this.backendName==null&&this.backend,!(Va(e,this.backendName)!=null))throw new Error(`Kernel '${e}' not registered for backend '${this.backendName}'`);return this.runKernelFunc({kernelName:e,inputs:n,attrs:r})}shouldCheckForMemLeaks(){return this.ENV.getBool("IS_TEST")}checkKernelForMemLeak(e,n,r){const s=this.backend.numDataIds();let a=0;r.forEach(l=>{a+=l.dtype==="complex64"?3:1});const o=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],i=s-n-a-o;if(i>0)throw new Error(`Backend '${this.backendName}' has an internal memory leak (${i} data ids) after running '${e}'`)}runKernelFunc(e){let n,r=[];const s=this.isTapeOn(),a=this.state.numBytes,o=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);let i;this.backendName==null&&this.backend;let l;const u=ou(e)?e.kernelName:this.state.activeScope!=null?this.state.activeScope.name:"";if(ou(e)){const{kernelName:m,inputs:w,attrs:b}=e;this.backendName==null&&this.backend;const y=Va(m,this.backendName);k(y!=null,()=>`Cannot find registered kernel '${m}' for backend '${this.backendName}'`),i=()=>{const S=this.backend.numDataIds();l=y.kernelFunc({inputs:w,attrs:b,backend:this.backend});const v=Array.isArray(l)?l:[l];this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(m,S,v);const x=v.map(T=>T.rank!=null?T:this.makeTensorFromTensorInfo(T));if(s){const T=this.getTensorsForGradient(m,w,x);r=this.saveTensorsForBackwardMode(T)}return x}}else{const{forwardFunc:m}=e,w=b=>{s&&(r=b.map(y=>this.keep(this.clone(y))))};i=()=>{const b=this.backend.numDataIds();l=this.tidy(()=>m(this.backend,w));const y=Array.isArray(l)?l:[l];return this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(u,b,y),y}}const{inputs:p,attrs:c}=e,f=ou(e)?null:e.backwardsFunc;let h;return this.scopedRun(()=>this.state.kernelDepth++,()=>this.state.kernelDepth--,()=>{!this.ENV.getBool("DEBUG")&&!this.state.profiling?n=i():(h=this.profiler.profileKernel(u,p,()=>i()),this.ENV.getBool("DEBUG")&&this.profiler.logKernelProfile(h),n=h.outputs)}),s&&this.addTapeNode(u,p,n,f,r,c),this.state.profiling&&this.state.activeProfile.kernels.push({name:u,bytesAdded:this.state.numBytes-a,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-o,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(p).map(m=>p[m]!=null?p[m].shape:null),outputShapes:n.map(m=>m.shape),kernelTimeMs:h.timeMs,extraInfo:h.extraInfo}),Array.isArray(l)?n:n[0]}saveTensorsForBackwardMode(e){return e.map(r=>this.keep(this.clone(r)))}getTensorsForGradient(e,n,r){const s=cc(e);if(s!=null){const a=s.inputsToSave||[],o=s.outputsToSave||[];let i;s.saveAllInputs?(k(Array.isArray(n),()=>"saveAllInputs is true, expected inputs to be an array."),i=Object.keys(n).map(u=>n[u])):i=a.map(u=>n[u]);const l=r.filter((u,p)=>o[p]);return i.concat(l)}return[]}makeTensor(e,n,r,s){if(e==null)throw new Error("Values passed to engine.makeTensor() are null");r=r||"float32",s=s||this.backend;let a=e;r==="string"&&Rn(e[0])&&(a=e.map(l=>uo(l)));const o=s.write(a,n,r),i=new he(n,r,o,this.nextTensorId());if(this.trackTensor(i,s),r==="string"){const l=this.state.tensorInfo.get(o),u=Ly(a);this.state.numBytes+=u-l.bytes,l.bytes=u}return i}makeTensorFromDataId(e,n,r,s){r=r||"float32";const a={dataId:e,shape:n,dtype:r};return this.makeTensorFromTensorInfo(a,s)}makeTensorFromTensorInfo(e,n){const{dataId:r,shape:s,dtype:a}=e,o=new he(s,a,r,this.nextTensorId());return this.trackTensor(o,n),o}makeVariable(e,n=!0,r,s){r=r||this.nextVariableId().toString(),s!=null&&s!==e.dtype&&(e=e.cast(s));const a=new Wa(e,n,r,this.nextTensorId());if(this.state.registeredVariables[a.name]!=null)throw new Error(`Variable with name ${a.name} was already registered`);return this.state.registeredVariables[a.name]=a,this.incRef(a,this.backend),a}trackTensor(e,n){this.state.numTensors++,e.dtype==="string"&&this.state.numStringTensors++;let r=0;e.dtype!=="complex64"&&e.dtype!=="string"&&(r=e.size*Pi(e.dtype)),this.state.numBytes+=r,this.state.tensorInfo.has(e.dataId)||(this.state.numDataBuffers++,this.state.tensorInfo.set(e.dataId,{backend:n||this.backend,dtype:e.dtype,shape:e.shape,bytes:r})),e instanceof Wa||this.track(e)}incRef(e,n){this.trackTensor(e,n),this.backend.incRef(e.dataId)}removeDataId(e,n){this.state.tensorInfo.has(e)&&this.state.tensorInfo.get(e).backend===n&&(this.state.tensorInfo.delete(e),this.state.numDataBuffers--)}disposeTensor(e){if(!this.state.tensorInfo.has(e.dataId))return;const n=this.state.tensorInfo.get(e.dataId);if(this.state.numTensors--,e.dtype==="string"&&(this.state.numStringTensors--,this.state.numBytes-=n.bytes),e.dtype!=="complex64"&&e.dtype!=="string"){const r=e.size*Pi(e.dtype);this.state.numBytes-=r}n.backend.disposeData(e.dataId)&&this.removeDataId(e.dataId,n.backend)}disposeVariables(){for(const e in this.state.registeredVariables){const n=this.state.registeredVariables[e];this.disposeVariable(n)}}disposeVariable(e){this.disposeTensor(e),this.state.registeredVariables[e.name]!=null&&delete this.state.registeredVariables[e.name]}memory(){const e=this.backend.memory();return e.numTensors=this.state.numTensors,e.numDataBuffers=this.state.numDataBuffers,e.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(e.unreliable=!0,e.reasons==null&&(e.reasons=[]),e.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),e}async profile(e){this.state.profiling=!0;const n=this.state.numBytes,r=this.state.numTensors;this.state.activeProfile.kernels=[],this.state.activeProfile.result=await e(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max(...this.state.activeProfile.kernels.map(s=>s.totalBytesSnapshot)),this.state.activeProfile.newBytes=this.state.numBytes-n,this.state.activeProfile.newTensors=this.state.numTensors-r;for(const s of this.state.activeProfile.kernels)s.kernelTimeMs=await s.kernelTimeMs,s.extraInfo=await s.extraInfo;return this.state.activeProfile}isTapeOn(){return this.state.gradientDepth>0&&this.state.kernelDepth===0}addTapeNode(e,n,r,s,a,o){const i={id:this.state.nextTapeNodeId++,kernelName:e,inputs:n,outputs:r,saved:a},l=cc(e);l!=null&&(s=l.gradFunc),s!=null&&(i.gradient=u=>(u=u.map((p,c)=>{if(p==null){const f=r[c],h=dl(f.size,f.dtype);return this.makeTensor(h,f.shape,f.dtype)}return p}),s(u.length>1?u:u[0],a,o))),this.state.activeTape.push(i)}keep(e){return e.kept=!0,e}startTape(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++}endTape(){this.state.gradientDepth--}startScope(e){const n={track:[],name:"unnamed scope",id:this.state.nextScopeId++};e&&(n.name=e),this.state.scopeStack.push(n),this.state.activeScope=n}endScope(e){const n=Qp(e),r=new Set(n.map(a=>a.id));for(let a=0;a<this.state.activeScope.track.length;a++){const o=this.state.activeScope.track[a];!o.kept&&!r.has(o.id)&&o.dispose()}const s=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],n.forEach(a=>{!a.kept&&a.scopeId===s.id&&this.track(a)})}gradients(e,n,r,s=!1){if(k(n.length>0,()=>"gradients() received an empty list of xs."),r!=null&&r.dtype!=="float32")throw new Error(`dy must have 'float32' dtype, but has '${r.dtype}'`);const a=this.scopedRun(()=>this.startTape(),()=>this.endTape(),()=>this.tidy("forward",e));k(a instanceof he,()=>"The result y returned by f() must be a tensor.");const o=nT(this.state.activeTape,n,a);if(!s&&o.length===0&&n.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",()=>{const i={};i[a.id]=r??dT(a.shape),rT(i,o,u=>this.tidy(u),hT);const l=n.map(u=>i[u.id]);return this.state.gradientDepth===0&&(this.state.activeTape.forEach(u=>{for(const p of u.saved)p.dispose()}),this.state.activeTape=null),{value:a,grads:l}})}customGrad(e){return k(Yn(e),()=>"The f passed in customGrad(f) must be a function."),(...n)=>{k(n.every(i=>i instanceof he),()=>"The args passed in customGrad(f)(x1, x2,...) must all be tensors");let r;const s={};n.forEach((i,l)=>{s[l]=i});const a=(i,l)=>(r=e(...n,l),k(r.value instanceof he,()=>"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"),k(Yn(r.gradFunc),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."),r.value),o=(i,l)=>{const u=r.gradFunc(i,l),p=Array.isArray(u)?u:[u];k(p.length===n.length,()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."),k(p.every(f=>f instanceof he),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors.");const c={};return p.forEach((f,h)=>{c[h]=()=>f}),c};return this.runKernelFunc({forwardFunc:a,backwardsFunc:o,inputs:s})}}readSync(e){return this.state.tensorInfo.get(e).backend.readSync(e)}read(e){return this.state.tensorInfo.get(e).backend.read(e)}readToGPU(e,n){return this.state.tensorInfo.get(e).backend.readToGPU(e,n)}async time(e){const n=Ua(),r=await this.backend.time(e);return r.wallMs=Ua()-n,r}track(e){return this.state.activeScope!=null&&(e.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(e)),e}get registeredVariables(){return this.state.registeredVariables}reset(){this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new Ch;for(const e in this.registry)this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null}}Ds.nextTensorId=0;Ds.nextVariableId=0;function dT(t){const e=Bp(te(t),"float32");return E.makeTensor(e,t,"float32")}function Kw(){const t=Vy();if(t._tfengine==null){const e=new My(t);t._tfengine=new Ds(e)}return gx(t._tfengine.ENV),oT(()=>t._tfengine),t._tfengine}const E=Kw();function hT(t,e){const n={a:t,b:e};return E.runKernel(Vp,n)}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function mT(){return typeof navigator<"u"&&navigator!=null}let wc;function gT(t){wc=t}function yT(t){if(wc!==void 0)return wc;if(t||mT()){if(t||(t=navigator),t.product==="ReactNative")return!0;const e=t.userAgent||t.vendor||(typeof window<"u"?window.opera:"");if(!e){const n=t;return n.userAgentData&&n.userAgentData.mobile}return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4))}return!1}function Qw(){return typeof window<"u"&&window.document!=null||typeof WorkerGlobalScope<"u"}const wT=Object.freeze(Object.defineProperty({__proto__:null,isBrowser:Qw,isMobile:yT,mockIsMobile:gT},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ye=V();Ye.registerFlag("DEBUG",()=>!1,t=>{t&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")});Ye.registerFlag("IS_BROWSER",()=>Qw());Ye.registerFlag("IS_NODE",()=>typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u");Ye.registerFlag("IS_CHROME",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor));Ye.registerFlag("IS_SAFARI",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Safari/.test(navigator.userAgent)&&/Apple/.test(navigator.vendor));Ye.registerFlag("PROD",()=>!1);Ye.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",()=>Ye.getBool("DEBUG"));Ye.registerFlag("DEPRECATION_WARNINGS_ENABLED",()=>!0);Ye.registerFlag("IS_TEST",()=>!1);Ye.registerFlag("CHECK_COMPUTATION_FOR_ERRORS",()=>Ye.getBool("DEBUG"));Ye.registerFlag("WRAP_TO_IMAGEBITMAP",()=>!1);Ye.registerFlag("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU",()=>!1);Ye.registerFlag("USE_SETTIMEOUTCUSTOM",()=>!1);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function en(t,e){let n=t;if($e(t))return e==="string"?[]:[t.length];if(Ww(t)){const s=t.channels||"RGBA";return[t.height,t.width*s.length]}else if(Hw(t))return[t.buffer.size/(e==null?4:Pi(e))];if(!Array.isArray(t))return[];const r=[];for(;Array.isArray(n)||$e(n)&&e!=="string";)r.push(n.length),n=n[0];return Array.isArray(t)&&V().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&Xw(t,r,[]),r}function Xw(t,e,n){if(n=n||[],!Array.isArray(t)&&!$e(t)){k(e.length===0,()=>`Element arr[${n.join("][")}] is a primitive, but should be an array/TypedArray of ${e[0]} elements`);return}k(e.length>0,()=>`Element arr[${n.join("][")}] should be a primitive, but is an array of ${t.length} elements`),k(t.length===e[0],()=>`Element arr[${n.join("][")}] should have ${e[0]} elements, but has ${t.length} elements`);const r=e.slice(1);for(let s=0;s<t.length;++s)Xw(t[s],r,n.concat(s))}function Dh(t,e,n,r){if(t!=="string_or_numeric"){if(t==null)throw new Error("Expected dtype cannot be null.");if(t!=="numeric"&&t!==e||t==="numeric"&&e==="string")throw new Error(`Argument '${n}' passed to '${r}' must be ${t} tensor, but got ${e} tensor`)}}function g(t,e,n,r="numeric"){if(t instanceof Uw())return Dh(r,t.dtype,e,n),t;let s=io(t);if(s!=="string"&&["bool","int32","float32"].indexOf(r)>=0&&(s=r),Dh(r,s,e,n),t==null||!$e(t)&&!Array.isArray(t)&&typeof t!="number"&&typeof t!="boolean"&&typeof t!="string"){const l=t==null?"null":t.constructor.name;throw new Error(`Argument '${e}' passed to '${n}' must be a Tensor or TensorLike, but got '${l}'`)}const a=en(t,s);!$e(t)&&!Array.isArray(t)&&(t=[t]);const i=s!=="string"?hl(t,s):Jn(t,[],!0);return E.makeTensor(i,a,s)}function Ha(t,e,n,r="numeric"){if(!Array.isArray(t))throw new Error(`Argument ${e} passed to ${n} must be a \`Tensor[]\` or \`TensorLike[]\``);return t.map((a,o)=>g(a,`${e}[${o}]`,n,r))}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Xp="__op";function N(t){const e=Object.keys(t);if(e.length!==1)throw new Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with ${e.length} keys.`);let n=e[0];const r=t[n];n.endsWith("_")&&(n=n.substring(0,n.length-1)),n=n+Xp;const s=(...a)=>{E.startScope(n);try{const o=r(...a);return Zn(o)&&console.error("Cannot return a Promise inside of tidy."),E.endScope(o),o}catch(o){throw E.endScope(null),o}};return Object.defineProperty(s,"name",{value:n,configurable:!0}),s}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vT(t,e){const n=g(t,"real","complex"),r=g(e,"imag","complex");Ke(n.shape,r.shape,`real and imag shapes, ${n.shape} and ${r.shape}, must match in call to tf.complex().`);const s={real:n,imag:r};return E.runKernel(p0,s)}const kn=N({complex_:vT});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ur(t,e,n,r){if(r==null)r=io(t);else if(r==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(Hw(t)||Ww(t)){if(r!=="float32"&&r!=="int32")throw new Error(`Creating tensor from GPU data only supports 'float32'|'int32' dtype, while the dtype is ${r}.`);return E.backend.createTensorFromGPUData(t,e||n,r)}if(!$e(t)&&!Array.isArray(t)&&typeof t!="number"&&typeof t!="boolean"&&typeof t!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(e!=null){pt(e);const s=te(e),a=te(n);k(s===a,()=>`Based on the provided shape, [${e}], the tensor should have ${s} values but has ${a}`);for(let o=0;o<n.length;++o){const i=n[o],l=o===n.length-1?i!==te(e.slice(o)):!0;k(n[o]===e[o]||!l,()=>`Error creating a new Tensor. Inferred shape (${n}) does not match the provided shape (${e}). `)}}return!$e(t)&&!Array.isArray(t)&&(t=[t]),e=e||n,t=r!=="string"?hl(t,r):Jn(t,[],!0),E.makeTensor(t,e,r)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vt(t,e,n){const r=en(t,n);return ur(t,e,r,n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Rr={float32:4,float16:2,int32:4,uint16:2,uint8:1,bool:1,complex64:8};class qt{static join(e){return new qt(e).slice()}constructor(e){if(this.shards=[],this.previousShardIndex=0,e==null||(e instanceof Array||(e=[e]),e=e.map(r=>$e(r)?r.buffer:r),e.length===0))return;this.bufferUniformSize=e[0].byteLength;let n=0;for(let r=0;r<e.length;r++){const s=e[r];r!==e.length-1&&s.byteLength!==this.bufferUniformSize&&(this.bufferUniformSize=void 0);const a=n+s.byteLength;this.shards.push({buffer:s,start:n,end:a}),n=a}this.shards.length===0&&(this.byteLength=0),this.byteLength=this.shards[this.shards.length-1].end}slice(e=0,n=this.byteLength){if(this.shards.length===0)return new ArrayBuffer(0);if(e=isNaN(Number(e))?0:e,n=isNaN(Number(n))?0:n,e=Math.max(0,e),n=Math.min(this.byteLength,n),n<=e)return new ArrayBuffer(0);const r=this.findShardForByte(e);if(r===-1)throw new Error(`Could not find start shard for byte ${e}`);const s=n-e,a=new ArrayBuffer(s),o=new Uint8Array(a);let i=0;for(let l=r;l<this.shards.length;l++){const u=this.shards[l],c=e+i-u.start,f=i,m=Math.min(n,u.end)-u.start,w=new Uint8Array(u.buffer,c,m-c);if(o.set(w,f),i+=w.length,n<u.end)break}return a}findShardForByte(e){if(this.shards.length===0||e<0||e>=this.byteLength)return-1;if(this.bufferUniformSize!=null)return this.previousShardIndex=Math.floor(e/this.bufferUniformSize),this.previousShardIndex;function n(s){return e<s.start?-1:e>=s.end?1:0}if(n(this.shards[this.previousShardIndex])===0)return this.previousShardIndex;const r=bT(this.shards,n);return r===-1?-1:(this.previousShardIndex=r,this.previousShardIndex)}}function bT(t,e){let n=0,r=t.length;for(;n<=r;){const s=Math.floor((r-n)/2)+n,a=e(t[s]);if(a===0)return s;a<0?r=s:n=s+1}return-1}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kT(){V().set("PROD",!0)}function ST(){V().set("DEBUG",!0)}function NT(){V().set("DEPRECATION_WARNINGS_ENABLED",!1),console.warn("TensorFlow.js deprecation warnings have been disabled.")}function ET(t){V().getBool("DEPRECATION_WARNINGS_ENABLED")&&console.warn(t+" You can disable deprecation warnings with tf.disableDeprecationWarnings().")}function xT(){E.disposeVariables()}function TT(){return E}function _T(){return E.memory()}function $T(t){return E.profile(t)}function Y(t,e){return E.tidy(t,e)}function Ge(t){Qp(t).forEach(n=>n.dispose())}function zt(t){return E.keep(t)}function IT(t){return E.time(t)}function AT(t){return E.setBackend(t)}function OT(){return E.ready()}function Yw(){return E.backendName}function CT(t){E.removeBackend(t)}function DT(t){return E.findBackend(t)}function PT(t){return E.findBackendFactory(t)}function FT(t,e,n=1){return E.registerBackend(t,e,n)}function Zw(){return E.backend}function RT(t,e){V().setPlatform(t,e)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const er=4;async function LT(t,e){const n=[],r=[],s=Array.isArray(t)?t.map(o=>o.name):Object.keys(t);for(let o=0;o<s.length;++o){const i=s[o],l=Array.isArray(t)?t[o].tensor:t[i];if(l.dtype!=="float32"&&l.dtype!=="int32"&&l.dtype!=="bool"&&l.dtype!=="string"&&l.dtype!=="complex64")throw new Error(`Unsupported dtype in weight '${i}': ${l.dtype}`);const u={name:i,shape:l.shape,dtype:l.dtype};if(l.dtype==="string"){const p=new Promise(async c=>{const f=await l.bytes(),h=f.reduce((b,y)=>b+y.length,0)+er*f.length,m=new Uint8Array(h);let w=0;for(let b=0;b<f.length;b++){const y=f[b],S=new Uint8Array(new Uint32Array([y.length]).buffer);m.set(S,w),w+=er,m.set(y,w),w+=y.length}c(m)});r.push(p)}else r.push(l.data());e!=null&&(u.group=e),n.push(u)}const a=await Promise.all(r);return{data:jT(a),specs:n}}function Jw(t,e){const n=new qt(t),r={};let s=0;for(const a of e){const o=zT(a,(i,l)=>n.slice(s+i,s+l));r[a.name]=ev(a,n.slice(s,s+o)),s+=o}return r}function zT(t,e){const n=te(t.shape);let r;if("quantization"in t){const s=t.quantization;r=Rr[s.dtype]}else if(t.dtype==="string"){let s=0;for(let a=0;a<n;a++)s+=er+new Uint32Array(e(s,s+er))[0];return s}else r=Rr[t.dtype];return n*r}async function BT(t,e){const n=te(t.shape);let r;if("quantization"in t){const s=t.quantization;r=Rr[s.dtype]}else if(t.dtype==="string"){let s=0;for(let a=0;a<n;a++)s+=er+new Uint32Array(await e(s,s+er))[0];return s}else r=Rr[t.dtype];return n*r}function ev(t,e){const n=t.name,r=t.dtype,s=t.shape,a=te(s);let o,i=0;if("quantization"in t){const l=t.quantization;if(l.dtype==="uint8"||l.dtype==="uint16"){if(!("min"in l&&"scale"in l))throw new Error(`Weight ${t.name} with quantization ${l.dtype} doesn't have corresponding metadata min and scale.`)}else if(l.dtype==="float16"){if(r!=="float32")throw new Error(`Weight ${t.name} is quantized with ${l.dtype} which only supports weights of type float32 not ${r}.`)}else throw new Error(`Weight ${t.name} has unknown quantization dtype ${l.dtype}. Supported quantization dtypes are: 'uint8', 'uint16', and 'float16'.`);const u=Rr[l.dtype],p=l.dtype==="uint8"?new Uint8Array(e):new Uint16Array(e);if(r==="float32")if(l.dtype==="uint8"||l.dtype==="uint16"){o=new Float32Array(p.length);for(let c=0;c<p.length;c++){const f=p[c];o[c]=f*l.scale+l.min}}else if(l.dtype==="float16")o=qT()(p);else throw new Error(`Unsupported quantization type ${l.dtype} for weight type float32.`);else if(r==="int32"){if(l.dtype!=="uint8"&&l.dtype!=="uint16")throw new Error(`Unsupported quantization type ${l.dtype} for weight type int32.`);o=new Int32Array(p.length);for(let c=0;c<p.length;c++){const f=p[c];o[c]=Math.round(f*l.scale+l.min)}}else throw new Error(`Unsupported dtype in weight '${n}': ${r}`);i+=a*u}else if(r==="string"){const l=te(t.shape);o=[];for(let u=0;u<l;u++){const p=new Uint32Array(e.slice(i,i+er))[0];i+=er;const c=new Uint8Array(e.slice(i,i+p));o.push(c),i+=p}}else{const l=Rr[r];if(r==="float32")o=new Float32Array(e);else if(r==="int32")o=new Int32Array(e);else if(r==="bool")o=new Uint8Array(e);else if(r==="complex64"){o=new Float32Array(e);const u=new Float32Array(o.length/2),p=new Float32Array(o.length/2);for(let m=0;m<u.length;m++)u[m]=o[m*2],p[m]=o[m*2+1];const c=Vt(u,s,"float32"),f=Vt(p,s,"float32"),h=kn(c,f);return c.dispose(),f.dispose(),h}else throw new Error(`Unsupported dtype in weight '${n}': ${r}`);i+=a*l}return Vt(o,s,r)}async function Ph(t,e,n){let r=new Uint8Array(e);for(;r.byteLength<n;){const{done:s,value:a}=await t.read();if(s&&a==null){const i=n-r.byteLength;throw new Error(`Reader is done but ${i} bytes are still expected`)}const o=new Uint8Array(r.length+a.byteLength);o.set(r,0),o.set(new Uint8Array(a),r.length),r=o}return r.buffer}async function tv(t,e){const n={},r=t.getReader();let s=new ArrayBuffer(0);for(const a of e){const o=await BT(a,async(u,p)=>(s=await Ph(r,s,p),s.slice(u,p)));s=await Ph(r,s,o);const i=s.slice(0,o);s=s.slice(o);const l=ev(a,i);if(n[a.name]=l,Yw()==="webgpu"){const u=Zw();"uploadToGPU"in u&&te(l.shape)>=V().get("WEBGPU_CPU_HANDOFF_SIZE_THRESHOLD")&&u.uploadToGPU(l.dataId)}}return n}function jT(t){if(t===null)throw new Error(`Invalid input value: ${JSON.stringify(t)}`);let e=0;const n=[];t.forEach(a=>{if(e+=a.byteLength,n.push(a.byteLength===a.buffer.byteLength?a:new a.constructor(a)),!(a instanceof Float32Array||a instanceof Int32Array||a instanceof Uint8Array))throw new Error(`Unsupported TypedArray subtype: ${a.constructor.name}`)});const r=new Uint8Array(e);let s=0;return n.forEach(a=>{r.set(new Uint8Array(a.buffer),s),s+=a.byteLength}),r.buffer}const Yp=typeof Buffer<"u"&&(typeof Blob>"u"||typeof atob>"u"||typeof btoa>"u");function Fh(t){return Yp?Buffer.byteLength(t,"utf8"):new Blob([t]).size}function MT(t){if(Yp)return Buffer.from(t).toString("base64");const e=new Uint8Array(t);let n="";for(let r=0,s=e.length;r<s;r++)n+=String.fromCharCode(e[r]);return btoa(n)}function VT(t){if(Yp){const r=Buffer.from(t,"base64");return r.buffer.slice(r.byteOffset,r.byteOffset+r.byteLength)}const e=atob(t),n=new Uint8Array(e.length);for(let r=0;r<e.length;++r)n.set([e.charCodeAt(r)],r);return n.buffer}function UT(t){return qt.join(t)}function Rh(t){const e="/";for(t=t.trim();t.endsWith(e);)t=t.slice(0,t.length-1);const n=t.split(e);return n[n.length-1]}function nv(t,e){const n={modelTopology:t.modelTopology,format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,weightsManifest:e};return t.signature!=null&&(n.signature=t.signature),t.userDefinedMetadata!=null&&(n.userDefinedMetadata=t.userDefinedMetadata),t.modelInitializer!=null&&(n.modelInitializer=t.modelInitializer),t.initializerSignature!=null&&(n.initializerSignature=t.initializerSignature),t.trainingConfig!=null&&(n.trainingConfig=t.trainingConfig),n}function rv(t,e,n){const r={modelTopology:t.modelTopology,format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy};if(t.trainingConfig!=null&&(r.trainingConfig=t.trainingConfig),t.weightsManifest!=null){if(!e)throw new Error("modelJSON has weightsManifest but weightSpecs is null");if(!n)throw new Error("modelJSON has weightsManifest but weightData is null");r.weightSpecs=e,r.weightData=n}return t.signature!=null&&(r.signature=t.signature),t.userDefinedMetadata!=null&&(r.userDefinedMetadata=t.userDefinedMetadata),t.modelInitializer!=null&&(r.modelInitializer=t.modelInitializer),t.initializerSignature!=null&&(r.initializerSignature=t.initializerSignature),r}async function Zp(t,e){let n,r;return t.weightsManifest!=null&&([n,r]=await e(t.weightsManifest)),rv(t,n,r)}function co(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:t.modelTopology==null?0:Fh(JSON.stringify(t.modelTopology)),weightSpecsBytes:t.weightSpecs==null?0:Fh(JSON.stringify(t.weightSpecs)),weightDataBytes:t.weightData==null?0:new qt(t.weightData).byteLength}}function vc(t){const e=[];for(const n of t)e.push(...n.weights);return e}function WT(){const t=n=>{let r=n<<13,s=0;for(;!(r&8388608);)s-=8388608,r<<=1;return r&=-8388609,s+=947912704,r|s},e=new Uint32Array(2048);e[0]=0;for(let n=1;n<1024;n++)e[n]=t(n);for(let n=1024;n<2048;n++)e[n]=939524096+(n-1024<<13);return e}function HT(){const t=new Uint32Array(64);t[0]=0,t[31]=1199570944,t[32]=2147483648,t[63]=3347054592;for(let e=1;e<31;e++)t[e]=e<<23;for(let e=33;e<63;e++)t[e]=2147483648+(e-32<<23);return t}function GT(){const t=new Uint32Array(64);for(let e=0;e<64;e++)t[e]=1024;return t[0]=t[32]=0,t}function qT(){const t=WT(),e=HT(),n=GT();return r=>{const s=new ArrayBuffer(4*r.length),a=new Uint32Array(s);for(let o=0;o<r.length;o++){const i=r[o],l=t[n[i>>10]+(i&1023)]+e[i>>10];a[o]=l}return new Float32Array(s)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class fe{constructor(){this.saveRouters=[],this.loadRouters=[]}static getInstance(){return fe.instance==null&&(fe.instance=new fe),fe.instance}static registerSaveRouter(e){fe.getInstance().saveRouters.push(e)}static registerLoadRouter(e){fe.getInstance().loadRouters.push(e)}static getSaveHandlers(e){return fe.getHandlers(e,"save")}static getLoadHandlers(e,n){return fe.getHandlers(e,"load",n)}static getHandlers(e,n,r){const s=[];return(n==="load"?fe.getInstance().loadRouters:fe.getInstance().saveRouters).forEach(o=>{const i=o(e,r);i!==null&&s.push(i)}),s}}const KT=t=>fe.registerSaveRouter(t),QT=t=>fe.registerLoadRouter(t),XT=t=>fe.getSaveHandlers(t),YT=(t,e)=>fe.getLoadHandlers(t,e);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const bc="tensorflowjs",kc=1,xr="models_store",Ln="model_info_store";function sv(){if(!V().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");const t=typeof window>"u"?self:window,e=t.indexedDB||t.mozIndexedDB||t.webkitIndexedDB||t.msIndexedDB||t.shimIndexedDB;if(e==null)throw new Error("The current browser does not appear to support IndexedDB.");return e}function Sc(t){const e=t.result;e.createObjectStore(xr,{keyPath:"modelPath"}),e.createObjectStore(Ln,{keyPath:"modelPath"})}class Lr{constructor(e){if(this.indexedDB=sv(),e==null||!e)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=e}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return this.databaseAction(this.modelPath,e)}async load(){return this.databaseAction(this.modelPath)}databaseAction(e,n){return new Promise((r,s)=>{const a=this.indexedDB.open(bc,kc);a.onupgradeneeded=()=>Sc(a),a.onsuccess=()=>{const o=a.result;if(n==null){const i=o.transaction(xr,"readonly"),u=i.objectStore(xr).get(this.modelPath);u.onsuccess=()=>{if(u.result==null)return o.close(),s(new Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));r(u.result.modelArtifacts)},u.onerror=p=>(o.close(),s(u.error)),i.oncomplete=()=>o.close()}else{n.weightData=qt.join(n.weightData);const i=co(n),l=o.transaction(Ln,"readwrite");let u=l.objectStore(Ln),p;try{p=u.put({modelPath:this.modelPath,modelArtifactsInfo:i})}catch(f){return s(f)}let c;p.onsuccess=()=>{c=o.transaction(xr,"readwrite");const f=c.objectStore(xr);let h;try{h=f.put({modelPath:this.modelPath,modelArtifacts:n,modelArtifactsInfo:i})}catch(m){return s(m)}h.onsuccess=()=>r({modelArtifactsInfo:i}),h.onerror=m=>{u=l.objectStore(Ln);const w=u.delete(this.modelPath);w.onsuccess=()=>(o.close(),s(h.error)),w.onerror=b=>(o.close(),s(h.error))}},p.onerror=f=>(o.close(),s(p.error)),l.oncomplete=()=>{c==null?o.close():c.oncomplete=()=>o.close()}}},a.onerror=o=>s(a.error)})}}Lr.URL_SCHEME="indexeddb://";const av=t=>V().getBool("IS_BROWSER")&&!Array.isArray(t)&&t.startsWith(Lr.URL_SCHEME)?ZT(t.slice(Lr.URL_SCHEME.length)):null;fe.registerSaveRouter(av);fe.registerLoadRouter(av);function ZT(t){return new Lr(t)}function JT(t){return t.startsWith(Lr.URL_SCHEME)?t.slice(Lr.URL_SCHEME.length):t}class e3{constructor(){this.indexedDB=sv()}async listModels(){return new Promise((e,n)=>{const r=this.indexedDB.open(bc,kc);r.onupgradeneeded=()=>Sc(r),r.onsuccess=()=>{const s=r.result,a=s.transaction(Ln,"readonly"),i=a.objectStore(Ln).getAll();i.onsuccess=()=>{const l={};for(const u of i.result)l[u.modelPath]=u.modelArtifactsInfo;e(l)},i.onerror=l=>(s.close(),n(i.error)),a.oncomplete=()=>s.close()},r.onerror=s=>n(r.error)})}async removeModel(e){return e=JT(e),new Promise((n,r)=>{const s=this.indexedDB.open(bc,kc);s.onupgradeneeded=()=>Sc(s),s.onsuccess=()=>{const a=s.result,o=a.transaction(Ln,"readwrite"),i=o.objectStore(Ln),l=i.get(e);let u;l.onsuccess=()=>{if(l.result==null)return a.close(),r(new Error(`Cannot find model with path '${e}' in IndexedDB.`));{const p=i.delete(e),c=()=>{u=a.transaction(xr,"readwrite");const h=u.objectStore(xr).delete(e);h.onsuccess=()=>n(l.result.modelArtifactsInfo),h.onerror=m=>r(l.error)};p.onsuccess=c,p.onerror=f=>(c(),a.close(),r(l.error))}},l.onerror=p=>(a.close(),r(l.error)),o.oncomplete=()=>{u==null?a.close():u.oncomplete=()=>a.close()}},s.onerror=a=>r(s.error)})}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const pn="/",Yr="tensorflowjs_models",ov="info",t3="model_topology",n3="weight_specs",r3="weight_data",s3="model_metadata";function iv(t){return{info:[Yr,t,ov].join(pn),topology:[Yr,t,t3].join(pn),weightSpecs:[Yr,t,n3].join(pn),weightData:[Yr,t,r3].join(pn),modelMetadata:[Yr,t,s3].join(pn)}}function lv(t){for(const e of Object.values(t))window.localStorage.removeItem(e)}function a3(t){const e=t.split(pn);if(e.length<3)throw new Error(`Invalid key format: ${t}`);return e.slice(1,e.length-1).join(pn)}function o3(t){return t.startsWith(zr.URL_SCHEME)?t.slice(zr.URL_SCHEME.length):t}class zr{constructor(e){if(!V().getBool("IS_BROWSER")||typeof window>"u"||typeof window.localStorage>"u")throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,e==null||!e)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=e,this.keys=iv(this.modelPath)}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");{const n=JSON.stringify(e.modelTopology),r=JSON.stringify(e.weightSpecs),s=co(e),a=qt.join(e.weightData);try{this.LS.setItem(this.keys.info,JSON.stringify(s)),this.LS.setItem(this.keys.topology,n),this.LS.setItem(this.keys.weightSpecs,r),this.LS.setItem(this.keys.weightData,MT(a));const o={format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,signature:e.signature!=null?e.signature:void 0,userDefinedMetadata:e.userDefinedMetadata!=null?e.userDefinedMetadata:void 0,modelInitializer:e.modelInitializer!=null?e.modelInitializer:void 0,initializerSignature:e.initializerSignature!=null?e.initializerSignature:void 0,trainingConfig:e.trainingConfig!=null?e.trainingConfig:void 0};return this.LS.setItem(this.keys.modelMetadata,JSON.stringify(o)),{modelArtifactsInfo:s}}catch{throw lv(this.keys),new Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${s.modelTopologyBytes}, weightSpecsBytes=${s.weightSpecsBytes}, weightDataBytes=${s.weightDataBytes}.`)}}}async load(){const e=JSON.parse(this.LS.getItem(this.keys.info));if(e==null)throw new Error(`In local storage, there is no model with name '${this.modelPath}'`);if(e.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");const n={},r=JSON.parse(this.LS.getItem(this.keys.topology));if(r==null)throw new Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);n.modelTopology=r;const s=JSON.parse(this.LS.getItem(this.keys.weightSpecs));if(s==null)throw new Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);n.weightSpecs=s;const a=this.LS.getItem(this.keys.modelMetadata);if(a!=null){const i=JSON.parse(a);n.format=i.format,n.generatedBy=i.generatedBy,n.convertedBy=i.convertedBy,i.signature!=null&&(n.signature=i.signature),i.userDefinedMetadata!=null&&(n.userDefinedMetadata=i.userDefinedMetadata),i.modelInitializer!=null&&(n.modelInitializer=i.modelInitializer),i.initializerSignature!=null&&(n.initializerSignature=i.initializerSignature),i.trainingConfig!=null&&(n.trainingConfig=i.trainingConfig)}const o=this.LS.getItem(this.keys.weightData);if(o==null)throw new Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);return n.weightData=VT(o),n}}zr.URL_SCHEME="localstorage://";const uv=t=>V().getBool("IS_BROWSER")&&!Array.isArray(t)&&t.startsWith(zr.URL_SCHEME)?i3(t.slice(zr.URL_SCHEME.length)):null;fe.registerSaveRouter(uv);fe.registerLoadRouter(uv);function i3(t){return new zr(t)}class l3{constructor(){k(V().getBool("IS_BROWSER"),()=>"Current environment is not a web browser"),k(typeof window>"u"||typeof window.localStorage<"u",()=>"Current browser does not appear to support localStorage"),this.LS=window.localStorage}async listModels(){const e={},n=Yr+pn,r=pn+ov;for(let s=0;s<this.LS.length;++s){const a=this.LS.key(s);if(a.startsWith(n)&&a.endsWith(r)){const o=a3(a);e[o]=JSON.parse(this.LS.getItem(a))}}return e}async removeModel(e){e=o3(e);const n=iv(e);if(this.LS.getItem(n.info)==null)throw new Error(`Cannot find model at path '${e}'`);const r=JSON.parse(this.LS.getItem(n.info));return lv(n),r}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const vs="://";class Ve{constructor(){this.managers={}}static getInstance(){return Ve.instance==null&&(Ve.instance=new Ve),Ve.instance}static registerManager(e,n){k(e!=null,()=>"scheme must not be undefined or null."),e.endsWith(vs)&&(e=e.slice(0,e.indexOf(vs))),k(e.length>0,()=>"scheme must not be an empty string.");const r=Ve.getInstance();k(r.managers[e]==null,()=>`A model store manager is already registered for scheme '${e}'.`),r.managers[e]=n}static getManager(e){const n=Ve.getInstance().managers[e];if(n==null)throw new Error(`Cannot find model manager for scheme '${e}'`);return n}static getSchemes(){return Object.keys(Ve.getInstance().managers)}}function ri(t){if(t.indexOf(vs)===-1)throw new Error(`The url string provided does not contain a scheme. Supported schemes are: ${Ve.getSchemes().join(",")}`);return{scheme:t.split(vs)[0],path:t.split(vs)[1]}}async function cv(t,e,n=!1){k(t!==e,()=>`Old path and new path are the same: '${t}'`);const r=fe.getLoadHandlers(t);k(r.length>0,()=>`Copying failed because no load handler is found for source URL ${t}.`),k(r.length<2,()=>`Copying failed because more than one (${r.length}) load handlers for source URL ${t}.`);const s=r[0],a=fe.getSaveHandlers(e);k(a.length>0,()=>`Copying failed because no save handler is found for destination URL ${e}.`),k(a.length<2,()=>`Copying failed because more than one (${r.length}) save handlers for destination URL ${e}.`);const o=a[0],i=ri(t).scheme,l=ri(t).path,u=i===ri(t).scheme,p=await s.load();n&&u&&await Ve.getManager(i).removeModel(l);const c=await o.save(p);return n&&!u&&await Ve.getManager(i).removeModel(l),c.modelArtifactsInfo}async function u3(){const t=Ve.getSchemes(),e={};for(const n of t){const r=await Ve.getManager(n).listModels();for(const s in r){const a=n+vs+s;e[a]=r[s]}}return e}async function c3(t){const e=ri(t);return Ve.getManager(e.scheme).removeModel(e.path)}async function p3(t,e){return cv(t,e,!1)}async function f3(t,e){return cv(t,e,!0)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class d3{constructor(){this.messageName="setTimeoutCustom",this.functionRefs=[],this.handledMessageCount=0,this.hasEventListener=!1}fetch(e,n){return fetch(e,n)}now(){return performance.now()}encode(e,n){if(n!=="utf-8"&&n!=="utf8")throw new Error(`Browser's encoder only supports utf-8, but got ${n}`);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(e)}decode(e,n){return new TextDecoder(n).decode(e)}setTimeoutCustom(e,n){if(typeof window>"u"||!V().getBool("USE_SETTIMEOUTCUSTOM")){setTimeout(e,n);return}this.functionRefs.push(e),setTimeout(()=>{window.postMessage({name:this.messageName,index:this.functionRefs.length-1},"*")},n),this.hasEventListener||(this.hasEventListener=!0,window.addEventListener("message",r=>{if(r.source===window&&r.data.name===this.messageName){r.stopPropagation();const s=this.functionRefs[r.data.index];s(),this.handledMessageCount++,this.handledMessageCount===this.functionRefs.length&&(this.functionRefs=[],this.handledMessageCount=0)}},!0))}isTypedArray(e){return Dw(e)}}if(V().get("IS_BROWSER")){V().setPlatform("browser",new d3);try{Ve.registerManager(zr.URL_SCHEME,new l3)}catch{}try{Ve.registerManager(Lr.URL_SCHEME,new e3)}catch{}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const h3={importFetch:()=>require("node-fetch")};let iu;class m3{constructor(){this.util=require("util"),this.textEncoder=new this.util.TextEncoder}fetch(e,n){return V().global.fetch!=null?V().global.fetch(e,n):(iu==null&&(iu=h3.importFetch()),iu(e,n))}now(){const e=process.hrtime();return e[0]*1e3+e[1]/1e6}encode(e,n){if(n!=="utf-8"&&n!=="utf8")throw new Error(`Node built-in encoder only supports utf-8, but got ${n}`);return this.textEncoder.encode(e)}decode(e,n){return e.length===0?"":new this.util.TextDecoder(n).decode(e)}isTypedArray(e){return this.util.types.isFloat32Array(e)||this.util.types.isInt32Array(e)||this.util.types.isUint8Array(e)||this.util.types.isUint8ClampedArray(e)}}V().get("IS_NODE")&&!V().get("IS_BROWSER")&&V().setPlatform("node",new m3);/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tn(t,e="float32",n){return e=e||"float32",pt(t),new Bi(t,e,n)}/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function g3(t,e){const n=g(t,"x","cast");if(!Ry(e))throw new Error(`Failed to cast to unknown dtype ${e}`);if(e==="string"&&n.dtype!=="string"||e!=="string"&&n.dtype==="string")throw new Error("Only strings can be casted to strings");const r={x:n},s={dtype:e};return E.runKernel(Up,r,s)}const re=N({cast_:g3});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function y3(t){const n={x:g(t,"x","clone","string_or_numeric")};return E.runKernel(Hp,n)}const mn=N({clone_:y3});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Jp(t,e=!1){console.log(t.toString(e))}/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Kw();const w3={buffer:tn,cast:re,clone:mn,print:Jp};iT(w3);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function v3(t,e){let n=g(t,"a","add"),r=g(e,"b","add");[n,r]=me(n,r);const s={a:n,b:r};return E.runKernel(Vp,s)}const M=N({add_:v3});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function b3(t,e){let n=g(t,"a","floorDiv"),r=g(e,"b","floorDiv");[n,r]=me(n,r);const s={a:n,b:r};return E.runKernel(U0,s)}const ef=N({floorDiv_:b3});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function k3(t,e){let n=g(t,"a","div"),r=g(e,"b","div");if([n,r]=me(n,r),n.dtype==="int32"&&r.dtype==="int32")return ef(n,r);const s={a:n,b:r},a={};return E.runKernel(O0,s,a)}const oe=N({div_:k3});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function S3(t,e){let n=g(t,"a","mul"),r=g(e,"b","mul");[n,r]=me(n,r);const s={a:n,b:r};return E.runKernel(k1,s)}const R=N({mul_:S3});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function N3(t){const e=g(t,"x","abs");if(e.dtype==="complex64"){const n={x:e};return E.runKernel(f0,n)}else{const n={x:e};return E.runKernel(Uy,n)}}const rt=N({abs_:N3});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function E3(t){const n={x:g(t,"x","acos")};return E.runKernel(Wy,n)}const pv=N({acos_:E3});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function x3(t){const n={x:g(t,"x","acosh")};return E.runKernel(Hy,n)}const fv=N({acosh_:x3});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function T3(t){k(Array.isArray(t),()=>"The argument passed to tf.addN() must be a list of tensors"),k(t.length>=1,()=>`Must pass at least one tensor to tf.addN(), but got ${t.length}`);const e=t.map((s,a)=>g(s,`tensors${a}`,"addN")),n=e[0];e.forEach(s=>{if(s.dtype!==n.dtype)throw new Error("All tensors passed to tf.addN() must have the same dtype")}),e.forEach(s=>{if(!Ht(s.shape,n.shape))throw new Error("All tensors passed to tf.addN() must have the same shape")});const r=e;return E.runKernel(Gy,r)}const dv=N({addN_:T3});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _3(t,e=null,n=!1){const s={x:g(t,"x","all","bool")},a={axis:e,keepDims:n};return E.runKernel(qy,s,a)}const hv=N({all_:_3});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $3(t,e=null,n=!1){const s={x:g(t,"x","any","bool")},a={axis:e,keepDims:n};return E.runKernel(Ky,s,a)}const mv=N({any_:$3});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function I3(t,e=0){const r={x:g(t,"x","argMax")},s={axis:e};return E.runKernel(Qy,r,s)}const gv=N({argMax_:I3});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function A3(t,e=0){const r={x:g(t,"x","argMin")},s={axis:e};return E.runKernel(Xy,r,s)}const yv=N({argMin_:A3});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function O3(t){const n={x:g(t,"x","asin")};return E.runKernel(Yy,n)}const wv=N({asin_:O3});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function C3(t){const n={x:g(t,"x","asinh")};return E.runKernel(Zy,n)}const vv=N({asinh_:C3});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function D3(t){const n={x:g(t,"x","atan")};return E.runKernel(Jy,n)}const bv=N({atan_:D3});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function P3(t,e){let n=g(t,"a","atan2"),r=g(e,"b","atan2");[n,r]=me(n,r);const s={a:n,b:r};return E.runKernel(t0,s)}const kv=N({atan2_:P3});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function F3(t){const n={x:g(t,"x","atanh")};return E.runKernel(e0,n)}const Sv=N({atanh_:F3});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function R3(t,e,n,r,s="NHWC",a){const o=t[3],i=[...e,o],l=xv(s);return po(t,i,n,a,r,null,null,l)}function Nv(t,e,n,r,s,a,o="channelsLast"){const[i,l]=Ga(e);let u;if(o==="channelsLast")u=[i,l,t[3],t[3]];else if(o==="channelsFirst")u=[i,l,t[1],t[1]];else throw new Error(`Unknown dataFormat ${o}`);return po(t,u,n,r,s,a,!1,o)}function L3(t,e,n,r,s,a,o="NDHWC"){const[i,l,u]=Nc(e);let p,c;if(o==="NDHWC")c="channelsLast",p=[i,l,u,t[4],t[4]];else if(o==="NCDHW")c="channelsFirst",p=[i,l,u,t[1],t[1]];else throw new Error(`Unknown dataFormat ${o}`);return Ev(t,p,n,r,s,!1,c,a)}function po(t,e,n,r,s,a,o=!1,i="channelsLast"){let[l,u,p,c]=[-1,-1,-1,-1];if(i==="channelsLast")[l,u,p,c]=t;else if(i==="channelsFirst")[l,c,u,p]=t;else throw new Error(`Unknown dataFormat ${i}`);const[f,h,,m]=e,[w,b]=Ga(n),[y,S]=Ga(r),v=bs(f,y),x=bs(h,S),{padInfo:T,outHeight:_,outWidth:A}=j3(s,u,p,w,b,v,x,a,i),O=o?m*c:m;let L;return i==="channelsFirst"?L=[l,O,_,A]:i==="channelsLast"&&(L=[l,_,A,O]),{batchSize:l,dataFormat:i,inHeight:u,inWidth:p,inChannels:c,outHeight:_,outWidth:A,outChannels:O,padInfo:T,strideHeight:w,strideWidth:b,filterHeight:f,filterWidth:h,effectiveFilterHeight:v,effectiveFilterWidth:x,dilationHeight:y,dilationWidth:S,inShape:t,outShape:L,filterShape:e}}function Ev(t,e,n,r,s,a=!1,o="channelsLast",i){let[l,u,p,c,f]=[-1,-1,-1,-1,-1];if(o==="channelsLast")[l,u,p,c,f]=t;else if(o==="channelsFirst")[l,f,u,p,c]=t;else throw new Error(`Unknown dataFormat ${o}`);const[h,m,w,,b]=e,[y,S,v]=Nc(n),[x,T,_]=Nc(r),A=bs(h,x),O=bs(m,T),L=bs(w,_),{padInfo:P,outDepth:j,outHeight:q,outWidth:Q}=M3(s,u,p,c,y,S,v,A,O,L,i),ne=a?b*f:b;let be;return o==="channelsFirst"?be=[l,ne,j,q,Q]:o==="channelsLast"&&(be=[l,j,q,Q,ne]),{batchSize:l,dataFormat:o,inDepth:u,inHeight:p,inWidth:c,inChannels:f,outDepth:j,outHeight:q,outWidth:Q,outChannels:ne,padInfo:P,strideDepth:y,strideHeight:S,strideWidth:v,filterDepth:h,filterHeight:m,filterWidth:w,effectiveFilterDepth:A,effectiveFilterHeight:O,effectiveFilterWidth:L,dilationDepth:x,dilationHeight:T,dilationWidth:_,inShape:t,outShape:be,filterShape:e}}function z3(t,e,n,r,s){r==null&&(r=tf(t,e,n));const a=t[0],o=t[1],i=qa((a-e+2*r)/n+1,s),l=qa((o-e+2*r)/n+1,s);return[i,l]}function B3(t,e,n,r,s,a){s==null&&(s=tf(t,e[0],r[0]));const o=[0,0,0,n];for(let i=0;i<3;i++)t[i]+2*s>=e[i]&&(o[i]=qa((t[i]-e[i]+2*s)/r[i]+1,a));return o}function tf(t,e,n,r=1){const s=bs(e,r);return Math.floor((t[0]*(n-1)-n+s)/2)}function Ga(t){return typeof t=="number"?[t,t,t]:t.length===2?[t[0],t[1],1]:t}function Nc(t){return typeof t=="number"?[t,t,t]:t}function bs(t,e){return e<=1?t:t+(t-1)*(e-1)}function j3(t,e,n,r,s,a,o,i,l){let u,p,c;if(typeof t=="number"){u={top:t,bottom:t,left:t,right:t,type:t===0?"VALID":"NUMBER"};const h=z3([e,n],a,r,t,i);p=h[0],c=h[1]}else if(t==="same"){p=Math.ceil(e/r),c=Math.ceil(n/s);const f=Math.max(0,(p-1)*r+a-e),h=Math.max(0,(c-1)*s+o-n),m=Math.floor(f/2),w=f-m,b=Math.floor(h/2),y=h-b;u={top:m,bottom:w,left:b,right:y,type:"SAME"}}else if(t==="valid")u={top:0,bottom:0,left:0,right:0,type:"VALID"},p=Math.ceil((e-a+1)/r),c=Math.ceil((n-o+1)/s);else if(typeof t=="object"){const f=l==="channelsLast"?t[1][0]:t[2][0],h=l==="channelsLast"?t[1][1]:t[2][1],m=l==="channelsLast"?t[2][0]:t[3][0],w=l==="channelsLast"?t[2][1]:t[3][1];u={top:f,bottom:h,left:m,right:w,type:f===0&&h===0&&m===0&&w===0?"VALID":"EXPLICIT"},p=qa((e-a+f+h)/r+1,i),c=qa((n-o+m+w)/s+1,i)}else throw Error(`Unknown padding parameter: ${t}`);return{padInfo:u,outHeight:p,outWidth:c}}function M3(t,e,n,r,s,a,o,i,l,u,p){let c,f,h,m;if(t==="valid"&&(t=0),typeof t=="number"){c={top:t,bottom:t,left:t,right:t,front:t,back:t,type:t===0?"VALID":"NUMBER"};const b=B3([e,n,r,1],[i,l,u],1,[s,a,o],t,p);f=b[0],h=b[1],m=b[2]}else if(t==="same"){f=Math.ceil(e/s),h=Math.ceil(n/a),m=Math.ceil(r/o);const w=(f-1)*s+i-e,b=(h-1)*a+l-n,y=(m-1)*o+u-r,S=Math.floor(w/2),v=w-S,x=Math.floor(b/2),T=b-x,_=Math.floor(y/2),A=y-_;c={top:x,bottom:T,left:_,right:A,front:S,back:v,type:"SAME"}}else throw Error(`Unknown padding parameter: ${t}`);return{padInfo:c,outDepth:f,outHeight:h,outWidth:m}}function qa(t,e){if(!e)return Math.trunc(t);switch(e){case"round":return Math.round(t);case"ceil":return Math.ceil(t);case"floor":return Math.floor(t);default:throw new Error(`Unknown roundingMode ${e}`)}}function Ka(t){const[e,n,r]=Ga(t);return e===1&&n===1&&r===1}function Nn(t,e){return Ka(t)||Ka(e)}function Br(t){return Ga(t).every(e=>e>0)}function xv(t){if(t==="NHWC")return"channelsLast";if(t==="NCHW")return"channelsFirst";throw new Error(`Unknown dataFormat ${t}`)}function Ct(t,e,n){if(n!=null){if(typeof e=="string")throw Error(`Error in ${t}: pad must be an integer when using dimRoundingMode ${n} but got pad ${e}.`);if(typeof e=="number")k(As(e),()=>`Error in ${t}: pad must be an integer when using dimRoundingMode ${n} but got pad ${e}.`);else if(typeof e=="object")e.forEach(r=>{r.forEach(s=>{k(As(s),()=>`Error in ${t}: pad must be an integer when using dimRoundingMode ${n} but got pad ${s}.`)})});else throw Error(`Error in ${t}: Unknown padding parameter: ${e}`)}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function V3(t,e){const r={x:g(t,"x","reshape","string_or_numeric")},s={shape:e};return E.runKernel(M1,r,s)}const I=N({reshape_:V3});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function U3(t,e,n,r,s){const a=g(t,"x","avgPool","float32"),o=1;k(Nn(n,o),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${n} and dilations '${o}'`);let i=a,l=!1;a.rank===3&&(l=!0,i=I(a,[1,a.shape[0],a.shape[1],a.shape[2]])),k(i.rank===4,()=>`Error in avgPool: x must be rank 4 but got rank ${i.rank}.`),Ct("avgPool",r,s);const u={x:i},p={filterSize:e,strides:n,pad:r,dimRoundingMode:s};let c=E.runKernel(n0,u,p);return c=re(c,a.dtype),l?I(c,[c.shape[1],c.shape[2],c.shape[3]]):c}const nf=N({avgPool_:U3});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function W3(t,e,n,r,s,a="NDHWC"){const o=g(t,"x","avgPool3d","float32");let i=o,l=!1;o.rank===4&&(l=!0,i=I(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]])),k(i.rank===5,()=>`Error in avgPool3d: x must be rank 5 but got rank ${i.rank}.`),k(a==="NDHWC",()=>`Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of ${a}`),k(typeof n=="number"&&n>0||Array.isArray(n)&&n[0]>0&&n[1]>0&&n[2]>0,()=>`Error in avgPool3d: Stride must be > 0, but got '${n}'`),Ct("avgPool3d",r,s);const u={x:i},p={filterSize:e,strides:n,pad:r,dimRoundingMode:s,dataFormat:a};let c=E.runKernel(r0,u,p);return c=re(c,i.dtype),l?I(c,[c.shape[1],c.shape[2],c.shape[3],c.shape[4]]):c}const Tv=N({avgPool3d_:W3});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function H3(t,e=0){k(t.length>=1,()=>"Pass at least one tensor to concat");const n=Ha(t,"tensors","concat","string_or_numeric");if(n[0].dtype==="complex64"&&n.forEach(a=>{if(a.dtype!=="complex64")throw new Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype ${a.dtype}. `)}),n.length===1)return mn(n[0]);const r=n,s={axis:e};return E.runKernel(d0,r,s)}const Le=N({concat_:H3});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function G3(t,e,n=!1,r=!1){let s=g(t,"a","matMul"),a=g(e,"b","matMul");[s,a]=me(s,a);const o={a:s,b:a},i={transposeA:n,transposeB:r};return E.runKernel(s0,o,i)}const Z=N({matMul_:G3});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function q3(t){const n={x:g(t,"x","sigmoid","float32")};return E.runKernel(rw,n)}const Ir=N({sigmoid_:q3});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function K3(t,e,n){const r=g(t,"x","slice","string_or_numeric");if(r.rank===0)throw new Error("Slicing scalar is not possible");const s={x:r},a={begin:e,size:n};return E.runKernel(J1,s,a)}const J=N({slice_:K3});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Q3(t){const n={x:g(t,"x","tanh","float32")};return E.runKernel(Nw,n)}const ji=N({tanh_:Q3});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function X3(t,e,n,r,s,a){const o=g(t,"forgetBias","basicLSTMCell"),i=g(e,"lstmKernel","basicLSTMCell"),l=g(n,"lstmBias","basicLSTMCell"),u=g(r,"data","basicLSTMCell"),p=g(s,"c","basicLSTMCell"),c=g(a,"h","basicLSTMCell"),f=Le([u,c],1),h=Z(f,i),m=M(h,l),w=m.shape[0],b=m.shape[1]/4,y=[w,b],S=J(m,[0,0],y),v=J(m,[0,b],y),x=J(m,[0,b*2],y),T=J(m,[0,b*3],y),_=M(R(Ir(S),ji(v)),R(p,Ir(M(o,x)))),A=R(ji(_),Ir(T));return[_,A]}const _v=N({basicLSTMCell_:X3});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Y3(t,e,n){const r=g(t,"x","batchToSpaceND"),s=e.reduce((i,l)=>i*l);k(r.rank>=1+e.length,()=>`input rank is ${r.rank} but should be > than blockShape.length ${e.length}`),k(n.length===e.length,()=>`crops.length is ${n.length} but should be equal to blockShape.length  ${e.length}`),k(r.shape[0]%s===0,()=>`input tensor batch is ${r.shape[0]} but is not divisible by the product of the elements of blockShape ${e.join(" * ")} === ${s}`);const a={x:r},o={blockShape:e,crops:n};return E.runKernel(a0,a,o)}const rf=N({batchToSpaceND_:Y3});function Z3(t){let e;return t.rank===0||t.rank===1?e=I(t,[1,1,1,t.size]):t.rank===2?e=I(t,[1,1,t.shape[0],t.shape[1]]):t.rank===3?e=I(t,[1,t.shape[0],t.shape[1],t.shape[2]]):e=t,e}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function J3(t,e,n,r,s,a){a==null&&(a=.001);const o=g(t,"x","batchNorm"),i=g(e,"mean","batchNorm"),l=g(n,"variance","batchNorm");let u;s!=null&&(u=g(s,"scale","batchNorm"));let p;r!=null&&(p=g(r,"offset","batchNorm")),k(i.rank===l.rank,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),k(p==null||i.rank===p.rank,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),k(u==null||i.rank===u.rank,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");const f={x:Z3(o),scale:u,offset:p,mean:i,variance:l},h={varianceEpsilon:a},m=E.runKernel(W0,f,h);return I(m,o.shape)}const fo=N({batchNorm_:J3});function e_(t,e,n,r,s,a){const o=g(t,"x","batchNorm"),i=g(e,"mean","batchNorm"),l=g(n,"variance","batchNorm");let u;s!=null&&(u=g(s,"scale","batchNorm"));let p;return r!=null&&(p=g(r,"offset","batchNorm")),k(o.rank===2,()=>`Error in batchNorm2D: x must be rank 2 but got rank ${o.rank}.`),k(i.rank===2||i.rank===1,()=>`Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank ${i.rank}.`),k(l.rank===2||l.rank===1,()=>`Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank ${l.rank}.`),u!=null&&k(u.rank===2||u.rank===1,()=>`Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank ${u.rank}.`),p!=null&&k(p.rank===2||p.rank===1,()=>`Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank ${p.rank}.`),fo(o,i,l,p,u,a)}const $v=N({batchNorm2d_:e_});function t_(t,e,n,r,s,a){const o=g(t,"x","batchNorm"),i=g(e,"mean","batchNorm"),l=g(n,"variance","batchNorm");let u;s!=null&&(u=g(s,"scale","batchNorm"));let p;return r!=null&&(p=g(r,"offset","batchNorm")),k(o.rank===3,()=>`Error in batchNorm3D: x must be rank 3 but got rank ${o.rank}.`),k(i.rank===3||i.rank===1,()=>`Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank ${i.rank}.`),k(l.rank===3||l.rank===1,()=>`Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank ${l.rank}.`),u!=null&&k(u.rank===3||u.rank===1,()=>`Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank ${u.rank}.`),p!=null&&k(p.rank===3||p.rank===1,()=>`Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank ${p.rank}.`),fo(o,i,l,p,u,a)}const Iv=N({batchNorm3d_:t_});function n_(t,e,n,r,s,a){const o=g(t,"x","batchNorm"),i=g(e,"mean","batchNorm"),l=g(n,"variance","batchNorm");let u;s!=null&&(u=g(s,"scale","batchNorm"));let p;return r!=null&&(p=g(r,"offset","batchNorm")),k(o.rank===4,()=>`Error in batchNorm4D: x must be rank 4 but got rank ${o.rank}.`),k(i.rank===4||i.rank===1,()=>`Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank ${i.rank}.`),k(l.rank===4||l.rank===1,()=>`Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank ${l.rank}.`),u!=null&&k(u.rank===4||u.rank===1,()=>`Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank ${u.rank}.`),p!=null&&k(p.rank===4||p.rank===1,()=>`Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank ${p.rank}.`),fo(o,i,l,p,u,a)}const Av=N({batchNorm4d_:n_});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function r_(t,e,n){const r=g(t,"x","bincount"),s=g(e,"weights","bincount");k(r.dtype==="int32",()=>`Error in bincount: input dtype must be int32, but got ${r.dtype}`),k(n>=0,()=>`size must be non-negative, but got ${n}.`),k(s.size===r.size||s.size===0,()=>`Error in bincount: weights must have the same size as input or0-length, but got input shape: ${r.shape}, weights shape: ${s.shape}.`);const a={x:r,weights:s},o={size:n};return E.runKernel(o0,a,o)}const sf=N({bincount_:r_});/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function s_(t,e){const n=g(t,"x","bitwiseAnd"),r=g(e,"y","bitwiseAnd");if(!Ht(n.shape,r.shape))throw new Error(`BitwiseAnd: Tensors must have the same shape. x: ${n.shape}, y: ${r.shape}`);if(n.dtype!=="int32"||r.dtype!=="int32")throw new Error(`BitwiseAnd: Only supports 'int32' values in tensor, found type of x: ${n.dtype} and type of y: ${r.dtype}`);const s={a:n,b:r};return E.runKernel(i0,s)}const Ov=N({bitwiseAnd_:s_});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function a_(t,e){const n=g(t,"s0","broadcastArgs","int32"),r=g(e,"s1","broadcastArgs","int32");if(n.rank!==1)throw new Error(`broadcastArgs(): first input must be a vector (rank=1). Has rank ${n.rank}`);if(r.rank!==1)throw new Error(`broadcastArgs(): second input must be a vector (rank=1). Has rank ${r.rank}`);const s={s0:n,s1:r};return E.runKernel(l0,s)}const Cv=N({broadcastArgs_:a_});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function o_(t,e){let n=g(t,"broadcastTo","x");const r=n.shape;if(pt(e),e.length<n.rank)throw new Error(`broadcastTo(): shape.length=${e.length} < input.rank=${n.rank}.`);if(e.length>n.rank){const u=n.shape.slice();for(;u.length<e.length;)u.unshift(1);n=I(n,u)}const s=n.shape,a=Array.from(e);for(let u=e.length-1;u>=0;u--)if(s[u]===e[u])a[u]=1;else if(n.shape[u]!==1)throw new Error(`broadcastTo(): [${r}] cannot be broadcast to [${e}].`);if(a.map((u,p)=>u>1?p:-1).filter(u=>u>=0).length===0)return mn(n);const i={x:n},l={reps:a};return E.runKernel(Gp,i,l)}const ba=N({broadcastTo_:o_});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function i_(t){const n={x:g(t,"x","ceil","float32")};return E.runKernel(u0,n)}const Dv=N({ceil_:i_});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Hs(t,e,n){pt(t),n=n||io(e);const r={shape:t,value:e,dtype:n};return E.runKernel(j0,{},r)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function l_(t,e,n){const r=g(t,"x","clipByValue");if(k(e<=n,()=>`Error in clip: min (${e}) must be less than or equal to max (${n}).`),e===n)return Hs(r.shape,e,r.dtype);const s={x:r},a={clipValueMin:e,clipValueMax:n};return E.runKernel(c0,s,a)}const Pv=N({clipByValue_:l_});function u_(t){return Le(t,0)}const Fv=N({concat1d_:u_});function c_(t,e){return Le(t,e)}const Rv=N({concat2d_:c_});function p_(t,e){return Le(t,e)}const Lv=N({concat3d_:p_});function f_(t,e){return Le(t,e)}const zv=N({concat4d_:f_});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function d_(t,e,n,r,s="NHWC",a=[1,1],o){const i=g(t,"x","conv2d","float32"),l=g(e,"filter","conv2d","float32");let u=i,p=!1;i.rank===3&&(p=!0,u=I(i,[1,i.shape[0],i.shape[1],i.shape[2]])),k(u.rank===4,()=>`Error in conv2d: input must be rank 4, but got rank ${u.rank}.`),k(l.rank===4,()=>`Error in conv2d: filter must be rank 4, but got rank ${l.rank}.`),Ct("conv2d",r,o);const c=s==="NHWC"?u.shape[3]:u.shape[1];k(c===l.shape[2],()=>`Error in conv2d: depth of input (${c}) must match input depth for filter ${l.shape[2]}.`),k(Nn(n,a),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${n} and dilations '${a}'`),k(Br(a),()=>"Error in conv2D: Dilated rates should be larger than 0."),k(Br(n),()=>"Error in conv2D: Strides should be larger than 0.");const f={x:u,filter:l},h={strides:n,pad:r,dataFormat:s,dilations:a,dimRoundingMode:o},m=E.runKernel(h0,f,h);return p?I(m,[m.shape[1],m.shape[2],m.shape[3]]):m}const ho=N({conv2d_:d_});function h_(t,e,n,r,s="NWC",a=1,o){const i=g(t,"x","conv1d"),l=g(e,"filter","conv1d");let u=i,p=!1;i.rank===2&&(p=!0,u=I(i,[1,i.shape[0],i.shape[1]])),k(u.rank===3,()=>`Error in conv1d: input must be rank 3, but got rank ${u.rank}.`),k(l.rank===3,()=>`Error in conv1d: filter must be rank 3, but got rank ${l.rank}.`),Ct("conv1d",r,o),k(u.shape[2]===l.shape[1],()=>`Error in conv1d: depth of input (${u.shape[2]}) must match input depth for filter ${l.shape[1]}.`),k(Nn(n,a),()=>`Error in conv1D: Either stride or dilation must be 1. Got stride ${n} and dilation '${a}'`),k(Br(a),()=>"Error in conv1D: Dilated rates should be larger than 0."),k(Br(n),()=>"Error in conv1D: Stride should be larger than 0."),k(s==="NWC",()=>`Error in conv1d: got dataFormat of ${s} but only NWC is currently supported.`);const c=I(l,[1,l.shape[0],l.shape[1],l.shape[2]]),f=I(u,[u.shape[0],1,u.shape[1],u.shape[2]]),b=ho(f,c,[1,n],r,"NHWC",[1,a],o);return p?I(b,[b.shape[2],b.shape[3]]):I(b,[b.shape[0],b.shape[2],b.shape[3]])}const Bv=N({conv1d_:h_});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function m_(t,e,n,r,s,a="NHWC",o){k(t.length===e.rank,()=>`Length of inShape (${t.length}) and rank of dy (${e.rank}) must match`);let i=t,l=e,u=!1;e.rank===3&&(u=!0,l=I(e,[1,e.shape[0],e.shape[1],e.shape[2]]),i=[1,t[0],t[1],t[2]]),k(i.length===4,()=>`Error in conv2dDerInput: inShape must be length 4, but got length ${i.length}.`),k(l.rank===4,()=>`Error in conv2dDerInput: dy must be rank 4, but got rank ${l.rank}`),k(n.rank===4,()=>`Error in conv2dDerInput: filter must be rank 4, but got rank ${n.rank}`);const p=a==="NHWC"?i[3]:i[1],c=a==="NHWC"?l.shape[3]:l.shape[1];k(p===n.shape[2],()=>`Error in conv2dDerInput: depth of input (${p}) must match input depth for filter ${n.shape[2]}.`),k(c===n.shape[3],()=>`Error in conv2dDerInput: depth of output (${c}) must match output depth for filter ${n.shape[3]}.`),Ct("conv2dDerInput",s,o);const f={dy:l,filter:n},h={strides:r,pad:s,dataFormat:a,dimRoundingMode:o,inputShape:i},m=E.runKernel(g0,f,h);return u?I(m,[m.shape[1],m.shape[2],m.shape[3]]):m}const jv=N({conv2DBackpropInput_:m_});function g_(t,e,n,r,s,a){const o=g(t,"x","conv2dTranspose"),i=g(e,"filter","conv2dTranspose");return jv(n,o,i,r,s,"NHWC",a)}const Mv=N({conv2dTranspose_:g_});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function y_(t,e,n,r,s="NDHWC",a=[1,1,1]){const o=g(t,"x","conv3d"),i=g(e,"filter","conv3d");let l=o,u=!1;o.rank===4&&(u=!0,l=I(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]])),k(l.rank===5,()=>`Error in conv3d: input must be rank 5, but got rank ${l.rank}.`),k(i.rank===5,()=>`Error in conv3d: filter must be rank 5, but got rank ${i.rank}.`),k(l.shape[4]===i.shape[3],()=>`Error in conv3d: depth of input (${l.shape[4]}) must match input depth for filter ${i.shape[3]}.`),k(Nn(n,a),()=>`Error in conv3D: Either strides or dilations must be 1. Got strides ${n} and dilations '${a}'`),k(s==="NDHWC",()=>`Error in conv3d: got dataFormat of ${s} but only NDHWC is currently supported.`),k(Br(a),()=>"Error in conv3D: Dilated rates should be larger than 0."),k(Br(n),()=>"Error in conv3D: Strides should be larger than 0.");const p={x:l,filter:i},c={strides:n,pad:r,dataFormat:s,dilations:a},f=E.runKernel(y0,p,c);return u?I(f,[f.shape[1],f.shape[2],f.shape[3],f.shape[4]]):f}const Vv=N({conv3d_:y_});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function w_(t,e,n,r,s){k(t.length===e.rank,()=>`Length of inShape (${t.length}) and rank of dy (${e.rank}) must match`);let a=t,o=e,i=!1;e.rank===4&&(i=!0,o=I(e,[1,e.shape[0],e.shape[1],e.shape[2],e.shape[3]]),a=[1,t[0],t[1],t[2],t[3]]);const l=a[4],u=o.shape[4];k(a.length===5,()=>`Error in conv3dDerInput: inShape must be length 5, but got length ${a.length}.`),k(o.rank===5,()=>`Error in conv3dDerInput: dy must be rank 5, but got rank ${o.rank}`),k(n.rank===5,()=>`Error in conv3dDerInput: filter must be rank 5, but got rank ${n.rank}`),k(l===n.shape[3],()=>`Error in conv3dDerInput: depth of input (${l}) must match input depth for filter ${n.shape[3]}.`),k(u===n.shape[4],()=>`Error in conv3dDerInput: depth of output (${u}) must match output depth for filter ${n.shape[4]}.`);const p={dy:o,filter:n},c={pad:s,strides:r,inputShape:a},f=E.runKernel(w0,p,c);return i?I(f,[f.shape[1],f.shape[2],f.shape[3],f.shape[4]]):f}const v_=N({conv3DBackpropInput_:w_});function b_(t,e,n,r,s){const a=g(t,"x","conv3dTranspose"),o=g(e,"filter","conv3dTranspose");return v_(n,a,o,r,s)}const Uv=N({conv3dTranspose_:b_});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function k_(t){const n={x:g(t,"x","cos","float32")};return E.runKernel(v0,n)}const Wv=N({cos_:k_});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function S_(t){const n={x:g(t,"x","cosh","float32")};return E.runKernel(b0,n)}const Hv=N({cosh_:S_});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function N_(t,e=0,n=!1,r=!1){const a={x:g(t,"x","cumprod")},o={axis:e,exclusive:n,reverse:r};return E.runKernel(k0,a,o)}const Gv=N({cumprod_:N_});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function E_(t,e=0,n=!1,r=!1){const a={x:g(t,"x","cumsum")},o={axis:e,exclusive:n,reverse:r};return E.runKernel(S0,a,o)}const qv=N({cumsum_:E_});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function x_(t,e,n,r=!1){const s=g(t,"x","denseBincount"),a=g(e,"weights","denseBincount");k(s.dtype==="int32",()=>`Error in denseBincount: input dtype must be int32, but got ${s.dtype}`),k(s.rank<=2,()=>`Error in denseBincount: input must be at most rank 2, but got rank ${s.rank}.`),k(n>=0,()=>`size must be non-negative, but got ${n}.`),k(a.size===s.size||a.size===0,()=>`Error in denseBincount: weights must have the same shape as x or 0-length, but got x shape: ${s.shape}, weights shape: ${a.shape}.`);const o={x:s,weights:a},i={size:n,binaryOutput:r};return E.runKernel(E0,o,i)}const Kv=N({denseBincount_:x_});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function T_(t,e,n="NHWC"){const r=g(t,"x","depthToSpace","float32"),s=n==="NHWC"?r.shape[1]:r.shape[2],a=n==="NHWC"?r.shape[2]:r.shape[3],o=n==="NHWC"?r.shape[3]:r.shape[1];k(e>1,()=>`blockSize should be > 1 for depthToSpace, but was: ${e}`),k(s*e>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${s} and ${e}  for depthToSpace with input shape
    ${r.shape}`),k(a*e>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${a} and ${e} for depthToSpace with input shape
        ${r.shape}`),k(o%(e*e)===0,()=>`Dimension size must be evenly divisible by ${e*e} but is ${o} for depthToSpace with input shape ${r.shape}`);const i={x:r},l={blockSize:e,dataFormat:n};return E.runKernel(x0,i,l)}const Qv=N({depthToSpace_:T_});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function __(t,e,n,r,s="NHWC",a=[1,1],o){const i=g(t,"x","depthwiseConv2d","float32"),l=g(e,"filter","depthwiseConv2d","float32");let u=i,p=!1;i.rank===3&&(p=!0,u=I(i,[1,i.shape[0],i.shape[1],i.shape[2]])),k(u.rank===4,()=>`Error in depthwiseConv2d: input must be rank 4, but got rank ${u.rank}.`),k(l.rank===4,()=>`Error in depthwiseConv2d: filter must be rank 4, but got rank ${l.rank}.`);const c=s==="NHWC"?u.shape[3]:u.shape[1];k(c===l.shape[2],()=>`Error in depthwiseConv2d: number of input channels (${c}) must match the inChannels dimension in filter ${l.shape[2]}.`),Ct("depthwiseConv2d",r,o);const f={x:u,filter:l},h={strides:n,pad:r,dataFormat:s,dilations:a,dimRoundingMode:o},m=E.runKernel(T0,f,h);return p?I(m,[m.shape[1],m.shape[2],m.shape[3]]):m}const gl=N({depthwiseConv2d_:__});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $_(t){const n={x:g(t,"x","diag")};return E.runKernel(I0,n)}const Xv=N({diag_:$_});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function I_(t,e,n,r,s=[1,1],a="NHWC"){const o=g(t,"x","dilation2d"),i=g(e,"filter","dilation2d");k(o.rank===3||o.rank===4,()=>`Error in dilation2d: input must be rank 3 or 4, but got rank ${o.rank}.`),k(i.rank===3,()=>`Error in dilation2d: filter must be rank 3, but got rank ${i.rank}.`),k(a==="NHWC",()=>`Error in dilation2d: Only NHWC is currently supported, but got dataFormat of ${a}`);let l=o,u=!1;o.rank===3&&(l=I(o,[1,o.shape[0],o.shape[1],o.shape[2]]),u=!0),k(l.shape[3]===i.shape[2],()=>`Error in dilation2d:  input and filter must have the same depth: ${l.shape[3]} vs ${i.shape[2]}`);const p={x:l,filter:i},c={strides:n,pad:r,dilations:s},f=E.runKernel(A0,p,c);return u?I(f,[f.shape[1],f.shape[2],f.shape[3]]):f}const Yv=N({dilation2d_:I_});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zv(t,e){const n=t.length,r=[];for(let s=0;s<n;s++){const a=n-1-s,o=t[a]||1;(e[e.length-1-s]||1)>1&&o===1&&r.unshift(a)}return r}function af(t,e){const n=[];for(let r=0;r<e.length;r++){const s=t[t.length-r-1],a=e.length-r-1,o=e[a];(s==null||s===1&&o>1)&&n.unshift(a)}return n}function Ee(t,e){const n=Math.max(t.length,e.length),r=new Array(n);for(let s=0;s<n;s++){let a=t[t.length-s-1];a==null&&(a=1);let o=e[e.length-s-1];if(o==null&&(o=1),a===1)r[n-s-1]=o;else if(o===1)r[n-s-1]=a;else if(a!==o){const i=`Operands could not be broadcast together with shapes ${t} and ${e}.`;throw Error(i)}else r[n-s-1]=a}return r}const A_=Object.freeze(Object.defineProperty({__proto__:null,assertAndGetBroadcastShape:Ee,getBroadcastDims:Zv,getReductionAxes:af},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function O_(t,e){let n=g(t,"a","equal","string_or_numeric"),r=g(e,"b","equal","string_or_numeric");[n,r]=me(n,r),Ee(n.shape,r.shape);const s={a:n,b:r};return E.runKernel(F0,s)}const of=N({equal_:O_});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function C_(t,e,n){const r=g(e,"a","where"),s=g(n,"b","where"),a=g(t,"condition","where","bool"),o=Ee(Ee(a.shape,r.shape),s.shape),i=ba(a,o),l=ba(r,o),u=ba(s,o),p={condition:i,t:l,e:u};return E.runKernel(Y1,p)}const gn=N({where_:C_});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function D_(t){const n={x:g(t,"x","zerosLike")};return E.runKernel(Iw,n)}const ct=N({zerosLike_:D_});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function P_(t,e){let n=g(t,"a","div"),r=g(e,"b","div");[n,r]=me(n,r);const s=oe(n,r),a=ct(s),o=of(r,a);return gn(o,a,s)}const Jv=N({divNoNan_:P_});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function F_(t,e){const n=g(t,"t1","dot"),r=g(e,"t2","dot");k((n.rank===1||n.rank===2)&&(r.rank===1||r.rank===2),()=>`Error in dot: inputs must all be rank 1 or 2, but got ranks ${n.rank} and ${r.rank}.`);const s=n.rank===1?n.size:n.shape[1],a=r.rank===1?r.size:r.shape[0];if(k(s===a,()=>`Error in dot: inner dimensions of inputs must match, but got ${s} and ${a}.`),n.rank===1&&r.rank===1){const o=I(n,[1,-1]),i=I(r,[-1,1]),l=Z(o,i);return I(l,[])}else if(n.rank===1&&r.rank===2){const o=I(n,[1,-1]),i=I(r,[r.shape[0],r.shape[1]]),l=Z(o,i);return I(l,[l.size])}else if(n.rank===2&&r.rank===1){const o=I(r,[-1,1]),i=Z(n,o);return I(i,[i.size])}else{const o=I(r,[r.shape[0],r.shape[1]]);return Z(n,o)}}const eb=N({dot_:F_});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function R_(t,...e){const n=e.map((s,a)=>g(s,`tensors${a}`,"einsum")),r={equation:t};return E.runKernel(C0,n,r)}const vr=N({einsum_:R_});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function L_(t){const n={x:g(t,"x","elu","float32")};return E.runKernel(D0,n)}const lf=N({elu_:L_});/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function z_(t,e){const n=g(t,"x","ensureShape","string_or_numeric");if(!Cy(n.shape,e))throw new Error(`EnsureShape: Shape of tensor ${n.shape} is not compatible with expected shape ${e}`);return t}const tb=N({ensureShape_:z_});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function B_(t){let e=g(t,"x","erf");k(e.dtype==="int32"||e.dtype==="float32",()=>"Input dtype must be `int32` or `float32`."),e.dtype==="int32"&&(e=re(e,"float32"));const n={x:e};return E.runKernel(P0,n)}const nb=N({erf_:B_});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function uf(t,e){for(let n=0;n<t.length;++n)if(t[t.length-n-1]!==e-1-n)return!1;return!0}function rb(t,e,n){const r=t.length+e.length,s=[];let a=0,o=0;for(let i=0;i<r;i++)n.indexOf(i)===-1?s.push(t[a++]):s.push(e[o++]);return s}function j_(t,e){const n=[],r=t.length;for(let a=0;a<r;a++)e.indexOf(a)===-1&&n.push(t[a]);const s=e.map(a=>t[a]);return[n,s]}function mo(t,e){const n=e.map(r=>1);return rb(t,n,e)}function M_(t,e,n){k(uf(e,n),()=>`${t} supports only inner-most axes for now. Got axes ${e} and rank-${n} input.`)}function V_(t,e){if(uf(t,e))return null;const n=[];for(let r=0;r<e;++r)t.indexOf(r)===-1&&n.push(r);return t.forEach(r=>n.push(r)),n}function U_(t){return t.map((e,n)=>[n,e]).sort((e,n)=>e[1]-n[1]).map(e=>e[0])}function W_(t,e){const n=[];for(let r=e-t;r<e;++r)n.push(r);return n}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function H_(t,e=null,n=!1){const s={x:g(t,"x","max")},a={reductionIndices:e,keepDims:n};return E.runKernel(c1,s,a)}const Ar=N({max_:H_});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function G_(t,e=null,n=!1){const s={x:g(t,"x","min")},a={axis:e,keepDims:n};return E.runKernel(g1,s,a)}const Mi=N({min_:G_});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function q_(t,e){let n=g(t,"base","pow"),r=g(e,"exp","pow");[n,r]=me(n,r);const s={a:n,b:r};return E.runKernel(O1,s)}const Ps=N({pow_:q_});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function K(t,e){if(($e(t)&&e!=="string"||Array.isArray(t))&&e!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(e==="string"&&$e(t)&&!(t instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return ur(t,[],[],e)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function K_(t){const n={x:g(t,"x","sqrt","float32")};return E.runKernel(aw,n)}const nn=N({sqrt_:K_});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Q_(t){const e=g(t,"x","square"),n={};return E.runKernel("Square",{x:e},n)}const It=N({square_:Q_});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function X_(t,e=null,n=!1){let r=g(t,"x","sum");r.dtype==="bool"&&(r=re(r,"int32"));const s={x:r},a={axis:e,keepDims:n};return E.runKernel(ow,s,a)}const ae=N({sum_:X_});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Y_(t,e="euclidean",n=null,r=!1){t=g(t,"x","norm");const s=sb(t,e,n);let a=s.shape;if(r){const o=oo(n,t.shape);a=mo(s.shape,o)}return I(s,a)}function sb(t,e,n=null){if(t.rank===0)return rt(t);if(t.rank!==1&&n===null)return sb(I(t,[-1]),e,n);if(t.rank===1||typeof n=="number"||Array.isArray(n)&&n.length===1){if(e===1)return ae(rt(t),n);if(e===1/0)return Ar(rt(t),n);if(e===-1/0)return Mi(rt(t),n);if(e==="euclidean"||e===2)return nn(ae(Ps(rt(t),K(2,"int32")),n));throw new Error(`Error in norm: invalid ord value: ${e}`)}if(Array.isArray(n)&&n.length===2){if(e===1)return Ar(ae(rt(t),n[0]),n[1]-1);if(e===1/0)return Ar(ae(rt(t),n[1]),n[0]);if(e===-1/0)return Mi(ae(rt(t),n[1]),n[0]);if(e==="fro"||e==="euclidean")return nn(ae(It(t),n));throw new Error(`Error in norm: invalid ord value: ${e}`)}throw new Error(`Error in norm: invalid axis: ${n}`)}const go=N({norm_:Y_});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Z_(t,e=null,n=!1){return go(t,"euclidean",e,n)}const ab=N({euclideanNorm_:Z_});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function J_(t){const n={x:g(t,"x","exp")};return E.runKernel(R0,n)}const tr=N({exp_:J_});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function e$(t,e=0){const n=g(t,"x","expandDims","string_or_numeric");k(e<=n.rank,()=>"Axis must be <= rank of the tensor");const r={input:n},s={dim:e};return E.runKernel(L0,r,s)}const ln=N({expandDims_:e$});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function t$(t){const n={x:g(t,"x","expm1")};return E.runKernel(z0,n)}const ob=N({expm1_:t$});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function n$(t,e){const n=g(t,"x","tile","string_or_numeric");k(n.rank===e.length,()=>`Error in transpose: rank of input ${n.rank} must match length of reps ${e}.`);const r={x:n},s={reps:e};return E.runKernel(Gp,r,s)}const ks=N({tile_:n$});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function r$(t,e,n,r="float32"){e==null&&(e=t);const s=tn([t,e],r),a=t<=e?t:e;for(let i=0;i<a;++i)s.set(1,i,i);const o=I(s.toTensor(),[t,e]);if(n==null)return o;if(n.length===1)return ks(ln(o,0),[n[0],1,1]);if(n.length===2)return ks(ln(ln(o,0),0),[n[0],n[1],1,1]);if(n.length===3)return ks(ln(ln(ln(o,0),0),0),[n[0],n[1],n[2],1,1]);throw new Error(`eye() currently supports only 1D and 2D batchShapes, but received ${n.length}D.`)}const cf=N({eye_:r$});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function s$(t){const n={x:g(t,"x","floor","float32")};return E.runKernel(V0,n)}const pf=N({floor_:s$});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function a$(t,e,n=0,r=0){const s=g(t,"x","gather"),a=g(e,"indices","gather","int32"),o={x:s,indices:a},i={axis:n,batchDims:r};return E.runKernel(H0,o,i)}const ff=N({gather_:a$});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function o$(t,e){let n=g(t,"a","greater","string_or_numeric"),r=g(e,"b","greater","string_or_numeric");[n,r]=me(n,r),Ee(n.shape,r.shape);const s={a:n,b:r};return E.runKernel(q0,s)}const yo=N({greater_:o$});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function i$(t,e){let n=g(t,"a","greaterEqual","string_or_numeric"),r=g(e,"b","greaterEqual","string_or_numeric");[n,r]=me(n,r),Ee(n.shape,r.shape);const s={a:n,b:r};return E.runKernel(K0,s)}const df=N({greaterEqual_:i$});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function l$(t){const n={input:g(t,"input","imag")};return E.runKernel(X0,n)}const wo=N({imag_:l$});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function u$(t){const n={x:g(t,"x","isFinite")};return E.runKernel(Y0,n)}const ib=N({isFinite_:u$});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function c$(t){const n={x:g(t,"x","isInf")};return E.runKernel(Z0,n)}const lb=N({isInf_:c$});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function p$(t){const n={x:g(t,"x","isNaN")};return E.runKernel(J0,n)}const ub=N({isNaN_:p$});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function f$(t,e=.2){const r={x:g(t,"x","leakyRelu")},s={alpha:e};return E.runKernel(e1,r,s)}const hf=N({leakyRelu_:f$});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function d$(t,e){let n=g(t,"a","less","string_or_numeric"),r=g(e,"b","less","string_or_numeric");[n,r]=me(n,r),Ee(n.shape,r.shape);const s={a:n,b:r};return E.runKernel(t1,s)}const Vi=N({less_:d$});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function h$(t,e){let n=g(t,"a","lessEqual","string_or_numeric"),r=g(e,"b","lessEqual","string_or_numeric");[n,r]=me(n,r),Ee(n.shape,r.shape);const s={a:n,b:r};return E.runKernel(n1,s)}const yl=N({lessEqual_:h$});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cb(t,e,n){if(n<=0)throw new Error("The number of values should be positive.");const r={start:t,stop:e,num:n};return E.runKernel(r1,{},r)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function m$(t,e=5,n=1,r=1,s=.5){const a=g(t,"x","localResponseNormalization");k(a.rank===4||a.rank===3,()=>`Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank ${a.rank}.`),k(As(e),()=>`Error in localResponseNormalization: depthRadius must be an integer but got depthRadius ${e}.`);let o=a,i=!1;a.rank===3&&(i=!0,o=I(a,[1,a.shape[0],a.shape[1],a.shape[2]]));const l={x:o},u={depthRadius:e,bias:n,alpha:r,beta:s},p=E.runKernel(u1,l,u);return i?I(p,[p.shape[1],p.shape[2],p.shape[3]]):p}const pb=N({localResponseNormalization_:m$});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function g$(t){const n={x:g(t,"x","log","float32")};return E.runKernel(s1,n)}const Fs=N({log_:g$});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function y$(t){const n={x:g(t,"x","log1p")};return E.runKernel(a1,n)}const mf=N({log1p_:y$});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function w$(t){return k(Yn(t),()=>"The f passed in grad(f) must be a function"),(e,n)=>{const r=g(e,"x","tf.grad","string_or_numeric"),s=n!=null?g(n,"dy","tf.grad"):null;return E.tidy(()=>{const{value:a,grads:o}=E.gradients(()=>t(r),[r],s);return s!=null&&Ke(a.shape,s.shape,"The shape of dy passed in grad(f)(x, dy) must match the shape returned by f(x)"),wl(o),o[0]})}}function v$(t){return k(Yn(t),()=>"The f passed in grads(f) must be a function"),(e,n)=>{k(Array.isArray(e),()=>"The args passed in grads(f)(args) must be an array of `Tensor`s or `TensorLike`s");const r=Ha(e,"args","tf.grads","string_or_numeric"),s=n!=null?g(n,"dy","tf.grads"):null;return E.tidy(()=>{const{value:a,grads:o}=E.gradients(()=>t(...r),r,s);return s!=null&&Ke(a.shape,s.shape,"The shape of dy passed in grads(f)([x1,...], dy) must match the shape returned by f([x1,...])"),wl(o),o})}}function b$(t){return k(Yn(t),()=>"The f passed in valueAndGrad(f) must be a function"),(e,n)=>{k(e instanceof he,()=>"The x passed in valueAndGrad(f)(x) must be a tensor"),k(n==null||n instanceof he,()=>"The dy passed in valueAndGrad(f)(x, dy) must be a tensor");const{grads:r,value:s}=E.gradients(()=>t(e),[e],n);return wl(r),{grad:r[0],value:s}}}function k$(t){return k(Yn(t),()=>"The f passed in valueAndGrads(f) must be a function"),(e,n)=>{k(Array.isArray(e)&&e.every(s=>s instanceof he),()=>"The args passed in valueAndGrads(f)(args) must be array of tensors"),k(n==null||n instanceof he,()=>"The dy passed in valueAndGrads(f)(args, dy) must be a tensor");const r=E.gradients(()=>t(...e),e,n);return n!=null&&Ke(r.value.shape,n.shape,"The shape of dy passed in valueAndGrads(f)([x1,...], dy) must match the shape returned by f([x1,...])"),wl(r.grads),r}}function fb(t,e){k(Yn(t),()=>"The f passed in variableGrads(f) must be a function"),k(e==null||Array.isArray(e)&&e.every(u=>u instanceof Wa),()=>"The varList passed in variableGrads(f, varList) must be an array of variables");const n=e!=null;if(!n){e=[];for(const u in E.registeredVariables)e.push(E.registeredVariables[u])}const r=n?e.filter(u=>!u.trainable):null,s=e.length;e=e.filter(u=>u.trainable),k(e.length>0,()=>`variableGrads() expects at least one of the input variables to be trainable, but none of the ${s} variables is trainable.`);const a=!0,{value:o,grads:i}=E.gradients(t,e,null,a);k(i.some(u=>u!=null),()=>"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."),k(o.rank===0,()=>`The f passed in variableGrads(f) must return a scalar, but it returned a rank-${o.rank} tensor`);const l={};return e.forEach((u,p)=>{i[p]!=null&&(l[u.name]=i[p])}),r!=null&&r.forEach(u=>l[u.name]=null),{value:o,grads:l}}function rn(t){return E.customGrad(t)}function wl(t){if(t.filter(n=>n==null).length>0)throw new Error(`Cannot compute gradient of y=f(x) with respect to x. Make sure that
    the f you passed encloses all operations that lead from x to y.`)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function S$(t){const n={x:g(t,"x","neg")};return E.runKernel(S1,n)}const Ut=N({neg_:S$});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function N$(t){const n={x:g(t,"x","softplus")};return E.runKernel(sw,n)}const gf=N({softplus_:N$});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function E$(t){const e=g(t,"x","logSigmoid");return rn(r=>({value:Ut(gf(Ut(r))),gradFunc:o=>R(o,Ir(Ut(r)))}))(e)}const db=N({logSigmoid_:E$});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function x$(t,e){let n=g(t,"a","sub"),r=g(e,"b","sub");[n,r]=me(n,r);const s={a:n,b:r};return E.runKernel(kw,s)}const H=N({sub_:x$});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function T$(t,e=-1){const n=g(t,"logits","logSoftmax");if(e===-1&&(e=n.rank-1),e!==n.rank-1)throw Error(`Log Softmax along a non-last dimension is not yet supported. Logits was rank ${n.rank} and axis was ${e}`);return rn((s,a)=>{const i=Ar(s,e,!0),l=H(s,i),u=H(re(l,"float32"),Fs(ae(tr(l),e,!0)));return a([u]),{value:u,gradFunc:(c,f)=>{const[h]=f,m=!0,w=tr(h);return H(c,R(ae(c,e,m),w))}}})(n)}const hb=N({logSoftmax_:T$});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _$(t,e=null,n=!1){const r=g(t,"x","logSumExp"),s=oo(e,r.shape),a=Ar(r,s,!0),o=H(r,a),i=tr(o),l=ae(i,s),u=Fs(l),p=M(I(a,u.shape),u);if(n){const c=mo(p.shape,s);return I(p,c)}return p}const yf=N({logSumExp_:_$});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $$(t,e){const n=g(t,"a","logicalAnd","bool"),r=g(e,"b","logicalAnd","bool");Ee(n.shape,r.shape);const s={a:n,b:r};return E.runKernel(o1,s)}const Qa=N({logicalAnd_:$$});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function I$(t){const n={x:g(t,"x","logicalNot","bool")};return E.runKernel(i1,n)}const wf=N({logicalNot_:I$});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function A$(t,e){const n=g(t,"a","logicalOr","bool"),r=g(e,"b","logicalOr","bool");Ee(n.shape,r.shape);const s={a:n,b:r};return E.runKernel(l1,s)}const vf=N({logicalOr_:A$});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function O$(t,e){const n=g(t,"a","logicalXor","bool"),r=g(e,"b","logicalXor","bool");return Ee(n.shape,r.shape),Qa(vf(t,e),wf(Qa(t,e)))}const mb=N({logicalXor_:O$});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Mo=2147483648;function C$(t,e,n="left"){const r=g(t,"sortedSequence","searchSorted"),s=g(e,"values","searchSorted"),a=r.shape[r.shape.length-1],o=s.shape[s.shape.length-1],i=I(r,[-1,a]),l=I(s,[-1,o]);if(i.rank<2)throw new Error("Sorted input argument must be at least 2-dimensional");if(i.shape[0]!==l.shape[0])throw new Error("Leading dimension of 'sortedSequence' and 'values' must match.");if(te(l.shape)>=Mo)throw new Error(`values tensor size must less than ${Mo}`);if(i.shape[1]>=Mo)throw new Error(`trailing dim_size must less than ${Mo} for int32 output type, was ${i.shape[1]}`);const u={sortedSequence:i,values:l},p={side:n};return E.runKernel(X1,u,p)}const vl=N({searchSorted_:C$});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gb(t,e){return vl(t,e,"left")}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function D$(t,e,n,r,s){const a=g(t,"x","maxPool"),o=1;let i=a,l=!1;a.rank===3&&(l=!0,i=I(a,[1,a.shape[0],a.shape[1],a.shape[2]])),k(i.rank===4,()=>`Error in maxPool: input must be rank 4 but got rank ${i.rank}.`),k(Nn(n,o),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${n} and dilations '${o}'`),Ct("maxPool",r,s);const u={x:i},p={filterSize:e,strides:n,pad:r,dimRoundingMode:s},c=E.runKernel(f1,u,p);return l?I(c,[c.shape[1],c.shape[2],c.shape[3]]):c}const bf=N({maxPool_:D$});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function P$(t,e=[1,1,1],n,r,s,a="NDHWC"){const o=g(t,"x","maxPool3d");let i=o,l=!1;o.rank===4&&(l=!0,i=I(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]])),k(i.rank===5,()=>`Error in maxPool3d: x must be rank 5 but got rank ${i.rank}.`),k(a==="NDHWC",()=>`Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of ${a}`),Ct("maxPool3d",r,s);const u={x:i},p={filterSize:e,strides:n,pad:r,dimRoundingMode:s,dataFormat:a},c=E.runKernel(d1,u,p);return l?I(c,[c.shape[1],c.shape[2],c.shape[3],c.shape[4]]):c}const yb=N({maxPool3d_:P$});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function F$(t,e,n,r,s=!1){const o={x:g(t,"x","maxPoolWithArgmax")},i={filterSize:e,strides:n,pad:r,includeBatchInIndex:s},l=E.runKernel(h1,o,i);return{result:l[0],indexes:l[1]}}const wb=N({maxPoolWithArgmax_:F$});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function R$(t,e){let n=g(t,"a","maximum"),r=g(e,"b","maximum");[n,r]=me(n,r),n.dtype==="bool"&&(n=re(n,"int32"),r=re(r,"int32")),Ee(n.shape,r.shape);const s={a:n,b:r};return E.runKernel(p1,s)}const kf=N({maximum_:R$});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function L$(t,e=null,n=!1){const s={x:g(t,"x","mean")},a={axis:e,keepDims:n};return E.runKernel(m1,s,a)}const Xa=N({mean_:L$});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nr(t,e="float32"){if(pt(t),e==="complex64"){const r=nr(t,"float32"),s=nr(t,"float32");return kn(r,s)}const n=dl(te(t),e);return E.makeTensor(n,t,e)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zn(t,e="float32"){if(pt(t),e==="complex64"){const r=zn(t,"float32"),s=nr(t,"float32");return kn(r,s)}const n=Bp(te(t),e);return E.makeTensor(n,t,e)}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vb(t,e,{indexing:n="xy"}={}){if(n!=="xy"&&n!=="ij")throw new TypeError(`${n} is not a valid third argument to meshgrid`);if(t===void 0)return[];let r=g(t,"x","meshgrid",t instanceof he?t.dtype:"float32");if(e===void 0)return[r];let s=g(e,"y","meshgrid",e instanceof he?e.dtype:"float32");const a=te(r.shape),o=te(s.shape);return n==="xy"?(r=I(r,[1,-1]),s=I(s,[-1,1]),[Z(zn([o,1],r.dtype),r),Z(s,zn([1,a],s.dtype))]):(r=I(r,[-1,1]),s=I(s,[1,-1]),[Z(r,zn([1,o],r.dtype)),Z(zn([a,1],s.dtype),s)])}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function z$(t,e){let n=g(t,"a","minimum"),r=g(e,"b","minimum");[n,r]=me(n,r),n.dtype==="bool"&&(n=re(n,"int32"),r=re(r,"int32")),Ee(n.shape,r.shape);const s={a:n,b:r};return E.runKernel(y1,s)}const Ya=N({minimum_:z$});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function B$(t,e,n){k(n==="reflect"||n==="symmetric",()=>`Invalid mode. Mode must be either reflect or symmetric. Got ${n}.`);const r=g(t,"x","mirrorPad");if(r.rank===0)throw new Error("mirrorPad(scalar) is not defined. Pass non-scalar to mirrorPad");k(e.length===r.rank,()=>`Padding doesn't match input. Must be ${r.rank}. Got ${e.length}.`);const s=n==="reflect"?1:0;for(let i=0;i<r.rank;i++)k(e[i].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),k(e[i][0]>=0&&e[i][0]<=r.shape[i]-s&&e[i][1]>=0&&e[i][1]<=r.shape[i]-s,()=>`Padding in dimension ${i} cannot be greater than or equal to ${r.shape[i]-s} or less than 0 for input of shape ${r.shape}`);const a={paddings:e,mode:n},o={x:r};return E.runKernel(w1,o,a)}const bb=N({mirrorPad_:B$});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function j$(t,e){let n=g(t,"a","mod"),r=g(e,"b","mod");[n,r]=me(n,r);const s={a:n,b:r};return E.runKernel(v1,s)}const kb=N({mod_:j$});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function M$(t,e=null,n=!1){t=g(t,"x","moments");const r=oo(e,t.shape),s=Xa(t,r,n);let a=s.shape;n||(a=mo(s.shape,r));const o=It(H(re(t,"float32"),I(s,a))),i=Xa(o,r,n);return{mean:s,variance:i}}const Sb=N({moments_:M$});function V$(t,e,n,r){const s=g(e,"data","multiRNNCell"),a=Ha(n,"c","multiRNNCell"),o=Ha(r,"h","multiRNNCell");let i=s;const l=[];for(let c=0;c<t.length;c++){const f=t[c](i,a[c],o[c]);l.push(f[0]),l.push(f[1]),i=f[1]}const u=[],p=[];for(let c=0;c<l.length;c+=2)u.push(l[c]),p.push(l[c+1]);return[u,p]}const Nb=N({multiRNNCell_:V$});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function U$(t,e,n,r=!1){const s=g(t,"logits","multinomial"),a=s.size,o=s.rank;if(a<2)throw new Error(`Error in multinomial: you need at least 2 outcomes, but got ${a}.`);if(o>2)throw new Error(`Rank of probabilities must be 1 or 2, but is ${o}`);n=n||Math.random();const l={logits:o===1?I(s,[1,-1]):s},u={numSamples:e,seed:n,normalized:r},p=E.runKernel(b1,l,u);return o===1?I(p,[p.size]):p}const Eb=N({multinomial_:U$});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function W$(t,e){let n=g(t,"a","notEqual","string_or_numeric"),r=g(e,"b","notEqual","string_or_numeric");[n,r]=me(n,r),Ee(n.shape,r.shape);const s={a:n,b:r};return E.runKernel(N1,s)}const Sf=N({notEqual_:W$});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function H$(t,e,n=1,r=0,s="int32"){if(e<2)throw new Error(`Error in oneHot: depth must be >=2, but it is ${e}`);const o={indices:g(t,"indices","oneHot","int32")},i={dtype:s,depth:e,onValue:n,offValue:r};return E.runKernel($1,o,i)}const Ui=N({oneHot_:H$});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function G$(t){const n={x:g(t,"x","onesLike")};return E.runKernel(_1,n)}const xb=N({onesLike_:G$});function q$(t,e){const n=g(t,"v1","outerProduct"),r=g(e,"v2","outerProduct");k(n.rank===1&&r.rank===1,()=>`Error in outerProduct: inputs must be rank 1, but got ranks ${n.rank} and ${r.rank}.`);const s=I(n,[-1,1]),a=I(r,[1,-1]);return Z(s,a)}const Tb=N({outerProduct_:q$});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function K$(t,e,n=0){const r=g(t,"x","pad");if(r.rank===0)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");const s={paddings:e,constantValue:n},a={x:r};return E.runKernel(A1,a,s)}const Gs=N({pad_:K$});function Q$(t,e,n=0){return k(e.length===2,()=>"Invalid number of paddings. Must be length of 2."),Gs(t,[e],n)}const _b=N({pad1d_:Q$});function X$(t,e,n=0){return k(e.length===2&&e[0].length===2&&e[1].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),Gs(t,e,n)}const $b=N({pad2d_:X$});function Y$(t,e,n=0){return k(e.length===3&&e[0].length===2&&e[1].length===2&&e[2].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),Gs(t,e,n)}const Ib=N({pad3d_:Y$});function Z$(t,e,n=0){return k(e.length===4&&e[0].length===2&&e[1].length===2&&e[2].length===2&&e[3].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),Gs(t,e,n)}const Ab=N({pad4d_:Z$});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function J$(t,e,n){const r=g(t,"x","spaceToBatchND");k(r.rank>=1+e.length,()=>`input rank ${r.rank} should be > than [blockShape] ${e.length}`),k(n.length===e.length,()=>`paddings.shape[0] ${n.length} must be equal to [blockShape] ${e.length}`),k(r.shape.reduce((o,i,l)=>l>0&&l<=e.length?o&&(i+n[l-1][0]+n[l-1][1])%e[l-1]===0:o,!0),()=>`input spatial dimensions ${r.shape.slice(1)} with paddings ${n.toString()} must be divisible by blockShapes ${e.toString()}`);const s={x:r},a={blockShape:e,paddings:n};return E.runKernel(iw,s,a)}const Nf=N({spaceToBatchND_:J$});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function eI(t,e,n,r,s,a,o){s==null&&(s=[1,1]),a==null&&(a=1),r===0&&(r="valid");const i=g(t,"x","maxPool");let l=i,u=!1;i.rank===3&&(u=!0,l=I(i,[1,i.shape[0],i.shape[1],i.shape[2]])),k(Nn(a,s),()=>`Error in pool: Either strides or dilations must be 1. Got strides ${a} and dilations '${s}'`);const p=Nv(l.shape,e,a,s,r),c=[p.dilationHeight,p.dilationWidth];let f;r==="same"?f=nI([p.filterHeight,p.filterWidth],c):f=[[0,0],[0,0]];const h=c[0]===1&&c[1]===1,[m,w]=tI([p.inHeight,p.inWidth],c,f),b=h?r:"valid",y=h?l:Nf(l,c,m),v=(n==="avg"?()=>nf(y,e,a,b,o):()=>bf(y,e,a,b,o))(),x=h?v:rf(v,c,w);return u?I(x,[x.shape[1],x.shape[2],x.shape[3]]):x}function tI(t,e,n){const r=n.map(p=>p[0]),s=n.map(p=>p[1]),a=t.concat(r,s),o=e.map((p,c)=>(p-a[c]%p)%p),i=s.map((p,c)=>p+o[c]),l=e.map((p,c)=>[r[c],i[c]]),u=e.map((p,c)=>[0,o[c]]);return[l,u]}function nI(t,e){const r=t.map((o,i)=>o+(o-1)*(e[i]-1)).map(o=>o-1),s=r.map(o=>Math.floor(o/2)),a=r.map((o,i)=>o-s[i]);return r.map((o,i)=>[s[i],a[i]])}const Ob=N({pool_:eI});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function rI(t,e){const n=g(t,"x","prelu"),r=g(e,"alpha","prelu"),s={x:n,alpha:r};return E.runKernel(C1,s)}const Ef=N({prelu_:rI});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sI(t,e=null,n=!1){let r=g(t,"x","prod");r.dtype==="bool"&&(r=re(r,"int32"));const s={x:r},a={axis:e,keepDims:n};return E.runKernel(D1,s,a)}const Cb=N({prod_:sI});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function aI(t,e,n,r){const s=t.map((p,c)=>g(p,`tensors${c}`,"raggedGather","int32")),a=g(e,"paramsDenseValues","raggedGather"),o=g(n,"indices","raggedGather","int32"),i={paramsNestedSplits:s,paramsDenseValues:a,indices:o},l={outputRaggedRank:r},u=E.runKernel(P1,i,l);return{outputNestedSplits:u.slice(0,u.length-1),outputDenseValues:u[u.length-1]}}const Db=N({raggedGather_:aI});/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function oI(t,e,n){const r=g(t,"starts","raggedRange"),s=g(e,"limits","raggedRange",r.dtype),a=g(n,"deltas","raggedRange",r.dtype),o={starts:r,limits:s,deltas:a},i=E.runKernel(F1,o);return{rtNestedSplits:i[0],rtDenseValues:i[1]}}const Pb=N({raggedRange_:oI});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function iI(t,e,n,r,s){const a=g(t,"shape","raggedTensorToTensor","int32"),o=g(e,"values","raggedTensorToTensor"),i=g(n,"defaultValue","raggedTensorToTensor",o.dtype),l=r.map((c,f)=>g(c,`tensors${f}`,"raggedTensorToTensor","int32")),u={shape:a,values:o,defaultValue:i,rowPartitionTensors:l},p={rowPartitionTypes:s};return E.runKernel(R1,u,p)}const Fb=N({raggedTensorToTensor_:iI});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function lI(t,e,n){pt(t);const r=te(t);let s=null;if(n==null||n==="float32")s=new Float32Array(r);else if(n==="int32")s=new Int32Array(r);else if(n==="bool")s=new Uint8Array(r);else throw new Error(`Unknown data type ${n}`);for(let a=0;a<r;a++)s[a]=e();return E.makeTensor(s,t,n)}const Rb=N({rand_:lI});var xf={exports:{}};xf.exports;(function(t){(function(e,n,r){function s(l){var u=this,p=i();u.next=function(){var c=2091639*u.s0+u.c*23283064365386963e-26;return u.s0=u.s1,u.s1=u.s2,u.s2=c-(u.c=c|0)},u.c=1,u.s0=p(" "),u.s1=p(" "),u.s2=p(" "),u.s0-=p(l),u.s0<0&&(u.s0+=1),u.s1-=p(l),u.s1<0&&(u.s1+=1),u.s2-=p(l),u.s2<0&&(u.s2+=1),p=null}function a(l,u){return u.c=l.c,u.s0=l.s0,u.s1=l.s1,u.s2=l.s2,u}function o(l,u){var p=new s(l),c=u&&u.state,f=p.next;return f.int32=function(){return p.next()*4294967296|0},f.double=function(){return f()+(f()*2097152|0)*11102230246251565e-32},f.quick=f,c&&(typeof c=="object"&&a(c,p),f.state=function(){return a(p,{})}),f}function i(){var l=4022871197,u=function(p){p=String(p);for(var c=0;c<p.length;c++){l+=p.charCodeAt(c);var f=.02519603282416938*l;l=f>>>0,f-=l,f*=l,l=f>>>0,f-=l,l+=f*4294967296}return(l>>>0)*23283064365386963e-26};return u}n&&n.exports?n.exports=o:this.alea=o})(Vr,t)})(xf);var uI=xf.exports,Tf={exports:{}};Tf.exports;(function(t){(function(e,n,r){function s(i){var l=this,u="";l.x=0,l.y=0,l.z=0,l.w=0,l.next=function(){var c=l.x^l.x<<11;return l.x=l.y,l.y=l.z,l.z=l.w,l.w^=l.w>>>19^c^c>>>8},i===(i|0)?l.x=i:u+=i;for(var p=0;p<u.length+64;p++)l.x^=u.charCodeAt(p)|0,l.next()}function a(i,l){return l.x=i.x,l.y=i.y,l.z=i.z,l.w=i.w,l}function o(i,l){var u=new s(i),p=l&&l.state,c=function(){return(u.next()>>>0)/4294967296};return c.double=function(){do var f=u.next()>>>11,h=(u.next()>>>0)/4294967296,m=(f+h)/(1<<21);while(m===0);return m},c.int32=u.next,c.quick=c,p&&(typeof p=="object"&&a(p,u),c.state=function(){return a(u,{})}),c}n&&n.exports?n.exports=o:this.xor128=o})(Vr,t)})(Tf);var cI=Tf.exports,_f={exports:{}};_f.exports;(function(t){(function(e,n,r){function s(i){var l=this,u="";l.next=function(){var c=l.x^l.x>>>2;return l.x=l.y,l.y=l.z,l.z=l.w,l.w=l.v,(l.d=l.d+362437|0)+(l.v=l.v^l.v<<4^(c^c<<1))|0},l.x=0,l.y=0,l.z=0,l.w=0,l.v=0,i===(i|0)?l.x=i:u+=i;for(var p=0;p<u.length+64;p++)l.x^=u.charCodeAt(p)|0,p==u.length&&(l.d=l.x<<10^l.x>>>4),l.next()}function a(i,l){return l.x=i.x,l.y=i.y,l.z=i.z,l.w=i.w,l.v=i.v,l.d=i.d,l}function o(i,l){var u=new s(i),p=l&&l.state,c=function(){return(u.next()>>>0)/4294967296};return c.double=function(){do var f=u.next()>>>11,h=(u.next()>>>0)/4294967296,m=(f+h)/(1<<21);while(m===0);return m},c.int32=u.next,c.quick=c,p&&(typeof p=="object"&&a(p,u),c.state=function(){return a(u,{})}),c}n&&n.exports?n.exports=o:this.xorwow=o})(Vr,t)})(_f);var pI=_f.exports,$f={exports:{}};$f.exports;(function(t){(function(e,n,r){function s(i){var l=this;l.next=function(){var p=l.x,c=l.i,f,h;return f=p[c],f^=f>>>7,h=f^f<<24,f=p[c+1&7],h^=f^f>>>10,f=p[c+3&7],h^=f^f>>>3,f=p[c+4&7],h^=f^f<<7,f=p[c+7&7],f=f^f<<13,h^=f^f<<9,p[c]=h,l.i=c+1&7,h};function u(p,c){var f,h=[];if(c===(c|0))h[0]=c;else for(c=""+c,f=0;f<c.length;++f)h[f&7]=h[f&7]<<15^c.charCodeAt(f)+h[f+1&7]<<13;for(;h.length<8;)h.push(0);for(f=0;f<8&&h[f]===0;++f);for(f==8?h[7]=-1:h[f],p.x=h,p.i=0,f=256;f>0;--f)p.next()}u(l,i)}function a(i,l){return l.x=i.x.slice(),l.i=i.i,l}function o(i,l){i==null&&(i=+new Date);var u=new s(i),p=l&&l.state,c=function(){return(u.next()>>>0)/4294967296};return c.double=function(){do var f=u.next()>>>11,h=(u.next()>>>0)/4294967296,m=(f+h)/(1<<21);while(m===0);return m},c.int32=u.next,c.quick=c,p&&(p.x&&a(p,u),c.state=function(){return a(u,{})}),c}n&&n.exports?n.exports=o:this.xorshift7=o})(Vr,t)})($f);var fI=$f.exports,If={exports:{}};If.exports;(function(t){(function(e,n,r){function s(i){var l=this;l.next=function(){var p=l.w,c=l.X,f=l.i,h,m;return l.w=p=p+1640531527|0,m=c[f+34&127],h=c[f=f+1&127],m^=m<<13,h^=h<<17,m^=m>>>15,h^=h>>>12,m=c[f]=m^h,l.i=f,m+(p^p>>>16)|0};function u(p,c){var f,h,m,w,b,y=[],S=128;for(c===(c|0)?(h=c,c=null):(c=c+"\0",h=0,S=Math.max(S,c.length)),m=0,w=-32;w<S;++w)c&&(h^=c.charCodeAt((w+32)%c.length)),w===0&&(b=h),h^=h<<10,h^=h>>>15,h^=h<<4,h^=h>>>13,w>=0&&(b=b+1640531527|0,f=y[w&127]^=h+b,m=f==0?m+1:0);for(m>=128&&(y[(c&&c.length||0)&127]=-1),m=127,w=4*128;w>0;--w)h=y[m+34&127],f=y[m=m+1&127],h^=h<<13,f^=f<<17,h^=h>>>15,f^=f>>>12,y[m]=h^f;p.w=b,p.X=y,p.i=m}u(l,i)}function a(i,l){return l.i=i.i,l.w=i.w,l.X=i.X.slice(),l}function o(i,l){i==null&&(i=+new Date);var u=new s(i),p=l&&l.state,c=function(){return(u.next()>>>0)/4294967296};return c.double=function(){do var f=u.next()>>>11,h=(u.next()>>>0)/4294967296,m=(f+h)/(1<<21);while(m===0);return m},c.int32=u.next,c.quick=c,p&&(p.X&&a(p,u),c.state=function(){return a(u,{})}),c}n&&n.exports?n.exports=o:this.xor4096=o})(Vr,t)})(If);var dI=If.exports,Af={exports:{}};Af.exports;(function(t){(function(e,n,r){function s(i){var l=this,u="";l.next=function(){var c=l.b,f=l.c,h=l.d,m=l.a;return c=c<<25^c>>>7^f,f=f-h|0,h=h<<24^h>>>8^m,m=m-c|0,l.b=c=c<<20^c>>>12^f,l.c=f=f-h|0,l.d=h<<16^f>>>16^m,l.a=m-c|0},l.a=0,l.b=0,l.c=-1640531527,l.d=1367130551,i===Math.floor(i)?(l.a=i/4294967296|0,l.b=i|0):u+=i;for(var p=0;p<u.length+20;p++)l.b^=u.charCodeAt(p)|0,l.next()}function a(i,l){return l.a=i.a,l.b=i.b,l.c=i.c,l.d=i.d,l}function o(i,l){var u=new s(i),p=l&&l.state,c=function(){return(u.next()>>>0)/4294967296};return c.double=function(){do var f=u.next()>>>11,h=(u.next()>>>0)/4294967296,m=(f+h)/(1<<21);while(m===0);return m},c.int32=u.next,c.quick=c,p&&(typeof p=="object"&&a(p,u),c.state=function(){return a(u,{})}),c}n&&n.exports?n.exports=o:this.tychei=o})(Vr,t)})(Af);var hI=Af.exports,Lb={exports:{}};const mI={},gI=Object.freeze(Object.defineProperty({__proto__:null,default:mI},Symbol.toStringTag,{value:"Module"})),yI=lk(gI);(function(t){(function(e,n,r){var s=256,a=6,o=52,i="random",l=r.pow(s,a),u=r.pow(2,o),p=u*2,c=s-1,f;function h(x,T,_){var A=[];T=T==!0?{entropy:!0}:T||{};var O=y(b(T.entropy?[x,v(n)]:x??S(),3),A),L=new m(A),P=function(){for(var j=L.g(a),q=l,Q=0;j<u;)j=(j+Q)*s,q*=s,Q=L.g(1);for(;j>=p;)j/=2,q/=2,Q>>>=1;return(j+Q)/q};return P.int32=function(){return L.g(4)|0},P.quick=function(){return L.g(4)/4294967296},P.double=P,y(v(L.S),n),(T.pass||_||function(j,q,Q,ne){return ne&&(ne.S&&w(ne,L),j.state=function(){return w(L,{})}),Q?(r[i]=j,q):j})(P,O,"global"in T?T.global:this==r,T.state)}function m(x){var T,_=x.length,A=this,O=0,L=A.i=A.j=0,P=A.S=[];for(_||(x=[_++]);O<s;)P[O]=O++;for(O=0;O<s;O++)P[O]=P[L=c&L+x[O%_]+(T=P[O])],P[L]=T;(A.g=function(j){for(var q,Q=0,ne=A.i,be=A.j,Be=A.S;j--;)q=Be[ne=c&ne+1],Q=Q*s+Be[c&(Be[ne]=Be[be=c&be+q])+(Be[be]=q)];return A.i=ne,A.j=be,Q})(s)}function w(x,T){return T.i=x.i,T.j=x.j,T.S=x.S.slice(),T}function b(x,T){var _=[],A=typeof x,O;if(T&&A=="object")for(O in x)try{_.push(b(x[O],T-1))}catch{}return _.length?_:A=="string"?x:x+"\0"}function y(x,T){for(var _=x+"",A,O=0;O<_.length;)T[c&O]=c&(A^=T[c&O]*19)+_.charCodeAt(O++);return v(T)}function S(){try{var x;return f&&(x=f.randomBytes)?x=x(s):(x=new Uint8Array(s),(e.crypto||e.msCrypto).getRandomValues(x)),v(x)}catch{var T=e.navigator,_=T&&T.plugins;return[+new Date,e,_,e.screen,v(n)]}}function v(x){return String.fromCharCode.apply(0,x)}if(y(r.random(),n),t.exports){t.exports=h;try{f=yI}catch{}}else r["seed"+i]=h})(typeof self<"u"?self:Vr,[],Math)})(Lb);var wI=Lb.exports,vI=uI,bI=cI,kI=pI,SI=fI,NI=dI,EI=hI,qr=wI;qr.alea=vI;qr.xor128=bI;qr.xorwow=kI;qr.xorshift7=SI;qr.xor4096=NI;qr.tychei=EI;var Of=qr;/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const xI=.001,zb=.1;function TI(t,e,n){return n==null&&(n=Cf()),Ec(t,e,(r,s)=>Df(r,s,n))}function Cf(){return E.backend.floatPrecision()===32?xI:zb}function Ec(t,e,n){let r=!0;if(($e(t)||$e(e))&&(r=!1),$e(t)&&$e(e)&&(r=!0),r){const o=t.constructor.name,i=e.constructor.name;if(o!==i)throw new Error(`Arrays are of different type. Actual: ${o}. Expected: ${i}`)}if(Array.isArray(t)&&Array.isArray(e)){const o=en(t),i=en(e);if(!Ht(o,i))throw new Error(`Arrays have different shapes. Actual: [${o}]. Expected: [${i}]`)}const s=$e(t)?t:Jn(t),a=$e(e)?e:Jn(e);if(s.length!==a.length)throw new Error(`Arrays have different lengths actual: ${s.length} vs expected: ${a.length}.
Actual:   ${s}.
Expected: ${a}.`);for(let o=0;o<a.length;++o){const i=s[o],l=a[o];if(!n(i,l))throw new Error(`Arrays differ: actual[${o}] = ${i}, expected[${o}] = ${l}.
Actual:   ${s}.
Expected: ${a}.`)}typeof expect<"u"&&expect().nothing()}function _I(t,e){t().then(()=>e.fail(),()=>e()),typeof expect<"u"&&expect().nothing()}function $I(t,e){const n=typeof e=="string"||typeof e=="number"||typeof e=="boolean"?[e]:e;return Rn(t)||Rn(t[0])||Rn(e)||Rn(e[0])?Ec(t,n,(r,s)=>r==s):Ec(t,e,(r,s)=>Df(r,s,0))}function II(t,e,n){if(n==null&&(n=Cf()),!Df(t,e,n))throw new Error(`Numbers differ: actual === ${t}, expected === ${e}`);typeof expect<"u"&&expect().nothing()}function Df(t,e,n){return!isFinite(t)&&!isFinite(e)?!0:!(isNaN(t)||isNaN(e)||Math.abs(t-e)>n)}function AI(t,e,n){for(let r=0;r<t.length;r++)if(t[r]<e||t[r]>n)throw new Error(`Value out of range:${t[r]} low: ${e}, high: ${n}`)}function OI(t,e){const n=new Float32Array(t),r=new Float32Array(e);if(n.length!==r.length)throw new Error(`Expected ArrayBuffer to be of length ${r.length}, but it was ${n.length}`);for(let s=0;s<r.length;s++)if(n[s]!==r[s])throw new Error(`Expected ArrayBuffer value at ${s} to be ${r[s]} but got ${n[s]} instead`)}function Bb(t){for(let e=0;e<t.length;e++){const n=t[e];Array.isArray(n)?Bb(n):t[e]=uo(n)}return t}function CI(t){const e=document.createElement("video");return"playsInline"in e&&(e.playsInline=!0),e.muted=!0,e.loop=!0,e.style.position="fixed",e.style.left="0px",e.style.top="0px",e.preload="auto",e.appendChild(t),new Promise(n=>{e.addEventListener("loadeddata",r=>n(e)),e.load()})}async function DI(t){await t.play(),"requestVideoFrameCallback"in t&&await new Promise(e=>{t.requestVideoFrameCallback(e)})}const PI=Object.freeze(Object.defineProperty({__proto__:null,TEST_EPSILON_FLOAT16:zb,createVideoElement:CI,encodeStrings:Bb,expectArrayBuffersEqual:OI,expectArraysClose:TI,expectArraysEqual:$I,expectNumbersClose:II,expectPromiseToFail:_I,expectValuesInRange:AI,play:DI,testEpsilon:Cf},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Pf{constructor(e,n,r,s,a){this.mean=e,this.stdDev=n,this.dtype=r,this.nextVal=NaN,this.truncated=s,this.truncated&&(this.upper=this.mean+this.stdDev*2,this.lower=this.mean-this.stdDev*2);const o=a||Math.random();this.random=Of.alea(o.toString())}nextValue(){if(!isNaN(this.nextVal)){const s=this.nextVal;return this.nextVal=NaN,s}let e,n,r=!1;for(;!r;){let s,a,o;do s=2*this.random()-1,a=2*this.random()-1,o=s*s+a*a;while(o>=1||o===0);const i=Math.sqrt(-2*Math.log(o)/o);e=this.mean+this.stdDev*s*i,n=this.mean+this.stdDev*a*i,(!this.truncated||this.isValidTruncated(e))&&(r=!0)}return(!this.truncated||this.isValidTruncated(n))&&(this.nextVal=this.convertValue(n)),this.convertValue(e)}convertValue(e){return this.dtype==null||this.dtype==="float32"?e:Math.round(e)}isValidTruncated(e){return e<=this.upper&&e>=this.lower}}class FI{constructor(e,n,r,s){this.alpha=e,this.beta=1/n,this.dtype=r;const a=s||Math.random();this.randu=Of.alea(a.toString()),this.randn=new Pf(0,1,r,!1,this.randu()),e<1?this.d=e+2/3:this.d=e-1/3,this.c=1/Math.sqrt(9*this.d)}nextValue(){let e,n,r,s,a,o;for(;;){do s=this.randn.nextValue(),o=1+this.c*s;while(o<=0);if(o*=o*o,e=s*s,n=1-.331*e*e,r=.5*e+this.d*(1-o+Math.log(o)),a=this.randu(),a<n||Math.log(a)<r)break}return o=1/this.beta*this.d*o,this.alpha<1&&(o*=Math.pow(this.randu(),1/this.alpha)),this.convertValue(o)}convertValue(e){return this.dtype==="float32"?e:Math.round(e)}}class RI{constructor(e=0,n=1,r,s){if(this.canReturnFloat=()=>this.dtype==null||this.dtype==="float32",this.min=e,this.range=n-e,this.dtype=r,s==null&&(s=Math.random()),typeof s=="number"&&(s=s.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error(`The difference between ${e} - ${n} <= 1 and dtype is not float`);this.random=Of.alea(s)}convertValue(e){return this.canReturnFloat()?e:Math.round(e)}nextValue(){return this.convertValue(this.min+this.range*this.random())}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function LI(t,e,n=1,r="float32",s){if(pt(t),n==null&&(n=1),r==null&&(r="float32"),r!=="float32"&&r!=="int32")throw new Error(`Unsupported data type ${r}`);const a=new FI(e,n,r,s),o=tn(t,r);for(let i=0;i<o.values.length;i++)o.values[i]=a.nextValue();return o.toTensor()}const jb=N({randomGamma_:LI});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zI(t,e=0,n=1,r,s){if(pt(t),r!=null&&r==="bool")throw new Error(`Unsupported data type ${r}`);const a=new Pf(e,n,r,!1,s),o=tn(t,r);for(let i=0;i<o.values.length;i++)o.values[i]=a.nextValue();return o.toTensor()}const Ff=N({randomNormal_:zI});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function BI(t,e,n){if(e!=null&&e==="bool")throw new Error(`Unsupported data type ${e}`);return Ff(t,0,1,e,n)}const Mb=N({randomStandardNormal_:BI});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jI(t,e=0,n=1,r="float32",s){pt(t);const a=tn(t,r),o=new RI(e,n,null,s);for(let i=0;i<a.values.length;i++)a.values[i]=o.nextValue();return a.toTensor()}const bl=N({randomUniform_:jI});/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function MI(t,e,n,r){return bl(t,e,n,"int32",r)}const Vb=N({randomUniformInt_:MI});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Rs(t,e,n=1,r="float32"){if(n===0)throw new Error("Cannot have a step of zero");const s={start:t,stop:e,step:n,dtype:r};return E.runKernel(L1,{},s)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function VI(t){const n={input:g(t,"input","real")};return E.runKernel(z1,n)}const Ls=N({real_:VI});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function UI(t){const n={x:g(t,"x","reciprocal")};return E.runKernel(B1,n)}const Ub=N({reciprocal_:UI});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function WI(t){const n={x:g(t,"x","relu")};return E.runKernel(j1,n)}const vo=N({relu_:WI});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function HI(t){const n={x:g(t,"x","relu6")};return E.runKernel(W1,n)}const Rf=N({relu6_:HI});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function GI(t,e){const r={x:g(t,"x","reverse")},s={dims:e};return E.runKernel(H1,r,s)}const rr=N({reverse_:GI});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qI(t){const e=g(t,"x","reverse");return k(e.rank===1,()=>`Error in reverse1D: x must be rank 1 but got rank ${e.rank}.`),rr(e,0)}const Wb=N({reverse1d_:qI});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function KI(t,e){const n=g(t,"x","reverse");return k(n.rank===2,()=>`Error in reverse2D: x must be rank 2 but got rank ${n.rank}.`),rr(n,e)}const Hb=N({reverse2d_:KI});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function QI(t,e){const n=g(t,"x","reverse");return k(n.rank===3,()=>`Error in reverse3D: x must be rank 3 but got rank ${n.rank}.`),rr(n,e)}const Gb=N({reverse3d_:QI});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function XI(t,e){const n=g(t,"x","reverse");return k(n.rank===4,()=>`Error in reverse4D: x must be rank 4 but got rank ${n.rank}.`),rr(n,e)}const qb=N({reverse4d_:XI});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function YI(t){const n={x:g(t,"x","round")};return E.runKernel(G1,n)}const Lf=N({round_:YI});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ZI(t){const n={x:g(t,"x","rsqrt","float32")};return E.runKernel(q1,n)}const Kb=N({rsqrt_:ZI});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function JI(t){const n={x:g(t,"x","selu")};return E.runKernel(Z1,n)}const Qb=N({selu_:JI});function e4(t,e,n,r,s,a=[1,1],o="NHWC"){const i=g(t,"x","separableConv2d"),l=g(e,"depthwiseFilter","separableConv2d"),u=g(n,"pointwiseFilter","separableConv2d");let p=i,c=!1;if(i.rank===3&&(c=!0,p=I(i,[1,i.shape[0],i.shape[1],i.shape[2]])),o==="NCHW")throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");k(p.rank===4,()=>`Error in separableConv2d: input must be rank 4, but got rank ${p.rank}.`),k(l.rank===4,()=>`Error in separableConv2d: depthwise filter must be rank 4, but got rank ${l.rank}.`),k(u.rank===4,()=>`Error in separableConv2d: pointwise filter must be rank 4, but got rank ${l.rank}.`),k(u.shape[0]===1,()=>`Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got ${u.shape[0]}.`),k(u.shape[1]===1,()=>`Error in separableConv2d: the second dimension of pointwise filter must be 1, but got ${u.shape[1]}.`);const f=l.shape[2],h=l.shape[3];k(u.shape[2]===f*h,()=>`Error in separableConv2d: the third dimension of pointwise filter must be ${f*h}, but got ${u.shape[2]}.`);const m=gl(p,l,r,s,o,a),b=ho(m,u,1,"valid",o);return c?I(b,[b.shape[1],b.shape[2],b.shape[3]]):b}const Xb=N({separableConv2d_:e4});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function t4(t,e){const n=g(t,"x","setdiff1d"),r=g(e,"y","setdiff1d");k(n.dtype===r.dtype,()=>`x and y should have the same dtype, but got x (${n.dtype}) and y (${r.dtype}).`),k(n.rank===1,()=>`x should be 1D tensor, but got x (${n.shape}).`),k(r.rank===1,()=>`y should be 1D tensor, but got y (${r.shape}).`);const s=await n.data(),a=await r.data(),o=new Set(a);let i=0;for(let p=0;p<s.length;p++)o.has(s[p])||i++;const l=new Bi([i],n.dtype),u=new Bi([i],"int32");for(let p=0,c=0;p<s.length;p++)o.has(s[p])||(l.values[c]=s[p],u.values[c]=p,c++);return[l.toTensor(),u.toTensor()]}const Yb=t4;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function n4(t){const n={x:g(t,"x","sign")};return E.runKernel(nw,n)}const Zb=N({sign_:n4});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function r4(t){const n={x:g(t,"x","sin","float32")};return E.runKernel(ew,n)}const Jb=N({sin_:r4});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function s4(t){const n={x:g(t,"x","sinh")};return E.runKernel(tw,n)}const e2=N({sinh_:s4});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function a4(t,e,n){const r=g(t,"x","slice1d");return k(r.rank===1,()=>`slice1d expects a rank-1 tensor, but got a rank-${r.rank} tensor`),J(r,[e],[n])}const t2=N({slice1d_:a4});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function o4(t,e,n){const r=g(t,"x","slice2d");return k(r.rank===2,()=>`slice2d expects a rank-2 tensor, but got a rank-${r.rank} tensor`),J(r,e,n)}const n2=N({slice2d_:o4});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function i4(t,e,n){const r=g(t,"x","slice3d");return k(r.rank===3,()=>`slice3d expects a rank-3 tensor, but got a rank-${r.rank} tensor`),J(r,e,n)}const r2=N({slice3d_:i4});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function l4(t,e,n){const r=g(t,"x","slice4d");return k(r.rank===4,()=>`slice4d expects a rank-4 tensor, but got a rank-${r.rank} tensor`),J(r,e,n)}const s2=N({slice4d_:l4});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function u4(t,e=-1){const n=g(t,"logits","softmax","float32");if(e===-1&&(e=n.rank-1),e!==n.rank-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${n.rank} and dim was ${e}`);const r={logits:n},s={dim:e};return E.runKernel(uw,r,s)}const zf=N({softmax_:u4});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function c4(t){k(t.dtype==="complex64",()=>`The dtype for tf.spectral.fft() must be complex64 but got ${t.dtype}.`);const e={input:t};return E.runKernel(B0,e)}const kl=N({fft_:c4});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function p4(t){k(t.dtype==="complex64",()=>`The dtype for tf.spectral.ifft() must be complex64 but got ${t.dtype}.`);const e={input:t};return E.runKernel(Q0,e)}const Za=N({ifft_:p4});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function f4(t){const e=t.shape[t.shape.length-1],n=t.size/e;let r;if(e<=2){const s=I(t,[n,e]);r=Za(s)}else{const s=[n,2*(e-1)],a=I(Ls(t),[n,e]),o=I(wo(t),[n,e]),i=rr(J(a,[0,1],[n,e-2]),1),l=R(rr(J(o,[0,1],[n,e-2]),1),K(-1)),u=Le([a,i],1),p=Le([o,l],1),c=I(kn(u,p),[s[0],s[1]]);r=Za(c)}if(r=Ls(r),t.rank===3&&t.shape[0]!==0){const s=r,a=t.shape[0];r=I(r,[a,r.shape[0]/a,r.shape[1]]),s.dispose()}return r}const Bf=N({irfft_:f4});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function d4(t,e,n=0){const s={x:g(t,"x","split")},a={numOrSizeSplits:e,axis:n};return E.runKernel(lw,s,a)}const zs=N({split_:d4});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function h4(t,e){k(t.dtype==="float32",()=>`The dtype for rfft() must be real value but got ${t.dtype}`);let n=t.shape[t.shape.length-1];const r=t.size/n;let s;if(e!=null&&e<n){const m=t.shape.map(b=>0),w=t.shape.map(b=>b);w[t.shape.length-1]=e,s=J(t,m,w),n=e}else if(e!=null&&e>n){const m=t.shape.map(w=>w);m[t.shape.length-1]=e-n,s=Le([t,nr(m)],t.shape.length-1),n=e}else s=t;const a=ct(s),o=I(kn(s,a),[r,n]),i=kl(o),l=Math.floor(n/2)+1,u=Ls(i),p=wo(i),c=zs(u,[l,n-l],u.shape.length-1),f=zs(p,[l,n-l],p.shape.length-1),h=s.shape.slice();return h[s.shape.length-1]=l,I(kn(c[0],f[0]),h)}const Sl=N({rfft_:h4});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function m4(t,e){let n=g(t,"a","squaredDifference"),r=g(e,"b","squaredDifference");[n,r]=me(n,r),Ee(n.shape,r.shape);const s={a:n,b:r},a={};return E.runKernel(mw,s,a)}const jf=N({squaredDifference_:m4});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function g4(t,e){const n=g(t,"x","squeeze","string_or_numeric");return I(n,Dy(n.shape,e).newShape)}const bo=N({squeeze_:g4});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function y4(t,e=0){const n=Ha(t,"tensors","stack","string_or_numeric");k(n.length>=1,()=>"Pass at least one tensor to tf.stack"),n.length>0&&k(e<=n[0].rank,()=>"Axis must be <= rank of the tensor");const r=n,s={axis:e};return E.runKernel(I1,r,s)}const sn=N({stack_:y4});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function w4(t,e=0){const r={x:g(t,"x","step")},s={alpha:e};return E.runKernel(Aw,r,s)}const Mf=N({step_:w4});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function v4(t,e,n,r,s=0,a=0,o=0,i=0,l=0){const p={x:g(t,"x","stridedSlice","string_or_numeric")},c={begin:e,end:n,strides:r,beginMask:s,endMask:a,ellipsisMask:o,newAxisMask:i,shrinkAxisMask:l};return E.runKernel(yw,p,c)}const a2=N({stridedSlice_:v4});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function b4(t){const n={x:g(t,"x","tan","float32")};return E.runKernel(Sw,n)}const o2=N({tan_:b4});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gt(t,e){Hr(t);const n=en(t,e);if(n.length!==1)throw new Error("tensor1d() requires values to be a flat/TypedArray");return ur(t,null,n,e)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ss(t,e,n){if(Hr(t),e!=null&&e.length!==2)throw new Error("tensor2d() requires shape to have two numbers");const r=en(t,n);if(r.length!==2&&r.length!==1)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(r.length===1&&e==null)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return ur(t,e,r,n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vf(t,e,n){if(Hr(t),e!=null&&e.length!==3)throw new Error("tensor3d() requires shape to have three numbers");const r=en(t,n);if(r.length!==3&&r.length!==1)throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(r.length===1&&e==null)throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");return ur(t,e,r,n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function i2(t,e,n){if(Hr(t),e!=null&&e.length!==4)throw new Error("tensor4d() requires shape to have four numbers");const r=en(t,n);if(r.length!==4&&r.length!==1)throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(r.length===1&&e==null)throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");return ur(t,e,r,n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function l2(t,e,n){if(Hr(t),e!=null&&e.length!==5)throw new Error("tensor5d() requires shape to have five numbers");const r=en(t,n);if(r.length!==5&&r.length!==1)throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");if(r.length===1&&e==null)throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");return ur(t,e,r,n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function u2(t,e,n){if(Hr(t),e!=null&&e.length!==6)throw new Error("tensor6d() requires shape to have six numbers");const r=en(t,n);if(r.length!==6&&r.length!==1)throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");if(r.length===1&&e==null)throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");return e=e||r,ur(t,e,r,n)}function Uf(t,e,n){const r=e.rank>1?e.shape[e.rank-1]:1,s=e.rank>1?e.rank-1:1,a=`Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: ${n.shape}, indices.shape: ${e.shape}, shape: ${t}, sliceDim: ${r}, and batchDim: ${s}.`;if(n.rank<s)throw new Error(a+` update.rank < ${s}. `);if(t.length<r+(n.rank-s))throw new Error(a+` Output shape length < ${r+(n.rank-s)}`);if(n.rank!==s+t.length-r)throw new Error(a+` update.rank != ${s+t.length-r}`);for(let o=0;o<s;++o)if(n.shape[o]!==e.shape[o])throw new Error(a+` updates.shape[${o}] (${n.shape[o]}) != indices.shape[${o}] (${e.shape[o]}).`);for(let o=0;o<n.rank-s;++o)if(n.shape[o+s]!==t[o+r])throw new Error(a+` updates.shape[${o+s}] (${n.shape[o+s]}) != shape[${o+s}] (${t[o+s]})`)}function Nl(t,e,n){if(e.rank<1)throw new Error(`tf.scatterND() expects the indices to be rank 1 or higher, but the rank was ${e.rank}.`);if(t.rank<1)throw new Error(`tf.scatterND() expects the updates to be rank 1 or higher, but the rank was ${t.rank}.`);if(e.dtype!=="int32")throw new Error(`The dtype of 'indices' should be int32, but got dtype: ${e.dtype}`);if(n.length<1)throw new Error(`Output rank must be greater or equal to 1, but got shape: ${n}`);if(n.length===0){if(e.size===0)throw new Error(`Indices specified for empty output. indices shape: ${e.shape}`);if(t.size===0)throw new Error(`Updates specified for empty output. updates shape: ${t.shape}`)}Uf(n,e,t)}function c2(t,e,n){const r=e.shape.length,s=r>1?e.shape[r-1]:1,a=n.length;let o=1;for(let c=s;c<a;++c)o*=n[c];const i=s<1?1:s,l=te(e.shape)/i,u=[...Ws(n.slice(0,s)),1],p=te(n);return{sliceRank:s,numUpdates:l,sliceSize:o,strides:u,outputSize:p}}const k4=Object.freeze(Object.defineProperty({__proto__:null,calculateShapes:c2,validateInput:Nl,validateUpdateShape:Uf},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function S4(t,e,n){const r=g(t,"tensor","tensorScatterupdate"),s=g(e,"indices","tensorScatterupdate","int32"),a=g(n,"updates","tensorScatterupdate");if(Nl(a,s,r.shape),r.dtype!==a.dtype)throw new Error(`tensor and updates must have the same dtype, instead they are ${r.dtype} and ${a.dtype}.`);const o={tensor:r,indices:s,updates:a},i={};return E.runKernel(Q1,o,i)}const p2=N({tensorScatterUpdate_:S4});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function N4(t,e=1,n=!0){const r=g(t,"x","topk");if(r.rank===0)throw new Error("topk() expects the input to be of rank 1 or higher");const s=r.shape[r.shape.length-1];if(e<0)throw new Error(`'k' passed to topk() must be >= 0 but got ${e}`);if(e>s)throw new Error(`'k' passed to topk() must be <= the last dimension (${s}) but got ${e}`);const a={x:r},o={k:e,sorted:n},[i,l]=E.runKernel(Ew,a,o);return{values:i,indices:l}}const f2=N({topk_:N4});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function E4(t,e=0,n=1,r,s){if(pt(t),r!=null&&r==="bool")throw new Error("Unsupported data type $ { dtype }");const a=new Pf(e,n,r,!0,s),o=tn(t,r);for(let i=0;i<o.values.length;i++)o.values[i]=a.nextValue();return o.toTensor()}const d2=N({truncatedNormal_:E4});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function x4(t,e=0){const n=g(t,"x","unique","string_or_numeric");k(n.rank>0,()=>"The input tensor must be at least 1D");const r={x:n},s={axis:e},[a,o]=E.runKernel(Tw,r,s);return{values:a,indices:o}}const h2=N({unique_:x4});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function T4(t,e,n){const r=g(t,"x","unsortedSegmentSum"),s=g(e,"segmentIds","unsortedSegmentSum","int32");k(As(n),()=>"numSegments must be of dtype int");const a={x:r,segmentIds:s},o={numSegments:n};return E.runKernel($w,a,o)}const m2=N({unsortedSegmentSum_:T4});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _4(t,e=0){const n=g(t,"x","unstack","string_or_numeric");k(e>=-n.shape.length&&e<n.shape.length,()=>`Axis = ${e} is not in [-${n.shape.length}, ${n.shape.length})`);const r={value:n},s={axis:e};return E.runKernel(_w,r,s)}const cr=N({unstack_:_4});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function g2(t,e){return vl(t,e,"right")}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function y2(t,e=!0,n,r){return E.makeVariable(t,e,n,r)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function w2(t,e){const n=[];for(let a=0;a<e.length;a++)e[a]&&n.push(a);const r=tn(t,"int32"),s=tn([n.length,t.length],"int32");for(let a=0;a<n.length;a++){const o=r.indexToLoc(n[a]),i=a*t.length;s.values.set(o,i)}return s.toTensor()}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function $4(t){const e=g(t,"condition","whereAsync","bool"),n=await e.data(),r=w2(e.shape,n);return t!==e&&e.dispose(),r}const Wf=$4;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function I4(t,e,n){const r=g(t,"tensor","boolMask"),s=g(e,"mask","boolMask","bool"),a=n??0,o=s.rank,i=r.shape;k(o>0,()=>"mask cannot be scalar"),Ke(i.slice(a,a+o),s.shape,"mask's shape must match the first K dimensions of tensor's shape,");let l=1;for(let w=a;w<a+o;w++)l*=i[w];const u=i.slice(0,a).concat([l],i.slice(a+o)),p=I(r,u),c=I(s,[-1]),f=await Wf(c),h=bo(f,[1]),m=ff(p,h,a);return t!==r&&r.dispose(),e!==s&&s.dispose(),h.dispose(),p.dispose(),c.dispose(),f.dispose(),m}const v2=I4;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function A4(t,e,n){const r=g(t,"x","transpose");if(e==null&&(e=r.shape.map((o,i)=>i).reverse()),k(r.rank===e.length,()=>`Error in transpose: rank of input ${r.rank} must match length of perm ${e}.`),e.forEach(o=>{k(o>=0&&o<r.rank,()=>`All entries in 'perm' must be between 0 and ${r.rank-1} but got ${e}`)}),r.rank<=1)return r.clone();const s={x:r},a={perm:e};return r.dtype==="complex64"?Y(()=>{let o=Ls(r),i=wo(r);return o=E.runKernel(ti,{x:o},a),i=E.runKernel(ti,{x:i},a),n&&(i=Ut(i)),kn(o,i)}):E.runKernel(ti,s,a)}const Ja=N({transpose_:A4});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function O4(t,e,n,r,s=!0){const a=g(t,"v","movingAverage"),o=g(e,"x","movingAverage"),i=g(n,"decay","movingAverage");Gw(a,o),k(Ht(a.shape,o.shape),()=>"Shape mismatch in v and x");const l=K(1),u=H(l,i);let p=R(H(o,a),u);if(s){k(r!=null,()=>"When using zeroDebias: true, step is required.");const c=g(r,"step","movingAverage");p=oe(p,H(l,Ps(i,c)))}return M(a,p)}const b2=N({movingAverage_:O4});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function C4(t,e,n){pt(n);const r=g(t,"indices","scatterND","int32"),s=g(e,"updates","scatterND");Nl(s,r,n);const a={indices:r,updates:s},o={shape:n};return E.runKernel(K1,a,o)}const k2=N({scatterND_:C4});function D4(t,e,n,r){if(t.dtype!=="int32")throw new Error(`tf.sparseToDense() expects the indices to be int32 type, but the dtype was ${t.dtype}.`);if(t.rank>2)throw new Error(`sparseIndices should be a scalar, vector, or matrix, but got shape ${t.shape}.`);const s=t.rank>0?t.shape[0]:1,a=t.rank>1?t.shape[1]:1;if(n.length!==a)throw new Error(`outputShape has incorrect number of elements:, ${n.length}, should be: ${a}.`);const o=e.size;if(!(e.rank===0||e.rank===1&&o===s))throw new Error(`sparseValues has incorrect shape ${e.shape}, should be [] or [${s}]`);if(e.dtype!==r.dtype)throw new Error("sparseValues.dtype must match defaultValues.dtype")}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function P4(t,e,n,r=0){pt(n);const s=g(t,"sparseIndices","sparseToDense","int32"),a=g(e,"sparseValues","sparseToDense","string_or_numeric"),o=g(r,"defaultValue","sparseToDense",a.dtype);D4(s,a,n,o);const i={sparseIndices:s,sparseValues:a,defaultValue:o},l={outputShape:n};return E.runKernel(hw,i,l)}const S2=N({sparseToDense_:P4});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function F4(t,e){const n=g(e,"indices","gatherND","int32"),s={params:g(t,"x","gatherND","string_or_numeric"),indices:n};return E.runKernel(G0,s)}const N2=N({gatherND_:F4});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function R4(t,e){if(e==null)return t.shape.slice();if(Ht(t.shape,e))return e;if(t.shape.length===e.length){const n=[];for(let r=0;r<t.shape.length;r++)e[r]==null&&t.shape[r]!=null?n.push(t.shape[r]):n.push(e[r]);return n}return e}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function L4(t,e,n,r){const s=g(t,"x","dropout");if(k(s.dtype==="float32",()=>`x has to be a floating point tensor since it's going to be scaled, but got a ${s.dtype} tensor instead.`),k(e>=0&&e<1,()=>`rate must be a float in the range [0, 1), but got ${e}.`),e===0)return t instanceof he?s.clone():s;const a=R4(s,n),o=1-e,i=oe(pf(M(bl(a,0,1,"float32",r),o)),o);return R(s,i)}const E2=N({dropout_:L4});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Hf(t){return Math.floor(Math.pow(2,Math.ceil(Math.log(t)/Math.log(2))))}function El(t,e,n){const r=1-t%2,s=new Float32Array(t);for(let a=0;a<t;++a){const o=2*Math.PI*a/(t+r-1);s[a]=e-n*Math.cos(o)}return gt(s,"float32")}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function z4(t,e,n=1){const r=g(t,"predictions","inTopK"),s=g(e,"targets","inTopK");k(r.rank>1,()=>`inTopK() expects the predictions to be of rank 2 or higher, but got ${r.rank}`),k(r.rank-1===s.rank,()=>`predictions rank should be 1 larger than targets rank, but got predictions rank ${r.rank} and targets rank ${s.rank}`),Ke(r.shape.slice(0,r.shape.length-1),s.shape,"predictions's shape should be align with the targets' shape, except the last dimension.");const a=r.shape[r.shape.length-1];k(n>0&&n<=a,()=>`'k' passed to inTopK() must be > 0 && <= the predictions last dimension (${a}), but got ${n}`);const o=await r.data(),i=await s.data(),[l,u]=[o.length/a,a],p=Py("bool",l);for(let c=0;c<l;c++){const f=c*u,h=o.subarray(f,f+u),m=[];for(let w=0;w<h.length;w++)m.push({value:h[w],index:w});m.sort((w,b)=>b.value-w.value),p[c]=0;for(let w=0;w<n;w++)if(m[w].index===i[c]){p[c]=1;break}}return t!==r&&r.dispose(),e!==s&&s.dispose(),Vt(p,s.shape,"bool")}const x2=z4;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function B4(t,e,n,r,s,a="NHWC",o){let i=t;t.rank===3&&(i=I(t,[1,t.shape[0],t.shape[1],t.shape[2]]));let l=e;l.rank===3&&(l=I(e,[1,e.shape[0],e.shape[1],e.shape[2]])),k(i.rank===4,()=>`Error in conv2dDerFilter: input must be rank 4, but got shape ${i.shape}.`),k(l.rank===4,()=>`Error in conv2dDerFilter: dy must be rank 4, but got shape ${l.shape}.`),k(n.length===4,()=>`Error in conv2dDerFilter: filterShape must be length 4, but got ${n}.`);const u=a==="NHWC"?i.shape[3]:i.shape[1],p=a==="NHWC"?l.shape[3]:l.shape[1];k(u===n[2],()=>`Error in conv2dDerFilter: depth of input ${u}) must match input depth in filter (${n[2]}.`),k(p===n[3],()=>`Error in conv2dDerFilter: depth of dy (${p}) must match output depth for filter (${n[3]}).`),Ct("conv2dDerFilter",s,o);const c={x:i,dy:l},f={strides:r,pad:s,dataFormat:a,dimRoundingMode:o,filterShape:n};return E.runKernel(m0,c,f)}const j4=N({conv2DBackpropFilter_:B4});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xl(t,e,n){if(n==null||n==="linear")return t;if(n==="relu")return R(t,Mf(e));throw new Error(`Cannot compute gradient for fused activation ${n}.`)}function Tl(t,e){let n=e;const r=af(t.shape,e.shape);return r.length>0&&(n=ae(n,r)),I(n,t.shape)}function _l(t,e,n,r){if(e==="linear")return t;if(e==="relu")return vo(t);if(e==="elu")return lf(t);if(e==="relu6")return Rf(t);if(e==="prelu")return Ef(t,n);if(e==="leakyrelu")return hf(t,r);if(e==="sigmoid")return Ir(t);throw new Error(`Unknown fused activation ${e}.`)}const $l=(t,e)=>!(t>0)||e==="linear";/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function M4({x:t,filter:e,strides:n,pad:r,dataFormat:s="NHWC",dilations:a=[1,1],dimRoundingMode:o,bias:i,activation:l="linear",preluActivationWeights:u,leakyreluAlpha:p}){if(l=l||"linear",$l(E.state.gradientDepth,l)===!1){k(s==="NHWC",()=>`Error in fused conv2d: got dataFormat of ${s} but only NHWC is currently supported for the case of gradient depth is 0 and the activation is not linear.`);let _=ho(t,e,n,r,s,a,o);return i!=null&&(_=M(_,i)),_l(_,l,u,p)}const c=g(t,"x","conv2d","float32"),f=g(e,"filter","conv2d","float32");let h=c,m=!1;c.rank===3&&(m=!0,h=I(c,[1,c.shape[0],c.shape[1],c.shape[2]])),k(h.rank===4,()=>`Error in fused conv2d: input must be rank 4, but got rank ${h.rank}.`),k(f.rank===4,()=>`Error in fused conv2d: filter must be rank 4, but got rank ${f.rank}.`),Ct("fused conv2d",r,o);const w=s==="NHWC"?h.shape[3]:h.shape[1];k(f.shape[2]===w,()=>`Error in conv2d: depth of input (${w}) must match input depth for filter ${f.shape[2]}.`),k(Nn(n,a),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${n} and dilations '${a}'`);const b=po(h.shape,f.shape,n,a,r,o);let y;i!=null&&(y=g(i,"bias","fused conv2d"),[y]=me(y,c),s==="NHWC"?Ee(b.outShape,y.shape):(k(y.shape.length<=1,()=>`Error in fused conv2d: only supports scalar or 1-D Tensor bias for NCHW format but got the bias of rank-${y.shape.length}.`),k(y.shape.length===0||y.shape[0]===b.outChannels||y.shape[0]===1,()=>`Error in fused conv2d: bias shape (${y.shape}) is not compatible with the number of output channels (${b.outChannels})`)));let S;if(u!=null){const _=u.shape;if(k(_.length<=1||_.length===3,()=>`Error in fused conv2d: only supports scalar, 1-D Tensor or 3-D Tensor PReLU activation weights but got a tensor of rank-${_.length}.`),_.length===1)k(_[0]===1||_[0]===b.outChannels,()=>`Error in fused conv2d: PReLU activation weights (${_}) is not compatible with the number of output channels (${b.outChannels}).`);else if(_.length===3)try{Ee(_,b.outShape)}catch{const O=`Error in fused conv2d: PReLU activation weights (${_}) is not compatible with the output shape of the conv2d (${b.outShape}).`;throw Error(O)}S=g(u,"prelu weights","fused conv2d")}const v=(_,A)=>{k(s==="NHWC",()=>`Error in gradient of fused conv2D: got dataFormat of ${s} but only NHWC is currently supported.`);const[O,L,P,j]=A,q=xl(_,P,l);k(Ka(a),()=>`Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${a}'`);const Q=jv(L.shape,q,O,n,r),ne=j4(L,q,O.shape,n,r),be=[Q,ne];if(j!=null){const Be=Tl(j,q);be.push(Be)}return be},x={x:h,filter:f,bias:y,preluActivationWeights:S},T={strides:n,pad:r,dataFormat:s,dilations:a,dimRoundingMode:o,activation:l,leakyreluAlpha:p};return i==null?rn((A,O,L)=>{let P=E.runKernel(lc,x,T);return L([O,A,P]),m&&(P=I(P,[P.shape[1],P.shape[2],P.shape[3]])),{value:P,gradFunc:v}})(h,f):rn((A,O,L,P)=>{let j=E.runKernel(lc,x,T);return P([O,A,j,L]),m&&(j=I(j,[j.shape[1],j.shape[2],j.shape[3]])),{value:j,gradFunc:v}})(h,f,y)}const V4=N({fusedConv2d_:M4});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function U4(t,e,n,r,s,a=[1,1],o){let i=t;t.rank===3&&(i=I(t,[1,t.shape[0],t.shape[1],t.shape[2]]));let l=e;l.rank===3&&(l=I(e,[1,e.shape[0],e.shape[1],e.shape[2]]));const u={x:i,dy:l},p={strides:r,pad:s,dimRoundingMode:o,dilations:a,filterShape:n};return E.runKernel(_0,u,p)}const W4=N({depthwiseConv2dNativeBackpropFilter_:U4});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function H4(t,e,n,r,s,a=[1,1],o){let i=e,l=!1;e.rank===3&&(l=!0,i=I(e,[1,e.shape[0],e.shape[1],e.shape[2]]));const u={dy:i,filter:n},p={strides:r,pad:s,dimRoundingMode:o,dilations:a,inputShape:t},c=E.runKernel($0,u,p);return l?I(c,[c.shape[1],c.shape[2],c.shape[3]]):c}const G4=N({depthwiseConv2dNativeBackpropInput_:H4});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function q4({x:t,filter:e,strides:n,pad:r,dataFormat:s="NHWC",dilations:a=[1,1],dimRoundingMode:o,bias:i,activation:l="linear",preluActivationWeights:u,leakyreluAlpha:p}){if($l(E.state.gradientDepth,l)===!1){let T=gl(t,e,n,r,s,a,o);return i!=null&&(T=M(T,i)),_l(T,l,u,p)}const c=g(t,"x","depthwiseConv2d","float32"),f=g(e,"filter","depthwiseConv2d","float32");let h=c,m=!1;c.rank===3&&(m=!0,h=I(c,[1,c.shape[0],c.shape[1],c.shape[2]])),k(h.rank===4,()=>`Error in fused depthwiseConv2d: input must be rank 4, but got rank ${h.rank}.`),k(f.rank===4,()=>`Error in fused depthwiseConv2d: filter must be rank 4, but got rank ${f.rank}.`),k(h.shape[3]===f.shape[2],()=>`Error in fused depthwiseConv2d: number of input channels (${h.shape[3]}) must match the inChannels dimension in filter ${f.shape[2]}.`),a==null&&(a=[1,1]),k(Nn(n,a),()=>`Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides ${n} and dilations '${a}'`),Ct("fused depthwiseConv2d",r,o);const w=po(h.shape,f.shape,n,a,r,o,!0);let b;i!=null&&(b=g(i,"bias","fused conv2d"),[b]=me(b,c),Ee(w.outShape,b.shape));let y;u!=null&&(y=g(u,"prelu weights","fused depthwiseConv2d"));const S=(T,_)=>{k(Ka(a),()=>`Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '${a}'`);const[A,O,L,P]=_,j=xl(T,L,l),q=G4(O.shape,j,A,n,r,a,o),Q=W4(O,j,A.shape,n,r,a,o);if(P!=null){const ne=Tl(b,j);return[q,Q,ne]}return[q,Q]},v={x:h,filter:f,bias:b,preluActivationWeights:y},x={strides:n,pad:r,dataFormat:s,dilations:a,dimRoundingMode:o,activation:l,leakyreluAlpha:p};return i==null?rn((_,A,O)=>{let L=E.runKernel(uc,v,x);return O([A,_,L]),m&&(L=I(L,[L.shape[1],L.shape[2],L.shape[3]])),{value:L,gradFunc:S}})(h,f):rn((_,A,O,L)=>{let P=E.runKernel(uc,v,x);return L([A,_,P,O]),m&&(P=I(P,[P.shape[1],P.shape[2],P.shape[3]])),{value:P,gradFunc:S}})(h,f,b)}const K4=N({fusedDepthwiseConv2d_:q4});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Q4({a:t,b:e,transposeA:n=!1,transposeB:r=!1,bias:s,activation:a="linear",preluActivationWeights:o,leakyreluAlpha:i=.2}){if($l(E.state.gradientDepth,a)===!1){let j=Z(t,e,n,r);return s!=null&&(j=M(j,s)),_l(j,a,o,i)}let l=g(t,"a","fused matMul"),u=g(e,"b","fused matMul");[l,u]=me(l,u);const p=n?l.shape[l.rank-2]:l.shape[l.rank-1],c=r?u.shape[u.rank-1]:u.shape[u.rank-2],f=n?l.shape[l.rank-1]:l.shape[l.rank-2],h=r?u.shape[u.rank-2]:u.shape[u.rank-1],m=l.shape.slice(0,-2),w=u.shape.slice(0,-2),b=te(m),y=te(w);k(p===c,()=>`Error in fused matMul: inner shapes (${p}) and (${c}) of Tensors with shapes ${l.shape} and ${u.shape} and transposeA=${n} and transposeB=${r} must match.`);const v=Ee(l.shape.slice(0,-2),u.shape.slice(0,-2)).concat([f,h]),x=n?I(l,[b,p,f]):I(l,[b,f,p]),T=r?I(u,[y,h,c]):I(u,[y,c,h]);let _;s!=null&&(_=g(s,"bias","fused matMul"),[_]=me(_,l),Ee(v,_.shape));let A;o!=null&&(A=g(o,"prelu weights","fused matMul"));const O=(j,q)=>{const[Q,ne,be,Be]=q,dt=xl(I(j,be.shape),be,a);let z,U;if(!n&&!r?(z=Z(dt,ne,!1,!0),U=Z(Q,dt,!0,!1)):!n&&r?(z=Z(dt,ne,!1,!1),U=Z(dt,Q,!0,!1)):n&&!r?(z=Z(ne,dt,!1,!0),U=Z(Q,dt,!1,!1)):(z=Z(ne,dt,!0,!0),U=Z(dt,Q,!0,!0)),s!=null){const W=Tl(Be,dt);return[z,U,W]}else return[z,U]},L={a:x,b:T,bias:_,preluActivationWeights:A},P={transposeA:n,transposeB:r,activation:a,leakyreluAlpha:i};return s==null?rn((q,Q,ne)=>{const be=E.runKernel(ic,L,P);return ne([q,Q,be]),{value:I(be,v),gradFunc:O}})(x,T):rn((q,Q,ne,be)=>{const Be=E.runKernel(ic,L,P);return be([q,Q,Be,ne]),{value:I(Be,v),gradFunc:O}})(x,T,_)}const X4=N({fusedMatMul_:Q4});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const T2=Object.freeze(Object.defineProperty({__proto__:null,conv2d:V4,depthwiseConv2d:K4,matMul:X4},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Y4(t){return El(t,.54,.46)}const Z4=N({hammingWindow_:Y4});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function J4(t){return El(t,.5,.5)}const _2=N({hannWindow_:J4});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function eA(t,e,n,r=!1,s=0){let a=0;const o=[];for(;a+e<=t.size;)o.push(J(t,a,e)),a+=n;if(r)for(;a<t.size;){const i=a+e-t.size,l=Le([J(t,a,e-i),Hs([i],s)]);o.push(l),a+=n}return o.length===0?Ss([],[0,e]):I(Le(o),[o.length,e])}const $2=N({frame_:eA});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tA(t,e,n,r,s=_2){r==null&&(r=Hf(e));const a=$2(t,e,n),o=R(a,s(e));return Sl(o,r)}const nA=N({stft_:tA});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function rA(t,e,n,r,s="bilinear",a=0){const o=g(t,"image","cropAndResize"),i=g(e,"boxes","cropAndResize","float32"),l=g(n,"boxInd","cropAndResize","int32"),u=i.shape[0];k(o.rank===4,()=>`Error in cropAndResize: image must be rank 4,but got rank ${o.rank}.`),k(i.rank===2&&i.shape[1]===4,()=>`Error in cropAndResize: boxes must be have size [${u},4] but had shape ${i.shape}.`),k(l.rank===1&&l.shape[0]===u,()=>`Error in cropAndResize: boxInd must be have size [${u}] but had shape ${i.shape}.`),k(r.length===2,()=>`Error in cropAndResize: cropSize must be of length 2, but got length ${r.length}.`),k(r[0]>=1&&r[1]>=1,()=>`cropSize must be atleast [1,1], but was ${r}`),k(s==="bilinear"||s==="nearest",()=>`method must be bilinear or nearest, but was ${s}`);const p={image:o,boxes:i,boxInd:l},c={method:s,extrapolationValue:a,cropSize:r};return E.runKernel(N0,p,c)}const sA=N({cropAndResize_:rA});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function aA(t){const e=g(t,"image","flipLeftRight","float32");k(e.rank===4,()=>`Error in flipLeftRight: image must be rank 4,but got rank ${e.rank}.`);const n={image:e};return E.runKernel(M0,n,{})}const oA=N({flipLeftRight_:aA});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function iA(t){const e=g(t,"image","grayscaleToRGB"),n=e.rank-1,r=e.shape[n];k(e.rank>=2,()=>`Error in grayscaleToRGB: images must be at least rank 2, but got rank ${e.rank}.`),k(r===1,()=>`Error in grayscaleToRGB: last dimension of a grayscale image should be size 1, but got size ${r}.`);const s=new Array(e.rank);return s.fill(1,0,n),s[n]=3,ks(e,s)}const lA=N({grayscaleToRGB_:iA});/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function uA(t){const e=g(t,"image","RGBToGrayscale"),n=e.rank-1,r=e.shape[n];k(e.rank>=2,()=>`Error in RGBToGrayscale: images must be at least rank 2, but got rank ${e.rank}.`),k(r===3,()=>`Error in RGBToGrayscale: last dimension of an RGB image should be size 3, but got size ${r}.`);const s=e.dtype,a=re(e,"float32"),o=gt([.2989,.587,.114]);let i;switch(e.rank){case 2:i=vr("ij,j->i",a,o);break;case 3:i=vr("ijk,k->ij",a,o);break;case 4:i=vr("ijkl,l->ijk",a,o);break;case 5:i=vr("ijklm,m->ijkl",a,o);break;case 6:i=vr("ijklmn,n->ijklm",a,o);break;default:throw new Error("Not a valid tensor rank.")}return i=ln(i,-1),re(i,s)}const cA=N({rgbToGrayscale_:uA});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pA(t,e,n=0,r=.5){const s=g(t,"image","rotateWithOffset","float32");k(s.rank===4,()=>`Error in rotateWithOffset: image must be rank 4,but got rank ${s.rank}.`);const a={image:s},o={radians:e,fillValue:n,center:r};return E.runKernel(Ow,a,o)}const fA=N({rotateWithOffset_:pA});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qs(t,e,n,r,s,a){r==null&&(r=.5),s==null&&(s=Number.NEGATIVE_INFINITY),a==null&&(a=0);const o=t.shape[0];return n=Math.min(n,o),k(0<=r&&r<=1,()=>`iouThreshold must be in [0, 1], but was '${r}'`),k(t.rank===2,()=>`boxes must be a 2D tensor, but was of rank '${t.rank}'`),k(t.shape[1]===4,()=>`boxes must have 4 columns, but 2nd dimension was ${t.shape[1]}`),k(e.rank===1,()=>"scores must be a 1D tensor"),k(e.shape[0]===o,()=>`scores has incompatible shape with boxes. Expected ${o}, but was ${e.shape[0]}`),k(0<=a&&a<=1,()=>`softNmsSigma must be in [0, 1], but was '${a}'`),{maxOutputSize:n,iouThreshold:r,scoreThreshold:s,softNmsSigma:a}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dA(t,e,n,r=.5,s=Number.NEGATIVE_INFINITY){const a=g(t,"boxes","nonMaxSuppression","float32"),o=g(e,"scores","nonMaxSuppression","float32"),i=qs(a,o,n,r,s);n=i.maxOutputSize,r=i.iouThreshold,s=i.scoreThreshold;const l={maxOutputSize:n,iouThreshold:r,scoreThreshold:s};return E.runKernel(E1,{boxes:a,scores:o},l)}const hA=N({nonMaxSuppression_:dA});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function mA(t,e,n){const r=gA(t,e,n),s=r<0?-(r+1):r;t.splice(s,0,e)}function gA(t,e,n){return wA(t,e,n||yA)}function yA(t,e){return t>e?1:t<e?-1:0}function wA(t,e,n){let r=0,s=t.length,a=0,o=!1;for(;r<s;){a=r+(s-r>>>1);const i=n(e,t[a]);i>0?r=a+1:(s=a,o=!i)}return o?r:-r-1}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function I2(t,e,n,r,s){return Gf(t,e,n,r,s,0)}function A2(t,e,n,r,s,a){return Gf(t,e,n,r,s,0,!1,a,!0)}function O2(t,e,n,r,s,a){return Gf(t,e,n,r,s,a,!0)}function Gf(t,e,n,r,s,a,o=!1,i=!1,l=!1){const u=[];for(let b=0;b<e.length;b++)e[b]>s&&u.push({score:e[b],boxIndex:b,suppressBeginIndex:0});u.sort(Lh);const p=a>0?-.5/a:0,c=[],f=[];for(;c.length<n&&u.length>0;){const b=u.pop(),{score:y,boxIndex:S,suppressBeginIndex:v}=b;if(y<s)break;let x=!1;for(let T=c.length-1;T>=v;--T){const _=vA(t,S,c[T]);if(_>=r){x=!0;break}if(b.score=b.score*bA(r,p,_),b.score<=s)break}b.suppressBeginIndex=c.length,x||(b.score===y?(c.push(S),f.push(b.score)):b.score>s&&mA(u,b,Lh))}const h=c.length,m=n-h;i&&m>0&&(c.push(...new Array(m).fill(0)),f.push(...new Array(m).fill(0)));const w={selectedIndices:c};return o&&(w.selectedScores=f),l&&(w.validOutputs=h),w}function vA(t,e,n){const r=t.subarray(e*4,e*4+4),s=t.subarray(n*4,n*4+4),a=Math.min(r[0],r[2]),o=Math.min(r[1],r[3]),i=Math.max(r[0],r[2]),l=Math.max(r[1],r[3]),u=Math.min(s[0],s[2]),p=Math.min(s[1],s[3]),c=Math.max(s[0],s[2]),f=Math.max(s[1],s[3]),h=(i-a)*(l-o),m=(c-u)*(f-p);if(h<=0||m<=0)return 0;const w=Math.max(a,u),b=Math.max(o,p),y=Math.min(i,c),S=Math.min(l,f),v=Math.max(y-w,0)*Math.max(S-b,0);return v/(h+m-v)}function bA(t,e,n){const r=Math.exp(e*n*n);return n<=t?r:0}function Lh(t,e){return t.score-e.score||t.score===e.score&&e.boxIndex-t.boxIndex}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function kA(t,e,n,r=.5,s=Number.NEGATIVE_INFINITY){const a=g(t,"boxes","nonMaxSuppressionAsync"),o=g(e,"scores","nonMaxSuppressionAsync"),i=qs(a,o,n,r,s);n=i.maxOutputSize,r=i.iouThreshold,s=i.scoreThreshold;const l=await Promise.all([a.data(),o.data()]),u=l[0],p=l[1],{selectedIndices:c}=I2(u,p,n,r,s);return a!==t&&a.dispose(),o!==e&&o.dispose(),gt(c,"int32")}const SA=kA;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function NA(t,e,n,r=.5,s=Number.NEGATIVE_INFINITY,a=0){const o=g(t,"boxes","nonMaxSuppression"),i=g(e,"scores","nonMaxSuppression"),l=qs(o,i,n,r,s,a);n=l.maxOutputSize,r=l.iouThreshold,s=l.scoreThreshold,a=l.softNmsSigma;const u={boxes:o,scores:i},p={maxOutputSize:n,iouThreshold:r,scoreThreshold:s,softNmsSigma:a},c=E.runKernel(T1,u,p);return{selectedIndices:c[0],selectedScores:c[1]}}const EA=N({nonMaxSuppressionWithScore_:NA});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function xA(t,e,n,r=.5,s=Number.NEGATIVE_INFINITY,a=0){const o=g(t,"boxes","nonMaxSuppressionAsync"),i=g(e,"scores","nonMaxSuppressionAsync"),l=qs(o,i,n,r,s,a);n=l.maxOutputSize,r=l.iouThreshold,s=l.scoreThreshold,a=l.softNmsSigma;const u=await Promise.all([o.data(),i.data()]),p=u[0],c=u[1],{selectedIndices:f,selectedScores:h}=O2(p,c,n,r,s,a);return o!==t&&o.dispose(),i!==e&&i.dispose(),{selectedIndices:gt(f,"int32"),selectedScores:gt(h)}}const TA=xA;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _A(t,e,n,r=.5,s=Number.NEGATIVE_INFINITY,a=!1){const o=g(t,"boxes","nonMaxSuppression"),i=g(e,"scores","nonMaxSuppression"),l=qs(o,i,n,r,s,null),u=l.maxOutputSize,p=l.iouThreshold,c=l.scoreThreshold,f={boxes:o,scores:i},h={maxOutputSize:u,iouThreshold:p,scoreThreshold:c,padToMaxOutputSize:a},m=E.runKernel(x1,f,h);return{selectedIndices:m[0],validOutputs:m[1]}}const $A=N({nonMaxSuppressionPadded_:_A});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function IA(t,e,n,r=.5,s=Number.NEGATIVE_INFINITY,a=!1){const o=g(t,"boxes","nonMaxSuppressionAsync"),i=g(e,"scores","nonMaxSuppressionAsync"),l=qs(o,i,n,r,s,null),u=l.maxOutputSize,p=l.iouThreshold,c=l.scoreThreshold,[f,h]=await Promise.all([o.data(),i.data()]),{selectedIndices:m,validOutputs:w}=A2(f,h,u,p,c,a);return o!==t&&o.dispose(),i!==e&&i.dispose(),{selectedIndices:gt(m,"int32"),validOutputs:K(w,"int32")}}const AA=IA;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function OA(t,e,n=!1,r=!1){const s=g(t,"images","resizeBilinear");k(s.rank===3||s.rank===4,()=>`Error in resizeBilinear: x must be rank 3 or 4, but got rank ${s.rank}.`),k(e.length===2,()=>`Error in resizeBilinear: new shape must 2D, but got shape ${e}.`),k(r===!1||n===!1,()=>"Error in resizeBilinear: If halfPixelCenters is true, alignCorners must be false.");let a=s,o=!1;s.rank===3&&(o=!0,a=I(s,[1,s.shape[0],s.shape[1],s.shape[2]]));const i={images:a},l={alignCorners:n,halfPixelCenters:r,size:e},u=E.runKernel(U1,i,l);return o?I(u,[u.shape[1],u.shape[2],u.shape[3]]):u}const CA=N({resizeBilinear_:OA});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function DA(t,e,n=!1,r=!1){const s=g(t,"images","resizeNearestNeighbor");k(s.rank===3||s.rank===4,()=>`Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank ${s.rank}.`),k(e.length===2,()=>`Error in resizeNearestNeighbor: new shape must 2D, but got shape ${e}.`),k(s.dtype==="float32"||s.dtype==="int32",()=>"`images` must have `int32` or `float32` as dtype"),k(r===!1||n===!1,()=>"Error in resizeNearestNeighbor: If halfPixelCenters is true, alignCorners must be false.");let a=s,o=!1;s.rank===3&&(o=!0,a=I(s,[1,s.shape[0],s.shape[1],s.shape[2]]));const i={images:a},l={alignCorners:n,halfPixelCenters:r,size:e},u=E.runKernel(V1,i,l);return o?I(u,[u.shape[1],u.shape[2],u.shape[3]]):u}const PA=N({resizeNearestNeighbor_:DA});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function FA(t,e="binary",n=!1,r=.5){const s=g(t,"image","threshold"),a=.2989,o=.587,i=.114,l=s.shape[0]*s.shape[1];let u=R(gt([r]),255),p,c,f,h;if(k(s.rank===3,()=>`Error in threshold: image must be rank 3,but got rank ${s.rank}.`),k(s.shape[2]===3||s.shape[2]===1,()=>`Error in threshold: image color channel must be equal to 3 or 1but got ${s.shape[2]}.`),k(s.dtype==="int32"||s.dtype==="float32",()=>`Error in dtype: image dtype must be int32 or float32,but got dtype ${s.dtype}.`),k(e==="otsu"||e==="binary",()=>`Method must be binary or otsu, but was ${e}`),s.shape[2]===3){[p,c,f]=zs(s,[1,1,1],-1);const b=R(p,a),y=R(c,o),S=R(f,i);h=M(M(b,y),S)}else h=t;if(e==="otsu"){const b=sf(re(Lf(h),"int32"),Vt([]),256);u=RA(b,l)}const m=n?yl(h,u):yo(h,u);return re(R(m,255),"int32")}function RA(t,e){let n=gt([-1]),r=gt([0]),s=gt([0]),a,o,i,l,u,p;for(let c=0;c<t.size-1;c++){a=J(t,0,c+1),o=J(t,c+1),u=oe(ae(a),e),p=oe(ae(o),e);const f=ae(R(a,Rs(0,a.size)));i=oe(f,ae(a));const h=Hs(o.shape,a.size),m=M(Rs(0,o.size),h),w=R(o,m);l=oe(ae(w),ae(o));const b=H(i,l),y=H(i,l),S=R(u,p);s=R(R(S,b),y);const v=yo(s,r);r=gn(v,s,r),n=gn(v,gt([c]),n)}return n}const LA=N({threshold_:FA});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zA(t,e,n="nearest",r="constant",s=0,a){const o=g(t,"image","transform","float32"),i=g(e,"transforms","transform","float32");k(o.rank===4,()=>`Error in transform: image must be rank 4,but got rank ${o.rank}.`),k(i.rank===2&&(i.shape[0]===o.shape[0]||i.shape[0]===1)&&i.shape[1]===8,()=>"Error in transform: Input transform should be batch x 8 or 1 x 8"),k(a==null||a.length===2,()=>`Error in transform: outputShape must be [height, width] or null, but got ${a}.`);const l={image:o,transforms:i},u={interpolation:n,fillMode:r,fillValue:s,outputShape:a};return E.runKernel(xw,l,u)}const BA=N({transform_:zA});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jA(t,e,n){const r=g(t,"a","bandPart");k(r.rank>=2,()=>`bandPart(): Rank must be at least 2, got ${r.rank}.`);const s=r.shape,[a,o]=r.shape.slice(-2);let i,l;typeof e=="number"?(k(e%1===0,()=>`bandPart(): numLower must be an integer, got ${e}.`),k(e<=a,()=>`bandPart(): numLower (${e}) must not be greater than the number of rows (${a}).`),i=g(e<0?a:e,"numLower","bandPart")):(k(e.dtype==="int32",()=>"bandPart(): numLower's dtype must be an int32."),i=gn(Vi(e,0),a,Ya(e,a))),typeof n=="number"?(k(n%1===0,()=>`bandPart(): numUpper must be an integer, got ${n}.`),k(n<=o,()=>`bandPart(): numUpper (${n}) must not be greater than the number of columns (${o}).`),l=g(n<0?o:n,"numUpper","bandPart")):(k(n.dtype==="int32",()=>"bandPart(): numUpper's dtype must be an int32."),l=gn(Vi(n,0),o,Ya(n,o)));const u=I(Rs(0,a,1,"int32"),[-1,1]),p=Rs(0,o,1,"int32"),c=H(u,p),f=Qa(yl(c,i),df(c,Ut(l))),h=nr([a,o],r.dtype);return I(sn(cr(I(r,[-1,a,o])).map(m=>gn(f,m,h))),s)}const MA=N({bandPart_:jA});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function VA(t){let e;if(Array.isArray(t)){e=!1,k(t!=null&&t.length>0,()=>"Gram-Schmidt process: input must not be null, undefined, or empty");const s=t[0].shape[0];for(let a=1;a<t.length;++a)k(t[a].shape[0]===s,()=>`Gram-Schmidt: Non-unique lengths found in the input vectors: (${t[a].shape[0]} vs. ${s})`)}else e=!0,t=zs(t,t.shape[0],0).map(s=>bo(s,[0]));k(t.length<=t[0].shape[0],()=>`Gram-Schmidt: Number of vectors (${t.length}) exceeds number of dimensions (${t[0].shape[0]}).`);const n=[],r=t;for(let s=0;s<t.length;++s)n.push(E.tidy(()=>{let a=r[s];if(s>0)for(let o=0;o<s;++o){const i=R(ae(R(n[o],a)),n[o]);a=H(a,i)}return oe(a,go(a,"euclidean"))}));return e?sn(n,0):n}const UA=N({gramSchmidt_:VA});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function WA(t,e=!1){if(k(t.rank>=2,()=>`qr() requires input tensor to have a rank >= 2, but got rank ${t.rank}`),t.rank===2)return zh(t,e);{const n=t.shape.slice(0,t.shape.length-2).reduce((l,u)=>l*u),r=cr(I(t,[n,t.shape[t.shape.length-2],t.shape[t.shape.length-1]]),0),s=[],a=[];r.forEach(l=>{const[u,p]=zh(l,e);s.push(u),a.push(p)});const o=I(sn(s,0),t.shape),i=I(sn(a,0),t.shape);return[o,i]}}function zh(t,e=!1){return E.tidy(()=>{k(t.shape.length===2,()=>`qr2d() requires a 2D Tensor, but got a ${t.shape.length}D Tensor.`);const n=t.shape[0],r=t.shape[1];let s=cf(n),a=mn(t);const o=Ss([[1]],[1,1]);let i=mn(o);const l=n>=r?r:n;for(let u=0;u<l;++u){const p=a,c=i,f=s;[i,a,s]=E.tidy(()=>{const h=J(a,[u,u],[n-u,1]),m=go(h),w=J(a,[u,u],[1,1]),b=gn(yo(w,0),Ss([[-1]]),Ss([[1]])),y=H(w,R(b,m)),S=oe(h,y);S.shape[0]===1?i=mn(o):i=Le([o,J(S,[1,0],[S.shape[0]-1,S.shape[1]])],0);const v=Ut(oe(Z(b,y),m)),x=J(a,[u,0],[n-u,r]),T=R(v,i),_=Ja(i);if(u===0)a=H(x,Z(T,Z(_,x)));else{const L=H(x,Z(T,Z(_,x)));a=Le([J(a,[0,0],[u,r]),L],0)}const A=Ja(T),O=J(s,[0,u],[n,s.shape[1]-u]);if(u===0)s=H(O,Z(Z(O,i),A));else{const L=H(O,Z(Z(O,i),A));s=Le([J(s,[0,0],[n,u]),L],1)}return[i,a,s]}),Ge([p,c,f])}return!e&&n>r&&(s=J(s,[0,0],[n,r]),a=J(a,[0,0],[r,r])),[s,a]})}const HA=N({qr_:WA});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var He;(function(t){t[t.NONE=0]="NONE",t[t.MEAN=1]="MEAN",t[t.SUM=2]="SUM",t[t.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS"})(He||(He={}));function GA(t,e,n=He.SUM_BY_NONZERO_WEIGHTS){const r=g(t,"losses","computeWeightedLoss");let s=null;e!=null&&(s=g(e,"weights","computeWeightedLoss"));const a=s==null?r:R(r,s);if(n===He.NONE)return a;if(n===He.SUM)return ae(a);if(n===He.MEAN){if(s==null)return Xa(a);{const o=r.size/s.size,i=oe(ae(a),ae(s));return o>1?oe(i,K(o)):i}}if(n===He.SUM_BY_NONZERO_WEIGHTS){if(s==null)return oe(ae(a),K(r.size));{const o=R(s,zn(r.shape)),i=re(ae(Sf(o,K(0))),"float32");return oe(ae(a),i)}}throw Error(`Unknown reduction: ${n}`)}const En=N({computeWeightedLoss_:GA});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qA(t,e,n,r=He.SUM_BY_NONZERO_WEIGHTS){const s=g(t,"labels","absoluteDifference"),a=g(e,"predictions","absoluteDifference");let o=null;n!=null&&(o=g(n,"weights","absoluteDifference")),Ke(s.shape,a.shape,"Error in absoluteDifference: ");const i=rt(H(s,a));return En(i,o,r)}const KA=N({absoluteDifference_:qA});function QA(t,e,n,r,s=He.SUM_BY_NONZERO_WEIGHTS){const a=g(t,"labels","cosineDistance"),o=g(e,"predictions","cosineDistance");let i=null;r!=null&&(i=g(r,"weights","cosineDistance")),Ke(a.shape,o.shape,"Error in cosineDistance: ");const l=K(1),u=H(l,ae(R(a,o),n,!0));return En(u,i,s)}const XA=N({cosineDistance_:QA});function YA(t,e,n,r=He.SUM_BY_NONZERO_WEIGHTS){let s=g(t,"labels","hingeLoss");const a=g(e,"predictions","hingeLoss");let o=null;n!=null&&(o=g(n,"weights","hingeLoss")),Ke(s.shape,a.shape,"Error in hingeLoss: ");const i=K(1);s=H(R(K(2),s),i);const l=vo(H(i,R(s,a)));return En(l,o,r)}const ZA=N({hingeLoss_:YA});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function JA(t,e,n,r=1,s=He.SUM_BY_NONZERO_WEIGHTS){const a=g(t,"labels","huberLoss"),o=g(e,"predictions","huberLoss");let i=null;n!=null&&(i=g(n,"weights","huberLoss")),Ke(a.shape,o.shape,"Error in huberLoss: ");const l=K(r),u=rt(H(o,a)),p=Ya(u,l),c=H(u,p),f=M(R(K(.5),It(p)),R(l,c));return En(f,i,s)}const eO=N({huberLoss_:JA});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tO(t,e,n,r=1e-7,s=He.SUM_BY_NONZERO_WEIGHTS){const a=g(t,"labels","logLoss"),o=g(e,"predictions","logLoss");let i=null;n!=null&&(i=g(n,"weights","logLoss")),Ke(a.shape,o.shape,"Error in logLoss: ");const l=K(1),u=K(r),p=Ut(R(a,Fs(M(o,u)))),c=R(H(l,a),Fs(M(H(l,o),u))),f=H(p,c);return En(f,i,s)}const nO=N({logLoss_:tO});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function rO(t,e,n,r=He.SUM_BY_NONZERO_WEIGHTS){const s=g(t,"labels","meanSquaredError"),a=g(e,"predictions","meanSquaredError");let o=null;n!=null&&(o=g(n,"weights","meanSquaredError")),Ke(s.shape,a.shape,"Error in meanSquaredError: ");const i=jf(s,a);return En(i,o,r)}const sO=N({meanSquaredError_:rO});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function aO(t,e){const n=g(t,"labels","sigmoidCrossEntropyWithLogits"),r=g(e,"logits","sigmoidCrossEntropyWithLogits");Ke(n.shape,r.shape,"Error in sigmoidCrossEntropyWithLogits: ");const s=vo(r),a=R(r,n),o=mf(tr(Ut(rt(r))));return M(H(s,a),o)}function oO(t,e,n,r=0,s=He.SUM_BY_NONZERO_WEIGHTS){let a=g(t,"multiClassLabels","sigmoidCrossEntropy");const o=g(e,"logits","sigmoidCrossEntropy");let i=null;if(n!=null&&(i=g(n,"weights","sigmoidCrossEntropy")),Ke(a.shape,o.shape,"Error in sigmoidCrossEntropy: "),r>0){const u=K(r),p=K(1),c=K(.5);a=M(R(a,H(p,u)),R(c,u))}const l=aO(a,o);return En(l,i,s)}const iO=N({sigmoidCrossEntropy_:oO});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function lO(t,e,n=-1){if(n===-1&&(n=e.rank-1),n!==e.rank-1)throw Error(`Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank ${e.rank} and dim was ${n}`);return rn((s,a,o)=>{const l=yf(a,[n],!0),u=H(re(a,"float32"),l);o([s,u]);const p=Ut(R(u,s));return{value:ae(p,[n]),gradFunc:(h,m)=>{const[w,b]=m,y=mo(h.shape,[n]);return[R(I(h,y),H(re(w,"float32"),tr(b))),R(I(h,y),H(tr(b),re(w,"float32")))]}}})(t,e)}function uO(t,e,n,r=0,s=He.SUM_BY_NONZERO_WEIGHTS){let a=g(t,"onehotLabels","softmaxCrossEntropy");const o=g(e,"logits","softmaxCrossEntropy");let i=null;if(n!=null&&(i=g(n,"weights","softmaxCrossEntropy")),Ke(a.shape,o.shape,"Error in softmaxCrossEntropy: "),r>0){const u=K(r),p=K(1),c=K(a.shape[1]);a=M(R(a,H(p,u)),oe(u,c))}const l=lO(a,o);return En(l,i,s)}const cO=N({softmaxCrossEntropy_:uO});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pO(t,e,n,r){const s=g(t,"indices","sparseFillEmptyRows","int32"),a=g(e,"values","sparseFillEmptyRows"),o=g(n,"denseShape","sparseFillEmptyRows","int32"),i=g(r,"defaultValue","sparseFillEmptyRows",a.dtype);if(s.rank!==2)throw new Error(`Indices should be Tensor2D but received shape
        ${s.shape}`);if(a.rank!==1)throw new Error(`Values should be Tensor1D but received shape ${a.shape}`);if(o.rank!==1)throw new Error(`Dense shape should be Tensor1D but received shape ${o.shape}`);if(i.rank!==0)throw new Error(`Default value should be a scalar but received shape ${i.shape}`);const l={indices:s,values:a,denseShape:o,defaultValue:i},u=E.runKernel(cw,l);return{outputIndices:u[0],outputValues:u[1],emptyRowIndicator:u[2],reverseIndexMap:u[3]}}const fO=N({sparseFillEmptyRows_:pO});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dO(t,e,n){const r=g(t,"inputIndices","sparseReshape","int32"),s=g(e,"inputShape","sparseReshape","int32"),a=g(n,"newShape","sparseReshape","int32");if(r.rank!==2)throw new Error(`Input indices should be Tensor2D but received shape
        ${r.shape}`);if(s.rank!==1)throw new Error(`Input shape should be Tensor1D but received shape ${s.shape}`);if(a.rank!==1)throw new Error(`New shape should be Tensor1D but received shape ${a.shape}`);const o={inputIndices:r,inputShape:s,newShape:a},i=E.runKernel(pw,o);return{outputIndices:i[0],outputShape:i[1]}}const hO=N({sparseReshape_:dO});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function mO(t,e,n){const r=g(t,"data","sparseSegmentMean"),s=g(e,"indices","sparseSegmentMean","int32"),a=g(n,"segmentIds","sparseSegmentMean","int32");if(r.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(s.rank!==1)throw new Error(`Indices should be Tensor1D but received shape
          ${s.shape}`);if(a.rank!==1)throw new Error(`Segment ids should be Tensor1D but received shape
          ${a.shape}`);const o={data:r,indices:s,segmentIds:a};return E.runKernel(fw,o)}const gO=N({sparseSegmentMean_:mO});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yO(t,e,n){const r=g(t,"data","sparseSegmentSum"),s=g(e,"indices","sparseSegmentSum","int32"),a=g(n,"segmentIds","sparseSegmentSum","int32");if(r.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(s.rank!==1)throw new Error(`Indices should be Tensor1D but received shape
         ${s.shape}`);if(a.rank!==1)throw new Error(`Segment ids should be Tensor1D but received shape
         ${a.shape}`);const o={data:r,indices:s,segmentIds:a};return E.runKernel(dw,o)}const wO=N({sparseSegmentSum_:yO});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vO(t,e,n,r,s,a,o,i){const l=g(t,"data","stringNGrams","string");if(l.dtype!=="string")throw new Error("Data must be of datatype string");if(l.shape.length!==1)throw new Error(`Data must be a vector, saw: ${l.shape}`);const u=g(e,"dataSplits","stringNGrams");if(u.dtype!=="int32")throw new Error("Data splits must be of datatype int32");const p={separator:n,nGramWidths:r,leftPad:s,rightPad:a,padWidth:o,preserveShortSequences:i},c={data:l,dataSplits:u},f=E.runKernel(ww,c,p);return{nGrams:f[0],nGramsSplits:f[1]}}const bO=N({stringNGrams_:vO});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kO(t,e,n=!0){const r=g(t,"input","stringSplit","string"),s=g(e,"delimiter","stringSplit","string");if(r.rank!==1)throw new Error(`Input should be Tensor1D but received shape ${r.shape}`);if(s.rank!==0)throw new Error(`Delimiter should be a scalar but received shape ${s.shape}`);const a={skipEmpty:n},o={input:r,delimiter:s},i=E.runKernel(vw,o,a);return{indices:i[0],values:i[1],shape:i[2]}}const SO=N({stringSplit_:kO});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function NO(t,e){const n=g(t,"input","stringToHashBucketFast","string"),r={numBuckets:e};if(e<=0)throw new Error("Number of buckets must be at least 1");const s={input:n};return E.runKernel(bw,s,r)}const EO=N({stringToHashBucketFast_:NO});/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xO(t,e,n,r=!0){const s=g(t,"input","staticRegexReplace","string"),a={pattern:e,rewrite:n,replaceGlobal:r};return E.runKernel(gw,{x:s},a)}const TO=N({staticRegexReplace_:xO});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const C2={fft:kl,ifft:Za,rfft:Sl,irfft:Bf},D2={hammingWindow:Z4,hannWindow:_2,frame:$2,stft:nA},qf={flipLeftRight:oA,grayscaleToRGB:lA,resizeNearestNeighbor:PA,resizeBilinear:CA,rgbToGrayscale:cA,rotateWithOffset:fA,cropAndResize:sA,nonMaxSuppression:hA,nonMaxSuppressionAsync:SA,nonMaxSuppressionWithScore:EA,nonMaxSuppressionWithScoreAsync:TA,nonMaxSuppressionPadded:$A,nonMaxSuppressionPaddedAsync:AA,threshold:LA,transform:BA},P2={bandPart:MA,gramSchmidt:UA,qr:HA},F2={absoluteDifference:KA,computeWeightedLoss:En,cosineDistance:XA,hingeLoss:ZA,huberLoss:eO,logLoss:nO,meanSquaredError:sO,sigmoidCrossEntropy:iO,softmaxCrossEntropy:cO},R2={sparseFillEmptyRows:fO,sparseReshape:hO,sparseSegmentMean:gO,sparseSegmentSum:wO},L2={stringNGrams:bO,stringSplit:SO,stringToHashBucketFast:EO,staticRegexReplace:TO};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const _O=new Map,xc=new Map;class z2{getClassName(){return this.constructor.className}static fromConfig(e,n){return new e(n)}}class Cn{constructor(){this.classNameMap={}}static getMap(){return Cn.instance==null&&(Cn.instance=new Cn),Cn.instance}static register(e){Cn.getMap().classNameMap[e.className]=[e,e.fromConfig]}}function B2(t,e,n){k(t.className!=null,()=>"Class being registered does not have the static className property defined."),k(typeof t.className=="string",()=>"className is required to be a string, but got type "+typeof t.className),k(t.className.length>0,()=>"Class being registered has an empty-string as its className, which is disallowed."),typeof e>"u"&&(e="Custom"),typeof n>"u"&&(n=t.className);const r=n,s=e+">"+r;return Cn.register(t),_O.set(s,t),xc.set(t,s),t}function $O(t){return xc.has(t)?xc.get(t):t.className}const IO=Object.freeze(Object.defineProperty({__proto__:null,Serializable:z2,SerializationMap:Cn,getRegisteredName:$O,registerClass:B2},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class pr extends z2{minimize(e,n=!1,r){const{value:s,grads:a}=this.computeGradients(e,r);if(r!=null){const o=r.map(i=>({name:i.name,tensor:a[i.name]}));this.applyGradients(o)}else this.applyGradients(a);return Ge(a),n?s:(s.dispose(),null)}get iterations(){return this.iterations_==null&&(this.iterations_=0),this.iterations_}incrementIterations(){this.iterations_=this.iterations+1}computeGradients(e,n){return fb(e,n)}dispose(){this.iterations_!=null&&Ge(this.iterations_)}async saveIterations(){return this.iterations_==null&&(this.iterations_=0),{name:"iter",tensor:K(this.iterations_,"int32")}}async getWeights(){throw new Error("getWeights() is not implemented for this optimizer yet.")}async setWeights(e){throw new Error(`setWeights() is not implemented for this optimizer class ${this.getClassName()}`)}async extractIterations(e){return this.iterations_=(await e[0].tensor.data())[0],e.slice(1)}}Object.defineProperty(pr,Symbol.hasInstance,{value:t=>t.minimize!=null&&t.computeGradients!=null&&t.applyGradients!=null});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Kf extends pr{static get className(){return"Adadelta"}constructor(e,n,r=null){super(),this.learningRate=e,this.rho=n,this.epsilon=r,this.accumulatedGrads=[],this.accumulatedUpdates=[],r==null&&(this.epsilon=E.backend.epsilon())}applyGradients(e){(Array.isArray(e)?e.map(r=>r.name):Object.keys(e)).forEach((r,s)=>{const a=E.registeredVariables[r],o=!1;this.accumulatedGrads[s]==null&&(this.accumulatedGrads[s]={originalName:`${r}/accum_grad`,variable:Y(()=>ct(a).variable(o))}),this.accumulatedUpdates[s]==null&&(this.accumulatedUpdates[s]={originalName:`${r}/accum_var`,variable:Y(()=>ct(a).variable(o))});const i=Array.isArray(e)?e[s].tensor:e[r];if(i==null)return;const l=this.accumulatedGrads[s].variable,u=this.accumulatedUpdates[s].variable;Y(()=>{const p=M(R(l,this.rho),R(It(i),1-this.rho)),c=R(oe(nn(M(u,this.epsilon)),nn(M(l,this.epsilon))),i),f=M(R(u,this.rho),R(It(c),1-this.rho));l.assign(p),u.assign(f);const h=M(R(c,-this.learningRate),a);a.assign(h)})}),this.incrementIterations()}dispose(){this.accumulatedUpdates!=null&&(Ge(this.accumulatedGrads.map(e=>e.variable)),Ge(this.accumulatedUpdates.map(e=>e.variable)))}async getWeights(){const e=[...this.accumulatedGrads,...this.accumulatedUpdates];return[await this.saveIterations()].concat(e.map(n=>({name:n.originalName,tensor:n.variable})))}async setWeights(e){e=await this.extractIterations(e);const n=e.length/2,r=!1;this.accumulatedGrads=e.slice(0,n).map(s=>({originalName:s.name,variable:s.tensor.variable(r)})),this.accumulatedUpdates=e.slice(n,n*2).map(s=>({originalName:s.name,variable:s.tensor.variable(r)}))}getConfig(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}}static fromConfig(e,n){return new e(n.learningRate,n.rho,n.epsilon)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Qf extends pr{static get className(){return"Adagrad"}constructor(e,n=.1){super(),this.learningRate=e,this.initialAccumulatorValue=n,this.accumulatedGrads=[]}applyGradients(e){(Array.isArray(e)?e.map(r=>r.name):Object.keys(e)).forEach((r,s)=>{const a=E.registeredVariables[r];this.accumulatedGrads[s]==null&&(this.accumulatedGrads[s]={originalName:`${r}/accumulator`,variable:Y(()=>Hs(a.shape,this.initialAccumulatorValue).variable(!1))});const o=Array.isArray(e)?e[s].tensor:e[r];if(o==null)return;const i=this.accumulatedGrads[s].variable;Y(()=>{const l=M(i,It(o));i.assign(l);const u=M(R(oe(o,nn(M(l,E.backend.epsilon()))),-this.learningRate),a);a.assign(u)})}),this.incrementIterations()}dispose(){this.accumulatedGrads!=null&&Ge(this.accumulatedGrads.map(e=>e.variable))}async getWeights(){return[await this.saveIterations()].concat(this.accumulatedGrads.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(e){e=await this.extractIterations(e);const n=!1;this.accumulatedGrads=e.map(r=>({originalName:r.name,variable:r.tensor.variable(n)}))}getConfig(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}}static fromConfig(e,n){return new e(n.learningRate,n.initialAccumulatorValue)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Xf extends pr{static get className(){return"Adam"}constructor(e,n,r,s=null){super(),this.learningRate=e,this.beta1=n,this.beta2=r,this.epsilon=s,this.accumulatedFirstMoment=[],this.accumulatedSecondMoment=[],Y(()=>{this.accBeta1=K(n).variable(),this.accBeta2=K(r).variable()}),s==null&&(this.epsilon=E.backend.epsilon())}applyGradients(e){const n=Array.isArray(e)?e.map(r=>r.name):Object.keys(e);Y(()=>{const r=H(1,this.accBeta1),s=H(1,this.accBeta2);n.forEach((a,o)=>{const i=E.registeredVariables[a],l=!1;this.accumulatedFirstMoment[o]==null&&(this.accumulatedFirstMoment[o]={originalName:`${a}/m`,variable:Y(()=>ct(i).variable(l))}),this.accumulatedSecondMoment[o]==null&&(this.accumulatedSecondMoment[o]={originalName:`${a}/v`,variable:Y(()=>ct(i).variable(l))});const u=Array.isArray(e)?e[o].tensor:e[a];if(u==null)return;const p=this.accumulatedFirstMoment[o].variable,c=this.accumulatedSecondMoment[o].variable,f=M(R(p,this.beta1),R(u,1-this.beta1)),h=M(R(c,this.beta2),R(It(u),1-this.beta2)),m=oe(f,r),w=oe(h,s);p.assign(f),c.assign(h);const b=M(R(oe(m,M(nn(w),this.epsilon)),-this.learningRate),i);i.assign(b)}),this.accBeta1.assign(R(this.accBeta1,this.beta1)),this.accBeta2.assign(R(this.accBeta2,this.beta2))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.accBeta2.dispose(),this.accumulatedFirstMoment!=null&&Ge(this.accumulatedFirstMoment.map(e=>e.variable)),this.accumulatedSecondMoment!=null&&Ge(this.accumulatedSecondMoment.map(e=>e.variable))}async getWeights(){const e=[...this.accumulatedFirstMoment,...this.accumulatedSecondMoment];return[await this.saveIterations()].concat(e.map(n=>({name:n.originalName,tensor:n.variable})))}async setWeights(e){e=await this.extractIterations(e),Y(()=>{this.accBeta1.assign(Ps(this.beta1,this.iterations_+1)),this.accBeta2.assign(Ps(this.beta2,this.iterations_+1))});const n=e.length/2,r=!1;this.accumulatedFirstMoment=e.slice(0,n).map(s=>({originalName:s.name,variable:s.tensor.variable(r)})),this.accumulatedSecondMoment=e.slice(n,n*2).map(s=>({originalName:s.name,variable:s.tensor.variable(r)}))}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}}static fromConfig(e,n){return new e(n.learningRate,n.beta1,n.beta2,n.epsilon)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Yf extends pr{static get className(){return"Adamax"}constructor(e,n,r,s=null,a=0){super(),this.learningRate=e,this.beta1=n,this.beta2=r,this.epsilon=s,this.decay=a,this.accumulatedFirstMoment=[],this.accumulatedWeightedInfNorm=[],Y(()=>{this.iteration=K(0).variable(),this.accBeta1=K(n).variable()}),s==null&&(this.epsilon=E.backend.epsilon())}applyGradients(e){const n=Array.isArray(e)?e.map(r=>r.name):Object.keys(e);Y(()=>{const r=H(1,this.accBeta1),s=oe(-this.learningRate,M(R(this.iteration,this.decay),1));n.forEach((a,o)=>{const i=E.registeredVariables[a],l=!1;this.accumulatedFirstMoment[o]==null&&(this.accumulatedFirstMoment[o]={originalName:`${a}/m`,variable:ct(i).variable(l)}),this.accumulatedWeightedInfNorm[o]==null&&(this.accumulatedWeightedInfNorm[o]={originalName:`${a}/v`,variable:ct(i).variable(l)});const u=Array.isArray(e)?e[o].tensor:e[a];if(u==null)return;const p=this.accumulatedFirstMoment[o].variable,c=this.accumulatedWeightedInfNorm[o].variable,f=M(R(p,this.beta1),R(u,1-this.beta1)),h=R(c,this.beta2),m=rt(u),w=kf(h,m);p.assign(f),c.assign(w);const b=M(R(oe(s,r),oe(f,M(w,this.epsilon))),i);i.assign(b)}),this.iteration.assign(M(this.iteration,1)),this.accBeta1.assign(R(this.accBeta1,this.beta1))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.iteration.dispose(),this.accumulatedFirstMoment!=null&&Ge(this.accumulatedFirstMoment.map(e=>e.variable)),this.accumulatedWeightedInfNorm!=null&&Ge(this.accumulatedWeightedInfNorm.map(e=>e.variable))}async getWeights(){throw new Error("getWeights() is not implemented for Adamax yet.")}async setWeights(e){throw new Error("setWeights() is not implemented for Adamax yet.")}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}}static fromConfig(e,n){return new e(n.learningRate,n.beta1,n.beta2,n.epsilon,n.decay)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Il extends pr{static get className(){return"SGD"}constructor(e){super(),this.learningRate=e,this.setLearningRate(e)}applyGradients(e){(Array.isArray(e)?e.map(r=>r.name):Object.keys(e)).forEach((r,s)=>{const a=Array.isArray(e)?e[s].tensor:e[r];if(a==null)return;const o=E.registeredVariables[r];Y(()=>{const i=M(R(this.c,a),o);o.assign(i)})}),this.incrementIterations()}setLearningRate(e){this.learningRate=e,this.c!=null&&this.c.dispose(),this.c=zt(K(-e))}dispose(){this.c.dispose()}async getWeights(){return[await this.saveIterations()]}async setWeights(e){if(e=await this.extractIterations(e),e.length!==0)throw new Error("SGD optimizer does not have settable weights.")}getConfig(){return{learningRate:this.learningRate}}static fromConfig(e,n){return new e(n.learningRate)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Zf extends Il{static get className(){return"Momentum"}constructor(e,n,r=!1){super(e),this.learningRate=e,this.momentum=n,this.useNesterov=r,this.accumulations=[],this.m=K(this.momentum)}applyGradients(e){(Array.isArray(e)?e.map(r=>r.name):Object.keys(e)).forEach((r,s)=>{const a=E.registeredVariables[r];this.accumulations[s]==null&&(this.accumulations[s]={originalName:`${r}/momentum`,variable:Y(()=>ct(a).variable(!1))});const o=this.accumulations[s].variable,i=Array.isArray(e)?e[s].tensor:e[r];i!=null&&Y(()=>{let l;const u=M(R(this.m,o),i);this.useNesterov?l=M(R(this.c,M(i,R(u,this.m))),a):l=M(R(this.c,u),a),o.assign(u),a.assign(l)})}),this.incrementIterations()}dispose(){this.m.dispose(),this.accumulations!=null&&Ge(this.accumulations.map(e=>e.variable))}setMomentum(e){this.momentum=e}async getWeights(){return[await this.saveIterations()].concat(this.accumulations.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(e){e=await this.extractIterations(e);const n=!1;this.accumulations=e.map(r=>({originalName:r.name,variable:r.tensor.variable(n)}))}getConfig(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}}static fromConfig(e,n){return new e(n.learningRate,n.momentum,n.useNesterov)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Jf extends pr{static get className(){return"RMSProp"}constructor(e,n=.9,r=0,s=null,a=!1){if(super(),this.learningRate=e,this.decay=n,this.momentum=r,this.epsilon=s,this.accumulatedMeanSquares=[],this.accumulatedMoments=[],this.accumulatedMeanGrads=[],this.centered=a,s==null&&(this.epsilon=E.backend.epsilon()),e==null)throw new Error("learningRate for RMSPropOptimizer must be defined.")}applyGradients(e){(Array.isArray(e)?e.map(r=>r.name):Object.keys(e)).forEach((r,s)=>{const a=E.registeredVariables[r],o=!1;this.accumulatedMeanSquares[s]==null&&(this.accumulatedMeanSquares[s]={originalName:`${r}/rms`,variable:Y(()=>ct(a).variable(o))}),this.accumulatedMoments[s]==null&&(this.accumulatedMoments[s]={originalName:`${r}/momentum`,variable:Y(()=>ct(a).variable(o))}),this.accumulatedMeanGrads[s]==null&&this.centered&&(this.accumulatedMeanGrads[s]={originalName:`${r}/mg`,variable:Y(()=>ct(a).variable(o))});const i=Array.isArray(e)?e[s].tensor:e[r];if(i==null)return;const l=this.accumulatedMeanSquares[s].variable,u=this.accumulatedMoments[s].variable;Y(()=>{const p=M(R(l,this.decay),R(It(i),1-this.decay));if(this.centered){const c=this.accumulatedMeanGrads[s].variable,f=M(R(c,this.decay),R(i,1-this.decay)),h=oe(R(i,this.learningRate),nn(H(p,M(It(f),this.epsilon)))),m=M(R(u,this.momentum),h);l.assign(p),c.assign(f),u.assign(m);const w=H(a,m);a.assign(w)}else{const c=M(R(l,this.decay),R(It(i),1-this.decay)),f=M(R(u,this.momentum),oe(R(i,this.learningRate),nn(M(c,this.epsilon))));l.assign(c),u.assign(f);const h=H(a,f);a.assign(h)}})}),this.incrementIterations()}dispose(){this.accumulatedMeanSquares!=null&&Ge(this.accumulatedMeanSquares.map(e=>e.variable)),this.accumulatedMeanGrads!=null&&this.centered&&Ge(this.accumulatedMeanGrads.map(e=>e.variable)),this.accumulatedMoments!=null&&Ge(this.accumulatedMoments.map(e=>e.variable))}async getWeights(){const e=[...this.accumulatedMeanSquares,...this.accumulatedMoments];return this.centered&&e.push(...this.accumulatedMeanGrads),[await this.saveIterations()].concat(e.map(n=>({name:n.originalName,tensor:n.variable})))}async setWeights(e){e=await this.extractIterations(e);const n=this.centered?e.length/3:e.length/2,r=!1;this.accumulatedMeanSquares=e.slice(0,n).map(s=>({originalName:s.name,variable:s.tensor.variable(r)})),this.accumulatedMoments=e.slice(n,n*2).map(s=>({originalName:s.name,variable:s.tensor.variable(r)})),this.centered&&(this.accumulatedMeanGrads=e.slice(n*2,n*3).map(s=>({originalName:s.name,variable:s.tensor.variable(r)})))}getConfig(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}}static fromConfig(e,n){return new e(n.learningRate,n.decay,n.momentum,n.epsilon,n.centered)}}/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const AO=[Kf,Qf,Xf,Yf,Zf,Jf,Il];function OO(){for(const t of AO)B2(t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const CO="model",DO=".json",PO=".weights.bin";function Bh(t){return new Promise(e=>setTimeout(e)).then(t)}class jr{constructor(e){if(!V().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");e.startsWith(jr.URL_SCHEME)&&(e=e.slice(jr.URL_SCHEME.length)),(e==null||e.length===0)&&(e=CO),this.modelJsonFileName=e+DO,this.weightDataFileName=e+PO}async save(e){if(typeof document>"u")throw new Error("Browser downloads are not supported in this environment since `document` is not present");const n=qt.join(e.weightData),r=window.URL.createObjectURL(new Blob([n],{type:"application/octet-stream"}));if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");{const s=[{paths:["./"+this.weightDataFileName],weights:e.weightSpecs}],a=nv(e,s),o=window.URL.createObjectURL(new Blob([JSON.stringify(a)],{type:"application/json"})),i=this.modelJsonAnchor==null?document.createElement("a"):this.modelJsonAnchor;if(i.download=this.modelJsonFileName,i.href=o,await Bh(()=>i.dispatchEvent(new MouseEvent("click"))),e.weightData!=null){const l=this.weightDataAnchor==null?document.createElement("a"):this.weightDataAnchor;l.download=this.weightDataFileName,l.href=r,await Bh(()=>l.dispatchEvent(new MouseEvent("click")))}return{modelArtifactsInfo:co(e)}}}}jr.URL_SCHEME="downloads://";class FO{constructor(e){if(e==null||e.length<1)throw new Error(`When calling browserFiles, at least 1 file is required, but received ${e}`);this.jsonFile=e[0],this.weightsFiles=e.slice(1)}async load(){return new Promise((e,n)=>{const r=new FileReader;r.onload=s=>{const a=JSON.parse(s.target.result),o=a.modelTopology;if(o==null){n(new Error(`modelTopology field is missing from file ${this.jsonFile.name}`));return}if(a.weightsManifest==null){n(new Error(`weightManifest field is missing from file ${this.jsonFile.name}`));return}if(this.weightsFiles.length===0){e({modelTopology:o});return}const l=Zp(a,u=>this.loadWeights(u));e(l)},r.onerror=s=>n(`Failed to read model topology and weights manifest JSON from file '${this.jsonFile.name}'. BrowserFiles supports loading Keras-style tf.Model artifacts only.`),r.readAsText(this.jsonFile)})}loadWeights(e){const n=[],r=[];for(const o of e)n.push(...o.weights),r.push(...o.paths);const s=this.checkManifestAndWeightFiles(e),a=r.map(o=>this.loadWeightsFile(o,s[o]));return Promise.all(a).then(o=>[n,o])}loadWeightsFile(e,n){return new Promise((r,s)=>{const a=new FileReader;a.onload=o=>{const i=o.target.result;r(i)},a.onerror=o=>s(`Failed to weights data from file of path '${e}'.`),a.readAsArrayBuffer(n)})}checkManifestAndWeightFiles(e){const n=[],r=this.weightsFiles.map(a=>Rh(a.name)),s={};for(const a of e)a.paths.forEach(o=>{const i=Rh(o);if(n.indexOf(i)!==-1)throw new Error(`Duplicate file basename found in weights manifest: '${i}'`);if(n.push(i),r.indexOf(i)===-1)throw new Error(`Weight file with basename '${i}' is not provided.`);s[o]=this.weightsFiles[r.indexOf(i)]});if(n.length!==this.weightsFiles.length)throw new Error(`Mismatch in the number of files in weights manifest (${n.length}) and the number of weight files provided (${this.weightsFiles.length}).`);return s}}const RO=t=>V().getBool("IS_BROWSER")&&!Array.isArray(t)&&t.startsWith(jr.URL_SCHEME)?LO(t.slice(jr.URL_SCHEME.length)):null;fe.registerSaveRouter(RO);function LO(t="model"){return new jr(t)}function zO(t){return new FO(t)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jh(t,e,n,r){o(t),n=n??0,r=r??1,i(n,r);let s=0;const a=l=>(l.then(u=>{const p=n+ ++s/t.length*(r-n);return e(p),u}),l);function o(l){k(l!=null&&Array.isArray(l)&&l.length>0,()=>"promises must be a none empty array")}function i(l,u){k(l>=0&&l<=1,()=>`Progress fraction must be in range [0, 1], but got startFraction ${l}`),k(u>=0&&u<=1,()=>`Progress fraction must be in range [0, 1], but got endFraction ${u}`),k(u>=l,()=>`startFraction must be no more than endFraction, but got startFraction ${l} and endFraction ${u}`)}return Promise.all(t.map(a))}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function j2(t,e){e==null&&(e={});const n=e.fetchFunc==null?V().platform.fetch:e.fetchFunc,r=t.map(c=>n(c,e.requestInit,{isBinary:!0})),i=(e.onProgress==null?await Promise.all(r):await jh(r,e.onProgress,0,.5)).map(c=>c.arrayBuffer());return e.onProgress==null?await Promise.all(i):await jh(i,e.onProgress,.5,1)}function BO(t,e){var n;const r=e.fetchFunc==null?V().platform.fetch:e.fetchFunc;let s=0,a;return(n=e.onProgress)===null||n===void 0||n.call(e,0),new ReadableStream({pull:async o=>{for(var i;s<t.length;){a||(a=(await r(t[s],e.requestInit,{isBinary:!0})).body.getReader());const{done:l,value:u}=await a.read();if(l){s++,a=void 0,(i=e.onProgress)===null||i===void 0||i.call(e,s/t.length);continue}o.enqueue(u);return}o.close()}})}async function jO(t,e="",n,r){return M2(o=>j2(o,{requestInit:r}))(t,e,n)}function M2(t){return async(e,n="",r)=>{const s=e.map(()=>!1),a={},o=r!=null?r.map(()=>!1):[],i=[];if(e.forEach((h,m)=>{let w=0;h.weights.forEach(b=>{const y="quantization"in b?b.quantization.dtype:b.dtype,S=Rr[y]*te(b.shape),v=()=>{s[m]=!0,a[m]==null&&(a[m]=[]),a[m].push({manifestEntry:b,groupOffset:w,sizeBytes:S})};r!=null?r.forEach((x,T)=>{x===b.name&&(v(),o[T]=!0)}):v(),i.push(b.name),w+=S})}),!o.every(h=>h)){const h=r.filter((m,w)=>!o[w]);throw new Error(`Could not find weights in manifest with names: ${h.join(", ")}. 
Manifest JSON has weights with names: ${i.join(", ")}.`)}const l=s.reduce((h,m,w)=>(m&&h.push(w),h),[]),u=[];l.forEach(h=>{e[h].paths.forEach(m=>{const w=n+(n.endsWith("/")?"":"/")+m;u.push(w)})});const p=await t(u),c={};let f=0;return l.forEach(h=>{const m=e[h].paths.length,w=new qt(p.slice(f,f+m));a[h].forEach(y=>{const S=w.slice(y.groupOffset,y.groupOffset+y.sizeBytes),v=Jw(S,[y.manifestEntry]);for(const x in v)c[x]=v[x]}),f+=m}),c}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const MO="application/octet-stream",VO="application/json";class ed{constructor(e,n){if(this.DEFAULT_METHOD="POST",n==null&&(n={}),this.weightPathPrefix=n.weightPathPrefix,this.weightUrlConverter=n.weightUrlConverter,n.fetchFunc!=null?(k(typeof n.fetchFunc=="function",()=>"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"),this.fetch=n.fetchFunc):this.fetch=V().platform.fetch,k(e!=null&&e.length>0,()=>"URL path for http must not be null, undefined or empty."),Array.isArray(e)&&k(e.length===2,()=>`URL paths for http must have a length of 2, (actual length is ${e.length}).`),this.path=e,n.requestInit!=null&&n.requestInit.body!=null)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=n.requestInit||{},this.loadOptions=n}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");const n=Object.assign({method:this.DEFAULT_METHOD},this.requestInit);n.body=new FormData;const r=[{paths:["./model.weights.bin"],weights:e.weightSpecs}],s=nv(e,r);if(n.body.append("model.json",new Blob([JSON.stringify(s)],{type:VO}),"model.json"),e.weightData!=null){const o=qt.join(e.weightData);n.body.append("model.weights.bin",new Blob([o],{type:MO}),"model.weights.bin")}const a=await this.fetch(this.path,n);if(a.ok)return{modelArtifactsInfo:co(e),responses:[a]};throw new Error(`BrowserHTTPRequest.save() failed due to HTTP response status ${a.status}.`)}async loadModelJSON(){const e=await this.fetch(this.path,this.requestInit);if(!e.ok)throw new Error(`Request to ${this.path} failed with status code ${e.status}. Please verify this URL points to the model JSON of the model to load.`);let n;try{n=await e.json()}catch{let o=`Failed to parse model JSON of response from ${this.path}.`;throw this.path.endsWith(".pb")?o+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":o+=" Please make sure the server is serving valid JSON for this request.",new Error(o)}const r=n.modelTopology,s=n.weightsManifest;if(r==null&&s==null)throw new Error(`The JSON from HTTP path ${this.path} contains neither model topology or manifest for weights.`);return n}async load(){if(this.loadOptions.streamWeights)return this.loadStream();const e=await this.loadModelJSON();return Zp(e,n=>this.loadWeights(n))}async loadStream(){const e=await this.loadModelJSON(),n=await this.getWeightUrls(e.weightsManifest),r=vc(e.weightsManifest),s=()=>BO(n,this.loadOptions);return Object.assign(Object.assign({},e),{weightSpecs:r,getWeightStream:s})}async getWeightUrls(e){const n=Array.isArray(this.path)?this.path[1]:this.path,[r,s]=UO(n),a=this.weightPathPrefix||r,o=[],i=[];for(const l of e)for(const u of l.paths)this.weightUrlConverter!=null?i.push(this.weightUrlConverter(u)):o.push(a+u+s);return this.weightUrlConverter&&o.push(...await Promise.all(i)),o}async loadWeights(e){const n=await this.getWeightUrls(e),r=vc(e),s=await j2(n,this.loadOptions);return[r,s]}}ed.URL_SCHEME_REGEX=/^https?:\/\//;function UO(t){const e=t.lastIndexOf("/"),n=t.lastIndexOf("?"),r=t.substring(0,e),s=n>e?t.substring(n):"";return[r+"/",s]}function Tc(t){return t.match(ed.URL_SCHEME_REGEX)!=null}const V2=(t,e)=>{if(typeof fetch>"u"&&(e==null||e.fetchFunc==null))return null;{let n=!0;if(Array.isArray(t)?n=t.every(r=>Tc(r)):n=Tc(t),n)return td(t,e)}return null};fe.registerSaveRouter(V2);fe.registerLoadRouter(V2);function td(t,e){return new ed(t,e)}function WO(t,e){return td(t,e)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class lu{constructor(e){this.modelArtifacts=e}load(){return this.modelArtifacts}}class U2{constructor(e){this.saveHandler=e}save(e){return this.saveHandler(e)}}class HO{constructor(e){e.load&&(this.load=()=>Promise.resolve(e.load())),e.save&&(this.save=n=>Promise.resolve(e.save(n)))}}function GO(t,e,n,r){const s=arguments;return new HO(W2(...s))}function W2(t,e,n,r){return arguments.length===1?t.modelTopology!=null||t.weightSpecs!=null?new lu(t):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new lu({modelTopology:t})):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new lu({modelTopology:t,weightSpecs:e,weightData:n,trainingConfig:r}))}function qO(t){return new U2(t)}function KO(t){return new U2(t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const nd=Object.freeze(Object.defineProperty({__proto__:null,CompositeArrayBuffer:qt,browserFiles:zO,browserHTTPRequest:WO,concatenateArrayBuffers:UT,copyModel:p3,decodeWeights:Jw,decodeWeightsStream:tv,encodeWeights:LT,fromMemory:GO,fromMemorySync:W2,getLoadHandlers:YT,getModelArtifactsForJSON:Zp,getModelArtifactsForJSONSync:rv,getModelArtifactsInfoForJSON:co,getSaveHandlers:XT,getWeightSpecs:vc,http:td,isHTTPScheme:Tc,listModels:u3,loadWeights:jO,moveModel:f3,registerLoadRouter:QT,registerSaveRouter:KT,removeModel:c3,weightsLoaderFactory:M2,withSaveHandler:qO,withSaveHandlerSync:KO},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function QO(t,e,n){const r=g(t,"labels","confusionMatrix"),s=g(e,"predictions","confusionMatrix");k(n==null||n>0&&Number.isInteger(n),()=>`If provided, numClasses must be a positive integer, but got ${n}`),k(r.rank===1,()=>`Expected the rank of labels to be 1, but got ${r.rank}`),k(s.rank===1,()=>`Expected the rank of predictions to be 1, but got ${s.rank}`),k(r.shape[0]===s.shape[0],()=>`Mismatch in the number of examples: ${r.shape[0]} vs. ${s.shape[0]}. Labels and predictions should have the same number of elements.`),k(n>0&&Number.isInteger(n),()=>`numClasses is required to be a positive integer, but got ${n}`);const a=Ui(re(r,"int32"),n),o=Ui(re(s,"int32"),n),i=Ja(a),l=Z(i,o);return re(l,"int32")}const XO=N({confusionMatrix_:QO});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const YO=Object.freeze(Object.defineProperty({__proto__:null,confusionMatrix:XO},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let hr,Mh=!1;function H2(t,e=3){if(e>4)throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");if(t==null)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");let n=!1,r=!1,s=!1,a=!1,o=!1,i=!1;if(t.data instanceof Uint8Array)n=!0;else if(typeof ImageData<"u"&&t instanceof ImageData)r=!0;else if(typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement)s=!0;else if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement)a=!0;else if(t.getContext!=null)o=!0;else if(typeof ImageBitmap<"u"&&t instanceof ImageBitmap)i=!0;else throw new Error(`pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was ${t.constructor.name}`);if(Va(oc,E.backendName)!=null){const m={pixels:t},w={numChannels:e};return E.runKernel(oc,m,w)}const[u,p]=s?[t.videoWidth,t.videoHeight]:[t.width,t.height];let c;if(o)c=t.getContext("2d").getImageData(0,0,u,p).data;else if(r||n)c=t.data;else if(a||s||i){if(hr==null)if(typeof document>"u")if(typeof OffscreenCanvas<"u"&&typeof OffscreenCanvasRenderingContext2D<"u")hr=new OffscreenCanvas(1,1).getContext("2d");else throw new Error("Cannot parse input in current context. Reason: OffscreenCanvas Context2D rendering is not supported.");else hr=document.createElement("canvas").getContext("2d",{willReadFrequently:!0});hr.canvas.width=u,hr.canvas.height=p,hr.drawImage(t,0,0,u,p),c=hr.getImageData(0,0,u,p).data}let f;if(e===4)f=new Int32Array(c);else{const m=u*p;f=new Int32Array(m*e);for(let w=0;w<m;w++)for(let b=0;b<e;++b)f[w*e+b]=c[w*4+b]}return Vf(f,[p,u,e],"int32")}function ZO(t){return t!=null&&t.data instanceof Uint8Array}function JO(){return typeof window<"u"&&typeof ImageBitmap<"u"&&window.hasOwnProperty("createImageBitmap")}function eC(t){return t!=null&&t.width!==0&&t.height!==0}function tC(t){return JO()&&!(t instanceof ImageBitmap)&&eC(t)&&!ZO(t)}async function nC(t,e=3){let n=null;if(V().getBool("WRAP_TO_IMAGEBITMAP")&&tC(t)){let r;try{r=await createImageBitmap(t,{premultiplyAlpha:"none"})}catch{r=null}r!=null&&r.width===t.width&&r.height===t.height?n=r:n=t}else n=t;return H2(n,e)}function G2(t){if(t.rank!==2&&t.rank!==3)throw new Error(`toPixels only supports rank 2 or 3 tensors, got rank ${t.rank}.`);const e=t.rank===2?1:t.shape[2];if(e>4||e===2)throw new Error(`toPixels only supports depth of size 1, 3 or 4 but got ${e}`);if(t.dtype!=="float32"&&t.dtype!=="int32")throw new Error(`Unsupported type for toPixels: ${t.dtype}. Please use float32 or int32 tensors.`)}function rC(t){const e=(t==null?void 0:t.alpha)||1;if(e>1||e<0)throw new Error(`Alpha value ${e} is suppoed to be in range [0 - 1].`)}async function sC(t,e){let n=g(t,"img","toPixels");if(!(t instanceof he)){const u=n;n=re(u,"int32"),u.dispose()}G2(n);const[r,s]=n.shape.slice(0,2),a=n.rank===2?1:n.shape[2],o=await n.data(),i=n.dtype==="float32"?255:1,l=new Uint8ClampedArray(s*r*4);for(let u=0;u<r*s;++u){const p=[0,0,0,255];for(let f=0;f<a;f++){const h=o[u*a+f];if(n.dtype==="float32"){if(h<0||h>1)throw new Error(`Tensor values for a float32 Tensor must be in the range [0 - 1] but encountered ${h}.`)}else if(n.dtype==="int32"&&(h<0||h>255))throw new Error(`Tensor values for a int32 Tensor must be in the range [0 - 255] but encountered ${h}.`);a===1?(p[0]=h*i,p[1]=h*i,p[2]=h*i):p[f]=h*i}const c=u*4;l[c+0]=Math.round(p[0]),l[c+1]=Math.round(p[1]),l[c+2]=Math.round(p[2]),l[c+3]=Math.round(p[3])}if(e!=null){Mh||Va(Wp,E.backendName)!=null&&(console.warn("tf.browser.toPixels is not efficient to draw tensor on canvas. Please try tf.browser.draw instead."),Mh=!0),e.width=s,e.height=r;const u=e.getContext("2d"),p=new ImageData(l,s,r);u.putImageData(p,0,0)}return n!==t&&n.dispose(),l}function aC(t,e,n){let r=g(t,"img","draw");if(!(t instanceof he)){const o=r;r=re(o,"int32"),o.dispose()}G2(r),rC(n==null?void 0:n.imageOptions);const s={image:r},a={canvas:e,options:n};E.runKernel(Wp,s,a)}const q2=N({fromPixels_:H2}),oC=Object.freeze(Object.defineProperty({__proto__:null,draw:aC,fromPixels:q2,fromPixelsAsync:nC,toPixels:sC},Symbol.toStringTag,{value:"Module"}));function K2(t,e){const n=t.shape.length,r=e.shape.length;if(n<1)throw new Error(`tf.gatherND() expects the input to be rank 1 or higher, but the rank was ${n}.`);if(r<1)throw new Error(`tf.gatherND() expects the indices to be rank 1 or higher, but the rank was ${r}.`);if(e.dtype!=="int32")throw new Error(`tf.gatherND() expects the indices to be int32 type, but the dtype was ${e.dtype}.`);if(e.shape[r-1]>n)throw new Error(`index innermost dimension length must be <= tensor rank; saw: ${e.shape[r-1]} vs. ${n}`);if(te(t.shape)===0)throw new Error(`Requested more than 0 entries, but input is empty. Input shape: ${t.shape}.`);const s=e.shape,a=s[s.length-1];let o=1;for(let c=0;c<s.length-1;++c)o*=s[c];const i=t.shape,l=s.slice();l.pop();let u=1;for(let c=a;c<n;++c)u*=i[c],l.push(i[c]);const p=[...Ws(t.shape).map(c=>c/u),1].slice(0,a);return[l,o,u,p]}const iC=Object.freeze(Object.defineProperty({__proto__:null,prepareAndValidate:K2},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const _c=-2,lC=-1;function uC(t,e,n){const r=t.shape.length;k(r===e.length,()=>`Error in slice${r}D: Length of begin ${e} must match the rank of the array (${r}).`),k(r===n.length,()=>`Error in slice${r}D: Length of size ${n} must match the rank of the array (${r}).`);for(let s=0;s<r;++s)k(e[s]+n[s]<=t.shape[s],()=>`Error in slice${r}D: begin[${s}] + size[${s}] (${e[s]+n[s]}) would overflow input.shape[${s}] (${t.shape[s]})`)}function cC(t){const e=[];let n=0;for(;t>0;)t&1&&e.push(n),t/=2,n++;return e}function pC(t,e,n){const r=[];for(let s=0;s<t.length;s++)r[s]=Math.ceil((e[s]-t[s])/n[s]);return r}function Q2(t,e,n,r){const s=[...t];for(let a=s.length;a<r.length;a++)s.push(1);for(let a=0;a<n;a++)a===0?s[e]=1:(s.splice(e,0,1),s.pop());return s}function X2(t,e,n){return n<=t?n:n-(e-1)}function Y2(t,e){const n=[];for(let r=0;r<t;r++)n.push(e+r);return n}function fC(t,e,n,r,s,a,o,i,l){const u=t.length;let p=new Array(u),c=new Array(u),f=new Array(u);if(e.length&&n>0){const h=e[0],m=n+1;p=Z2(o,h,m,r,t),c=J2(i,h,m,s,t),f=Q2(a,h,m,t)}else for(let h=0;h<u;h++)p[h]=tk(o,r,a,t,h,l),c[h]=nk(i,s,a,t,h,l),f[h]=ek(a,h,l);return{begin:p,end:c,strides:f}}function Z2(t,e,n,r,s){const a=[...s],o=Y2(n,e);for(let i=0;i<a.length;i++)if(o.indexOf(i)>-1)a[i]=0;else{const l=X2(e,n,i);let u=r[l];t&1<<l&&(u=0),a[i]=u}return a}function J2(t,e,n,r,s){const a=[...s],o=Y2(n,e);for(let i=0;i<a.length;i++)if(o.indexOf(i)>-1)a[i]=Number.MAX_SAFE_INTEGER;else{const l=X2(e,n,i);let u=r[l];t&1<<l&&(u=Number.MAX_SAFE_INTEGER),a[i]=u}for(let i=0;i<a.length;i++){const l=s[i];a[i]<0&&(a[i]+=l),a[i]=ja(0,a[i],s[i])}return a}function ek(t,e,n){let r=t[e];return(n&1<<e||r==null)&&(r=1),r}function tk(t,e,n,r,s,a){let o=e[s];const i=n[s]||1;(t&1<<s||a&1<<s||o==null)&&(i>0?o=Number.MIN_SAFE_INTEGER:o=Number.MAX_SAFE_INTEGER);const l=r[s];return o<0&&(o+=l),o=ja(0,o,l-1),o}function nk(t,e,n,r,s,a){let o=e[s];const i=n[s]||1;(t&1<<s||a&1<<s||o==null)&&(i>0?o=Number.MAX_SAFE_INTEGER:o=Number.MIN_SAFE_INTEGER);const l=r[s];return o<0&&(o+=l),i>0?o=ja(0,o,l):o=ja(-1,o,l-1),o}function dC(t,e,n){let r=n.length;for(let s=0;s<n.length;s++)if(n[s]>1){r=s;break}for(let s=r+1;s<n.length;s++)if(e[s]>0||n[s]!==t[s])return!1;return!0}function hC(t,e){let n=t.length>0?t[t.length-1]:1;for(let r=0;r<t.length-1;r++)n+=t[r]*e[r];return n}function mC(t,e,n){let r;const s=t.shape.length;typeof e=="number"?r=[e,...new Array(s-1).fill(0)]:e.length<s?r=e.concat(new Array(s-e.length).fill(0)):r=e.slice(),r.forEach(o=>{k(o!==-1,()=>"slice() does not support negative begin indexing.")});let a;return n==null?a=new Array(s).fill(-1):typeof n=="number"?a=[n,...new Array(s-1).fill(-1)]:n.length<s?a=n.concat(new Array(s-n.length).fill(-1)):a=n,a=a.map((o,i)=>o>=0?o:(k(o===-1,()=>`Negative size values should be exactly -1 but got ${o} for the slice() size at index ${i}.`),t.shape[i]-r[i])),[r,a]}function gC(t,e,n,r,s,a,o,i,l){let u;if(r==null?(u=new Array(e.length),u.fill(1)):u=r,o!=null&&o&o-1)throw new Error("Multiple ellipses in slice is not allowed.");let p=!1;const c={dims:u.length,numAddAxisAfterEllipsis:0,begin:e.slice(),end:n.slice(),strides:u.slice(),beginMask:s,endMask:a,ellipsisMask:o,newAxisMask:i,shrinkAxisMask:l};for(let v=0;v<c.dims;v++)p&&1<<v&i&&c.numAddAxisAfterEllipsis++,1<<v&o&&(p=!0);p||(c.ellipsisMask|=1<<c.dims,c.dims++);const f={dims:t.length,beginMask:0,endMask:0,beginValid:!1,endValid:!1};yC(c,f);let h=!0,m=!0,w=!0;const b=[],y=[];for(let v=0;v<t.length;++v){if(f.strides[v]===0)throw Error(`strides[${v}] must be non-zero`);const x=!!(f.shrinkAxisMask&1<<v),T=t[v];if(T===-1){b.push(x?1:-1);continue}const _=[f.beginMask&1<<v,f.endMask&1<<v],A=[f.strides[v]>0?0:-1,f.strides[v]>0?T:T-1];if(x&&f.strides[v]<=0)throw Error("only stride 1 allowed on non-range indexing.");w=w&&f.strides[v]===1;const O=!!(f.beginMask&1<<v&&f.endMask&1<<v);if(f.beginValid&&f.endValid){if(x){const q=f.begin[v]<0?T+f.begin[v]:f.begin[v];if(f.begin[v]=q,f.end[v]=f.begin[v]+1,q<0||q>=T)throw Error(`slice index ${f.begin[v]} of dimension ${v} out of bounds.`)}else f.begin[v]=Vh(f.begin[v],0,f.strides[v],T,_,A),f.end[v]=Vh(f.end[v],1,f.strides[v],T,_,A);const j=f.strides[v]===1&&f.begin[v]===0&&f.end[v]===T;h=h&&j,m=m&&(v===0&&f.strides[v]===1||j)}else h=h&&f.strides[v]===1&&O,m=m&&(v===0&&f.strides[v]===1||O);let L,P=!1;if(f.beginValid&&f.endValid?(L=f.end[v]-f.begin[v],P=!0):x?(L=1,P=!0):O&&T>=0&&(f.strides[v]<0?L=-T:L=T,P=!0),P){let j;L===0||L<0!=f.strides[v]<0?j=0:j=Math.trunc(L/f.strides[v])+(L%f.strides[v]!==0?1:0),b.push(j)}else b.push(-1)}for(let v=0;v<f.finalShapeGatherIndices.length;++v){const x=f.finalShapeGatherIndices[v];x>=0?y.push(b[x]):x===_c&&y.push(1)}return{finalShapeSparse:y.filter((v,x)=>f.finalShapeGatherIndices[x]!==_c),finalShape:y,isIdentity:h,sliceDim0:m,isSimpleSlice:w,begin:f.begin,end:f.end,strides:f.strides}}function yC(t,e){e.beginMask=0,e.endMask=0,e.shrinkAxisMask=0;let n=0;e.beginValid=t.begin!=null,e.endValid=t.end!=null,e.begin=new Array(e.dims),e.end=new Array(e.dims),e.strides=new Array(e.dims),e.finalShapeGatherIndices=[],e.finalShapeGatherIndicesSparse=[],e.inputShapeGatherIndicesSparse=new Array(e.dims);for(let r=0;r<t.dims;r++)if(1<<r&t.ellipsisMask){const s=Math.min(e.dims-(t.dims-r)+1+t.numAddAxisAfterEllipsis,e.dims);for(;n<s;n++)e.begin[n]=0,e.end[n]=0,e.strides[n]=1,e.beginMask|=1<<n,e.endMask|=1<<n,e.finalShapeGatherIndices.push(n),e.finalShapeGatherIndicesSparse.push(-1),e.inputShapeGatherIndicesSparse[n]=r}else if(1<<r&t.newAxisMask)e.finalShapeGatherIndices.push(_c),e.finalShapeGatherIndicesSparse.push(-1);else{if(n===e.begin.length)throw Error(`Index out of range using input dim ${n}; input has only ${e.dims} dims, ${e.begin.length}.`);t.begin!=null&&(e.begin[n]=t.begin[r]),t.end!=null&&(e.end[n]=t.end[r]),e.strides[n]=t.strides[r],t.beginMask&1<<r&&(e.beginMask|=1<<n),t.endMask&1<<r&&(e.endMask|=1<<n),t.shrinkAxisMask&1<<r?(e.finalShapeGatherIndices.push(lC),e.finalShapeGatherIndicesSparse.push(-1),e.shrinkAxisMask|=1<<n):(e.finalShapeGatherIndices.push(n),e.finalShapeGatherIndicesSparse.push(r)),e.inputShapeGatherIndicesSparse[n]=r,n++}}function Vh(t,e,n,r,s,a){if(s[e])return n>0?a[e]:a[e+1&1];{const o=t<0?r+t:t;return o<a[0]?a[0]:o>a[1]?a[1]:o}}const rk=Object.freeze(Object.defineProperty({__proto__:null,assertParamsValid:uC,computeFlatOffset:hC,computeOutShape:pC,getNormalizedAxes:fC,isSliceContinous:dC,maskToAxes:cC,parseSliceParams:mC,sliceInfo:gC,startForAxis:tk,startIndicesWithElidedDims:Z2,stopForAxis:nk,stopIndicesWithElidedDims:J2,stridesForAxis:ek,stridesWithElidedDims:Q2},Symbol.toStringTag,{value:"Module"}));/** @license See the LICENSE file. */const wC="4.21.0";/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class sk{static sgd(e){return new Il(e)}static momentum(e,n,r=!1){return new Zf(e,n,r)}static rmsprop(e,n=.9,r=0,s=null,a=!1){return new Jf(e,n,r,s,a)}static adam(e=.001,n=.9,r=.999,s=null){return new Xf(e,n,r,s)}static adadelta(e=.001,n=.95,r=null){return new Kf(e,n,r)}static adamax(e=.002,n=.9,r=.999,s=null,a=0){return new Yf(e,n,r,s,a)}static adagrad(e,n=.1){return new Qf(e,n)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const vC=sk;/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const bC=typeof requestAnimationFrame<"u"?requestAnimationFrame:typeof setImmediate<"u"?setImmediate:t=>t();function kC(){return new Promise(t=>bC(()=>t()))}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function SC(t,e){const n=t[0].length;t.forEach((s,a)=>{k(s.length===n,()=>`Error in concat${n}D: rank of tensors[${a}] must be the same as the rank of the rest (${n})`)}),k(e>=0&&e<n,()=>`Error in concat${n}D: axis must be between 0 and ${n-1}.`);const r=t[0];t.forEach((s,a)=>{for(let o=0;o<n;o++)k(o===e||s[o]===r[o],()=>`Error in concat${n}D: Shape of tensors[${a}] (${s}) does not match the shape of the rest (${r}) along the non-concatenated axis ${a}.`)})}function NC(t,e){const n=t[0].slice();for(let r=1;r<t.length;r++)n[e]+=t[r][e];return n}/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var Xt;(function(t){t[t.FIRST_DIM_SIZE=0]="FIRST_DIM_SIZE",t[t.VALUE_ROWIDS=1]="VALUE_ROWIDS",t[t.ROW_LENGTHS=2]="ROW_LENGTHS",t[t.ROW_SPLITS=3]="ROW_SPLITS",t[t.ROW_LIMITS=4]="ROW_LIMITS",t[t.ROW_STARTS=5]="ROW_STARTS"})(Xt||(Xt={}));function EC(t,e,n){let r=new Array;if(n==null&&e==null)return r;if(e==null)for(;r.length<t+n.length;)r.push(-1);else r=e.slice();if(n==null)return r;if(t+n.length!==r.length)throw new Error(`rt input.shape and shape=${e} are incompatible: rt input.rank = ${t+n.length}, but shape.rank = ${r.length}`);for(let s=1;s<n.length;++s){const a=n[s],o=r[r.length-n.length+s],i=r[o];if(a>=0)if(i>=0){if(i!==a)throw new Error(`rt input.shape and shape=${e} are incompatible: rt input.shape[${s+t}] = ${a} but shape[${s+t}] = ${i}`)}else r[o]=a}return r}function xC(t){const e={FIRST_DIM_SIZE:Xt.FIRST_DIM_SIZE,VALUE_ROWIDS:Xt.VALUE_ROWIDS,ROW_LENGTHS:Xt.ROW_LENGTHS,ROW_SPLITS:Xt.ROW_SPLITS,ROW_LIMITS:Xt.ROW_LIMITS,ROW_STARTS:Xt.ROW_STARTS},n=[];for(const r of t)if(r in e)n.push(e[r]);else break;return n}function TC(t){return t.length===0?0:t[0]===Xt.FIRST_DIM_SIZE?t.length-1:t.length}function _C(t,e){if(t==null||e==null)return;const n=t.length,r=e.length;if(n>=r)throw new Error(`defaultValue.shape=${t} and ragged tensor flatValues.shape=${e}, are incompatible: defaultValue.rank = ${n} must be less than ragged tensor input flatValues.rank = ${r})`);for(let s=0;s<Math.min(n,r-1);++s){const a=t[s],o=e[s+1];if(a>=0&&o>=0&&a!==1&&a!==o)throw new Error(`defaultValue.shape=${t}, and ragged tensor input flatValues.shape=${e} are incompatible: defaultValue.shape[${s-t.length}] = ${a} but ragged tensor input.flatValues.shape[${s-t.length}] = ${o}`)}}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const rd=30;function $C(t){return t<=rd?t:Fi(t,Math.floor(Math.sqrt(t)))}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function IC(t,e,n){const r=n*(typeof t=="number"?t:t[0]),s=e*(typeof t=="number"?t:t[1]);return[r,s]}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function AC(t,e,n,r=!0){let s=[];if(r)s=s.concat(e.slice(0)),s.push(t[0]/n),s=s.concat(t.slice(1));else{s=s.concat(t[0]);const a=e.length;for(let o=0;o<a;++o)s=s.concat([t[o+1]/e[o],e[o]]);s=s.concat(t.slice(a+1))}return s}function OC(t,e,n=!0){const r=[];if(n){r.push(e);for(let s=e+1;s<t;++s)s<=2*e?(r.push(s),r.push(s-(e+1))):r.push(s)}else{const s=[],a=[];for(let o=1;o<t;++o)o>=e*2+1||o%2===1?a.push(o):s.push(o);r.push(...s),r.push(0),r.push(...a)}return r}function CC(t,e,n,r=!0){const s=[];r?s.push(t[0]/n):s.push(t[0]*n);for(let a=1;a<t.length;++a)a<=e.length?r?s.push(e[a-1]*t[a]):s.push(t[a]/e[a-1]):s.push(t[a]);return s}function DC(t,e){const n=[0];for(let r=0;r<e;++r)n.push(t[r][0]);return n}function PC(t,e,n){const r=t.slice(0,1);for(let s=0;s<n;++s)r.push(t[s+1]-e[s][0]-e[s][1]);return r}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const FC=1.7580993408473768,RC=1.0507009873554805;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const LC=.3275911,zC=.254829592,BC=-.284496736,jC=1.421413741,MC=-1.453152027,VC=1.061405429;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function UC(t,e){if(t.length!==e.length)throw new Error(`Cannot merge real and imag arrays of different lengths. real:${t.length}, imag: ${e.length}.`);const n=new Float32Array(t.length*2);for(let r=0;r<n.length;r+=2)n[r]=t[r/2],n[r+1]=e[r/2];return n}function WC(t){const e=new Float32Array(t.length/2),n=new Float32Array(t.length/2);for(let r=0;r<t.length;r+=2)e[r/2]=t[r],n[r/2]=t[r+1];return{real:e,imag:n}}function HC(t){const e=Math.ceil(t.length/4),n=new Float32Array(e),r=new Float32Array(e);for(let s=0;s<t.length;s+=4)n[Math.floor(s/4)]=t[s],r[Math.floor(s/4)]=t[s+1];return{real:n,imag:r}}function GC(t){const e=Math.floor(t.length/4),n=new Float32Array(e),r=new Float32Array(e);for(let s=2;s<t.length;s+=4)n[Math.floor(s/4)]=t[s],r[Math.floor(s/4)]=t[s+1];return{real:n,imag:r}}function qC(t,e){const n=t[e*2],r=t[e*2+1];return{real:n,imag:r}}function KC(t,e,n,r){t[r*2]=e,t[r*2+1]=n}function QC(t,e){const n=new Float32Array(t/2),r=new Float32Array(t/2);for(let s=0;s<Math.ceil(t/2);s++){const a=(e?2:-2)*Math.PI*(s/t);n[s]=Math.cos(a),r[s]=Math.sin(a)}return{real:n,imag:r}}function XC(t,e,n){const r=(n?2:-2)*Math.PI*(t/e),s=Math.cos(r),a=Math.sin(r);return{real:s,imag:a}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const uu="->",YC=/->/g,Uh=",",Wh="...";function ZC(t,e){t=t.replace(/\s/g,"");const n=(t.length-t.replace(YC,"").length)/uu.length;if(n<1)throw new Error("Equations without an arrow are not supported.");if(n>1)throw new Error(`Equation must contain exactly one arrow ("${uu}").`);const[r,s]=t.split(uu);k(r.indexOf(Wh)===-1,()=>`The ellipsis notation ("${Wh}") is not supported yet.`);const a=r.split(Uh),o=a.length;if(e!==o)throw new Error(`Expected ${o} input tensors, received ${e}`);if(o>2)throw new Error("Support for more than 2 input tensors is not implemented yet.");const i=[];for(let f=0;f<s.length;++f){const h=s[f];if(!a.some(m=>m.indexOf(h)!==-1))throw new Error(`Output subscripts contain the label ${h} not present in the input subscripts.`);i.indexOf(h)===-1&&i.push(h)}for(let f=0;f<r.length;++f){const h=r[f];i.indexOf(h)===-1&&h!==Uh&&i.push(h)}const l=new Array(a.length);for(let f=0;f<o;++f){if(new Set(a[f].split("")).size!==a[f].length)throw new Error(`Found duplicate axes in input component ${a[f]}. Support for duplicate axes in input is not implemented yet.`);l[f]=[];for(let h=0;h<a[f].length;++h)l[f].push(i.indexOf(a[f][h]))}const u=i.length,p=s.length,c=[];for(let f=p;f<u;++f)c.push(f);return{allDims:i,summedDims:c,idDims:l}}function JC(t,e){let n=new Array(t);n.fill(-1);for(let s=0;s<e.length;++s)n[e[s]]=s;const r=[];for(let s=0;s<t;++s)n[s]===-1&&r.push(s);return n=n.filter(s=>s!==-1),{permutationIndices:n,expandDims:r}}function eD(t,e,n){const r=new Array(t);for(let s=0;s<n.length;++s){const a=n[s].shape;for(let o=0;o<e[s].length;++o)r[e[s][o]]===void 0?r[e[s][o]]=a[o]:k(r[e[s][o]]===a[o],()=>`Expected dimension ${r[e[s][o]]} at axis ${o} of input shaped ${JSON.stringify(a)}, but got dimension ${a[o]}`)}}function tD(t,e){const n=t,r=[];let s=0;t.length===0&&n.push(-1),s=t.length+1;for(let o=0;o<s;++o)r.push([]);const a=[];for(let o=0;o<n.length;++o){const i=n[o],l=rD(e,i);for(const u of l)a.indexOf(u)===-1&&(r[o].push(u),a.push(u))}return{path:n,steps:r}}function nD(t){return t.every((e,n)=>e===n)}function rD(t,e){const n=[];for(let r=0;r<t.length;++r)(t[r].length===0||t[r].indexOf(e)!==-1||e===-1)&&n.push(r);return n}function sD(t,e,n=0){let r=[];if(typeof e=="number")k(t.shape[n]%e===0,()=>"Number of splits must evenly divide the axis."),r=new Array(e).fill(t.shape[n]/e);else{const s=e.reduce((o,i)=>(i===-1&&(o+=1),o),0);k(s<=1,()=>"There should be only one negative value in split array.");const a=e.indexOf(-1);if(a!==-1){const o=e.reduce((i,l)=>l>0?i+l:i);e[a]=t.shape[n]-o}k(t.shape[n]===e.reduce((o,i)=>o+i),()=>"The sum of sizes must match the size of the axis dimension."),r=e}return r}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function aD(t){return`Received SparseTensor with denseShape[0] = 0 but
  indices.shape[0] = ${t}`}function oD(t,e){return`indices(${t}, 0) is invalid: ${e} < 0`}function iD(t,e,n){return`indices(${t}, 0) is invalid: ${e} >= ${n}`}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function lD(t,e){return`only one output dimension may be -1, not both ${t} and ${e}`}function uD(t,e){return`size ${t} must be non-negative, not ${e}`}function cD(){return"reshape cannot infer the missing input size for an empty tensor unless all specified input sizes are non-zero"}function pD(t,e){const n=te(t),r=te(e);return`Input to reshape is a SparseTensor with ${n}
  dense values, but the requested shape requires a multiple of ${r}. inputShape=${t} outputShape= ${e}`}function fD(t,e){const n=te(t),r=te(e);return`Input to reshape is a tensor with ${n} dense values, but the requested shape has ${r}. inputShape=${t} outputShape=${e}`}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dD(){return"segment ids must be >= 0"}function hD(){return"segment ids are not increasing"}function mD(t,e){return`Segment id ${t} out of range [0, ${e}), possibly because segmentIds input is not sorted.`}function gD(t,e,n){return`Bad: indices[${t}] == ${e} out of range [0, ${n})`}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yD(t,e){let n=!1,r;for(t<=rd?(r=t,n=!0):r=Fi(t,Math.floor(Math.sqrt(t)));!n;)r>e||r===t?n=!0:r=Fi(t,r+1);return r}function wD(t,e,n){const r=[],s=t.length;for(let a=0;a<s;a++)a!==e?r.push(t[a]):r.push(n);return r}function vD(t,e,n,r){const s=e.shape.length,a=t.shape.length;if(r!==0&&(r<-s||r>s))throw new Error(`Expect batchDims in the range of [-${s}, ${s}], but got ${r}`);if(r<0&&(r+=s),r>a)throw new Error(`batchDims (${r}) must be less than rank(x) (
    ${a}).`);if(n<r)throw new Error(`batchDims (${r}) must be less than or equal to axis (${n}).`);for(let c=0;c<r;++c)if(t.shape[c]!==e.shape[c])throw new Error(`x.shape[${c}]: ${t.shape[c]} should be equal to indices.shape[${c}]: ${e.shape[c]}.`);const o=t.shape[n],i=[];let l=1,u=1,p=1;for(let c=0;c<r;++c)i.push(t.shape[c]),l*=t.shape[c];for(let c=r;c<n;c++)i.push(t.shape[c]),u*=t.shape[c];for(let c=r;c<s;c++)i.push(e.shape[c]);for(let c=n+1;c<a;c++)i.push(t.shape[c]),p*=t.shape[c];return{batchSize:l,sliceSize:p,outerSize:u,dimSize:o,outputShape:i}}const bD=Object.freeze(Object.defineProperty({__proto__:null,collectGatherOpShapeInfo:vD,computeOutShape:wD,segOpComputeOptimalWindowSize:yD},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kD(t){try{return t.map(e=>zi(e))}catch(e){throw new Error(`Failed to decode encoded string bytes into utf-8, error: ${e}`)}}function SD(t){return t.map(e=>uo(e))}const ND=Object.freeze(Object.defineProperty({__proto__:null,ERF_A1:zC,ERF_A2:BC,ERF_A3:jC,ERF_A4:MC,ERF_A5:VC,ERF_P:LC,PARALLELIZE_THRESHOLD:rd,get RowPartitionType(){return Xt},SELU_SCALE:RC,SELU_SCALEALPHA:FC,applyActivation:_l,assertAndGetBroadcastShape:Ee,assertAxesAreInnerMostDims:M_,assertParamsConsistent:SC,assignToTypedArray:KC,axesAreInnerMostDims:uf,calculateShapes:c2,checkEinsumDimSizes:eD,checkPadOnDimRoundingMode:Ct,combineLocations:rb,combineRaggedTensorToTensorShapes:EC,complexWithEvenIndex:HC,complexWithOddIndex:GC,computeConv2DInfo:po,computeConv3DInfo:Ev,computeDefaultPad:tf,computeDilation2DInfo:R3,computeOptimalWindowSize:$C,computeOutAndReduceShapes:j_,computeOutShape:NC,computePool2DInfo:Nv,computePool3DInfo:L3,convertConv2DDataFormat:xv,decodeEinsumEquation:ZC,eitherStridesOrDilationsAreOne:Nn,expandShapeToKeepDim:mo,exponent:XC,exponents:QC,fromStringArrayToUint8:SD,fromUint8ToStringArray:kD,getAxesPermutation:V_,getBroadcastDims:Zv,getComplexWithIndex:qC,getEinsumComputePath:tD,getEinsumPermutation:JC,getFusedBiasGradient:Tl,getFusedDyActivation:xl,getImageCenter:IC,getInnerMostAxes:W_,getPermuted:OC,getRaggedRank:TC,getReductionAxes:af,getReshaped:AC,getReshapedPermuted:CC,getRowPartitionTypesHelper:xC,getSliceBeginCoords:DC,getSliceSize:PC,getSparseFillEmptyRowsIndicesDenseShapeMismatch:aD,getSparseFillEmptyRowsNegativeIndexErrorMessage:oD,getSparseFillEmptyRowsOutOfRangeIndexErrorMessage:iD,getSparseReshapeEmptyTensorZeroOutputDimErrorMessage:cD,getSparseReshapeInputOutputMismatchErrorMessage:fD,getSparseReshapeInputOutputMultipleErrorMessage:pD,getSparseReshapeMultipleNegativeOneOutputDimErrorMessage:lD,getSparseReshapeNegativeOutputDimErrorMessage:uD,getSparseSegmentReductionIndicesOutOfRangeErrorMessage:gD,getSparseSegmentReductionNegativeSegmentIdsErrorMessage:dD,getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage:hD,getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage:mD,getUndoAxesPermutation:U_,isIdentityPermutation:nD,log:Lx,mergeRealAndImagArrays:UC,prepareAndValidate:K2,prepareSplitSize:sD,segment_util:bD,shouldFuse:$l,slice_util:rk,splitRealAndImagArrays:WC,stridesOrDilationsArePositive:Br,tupleValuesAreOne:Ka,upcastType:ml,validateDefaultValueShape:_C,validateInput:Nl,validateUpdateShape:Uf,warn:On},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ED=Object.freeze(Object.defineProperty({__proto__:null,nonMaxSuppressionV3Impl:I2,nonMaxSuppressionV4Impl:A2,nonMaxSuppressionV5Impl:O2,whereImpl:w2},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */OO();const xD=Object.freeze(Object.defineProperty({__proto__:null,Abs:Uy,Acos:Wy,Acosh:Hy,AdadeltaOptimizer:Kf,AdagradOptimizer:Qf,AdamOptimizer:Xf,AdamaxOptimizer:Yf,Add:Vp,AddN:Gy,All:qy,Any:Ky,ArgMax:Qy,ArgMin:Xy,Asin:Yy,Asinh:Zy,Atan:Jy,Atan2:t0,Atanh:e0,AvgPool:n0,AvgPool3D:r0,AvgPool3DGrad:vx,AvgPoolGrad:wx,BatchMatMul:s0,BatchToSpaceND:a0,Bincount:o0,BitwiseAnd:i0,BroadcastArgs:l0,BroadcastTo:bx,Cast:Up,Ceil:u0,ClipByValue:c0,Complex:p0,ComplexAbs:f0,Concat:d0,Conv2D:h0,Conv2DBackpropFilter:m0,Conv2DBackpropInput:g0,Conv3D:y0,Conv3DBackpropFilterV2:kx,Conv3DBackpropInputV2:w0,Cos:v0,Cosh:b0,CropAndResize:N0,Cumprod:k0,Cumsum:S0,DataStorage:XE,DenseBincount:E0,DepthToSpace:x0,DepthwiseConv2dNative:T0,DepthwiseConv2dNativeBackpropFilter:_0,DepthwiseConv2dNativeBackpropInput:$0,Diag:I0,Dilation2D:A0,Dilation2DBackpropFilter:Nx,Dilation2DBackpropInput:Sx,Draw:Wp,get ENV(){return jp},Einsum:C0,Elu:D0,EluGrad:Ex,Environment:My,Equal:F0,Erf:P0,Exp:R0,ExpandDims:L0,Expm1:z0,FFT:B0,Fill:j0,FlipLeftRight:M0,Floor:V0,FloorDiv:U0,FromPixels:oc,FusedBatchNorm:W0,FusedConv2D:lc,FusedDepthwiseConv2D:uc,GatherNd:G0,GatherV2:H0,Greater:q0,GreaterEqual:K0,IFFT:Q0,Identity:Hp,Imag:X0,IsFinite:Y0,IsInf:Z0,IsNan:J0,KernelBackend:Ay,LRN:u1,LRNGrad:$x,LeakyRelu:e1,Less:t1,LessEqual:n1,LinSpace:r1,Log:s1,Log1p:a1,LogSoftmax:Tx,LogicalAnd:o1,LogicalNot:i1,LogicalOr:l1,LogicalXor:xx,LowerBound:_x,MatrixBandPart:Ix,Max:c1,MaxPool:f1,MaxPool3D:d1,MaxPool3DGrad:Ox,MaxPoolGrad:Ax,MaxPoolWithArgmax:h1,Maximum:p1,Mean:m1,Min:g1,Minimum:y1,MirrorPad:w1,Mod:v1,MomentumOptimizer:Zf,Multinomial:b1,Multiply:k1,Neg:S1,NonMaxSuppressionV3:E1,NonMaxSuppressionV4:x1,NonMaxSuppressionV5:T1,NotEqual:N1,OP_SCOPE_SUFFIX:Xp,OneHot:$1,OnesLike:_1,Optimizer:pr,OptimizerConstructors:sk,Pack:I1,PadV2:A1,Pool:Cx,Pow:O1,Prelu:C1,Prod:D1,RMSPropOptimizer:Jf,RaggedGather:P1,RaggedRange:F1,RaggedTensorToTensor:R1,Range:L1,get Rank(){return dc},Real:z1,RealDiv:O0,Reciprocal:B1,get Reduction(){return He},Relu:j1,Relu6:W1,Reshape:M1,ResizeBilinear:U1,ResizeBilinearGrad:Px,ResizeNearestNeighbor:V1,ResizeNearestNeighborGrad:Dx,Reverse:H1,RotateWithOffset:Ow,Round:G1,Rsqrt:q1,SGDOptimizer:Il,ScatterNd:K1,SearchSorted:X1,Select:Y1,Selu:Z1,Sigmoid:rw,Sign:nw,Sin:ew,Sinh:tw,Slice:J1,Softmax:uw,Softplus:sw,SpaceToBatchND:iw,SparseFillEmptyRows:cw,SparseReshape:pw,SparseSegmentMean:fw,SparseSegmentSum:dw,SparseToDense:hw,SplitV:lw,Sqrt:aw,Square:Fx,SquaredDifference:mw,StaticRegexReplace:gw,Step:Aw,StridedSlice:yw,StringNGrams:ww,StringSplit:vw,StringToHashBucketFast:bw,Sub:kw,Sum:ow,Tan:Sw,Tanh:Nw,Tensor:he,TensorBuffer:Bi,TensorScatterUpdate:Q1,Tile:Gp,TopK:Ew,Transform:xw,Transpose:ti,Unique:Tw,Unpack:_w,UnsortedSegmentSum:$w,UpperBound:Rx,Variable:Wa,ZerosLike:Iw,_FusedMatMul:ic,abs:rt,acos:pv,acosh:fv,add:M,addN:dv,all:hv,any:mv,argMax:gv,argMin:yv,asin:wv,asinh:vv,atan:bv,atan2:kv,atanh:Sv,avgPool:nf,avgPool3d:Tv,backend:Zw,backend_util:ND,basicLSTMCell:_v,batchNorm:fo,batchNorm2d:$v,batchNorm3d:Iv,batchNorm4d:Av,batchToSpaceND:rf,bincount:sf,bitwiseAnd:Ov,booleanMaskAsync:v2,broadcastArgs:Cv,broadcastTo:ba,broadcast_util:A_,browser:oC,buffer:tn,cast:re,ceil:Dv,clipByValue:Pv,clone:mn,complex:kn,concat:Le,concat1d:Fv,concat2d:Rv,concat3d:Lv,concat4d:zv,conv1d:Bv,conv2d:ho,conv2dTranspose:Mv,conv3d:Vv,conv3dTranspose:Uv,copyRegisteredKernels:Mx,cos:Wv,cosh:Hv,cosineWindow:El,cumprod:Gv,cumsum:qv,customGrad:rn,denseBincount:Kv,deprecationWarn:ET,depthToSpace:Qv,depthwiseConv2d:gl,device_util:wT,diag:Xv,dilation2d:Yv,disableDeprecationWarnings:NT,dispose:Ge,disposeVariables:xT,div:oe,divNoNan:Jv,dot:eb,dropout:E2,einsum:vr,elu:lf,enableDebugMode:ST,enableProdMode:kT,enclosingPowerOfTwo:Hf,engine:TT,ensureShape:tb,env:V,equal:of,erf:nb,euclideanNorm:ab,exp:tr,expandDims:ln,expm1:ob,eye:cf,fft:kl,fill:Hs,findBackend:DT,findBackendFactory:PT,floor:pf,floorDiv:ef,fused:T2,gather:ff,gatherND:N2,gather_util:iC,getBackend:Yw,getGradient:cc,getKernel:Va,getKernelsForBackend:Ri,grad:w$,grads:v$,greater:yo,greaterEqual:df,ifft:Za,imag:wo,image:qf,inTopKAsync:x2,io:nd,irfft:Bf,isFinite:ib,isInf:lb,isNaN:ub,keep:zt,kernel_impls:ED,leakyRelu:hf,less:Vi,lessEqual:yl,linalg:P2,linspace:cb,localResponseNormalization:pb,log:Fs,log1p:mf,logSigmoid:db,logSoftmax:hb,logSumExp:yf,logicalAnd:Qa,logicalNot:wf,logicalOr:vf,logicalXor:mb,losses:F2,lowerBound:gb,matMul:Z,math:YO,max:Ar,maxPool:bf,maxPool3d:yb,maxPoolWithArgmax:wb,maximum:kf,mean:Xa,memory:_T,meshgrid:vb,min:Mi,minimum:Ya,mirrorPad:bb,mod:kb,moments:Sb,movingAverage:b2,mul:R,multiRNNCell:Nb,multinomial:Eb,neg:Ut,nextFrame:kC,norm:go,notEqual:Sf,oneHot:Ui,ones:zn,onesLike:xb,op:N,outerProduct:Tb,pad:Gs,pad1d:_b,pad2d:$b,pad3d:Ib,pad4d:Ab,pool:Ob,pow:Ps,prelu:Ef,print:Jp,prod:Cb,profile:$T,raggedGather:Db,raggedRange:Pb,raggedTensorToTensor:Fb,rand:Rb,randomGamma:jb,randomNormal:Ff,randomStandardNormal:Mb,randomUniform:bl,randomUniformInt:Vb,range:Rs,ready:OT,real:Ls,reciprocal:Ub,registerBackend:FT,registerGradient:zx,registerKernel:Cw,relu:vo,relu6:Rf,removeBackend:CT,reshape:I,reverse:rr,reverse1d:Wb,reverse2d:Hb,reverse3d:Gb,reverse4d:qb,rfft:Sl,round:Lf,rsqrt:Kb,scalar:K,scatterND:k2,scatter_util:k4,searchSorted:vl,selu:Qb,separableConv2d:Xb,serialization:IO,setBackend:AT,setPlatform:RT,setdiff1dAsync:Yb,sigmoid:Ir,sign:Zb,signal:D2,sin:Jb,sinh:e2,slice:J,slice1d:t2,slice2d:n2,slice3d:r2,slice4d:s2,slice_util:rk,softmax:zf,softplus:gf,spaceToBatchND:Nf,sparse:R2,sparseToDense:S2,spectral:C2,split:zs,sqrt:nn,square:It,squaredDifference:jf,squeeze:bo,stack:sn,step:Mf,stridedSlice:a2,string:L2,sub:H,sum:ae,sumOutType:uT,tan:o2,tanh:ji,tensor:Vt,tensor1d:gt,tensor2d:Ss,tensor3d:Vf,tensor4d:i2,tensor5d:l2,tensor6d:u2,tensorScatterUpdate:p2,tensor_util:fT,test_util:PI,tidy:Y,tile:ks,time:IT,topk:f2,train:vC,transpose:Ja,truncatedNormal:d2,unique:h2,unregisterGradient:jx,unregisterKernel:Bx,unsortedSegmentSum:m2,unstack:cr,upcastType:ml,upperBound:g2,util:Zx,valueAndGrad:b$,valueAndGrads:k$,variable:y2,variableGrads:fb,version_core:wC,where:gn,whereAsync:Wf,zeros:nr,zerosLike:ct},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const TD=V();TD.registerFlag("KEEP_INTERMEDIATE_TENSORS",()=>!1,t=>{t&&console.warn("Keep intermediate tensors is ON. This will print the values of all intermediate tensors during model inference. Not all models support this mode. For details, check e2e/benchmarks/ model_config.js. This significantly impacts performance.")});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */var tt;(function(t){t[t.DT_INVALID=0]="DT_INVALID",t[t.DT_FLOAT=1]="DT_FLOAT",t[t.DT_DOUBLE=2]="DT_DOUBLE",t[t.DT_INT32=3]="DT_INT32",t[t.DT_UINT8=4]="DT_UINT8",t[t.DT_INT16=5]="DT_INT16",t[t.DT_INT8=6]="DT_INT8",t[t.DT_STRING=7]="DT_STRING",t[t.DT_COMPLEX64=8]="DT_COMPLEX64",t[t.DT_INT64=9]="DT_INT64",t[t.DT_BOOL=10]="DT_BOOL",t[t.DT_QINT8=11]="DT_QINT8",t[t.DT_QUINT8=12]="DT_QUINT8",t[t.DT_QINT32=13]="DT_QINT32",t[t.DT_BFLOAT16=14]="DT_BFLOAT16",t[t.DT_QINT16=15]="DT_QINT16",t[t.DT_QUINT16=16]="DT_QUINT16",t[t.DT_UINT16=17]="DT_UINT16",t[t.DT_COMPLEX128=18]="DT_COMPLEX128",t[t.DT_HALF=19]="DT_HALF",t[t.DT_RESOURCE=20]="DT_RESOURCE",t[t.DT_VARIANT=21]="DT_VARIANT",t[t.DT_UINT32=22]="DT_UINT32",t[t.DT_UINT64=23]="DT_UINT64",t[t.DT_FLOAT_REF=101]="DT_FLOAT_REF",t[t.DT_DOUBLE_REF=102]="DT_DOUBLE_REF",t[t.DT_INT32_REF=103]="DT_INT32_REF",t[t.DT_UINT8_REF=104]="DT_UINT8_REF",t[t.DT_INT16_REF=105]="DT_INT16_REF",t[t.DT_INT8_REF=106]="DT_INT8_REF",t[t.DT_STRING_REF=107]="DT_STRING_REF",t[t.DT_COMPLEX64_REF=108]="DT_COMPLEX64_REF",t[t.DT_INT64_REF=109]="DT_INT64_REF",t[t.DT_BOOL_REF=110]="DT_BOOL_REF",t[t.DT_QINT8_REF=111]="DT_QINT8_REF",t[t.DT_QUINT8_REF=112]="DT_QUINT8_REF",t[t.DT_QINT32_REF=113]="DT_QINT32_REF",t[t.DT_BFLOAT16_REF=114]="DT_BFLOAT16_REF",t[t.DT_QINT16_REF=115]="DT_QINT16_REF",t[t.DT_QUINT16_REF=116]="DT_QUINT16_REF",t[t.DT_UINT16_REF=117]="DT_UINT16_REF",t[t.DT_COMPLEX128_REF=118]="DT_COMPLEX128_REF",t[t.DT_HALF_REF=119]="DT_HALF_REF",t[t.DT_RESOURCE_REF=120]="DT_RESOURCE_REF",t[t.DT_VARIANT_REF=121]="DT_VARIANT_REF",t[t.DT_UINT32_REF=122]="DT_UINT32_REF",t[t.DT_UINT64_REF=123]="DT_UINT64_REF"})(tt||(tt={}));var Hh;(function(t){(function(e){e[e.LEGACY=0]="LEGACY",e[e.V1=1]="V1",e[e.V2=2]="V2"})(t.CheckpointFormatVersion||(t.CheckpointFormatVersion={}))})(Hh||(Hh={}));/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const _D={};function ak(t){return _D[t]}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function d(t,e,n,r,s){const a=e.inputParams[t];if(a&&a.inputIndexStart!==void 0){const i=a.inputIndexStart,l=a.inputIndexEnd===0?void 0:a.inputIndexEnd===void 0?i+1:a.inputIndexEnd,u=i<0?e.inputNames.length+i:i;if(a.type==="tensor")return Ce(e.inputNames[u],n,r,s);if(a.type==="tensors"){const f=e.inputs.slice(i,l);return e.inputNames.slice(i,l).filter((m,w)=>{var b;return((b=f[w])===null||b===void 0?void 0:b.op)!=="NoOp"}).map(m=>Ce(m,n,r,s))}const p=Ce(e.inputNames[u],n,r,s),c=p.dataSync();return a.type==="number"?c[0]:$r(p.shape,c)}const o=e.attrParams[t];return o&&o.value}function Ce(t,e,n,r){const[s,a]=nt(t,n);if(r!=null){const i=r.getHashTableHandleByName(s);if(i!=null)return i}const o=n.currentContextIds.find(i=>!!e[Wi(s,i)]);return o!==void 0?e[Wi(s,o)][a]:void 0}function Gh(t,e,n){return e[Wi(t,n.currentContextId)]}function un(t,e){const[n,r,s]=nt(t,e);return[Wi(n,e&&e.currentContextId),r,s]}function Wi(t,e){return e?`${t}-${e}`:t}function nt(t,e){if(t==="")return["",0,void 0];const n=e!=null&&e.parseNodeNameCache!=null;if(n){const a=e.parseNodeNameCache.get(t);if(a!=null)return a}const r=t.split(":");let s;if(r.length===1)s=[t,0,void 0];else{const a=r[0],o=r.length===3?r[1]:void 0,i=Number(r[r.length-1]);s=[a,i,o]}return n&&e.parseNodeNameCache.set(t,s),s}function si(t,e,n){let r=d("pad",t,e,n);if(r==="explicit"){r=d("explicitPaddings",t,e,n);const s=[[0,0],[0,0],[0,0],[0,0]];for(let a=0;a<4;a++)s[a][0]=r[a*2],s[a][1]=r[a*2+1];return s}return r}function cn(t){return t.kept?t:mn(t)}/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const $D=[{tfOpName:"Add",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddV2",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddN",category:"arithmetic",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"BiasAdd",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"Sub",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"RealDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Div",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"DivNoNan",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mul",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Maximum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Minimum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Pow",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SquaredDifference",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorMod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],ID=Object.freeze(Object.defineProperty({__proto__:null,json:$D},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const AD=[{tfOpName:"Abs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan2",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Ceil",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ClipByValue",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"clipValueMin",type:"number"},{start:2,name:"clipValueMax",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Complex",category:"basic_math",inputs:[{start:0,name:"real",type:"tensor"},{start:1,name:"imag",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ComplexAbs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Elu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Exp",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Floor",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Imag",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Neg",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Real",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Prelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"alpha",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu6",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Selu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sigmoid",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Rsqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Square",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sign",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Round",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Expm1",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log1p",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Reciprocal",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Softplus",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Erf",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LeakyRelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"alpha",name:"alpha",type:"number",defaultValue:.2},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"IsNan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"IsFinite",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"IsInf",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],OD=Object.freeze(Object.defineProperty({__proto__:null,json:AD},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const CD=[{tfOpName:"EmptyTensorList",category:"control",inputs:[{start:0,name:"elementShape",type:"shape"},{start:1,name:"maxNumElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"LoopCond",category:"control",inputs:[{start:0,name:"pred",type:"tensor"}]},{tfOpName:"Switch",category:"control",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"pred",type:"tensor"}]},{tfOpName:"Merge",category:"control",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"Enter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"frame_name",name:"frameName",type:"string"},{tfName:"is_constant",name:"isConstant",type:"bool"}]},{tfOpName:"Exit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NextIteration",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayV3",category:"control",inputs:[{start:0,name:"size",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"dynamic_size",name:"dynamicSize",type:"bool"},{tfName:"clear_after_read",name:"clearAfterRead",type:"bool"},{tfName:"identical_element_shapes",name:"identicalElementShapes",type:"bool"},{tfName:"tensor_array_name",name:"name",type:"string"}]},{tfOpName:"TensorArrayWriteV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayReadV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayGatherV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"}]},{tfOpName:"TensorArrayScatterV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArrayConcatV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape_except0",name:"elementShapeExcept0",type:"shape",notSupported:!0}]},{tfOpName:"TensorArraySplitV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"tensor",type:"tensor"},{start:2,name:"lengths",type:"number[]"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArraySizeV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"flowIn",type:"number"}]},{tfOpName:"TensorArrayCloseV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"}]},{tfOpName:"StatelessIf",category:"control",inputs:[{start:0,name:"cond",type:"tensor"},{start:1,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"then_branch",name:"thenBranch",type:"func"},{tfName:"else_branch",name:"elseBranch",type:"func"}]},{tfOpName:"If",category:"control",inputs:[{start:0,name:"cond",type:"tensor"},{start:1,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"then_branch",name:"thenBranch",type:"func"},{tfName:"else_branch",name:"elseBranch",type:"func"}]},{tfOpName:"StatelessWhile",category:"control",inputs:[{start:0,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"cond",name:"cond",type:"func"},{tfName:"body",name:"body",type:"func"}]},{tfOpName:"While",category:"control",inputs:[{start:0,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"cond",name:"cond",type:"func"},{tfName:"body",name:"body",type:"func"}]},{tfOpName:"TensorListScatter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListScatterV2",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"},{start:3,name:"numElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListGather",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListGetItem",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListSetItem",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListReserve",category:"control",inputs:[{start:0,name:"elementShape",type:"shape"},{start:1,name:"numElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListFromTensor",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListStack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"},{tfName:"num_elements",name:"numElements",type:"dtype"}]},{tfOpName:"TensorListSplit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"elementShape",type:"shape"},{start:2,name:"lengths",type:"number[]"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListConcat",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}],attrs:[{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListConcatV2",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}],attrs:[{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListPopBack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListPushBack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"tensor",type:"tensor"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListLength",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}]},{tfOpName:"TensorListResize",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"size",type:"number"}]}],DD=Object.freeze(Object.defineProperty({__proto__:null,json:CD},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const PD=[{tfOpName:"AvgPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[],notSupported:!0},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPoolWithArgmax",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"include_batch_in_index",name:"includeBatchInIndex",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AvgPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Conv1D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"stride",name:"stride",type:"number"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NWC"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"dilation",name:"dilation",type:"number",defaultValue:1}]},{tfOpName:"Conv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"useCudnnOnGpu",name:"useCudnnOnGpu",type:"bool"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"_FusedConv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"use_cudnn_on_gpu",name:"useCudnnOnGpu",type:"bool",defaultValue:!0},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4},{tfName:"leakyrelu_alpha",name:"leakyreluAlpha",type:"number",defaultValue:.2}]},{tfOpName:"Conv2DBackpropInput",category:"convolution",inputs:[{start:2,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:0,name:"outputShape",type:"number[]"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]",notSupported:!0}]},{tfOpName:"DepthwiseConv2d",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"DepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"FusedDepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]}]},{tfOpName:"Conv3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"Dilation2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"rates",name:"dilations",type:"number[]"},{tfName:"padding",name:"pad",type:"string"}]}],FD=Object.freeze(Object.defineProperty({__proto__:null,json:PD},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const RD=[{tfOpName:"Fill",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"},{start:1,name:"value",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"LinSpace",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"num",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"OneHot",category:"creation",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"depth",type:"number"},{start:2,name:"onValue",type:"number",defaultValue:1},{start:3,name:"offValue",type:"number",defaultValue:0}],attrs:[{tfName:"axis",name:"axis",type:"number",notSupported:!0},{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"Ones",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"OnesLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"RandomStandardNormal",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"RandomUniform",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"minval",name:"minval",type:"number",defaultValue:0},{tfName:"maxval",name:"maxval",type:"number",defaultValue:1},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"RandomUniformInt",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"minval",name:"minval",type:"number"},{tfName:"maxval",name:"maxval",type:"number"},{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0}]},{tfOpName:"Range",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"step",type:"number",defaultValue:0}],attrs:[{tfName:"Tidx",name:"dtype",type:"dtype"}]},{tfOpName:"TruncatedNormal",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"means",name:"mean",type:"number",defaultValue:0},{tfName:"stddev",name:"stdDev",type:"number",defaultValue:1},{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"Zeros",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"ZerosLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"Multinomial",category:"creation",inputs:[{start:0,name:"logits",type:"tensor"},{start:1,name:"numSamples",type:"number"}],attrs:[{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number"},{tfName:"T",name:"dtype",type:"dtype"},{tfName:"output_dtype",name:"output_dtype",type:"dtype"}]}],LD=Object.freeze(Object.defineProperty({__proto__:null,json:RD},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const zD=[{tfOpName:"NonMaxSuppressionV2",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV3",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV4",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"T_threshold",name:"threshold",type:"dtype",notSupported:!0},{tfName:"pad_to_max_output_size",name:"padToMaxOutputSize",type:"bool"}]},{tfOpName:"NonMaxSuppressionV5",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"},{start:5,name:"softNmsSigma",type:"number"}]},{tfOpName:"Where",category:"dynamic",inputs:[{start:0,name:"condition",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ListDiff",category:"dynamic",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],BD=Object.freeze(Object.defineProperty({__proto__:null,json:zD},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const jD=[{tfOpName:"LowerBound",category:"evaluation",inputs:[{start:0,name:"sortedSequence",type:"tensor"},{start:1,name:"values",type:"tensor"}]},{tfOpName:"TopKV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"k",type:"number"}],attrs:[{tfName:"sorted",name:"sorted",type:"bool"}]},{tfOpName:"UpperBound",category:"evaluation",inputs:[{start:0,name:"sortedSequence",type:"tensor"},{start:1,name:"values",type:"tensor"}]},{tfOpName:"Unique",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"UniqueV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]}],MD=Object.freeze(Object.defineProperty({__proto__:null,json:jD},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const VD=[{tfOpName:"PlaceholderWithDefault",category:"graph",inputs:[{start:0,name:"default",type:"tensor"}],attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Placeholder",category:"graph",attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Const",category:"graph"},{tfOpName:"Identity",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IdentityN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Snapshot",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Rank",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Size",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Shape",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"ShapeN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Print",category:"graph",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"data",type:"tensors"}],attrs:[{tfName:"message",name:"message",type:"string"},{tfName:"first_n",name:"firstN",type:"number",notSupported:!0},{tfName:"summarize",name:"summarize",type:"number",defaultValue:3}]},{tfOpName:"NoOp",category:"graph",inputs:[]},{tfOpName:"StopGradient",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"FakeQuantWithMinMaxVars",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"min",name:"min",type:"number"},{tfName:"max",name:"max",type:"number"}]}],UD=Object.freeze(Object.defineProperty({__proto__:null,json:VD},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const WD=[{tfOpName:"HashTable",category:"hash_table",inputs:[],attrs:[{tfName:"shared_name",name:"sharedName",type:"string"},{tfName:"use_node_name_sharing",name:"useNodeNameSharing",type:"bool"},{tfName:"key_dtype",name:"keyDType",type:"dtype"},{tfName:"value_dtype",name:"valueDType",type:"dtype"}]},{tfOpName:"HashTableV2",category:"hash_table",inputs:[],attrs:[{tfName:"shared_name",name:"sharedName",type:"string"},{tfName:"use_node_name_sharing",name:"useNodeNameSharing",type:"bool"},{tfName:"key_dtype",name:"keyDType",type:"dtype"},{tfName:"value_dtype",name:"valueDType",type:"dtype"}]},{tfOpName:"LookupTableImport",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableImportV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableFind",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableFindV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableSize",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"}]},{tfOpName:"LookupTableSizeV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"}]},{tfOpName:"InitializeTable",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}]},{tfOpName:"InitializeTableV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}]}],HD=Object.freeze(Object.defineProperty({__proto__:null,json:WD},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const GD=[{tfOpName:"ResizeBilinear",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"half_pixel_centers",name:"halfPixelCenters",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ResizeNearestNeighbor",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"half_pixel_centers",name:"halfPixelCenters",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"CropAndResize",category:"image",inputs:[{start:0,name:"image",type:"tensor"},{start:1,name:"boxes",type:"tensor"},{start:2,name:"boxInd",type:"tensor"},{start:3,name:"cropSize",type:"number[]"}],attrs:[{tfName:"method",name:"method",type:"string"},{tfName:"extrapolation_value",name:"extrapolationValue",type:"number"}]},{tfOpName:"ImageProjectiveTransformV3",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"transforms",type:"tensor"},{start:2,name:"outputShape",type:"number[]"},{start:3,name:"fillValue",type:"number"}],attrs:[{tfName:"interpolation",name:"interpolation",type:"string"},{tfName:"fill_mode",name:"fillMode",type:"string"}]}],qD=Object.freeze(Object.defineProperty({__proto__:null,json:GD},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const KD=[{tfOpName:"Equal",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NotEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Greater",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"GreaterEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Less",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LessEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalAnd",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalNot",category:"logical",inputs:[{start:0,name:"a",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalOr",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Select",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SelectV2",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BitwiseAnd",category:"logical",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}]}],QD=Object.freeze(Object.defineProperty({__proto__:null,json:KD},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const XD=[{tfOpName:"_FusedMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4},{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"leakyrelu_alpha",name:"leakyreluAlpha",type:"number",defaultValue:.2},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMulV2",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Transpose",category:"matrices",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"perm",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Einsum",category:"matrices",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}],attrs:[{tfName:"equation",name:"equation",type:"string"},{tfName:"N",name:"n",type:"number",defaultValue:2},{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"MatrixBandPart",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"numLower",type:"tensor"},{start:1,name:"numUpper",type:"tensor"}]}],YD=Object.freeze(Object.defineProperty({__proto__:null,json:XD},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ZD=[{tfOpName:"EuclideanNorm",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool",defaultValue:!1}]},{tfOpName:"FusedBatchNorm",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV2",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV3",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"LRN",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"depth_radius",name:"radius",type:"number",defaultValue:5},{tfName:"bias",name:"bias",type:"number",defaultValue:1},{tfName:"alpha",name:"alpha",type:"number",defaultValue:1},{tfName:"beta",name:"beta",type:"number",defaultValue:.5}]},{tfOpName:"Softmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"LogSoftmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]}],JD=Object.freeze(Object.defineProperty({__proto__:null,json:ZD},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const eP=[{tfOpName:"Bincount",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"size",type:"number"},{start:2,name:"weights",type:"tensor"}]},{tfOpName:"DenseBincount",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"size",type:"number"},{start:2,name:"weights",type:"tensor"}],attrs:[{tfName:"binary_output",name:"binaryOutput",type:"bool"}]},{tfOpName:"Max",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Mean",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Min",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Sum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"All",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Any",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"ArgMax",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"ArgMin",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"Prod",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cumprod",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}],attrs:[{tfName:"exclusive",name:"exclusive",type:"bool"},{tfName:"reverse",name:"reverse",type:"bool"}]},{tfOpName:"Cumsum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}],attrs:[{tfName:"exclusive",name:"exclusive",type:"bool"},{tfName:"reverse",name:"reverse",type:"bool"}]}],tP=Object.freeze(Object.defineProperty({__proto__:null,json:eP},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const nP=[{tfOpName:"ConcatV2",category:"slice_join",inputs:[{start:0,end:-1,name:"tensors",type:"tensors"},{start:-1,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"Concat",category:"slice_join",inputs:[{start:1,end:0,name:"tensors",type:"tensors"},{start:0,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"GatherV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"axis",type:"number",defaultValue:0}],attrs:[{tfName:"batch_dims",name:"batchDims",type:"number",defaultValue:0}]},{tfOpName:"Gather",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",notSupported:!0}]},{tfOpName:"Reverse",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"dims",type:"bool[]"}]},{tfOpName:"ReverseV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}]},{tfOpName:"Slice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"size",type:"number[]"}]},{tfOpName:"StridedSlice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"end",type:"number[]"},{start:3,name:"strides",type:"number[]"}],attrs:[{tfName:"begin_mask",name:"beginMask",type:"number",defaultValue:0},{tfName:"end_mask",name:"endMask",type:"number",defaultValue:0},{tfName:"new_axis_mask",name:"newAxisMask",type:"number",defaultValue:0},{tfName:"ellipsis_mask",name:"ellipsisMask",type:"number",defaultValue:0},{tfName:"shrink_axis_mask",name:"shrinkAxisMask",type:"number",defaultValue:0}]},{tfOpName:"Pack",category:"slice_join",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0}]},{tfOpName:"Unpack",category:"slice_join",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0},{tfName:"num",name:"num",type:"number",defaultValue:0,notSupported:!0}]},{tfOpName:"Tile",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"reps",type:"number[]"}]},{tfOpName:"Split",category:"slice_join",inputs:[{start:0,name:"axis",type:"number",defaultValue:0},{start:1,name:"x",type:"tensor"}],attrs:[{tfName:"num_split",name:"numOrSizeSplits",type:"number",defaultValue:1}]},{tfOpName:"SplitV",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"numOrSizeSplits",type:"number[]"},{start:2,name:"axis",type:"number",defaultValue:0}]},{tfOpName:"ScatterNd",category:"slice_join",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"values",type:"tensor"},{start:2,name:"shape",type:"number[]"}]},{tfOpName:"GatherNd",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}]},{tfOpName:"SparseToDense",category:"slice_join",inputs:[{start:0,name:"sparseIndices",type:"tensor"},{start:1,name:"outputShape",type:"number[]"},{start:2,name:"sparseValues",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",defaultValue:!1,notSupported:!0}]},{tfOpName:"TensorScatterUpdate",category:"slice_join",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"values",type:"tensor"}]}],rP=Object.freeze(Object.defineProperty({__proto__:null,json:nP},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const sP=[{tfOpName:"SparseFillEmptyRows",category:"sparse",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"values",type:"tensor"},{start:2,name:"denseShape",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}]},{tfOpName:"SparseReshape",category:"sparse",inputs:[{start:0,name:"inputIndices",type:"tensor"},{start:1,name:"inputShape",type:"tensor"},{start:2,name:"newShape",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SparseSegmentMean",category:"sparse",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"segmentIds",type:"tensor"}]},{tfOpName:"SparseSegmentSum",category:"sparse",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"segmentIds",type:"tensor"}]}],aP=Object.freeze(Object.defineProperty({__proto__:null,json:sP},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const oP=[{tfOpName:"FFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"RFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]},{tfOpName:"IRFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]}],iP=Object.freeze(Object.defineProperty({__proto__:null,json:oP},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const lP=[{tfOpName:"StaticRegexReplace",category:"string",inputs:[{start:0,name:"input",type:"tensor"}],attrs:[{tfName:"pattern",name:"pattern",type:"string"},{tfName:"rewrite",name:"rewrite",type:"string"},{tfName:"replace_global",name:"replaceGlobal",type:"bool"}]},{tfOpName:"StringNGrams",category:"string",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"dataSplits",type:"tensor"}],attrs:[{tfName:"separator",name:"separator",type:"string"},{tfName:"ngram_widths",name:"nGramWidths",type:"number[]"},{tfName:"left_pad",name:"leftPad",type:"string"},{tfName:"right_pad",name:"rightPad",type:"string"},{tfName:"pad_width",name:"padWidth",type:"number"},{tfName:"preserve_short_sequences",name:"preserveShortSequences",type:"bool"}],outputs:["ngrams","ngrams_splits"]},{tfOpName:"StringSplit",category:"string",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"delimiter",type:"tensor"}],attrs:[{tfName:"skip_empty",name:"skipEmpty",type:"bool"}],outputs:["indices","values","shape"]},{tfOpName:"StringToHashBucketFast",category:"string",inputs:[{start:0,name:"input",type:"tensor"}],attrs:[{tfName:"num_buckets",name:"numBuckets",type:"number"}]}],uP=Object.freeze(Object.defineProperty({__proto__:null,json:lP},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const cP=[{tfOpName:"Cast",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"SrcT",name:"sdtype",type:"dtype",notSupported:!0},{tfName:"DstT",name:"dtype",type:"dtype"}]},{tfOpName:"ExpandDims",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"MirrorPad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"mode",name:"mode",type:"string"}]},{tfOpName:"Pad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"constant_value",name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"PadV2",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"},{start:2,name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"Reshape",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}]},{tfOpName:"EnsureShape",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}]},{tfOpName:"Squeeze",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"axis",tfDeprecatedName:"squeeze_dims",name:"axis",type:"number[]"}]},{tfOpName:"SpaceToBatchND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"paddings",type:"number[]"}]},{tfOpName:"BatchToSpaceND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"crops",type:"number[]"}]},{tfOpName:"DepthToSpace",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"block_size",name:"blockSize",type:"number"},{tfName:"data_format",name:"dataFormat",type:"string"}]},{tfOpName:"BroadcastTo",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}],attrs:[]},{tfOpName:"BroadcastArgs",category:"transformation",inputs:[{start:0,name:"s0",type:"tensor"},{start:1,name:"s1",type:"tensor"}],attrs:[]}],pP=Object.freeze(Object.defineProperty({__proto__:null,json:cP},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class qh{static get Instance(){return this._instance||(this._instance=new this)}constructor(){const e=[ID,OD,DD,FD,LD,BD,MD,UD,HD,qD,QD,YD,JD,tP,rP,aP,iP,uP,pP],n=[].concat(...e.map(r=>r.json));this.opMappers=n.reduce((r,s)=>(r[s.tfOpName]=s,r),{})}transformGraph(e,n={}){const r=e.node,s=[],a=[],o=[],i=r.reduce((w,b)=>(w[b.name]=this.mapNode(b),b.op.startsWith("Placeholder")?s.push(w[b.name]):b.op==="Const"?a.push(w[b.name]):(b.input==null||b.input.length===0)&&o.push(w[b.name]),w),{});let l=[];const u=[];let p={},c={};n!=null&&(p=this.mapSignatureEntries(n.inputs),c=this.mapSignatureEntries(n.outputs));const f=Object.keys(i);f.forEach(w=>{const b=i[w];b.inputNames.forEach((y,S)=>{const[v,,x]=un(y),T=i[v];if(T.outputs!=null){const _=T.outputs.indexOf(x);if(_!==-1){const A=`${v}:${_}`;b.inputNames[S]=A}}b.inputs.push(T),T.children.push(b)})}),Object.keys(c).length===0?f.forEach(w=>{const b=i[w];b.children.length===0&&u.push(b)}):Object.keys(c).forEach(w=>{const[b]=un(w),y=i[b];y!=null&&(y.signatureKey=c[w],u.push(y))}),Object.keys(p).length>0?Object.keys(p).forEach(w=>{const[b]=un(w),y=i[b];y&&(y.signatureKey=p[w],l.push(y))}):l=s;let h={};e.library!=null&&e.library.function!=null&&(h=e.library.function.reduce((w,b)=>(w[b.signature.name]=this.mapFunction(b),w),{}));const m={nodes:i,inputs:l,outputs:u,weights:a,placeholders:s,signature:n,functions:h};return o.length>0&&(m.initNodes=o),m}mapSignatureEntries(e){return Object.keys(e||{}).reduce((n,r)=>(n[e[r].name]=r,n),{})}mapNode(e){const n=ak(e.op)||this.opMappers[e.op]||{};e.attr==null&&(e.attr={});const r={name:e.name,op:e.op,category:n.category,inputNames:(e.input||[]).map(s=>s.startsWith("^")?s.slice(1):s),inputs:[],children:[],inputParams:{},attrParams:{},rawAttrs:e.attr,outputs:n.outputs};return n.inputs!=null&&(r.inputParams=n.inputs.reduce((s,a)=>(s[a.name]={type:a.type,inputIndexStart:a.start,inputIndexEnd:a.end},s),{})),n.attrs!=null&&(r.attrParams=n.attrs.reduce((s,a)=>{const o=a.type;let i;switch(a.type){case"string":i=$c(e.attr,a.tfName,a.defaultValue),i===void 0&&a.tfDeprecatedName&&(i=$c(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"string[]":i=Fc(e.attr,a.tfName,a.defaultValue),i===void 0&&a.tfDeprecatedName&&(i=Fc(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"number":i=Ac(e.attr,a.tfName,a.defaultValue||0),i===void 0&&a.tfDeprecatedName&&(i=Ac(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"number[]":i=Pc(e.attr,a.tfName,a.defaultValue),i===void 0&&a.tfDeprecatedName&&(i=Pc(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"bool":i=Ic(e.attr,a.tfName,a.defaultValue),i===void 0&&a.tfDeprecatedName&&(i=Ic(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"bool[]":i=Lc(e.attr,a.tfName,a.defaultValue),i===void 0&&a.tfDeprecatedName&&(i=Lc(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"shape":i=Dc(e.attr,a.tfName,a.defaultValue),i===void 0&&a.tfDeprecatedName&&(i=Dc(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"shape[]":i=Rc(e.attr,a.tfName,a.defaultValue),i===void 0&&a.tfDeprecatedName&&(i=Rc(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"dtype":i=Oc(e.attr,a.tfName,a.defaultValue),i===void 0&&a.tfDeprecatedName&&(i=Oc(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"dtype[]":i=Cc(e.attr,a.tfName,a.defaultValue),i===void 0&&a.tfDeprecatedName&&(i=Cc(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"func":i=Kh(e.attr,a.tfName,a.defaultValue),i===void 0&&a.tfDeprecatedName&&(i=Kh(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"tensor":case"tensors":break;default:throw new Error(`Unsupported param type: ${a.type} for op: ${e.op}`)}return s[a.name]={value:i,type:o},s},{})),r}mapFunction(e){const n=e.nodeDef,r=[],s=[];let a={};n!=null&&(a=n.reduce((c,f)=>(c[f.name]=this.mapNode(f),f.op==="Const"&&s.push(c[f.name]),c),{}));const o=[],i=[];e.signature.inputArg.forEach(c=>{const[f]=un(c.name),h={name:f,op:"Placeholder",inputs:[],inputNames:[],category:"graph",inputParams:{},attrParams:{dtype:{value:sd(c.type),type:"dtype"}},children:[]};h.signatureKey=c.name,o.push(h),a[f]=h}),Object.keys(a).forEach(c=>{const f=a[c];f.inputNames.forEach((h,m)=>{const[w,,b]=un(h),y=a[w];if(y.outputs!=null){const S=y.outputs.indexOf(b);if(S!==-1){const v=`${w}:${S}`;f.inputNames[m]=v}}f.inputs.push(y),y.children.push(f)})});const u=e.ret;e.signature.outputArg.forEach(c=>{const[f,h]=un(u[c.name]),m=a[f];m!=null&&(m.defaultOutput=h,i.push(m))});const p=this.mapArgsToSignature(e);return{nodes:a,inputs:o,outputs:i,weights:s,placeholders:r,signature:p}}mapArgsToSignature(e){return{methodName:e.signature.name,inputs:e.signature.inputArg.reduce((n,r)=>(n[r.name]=this.mapArgToTensorInfo(r),n),{}),outputs:e.signature.outputArg.reduce((n,r)=>(n[r.name]=this.mapArgToTensorInfo(r,e.ret),n),{})}}mapArgToTensorInfo(e,n){let r=e.name;return n!=null&&(r=n[r]),{name:r,dtype:e.type}}}function fP(t){const e=V().global;if(typeof e.atob<"u")return e.atob(t);if(typeof Buffer<"u")return new Buffer(t,"base64").toString();throw new Error("Unable to decode base64 in this environment. Missing built-in atob() or Buffer()")}function ok(t,e){const n=Array.isArray(t)?String.fromCharCode.apply(null,t):fP(t);return e?n:n.toLowerCase()}function $c(t,e,n,r=!1){const s=t[e];return s!=null?ok(s.s,r):n}function Ic(t,e,n){const r=t[e];return r?r.b:n}function Ac(t,e,n){const r=t[e]||{},s=r.i!=null?r.i:r.f!=null?r.f:n;return typeof s=="number"?s:parseInt(s,10)}function sd(t){switch(typeof t=="string"&&(t=tt[t]),t){case tt.DT_FLOAT:case tt.DT_HALF:return"float32";case tt.DT_INT32:case tt.DT_INT64:case tt.DT_INT8:case tt.DT_UINT8:return"int32";case tt.DT_BOOL:return"bool";case tt.DT_DOUBLE:return"float32";case tt.DT_STRING:return"string";case tt.DT_COMPLEX64:case tt.DT_COMPLEX128:return"complex64";default:return null}}function Kh(t,e,n){const r=t[e];return r&&r.func?r.func.name:n}function Oc(t,e,n){const r=t[e];return r&&r.type?sd(r.type):n}function Cc(t,e,n){const r=t[e];return r&&r.list&&r.list.type?r.list.type.map(s=>sd(s)):n}function ik(t){if(!t.unknownRank)return t.dim!=null?t.dim.map(e=>typeof e.size=="number"?e.size:parseInt(e.size,10)):[]}function Dc(t,e,n){const r=t[e];return r&&r.shape?ik(r.shape):n}function Pc(t,e,n){const r=t[e];return r?((r.list.f&&r.list.f.length?r.list.f:r.list.i)||[]).map(s=>typeof s=="number"?s:parseInt(s,10)):n}function Fc(t,e,n,r=!1){const s=t[e];return s&&s.list&&s.list.s?s.list.s.map(a=>ok(a,r)):n}function Rc(t,e,n){const r=t[e];return r&&r.list&&r.list.shape?r.list.shape.map(s=>ik(s)):n}function Lc(t,e,n){const r=t[e];return r&&r.list&&r.list.b?r.list.b:n}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class dP{constructor(e,n,r){this.node=e,this.tensorMap=n,this.context=r,this.inputs=[],this.attrs={},this.inputs=e.inputNames.map(s=>this.getInput(s)),e.rawAttrs!=null&&(this.attrs=Object.keys(e.rawAttrs).reduce((s,a)=>(s[a]=this.getAttr(a),s),{}))}getInput(e){return Ce(e,this.tensorMap,this.context)}getAttr(e,n){const r=this.node.rawAttrs[e];if(r.tensor!=null)return Ce(e,this.tensorMap,this.context);if(r.i!=null||r.f!=null)return Ac(this.node.rawAttrs,e,n);if(r.s!=null)return $c(this.node.rawAttrs,e,n);if(r.b!=null)return Ic(this.node.rawAttrs,e,n);if(r.shape!=null)return Dc(this.node.rawAttrs,e,n);if(r.type!=null)return Oc(this.node.rawAttrs,e,n);if(r.list!=null){if(r.list.i!=null||r.list.f!=null)return Pc(this.node.rawAttrs,e,n);if(r.list.s!=null)return Fc(this.node.rawAttrs,e,n);if(r.list.shape!=null)return Rc(this.node.rawAttrs,e,n);if(r.list.b!=null)return Lc(this.node.rawAttrs,e,n);if(r.list.type!=null)return Cc(this.node.rawAttrs,e,n)}return n}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Pe=Object.freeze(Object.defineProperty({__proto__:null,OP_SCOPE_SUFFIX:Xp,abs:rt,acos:pv,acosh:fv,add:M,addN:dv,all:hv,any:mv,argMax:gv,argMin:yv,asin:wv,asinh:vv,atan:bv,atan2:kv,atanh:Sv,avgPool:nf,avgPool3d:Tv,basicLSTMCell:_v,batchNorm:fo,batchNorm2d:$v,batchNorm3d:Iv,batchNorm4d:Av,batchToSpaceND:rf,bincount:sf,bitwiseAnd:Ov,booleanMaskAsync:v2,broadcastArgs:Cv,broadcastTo:ba,buffer:tn,cast:re,ceil:Dv,clipByValue:Pv,clone:mn,complex:kn,concat:Le,concat1d:Fv,concat2d:Rv,concat3d:Lv,concat4d:zv,conv1d:Bv,conv2d:ho,conv2dTranspose:Mv,conv3d:Vv,conv3dTranspose:Uv,cos:Wv,cosh:Hv,cosineWindow:El,cumprod:Gv,cumsum:qv,denseBincount:Kv,depthToSpace:Qv,depthwiseConv2d:gl,diag:Xv,dilation2d:Yv,div:oe,divNoNan:Jv,dot:eb,dropout:E2,einsum:vr,elu:lf,enclosingPowerOfTwo:Hf,ensureShape:tb,equal:of,erf:nb,euclideanNorm:ab,exp:tr,expandDims:ln,expm1:ob,eye:cf,fft:kl,fill:Hs,floor:pf,floorDiv:ef,fused:T2,gather:ff,gatherND:N2,greater:yo,greaterEqual:df,ifft:Za,imag:wo,image:qf,inTopKAsync:x2,irfft:Bf,isFinite:ib,isInf:lb,isNaN:ub,leakyRelu:hf,less:Vi,lessEqual:yl,linalg:P2,linspace:cb,localResponseNormalization:pb,log:Fs,log1p:mf,logSigmoid:db,logSoftmax:hb,logSumExp:yf,logicalAnd:Qa,logicalNot:wf,logicalOr:vf,logicalXor:mb,losses:F2,lowerBound:gb,matMul:Z,max:Ar,maxPool:bf,maxPool3d:yb,maxPoolWithArgmax:wb,maximum:kf,mean:Xa,meshgrid:vb,min:Mi,minimum:Ya,mirrorPad:bb,mod:kb,moments:Sb,movingAverage:b2,mul:R,multiRNNCell:Nb,multinomial:Eb,neg:Ut,norm:go,notEqual:Sf,oneHot:Ui,ones:zn,onesLike:xb,op:N,outerProduct:Tb,pad:Gs,pad1d:_b,pad2d:$b,pad3d:Ib,pad4d:Ab,pool:Ob,pow:Ps,prelu:Ef,print:Jp,prod:Cb,raggedGather:Db,raggedRange:Pb,raggedTensorToTensor:Fb,rand:Rb,randomGamma:jb,randomNormal:Ff,randomStandardNormal:Mb,randomUniform:bl,randomUniformInt:Vb,range:Rs,real:Ls,reciprocal:Ub,relu:vo,relu6:Rf,reshape:I,reverse:rr,reverse1d:Wb,reverse2d:Hb,reverse3d:Gb,reverse4d:qb,rfft:Sl,round:Lf,rsqrt:Kb,scalar:K,scatterND:k2,searchSorted:vl,selu:Qb,separableConv2d:Xb,setdiff1dAsync:Yb,sigmoid:Ir,sign:Zb,signal:D2,sin:Jb,sinh:e2,slice:J,slice1d:t2,slice2d:n2,slice3d:r2,slice4d:s2,softmax:zf,softplus:gf,spaceToBatchND:Nf,sparse:R2,sparseToDense:S2,spectral:C2,split:zs,sqrt:nn,square:It,squaredDifference:jf,squeeze:bo,stack:sn,step:Mf,stridedSlice:a2,string:L2,sub:H,sum:ae,tan:o2,tanh:ji,tensor:Vt,tensor1d:gt,tensor2d:Ss,tensor3d:Vf,tensor4d:i2,tensor5d:l2,tensor6d:u2,tensorScatterUpdate:p2,tile:ks,topk:f2,transpose:Ja,truncatedNormal:d2,unique:h2,unsortedSegmentSum:m2,unstack:cr,upperBound:g2,variable:y2,where:gn,whereAsync:Wf,zeros:nr,zerosLike:ct},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const hP=(t,e,n,r=Pe)=>{switch(t.op){case"BiasAdd":case"AddV2":case"Add":return[r.add(d("a",t,e,n),d("b",t,e,n))];case"AddN":return[r.addN(d("tensors",t,e,n))];case"FloorMod":case"Mod":return[r.mod(d("a",t,e,n),d("b",t,e,n))];case"Mul":return[r.mul(d("a",t,e,n),d("b",t,e,n))];case"RealDiv":case"Div":return[r.div(d("a",t,e,n),d("b",t,e,n))];case"DivNoNan":return[r.divNoNan(d("a",t,e,n),d("b",t,e,n))];case"FloorDiv":return[r.floorDiv(d("a",t,e,n),d("b",t,e,n))];case"Sub":return[r.sub(d("a",t,e,n),d("b",t,e,n))];case"Minimum":return[r.minimum(d("a",t,e,n),d("b",t,e,n))];case"Maximum":return[r.maximum(d("a",t,e,n),d("b",t,e,n))];case"Pow":return[r.pow(d("a",t,e,n),d("b",t,e,n))];case"SquaredDifference":return[r.squaredDifference(d("a",t,e,n),d("b",t,e,n))];default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const mP=(t,e,n,r=Pe)=>{switch(t.op){case"Abs":case"ComplexAbs":return[r.abs(d("x",t,e,n))];case"Acos":return[r.acos(d("x",t,e,n))];case"Acosh":return[r.acosh(d("x",t,e,n))];case"Asin":return[r.asin(d("x",t,e,n))];case"Asinh":return[r.asinh(d("x",t,e,n))];case"Atan":return[r.atan(d("x",t,e,n))];case"Atan2":return[r.atan2(d("x",t,e,n),d("y",t,e,n))];case"Atanh":return[r.atanh(d("x",t,e,n))];case"Ceil":return[r.ceil(d("x",t,e,n))];case"Complex":return[r.complex(d("real",t,e,n),d("imag",t,e,n))];case"Cos":return[r.cos(d("x",t,e,n))];case"Cosh":return[r.cosh(d("x",t,e,n))];case"Elu":return[r.elu(d("x",t,e,n))];case"Erf":return[r.erf(d("x",t,e,n))];case"Exp":return[r.exp(d("x",t,e,n))];case"Expm1":return[r.expm1(d("x",t,e,n))];case"Floor":return[r.floor(d("x",t,e,n))];case"Log":return[r.log(d("x",t,e,n))];case"Log1p":return[r.log1p(d("x",t,e,n))];case"Imag":return[r.imag(d("x",t,e,n))];case"Neg":return[r.neg(d("x",t,e,n))];case"Reciprocal":return[r.reciprocal(d("x",t,e,n))];case"Real":return[r.real(d("x",t,e,n))];case"Relu":return[r.relu(d("x",t,e,n))];case"Round":return[r.round(d("x",t,e,n))];case"Selu":return[r.selu(d("x",t,e,n))];case"Sigmoid":return[r.sigmoid(d("x",t,e,n))];case"Sin":return[r.sin(d("x",t,e,n))];case"Sign":return[r.sign(d("x",t,e,n))];case"Sinh":return[r.sinh(d("x",t,e,n))];case"Softplus":return[r.softplus(d("x",t,e,n))];case"Sqrt":return[r.sqrt(d("x",t,e,n))];case"Square":return[r.square(d("x",t,e,n))];case"Tanh":return[r.tanh(d("x",t,e,n))];case"Tan":return[r.tan(d("x",t,e,n))];case"ClipByValue":return[r.clipByValue(d("x",t,e,n),d("clipValueMin",t,e,n),d("clipValueMax",t,e,n))];case"Relu6":return[r.relu6(d("x",t,e,n))];case"Rsqrt":return[r.rsqrt(Ce(t.inputNames[0],e,n))];case"LeakyRelu":return[r.leakyRelu(d("x",t,e,n),d("alpha",t,e,n))];case"Prelu":return[r.prelu(d("x",t,e,n),d("alpha",t,e,n))];case"IsNan":return[r.isNaN(Ce(t.inputNames[0],e,n))];case"IsInf":return[r.isInf(Ce(t.inputNames[0],e,n))];case"IsFinite":return[r.isFinite(Ce(t.inputNames[0],e,n))];default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kt(t,e,n=""){if(!(typeof t=="number"||typeof e=="number")){k(t.length===e.length,()=>n+` Shapes ${t} and ${e} must match`);for(let r=0;r<t.length;r++){const s=t[r],a=e[r];k(s<0||a<0||s===a,()=>n+` Shapes ${t} and ${e} must match`)}}}function Qh(t){return!(typeof t=="number"||t.some(e=>e<0))}function ra(t,e,n){let r=zc(t,n);const s=!Qh(r);if(s&&e.length===0)throw new Error(`Tried to calculate elements of an empty list with non-fully-defined elementShape: ${r}`);if(s&&e.forEach(a=>{r=zc(a.shape,r)}),!Qh(r))throw new Error(`Non-fully-defined elementShape: ${r}`);return r}function zc(t,e){if(typeof t=="number")return e;if(typeof e=="number")return t;if(t.length!==e.length)throw new Error(`Incompatible ranks during merge: ${t} vs. ${e}`);const n=[];for(let r=0;r<t.length;++r){const s=t[r],a=e[r];if(s>=0&&a>=0&&s!==a)throw new Error(`Incompatible shape during merge: ${t} vs. ${e}`);n[r]=s>=0?s:a}return n}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class gP{constructor(e,n,r,s,a,o,i){this.name=e,this.dtype=n,this.maxSize=r,this.elementShape=s,this.identicalElementShapes=a,this.dynamicSize=o,this.clearAfterRead=i,this.tensors=[],this.closed_=!1,this.idTensor=K(0),zt(this.idTensor)}get id(){return this.idTensor.id}get closed(){return this.closed_}clearAndClose(e){this.tensors.forEach(n=>{(e==null||!e.has(n.tensor.id))&&n.tensor.dispose()}),this.tensors=[],this.closed_=!0,this.idTensor.dispose()}size(){return this.tensors.length}read(e){if(this.closed_)throw new Error(`TensorArray ${this.name} has already been closed.`);if(e<0||e>=this.size())throw new Error(`Tried to read from index ${e}, but array size is: ${this.size()}`);const n=this.tensors[e];if(n.cleared)throw new Error(`TensorArray ${this.name}: Could not read index ${e} twice because it was cleared after a previous read (perhaps try setting clear_after_read = false?).`);return this.clearAfterRead&&(n.cleared=!0),n.read=!0,n.tensor}readMany(e){return e.map(n=>this.read(n))}write(e,n){if(this.closed_)throw new Error(`TensorArray ${this.name} has already been closed.`);if(e<0||!this.dynamicSize&&e>=this.maxSize)throw new Error(`Tried to write to index ${e}, but array is not resizeable and size is: ${this.maxSize}`);const r=this.tensors[e]||{};if(n.dtype!==this.dtype)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${e},
          because the value dtype is ${n.dtype}, but TensorArray dtype is ${this.dtype}.`);if(this.size()===0&&(this.elementShape==null||this.elementShape.length===0)&&(this.elementShape=n.shape),kt(this.elementShape,n.shape,`TensorArray ${this.name}: Could not write to TensorArray index ${e}.`),r.read)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${e}, because it has already been read.`);if(r.written)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${e}, because it has already been written.`);r.tensor=n,zt(n),r.written=!0,this.tensors[e]=r}writeMany(e,n){if(e.length!==n.length)throw new Error(`TensorArray ${this.name}: could not write multiple tensors,because the index size: ${e.length} is not the same as tensors size: ${n.length}.`);e.forEach((r,s)=>this.write(r,n[s]))}gather(e,n){if(n&&n!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but gather requested dtype ${n}`);if(e)e=e.slice(0,this.size());else{e=[];for(let s=0;s<this.size();s++)e.push(s)}if(e.length===0)return Vt([],[0].concat(this.elementShape));const r=this.readMany(e);return kt(this.elementShape,r[0].shape,"TensorArray shape mismatch: "),sn(r,0)}concat(e){if(e&&e!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but concat requested dtype ${e}`);if(this.size()===0)return Vt([],[0].concat(this.elementShape));const n=[];for(let s=0;s<this.size();s++)n.push(s);const r=this.readMany(n);return kt(this.elementShape,r[0].shape,`TensorArray shape mismatch: tensor array shape (${this.elementShape}) vs first tensor shape (${r[0].shape})`),Le(r,0)}scatter(e,n){if(n.dtype!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${n.dtype}`);if(e.length!==n.shape[0])throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${e.length} vs. ${n.shape[0]}`);const r=Math.max(...e);if(!this.dynamicSize&&r>=this.maxSize)throw new Error(`Max index must be < array size (${r}  vs. ${this.maxSize})`);this.writeMany(e,cr(n,0))}split(e,n){if(n.dtype!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${n.dtype}`);let r=0;const s=e.map(l=>(r+=l,r));if(r!==n.shape[0])throw new Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        ${r}, and tensor's shape is: ${n.shape}`);if(!this.dynamicSize&&e.length!==this.maxSize)throw new Error(`TensorArray's size is not equal to the size of lengths (${this.maxSize} vs. ${e.length}), and the TensorArray is not marked as dynamically resizeable`);const a=r===0?0:n.size/r,o=[];Y(()=>{n=I(n,[1,r,a]);for(let l=0;l<e.length;++l){const p=[0,l===0?0:s[l-1],0],c=[1,e[l],a];o[l]=I(J(n,p,c),this.elementShape)}return o});const i=[];for(let l=0;l<e.length;l++)i[l]=l;this.writeMany(i,o)}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Mr{get id(){return this.idTensor.id}constructor(e,n,r,s=-1){this.tensors=e,this.elementShape=n,this.elementDtype=r,e!=null&&e.forEach(a=>{if(r!==a.dtype)throw new Error(`Invalid data types; op elements ${r}, but list elements ${a.dtype}`);kt(n,a.shape,"TensorList shape mismatch: "),zt(a)}),this.idTensor=K(0),this.maxNumElements=s,zt(this.idTensor)}copy(){return new Mr([...this.tensors],this.elementShape,this.elementDtype)}clearAndClose(e){this.tensors.forEach(n=>{(e==null||!e.has(n.id))&&n.dispose()}),this.tensors.length=0,this.idTensor.dispose()}size(){return this.tensors.length}stack(e,n,r=-1){if(n!==this.elementDtype)throw new Error(`Invalid data types; op elements ${n}, but list elements ${this.elementDtype}`);if(r!==-1&&this.tensors.length!==r)throw new Error(`Operation expected a list with ${r} elements but got a list with ${this.tensors.length} elements.`);kt(e,this.elementShape,"TensorList shape mismatch: ");const s=ra(this.elementShape,this.tensors,e);return Y(()=>{const a=this.tensors.map(o=>I(o,s));return sn(a,0)})}popBack(e,n){if(n!==this.elementDtype)throw new Error(`Invalid data types; op elements ${n}, but list elements ${this.elementDtype}`);if(this.size()===0)throw new Error("Trying to pop from an empty list.");const r=ra(this.elementShape,this.tensors,e),s=this.tensors.pop();return s.kept=!1,kt(s.shape,e,"TensorList shape mismatch: "),I(s,r)}pushBack(e){if(e.dtype!==this.elementDtype)throw new Error(`Invalid data types; op elements ${e.dtype}, but list elements ${this.elementDtype}`);if(kt(e.shape,this.elementShape,"TensorList shape mismatch: "),this.maxNumElements===this.size())throw new Error("Trying to push element into a full list.");zt(e),this.tensors.push(e)}resize(e){if(e<0)throw new Error(`TensorListResize expects size to be non-negative. Got: ${e}`);if(this.maxNumElements!==-1&&e>this.maxNumElements)throw new Error(`TensorListResize input size ${e} is greater maxNumElement ${this.maxNumElements}.`);const n=new Mr([],this.elementShape,this.elementDtype,this.maxNumElements);n.tensors.length=e;for(let r=0;r<Math.min(this.tensors.length,e);++r)n.tensors[r]=this.tensors[r];return n}getItem(e,n,r){if(r!==this.elementDtype)throw new Error(`Invalid data types; op elements ${r}, but list elements ${this.elementDtype}`);if(e<0||e>this.tensors.length)throw new Error(`Trying to access element ${e} in a list with ${this.tensors.length} elements.`);if(this.tensors[e]==null)throw new Error(`element at index ${e} is null.`);kt(this.tensors[e].shape,n,"TensorList shape mismatch: ");const s=ra(this.elementShape,this.tensors,n);return I(this.tensors[e],s)}setItem(e,n){if(n.dtype!==this.elementDtype)throw new Error(`Invalid data types; op elements ${n.dtype}, but list elements ${this.elementDtype}`);if(e<0||this.maxNumElements!==-1&&e>=this.maxNumElements)throw new Error(`Trying to set element ${e} in a list with max ${this.maxNumElements} elements.`);kt(this.elementShape,n.shape,"TensorList shape mismatch: "),zt(n),this.tensors[e]!=null&&(this.tensors[e].kept=!1),this.tensors[e]=n}gather(e,n,r){if(n!==this.elementDtype)throw new Error(`Invalid data types; op elements ${n}, but list elements ${this.elementDtype}`);kt(this.elementShape,r,"TensorList shape mismatch: "),e=e.slice(0,this.size());const s=ra(this.elementShape,this.tensors,r);return e.length===0?Vt([],[0].concat(s)):Y(()=>{const a=e.map(o=>I(this.tensors[o],s));return sn(a,0)})}concat(e,n){if(e&&e!==this.elementDtype)throw new Error(`TensorList dtype is ${this.elementDtype} but concat requested dtype ${e}`);kt(this.elementShape,n,"TensorList shape mismatch: ");const r=ra(this.elementShape,this.tensors,n);return this.size()===0?Vt([],[0].concat(r)):Y(()=>{const s=this.tensors.map(a=>I(a,r));return Le(s,0)})}}function yP(t,e,n){const r=t.dtype;if(t.shape.length<1)throw new Error(`Tensor must be at least a vector, but saw shape: ${t.shape}`);if(t.dtype!==n)throw new Error(`Invalid data types; op elements ${t.dtype}, but list elements ${n}`);const s=t.shape.slice(1);kt(s,e,"TensorList shape mismatch: ");const a=cr(t);return new Mr(a,e,r)}function wP(t,e,n,r){return new Mr([],t,e,r)}function vP(t,e,n,r){if(e.length!==t.shape[0])throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${e.length} vs. ${t.shape[0]}`);const s=Math.max(...e);if(r!=null&&r!==-1&&s>=r)throw new Error(`Max index must be < array size (${s}  vs. ${r})`);const a=new Mr([],n,t.dtype,r),o=cr(t,0);return e.forEach((i,l)=>{a.setItem(i,o[l])}),a}function bP(t,e,n){let r=0;const s=e.map(p=>(r+=p,r));if(r!==t.shape[0])throw new Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        ${r}, and tensor's shape is: ${t.shape}`);const a=t.shape.slice(1),o=zc(a,n),i=r===0?0:t.size/r,l=Y(()=>{const p=[];t=I(t,[1,r,i]);for(let c=0;c<e.length;++c){const h=[0,c===0?0:s[c-1],0],m=[1,e[c],i];p[c]=I(J(t,h,m),o)}return t.dispose(),p}),u=new Mr([],n,t.dtype,e.length);for(let p=0;p<l.length;p++)u.setItem(p,l[p]);return u}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const kP=async(t,e,n)=>{switch(t.op){case"If":case"StatelessIf":{const r=d("thenBranch",t,e,n),s=d("elseBranch",t,e,n),a=d("cond",t,e,n),o=d("args",t,e,n);return(await a.data())[0]?n.functionMap[r].executeFunctionAsync(o,n.tensorArrayMap,n.tensorListMap):n.functionMap[s].executeFunctionAsync(o,n.tensorArrayMap,n.tensorListMap)}case"While":case"StatelessWhile":{const r=d("body",t,e,n),s=d("cond",t,e,n),a=d("args",t,e,n),o=await n.functionMap[s].executeFunctionAsync(a,n.tensorArrayMap,n.tensorListMap),i=a.map(p=>p.id);let l=await o[0].data();o.forEach(p=>{!p.kept&&i.indexOf(p.id)===-1&&p.dispose()});let u=a;for(;l[0];){const p=u;u=await n.functionMap[r].executeFunctionAsync(u,n.tensorArrayMap,n.tensorListMap);const c=u.map(h=>h.id);p.forEach(h=>{!h.kept&&i.indexOf(h.id)===-1&&c.indexOf(h.id)===-1&&h.dispose()});const f=await n.functionMap[s].executeFunctionAsync(u,n.tensorArrayMap,n.tensorListMap);l=await f[0].data(),f.forEach(h=>{!h.kept&&i.indexOf(h.id)===-1&&c.indexOf(h.id)===-1&&h.dispose()})}return u}case"LoopCond":{const r=d("pred",t,e,n);return[cn(r)]}case"Switch":{const r=d("pred",t,e,n);let s=d("data",t,e,n);return s.kept||(s=cn(s)),(await r.data())[0]?[void 0,s]:[s,void 0]}case"Merge":{const r=t.inputNames.find(s=>Ce(s,e,n)!==void 0);if(r){const s=Ce(r,e,n);return[cn(s)]}return}case"Enter":{const r=d("frameName",t,e,n),s=d("tensor",t,e,n);return n.enterFrame(r),[cn(s)]}case"Exit":{const r=d("tensor",t,e,n);return n.exitFrame(),[cn(r)]}case"NextIteration":{const r=d("tensor",t,e,n);return n.nextIteration(),[cn(r)]}case"TensorArrayV3":{const r=d("size",t,e,n),s=d("dtype",t,e,n),a=d("elementShape",t,e,n),o=d("dynamicSize",t,e,n),i=d("clearAfterRead",t,e,n),l=d("identicalElementShapes",t,e,n),u=d("name",t,e,n),p=new gP(u,s,r,a,l,o,i);return n.addTensorArray(p),[p.idTensor,K(1)]}case"TensorArrayWriteV3":{const r=d("tensorArrayId",t,e,n),s=d("index",t,e,n),a=d("tensor",t,e,n),o=n.getTensorArray(r.id);return o.write(s,a),[o.idTensor]}case"TensorArrayReadV3":{const r=d("tensorArrayId",t,e,n),s=d("index",t,e,n);return[n.getTensorArray(r.id).read(s)]}case"TensorArrayGatherV3":{const r=d("tensorArrayId",t,e,n),s=d("indices",t,e,n),a=d("dtype",t,e,n);return[n.getTensorArray(r.id).gather(s,a)]}case"TensorArrayScatterV3":{const r=d("tensorArrayId",t,e,n),s=d("indices",t,e,n),a=d("tensor",t,e,n),o=n.getTensorArray(r.id);return o.scatter(s,a),[o.idTensor]}case"TensorArrayConcatV3":{const r=d("tensorArrayId",t,e,n),s=n.getTensorArray(r.id),a=d("dtype",t,e,n);return[s.concat(a)]}case"TensorArraySplitV3":{const r=d("tensorArrayId",t,e,n),s=d("tensor",t,e,n),a=d("lengths",t,e,n),o=n.getTensorArray(r.id);return o.split(a,s),[o.idTensor]}case"TensorArraySizeV3":{const r=d("tensorArrayId",t,e,n),s=n.getTensorArray(r.id);return[K(s.size(),"int32")]}case"TensorArrayCloseV3":{const r=d("tensorArrayId",t,e,n),s=n.getTensorArray(r.id);return s.clearAndClose(),[s.idTensor]}case"TensorListSetItem":{const r=d("tensorListId",t,e,n),s=d("index",t,e,n),a=d("tensor",t,e,n),o=n.getTensorList(r.id);return o.setItem(s,a),[o.idTensor]}case"TensorListGetItem":{const r=d("tensorListId",t,e,n),s=d("index",t,e,n),a=d("elementShape",t,e,n),o=d("elementDType",t,e,n);return[n.getTensorList(r.id).getItem(s,a,o)]}case"TensorListScatterV2":case"TensorListScatter":{const r=d("indices",t,e,n),s=d("tensor",t,e,n),a=d("elementShape",t,e,n),o=d("numElements",t,e,n),i=vP(s,r,a,o);return n.addTensorList(i),[i.idTensor]}case"TensorListReserve":case"EmptyTensorList":{const r=d("elementShape",t,e,n),s=d("elementDType",t,e,n);let a;t.op==="TensorListReserve"?a="numElements":a="maxNumElements";const o=d(a,t,e,n),i=t.op==="TensorListReserve"?-1:o,l=wP(r,s,o,i);return n.addTensorList(l),[l.idTensor]}case"TensorListGather":{const r=d("tensorListId",t,e,n),s=d("indices",t,e,n),a=d("elementShape",t,e,n),o=d("elementDType",t,e,n);return[n.getTensorList(r.id).gather(s,o,a)]}case"TensorListStack":{const r=d("tensorListId",t,e,n),s=d("elementShape",t,e,n),a=d("elementDType",t,e,n),o=d("numElements",t,e,n);return[n.getTensorList(r.id).stack(s,a,o)]}case"TensorListFromTensor":{const r=d("tensor",t,e,n),s=d("elementShape",t,e,n),a=d("elementDType",t,e,n),o=yP(r,s,a);return n.addTensorList(o),[o.idTensor]}case"TensorListConcat":case"TensorListConcatV2":{const r=d("tensorListId",t,e,n),s=n.getTensorList(r.id),a=d("dtype",t,e,n),o=d("elementShape",t,e,n);return[s.concat(a,o)]}case"TensorListPushBack":{const r=d("tensorListId",t,e,n),s=d("tensor",t,e,n),a=n.getTensorList(r.id);return a.pushBack(s),[a.idTensor]}case"TensorListPopBack":{const r=d("tensorListId",t,e,n),s=d("elementShape",t,e,n),a=d("elementDType",t,e,n);return[n.getTensorList(r.id).popBack(s,a)]}case"TensorListSplit":{const r=d("tensor",t,e,n),s=d("elementShape",t,e,n),a=d("lengths",t,e,n),o=bP(r,a,s);return n.addTensorList(o),[o.idTensor]}case"TensorListLength":{const r=d("tensorListId",t,e,n),s=n.getTensorList(r.id);return[K(s.size(),"int32")]}case"TensorListResize":{const r=d("tensorListId",t,e,n),s=d("size",t,e,n),o=n.getTensorList(r.id).resize(s);return n.addTensorList(o),[o.idTensor]}default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xh(t,e,n){const[r,s]=d("fusedOps",t,e,n),a=r==="biasadd",o=!a,i=s==="prelu",l=r==="fusedbatchnorm",u=d("numArgs",t,e,n);if(a){if(i&&u!==2)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!i&&a&&u!==1)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd must have one extra argument: bias.")}if(l)throw new Error("FusedConv2d and DepthwiseConv2d with FusedBatchNorm is not supported");const p=d("strides",t,e,n),c=si(t,e,n),f=d("dataFormat",t,e,n).toUpperCase(),h=d("dilations",t,e,n);let[m,w]=d("args",t,e,n);o&&(w=m,m=void 0);const b=d("leakyreluAlpha",t,e,n);return{stride:p,pad:c,dataFormat:f,dilations:h,biasArg:m,preluArg:w,activationFunc:s,leakyreluAlpha:b}}const SP=(t,e,n,r=Pe)=>{switch(t.op){case"Conv1D":{const s=d("stride",t,e,n),a=d("pad",t,e,n),o=d("dataFormat",t,e,n).toUpperCase(),i=d("dilation",t,e,n);return[r.conv1d(d("x",t,e,n),d("filter",t,e,n),s,a,o,i)]}case"Conv2D":{const s=d("strides",t,e,n),a=si(t,e,n),o=d("dataFormat",t,e,n).toUpperCase(),i=d("dilations",t,e,n);return[r.conv2d(d("x",t,e,n),d("filter",t,e,n),[s[1],s[2]],a,o,[i[1],i[2]])]}case"_FusedConv2D":{const{stride:s,pad:a,dataFormat:o,dilations:i,biasArg:l,preluArg:u,activationFunc:p,leakyreluAlpha:c}=Xh(t,e,n);return[r.fused.conv2d({x:d("x",t,e,n),filter:d("filter",t,e,n),strides:[s[1],s[2]],pad:a,dataFormat:o,dilations:[i[1],i[2]],bias:l,activation:p,preluActivationWeights:u,leakyreluAlpha:c})]}case"FusedDepthwiseConv2dNative":{const{stride:s,pad:a,dataFormat:o,dilations:i,biasArg:l,preluArg:u,activationFunc:p,leakyreluAlpha:c}=Xh(t,e,n);return[r.fused.depthwiseConv2d({x:d("x",t,e,n),filter:d("filter",t,e,n),strides:[s[1],s[2]],pad:a,dataFormat:o,dilations:[i[1],i[2]],bias:l,activation:p,preluActivationWeights:u,leakyreluAlpha:c})]}case"Conv2DBackpropInput":case"Conv2dTranspose":{const s=d("outputShape",t,e,n),a=d("strides",t,e,n),o=si(t,e,n);return[r.conv2dTranspose(d("x",t,e,n),d("filter",t,e,n),s,[a[1],a[2]],o)]}case"DepthwiseConv2dNative":case"DepthwiseConv2d":{const s=d("strides",t,e,n),a=si(t,e,n),o=d("dilations",t,e,n),i=d("dataFormat",t,e,n).toUpperCase();return[r.depthwiseConv2d(d("input",t,e,n),d("filter",t,e,n),[s[1],s[2]],a,i,[o[1],o[2]])]}case"Conv3D":{const s=d("strides",t,e,n),a=d("pad",t,e,n),o=d("dataFormat",t,e,n).toUpperCase(),i=d("dilations",t,e,n);return[r.conv3d(d("x",t,e,n),d("filter",t,e,n),[s[1],s[2],s[3]],a,o,[i[1],i[2],i[3]])]}case"AvgPool":{const s=d("strides",t,e,n),a=d("pad",t,e,n),o=d("kernelSize",t,e,n);return[r.avgPool(d("x",t,e,n),[o[1],o[2]],[s[1],s[2]],a)]}case"MaxPool":{const s=d("strides",t,e,n),a=d("pad",t,e,n),o=d("kernelSize",t,e,n);return[r.maxPool(d("x",t,e,n),[o[1],o[2]],[s[1],s[2]],a)]}case"MaxPoolWithArgmax":{const s=d("strides",t,e,n),a=d("pad",t,e,n),o=d("kernelSize",t,e,n),i=d("includeBatchInIndex",t,e,n),{result:l,indexes:u}=r.maxPoolWithArgmax(d("x",t,e,n),[o[1],o[2]],[s[1],s[2]],a,i);return[l,u]}case"AvgPool3D":{const s=d("strides",t,e,n),a=d("pad",t,e,n),o=d("kernelSize",t,e,n);return[r.avgPool3d(d("x",t,e,n),[o[1],o[2],o[3]],[s[1],s[2],s[3]],a)]}case"MaxPool3D":{const s=d("strides",t,e,n),a=d("pad",t,e,n),o=d("kernelSize",t,e,n);return[r.maxPool3d(d("x",t,e,n),[o[1],o[2],o[3]],[s[1],s[2],s[3]],a)]}case"Dilation2D":{const s=d("strides",t,e,n),a=d("pad",t,e,n),o=d("dilations",t,e,n),i=s[1],l=s[2],u=o[1],p=o[2];return[r.dilation2d(d("x",t,e,n),d("filter",t,e,n),[i,l],a,[u,p],"NHWC")]}default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const NP=(t,e,n,r=Pe)=>{switch(t.op){case"Fill":{const s=d("shape",t,e,n),a=d("dtype",t,e,n),o=d("value",t,e,n);return[r.fill(s,o,a)]}case"LinSpace":{const s=d("start",t,e,n),a=d("stop",t,e,n),o=d("num",t,e,n);return[r.linspace(s,a,o)]}case"Multinomial":{const s=d("logits",t,e,n),a=d("numSamples",t,e,n),o=d("seed",t,e,n);return[r.multinomial(s,a,o)]}case"OneHot":{const s=d("indices",t,e,n),a=d("depth",t,e,n),o=d("onValue",t,e,n),i=d("offValue",t,e,n),l=d("dtype",t,e,n);return[r.oneHot(s,a,o,i,l)]}case"Ones":return[r.ones(d("shape",t,e,n),d("dtype",t,e,n))];case"OnesLike":return[r.onesLike(d("x",t,e,n))];case"RandomStandardNormal":return[r.randomStandardNormal(d("shape",t,e,n),d("dtype",t,e,n),d("seed",t,e,n))];case"RandomUniform":return[r.randomUniform(d("shape",t,e,n),d("minval",t,e,n),d("maxval",t,e,n),d("dtype",t,e,n))];case"RandomUniformInt":return[r.randomUniformInt(d("shape",t,e,n),d("minval",t,e,n),d("maxval",t,e,n),d("seed",t,e,n))];case"Range":{const s=d("start",t,e,n),a=d("stop",t,e,n),o=d("step",t,e,n);return[r.range(s,a,o,d("dtype",t,e,n))]}case"TruncatedNormal":{const s=d("shape",t,e,n),a=d("mean",t,e,n),o=d("stdDev",t,e,n),i=d("seed",t,e,n);return[r.truncatedNormal(s,a,o,d("dtype",t,e,n),i)]}case"Zeros":return[r.zeros(d("shape",t,e,n),d("dtype",t,e,n))];case"ZerosLike":return[r.zerosLike(d("x",t,e,n))];default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cu(t,e,n){const r=d("boxes",t,e,n),s=d("scores",t,e,n),a=d("maxOutputSize",t,e,n),o=d("iouThreshold",t,e,n),i=d("scoreThreshold",t,e,n),l=d("softNmsSigma",t,e,n);return{boxes:r,scores:s,maxOutputSize:a,iouThreshold:o,scoreThreshold:i,softNmsSigma:l}}const EP=async(t,e,n,r,s=Pe)=>{switch(t.op){case"NonMaxSuppressionV5":{const{boxes:a,scores:o,maxOutputSize:i,iouThreshold:l,scoreThreshold:u,softNmsSigma:p}=cu(t,e,n),c=await s.image.nonMaxSuppressionWithScoreAsync(a,o,i,l,u,p);return[c.selectedIndices,c.selectedScores]}case"NonMaxSuppressionV4":{const{boxes:a,scores:o,maxOutputSize:i,iouThreshold:l,scoreThreshold:u}=cu(t,e,n),p=d("padToMaxOutputSize",t,e,n),c=await s.image.nonMaxSuppressionPaddedAsync(a,o,i,l,u,p);return[c.selectedIndices,c.validOutputs]}case"NonMaxSuppressionV3":case"NonMaxSuppressionV2":{const{boxes:a,scores:o,maxOutputSize:i,iouThreshold:l,scoreThreshold:u}=cu(t,e,n);return[await s.image.nonMaxSuppressionAsync(a,o,i,l,u)]}case"Where":{const a=s.cast(d("condition",t,e,n),"bool"),o=[await s.whereAsync(a)];return a.dispose(),o}case"ListDiff":return s.setdiff1dAsync(d("x",t,e,n),d("y",t,e,n));default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const xP=(t,e,n,r=Pe)=>{switch(t.op){case"LowerBound":{const s=d("sortedSequence",t,e,n),a=d("values",t,e,n);return[r.lowerBound(s,a)]}case"TopKV2":{const s=d("x",t,e,n),a=d("k",t,e,n),o=d("sorted",t,e,n),i=r.topk(s,a,o);return[i.values,i.indices]}case"UpperBound":{const s=d("sortedSequence",t,e,n),a=d("values",t,e,n);return[r.upperBound(s,a)]}case"Unique":{const s=d("x",t,e,n),a=r.unique(s);return[a.values,a.indices]}case"UniqueV2":{const s=d("x",t,e,n),a=d("axis",t,e,n),o=r.unique(s,a);return[o.values,o.indices]}default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const TP=(t,e,n,r=Pe)=>{switch(t.op){case"Const":return e[t.name];case"PlaceholderWithDefault":const s=d("default",t,e,n);return[Ce(t.name,e,n)||s];case"Placeholder":return[Ce(t.name,e,n)];case"Identity":case"StopGradient":case"FakeQuantWithMinMaxVars":{const p=d("x",t,e,n);return[cn(p)]}case"IdentityN":return d("x",t,e,n).map(p=>cn(p));case"Snapshot":const a=d("x",t,e,n);return[cn(a)];case"Shape":return[r.tensor1d(d("x",t,e,n).shape,"int32")];case"ShapeN":return d("x",t,e,n).map(p=>r.tensor1d(p.shape));case"Size":return[r.scalar(d("x",t,e,n).size,"int32")];case"Rank":return[r.scalar(d("x",t,e,n).rank,"int32")];case"NoOp":return[r.scalar(1)];case"Print":const o=d("x",t,e,n),i=d("data",t,e,n),l=d("message",t,e,n),u=d("summarize",t,e,n);console.warn("The graph has a tf.print() operation,usually used for debugging, which slows down performance."),console.log(l);for(let p=0;p<i.length;p++)console.log(Array.prototype.slice.call(i[p].dataSync()).slice(0,u));return[o];default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class _P{get id(){return this.handle.id}constructor(e,n){this.keyDType=e,this.valueDType=n,this.handle=K(0),this.tensorMap=new Map,zt(this.handle)}clearAndClose(){this.tensorMap.forEach(e=>e.dispose()),this.tensorMap.clear(),this.handle.dispose()}size(){return this.tensorMap.size}tensorSize(){return K(this.size(),"int32")}async import(e,n){this.checkKeyAndValueTensor(e,n);const r=await e.data();return this.tensorMap.forEach(s=>s.dispose()),this.tensorMap.clear(),Y(()=>{const s=cr(n),a=r.length,o=s.length;k(a===o,()=>`The number of elements doesn't match, keys has ${a} elements, the values has ${o} elements.`);for(let i=0;i<a;i++){const l=r[i],u=s[i];zt(u),this.tensorMap.set(l,u)}return this.handle})}async find(e,n){this.checkKeyAndValueTensor(e,n);const r=await e.data();return Y(()=>{const s=[];for(let a=0;a<r.length;a++){const o=r[a],i=this.findWithDefault(o,n);s.push(i)}return sn(s)})}findWithDefault(e,n){const r=this.tensorMap.get(e);return r??n}checkKeyAndValueTensor(e,n){if(e.dtype!==this.keyDType)throw new Error(`Expect key dtype ${this.keyDType}, but got ${e.dtype}`);if(n.dtype!==this.valueDType)throw new Error(`Expect value dtype ${this.valueDType}, but got ${n.dtype}`)}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const $P=async(t,e,n,r)=>{switch(t.op){case"HashTable":case"HashTableV2":{const s=r.getHashTableHandleByName(t.name);if(s!=null)return[s];{const a=d("keyDType",t,e,n),o=d("valueDType",t,e,n),i=new _P(a,o);return r.addHashTable(t.name,i),[i.handle]}}case"InitializeTable":case"InitializeTableV2":case"LookupTableImport":case"LookupTableImportV2":{const s=d("tableHandle",t,e,n,r),a=d("keys",t,e,n),o=d("values",t,e,n);return[await r.getHashTableById(s.id).import(a,o)]}case"LookupTableFind":case"LookupTableFindV2":{const s=d("tableHandle",t,e,n,r),a=d("keys",t,e,n),o=d("defaultValue",t,e,n);return[await r.getHashTableById(s.id).find(a,o)]}case"LookupTableSize":case"LookupTableSizeV2":{const s=d("tableHandle",t,e,n,r);return[r.getHashTableById(s.id).tensorSize()]}default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const IP=(t,e,n,r=Pe)=>{switch(t.op){case"ResizeBilinear":{const s=d("images",t,e,n),a=d("size",t,e,n),o=d("alignCorners",t,e,n),i=d("halfPixelCenters",t,e,n);return[r.image.resizeBilinear(s,[a[0],a[1]],o,i)]}case"ResizeNearestNeighbor":{const s=d("images",t,e,n),a=d("size",t,e,n),o=d("alignCorners",t,e,n),i=d("halfPixelCenters",t,e,n);return[r.image.resizeNearestNeighbor(s,[a[0],a[1]],o,i)]}case"CropAndResize":{const s=d("image",t,e,n),a=d("boxes",t,e,n),o=d("boxInd",t,e,n),i=d("cropSize",t,e,n),l=d("method",t,e,n),u=d("extrapolationValue",t,e,n);return[r.image.cropAndResize(s,a,o,i,l,u)]}case"ImageProjectiveTransformV3":{const s=d("images",t,e,n),a=d("transforms",t,e,n),o=d("outputShape",t,e,n),i=d("fillValue",t,e,n),l=d("interpolation",t,e,n),u=d("fillMode",t,e,n);return[r.image.transform(s,a,l.toLowerCase(),u.toLowerCase(),i,o)]}default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const AP=(t,e,n,r=Pe)=>{switch(t.op){case"Equal":return[r.equal(d("a",t,e,n),d("b",t,e,n))];case"NotEqual":return[r.notEqual(d("a",t,e,n),d("b",t,e,n))];case"Greater":return[r.greater(d("a",t,e,n),d("b",t,e,n))];case"GreaterEqual":return[r.greaterEqual(d("a",t,e,n),d("b",t,e,n))];case"Less":return[r.less(d("a",t,e,n),d("b",t,e,n))];case"LessEqual":return[r.lessEqual(d("a",t,e,n),d("b",t,e,n))];case"LogicalAnd":return[r.logicalAnd(d("a",t,e,n),d("b",t,e,n))];case"LogicalNot":return[r.logicalNot(d("a",t,e,n))];case"LogicalOr":return[r.logicalOr(d("a",t,e,n),d("b",t,e,n))];case"Select":case"SelectV2":return[r.where(d("condition",t,e,n),d("a",t,e,n),d("b",t,e,n))];case"BitwiseAnd":return[r.bitwiseAnd(d("a",t,e,n),d("b",t,e,n))];default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const OP=(t,e,n,r=Pe)=>{switch(t.op){case"BatchMatMul":case"BatchMatMulV2":case"MatMul":return[r.matMul(d("a",t,e,n),d("b",t,e,n),d("transposeA",t,e,n),d("transposeB",t,e,n))];case"Einsum":return[r.einsum(d("equation",t,e,n),...d("tensors",t,e,n))];case"Transpose":return[r.transpose(d("x",t,e,n),d("perm",t,e,n))];case"_FusedMatMul":const[s,a]=d("fusedOps",t,e,n),o=s==="biasadd",i=a==="prelu",l=d("numArgs",t,e,n),u=d("leakyreluAlpha",t,e,n);if(o){if(i&&l!==2)throw new Error("Fused MatMul with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!i&&l!==1)throw new Error("Fused MatMul with BiasAdd must have one extra argument: bias.")}const[p,c]=d("args",t,e,n);return[r.fused.matMul({a:d("a",t,e,n),b:d("b",t,e,n),transposeA:d("transposeA",t,e,n),transposeB:d("transposeB",t,e,n),bias:p,activation:a,preluActivationWeights:c,leakyreluAlpha:u})];case"MatrixBandPart":return[r.linalg.bandPart(d("a",t,e,n),d("numLower",t,e,n),d("numUpper",t,e,n))];default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const CP=(t,e,n,r=Pe)=>{switch(t.op){case"EuclideanNorm":return[r.euclideanNorm(d("x",t,e,n),d("axis",t,e,n),d("keepDims",t,e,n))];case"FusedBatchNorm":case"FusedBatchNormV2":return[r.batchNorm(d("x",t,e,n),d("mean",t,e,n),d("variance",t,e,n),d("offset",t,e,n),d("scale",t,e,n),d("epsilon",t,e,n))];case"FusedBatchNormV3":return[r.batchNorm(d("x",t,e,n),d("mean",t,e,n),d("variance",t,e,n),d("offset",t,e,n),d("scale",t,e,n),d("epsilon",t,e,n))];case"LRN":return[r.localResponseNormalization(d("x",t,e,n),d("radius",t,e,n),d("bias",t,e,n),d("alpha",t,e,n),d("beta",t,e,n))];case"Softmax":return[r.softmax(d("x",t,e,n))];case"LogSoftmax":return[r.logSoftmax(d("x",t,e,n))];default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const DP=(t,e,n,r=Pe)=>{switch(t.op){case"RaggedGather":{const{outputNestedSplits:s,outputDenseValues:a}=r.raggedGather(d("paramsNestedSplits",t,e,n),d("paramsDenseValues",t,e,n),d("indices",t,e,n),d("outputRaggedRank",t,e,n));return s.concat(a)}case"RaggedRange":{const{rtNestedSplits:s,rtDenseValues:a}=r.raggedRange(d("starts",t,e,n),d("limits",t,e,n),d("splits",t,e,n));return[s,a]}case"RaggedTensorToTensor":return[r.raggedTensorToTensor(d("shape",t,e,n),d("values",t,e,n),d("defaultValue",t,e,n),d("rowPartitionTensors",t,e,n),d("rowPartitionTypes",t,e,n))];default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const PP=(t,e,n,r=Pe)=>{switch(t.op){case"Max":{const i=d("axis",t,e,n),l=d("keepDims",t,e,n);return[r.max(d("x",t,e,n),i,l)]}case"Mean":{const i=d("axis",t,e,n),l=d("keepDims",t,e,n);return[r.mean(d("x",t,e,n),i,l)]}case"Min":{const i=d("axis",t,e,n),l=d("keepDims",t,e,n);return[r.min(d("x",t,e,n),i,l)]}case"Sum":{const i=d("axis",t,e,n),l=d("keepDims",t,e,n);return[r.sum(d("x",t,e,n),i,l)]}case"All":{const i=d("axis",t,e,n),l=d("keepDims",t,e,n);return[r.all(d("x",t,e,n),i,l)]}case"Any":{const i=d("axis",t,e,n),l=d("keepDims",t,e,n);return[r.any(d("x",t,e,n),i,l)]}case"ArgMax":{const i=d("axis",t,e,n);return[r.argMax(d("x",t,e,n),i)]}case"ArgMin":{const i=d("axis",t,e,n);return[r.argMin(d("x",t,e,n),i)]}case"Prod":{const i=d("axis",t,e,n),l=d("keepDims",t,e,n);return[r.prod(d("x",t,e,n),i,l)]}case"Cumprod":{const i=d("axis",t,e,n),l=d("exclusive",t,e,n),u=d("reverse",t,e,n);return[r.cumprod(d("x",t,e,n),i,l,u)]}case"Cumsum":{const i=d("axis",t,e,n),l=d("exclusive",t,e,n),u=d("reverse",t,e,n);return[r.cumsum(d("x",t,e,n),i,l,u)]}case"Bincount":const s=d("x",t,e,n),a=d("weights",t,e,n),o=d("size",t,e,n);return[r.bincount(s,a,o)];case"DenseBincount":{const i=d("x",t,e,n),l=d("weights",t,e,n),u=d("size",t,e,n),p=d("binaryOutput",t,e,n);return[r.denseBincount(i,l,u,p)]}default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const FP=(t,e,n,r=Pe)=>{switch(t.op){case"ConcatV2":case"Concat":{const s=d("n",t,e,n),a=d("axis",t,e,n);let o=d("tensors",t,e,n);return o=o.slice(0,s),[r.concat(o,a)]}case"Gather":{const s=d("x",t,e,n),a=d("indices",t,e,n);return[r.gather(s,r.cast(a,"int32"),0)]}case"GatherV2":{const s=d("axis",t,e,n),a=d("batchDims",t,e,n),o=d("x",t,e,n),i=d("indices",t,e,n);return[r.gather(o,r.cast(i,"int32"),s,a)]}case"Reverse":{const s=d("dims",t,e,n),a=[];for(let i=0;i<s.length;i++)s[i]&&a.push(i);const o=d("x",t,e,n);return[r.reverse(o,a)]}case"ReverseV2":{const s=d("axis",t,e,n),a=d("x",t,e,n);return[r.reverse(a,s)]}case"Slice":{const s=d("begin",t,e,n),a=d("size",t,e,n);return[r.slice(d("x",t,e,n),s,a)]}case"StridedSlice":{const s=d("begin",t,e,n),a=d("end",t,e,n),o=d("strides",t,e,n),i=d("beginMask",t,e,n),l=d("endMask",t,e,n),u=d("ellipsisMask",t,e,n),p=d("newAxisMask",t,e,n),c=d("shrinkAxisMask",t,e,n),f=d("x",t,e,n);return[r.stridedSlice(f,s,a,o,i,l,u,p,c)]}case"Pack":return Y(()=>{const s=d("axis",t,e,n),a=d("tensors",t,e,n),o=a[0].shape,i=r.squeeze(a[0]).shape,l=a.map(u=>{const p=Ht(u.shape,o);if(!p&&!Ht(r.squeeze(u).shape,i))throw new Error("the input tensors shape does not match");return p?u:r.reshape(u,o)});return[r.stack(l,s)]});case"Unpack":{const s=d("axis",t,e,n),a=d("tensor",t,e,n);return r.unstack(a,s)}case"Tile":{const s=d("reps",t,e,n);return[r.tile(d("x",t,e,n),s)]}case"Split":case"SplitV":{const s=d("axis",t,e,n),a=d("numOrSizeSplits",t,e,n),o=d("x",t,e,n);return r.split(o,a,s)}case"ScatterNd":{const s=d("indices",t,e,n),a=d("values",t,e,n),o=d("shape",t,e,n);return[r.scatterND(s,a,o)]}case"GatherNd":{const s=d("x",t,e,n),a=d("indices",t,e,n);return[r.gatherND(s,a)]}case"SparseToDense":{const s=d("sparseIndices",t,e,n),a=d("outputShape",t,e,n),o=d("sparseValues",t,e,n),i=d("defaultValue",t,e,n);return[r.sparseToDense(s,o,a,o.dtype===i.dtype?i:r.cast(i,o.dtype))]}case"TensorScatterUpdate":{const s=d("indices",t,e,n),a=d("values",t,e,n),o=d("tensor",t,e,n);return[r.tensorScatterUpdate(o,s,a)]}default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const RP=(t,e,n,r=Pe)=>{switch(t.op){case"SparseFillEmptyRows":{const{outputIndices:s,outputValues:a,emptyRowIndicator:o,reverseIndexMap:i}=r.sparse.sparseFillEmptyRows(d("indices",t,e,n),d("values",t,e,n),d("denseShape",t,e,n),d("defaultValue",t,e,n));return[s,a,o,i]}case"SparseReshape":{const{outputIndices:s,outputShape:a}=r.sparse.sparseReshape(d("inputIndices",t,e,n),d("inputShape",t,e,n),d("newShape",t,e,n));return[s,a]}case"SparseSegmentMean":return[r.sparse.sparseSegmentMean(d("data",t,e,n),d("indices",t,e,n),d("segmentIds",t,e,n))];case"SparseSegmentSum":return[r.sparse.sparseSegmentSum(d("data",t,e,n),d("indices",t,e,n),d("segmentIds",t,e,n))];default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const LP=(t,e,n,r=Pe)=>{switch(t.op){case"FFT":return[r.fft(d("x",t,e,n))];case"IFFT":return[r.ifft(d("x",t,e,n))];case"RFFT":return[r.rfft(d("x",t,e,n))];case"IRFFT":return[r.irfft(d("x",t,e,n))];default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const zP=(t,e,n,r=Pe)=>{switch(t.op){case"StaticRegexReplace":return[r.string.staticRegexReplace(d("input",t,e,n),d("pattern",t,e,n),d("rewrite",t,e,n),d("replaceGlobal",t,e,n))];case"StringNGrams":{const{nGrams:s,nGramsSplits:a}=r.string.stringNGrams(d("data",t,e,n),d("dataSplits",t,e,n),d("separator",t,e,n),d("nGramWidths",t,e,n),d("leftPad",t,e,n),d("rightPad",t,e,n),d("padWidth",t,e,n),d("preserveShortSequences",t,e,n));return[s,a]}case"StringSplit":{const{indices:s,values:a,shape:o}=r.string.stringSplit(d("input",t,e,n),d("delimiter",t,e,n),d("skipEmpty",t,e,n));return[s,a,o]}case"StringToHashBucketFast":return[r.string.stringToHashBucketFast(d("input",t,e,n),d("numBuckets",t,e,n))];default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const BP=(t,e,n,r=Pe)=>{switch(t.op){case"Cast":return[r.cast(d("x",t,e,n),d("dtype",t,e,n))];case"ExpandDims":{const s=d("axis",t,e,n);return[r.expandDims(d("x",t,e,n),s)]}case"Squeeze":{const s=d("axis",t,e,n);return[r.squeeze(d("x",t,e,n),s)]}case"Reshape":return[r.reshape(d("x",t,e,n),d("shape",t,e,n))];case"EnsureShape":return[r.ensureShape(d("x",t,e,n),d("shape",t,e,n))];case"MirrorPad":return[r.mirrorPad(d("x",t,e,n),d("padding",t,e,n),d("mode",t,e,n))];case"PadV2":case"Pad":return[r.pad(d("x",t,e,n),d("padding",t,e,n),d("constantValue",t,e,n))];case"SpaceToBatchND":{const s=d("blockShape",t,e,n),a=d("paddings",t,e,n);return[r.spaceToBatchND(d("x",t,e,n),s,a)]}case"BatchToSpaceND":{const s=d("blockShape",t,e,n),a=d("crops",t,e,n);return[r.batchToSpaceND(d("x",t,e,n),s,a)]}case"DepthToSpace":{const s=d("blockSize",t,e,n),a=d("dataFormat",t,e,n).toUpperCase();return[r.depthToSpace(d("x",t,e,n),s,a)]}case"BroadcastTo":return[r.broadcastTo(d("x",t,e,n),d("shape",t,e,n))];case"BroadcastArgs":return[r.broadcastArgs(d("s0",t,e,n),d("s1",t,e,n))];default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Yh(t,e,n,r,s=Y){const a=((o,i,l)=>{switch(o.category){case"arithmetic":return s(()=>hP(o,i,l));case"basic_math":return s(()=>mP(o,i,l));case"control":return kP(o,i,l);case"convolution":return s(()=>SP(o,i,l));case"creation":return s(()=>NP(o,i,l));case"dynamic":return EP(o,i,l);case"evaluation":return s(()=>xP(o,i,l));case"image":return s(()=>IP(o,i,l));case"graph":return s(()=>TP(o,i,l));case"logical":return s(()=>AP(o,i,l));case"matrices":return s(()=>OP(o,i,l));case"normalization":return s(()=>CP(o,i,l));case"ragged":return s(()=>DP(o,i,l));case"reduction":return s(()=>PP(o,i,l));case"slice_join":return s(()=>FP(o,i,l));case"sparse":return s(()=>RP(o,i,l));case"spectral":return s(()=>LP(o,i,l));case"string":return s(()=>zP(o,i,l));case"transformation":return s(()=>BP(o,i,l));case"hash_table":return $P(o,i,l,r);case"custom":const u=ak(o.op);if(u&&u.customExecutor)return u.customExecutor(new dP(o,i,l));throw TypeError(`Custom op ${o.op} is not registered.`);default:throw TypeError(`Unknown op '${o.op}'. File an issue at https://github.com/tensorflow/tfjs/issues so we can add it, or register a custom execution with tf.registerOp()`)}})(t,e,n);return Zn(a)?a.then(o=>[].concat(o)):[].concat(a)}class Zh{constructor(e={},n={},r={},s={},a){this.weightMap=e,this.tensorArrayMap=n,this.tensorListMap=r,this.functionMap=s,this.parseNodeNameCache=a,this.rootContext={id:0,frameName:"",iterationId:0},this.contexts=[this.rootContext],this.lastId=0,this.generateCurrentContextIds()}newFrame(e,n){return{id:e,frameName:n,iterationId:0}}set currentContext(e){this.contexts!==e&&(this.contexts=e,this.generateCurrentContextIds())}get currentContext(){return this.contexts}get currentContextId(){return this._currentContextIds[0]}get currentContextIds(){return this._currentContextIds}generateCurrentContextIds(){const e=[];for(let n=0;n<this.contexts.length-1;n++){const r=this.contexts.slice(0,this.contexts.length-n);e.push(this.contextIdforContexts(r))}e.push(""),this._currentContextIds=e}contextIdforContexts(e){return e?e.map(n=>n.id===0&&n.iterationId===0?"":`${n.frameName}-${n.iterationId}`).join("/"):""}enterFrame(e){this.contexts&&(this.lastId++,this.contexts=this.contexts.slice(),this.contexts.push(this.newFrame(this.lastId,e)),this._currentContextIds.unshift(this.contextIdforContexts(this.contexts)))}exitFrame(){if(this.contexts&&this.contexts.length>1)this.contexts=this.contexts.slice(),this.contexts.splice(-1),this.currentContextIds.shift();else throw new Error("Cannot exit frame, the context is empty")}nextIteration(){if(this.contexts&&this.contexts.length>0){this.contexts=this.contexts.slice(),this.lastId++;const e=Object.assign({},this.contexts[this.contexts.length-1]);e.iterationId+=1,e.id=this.lastId,this.contexts.splice(-1,1,e),this._currentContextIds.splice(0,1,this.contextIdforContexts(this.contexts))}else throw new Error("Cannot increase frame iteration, the context is empty")}getWeight(e){return this.weightMap[e]}addTensorArray(e){this.tensorArrayMap[e.id]=e}getTensorArray(e){return this.tensorArrayMap[e]}addTensorList(e){this.tensorListMap[e.id]=e}getTensorList(e){return this.tensorListMap[e]}dispose(e){for(const n in this.tensorArrayMap)this.tensorArrayMap[n].clearAndClose(e);for(const n in this.tensorListMap)this.tensorListMap[n].clearAndClose(e)}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Jh(t,e,n,r){const s=new Set,a=[];let o=null,i=null;const l=new Set,u=new Set(Object.keys(t).map(f=>nt(f)[0]));r=r||[];const p=new Set(r.map(f=>nt(f.name)[0])),c=[...e];for(;c.length>0;){const f=c.pop();if((br(f)||qP(f)||KP(f))&&o==null&&(o=f,i=o.children.map(h=>h.name).filter(h=>s.has(h))),s.add(f.name),n[f.name]==null&&!u.has(f.name)&&!p.has(f.name)){if(f.inputs.length===0){a.push(f.name);continue}f.inputs.forEach(h=>{l.has(h.name)||(l.add(h.name),c.push(h))})}}return{inputs:t,outputs:e,usedNodes:s,missingInputs:a,dynamicNode:o,syncInputs:i}}function jP(t,e){const{usedNodes:n,inputs:r}=e,s=Object.keys(r).map(b=>nt(b)[0]).map(b=>t.nodes[b]),a=t.initNodes||[],o=b=>n.has(typeof b=="string"?b:b.name);function i(b){return[...new Map(b.map(y=>[y.name,y])).values()]}const l=i([...s,...t.weights,...a]).filter(o),u=i([...l,...Object.values(t.nodes)]).filter(o),p=new Map(u.map(b=>[b.name,b])),c={};for(const b of u){c[b.name]=c[b.name]||0;for(const y of b.children)o(y)||(c[y.name]=Number.POSITIVE_INFINITY),c[y.name]=(c[y.name]||0)+1}const f=Object.entries(c).filter(([,b])=>b===0).map(([b])=>b),h=[...f];for(;f.length>0;){const b=f.pop(),y=p.get(b);for(const S of y.children.filter(o))--c[S.name]===0&&(h.push(S.name),f.push(S.name))}const m=h.map(b=>p.get(b)),w=MP(m,l);return VP(w,l),w}function MP(t,e){const n=new Map(t.map(o=>[o.name,o])),r=e.map(o=>o.name),s=new Set(r);for(;r.length>0;){const o=r.pop(),i=n.get(o);for(const l of i.children)!n.has(l.name)||s.has(l.name)||(s.add(l.name),r.push(l.name))}return t.filter(o=>s.has(o.name))}class Vo extends Error{constructor(e){super(`NodesExecutionOrderError: ${e}`)}}function VP(t,e){const n=new Map(t.map((i,l)=>[i.name,l])),r=new Set(e.map(i=>i.name)),s=i=>r.has(typeof i=="string"?i:i.name),a=new Set(t.map(i=>i.name)),o=i=>a.has(typeof i=="string"?i:i.name);for(const i of t){for(const l of i.children.filter(o)){if(!n.has(l.name))throw new Vo(`Child ${l.name} of node ${i.name} is unreachable.`);if(n.get(i.name)>n.get(l.name))throw new Vo(`Node ${i.name} is scheduled to run after its child ${l.name}.`)}if(!s(i))for(const l of i.inputs){if(!n.has(l.name))throw new Vo(`Input ${l.name} of node ${i.name} is unreachable.`);if(n.get(l.name)>n.get(i.name))throw new Vo(`Node ${i.name} is scheduled to run before its input ${l.name}.`)}}}function UP(t){const e=new Map(t.map((i,l)=>[i.name,l])),n=Number.MAX_SAFE_INTEGER,r=t.map((i,l)=>br(i)?n:l),s=i=>{const l=r[e.get(i.name)];return l??-1},a=t.map((i,l)=>i.children.map(s).reduce((u,p)=>Math.max(u,p),r[l])),o=new Map;for(let i=0;i<t.length;++i){const l=a[i];if(l===n)continue;const u=t[i],p=t[l];o.has(p.name)||o.set(p.name,[]),o.get(p.name).push(u)}return o}const WP=new Set(["Switch","Merge","Enter","Exit","NextIteration","StatelessIf","StatelessWhile","if","While"]),HP=new Set(["NonMaxSuppressionV2","NonMaxSuppressionV3","NonMaxSuppressionV5","Where"]),GP=new Set(["HashTable","HashTableV2","LookupTableImport","LookupTableImportV2","LookupTableFind","LookupTableFindV2","LookupTableSize","LookupTableSizeV2"]);function br(t){return WP.has(t.op)}function qP(t){return HP.has(t.op)}function KP(t){return GP.has(t.op)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Hi{get weightIds(){return this.parent?this.parent.weightIds:this._weightIds}get functionExecutorMap(){return this.parent?this.parent.functionExecutorMap:this._functionExecutorMap}get weightMap(){return this.parent?this.parent.weightMap:this._weightMap}set weightMap(e){const n=Object.keys(e).map(r=>e[r].map(s=>s.id));this._weightIds=[].concat(...n),this._weightMap=e}set resourceManager(e){this._resourceManager=e}get inputs(){return this._inputs.map(e=>({name:e.name,shape:e.attrParams.shape?e.attrParams.shape.value:void 0,dtype:e.attrParams.dtype?e.attrParams.dtype.value:void 0}))}get outputs(){return this._outputs.map(e=>({name:e.name,shape:e.attrParams.shape?e.attrParams.shape.value:void 0,dtype:e.attrParams.dtype?e.attrParams.dtype.value:void 0}))}get inputNodes(){return this._inputs.map(e=>e.signatureKey||e.name)}get outputNodes(){return this._outputs.map(e=>{const n=e.signatureKey||e.name;return e.defaultOutput?`${n}:${e.defaultOutput}`:n})}get functions(){return Object.keys(this._functions).reduce((e,n)=>(e[n]=this._functions[n].signature,e),{})}constructor(e,n){this.graph=e,this.parent=n,this.compiledMap=new Map,this.parseNodeNameCache=new Map,this._weightMap={},this.SEPARATOR=",",this._functions={},this._functionExecutorMap={},this.keepIntermediateTensors=!1,this._outputs=e.outputs,this._inputs=e.inputs,this._initNodes=e.initNodes,this._signature=e.signature,this._functions=e.functions,e.functions!=null&&Object.keys(e.functions).forEach(r=>{this._functionExecutorMap[r]=new Hi(e.functions[r],this)})}getCompilationKey(e,n){const r=e.map(a=>a.name).sort(),s=n.map(a=>a.name).sort();return r.join(this.SEPARATOR)+"--"+s.join(this.SEPARATOR)}compile(e,n){const r=Jh(e,n,this.weightMap,this._initNodes),{missingInputs:s,dynamicNode:a,syncInputs:o}=r;if(a!=null)throw new Error(`This execution contains the node '${a.name}', which has the dynamic op '${a.op}'. Please use model.executeAsync() instead. Alternatively, to avoid the dynamic ops, specify the inputs [${o}]`);if(s.length>0){const u=n.map(c=>c.name),p=Object.keys(e);throw new Error(`Cannot compute the outputs [${u}] from the provided inputs [${p}]. Missing the following inputs: [${s}]`)}const i=jP(this.graph,r),l=UP(i);return{orderedNodes:i,nodeLiveUntilMap:l}}cloneAndKeepTensor(e){if(e==null)return null;const n=e.clone();return zt(n),n}cloneTensorList(e){return e?e.map(r=>this.cloneAndKeepTensor(r)):null}cloneTensorMap(e){return Object.fromEntries(Object.entries(e).map(([n,r])=>[n,this.cloneTensorList(r)]))}execute(e,n){this.disposeIntermediateTensors(),e=this.mapInputs(e);const r=Object.keys(e).sort();this.checkInputs(e),this.checkInputShapeAndType(e),n=this.mapOutputs(n),this.checkOutputs(n);const s=r.map(f=>this.graph.nodes[nt(f)[0]]),a=n.map(f=>nt(f)[0]),o=new Set(a);let i=a.map(f=>this.graph.nodes[f]);i.length===0&&(i=this._outputs);const l=this.getCompilationKey(s,i);let u=this.compiledMap.get(l);u==null&&(u=this.compile(e,i),this.compiledMap.set(l,u));try{this.keepIntermediateTensors=V().getBool("KEEP_INTERMEDIATE_TENSORS")}catch(f){this.keepIntermediateTensors=!1,console.warn(f.message)}const p={},c={};return Y(()=>{const f=new Zh(this.weightMap,p,c,this.functionExecutorMap,this.parseNodeNameCache),h=Object.assign({},this.weightMap);this.keepIntermediateTensors&&(this.clonedTensorsMap=this.cloneTensorMap(this.weightMap)),Object.keys(e).forEach(y=>{const[S,v]=nt(y,f),x=[];x[v]=e[y],h[S]=x,this.keepIntermediateTensors&&(this.clonedTensorsMap[S]=this.cloneTensorList(x))});const m=this.getFrozenTensorIds(h),{orderedNodes:w,nodeLiveUntilMap:b}=u;for(const y of w){if(h[y.name])continue;const S=Yh(y,h,f,this._resourceManager);if(Zn(S))throw new Error(`The execution of the op '${y.op}' returned a promise. Please use model.executeAsync() instead.`);h[y.name]=S,this.keepIntermediateTensors&&(this.clonedTensorsMap[y.name]=this.cloneTensorList(S)),this.checkTensorForDisposalWithNodeLiveUntilInfo(y,h,f,m,o,b.get(y.name))}return this.parent==null&&f.dispose(m),n.map(y=>Ce(y,h,f))})}getFrozenTensorIds(e){const n=[].concat.apply([],Object.keys(e).map(r=>e[r]).map(r=>r.map(s=>s.id)));return new Set(n)}checkTensorForDisposal(e,n,r,s,a,o,i){if(!(br(n)||o.has(e))){for(const l of r[e])l!=null&&(i[l.id]=(i[l.id]||0)+n.children.length);for(const l of n.inputs){if(br(l))continue;const u=Gh(l.name,r,s);if(u!=null)for(const p of u){if(!p||p.kept||a.has(p.id))continue;const c=i[p.id];c===1?(p.dispose(),delete i[p.id]):c!=null&&i[p.id]--}}}}checkTensorForDisposalWithNodeLiveUntilInfo(e,n,r,s,a,o){function i(l){return br(l)||a.has(l.name)}if(!(br(e)||o==null))for(const l of o){if(i(l))continue;const u=Gh(l.name,n,r);for(const p of u)!p||p.kept||s.has(p.id)||p.dispose()}}async executeAsync(e,n){return this._executeAsync(e,n)}disposeIntermediateTensors(){this.clonedTensorsMap&&(Object.values(this.clonedTensorsMap).forEach(e=>{for(const n of e)n&&!n.isDisposed&&n.dispose()}),this.clonedTensorsMap=null)}getIntermediateTensors(){return this.clonedTensorsMap}async _executeAsync(e,n,r=!1,s={},a={}){this.disposeIntermediateTensors(),r||(e=this.mapInputs(e),this.checkInputs(e),this.checkInputShapeAndType(e),n=this.mapOutputs(n),this.checkOutputs(n));try{this.keepIntermediateTensors=V().getBool("KEEP_INTERMEDIATE_TENSORS")}catch(f){this.keepIntermediateTensors=!1,console.warn(f.message)}const o=new Zh(this.weightMap,s,a,this.functionExecutorMap,this.parseNodeNameCache);this.keepIntermediateTensors&&(this.clonedTensorsMap=this.cloneTensorMap(this.weightMap));const i=await this.executeWithControlFlow(e,o,n,r),l=n.map(f=>Ce(f,i,o)),u=l.map(f=>f.id),p=Object.keys(e).map(f=>e[f].id),c=new Set([...u,...p,...this.weightIds]);return Object.values(i).forEach(f=>{f.forEach(h=>{h&&!h.isDisposed&&!c.has(h.id)&&h.dispose()})}),this.parent==null&&o.dispose(c),l}async executeFunctionAsync(e,n,r){const s=e.reduce((a,o,i)=>(a[this.inputs[i].name]=o,a),{});return this._executeAsync(s,this.outputNodes,!0,n,r)}async executeWithControlFlow(e,n,r,s){const a=Object.keys(e),o=a.map(x=>this.graph.nodes[nt(x)[0]]),i=r.map(x=>nt(x)[0]),l=new Set(i);let u=i.map(x=>this.graph.nodes[x]);u.length===0&&(u=this._outputs);const{usedNodes:p,missingInputs:c,dynamicNode:f,syncInputs:h}=Jh(e,u,this.weightMap,this._initNodes),m=[...o,...this.graph.weights,...this._initNodes||[]].map(x=>({node:x,contexts:n.currentContext})),w=Object.assign({},this.weightMap);Object.keys(e).forEach(x=>{const[T,_]=nt(x),A=[];A[_]=e[x],w[T]=A});const b={},y=this.getFrozenTensorIds(w),S={};for(;m.length>0;){const x=this.processStack(o,m,n,w,S,y,l,b,p);await Promise.all(x)}f==null&&!s&&console.warn("This model execution did not contain any nodes with control flow or dynamic output shapes. You can use model.execute() instead.");const v=u.filter(x=>!br(x)&&!Ce(x.name,w,n)).map(x=>x.name);if(v.length>0){let x="";throw f!=null&&(x=`Alternatively, to avoid the dynamic ops, use model.execute() and specify the inputs [${h}]`),new Error(`Cannot compute the outputs [${v}] from the provided inputs [${a}]. Consider providing the following inputs: [${c}]. ${x}`)}return w}processStack(e,n,r,s,a,o,i,l,u){const p=[];for(;n.length>0;){const c=n.pop();r.currentContext=c.contexts;let f="";if(c.node.op==="Enter"&&d("isConstant",c.node,s,r)&&([f]=un(c.node.name,r)),s[c.node.name]==null){const h=Yh(c.node,s,r,this._resourceManager);f||([f]=un(c.node.name,r));const m=r.currentContext;Zn(h)?p.push(h.then(w=>(s[f]=w,this.keepIntermediateTensors&&(this.clonedTensorsMap[f]=this.cloneTensorList(w)),r.currentContext=m,this.checkTensorForDisposal(f,c.node,s,r,o,i,l),this.processChildNodes(c.node,n,r,s,a,u),w))):(s[f]=h,this.keepIntermediateTensors&&(this.clonedTensorsMap[f]=this.cloneTensorList(h)),this.checkTensorForDisposal(f,c.node,s,r,o,i,l),this.processChildNodes(c.node,n,r,s,a,u))}else this.processChildNodes(c.node,n,r,s,a,u)}return p}processChildNodes(e,n,r,s,a,o){e.children.forEach(i=>{const[l]=un(i.name,r);a[l]||!o.has(i.name)||(i.op==="Merge"?i.inputNames.some(u=>!!Ce(u,s,r))&&(a[l]=!0,n.push({contexts:r.currentContext,node:i})):i.inputNames.every(u=>!!Ce(u,s,r))&&(a[l]=!0,n.push({contexts:r.currentContext,node:i})))})}dispose(){Object.keys(this.weightMap).forEach(e=>this.weightMap[e].forEach(n=>n.dispose()))}checkInputShapeAndType(e){Object.keys(e).forEach(n=>{const r=e[n],[s]=nt(n),a=this.graph.nodes[s];if(a.attrParams.shape&&a.attrParams.shape.value){const o=a.attrParams.shape.value,i=o.length===r.shape.length&&r.shape.every((l,u)=>o[u]===-1||o[u]===l);k(i,()=>`The shape of dict['${a.name}'] provided in model.execute(dict) must be [${o}], but was [${r.shape}]`)}a.attrParams.dtype&&a.attrParams.dtype.value&&k(r.dtype===a.attrParams.dtype.value,()=>`The dtype of dict['${a.name}'] provided in model.execute(dict) must be ${a.attrParams.dtype.value}, but was ${r.dtype}`)})}mapInputs(e){var n,r;const s={};for(const a in e){const o=(r=(n=this._signature)===null||n===void 0?void 0:n.inputs)===null||r===void 0?void 0:r[a];o!=null?s[o.name]=e[a]:s[a]=e[a]}return s}checkInputs(e){const n=Object.keys(e).filter(r=>{const[s]=nt(r);return this.graph.nodes[s]==null});if(n.length>0)throw new Error(`The dict provided in model.execute(dict) has keys: [${n}] that are not part of graph`)}mapOutputs(e){return e.map(n=>{var r,s;const a=(s=(r=this._signature)===null||r===void 0?void 0:r.outputs)===null||s===void 0?void 0:s[n];return a!=null?a.name:n},{})}checkOutputs(e){e.forEach(n=>{const[r]=nt(n);if(!this.graph.nodes[r])throw new Error(`The output '${n}' is not found in the graph`)})}}class QP{constructor(e={},n={}){this.hashTableNameToHandle=e,this.hashTableMap=n}addHashTable(e,n){this.hashTableNameToHandle[e]=n.handle,this.hashTableMap[n.id]=n}getHashTableHandleByName(e){return this.hashTableNameToHandle[e]}getHashTableById(e){return this.hashTableMap[e]}dispose(){for(const e in this.hashTableMap)this.hashTableMap[e].clearAndClose(),delete this.hashTableMap[e];for(const e in this.hashTableNameToHandle)this.hashTableNameToHandle[e].dispose(),delete this.hashTableNameToHandle[e]}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const XP="?tfjs-format=file",YP="model.json";class ZP{get modelVersion(){return this.version}get inputNodes(){return this.executor.inputNodes}get outputNodes(){return this.executor.outputNodes}get inputs(){return this.executor.inputs}get outputs(){return this.executor.outputs}get weights(){return this.executor.weightMap}get metadata(){return this.artifacts.userDefinedMetadata}get modelSignature(){return this.signature}get modelStructuredOutputKeys(){return this.structuredOutputKeys}constructor(e,n={},r=nd){this.modelUrl=e,this.loadOptions=n,this.version="n/a",this.io=r,n==null&&(this.loadOptions={}),this.resourceManager=new QP}findIOHandler(){const e=this.modelUrl;if(e.load!=null)this.handler=e;else if(this.loadOptions.requestInit!=null)this.handler=this.io.browserHTTPRequest(e,this.loadOptions);else{const n=this.io.getLoadHandlers(e,this.loadOptions);if(n.length===0)n.push(this.io.browserHTTPRequest(e,this.loadOptions));else if(n.length>1)throw new Error(`Found more than one (${n.length}) load handlers for URL '${[e]}'`);this.handler=n[0]}}load(){if(this.findIOHandler(),this.handler.load==null)throw new Error("Cannot proceed with model loading because the IOHandler provided does not have the `load` method implemented.");const e=this.handler.load();return Zn(e)?e.then(n=>n.getWeightStream==null?this.loadSync(n):this.loadStreaming(n)):this.loadSync(e)}loadSync(e){const n=this.io.decodeWeights(e.weightData,e.weightSpecs);return this.loadWithWeightMap(e,n)}async loadStreaming(e){if(e.getWeightStream==null)throw new Error("Model artifacts missing streamWeights function");const n=await tv(e.getWeightStream(),e.weightSpecs);return this.loadWithWeightMap(e,n)}loadWithWeightMap(e,n){this.artifacts=e;const r=this.artifacts.modelTopology;let s=this.artifacts.signature;if(this.artifacts.userDefinedMetadata!=null){const a=this.artifacts.userDefinedMetadata;a.signature!=null&&(s=a.signature),a.structuredOutputKeys!=null&&(this.structuredOutputKeys=a.structuredOutputKeys)}if(this.signature=s,this.version=`${r.versions.producer}.${r.versions.minConsumer}`,this.executor=new Hi(qh.Instance.transformGraph(r,this.signature)),this.executor.weightMap=this.convertTensorMapToTensorsMap(n),this.executor.resourceManager=this.resourceManager,e.modelInitializer!=null&&e.modelInitializer.node!=null){const a=qh.Instance.transformGraph(e.modelInitializer);this.initializer=new Hi(a),this.initializer.weightMap=this.executor.weightMap,this.initializer.resourceManager=this.resourceManager,this.initializerSignature=e.initializerSignature}return!0}async save(e,n){if(typeof e=="string"){const r=this.io.getSaveHandlers(e);if(r.length===0)throw new Error(`Cannot find any save handlers for URL '${e}'`);if(r.length>1)throw new Error(`Found more than one (${r.length}) save handlers for URL '${e}'`);e=r[0]}if(e.save==null)throw new Error("GraphModel.save() cannot proceed because the IOHandler provided does not have the `save` attribute defined.");return e.save(this.artifacts)}addStructuredOutputNames(e){if(this.structuredOutputKeys){const n=e instanceof he?[e]:e,r={};return n.forEach((s,a)=>r[this.structuredOutputKeys[a]]=s),r}return e}predict(e,n){const r=this.execute(e,this.outputNodes);return this.addStructuredOutputNames(r)}async predictAsync(e,n){const r=await this.executeAsync(e,this.outputNodes);return this.addStructuredOutputNames(r)}normalizeInputs(e){var n;if(!(e instanceof he)&&!Array.isArray(e)){const a=(n=this.signature)===null||n===void 0?void 0:n.inputs;if(a!=null)for(const o in a){const i=a[o];i.resourceId!=null&&(e[o]=this.resourceIdToCapturedInput[i.resourceId])}return e}e=Array.isArray(e)?e:[e];const r=Object.keys(this.resourceIdToCapturedInput).length;if(e.length+r!==this.inputNodes.length)throw new Error(`Input tensor count mismatch, the graph model has ${this.inputNodes.length-r} non-resource placeholders, while there are ${e.length} input tensors provided.`);let s=0;return this.inputNodes.reduce((a,o)=>{var i,l,u;const p=(u=(l=(i=this.signature)===null||i===void 0?void 0:i.inputs)===null||l===void 0?void 0:l[o])===null||u===void 0?void 0:u.resourceId;return p!=null?a[o]=this.resourceIdToCapturedInput[p]:a[o]=e[s++],a},{})}normalizeOutputs(e){return e=e||this.outputNodes,Array.isArray(e)?e:[e]}executeInitializerGraph(){return this.initializer==null?[]:this.initializerSignature==null?this.initializer.execute({},[]):this.initializer.execute({},Object.keys(this.initializerSignature.outputs))}async executeInitializerGraphAsync(){return this.initializer==null?[]:this.initializerSignature==null?this.initializer.executeAsync({},[]):this.initializer.executeAsync({},Object.keys(this.initializerSignature.outputs))}setResourceIdToCapturedInput(e){if(this.resourceIdToCapturedInput={},this.initializerSignature){const n=this.initializerSignature.outputs,r=Object.keys(n);for(let s=0;s<r.length;s++){const a=r[s],o=n[a];this.resourceIdToCapturedInput[o.resourceId]=e[s]}}}execute(e,n){this.resourceIdToCapturedInput==null&&this.setResourceIdToCapturedInput(this.executeInitializerGraph()),e=this.normalizeInputs(e),n=this.normalizeOutputs(n);const r=this.executor.execute(e,n);return r.length>1?r:r[0]}async executeAsync(e,n){this.resourceIdToCapturedInput==null&&this.setResourceIdToCapturedInput(await this.executeInitializerGraphAsync()),e=this.normalizeInputs(e),n=this.normalizeOutputs(n);const r=await this.executor.executeAsync(e,n);return r.length>1?r:r[0]}getIntermediateTensors(){return this.executor.getIntermediateTensors()}disposeIntermediateTensors(){this.executor.disposeIntermediateTensors()}convertTensorMapToTensorsMap(e){return Object.keys(e).reduce((n,r)=>(n[r]=[e[r]],n),{})}dispose(){this.executor.dispose(),this.initializer&&(this.initializer.dispose(),this.resourceIdToCapturedInput&&Ge(this.resourceIdToCapturedInput)),this.resourceManager.dispose()}}async function em(t,e={},n=nd){if(t==null)throw new Error("modelUrl in loadGraphModel() cannot be null. Please provide a url or an IOHandler that loads the model");e==null&&(e={}),e.fromTFHub&&typeof t=="string"&&(t=JP(t));const r=new ZP(t,e,n);return await r.load(),r}function JP(t){return t.endsWith("/")||(t=t+"/"),`${t}${YP}${XP}`}/**
    * @license
    * Copyright 2023 Google LLC. All Rights Reserved.
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    * http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    * =============================================================================
    */function Gi(t,e,n,r){return new(n||(n=Promise))(function(s,a){function o(u){try{l(r.next(u))}catch(p){a(p)}}function i(u){try{l(r.throw(u))}catch(p){a(p)}}function l(u){var p;u.done?s(u.value):(p=u.value,p instanceof n?p:new n(function(c){c(p)})).then(o,i)}l((r=r.apply(t,[])).next())})}function qi(t,e){var n,r,s,a,o={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function i(l){return function(u){return function(p){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(s=2&p[0]?r.return:p[0]?r.throw||((s=r.return)&&s.call(r),0):r.next)&&!(s=s.call(r,p[1])).done)return s;switch(r=0,s&&(p=[2&p[0],s.value]),p[0]){case 0:case 1:s=p;break;case 4:return o.label++,{value:p[1],done:!1};case 5:o.label++,r=p[1],p=[0];continue;case 7:p=o.ops.pop(),o.trys.pop();continue;default:if(!(s=(s=o.trys).length>0&&s[s.length-1])&&(p[0]===6||p[0]===2)){o=0;continue}if(p[0]===3&&(!s||p[1]>s[0]&&p[1]<s[3])){o.label=p[1];break}if(p[0]===6&&o.label<s[1]){o.label=s[1],s=p;break}if(s&&o.label<s[2]){o.label=s[2],o.ops.push(p);break}s[2]&&o.ops.pop(),o.trys.pop();continue}p=e.call(t,o)}catch(c){p=[6,c],r=0}finally{n=s=0}if(5&p[0])throw p[1];return{value:p[0]?p[1]:void 0,done:!0}}([l,u])}}}var e6={0:"tench, Tinca tinca",1:"goldfish, Carassius auratus",2:"great white shark, white shark, man-eater, man-eating shark, Carcharodon carcharias",3:"tiger shark, Galeocerdo cuvieri",4:"hammerhead, hammerhead shark",5:"electric ray, crampfish, numbfish, torpedo",6:"stingray",7:"cock",8:"hen",9:"ostrich, Struthio camelus",10:"brambling, Fringilla montifringilla",11:"goldfinch, Carduelis carduelis",12:"house finch, linnet, Carpodacus mexicanus",13:"junco, snowbird",14:"indigo bunting, indigo finch, indigo bird, Passerina cyanea",15:"robin, American robin, Turdus migratorius",16:"bulbul",17:"jay",18:"magpie",19:"chickadee",20:"water ouzel, dipper",21:"kite",22:"bald eagle, American eagle, Haliaeetus leucocephalus",23:"vulture",24:"great grey owl, great gray owl, Strix nebulosa",25:"European fire salamander, Salamandra salamandra",26:"common newt, Triturus vulgaris",27:"eft",28:"spotted salamander, Ambystoma maculatum",29:"axolotl, mud puppy, Ambystoma mexicanum",30:"bullfrog, Rana catesbeiana",31:"tree frog, tree-frog",32:"tailed frog, bell toad, ribbed toad, tailed toad, Ascaphus trui",33:"loggerhead, loggerhead turtle, Caretta caretta",34:"leatherback turtle, leatherback, leathery turtle, Dermochelys coriacea",35:"mud turtle",36:"terrapin",37:"box turtle, box tortoise",38:"banded gecko",39:"common iguana, iguana, Iguana iguana",40:"American chameleon, anole, Anolis carolinensis",41:"whiptail, whiptail lizard",42:"agama",43:"frilled lizard, Chlamydosaurus kingi",44:"alligator lizard",45:"Gila monster, Heloderma suspectum",46:"green lizard, Lacerta viridis",47:"African chameleon, Chamaeleo chamaeleon",48:"Komodo dragon, Komodo lizard, dragon lizard, giant lizard, Varanus komodoensis",49:"African crocodile, Nile crocodile, Crocodylus niloticus",50:"American alligator, Alligator mississipiensis",51:"triceratops",52:"thunder snake, worm snake, Carphophis amoenus",53:"ringneck snake, ring-necked snake, ring snake",54:"hognose snake, puff adder, sand viper",55:"green snake, grass snake",56:"king snake, kingsnake",57:"garter snake, grass snake",58:"water snake",59:"vine snake",60:"night snake, Hypsiglena torquata",61:"boa constrictor, Constrictor constrictor",62:"rock python, rock snake, Python sebae",63:"Indian cobra, Naja naja",64:"green mamba",65:"sea snake",66:"horned viper, cerastes, sand viper, horned asp, Cerastes cornutus",67:"diamondback, diamondback rattlesnake, Crotalus adamanteus",68:"sidewinder, horned rattlesnake, Crotalus cerastes",69:"trilobite",70:"harvestman, daddy longlegs, Phalangium opilio",71:"scorpion",72:"black and gold garden spider, Argiope aurantia",73:"barn spider, Araneus cavaticus",74:"garden spider, Aranea diademata",75:"black widow, Latrodectus mactans",76:"tarantula",77:"wolf spider, hunting spider",78:"tick",79:"centipede",80:"black grouse",81:"ptarmigan",82:"ruffed grouse, partridge, Bonasa umbellus",83:"prairie chicken, prairie grouse, prairie fowl",84:"peacock",85:"quail",86:"partridge",87:"African grey, African gray, Psittacus erithacus",88:"macaw",89:"sulphur-crested cockatoo, Kakatoe galerita, Cacatua galerita",90:"lorikeet",91:"coucal",92:"bee eater",93:"hornbill",94:"hummingbird",95:"jacamar",96:"toucan",97:"drake",98:"red-breasted merganser, Mergus serrator",99:"goose",100:"black swan, Cygnus atratus",101:"tusker",102:"echidna, spiny anteater, anteater",103:"platypus, duckbill, duckbilled platypus, duck-billed platypus, Ornithorhynchus anatinus",104:"wallaby, brush kangaroo",105:"koala, koala bear, kangaroo bear, native bear, Phascolarctos cinereus",106:"wombat",107:"jelly fish",108:"sea anemone, anemone",109:"brain coral",110:"flatworm, platyhelminth",111:"nematode, nematode worm, roundworm",112:"conch",113:"snail",114:"slug",115:"sea slug, nudibranch",116:"chiton, coat-of-mail shell, sea cradle, polyplacophore",117:"chambered nautilus, pearly nautilus, nautilus",118:"Dungeness crab, Cancer magister",119:"rock crab, Cancer irroratus",120:"fiddler crab",121:"king crab, Alaska crab, Alaskan king crab, Alaska king crab, Paralithodes camtschatica",122:"American lobster, Northern lobster, Maine lobster, Homarus americanus",123:"spiny lobster, langouste, rock lobster, crawfish, crayfish, sea crawfish",124:"crayfish, crawfish, crawdad, crawdaddy",125:"hermit crab",126:"isopod",127:"white stork, Ciconia ciconia",128:"black stork, Ciconia nigra",129:"spoonbill",130:"flamingo",131:"little blue heron, Egretta caerulea",132:"American egret, great white heron, Egretta albus",133:"bittern",134:"crane",135:"limpkin, Aramus pictus",136:"European gallinule, Porphyrio porphyrio",137:"American coot, marsh hen, mud hen, water hen, Fulica americana",138:"bustard",139:"ruddy turnstone, Arenaria interpres",140:"red-backed sandpiper, dunlin, Erolia alpina",141:"redshank, Tringa totanus",142:"dowitcher",143:"oystercatcher, oyster catcher",144:"pelican",145:"king penguin, Aptenodytes patagonica",146:"albatross, mollymawk",147:"grey whale, gray whale, devilfish, Eschrichtius gibbosus, Eschrichtius robustus",148:"killer whale, killer, orca, grampus, sea wolf, Orcinus orca",149:"dugong, Dugong dugon",150:"sea lion",151:"Chihuahua",152:"Japanese spaniel",153:"Maltese dog, Maltese terrier, Maltese",154:"Pekinese, Pekingese, Peke",155:"Shih-Tzu",156:"Blenheim spaniel",157:"papillon",158:"toy terrier",159:"Rhodesian ridgeback",160:"Afghan hound, Afghan",161:"basset, basset hound",162:"beagle",163:"bloodhound, sleuthhound",164:"bluetick",165:"black-and-tan coonhound",166:"Walker hound, Walker foxhound",167:"English foxhound",168:"redbone",169:"borzoi, Russian wolfhound",170:"Irish wolfhound",171:"Italian greyhound",172:"whippet",173:"Ibizan hound, Ibizan Podenco",174:"Norwegian elkhound, elkhound",175:"otterhound, otter hound",176:"Saluki, gazelle hound",177:"Scottish deerhound, deerhound",178:"Weimaraner",179:"Staffordshire bullterrier, Staffordshire bull terrier",180:"American Staffordshire terrier, Staffordshire terrier, American pit bull terrier, pit bull terrier",181:"Bedlington terrier",182:"Border terrier",183:"Kerry blue terrier",184:"Irish terrier",185:"Norfolk terrier",186:"Norwich terrier",187:"Yorkshire terrier",188:"wire-haired fox terrier",189:"Lakeland terrier",190:"Sealyham terrier, Sealyham",191:"Airedale, Airedale terrier",192:"cairn, cairn terrier",193:"Australian terrier",194:"Dandie Dinmont, Dandie Dinmont terrier",195:"Boston bull, Boston terrier",196:"miniature schnauzer",197:"giant schnauzer",198:"standard schnauzer",199:"Scotch terrier, Scottish terrier, Scottie",200:"Tibetan terrier, chrysanthemum dog",201:"silky terrier, Sydney silky",202:"soft-coated wheaten terrier",203:"West Highland white terrier",204:"Lhasa, Lhasa apso",205:"flat-coated retriever",206:"curly-coated retriever",207:"golden retriever",208:"Labrador retriever",209:"Chesapeake Bay retriever",210:"German short-haired pointer",211:"vizsla, Hungarian pointer",212:"English setter",213:"Irish setter, red setter",214:"Gordon setter",215:"Brittany spaniel",216:"clumber, clumber spaniel",217:"English springer, English springer spaniel",218:"Welsh springer spaniel",219:"cocker spaniel, English cocker spaniel, cocker",220:"Sussex spaniel",221:"Irish water spaniel",222:"kuvasz",223:"schipperke",224:"groenendael",225:"malinois",226:"briard",227:"kelpie",228:"komondor",229:"Old English sheepdog, bobtail",230:"Shetland sheepdog, Shetland sheep dog, Shetland",231:"collie",232:"Border collie",233:"Bouvier des Flandres, Bouviers des Flandres",234:"Rottweiler",235:"German shepherd, German shepherd dog, German police dog, alsatian",236:"Doberman, Doberman pinscher",237:"miniature pinscher",238:"Greater Swiss Mountain dog",239:"Bernese mountain dog",240:"Appenzeller",241:"EntleBucher",242:"boxer",243:"bull mastiff",244:"Tibetan mastiff",245:"French bulldog",246:"Great Dane",247:"Saint Bernard, St Bernard",248:"Eskimo dog, husky",249:"malamute, malemute, Alaskan malamute",250:"Siberian husky",251:"dalmatian, coach dog, carriage dog",252:"affenpinscher, monkey pinscher, monkey dog",253:"basenji",254:"pug, pug-dog",255:"Leonberg",256:"Newfoundland, Newfoundland dog",257:"Great Pyrenees",258:"Samoyed, Samoyede",259:"Pomeranian",260:"chow, chow chow",261:"keeshond",262:"Brabancon griffon",263:"Pembroke, Pembroke Welsh corgi",264:"Cardigan, Cardigan Welsh corgi",265:"toy poodle",266:"miniature poodle",267:"standard poodle",268:"Mexican hairless",269:"timber wolf, grey wolf, gray wolf, Canis lupus",270:"white wolf, Arctic wolf, Canis lupus tundrarum",271:"red wolf, maned wolf, Canis rufus, Canis niger",272:"coyote, prairie wolf, brush wolf, Canis latrans",273:"dingo, warrigal, warragal, Canis dingo",274:"dhole, Cuon alpinus",275:"African hunting dog, hyena dog, Cape hunting dog, Lycaon pictus",276:"hyena, hyaena",277:"red fox, Vulpes vulpes",278:"kit fox, Vulpes macrotis",279:"Arctic fox, white fox, Alopex lagopus",280:"grey fox, gray fox, Urocyon cinereoargenteus",281:"tabby, tabby cat",282:"tiger cat",283:"Persian cat",284:"Siamese cat, Siamese",285:"Egyptian cat",286:"cougar, puma, catamount, mountain lion, painter, panther, Felis concolor",287:"lynx, catamount",288:"leopard, Panthera pardus",289:"snow leopard, ounce, Panthera uncia",290:"jaguar, panther, Panthera onca, Felis onca",291:"lion, king of beasts, Panthera leo",292:"tiger, Panthera tigris",293:"cheetah, chetah, Acinonyx jubatus",294:"brown bear, bruin, Ursus arctos",295:"American black bear, black bear, Ursus americanus, Euarctos americanus",296:"ice bear, polar bear, Ursus Maritimus, Thalarctos maritimus",297:"sloth bear, Melursus ursinus, Ursus ursinus",298:"mongoose",299:"meerkat, mierkat",300:"tiger beetle",301:"ladybug, ladybeetle, lady beetle, ladybird, ladybird beetle",302:"ground beetle, carabid beetle",303:"long-horned beetle, longicorn, longicorn beetle",304:"leaf beetle, chrysomelid",305:"dung beetle",306:"rhinoceros beetle",307:"weevil",308:"fly",309:"bee",310:"ant, emmet, pismire",311:"grasshopper, hopper",312:"cricket",313:"walking stick, walkingstick, stick insect",314:"cockroach, roach",315:"mantis, mantid",316:"cicada, cicala",317:"leafhopper",318:"lacewing, lacewing fly",319:"dragonfly, darning needle, devil's darning needle, sewing needle, snake feeder, snake doctor, mosquito hawk, skeeter hawk",320:"damselfly",321:"admiral",322:"ringlet, ringlet butterfly",323:"monarch, monarch butterfly, milkweed butterfly, Danaus plexippus",324:"cabbage butterfly",325:"sulphur butterfly, sulfur butterfly",326:"lycaenid, lycaenid butterfly",327:"starfish, sea star",328:"sea urchin",329:"sea cucumber, holothurian",330:"wood rabbit, cottontail, cottontail rabbit",331:"hare",332:"Angora, Angora rabbit",333:"hamster",334:"porcupine, hedgehog",335:"fox squirrel, eastern fox squirrel, Sciurus niger",336:"marmot",337:"beaver",338:"guinea pig, Cavia cobaya",339:"sorrel",340:"zebra",341:"hog, pig, grunter, squealer, Sus scrofa",342:"wild boar, boar, Sus scrofa",343:"warthog",344:"hippopotamus, hippo, river horse, Hippopotamus amphibius",345:"ox",346:"water buffalo, water ox, Asiatic buffalo, Bubalus bubalis",347:"bison",348:"ram, tup",349:"bighorn, bighorn sheep, cimarron, Rocky Mountain bighorn, Rocky Mountain sheep, Ovis canadensis",350:"ibex, Capra ibex",351:"hartebeest",352:"impala, Aepyceros melampus",353:"gazelle",354:"Arabian camel, dromedary, Camelus dromedarius",355:"llama",356:"weasel",357:"mink",358:"polecat, fitch, foulmart, foumart, Mustela putorius",359:"black-footed ferret, ferret, Mustela nigripes",360:"otter",361:"skunk, polecat, wood pussy",362:"badger",363:"armadillo",364:"three-toed sloth, ai, Bradypus tridactylus",365:"orangutan, orang, orangutang, Pongo pygmaeus",366:"gorilla, Gorilla gorilla",367:"chimpanzee, chimp, Pan troglodytes",368:"gibbon, Hylobates lar",369:"siamang, Hylobates syndactylus, Symphalangus syndactylus",370:"guenon, guenon monkey",371:"patas, hussar monkey, Erythrocebus patas",372:"baboon",373:"macaque",374:"langur",375:"colobus, colobus monkey",376:"proboscis monkey, Nasalis larvatus",377:"marmoset",378:"capuchin, ringtail, Cebus capucinus",379:"howler monkey, howler",380:"titi, titi monkey",381:"spider monkey, Ateles geoffroyi",382:"squirrel monkey, Saimiri sciureus",383:"Madagascar cat, ring-tailed lemur, Lemur catta",384:"indri, indris, Indri indri, Indri brevicaudatus",385:"Indian elephant, Elephas maximus",386:"African elephant, Loxodonta africana",387:"lesser panda, red panda, panda, bear cat, cat bear, Ailurus fulgens",388:"giant panda, panda, panda bear, coon bear, Ailuropoda melanoleuca",389:"barracouta, snoek",390:"eel",391:"coho, cohoe, coho salmon, blue jack, silver salmon, Oncorhynchus kisutch",392:"rock beauty, Holocanthus tricolor",393:"anemone fish",394:"sturgeon",395:"gar, garfish, garpike, billfish, Lepisosteus osseus",396:"lionfish",397:"puffer, pufferfish, blowfish, globefish",398:"abacus",399:"abaya",400:"academic gown, academic robe, judge's robe",401:"accordion, piano accordion, squeeze box",402:"acoustic guitar",403:"aircraft carrier, carrier, flattop, attack aircraft carrier",404:"airliner",405:"airship, dirigible",406:"altar",407:"ambulance",408:"amphibian, amphibious vehicle",409:"analog clock",410:"apiary, bee house",411:"apron",412:"ashcan, trash can, garbage can, wastebin, ash bin, ash-bin, ashbin, dustbin, trash barrel, trash bin",413:"assault rifle, assault gun",414:"backpack, back pack, knapsack, packsack, rucksack, haversack",415:"bakery, bakeshop, bakehouse",416:"balance beam, beam",417:"balloon",418:"ballpoint, ballpoint pen, ballpen, Biro",419:"Band Aid",420:"banjo",421:"bannister, banister, balustrade, balusters, handrail",422:"barbell",423:"barber chair",424:"barbershop",425:"barn",426:"barometer",427:"barrel, cask",428:"barrow, garden cart, lawn cart, wheelbarrow",429:"baseball",430:"basketball",431:"bassinet",432:"bassoon",433:"bathing cap, swimming cap",434:"bath towel",435:"bathtub, bathing tub, bath, tub",436:"beach wagon, station wagon, wagon, estate car, beach waggon, station waggon, waggon",437:"beacon, lighthouse, beacon light, pharos",438:"beaker",439:"bearskin, busby, shako",440:"beer bottle",441:"beer glass",442:"bell cote, bell cot",443:"bib",444:"bicycle-built-for-two, tandem bicycle, tandem",445:"bikini, two-piece",446:"binder, ring-binder",447:"binoculars, field glasses, opera glasses",448:"birdhouse",449:"boathouse",450:"bobsled, bobsleigh, bob",451:"bolo tie, bolo, bola tie, bola",452:"bonnet, poke bonnet",453:"bookcase",454:"bookshop, bookstore, bookstall",455:"bottlecap",456:"bow",457:"bow tie, bow-tie, bowtie",458:"brass, memorial tablet, plaque",459:"brassiere, bra, bandeau",460:"breakwater, groin, groyne, mole, bulwark, seawall, jetty",461:"breastplate, aegis, egis",462:"broom",463:"bucket, pail",464:"buckle",465:"bulletproof vest",466:"bullet train, bullet",467:"butcher shop, meat market",468:"cab, hack, taxi, taxicab",469:"caldron, cauldron",470:"candle, taper, wax light",471:"cannon",472:"canoe",473:"can opener, tin opener",474:"cardigan",475:"car mirror",476:"carousel, carrousel, merry-go-round, roundabout, whirligig",477:"carpenter's kit, tool kit",478:"carton",479:"car wheel",480:"cash machine, cash dispenser, automated teller machine, automatic teller machine, automated teller, automatic teller, ATM",481:"cassette",482:"cassette player",483:"castle",484:"catamaran",485:"CD player",486:"cello, violoncello",487:"cellular telephone, cellular phone, cellphone, cell, mobile phone",488:"chain",489:"chainlink fence",490:"chain mail, ring mail, mail, chain armor, chain armour, ring armor, ring armour",491:"chain saw, chainsaw",492:"chest",493:"chiffonier, commode",494:"chime, bell, gong",495:"china cabinet, china closet",496:"Christmas stocking",497:"church, church building",498:"cinema, movie theater, movie theatre, movie house, picture palace",499:"cleaver, meat cleaver, chopper",500:"cliff dwelling",501:"cloak",502:"clog, geta, patten, sabot",503:"cocktail shaker",504:"coffee mug",505:"coffeepot",506:"coil, spiral, volute, whorl, helix",507:"combination lock",508:"computer keyboard, keypad",509:"confectionery, confectionary, candy store",510:"container ship, containership, container vessel",511:"convertible",512:"corkscrew, bottle screw",513:"cornet, horn, trumpet, trump",514:"cowboy boot",515:"cowboy hat, ten-gallon hat",516:"cradle",517:"crane",518:"crash helmet",519:"crate",520:"crib, cot",521:"Crock Pot",522:"croquet ball",523:"crutch",524:"cuirass",525:"dam, dike, dyke",526:"desk",527:"desktop computer",528:"dial telephone, dial phone",529:"diaper, nappy, napkin",530:"digital clock",531:"digital watch",532:"dining table, board",533:"dishrag, dishcloth",534:"dishwasher, dish washer, dishwashing machine",535:"disk brake, disc brake",536:"dock, dockage, docking facility",537:"dogsled, dog sled, dog sleigh",538:"dome",539:"doormat, welcome mat",540:"drilling platform, offshore rig",541:"drum, membranophone, tympan",542:"drumstick",543:"dumbbell",544:"Dutch oven",545:"electric fan, blower",546:"electric guitar",547:"electric locomotive",548:"entertainment center",549:"envelope",550:"espresso maker",551:"face powder",552:"feather boa, boa",553:"file, file cabinet, filing cabinet",554:"fireboat",555:"fire engine, fire truck",556:"fire screen, fireguard",557:"flagpole, flagstaff",558:"flute, transverse flute",559:"folding chair",560:"football helmet",561:"forklift",562:"fountain",563:"fountain pen",564:"four-poster",565:"freight car",566:"French horn, horn",567:"frying pan, frypan, skillet",568:"fur coat",569:"garbage truck, dustcart",570:"gasmask, respirator, gas helmet",571:"gas pump, gasoline pump, petrol pump, island dispenser",572:"goblet",573:"go-kart",574:"golf ball",575:"golfcart, golf cart",576:"gondola",577:"gong, tam-tam",578:"gown",579:"grand piano, grand",580:"greenhouse, nursery, glasshouse",581:"grille, radiator grille",582:"grocery store, grocery, food market, market",583:"guillotine",584:"hair slide",585:"hair spray",586:"half track",587:"hammer",588:"hamper",589:"hand blower, blow dryer, blow drier, hair dryer, hair drier",590:"hand-held computer, hand-held microcomputer",591:"handkerchief, hankie, hanky, hankey",592:"hard disc, hard disk, fixed disk",593:"harmonica, mouth organ, harp, mouth harp",594:"harp",595:"harvester, reaper",596:"hatchet",597:"holster",598:"home theater, home theatre",599:"honeycomb",600:"hook, claw",601:"hoopskirt, crinoline",602:"horizontal bar, high bar",603:"horse cart, horse-cart",604:"hourglass",605:"iPod",606:"iron, smoothing iron",607:"jack-o'-lantern",608:"jean, blue jean, denim",609:"jeep, landrover",610:"jersey, T-shirt, tee shirt",611:"jigsaw puzzle",612:"jinrikisha, ricksha, rickshaw",613:"joystick",614:"kimono",615:"knee pad",616:"knot",617:"lab coat, laboratory coat",618:"ladle",619:"lampshade, lamp shade",620:"laptop, laptop computer",621:"lawn mower, mower",622:"lens cap, lens cover",623:"letter opener, paper knife, paperknife",624:"library",625:"lifeboat",626:"lighter, light, igniter, ignitor",627:"limousine, limo",628:"liner, ocean liner",629:"lipstick, lip rouge",630:"Loafer",631:"lotion",632:"loudspeaker, speaker, speaker unit, loudspeaker system, speaker system",633:"loupe, jeweler's loupe",634:"lumbermill, sawmill",635:"magnetic compass",636:"mailbag, postbag",637:"mailbox, letter box",638:"maillot",639:"maillot, tank suit",640:"manhole cover",641:"maraca",642:"marimba, xylophone",643:"mask",644:"matchstick",645:"maypole",646:"maze, labyrinth",647:"measuring cup",648:"medicine chest, medicine cabinet",649:"megalith, megalithic structure",650:"microphone, mike",651:"microwave, microwave oven",652:"military uniform",653:"milk can",654:"minibus",655:"miniskirt, mini",656:"minivan",657:"missile",658:"mitten",659:"mixing bowl",660:"mobile home, manufactured home",661:"Model T",662:"modem",663:"monastery",664:"monitor",665:"moped",666:"mortar",667:"mortarboard",668:"mosque",669:"mosquito net",670:"motor scooter, scooter",671:"mountain bike, all-terrain bike, off-roader",672:"mountain tent",673:"mouse, computer mouse",674:"mousetrap",675:"moving van",676:"muzzle",677:"nail",678:"neck brace",679:"necklace",680:"nipple",681:"notebook, notebook computer",682:"obelisk",683:"oboe, hautboy, hautbois",684:"ocarina, sweet potato",685:"odometer, hodometer, mileometer, milometer",686:"oil filter",687:"organ, pipe organ",688:"oscilloscope, scope, cathode-ray oscilloscope, CRO",689:"overskirt",690:"oxcart",691:"oxygen mask",692:"packet",693:"paddle, boat paddle",694:"paddlewheel, paddle wheel",695:"padlock",696:"paintbrush",697:"pajama, pyjama, pj's, jammies",698:"palace",699:"panpipe, pandean pipe, syrinx",700:"paper towel",701:"parachute, chute",702:"parallel bars, bars",703:"park bench",704:"parking meter",705:"passenger car, coach, carriage",706:"patio, terrace",707:"pay-phone, pay-station",708:"pedestal, plinth, footstall",709:"pencil box, pencil case",710:"pencil sharpener",711:"perfume, essence",712:"Petri dish",713:"photocopier",714:"pick, plectrum, plectron",715:"pickelhaube",716:"picket fence, paling",717:"pickup, pickup truck",718:"pier",719:"piggy bank, penny bank",720:"pill bottle",721:"pillow",722:"ping-pong ball",723:"pinwheel",724:"pirate, pirate ship",725:"pitcher, ewer",726:"plane, carpenter's plane, woodworking plane",727:"planetarium",728:"plastic bag",729:"plate rack",730:"plow, plough",731:"plunger, plumber's helper",732:"Polaroid camera, Polaroid Land camera",733:"pole",734:"police van, police wagon, paddy wagon, patrol wagon, wagon, black Maria",735:"poncho",736:"pool table, billiard table, snooker table",737:"pop bottle, soda bottle",738:"pot, flowerpot",739:"potter's wheel",740:"power drill",741:"prayer rug, prayer mat",742:"printer",743:"prison, prison house",744:"projectile, missile",745:"projector",746:"puck, hockey puck",747:"punching bag, punch bag, punching ball, punchball",748:"purse",749:"quill, quill pen",750:"quilt, comforter, comfort, puff",751:"racer, race car, racing car",752:"racket, racquet",753:"radiator",754:"radio, wireless",755:"radio telescope, radio reflector",756:"rain barrel",757:"recreational vehicle, RV, R.V.",758:"reel",759:"reflex camera",760:"refrigerator, icebox",761:"remote control, remote",762:"restaurant, eating house, eating place, eatery",763:"revolver, six-gun, six-shooter",764:"rifle",765:"rocking chair, rocker",766:"rotisserie",767:"rubber eraser, rubber, pencil eraser",768:"rugby ball",769:"rule, ruler",770:"running shoe",771:"safe",772:"safety pin",773:"saltshaker, salt shaker",774:"sandal",775:"sarong",776:"sax, saxophone",777:"scabbard",778:"scale, weighing machine",779:"school bus",780:"schooner",781:"scoreboard",782:"screen, CRT screen",783:"screw",784:"screwdriver",785:"seat belt, seatbelt",786:"sewing machine",787:"shield, buckler",788:"shoe shop, shoe-shop, shoe store",789:"shoji",790:"shopping basket",791:"shopping cart",792:"shovel",793:"shower cap",794:"shower curtain",795:"ski",796:"ski mask",797:"sleeping bag",798:"slide rule, slipstick",799:"sliding door",800:"slot, one-armed bandit",801:"snorkel",802:"snowmobile",803:"snowplow, snowplough",804:"soap dispenser",805:"soccer ball",806:"sock",807:"solar dish, solar collector, solar furnace",808:"sombrero",809:"soup bowl",810:"space bar",811:"space heater",812:"space shuttle",813:"spatula",814:"speedboat",815:"spider web, spider's web",816:"spindle",817:"sports car, sport car",818:"spotlight, spot",819:"stage",820:"steam locomotive",821:"steel arch bridge",822:"steel drum",823:"stethoscope",824:"stole",825:"stone wall",826:"stopwatch, stop watch",827:"stove",828:"strainer",829:"streetcar, tram, tramcar, trolley, trolley car",830:"stretcher",831:"studio couch, day bed",832:"stupa, tope",833:"submarine, pigboat, sub, U-boat",834:"suit, suit of clothes",835:"sundial",836:"sunglass",837:"sunglasses, dark glasses, shades",838:"sunscreen, sunblock, sun blocker",839:"suspension bridge",840:"swab, swob, mop",841:"sweatshirt",842:"swimming trunks, bathing trunks",843:"swing",844:"switch, electric switch, electrical switch",845:"syringe",846:"table lamp",847:"tank, army tank, armored combat vehicle, armoured combat vehicle",848:"tape player",849:"teapot",850:"teddy, teddy bear",851:"television, television system",852:"tennis ball",853:"thatch, thatched roof",854:"theater curtain, theatre curtain",855:"thimble",856:"thresher, thrasher, threshing machine",857:"throne",858:"tile roof",859:"toaster",860:"tobacco shop, tobacconist shop, tobacconist",861:"toilet seat",862:"torch",863:"totem pole",864:"tow truck, tow car, wrecker",865:"toyshop",866:"tractor",867:"trailer truck, tractor trailer, trucking rig, rig, articulated lorry, semi",868:"tray",869:"trench coat",870:"tricycle, trike, velocipede",871:"trimaran",872:"tripod",873:"triumphal arch",874:"trolleybus, trolley coach, trackless trolley",875:"trombone",876:"tub, vat",877:"turnstile",878:"typewriter keyboard",879:"umbrella",880:"unicycle, monocycle",881:"upright, upright piano",882:"vacuum, vacuum cleaner",883:"vase",884:"vault",885:"velvet",886:"vending machine",887:"vestment",888:"viaduct",889:"violin, fiddle",890:"volleyball",891:"waffle iron",892:"wall clock",893:"wallet, billfold, notecase, pocketbook",894:"wardrobe, closet, press",895:"warplane, military plane",896:"washbasin, handbasin, washbowl, lavabo, wash-hand basin",897:"washer, automatic washer, washing machine",898:"water bottle",899:"water jug",900:"water tower",901:"whiskey jug",902:"whistle",903:"wig",904:"window screen",905:"window shade",906:"Windsor tie",907:"wine bottle",908:"wing",909:"wok",910:"wooden spoon",911:"wool, woolen, woollen",912:"worm fence, snake fence, snake-rail fence, Virginia fence",913:"wreck",914:"yawl",915:"yurt",916:"web site, website, internet site, site",917:"comic book",918:"crossword puzzle, crossword",919:"street sign",920:"traffic light, traffic signal, stoplight",921:"book jacket, dust cover, dust jacket, dust wrapper",922:"menu",923:"plate",924:"guacamole",925:"consomme",926:"hot pot, hotpot",927:"trifle",928:"ice cream, icecream",929:"ice lolly, lolly, lollipop, popsicle",930:"French loaf",931:"bagel, beigel",932:"pretzel",933:"cheeseburger",934:"hotdog, hot dog, red hot",935:"mashed potato",936:"head cabbage",937:"broccoli",938:"cauliflower",939:"zucchini, courgette",940:"spaghetti squash",941:"acorn squash",942:"butternut squash",943:"cucumber, cuke",944:"artichoke, globe artichoke",945:"bell pepper",946:"cardoon",947:"mushroom",948:"Granny Smith",949:"strawberry",950:"orange",951:"lemon",952:"fig",953:"pineapple, ananas",954:"banana",955:"jackfruit, jak, jack",956:"custard apple",957:"pomegranate",958:"hay",959:"carbonara",960:"chocolate sauce, chocolate syrup",961:"dough",962:"meat loaf, meatloaf",963:"pizza, pizza pie",964:"potpie",965:"burrito",966:"red wine",967:"espresso",968:"cup",969:"eggnog",970:"alp",971:"bubble",972:"cliff, drop, drop-off",973:"coral reef",974:"geyser",975:"lakeside, lakeshore",976:"promontory, headland, head, foreland",977:"sandbar, sand bar",978:"seashore, coast, seacoast, sea-coast",979:"valley, vale",980:"volcano",981:"ballplayer, baseball player",982:"groom, bridegroom",983:"scuba diver",984:"rapeseed",985:"daisy",986:"yellow lady's slipper, yellow lady-slipper, Cypripedium calceolus, Cypripedium parviflorum",987:"corn",988:"acorn",989:"hip, rose hip, rosehip",990:"buckeye, horse chestnut, conker",991:"coral fungus",992:"agaric",993:"gyromitra",994:"stinkhorn, carrion fungus",995:"earthstar",996:"hen-of-the-woods, hen of the woods, Polyporus frondosus, Grifola frondosa",997:"bolete",998:"ear, spike, capitulum",999:"toilet tissue, toilet paper, bathroom tissue"},Tn=224,t6={"1.00":"module_apply_default/MobilenetV1/Logits/global_pool","2.00":"module_apply_default/MobilenetV2/Logits/AvgPool"},Zr={"1.00":{.25:{url:"https://tfhub.dev/google/imagenet/mobilenet_v1_025_224/classification/1",inputRange:[0,1]},"0.50":{url:"https://tfhub.dev/google/imagenet/mobilenet_v1_050_224/classification/1",inputRange:[0,1]},.75:{url:"https://tfhub.dev/google/imagenet/mobilenet_v1_075_224/classification/1",inputRange:[0,1]},"1.00":{url:"https://tfhub.dev/google/imagenet/mobilenet_v1_100_224/classification/1",inputRange:[0,1]}},"2.00":{"0.50":{url:"https://tfhub.dev/google/imagenet/mobilenet_v2_050_224/classification/2",inputRange:[0,1]},.75:{url:"https://tfhub.dev/google/imagenet/mobilenet_v2_075_224/classification/2",inputRange:[0,1]},"1.00":{url:"https://tfhub.dev/google/imagenet/mobilenet_v2_100_224/classification/2",inputRange:[0,1]}}};function n6(t){return t===void 0&&(t={version:1,alpha:1}),Gi(this,void 0,void 0,function(){var e,n,r,s,a,o,i;return qi(this,function(l){switch(l.label){case 0:if(xD==null)throw new Error("Cannot find TensorFlow.js. If you are using a <script> tag, please also include @tensorflow/tfjs on the page before using this model.");if(e=t.version.toFixed(2),n=t.alpha?t.alpha.toFixed(2):"",r=-1,s=1,t.modelUrl==null){if(!(e in Zr))throw new Error("Invalid version of MobileNet. Valid versions are: "+Object.keys(Zr));if(!(n in Zr[e]))throw new Error("MobileNet constructed with invalid alpha "+t.alpha+". Valid multipliers for this version are: "+Object.keys(Zr[e])+".");o=Zr[e][n].inputRange,r=o[0],s=o[1]}return t.inputRange!=null&&(i=t.inputRange,r=i[0],s=i[1]),[4,(a=new r6(e,n,t.modelUrl,r,s)).load()];case 1:return l.sent(),[2,a]}})})}var r6=function(){function t(e,n,r,s,a){s===void 0&&(s=-1),a===void 0&&(a=1),this.version=e,this.alpha=n,this.modelUrl=r,this.inputMin=s,this.inputMax=a,this.normalizationConstant=(a-s)/255}return t.prototype.load=function(){return Gi(this,void 0,void 0,function(){var e,n,r,s,a=this;return qi(this,function(o){switch(o.label){case 0:return this.modelUrl?(e=this,[4,em(this.modelUrl)]):[3,2];case 1:return e.model=o.sent(),[3,4];case 2:return n=Zr[this.version][this.alpha].url,r=this,[4,em(n,{fromTFHub:!0})];case 3:r.model=o.sent(),o.label=4;case 4:return[4,(s=Y(function(){return a.model.predict(nr([1,Tn,Tn,3]))})).data()];case 5:return o.sent(),s.dispose(),[2]}})})},t.prototype.infer=function(e,n){var r=this;return n===void 0&&(n=!1),Y(function(){e instanceof he||(e=q2(e));var s=M(R(re(e,"float32"),r.normalizationConstant),r.inputMin),a=s;(e.shape[0]!==Tn||e.shape[1]!==Tn)&&(a=qf.resizeBilinear(s,[Tn,Tn],!0));var o,i=I(a,[-1,Tn,Tn,3]);if(n){var l=t6[r.version],u=r.model.execute(i,l);o=bo(u,[1,2])}else{var p=r.model.predict(i);o=J(p,[0,1],[-1,1e3])}return o})},t.prototype.classify=function(e,n){return n===void 0&&(n=3),Gi(this,void 0,void 0,function(){var r,s;return qi(this,function(a){switch(a.label){case 0:return[4,s6(r=this.infer(e),n)];case 1:return s=a.sent(),r.dispose(),[2,s]}})})},t}();function s6(t,e){return Gi(this,void 0,void 0,function(){var n,r,s,a,o,i,l;return qi(this,function(u){switch(u.label){case 0:return[4,(n=zf(t)).data()];case 1:for(r=u.sent(),n.dispose(),s=[],l=0;l<r.length;l++)s.push({value:r[l],index:l});for(s.sort(function(p,c){return c.value-p.value}),a=new Float32Array(e),o=new Int32Array(e),l=0;l<e;l++)a[l]=s[l].value,o[l]=s[l].index;for(i=[],l=0;l<o.length;l++)i.push({className:e6[o[l]],probability:a[l]});return[2,i]}})})}const a6=()=>{const[t,e]=F.useState(null),[n,r]=F.useState(null),[s,a]=F.useState(!1),[o,i]=F.useState(null),l=pl();F.useEffect(()=>{(async()=>{const b=await n6();i(b)})()},[]);const u=w=>{var y;const b=(y=w.target.files)==null?void 0:y[0];b&&e(b)},p=async w=>o?await o.classify(w):[],c=async()=>{if(t){console.log("Uploaded file:",t),a(!0);const w=document.createElement("img");w.src=URL.createObjectURL(t),w.onload=async()=>{var v;const y=(v=(await p(w))[0])==null?void 0:v.className,S=Math.floor(Math.random()*41)+60;y&&(y.includes("apple")||y.includes("banana"))?r({fruit:y.charAt(0).toUpperCase()+y.slice(1),classification:"Ripe",qualityIndex:S}):r({fruit:"Unknown",classification:"N/A",qualityIndex:0}),a(!1)}}},f=()=>{e(null),r(null)},h=()=>{l("/my-produce")},m=w=>{switch(w){case"Ripe":return"text-[#8C8849]";case"Rotten":return"text-brown-500";case"Unripe":return"text-yellow-500";default:return"text-gray-500"}};return $.jsxs("div",{className:"w-full h-screen bg-cover bg-center flex flex-col py-20 items-center relative px-4",style:{backgroundImage:`url(${Iy})`},children:[$.jsx("div",{className:"absolute inset-0",children:$.jsx("div",{className:"h-full w-full bg-black opacity-75"})}),$.jsx("div",{className:"max-w-[600px] w-full bg-white rounded-3xl shadow-md p-8 text-center relative z-10 mt-5",children:s?$.jsx("p",{className:"text-[#2A3340] text-lg",children:"Analyzing your produce..."}):n?$.jsxs("div",{className:"mt-4",children:[$.jsxs("h2",{className:"font-bold text-black text-3xl mb-2",children:["Fruit Identified: ",$.jsx("span",{className:"text-[#B33F62]",children:n.fruit})]}),$.jsxs("p",{className:`text-2xl font-bold ${m(n.classification)} mb-2`,children:["Classification: ",n.classification]}),t&&$.jsx("img",{src:URL.createObjectURL(t),alt:"Fruit",className:"mt-4 mb-4 w-1/2 mx-auto"}),$.jsxs("p",{className:"text-lg",children:["Quality Index: ",n.qualityIndex,"/100"]}),$.jsx("input",{type:"range",min:"0",max:"100",value:n.qualityIndex,readOnly:!0,className:"w-full mt-4 appearance-none h-2 bg-gray-200 rounded",style:{background:`linear-gradient(to right, #B33F62 ${n.qualityIndex}%, #E5E5E5 ${n.qualityIndex}%)`}}),$.jsxs("div",{className:"flex justify-between mt-4",children:[$.jsx("button",{onClick:h,className:"bg-[#B33F62] text-white rounded-md font-medium py-2 px-4 hover:bg-[#8C8849] transition duration-300",children:"Go to Recipe"}),$.jsx("button",{onClick:f,className:"bg-[#8C8849] text-white rounded-md font-medium py-2 px-4 hover:bg-[#B33F62] transition duration-300",children:"Scan New Product"})]})]}):$.jsxs($.Fragment,{children:[$.jsx("h1",{className:"text-[#B33F62] text-3xl font-bold mb-6",children:"Scan Your Produce"}),$.jsx("p",{className:"text-[#2A3340] text-lg mb-4",children:"Upload an image of your produce, and let us help you assess its quality."}),$.jsxs("label",{className:"block my-4 w-full",children:[$.jsx("span",{className:"sr-only",children:"Choose an image"}),$.jsx("input",{type:"file",accept:"image/*",onChange:u,className:`block w-full text-sm text-gray-500\r
                           file:mr-4 file:py-3 file:px-4\r
                           file:rounded-l-md file:border-0\r
                           file:text-sm file:font-semibold\r
                           file:bg-[#2A3340] file:text-white\r
                           hover:file:bg-[#666c74] focus:outline-none`})]}),$.jsxs("button",{onClick:c,className:`bg-[#8C8849] text-black w-full rounded-md font-medium py-3 mt-6\r
                         hover:bg-[#cfca85] transition duration-300 transform hover:scale-105\r
                         shadow-md hover:shadow-lg`,children:[$.jsx(qE,{className:"inline mr-2"})," Upload"]}),t&&$.jsxs("p",{className:"text-sm text-[#2A3340] mt-4",children:["Selected File: ",t.name]})]})})]})},o6="/FreshForecast/assets/1111-KljPlNCW.jpg",i6="/FreshForecast/assets/1112-CjbZtd_h.jpg",l6="/FreshForecast/assets/1113-OD88vJFy.jpg",u6="/FreshForecast/assets/2221-Dnidu7qI.jpg",c6="/FreshForecast/assets/2222-Cg0nHY06.jpg",p6="/FreshForecast/assets/2223-BZ8w-skc.jpg",f6={1111:o6,1112:i6,1113:l6,2221:u6,2222:c6,2223:p6},d6=({imageId:t,recipeName:e,recipeInstructions:n,recipeIngredients:r})=>{const[s,a]=F.useState(!1),o=f6[t],i=()=>{a(!s)},l=r.split(",").map(p=>p.trim()),u=n.split(".").map(p=>p.trim()).filter(Boolean);return $.jsxs("div",{className:"border rounded-lg shadow-lg p-4 m-4 bg-white cursor-pointer",onClick:i,children:[$.jsx("img",{src:o,alt:e,className:"w-full h-48 object-cover rounded-md"}),$.jsx("h2",{className:"text-xl font-bold mt-2 text-center",children:e})," ",s&&$.jsxs("div",{className:"mt-2 transition-all duration-300 ease-in-out",children:[$.jsx("h3",{className:"text-lg font-semibold",children:"Ingredients:"}),$.jsx("ul",{className:"list-disc ml-5",children:l.map((p,c)=>$.jsx("li",{className:"mt-1",children:p},c))}),$.jsx("h3",{className:"text-lg font-semibold mt-2",children:"Instructions:"}),$.jsx("ol",{className:"list-decimal ml-5",children:u.map((p,c)=>$.jsx("li",{className:"mt-1",children:p},c))})]})]})},h6=[{fruitIndex:0,qualityIndex:1,imageId:"1111",recipeName:"Apple Delight",recipeInstructions:"Crush graham crackers into fine crumbs using a food processor or by hand. Melt 8 tablespoons butter and mix it with graham cracker crumbs, 2 tablespoons granulated sugar, and 1/4 teaspoon kosher salt. Press the graham cracker mixture into the bottom of an 8x8-inch baking dish to form a crust. In a large mixing bowl, beat together 8 ounces cream cheese, 1/4 cup powdered sugar, and 1 teaspoon vanilla extract until smooth. In a separate bowl, whip 1 1/2 cups cold heavy cream with the remaining 1/4 cup powdered sugar until stiff peaks form. Gently fold the whipped cream into the cream cheese mixture until well combined. Spread the cream cheese and whipped cream mixture evenly over the graham cracker crust. Spread 1 (about 21-ounce) can apple pie filling over the cream layer. Optional: Sprinkle 1/4 cup chopped pecans and crumbled 1.4-ounce chocolate-covered English toffee bar on top. Drizzle 2 tablespoons caramel sauce over the apple pie filling. Refrigerate the dessert for at least 2 hours before serving to allow it to set.",recipeIngredients:"8 ounces cream cheese, 8 tablespoons (1 stick) unsalted butter, 12 whole graham crackers sheets (about 6 1/2 ounces), or 1 1/2 cups graham cracker crumbs, 2 tablespoons granulated sugar, 1/2 teaspoon kosher salt, divided, 1/2 cup powdered sugar, divided, 1 teaspoon vanilla extract, 1 1/2 cups cold heavy cream, 1 (about 21-ounce) can apple pie filling, 1/4 cup pecans (optional), 1 (1.4-ounce) chocolate-covered English toffee bar, such as Heath (optional), 2 tablespoons caramel sauce"},{fruitIndex:0,qualityIndex:2,imageId:"1112",recipeName:"Classic Double-Crust Apple Pie",recipeInstructions:"Make the filling: Place 1/2 cup packed brown sugar, 1/2 cup granulated sugar, 2 teaspoons ground cinnamon, 3/4 teaspoon kosher salt, 1/2 teaspoon ground ginger, and 1/4 teaspoon ground nutmeg in a large bowl. Stir to combine, breaking up any clumps of sugar. Peel 3 pounds Granny Smith or Honeycrisp apples. Halve and core the apples, then cut into 1/4-inch-thick slices (about 8 cups). Add to the bowl of spiced sugar and toss to combine, making sure there are no clumps of sugar or spices left in the bottom of the bowl. Let sit at room temperature to soften until it releases about 3/4 cup liquid, about 30 minutes. Roll out 1/2 of the pie dough on a floured surface into a circle and place in the bottom of a pie dish. Add the apple mixture to the pie crust, then cover with the top crust, sealing the edges. Cut slits in the top crust to allow steam to escape. Bake in a preheated oven at 425°F for 15 minutes, then reduce the temperature to 350°F and bake for an additional 35-45 minutes until the apples are tender and the crust is golden brown.",recipeIngredients:"For the filling: 1/2 cup packed light or dark brown sugar, 1/2 cup granulated sugar, 2 teaspoons ground cinnamon, 3/4 teaspoon kosher salt, 1/2 teaspoon ground ginger, 1/4 teaspoon ground nutmeg, 3 pounds Granny Smith or Honeycrisp apples (about 7 large), or a combination, 1/3 cup all-purpose flour. For assembly and serving: 1 recipe flaky pie dough, formed into 2 disks and chilled, all-purpose flour for dusting, 1 large egg yolk, 1 tablespoon water, 1 tablespoon turbinado or coarse sugar (optional), whipped cream or vanilla ice cream for serving."},{fruitIndex:0,qualityIndex:3,imageId:"1113",recipeName:"Glazed Apple Fritters",recipeInstructions:"Prep the apples. Core, peel, and chop the apples into small pieces. Submerge them in ice-cold water with 2 teaspoons of lemon juice to prevent them from browning. In a large mixing bowl, combine 2 1/2 pounds of chopped apples with 3 tablespoons unsalted butter, 2 teaspoons ground cinnamon, and 1/4 cup granulated sugar. In a separate bowl, whisk together 1 packet of active dry yeast (2 1/4 teaspoons) with 3 1/4 cups of unbleached all-purpose flour, 1/3 cup granulated sugar, 1 teaspoon salt, and 1 teaspoon ground cinnamon. In another bowl, mix 1/2 cup whole milk (warmed to about 110°F), 2 large eggs (lightly beaten), and 1/3 cup unsalted butter (melted). Add the milk mixture to the flour mixture and stir until just combined. Fold in the prepared apple mixture. Heat vegetable oil in a deep fryer or large pot. Drop spoonfuls of the batter into the hot oil and fry until golden brown, about 3-4 minutes on each side. Drain on paper towels and let cool slightly before glazing. For the glaze, whisk together 1 1/2 cups powdered sugar, 3 to 4 tablespoons milk, and 1 teaspoon vanilla extract until smooth. Drizzle over the fritters and serve warm.",recipeIngredients:"For the apple filling: 2 1/2 pounds Granny Smith apples (about 5), 2 teaspoons freshly squeezed lemon juice, 3 tablespoons unsalted butter, 2 teaspoons ground cinnamon, 1/4 cup granulated sugar, 1/4 cup apple cider vinegar. For the dough: 1 packet active dry yeast (2 1/4 teaspoons), 3 1/4 cups unbleached all-purpose flour, divided, 1/3 cup granulated sugar, 1 teaspoon salt, 1 teaspoon ground cinnamon, 1/2 cup whole milk, 2 large eggs (lightly beaten), 1/3 cup unsalted butter (at room temperature), vegetable oil (for frying). For the glaze: 1 1/2 cups powdered sugar, 3 to 4 tablespoons milk, 1 teaspoon vanilla extract."},{fruitIndex:1,qualityIndex:1,imageId:"2221",recipeName:"Banana Split Brownies",recipeInstructions:"Preheat oven to 350°F. In a microwave, melt 8 ounces unsweetened chocolate and 3/4 cup butter in a large bowl; stir until smooth. In a separate bowl, beat 3 large eggs and 2 cups sugar on high speed for 10 minutes. Stir in the melted chocolate mixture and 1 teaspoon vanilla extract. Gradually stir in 1 cup plus 2 tablespoons all-purpose flour. Fold in 1 cup chopped maraschino cherries. Pour the batter into a greased 9x13-inch baking dish and bake for 25-30 minutes until a toothpick inserted into the center comes out clean. For the topping: In a bowl, mix 8 ounces cream cheese (softened), 1/2 cup mashed ripe banana (about 1 medium), 1/3 cup strawberry preserves, and 1 large egg (lightly beaten) until smooth. Spread the topping over the brownies and sprinkle with 1/4 cup chopped salted peanuts. Optional: garnish with sliced bananas and additional chopped maraschino cherries before serving.",recipeIngredients:"8 ounces unsweetened chocolate (chopped), 3/4 cup butter (cubed), 3 large eggs (room temperature), 2 cups sugar, 1 teaspoon vanilla extract, 1 cup plus 2 tablespoons all-purpose flour, 1 cup maraschino cherries (chopped). For the topping: 1 package (8 ounces) cream cheese (softened), 1/2 cup mashed ripe banana (about 1 medium), 1/3 cup strawberry preserves, 1 large egg (lightly beaten), 1/4 cup chopped salted peanuts. Optional: sliced bananas and additional chopped maraschino cherries."},{fruitIndex:1,qualityIndex:2,imageId:"2222",recipeName:"Banana Oatmeal Cookies",recipeInstructions:"Preheat oven to 375°F. In a bowl, combine 1 1/2 cups all-purpose flour, 1 cup sugar, 1 teaspoon salt, 1/2 teaspoon baking soda, 1/2 teaspoon ground cinnamon, and 1/4 teaspoon ground nutmeg; mix well. Beat in 3/4 cup softened butter until the mixture resembles coarse crumbs. Add 1 large egg (room temperature), 1 cup mashed ripe bananas (about 2), and 1 3/4 cups quick-cooking oats; mix well. Stir in 1 cup semisweet chocolate chips and 1/2 cup chopped walnuts. Drop by tablespoonfuls onto greased baking sheets and bake for 10-12 minutes until golden brown.",recipeIngredients:"1-1/2 cups all-purpose flour, 1 cup sugar, 1 teaspoon salt, 1/2 teaspoon baking soda, 1/2 teaspoon ground cinnamon, 1/4 teaspoon ground nutmeg, 3/4 cup butter (softened), 1 large egg (room temperature), 1 cup mashed ripe bananas (about 2), 1-3/4 cups quick-cooking oats, 1 cup semisweet chocolate chips, 1/2 cup chopped walnuts."},{fruitIndex:1,qualityIndex:3,imageId:"2223",recipeName:"Banana Blueberry Pancakes",recipeInstructions:"In a large bowl, combine 1 cup all-purpose flour, 1 tablespoon brown sugar, 1 tablespoon baking powder, and 1/2 teaspoon salt. In a second bowl, whisk together 1 large egg, 1 cup milk, 1 mashed banana, and 1 teaspoon vanilla extract. Pour the wet ingredients into the dry ingredients and stir just until moistened. Heat a non-stick skillet over medium heat and pour 1/4 cup of batter for each pancake. Cook until bubbles form on the surface, then flip and cook until golden brown. Serve warm with maple syrup.",recipeIngredients:"All-purpose flour, brown sugar, 1 banana, canola oil (for cooking), confectioners’ sugar (for serving)."}],m6=()=>$.jsx("div",{className:"flex flex-col items-center justify-center min-h-screen bg-gray-100 mb-16",children:h6.map(t=>$.jsx(d6,{imageId:t.imageId,recipeName:t.recipeName,recipeInstructions:t.recipeInstructions,recipeIngredients:t.recipeIngredients},t.imageId))}),g6=()=>$.jsx("div",{className:"max-w-[1240px] mx-auto pt-0 pb-8 px-4 grid lg:grid-cols-3 gap-4 text-white",children:$.jsxs("div",{className:"lg:col-span-2 flex justify-between ",children:[$.jsxs("div",{children:[$.jsx("h6",{className:"font-medium text-gray-400",children:"Features"}),$.jsxs("ul",{children:[$.jsx("li",{className:"py-2 text-sm",children:"Quality Tracking"}),$.jsx("li",{className:"py-2 text-sm",children:"----"})]})]}),$.jsxs("div",{children:[$.jsx("h6",{className:"font-medium text-gray-400",children:"Support"}),$.jsxs("ul",{children:[$.jsx("li",{className:"py-2 text-sm",children:"FAQs"}),$.jsx("li",{className:"py-2 text-sm",children:"----"})]})]}),$.jsxs("div",{children:[$.jsx("h6",{className:"font-medium text-gray-400",children:"Legal"}),$.jsxs("ul",{children:[$.jsx("li",{className:"py-2 text-sm",children:"Policies"}),$.jsx("li",{className:"py-2 text-sm",children:"----"})]})]})]})}),y6=()=>$.jsx("div",{className:"w-full bg-white py-4 px-4",children:$.jsxs("div",{className:"max-w-[1240px] mx-auto grid md:grid-cols-2",children:[$.jsx("div",{className:"flex justify-center items-center",children:$.jsx("img",{className:"rounded-3xl border-4 border-[#2A3340] mx-auto my-4 object-cover",src:Iy,alt:"Fresh Produce"})}),$.jsxs("div",{className:"flex flex-col justify-center",children:[$.jsx("p",{className:"text-[#B33F62] font-bold",children:"SCAN FOOD"}),$.jsx("h1",{className:"md:text-4xl sm:text-3xl text-2xl font-bold pt-2 ",children:"OPTIMIZE YOUR FOOD THROUGH AI"}),$.jsx("p",{className:"pt-2 pb-4",children:"Use our app to scan your produce and quickly assess its quality. Receive personalized recipe suggestions based on your ingredients' freshness, allowing you to reduce food waste while enjoying delicious meals."}),$.jsx(ps,{to:"/scan",children:$.jsx("button",{className:"bg-[#2A3340] text-[#ffffff] w-[200px] rounded-md font-medium my-2 ml-20 py-3",children:"Get Started"})})]})]})});function Bc(){return Bc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Bc.apply(this,arguments)}var w6={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(t){},onComplete:function(t){},preStringTyped:function(t,e){},onStringTyped:function(t,e){},onLastStringBackspaced:function(t){},onTypingPaused:function(t,e){},onTypingResumed:function(t,e){},onReset:function(t){},onStop:function(t,e){},onStart:function(t,e){},onDestroy:function(t){}},v6=new(function(){function t(){}var e=t.prototype;return e.load=function(n,r,s){if(n.el=typeof s=="string"?document.querySelector(s):s,n.options=Bc({},w6,r),n.isInput=n.el.tagName.toLowerCase()==="input",n.attr=n.options.attr,n.bindInputFocusEvents=n.options.bindInputFocusEvents,n.showCursor=!n.isInput&&n.options.showCursor,n.cursorChar=n.options.cursorChar,n.cursorBlinking=!0,n.elContent=n.attr?n.el.getAttribute(n.attr):n.el.textContent,n.contentType=n.options.contentType,n.typeSpeed=n.options.typeSpeed,n.startDelay=n.options.startDelay,n.backSpeed=n.options.backSpeed,n.smartBackspace=n.options.smartBackspace,n.backDelay=n.options.backDelay,n.fadeOut=n.options.fadeOut,n.fadeOutClass=n.options.fadeOutClass,n.fadeOutDelay=n.options.fadeOutDelay,n.isPaused=!1,n.strings=n.options.strings.map(function(u){return u.trim()}),n.stringsElement=typeof n.options.stringsElement=="string"?document.querySelector(n.options.stringsElement):n.options.stringsElement,n.stringsElement){n.strings=[],n.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var a=Array.prototype.slice.apply(n.stringsElement.children),o=a.length;if(o)for(var i=0;i<o;i+=1)n.strings.push(a[i].innerHTML.trim())}for(var l in n.strPos=0,n.currentElContent=this.getCurrentElContent(n),n.currentElContent&&n.currentElContent.length>0&&(n.strPos=n.currentElContent.length-1,n.strings.unshift(n.currentElContent)),n.sequence=[],n.strings)n.sequence[l]=l;n.arrayPos=0,n.stopNum=0,n.loop=n.options.loop,n.loopCount=n.options.loopCount,n.curLoop=0,n.shuffle=n.options.shuffle,n.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},n.typingComplete=!1,n.autoInsertCss=n.options.autoInsertCss,n.autoInsertCss&&(this.appendCursorAnimationCss(n),this.appendFadeOutAnimationCss(n))},e.getCurrentElContent=function(n){return n.attr?n.el.getAttribute(n.attr):n.isInput?n.el.value:n.contentType==="html"?n.el.innerHTML:n.el.textContent},e.appendCursorAnimationCss=function(n){var r="data-typed-js-cursor-css";if(n.showCursor&&!document.querySelector("["+r+"]")){var s=document.createElement("style");s.setAttribute(r,"true"),s.innerHTML=`
        .typed-cursor{
          opacity: 1;
        }
        .typed-cursor.typed-cursor--blink{
          animation: typedjsBlink 0.7s infinite;
          -webkit-animation: typedjsBlink 0.7s infinite;
                  animation: typedjsBlink 0.7s infinite;
        }
        @keyframes typedjsBlink{
          50% { opacity: 0.0; }
        }
        @-webkit-keyframes typedjsBlink{
          0% { opacity: 1; }
          50% { opacity: 0.0; }
          100% { opacity: 1; }
        }
      `,document.body.appendChild(s)}},e.appendFadeOutAnimationCss=function(n){var r="data-typed-fadeout-js-css";if(n.fadeOut&&!document.querySelector("["+r+"]")){var s=document.createElement("style");s.setAttribute(r,"true"),s.innerHTML=`
        .typed-fade-out{
          opacity: 0;
          transition: opacity .25s;
        }
        .typed-cursor.typed-cursor--blink.typed-fade-out{
          -webkit-animation: 0;
          animation: 0;
        }
      `,document.body.appendChild(s)}},t}()),tm=new(function(){function t(){}var e=t.prototype;return e.typeHtmlChars=function(n,r,s){if(s.contentType!=="html")return r;var a=n.substring(r).charAt(0);if(a==="<"||a==="&"){var o;for(o=a==="<"?">":";";n.substring(r+1).charAt(0)!==o&&!(1+ ++r>n.length););r++}return r},e.backSpaceHtmlChars=function(n,r,s){if(s.contentType!=="html")return r;var a=n.substring(r).charAt(0);if(a===">"||a===";"){var o;for(o=a===">"?"<":"&";n.substring(r-1).charAt(0)!==o&&!(--r<0););r--}return r},t}()),b6=function(){function t(n,r){v6.load(this,r,n),this.begin()}var e=t.prototype;return e.toggle=function(){this.pause.status?this.start():this.stop()},e.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},e.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},e.destroy=function(){this.reset(!1),this.options.onDestroy(this)},e.reset=function(n){n===void 0&&(n=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,n&&(this.insertCursor(),this.options.onReset(this),this.begin())},e.begin=function(){var n=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){n.strPos===0?n.typewrite(n.strings[n.sequence[n.arrayPos]],n.strPos):n.backspace(n.strings[n.sequence[n.arrayPos]],n.strPos)},this.startDelay)},e.typewrite=function(n,r){var s=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var a=this.humanizer(this.typeSpeed),o=1;this.pause.status!==!0?this.timeout=setTimeout(function(){r=tm.typeHtmlChars(n,r,s);var i=0,l=n.substring(r);if(l.charAt(0)==="^"&&/^\^\d+/.test(l)){var u=1;u+=(l=/\d+/.exec(l)[0]).length,i=parseInt(l),s.temporaryPause=!0,s.options.onTypingPaused(s.arrayPos,s),n=n.substring(0,r)+n.substring(r+u),s.toggleBlinking(!0)}if(l.charAt(0)==="`"){for(;n.substring(r+o).charAt(0)!=="`"&&(o++,!(r+o>n.length)););var p=n.substring(0,r),c=n.substring(p.length+1,r+o),f=n.substring(r+o+1);n=p+c+f,o--}s.timeout=setTimeout(function(){s.toggleBlinking(!1),r>=n.length?s.doneTyping(n,r):s.keepTyping(n,r,o),s.temporaryPause&&(s.temporaryPause=!1,s.options.onTypingResumed(s.arrayPos,s))},i)},a):this.setPauseStatus(n,r,!0)},e.keepTyping=function(n,r,s){r===0&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var a=n.substring(0,r+=s);this.replaceText(a),this.typewrite(n,r)},e.doneTyping=function(n,r){var s=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),this.loop===!1||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){s.backspace(n,r)},this.backDelay))},e.backspace=function(n,r){var s=this;if(this.pause.status!==!0){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var a=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){r=tm.backSpaceHtmlChars(n,r,s);var o=n.substring(0,r);if(s.replaceText(o),s.smartBackspace){var i=s.strings[s.arrayPos+1];s.stopNum=i&&o===i.substring(0,r)?r:0}r>s.stopNum?(r--,s.backspace(n,r)):r<=s.stopNum&&(s.arrayPos++,s.arrayPos===s.strings.length?(s.arrayPos=0,s.options.onLastStringBackspaced(),s.shuffleStringsIfNeeded(),s.begin()):s.typewrite(s.strings[s.sequence[s.arrayPos]],r))},a)}else this.setPauseStatus(n,r,!1)},e.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},e.setPauseStatus=function(n,r,s){this.pause.typewrite=s,this.pause.curString=n,this.pause.curStrPos=r},e.toggleBlinking=function(n){this.cursor&&(this.pause.status||this.cursorBlinking!==n&&(this.cursorBlinking=n,n?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},e.humanizer=function(n){return Math.round(Math.random()*n/2)+n},e.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))},e.initFadeOut=function(){var n=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){n.arrayPos++,n.replaceText(""),n.strings.length>n.arrayPos?n.typewrite(n.strings[n.sequence[n.arrayPos]],0):(n.typewrite(n.strings[0],0),n.arrayPos=0)},this.fadeOutDelay)},e.replaceText=function(n){this.attr?this.el.setAttribute(this.attr,n):this.isInput?this.el.value=n:this.contentType==="html"?this.el.innerHTML=n:this.el.textContent=n},e.bindFocusEvents=function(){var n=this;this.isInput&&(this.el.addEventListener("focus",function(r){n.stop()}),this.el.addEventListener("blur",function(r){n.el.value&&n.el.value.length!==0||n.start()}))},e.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},t}();const k6=F.memo(({style:t,className:e,typedRef:n,parseRef:r,stopped:s,children:a,startWhenVisible:o,...i})=>{const l=F.useRef(null),u=F.useMemo(()=>{var c;return[...Object.values(i).filter(f=>typeof f=="boolean"||typeof f=="number"||typeof f=="string"),(c=i.strings)==null?void 0:c.join(",")]},[i]);F.useEffect(()=>{const c=r&&r(l)||l.current,f=new b6(c,{...i});if((s||o)&&(f==null||f.stop()),o){const h=new IntersectionObserver(([m])=>{m.isIntersecting&&(f==null||f.start(),h.disconnect())});h.observe(c)}return n&&f&&n(f),()=>{f.destroy()}},u);const p=a?Bt.cloneElement(a,{ref:l}):Bt.createElement("span",{style:t,ref:l});return Bt.createElement("span",{style:t,className:e,"data-testid":"react-typed"},p)}),S6="/FreshForecast/assets/image-DJ0J2rTH.png",N6=()=>$.jsx("div",{className:"w-full bg-black py-4 px-4 text-white",children:$.jsxs("div",{className:"max-w-[1240px] mx-auto text-center",children:[$.jsx("h1",{className:"md:text-6xl sm:text-5xl text-4xl font-bold pb-2 pt-10 text-[#8C8849]",children:"GET SPECIALIZED RECIPIES"}),$.jsx("div",{className:"flex justify-center items-center",children:$.jsx("img",{className:"rounded-3xl border-4 border-white mx-auto my-4 object-cover",src:S6,alt:"Fresh Produce"})}),$.jsxs("p",{className:"md:text-2xl text-xl font-bold text-white py-4",children:["Create unique special dishes with:",$.jsx("div",{children:$.jsx(k6,{className:"font-bold text-[#B33F62]",strings:["ROTTEN BANANAS","FRESH GRAPES","UNRIPE APPLE"],typeSpeed:70,backSpeed:60,loop:!0})})]}),$.jsx(ps,{to:"/my-produce",children:$.jsx("button",{className:"bg-[#2A3340] text-[#ffffff] w-[200px] rounded-md font-medium my-3 mx-auto py-3",children:"My Recipes"})})]})}),nm=()=>$.jsxs("div",{children:[$.jsx(y6,{}),$.jsx(N6,{}),$.jsx(g6,{})]});function E6(){return $.jsx(OE,{children:$.jsxs("div",{className:"App",children:[$.jsx(FE,{}),$.jsxs("div",{className:"pt-16",children:[" ",$.jsxs(EE,{children:[$.jsx(Qr,{path:"/FreshForecast",element:$.jsx(nm,{})}),$.jsx(Qr,{path:"/",element:$.jsx(nm,{})}),$.jsx(Qr,{path:"/scan",element:$.jsx(a6,{})}),$.jsx(Qr,{path:"/my-produce",element:$.jsx(m6,{})}),$.jsx(Qr,{path:"*",element:$.jsx(SE,{to:"/"})})," "]})]}),$.jsx(GE,{})]})})}yy(document.getElementById("root")).render($.jsx(F.StrictMode,{children:$.jsx(E6,{})}));
