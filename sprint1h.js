(()=>{
  const init=()=>{
    const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
    document.body.classList.add('sprint1h-visual');
    const page=(location.pathname.split('/').pop()||'home-v2.html').toLowerCase();

    const useLocalImage=(img,src)=>{
      if(!img)return;
      const fallback=img.currentSrc||img.src;
      img.addEventListener('error',()=>{if(img.src.includes(src)){img.src=fallback}}, {once:true});
      img.src=src;
    };

    const setBadge=(card,text,kind='')=>{
      const media=$('.k-product-media',card);if(!media)return;
      let badge=$('.k-card-badge',media);
      if(!badge){badge=document.createElement('span');media.prepend(badge)}
      badge.className=`k-card-badge ${kind}`.trim();badge.textContent=text;
    };

    const patchCard=(card,data)=>{
      if(!card)return;
      const img=$('.k-product-media img',card),title=$('[data-product-title]',card),meta=$('.k-product-meta',card),price=$('[data-price]',card),rating=$('.k-product-rating',card);
      if(img){if(data.image)img.src=data.image;img.alt=data.title}
      if(title)title.textContent=data.title;
      if(meta)meta.textContent=data.meta;
      if(price)price.textContent=data.price;
      if(rating&&data.rating)rating.innerHTML=data.rating;
      if(data.badge)setBadge(card,data.badge,data.badgeClass||'');
      card.dataset.title=data.title;card.dataset.price=String(data.numericPrice||0);
      $$('[data-toggle-wishlist],[data-compare],[data-quick-view]',card).forEach(b=>b.dataset.title=data.title);
      const link=$('a[href="product-v2.html"]',card);if(link)link.href='product-v2.html';
    };

    // Owned KUBOR lifestyle asset: brand/discipline imagery only, never a model packshot.
    if(page==='home-v2.html'||page==='index.html'||page===''){
      useLocalImage($('.home-hero>img'),'assets/media/kubor-hero.jpg');
      useLocalImage($('.home-story>img'),'assets/media/kubor-hero.jpg');
      const cards=$$('.home-product-grid [data-product-card]');
      patchCard(cards[0],{title:'KUBOR Mallory R29 21V',meta:'MTB FS Sport · R29 · Shimano 21v',price:'$7,699 MXN',numericPrice:7699,image:'assets/products/mallory-orange.jpg',badge:'Producto real',rating:'★★★★★ <span class="text-slate-400">4.74 (504)</span>'});
      patchCard(cards[1],{title:'KUBOR Tornado',meta:'XC Performance · R29 · ficha por validar',price:'Precio por validar',numericPrice:0,badge:'Concepto visual'});
      patchCard(cards[2],{title:'KUBOR Calypso 4',meta:'MTB Sport / XC recreativa · 27.5”',price:'Precio por validar',numericPrice:0,badge:'Concepto visual'});
      patchCard(cards[3],{title:'KUBOR Alpine 5',meta:'MTB Sport / XC recreativa · R29 · Shimano 21v',price:'Precio por validar',numericPrice:0,badge:'Concepto visual'});
    }
    if(page==='discipline-mtb.html') useLocalImage($('.landing-hero>img'),'assets/media/kubor-hero.jpg');

    // Replace text-only Terrafit mark in Home with the official SVG.
    const tfCard=$('.home-brand-row a[href="brand-terrafit.html"]');
    const tfTitle=tfCard?.querySelector('strong');
    if(tfTitle){
      const logo=document.createElement('img');logo.src='assets/logos/TERRAFIT_dark.svg';logo.alt='Terrafit';
      logo.style.cssText='display:block;width:150px;max-width:72%;height:auto;object-fit:contain;object-position:left center';
      tfTitle.replaceWith(logo);
    }

    // Replace placeholder PLP model names with real KUBOR portfolio names.
    if(page==='collection-v2.html'){
      const cards=$$('.plp-grid [data-product-card]');
      patchCard(cards[0],{title:'KUBOR Mallory R29 21V',meta:'MTB FS Sport · R29 · Shimano 21v',price:'$7,699 MXN',numericPrice:7699,image:'assets/products/mallory-orange.jpg',badge:'Producto real',rating:'★★★★★ <span class="text-slate-400">4.74 (504)</span>'});
      patchCard(cards[1],{title:'KUBOR Storm',meta:'Trail / All Mountain light · 27.5” · 1x10 probable',price:'Precio por validar',numericPrice:0,badge:'Concepto visual'});
      patchCard(cards[2],{title:'KUBOR Tornado',meta:'XC Performance / Sport alto · R29',price:'Precio por validar',numericPrice:0,badge:'Concepto visual'});
      patchCard(cards[3],{title:'KUBOR Calypso 4',meta:'MTB Sport / XC recreativa · 27.5” · 1x9 probable',price:'Precio por validar',numericPrice:0,badge:'Concepto visual'});
      patchCard(cards[4],{title:'KUBOR Alpine 5',meta:'MTB Sport / XC recreativa · R29 · Shimano 21v',price:'Precio por validar',numericPrice:0,badge:'Concepto visual'});
      patchCard(cards[5],{title:'KUBOR Sierra 7',meta:'MTB Sport / recreativa · múltiples rodadas',price:'Precio por validar',numericPrice:0,badge:'Concepto visual'});
    }

    // Real-data Mallory PDP. Values come from the user's consolidated TDS/audit and staging capture.
    if(page==='product-v2.html'){
      document.title='Mallory R29 21V — KUBOR';
      const buybox=$('.pdp-buybox');
      const mainImg=$('[data-pdp-main-image]');
      if(mainImg){mainImg.src='assets/products/mallory-orange.jpg';mainImg.alt='KUBOR Mallory R29 naranja';mainImg.style.objectFit='contain';mainImg.style.transform='none';mainImg.style.transformOrigin='50% 50%'}

      const title=$('[data-product-title]',buybox);if(title)title.textContent='KUBOR Mallory R29 21V';
      const eyebrow=$('.k-eyebrow',buybox);if(eyebrow)eyebrow.textContent='MTB FS Sport · R29';
      const breadcrumb=buybox?.firstElementChild;if(breadcrumb)breadcrumb.innerHTML='Inicio <span class="mx-2">›</span> MTB <span class="mx-2">›</span> FS Sport <span class="mx-2">›</span> Mallory R29';
      const rating=$('.pdp-rating',buybox);if(rating)rating.innerHTML='★★★★★ <a href="#reviews" class="text-white/65 text-[10px] ml-1">4.74 (504 reseñas)</a>';
      const intro=buybox?$$('p',buybox)[0]:null;if(intro)intro.textContent='Doble suspensión recreativa R29 con cuadro de aluminio, transmisión Shimano 3×7 y llantas Kenda. Configuración basada en las fichas técnicas consolidadas de KUBOR.';
      const price=$('.pdp-price',buybox);if(price){price.textContent='$7,699 MXN';price.dataset.price='7699'}
      if(buybox){buybox.dataset.title='KUBOR Mallory R29 21V';buybox.dataset.price='7699'}

      const colorLabel=$('[data-color-label]',buybox);if(colorLabel)colorLabel.textContent='Naranja';
      const swatches=$('.pdp-swatches',buybox);if(swatches)swatches.innerHTML='<button class="pdp-swatch is-active" style="background:#ef5b22" data-color="Naranja" aria-label="Naranja"></button><button class="pdp-swatch" style="background:#15944a;opacity:.5" disabled aria-label="Verde · foto pendiente"></button><button class="pdp-swatch" style="background:#aaa;opacity:.5" disabled aria-label="Gris · foto pendiente"></button>';
      const sizes=$('.pdp-sizes',buybox);if(sizes&&sizes.parentElement)sizes.parentElement.innerHTML='<div class="flex justify-between"><span class="text-[9px] uppercase font-black">Rodada</span><a href="size-guide.html" class="text-[8px] uppercase font-black text-cyan-300">Guía de tallas →</a></div><div class="mt-3 border border-white/15 px-4 py-3 text-[11px] font-black">29” <span class="text-white/45 font-medium ml-2">Talla de cuadro por validar</span></div>';
      const stock=buybox?$$(':scope > div',buybox).find(el=>el.textContent.includes('En stock')):null;if(stock)stock.innerHTML='<span><span class="text-cyan-300">●</span> Disponibilidad conectará al inventario Shopify</span><span class="text-white/45">Mallory R29</span>';
      const wish=$('[data-toggle-wishlist]',buybox);if(wish)wish.dataset.title='KUBOR Mallory R29 21V';

      // Real-image gallery: one verified packshot, with non-destructive zoomed views of the same photo.
      const thumbs=$('.pdp-thumb-row');
      if(thumbs){
        const views=[['Completa','50% 50%','1'],['Cuadro','58% 44%','1.75'],['Transmisión','36% 62%','1.95'],['Horquilla','72% 44%','1.9']];
        thumbs.innerHTML=views.map((v,i)=>`<button class="pdp-thumb${i===0?' is-active':''}" data-mallory-origin="${v[1]}" data-mallory-scale="${v[2]}" aria-label="${v[0]}"><img src="assets/products/mallory-orange.jpg" alt="Mallory · ${v[0]}" style="object-fit:cover;transform:scale(${i?1.35:1});transform-origin:${v[1]}"></button>`).join('');
        $$('[data-mallory-origin]',thumbs).forEach(btn=>btn.addEventListener('click',()=>{
          $$('[data-mallory-origin]',thumbs).forEach(x=>x.classList.remove('is-active'));btn.classList.add('is-active');
          if(mainImg){mainImg.src='assets/products/mallory-orange.jpg';mainImg.style.objectFit='contain';mainImg.style.transformOrigin=btn.dataset.malloryOrigin;mainImg.style.transform=`scale(${btn.dataset.malloryScale})`}
        }));
      }

      const specValues=[
        ['Cuadro','Aluminio · doble suspensión'],['Suspensión','Horquilla R29 + amortiguador trasero'],['Transmisión','Shimano 3×7 · 21v'],['Frenos','Disco · configuración por validar'],['Ruedas','Kenda 29 × 2.10'],['Geometría','HTA 71° · WB 1165.6 mm']
      ];
      $$('.pdp-spec-strip .pdp-spec').forEach((el,i)=>{const b=$('b',el),s=$('span',el);if(specValues[i]){b.textContent=specValues[i][0];s.textContent=specValues[i][1]}});

      const desc=$('[data-tab-panel="description"]');
      if(desc){
        const copy=$('.pdp-story-copy',desc);if(copy){const e=$('.k-eyebrow',copy),h=$('h2',copy),p=$('p',copy),lis=$$('li',copy);if(e)e.textContent='MTB FS Sport / recreativa';if(h)h.textContent='Doble suspensión para uso recreativo';if(p)p.textContent='Mallory es una plataforma recreativa de doble suspensión R29. La documentación consolidada recomienda mantenerla en FS Sport y no presentarla como trail moderno.';const txt=['✓ Cuadro de aluminio doble suspensión.','✓ Shimano EF500 / TZ500, 21 velocidades.','✓ Llantas Kenda 29 × 2.10.','✓ Geometría consolidada con HTA 71°.'];lis.forEach((li,i)=>li.textContent=txt[i]||li.textContent)}
        const media=$('.pdp-story-media img',desc);if(media){media.src='assets/media/kubor-hero.jpg';media.alt='Imagen de marca KUBOR en montaña'}
        const geo=$('.pdp-geo-float',desc);if(geo)geo.innerHTML='<span class="k-eyebrow text-cyan-300">Top tube efectivo</span><b>588.45 mm</b><span class="k-eyebrow text-white/50">Ángulo dirección</span><b>71°</b><a href="geometry-guide.html" class="text-[8px] uppercase font-black text-cyan-300">Ver geometría →</a>';
        const tech=$$('.pdp-tech-card',desc);const techData=[['Doble suspensión','Cuadro de aluminio con amortiguador trasero de resorte.'],['R29 recreativa','Kenda 29 × 2.10 para uso recreativo y terreno ligero.'],['Shimano 21v','EF500 + TZ500 con configuración 3×7.']];tech.forEach((el,i)=>{const b=$('b',el),p=$('p',el);if(techData[i]){b.textContent=techData[i][0];p.textContent=techData[i][1]}})
      }

      const specPanel=$('[data-tab-panel="specs"]');
      const tbody=specPanel?$('tbody',specPanel):null;
      if(tbody)tbody.innerHTML='<tr><td>Frame</td><td>Cuadro</td><td>Aluminio R29 doble suspensión · HT 50×44×130 mm</td></tr><tr><td>Suspensión</td><td>Horquilla</td><td>Horquilla de suspensión R29 · compatible con freno de disco</td></tr><tr><td>Suspensión</td><td>Amortiguador</td><td>Resorte trasero 150L / 750 lb según TDS</td></tr><tr><td>Frenos</td><td>Sistema</td><td>Disco · configuración mecánica / validar versión comercial</td></tr><tr><td>Transmisión</td><td>Shifter</td><td>Shimano EF500</td></tr><tr><td>Transmisión</td><td>Desviadores</td><td>Shimano TZ500</td></tr><tr><td>Transmisión</td><td>Freewheel</td><td>13–28T · 7 velocidades</td></tr><tr><td>Transmisión</td><td>Configuración</td><td>3×7 · 21 velocidades</td></tr><tr><td>Ruedas</td><td>Neumáticos</td><td>Kenda 29 × 2.10</td></tr><tr><td>Ruedas</td><td>Rines</td><td>Aluminio doble pared 29 × 1.75 · 36H</td></tr>';

      const geoPanel=$('[data-tab-panel="geometry"]');
      if(geoPanel)geoPanel.innerHTML='<div class="grid lg:grid-cols-[.72fr_1.28fr] gap-7"><div><span class="k-eyebrow text-cyan-700">Geometría consolidada</span><h2 class="k-display text-[40px] uppercase leading-none mt-1">Mallory R29</h2><p class="text-[11px] text-slate-500 leading-relaxed mt-3">Valores consolidados del cuadro actual. No se muestran tallas S/M/L/XL porque la fuente disponible no soporta una tabla por talla.</p><a href="geometry-guide.html" class="k-btn k-btn-dark mt-5">Cómo leer la geometría</a></div><div class="overflow-x-auto"><table class="pdp-geo-table min-w-[520px]"><thead><tr><th>Medida</th><th>Valor</th></tr></thead><tbody><tr><td>Rodada</td><td>29”</td></tr><tr><td>HTA</td><td>71°</td></tr><tr><td>Top tube efectivo</td><td>588.45 mm</td></tr><tr><td>Seat tube</td><td>432 mm</td></tr><tr><td>Chainstay</td><td>505 mm</td></tr><tr><td>Wheelbase</td><td>1165.6 mm</td></tr><tr><td>Fork A-C</td><td>500 mm</td></tr></tbody></table></div></div>';
    }

    // Ensure commerce CTAs are wired wherever the visual prototype already shows them.
    $$('[data-product-card]').forEach(card=>{
      $$('button',card).forEach(b=>{
        const t=b.textContent.trim().toLowerCase();
        if((t==='+'||t.includes('agregar al carrito'))&&!b.hasAttribute('data-add-cart')) b.setAttribute('data-add-cart','');
      });
    });
    $$('.pdp-buy-actions .k-btn-primary').forEach(b=>b.setAttribute('data-add-cart',''));

    // Performance: keep hero eager, lazy-load secondary imagery.
    const hero=$('.home-hero>img,.plp-hero>img,.pdp-main-media img,[data-pdp-main-image],.landing-hero>img');
    $$('img').forEach(img=>{if(img!==hero&&!img.hasAttribute('loading'))img.loading='lazy'});
    if(hero){hero.loading='eager';hero.setAttribute('fetchpriority','high')}

    const promo=$('.k-mega-card');
    if(promo&&!promo.querySelector('.s1h-promo-kicker')){
      const kicker=document.createElement('span');kicker.className='s1h-promo-kicker';kicker.textContent='Nueva colección 2026';promo.appendChild(kicker);
    }

    const markRail=el=>{if(!el)return;el.setAttribute('role','region');el.setAttribute('aria-roledescription','carrusel');if(!el.getAttribute('aria-label'))el.setAttribute('aria-label','Contenido deslizable')};
    ['.home-cat-grid','.home-product-grid','.home-editorial-grid','.pdp-related-rail'].forEach(s=>markRail($(s)));

    document.addEventListener('click',e=>{
      const b=e.target.closest('.pdp-buy-actions .k-btn-primary,[data-product-card] [data-add-cart]');if(!b)return;
      const old=b.textContent;b.classList.add('is-confirmed');b.textContent='Agregado ✓';setTimeout(()=>{b.textContent=old;b.classList.remove('is-confirmed')},900);
    });
    window.lucide?.createIcons();
  };
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
