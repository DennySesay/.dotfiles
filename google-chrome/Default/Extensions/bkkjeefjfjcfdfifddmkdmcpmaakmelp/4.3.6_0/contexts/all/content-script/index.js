import { r } from '../../../chunks/browser-polyfill-1756fcfb.js';
import { F as F$1, j as j$1, t as t$1 } from '../../../chunks/index-5aa1df3a.js';
import { a as ae$1, f as fe$1, K as K$1 } from '../../../chunks/index-cd83db40.js';
import { y as y$1, x as x$1, v as v$1 } from '../../../chunks/react-601c4968.js';
import { t } from '../../../chunks/create-5399fd46.js';
import { o } from '../../../chunks/index-fe22708a.js';
import '../../../chunks/transframe-provider-e657167f.js';

var u=Object.defineProperty,g=(e,t,n)=>(((e,t,n)=>{t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;})(e,"symbol"!=typeof t?t+"":t,n),n);function f(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var p,j,y,N={exports:{}},x={};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/function m(){if(j)return p;j=1;var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;return p=function(){try{if(!Object.assign)return !1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return !1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return !1;var i={};return "abcdefghijklmnopqrst".split("").forEach((function(e){i[e]=e;})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},i)).join("")}catch{return !1}}()?Object.assign:function(i,r){for(var o,s,a=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(i),c=1;c<arguments.length;c++){for(var M in o=Object(arguments[c]))t.call(o,M)&&(a[M]=o[M]);if(e){s=e(o);for(var l=0;l<s.length;l++)n.call(o,s[l])&&(a[s[l]]=o[s[l]]);}}return a},p
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */}N.exports=function(){if(y)return x;y=1,m();var e=F$1,n=60103;if(x.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;n=i("react.element"),x.Fragment=i("react.fragment");}var r=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,i){var a,c={},M=null,l=null;for(a in void 0!==i&&(M=""+i),void 0!==t.key&&(M=""+t.key),void 0!==t.ref&&(l=t.ref),t)o.call(t,a)&&!s.hasOwnProperty(a)&&(c[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===c[a]&&(c[a]=t[a]);return {$$typeof:n,type:e,key:M,ref:l,props:c,_owner:r.current}}return x.jsx=a,x.jsxs=a,x}();var I=N.exports;const D=({children:e,defaultPosition:t,requiredClassName:i,ignoreClassName:r})=>{const[o,s]=t$1.exports.useState({current:t,start:{x:0,y:0},pressed:!1,draggable:!0});return t$1.exports.useEffect((()=>{const e=()=>{s((e=>({...e,current:{x:Math.min(e.current.x,window.innerWidth-25),y:Math.min(e.current.y,window.innerHeight-25)}})));};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[]),t$1.exports.useEffect((()=>{const e=e=>{s((t=>({...t,current:{x:e.clientX-t.start.x,y:e.clientY-t.start.y}})));};return o.pressed?window.addEventListener("mousemove",e):window.removeEventListener("mousemove",e),()=>window.removeEventListener("mousemove",e)}),[o.pressed]),I.jsx("div",{draggable:!0,style:{width:"fit-content",position:"absolute",top:o.current.y+"px",left:o.current.x+"px",userSelect:o.pressed?"none":"inherit"},onMouseDown:e=>{const t=e.target,n=t.className;r&&n.includes(r)||(i&&!n.includes(i)&&s((e=>({...e,draggable:!1}))),("A"===t.tagName||n.includes("prevent-drag"))&&s((e=>({...e,draggable:!1}))));},onDragStart:e=>{e.preventDefault(),o.draggable&&s((t=>({...t,pressed:!0,start:{x:e.clientX-t.current.x,y:e.clientY-t.current.y}})));},onMouseUp:()=>{s((e=>({...e,pressed:!1,draggable:!0})));},children:e})},b=[];function w(e){if(!b.includes(e)){try{document.adoptedStyleSheets=[...document.adoptedStyleSheets,e];}catch{const t=document.createElement("style");t.textContent=Array.from(e.cssRules).map((e=>e.cssText||"")).join("\n"),document.head.appendChild(t);}b.push(e);}}function z(e,...t){var n;let i="";e.forEach(((e,n)=>{const r=t[n];i+=e,r&&(i+=r);}));const r=new CSSStyleSheet;return null==(n=r.replaceSync)||n.call(r,i),r}const h=z`.c-embed-window {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  outline: 0.25px solid rgba(0, 0, 0, 0.25);
  box-shadow: 0 20px 70px rgba(0, 0, 0, 0.55);
  border: 0.5px solid rgba(255, 255, 255, 0.15);
  border-radius: 4px;
  background: #1f1f1f;
  min-width: 64px;
  min-height: 64px;
  overflow: hidden;
  user-select: none;
}
.c-embed-window.focused-window {
  user-select: none;
}
.c-embed-window > .title-bar {
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  align-items: center;
  box-sizing: border-box;
  background: #171717;
  padding: 10px;
  width: 100%;
  height: 32px;
  overflow: hidden;
  color: white;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  font-family: "Inter", sans-serif;
}
.c-embed-window > .title-bar > .actions {
  display: flex;
  gap: 12px;
  margin-left: auto;
}
.c-embed-window > .title-bar > .actions > .close-window-btn,
.c-embed-window > .title-bar > .actions > .pop-out-btn {
  all: unset;
  cursor: pointer;
  border: 0;
  border-radius: 0;
  background: none;
}
.c-embed-window > .title-bar:hover {
  cursor: grab;
}
.c-embed-window > .title-bar:active {
  cursor: grabbing;
}
.c-embed-window > .content {
  position: relative;
  height: 100%;
}
.c-embed-window > .content > .embed-iframe {
  display: block;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  border: none;
  padding: 0;
  width: 100%;
  height: 100%;
}`,T="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1LjgzMzQgNS4zNDE3NUwxNC42NTg0IDQuMTY2NzVMMTAuMDAwMSA4LjgyNTA4TDUuMzQxNzUgNC4xNjY3NUw0LjE2Njc1IDUuMzQxNzVMOC44MjUwOCAxMC4wMDAxTDQuMTY2NzUgMTQuNjU4NEw1LjM0MTc1IDE1LjgzMzRMMTAuMDAwMSAxMS4xNzUxTDE0LjY1ODQgMTUuODMzNEwxNS44MzM0IDE0LjY1ODRMMTEuMTc1MSAxMC4wMDAxTDE1LjgzMzQgNS4zNDE3NVoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=";var E=function(e){return !(t=e,!t||"object"!=typeof t||function(e){var t=Object.prototype.toString.call(e);return "[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===A}(e)}(e));var t;};var A="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function O(e,t){return !1!==t.clone&&t.isMergeableObject(e)?C(function(e){return Array.isArray(e)?[]:{}}(e),e,t):e}function L(e,t,n){return e.concat(t).map((function(e){return O(e,n)}))}function v(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter((function(t){return Object.propertyIsEnumerable.call(e,t)})):[]}(e))}function S(e,t){try{return t in e}catch{return !1}}function k(e,t,n){var i={};return n.isMergeableObject(e)&&v(e).forEach((function(t){i[t]=O(e[t],n);})),v(t).forEach((function(r){(function(e,t){return S(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))})(e,r)||(S(e,r)&&n.isMergeableObject(t[r])?i[r]=function(e,t){if(!t.customMerge)return C;var n=t.customMerge(e);return "function"==typeof n?n:C}(r,n)(e[r],t[r],n):i[r]=O(t[r],n));})),i}function C(e,t,n){(n=n||{}).arrayMerge=n.arrayMerge||L,n.isMergeableObject=n.isMergeableObject||E,n.cloneUnlessOtherwiseSpecified=O;var i=Array.isArray(t);return i===Array.isArray(e)?i?n.arrayMerge(e,t,n):k(e,t,n):O(t,n)}C.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(e,n){return C(e,n,t)}),{})};const U=f(C);const Q=new class{constructor(){g(this,"promise"),g(this,"resolve"),g(this,"reject"),this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t;}));}};async function Y(e,t){return (await Q.promise).get(e,t)}const _=ae$1(),P=ae$1([]),R=ae$1({}),F=ae$1(Y("auth","accessToken"));!async function(e,t,n){(await Q.promise).subscribe(e,t,n);}("auth","accessToken",(e=>{F.set(e);}));const Z={sidebarWidth:72,expandedSidebarWidth:392,allowedSites:"all",activationSettings:{isTwoStep:!1,twoStepMode:"hover",screenSide:"left",activationZoneWidth:14,sidebarTimeout:0,leaveWindowTimeout:500}},W=ae$1(Y("sidebar","config").then((e=>U(Z,e||{}))));function $(e,t){R[e].isOpen.set(t);}P.onChange((({value:e})=>{R.set(Object.fromEntries(e.map(((e,t)=>[e.id,{embedId:e.id,isOpen:!1,zIndex:t}]))));}),{trackingType:"shallow"});var G=Object.defineProperty,H=(e,t,n)=>(((e,t,n)=>{t in e?G(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;})(e,"symbol"!=typeof t?t+"":t,n),n);var V=(e=>(e.RPC_REQUEST="rpc-request",e.RPC_RESPONSE="rpc-response",e.RPC_CALLBACK_CALL="rpc-callback-call",e.RPC_CONNECT_REQUEST="rpc-connect-request",e.RPC_CONNECT_RESPONSE="rpc-connect-response",e))(V||{});function B(e){return !0===(null==e?void 0:e._transframe)}const X=z`.truffle-sidebar {
  position: fixed;
  top: 0;
  pointer-events: none;
  overflow: hidden;
  transition: transform 0.1s ease-in-out;
  /* if a site styles elements globally, we need to unset those styles so they don't affect ours */
  height: 100%;
  z-index: 2147483602;
  display: flex;
}
.truffle-sidebar * {
  all: unset;
}
.truffle-sidebar.config-right {
  right: 0;
}
.truffle-sidebar.config-left {
  left: 0;
}
.truffle-sidebar.is-open {
  pointer-events: all;
}
.truffle-sidebar > .iframe {
  border: none;
}`,q=z`.truffle-sidebar-mouse-leave-detector {
  pointer-events: none;
}
.truffle-sidebar-mouse-leave-detector.is-open {
  pointer-events: all;
  position: fixed;
  top: 0;
  height: 100%;
  z-index: 2147483600;
}
.truffle-sidebar-mouse-leave-detector.is-open.config-right {
  left: 0;
}
.truffle-sidebar-mouse-leave-detector.is-open.config-left {
  right: 0;
}

.truffle-sidebar-gatekeeper {
  position: fixed;
  top: 0;
  transition: transform 0.1s ease-in-out;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2147483601;
}
.truffle-sidebar-gatekeeper.disabled {
  display: none;
}
.truffle-sidebar-gatekeeper.config-right {
  right: 0;
}
.truffle-sidebar-gatekeeper.config-left {
  left: 0;
}
.truffle-sidebar-gatekeeper > .truffle-logo {
  margin-top: 12px;
  z-index: 19000;
  cursor: pointer;
}

.truffle-sidebar-mouse-enter-detector {
  position: fixed;
  top: 0;
  height: 100%;
  z-index: 2147483600;
}
.truffle-sidebar-mouse-enter-detector.config-right {
  right: 0;
}
.truffle-sidebar-mouse-enter-detector.config-left {
  left: 0;
}`;function J(e){return "left"===W.activationSettings.screenSide.peek()?e.clientX:window.innerWidth-e.clientX}const K=ae$1(!1),ee=ae$1(!1),te=ae$1(0),ne=ae$1(!1),ie=ae$1(!0),re=ae$1(!1),oe=()=>{K.set(!0);},se=y$1((({sidebarWidth:e})=>{w(q);const{screenSide:t,activationZoneWidth:i,isTwoStep:r,twoStepMode:o}=W.activationSettings.get();return re.set(ne.peek()&&!(ie.get()&&W.activationSettings.isTwoStep.peek())),t$1.exports.useEffect((()=>{const t=t=>{ee.set(!1);const n=t.clientY<0,i=t.clientY>window.innerHeight,r=J(t)<e,o=J(t)<-1*e;!(n||i||o)&&r&&ne.set(!0),J(t)>=0&&J(t)<=3?ne.set(!0):Me(W.activationSettings.leaveWindowTimeout.peek());},n=t=>{J(t)<e&&ee.set(!0);},i=document.documentElement;return i.addEventListener("mouseleave",t),i.addEventListener("mouseenter",n),()=>{i.removeEventListener("mouseleave",t),i.removeEventListener("mouseenter",n);}}),[]),I.jsxs(I.Fragment,{children:[I.jsx("div",{className:`truffle-sidebar-mouse-leave-detector ${re.get()&&K.get()?"is-open":""} config-${t}`,style:{width:`calc(100% - ${e}px)`},onMouseEnter:()=>{K.set(!1),Me(W.activationSettings.sidebarTimeout.peek());}}),I.jsx("div",{className:`truffle-sidebar-mouse-enter-detector config-${t}`,style:{width:`${i}px`},onMouseEnter:()=>{K.set(!0),ne.set(!0);}}),I.jsx("div",{className:`truffle-sidebar-gatekeeper config-${t} ${r?"enabled":"disabled"}`,style:{transform:`translateX(${ne.get()?"0px":72*("right"===t?1:-1)+"px"})`,width:"72px"},onMouseLeave:e=>{J(e)>i&&ie.peek()&&(K.set(!1),Me(W.activationSettings.sidebarTimeout.peek()));},children:I.jsx("img",{className:"truffle-logo",src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiByeD0iMjQiIGZpbGw9IiNGMzU3QTEiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zMS44NjcyIDExLjk2MDlDMzEuOTYxNyAxMS45MTUzIDMyLjA0NjIgMTEuODk2NiAzMi4xMjA4IDExLjg5NjZDMzIuMTkzOSAxMS44OTY2IDMyLjM2NTIgMTEuOTM5OCAzMi42NDkxIDEyLjEwNjdDMzIuOTE4IDEyLjI2NDcgMzMuMjM0MiAxMi41MDE1IDMzLjU4MDkgMTIuODA0NkMzNC4yNzMxIDEzLjQwOTYgMzUuMDQ0NiAxNC4yNDE3IDM1Ljc0NCAxNS4xMjc5QzM2LjQ0NDMgMTYuMDE1MyAzNy4wNTY0IDE2LjkzNjggMzcuNDQwNCAxNy43MTYyQzM3LjYzMyAxOC4xMDcyIDM3Ljc1ODcgMTguNDQzNSAzNy44MTU0IDE4LjcxQzM3Ljg3NTMgMTguOTkxNyAzNy44NDEgMTkuMTE0NyAzNy44MjM0IDE5LjE0NzZDMzcuMTkwNiAyMC4zMjkxIDM2LjAyMTkgMjEuNDYwNSAzNC44NjA0IDIyLjE5MTFDMzQuMjgxMyAyMi41NTUzIDMzLjcyOTUgMjIuODAzNSAzMy4yNzM3IDIyLjkxNDFDMzIuNzk2OCAyMy4wMjk4IDMyLjUzNDcgMjIuOTcwNyAzMi40MTkgMjIuODg4M0MzMS45MzU4IDIyLjU0NDYgMzEuNzcyMSAyMi4xOTgxIDMxLjcwODIgMjEuODE1NUMzMS42NzM0IDIxLjYwNzIgMzEuNjY3MyAyMS4zNzg1IDMxLjY3MjUgMjEuMTExMkMzMS42NzQzIDIxLjAyMDUgMzEuNjc3NyAyMC45MTg5IDMxLjY4MTMgMjAuODExN0wzMS42ODEzIDIwLjgxMUMzMS42ODc0IDIwLjYyNzQgMzEuNjk0MSAyMC40Mjc3IDMxLjY5NDEgMjAuMjM5M0MzMS42OTQxIDE5Ljk1NzIgMzEuNDY0NSAxOS43Mjg1IDMxLjE4MTIgMTkuNzI4NUMzMC44OTc5IDE5LjcyODUgMzAuNjY4MyAxOS45NTcyIDMwLjY2ODMgMjAuMjM5M0MzMC42NjgzIDIwLjQxNzQgMzAuNjYyNyAyMC41Nzc4IDMwLjY1NyAyMC43NDM3TDMwLjY1NyAyMC43NDM5TDMwLjY1NyAyMC43NDRDMzAuNjUzMiAyMC44NTQ5IDMwLjY0OTMgMjAuOTY4MyAzMC42NDY5IDIxLjA5MTNDMzAuNjQxMyAyMS4zNzczIDMwLjY0NTcgMjEuNjgwNyAzMC42OTYyIDIxLjk4MzFDMzAuODAyOSAyMi42MjIxIDMxLjEwOTEgMjMuMjEyIDMxLjgyMjcgMjMuNzE5NkMzMi4zMDU0IDI0LjA2MjkgMzIuOTQwOSAyNC4wNDYzIDMzLjUxNjYgMjMuOTA2NkMzNC4xMTM0IDIzLjc2MTggMzQuNzY5IDIzLjQ1NjggMzUuNDA4MiAyMy4wNTQ4QzM1LjQ5OTcgMjIuOTk3MiAzNS41OTE0IDIyLjkzNzMgMzUuNjgzMSAyMi44NzUzQzM1Ljc2MDUgMjMuNDIxOCAzNS44MDA2IDIzLjk4MDQgMzUuODAwNiAyNC41NDgzQzM1LjgwMDYgMzEuMDcyMiAzMC41MTIgMzYuMzYwOCAyMy45ODgxIDM2LjM2MDhDMTcuNDY0MyAzNi4zNjA4IDEyLjE3NTYgMzEuMDcyMiAxMi4xNzU2IDI0LjU0ODNDMTIuMTc1NiAyMy45NzUzIDEyLjIxNjQgMjMuNDExNyAxMi4yOTUzIDIyLjg2MDVDMTIuMzk0MiAyMi45Mjc5IDEyLjQ5MzIgMjIuOTkyNyAxMi41OTE5IDIzLjA1NDhDMTMuMjMxMSAyMy40NTY4IDEzLjg4NjcgMjMuNzYxOCAxNC40ODM2IDIzLjkwNjZDMTUuMDU5MiAyNC4wNDYzIDE1LjY5NDggMjQuMDYyOSAxNi4xNzc0IDIzLjcxOTZDMTYuODkxMSAyMy4yMTIgMTcuMTk3MiAyMi42MjIxIDE3LjMwMzkgMjEuOTgzMUMxNy4zNTQ0IDIxLjY4MDcgMTcuMzU4OCAyMS4zNzczIDE3LjM1MzIgMjEuMDkxM0MxNy4zNTA4IDIwLjk2ODMgMTcuMzQ2OSAyMC44NTQ4IDE3LjM0MzEgMjAuNzQzOUMxNy4zMzc0IDIwLjU3NzkgMTcuMzMxOSAyMC40MTc1IDE3LjMzMTkgMjAuMjM5M0MxNy4zMzE5IDE5Ljk1NzIgMTcuMTAyMiAxOS43Mjg1IDE2LjgxODkgMTkuNzI4NUMxNi41MzU2IDE5LjcyODUgMTYuMzA2IDE5Ljk1NzIgMTYuMzA2IDIwLjIzOTNDMTYuMzA2IDIwLjQyNzcgMTYuMzEyNyAyMC42Mjc0IDE2LjMxODggMjAuODExTDE2LjMxODggMjAuODExMkMxNi4zMjI0IDIwLjkxODUgMTYuMzI1OCAyMS4wMjAzIDE2LjMyNzYgMjEuMTExMkMxNi4zMzI4IDIxLjM3ODUgMTYuMzI2NyAyMS42MDcyIDE2LjI5MTkgMjEuODE1NUMxNi4yMjggMjIuMTk4MSAxNi4wNjQzIDIyLjU0NDYgMTUuNTgxMiAyMi44ODgzQzE1LjQ2NTQgMjIuOTcwNyAxNS4yMDM0IDIzLjAyOTggMTQuNzI2NCAyMi45MTQxQzE0LjI3MDcgMjIuODAzNSAxMy43MTg4IDIyLjU1NTMgMTMuMTM5NyAyMi4xOTExQzExLjk3ODIgMjEuNDYwNSAxMC44MDk1IDIwLjMyOTEgMTAuMTc2OCAxOS4xNDc2QzEwLjE1OTEgMTkuMTE0NyAxMC4xMjQ4IDE4Ljk5MTcgMTAuMTg0NyAxOC43MUMxMC4yNDE0IDE4LjQ0MzUgMTAuMzY3MSAxOC4xMDcyIDEwLjU1OTggMTcuNzE2MkMxMC45NDM3IDE2LjkzNjggMTEuNTU1OCAxNi4wMTUzIDEyLjI1NjEgMTUuMTI3OUMxMi45NTU1IDE0LjI0MTcgMTMuNzI3IDEzLjQwOTYgMTQuNDE5MiAxMi44MDQ2QzE0Ljc2NTkgMTIuNTAxNSAxNS4wODIyIDEyLjI2NDcgMTUuMzUxIDEyLjEwNjdDMTUuNjM0OSAxMS45Mzk4IDE1LjgwNjIgMTEuODk2NiAxNS44NzkzIDExLjg5NjZDMTYuMDM0IDExLjg5NjYgMTYuMjMwOSAxMS45NzY3IDE2LjQ3MTQgMTIuMjExMUMxNi43MDk3IDEyLjQ0MzMgMTYuOTQyNiAxMi43ODE4IDE3LjE1ODMgMTMuMTgxM0MxNy41ODg1IDEzLjk3ODIgMTcuODk2MyAxNC45MTU5IDE4LjAzMjYgMTUuNDMxOEMxOC4xMDQ3IDE1LjcwNDYgMTguMzg1MyAxNS44Njc1IDE4LjY1OTIgMTUuNzk1N0MxOC45MzMyIDE1LjcyNCAxOS4wOTY4IDE1LjQ0NDYgMTkuMDI0NyAxNS4xNzE4QzE4Ljk0NzYgMTQuODc5OSAxOC44MjA4IDE0LjQ2NDcgMTguNjQ5NCAxNC4wMDgzQzIwLjI1MjkgMTMuMTk0NSAyMi4wNjY5IDEyLjczNTggMjMuOTg4MSAxMi43MzU4QzI1LjkxNzMgMTIuNzM1OCAyNy43Mzg1IDEzLjE5ODMgMjkuMzQ2OSAxNC4wMTg1QzI5LjE3NzQgMTQuNDcwOSAyOS4wNTIgMTQuODgyMSAyOC45NzU0IDE1LjE3MThDMjguOTAzMyAxNS40NDQ2IDI5LjA2NyAxNS43MjQgMjkuMzQwOSAxNS43OTU4QzI5LjYxNDkgMTUuODY3NSAyOS44OTU0IDE1LjcwNDYgMjkuOTY3NSAxNS40MzE4QzMwLjAyODggMTUuMTk5OCAzMC4xMjQ4IDE0Ljg4MjQgMzAuMjUxIDE0LjUzMDlDMzAuMjcwMyAxNC41NDMgMzAuMjg5NSAxNC41NTUxIDMwLjMwODcgMTQuNTY3M0MzMC41NDk1IDEzLjc0NjcgMzEuMDg5MSAxMi40ODgyIDMxLjg2NzIgMTEuOTYwOVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMzAuNDE2OCAyOS4wMDE5QzMwLjQxNjggMzEgMjcuNTQ0IDMxIDI0LjAwMDIgMzFDMjAuNDU2MyAzMSAxNy41ODM1IDMxIDE3LjU4MzUgMjkuMDAxOUMxNy41ODM1IDI1Ljc1NjIgMjAuNDU2MyAyMy4xMjUgMjQuMDAwMiAyMy4xMjVDMjcuNTQ0IDIzLjEyNSAzMC40MTY4IDI1Ljc1NjIgMzAuNDE2OCAyOS4wMDE5Wk0yMy4xNTE3IDI3LjUyNzZDMjMuMTUxNyAyOC41NzUyIDIyLjQ2MiAyOS40MjQ1IDIxLjYxMTIgMjkuNDI0NUMyMC43NjA0IDI5LjQyNDUgMjAuMDcwNyAyOC41NzUyIDIwLjA3MDcgMjcuNTI3NkMyMC4wNzA3IDI2LjQ4IDIwLjc2MDQgMjUuNjMwNyAyMS42MTEyIDI1LjYzMDdDMjIuNDYyIDI1LjYzMDcgMjMuMTUxNyAyNi40OCAyMy4xNTE3IDI3LjUyNzZaTTI2LjIzIDI5LjQyNDVDMjcuMDgwOCAyOS40MjQ1IDI3Ljc3MDUgMjguNTc1MiAyNy43NzA1IDI3LjUyNzZDMjcuNzcwNSAyNi40OCAyNy4wODA4IDI1LjYzMDcgMjYuMjMgMjUuNjMwN0MyNS4zNzkyIDI1LjYzMDcgMjQuNjg5NSAyNi40OCAyNC42ODk1IDI3LjUyNzZDMjQuNjg5NSAyOC41NzUyIDI1LjM3OTIgMjkuNDI0NSAyNi4yMyAyOS40MjQ1WiIgZmlsbD0iI0Y5QUJEMCIvPgo8L3N2Zz4K",onMouseEnter:()=>{"hover"===o&&ce();},onClick:()=>{"click"===o&&ce();}})})]})})),ae=e=>{J(e)>ue.get()&&(K.set(!1),Me(W.activationSettings.sidebarTimeout.peek()));};function ce(){ie.set(!1),ne.set(!0);}function Me(e){te.get()&&window.clearTimeout(te.get());const t=ee.peek();te.set(window.setTimeout((()=>{(!t&&!ee.peek()||!K.peek())&&(ne.set(!1),ie.set(!0)),te.set(0);}),e));}const le=z`.c-greeting-tooltip {
  z-index: 1000000;
  --border-color: #f357a1;
  transition: all 0.2s ease-in-out;
  position: absolute;
  color: white;
  border-radius: 2px;
  max-width: 300px;
  font-family: "Inter", sans-serif;
  background: #171717;
  stroke-width: 1px;
  padding: 12px 8px 12px 20px;
  border: 1px solid var(--border-color);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
}
.c-greeting-tooltip::before {
  content: " ";
  background: #171717;
  display: block;
  height: 15px;
  position: absolute;
  top: 22px;
  transform: rotate(45deg) skew(0deg);
  width: 15px;
  left: -9px;
  border-left: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
}
.c-greeting-tooltip > .tooltip-top-bar {
  display: flex;
}
.c-greeting-tooltip > .tooltip-top-bar > .truffle-logo {
  background-image: url("https://cdn.bio/assets/images/branding/logomark.svg");
  background-size: contain;
  width: 24px;
  height: 24px;
}
.c-greeting-tooltip > .tooltip-top-bar > .close-tooltip {
  all: unset;
  cursor: pointer;
  margin-left: auto;
  border: 0;
  border-radius: 0;
  background: none;
}
.c-greeting-tooltip > .tooltip-content {
  margin-right: 10px;
  margin-top: 5px;
}
.c-greeting-tooltip > .tooltip-content > .tooltip-header {
  all: unset;
  color: #fff;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.c-greeting-tooltip > .tooltip-content > .tooltip-body {
  all: unset;
  color: rgba(255, 255, 255, 0.7);
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}`,de=y$1((({location:e})=>{w(le);const t=x$1(async function(){return await Y("sidebar","hasViewedSidebarLocationTooltip")}().then((e=>!e)));return t.get()?I.jsxs("div",{className:"c-greeting-tooltip",style:{top:`${e.top}px`,left:`${e.left}px`},children:[I.jsxs("div",{className:"tooltip-top-bar",children:[I.jsx("div",{className:"truffle-logo"}),I.jsx("button",{className:"close-tooltip",onClick:()=>{t.set(!1),async function(){await async function(e,t,n){(await Q.promise).set(e,t,n);}("sidebar","hasViewedSidebarLocationTooltip",!0);}();},children:I.jsx("img",{src:T})})]}),I.jsxs("div",{className:"tooltip-content",children:[I.jsx("h3",{className:"tooltip-header",children:"Looking for channel points & predictions?"}),I.jsx("div",{className:"tooltip-body",children:" Mouseover the left edge of the window to open the Truffle sidebar."})]})]}):I.jsx(I.Fragment,{})}));const ue=ae$1(72),ge=y$1((()=>{var e;w(X);const t=x$1(Y("settings","experimentalSidebar")),i=W.activationSettings.screenSide.get(),r=ue.get(),o=t$1.exports.useRef(null);t$1.exports.useEffect((()=>{o.current&&Ae.registerFrame(o.current,"sidebar");}),[o]);const s=t.get()||P.get().length;return I.jsxs(I.Fragment,{children:[s?I.jsx(se,{sidebarWidth:r}):void 0,null!=(e=P.get())&&e.find((e=>"https://mogul-menu.truffle.vip"===e.url))?I.jsx(de,{location:{left:re.get()?r+20:20,top:70}}):void 0,I.jsx("div",{className:`truffle-sidebar config-${i}${re.get()?" is-open":""}`,style:{transform:`translateX(${re.get()?"0px":("right"===i?1:-1)*r+"px"})`,width:`${r}px`},onMouseEnter:oe,onMouseLeave:ae,children:I.jsx("iframe",{src:"https://app.truffle.vip/sidebar",className:"iframe",style:{width:`${r}px`},ref:o})})]})})),fe=y$1(ge),pe=ae$1([]),je=e=>{pe.set((t=>t.filter((t=>t.id!==e))));};const ye="truffle-embed",Ne="truffle-embed",xe=fe$1((async()=>(P.get()||[]).filter((e=>!e.windowProps)))),me=function(e,t){let n;return (...i)=>{clearTimeout(n),n=window.setTimeout((()=>{e(...i);}),t);}}((function(){const e=xe.get(),t=Ie.get(),n=_.get(),i=t.filter(De),r=e.filter((e=>!i.find((t=>e.id===t.embed.id)))),o=i.filter((t=>e.find((e=>e.id===t.embed.id))&&function(e,t){return e.contentPageOwnerRef===t.contentPageOwnerRef}(t,n))),s=i.filter((e=>!o.includes(e))),a=r.map((e=>({embed:e,contentPageOwnerRef:n.contentPageOwnerRef,element:be(e)})));s.forEach(we),Ie.set(o.concat(a));}),100);xe.onChange((()=>{me();})),_.onChange((()=>me())),setInterval((()=>{me();}),5e3);const Ie=ae$1([]);function De(e){var t;return !(null==(t=e.element)||!t.parentNode)}function be(e){const t=document.querySelector(e.parentQuerySelector);if(!t)return null;const n=document.createElement("iframe");return n.src=`https://app.truffle.vip/embed/${e.id}`,n.id=function(e){return `${Ne}-${e.id}`}(e),n.className=ye,n.allow="fullscreen; microphone; camera; autoplay; encrypted-media;",Object.assign(n.style,e.defaultStyles),n.dataset.truffleEmbedId=e.id,n.dataset.orgId=e.orgId,n.contentWindow?Ae.registerFrame(n,e.id):n.addEventListener("load",(()=>Ae.registerFrame(n,e.id))),t.appendChild(n),n}function we(e){var t;null==(t=e.element)||t.remove();}const ze=[];window.addEventListener("blur",(()=>{Ie.get().find((e=>{document.activeElement==e.element&&ze.forEach((t=>{t(e.embed);}));}));}));const he=[];_.onChange((({value:e})=>{he.forEach((t=>t(e)));}));const Te={pageInfoGet:async(e,t)=>(t&&he.push(t),_.get()),environmentGetInfo:async()=>({truffleVersion:"4.3.6",isExperimental:await Y("settings","experimental"),isExperimentalSidebar:await Y("settings","experimentalSidebar"),deviceType:"desktop"}),sidebarSetWidth:(e,t)=>{ue.set(t);},embedSetAll:async(e,t)=>{P.set(t);},embedGetDevEmbeds:async()=>async function(e){const t=Y("embed","devEmbeds").then((t=>Object.entries(t).filter((([,t])=>(null==e?void 0:e.contentPageType.includes(t.contentPageType))&&(!t.contentPageId||(null==e?void 0:e.contentPageId)===t.contentPageId))).map((([e,t])=>(t.id=e,t)))));return Promise.race([t,new Promise((e=>setTimeout((()=>e([])),1e3)))])}(_.get()),embedOnFocus:(e,t)=>{ze.push(t);},embedSetStyles:({fromId:e},t)=>{if(!e)return;const n=Ee(e);if(!n)return;const i=n.element;i&&Object.assign(i.style,t);},embedSetContainer:({fromId:e},t,n="append")=>{var i;if(!e)return;const r=document.querySelector(t);if(!r)throw new Error(`Could not find container element with query selector ${t}.`);const o=null==(i=Ee(e))?void 0:i.element;if(!o)throw new Error(`Could not find embed iframe with id ${e}.`);"append"===n?r.appendChild(o):"prepend"===n&&r.prepend(o);},embedShowToast:({fromId:e},t,n)=>{var i;const r=P.get().find((t=>t.id===e));r&&((e,t)=>{const n=crypto.randomUUID(),{title:i,body:r,iconUrl:o,onClick:s}=e,a={title:i,body:r,iconUrl:o,onClick:s,id:n,close:()=>je(n)};pe.push(a),setTimeout((()=>{je(n);}),1e3*t);})({title:t.title||(null==(i=r.windowProps)?void 0:i.title)||r.name||"Notification",iconUrl:t.iconUrl||r.iconUrl,body:t.body,onClick:n||(()=>null)},5);},embedWindowGetVisibility:({fromId:e})=>{var t,n;return !!e&&!(null==(n=null==(t=R[e])?void 0:t.isOpen)||!n.get())},embedWindowSetVisibility:({fromId:e},{embedId:t,isVisible:n})=>{var i,r;t||(t=e),t&&(null==(r=null==(i=R[t])?void 0:i.isOpen)||r.set(n));}};function Ee(e){return Ie.get().find((t=>t.embed.id===e))}const Ae=function(e){if(!("window"in globalThis))throw new Error('Transframe: global "window" not available. Cannot initialize a provider.');return new class{constructor(e,t){this._interface=e,H(this,"_options"),H(this,"registerFrame",((e,t)=>(t??(t=function(){const e=new Uint8Array(16);return crypto.getRandomValues(e),Array.from(e,(e=>e.toString(16).padStart(2,"0"))).join("")}()),this._interface.registerFrame(e,t),t))),H(this,"listen",(()=>{this._interface.listen();})),H(this,"close",(()=>{this._interface.close();})),H(this,"_messageHandler",(async(e,t,n)=>{if(B(e)&&e.namespace===this._options.namespace&&(!this._options.strictMode||null!=n.fromId))if(function(e){return B(e)&&e.type===V.RPC_REQUEST}(e)){const i=e.payload.map((e=>{if(function(e){return !0===(null==e?void 0:e._transframeCallback)}(e)){const n=e.callbackId;return (...e)=>{const i=function({callbackId:e,payload:t,namespace:n}){return {_transframe:!0,type:V.RPC_CALLBACK_CALL,callbackId:e,payload:t,namespace:n}}({callbackId:n,payload:e,namespace:this._options.namespace});t(i);}}return e})),r=this._options.api[e.method];if(!r)return;let o,s=!1;try{o=await r(n,...i);}catch(e){s=!0,o=e;}const a=function({requestId:e,result:t,error:n=!1,namespace:i}){return {_transframe:!0,type:V.RPC_RESPONSE,requestId:e,result:t,error:n,namespace:i}}({requestId:e.requestId,result:o,error:s,namespace:this._options.namespace});t(a);}else if(function(e){return B(e)&&e.type===V.RPC_CONNECT_REQUEST}(e)){const n=function({namespace:e,methods:t}){return {_transframe:!0,type:V.RPC_CONNECT_RESPONSE,namespace:e,methods:t}}({methods:Object.keys(this._options.api),namespace:e.namespace});t(n);}})),this._options=t,this._interface.onMessage(this._messageHandler),(this._options.listenImmediately??1)&&this.listen();}get isListening(){return this._interface.isListening}get api(){return this._options.api}}(new class{constructor(e){H(this,"_isListening",!1),H(this,"_messageHandler",(()=>{})),H(this,"_frameIdMap",new Map),H(this,"_options"),H(this,"_messageHandlerWrapper",(e=>{var t;if(null!=(t=this._options)&&t.allowedOrigins&&!this._options.allowedOrigins.includes(e.origin))return;const n=e.source;if(!n)throw new Error("Somehow the event source is null");const i={fromId:this._frameIdMap.get(e.source),event:e};this._messageHandler(e.data,(t=>{n.postMessage(t,e.origin);}),i);})),this._options=e;}get isListening(){return this._isListening}listen(){window.addEventListener("message",this._messageHandlerWrapper),this._isListening=!0;}close(){window.removeEventListener("message",this._messageHandlerWrapper),this._isListening=!1;}onMessage(e){this._messageHandler=e;}registerFrame(e,t){if(null==e||!e.contentWindow)throw new Error("Frame must have a contentWindow");this._frameIdMap.set(e.contentWindow,t);}}(e),e)}({namespace:"truffle-hud-privileged-api-v1",api:Te});Ae.registerFrame({contentWindow:window});const Oe=400,Le=400,ve=y$1((({embedInfo:e,isFocused:t})=>{w(h);const{id:i,windowProps:{title:r,shouldAllowPopout:o,initialDimensions:s,isResizable:a,resizeBounds:c}}=e,[M,l]=t$1.exports.useState(!1);t$1.exports.useEffect((()=>{t&&ze.forEach((t=>{t(e);}));}),[t]);const d=t$1.exports.useRef(null);return t$1.exports.useEffect((()=>{const e=d.current;e&&Ae.registerFrame(e,i);}),[d]),I.jsx(D,{defaultPosition:{x:72,y:0},children:I.jsxs("div",{className:"c-embed-window "+(t?"focused-window":""),id:`${i}-window`,onMouseDown:()=>{l(!0);},onMouseUp:()=>l(!1),style:{resize:a?"both":"none",width:`${(null==s?void 0:s.x)??Oe}px`,height:`${(null==s?void 0:s.y)??Le}px`,...c||{}},children:[I.jsxs("div",{className:"title-bar",children:[r,I.jsxs("div",{className:"actions",children:[o?I.jsx("button",{className:"pop-out-btn",onClick:()=>{((e,t,n)=>{const i=t??Oe,r=n??Le,o=(window.innerWidth-i)/2,s=(window.innerHeight-r)/2;window.open(e,"_blank",`width=${i},height=${r},left=${o},top=${s}`);})(`https://app.truffle.vip/embed/${i}`,null==s?void 0:s.x,null==s?void 0:s.y),$(i,!1);},children:I.jsx("img",{src:"https://cdn.bio/assets/icons/open_in_new.svg"})}):null,I.jsx("button",{className:"close-window-btn",onClick:()=>$(i,!1),children:I.jsx("img",{src:T})})]})]}),I.jsx("div",{className:"content",children:I.jsx("iframe",{ref:d,id:`${i}-iframe`,src:`https://app.truffle.vip/embed/${i}`,className:"embed-iframe",style:{pointerEvents:M||!t?"none":"inherit"}})})]})})})),Se=z`.addon-window-container {
  position: fixed;
  top: 0;
}`,ke=y$1((()=>{w(Se);const e=v$1((()=>P.get().length)),t=function(e){if(!e)return !1;const[t,n,i]=e.split(".");return !JSON.parse(atob(n)).isAnon}(F.get());return I.jsx(I.Fragment,{children:P.map((n=>{const i=n.peek();if(!i.windowProps)return;const r=R[i.id];return I.jsx("div",{className:"addon-window-container",onMouseDown:()=>function(e){K$1((()=>{const t=P.peek().length-1,n=R[e],i=n.zIndex.peek();Object.values(R.peek()).forEach((({zIndex:e,embedId:t})=>{e>i&&R[t].zIndex.set(e-1);})),n.zIndex.set(t);}));}(i.id),style:{zIndex:r.zIndex.get()+1e4,visibility:r.isOpen.get()?"visible":"hidden"},children:I.jsx(ve,{embedInfo:i,isFocused:r.isOpen.get()&&r.zIndex.get()===e.get()-1,isLoggedIn:t})},i.id)}))})}));const Ce=z`.c-toast {
  background: #ffffff;
  border: 1px solid black;
  border-radius: 4px;
  box-sizing: border-box;
  width: 320px;
  height: 56px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 0px 10px rgba(0, 0, 0, 0.15);
}
.c-toast > .icon {
  margin: 8px;
  width: 40px;
  height: 40px;
}
.c-toast > .text-container {
  margin: 0;
  width: 100%;
  font-family: "Inter", sans-serif;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 44px;
}
.c-toast > .text-container > .title {
  font-size: 12px;
  color: rgba(14, 14, 14, 0.8);
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 400;
}
.c-toast > .text-container > .body {
  font-size: 16px;
  color: #0e0e0e;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 500;
}
.c-toast > .close-button {
  flex-shrink: 0;
  flex-grow: 0;
  padding: 0;
  margin: 0;
  background: rgba(0, 0, 0, 0.08);
  border-radius: 0;
  height: 100%;
  border: none;
  width: 43px;
  cursor: pointer;
}
.c-toast > .close-button > img {
  width: 20px;
  height: 20px;
  filter: invert(1);
}`,Ue=e=>{w(Ce);const{title:t,body:n,iconUrl:i,close:r,onClick:o}=e;return I.jsxs("div",{className:"c-toast",onClick:()=>null==o?void 0:o(),children:[I.jsx("img",{className:"icon",src:i}),I.jsxs("div",{className:"text-container",children:[I.jsx("div",{className:"title",children:t}),I.jsx("div",{className:"body",children:n})]}),I.jsx("button",{className:"close-button",onClick:e=>{e.stopPropagation(),r();},children:I.jsx("img",{src:T})})]})},Qe=z`.c-alert-manager {
  position: fixed;
  right: 0;
  top: 0;
  z-index: 10900;
}`,Ye=y$1((()=>(w(Qe),I.jsx("div",{className:"c-alert-manager",children:pe.get().map((e=>I.jsx(Ue,{...e},e.id)))})))),_e=y$1((()=>{const e=W.get();if(!e)return I.jsx(I.Fragment,{});const{allowedSites:t}=e;return "social"!==t||function(e){return Pe.some((t=>{var n;return null==(n=null==e?void 0:e.url)?void 0:n.includes(t)}))}(_.get())?I.jsxs(I.Fragment,{children:[I.jsx(fe,{}),I.jsx(ke,{}),I.jsx(Ye,{})]}):I.jsx(I.Fragment,{})})),Pe=["youtube.com","twitch.tv","twitter.com","x.com","tiktok.com","instagram.com","patreon.com"];const Re=t({providerWindow:window,namespace:"truffle-injected-api-v1"}).api;!function(t,{id:n}){const i=document.head||document.documentElement,r$1=document.createElement("script");r$1.type="module",r$1.id=n,r$1.dataset.runtime=r.runtime.id,r$1.src=r.runtime.getURL(t),i.prepend(r$1);}("./contexts/all/injected-script/index.js",{id:"truffle-injected"}),(async e=>{const{storageGetFn:t,storageSetFn:r,storageSubscribeFn:o,getPageInfoFn:s}=e;!function({getFn:e,setFn:t,subscribeFn:n}){Q.resolve({get:e,set:t,subscribe:n});}({getFn:t,setFn:r,subscribeFn:o});_.set(await s((e=>{_.set(e);})));const a=()=>{if(window.self===window.top){const e=document.createElement("div");e.id="truffle-container",document.body.appendChild(e),j$1.exports.render(t$1.exports.createElement(_e),e);}};"loading"===document.readyState?window.addEventListener("DOMContentLoaded",a):a();})({storageGetFn:(e,t)=>o[e].get(t),storageSubscribeFn:(e,t,n)=>o[e].subscribe((async()=>n(await o[e].get(t)))),storageSetFn:(e,t,n)=>o[e].set(t,n),getPageInfoFn:Re.pageInfoGet});
