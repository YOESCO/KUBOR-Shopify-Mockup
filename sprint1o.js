(()=>{
  const init=()=>{
    const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
    const page=(location.pathname.split('/').pop()||'home-v2.html').toLowerCase();
    const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
    const icon=n=>`<i data-lucide="${n}"></i>`;

    if(page==='home-v2.html'||page==='index.html'||page===''){
      const story=$('.home-story')?.closest('.home-section');
      if(story&&!$('.k-scroll-specs')){
        const cards=[
          ['move-diagonal-2','Geometría','Reach, stack y ángulos definen posición, estabilidad y respuesta.','Fit','Control'],
          ['triangle','Cuadro','Material, construcción y proporciones deben responder al uso real de la bicicleta.','Estructura','Rigidez'],
          ['activity','Suspensión','Recorrido y ajuste deben tener sentido para la disciplina, no solo verse bien en la ficha.','Recorrido','Control'],
          ['settings-2','Transmisión','Rango, número de velocidades y simplicidad deben escalar de forma coherente por nivel.','Rango','Precisión'],
          ['disc-3','Frenos','Tipo de freno y potencia deben acompañar peso, velocidad, terreno y nivel de producto.','Modulación','Seguridad'],
          ['circle-dot','Ruedas','Rodada, ancho y llanta cambian aceleración, tracción, comodidad y comportamiento.','Rodada','Tracción'],
          ['ruler','Fit & talla','La talla correcta parte de estatura, reach, stack, standover y estilo de manejo.','Talla','Posición']
        ];
        const sec=document.createElement('section');sec.className='k-scroll-specs';sec.innerHTML=`<div class="k-scroll-specs-sticky"><div class="k-wrap"><div class="k-scroll-specs-head"><div><span class="k-eyebrow" style="color:#35c4df">Diseño que se siente</span><h2>Lo que realmente cambia una bicicleta</h2></div><p>No son números aislados. Geometría, cuadro, suspensión, transmisión, frenos, ruedas y fit trabajan juntos. Este bloque será alimentado por datos técnicos validados cuando migremos a Shopify.</p></div><div class="k-scroll-specs-viewport"><div class="k-scroll-specs-track">${cards.map((c,i)=>`<article class="k-scroll-spec-card"><div><div class="index">0${i+1}</div>${icon(c[0])}<h3>${c[1]}</h3><p>${c[2]}</p></div><div class="micro"><span>${c[3]}</span><span>${c[4]}</span></div></article>`).join('')}</div></div><div class="k-scroll-specs-progress" aria-hidden="true"><span></span></div><div class="k-scroll-specs-arrows"><button type="button" data-spec-prev aria-label="Anterior">${icon('arrow-left')}</button><button type="button" data-spec-next aria-label="Siguiente">${icon('arrow-right')}</button></div></div></div>`;
        story.after(sec);
        const viewport=$('.k-scroll-specs-viewport',sec),track=$('.k-scroll-specs-track',sec),progress=$('.k-scroll-specs-progress span',sec);
        const mobile=()=>matchMedia('(max-width: 820px)').matches;
        const update=()=>{
          if(mobile()||reduce){track.style.transform='';if(progress)progress.style.width='0';return}
          const rect=sec.getBoundingClientRect();const range=Math.max(1,sec.offsetHeight-innerHeight);const p=Math.min(1,Math.max(0,-rect.top/range));const max=Math.max(0,track.scrollWidth-viewport.clientWidth);track.style.transform=`translate3d(${-p*max}px,0,0)`;if(progress)progress.style.width=`${p*100}%`;
        };
        let raf=0;const onScroll=()=>{if(raf)return;raf=requestAnimationFrame(()=>{raf=0;update()})};addEventListener('scroll',onScroll,{passive:true});addEventListener('resize',onScroll);update();
        $('[data-spec-prev]',sec)?.addEventListener('click',()=>viewport.scrollBy({left:-viewport.clientWidth*.82,behavior:reduce?'auto':'smooth'}));
        $('[data-spec-next]',sec)?.addEventListener('click',()=>viewport.scrollBy({left:viewport.clientWidth*.82,behavior:reduce?'auto':'smooth'}));
      }
    }

    /* Turn plain support heroes into image-led headers. Images are lifestyle/context only. */
    const hero=$('.support-hero');
    const heroMap={
      'help-center.html':'https://images.unsplash.com/photo-1529422643029-d4585747aaf2?auto=format&fit=crop&w=1800&q=84',
      'faq.html':'https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?auto=format&fit=crop&w=1800&q=84',
      'contact.html':'https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?auto=format&fit=crop&w=1800&q=84',
      'dealers.html':'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&fit=crop&w=1800&q=84',
      'compare.html':'https://images.unsplash.com/photo-1502744688674-c619d1586c9e?auto=format&fit=crop&w=1800&q=84',
      'gift-card.html':'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=1800&q=84'
    };
    if(hero&&heroMap[page]&&!$('.k-support-hero-media',hero)){
      hero.classList.add('has-photo');const img=document.createElement('img');img.className='k-support-hero-media';img.src=heroMap[page];img.alt='';img.loading='eager';hero.prepend(img);
    }

    window.lucide?.createIcons({attrs:{'stroke-width':1.7}});
  };
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
