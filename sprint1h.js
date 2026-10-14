(()=>{
  const init=()=>{
    const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
    document.body.classList.add('sprint1h-visual');

    // Ensure commerce CTAs are wired wherever the visual prototype already shows them.
    $$('[data-product-card]').forEach(card=>{
      $$('button',card).forEach(b=>{
        const t=b.textContent.trim().toLowerCase();
        if((t==='+'||t.includes('agregar al carrito'))&&!b.hasAttribute('data-add-cart')) b.setAttribute('data-add-cart','');
      });
    });
    $$('.pdp-buy-actions .k-btn-primary').forEach(b=>b.setAttribute('data-add-cart',''));

    // Performance: keep hero eager, lazy-load secondary imagery.
    const hero=$('.home-hero>img,.plp-hero>img,.pdp-main-media img,[data-pdp-main-image]');
    $$('img').forEach(img=>{if(img!==hero&&!img.hasAttribute('loading'))img.loading='lazy'});
    if(hero){hero.loading='eager';hero.setAttribute('fetchpriority','high')}

    // Reference-like mega menu promo treatment without changing navigation architecture.
    const promo=$('.k-mega-card');
    if(promo&&!promo.querySelector('.s1h-promo-kicker')){
      const kicker=document.createElement('span');kicker.className='s1h-promo-kicker';kicker.textContent='Nueva colección 2026';promo.appendChild(kicker);
    }

    // Make Home category and editorial rails announce themselves as horizontal collections on touch widths.
    const markRail=el=>{if(!el)return;el.setAttribute('role','region');el.setAttribute('aria-roledescription','carrusel');if(!el.getAttribute('aria-label'))el.setAttribute('aria-label','Contenido deslizable')};
    ['.home-cat-grid','.home-product-grid','.home-editorial-grid','.pdp-related-rail'].forEach(s=>markRail($(s)));

    // PDP purchase feedback remains obvious in the mockup.
    document.addEventListener('click',e=>{
      const b=e.target.closest('.pdp-buy-actions .k-btn-primary,[data-product-card] [data-add-cart]');if(!b)return;
      const old=b.textContent;b.classList.add('is-confirmed');b.textContent='Agregado ✓';setTimeout(()=>{b.textContent=old;b.classList.remove('is-confirmed')},900);
    });
  };
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
