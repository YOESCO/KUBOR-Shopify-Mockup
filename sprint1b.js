document.addEventListener('DOMContentLoaded',()=>{
  const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];

  const megaToggle=$('[data-mega-toggle]'); const mega=$('[data-mega]');
  if(megaToggle&&mega){megaToggle.setAttribute('aria-haspopup','true');megaToggle.setAttribute('aria-expanded',String(!mega.hidden));megaToggle.addEventListener('click',()=>requestAnimationFrame(()=>megaToggle.setAttribute('aria-expanded',String(!mega.hidden))))}

  const megaGrid=mega?.querySelector('.k-mega-grid');
  if(megaGrid&&!megaGrid.querySelector('.k-mega-extra')){
    const extra=document.createElement('div');extra.className='k-mega-extra';extra.innerHTML='<h4>Más categorías</h4><a href="all-collections.html#kids">Kids</a><a href="all-collections.html#bmx">BMX / Stunt</a><a href="all-collections.html#cargo">Cargo / Utility</a><a href="discipline-urban.html">Fitness / Commuter</a><a href="accessories.html">Accesorios</a><a href="components.html">Componentes</a>';
    megaGrid.insertBefore(extra,megaGrid.children[2]||null);
    const brands=document.createElement('div');brands.style.cssText='grid-column:1/-1;border-top:1px solid #e8edef;padding-top:14px;display:flex;justify-content:space-between;gap:16px;align-items:center';brands.innerHTML='<div><span class="k-eyebrow" style="color:#008da1">Marcas</span><span style="margin-left:14px;font-size:11px;font-weight:900"><a href="brand-kubor.html" style="display:inline;padding:0 12px 0 0">KUBOR</a><a href="brand-terrafit.html" style="display:inline;padding:0 12px">TERRAFIT</a><a href="brand-hypergogo.html" style="display:inline;padding:0 12px">HYPERGOGO</a></span></div><a href="all-collections.html" style="font-size:9px;font-weight:900;text-transform:uppercase;color:#008da1">Todas las colecciones →</a>';
    megaGrid.appendChild(brands);
  }

  const current=(location.pathname.split('/').pop()||'home-v2.html').toLowerCase();
  $$('.k-nav a').forEach(a=>{const href=(a.getAttribute('href')||'').toLowerCase();if(href&&href===current){a.setAttribute('aria-current','page');a.style.color='#39c1dc'}});

  $$('.k-drawer').forEach(d=>{d.setAttribute('role','dialog');d.setAttribute('aria-modal','true');d.setAttribute('aria-hidden',String(!d.classList.contains('is-open')))});
  const drawerObserver=new MutationObserver(()=>$$('.k-drawer').forEach(d=>d.setAttribute('aria-hidden',String(!d.classList.contains('is-open')))));
  const layer=$('.k-layer');if(layer)drawerObserver.observe(layer,{attributes:true,subtree:true,attributeFilter:['class']});

  const W='kubor-core-v4-wishlist';
  const getW=()=>{try{return JSON.parse(localStorage.getItem(W))||[]}catch{return[]}};
  const setW=v=>localStorage.setItem(W,JSON.stringify(v));
  const refreshWishlist=()=>{const w=getW();$$('[data-toggle-wishlist]').forEach(b=>{const title=b.closest('[data-product-card]')?.querySelector('[data-product-title]')?.textContent.trim()||b.dataset.title||'';const on=w.includes(title);b.classList.toggle('is-active',on);b.setAttribute('aria-pressed',String(on));b.setAttribute('aria-label',on?'Quitar de favoritos':'Agregar a favoritos')})};
  document.addEventListener('click',e=>{const b=e.target.closest('[data-toggle-wishlist]');if(!b)return;e.preventDefault();const title=b.closest('[data-product-card]')?.querySelector('[data-product-title]')?.textContent.trim()||b.dataset.title||'';let w=getW();w=w.includes(title)?w.filter(x=>x!==title):[...w,title];setW(w);refreshWishlist()});refreshWishlist();

  // Normalize compact '+' card buttons so the core cart listener recognizes them.
  $$('[data-product-card] .k-card-actions button').filter(b=>b.textContent.trim()==='+').forEach(b=>{b.setAttribute('aria-label','Agregar al carrito');b.innerHTML='<span aria-hidden="true">+</span><span class="sr-only">Agregar al carrito</span>'});

  const tabs=$$('.pdp-tab');
  const activateTab=b=>{tabs.forEach(x=>{const active=x===b;x.classList.toggle('is-active',active);x.setAttribute('aria-selected',String(active));x.tabIndex=active?0:-1});$$('[data-tab-panel]').forEach(p=>p.hidden=p.dataset.tabPanel!==b.dataset.tab);const p=$(`[data-tab-panel="${b.dataset.tab}"]`);if(p){p.hidden=false;p.setAttribute('tabindex','0')}};
  tabs.forEach((b,i)=>{b.setAttribute('role','tab');b.setAttribute('aria-selected',String(b.classList.contains('is-active')));b.tabIndex=b.classList.contains('is-active')?0:-1;b.addEventListener('keydown',e=>{if(!['ArrowRight','ArrowLeft','Home','End'].includes(e.key))return;e.preventDefault();let n=e.key==='Home'?0:e.key==='End'?tabs.length-1:e.key==='ArrowRight'?(i+1)%tabs.length:(i-1+tabs.length)%tabs.length;tabs[n].focus();activateTab(tabs[n])});b.addEventListener('click',()=>activateTab(b))});
  if($('.pdp-tabs'))$('.pdp-tabs').setAttribute('role','tablist');

  $$('.pdp-swatch').forEach(b=>{b.setAttribute('aria-label',`Color ${b.dataset.color||''}`);b.setAttribute('aria-pressed',String(b.classList.contains('is-active')));b.addEventListener('click',()=>{const img=b.dataset.image;if(img&&$('[data-pdp-main-image]'))$('[data-pdp-main-image]').src=img;requestAnimationFrame(()=>$$('.pdp-swatch').forEach(x=>x.setAttribute('aria-pressed',String(x.classList.contains('is-active')))))})});
  $$('.pdp-size').forEach(b=>{b.setAttribute('aria-pressed',String(b.classList.contains('is-active')));b.addEventListener('click',()=>requestAnimationFrame(()=>$$('.pdp-size').forEach(x=>x.setAttribute('aria-pressed',String(x.classList.contains('is-active'))))))});

  $$('[data-filter-chip]').forEach(chip=>chip.addEventListener('click',()=>{chip.classList.toggle('is-active');chip.setAttribute('aria-pressed',String(chip.classList.contains('is-active')))}));
  $$('[data-filter-reset]').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.plp-filters input').forEach(x=>x.checked=false);$$('[data-filter-chip]').forEach(x=>{x.classList.remove('is-active');x.setAttribute('aria-pressed','false')})}));
  $$('[data-sort]').forEach(sel=>sel.addEventListener('change',()=>{const label=$('[data-sort-label]');if(label)label.textContent=sel.options[sel.selectedIndex].textContent}));

  document.addEventListener('click',e=>{const b=e.target.closest('[data-quick-view]');if(!b)return;e.preventDefault();const card=b.closest('[data-product-card]');const title=card?.querySelector('[data-product-title]')?.textContent.trim()||'KUBOR';const meta=card?.querySelector('.k-product-meta')?.textContent.trim()||'';const price=card?.querySelector('[data-price]')?.textContent.trim()||'';const img=card?.querySelector('img')?.src||'';const drawer=$('[data-drawer="quick"]');const target=$('[data-quick-content]');if(drawer&&target){target.innerHTML=`<img src="${img}" alt="${title}" style="width:100%;aspect-ratio:1.2/1;object-fit:cover;background:#f5f7f8"><div style="padding-top:18px"><div class="k-eyebrow" style="color:#008da1">Vista rápida</div><h2 class="k-display" style="font-size:38px;line-height:.95;margin:6px 0;text-transform:uppercase">${title}</h2><p style="font-size:11px;color:#687681">${meta}</p><b style="font-size:18px;display:block;margin-top:14px">${price}</b><div style="display:grid;grid-template-columns:repeat(4,1fr);gap:6px;margin-top:14px"><button class="pdp-size">S</button><button class="pdp-size is-active">M</button><button class="pdp-size">L</button><button class="pdp-size">XL</button></div><a href="product-v2.html" class="k-btn k-btn-dark" style="width:100%;margin-top:16px">Ver producto completo</a></div>`;drawer.closest('.k-layer')?.classList.add('is-open');drawer.classList.add('is-open');document.documentElement.style.overflow='hidden'}});

  $$('[data-product-card] button').forEach(b=>b.addEventListener('click',e=>e.stopPropagation()));
  $$('[data-open-sort]').forEach(b=>b.addEventListener('click',()=>{const s=$('[data-sort]');s?.focus()}));

  // Mobile PDP CTA delegates to the main add-to-cart action.
  const mobileBuy=$('.pdp-mobile-buy .k-btn');
  if(mobileBuy){mobileBuy.addEventListener('click',()=>{$('.pdp-buy-actions .k-btn-primary')?.click()})}

  $$('[data-review-star]').forEach((b,i,arr)=>b.addEventListener('click',()=>{arr.forEach((x,j)=>x.classList.toggle('is-active',j<=i));const out=$('[data-review-score]');if(out)out.textContent=String(i+1)}));
  $$('details').forEach(d=>{d.setAttribute('aria-expanded',String(d.open));d.addEventListener('toggle',()=>d.setAttribute('aria-expanded',String(d.open)))});

  const badge=document.createElement('div');badge.textContent='Sprint 1B · 2026.10.14';badge.style.cssText='position:fixed;right:10px;bottom:10px;z-index:175;background:rgba(6,16,25,.88);color:#fff;padding:6px 8px;font:800 8px Inter,sans-serif;letter-spacing:.08em;text-transform:uppercase;pointer-events:none';document.body.appendChild(badge);
});
