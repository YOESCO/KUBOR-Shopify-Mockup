document.addEventListener('DOMContentLoaded',()=>{
  const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];

  // Ensure shell/header controls expose accessible state.
  const megaToggle=$('[data-mega-toggle]'); const mega=$('[data-mega]');
  if(megaToggle&&mega){megaToggle.setAttribute('aria-haspopup','true');megaToggle.setAttribute('aria-expanded',String(!mega.hidden));megaToggle.addEventListener('click',()=>requestAnimationFrame(()=>megaToggle.setAttribute('aria-expanded',String(!mega.hidden))))}

  // Wishlist mock persistence.
  const W='kubor-core-v4-wishlist';
  const getW=()=>{try{return JSON.parse(localStorage.getItem(W))||[]}catch{return[]}};
  const setW=v=>localStorage.setItem(W,JSON.stringify(v));
  const refreshWishlist=()=>{const w=getW();$$('[data-toggle-wishlist]').forEach(b=>{const title=b.closest('[data-product-card]')?.querySelector('[data-product-title]')?.textContent.trim()||b.dataset.title||'';const on=w.includes(title);b.classList.toggle('is-active',on);b.setAttribute('aria-pressed',String(on));b.setAttribute('aria-label',on?'Quitar de favoritos':'Agregar a favoritos')})};
  document.addEventListener('click',e=>{const b=e.target.closest('[data-toggle-wishlist]');if(!b)return;e.preventDefault();const title=b.closest('[data-product-card]')?.querySelector('[data-product-title]')?.textContent.trim()||b.dataset.title||'';let w=getW();w=w.includes(title)?w.filter(x=>x!==title):[...w,title];setW(w);refreshWishlist()});refreshWishlist();

  // PDP: aria tabs and keyboard navigation.
  const tabs=$$('.pdp-tab');
  const activateTab=b=>{tabs.forEach(x=>{const active=x===b;x.classList.toggle('is-active',active);x.setAttribute('aria-selected',String(active));x.tabIndex=active?0:-1});$$('[data-tab-panel]').forEach(p=>p.hidden=p.dataset.tabPanel!==b.dataset.tab);const p=$(`[data-tab-panel="${b.dataset.tab}"]`);if(p){p.hidden=false;p.setAttribute('tabindex','0')}};
  tabs.forEach((b,i)=>{b.setAttribute('role','tab');b.setAttribute('aria-selected',String(b.classList.contains('is-active')));b.tabIndex=b.classList.contains('is-active')?0:-1;b.addEventListener('keydown',e=>{if(!['ArrowRight','ArrowLeft','Home','End'].includes(e.key))return;e.preventDefault();let n=e.key==='Home'?0:e.key==='End'?tabs.length-1:e.key==='ArrowRight'?(i+1)%tabs.length:(i-1+tabs.length)%tabs.length;tabs[n].focus();activateTab(tabs[n])});b.addEventListener('click',()=>activateTab(b))});
  if($('.pdp-tabs'))$('.pdp-tabs').setAttribute('role','tablist');

  // PDP color labels + image swap if swatch provides image.
  $$('.pdp-swatch').forEach(b=>{b.setAttribute('aria-label',`Color ${b.dataset.color||''}`);b.addEventListener('click',()=>{const img=b.dataset.image;if(img&&$('[data-pdp-main-image]'))$('[data-pdp-main-image]').src=img})});
  $$('.pdp-size').forEach(b=>{b.setAttribute('aria-pressed',String(b.classList.contains('is-active')));b.addEventListener('click',()=>requestAnimationFrame(()=>$$('.pdp-size').forEach(x=>x.setAttribute('aria-pressed',String(x.classList.contains('is-active'))))))});

  // PLP filter chips are interactive mock controls.
  $$('[data-filter-chip]').forEach(chip=>chip.addEventListener('click',()=>{chip.classList.toggle('is-active');chip.setAttribute('aria-pressed',String(chip.classList.contains('is-active')))}));
  $$('[data-filter-reset]').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.plp-filters input').forEach(x=>x.checked=false);$$('[data-filter-chip]').forEach(x=>{x.classList.remove('is-active');x.setAttribute('aria-pressed','false')})}));

  // Mock sorting feedback without changing product data.
  $$('[data-sort]').forEach(sel=>sel.addEventListener('change',()=>{const label=$('[data-sort-label]');if(label)label.textContent=sel.options[sel.selectedIndex].textContent}));

  // Quick-view fallback for cards if core drawer exists.
  document.addEventListener('click',e=>{const b=e.target.closest('[data-quick-view]');if(!b)return;e.preventDefault();const card=b.closest('[data-product-card]');const title=card?.querySelector('[data-product-title]')?.textContent.trim()||'KUBOR';const meta=card?.querySelector('.k-product-meta')?.textContent.trim()||'';const price=card?.querySelector('[data-price]')?.textContent.trim()||'';const img=card?.querySelector('img')?.src||'';const drawer=$('[data-drawer="quick"]');const target=$('[data-quick-content]');if(drawer&&target){target.innerHTML=`<img src="${img}" alt="${title}" style="width:100%;aspect-ratio:1.2/1;object-fit:cover;background:#f5f7f8"><div style="padding-top:18px"><div class="k-eyebrow" style="color:#008da1">Vista rápida</div><h2 class="k-display" style="font-size:38px;line-height:.95;margin:6px 0;text-transform:uppercase">${title}</h2><p style="font-size:11px;color:#687681">${meta}</p><b style="font-size:18px;display:block;margin-top:14px">${price}</b><a href="product-v2.html" class="k-btn k-btn-dark" style="width:100%;margin-top:16px">Ver producto completo</a></div>`;drawer.closest('.k-layer')?.classList.add('is-open');drawer.classList.add('is-open');document.documentElement.style.overflow='hidden'}});

  // Make product image buttons keyboard-visible and prevent nested links from swallowing actions.
  $$('[data-product-card] button').forEach(b=>b.addEventListener('click',e=>e.stopPropagation()));

  // Mobile toolbar: sort button focuses select; filter button handled by core.
  $$('[data-open-sort]').forEach(b=>b.addEventListener('click',()=>{const s=$('[data-sort]');s?.focus()}));

  // Review stars mock interaction.
  $$('[data-review-star]').forEach((b,i,arr)=>b.addEventListener('click',()=>{arr.forEach((x,j)=>x.classList.toggle('is-active',j<=i));const out=$('[data-review-score]');if(out)out.textContent=String(i+1)}));

  // Accordions: semantic open state.
  $$('details').forEach(d=>d.addEventListener('toggle',()=>d.setAttribute('aria-expanded',String(d.open))));

  // Mark build visually for review.
  const badge=document.createElement('div');badge.textContent='Sprint 1B · 2026.10.14';badge.style.cssText='position:fixed;right:10px;bottom:10px;z-index:175;background:rgba(6,16,25,.88);color:#fff;padding:6px 8px;font:800 8px Inter,sans-serif;letter-spacing:.08em;text-transform:uppercase;pointer-events:none';document.body.appendChild(badge);
});
