import { o, c, C } from '../../../chunks/gql_queries-769483ca.js';
import { r } from '../../../chunks/request-ce61d6cc.js';

!async function(){var i,c$1;if("studio.youtube.com"!==window.location.hostname)return;const a=null===(i=window.ytcfg)||void 0===i?void 0:i.get("CHANNEL_ID");if(!a)return;const d=await r("https://mothertree.truffle.vip/graphql",C,{contentPageType:"youtube",contentPageOwnerRef:a}),r$1=null===(c$1=null==d?void 0:d.channel)||void 0===c$1?void 0:c$1.orgId;if(!r$1)return;const s=`https://app.truffle.vip/quick-actions/${r$1}`,l=document.createElement("li");l.style.padding="7%";const u=o();l.appendChild(u),u.addEventListener("click",(()=>{window.open(s,"_blank","width=500,height=600,top=100,left=100");})),c("#left-nav ul",{onAdded(t){t.prepend(l);}});}();
