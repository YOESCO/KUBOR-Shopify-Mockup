(()=>{
  const loadExperience=()=>{
    if(!document.querySelector('link[href^="section-library-experience.css"]')){
      const l=document.createElement('link');l.rel='stylesheet';l.href='section-library-experience.css?v=20261015';document.head.appendChild(l);
    }
    if(!document.querySelector('script[src^="section-library-experience.js"]')){
      const s=document.createElement('script');s.src='section-library-experience.js?v=20261015';s.defer=true;document.head.appendChild(s);
    }
  };

  const init=()=>{
    loadExperience();
    const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
    const toolbar=$('.lib-toolbar-inner');
    if(toolbar&&!$('[data-filter="motion"]',toolbar)){
      const count=toolbar.querySelector('[data-lib-count]')?.parentElement;
      const filters=[['motion','Motion'],['storyx','Story'],['interactive','Interactive'],['cta','CTA']];
      filters.forEach(([value,label])=>{const b=document.createElement('button');b.className='lib-filter';b.dataset.filter=value;b.textContent=label;toolbar.insertBefore(b,count||null)});
    }

    let active=document.querySelector('.lib-filter.is-active')?.dataset.filter||'all';
    const apply=()=>{
      const search=$('[data-lib-search]');
      const cards=$$('[data-lib-card]');
      const groups=$$('[data-lib-group]');
      const q=(search?.value||'').trim().toLowerCase();
      cards.forEach(card=>{
        const cats=(card.dataset.category||'').split(' ');
        const text=(card.textContent||'').toLowerCase();
        const matchFilter=active==='all'||cats.includes(active);
        const matchQuery=!q||text.includes(q);
        card.hidden=!(matchFilter&&matchQuery);
      });
      groups.forEach(group=>{group.hidden=!$$('[data-lib-card]',group).some(c=>!c.hidden)});
      const count=$('[data-lib-count]');if(count)count.textContent=cards.filter(c=>!c.hidden).length;
      const statValues=$$('.lib-stat b');
      if(statValues[2])statValues[2].textContent=`${cards.length}+`;
    };

    $$('[data-filter]').forEach(b=>{
      if(b.dataset.bound==='1')return;b.dataset.bound='1';
      b.addEventListener('click',()=>{active=b.dataset.filter;$$('[data-filter]').forEach(x=>x.classList.toggle('is-active',x===b));apply()});
    });
    const search=$('[data-lib-search]');if(search&&search.dataset.bound!=='1'){search.dataset.bound='1';search.addEventListener('input',apply)}
    $$('[data-jump]').forEach(a=>{
      if(a.dataset.bound==='1')return;a.dataset.bound='1';
      a.addEventListener('click',e=>{const id=a.getAttribute('href');if(id?.startsWith('#')){const target=$(id);if(target){e.preventDefault();target.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'})}}});
    });
    $$('[data-copy-name]').forEach(btn=>{
      if(btn.dataset.bound==='1')return;btn.dataset.bound='1';
      btn.addEventListener('click',async()=>{const name=btn.dataset.copyName;try{await navigator.clipboard.writeText(name);const old=btn.textContent;btn.textContent='Copiado';setTimeout(()=>btn.textContent=old,1000)}catch{}})
    });
    apply();window.lucide?.createIcons({attrs:{'stroke-width':1.7}});
  };

  document.addEventListener('kubor:library-updated',()=>setTimeout(init,0));
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();