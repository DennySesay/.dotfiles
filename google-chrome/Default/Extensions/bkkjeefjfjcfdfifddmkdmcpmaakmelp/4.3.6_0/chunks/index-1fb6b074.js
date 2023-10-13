import { o as o$1 } from './storage-f52a9ff9.js';
import { r } from './request-ce61d6cc.js';

async function s(){let s=await o$1.auth.get("savedAnonAccessToken");return s||(s=await async function(){var n;const s=await r("https://mycelium.truffle.vip/graphql","\n    mutation UserAnonCreate {\n      userLoginAnon {\n        accessToken\n      }\n    }\n  ",{});return null===(n=null==s?void 0:s.userLoginAnon)||void 0===n?void 0:n.accessToken}(),await o$1.auth.set("savedAnonAccessToken",s)),s}function t(n){const[,a]=n.split(".");return JSON.parse(atob(a))}async function e(){let a=await o$1.auth.get("accessToken");return a||(a=await s()),a}async function o(a){var e;const o=t(await s()),c=null!==(e=a&&t(a))&&void 0!==e?e:{};o.userId!==c.userId||c.isAnon?await o$1.auth.set("packageInstallAccessTokens",{}):await o$1.auth.set("savedAnonAccessToken",void 0),await o$1.auth.set("accessToken",a);}

export { e, o };
