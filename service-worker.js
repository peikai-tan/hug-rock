const s=location.pathname.split("/").slice(0,-1).join("/"),m=[s+"/_app/immutable/entry/app.Cb9nIiQj.js",s+"/_app/immutable/nodes/0.BP0RIJ8t.js",s+"/_app/immutable/assets/0.DThnPUFv.css",s+"/_app/immutable/nodes/1.Bp0UHLC8.js",s+"/_app/immutable/nodes/2.DkoMKktX.js",s+"/_app/immutable/assets/2.tLnAbnT-.css",s+"/_app/immutable/assets/hugrock.o7cdR05u.png",s+"/_app/immutable/nodes/3.Dmc5upf_.js",s+"/_app/immutable/nodes/4.DhT76pj0.js",s+"/_app/immutable/nodes/5.BKEncTij.js",s+"/_app/immutable/nodes/6.V_tCF7Qc.js",s+"/_app/immutable/nodes/7.BkUqcZwj.js",s+"/_app/immutable/assets/shirt.OX2xOGFr.png",s+"/_app/immutable/nodes/8.6bTGtZM_.js",s+"/_app/immutable/assets/8.B6wHnLy3.css",s+"/_app/immutable/assets/ProgressBar.Cirlo5Z8.css",s+"/_app/immutable/chunks/ProgressBar.svelte_svelte_type_style_lang.qLKMncw-.js",s+"/_app/immutable/chunks/cartStore.mQIbjmor.js",s+"/_app/immutable/chunks/each.NCSBAA2m.js",s+"/_app/immutable/chunks/entry.DYZlJL3h.js",s+"/_app/immutable/chunks/index.CSM-hGIt.js",s+"/_app/immutable/chunks/index.IZOBbkxX.js",s+"/_app/immutable/chunks/index.R8ovVqwX.js",s+"/_app/immutable/chunks/index.xJp9Kd2E.js",s+"/_app/immutable/chunks/item.DxDnqti5.js",s+"/_app/immutable/chunks/paths.-8J-qaNF.js",s+"/_app/immutable/chunks/scheduler.aa7Px5UK.js",s+"/_app/immutable/chunks/stores.CV3G9pTP.js",s+"/_app/immutable/chunks/transform.CrWt3WPY.js",s+"/_app/immutable/entry/start.hQZ2In-r.js"],u=[s+"/favicon.png",s+"/favicon.svg",s+"/manifest.json",s+"/robots.txt"],l="1715610714989",c=`cache-${l}`,i=[...m,...u];self.addEventListener("install",a=>{async function t(){await(await caches.open(c)).addAll(i)}a.waitUntil(t())});self.addEventListener("activate",a=>{async function t(){for(const e of await caches.keys())e!==c&&await caches.delete(e)}a.waitUntil(t())});self.addEventListener("fetch",a=>{if(a.request.method!=="GET")return;async function t(){const e=new URL(a.request.url),n=await caches.open(c);if(i.includes(e.pathname))return n.match(e.pathname);try{const p=await fetch(a.request);return p.status===200&&n.put(a.request,p.clone()),p}catch{return n.match(a.request)}}a.respondWith(t())});
