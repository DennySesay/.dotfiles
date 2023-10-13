import{u as G,d as H}from"./seventv.ReactHooks.3.0.9.js";import{a as P,d as A}from"./seventv.useModule.3.0.9.js";import{e as S,G as h,a as N,l as p,f as E,j as M,k as I,u as g,y as W,z as q,_ as R,W as z,al as K,ar as Z,w as J,a4 as Q,ak as V,s as w,aF as X,Z as Y,F as B,n as ee,m as te,aj as _}from"./seventv.index.3.0.9.js";import{d as ne,o as oe}from"./seventv.index.3.0.93.js";import{r as b,u as C,n as ae,l as se,a as ue}from"./seventv.useUserAgent.3.0.9.js";import{u as re}from"./seventv.useChannelContext.3.0.9.js";import{u as ie}from"./seventv.useChatEmotes.3.0.9.js";import{_ as T}from"./seventv.StarIcon.3.0.9.js";import{u as ce}from"./seventv.useUpdater.3.0.9.js";import{u as D,E as le}from"./seventv.EmoteMenu.3.0.9.js";import{u as me}from"./seventv.Settings.3.0.9.js";const pe=d=>(W("data-v-7189c19d"),d=d(),q(),d),de=pe(()=>M("span",{class:"tooltip-over"},"Emote Menu",-1)),fe={key:0,class:"seventv-emote-menu-update-flair"},_e=S({__name:"EmoteMenuButton",props:{onClick:{type:Function}},setup(d){const o=D(),r=ce(),i=b(!1),n=h("ui.emote_menu.button_placement");return N(n,c=>{i.value=c==="below"},{immediate:!0}),(c,f)=>i.value?(p(),E("div",{key:0,class:"seventv-tw-button seventv-emote-menu-button",onClick:f[0]||(f[0]=(...s)=>c.onClick&&c.onClick(...s))},[M("button",null,[I(T,{provider:"7TV",class:"icon"})]),de,!C(r).isUpToDate&&!C(o).open?(p(),E("div",fe)):g("",!0)])):g("",!0)}});const O=R(_e,[["__scopeId","data-v-7189c19d"]]),ve={class:"seventv-emote-menu-wrap"},he=S({__name:"EmoteMenu",props:{instance:{},buttonEl:{}},setup(d){const o=d,r=b(),i=b(),n=D();n.channelID=o.instance.component.props.channelID??"";const c=re(n.channelID,!0),f=me(),s=ie(c),l=b(),u=h("ui.emote_menu_search"),m=h("ui.emote_menu.usage"),v=P("chat"),F=h("ui.emote_menu.button_placement"),x=P("chat-input-controller");z(()=>{var e;(e=x.value)!=null&&e.instance&&x.value.instance.addButton("emote-menu",O,{onClick:()=>n.open=!n.open},1)});const $=ne("Control",{initial:!1});oe("e",e=>{$.value&&(k(),e.preventDefault())});function k(e){const t=o.instance.component;if(e){t.onEmotePickerButtonClick();return}n.open?t.props.closeEmotePicker():(t.props.clearMenus(),typeof t.closeBitsCard=="function"&&t.closeBitsCard(),typeof t.closePaidPinnedChatCardForEmotePicker=="function"&&t.closePaidPinnedChatCardForEmotePicker(),typeof t.closeCheerCard=="function"&&t.closeCheerCard()),n.open=!n.open,ee(()=>{l.value&&l.value.focus()})}function j(e){const t=e.split(" ");for(const a of t){const y=s.active[a];y&&m.value.set(y.id,(m.value.get(y.id)??0)+1)}return m.value=new Map(m.value),e}N(v,e=>{!e||!e.instance||e.instance.messageSendMiddleware.set("emote-menu-usage",j)},{immediate:!0});function L(e){const t=o.instance.component.autocompleteInputRef;if(!t)return se.warn("ref to input not found, cannot insert emote");let a=t.getValue();u.value?a=a.slice(0,n.filter.length?n.filter.length*-1:1/0):a=a.at(-1)===" "?a:a+" ",t.setValue(a+(e.unicode??e.name)+" "),o.instance.component.chatInputRef.focus()}K(o.instance.component,"onBitsIconClick",function(e){e==null||e(),n.open=!1}),Z(o.instance.component.autocompleteInputRef,"state",{value(e){if(!n.open){n.filter="";return}u.value&&(n.filter=e.value.split(" ").at(-1)??"")}});function U(e){f.open||!(e.target instanceof Node)||i.value&&i.value.contains(e.target)||o.buttonEl&&o.buttonEl.contains(e.target)||(n.open=!1)}return J(()=>{if(!r.value&&o.instance.domNodes.root){const e=o.instance.domNodes.root.querySelector(".chat-input");if(!e)return;const t=e.querySelector("[data-test-selector='chat-input']")??e;r.value=e,i.value=t}}),Q(()=>{V(o.instance.component.autocompleteInputRef,"state"),V(o.instance.component,"onBitsIconClick")}),(e,t)=>(p(),E(B,null,[M("div",ve,[r.value?(p(),w(le,{key:0,"anchor-el":r.value,width:"32.5rem",scale:"1rem",instance:o.instance,onEmoteClick:t[0]||(t[0]=a=>L(a)),onToggleNativeMenu:t[1]||(t[1]=a=>k(!0)),onClose:U},null,8,["anchor-el","instance"])):g("",!0)]),e.buttonEl&&C(F)==="regular"?(p(),w(Y,{key:0,to:e.buttonEl},[I(O,{onClick:t[2]||(t[2]=a=>k())}),M("div",{class:ae(["seventv-emote-menu-button",{"menu-open":C(n).open}]),onClick:t[3]||(t[3]=X(a=>k(),["stop"]))},[I(T,{provider:"7TV"})],2)],8,["to"])):g("",!0)],64))}});const be=R(he,[["__scopeId","data-v-792b6f48"]]),Ee=[_("ui.emote_menu_search","TOGGLE",{path:["Appearance","Interface"],label:"Emote Menu: Live Input Search",hint:"Use the chat's regular input box to search in the emote menu instead of the integrated search box",defaultValue:!1}),_("ui.emote_menu.button_placement","DROPDOWN",{path:["Appearance","Interface"],label:"Emote Menu Button Placement",hint:"Control where the 7TV emote menu button is placed. Setting to 'Below Input' will return the native emote menu to its original position.",options:[["Regular","regular"],["Below Input","below"],["Hidden","hidden"]],defaultValue:"regular"}),_("ui.emote_menu.most_used","TOGGLE",{path:["Appearance","Interface"],label:"Emote Menu: Most Used Emotes",hint:"Whether or not to display the emotes you type the most in the emote menu (Temporarily disabled due to performance issues)",disabledIf:()=>!0,defaultValue:!0}),_("ui.emote_menu.favorites","NONE",{path:["",""],label:"",defaultValue:new Set}),_("ui.emote_menu.usage","NONE",{path:["",""],label:"",defaultValue:new Map}),_("ui.emote_menu.collapsed_sets","NONE",{path:["",""],label:"",defaultValue:new Set})],ge=S({__name:"EmoteMenuModule",setup(d){const{markAsReady:o}=A("emote-menu",{name:"Emote Menu",depends_on:["settings"]}),r=b(),i=ue(new WeakMap),n=h("ui.emote_menu.button_placement"),c=G({parentSelector:".chat-room__content",maxDepth:150,predicate:s=>s.onEmotePickerButtonClick},{trackRoot:!0,containerClass:"seventv-chat-input-container",hooks:{render(s,l){return i.set(s,!!s.component.props.channelID),f(Object.values(s.domNodes)),l}}}),f=H(s=>{for(const l of s){const u=l.querySelector("button[data-a-target='emote-picker-button']");if(u){r.value=u;for(let m=0;m<u.childElementCount;m++){const v=u.children[m];v.classList.contains("seventv-emote-menu-button")||(n.value==="regular"?v.classList.add("seventv-emote-menu-overriden"):v.classList.remove("seventv-emote-menu-overriden"))}}}},50);return N(n,s=>{for(const l of Object.values(c.instances).map(u=>u.domNodes))f(Object.values(l))},{immediate:!0}),o(),(s,l)=>(p(!0),E(B,null,te(C(c).instances,u=>(p(),E(B,{key:u.identifier},[i.get(u)?(p(),w(be,{key:0,instance:u,"button-el":r.value},null,8,["instance","button-el"])):g("",!0)],64))),128))}});const Ve=Object.freeze(Object.defineProperty({__proto__:null,config:Ee,default:ge},Symbol.toStringTag,{value:"Module"}));export{Ve as _};
