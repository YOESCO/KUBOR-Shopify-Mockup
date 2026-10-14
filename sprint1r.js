(()=>{
  const init=()=>setTimeout(()=>{
    const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
    const page=(location.pathname.split('/').pop()||'home-v2.html').toLowerCase();
    const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
    const icon=n=>`<i data-lucide="${n}"></i>`;

    /* MOBILE MENU — clarify shopping vs guidance. */
    const menu=$('[data-drawer="menu"] .k-drawer-body');
    if(menu&&!$('.k-mobile-section-label',menu)){
      const visual=$('.k-mobile-visual-grid',menu);
      if(visual){
        const buy=document.createElement('div');buy.className='k-mobile-section-label';buy.textContent='Comprar por disciplina';visual.parentNode.insertBefore(buy,visual);
      }
      const nav=$('.k-mobile-nav',menu);
      if(nav){
        const guide=document.createElement('div');guide.className='k-mobile-section-label';guide.textContent='Explorar y elegir';nav.parentNode.insertBefore(guide,nav);
        const quick=document.createElement('div');quick.className='k-mobile-quick-row';quick.innerHTML=`<a href="compare.html">${icon('columns-3')}<span>Comparar</span></a><a href="size-guide.html">${icon('ruler')}<span>Tallas</span></a><a href="dealers.html">${icon('map-pin')}<span>Distribuidores</span></a>`;nav.parentNode.insertBefore(quick,nav);
      }
    }

    if(page==='home-v2.html'||page==='index.html'||page===''){
      const grid=$('.home-cat-grid');
      if(grid&&!$('.home-cat-head')){
        const shell=grid.closest('.k-carousel-shell')||grid.parentElement;
        shell?.classList.add('home-cat-shell','is-category-carousel');

        const viewport=document.createElement('div');viewport.className='home-cat-viewport';
        grid.parentNode.insertBefore(viewport,grid);viewport.appendChild(grid);

        const head=document.createElement('div');head.className='home-cat-head';
        head.innerHTML=`<div class="home-cat-head-copy"><span class="k-eyebrow">Explora por categoría</span><span class="home-cat-progress" aria-hidden="true"><span></span></span></div><div class="home-cat-nav" aria-label="Navegar categorías"><button type="button" data-cat-prev aria-label="Categorías anteriores">${icon('arrow-left')}</button><button type="button" data-cat-next aria-label="Categorías siguientes">${icon('arrow-right')}</button></div>`;
        viewport.parentNode.insertBefore(head,viewport);

        const prev=$('[data-cat-prev]',head),next=$('[data-cat-next]',head),bar=$('.home-cat-progress span',head);
        const amount=()=>Math.max(grid.clientWidth*.72,240);
        const go=d=>grid.scrollBy({left:(d==='next'?1:-1)*amount(),behavior:reduce?'auto':'smooth'});
        prev.addEventListener('click',()=>go('prev'));next.addEventListener('click',()=>go('next'));

        const sync=()=>{
          const max=Math.max(1,grid.scrollWidth-grid.clientWidth),ratio=Math.min(1,Math.max(0,grid.scrollLeft/max));
          prev.disabled=grid.scrollLeft<4;next.disabled=grid.scrollLeft>=max-4;
          viewport.classList.toggle('is-end',next.disabled);
          if(bar){bar.style.width=`${Math.max(18,26+(ratio*74))}%`}
        };
        grid.addEventListener('scroll',()=>requestAnimationFrame(sync),{passive:true});
        new ResizeObserver(sync).observe(grid);setTimeout(sync,100);
      }

      /* Category selection should update the catalogue heading, not only hide/show cards. */
      const productGrid=$('.home-catalogue-grid'),section=productGrid?.closest('.home-section');
      if(section){
        const title=$('.home-catalogue-head h2',section),eyebrow=$('.home-catalogue-head .k-eyebrow',section);
        const labels={all:['Todas las bicicletas','Catálogo KUBOR'],mtb:['Mountain Bike','MTB KUBOR'],road:['Ruta','Road KUBOR'],gravel:['Gravel','Gravel KUBOR'],urban:['Urbanas','Ciudad & movilidad'],electric:['Eléctricas','Movilidad eléctrica'],kids:['Kids','Bicicletas infantiles'],bmx:['BMX / Stunt','Control & maniobras']};
        const refreshHeading=()=>{
          const active=$('.home-cat-card.is-active');if(!active)return;
          const cat=active.dataset.qCat||'all';const pair=labels[cat]||labels.all;
          if(title)title.textContent=pair[0];if(eyebrow)eyebrow.textContent=pair[1];
        };
        $('.home-cat-grid')?.addEventListener('click',()=>setTimeout(refreshHeading,0));
        $('.home-subfilter-row')?.addEventListener('click',e=>{const b=e.target.closest('[data-q-subfilter]');if(!b||!title)return;const txt=b.textContent.trim();if(txt&&!/^Todo|Todas/i.test(txt))title.textContent=txt});
        setTimeout(refreshHeading,80);
      }
    }

    if(page==='product-v2.html'){
      /* Classify each PDP rail so only the important ones keep explicit arrows on mobile. */
      const classify=(selector,cls)=>$(selector)?.closest('.k-carousel-shell')?.classList.add(cls);
      classify('.pdp-thumb-row','is-gallery-carousel');
      classify('.pdp-tabs','is-tabs-carousel');
      classify('.pdp-trust-mini','is-compact-carousel');
      classify('.pdp-spec-strip','is-spec-carousel');
      classify('.pdp-related-rail','is-product-carousel');

      /* Defensive width guard: contain accidental wide descendants without changing fixed drawers. */
      const constrain=()=>{
        const vw=document.documentElement.clientWidth;
        if(document.documentElement.scrollWidth<=vw+2)return;
        const candidates=$$('.pdp-v4 main *').filter(el=>{
          const cs=getComputedStyle(el);if(cs.position==='fixed'||cs.position==='absolute')return false;
          const r=el.getBoundingClientRect();return r.width>vw+2||r.right>vw+2||r.left<-2;
        });
        candidates.forEach(el=>{
          el.style.maxWidth='100%';el.style.minWidth='0';
          if(['TABLE','PRE','CODE'].includes(el.tagName)||getComputedStyle(el).overflowX==='visible')el.style.overflowX='auto';
        });
      };
      constrain();requestAnimationFrame(constrain);setTimeout(constrain,250);window.addEventListener('resize',constrain,{passive:true});
    }

    window.lucide?.createIcons({attrs:{'stroke-width':1.7}});
  },0);
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
