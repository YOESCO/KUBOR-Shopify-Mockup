(()=>{if(!document.querySelector('link[href^="sprint1h.css"]')){const l=document.createElement('link');l.rel='stylesheet';l.href='sprint1h.css?v=20261014-s1h';document.head.appendChild(l)}if(!document.querySelector('script[src^="sprint1h.js"]')){const s=document.createElement('script');s.src='sprint1h.js?v=20261014-s1h';s.async=false;document.head.appendChild(s)}if(!document.querySelector('script[src^="sprint1i.js"]')){const s=document.createElement('script');s.src='sprint1i.js?v=20261014-s1i';s.async=false;document.head.appendChild(s)}if(!document.querySelector('link[href^="sprint1j.css"]')){const l=document.createElement('link');l.rel='stylesheet';l.href='sprint1j.css?v=20261014-s1j';document.head.appendChild(l)}})();

(()=>{
  const init=()=>{
  const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];

  // Skip link + main target.
  const main=$('main'); if(main&&!main.id) main.id='main-content';
  if(main&&!$('.k-skip-link')){const skip=document.createElement('a');skip.href='#main-content';skip.className='k-skip-link';skip.textContent='Saltar al contenido';document.body.prepend(skip)}

  // Live region for cart/form feedback.
  const live=document.createElement('div');live.className='k-a11y-live';live.setAttribute('aria-live','polite');live.setAttribute('aria-atomic','true');document.body.appendChild(live);
  const announce=msg=>{live.textContent='';requestAnimationFrame(()=>live.textContent=msg)};

  // Normalize commerce actions so the shared cart listener recognizes all core buttons.
  $$('[data-product-card]').forEach(card=>{
    $$('button',card).forEach(b=>{const t=b.textContent.trim().toLowerCase();if(t==='+'||t.includes('agregar al carrito')){b.setAttribute('data-add-cart','');if(!b.getAttribute('aria-label'))b.setAttribute('aria-label','Agregar al carrito')}});
  });
  $$('.pdp-buy-actions .k-btn-primary').forEach(b=>b.setAttribute('data-add-cart',''));

  // Sprint 1B attached stopPropagation directly to card buttons. Replace only delegated
  // commerce controls after all DOMContentLoaded listeners finish so core document handlers work again.
  setTimeout(()=>{
    $$('[data-product-card] [data-add-cart],[data-product-card] [data-toggle-wishlist],[data-product-card] [data-compare],[data-product-card] [data-quick-view]').forEach(old=>{const fresh=old.cloneNode(true);old.replaceWith(fresh)});
  },0);

  // Product-card controls.
  $$('[data-toggle-wishlist]').forEach(b=>{if(!b.getAttribute('aria-label'))b.setAttribute('aria-label','Agregar a favoritos');b.setAttribute('aria-pressed',String(b.classList.contains('is-active')))});
  $$('[data-compare]').forEach(b=>{if(!b.getAttribute('aria-label'))b.setAttribute('aria-label','Agregar a comparación');b.setAttribute('aria-pressed',String(b.classList.contains('is-active')))});
  $$('[data-quick-view]').forEach(b=>{if(!b.getAttribute('aria-label'))b.setAttribute('aria-label','Vista rápida')});
  document.addEventListener('click',e=>{const b=e.target.closest('[data-toggle-wishlist],[data-compare]');if(!b)return;requestAnimationFrame(()=>b.setAttribute('aria-pressed',String(b.classList.contains('is-active'))))});

  // PDP gallery semantics.
  $$('.pdp-thumb').forEach((b,i)=>{const img=$('img',b);b.setAttribute('aria-label',img?.alt||`Vista ${i+1}`);b.setAttribute('aria-pressed',String(b.classList.contains('is-active')));b.addEventListener('click',()=>requestAnimationFrame(()=>$$('.pdp-thumb').forEach(x=>x.setAttribute('aria-pressed',String(x.classList.contains('is-active'))))))});

  // Fullscreen PDP image viewer.
  const zoomTrigger=$('.pdp-main-media button[aria-label*="Ampliar"],.pdp-gallery-main button[aria-label*="Ampliar"]');
  if(zoomTrigger&&$('[data-pdp-main-image]')){
    const dlg=document.createElement('dialog');dlg.className='k-zoom-dialog';dlg.innerHTML='<div class="k-zoom-shell"><button class="k-zoom-close" type="button" aria-label="Cerrar imagen ampliada">×</button><img alt="Vista ampliada del producto"></div>';document.body.appendChild(dlg);
    const img=$('img',dlg),close=$('.k-zoom-close',dlg);
    zoomTrigger.addEventListener('click',()=>{const src=$('[data-pdp-main-image]');img.src=src.src;img.alt=src.alt?`${src.alt} ampliada`:'Imagen de producto ampliada';dlg.showModal();close.focus()});
    close.addEventListener('click',()=>dlg.close());dlg.addEventListener('click',e=>{if(e.target===dlg)dlg.close()});
  }

  // Mobile sort sheet from the existing desktop select.
  const sort=$('[data-sort]');
  if(sort&&$$('[data-open-sort]').length){
    const dlg=document.createElement('dialog');dlg.className='k-sort-dialog';const options=[...sort.options];dlg.innerHTML=`<div class="k-sort-shell"><div class="k-sort-head"><b>Ordenar productos</b><button class="k-sort-close" type="button" aria-label="Cerrar">×</button></div><div class="k-sort-options">${options.map((o,i)=>`<button type="button" data-sort-index="${i}" class="${o.selected?'is-active':''}">${o.textContent}</button>`).join('')}</div></div>`;document.body.appendChild(dlg);
    $$('[data-open-sort]').forEach(b=>b.addEventListener('click',e=>{e.preventDefault();$$('[data-sort-index]',dlg).forEach((x,i)=>x.classList.toggle('is-active',i===sort.selectedIndex));dlg.showModal();$('[data-sort-index]',dlg)?.focus()}));
    $('.k-sort-close',dlg).addEventListener('click',()=>dlg.close());
    $$('[data-sort-index]',dlg).forEach(b=>b.addEventListener('click',()=>{sort.selectedIndex=Number(b.dataset.sortIndex);sort.dispatchEvent(new Event('change',{bubbles:true}));announce(`Ordenado por ${sort.options[sort.selectedIndex].textContent}`);dlg.close()}));
  }

  // Shared drawer ARIA + focus trap.
  const layer=$('.k-layer'); let lastOpener=null,lastDrawer=null;
  document.addEventListener('click',e=>{const opener=e.target.closest('[data-open-menu],[data-open-search],[data-open-cart],[data-open-filters],[data-quick-view]');if(opener)lastOpener=opener},true);
  const syncDrawers=()=>{
    if(!layer)return;const open=$('.k-drawer.is-open',layer);$$('.k-drawer',layer).forEach(d=>{d.setAttribute('role','dialog');d.setAttribute('aria-modal','true');d.setAttribute('aria-hidden',String(d!==open));if(!d.hasAttribute('tabindex'))d.tabIndex=-1});
    if(open&&open!==lastDrawer){lastDrawer=open;requestAnimationFrame(()=>{const f=$('button,a,input,select,textarea,[tabindex]:not([tabindex="-1"])',open);(f||open).focus()})}
    if(!open&&lastDrawer){lastDrawer=null;if(lastOpener&&document.contains(lastOpener))lastOpener.focus()}
  };
  if(layer){new MutationObserver(syncDrawers).observe(layer,{attributes:true,subtree:true,attributeFilter:['class']});syncDrawers()}
  document.addEventListener('keydown',e=>{if(e.key!=='Tab'||!layer)return;const open=$('.k-drawer.is-open',layer);if(!open)return;const items=$$('button:not([disabled]),a[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])',open).filter(x=>x.offsetParent!==null);if(!items.length)return;const first=items[0],last=items.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}});

  // Mega/menu expanded state.
  const megaBtn=$('[data-mega-toggle]'),mega=$('[data-mega]');
  const syncMega=()=>{if(megaBtn&&mega)megaBtn.setAttribute('aria-expanded',String(!mega.hidden))};if(megaBtn&&mega){megaBtn.setAttribute('aria-haspopup','true');megaBtn.addEventListener('click',()=>requestAnimationFrame(syncMega));new MutationObserver(syncMega).observe(mega,{attributes:true,attributeFilter:['hidden']});syncMega()}
  $$('[data-mobile-group]').forEach((b,i)=>{const key=b.dataset.mobileGroup||`group-${i}`,sub=$(`[data-mobile-sub="${key}"]`);if(sub){if(!sub.id)sub.id=`mobile-sub-${i}`;b.setAttribute('aria-controls',sub.id);b.setAttribute('aria-expanded',String(!sub.hidden));b.addEventListener('click',()=>requestAnimationFrame(()=>b.setAttribute('aria-expanded',String(!sub.hidden))))}});

  // Cart count announcements after user changes.
  const count=$('[data-cart-count]');if(count){let old=count.textContent;new MutationObserver(()=>{if(count.textContent!==old){old=count.textContent;announce(`Carrito actualizado: ${old} artículos`)}}).observe(count,{childList:true,subtree:true,characterData:true})}

  // Newsletter mock feedback with semantic submit.
  const newsletter=$('.k-newsletter form');if(newsletter){const btn=$('button',newsletter),email=$('input[type="email"]',newsletter);if(btn)btn.type='submit';newsletter.addEventListener('submit',e=>{e.preventDefault();if(!email?.value||!email.checkValidity()){email?.focus();announce('Ingresa un correo electrónico válido');return}announce('Suscripción registrada en el mockup');btn.textContent='Listo';setTimeout(()=>btn.textContent='Suscribirme',1800)})}

  // Improve details state and summary keyboard discoverability.
  $$('details').forEach(d=>{d.setAttribute('aria-expanded',String(d.open));d.addEventListener('toggle',()=>d.setAttribute('aria-expanded',String(d.open)))});
  };
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();