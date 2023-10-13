import { t } from '../../../chunks/inject_script.util-c32e5cad.js';
import { o } from '../../../chunks/background.content-adf1e0e2.js';
import { e, o as o$1 } from '../../../chunks/index-1fb6b074.js';
import { r } from '../../../chunks/request-ce61d6cc.js';
import { o as o$2 } from '../../../chunks/storage-f52a9ff9.js';
import { n as n$1 } from '../../../chunks/util-dbc6d9af.js';
import { n } from '../../../chunks/create-5399fd46.js';
import '../../../chunks/browser-polyfill-1756fcfb.js';
import '../../../chunks/index-5e67059d.js';
import '../../../chunks/transframe-provider-e657167f.js';
import '../../../chunks/connectRuntime-07284ccc.js';

var i;async function u(e$1){return (await async function(e$1,s,{authMethod:a,throwIfErrors:c}={authMethod:i.TRUFFLE_API_KEY}){const r$1=new Headers;if(a===i.USER_GLOBAL_ACCESS_TOKEN){const e$1=await e();r$1.append("x-access-token",e$1);}else a===i.TRUFFLE_API_KEY&&r$1.append("Authorization","Bearer pk_U1x92ZrrdQoflf2JycecdmnilAGRAkmUNBpxPnVPDdeUKcsH");return r("https://mycelium.truffle.vip/graphql",e$1,s,{headers:r$1,throwIfErrors:c})}("\n      query ExtensionFetchPackageToken($packageInstallId: ID!) {\n        packageInstallUserAccessToken(input: {\n            packageInstallId: $packageInstallId\n        })\n      }\n    ",{packageInstallId:e$1},{authMethod:i.USER_GLOBAL_ACCESS_TOKEN})).packageInstallUserAccessToken}!function(e){e.USER_GLOBAL_ACCESS_TOKEN="USER_GLOBAL_ACCESS_TOKEN",e.TRUFFLE_API_KEY="TRUFFLE_API_KEY",e.NONE="NONE";}(i||(i={}));n({api:{getGlobalUserAccessToken:async()=>await e(),setGlobalUserAccessToken:async(e,s)=>{await o$1(s);},onGlobalUserAccessTokenChanged:(e$1,s)=>{let a;o$2.auth.subscribe((async()=>{const e$1=await e();e$1!==a&&(s(e$1),a=e$1);}));},getPackageInstallUserAccessToken:async(e,s)=>await async function(e){const s=await o$2.auth.get("packageInstallAccessTokens");let t=s[e];return t||(t=await u(e),s[e]=t,await o$2.auth.set("packageInstallAccessTokens",s)),t}(s),storageBucketSubscribe:async(e,s,t)=>{const a=o$2[s];if(!a)throw new Error(`Unknown bucket: ${s}`);a.subscribe(t);},storageBucketGet:async(e,s,t)=>{const a=o$2[s];if(!a)throw new Error(`Unknown bucket: ${s}`);return await a.get(t)},storageBucketSet:async(e,s,t,a)=>{const n=o$2[s];if(!n)throw new Error(`Unknown bucket: ${s}`);return n.set(t,a)}},namespace:"truffle-privileged-api-v1",strictMode:!0}).registerFrame(n$1(window)),new o,t("legacy/injected/all/index.js");
