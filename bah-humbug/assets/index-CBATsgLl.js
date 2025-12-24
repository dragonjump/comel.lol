(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function J_(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var lh={exports:{}},Bo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bg;function HS(){if(Bg)return Bo;Bg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:c}}return Bo.Fragment=e,Bo.jsx=i,Bo.jsxs=i,Bo}var Ig;function GS(){return Ig||(Ig=1,lh.exports=HS()),lh.exports}var zt=GS(),ch={exports:{}},oe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hg;function VS(){if(Hg)return oe;Hg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),S=Symbol.iterator;function y(D){return D===null||typeof D!="object"?null:(D=S&&D[S]||D["@@iterator"],typeof D=="function"?D:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,M={};function _(D,tt,Et){this.props=D,this.context=tt,this.refs=M,this.updater=Et||b}_.prototype.isReactComponent={},_.prototype.setState=function(D,tt){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,tt,"setState")},_.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function L(){}L.prototype=_.prototype;function O(D,tt,Et){this.props=D,this.context=tt,this.refs=M,this.updater=Et||b}var N=O.prototype=new L;N.constructor=O,C(N,_.prototype),N.isPureReactComponent=!0;var F=Array.isArray;function B(){}var z={H:null,A:null,T:null,S:null},j=Object.prototype.hasOwnProperty;function T(D,tt,Et){var Ot=Et.ref;return{$$typeof:o,type:D,key:tt,ref:Ot!==void 0?Ot:null,props:Et}}function w(D,tt){return T(D.type,tt,D.props)}function V(D){return typeof D=="object"&&D!==null&&D.$$typeof===o}function q(D){var tt={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(Et){return tt[Et]})}var Q=/\/+/g;function ut(D,tt){return typeof D=="object"&&D!==null&&D.key!=null?q(""+D.key):tt.toString(36)}function pt(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(B,B):(D.status="pending",D.then(function(tt){D.status==="pending"&&(D.status="fulfilled",D.value=tt)},function(tt){D.status==="pending"&&(D.status="rejected",D.reason=tt)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function P(D,tt,Et,Ot,Vt){var it=typeof D;(it==="undefined"||it==="boolean")&&(D=null);var dt=!1;if(D===null)dt=!0;else switch(it){case"bigint":case"string":case"number":dt=!0;break;case"object":switch(D.$$typeof){case o:case e:dt=!0;break;case x:return dt=D._init,P(dt(D._payload),tt,Et,Ot,Vt)}}if(dt)return Vt=Vt(D),dt=Ot===""?"."+ut(D,0):Ot,F(Vt)?(Et="",dt!=null&&(Et=dt.replace(Q,"$&/")+"/"),P(Vt,tt,Et,"",function(Xt){return Xt})):Vt!=null&&(V(Vt)&&(Vt=w(Vt,Et+(Vt.key==null||D&&D.key===Vt.key?"":(""+Vt.key).replace(Q,"$&/")+"/")+dt)),tt.push(Vt)),1;dt=0;var Ft=Ot===""?".":Ot+":";if(F(D))for(var Wt=0;Wt<D.length;Wt++)Ot=D[Wt],it=Ft+ut(Ot,Wt),dt+=P(Ot,tt,Et,it,Vt);else if(Wt=y(D),typeof Wt=="function")for(D=Wt.call(D),Wt=0;!(Ot=D.next()).done;)Ot=Ot.value,it=Ft+ut(Ot,Wt++),dt+=P(Ot,tt,Et,it,Vt);else if(it==="object"){if(typeof D.then=="function")return P(pt(D),tt,Et,Ot,Vt);throw tt=String(D),Error("Objects are not valid as a React child (found: "+(tt==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":tt)+"). If you meant to render a collection of children, use an array instead.")}return dt}function I(D,tt,Et){if(D==null)return D;var Ot=[],Vt=0;return P(D,Ot,"","",function(it){return tt.call(Et,it,Vt++)}),Ot}function at(D){if(D._status===-1){var tt=D._result;tt=tt(),tt.then(function(Et){(D._status===0||D._status===-1)&&(D._status=1,D._result=Et)},function(Et){(D._status===0||D._status===-1)&&(D._status=2,D._result=Et)}),D._status===-1&&(D._status=0,D._result=tt)}if(D._status===1)return D._result.default;throw D._result}var Ut=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var tt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(tt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)},St={map:I,forEach:function(D,tt,Et){I(D,function(){tt.apply(this,arguments)},Et)},count:function(D){var tt=0;return I(D,function(){tt++}),tt},toArray:function(D){return I(D,function(tt){return tt})||[]},only:function(D){if(!V(D))throw Error("React.Children.only expected to receive a single React element child.");return D}};return oe.Activity=g,oe.Children=St,oe.Component=_,oe.Fragment=i,oe.Profiler=l,oe.PureComponent=O,oe.StrictMode=s,oe.Suspense=m,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,oe.__COMPILER_RUNTIME={__proto__:null,c:function(D){return z.H.useMemoCache(D)}},oe.cache=function(D){return function(){return D.apply(null,arguments)}},oe.cacheSignal=function(){return null},oe.cloneElement=function(D,tt,Et){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var Ot=C({},D.props),Vt=D.key;if(tt!=null)for(it in tt.key!==void 0&&(Vt=""+tt.key),tt)!j.call(tt,it)||it==="key"||it==="__self"||it==="__source"||it==="ref"&&tt.ref===void 0||(Ot[it]=tt[it]);var it=arguments.length-2;if(it===1)Ot.children=Et;else if(1<it){for(var dt=Array(it),Ft=0;Ft<it;Ft++)dt[Ft]=arguments[Ft+2];Ot.children=dt}return T(D.type,Vt,Ot)},oe.createContext=function(D){return D={$$typeof:h,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:c,_context:D},D},oe.createElement=function(D,tt,Et){var Ot,Vt={},it=null;if(tt!=null)for(Ot in tt.key!==void 0&&(it=""+tt.key),tt)j.call(tt,Ot)&&Ot!=="key"&&Ot!=="__self"&&Ot!=="__source"&&(Vt[Ot]=tt[Ot]);var dt=arguments.length-2;if(dt===1)Vt.children=Et;else if(1<dt){for(var Ft=Array(dt),Wt=0;Wt<dt;Wt++)Ft[Wt]=arguments[Wt+2];Vt.children=Ft}if(D&&D.defaultProps)for(Ot in dt=D.defaultProps,dt)Vt[Ot]===void 0&&(Vt[Ot]=dt[Ot]);return T(D,it,Vt)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(D){return{$$typeof:d,render:D}},oe.isValidElement=V,oe.lazy=function(D){return{$$typeof:x,_payload:{_status:-1,_result:D},_init:at}},oe.memo=function(D,tt){return{$$typeof:p,type:D,compare:tt===void 0?null:tt}},oe.startTransition=function(D){var tt=z.T,Et={};z.T=Et;try{var Ot=D(),Vt=z.S;Vt!==null&&Vt(Et,Ot),typeof Ot=="object"&&Ot!==null&&typeof Ot.then=="function"&&Ot.then(B,Ut)}catch(it){Ut(it)}finally{tt!==null&&Et.types!==null&&(tt.types=Et.types),z.T=tt}},oe.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},oe.use=function(D){return z.H.use(D)},oe.useActionState=function(D,tt,Et){return z.H.useActionState(D,tt,Et)},oe.useCallback=function(D,tt){return z.H.useCallback(D,tt)},oe.useContext=function(D){return z.H.useContext(D)},oe.useDebugValue=function(){},oe.useDeferredValue=function(D,tt){return z.H.useDeferredValue(D,tt)},oe.useEffect=function(D,tt){return z.H.useEffect(D,tt)},oe.useEffectEvent=function(D){return z.H.useEffectEvent(D)},oe.useId=function(){return z.H.useId()},oe.useImperativeHandle=function(D,tt,Et){return z.H.useImperativeHandle(D,tt,Et)},oe.useInsertionEffect=function(D,tt){return z.H.useInsertionEffect(D,tt)},oe.useLayoutEffect=function(D,tt){return z.H.useLayoutEffect(D,tt)},oe.useMemo=function(D,tt){return z.H.useMemo(D,tt)},oe.useOptimistic=function(D,tt){return z.H.useOptimistic(D,tt)},oe.useReducer=function(D,tt,Et){return z.H.useReducer(D,tt,Et)},oe.useRef=function(D){return z.H.useRef(D)},oe.useState=function(D){return z.H.useState(D)},oe.useSyncExternalStore=function(D,tt,Et){return z.H.useSyncExternalStore(D,tt,Et)},oe.useTransition=function(){return z.H.useTransition()},oe.version="19.2.3",oe}var Gg;function kd(){return Gg||(Gg=1,ch.exports=VS()),ch.exports}var ge=kd();const XS=J_(ge);var uh={exports:{}},Io={},fh={exports:{}},hh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vg;function kS(){return Vg||(Vg=1,(function(o){function e(P,I){var at=P.length;P.push(I);t:for(;0<at;){var Ut=at-1>>>1,St=P[Ut];if(0<l(St,I))P[Ut]=I,P[at]=St,at=Ut;else break t}}function i(P){return P.length===0?null:P[0]}function s(P){if(P.length===0)return null;var I=P[0],at=P.pop();if(at!==I){P[0]=at;t:for(var Ut=0,St=P.length,D=St>>>1;Ut<D;){var tt=2*(Ut+1)-1,Et=P[tt],Ot=tt+1,Vt=P[Ot];if(0>l(Et,at))Ot<St&&0>l(Vt,Et)?(P[Ut]=Vt,P[Ot]=at,Ut=Ot):(P[Ut]=Et,P[tt]=at,Ut=tt);else if(Ot<St&&0>l(Vt,at))P[Ut]=Vt,P[Ot]=at,Ut=Ot;else break t}}return I}function l(P,I){var at=P.sortIndex-I.sortIndex;return at!==0?at:P.id-I.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],x=1,g=null,S=3,y=!1,b=!1,C=!1,M=!1,_=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function N(P){for(var I=i(p);I!==null;){if(I.callback===null)s(p);else if(I.startTime<=P)s(p),I.sortIndex=I.expirationTime,e(m,I);else break;I=i(p)}}function F(P){if(C=!1,N(P),!b)if(i(m)!==null)b=!0,B||(B=!0,q());else{var I=i(p);I!==null&&pt(F,I.startTime-P)}}var B=!1,z=-1,j=5,T=-1;function w(){return M?!0:!(o.unstable_now()-T<j)}function V(){if(M=!1,B){var P=o.unstable_now();T=P;var I=!0;try{t:{b=!1,C&&(C=!1,L(z),z=-1),y=!0;var at=S;try{e:{for(N(P),g=i(m);g!==null&&!(g.expirationTime>P&&w());){var Ut=g.callback;if(typeof Ut=="function"){g.callback=null,S=g.priorityLevel;var St=Ut(g.expirationTime<=P);if(P=o.unstable_now(),typeof St=="function"){g.callback=St,N(P),I=!0;break e}g===i(m)&&s(m),N(P)}else s(m);g=i(m)}if(g!==null)I=!0;else{var D=i(p);D!==null&&pt(F,D.startTime-P),I=!1}}break t}finally{g=null,S=at,y=!1}I=void 0}}finally{I?q():B=!1}}}var q;if(typeof O=="function")q=function(){O(V)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,ut=Q.port2;Q.port1.onmessage=V,q=function(){ut.postMessage(null)}}else q=function(){_(V,0)};function pt(P,I){z=_(function(){P(o.unstable_now())},I)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(P){P.callback=null},o.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<P?Math.floor(1e3/P):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(P){switch(S){case 1:case 2:case 3:var I=3;break;default:I=S}var at=S;S=I;try{return P()}finally{S=at}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(P,I){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var at=S;S=P;try{return I()}finally{S=at}},o.unstable_scheduleCallback=function(P,I,at){var Ut=o.unstable_now();switch(typeof at=="object"&&at!==null?(at=at.delay,at=typeof at=="number"&&0<at?Ut+at:Ut):at=Ut,P){case 1:var St=-1;break;case 2:St=250;break;case 5:St=1073741823;break;case 4:St=1e4;break;default:St=5e3}return St=at+St,P={id:x++,callback:I,priorityLevel:P,startTime:at,expirationTime:St,sortIndex:-1},at>Ut?(P.sortIndex=at,e(p,P),i(m)===null&&P===i(p)&&(C?(L(z),z=-1):C=!0,pt(F,at-Ut))):(P.sortIndex=St,e(m,P),b||y||(b=!0,B||(B=!0,q()))),P},o.unstable_shouldYield=w,o.unstable_wrapCallback=function(P){var I=S;return function(){var at=S;S=I;try{return P.apply(this,arguments)}finally{S=at}}}})(hh)),hh}var Xg;function WS(){return Xg||(Xg=1,fh.exports=kS()),fh.exports}var dh={exports:{}},On={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kg;function qS(){if(kg)return On;kg=1;var o=kd();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)p+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,x){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:x}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return On.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,On.createPortal=function(m,p){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,x)},On.flushSync=function(m){var p=h.T,x=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=x,s.d.f()}},On.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},On.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},On.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var x=p.as,g=d(x,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;x==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:S,fetchPriority:y}):x==="script"&&s.d.X(m,{crossOrigin:g,integrity:S,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},On.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var x=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},On.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var x=p.as,g=d(x,p.crossOrigin);s.d.L(m,x,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},On.preloadModule=function(m,p){if(typeof m=="string")if(p){var x=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},On.requestFormReset=function(m){s.d.r(m)},On.unstable_batchedUpdates=function(m,p){return m(p)},On.useFormState=function(m,p,x){return h.H.useFormState(m,p,x)},On.useFormStatus=function(){return h.H.useHostTransitionStatus()},On.version="19.2.3",On}var Wg;function YS(){if(Wg)return dh.exports;Wg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),dh.exports=qS(),dh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qg;function jS(){if(qg)return Io;qg=1;var o=WS(),e=kd(),i=YS();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(r=u.return,r!==null){a=r;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===r)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=u,r=f;else{for(var v=!1,A=u.child;A;){if(A===a){v=!0,a=u,r=f;break}if(A===r){v=!0,r=u,a=f;break}A=A.sibling}if(!v){for(A=f.child;A;){if(A===a){v=!0,a=f,r=u;break}if(A===r){v=!0,r=f,a=u;break}A=A.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function x(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=x(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,S=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),O=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),T=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function q(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var Q=Symbol.for("react.client.reference");function ut(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Q?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case _:return"Profiler";case M:return"StrictMode";case F:return"Suspense";case B:return"SuspenseList";case T:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case O:return t.displayName||"Context";case L:return(t._context.displayName||"Context")+".Consumer";case N:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return n=t.displayName||null,n!==null?n:ut(t.type)||"Memo";case j:n=t._payload,t=t._init;try{return ut(t(n))}catch{}}return null}var pt=Array.isArray,P=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,at={pending:!1,data:null,method:null,action:null},Ut=[],St=-1;function D(t){return{current:t}}function tt(t){0>St||(t.current=Ut[St],Ut[St]=null,St--)}function Et(t,n){St++,Ut[St]=t.current,t.current=n}var Ot=D(null),Vt=D(null),it=D(null),dt=D(null);function Ft(t,n){switch(Et(it,n),Et(Vt,t),Et(Ot,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?og(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=og(n),t=lg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}tt(Ot),Et(Ot,t)}function Wt(){tt(Ot),tt(Vt),tt(it)}function Xt(t){t.memoizedState!==null&&Et(dt,t);var n=Ot.current,a=lg(n,t.type);n!==a&&(Et(Vt,t),Et(Ot,a))}function ue(t){Vt.current===t&&(tt(Ot),tt(Vt)),dt.current===t&&(tt(dt),Oo._currentValue=at)}var Ze,le;function pe(t){if(Ze===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ze=n&&n[1]||"",le=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ze+t+le}var Re=!1;function ae(t,n){if(!t||Re)return"";Re=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var Tt=function(){throw Error()};if(Object.defineProperty(Tt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Tt,[])}catch(ht){var lt=ht}Reflect.construct(t,[],Tt)}else{try{Tt.call()}catch(ht){lt=ht}t.call(Tt.prototype)}}else{try{throw Error()}catch(ht){lt=ht}(Tt=t())&&typeof Tt.catch=="function"&&Tt.catch(function(){})}}catch(ht){if(ht&&lt&&typeof ht.stack=="string")return[ht.stack,lt.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),v=f[0],A=f[1];if(v&&A){var H=v.split(`
`),nt=A.split(`
`);for(u=r=0;r<H.length&&!H[r].includes("DetermineComponentFrameRoot");)r++;for(;u<nt.length&&!nt[u].includes("DetermineComponentFrameRoot");)u++;if(r===H.length||u===nt.length)for(r=H.length-1,u=nt.length-1;1<=r&&0<=u&&H[r]!==nt[u];)u--;for(;1<=r&&0<=u;r--,u--)if(H[r]!==nt[u]){if(r!==1||u!==1)do if(r--,u--,0>u||H[r]!==nt[u]){var vt=`
`+H[r].replace(" at new "," at ");return t.displayName&&vt.includes("<anonymous>")&&(vt=vt.replace("<anonymous>",t.displayName)),vt}while(1<=r&&0<=u);break}}}finally{Re=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?pe(a):""}function qe(t,n){switch(t.tag){case 26:case 27:case 5:return pe(t.type);case 16:return pe("Lazy");case 13:return t.child!==n&&n!==null?pe("Suspense Fallback"):pe("Suspense");case 19:return pe("SuspenseList");case 0:case 15:return ae(t.type,!1);case 11:return ae(t.type.render,!1);case 1:return ae(t.type,!0);case 31:return pe("Activity");default:return""}}function X(t){try{var n="",a=null;do n+=qe(t,a),a=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Ye=Object.prototype.hasOwnProperty,_e=o.unstable_scheduleCallback,Ce=o.unstable_cancelCallback,qt=o.unstable_shouldYield,U=o.unstable_requestPaint,E=o.unstable_now,W=o.unstable_getCurrentPriorityLevel,xt=o.unstable_ImmediatePriority,At=o.unstable_UserBlockingPriority,mt=o.unstable_NormalPriority,rt=o.unstable_LowPriority,st=o.unstable_IdlePriority,ct=o.log,Rt=o.unstable_setDisableYieldValue,et=null,Mt=null;function Lt(t){if(typeof ct=="function"&&Rt(t),Mt&&typeof Mt.setStrictMode=="function")try{Mt.setStrictMode(et,t)}catch{}}var Dt=Math.clz32?Math.clz32:G,Ct=Math.log,Bt=Math.LN2;function G(t){return t>>>=0,t===0?32:31-(Ct(t)/Bt|0)|0}var wt=256,bt=262144,Pt=4194304;function _t(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function gt(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var u=0,f=t.suspendedLanes,v=t.pingedLanes;t=t.warmLanes;var A=r&134217727;return A!==0?(r=A&~f,r!==0?u=_t(r):(v&=A,v!==0?u=_t(v):a||(a=A&~t,a!==0&&(u=_t(a))))):(A=r&~f,A!==0?u=_t(A):v!==0?u=_t(v):a||(a=r&~t,a!==0&&(u=_t(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Nt(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Jt(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ve(){var t=Pt;return Pt<<=1,(Pt&62914560)===0&&(Pt=4194304),t}function me(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function ln(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Bn(t,n,a,r,u,f){var v=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var A=t.entanglements,H=t.expirationTimes,nt=t.hiddenUpdates;for(a=v&~a;0<a;){var vt=31-Dt(a),Tt=1<<vt;A[vt]=0,H[vt]=-1;var lt=nt[vt];if(lt!==null)for(nt[vt]=null,vt=0;vt<lt.length;vt++){var ht=lt[vt];ht!==null&&(ht.lane&=-536870913)}a&=~Tt}r!==0&&Ki(t,r,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(v&~n))}function Ki(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-Dt(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function ci(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-Dt(a),u=1<<r;u&n|t[r]&n&&(t[r]|=n),a&=~u}}function ui(t,n){var a=n&-n;return a=(a&42)!==0?1:Qn(a),(a&(t.suspendedLanes|n))!==0?0:a}function Qn(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ra(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function us(){var t=I.p;return t!==0?t:(t=window.event,t===void 0?32:Ug(t.type))}function Jn(t,n){var a=I.p;try{return I.p=t,n()}finally{I.p=a}}var fi=Math.random().toString(36).slice(2),cn="__reactFiber$"+fi,yn="__reactProps$"+fi,bi="__reactContainer$"+fi,Xs="__reactEvents$"+fi,ks="__reactListeners$"+fi,ol="__reactHandles$"+fi,jr="__reactResources$"+fi,fs="__reactMarker$"+fi;function Zr(t){delete t[cn],delete t[yn],delete t[Xs],delete t[ks],delete t[ol]}function Ca(t){var n=t[cn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[bi]||a[cn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=mg(t);t!==null;){if(a=t[cn])return a;t=mg(t)}return n}t=a,a=t.parentNode}return null}function wa(t){if(t=t[cn]||t[bi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function hs(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Da(t){var n=t[jr];return n||(n=t[jr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function R(t){t[fs]=!0}var Y=new Set,ft={};function ot(t,n){K(t,n),K(t+"Capture",n)}function K(t,n){for(ft[t]=n,t=0;t<n.length;t++)Y.add(n[t])}var It=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),kt={},Ht={};function Yt(t){return Ye.call(Ht,t)?!0:Ye.call(kt,t)?!1:It.test(t)?Ht[t]=!0:(kt[t]=!0,!1)}function Zt(t,n,a){if(Yt(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function ee(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Kt(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+r)}}function ne(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Oe(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function $e(t,n,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,f=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function je(t){if(!t._valueTracker){var n=Oe(t)?"checked":"value";t._valueTracker=$e(t,n,""+t[n])}}function ze(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=Oe(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}function $t(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Pe=/[\n"\\]/g;function se(t){return t.replace(Pe,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function En(t,n,a,r,u,f,v,A){t.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.type=v:t.removeAttribute("type"),n!=null?v==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ne(n)):t.value!==""+ne(n)&&(t.value=""+ne(n)):v!=="submit"&&v!=="reset"||t.removeAttribute("value"),n!=null?bn(t,v,ne(n)):a!=null?bn(t,v,ne(a)):r!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+ne(A):t.removeAttribute("name")}function Qi(t,n,a,r,u,f,v,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){je(t);return}a=a!=null?""+ne(a):"",n=n!=null?""+ne(n):a,A||n===t.value||(t.value=n),t.defaultValue=n}r=r??u,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=A?t.checked:!!r,t.defaultChecked=!!r,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(t.name=v),je(t)}function bn(t,n,a){n==="number"&&$t(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function hi(t,n,a,r){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&r&&(t[a].defaultSelected=!0)}else{for(a=""+ne(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,r&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Be(t,n,a){if(n!=null&&(n=""+ne(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ne(a):""}function Tn(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(pt(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=ne(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),je(t)}function mn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var An=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Rn(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||An.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Ws(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var u in n)r=n[u],n.hasOwnProperty(u)&&a[u]!==r&&Rn(t,u,r)}else for(var f in n)n.hasOwnProperty(f)&&Rn(t,f,n[f])}function Ti(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),zv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ll(t){return zv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ji(){}var au=null;function su(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var qs=null,Ys=null;function rp(t){var n=wa(t);if(n&&(t=n.stateNode)){var a=t[yn]||null;t:switch(t=n.stateNode,n.type){case"input":if(En(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+se(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var u=r[yn]||null;if(!u)throw Error(s(90));En(r,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&ze(r)}break t;case"textarea":Be(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&hi(t,!!a.multiple,n,!1)}}}var ru=!1;function op(t,n,a){if(ru)return t(n,a);ru=!0;try{var r=t(n);return r}finally{if(ru=!1,(qs!==null||Ys!==null)&&(Zl(),qs&&(n=qs,t=Ys,Ys=qs=null,rp(n),t)))for(n=0;n<t.length;n++)rp(t[n])}}function Kr(t,n){var a=t.stateNode;if(a===null)return null;var r=a[yn]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var $i=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ou=!1;if($i)try{var Qr={};Object.defineProperty(Qr,"passive",{get:function(){ou=!0}}),window.addEventListener("test",Qr,Qr),window.removeEventListener("test",Qr,Qr)}catch{ou=!1}var Ua=null,lu=null,cl=null;function lp(){if(cl)return cl;var t,n=lu,a=n.length,r,u="value"in Ua?Ua.value:Ua.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var v=a-t;for(r=1;r<=v&&n[a-r]===u[f-r];r++);return cl=u.slice(t,1<r?1-r:void 0)}function ul(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function fl(){return!0}function cp(){return!1}function Xn(t){function n(a,r,u,f,v){this._reactName=a,this._targetInst=u,this.type=r,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(a=t[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?fl:cp,this.isPropagationStopped=cp,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=fl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=fl)},persist:function(){},isPersistent:fl}),n}var ds={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hl=Xn(ds),Jr=g({},ds,{view:0,detail:0}),Bv=Xn(Jr),cu,uu,$r,dl=g({},Jr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==$r&&($r&&t.type==="mousemove"?(cu=t.screenX-$r.screenX,uu=t.screenY-$r.screenY):uu=cu=0,$r=t),cu)},movementY:function(t){return"movementY"in t?t.movementY:uu}}),up=Xn(dl),Iv=g({},dl,{dataTransfer:0}),Hv=Xn(Iv),Gv=g({},Jr,{relatedTarget:0}),fu=Xn(Gv),Vv=g({},ds,{animationName:0,elapsedTime:0,pseudoElement:0}),Xv=Xn(Vv),kv=g({},ds,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Wv=Xn(kv),qv=g({},ds,{data:0}),fp=Xn(qv),Yv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Kv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Zv[t])?!!n[t]:!1}function hu(){return Kv}var Qv=g({},Jr,{key:function(t){if(t.key){var n=Yv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=ul(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?jv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hu,charCode:function(t){return t.type==="keypress"?ul(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ul(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Jv=Xn(Qv),$v=g({},dl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hp=Xn($v),tx=g({},Jr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hu}),ex=Xn(tx),nx=g({},ds,{propertyName:0,elapsedTime:0,pseudoElement:0}),ix=Xn(nx),ax=g({},dl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),sx=Xn(ax),rx=g({},ds,{newState:0,oldState:0}),ox=Xn(rx),lx=[9,13,27,32],du=$i&&"CompositionEvent"in window,to=null;$i&&"documentMode"in document&&(to=document.documentMode);var cx=$i&&"TextEvent"in window&&!to,dp=$i&&(!du||to&&8<to&&11>=to),pp=" ",mp=!1;function gp(t,n){switch(t){case"keyup":return lx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _p(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var js=!1;function ux(t,n){switch(t){case"compositionend":return _p(n);case"keypress":return n.which!==32?null:(mp=!0,pp);case"textInput":return t=n.data,t===pp&&mp?null:t;default:return null}}function fx(t,n){if(js)return t==="compositionend"||!du&&gp(t,n)?(t=lp(),cl=lu=Ua=null,js=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return dp&&n.locale!=="ko"?null:n.data;default:return null}}var hx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!hx[t.type]:n==="textarea"}function xp(t,n,a,r){qs?Ys?Ys.push(r):Ys=[r]:qs=r,n=nc(n,"onChange"),0<n.length&&(a=new hl("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var eo=null,no=null;function dx(t){eg(t,0)}function pl(t){var n=hs(t);if(ze(n))return t}function Sp(t,n){if(t==="change")return n}var Mp=!1;if($i){var pu;if($i){var mu="oninput"in document;if(!mu){var yp=document.createElement("div");yp.setAttribute("oninput","return;"),mu=typeof yp.oninput=="function"}pu=mu}else pu=!1;Mp=pu&&(!document.documentMode||9<document.documentMode)}function Ep(){eo&&(eo.detachEvent("onpropertychange",bp),no=eo=null)}function bp(t){if(t.propertyName==="value"&&pl(no)){var n=[];xp(n,no,t,su(t)),op(dx,n)}}function px(t,n,a){t==="focusin"?(Ep(),eo=n,no=a,eo.attachEvent("onpropertychange",bp)):t==="focusout"&&Ep()}function mx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return pl(no)}function gx(t,n){if(t==="click")return pl(n)}function _x(t,n){if(t==="input"||t==="change")return pl(n)}function vx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var $n=typeof Object.is=="function"?Object.is:vx;function io(t,n){if($n(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var u=a[r];if(!Ye.call(n,u)||!$n(t[u],n[u]))return!1}return!0}function Tp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ap(t,n){var a=Tp(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Tp(a)}}function Rp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Rp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Cp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=$t(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=$t(t.document)}return n}function gu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var xx=$i&&"documentMode"in document&&11>=document.documentMode,Zs=null,_u=null,ao=null,vu=!1;function wp(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;vu||Zs==null||Zs!==$t(r)||(r=Zs,"selectionStart"in r&&gu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ao&&io(ao,r)||(ao=r,r=nc(_u,"onSelect"),0<r.length&&(n=new hl("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=Zs)))}function ps(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Ks={animationend:ps("Animation","AnimationEnd"),animationiteration:ps("Animation","AnimationIteration"),animationstart:ps("Animation","AnimationStart"),transitionrun:ps("Transition","TransitionRun"),transitionstart:ps("Transition","TransitionStart"),transitioncancel:ps("Transition","TransitionCancel"),transitionend:ps("Transition","TransitionEnd")},xu={},Dp={};$i&&(Dp=document.createElement("div").style,"AnimationEvent"in window||(delete Ks.animationend.animation,delete Ks.animationiteration.animation,delete Ks.animationstart.animation),"TransitionEvent"in window||delete Ks.transitionend.transition);function ms(t){if(xu[t])return xu[t];if(!Ks[t])return t;var n=Ks[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Dp)return xu[t]=n[a];return t}var Up=ms("animationend"),Np=ms("animationiteration"),Lp=ms("animationstart"),Sx=ms("transitionrun"),Mx=ms("transitionstart"),yx=ms("transitioncancel"),Op=ms("transitionend"),Pp=new Map,Su="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Su.push("scrollEnd");function Ai(t,n){Pp.set(t,n),ot(n,[t])}var ml=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},di=[],Qs=0,Mu=0;function gl(){for(var t=Qs,n=Mu=Qs=0;n<t;){var a=di[n];di[n++]=null;var r=di[n];di[n++]=null;var u=di[n];di[n++]=null;var f=di[n];if(di[n++]=null,r!==null&&u!==null){var v=r.pending;v===null?u.next=u:(u.next=v.next,v.next=u),r.pending=u}f!==0&&Fp(a,u,f)}}function _l(t,n,a,r){di[Qs++]=t,di[Qs++]=n,di[Qs++]=a,di[Qs++]=r,Mu|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function yu(t,n,a,r){return _l(t,n,a,r),vl(t)}function gs(t,n){return _l(t,null,null,n),vl(t)}function Fp(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Dt(a),t=f.hiddenUpdates,r=t[u],r===null?t[u]=[n]:r.push(n),n.lane=a|536870912),f):null}function vl(t){if(50<Ro)throw Ro=0,Nf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Js={};function Ex(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(t,n,a,r){return new Ex(t,n,a,r)}function Eu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ta(t,n){var a=t.alternate;return a===null?(a=ti(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function zp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function xl(t,n,a,r,u,f){var v=0;if(r=t,typeof t=="function")Eu(t)&&(v=1);else if(typeof t=="string")v=CS(t,a,Ot.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case T:return t=ti(31,a,n,u),t.elementType=T,t.lanes=f,t;case C:return _s(a.children,u,f,n);case M:v=8,u|=24;break;case _:return t=ti(12,a,n,u|2),t.elementType=_,t.lanes=f,t;case F:return t=ti(13,a,n,u),t.elementType=F,t.lanes=f,t;case B:return t=ti(19,a,n,u),t.elementType=B,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case O:v=10;break t;case L:v=9;break t;case N:v=11;break t;case z:v=14;break t;case j:v=16,r=null;break t}v=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=ti(v,a,n,u),n.elementType=t,n.type=r,n.lanes=f,n}function _s(t,n,a,r){return t=ti(7,t,r,n),t.lanes=a,t}function bu(t,n,a){return t=ti(6,t,null,n),t.lanes=a,t}function Bp(t){var n=ti(18,null,null,0);return n.stateNode=t,n}function Tu(t,n,a){return n=ti(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Ip=new WeakMap;function pi(t,n){if(typeof t=="object"&&t!==null){var a=Ip.get(t);return a!==void 0?a:(n={value:t,source:n,stack:X(n)},Ip.set(t,n),n)}return{value:t,source:n,stack:X(n)}}var $s=[],tr=0,Sl=null,so=0,mi=[],gi=0,Na=null,Fi=1,zi="";function ea(t,n){$s[tr++]=so,$s[tr++]=Sl,Sl=t,so=n}function Hp(t,n,a){mi[gi++]=Fi,mi[gi++]=zi,mi[gi++]=Na,Na=t;var r=Fi;t=zi;var u=32-Dt(r)-1;r&=~(1<<u),a+=1;var f=32-Dt(n)+u;if(30<f){var v=u-u%5;f=(r&(1<<v)-1).toString(32),r>>=v,u-=v,Fi=1<<32-Dt(n)+u|a<<u|r,zi=f+t}else Fi=1<<f|a<<u|r,zi=t}function Au(t){t.return!==null&&(ea(t,1),Hp(t,1,0))}function Ru(t){for(;t===Sl;)Sl=$s[--tr],$s[tr]=null,so=$s[--tr],$s[tr]=null;for(;t===Na;)Na=mi[--gi],mi[gi]=null,zi=mi[--gi],mi[gi]=null,Fi=mi[--gi],mi[gi]=null}function Gp(t,n){mi[gi++]=Fi,mi[gi++]=zi,mi[gi++]=Na,Fi=n.id,zi=n.overflow,Na=t}var Cn=null,Ke=null,Ee=!1,La=null,_i=!1,Cu=Error(s(519));function Oa(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ro(pi(n,t)),Cu}function Vp(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[cn]=t,n[yn]=r,a){case"dialog":Se("cancel",n),Se("close",n);break;case"iframe":case"object":case"embed":Se("load",n);break;case"video":case"audio":for(a=0;a<wo.length;a++)Se(wo[a],n);break;case"source":Se("error",n);break;case"img":case"image":case"link":Se("error",n),Se("load",n);break;case"details":Se("toggle",n);break;case"input":Se("invalid",n),Qi(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Se("invalid",n);break;case"textarea":Se("invalid",n),Tn(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||sg(n.textContent,a)?(r.popover!=null&&(Se("beforetoggle",n),Se("toggle",n)),r.onScroll!=null&&Se("scroll",n),r.onScrollEnd!=null&&Se("scrollend",n),r.onClick!=null&&(n.onclick=Ji),n=!0):n=!1,n||Oa(t,!0)}function Xp(t){for(Cn=t.return;Cn;)switch(Cn.tag){case 5:case 31:case 13:_i=!1;return;case 27:case 3:_i=!0;return;default:Cn=Cn.return}}function er(t){if(t!==Cn)return!1;if(!Ee)return Xp(t),Ee=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Yf(t.type,t.memoizedProps)),a=!a),a&&Ke&&Oa(t),Xp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Ke=pg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Ke=pg(t)}else n===27?(n=Ke,ja(t.type)?(t=Jf,Jf=null,Ke=t):Ke=n):Ke=Cn?xi(t.stateNode.nextSibling):null;return!0}function vs(){Ke=Cn=null,Ee=!1}function wu(){var t=La;return t!==null&&(Yn===null?Yn=t:Yn.push.apply(Yn,t),La=null),t}function ro(t){La===null?La=[t]:La.push(t)}var Du=D(null),xs=null,na=null;function Pa(t,n,a){Et(Du,n._currentValue),n._currentValue=a}function ia(t){t._currentValue=Du.current,tt(Du)}function Uu(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function Nu(t,n,a,r){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var v=u.child;f=f.firstContext;t:for(;f!==null;){var A=f;f=u;for(var H=0;H<n.length;H++)if(A.context===n[H]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),Uu(f.return,a,t),r||(v=null);break t}f=A.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(s(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),Uu(v,a,t),v=null}else v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===t){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function nr(t,n,a,r){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var A=u.type;$n(u.pendingProps.value,v.value)||(t!==null?t.push(A):t=[A])}}else if(u===dt.current){if(v=u.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Oo):t=[Oo])}u=u.return}t!==null&&Nu(n,t,a,r),n.flags|=262144}function Ml(t){for(t=t.firstContext;t!==null;){if(!$n(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ss(t){xs=t,na=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function wn(t){return kp(xs,t)}function yl(t,n){return xs===null&&Ss(t),kp(t,n)}function kp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},na===null){if(t===null)throw Error(s(308));na=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else na=na.next=n;return a}var bx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Tx=o.unstable_scheduleCallback,Ax=o.unstable_NormalPriority,un={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Lu(){return{controller:new bx,data:new Map,refCount:0}}function oo(t){t.refCount--,t.refCount===0&&Tx(Ax,function(){t.controller.abort()})}var lo=null,Ou=0,ir=0,ar=null;function Rx(t,n){if(lo===null){var a=lo=[];Ou=0,ir=Bf(),ar={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Ou++,n.then(Wp,Wp),n}function Wp(){if(--Ou===0&&lo!==null){ar!==null&&(ar.status="fulfilled");var t=lo;lo=null,ir=0,ar=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Cx(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(r.status="rejected",r.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),r}var qp=P.S;P.S=function(t,n){w0=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Rx(t,n),qp!==null&&qp(t,n)};var Ms=D(null);function Pu(){var t=Ms.current;return t!==null?t:We.pooledCache}function El(t,n){n===null?Et(Ms,Ms.current):Et(Ms,n.pool)}function Yp(){var t=Pu();return t===null?null:{parent:un._currentValue,pool:t}}var sr=Error(s(460)),Fu=Error(s(474)),bl=Error(s(542)),Tl={then:function(){}};function jp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Zp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Ji,Ji),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Qp(t),t;default:if(typeof n.status=="string")n.then(Ji,Ji);else{if(t=We,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=r}},function(r){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Qp(t),t}throw Es=n,sr}}function ys(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Es=a,sr):a}}var Es=null;function Kp(){if(Es===null)throw Error(s(459));var t=Es;return Es=null,t}function Qp(t){if(t===sr||t===bl)throw Error(s(483))}var rr=null,co=0;function Al(t){var n=co;return co+=1,rr===null&&(rr=[]),Zp(rr,t,n)}function uo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Rl(t,n){throw n.$$typeof===S?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Jp(t){function n(Z,k){if(t){var $=Z.deletions;$===null?(Z.deletions=[k],Z.flags|=16):$.push(k)}}function a(Z,k){if(!t)return null;for(;k!==null;)n(Z,k),k=k.sibling;return null}function r(Z){for(var k=new Map;Z!==null;)Z.key!==null?k.set(Z.key,Z):k.set(Z.index,Z),Z=Z.sibling;return k}function u(Z,k){return Z=ta(Z,k),Z.index=0,Z.sibling=null,Z}function f(Z,k,$){return Z.index=$,t?($=Z.alternate,$!==null?($=$.index,$<k?(Z.flags|=67108866,k):$):(Z.flags|=67108866,k)):(Z.flags|=1048576,k)}function v(Z){return t&&Z.alternate===null&&(Z.flags|=67108866),Z}function A(Z,k,$,yt){return k===null||k.tag!==6?(k=bu($,Z.mode,yt),k.return=Z,k):(k=u(k,$),k.return=Z,k)}function H(Z,k,$,yt){var te=$.type;return te===C?vt(Z,k,$.props.children,yt,$.key):k!==null&&(k.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===j&&ys(te)===k.type)?(k=u(k,$.props),uo(k,$),k.return=Z,k):(k=xl($.type,$.key,$.props,null,Z.mode,yt),uo(k,$),k.return=Z,k)}function nt(Z,k,$,yt){return k===null||k.tag!==4||k.stateNode.containerInfo!==$.containerInfo||k.stateNode.implementation!==$.implementation?(k=Tu($,Z.mode,yt),k.return=Z,k):(k=u(k,$.children||[]),k.return=Z,k)}function vt(Z,k,$,yt,te){return k===null||k.tag!==7?(k=_s($,Z.mode,yt,te),k.return=Z,k):(k=u(k,$),k.return=Z,k)}function Tt(Z,k,$){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=bu(""+k,Z.mode,$),k.return=Z,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case y:return $=xl(k.type,k.key,k.props,null,Z.mode,$),uo($,k),$.return=Z,$;case b:return k=Tu(k,Z.mode,$),k.return=Z,k;case j:return k=ys(k),Tt(Z,k,$)}if(pt(k)||q(k))return k=_s(k,Z.mode,$,null),k.return=Z,k;if(typeof k.then=="function")return Tt(Z,Al(k),$);if(k.$$typeof===O)return Tt(Z,yl(Z,k),$);Rl(Z,k)}return null}function lt(Z,k,$,yt){var te=k!==null?k.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return te!==null?null:A(Z,k,""+$,yt);if(typeof $=="object"&&$!==null){switch($.$$typeof){case y:return $.key===te?H(Z,k,$,yt):null;case b:return $.key===te?nt(Z,k,$,yt):null;case j:return $=ys($),lt(Z,k,$,yt)}if(pt($)||q($))return te!==null?null:vt(Z,k,$,yt,null);if(typeof $.then=="function")return lt(Z,k,Al($),yt);if($.$$typeof===O)return lt(Z,k,yl(Z,$),yt);Rl(Z,$)}return null}function ht(Z,k,$,yt,te){if(typeof yt=="string"&&yt!==""||typeof yt=="number"||typeof yt=="bigint")return Z=Z.get($)||null,A(k,Z,""+yt,te);if(typeof yt=="object"&&yt!==null){switch(yt.$$typeof){case y:return Z=Z.get(yt.key===null?$:yt.key)||null,H(k,Z,yt,te);case b:return Z=Z.get(yt.key===null?$:yt.key)||null,nt(k,Z,yt,te);case j:return yt=ys(yt),ht(Z,k,$,yt,te)}if(pt(yt)||q(yt))return Z=Z.get($)||null,vt(k,Z,yt,te,null);if(typeof yt.then=="function")return ht(Z,k,$,Al(yt),te);if(yt.$$typeof===O)return ht(Z,k,$,yl(k,yt),te);Rl(k,yt)}return null}function jt(Z,k,$,yt){for(var te=null,Ne=null,Qt=k,fe=k=0,ye=null;Qt!==null&&fe<$.length;fe++){Qt.index>fe?(ye=Qt,Qt=null):ye=Qt.sibling;var Le=lt(Z,Qt,$[fe],yt);if(Le===null){Qt===null&&(Qt=ye);break}t&&Qt&&Le.alternate===null&&n(Z,Qt),k=f(Le,k,fe),Ne===null?te=Le:Ne.sibling=Le,Ne=Le,Qt=ye}if(fe===$.length)return a(Z,Qt),Ee&&ea(Z,fe),te;if(Qt===null){for(;fe<$.length;fe++)Qt=Tt(Z,$[fe],yt),Qt!==null&&(k=f(Qt,k,fe),Ne===null?te=Qt:Ne.sibling=Qt,Ne=Qt);return Ee&&ea(Z,fe),te}for(Qt=r(Qt);fe<$.length;fe++)ye=ht(Qt,Z,fe,$[fe],yt),ye!==null&&(t&&ye.alternate!==null&&Qt.delete(ye.key===null?fe:ye.key),k=f(ye,k,fe),Ne===null?te=ye:Ne.sibling=ye,Ne=ye);return t&&Qt.forEach(function($a){return n(Z,$a)}),Ee&&ea(Z,fe),te}function ie(Z,k,$,yt){if($==null)throw Error(s(151));for(var te=null,Ne=null,Qt=k,fe=k=0,ye=null,Le=$.next();Qt!==null&&!Le.done;fe++,Le=$.next()){Qt.index>fe?(ye=Qt,Qt=null):ye=Qt.sibling;var $a=lt(Z,Qt,Le.value,yt);if($a===null){Qt===null&&(Qt=ye);break}t&&Qt&&$a.alternate===null&&n(Z,Qt),k=f($a,k,fe),Ne===null?te=$a:Ne.sibling=$a,Ne=$a,Qt=ye}if(Le.done)return a(Z,Qt),Ee&&ea(Z,fe),te;if(Qt===null){for(;!Le.done;fe++,Le=$.next())Le=Tt(Z,Le.value,yt),Le!==null&&(k=f(Le,k,fe),Ne===null?te=Le:Ne.sibling=Le,Ne=Le);return Ee&&ea(Z,fe),te}for(Qt=r(Qt);!Le.done;fe++,Le=$.next())Le=ht(Qt,Z,fe,Le.value,yt),Le!==null&&(t&&Le.alternate!==null&&Qt.delete(Le.key===null?fe:Le.key),k=f(Le,k,fe),Ne===null?te=Le:Ne.sibling=Le,Ne=Le);return t&&Qt.forEach(function(IS){return n(Z,IS)}),Ee&&ea(Z,fe),te}function ke(Z,k,$,yt){if(typeof $=="object"&&$!==null&&$.type===C&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case y:t:{for(var te=$.key;k!==null;){if(k.key===te){if(te=$.type,te===C){if(k.tag===7){a(Z,k.sibling),yt=u(k,$.props.children),yt.return=Z,Z=yt;break t}}else if(k.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===j&&ys(te)===k.type){a(Z,k.sibling),yt=u(k,$.props),uo(yt,$),yt.return=Z,Z=yt;break t}a(Z,k);break}else n(Z,k);k=k.sibling}$.type===C?(yt=_s($.props.children,Z.mode,yt,$.key),yt.return=Z,Z=yt):(yt=xl($.type,$.key,$.props,null,Z.mode,yt),uo(yt,$),yt.return=Z,Z=yt)}return v(Z);case b:t:{for(te=$.key;k!==null;){if(k.key===te)if(k.tag===4&&k.stateNode.containerInfo===$.containerInfo&&k.stateNode.implementation===$.implementation){a(Z,k.sibling),yt=u(k,$.children||[]),yt.return=Z,Z=yt;break t}else{a(Z,k);break}else n(Z,k);k=k.sibling}yt=Tu($,Z.mode,yt),yt.return=Z,Z=yt}return v(Z);case j:return $=ys($),ke(Z,k,$,yt)}if(pt($))return jt(Z,k,$,yt);if(q($)){if(te=q($),typeof te!="function")throw Error(s(150));return $=te.call($),ie(Z,k,$,yt)}if(typeof $.then=="function")return ke(Z,k,Al($),yt);if($.$$typeof===O)return ke(Z,k,yl(Z,$),yt);Rl(Z,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,k!==null&&k.tag===6?(a(Z,k.sibling),yt=u(k,$),yt.return=Z,Z=yt):(a(Z,k),yt=bu($,Z.mode,yt),yt.return=Z,Z=yt),v(Z)):a(Z,k)}return function(Z,k,$,yt){try{co=0;var te=ke(Z,k,$,yt);return rr=null,te}catch(Qt){if(Qt===sr||Qt===bl)throw Qt;var Ne=ti(29,Qt,null,Z.mode);return Ne.lanes=yt,Ne.return=Z,Ne}finally{}}}var bs=Jp(!0),$p=Jp(!1),Fa=!1;function zu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Bu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function za(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ba(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Fe&2)!==0){var u=r.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),r.pending=n,n=vl(t),Fp(t,null,a),n}return _l(t,r,n,a),vl(t)}function fo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,ci(t,a)}}function Iu(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Hu=!1;function ho(){if(Hu){var t=ar;if(t!==null)throw t}}function po(t,n,a,r){Hu=!1;var u=t.updateQueue;Fa=!1;var f=u.firstBaseUpdate,v=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var H=A,nt=H.next;H.next=null,v===null?f=nt:v.next=nt,v=H;var vt=t.alternate;vt!==null&&(vt=vt.updateQueue,A=vt.lastBaseUpdate,A!==v&&(A===null?vt.firstBaseUpdate=nt:A.next=nt,vt.lastBaseUpdate=H))}if(f!==null){var Tt=u.baseState;v=0,vt=nt=H=null,A=f;do{var lt=A.lane&-536870913,ht=lt!==A.lane;if(ht?(Me&lt)===lt:(r&lt)===lt){lt!==0&&lt===ir&&(Hu=!0),vt!==null&&(vt=vt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var jt=t,ie=A;lt=n;var ke=a;switch(ie.tag){case 1:if(jt=ie.payload,typeof jt=="function"){Tt=jt.call(ke,Tt,lt);break t}Tt=jt;break t;case 3:jt.flags=jt.flags&-65537|128;case 0:if(jt=ie.payload,lt=typeof jt=="function"?jt.call(ke,Tt,lt):jt,lt==null)break t;Tt=g({},Tt,lt);break t;case 2:Fa=!0}}lt=A.callback,lt!==null&&(t.flags|=64,ht&&(t.flags|=8192),ht=u.callbacks,ht===null?u.callbacks=[lt]:ht.push(lt))}else ht={lane:lt,tag:A.tag,payload:A.payload,callback:A.callback,next:null},vt===null?(nt=vt=ht,H=Tt):vt=vt.next=ht,v|=lt;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;ht=A,A=ht.next,ht.next=null,u.lastBaseUpdate=ht,u.shared.pending=null}}while(!0);vt===null&&(H=Tt),u.baseState=H,u.firstBaseUpdate=nt,u.lastBaseUpdate=vt,f===null&&(u.shared.lanes=0),Xa|=v,t.lanes=v,t.memoizedState=Tt}}function tm(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function em(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)tm(a[t],n)}var or=D(null),Cl=D(0);function nm(t,n){t=ha,Et(Cl,t),Et(or,n),ha=t|n.baseLanes}function Gu(){Et(Cl,ha),Et(or,or.current)}function Vu(){ha=Cl.current,tt(or),tt(Cl)}var ei=D(null),vi=null;function Ia(t){var n=t.alternate;Et(rn,rn.current&1),Et(ei,t),vi===null&&(n===null||or.current!==null||n.memoizedState!==null)&&(vi=t)}function Xu(t){Et(rn,rn.current),Et(ei,t),vi===null&&(vi=t)}function im(t){t.tag===22?(Et(rn,rn.current),Et(ei,t),vi===null&&(vi=t)):Ha()}function Ha(){Et(rn,rn.current),Et(ei,ei.current)}function ni(t){tt(ei),vi===t&&(vi=null),tt(rn)}var rn=D(0);function wl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Kf(a)||Qf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var aa=0,ce=null,Ve=null,fn=null,Dl=!1,lr=!1,Ts=!1,Ul=0,mo=0,cr=null,wx=0;function en(){throw Error(s(321))}function ku(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!$n(t[a],n[a]))return!1;return!0}function Wu(t,n,a,r,u,f){return aa=f,ce=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=t===null||t.memoizedState===null?Hm:of,Ts=!1,f=a(r,u),Ts=!1,lr&&(f=sm(n,a,r,u)),am(t),f}function am(t){P.H=vo;var n=Ve!==null&&Ve.next!==null;if(aa=0,fn=Ve=ce=null,Dl=!1,mo=0,cr=null,n)throw Error(s(300));t===null||hn||(t=t.dependencies,t!==null&&Ml(t)&&(hn=!0))}function sm(t,n,a,r){ce=t;var u=0;do{if(lr&&(cr=null),mo=0,lr=!1,25<=u)throw Error(s(301));if(u+=1,fn=Ve=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}P.H=Gm,f=n(a,r)}while(lr);return f}function Dx(){var t=P.H,n=t.useState()[0];return n=typeof n.then=="function"?go(n):n,t=t.useState()[0],(Ve!==null?Ve.memoizedState:null)!==t&&(ce.flags|=1024),n}function qu(){var t=Ul!==0;return Ul=0,t}function Yu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function ju(t){if(Dl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Dl=!1}aa=0,fn=Ve=ce=null,lr=!1,mo=Ul=0,cr=null}function In(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fn===null?ce.memoizedState=fn=t:fn=fn.next=t,fn}function on(){if(Ve===null){var t=ce.alternate;t=t!==null?t.memoizedState:null}else t=Ve.next;var n=fn===null?ce.memoizedState:fn.next;if(n!==null)fn=n,Ve=t;else{if(t===null)throw ce.alternate===null?Error(s(467)):Error(s(310));Ve=t,t={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},fn===null?ce.memoizedState=fn=t:fn=fn.next=t}return fn}function Nl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function go(t){var n=mo;return mo+=1,cr===null&&(cr=[]),t=Zp(cr,t,n),n=ce,(fn===null?n.memoizedState:fn.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?Hm:of),t}function Ll(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return go(t);if(t.$$typeof===O)return wn(t)}throw Error(s(438,String(t)))}function Zu(t){var n=null,a=ce.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=ce.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Nl(),ce.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=w;return n.index++,a}function sa(t,n){return typeof n=="function"?n(t):n}function Ol(t){var n=on();return Ku(n,Ve,t)}function Ku(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var u=t.baseQueue,f=r.pending;if(f!==null){if(u!==null){var v=u.next;u.next=f.next,f.next=v}n.baseQueue=u=f,r.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var A=v=null,H=null,nt=n,vt=!1;do{var Tt=nt.lane&-536870913;if(Tt!==nt.lane?(Me&Tt)===Tt:(aa&Tt)===Tt){var lt=nt.revertLane;if(lt===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null}),Tt===ir&&(vt=!0);else if((aa&lt)===lt){nt=nt.next,lt===ir&&(vt=!0);continue}else Tt={lane:0,revertLane:nt.revertLane,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},H===null?(A=H=Tt,v=f):H=H.next=Tt,ce.lanes|=lt,Xa|=lt;Tt=nt.action,Ts&&a(f,Tt),f=nt.hasEagerState?nt.eagerState:a(f,Tt)}else lt={lane:Tt,revertLane:nt.revertLane,gesture:nt.gesture,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},H===null?(A=H=lt,v=f):H=H.next=lt,ce.lanes|=Tt,Xa|=Tt;nt=nt.next}while(nt!==null&&nt!==n);if(H===null?v=f:H.next=A,!$n(f,t.memoizedState)&&(hn=!0,vt&&(a=ar,a!==null)))throw a;t.memoizedState=f,t.baseState=v,t.baseQueue=H,r.lastRenderedState=f}return u===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Qu(t){var n=on(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var v=u=u.next;do f=t(f,v.action),v=v.next;while(v!==u);$n(f,n.memoizedState)||(hn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function rm(t,n,a){var r=ce,u=on(),f=Ee;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var v=!$n((Ve||u).memoizedState,a);if(v&&(u.memoizedState=a,hn=!0),u=u.queue,tf(cm.bind(null,r,u,t),[t]),u.getSnapshot!==n||v||fn!==null&&fn.memoizedState.tag&1){if(r.flags|=2048,ur(9,{destroy:void 0},lm.bind(null,r,u,a,n),null),We===null)throw Error(s(349));f||(aa&127)!==0||om(r,n,a)}return a}function om(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ce.updateQueue,n===null?(n=Nl(),ce.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function lm(t,n,a,r){n.value=a,n.getSnapshot=r,um(n)&&fm(t)}function cm(t,n,a){return a(function(){um(n)&&fm(t)})}function um(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!$n(t,a)}catch{return!0}}function fm(t){var n=gs(t,2);n!==null&&jn(n,t,2)}function Ju(t){var n=In();if(typeof t=="function"){var a=t;if(t=a(),Ts){Lt(!0);try{a()}finally{Lt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:t},n}function hm(t,n,a,r){return t.baseState=a,Ku(t,Ve,typeof r=="function"?r:sa)}function Ux(t,n,a,r,u){if(zl(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};P.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,dm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function dm(t,n){var a=n.action,r=n.payload,u=t.state;if(n.isTransition){var f=P.T,v={};P.T=v;try{var A=a(u,r),H=P.S;H!==null&&H(v,A),pm(t,n,A)}catch(nt){$u(t,n,nt)}finally{f!==null&&v.types!==null&&(f.types=v.types),P.T=f}}else try{f=a(u,r),pm(t,n,f)}catch(nt){$u(t,n,nt)}}function pm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){mm(t,n,r)},function(r){return $u(t,n,r)}):mm(t,n,a)}function mm(t,n,a){n.status="fulfilled",n.value=a,gm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,dm(t,a)))}function $u(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,gm(n),n=n.next;while(n!==r)}t.action=null}function gm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function _m(t,n){return n}function vm(t,n){if(Ee){var a=We.formState;if(a!==null){t:{var r=ce;if(Ee){if(Ke){e:{for(var u=Ke,f=_i;u.nodeType!==8;){if(!f){u=null;break e}if(u=xi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Ke=xi(u.nextSibling),r=u.data==="F!";break t}}Oa(r)}r=!1}r&&(n=a[0])}}return a=In(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_m,lastRenderedState:n},a.queue=r,a=zm.bind(null,ce,r),r.dispatch=a,r=Ju(!1),f=rf.bind(null,ce,!1,r.queue),r=In(),u={state:n,dispatch:null,action:t,pending:null},r.queue=u,a=Ux.bind(null,ce,u,f,a),u.dispatch=a,r.memoizedState=t,[n,a,!1]}function xm(t){var n=on();return Sm(n,Ve,t)}function Sm(t,n,a){if(n=Ku(t,n,_m)[0],t=Ol(sa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=go(n)}catch(v){throw v===sr?bl:v}else r=n;n=on();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(ce.flags|=2048,ur(9,{destroy:void 0},Nx.bind(null,u,a),null)),[r,f,t]}function Nx(t,n){t.action=n}function Mm(t){var n=on(),a=Ve;if(a!==null)return Sm(n,a,t);on(),n=n.memoizedState,a=on();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function ur(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=ce.updateQueue,n===null&&(n=Nl(),ce.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function ym(){return on().memoizedState}function Pl(t,n,a,r){var u=In();ce.flags|=t,u.memoizedState=ur(1|n,{destroy:void 0},a,r===void 0?null:r)}function Fl(t,n,a,r){var u=on();r=r===void 0?null:r;var f=u.memoizedState.inst;Ve!==null&&r!==null&&ku(r,Ve.memoizedState.deps)?u.memoizedState=ur(n,f,a,r):(ce.flags|=t,u.memoizedState=ur(1|n,f,a,r))}function Em(t,n){Pl(8390656,8,t,n)}function tf(t,n){Fl(2048,8,t,n)}function Lx(t){ce.flags|=4;var n=ce.updateQueue;if(n===null)n=Nl(),ce.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function bm(t){var n=on().memoizedState;return Lx({ref:n,nextImpl:t}),function(){if((Fe&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Tm(t,n){return Fl(4,2,t,n)}function Am(t,n){return Fl(4,4,t,n)}function Rm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Cm(t,n,a){a=a!=null?a.concat([t]):null,Fl(4,4,Rm.bind(null,n,t),a)}function ef(){}function wm(t,n){var a=on();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&ku(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function Dm(t,n){var a=on();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&ku(n,r[1]))return r[0];if(r=t(),Ts){Lt(!0);try{t()}finally{Lt(!1)}}return a.memoizedState=[r,n],r}function nf(t,n,a){return a===void 0||(aa&1073741824)!==0&&(Me&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=U0(),ce.lanes|=t,Xa|=t,a)}function Um(t,n,a,r){return $n(a,n)?a:or.current!==null?(t=nf(t,a,r),$n(t,n)||(hn=!0),t):(aa&42)===0||(aa&1073741824)!==0&&(Me&261930)===0?(hn=!0,t.memoizedState=a):(t=U0(),ce.lanes|=t,Xa|=t,n)}function Nm(t,n,a,r,u){var f=I.p;I.p=f!==0&&8>f?f:8;var v=P.T,A={};P.T=A,rf(t,!1,n,a);try{var H=u(),nt=P.S;if(nt!==null&&nt(A,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var vt=Cx(H,r);_o(t,n,vt,si(t))}else _o(t,n,r,si(t))}catch(Tt){_o(t,n,{then:function(){},status:"rejected",reason:Tt},si())}finally{I.p=f,v!==null&&A.types!==null&&(v.types=A.types),P.T=v}}function Ox(){}function af(t,n,a,r){if(t.tag!==5)throw Error(s(476));var u=Lm(t).queue;Nm(t,u,n,at,a===null?Ox:function(){return Om(t),a(r)})}function Lm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:at,baseState:at,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:at},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Om(t){var n=Lm(t);n.next===null&&(n=t.alternate.memoizedState),_o(t,n.next.queue,{},si())}function sf(){return wn(Oo)}function Pm(){return on().memoizedState}function Fm(){return on().memoizedState}function Px(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=si();t=za(a);var r=Ba(n,t,a);r!==null&&(jn(r,n,a),fo(r,n,a)),n={cache:Lu()},t.payload=n;return}n=n.return}}function Fx(t,n,a){var r=si();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},zl(t)?Bm(n,a):(a=yu(t,n,a,r),a!==null&&(jn(a,t,r),Im(a,n,r)))}function zm(t,n,a){var r=si();_o(t,n,a,r)}function _o(t,n,a,r){var u={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(zl(t))Bm(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,A=f(v,a);if(u.hasEagerState=!0,u.eagerState=A,$n(A,v))return _l(t,n,u,0),We===null&&gl(),!1}catch{}finally{}if(a=yu(t,n,u,r),a!==null)return jn(a,t,r),Im(a,n,r),!0}return!1}function rf(t,n,a,r){if(r={lane:2,revertLane:Bf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},zl(t)){if(n)throw Error(s(479))}else n=yu(t,a,r,2),n!==null&&jn(n,t,2)}function zl(t){var n=t.alternate;return t===ce||n!==null&&n===ce}function Bm(t,n){lr=Dl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Im(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,ci(t,a)}}var vo={readContext:wn,use:Ll,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en};vo.useEffectEvent=en;var Hm={readContext:wn,use:Ll,useCallback:function(t,n){return In().memoizedState=[t,n===void 0?null:n],t},useContext:wn,useEffect:Em,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Pl(4194308,4,Rm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Pl(4194308,4,t,n)},useInsertionEffect:function(t,n){Pl(4,2,t,n)},useMemo:function(t,n){var a=In();n=n===void 0?null:n;var r=t();if(Ts){Lt(!0);try{t()}finally{Lt(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=In();if(a!==void 0){var u=a(n);if(Ts){Lt(!0);try{a(n)}finally{Lt(!1)}}}else u=n;return r.memoizedState=r.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},r.queue=t,t=t.dispatch=Fx.bind(null,ce,t),[r.memoizedState,t]},useRef:function(t){var n=In();return t={current:t},n.memoizedState=t},useState:function(t){t=Ju(t);var n=t.queue,a=zm.bind(null,ce,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:ef,useDeferredValue:function(t,n){var a=In();return nf(a,t,n)},useTransition:function(){var t=Ju(!1);return t=Nm.bind(null,ce,t.queue,!0,!1),In().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=ce,u=In();if(Ee){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),We===null)throw Error(s(349));(Me&127)!==0||om(r,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Em(cm.bind(null,r,f,t),[t]),r.flags|=2048,ur(9,{destroy:void 0},lm.bind(null,r,f,a,n),null),a},useId:function(){var t=In(),n=We.identifierPrefix;if(Ee){var a=zi,r=Fi;a=(r&~(1<<32-Dt(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Ul++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=wx++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:sf,useFormState:vm,useActionState:vm,useOptimistic:function(t){var n=In();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=rf.bind(null,ce,!0,a),a.dispatch=n,[t,n]},useMemoCache:Zu,useCacheRefresh:function(){return In().memoizedState=Px.bind(null,ce)},useEffectEvent:function(t){var n=In(),a={impl:t};return n.memoizedState=a,function(){if((Fe&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},of={readContext:wn,use:Ll,useCallback:wm,useContext:wn,useEffect:tf,useImperativeHandle:Cm,useInsertionEffect:Tm,useLayoutEffect:Am,useMemo:Dm,useReducer:Ol,useRef:ym,useState:function(){return Ol(sa)},useDebugValue:ef,useDeferredValue:function(t,n){var a=on();return Um(a,Ve.memoizedState,t,n)},useTransition:function(){var t=Ol(sa)[0],n=on().memoizedState;return[typeof t=="boolean"?t:go(t),n]},useSyncExternalStore:rm,useId:Pm,useHostTransitionStatus:sf,useFormState:xm,useActionState:xm,useOptimistic:function(t,n){var a=on();return hm(a,Ve,t,n)},useMemoCache:Zu,useCacheRefresh:Fm};of.useEffectEvent=bm;var Gm={readContext:wn,use:Ll,useCallback:wm,useContext:wn,useEffect:tf,useImperativeHandle:Cm,useInsertionEffect:Tm,useLayoutEffect:Am,useMemo:Dm,useReducer:Qu,useRef:ym,useState:function(){return Qu(sa)},useDebugValue:ef,useDeferredValue:function(t,n){var a=on();return Ve===null?nf(a,t,n):Um(a,Ve.memoizedState,t,n)},useTransition:function(){var t=Qu(sa)[0],n=on().memoizedState;return[typeof t=="boolean"?t:go(t),n]},useSyncExternalStore:rm,useId:Pm,useHostTransitionStatus:sf,useFormState:Mm,useActionState:Mm,useOptimistic:function(t,n){var a=on();return Ve!==null?hm(a,Ve,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Zu,useCacheRefresh:Fm};Gm.useEffectEvent=bm;function lf(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var cf={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=si(),u=za(r);u.payload=n,a!=null&&(u.callback=a),n=Ba(t,u,r),n!==null&&(jn(n,t,r),fo(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=si(),u=za(r);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ba(t,u,r),n!==null&&(jn(n,t,r),fo(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=si(),r=za(a);r.tag=2,n!=null&&(r.callback=n),n=Ba(t,r,a),n!==null&&(jn(n,t,a),fo(n,t,a))}};function Vm(t,n,a,r,u,f,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,f,v):n.prototype&&n.prototype.isPureReactComponent?!io(a,r)||!io(u,f):!0}function Xm(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&cf.enqueueReplaceState(n,n.state,null)}function As(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function km(t){ml(t)}function Wm(t){console.error(t)}function qm(t){ml(t)}function Bl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Ym(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function uf(t,n,a){return a=za(a),a.tag=3,a.payload={element:null},a.callback=function(){Bl(t,n)},a}function jm(t){return t=za(t),t.tag=3,t}function Zm(t,n,a,r){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=r.value;t.payload=function(){return u(f)},t.callback=function(){Ym(n,a,r)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(t.callback=function(){Ym(n,a,r),typeof u!="function"&&(ka===null?ka=new Set([this]):ka.add(this));var A=r.stack;this.componentDidCatch(r.value,{componentStack:A!==null?A:""})})}function zx(t,n,a,r,u){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&nr(n,a,u,!0),a=ei.current,a!==null){switch(a.tag){case 31:case 13:return vi===null?Kl():a.alternate===null&&nn===0&&(nn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,r===Tl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Pf(t,r,u)),!1;case 22:return a.flags|=65536,r===Tl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Pf(t,r,u)),!1}throw Error(s(435,a.tag))}return Pf(t,r,u),Kl(),!1}if(Ee)return n=ei.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,r!==Cu&&(t=Error(s(422),{cause:r}),ro(pi(t,a)))):(r!==Cu&&(n=Error(s(423),{cause:r}),ro(pi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,r=pi(r,a),u=uf(t.stateNode,r,u),Iu(t,u),nn!==4&&(nn=2)),!1;var f=Error(s(520),{cause:r});if(f=pi(f,a),Ao===null?Ao=[f]:Ao.push(f),nn!==4&&(nn=2),n===null)return!0;r=pi(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=uf(a.stateNode,r,t),Iu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ka===null||!ka.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=jm(u),Zm(u,t,a,r),Iu(a,u),!1}a=a.return}while(a!==null);return!1}var ff=Error(s(461)),hn=!1;function Dn(t,n,a,r){n.child=t===null?$p(n,null,a,r):bs(n,t.child,a,r)}function Km(t,n,a,r,u){a=a.render;var f=n.ref;if("ref"in r){var v={};for(var A in r)A!=="ref"&&(v[A]=r[A])}else v=r;return Ss(n),r=Wu(t,n,a,v,f,u),A=qu(),t!==null&&!hn?(Yu(t,n,u),ra(t,n,u)):(Ee&&A&&Au(n),n.flags|=1,Dn(t,n,r,u),n.child)}function Qm(t,n,a,r,u){if(t===null){var f=a.type;return typeof f=="function"&&!Eu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Jm(t,n,f,r,u)):(t=xl(a.type,null,r,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!xf(t,u)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:io,a(v,r)&&t.ref===n.ref)return ra(t,n,u)}return n.flags|=1,t=ta(f,r),t.ref=n.ref,t.return=n,n.child=t}function Jm(t,n,a,r,u){if(t!==null){var f=t.memoizedProps;if(io(f,r)&&t.ref===n.ref)if(hn=!1,n.pendingProps=r=f,xf(t,u))(t.flags&131072)!==0&&(hn=!0);else return n.lanes=t.lanes,ra(t,n,u)}return hf(t,n,a,r,u)}function $m(t,n,a,r){var u=r.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(r=n.child=t.child,u=0;r!==null;)u=u|r.lanes|r.childLanes,r=r.sibling;r=u&~f}else r=0,n.child=null;return t0(t,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&El(n,f!==null?f.cachePool:null),f!==null?nm(n,f):Gu(),im(n);else return r=n.lanes=536870912,t0(t,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(El(n,f.cachePool),nm(n,f),Ha(),n.memoizedState=null):(t!==null&&El(n,null),Gu(),Ha());return Dn(t,n,u,a),n.child}function xo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function t0(t,n,a,r,u){var f=Pu();return f=f===null?null:{parent:un._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&El(n,null),Gu(),im(n),t!==null&&nr(t,n,r,!0),n.childLanes=u,null}function Il(t,n){return n=Gl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function e0(t,n,a){return bs(n,t.child,null,a),t=Il(n,n.pendingProps),t.flags|=2,ni(n),n.memoizedState=null,t}function Bx(t,n,a){var r=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Ee){if(r.mode==="hidden")return t=Il(n,r),n.lanes=536870912,xo(null,t);if(Xu(n),(t=Ke)?(t=dg(t,_i),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Na!==null?{id:Fi,overflow:zi}:null,retryLane:536870912,hydrationErrors:null},a=Bp(t),a.return=n,n.child=a,Cn=n,Ke=null)):t=null,t===null)throw Oa(n);return n.lanes=536870912,null}return Il(n,r)}var f=t.memoizedState;if(f!==null){var v=f.dehydrated;if(Xu(n),u)if(n.flags&256)n.flags&=-257,n=e0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(hn||nr(t,n,a,!1),u=(a&t.childLanes)!==0,hn||u){if(r=We,r!==null&&(v=ui(r,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,gs(t,v),jn(r,t,v),ff;Kl(),n=e0(t,n,a)}else t=f.treeContext,Ke=xi(v.nextSibling),Cn=n,Ee=!0,La=null,_i=!1,t!==null&&Gp(n,t),n=Il(n,r),n.flags|=4096;return n}return t=ta(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Hl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function hf(t,n,a,r,u){return Ss(n),a=Wu(t,n,a,r,void 0,u),r=qu(),t!==null&&!hn?(Yu(t,n,u),ra(t,n,u)):(Ee&&r&&Au(n),n.flags|=1,Dn(t,n,a,u),n.child)}function n0(t,n,a,r,u,f){return Ss(n),n.updateQueue=null,a=sm(n,r,a,u),am(t),r=qu(),t!==null&&!hn?(Yu(t,n,f),ra(t,n,f)):(Ee&&r&&Au(n),n.flags|=1,Dn(t,n,a,f),n.child)}function i0(t,n,a,r,u){if(Ss(n),n.stateNode===null){var f=Js,v=a.contextType;typeof v=="object"&&v!==null&&(f=wn(v)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=cf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},zu(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?wn(v):Js,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(lf(n,a,v,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&cf.enqueueReplaceState(f,f.state,null),po(n,r,f,u),ho(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){f=n.stateNode;var A=n.memoizedProps,H=As(a,A);f.props=H;var nt=f.context,vt=a.contextType;v=Js,typeof vt=="object"&&vt!==null&&(v=wn(vt));var Tt=a.getDerivedStateFromProps;vt=typeof Tt=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,vt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||nt!==v)&&Xm(n,f,r,v),Fa=!1;var lt=n.memoizedState;f.state=lt,po(n,r,f,u),ho(),nt=n.memoizedState,A||lt!==nt||Fa?(typeof Tt=="function"&&(lf(n,a,Tt,r),nt=n.memoizedState),(H=Fa||Vm(n,a,H,r,lt,nt,v))?(vt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=nt),f.props=r,f.state=nt,f.context=v,r=H):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Bu(t,n),v=n.memoizedProps,vt=As(a,v),f.props=vt,Tt=n.pendingProps,lt=f.context,nt=a.contextType,H=Js,typeof nt=="object"&&nt!==null&&(H=wn(nt)),A=a.getDerivedStateFromProps,(nt=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==Tt||lt!==H)&&Xm(n,f,r,H),Fa=!1,lt=n.memoizedState,f.state=lt,po(n,r,f,u),ho();var ht=n.memoizedState;v!==Tt||lt!==ht||Fa||t!==null&&t.dependencies!==null&&Ml(t.dependencies)?(typeof A=="function"&&(lf(n,a,A,r),ht=n.memoizedState),(vt=Fa||Vm(n,a,vt,r,lt,ht,H)||t!==null&&t.dependencies!==null&&Ml(t.dependencies))?(nt||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,ht,H),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,ht,H)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===t.memoizedProps&&lt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&lt===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=ht),f.props=r,f.state=ht,f.context=H,r=vt):(typeof f.componentDidUpdate!="function"||v===t.memoizedProps&&lt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&lt===t.memoizedState||(n.flags|=1024),r=!1)}return f=r,Hl(t,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&r?(n.child=bs(n,t.child,null,u),n.child=bs(n,null,a,u)):Dn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=ra(t,n,u),t}function a0(t,n,a,r){return vs(),n.flags|=256,Dn(t,n,a,r),n.child}var df={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function pf(t){return{baseLanes:t,cachePool:Yp()}}function mf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ai),t}function s0(t,n,a){var r=n.pendingProps,u=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=t!==null&&t.memoizedState===null?!1:(rn.current&2)!==0),v&&(u=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,t===null){if(Ee){if(u?Ia(n):Ha(),(t=Ke)?(t=dg(t,_i),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Na!==null?{id:Fi,overflow:zi}:null,retryLane:536870912,hydrationErrors:null},a=Bp(t),a.return=n,n.child=a,Cn=n,Ke=null)):t=null,t===null)throw Oa(n);return Qf(t)?n.lanes=32:n.lanes=536870912,null}var A=r.children;return r=r.fallback,u?(Ha(),u=n.mode,A=Gl({mode:"hidden",children:A},u),r=_s(r,u,a,null),A.return=n,r.return=n,A.sibling=r,n.child=A,r=n.child,r.memoizedState=pf(a),r.childLanes=mf(t,v,a),n.memoizedState=df,xo(null,r)):(Ia(n),gf(n,A))}var H=t.memoizedState;if(H!==null&&(A=H.dehydrated,A!==null)){if(f)n.flags&256?(Ia(n),n.flags&=-257,n=_f(t,n,a)):n.memoizedState!==null?(Ha(),n.child=t.child,n.flags|=128,n=null):(Ha(),A=r.fallback,u=n.mode,r=Gl({mode:"visible",children:r.children},u),A=_s(A,u,a,null),A.flags|=2,r.return=n,A.return=n,r.sibling=A,n.child=r,bs(n,t.child,null,a),r=n.child,r.memoizedState=pf(a),r.childLanes=mf(t,v,a),n.memoizedState=df,n=xo(null,r));else if(Ia(n),Qf(A)){if(v=A.nextSibling&&A.nextSibling.dataset,v)var nt=v.dgst;v=nt,r=Error(s(419)),r.stack="",r.digest=v,ro({value:r,source:null,stack:null}),n=_f(t,n,a)}else if(hn||nr(t,n,a,!1),v=(a&t.childLanes)!==0,hn||v){if(v=We,v!==null&&(r=ui(v,a),r!==0&&r!==H.retryLane))throw H.retryLane=r,gs(t,r),jn(v,t,r),ff;Kf(A)||Kl(),n=_f(t,n,a)}else Kf(A)?(n.flags|=192,n.child=t.child,n=null):(t=H.treeContext,Ke=xi(A.nextSibling),Cn=n,Ee=!0,La=null,_i=!1,t!==null&&Gp(n,t),n=gf(n,r.children),n.flags|=4096);return n}return u?(Ha(),A=r.fallback,u=n.mode,H=t.child,nt=H.sibling,r=ta(H,{mode:"hidden",children:r.children}),r.subtreeFlags=H.subtreeFlags&65011712,nt!==null?A=ta(nt,A):(A=_s(A,u,a,null),A.flags|=2),A.return=n,r.return=n,r.sibling=A,n.child=r,xo(null,r),r=n.child,A=t.child.memoizedState,A===null?A=pf(a):(u=A.cachePool,u!==null?(H=un._currentValue,u=u.parent!==H?{parent:H,pool:H}:u):u=Yp(),A={baseLanes:A.baseLanes|a,cachePool:u}),r.memoizedState=A,r.childLanes=mf(t,v,a),n.memoizedState=df,xo(t.child,r)):(Ia(n),a=t.child,t=a.sibling,a=ta(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(v=n.deletions,v===null?(n.deletions=[t],n.flags|=16):v.push(t)),n.child=a,n.memoizedState=null,a)}function gf(t,n){return n=Gl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Gl(t,n){return t=ti(22,t,null,n),t.lanes=0,t}function _f(t,n,a){return bs(n,t.child,null,a),t=gf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function r0(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),Uu(t.return,n,a)}function vf(t,n,a,r,u,f){var v=t.memoizedState;v===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:u,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=r,v.tail=a,v.tailMode=u,v.treeForkCount=f)}function o0(t,n,a){var r=n.pendingProps,u=r.revealOrder,f=r.tail;r=r.children;var v=rn.current,A=(v&2)!==0;if(A?(v=v&1|2,n.flags|=128):v&=1,Et(rn,v),Dn(t,n,r,a),r=Ee?so:0,!A&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&r0(t,a,n);else if(t.tag===19)r0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&wl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),vf(n,!1,u,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&wl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}vf(n,!0,a,null,f,r);break;case"together":vf(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function ra(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Xa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(nr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=ta(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=ta(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function xf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Ml(t)))}function Ix(t,n,a){switch(n.tag){case 3:Ft(n,n.stateNode.containerInfo),Pa(n,un,t.memoizedState.cache),vs();break;case 27:case 5:Xt(n);break;case 4:Ft(n,n.stateNode.containerInfo);break;case 10:Pa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Xu(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(Ia(n),n.flags|=128,null):(a&n.child.childLanes)!==0?s0(t,n,a):(Ia(n),t=ra(t,n,a),t!==null?t.sibling:null);Ia(n);break;case 19:var u=(t.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(nr(t,n,a,!1),r=(a&n.childLanes)!==0),u){if(r)return o0(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Et(rn,rn.current),r)break;return null;case 22:return n.lanes=0,$m(t,n,a,n.pendingProps);case 24:Pa(n,un,t.memoizedState.cache)}return ra(t,n,a)}function l0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)hn=!0;else{if(!xf(t,a)&&(n.flags&128)===0)return hn=!1,Ix(t,n,a);hn=(t.flags&131072)!==0}else hn=!1,Ee&&(n.flags&1048576)!==0&&Hp(n,so,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=ys(n.elementType),n.type=t,typeof t=="function")Eu(t)?(r=As(t,r),n.tag=1,n=i0(null,n,t,r,a)):(n.tag=0,n=hf(null,n,t,r,a));else{if(t!=null){var u=t.$$typeof;if(u===N){n.tag=11,n=Km(null,n,t,r,a);break t}else if(u===z){n.tag=14,n=Qm(null,n,t,r,a);break t}}throw n=ut(t)||t,Error(s(306,n,""))}}return n;case 0:return hf(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,u=As(r,n.pendingProps),i0(t,n,r,u,a);case 3:t:{if(Ft(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;u=f.element,Bu(t,n),po(n,r,null,a);var v=n.memoizedState;if(r=v.cache,Pa(n,un,r),r!==f.cache&&Nu(n,[un],a,!0),ho(),r=v.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=a0(t,n,r,a);break t}else if(r!==u){u=pi(Error(s(424)),n),ro(u),n=a0(t,n,r,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ke=xi(t.firstChild),Cn=n,Ee=!0,La=null,_i=!0,a=$p(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(vs(),r===u){n=ra(t,n,a);break t}Dn(t,n,r,a)}n=n.child}return n;case 26:return Hl(t,n),t===null?(a=xg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ee||(a=n.type,t=n.pendingProps,r=ic(it.current).createElement(a),r[cn]=n,r[yn]=t,Un(r,a,t),R(r),n.stateNode=r):n.memoizedState=xg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Xt(n),t===null&&Ee&&(r=n.stateNode=gg(n.type,n.pendingProps,it.current),Cn=n,_i=!0,u=Ke,ja(n.type)?(Jf=u,Ke=xi(r.firstChild)):Ke=u),Dn(t,n,n.pendingProps.children,a),Hl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Ee&&((u=r=Ke)&&(r=mS(r,n.type,n.pendingProps,_i),r!==null?(n.stateNode=r,Cn=n,Ke=xi(r.firstChild),_i=!1,u=!0):u=!1),u||Oa(n)),Xt(n),u=n.type,f=n.pendingProps,v=t!==null?t.memoizedProps:null,r=f.children,Yf(u,f)?r=null:v!==null&&Yf(u,v)&&(n.flags|=32),n.memoizedState!==null&&(u=Wu(t,n,Dx,null,null,a),Oo._currentValue=u),Hl(t,n),Dn(t,n,r,a),n.child;case 6:return t===null&&Ee&&((t=a=Ke)&&(a=gS(a,n.pendingProps,_i),a!==null?(n.stateNode=a,Cn=n,Ke=null,t=!0):t=!1),t||Oa(n)),null;case 13:return s0(t,n,a);case 4:return Ft(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=bs(n,null,r,a):Dn(t,n,r,a),n.child;case 11:return Km(t,n,n.type,n.pendingProps,a);case 7:return Dn(t,n,n.pendingProps,a),n.child;case 8:return Dn(t,n,n.pendingProps.children,a),n.child;case 12:return Dn(t,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,Pa(n,n.type,r.value),Dn(t,n,r.children,a),n.child;case 9:return u=n.type._context,r=n.pendingProps.children,Ss(n),u=wn(u),r=r(u),n.flags|=1,Dn(t,n,r,a),n.child;case 14:return Qm(t,n,n.type,n.pendingProps,a);case 15:return Jm(t,n,n.type,n.pendingProps,a);case 19:return o0(t,n,a);case 31:return Bx(t,n,a);case 22:return $m(t,n,a,n.pendingProps);case 24:return Ss(n),r=wn(un),t===null?(u=Pu(),u===null&&(u=We,f=Lu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:r,cache:u},zu(n),Pa(n,un,u)):((t.lanes&a)!==0&&(Bu(t,n),po(n,null,null,a),ho()),u=t.memoizedState,f=n.memoizedState,u.parent!==r?(u={parent:r,cache:r},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Pa(n,un,r)):(r=f.cache,Pa(n,un,r),r!==u.cache&&Nu(n,[un],a,!0))),Dn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function oa(t){t.flags|=4}function Sf(t,n,a,r,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(P0())t.flags|=8192;else throw Es=Tl,Fu}else t.flags&=-16777217}function c0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!bg(n))if(P0())t.flags|=8192;else throw Es=Tl,Fu}function Vl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?ve():536870912,t.lanes|=n,pr|=n)}function So(t,n){if(!Ee)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Qe(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags&65011712,r|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function Hx(t,n,a){var r=n.pendingProps;switch(Ru(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(n),null;case 1:return Qe(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),ia(un),Wt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(er(n)?oa(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,wu())),Qe(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(oa(n),f!==null?(Qe(n),c0(n,f)):(Qe(n),Sf(n,u,null,r,a))):f?f!==t.memoizedState?(oa(n),Qe(n),c0(n,f)):(Qe(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&oa(n),Qe(n),Sf(n,u,t,r,a)),null;case 27:if(ue(n),a=it.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&oa(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Qe(n),null}t=Ot.current,er(n)?Vp(n):(t=gg(u,r,a),n.stateNode=t,oa(n))}return Qe(n),null;case 5:if(ue(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&oa(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Qe(n),null}if(f=Ot.current,er(n))Vp(n);else{var v=ic(it.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?v.createElement("select",{is:r.is}):v.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?v.createElement(u,{is:r.is}):v.createElement(u)}}f[cn]=n,f[yn]=r;t:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break t;for(;v.sibling===null;){if(v.return===null||v.return===n)break t;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;t:switch(Un(f,u,r),u){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&oa(n)}}return Qe(n),Sf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&oa(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=it.current,er(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,u=Cn,u!==null)switch(u.tag){case 27:case 5:r=u.memoizedProps}t[cn]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||sg(t.nodeValue,a)),t||Oa(n,!0)}else t=ic(t).createTextNode(r),t[cn]=n,n.stateNode=t}return Qe(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(r=er(n),a!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[cn]=n}else vs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qe(n),t=!1}else a=wu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ni(n),n):(ni(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Qe(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=er(n),r!==null&&r.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[cn]=n}else vs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qe(n),u=!1}else u=wu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ni(n),n):(ni(n),null)}return ni(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=n.child,u=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(u=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==u&&(r.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Vl(n,n.updateQueue),Qe(n),null);case 4:return Wt(),t===null&&Vf(n.stateNode.containerInfo),Qe(n),null;case 10:return ia(n.type),Qe(n),null;case 19:if(tt(rn),r=n.memoizedState,r===null)return Qe(n),null;if(u=(n.flags&128)!==0,f=r.rendering,f===null)if(u)So(r,!1);else{if(nn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=wl(t),f!==null){for(n.flags|=128,So(r,!1),t=f.updateQueue,n.updateQueue=t,Vl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)zp(a,t),a=a.sibling;return Et(rn,rn.current&1|2),Ee&&ea(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&E()>Yl&&(n.flags|=128,u=!0,So(r,!1),n.lanes=4194304)}else{if(!u)if(t=wl(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Vl(n,t),So(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!Ee)return Qe(n),null}else 2*E()-r.renderingStartTime>Yl&&a!==536870912&&(n.flags|=128,u=!0,So(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(t=r.last,t!==null?t.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=E(),t.sibling=null,a=rn.current,Et(rn,u?a&1|2:a&1),Ee&&ea(n,r.treeForkCount),t):(Qe(n),null);case 22:case 23:return ni(n),Vu(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(Qe(n),n.subtreeFlags&6&&(n.flags|=8192)):Qe(n),a=n.updateQueue,a!==null&&Vl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&tt(Ms),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ia(un),Qe(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Gx(t,n){switch(Ru(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ia(un),Wt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return ue(n),null;case 31:if(n.memoizedState!==null){if(ni(n),n.alternate===null)throw Error(s(340));vs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ni(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));vs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return tt(rn),null;case 4:return Wt(),null;case 10:return ia(n.type),null;case 22:case 23:return ni(n),Vu(),t!==null&&tt(Ms),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ia(un),null;case 25:return null;default:return null}}function u0(t,n){switch(Ru(n),n.tag){case 3:ia(un),Wt();break;case 26:case 27:case 5:ue(n);break;case 4:Wt();break;case 31:n.memoizedState!==null&&ni(n);break;case 13:ni(n);break;case 19:tt(rn);break;case 10:ia(n.type);break;case 22:case 23:ni(n),Vu(),t!==null&&tt(Ms);break;case 24:ia(un)}}function Mo(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var u=r.next;a=u;do{if((a.tag&t)===t){r=void 0;var f=a.create,v=a.inst;r=f(),v.destroy=r}a=a.next}while(a!==u)}}catch(A){He(n,n.return,A)}}function Ga(t,n,a){try{var r=n.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var f=u.next;r=f;do{if((r.tag&t)===t){var v=r.inst,A=v.destroy;if(A!==void 0){v.destroy=void 0,u=n;var H=a,nt=A;try{nt()}catch(vt){He(u,H,vt)}}}r=r.next}while(r!==f)}}catch(vt){He(n,n.return,vt)}}function f0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{em(n,a)}catch(r){He(t,t.return,r)}}}function h0(t,n,a){a.props=As(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){He(t,n,r)}}function yo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(u){He(t,n,u)}}function Bi(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(u){He(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){He(t,n,u)}else a.current=null}function d0(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(u){He(t,t.return,u)}}function Mf(t,n,a){try{var r=t.stateNode;cS(r,t.type,a,n),r[yn]=n}catch(u){He(t,t.return,u)}}function p0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ja(t.type)||t.tag===4}function yf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||p0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ja(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ef(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ji));else if(r!==4&&(r===27&&ja(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Ef(t,n,a),t=t.sibling;t!==null;)Ef(t,n,a),t=t.sibling}function Xl(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(r!==4&&(r===27&&ja(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Xl(t,n,a),t=t.sibling;t!==null;)Xl(t,n,a),t=t.sibling}function m0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Un(n,r,a),n[cn]=t,n[yn]=a}catch(f){He(t,t.return,f)}}var la=!1,dn=!1,bf=!1,g0=typeof WeakSet=="function"?WeakSet:Set,xn=null;function Vx(t,n){if(t=t.containerInfo,Wf=uc,t=Cp(t),gu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var u=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var v=0,A=-1,H=-1,nt=0,vt=0,Tt=t,lt=null;e:for(;;){for(var ht;Tt!==a||u!==0&&Tt.nodeType!==3||(A=v+u),Tt!==f||r!==0&&Tt.nodeType!==3||(H=v+r),Tt.nodeType===3&&(v+=Tt.nodeValue.length),(ht=Tt.firstChild)!==null;)lt=Tt,Tt=ht;for(;;){if(Tt===t)break e;if(lt===a&&++nt===u&&(A=v),lt===f&&++vt===r&&(H=v),(ht=Tt.nextSibling)!==null)break;Tt=lt,lt=Tt.parentNode}Tt=ht}a=A===-1||H===-1?null:{start:A,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(qf={focusedElem:t,selectionRange:a},uc=!1,xn=n;xn!==null;)if(n=xn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,xn=t;else for(;xn!==null;){switch(n=xn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var jt=As(a.type,u);t=r.getSnapshotBeforeUpdate(jt,f),r.__reactInternalSnapshotBeforeUpdate=t}catch(ie){He(a,a.return,ie)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Zf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Zf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,xn=t;break}xn=n.return}}function _0(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:ua(t,a),r&4&&Mo(5,a);break;case 1:if(ua(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(v){He(a,a.return,v)}else{var u=As(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(v){He(a,a.return,v)}}r&64&&f0(a),r&512&&yo(a,a.return);break;case 3:if(ua(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{em(t,n)}catch(v){He(a,a.return,v)}}break;case 27:n===null&&r&4&&m0(a);case 26:case 5:ua(t,a),n===null&&r&4&&d0(a),r&512&&yo(a,a.return);break;case 12:ua(t,a);break;case 31:ua(t,a),r&4&&S0(t,a);break;case 13:ua(t,a),r&4&&M0(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Qx.bind(null,a),_S(t,a))));break;case 22:if(r=a.memoizedState!==null||la,!r){n=n!==null&&n.memoizedState!==null||dn,u=la;var f=dn;la=r,(dn=n)&&!f?fa(t,a,(a.subtreeFlags&8772)!==0):ua(t,a),la=u,dn=f}break;case 30:break;default:ua(t,a)}}function v0(t){var n=t.alternate;n!==null&&(t.alternate=null,v0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Zr(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var tn=null,kn=!1;function ca(t,n,a){for(a=a.child;a!==null;)x0(t,n,a),a=a.sibling}function x0(t,n,a){if(Mt&&typeof Mt.onCommitFiberUnmount=="function")try{Mt.onCommitFiberUnmount(et,a)}catch{}switch(a.tag){case 26:dn||Bi(a,n),ca(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:dn||Bi(a,n);var r=tn,u=kn;ja(a.type)&&(tn=a.stateNode,kn=!1),ca(t,n,a),Uo(a.stateNode),tn=r,kn=u;break;case 5:dn||Bi(a,n);case 6:if(r=tn,u=kn,tn=null,ca(t,n,a),tn=r,kn=u,tn!==null)if(kn)try{(tn.nodeType===9?tn.body:tn.nodeName==="HTML"?tn.ownerDocument.body:tn).removeChild(a.stateNode)}catch(f){He(a,n,f)}else try{tn.removeChild(a.stateNode)}catch(f){He(a,n,f)}break;case 18:tn!==null&&(kn?(t=tn,fg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),yr(t)):fg(tn,a.stateNode));break;case 4:r=tn,u=kn,tn=a.stateNode.containerInfo,kn=!0,ca(t,n,a),tn=r,kn=u;break;case 0:case 11:case 14:case 15:Ga(2,a,n),dn||Ga(4,a,n),ca(t,n,a);break;case 1:dn||(Bi(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&h0(a,n,r)),ca(t,n,a);break;case 21:ca(t,n,a);break;case 22:dn=(r=dn)||a.memoizedState!==null,ca(t,n,a),dn=r;break;default:ca(t,n,a)}}function S0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{yr(t)}catch(a){He(n,n.return,a)}}}function M0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{yr(t)}catch(a){He(n,n.return,a)}}function Xx(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new g0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new g0),n;default:throw Error(s(435,t.tag))}}function kl(t,n){var a=Xx(t);n.forEach(function(r){if(!a.has(r)){a.add(r);var u=Jx.bind(null,t,r);r.then(u,u)}})}function Wn(t,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r],f=t,v=n,A=v;t:for(;A!==null;){switch(A.tag){case 27:if(ja(A.type)){tn=A.stateNode,kn=!1;break t}break;case 5:tn=A.stateNode,kn=!1;break t;case 3:case 4:tn=A.stateNode.containerInfo,kn=!0;break t}A=A.return}if(tn===null)throw Error(s(160));x0(f,v,u),tn=null,kn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)y0(n,t),n=n.sibling}var Ri=null;function y0(t,n){var a=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Wn(n,t),qn(t),r&4&&(Ga(3,t,t.return),Mo(3,t),Ga(5,t,t.return));break;case 1:Wn(n,t),qn(t),r&512&&(dn||a===null||Bi(a,a.return)),r&64&&la&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var u=Ri;if(Wn(n,t),qn(t),r&512&&(dn||a===null||Bi(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=t.memoizedState,a===null)if(r===null)if(t.stateNode===null){t:{r=t.type,a=t.memoizedProps,u=u.ownerDocument||u;e:switch(r){case"title":f=u.getElementsByTagName("title")[0],(!f||f[fs]||f[cn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(r),u.head.insertBefore(f,u.querySelector("head > title"))),Un(f,r,a),f[cn]=t,R(f),r=f;break t;case"link":var v=yg("link","href",u).get(r+(a.href||""));if(v){for(var A=0;A<v.length;A++)if(f=v[A],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(A,1);break e}}f=u.createElement(r),Un(f,r,a),u.head.appendChild(f);break;case"meta":if(v=yg("meta","content",u).get(r+(a.content||""))){for(A=0;A<v.length;A++)if(f=v[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(A,1);break e}}f=u.createElement(r),Un(f,r,a),u.head.appendChild(f);break;default:throw Error(s(468,r))}f[cn]=t,R(f),r=f}t.stateNode=r}else Eg(u,t.type,t.stateNode);else t.stateNode=Mg(u,r,t.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?Eg(u,t.type,t.stateNode):Mg(u,r,t.memoizedProps)):r===null&&t.stateNode!==null&&Mf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Wn(n,t),qn(t),r&512&&(dn||a===null||Bi(a,a.return)),a!==null&&r&4&&Mf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Wn(n,t),qn(t),r&512&&(dn||a===null||Bi(a,a.return)),t.flags&32){u=t.stateNode;try{mn(u,"")}catch(jt){He(t,t.return,jt)}}r&4&&t.stateNode!=null&&(u=t.memoizedProps,Mf(t,u,a!==null?a.memoizedProps:u)),r&1024&&(bf=!0);break;case 6:if(Wn(n,t),qn(t),r&4){if(t.stateNode===null)throw Error(s(162));r=t.memoizedProps,a=t.stateNode;try{a.nodeValue=r}catch(jt){He(t,t.return,jt)}}break;case 3:if(rc=null,u=Ri,Ri=ac(n.containerInfo),Wn(n,t),Ri=u,qn(t),r&4&&a!==null&&a.memoizedState.isDehydrated)try{yr(n.containerInfo)}catch(jt){He(t,t.return,jt)}bf&&(bf=!1,E0(t));break;case 4:r=Ri,Ri=ac(t.stateNode.containerInfo),Wn(n,t),qn(t),Ri=r;break;case 12:Wn(n,t),qn(t);break;case 31:Wn(n,t),qn(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,kl(t,r)));break;case 13:Wn(n,t),qn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(ql=E()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,kl(t,r)));break;case 22:u=t.memoizedState!==null;var H=a!==null&&a.memoizedState!==null,nt=la,vt=dn;if(la=nt||u,dn=vt||H,Wn(n,t),dn=vt,la=nt,qn(t),r&8192)t:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||H||la||dn||Rs(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){H=a=n;try{if(f=H.stateNode,u)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{A=H.stateNode;var Tt=H.memoizedProps.style,lt=Tt!=null&&Tt.hasOwnProperty("display")?Tt.display:null;A.style.display=lt==null||typeof lt=="boolean"?"":(""+lt).trim()}}catch(jt){He(H,H.return,jt)}}}else if(n.tag===6){if(a===null){H=n;try{H.stateNode.nodeValue=u?"":H.memoizedProps}catch(jt){He(H,H.return,jt)}}}else if(n.tag===18){if(a===null){H=n;try{var ht=H.stateNode;u?hg(ht,!0):hg(H.stateNode,!1)}catch(jt){He(H,H.return,jt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=t.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,kl(t,a))));break;case 19:Wn(n,t),qn(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,kl(t,r)));break;case 30:break;case 21:break;default:Wn(n,t),qn(t)}}function qn(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if(p0(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=yf(t);Xl(t,f,u);break;case 5:var v=a.stateNode;a.flags&32&&(mn(v,""),a.flags&=-33);var A=yf(t);Xl(t,A,v);break;case 3:case 4:var H=a.stateNode.containerInfo,nt=yf(t);Ef(t,nt,H);break;default:throw Error(s(161))}}catch(vt){He(t,t.return,vt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function E0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;E0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ua(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)_0(t,n.alternate,n),n=n.sibling}function Rs(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ga(4,n,n.return),Rs(n);break;case 1:Bi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&h0(n,n.return,a),Rs(n);break;case 27:Uo(n.stateNode);case 26:case 5:Bi(n,n.return),Rs(n);break;case 22:n.memoizedState===null&&Rs(n);break;case 30:Rs(n);break;default:Rs(n)}t=t.sibling}}function fa(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,u=t,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:fa(u,f,a),Mo(4,f);break;case 1:if(fa(u,f,a),r=f,u=r.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(nt){He(r,r.return,nt)}if(r=f,u=r.updateQueue,u!==null){var A=r.stateNode;try{var H=u.shared.hiddenCallbacks;if(H!==null)for(u.shared.hiddenCallbacks=null,u=0;u<H.length;u++)tm(H[u],A)}catch(nt){He(r,r.return,nt)}}a&&v&64&&f0(f),yo(f,f.return);break;case 27:m0(f);case 26:case 5:fa(u,f,a),a&&r===null&&v&4&&d0(f),yo(f,f.return);break;case 12:fa(u,f,a);break;case 31:fa(u,f,a),a&&v&4&&S0(u,f);break;case 13:fa(u,f,a),a&&v&4&&M0(u,f);break;case 22:f.memoizedState===null&&fa(u,f,a),yo(f,f.return);break;case 30:break;default:fa(u,f,a)}n=n.sibling}}function Tf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&oo(a))}function Af(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&oo(t))}function Ci(t,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)b0(t,n,a,r),n=n.sibling}function b0(t,n,a,r){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ci(t,n,a,r),u&2048&&Mo(9,n);break;case 1:Ci(t,n,a,r);break;case 3:Ci(t,n,a,r),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&oo(t)));break;case 12:if(u&2048){Ci(t,n,a,r),t=n.stateNode;try{var f=n.memoizedProps,v=f.id,A=f.onPostCommit;typeof A=="function"&&A(v,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(H){He(n,n.return,H)}}else Ci(t,n,a,r);break;case 31:Ci(t,n,a,r);break;case 13:Ci(t,n,a,r);break;case 23:break;case 22:f=n.stateNode,v=n.alternate,n.memoizedState!==null?f._visibility&2?Ci(t,n,a,r):Eo(t,n):f._visibility&2?Ci(t,n,a,r):(f._visibility|=2,fr(t,n,a,r,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Tf(v,n);break;case 24:Ci(t,n,a,r),u&2048&&Af(n.alternate,n);break;default:Ci(t,n,a,r)}}function fr(t,n,a,r,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,v=n,A=a,H=r,nt=v.flags;switch(v.tag){case 0:case 11:case 15:fr(f,v,A,H,u),Mo(8,v);break;case 23:break;case 22:var vt=v.stateNode;v.memoizedState!==null?vt._visibility&2?fr(f,v,A,H,u):Eo(f,v):(vt._visibility|=2,fr(f,v,A,H,u)),u&&nt&2048&&Tf(v.alternate,v);break;case 24:fr(f,v,A,H,u),u&&nt&2048&&Af(v.alternate,v);break;default:fr(f,v,A,H,u)}n=n.sibling}}function Eo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,u=r.flags;switch(r.tag){case 22:Eo(a,r),u&2048&&Tf(r.alternate,r);break;case 24:Eo(a,r),u&2048&&Af(r.alternate,r);break;default:Eo(a,r)}n=n.sibling}}var bo=8192;function hr(t,n,a){if(t.subtreeFlags&bo)for(t=t.child;t!==null;)T0(t,n,a),t=t.sibling}function T0(t,n,a){switch(t.tag){case 26:hr(t,n,a),t.flags&bo&&t.memoizedState!==null&&wS(a,Ri,t.memoizedState,t.memoizedProps);break;case 5:hr(t,n,a);break;case 3:case 4:var r=Ri;Ri=ac(t.stateNode.containerInfo),hr(t,n,a),Ri=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=bo,bo=16777216,hr(t,n,a),bo=r):hr(t,n,a));break;default:hr(t,n,a)}}function A0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function To(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];xn=r,C0(r,t)}A0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)R0(t),t=t.sibling}function R0(t){switch(t.tag){case 0:case 11:case 15:To(t),t.flags&2048&&Ga(9,t,t.return);break;case 3:To(t);break;case 12:To(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Wl(t)):To(t);break;default:To(t)}}function Wl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];xn=r,C0(r,t)}A0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ga(8,n,n.return),Wl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Wl(n));break;default:Wl(n)}t=t.sibling}}function C0(t,n){for(;xn!==null;){var a=xn;switch(a.tag){case 0:case 11:case 15:Ga(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:oo(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,xn=r;else t:for(a=t;xn!==null;){r=xn;var u=r.sibling,f=r.return;if(v0(r),r===a){xn=null;break t}if(u!==null){u.return=f,xn=u;break t}xn=f}}}var kx={getCacheForType:function(t){var n=wn(un),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return wn(un).controller.signal}},Wx=typeof WeakMap=="function"?WeakMap:Map,Fe=0,We=null,xe=null,Me=0,Ie=0,ii=null,Va=!1,dr=!1,Rf=!1,ha=0,nn=0,Xa=0,Cs=0,Cf=0,ai=0,pr=0,Ao=null,Yn=null,wf=!1,ql=0,w0=0,Yl=1/0,jl=null,ka=null,gn=0,Wa=null,mr=null,da=0,Df=0,Uf=null,D0=null,Ro=0,Nf=null;function si(){return(Fe&2)!==0&&Me!==0?Me&-Me:P.T!==null?Bf():us()}function U0(){if(ai===0)if((Me&536870912)===0||Ee){var t=bt;bt<<=1,(bt&3932160)===0&&(bt=262144),ai=t}else ai=536870912;return t=ei.current,t!==null&&(t.flags|=32),ai}function jn(t,n,a){(t===We&&(Ie===2||Ie===9)||t.cancelPendingCommit!==null)&&(gr(t,0),qa(t,Me,ai,!1)),ln(t,a),((Fe&2)===0||t!==We)&&(t===We&&((Fe&2)===0&&(Cs|=a),nn===4&&qa(t,Me,ai,!1)),Ii(t))}function N0(t,n,a){if((Fe&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Nt(t,n),u=r?jx(t,n):Of(t,n,!0),f=r;do{if(u===0){dr&&!r&&qa(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!qx(a)){u=Of(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var v=0;else v=t.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;t:{var A=t;u=Ao;var H=A.current.memoizedState.isDehydrated;if(H&&(gr(A,v).flags|=256),v=Of(A,v,!1),v!==2){if(Rf&&!H){A.errorRecoveryDisabledLanes|=f,Cs|=f,u=4;break t}f=Yn,Yn=u,f!==null&&(Yn===null?Yn=f:Yn.push.apply(Yn,f))}u=v}if(f=!1,u!==2)continue}}if(u===1){gr(t,0),qa(t,n,0,!0);break}t:{switch(r=t,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:qa(r,n,ai,!Va);break t;case 2:Yn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=ql+300-E(),10<u)){if(qa(r,n,ai,!Va),gt(r,0,!0)!==0)break t;da=n,r.timeoutHandle=cg(L0.bind(null,r,a,Yn,jl,wf,n,ai,Cs,pr,Va,f,"Throttled",-0,0),u);break t}L0(r,a,Yn,jl,wf,n,ai,Cs,pr,Va,f,null,-0,0)}}break}while(!0);Ii(t)}function L0(t,n,a,r,u,f,v,A,H,nt,vt,Tt,lt,ht){if(t.timeoutHandle=-1,Tt=n.subtreeFlags,Tt&8192||(Tt&16785408)===16785408){Tt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ji},T0(n,f,Tt);var jt=(f&62914560)===f?ql-E():(f&4194048)===f?w0-E():0;if(jt=DS(Tt,jt),jt!==null){da=f,t.cancelPendingCommit=jt(G0.bind(null,t,n,f,a,r,u,v,A,H,vt,Tt,null,lt,ht)),qa(t,f,v,!nt);return}}G0(t,n,f,a,r,u,v,A,H)}function qx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var u=a[r],f=u.getSnapshot;u=u.value;try{if(!$n(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function qa(t,n,a,r){n&=~Cf,n&=~Cs,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var u=n;0<u;){var f=31-Dt(u),v=1<<f;r[f]=-1,u&=~v}a!==0&&Ki(t,a,n)}function Zl(){return(Fe&6)===0?(Co(0),!1):!0}function Lf(){if(xe!==null){if(Ie===0)var t=xe.return;else t=xe,na=xs=null,ju(t),rr=null,co=0,t=xe;for(;t!==null;)u0(t.alternate,t),t=t.return;xe=null}}function gr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,hS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),da=0,Lf(),We=t,xe=a=ta(t.current,null),Me=n,Ie=0,ii=null,Va=!1,dr=Nt(t,n),Rf=!1,pr=ai=Cf=Cs=Xa=nn=0,Yn=Ao=null,wf=!1,(n&8)!==0&&(n|=n&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=n;0<r;){var u=31-Dt(r),f=1<<u;n|=t[u],r&=~f}return ha=n,gl(),a}function O0(t,n){ce=null,P.H=vo,n===sr||n===bl?(n=Kp(),Ie=3):n===Fu?(n=Kp(),Ie=4):Ie=n===ff?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ii=n,xe===null&&(nn=1,Bl(t,pi(n,t.current)))}function P0(){var t=ei.current;return t===null?!0:(Me&4194048)===Me?vi===null:(Me&62914560)===Me||(Me&536870912)!==0?t===vi:!1}function F0(){var t=P.H;return P.H=vo,t===null?vo:t}function z0(){var t=P.A;return P.A=kx,t}function Kl(){nn=4,Va||(Me&4194048)!==Me&&ei.current!==null||(dr=!0),(Xa&134217727)===0&&(Cs&134217727)===0||We===null||qa(We,Me,ai,!1)}function Of(t,n,a){var r=Fe;Fe|=2;var u=F0(),f=z0();(We!==t||Me!==n)&&(jl=null,gr(t,n)),n=!1;var v=nn;t:do try{if(Ie!==0&&xe!==null){var A=xe,H=ii;switch(Ie){case 8:Lf(),v=6;break t;case 3:case 2:case 9:case 6:ei.current===null&&(n=!0);var nt=Ie;if(Ie=0,ii=null,_r(t,A,H,nt),a&&dr){v=0;break t}break;default:nt=Ie,Ie=0,ii=null,_r(t,A,H,nt)}}Yx(),v=nn;break}catch(vt){O0(t,vt)}while(!0);return n&&t.shellSuspendCounter++,na=xs=null,Fe=r,P.H=u,P.A=f,xe===null&&(We=null,Me=0,gl()),v}function Yx(){for(;xe!==null;)B0(xe)}function jx(t,n){var a=Fe;Fe|=2;var r=F0(),u=z0();We!==t||Me!==n?(jl=null,Yl=E()+500,gr(t,n)):dr=Nt(t,n);t:do try{if(Ie!==0&&xe!==null){n=xe;var f=ii;e:switch(Ie){case 1:Ie=0,ii=null,_r(t,n,f,1);break;case 2:case 9:if(jp(f)){Ie=0,ii=null,I0(n);break}n=function(){Ie!==2&&Ie!==9||We!==t||(Ie=7),Ii(t)},f.then(n,n);break t;case 3:Ie=7;break t;case 4:Ie=5;break t;case 7:jp(f)?(Ie=0,ii=null,I0(n)):(Ie=0,ii=null,_r(t,n,f,7));break;case 5:var v=null;switch(xe.tag){case 26:v=xe.memoizedState;case 5:case 27:var A=xe;if(v?bg(v):A.stateNode.complete){Ie=0,ii=null;var H=A.sibling;if(H!==null)xe=H;else{var nt=A.return;nt!==null?(xe=nt,Ql(nt)):xe=null}break e}}Ie=0,ii=null,_r(t,n,f,5);break;case 6:Ie=0,ii=null,_r(t,n,f,6);break;case 8:Lf(),nn=6;break t;default:throw Error(s(462))}}Zx();break}catch(vt){O0(t,vt)}while(!0);return na=xs=null,P.H=r,P.A=u,Fe=a,xe!==null?0:(We=null,Me=0,gl(),nn)}function Zx(){for(;xe!==null&&!qt();)B0(xe)}function B0(t){var n=l0(t.alternate,t,ha);t.memoizedProps=t.pendingProps,n===null?Ql(t):xe=n}function I0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=n0(a,n,n.pendingProps,n.type,void 0,Me);break;case 11:n=n0(a,n,n.pendingProps,n.type.render,n.ref,Me);break;case 5:ju(n);default:u0(a,n),n=xe=zp(n,ha),n=l0(a,n,ha)}t.memoizedProps=t.pendingProps,n===null?Ql(t):xe=n}function _r(t,n,a,r){na=xs=null,ju(n),rr=null,co=0;var u=n.return;try{if(zx(t,u,n,a,Me)){nn=1,Bl(t,pi(a,t.current)),xe=null;return}}catch(f){if(u!==null)throw xe=u,f;nn=1,Bl(t,pi(a,t.current)),xe=null;return}n.flags&32768?(Ee||r===1?t=!0:dr||(Me&536870912)!==0?t=!1:(Va=t=!0,(r===2||r===9||r===3||r===6)&&(r=ei.current,r!==null&&r.tag===13&&(r.flags|=16384))),H0(n,t)):Ql(n)}function Ql(t){var n=t;do{if((n.flags&32768)!==0){H0(n,Va);return}t=n.return;var a=Hx(n.alternate,n,ha);if(a!==null){xe=a;return}if(n=n.sibling,n!==null){xe=n;return}xe=n=t}while(n!==null);nn===0&&(nn=5)}function H0(t,n){do{var a=Gx(t.alternate,t);if(a!==null){a.flags&=32767,xe=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){xe=t;return}xe=t=a}while(t!==null);nn=6,xe=null}function G0(t,n,a,r,u,f,v,A,H){t.cancelPendingCommit=null;do Jl();while(gn!==0);if((Fe&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Mu,Bn(t,a,f,v,A,H),t===We&&(xe=We=null,Me=0),mr=n,Wa=t,da=a,Df=f,Uf=u,D0=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,$x(mt,function(){return q0(),null})):(t.callbackNode=null,t.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=P.T,P.T=null,u=I.p,I.p=2,v=Fe,Fe|=4;try{Vx(t,n,a)}finally{Fe=v,I.p=u,P.T=r}}gn=1,V0(),X0(),k0()}}function V0(){if(gn===1){gn=0;var t=Wa,n=mr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var r=I.p;I.p=2;var u=Fe;Fe|=4;try{y0(n,t);var f=qf,v=Cp(t.containerInfo),A=f.focusedElem,H=f.selectionRange;if(v!==A&&A&&A.ownerDocument&&Rp(A.ownerDocument.documentElement,A)){if(H!==null&&gu(A)){var nt=H.start,vt=H.end;if(vt===void 0&&(vt=nt),"selectionStart"in A)A.selectionStart=nt,A.selectionEnd=Math.min(vt,A.value.length);else{var Tt=A.ownerDocument||document,lt=Tt&&Tt.defaultView||window;if(lt.getSelection){var ht=lt.getSelection(),jt=A.textContent.length,ie=Math.min(H.start,jt),ke=H.end===void 0?ie:Math.min(H.end,jt);!ht.extend&&ie>ke&&(v=ke,ke=ie,ie=v);var Z=Ap(A,ie),k=Ap(A,ke);if(Z&&k&&(ht.rangeCount!==1||ht.anchorNode!==Z.node||ht.anchorOffset!==Z.offset||ht.focusNode!==k.node||ht.focusOffset!==k.offset)){var $=Tt.createRange();$.setStart(Z.node,Z.offset),ht.removeAllRanges(),ie>ke?(ht.addRange($),ht.extend(k.node,k.offset)):($.setEnd(k.node,k.offset),ht.addRange($))}}}}for(Tt=[],ht=A;ht=ht.parentNode;)ht.nodeType===1&&Tt.push({element:ht,left:ht.scrollLeft,top:ht.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<Tt.length;A++){var yt=Tt[A];yt.element.scrollLeft=yt.left,yt.element.scrollTop=yt.top}}uc=!!Wf,qf=Wf=null}finally{Fe=u,I.p=r,P.T=a}}t.current=n,gn=2}}function X0(){if(gn===2){gn=0;var t=Wa,n=mr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var r=I.p;I.p=2;var u=Fe;Fe|=4;try{_0(t,n.alternate,n)}finally{Fe=u,I.p=r,P.T=a}}gn=3}}function k0(){if(gn===4||gn===3){gn=0,U();var t=Wa,n=mr,a=da,r=D0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?gn=5:(gn=0,mr=Wa=null,W0(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(ka=null),Ra(a),n=n.stateNode,Mt&&typeof Mt.onCommitFiberRoot=="function")try{Mt.onCommitFiberRoot(et,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=P.T,u=I.p,I.p=2,P.T=null;try{for(var f=t.onRecoverableError,v=0;v<r.length;v++){var A=r[v];f(A.value,{componentStack:A.stack})}}finally{P.T=n,I.p=u}}(da&3)!==0&&Jl(),Ii(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Nf?Ro++:(Ro=0,Nf=t):Ro=0,Co(0)}}function W0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,oo(n)))}function Jl(){return V0(),X0(),k0(),q0()}function q0(){if(gn!==5)return!1;var t=Wa,n=Df;Df=0;var a=Ra(da),r=P.T,u=I.p;try{I.p=32>a?32:a,P.T=null,a=Uf,Uf=null;var f=Wa,v=da;if(gn=0,mr=Wa=null,da=0,(Fe&6)!==0)throw Error(s(331));var A=Fe;if(Fe|=4,R0(f.current),b0(f,f.current,v,a),Fe=A,Co(0,!1),Mt&&typeof Mt.onPostCommitFiberRoot=="function")try{Mt.onPostCommitFiberRoot(et,f)}catch{}return!0}finally{I.p=u,P.T=r,W0(t,n)}}function Y0(t,n,a){n=pi(a,n),n=uf(t.stateNode,n,2),t=Ba(t,n,2),t!==null&&(ln(t,2),Ii(t))}function He(t,n,a){if(t.tag===3)Y0(t,t,a);else for(;n!==null;){if(n.tag===3){Y0(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ka===null||!ka.has(r))){t=pi(a,t),a=jm(2),r=Ba(n,a,2),r!==null&&(Zm(a,r,n,t),ln(r,2),Ii(r));break}}n=n.return}}function Pf(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new Wx;var u=new Set;r.set(n,u)}else u=r.get(n),u===void 0&&(u=new Set,r.set(n,u));u.has(a)||(Rf=!0,u.add(a),t=Kx.bind(null,t,n,a),n.then(t,t))}function Kx(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,We===t&&(Me&a)===a&&(nn===4||nn===3&&(Me&62914560)===Me&&300>E()-ql?(Fe&2)===0&&gr(t,0):Cf|=a,pr===Me&&(pr=0)),Ii(t)}function j0(t,n){n===0&&(n=ve()),t=gs(t,n),t!==null&&(ln(t,n),Ii(t))}function Qx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),j0(t,a)}function Jx(t,n){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),j0(t,a)}function $x(t,n){return _e(t,n)}var $l=null,vr=null,Ff=!1,tc=!1,zf=!1,Ya=0;function Ii(t){t!==vr&&t.next===null&&(vr===null?$l=vr=t:vr=vr.next=t),tc=!0,Ff||(Ff=!0,eS())}function Co(t,n){if(!zf&&tc){zf=!0;do for(var a=!1,r=$l;r!==null;){if(t!==0){var u=r.pendingLanes;if(u===0)var f=0;else{var v=r.suspendedLanes,A=r.pingedLanes;f=(1<<31-Dt(42|t)+1)-1,f&=u&~(v&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,J0(r,f))}else f=Me,f=gt(r,r===We?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||Nt(r,f)||(a=!0,J0(r,f));r=r.next}while(a);zf=!1}}function tS(){Z0()}function Z0(){tc=Ff=!1;var t=0;Ya!==0&&fS()&&(t=Ya);for(var n=E(),a=null,r=$l;r!==null;){var u=r.next,f=K0(r,n);f===0?(r.next=null,a===null?$l=u:a.next=u,u===null&&(vr=a)):(a=r,(t!==0||(f&3)!==0)&&(tc=!0)),r=u}gn!==0&&gn!==5||Co(t),Ya!==0&&(Ya=0)}function K0(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var v=31-Dt(f),A=1<<v,H=u[v];H===-1?((A&a)===0||(A&r)!==0)&&(u[v]=Jt(A,n)):H<=n&&(t.expiredLanes|=A),f&=~A}if(n=We,a=Me,a=gt(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(Ie===2||Ie===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&Ce(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Nt(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&Ce(r),Ra(a)){case 2:case 8:a=At;break;case 32:a=mt;break;case 268435456:a=st;break;default:a=mt}return r=Q0.bind(null,t),a=_e(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&Ce(r),t.callbackPriority=2,t.callbackNode=null,2}function Q0(t,n){if(gn!==0&&gn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Jl()&&t.callbackNode!==a)return null;var r=Me;return r=gt(t,t===We?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(N0(t,r,n),K0(t,E()),t.callbackNode!=null&&t.callbackNode===a?Q0.bind(null,t):null)}function J0(t,n){if(Jl())return null;N0(t,n,!0)}function eS(){dS(function(){(Fe&6)!==0?_e(xt,tS):Z0()})}function Bf(){if(Ya===0){var t=ir;t===0&&(t=wt,wt<<=1,(wt&261888)===0&&(wt=256)),Ya=t}return Ya}function $0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ll(""+t)}function tg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function nS(t,n,a,r,u){if(n==="submit"&&a&&a.stateNode===u){var f=$0((u[yn]||null).action),v=r.submitter;v&&(n=(n=v[yn]||null)?$0(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var A=new hl("action","action",null,r,u);t.push({event:A,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Ya!==0){var H=v?tg(u,v):new FormData(u);af(a,{pending:!0,data:H,method:u.method,action:f},null,H)}}else typeof f=="function"&&(A.preventDefault(),H=v?tg(u,v):new FormData(u),af(a,{pending:!0,data:H,method:u.method,action:f},f,H))},currentTarget:u}]})}}for(var If=0;If<Su.length;If++){var Hf=Su[If],iS=Hf.toLowerCase(),aS=Hf[0].toUpperCase()+Hf.slice(1);Ai(iS,"on"+aS)}Ai(Up,"onAnimationEnd"),Ai(Np,"onAnimationIteration"),Ai(Lp,"onAnimationStart"),Ai("dblclick","onDoubleClick"),Ai("focusin","onFocus"),Ai("focusout","onBlur"),Ai(Sx,"onTransitionRun"),Ai(Mx,"onTransitionStart"),Ai(yx,"onTransitionCancel"),Ai(Op,"onTransitionEnd"),K("onMouseEnter",["mouseout","mouseover"]),K("onMouseLeave",["mouseout","mouseover"]),K("onPointerEnter",["pointerout","pointerover"]),K("onPointerLeave",["pointerout","pointerover"]),ot("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ot("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ot("onBeforeInput",["compositionend","keypress","textInput","paste"]),ot("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ot("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ot("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(wo));function eg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],u=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var v=r.length-1;0<=v;v--){var A=r[v],H=A.instance,nt=A.currentTarget;if(A=A.listener,H!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=nt;try{f(u)}catch(vt){ml(vt)}u.currentTarget=null,f=H}else for(v=0;v<r.length;v++){if(A=r[v],H=A.instance,nt=A.currentTarget,A=A.listener,H!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=nt;try{f(u)}catch(vt){ml(vt)}u.currentTarget=null,f=H}}}}function Se(t,n){var a=n[Xs];a===void 0&&(a=n[Xs]=new Set);var r=t+"__bubble";a.has(r)||(ng(n,t,2,!1),a.add(r))}function Gf(t,n,a){var r=0;n&&(r|=4),ng(a,t,r,n)}var ec="_reactListening"+Math.random().toString(36).slice(2);function Vf(t){if(!t[ec]){t[ec]=!0,Y.forEach(function(a){a!=="selectionchange"&&(sS.has(a)||Gf(a,!1,t),Gf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[ec]||(n[ec]=!0,Gf("selectionchange",!1,n))}}function ng(t,n,a,r){switch(Ug(n)){case 2:var u=LS;break;case 8:u=OS;break;default:u=ih}a=u.bind(null,n,a,t),u=void 0,!ou||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),r?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Xf(t,n,a,r,u){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var v=r.tag;if(v===3||v===4){var A=r.stateNode.containerInfo;if(A===u)break;if(v===4)for(v=r.return;v!==null;){var H=v.tag;if((H===3||H===4)&&v.stateNode.containerInfo===u)return;v=v.return}for(;A!==null;){if(v=Ca(A),v===null)return;if(H=v.tag,H===5||H===6||H===26||H===27){r=f=v;continue t}A=A.parentNode}}r=r.return}op(function(){var nt=f,vt=su(a),Tt=[];t:{var lt=Pp.get(t);if(lt!==void 0){var ht=hl,jt=t;switch(t){case"keypress":if(ul(a)===0)break t;case"keydown":case"keyup":ht=Jv;break;case"focusin":jt="focus",ht=fu;break;case"focusout":jt="blur",ht=fu;break;case"beforeblur":case"afterblur":ht=fu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ht=up;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ht=Hv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ht=ex;break;case Up:case Np:case Lp:ht=Xv;break;case Op:ht=ix;break;case"scroll":case"scrollend":ht=Bv;break;case"wheel":ht=sx;break;case"copy":case"cut":case"paste":ht=Wv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ht=hp;break;case"toggle":case"beforetoggle":ht=ox}var ie=(n&4)!==0,ke=!ie&&(t==="scroll"||t==="scrollend"),Z=ie?lt!==null?lt+"Capture":null:lt;ie=[];for(var k=nt,$;k!==null;){var yt=k;if($=yt.stateNode,yt=yt.tag,yt!==5&&yt!==26&&yt!==27||$===null||Z===null||(yt=Kr(k,Z),yt!=null&&ie.push(Do(k,yt,$))),ke)break;k=k.return}0<ie.length&&(lt=new ht(lt,jt,null,a,vt),Tt.push({event:lt,listeners:ie}))}}if((n&7)===0){t:{if(lt=t==="mouseover"||t==="pointerover",ht=t==="mouseout"||t==="pointerout",lt&&a!==au&&(jt=a.relatedTarget||a.fromElement)&&(Ca(jt)||jt[bi]))break t;if((ht||lt)&&(lt=vt.window===vt?vt:(lt=vt.ownerDocument)?lt.defaultView||lt.parentWindow:window,ht?(jt=a.relatedTarget||a.toElement,ht=nt,jt=jt?Ca(jt):null,jt!==null&&(ke=c(jt),ie=jt.tag,jt!==ke||ie!==5&&ie!==27&&ie!==6)&&(jt=null)):(ht=null,jt=nt),ht!==jt)){if(ie=up,yt="onMouseLeave",Z="onMouseEnter",k="mouse",(t==="pointerout"||t==="pointerover")&&(ie=hp,yt="onPointerLeave",Z="onPointerEnter",k="pointer"),ke=ht==null?lt:hs(ht),$=jt==null?lt:hs(jt),lt=new ie(yt,k+"leave",ht,a,vt),lt.target=ke,lt.relatedTarget=$,yt=null,Ca(vt)===nt&&(ie=new ie(Z,k+"enter",jt,a,vt),ie.target=$,ie.relatedTarget=ke,yt=ie),ke=yt,ht&&jt)e:{for(ie=rS,Z=ht,k=jt,$=0,yt=Z;yt;yt=ie(yt))$++;yt=0;for(var te=k;te;te=ie(te))yt++;for(;0<$-yt;)Z=ie(Z),$--;for(;0<yt-$;)k=ie(k),yt--;for(;$--;){if(Z===k||k!==null&&Z===k.alternate){ie=Z;break e}Z=ie(Z),k=ie(k)}ie=null}else ie=null;ht!==null&&ig(Tt,lt,ht,ie,!1),jt!==null&&ke!==null&&ig(Tt,ke,jt,ie,!0)}}t:{if(lt=nt?hs(nt):window,ht=lt.nodeName&&lt.nodeName.toLowerCase(),ht==="select"||ht==="input"&&lt.type==="file")var Ne=Sp;else if(vp(lt))if(Mp)Ne=_x;else{Ne=mx;var Qt=px}else ht=lt.nodeName,!ht||ht.toLowerCase()!=="input"||lt.type!=="checkbox"&&lt.type!=="radio"?nt&&Ti(nt.elementType)&&(Ne=Sp):Ne=gx;if(Ne&&(Ne=Ne(t,nt))){xp(Tt,Ne,a,vt);break t}Qt&&Qt(t,lt,nt),t==="focusout"&&nt&&lt.type==="number"&&nt.memoizedProps.value!=null&&bn(lt,"number",lt.value)}switch(Qt=nt?hs(nt):window,t){case"focusin":(vp(Qt)||Qt.contentEditable==="true")&&(Zs=Qt,_u=nt,ao=null);break;case"focusout":ao=_u=Zs=null;break;case"mousedown":vu=!0;break;case"contextmenu":case"mouseup":case"dragend":vu=!1,wp(Tt,a,vt);break;case"selectionchange":if(xx)break;case"keydown":case"keyup":wp(Tt,a,vt)}var fe;if(du)t:{switch(t){case"compositionstart":var ye="onCompositionStart";break t;case"compositionend":ye="onCompositionEnd";break t;case"compositionupdate":ye="onCompositionUpdate";break t}ye=void 0}else js?gp(t,a)&&(ye="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ye="onCompositionStart");ye&&(dp&&a.locale!=="ko"&&(js||ye!=="onCompositionStart"?ye==="onCompositionEnd"&&js&&(fe=lp()):(Ua=vt,lu="value"in Ua?Ua.value:Ua.textContent,js=!0)),Qt=nc(nt,ye),0<Qt.length&&(ye=new fp(ye,t,null,a,vt),Tt.push({event:ye,listeners:Qt}),fe?ye.data=fe:(fe=_p(a),fe!==null&&(ye.data=fe)))),(fe=cx?ux(t,a):fx(t,a))&&(ye=nc(nt,"onBeforeInput"),0<ye.length&&(Qt=new fp("onBeforeInput","beforeinput",null,a,vt),Tt.push({event:Qt,listeners:ye}),Qt.data=fe)),nS(Tt,t,nt,a,vt)}eg(Tt,n)})}function Do(t,n,a){return{instance:t,listener:n,currentTarget:a}}function nc(t,n){for(var a=n+"Capture",r=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Kr(t,a),u!=null&&r.unshift(Do(t,u,f)),u=Kr(t,n),u!=null&&r.push(Do(t,u,f))),t.tag===3)return r;t=t.return}return[]}function rS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function ig(t,n,a,r,u){for(var f=n._reactName,v=[];a!==null&&a!==r;){var A=a,H=A.alternate,nt=A.stateNode;if(A=A.tag,H!==null&&H===r)break;A!==5&&A!==26&&A!==27||nt===null||(H=nt,u?(nt=Kr(a,f),nt!=null&&v.unshift(Do(a,nt,H))):u||(nt=Kr(a,f),nt!=null&&v.push(Do(a,nt,H)))),a=a.return}v.length!==0&&t.push({event:n,listeners:v})}var oS=/\r\n?/g,lS=/\u0000|\uFFFD/g;function ag(t){return(typeof t=="string"?t:""+t).replace(oS,`
`).replace(lS,"")}function sg(t,n){return n=ag(n),ag(t)===n}function Xe(t,n,a,r,u,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||mn(t,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&mn(t,""+r);break;case"className":ee(t,"class",r);break;case"tabIndex":ee(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":ee(t,a,r);break;case"style":Ws(t,r,f);break;case"data":if(n!=="object"){ee(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=ll(""+r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Xe(t,n,"name",u.name,u,null),Xe(t,n,"formEncType",u.formEncType,u,null),Xe(t,n,"formMethod",u.formMethod,u,null),Xe(t,n,"formTarget",u.formTarget,u,null)):(Xe(t,n,"encType",u.encType,u,null),Xe(t,n,"method",u.method,u,null),Xe(t,n,"target",u.target,u,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=ll(""+r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=Ji);break;case"onScroll":r!=null&&Se("scroll",t);break;case"onScrollEnd":r!=null&&Se("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=ll(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""+r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":Se("beforetoggle",t),Se("toggle",t),Zt(t,"popover",r);break;case"xlinkActuate":Kt(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Kt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Kt(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Kt(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Kt(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Kt(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Kt(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Kt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Kt(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Zt(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Fv.get(a)||a,Zt(t,a,r))}}function kf(t,n,a,r,u,f){switch(a){case"style":Ws(t,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof r=="string"?mn(t,r):(typeof r=="number"||typeof r=="bigint")&&mn(t,""+r);break;case"onScroll":r!=null&&Se("scroll",t);break;case"onScrollEnd":r!=null&&Se("scrollend",t);break;case"onClick":r!=null&&(t.onclick=Ji);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ft.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[yn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof r=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,r,u);break t}a in t?t[a]=r:r===!0?t.setAttribute(a,""):Zt(t,a,r)}}}function Un(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Se("error",t),Se("load",t);var r=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":r=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xe(t,n,f,v,a,null)}}u&&Xe(t,n,"srcSet",a.srcSet,a,null),r&&Xe(t,n,"src",a.src,a,null);return;case"input":Se("invalid",t);var A=f=v=u=null,H=null,nt=null;for(r in a)if(a.hasOwnProperty(r)){var vt=a[r];if(vt!=null)switch(r){case"name":u=vt;break;case"type":v=vt;break;case"checked":H=vt;break;case"defaultChecked":nt=vt;break;case"value":f=vt;break;case"defaultValue":A=vt;break;case"children":case"dangerouslySetInnerHTML":if(vt!=null)throw Error(s(137,n));break;default:Xe(t,n,r,vt,a,null)}}Qi(t,f,A,H,nt,v,u,!1);return;case"select":Se("invalid",t),r=v=f=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":f=A;break;case"defaultValue":v=A;break;case"multiple":r=A;default:Xe(t,n,u,A,a,null)}n=f,a=v,t.multiple=!!r,n!=null?hi(t,!!r,n,!1):a!=null&&hi(t,!!r,a,!0);return;case"textarea":Se("invalid",t),f=u=r=null;for(v in a)if(a.hasOwnProperty(v)&&(A=a[v],A!=null))switch(v){case"value":r=A;break;case"defaultValue":u=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:Xe(t,n,v,A,a,null)}Tn(t,r,u,f);return;case"option":for(H in a)if(a.hasOwnProperty(H)&&(r=a[H],r!=null))switch(H){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Xe(t,n,H,r,a,null)}return;case"dialog":Se("beforetoggle",t),Se("toggle",t),Se("cancel",t),Se("close",t);break;case"iframe":case"object":Se("load",t);break;case"video":case"audio":for(r=0;r<wo.length;r++)Se(wo[r],t);break;case"image":Se("error",t),Se("load",t);break;case"details":Se("toggle",t);break;case"embed":case"source":case"link":Se("error",t),Se("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(nt in a)if(a.hasOwnProperty(nt)&&(r=a[nt],r!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xe(t,n,nt,r,a,null)}return;default:if(Ti(n)){for(vt in a)a.hasOwnProperty(vt)&&(r=a[vt],r!==void 0&&kf(t,n,vt,r,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(r=a[A],r!=null&&Xe(t,n,A,r,a,null))}function cS(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,v=null,A=null,H=null,nt=null,vt=null;for(ht in a){var Tt=a[ht];if(a.hasOwnProperty(ht)&&Tt!=null)switch(ht){case"checked":break;case"value":break;case"defaultValue":H=Tt;default:r.hasOwnProperty(ht)||Xe(t,n,ht,null,r,Tt)}}for(var lt in r){var ht=r[lt];if(Tt=a[lt],r.hasOwnProperty(lt)&&(ht!=null||Tt!=null))switch(lt){case"type":f=ht;break;case"name":u=ht;break;case"checked":nt=ht;break;case"defaultChecked":vt=ht;break;case"value":v=ht;break;case"defaultValue":A=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(s(137,n));break;default:ht!==Tt&&Xe(t,n,lt,ht,r,Tt)}}En(t,v,A,H,nt,vt,f,u);return;case"select":ht=v=A=lt=null;for(f in a)if(H=a[f],a.hasOwnProperty(f)&&H!=null)switch(f){case"value":break;case"multiple":ht=H;default:r.hasOwnProperty(f)||Xe(t,n,f,null,r,H)}for(u in r)if(f=r[u],H=a[u],r.hasOwnProperty(u)&&(f!=null||H!=null))switch(u){case"value":lt=f;break;case"defaultValue":A=f;break;case"multiple":v=f;default:f!==H&&Xe(t,n,u,f,r,H)}n=A,a=v,r=ht,lt!=null?hi(t,!!a,lt,!1):!!r!=!!a&&(n!=null?hi(t,!!a,n,!0):hi(t,!!a,a?[]:"",!1));return;case"textarea":ht=lt=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!r.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Xe(t,n,A,null,r,u)}for(v in r)if(u=r[v],f=a[v],r.hasOwnProperty(v)&&(u!=null||f!=null))switch(v){case"value":lt=u;break;case"defaultValue":ht=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Xe(t,n,v,u,r,f)}Be(t,lt,ht);return;case"option":for(var jt in a)if(lt=a[jt],a.hasOwnProperty(jt)&&lt!=null&&!r.hasOwnProperty(jt))switch(jt){case"selected":t.selected=!1;break;default:Xe(t,n,jt,null,r,lt)}for(H in r)if(lt=r[H],ht=a[H],r.hasOwnProperty(H)&&lt!==ht&&(lt!=null||ht!=null))switch(H){case"selected":t.selected=lt&&typeof lt!="function"&&typeof lt!="symbol";break;default:Xe(t,n,H,lt,r,ht)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ie in a)lt=a[ie],a.hasOwnProperty(ie)&&lt!=null&&!r.hasOwnProperty(ie)&&Xe(t,n,ie,null,r,lt);for(nt in r)if(lt=r[nt],ht=a[nt],r.hasOwnProperty(nt)&&lt!==ht&&(lt!=null||ht!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(s(137,n));break;default:Xe(t,n,nt,lt,r,ht)}return;default:if(Ti(n)){for(var ke in a)lt=a[ke],a.hasOwnProperty(ke)&&lt!==void 0&&!r.hasOwnProperty(ke)&&kf(t,n,ke,void 0,r,lt);for(vt in r)lt=r[vt],ht=a[vt],!r.hasOwnProperty(vt)||lt===ht||lt===void 0&&ht===void 0||kf(t,n,vt,lt,r,ht);return}}for(var Z in a)lt=a[Z],a.hasOwnProperty(Z)&&lt!=null&&!r.hasOwnProperty(Z)&&Xe(t,n,Z,null,r,lt);for(Tt in r)lt=r[Tt],ht=a[Tt],!r.hasOwnProperty(Tt)||lt===ht||lt==null&&ht==null||Xe(t,n,Tt,lt,r,ht)}function rg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function uS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var u=a[r],f=u.transferSize,v=u.initiatorType,A=u.duration;if(f&&A&&rg(v)){for(v=0,A=u.responseEnd,r+=1;r<a.length;r++){var H=a[r],nt=H.startTime;if(nt>A)break;var vt=H.transferSize,Tt=H.initiatorType;vt&&rg(Tt)&&(H=H.responseEnd,v+=vt*(H<A?1:(A-nt)/(H-nt)))}if(--r,n+=8*(f+v)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Wf=null,qf=null;function ic(t){return t.nodeType===9?t:t.ownerDocument}function og(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function lg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Yf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var jf=null;function fS(){var t=window.event;return t&&t.type==="popstate"?t===jf?!1:(jf=t,!0):(jf=null,!1)}var cg=typeof setTimeout=="function"?setTimeout:void 0,hS=typeof clearTimeout=="function"?clearTimeout:void 0,ug=typeof Promise=="function"?Promise:void 0,dS=typeof queueMicrotask=="function"?queueMicrotask:typeof ug<"u"?function(t){return ug.resolve(null).then(t).catch(pS)}:cg;function pS(t){setTimeout(function(){throw t})}function ja(t){return t==="head"}function fg(t,n){var a=n,r=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(u),yr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")Uo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Uo(a);for(var f=a.firstChild;f;){var v=f.nextSibling,A=f.nodeName;f[fs]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&Uo(t.ownerDocument.body);a=u}while(a);yr(n)}function hg(t,n){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function Zf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Zf(a),Zr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function mS(t,n,a,r){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[fs])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=xi(t.nextSibling),t===null)break}return null}function gS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=xi(t.nextSibling),t===null))return null;return t}function dg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=xi(t.nextSibling),t===null))return null;return t}function Kf(t){return t.data==="$?"||t.data==="$~"}function Qf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function _S(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function xi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Jf=null;function pg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return xi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function mg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function gg(t,n,a){switch(n=ic(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Uo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Zr(t)}var Si=new Map,_g=new Set;function ac(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var pa=I.d;I.d={f:vS,r:xS,D:SS,C:MS,L:yS,m:ES,X:TS,S:bS,M:AS};function vS(){var t=pa.f(),n=Zl();return t||n}function xS(t){var n=wa(t);n!==null&&n.tag===5&&n.type==="form"?Om(n):pa.r(t)}var xr=typeof document>"u"?null:document;function vg(t,n,a){var r=xr;if(r&&typeof n=="string"&&n){var u=se(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),_g.has(u)||(_g.add(u),t={rel:t,crossOrigin:a,href:n},r.querySelector(u)===null&&(n=r.createElement("link"),Un(n,"link",t),R(n),r.head.appendChild(n)))}}function SS(t){pa.D(t),vg("dns-prefetch",t,null)}function MS(t,n){pa.C(t,n),vg("preconnect",t,n)}function yS(t,n,a){pa.L(t,n,a);var r=xr;if(r&&t&&n){var u='link[rel="preload"][as="'+se(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+se(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+se(a.imageSizes)+'"]')):u+='[href="'+se(t)+'"]';var f=u;switch(n){case"style":f=Sr(t);break;case"script":f=Mr(t)}Si.has(f)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Si.set(f,t),r.querySelector(u)!==null||n==="style"&&r.querySelector(No(f))||n==="script"&&r.querySelector(Lo(f))||(n=r.createElement("link"),Un(n,"link",t),R(n),r.head.appendChild(n)))}}function ES(t,n){pa.m(t,n);var a=xr;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+se(r)+'"][href="'+se(t)+'"]',f=u;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Mr(t)}if(!Si.has(f)&&(t=g({rel:"modulepreload",href:t},n),Si.set(f,t),a.querySelector(u)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Lo(f)))return}r=a.createElement("link"),Un(r,"link",t),R(r),a.head.appendChild(r)}}}function bS(t,n,a){pa.S(t,n,a);var r=xr;if(r&&t){var u=Da(r).hoistableStyles,f=Sr(t);n=n||"default";var v=u.get(f);if(!v){var A={loading:0,preload:null};if(v=r.querySelector(No(f)))A.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Si.get(f))&&$f(t,a);var H=v=r.createElement("link");R(H),Un(H,"link",t),H._p=new Promise(function(nt,vt){H.onload=nt,H.onerror=vt}),H.addEventListener("load",function(){A.loading|=1}),H.addEventListener("error",function(){A.loading|=2}),A.loading|=4,sc(v,n,r)}v={type:"stylesheet",instance:v,count:1,state:A},u.set(f,v)}}}function TS(t,n){pa.X(t,n);var a=xr;if(a&&t){var r=Da(a).hoistableScripts,u=Mr(t),f=r.get(u);f||(f=a.querySelector(Lo(u)),f||(t=g({src:t,async:!0},n),(n=Si.get(u))&&th(t,n),f=a.createElement("script"),R(f),Un(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function AS(t,n){pa.M(t,n);var a=xr;if(a&&t){var r=Da(a).hoistableScripts,u=Mr(t),f=r.get(u);f||(f=a.querySelector(Lo(u)),f||(t=g({src:t,async:!0,type:"module"},n),(n=Si.get(u))&&th(t,n),f=a.createElement("script"),R(f),Un(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function xg(t,n,a,r){var u=(u=it.current)?ac(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Sr(a.href),a=Da(u).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Sr(a.href);var f=Da(u).hoistableStyles,v=f.get(t);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,v),(f=u.querySelector(No(t)))&&!f._p&&(v.instance=f,v.state.loading=5),Si.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Si.set(t,a),f||RS(u,t,a,v.state))),n&&r===null)throw Error(s(528,""));return v}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Mr(a),a=Da(u).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Sr(t){return'href="'+se(t)+'"'}function No(t){return'link[rel="stylesheet"]['+t+"]"}function Sg(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function RS(t,n,a,r){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=t.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),Un(n,"link",a),R(n),t.head.appendChild(n))}function Mr(t){return'[src="'+se(t)+'"]'}function Lo(t){return"script[async]"+t}function Mg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+se(a.href)+'"]');if(r)return n.instance=r,R(r),r;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),R(r),Un(r,"style",u),sc(r,a.precedence,t),n.instance=r;case"stylesheet":u=Sr(a.href);var f=t.querySelector(No(u));if(f)return n.state.loading|=4,n.instance=f,R(f),f;r=Sg(a),(u=Si.get(u))&&$f(r,u),f=(t.ownerDocument||t).createElement("link"),R(f);var v=f;return v._p=new Promise(function(A,H){v.onload=A,v.onerror=H}),Un(f,"link",r),n.state.loading|=4,sc(f,a.precedence,t),n.instance=f;case"script":return f=Mr(a.src),(u=t.querySelector(Lo(f)))?(n.instance=u,R(u),u):(r=a,(u=Si.get(f))&&(r=g({},a),th(r,u)),t=t.ownerDocument||t,u=t.createElement("script"),R(u),Un(u,"link",r),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,sc(r,a.precedence,t));return n.instance}function sc(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=r.length?r[r.length-1]:null,f=u,v=0;v<r.length;v++){var A=r[v];if(A.dataset.precedence===n)f=A;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function $f(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function th(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var rc=null;function yg(t,n,a){if(rc===null){var r=new Map,u=rc=new Map;u.set(a,r)}else u=rc,r=u.get(a),r||(r=new Map,u.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[fs]||f[cn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=t+v;var A=r.get(v);A?A.push(f):r.set(v,[f])}}return r}function Eg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function CS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function bg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function wS(t,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Sr(r.href),f=n.querySelector(No(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=oc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,R(f);return}f=n.ownerDocument||n,r=Sg(r),(u=Si.get(u))&&$f(r,u),f=f.createElement("link"),R(f);var v=f;v._p=new Promise(function(A,H){v.onload=A,v.onerror=H}),Un(f,"link",r),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=oc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var eh=0;function DS(t,n){return t.stylesheets&&t.count===0&&cc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&cc(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&eh===0&&(eh=62500*uS());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&cc(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>eh?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(u)}}:null}function oc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)cc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var lc=null;function cc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,lc=new Map,n.forEach(US,t),lc=null,oc.call(t))}function US(t,n){if(!(n.state.loading&4)){var a=lc.get(t);if(a)var r=a.get(null);else{a=new Map,lc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var v=u[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),r=v)}r&&a.set(null,r)}u=n.instance,v=u.getAttribute("data-precedence"),f=a.get(v)||r,f===r&&a.set(null,u),a.set(v,u),this.count++,r=oc.bind(this),u.addEventListener("load",r),u.addEventListener("error",r),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Oo={$$typeof:O,Provider:null,Consumer:null,_currentValue:at,_currentValue2:at,_threadCount:0};function NS(t,n,a,r,u,f,v,A,H){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=me(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=me(0),this.hiddenUpdates=me(null),this.identifierPrefix=r,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function Tg(t,n,a,r,u,f,v,A,H,nt,vt,Tt){return t=new NS(t,n,a,v,H,nt,vt,Tt,A),n=1,f===!0&&(n|=24),f=ti(3,null,null,n),t.current=f,f.stateNode=t,n=Lu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},zu(f),t}function Ag(t){return t?(t=Js,t):Js}function Rg(t,n,a,r,u,f){u=Ag(u),r.context===null?r.context=u:r.pendingContext=u,r=za(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=Ba(t,r,n),a!==null&&(jn(a,t,n),fo(a,t,n))}function Cg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function nh(t,n){Cg(t,n),(t=t.alternate)&&Cg(t,n)}function wg(t){if(t.tag===13||t.tag===31){var n=gs(t,67108864);n!==null&&jn(n,t,67108864),nh(t,67108864)}}function Dg(t){if(t.tag===13||t.tag===31){var n=si();n=Qn(n);var a=gs(t,n);a!==null&&jn(a,t,n),nh(t,n)}}var uc=!0;function LS(t,n,a,r){var u=P.T;P.T=null;var f=I.p;try{I.p=2,ih(t,n,a,r)}finally{I.p=f,P.T=u}}function OS(t,n,a,r){var u=P.T;P.T=null;var f=I.p;try{I.p=8,ih(t,n,a,r)}finally{I.p=f,P.T=u}}function ih(t,n,a,r){if(uc){var u=ah(r);if(u===null)Xf(t,n,r,fc,a),Ng(t,r);else if(FS(u,t,n,a,r))r.stopPropagation();else if(Ng(t,r),n&4&&-1<PS.indexOf(t)){for(;u!==null;){var f=wa(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=_t(f.pendingLanes);if(v!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;v;){var H=1<<31-Dt(v);A.entanglements[1]|=H,v&=~H}Ii(f),(Fe&6)===0&&(Yl=E()+500,Co(0))}}break;case 31:case 13:A=gs(f,2),A!==null&&jn(A,f,2),Zl(),nh(f,2)}if(f=ah(r),f===null&&Xf(t,n,r,fc,a),f===u)break;u=f}u!==null&&r.stopPropagation()}else Xf(t,n,r,null,a)}}function ah(t){return t=su(t),sh(t)}var fc=null;function sh(t){if(fc=null,t=Ca(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return fc=t,null}function Ug(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(W()){case xt:return 2;case At:return 8;case mt:case rt:return 32;case st:return 268435456;default:return 32}default:return 32}}var rh=!1,Za=null,Ka=null,Qa=null,Po=new Map,Fo=new Map,Ja=[],PS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ng(t,n){switch(t){case"focusin":case"focusout":Za=null;break;case"dragenter":case"dragleave":Ka=null;break;case"mouseover":case"mouseout":Qa=null;break;case"pointerover":case"pointerout":Po.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fo.delete(n.pointerId)}}function zo(t,n,a,r,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[u]},n!==null&&(n=wa(n),n!==null&&wg(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function FS(t,n,a,r,u){switch(n){case"focusin":return Za=zo(Za,t,n,a,r,u),!0;case"dragenter":return Ka=zo(Ka,t,n,a,r,u),!0;case"mouseover":return Qa=zo(Qa,t,n,a,r,u),!0;case"pointerover":var f=u.pointerId;return Po.set(f,zo(Po.get(f)||null,t,n,a,r,u)),!0;case"gotpointercapture":return f=u.pointerId,Fo.set(f,zo(Fo.get(f)||null,t,n,a,r,u)),!0}return!1}function Lg(t){var n=Ca(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Jn(t.priority,function(){Dg(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,Jn(t.priority,function(){Dg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function hc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=ah(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);au=r,a.target.dispatchEvent(r),au=null}else return n=wa(a),n!==null&&wg(n),t.blockedOn=a,!1;n.shift()}return!0}function Og(t,n,a){hc(t)&&a.delete(n)}function zS(){rh=!1,Za!==null&&hc(Za)&&(Za=null),Ka!==null&&hc(Ka)&&(Ka=null),Qa!==null&&hc(Qa)&&(Qa=null),Po.forEach(Og),Fo.forEach(Og)}function dc(t,n){t.blockedOn===n&&(t.blockedOn=null,rh||(rh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,zS)))}var pc=null;function Pg(t){pc!==t&&(pc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){pc===t&&(pc=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],u=t[n+2];if(typeof r!="function"){if(sh(r||a)===null)continue;break}var f=wa(a);f!==null&&(t.splice(n,3),n-=3,af(f,{pending:!0,data:u,method:a.method,action:r},r,u))}}))}function yr(t){function n(H){return dc(H,t)}Za!==null&&dc(Za,t),Ka!==null&&dc(Ka,t),Qa!==null&&dc(Qa,t),Po.forEach(n),Fo.forEach(n);for(var a=0;a<Ja.length;a++){var r=Ja[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<Ja.length&&(a=Ja[0],a.blockedOn===null);)Lg(a),a.blockedOn===null&&Ja.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var u=a[r],f=a[r+1],v=u[yn]||null;if(typeof f=="function")v||Pg(a);else if(v){var A=null;if(f&&f.hasAttribute("formAction")){if(u=f,v=f[yn]||null)A=v.formAction;else if(sh(u)!==null)continue}else A=v.action;typeof A=="function"?a[r+1]=A:(a.splice(r,3),r-=3),Pg(a)}}}function Fg(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return u=v})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function oh(t){this._internalRoot=t}mc.prototype.render=oh.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=si();Rg(a,r,t,n,null,null)},mc.prototype.unmount=oh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Rg(t.current,2,null,t,null,null),Zl(),n[bi]=null}};function mc(t){this._internalRoot=t}mc.prototype.unstable_scheduleHydration=function(t){if(t){var n=us();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ja.length&&n!==0&&n<Ja[a].priority;a++);Ja.splice(a,0,t),a===0&&Lg(t)}};var zg=e.version;if(zg!=="19.2.3")throw Error(s(527,zg,"19.2.3"));I.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?x(t):null,t=t===null?null:t.stateNode,t};var BS={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gc.isDisabled&&gc.supportsFiber)try{et=gc.inject(BS),Mt=gc}catch{}}return Io.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,r="",u=km,f=Wm,v=qm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=Tg(t,1,!1,null,null,a,r,null,u,f,v,Fg),t[bi]=n.current,Vf(t),new oh(n)},Io.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var r=!1,u="",f=km,v=Wm,A=qm,H=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(H=a.formState)),n=Tg(t,1,!0,n,a??null,r,u,H,f,v,A,Fg),n.context=Ag(null),a=n.current,r=si(),r=Qn(r),u=za(r),u.callback=null,Ba(a,u,r),a=r,n.current.lanes=a,ln(n,a),Ii(n),t[bi]=n.current,Vf(t),new mc(n)},Io.version="19.2.3",Io}var Yg;function ZS(){if(Yg)return uh.exports;Yg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),uh.exports=jS(),uh.exports}var KS=ZS();const QS=J_(KS);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wd="182",JS=0,jg=1,$S=2,Gc=1,tM=2,Zo=3,cs=0,Kn=1,Vi=2,Ea=0,Ir=1,Yh=2,Zg=3,Kg=4,eM=5,Fs=100,nM=101,iM=102,aM=103,sM=104,rM=200,oM=201,lM=202,cM=203,jh=204,Zh=205,uM=206,fM=207,hM=208,dM=209,pM=210,mM=211,gM=212,_M=213,vM=214,Kh=0,Qh=1,Jh=2,Gr=3,$h=4,td=5,ed=6,nd=7,$_=0,xM=1,SM=2,Wi=0,tv=1,ev=2,nv=3,iv=4,av=5,sv=6,rv=7,ov=300,Gs=301,Vr=302,id=303,ad=304,tu=306,sd=1e3,Ma=1001,rd=1002,Nn=1003,MM=1004,_c=1005,zn=1006,ph=1007,Is=1008,li=1009,lv=1010,cv=1011,Jo=1012,qd=1013,Yi=1014,Xi=1015,Ta=1016,Yd=1017,jd=1018,$o=1020,uv=35902,fv=35899,hv=1021,dv=1022,Oi=1023,Aa=1026,Hs=1027,pv=1028,Zd=1029,Xr=1030,Kd=1031,Qd=1033,Vc=33776,Xc=33777,kc=33778,Wc=33779,od=35840,ld=35841,cd=35842,ud=35843,fd=36196,hd=37492,dd=37496,pd=37488,md=37489,gd=37490,_d=37491,vd=37808,xd=37809,Sd=37810,Md=37811,yd=37812,Ed=37813,bd=37814,Td=37815,Ad=37816,Rd=37817,Cd=37818,wd=37819,Dd=37820,Ud=37821,Nd=36492,Ld=36494,Od=36495,Pd=36283,Fd=36284,zd=36285,Bd=36286,yM=3200,mv=0,EM=1,os="",yi="srgb",kr="srgb-linear",Yc="linear",Ge="srgb",Er=7680,Qg=519,bM=512,TM=513,AM=514,Jd=515,RM=516,CM=517,$d=518,wM=519,Jg=35044,$g="300 es",ki=2e3,jc=2001;function gv(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Zc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function DM(){const o=Zc("canvas");return o.style.display="block",o}const t_={};function e_(...o){const e="THREE."+o.shift();console.log(e,...o)}function re(...o){const e="THREE."+o.shift();console.warn(e,...o)}function we(...o){const e="THREE."+o.shift();console.error(e,...o)}function tl(...o){const e=o.join(" ");e in t_||(t_[e]=!0,re(...o))}function UM(o,e,i){return new Promise(function(s,l){function c(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}class qr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,e);e.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],mh=Math.PI/180,Id=180/Math.PI;function nl(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Pn[o&255]+Pn[o>>8&255]+Pn[o>>16&255]+Pn[o>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[i&63|128]+Pn[i>>8&255]+"-"+Pn[i>>16&255]+Pn[i>>24&255]+Pn[s&255]+Pn[s>>8&255]+Pn[s>>16&255]+Pn[s>>24&255]).toLowerCase()}function Te(o,e,i){return Math.max(e,Math.min(i,o))}function NM(o,e){return(o%e+e)%e}function gh(o,e,i){return(1-i)*o+i*e}function Ho(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Zn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Ue{constructor(e=0,i=0){Ue.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Te(this.x,e.x,i.x),this.y=Te(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Te(this.x,e,i),this.y=Te(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Te(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Te(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,h=this.y-e.y;return this.x=c*s-h*l+e.x,this.y=c*l+h*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class il{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,h,d){let m=s[l+0],p=s[l+1],x=s[l+2],g=s[l+3],S=c[h+0],y=c[h+1],b=c[h+2],C=c[h+3];if(d<=0){e[i+0]=m,e[i+1]=p,e[i+2]=x,e[i+3]=g;return}if(d>=1){e[i+0]=S,e[i+1]=y,e[i+2]=b,e[i+3]=C;return}if(g!==C||m!==S||p!==y||x!==b){let M=m*S+p*y+x*b+g*C;M<0&&(S=-S,y=-y,b=-b,C=-C,M=-M);let _=1-d;if(M<.9995){const L=Math.acos(M),O=Math.sin(L);_=Math.sin(_*L)/O,d=Math.sin(d*L)/O,m=m*_+S*d,p=p*_+y*d,x=x*_+b*d,g=g*_+C*d}else{m=m*_+S*d,p=p*_+y*d,x=x*_+b*d,g=g*_+C*d;const L=1/Math.sqrt(m*m+p*p+x*x+g*g);m*=L,p*=L,x*=L,g*=L}}e[i]=m,e[i+1]=p,e[i+2]=x,e[i+3]=g}static multiplyQuaternionsFlat(e,i,s,l,c,h){const d=s[l],m=s[l+1],p=s[l+2],x=s[l+3],g=c[h],S=c[h+1],y=c[h+2],b=c[h+3];return e[i]=d*b+x*g+m*y-p*S,e[i+1]=m*b+x*S+p*g-d*y,e[i+2]=p*b+x*y+d*S-m*g,e[i+3]=x*b-d*g-m*S-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(s/2),x=d(l/2),g=d(c/2),S=m(s/2),y=m(l/2),b=m(c/2);switch(h){case"XYZ":this._x=S*x*g+p*y*b,this._y=p*y*g-S*x*b,this._z=p*x*b+S*y*g,this._w=p*x*g-S*y*b;break;case"YXZ":this._x=S*x*g+p*y*b,this._y=p*y*g-S*x*b,this._z=p*x*b-S*y*g,this._w=p*x*g+S*y*b;break;case"ZXY":this._x=S*x*g-p*y*b,this._y=p*y*g+S*x*b,this._z=p*x*b+S*y*g,this._w=p*x*g-S*y*b;break;case"ZYX":this._x=S*x*g-p*y*b,this._y=p*y*g+S*x*b,this._z=p*x*b-S*y*g,this._w=p*x*g+S*y*b;break;case"YZX":this._x=S*x*g+p*y*b,this._y=p*y*g+S*x*b,this._z=p*x*b-S*y*g,this._w=p*x*g-S*y*b;break;case"XZY":this._x=S*x*g-p*y*b,this._y=p*y*g-S*x*b,this._z=p*x*b+S*y*g,this._w=p*x*g+S*y*b;break;default:re("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],x=i[6],g=i[10],S=s+d+g;if(S>0){const y=.5/Math.sqrt(S+1);this._w=.25/y,this._x=(x-m)*y,this._y=(c-p)*y,this._z=(h-l)*y}else if(s>d&&s>g){const y=2*Math.sqrt(1+s-d-g);this._w=(x-m)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(c+p)/y}else if(d>g){const y=2*Math.sqrt(1+d-s-g);this._w=(c-p)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(m+x)/y}else{const y=2*Math.sqrt(1+g-s-d);this._w=(h-l)/y,this._x=(c+p)/y,this._y=(m+x)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Te(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,h=e._w,d=i._x,m=i._y,p=i._z,x=i._w;return this._x=s*x+h*d+l*p-c*m,this._y=l*x+h*m+c*d-s*p,this._z=c*x+h*p+s*m-l*d,this._w=h*x-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let s=e._x,l=e._y,c=e._z,h=e._w,d=this.dot(e);d<0&&(s=-s,l=-l,c=-c,h=-h,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),x=Math.sin(p);m=Math.sin(m*p)/x,i=Math.sin(i*p)/x,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(e=0,i=0,s=0){J.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(n_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(n_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*s),x=2*(d*i-c*l),g=2*(c*s-h*i);return this.x=i+m*p+h*g-d*x,this.y=s+m*x+d*p-c*g,this.z=l+m*g+c*x-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Te(this.x,e.x,i.x),this.y=Te(this.y,e.y,i.y),this.z=Te(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Te(this.x,e,i),this.y=Te(this.y,e,i),this.z=Te(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Te(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-s*m,this.z=s*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return _h.copy(this).projectOnVector(e),this.sub(_h)}reflect(e){return this.sub(_h.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Te(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _h=new J,n_=new il;class he{constructor(e,i,s,l,c,h,d,m,p){he.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,h,d,m,p)}set(e,i,s,l,c,h,d,m,p){const x=this.elements;return x[0]=e,x[1]=l,x[2]=d,x[3]=i,x[4]=c,x[5]=m,x[6]=s,x[7]=h,x[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],x=s[4],g=s[7],S=s[2],y=s[5],b=s[8],C=l[0],M=l[3],_=l[6],L=l[1],O=l[4],N=l[7],F=l[2],B=l[5],z=l[8];return c[0]=h*C+d*L+m*F,c[3]=h*M+d*O+m*B,c[6]=h*_+d*N+m*z,c[1]=p*C+x*L+g*F,c[4]=p*M+x*O+g*B,c[7]=p*_+x*N+g*z,c[2]=S*C+y*L+b*F,c[5]=S*M+y*O+b*B,c[8]=S*_+y*N+b*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],x=e[8];return i*h*x-i*d*p-s*c*x+s*d*m+l*c*p-l*h*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],x=e[8],g=x*h-d*p,S=d*m-x*c,y=p*c-h*m,b=i*g+s*S+l*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/b;return e[0]=g*C,e[1]=(l*p-x*s)*C,e[2]=(d*s-l*h)*C,e[3]=S*C,e[4]=(x*i-l*m)*C,e[5]=(l*c-d*i)*C,e[6]=y*C,e[7]=(s*m-p*i)*C,e[8]=(h*i-s*c)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(vh.makeScale(e,i)),this}rotate(e){return this.premultiply(vh.makeRotation(-e)),this}translate(e,i){return this.premultiply(vh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const vh=new he,i_=new he().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),a_=new he().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function LM(){const o={enabled:!0,workingColorSpace:kr,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Ge&&(l.r=ba(l.r),l.g=ba(l.g),l.b=ba(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Ge&&(l.r=Hr(l.r),l.g=Hr(l.g),l.b=Hr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===os?Yc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return tl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return tl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[kr]:{primaries:e,whitePoint:s,transfer:Yc,toXYZ:i_,fromXYZ:a_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:yi},outputColorSpaceConfig:{drawingBufferColorSpace:yi}},[yi]:{primaries:e,whitePoint:s,transfer:Ge,toXYZ:i_,fromXYZ:a_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:yi}}}),o}const De=LM();function ba(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Hr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let br;class OM{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{br===void 0&&(br=Zc("canvas")),br.width=e.width,br.height=e.height;const l=br.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=br}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Zc("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=ba(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(ba(i[s]/255)*255):i[s]=ba(i[s]);return{data:i,width:e.width,height:e.height}}else return re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let PM=0;class tp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:PM++}),this.uuid=nl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(xh(l[h].image)):c.push(xh(l[h]))}else c=xh(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function xh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?OM.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(re("Texture: Unable to serialize Texture."),{})}let FM=0;const Sh=new J;class Vn extends qr{constructor(e=Vn.DEFAULT_IMAGE,i=Vn.DEFAULT_MAPPING,s=Ma,l=Ma,c=zn,h=Is,d=Oi,m=li,p=Vn.DEFAULT_ANISOTROPY,x=os){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:FM++}),this.uuid=nl(),this.name="",this.source=new tp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new he,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Sh).x}get height(){return this.source.getSize(Sh).y}get depth(){return this.source.getSize(Sh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){re(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){re(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ov)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case sd:e.x=e.x-Math.floor(e.x);break;case Ma:e.x=e.x<0?0:1;break;case rd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case sd:e.y=e.y-Math.floor(e.y);break;case Ma:e.y=e.y<0?0:1;break;case rd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=ov;Vn.DEFAULT_ANISOTROPY=1;class an{constructor(e=0,i=0,s=0,l=1){an.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,h=e.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const m=e.elements,p=m[0],x=m[4],g=m[8],S=m[1],y=m[5],b=m[9],C=m[2],M=m[6],_=m[10];if(Math.abs(x-S)<.01&&Math.abs(g-C)<.01&&Math.abs(b-M)<.01){if(Math.abs(x+S)<.1&&Math.abs(g+C)<.1&&Math.abs(b+M)<.1&&Math.abs(p+y+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(p+1)/2,N=(y+1)/2,F=(_+1)/2,B=(x+S)/4,z=(g+C)/4,j=(b+M)/4;return O>N&&O>F?O<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(O),l=B/s,c=z/s):N>F?N<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(N),s=B/l,c=j/l):F<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(F),s=z/c,l=j/c),this.set(s,l,c,i),this}let L=Math.sqrt((M-b)*(M-b)+(g-C)*(g-C)+(S-x)*(S-x));return Math.abs(L)<.001&&(L=1),this.x=(M-b)/L,this.y=(g-C)/L,this.z=(S-x)/L,this.w=Math.acos((p+y+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Te(this.x,e.x,i.x),this.y=Te(this.y,e.y,i.y),this.z=Te(this.z,e.z,i.z),this.w=Te(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Te(this.x,e,i),this.y=Te(this.y,e,i),this.z=Te(this.z,e,i),this.w=Te(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Te(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zM extends qr{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new an(0,0,e,i),this.scissorTest=!1,this.viewport=new an(0,0,e,i);const l={width:e,height:i,depth:s.depth},c=new Vn(l);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:zn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new tp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qi extends zM{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class _v extends Vn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=Ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class BM extends Vn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=Ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class al{constructor(e=new J(1/0,1/0,1/0),i=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(wi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(wi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=wi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,wi):wi.fromBufferAttribute(c,h),wi.applyMatrix4(e.matrixWorld),this.expandByPoint(wi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),vc.copy(s.boundingBox)),vc.applyMatrix4(e.matrixWorld),this.union(vc)}const l=e.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wi),wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Go),xc.subVectors(this.max,Go),Tr.subVectors(e.a,Go),Ar.subVectors(e.b,Go),Rr.subVectors(e.c,Go),ts.subVectors(Ar,Tr),es.subVectors(Rr,Ar),ws.subVectors(Tr,Rr);let i=[0,-ts.z,ts.y,0,-es.z,es.y,0,-ws.z,ws.y,ts.z,0,-ts.x,es.z,0,-es.x,ws.z,0,-ws.x,-ts.y,ts.x,0,-es.y,es.x,0,-ws.y,ws.x,0];return!Mh(i,Tr,Ar,Rr,xc)||(i=[1,0,0,0,1,0,0,0,1],!Mh(i,Tr,Ar,Rr,xc))?!1:(Sc.crossVectors(ts,es),i=[Sc.x,Sc.y,Sc.z],Mh(i,Tr,Ar,Rr,xc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ma[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ma[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ma[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ma[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ma[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ma[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ma[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ma[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ma),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ma=[new J,new J,new J,new J,new J,new J,new J,new J],wi=new J,vc=new al,Tr=new J,Ar=new J,Rr=new J,ts=new J,es=new J,ws=new J,Go=new J,xc=new J,Sc=new J,Ds=new J;function Mh(o,e,i,s,l){for(let c=0,h=o.length-3;c<=h;c+=3){Ds.fromArray(o,c);const d=l.x*Math.abs(Ds.x)+l.y*Math.abs(Ds.y)+l.z*Math.abs(Ds.z),m=e.dot(Ds),p=i.dot(Ds),x=s.dot(Ds);if(Math.max(-Math.max(m,p,x),Math.min(m,p,x))>d)return!1}return!0}const IM=new al,Vo=new J,yh=new J;class sl{constructor(e=new J,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):IM.setFromPoints(e).getCenter(s);let l=0;for(let c=0,h=e.length;c<h;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vo.subVectors(e,this.center);const i=Vo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Vo,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vo.copy(e.center).add(yh)),this.expandByPoint(Vo.copy(e.center).sub(yh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ga=new J,Eh=new J,Mc=new J,ns=new J,bh=new J,yc=new J,Th=new J;class eu{constructor(e=new J,i=new J(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ga)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ga.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ga.copy(this.origin).addScaledVector(this.direction,i),ga.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){Eh.copy(e).add(i).multiplyScalar(.5),Mc.copy(i).sub(e).normalize(),ns.copy(this.origin).sub(Eh);const c=e.distanceTo(i)*.5,h=-this.direction.dot(Mc),d=ns.dot(this.direction),m=-ns.dot(Mc),p=ns.lengthSq(),x=Math.abs(1-h*h);let g,S,y,b;if(x>0)if(g=h*m-d,S=h*d-m,b=c*x,g>=0)if(S>=-b)if(S<=b){const C=1/x;g*=C,S*=C,y=g*(g+h*S+2*d)+S*(h*g+S+2*m)+p}else S=c,g=Math.max(0,-(h*S+d)),y=-g*g+S*(S+2*m)+p;else S=-c,g=Math.max(0,-(h*S+d)),y=-g*g+S*(S+2*m)+p;else S<=-b?(g=Math.max(0,-(-h*c+d)),S=g>0?-c:Math.min(Math.max(-c,-m),c),y=-g*g+S*(S+2*m)+p):S<=b?(g=0,S=Math.min(Math.max(-c,-m),c),y=S*(S+2*m)+p):(g=Math.max(0,-(h*c+d)),S=g>0?c:Math.min(Math.max(-c,-m),c),y=-g*g+S*(S+2*m)+p);else S=h>0?-c:c,g=Math.max(0,-(h*S+d)),y=-g*g+S*(S+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(Eh).addScaledVector(Mc,S),y}intersectSphere(e,i){ga.subVectors(e.center,this.origin);const s=ga.dot(this.direction),l=ga.dot(ga)-s*s,c=e.radius*e.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,h,d,m;const p=1/this.direction.x,x=1/this.direction.y,g=1/this.direction.z,S=this.origin;return p>=0?(s=(e.min.x-S.x)*p,l=(e.max.x-S.x)*p):(s=(e.max.x-S.x)*p,l=(e.min.x-S.x)*p),x>=0?(c=(e.min.y-S.y)*x,h=(e.max.y-S.y)*x):(c=(e.max.y-S.y)*x,h=(e.min.y-S.y)*x),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),g>=0?(d=(e.min.z-S.z)*g,m=(e.max.z-S.z)*g):(d=(e.max.z-S.z)*g,m=(e.min.z-S.z)*g),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,ga)!==null}intersectTriangle(e,i,s,l,c){bh.subVectors(i,e),yc.subVectors(s,e),Th.crossVectors(bh,yc);let h=this.direction.dot(Th),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;ns.subVectors(this.origin,e);const m=d*this.direction.dot(yc.crossVectors(ns,yc));if(m<0)return null;const p=d*this.direction.dot(bh.cross(ns));if(p<0||m+p>h)return null;const x=-d*ns.dot(Th);return x<0?null:this.at(x/h,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Je{constructor(e,i,s,l,c,h,d,m,p,x,g,S,y,b,C,M){Je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,h,d,m,p,x,g,S,y,b,C,M)}set(e,i,s,l,c,h,d,m,p,x,g,S,y,b,C,M){const _=this.elements;return _[0]=e,_[4]=i,_[8]=s,_[12]=l,_[1]=c,_[5]=h,_[9]=d,_[13]=m,_[2]=p,_[6]=x,_[10]=g,_[14]=S,_[3]=y,_[7]=b,_[11]=C,_[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Je().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,s=e.elements,l=1/Cr.setFromMatrixColumn(e,0).length(),c=1/Cr.setFromMatrixColumn(e,1).length(),h=1/Cr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),x=Math.cos(c),g=Math.sin(c);if(e.order==="XYZ"){const S=h*x,y=h*g,b=d*x,C=d*g;i[0]=m*x,i[4]=-m*g,i[8]=p,i[1]=y+b*p,i[5]=S-C*p,i[9]=-d*m,i[2]=C-S*p,i[6]=b+y*p,i[10]=h*m}else if(e.order==="YXZ"){const S=m*x,y=m*g,b=p*x,C=p*g;i[0]=S+C*d,i[4]=b*d-y,i[8]=h*p,i[1]=h*g,i[5]=h*x,i[9]=-d,i[2]=y*d-b,i[6]=C+S*d,i[10]=h*m}else if(e.order==="ZXY"){const S=m*x,y=m*g,b=p*x,C=p*g;i[0]=S-C*d,i[4]=-h*g,i[8]=b+y*d,i[1]=y+b*d,i[5]=h*x,i[9]=C-S*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const S=h*x,y=h*g,b=d*x,C=d*g;i[0]=m*x,i[4]=b*p-y,i[8]=S*p+C,i[1]=m*g,i[5]=C*p+S,i[9]=y*p-b,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const S=h*m,y=h*p,b=d*m,C=d*p;i[0]=m*x,i[4]=C-S*g,i[8]=b*g+y,i[1]=g,i[5]=h*x,i[9]=-d*x,i[2]=-p*x,i[6]=y*g+b,i[10]=S-C*g}else if(e.order==="XZY"){const S=h*m,y=h*p,b=d*m,C=d*p;i[0]=m*x,i[4]=-g,i[8]=p*x,i[1]=S*g+C,i[5]=h*x,i[9]=y*g-b,i[2]=b*g-y,i[6]=d*x,i[10]=C*g+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(HM,e,GM)}lookAt(e,i,s){const l=this.elements;return ri.subVectors(e,i),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),is.crossVectors(s,ri),is.lengthSq()===0&&(Math.abs(s.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),is.crossVectors(s,ri)),is.normalize(),Ec.crossVectors(ri,is),l[0]=is.x,l[4]=Ec.x,l[8]=ri.x,l[1]=is.y,l[5]=Ec.y,l[9]=ri.y,l[2]=is.z,l[6]=Ec.z,l[10]=ri.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],x=s[1],g=s[5],S=s[9],y=s[13],b=s[2],C=s[6],M=s[10],_=s[14],L=s[3],O=s[7],N=s[11],F=s[15],B=l[0],z=l[4],j=l[8],T=l[12],w=l[1],V=l[5],q=l[9],Q=l[13],ut=l[2],pt=l[6],P=l[10],I=l[14],at=l[3],Ut=l[7],St=l[11],D=l[15];return c[0]=h*B+d*w+m*ut+p*at,c[4]=h*z+d*V+m*pt+p*Ut,c[8]=h*j+d*q+m*P+p*St,c[12]=h*T+d*Q+m*I+p*D,c[1]=x*B+g*w+S*ut+y*at,c[5]=x*z+g*V+S*pt+y*Ut,c[9]=x*j+g*q+S*P+y*St,c[13]=x*T+g*Q+S*I+y*D,c[2]=b*B+C*w+M*ut+_*at,c[6]=b*z+C*V+M*pt+_*Ut,c[10]=b*j+C*q+M*P+_*St,c[14]=b*T+C*Q+M*I+_*D,c[3]=L*B+O*w+N*ut+F*at,c[7]=L*z+O*V+N*pt+F*Ut,c[11]=L*j+O*q+N*P+F*St,c[15]=L*T+O*Q+N*I+F*D,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],h=e[1],d=e[5],m=e[9],p=e[13],x=e[2],g=e[6],S=e[10],y=e[14],b=e[3],C=e[7],M=e[11],_=e[15],L=m*y-p*S,O=d*y-p*g,N=d*S-m*g,F=h*y-p*x,B=h*S-m*x,z=h*g-d*x;return i*(C*L-M*O+_*N)-s*(b*L-M*F+_*B)+l*(b*O-C*F+_*z)-c*(b*N-C*B+M*z)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],x=e[8],g=e[9],S=e[10],y=e[11],b=e[12],C=e[13],M=e[14],_=e[15],L=g*M*p-C*S*p+C*m*y-d*M*y-g*m*_+d*S*_,O=b*S*p-x*M*p-b*m*y+h*M*y+x*m*_-h*S*_,N=x*C*p-b*g*p+b*d*y-h*C*y-x*d*_+h*g*_,F=b*g*m-x*C*m-b*d*S+h*C*S+x*d*M-h*g*M,B=i*L+s*O+l*N+c*F;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/B;return e[0]=L*z,e[1]=(C*S*c-g*M*c-C*l*y+s*M*y+g*l*_-s*S*_)*z,e[2]=(d*M*c-C*m*c+C*l*p-s*M*p-d*l*_+s*m*_)*z,e[3]=(g*m*c-d*S*c-g*l*p+s*S*p+d*l*y-s*m*y)*z,e[4]=O*z,e[5]=(x*M*c-b*S*c+b*l*y-i*M*y-x*l*_+i*S*_)*z,e[6]=(b*m*c-h*M*c-b*l*p+i*M*p+h*l*_-i*m*_)*z,e[7]=(h*S*c-x*m*c+x*l*p-i*S*p-h*l*y+i*m*y)*z,e[8]=N*z,e[9]=(b*g*c-x*C*c-b*s*y+i*C*y+x*s*_-i*g*_)*z,e[10]=(h*C*c-b*d*c+b*s*p-i*C*p-h*s*_+i*d*_)*z,e[11]=(x*d*c-h*g*c-x*s*p+i*g*p+h*s*y-i*d*y)*z,e[12]=F*z,e[13]=(x*C*l-b*g*l+b*s*S-i*C*S-x*s*M+i*g*M)*z,e[14]=(b*d*l-h*C*l-b*s*m+i*C*m+h*s*M-i*d*M)*z,e[15]=(h*g*l-x*d*l+x*s*m-i*g*m-h*s*S+i*d*S)*z,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=e.x,d=e.y,m=e.z,p=c*h,x=c*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,x*d+s,x*m-l*h,0,p*m-l*d,x*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,h){return this.set(1,s,c,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,x=h+h,g=d+d,S=c*p,y=c*x,b=c*g,C=h*x,M=h*g,_=d*g,L=m*p,O=m*x,N=m*g,F=s.x,B=s.y,z=s.z;return l[0]=(1-(C+_))*F,l[1]=(y+N)*F,l[2]=(b-O)*F,l[3]=0,l[4]=(y-N)*B,l[5]=(1-(S+_))*B,l[6]=(M+L)*B,l[7]=0,l[8]=(b+O)*z,l[9]=(M-L)*z,l[10]=(1-(S+C))*z,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;if(e.x=l[12],e.y=l[13],e.z=l[14],this.determinant()===0)return s.set(1,1,1),i.identity(),this;let c=Cr.set(l[0],l[1],l[2]).length();const h=Cr.set(l[4],l[5],l[6]).length(),d=Cr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),Di.copy(this);const p=1/c,x=1/h,g=1/d;return Di.elements[0]*=p,Di.elements[1]*=p,Di.elements[2]*=p,Di.elements[4]*=x,Di.elements[5]*=x,Di.elements[6]*=x,Di.elements[8]*=g,Di.elements[9]*=g,Di.elements[10]*=g,i.setFromRotationMatrix(Di),s.x=c,s.y=h,s.z=d,this}makePerspective(e,i,s,l,c,h,d=ki,m=!1){const p=this.elements,x=2*c/(i-e),g=2*c/(s-l),S=(i+e)/(i-e),y=(s+l)/(s-l);let b,C;if(m)b=c/(h-c),C=h*c/(h-c);else if(d===ki)b=-(h+c)/(h-c),C=-2*h*c/(h-c);else if(d===jc)b=-h/(h-c),C=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=x,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=g,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,l,c,h,d=ki,m=!1){const p=this.elements,x=2/(i-e),g=2/(s-l),S=-(i+e)/(i-e),y=-(s+l)/(s-l);let b,C;if(m)b=1/(h-c),C=h/(h-c);else if(d===ki)b=-2/(h-c),C=-(h+c)/(h-c);else if(d===jc)b=-1/(h-c),C=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=x,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=g,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=b,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const Cr=new J,Di=new Je,HM=new J(0,0,0),GM=new J(1,1,1),is=new J,Ec=new J,ri=new J,s_=new Je,r_=new il;class ji{constructor(e=0,i=0,s=0,l=ji.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],x=l[9],g=l[2],S=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(Te(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-x,y),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(Te(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Te(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(S,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Te(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-Te(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-x,y),this._y=0);break;default:re("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return s_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(s_,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return r_.setFromEuler(this),this.setFromQuaternion(r_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ji.DEFAULT_ORDER="XYZ";class ep{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let VM=0;const o_=new J,wr=new il,_a=new Je,bc=new J,Xo=new J,XM=new J,kM=new il,l_=new J(1,0,0),c_=new J(0,1,0),u_=new J(0,0,1),f_={type:"added"},WM={type:"removed"},Dr={type:"childadded",child:null},Ah={type:"childremoved",child:null};class Mn extends qr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:VM++}),this.uuid=nl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mn.DEFAULT_UP.clone();const e=new J,i=new ji,s=new il,l=new J(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Je},normalMatrix:{value:new he}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=Mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ep,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return wr.setFromAxisAngle(e,i),this.quaternion.multiply(wr),this}rotateOnWorldAxis(e,i){return wr.setFromAxisAngle(e,i),this.quaternion.premultiply(wr),this}rotateX(e){return this.rotateOnAxis(l_,e)}rotateY(e){return this.rotateOnAxis(c_,e)}rotateZ(e){return this.rotateOnAxis(u_,e)}translateOnAxis(e,i){return o_.copy(e).applyQuaternion(this.quaternion),this.position.add(o_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(l_,e)}translateY(e){return this.translateOnAxis(c_,e)}translateZ(e){return this.translateOnAxis(u_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_a.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?bc.copy(e):bc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_a.lookAt(Xo,bc,this.up):_a.lookAt(bc,Xo,this.up),this.quaternion.setFromRotationMatrix(_a),l&&(_a.extractRotation(l.matrixWorld),wr.setFromRotationMatrix(_a),this.quaternion.premultiply(wr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(we("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(f_),Dr.child=e,this.dispatchEvent(Dr),Dr.child=null):we("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(WM),Ah.child=e,this.dispatchEvent(Ah),Ah.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_a.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_a.multiply(e.parent.matrixWorld)),e.applyMatrix4(_a),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(f_),Dr.child=e,this.dispatchEvent(Dr),Dr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,e,XM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,kM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,x=m.length;p<x;p++){const g=m[p];c(e.shapes,g)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(e.materials,this.material[m]));l.material=d}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),x=h(e.images),g=h(e.shapes),S=h(e.skeletons),y=h(e.animations),b=h(e.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),x.length>0&&(s.images=x),g.length>0&&(s.shapes=g),S.length>0&&(s.skeletons=S),y.length>0&&(s.animations=y),b.length>0&&(s.nodes=b)}return s.object=l,s;function h(d){const m=[];for(const p in d){const x=d[p];delete x.metadata,m.push(x)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}Mn.DEFAULT_UP=new J(0,1,0);Mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ui=new J,va=new J,Rh=new J,xa=new J,Ur=new J,Nr=new J,h_=new J,Ch=new J,wh=new J,Dh=new J,Uh=new an,Nh=new an,Lh=new an;class Li{constructor(e=new J,i=new J,s=new J){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Ui.subVectors(e,i),l.cross(Ui);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){Ui.subVectors(l,i),va.subVectors(s,i),Rh.subVectors(e,i);const h=Ui.dot(Ui),d=Ui.dot(va),m=Ui.dot(Rh),p=va.dot(va),x=va.dot(Rh),g=h*p-d*d;if(g===0)return c.set(0,0,0),null;const S=1/g,y=(p*m-d*x)*S,b=(h*x-d*m)*S;return c.set(1-y-b,b,y)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,xa)===null?!1:xa.x>=0&&xa.y>=0&&xa.x+xa.y<=1}static getInterpolation(e,i,s,l,c,h,d,m){return this.getBarycoord(e,i,s,l,xa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,xa.x),m.addScaledVector(h,xa.y),m.addScaledVector(d,xa.z),m)}static getInterpolatedAttribute(e,i,s,l,c,h){return Uh.setScalar(0),Nh.setScalar(0),Lh.setScalar(0),Uh.fromBufferAttribute(e,i),Nh.fromBufferAttribute(e,s),Lh.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(Uh,c.x),h.addScaledVector(Nh,c.y),h.addScaledVector(Lh,c.z),h}static isFrontFacing(e,i,s,l){return Ui.subVectors(s,i),va.subVectors(e,i),Ui.cross(va).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ui.subVectors(this.c,this.b),va.subVectors(this.a,this.b),Ui.cross(va).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Li.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return Li.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return Li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let h,d;Ur.subVectors(l,s),Nr.subVectors(c,s),Ch.subVectors(e,s);const m=Ur.dot(Ch),p=Nr.dot(Ch);if(m<=0&&p<=0)return i.copy(s);wh.subVectors(e,l);const x=Ur.dot(wh),g=Nr.dot(wh);if(x>=0&&g<=x)return i.copy(l);const S=m*g-x*p;if(S<=0&&m>=0&&x<=0)return h=m/(m-x),i.copy(s).addScaledVector(Ur,h);Dh.subVectors(e,c);const y=Ur.dot(Dh),b=Nr.dot(Dh);if(b>=0&&y<=b)return i.copy(c);const C=y*p-m*b;if(C<=0&&p>=0&&b<=0)return d=p/(p-b),i.copy(s).addScaledVector(Nr,d);const M=x*b-y*g;if(M<=0&&g-x>=0&&y-b>=0)return h_.subVectors(c,l),d=(g-x)/(g-x+(y-b)),i.copy(l).addScaledVector(h_,d);const _=1/(M+C+S);return h=C*_,d=S*_,i.copy(s).addScaledVector(Ur,h).addScaledVector(Nr,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const vv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},as={h:0,s:0,l:0},Tc={h:0,s:0,l:0};function Oh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Ae{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=yi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,De.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=De.workingColorSpace){return this.r=e,this.g=i,this.b=s,De.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=De.workingColorSpace){if(e=NM(e,1),i=Te(i,0,1),s=Te(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=Oh(h,c,e+1/3),this.g=Oh(h,c,e),this.b=Oh(h,c,e-1/3)}return De.colorSpaceToWorking(this,l),this}setStyle(e,i=yi){function s(c){c!==void 0&&parseFloat(c)<1&&re("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:re("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);re("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=yi){const s=vv[e.toLowerCase()];return s!==void 0?this.setHex(s,i):re("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ba(e.r),this.g=ba(e.g),this.b=ba(e.b),this}copyLinearToSRGB(e){return this.r=Hr(e.r),this.g=Hr(e.g),this.b=Hr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yi){return De.workingToColorSpace(Fn.copy(this),e),Math.round(Te(Fn.r*255,0,255))*65536+Math.round(Te(Fn.g*255,0,255))*256+Math.round(Te(Fn.b*255,0,255))}getHexString(e=yi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=De.workingColorSpace){De.workingToColorSpace(Fn.copy(this),i);const s=Fn.r,l=Fn.g,c=Fn.b,h=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const x=(d+h)/2;if(d===h)m=0,p=0;else{const g=h-d;switch(p=x<=.5?g/(h+d):g/(2-h-d),h){case s:m=(l-c)/g+(l<c?6:0);break;case l:m=(c-s)/g+2;break;case c:m=(s-l)/g+4;break}m/=6}return e.h=m,e.s=p,e.l=x,e}getRGB(e,i=De.workingColorSpace){return De.workingToColorSpace(Fn.copy(this),i),e.r=Fn.r,e.g=Fn.g,e.b=Fn.b,e}getStyle(e=yi){De.workingToColorSpace(Fn.copy(this),e);const i=Fn.r,s=Fn.g,l=Fn.b;return e!==yi?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(as),this.setHSL(as.h+e,as.s+i,as.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(as),e.getHSL(Tc);const s=gh(as.h,Tc.h,i),l=gh(as.s,Tc.s,i),c=gh(as.l,Tc.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fn=new Ae;Ae.NAMES=vv;let qM=0;class Vs extends qr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qM++}),this.uuid=nl(),this.name="",this.type="Material",this.blending=Ir,this.side=cs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jh,this.blendDst=Zh,this.blendEquation=Fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ae(0,0,0),this.blendAlpha=0,this.depthFunc=Gr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Er,this.stencilZFail=Er,this.stencilZPass=Er,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){re(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){re(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Ir&&(s.blending=this.blending),this.side!==cs&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==jh&&(s.blendSrc=this.blendSrc),this.blendDst!==Zh&&(s.blendDst=this.blendDst),this.blendEquation!==Fs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Gr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qg&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Er&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Er&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Er&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(e.textures),h=l(e.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class zs extends Vs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ji,this.combine=$_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pn=new J,Ac=new Ue;let YM=0;class Pi{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:YM++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=Jg,this.updateRanges=[],this.gpuType=Xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Ac.fromBufferAttribute(this,i),Ac.applyMatrix3(e),this.setXY(i,Ac.x,Ac.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)pn.fromBufferAttribute(this,i),pn.applyMatrix3(e),this.setXYZ(i,pn.x,pn.y,pn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)pn.fromBufferAttribute(this,i),pn.applyMatrix4(e),this.setXYZ(i,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)pn.fromBufferAttribute(this,i),pn.applyNormalMatrix(e),this.setXYZ(i,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)pn.fromBufferAttribute(this,i),pn.transformDirection(e),this.setXYZ(i,pn.x,pn.y,pn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Ho(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Zn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Ho(i,this.array)),i}setX(e,i){return this.normalized&&(i=Zn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Ho(i,this.array)),i}setY(e,i){return this.normalized&&(i=Zn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Ho(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Zn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Ho(i,this.array)),i}setW(e,i){return this.normalized&&(i=Zn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Zn(i,this.array),s=Zn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Zn(i,this.array),s=Zn(s,this.array),l=Zn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=Zn(i,this.array),s=Zn(s,this.array),l=Zn(l,this.array),c=Zn(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jg&&(e.usage=this.usage),e}}class xv extends Pi{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class Sv extends Pi{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class sn extends Pi{constructor(e,i,s){super(new Float32Array(e),i,s)}}let jM=0;const Mi=new Je,Ph=new Mn,Lr=new J,oi=new al,ko=new al,Sn=new J;class Ln extends qr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jM++}),this.uuid=nl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gv(e)?Sv:xv)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new he().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mi.makeRotationFromQuaternion(e),this.applyMatrix4(Mi),this}rotateX(e){return Mi.makeRotationX(e),this.applyMatrix4(Mi),this}rotateY(e){return Mi.makeRotationY(e),this.applyMatrix4(Mi),this}rotateZ(e){return Mi.makeRotationZ(e),this.applyMatrix4(Mi),this}translate(e,i,s){return Mi.makeTranslation(e,i,s),this.applyMatrix4(Mi),this}scale(e,i,s){return Mi.makeScale(e,i,s),this.applyMatrix4(Mi),this}lookAt(e){return Ph.lookAt(e),Ph.updateMatrix(),this.applyMatrix4(Ph.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Lr).negate(),this.translate(Lr.x,Lr.y,Lr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const h=e[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new sn(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new al);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){we("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];oi.setFromBufferAttribute(c),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&we('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){we("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){const s=this.boundingSphere.center;if(oi.setFromBufferAttribute(e),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];ko.setFromBufferAttribute(d),this.morphTargetsRelative?(Sn.addVectors(oi.min,ko.min),oi.expandByPoint(Sn),Sn.addVectors(oi.max,ko.max),oi.expandByPoint(Sn)):(oi.expandByPoint(ko.min),oi.expandByPoint(ko.max))}oi.getCenter(s);let l=0;for(let c=0,h=e.count;c<h;c++)Sn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(Sn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,x=d.count;p<x;p++)Sn.fromBufferAttribute(d,p),m&&(Lr.fromBufferAttribute(e,p),Sn.add(Lr)),l=Math.max(l,s.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&we('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){we("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pi(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let j=0;j<s.count;j++)d[j]=new J,m[j]=new J;const p=new J,x=new J,g=new J,S=new Ue,y=new Ue,b=new Ue,C=new J,M=new J;function _(j,T,w){p.fromBufferAttribute(s,j),x.fromBufferAttribute(s,T),g.fromBufferAttribute(s,w),S.fromBufferAttribute(c,j),y.fromBufferAttribute(c,T),b.fromBufferAttribute(c,w),x.sub(p),g.sub(p),y.sub(S),b.sub(S);const V=1/(y.x*b.y-b.x*y.y);isFinite(V)&&(C.copy(x).multiplyScalar(b.y).addScaledVector(g,-y.y).multiplyScalar(V),M.copy(g).multiplyScalar(y.x).addScaledVector(x,-b.x).multiplyScalar(V),d[j].add(C),d[T].add(C),d[w].add(C),m[j].add(M),m[T].add(M),m[w].add(M))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let j=0,T=L.length;j<T;++j){const w=L[j],V=w.start,q=w.count;for(let Q=V,ut=V+q;Q<ut;Q+=3)_(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}const O=new J,N=new J,F=new J,B=new J;function z(j){F.fromBufferAttribute(l,j),B.copy(F);const T=d[j];O.copy(T),O.sub(F.multiplyScalar(F.dot(T))).normalize(),N.crossVectors(B,T);const V=N.dot(m[j])<0?-1:1;h.setXYZW(j,O.x,O.y,O.z,V)}for(let j=0,T=L.length;j<T;++j){const w=L[j],V=w.start,q=w.count;for(let Q=V,ut=V+q;Q<ut;Q+=3)z(e.getX(Q+0)),z(e.getX(Q+1)),z(e.getX(Q+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Pi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let S=0,y=s.count;S<y;S++)s.setXYZ(S,0,0,0);const l=new J,c=new J,h=new J,d=new J,m=new J,p=new J,x=new J,g=new J;if(e)for(let S=0,y=e.count;S<y;S+=3){const b=e.getX(S+0),C=e.getX(S+1),M=e.getX(S+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,C),h.fromBufferAttribute(i,M),x.subVectors(h,c),g.subVectors(l,c),x.cross(g),d.fromBufferAttribute(s,b),m.fromBufferAttribute(s,C),p.fromBufferAttribute(s,M),d.add(x),m.add(x),p.add(x),s.setXYZ(b,d.x,d.y,d.z),s.setXYZ(C,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let S=0,y=i.count;S<y;S+=3)l.fromBufferAttribute(i,S+0),c.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),x.subVectors(h,c),g.subVectors(l,c),x.cross(g),s.setXYZ(S+0,x.x,x.y,x.z),s.setXYZ(S+1,x.x,x.y,x.z),s.setXYZ(S+2,x.x,x.y,x.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)Sn.fromBufferAttribute(e,i),Sn.normalize(),e.setXYZ(i,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function e(d,m){const p=d.array,x=d.itemSize,g=d.normalized,S=new p.constructor(m.length*x);let y=0,b=0;for(let C=0,M=m.length;C<M;C++){d.isInterleavedBufferAttribute?y=m[C]*d.data.stride+d.offset:y=m[C]*x;for(let _=0;_<x;_++)S[b++]=p[y++]}return new Pi(S,x,g)}if(this.index===null)return re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ln,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let x=0,g=p.length;x<g;x++){const S=p[x],y=e(S,s);m.push(y)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],x=[];for(let g=0,S=p.length;g<S;g++){const y=p[g];x.push(y.toJSON(e.data))}x.length>0&&(l[m]=x,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const p in l){const x=l[p];this.setAttribute(p,x.clone(i))}const c=e.morphAttributes;for(const p in c){const x=[],g=c[p];for(let S=0,y=g.length;S<y;S++)x.push(g[S].clone(i));this.morphAttributes[p]=x}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,x=h.length;p<x;p++){const g=h[p];this.addGroup(g.start,g.count,g.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const d_=new Je,Us=new eu,Rc=new sl,p_=new J,Cc=new J,wc=new J,Dc=new J,Fh=new J,Uc=new J,m_=new J,Nc=new J;class be extends Mn{constructor(e=new Ln,i=new zs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(c&&d){Uc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const x=d[m],g=c[m];x!==0&&(Fh.fromBufferAttribute(g,e),h?Uc.addScaledVector(Fh,x):Uc.addScaledVector(Fh.sub(i),x))}i.add(Uc)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Rc.copy(s.boundingSphere),Rc.applyMatrix4(c),Us.copy(e.ray).recast(e.near),!(Rc.containsPoint(Us.origin)===!1&&(Us.intersectSphere(Rc,p_)===null||Us.origin.distanceToSquared(p_)>(e.far-e.near)**2))&&(d_.copy(c).invert(),Us.copy(e.ray).applyMatrix4(d_),!(s.boundingBox!==null&&Us.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Us)))}_computeIntersections(e,i,s){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,x=c.attributes.uv1,g=c.attributes.normal,S=c.groups,y=c.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,C=S.length;b<C;b++){const M=S[b],_=h[M.materialIndex],L=Math.max(M.start,y.start),O=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let N=L,F=O;N<F;N+=3){const B=d.getX(N),z=d.getX(N+1),j=d.getX(N+2);l=Lc(this,_,e,s,p,x,g,B,z,j),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),C=Math.min(d.count,y.start+y.count);for(let M=b,_=C;M<_;M+=3){const L=d.getX(M),O=d.getX(M+1),N=d.getX(M+2);l=Lc(this,h,e,s,p,x,g,L,O,N),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let b=0,C=S.length;b<C;b++){const M=S[b],_=h[M.materialIndex],L=Math.max(M.start,y.start),O=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let N=L,F=O;N<F;N+=3){const B=N,z=N+1,j=N+2;l=Lc(this,_,e,s,p,x,g,B,z,j),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),C=Math.min(m.count,y.start+y.count);for(let M=b,_=C;M<_;M+=3){const L=M,O=M+1,N=M+2;l=Lc(this,h,e,s,p,x,g,L,O,N),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function ZM(o,e,i,s,l,c,h,d){let m;if(e.side===Kn?m=s.intersectTriangle(h,c,l,!0,d):m=s.intersectTriangle(l,c,h,e.side===cs,d),m===null)return null;Nc.copy(d),Nc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(Nc);return p<i.near||p>i.far?null:{distance:p,point:Nc.clone(),object:o}}function Lc(o,e,i,s,l,c,h,d,m,p){o.getVertexPosition(d,Cc),o.getVertexPosition(m,wc),o.getVertexPosition(p,Dc);const x=ZM(o,e,i,s,Cc,wc,Dc,m_);if(x){const g=new J;Li.getBarycoord(m_,Cc,wc,Dc,g),l&&(x.uv=Li.getInterpolatedAttribute(l,d,m,p,g,new Ue)),c&&(x.uv1=Li.getInterpolatedAttribute(c,d,m,p,g,new Ue)),h&&(x.normal=Li.getInterpolatedAttribute(h,d,m,p,g,new J),x.normal.dot(s.direction)>0&&x.normal.multiplyScalar(-1));const S={a:d,b:m,c:p,normal:new J,materialIndex:0};Li.getNormal(Cc,wc,Dc,S.normal),x.face=S,x.barycoord=g}return x}class ya extends Ln{constructor(e=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],x=[],g=[];let S=0,y=0;b("z","y","x",-1,-1,s,i,e,h,c,0),b("z","y","x",1,-1,s,i,-e,h,c,1),b("x","z","y",1,1,e,s,i,l,h,2),b("x","z","y",1,-1,e,s,-i,l,h,3),b("x","y","z",1,-1,e,i,s,l,c,4),b("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new sn(p,3)),this.setAttribute("normal",new sn(x,3)),this.setAttribute("uv",new sn(g,2));function b(C,M,_,L,O,N,F,B,z,j,T){const w=N/z,V=F/j,q=N/2,Q=F/2,ut=B/2,pt=z+1,P=j+1;let I=0,at=0;const Ut=new J;for(let St=0;St<P;St++){const D=St*V-Q;for(let tt=0;tt<pt;tt++){const Et=tt*w-q;Ut[C]=Et*L,Ut[M]=D*O,Ut[_]=ut,p.push(Ut.x,Ut.y,Ut.z),Ut[C]=0,Ut[M]=0,Ut[_]=B>0?1:-1,x.push(Ut.x,Ut.y,Ut.z),g.push(tt/z),g.push(1-St/j),I+=1}}for(let St=0;St<j;St++)for(let D=0;D<z;D++){const tt=S+D+pt*St,Et=S+D+pt*(St+1),Ot=S+(D+1)+pt*(St+1),Vt=S+(D+1)+pt*St;m.push(tt,Et,Vt),m.push(Et,Ot,Vt),at+=6}d.addGroup(y,at,T),y+=at,S+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ya(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Wr(o){const e={};for(const i in o){e[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function Hn(o){const e={};for(let i=0;i<o.length;i++){const s=Wr(o[i]);for(const l in s)e[l]=s[l]}return e}function KM(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function Mv(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:De.workingColorSpace}const QM={clone:Wr,merge:Hn};var JM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$M=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zi extends Vs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=JM,this.fragmentShader=$M,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wr(e.uniforms),this.uniformsGroups=KM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class yv extends Mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ss=new J,g_=new Ue,__=new Ue;class Ei extends yv{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Id*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(mh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Id*2*Math.atan(Math.tan(mh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){ss.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ss.x,ss.y).multiplyScalar(-e/ss.z),ss.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ss.x,ss.y).multiplyScalar(-e/ss.z)}getViewSize(e,i){return this.getViewBounds(e,g_,__),i.subVectors(__,g_)}setViewOffset(e,i,s,l,c,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(mh*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Or=-90,Pr=1;class ty extends Mn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ei(Or,Pr,e,i);l.layers=this.layers,this.add(l);const c=new Ei(Or,Pr,e,i);c.layers=this.layers,this.add(c);const h=new Ei(Or,Pr,e,i);h.layers=this.layers,this.add(h);const d=new Ei(Or,Pr,e,i);d.layers=this.layers,this.add(d);const m=new Ei(Or,Pr,e,i);m.layers=this.layers,this.add(m);const p=new Ei(Or,Pr,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(e===ki)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===jc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,x]=this.children,g=e.getRenderTarget(),S=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,c),e.setRenderTarget(s,1,l),e.render(i,h),e.setRenderTarget(s,2,l),e.render(i,d),e.setRenderTarget(s,3,l),e.render(i,m),e.setRenderTarget(s,4,l),e.render(i,p),s.texture.generateMipmaps=C,e.setRenderTarget(s,5,l),e.render(i,x),e.setRenderTarget(g,S,y),e.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class Ev extends Vn{constructor(e=[],i=Gs,s,l,c,h,d,m,p,x){super(e,i,s,l,c,h,d,m,p,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bv extends qi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new Ev(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new ya(5,5,5),c=new Zi({name:"CubemapFromEquirect",uniforms:Wr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Kn,blending:Ea});c.uniforms.tEquirect.value=i;const h=new be(l,c),d=i.minFilter;return i.minFilter===Is&&(i.minFilter=zn),new ty(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,s,l);e.setRenderTarget(c)}}class Br extends Mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ey={type:"move"};class zh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Br,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Br,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Br,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const C of e.hand.values()){const M=i.getJointPose(C,s),_=this._getHandJoint(p,C);M!==null&&(_.matrix.fromArray(M.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=M.radius),_.visible=M!==null}const x=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],S=x.position.distanceTo(g.position),y=.02,b=.005;p.inputState.pinching&&S>y+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&S<=y-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(ey)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Br;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}class np{constructor(e,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ae(e),this.density=i}clone(){return new np(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ny extends Mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ji,this.environmentIntensity=1,this.environmentRotation=new ji,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class iy extends Vn{constructor(e=null,i=1,s=1,l,c,h,d,m,p=Nn,x=Nn,g,S){super(null,h,d,m,p,x,l,c,g,S),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Bh=new J,ay=new J,sy=new he;class Ps{constructor(e=new J(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Bh.subVectors(s,i).cross(ay.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(Bh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(s,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||sy.getNormalMatrix(e),l=this.coplanarPoint(Bh).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ns=new sl,ry=new Ue(.5,.5),Oc=new J;class ip{constructor(e=new Ps,i=new Ps,s=new Ps,l=new Ps,c=new Ps,h=new Ps){this.planes=[e,i,s,l,c,h]}set(e,i,s,l,c,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=ki,s=!1){const l=this.planes,c=e.elements,h=c[0],d=c[1],m=c[2],p=c[3],x=c[4],g=c[5],S=c[6],y=c[7],b=c[8],C=c[9],M=c[10],_=c[11],L=c[12],O=c[13],N=c[14],F=c[15];if(l[0].setComponents(p-h,y-x,_-b,F-L).normalize(),l[1].setComponents(p+h,y+x,_+b,F+L).normalize(),l[2].setComponents(p+d,y+g,_+C,F+O).normalize(),l[3].setComponents(p-d,y-g,_-C,F-O).normalize(),s)l[4].setComponents(m,S,M,N).normalize(),l[5].setComponents(p-m,y-S,_-M,F-N).normalize();else if(l[4].setComponents(p-m,y-S,_-M,F-N).normalize(),i===ki)l[5].setComponents(p+m,y+S,_+M,F+N).normalize();else if(i===jc)l[5].setComponents(m,S,M,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ns.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ns.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ns)}intersectsSprite(e){Ns.center.set(0,0,0);const i=ry.distanceTo(e.center);return Ns.radius=.7071067811865476+i,Ns.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ns)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Oc.x=l.normal.x>0?e.max.x:e.min.x,Oc.y=l.normal.y>0?e.max.y:e.min.y,Oc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Oc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Tv extends Vs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ae(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Kc=new J,Qc=new J,v_=new Je,Wo=new eu,Pc=new sl,Ih=new J,x_=new J;class oy extends Mn{constructor(e=new Ln,i=new Tv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)Kc.fromBufferAttribute(i,l-1),Qc.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=Kc.distanceTo(Qc);e.setAttribute("lineDistance",new sn(s,1))}else re("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Pc.copy(s.boundingSphere),Pc.applyMatrix4(l),Pc.radius+=c,e.ray.intersectsSphere(Pc)===!1)return;v_.copy(l).invert(),Wo.copy(e.ray).applyMatrix4(v_);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,x=s.index,S=s.attributes.position;if(x!==null){const y=Math.max(0,h.start),b=Math.min(x.count,h.start+h.count);for(let C=y,M=b-1;C<M;C+=p){const _=x.getX(C),L=x.getX(C+1),O=Fc(this,e,Wo,m,_,L,C);O&&i.push(O)}if(this.isLineLoop){const C=x.getX(b-1),M=x.getX(y),_=Fc(this,e,Wo,m,C,M,b-1);_&&i.push(_)}}else{const y=Math.max(0,h.start),b=Math.min(S.count,h.start+h.count);for(let C=y,M=b-1;C<M;C+=p){const _=Fc(this,e,Wo,m,C,C+1,C);_&&i.push(_)}if(this.isLineLoop){const C=Fc(this,e,Wo,m,b-1,y,b-1);C&&i.push(C)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Fc(o,e,i,s,l,c,h){const d=o.geometry.attributes.position;if(Kc.fromBufferAttribute(d,l),Qc.fromBufferAttribute(d,c),i.distanceSqToSegment(Kc,Qc,Ih,x_)>s)return;Ih.applyMatrix4(o.matrixWorld);const p=e.ray.origin.distanceTo(Ih);if(!(p<e.near||p>e.far))return{distance:p,point:x_.clone().applyMatrix4(o.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:o}}class Av extends Vs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const S_=new Je,Hd=new eu,zc=new sl,Bc=new J;class ly extends Mn{constructor(e=new Ln,i=new Av){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),zc.copy(s.boundingSphere),zc.applyMatrix4(l),zc.radius+=c,e.ray.intersectsSphere(zc)===!1)return;S_.copy(l).invert(),Hd.copy(e.ray).applyMatrix4(S_);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=s.index,g=s.attributes.position;if(p!==null){const S=Math.max(0,h.start),y=Math.min(p.count,h.start+h.count);for(let b=S,C=y;b<C;b++){const M=p.getX(b);Bc.fromBufferAttribute(g,M),M_(Bc,M,m,l,e,i,this)}}else{const S=Math.max(0,h.start),y=Math.min(g.count,h.start+h.count);for(let b=S,C=y;b<C;b++)Bc.fromBufferAttribute(g,b),M_(Bc,b,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function M_(o,e,i,s,l,c,h){const d=Hd.distanceSqToPoint(o);if(d<i){const m=new J;Hd.closestPointToPoint(o,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:h})}}class el extends Vn{constructor(e,i,s=Yi,l,c,h,d=Nn,m=Nn,p,x=Aa,g=1){if(x!==Aa&&x!==Hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:e,height:i,depth:g};super(S,l,c,h,d,m,x,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new tp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class cy extends el{constructor(e,i=Yi,s=Gs,l,c,h=Nn,d=Nn,m,p=Aa){const x={width:e,height:e,depth:1},g=[x,x,x,x,x,x];super(e,e,i,s,l,c,h,d,m,p),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Rv extends Vn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Qo extends Ln{constructor(e=1,i=1,s=4,l=8,c=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:i,capSegments:s,radialSegments:l,heightSegments:c},i=Math.max(0,i),s=Math.max(1,Math.floor(s)),l=Math.max(3,Math.floor(l)),c=Math.max(1,Math.floor(c));const h=[],d=[],m=[],p=[],x=i/2,g=Math.PI/2*e,S=i,y=2*g+S,b=s*2+c,C=l+1,M=new J,_=new J;for(let L=0;L<=b;L++){let O=0,N=0,F=0,B=0;if(L<=s){const T=L/s,w=T*Math.PI/2;N=-x-e*Math.cos(w),F=e*Math.sin(w),B=-e*Math.cos(w),O=T*g}else if(L<=s+c){const T=(L-s)/c;N=-x+T*i,F=e,B=0,O=g+T*S}else{const T=(L-s-c)/s,w=T*Math.PI/2;N=x+e*Math.sin(w),F=e*Math.cos(w),B=e*Math.sin(w),O=g+S+T*g}const z=Math.max(0,Math.min(1,O/y));let j=0;L===0?j=.5/l:L===b&&(j=-.5/l);for(let T=0;T<=l;T++){const w=T/l,V=w*Math.PI*2,q=Math.sin(V),Q=Math.cos(V);_.x=-F*Q,_.y=N,_.z=F*q,d.push(_.x,_.y,_.z),M.set(-F*Q,B,F*q),M.normalize(),m.push(M.x,M.y,M.z),p.push(w+j,z)}if(L>0){const T=(L-1)*C;for(let w=0;w<l;w++){const V=T+w,q=T+w+1,Q=L*C+w,ut=L*C+w+1;h.push(V,q,Q),h.push(q,ut,Q)}}}this.setIndex(h),this.setAttribute("position",new sn(d,3)),this.setAttribute("normal",new sn(m,3)),this.setAttribute("uv",new sn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qo(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class ap extends Ln{constructor(e=1,i=1,s=1,l=32,c=1,h=!1,d=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:h,thetaStart:d,thetaLength:m};const p=this;l=Math.floor(l),c=Math.floor(c);const x=[],g=[],S=[],y=[];let b=0;const C=[],M=s/2;let _=0;L(),h===!1&&(e>0&&O(!0),i>0&&O(!1)),this.setIndex(x),this.setAttribute("position",new sn(g,3)),this.setAttribute("normal",new sn(S,3)),this.setAttribute("uv",new sn(y,2));function L(){const N=new J,F=new J;let B=0;const z=(i-e)/s;for(let j=0;j<=c;j++){const T=[],w=j/c,V=w*(i-e)+e;for(let q=0;q<=l;q++){const Q=q/l,ut=Q*m+d,pt=Math.sin(ut),P=Math.cos(ut);F.x=V*pt,F.y=-w*s+M,F.z=V*P,g.push(F.x,F.y,F.z),N.set(pt,z,P).normalize(),S.push(N.x,N.y,N.z),y.push(Q,1-w),T.push(b++)}C.push(T)}for(let j=0;j<l;j++)for(let T=0;T<c;T++){const w=C[T][j],V=C[T+1][j],q=C[T+1][j+1],Q=C[T][j+1];(e>0||T!==0)&&(x.push(w,V,Q),B+=3),(i>0||T!==c-1)&&(x.push(V,q,Q),B+=3)}p.addGroup(_,B,0),_+=B}function O(N){const F=b,B=new Ue,z=new J;let j=0;const T=N===!0?e:i,w=N===!0?1:-1;for(let q=1;q<=l;q++)g.push(0,M*w,0),S.push(0,w,0),y.push(.5,.5),b++;const V=b;for(let q=0;q<=l;q++){const ut=q/l*m+d,pt=Math.cos(ut),P=Math.sin(ut);z.x=T*P,z.y=M*w,z.z=T*pt,g.push(z.x,z.y,z.z),S.push(0,w,0),B.x=pt*.5+.5,B.y=P*.5*w+.5,y.push(B.x,B.y),b++}for(let q=0;q<l;q++){const Q=F+q,ut=V+q;N===!0?x.push(ut,ut+1,Q):x.push(ut+1,ut,Q),j+=3}p.addGroup(_,j,N===!0?1:2),_+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ap(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Jc extends ap{constructor(e=1,i=1,s=32,l=1,c=!1,h=0,d=Math.PI*2){super(0,e,i,s,l,c,h,d),this.type="ConeGeometry",this.parameters={radius:e,height:i,radialSegments:s,heightSegments:l,openEnded:c,thetaStart:h,thetaLength:d}}static fromJSON(e){return new Jc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class rl extends Ln{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,x=m+1,g=e/d,S=i/m,y=[],b=[],C=[],M=[];for(let _=0;_<x;_++){const L=_*S-h;for(let O=0;O<p;O++){const N=O*g-c;b.push(N,-L,0),C.push(0,0,1),M.push(O/d),M.push(1-_/m)}}for(let _=0;_<m;_++)for(let L=0;L<d;L++){const O=L+p*_,N=L+p*(_+1),F=L+1+p*(_+1),B=L+1+p*_;y.push(O,N,B),y.push(N,F,B)}this.setIndex(y),this.setAttribute("position",new sn(b,3)),this.setAttribute("normal",new sn(C,3)),this.setAttribute("uv",new sn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rl(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ni extends Ln{constructor(e=1,i=32,s=16,l=0,c=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(h+d,Math.PI);let p=0;const x=[],g=new J,S=new J,y=[],b=[],C=[],M=[];for(let _=0;_<=s;_++){const L=[],O=_/s;let N=0;_===0&&h===0?N=.5/i:_===s&&m===Math.PI&&(N=-.5/i);for(let F=0;F<=i;F++){const B=F/i;g.x=-e*Math.cos(l+B*c)*Math.sin(h+O*d),g.y=e*Math.cos(h+O*d),g.z=e*Math.sin(l+B*c)*Math.sin(h+O*d),b.push(g.x,g.y,g.z),S.copy(g).normalize(),C.push(S.x,S.y,S.z),M.push(B+N,1-O),L.push(p++)}x.push(L)}for(let _=0;_<s;_++)for(let L=0;L<i;L++){const O=x[_][L+1],N=x[_][L],F=x[_+1][L],B=x[_+1][L+1];(_!==0||h>0)&&y.push(O,N,B),(_!==s-1||m<Math.PI)&&y.push(N,F,B)}this.setIndex(y),this.setAttribute("position",new sn(b,3)),this.setAttribute("normal",new sn(C,3)),this.setAttribute("uv",new sn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ni(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class $c extends Ln{constructor(e=1,i=.4,s=12,l=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:i,radialSegments:s,tubularSegments:l,arc:c},s=Math.floor(s),l=Math.floor(l);const h=[],d=[],m=[],p=[],x=new J,g=new J,S=new J;for(let y=0;y<=s;y++)for(let b=0;b<=l;b++){const C=b/l*c,M=y/s*Math.PI*2;g.x=(e+i*Math.cos(M))*Math.cos(C),g.y=(e+i*Math.cos(M))*Math.sin(C),g.z=i*Math.sin(M),d.push(g.x,g.y,g.z),x.x=e*Math.cos(C),x.y=e*Math.sin(C),S.subVectors(g,x).normalize(),m.push(S.x,S.y,S.z),p.push(b/l),p.push(y/s)}for(let y=1;y<=s;y++)for(let b=1;b<=l;b++){const C=(l+1)*y+b-1,M=(l+1)*(y-1)+b-1,_=(l+1)*(y-1)+b,L=(l+1)*y+b;h.push(C,M,L),h.push(M,_,L)}this.setIndex(h),this.setAttribute("position",new sn(d,3)),this.setAttribute("normal",new sn(m,3)),this.setAttribute("uv",new sn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $c(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class uy extends Zi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class rs extends Vs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mv,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ji,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class fy extends Vs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class hy extends Vs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Cv extends Mn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ae(e),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const Hh=new Je,y_=new J,E_=new J;class dy{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.mapType=li,this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ip,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new an(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;y_.setFromMatrixPosition(e.matrixWorld),i.position.copy(y_),E_.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(E_),i.updateMatrixWorld(),Hh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Hh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class sp extends yv{constructor(e=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,h=s+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=x*this.view.offsetY,m=d-x*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class py extends dy{constructor(){super(new sp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class my extends Cv{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.target=new Mn,this.shadow=new py}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class gy extends Cv{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class _y extends Ei{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const b_=new Je;class vy{constructor(e,i,s=0,l=1/0){this.ray=new eu(e,i),this.near=s,this.far=l,this.camera=null,this.layers=new ep,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):we("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return b_.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(b_),this}intersectObject(e,i=!0,s=[]){return Gd(e,this,s,i),s.sort(T_),s}intersectObjects(e,i=!0,s=[]){for(let l=0,c=e.length;l<c;l++)Gd(e[l],this,s,i);return s.sort(T_),s}}function T_(o,e){return o.distance-e.distance}function Gd(o,e,i,s){let l=!0;if(o.layers.test(e.layers)&&o.raycast(e,i)===!1&&(l=!1),l===!0&&s===!0){const c=o.children;for(let h=0,d=c.length;h<d;h++)Gd(c[h],e,i,!0)}}function A_(o,e,i,s){const l=xy(s);switch(i){case hv:return o*e;case pv:return o*e/l.components*l.byteLength;case Zd:return o*e/l.components*l.byteLength;case Xr:return o*e*2/l.components*l.byteLength;case Kd:return o*e*2/l.components*l.byteLength;case dv:return o*e*3/l.components*l.byteLength;case Oi:return o*e*4/l.components*l.byteLength;case Qd:return o*e*4/l.components*l.byteLength;case Vc:case Xc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case kc:case Wc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case ld:case ud:return Math.max(o,16)*Math.max(e,8)/4;case od:case cd:return Math.max(o,8)*Math.max(e,8)/2;case fd:case hd:case pd:case md:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case dd:case gd:case _d:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case vd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case xd:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Sd:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Md:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case yd:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Ed:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case bd:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Td:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Ad:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Rd:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Cd:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case wd:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Dd:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Ud:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Nd:case Ld:case Od:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Pd:case Fd:return Math.ceil(o/4)*Math.ceil(e/4)*8;case zd:case Bd:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function xy(o){switch(o){case li:case lv:return{byteLength:1,components:1};case Jo:case cv:case Ta:return{byteLength:2,components:1};case Yd:case jd:return{byteLength:2,components:4};case Yi:case qd:case Xi:return{byteLength:4,components:1};case uv:case fv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wd}}));typeof window<"u"&&(window.__THREE__?re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function wv(){let o=null,e=!1,i=null,s=null;function l(c,h){i(c,h),s=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function Sy(o){const e=new WeakMap;function i(d,m){const p=d.array,x=d.usage,g=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,x),d.onUploadCallback();let y;if(p instanceof Float32Array)y=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=o.SHORT;else if(p instanceof Uint32Array)y=o.UNSIGNED_INT;else if(p instanceof Int32Array)y=o.INT;else if(p instanceof Int8Array)y=o.BYTE;else if(p instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:g}}function s(d,m,p){const x=m.array,g=m.updateRanges;if(o.bindBuffer(p,d),g.length===0)o.bufferSubData(p,0,x);else{g.sort((y,b)=>y.start-b.start);let S=0;for(let y=1;y<g.length;y++){const b=g[S],C=g[y];C.start<=b.start+b.count+1?b.count=Math.max(b.count,C.start+C.count-b.start):(++S,g[S]=C)}g.length=S+1;for(let y=0,b=g.length;y<b;y++){const C=g[y];o.bufferSubData(p,C.start*x.BYTES_PER_ELEMENT,x,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(o.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const x=e.get(d);(!x||x.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var My=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ey=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,by=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ty=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ay=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ry=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Cy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Dy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Uy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ny=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ly=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Oy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Py=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Fy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,zy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,By=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Iy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Gy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Xy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ky=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Wy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,qy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Yy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ky=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$y=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,tE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,eE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,nE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,iE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,aE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,oE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,cE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,dE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,pE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_E=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,xE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,SE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ME=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,yE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,EE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,AE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,RE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,CE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,DE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,UE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,NE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,LE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,OE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,PE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,FE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,zE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,BE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,IE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,HE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,XE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,kE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,WE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,YE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ZE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,KE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,QE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,JE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$E=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,ib=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ab=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,sb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,rb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ob=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,lb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ub=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,db=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,pb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,mb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,gb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_b=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,xb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Sb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Eb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ab=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Rb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Cb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,wb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Db=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ub=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Lb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ob=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Pb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ib=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Gb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Vb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Wb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Zb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Kb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Jb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$b=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,de={alphahash_fragment:My,alphahash_pars_fragment:yy,alphamap_fragment:Ey,alphamap_pars_fragment:by,alphatest_fragment:Ty,alphatest_pars_fragment:Ay,aomap_fragment:Ry,aomap_pars_fragment:Cy,batching_pars_vertex:wy,batching_vertex:Dy,begin_vertex:Uy,beginnormal_vertex:Ny,bsdfs:Ly,iridescence_fragment:Oy,bumpmap_pars_fragment:Py,clipping_planes_fragment:Fy,clipping_planes_pars_fragment:zy,clipping_planes_pars_vertex:By,clipping_planes_vertex:Iy,color_fragment:Hy,color_pars_fragment:Gy,color_pars_vertex:Vy,color_vertex:Xy,common:ky,cube_uv_reflection_fragment:Wy,defaultnormal_vertex:qy,displacementmap_pars_vertex:Yy,displacementmap_vertex:jy,emissivemap_fragment:Zy,emissivemap_pars_fragment:Ky,colorspace_fragment:Qy,colorspace_pars_fragment:Jy,envmap_fragment:$y,envmap_common_pars_fragment:tE,envmap_pars_fragment:eE,envmap_pars_vertex:nE,envmap_physical_pars_fragment:dE,envmap_vertex:iE,fog_vertex:aE,fog_pars_vertex:sE,fog_fragment:rE,fog_pars_fragment:oE,gradientmap_pars_fragment:lE,lightmap_pars_fragment:cE,lights_lambert_fragment:uE,lights_lambert_pars_fragment:fE,lights_pars_begin:hE,lights_toon_fragment:pE,lights_toon_pars_fragment:mE,lights_phong_fragment:gE,lights_phong_pars_fragment:_E,lights_physical_fragment:vE,lights_physical_pars_fragment:xE,lights_fragment_begin:SE,lights_fragment_maps:ME,lights_fragment_end:yE,logdepthbuf_fragment:EE,logdepthbuf_pars_fragment:bE,logdepthbuf_pars_vertex:TE,logdepthbuf_vertex:AE,map_fragment:RE,map_pars_fragment:CE,map_particle_fragment:wE,map_particle_pars_fragment:DE,metalnessmap_fragment:UE,metalnessmap_pars_fragment:NE,morphinstance_vertex:LE,morphcolor_vertex:OE,morphnormal_vertex:PE,morphtarget_pars_vertex:FE,morphtarget_vertex:zE,normal_fragment_begin:BE,normal_fragment_maps:IE,normal_pars_fragment:HE,normal_pars_vertex:GE,normal_vertex:VE,normalmap_pars_fragment:XE,clearcoat_normal_fragment_begin:kE,clearcoat_normal_fragment_maps:WE,clearcoat_pars_fragment:qE,iridescence_pars_fragment:YE,opaque_fragment:jE,packing:ZE,premultiplied_alpha_fragment:KE,project_vertex:QE,dithering_fragment:JE,dithering_pars_fragment:$E,roughnessmap_fragment:tb,roughnessmap_pars_fragment:eb,shadowmap_pars_fragment:nb,shadowmap_pars_vertex:ib,shadowmap_vertex:ab,shadowmask_pars_fragment:sb,skinbase_vertex:rb,skinning_pars_vertex:ob,skinning_vertex:lb,skinnormal_vertex:cb,specularmap_fragment:ub,specularmap_pars_fragment:fb,tonemapping_fragment:hb,tonemapping_pars_fragment:db,transmission_fragment:pb,transmission_pars_fragment:mb,uv_pars_fragment:gb,uv_pars_vertex:_b,uv_vertex:vb,worldpos_vertex:xb,background_vert:Sb,background_frag:Mb,backgroundCube_vert:yb,backgroundCube_frag:Eb,cube_vert:bb,cube_frag:Tb,depth_vert:Ab,depth_frag:Rb,distance_vert:Cb,distance_frag:wb,equirect_vert:Db,equirect_frag:Ub,linedashed_vert:Nb,linedashed_frag:Lb,meshbasic_vert:Ob,meshbasic_frag:Pb,meshlambert_vert:Fb,meshlambert_frag:zb,meshmatcap_vert:Bb,meshmatcap_frag:Ib,meshnormal_vert:Hb,meshnormal_frag:Gb,meshphong_vert:Vb,meshphong_frag:Xb,meshphysical_vert:kb,meshphysical_frag:Wb,meshtoon_vert:qb,meshtoon_frag:Yb,points_vert:jb,points_frag:Zb,shadow_vert:Kb,shadow_frag:Qb,sprite_vert:Jb,sprite_frag:$b},Gt={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new he}},envmap:{envMap:{value:null},envMapRotation:{value:new he},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new he}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new he}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new he},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new he},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new he},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new he}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new he}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new he}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0},uvTransform:{value:new he}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}}},Gi={basic:{uniforms:Hn([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:Hn([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,Gt.lights,{emissive:{value:new Ae(0)}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:Hn([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,Gt.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:Hn([Gt.common,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.roughnessmap,Gt.metalnessmap,Gt.fog,Gt.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:Hn([Gt.common,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.gradientmap,Gt.fog,Gt.lights,{emissive:{value:new Ae(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:Hn([Gt.common,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:Hn([Gt.points,Gt.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:Hn([Gt.common,Gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:Hn([Gt.common,Gt.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:Hn([Gt.common,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:Hn([Gt.sprite,Gt.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new he},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new he}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distance:{uniforms:Hn([Gt.common,Gt.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distance_vert,fragmentShader:de.distance_frag},shadow:{uniforms:Hn([Gt.lights,Gt.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};Gi.physical={uniforms:Hn([Gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new he},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new he},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new he},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new he},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new he},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new he},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new he},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new he},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new he},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new he},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new he},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new he}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};const Ic={r:0,b:0,g:0},Ls=new ji,tT=new Je;function eT(o,e,i,s,l,c,h){const d=new Ae(0);let m=c===!0?0:1,p,x,g=null,S=0,y=null;function b(O){let N=O.isScene===!0?O.background:null;return N&&N.isTexture&&(N=(O.backgroundBlurriness>0?i:e).get(N)),N}function C(O){let N=!1;const F=b(O);F===null?_(d,m):F&&F.isColor&&(_(F,1),N=!0);const B=o.xr.getEnvironmentBlendMode();B==="additive"?s.buffers.color.setClear(0,0,0,1,h):B==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||N)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(O,N){const F=b(N);F&&(F.isCubeTexture||F.mapping===tu)?(x===void 0&&(x=new be(new ya(1,1,1),new Zi({name:"BackgroundCubeMaterial",uniforms:Wr(Gi.backgroundCube.uniforms),vertexShader:Gi.backgroundCube.vertexShader,fragmentShader:Gi.backgroundCube.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(B,z,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(x)),Ls.copy(N.backgroundRotation),Ls.x*=-1,Ls.y*=-1,Ls.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(Ls.y*=-1,Ls.z*=-1),x.material.uniforms.envMap.value=F,x.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(tT.makeRotationFromEuler(Ls)),x.material.toneMapped=De.getTransfer(F.colorSpace)!==Ge,(g!==F||S!==F.version||y!==o.toneMapping)&&(x.material.needsUpdate=!0,g=F,S=F.version,y=o.toneMapping),x.layers.enableAll(),O.unshift(x,x.geometry,x.material,0,0,null)):F&&F.isTexture&&(p===void 0&&(p=new be(new rl(2,2),new Zi({name:"BackgroundMaterial",uniforms:Wr(Gi.background.uniforms),vertexShader:Gi.background.vertexShader,fragmentShader:Gi.background.fragmentShader,side:cs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=F,p.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,p.material.toneMapped=De.getTransfer(F.colorSpace)!==Ge,F.matrixAutoUpdate===!0&&F.updateMatrix(),p.material.uniforms.uvTransform.value.copy(F.matrix),(g!==F||S!==F.version||y!==o.toneMapping)&&(p.material.needsUpdate=!0,g=F,S=F.version,y=o.toneMapping),p.layers.enableAll(),O.unshift(p,p.geometry,p.material,0,0,null))}function _(O,N){O.getRGB(Ic,Mv(o)),s.buffers.color.setClear(Ic.r,Ic.g,Ic.b,N,h)}function L(){x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(O,N=1){d.set(O),m=N,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(O){m=O,_(d,m)},render:C,addToRenderList:M,dispose:L}}function nT(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=S(null);let c=l,h=!1;function d(w,V,q,Q,ut){let pt=!1;const P=g(Q,q,V);c!==P&&(c=P,p(c.object)),pt=y(w,Q,q,ut),pt&&b(w,Q,q,ut),ut!==null&&e.update(ut,o.ELEMENT_ARRAY_BUFFER),(pt||h)&&(h=!1,N(w,V,q,Q),ut!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(ut).buffer))}function m(){return o.createVertexArray()}function p(w){return o.bindVertexArray(w)}function x(w){return o.deleteVertexArray(w)}function g(w,V,q){const Q=q.wireframe===!0;let ut=s[w.id];ut===void 0&&(ut={},s[w.id]=ut);let pt=ut[V.id];pt===void 0&&(pt={},ut[V.id]=pt);let P=pt[Q];return P===void 0&&(P=S(m()),pt[Q]=P),P}function S(w){const V=[],q=[],Q=[];for(let ut=0;ut<i;ut++)V[ut]=0,q[ut]=0,Q[ut]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:q,attributeDivisors:Q,object:w,attributes:{},index:null}}function y(w,V,q,Q){const ut=c.attributes,pt=V.attributes;let P=0;const I=q.getAttributes();for(const at in I)if(I[at].location>=0){const St=ut[at];let D=pt[at];if(D===void 0&&(at==="instanceMatrix"&&w.instanceMatrix&&(D=w.instanceMatrix),at==="instanceColor"&&w.instanceColor&&(D=w.instanceColor)),St===void 0||St.attribute!==D||D&&St.data!==D.data)return!0;P++}return c.attributesNum!==P||c.index!==Q}function b(w,V,q,Q){const ut={},pt=V.attributes;let P=0;const I=q.getAttributes();for(const at in I)if(I[at].location>=0){let St=pt[at];St===void 0&&(at==="instanceMatrix"&&w.instanceMatrix&&(St=w.instanceMatrix),at==="instanceColor"&&w.instanceColor&&(St=w.instanceColor));const D={};D.attribute=St,St&&St.data&&(D.data=St.data),ut[at]=D,P++}c.attributes=ut,c.attributesNum=P,c.index=Q}function C(){const w=c.newAttributes;for(let V=0,q=w.length;V<q;V++)w[V]=0}function M(w){_(w,0)}function _(w,V){const q=c.newAttributes,Q=c.enabledAttributes,ut=c.attributeDivisors;q[w]=1,Q[w]===0&&(o.enableVertexAttribArray(w),Q[w]=1),ut[w]!==V&&(o.vertexAttribDivisor(w,V),ut[w]=V)}function L(){const w=c.newAttributes,V=c.enabledAttributes;for(let q=0,Q=V.length;q<Q;q++)V[q]!==w[q]&&(o.disableVertexAttribArray(q),V[q]=0)}function O(w,V,q,Q,ut,pt,P){P===!0?o.vertexAttribIPointer(w,V,q,ut,pt):o.vertexAttribPointer(w,V,q,Q,ut,pt)}function N(w,V,q,Q){C();const ut=Q.attributes,pt=q.getAttributes(),P=V.defaultAttributeValues;for(const I in pt){const at=pt[I];if(at.location>=0){let Ut=ut[I];if(Ut===void 0&&(I==="instanceMatrix"&&w.instanceMatrix&&(Ut=w.instanceMatrix),I==="instanceColor"&&w.instanceColor&&(Ut=w.instanceColor)),Ut!==void 0){const St=Ut.normalized,D=Ut.itemSize,tt=e.get(Ut);if(tt===void 0)continue;const Et=tt.buffer,Ot=tt.type,Vt=tt.bytesPerElement,it=Ot===o.INT||Ot===o.UNSIGNED_INT||Ut.gpuType===qd;if(Ut.isInterleavedBufferAttribute){const dt=Ut.data,Ft=dt.stride,Wt=Ut.offset;if(dt.isInstancedInterleavedBuffer){for(let Xt=0;Xt<at.locationSize;Xt++)_(at.location+Xt,dt.meshPerAttribute);w.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let Xt=0;Xt<at.locationSize;Xt++)M(at.location+Xt);o.bindBuffer(o.ARRAY_BUFFER,Et);for(let Xt=0;Xt<at.locationSize;Xt++)O(at.location+Xt,D/at.locationSize,Ot,St,Ft*Vt,(Wt+D/at.locationSize*Xt)*Vt,it)}else{if(Ut.isInstancedBufferAttribute){for(let dt=0;dt<at.locationSize;dt++)_(at.location+dt,Ut.meshPerAttribute);w.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=Ut.meshPerAttribute*Ut.count)}else for(let dt=0;dt<at.locationSize;dt++)M(at.location+dt);o.bindBuffer(o.ARRAY_BUFFER,Et);for(let dt=0;dt<at.locationSize;dt++)O(at.location+dt,D/at.locationSize,Ot,St,D*Vt,D/at.locationSize*dt*Vt,it)}}else if(P!==void 0){const St=P[I];if(St!==void 0)switch(St.length){case 2:o.vertexAttrib2fv(at.location,St);break;case 3:o.vertexAttrib3fv(at.location,St);break;case 4:o.vertexAttrib4fv(at.location,St);break;default:o.vertexAttrib1fv(at.location,St)}}}}L()}function F(){j();for(const w in s){const V=s[w];for(const q in V){const Q=V[q];for(const ut in Q)x(Q[ut].object),delete Q[ut];delete V[q]}delete s[w]}}function B(w){if(s[w.id]===void 0)return;const V=s[w.id];for(const q in V){const Q=V[q];for(const ut in Q)x(Q[ut].object),delete Q[ut];delete V[q]}delete s[w.id]}function z(w){for(const V in s){const q=s[V];if(q[w.id]===void 0)continue;const Q=q[w.id];for(const ut in Q)x(Q[ut].object),delete Q[ut];delete q[w.id]}}function j(){T(),h=!0,c!==l&&(c=l,p(c.object))}function T(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:j,resetDefaultState:T,dispose:F,releaseStatesOfGeometry:B,releaseStatesOfProgram:z,initAttributes:C,enableAttribute:M,disableUnusedAttributes:L}}function iT(o,e,i){let s;function l(p){s=p}function c(p,x){o.drawArrays(s,p,x),i.update(x,s,1)}function h(p,x,g){g!==0&&(o.drawArraysInstanced(s,p,x,g),i.update(x,s,g))}function d(p,x,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,x,0,g);let y=0;for(let b=0;b<g;b++)y+=x[b];i.update(y,s,1)}function m(p,x,g,S){if(g===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let b=0;b<p.length;b++)h(p[b],x[b],S[b]);else{y.multiDrawArraysInstancedWEBGL(s,p,0,x,0,S,0,g);let b=0;for(let C=0;C<g;C++)b+=x[C]*S[C];i.update(b,s,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function aT(o,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(z){return!(z!==Oi&&s.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const j=z===Ta&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==li&&s.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Xi&&!j)}function m(z){if(z==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const x=m(p);x!==p&&(re("WebGLRenderer:",p,"not supported, using",x,"instead."),p=x);const g=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),L=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),O=o.getParameter(o.MAX_VARYING_VECTORS),N=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),F=o.getParameter(o.MAX_SAMPLES),B=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:S,maxTextures:y,maxVertexTextures:b,maxTextureSize:C,maxCubemapSize:M,maxAttributes:_,maxVertexUniforms:L,maxVaryings:O,maxFragmentUniforms:N,maxSamples:F,samples:B}}function sT(o){const e=this;let i=null,s=0,l=!1,c=!1;const h=new Ps,d=new he,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,S){const y=g.length!==0||S||s!==0||l;return l=S,s=g.length,y},this.beginShadows=function(){c=!0,x(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,S){i=x(g,S,0)},this.setState=function(g,S,y){const b=g.clippingPlanes,C=g.clipIntersection,M=g.clipShadows,_=o.get(g);if(!l||b===null||b.length===0||c&&!M)c?x(null):p();else{const L=c?0:s,O=L*4;let N=_.clippingState||null;m.value=N,N=x(b,S,O,y);for(let F=0;F!==O;++F)N[F]=i[F];_.clippingState=N,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=L}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function x(g,S,y,b){const C=g!==null?g.length:0;let M=null;if(C!==0){if(M=m.value,b!==!0||M===null){const _=y+C*4,L=S.matrixWorldInverse;d.getNormalMatrix(L),(M===null||M.length<_)&&(M=new Float32Array(_));for(let O=0,N=y;O!==C;++O,N+=4)h.copy(g[O]).applyMatrix4(L,d),h.normal.toArray(M,N),M[N+3]=h.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,M}}function rT(o){let e=new WeakMap;function i(h,d){return d===id?h.mapping=Gs:d===ad&&(h.mapping=Vr),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===id||d===ad)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new bv(m.height);return p.fromEquirectangularTexture(o,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function c(){e=new WeakMap}return{get:s,dispose:c}}const ls=4,R_=[.125,.215,.35,.446,.526,.582],Bs=20,oT=256,qo=new sp,C_=new Ae;let Gh=null,Vh=0,Xh=0,kh=!1;const lT=new J;class w_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,c={}){const{size:h=256,position:d=lT}=c;Gh=this._renderer.getRenderTarget(),Vh=this._renderer.getActiveCubeFace(),Xh=this._renderer.getActiveMipmapLevel(),kh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=N_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=U_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Gh,Vh,Xh),this._renderer.xr.enabled=kh,e.scissorTest=!1,Fr(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Gs||e.mapping===Vr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Gh=this._renderer.getRenderTarget(),Vh=this._renderer.getActiveCubeFace(),Xh=this._renderer.getActiveMipmapLevel(),kh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:Ta,format:Oi,colorSpace:kr,depthBuffer:!1},l=D_(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=D_(e,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=cT(c)),this._blurMaterial=fT(c,e,i),this._ggxMaterial=uT(c,e,i)}return l}_compileMaterial(e){const i=new be(new Ln,e);this._renderer.compile(i,qo)}_sceneToCubeUV(e,i,s,l,c){const m=new Ei(90,1,i,s),p=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],g=this._renderer,S=g.autoClear,y=g.toneMapping;g.getClearColor(C_),g.toneMapping=Wi,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new be(new ya,new zs({name:"PMREM.Background",side:Kn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,M=C.material;let _=!1;const L=e.background;L?L.isColor&&(M.color.copy(L),e.background=null,_=!0):(M.color.copy(C_),_=!0);for(let O=0;O<6;O++){const N=O%3;N===0?(m.up.set(0,p[O],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+x[O],c.y,c.z)):N===1?(m.up.set(0,0,p[O]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+x[O],c.z)):(m.up.set(0,p[O],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+x[O]));const F=this._cubeSize;Fr(l,N*F,O>2?F:0,F,F),g.setRenderTarget(l),_&&g.render(C,m),g.render(e,m)}g.toneMapping=y,g.autoClear=S,e.background=L}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Gs||e.mapping===Vr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=N_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=U_());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const d=c.uniforms;d.envMap.value=e;const m=this._cubeSize;Fr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,qo)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,d=this._lodMeshes[s];d.material=h;const m=h.uniforms,p=s/(this._lodMeshes.length-1),x=i/(this._lodMeshes.length-1),g=Math.sqrt(p*p-x*x),S=0+p*1.25,y=g*S,{_lodMax:b}=this,C=this._sizeLods[s],M=3*C*(s>b-ls?s-b+ls:0),_=4*(this._cubeSize-C);m.envMap.value=e.texture,m.roughness.value=y,m.mipInt.value=b-i,Fr(c,M,_,3*C,2*C),l.setRenderTarget(c),l.render(d,qo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-s,Fr(e,M,_,3*C,2*C),l.setRenderTarget(e),l.render(d,qo)}_blur(e,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,s,l,"latitudinal",c),this._halfBlur(h,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&we("blur direction must be either latitudinal or longitudinal!");const x=3,g=this._lodMeshes[l];g.material=p;const S=p.uniforms,y=this._sizeLods[s]-1,b=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Bs-1),C=c/b,M=isFinite(c)?1+Math.floor(x*C):Bs;M>Bs&&re(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Bs}`);const _=[];let L=0;for(let z=0;z<Bs;++z){const j=z/C,T=Math.exp(-j*j/2);_.push(T),z===0?L+=T:z<M&&(L+=2*T)}for(let z=0;z<_.length;z++)_[z]=_[z]/L;S.envMap.value=e.texture,S.samples.value=M,S.weights.value=_,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:O}=this;S.dTheta.value=b,S.mipInt.value=O-s;const N=this._sizeLods[l],F=3*N*(l>O-ls?l-O+ls:0),B=4*(this._cubeSize-N);Fr(i,F,B,3*N,2*N),m.setRenderTarget(i),m.render(g,qo)}}function cT(o){const e=[],i=[],s=[];let l=o;const c=o-ls+1+R_.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);e.push(d);let m=1/d;h>o-ls?m=R_[h-o+ls-1]:h===0&&(m=0),i.push(m);const p=1/(d-2),x=-p,g=1+p,S=[x,x,g,x,g,g,x,x,g,g,x,g],y=6,b=6,C=3,M=2,_=1,L=new Float32Array(C*b*y),O=new Float32Array(M*b*y),N=new Float32Array(_*b*y);for(let B=0;B<y;B++){const z=B%3*2/3-1,j=B>2?0:-1,T=[z,j,0,z+2/3,j,0,z+2/3,j+1,0,z,j,0,z+2/3,j+1,0,z,j+1,0];L.set(T,C*b*B),O.set(S,M*b*B);const w=[B,B,B,B,B,B];N.set(w,_*b*B)}const F=new Ln;F.setAttribute("position",new Pi(L,C)),F.setAttribute("uv",new Pi(O,M)),F.setAttribute("faceIndex",new Pi(N,_)),s.push(new be(F,null)),l>ls&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function D_(o,e,i){const s=new qi(o,e,i);return s.texture.mapping=tu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Fr(o,e,i,s,l){o.viewport.set(e,i,s,l),o.scissor.set(e,i,s,l)}function uT(o,e,i){return new Zi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:oT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:nu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function fT(o,e,i){const s=new Float32Array(Bs),l=new J(0,1,0);return new Zi({name:"SphericalGaussianBlur",defines:{n:Bs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:nu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function U_(){return new Zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function N_(){return new Zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function nu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function hT(o){let e=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===id||m===ad,x=m===Gs||m===Vr;if(p||x){let g=e.get(d);const S=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new w_(o)),g=p?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{const y=d.image;return p&&y&&y.height>0||x&&y&&l(y)?(i===null&&(i=new w_(o)),g=p?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",c),g.texture):null}}}return d}function l(d){let m=0;const p=6;for(let x=0;x<p;x++)d[x]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function dT(o){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=o.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&tl("WebGLRenderer: "+s+" extension not supported."),l}}}function pT(o,e,i,s){const l={},c=new WeakMap;function h(g){const S=g.target;S.index!==null&&e.remove(S.index);for(const b in S.attributes)e.remove(S.attributes[b]);S.removeEventListener("dispose",h),delete l[S.id];const y=c.get(S);y&&(e.remove(y),c.delete(S)),s.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(g,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function m(g){const S=g.attributes;for(const y in S)e.update(S[y],o.ARRAY_BUFFER)}function p(g){const S=[],y=g.index,b=g.attributes.position;let C=0;if(y!==null){const L=y.array;C=y.version;for(let O=0,N=L.length;O<N;O+=3){const F=L[O+0],B=L[O+1],z=L[O+2];S.push(F,B,B,z,z,F)}}else if(b!==void 0){const L=b.array;C=b.version;for(let O=0,N=L.length/3-1;O<N;O+=3){const F=O+0,B=O+1,z=O+2;S.push(F,B,B,z,z,F)}}else return;const M=new(gv(S)?Sv:xv)(S,1);M.version=C;const _=c.get(g);_&&e.remove(_),c.set(g,M)}function x(g){const S=c.get(g);if(S){const y=g.index;y!==null&&S.version<y.version&&p(g)}else p(g);return c.get(g)}return{get:d,update:m,getWireframeAttribute:x}}function mT(o,e,i){let s;function l(S){s=S}let c,h;function d(S){c=S.type,h=S.bytesPerElement}function m(S,y){o.drawElements(s,y,c,S*h),i.update(y,s,1)}function p(S,y,b){b!==0&&(o.drawElementsInstanced(s,y,c,S*h,b),i.update(y,s,b))}function x(S,y,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,c,S,0,b);let M=0;for(let _=0;_<b;_++)M+=y[_];i.update(M,s,1)}function g(S,y,b,C){if(b===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let _=0;_<S.length;_++)p(S[_]/h,y[_],C[_]);else{M.multiDrawElementsInstancedWEBGL(s,y,0,c,S,0,C,0,b);let _=0;for(let L=0;L<b;L++)_+=y[L]*C[L];i.update(_,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=x,this.renderMultiDrawInstances=g}function gT(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(c/3);break;case o.LINES:i.lines+=d*(c/2);break;case o.LINE_STRIP:i.lines+=d*(c-1);break;case o.LINE_LOOP:i.lines+=d*c;break;case o.POINTS:i.points+=d*c;break;default:we("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function _T(o,e,i){const s=new WeakMap,l=new an;function c(h,d,m){const p=h.morphTargetInfluences,x=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=x!==void 0?x.length:0;let S=s.get(d);if(S===void 0||S.count!==g){let w=function(){j.dispose(),s.delete(d),d.removeEventListener("dispose",w)};var y=w;S!==void 0&&S.texture.dispose();const b=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],L=d.morphAttributes.normal||[],O=d.morphAttributes.color||[];let N=0;b===!0&&(N=1),C===!0&&(N=2),M===!0&&(N=3);let F=d.attributes.position.count*N,B=1;F>e.maxTextureSize&&(B=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const z=new Float32Array(F*B*4*g),j=new _v(z,F,B,g);j.type=Xi,j.needsUpdate=!0;const T=N*4;for(let V=0;V<g;V++){const q=_[V],Q=L[V],ut=O[V],pt=F*B*4*V;for(let P=0;P<q.count;P++){const I=P*T;b===!0&&(l.fromBufferAttribute(q,P),z[pt+I+0]=l.x,z[pt+I+1]=l.y,z[pt+I+2]=l.z,z[pt+I+3]=0),C===!0&&(l.fromBufferAttribute(Q,P),z[pt+I+4]=l.x,z[pt+I+5]=l.y,z[pt+I+6]=l.z,z[pt+I+7]=0),M===!0&&(l.fromBufferAttribute(ut,P),z[pt+I+8]=l.x,z[pt+I+9]=l.y,z[pt+I+10]=l.z,z[pt+I+11]=ut.itemSize===4?l.w:1)}}S={count:g,texture:j,size:new Ue(F,B)},s.set(d,S),d.addEventListener("dispose",w)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let b=0;for(let M=0;M<p.length;M++)b+=p[M];const C=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(o,"morphTargetBaseInfluence",C),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:c}}function vT(o,e,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,x=m.geometry,g=e.get(m,x);if(l.get(g)!==p&&(e.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return g}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const xT={[tv]:"LINEAR_TONE_MAPPING",[ev]:"REINHARD_TONE_MAPPING",[nv]:"CINEON_TONE_MAPPING",[iv]:"ACES_FILMIC_TONE_MAPPING",[sv]:"AGX_TONE_MAPPING",[rv]:"NEUTRAL_TONE_MAPPING",[av]:"CUSTOM_TONE_MAPPING"};function ST(o,e,i,s,l){const c=new qi(e,i,{type:o,depthBuffer:s,stencilBuffer:l}),h=new qi(e,i,{type:Ta,depthBuffer:!1,stencilBuffer:!1}),d=new Ln;d.setAttribute("position",new sn([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new sn([0,2,0,0,2,0],2));const m=new uy({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new be(d,m),x=new sp(-1,1,1,-1,0,1);let g=null,S=null,y=!1,b,C=null,M=[],_=!1;this.setSize=function(L,O){c.setSize(L,O),h.setSize(L,O);for(let N=0;N<M.length;N++){const F=M[N];F.setSize&&F.setSize(L,O)}},this.setEffects=function(L){M=L,_=M.length>0&&M[0].isRenderPass===!0;const O=c.width,N=c.height;for(let F=0;F<M.length;F++){const B=M[F];B.setSize&&B.setSize(O,N)}},this.begin=function(L,O){if(y||L.toneMapping===Wi&&M.length===0)return!1;if(C=O,O!==null){const N=O.width,F=O.height;(c.width!==N||c.height!==F)&&this.setSize(N,F)}return _===!1&&L.setRenderTarget(c),b=L.toneMapping,L.toneMapping=Wi,!0},this.hasRenderPass=function(){return _},this.end=function(L,O){L.toneMapping=b,y=!0;let N=c,F=h;for(let B=0;B<M.length;B++){const z=M[B];if(z.enabled!==!1&&(z.render(L,F,N,O),z.needsSwap!==!1)){const j=N;N=F,F=j}}if(g!==L.outputColorSpace||S!==L.toneMapping){g=L.outputColorSpace,S=L.toneMapping,m.defines={},De.getTransfer(g)===Ge&&(m.defines.SRGB_TRANSFER="");const B=xT[S];B&&(m.defines[B]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=N.texture,L.setRenderTarget(C),L.render(p,x),C=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.dispose(),h.dispose(),d.dispose(),m.dispose()}}const Dv=new Vn,Vd=new el(1,1),Uv=new _v,Nv=new BM,Lv=new Ev,L_=[],O_=[],P_=new Float32Array(16),F_=new Float32Array(9),z_=new Float32Array(4);function Yr(o,e,i){const s=o[0];if(s<=0||s>0)return o;const l=e*i;let c=L_[l];if(c===void 0&&(c=new Float32Array(l),L_[l]=c),e!==0){s.toArray(c,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(c,d)}return c}function _n(o,e){if(o.length!==e.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==e[i])return!1;return!0}function vn(o,e){for(let i=0,s=e.length;i<s;i++)o[i]=e[i]}function iu(o,e){let i=O_[e];i===void 0&&(i=new Int32Array(e),O_[e]=i);for(let s=0;s!==e;++s)i[s]=o.allocateTextureUnit();return i}function MT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function yT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(_n(i,e))return;o.uniform2fv(this.addr,e),vn(i,e)}}function ET(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(_n(i,e))return;o.uniform3fv(this.addr,e),vn(i,e)}}function bT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(_n(i,e))return;o.uniform4fv(this.addr,e),vn(i,e)}}function TT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(_n(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),vn(i,e)}else{if(_n(i,s))return;z_.set(s),o.uniformMatrix2fv(this.addr,!1,z_),vn(i,s)}}function AT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(_n(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),vn(i,e)}else{if(_n(i,s))return;F_.set(s),o.uniformMatrix3fv(this.addr,!1,F_),vn(i,s)}}function RT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(_n(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),vn(i,e)}else{if(_n(i,s))return;P_.set(s),o.uniformMatrix4fv(this.addr,!1,P_),vn(i,s)}}function CT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function wT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(_n(i,e))return;o.uniform2iv(this.addr,e),vn(i,e)}}function DT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(_n(i,e))return;o.uniform3iv(this.addr,e),vn(i,e)}}function UT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(_n(i,e))return;o.uniform4iv(this.addr,e),vn(i,e)}}function NT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function LT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(_n(i,e))return;o.uniform2uiv(this.addr,e),vn(i,e)}}function OT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(_n(i,e))return;o.uniform3uiv(this.addr,e),vn(i,e)}}function PT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(_n(i,e))return;o.uniform4uiv(this.addr,e),vn(i,e)}}function FT(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(Vd.compareFunction=i.isReversedDepthBuffer()?$d:Jd,c=Vd):c=Dv,i.setTexture2D(e||c,l)}function zT(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||Nv,l)}function BT(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||Lv,l)}function IT(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||Uv,l)}function HT(o){switch(o){case 5126:return MT;case 35664:return yT;case 35665:return ET;case 35666:return bT;case 35674:return TT;case 35675:return AT;case 35676:return RT;case 5124:case 35670:return CT;case 35667:case 35671:return wT;case 35668:case 35672:return DT;case 35669:case 35673:return UT;case 5125:return NT;case 36294:return LT;case 36295:return OT;case 36296:return PT;case 35678:case 36198:case 36298:case 36306:case 35682:return FT;case 35679:case 36299:case 36307:return zT;case 35680:case 36300:case 36308:case 36293:return BT;case 36289:case 36303:case 36311:case 36292:return IT}}function GT(o,e){o.uniform1fv(this.addr,e)}function VT(o,e){const i=Yr(e,this.size,2);o.uniform2fv(this.addr,i)}function XT(o,e){const i=Yr(e,this.size,3);o.uniform3fv(this.addr,i)}function kT(o,e){const i=Yr(e,this.size,4);o.uniform4fv(this.addr,i)}function WT(o,e){const i=Yr(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function qT(o,e){const i=Yr(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function YT(o,e){const i=Yr(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function jT(o,e){o.uniform1iv(this.addr,e)}function ZT(o,e){o.uniform2iv(this.addr,e)}function KT(o,e){o.uniform3iv(this.addr,e)}function QT(o,e){o.uniform4iv(this.addr,e)}function JT(o,e){o.uniform1uiv(this.addr,e)}function $T(o,e){o.uniform2uiv(this.addr,e)}function t1(o,e){o.uniform3uiv(this.addr,e)}function e1(o,e){o.uniform4uiv(this.addr,e)}function n1(o,e,i){const s=this.cache,l=e.length,c=iu(i,l);_n(s,c)||(o.uniform1iv(this.addr,c),vn(s,c));let h;this.type===o.SAMPLER_2D_SHADOW?h=Vd:h=Dv;for(let d=0;d!==l;++d)i.setTexture2D(e[d]||h,c[d])}function i1(o,e,i){const s=this.cache,l=e.length,c=iu(i,l);_n(s,c)||(o.uniform1iv(this.addr,c),vn(s,c));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||Nv,c[h])}function a1(o,e,i){const s=this.cache,l=e.length,c=iu(i,l);_n(s,c)||(o.uniform1iv(this.addr,c),vn(s,c));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||Lv,c[h])}function s1(o,e,i){const s=this.cache,l=e.length,c=iu(i,l);_n(s,c)||(o.uniform1iv(this.addr,c),vn(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||Uv,c[h])}function r1(o){switch(o){case 5126:return GT;case 35664:return VT;case 35665:return XT;case 35666:return kT;case 35674:return WT;case 35675:return qT;case 35676:return YT;case 5124:case 35670:return jT;case 35667:case 35671:return ZT;case 35668:case 35672:return KT;case 35669:case 35673:return QT;case 5125:return JT;case 36294:return $T;case 36295:return t1;case 36296:return e1;case 35678:case 36198:case 36298:case 36306:case 35682:return n1;case 35679:case 36299:case 36307:return i1;case 35680:case 36300:case 36308:case 36293:return a1;case 36289:case 36303:case 36311:case 36292:return s1}}class o1{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=HT(i.type)}}class l1{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=r1(i.type)}}class c1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(e,i[d.id],s)}}}const Wh=/(\w+)(\])?(\[|\.)?/g;function B_(o,e){o.seq.push(e),o.map[e.id]=e}function u1(o,e,i){const s=o.name,l=s.length;for(Wh.lastIndex=0;;){const c=Wh.exec(s),h=Wh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){B_(i,p===void 0?new o1(d,o,e):new l1(d,o,e));break}else{let g=i.map[d];g===void 0&&(g=new c1(d),B_(i,g)),i=g}}}class qc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let h=0;h<s;++h){const d=e.getActiveUniform(i,h),m=e.getUniformLocation(i,d.name);u1(d,m,this)}const l=[],c=[];for(const h of this.seq)h.type===e.SAMPLER_2D_SHADOW||h.type===e.SAMPLER_CUBE_SHADOW||h.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const h=e[l];h.id in i&&s.push(h)}return s}}function I_(o,e,i){const s=o.createShader(e);return o.shaderSource(s,i),o.compileShader(s),s}const f1=37297;let h1=0;function d1(o,e){const i=o.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let h=l;h<c;h++){const d=h+1;s.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const H_=new he;function p1(o){De._getMatrix(H_,De.workingColorSpace,o);const e=`mat3( ${H_.elements.map(i=>i.toFixed(4))} )`;switch(De.getTransfer(o)){case Yc:return[e,"LinearTransferOETF"];case Ge:return[e,"sRGBTransferOETF"];default:return re("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function G_(o,e,i){const s=o.getShaderParameter(e,o.COMPILE_STATUS),c=(o.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+d1(o.getShaderSource(e),d)}else return c}function m1(o,e){const i=p1(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const g1={[tv]:"Linear",[ev]:"Reinhard",[nv]:"Cineon",[iv]:"ACESFilmic",[sv]:"AgX",[rv]:"Neutral",[av]:"Custom"};function _1(o,e){const i=g1[e];return i===void 0?(re("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Hc=new J;function v1(){De.getLuminanceCoefficients(Hc);const o=Hc.x.toFixed(4),e=Hc.y.toFixed(4),i=Hc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function x1(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ko).join(`
`)}function S1(o){const e=[];for(const i in o){const s=o[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function M1(o,e){const i={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=o.getActiveAttrib(e,l),h=c.name;let d=1;c.type===o.FLOAT_MAT2&&(d=2),c.type===o.FLOAT_MAT3&&(d=3),c.type===o.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function Ko(o){return o!==""}function V_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function X_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const y1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xd(o){return o.replace(y1,b1)}const E1=new Map;function b1(o,e){let i=de[e];if(i===void 0){const s=E1.get(e);if(s!==void 0)i=de[s],re('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Xd(i)}const T1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function k_(o){return o.replace(T1,A1)}function A1(o,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function W_(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const R1={[Gc]:"SHADOWMAP_TYPE_PCF",[Zo]:"SHADOWMAP_TYPE_VSM"};function C1(o){return R1[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const w1={[Gs]:"ENVMAP_TYPE_CUBE",[Vr]:"ENVMAP_TYPE_CUBE",[tu]:"ENVMAP_TYPE_CUBE_UV"};function D1(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":w1[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const U1={[Vr]:"ENVMAP_MODE_REFRACTION"};function N1(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":U1[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const L1={[$_]:"ENVMAP_BLENDING_MULTIPLY",[xM]:"ENVMAP_BLENDING_MIX",[SM]:"ENVMAP_BLENDING_ADD"};function O1(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":L1[o.combine]||"ENVMAP_BLENDING_NONE"}function P1(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function F1(o,e,i,s){const l=o.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=C1(i),p=D1(i),x=N1(i),g=O1(i),S=P1(i),y=x1(i),b=S1(c),C=l.createProgram();let M,_,L=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Ko).join(`
`),M.length>0&&(M+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Ko).join(`
`),_.length>0&&(_+=`
`)):(M=[W_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ko).join(`
`),_=[W_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+x:"",i.envMap?"#define "+g:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Wi?"#define TONE_MAPPING":"",i.toneMapping!==Wi?de.tonemapping_pars_fragment:"",i.toneMapping!==Wi?_1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",de.colorspace_pars_fragment,m1("linearToOutputTexel",i.outputColorSpace),v1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ko).join(`
`)),h=Xd(h),h=V_(h,i),h=X_(h,i),d=Xd(d),d=V_(d,i),d=X_(d,i),h=k_(h),d=k_(d),i.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,_=["#define varying in",i.glslVersion===$g?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===$g?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const O=L+M+h,N=L+_+d,F=I_(l,l.VERTEX_SHADER,O),B=I_(l,l.FRAGMENT_SHADER,N);l.attachShader(C,F),l.attachShader(C,B),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function z(V){if(o.debug.checkShaderErrors){const q=l.getProgramInfoLog(C)||"",Q=l.getShaderInfoLog(F)||"",ut=l.getShaderInfoLog(B)||"",pt=q.trim(),P=Q.trim(),I=ut.trim();let at=!0,Ut=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(at=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,F,B);else{const St=G_(l,F,"vertex"),D=G_(l,B,"fragment");we("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+pt+`
`+St+`
`+D)}else pt!==""?re("WebGLProgram: Program Info Log:",pt):(P===""||I==="")&&(Ut=!1);Ut&&(V.diagnostics={runnable:at,programLog:pt,vertexShader:{log:P,prefix:M},fragmentShader:{log:I,prefix:_}})}l.deleteShader(F),l.deleteShader(B),j=new qc(l,C),T=M1(l,C)}let j;this.getUniforms=function(){return j===void 0&&z(this),j};let T;this.getAttributes=function(){return T===void 0&&z(this),T};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(C,f1)),w},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=h1++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=F,this.fragmentShader=B,this}let z1=0;class B1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new I1(e),i.set(e,s)),s}}class I1{constructor(e){this.id=z1++,this.code=e,this.usedTimes=0}}function H1(o,e,i,s,l,c,h){const d=new ep,m=new B1,p=new Set,x=[],g=new Map,S=l.logarithmicDepthBuffer;let y=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(T){return p.add(T),T===0?"uv":`uv${T}`}function M(T,w,V,q,Q){const ut=q.fog,pt=Q.geometry,P=T.isMeshStandardMaterial?q.environment:null,I=(T.isMeshStandardMaterial?i:e).get(T.envMap||P),at=I&&I.mapping===tu?I.image.height:null,Ut=b[T.type];T.precision!==null&&(y=l.getMaxPrecision(T.precision),y!==T.precision&&re("WebGLProgram.getParameters:",T.precision,"not supported, using",y,"instead."));const St=pt.morphAttributes.position||pt.morphAttributes.normal||pt.morphAttributes.color,D=St!==void 0?St.length:0;let tt=0;pt.morphAttributes.position!==void 0&&(tt=1),pt.morphAttributes.normal!==void 0&&(tt=2),pt.morphAttributes.color!==void 0&&(tt=3);let Et,Ot,Vt,it;if(Ut){const me=Gi[Ut];Et=me.vertexShader,Ot=me.fragmentShader}else Et=T.vertexShader,Ot=T.fragmentShader,m.update(T),Vt=m.getVertexShaderID(T),it=m.getFragmentShaderID(T);const dt=o.getRenderTarget(),Ft=o.state.buffers.depth.getReversed(),Wt=Q.isInstancedMesh===!0,Xt=Q.isBatchedMesh===!0,ue=!!T.map,Ze=!!T.matcap,le=!!I,pe=!!T.aoMap,Re=!!T.lightMap,ae=!!T.bumpMap,qe=!!T.normalMap,X=!!T.displacementMap,Ye=!!T.emissiveMap,_e=!!T.metalnessMap,Ce=!!T.roughnessMap,qt=T.anisotropy>0,U=T.clearcoat>0,E=T.dispersion>0,W=T.iridescence>0,xt=T.sheen>0,At=T.transmission>0,mt=qt&&!!T.anisotropyMap,rt=U&&!!T.clearcoatMap,st=U&&!!T.clearcoatNormalMap,ct=U&&!!T.clearcoatRoughnessMap,Rt=W&&!!T.iridescenceMap,et=W&&!!T.iridescenceThicknessMap,Mt=xt&&!!T.sheenColorMap,Lt=xt&&!!T.sheenRoughnessMap,Dt=!!T.specularMap,Ct=!!T.specularColorMap,Bt=!!T.specularIntensityMap,G=At&&!!T.transmissionMap,wt=At&&!!T.thicknessMap,bt=!!T.gradientMap,Pt=!!T.alphaMap,_t=T.alphaTest>0,gt=!!T.alphaHash,Nt=!!T.extensions;let Jt=Wi;T.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(Jt=o.toneMapping);const ve={shaderID:Ut,shaderType:T.type,shaderName:T.name,vertexShader:Et,fragmentShader:Ot,defines:T.defines,customVertexShaderID:Vt,customFragmentShaderID:it,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:y,batching:Xt,batchingColor:Xt&&Q._colorsTexture!==null,instancing:Wt,instancingColor:Wt&&Q.instanceColor!==null,instancingMorph:Wt&&Q.morphTexture!==null,outputColorSpace:dt===null?o.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:kr,alphaToCoverage:!!T.alphaToCoverage,map:ue,matcap:Ze,envMap:le,envMapMode:le&&I.mapping,envMapCubeUVHeight:at,aoMap:pe,lightMap:Re,bumpMap:ae,normalMap:qe,displacementMap:X,emissiveMap:Ye,normalMapObjectSpace:qe&&T.normalMapType===EM,normalMapTangentSpace:qe&&T.normalMapType===mv,metalnessMap:_e,roughnessMap:Ce,anisotropy:qt,anisotropyMap:mt,clearcoat:U,clearcoatMap:rt,clearcoatNormalMap:st,clearcoatRoughnessMap:ct,dispersion:E,iridescence:W,iridescenceMap:Rt,iridescenceThicknessMap:et,sheen:xt,sheenColorMap:Mt,sheenRoughnessMap:Lt,specularMap:Dt,specularColorMap:Ct,specularIntensityMap:Bt,transmission:At,transmissionMap:G,thicknessMap:wt,gradientMap:bt,opaque:T.transparent===!1&&T.blending===Ir&&T.alphaToCoverage===!1,alphaMap:Pt,alphaTest:_t,alphaHash:gt,combine:T.combine,mapUv:ue&&C(T.map.channel),aoMapUv:pe&&C(T.aoMap.channel),lightMapUv:Re&&C(T.lightMap.channel),bumpMapUv:ae&&C(T.bumpMap.channel),normalMapUv:qe&&C(T.normalMap.channel),displacementMapUv:X&&C(T.displacementMap.channel),emissiveMapUv:Ye&&C(T.emissiveMap.channel),metalnessMapUv:_e&&C(T.metalnessMap.channel),roughnessMapUv:Ce&&C(T.roughnessMap.channel),anisotropyMapUv:mt&&C(T.anisotropyMap.channel),clearcoatMapUv:rt&&C(T.clearcoatMap.channel),clearcoatNormalMapUv:st&&C(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&C(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Rt&&C(T.iridescenceMap.channel),iridescenceThicknessMapUv:et&&C(T.iridescenceThicknessMap.channel),sheenColorMapUv:Mt&&C(T.sheenColorMap.channel),sheenRoughnessMapUv:Lt&&C(T.sheenRoughnessMap.channel),specularMapUv:Dt&&C(T.specularMap.channel),specularColorMapUv:Ct&&C(T.specularColorMap.channel),specularIntensityMapUv:Bt&&C(T.specularIntensityMap.channel),transmissionMapUv:G&&C(T.transmissionMap.channel),thicknessMapUv:wt&&C(T.thicknessMap.channel),alphaMapUv:Pt&&C(T.alphaMap.channel),vertexTangents:!!pt.attributes.tangent&&(qe||qt),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!pt.attributes.color&&pt.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!pt.attributes.uv&&(ue||Pt),fog:!!ut,useFog:T.fog===!0,fogExp2:!!ut&&ut.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:Ft,skinning:Q.isSkinnedMesh===!0,morphTargets:pt.morphAttributes.position!==void 0,morphNormals:pt.morphAttributes.normal!==void 0,morphColors:pt.morphAttributes.color!==void 0,morphTargetsCount:D,morphTextureStride:tt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:T.dithering,shadowMapEnabled:o.shadowMap.enabled&&V.length>0,shadowMapType:o.shadowMap.type,toneMapping:Jt,decodeVideoTexture:ue&&T.map.isVideoTexture===!0&&De.getTransfer(T.map.colorSpace)===Ge,decodeVideoTextureEmissive:Ye&&T.emissiveMap.isVideoTexture===!0&&De.getTransfer(T.emissiveMap.colorSpace)===Ge,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Vi,flipSided:T.side===Kn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Nt&&T.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Nt&&T.extensions.multiDraw===!0||Xt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return ve.vertexUv1s=p.has(1),ve.vertexUv2s=p.has(2),ve.vertexUv3s=p.has(3),p.clear(),ve}function _(T){const w=[];if(T.shaderID?w.push(T.shaderID):(w.push(T.customVertexShaderID),w.push(T.customFragmentShaderID)),T.defines!==void 0)for(const V in T.defines)w.push(V),w.push(T.defines[V]);return T.isRawShaderMaterial===!1&&(L(w,T),O(w,T),w.push(o.outputColorSpace)),w.push(T.customProgramCacheKey),w.join()}function L(T,w){T.push(w.precision),T.push(w.outputColorSpace),T.push(w.envMapMode),T.push(w.envMapCubeUVHeight),T.push(w.mapUv),T.push(w.alphaMapUv),T.push(w.lightMapUv),T.push(w.aoMapUv),T.push(w.bumpMapUv),T.push(w.normalMapUv),T.push(w.displacementMapUv),T.push(w.emissiveMapUv),T.push(w.metalnessMapUv),T.push(w.roughnessMapUv),T.push(w.anisotropyMapUv),T.push(w.clearcoatMapUv),T.push(w.clearcoatNormalMapUv),T.push(w.clearcoatRoughnessMapUv),T.push(w.iridescenceMapUv),T.push(w.iridescenceThicknessMapUv),T.push(w.sheenColorMapUv),T.push(w.sheenRoughnessMapUv),T.push(w.specularMapUv),T.push(w.specularColorMapUv),T.push(w.specularIntensityMapUv),T.push(w.transmissionMapUv),T.push(w.thicknessMapUv),T.push(w.combine),T.push(w.fogExp2),T.push(w.sizeAttenuation),T.push(w.morphTargetsCount),T.push(w.morphAttributeCount),T.push(w.numDirLights),T.push(w.numPointLights),T.push(w.numSpotLights),T.push(w.numSpotLightMaps),T.push(w.numHemiLights),T.push(w.numRectAreaLights),T.push(w.numDirLightShadows),T.push(w.numPointLightShadows),T.push(w.numSpotLightShadows),T.push(w.numSpotLightShadowsWithMaps),T.push(w.numLightProbes),T.push(w.shadowMapType),T.push(w.toneMapping),T.push(w.numClippingPlanes),T.push(w.numClipIntersection),T.push(w.depthPacking)}function O(T,w){d.disableAll(),w.instancing&&d.enable(0),w.instancingColor&&d.enable(1),w.instancingMorph&&d.enable(2),w.matcap&&d.enable(3),w.envMap&&d.enable(4),w.normalMapObjectSpace&&d.enable(5),w.normalMapTangentSpace&&d.enable(6),w.clearcoat&&d.enable(7),w.iridescence&&d.enable(8),w.alphaTest&&d.enable(9),w.vertexColors&&d.enable(10),w.vertexAlphas&&d.enable(11),w.vertexUv1s&&d.enable(12),w.vertexUv2s&&d.enable(13),w.vertexUv3s&&d.enable(14),w.vertexTangents&&d.enable(15),w.anisotropy&&d.enable(16),w.alphaHash&&d.enable(17),w.batching&&d.enable(18),w.dispersion&&d.enable(19),w.batchingColor&&d.enable(20),w.gradientMap&&d.enable(21),T.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reversedDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),T.push(d.mask)}function N(T){const w=b[T.type];let V;if(w){const q=Gi[w];V=QM.clone(q.uniforms)}else V=T.uniforms;return V}function F(T,w){let V=g.get(w);return V!==void 0?++V.usedTimes:(V=new F1(o,w,T,c),x.push(V),g.set(w,V)),V}function B(T){if(--T.usedTimes===0){const w=x.indexOf(T);x[w]=x[x.length-1],x.pop(),g.delete(T.cacheKey),T.destroy()}}function z(T){m.remove(T)}function j(){m.dispose()}return{getParameters:M,getProgramCacheKey:_,getUniforms:N,acquireProgram:F,releaseProgram:B,releaseShaderCache:z,programs:x,dispose:j}}function G1(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function c(){o=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function V1(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function q_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Y_(){const o=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function h(g,S,y,b,C,M){let _=o[e];return _===void 0?(_={id:g.id,object:g,geometry:S,material:y,groupOrder:b,renderOrder:g.renderOrder,z:C,group:M},o[e]=_):(_.id=g.id,_.object=g,_.geometry=S,_.material=y,_.groupOrder=b,_.renderOrder=g.renderOrder,_.z=C,_.group=M),e++,_}function d(g,S,y,b,C,M){const _=h(g,S,y,b,C,M);y.transmission>0?s.push(_):y.transparent===!0?l.push(_):i.push(_)}function m(g,S,y,b,C,M){const _=h(g,S,y,b,C,M);y.transmission>0?s.unshift(_):y.transparent===!0?l.unshift(_):i.unshift(_)}function p(g,S){i.length>1&&i.sort(g||V1),s.length>1&&s.sort(S||q_),l.length>1&&l.sort(S||q_)}function x(){for(let g=e,S=o.length;g<S;g++){const y=o[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:m,finish:x,sort:p}}function X1(){let o=new WeakMap;function e(s,l){const c=o.get(s);let h;return c===void 0?(h=new Y_,o.set(s,[h])):l>=c.length?(h=new Y_,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function k1(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new J,color:new Ae};break;case"SpotLight":i={position:new J,direction:new J,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new J,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":i={direction:new J,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":i={color:new Ae,position:new J,halfWidth:new J,halfHeight:new J};break}return o[e.id]=i,i}}}function W1(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let q1=0;function Y1(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function j1(o){const e=new k1,i=W1(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new J);const l=new J,c=new Je,h=new Je;function d(p){let x=0,g=0,S=0;for(let T=0;T<9;T++)s.probe[T].set(0,0,0);let y=0,b=0,C=0,M=0,_=0,L=0,O=0,N=0,F=0,B=0,z=0;p.sort(Y1);for(let T=0,w=p.length;T<w;T++){const V=p[T],q=V.color,Q=V.intensity,ut=V.distance;let pt=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Xr?pt=V.shadow.map.texture:pt=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)x+=q.r*Q,g+=q.g*Q,S+=q.b*Q;else if(V.isLightProbe){for(let P=0;P<9;P++)s.probe[P].addScaledVector(V.sh.coefficients[P],Q);z++}else if(V.isDirectionalLight){const P=e.get(V);if(P.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const I=V.shadow,at=i.get(V);at.shadowIntensity=I.intensity,at.shadowBias=I.bias,at.shadowNormalBias=I.normalBias,at.shadowRadius=I.radius,at.shadowMapSize=I.mapSize,s.directionalShadow[y]=at,s.directionalShadowMap[y]=pt,s.directionalShadowMatrix[y]=V.shadow.matrix,L++}s.directional[y]=P,y++}else if(V.isSpotLight){const P=e.get(V);P.position.setFromMatrixPosition(V.matrixWorld),P.color.copy(q).multiplyScalar(Q),P.distance=ut,P.coneCos=Math.cos(V.angle),P.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),P.decay=V.decay,s.spot[C]=P;const I=V.shadow;if(V.map&&(s.spotLightMap[F]=V.map,F++,I.updateMatrices(V),V.castShadow&&B++),s.spotLightMatrix[C]=I.matrix,V.castShadow){const at=i.get(V);at.shadowIntensity=I.intensity,at.shadowBias=I.bias,at.shadowNormalBias=I.normalBias,at.shadowRadius=I.radius,at.shadowMapSize=I.mapSize,s.spotShadow[C]=at,s.spotShadowMap[C]=pt,N++}C++}else if(V.isRectAreaLight){const P=e.get(V);P.color.copy(q).multiplyScalar(Q),P.halfWidth.set(V.width*.5,0,0),P.halfHeight.set(0,V.height*.5,0),s.rectArea[M]=P,M++}else if(V.isPointLight){const P=e.get(V);if(P.color.copy(V.color).multiplyScalar(V.intensity),P.distance=V.distance,P.decay=V.decay,V.castShadow){const I=V.shadow,at=i.get(V);at.shadowIntensity=I.intensity,at.shadowBias=I.bias,at.shadowNormalBias=I.normalBias,at.shadowRadius=I.radius,at.shadowMapSize=I.mapSize,at.shadowCameraNear=I.camera.near,at.shadowCameraFar=I.camera.far,s.pointShadow[b]=at,s.pointShadowMap[b]=pt,s.pointShadowMatrix[b]=V.shadow.matrix,O++}s.point[b]=P,b++}else if(V.isHemisphereLight){const P=e.get(V);P.skyColor.copy(V.color).multiplyScalar(Q),P.groundColor.copy(V.groundColor).multiplyScalar(Q),s.hemi[_]=P,_++}}M>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Gt.LTC_FLOAT_1,s.rectAreaLTC2=Gt.LTC_FLOAT_2):(s.rectAreaLTC1=Gt.LTC_HALF_1,s.rectAreaLTC2=Gt.LTC_HALF_2)),s.ambient[0]=x,s.ambient[1]=g,s.ambient[2]=S;const j=s.hash;(j.directionalLength!==y||j.pointLength!==b||j.spotLength!==C||j.rectAreaLength!==M||j.hemiLength!==_||j.numDirectionalShadows!==L||j.numPointShadows!==O||j.numSpotShadows!==N||j.numSpotMaps!==F||j.numLightProbes!==z)&&(s.directional.length=y,s.spot.length=C,s.rectArea.length=M,s.point.length=b,s.hemi.length=_,s.directionalShadow.length=L,s.directionalShadowMap.length=L,s.pointShadow.length=O,s.pointShadowMap.length=O,s.spotShadow.length=N,s.spotShadowMap.length=N,s.directionalShadowMatrix.length=L,s.pointShadowMatrix.length=O,s.spotLightMatrix.length=N+F-B,s.spotLightMap.length=F,s.numSpotLightShadowsWithMaps=B,s.numLightProbes=z,j.directionalLength=y,j.pointLength=b,j.spotLength=C,j.rectAreaLength=M,j.hemiLength=_,j.numDirectionalShadows=L,j.numPointShadows=O,j.numSpotShadows=N,j.numSpotMaps=F,j.numLightProbes=z,s.version=q1++)}function m(p,x){let g=0,S=0,y=0,b=0,C=0;const M=x.matrixWorldInverse;for(let _=0,L=p.length;_<L;_++){const O=p[_];if(O.isDirectionalLight){const N=s.directional[g];N.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(M),g++}else if(O.isSpotLight){const N=s.spot[y];N.position.setFromMatrixPosition(O.matrixWorld),N.position.applyMatrix4(M),N.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(M),y++}else if(O.isRectAreaLight){const N=s.rectArea[b];N.position.setFromMatrixPosition(O.matrixWorld),N.position.applyMatrix4(M),h.identity(),c.copy(O.matrixWorld),c.premultiply(M),h.extractRotation(c),N.halfWidth.set(O.width*.5,0,0),N.halfHeight.set(0,O.height*.5,0),N.halfWidth.applyMatrix4(h),N.halfHeight.applyMatrix4(h),b++}else if(O.isPointLight){const N=s.point[S];N.position.setFromMatrixPosition(O.matrixWorld),N.position.applyMatrix4(M),S++}else if(O.isHemisphereLight){const N=s.hemi[C];N.direction.setFromMatrixPosition(O.matrixWorld),N.direction.transformDirection(M),C++}}}return{setup:d,setupView:m,state:s}}function j_(o){const e=new j1(o),i=[],s=[];function l(x){p.camera=x,i.length=0,s.length=0}function c(x){i.push(x)}function h(x){s.push(x)}function d(){e.setup(i)}function m(x){e.setupView(i,x)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function Z1(o){let e=new WeakMap;function i(l,c=0){const h=e.get(l);let d;return h===void 0?(d=new j_(o),e.set(l,[d])):c>=h.length?(d=new j_(o),h.push(d)):d=h[c],d}function s(){e=new WeakMap}return{get:i,dispose:s}}const K1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Q1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,J1=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],$1=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],Z_=new Je,Yo=new J,qh=new J;function tA(o,e,i){let s=new ip;const l=new Ue,c=new Ue,h=new an,d=new fy,m=new hy,p={},x=i.maxTextureSize,g={[cs]:Kn,[Kn]:cs,[Vi]:Vi},S=new Zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:K1,fragmentShader:Q1}),y=S.clone();y.defines.HORIZONTAL_PASS=1;const b=new Ln;b.setAttribute("position",new Pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new be(b,S),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gc;let _=this.type;this.render=function(B,z,j){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||B.length===0)return;B.type===tM&&(re("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),B.type=Gc);const T=o.getRenderTarget(),w=o.getActiveCubeFace(),V=o.getActiveMipmapLevel(),q=o.state;q.setBlending(Ea),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const Q=_!==this.type;Q&&z.traverse(function(ut){ut.material&&(Array.isArray(ut.material)?ut.material.forEach(pt=>pt.needsUpdate=!0):ut.material.needsUpdate=!0)});for(let ut=0,pt=B.length;ut<pt;ut++){const P=B[ut],I=P.shadow;if(I===void 0){re("WebGLShadowMap:",P,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;l.copy(I.mapSize);const at=I.getFrameExtents();if(l.multiply(at),c.copy(I.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(c.x=Math.floor(x/at.x),l.x=c.x*at.x,I.mapSize.x=c.x),l.y>x&&(c.y=Math.floor(x/at.y),l.y=c.y*at.y,I.mapSize.y=c.y)),I.map===null||Q===!0){if(I.map!==null&&(I.map.depthTexture!==null&&(I.map.depthTexture.dispose(),I.map.depthTexture=null),I.map.dispose()),this.type===Zo){if(P.isPointLight){re("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}I.map=new qi(l.x,l.y,{format:Xr,type:Ta,minFilter:zn,magFilter:zn,generateMipmaps:!1}),I.map.texture.name=P.name+".shadowMap",I.map.depthTexture=new el(l.x,l.y,Xi),I.map.depthTexture.name=P.name+".shadowMapDepth",I.map.depthTexture.format=Aa,I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=Nn,I.map.depthTexture.magFilter=Nn}else{P.isPointLight?(I.map=new bv(l.x),I.map.depthTexture=new cy(l.x,Yi)):(I.map=new qi(l.x,l.y),I.map.depthTexture=new el(l.x,l.y,Yi)),I.map.depthTexture.name=P.name+".shadowMap",I.map.depthTexture.format=Aa;const St=o.state.buffers.depth.getReversed();this.type===Gc?(I.map.depthTexture.compareFunction=St?$d:Jd,I.map.depthTexture.minFilter=zn,I.map.depthTexture.magFilter=zn):(I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=Nn,I.map.depthTexture.magFilter=Nn)}I.camera.updateProjectionMatrix()}const Ut=I.map.isWebGLCubeRenderTarget?6:1;for(let St=0;St<Ut;St++){if(I.map.isWebGLCubeRenderTarget)o.setRenderTarget(I.map,St),o.clear();else{St===0&&(o.setRenderTarget(I.map),o.clear());const D=I.getViewport(St);h.set(c.x*D.x,c.y*D.y,c.x*D.z,c.y*D.w),q.viewport(h)}if(P.isPointLight){const D=I.camera,tt=I.matrix,Et=P.distance||D.far;Et!==D.far&&(D.far=Et,D.updateProjectionMatrix()),Yo.setFromMatrixPosition(P.matrixWorld),D.position.copy(Yo),qh.copy(D.position),qh.add(J1[St]),D.up.copy($1[St]),D.lookAt(qh),D.updateMatrixWorld(),tt.makeTranslation(-Yo.x,-Yo.y,-Yo.z),Z_.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),I._frustum.setFromProjectionMatrix(Z_,D.coordinateSystem,D.reversedDepth)}else I.updateMatrices(P);s=I.getFrustum(),N(z,j,I.camera,P,this.type)}I.isPointLightShadow!==!0&&this.type===Zo&&L(I,j),I.needsUpdate=!1}_=this.type,M.needsUpdate=!1,o.setRenderTarget(T,w,V)};function L(B,z){const j=e.update(C);S.defines.VSM_SAMPLES!==B.blurSamples&&(S.defines.VSM_SAMPLES=B.blurSamples,y.defines.VSM_SAMPLES=B.blurSamples,S.needsUpdate=!0,y.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new qi(l.x,l.y,{format:Xr,type:Ta})),S.uniforms.shadow_pass.value=B.map.depthTexture,S.uniforms.resolution.value=B.mapSize,S.uniforms.radius.value=B.radius,o.setRenderTarget(B.mapPass),o.clear(),o.renderBufferDirect(z,null,j,S,C,null),y.uniforms.shadow_pass.value=B.mapPass.texture,y.uniforms.resolution.value=B.mapSize,y.uniforms.radius.value=B.radius,o.setRenderTarget(B.map),o.clear(),o.renderBufferDirect(z,null,j,y,C,null)}function O(B,z,j,T){let w=null;const V=j.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(V!==void 0)w=V;else if(w=j.isPointLight===!0?m:d,o.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const q=w.uuid,Q=z.uuid;let ut=p[q];ut===void 0&&(ut={},p[q]=ut);let pt=ut[Q];pt===void 0&&(pt=w.clone(),ut[Q]=pt,z.addEventListener("dispose",F)),w=pt}if(w.visible=z.visible,w.wireframe=z.wireframe,T===Zo?w.side=z.shadowSide!==null?z.shadowSide:z.side:w.side=z.shadowSide!==null?z.shadowSide:g[z.side],w.alphaMap=z.alphaMap,w.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,w.map=z.map,w.clipShadows=z.clipShadows,w.clippingPlanes=z.clippingPlanes,w.clipIntersection=z.clipIntersection,w.displacementMap=z.displacementMap,w.displacementScale=z.displacementScale,w.displacementBias=z.displacementBias,w.wireframeLinewidth=z.wireframeLinewidth,w.linewidth=z.linewidth,j.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const q=o.properties.get(w);q.light=j}return w}function N(B,z,j,T,w){if(B.visible===!1)return;if(B.layers.test(z.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&w===Zo)&&(!B.frustumCulled||s.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,B.matrixWorld);const Q=e.update(B),ut=B.material;if(Array.isArray(ut)){const pt=Q.groups;for(let P=0,I=pt.length;P<I;P++){const at=pt[P],Ut=ut[at.materialIndex];if(Ut&&Ut.visible){const St=O(B,Ut,T,w);B.onBeforeShadow(o,B,z,j,Q,St,at),o.renderBufferDirect(j,null,Q,St,B,at),B.onAfterShadow(o,B,z,j,Q,St,at)}}}else if(ut.visible){const pt=O(B,ut,T,w);B.onBeforeShadow(o,B,z,j,Q,pt,null),o.renderBufferDirect(j,null,Q,pt,B,null),B.onAfterShadow(o,B,z,j,Q,pt,null)}}const q=B.children;for(let Q=0,ut=q.length;Q<ut;Q++)N(q[Q],z,j,T,w)}function F(B){B.target.removeEventListener("dispose",F);for(const j in p){const T=p[j],w=B.target.uuid;w in T&&(T[w].dispose(),delete T[w])}}}const eA={[Kh]:Qh,[Jh]:ed,[$h]:nd,[Gr]:td,[Qh]:Kh,[ed]:Jh,[nd]:$h,[td]:Gr};function nA(o,e){function i(){let G=!1;const wt=new an;let bt=null;const Pt=new an(0,0,0,0);return{setMask:function(_t){bt!==_t&&!G&&(o.colorMask(_t,_t,_t,_t),bt=_t)},setLocked:function(_t){G=_t},setClear:function(_t,gt,Nt,Jt,ve){ve===!0&&(_t*=Jt,gt*=Jt,Nt*=Jt),wt.set(_t,gt,Nt,Jt),Pt.equals(wt)===!1&&(o.clearColor(_t,gt,Nt,Jt),Pt.copy(wt))},reset:function(){G=!1,bt=null,Pt.set(-1,0,0,0)}}}function s(){let G=!1,wt=!1,bt=null,Pt=null,_t=null;return{setReversed:function(gt){if(wt!==gt){const Nt=e.get("EXT_clip_control");gt?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT),wt=gt;const Jt=_t;_t=null,this.setClear(Jt)}},getReversed:function(){return wt},setTest:function(gt){gt?dt(o.DEPTH_TEST):Ft(o.DEPTH_TEST)},setMask:function(gt){bt!==gt&&!G&&(o.depthMask(gt),bt=gt)},setFunc:function(gt){if(wt&&(gt=eA[gt]),Pt!==gt){switch(gt){case Kh:o.depthFunc(o.NEVER);break;case Qh:o.depthFunc(o.ALWAYS);break;case Jh:o.depthFunc(o.LESS);break;case Gr:o.depthFunc(o.LEQUAL);break;case $h:o.depthFunc(o.EQUAL);break;case td:o.depthFunc(o.GEQUAL);break;case ed:o.depthFunc(o.GREATER);break;case nd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Pt=gt}},setLocked:function(gt){G=gt},setClear:function(gt){_t!==gt&&(wt&&(gt=1-gt),o.clearDepth(gt),_t=gt)},reset:function(){G=!1,bt=null,Pt=null,_t=null,wt=!1}}}function l(){let G=!1,wt=null,bt=null,Pt=null,_t=null,gt=null,Nt=null,Jt=null,ve=null;return{setTest:function(me){G||(me?dt(o.STENCIL_TEST):Ft(o.STENCIL_TEST))},setMask:function(me){wt!==me&&!G&&(o.stencilMask(me),wt=me)},setFunc:function(me,ln,Bn){(bt!==me||Pt!==ln||_t!==Bn)&&(o.stencilFunc(me,ln,Bn),bt=me,Pt=ln,_t=Bn)},setOp:function(me,ln,Bn){(gt!==me||Nt!==ln||Jt!==Bn)&&(o.stencilOp(me,ln,Bn),gt=me,Nt=ln,Jt=Bn)},setLocked:function(me){G=me},setClear:function(me){ve!==me&&(o.clearStencil(me),ve=me)},reset:function(){G=!1,wt=null,bt=null,Pt=null,_t=null,gt=null,Nt=null,Jt=null,ve=null}}}const c=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let x={},g={},S=new WeakMap,y=[],b=null,C=!1,M=null,_=null,L=null,O=null,N=null,F=null,B=null,z=new Ae(0,0,0),j=0,T=!1,w=null,V=null,q=null,Q=null,ut=null;const pt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,I=0;const at=o.getParameter(o.VERSION);at.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(at)[1]),P=I>=1):at.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(at)[1]),P=I>=2);let Ut=null,St={};const D=o.getParameter(o.SCISSOR_BOX),tt=o.getParameter(o.VIEWPORT),Et=new an().fromArray(D),Ot=new an().fromArray(tt);function Vt(G,wt,bt,Pt){const _t=new Uint8Array(4),gt=o.createTexture();o.bindTexture(G,gt),o.texParameteri(G,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(G,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Nt=0;Nt<bt;Nt++)G===o.TEXTURE_3D||G===o.TEXTURE_2D_ARRAY?o.texImage3D(wt,0,o.RGBA,1,1,Pt,0,o.RGBA,o.UNSIGNED_BYTE,_t):o.texImage2D(wt+Nt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,_t);return gt}const it={};it[o.TEXTURE_2D]=Vt(o.TEXTURE_2D,o.TEXTURE_2D,1),it[o.TEXTURE_CUBE_MAP]=Vt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[o.TEXTURE_2D_ARRAY]=Vt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),it[o.TEXTURE_3D]=Vt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),dt(o.DEPTH_TEST),h.setFunc(Gr),ae(!1),qe(jg),dt(o.CULL_FACE),pe(Ea);function dt(G){x[G]!==!0&&(o.enable(G),x[G]=!0)}function Ft(G){x[G]!==!1&&(o.disable(G),x[G]=!1)}function Wt(G,wt){return g[G]!==wt?(o.bindFramebuffer(G,wt),g[G]=wt,G===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=wt),G===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=wt),!0):!1}function Xt(G,wt){let bt=y,Pt=!1;if(G){bt=S.get(wt),bt===void 0&&(bt=[],S.set(wt,bt));const _t=G.textures;if(bt.length!==_t.length||bt[0]!==o.COLOR_ATTACHMENT0){for(let gt=0,Nt=_t.length;gt<Nt;gt++)bt[gt]=o.COLOR_ATTACHMENT0+gt;bt.length=_t.length,Pt=!0}}else bt[0]!==o.BACK&&(bt[0]=o.BACK,Pt=!0);Pt&&o.drawBuffers(bt)}function ue(G){return b!==G?(o.useProgram(G),b=G,!0):!1}const Ze={[Fs]:o.FUNC_ADD,[nM]:o.FUNC_SUBTRACT,[iM]:o.FUNC_REVERSE_SUBTRACT};Ze[aM]=o.MIN,Ze[sM]=o.MAX;const le={[rM]:o.ZERO,[oM]:o.ONE,[lM]:o.SRC_COLOR,[jh]:o.SRC_ALPHA,[pM]:o.SRC_ALPHA_SATURATE,[hM]:o.DST_COLOR,[uM]:o.DST_ALPHA,[cM]:o.ONE_MINUS_SRC_COLOR,[Zh]:o.ONE_MINUS_SRC_ALPHA,[dM]:o.ONE_MINUS_DST_COLOR,[fM]:o.ONE_MINUS_DST_ALPHA,[mM]:o.CONSTANT_COLOR,[gM]:o.ONE_MINUS_CONSTANT_COLOR,[_M]:o.CONSTANT_ALPHA,[vM]:o.ONE_MINUS_CONSTANT_ALPHA};function pe(G,wt,bt,Pt,_t,gt,Nt,Jt,ve,me){if(G===Ea){C===!0&&(Ft(o.BLEND),C=!1);return}if(C===!1&&(dt(o.BLEND),C=!0),G!==eM){if(G!==M||me!==T){if((_!==Fs||N!==Fs)&&(o.blendEquation(o.FUNC_ADD),_=Fs,N=Fs),me)switch(G){case Ir:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Yh:o.blendFunc(o.ONE,o.ONE);break;case Zg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Kg:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:we("WebGLState: Invalid blending: ",G);break}else switch(G){case Ir:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Yh:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Zg:we("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Kg:we("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:we("WebGLState: Invalid blending: ",G);break}L=null,O=null,F=null,B=null,z.set(0,0,0),j=0,M=G,T=me}return}_t=_t||wt,gt=gt||bt,Nt=Nt||Pt,(wt!==_||_t!==N)&&(o.blendEquationSeparate(Ze[wt],Ze[_t]),_=wt,N=_t),(bt!==L||Pt!==O||gt!==F||Nt!==B)&&(o.blendFuncSeparate(le[bt],le[Pt],le[gt],le[Nt]),L=bt,O=Pt,F=gt,B=Nt),(Jt.equals(z)===!1||ve!==j)&&(o.blendColor(Jt.r,Jt.g,Jt.b,ve),z.copy(Jt),j=ve),M=G,T=!1}function Re(G,wt){G.side===Vi?Ft(o.CULL_FACE):dt(o.CULL_FACE);let bt=G.side===Kn;wt&&(bt=!bt),ae(bt),G.blending===Ir&&G.transparent===!1?pe(Ea):pe(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),h.setFunc(G.depthFunc),h.setTest(G.depthTest),h.setMask(G.depthWrite),c.setMask(G.colorWrite);const Pt=G.stencilWrite;d.setTest(Pt),Pt&&(d.setMask(G.stencilWriteMask),d.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),d.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Ye(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?dt(o.SAMPLE_ALPHA_TO_COVERAGE):Ft(o.SAMPLE_ALPHA_TO_COVERAGE)}function ae(G){w!==G&&(G?o.frontFace(o.CW):o.frontFace(o.CCW),w=G)}function qe(G){G!==JS?(dt(o.CULL_FACE),G!==V&&(G===jg?o.cullFace(o.BACK):G===$S?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ft(o.CULL_FACE),V=G}function X(G){G!==q&&(P&&o.lineWidth(G),q=G)}function Ye(G,wt,bt){G?(dt(o.POLYGON_OFFSET_FILL),(Q!==wt||ut!==bt)&&(o.polygonOffset(wt,bt),Q=wt,ut=bt)):Ft(o.POLYGON_OFFSET_FILL)}function _e(G){G?dt(o.SCISSOR_TEST):Ft(o.SCISSOR_TEST)}function Ce(G){G===void 0&&(G=o.TEXTURE0+pt-1),Ut!==G&&(o.activeTexture(G),Ut=G)}function qt(G,wt,bt){bt===void 0&&(Ut===null?bt=o.TEXTURE0+pt-1:bt=Ut);let Pt=St[bt];Pt===void 0&&(Pt={type:void 0,texture:void 0},St[bt]=Pt),(Pt.type!==G||Pt.texture!==wt)&&(Ut!==bt&&(o.activeTexture(bt),Ut=bt),o.bindTexture(G,wt||it[G]),Pt.type=G,Pt.texture=wt)}function U(){const G=St[Ut];G!==void 0&&G.type!==void 0&&(o.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(G){we("WebGLState:",G)}}function W(){try{o.compressedTexImage3D(...arguments)}catch(G){we("WebGLState:",G)}}function xt(){try{o.texSubImage2D(...arguments)}catch(G){we("WebGLState:",G)}}function At(){try{o.texSubImage3D(...arguments)}catch(G){we("WebGLState:",G)}}function mt(){try{o.compressedTexSubImage2D(...arguments)}catch(G){we("WebGLState:",G)}}function rt(){try{o.compressedTexSubImage3D(...arguments)}catch(G){we("WebGLState:",G)}}function st(){try{o.texStorage2D(...arguments)}catch(G){we("WebGLState:",G)}}function ct(){try{o.texStorage3D(...arguments)}catch(G){we("WebGLState:",G)}}function Rt(){try{o.texImage2D(...arguments)}catch(G){we("WebGLState:",G)}}function et(){try{o.texImage3D(...arguments)}catch(G){we("WebGLState:",G)}}function Mt(G){Et.equals(G)===!1&&(o.scissor(G.x,G.y,G.z,G.w),Et.copy(G))}function Lt(G){Ot.equals(G)===!1&&(o.viewport(G.x,G.y,G.z,G.w),Ot.copy(G))}function Dt(G,wt){let bt=p.get(wt);bt===void 0&&(bt=new WeakMap,p.set(wt,bt));let Pt=bt.get(G);Pt===void 0&&(Pt=o.getUniformBlockIndex(wt,G.name),bt.set(G,Pt))}function Ct(G,wt){const Pt=p.get(wt).get(G);m.get(wt)!==Pt&&(o.uniformBlockBinding(wt,Pt,G.__bindingPointIndex),m.set(wt,Pt))}function Bt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),x={},Ut=null,St={},g={},S=new WeakMap,y=[],b=null,C=!1,M=null,_=null,L=null,O=null,N=null,F=null,B=null,z=new Ae(0,0,0),j=0,T=!1,w=null,V=null,q=null,Q=null,ut=null,Et.set(0,0,o.canvas.width,o.canvas.height),Ot.set(0,0,o.canvas.width,o.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:dt,disable:Ft,bindFramebuffer:Wt,drawBuffers:Xt,useProgram:ue,setBlending:pe,setMaterial:Re,setFlipSided:ae,setCullFace:qe,setLineWidth:X,setPolygonOffset:Ye,setScissorTest:_e,activeTexture:Ce,bindTexture:qt,unbindTexture:U,compressedTexImage2D:E,compressedTexImage3D:W,texImage2D:Rt,texImage3D:et,updateUBOMapping:Dt,uniformBlockBinding:Ct,texStorage2D:st,texStorage3D:ct,texSubImage2D:xt,texSubImage3D:At,compressedTexSubImage2D:mt,compressedTexSubImage3D:rt,scissor:Mt,viewport:Lt,reset:Bt}}function iA(o,e,i,s,l,c,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ue,x=new WeakMap;let g;const S=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(U,E){return y?new OffscreenCanvas(U,E):Zc("canvas")}function C(U,E,W){let xt=1;const At=qt(U);if((At.width>W||At.height>W)&&(xt=W/Math.max(At.width,At.height)),xt<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const mt=Math.floor(xt*At.width),rt=Math.floor(xt*At.height);g===void 0&&(g=b(mt,rt));const st=E?b(mt,rt):g;return st.width=mt,st.height=rt,st.getContext("2d").drawImage(U,0,0,mt,rt),re("WebGLRenderer: Texture has been resized from ("+At.width+"x"+At.height+") to ("+mt+"x"+rt+")."),st}else return"data"in U&&re("WebGLRenderer: Image in DataTexture is too big ("+At.width+"x"+At.height+")."),U;return U}function M(U){return U.generateMipmaps}function _(U){o.generateMipmap(U)}function L(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function O(U,E,W,xt,At=!1){if(U!==null){if(o[U]!==void 0)return o[U];re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let mt=E;if(E===o.RED&&(W===o.FLOAT&&(mt=o.R32F),W===o.HALF_FLOAT&&(mt=o.R16F),W===o.UNSIGNED_BYTE&&(mt=o.R8)),E===o.RED_INTEGER&&(W===o.UNSIGNED_BYTE&&(mt=o.R8UI),W===o.UNSIGNED_SHORT&&(mt=o.R16UI),W===o.UNSIGNED_INT&&(mt=o.R32UI),W===o.BYTE&&(mt=o.R8I),W===o.SHORT&&(mt=o.R16I),W===o.INT&&(mt=o.R32I)),E===o.RG&&(W===o.FLOAT&&(mt=o.RG32F),W===o.HALF_FLOAT&&(mt=o.RG16F),W===o.UNSIGNED_BYTE&&(mt=o.RG8)),E===o.RG_INTEGER&&(W===o.UNSIGNED_BYTE&&(mt=o.RG8UI),W===o.UNSIGNED_SHORT&&(mt=o.RG16UI),W===o.UNSIGNED_INT&&(mt=o.RG32UI),W===o.BYTE&&(mt=o.RG8I),W===o.SHORT&&(mt=o.RG16I),W===o.INT&&(mt=o.RG32I)),E===o.RGB_INTEGER&&(W===o.UNSIGNED_BYTE&&(mt=o.RGB8UI),W===o.UNSIGNED_SHORT&&(mt=o.RGB16UI),W===o.UNSIGNED_INT&&(mt=o.RGB32UI),W===o.BYTE&&(mt=o.RGB8I),W===o.SHORT&&(mt=o.RGB16I),W===o.INT&&(mt=o.RGB32I)),E===o.RGBA_INTEGER&&(W===o.UNSIGNED_BYTE&&(mt=o.RGBA8UI),W===o.UNSIGNED_SHORT&&(mt=o.RGBA16UI),W===o.UNSIGNED_INT&&(mt=o.RGBA32UI),W===o.BYTE&&(mt=o.RGBA8I),W===o.SHORT&&(mt=o.RGBA16I),W===o.INT&&(mt=o.RGBA32I)),E===o.RGB&&(W===o.UNSIGNED_INT_5_9_9_9_REV&&(mt=o.RGB9_E5),W===o.UNSIGNED_INT_10F_11F_11F_REV&&(mt=o.R11F_G11F_B10F)),E===o.RGBA){const rt=At?Yc:De.getTransfer(xt);W===o.FLOAT&&(mt=o.RGBA32F),W===o.HALF_FLOAT&&(mt=o.RGBA16F),W===o.UNSIGNED_BYTE&&(mt=rt===Ge?o.SRGB8_ALPHA8:o.RGBA8),W===o.UNSIGNED_SHORT_4_4_4_4&&(mt=o.RGBA4),W===o.UNSIGNED_SHORT_5_5_5_1&&(mt=o.RGB5_A1)}return(mt===o.R16F||mt===o.R32F||mt===o.RG16F||mt===o.RG32F||mt===o.RGBA16F||mt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),mt}function N(U,E){let W;return U?E===null||E===Yi||E===$o?W=o.DEPTH24_STENCIL8:E===Xi?W=o.DEPTH32F_STENCIL8:E===Jo&&(W=o.DEPTH24_STENCIL8,re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Yi||E===$o?W=o.DEPTH_COMPONENT24:E===Xi?W=o.DEPTH_COMPONENT32F:E===Jo&&(W=o.DEPTH_COMPONENT16),W}function F(U,E){return M(U)===!0||U.isFramebufferTexture&&U.minFilter!==Nn&&U.minFilter!==zn?Math.log2(Math.max(E.width,E.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?E.mipmaps.length:1}function B(U){const E=U.target;E.removeEventListener("dispose",B),j(E),E.isVideoTexture&&x.delete(E)}function z(U){const E=U.target;E.removeEventListener("dispose",z),w(E)}function j(U){const E=s.get(U);if(E.__webglInit===void 0)return;const W=U.source,xt=S.get(W);if(xt){const At=xt[E.__cacheKey];At.usedTimes--,At.usedTimes===0&&T(U),Object.keys(xt).length===0&&S.delete(W)}s.remove(U)}function T(U){const E=s.get(U);o.deleteTexture(E.__webglTexture);const W=U.source,xt=S.get(W);delete xt[E.__cacheKey],h.memory.textures--}function w(U){const E=s.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),s.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let xt=0;xt<6;xt++){if(Array.isArray(E.__webglFramebuffer[xt]))for(let At=0;At<E.__webglFramebuffer[xt].length;At++)o.deleteFramebuffer(E.__webglFramebuffer[xt][At]);else o.deleteFramebuffer(E.__webglFramebuffer[xt]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[xt])}else{if(Array.isArray(E.__webglFramebuffer))for(let xt=0;xt<E.__webglFramebuffer.length;xt++)o.deleteFramebuffer(E.__webglFramebuffer[xt]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let xt=0;xt<E.__webglColorRenderbuffer.length;xt++)E.__webglColorRenderbuffer[xt]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[xt]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const W=U.textures;for(let xt=0,At=W.length;xt<At;xt++){const mt=s.get(W[xt]);mt.__webglTexture&&(o.deleteTexture(mt.__webglTexture),h.memory.textures--),s.remove(W[xt])}s.remove(U)}let V=0;function q(){V=0}function Q(){const U=V;return U>=l.maxTextures&&re("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),V+=1,U}function ut(U){const E=[];return E.push(U.wrapS),E.push(U.wrapT),E.push(U.wrapR||0),E.push(U.magFilter),E.push(U.minFilter),E.push(U.anisotropy),E.push(U.internalFormat),E.push(U.format),E.push(U.type),E.push(U.generateMipmaps),E.push(U.premultiplyAlpha),E.push(U.flipY),E.push(U.unpackAlignment),E.push(U.colorSpace),E.join()}function pt(U,E){const W=s.get(U);if(U.isVideoTexture&&_e(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&W.__version!==U.version){const xt=U.image;if(xt===null)re("WebGLRenderer: Texture marked for update but no image data found.");else if(xt.complete===!1)re("WebGLRenderer: Texture marked for update but image is incomplete");else{it(W,U,E);return}}else U.isExternalTexture&&(W.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,W.__webglTexture,o.TEXTURE0+E)}function P(U,E){const W=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&W.__version!==U.version){it(W,U,E);return}else U.isExternalTexture&&(W.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,W.__webglTexture,o.TEXTURE0+E)}function I(U,E){const W=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&W.__version!==U.version){it(W,U,E);return}i.bindTexture(o.TEXTURE_3D,W.__webglTexture,o.TEXTURE0+E)}function at(U,E){const W=s.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&W.__version!==U.version){dt(W,U,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,W.__webglTexture,o.TEXTURE0+E)}const Ut={[sd]:o.REPEAT,[Ma]:o.CLAMP_TO_EDGE,[rd]:o.MIRRORED_REPEAT},St={[Nn]:o.NEAREST,[MM]:o.NEAREST_MIPMAP_NEAREST,[_c]:o.NEAREST_MIPMAP_LINEAR,[zn]:o.LINEAR,[ph]:o.LINEAR_MIPMAP_NEAREST,[Is]:o.LINEAR_MIPMAP_LINEAR},D={[bM]:o.NEVER,[wM]:o.ALWAYS,[TM]:o.LESS,[Jd]:o.LEQUAL,[AM]:o.EQUAL,[$d]:o.GEQUAL,[RM]:o.GREATER,[CM]:o.NOTEQUAL};function tt(U,E){if(E.type===Xi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===zn||E.magFilter===ph||E.magFilter===_c||E.magFilter===Is||E.minFilter===zn||E.minFilter===ph||E.minFilter===_c||E.minFilter===Is)&&re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,Ut[E.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,Ut[E.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,Ut[E.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,St[E.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,St[E.minFilter]),E.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,D[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Nn||E.minFilter!==_c&&E.minFilter!==Is||E.type===Xi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");o.texParameterf(U,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function Et(U,E){let W=!1;U.__webglInit===void 0&&(U.__webglInit=!0,E.addEventListener("dispose",B));const xt=E.source;let At=S.get(xt);At===void 0&&(At={},S.set(xt,At));const mt=ut(E);if(mt!==U.__cacheKey){At[mt]===void 0&&(At[mt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,W=!0),At[mt].usedTimes++;const rt=At[U.__cacheKey];rt!==void 0&&(At[U.__cacheKey].usedTimes--,rt.usedTimes===0&&T(E)),U.__cacheKey=mt,U.__webglTexture=At[mt].texture}return W}function Ot(U,E,W){return Math.floor(Math.floor(U/W)/E)}function Vt(U,E,W,xt){const mt=U.updateRanges;if(mt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,W,xt,E.data);else{mt.sort((et,Mt)=>et.start-Mt.start);let rt=0;for(let et=1;et<mt.length;et++){const Mt=mt[rt],Lt=mt[et],Dt=Mt.start+Mt.count,Ct=Ot(Lt.start,E.width,4),Bt=Ot(Mt.start,E.width,4);Lt.start<=Dt+1&&Ct===Bt&&Ot(Lt.start+Lt.count-1,E.width,4)===Ct?Mt.count=Math.max(Mt.count,Lt.start+Lt.count-Mt.start):(++rt,mt[rt]=Lt)}mt.length=rt+1;const st=o.getParameter(o.UNPACK_ROW_LENGTH),ct=o.getParameter(o.UNPACK_SKIP_PIXELS),Rt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let et=0,Mt=mt.length;et<Mt;et++){const Lt=mt[et],Dt=Math.floor(Lt.start/4),Ct=Math.ceil(Lt.count/4),Bt=Dt%E.width,G=Math.floor(Dt/E.width),wt=Ct,bt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,Bt),o.pixelStorei(o.UNPACK_SKIP_ROWS,G),i.texSubImage2D(o.TEXTURE_2D,0,Bt,G,wt,bt,W,xt,E.data)}U.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,st),o.pixelStorei(o.UNPACK_SKIP_PIXELS,ct),o.pixelStorei(o.UNPACK_SKIP_ROWS,Rt)}}function it(U,E,W){let xt=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(xt=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(xt=o.TEXTURE_3D);const At=Et(U,E),mt=E.source;i.bindTexture(xt,U.__webglTexture,o.TEXTURE0+W);const rt=s.get(mt);if(mt.version!==rt.__version||At===!0){i.activeTexture(o.TEXTURE0+W);const st=De.getPrimaries(De.workingColorSpace),ct=E.colorSpace===os?null:De.getPrimaries(E.colorSpace),Rt=E.colorSpace===os||st===ct?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);let et=C(E.image,!1,l.maxTextureSize);et=Ce(E,et);const Mt=c.convert(E.format,E.colorSpace),Lt=c.convert(E.type);let Dt=O(E.internalFormat,Mt,Lt,E.colorSpace,E.isVideoTexture);tt(xt,E);let Ct;const Bt=E.mipmaps,G=E.isVideoTexture!==!0,wt=rt.__version===void 0||At===!0,bt=mt.dataReady,Pt=F(E,et);if(E.isDepthTexture)Dt=N(E.format===Hs,E.type),wt&&(G?i.texStorage2D(o.TEXTURE_2D,1,Dt,et.width,et.height):i.texImage2D(o.TEXTURE_2D,0,Dt,et.width,et.height,0,Mt,Lt,null));else if(E.isDataTexture)if(Bt.length>0){G&&wt&&i.texStorage2D(o.TEXTURE_2D,Pt,Dt,Bt[0].width,Bt[0].height);for(let _t=0,gt=Bt.length;_t<gt;_t++)Ct=Bt[_t],G?bt&&i.texSubImage2D(o.TEXTURE_2D,_t,0,0,Ct.width,Ct.height,Mt,Lt,Ct.data):i.texImage2D(o.TEXTURE_2D,_t,Dt,Ct.width,Ct.height,0,Mt,Lt,Ct.data);E.generateMipmaps=!1}else G?(wt&&i.texStorage2D(o.TEXTURE_2D,Pt,Dt,et.width,et.height),bt&&Vt(E,et,Mt,Lt)):i.texImage2D(o.TEXTURE_2D,0,Dt,et.width,et.height,0,Mt,Lt,et.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){G&&wt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Pt,Dt,Bt[0].width,Bt[0].height,et.depth);for(let _t=0,gt=Bt.length;_t<gt;_t++)if(Ct=Bt[_t],E.format!==Oi)if(Mt!==null)if(G){if(bt)if(E.layerUpdates.size>0){const Nt=A_(Ct.width,Ct.height,E.format,E.type);for(const Jt of E.layerUpdates){const ve=Ct.data.subarray(Jt*Nt/Ct.data.BYTES_PER_ELEMENT,(Jt+1)*Nt/Ct.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,_t,0,0,Jt,Ct.width,Ct.height,1,Mt,ve)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,_t,0,0,0,Ct.width,Ct.height,et.depth,Mt,Ct.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,_t,Dt,Ct.width,Ct.height,et.depth,0,Ct.data,0,0);else re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?bt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,_t,0,0,0,Ct.width,Ct.height,et.depth,Mt,Lt,Ct.data):i.texImage3D(o.TEXTURE_2D_ARRAY,_t,Dt,Ct.width,Ct.height,et.depth,0,Mt,Lt,Ct.data)}else{G&&wt&&i.texStorage2D(o.TEXTURE_2D,Pt,Dt,Bt[0].width,Bt[0].height);for(let _t=0,gt=Bt.length;_t<gt;_t++)Ct=Bt[_t],E.format!==Oi?Mt!==null?G?bt&&i.compressedTexSubImage2D(o.TEXTURE_2D,_t,0,0,Ct.width,Ct.height,Mt,Ct.data):i.compressedTexImage2D(o.TEXTURE_2D,_t,Dt,Ct.width,Ct.height,0,Ct.data):re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?bt&&i.texSubImage2D(o.TEXTURE_2D,_t,0,0,Ct.width,Ct.height,Mt,Lt,Ct.data):i.texImage2D(o.TEXTURE_2D,_t,Dt,Ct.width,Ct.height,0,Mt,Lt,Ct.data)}else if(E.isDataArrayTexture)if(G){if(wt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Pt,Dt,et.width,et.height,et.depth),bt)if(E.layerUpdates.size>0){const _t=A_(et.width,et.height,E.format,E.type);for(const gt of E.layerUpdates){const Nt=et.data.subarray(gt*_t/et.data.BYTES_PER_ELEMENT,(gt+1)*_t/et.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,gt,et.width,et.height,1,Mt,Lt,Nt)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,Mt,Lt,et.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Dt,et.width,et.height,et.depth,0,Mt,Lt,et.data);else if(E.isData3DTexture)G?(wt&&i.texStorage3D(o.TEXTURE_3D,Pt,Dt,et.width,et.height,et.depth),bt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,Mt,Lt,et.data)):i.texImage3D(o.TEXTURE_3D,0,Dt,et.width,et.height,et.depth,0,Mt,Lt,et.data);else if(E.isFramebufferTexture){if(wt)if(G)i.texStorage2D(o.TEXTURE_2D,Pt,Dt,et.width,et.height);else{let _t=et.width,gt=et.height;for(let Nt=0;Nt<Pt;Nt++)i.texImage2D(o.TEXTURE_2D,Nt,Dt,_t,gt,0,Mt,Lt,null),_t>>=1,gt>>=1}}else if(Bt.length>0){if(G&&wt){const _t=qt(Bt[0]);i.texStorage2D(o.TEXTURE_2D,Pt,Dt,_t.width,_t.height)}for(let _t=0,gt=Bt.length;_t<gt;_t++)Ct=Bt[_t],G?bt&&i.texSubImage2D(o.TEXTURE_2D,_t,0,0,Mt,Lt,Ct):i.texImage2D(o.TEXTURE_2D,_t,Dt,Mt,Lt,Ct);E.generateMipmaps=!1}else if(G){if(wt){const _t=qt(et);i.texStorage2D(o.TEXTURE_2D,Pt,Dt,_t.width,_t.height)}bt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Mt,Lt,et)}else i.texImage2D(o.TEXTURE_2D,0,Dt,Mt,Lt,et);M(E)&&_(xt),rt.__version=mt.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function dt(U,E,W){if(E.image.length!==6)return;const xt=Et(U,E),At=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+W);const mt=s.get(At);if(At.version!==mt.__version||xt===!0){i.activeTexture(o.TEXTURE0+W);const rt=De.getPrimaries(De.workingColorSpace),st=E.colorSpace===os?null:De.getPrimaries(E.colorSpace),ct=E.colorSpace===os||rt===st?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);const Rt=E.isCompressedTexture||E.image[0].isCompressedTexture,et=E.image[0]&&E.image[0].isDataTexture,Mt=[];for(let gt=0;gt<6;gt++)!Rt&&!et?Mt[gt]=C(E.image[gt],!0,l.maxCubemapSize):Mt[gt]=et?E.image[gt].image:E.image[gt],Mt[gt]=Ce(E,Mt[gt]);const Lt=Mt[0],Dt=c.convert(E.format,E.colorSpace),Ct=c.convert(E.type),Bt=O(E.internalFormat,Dt,Ct,E.colorSpace),G=E.isVideoTexture!==!0,wt=mt.__version===void 0||xt===!0,bt=At.dataReady;let Pt=F(E,Lt);tt(o.TEXTURE_CUBE_MAP,E);let _t;if(Rt){G&&wt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Pt,Bt,Lt.width,Lt.height);for(let gt=0;gt<6;gt++){_t=Mt[gt].mipmaps;for(let Nt=0;Nt<_t.length;Nt++){const Jt=_t[Nt];E.format!==Oi?Dt!==null?G?bt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Nt,0,0,Jt.width,Jt.height,Dt,Jt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Nt,Bt,Jt.width,Jt.height,0,Jt.data):re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Nt,0,0,Jt.width,Jt.height,Dt,Ct,Jt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Nt,Bt,Jt.width,Jt.height,0,Dt,Ct,Jt.data)}}}else{if(_t=E.mipmaps,G&&wt){_t.length>0&&Pt++;const gt=qt(Mt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Pt,Bt,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(et){G?bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Mt[gt].width,Mt[gt].height,Dt,Ct,Mt[gt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,Bt,Mt[gt].width,Mt[gt].height,0,Dt,Ct,Mt[gt].data);for(let Nt=0;Nt<_t.length;Nt++){const ve=_t[Nt].image[gt].image;G?bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Nt+1,0,0,ve.width,ve.height,Dt,Ct,ve.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Nt+1,Bt,ve.width,ve.height,0,Dt,Ct,ve.data)}}else{G?bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Dt,Ct,Mt[gt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,Bt,Dt,Ct,Mt[gt]);for(let Nt=0;Nt<_t.length;Nt++){const Jt=_t[Nt];G?bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Nt+1,0,0,Dt,Ct,Jt.image[gt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Nt+1,Bt,Dt,Ct,Jt.image[gt])}}}M(E)&&_(o.TEXTURE_CUBE_MAP),mt.__version=At.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function Ft(U,E,W,xt,At,mt){const rt=c.convert(W.format,W.colorSpace),st=c.convert(W.type),ct=O(W.internalFormat,rt,st,W.colorSpace),Rt=s.get(E),et=s.get(W);if(et.__renderTarget=E,!Rt.__hasExternalTextures){const Mt=Math.max(1,E.width>>mt),Lt=Math.max(1,E.height>>mt);At===o.TEXTURE_3D||At===o.TEXTURE_2D_ARRAY?i.texImage3D(At,mt,ct,Mt,Lt,E.depth,0,rt,st,null):i.texImage2D(At,mt,ct,Mt,Lt,0,rt,st,null)}i.bindFramebuffer(o.FRAMEBUFFER,U),Ye(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,xt,At,et.__webglTexture,0,X(E)):(At===o.TEXTURE_2D||At>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&At<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,xt,At,et.__webglTexture,mt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Wt(U,E,W){if(o.bindRenderbuffer(o.RENDERBUFFER,U),E.depthBuffer){const xt=E.depthTexture,At=xt&&xt.isDepthTexture?xt.type:null,mt=N(E.stencilBuffer,At),rt=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;Ye(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,X(E),mt,E.width,E.height):W?o.renderbufferStorageMultisample(o.RENDERBUFFER,X(E),mt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,mt,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,rt,o.RENDERBUFFER,U)}else{const xt=E.textures;for(let At=0;At<xt.length;At++){const mt=xt[At],rt=c.convert(mt.format,mt.colorSpace),st=c.convert(mt.type),ct=O(mt.internalFormat,rt,st,mt.colorSpace);Ye(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,X(E),ct,E.width,E.height):W?o.renderbufferStorageMultisample(o.RENDERBUFFER,X(E),ct,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,ct,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Xt(U,E,W){const xt=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,U),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const At=s.get(E.depthTexture);if(At.__renderTarget=E,(!At.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),xt){if(At.__webglInit===void 0&&(At.__webglInit=!0,E.depthTexture.addEventListener("dispose",B)),At.__webglTexture===void 0){At.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,At.__webglTexture),tt(o.TEXTURE_CUBE_MAP,E.depthTexture);const Rt=c.convert(E.depthTexture.format),et=c.convert(E.depthTexture.type);let Mt;E.depthTexture.format===Aa?Mt=o.DEPTH_COMPONENT24:E.depthTexture.format===Hs&&(Mt=o.DEPTH24_STENCIL8);for(let Lt=0;Lt<6;Lt++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0,Mt,E.width,E.height,0,Rt,et,null)}}else pt(E.depthTexture,0);const mt=At.__webglTexture,rt=X(E),st=xt?o.TEXTURE_CUBE_MAP_POSITIVE_X+W:o.TEXTURE_2D,ct=E.depthTexture.format===Hs?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(E.depthTexture.format===Aa)Ye(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ct,st,mt,0,rt):o.framebufferTexture2D(o.FRAMEBUFFER,ct,st,mt,0);else if(E.depthTexture.format===Hs)Ye(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ct,st,mt,0,rt):o.framebufferTexture2D(o.FRAMEBUFFER,ct,st,mt,0);else throw new Error("Unknown depthTexture format")}function ue(U){const E=s.get(U),W=U.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==U.depthTexture){const xt=U.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),xt){const At=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,xt.removeEventListener("dispose",At)};xt.addEventListener("dispose",At),E.__depthDisposeCallback=At}E.__boundDepthTexture=xt}if(U.depthTexture&&!E.__autoAllocateDepthBuffer)if(W)for(let xt=0;xt<6;xt++)Xt(E.__webglFramebuffer[xt],U,xt);else{const xt=U.texture.mipmaps;xt&&xt.length>0?Xt(E.__webglFramebuffer[0],U,0):Xt(E.__webglFramebuffer,U,0)}else if(W){E.__webglDepthbuffer=[];for(let xt=0;xt<6;xt++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[xt]),E.__webglDepthbuffer[xt]===void 0)E.__webglDepthbuffer[xt]=o.createRenderbuffer(),Wt(E.__webglDepthbuffer[xt],U,!1);else{const At=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,mt=E.__webglDepthbuffer[xt];o.bindRenderbuffer(o.RENDERBUFFER,mt),o.framebufferRenderbuffer(o.FRAMEBUFFER,At,o.RENDERBUFFER,mt)}}else{const xt=U.texture.mipmaps;if(xt&&xt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),Wt(E.__webglDepthbuffer,U,!1);else{const At=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,mt=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,mt),o.framebufferRenderbuffer(o.FRAMEBUFFER,At,o.RENDERBUFFER,mt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ze(U,E,W){const xt=s.get(U);E!==void 0&&Ft(xt.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),W!==void 0&&ue(U)}function le(U){const E=U.texture,W=s.get(U),xt=s.get(E);U.addEventListener("dispose",z);const At=U.textures,mt=U.isWebGLCubeRenderTarget===!0,rt=At.length>1;if(rt||(xt.__webglTexture===void 0&&(xt.__webglTexture=o.createTexture()),xt.__version=E.version,h.memory.textures++),mt){W.__webglFramebuffer=[];for(let st=0;st<6;st++)if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer[st]=[];for(let ct=0;ct<E.mipmaps.length;ct++)W.__webglFramebuffer[st][ct]=o.createFramebuffer()}else W.__webglFramebuffer[st]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer=[];for(let st=0;st<E.mipmaps.length;st++)W.__webglFramebuffer[st]=o.createFramebuffer()}else W.__webglFramebuffer=o.createFramebuffer();if(rt)for(let st=0,ct=At.length;st<ct;st++){const Rt=s.get(At[st]);Rt.__webglTexture===void 0&&(Rt.__webglTexture=o.createTexture(),h.memory.textures++)}if(U.samples>0&&Ye(U)===!1){W.__webglMultisampledFramebuffer=o.createFramebuffer(),W.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let st=0;st<At.length;st++){const ct=At[st];W.__webglColorRenderbuffer[st]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,W.__webglColorRenderbuffer[st]);const Rt=c.convert(ct.format,ct.colorSpace),et=c.convert(ct.type),Mt=O(ct.internalFormat,Rt,et,ct.colorSpace,U.isXRRenderTarget===!0),Lt=X(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,Lt,Mt,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+st,o.RENDERBUFFER,W.__webglColorRenderbuffer[st])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(W.__webglDepthRenderbuffer=o.createRenderbuffer(),Wt(W.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(mt){i.bindTexture(o.TEXTURE_CUBE_MAP,xt.__webglTexture),tt(o.TEXTURE_CUBE_MAP,E);for(let st=0;st<6;st++)if(E.mipmaps&&E.mipmaps.length>0)for(let ct=0;ct<E.mipmaps.length;ct++)Ft(W.__webglFramebuffer[st][ct],U,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+st,ct);else Ft(W.__webglFramebuffer[st],U,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);M(E)&&_(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(rt){for(let st=0,ct=At.length;st<ct;st++){const Rt=At[st],et=s.get(Rt);let Mt=o.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Mt=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Mt,et.__webglTexture),tt(Mt,Rt),Ft(W.__webglFramebuffer,U,Rt,o.COLOR_ATTACHMENT0+st,Mt,0),M(Rt)&&_(Mt)}i.unbindTexture()}else{let st=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(st=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(st,xt.__webglTexture),tt(st,E),E.mipmaps&&E.mipmaps.length>0)for(let ct=0;ct<E.mipmaps.length;ct++)Ft(W.__webglFramebuffer[ct],U,E,o.COLOR_ATTACHMENT0,st,ct);else Ft(W.__webglFramebuffer,U,E,o.COLOR_ATTACHMENT0,st,0);M(E)&&_(st),i.unbindTexture()}U.depthBuffer&&ue(U)}function pe(U){const E=U.textures;for(let W=0,xt=E.length;W<xt;W++){const At=E[W];if(M(At)){const mt=L(U),rt=s.get(At).__webglTexture;i.bindTexture(mt,rt),_(mt),i.unbindTexture()}}}const Re=[],ae=[];function qe(U){if(U.samples>0){if(Ye(U)===!1){const E=U.textures,W=U.width,xt=U.height;let At=o.COLOR_BUFFER_BIT;const mt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,rt=s.get(U),st=E.length>1;if(st)for(let Rt=0;Rt<E.length;Rt++)i.bindFramebuffer(o.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Rt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,rt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Rt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,rt.__webglMultisampledFramebuffer);const ct=U.texture.mipmaps;ct&&ct.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,rt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,rt.__webglFramebuffer);for(let Rt=0;Rt<E.length;Rt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(At|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(At|=o.STENCIL_BUFFER_BIT)),st){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,rt.__webglColorRenderbuffer[Rt]);const et=s.get(E[Rt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,et,0)}o.blitFramebuffer(0,0,W,xt,0,0,W,xt,At,o.NEAREST),m===!0&&(Re.length=0,ae.length=0,Re.push(o.COLOR_ATTACHMENT0+Rt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Re.push(mt),ae.push(mt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ae)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Re))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),st)for(let Rt=0;Rt<E.length;Rt++){i.bindFramebuffer(o.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Rt,o.RENDERBUFFER,rt.__webglColorRenderbuffer[Rt]);const et=s.get(E[Rt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,rt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Rt,o.TEXTURE_2D,et,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,rt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const E=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function X(U){return Math.min(l.maxSamples,U.samples)}function Ye(U){const E=s.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function _e(U){const E=h.render.frame;x.get(U)!==E&&(x.set(U,E),U.update())}function Ce(U,E){const W=U.colorSpace,xt=U.format,At=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||W!==kr&&W!==os&&(De.getTransfer(W)===Ge?(xt!==Oi||At!==li)&&re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):we("WebGLTextures: Unsupported texture color space:",W)),E}function qt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=Q,this.resetTextureUnits=q,this.setTexture2D=pt,this.setTexture2DArray=P,this.setTexture3D=I,this.setTextureCube=at,this.rebindTextures=Ze,this.setupRenderTarget=le,this.updateRenderTargetMipmap=pe,this.updateMultisampleRenderTarget=qe,this.setupDepthRenderbuffer=ue,this.setupFrameBufferTexture=Ft,this.useMultisampledRTT=Ye,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function aA(o,e){function i(s,l=os){let c;const h=De.getTransfer(l);if(s===li)return o.UNSIGNED_BYTE;if(s===Yd)return o.UNSIGNED_SHORT_4_4_4_4;if(s===jd)return o.UNSIGNED_SHORT_5_5_5_1;if(s===uv)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===fv)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===lv)return o.BYTE;if(s===cv)return o.SHORT;if(s===Jo)return o.UNSIGNED_SHORT;if(s===qd)return o.INT;if(s===Yi)return o.UNSIGNED_INT;if(s===Xi)return o.FLOAT;if(s===Ta)return o.HALF_FLOAT;if(s===hv)return o.ALPHA;if(s===dv)return o.RGB;if(s===Oi)return o.RGBA;if(s===Aa)return o.DEPTH_COMPONENT;if(s===Hs)return o.DEPTH_STENCIL;if(s===pv)return o.RED;if(s===Zd)return o.RED_INTEGER;if(s===Xr)return o.RG;if(s===Kd)return o.RG_INTEGER;if(s===Qd)return o.RGBA_INTEGER;if(s===Vc||s===Xc||s===kc||s===Wc)if(h===Ge)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Vc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Xc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Wc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Vc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Xc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===kc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Wc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===od||s===ld||s===cd||s===ud)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===od)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ld)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===cd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ud)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===fd||s===hd||s===dd||s===pd||s===md||s===gd||s===_d)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===fd||s===hd)return h===Ge?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===dd)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===pd)return c.COMPRESSED_R11_EAC;if(s===md)return c.COMPRESSED_SIGNED_R11_EAC;if(s===gd)return c.COMPRESSED_RG11_EAC;if(s===_d)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===vd||s===xd||s===Sd||s===Md||s===yd||s===Ed||s===bd||s===Td||s===Ad||s===Rd||s===Cd||s===wd||s===Dd||s===Ud)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===vd)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===xd)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Sd)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Md)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===yd)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ed)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===bd)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Td)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ad)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Rd)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Cd)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===wd)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Dd)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ud)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Nd||s===Ld||s===Od)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===Nd)return h===Ge?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ld)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Od)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Pd||s===Fd||s===zd||s===Bd)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===Pd)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Fd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===zd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Bd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===$o?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const sA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class oA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new Rv(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new Zi({vertexShader:sA,fragmentShader:rA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new be(new rl(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class lA extends qr{constructor(e,i){super();const s=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,x=null,g=null,S=null,y=null,b=null;const C=typeof XRWebGLBinding<"u",M=new oA,_={},L=i.getContextAttributes();let O=null,N=null;const F=[],B=[],z=new Ue;let j=null;const T=new Ei;T.viewport=new an;const w=new Ei;w.viewport=new an;const V=[T,w],q=new _y;let Q=null,ut=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let dt=F[it];return dt===void 0&&(dt=new zh,F[it]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(it){let dt=F[it];return dt===void 0&&(dt=new zh,F[it]=dt),dt.getGripSpace()},this.getHand=function(it){let dt=F[it];return dt===void 0&&(dt=new zh,F[it]=dt),dt.getHandSpace()};function pt(it){const dt=B.indexOf(it.inputSource);if(dt===-1)return;const Ft=F[dt];Ft!==void 0&&(Ft.update(it.inputSource,it.frame,p||h),Ft.dispatchEvent({type:it.type,data:it.inputSource}))}function P(){l.removeEventListener("select",pt),l.removeEventListener("selectstart",pt),l.removeEventListener("selectend",pt),l.removeEventListener("squeeze",pt),l.removeEventListener("squeezestart",pt),l.removeEventListener("squeezeend",pt),l.removeEventListener("end",P),l.removeEventListener("inputsourceschange",I);for(let it=0;it<F.length;it++){const dt=B[it];dt!==null&&(B[it]=null,F[it].disconnect(dt))}Q=null,ut=null,M.reset();for(const it in _)delete _[it];e.setRenderTarget(O),y=null,S=null,g=null,l=null,N=null,Vt.stop(),s.isPresenting=!1,e.setPixelRatio(j),e.setSize(z.width,z.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){c=it,s.isPresenting===!0&&re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){d=it,s.isPresenting===!0&&re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(it){p=it},this.getBaseLayer=function(){return S!==null?S:y},this.getBinding=function(){return g===null&&C&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(it){if(l=it,l!==null){if(O=e.getRenderTarget(),l.addEventListener("select",pt),l.addEventListener("selectstart",pt),l.addEventListener("selectend",pt),l.addEventListener("squeeze",pt),l.addEventListener("squeezestart",pt),l.addEventListener("squeezeend",pt),l.addEventListener("end",P),l.addEventListener("inputsourceschange",I),L.xrCompatible!==!0&&await i.makeXRCompatible(),j=e.getPixelRatio(),e.getSize(z),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ft=null,Wt=null,Xt=null;L.depth&&(Xt=L.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ft=L.stencil?Hs:Aa,Wt=L.stencil?$o:Yi);const ue={colorFormat:i.RGBA8,depthFormat:Xt,scaleFactor:c};g=this.getBinding(),S=g.createProjectionLayer(ue),l.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),N=new qi(S.textureWidth,S.textureHeight,{format:Oi,type:li,depthTexture:new el(S.textureWidth,S.textureHeight,Wt,void 0,void 0,void 0,void 0,void 0,void 0,Ft),stencilBuffer:L.stencil,colorSpace:e.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const Ft={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,Ft),l.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),N=new qi(y.framebufferWidth,y.framebufferHeight,{format:Oi,type:li,colorSpace:e.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Vt.setContext(l),Vt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function I(it){for(let dt=0;dt<it.removed.length;dt++){const Ft=it.removed[dt],Wt=B.indexOf(Ft);Wt>=0&&(B[Wt]=null,F[Wt].disconnect(Ft))}for(let dt=0;dt<it.added.length;dt++){const Ft=it.added[dt];let Wt=B.indexOf(Ft);if(Wt===-1){for(let ue=0;ue<F.length;ue++)if(ue>=B.length){B.push(Ft),Wt=ue;break}else if(B[ue]===null){B[ue]=Ft,Wt=ue;break}if(Wt===-1)break}const Xt=F[Wt];Xt&&Xt.connect(Ft)}}const at=new J,Ut=new J;function St(it,dt,Ft){at.setFromMatrixPosition(dt.matrixWorld),Ut.setFromMatrixPosition(Ft.matrixWorld);const Wt=at.distanceTo(Ut),Xt=dt.projectionMatrix.elements,ue=Ft.projectionMatrix.elements,Ze=Xt[14]/(Xt[10]-1),le=Xt[14]/(Xt[10]+1),pe=(Xt[9]+1)/Xt[5],Re=(Xt[9]-1)/Xt[5],ae=(Xt[8]-1)/Xt[0],qe=(ue[8]+1)/ue[0],X=Ze*ae,Ye=Ze*qe,_e=Wt/(-ae+qe),Ce=_e*-ae;if(dt.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(Ce),it.translateZ(_e),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),Xt[10]===-1)it.projectionMatrix.copy(dt.projectionMatrix),it.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const qt=Ze+_e,U=le+_e,E=X-Ce,W=Ye+(Wt-Ce),xt=pe*le/U*qt,At=Re*le/U*qt;it.projectionMatrix.makePerspective(E,W,xt,At,qt,U),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function D(it,dt){dt===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(dt.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(l===null)return;let dt=it.near,Ft=it.far;M.texture!==null&&(M.depthNear>0&&(dt=M.depthNear),M.depthFar>0&&(Ft=M.depthFar)),q.near=w.near=T.near=dt,q.far=w.far=T.far=Ft,(Q!==q.near||ut!==q.far)&&(l.updateRenderState({depthNear:q.near,depthFar:q.far}),Q=q.near,ut=q.far),q.layers.mask=it.layers.mask|6,T.layers.mask=q.layers.mask&3,w.layers.mask=q.layers.mask&5;const Wt=it.parent,Xt=q.cameras;D(q,Wt);for(let ue=0;ue<Xt.length;ue++)D(Xt[ue],Wt);Xt.length===2?St(q,T,w):q.projectionMatrix.copy(T.projectionMatrix),tt(it,q,Wt)};function tt(it,dt,Ft){Ft===null?it.matrix.copy(dt.matrixWorld):(it.matrix.copy(Ft.matrixWorld),it.matrix.invert(),it.matrix.multiply(dt.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(dt.projectionMatrix),it.projectionMatrixInverse.copy(dt.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=Id*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(S===null&&y===null))return m},this.setFoveation=function(it){m=it,S!==null&&(S.fixedFoveation=it),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=it)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(q)},this.getCameraTexture=function(it){return _[it]};let Et=null;function Ot(it,dt){if(x=dt.getViewerPose(p||h),b=dt,x!==null){const Ft=x.views;y!==null&&(e.setRenderTargetFramebuffer(N,y.framebuffer),e.setRenderTarget(N));let Wt=!1;Ft.length!==q.cameras.length&&(q.cameras.length=0,Wt=!0);for(let le=0;le<Ft.length;le++){const pe=Ft[le];let Re=null;if(y!==null)Re=y.getViewport(pe);else{const qe=g.getViewSubImage(S,pe);Re=qe.viewport,le===0&&(e.setRenderTargetTextures(N,qe.colorTexture,qe.depthStencilTexture),e.setRenderTarget(N))}let ae=V[le];ae===void 0&&(ae=new Ei,ae.layers.enable(le),ae.viewport=new an,V[le]=ae),ae.matrix.fromArray(pe.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(pe.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(Re.x,Re.y,Re.width,Re.height),le===0&&(q.matrix.copy(ae.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Wt===!0&&q.cameras.push(ae)}const Xt=l.enabledFeatures;if(Xt&&Xt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){g=s.getBinding();const le=g.getDepthInformation(Ft[0]);le&&le.isValid&&le.texture&&M.init(le,l.renderState)}if(Xt&&Xt.includes("camera-access")&&C){e.state.unbindTexture(),g=s.getBinding();for(let le=0;le<Ft.length;le++){const pe=Ft[le].camera;if(pe){let Re=_[pe];Re||(Re=new Rv,_[pe]=Re);const ae=g.getCameraImage(pe);Re.sourceTexture=ae}}}}for(let Ft=0;Ft<F.length;Ft++){const Wt=B[Ft],Xt=F[Ft];Wt!==null&&Xt!==void 0&&Xt.update(Wt,dt,p||h)}Et&&Et(it,dt),dt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:dt}),b=null}const Vt=new wv;Vt.setAnimationLoop(Ot),this.setAnimationLoop=function(it){Et=it},this.dispose=function(){}}}const Os=new ji,cA=new Je;function uA(o,e){function i(M,_){M.matrixAutoUpdate===!0&&M.updateMatrix(),_.value.copy(M.matrix)}function s(M,_){_.color.getRGB(M.fogColor.value,Mv(o)),_.isFog?(M.fogNear.value=_.near,M.fogFar.value=_.far):_.isFogExp2&&(M.fogDensity.value=_.density)}function l(M,_,L,O,N){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(M,_):_.isMeshToonMaterial?(c(M,_),g(M,_)):_.isMeshPhongMaterial?(c(M,_),x(M,_)):_.isMeshStandardMaterial?(c(M,_),S(M,_),_.isMeshPhysicalMaterial&&y(M,_,N)):_.isMeshMatcapMaterial?(c(M,_),b(M,_)):_.isMeshDepthMaterial?c(M,_):_.isMeshDistanceMaterial?(c(M,_),C(M,_)):_.isMeshNormalMaterial?c(M,_):_.isLineBasicMaterial?(h(M,_),_.isLineDashedMaterial&&d(M,_)):_.isPointsMaterial?m(M,_,L,O):_.isSpriteMaterial?p(M,_):_.isShadowMaterial?(M.color.value.copy(_.color),M.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(M,_){M.opacity.value=_.opacity,_.color&&M.diffuse.value.copy(_.color),_.emissive&&M.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.bumpMap&&(M.bumpMap.value=_.bumpMap,i(_.bumpMap,M.bumpMapTransform),M.bumpScale.value=_.bumpScale,_.side===Kn&&(M.bumpScale.value*=-1)),_.normalMap&&(M.normalMap.value=_.normalMap,i(_.normalMap,M.normalMapTransform),M.normalScale.value.copy(_.normalScale),_.side===Kn&&M.normalScale.value.negate()),_.displacementMap&&(M.displacementMap.value=_.displacementMap,i(_.displacementMap,M.displacementMapTransform),M.displacementScale.value=_.displacementScale,M.displacementBias.value=_.displacementBias),_.emissiveMap&&(M.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,M.emissiveMapTransform)),_.specularMap&&(M.specularMap.value=_.specularMap,i(_.specularMap,M.specularMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest);const L=e.get(_),O=L.envMap,N=L.envMapRotation;O&&(M.envMap.value=O,Os.copy(N),Os.x*=-1,Os.y*=-1,Os.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(Os.y*=-1,Os.z*=-1),M.envMapRotation.value.setFromMatrix4(cA.makeRotationFromEuler(Os)),M.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=_.reflectivity,M.ior.value=_.ior,M.refractionRatio.value=_.refractionRatio),_.lightMap&&(M.lightMap.value=_.lightMap,M.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,M.lightMapTransform)),_.aoMap&&(M.aoMap.value=_.aoMap,M.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,M.aoMapTransform))}function h(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform))}function d(M,_){M.dashSize.value=_.dashSize,M.totalSize.value=_.dashSize+_.gapSize,M.scale.value=_.scale}function m(M,_,L,O){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.size.value=_.size*L,M.scale.value=O*.5,_.map&&(M.map.value=_.map,i(_.map,M.uvTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function p(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.rotation.value=_.rotation,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function x(M,_){M.specular.value.copy(_.specular),M.shininess.value=Math.max(_.shininess,1e-4)}function g(M,_){_.gradientMap&&(M.gradientMap.value=_.gradientMap)}function S(M,_){M.metalness.value=_.metalness,_.metalnessMap&&(M.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,M.metalnessMapTransform)),M.roughness.value=_.roughness,_.roughnessMap&&(M.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,M.roughnessMapTransform)),_.envMap&&(M.envMapIntensity.value=_.envMapIntensity)}function y(M,_,L){M.ior.value=_.ior,_.sheen>0&&(M.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),M.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(M.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,M.sheenColorMapTransform)),_.sheenRoughnessMap&&(M.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,M.sheenRoughnessMapTransform))),_.clearcoat>0&&(M.clearcoat.value=_.clearcoat,M.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(M.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,M.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(M.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Kn&&M.clearcoatNormalScale.value.negate())),_.dispersion>0&&(M.dispersion.value=_.dispersion),_.iridescence>0&&(M.iridescence.value=_.iridescence,M.iridescenceIOR.value=_.iridescenceIOR,M.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(M.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,M.iridescenceMapTransform)),_.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),_.transmission>0&&(M.transmission.value=_.transmission,M.transmissionSamplerMap.value=L.texture,M.transmissionSamplerSize.value.set(L.width,L.height),_.transmissionMap&&(M.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,M.transmissionMapTransform)),M.thickness.value=_.thickness,_.thicknessMap&&(M.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=_.attenuationDistance,M.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(M.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(M.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=_.specularIntensity,M.specularColor.value.copy(_.specularColor),_.specularColorMap&&(M.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,M.specularColorMapTransform)),_.specularIntensityMap&&(M.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,_){_.matcap&&(M.matcap.value=_.matcap)}function C(M,_){const L=e.get(_).light;M.referencePosition.value.setFromMatrixPosition(L.matrixWorld),M.nearDistance.value=L.shadow.camera.near,M.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function fA(o,e,i,s){let l={},c={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(L,O){const N=O.program;s.uniformBlockBinding(L,N)}function p(L,O){let N=l[L.id];N===void 0&&(b(L),N=x(L),l[L.id]=N,L.addEventListener("dispose",M));const F=O.program;s.updateUBOMapping(L,F);const B=e.render.frame;c[L.id]!==B&&(S(L),c[L.id]=B)}function x(L){const O=g();L.__bindingPointIndex=O;const N=o.createBuffer(),F=L.__size,B=L.usage;return o.bindBuffer(o.UNIFORM_BUFFER,N),o.bufferData(o.UNIFORM_BUFFER,F,B),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,O,N),N}function g(){for(let L=0;L<d;L++)if(h.indexOf(L)===-1)return h.push(L),L;return we("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(L){const O=l[L.id],N=L.uniforms,F=L.__cache;o.bindBuffer(o.UNIFORM_BUFFER,O);for(let B=0,z=N.length;B<z;B++){const j=Array.isArray(N[B])?N[B]:[N[B]];for(let T=0,w=j.length;T<w;T++){const V=j[T];if(y(V,B,T,F)===!0){const q=V.__offset,Q=Array.isArray(V.value)?V.value:[V.value];let ut=0;for(let pt=0;pt<Q.length;pt++){const P=Q[pt],I=C(P);typeof P=="number"||typeof P=="boolean"?(V.__data[0]=P,o.bufferSubData(o.UNIFORM_BUFFER,q+ut,V.__data)):P.isMatrix3?(V.__data[0]=P.elements[0],V.__data[1]=P.elements[1],V.__data[2]=P.elements[2],V.__data[3]=0,V.__data[4]=P.elements[3],V.__data[5]=P.elements[4],V.__data[6]=P.elements[5],V.__data[7]=0,V.__data[8]=P.elements[6],V.__data[9]=P.elements[7],V.__data[10]=P.elements[8],V.__data[11]=0):(P.toArray(V.__data,ut),ut+=I.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,q,V.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(L,O,N,F){const B=L.value,z=O+"_"+N;if(F[z]===void 0)return typeof B=="number"||typeof B=="boolean"?F[z]=B:F[z]=B.clone(),!0;{const j=F[z];if(typeof B=="number"||typeof B=="boolean"){if(j!==B)return F[z]=B,!0}else if(j.equals(B)===!1)return j.copy(B),!0}return!1}function b(L){const O=L.uniforms;let N=0;const F=16;for(let z=0,j=O.length;z<j;z++){const T=Array.isArray(O[z])?O[z]:[O[z]];for(let w=0,V=T.length;w<V;w++){const q=T[w],Q=Array.isArray(q.value)?q.value:[q.value];for(let ut=0,pt=Q.length;ut<pt;ut++){const P=Q[ut],I=C(P),at=N%F,Ut=at%I.boundary,St=at+Ut;N+=Ut,St!==0&&F-St<I.storage&&(N+=F-St),q.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=N,N+=I.storage}}}const B=N%F;return B>0&&(N+=F-B),L.__size=N,L.__cache={},this}function C(L){const O={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(O.boundary=4,O.storage=4):L.isVector2?(O.boundary=8,O.storage=8):L.isVector3||L.isColor?(O.boundary=16,O.storage=12):L.isVector4?(O.boundary=16,O.storage=16):L.isMatrix3?(O.boundary=48,O.storage=48):L.isMatrix4?(O.boundary=64,O.storage=64):L.isTexture?re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):re("WebGLRenderer: Unsupported uniform value type.",L),O}function M(L){const O=L.target;O.removeEventListener("dispose",M);const N=h.indexOf(O.__bindingPointIndex);h.splice(N,1),o.deleteBuffer(l[O.id]),delete l[O.id],delete c[O.id]}function _(){for(const L in l)o.deleteBuffer(l[L]);h=[],l={},c={}}return{bind:m,update:p,dispose:_}}const hA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Hi=null;function dA(){return Hi===null&&(Hi=new iy(hA,16,16,Xr,Ta),Hi.name="DFG_LUT",Hi.minFilter=zn,Hi.magFilter=zn,Hi.wrapS=Ma,Hi.wrapT=Ma,Hi.generateMipmaps=!1,Hi.needsUpdate=!0),Hi}class pA{constructor(e={}){const{canvas:i=DM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:S=!1,outputBufferType:y=li}=e;this.isWebGLRenderer=!0;let b;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=s.getContextAttributes().alpha}else b=h;const C=y,M=new Set([Qd,Kd,Zd]),_=new Set([li,Yi,Jo,$o,Yd,jd]),L=new Uint32Array(4),O=new Int32Array(4);let N=null,F=null;const B=[],z=[];let j=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let w=!1;this._outputColorSpace=yi;let V=0,q=0,Q=null,ut=-1,pt=null;const P=new an,I=new an;let at=null;const Ut=new Ae(0);let St=0,D=i.width,tt=i.height,Et=1,Ot=null,Vt=null;const it=new an(0,0,D,tt),dt=new an(0,0,D,tt);let Ft=!1;const Wt=new ip;let Xt=!1,ue=!1;const Ze=new Je,le=new J,pe=new an,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ae=!1;function qe(){return Q===null?Et:1}let X=s;function Ye(R,Y){return i.getContext(R,Y)}try{const R={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:x,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Wd}`),i.addEventListener("webglcontextlost",Jt,!1),i.addEventListener("webglcontextrestored",ve,!1),i.addEventListener("webglcontextcreationerror",me,!1),X===null){const Y="webgl2";if(X=Ye(Y,R),X===null)throw Ye(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw we("WebGLRenderer: "+R.message),R}let _e,Ce,qt,U,E,W,xt,At,mt,rt,st,ct,Rt,et,Mt,Lt,Dt,Ct,Bt,G,wt,bt,Pt,_t;function gt(){_e=new dT(X),_e.init(),bt=new aA(X,_e),Ce=new aT(X,_e,e,bt),qt=new nA(X,_e),Ce.reversedDepthBuffer&&S&&qt.buffers.depth.setReversed(!0),U=new gT(X),E=new G1,W=new iA(X,_e,qt,E,Ce,bt,U),xt=new rT(T),At=new hT(T),mt=new Sy(X),Pt=new nT(X,mt),rt=new pT(X,mt,U,Pt),st=new vT(X,rt,mt,U),Bt=new _T(X,Ce,W),Lt=new sT(E),ct=new H1(T,xt,At,_e,Ce,Pt,Lt),Rt=new uA(T,E),et=new X1,Mt=new Z1(_e),Ct=new eT(T,xt,At,qt,st,b,m),Dt=new tA(T,st,Ce),_t=new fA(X,U,Ce,qt),G=new iT(X,_e,U),wt=new mT(X,_e,U),U.programs=ct.programs,T.capabilities=Ce,T.extensions=_e,T.properties=E,T.renderLists=et,T.shadowMap=Dt,T.state=qt,T.info=U}gt(),C!==li&&(j=new ST(C,i.width,i.height,l,c));const Nt=new lA(T,X);this.xr=Nt,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const R=_e.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=_e.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Et},this.setPixelRatio=function(R){R!==void 0&&(Et=R,this.setSize(D,tt,!1))},this.getSize=function(R){return R.set(D,tt)},this.setSize=function(R,Y,ft=!0){if(Nt.isPresenting){re("WebGLRenderer: Can't change size while VR device is presenting.");return}D=R,tt=Y,i.width=Math.floor(R*Et),i.height=Math.floor(Y*Et),ft===!0&&(i.style.width=R+"px",i.style.height=Y+"px"),j!==null&&j.setSize(i.width,i.height),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(D*Et,tt*Et).floor()},this.setDrawingBufferSize=function(R,Y,ft){D=R,tt=Y,Et=ft,i.width=Math.floor(R*ft),i.height=Math.floor(Y*ft),this.setViewport(0,0,R,Y)},this.setEffects=function(R){if(C===li){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let Y=0;Y<R.length;Y++)if(R[Y].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}j.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(P)},this.getViewport=function(R){return R.copy(it)},this.setViewport=function(R,Y,ft,ot){R.isVector4?it.set(R.x,R.y,R.z,R.w):it.set(R,Y,ft,ot),qt.viewport(P.copy(it).multiplyScalar(Et).round())},this.getScissor=function(R){return R.copy(dt)},this.setScissor=function(R,Y,ft,ot){R.isVector4?dt.set(R.x,R.y,R.z,R.w):dt.set(R,Y,ft,ot),qt.scissor(I.copy(dt).multiplyScalar(Et).round())},this.getScissorTest=function(){return Ft},this.setScissorTest=function(R){qt.setScissorTest(Ft=R)},this.setOpaqueSort=function(R){Ot=R},this.setTransparentSort=function(R){Vt=R},this.getClearColor=function(R){return R.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor(...arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha(...arguments)},this.clear=function(R=!0,Y=!0,ft=!0){let ot=0;if(R){let K=!1;if(Q!==null){const It=Q.texture.format;K=M.has(It)}if(K){const It=Q.texture.type,kt=_.has(It),Ht=Ct.getClearColor(),Yt=Ct.getClearAlpha(),Zt=Ht.r,ee=Ht.g,Kt=Ht.b;kt?(L[0]=Zt,L[1]=ee,L[2]=Kt,L[3]=Yt,X.clearBufferuiv(X.COLOR,0,L)):(O[0]=Zt,O[1]=ee,O[2]=Kt,O[3]=Yt,X.clearBufferiv(X.COLOR,0,O))}else ot|=X.COLOR_BUFFER_BIT}Y&&(ot|=X.DEPTH_BUFFER_BIT),ft&&(ot|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Jt,!1),i.removeEventListener("webglcontextrestored",ve,!1),i.removeEventListener("webglcontextcreationerror",me,!1),Ct.dispose(),et.dispose(),Mt.dispose(),E.dispose(),xt.dispose(),At.dispose(),st.dispose(),Pt.dispose(),_t.dispose(),ct.dispose(),Nt.dispose(),Nt.removeEventListener("sessionstart",Ra),Nt.removeEventListener("sessionend",us),Jn.stop()};function Jt(R){R.preventDefault(),e_("WebGLRenderer: Context Lost."),w=!0}function ve(){e_("WebGLRenderer: Context Restored."),w=!1;const R=U.autoReset,Y=Dt.enabled,ft=Dt.autoUpdate,ot=Dt.needsUpdate,K=Dt.type;gt(),U.autoReset=R,Dt.enabled=Y,Dt.autoUpdate=ft,Dt.needsUpdate=ot,Dt.type=K}function me(R){we("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ln(R){const Y=R.target;Y.removeEventListener("dispose",ln),Bn(Y)}function Bn(R){Ki(R),E.remove(R)}function Ki(R){const Y=E.get(R).programs;Y!==void 0&&(Y.forEach(function(ft){ct.releaseProgram(ft)}),R.isShaderMaterial&&ct.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,ft,ot,K,It){Y===null&&(Y=Re);const kt=K.isMesh&&K.matrixWorld.determinant()<0,Ht=fs(R,Y,ft,ot,K);qt.setMaterial(ot,kt);let Yt=ft.index,Zt=1;if(ot.wireframe===!0){if(Yt=rt.getWireframeAttribute(ft),Yt===void 0)return;Zt=2}const ee=ft.drawRange,Kt=ft.attributes.position;let ne=ee.start*Zt,Oe=(ee.start+ee.count)*Zt;It!==null&&(ne=Math.max(ne,It.start*Zt),Oe=Math.min(Oe,(It.start+It.count)*Zt)),Yt!==null?(ne=Math.max(ne,0),Oe=Math.min(Oe,Yt.count)):Kt!=null&&(ne=Math.max(ne,0),Oe=Math.min(Oe,Kt.count));const $e=Oe-ne;if($e<0||$e===1/0)return;Pt.setup(K,ot,Ht,ft,Yt);let je,ze=G;if(Yt!==null&&(je=mt.get(Yt),ze=wt,ze.setIndex(je)),K.isMesh)ot.wireframe===!0?(qt.setLineWidth(ot.wireframeLinewidth*qe()),ze.setMode(X.LINES)):ze.setMode(X.TRIANGLES);else if(K.isLine){let $t=ot.linewidth;$t===void 0&&($t=1),qt.setLineWidth($t*qe()),K.isLineSegments?ze.setMode(X.LINES):K.isLineLoop?ze.setMode(X.LINE_LOOP):ze.setMode(X.LINE_STRIP)}else K.isPoints?ze.setMode(X.POINTS):K.isSprite&&ze.setMode(X.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)tl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ze.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(_e.get("WEBGL_multi_draw"))ze.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const $t=K._multiDrawStarts,Pe=K._multiDrawCounts,se=K._multiDrawCount,En=Yt?mt.get(Yt).bytesPerElement:1,Qi=E.get(ot).currentProgram.getUniforms();for(let bn=0;bn<se;bn++)Qi.setValue(X,"_gl_DrawID",bn),ze.render($t[bn]/En,Pe[bn])}else if(K.isInstancedMesh)ze.renderInstances(ne,$e,K.count);else if(ft.isInstancedBufferGeometry){const $t=ft._maxInstanceCount!==void 0?ft._maxInstanceCount:1/0,Pe=Math.min(ft.instanceCount,$t);ze.renderInstances(ne,$e,Pe)}else ze.render(ne,$e)};function ci(R,Y,ft){R.transparent===!0&&R.side===Vi&&R.forceSinglePass===!1?(R.side=Kn,R.needsUpdate=!0,ks(R,Y,ft),R.side=cs,R.needsUpdate=!0,ks(R,Y,ft),R.side=Vi):ks(R,Y,ft)}this.compile=function(R,Y,ft=null){ft===null&&(ft=R),F=Mt.get(ft),F.init(Y),z.push(F),ft.traverseVisible(function(K){K.isLight&&K.layers.test(Y.layers)&&(F.pushLight(K),K.castShadow&&F.pushShadow(K))}),R!==ft&&R.traverseVisible(function(K){K.isLight&&K.layers.test(Y.layers)&&(F.pushLight(K),K.castShadow&&F.pushShadow(K))}),F.setupLights();const ot=new Set;return R.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const It=K.material;if(It)if(Array.isArray(It))for(let kt=0;kt<It.length;kt++){const Ht=It[kt];ci(Ht,ft,K),ot.add(Ht)}else ci(It,ft,K),ot.add(It)}),F=z.pop(),ot},this.compileAsync=function(R,Y,ft=null){const ot=this.compile(R,Y,ft);return new Promise(K=>{function It(){if(ot.forEach(function(kt){E.get(kt).currentProgram.isReady()&&ot.delete(kt)}),ot.size===0){K(R);return}setTimeout(It,10)}_e.get("KHR_parallel_shader_compile")!==null?It():setTimeout(It,10)})};let ui=null;function Qn(R){ui&&ui(R)}function Ra(){Jn.stop()}function us(){Jn.start()}const Jn=new wv;Jn.setAnimationLoop(Qn),typeof self<"u"&&Jn.setContext(self),this.setAnimationLoop=function(R){ui=R,Nt.setAnimationLoop(R),R===null?Jn.stop():Jn.start()},Nt.addEventListener("sessionstart",Ra),Nt.addEventListener("sessionend",us),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){we("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;const ft=Nt.enabled===!0&&Nt.isPresenting===!0,ot=j!==null&&(Q===null||ft)&&j.begin(T,Q);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Nt.enabled===!0&&Nt.isPresenting===!0&&(j===null||j.isCompositing()===!1)&&(Nt.cameraAutoUpdate===!0&&Nt.updateCamera(Y),Y=Nt.getCamera()),R.isScene===!0&&R.onBeforeRender(T,R,Y,Q),F=Mt.get(R,z.length),F.init(Y),z.push(F),Ze.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Wt.setFromProjectionMatrix(Ze,ki,Y.reversedDepth),ue=this.localClippingEnabled,Xt=Lt.init(this.clippingPlanes,ue),N=et.get(R,B.length),N.init(),B.push(N),Nt.enabled===!0&&Nt.isPresenting===!0){const kt=T.xr.getDepthSensingMesh();kt!==null&&fi(kt,Y,-1/0,T.sortObjects)}fi(R,Y,0,T.sortObjects),N.finish(),T.sortObjects===!0&&N.sort(Ot,Vt),ae=Nt.enabled===!1||Nt.isPresenting===!1||Nt.hasDepthSensing()===!1,ae&&Ct.addToRenderList(N,R),this.info.render.frame++,Xt===!0&&Lt.beginShadows();const K=F.state.shadowsArray;if(Dt.render(K,R,Y),Xt===!0&&Lt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ot&&j.hasRenderPass())===!1){const kt=N.opaque,Ht=N.transmissive;if(F.setupLights(),Y.isArrayCamera){const Yt=Y.cameras;if(Ht.length>0)for(let Zt=0,ee=Yt.length;Zt<ee;Zt++){const Kt=Yt[Zt];yn(kt,Ht,R,Kt)}ae&&Ct.render(R);for(let Zt=0,ee=Yt.length;Zt<ee;Zt++){const Kt=Yt[Zt];cn(N,R,Kt,Kt.viewport)}}else Ht.length>0&&yn(kt,Ht,R,Y),ae&&Ct.render(R),cn(N,R,Y)}Q!==null&&q===0&&(W.updateMultisampleRenderTarget(Q),W.updateRenderTargetMipmap(Q)),ot&&j.end(T),R.isScene===!0&&R.onAfterRender(T,R,Y),Pt.resetDefaultState(),ut=-1,pt=null,z.pop(),z.length>0?(F=z[z.length-1],Xt===!0&&Lt.setGlobalState(T.clippingPlanes,F.state.camera)):F=null,B.pop(),B.length>0?N=B[B.length-1]:N=null};function fi(R,Y,ft,ot){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)ft=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLight)F.pushLight(R),R.castShadow&&F.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Wt.intersectsSprite(R)){ot&&pe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ze);const kt=st.update(R),Ht=R.material;Ht.visible&&N.push(R,kt,Ht,ft,pe.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Wt.intersectsObject(R))){const kt=st.update(R),Ht=R.material;if(ot&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),pe.copy(R.boundingSphere.center)):(kt.boundingSphere===null&&kt.computeBoundingSphere(),pe.copy(kt.boundingSphere.center)),pe.applyMatrix4(R.matrixWorld).applyMatrix4(Ze)),Array.isArray(Ht)){const Yt=kt.groups;for(let Zt=0,ee=Yt.length;Zt<ee;Zt++){const Kt=Yt[Zt],ne=Ht[Kt.materialIndex];ne&&ne.visible&&N.push(R,kt,ne,ft,pe.z,Kt)}}else Ht.visible&&N.push(R,kt,Ht,ft,pe.z,null)}}const It=R.children;for(let kt=0,Ht=It.length;kt<Ht;kt++)fi(It[kt],Y,ft,ot)}function cn(R,Y,ft,ot){const{opaque:K,transmissive:It,transparent:kt}=R;F.setupLightsView(ft),Xt===!0&&Lt.setGlobalState(T.clippingPlanes,ft),ot&&qt.viewport(P.copy(ot)),K.length>0&&bi(K,Y,ft),It.length>0&&bi(It,Y,ft),kt.length>0&&bi(kt,Y,ft),qt.buffers.depth.setTest(!0),qt.buffers.depth.setMask(!0),qt.buffers.color.setMask(!0),qt.setPolygonOffset(!1)}function yn(R,Y,ft,ot){if((ft.isScene===!0?ft.overrideMaterial:null)!==null)return;if(F.state.transmissionRenderTarget[ot.id]===void 0){const ne=_e.has("EXT_color_buffer_half_float")||_e.has("EXT_color_buffer_float");F.state.transmissionRenderTarget[ot.id]=new qi(1,1,{generateMipmaps:!0,type:ne?Ta:li,minFilter:Is,samples:Ce.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:De.workingColorSpace})}const It=F.state.transmissionRenderTarget[ot.id],kt=ot.viewport||P;It.setSize(kt.z*T.transmissionResolutionScale,kt.w*T.transmissionResolutionScale);const Ht=T.getRenderTarget(),Yt=T.getActiveCubeFace(),Zt=T.getActiveMipmapLevel();T.setRenderTarget(It),T.getClearColor(Ut),St=T.getClearAlpha(),St<1&&T.setClearColor(16777215,.5),T.clear(),ae&&Ct.render(ft);const ee=T.toneMapping;T.toneMapping=Wi;const Kt=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),F.setupLightsView(ot),Xt===!0&&Lt.setGlobalState(T.clippingPlanes,ot),bi(R,ft,ot),W.updateMultisampleRenderTarget(It),W.updateRenderTargetMipmap(It),_e.has("WEBGL_multisampled_render_to_texture")===!1){let ne=!1;for(let Oe=0,$e=Y.length;Oe<$e;Oe++){const je=Y[Oe],{object:ze,geometry:$t,material:Pe,group:se}=je;if(Pe.side===Vi&&ze.layers.test(ot.layers)){const En=Pe.side;Pe.side=Kn,Pe.needsUpdate=!0,Xs(ze,ft,ot,$t,Pe,se),Pe.side=En,Pe.needsUpdate=!0,ne=!0}}ne===!0&&(W.updateMultisampleRenderTarget(It),W.updateRenderTargetMipmap(It))}T.setRenderTarget(Ht,Yt,Zt),T.setClearColor(Ut,St),Kt!==void 0&&(ot.viewport=Kt),T.toneMapping=ee}function bi(R,Y,ft){const ot=Y.isScene===!0?Y.overrideMaterial:null;for(let K=0,It=R.length;K<It;K++){const kt=R[K],{object:Ht,geometry:Yt,group:Zt}=kt;let ee=kt.material;ee.allowOverride===!0&&ot!==null&&(ee=ot),Ht.layers.test(ft.layers)&&Xs(Ht,Y,ft,Yt,ee,Zt)}}function Xs(R,Y,ft,ot,K,It){R.onBeforeRender(T,Y,ft,ot,K,It),R.modelViewMatrix.multiplyMatrices(ft.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),K.onBeforeRender(T,Y,ft,ot,R,It),K.transparent===!0&&K.side===Vi&&K.forceSinglePass===!1?(K.side=Kn,K.needsUpdate=!0,T.renderBufferDirect(ft,Y,ot,K,R,It),K.side=cs,K.needsUpdate=!0,T.renderBufferDirect(ft,Y,ot,K,R,It),K.side=Vi):T.renderBufferDirect(ft,Y,ot,K,R,It),R.onAfterRender(T,Y,ft,ot,K,It)}function ks(R,Y,ft){Y.isScene!==!0&&(Y=Re);const ot=E.get(R),K=F.state.lights,It=F.state.shadowsArray,kt=K.state.version,Ht=ct.getParameters(R,K.state,It,Y,ft),Yt=ct.getProgramCacheKey(Ht);let Zt=ot.programs;ot.environment=R.isMeshStandardMaterial?Y.environment:null,ot.fog=Y.fog,ot.envMap=(R.isMeshStandardMaterial?At:xt).get(R.envMap||ot.environment),ot.envMapRotation=ot.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,Zt===void 0&&(R.addEventListener("dispose",ln),Zt=new Map,ot.programs=Zt);let ee=Zt.get(Yt);if(ee!==void 0){if(ot.currentProgram===ee&&ot.lightsStateVersion===kt)return jr(R,Ht),ee}else Ht.uniforms=ct.getUniforms(R),R.onBeforeCompile(Ht,T),ee=ct.acquireProgram(Ht,Yt),Zt.set(Yt,ee),ot.uniforms=Ht.uniforms;const Kt=ot.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Kt.clippingPlanes=Lt.uniform),jr(R,Ht),ot.needsLights=Ca(R),ot.lightsStateVersion=kt,ot.needsLights&&(Kt.ambientLightColor.value=K.state.ambient,Kt.lightProbe.value=K.state.probe,Kt.directionalLights.value=K.state.directional,Kt.directionalLightShadows.value=K.state.directionalShadow,Kt.spotLights.value=K.state.spot,Kt.spotLightShadows.value=K.state.spotShadow,Kt.rectAreaLights.value=K.state.rectArea,Kt.ltc_1.value=K.state.rectAreaLTC1,Kt.ltc_2.value=K.state.rectAreaLTC2,Kt.pointLights.value=K.state.point,Kt.pointLightShadows.value=K.state.pointShadow,Kt.hemisphereLights.value=K.state.hemi,Kt.directionalShadowMap.value=K.state.directionalShadowMap,Kt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Kt.spotShadowMap.value=K.state.spotShadowMap,Kt.spotLightMatrix.value=K.state.spotLightMatrix,Kt.spotLightMap.value=K.state.spotLightMap,Kt.pointShadowMap.value=K.state.pointShadowMap,Kt.pointShadowMatrix.value=K.state.pointShadowMatrix),ot.currentProgram=ee,ot.uniformsList=null,ee}function ol(R){if(R.uniformsList===null){const Y=R.currentProgram.getUniforms();R.uniformsList=qc.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function jr(R,Y){const ft=E.get(R);ft.outputColorSpace=Y.outputColorSpace,ft.batching=Y.batching,ft.batchingColor=Y.batchingColor,ft.instancing=Y.instancing,ft.instancingColor=Y.instancingColor,ft.instancingMorph=Y.instancingMorph,ft.skinning=Y.skinning,ft.morphTargets=Y.morphTargets,ft.morphNormals=Y.morphNormals,ft.morphColors=Y.morphColors,ft.morphTargetsCount=Y.morphTargetsCount,ft.numClippingPlanes=Y.numClippingPlanes,ft.numIntersection=Y.numClipIntersection,ft.vertexAlphas=Y.vertexAlphas,ft.vertexTangents=Y.vertexTangents,ft.toneMapping=Y.toneMapping}function fs(R,Y,ft,ot,K){Y.isScene!==!0&&(Y=Re),W.resetTextureUnits();const It=Y.fog,kt=ot.isMeshStandardMaterial?Y.environment:null,Ht=Q===null?T.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:kr,Yt=(ot.isMeshStandardMaterial?At:xt).get(ot.envMap||kt),Zt=ot.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,ee=!!ft.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),Kt=!!ft.morphAttributes.position,ne=!!ft.morphAttributes.normal,Oe=!!ft.morphAttributes.color;let $e=Wi;ot.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&($e=T.toneMapping);const je=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,ze=je!==void 0?je.length:0,$t=E.get(ot),Pe=F.state.lights;if(Xt===!0&&(ue===!0||R!==pt)){const An=R===pt&&ot.id===ut;Lt.setState(ot,R,An)}let se=!1;ot.version===$t.__version?($t.needsLights&&$t.lightsStateVersion!==Pe.state.version||$t.outputColorSpace!==Ht||K.isBatchedMesh&&$t.batching===!1||!K.isBatchedMesh&&$t.batching===!0||K.isBatchedMesh&&$t.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&$t.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&$t.instancing===!1||!K.isInstancedMesh&&$t.instancing===!0||K.isSkinnedMesh&&$t.skinning===!1||!K.isSkinnedMesh&&$t.skinning===!0||K.isInstancedMesh&&$t.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&$t.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&$t.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&$t.instancingMorph===!1&&K.morphTexture!==null||$t.envMap!==Yt||ot.fog===!0&&$t.fog!==It||$t.numClippingPlanes!==void 0&&($t.numClippingPlanes!==Lt.numPlanes||$t.numIntersection!==Lt.numIntersection)||$t.vertexAlphas!==Zt||$t.vertexTangents!==ee||$t.morphTargets!==Kt||$t.morphNormals!==ne||$t.morphColors!==Oe||$t.toneMapping!==$e||$t.morphTargetsCount!==ze)&&(se=!0):(se=!0,$t.__version=ot.version);let En=$t.currentProgram;se===!0&&(En=ks(ot,Y,K));let Qi=!1,bn=!1,hi=!1;const Be=En.getUniforms(),Tn=$t.uniforms;if(qt.useProgram(En.program)&&(Qi=!0,bn=!0,hi=!0),ot.id!==ut&&(ut=ot.id,bn=!0),Qi||pt!==R){qt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Be.setValue(X,"projectionMatrix",R.projectionMatrix),Be.setValue(X,"viewMatrix",R.matrixWorldInverse);const Rn=Be.map.cameraPosition;Rn!==void 0&&Rn.setValue(X,le.setFromMatrixPosition(R.matrixWorld)),Ce.logarithmicDepthBuffer&&Be.setValue(X,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&Be.setValue(X,"isOrthographic",R.isOrthographicCamera===!0),pt!==R&&(pt=R,bn=!0,hi=!0)}if($t.needsLights&&(Pe.state.directionalShadowMap.length>0&&Be.setValue(X,"directionalShadowMap",Pe.state.directionalShadowMap,W),Pe.state.spotShadowMap.length>0&&Be.setValue(X,"spotShadowMap",Pe.state.spotShadowMap,W),Pe.state.pointShadowMap.length>0&&Be.setValue(X,"pointShadowMap",Pe.state.pointShadowMap,W)),K.isSkinnedMesh){Be.setOptional(X,K,"bindMatrix"),Be.setOptional(X,K,"bindMatrixInverse");const An=K.skeleton;An&&(An.boneTexture===null&&An.computeBoneTexture(),Be.setValue(X,"boneTexture",An.boneTexture,W))}K.isBatchedMesh&&(Be.setOptional(X,K,"batchingTexture"),Be.setValue(X,"batchingTexture",K._matricesTexture,W),Be.setOptional(X,K,"batchingIdTexture"),Be.setValue(X,"batchingIdTexture",K._indirectTexture,W),Be.setOptional(X,K,"batchingColorTexture"),K._colorsTexture!==null&&Be.setValue(X,"batchingColorTexture",K._colorsTexture,W));const mn=ft.morphAttributes;if((mn.position!==void 0||mn.normal!==void 0||mn.color!==void 0)&&Bt.update(K,ft,En),(bn||$t.receiveShadow!==K.receiveShadow)&&($t.receiveShadow=K.receiveShadow,Be.setValue(X,"receiveShadow",K.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(Tn.envMap.value=Yt,Tn.flipEnvMap.value=Yt.isCubeTexture&&Yt.isRenderTargetTexture===!1?-1:1),ot.isMeshStandardMaterial&&ot.envMap===null&&Y.environment!==null&&(Tn.envMapIntensity.value=Y.environmentIntensity),Tn.dfgLUT!==void 0&&(Tn.dfgLUT.value=dA()),bn&&(Be.setValue(X,"toneMappingExposure",T.toneMappingExposure),$t.needsLights&&Zr(Tn,hi),It&&ot.fog===!0&&Rt.refreshFogUniforms(Tn,It),Rt.refreshMaterialUniforms(Tn,ot,Et,tt,F.state.transmissionRenderTarget[R.id]),qc.upload(X,ol($t),Tn,W)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(qc.upload(X,ol($t),Tn,W),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&Be.setValue(X,"center",K.center),Be.setValue(X,"modelViewMatrix",K.modelViewMatrix),Be.setValue(X,"normalMatrix",K.normalMatrix),Be.setValue(X,"modelMatrix",K.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const An=ot.uniformsGroups;for(let Rn=0,Ws=An.length;Rn<Ws;Rn++){const Ti=An[Rn];_t.update(Ti,En),_t.bind(Ti,En)}}return En}function Zr(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function Ca(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(R,Y,ft){const ot=E.get(R);ot.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),E.get(R.texture).__webglTexture=Y,E.get(R.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:ft,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Y){const ft=E.get(R);ft.__webglFramebuffer=Y,ft.__useDefaultFramebuffer=Y===void 0};const wa=X.createFramebuffer();this.setRenderTarget=function(R,Y=0,ft=0){Q=R,V=Y,q=ft;let ot=null,K=!1,It=!1;if(R){const Ht=E.get(R);if(Ht.__useDefaultFramebuffer!==void 0){qt.bindFramebuffer(X.FRAMEBUFFER,Ht.__webglFramebuffer),P.copy(R.viewport),I.copy(R.scissor),at=R.scissorTest,qt.viewport(P),qt.scissor(I),qt.setScissorTest(at),ut=-1;return}else if(Ht.__webglFramebuffer===void 0)W.setupRenderTarget(R);else if(Ht.__hasExternalTextures)W.rebindTextures(R,E.get(R.texture).__webglTexture,E.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const ee=R.depthTexture;if(Ht.__boundDepthTexture!==ee){if(ee!==null&&E.has(ee)&&(R.width!==ee.image.width||R.height!==ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(R)}}const Yt=R.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(It=!0);const Zt=E.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Zt[Y])?ot=Zt[Y][ft]:ot=Zt[Y],K=!0):R.samples>0&&W.useMultisampledRTT(R)===!1?ot=E.get(R).__webglMultisampledFramebuffer:Array.isArray(Zt)?ot=Zt[ft]:ot=Zt,P.copy(R.viewport),I.copy(R.scissor),at=R.scissorTest}else P.copy(it).multiplyScalar(Et).floor(),I.copy(dt).multiplyScalar(Et).floor(),at=Ft;if(ft!==0&&(ot=wa),qt.bindFramebuffer(X.FRAMEBUFFER,ot)&&qt.drawBuffers(R,ot),qt.viewport(P),qt.scissor(I),qt.setScissorTest(at),K){const Ht=E.get(R.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ht.__webglTexture,ft)}else if(It){const Ht=Y;for(let Yt=0;Yt<R.textures.length;Yt++){const Zt=E.get(R.textures[Yt]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+Yt,Zt.__webglTexture,ft,Ht)}}else if(R!==null&&ft!==0){const Ht=E.get(R.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Ht.__webglTexture,ft)}ut=-1},this.readRenderTargetPixels=function(R,Y,ft,ot,K,It,kt,Ht=0){if(!(R&&R.isWebGLRenderTarget)){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Yt=E.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&kt!==void 0&&(Yt=Yt[kt]),Yt){qt.bindFramebuffer(X.FRAMEBUFFER,Yt);try{const Zt=R.textures[Ht],ee=Zt.format,Kt=Zt.type;if(!Ce.textureFormatReadable(ee)){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ce.textureTypeReadable(Kt)){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-ot&&ft>=0&&ft<=R.height-K&&(R.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Ht),X.readPixels(Y,ft,ot,K,bt.convert(ee),bt.convert(Kt),It))}finally{const Zt=Q!==null?E.get(Q).__webglFramebuffer:null;qt.bindFramebuffer(X.FRAMEBUFFER,Zt)}}},this.readRenderTargetPixelsAsync=async function(R,Y,ft,ot,K,It,kt,Ht=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Yt=E.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&kt!==void 0&&(Yt=Yt[kt]),Yt)if(Y>=0&&Y<=R.width-ot&&ft>=0&&ft<=R.height-K){qt.bindFramebuffer(X.FRAMEBUFFER,Yt);const Zt=R.textures[Ht],ee=Zt.format,Kt=Zt.type;if(!Ce.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ce.textureTypeReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ne=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,ne),X.bufferData(X.PIXEL_PACK_BUFFER,It.byteLength,X.STREAM_READ),R.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Ht),X.readPixels(Y,ft,ot,K,bt.convert(ee),bt.convert(Kt),0);const Oe=Q!==null?E.get(Q).__webglFramebuffer:null;qt.bindFramebuffer(X.FRAMEBUFFER,Oe);const $e=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await UM(X,$e,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,ne),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,It),X.deleteBuffer(ne),X.deleteSync($e),It}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Y=null,ft=0){const ot=Math.pow(2,-ft),K=Math.floor(R.image.width*ot),It=Math.floor(R.image.height*ot),kt=Y!==null?Y.x:0,Ht=Y!==null?Y.y:0;W.setTexture2D(R,0),X.copyTexSubImage2D(X.TEXTURE_2D,ft,0,0,kt,Ht,K,It),qt.unbindTexture()};const hs=X.createFramebuffer(),Da=X.createFramebuffer();this.copyTextureToTexture=function(R,Y,ft=null,ot=null,K=0,It=null){It===null&&(K!==0?(tl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),It=K,K=0):It=0);let kt,Ht,Yt,Zt,ee,Kt,ne,Oe,$e;const je=R.isCompressedTexture?R.mipmaps[It]:R.image;if(ft!==null)kt=ft.max.x-ft.min.x,Ht=ft.max.y-ft.min.y,Yt=ft.isBox3?ft.max.z-ft.min.z:1,Zt=ft.min.x,ee=ft.min.y,Kt=ft.isBox3?ft.min.z:0;else{const mn=Math.pow(2,-K);kt=Math.floor(je.width*mn),Ht=Math.floor(je.height*mn),R.isDataArrayTexture?Yt=je.depth:R.isData3DTexture?Yt=Math.floor(je.depth*mn):Yt=1,Zt=0,ee=0,Kt=0}ot!==null?(ne=ot.x,Oe=ot.y,$e=ot.z):(ne=0,Oe=0,$e=0);const ze=bt.convert(Y.format),$t=bt.convert(Y.type);let Pe;Y.isData3DTexture?(W.setTexture3D(Y,0),Pe=X.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(W.setTexture2DArray(Y,0),Pe=X.TEXTURE_2D_ARRAY):(W.setTexture2D(Y,0),Pe=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,Y.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,Y.unpackAlignment);const se=X.getParameter(X.UNPACK_ROW_LENGTH),En=X.getParameter(X.UNPACK_IMAGE_HEIGHT),Qi=X.getParameter(X.UNPACK_SKIP_PIXELS),bn=X.getParameter(X.UNPACK_SKIP_ROWS),hi=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,je.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,je.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Zt),X.pixelStorei(X.UNPACK_SKIP_ROWS,ee),X.pixelStorei(X.UNPACK_SKIP_IMAGES,Kt);const Be=R.isDataArrayTexture||R.isData3DTexture,Tn=Y.isDataArrayTexture||Y.isData3DTexture;if(R.isDepthTexture){const mn=E.get(R),An=E.get(Y),Rn=E.get(mn.__renderTarget),Ws=E.get(An.__renderTarget);qt.bindFramebuffer(X.READ_FRAMEBUFFER,Rn.__webglFramebuffer),qt.bindFramebuffer(X.DRAW_FRAMEBUFFER,Ws.__webglFramebuffer);for(let Ti=0;Ti<Yt;Ti++)Be&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,E.get(R).__webglTexture,K,Kt+Ti),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,E.get(Y).__webglTexture,It,$e+Ti)),X.blitFramebuffer(Zt,ee,kt,Ht,ne,Oe,kt,Ht,X.DEPTH_BUFFER_BIT,X.NEAREST);qt.bindFramebuffer(X.READ_FRAMEBUFFER,null),qt.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(K!==0||R.isRenderTargetTexture||E.has(R)){const mn=E.get(R),An=E.get(Y);qt.bindFramebuffer(X.READ_FRAMEBUFFER,hs),qt.bindFramebuffer(X.DRAW_FRAMEBUFFER,Da);for(let Rn=0;Rn<Yt;Rn++)Be?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,mn.__webglTexture,K,Kt+Rn):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,mn.__webglTexture,K),Tn?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,An.__webglTexture,It,$e+Rn):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,An.__webglTexture,It),K!==0?X.blitFramebuffer(Zt,ee,kt,Ht,ne,Oe,kt,Ht,X.COLOR_BUFFER_BIT,X.NEAREST):Tn?X.copyTexSubImage3D(Pe,It,ne,Oe,$e+Rn,Zt,ee,kt,Ht):X.copyTexSubImage2D(Pe,It,ne,Oe,Zt,ee,kt,Ht);qt.bindFramebuffer(X.READ_FRAMEBUFFER,null),qt.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Tn?R.isDataTexture||R.isData3DTexture?X.texSubImage3D(Pe,It,ne,Oe,$e,kt,Ht,Yt,ze,$t,je.data):Y.isCompressedArrayTexture?X.compressedTexSubImage3D(Pe,It,ne,Oe,$e,kt,Ht,Yt,ze,je.data):X.texSubImage3D(Pe,It,ne,Oe,$e,kt,Ht,Yt,ze,$t,je):R.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,It,ne,Oe,kt,Ht,ze,$t,je.data):R.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,It,ne,Oe,je.width,je.height,ze,je.data):X.texSubImage2D(X.TEXTURE_2D,It,ne,Oe,kt,Ht,ze,$t,je);X.pixelStorei(X.UNPACK_ROW_LENGTH,se),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,En),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Qi),X.pixelStorei(X.UNPACK_SKIP_ROWS,bn),X.pixelStorei(X.UNPACK_SKIP_IMAGES,hi),It===0&&Y.generateMipmaps&&X.generateMipmap(Pe),qt.unbindTexture()},this.initRenderTarget=function(R){E.get(R).__webglFramebuffer===void 0&&W.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?W.setTextureCube(R,0):R.isData3DTexture?W.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?W.setTexture2DArray(R,0):W.setTexture2D(R,0),qt.unbindTexture()},this.resetState=function(){V=0,q=0,Q=null,qt.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=De._getDrawingBufferColorSpace(e),i.unpackColorSpace=De._getUnpackColorSpace()}}const mA="0.4.1646424915",gA=30,_A=1e3/gA,K_=6,vA=40,xA=.133,SA=.5,MA=150,zr=5,jo=3,Q_=3e3,yA=window.AudioContext||window.webkitAudioContext;let Gn=null;const Ov=()=>{Gn||(Gn=new yA),Gn.state==="suspended"&&Gn.resume()},Sa=o=>{if(Gn||Ov(),!Gn)return;const e=Gn.createOscillator(),i=Gn.createGain();e.connect(i),i.connect(Gn.destination);const s=Gn.currentTime;if(o==="shoot")e.type="triangle",e.frequency.setValueAtTime(800,s),e.frequency.exponentialRampToValueAtTime(100,s+.1),i.gain.setValueAtTime(.1,s),i.gain.exponentialRampToValueAtTime(.01,s+.1),e.start(s),e.stop(s+.1);else if(o==="hit")e.type="square",e.frequency.setValueAtTime(200,s),e.frequency.exponentialRampToValueAtTime(50,s+.1),i.gain.setValueAtTime(.2,s),i.gain.exponentialRampToValueAtTime(.01,s+.1),e.start(s),e.stop(s+.1);else if(o==="spawn")e.type="sine",e.frequency.setValueAtTime(1200,s),i.gain.setValueAtTime(.05,s),i.gain.linearRampToValueAtTime(0,s+.1),e.start(s),e.stop(s+.1);else if(o==="fail")e.type="sawtooth",e.frequency.setValueAtTime(100,s),e.frequency.linearRampToValueAtTime(50,s+.3),i.gain.setValueAtTime(.3,s),i.gain.linearRampToValueAtTime(0,s+.3),e.start(s),e.stop(s+.3);else if(o==="gameover")e.type="sawtooth",e.frequency.setValueAtTime(200,s),e.frequency.exponentialRampToValueAtTime(10,s+1),i.gain.setValueAtTime(.5,s),i.gain.linearRampToValueAtTime(0,s+1),e.start(s),e.stop(s+1);else if(o==="charge")e.type="triangle",e.frequency.setValueAtTime(100,s),e.frequency.linearRampToValueAtTime(300,s+.1),i.gain.setValueAtTime(.1,s),i.gain.linearRampToValueAtTime(0,s+.1),e.start(s),e.stop(s+.1);else if(o==="explode"){const l=Gn.createBuffer(1,Gn.sampleRate*2,Gn.sampleRate),c=l.getChannelData(0);for(let d=0;d<Gn.sampleRate*2;d++)c[d]=Math.random()*2-1;const h=Gn.createBufferSource();h.buffer=l,h.connect(i),i.gain.setValueAtTime(1,s),i.gain.exponentialRampToValueAtTime(.01,s+2),h.start(s)}else o==="powerup"&&(e.type="sine",e.frequency.setValueAtTime(600,s),e.frequency.linearRampToValueAtTime(1800,s+.2),i.gain.setValueAtTime(.2,s),i.gain.linearRampToValueAtTime(0,s+.2),e.start(s),e.stop(s+.2))};function EA(){const[o,e]=ge.useState(!1),[i,s]=ge.useState(!1),[l,c]=ge.useState("Checking the Naughty List..."),[h,d]=ge.useState(null),[m,p]=ge.useState(0),[x,g]=ge.useState(zr),[S,y]=ge.useState(jo),[b,C]=ge.useState(!1),[M,_]=ge.useState(!1),[L,O]=ge.useState(!1),[N,F]=ge.useState(0),[B,z]=ge.useState("camera"),[j,T]=ge.useState(!1),[w,V]=ge.useState([]),q=ge.useRef(null),Q=ge.useRef(null),ut=ge.useRef(null),pt=ge.useRef(null),P=ge.useRef(null),I=ge.useRef([]),at=ge.useRef(null),Ut=ge.useRef(0),St=ge.useRef(null),D=ge.useRef(null),tt=ge.useRef(null),Et=ge.useRef(void 0),Ot=ge.useRef(0),Vt=ge.useRef(null),it=ge.useRef(!1),dt=ge.useRef(zr),Ft=ge.useRef(jo),Wt=ge.useRef([null,null]),Xt=ge.useRef([!1,!1]),ue=ge.useRef([!1,!1]),Ze=ge.useRef([0,0]),le=ge.useRef(null),pe=()=>{if(Ov(),!P.current){const rt=new Audio("melody-1.wav");rt.loop=!0,rt.volume=.35,rt.play().catch(st=>console.error("Could not play melody-1.wav. Ensure it is in the root directory.",st)),P.current=rt}e(!0),Re()},Re=async()=>{s(!0),it.current=!1,dt.current=zr,Ft.current=jo,g(zr),y(jo),C(!1),d(null),c("Polishing Sleigh Lenses...");try{const rt=await navigator.mediaDevices.getUserMedia({video:{width:{ideal:1280},height:{ideal:720},facingMode:"user"}});q.current&&(q.current.srcObject=rt,await new Promise(st=>{q.current&&(q.current.onloadedmetadata=()=>{q.current.play(),st()})}),ae())}catch(rt){console.error("Camera Init failed:",rt),s(!1),rt.name==="NotAllowedError"||rt.name==="PermissionDeniedError"?d("Camera access denied. Santa needs a camera to see the Grinches!"):d("Could not access camera. Maybe an Elf is using it?")}},ae=async()=>{try{if(!Q.current||!pt.current)return;c("Summoning Snowflakes...");const rt=window.innerWidth,st=window.innerHeight;tt.current&&tt.current.dispose();const ct=new ny;ct.fog=new np(14742270,.02);const Rt=new gy(16777215,.6);ct.add(Rt);const et=new my(16777215,1);et.position.set(5,15,10),ct.add(et);const Mt=1e3,Lt=new Ln,Dt=new Float32Array(Mt*3);for(let _t=0;_t<Mt;_t++)Dt[_t*3]=(Math.random()-.5)*100,Dt[_t*3+1]=(Math.random()-.5)*100,Dt[_t*3+2]=(Math.random()-.5)*100;Lt.setAttribute("position",new Pi(Dt,3));const Ct=new Av({color:16777215,size:.2,transparent:!0,opacity:.8,blending:Yh}),Bt=new ly(Lt,Ct);ct.add(Bt),Vt.current=Bt;const G=new Ei(75,rt/st,.1,1e3);G.position.z=10;const wt=new pA({canvas:Q.current,alpha:!0,antialias:!0});wt.setSize(rt,st),wt.setPixelRatio(window.devicePixelRatio),St.current=ct,D.current=G,tt.current=wt,c("Loading Elf-Tech AI...");let bt=0;for(;!window.Hands&&bt<100;)await new Promise(_t=>setTimeout(()=>_t(),100)),bt++;if(!window.Hands)throw new Error("Failed to load MediaPipe Hands.");const Pt=new window.Hands({locateFile:_t=>`https://unpkg.com/@mediapipe/hands@${mA}/${_t}`});Pt.setOptions({maxNumHands:2,modelComplexity:1,minDetectionConfidence:.5,minTrackingConfidence:.5}),Pt.onResults(At),at.current=Pt,q.current&&await Pt.send({image:q.current}),s(!1),it.current=!0,_e(),Et.current=requestAnimationFrame(mt)}catch(rt){console.error("Game Init failed:",rt),d("Failed to initialize game engine."),s(!1)}};ge.useEffect(()=>{const rt=()=>{D.current&&tt.current&&(D.current.aspect=window.innerWidth/window.innerHeight,D.current.updateProjectionMatrix(),tt.current.setSize(window.innerWidth,window.innerHeight)),ut.current&&(ut.current.width=window.innerWidth,ut.current.height=window.innerHeight)};window.addEventListener("resize",rt);const st=ct=>{ct.code==="Space"&&(ct.preventDefault(),z(Rt=>Rt==="camera"?"space":"camera"))};return window.addEventListener("keydown",st),()=>{window.removeEventListener("resize",rt),window.removeEventListener("keydown",st),Et.current!==void 0&&cancelAnimationFrame(Et.current),at.current&&at.current.close(),P.current&&(P.current.pause(),P.current=null),q.current&&q.current.srcObject&&q.current.srcObject.getTracks().forEach(ct=>ct.stop()),I.current.forEach(ct=>{St.current&&St.current.remove(ct.group)}),it.current=!1}},[]);const qe=(rt,st,ct)=>{const Rt=new zs({color:0}),et=new ya(.3,.05,.05),Mt=new be(et,Rt);Mt.position.set(-.25,st+.15,ct),Mt.rotation.z=-Math.PI/6,rt.add(Mt);const Lt=new be(et,Rt);Lt.position.set(.25,st+.15,ct),Lt.rotation.z=Math.PI/6,rt.add(Lt);const Dt=new Ni(.08,4,4),Ct=new zs({color:0}),Bt=new be(Dt,Ct);Bt.position.set(-.2,st,ct),rt.add(Bt);const G=new be(Dt,Ct);G.position.set(.2,st,ct),rt.add(G);const wt=new $c(.2,.03,4,8,Math.PI),bt=new be(wt,Ct);bt.position.set(0,st-.2,ct),bt.rotation.x=-Math.PI/2,bt.rotation.z=Math.PI,rt.add(bt)},X=rt=>{const st=new Br,ct=rt?2.5:1,Rt=["grinch","gingerbread","snowman"],et=rt?"boss":Rt[Math.floor(Math.random()*Rt.length)];if(et==="grinch"||et==="boss"){const Bt=new Ni(.8,8,8),G=new rs({color:4906624,roughness:.5,metalness:.1}),wt=new be(Bt,G);st.add(wt);const bt=new Jc(.6,1.2,8);bt.translate(0,.8,0);const Pt=new rs({color:15680580}),_t=new be(bt,Pt);st.add(_t);const gt=new Ni(.2,8,8);gt.translate(0,1.4,0);const Nt=new rs({color:16777215});st.add(new be(gt,Nt));const Jt=new $c(.6,.1,8,16);Jt.rotateX(Math.PI*.5),Jt.translate(0,.4,0),st.add(new be(Jt,Nt)),qe(st,.1,.7)}else if(et==="gingerbread"){const Bt=new rs({color:9127187,roughness:.8}),G=new be(new Ni(.5,8,8),Bt);G.position.y=.5,st.add(G);const wt=new be(new Qo(.4,.5,4,8),Bt);st.add(wt);const bt=new Qo(.15,.4,4,8),Pt=new be(bt,Bt);Pt.position.set(-.5,.2,0),Pt.rotation.z=Math.PI/4,st.add(Pt);const _t=new be(bt,Bt);_t.position.set(.5,.2,0),_t.rotation.z=-Math.PI/4,st.add(_t);const gt=new Qo(.15,.4,4,8),Nt=new be(gt,Bt);Nt.position.set(-.25,-.6,0),st.add(Nt);const Jt=new be(gt,Bt);Jt.position.set(.25,-.6,0),st.add(Jt);const ve=new zs({color:15680580}),me=new be(new Ni(.08,4,4),ve);me.position.set(0,.2,.35),st.add(me),qe(st,.6,.4)}else if(et==="snowman"){const Bt=new rs({color:16777215,roughness:.9}),G=new be(new Ni(.4,8,8),Bt);G.position.y=.5,st.add(G);const wt=new be(new Ni(.6,8,8),Bt);wt.position.y=-.2,st.add(wt);const bt=new be(new Ni(.8,8,8),Bt);bt.position.y=-1,st.add(bt);const Pt=new zs({color:16753920}),_t=new Jc(.08,.4,4);_t.rotateX(Math.PI/2);const gt=new be(_t,Pt);gt.position.set(0,.5,.4),st.add(gt),qe(st,.6,.35)}const Mt=new rl(2,.8);Mt.translate(1,0,0);const Lt=new zs({color:16777215,transparent:!0,opacity:.6,side:Vi}),Dt=new be(Mt,Lt);Dt.position.set(.2,0,0);const Ct=new be(Mt,Lt);return Ct.position.set(-.2,0,0),Ct.scale.x=-1,st.add(Dt),st.add(Ct),st.scale.set(ct,ct,ct),{group:st,leftWing:Dt,rightWing:Ct}},Ye=rt=>{const st=new Br;if(rt==="orb"){const ct=new rs({color:15680580});st.add(new be(new ya(1,1,1),ct));const Rt=new rs({color:16436245});st.add(new be(new ya(1.1,.2,.2),Rt)),st.add(new be(new ya(.2,1.1,.2),Rt))}else{const ct=new rs({color:16777215,emissive:15680580,emissiveIntensity:.5});st.add(new be(new Ni(.7,8,8),ct))}return{group:st}},_e=()=>{if(!St.current||I.current.filter(G=>G.active).length>=K_)return;const rt=Math.random().toString(36),st=Math.random();let ct="bird";st>.95?ct="health":st>.9?ct="orb":st>.75&&(ct="boss");let Rt;ct==="bird"||ct==="boss"?Rt=X(ct==="boss"):Rt=Ye(ct);const{group:et,leftWing:Mt,rightWing:Lt}=Rt;et.userData={id:rt,isEnemy:!0,type:ct};const Dt=vA+Math.random()*5,Ct=(Math.random()-.5)*40,Bt=(Math.random()-.5)*20;et.position.set(Ct,Bt,-Dt),et.lookAt(0,0,0),St.current.add(et),I.current.push({group:et,leftWing:Mt,rightWing:Lt,id:rt,active:!0,seed:Math.random()*100,type:ct}),Sa("spawn")},Ce=()=>{T(!0),setTimeout(()=>T(!1),800)},qt=(rt,st,ct,Rt)=>{const et=document.createElement("div");et.textContent=rt,et.style.position="absolute",et.style.left=`${st}px`,et.style.top=`${ct}px`,Rt==="hit"&&(et.style.color="#ef4444"),Rt==="fail"&&(et.style.color="#1e3a8a"),Rt==="nuke"&&(et.style.color="#facc15"),Rt==="powerup"&&(et.style.color="#4ade80"),et.style.fontSize=Rt==="nuke"?"60px":Rt==="hit"?"40px":"20px",et.style.fontFamily='"Comic Sans MS", cursive, sans-serif',et.style.fontWeight="bold",et.style.pointerEvents="none",et.style.transition="all 0.5s ease-out",et.style.textShadow="2px 2px 4px rgba(0,0,0,0.5)",et.style.transform="translate(-50%, -50%) scale(0.5)",et.style.zIndex="100",document.body.appendChild(et),requestAnimationFrame(()=>{et.style.transform=`translate(-50%, -150%) scale(${Rt==="hit"?1.5:Rt==="nuke"?2:1})`,et.style.opacity="0"}),setTimeout(()=>{document.body.contains(et)&&document.body.removeChild(et)},500)},U=rt=>{if(!St.current)return;const st=new Tv({color:16777215,transparent:!0,opacity:.9}),ct=new J(rt.x*5,rt.y*5-2,8),Rt=new J(rt.x*50,rt.y*50,-50),et=new Ln().setFromPoints([ct,Rt]),Mt=new oy(et,st);St.current.add(Mt),setTimeout(()=>{var Lt;return(Lt=St.current)==null?void 0:Lt.remove(Mt)},100),Sa("shoot")},E=()=>{St.current&&(Sa("explode"),O(!0),setTimeout(()=>O(!1),500),Ft.current-=1,y(Ft.current),le.current=null,F(0),I.current.forEach(rt=>{var st;rt.active&&(rt.active=!1,(st=St.current)==null||st.remove(rt.group),rt.type==="boss"?Ot.current+=300:rt.type==="bird"&&(Ot.current+=100))}),p(Ot.current),Ce(),qt("BAH HUMBUG! BLAST!",window.innerWidth/2,window.innerHeight/2,"nuke"))},W=()=>{const rt=performance.now(),st=ue.current.some(Rt=>Rt),ct=Ft.current>0;if(st&&ct){le.current===null&&(le.current=rt);const Rt=rt-le.current,et=Math.min(Rt/Q_,1);if(F(et),et<1&&Math.floor(Rt/200)>Math.floor((Rt-16)/200)&&Sa("charge"),et>=1){E();return}}else le.current=null,F(0);Wt.current.forEach((Rt,et)=>{if(!Rt)return;const Mt=Xt.current[et],Lt=Ze.current[et];if(Mt&&rt-Lt>MA){Ze.current[et]=rt;const Dt=new Ue(Rt.x*2-1,-(Rt.y*2)+1);if(!D.current||!St.current)return;U(Dt);const Ct=new vy;Ct.setFromCamera(Dt,D.current);const Bt=I.current.filter(wt=>wt.active).map(wt=>wt.group),G=Ct.intersectObjects(Bt,!0);if(G.length>0){let wt=G[0].object,bt=null;for(;wt&&wt!==St.current;){if(wt.userData&&wt.userData.isEnemy){bt=wt.userData.id;break}wt=wt.parent}if(bt){const Pt=I.current.findIndex(_t=>_t.id===bt);if(Pt!==-1){const _t=I.current[Pt],gt=Rt.x*window.innerWidth,Nt=Rt.y*window.innerHeight;if(_t.active=!1,St.current.remove(_t.group),Ce(),_t.type==="orb")Ft.current=Math.min(Ft.current+1,jo),y(Ft.current),Sa("powerup"),qt("GIFT COLLECTED!",gt,Nt,"powerup");else if(_t.type==="health")dt.current=Math.min(dt.current+1,zr),g(dt.current),Sa("powerup"),qt("SWEET TREAT!",gt,Nt,"powerup");else{const Jt=_t.type==="boss"?300:100;Ot.current+=Jt,p(Ot.current),Sa("hit");const ve=["BAH!","HUMBUG!","GOTCHA!","STAY BACK!"];qt(ve[Math.floor(Math.random()*ve.length)],gt,Nt,"hit")}}}}}})},xt=(rt,st,ct)=>{const Rt=ut.current.width,et=ut.current.height;rt.save(),rt.translate(Rt,0),rt.scale(-1,1);const Mt=(Dt,Ct)=>{rt.beginPath(),rt.moveTo(st[Dt[0]].x*Rt,st[Dt[0]].y*et);for(let Bt=1;Bt<Dt.length;Bt++)rt.lineTo(st[Dt[Bt]].x*Rt,st[Dt[Bt]].y*et);rt.strokeStyle=Ct,rt.lineWidth=6,rt.lineCap="round",rt.stroke()};Mt([0,5,9,13,17,0],"#ffffff"),Mt([0,5,6,7,8],ct?"#ef4444":"#ffffff"),Mt([0,9,10,11,12],"#ffffff"),Mt([0,13,14,15,16],"#ffffff"),Mt([0,17,18,19,20],"#ffffff"),rt.restore()},At=ge.useCallback(rt=>{var Lt;const st=(Lt=ut.current)==null?void 0:Lt.getContext("2d");if(st&&ut.current&&st.clearRect(0,0,ut.current.width,ut.current.height),!rt.multiHandLandmarks||rt.multiHandLandmarks.length===0){Wt.current=[null,null],Xt.current=[!1,!1],ue.current=[!1,!1],V([]);return}const ct=[],Rt=[null,null],et=[!1,!1],Mt=[!1,!1];rt.multiHandLandmarks.forEach((Dt,Ct)=>{if(Ct>1)return;const Bt=(Ki,ci)=>{const ui=Dt[Ki],Qn=Dt[ci];return Math.hypot(ui.x-Qn.x,ui.y-Qn.y)},G=Bt(0,8)>Bt(0,6)*1.05,wt=Bt(0,8)<Bt(0,5)*1.2,bt=Bt(0,12)<Bt(0,9)*1.2,Pt=Bt(0,16)<Bt(0,13)*1.2,_t=Bt(0,20)<Bt(0,17)*1.2,gt=G&&bt&&Pt&&!wt,Nt=wt&&bt&&Pt&&_t,Jt=Nt?Dt[9]:Dt[8],ve=1-Jt.x,me=Jt.y;let ln=ve,Bn=me;if(gt&&D.current){let Ki=SA,ci=null;I.current.forEach(ui=>{if(!ui.active)return;const Qn=ui.group.position.clone();Qn.project(D.current);const Ra=(Qn.x+1)/2,us=-(Qn.y-1)/2,Jn=Math.sqrt(Math.pow(Ra-ve,2)+Math.pow(us-me,2));Jn<Ki&&(Ki=Jn,ci=Qn)}),ci&&(ln=(ci.x+1)/2,Bn=-(ci.y-1)/2)}Rt[Ct]={x:ln,y:Bn},et[Ct]=gt,Mt[Ct]=Nt,ct.push({indexExtended:G,isGun:gt,isFist:Nt,aim:{x:ln,y:Bn}}),st&&xt(st,Dt,gt)}),Wt.current=Rt,Xt.current=et,ue.current=Mt,V(ct)},[]),mt=rt=>{if(Et.current=requestAnimationFrame(mt),dt.current<=0)return;if(it.current&&q.current&&at.current&&q.current.readyState===4&&rt-Ut.current>=_A){Ut.current=rt;try{at.current.send({image:q.current})}catch{}}if(W(),I.current.filter(ct=>ct.active).length<K_&&Math.random()<.04&&_e(),Vt.current){const ct=Vt.current.geometry.attributes.position.array;for(let Rt=0;Rt<ct.length;Rt+=3)ct[Rt+1]-=.1,ct[Rt+1]<-50&&(ct[Rt+1]=50),ct[Rt]+=Math.sin(rt/500+Rt)*.02;Vt.current.geometry.attributes.position.needsUpdate=!0}I.current.forEach(ct=>{var Rt;if(ct.active){const et=rt/1e3;if(ct.type==="bird"||ct.type==="boss"){if(ct.leftWing&&ct.rightWing){const Ct=ct.type==="boss"?8:15;ct.leftWing.rotation.z=Math.sin(et*Ct+ct.seed)*.5,ct.rightWing.rotation.z=-Math.sin(et*Ct+ct.seed)*.5}}else ct.group.rotation.y+=.02,ct.group.rotation.x=Math.sin(et)*.2;const Mt=ct.group.position,Lt=new J(0,0,0).sub(Mt).normalize();Lt.y+=Math.sin(et*2+ct.seed)*.05;const Dt=ct.type==="boss"?.7:1;ct.group.position.add(Lt.multiplyScalar(xA*Dt)),ct.group.lookAt(0,0,0),ct.group.position.length()<3&&(ct.active=!1,(Rt=St.current)==null||Rt.remove(ct.group),(ct.type==="bird"||ct.type==="boss")&&(Sa("fail"),dt.current-=ct.type==="boss"?2:1,g(dt.current),qt("BAH HUMBUG!",window.innerWidth/2,window.innerHeight/2,"fail"),_(!0),setTimeout(()=>_(!1),200),dt.current<=0&&(C(!0),Sa("gameover"))))}}),I.current=I.current.filter(ct=>ct.active),tt.current&&St.current&&D.current&&tt.current.render(St.current,D.current)};return h?zt.jsxs("div",{className:"flex flex-col items-center justify-center w-full h-full bg-slate-900 text-white p-6",children:[zt.jsx("h2",{className:"text-2xl font-bold text-red-500 mb-4",children:"Bah Humbug!"}),zt.jsx("p",{className:"mb-6 text-center max-w-md",children:h}),zt.jsx("button",{onClick:()=>window.location.reload(),className:"px-6 py-3 bg-red-600 hover:bg-red-500 rounded-full font-bold transition",children:"Try Again"})]}):zt.jsxs("div",{ref:pt,className:"relative w-full h-full bg-slate-100 overflow-hidden select-none cursor-none",children:[!o&&zt.jsxs("div",{className:"absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-black z-[100] flex flex-col items-center justify-center p-8 text-white",children:[zt.jsx("div",{className:"absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"}),zt.jsxs("div",{className:"relative mb-8 text-center animate-in zoom-in duration-700",children:[zt.jsx("span",{className:"text-8xl mb-4 block",children:"🎅"}),zt.jsx("h1",{className:"text-6xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-red-500 drop-shadow-2xl",children:"BAH HUMBUG!"}),zt.jsx("div",{className:"w-24 h-1 bg-red-500 mx-auto mt-4 rounded-full"})]}),zt.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl w-full mb-12",children:[zt.jsxs("div",{className:"bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition group",children:[zt.jsx("div",{className:"text-3xl mb-2 group-hover:scale-110 transition",children:"👉"}),zt.jsx("h3",{className:"font-black text-xl mb-1 text-green-400",children:"DUAL POINT"}),zt.jsx("p",{className:"text-sm opacity-80",children:"Use both hands! Extend index fingers to fire snowballs at Grinches!"})]}),zt.jsxs("div",{className:"bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition group",children:[zt.jsx("div",{className:"text-3xl mb-2 group-hover:scale-110 transition",children:"✊"}),zt.jsx("h3",{className:"font-black text-xl mb-1 text-red-400",children:"DOUBLE BOMB"}),zt.jsx("p",{className:"text-sm opacity-80",children:"Hold either hand in a fist to charge a massive area-of-effect Blast!"})]}),zt.jsxs("div",{className:"bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition group",children:[zt.jsx("div",{className:"text-3xl mb-2 group-hover:scale-110 transition",children:"🎄"}),zt.jsx("h3",{className:"font-black text-xl mb-1 text-yellow-400",children:"DEFEND"}),zt.jsx("p",{className:"text-sm opacity-80",children:"Don't let the Grinches, Gingerbread Men, or Snowmen touch you!"})]}),zt.jsxs("div",{className:"bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition group",children:[zt.jsx("div",{className:"text-3xl mb-2 group-hover:scale-110 transition",children:"🎁"}),zt.jsx("h3",{className:"font-black text-xl mb-1 text-white",children:"LOOT"}),zt.jsx("p",{className:"text-sm opacity-80",children:"Shoot floating Gifts for bombs and Candy for extra lives!"})]})]}),zt.jsx("button",{onClick:pe,className:"px-12 py-6 bg-red-600 border-4 border-white text-white text-3xl font-black rounded-full shadow-[0_0_30px_rgba(239,68,68,0.5)] hover:bg-red-500 hover:scale-110 active:scale-95 transition transform cursor-pointer",children:"START MISSION"}),zt.jsx("p",{className:"mt-8 text-xs opacity-50 font-mono uppercase tracking-widest animate-pulse",children:"Camera Access Required"})]}),zt.jsx("div",{className:`absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-900 via-indigo-900 to-slate-950 transition-opacity duration-500 z-0 ${B==="space"?"opacity-100":"opacity-0"}`,children:zt.jsx("div",{className:"w-full h-full opacity-30 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"})}),zt.jsx("div",{className:`absolute top-0 left-0 w-full h-full bg-white pointer-events-none transition-opacity duration-300 z-50 ${L?"opacity-100":"opacity-0"}`,style:{mixBlendMode:"screen"}}),zt.jsx("div",{className:`absolute top-0 left-0 w-full h-full bg-red-600 pointer-events-none transition-opacity duration-75 z-20 ${M?"opacity-40":"opacity-0"}`,style:{mixBlendMode:"overlay"}}),zt.jsxs("div",{className:`w-full h-full relative transition-transform duration-75 z-10 ${M?"translate-x-2 translate-y-2 rotate-1":""} ${L?"scale-105":""}`,children:[zt.jsx("video",{ref:q,className:`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${B==="camera"?"opacity-100":"opacity-0"}`,style:{transform:"scaleX(-1)"},playsInline:!0,muted:!0}),zt.jsx("canvas",{ref:ut,className:"absolute top-0 left-0 w-full h-full pointer-events-none opacity-90"}),zt.jsx("canvas",{ref:Q,className:"absolute top-0 left-0 w-full h-full pointer-events-none"})]}),zt.jsxs("div",{className:`absolute bottom-10 left-10 transition-all duration-300 pointer-events-none z-50 flex flex-col items-center ${j?"opacity-100 translate-y-0 scale-110":"opacity-0 translate-y-10 scale-50"}`,children:[zt.jsx("span",{className:"text-8xl drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] animate-bounce",children:"🎅✨"}),zt.jsx("span",{className:"text-white font-black text-2xl tracking-tighter drop-shadow-md bg-red-600 px-4 py-1 rounded-full -mt-4",children:"HO HO HO!"})]}),zt.jsxs("div",{className:"absolute top-0 left-0 w-full h-full pointer-events-none z-30",children:[zt.jsxs("div",{className:"absolute top-6 left-6 flex flex-col gap-2",children:[zt.jsxs("div",{className:"text-white font-mono text-4xl font-bold drop-shadow-[0_0_10px_rgba(239,68,68,0.8)] flex items-center gap-3",children:[zt.jsx("span",{className:"text-red-500",children:"🎄"}),m.toString().padStart(6,"0")]}),zt.jsx("div",{className:"text-xs text-white font-sans tracking-widest uppercase bg-red-600 px-2 py-1 rounded w-fit font-bold",children:"BAH HUMBUG! AR"})]}),zt.jsxs("div",{className:"absolute top-6 right-6 flex flex-col items-end gap-2",children:[zt.jsx("div",{className:"flex items-center gap-1 mb-2 bg-black/20 p-2 rounded-xl backdrop-blur-sm",children:Array.from({length:zr}).map((rt,st)=>zt.jsx("div",{className:`w-8 h-8 flex items-center justify-center transition-all duration-300 ${st<x?"scale-110 opacity-100":"scale-50 opacity-20 grayscale"}`,children:zt.jsx("span",{className:"text-3xl drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]",children:"⭐"})},st))}),zt.jsxs("div",{className:"flex items-center gap-2 bg-red-600/80 px-4 py-2 rounded-full border border-white/50 backdrop-blur-sm shadow-lg",children:[zt.jsx("span",{className:"text-2xl",children:"🎁"}),zt.jsxs("span",{className:`text-2xl font-mono font-bold ${S>0?"text-white":"text-white/40"}`,children:["x ",S]})]})]}),N>0&&S>0&&zt.jsxs("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 z-40",children:[zt.jsx("div",{className:"w-48 h-6 bg-white/20 rounded-full overflow-hidden border border-white/50 backdrop-blur-md",children:zt.jsx("div",{className:"h-full bg-gradient-to-r from-red-500 to-white transition-all duration-75",style:{width:`${N*100}%`}})}),zt.jsx("div",{className:"text-white font-black tracking-widest text-lg animate-pulse drop-shadow-[0_0_8px_rgba(255,255,255,1)]",children:"CHARGING MERRY BLAST"})]}),w.map((rt,st)=>rt.aim&&zt.jsxs("div",{className:"absolute transition-transform duration-75 ease-out will-change-transform",style:{top:`${rt.aim.y*100}%`,left:`${rt.aim.x*100}%`,width:"60px",height:"60px",border:`3px dashed ${rt.isFist||rt.isGun?"#FFFFFF":"#ef4444"}`,borderRadius:"50%",boxShadow:`0 0 20px ${rt.isFist||rt.isGun?"#FFFFFF":"#ef4444"}`,transform:"translate(-50%, -50%) scale(1)"},children:[zt.jsx("div",{className:"absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"}),rt.isFist&&N>0&&S>0&&zt.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",pointerEvents:"none"},children:zt.jsx("div",{style:{width:96,height:96,borderRadius:"50%",padding:6,boxSizing:"border-box",background:`conic-gradient(rgba(255,255,255,0.95) ${N*360}deg, rgba(255,255,255,0.12) ${N*360}deg)`,boxShadow:"0 0 30px rgba(255,255,255,0.9)"},children:zt.jsxs("div",{style:{width:"100%",height:"100%",borderRadius:"50%",background:"rgba(0,0,0,0.45)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:800},children:[zt.jsxs("div",{style:{fontSize:14},children:[Math.max(0,(1-N)*Q_/1e3).toFixed(1),"s"]}),zt.jsx("div",{style:{fontSize:10,opacity:.9},children:"CHARGE"})]})})})]},st)),zt.jsx("div",{className:"absolute bottom-6 right-6 flex flex-col items-end gap-2",children:zt.jsx("div",{className:`flex items-center gap-2 px-3 py-1 rounded-full border transition-colors ${w.some(rt=>rt.isFist)?"bg-red-600 border-white text-white":w.some(rt=>rt.isGun)?"bg-green-600 border-white text-white":"bg-white/10 border-white/30 text-white/50"}`,children:zt.jsx("span",{className:"text-sm font-bold uppercase tracking-tight",children:w.length===0?"NO HANDS DETECTED":w.some(rt=>rt.isFist)?"BLAST READY":w.some(rt=>rt.isGun)?"DUAL POINTING":"IDLE"})})}),zt.jsx("div",{className:"absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-auto flex flex-col items-center gap-1 group",children:zt.jsx("button",{onClick:()=>z(rt=>rt==="camera"?"space":"camera"),className:"px-6 py-2 bg-red-600 border-2 border-white rounded-full text-white font-mono text-sm hover:bg-red-700 transition flex items-center gap-2 backdrop-blur-sm shadow-xl active:scale-95",children:zt.jsx("span",{className:"uppercase font-bold tracking-wider",children:B==="camera"?"📸 AR MODE":"❄️ WINTER MODE"})})})]}),b&&zt.jsxs("div",{className:"absolute top-0 left-0 w-full h-full bg-red-900/90 backdrop-blur-xl z-[200] flex flex-col items-center justify-center animate-in fade-in duration-500 cursor-auto pointer-events-auto text-white",children:[zt.jsx("span",{className:"text-8xl mb-4",children:"🎅"}),zt.jsx("h1",{className:"text-6xl font-black mb-4 tracking-tighter drop-shadow-2xl",children:"BAH HUMBUG!"}),zt.jsxs("div",{className:"text-2xl font-mono mb-8 bg-black/20 px-6 py-2 rounded-full border border-white/20",children:["SCORE: ",zt.jsx("span",{className:"text-yellow-400 font-black",children:m})]}),zt.jsx("button",{onClick:()=>window.location.reload(),className:"px-10 py-5 bg-white text-red-600 font-black text-2xl rounded-full hover:scale-105 hover:bg-green-100 transition transform shadow-2xl border-b-4 border-gray-300",children:"RESTART ADVENTURE"})]}),i&&zt.jsxs("div",{className:"absolute top-0 left-0 w-full h-full bg-red-600 z-[300] flex flex-col items-center justify-center text-white",children:[zt.jsxs("div",{className:"relative w-32 h-32 mb-8 flex items-center justify-center",children:[zt.jsx("div",{className:"absolute inset-0 border-8 border-white/20 border-t-white rounded-full animate-spin shadow-xl"}),zt.jsx("span",{className:"text-2xl font-black text-white drop-shadow-md",children:"BAH!"})]}),zt.jsx("h1",{className:"text-4xl font-black tracking-tighter mb-2 italic uppercase",children:"BAH HUMBUG!"}),zt.jsx("p",{className:"font-mono text-sm opacity-80 animate-pulse uppercase tracking-widest",children:l})]})]})}const Pv=document.getElementById("root");if(!Pv)throw new Error("Could not find root element to mount to");const bA=QS.createRoot(Pv);bA.render(zt.jsx(XS.StrictMode,{children:zt.jsx(EA,{})}));
