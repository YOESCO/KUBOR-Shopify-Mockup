document.addEventListener('DOMContentLoaded',()=>{
  const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
  const mega=$('[data-mega]');
  if(mega){
    mega.innerHTML=`<div class="k-wrap" style="display:grid;grid-template-columns:1.05fr 1.05fr 1.05fr .95fr 1.25fr;gap:24px;padding:28px 0">
      <div><h4>Performance</h4><a href="discipline-mtb.html">Mountain Bike</a><a href="discipline-road.html">Ruta</a><a href="discipline-gravel.html">Gravel</a><a href="discipline-electric.html">Eléctricas</a><a href="compare.html">Comparador</a></div>
      <div><h4>Urban & Utility</h4><a href="discipline-urban.html">Urbanas</a><a href="discipline-fitness.html">Fitness</a><a href="discipline-commuter.html">Commuter</a><a href="discipline-trekking.html">Trekking</a><a href="discipline-cargo.html">Cargo / Utility</a></div>
      <div><h4>Youth & Gear</h4><a href="discipline-kids.html">Kids</a><a href="discipline-bmx.html">BMX / Stunt</a><a href="accessories.html">Accesorios</a><a href="components.html">Componentes</a><a href="outlet.html">Outlet</a></div>
      <div><h4>Elige mejor</h4><a href="size-guide.html">Guía de tallas</a><a href="geometry-guide.html">Geometría</a><a href="technology.html">Tecnología</a><a href="dealers.html">Distribuidores</a><a href="help-center.html">Centro de ayuda</a><a href="all-collections.html">Todas las colecciones</a></div>
      <div style="display:grid;gap:8px"><a class="k-mega-card" href="brand-kubor.html" style="min-height:118px"><span class="k-eyebrow" style="color:#35c4df">Marca</span><b class="k-display" style="font-size:30px">KUBOR</b><span style="font-size:9px;color:rgba(255,255,255,.65)">Performance / diseño / tecnología</span></a><div style="display:grid;grid-template-columns:1fr 1fr;gap:8px"><a href="brand-terrafit.html" style="background:#edf7f5;padding:14px;font-size:10px;font-weight:900;text-transform:uppercase">Terrafit<br><span style="font-size:8px;color:#687681;font-weight:600">Everyday</span></a><a href="brand-hypergogo.html" style="background:linear-gradient(135deg,#34235e,#0d7283);color:white;padding:14px;font-size:10px;font-weight:900;text-transform:uppercase">HYPERGOGO<br><span style="font-size:8px;color:rgba(255,255,255,.7);font-weight:600">Electric fun</span></a></div></div>
    </div>`;
  }

  const mobile=$('.k-mobile-nav');
  if(mobile){
    mobile.innerHTML=`
      <button type="button" data-v5-group="performance">Performance <span>+</span></button><div class="k-mobile-sub" data-v5-sub="performance" hidden><a href="discipline-mtb.html">MTB</a><a href="discipline-road.html">Ruta</a><a href="discipline-gravel.html">Gravel</a><a href="discipline-electric.html">Eléctricas</a></div>
      <button type="button" data-v5-group="urban">Urban & Utility <span>+</span></button><div class="k-mobile-sub" data-v5-sub="urban" hidden><a href="discipline-urban.html">Urbanas</a><a href="discipline-fitness.html">Fitness</a><a href="discipline-commuter.html">Commuter</a><a href="discipline-trekking.html">Trekking</a><a href="discipline-cargo.html">Cargo / Utility</a></div>
      <button type="button" data-v5-group="youth">Youth & Gear <span>+</span></button><div class="k-mobile-sub" data-v5-sub="youth" hidden><a href="discipline-kids.html">Kids</a><a href="discipline-bmx.html">BMX / Stunt</a><a href="accessories.html">Accesorios</a><a href="components.html">Componentes</a><a href="outlet.html">Outlet</a></div>
      <button type="button" data-v5-group="brands">Marcas <span>+</span></button><div class="k-mobile-sub" data-v5-sub="brands" hidden><a href="brand-kubor.html">KUBOR</a><a href="brand-terrafit.html">Terrafit</a><a href="brand-hypergogo.html">HYPERGOGO</a></div>
      <a href="all-collections.html">Todas las colecciones <span>→</span></a><a href="compare.html">Comparar <span>→</span></a><a href="size-guide.html">Guía de tallas <span>→</span></a><a href="help-center.html">Ayuda <span>→</span></a>`;
    $$('[data-v5-group]',mobile).forEach(btn=>btn.addEventListener('click',()=>{const sub=$(`[data-v5-sub="${btn.dataset.v5Group}"]`,mobile);const open=!sub.hidden;$$('[data-v5-sub]',mobile).forEach(x=>x.hidden=true);$$('[data-v5-group] span',mobile).forEach(x=>x.textContent='+');sub.hidden=open;btn.querySelector('span').textContent=open?'+':'−'}));
  }

  // Add brand shortcuts to topbar without crowding mobile.
  const topInner=$('.k-topbar-inner');
  if(topInner&&!$('[data-brand-shortcuts]',topInner)){
    const brands=document.createElement('div'); brands.dataset.brandShortcuts=''; brands.className='desktop-only'; brands.style.cssText='display:flex;gap:12px;align-items:center;font-size:9px;font-weight:900;text-transform:uppercase'; brands.innerHTML='<a href="brand-kubor.html">KUBOR</a><a href="brand-terrafit.html">Terrafit</a><a href="brand-hypergogo.html">HYPERGOGO</a>'; const old=topInner.lastElementChild; if(old)old.replaceWith(brands); else topInner.appendChild(brands);
  }
});