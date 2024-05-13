import{t as ie,o as se}from"./scheduler.CGGfjE9Y.js";import{w as pt}from"./index.CdiQfe95.js";import{a as ce,b as P}from"./paths.CJ15NI4l.js";new URL("sveltekit-internal://");function le(t,n){return t==="/"||n==="ignore"?t:n==="never"?t.endsWith("/")?t.slice(0,-1):t:n==="always"&&!t.endsWith("/")?t+"/":t}function fe(t){return t.split("%25").map(decodeURI).join("%25")}function ue(t){for(const n in t)t[n]=decodeURIComponent(t[n]);return t}function ct({href:t}){return t.split("#")[0]}const de=["href","pathname","search","toString","toJSON"];function he(t,n,e){const a=new URL(t);Object.defineProperty(a,"searchParams",{value:new Proxy(a.searchParams,{get(r,o){if(o==="get"||o==="getAll"||o==="has")return i=>(e(i),r[o](i));n();const s=Reflect.get(r,o);return typeof s=="function"?s.bind(r):s}}),enumerable:!0,configurable:!0});for(const r of de)Object.defineProperty(a,r,{get(){return n(),t[r]},enumerable:!0,configurable:!0});return a}const pe="/__data.json",ge=".html__data.json";function me(t){return t.endsWith(".html")?t.replace(/\.html$/,ge):t.replace(/\/$/,"")+pe}function _e(...t){let n=5381;for(const e of t)if(typeof e=="string"){let a=e.length;for(;a;)n=n*33^e.charCodeAt(--a)}else if(ArrayBuffer.isView(e)){const a=new Uint8Array(e.buffer,e.byteOffset,e.byteLength);let r=a.length;for(;r;)n=n*33^a[--r]}else throw new TypeError("value must be a string or TypedArray");return(n>>>0).toString(36)}function ye(t){const n=atob(t),e=new Uint8Array(n.length);for(let a=0;a<n.length;a++)e[a]=n.charCodeAt(a);return e.buffer}const jt=window.fetch;window.fetch=(t,n)=>((t instanceof Request?t.method:(n==null?void 0:n.method)||"GET")!=="GET"&&M.delete(gt(t)),jt(t,n));const M=new Map;function we(t,n){const e=gt(t,n),a=document.querySelector(e);if(a!=null&&a.textContent){let{body:r,...o}=JSON.parse(a.textContent);const s=a.getAttribute("data-ttl");return s&&M.set(e,{body:r,init:o,ttl:1e3*Number(s)}),a.getAttribute("data-b64")!==null&&(r=ye(r)),Promise.resolve(new Response(r,o))}return window.fetch(t,n)}function ve(t,n,e){if(M.size>0){const a=gt(t,e),r=M.get(a);if(r){if(performance.now()<r.ttl&&["default","force-cache","only-if-cached",void 0].includes(e==null?void 0:e.cache))return new Response(r.body,r.init);M.delete(a)}}return window.fetch(n,e)}function gt(t,n){let a=`script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request?t.url:t)}]`;if(n!=null&&n.headers||n!=null&&n.body){const r=[];n.headers&&r.push([...new Headers(n.headers)].join(",")),n.body&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&r.push(n.body),a+=`[data-hash="${_e(...r)}"]`}return a}const be=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Ee(t){const n=[];return{pattern:t==="/"?/^\/$/:new RegExp(`^${Se(t).map(a=>{const r=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(a);if(r)return n.push({name:r[1],matcher:r[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(a);if(o)return n.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!a)return;const s=a.split(/\[(.+?)\](?!\])/);return"/"+s.map((c,f)=>{if(f%2){if(c.startsWith("x+"))return lt(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return lt(String.fromCharCode(...c.slice(2).split("-").map(l=>parseInt(l,16))));const u=be.exec(c),[,h,g,d,_]=u;return n.push({name:d,matcher:_,optional:!!h,rest:!!g,chained:g?f===1&&s[0]==="":!1}),g?"(.*?)":h?"([^/]*)?":"([^/]+?)"}return lt(c)}).join("")}).join("")}/?$`),params:n}}function ke(t){return!/^\([^)]+\)$/.test(t)}function Se(t){return t.slice(1).split("/").filter(ke)}function Ae(t,n,e){const a={},r=t.slice(1),o=r.filter(i=>i!==void 0);let s=0;for(let i=0;i<n.length;i+=1){const c=n[i];let f=r[i-s];if(c.chained&&c.rest&&s&&(f=r.slice(i-s,i+1).filter(u=>u).join("/"),s=0),f===void 0){c.rest&&(a[c.name]="");continue}if(!c.matcher||e[c.matcher](f)){a[c.name]=f;const u=n[i+1],h=r[i+1];u&&!u.rest&&u.optional&&h&&c.chained&&(s=0),!u&&!h&&Object.keys(a).length===o.length&&(s=0);continue}if(c.optional&&c.chained){s++;continue}return}if(!s)return a}function lt(t){return t.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Re({nodes:t,server_loads:n,dictionary:e,matchers:a}){const r=new Set(n);return Object.entries(e).map(([i,[c,f,u]])=>{const{pattern:h,params:g}=Ee(i),d={id:i,exec:_=>{const l=h.exec(_);if(l)return Ae(l,g,a)},errors:[1,...u||[]].map(_=>t[_]),layouts:[0,...f||[]].map(s),leaf:o(c)};return d.errors.length=d.layouts.length=Math.max(d.errors.length,d.layouts.length),d});function o(i){const c=i<0;return c&&(i=~i),[c,t[i]]}function s(i){return i===void 0?i:[r.has(i),t[i]]}}function Dt(t,n=JSON.parse){try{return n(sessionStorage[t])}catch{}}function It(t,n,e=JSON.stringify){const a=e(n);try{sessionStorage[t]=a}catch{}}const Ie="1715618668780",$t="sveltekit:snapshot",Ct="sveltekit:scroll",Vt="sveltekit:states",Le="sveltekit:pageurl",D="sveltekit:history",q="sveltekit:navigation",J={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},K=location.origin;function Ft(t){if(t instanceof URL)return t;let n=document.baseURI;if(!n){const e=document.getElementsByTagName("base");n=e.length?e[0].href:document.URL}return new URL(t,n)}function mt(){return{x:pageXOffset,y:pageYOffset}}function O(t,n){return t.getAttribute(`data-sveltekit-${n}`)}const Lt={...J,"":J.hover};function Mt(t){let n=t.assignedSlot??t.parentNode;return(n==null?void 0:n.nodeType)===11&&(n=n.host),n}function Gt(t,n){for(;t&&t!==n;){if(t.nodeName.toUpperCase()==="A"&&t.hasAttribute("href"))return t;t=Mt(t)}}function ut(t,n){let e;try{e=new URL(t instanceof SVGAElement?t.href.baseVal:t.href,document.baseURI)}catch{}const a=t instanceof SVGAElement?t.target.baseVal:t.target,r=!e||!!a||nt(e,n)||(t.getAttribute("rel")||"").split(/\s+/).includes("external"),o=(e==null?void 0:e.origin)===K&&t.hasAttribute("download");return{url:e,external:r,target:a,download:o}}function W(t){let n=null,e=null,a=null,r=null,o=null,s=null,i=t;for(;i&&i!==document.documentElement;)a===null&&(a=O(i,"preload-code")),r===null&&(r=O(i,"preload-data")),n===null&&(n=O(i,"keepfocus")),e===null&&(e=O(i,"noscroll")),o===null&&(o=O(i,"reload")),s===null&&(s=O(i,"replacestate")),i=Mt(i);function c(f){switch(f){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Lt[a??"off"],preload_data:Lt[r??"off"],keepfocus:c(n),noscroll:c(e),reload:c(o),replace_state:c(s)}}function Pt(t){const n=pt(t);let e=!0;function a(){e=!0,n.update(s=>s)}function r(s){e=!1,n.set(s)}function o(s){let i;return n.subscribe(c=>{(i===void 0||e&&c!==i)&&s(i=c)})}return{notify:a,set:r,subscribe:o}}function Pe(){const{set:t,subscribe:n}=pt(!1);let e;async function a(){clearTimeout(e);try{const r=await fetch(`${ce}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!r.ok)return!1;const s=(await r.json()).version!==Ie;return s&&(t(!0),clearTimeout(e)),s}catch{return!1}}return{subscribe:n,check:a}}function nt(t,n){return t.origin!==K||!t.pathname.startsWith(n)}const xe=-1,Ue=-2,Ne=-3,Te=-4,Oe=-5,je=-6;function De(t,n){if(typeof t=="number")return r(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const e=t,a=Array(e.length);function r(o,s=!1){if(o===xe)return;if(o===Ne)return NaN;if(o===Te)return 1/0;if(o===Oe)return-1/0;if(o===je)return-0;if(s)throw new Error("Invalid input");if(o in a)return a[o];const i=e[o];if(!i||typeof i!="object")a[o]=i;else if(Array.isArray(i))if(typeof i[0]=="string"){const c=i[0],f=n==null?void 0:n[c];if(f)return a[o]=f(r(i[1]));switch(c){case"Date":a[o]=new Date(i[1]);break;case"Set":const u=new Set;a[o]=u;for(let d=1;d<i.length;d+=1)u.add(r(i[d]));break;case"Map":const h=new Map;a[o]=h;for(let d=1;d<i.length;d+=2)h.set(r(i[d]),r(i[d+1]));break;case"RegExp":a[o]=new RegExp(i[1],i[2]);break;case"Object":a[o]=Object(i[1]);break;case"BigInt":a[o]=BigInt(i[1]);break;case"null":const g=Object.create(null);a[o]=g;for(let d=1;d<i.length;d+=2)g[i[d]]=r(i[d+1]);break;default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(i.length);a[o]=c;for(let f=0;f<i.length;f+=1){const u=i[f];u!==Ue&&(c[f]=r(u))}}else{const c={};a[o]=c;for(const f in i){const u=i[f];c[f]=r(u)}}return a[o]}return r(0)}const qt=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...qt];const $e=new Set([...qt]);[...$e];function Ce(t){return t.filter(n=>n!=null)}class at{constructor(n,e){this.status=n,typeof e=="string"?this.body={message:e}:e?this.body=e:this.body={message:`Error: ${n}`}}toString(){return JSON.stringify(this.body)}}class Ht{constructor(n,e){this.status=n,this.location=e}}class _t extends Error{constructor(n,e,a){super(a),this.status=n,this.text=e}}const Ve="x-sveltekit-invalidated",Fe="x-sveltekit-trailing-slash";function z(t){return t instanceof at||t instanceof _t?t.status:500}function Me(t){return t instanceof _t?t.text:"Internal Error"}const T=Dt(Ct)??{},H=Dt($t)??{},U={url:Pt({}),page:Pt({}),navigating:pt(null),updated:Pe()};function yt(t){T[t]=mt()}function Ge(t,n){let e=t+1;for(;T[e];)delete T[e],e+=1;for(e=n+1;H[e];)delete H[e],e+=1}function C(t){return location.href=t.href,new Promise(()=>{})}function xt(){}let rt,dt,X,x,ht,V;const Bt=[],Z=[];let R=null;const Kt=[],Yt=[];let j=[],y={branch:[],error:null,url:null},wt=!1,Q=!1,Ut=!0,B=!1,F=!1,Jt=!1,vt=!1,bt,S,L,I,tt;const G=new Set;async function nn(t,n,e){var r,o;document.URL!==location.href&&(location.href=location.href),V=t,rt=Re(t),x=document.documentElement,ht=n,dt=t.nodes[0],X=t.nodes[1],dt(),X(),S=(r=history.state)==null?void 0:r[D],L=(o=history.state)==null?void 0:o[q],S||(S=L=Date.now(),history.replaceState({...history.state,[D]:S,[q]:L},""));const a=T[S];a&&(history.scrollRestoration="manual",scrollTo(a.x,a.y)),e?await Xe(ht,e):We(location.href,{replaceState:!0}),ze()}function qe(){Bt.length=0,vt=!1}function Wt(t){Z.some(n=>n==null?void 0:n.snapshot)&&(H[t]=Z.map(n=>{var e;return(e=n==null?void 0:n.snapshot)==null?void 0:e.capture()}))}function zt(t){var n;(n=H[t])==null||n.forEach((e,a)=>{var r,o;(o=(r=Z[a])==null?void 0:r.snapshot)==null||o.restore(e)})}function Nt(){yt(S),It(Ct,T),Wt(L),It($t,H)}async function Xt(t,n,e,a){return Y({type:"goto",url:Ft(t),keepfocus:n.keepFocus,noscroll:n.noScroll,replace_state:n.replaceState,state:n.state,redirect_count:e,nav_token:a,accept:()=>{n.invalidateAll&&(vt=!0)}})}async function He(t){if(t.id!==(R==null?void 0:R.id)){const n={};G.add(n),R={id:t.id,token:n,promise:Qt({...t,preload:n}).then(e=>(G.delete(n),e.type==="loaded"&&e.state.error&&(R=null),e))}}return R.promise}async function ft(t){const n=rt.find(e=>e.exec(te(t)));n&&await Promise.all([...n.layouts,n.leaf].map(e=>e==null?void 0:e[1]()))}function Zt(t,n,e){var o;y=t.state;const a=document.querySelector("style[data-sveltekit]");a&&a.remove(),I=t.props.page,bt=new V.root({target:n,props:{...t.props,stores:U,components:Z},hydrate:e}),zt(L);const r={from:null,to:{params:y.params,route:{id:((o=y.route)==null?void 0:o.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};j.forEach(s=>s(r)),Q=!0}async function et({url:t,params:n,branch:e,status:a,error:r,route:o,form:s}){let i="never";if(P&&(t.pathname===P||t.pathname===P+"/"))i="always";else for(const d of e)(d==null?void 0:d.slash)!==void 0&&(i=d.slash);t.pathname=le(t.pathname,i),t.search=t.search;const c={type:"loaded",state:{url:t,params:n,branch:e,error:r,route:o},props:{constructors:Ce(e).map(d=>d.node.component),page:I}};s!==void 0&&(c.props.form=s);let f={},u=!I,h=0;for(let d=0;d<Math.max(e.length,y.branch.length);d+=1){const _=e[d],l=y.branch[d];(_==null?void 0:_.data)!==(l==null?void 0:l.data)&&(u=!0),_&&(f={...f,..._.data},u&&(c.props[`data_${h}`]=f),h+=1)}return(!y.url||t.href!==y.url.href||y.error!==r||s!==void 0&&s!==I.form||u)&&(c.props.page={error:r,params:n,route:{id:(o==null?void 0:o.id)??null},state:{},status:a,url:new URL(t),form:s??null,data:u?f:I.data}),c}async function Et({loader:t,parent:n,url:e,params:a,route:r,server_data_node:o}){var u,h,g;let s=null,i=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},f=await t();if((u=f.universal)!=null&&u.load){let d=function(...l){for(const m of l){const{href:b}=new URL(m,e);c.dependencies.add(b)}};const _={route:new Proxy(r,{get:(l,m)=>(i&&(c.route=!0),l[m])}),params:new Proxy(a,{get:(l,m)=>(i&&c.params.add(m),l[m])}),data:(o==null?void 0:o.data)??null,url:he(e,()=>{i&&(c.url=!0)},l=>{i&&c.search_params.add(l)}),async fetch(l,m){let b;l instanceof Request?(b=l.url,m={body:l.method==="GET"||l.method==="HEAD"?void 0:await l.blob(),cache:l.cache,credentials:l.credentials,headers:l.headers,integrity:l.integrity,keepalive:l.keepalive,method:l.method,mode:l.mode,redirect:l.redirect,referrer:l.referrer,referrerPolicy:l.referrerPolicy,signal:l.signal,...m}):b=l;const A=new URL(b,e);return i&&d(A.href),A.origin===e.origin&&(b=A.href.slice(e.origin.length)),Q?ve(b,A.href,m):we(b,m)},setHeaders:()=>{},depends:d,parent(){return i&&(c.parent=!0),n()},untrack(l){i=!1;try{return l()}finally{i=!0}}};s=await f.universal.load.call(null,_)??null}return{node:f,loader:t,server:o,universal:(h=f.universal)!=null&&h.load?{type:"data",data:s,uses:c}:null,data:s??(o==null?void 0:o.data)??null,slash:((g=f.universal)==null?void 0:g.trailingSlash)??(o==null?void 0:o.slash)}}function Tt(t,n,e,a,r,o){if(vt)return!0;if(!r)return!1;if(r.parent&&t||r.route&&n||r.url&&e)return!0;for(const s of r.search_params)if(a.has(s))return!0;for(const s of r.params)if(o[s]!==y.params[s])return!0;for(const s of r.dependencies)if(Bt.some(i=>i(new URL(s))))return!0;return!1}function kt(t,n){return(t==null?void 0:t.type)==="data"?t:(t==null?void 0:t.type)==="skip"?n??null:null}function Be(t,n){if(!t)return new Set(n.searchParams.keys());const e=new Set([...t.searchParams.keys(),...n.searchParams.keys()]);for(const a of e){const r=t.searchParams.getAll(a),o=n.searchParams.getAll(a);r.every(s=>o.includes(s))&&o.every(s=>r.includes(s))&&e.delete(a)}return e}function Ot({error:t,url:n,route:e,params:a}){return{type:"loaded",state:{error:t,url:n,route:e,params:a,branch:[]},props:{page:I,constructors:[]}}}async function Qt({id:t,invalidating:n,url:e,params:a,route:r,preload:o}){if((R==null?void 0:R.id)===t)return G.delete(R.token),R.promise;const{errors:s,layouts:i,leaf:c}=r,f=[...i,c];s.forEach(p=>p==null?void 0:p().catch(()=>{})),f.forEach(p=>p==null?void 0:p[1]().catch(()=>{}));let u=null;const h=y.url?t!==y.url.pathname+y.url.search:!1,g=y.route?r.id!==y.route.id:!1,d=Be(y.url,e);let _=!1;const l=f.map((p,v)=>{var N;const E=y.branch[v],k=!!(p!=null&&p[0])&&((E==null?void 0:E.loader)!==p[1]||Tt(_,g,h,d,(N=E.server)==null?void 0:N.uses,a));return k&&(_=!0),k});if(l.some(Boolean)){try{u=await ae(e,l)}catch(p){const v=await $(p,{url:e,params:a,route:{id:t}});return G.has(o)?Ot({error:v,url:e,params:a,route:r}):ot({status:z(p),error:v,url:e,route:r})}if(u.type==="redirect")return u}const m=u==null?void 0:u.nodes;let b=!1;const A=f.map(async(p,v)=>{var it;if(!p)return;const E=y.branch[v],k=m==null?void 0:m[v];if((!k||k.type==="skip")&&p[1]===(E==null?void 0:E.loader)&&!Tt(b,g,h,d,(it=E.universal)==null?void 0:it.uses,a))return E;if(b=!0,(k==null?void 0:k.type)==="error")throw k;return Et({loader:p[1],url:e,params:a,route:r,parent:async()=>{var Rt;const At={};for(let st=0;st<v;st+=1)Object.assign(At,(Rt=await A[st])==null?void 0:Rt.data);return At},server_data_node:kt(k===void 0&&p[0]?{type:"skip"}:k??null,p[0]?E==null?void 0:E.server:void 0)})});for(const p of A)p.catch(()=>{});const w=[];for(let p=0;p<f.length;p+=1)if(f[p])try{w.push(await A[p])}catch(v){if(v instanceof Ht)return{type:"redirect",location:v.location};if(G.has(o))return Ot({error:await $(v,{params:a,url:e,route:{id:r.id}}),url:e,params:a,route:r});let E=z(v),k;if(m!=null&&m.includes(v))E=v.status??E,k=v.error;else if(v instanceof at)k=v.body;else{if(await U.updated.check())return await C(e);k=await $(v,{params:a,url:e,route:{id:r.id}})}const N=await Ke(p,w,s);return N?await et({url:e,params:a,branch:w.slice(0,N.idx).concat(N.node),status:E,error:k,route:r}):await ne(e,{id:r.id},k,E)}else w.push(void 0);return await et({url:e,params:a,branch:w,status:200,error:null,route:r,form:n?void 0:null})}async function Ke(t,n,e){for(;t--;)if(e[t]){let a=t;for(;!n[a];)a-=1;try{return{idx:a+1,node:{node:await e[t](),loader:e[t],data:{},server:null,universal:null}}}catch{continue}}}async function ot({status:t,error:n,url:e,route:a}){const r={};let o=null;if(V.server_loads[0]===0)try{const f=await ae(e,[!0]);if(f.type!=="data"||f.nodes[0]&&f.nodes[0].type!=="data")throw 0;o=f.nodes[0]??null}catch{(e.origin!==K||e.pathname!==location.pathname||wt)&&await C(e)}const i=await Et({loader:dt,url:e,params:r,route:a,parent:()=>Promise.resolve({}),server_data_node:kt(o)}),c={node:await X(),loader:X,universal:null,server:null,data:null};return await et({url:e,params:r,branch:[i,c],status:t,error:n,route:null})}function St(t,n){if(!t||nt(t,P))return;let e;try{e=V.hooks.reroute({url:new URL(t)})??t.pathname}catch{return}const a=te(e);for(const r of rt){const o=r.exec(a);if(o)return{id:t.pathname+t.search,invalidating:n,route:r,params:ue(o),url:t}}}function te(t){return fe(t.slice(P.length)||"/")}function ee({url:t,type:n,intent:e,delta:a}){let r=!1;const o=oe(y,e,t,n);a!==void 0&&(o.navigation.delta=a);const s={...o.navigation,cancel:()=>{r=!0,o.reject(new Error("navigation cancelled"))}};return B||Kt.forEach(i=>i(s)),r?null:o}async function Y({type:t,url:n,popped:e,keepfocus:a,noscroll:r,replace_state:o,state:s={},redirect_count:i=0,nav_token:c={},accept:f=xt,block:u=xt}){const h=St(n,!1),g=ee({url:n,type:t,delta:e==null?void 0:e.delta,intent:h});if(!g){u();return}const d=S,_=L;f(),B=!0,Q&&U.navigating.set(g.navigation),tt=c;let l=h&&await Qt(h);if(!l){if(nt(n,P))return await C(n);l=await ne(n,{id:null},await $(new _t(404,"Not Found",`Not found: ${n.pathname}`),{url:n,params:{},route:{id:null}}),404)}if(n=(h==null?void 0:h.url)||n,tt!==c)return g.reject(new Error("navigation aborted")),!1;if(l.type==="redirect")if(i>=20)l=await ot({status:500,error:await $(new Error("Redirect loop"),{url:n,params:{},route:{id:null}}),url:n,route:{id:null}});else return Xt(new URL(l.location,n).href,{},i+1,c),!1;else l.props.page.status>=400&&await U.updated.check()&&await C(n);if(qe(),yt(d),Wt(_),l.props.page.url.pathname!==n.pathname&&(n.pathname=l.props.page.url.pathname),s=e?e.state:s,!e){const w=o?0:1,p={[D]:S+=w,[q]:L+=w,[Vt]:s};(o?history.replaceState:history.pushState).call(history,p,"",n),o||Ge(S,L)}if(R=null,l.props.page.state=s,Q){y=l.state,l.props.page&&(l.props.page.url=n);const w=(await Promise.all(Yt.map(p=>p(g.navigation)))).filter(p=>typeof p=="function");if(w.length>0){let p=function(){j=j.filter(v=>!w.includes(v))};w.push(p),j.push(...w)}bt.$set(l.props),Jt=!0}else Zt(l,ht,!1);const{activeElement:m}=document;await ie();const b=e?e.scroll:r?mt():null;if(Ut){const w=n.hash&&document.getElementById(decodeURIComponent(n.hash.slice(1)));b?scrollTo(b.x,b.y):w?w.scrollIntoView():scrollTo(0,0)}const A=document.activeElement!==m&&document.activeElement!==document.body;!a&&!A&&Ze(),Ut=!0,l.props.page&&(I=l.props.page),B=!1,t==="popstate"&&zt(L),g.fulfil(void 0),j.forEach(w=>w(g.navigation)),U.navigating.set(null)}async function ne(t,n,e,a){return t.origin===K&&t.pathname===location.pathname&&!wt?await ot({status:a,error:e,url:t,route:n}):await C(t)}function Ye(){let t;x.addEventListener("mousemove",o=>{const s=o.target;clearTimeout(t),t=setTimeout(()=>{a(s,2)},20)});function n(o){a(o.composedPath()[0],1)}x.addEventListener("mousedown",n),x.addEventListener("touchstart",n,{passive:!0});const e=new IntersectionObserver(o=>{for(const s of o)s.isIntersecting&&(ft(s.target.href),e.unobserve(s.target))},{threshold:0});function a(o,s){const i=Gt(o,x);if(!i)return;const{url:c,external:f,download:u}=ut(i,P);if(f||u)return;const h=W(i);if(!h.reload)if(s<=h.preload_data){const g=St(c,!1);g&&He(g)}else s<=h.preload_code&&ft(c.pathname)}function r(){e.disconnect();for(const o of x.querySelectorAll("a")){const{url:s,external:i,download:c}=ut(o,P);if(i||c)continue;const f=W(o);f.reload||(f.preload_code===J.viewport&&e.observe(o),f.preload_code===J.eager&&ft(s.pathname))}}j.push(r),r()}function $(t,n){if(t instanceof at)return t.body;const e=z(t),a=Me(t);return V.hooks.handleError({error:t,event:n,status:e,message:a})??{message:a}}function Je(t,n){se(()=>(t.push(n),()=>{const e=t.indexOf(n);t.splice(e,1)}))}function an(t){Je(Yt,t)}function We(t,n={}){return t=Ft(t),t.origin!==K?Promise.reject(new Error("goto: invalid URL")):Xt(t,n,0)}function ze(){var n;history.scrollRestoration="manual",addEventListener("beforeunload",e=>{let a=!1;if(Nt(),!B){const r=oe(y,void 0,null,"leave"),o={...r.navigation,cancel:()=>{a=!0,r.reject(new Error("navigation cancelled"))}};Kt.forEach(s=>s(o))}a?(e.preventDefault(),e.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Nt()}),(n=navigator.connection)!=null&&n.saveData||Ye(),x.addEventListener("click",e=>{var g;if(e.button||e.which!==1||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.defaultPrevented)return;const a=Gt(e.composedPath()[0],x);if(!a)return;const{url:r,external:o,target:s,download:i}=ut(a,P);if(!r)return;if(s==="_parent"||s==="_top"){if(window.parent!==window)return}else if(s&&s!=="_self")return;const c=W(a);if(!(a instanceof SVGAElement)&&r.protocol!==location.protocol&&!(r.protocol==="https:"||r.protocol==="http:")||i)return;if(o||c.reload){ee({url:r,type:"link"})?B=!0:e.preventDefault();return}const[u,h]=r.href.split("#");if(h!==void 0&&u===ct(location)){const[,d]=y.url.href.split("#");if(d===h){e.preventDefault(),h===""||h==="top"&&a.ownerDocument.getElementById("top")===null?window.scrollTo({top:0}):(g=a.ownerDocument.getElementById(h))==null||g.scrollIntoView();return}if(F=!0,yt(S),t(r),!c.replace_state)return;F=!1}e.preventDefault(),Y({type:"link",url:r,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??r.href===location.href})}),x.addEventListener("submit",e=>{if(e.defaultPrevented)return;const a=HTMLFormElement.prototype.cloneNode.call(e.target),r=e.submitter;if(((r==null?void 0:r.formMethod)||a.method)!=="get")return;const s=new URL((r==null?void 0:r.hasAttribute("formaction"))&&(r==null?void 0:r.formAction)||a.action);if(nt(s,P))return;const i=e.target,c=W(i);if(c.reload)return;e.preventDefault(),e.stopPropagation();const f=new FormData(i),u=r==null?void 0:r.getAttribute("name");u&&f.append(u,(r==null?void 0:r.getAttribute("value"))??""),s.search=new URLSearchParams(f).toString(),Y({type:"form",url:s,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??s.href===location.href})}),addEventListener("popstate",async e=>{var a;if((a=e.state)!=null&&a[D]){const r=e.state[D];if(tt={},r===S)return;const o=T[r],s=e.state[Vt]??{},i=new URL(e.state[Le]??location.href),c=e.state[q],f=ct(location)===ct(y.url);if(c===L&&(Jt||f)){t(i),T[S]=mt(),o&&scrollTo(o.x,o.y),s!==I.state&&(I={...I,state:s},bt.$set({page:I})),S=r;return}const h=r-S;await Y({type:"popstate",url:i,popped:{state:s,scroll:o,delta:h},accept:()=>{S=r,L=c},block:()=>{history.go(-h)},nav_token:tt})}else if(!F){const r=new URL(location.href);t(r)}}),addEventListener("hashchange",()=>{F&&(F=!1,history.replaceState({...history.state,[D]:++S,[q]:L},"",location.href))});for(const e of document.querySelectorAll("link"))e.rel==="icon"&&(e.href=e.href);addEventListener("pageshow",e=>{e.persisted&&U.navigating.set(null)});function t(e){y.url=e,U.page.set({...I,url:e}),U.page.notify()}}async function Xe(t,{status:n=200,error:e,node_ids:a,params:r,route:o,data:s,form:i}){wt=!0;const c=new URL(location.href);({params:r={},route:o={id:null}}=St(c,!1)||{});let f;try{const u=a.map(async(d,_)=>{const l=s[_];return l!=null&&l.uses&&(l.uses=re(l.uses)),Et({loader:V.nodes[d],url:c,params:r,route:o,parent:async()=>{const m={};for(let b=0;b<_;b+=1)Object.assign(m,(await u[b]).data);return m},server_data_node:kt(l)})}),h=await Promise.all(u),g=rt.find(({id:d})=>d===o.id);if(g){const d=g.layouts;for(let _=0;_<d.length;_++)d[_]||h.splice(_,0,void 0)}f=await et({url:c,params:r,branch:h,status:n,error:e,form:i,route:g??null})}catch(u){if(u instanceof Ht){await C(new URL(u.location,location.href));return}f=await ot({status:z(u),error:await $(u,{url:c,params:r,route:o}),url:c,route:o})}f.props.page&&(f.props.page.state={}),Zt(f,t,!0)}async function ae(t,n){var r;const e=new URL(t);e.pathname=me(t.pathname),t.pathname.endsWith("/")&&e.searchParams.append(Fe,"1"),e.searchParams.append(Ve,n.map(o=>o?"1":"0").join(""));const a=await jt(e.href);if(!a.ok){let o;throw(r=a.headers.get("content-type"))!=null&&r.includes("application/json")?o=await a.json():a.status===404?o="Not Found":a.status===500&&(o="Internal Error"),new at(a.status,o)}return new Promise(async o=>{var h;const s=new Map,i=a.body.getReader(),c=new TextDecoder;function f(g){return De(g,{Promise:d=>new Promise((_,l)=>{s.set(d,{fulfil:_,reject:l})})})}let u="";for(;;){const{done:g,value:d}=await i.read();if(g&&!u)break;for(u+=!d&&u?`
`:c.decode(d,{stream:!0});;){const _=u.indexOf(`
`);if(_===-1)break;const l=JSON.parse(u.slice(0,_));if(u=u.slice(_+1),l.type==="redirect")return o(l);if(l.type==="data")(h=l.nodes)==null||h.forEach(m=>{(m==null?void 0:m.type)==="data"&&(m.uses=re(m.uses),m.data=f(m.data))}),o(l);else if(l.type==="chunk"){const{id:m,data:b,error:A}=l,w=s.get(m);s.delete(m),A?w.reject(f(A)):w.fulfil(f(b))}}}})}function re(t){return{dependencies:new Set((t==null?void 0:t.dependencies)??[]),params:new Set((t==null?void 0:t.params)??[]),parent:!!(t!=null&&t.parent),route:!!(t!=null&&t.route),url:!!(t!=null&&t.url),search_params:new Set((t==null?void 0:t.search_params)??[])}}function Ze(){const t=document.querySelector("[autofocus]");if(t)t.focus();else{const n=document.body,e=n.getAttribute("tabindex");n.tabIndex=-1,n.focus({preventScroll:!0,focusVisible:!1}),e!==null?n.setAttribute("tabindex",e):n.removeAttribute("tabindex");const a=getSelection();if(a&&a.type!=="None"){const r=[];for(let o=0;o<a.rangeCount;o+=1)r.push(a.getRangeAt(o));setTimeout(()=>{if(a.rangeCount===r.length){for(let o=0;o<a.rangeCount;o+=1){const s=r[o],i=a.getRangeAt(o);if(s.commonAncestorContainer!==i.commonAncestorContainer||s.startContainer!==i.startContainer||s.endContainer!==i.endContainer||s.startOffset!==i.startOffset||s.endOffset!==i.endOffset)return}a.removeAllRanges()}})}}}function oe(t,n,e,a){var c,f;let r,o;const s=new Promise((u,h)=>{r=u,o=h});return s.catch(()=>{}),{navigation:{from:{params:t.params,route:{id:((c=t.route)==null?void 0:c.id)??null},url:t.url},to:e&&{params:(n==null?void 0:n.params)??null,route:{id:((f=n==null?void 0:n.route)==null?void 0:f.id)??null},url:e},willUnload:!n,type:a,complete:s},fulfil:r,reject:o}}export{nn as a,We as g,an as o,U as s};
