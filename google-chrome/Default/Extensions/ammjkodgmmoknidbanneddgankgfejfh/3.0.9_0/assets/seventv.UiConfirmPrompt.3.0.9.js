import{a as g,a9 as f,r as P,t as b}from"./seventv.useUserAgent.3.0.9.js";import{w as R,n as B,G as T,a as S,H as k,e as A,l as w,f as _,j as U,k as F,u as N,as as D,F as $,m as E,_ as V}from"./seventv.index.3.0.9.js";import{f as j}from"./seventv.index.3.0.93.js";import{C as q}from"./seventv.CloseIcon.3.0.9.js";const I=new WeakMap;function O(h,e){let t=I.get(h);t||(t=g({userInput:0,init:!1,sys:!0,live:!1,visible:!0,paused:!1,pauseBuffer:[],scrollClear:()=>{},container:void 0,bounds:void 0}),I.set(h,t));const o=f(t,"container"),s=f(t,"bounds");e&&R(()=>{var n,a;(n=e.scroller.value)!=null&&n.container&&(o.value=e.scroller.value.container),e.bounds.value&&(s.value=e.bounds.value),(a=e.scroller.value)!=null&&a.isActive&&t.userInput++});async function v(n=0){if(!o.value||!(s!=null&&s.value)||t.paused)return;if(t.scrollClear(),t.sys=!0,n===0){o.value.scrollTo({top:o.value.scrollHeight}),s.value=o.value.getBoundingClientRect();return}const a=await new Promise(c=>{B(()=>{if(!o.value)return 0;c(o.value.scrollTop)})}),i=Date.now();let u=!1;function l(){if(!o.value||!(s!=null&&s.value)||t.paused||u)return;const c=Date.now(),p=Math.min(1,(c-i)/n);o.value.scrollTop=p*(o.value.scrollHeight-a)+a,p<1?requestAnimationFrame(l):s.value=o.value.getBoundingClientRect()}t.scrollClear=()=>u=!0,n<1?(o.value.scrollTo({top:o.value.scrollHeight}),s.value=o.value.getBoundingClientRect()):requestAnimationFrame(l)}function d(){t.paused=!0}async function m(){t.paused=!1,t.init=!0,B(()=>{t.init=!1,v()})}async function C(){const{top:n,h:a}=await new Promise(u=>{B(()=>{if(!o.value||!(s!=null&&s.value))return{top:0,h:0};const l=Math.floor(o.value.scrollTop),c=Math.floor(o.value.scrollHeight-s.value.height);u({top:l,h:c})})}),i=t.live=n>=a-1;if(!t.init){if(t.sys){t.sys=!1;return}t.userInput>0&&(t.userInput=0,d()),i&&m()}}function r(n){n.deltaY<0&&t.userInput++}return g({init:f(t,"init"),paused:f(t,"paused"),live:f(t,"live"),pauseBuffer:f(t,"pauseBuffer"),scrollToLive:v,pause:d,unpause:m,onScroll:C,onWheel:r})}const G=T("chat.smooth_scroll_duration"),M=T("chat.line_limit",150);let y;const H=T("chat.message_batch_duration"),L=new WeakMap;function te(h){let e=L.get(h);e||(e=g({displayed:[],displayedByUser:{},awaited:new Map,buffer:[],moderated:[],chatters:{},chattersByUsername:{},overflowLimit:0,twitchHandlers:new Set,sendMessage:()=>{}}),L.set(h,e),B(()=>{S(()=>t.paused,(r,n)=>{if(r&&!n)return;const a=Math.ceil(t.pauseBuffer.length/32);let i=0;for(;t.pauseBuffer.length;){const u=t.pauseBuffer.splice(0,50);i+=a,k(()=>{e.displayed=e.displayed.concat(u)},i)}k(()=>{t.scrollToLive()},i+a)})}));const t=O(h);function o(r,n){if(t.paused){t.pauseBuffer.push(r),t.pauseBuffer.length>M.value&&t.pauseBuffer.shift();return}if(r.author){r.author.lastMsgId=r.sym;const a=e.chatters[r.author.id];a?(a.username=r.author.username,a.displayName=r.author.displayName,a.color=r.author.color,a.intl=r.author.intl):e.chatters[r.author.id]=r.author,(!e.chatters[r.author.id]||!e.chattersByUsername[r.author.username])&&(e.chatters[r.author.id]=r.author,r.author.username&&(e.chattersByUsername[r.author.username]=r.author)),e.displayedByUser[r.author.username]||(e.displayedByUser[r.author.username]={}),e.displayedByUser[r.author.username][r.id]=r}e.buffer.push(r),e.awaited.has(r.id)&&(e.awaited.get(r.id)(r),e.awaited.delete(r.id)),v(n)}function s(){e.displayed.length=0,e.buffer.length=0,e.chatters={}}function v(r){y||(y=window.setTimeout(()=>{if(t.paused){y=void 0;return}if(t.init==!0&&(t.init=!1),e.buffer.length>0){const a=e.buffer.splice(0,e.buffer.length);e.displayed.push(...a)}B(()=>t.scrollToLive(G.value));const n=M.value*1.25;e.displayed.length>n?y=window.setTimeout(()=>{const a=e.displayed.splice(0,e.displayed.length-M.value);for(const i of a){if(!i.author)continue;const u=e.displayedByUser[i.author.username];u&&delete u[i.id]}y=void 0},(r?5:H.value)/1.5):y=void 0},(r?5:H.value)/2))}function d(r,n){const a=e.displayed.length+t.pauseBuffer.length,i=e.displayed.length,u=[];for(let l=a-1;l>=0;l--){const c=l>=i?t.pauseBuffer[l-i]:e.displayed[l];if(c&&r(c)&&(u.push(c),!n))break}return n?u:u[0]??null}function m(r){const n=e.displayedByUser[r];return n?Object.values(n):[]}async function C(r,n=1e4){return new Promise((a,i)=>{const u=e.displayed.find(p=>p.id===r);if(u)return a(u);const l=e.buffer.find(p=>p.id===r);if(l)return a(l);const{stop:c}=k(()=>{e.awaited.delete(r),i(Error("Timed out waiting for message"))},n);e.awaited.set(r,p=>{a(p),c()})})}return g({displayed:f(e,"displayed"),handlers:e.twitchHandlers,chatters:f(e,"chatters"),chattersByUsername:f(e,"chattersByUsername"),moderated:f(e,"moderated"),sendMessage:f(e,"sendMessage"),find:d,messagesByUser:m,awaitMessage:C,add:o,clear:s})}const Y={key:0,class:"seventv-confirm-prompt-heading"},z={class:"seventv-confirm-prompt-body"},J={key:0},K={class:"seventv-confirm-prompt-choice"},Q=["onClick"],X=A({__name:"UiConfirmPrompt",props:{title:{},message:{},choices:{}},emits:["answer","close"],setup(h,{emit:e}){const t=P();function o(s){e("answer",s),e("close")}return j(t,()=>{e("close")}),(s,v)=>(w(),_("main",{ref_key:"promptRef",ref:t,class:"seventv-confirm-prompt"},[s.title?(w(),_("div",Y,[U("p",null,b(s.title),1),F(q,{onClick:v[0]||(v[0]=d=>e("close"))})])):N("",!0),U("div",z,[s.message?(w(),_("p",J,b(s.message),1)):D(s.$slots,"default",{key:1},void 0,!0)]),U("div",K,[(w(!0),_($,null,E(s.choices,(d,m)=>(w(),_("button",{key:m,onClick:C=>o(d)},b(d.toUpperCase()),9,Q))),128))])],512))}});const re=V(X,[["__scopeId","data-v-8612a56d"]]);export{re as U,O as a,te as u};
