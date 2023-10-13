async function r(r,e,a,{throwIfErrors:o,headers:n}={}){null!=n||(n=new Headers),n.append("Content-Type","application/json");const t=await fetch(r,{method:"POST",headers:n,body:JSON.stringify({query:e,variables:a})}),s=await t.json();if(o&&(null==s?void 0:s.errors))throw new Error(`graphql error ${s.errors}`);return s.data}

export { r };
