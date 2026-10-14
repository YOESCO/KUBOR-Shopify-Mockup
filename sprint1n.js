(()=>{
  const init=()=>{
    const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
    const page=(location.pathname.split('/').pop()||'home-v2.html').toLowerCase();
    const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
    const icon=(name)=>`<i data-lucide="${name}"></i>`;

    /* Generic carousel UX: arrows + native touch + hidden scrollbar. */
    const enhanceRail=(track,{autoplay=false,interval=4800,label='Carrusel'}={})=>{
      if(!track||track.dataset.carouselReady==='1')return;
      track.dataset.carouselReady='1';
      const parent=track.parentElement;if(!parent)return;
      parent.classList.add('k-carousel-shell');
      const controls=document.createElement('div');controls.className='k-carousel-controls';controls.setAttribute('aria-label',label);
      controls.innerHTML=`<button class="k-carousel-arrow" type="button" data-dir="prev" aria-label="Anterior">${icon('arrow-left')}</button><button class="k-carousel-arrow" type="button" data-dir="next" aria-label="Siguiente">${icon('arrow-right')}</button>`;
      parent.insertBefore(controls,track);
      const prev=$('[data-dir="prev"]',controls),next=$('[data-dir="next"]',controls);
      const amount=()=>Math.max(track.clientWidth*.78,260);
      const go=dir=>track.scrollBy({left:(dir==='next'?1:-1)*amount(),behavior:reduce?'auto':'smooth'});
      prev.addEventListener('click',()=>go('prev'));next.addEventListener('click',()=>go('next'));
      const sync=()=>{
        const overflow=track.scrollWidth>track.clientWidth+8;
        controls.hidden=!overflow;
        if(!overflow)return;
        prev.disabled=track.scrollLeft<4;
        next.disabled=track.scrollLeft+track.clientWidth>=track.scrollWidth-5;
      };
      track.addEventListener('scroll',()=>requestAnimationFrame(sync),{passive:true});
      new ResizeObserver(sync).observe(track);setTimeout(sync,120);
      if(autoplay&&!reduce){
        let timer=null,paused=false;
        const tick=()=>{if(paused||document.hidden||controls.hidden)return;const atEnd=track.scrollLeft+track.clientWidth>=track.scrollWidth-10;if(atEnd)track.scrollTo({left:0,behavior:'smooth'});else go('next')};
        timer=setInterval(tick,interval);
        ['pointerdown','mouseenter','focusin'].forEach(ev=>parent.addEventListener(ev,()=>paused=true));
        ['pointerup','mouseleave','focusout'].forEach(ev=>parent.addEventListener(ev,()=>paused=false));
      }
    };

    /* MOBILE MENU — visual shortcuts above accordion navigation. */
    const menu=$('[data-drawer="menu"] .k-drawer-body');
    if(menu&&!$('.k-mobile-visual-grid',menu)){
      const visual=document.createElement('div');
      visual.innerHTML=`<div class="k-mobile-visual-grid">
        <a class="k-mobile-visual-card" href="discipline-mtb.html"><img src="assets/media/kubor-hero.jpg" alt=""><span>Mountain Bike</span></a>
        <a class="k-mobile-visual-card" href="discipline-road.html"><img src="https://images.unsplash.com/photo-1530133286484-f4e6e6f9a0a1?auto=format&fit=crop&w=700&q=82" alt=""><span>Ruta</span></a>
        <a class="k-mobile-visual-card" href="discipline-gravel.html"><img src="https://images.unsplash.com/photo-1511994298241-608e28f14fde?auto=format&fit=crop&w=700&q=82" alt=""><span>Gravel</span></a>
        <a class="k-mobile-visual-card" href="discipline-electric.html"><img src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=700&q=82" alt=""><span>Eléctricas</span></a>
      </div><div class="k-mobile-menu-actions"><a class="k-mobile-menu-action" href="all-collections.html">${icon('bike')} Todas</a><a class="k-mobile-menu-action" href="bike-finder.html">${icon('sparkles')} Bike Finder</a></div>`;
      menu.prepend(...visual.childNodes);
    }

    if(page==='home-v2.html'||page==='index.html'||page===''){
      const categoryCards=$$('.home-cat-card');
      const productGrid=$('.home-product-grid');
      const productSection=productGrid?.closest('.home-section');
      const sectionHead=$('.home-section-head',productSection||document);

      /* Category cards act as filters/shortcuts inside Home. */
      const catMap=['mtb','road','gravel','urban','electric'];
      categoryCards.forEach((card,i)=>{
        card.dataset.homeCategory=catMap[i]||'all';card.setAttribute('role','button');card.setAttribute('aria-pressed','false');
        card.addEventListener('click',e=>{e.preventDefault();setFilter(card.dataset.homeCategory,'all');productSection?.scrollIntoView({behavior:reduce?'auto':'smooth',block:'start'})});
      });

      if(productGrid&&productSection&&!$('.home-catalogue-grid',productSection)){
        const oldHead=sectionHead;
        if(oldHead){
          oldHead.className='home-catalogue-head';
          const title=$('h2',oldHead);if(title)title.textContent='Todas las bicicletas';
          const eyebrow=$('.k-eyebrow',oldHead);if(eyebrow)eyebrow.textContent='Catálogo KUBOR';
          const link=$('a',oldHead);if(link){link.href='#';link.textContent='Ver todas';link.dataset.showAll='1'}
          const copy=oldHead.querySelector('div:first-child');if(copy&&!$('p',copy)){const p=document.createElement('p');p.textContent='Explora el portafolio en la misma página. Usa categoría y subcategoría como filtros antes de abrir una colección.';copy.appendChild(p)}
          const count=document.createElement('span');count.className='home-catalogue-count';count.dataset.homeCount='1';count.textContent='';oldHead.appendChild(count);
        }

        const filters=document.createElement('div');filters.innerHTML=`<div class="home-filter-row" aria-label="Filtrar bicicletas por categoría">
          <button class="home-filter-chip is-active" type="button" data-home-filter="all">Todas</button>
          <button class="home-filter-chip" type="button" data-home-filter="mtb">MTB</button>
          <button class="home-filter-chip" type="button" data-home-filter="road">Ruta</button>
          <button class="home-filter-chip" type="button" data-home-filter="gravel">Gravel</button>
          <button class="home-filter-chip" type="button" data-home-filter="urban">Urbanas</button>
          <button class="home-filter-chip" type="button" data-home-filter="electric">Eléctricas</button>
        </div><div class="home-subfilter-row" data-home-subfilters></div>`;
        productGrid.before(...filters.childNodes);

        const products=[
          {name:'KUBOR Mallory R29 21V',cat:'mtb',sub:'fs',meta:'MTB FS Sport · R29 · Shimano 21v',price:'$7,699 MXN',image:'assets/products/mallory-orange.jpg',real:true,href:'product-v2.html'},
          {name:'KUBOR Tornado',cat:'mtb',sub:'xc',meta:'XC Performance · R29',price:'Precio por validar',image:'https://images.unsplash.com/photo-1502744688674-c619d1586c9e?auto=format&fit=crop&w=900&q=84'},
          {name:'KUBOR Calypso 4',cat:'mtb',sub:'sport',meta:'MTB Sport / XC recreativa',price:'Precio por validar',image:'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=900&q=84'},
          {name:'KUBOR Alpine 5',cat:'mtb',sub:'sport',meta:'MTB Sport · R29 · Shimano 21v',price:'Precio por validar',image:'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&fit=crop&w=900&q=84'},
          {name:'KUBOR Storm',cat:'mtb',sub:'trail',meta:'Trail / All Mountain light',price:'Precio por validar',image:'https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?auto=format&fit=crop&w=900&q=84'},
          {name:'KUBOR Sierra 7',cat:'mtb',sub:'sport',meta:'MTB Sport · R29',price:'Precio por validar',image:'https://images.unsplash.com/photo-1529422643029-d4585747aaf2?auto=format&fit=crop&w=900&q=84'},
          {name:'KUBOR Pegaso',cat:'road',sub:'road',meta:'Ruta · desarrollo visual',price:'Precio por validar',image:'https://images.unsplash.com/photo-1530133286484-f4e6e6f9a0a1?auto=format&fit=crop&w=900&q=84'},
          {name:'KUBOR Gravel Concept',cat:'gravel',sub:'gravel',meta:'Gravel · desarrollo visual',price:'Precio por validar',image:'https://images.unsplash.com/photo-1511994298241-608e28f14fde?auto=format&fit=crop&w=900&q=84'},
          {name:'KUBOR Medusa',cat:'urban',sub:'fitness',meta:'Fitness / urbana · concepto de portafolio',price:'Precio por validar',image:'https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=900&q=84'},
          {name:'KUBOR Volt Rider',cat:'electric',sub:'e-bike',meta:'Movilidad eléctrica · ficha por validar',price:'Precio por validar',image:'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=900&q=84'}
        ];
        productGrid.className='home-catalogue-grid';
        productGrid.innerHTML=products.map(p=>`<article class="k-product-card ${p.real?'is-real':'is-concept'}" data-product-card data-home-cat="${p.cat}" data-home-sub="${p.sub}"><a href="${p.href||'collection-v2.html'}"><div class="k-product-media"><span class="k-card-badge">${p.real?'Producto real':'Concepto visual'}</span><img src="${p.image}" loading="lazy" alt="${p.name}"></div></a><div class="k-product-body"><span class="k-accent-tag ${p.real?'is-lime':''}">${p.real?'Disponible en mock':'En revisión'}</span><h3 class="k-product-title" data-product-title style="margin-top:9px">${p.name}</h3><div class="k-product-meta">${p.meta}</div><div class="k-product-bottom"><div class="k-product-price" data-price>${p.price}</div><div class="k-card-actions"><button class="k-card-icon" data-toggle-wishlist aria-label="Favoritos">${icon('heart')}</button><button class="k-card-icon" data-quick-view aria-label="Vista rápida">${icon('eye')}</button></div></div></div></article>`).join('');

        const subDefs={
          all:[['all','Todo el portafolio']],
          mtb:[['all','Todo MTB'],['sport','Sport'],['xc','XC'],['fs','Doble suspensión'],['trail','Trail light']],
          road:[['all','Toda Ruta'],['road','Ruta']],
          gravel:[['all','Todo Gravel'],['gravel','Gravel']],
          urban:[['all','Todas Urbanas'],['fitness','Fitness']],
          electric:[['all','Todas Eléctricas'],['e-bike','E-bike']]
        };
        let currentCat='all',currentSub='all';
        const drawSubs=()=>{const row=$('[data-home-subfilters]',productSection);const defs=subDefs[currentCat]||[['all','Todos']];row.innerHTML=defs.map(([key,label])=>`<button type="button" class="home-subfilter-chip ${key===currentSub?'is-active':''}" data-home-subfilter="${key}">${label}</button>`).join('')};
        const apply=()=>{let visible=0;$$('[data-home-cat]',productGrid).forEach(card=>{const show=(currentCat==='all'||card.dataset.homeCat===currentCat)&&(currentSub==='all'||card.dataset.homeSub===currentSub);card.hidden=!show;if(show)visible++});const c=$('[data-home-count]',productSection);if(c)c.textContent=`${visible} ${visible===1?'modelo':'modelos'} en vista`;const empty=$('.home-catalogue-empty',productSection);if(empty)empty.remove();if(!visible){const e=document.createElement('div');e.className='home-catalogue-empty';e.textContent='Esta familia está contemplada en la arquitectura, pero todavía no tiene producto comercial validado para mostrar aquí.';productGrid.after(e)}};
        window.setFilter=(cat='all',sub='all')=>{currentCat=cat;currentSub=sub;$$('[data-home-filter]',productSection).forEach(b=>b.classList.toggle('is-active',b.dataset.homeFilter===cat));categoryCards.forEach(c=>{const on=c.dataset.homeCategory===cat;c.classList.toggle('is-active',on);c.setAttribute('aria-pressed',String(on))});drawSubs();apply();enhanceRail(productGrid,{autoplay:false,label:'Bicicletas'})};
        productSection.addEventListener('click',e=>{const f=e.target.closest('[data-home-filter]');if(f){window.setFilter(f.dataset.homeFilter,'all');return}const s=e.target.closest('[data-home-subfilter]');if(s){currentSub=s.dataset.homeSubfilter;drawSubs();apply();return}const all=e.target.closest('[data-show-all]');if(all){e.preventDefault();window.setFilter('all','all');productSection.scrollIntoView({behavior:reduce?'auto':'smooth',block:'start'})}});
        window.setFilter('all','all');
      }

      /* Brand capability marquee */
      const catWrap=$('.home-cat-wrap');
      if(catWrap&&!$('.k-tech-marquee')){
        const items=[['triangle','Diseño de cuadro','Estructura'],['ruler','Geometría','Fit & manejo'],['activity','Suspensión','Control'],['settings-2','Transmisión','Selección por nivel'],['disc-3','Frenos','Control y seguridad'],['circle-dot','Ruedas','Rodada adecuada'],['shield-check','Garantía','Soporte postventa'],['headphones','Soporte','Antes y después de comprar']];
        const row=items.concat(items).map(([ic,a,b])=>`<div class="k-tech-marquee-item">${icon(ic)}<div><b>${a}</b><span> · ${b}</span></div></div>`).join('');
        const m=document.createElement('section');m.className='k-tech-marquee';m.setAttribute('aria-label','Tecnología y soporte KUBOR');m.innerHTML=`<div class="k-tech-marquee-track">${row}</div>`;catWrap.after(m);
      }

      enhanceRail($('.home-cat-grid'),{autoplay:true,interval:5200,label:'Categorías'});
      enhanceRail($('.home-catalogue-grid'),{autoplay:false,label:'Bicicletas'});
      enhanceRail($('.home-v4 .k-trust-grid'),{autoplay:true,interval:6000,label:'Beneficios'});
    }

    if(page==='product-v2.html'){
      /* Strict containment for the historic PDP markup + richer controlled rails. */
      $$('.pdp-first-grid>*').forEach(el=>{el.style.minWidth='0';el.style.maxWidth='100%'});
      enhanceRail($('.pdp-thumb-row'),{label:'Galería del producto'});
      enhanceRail($('.pdp-trust-mini'),{label:'Beneficios de compra'});
      enhanceRail($('.pdp-spec-strip'),{autoplay:true,interval:5600,label:'Especificaciones rápidas'});
      enhanceRail($('.pdp-related-rail'),{label:'Productos relacionados'});
    }

    window.lucide?.createIcons({attrs:{'stroke-width':1.7}});
  };
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
