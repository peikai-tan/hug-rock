import{d as it}from"../chunks/index.R8ovVqwX.js";import{s as lt,b as Y,r as at,d as X,e as J,f as O,g as ct,u as ut,h as ft,j as dt,n as V,k as Q,l as ht,i as mt,o as _t}from"../chunks/scheduler.X48DrzqU.js";import{S as st,i as rt,e as D,c as H,a as P,d as S,o as W,g as N,p as C,q as nt,r as I,u as ot,k as x,v as Z,t as U,w,b as F,n as g,h as v,j as G,s as p,m as K,f as A,x as bt,y as gt,z as vt,A as kt,B as yt}from"../chunks/index.Co0Kq0sO.js";import{e as $}from"../chunks/each.CAtYRMzg.js";import{g as Et}from"../chunks/ProgressBar.svelte_svelte_type_style_lang.DI7dsMdT.js";import{c as Mt}from"../chunks/transform.CrWt3WPY.js";function St(s){let t;const e=s[17].default,l=ct(e,s,s[16],null);return{c(){l&&l.c()},l(a){l&&l.l(a)},m(a,n){l&&l.m(a,n),t=!0},p(a,n){l&&l.p&&(!t||n&65536)&&ut(l,e,a,a[16],t?dt(e,a[16],n,null):ft(a[16]),null)},i(a){t||(x(l,a),t=!0)},o(a){I(l,a),t=!1},d(a){l&&l.d(a)}}}function zt(s){let t,e,l=String(s[1]).substring(0,2).toUpperCase()+"",a,n;return{c(){t=Z("svg"),e=Z("text"),a=U(l),this.h()},l(i){t=w(i,"svg",{class:!0,viewBox:!0});var u=P(t);e=w(u,"text",{x:!0,y:!0,"dominant-baseline":!0,"text-anchor":!0,"font-weight":!0,"font-size":!0,class:!0});var h=P(e);a=F(h,l),h.forEach(S),u.forEach(S),this.h()},h(){g(e,"x","50%"),g(e,"y","50%"),g(e,"dominant-baseline","central"),g(e,"text-anchor","middle"),g(e,"font-weight","bold"),g(e,"font-size",s[3]),g(e,"class",n="avatar-text "+s[2]),g(t,"class","avatar-initials w-full h-full"),g(t,"viewBox","0 0 512 512")},m(i,u){N(i,t,u),v(t,e),v(e,a)},p(i,u){u&2&&l!==(l=String(i[1]).substring(0,2).toUpperCase()+"")&&G(a,l),u&8&&g(e,"font-size",i[3]),u&4&&n!==(n="avatar-text "+i[2])&&g(e,"class",n)},i:V,o:V,d(i){i&&S(t)}}}function Dt(s){let t,e,l,a,n,i,u;return{c(){t=D("img"),this.h()},l(h){t=H(h,"IMG",{class:!0,style:!0,src:!0,alt:!0}),this.h()},h(){g(t,"class","avatar-image "+Pt),g(t,"style",e=s[9].style??""),Q(t.src,l=s[0])||g(t,"src",l),g(t,"alt",a=s[9].alt||"")},m(h,f){N(h,t,f),i||(u=[ht(n=s[5].call(null,t,s[6])),C(t,"error",s[22])],i=!0)},p(h,f){f&512&&e!==(e=h[9].style??"")&&g(t,"style",e),f&1&&!Q(t.src,l=h[0])&&g(t,"src",l),f&512&&a!==(a=h[9].alt||"")&&g(t,"alt",a),n&&mt(n.update)&&f&64&&n.update.call(null,h[6])},i:V,o:V,d(h){h&&S(t),i=!1,at(u)}}}function Ht(s){let t,e,l,a,n,i,u;const h=[Dt,zt,St],f=[];function z(o,k){return o[0]||o[4]?0:o[1]?1:2}e=z(s),l=f[e]=h[e](s);let E=[{class:a="avatar "+s[7]},{"data-testid":"avatar"},s[8]()],M={};for(let o=0;o<E.length;o+=1)M=Y(M,E[o]);return{c(){t=D("figure"),l.c(),this.h()},l(o){t=H(o,"FIGURE",{class:!0,"data-testid":!0});var k=P(t);l.l(k),k.forEach(S),this.h()},h(){W(t,M)},m(o,k){N(o,t,k),f[e].m(t,null),n=!0,i||(u=[C(t,"click",s[18]),C(t,"keydown",s[19]),C(t,"keyup",s[20]),C(t,"keypress",s[21])],i=!0)},p(o,[k]){let d=e;e=z(o),e===d?f[e].p(o,k):(nt(),I(f[d],1,1,()=>{f[d]=null}),ot(),l=f[e],l?l.p(o,k):(l=f[e]=h[e](o),l.c()),x(l,1),l.m(t,null)),W(t,M=Et(E,[(!n||k&128&&a!==(a="avatar "+o[7]))&&{class:a},{"data-testid":"avatar"},o[8]()]))},i(o){n||(x(l),n=!0)},o(o){I(l),n=!1},d(o){o&&S(t),f[e].d(),i=!1,at(u)}}}let Tt="flex aspect-square text-surface-50 font-semibold justify-center items-center overflow-hidden isolate",Pt="w-full object-cover";function Bt(s,t,e){let l;const a=["initials","fill","fontSize","src","fallback","action","actionParams","background","width","border","rounded","shadow","cursor"];let n=X(t,a),{$$slots:i={},$$scope:u}=t,{initials:h=""}=t,{fill:f="fill-token"}=t,{fontSize:z=150}=t,{src:E=""}=t,{fallback:M=""}=t,{action:o=()=>{}}=t,{actionParams:k=""}=t,{background:d="bg-surface-400-500-token"}=t,{width:y="w-16"}=t,{border:B=""}=t,{rounded:T="rounded-full"}=t,{shadow:c=""}=t,{cursor:j=""}=t;function m(){return delete n.class,n}function _(r){O.call(this,s,r)}function b(r){O.call(this,s,r)}function R(r){O.call(this,s,r)}function q(r){O.call(this,s,r)}const L=()=>e(0,E=M);return s.$$set=r=>{e(9,t=Y(Y({},t),J(r))),e(23,n=X(t,a)),"initials"in r&&e(1,h=r.initials),"fill"in r&&e(2,f=r.fill),"fontSize"in r&&e(3,z=r.fontSize),"src"in r&&e(0,E=r.src),"fallback"in r&&e(4,M=r.fallback),"action"in r&&e(5,o=r.action),"actionParams"in r&&e(6,k=r.actionParams),"background"in r&&e(10,d=r.background),"width"in r&&e(11,y=r.width),"border"in r&&e(12,B=r.border),"rounded"in r&&e(13,T=r.rounded),"shadow"in r&&e(14,c=r.shadow),"cursor"in r&&e(15,j=r.cursor),"$$scope"in r&&e(16,u=r.$$scope)},s.$$.update=()=>{e(7,l=`${Tt} ${d} ${y} ${B} ${T} ${c} ${j} ${t.class??""}`)},t=J(t),[E,h,f,z,M,o,k,l,m,t,d,y,B,T,c,j,u,i,_,b,R,q,L]}class Rt extends st{constructor(t){super(),rt(this,t,Bt,Ht,lt,{initials:1,fill:2,fontSize:3,src:0,fallback:4,action:5,actionParams:6,background:10,width:11,border:12,rounded:13,shadow:14,cursor:15})}}const jt=it,pt=!0,Vt=Object.freeze(Object.defineProperty({__proto__:null,csr:jt,prerender:pt},Symbol.toStringTag,{value:"Module"}));function tt(s,t,e){const l=s.slice();return l[1]=t[e],l}function et(s){let t,e,l,a,n,i=s[1]["Instagram account"]+"",u,h,f,z,E=s[1]["Max number of pull-ups"]+"",M,o,k;return l=new Rt({props:{src:"https://images.unsplash.com/photo-1617296538902-887900d9b592?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzExMDB8&ixlib=rb-4.0.3&w=128&h=128&auto=format&fit=crop",width:"w-8",rounded:"rounded-full"}}),{c(){t=D("tr"),e=D("td"),gt(l.$$.fragment),a=p(),n=D("td"),u=U(i),h=p(),f=D("td"),z=D("span"),M=U(E),o=p(),this.h()},l(d){t=H(d,"TR",{});var y=P(t);e=H(y,"TD",{class:!0});var B=P(e);vt(l.$$.fragment,B),B.forEach(S),a=A(y),n=H(y,"TD",{});var T=P(n);u=F(T,i),T.forEach(S),h=A(y),f=H(y,"TD",{});var c=P(f);z=H(c,"SPAN",{class:!0});var j=P(z);M=F(j,E),j.forEach(S),c.forEach(S),o=A(y),y.forEach(S),this.h()},h(){g(e,"class","table-cell-fit"),g(z,"class","badge variant-soft-primary")},m(d,y){N(d,t,y),v(t,e),kt(l,e,null),v(t,a),v(t,n),v(n,u),v(t,h),v(t,f),v(f,z),v(z,M),v(t,o),k=!0},p(d,y){(!k||y&1)&&i!==(i=d[1]["Instagram account"]+"")&&G(u,i),(!k||y&1)&&E!==(E=d[1]["Max number of pull-ups"]+"")&&G(M,E)},i(d){k||(x(l.$$.fragment,d),k=!0)},o(d){I(l.$$.fragment,d),k=!1},d(d){d&&S(t),yt(l)}}}function At(s){let t,e,l,a,n="<tr><th></th> <th>Name</th> <th>Number of pull ups</th></tr>",i,u,h,f,z,E,M,o,k,d,y='<a class="logo-item" href="https://forms.gle/N4zS3L2wpu8uWLaV6"><span>Submit entry!</span></a>',B,T=$(s[0]),c=[];for(let m=0;m<T.length;m+=1)c[m]=et(tt(s,T,m));const j=m=>I(c[m],1,1,()=>{c[m]=null});return{c(){t=D("div"),e=D("div"),l=D("table"),a=D("thead"),a.innerHTML=n,i=p(),u=D("tbody");for(let m=0;m<c.length;m+=1)c[m].c();h=p(),f=D("br"),z=p(),E=D("hr"),M=p(),o=D("br"),k=p(),d=D("div"),d.innerHTML=y,this.h()},l(m){t=H(m,"DIV",{class:!0});var _=P(t);e=H(_,"DIV",{class:!0});var b=P(e);l=H(b,"TABLE",{class:!0});var R=P(l);a=H(R,"THEAD",{"data-svelte-h":!0}),K(a)!=="svelte-185hnem"&&(a.innerHTML=n),i=A(R),u=H(R,"TBODY",{});var q=P(u);for(let L=0;L<c.length;L+=1)c[L].l(q);q.forEach(S),R.forEach(S),b.forEach(S),h=A(_),f=H(_,"BR",{}),z=A(_),E=H(_,"HR",{class:!0}),M=A(_),o=H(_,"BR",{}),k=A(_),d=H(_,"DIV",{class:!0,"data-svelte-h":!0}),K(d)!=="svelte-7qr9hk"&&(d.innerHTML=y),_.forEach(S),this.h()},h(){g(l,"class","table table-compact table-hover"),g(e,"class","table-container"),g(E,"class","!border-dotted"),g(d,"class","logo-cloud grid-cols-1 gap-1 [&>.logo-item]:variant-filled"),g(t,"class","placeholder")},m(m,_){N(m,t,_),v(t,e),v(e,l),v(l,a),v(l,i),v(l,u);for(let b=0;b<c.length;b+=1)c[b]&&c[b].m(u,null);v(t,h),v(t,f),v(t,z),v(t,E),v(t,M),v(t,o),v(t,k),v(t,d),B=!0},p(m,[_]){if(_&1){T=$(m[0]);let b;for(b=0;b<T.length;b+=1){const R=tt(m,T,b);c[b]?(c[b].p(R,_),x(c[b],1)):(c[b]=et(R),c[b].c(),x(c[b],1),c[b].m(u,null))}for(nt(),b=T.length;b<c.length;b+=1)j(b);ot()}},i(m){if(!B){for(let _=0;_<T.length;_+=1)x(c[_]);B=!0}},o(m){c=c.filter(Boolean);for(let _=0;_<c.length;_+=1)I(c[_]);B=!1},d(m){m&&S(t),bt(c,m)}}}function xt(s,t,e){let l=Array(5).fill(void 0).map(()=>({Name:"","Max number of pull-ups":"0"}));return _t(()=>{Mt("https://docs.google.com/spreadsheets/d/e/2PACX-1vRYrLd7bxExV0685ljqJCyERN52E1ETHHqX_UEQjDImH9pjRvo9Cin_xLdmYkh9YlyARYZ9PRM5A_zc/pub?gid=431978341&single=true&output=csv").then(a=>{e(0,l=a.sort((n,i)=>i["Max number of pull-ups"]-n["Max number of pull-ups"])),e(0,l=l.slice(0,5))})}),[l]}class Yt extends st{constructor(t){super(),rt(this,t,xt,At,lt,{})}}export{Yt as component,Vt as universal};
