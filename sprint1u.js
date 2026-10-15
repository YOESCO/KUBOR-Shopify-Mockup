(()=>{
  const init=()=>setTimeout(()=>{
    const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
    const page=(location.pathname.split('/').pop()||'home-v2.html').toLowerCase();
    const icon=n=>`<i data-lucide="${n}"></i>`;

    const IMG={
      mtb:'https://images.pexels.com/photos/17838357/pexels-photo-17838357/free-photo-of-cyclist-on-mountain-bike.jpeg?auto=compress&cs=tinysrgb&w=1600',
      mtbAlt:'https://images.pexels.com/photos/34377534/pexels-photo-34377534.jpeg?auto=compress&cs=tinysrgb&w=1400',
      road:'https://images.pexels.com/photos/287398/pexels-photo-287398.jpeg?auto=compress&cs=tinysrgb&w=1200',
      gravel:'https://images.pexels.com/photos/5354540/pexels-photo-5354540.jpeg?auto=compress&cs=tinysrgb&w=1200',
      urban:'https://images.pexels.com/photos/17881793/pexels-photo-17881793.jpeg?auto=compress&cs=tinysrgb&w=1200',
      electric:'https://images.pexels.com/photos/9538579/pexels-photo-9538579.jpeg?auto=compress&cs=tinysrgb&w=1200',
      kids:'https://images.pexels.com/photos/33310916/pexels-photo-33310916.jpeg?auto=compress&cs=tinysrgb&w=1200',
      bmx:'https://images.pexels.com/photos/30997167/pexels-photo-30997167.jpeg?auto=compress&cs=tinysrgb&w=1200',
      gear:'https://images.pexels.com/photos/7848912/pexels-photo-7848912.jpeg?auto=compress&cs=tinysrgb&w=1200',
      community:'https://images.pexels.com/photos/5644629/pexels-photo-5644629.jpeg?auto=compress&cs=tinysrgb&w=1200',
      story:'https://images.pexels.com/photos/34377533/pexels-photo-34377533.jpeg?auto=compress&cs=tinysrgb&w=1400'
    };

    /* Remove review/debug artifacts and duplicated footer brand band. */
    $$('.k-site-map,.k-footer-brand-band').forEach(el=>el.remove());

    /* Make all non-product lifestyle imagery fail to a known working remote image, never a broken local fallback. */
    document.addEventListener('error',e=>{
      const img=e.target;if(!(img instanceof HTMLImageElement))return;
      if(img.dataset.uFallback==='1')return;
      if(img.closest('.is-real,.pdp-s2-media,.pdp-s2-thumb'))return;
      img.dataset.uFallback='1';img.src=IMG.mtb;
    },true);

    if(page==='home-v2.html'||page==='index.html'||page===''){
      const hero=$('.home-s2-hero>img');if(hero){hero.src=IMG.mtb;hero.alt='Ciclista de montaña en ruta al atardecer'}

      const categorySrc={
        'Todas':IMG.mtbAlt,'MTB':IMG.mtb,'Ruta':IMG.road,'Gravel':IMG.gravel,'Urbanas':IMG.urban,
        'Eléctricas':IMG.electric,'Kids':IMG.kids,'BMX / Stunt':IMG.bmx,'Accesorios':IMG.gear
      };
      $$('.home-s2-cat').forEach(card=>{const label=$('.home-s2-cat-copy b',card)?.textContent.trim();const img=$('img',card);if(img&&categorySrc[label])img.src=categorySrc[label]});

      const brands=$$('.home-s2-brand');
      brands.forEach(card=>{
        const text=card.textContent.toLowerCase();
        let src=text.includes('terrafit')?IMG.urban:text.includes('hypergogo')?IMG.electric:IMG.story;
        let bg=$(':scope > img.bg',card);
        if(!bg){bg=document.createElement('img');bg.className='bg';bg.alt='';card.prepend(bg)}
        bg.src=src;
      });

      const editorial=$$('.home-s2-editorial>a');
      if(editorial[0]){const img=$('img',editorial[0]);if(img)img.src=IMG.mtb}
      if(editorial[1]){const img=$('img',editorial[1]);if(img)img.src=IMG.community}
      if(editorial[2]){const img=$('img',editorial[2]);if(img)img.src=IMG.story}

      /* Technology is swipe-led on mobile; remove redundant arrow rows. */
      $$('.home-s2-tech .home-s2-rail-head').forEach(el=>el.remove());

      const faq=$('.home-s2-faq');if(faq){const section=faq.closest('section');if(section)section.id='home-faq'}
    }

    if(page==='collection-v2.html'){
      const hero=$('.plp-s2-hero>img');if(hero){hero.src=IMG.mtb;hero.alt='Mountain Bike en montaña'}
      const editorial=$$('.plp-s2-editorial img');if(editorial[0])editorial[0].src=IMG.mtb;if(editorial[1])editorial[1].src=IMG.story;
    }

    if(page==='product-v2.html'){
      /* Keep the one verified staging photo; make duplicate thumbnails honest placeholders. */
      const thumbs=$$('.pdp-s2-thumb');
      if(thumbs[1])thumbs[1].innerHTML=`<span class="pdp-s2-thumb-placeholder">${icon('triangle')}<small>Foto detalle pendiente</small></span>`;
      if(thumbs[2])thumbs[2].innerHTML=`<span class="pdp-s2-thumb-placeholder">${icon('settings-2')}<small>Foto detalle pendiente</small></span>`;
      const story=$('.pdp-s2-story-media img');if(story){story.src=IMG.mtb;story.alt='Ciclismo de montaña KUBOR'}

      /* Old mobile sticky bar only appears after the real buy box has left the viewport. */
      const setupSticky=()=>{
        const buy=$('.pdp-s2-buy'),bar=$('.pdp-mobile-buy');if(!buy||!bar)return false;
        const sync=()=>{if(innerWidth>820){bar.classList.remove('is-visible');return}}
        const io=new IntersectionObserver(entries=>{
          const e=entries[0];bar.classList.toggle('is-visible',innerWidth<=820&&!e.isIntersecting);
        },{threshold:.08,rootMargin:'-76px 0px 0px 0px'});
        io.observe(buy);addEventListener('resize',sync,{passive:true});sync();return true;
      };
      if(!setupSticky())setTimeout(setupSticky,700);
    }

    /* Footer band may be recreated by slower runtime layers; remove it once more after paint. */
    setTimeout(()=>$$('.k-site-map,.k-footer-brand-band').forEach(el=>el.remove()),500);
    window.lucide?.createIcons({attrs:{'stroke-width':1.7}});
  },180);
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
