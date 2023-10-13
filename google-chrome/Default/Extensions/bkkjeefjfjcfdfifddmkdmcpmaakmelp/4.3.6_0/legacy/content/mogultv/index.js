import { o } from '../../../chunks/background.content-adf1e0e2.js';
import { e } from '../../../chunks/when_ready.util-67a26b5e.js';
import '../../../chunks/index-5e67059d.js';
import '../../../chunks/browser-polyfill-1756fcfb.js';
import '../../../chunks/storage-f52a9ff9.js';
import '../../../chunks/connectRuntime-07284ccc.js';

e((async()=>{var t;const e=new o,s=null===(t=document.getElementById("jwt-response"))||void 0===t?void 0:t.textContent;s&&e.fetch("/auth/finish-link",s);}));
