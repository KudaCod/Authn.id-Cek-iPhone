const C="cek-macbook-v1";
const CORE=["./","./index.html"];
self.addEventListener("install",e=>{
  // cache:"reload" = ambil langsung dari server, jangan dari cache browser
  e.waitUntil(caches.open(C).then(c=>c.addAll(CORE.map(u=>new Request(u,{cache:"reload"})))));
  self.skipWaiting();
});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{
  const req=e.request;
  if(req.method!=="GET")return;
  const url=new URL(req.url);
  if(url.origin!==location.origin)return;
  const page=req.mode==="navigate"||url.pathname.endsWith("/")||url.pathname.endsWith(".html");
  if(page){
    // Halaman: internet dulu (selalu versi terbaru), salinan offline kalau tidak ada sinyal / lebih dari 4 detik
    const fallback=()=>caches.match(req,{ignoreSearch:true}).then(h=>h||caches.match("./index.html"));
    e.respondWith(new Promise(resolve=>{
      let done=false;const finish=r=>{if(!done&&r){done=true;resolve(r)}};
      const t=setTimeout(()=>fallback().then(finish),4000);
      fetch(req.url,{cache:"no-cache",credentials:"same-origin"}).then(r=>{
        clearTimeout(t);
        if(r&&r.ok){const cp=r.clone();caches.open(C).then(c=>c.put(req.url.split("?")[0],cp))}
        finish(r);
      }).catch(()=>{clearTimeout(t);fallback().then(h=>{finish(h||Response.error())})});
    }));
    return;
  }
  // Foto dan file lain: dari salinan offline, ambil dari internet kalau belum ada (URL foto memakai ?v=versi)
  e.respondWith(caches.match(req).then(hit=>hit||fetch(req,{cache:"no-cache"}).then(r=>{
    if(r&&r.ok){const cp=r.clone();caches.open(C).then(c=>c.put(req,cp))}
    return r;
  })));
});
