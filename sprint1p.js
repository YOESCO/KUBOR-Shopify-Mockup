(()=>{
  const init=()=>{
    const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
    const page=(location.pathname.split('/').pop()||'').toLowerCase();
    const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
    const icon=n=>`<i data-lucide="${n}"></i>`;

    const hero=$('.content-hero');
    const map={
      'technology.html':'assets/media/kubor-hero.jpg',
      'size-guide.html':'https://images.unsplash.com/photo-1502744688674-c619d1586c9e?auto=format&fit=crop&w=1800&q=84',
      'geometry-guide.html':'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=1800&q=84',
      'blog.html':'https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?auto=format&fit=crop&w=1800&q=84',
      'about.html':'assets/media/kubor-hero.jpg',
      'community.html':'https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=1800&q=84',
      'manuals.html':'https://images.unsplash.com/photo-1529422643029-d4585747aaf2?auto=format&fit=crop&w=1800&q=84',
      'assembly-guide.html':'https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?auto=format&fit=crop&w=1800&q=84',
      'maintenance-guide.html':'https://images.unsplash.com/photo-1529422643029-d4585747aaf2?auto=format&fit=crop&w=1800&q=84'
    };
    if(hero&&map[page]&&!hero.classList.contains('media')){
      hero.classList.add('media');const img=document.createElement('img');img.src=map[page];img.alt='';img.loading='eager';hero.prepend(img);
    }

    const addControls=track=>{
      if(!track||track.dataset.contentRail==='1')return;track.dataset.contentRail='1';
      const shell=document.createElement('div');shell.className='content-rail-shell';track.parentNode.insertBefore(shell,track);shell.appendChild(track);
      const c=document.createElement('div');c.className='content-rail-controls';c.innerHTML=`<button type="button" data-prev aria-label="Anterior">${icon('arrow-left')}</button><button type="button" data-next aria-label="Siguiente">${icon('arrow-right')}</button>`;shell.insertBefore(c,track);
      const sync=()=>{const overflow=track.scrollWidth>track.clientWidth+8;c.hidden=!overflow;$('[data-prev]',c).disabled=track.scrollLeft<4;$('[data-next]',c).disabled=track.scrollLeft+track.clientWidth>=track.scrollWidth-5};
      const go=d=>track.scrollBy({left:(d==='next'?1:-1)*Math.max(260,track.clientWidth*.8),behavior:reduce?'auto':'smooth'});
      $('[data-prev]',c).addEventListener('click',()=>go('prev'));$('[data-next]',c).addEventListener('click',()=>go('next'));track.addEventListener('scroll',()=>requestAnimationFrame(sync),{passive:true});new ResizeObserver(sync).observe(track);setTimeout(sync,120);
    };
    if(matchMedia('(max-width: 1000px)').matches){$$('.explain-grid,.editorial-side,.editorial-grid,.community-grid').forEach(addControls)}
    window.lucide?.createIcons({attrs:{'stroke-width':1.7}});
  };
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
