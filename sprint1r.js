(()=>{
  const init=()=>setTimeout(()=>{
    const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
    const page=(location.pathname.split('/').pop()||'home-v2.html').toLowerCase();
    const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
    const icon=n=>`<i data-lucide="${n}"></i>`;

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

    /* Defensive PDP width guard: identify and contain accidental wide descendants without changing fixed drawers. */
    if(page==='product-v2.html'){
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
