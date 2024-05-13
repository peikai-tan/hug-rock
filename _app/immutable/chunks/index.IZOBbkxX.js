var B=Object.defineProperty;var D=(e,t,n)=>t in e?B(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var y=(e,t,n)=>(D(e,typeof t!="symbol"?t+"":t,n),n);import{r as p,n as g,j as b,k as H,i as S,l as I,m as N,p as L,q as W,u as A,v as M,w as P,x as q}from"./scheduler.aa7Px5UK.js";let $=!1;function O(){$=!0}function R(){$=!1}function F(e,t,n,i){for(;e<t;){const r=e+(t-e>>1);n(r)<=i?e=r+1:t=r}return e}function U(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const s=[];for(let l=0;l<t.length;l++){const f=t[l];f.claim_order!==void 0&&s.push(f)}t=s}const n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let r=0;for(let s=0;s<t.length;s++){const l=t[s].claim_order,f=(r>0&&t[n[r]].claim_order<=l?r+1:F(1,r,_=>t[n[_]].claim_order,l))-1;i[s]=n[f]+1;const u=f+1;n[u]=s,r=Math.max(u,r)}const o=[],a=[];let c=t.length-1;for(let s=n[r]+1;s!=0;s=i[s-1]){for(o.push(t[s-1]);c>=s;c--)a.push(t[c]);c--}for(;c>=0;c--)a.push(t[c]);o.reverse(),a.sort((s,l)=>s.claim_order-l.claim_order);for(let s=0,l=0;s<a.length;s++){for(;l<o.length&&a[s].claim_order>=o[l].claim_order;)l++;const f=l<o.length?o[l]:null;e.insertBefore(a[s],f)}}function V(e,t){e.appendChild(t)}function k(e,t){if($){for(U(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function se(e,t,n){$&&!n?k(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function C(e){e.parentNode&&e.parentNode.removeChild(e)}function ae(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function T(e){return document.createElement(e)}function G(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function w(e){return document.createTextNode(e)}function le(){return w(" ")}function oe(){return w("")}function E(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function ce(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ue(e){return e.dataset.svelteH}function J(e){return Array.from(e.childNodes)}function K(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function j(e,t,n,i,r=!1){K(e);const o=(()=>{for(let a=e.claim_info.last_index;a<e.length;a++){const c=e[a];if(t(c)){const s=n(c);return s===void 0?e.splice(a,1):e[a]=s,r||(e.claim_info.last_index=a),c}}for(let a=e.claim_info.last_index-1;a>=0;a--){const c=e[a];if(t(c)){const s=n(c);return s===void 0?e.splice(a,1):e[a]=s,r?s===void 0&&e.claim_info.last_index--:e.claim_info.last_index=a,c}}return i()})();return o.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,o}function z(e,t,n,i){return j(e,r=>r.nodeName===t,r=>{const o=[];for(let a=0;a<r.attributes.length;a++){const c=r.attributes[a];n[c.name]||o.push(c.name)}o.forEach(a=>r.removeAttribute(a))},()=>i(t))}function fe(e,t,n){return z(e,t,n,T)}function de(e,t,n){return z(e,t,n,G)}function Q(e,t){return j(e,n=>n.nodeType===3,n=>{const i=""+t;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>w(t),!0)}function _e(e){return Q(e," ")}function me(e,t){t=""+t,e.data!==t&&(e.data=t)}function he(e,t,n,i){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,"")}let m;function X(){if(m===void 0){m=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{m=!0}}return m}function pe(e,t){getComputedStyle(e).position==="static"&&(e.style.position="relative");const i=T("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const r=X();let o;return r?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",o=E(window,"message",a=>{a.source===i.contentWindow&&t()})):(i.src="about:blank",i.onload=()=>{o=E(i.contentWindow,"resize",t),t()}),V(e,i),()=>{(r||o&&i.contentWindow)&&o(),C(i)}}function $e(e,t,n){e.classList.toggle(t,!!n)}function ye(e,t){const n=[];let i=0;for(const r of t.childNodes)if(r.nodeType===8){const o=r.textContent.trim();o===`HEAD_${e}_END`?(i-=1,n.push(r)):o===`HEAD_${e}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function ge(e,t){return new e(t)}const h=new Set;let d;function we(){d={r:0,c:[],p:d}}function xe(){d.r||p(d.c),d=d.p}function Y(e,t){e&&e.i&&(h.delete(e),e.i(t))}function ve(e,t,n,i){if(e&&e.o){if(h.has(e))return;h.add(e),d.c.push(()=>{h.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function be(e){e&&e.c()}function Ne(e,t){e&&e.l(t)}function Z(e,t,n){const{fragment:i,after_update:r}=e.$$;i&&i.m(t,n),N(()=>{const o=e.$$.on_mount.map(M).filter(S);e.$$.on_destroy?e.$$.on_destroy.push(...o):p(o),e.$$.on_mount=[]}),r.forEach(N)}function ee(e,t){const n=e.$$;n.fragment!==null&&(L(n.after_update),p(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function te(e,t){e.$$.dirty[0]===-1&&(P.push(e),q(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Ae(e,t,n,i,r,o,a=null,c=[-1]){const s=W;A(e);const l=e.$$={fragment:null,ctx:[],props:o,update:g,not_equal:r,bound:b(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(s?s.$$.context:[])),callbacks:b(),dirty:c,skip_bound:!1,root:t.target||s.$$.root};a&&a(l.root);let f=!1;if(l.ctx=n?n(e,t.props||{},(u,_,...x)=>{const v=x.length?x[0]:_;return l.ctx&&r(l.ctx[u],l.ctx[u]=v)&&(!l.skip_bound&&l.bound[u]&&l.bound[u](v),f&&te(e,u)),_}):[],l.update(),f=!0,p(l.before_update),l.fragment=i?i(l.ctx):!1,t.target){if(t.hydrate){O();const u=J(t.target);l.fragment&&l.fragment.l(u),u.forEach(C)}else l.fragment&&l.fragment.c();t.intro&&Y(e.$$.fragment),Z(e,t.target,t.anchor),R(),H()}A(s)}class Ee{constructor(){y(this,"$$");y(this,"$$set")}$destroy(){ee(this,1),this.$destroy=g}$on(t,n){if(!S(n))return g;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(t){this.$$set&&!I(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ne="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ne);export{oe as A,ge as B,pe as C,G as D,de as E,$e as F,Ee as S,J as a,Q as b,fe as c,C as d,T as e,_e as f,se as g,k as h,Ae as i,me as j,Y as k,ye as l,ue as m,ce as n,E as o,ae as p,he as q,ve as r,le as s,w as t,xe as u,we as v,be as w,Ne as x,Z as y,ee as z};
