(()=>{
  const init=()=>{
    const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
    document.body.classList.add('sprint1j-breathing');
    const page=(location.pathname.split('/').pop()||'').toLowerCase();

    const patchCard=(card,{title,meta,price,image,badge,search})=>{
      if(!card)return;
      const img=$('.k-product-media img',card),t=$('[data-product-title]',card),m=$('.k-product-meta',card),p=$('[data-price]',card),rating=$('.k-product-rating',card);
      if(img){if(image)img.src=image;img.alt=title}
      if(t)t.textContent=title;
      if(m)m.textContent=meta;
      if(p)p.textContent=price;
      if(rating&&badge==='Concepto visual')rating.innerHTML='<span class="text-slate-400">Concepto visual · datos comerciales por validar</span>';
      if(search)card.dataset.search=search;
      const oldBadge=$('.k-card-badge',card);
      if(oldBadge)oldBadge.textContent=badge||oldBadge.textContent;
      else if(badge){const media=$('.k-product-media',card);if(media){const b=document.createElement('span');b.className='k-card-badge';b.textContent=badge;media.prepend(b)}}
      card.dataset.title=title;
      const link=$('.k-product-media a',card);if(link)link.href=badge==='Producto real'?'product-v2.html':'collection-v2.html';
    };

    if(page==='collection-v2.html'){
      // The PLP is still a design/data review surface. Do not imply live counts or a live Trail filter.
      const toolbar=$('.plp-toolbar');
      const count=toolbar?.querySelector('span');
      if(count) count.textContent='6 modelos de muestra';
      const context=toolbar?.querySelector('div > div');
      if(context) context.innerHTML='Portafolio MTB KUBOR <b>en revisión</b>';

      const heroRating=$('.plp-hero .text-cyan-300');
      if(heroRating) heroRating.innerHTML='<span class="text-white/80">Portafolio MTB</span> <span class="text-white/50 text-[9px] ml-2">Sport · XC · FS · Trail light</span>';

      const heroChips=$$('.plp-hero [data-filter-chip]');
      heroChips.forEach(chip=>{chip.classList.remove('is-active');chip.setAttribute('aria-pressed','false')});
      if(heroChips[0]){heroChips[0].classList.add('is-active');heroChips[0].setAttribute('aria-pressed','true');heroChips[0].textContent='Todos'}

      const activeRow=$('.plp-active-chips');
      if(activeRow){
        const sortLabel=$('[data-sort-label]',activeRow);
        activeRow.innerHTML='<button data-filter-chip aria-pressed="true" class="plp-active-chip is-active">MTB ×</button><button data-filter-chip aria-pressed="false" class="plp-active-chip">R29</button><button data-filter-chip aria-pressed="false" class="plp-active-chip">Aluminio</button>';
        if(sortLabel) activeRow.appendChild(sortLabel);
      }
      $$('.plp-filter-list label').forEach(label=>label.childNodes.forEach(n=>{if(n.nodeType===Node.TEXT_NODE)n.textContent=n.textContent.replace(/\s*\(\d+\)/g,'')}));
      $$('.plp-filters input[type="checkbox"]').forEach(input=>input.checked=false);
    }

    if(page==='search.html'){
      const cards=$$('[data-search-result][data-type="product"]');
      patchCard(cards[0],{title:'KUBOR Mallory R29 21V',meta:'MTB FS Sport · R29 · Shimano 21v',price:'$7,699 MXN',image:'assets/products/mallory-orange.jpg',badge:'Producto real',search:'KUBOR Mallory R29 21V MTB FS Sport Shimano'});
      patchCard(cards[1],{title:'KUBOR Tornado',meta:'XC Performance · R29 · ficha comercial por validar',price:'Precio por validar',badge:'Concepto visual',search:'KUBOR Tornado XC performance R29'});
      patchCard(cards[2],{title:'KUBOR Calypso 4',meta:'MTB Sport / XC recreativa · 27.5”',price:'Precio por validar',badge:'Concepto visual',search:'KUBOR Calypso 4 MTB Sport XC 27.5'});
      const c=$('[data-search-count]');if(c)c.textContent='6 resultados de muestra';
      const input=$('[data-search-page-input]');if(input)input.placeholder='Prueba: Mallory, MTB, R29, garantía...';
      $$('.search-side a b').forEach(b=>b.textContent='—');
    }

    // Replace the global predictive drawer catalogue with a non-fictional review catalogue.
    const predictiveInput=$('[data-search-input]');
    const predictiveResults=$('[data-search-results]');
    if(predictiveInput&&predictiveResults){
      const catalog=[
        {title:'KUBOR Mallory R29 21V',meta:'MTB FS Sport · producto real',price:'$7,699 MXN',href:'product-v2.html'},
        {title:'KUBOR Tornado',meta:'XC Performance · concepto visual',price:'Por validar',href:'collection-v2.html'},
        {title:'KUBOR Calypso 4',meta:'MTB Sport / XC recreativa',price:'Por validar',href:'collection-v2.html'},
        {title:'KUBOR Storm',meta:'Trail / All Mountain light',price:'Por validar',href:'collection-v2.html'},
        {title:'Colección MTB',meta:'Portafolio en revisión',price:'',href:'collection-v2.html'},
        {title:'Bike Finder',meta:'Ayuda para elegir',price:'',href:'bike-finder.html'},
        {title:'Guía de tallas',meta:'Ayuda para elegir',price:'',href:'size-guide.html'},
        {title:'Geometría',meta:'Guía técnica',price:'',href:'geometry-guide.html'},
        {title:'Manuales y descargas',meta:'Soporte',price:'',href:'manuals.html'},
        {title:'Distribuidores',meta:'Encuentra KUBOR',price:'',href:'dealers.html'}
      ];
      const render=q=>{
        const s=(q||'').trim().toLowerCase();
        const rows=(s?catalog.filter(x=>(x.title+' '+x.meta).toLowerCase().includes(s)):catalog).slice(0,7);
        predictiveResults.innerHTML=`<div class="k-eyebrow" style="color:#7a8790;margin-top:18px">${s?'Resultados':'Sugerencias'}</div>${rows.map(x=>`<a href="${x.href}"><div><b style="font-size:12px">${x.title}</b><div style="font-size:9px;color:#788690;margin-top:3px">${x.meta}</div></div><strong style="font-size:10px">${x.price||'→'}</strong></a>`).join('')||'<div style="padding:30px 0;color:#7a8790;font-size:12px">No encontramos resultados. Prueba con otra búsqueda.</div>'}<a href="search.html" style="margin-top:12px;font-size:10px;font-weight:900;text-transform:uppercase;color:#008da1">Ver todos los resultados →</a>`;
      };
      const rerender=()=>setTimeout(()=>render(predictiveInput.value),0);
      predictiveInput.addEventListener('input',rerender);
      setTimeout(()=>render(''),0);
    }

    if(page==='compare.html'){
      const products=$$('.compare-product');
      const productData=[
        {title:'Mallory R29 21V',meta:'MTB FS Sport · R29',price:'$7,699 MXN',image:'assets/products/mallory-orange.jpg',real:true},
        {title:'Calypso 4',meta:'MTB Sport / XC recreativa · 27.5”',price:'Precio por validar',real:false},
        {title:'Storm',meta:'Trail / All Mountain light · 27.5”',price:'Precio por validar',real:false}
      ];
      products.forEach((el,i)=>{const d=productData[i];if(!d)return;const img=$('img',el),h=$('h3',el),p=$('p',el),strong=$('strong',el);if(img){if(d.image)img.src=d.image;img.alt=d.title;if(d.real)img.style.objectFit='contain'}if(h)h.textContent=d.title;if(p)p.textContent=d.meta;if(strong)strong.textContent=d.price;const tag=document.createElement('span');tag.className='compare-diff';tag.style.marginTop='8px';tag.textContent=d.real?'Producto real':'Concepto visual';el.insertBefore(tag,el.querySelector('button'))});

      const setRow=(label,values)=>{const labels=$$('.compare-label');const cell=labels.find(x=>x.textContent.trim().toLowerCase()===label.toLowerCase());if(!cell)return;let n=cell.nextElementSibling;values.forEach(v=>{if(n){n.textContent=v;n=n.nextElementSibling}})};
      setRow('Uso ideal',['MTB recreativa / FS Sport','MTB Sport / XC recreativa','Trail / All Mountain light']);
      setRow('Suspensión',['Doble suspensión · resorte trasero','Horquilla con bloqueo · MOMA','Doble suspensión · aire/resorte · validar']);
      setRow('Transmisión',['Shimano 3×7 · 21v','1×9 probable · validar versión','1×10 probable · validar versión']);
      setRow('Frenos',['Disco · configuración por validar','Disco hidráulico','Disco hidráulico']);
      setRow('Ruedas',['Kenda 29 × 2.10','Kenda 27.5 × 2.10','Kenda 27.5 × 2.20']);
      setRow('HTA',['71°','Por validar','65°']);
      setRow('Nivel',['FS Sport / recreativa','Sport / XC recreativa','Trail / All Mountain light']);
      const action=$$('.compare-label').find(x=>x.textContent.trim()==='Acción');if(action){let n=action.nextElementSibling;['product-v2.html','collection-v2.html','collection-v2.html'].forEach((href,i)=>{const a=n?.querySelector('a');if(a){a.href=href;a.textContent=i===0?'Ver Mallory':'Ver en catálogo'}n=n?.nextElementSibling})}
    }

    if(page==='cart.html'){
      const upsell=$('.cart-upsell-card');
      if(upsell)upsell.innerHTML='<img src="https://images.unsplash.com/photo-1557803175-2b74419b146d?auto=format&fit=crop&w=300&q=82" alt="Accesorios para ciclismo"><div><b class="text-[10px] uppercase">Accesorios KUBOR</b><p class="text-[8px] text-slate-500 mt-1">Explora equipo y herramientas disponibles.</p></div><a href="accessories.html" class="k-card-icon" aria-label="Ver accesorios">→</a>';
    }

    window.lucide?.createIcons({attrs:{'stroke-width':1.7}});
  };
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
