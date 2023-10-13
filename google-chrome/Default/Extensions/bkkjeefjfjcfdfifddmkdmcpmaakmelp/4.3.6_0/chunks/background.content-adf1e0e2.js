import { t } from './index-5e67059d.js';
import { r } from './browser-polyfill-1756fcfb.js';
import { n } from './connectRuntime-07284ccc.js';
import { o as o$1 } from './storage-f52a9ff9.js';

class o extends t{constructor(){super(),this.fetch=async(t,e)=>{const s=Math.random().toString();return this.port.postMessage({nonce:s,path:t,body:e}),new Promise((t=>{const e=a=>{var o;(null===(o=null==a?void 0:a.meta)||void 0===o?void 0:o.nonce)===s&&(this.port.onMessage.removeListener(e),t(a));};this.port.onMessage.addListener(e);}))},this.extensionId=r.runtime.id,this.port=this.connectToBackground(),this.port.onMessage.addListener(this.onMessage),window.addEventListener("message",(async t=>{var e,s,o;if(t.source!==window||(null===(e=t.data)||void 0===e?void 0:e.id)!==this.extensionId||"response"===(null===(s=t.data)||void 0===s?void 0:s.type))return;let n;switch(null===(o=t.data)||void 0===o?void 0:o.type){case"fetch":n=await this.fetch(t.data.data[0],t.data.data[1]);break;case"storage.get":{const[e,s]=t.data.data.split(".");n=await o$1[e].get(s);break}case"storage.set":{const[e,s]=t.data.data[0].split(".");n=await o$1[e].set(s,t.data.data[1]);break}}window.postMessage({id:this.extensionId,nonce:t.data.nonce,type:"response",data:n});}));}connectToBackground(){return n()}async onMessage(t){window.postMessage(t);}}

export { o };
