(()=>{
  const init=()=>setTimeout(()=>{
    const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
    const page=(location.pathname.split('/').pop()||'home-v2.html').toLowerCase();
    const icon=n=>`<i data-lucide="${n}"></i>`;

    /* Storefront copy must not expose prototype language. */
    if(page==='home-v2.html'||page==='index.html'||page===''){
      const heads=$$('.home-s2-head');
      heads.forEach(h=>{
        const title=$('h2',h)?.textContent.trim().toLowerCase();
        const p=$('p',h);
        if(!p)return;
        if(title?.includes('categoría'))p.textContent='MTB, ruta, gravel, urbanas, eléctricas y más. Empieza por cómo quieres rodar.';
        if(title?.includes('tres marcas'))p.textContent='Tres formas de vivir la movilidad, conectadas por la misma experiencia de compra y soporte.';
      });

      /* Concept cards should read as intentional roadmap items, not broken products. */
      $$('.home-s2-products .k-product-card:not(.is-real)').forEach((card,i)=>{
        const badge=$('.k-card-badge',card);if(badge)badge.textContent='Próximamente';
        const price=$('.k-product-price',card);if(price)price.textContent='Conoce el modelo';
        const media=$('.s2-concept-media',card);if(media&&!$('.s2-concept-mark',media)){
          const mark=document.createElement('div');mark.className='s2-concept-mark';
          const name=$('.k-product-title',card)?.textContent.replace(/^KUBOR\s+/i,'').trim()||`Modelo ${i+1}`;
          mark.innerHTML=`<span>KUBOR</span><b>${name}</b>`;media.appendChild(mark);
        }
      });

      /* Broken category images become intentional gradient cards with icons, never alt-text artifacts. */
      const catIcon={Todas:'layers-3',MTB:'mountain',Ruta:'gauge',Gravel:'route',Urbanas:'building-2','Eléctricas':'zap',Kids:'smile','BMX / Stunt':'bike',Accesorios:'backpack'};
      $$('.home-s2-cat').forEach(card=>{
        const label=$('.home-s2-cat-copy b',card)?.textContent.trim()||'';
        const img=$('img',card);if(!img)return;
        const fallback=()=>{
          if(card.dataset.vFallback==='1')return;card.dataset.vFallback='1';img.remove();card.classList.add('has-visual-fallback');
          const badge=document.createElement('span');badge.className='home-s2-cat-icon';badge.innerHTML=icon(catIcon[label]||'bike');card.prepend(badge);window.lucide?.createIcons({attrs:{'stroke-width':1.7}});
        };
        img.addEventListener('error',fallback,{once:true});if(img.complete&&img.naturalWidth===0)fallback();
      });
    }

    if(page==='product-v2.html'){
      const buy=$('.pdp-s2-buy');
      if(buy){
        const sub=$('.pdp-s2-sub',buy);if(sub)sub.textContent='MTB doble suspensión recreativa con cuadro de aluminio, transmisión Shimano 3×7 y rodada 29. Pensada para comodidad y versatilidad en recorridos recreativos.';
        const rating=$('.pdp-s2-rating span',buy);if(rating)rating.textContent='4.74 / 5 · 504 reseñas';
        const note=$('.pdp-s2-price-note',buy);if(note)note.textContent='Consulta disponibilidad y condiciones vigentes al comprar.';
        const config=$('.pdp-s2-option p',buy);if(config)config.textContent='Rodada 29. Consulta disponibilidad de configuraciones y variantes vigentes.';
      }

      const photoNote=$('.pdp-s2-photo-note');if(photoNote)photoNote.textContent='Mallory R29';
      $$('.pdp-s2-thumb-placeholder small').forEach(s=>s.textContent='Más fotos próximamente');

      /* Sticky purchase waits until the whole first product section is passed, not merely part of buybox. */
      const bar=$('.pdp-mobile-buy'),first=$('.pdp-s2-first');
      if(bar&&first){
        bar.classList.remove('is-visible');
        const io=new IntersectionObserver(([entry])=>bar.classList.toggle('is-visible',innerWidth<=820&&!entry.isIntersecting),{threshold:0,rootMargin:'0px 0px -15% 0px'});
        io.observe(first);
      }
    }

    /* Compact mobile footer using accessible accordion behaviour. */
    const footer=$('.k-footer');
    if(footer){
      $$('.k-footer-grid>div:not(:first-child)',footer).forEach((col,idx)=>{
        const h=$('h4',col);if(!h||h.dataset.vAccordion==='1')return;h.dataset.vAccordion='1';h.setAttribute('role','button');h.setAttribute('tabindex','0');h.setAttribute('aria-expanded','false');
        const toggle=()=>{const open=col.classList.toggle('is-open');h.setAttribute('aria-expanded',String(open))};
        h.addEventListener('click',toggle);h.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();toggle()}});
      });
    }

    /* Ensure no old review helpers survive a later runtime. */
    $$('.k-site-map,.k-footer-brand-band').forEach(el=>el.remove());
    setTimeout(()=>$$('.k-site-map,.k-footer-brand-band').forEach(el=>el.remove()),700);
    window.lucide?.createIcons({attrs:{'stroke-width':1.7}});
  },260);
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
