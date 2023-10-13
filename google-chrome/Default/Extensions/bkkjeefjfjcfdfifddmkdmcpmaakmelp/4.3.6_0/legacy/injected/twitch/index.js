import { e } from '../../../chunks/background.injected-0c5a5e2d.js';
import '../../../chunks/index-5e67059d.js';

!async function(n){const e=window.fetch.bind(window);window.fetch=async function(c,t){var i;const o=await e(c,t);try{(null===(i=null==t?void 0:t.headers)||void 0===i?void 0:i["Client-Id"])&&n.fetch("/twitch/set-gql-headers",t.headers);}catch(n){console.log("err saving gql");}return o};}(new e);
