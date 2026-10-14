(()=>{
  const init=()=>{
    const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
    document.body.classList.add('sprint1l-core');
    const page=(location.pathname.split('/').pop()||'home-v2.html').toLowerCase();

    // The mobile PDP purchase CTA must use the same delegated cart contract as desktop.
    if(page==='product-v2.html'){
      const mobileAdd=$('.pdp-mobile-buy .k-btn');
      if(mobileAdd){
        mobileAdd.setAttribute('data-add-cart','');
        mobileAdd.setAttribute('aria-label','Agregar KUBOR Mallory R29 21V al carrito');
      }
    }

    // Remove old visual build badges from storefront review surfaces.
    // Keep the Pages helper because it is intentionally used to navigate the mockup.
    $$('body div,body span').forEach(el=>{
      if(el.closest('.k-site-map')) return;
      const txt=(el.textContent||'').trim();
      if(/^SPRINT\s*1G\s*[·•-]\s*2026\.10\.14$/i.test(txt)) el.remove();
    });

    // Keep horizontal rails keyboard/touch friendly and announce their purpose.
    const rails=[
      ['.home-cat-grid','Categorías KUBOR'],
      ['.home-product-grid','Productos destacados'],
      ['.pdp-thumb-row','Galería del producto'],
      ['.pdp-spec-strip','Especificaciones rápidas'],
      ['.pdp-related-rail','Productos relacionados']
    ];
    rails.forEach(([sel,label])=>{
      const el=$(sel);if(!el)return;
      el.setAttribute('role','region');
      el.setAttribute('aria-label',label);
    });
  };
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
