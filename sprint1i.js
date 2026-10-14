(()=>{
  const run=()=>setTimeout(()=>{
    const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
    const page=(location.pathname.split('/').pop()||'home-v2.html').toLowerCase();

    const ensureBadge=(card,text='Concepto visual')=>{
      const media=$('.k-product-media',card);if(!media)return;
      let badge=$('.k-card-badge',media);if(!badge){badge=document.createElement('span');media.prepend(badge)}
      badge.className='k-card-badge';badge.textContent=text;
    };
    const patchCard=(card,{title,meta,price='Precio por validar',image,badge='Concepto visual'})=>{
      if(!card)return;
      const t=$('[data-product-title]',card),m=$('.k-product-meta',card),p=$('[data-price]',card),img=$('.k-product-media img',card);
      if(t)t.textContent=title;if(m)m.textContent=meta;if(p)p.textContent=price;if(img&&image){img.src=image;img.alt=title}if(badge)ensureBadge(card,badge);
      card.dataset.title=title;card.dataset.price=price.includes('7,699')?'7699':'0';
      $$('[data-toggle-wishlist],[data-compare],[data-quick-view]',card).forEach(b=>b.dataset.title=title);
    };

    if(page==='home-v2.html'||page==='index.html'||page===''){
      const hero=$('.home-hero');
      if(hero){
        const badge=$('.k-card-badge',hero),eyebrow=$('.k-eyebrow',hero),p=$(':scope .home-hero-inner > p',hero),specs=$$('.home-hero-spec',hero),actions=$$('.home-hero-inner a.k-btn',hero);
        if(badge)badge.textContent='KUBOR';if(eyebrow)eyebrow.textContent='RIDE BEYOND';
        if(p)p.textContent='Bicicletas para montaña, ruta, gravel, ciudad y movilidad eléctrica. Encuentra la plataforma adecuada para cómo quieres rodar.';
        const labels=[['Montaña','MTB · XC · Trail'],['Ruta','Road · Gravel'],['Urbana','Fitness · Commuter'],['Eléctrica','E-bike · movilidad']];
        specs.forEach((el,i)=>{const span=$('span',el);if(span&&labels[i])span.innerHTML=`${labels[i][0]}<br>${labels[i][1]}`});
        if(actions[0]){actions[0].href='all-collections.html';actions[0].innerHTML='Explorar bicicletas <span>→</span>'}
        if(actions[1]){actions[1].href='bike-finder.html';actions[1].textContent='Bike Finder'}
      }
      const stats=$$('.home-story-stats>div');[['MTB','Montaña'],['ROAD','Asfalto'],['URBAN','Ciudad']].forEach((v,i)=>{if(stats[i]){const b=$('b',stats[i]),s=$('span',stats[i]);if(b)b.textContent=v[0];if(s)s.textContent=v[1]}});
    }

    if(page==='product-v2.html'){
      const mobile=$('.pdp-mobile-buy');if(mobile){const label=$('span',mobile),price=$('b',mobile);if(label)label.textContent='KUBOR Mallory R29 21V';if(price)price.textContent='$7,699 MXN'}

      const related=$$('.pdp-related-rail [data-product-card]');
      patchCard(related[0],{title:'KUBOR Tornado',meta:'XC Performance / Sport alto · R29'});
      patchCard(related[1],{title:'KUBOR Calypso 4',meta:'MTB Sport / XC recreativa · 27.5”'});
      patchCard(related[2],{title:'KUBOR Alpine 5',meta:'MTB Sport / XC recreativa · R29 · Shimano 21v'});
      patchCard(related[3],{title:'Accesorios KUBOR',meta:'Equipamiento · selección por validar'});

      const reviewSummary=$('.pdp-review-summary');
      if(reviewSummary){const strong=$('strong',reviewSummary),small=$('p',reviewSummary),btn=$('button',reviewSummary);if(strong)strong.textContent='4.74';if(small)small.textContent='Referencia histórica: 504 reseñas en captura de staging';if(btn){btn.textContent='Reviews conectarán a Shopify';btn.disabled=true;btn.classList.add('opacity-60')}}
      const reviewList=$('.pdp-review-list');
      if(reviewList)reviewList.innerHTML='<article class="pdp-review"><b class="text-xs uppercase">Contenido de reseñas pendiente de integración</b><p class="text-[10px] text-slate-500 mt-2">No se muestran testimonios inventados. El mock conserva la estructura UI y cargará reseñas reales desde la fuente que se defina para Shopify.</p></article>';
    }

    // Override the old demo predictive-search catalogue after the core handler runs.
    const searchResults=$('[data-search-results]');
    document.addEventListener('input',e=>{
      const input=e.target.closest('[data-search-input]');if(!input||!searchResults)return;
      const q=input.value.trim().toLowerCase();
      const realCatalog=[
        ['KUBOR Mallory R29 21V','MTB FS Sport · R29','$7,699 MXN','product-v2.html'],
        ['KUBOR Tornado','XC Performance · R29','Precio por validar','collection-v2.html'],
        ['KUBOR Calypso 4','MTB Sport / XC recreativa','Precio por validar','collection-v2.html'],
        ['KUBOR Alpine 5','MTB Sport / XC recreativa · R29','Precio por validar','collection-v2.html'],
        ['KUBOR Storm','Trail / All Mountain light','Precio por validar','collection-v2.html'],
        ['Guía de tallas','Ayuda para elegir','','size-guide.html']
      ];
      const found=realCatalog.filter(x=>!q||`${x[0]} ${x[1]}`.toLowerCase().includes(q)).slice(0,6);
      requestAnimationFrame(()=>{searchResults.innerHTML=found.length?found.map(x=>`<a href="${x[3]}"><div><b>${x[0]}</b><span>${x[1]}</span></div><strong>${x[2]}</strong></a>`).join(''):'<div class="p-4 text-xs text-slate-500">No encontramos coincidencias. Prueba Mallory, Tornado, Calypso o Alpine.</div>'});
    },true);

    window.lucide?.createIcons();
  },0);
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run,{once:true});else run();
})();
