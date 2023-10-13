import { r } from '../../../chunks/request-ce61d6cc.js';
import { i, c, C } from '../../../chunks/gql_queries-769483ca.js';

!async function(){var i$1,c$1;if("dashboard.twitch.tv"!==window.location.hostname)return;const a=null===(i$1=/\/u\/([^\/]*)\/?/.exec(window.location.pathname))||void 0===i$1?void 0:i$1[1];if(!a)return;const r$1=await r("https://mothertree.truffle.vip/graphql",C,{contentPageType:"twitch",contentPageOwnerRef:a}),s=null===(c$1=null==r$1?void 0:r$1.channel)||void 0===c$1?void 0:c$1.orgId;if(!s)return;const d=`https://app.truffle.vip/quick-actions/${s}`;i();const u=document.createElement("truffle-quick-action");u.addEventListener("click",(()=>{window.open(d,"_blank","width=500,height=600,top=100,left=100");})),c(".quick-actions",{onAdded(t){t.prepend(u);}});}();
