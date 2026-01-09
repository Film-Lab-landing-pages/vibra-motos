var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function ee(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function te(e,t){return ee(e.type,t,e.props)}function E(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ne(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var re=/\/+/g;function ie(e,t){return typeof e==`object`&&e&&e.key!=null?ne(``+e.key):t.toString(36)}function ae(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function oe(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,oe(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ie(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(re,`$&/`)+`/`),oe(o,r,i,``,function(e){return e})):o!=null&&(E(o)&&(o=te(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(re,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ie(a,u),c+=oe(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ie(a,u++),c+=oe(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return oe(ae(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function se(e,t,n){if(e==null)return e;var r=[],i=0;return oe(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ce(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var D=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},O={map:se,forEach:function(e,t,n){se(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return se(e,function(){t++}),t},toArray:function(e){return se(e,function(e){return e})||[]},only:function(e){if(!E(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=O,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!T.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return ee(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)T.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return ee(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=E,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ce}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,D)}catch(e){D(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.0`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,E());else{var t=n(l);t!==null&&ie(x,t.startTime-e)}}var S=!1,C=-1,w=5,T=-1;function ee(){return g?!0:!(e.unstable_now()-T<w)}function te(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&ee());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ie(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?E():S=!1}}}var E;if(typeof y==`function`)E=function(){y(te)};else if(typeof MessageChannel<`u`){var ne=new MessageChannel,re=ne.port2;ne.port1.onmessage=te,E=function(){re.postMessage(null)}}else E=function(){_(te,0)};function ie(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,ie(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,E()))),r},e.unstable_shouldYield=ee,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.0`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),T=Symbol.for(`react.suspense`),ee=Symbol.for(`react.suspense_list`),te=Symbol.for(`react.memo`),E=Symbol.for(`react.lazy`),ne=Symbol.for(`react.activity`),re=Symbol.for(`react.memo_cache_sentinel`),ie=Symbol.iterator;function ae(e){return typeof e!=`object`||!e?null:(e=ie&&e[ie]||e[`@@iterator`],typeof e==`function`?e:null)}var oe=Symbol.for(`react.client.reference`);function se(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===oe?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case T:return`Suspense`;case ee:return`SuspenseList`;case ne:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case te:return t=e.displayName||null,t===null?se(e.type)||`Memo`:t;case E:t=e._payload,e=e._init;try{return se(e(t))}catch{}}return null}var ce=Array.isArray,D=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,O=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le={pending:!1,data:null,method:null,action:null},ue=[],de=-1;function fe(e){return{current:e}}function pe(e){0>de||(e.current=ue[de],ue[de]=null,de--)}function k(e,t){de++,ue[de]=e.current,e.current=t}var me=fe(null),he=fe(null),ge=fe(null),_e=fe(null);function ve(e,t){switch(k(ge,t),k(he,e),k(me,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}pe(me),k(me,e)}function ye(){pe(me),pe(he),pe(ge)}function be(e){e.memoizedState!==null&&k(_e,e);var t=me.current,n=Hd(t,e.type);t!==n&&(k(he,e),k(me,n))}function xe(e){he.current===e&&(pe(me),pe(he)),_e.current===e&&(pe(_e),Qf._currentValue=le)}var Se,Ce;function we(e){if(Se===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Se=t&&t[1]||``,Ce=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Se+e+Ce}var Te=!1;function Ee(e,t){if(!e||Te)return``;Te=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,`name`,{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Te=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?we(n):``}function De(e,t){switch(e.tag){case 26:case 27:case 5:return we(e.type);case 16:return we(`Lazy`);case 13:return e.child!==t&&t!==null?we(`Suspense Fallback`):we(`Suspense`);case 19:return we(`SuspenseList`);case 0:case 15:return Ee(e.type,!1);case 11:return Ee(e.type.render,!1);case 1:return Ee(e.type,!0);case 31:return we(`Activity`);default:return``}}function Oe(e){try{var t=``,n=null;do t+=De(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var ke=Object.prototype.hasOwnProperty,Ae=t.unstable_scheduleCallback,je=t.unstable_cancelCallback,Me=t.unstable_shouldYield,Ne=t.unstable_requestPaint,Pe=t.unstable_now,Fe=t.unstable_getCurrentPriorityLevel,Ie=t.unstable_ImmediatePriority,Le=t.unstable_UserBlockingPriority,Re=t.unstable_NormalPriority,ze=t.unstable_LowPriority,Be=t.unstable_IdlePriority,Ve=t.log,He=t.unstable_setDisableYieldValue,Ue=null,We=null;function Ge(e){if(typeof Ve==`function`&&He(e),We&&typeof We.setStrictMode==`function`)try{We.setStrictMode(Ue,e)}catch{}}var Ke=Math.clz32?Math.clz32:Ye,qe=Math.log,Je=Math.LN2;function Ye(e){return e>>>=0,e===0?32:31-(qe(e)/Je|0)|0}var Xe=256,Ze=262144,Qe=4194304;function $e(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function et(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=$e(n))):i=$e(o):i=$e(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=$e(n))):i=$e(o)):i=$e(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function tt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function nt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rt(){var e=Qe;return Qe<<=1,!(Qe&62914560)&&(Qe=4194304),e}function it(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function at(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ot(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Ke(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&st(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function st(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ke(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function ct(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ke(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function lt(e,t){var n=t&-t;return n=n&42?1:ut(n),(n&(e.suspendedLanes|t))===0?n:0}function ut(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function dt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function ft(){var e=O.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function pt(e,t){var n=O.p;try{return O.p=e,t()}finally{O.p=n}}var mt=Math.random().toString(36).slice(2),ht=`__reactFiber$`+mt,gt=`__reactProps$`+mt,_t=`__reactContainer$`+mt,vt=`__reactEvents$`+mt,yt=`__reactListeners$`+mt,bt=`__reactHandles$`+mt,xt=`__reactResources$`+mt,St=`__reactMarker$`+mt;function Ct(e){delete e[ht],delete e[gt],delete e[vt],delete e[yt],delete e[bt]}function wt(e){var t=e[ht];if(t)return t;for(var n=e.parentNode;n;){if(t=n[_t]||n[ht]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[ht])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function Tt(e){if(e=e[ht]||e[_t]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Et(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Dt(e){var t=e[xt];return t||=e[xt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Ot(e){e[St]=!0}var kt=new Set,At={};function jt(e,t){Mt(e,t),Mt(e+`Capture`,t)}function Mt(e,t){for(At[e]=t,e=0;e<t.length;e++)kt.add(t[e])}var Nt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Pt={},Ft={};function It(e){return ke.call(Ft,e)?!0:ke.call(Pt,e)?!1:Nt.test(e)?Ft[e]=!0:(Pt[e]=!0,!1)}function Lt(e,t,n){if(It(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Rt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function zt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Bt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Vt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Ht(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ut(e){if(!e._valueTracker){var t=Vt(e)?`checked`:`value`;e._valueTracker=Ht(e,t,``+e[t])}}function Wt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Vt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Gt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Kt=/[\n"\\]/g;function qt(e){return e.replace(Kt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Jt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Bt(t)):e.value!==``+Bt(t)&&(e.value=``+Bt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Xt(e,o,Bt(n)):Xt(e,o,Bt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Bt(s):e.removeAttribute(`name`)}function Yt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Ut(e);return}n=n==null?``:``+Bt(n),t=t==null?n:``+Bt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Ut(e)}function Xt(e,t,n){t===`number`&&Gt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Zt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Bt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Qt(e,t,n){if(t!=null&&(t=``+Bt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Bt(n)}function $t(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(ce(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Bt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Ut(e)}function en(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var tn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function nn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||tn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function rn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&nn(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&nn(e,o,t[o])}function an(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var on=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),sn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function cn(e){return sn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function ln(){}var un=null;function dn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fn=null,pn=null;function mn(e){var t=Tt(e);if(t&&(e=t.stateNode)){var n=e[gt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Jt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+qt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[gt]||null;if(!a)throw Error(i(90));Jt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Wt(r)}break a;case`textarea`:Qt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Zt(e,!!n.multiple,t,!1)}}}var hn=!1;function gn(e,t,n){if(hn)return e(t,n);hn=!0;try{return e(t)}finally{if(hn=!1,(fn!==null||pn!==null)&&(bu(),fn&&(t=fn,e=pn,pn=fn=null,mn(t),e)))for(t=0;t<e.length;t++)mn(e[t])}}function _n(e,t){var n=e.stateNode;if(n===null)return null;var r=n[gt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var vn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),yn=!1;if(vn)try{var bn={};Object.defineProperty(bn,`passive`,{get:function(){yn=!0}}),window.addEventListener(`test`,bn,bn),window.removeEventListener(`test`,bn,bn)}catch{yn=!1}var xn=null,Sn=null,Cn=null;function wn(){if(Cn)return Cn;var e,t=Sn,n=t.length,r,i=`value`in xn?xn.value:xn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Cn=i.slice(e,1<r?1-r:void 0)}function Tn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function En(){return!0}function Dn(){return!1}function On(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?En:Dn,this.isPropagationStopped=Dn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=En)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=En)},persist:function(){},isPersistent:En}),t}var kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},An=On(kn),jn=h({},kn,{view:0,detail:0}),Mn=On(jn),Nn,Pn,Fn,In=h({},jn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Fn&&(Fn&&e.type===`mousemove`?(Nn=e.screenX-Fn.screenX,Pn=e.screenY-Fn.screenY):Pn=Nn=0,Fn=e),Nn)},movementY:function(e){return`movementY`in e?e.movementY:Pn}}),A=On(In),Ln=On(h({},In,{dataTransfer:0})),j=On(h({},jn,{relatedTarget:0})),Rn=On(h({},kn,{animationName:0,elapsedTime:0,pseudoElement:0})),zn=On(h({},kn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Bn=On(h({},kn,{data:0})),Vn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Hn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Un={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Wn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Un[e])?!!t[e]:!1}function Gn(){return Wn}var Kn=On(h({},jn,{key:function(e){if(e.key){var t=Vn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Tn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Hn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gn,charCode:function(e){return e.type===`keypress`?Tn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Tn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),qn=On(h({},In,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Jn=On(h({},jn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gn})),Yn=On(h({},kn,{propertyName:0,elapsedTime:0,pseudoElement:0})),M=On(h({},In,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Xn=On(h({},kn,{newState:0,oldState:0})),Zn=[9,13,27,32],Qn=vn&&`CompositionEvent`in window,$n=null;vn&&`documentMode`in document&&($n=document.documentMode);var er=vn&&`TextEvent`in window&&!$n,tr=vn&&(!Qn||$n&&8<$n&&11>=$n),nr=` `,rr=!1;function ir(e,t){switch(e){case`keyup`:return Zn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function ar(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var or=!1;function sr(e,t){switch(e){case`compositionend`:return ar(t);case`keypress`:return t.which===32?(rr=!0,nr):null;case`textInput`:return e=t.data,e===nr&&rr?null:e;default:return null}}function cr(e,t){if(or)return e===`compositionend`||!Qn&&ir(e,t)?(e=wn(),Cn=Sn=xn=null,or=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return tr&&t.locale!==`ko`?null:t.data;default:return null}}var lr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ur(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!lr[e.type]:t===`textarea`}function dr(e,t,n,r){fn?pn?pn.push(r):pn=[r]:fn=r,t=Ed(t,`onChange`),0<t.length&&(n=new An(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var fr=null,pr=null;function mr(e){yd(e,0)}function hr(e){if(Wt(Et(e)))return e}function gr(e,t){if(e===`change`)return t}var _r=!1;if(vn){var vr;if(vn){var yr=`oninput`in document;if(!yr){var br=document.createElement(`div`);br.setAttribute(`oninput`,`return;`),yr=typeof br.oninput==`function`}vr=yr}else vr=!1;_r=vr&&(!document.documentMode||9<document.documentMode)}function xr(){fr&&(fr.detachEvent(`onpropertychange`,Sr),pr=fr=null)}function Sr(e){if(e.propertyName===`value`&&hr(pr)){var t=[];dr(t,pr,e,dn(e)),gn(mr,t)}}function Cr(e,t,n){e===`focusin`?(xr(),fr=t,pr=n,fr.attachEvent(`onpropertychange`,Sr)):e===`focusout`&&xr()}function wr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return hr(pr)}function Tr(e,t){if(e===`click`)return hr(t)}function Er(e,t){if(e===`input`||e===`change`)return hr(t)}function Dr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Or=typeof Object.is==`function`?Object.is:Dr;function kr(e,t){if(Or(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ke.call(t,i)||!Or(e[i],t[i]))return!1}return!0}function Ar(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function jr(e,t){var n=Ar(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Ar(n)}}function Mr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Mr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Nr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Gt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Gt(e.document)}return t}function Pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Fr=vn&&`documentMode`in document&&11>=document.documentMode,Ir=null,Lr=null,Rr=null,zr=!1;function Br(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zr||Ir==null||Ir!==Gt(r)||(r=Ir,`selectionStart`in r&&Pr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Rr&&kr(Rr,r)||(Rr=r,r=Ed(Lr,`onSelect`),0<r.length&&(t=new An(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Ir)))}function Vr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Hr={animationend:Vr(`Animation`,`AnimationEnd`),animationiteration:Vr(`Animation`,`AnimationIteration`),animationstart:Vr(`Animation`,`AnimationStart`),transitionrun:Vr(`Transition`,`TransitionRun`),transitionstart:Vr(`Transition`,`TransitionStart`),transitioncancel:Vr(`Transition`,`TransitionCancel`),transitionend:Vr(`Transition`,`TransitionEnd`)},Ur={},Wr={};vn&&(Wr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Hr.animationend.animation,delete Hr.animationiteration.animation,delete Hr.animationstart.animation),`TransitionEvent`in window||delete Hr.transitionend.transition);function Gr(e){if(Ur[e])return Ur[e];if(!Hr[e])return e;var t=Hr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Wr)return Ur[e]=t[n];return e}var Kr=Gr(`animationend`),qr=Gr(`animationiteration`),Jr=Gr(`animationstart`),Yr=Gr(`transitionrun`),Xr=Gr(`transitionstart`),Zr=Gr(`transitioncancel`),Qr=Gr(`transitionend`),$r=new Map,ei=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ei.push(`scrollEnd`);function ti(e,t){$r.set(e,t),jt(t,[e])}var ni=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ri=[],ii=0,ai=0;function oi(){for(var e=ii,t=ai=ii=0;t<e;){var n=ri[t];ri[t++]=null;var r=ri[t];ri[t++]=null;var i=ri[t];ri[t++]=null;var a=ri[t];if(ri[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&ui(n,i,a)}}function si(e,t,n,r){ri[ii++]=e,ri[ii++]=t,ri[ii++]=n,ri[ii++]=r,ai|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ci(e,t,n,r){return si(e,t,n,r),di(e)}function li(e,t){return si(e,null,null,t),di(e)}function ui(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Ke(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function di(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var fi={};function pi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mi(e,t,n,r){return new pi(e,t,n,r)}function hi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function gi(e,t){var n=e.alternate;return n===null?(n=mi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function _i(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function vi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)hi(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,me.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ne:return e=mi(31,n,t,a),e.elementType=ne,e.lanes=o,e;case y:return yi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=mi(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case T:return e=mi(13,n,t,a),e.elementType=T,e.lanes=o,e;case ee:return e=mi(19,n,t,a),e.elementType=ee,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case te:s=14;break a;case E:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=mi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function yi(e,t,n,r){return e=mi(7,e,r,t),e.lanes=n,e}function bi(e,t,n){return e=mi(6,e,null,t),e.lanes=n,e}function xi(e){var t=mi(18,null,null,0);return t.stateNode=e,t}function Si(e,t,n){return t=mi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ci=new WeakMap;function wi(e,t){if(typeof e==`object`&&e){var n=Ci.get(e);return n===void 0?(t={value:e,source:t,stack:Oe(t)},Ci.set(e,t),t):n}return{value:e,source:t,stack:Oe(t)}}var Ti=[],Ei=0,Di=null,Oi=0,ki=[],Ai=0,ji=null,Mi=1,Ni=``;function Pi(e,t){Ti[Ei++]=Oi,Ti[Ei++]=Di,Di=e,Oi=t}function Fi(e,t,n){ki[Ai++]=Mi,ki[Ai++]=Ni,ki[Ai++]=ji,ji=e;var r=Mi;e=Ni;var i=32-Ke(r)-1;r&=~(1<<i),n+=1;var a=32-Ke(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Mi=1<<32-Ke(t)+i|n<<i|r,Ni=a+e}else Mi=1<<a|n<<i|r,Ni=e}function Ii(e){e.return!==null&&(Pi(e,1),Fi(e,1,0))}function Li(e){for(;e===Di;)Di=Ti[--Ei],Ti[Ei]=null,Oi=Ti[--Ei],Ti[Ei]=null;for(;e===ji;)ji=ki[--Ai],ki[Ai]=null,Ni=ki[--Ai],ki[Ai]=null,Mi=ki[--Ai],ki[Ai]=null}function Ri(e,t){ki[Ai++]=Mi,ki[Ai++]=Ni,ki[Ai++]=ji,Mi=t.id,Ni=t.overflow,ji=e}var zi=null,N=null,P=!1,Bi=null,Vi=!1,Hi=Error(i(519));function Ui(e){throw Yi(wi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Hi}function Wi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[ht]=e,t[gt]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Yt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),$t(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=ln),t=!0):t=!1,t||Ui(e,!0)}function Gi(e){for(zi=e.return;zi;)switch(zi.tag){case 5:case 31:case 13:Vi=!1;return;case 27:case 3:Vi=!0;return;default:zi=zi.return}}function Ki(e){if(e!==zi)return!1;if(!P)return Gi(e),P=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&N&&Ui(e),Gi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));N=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));N=uf(e)}else t===27?(t=N,Zd(e.type)?(e=lf,lf=null,N=e):N=t):N=zi?cf(e.stateNode.nextSibling):null;return!0}function qi(){N=zi=null,P=!1}function Ji(){var e=Bi;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),Bi=null),e}function Yi(e){Bi===null?Bi=[e]:Bi.push(e)}var Xi=fe(null),Zi=null,Qi=null;function $i(e,t,n){k(Xi,t._currentValue),t._currentValue=n}function ea(e){e._currentValue=Xi.current,pe(Xi)}function ta(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function na(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),ta(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),ta(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function ra(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Or(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===_e.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&na(t,e,n,r),t.flags|=262144}function ia(e){for(e=e.firstContext;e!==null;){if(!Or(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function aa(e){Zi=e,Qi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function oa(e){return ca(Zi,e)}function sa(e,t){return Zi===null&&aa(e),ca(e,t)}function ca(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Qi===null){if(e===null)throw Error(i(308));Qi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Qi=Qi.next=t;return n}var la=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},ua=t.unstable_scheduleCallback,da=t.unstable_NormalPriority,fa={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function pa(){return{controller:new la,data:new Map,refCount:0}}function ma(e){e.refCount--,e.refCount===0&&ua(da,function(){e.controller.abort()})}var ha=null,ga=0,_a=0,va=null;function ya(e,t){if(ha===null){var n=ha=[];ga=0,_a=dd(),va={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return ga++,t.then(ba,ba),t}function ba(){if(--ga===0&&ha!==null){va!==null&&(va.status=`fulfilled`);var e=ha;ha=null,_a=0,va=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function xa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Sa=D.S;D.S=function(e,t){eu=Pe(),typeof t==`object`&&t&&typeof t.then==`function`&&ya(e,t),Sa!==null&&Sa(e,t)};var Ca=fe(null);function wa(){var e=Ca.current;return e===null?K.pooledCache:e}function F(e,t){t===null?k(Ca,Ca.current):k(Ca,t.pool)}function Ta(){var e=wa();return e===null?null:{parent:fa._currentValue,pool:e}}var Ea=Error(i(460)),I=Error(i(474)),Da=Error(i(542)),Oa={then:function(){}};function ka(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Aa(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(ln,ln),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Pa(e),e;default:if(typeof t.status==`string`)t.then(ln,ln);else{if(e=K,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Pa(e),e}throw Ma=t,Ea}}function ja(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Ma=e,Ea):e}}var Ma=null;function Na(){if(Ma===null)throw Error(i(459));var e=Ma;return Ma=null,e}function Pa(e){if(e===Ea||e===Da)throw Error(i(483))}var Fa=null,Ia=0;function La(e){var t=Ia;return Ia+=1,Fa===null&&(Fa=[]),Aa(Fa,e,t)}function Ra(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function za(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ba(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=gi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=bi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===E&&ja(i)===t.type)?(t=a(t,n.props),Ra(t,n),t.return=e,t):(t=vi(n.type,n.key,n.props,null,e.mode,r),Ra(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Si(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=yi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=bi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=vi(t.type,t.key,t.props,null,e.mode,n),Ra(n,t),n.return=e,n;case v:return t=Si(t,e.mode,n),t.return=e,t;case E:return t=ja(t),f(e,t,n)}if(ce(t)||ae(t))return t=yi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,La(t),n);if(t.$$typeof===C)return f(e,sa(e,t),n);za(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case E:return n=ja(n),p(e,t,n,r)}if(ce(n)||ae(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,La(n),r);if(n.$$typeof===C)return p(e,t,sa(e,n),r);za(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case E:return r=ja(r),m(e,t,n,r,i)}if(ce(r)||ae(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,La(r),i);if(r.$$typeof===C)return m(e,t,n,sa(t,r),i);za(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),P&&Pi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return P&&Pi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),P&&Pi(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),P&&Pi(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return P&&Pi(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),P&&Pi(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===E&&ja(l)===r.type){n(e,r.sibling),c=a(r,o.props),Ra(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=yi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=vi(o.type,o.key,o.props,null,e.mode,c),Ra(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=Si(o,e.mode,c),c.return=e,e=c}return s(e);case E:return o=ja(o),b(e,r,o,c)}if(ce(o))return h(e,r,o,c);if(ae(o)){if(l=ae(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,La(o),c);if(o.$$typeof===C)return b(e,r,sa(e,o),c);za(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=bi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Ia=0;var i=b(e,t,n,r);return Fa=null,i}catch(t){if(t===Ea||t===Da)throw t;var a=mi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Va=Ba(!0),Ha=Ba(!1),Ua=!1;function Wa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ga(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ka(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function qa(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=di(e),ui(e,null,n),t}return si(e,r,t,n),di(e)}function Ja(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ct(e,n)}}function Ya(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Xa=!1;function Za(){if(Xa){var e=va;if(e!==null)throw e}}function Qa(e,t,n,r){Xa=!1;var i=e.updateQueue;Ua=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(J&f)===f:(r&f)===f){f!==0&&f===_a&&(Xa=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Ua=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function $a(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function eo(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)$a(n[e],t)}var to=fe(null),no=fe(0);function ro(e,t){e=Wl,k(no,e),k(to,t),Wl=e|t.baseLanes}function io(){k(no,Wl),k(to,to.current)}function ao(){Wl=no.current,pe(to),pe(no)}var oo=fe(null),so=null;function co(e){var t=e.alternate;k(mo,mo.current&1),k(oo,e),so===null&&(t===null||to.current!==null||t.memoizedState!==null)&&(so=e)}function lo(e){k(mo,mo.current),k(oo,e),so===null&&(so=e)}function uo(e){e.tag===22?(k(mo,mo.current),k(oo,e),so===null&&(so=e)):fo(e)}function fo(){k(mo,mo.current),k(oo,oo.current)}function po(e){pe(oo),so===e&&(so=null),pe(mo)}var mo=fe(0);function ho(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var go=0,L=null,R=null,_o=null,vo=!1,yo=!1,bo=!1,z=0,xo=0,B=null,So=0;function V(){throw Error(i(321))}function Co(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Or(e[n],t[n]))return!1;return!0}function wo(e,t,n,r,i,a){return go=a,L=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=e===null||e.memoizedState===null?Bs:Vs,bo=!1,a=n(r,i),bo=!1,yo&&(a=Eo(t,n,r,i)),To(e),a}function To(e){D.H=zs;var t=R!==null&&R.next!==null;if(go=0,_o=R=L=null,vo=!1,xo=0,B=null,t)throw Error(i(300));e===null||ic||(e=e.dependencies,e!==null&&ia(e)&&(ic=!0))}function Eo(e,t,n,r){L=e;var a=0;do{if(yo&&(B=null),xo=0,yo=!1,25<=a)throw Error(i(301));if(a+=1,_o=R=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}D.H=Hs,o=t(n,r)}while(yo);return o}function Do(){var e=D.H,t=e.useState()[0];return t=typeof t.then==`function`?No(t):t,e=e.useState()[0],(R===null?null:R.memoizedState)!==e&&(L.flags|=1024),t}function Oo(){var e=z!==0;return z=0,e}function ko(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Ao(e){if(vo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}vo=!1}go=0,_o=R=L=null,yo=!1,xo=z=0,B=null}function jo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _o===null?L.memoizedState=_o=e:_o=_o.next=e,_o}function H(){if(R===null){var e=L.alternate;e=e===null?null:e.memoizedState}else e=R.next;var t=_o===null?L.memoizedState:_o.next;if(t!==null)_o=t,R=e;else{if(e===null)throw L.alternate===null?Error(i(467)):Error(i(310));R=e,e={memoizedState:R.memoizedState,baseState:R.baseState,baseQueue:R.baseQueue,queue:R.queue,next:null},_o===null?L.memoizedState=_o=e:_o=_o.next=e}return _o}function Mo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function No(e){var t=xo;return xo+=1,B===null&&(B=[]),e=Aa(B,e,t),t=L,(_o===null?t.memoizedState:_o.next)===null&&(t=t.alternate,D.H=t===null||t.memoizedState===null?Bs:Vs),e}function Po(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return No(e);if(e.$$typeof===C)return oa(e)}throw Error(i(438,String(e)))}function Fo(e){var t=null,n=L.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=L.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Mo(),L.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=re;return t.index++,n}function Io(e,t){return typeof t==`function`?t(e):t}function Lo(e){return Ro(H(),R,e)}function Ro(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(go&f)===f:(J&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===_a&&(d=!0);else if((go&p)===p){u=u.next,p===_a&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,L.lanes|=p,Gl|=p;f=u.action,bo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,L.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Or(o,e.memoizedState)&&(ic=!0,d&&(n=va,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function zo(e){var t=H(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Or(o,t.memoizedState)||(ic=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Bo(e,t,n){var r=L,a=H(),o=P;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Or((R||a).memoizedState,n);if(s&&(a.memoizedState=n,ic=!0),a=a.queue,ds(Uo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||_o!==null&&_o.memoizedState.tag&1){if(r.flags|=2048,os(9,{destroy:void 0},Ho.bind(null,r,a,n,t),null),K===null)throw Error(i(349));o||go&127||Vo(r,t,n)}return n}function Vo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=L.updateQueue,t===null?(t=Mo(),L.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ho(e,t,n,r){t.value=n,t.getSnapshot=r,Wo(t)&&Go(e)}function Uo(e,t,n){return n(function(){Wo(t)&&Go(e)})}function Wo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Or(e,n)}catch{return!0}}function Go(e){var t=li(e,2);t!==null&&hu(t,e,2)}function Ko(e){var t=jo();if(typeof e==`function`){var n=e;if(e=n(),bo){Ge(!0);try{n()}finally{Ge(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:e},t}function qo(e,t,n,r){return e.baseState=n,Ro(e,R,typeof r==`function`?r:Io)}function Jo(e,t,n,r,a){if(Is(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};D.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Yo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Yo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=D.T,o={};D.T=o;try{var s=n(i,r),c=D.S;c!==null&&c(o,s),Xo(e,t,s)}catch(n){Qo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),D.T=a}}else try{a=n(i,r),Xo(e,t,a)}catch(n){Qo(e,t,n)}}function Xo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Zo(e,t,n)},function(n){return Qo(e,t,n)}):Zo(e,t,n)}function Zo(e,t,n){t.status=`fulfilled`,t.value=n,$o(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Yo(e,n)))}function Qo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,$o(t),t=t.next;while(t!==r)}e.action=null}function $o(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function es(e,t){return t}function ts(e,t){if(P){var n=K.formState;if(n!==null){a:{var r=L;if(P){if(N){b:{for(var i=N,a=Vi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){N=cf(i.nextSibling),r=i.data===`F!`;break a}}Ui(r)}r=!1}r&&(t=n[0])}}return n=jo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:es,lastRenderedState:t},n.queue=r,n=Ns.bind(null,L,r),r.dispatch=n,r=Ko(!1),a=Fs.bind(null,L,!1,r.queue),r=jo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Jo.bind(null,L,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function ns(e){return rs(H(),R,e)}function rs(e,t,n){if(t=Ro(e,t,es)[0],e=Lo(Io)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=No(t)}catch(e){throw e===Ea?Da:e}else r=t;t=H();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(L.flags|=2048,os(9,{destroy:void 0},is.bind(null,i,n),null)),[r,a,e]}function is(e,t){e.action=t}function as(e){var t=H(),n=R;if(n!==null)return rs(t,n,e);H(),t=t.memoizedState,n=H();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function os(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=L.updateQueue,t===null&&(t=Mo(),L.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ss(){return H().memoizedState}function cs(e,t,n,r){var i=jo();L.flags|=e,i.memoizedState=os(1|t,{destroy:void 0},n,r===void 0?null:r)}function ls(e,t,n,r){var i=H();r=r===void 0?null:r;var a=i.memoizedState.inst;R!==null&&r!==null&&Co(r,R.memoizedState.deps)?i.memoizedState=os(t,a,n,r):(L.flags|=e,i.memoizedState=os(1|t,a,n,r))}function us(e,t){cs(8390656,8,e,t)}function ds(e,t){ls(2048,8,e,t)}function fs(e){L.flags|=4;var t=L.updateQueue;if(t===null)t=Mo(),L.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ps(e){var t=H().memoizedState;return fs({ref:t,nextImpl:e}),function(){if(G&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function ms(e,t){return ls(4,2,e,t)}function hs(e,t){return ls(4,4,e,t)}function gs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function _s(e,t,n){n=n==null?null:n.concat([e]),ls(4,4,gs.bind(null,t,e),n)}function vs(){}function ys(e,t){var n=H();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Co(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function bs(e,t){var n=H();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Co(t,r[1]))return r[0];if(r=e(),bo){Ge(!0);try{e()}finally{Ge(!1)}}return n.memoizedState=[r,t],r}function xs(e,t,n){return n===void 0||go&1073741824&&!(J&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),L.lanes|=e,Gl|=e,n)}function Ss(e,t,n,r){return Or(n,t)?n:to.current===null?!(go&42)||go&1073741824&&!(J&261930)?(ic=!0,e.memoizedState=n):(e=mu(),L.lanes|=e,Gl|=e,t):(e=xs(e,n,r),Or(e,t)||(ic=!0),e)}function Cs(e,t,n,r,i){var a=O.p;O.p=a!==0&&8>a?a:8;var o=D.T,s={};D.T=s,Fs(e,!1,t,n);try{var c=i(),l=D.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ps(e,t,xa(c,r),pu(e)):Ps(e,t,r,pu(e))}catch(n){Ps(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{O.p=a,o!==null&&s.types!==null&&(o.types=s.types),D.T=o}}function ws(){}function Ts(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Es(e).queue;Cs(e,a,t,le,n===null?ws:function(){return Ds(e),n(r)})}function Es(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:le,baseState:le,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:le},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ds(e){var t=Es(e);t.next===null&&(t=e.alternate.memoizedState),Ps(e,t.next.queue,{},pu())}function Os(){return oa(Qf)}function ks(){return H().memoizedState}function As(){return H().memoizedState}function js(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Ka(n);var r=qa(t,e,n);r!==null&&(hu(r,t,n),Ja(r,t,n)),t={cache:pa()},e.payload=t;return}t=t.return}}function Ms(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Is(e)?Ls(t,n):(n=ci(e,t,n,r),n!==null&&(hu(n,e,r),Rs(n,t,r)))}function Ns(e,t,n){Ps(e,t,n,pu())}function Ps(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Is(e))Ls(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Or(s,o))return si(e,t,i,0),K===null&&oi(),!1}catch{}if(n=ci(e,t,i,r),n!==null)return hu(n,e,r),Rs(n,t,r),!0}return!1}function Fs(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Is(e)){if(t)throw Error(i(479))}else t=ci(e,n,r,2),t!==null&&hu(t,e,2)}function Is(e){var t=e.alternate;return e===L||t!==null&&t===L}function Ls(e,t){yo=vo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Rs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ct(e,n)}}var zs={readContext:oa,use:Po,useCallback:V,useContext:V,useEffect:V,useImperativeHandle:V,useLayoutEffect:V,useInsertionEffect:V,useMemo:V,useReducer:V,useRef:V,useState:V,useDebugValue:V,useDeferredValue:V,useTransition:V,useSyncExternalStore:V,useId:V,useHostTransitionStatus:V,useFormState:V,useActionState:V,useOptimistic:V,useMemoCache:V,useCacheRefresh:V};zs.useEffectEvent=V;var Bs={readContext:oa,use:Po,useCallback:function(e,t){return jo().memoizedState=[e,t===void 0?null:t],e},useContext:oa,useEffect:us,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),cs(4194308,4,gs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return cs(4194308,4,e,t)},useInsertionEffect:function(e,t){cs(4,2,e,t)},useMemo:function(e,t){var n=jo();t=t===void 0?null:t;var r=e();if(bo){Ge(!0);try{e()}finally{Ge(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=jo();if(n!==void 0){var i=n(t);if(bo){Ge(!0);try{n(t)}finally{Ge(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Ms.bind(null,L,e),[r.memoizedState,e]},useRef:function(e){var t=jo();return e={current:e},t.memoizedState=e},useState:function(e){e=Ko(e);var t=e.queue,n=Ns.bind(null,L,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:vs,useDeferredValue:function(e,t){return xs(jo(),e,t)},useTransition:function(){var e=Ko(!1);return e=Cs.bind(null,L,e.queue,!0,!1),jo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=L,a=jo();if(P){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),K===null)throw Error(i(349));J&127||Vo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,us(Uo.bind(null,r,o,e),[e]),r.flags|=2048,os(9,{destroy:void 0},Ho.bind(null,r,o,n,t),null),n},useId:function(){var e=jo(),t=K.identifierPrefix;if(P){var n=Ni,r=Mi;n=(r&~(1<<32-Ke(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=z++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=So++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Os,useFormState:ts,useActionState:ts,useOptimistic:function(e){var t=jo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Fs.bind(null,L,!0,n),n.dispatch=t,[e,t]},useMemoCache:Fo,useCacheRefresh:function(){return jo().memoizedState=js.bind(null,L)},useEffectEvent:function(e){var t=jo(),n={impl:e};return t.memoizedState=n,function(){if(G&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Vs={readContext:oa,use:Po,useCallback:ys,useContext:oa,useEffect:ds,useImperativeHandle:_s,useInsertionEffect:ms,useLayoutEffect:hs,useMemo:bs,useReducer:Lo,useRef:ss,useState:function(){return Lo(Io)},useDebugValue:vs,useDeferredValue:function(e,t){return Ss(H(),R.memoizedState,e,t)},useTransition:function(){var e=Lo(Io)[0],t=H().memoizedState;return[typeof e==`boolean`?e:No(e),t]},useSyncExternalStore:Bo,useId:ks,useHostTransitionStatus:Os,useFormState:ns,useActionState:ns,useOptimistic:function(e,t){return qo(H(),R,e,t)},useMemoCache:Fo,useCacheRefresh:As};Vs.useEffectEvent=ps;var Hs={readContext:oa,use:Po,useCallback:ys,useContext:oa,useEffect:ds,useImperativeHandle:_s,useInsertionEffect:ms,useLayoutEffect:hs,useMemo:bs,useReducer:zo,useRef:ss,useState:function(){return zo(Io)},useDebugValue:vs,useDeferredValue:function(e,t){var n=H();return R===null?xs(n,e,t):Ss(n,R.memoizedState,e,t)},useTransition:function(){var e=zo(Io)[0],t=H().memoizedState;return[typeof e==`boolean`?e:No(e),t]},useSyncExternalStore:Bo,useId:ks,useHostTransitionStatus:Os,useFormState:as,useActionState:as,useOptimistic:function(e,t){var n=H();return R===null?(n.baseState=e,[e,n.queue.dispatch]):qo(n,R,e,t)},useMemoCache:Fo,useCacheRefresh:As};Hs.useEffectEvent=ps;function Us(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ws={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ka(r);i.payload=t,n!=null&&(i.callback=n),t=qa(e,i,r),t!==null&&(hu(t,e,r),Ja(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ka(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=qa(e,i,r),t!==null&&(hu(t,e,r),Ja(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Ka(n);r.tag=2,t!=null&&(r.callback=t),t=qa(e,r,n),t!==null&&(hu(t,e,n),Ja(t,e,n))}};function Gs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!kr(n,r)||!kr(i,a):!0}function Ks(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ws.enqueueReplaceState(t,t.state,null)}function qs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Js(e){ni(e)}function Ys(e){console.error(e)}function Xs(e){ni(e)}function Zs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Qs(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function $s(e,t,n){return n=Ka(n),n.tag=3,n.payload={element:null},n.callback=function(){Zs(e,t)},n}function ec(e){return e=Ka(e),e.tag=3,e}function tc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Qs(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Qs(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function nc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&ra(t,n,a,!0),n=oo.current,n!==null){switch(n.tag){case 31:case 13:return so===null?Du():n.alternate===null&&X===0&&(X=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Oa?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===Oa?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(P)return t=oo.current,t===null?(r!==Hi&&(t=Error(i(423),{cause:r}),Yi(wi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=wi(r,n),a=$s(e.stateNode,r,a),Ya(e,a),X!==4&&(X=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Hi&&(e=Error(i(422),{cause:r}),Yi(wi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=wi(o,n),Xl===null?Xl=[o]:Xl.push(o),X!==4&&(X=2),t===null)return!0;r=wi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=$s(n.stateNode,r,e),Ya(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ru===null||!ru.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=ec(a),tc(a,e,n,r),Ya(n,a),!1}n=n.return}while(n!==null);return!1}var rc=Error(i(461)),ic=!1;function ac(e,t,n,r){t.child=e===null?Ha(t,null,n,r):Va(t,e.child,n,r)}function oc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return aa(t),r=wo(e,t,n,o,a,i),s=Oo(),e!==null&&!ic?(ko(e,t,i),Ac(e,t,i)):(P&&s&&Ii(t),t.flags|=1,ac(e,t,r,i),t.child)}function sc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!hi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,cc(e,t,a,r,i)):(e=vi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!jc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?kr:n,n(o,r)&&e.ref===t.ref)return Ac(e,t,i)}return t.flags|=1,e=gi(a,r),e.ref=t.ref,e.return=t,t.child=e}function cc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(kr(a,r)&&e.ref===t.ref)if(ic=!1,t.pendingProps=r=a,jc(e,i))e.flags&131072&&(ic=!0);else return t.lanes=e.lanes,Ac(e,t,i)}return gc(e,t,n,r,i)}function lc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return dc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&F(t,a===null?null:a.cachePool),a===null?io():ro(t,a),uo(t);else return r=t.lanes=536870912,dc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&F(t,null),io(),fo(t)):(F(t,a.cachePool),ro(t,a),fo(t),t.memoizedState=null);return ac(e,t,i,n),t.child}function uc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function dc(e,t,n,r,i){var a=wa();return a=a===null?null:{parent:fa._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&F(t,null),io(),uo(t),e!==null&&ra(e,t,r,!0),t.childLanes=i,null}function fc(e,t){return t=Tc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function pc(e,t,n){return Va(t,e.child,null,n),e=fc(t,t.pendingProps),e.flags|=2,po(t),t.memoizedState=null,e}function mc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(P){if(r.mode===`hidden`)return e=fc(t,r),t.lanes=536870912,uc(null,e);if(lo(t),(e=N)?(e=rf(e,Vi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ji===null?null:{id:Mi,overflow:Ni},retryLane:536870912,hydrationErrors:null},n=xi(e),n.return=t,t.child=n,zi=t,N=null)):e=null,e===null)throw Ui(t);return t.lanes=536870912,null}return fc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(lo(t),a)if(t.flags&256)t.flags&=-257,t=pc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(ic||ra(e,t,n,!1),a=(n&e.childLanes)!==0,ic||a){if(r=K,r!==null&&(s=lt(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,li(e,s),hu(r,e,s),rc;Du(),t=pc(e,t,n)}else e=o.treeContext,N=cf(s.nextSibling),zi=t,P=!0,Bi=null,Vi=!1,e!==null&&Ri(t,e),t=fc(t,r),t.flags|=4096;return t}return e=gi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function hc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function gc(e,t,n,r,i){return aa(t),n=wo(e,t,n,r,void 0,i),r=Oo(),e!==null&&!ic?(ko(e,t,i),Ac(e,t,i)):(P&&r&&Ii(t),t.flags|=1,ac(e,t,n,i),t.child)}function _c(e,t,n,r,i,a){return aa(t),t.updateQueue=null,n=Eo(t,r,n,i),To(e),r=Oo(),e!==null&&!ic?(ko(e,t,a),Ac(e,t,a)):(P&&r&&Ii(t),t.flags|=1,ac(e,t,n,a),t.child)}function vc(e,t,n,r,i){if(aa(t),t.stateNode===null){var a=fi,o=n.contextType;typeof o==`object`&&o&&(a=oa(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Ws,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Wa(t),o=n.contextType,a.context=typeof o==`object`&&o?oa(o):fi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Us(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Ws.enqueueReplaceState(a,a.state,null),Qa(t,r,a,i),Za(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=qs(n,s);a.props=c;var l=a.context,u=n.contextType;o=fi,typeof u==`object`&&u&&(o=oa(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Ks(t,a,r,o),Ua=!1;var f=t.memoizedState;a.state=f,Qa(t,r,a,i),Za(),l=t.memoizedState,s||f!==l||Ua?(typeof d==`function`&&(Us(t,n,d,r),l=t.memoizedState),(c=Ua||Gs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ga(e,t),o=t.memoizedProps,u=qs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=fi,typeof l==`object`&&l&&(c=oa(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Ks(t,a,r,c),Ua=!1,f=t.memoizedState,a.state=f,Qa(t,r,a,i),Za();var p=t.memoizedState;o!==d||f!==p||Ua||e!==null&&e.dependencies!==null&&ia(e.dependencies)?(typeof s==`function`&&(Us(t,n,s,r),p=t.memoizedState),(u=Ua||Gs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&ia(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,hc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Va(t,e.child,null,i),t.child=Va(t,null,n,i)):ac(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Ac(e,t,i),e}function yc(e,t,n,r){return qi(),t.flags|=256,ac(e,t,n,r),t.child}var bc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xc(e){return{baseLanes:e,cachePool:Ta()}}function Sc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function Cc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(mo.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(P){if(a?co(t):fo(t),(e=N)?(e=rf(e,Vi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ji===null?null:{id:Mi,overflow:Ni},retryLane:536870912,hydrationErrors:null},n=xi(e),n.return=t,t.child=n,zi=t,N=null)):e=null,e===null)throw Ui(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(fo(t),a=t.mode,c=Tc({mode:`hidden`,children:c},a),r=yi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=xc(n),r.childLanes=Sc(e,s,n),t.memoizedState=bc,uc(null,r)):(co(t),wc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(co(t),t.flags&=-257,t=Ec(e,t,n)):t.memoizedState===null?(fo(t),c=r.fallback,a=t.mode,r=Tc({mode:`visible`,children:r.children},a),c=yi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Va(t,e.child,null,n),r=t.child,r.memoizedState=xc(n),r.childLanes=Sc(e,s,n),t.memoizedState=bc,t=uc(null,r)):(fo(t),t.child=e.child,t.flags|=128,t=null);else if(co(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Yi({value:r,source:null,stack:null}),t=Ec(e,t,n)}else if(ic||ra(e,t,n,!1),s=(n&e.childLanes)!==0,ic||s){if(s=K,s!==null&&(r=lt(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,li(e,r),hu(s,e,r),rc;af(c)||Du(),t=Ec(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,N=cf(c.nextSibling),zi=t,P=!0,Bi=null,Vi=!1,e!==null&&Ri(t,e),t=wc(t,r.children),t.flags|=4096);return t}return a?(fo(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=gi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=yi(c,a,n,null),c.flags|=2):c=gi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,uc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=xc(n):(a=c.cachePool,a===null?a=Ta():(l=fa._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=Sc(e,s,n),t.memoizedState=bc,uc(e.child,r)):(co(t),n=e.child,e=n.sibling,n=gi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function wc(e,t){return t=Tc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Tc(e,t){return e=mi(22,e,null,t),e.lanes=0,e}function Ec(e,t,n){return Va(t,e.child,null,n),e=wc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Dc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ta(e.return,t,n)}function Oc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function kc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=mo.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,k(mo,o),ac(e,t,r,n),r=P?Oi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Dc(e,n,t);else if(e.tag===19)Dc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ho(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Oc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ho(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Oc(t,!0,n,null,a,r);break;case`together`:Oc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Ac(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ra(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=gi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=gi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function jc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&ia(e))):!0}function Mc(e,t,n){switch(t.tag){case 3:ve(t,t.stateNode.containerInfo),$i(t,fa,e.memoizedState.cache),qi();break;case 27:case 5:be(t);break;case 4:ve(t,t.stateNode.containerInfo);break;case 10:$i(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,lo(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(co(t),e=Ac(e,t,n),e===null?null:e.sibling):Cc(e,t,n):(co(t),t.flags|=128,null);co(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(ra(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return kc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),k(mo,mo.current),r)break;return null;case 22:return t.lanes=0,lc(e,t,n,t.pendingProps);case 24:$i(t,fa,e.memoizedState.cache)}return Ac(e,t,n)}function Nc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)ic=!0;else{if(!jc(e,n)&&!(t.flags&128))return ic=!1,Mc(e,t,n);ic=!!(e.flags&131072)}else ic=!1,P&&t.flags&1048576&&Fi(t,Oi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=ja(t.elementType),t.type=e,typeof e==`function`)hi(e)?(r=qs(e,r),t.tag=1,t=vc(null,t,e,r,n)):(t.tag=0,t=gc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=oc(null,t,e,r,n);break a}else if(a===te){t.tag=14,t=sc(null,t,e,r,n);break a}}throw t=se(e)||e,Error(i(306,t,``))}}return t;case 0:return gc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=qs(r,t.pendingProps),vc(e,t,r,a,n);case 3:a:{if(ve(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Ga(e,t),Qa(t,r,null,n);var s=t.memoizedState;if(r=s.cache,$i(t,fa,r),r!==o.cache&&na(t,[fa],n,!0),Za(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=yc(e,t,r,n);break a}else if(r!==a){a=wi(Error(i(424)),t),Yi(a),t=yc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(N=cf(e.firstChild),zi=t,P=!0,Bi=null,Vi=!0,n=Ha(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(qi(),r===a){t=Ac(e,t,n);break a}ac(e,t,r,n)}t=t.child}return t;case 26:return hc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:P||(n=t.type,e=t.pendingProps,r=Bd(ge.current).createElement(n),r[ht]=t,r[gt]=e,Pd(r,n,e),Ot(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return be(t),e===null&&P&&(r=t.stateNode=ff(t.type,t.pendingProps,ge.current),zi=t,Vi=!0,a=N,Zd(t.type)?(lf=a,N=cf(r.firstChild)):N=a),ac(e,t,t.pendingProps.children,n),hc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&P&&((a=r=N)&&(r=tf(r,t.type,t.pendingProps,Vi),r===null?a=!1:(t.stateNode=r,zi=t,N=cf(r.firstChild),Vi=!1,a=!0)),a||Ui(t)),be(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=wo(e,t,Do,null,null,n),Qf._currentValue=a),hc(e,t),ac(e,t,r,n),t.child;case 6:return e===null&&P&&((e=n=N)&&(n=nf(n,t.pendingProps,Vi),n===null?e=!1:(t.stateNode=n,zi=t,N=null,e=!0)),e||Ui(t)),null;case 13:return Cc(e,t,n);case 4:return ve(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Va(t,null,r,n):ac(e,t,r,n),t.child;case 11:return oc(e,t,t.type,t.pendingProps,n);case 7:return ac(e,t,t.pendingProps,n),t.child;case 8:return ac(e,t,t.pendingProps.children,n),t.child;case 12:return ac(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,$i(t,t.type,r.value),ac(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,aa(t),a=oa(a),r=r(a),t.flags|=1,ac(e,t,r,n),t.child;case 14:return sc(e,t,t.type,t.pendingProps,n);case 15:return cc(e,t,t.type,t.pendingProps,n);case 19:return kc(e,t,n);case 31:return mc(e,t,n);case 22:return lc(e,t,n,t.pendingProps);case 24:return aa(t),r=oa(fa),e===null?(a=wa(),a===null&&(a=K,o=pa(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Wa(t),$i(t,fa,a)):((e.lanes&n)!==0&&(Ga(e,t),Qa(t,null,null,n),Za()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,$i(t,fa,r),r!==a.cache&&na(t,[fa],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),$i(t,fa,r))),ac(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Pc(e){e.flags|=4}function Fc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Ma=Oa,I}else e.flags&=-16777217}function Ic(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw Ma=Oa,I}function Lc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:rt(),e.lanes|=t,Yl|=t)}function Rc(e,t){if(!P)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function U(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function zc(e,t,n){var r=t.pendingProps;switch(Li(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return U(t),null;case 1:return U(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ea(fa),ye(),n.pendingContext&&=(n.context=n.pendingContext,null),(e===null||e.child===null)&&(Ki(t)?Pc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ji())),U(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Pc(t),o===null?(U(t),Fc(t,a,null,r,n)):(U(t),Ic(t,o))):o?o===e.memoizedState?(U(t),t.flags&=-16777217):(Pc(t),U(t),Ic(t,o)):(e=e.memoizedProps,e!==r&&Pc(t),U(t),Fc(t,a,e,r,n)),null;case 27:if(xe(t),n=ge.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return U(t),null}e=me.current,Ki(t)?Wi(t,e):(e=ff(a,r,n),t.stateNode=e,Pc(t))}return U(t),null;case 5:if(xe(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return U(t),null}if(o=me.current,Ki(t))Wi(t,o);else{var s=Bd(ge.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[ht]=t,o[gt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Pc(t)}}return U(t),Fc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=ge.current,Ki(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=zi,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[ht]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Ui(t,!0)}else e=Bd(e).createTextNode(r),e[ht]=t,t.stateNode=e}return U(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Ki(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[ht]=t}else qi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;U(t),e=!1}else n=Ji(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(po(t),t):(po(t),null);if(t.flags&128)throw Error(i(558))}return U(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Ki(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[ht]=t}else qi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;U(t),a=!1}else a=Ji(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(po(t),t):(po(t),null)}return po(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Lc(t,t.updateQueue),U(t),null);case 4:return ye(),e===null&&Sd(t.stateNode.containerInfo),U(t),null;case 10:return ea(t.type),U(t),null;case 19:if(pe(mo),r=t.memoizedState,r===null)return U(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Rc(r,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=ho(e),o!==null){for(t.flags|=128,Rc(r,!1),e=o.updateQueue,t.updateQueue=e,Lc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)_i(n,e),n=n.sibling;return k(mo,mo.current&1|2),P&&Pi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Pe()>tu&&(t.flags|=128,a=!0,Rc(r,!1),t.lanes=4194304)}else{if(!a)if(e=ho(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Lc(t,e),Rc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!P)return U(t),null}else 2*Pe()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,a=!0,Rc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(U(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Pe(),e.sibling=null,n=mo.current,k(mo,a?n&1|2:n&1),P&&Pi(t,r.treeForkCount),e);case 22:case 23:return po(t),ao(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(U(t),t.subtreeFlags&6&&(t.flags|=8192)):U(t),n=t.updateQueue,n!==null&&Lc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&pe(Ca),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ea(fa),U(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Bc(e,t){switch(Li(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ea(fa),ye(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return xe(t),null;case 31:if(t.memoizedState!==null){if(po(t),t.alternate===null)throw Error(i(340));qi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(po(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));qi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return pe(mo),null;case 4:return ye(),null;case 10:return ea(t.type),null;case 22:case 23:return po(t),ao(),e!==null&&pe(Ca),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ea(fa),null;case 25:return null;default:return null}}function Vc(e,t){switch(Li(t),t.tag){case 3:ea(fa),ye();break;case 26:case 27:case 5:xe(t);break;case 4:ye();break;case 31:t.memoizedState!==null&&po(t);break;case 13:po(t);break;case 19:pe(mo);break;case 10:ea(t.type);break;case 22:case 23:po(t),ao(),e!==null&&pe(Ca);break;case 24:ea(fa)}}function Hc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Uc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Wc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{eo(t,n)}catch(t){Z(e,e.return,t)}}}function Gc(e,t,n){n.props=qs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Kc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function qc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function Jc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Yc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[gt]=t}catch(t){Z(e,e.return,t)}}function Xc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Zc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Xc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ln));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Qc(e,t,n),e=e.sibling;e!==null;)Qc(e,t,n),e=e.sibling}function $c(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for($c(e,t,n),e=e.sibling;e!==null;)$c(e,t,n),e=e.sibling}function el(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[ht]=e,t[gt]=n}catch(t){Z(e,e.return,t)}}var tl=!1,nl=!1,rl=!1,il=typeof WeakSet==`function`?WeakSet:Set,al=null;function ol(e,t){if(e=e.containerInfo,Rd=sp,e=Nr(e),Pr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,al=t;al!==null;)if(t=al,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,al=e;else for(;al!==null;){switch(t=al,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=qs(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,al=e;break}al=t.return}}function sl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:xl(e,n),r&4&&Hc(5,n);break;case 1:if(xl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=qs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&Wc(n),r&512&&Kc(n,n.return);break;case 3:if(xl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{eo(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&el(n);case 26:case 5:xl(e,n),t===null&&r&4&&Jc(n),r&512&&Kc(n,n.return);break;case 12:xl(e,n);break;case 31:xl(e,n),r&4&&fl(e,n);break;case 13:xl(e,n),r&4&&pl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||tl,!r){t=t!==null&&t.memoizedState!==null||nl,i=tl;var a=nl;tl=r,(nl=t)&&!a?Cl(e,n,(n.subtreeFlags&8772)!=0):xl(e,n),tl=i,nl=a}break;case 30:break;default:xl(e,n)}}function cl(e){var t=e.alternate;t!==null&&(e.alternate=null,cl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ct(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var W=null,ll=!1;function ul(e,t,n){for(n=n.child;n!==null;)dl(e,t,n),n=n.sibling}function dl(e,t,n){if(We&&typeof We.onCommitFiberUnmount==`function`)try{We.onCommitFiberUnmount(Ue,n)}catch{}switch(n.tag){case 26:nl||qc(n,t),ul(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:nl||qc(n,t);var r=W,i=ll;Zd(n.type)&&(W=n.stateNode,ll=!1),ul(e,t,n),pf(n.stateNode),W=r,ll=i;break;case 5:nl||qc(n,t);case 6:if(r=W,i=ll,W=null,ul(e,t,n),W=r,ll=i,W!==null)if(ll)try{(W.nodeType===9?W.body:W.nodeName===`HTML`?W.ownerDocument.body:W).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{W.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:W!==null&&(ll?(e=W,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(W,n.stateNode));break;case 4:r=W,i=ll,W=n.stateNode.containerInfo,ll=!0,ul(e,t,n),W=r,ll=i;break;case 0:case 11:case 14:case 15:Uc(2,n,t),nl||Uc(4,n,t),ul(e,t,n);break;case 1:nl||(qc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Gc(n,t,r)),ul(e,t,n);break;case 21:ul(e,t,n);break;case 22:nl=(r=nl)||n.memoizedState!==null,ul(e,t,n),nl=r;break;default:ul(e,t,n)}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function ml(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new il),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new il),t;default:throw Error(i(435,e.tag))}}function hl(e,t){var n=ml(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function gl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){W=c.stateNode,ll=!1;break a}break;case 5:W=c.stateNode,ll=!1;break a;case 3:case 4:W=c.stateNode.containerInfo,ll=!0;break a}c=c.return}if(W===null)throw Error(i(160));dl(o,s,a),W=null,ll=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)vl(t,e),t=t.sibling}var _l=null;function vl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:gl(t,e),yl(e),r&4&&(Uc(3,e,e.return),Hc(3,e),Uc(5,e,e.return));break;case 1:gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),r&64&&tl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=_l;if(gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[St]||o[ht]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[ht]=e,Ot(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[ht]=e,Ot(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Yc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),n!==null&&r&4&&Yc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),e.flags&32){a=e.stateNode;try{en(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Yc(e,a,n===null?a:n.memoizedProps)),r&1024&&(rl=!0);break;case 6:if(gl(t,e),yl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=_l,_l=gf(t.containerInfo),gl(t,e),_l=a,yl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}rl&&(rl=!1,bl(e));break;case 4:r=_l,_l=gf(e.stateNode.containerInfo),gl(t,e),yl(e),_l=r;break;case 12:gl(t,e),yl(e);break;case 31:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 13:gl(t,e),yl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=Pe()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=tl,d=nl;if(tl=u||a,nl=d||l,gl(t,e),nl=d,tl=u,yl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||tl||nl||Sl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,hl(e,n))));break;case 19:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 30:break;case 21:break;default:gl(t,e),yl(e)}}function yl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Xc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;$c(e,Zc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(en(o,``),n.flags&=-33),$c(e,Zc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Qc(e,Zc(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;bl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function xl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)sl(e,t.alternate,t),t=t.sibling}function Sl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Uc(4,t,t.return),Sl(t);break;case 1:qc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Gc(t,t.return,n),Sl(t);break;case 27:pf(t.stateNode);case 26:case 5:qc(t,t.return),Sl(t);break;case 22:t.memoizedState===null&&Sl(t);break;case 30:Sl(t);break;default:Sl(t)}e=e.sibling}}function Cl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Cl(i,a,n),Hc(4,a);break;case 1:if(Cl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)$a(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Wc(a),Kc(a,a.return);break;case 27:el(a);case 26:case 5:Cl(i,a,n),n&&r===null&&o&4&&Jc(a),Kc(a,a.return);break;case 12:Cl(i,a,n);break;case 31:Cl(i,a,n),n&&o&4&&fl(i,a);break;case 13:Cl(i,a,n),n&&o&4&&pl(i,a);break;case 22:a.memoizedState===null&&Cl(i,a,n),Kc(a,a.return);break;case 30:break;default:Cl(i,a,n)}t=t.sibling}}function wl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ma(n))}function Tl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ma(e))}function El(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Dl(e,t,n,r),t=t.sibling}function Dl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:El(e,t,n,r),i&2048&&Hc(9,t);break;case 1:El(e,t,n,r);break;case 3:El(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ma(e)));break;case 12:if(i&2048){El(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else El(e,t,n,r);break;case 31:El(e,t,n,r);break;case 13:El(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?El(e,t,n,r):(a._visibility|=2,Ol(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?El(e,t,n,r):kl(e,t),i&2048&&wl(o,t);break;case 24:El(e,t,n,r),i&2048&&Tl(t.alternate,t);break;default:El(e,t,n,r)}}function Ol(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Ol(a,o,s,c,i),Hc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Ol(a,o,s,c,i)):u._visibility&2?Ol(a,o,s,c,i):kl(a,o),i&&l&2048&&wl(o.alternate,o);break;case 24:Ol(a,o,s,c,i),i&&l&2048&&Tl(o.alternate,o);break;default:Ol(a,o,s,c,i)}t=t.sibling}}function kl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:kl(n,r),i&2048&&wl(r.alternate,r);break;case 24:kl(n,r),i&2048&&Tl(r.alternate,r);break;default:kl(n,r)}t=t.sibling}}var Al=8192;function jl(e,t,n){if(e.subtreeFlags&Al)for(e=e.child;e!==null;)Ml(e,t,n),e=e.sibling}function Ml(e,t,n){switch(e.tag){case 26:jl(e,t,n),e.flags&Al&&e.memoizedState!==null&&Gf(n,_l,e.memoizedState,e.memoizedProps);break;case 5:jl(e,t,n);break;case 3:case 4:var r=_l;_l=gf(e.stateNode.containerInfo),jl(e,t,n),_l=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Al,Al=16777216,jl(e,t,n),Al=r):jl(e,t,n));break;default:jl(e,t,n)}}function Nl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Pl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Fl(e),e=e.sibling}function Fl(e){switch(e.tag){case 0:case 11:case 15:Pl(e),e.flags&2048&&Uc(9,e,e.return);break;case 3:Pl(e);break;case 12:Pl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Il(e)):Pl(e);break;default:Pl(e)}}function Il(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Uc(8,t,t.return),Il(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Il(t));break;default:Il(t)}e=e.sibling}}function Ll(e,t){for(;al!==null;){var n=al;switch(n.tag){case 0:case 11:case 15:Uc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ma(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,al=r;else a:for(n=e;al!==null;){r=al;var i=r.sibling,a=r.return;if(cl(r),r===n){al=null;break a}if(i!==null){i.return=a,al=i;break a}al=a}}}var Rl={getCacheForType:function(e){var t=oa(fa),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return oa(fa).controller.signal}},zl=typeof WeakMap==`function`?WeakMap:Map,G=0,K=null,q=null,J=0,Y=0,Bl=null,Vl=!1,Hl=!1,Ul=!1,Wl=0,X=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return G&2&&J!==0?J&-J:D.T===null?ft():dd()}function mu(){if(Jl===0)if(!(J&536870912)||P){var e=Ze;Ze<<=1,!(Ze&3932160)&&(Ze=262144),Jl=e}else Jl=536870912;return e=oo.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===K&&(Y===2||Y===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,J,Jl,!1)),at(e,n),(!(G&2)||e!==K)&&(e===K&&(!(G&2)&&(Kl|=n),X===4&&yu(e,J,Jl,!1)),rd(e))}function gu(e,t,n){if(G&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||tt(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Hl&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Ul&&!l){c.errorRecoveryDisabledLanes|=o,Kl|=o,a=4;break a}o=Zl,Zl=a,o!==null&&(Zl===null?Zl=o:Zl.push.apply(Zl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Vl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=$l+300-Pe(),10<a)){if(yu(r,t,Jl,!Vl),et(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,o,`Throttled`,-0,0),a);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,o,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ln},Ml(t,a,d);var m=(a&62914560)===a?$l-Pe():(a&4194048)===a?eu-Pe():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Or(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Ke(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&st(e,n,t)}function bu(){return G&6?!0:(id(0,!1),!1)}function xu(){if(q!==null){if(Y===0)var e=q.return;else e=q,Qi=Zi=null,Ao(e),Fa=null,Ia=0,e=q;for(;e!==null;)Vc(e.alternate,e),e=e.return;q=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),K=e,q=n=gi(e.current,null),J=t,Y=0,Bl=null,Vl=!1,Hl=tt(e,t),Ul=!1,Yl=Jl=ql=Kl=Gl=X=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Ke(r),a=1<<i;t|=e[i],r&=~a}return Wl=t,oi(),n}function Cu(e,t){L=null,D.H=zs,t===Ea||t===Da?(t=Na(),Y=3):t===I?(t=Na(),Y=4):Y=t===rc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Bl=t,q===null&&(X=1,Zs(e,wi(t,e.current)))}function wu(){var e=oo.current;return e===null?!0:(J&4194048)===J?so===null:(J&62914560)===J||J&536870912?e===so:!1}function Tu(){var e=D.H;return D.H=zs,e===null?zs:e}function Eu(){var e=D.A;return D.A=Rl,e}function Du(){X=4,Vl||(J&4194048)!==J&&oo.current!==null||(Hl=!0),!(Gl&134217727)&&!(Kl&134217727)||K===null||yu(K,J,Jl,!1)}function Ou(e,t,n){var r=G;G|=2;var i=Tu(),a=Eu();(K!==e||J!==t)&&(nu=null,Su(e,t)),t=!1;var o=X;a:do try{if(Y!==0&&q!==null){var s=q,c=Bl;switch(Y){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:oo.current===null&&(t=!0);var l=Y;if(Y=0,Bl=null,Pu(e,s,c,l),n&&Hl){o=0;break a}break;default:l=Y,Y=0,Bl=null,Pu(e,s,c,l)}}ku(),o=X;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,Qi=Zi=null,G=r,D.H=i,D.A=a,q===null&&(K=null,J=0,oi()),o}function ku(){for(;q!==null;)Mu(q)}function Au(e,t){var n=G;G|=2;var r=Tu(),a=Eu();K!==e||J!==t?(nu=null,tu=Pe()+500,Su(e,t)):Hl=tt(e,t);a:do try{if(Y!==0&&q!==null){t=q;var o=Bl;b:switch(Y){case 1:Y=0,Bl=null,Pu(e,t,o,1);break;case 2:case 9:if(ka(o)){Y=0,Bl=null,Nu(t);break}t=function(){Y!==2&&Y!==9||K!==e||(Y=7),rd(e)},o.then(t,t);break a;case 3:Y=7;break a;case 4:Y=5;break a;case 7:ka(o)?(Y=0,Bl=null,Nu(t)):(Y=0,Bl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(q.tag){case 26:s=q.memoizedState;case 5:case 27:var c=q;if(s?Wf(s):c.stateNode.complete){Y=0,Bl=null;var l=c.sibling;if(l!==null)q=l;else{var u=c.return;u===null?q=null:(q=u,Fu(u))}break b}}Y=0,Bl=null,Pu(e,t,o,5);break;case 6:Y=0,Bl=null,Pu(e,t,o,6);break;case 8:xu(),X=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return Qi=Zi=null,D.H=r,D.A=a,G=n,q===null?(K=null,J=0,oi(),X):0}function ju(){for(;q!==null&&!Me();)Mu(q)}function Mu(e){var t=Nc(e.alternate,e,Wl);e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=_c(n,t,t.pendingProps,t.type,void 0,J);break;case 11:t=_c(n,t,t.pendingProps,t.type.render,t.ref,J);break;case 5:Ao(t);default:Vc(n,t),t=q=_i(t,Wl),t=Nc(n,t,Wl)}e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Pu(e,t,n,r){Qi=Zi=null,Ao(t),Fa=null,Ia=0;var i=t.return;try{if(nc(e,i,t,n,J)){X=1,Zs(e,wi(n,e.current)),q=null;return}}catch(t){if(i!==null)throw q=i,t;X=1,Zs(e,wi(n,e.current)),q=null;return}t.flags&32768?(P||r===1?e=!0:Hl||J&536870912?e=!1:(Vl=e=!0,(r===2||r===9||r===3||r===6)&&(r=oo.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Vl);return}e=t.return;var n=zc(t.alternate,t,Wl);if(n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);X===0&&(X=5)}function Iu(e,t){do{var n=Bc(e.alternate,e);if(n!==null){n.flags&=32767,q=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){q=e;return}q=e=n}while(e!==null);X=6,q=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(G&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=ai,ot(e,n,o,s,c,l),e===K&&(q=K=null,J=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Re,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=D.T,D.T=null,a=O.p,O.p=2,s=G,G|=4;try{ol(e,t,n)}finally{G=s,O.p=a,D.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=D.T,D.T=null;var r=O.p;O.p=2;var i=G;G|=4;try{vl(t,e);var a=zd,o=Nr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Mr(s.ownerDocument.documentElement,s)){if(c!==null&&Pr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=jr(s,h),v=jr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{G=i,O.p=r,D.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=D.T,D.T=null;var r=O.p;O.p=2;var i=G;G|=4;try{sl(e,t.alternate,t)}finally{G=i,O.p=r,D.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,Ne();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),dt(n),t=t.stateNode,We&&typeof We.onCommitFiberRoot==`function`)try{We.onCommitFiberRoot(Ue,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=D.T,i=O.p,O.p=2,D.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{D.T=t,O.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ma(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=dt(su),r=D.T,a=O.p;try{O.p=32>n?32:n,D.T=null,n=lu,lu=null;var o=au,s=su;if(iu=0,ou=au=null,su=0,G&6)throw Error(i(331));var c=G;if(G|=4,Fl(o.current),Dl(o,o.current,s,n),G=c,id(0,!1),We&&typeof We.onPostCommitFiberRoot==`function`)try{We.onPostCommitFiberRoot(Ue,o)}catch{}return!0}finally{O.p=a,D.T=r,Vu(e,t)}}function Wu(e,t,n){t=wi(n,t),t=$s(e.stateNode,t,2),e=qa(e,t,2),e!==null&&(at(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=wi(n,e),n=ec(2),r=qa(t,n,2),r!==null&&(tc(n,r,t,e),at(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new zl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Ul=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,K===e&&(J&n)===n&&(X===4||X===3&&(J&62914560)===J&&300>Pe()-$l?!(G&2)&&Su(e,0):ql|=n,Yl===J&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=rt()),e=li(e,t),e!==null&&(at(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return Ae(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Ke(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=J,a=et(r,r===K?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||tt(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Pe(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Ke(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=nt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=K,n=J,n=et(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Y===2||Y===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&je(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||tt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&je(r),dt(n)){case 2:case 8:n=Le;break;case 32:n=Re;break;case 268435456:n=Be;break;default:n=Re}return r=cd.bind(null,e),n=Ae(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&je(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=J;return r=et(e,e===K?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Pe()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){G&6?Ae(Ie,ad):od()})}function dd(){if(nd===0){var e=_a;e===0&&(e=Xe,Xe<<=1,!(Xe&261888)&&(Xe=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:cn(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[gt]||null).action),o=r.submitter;o&&(t=(t=o[gt]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new An(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Ts(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Ts(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<ei.length;hd++){var gd=ei[hd];ti(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}ti(Kr,`onAnimationEnd`),ti(qr,`onAnimationIteration`),ti(Jr,`onAnimationStart`),ti(`dblclick`,`onDoubleClick`),ti(`focusin`,`onFocus`),ti(`focusout`,`onBlur`),ti(Yr,`onTransitionRun`),ti(Xr,`onTransitionStart`),ti(Zr,`onTransitionCancel`),ti(Qr,`onTransitionEnd`),Mt(`onMouseEnter`,[`mouseout`,`mouseover`]),Mt(`onMouseLeave`,[`mouseout`,`mouseover`]),Mt(`onPointerEnter`,[`pointerout`,`pointerover`]),Mt(`onPointerLeave`,[`pointerout`,`pointerover`]),jt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),jt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),jt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),jt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),jt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),jt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ni(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ni(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[vt];n===void 0&&(n=t[vt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,kt.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!yn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=wt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}gn(function(){var r=a,i=dn(n),s=[];a:{var c=$r.get(e);if(c!==void 0){var l=An,u=e;switch(e){case`keypress`:if(Tn(n)===0)break a;case`keydown`:case`keyup`:l=Kn;break;case`focusin`:u=`focus`,l=j;break;case`focusout`:u=`blur`,l=j;break;case`beforeblur`:case`afterblur`:l=j;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=A;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Ln;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Jn;break;case Kr:case qr:case Jr:l=Rn;break;case Qr:l=Yn;break;case`scroll`:case`scrollend`:l=Mn;break;case`wheel`:l=M;break;case`copy`:case`cut`:case`paste`:l=zn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=qn;break;case`toggle`:case`beforetoggle`:l=Xn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=_n(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==un&&(u=n.relatedTarget||n.fromElement)&&(wt(u)||u[_t]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?wt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=A,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=qn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:Et(l),h=u==null?c:Et(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,wt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?Et(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=gr;else if(ur(c))if(_r)v=Er;else{v=wr;var y=Cr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&an(r.elementType)&&(v=gr):v=Tr;if(v&&=v(e,r)){dr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Xt(c,`number`,c.value)}switch(y=r?Et(r):window,e){case`focusin`:(ur(y)||y.contentEditable===`true`)&&(Ir=y,Lr=r,Rr=null);break;case`focusout`:Rr=Lr=Ir=null;break;case`mousedown`:zr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:zr=!1,Br(s,n,i);break;case`selectionchange`:if(Fr)break;case`keydown`:case`keyup`:Br(s,n,i)}var b;if(Qn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else or?ir(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(tr&&n.locale!==`ko`&&(or||x!==`onCompositionStart`?x===`onCompositionEnd`&&or&&(b=wn()):(xn=i,Sn=`value`in xn?xn.value:xn.textContent,or=!0)),y=Ed(r,x),0<y.length&&(x=new Bn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=ar(n),b!==null&&(x.data=b)))),(b=er?sr(e,n):cr(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Bn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=_n(e,n),i!=null&&r.unshift(Td(e,i,a)),i=_n(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=_n(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=_n(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||en(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&en(e,``+r);break;case`className`:Rt(e,`class`,r);break;case`tabIndex`:Rt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Rt(e,n,r);break;case`style`:rn(e,r,o);break;case`data`:if(t!==`object`){Rt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=cn(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=cn(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=ln);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=cn(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Lt(e,`popover`,r);break;case`xlinkActuate`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Lt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=on.get(n)||n,Lt(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:rn(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?en(e,r):(typeof r==`number`||typeof r==`bigint`)&&en(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=ln);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!At.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[gt]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Lt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}Yt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Zt(e,!!r,n,!0):Zt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}$t(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(an(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Jt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Zt(e,!!n,n?[]:``,!1):Zt(e,!!n,t,!0)):Zt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Qt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(an(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[St]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),Ct(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(r){if(!e[St])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}}else if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ct(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=O.d;O.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=Tt(e);t!==null&&t.tag===5&&t.type===`form`?Ds(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=qt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),Ot(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+qt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+qt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+qt(n.imageSizes)+`"]`)):i+=`[href="`+qt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),Ot(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+qt(r)+`"][href="`+qt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),Ot(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=Dt(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);Ot(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=Dt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Ot(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=Dt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Ot(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=ge.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=Dt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=Dt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=Dt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+qt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),Ot(t),e.head.appendChild(t))}function Pf(e){return`[src="`+qt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+qt(n.href)+`"]`);if(r)return t.instance=r,Ot(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Ot(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,Ot(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),Ot(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,Ot(a),a):(r=n,(a=mf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),Ot(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[St]||a[ht]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Ot(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),Ot(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:C,Provider:null,Consumer:null,_currentValue:le,_currentValue2:le,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=it(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=it(0),this.hiddenUpdates=it(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=mi(3,null,null,t),e.current=a,a.stateNode=e,t=pa(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Wa(a),e}function tp(e){return e?(e=fi,e):fi}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ka(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=qa(e,r,t),n!==null&&(hu(n,e,t),Ja(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=li(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=ut(t);var n=li(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=D.T;D.T=null;var a=O.p;try{O.p=2,up(e,t,n,r)}finally{O.p=a,D.T=i}}function lp(e,t,n,r){var i=D.T;D.T=null;var a=O.p;try{O.p=8,up(e,t,n,r)}finally{O.p=a,D.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=Tt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=$e(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Ke(o);s.entanglements[1]|=c,o&=~c}rd(a),!(G&6)&&(tu=Pe()+500,id(0,!1))}}break;case 31:case 13:s=li(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=dn(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=wt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Fe()){case Ie:return 2;case Le:return 8;case Re:case ze:return 32;case Be:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Tt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=wt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,pt(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,pt(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);un=r,n.target.dispatchEvent(r),un=null}else return t=Tt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=Tt(n);a!==null&&(e.splice(t,3),t-=3,Ts(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[gt]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[gt]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[_t]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=ft();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.0`)throw Error(i(527,Lp,`19.2.0`));O.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.0`,rendererPackageName:`react-dom`,currentDispatcherRef:D,reconcilerVersion:`19.2.0`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Ue=zp.inject(Rp),We=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Js,s=Ys,c=Xs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[_t]=t.current,Sd(e),new Fp(t)}})),g=c(o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()}))(),1),_=c(u(),1),v=`modulepreload`,y=function(e,t){return new URL(e,t).href},b={};const x=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=y(t,n),t in b)return;b[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:v,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})};var S=`popstate`;function C(e={}){function t(e,t){let{pathname:n=`/`,search:r=``,hash:i=``}=re(e.location.hash.substring(1));return!n.startsWith(`/`)&&!n.startsWith(`.`)&&(n=`/`+n),E(``,{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||`default`)}function n(e,t){let n=e.document.querySelector(`base`),r=``;if(n&&n.getAttribute(`href`)){let t=e.location.href,n=t.indexOf(`#`);r=n===-1?t:t.slice(0,n)}return r+`#`+(typeof t==`string`?t:ne(t))}function r(e,t){T(e.pathname.charAt(0)===`/`,`relative pathnames are not supported in hash history.push(${JSON.stringify(t)})`)}return ie(t,n,r,e)}function w(e,t){if(e===!1||e==null)throw Error(t)}function T(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function ee(){return Math.random().toString(36).substring(2,10)}function te(e,t){return{usr:e.state,key:e.key,idx:t}}function E(e,t,n=null,r){return{pathname:typeof e==`string`?e:e.pathname,search:``,hash:``,...typeof t==`string`?re(t):t,state:n,key:t&&t.key||r||ee()}}function ne({pathname:e=`/`,search:t=``,hash:n=``}){return t&&t!==`?`&&(e+=t.charAt(0)===`?`?t:`?`+t),n&&n!==`#`&&(e+=n.charAt(0)===`#`?n:`#`+n),e}function re(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function ie(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=`POP`,c=null,l=u();l??(l=0,o.replaceState({...o.state,idx:l},``));function u(){return(o.state||{idx:null}).idx}function d(){s=`POP`;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=`PUSH`;let r=E(h.location,e,t);n&&n(r,e),l=u()+1;let d=te(r,l),f=h.createHref(r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=`REPLACE`;let r=E(h.location,e,t);n&&n(r,e),l=u();let i=te(r,l),d=h.createHref(r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){return ae(e)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(S,d),c=e,()=>{i.removeEventListener(S,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}function ae(e,t=!1){let n=`http://localhost`;typeof window<`u`&&(n=window.location.origin===`null`?window.location.href:window.location.origin),w(n,`No window.location.(origin|href) available to create URL`);let r=typeof e==`string`?e:ne(e);return r=r.replace(/ $/,`%20`),!t&&r.startsWith(`//`)&&(r=n+r),new URL(r,n)}function oe(e,t,n=`/`){return se(e,t,n,!1)}function se(e,t,n,r){let i=Se((typeof t==`string`?re(t):t).pathname||`/`,n);if(i==null)return null;let a=D(e);le(a);let o=null;for(let e=0;o==null&&e<a.length;++e){let t=xe(i);o=ve(a[e],t,r)}return o}function ce(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],loaderData:t[n.id],handle:n.handle}}function D(e,t=[],n=[],r=``,i=!1){let a=(e,a,o=i,s)=>{let c={relativePath:s===void 0?e.path||``:s,caseSensitive:e.caseSensitive===!0,childrenIndex:a,route:e};if(c.relativePath.startsWith(`/`)){if(!c.relativePath.startsWith(r)&&o)return;w(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=ke([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(w(e.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),D(e.children,t,u,l,o)),!(e.path==null&&!e.index)&&t.push({path:l,score:ge(l,e.index),routesMeta:u})};return e.forEach((e,t)=>{if(e.path===``||!e.path?.includes(`?`))a(e,t);else for(let n of O(e.path))a(e,t,!0,n)}),t}function O(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=O(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function le(e){e.sort((e,t)=>e.score===t.score?_e(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var ue=/^:[\w-]+$/,de=3,fe=2,pe=1,k=10,me=-2,he=e=>e===`*`;function ge(e,t){let n=e.split(`/`),r=n.length;return n.some(he)&&(r+=me),t&&(r+=fe),n.filter(e=>!he(e)).reduce((e,t)=>e+(ue.test(t)?de:t===``?pe:k),r)}function _e(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function ve(e,t,n=!1){let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u=ye({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},l),d=s.route;if(!u&&c&&n&&!r[r.length-1].route.index&&(u=ye({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!u)return null;Object.assign(i,u.params),o.push({params:i,pathname:ke([a,u.pathname]),pathnameBase:Ae(ke([a,u.pathnameBase])),route:d}),u.pathnameBase!==`/`&&(a=ke([a,u.pathnameBase]))}return o}function ye(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=be(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,`$1`),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if(t===`*`){let e=s[r]||``;o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,`$1`)}let i=s[r];return n&&!i?e[t]=void 0:e[t]=(i||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function be(e,t=!1,n=!0){T(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,`/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,`/*`)}".`);let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n)=>(r.push({paramName:t,isOptional:n!=null}),n?`/?([^\\/]+)?`:`/([^\\/]+)`)).replace(/\/([\w-]+)\?(\/|$)/g,`(/$1)?$2`);return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function xe(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return T(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Se(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}function Ce(e,t=`/`){let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?re(e):e;return{pathname:n?n.startsWith(`/`)?n:we(n,t):t,search:je(r),hash:Me(i)}}function we(e,t){let n=t.replace(/\/+$/,``).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function Te(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ee(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function De(e){let t=Ee(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function Oe(e,t,n,r=!1){let i;typeof e==`string`?i=re(e):(i={...e},w(!i.pathname||!i.pathname.includes(`?`),Te(`?`,`pathname`,`search`,i)),w(!i.pathname||!i.pathname.includes(`#`),Te(`#`,`pathname`,`hash`,i)),w(!i.search||!i.search.includes(`#`),Te(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=Ce(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var ke=e=>e.join(`/`).replace(/\/\/+/g,`/`),Ae=e=>e.replace(/\/+$/,``).replace(/^\/*/,`/`),je=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,Me=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e;function Ne(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var Pe=_.createContext(null);Pe.displayName=`DataRouter`;var Fe=_.createContext(null);Fe.displayName=`DataRouterState`,_.createContext(!1);var Ie=_.createContext({isTransitioning:!1});Ie.displayName=`ViewTransition`;var Le=_.createContext(new Map);Le.displayName=`Fetchers`;var Re=_.createContext(null);Re.displayName=`Await`;var ze=_.createContext(null);ze.displayName=`Navigation`;var Be=_.createContext(null);Be.displayName=`Location`;var Ve=_.createContext({outlet:null,matches:[],isDataRoute:!1});Ve.displayName=`Route`;var He=_.createContext(null);He.displayName=`RouteError`;function Ue(e,{relative:t}={}){w(We(),`useHref() may be used only in the context of a <Router> component.`);let{basename:n,navigator:r}=_.useContext(ze),{hash:i,pathname:a,search:o}=Xe(e,{relative:t}),s=a;return n!==`/`&&(s=a===`/`?n:ke([n,a])),r.createHref({pathname:s,search:o,hash:i})}function We(){return _.useContext(Be)!=null}function Ge(){return w(We(),`useLocation() may be used only in the context of a <Router> component.`),_.useContext(Be).location}var Ke=`You should call navigate() in a React.useEffect(), not when your component is first rendered.`;function qe(e){_.useContext(ze).static||_.useLayoutEffect(e)}function Je(){let{isDataRoute:e}=_.useContext(Ve);return e?pt():Ye()}function Ye(){w(We(),`useNavigate() may be used only in the context of a <Router> component.`);let e=_.useContext(Pe),{basename:t,navigator:n}=_.useContext(ze),{matches:r}=_.useContext(Ve),{pathname:i}=Ge(),a=JSON.stringify(De(r)),o=_.useRef(!1);return qe(()=>{o.current=!0}),_.useCallback((r,s={})=>{if(T(o.current,Ke),!o.current)return;if(typeof r==`number`){n.go(r);return}let c=Oe(r,JSON.parse(a),i,s.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:ke([t,c.pathname])),(s.replace?n.replace:n.push)(c,s.state,s)},[t,n,a,i,e])}_.createContext(null);function Xe(e,{relative:t}={}){let{matches:n}=_.useContext(Ve),{pathname:r}=Ge(),i=JSON.stringify(De(n));return _.useMemo(()=>Oe(e,JSON.parse(i),r,t===`path`),[e,i,r,t])}function Ze(e,t){return Qe(e,t)}function Qe(e,t,n,r,i){w(We(),`useRoutes() may be used only in the context of a <Router> component.`);let{navigator:a}=_.useContext(ze),{matches:o}=_.useContext(Ve),s=o[o.length-1],c=s?s.params:{},l=s?s.pathname:`/`,u=s?s.pathnameBase:`/`,d=s&&s.route;{let e=d&&d.path||``;ht(l,!d||e.endsWith(`*`)||e.endsWith(`*?`),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${l}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e===`/`?`*`:`${e}/*`}">.`)}let f=Ge(),p;if(t){let e=typeof t==`string`?re(t):t;w(u===`/`||e.pathname?.startsWith(u),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${u}" but pathname "${e.pathname}" was given in the \`location\` prop.`),p=e}else p=f;let m=p.pathname||`/`,h=m;if(u!==`/`){let e=u.replace(/^\//,``).split(`/`);h=`/`+m.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let g=oe(e,{pathname:h});T(d||g!=null,`No routes matched location "${p.pathname}${p.search}${p.hash}" `),T(g==null||g[g.length-1].route.element!==void 0||g[g.length-1].route.Component!==void 0||g[g.length-1].route.lazy!==void 0,`Matched leaf route at location "${p.pathname}${p.search}${p.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let v=rt(g&&g.map(e=>Object.assign({},e,{params:Object.assign({},c,e.params),pathname:ke([u,a.encodeLocation?a.encodeLocation(e.pathname.replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?u:ke([u,a.encodeLocation?a.encodeLocation(e.pathnameBase.replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathnameBase])})),o,n,r,i);return t&&v?_.createElement(Be.Provider,{value:{location:{pathname:`/`,search:``,hash:``,state:null,key:`default`,...p},navigationType:`POP`}},v):v}function $e(){let e=ft(),t=Ne(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r=`rgba(200,200,200, 0.5)`,i={padding:`0.5rem`,backgroundColor:r},a={padding:`2px 4px`,backgroundColor:r},o=null;return console.error(`Error handled by React Router default ErrorBoundary:`,e),o=_.createElement(_.Fragment,null,_.createElement(`p`,null,`💿 Hey developer 👋`),_.createElement(`p`,null,`You can provide a way better UX than this when your app throws errors by providing your own `,_.createElement(`code`,{style:a},`ErrorBoundary`),` or`,` `,_.createElement(`code`,{style:a},`errorElement`),` prop on your route.`)),_.createElement(_.Fragment,null,_.createElement(`h2`,null,`Unexpected Application Error!`),_.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?_.createElement(`pre`,{style:i},n):null,o)}var et=_.createElement($e,null),tt=class extends _.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.unstable_onError?this.props.unstable_onError(e,t):console.error(`React Router caught the following error during render`,e)}render(){return this.state.error===void 0?this.props.children:_.createElement(Ve.Provider,{value:this.props.routeContext},_.createElement(He.Provider,{value:this.state.error,children:this.props.component}))}};function nt({routeContext:e,match:t,children:n}){let r=_.useContext(Pe);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),_.createElement(Ve.Provider,{value:e},n)}function rt(e,t=[],n=null,r=null,i=null){if(e==null){if(!n)return null;if(n.errors)e=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,o=n?.errors;if(o!=null){let e=a.findIndex(e=>e.route.id&&o?.[e.route.id]!==void 0);w(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(`,`)}`),a=a.slice(0,Math.min(a.length,e+1))}let s=!1,c=-1;if(n)for(let e=0;e<a.length;e++){let t=a[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(c=e),t.route.id){let{loaderData:e,errors:r}=n,i=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!r||r[t.route.id]===void 0);if(t.route.lazy||i){s=!0,a=c>=0?a.slice(0,c+1):[a[0]];break}}}return a.reduceRight((e,i,l)=>{let u,d=!1,f=null,p=null;n&&(u=o&&i.route.id?o[i.route.id]:void 0,f=i.route.errorElement||et,s&&(c<0&&l===0?(ht(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):c===l&&(d=!0,p=i.route.hydrateFallbackElement||null)));let m=t.concat(a.slice(0,l+1)),h=()=>{let t;return t=u?f:d?p:i.route.Component?_.createElement(i.route.Component,null):i.route.element?i.route.element:e,_.createElement(nt,{match:i,routeContext:{outlet:e,matches:m,isDataRoute:n!=null},children:t})};return n&&(i.route.ErrorBoundary||i.route.errorElement||l===0)?_.createElement(tt,{location:n.location,revalidation:n.revalidation,component:f,error:u,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0},unstable_onError:r}):h()},null)}function it(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function at(e){let t=_.useContext(Pe);return w(t,it(e)),t}function ot(e){let t=_.useContext(Fe);return w(t,it(e)),t}function st(e){let t=_.useContext(Ve);return w(t,it(e)),t}function ct(e){let t=st(e),n=t.matches[t.matches.length-1];return w(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function lt(){return ct(`useRouteId`)}function ut(){return ot(`useNavigation`).navigation}function dt(){let{matches:e,loaderData:t}=ot(`useMatches`);return _.useMemo(()=>e.map(e=>ce(e,t)),[e,t])}function ft(){let e=_.useContext(He),t=ot(`useRouteError`),n=ct(`useRouteError`);return e===void 0?t.errors?.[n]:e}function pt(){let{router:e}=at(`useNavigate`),t=ct(`useNavigate`),n=_.useRef(!1);return qe(()=>{n.current=!0}),_.useCallback(async(r,i={})=>{T(n.current,Ke),n.current&&(typeof r==`number`?e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var mt={};function ht(e,t,n){!t&&!mt[e]&&(mt[e]=!0,T(!1,n))}_.memo(gt);function gt({routes:e,future:t,state:n,unstable_onError:r}){return Qe(e,void 0,n,r,t)}function _t(e){w(!1,`A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`)}function vt({basename:e=`/`,children:t=null,location:n,navigationType:r=`POP`,navigator:i,static:a=!1}){w(!We(),`You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);let o=e.replace(/^\/*/,`/`),s=_.useMemo(()=>({basename:o,navigator:i,static:a,future:{}}),[o,i,a]);typeof n==`string`&&(n=re(n));let{pathname:c=`/`,search:l=``,hash:u=``,state:d=null,key:f=`default`}=n,p=_.useMemo(()=>{let e=Se(c,o);return e==null?null:{location:{pathname:e,search:l,hash:u,state:d,key:f},navigationType:r}},[o,c,l,u,d,f,r]);return T(p!=null,`<Router basename="${o}"> is not able to match the URL "${c}${l}${u}" because it does not start with the basename, so the <Router> won't render anything.`),p==null?null:_.createElement(ze.Provider,{value:s},_.createElement(Be.Provider,{children:t,value:p}))}function yt({children:e,location:t}){return Ze(bt(e),t)}function bt(e,t=[]){let n=[];return _.Children.forEach(e,(e,r)=>{if(!_.isValidElement(e))return;let i=[...t,r];if(e.type===_.Fragment){n.push.apply(n,bt(e.props.children,i));return}w(e.type===_t,`[${typeof e.type==`string`?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),w(!e.props.index||!e.props.children,`An index route cannot have child routes.`);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.hasErrorBoundary===!0||e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=bt(e.props.children,i)),n.push(a)}),n}var xt=`get`,St=`application/x-www-form-urlencoded`;function Ct(e){return e!=null&&typeof e.tagName==`string`}function wt(e){return Ct(e)&&e.tagName.toLowerCase()===`button`}function Tt(e){return Ct(e)&&e.tagName.toLowerCase()===`form`}function Et(e){return Ct(e)&&e.tagName.toLowerCase()===`input`}function Dt(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Ot(e,t){return e.button===0&&(!t||t===`_self`)&&!Dt(e)}var kt=null;function At(){if(kt===null)try{new FormData(document.createElement(`form`),0),kt=!1}catch{kt=!0}return kt}var jt=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function Mt(e){return e!=null&&!jt.has(e)?(T(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${St}"`),null):e}function Nt(e,t){let n,r,i,a,o;if(Tt(e)){let o=e.getAttribute(`action`);r=o?Se(o,t):null,n=e.getAttribute(`method`)||xt,i=Mt(e.getAttribute(`enctype`))||St,a=new FormData(e)}else if(wt(e)||Et(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?Se(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||xt,i=Mt(e.getAttribute(`formenctype`))||Mt(o.getAttribute(`enctype`))||St,a=new FormData(o,e),!At()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(Ct(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=xt,r=null,i=St,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);function Pt(e,t){if(e===!1||e==null)throw Error(t)}function Ft(e,t,n){let r=typeof e==`string`?new URL(e,typeof window>`u`?`server://singlefetch/`:window.location.origin):e;return r.pathname===`/`?r.pathname=`_root.${n}`:t&&Se(r.pathname,t)===`/`?r.pathname=`${t.replace(/\/$/,``)}/_root.${n}`:r.pathname=`${r.pathname.replace(/\/$/,``)}.${n}`,r}async function It(e,t){if(e.id in t)return t[e.id];try{let n=await x(()=>import(e.module),[],import.meta.url);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Lt(e){return e!=null&&typeof e.page==`string`}function Rt(e){return e==null?!1:e.href==null?e.rel===`preload`&&typeof e.imageSrcSet==`string`&&typeof e.imageSizes==`string`:typeof e.rel==`string`&&typeof e.href==`string`}async function zt(e,t,n){return Wt((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await It(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(Rt).filter(e=>e.rel===`stylesheet`||e.rel===`preload`).map(e=>e.rel===`stylesheet`?{...e,rel:`prefetch`,as:`style`}:{...e,rel:`prefetch`}))}function Bt(e,t,n,r,i,a){let o=(e,t)=>n[t]?e.route.id!==n[t].route.id:!0,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith(`*`)&&n[t].params[`*`]!==e.params[`*`];return a===`assets`?t.filter((e,t)=>o(e,t)||s(e,t)):a===`data`?t.filter((t,a)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if(typeof r==`boolean`)return r}return!0}):[]}function Vt(e,t,{includeHydrateFallback:n}={}){return Ht(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function Ht(e){return[...new Set(e)]}function Ut(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function Wt(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!Lt(i)&&i.as===`script`&&i.href&&r.has(i.href))return e;let a=JSON.stringify(Ut(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}function Gt(){let e=_.useContext(Pe);return Pt(e,`You must render this element inside a <DataRouterContext.Provider> element`),e}function Kt(){let e=_.useContext(Fe);return Pt(e,`You must render this element inside a <DataRouterStateContext.Provider> element`),e}var qt=_.createContext(void 0);qt.displayName=`FrameworkContext`;function Jt(){let e=_.useContext(qt);return Pt(e,`You must render this element inside a <HydratedRouter> element`),e}function Yt(e,t){let n=_.useContext(qt),[r,i]=_.useState(!1),[a,o]=_.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:d}=t,f=_.useRef(null);_.useEffect(()=>{if(e===`render`&&o(!0),e===`viewport`){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),_.useEffect(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let p=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?e===`intent`?[a,f,{onFocus:Xt(s,p),onBlur:Xt(c,m),onMouseEnter:Xt(l,p),onMouseLeave:Xt(u,m),onTouchStart:Xt(d,p)}]:[a,f,{}]:[!1,f,{}]}function Xt(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Zt({page:e,...t}){let{router:n}=Gt(),r=_.useMemo(()=>oe(n.routes,e,n.basename),[n.routes,e,n.basename]);return r?_.createElement($t,{page:e,matches:r,...t}):null}function Qt(e){let{manifest:t,routeModules:n}=Jt(),[r,i]=_.useState([]);return _.useEffect(()=>{let r=!1;return zt(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}function $t({page:e,matches:t,...n}){let r=Ge(),{manifest:i,routeModules:a}=Jt(),{basename:o}=Gt(),{loaderData:s,matches:c}=Kt(),l=_.useMemo(()=>Bt(e,t,c,i,r,`data`),[e,t,c,i,r]),u=_.useMemo(()=>Bt(e,t,c,i,r,`assets`),[e,t,c,i,r]),d=_.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,c=!1;if(t.forEach(e=>{let t=i.routes[e.route.id];!t||!t.hasLoader||(!l.some(t=>t.route.id===e.route.id)&&e.route.id in s&&a[e.route.id]?.shouldRevalidate||t.hasClientLoader?c=!0:n.add(e.route.id))}),n.size===0)return[];let u=Ft(e,o,`data`);return c&&n.size>0&&u.searchParams.set(`_routes`,t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(`,`)),[u.pathname+u.search]},[o,s,r,i,l,t,e,a]),f=_.useMemo(()=>Vt(u,i),[u,i]),p=Qt(u);return _.createElement(_.Fragment,null,d.map(e=>_.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})),f.map(e=>_.createElement(`link`,{key:e,rel:`modulepreload`,href:e,...n})),p.map(({key:e,link:t})=>_.createElement(`link`,{key:e,nonce:n.nonce,...t})))}function en(...e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}var tn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{tn&&(window.__reactRouterVersion=`7.9.5`)}catch{}function nn({basename:e,children:t,window:n}){let r=_.useRef();r.current??=C({window:n,v5Compat:!0});let i=r.current,[a,o]=_.useState({action:i.action,location:i.location}),s=_.useCallback(e=>{_.startTransition(()=>o(e))},[o]);return _.useLayoutEffect(()=>i.listen(s),[i,s]),_.createElement(vt,{basename:e,children:t,location:a.location,navigationType:a.action,navigator:i})}function rn({basename:e,children:t,history:n}){let[r,i]=_.useState({action:n.action,location:n.location}),a=_.useCallback(e=>{_.startTransition(()=>i(e))},[i]);return _.useLayoutEffect(()=>n.listen(a),[n,a]),_.createElement(vt,{basename:e,children:t,location:r.location,navigationType:r.action,navigator:n})}rn.displayName=`unstable_HistoryRouter`;var an=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,on=_.forwardRef(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:a,state:o,target:s,to:c,preventScrollReset:l,viewTransition:u,...d},f){let{basename:p}=_.useContext(ze),m=typeof c==`string`&&an.test(c),h,g=!1;if(typeof c==`string`&&m&&(h=c,tn))try{let e=new URL(window.location.href),t=c.startsWith(`//`)?new URL(e.protocol+c):new URL(c),n=Se(t.pathname,p);t.origin===e.origin&&n!=null?c=n+t.search+t.hash:g=!0}catch{T(!1,`<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let v=Ue(c,{relative:r}),[y,b,x]=Yt(n,d),S=pn(c,{replace:a,state:o,target:s,preventScrollReset:l,relative:r,viewTransition:u});function C(t){e&&e(t),t.defaultPrevented||S(t)}let w=_.createElement(`a`,{...d,...x,href:h||v,onClick:g||i?e:C,ref:en(f,b),target:s,"data-discover":!m&&t===`render`?`true`:void 0});return y&&!m?_.createElement(_.Fragment,null,w,_.createElement(Zt,{page:v})):w});on.displayName=`Link`;var sn=_.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},l){let u=Xe(a,{relative:c.relative}),d=Ge(),f=_.useContext(Fe),{navigator:p,basename:m}=_.useContext(ze),h=f!=null&&Cn(u)&&o===!0,g=p.encodeLocation?p.encodeLocation(u).pathname:u.pathname,v=d.pathname,y=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;t||(v=v.toLowerCase(),y=y?y.toLowerCase():null,g=g.toLowerCase()),y&&m&&(y=Se(y,m)||y);let b=g!==`/`&&g.endsWith(`/`)?g.length-1:g.length,x=v===g||!r&&v.startsWith(g)&&v.charAt(b)===`/`,S=y!=null&&(y===g||!r&&y.startsWith(g)&&y.charAt(g.length)===`/`),C={isActive:x,isPending:S,isTransitioning:h},w=x?e:void 0,T;T=typeof n==`function`?n(C):[n,x?`active`:null,S?`pending`:null,h?`transitioning`:null].filter(Boolean).join(` `);let ee=typeof i==`function`?i(C):i;return _.createElement(on,{...c,"aria-current":w,className:T,ref:l,style:ee,to:a,viewTransition:o},typeof s==`function`?s(C):s)});sn.displayName=`NavLink`;var cn=_.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=xt,action:s,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:d,...f},p)=>{let m=gn(),h=_n(s,{relative:l}),g=o.toLowerCase()===`get`?`get`:`post`,v=typeof s==`string`&&an.test(s);return _.createElement(`form`,{ref:p,method:g,action:h,onSubmit:r?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute(`formmethod`)||o;m(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:l,preventScrollReset:u,viewTransition:d})},...f,"data-discover":!v&&e===`render`?`true`:void 0})});cn.displayName=`Form`;function ln({getKey:e,storageKey:t,...n}){let r=_.useContext(qt),{basename:i}=_.useContext(ze),a=Ge(),o=dt();xn({getKey:e,storageKey:t});let s=_.useMemo(()=>{if(!r||!e)return null;let t=bn(a,o,i,e);return t===a.key?null:t},[]);if(!r||r.isSpaMode)return null;let c=((e,t)=>{if(!window.history.state||!window.history.state.key){let e=Math.random().toString(32).slice(2);window.history.replaceState({key:e},``)}try{let n=JSON.parse(sessionStorage.getItem(e)||`{}`)[t||window.history.state.key];typeof n==`number`&&window.scrollTo(0,n)}catch(t){console.error(t),sessionStorage.removeItem(e)}}).toString();return _.createElement(`script`,{...n,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${c})(${JSON.stringify(t||vn)}, ${JSON.stringify(s)})`}})}ln.displayName=`ScrollRestoration`;function un(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function dn(e){let t=_.useContext(Pe);return w(t,un(e)),t}function fn(e){let t=_.useContext(Fe);return w(t,un(e)),t}function pn(e,{target:t,replace:n,state:r,preventScrollReset:i,relative:a,viewTransition:o}={}){let s=Je(),c=Ge(),l=Xe(e,{relative:a});return _.useCallback(u=>{Ot(u,t)&&(u.preventDefault(),s(e,{replace:n===void 0?ne(c)===ne(l):n,state:r,preventScrollReset:i,relative:a,viewTransition:o}))},[c,s,l,n,r,t,e,i,a,o])}var mn=0,hn=()=>`__${String(++mn)}__`;function gn(){let{router:e}=dn(`useSubmit`),{basename:t}=_.useContext(ze),n=lt();return _.useCallback(async(r,i={})=>{let{action:a,method:o,encType:s,formData:c,body:l}=Nt(r,t);if(i.navigate===!1){let t=i.fetcherKey||hn();await e.fetch(t,n,i.action||a,{preventScrollReset:i.preventScrollReset,formData:c,body:l,formMethod:i.method||o,formEncType:i.encType||s,flushSync:i.flushSync})}else await e.navigate(i.action||a,{preventScrollReset:i.preventScrollReset,formData:c,body:l,formMethod:i.method||o,formEncType:i.encType||s,replace:i.replace,state:i.state,fromRouteId:n,flushSync:i.flushSync,viewTransition:i.viewTransition})},[e,t,n])}function _n(e,{relative:t}={}){let{basename:n}=_.useContext(ze),r=_.useContext(Ve);w(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),a={...Xe(e||`.`,{relative:t})},o=Ge();if(e==null){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();a.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(a.pathname=a.pathname===`/`?n:ke([n,a.pathname])),ne(a)}var vn=`react-router-scroll-positions`,yn={};function bn(e,t,n,r){let i=null;return r&&(i=r(n===`/`?e:{...e,pathname:Se(e.pathname,n)||e.pathname},t)),i??=e.key,i}function xn({getKey:e,storageKey:t}={}){let{router:n}=dn(`useScrollRestoration`),{restoreScrollPosition:r,preventScrollReset:i}=fn(`useScrollRestoration`),{basename:a}=_.useContext(ze),o=Ge(),s=dt(),c=ut();_.useEffect(()=>(window.history.scrollRestoration=`manual`,()=>{window.history.scrollRestoration=`auto`}),[]),Sn(_.useCallback(()=>{if(c.state===`idle`){let t=bn(o,s,a,e);yn[t]=window.scrollY}try{sessionStorage.setItem(t||vn,JSON.stringify(yn))}catch(e){T(!1,`Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${e}).`)}window.history.scrollRestoration=`auto`},[c.state,e,a,o,s,t])),typeof document<`u`&&(_.useLayoutEffect(()=>{try{let e=sessionStorage.getItem(t||vn);e&&(yn=JSON.parse(e))}catch{}},[t]),_.useLayoutEffect(()=>{let t=n?.enableScrollRestoration(yn,()=>window.scrollY,e?(t,n)=>bn(t,n,a,e):void 0);return()=>t&&t()},[n,a,e]),_.useLayoutEffect(()=>{if(r!==!1){if(typeof r==`number`){window.scrollTo(0,r);return}try{if(o.hash){let e=document.getElementById(decodeURIComponent(o.hash.slice(1)));if(e){e.scrollIntoView();return}}}catch{T(!1,`"${o.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`)}i!==!0&&window.scrollTo(0,0)}},[o,r,i]))}function Sn(e,t){let{capture:n}=t||{};_.useEffect(()=>{let t=n==null?void 0:{capture:n};return window.addEventListener(`pagehide`,e,t),()=>{window.removeEventListener(`pagehide`,e,t)}},[e,n])}function Cn(e,{relative:t}={}){let n=_.useContext(Ie);w(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=dn(`useViewTransitionState`),i=Xe(e,{relative:t});if(!n.isTransitioning)return!1;let a=Se(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Se(n.nextLocation.pathname,r)||n.nextLocation.pathname;return ye(i.pathname,o)!=null||ye(i.pathname,a)!=null}var wn=()=>{let{pathname:e}=Ge();return(0,_.useEffect)(()=>{window.scrollTo(0,0)},[e]),null},Tn=null,En=!1,Dn=null,On=null;function kn(){let e=null,t=window,n=0;for(;!e&&t.parent&&t.parent!==t&&n<500;){if(n++,t.API){e=t.API;break}t=t.parent}return e}function An(e){let t=Math.floor(e/1e3),n=Math.floor(t/3600),r=Math.floor(t%3600/60),i=t%60;return`${String(n).padStart(2,`0`)}:${String(r).padStart(2,`0`)}:${String(i).padStart(2,`0`)}`}var jn={async initialize(){try{if(Tn=kn(),Tn){if(En=Tn.LMSInitialize(``)===`true`,En){let e=this.get(`cmi.core.lesson_status`);(!e||e===`not attempted`)&&(this.set(`cmi.core.lesson_status`,`incomplete`),this.commit()),this.startSessionTimer()}}else En=!1;return En}catch{return!1}},terminate(){if(Tn&&En){this.stopSessionTimer();let e=Tn.LMSFinish(``);return En=!1,e===`true`}return!0},startSessionTimer(){On||=(Dn=Date.now(),setInterval(()=>{this.updateSessionTime()},3e4))},stopSessionTimer(){On&&=(clearInterval(On),null),this.updateSessionTime()},updateSessionTime(){if(!Dn)return;let e=An(Date.now()-Dn);this.set(`cmi.core.session_time`,e),this.commit()},set(e,t){if(Tn&&En)try{return Tn.LMSSetValue(e,t)===`true`}catch{return!1}return!0},get(e){if(Tn&&En)try{return Tn.LMSGetValue(e)||this.getDefaultValue(e)}catch{return this.getDefaultValue(e)}return this.getDefaultValue(e)},commit(){if(Tn&&En)try{return Tn.LMSCommit(``)===`true`}catch{return!1}return!0},getDefaultValue(e){return{"cmi.core.student_name":`Usuário Teste`,"cmi.core.lesson_status":`incomplete`,"cmi.core.score.raw":`0`,"cmi.core.score.min":`0`,"cmi.core.score.max":`100`,"cmi.suspend_data":``,"cmi.core.lesson_location":``,"cmi.core.session_time":`00:00:00`}[e]||``},setLessonStatus(e){return this.set(`cmi.core.lesson_status`,e)},getLessonStatus(){return this.get(`cmi.core.lesson_status`)},setScore(e,t=0,n=100){let r=!0;return r&&=this.set(`cmi.core.score.raw`,e.toString()),r&&=this.set(`cmi.core.score.min`,t.toString()),r&&=this.set(`cmi.core.score.max`,n.toString()),r},getScore(){return parseFloat(this.get(`cmi.core.score.raw`))||0},setSuspendData(e){let t=typeof e==`string`?e:JSON.stringify(e);return this.set(`cmi.suspend_data`,t)},getSuspendData(){let e=this.get(`cmi.suspend_data`);if(!e)return null;try{return JSON.parse(e)}catch{return e}},getStudentName(){return this.get(`cmi.core.student_name`)},completeCourse(e=null){return e!==null&&this.setScore(e),this.setLessonStatus(`completed`),this.commit()},passCourse(e=null){return e!==null&&this.setScore(e),this.setLessonStatus(`passed`),this.commit()},failCourse(e=null){return e!==null&&this.setScore(e),this.setLessonStatus(`failed`),this.commit()},get isInitialized(){return En}};const Mn=()=>{let[e,t]=(0,_.useState)(!1),[n,r]=(0,_.useState)(``),[i,a]=(0,_.useState)(``),[o,s]=(0,_.useState)(0),[c,l]=(0,_.useState)(!0);return(0,_.useEffect)(()=>((async()=>{l(!0);try{t(await jn.initialize()),r(jn.getLessonStatus()),a(jn.getStudentName()),s(jn.getScore())}catch{t(!1)}finally{l(!1)}})(),()=>{jn.terminate()}),[]),{isInitialized:e,isLoading:c,lessonStatus:n,studentName:i,score:o,updateLessonStatus:(0,_.useCallback)(e=>jn.setLessonStatus(e)?(jn.commit(),r(e),!0):!1,[]),updateScore:(0,_.useCallback)((e,t=0,n=100)=>jn.setScore(e,t,n)?(jn.commit(),s(e),!0):!1,[]),saveProgress:(0,_.useCallback)(e=>jn.setSuspendData(e)?(jn.commit(),!0):!1,[]),loadProgress:(0,_.useCallback)(()=>jn.getSuspendData(),[]),completeCourse:(0,_.useCallback)((e=null)=>{let t=jn.completeCourse(e);return t&&(r(`completed`),e!==null&&s(e)),t},[]),passCourse:(0,_.useCallback)((e=null)=>{let t=jn.passCourse(e);return t&&(r(`passed`),e!==null&&s(e)),t},[]),failCourse:(0,_.useCallback)((e=null)=>{let t=jn.failCourse(e);return t&&(r(`failed`),e!==null&&s(e)),t},[]),scormService:jn}};var Nn=()=>{let e=Ge(),{setSuspendData:t}=Mn();return(0,_.useEffect)(()=>{let n={currentRoute:e.pathname,timestamp:new Date().toISOString()};t&&typeof t==`function`&&t(JSON.stringify(n))},[e.pathname,t]),null},Pn=function(){return Pn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},Pn.apply(this,arguments)};function Fn(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,a;r<i;r++)(a||!(r in t))&&(a||=Array.prototype.slice.call(t,0,r),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}var In=o(((e,t)=>{t.exports=function(e,t,n,r){var i=n?n.call(r,e,t):void 0;if(i!==void 0)return!!i;if(e===t)return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),c=0;c<a.length;c++){var l=a[c];if(!s(l))return!1;var u=e[l],d=t[l];if(i=n?n.call(r,u,d,l):void 0,i===!1||i===void 0&&u!==d)return!1}return!0}})),A=`-ms-`,Ln=`-moz-`,j=`-webkit-`,Rn=`comm`,zn=`rule`,Bn=`decl`,Vn=`@import`,Hn=`@keyframes`,Un=`@layer`,Wn=Math.abs,Gn=String.fromCharCode,Kn=Object.assign;function qn(e,t){return Zn(e,0)^45?(((t<<2^Zn(e,0))<<2^Zn(e,1))<<2^Zn(e,2))<<2^Zn(e,3):0}function Jn(e){return e.trim()}function Yn(e,t){return(e=t.exec(e))?e[0]:e}function M(e,t,n){return e.replace(t,n)}function Xn(e,t,n){return e.indexOf(t,n)}function Zn(e,t){return e.charCodeAt(t)|0}function Qn(e,t,n){return e.slice(t,n)}function $n(e){return e.length}function er(e){return e.length}function tr(e,t){return t.push(e),e}function nr(e,t){return e.map(t).join(``)}function rr(e,t){return e.filter(function(e){return!Yn(e,t)})}var ir=1,ar=1,or=0,sr=0,cr=0,lr=``;function ur(e,t,n,r,i,a,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:ir,column:ar,length:o,return:``,siblings:s}}function dr(e,t){return Kn(ur(``,null,null,``,null,null,0,e.siblings),e,{length:-e.length},t)}function fr(e){for(;e.root;)e=dr(e.root,{children:[e]});tr(e,e.siblings)}function pr(){return cr}function mr(){return cr=sr>0?Zn(lr,--sr):0,ar--,cr===10&&(ar=1,ir--),cr}function hr(){return cr=sr<or?Zn(lr,sr++):0,ar++,cr===10&&(ar=1,ir++),cr}function gr(){return Zn(lr,sr)}function _r(){return sr}function vr(e,t){return Qn(lr,e,t)}function yr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function br(e){return ir=ar=1,or=$n(lr=e),sr=0,[]}function xr(e){return lr=``,e}function Sr(e){return Jn(vr(sr-1,Tr(e===91?e+2:e===40?e+1:e)))}function Cr(e){for(;(cr=gr())&&cr<33;)hr();return yr(e)>2||yr(cr)>3?``:` `}function wr(e,t){for(;--t&&hr()&&!(cr<48||cr>102||cr>57&&cr<65||cr>70&&cr<97););return vr(e,_r()+(t<6&&gr()==32&&hr()==32))}function Tr(e){for(;hr();)switch(cr){case e:return sr;case 34:case 39:e!==34&&e!==39&&Tr(cr);break;case 40:e===41&&Tr(e);break;case 92:hr();break}return sr}function Er(e,t){for(;hr()&&e+cr!==57&&!(e+cr===84&&gr()===47););return`/*`+vr(t,sr-1)+`*`+Gn(e===47?e:hr())}function Dr(e){for(;!yr(gr());)hr();return vr(e,sr)}function Or(e){return xr(kr(``,null,null,null,[``],e=br(e),0,[0],e))}function kr(e,t,n,r,i,a,o,s,c){for(var l=0,u=0,d=o,f=0,p=0,m=0,h=1,g=1,_=1,v=0,y=``,b=i,x=a,S=r,C=y;g;)switch(m=v,v=hr()){case 40:if(m!=108&&Zn(C,d-1)==58){Xn(C+=M(Sr(v),`&`,`&\f`),`&\f`,Wn(l?s[l-1]:0))!=-1&&(_=-1);break}case 34:case 39:case 91:C+=Sr(v);break;case 9:case 10:case 13:case 32:C+=Cr(m);break;case 92:C+=wr(_r()-1,7);continue;case 47:switch(gr()){case 42:case 47:tr(jr(Er(hr(),_r()),t,n,c),c);break;default:C+=`/`}break;case 123*h:s[l++]=$n(C)*_;case 125*h:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:_==-1&&(C=M(C,/\f/g,``)),p>0&&$n(C)-d&&tr(p>32?Mr(C+`;`,r,n,d-1,c):Mr(M(C,` `,``)+`;`,r,n,d-2,c),c);break;case 59:C+=`;`;default:if(tr(S=Ar(C,t,n,l,u,i,s,y,b=[],x=[],d,a),a),v===123)if(u===0)kr(C,t,S,S,b,a,d,s,x);else switch(f===99&&Zn(C,3)===110?100:f){case 100:case 108:case 109:case 115:kr(e,S,S,r&&tr(Ar(e,S,S,0,0,i,s,y,i,b=[],d,x),x),i,x,d,s,r?b:x);break;default:kr(C,S,S,S,[``],x,0,s,x)}}l=u=p=0,h=_=1,y=C=``,d=o;break;case 58:d=1+$n(C),p=m;default:if(h<1){if(v==123)--h;else if(v==125&&h++==0&&mr()==125)continue}switch(C+=Gn(v),v*h){case 38:_=u>0?1:(C+=`\f`,-1);break;case 44:s[l++]=($n(C)-1)*_,_=1;break;case 64:gr()===45&&(C+=Sr(hr())),f=gr(),u=d=$n(y=C+=Dr(_r())),v++;break;case 45:m===45&&$n(C)==2&&(h=0)}}return a}function Ar(e,t,n,r,i,a,o,s,c,l,u,d){for(var f=i-1,p=i===0?a:[``],m=er(p),h=0,g=0,_=0;h<r;++h)for(var v=0,y=Qn(e,f+1,f=Wn(g=o[h])),b=e;v<m;++v)(b=Jn(g>0?p[v]+` `+y:M(y,/&\f/g,p[v])))&&(c[_++]=b);return ur(e,t,n,i===0?zn:s,c,l,u,d)}function jr(e,t,n,r){return ur(e,t,n,Rn,Gn(pr()),Qn(e,2,-2),0,r)}function Mr(e,t,n,r,i){return ur(e,t,n,Bn,Qn(e,0,r),Qn(e,r+1,-1),r,i)}function Nr(e,t,n){switch(qn(e,t)){case 5103:return j+`print-`+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return j+e+e;case 4789:return Ln+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return j+e+Ln+e+A+e+e;case 5936:switch(Zn(e,t+11)){case 114:return j+e+A+M(e,/[svh]\w+-[tblr]{2}/,`tb`)+e;case 108:return j+e+A+M(e,/[svh]\w+-[tblr]{2}/,`tb-rl`)+e;case 45:return j+e+A+M(e,/[svh]\w+-[tblr]{2}/,`lr`)+e}case 6828:case 4268:case 2903:return j+e+A+e+e;case 6165:return j+e+A+`flex-`+e+e;case 5187:return j+e+M(e,/(\w+).+(:[^]+)/,j+`box-$1$2`+A+`flex-$1$2`)+e;case 5443:return j+e+A+`flex-item-`+M(e,/flex-|-self/g,``)+(Yn(e,/flex-|baseline/)?``:A+`grid-row-`+M(e,/flex-|-self/g,``))+e;case 4675:return j+e+A+`flex-line-pack`+M(e,/align-content|flex-|-self/g,``)+e;case 5548:return j+e+A+M(e,`shrink`,`negative`)+e;case 5292:return j+e+A+M(e,`basis`,`preferred-size`)+e;case 6060:return j+`box-`+M(e,`-grow`,``)+j+e+A+M(e,`grow`,`positive`)+e;case 4554:return j+M(e,/([^-])(transform)/g,`$1`+j+`$2`)+e;case 6187:return M(M(M(e,/(zoom-|grab)/,j+`$1`),/(image-set)/,j+`$1`),e,``)+e;case 5495:case 3959:return M(e,/(image-set\([^]*)/,j+"$1$`$1");case 4968:return M(M(e,/(.+:)(flex-)?(.*)/,j+`box-pack:$3`+A+`flex-pack:$3`),/s.+-b[^;]+/,`justify`)+j+e+e;case 4200:if(!Yn(e,/flex-|baseline/))return A+`grid-column-align`+Qn(e,t)+e;break;case 2592:case 3360:return A+M(e,`template-`,``)+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,Yn(e.props,/grid-\w+-end/)})?~Xn(e+(n=n[t].value),`span`,0)?e:A+M(e,`-start`,``)+e+A+`grid-row-span:`+(~Xn(n,`span`,0)?Yn(n,/\d+/):Yn(n,/\d+/)-+Yn(e,/\d+/))+`;`:A+M(e,`-start`,``)+e;case 4896:case 4128:return n&&n.some(function(e){return Yn(e.props,/grid-\w+-start/)})?e:A+M(M(e,`-end`,`-span`),`span `,``)+e;case 4095:case 3583:case 4068:case 2532:return M(e,/(.+)-inline(.+)/,j+`$1$2`)+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if($n(e)-1-t>6)switch(Zn(e,t+1)){case 109:if(Zn(e,t+4)!==45)break;case 102:return M(e,/(.+:)(.+)-([^]+)/,`$1`+j+`$2-$3$1`+Ln+(Zn(e,t+3)==108?`$3`:`$2-$3`))+e;case 115:return~Xn(e,`stretch`,0)?Nr(M(e,`stretch`,`fill-available`),t,n)+e:e}break;case 5152:case 5920:return M(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,i,a,o,s){return A+n+`:`+r+s+(i?A+n+`-span:`+(a?o:o-+r)+s:``)+e});case 4949:if(Zn(e,t+6)===121)return M(e,`:`,`:`+j)+e;break;case 6444:switch(Zn(e,Zn(e,14)===45?18:11)){case 120:return M(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,`$1`+j+(Zn(e,14)===45?`inline-`:``)+`box$3$1`+j+`$2$3$1`+A+`$2box$3`)+e;case 100:return M(e,`:`,`:`+A)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return M(e,`scroll-`,`scroll-snap-`)+e}return e}function Pr(e,t){for(var n=``,r=0;r<e.length;r++)n+=t(e[r],r,e,t)||``;return n}function Fr(e,t,n,r){switch(e.type){case Un:if(e.children.length)break;case Vn:case Bn:return e.return=e.return||e.value;case Rn:return``;case Hn:return e.return=e.value+`{`+Pr(e.children,r)+`}`;case zn:if(!$n(e.value=e.props.join(`,`)))return``}return $n(n=Pr(e.children,r))?e.return=e.value+`{`+n+`}`:``}function Ir(e){var t=er(e);return function(n,r,i,a){for(var o=``,s=0;s<t;s++)o+=e[s](n,r,i,a)||``;return o}}function Lr(e){return function(t){t.root||(t=t.return)&&e(t)}}function Rr(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Bn:e.return=Nr(e.value,e.length,n);return;case Hn:return Pr([dr(e,{value:M(e.value,`@`,`@`+j)})],r);case zn:if(e.length)return nr(n=e.props,function(t){switch(Yn(t,r=/(::plac\w+|:read-\w+)/)){case`:read-only`:case`:read-write`:fr(dr(e,{props:[M(t,/:(read-\w+)/,`:`+Ln+`$1`)]})),fr(dr(e,{props:[t]})),Kn(e,{props:rr(n,r)});break;case`::placeholder`:fr(dr(e,{props:[M(t,/:(plac\w+)/,`:`+j+`input-$1`)]})),fr(dr(e,{props:[M(t,/:(plac\w+)/,`:`+Ln+`$1`)]})),fr(dr(e,{props:[M(t,/:(plac\w+)/,A+`input-$1`)]})),fr(dr(e,{props:[t]})),Kn(e,{props:rr(n,r)});break}return``})}}var zr=c(In()),Br={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Vr=typeof process<`u`&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||`data-styled`,Hr=`active`,Ur=`data-styled-version`,Wr=`6.1.19`,Gr=`/*!sc*/
`,Kr=typeof window<`u`&&typeof document<`u`,qr=!!(typeof SC_DISABLE_SPEEDY==`boolean`?SC_DISABLE_SPEEDY:typeof process<`u`&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==``?{}.REACT_APP_SC_DISABLE_SPEEDY!==`false`&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<`u`&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==``&&{}.SC_DISABLE_SPEEDY!==`false`&&{}.SC_DISABLE_SPEEDY),Jr=Object.freeze([]),Yr=Object.freeze({});function Xr(e,t,n){return n===void 0&&(n=Yr),e.theme!==n.theme&&e.theme||t||n.theme}var Zr=new Set(`a.abbr.address.area.article.aside.audio.b.base.bdi.bdo.big.blockquote.body.br.button.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.keygen.label.legend.li.link.main.map.mark.menu.menuitem.meta.meter.nav.noscript.object.ol.optgroup.option.output.p.param.picture.pre.progress.q.rp.rt.ruby.s.samp.script.section.select.small.source.span.strong.style.sub.summary.sup.table.tbody.td.textarea.tfoot.th.thead.time.tr.track.u.ul.use.var.video.wbr.circle.clipPath.defs.ellipse.foreignObject.g.image.line.linearGradient.marker.mask.path.pattern.polygon.polyline.radialGradient.rect.stop.svg.text.tspan`.split(`.`)),Qr=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,$r=/(^-|-$)/g;function ei(e){return e.replace(Qr,`-`).replace($r,``)}var ti=/(a)(d)/gi,ni=52,ri=function(e){return String.fromCharCode(e+(e>25?39:97))};function ii(e){var t,n=``;for(t=Math.abs(e);t>ni;t=t/ni|0)n=ri(t%ni)+n;return(ri(t%ni)+n).replace(ti,`$1-$2`)}var ai,oi=5381,si=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},ci=function(e){return si(oi,e)};function li(e){return ii(ci(e)>>>0)}function ui(e){return e.displayName||e.name||`Component`}function di(e){return typeof e==`string`&&!0}var fi=typeof Symbol==`function`&&Symbol.for,pi=fi?Symbol.for(`react.memo`):60115,mi=fi?Symbol.for(`react.forward_ref`):60112,hi={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},gi={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},_i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},vi=((ai={})[mi]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ai[pi]=_i,ai);function yi(e){return(`type`in(t=e)&&t.type.$$typeof)===pi?_i:`$$typeof`in e?vi[e.$$typeof]:hi;var t}var bi=Object.defineProperty,xi=Object.getOwnPropertyNames,Si=Object.getOwnPropertySymbols,Ci=Object.getOwnPropertyDescriptor,wi=Object.getPrototypeOf,Ti=Object.prototype;function Ei(e,t,n){if(typeof t!=`string`){if(Ti){var r=wi(t);r&&r!==Ti&&Ei(e,r,n)}var i=xi(t);Si&&(i=i.concat(Si(t)));for(var a=yi(e),o=yi(t),s=0;s<i.length;++s){var c=i[s];if(!(c in gi||n&&n[c]||o&&c in o||a&&c in a)){var l=Ci(t,c);try{bi(e,c,l)}catch{}}}}return e}function Di(e){return typeof e==`function`}function Oi(e){return typeof e==`object`&&`styledComponentId`in e}function ki(e,t){return e&&t?`${e} ${t}`:e||t||``}function Ai(e,t){if(e.length===0)return``;for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function ji(e){return typeof e==`object`&&!!e&&e.constructor.name===Object.name&&!(`props`in e&&e.$$typeof)}function Mi(e,t,n){if(n===void 0&&(n=!1),!n&&!ji(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Mi(e[r],t[r]);else if(ji(t))for(var r in t)e[r]=Mi(e[r],t[r]);return e}function Ni(e,t){Object.defineProperty(e,`toString`,{value:t})}function Pi(e){var t=[...arguments].slice(1);return Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(`, `)}`:``}`)}var Fi=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,i=r;e>=i;)if((i<<=1)<0)throw Pi(16,`${e}`);this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var a=r;a<i;a++)this.groupSizes[a]=0}for(var o=this.indexOfGroup(e+1),s=(a=0,t.length);a<s;a++)this.tag.insertRule(o,t[a])&&(this.groupSizes[e]++,o++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var i=n;i<r;i++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t=``;if(e>=this.length||this.groupSizes[e]===0)return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n,a=r;a<i;a++)t+=`${this.tag.getRule(a)}${Gr}`;return t},e}(),Ii=new Map,Li=new Map,Ri=1,zi=function(e){if(Ii.has(e))return Ii.get(e);for(;Li.has(Ri);)Ri++;var t=Ri++;return Ii.set(e,t),Li.set(t,e),t},N=function(e,t){Ri=t+1,Ii.set(e,t),Li.set(t,e)},P=`style[${Vr}][${Ur}="${Wr}"]`,Bi=RegExp(`^${Vr}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),Vi=function(e,t,n){for(var r,i=n.split(`,`),a=0,o=i.length;a<o;a++)(r=i[a])&&e.registerName(t,r)},Hi=function(e,t){for(var n=(t.textContent??``).split(Gr),r=[],i=0,a=n.length;i<a;i++){var o=n[i].trim();if(o){var s=o.match(Bi);if(s){var c=0|parseInt(s[1],10),l=s[2];c!==0&&(N(l,c),Vi(e,l,s[3]),e.getTag().insertRules(c,r)),r.length=0}else r.push(o)}}},Ui=function(e){for(var t=document.querySelectorAll(P),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(Vr)!==Hr&&(Hi(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function Wi(){return typeof __webpack_nonce__<`u`?__webpack_nonce__:null}var Gi=function(e){var t=document.head,n=e||t,r=document.createElement(`style`),i=function(e){var t=Array.from(e.querySelectorAll(`style[${Vr}]`));return t[t.length-1]}(n),a=i===void 0?null:i.nextSibling;r.setAttribute(Vr,Hr),r.setAttribute(Ur,Wr);var o=Wi();return o&&r.setAttribute(`nonce`,o),n.insertBefore(r,a),r},Ki=function(){function e(e){this.element=Gi(e),this.element.appendChild(document.createTextNode(``)),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var i=t[n];if(i.ownerNode===e)return i}throw Pi(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:``},e}(),qi=function(){function e(e){this.element=Gi(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:``},e}(),Ji=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:``},e}(),Yi=Kr,Xi={isServer:!Kr,useCSSOMInjection:!qr},Zi=function(){function e(e,t,n){e===void 0&&(e=Yr),t===void 0&&(t={});var r=this;this.options=Pn(Pn({},Xi),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Kr&&Yi&&(Yi=!1,Ui(this)),Ni(this,function(){return function(e){for(var t=e.getTag(),n=t.length,r=``,i=function(n){var i=function(e){return Li.get(e)}(n);if(i===void 0)return`continue`;var a=e.names.get(i),o=t.getGroup(n);if(a===void 0||!a.size||o.length===0)return`continue`;var s=`${Vr}.g${n}[id="${i}"]`,c=``;a!==void 0&&a.forEach(function(e){e.length>0&&(c+=`${e},`)}),r+=`${o}${s}{content:"${c}"}${Gr}`},a=0;a<n;a++)i(a);return r}(r)})}return e.registerId=function(e){return zi(e)},e.prototype.rehydrate=function(){!this.server&&Kr&&Ui(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Pn(Pn({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new Ji(n):t?new Ki(n):new qi(n)}(this.options),new Fi(e));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(zi(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(zi(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(zi(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Qi=/&/g,$i=/^\s*\/\/.*$/gm;function ea(e,t){return e.map(function(e){return e.type===`rule`&&(e.value=`${t} ${e.value}`,e.value=e.value.replaceAll(`,`,`,${t} `),e.props=e.props.map(function(e){return`${t} ${e}`})),Array.isArray(e.children)&&e.type!==`@keyframes`&&(e.children=ea(e.children,t)),e})}function ta(e){var t,n,r,i=e===void 0?Yr:e,a=i.options,o=a===void 0?Yr:a,s=i.plugins,c=s===void 0?Jr:s,l=function(e,r,i){return i.startsWith(n)&&i.endsWith(n)&&i.replaceAll(n,``).length>0?`.${t}`:e},u=c.slice();u.push(function(e){e.type===`rule`&&e.value.includes(`&`)&&(e.props[0]=e.props[0].replace(Qi,n).replace(r,l))}),o.prefix&&u.push(Rr),u.push(Fr);var d=function(e,i,a,s){i===void 0&&(i=``),a===void 0&&(a=``),s===void 0&&(s=`&`),t=s,n=i,r=RegExp(`\\${n}\\b`,`g`);var c=e.replace($i,``),l=Or(a||i?`${a} ${i} { ${c} }`:c);o.namespace&&(l=ea(l,o.namespace));var d=[];return Pr(l,Ir(u.concat(Lr(function(e){return d.push(e)})))),d};return d.hash=c.length?c.reduce(function(e,t){return t.name||Pi(15),si(e,t.name)},oi).toString():``,d}var na=new Zi,ra=ta(),ia=_.createContext({shouldForwardProp:void 0,styleSheet:na,stylis:ra});ia.Consumer;var aa=_.createContext(void 0);function oa(){return(0,_.useContext)(ia)}function sa(e){var t=(0,_.useState)(e.stylisPlugins),n=t[0],r=t[1],i=oa().styleSheet,a=(0,_.useMemo)(function(){var t=i;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t},[e.disableCSSOMInjection,e.sheet,e.target,i]),o=(0,_.useMemo)(function(){return ta({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:n})},[e.enableVendorPrefixes,e.namespace,n]);(0,_.useEffect)(function(){(0,zr.default)(n,e.stylisPlugins)||r(e.stylisPlugins)},[e.stylisPlugins]);var s=(0,_.useMemo)(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:a,stylis:o}},[e.shouldForwardProp,a,o]);return _.createElement(ia.Provider,{value:s},_.createElement(aa.Provider,{value:o},e.children))}var ca=function(){function e(e,t){var n=this;this.inject=function(e,t){t===void 0&&(t=ra);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,`@keyframes`))},this.name=e,this.id=`sc-keyframes-${e}`,this.rules=t,Ni(this,function(){throw Pi(12,String(n.name))})}return e.prototype.getName=function(e){return e===void 0&&(e=ra),this.name+e.hash},e}(),la=function(e){return e>=`A`&&e<=`Z`};function ua(e){for(var t=``,n=0;n<e.length;n++){var r=e[n];if(n===1&&r===`-`&&e[0]===`-`)return e;la(r)?t+=`-`+r.toLowerCase():t+=r}return t.startsWith(`ms-`)?`-`+t:t}var da=function(e){return e==null||!1===e||e===``},fa=function(e){var t,n,r=[];for(var i in e){var a=e[i];e.hasOwnProperty(i)&&!da(a)&&(Array.isArray(a)&&a.isCss||Di(a)?r.push(`${ua(i)}:`,a,`;`):ji(a)?r.push.apply(r,Fn(Fn([`${i} {`],fa(a),!1),[`}`],!1)):r.push(`${ua(i)}: ${t=i,(n=a)==null||typeof n==`boolean`||n===``?``:typeof n!=`number`||n===0||t in Br||t.startsWith(`--`)?String(n).trim():`${n}px`};`))}return r};function pa(e,t,n,r){if(da(e))return[];if(Oi(e))return[`.${e.styledComponentId}`];if(Di(e))return!Di(i=e)||i.prototype&&i.prototype.isReactComponent||!t?[e]:pa(e(t),t,n,r);var i;return e instanceof ca?n?(e.inject(n,r),[e.getName(r)]):[e]:ji(e)?fa(e):Array.isArray(e)?Array.prototype.concat.apply(Jr,e.map(function(e){return pa(e,t,n,r)})):[e.toString()]}function ma(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Di(n)&&!Oi(n))return!1}return!0}var ha=ci(Wr),ga=function(){function e(e,t,n){this.rules=e,this.staticRulesId=``,this.isStatic=(n===void 0||n.isStatic)&&ma(e),this.componentId=t,this.baseHash=si(ha,t),this.baseStyle=n,Zi.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):``;if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=ki(r,this.staticRulesId);else{var i=Ai(pa(this.rules,e,t,n)),a=ii(si(this.baseHash,i)>>>0);if(!t.hasNameForId(this.componentId,a)){var o=n(i,`.${a}`,void 0,this.componentId);t.insertRules(this.componentId,a,o)}r=ki(r,a),this.staticRulesId=a}else{for(var s=si(this.baseHash,n.hash),c=``,l=0;l<this.rules.length;l++){var u=this.rules[l];if(typeof u==`string`)c+=u;else if(u){var d=Ai(pa(u,e,t,n));s=si(s,d+l),c+=d}}if(c){var f=ii(s>>>0);t.hasNameForId(this.componentId,f)||t.insertRules(this.componentId,f,n(c,`.${f}`,void 0,this.componentId)),r=ki(r,f)}}return r},e}(),_a=_.createContext(void 0);_a.Consumer;var va={};function ya(e,t,n){var r=Oi(e),i=e,a=!di(e),o=t.attrs,s=o===void 0?Jr:o,c=t.componentId,l=c===void 0?function(e,t){var n=typeof e==`string`?ei(e):`sc`;va[n]=(va[n]||0)+1;var r=`${n}-${li(Wr+n+va[n])}`;return t?`${t}-${r}`:r}(t.displayName,t.parentComponentId):c,u=t.displayName,d=u===void 0?function(e){return di(e)?`styled.${e}`:`Styled(${ui(e)})`}(e):u,f=t.displayName&&t.componentId?`${ei(t.displayName)}-${t.componentId}`:t.componentId||l,p=r&&i.attrs?i.attrs.concat(s).filter(Boolean):s,m=t.shouldForwardProp;if(r&&i.shouldForwardProp){var h=i.shouldForwardProp;if(t.shouldForwardProp){var g=t.shouldForwardProp;m=function(e,t){return h(e,t)&&g(e,t)}}else m=h}var v=new ga(n,f,r?i.componentStyle:void 0);function y(e,t){return function(e,t,n){var r=e.attrs,i=e.componentStyle,a=e.defaultProps,o=e.foldedComponentIds,s=e.styledComponentId,c=e.target,l=_.useContext(_a),u=oa(),d=e.shouldForwardProp||u.shouldForwardProp,f=Xr(t,l,a)||Yr,p=function(e,t,n){for(var r,i=Pn(Pn({},t),{className:void 0,theme:n}),a=0;a<e.length;a+=1){var o=Di(r=e[a])?r(i):r;for(var s in o)i[s]=s===`className`?ki(i[s],o[s]):s===`style`?Pn(Pn({},i[s]),o[s]):o[s]}return t.className&&(i.className=ki(i.className,t.className)),i}(r,t,f),m=p.as||c,h={};for(var g in p)p[g]===void 0||g[0]===`$`||g===`as`||g===`theme`&&p.theme===f||(g===`forwardedAs`?h.as=p.forwardedAs:d&&!d(g,m)||(h[g]=p[g]));var v=function(e,t){var n=oa();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(i,p),y=ki(o,s);return v&&(y+=` `+v),p.className&&(y+=` `+p.className),h[di(m)&&!Zr.has(m)?`class`:`className`]=y,n&&(h.ref=n),(0,_.createElement)(m,h)}(b,e,t)}y.displayName=d;var b=_.forwardRef(y);return b.attrs=p,b.componentStyle=v,b.displayName=d,b.shouldForwardProp=m,b.foldedComponentIds=r?ki(i.foldedComponentIds,i.styledComponentId):``,b.styledComponentId=f,b.target=r?i.target:e,Object.defineProperty(b,`defaultProps`,{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=r?function(e){for(var t=[...arguments].slice(1),n=0,r=t;n<r.length;n++)Mi(e,r[n],!0);return e}({},i.defaultProps,e):e}}),Ni(b,function(){return`.${b.styledComponentId}`}),a&&Ei(b,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),b}function ba(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var xa=function(e){return Object.assign(e,{isCss:!0})};function Sa(e){var t=[...arguments].slice(1);if(Di(e)||ji(e))return xa(pa(ba(Jr,Fn([e],t,!0))));var n=e;return t.length===0&&n.length===1&&typeof n[0]==`string`?pa(n):xa(pa(ba(n,t)))}function Ca(e,t,n){if(n===void 0&&(n=Yr),!t)throw Pi(1,t);var r=function(r){var i=[...arguments].slice(1);return e(t,n,Sa.apply(void 0,Fn([r],i,!1)))};return r.attrs=function(r){return Ca(e,t,Pn(Pn({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return Ca(e,t,Pn(Pn({},n),r))},r}var wa=function(e){return Ca(ya,e)},F=wa;Zr.forEach(function(e){F[e]=wa(e)}),function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=ma(e),Zi.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,r){var i=r(Ai(pa(this.rules,t,n,r)),``),a=this.componentId+e;n.insertRules(a,a,i)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&Zi.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();function Ta(e){var t=[...arguments].slice(1),n=Ai(Sa.apply(void 0,Fn([e],t,!1)));return new ca(li(n),n)}(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return``;var n=Wi();return`<style ${Ai([n&&`nonce="${n}"`,`${Vr}="true"`,`${Ur}="${Wr}"`].filter(Boolean),` `)}>${t}</style>`},this.getStyleTags=function(){if(e.sealed)throw Pi(2);return e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)throw Pi(2);var n=e.instance.toString();if(!n)return[];var r=((t={})[Vr]=``,t[Ur]=Wr,t.dangerouslySetInnerHTML={__html:n},t),i=Wi();return i&&(r.nonce=i),[_.createElement(`style`,Pn({},r,{key:`sc-0-0`}))]},this.seal=function(){e.sealed=!0},this.instance=new Zi({isServer:!0}),this.sealed=!1}return e.prototype.collectStyles=function(e){if(this.sealed)throw Pi(2);return _.createElement(sa,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw Pi(3)},e})(),`${Vr}`;var Ea=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),I=c(o(((e,t)=>{t.exports=Ea()}))(),1),Da=Ta`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,Oa=Ta`
  from { opacity: 0; }
  to { opacity: 1; }
`,ka=F.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, #1d5527 0%, #2d2d2d 100%);
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: ${Oa} 0.3s ease-in;
`,Aa=F.div`
  width: 60px;
  height: 60px;
  border: 6px solid rgba(255, 255, 255, 0.1);
  border-top: 6px solid var(--secondary-color, #00ff00);
  border-radius: 50%;
  animation: ${Da} 1s linear infinite;
`,ja=F.p`
  margin-top: 20px;
  font-size: 32px;
  color: var(--primary-color, #ffffff);
  font-weight: 500;
  letter-spacing: 1px;
`,Ma=({})=>(0,I.jsxs)(ka,{children:[(0,I.jsx)(Aa,{}),(0,I.jsx)(ja,{children:` CARREGANDO...`})]});const Na=(e={})=>{let{imageSources:t=[],videoSources:n=[],minLoadingTime:r=500}=e,[i,a]=(0,_.useState)(!0);return(0,_.useEffect)(()=>{let e=Date.now(),i=!0;return(async()=>{try{document.readyState!==`complete`&&await new Promise(e=>{window.addEventListener(`load`,()=>e(),{once:!0})});let o=[];t.length>0&&t.forEach(e=>{o.push(new Promise(t=>{let n=new Image;n.onload=()=>t(),n.onerror=()=>{console.warn(`Failed to preload image: ${e}`),t()},n.src=e}))}),n.length>0&&n.forEach(e=>{o.push(new Promise(t=>{let n=document.createElement(`video`);n.preload=`metadata`,n.onloadedmetadata=()=>t(),n.onerror=()=>{console.warn(`Failed to preload video: ${e}`),t()},n.src=e}))}),await Promise.all(o);let s=Date.now()-e;s<r&&await new Promise(e=>setTimeout(e,r-s)),await new Promise(e=>setTimeout(e,100)),i&&a(!1)}catch(e){console.error(`Error during preload:`,e),i&&a(!1)}})(),()=>{i=!1}},[t,n,r]),{isLoading:i}},Pa=(e,t={})=>{let n=n=>{let{imageSources:r=[],videoSources:i=[],minLoadingTime:a=500,loadingText:o}=t,{isLoading:s}=Na({imageSources:r,videoSources:i,minLoadingTime:a});return s?(0,I.jsx)(Ma,{}):(0,I.jsx)(e,{...n})};return n.displayName=`withPageLoader(${e.displayName||e.name||`Component`})`,n};var Fa=``+new URL(`tarja-cabeçalho.png`,import.meta.url).href,Ia=``+new URL(`logo-vibra.png`,import.meta.url).href,La=``+new URL(`marca-dobra.png`,import.meta.url).href,Ra=``+new URL(`moto-dobra.png`,import.meta.url).href,za=``+new URL(`semaforo.png`,import.meta.url).href,Ba=``+new URL(`tarja-paradas.png`,import.meta.url).href,Va=Ta`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,Ha=Ta`
  from {
    transform: translateX(-20px);
  }
  to {
    transform: translateX(0);
  }
`;const Ua=F.div`
  position: relative;
  height: 3rem;
  width: 100%;
  font-family: var(--font-family);
  animation: ${Va} 1s ease-in-out, ${Ha} 1s ease-in-out;

  .title {
    position: absolute;
    left: 8rem;
    top: 50%;
    padding-top: 0.5rem;
    line-height: 1;
    transform: translateY(-50%);
    font-size: 34px;
  }

  .tarja-paradas {
    height: 3rem;
    width: 100%;
  }

  .tarja-icon {
    position: absolute;
    left: 2rem;
    bottom: 0;
    height: 8.9rem;
  }
`;var Wa=({title:e,iconSrc:t,iconAlt:n=``})=>(0,I.jsxs)(Ua,{children:[(0,I.jsx)(`img`,{className:`tarja-paradas`,src:Ba,alt:``}),(0,I.jsx)(`img`,{className:`tarja-icon`,src:t,alt:n}),(0,I.jsx)(`h3`,{className:`title`,children:e})]}),Ga=``+new URL(`avancar.png`,import.meta.url).href,Ka=``+new URL(`moto-dobra.webm`,import.meta.url).href,qa=``+new URL(`video-teaser.mp4`,import.meta.url).href;const Ja=F.div`
  width: 80%;
  margin: 0 auto;
`;var Ya=Ta`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;const Xa=F.button`
  align-self: flex-end;
  width: 11rem;
  cursor: ${e=>e.$canAdvance===!1?`not-allowed`:`pointer`};
  border: none;
  background: transparent;
  padding: 0;

  /* Estilos condicionais baseados em $canAdvance */
  opacity: ${e=>e.$canAdvance===!1?.5:1};
  filter: ${e=>e.$canAdvance===!1?`grayscale(100%)`:`none`};

  /* Animação de pulsar suave */
  animation: ${Ya} 2s ease-in-out infinite;
  animation-play-state: ${e=>e.$canAdvance===!1?`paused`:`running`};

  /* Transição suave para hover */
  transition: all 0.3s ease;

  &:hover {
    transform: ${e=>e.$canAdvance===!1?`scale(1)`:`scale(1.1)`};
    animation-play-state: paused; /* Para a animação no hover */
  }

  &:active {
    transform: ${e=>e.$canAdvance===!1?`scale(1)`:`scale(0.95)`};
  }

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;var Za=Ta`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,Qa=Ta`

    0% {
      opacity: 0;
    }
    35% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  `;const $a=F.main`
  overflow-x: hidden;
  .tarja {
    height: 3rem;
    width: 100%;
  }
`,eo=F.section`
  height: 941px;
  position: relative;
`,to=F(Ja)`
  height: 100%;
  margin: 0 auto;
  margin-top: -1rem;
  z-index: 11;
  display: flex;
  flex-direction: column;

  animation: ${Qa} 2s ease-in-out;

  justify-content: space-between;

  .intro {
    margin-top: 3rem;
  }
  .logo {
    height: 6rem;
    margin-bottom: 6rem;
  }
  .title {
    max-width: 500px;
    font-weight: 700;
    font-style: Bold Italic;
    font-size: 40px;
    line-height: 1.2;
  }
`,no=F.div`
  position: absolute;
  z-index: -1;
  height: 100%;
  width: 100%;
  top: 0;
  background-color: #004d21;
  img {
    position: absolute;
  }

  .video-test {
    position: absolute;
    top: 0;
    right: 0;
    height: 80%;
    @keyframes slideLeft {
      from {
        transform: translateX(10%);
      }
      to {
        transform: translateX(0);
      }
    }

    animation: ${Za} 1.5s ease-in-out, slideLeft 1s ease-in-out;
    z-index: 5;
  }

  .intro-image {
    top: 0;
    right: 0;
    height: 80%;
    @keyframes slideLeft {
      from {
        transform: translateX(10%);
      }
      to {
        transform: translateX(0);
      }
    }

    animation: ${Za} 1.5s ease-in-out, slideLeft 1s ease-in-out;
  }
  .marca {
    bottom: 0;
    left: 0;
    transform: translateX(-30%);

    height: 80%;
    animation: ${Qa} 2s ease-in-out;
  }
`,ro=F.section`
  padding: 4rem 20% 6rem;
  background-color: var(--secondary-background);
  display: flex;

  justify-content: center;
  flex-direction: column;

  align-items: center;

  .video-container {
    width: 100%;
    padding: 2rem;
    background: linear-gradient(to right, #7d7676ff, #3f3b3bff, #686767ff);
    border-radius: 16px;
    border: #808080 solid 2px;
    box-shadow: 4px 10px 12px rgba(0, 0, 0, 0.5);
    margin-bottom: 2rem;
  }

  video {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 12px;
    display: block;
    box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.7);
  }
`;var io=Pa(()=>{let e=Je();return(0,I.jsxs)($a,{children:[(0,I.jsx)(`img`,{className:`tarja`,src:Fa,alt:``}),(0,I.jsxs)(eo,{children:[(0,I.jsxs)(no,{children:[(0,I.jsx)(`img`,{className:`marca`,src:La,alt:``}),(0,I.jsx)(`video`,{className:`video-test`,src:Ka,autoPlay:!0,loop:!0,muted:!0})]}),(0,I.jsxs)(to,{children:[(0,I.jsxs)(`div`,{className:`intro`,children:[(0,I.jsx)(`img`,{className:`logo`,src:Ia,alt:`Logo Vibra`}),(0,I.jsx)(`h1`,{className:`title`,children:`Treinamento EAD para Condutores de Motocicletas`})]}),(0,I.jsx)(Wa,{title:`COMECE AQUI`,iconSrc:za,iconAlt:`Semáforo`})]})]}),(0,I.jsxs)(ro,{children:[(0,I.jsx)(`div`,{className:`video-container`,children:(0,I.jsx)(`video`,{src:qa,title:`Teaser Vibra Motos`,controls:!0,width:`100%`})}),(0,I.jsx)(Xa,{onClick:()=>{e(`/parada1`)},children:(0,I.jsx)(`img`,{src:Ga,alt:`Avançar`})})]})]})},{imageSources:[Fa,Ia,La,Ra,za,Ga],videoSources:[Ka,qa],minLoadingTime:500,loadingText:`Carregando módulo...`}),ao=``+new URL(`retrovisor.png`,import.meta.url).href,oo=``+new URL(`retrovisor-body.png`,import.meta.url).href,so=``+new URL(`retrovisor-back.png`,import.meta.url).href,co=``+new URL(`retrovisor-title.png`,import.meta.url).href,lo=``+new URL(`tarja-listra.jpg`,import.meta.url).href,uo=Ta`
  0% {
    opacity: 0;
    transform: translateX(-50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`,fo=Ta`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,po=Ta`
  0% {
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    transform: translate(-50%, -50%) scale(1.1);
  }
`;const mo=F.main`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  width: 100%;
`,ho=F.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;

  padding: 1rem 5rem;
  .section-title {
    position: relative;
    animation: ${uo} 1s ease-out forwards;
  }

  .section-title-image {
    width: 500px;
  }
  .section-title-text {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 32px;
    text-align: center;
  }

  .section-body {
    position: relative;
    opacity: 0;
    animation: ${fo} 1s ease-out 0.5s forwards;
  }
  .paragraphs {
    position: absolute;
    left: 0;
    top: 0;
    padding: 4rem 4.6rem;
    color: #000;
    p {
      margin-bottom: 0.5rem;
    }
  }

  .section-body-image {
    width: 600px;
    margin-bottom: 4rem;
  }
  .retrovisor-image {
    position: absolute;
    top: 85%;
    left: 50%;
    width: 600px;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .retrovisor-image-back {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 450px;
    animation: ${po} 1.5s ease-out 1s forwards;
  }
  .retrovisor-image-front {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 450px;
    z-index: 1;
  }
`,go=F.img`
  width: 100%;
  margin-top: 2rem;
  z-index: -1;
`;var L=({paragraphs:e,nextRoute:t,nextButtonAlt:n=`Avançar`,imgSrc:r})=>{let i=Je();return(0,I.jsxs)(mo,{children:[(0,I.jsxs)(ho,{children:[(0,I.jsxs)(`div`,{className:`section-title`,children:[(0,I.jsx)(`img`,{className:`section-title-image`,src:co,alt:``}),(0,I.jsx)(`div`,{className:`section-title-text`,children:`HORA DE AJUSTAR O RETROVISOR`})]}),(0,I.jsxs)(`div`,{className:`section-body`,children:[(0,I.jsx)(`img`,{className:`section-body-image`,src:oo,alt:``}),(0,I.jsx)(`div`,{className:`paragraphs`,children:e.map((e,t)=>(0,I.jsx)(`p`,{children:e},t))}),(0,I.jsxs)(`div`,{className:`retrovisor-image`,children:[(0,I.jsx)(`img`,{className:`retrovisor-image-back`,src:r||``+new URL(`retrovisor-back.png`,import.meta.url).href,alt:``}),(0,I.jsx)(`img`,{className:`retrovisor-image-front`,src:ao,alt:``})]})]}),(0,I.jsx)(Xa,{onClick:()=>{i(t)},children:(0,I.jsx)(`img`,{src:Ga,alt:n})})]}),(0,I.jsx)(go,{src:lo,alt:``})]})},R=Pa(()=>(0,I.jsx)(L,{paragraphs:[`O Brasil é, sem dúvida, um país de motociclistas. A moto simboliza liberdade, praticidade e paixão, mas também carrega riscos elevados. Entender o contexto, respeitar as regras e pilotar de forma consciente é o que transforma essa liberdade em algo sustentável.`,(0,I.jsxs)(I.Fragment,{children:[`Ao final, fica uma verdade simples e poderosa:`,` `,(0,I.jsx)(`b`,{children:`não importa se o destino é o trabalho, a estrada ou a trilha… A chegada só tem sentido se for com vida.`})]}),`O Brasil é apaixonado por motos. Mas paixão sem consciência pode virar tragédia. Vale mais chegar um pouco depois do que não chegar. Concorda?`],nextRoute:`/atividade1`,nextButtonAlt:`Ir para Atividade 1`}),{imageSources:[so],minLoadingTime:400,loadingText:`Carregando...`}),_o=``+new URL(`retrovisor-back-2.png`,import.meta.url).href,vo=Pa(()=>(0,I.jsx)(L,{imgSrc:_o,paragraphs:[`Pilotar com segurança é mais do que seguir regras, é assumir um compromisso diário com a vida. Cada vez que um motociclista veste o capacete, revisa sua moto e decide respeitar os limites, ele aumenta as chances de voltar para casa.`,`A moto pode representar liberdade, praticidade ou aventura, mas nenhuma dessas experiências tem valor se não forem vividas com responsabilidade.`,(0,I.jsxs)(I.Fragment,{children:[`No fim, o verdadeiro destino de cada viagem é sempre o mesmo:`,` `,(0,I.jsx)(`b`,{children:`voltar vivo e inteiro, pronto para a próxima jornada.`})]})],nextRoute:`/atividade2`,nextButtonAlt:`Ir para Atividade 2`}),{imageSources:[_o],minLoadingTime:400,loadingText:`Carregando...`}),yo=``+new URL(`retrovisor-back-3.png`,import.meta.url).href,bo=()=>(0,I.jsx)(L,{imgSrc:yo,paragraphs:[`As técnicas de pilotagem são a diferença entre improvisar e estar preparado. Cada curva bem-feita, cada frenagem controlada e cada ultrapassagem consciente representam não apenas domínio da moto, mas também respeito à vida.`,`Pilotar com técnica não é luxo, é sobrevivência. A moto responde ao piloto na mesma medida em que o piloto respeita seus limites.`,`Ao final, a mensagem é clara: liberdade sobre duas rodas só faz sentido quando vem acompanhada de técnica, preparo e responsabilidade.`],nextRoute:`/quiz`,nextButtonAlt:`Ir para Quiz Final`});const z=F.div`
  margin-top: 3rem;
  display: flex;

  ${e=>{switch(e.variant){case`column`:return Sa`
          flex-direction: column;
          margin-left: ${e.marginLeft||`5rem`};
        `;case`flex`:return Sa`
          flex-direction: column;
          .flex {
            display: flex;
          }
        `;case`centered`:return Sa`
          flex-direction: column;
          margin: ${e.margin||`0 5rem`};
        `;default:return Sa``}}}

  .flex {
    display: flex;
    margin-bottom: 2rem;
    gap: 1rem;
  }

  .image-column {
    padding: 0 5rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`,xo=F.div`
  background-color: var(--text-background-color);
  padding: 1rem 2rem;
  color: #000;
  font-size: 20px;
  font-family: var(--font-family);

  ${e=>Sa`
    width: ${e.width||`auto`};
    margin-left: ${e.marginLeft||`5rem`};
    margin-right: ${e.marginRight||`1rem`};
    ${e.flex&&`flex: ${e.flex};`}
    ${e.centered&&`margin: 0 auto;`}
  `}

  .chamada,
  .conclusao {
    font-size: 20px;
    line-height: 1.6;

    text-align: justify;
    margin-bottom: 2rem;
    width: ${e=>e.width===`65%`?`100%`:`75%`};
  }

  .conclusao {
    margin-bottom: 0;
    margin-top: 2.5rem;
  }

  b {
    display: block;
    font-size: 20px;
    color: var(--secondary-color);
    margin-bottom: 1rem;
  }
`,B=F.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
  font-family: var(--font-family);
  ${e=>e.flex&&`flex: ${e.flex};`}
  ${e=>e.marginLeft&&`margin-left: ${e.marginLeft};`}

  .number {
    font-size: 10rem;
    line-height: 1;
    color: var(--background-color);
    margin: 0;
  }

  .title-text {
    display: flex;
    flex-direction: column;
    gap: 8px;

    h2 {
      font-size: 40px;
      font-weight: 700;
      line-height: 0.7;
      color: var(--primary-color);
      margin: 0;
    }

    span {
      font-size: ${e=>e.spanSize||`58px`};
      font-weight: 700;
      line-height: 0.7;
      color: var(--secondary-color);
      margin: 0;
    }
  }
`,So=F.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  p {
    font-size: 20px;
    line-height: 1.6;
    color: var(--paragraph-color);
    margin: 0;
    ${e=>!e.hasCustomBullets&&`text-align: justify;`}

    .paragraph-title {
      font-weight: 700;
      font-style: normal;
      color: var(--secondary-color);
    }

    &.conclusion {
      margin-top: 2rem;
      padding-top: 1rem;
    }
  }

  ${e=>e.hasCustomBullets&&Sa`
      ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      li {
        font-size: 20px;
        line-height: 1.6;
        color: var(--paragraph-color);
        text-align: justify;
        margin: 0;
        position: relative;
        padding-left: 1.2rem;

        &::before {
          content: "•";
          color: var(--paragraph-color);
          font-size: 20px;
          position: absolute;
          left: 0;
          top: -0.2rem;
        }

        .bullet-title {
          font-weight: 700;
          font-style: normal;
          color: var(--paragraph-color);
        }
      }
    `}
`;F(xo)`
  .chamada,
  .conclusao {
    width: 75%;
  }

  .conclusao {
    margin-bottom: 0;
    margin-top: 2.5rem;
  }
`,F(So)`
  p {
    text-align: justify;

    .paragraph-title {
      color: var(--secondary-color);
    }
  }
`;const V=F.img`
  max-width: 100%;
  height: auto;
`;F(V)`
  height: 150px;
`,F(V)`
  width: 52%;
  height: auto;
  object-fit: contain;
  padding: 0 2rem;
  margin-top: -4rem;
`,F(V)`
  width: 50%;
  object-fit: contain;
  margin-top: -7rem;
  padding: 3rem;
  padding-top: 0rem;
`,F(V)`
  width: 100%;
  object-fit: contain;
  padding: 3rem;
  padding-top: 0rem;
`;const Co=F.div`
  margin-top: 7rem;
  margin-bottom: 7rem;
  display: flex;
  flex-direction: column;

  .content {
    margin-top: 1.5rem;
    display: flex;
  }

  .navigation {
    margin-top: 2rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .next-button,
    .back-button {
      width: 11rem;
      object-fit: contain;
      cursor: pointer;
    }
  }

  .tarja-listra {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;
    width: 100%;

    img {
      width: 100%;
      height: auto;
      object-fit: contain;
    }
  }
`,wo=F.div`
  margin-top: 3rem;
  display: flex;

  .flex {
    display: flex;
    margin-bottom: 2rem;
    gap: ${e=>e.gap||`1rem`};
  }
`;F(wo)`
  flex-direction: column;
  margin-left: ${e=>e.marginLeft||`5rem`};
  margin-right: ${e=>e.marginRight||`0`};
  margin: ${e=>e.margin||`auto`};
`,F(wo)`
  flex-direction: column;
  margin: ${e=>e.margin||`0 5rem`};
  margin-top: 3rem;
`,F(wo)`
  flex-direction: column;
  margin: ${e=>e.margin||`0 5rem`};
  margin-top: 3rem;

  .image-column {
    padding: 0 5rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;const To=F.div`
  ${e=>Sa`
    width: ${e.width||`auto`};
    margin: ${e.margin||`0`};
    ${e.flex&&`flex: ${e.flex};`}
  `}

  .chamada,
  .conclusao {
    font-size: 20px;
    line-height: 1.6;
    text-align: justify;
    margin-bottom: 2rem;
    width: 100%;
  }

  .conclusao {
    margin-bottom: 0;
    margin-top: 2.5rem;
  }
`,Eo=F.div`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  margin-left: ${e=>e.marginLeft||`5rem`};
  margin-bottom: ${e=>e.marginBottom||`2rem`};
  width: ${e=>e.width||`auto`};

  .number {
    font-size: 120px;
    font-weight: bold;
    color: var(--secondary-color);
    margin: 0;
    line-height: 0.8;
    font-family: var(--font-family);
  }

  .title-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: var(--font-family);

    h2 {
      font-size: 52px;
      font-weight: bold;
      color: var(--primary-color);
      margin: 0;
      line-height: 1;

      span {
        color: var(--secondary-color);
      }
    }

    .title {
      color: var(--primary-color);
    }
  }
`,Do=F.div`
  p {
    font-size: 20px;
    line-height: 1.6;
    color: var(--paragraph-color);
    text-align: justify;
    margin-bottom: 1rem;

    &:last-child {
      margin-bottom: 0;
    }

    .paragraph-title,
    .bullet-title {
      font-weight: bold;
      color: var(--paragraph-color);
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    li {
      font-size: 20px;
      line-height: 1.6;
      color: var(--paragraph-color);
      text-align: justify;
      margin: 0;
      position: relative;
      padding-left: 1.2rem;

      &::before {
        content: "•";
        color: var(--paragraph-color);
        font-size: 20px;
        position: absolute;
        left: 0;
        top: -2px;
      }

      .bullet-title {
        font-weight: bold;
        color: var(--paragraph-color);
      }
    }
  }
`,Oo=F.img`
  max-width: 100%;
  height: auto;
  object-fit: contain;
`;F(Oo)`
  width: 100%;
  margin: 2rem 0;
`,F(Oo)`
  width: 45%;
  margin-right: 2rem;
`,F(Oo)`
  width: 35%;
  object-fit: contain;
`,F(Oo)`
  width: 35%;
  margin-left: 1rem;
`,F(Oo)`
  width: 100%;
  margin: 1rem 0;
`,F(To)`
  margin-left: 0;
  margin-right: 5rem;
`;var ko=`
  repeating-linear-gradient(
    115deg,
    #004415 0px,
    #004415 6px,       /* 3 partes = 12px */
    #0101fc 6px,
    #0101fc 10px,       /* 2 partes = 8px */
    #fff 10px,
    #fff 12px,          /* 1 parte = 4px */
    #feda00 12px,
    #feda00 16px,       /* 1 parte = 4px */
    #fff 16px,
    #fff 18px,          /* 2 partes = 8px */
    #288300 18px,
    #288300 22px        /* 2 partes = 8px */
  )
`,Ao=F.div`
  position: relative;

  /* Aplicar as props de layout que seriam do BaseText */
  width: ${e=>e.$width||`auto`};
  margin-left: ${e=>e.$marginLeft||`5rem`};
  margin-right: ${e=>e.$marginRight||`1rem`};
  ${e=>e.$flex&&`flex: ${e.$flex};`}
  ${e=>e.$centered&&`margin: 0 auto;`}
  
  /* Tarja superior - sem padding, encosta na margem */
  &::before {
    content: "";
    display: block;
    width: 100%;
    height: ${e=>e.$tarjaHeight};
    background: ${ko};
  }

  /* Tarja inferior - sem padding, encosta na margem */
  &::after {
    content: "";
    display: block;
    width: 100%;
    height: ${e=>e.$tarjaHeight};
    background: ${ko};
  }
`,jo=F.div`
  background-color: var(--text-background-color);
  padding: 2rem 2rem; /* Padding apenas no conteúdo */
  color: #000;
  font-size: 20px;
  font-family: var(--font-family);

  .chamada,
  .conclusao {
    font-size: 20px;
    line-height: 1.6;
    text-align: justify;
    margin-bottom: 2rem;
    width: 75%;
  }

  .conclusao {
    margin-bottom: 0;
    margin-top: 2.5rem;
  }

  b {
    display: block;
    font-size: 20px;
    color: var(--secondary-color);
    margin-bottom: 1rem;
  }
`;const H=({children:e,tarjaHeight:t=`1.75rem`,className:n,width:r,marginLeft:i,marginRight:a,flex:o,centered:s})=>(0,I.jsx)(Ao,{$tarjaHeight:t,$width:r,$marginLeft:i,$marginRight:a,$flex:o,$centered:s,className:n,children:(0,I.jsx)(jo,{children:e})}),Mo=F(H).attrs({tarjaHeight:`1.75rem`})``,No=F(H).attrs({tarjaHeight:`2.25rem`})``;F(H).attrs({tarjaHeight:`1.5rem`})``;var Po=F.img`
  width: ${e=>e.$width||`55%`};
  height: ${e=>e.$height||`auto`};
  object-fit: ${e=>e.$objectFit||`contain`};
  margin: ${e=>e.$margin||`0`};
  border-radius: ${e=>e.$borderRadius||`0`};
  max-width: 100%;
  display: block;
`,Fo=({src:e,alt:t,width:n,height:r,objectFit:i,className:a,margin:o,borderRadius:s})=>(0,I.jsx)(Po,{src:e,alt:t,$width:n,$height:r,$objectFit:i,className:a,$margin:o,$borderRadius:s});F(Fo)`
  width: 55%;
`,F(Fo)`
  width: 100%;
  margin: 2rem 0;
`,F(Fo)`
  width: 45%;
  margin-right: 2rem;
`,F(Fo)`
  width: 35%;
  object-fit: contain;
`,F(Fo)`
  width: 35%;
  margin-left: 1rem;
`,F(Fo)`
  width: 100%;
  margin: 1rem 0;
`;var Io=Fo;const Lo=F(wo)`
  .flex {
    display: flex;
    flex-direction: column;
  }
`,Ro=F(Mo)`
  margin-right: 0;
  margin-left: 5rem;
`,zo=F(Eo)`
  margin-left: 5rem;
  margin-bottom: 0;
`,Bo=Do;var Vo=``+new URL(`mapa-moto.png`,import.meta.url).href,Ho=F.p`
  margin: 1rem 0;
  line-height: 1.5;

  .paragraph-title {
    color: var(--paragraph-color);
    font-weight: bold;
  }
`,Uo=F.li`
  text-align: justify;
  margin: 0.5rem 0;
  line-height: 1.5;

  .bullet-title {
    color: var(--paragraph-color);
    font-weight: bold;
  }
`,Wo=F.ul`
  padding-left: 1.5rem;
  margin: 1rem 0;
`;const Go=({children:e,className:t})=>(0,I.jsx)(Ho,{className:t,children:e}),Ko=({text:e,className:t})=>{let n=e.match(/^([^:]+:)\s*(.*)$/);if(n){let[,e,r]=n;return(0,I.jsxs)(Ho,{className:t,children:[(0,I.jsx)(`span`,{className:`paragraph-title`,children:e}),` `,r]})}return(0,I.jsx)(Ho,{className:t,children:e})},qo=({items:e,className:t})=>(0,I.jsx)(Wo,{className:t,children:e.map((e,t)=>{let n=e.match(/^([^:]+:)\s*(.*)$/);if(n){let[,e,r]=n;return(0,I.jsxs)(Uo,{children:[(0,I.jsx)(`span`,{className:`bullet-title`,children:e}),` `,r]},t)}return(0,I.jsx)(Uo,{children:e},t)})});var Jo=({number:e=`1`,paragraphs:t=[`O Brasil é um dos países com maior número de motocicletas no mundo. Segundo dados do Departamento Nacional de Trânsito (Denatran), em 2023 já eram mais de 31 milhões de motos registradas, representando cerca de 30% de toda a frota de veículos. Esse número não para de crescer, especialmente em cidades médias e pequenas, onde a moto é uma solução mais barata e prática do que o transporte público.`,`Mas a moto não é apenas um meio de transporte. Para milhões de brasileiros, ela é uma ferramenta de trabalho: mototaxistas, entregadores, profissionais de manutenção e tantos outros dependem dela para garantir a própria renda. Por outro lado, para muitos apaixonados, a moto é também sinônimo de lazer, seja em passeios de fim de semana, seja em viagens longas pelas estradas do país.`,`Agora, você pode estar pensando: "Mas será que isso realmente se aplica a mim?" Pois saiba que, independentemente de ser novato ou veterano, o que vamos explorar aqui serve para todos que compartilham essa paixão pelas duas rodas.`],imageSrc:n=Vo,imageAlt:r=`alt prosivório`})=>(0,I.jsxs)(Lo,{className:`content`,children:[(0,I.jsxs)(`div`,{className:`flex`,children:[(0,I.jsxs)(zo,{children:[(0,I.jsx)(`h1`,{className:`number`,children:e}),(0,I.jsxs)(`div`,{className:`title-text`,children:[(0,I.jsx)(`h2`,{children:`O país dos`}),(0,I.jsx)(`h2`,{children:(0,I.jsx)(`span`,{children:`motociclistas`})})]})]}),(0,I.jsx)(Ro,{children:(0,I.jsx)(Bo,{children:t.map((e,t)=>(0,I.jsx)(Go,{children:e},t))})})]}),(0,I.jsx)(Io,{className:`content-image`,src:n,alt:r,width:`50%`,objectFit:`contain`})]});const Yo=F(z)`
  flex-direction: column;
  .flex {
    gap: 0;
  }
`,Xo=F(No)`
  margin: 0 auto;
  width: 90%;
  border-radius: 16px;
  overflow: hidden;
  animation: slideIn 0.5s ease-out;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  &::before {
    display: none;
  }
  &::after {
    border-radius: 0 0 16px 16px;
  }

  /* Aplicar border-radius e padding no container de conteúdo */
  > div {
    border-radius: 16px 16px 0 0;
    padding: 2.2rem 2rem;
  }

  /* Padding específico quando é o slide 0 */
  .carousel-flex.slide-0 {
    padding: 2rem;
  }

  .carousel-flex {
    display: flex;
    gap: 2rem;
    align-items: center;
    .carousel-img {
      flex: 2;
    }
    .content-text {
      flex: 5;
    }

    .arrow-button {
      width: 50px;
      height: 50px;
      cursor: pointer;
      transition: all 0.3s ease;
      animation: pulse 2s ease-in-out infinite;

      &:hover {
        animation: none;
        transform: scale(1.15);
      }

      &:active {
        transform: scale(0.95);
      }
    }

    @keyframes pulse {
      0%,
      100% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.05);
      }
    }
  }
  .card-paragraph {
    text-align: justify;
  }
`,Zo=F(B)`
  flex: 3;
  margin: 0;
  .number {
    color: #96d6ac;
  }

  .title {
    color: #000 !important;
  }

  .title-text span {
    font-size: 64px;
  }
`,Qo=So;var $o=``+new URL(`refactor-1-2-1.png`,import.meta.url).href,es=``+new URL(`refactor-1-2-2.png`,import.meta.url).href,ts=``+new URL(`refactor-1-2-3.png`,import.meta.url).href,ns=``+new URL(`seta.png`,import.meta.url).href;``+new URL(`seta-retornar.png`,import.meta.url).href;var rs=({number:e=`2`,paragraphs:t=[`A pilotagem muda radicalmente de acordo com o ambiente. Cada cenário traz riscos próprios e exige comportamentos diferentes do motociclista.`,`Na cidade: O trânsito urbano concentra cruzamentos perigosos, pontos cegos de carros e ônibus, pedestres distraídos e motoristas impacientes. Pequenos deslocamentos, como ir até o trabalho ou buscar algo próximo, podem parecer simples, mas escondem armadilhas. A falsa sensação de segurança em trajetos curtos faz com que muitos acidentes aconteçam justamente nesses momentos.`,`Na estrada: O prazer de rodar em alta velocidade vem acompanhado de riscos maiores. Ventos laterais, ultrapassagens de caminhões, buracos no asfalto, curvas de raio fechado e até animais soltos na pista são cenários comuns nas rodovias brasileiras. O impacto de um acidente em alta velocidade tende a ser muito mais grave.`,`Na trilha ou em estradas de terra: Aqui, a aventura é o combustível. Terrenos irregulares, lama, pedras, cascalho, falta de aderência na pista e de sinalização exigem habilidades específicas. O risco não está apenas no ambiente natural, mas também na ausência de infraestrutura de socorro. O motociclista que se arrisca em trilhas sem preparo técnico ou equipamentos adequados aumenta significativamente sua vulnerabilidade.`,`Cada ambiente exige adaptação. A consciência de que não existe uma "forma única" de pilotar é fundamental para reduzir riscos.`],imageSrc:n=[La,$o,es,ts],imageAlt:r=`estrada`})=>{let[i,a]=(0,_.useState)(0),o=()=>{i<3&&a(i+1)},s=()=>{i>0&&a(i-1)};return(0,I.jsx)(Yo,{className:`content`,children:(()=>{if(i===0)return(0,I.jsx)(Xo,{children:(0,I.jsxs)(`div`,{className:`carousel-flex slide-0`,children:[(0,I.jsx)(`div`,{className:`carousel-img`,children:(0,I.jsx)(Io,{src:n[0],alt:r,width:`100%`,objectFit:`contain`})}),(0,I.jsxs)(`div`,{className:`content-text`,children:[(0,I.jsxs)(Zo,{children:[(0,I.jsx)(`h1`,{className:`number`,children:e}),(0,I.jsxs)(`div`,{className:`title-text`,children:[(0,I.jsxs)(`h2`,{className:`title`,children:[`Onde a `,(0,I.jsx)(`span`,{children:`estrada muda`}),`,`]}),(0,I.jsxs)(`h2`,{className:`title`,children:[(0,I.jsx)(`span`,{children:`os riscos`}),` também mudam`]})]})]}),(0,I.jsx)(Qo,{children:(()=>{let e=t[0],n=e.match(/^([^:]+:)\s*(.*)$/);if(n){let[,e,t]=n;return(0,I.jsxs)(`p`,{className:`card-paragraph`,children:[(0,I.jsx)(`span`,{className:`paragraph-title`,children:e}),` `,(0,I.jsx)(`br`,{}),` `,t]})}return(0,I.jsx)(`p`,{children:e})})()})]}),i<3&&(0,I.jsx)(`img`,{src:``+new URL(`seta.png`,import.meta.url).href,className:`arrow-button`,alt:`Avançar`,onClick:o})]})},i);{let e=i;return(0,I.jsx)(Xo,{children:(0,I.jsxs)(`div`,{className:`carousel-flex`,children:[i>0&&(0,I.jsx)(`img`,{src:``+new URL(`seta-retornar.png`,import.meta.url).href,className:`arrow-button`,alt:`Voltar`,onClick:s}),(0,I.jsx)(`div`,{className:`carousel-img`,children:(0,I.jsx)(Io,{src:n[e],alt:r,width:`100%`,objectFit:`contain`})}),(0,I.jsx)(`div`,{className:`content-text`,children:(0,I.jsxs)(Qo,{children:[(()=>{let n=t[e],r=n.match(/^([^:]+:)\s*(.*)$/);if(r){let[,e,t]=r;return(0,I.jsxs)(`p`,{className:`card-paragraph`,children:[(0,I.jsx)(`span`,{className:`paragraph-title`,children:e}),(0,I.jsx)(`br`,{}),` `,t]})}return(0,I.jsx)(`p`,{children:n})})(),(()=>{if(e===3)return(0,I.jsx)(`p`,{style:{color:`var(--secondary-color)`,fontStyle:`normal`,fontWeight:`bold`},children:t[4]})})()]})}),i<3&&(0,I.jsx)(`img`,{src:``+new URL(`seta.png`,import.meta.url).href,className:`arrow-button`,alt:`Avançar`,onClick:o})]})},i)}})()})};const is=F(z)`
  margin-left: 5rem;
  flex-direction: column;

  .flex {
    display: flex;
    margin-bottom: 2rem;
  }

  .content-image {
    width: 57%;
    object-fit: contain;
  }
`,as=F(Mo)`
  margin-left: 0;
  margin-right: 5rem;
`,os=F(B)`
  .title-text span {
    font-size: 64px;
  }
`,ss=F(So)`
  p {
    text-align: justify;

    .paragraph-title {
      color: var(--paragraph-color);
    }
  }
`;F.img`
  /* Estilos para a imagem do conteúdo */
  max-width: 100%;
  height: auto;
`;var cs=``+new URL(`video-parada-1-3.webm`,import.meta.url).href,ls=({number:e=`3`,paragraphs:t=[`Excesso de velocidade: reduz drasticamente o tempo de reação em situações imprevistas.`,`Álcool e drogas: comprometem reflexos, equilíbrio e percepção de risco.`,`Imprudência: ultrapassagens arriscadas, avanço de sinais, uso inadequado de corredores.`,`Fadiga e distração: cansaço prolongado e uso de celular são causas recorrentes de acidentes graves.`,`Excesso de confiança: pilotos experientes às vezes subestimam riscos, acreditando dominar qualquer situação.`],imageSrc:n=cs,imageAlt:r=`alt prosivório`})=>(0,I.jsxs)(is,{className:`content`,children:[(0,I.jsxs)(`div`,{className:`flex`,children:[(0,I.jsx)(os,{children:(0,I.jsxs)(`div`,{className:`title-text`,children:[(0,I.jsx)(`h1`,{className:`number`,children:e}),(0,I.jsxs)(`h2`,{className:`title`,children:[`O `,(0,I.jsx)(`span`,{children:`fator humano`}),`:`]}),(0,I.jsxs)(`h2`,{className:`title`,children:[`o `,(0,I.jsx)(`span`,{children:`maior risco`})]}),(0,I.jsx)(`h2`,{className:`title`,children:`na pista`})]})}),(0,I.jsx)(`video`,{className:`content-image`,src:n,autoPlay:!0,loop:!0,muted:!0})]}),(0,I.jsxs)(as,{children:[(0,I.jsx)(`p`,{className:`chamada`,children:`Mais de 90% dos acidentes de trânsito estão ligados a falhas humanas, segundo estudos internacionais da Organização Mundial da Saúde (OMS). No Brasil, esse número se repete: não é a moto que falha, mas sim a forma como ela é conduzida.`}),(0,I.jsx)(`b`,{children:`Os principais fatores de risco são:`}),(0,I.jsx)(ss,{children:t.map((e,t)=>{let n=e.match(/^([^:]+:)\s*(.*)$/);if(n){let[,e,r]=n;return(0,I.jsxs)(`p`,{children:[(0,I.jsx)(`span`,{className:`paragraph-title`,children:e}),` `,r]},t)}return(0,I.jsx)(`p`,{children:e},t)})}),(0,I.jsx)(`p`,{className:`conclusao`,children:`Esses comportamentos, somados à vulnerabilidade natural da moto, transformam a conscientização em uma ferramenta de sobrevivência.`})]})]});const us=F(z)`
  margin-left: 5rem;
  flex-direction: column;

  .flex {
    display: flex;
    margin-bottom: 2rem;
    gap: 1rem;
  }
`,ds=F(Mo)`
  width: 65%;
  margin-left: 0;
  margin-right: 1rem;

  .chamada,
  .conclusao {
    width: 100%;
  }
`,fs=F(B)`
  .title-text span {
    font-size: 64px;
  }
`,ps=F(So)`
  p {
    .paragraph-title {
      color: var(--paragraph-color);
    }
  }
`;var ms=``+new URL(`img-parada-1-4.png`,import.meta.url).href,hs=({number:e=`4`,paragraphs:t=[`Em São Paulo, 43% das mortes no trânsito em 2022 foram de motociclistas, detalhe que o Brasil está em 3⁰ lugar no ranking mundial de mortes no trânsito.  (Fonte: Infosiga-SP).`,`Nas rodovias federais, a PRF aponta que 3 em cada 10 vítimas fatais são motociclistas.`,`Em 10 anos, a taxa de internações por acidentes com motos cresceu mais de 70% no Brasil (Ministério da Saúde).`,`Estima-se que, por ano, mais de 12 mil motociclistas morram no país (DATASUS, 2022).`],imageSrc:n=ms,imageAlt:r=`alt prosivório`})=>(0,I.jsxs)(us,{className:`content`,children:[(0,I.jsxs)(fs,{children:[(0,I.jsx)(`h1`,{className:`number`,children:e}),(0,I.jsx)(`div`,{className:`title-text`,children:(0,I.jsxs)(`h2`,{className:`title`,children:[`Os`,(0,I.jsx)(`span`,{children:` números`}),` não mentem`]})})]}),(0,I.jsxs)(`div`,{className:`flex`,children:[(0,I.jsxs)(ds,{children:[(0,I.jsx)(`b`,{children:`Os números mostram o tamanho do desafio:`}),(0,I.jsx)(ps,{children:t.map((e,t)=>(0,I.jsx)(`p`,{children:e},t))}),(0,I.jsx)(`p`,{className:`conclusao`,children:`Esses comportamentos, somados à vulnerabilidade natural da moto, transformam a conscientização em uma ferramenta de sobrevivência.`})]}),(0,I.jsx)(Io,{src:n,alt:r,width:`52%`,objectFit:`contain`,margin:`-4rem 0 0 0`})]})]});const gs=F(z)`
  flex-direction: column;
  .flex {
    gap: 0;
  }
`,_s=F(No)`
  margin: 0 auto;
  width: 90%;
  border-radius: 16px;
  overflow: hidden;
  animation: slideIn 0.5s ease-out;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  &::before {
    display: none;
  }
  &::after {
    border-radius: 0 0 16px 16px;
  }

  /* Aplicar border-radius e padding no container de conteúdo */
  > div {
    border-radius: 16px 16px 0 0;
    padding: 2.2rem 2rem;
  }

  /* Padding específico quando é o slide 0 */
  .carousel-flex {
    padding: 1.5rem;
  }

  .carousel-flex {
    display: flex;
    gap: 2rem;
    align-items: center;

    .carousel-img {
      flex: 2;
      position: relative;
      width: 100%;
      height: 100%;
      video {
        width: 130%;
        position: absolute;
        top: 0;
        left: -4rem;
        transform: translate(0, -60%);
      }
    }
    .content-text {
      flex: 5;
    }

    &.conclusion-slide {
      justify-content: space-between;

      .content-center {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
      }
    }

    .arrow-button {
      width: 50px;
      height: 50px;
      cursor: pointer;
      transition: all 0.3s ease;
      animation: pulse 2s ease-in-out infinite;

      &:hover {
        animation: none;
        transform: scale(1.15);
      }

      &:active {
        transform: scale(0.95);
      }
    }

    @keyframes pulse {
      0%,
      100% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.05);
      }
    }
  }
  .card-paragraph {
    text-align: center;
  }
`,vs=F(B)`
  flex: 3;
  margin: 0;
  .number {
    color: #96d6ac;
  }

  .title {
    color: #000 !important;
  }

  .title-text span {
    font-size: 52px;
  }
`,ys=F(So)`
  .chamada {
    width: 100%;
    margin-bottom: 1rem;
  }

  p {
    text-align: justify;

    .paragraph-title {
      color: var(--paragraph-color);
      font-weight: bold;
    }
  }

  .conclusao {
    text-align: center;
    font-weight: bold;
    font-style: italic;
    font-size: 1.2rem;
    color: var(--secondary-color);
    margin-top: 0;
    margin: 0 auto;
  }
`;var bs=``+new URL(`img-parada-1-5.png`,import.meta.url).href,xs=``+new URL(`img-parada-1-5.webm`,import.meta.url).href,Ss=``+new URL(`placa-parar.png`,import.meta.url).href,Cs=({number:e=`5`,paragraphs:t=[`Excesso de velocidade: responsável por boa parte dos acidentes graves.`,`Falta de capacete: o uso correto reduz em até 70% o risco de morte em colisões (OMS).`,`Zigue-zague no corredor: aumenta exponencialmente as chances de colisão lateral.`,`Ignorar essas regras não significa apenas correr risco de multa. Significa colocar a própria vida em perigo, e também a de terceiros.`],imageSrc:n=bs,imageAlt:r=`alt prosivório`})=>{let[i,a]=(0,_.useState)(0),o=()=>{i<2&&a(i+1)},s=()=>{i>0&&a(i-1)};return(0,I.jsx)(gs,{className:`content`,children:(()=>i===0?(0,I.jsx)(_s,{children:(0,I.jsxs)(`div`,{className:`carousel-flex slide-0`,children:[(0,I.jsx)(`div`,{className:`carousel-img`,children:(0,I.jsx)(`video`,{src:xs,autoPlay:!0,loop:!0,muted:!0})}),(0,I.jsxs)(`div`,{className:`content-text`,children:[(0,I.jsxs)(vs,{children:[(0,I.jsx)(`h1`,{className:`number`,children:e}),(0,I.jsxs)(`div`,{className:`title-text`,children:[(0,I.jsxs)(`h2`,{className:`title`,children:[`As infrações `,(0,I.jsx)(`span`,{children:`mais comuns`})]}),(0,I.jsx)(`h2`,{className:`title`,children:`(e mais perigosas)`})]})]}),(0,I.jsx)(ys,{children:(0,I.jsx)(`div`,{className:`chamada`,children:`A legislação de trânsito é clara. Ainda assim, muitas das infrações cometidas diariamente estão diretamente ligadas às maiores causas de acidentes fatais. Entre elas:`})})]}),i<2&&(0,I.jsx)(`img`,{src:``+new URL(`seta.png`,import.meta.url).href,className:`arrow-button`,alt:`Avançar`,onClick:o})]})},i):i===1?(0,I.jsx)(_s,{children:(0,I.jsxs)(`div`,{className:`carousel-flex`,children:[i>0&&(0,I.jsx)(`img`,{src:``+new URL(`seta-retornar.png`,import.meta.url).href,className:`arrow-button`,alt:`Voltar`,onClick:s}),(0,I.jsx)(`div`,{className:`content-text`,children:(0,I.jsx)(ys,{children:t.slice(0,3).map((e,t)=>{let n=e.match(/^([^:]+:)\s*(.*)$/);if(n){let[,e,r]=n;return(0,I.jsxs)(`p`,{className:`card-paragraph`,children:[(0,I.jsx)(`span`,{className:`paragraph-title`,children:e}),(0,I.jsx)(`br`,{}),` `,r]},t)}return(0,I.jsx)(`p`,{style:{textAlign:`center !important`},children:e},t)})})}),i<2&&(0,I.jsx)(`img`,{src:``+new URL(`seta.png`,import.meta.url).href,className:`arrow-button`,alt:`Avançar`,onClick:o})]})},i):(0,I.jsx)(_s,{children:(0,I.jsxs)(`div`,{className:`carousel-flex conclusion-slide`,children:[i>0&&(0,I.jsx)(`img`,{src:``+new URL(`seta-retornar.png`,import.meta.url).href,className:`arrow-button`,alt:`Voltar`,onClick:s}),(0,I.jsxs)(`div`,{className:`content-center`,children:[(0,I.jsx)(`div`,{className:`sign`,children:(0,I.jsx)(Io,{src:Ss,alt:`Placa de Pare`,width:`150px`,objectFit:`contain`})}),(0,I.jsx)(ys,{children:(0,I.jsx)(`p`,{className:`conclusao`,children:t[3]})})]}),i<2&&(0,I.jsx)(`img`,{src:``+new URL(`seta.png`,import.meta.url).href,className:`arrow-button`,alt:`Avançar`,onClick:o})]})},i))()})};const ws=F(z)`
  margin: 0 5rem;
  margin-top: 3rem;
  flex-direction: column;

  .flex {
    display: flex;
    margin-bottom: 2rem;
    gap: 1rem;
  }
`,Ts=F(No)`
  width: 90%;
  margin: 0 auto;

  .chamada,
  .conclusao {
    width: 100%;
  }
`,Es=F(B)`
  margin-bottom: 0;
  .title-text span {
    font-size: 64px;
    line-height: 0.75;
  }
`,Ds=F(So)`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  li {
    font-size: 20px;
    line-height: 1.6;
    color: var(--paragraph-color);
    text-align: justify;
    margin: 0;
    position: relative;
    padding-left: 1.2rem;

    &::before {
      content: "•";
      color: var(--paragraph-color);
      font-size: 20px;
      position: absolute;
      left: 0;
      top: -0.2rem;
    }

    .bullet-title {
      font-weight: 700;
      font-style: normal;
      color: var(--paragraph-color);
    }
  }

  p {
    text-align: justify;

    .paragraph-title {
      color: var(--secondary-color);
    }

    &.conclusion {
      margin-top: 2rem;
      padding-top: 1rem;
    }
  }
`;var Os=``+new URL(`video-parada-1-6.webm`,import.meta.url).href,ks=({number:e=`6`,listItems:t=[`Na lei: o Código de Trânsito Brasileiro não proíbe explicitamente o uso do corredor, mas exige prudência.`,`Na prática: em cidades como São Paulo, a CET chegou a delimitar faixas exclusivas para motos em algumas avenidas.`,`No risco: motoristas que mudam de faixa sem sinalizar, distrações com celular e pontos cegos tornam o corredor imprevisível.`],conclusionParagraph:n=`Especialistas recomendam: se for usar, que seja em baixa velocidade e com atenção redobrada.`,imageSrc:r=Os,imageAlt:i=`alt prosivório`})=>(0,I.jsxs)(ws,{className:`content`,children:[(0,I.jsxs)(Es,{children:[(0,I.jsx)(`h1`,{className:`number`,children:e}),(0,I.jsx)(`div`,{className:`title-text`,children:(0,I.jsxs)(`h2`,{className:`title`,children:[`O corredor `,(0,I.jsx)(`span`,{children:`vilão`}),` ou `,(0,I.jsx)(`span`,{children:` aliado`}),` ?`]})})]}),(0,I.jsx)(`video`,{src:r,width:`100%`,style:{objectFit:`contain`},autoPlay:!0,loop:!0,muted:!0}),(0,I.jsx)(`div`,{className:`flex`,children:(0,I.jsxs)(Ts,{children:[(0,I.jsx)(`div`,{className:`chamada`,children:`O famoso “corredor”, espaço entre carros parados ou em baixa velocidade, é uma realidade no trânsito brasileiro. Mas também é uma das áreas mais perigosas para quem pilota.`}),(0,I.jsxs)(Ds,{children:[(0,I.jsx)(`ul`,{children:t.map((e,t)=>{let n=e.match(/^([^:]+:)\s*(.*)$/);if(n){let[,e,r]=n;return(0,I.jsxs)(`li`,{children:[(0,I.jsx)(`span`,{className:`bullet-title`,children:e}),` `,r]},t)}return(0,I.jsx)(`li`,{children:e},t)})}),n&&(()=>{let e=n.match(/^([^:]+:)\s*(.*)$/);if(e){let[,t,n]=e;return(0,I.jsxs)(`p`,{className:`conclusion`,children:[(0,I.jsx)(`span`,{className:`paragraph-title`,children:t}),` `,n]})}return(0,I.jsx)(`p`,{className:`conclusion`,children:n})})()]})]})})]});const As=F(z)`
  margin: 0 5rem;
  margin-top: 3rem;
  flex-direction: column;

  .flex {
    display: flex;
    margin-bottom: 2rem;
    gap: 1rem;
  }
`,js=F(Mo)`
  width: 90%;
  margin: 0 auto;
  padding: 0 auto;

  .chamada,
  .conclusao {
    width: 100%;
  }
`,Ms=F(B)`
  .title-text span {
    font-size: 64px;
  }
`,Ns=F(So)`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  li {
    font-size: 20px;
    line-height: 1.6;
    color: var(--paragraph-color);
    text-align: justify;
    margin: 0;
    position: relative;
    padding-left: 1.2rem;

    &::before {
      content: "•";
      color: var(--paragraph-color);
      font-size: 20px;
      position: absolute;
      left: 0;
      top: -0.2rem;
    }

    .bullet-title {
      font-weight: 700;
      font-style: normal;
      color: var(--paragraph-color);
    }
  }

  p {
    text-align: justify;

    .paragraph-title {
      color: var(--secondary-color);
    }

    &.conclusion {
      margin-top: 2rem;
      padding-top: 1rem;
    }
  }
`,Ps=F.img`
  height: auto;
  width: 10rem;
`,Fs=F.div`
  display: flex;
  gap: 3.5rem;
  justify-content: center;
  margin-bottom: 2rem;
`;var Is=``+new URL(`img-parada-1-7-1.png`,import.meta.url).href,Ls=``+new URL(`img-parada-1-7-2.png`,import.meta.url).href,Rs=``+new URL(`img-parada-1-7-3.png`,import.meta.url).href,zs=``+new URL(`img-parada-1-7-4.png`,import.meta.url).href,Bs=({number:e=`7`,paragraphs:t=[`As leis de trânsito nasceram de tragédias. Cada regra representa uma vida perdida no passado e a tentativa de evitar novas mortes no futuro.`,`Capacete obrigatório, farol aceso, limites de velocidade e tolerância zero ao álcool não são burocracias: são medidas que salvam milhares de vidas todos os anos. Respeitar a lei é respeitar a vida.`,,],imageSrc:n=[Is,Ls,Rs,zs],imageAlt:r=`alt prosivório`})=>(0,I.jsxs)(As,{className:`content`,children:[(0,I.jsxs)(Ms,{children:[(0,I.jsx)(`h1`,{className:`number`,children:e}),(0,I.jsx)(`div`,{className:`title-text`,children:(0,I.jsxs)(`h2`,{className:`title`,children:[`Leis que `,(0,I.jsx)(`span`,{children:`salvam vidas`})]})})]}),(0,I.jsx)(Fs,{children:n.map((e,t)=>(0,I.jsx)(Ps,{src:e,alt:r},t))}),(0,I.jsx)(`div`,{className:`flex`,children:(0,I.jsx)(js,{children:(0,I.jsx)(Ns,{children:t.map((e,t)=>(0,I.jsx)(`p`,{children:e},t))})})})]}),Vs=``+new URL(`placa.png`,import.meta.url).href,Hs=``+new URL(`roadmap.png`,import.meta.url).href;const Us=Ta`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,Ws=F.div`
  position: relative;
  margin: 0 auto;
  animation: ${Us} 1.55s ease-in-out forwards;

  .path {
    width: 1100px;
    margin: 12.5rem 0 11rem;
  }
`,Gs=F.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`,Ks=F.div`
  position: absolute;
  transform-origin: center;

  /* Anchors anteriores ficam visíveis mas sem opacidade reduzida no wrapper geral */

  .line {
    position: absolute;
    left: 50%;
    width: 3px;
    height: 6.5rem; /* Altura fixa */
    opacity: 1;

    /* Transform-origin: primary cresce de cima, secondary de baixo */
    transform-origin: ${e=>e.$variant===`primary`?`top center`:`bottom center`};

    /* Começa "comprimida" com scaleY(0) */
    transform: translateX(-50%) scaleY(0);

    background-color: ${e=>e.$isBlocked?e.$variant===`primary`?`var(--primary-color-blocked)`:`var(--secondary-color-blocked)`:e.$isPrevious?e.$variant===`primary`?`var(--accent-green-primary-grayed)`:`var(--accent-green-secondary-grayed)`:e.$variant===`primary`?`var(--accent-green-primary)`:`var(--accent-green-secondary)`};

    /* Secondary precisa ficar posicionada acima para crescer para cima */
    top: ${e=>e.$variant===`primary`?`0`:`-6.5rem`};

    transition: all 0.3s ease;

    /* Estados dos anchors */
    opacity: 1; /* Line sempre mantém opacidade 1 */
    transform: ${e=>e.$isBlocked?`translateX(-50%) scaleY(0)`:e.$isPrevious?`translateX(-50%) scaleY(1)`:`translateX(-50%) scaleY(0)`};

    &.open {
      opacity: 1; /* Line sempre mantém opacidade 1 */
      /* Expande para tamanho completo */
      transform: translateX(-50%) scaleY(1);
    }
  }

  .point {
    position: absolute;
    transform-origin: center;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: ${e=>e.$isBlocked?`var(--primary-color-blocked)`:e.$isPrevious?`var(--primary-color-grayed)`:`var(--primary-color)`};
    border: solid
      ${e=>e.$isBlocked?`var(--secondary-color-blocked)`:e.$isPrevious?e.$variant===`primary`?`var(--accent-green-primary-grayed)`:`var(--accent-green-secondary-grayed)`:e.$variant===`primary`?`var(--accent-green-primary)`:`var(--accent-green-secondary)`}
      3.5px;
    transform: translateX(-50%) translateY(-50%);
    cursor: ${e=>e.$isBlocked?`not-allowed`:`pointer`};
    transition: all 0.5s ease;
    z-index: 10;

    /* Point mantém opacidade 1, apenas muda cor */
    opacity: 1;
    filter: none; /* Remove filtros, usa cores diretas */

    &:hover {
      transform: translateX(-50%) translateY(-50%) scale(1.2);
    }
  }

  .icon {
    transform-origin: center;
    position: absolute;
    background-color: ${e=>e.$isBlocked?e.$variant===`primary`?`var(--accent-green-primary-blocked)`:`var(--accent-green-secondary-blocked)`:e.$isPrevious?e.$variant===`primary`?`var(--accent-green-primary-grayed)`:`var(--accent-green-secondary-grayed)`:e.$variant===`primary`?`var(--accent-green-primary)`:`var(--accent-green-secondary)`};
    transform: translateX(-50%) translateY(-50%);
    width: 16px;
    height: 16px;
    padding: 8px;
    /* Ícones anteriores ficam sempre visíveis (como ativos) */
    opacity: ${e=>e.$isPrevious?`1`:`0.1`}; /* Ícone mantém opacidade 1 */
    transform: ${e=>e.$isPrevious?`translateX(-50%) translateY(-50%) scale(1)`:`translateX(-50%) translateY(-50%)`};
    border-radius: 50%;
    filter: drop-shadow(
      0px 8px 8px rgba(0, 0, 0, 0.25)
    ); /* Remove grayscale, mantém apenas drop-shadow */
    transition: all 0.5s ease;

    /* Centralizar e estilizar a imagem dentro */
    display: flex;
    align-items: center;
    justify-content: center;

    @keyframes pulsePrimary {
      0% {
        transform: translateX(-50%) translateY(calc(-50% + 6.5rem)) scale(1);
      }
      50% {
        transform: translateX(-50%) translateY(calc(-50% + 6.5rem)) scale(1.1);
      }
      100% {
        transform: translateX(-50%) translateY(calc(-50% + 6.5rem)) scale(1);
      }
    }

    @keyframes pulseSecondary {
      0% {
        transform: translateX(-50%) translateY(calc(-50% - 6.5rem)) scale(1);
      }
      50% {
        transform: translateX(-50%) translateY(calc(-50% - 6.5rem)) scale(1.1);
      }
      100% {
        transform: translateX(-50%) translateY(calc(-50% - 6.5rem)) scale(1);
      }
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      border-radius: inherit;
      /* Apenas a imagem fica com opacidade reduzida para anchors anteriores */
      opacity: ${e=>e.$isPrevious?`0.7`:`1`};
    }

    &.open {
      opacity: 1; /* Ícone sempre opacidade 1 quando aberto */
      transform: translateX(-50%)
        translateY(
          ${e=>e.$variant===`primary`?`calc(-50% + 6.5rem)`:`calc(-50% - 6.5rem)`}
        );
      width: 7rem;
      height: 7rem;
      padding: 1rem;

      /* Aplicar animação pulse apenas quando está aberto E não está bloqueado/acinzentado */
      animation: ${e=>e.$isBlocked||e.$isPrevious?`none`:e.$variant===`primary`?`pulsePrimary 2s ease-in-out infinite`:`pulseSecondary 2s ease-in-out infinite`};

      img {
        /* A imagem mantém as mesmas proporções quando expandida */
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }

  .text-box {
    position: absolute;
    top: ${e=>e.$variant===`primary`?`calc(-50% + 7rem)`:`calc(-50% - 18rem)`};
    left: 50%;
    transform: translateX(-50%)
      translateY(
        ${e=>e.$variant===`primary`?`-10px`:`10px`}
      );
    text-align: center;
    background-color: ${e=>e.$isPrevious?`var(--secondary-background-grayed)`:`var(--secondary-background)`};
    padding: ${e=>e.$variant===`primary`?`3.5rem 0.7rem 1.5rem`:`1rem 0.7rem 3.5rem`};
    border-radius: 16px;

    /* Estado inicial - anchors anteriores ficam sempre visíveis (como ativos) */
    opacity: ${e=>e.$isPrevious?`0.7`:`0`};
    transform: ${e=>e.$isPrevious?`translateX(-50%) translateY(0)`:`translateX(-50%) translateY(${e.$variant===`primary`?`-10px`:`10px`})`};
    /* Transição rápida para saída (sem delay) */
    transition: all 0.2s ease;
    width: 6.5rem;

    &.open {
      opacity: ${e=>e.$isPrevious?`0.3`:`1`};
      transform: translateX(-50%) translateY(0);

      /* Transição mais lenta com delay para entrada */
      transition: all 0.4s ease 0.3s;
    }

    .number {
      color: ${e=>e.$isPrevious?`var(--secondary-color-grayed)`:`var(--secondary-color)`};
      font-size: 4rem;
      line-height: 0.8;
      margin: 5px 0;
    }
    .title {
      color: ${e=>e.$isPrevious?`var(--primary-color-grayed)`:`var(--primary-color)`};
      font-size: 1rem;
      line-height: 1;
      margin: 0;
    }
  }
`;var qs=(0,_.createContext)(void 0);const Js=({children:e})=>{let[t,n]=(0,_.useState)(1);return(0,I.jsx)(qs.Provider,{value:{activeContentId:t,setActiveContent:e=>{n(e)}},children:e})},Ys=()=>{let e=(0,_.useContext)(qs);if(e===void 0)throw Error(`useNavigation must be used within a NavigationProvider`);return e};var Xs=(0,_.createContext)();const Zs=({children:e})=>{let[t,n]=(0,_.useState)(1),r={maxReached:t,getAnchorState:(e,n)=>e<n?`previous`:e===n?`active`:e<=t?`available`:`blocked`,isAnchorClickable:e=>e<=t,updateProgression:e=>{e>t&&n(e)},resetProgression:()=>{n(1)}};return(0,I.jsx)(Xs.Provider,{value:r,children:e})},Qs=()=>{let e=(0,_.useContext)(Xs);if(!e)throw Error(`useProgression deve ser usado dentro de um ProgressionProvider`);return e};var $s=({variant:e,position:t,iconSrc:n,isOpen:r=!1,startX:i,startY:a,spacing:o,yOffset:s,contentId:c,number:l,title:u,onAnchorClick:d})=>{let f=i+t*o,p=e===`primary`?a:a+s,{activeContentId:m,setActiveContent:h}=Ys(),{getAnchorState:g,isAnchorClickable:v,updateProgression:y}=Qs(),[b,x]=(0,_.useState)(!1),S=g(c,m||1),C=v(c),w=m===c,T=S===`previous`,ee=S===`blocked`,te=T||w,E=w||b,ne=()=>{ee||x(!0)},re=()=>{x(!1)},ie=()=>{C&&(h(c),y(c),d&&d(c))};return(0,I.jsxs)(Ks,{$variant:e,$isPrevious:T,$isBlocked:ee,style:{top:`${p}px`,left:`${f}px`},children:[(0,I.jsx)(`div`,{className:`line ${E||te?`open`:``}`}),(0,I.jsx)(`div`,{className:`point`,onMouseOver:ne,onMouseOut:re,onClick:ie,style:{cursor:C?`pointer`:`not-allowed`}}),(0,I.jsxs)(`div`,{className:`text-box ${E||te?`open`:``}`,children:[(0,I.jsx)(`h3`,{className:`number`,children:l}),(0,I.jsx)(`p`,{className:`title`,children:u})]}),(0,I.jsx)(`div`,{className:`icon ${E||te?`open`:``}`,onClick:ie,style:{cursor:C?`pointer`:`not-allowed`},children:(0,I.jsx)(`img`,{src:n,alt:`icon ${t+1}`})})]})},ec=({anchors:e,startX:t=155.5,startY:n=193.5,spacing:r=133,yOffset:i=80,onAnchorClick:a})=>(0,I.jsx)(Gs,{children:e.map((e,o)=>(0,I.jsx)($s,{variant:o%2==0?`primary`:`secondary`,position:o,iconSrc:e.iconSrc,isOpen:e.isOpen||!1,startX:t,startY:n,spacing:r,yOffset:i,contentId:o+1,number:e.number,title:e.title,onAnchorClick:a},o))}),tc=``+new URL(`icon-1-1.png`,import.meta.url).href,nc=``+new URL(`icon-1-2.png`,import.meta.url).href,rc=``+new URL(`icon-1-3.png`,import.meta.url).href,ic=``+new URL(`icon-1-4.png`,import.meta.url).href,ac=``+new URL(`icon-1-5.png`,import.meta.url).href,oc=``+new URL(`icon-1-6.png`,import.meta.url).href,sc=``+new URL(`icon-1-7.png`,import.meta.url).href,cc=``+new URL(`icon-2-1.png`,import.meta.url).href,lc=``+new URL(`icon-2-2.png`,import.meta.url).href,uc=``+new URL(`icon-2-3.png`,import.meta.url).href,dc=``+new URL(`icon-2-4.png`,import.meta.url).href,fc=``+new URL(`icon-2-5.png`,import.meta.url).href,pc=``+new URL(`icon-2-6.png`,import.meta.url).href,mc=``+new URL(`icon-3-1.png`,import.meta.url).href,hc=``+new URL(`icon-3-2.png`,import.meta.url).href,gc=``+new URL(`icon-3-3.png`,import.meta.url).href,_c=``+new URL(`icon-3-4.png`,import.meta.url).href,vc=``+new URL(`icon-3-5.png`,import.meta.url).href,yc=``+new URL(`icon-3-6.png`,import.meta.url).href,bc=``+new URL(`icon-3-7.png`,import.meta.url).href,xc=``+new URL(`icon-3-8.png`,import.meta.url).href;const Sc=[{iconSrc:tc,isOpen:!0,number:1,title:`O país dos motociclistas`},{iconSrc:nc,isOpen:!1,number:2,title:`Cada caminho, um risco`},{iconSrc:rc,isOpen:!1,number:3,title:`O fator humano`},{iconSrc:ic,isOpen:!1,number:4,title:`Os números não mentem`},{iconSrc:ac,isOpen:!1,number:5,title:`As infrações mais comuns`},{iconSrc:oc,isOpen:!1,number:6,title:`O corredor: vilão ou aliado?`},{iconSrc:sc,isOpen:!1,number:7,title:`Leis que salvam vidas`}],Cc=[{iconSrc:cc,isOpen:!0,number:1,title:`O pacto da segurança`},{iconSrc:lc,isOpen:!1,number:2,title:`Condução defensiva`},{iconSrc:uc,isOpen:!1,number:3,title:`Moto em dia, vida preservada`},{iconSrc:dc,isOpen:!1,number:4,title:`A armadura do piloto`},{iconSrc:fc,isOpen:!1,number:5,title:`Atitudes que salvam vidas`},{iconSrc:pc,isOpen:!1,number:6,title:`Casos reais`}],wc=[{iconSrc:mc,isOpen:!0,number:1,title:`Ponto cego: o inimigo invisível`},{iconSrc:hc,isOpen:!1,number:2,title:`Frenagem correta: parar sem cair`},{iconSrc:gc,isOpen:!1,number:3,title:`Curvas: prazer e desafio`},{iconSrc:_c,isOpen:!1,number:4,title:`Obstáculos`},{iconSrc:vc,isOpen:!1,number:5,title:`Clima: quando a natureza dita o ritmo`},{iconSrc:yc,isOpen:!1,number:6,title:`Postura: o corpo também pilota`},{iconSrc:bc,isOpen:!1,number:7,title:`Áreas de conflito`},{iconSrc:xc,isOpen:!1,number:8,title:`Dicas do dia a dia`}];var Tc=({onAnchorClick:e})=>(0,I.jsxs)(Ws,{children:[(0,I.jsx)(`img`,{className:`path`,src:Hs,alt:`estrada`}),(0,I.jsx)(ec,{anchors:Sc,startX:143,startY:220,spacing:137.75,yOffset:80,onAnchorClick:e})]}),Ec=F.div`
  margin: 3rem 5rem;
  display: flex;

  @keyframes fadeInDelay {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  animation: fadeInDelay 1.55s ease-in-out forwards;

  flex-direction: column;
  gap: 4rem;
`,Dc=F.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,Oc=F.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 1rem;

  h2 {
    font-size: 40px;
    font-weight: 700;
    line-height: 0.7;
    color: var(--primary-color);
    margin: 0;
    display: inline;
  }

  span {
    font-size: 58px;
    font-weight: 700;
    line-height: 0.7;
    color: var(--secondary-color);
    margin: 0;
    display: inline;
  }

  .title-line {
    display: block;
  }
`,kc=F.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  p {
    font-size: 20px;
    line-height: 1.6;
    color: var(--primary-color);
    margin: 0;
    text-align: justify;
  }
`,Ac=e=>(0,I.jsx)(Oc,{children:e.split(`/`).map(e=>e.trim()).map((e,t)=>{if(e.includes(`*`)&&e.includes(`*`)){let n=e.split(`*`)[0],r=e.split(`*`)[1],i=e.split(`*`)[2]||``;return(0,I.jsxs)(`div`,{className:`title-line`,children:[n&&(0,I.jsx)(`h2`,{children:n}),(0,I.jsx)(`span`,{children:r}),i&&(0,I.jsx)(`h2`,{children:i})]},t)}else return(0,I.jsx)(`h2`,{className:`title-line`,children:e},t)})}),jc=(e,t)=>(0,I.jsx)(`p`,{children:e.split(`*`).map((e,t)=>t%2==1?(0,I.jsx)(`span`,{style:{color:`var(--secondary-color)`,fontWeight:`bold`},children:e},t):e)},t),Mc=({sections:e})=>(0,I.jsx)(Ec,{children:e.map((e,t)=>(0,I.jsxs)(Dc,{children:[Ac(e.title),(0,I.jsx)(kc,{children:e.paragraphs.map((e,t)=>jc(e,t))})]},t))}),Nc=Ta`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,Pc=Ta`
  0% {
    transform: scale(0.8);
    opacity: 0;
  }
  85% {
    transform: scale(1.05);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;const Fc=F.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
  animation: ${Nc} 0.3s ease-out;
`,Ic=F.div`
  background-color: #004d21;
  border-radius: 20px;
  max-width: 1200px;
  width: 90%;
  max-height: 92vh;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  animation: ${Pc} 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
`,Lc=F.div`
  flex: 1;
  overflow-y: auto;

  .children {
    padding: 2rem;
  }
  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    margin-top: 20px; /* Margem no topo para não cortar border-radius */
    margin-bottom: 20px;
    padding-right: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--primary-color);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: var(--accent-green-primary);
  }
`,Rc=F.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 2rem;
  border-top: 2px solid rgba(0, 0, 0, 0.1);
  background-color: var(--background-color);
  gap: 1rem;
`;var U=e=>{let t,n=new Set,r=(e,r)=>{let i=typeof e==`function`?e(t):e;if(!Object.is(i,t)){let e=t;t=r??(typeof i!=`object`||!i)?i:Object.assign({},t,i),n.forEach(n=>n(t,e))}},i=()=>t,a={setState:r,getState:i,getInitialState:()=>o,subscribe:e=>(n.add(e),()=>n.delete(e))},o=t=e(r,i,a);return a},zc=(e=>e?U(e):U),Bc=e=>e;function Vc(e,t=Bc){let n=_.useSyncExternalStore(e.subscribe,_.useCallback(()=>t(e.getState()),[e,t]),_.useCallback(()=>t(e.getInitialState()),[e,t]));return _.useDebugValue(n),n}var Hc=e=>{let t=zc(e),n=e=>Vc(t,e);return Object.assign(n,t),n},Uc=(e=>e?Hc(e):Hc);function Wc(e,t){let n;try{n=e()}catch{return}return{getItem:e=>{let r=e=>e===null?null:JSON.parse(e,t?.reviver),i=n.getItem(e)??null;return i instanceof Promise?i.then(r):r(i)},setItem:(e,r)=>n.setItem(e,JSON.stringify(r,t?.replacer)),removeItem:e=>n.removeItem(e)}}var Gc=e=>t=>{try{let n=e(t);return n instanceof Promise?n:{then(e){return Gc(e)(n)},catch(e){return this}}}catch(e){return{then(e){return this},catch(t){return Gc(t)(e)}}}};const Kc=Uc()(((e,t)=>(n,r,i)=>{let a={storage:Wc(()=>localStorage),partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...t},o=!1,s=new Set,c=new Set,l=a.storage;if(!l)return e((...e)=>{console.warn(`[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`),n(...e)},r,i);let u=()=>{let e=a.partialize({...r()});return l.setItem(a.name,{state:e,version:a.version})},d=i.setState;i.setState=(e,t)=>(d(e,t),u());let f=e((...e)=>(n(...e),u()),r,i);i.getInitialState=()=>f;let p,m=()=>{if(!l)return;o=!1,s.forEach(e=>e(r()??f));let e=a.onRehydrateStorage?.call(a,r()??f)||void 0;return Gc(l.getItem.bind(l))(a.name).then(e=>{if(e)if(typeof e.version==`number`&&e.version!==a.version){if(a.migrate){let t=a.migrate(e.state,e.version);return t instanceof Promise?t.then(e=>[!0,e]):[!0,t]}console.error(`State loaded from storage couldn't be migrated since no migrate function was provided`)}else return[!1,e.state];return[!1,void 0]}).then(e=>{let[t,i]=e;if(p=a.merge(i,r()??f),n(p,!0),t)return u()}).then(()=>{e?.(p,void 0),p=r(),o=!0,c.forEach(e=>e(p))}).catch(t=>{e?.(void 0,t)})};return i.persist={setOptions:e=>{a={...a,...e},e.storage&&(l=e.storage)},clearStorage:()=>{l?.removeItem(a.name)},getOptions:()=>a,rehydrate:()=>m(),hasHydrated:()=>o,onHydrate:e=>(s.add(e),()=>{s.delete(e)}),onFinishHydration:e=>(c.add(e),()=>{c.delete(e)})},a.skipHydration||m(),p||f})((e,t)=>({currentContentTimer:0,currentTimerDuration:30,canAdvanceCurrentContent:!1,completedContents:new Set,startTimer:(n,r=30)=>{t().completedContents.has(n)?e({currentContentTimer:r,currentTimerDuration:r,canAdvanceCurrentContent:!0}):e({currentContentTimer:0,currentTimerDuration:r,canAdvanceCurrentContent:!1})},updateTimer:(t,n)=>{e({currentContentTimer:t,currentTimerDuration:n,canAdvanceCurrentContent:t>=n})},resetTimer:()=>{e({currentContentTimer:0,canAdvanceCurrentContent:!1})},markContentAsCompleted:t=>{e(e=>({completedContents:new Set(e.completedContents).add(t)}))},isContentCompleted:e=>t().completedContents.has(e),setCompletedContents:t=>{e({completedContents:new Set(t)})},getCompletedContentsArray:()=>Array.from(t().completedContents)}),{name:`timer-storage`,storage:{getItem:e=>{let t=localStorage.getItem(e);if(!t)return null;let n=JSON.parse(t);return{state:{...n.state,completedContents:new Set(n.state.completedContents||[])}}},setItem:(e,t)=>{let n={state:{...t.state,completedContents:Array.from(t.state.completedContents)}};localStorage.setItem(e,JSON.stringify(n))},removeItem:e=>localStorage.removeItem(e)},partialize:e=>({completedContents:e.completedContents})})),qc=F.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--text-background-color);
  border-radius: 40px;
  width: fit-content;
  p {
    color: var(--paragraph-color);
    line-height: 1;
    padding: 0 2.5rem;
    text-align: center;
    font-size: 16px;
  }
`,Jc=F.div`
  font-size: 2rem;
  font-weight: bold;
  font-family: "ds-digib", monospace;
  color: var(--primary-color);
  background-color: ${e=>e.$isCompleted?`var(--secondary-color)`:`var(--yellow)`};
  padding: 0.35rem;
  border-radius: 40px;

  text-align: center;
  transition: background-color 0.3s ease;
`,Yc=F.div`
  position: relative;
  width: 2.7rem;
  height: 2.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
`,Xc=F.svg`
  width: 100%;
  height: 100%;
  transform: rotate(-90deg); /* Começa no topo */
  position: absolute;
  top: 0;
  left: 0;
`,Zc=F.circle`
  fill: none;
  stroke: rgba(255, 255, 255, 0.2);
  stroke-width: 5;
`,Qc=F.circle`
  fill: none;
  stroke: ${e=>e.$isCompleted?`var( --accent-green-secondary-grayed:)`:`var(--primary-color)`};
  stroke-width: 5;
  stroke-linecap: round;
  stroke-dasharray: ${2*Math.PI*18}; /* Circunferência do círculo (2πr) */
  stroke-dashoffset: ${e=>2*Math.PI*18*(1-e.$progress/100)};
  transition: stroke-dashoffset 0.5s ease, stroke 0.3s ease;
`;var $c=({contentId:e,duration:t=30})=>{let n=Kc(e=>e.currentContentTimer),r=Kc(e=>e.isContentCompleted),i=Math.min(100,n/t*100),a=r(e);return(0,I.jsxs)(qc,{children:[(0,I.jsxs)(`p`,{children:[a?`Conteúdo concluído! Você pode avançar.`:`Você tem ${t} segundos para concluir este conteúdo.`,(0,I.jsx)(`br`,{}),!a&&`Clique em avançar ao final da contagem.`]}),(0,I.jsx)(Jc,{$isCompleted:a,children:(0,I.jsx)(Yc,{children:(0,I.jsxs)(Xc,{viewBox:`0 0 44 44`,children:[(0,I.jsx)(Zc,{cx:`22`,cy:`22`,r:`18`}),(0,I.jsx)(Qc,{cx:`22`,cy:`22`,r:`18`,$progress:i,$isCompleted:a})]})})})]})},el={getSuspendData:()=>{try{return null}catch{return null}},setSuspendData:e=>{}};const tl=()=>{let{setCompletedContents:e,getCompletedContentsArray:t,markContentAsCompleted:n}=Kc();return(0,_.useEffect)(()=>{(()=>{let t=el.getSuspendData();if(t)try{let n=JSON.parse(t);if(n.completedContents&&Array.isArray(n.completedContents)){e(n.completedContents);return}}catch{}})()},[e]),{completeContent:e=>{n(e);let r=t(),i=JSON.stringify({completedContents:r});el.setSuspendData(i)}}},nl=(e,t=30)=>{let n=Kc(e=>e.currentContentTimer),r=Kc(e=>e.canAdvanceCurrentContent),i=Kc(e=>e.isContentCompleted),a=Kc(e=>e.startTimer),o=Kc(e=>e.updateTimer),{completeContent:s}=tl(),c=(0,_.useRef)(null);return(0,_.useEffect)(()=>{if(c.current&&clearInterval(c.current),a(e,t),i(e))return;let n=0;return c.current=setInterval(()=>{n++,o(n,t),n>=t&&(s(e),c.current&&clearInterval(c.current))},1e3),()=>{c.current&&clearInterval(c.current)}},[e,t]),{currentTime:n,timeRemaining:Math.max(0,t-n),canAdvance:r,progressPercentage:Math.min(100,n/t*100),isCompleted:i(e)}};var rl=({isOpen:e,onClose:t,contentId:n,timerDuration:r=30,children:i})=>{let{canAdvance:a}=nl(n,r);return(0,_.useEffect)(()=>(e?document.body.style.overflow=`hidden`:document.body.style.overflow=`unset`,()=>{document.body.style.overflow=`unset`}),[e]),e?(0,I.jsx)(Fc,{children:(0,I.jsx)(Ic,{$isOpen:e,children:(0,I.jsxs)(Lc,{children:[(0,I.jsx)(`div`,{className:`children`,children:i}),(0,I.jsxs)(Rc,{children:[(0,I.jsx)(`div`,{style:{flex:1}}),(0,I.jsx)($c,{contentId:n,duration:r}),(0,I.jsx)(`div`,{style:{flex:1,display:`flex`,justifyContent:`flex-end`},children:(0,I.jsx)(Xa,{onClick:t,disabled:!a,$canAdvance:a,children:(0,I.jsx)(`img`,{src:Ga,alt:`Avançar`})})})]})]})})}):null};const il=[{title:`O Brasil sobre / *Duas Rodas*`,paragraphs:[`A motocicleta conquistou um lugar único no coração e nas ruas do Brasil. Com mais de 31 milhões de motos circulando pelo país, as duas rodas representam muito mais do que um meio de transporte: são ferramentas de trabalho para milhões de brasileiros e símbolo de liberdade para os apaixonados por estrada.`,`Mas essa paixão vem acompanhada de uma responsabilidade que nem sempre recebe a atenção devida. Este material foi criado para quem ama pilotar, mas entende que conhecimento e consciência são os melhores equipamentos de proteção.`]}];var al=``+new URL(`img-parada-1-2.png`,import.meta.url).href,ol=``+new URL(`img-parada-1-3.png`,import.meta.url).href,sl=``+new URL(`img-parada-1-6.png`,import.meta.url).href,cl=7,W=()=>{let{activeContentId:e,setActiveContent:t}=Ys(),{updateProgression:n}=Qs(),r=Je(),[i,a]=(0,_.useState)(!0),[o,s]=(0,_.useState)(!1),[c,l]=(0,_.useState)(new Set);return c.size,(0,I.jsxs)(Co,{className:`container`,children:[(0,I.jsx)(Wa,{title:`PRIMEIRA PARADA`,iconSrc:Vs,iconAlt:`placa parar`}),i?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(Mc,{sections:il}),(0,I.jsx)(`div`,{className:`navigation`,children:(0,I.jsx)(Xa,{onClick:()=>{a(!1)},$canAdvance:!0,children:(0,I.jsx)(`img`,{src:Ga,alt:`Avançar`})})})]}):(0,I.jsx)(I.Fragment,{children:(0,I.jsx)(Tc,{onAnchorClick:e=>{t(e),s(!0)}})}),(0,I.jsx)(rl,{isOpen:o,onClose:()=>{if(l(t=>new Set([...t,e])),s(!1),e===cl)r(`/retrovisor1`);else{let r=e+1;t(r),n(r)}},contentId:`parada1-content${e}`,children:(()=>{switch(e){case 1:return(0,I.jsx)(Jo,{});case 2:return(0,I.jsx)(rs,{});case 3:return(0,I.jsx)(ls,{});case 4:return(0,I.jsx)(hs,{});case 5:return(0,I.jsx)(Cs,{});case 6:return(0,I.jsx)(ks,{});case 7:return(0,I.jsx)(Bs,{});default:return(0,I.jsx)(Jo,{})}})()}),(0,I.jsx)(`div`,{className:`tarja-listra`,children:(0,I.jsx)(`img`,{src:lo,alt:``})})]})},ll=Pa(()=>(0,I.jsx)(Zs,{children:(0,I.jsx)(Js,{children:(0,I.jsx)(W,{})})}),{imageSources:[Vs,Ga,lo,Vo,al,ol,ms,bs,sl,Is,Ls,Rs,zs],minLoadingTime:500,loadingText:`Preparando conteúdo...`});const ul=F(z)`
  flex-direction: column;
  .flex {
    gap: 0;
  }
`,dl=F(No)`
  margin: 0 auto;
  width: 90%;
  border-radius: 16px;
  overflow: hidden;
  animation: slideIn 0.5s ease-out;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  &::before {
    display: none;
  }
  &::after {
    border-radius: 0 0 16px 16px;
  }

  /* Aplicar border-radius e padding no container de conteúdo */
  > div {
    border-radius: 16px 16px 0 0;
    padding: 2.2rem 2rem;
  }

  /* Padding específico quando é o slide 0 */
  .carousel-flex.slide-0 {
    padding: 2rem;
  }

  .carousel-flex {
    display: flex;
    gap: 2rem;
    align-items: center;
    .carousel-img {
      flex: 2;
    }
    .content-text {
      flex: 5;
    }

    /* Centralização vertical apenas para slides sem título */
    &:not(.slide-0) .content-text {
      display: flex;
      align-items: center;
      min-height: 250px;
    }

    .arrow-button {
      width: 50px;
      height: 50px;
      cursor: pointer;
      transition: all 0.3s ease;
      animation: pulse 2s ease-in-out infinite;

      &:hover {
        animation: none;
        transform: scale(1.15);
      }

      &:active {
        transform: scale(0.95);
      }
    }

    @keyframes pulse {
      0%,
      100% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.05);
      }
    }
  }
  .card-paragraph {
    text-align: center;
  }
`,fl=F(B)`
  flex: 3;
  margin: 0;
  .number {
    color: #96d6ac;
  }

  .title {
    color: #000 !important;
  }

  .title-text span {
    font-size: 64px;
  }
`,pl=So;var ml=``+new URL(`img-parada-2-1.png`,import.meta.url).href,hl=({number:e=`1`,paragraphs:t=[`Antes de ligar a moto, a segurança começa na mente. A forma como o piloto encara o trânsito é determinante para o desfecho de cada trajeto.`,`Postura mental preventiva: cada deslocamento deve ser tratado como único. Estudos da Associação Brasileira de Medicina de Tráfego (Abramet) mostram que boa parte dos acidentes ocorre a menos de 5 km de casa ou do trabalho. A familiaridade com o trajeto gera excesso de confiança, e é justamente aí que muitos se descuidam.`,`Autocontrole emocional: pressa, raiva ou competitividade no trânsito transformam situações simples em riscos desnecessários. Pesquisas indicam que condutores agressivos têm até 70% mais chances de se envolver em colisões.`,`Consciência coletiva: cada atitude influencia não só o motociclista, mas pedestres, ciclistas, motoristas e passageiros. A moto pode ser ágil, mas a vulnerabilidade exige que o motociclista aja sempre com empatia.`,`Essa mentalidade cria a base para as práticas de segurança que veremos a seguir.`],imageSrc:n=ml,imageAlt:r=`alt prosivório`})=>{let[i,a]=(0,_.useState)(0),o=()=>{i<3&&a(i+1)},s=()=>{i>0&&a(i-1)};return(0,I.jsx)(ul,{className:`content`,children:(()=>{if(i===0)return(0,I.jsx)(dl,{children:(0,I.jsxs)(`div`,{className:`carousel-flex slide-0`,children:[(0,I.jsx)(`div`,{className:`carousel-img`,children:(0,I.jsx)(Io,{src:n,alt:r,width:`100%`,objectFit:`contain`})}),(0,I.jsxs)(`div`,{className:`content-text`,children:[(0,I.jsxs)(fl,{children:[(0,I.jsx)(`h1`,{className:`number`,children:e}),(0,I.jsxs)(`div`,{className:`title-text`,children:[(0,I.jsxs)(`h2`,{className:`title`,children:[`O `,(0,I.jsx)(`span`,{children:`pacto diário`})]}),(0,I.jsx)(`h2`,{className:`title`,children:`da segurança`})]})]}),(0,I.jsx)(pl,{children:(()=>{let e=t[0],n=e.match(/^([^:]+:)\s*(.*)$/);if(n){let[,e,t]=n;return(0,I.jsxs)(`p`,{className:`card-paragraph`,children:[(0,I.jsx)(`span`,{className:`paragraph-title`,children:e}),` `,(0,I.jsx)(`br`,{}),` `,t]})}return(0,I.jsx)(`p`,{children:e})})()})]}),i<3&&(0,I.jsx)(`img`,{src:``+new URL(`seta.png`,import.meta.url).href,className:`arrow-button`,alt:`Avançar`,onClick:o})]})},i);{let e=i;return(0,I.jsx)(dl,{children:(0,I.jsxs)(`div`,{className:`carousel-flex`,children:[i>0&&(0,I.jsx)(`img`,{src:``+new URL(`seta-retornar.png`,import.meta.url).href,className:`arrow-button`,alt:`Voltar`,onClick:s}),(0,I.jsx)(`div`,{className:`content-text`,style:{flex:`none`,width:`50%`,margin:` auto`},children:(0,I.jsxs)(pl,{children:[(()=>{let n=t[e],r=n.match(/^([^:]+:)\s*(.*)$/);if(r){let[,e,t]=r;return(0,I.jsxs)(`p`,{className:`card-paragraph`,children:[(0,I.jsx)(`span`,{className:`paragraph-title`,style:{display:`inline-block`,backgroundColor:`var(--secondary-color)`,color:`#fff`,padding:`8px 16px`,marginBottom:`16px`,borderRadius:`8px`},children:e}),(0,I.jsx)(`br`,{}),` `,t]})}return(0,I.jsx)(`p`,{children:n})})(),(()=>{if(e===3)return(0,I.jsx)(`p`,{style:{color:`var(--secondary-color)`,fontStyle:`normal`,fontWeight:`bold`,margin:`0 auto`,textAlign:`center`},children:t[4]})})()]})}),i<3&&(0,I.jsx)(`img`,{src:``+new URL(`seta.png`,import.meta.url).href,className:`arrow-button`,alt:`Avançar`,onClick:o})]})},i)}})()})};const gl=F(z)`
  margin-left: 5rem;
  flex-direction: column;

  .flex {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;
    margin-top: 1.5rem;
    align-items: center;
    width: 100%;
    .content-image {
      width: 80%;
      object-fit: contain;
    }
  }
`,_l=F.div`
  background-color: transparent;
  padding: 1rem 2rem;
  color: var(--primary-color);
  font-size: 20px;
  font-family: var(--font-family);
  margin-left: 0;
  margin-right: 5rem;

  b {
    color: var(--secondary-color);
    font-weight: bold;
  }

  .chamada,
  .conclusao {
    font-size: 20px;
    line-height: 1.6;
    text-align: justify;
    margin-bottom: 2rem;
    width: 100%;
    color: var(--primary-color);
  }

  .conclusao {
    margin-bottom: 0;
    margin-top: 2.5rem;
  }
`,vl=F(B)`
  .title-text span {
    font-size: 64px;
  }
`,yl=F(So)`
  p {
    text-align: justify;
    color: var(--primary-color);

    .paragraph-title {
      color: var(--primary-color);
      font-weight: bold;
    }
  }
`,bl=F.img`
  /* Estilos para a imagem do conteúdo */
  max-width: 100%;
  height: auto;
`;var xl=``+new URL(`img-parada-2-2-1.png`,import.meta.url).href,Sl=``+new URL(`img-parada-2-2-2.png`,import.meta.url).href,Cl=``+new URL(`img-parada-2-2-3.png`,import.meta.url).href,wl=({number:e=`2`,paragraphs:t=[`Previsão constante: imagine sempre o pior cenário. Considere que um carro pode mudar de faixa sem aviso, que um pedestre pode atravessar sem olhar, que um buraco pode surgir em uma curva. Essa antecipação dá ao motociclista segundos preciosos para reagir.`,`Distância de segurança: mantenha ao menos 3 segundos do veículo à frente em condições normais. Em chuva ou pista molhada, dobre para 6 segundos. Essa margem evita colisões em freadas bruscas.`],imageSrc:n=[xl,Sl,Cl],imageAlt:r=`alt prosivório`})=>(0,I.jsxs)(gl,{className:`content`,children:[(0,I.jsxs)(vl,{children:[(0,I.jsx)(`h1`,{className:`number`,children:e}),(0,I.jsxs)(`div`,{className:`title-text`,children:[(0,I.jsx)(`h2`,{className:`title`,children:`Condução defensiva:`}),(0,I.jsxs)(`h2`,{className:`title`,children:[(0,I.jsx)(`span`,{children:`prever `}),`para não sofrer`]})]})]}),(0,I.jsxs)(_l,{children:[(0,I.jsx)(`p`,{className:`chamada`,children:`A condução defensiva é a essência da segurança no trânsito. Segundo o Observatório Nacional de Segurança Viária, ela pode reduzir em até 80% o risco de acidentes quando aplicada corretamente.`}),(0,I.jsx)(`b`,{children:`Princípios básicos:`}),(0,I.jsx)(yl,{children:t.map((e,t)=>{let n=e.match(/^([^:]+:)\s*(.*)$/);if(n){let[,e,r]=n;return(0,I.jsxs)(`p`,{children:[(0,I.jsx)(`span`,{className:`paragraph-title`,children:e}),` `,r]},t)}return(0,I.jsx)(`p`,{children:e},t)})}),(0,I.jsxs)(`div`,{className:`flex`,children:[(0,I.jsx)(bl,{className:`content-image`,src:n[0],alt:r}),(0,I.jsx)(bl,{className:`content-image`,src:n[1],alt:r})]}),(0,I.jsxs)(yl,{children:[(0,I.jsx)(Ko,{text:`Seja visível: use sempre o farol aceso, mesmo durante o dia, e posicione-se de forma a ser visto pelos retrovisores dos carros. Estudos da PRF mostram que boa parte dos acidentes acontece porque o motorista não viu a moto.`}),(0,I.jsx)(Ko,{text:`Comunicação clara: setas, luzes de freio e até sinais manuais devem ser usados sempre. Nunca presuma que os outros entendem sua intenção sem sinalização.`}),(0,I.jsx)(`div`,{className:`flex`,children:(0,I.jsx)(bl,{className:`content-image`,src:n[2],alt:r})}),(0,I.jsx)(Ko,{text:`Estilo previsível: movimentos bruscos e mudanças repentinas confundem os outros motoristas. Fluidez é sinônimo de segurança.`}),(0,I.jsx)(`p`,{children:`Conduzir de forma defensiva é pilotar como se todos ao redor pudessem cometer erros porque, na prática, podem.`})]})]})]});const Tl=F(z)`
  flex-direction: column;
  .flex {
    gap: 0;
  }
`,El=F(No)`
  margin: 0 auto;
  width: 90%;
  border-radius: 16px;
  overflow: hidden;
  animation: slideIn 0.5s ease-out;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  &::before {
    display: none;
  }
  &::after {
    border-radius: 0 0 16px 16px;
  }

  > div {
    border-radius: 16px 16px 0 0;
    padding: 0;
  }

  .carousel-flex.slide-0 {
    padding: 2rem;
  }

  .carousel-flex {
    display: flex;
    gap: 2rem;
    align-items: flex-end;
    .carousel-img {
      flex: 2;
      position: relative;
      width: 100%;
      display: flex;
      align-items: flex-end;

      video {
        width: 140%;
        position: relative;
        left: -3rem;
        bottom: -2rem;
      }
    }
  }
  .content-text {
    flex: 5;
  }

  .arrow-button {
    width: 50px;
    height: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    animation: pulse 2s ease-in-out infinite;

    &:hover {
      animation: none;
      transform: scale(1.15);
    }

    &:active {
      transform: scale(0.95);
    }

    &.arrow-left {
      order: -1;
    }
  }

  @keyframes pulse {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }
`,Dl=F(B)`
  flex: 3;
  margin: 0;
  .number {
    color: #96d6ac;
  }

  .title {
    color: #000 !important;
  }

  .title-text span {
    font-size: 64px;
  }
`,Ol=F(So)`
  .paragraph-title {
    font-weight: bold;
    color: var(--secondary-color);
  }
  .subtitle {
    color: var(--secondary-color);
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
  p {
    text-align: justify;
  }
`;var kl=``+new URL(`video-parada-2-3.webm`,import.meta.url).href,Al=``+new URL(`refactor-2-3-2.png`,import.meta.url).href,jl=``+new URL(`refactor-2-3-3-.png`,import.meta.url).href,Ml=({number:e=`3`,paragraphs:t=[`Pneus: inspecione semanalmente. Sulcos gastos ou bolhas reduzem a aderência e aumentam o risco de derrapagens e aquaplanagem. Pneus carecas estão presentes em 1 a cada 5 acidentes em estradas brasileiras.`,`Freios: as pastilhas devem ser verificadas a cada 1.000 km. O freio dianteiro responde por até 70% da força de parada. A falha desse sistema costuma ser fatal.`,`Óleo e filtros: o óleo lubrifica e protege o motor. Trocas irregulares aumentam o risco de travamento. Em média, deve ser trocado a cada 2.000 a 3.000 km ou a cada 6 meses, conforme o fabricante.`,`Corrente de transmissão: precisa estar tensionada e lubrificada. Uma corrente frouxa pode escapar, travar a roda e derrubar a moto em movimento.`,`Luzes e retrovisores: fundamentais para "ver e ser visto". Qualquer falha elétrica cria zonas de invisibilidade, principalmente à noite.`,`Bateria e parte elétrica: sinais de fraqueza não devem ser ignorados. Uma falha elétrica pode deixar o piloto vulnerável em locais perigosos. Manutenção não é gasto, é investimento em segurança.`],imageAlt:n=`alt prosivório`})=>{let[r,i]=(0,_.useState)(0),a=()=>{r<2&&i(r+1)},o=()=>{r>0&&i(r-1)};return(0,I.jsx)(Tl,{className:`content`,children:(()=>{if(r===0)return(0,I.jsx)(El,{children:(0,I.jsxs)(`div`,{className:`carousel-flex slide-0`,children:[(0,I.jsx)(`div`,{className:`carousel-img`,children:(0,I.jsx)(`video`,{src:kl,width:`100%`,style:{opacity:`0.9`},autoPlay:!0,loop:!0,muted:!0})}),(0,I.jsxs)(`div`,{className:`content-text`,style:{display:`flex`,flexDirection:`column`,alignItems:`center`},children:[(0,I.jsxs)(Dl,{style:{},children:[(0,I.jsx)(`h1`,{className:`number`,children:e}),(0,I.jsxs)(`div`,{className:`title-text`,children:[(0,I.jsx)(`h2`,{className:`title`,children:(0,I.jsx)(`span`,{children:`Moto em dia,`})}),(0,I.jsx)(`h2`,{className:`title`,children:`vida preservada`})]})]}),(0,I.jsx)(Ol,{children:(0,I.jsx)(`p`,{className:`chamada`,style:{textAlign:`center`,margin:`0 auto`},children:`Uma moto bem cuidada não é luxo: é ferramenta de sobrevivência. De acordo com a PRF, cerca de 20% dos acidentes com motos em rodovias federais envolvem falhas mecânicas simples, que poderiam ter sido evitadas com manutenção preventiva.`})})]}),r<2&&(0,I.jsx)(`img`,{src:``+new URL(`seta.png`,import.meta.url).href,className:`arrow-button`,alt:`Avançar`,onClick:a})]})},r);if(r===1){let e=t.slice(0,3);return(0,I.jsx)(El,{children:(0,I.jsxs)(`div`,{className:`carousel-flex slide-0`,children:[(0,I.jsx)(`div`,{className:`carousel-img`,children:(0,I.jsx)(Io,{src:Al,alt:n,width:`100%`,objectFit:`contain`})}),(0,I.jsx)(`div`,{className:`content-text`,children:(0,I.jsxs)(Ol,{children:[(0,I.jsx)(`p`,{className:`subtitle`,style:{margin:`0`},children:(0,I.jsx)(`b`,{style:{margin:`0`},children:`Itens críticos a verificar regularmente:`})}),e.map((e,t)=>{let n=e.match(/^([^:]+:)\s*(.*)$/);if(n){let[,e,r]=n;return(0,I.jsxs)(`p`,{children:[(0,I.jsx)(`span`,{className:`paragraph-title`,children:e}),` `,r]},t)}return(0,I.jsx)(`p`,{children:e},t)})]})}),r>0&&(0,I.jsx)(`img`,{src:``+new URL(`seta-retornar.png`,import.meta.url).href,className:`arrow-button arrow-left`,alt:`Voltar`,onClick:o}),r<2&&(0,I.jsx)(`img`,{src:``+new URL(`seta.png`,import.meta.url).href,className:`arrow-button`,alt:`Avançar`,onClick:a})]})},r)}else{let e=t.slice(3,6);return(0,I.jsx)(El,{children:(0,I.jsxs)(`div`,{className:`carousel-flex slide-0`,children:[(0,I.jsx)(`div`,{className:`carousel-img`,children:(0,I.jsx)(Io,{src:jl,alt:n,width:`90%`,objectFit:`contain`})}),(0,I.jsx)(`div`,{className:`content-text`,children:(0,I.jsx)(Ol,{children:e.map((e,t)=>{let n=e.match(/^([^:]+:)\s*(.*)$/);if(n){let[,e,r]=n;return(0,I.jsxs)(`p`,{children:[(0,I.jsx)(`span`,{className:`paragraph-title`,children:e}),` `,r]},t)}return(0,I.jsx)(`p`,{children:e},t)})})}),r>0&&(0,I.jsx)(`img`,{src:``+new URL(`seta-retornar.png`,import.meta.url).href,className:`arrow-button arrow-left`,alt:`Voltar`,onClick:o})]})},r)}})()})};const Nl=F(z)`
  margin: 0 4rem;
  flex-direction: column;
  margin-top: 0 !important;
`;F(Mo)`
  width: 65%;
  margin-left: 0;
  margin-right: 1rem;

  .chamada,
  .conclusao {
    width: 100%;
  }
`;const Pl=F(B)`
  margin: 0 auto;
  .number {
  }
  .title-text span {
    font-size: 64px;
  }
`,Fl=F.section`
  padding: 0;

  display: flex;

  justify-content: center;
  flex-direction: column;

  align-items: center;

  .video-container {
    width: 70%;
    padding: 1rem;
    background: linear-gradient(to right, #7d7676ff, #3f3b3bff, #686767ff);
    border-radius: 16px;
    border: #808080 solid 2px;
    box-shadow: 4px 10px 12px rgba(0, 0, 0, 0.5);
  }

  video {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 12px;
    display: block;
    box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.7);
  }
`;var Il=``+new URL(`video-armadura.mp4`,import.meta.url).href,Ll=({number:e=`4`})=>(0,I.jsxs)(Nl,{className:`content`,children:[(0,I.jsxs)(Pl,{children:[(0,I.jsx)(`h1`,{className:`number`,children:e}),(0,I.jsx)(`div`,{className:`title-text`,children:(0,I.jsxs)(`h2`,{className:`title`,children:[`Equipamentos: a `,(0,I.jsx)(`span`,{children:`armadura`}),` do piloto`]})})]}),(0,I.jsx)(Fl,{children:(0,I.jsx)(`div`,{className:`video-container`,children:(0,I.jsx)(`video`,{src:Il,title:`Equipamentos: a armadura do piloto`,controls:!0,width:`100%`})})})]});const Rl=F(z)`
  flex-direction: column;
  .flex {
    display: flex;
    padding: 0;
    justify-content: center;
  }
`,zl=F(Mo)`
  margin-left: 5rem;
`,G=F(B)`
  margin-left: 5rem;
  margin-bottom: 0;
`,K=So,q=F(V)`
  object-fit: contain;
`;var J=``+new URL(`img-parada-2-5.png`,import.meta.url).href,Y=({number:e=`5`,imageSrc:t=J,imageAlt:n=`alt prosivório`})=>(0,I.jsxs)(Rl,{className:`content`,children:[(0,I.jsxs)(G,{children:[(0,I.jsx)(`h1`,{className:`number`,children:e}),(0,I.jsx)(`div`,{className:`title-text`,children:(0,I.jsxs)(`h2`,{children:[(0,I.jsx)(`span`,{children:` Atitudes `}),`que salvam vidas`]})})]}),(0,I.jsxs)(`div`,{className:`flex`,children:[(0,I.jsx)(zl,{children:(0,I.jsxs)(K,{children:[(0,I.jsx)(Go,{children:`A segurança não depende apenas da moto ou dos equipamentos, mas principalmente das atitudes diárias do motociclista.`}),(0,I.jsx)(qo,{items:[`Respeitar limites de velocidade: eles são definidos após estudos técnicos sobre as vias.`,`Nunca pilotar alcoolizado ou sob efeito de drogas: o álcool reduz em até 30% os reflexos e triplica o risco de acidentes.`,`Evitar disputas no trânsito: a moto pode ser ágil, mas não resiste a uma colisão com carros ou caminhões.`,`Planejar rotas: escolher caminhos iluminados e seguros reduz o risco de assaltos e colisões.`,`Descansar antes de pilotar: fadiga tem efeitos semelhantes à embriaguez. Uma noite mal dormida pode reduzir a atenção em até 50%.`]}),(0,I.jsx)(Go,{children:`Cada decisão responsável aumenta exponencialmente a chance de chegar bem ao destino.`})]})}),(0,I.jsx)(q,{className:`content-image`,src:t,alt:n,width:`50%`})]})]});const Bl=F(z)`
  flex-direction: column;
  .flex {
    display: flex;
  }
`,Vl=F(Mo)`
  margin-left: 5rem;
`,Hl=F(B)`
  margin-left: 5rem;
  margin-bottom: 0;
`,Ul=So;F(V)`
  padding: 0;
  object-fit: contain;
`,F.video`
  padding: 0;
  object-fit: contain;
  width: 100%;
  height: auto;
`;var Wl=``+new URL(`img-parada-2-6.png`,import.meta.url).href,X=``+new URL(`video-parada-2-6.webm`,import.meta.url).href,Gl=({number:e=`6`,imageSrc:t=Wl,imageAlt:n=`alt prosivório`})=>(0,I.jsxs)(Bl,{className:`content`,children:[(0,I.jsxs)(Hl,{children:[(0,I.jsx)(`h1`,{className:`number`,children:e}),(0,I.jsx)(`div`,{className:`title-text`,children:(0,I.jsxs)(`h2`,{children:[(0,I.jsx)(`span`,{children:` Casos reais`}),` deixam claro que:`]})})]}),(0,I.jsxs)(`div`,{className:`flex`,children:[(0,I.jsx)(Vl,{children:(0,I.jsxs)(Ul,{children:[(0,I.jsx)(Go,{children:`A segurança não depende apenas da moto ou dos equipamentos, mas principalmente das atitudes diárias do motociclista.`}),(0,I.jsx)(qo,{items:[`Respeitar limites de velocidade: eles são definidos após estudos técnicos sobre as vias.`,`Nunca pilotar alcoolizado ou sob efeito de drogas: o álcool reduz em até 30% os reflexos e triplica o risco de acidentes.`,`Evitar disputas no trânsito: a moto pode ser ágil, mas não resiste a uma colisão com carros ou caminhões.`,`Planejar rotas: escolher caminhos iluminados e seguros reduz o risco de assaltos e colisões.`,`Descansar antes de pilotar: fadiga tem efeitos semelhantes à embriaguez. Uma noite mal dormida pode reduzir a atenção em até 50%.`]}),(0,I.jsx)(Go,{children:`Cada decisão responsável aumenta exponencialmente a chance de chegar bem ao destino.`})]})}),(0,I.jsx)(`video`,{className:`content-image`,src:X,width:`45%`,autoPlay:!0,loop:!0,muted:!0})]})]}),Kl=``+new URL(`roadmap2.png`,import.meta.url).href;const ql=Ta`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,Jl=F.div`
  position: relative;
  margin: 0 auto;
  animation: ${ql} 1.55s ease-in-out forwards;

  .path {
    width: 1100px;
    margin: 12.5rem 0 11rem;
  }
`;var Yl=({onAnchorClick:e})=>(0,I.jsxs)(Jl,{children:[(0,I.jsx)(`img`,{className:`path`,src:Kl,alt:`estrada`}),(0,I.jsx)(ec,{anchors:Cc,startX:157.5,startY:220,spacing:157,yOffset:95,onAnchorClick:e})]});const Xl=[{title:`Pilotagem *Segura*`,paragraphs:[`Se no primeiro módulo entendemos o contexto e a legislação que moldam a realidade do motociclismo no Brasil, agora entramos no coração da prática: como garantir uma pilotagem realmente segura. A segurança não nasce apenas da técnica, mas da mentalidade, da disciplina e da forma como o motociclista se relaciona com a própria moto e com o trânsito.`,`Você pode estar se perguntando: 'Isso é para quem está começando ou para quem já está há anos nas estradas?' A resposta é simples: segurança é universal. Não importa o tempo de estrada, sempre há algo novo para aprender.`,`Pilotar com segurança significa assumir um pacto diário: cada partida é uma escolha consciente de voltar para casa inteiro, de preservar a própria vida e a de quem cruza o caminho.`]}];var Zl=``+new URL(`img-parada-2-3.png`,import.meta.url).href,Ql=6,$l=()=>{let e=Je(),{activeContentId:t,setActiveContent:n}=Ys(),{updateProgression:r}=Qs(),[i,a]=(0,_.useState)(!0),[o,s]=(0,_.useState)(!1),[c,l]=(0,_.useState)(new Set),u=()=>{a(!1)},d=e=>{n(e),s(!0)},f=()=>{if(l(e=>new Set([...e,t])),s(!1),t===Ql)e(`/retrovisor2`);else{let e=t+1;n(e),r(e)}},p=()=>{c.size===Ql&&e(`/retrovisor2`)},m=c.size===Ql;return(0,I.jsxs)(Co,{className:`container`,children:[(0,I.jsx)(Wa,{title:`SEGUNDA PARADA`,iconSrc:Vs,iconAlt:`placa parar`}),i&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(Mc,{sections:Xl}),(0,I.jsx)(Xa,{onClick:u,style:{marginTop:`40px`,marginBottom:`40px`},children:(0,I.jsx)(`img`,{src:``+new URL(`avancar.png`,import.meta.url).href,alt:`Avançar`})})]}),!i&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(Yl,{onAnchorClick:d}),m&&(0,I.jsx)(Xa,{onClick:p,style:{marginTop:`40px`,marginBottom:`40px`},children:(0,I.jsx)(`img`,{src:``+new URL(`avancar.png`,import.meta.url).href,alt:`Avançar para Retrovisor 2`})})]}),(0,I.jsx)(`div`,{className:`tarja-listra`,children:(0,I.jsx)(`img`,{src:lo,alt:``})}),(0,I.jsx)(rl,{isOpen:o,onClose:f,contentId:`parada2-content${t}`,children:(()=>{switch(t){case 1:return(0,I.jsx)(hl,{});case 2:return(0,I.jsx)(wl,{});case 3:return(0,I.jsx)(Ml,{});case 4:return(0,I.jsx)(Ll,{});case 5:return(0,I.jsx)(Y,{});case 6:return(0,I.jsx)(Gl,{});default:return null}})()})]})},eu=Pa(()=>(0,I.jsx)(Zs,{children:(0,I.jsx)(Js,{children:(0,I.jsx)($l,{})})}),{imageSources:[Vs,Ga,lo,ml,xl,Sl,Cl,Zl,ms,J,Wl],minLoadingTime:500,loadingText:`Preparando conteúdo...`});const tu=F(z)`
  margin: 0 4rem;
  flex-direction: column;

  .flex {
    display: flex;
    margin-bottom: 2rem;
    gap: 1rem;
  }
`;F(Mo)`
  width: 65%;
  margin-left: 0;
  margin-right: 1rem;

  .chamada,
  .conclusao {
    width: 100%;
  }
`;const nu=F(B)`
  margin: 0 auto;

  .number {
    line-height: 0.75;
  }
  .title-text span {
    font-size: 64px;
  }
`,ru=F.section`
  padding: 0;

  display: flex;

  justify-content: center;
  flex-direction: column;

  align-items: center;

  .video-container {
    width: 70%;
    padding: 1rem;
    background: linear-gradient(to right, #7d7676ff, #3f3b3bff, #686767ff);
    border-radius: 16px;
    border: #808080 solid 2px;
    box-shadow: 4px 10px 12px rgba(0, 0, 0, 0.5);
  }

  video {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 12px;
    display: block;
    box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.7);
  }
`;var iu=``+new URL(`video-cego.mp4`,import.meta.url).href,au=({number:e=`1`})=>(0,I.jsxs)(tu,{className:`content`,children:[(0,I.jsxs)(nu,{children:[(0,I.jsx)(`h1`,{className:`number`,children:e}),(0,I.jsx)(`div`,{className:`title-text`,children:(0,I.jsxs)(`h2`,{className:`title`,children:[`Ponto cego: o `,(0,I.jsx)(`span`,{children:`inimigo invisível`})]})})]}),(0,I.jsx)(ru,{children:(0,I.jsx)(`div`,{className:`video-container`,children:(0,I.jsx)(`video`,{src:iu,title:`Ponto cego: o inimigo invisível`,controls:!0,width:`100%`})})})]});const ou=F(z)`
  flex-direction: column;
  .flex {
    gap: 0;
  }
`,su=F(No)`
  margin: 0 auto;
  width: 90%;
  border-radius: 16px;
  overflow: hidden;
  animation: slideIn 0.5s ease-out;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  &::before {
    display: none;
  }
  &::after {
    border-radius: 0 0 16px 16px;
  }

  /* Aplicar border-radius e padding no container de conteúdo */
  > div {
    border-radius: 16px 16px 0 0;
    padding: 2.2rem 2rem;
  }

  /* Padding específico quando é o slide 0 */
  .carousel-flex.slide-0 {
    padding: 2rem;
  }

  .carousel-flex {
    display: flex;
    gap: 2rem;
    align-items: center;
    .carousel-img {
      flex: 2;
      position: relative;
      width: 100%;
      height: 100%;
      video {
        width: 130%;
        position: absolute;
        top: 0;
        left: -4rem;
        transform: translate(0, -60%);
      }
    }
    .content-text {
      flex: 5;
    }

    /* Centralização vertical apenas para slides sem título */
    &:not(.slide-0) .content-text {
      display: flex;
      align-items: center;
      min-height: 250px;
    }

    .arrow-button {
      width: 50px;
      height: 50px;
      cursor: pointer;
      transition: all 0.3s ease;
      animation: pulse 2s ease-in-out infinite;

      &:hover {
        animation: none;
        transform: scale(1.15);
      }

      &:active {
        transform: scale(0.95);
      }
    }

    @keyframes pulse {
      0%,
      100% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.05);
      }
    }
  }
  .card-paragraph {
    text-align: center;
    width: 50%;
    margin: 0 auto;
  }
`,cu=F(B)`
  flex: 3;
  margin: 0;
  .number {
    color: #96d6ac;
  }

  .title {
    color: #000 !important;
  }

  .title-text span {
    font-size: 64px;
  }
`,lu=So;var uu=``+new URL(`img-parada-3-2.png`,import.meta.url).href,du=``+new URL(`video-parada-3-2.webm`,import.meta.url).href,fu=({number:e=`2`,paragraphs:t=[`Fazer curvas é um dos maiores prazeres da pilotagem, mas também um dos momentos mais críticos. Muitos acidentes ocorrem por erros de cálculo ou excesso de confiança.`,`Equilíbrio entre dianteiro e traseiro: o freio dianteiro é responsável por cerca de 70% da frenagem. Ele deve ser usado progressivamente, sem travar a roda.`,`Freio traseiro: complementa a frenagem e ajuda a estabilizar a moto.`,`Frenagem de emergência: pressione os dois freios simultaneamente, com firmeza, mas de forma controlada. Se a roda dianteira travar, alivie levemente e reaplique a pressão.`,`Com garupa: use mais o freio traseiro para evitar que o passageiro seja projetado para frente.`,`Pisos escorregadios: em postos de combustível, faixas pintadas ou pisos molhados, dê preferência ao freio traseiro para não perder o equilíbrio.`,`Treinar em locais seguros é essencial. Clubes de motociclistas e pistas de treinamento oferecem ambientes controlados para desenvolver essas habilidades.`],imageSrc:n=uu,imageAlt:r=`alt prosivório`})=>{let[i,a]=(0,_.useState)(0),o=()=>{i<3&&a(i+1)},s=()=>{i>0&&a(i-1)};return(0,I.jsx)(ou,{className:`content`,children:(()=>{if(i===0)return(0,I.jsx)(su,{children:(0,I.jsxs)(`div`,{className:`carousel-flex slide-0`,children:[(0,I.jsx)(`div`,{className:`carousel-img`,children:(0,I.jsx)(`video`,{src:du,autoPlay:!0,loop:!0,muted:!0})}),(0,I.jsxs)(`div`,{className:`content-text`,children:[(0,I.jsxs)(cu,{children:[(0,I.jsx)(`h1`,{className:`number`,children:e}),(0,I.jsx)(`div`,{className:`title-text`,children:(0,I.jsxs)(`h2`,{className:`title`,children:[`Frenagem correta: `,(0,I.jsx)(`br`,{}),(0,I.jsx)(`span`,{children:`parar sem cair`})]})})]}),(0,I.jsx)(lu,{children:(0,I.jsx)(`p`,{children:t[0]})})]}),i<3&&(0,I.jsx)(`img`,{src:``+new URL(`seta.png`,import.meta.url).href,className:`arrow-button`,alt:`Avançar`,onClick:o})]})},i);if(i>=1&&i<=2){let e=(i-1)*2+1,n=[t[e],t[e+1]];return(0,I.jsx)(su,{children:(0,I.jsxs)(`div`,{className:`carousel-flex`,children:[i>0&&(0,I.jsx)(`img`,{src:``+new URL(`seta-retornar.png`,import.meta.url).href,className:`arrow-button`,alt:`Voltar`,onClick:s}),(0,I.jsx)(`div`,{className:`content-text`,style:{flex:`none`,width:`80%`,margin:`0 auto`},children:(0,I.jsx)(lu,{children:n.map((e,t)=>{let n=e.match(/^([^:]+:)\s*(.*)$/);if(n){let[,e,r]=n;return(0,I.jsxs)(`p`,{className:`card-paragraph`,children:[(0,I.jsx)(`span`,{className:`paragraph-title`,style:{padding:`8px 16px`,marginBottom:`16px`,borderRadius:`8px`},children:e}),(0,I.jsx)(`br`,{}),` `,r]},t)}return(0,I.jsx)(`p`,{className:`card-paragraph`,children:e},t)})})}),i<3&&(0,I.jsx)(`img`,{src:``+new URL(`seta.png`,import.meta.url).href,className:`arrow-button`,alt:`Avançar`,onClick:o})]})},i)}else return(0,I.jsx)(su,{children:(0,I.jsxs)(`div`,{className:`carousel-flex`,children:[i>0&&(0,I.jsx)(`img`,{src:``+new URL(`seta-retornar.png`,import.meta.url).href,className:`arrow-button`,alt:`Voltar`,onClick:s}),(0,I.jsx)(`div`,{className:`content-text`,style:{flex:`none`,width:`80%`,margin:`0 auto`},children:(0,I.jsxs)(lu,{children:[(()=>{let e=t[5],n=e.match(/^([^:]+:)\s*(.*)$/);if(n){let[,e,t]=n;return(0,I.jsxs)(`p`,{className:`card-paragraph`,style:{marginBottom:`2rem`},children:[(0,I.jsx)(`span`,{className:`paragraph-title`,style:{padding:`8px 16px`,marginBottom:`16px`,borderRadius:`8px`},children:e}),(0,I.jsx)(`br`,{}),` `,t]})}return(0,I.jsx)(`p`,{className:`card-paragraph`,style:{marginBottom:`2rem`},children:e})})(),(0,I.jsx)(`p`,{style:{color:`var(--secondary-color)`,fontStyle:`normal`,fontWeight:`bold`,textAlign:`center`},children:t[6]})]})}),i<3&&(0,I.jsx)(`img`,{src:``+new URL(`seta.png`,import.meta.url).href,className:`arrow-button`,alt:`Avançar`,onClick:o})]})},i)})()})};const pu=F(z)`
  flex-direction: column;
  .flex {
    display: flex;
    padding: 0;
    justify-content: center;
  }
`,mu=F(Mo)`
  margin-left: 5rem;
`,hu=F(B)`
  margin-left: 5rem;
  margin-bottom: 0;
`,gu=So,_u=F(V)`
  object-fit: contain;
`;var vu=``+new URL(`img-parada-3-3.png`,import.meta.url).href,yu=({number:e=`3`,imageSrc:t=vu,imageAlt:n=`alt prosivório`})=>(0,I.jsxs)(pu,{className:`content`,children:[(0,I.jsxs)(hu,{children:[(0,I.jsx)(`h1`,{className:`number`,children:e}),(0,I.jsx)(`div`,{className:`title-text`,children:(0,I.jsxs)(`h2`,{children:[(0,I.jsx)(`span`,{children:`Curvas:`}),` prazer e desafio`]})})]}),(0,I.jsxs)(`div`,{className:`flex`,children:[(0,I.jsx)(mu,{children:(0,I.jsxs)(gu,{children:[(0,I.jsx)(Go,{children:`Frenar uma moto não é apenas apertar os manetes. A distribuição de peso e a forma como o piloto aciona os freios mudam totalmente o resultado.`}),(0,I.jsx)(qo,{items:[`Equilíbrio entre dianteiro e traseiro: o freio dianteiro é responsável por cerca de 70% da frenagem. Ele deve ser usado progressivamente, sem travar a roda.`,`Freio traseiro: complementa a frenagem e ajuda a estabilizar a moto.`,`Frenagem de emergência: pressione os dois freios simultaneamente, com firmeza, mas de forma controlada. Se a roda dianteira travar, alivie levemente e reaplique a pressão.`,`Com garupa: use mais o freio traseiro para evitar que o passageiro seja projetado para frente.`,`Pisos escorregadios: em postos de combustível, faixas pintadas ou pisos molhados, dê preferência ao freio traseiro para não perder o equilíbrio.`]}),(0,I.jsx)(Go,{children:`Com a introdução do sistema ABS, muitas motos modernas oferecem mais segurança. Segundo a Abraciclo, o ABS pode reduzir em até 40% o risco de quedas em freadas bruscas.`})]})}),(0,I.jsx)(_u,{className:`content-image`,src:t,alt:n,width:`45%`})]})]});const bu=F(z)`
  flex-direction: column;
  .flex {
    display: flex;
    padding: 0;
    justify-content: center;
  }
`,xu=F(Mo)`
  margin-left: 5rem;
`,Su=F(B)`
  margin-left: 5rem;
  margin-bottom: 0;
`,Cu=So,wu=F(V)`
  object-fit: contain;
`;var Tu=``+new URL(`img-parada-3-4.png`,import.meta.url).href,Eu=({number:e=`4`,imageSrc:t=Tu,imageAlt:n=`alt prosivório`})=>(0,I.jsxs)(bu,{className:`content`,children:[(0,I.jsxs)(Su,{children:[(0,I.jsx)(`h1`,{className:`number`,children:e}),(0,I.jsxs)(`div`,{className:`title-text`,children:[(0,I.jsx)(`h2`,{children:(0,I.jsx)(`span`,{children:`Obstáculos:`})}),(0,I.jsx)(`h2`,{children:`buracos, lombadas e surpresas`})]})]}),(0,I.jsxs)(`div`,{className:`flex`,children:[(0,I.jsx)(xu,{children:(0,I.jsxs)(Cu,{children:[(0,I.jsx)(Go,{children:`As ruas e estradas brasileiras estão longe da perfeição. Saber lidar com irregularidades é parte fundamental da pilotagem.`}),(0,I.jsx)(qo,{items:[`Lombadas: reduza a velocidade antes, passe em linha reta e solte os freios.`,`Buracos: nunca freie em cima do buraco. Se não houver como desviar, alivie o peso da roda dianteira deslocando o corpo para trás.`,`Faixas pintadas e tachões: são extremamente escorregadios em dias de chuva. Evite passar inclinado ou acelerando sobre eles.`,`Tampas de bueiro: muitas vezes são lisas e escorregadias. Cruze em linha reta e sem frear.`]}),(0,I.jsx)(Go,{children:`Treinar em locais seguros é essencial. Clubes de motociclistas e pistas de treinamento oferecem ambientes controlados para desenvolver essas habilidades.`})]})}),(0,I.jsx)(wu,{className:`content-image`,src:t,alt:n,width:`45%`})]})]});const Du=F(z)`
  flex-direction: column;
  .flex {
    display: flex;
    padding: 0;
    justify-content: center;
  }
`,Ou=F(Mo)`
  margin-left: 5rem;
`,ku=F(B)`
  margin-left: 5rem;
  margin-bottom: 0;
`,Au=So,ju=F(V)`
  object-fit: contain;
`;var Mu=``+new URL(`img-parada-3-5.png`,import.meta.url).href,Nu=({number:e=`5`,imageSrc:t=Mu,imageAlt:n=`alt prosivório`})=>(0,I.jsxs)(Du,{className:`content`,children:[(0,I.jsxs)(ku,{children:[(0,I.jsx)(`h1`,{className:`number`,children:e}),(0,I.jsxs)(`div`,{className:`title-text`,children:[(0,I.jsxs)(`h2`,{children:[(0,I.jsx)(`span`,{children:`Clima:`}),` quando a`]}),(0,I.jsx)(`h2`,{children:`natureza dita o ritmo`})]})]}),(0,I.jsxs)(`div`,{className:`flex`,children:[(0,I.jsx)(Ou,{children:(0,I.jsxs)(Au,{children:[(0,I.jsxs)(Go,{children:[`O clima é um fator determinante para a segurança na pilotagem.`,` `]}),(0,I.jsx)(qo,{items:[`Chuva: reduza a velocidade, dobre a distância de segurança e use capa impermeável. Freadas bruscas devem ser evitadas. Pneus novos e bem calibrados fazem toda a diferença.`,`Vento lateral: segure o guidão firme, incline levemente contra o vento e reduza a velocidade. Em pontes e viadutos, a instabilidade pode ser maior.`,`Neblina: utilize farol baixo, evite ultrapassagens e mantenha distância dos veículos à frente. O uso de roupas reflexivas é indispensável.`,`À noite: a atenção precisa ser dobrada. Regule os faróis, evite trechos sem iluminação e utilize roupas claras ou com elementos refletivos.`]}),(0,I.jsx)(Go,{children:`Cada condição exige adaptação. Um piloto consciente nunca desafia os limites da natureza.`})]})}),(0,I.jsx)(ju,{className:`content-image`,src:t,alt:n,width:`45%`})]})]});const Pu=F(z)`
  flex-direction: column;
  .flex {
    display: flex;
    padding: 0;
    justify-content: center;
  }
`,Fu=F(Mo)`
  margin-left: 5rem;
`,Iu=F(B)`
  margin-left: 5rem;
  margin-bottom: 0;
`,Lu=So,Ru=F(V)`
  object-fit: contain;
  margin-left: -2rem;
`;var zu=``+new URL(`img-parada-3-6.png`,import.meta.url).href,Bu=({number:e=`6`,imageSrc:t=zu,imageAlt:n=`alt prosivório`})=>(0,I.jsxs)(Pu,{className:`content`,children:[(0,I.jsxs)(Iu,{children:[(0,I.jsx)(`h1`,{className:`number`,children:e}),(0,I.jsxs)(`div`,{className:`title-text`,children:[(0,I.jsxs)(`h2`,{children:[(0,I.jsx)(`span`,{children:`Postura: `}),`o corpo`]}),(0,I.jsx)(`h2`,{children:`também pilota`})]})]}),(0,I.jsxs)(`div`,{className:`flex`,children:[(0,I.jsx)(Fu,{children:(0,I.jsxs)(Lu,{children:[(0,I.jsx)(Go,{children:`A forma como o corpo se posiciona na moto influencia diretamente o controle e o cansaço.`}),(0,I.jsx)(qo,{items:[`Cabeça erguida: olhar sempre para frente amplia o campo de visão.`,`Coluna reta e ombros relaxados: reduzem a fadiga em trajetos longos.`,`Cotovelos flexionados: ajudam a absorver impactos.`,`Mãos firmes, mas não tensas: polegares voltados para baixo no centro das manoplas.`,`Pernas junto ao tanque: aumentam a estabilidade.`]}),(0,I.jsx)(Go,{children:`Uma postura correta reduz dores, aumenta a confiança e garante maior controle da moto em qualquer situação.`})]})}),(0,I.jsx)(Ru,{className:`content-image`,src:t,alt:n,width:`45%`})]})]});const Vu=F(z)`
  flex-direction: column;
  .flex {
    display: flex;
    padding: 0;
    justify-content: center;
  }
`,Hu=F(Mo)`
  margin-left: 5rem;
`,Uu=F(B)`
  margin-left: 5rem;
  margin-bottom: 0;
`,Wu=So,Z=F(V)`
  object-fit: contain;
`;var Gu=``+new URL(`img-parada-3-7.png`,import.meta.url).href,Ku=({number:e=`7`,imageSrc:t=Gu,imageAlt:n=`alt prosivório`})=>(0,I.jsxs)(Vu,{className:`content`,children:[(0,I.jsxs)(Uu,{children:[(0,I.jsx)(`h1`,{className:`number`,children:e}),(0,I.jsxs)(`div`,{className:`title-text`,children:[(0,I.jsx)(`h2`,{children:(0,I.jsx)(`span`,{children:`Áreas de conflito: `})}),(0,I.jsx)(`h2`,{children:`cruzamentos e conversões`})]})]}),(0,I.jsxs)(`div`,{className:`flex`,children:[(0,I.jsx)(Hu,{children:(0,I.jsxs)(Wu,{children:[(0,I.jsx)(Go,{children:`Cruzamentos, rotatórias e saídas de vias estão entre os locais mais perigosos para motociclistas.`}),(0,I.jsx)(qo,{items:[`Reduza a velocidade, mesmo que a preferência seja sua.`,`Sinalize sempre antes de converter.`,`Olhe para os dois lados, mesmo quando o sinal está aberto.`,`Desconfie: motoristas distraídos podem ignorar a sinalização.`]}),(0,I.jsxs)(Go,{children:[`Segundo o Infosiga-SP, grande parte dos acidentes fatais envolvendo motos acontece justamente em áreas de conversão e cruzamentos.`,` `]})]})}),(0,I.jsx)(Z,{className:`content-image`,src:t,alt:n,width:`45%`})]})]});const qu=F(z)`
  flex-direction: column;
  .flex {
    display: flex;
    padding: 0;
    justify-content: center;
  }
`,Ju=F(Mo)`
  margin-left: 5rem;
`,Yu=F(B)`
  margin-left: 5rem;
  margin-bottom: 0;
`,Xu=So,Zu=F(V)`
  object-fit: contain;
`;var Qu=``+new URL(`img-parada-3-8.png`,import.meta.url).href,$u=({number:e=`8`,imageSrc:t=Qu,imageAlt:n=`alt prosivório`})=>(0,I.jsxs)(qu,{className:`content`,children:[(0,I.jsxs)(Yu,{children:[(0,I.jsx)(`h1`,{className:`number`,children:e}),(0,I.jsx)(`div`,{className:`title-text`,children:(0,I.jsx)(`h2`,{children:(0,I.jsx)(`span`,{children:`Dicas do dia a dia: `})})})]}),(0,I.jsxs)(`div`,{className:`flex`,children:[(0,I.jsx)(Ju,{children:(0,I.jsxs)(Xu,{children:[(0,I.jsxs)(Go,{children:[`Além das técnicas específicas, algumas atitudes tornam a rotina mais segura:`,` `]}),(0,I.jsx)(qo,{items:[`Planeje rotas seguras: evite áreas perigosas ou mal iluminadas.`,`Varie trajetos: alternar caminhos reduz o risco de assaltos.`,`Ande em grupo quando possível: aumenta a visibilidade e reduz vulnerabilidade.`,`Use roupas visíveis: cores chamativas e faixas reflexivas ajudam motoristas a perceberem a moto.`]}),(0,I.jsx)(Go,{children:`Essas pequenas escolhas, somadas às técnicas, constroem um trânsito mais seguro.`})]})}),(0,I.jsx)(Zu,{className:`content-image`,src:t,alt:n,width:`45%`})]})]}),ed=``+new URL(`roadmap3.png`,import.meta.url).href;const td=Ta`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,nd=F.div`
  position: relative;
  margin-top: 1rem;
  margin: 0 auto;
  animation: ${td} 1.55s ease-in-out forwards;
  .path {
    width: 1100px;
    margin: 14.5rem 0 11rem;
  }
`;var rd=({onAnchorClick:e})=>(0,I.jsxs)(nd,{children:[(0,I.jsx)(`img`,{className:`path`,src:ed,alt:`estrada`}),(0,I.jsx)(ec,{anchors:wc,startX:114,startY:250,spacing:110,yOffset:67,onAnchorClick:e})]});const id=[{title:`*Técnicas* de Pilotagem`,paragraphs:[`Se até aqui exploramos o cenário das motocicletas no Brasil, a legislação, os riscos e a importância da pilotagem segura, agora mergulhamos no aspecto mais prático: as técnicas que ajudam o motociclista a dominar melhor a sua moto. A técnica é a ponte entre o prazer de pilotar e a responsabilidade de chegar vivo ao destino.`,`Você acha que a técnica é só para quem compete? Pois, se você pilota, essa parte é para você! Saber a hora de agir e quando se antecipar ao perigo pode ser o fator decisivo entre um passeio tranquilo ou um acidente evitável.`,`Dominar técnicas de pilotagem não significa ser um piloto de corrida, mas compreender como pequenas escolhas influenciam diretamente a segurança. Cada frenagem, cada curva, cada ultrapassagem pode ser a diferença entre um trajeto tranquilo e um acidente grave.`]}];var ad=8,od=()=>{let e=Je(),{activeContentId:t,setActiveContent:n}=Ys(),{updateProgression:r}=Qs(),[i,a]=(0,_.useState)(!0),[o,s]=(0,_.useState)(!1),[c,l]=(0,_.useState)(new Set);return c.size,(0,I.jsxs)(Co,{className:`container`,children:[(0,I.jsx)(Wa,{title:`TERCEIRA PARADA`,iconSrc:Vs,iconAlt:`placa parar`}),i&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(Mc,{sections:id}),(0,I.jsx)(Xa,{onClick:()=>{a(!1)},style:{marginTop:`40px`,marginBottom:`40px`},children:(0,I.jsx)(`img`,{src:``+new URL(`avancar.png`,import.meta.url).href,alt:`Avançar`})})]}),!i&&(0,I.jsx)(I.Fragment,{children:(0,I.jsx)(rd,{onAnchorClick:e=>{n(e),s(!0)}})}),(0,I.jsx)(`div`,{className:`tarja-listra`,children:(0,I.jsx)(`img`,{src:lo,alt:``})}),(0,I.jsx)(rl,{isOpen:o,onClose:()=>{if(l(e=>new Set([...e,t])),s(!1),t===ad)e(`/retrovisor3`);else{let e=t+1;n(e),r(e)}},contentId:`parada3-content${t}`,children:(()=>{switch(t){case 1:return(0,I.jsx)(au,{});case 2:return(0,I.jsx)(fu,{});case 3:return(0,I.jsx)(yu,{});case 4:return(0,I.jsx)(Eu,{});case 5:return(0,I.jsx)(Nu,{});case 6:return(0,I.jsx)(Bu,{});case 7:return(0,I.jsx)(Ku,{});case 8:return(0,I.jsx)($u,{});default:return null}})()})]})},sd=Pa(()=>(0,I.jsx)(Zs,{children:(0,I.jsx)(Js,{children:(0,I.jsx)(od,{})})}),{imageSources:[Vs,Ga,lo,ms,uu,vu,Tu,Mu,zu,Gu],minLoadingTime:500,loadingText:`Preparando conteúdo...`});const cd=F.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .provisional-screen {
    color: var(--secondary-color);
  }
`,ld=F.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  .progress-indicator {
    position: absolute;
    bottom: 4px;
    left: 7rem;
    font-size: 14px;
    color: var(--background-color);
    font-family: var(--font-family);
    font-weight: 500;
    z-index: 10;
  }

  .bg-image {
    background-color: var(--secondary-background);
    padding: 3rem 4rem;
    border-radius: 40px;
    position: absolute;
    width: 100%;
    min-width: 600px;
    height: auto;
    z-index: -1;
  }
  .text-container {
    min-height: 275px;
    width: 55%;
    min-width: 340px;

    .title {
      font-size: 24px;
      color: var(--background-color);
      font-weight: 700;
      margin: 1rem auto 0.7rem;
      font-family: var(--font-family);

      justify-self: center;
    }

    .question-title {
      color: var(--primary-color);
      font-style: normal;
      font-weight: 700;
      font-family: var(--font-family);
      padding: 8px 16px 6px;

      background-color: var(--accent-green-primary);
      border-radius: 50px;
    }

    .question-text {
      color: black;
      font-style: italic;
      font-family: var(--font-family);
      line-height: 1;
      margin: 1rem 0 0.7rem;
    }

    .options {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        color: #000;
        font-weight: 300;
        font-style: normal;
        font-family: var(--font-family);
        border: 1px solid transparent;
        border-radius: 50px;
        padding: 4px 12px 2px;
        margin: 2px 0;
        cursor: pointer;
        transition: all 0.3s ease;
        position: relative;
        padding-left: 25px;

        .feedback-icon {
          width: 20px;
          height: 20px;
          position: absolute;
          left: -2em;
          top: 50%;
          transform: translateY(-50%);
        }

        &:hover {
          border: 1px solid var(--accent-green-primary);
        }

        &.selected {
          background-color: var(--primary-color);
          border: 1px solid var(--accent-green-primary);
        }

        /* Estados após responder */
        &.correct {
          border: 1px solid #22c55e !important; /* Verde */
          background-color: #22c55e;
          color: #fff !important;
        }

        &.incorrect {
          background-color: #ef4444 !important; /* Vermelho claro */
          border: 1px solid #ef4444 !important; /* Vermelho */
          color: #fff !important;
        }

        /* Bullet que fica da cor accent-primary quando selecionado */
        &::before {
          content: "●";
          position: absolute;
          left: 8px;
          color: ${e=>e.className?.includes(`selected`)?`#000`:`#838181ff`};
        }

        &.selected::before {
          color: var(--accent-green-primary);
        }
      }
    }
  }

  .quiz-button {
    margin-top: 3.6rem;
    position: relative;
    font-size: 16px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-style: italic;
    color: var(--primary-color);
    border: none;
    font-family: var(--font-family);
    width: 30%;
    padding: 8px 16px 6px;
    line-height: 1;
    background-color: var(--accent-green-primary);
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover:not(:disabled) {
      transform: translateY(-2px);
    }

    &:disabled {
      background-color: var(--disabled-color);
      cursor: not-allowed;
    }

    .button-text {
      margin: 0;
    }

    .seta {
      position: absolute;
      right: 16px;
      top: 50%;
      transform: translateY(-50%);
      width: 16px;
      height: 16px;
    }
  }

  .score {
    text-align: center;
    padding: 2rem;

    p {
      font-size: 18px;
      color: var(--background-color);
      font-family: var(--font-family);
      margin: 1rem 0;

      &:first-child {
        font-size: 24px;
        font-weight: 700;
        color: var(--accent-green-primary);
      }

      &:last-child {
        font-weight: 600;
        font-style: italic;
      }
    }
  }
`;var ud=``+new URL(`quiz-background.png`,import.meta.url).href;const dd={title:`VAMOS PRATICAR?`,questions:[{id:1,question:`Quais comportamentos são mais frequentemente associados a acidentes envolvendo motociclistas?`,options:[{id:`a`,text:`Excesso de velocidade e uso de celular`},{id:`b`,text:`Ultrapassagens seguidas e cansaço`},{id:`c`,text:`Excesso de confiança e imprudência`},{id:`d`,text:`Falta de sinalização e condições ruins de pista`}],correctAnswer:`c`},{id:2,question:`O que a legislação brasileira diz sobre o uso do corredor entre veículos?`,options:[{id:`a`,text:`O corredor é proibido em todas as circunstâncias`},{id:`b`,text:`O uso do corredor é permitido, mas exige cautela`},{id:`c`,text:`Só pode ser utilizado se houver faixas delimitadas`},{id:`d`,text:`O corredor só pode ser usado em cidades de grande porte`}],correctAnswer:`b`},{id:3,question:`Qual infração é considerada uma das mais perigosas no trânsito para motociclistas?`,options:[{id:`a`,text:`Excesso de velocidade`},{id:`b`,text:`Não usar capacete`},{id:`c`,text:`Usar celular enquanto pilota`},{id:`d`,text:`Rodar sem iluminação em vias urbanas`}],correctAnswer:`b`},{id:4,question:`De acordo com o conteúdo sobre condução defensiva, qual é o princípio básico para reduzir o risco de acidentes?`,options:[{id:`a`,text:`Evitar ultrapassagens em alta velocidade`},{id:`b`,text:`Prever cenários adversos e manter distância de segurança`},{id:`c`,text:`Andar sempre no limite de velocidade da via`},{id:`d`,text:`Evitar qualquer contato visual com outros motoristas`}],correctAnswer:`b`},{id:5,question:`O que é recomendado para garantir que a moto esteja em condições de segurança?`,options:[{id:`a`,text:`Manter a moto o mais leve possível, sem acessórios`},{id:`b`,text:`Realizar manutenção preventiva nos itens essenciais`},{id:`c`,text:`Fazer manutenção apenas quando a moto apresentar problemas`},{id:`d`,text:`Substituir as peças apenas quando houver desgaste visível`}],correctAnswer:`b`},{id:6,question:`Entre os equipamentos de segurança recomendados, qual deles pode reduzir a gravidade das lesões em braços e tronco em até 60%?`,options:[{id:`a`,text:`Capacete de última geração`},{id:`b`,text:`Jaqueta com proteções nos ombros, coluna e cotovelos`},{id:`c`,text:`Luvas reforçadas para maior aderência`},{id:`d`,text:`Calças reforçadas para maior conforto`}],correctAnswer:`b`},{id:7,question:`Qual é o principal risco associado ao ponto cego dos veículos?`,options:[{id:`a`,text:`O motociclista não consegue ver outros veículos`},{id:`b`,text:`Os motoristas dos veículos pesados não conseguem ver o motociclista`},{id:`c`,text:`O motociclista se desvia involuntariamente para a faixa dos outros veículos`},{id:`d`,text:`A visibilidade do trânsito melhora, mas com riscos a mais`}],correctAnswer:`b`},{id:8,question:`Qual é a recomendação para evitar riscos ao fazer curvas?`,options:[{id:`a`,text:`Acelerar com mais intensidade para controlar a moto`},{id:`b`,text:`Entrar na curva sem reduzir a velocidade`},{id:`c`,text:`Reduzir a velocidade antes da curva e manter a aceleração constante`},{id:`d`,text:`Virar o corpo para o lado oposto da curva para maior estabilidade`}],correctAnswer:`c`},{id:9,question:`Qual a importância de uma postura correta ao pilotar uma moto?`,options:[{id:`a`,text:`Aumenta a agilidade do piloto`},{id:`b`,text:`Reduz a fadiga e melhora o controle da moto`},{id:`c`,text:`Diminui o impacto da aceleração nos músculos`},{id:`d`,text:`Permite que o piloto pilote sem usar equipamentos de proteção`}],correctAnswer:`b`},{id:10,question:`De acordo com as dicas do dia a dia, qual é uma boa prática para aumentar a segurança?`,options:[{id:`a`,text:`Usar a moto sempre nas mesmas rotas`},{id:`b`,text:`Usar roupas visíveis para aumentar a percepção dos motoristas`},{id:`c`,text:`Acelerar nas ruas movimentadas para evitar acidentes`},{id:`d`,text:`Usar fones de ouvido enquanto pilota para maior concentração`}],correctAnswer:`b`}]};var fd=``+new URL(`sinal-vermelho.png`,import.meta.url).href,pd=``+new URL(`sinal-verde.png`,import.meta.url).href,md=``+new URL(`sinal-amarelo.png`,import.meta.url).href,hd=``+new URL(`quiz-title.png`,import.meta.url).href;const gd=F.div`
  width: 50%;
  display: flex;
  margin: 2rem auto;
  display: flex;

  position: relative;

  flex-direction: column;
  align-items: center;

  border-radius: 40px;

  background-color: var(--secondary-background);
  padding: 3rem 4rem;

  .next-button-container {
    position: absolute;
    bottom: -6.5rem;
    left: 50%;
    transform: translateX(-50%);
  }
`,_d=F.div`
  position: relative;
  .title-bg {
    height: 5.5rem;
  }
  .title-content {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 2rem;
    font-weight: bold;
    z-index: 12;
    margin: 0;
    text-align: center;
    line-height: 1;
  }
`,vd=F.div`
  display: flex;

  position: relative;
  background-color: #c2eecb;
  color: var(--paragraph-color);
  border-radius: 40px;
  padding: 3rem 3rem;
  .feedback-text {
    font-size: 20px;
    line-height: 1.5;
  }
  .feedback-title {
    font-style: normal;
    font-weight: 700;
  }

  .semaphore {
    width: 5rem;
    object-fit: contain;
  }
`,yd=F.div`
  color: ${e=>e.$scoreTextColor||`var(--primary-color)`};
  position: absolute;
  top: 0;
  right: 0;
  width: 10rem;
  padding: 0.9rem 2rem 0.8rem;
  text-align: center;
  line-height: 1.2;
  border-radius: 40px;
  background-color: ${e=>e.$scoreBackground||`#008300`};
  font-family: Acumin Pro Condensed;
  font-weight: 700;
  font-style: Bold Italic;
  font-size: 16px;
`;var Q=e=>{let{correct:t}=e;return t>=8?`high-performance`:t>=6?`medium-performance`:`low-performance`},bd=({type:e,totalScore:t,nextButton:n,restartButton:r})=>{let i=e||Q(t),a=(()=>{switch(i){case`high-performance`:return{title:`Desempenho Alto!`,text:`Parabéns, piloto! Você mostrou que leva a sério tanto a liberdade das duas rodas quanto a responsabilidade que vem com ela. Conhecimento assim protege você e quem está ao seu redor. Agora é colocar em prática e rodar com segurança!`,semaphore:pd,scoreBackground:`var(--secondary-color)`,scoreTextColor:`#fff`};case`medium-performance`:return{title:`Desempenho Médio!`,text:`Passou, mas foi no limite! Você absorveu o essencial, mas alguns pontos importantes ficaram para trás. Vale a pena revisar o material para garantir que, na prática, você esteja realmente preparado. Segurança não aceita "mais ou menos".`,semaphore:md,scoreBackground:`#FFC300`,scoreTextColor:`var(--paragraph-color)`};case`low-performance`:return{title:`Desempenho Baixo!`,text:`Infelizmente você não atingiu o mínimo necessário desta vez. Mas calma: isso não é sobre passar ou reprovar, é sobre estar preparado para preservar sua vida. Recomendamos que você refaça o treinamento desde o início, com atenção aos detalhes. Cada informação aqui pode fazer a diferença lá na pista.`,semaphore:fd,scoreBackground:`#FF0000`,scoreTextColor:`var(--primary-color)`};default:return{title:`Desempenho Alto!`,text:`Parabéns, piloto! Você mostrou que leva a sério tanto a liberdade das duas rodas quanto a responsabilidade que vem com ela. Conhecimento assim protege você e quem está ao seu redor. Agora é colocar em prática e rodar com segurança!`,semaphore:pd,scoreBackground:`var(--secondary-color)`,scoreTextColor:`#fff`}}})();return(0,I.jsxs)(gd,{children:[(0,I.jsxs)(_d,{children:[(0,I.jsx)(`img`,{className:`title-bg`,src:hd}),(0,I.jsx)(`h2`,{className:`title-content`,children:`FINAL`})]}),(0,I.jsxs)(vd,{children:[(0,I.jsxs)(`div`,{className:`text`,children:[(0,I.jsx)(`h2`,{className:`feedback-title`,children:a.title}),(0,I.jsx)(`p`,{className:`feedback-text`,children:a.text})]}),(0,I.jsxs)(yd,{$scoreBackground:a.scoreBackground,$scoreTextColor:a.scoreTextColor,children:[t.correct,`/`,t.total,` acertos`]}),(0,I.jsx)(`img`,{className:`semaphore`,src:a.semaphore})]}),i===`low-performance`&&r&&(0,I.jsx)(`div`,{style:{textAlign:`center`,marginTop:`2rem`},children:r}),i!==`low-performance`&&n&&(0,I.jsx)(`div`,{style:{textAlign:`center`,marginTop:`2rem`},children:n})]})},xd=``+new URL(`reiniciar.png`,import.meta.url).href;function Sd(e){let t=[...e];for(let e=t.length-1;e>0;e--){let n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}function Cd(e){return Array.from({length:e},(e,t)=>String.fromCharCode(97+t))}function wd(e){let t=Sd(e.options),n=Cd(t.length),r=t.map((e,t)=>({...e,originalId:e.id,id:n[t]})),i=n[t.findIndex(t=>t.id===e.correctAnswer)];return{...e,options:r,correctAnswer:i,originalCorrectAnswer:e.correctAnswer}}var Td=Pa(()=>{let[e]=(0,_.useState)(()=>dd.questions.map(e=>wd(e))),[t,n]=(0,_.useState)(0),[r,i]=(0,_.useState)({}),[a,o]=(0,_.useState)(!1),[s,c]=(0,_.useState)(new Set),l=Je(),{completeLesson:u,setSuspendData:d}=Mn(),f=()=>{let t=0;e.forEach(e=>{r[e.id]===e.correctAnswer&&t++});let n=Math.round(t/e.length*100);return{correct:t,total:e.length,percentage:n}},p=()=>{let e=f(),t=e.correct>=6;u&&typeof u==`function`&&u(e.percentage,t),l(`/destinofinal`)},m=()=>{localStorage.removeItem(`timer-storage`),localStorage.removeItem(`progression-storage`),localStorage.removeItem(`quiz-scores-storage`),d&&typeof d==`function`&&d(``),l(`/`),window.location.reload()};if(a)return(0,I.jsx)(`div`,{children:(0,I.jsx)(bd,{totalScore:f(),nextButton:(0,I.jsx)(Xa,{onClick:p,children:(0,I.jsx)(`img`,{src:Ga,alt:`Finalizar Curso`})}),restartButton:(0,I.jsx)(Xa,{onClick:m,children:(0,I.jsx)(`img`,{src:xd,alt:`Reiniciar Curso`})})})});let h=e[t],g=r[h.id],v=s.has(h.id),y=e=>{v||i(t=>({...t,[h.id]:e}))};return(0,I.jsx)(`div`,{children:(0,I.jsx)(cd,{children:(0,I.jsxs)(ld,{children:[(0,I.jsx)(`img`,{className:`bg-image`,src:ud,alt:`Quiz Background`}),(0,I.jsxs)(`div`,{className:`progress-indicator`,children:[t+1,` de `,e.length]}),(0,I.jsxs)(`div`,{className:`text-container`,children:[(0,I.jsx)(`h3`,{className:`title`,children:dd.title}),(0,I.jsxs)(`span`,{className:`question-title`,children:[`Pergunta `,h.id]}),(0,I.jsx)(`p`,{className:`question-text`,children:h.question}),(0,I.jsx)(`ul`,{className:`options`,children:h.options.map(e=>{let t=g===e.id,n=e.id===h.correctAnswer,r=``;return t&&(r+=`selected `),v&&(t&&!n&&(r+=`incorrect `),n&&(r+=`correct `)),(0,I.jsxs)(`li`,{className:r.trim(),onClick:()=>!v&&y(e.id),style:{cursor:v?`default`:`pointer`},children:[e.id,`) `,e.text,v&&(t||n)&&(0,I.jsx)(`img`,{className:`feedback-icon`,src:n?``+new URL(`acerto.png`,import.meta.url).href:``+new URL(`erro.png`,import.meta.url).href,alt:n?`Correto`:`Incorreto`})]},e.id)})})]}),(0,I.jsxs)(`button`,{className:`quiz-button`,onClick:()=>{if(g)if(!v)c(e=>new Set([...e,h.id]));else if(t===e.length-1){o(!0);let e=f();u&&typeof u==`function`&&u(e.percentage,e.correct>=6)}else n(e=>e+1)},disabled:!g,children:[(0,I.jsx)(`p`,{className:`button-text`,children:v?t===e.length-1?`FINALIZAR`:`PRÓXIMA`:`RESPONDER`}),(0,I.jsx)(`img`,{className:`seta`,src:ns,alt:`Seta`})]})]})})})},{imageSources:[ud,ns,Ga,xd,``+new URL(`acerto.png`,import.meta.url).href,``+new URL(`erro.png`,import.meta.url).href],minLoadingTime:400,loadingText:`Preparando quiz...`});const Ed=F.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`,Dd=F(No)`
  margin: 0 auto;
  width: 80%;
  border-radius: 16px;
  overflow: hidden;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  &::before {
    display: none;
  }
  &::after {
    border-radius: 0 0 16px 16px;
  }

  > div {
    border-radius: 16px 16px 0 0;
    padding: 0;
  }
`,Od=F.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 3rem;
  padding: 1rem 2rem;
  background-color: #96d6ac;

  .atividade-title {
    height: 100px;
  }

  .instruction-text {
    color: #49594c;
    font-family: "Acumin Pro Condensed";
    font-size: 2.1rem;
    font-style: italic;
    font-weight: 700;
    line-height: 30px; /* 83.333% */
  }
  .instruction-text-2 {
    color: #115727;
    font-family: "Acumin Pro Condensed";
    font-size: 1.5rem;
    font-style: italic;
    font-weight: 700;
    line-height: 24px; /* 100% */
  }
`,kd=F.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: 5rem;
  padding: 0 3rem;
  min-height: 360px;
`,Ad=F.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
`,jd=F.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  z-index: 2;
`,Md=F.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  z-index: 2;
`,$=F.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  min-height: 80px;

  &.right-item {
    justify-content: flex-start;
  }

  .text-content {
    flex: 1;
    display: flex;
    align-items: center;
  }

  .left-text {
    font-family: "Acumin Pro Condensed", sans-serif;
    font-size: 1.24rem;
    font-weight: 600;
    font-style: italic;
    line-height: 28px;
    color: #000;
    width: 100%;
    text-align: right;
  }

  .right-text {
    font-family: "Acumin Pro Condensed", sans-serif;
    font-size: 1.25rem;
    font-weight: 600;
    font-style: normal;
    line-height: 28px;
    color: #000;
    width: 100%;
    text-align: left;
  }

  .activity-icon {
    width: 80px;
    height: 80px;
    min-width: 80px;
    object-fit: contain;
    transform: scale(1.2);
  }
`,Nd=F.div`
  width: 2rem;
  height: 2rem;
  min-width: 2rem;
  background-color: ${e=>e.$connected?`#137b1a`:e.$active?`#56AA43`:`#115727`};
  border: ${e=>e.$active?`3px solid #fff`:`none`};
  border-radius: 50%;
  cursor: ${e=>e.$connected?`not-allowed`:`pointer`};
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

  &:hover:not([style*="not-allowed"]) {
    transform: scale(1.1);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
  }
`,Pd=F.div`
  width: 2rem;
  height: 2rem;
  min-width: 2rem;
  background-color: ${e=>e.$error?`#ff0000`:e.$connected?`#137b1a`:e.$active?`#7bc794`:`#56AA43`};
  border: ${e=>e.$active&&!e.$connected?`3px solid #fff`:`none`};
  border-radius: 50%;
  cursor: ${e=>e.$connected?`not-allowed`:e.$active?`pointer`:`default`};
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

  ${e=>e.$error&&`
    animation: errorBlink 0.5s ease;
    
    @keyframes errorBlink {
      0%, 100% {
        background-color: #56AA43;
      }
      50% {
        background-color: #ff0000;
      }
    }
  `}

  ${e=>e.$active&&!e.$connected&&!e.$error&&`
    animation: pulse 2s ease-in-out infinite;
    
    @keyframes pulse {
      0%, 100% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.2);
      }
    }
  `}
`,Fd=F.div`
  width: calc(100% - 4rem);
  max-width: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`,Id=F.div`
  flex: 1;
  height: 50px;
  background-color: ${e=>e.$completed?`#137b1a`:`#2d5f44`};
  border-radius: 30px;
  overflow: visible;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  position: relative;
  display: flex;
  align-items: center;
  padding: 5px;
  transition: background-color 0.5s ease;
`,Ld=F.span`
  color: #fff;
  text-align: center;
  font-family: "Acumin Pro Condensed";
  font-size: 1.2rem;
  font-style: italic;
  font-weight: 700;
  line-height: 30px; /* 125% */
  z-index: 2;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  transition: opacity 0.5s ease;
  opacity: ${e=>e.$completed?0:1};

  &.completed {
    opacity: ${e=>e.$completed?1:0};
  }
`,Rd=F.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;

  &::after {
    content: "";
    position: absolute;
    left: ${e=>e.$progress===100?`calc(100% - 40px)`:`0`};
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    background-color: ${e=>e.$progress===100?`#96d6ac`:`#fff`};
    border-radius: 50%;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    transition: left 0.8s ease, background-color 0.5s ease 0.3s;
  }
`;var zd=``+new URL(`atividade.png`,import.meta.url).href,Bd=``+new URL(`atividade-1-1.png`,import.meta.url).href,Vd=``+new URL(`atividade-1-2.png`,import.meta.url).href,Hd=``+new URL(`atividade-1-3.png`,import.meta.url).href,Ud=[{id:1,leftText:`Excesso de velocidade`,rightText:`Responsável por boa parte dos acidentes graves.`,icon:Bd,connected:!1},{id:2,leftText:`Falta de capacete`,rightText:`O uso correto reduz em até 70% o risco de morte em colisões (OMS).`,icon:Vd,connected:!1},{id:3,leftText:`Zigue-zague no corredor`,rightText:`Aumenta exponencialmente as chances de colisão lateral.`,icon:Hd,connected:!1}],Wd=Pa(()=>{let e=Je(),{reportProgress:t}=Mn(),[n]=(0,_.useState)(()=>[...Ud].sort(()=>Math.random()-.5)),[r,i]=(0,_.useState)(Ud),[a,o]=(0,_.useState)(null),[s,c]=(0,_.useState)([]),[l,u]=(0,_.useState)(null),[d,f]=(0,_.useState)(!1),p=(0,_.useRef)([]),m=(0,_.useRef)([]),h=r.length,g=r.filter(e=>e.connected).length,v=g/h*100,y=g===h;(0,_.useEffect)(()=>{y&&!d&&t&&(t({score:100,completion:`incomplete`,success:`passed`}),f(!0))},[y,d,t]);let b=e=>{r.find(t=>t.id===e)?.connected||o(e)},x=e=>{a!==null&&(a===e?(i(t=>t.map(t=>t.id===e?{...t,connected:!0}:t)),c(t=>[...t,{from:a,to:e}]),o(null)):(u(e),setTimeout(()=>{u(null)},500)))},S=()=>{y&&e(`/parada2`)},C=e=>{let t=p.current[e];if(!t)return null;let n=t.getBoundingClientRect(),r=t.closest(`.game-area`);if(!r)return null;let i=r.getBoundingClientRect();return{x:n.left+n.width/2-i.left,y:n.top+n.height/2-i.top}},w=e=>{let t=n.findIndex(t=>t.id===e);if(t===-1)return null;let r=m.current[t];if(!r)return null;let i=r.getBoundingClientRect(),a=r.closest(`.game-area`);if(!a)return null;let o=a.getBoundingClientRect();return{x:i.left+i.width/2-o.left,y:i.top+i.height/2-o.top}};return(0,I.jsxs)(Ed,{children:[(0,I.jsxs)(Dd,{children:[(0,I.jsxs)(Od,{children:[(0,I.jsx)(`img`,{src:zd,className:`atividade-title`,alt:`Avançar`}),(0,I.jsxs)(`p`,{className:`instruction-text`,children:[`Ligue as infrações com suas `,(0,I.jsx)(`br`,{}),` informações correspondentes.`]}),(0,I.jsxs)(`p`,{className:`instruction-text-2`,children:[`Clique em um ponto e `,(0,I.jsx)(`br`,{}),` ligue com outro ponto`]})]}),(0,I.jsxs)(kd,{className:`game-area`,children:[(0,I.jsx)(Ad,{children:s.map((e,t)=>{let n=C(r.findIndex(t=>t.id===e.from)),i=w(e.to);return!n||!i?null:(0,I.jsx)(`line`,{x1:n.x,y1:n.y,x2:i.x,y2:i.y,stroke:`#137b1a`,strokeWidth:`5`},t)})}),(0,I.jsx)(jd,{children:r.map((e,t)=>(0,I.jsxs)($,{children:[(0,I.jsx)(`div`,{className:`text-content`,children:(0,I.jsx)(`span`,{className:`left-text`,children:e.leftText})}),(0,I.jsx)(`img`,{src:e.icon,alt:e.leftText,className:`activity-icon`}),(0,I.jsx)(Nd,{ref:e=>{p.current[t]=e},$active:a===e.id,$connected:e.connected,onClick:()=>b(e.id)})]},e.id))}),(0,I.jsx)(Md,{children:n.map((e,t)=>(0,I.jsxs)($,{className:`right-item`,children:[(0,I.jsx)(Pd,{ref:e=>{m.current[t]=e},$connected:r.find(t=>t.id===e.id)?.connected||!1,$active:a!==null,$error:l===e.id,onClick:()=>x(e.id)}),(0,I.jsx)(`div`,{className:`text-content`,children:(0,I.jsx)(`span`,{className:`right-text`,children:e.rightText})})]},e.id))})]})]}),(0,I.jsxs)(Fd,{children:[(0,I.jsx)(Id,{$completed:y,children:(0,I.jsxs)(Rd,{$progress:v,children:[(0,I.jsx)(Ld,{$completed:y,children:`Conclua a atividade para avançar`}),(0,I.jsx)(Ld,{$completed:y,className:`completed`,children:`Conteúdo concluído! Você pode avançar.`})]})}),(0,I.jsx)(Xa,{$canAdvance:y,onClick:S,children:(0,I.jsx)(`img`,{src:Ga,alt:`Avançar`})})]})]})},{imageSources:[zd,Bd,Vd,Hd,Ga],minLoadingTime:400,loadingText:`Carregando atividade...`});const Gd=F.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  padding: 2rem 2rem 0.5rem 2rem;
`,Kd=F(No)`
  margin: 0 auto;
  width: 80%;
  border-radius: 16px;
  overflow: hidden;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  &::before {
    display: none;
  }
  &::after {
    border-radius: 0 0 16px 16px;
  }

  > div {
    border-radius: 16px 16px 0 0;
    padding: 0;
  }
`,qd=F.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  padding: 1rem 2rem;
  background-color: #96d6ac;

  .atividade-title {
    height: 100px;
  }

  .instruction-text {
    color: #49594c;
    font-family: "Acumin Pro Condensed";
    font-size: 2.1rem;
    font-style: italic;
    font-weight: 700;
    line-height: 30px; /* 83.333% */
  }
  .instruction-text-2 {
    color: #115727;
    font-family: "Acumin Pro Condensed";
    font-size: 1.5rem;
    font-style: italic;
    font-weight: 700;
    line-height: 24px; /* 100% */
  }
`,Jd=F.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 2rem;
  padding: 1.5rem 3rem;
  min-height: 360px;
  background-color: ${e=>e.$showError?`rgba(255, 0, 0, 0.5)`:`transparent`} !important;
  transition: background-color 0.3s ease;
`,Yd=F.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  z-index: 2;
`,Xd=F.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  z-index: 2;
`,Zd=F.div`
  width: calc(100% - 4rem);
  max-width: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`,Qd=F.div`
  flex: 1;
  height: 50px;
  background-color: ${e=>e.$completed?`#137b1a`:`#2d5f44`};
  border-radius: 30px;
  overflow: visible;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  position: relative;
  display: flex;
  align-items: center;
  padding: 5px;
  transition: background-color 0.5s ease;
`,$d=F.span`
  color: #fff;
  text-align: center;
  font-family: "Acumin Pro Condensed";
  font-size: 1.2rem;
  font-style: italic;
  font-weight: 700;
  line-height: 30px; /* 125% */
  z-index: 2;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  transition: opacity 0.5s ease;
  opacity: ${e=>e.$completed?0:1};

  &.completed {
    opacity: ${e=>e.$completed?1:0};
  }
`,ef=F.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;

  &::after {
    content: "";
    position: absolute;
    left: ${e=>e.$progress===100?`calc(100% - 40px)`:`0`};
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    background-color: ${e=>e.$progress===100?`#96d6ac`:`#fff`};
    border-radius: 50%;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    transition: left 0.8s ease, background-color 0.5s ease 0.3s;
  }
`,tf=F.div`
  position: relative;
  width: auto;
  height: 350px;
  margin: 0 auto;
  cursor: ${e=>e.$showError?`not-allowed`:`default`};

  .boneco-base {
    height: 100%;
    width: auto;
    display: block;
    margin: 0 auto;
  }

  .equipment-boneco {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 100%;
    width: auto;
    pointer-events: none;
    animation: fadeIn 0.3s ease;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  ${e=>e.$showError&&`
    animation: shake 0.5s ease;

    
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      10% { transform: translateX(-5px); }
      25% { transform: translateX(7px); }
      40% { transform: translateX(-5px); }
      55% { transform: translateX(5px); }
      70% { transform: translateX(-3px); }
      85% { transform: translateX(3px); }
    }
  `}
`,nf=F.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  padding: 2rem;
  align-items: center;
`,rf=F.div`
  cursor: ${e=>e.$isUsed?`not-allowed`:`grab`};
  opacity: ${e=>e.$isUsed?.3:1};
  transition: all 0.3s ease;
  filter: ${e=>e.$isUsed?`grayscale(100%)`:`none`};
  display: flex;
  align-items: center;
  justify-content: center;

  &:active {
    cursor: ${e=>e.$isUsed?`not-allowed`:`grabbing`};
  }

  &:hover:not([style*="not-allowed"]) {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;var af=``+new URL(`atividade-2-boneco.png`,import.meta.url).href,of=``+new URL(`atividade-2-capacete-boneco.png`,import.meta.url).href,sf=``+new URL(`atividade-2-jaqueta-boneco.png`,import.meta.url).href,cf=``+new URL(`atividade-2-joelheira-boneco.png`,import.meta.url).href,lf=``+new URL(`atividade-2-botas-boneco.png`,import.meta.url).href,uf=``+new URL(`atividade-2-luvas-boneco.png`,import.meta.url).href,df=``+new URL(`atividade-2-capacete.png`,import.meta.url).href,ff=``+new URL(`atividade-2-jaqueta.png`,import.meta.url).href,pf=``+new URL(`atividade-2-joelheira.png`,import.meta.url).href,mf=``+new URL(`atividade-2-botas.png`,import.meta.url).href,hf=``+new URL(`atividade-2-chinelo.png`,import.meta.url).href,gf=``+new URL(`atividade-2-luvas.png`,import.meta.url).href,_f=``+new URL(`atividade-2-luvas-forno.png`,import.meta.url).href,vf=``+new URL(`atividade-2-oculos.png`,import.meta.url).href,yf=[{id:`joelheira`,name:`Joelheira`,image:pf,isCorrect:!0,bonecoImage:cf},{id:`chinelo`,name:`Chinelo`,image:hf,isCorrect:!1},{id:`oculos`,name:`Óculos`,image:vf,isCorrect:!1},{id:`luvas`,name:`Luvas`,image:gf,isCorrect:!0,bonecoImage:uf},{id:`capacete`,name:`Capacete`,image:df,isCorrect:!0,bonecoImage:of},{id:`luvasForno`,name:`Luvas de Forno`,image:_f,isCorrect:!1},{id:`jaqueta`,name:`Jaqueta`,image:ff,isCorrect:!0,bonecoImage:sf},{id:`botas`,name:`Botas`,image:mf,isCorrect:!0,bonecoImage:lf}],bf=Pa(()=>{let e=Je(),{reportProgress:t}=Mn(),[n,r]=(0,_.useState)(new Set),[i,a]=(0,_.useState)(null),[o,s]=(0,_.useState)(!1),[c,l]=(0,_.useState)(!1),u=yf.filter(e=>e.isCorrect).length,d=n.size,f=d/u*100,p=d===u;(0,_.useEffect)(()=>{p&&!c&&t&&(t({score:100,completion:`incomplete`,success:`passed`}),l(!0))},[p,c,t]);let m=e=>{a(e)},h=e=>{e.preventDefault()},g=e=>{if(e.preventDefault(),!i)return;let t=yf.find(e=>e.id===i);t&&(t.isCorrect?r(e=>new Set([...e,i])):(s(!0),setTimeout(()=>s(!1),500)),a(null))},v=()=>{p&&e(`/parada3`)},y=e=>n.has(e);return(0,I.jsxs)(Gd,{children:[(0,I.jsxs)(Kd,{children:[(0,I.jsxs)(qd,{children:[(0,I.jsx)(`img`,{src:zd,className:`atividade-title`,alt:`Atividade`}),(0,I.jsxs)(`p`,{className:`instruction-text`,children:[`Vista o motociclista com os `,(0,I.jsx)(`br`,{}),` equipamentos de segurança.`]}),(0,I.jsxs)(`p`,{className:`instruction-text-2`,children:[`Clique nos equipamentos e `,(0,I.jsx)(`br`,{}),` arraste para o motociclista.`]})]}),(0,I.jsxs)(Jd,{className:`game-area`,$showError:o,children:[(0,I.jsx)(Yd,{children:(0,I.jsxs)(tf,{onDragOver:h,onDrop:g,$showError:o,children:[(0,I.jsx)(`img`,{src:af,alt:`Motociclista`,className:`boneco-base`}),n.has(`capacete`)&&(0,I.jsx)(`img`,{src:``+new URL(`atividade-2-capacete-boneco.png`,import.meta.url).href,alt:`Capacete`,className:`equipment-boneco capacete`}),n.has(`jaqueta`)&&(0,I.jsx)(`img`,{src:``+new URL(`atividade-2-jaqueta-boneco.png`,import.meta.url).href,alt:`Jaqueta`,className:`equipment-boneco jaqueta`}),n.has(`joelheira`)&&(0,I.jsx)(`img`,{src:``+new URL(`atividade-2-joelheira-boneco.png`,import.meta.url).href,alt:`Joelheira`,className:`equipment-boneco joelheira`}),n.has(`botas`)&&(0,I.jsx)(`img`,{src:``+new URL(`atividade-2-botas-boneco.png`,import.meta.url).href,alt:`Botas`,className:`equipment-boneco botas`}),n.has(`luvas`)&&(0,I.jsx)(`img`,{src:``+new URL(`atividade-2-luvas-boneco.png`,import.meta.url).href,alt:`Luvas`,className:`equipment-boneco luvas`})]})}),(0,I.jsx)(Xd,{children:(0,I.jsx)(nf,{children:yf.map(e=>(0,I.jsx)(rf,{draggable:!y(e.id),onDragStart:()=>m(e.id),$isUsed:y(e.id),children:(0,I.jsx)(`img`,{src:e.image,alt:e.name})},e.id))})})]})]}),(0,I.jsxs)(Zd,{children:[(0,I.jsx)(Qd,{$completed:p,children:(0,I.jsxs)(ef,{$progress:f,children:[(0,I.jsx)($d,{$completed:p,children:`Conclua a atividade para avançar`}),(0,I.jsx)($d,{$completed:p,className:`completed`,children:`Conteúdo concluído! Você pode avançar.`})]})}),(0,I.jsx)(Xa,{$canAdvance:p,onClick:v,children:(0,I.jsx)(`img`,{src:Ga,alt:`Avançar`})})]})]})},{imageSources:[zd,Ga,af,of,sf,cf,lf,uf,df,ff,mf,hf,gf,_f,vf],minLoadingTime:400,loadingText:`Carregando atividade...`});const xf=F(z)`
  flex-direction: column;

  .body {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 4rem 10%;
  }
  .image-header {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .icon-final {
    width: 100px;
  }
  .tarja-listra {
    width: 100%;
  }

  .flex {
    display: flex;
    padding: 0;
    justify-content: center;
  }
`,Sf=F(Mo)``,Cf=F(B)`
  margin: 2rem auto 4rem;
  text-align: center;
  display: block;
  .title-text h2 {
    font-size: 58px;
    color: var(--secondary-color);
  }
  .title-text span {
    color: var(--primary-color);
  }
`,wf=F(So)`
  gap: 1rem;
  padding: 3rem 2rem;
  b {
    color: #000;
    margin-bottom: 0;
  }
`,Tf=F(V)`
  object-fit: contain;
  margin-left: -2rem;
`,Ef=F.button`
  background: none;
  border: none;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 2.5rem;
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }
  animation: pulse 2.7s infinite;
  img {
    width: 360px;
    cursor: pointer;
  }
`;var Df=``+new URL(`destino-final.png`,import.meta.url).href,Of=``+new URL(`tarja-listra.png`,import.meta.url).href,kf=``+new URL(`icone-final.png`,import.meta.url).href,Af=``+new URL(`concluir.png`,import.meta.url).href;const jf=Uc((e,t)=>({quiz1Score:null,quiz2Score:null,quiz3Score:null,setQuiz1Score:t=>e({quiz1Score:t}),setQuiz2Score:t=>e({quiz2Score:t}),setQuiz3Score:t=>e({quiz3Score:t}),getTotalScore:()=>{let{quiz1Score:e,quiz2Score:n,quiz3Score:r}=t(),i=(e?.correct||0)+(n?.correct||0)+(r?.correct||0),a=(e?.total||0)+(n?.total||0)+(r?.total||0),o=a>0?i/a*100:0;return{correct:i,total:a,percentage:Math.round(o)}},resetScores:()=>e({quiz1Score:null,quiz2Score:null,quiz3Score:null})}));var Mf=({})=>{let{passCourse:e}=Mn(),{getTotalScore:t}=jf();return(0,I.jsxs)(xf,{className:`content`,children:[(0,I.jsxs)(`div`,{className:`image-header`,children:[(0,I.jsx)(`img`,{className:`icon-final`,src:kf}),(0,I.jsx)(`img`,{className:`tarja-listra`,src:Of})]}),(0,I.jsxs)(`div`,{className:`body`,children:[(0,I.jsx)(Cf,{children:(0,I.jsx)(`div`,{className:`title-text`,children:(0,I.jsxs)(`h2`,{children:[(0,I.jsx)(`span`,{children:`Chegada `}),`– O destino final`]})})}),(0,I.jsxs)(`div`,{className:`flex`,children:[(0,I.jsx)(Sf,{children:(0,I.jsxs)(wf,{children:[(0,I.jsxs)(Go,{children:[`Toda viagem tem um destino. E o nosso aqui é simples:`,(0,I.jsx)(`b`,{children:`chegar em segurança.`})]}),(0,I.jsx)(Go,{children:`Passamos pela paixão do Brasil pelas motos, pela importância da segurança e pelas técnicas que fazem a diferença na prática. Agora, a decisão é sua: vai pilotar só pelo prazer ou vai pilotar com prazer e consciência?`}),(0,I.jsx)(Go,{children:`No fim das contas, a maior conquista não é a velocidade, nem a distância percorrida. É poder contar boas histórias.`}),(0,I.jsxs)(Go,{children:[`Porque a verdadeira vitória de cada viagem é sempre a mesma:`,(0,I.jsx)(`b`,{children:` voltar para casa bem e pronto para a próxima jornada.`})]})]})}),(0,I.jsx)(Tf,{className:`content-image`,src:Df,alt:`alt provisório`,width:`40%`})]}),(0,I.jsx)(Ef,{onClick:()=>{let n=t().percentage;e(n),setTimeout(()=>{try{window.close()}catch{}alert(`Parabéns! Curso concluído com sucesso!\n\nSua pontuação: ${n}%\n\nVocê pode fechar esta janela.`)},500)},children:(0,I.jsx)(`img`,{src:Af,alt:`Concluir Curso`})})]})]})};function Nf(){return(0,I.jsxs)(nn,{children:[(0,I.jsx)(wn,{}),(0,I.jsx)(Nn,{}),(0,I.jsxs)(yt,{children:[(0,I.jsx)(_t,{path:`/`,element:(0,I.jsx)(io,{})}),(0,I.jsx)(_t,{path:`/parada1`,element:(0,I.jsx)(ll,{})}),(0,I.jsx)(_t,{path:`/retrovisor1`,element:(0,I.jsx)(R,{})}),(0,I.jsx)(_t,{path:`/parada2`,element:(0,I.jsx)(eu,{})}),(0,I.jsx)(_t,{path:`/retrovisor2`,element:(0,I.jsx)(vo,{})}),(0,I.jsx)(_t,{path:`/atividade2`,element:(0,I.jsx)(bf,{})}),(0,I.jsx)(_t,{path:`/parada3`,element:(0,I.jsx)(sd,{})}),(0,I.jsx)(_t,{path:`/retrovisor3`,element:(0,I.jsx)(bo,{})}),(0,I.jsx)(_t,{path:`/atividade1`,element:(0,I.jsx)(Wd,{})}),(0,I.jsx)(_t,{path:`/quiz`,element:(0,I.jsx)(Td,{})}),(0,I.jsx)(_t,{path:`/destinofinal`,element:(0,I.jsx)(Mf,{})})]})]})}var Pf=Nf;(0,g.createRoot)(document.getElementById(`root`)).render((0,I.jsx)(_.StrictMode,{children:(0,I.jsx)(Pf,{})}));