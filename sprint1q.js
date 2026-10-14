(()=>{
  const init=()=>setTimeout(()=>{
    const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
    const page=(location.pathname.split('/').pop()||'home-v2.html').toLowerCase();

    /* Classify carousel shells so arrow size follows the content scale. */
    const classify=(track,cls)=>track?.closest('.k-carousel-shell')?.classList.add(cls);
    classify($('.home-cat-grid'),'is-category-carousel');
    classify($('.home-catalogue-grid'),'is-product-carousel');
    classify($('.pdp-spec-strip'),'is-spec-carousel');
    classify($('.pdp-trust-mini'),'is-compact-carousel');

    if(!(page==='home-v2.html'||page==='index.html'||page==='')) return;

    const categoryGrid=$('.home-cat-grid');
    const productGrid=$('.home-catalogue-grid');
    const productSection=productGrid?.closest('.home-section');
    const subRow=$('.home-subfilter-row',productSection||document);
    if(!categoryGrid||!productGrid||!productSection)return;

    /* Remove the duplicated compact category filter row introduced in Sprint 1N. */
    $('.home-filter-row',productSection)?.remove();

    /* Add concept entries only to make every visual category filter demonstrable. */
    const extras=[
      {name:'Commuter Concept',cat:'urban',sub:'commuter',meta:'Ciudad / traslado diario · concepto visual',image:'https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=900&q=84'},
      {name:'Trekking Concept',cat:'urban',sub:'trekking',meta:'Urbana / aventura ligera · concepto visual',image:'https://images.unsplash.com/photo-1511994298241-608e28f14fde?auto=format&fit=crop&w=900&q=84'},
      {name:'Cargo / Utility Concept',cat:'urban',sub:'cargo',meta:'Carga / utilidad · concepto visual',image:'https://images.unsplash.com/photo-1529422643029-d4585747aaf2?auto=format&fit=crop&w=900&q=84'},
      {name:'Kids Concept',cat:'kids',sub:'all',meta:'Infantil · concepto visual',image:'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&fit=crop&w=900&q=84'},
      {name:'BMX / Stunt Concept',cat:'bmx',sub:'all',meta:'BMX / stunt · concepto visual',image:'https://images.unsplash.com/photo-1502744688674-c619d1586c9e?auto=format&fit=crop&w=900&q=84'}
    ];
    const existingNames=new Set($$('[data-product-title]',productGrid).map(x=>x.textContent.trim().toLowerCase()));
    extras.forEach(p=>{
      if(existingNames.has(p.name.toLowerCase()))return;
      const article=document.createElement('article');
      article.className='k-product-card is-concept';article.dataset.productCard='';article.dataset.homeCat=p.cat;article.dataset.homeSub=p.sub;
      article.innerHTML=`<a href="all-collections.html"><div class="k-product-media"><span class="k-card-badge">Concepto visual</span><img src="${p.image}" loading="lazy" alt="${p.name}"></div></a><div class="k-product-body"><span class="k-accent-tag">En revisión</span><h3 class="k-product-title" data-product-title style="margin-top:9px">${p.name}</h3><div class="k-product-meta">${p.meta}</div><div class="k-product-bottom"><div class="k-product-price" data-price>Precio por validar</div></div></div>`;
      productGrid.appendChild(article);
    });

    /* Large visual cards are the category controls. All categories remain visible in one rail. */
    const categories=[
      {label:'Todas las bicicletas',copy:'Todo el portafolio',cat:'all',sub:'all',image:'assets/media/kubor-hero.jpg'},
      {label:'MTB',copy:'Sport · XC · FS · Trail',cat:'mtb',sub:'all',image:'assets/media/kubor-hero.jpg'},
      {label:'Ruta',copy:'Velocidad y eficiencia',cat:'road',sub:'all',image:'https://images.unsplash.com/photo-1530133286484-f4e6e6f9a0a1?auto=format&fit=crop&w=700&q=86'},
      {label:'Gravel',copy:'Asfalto y terracería',cat:'gravel',sub:'all',image:'https://images.unsplash.com/photo-1511994298241-608e28f14fde?auto=format&fit=crop&w=700&q=86'},
      {label:'Urbanas',copy:'Ciudad y uso diario',cat:'urban',sub:'all',image:'https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=700&q=86'},
      {label:'Eléctricas',copy:'Movilidad asistida',cat:'electric',sub:'all',image:'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=700&q=86'},
      {label:'Fitness',copy:'Ligera y rápida en ciudad',cat:'urban',sub:'fitness',image:'https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=700&q=86'},
      {label:'Commuter',copy:'Traslado diario',cat:'urban',sub:'commuter',image:'https://images.unsplash.com/photo-1529422643029-d4585747aaf2?auto=format&fit=crop&w=700&q=86'},
      {label:'Trekking',copy:'Ciudad + aventura ligera',cat:'urban',sub:'trekking',image:'https://images.unsplash.com/photo-1511994298241-608e28f14fde?auto=format&fit=crop&w=700&q=86'},
      {label:'Cargo / Utility',copy:'Carga y utilidad',cat:'urban',sub:'cargo',image:'https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=700&q=86'},
      {label:'Kids',copy:'Rodadas infantiles',cat:'kids',sub:'all',image:'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&fit=crop&w=700&q=86'},
      {label:'BMX / Stunt',copy:'Control y maniobras',cat:'bmx',sub:'all',image:'https://images.unsplash.com/photo-1502744688674-c619d1586c9e?auto=format&fit=crop&w=700&q=86'}
    ];
    categoryGrid.innerHTML=categories.map(c=>`<a class="home-cat-card" href="#home-catalogue" data-q-cat="${c.cat}" data-q-sub="${c.sub}" aria-pressed="false"><img src="${c.image}" alt="${c.label}"><div class="home-cat-copy"><div><b>${c.label}</b><span class="block">${c.copy}</span></div><strong>→</strong></div></a>`).join('');

    const subDefs={
      all:[],
      mtb:[['all','Todo MTB'],['sport','Sport'],['xc','XC'],['fs','Doble suspensión'],['trail','Trail light']],
      road:[['all','Toda Ruta']],
      gravel:[['all','Todo Gravel']],
      urban:[['all','Todas Urbanas'],['fitness','Fitness'],['commuter','Commuter'],['trekking','Trekking'],['cargo','Cargo / Utility']],
      electric:[['all','Todas Eléctricas']],
      kids:[['all','Kids']],
      bmx:[['all','BMX / Stunt']]
    };
    let currentCat='all',currentSub='all';

    const drawSubs=()=>{
      if(!subRow)return;
      const defs=subDefs[currentCat]||[];
      subRow.innerHTML=defs.map(([key,label])=>`<button type="button" class="home-subfilter-chip ${key===currentSub?'is-active':''}" data-q-subfilter="${key}">${label}</button>`).join('');
      subRow.hidden=defs.length===0;
    };
    const apply=()=>{
      let visible=0;
      $$('[data-home-cat]',productGrid).forEach(card=>{
        const show=(currentCat==='all'||card.dataset.homeCat===currentCat)&&(currentSub==='all'||card.dataset.homeSub===currentSub);
        card.hidden=!show;if(show)visible++;
      });
      const count=$('[data-home-count]',productSection);if(count)count.textContent=`${visible} ${visible===1?'modelo':'modelos'} en vista`;
      $$('[data-q-cat]',categoryGrid).forEach(card=>{
        const cat=card.dataset.qCat,sub=card.dataset.qSub;
        const on=cat===currentCat&&(sub===currentSub||(sub==='all'&&currentSub==='all'));
        card.classList.toggle('is-active',on);card.setAttribute('aria-pressed',String(on));
      });
      drawSubs();
    };
    const setFilter=(cat='all',sub='all')=>{currentCat=cat;currentSub=sub;apply()};
    window.setFilter=setFilter;

    categoryGrid.addEventListener('click',e=>{
      const card=e.target.closest('[data-q-cat]');if(!card)return;
      e.preventDefault();setFilter(card.dataset.qCat,card.dataset.qSub||'all');
      productSection.id='home-catalogue';productSection.scrollIntoView({behavior:'smooth',block:'start'});
    });
    subRow?.addEventListener('click',e=>{const b=e.target.closest('[data-q-subfilter]');if(!b)return;currentSub=b.dataset.qSubfilter;apply()});

    /* Existing Ver todas link now simply resets this same surface. */
    const showAll=$('[data-show-all]',productSection);if(showAll){showAll.textContent='Mostrar todas';showAll.addEventListener('click',e=>{e.preventDefault();setFilter('all','all')})}

    setFilter('all','all');
    classify(categoryGrid,'is-category-carousel');classify(productGrid,'is-product-carousel');
    window.lucide?.createIcons({attrs:{'stroke-width':1.7}});
  },0);
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
