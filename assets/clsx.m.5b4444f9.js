var x=Object.defineProperty;var l=(e,n)=>x(e,"name",{value:n,configurable:!0});import{r as o}from"./index.e0244596.js";function a(){return a=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a.apply(this,arguments)}l(a,"_extends");function $(e,n){typeof e=="function"?e(n):e!=null&&(e.current=n)}l($,"$6ed0406888f73fc4$var$setRef");function d(...e){return n=>e.forEach(t=>$(t,n))}l(d,"$6ed0406888f73fc4$export$43e446d32b3d21af");function C(...e){return o.exports.useCallback(d(...e),e)}l(C,"$6ed0406888f73fc4$export$c7b2cbe3552a0d05");const h=o.exports.forwardRef((e,n)=>{const{children:t,...r}=e,s=o.exports.Children.toArray(t),c=s.find(b);if(c){const i=c.props.children,f=s.map(u=>u===c?o.exports.Children.count(i)>1?o.exports.Children.only(null):o.exports.isValidElement(i)?i.props.children:null:u);return o.exports.createElement(p,a({},r,{ref:n}),o.exports.isValidElement(i)?o.exports.cloneElement(i,void 0,f):null)}return o.exports.createElement(p,a({},r,{ref:n}),t)});h.displayName="Slot";const p=o.exports.forwardRef((e,n)=>{const{children:t,...r}=e;return o.exports.isValidElement(t)?o.exports.cloneElement(t,{...g(r,t.props),ref:d(n,t.ref)}):o.exports.Children.count(t)>1?o.exports.Children.only(null):null});p.displayName="SlotClone";const y=l(({children:e})=>o.exports.createElement(o.exports.Fragment,null,e),"$5e63c961fc1ce211$export$d9f1ccf0bdb05d45");function b(e){return o.exports.isValidElement(e)&&e.type===y}l(b,"$5e63c961fc1ce211$var$isSlottable");function g(e,n){const t={...n};for(const r in n){const s=e[r],c=n[r];/^on[A-Z]/.test(r)?s&&c?t[r]=(...f)=>{c(...f),s(...f)}:s&&(t[r]=s):r==="style"?t[r]={...s,...c}:r==="className"&&(t[r]=[s,c].filter(Boolean).join(" "))}return{...e,...t}}l(g,"$5e63c961fc1ce211$var$mergeProps");function m(e){var n,t,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=m(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}l(m,"r");function V(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=m(e))&&(r&&(r+=" "),r+=n);return r}l(V,"clsx");export{h as $,C as a,V as c};
//# sourceMappingURL=clsx.m.5b4444f9.js.map
