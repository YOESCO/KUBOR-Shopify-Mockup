(()=>{
  const init=()=>{
    const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
    const search=$('[data-lib-search]');
    const filters=$$('[data-filter]');
    const cards=$$('[data-lib-card]');
    const groups=$$('[data-lib-group]');
    let active='all';
    const apply=()=>{
      const q=(search?.value||'').trim().toLowerCase();
      cards.forEach(card=>{
        const cats=(card.dataset.category||'').split(' ');
        const text=(card.textContent||'').toLowerCase();
        const matchFilter=active==='all'||cats.includes(active);
        const matchQuery=!q||text.includes(q);
        card.hidden=!(matchFilter&&matchQuery);
      });
      groups.forEach(group=>{
        const visible=$$('[data-lib-card]',group).some(c=>!c.hidden);
        group.hidden=!visible;
      });
      const visible=cards.filter(c=>!c.hidden).length;
      const count=$('[data-lib-count]');if(count)count.textContent=visible;
    };
    filters.forEach(b=>b.addEventListener('click',()=>{active=b.dataset.filter;filters.forEach(x=>x.classList.toggle('is-active',x===b));apply()}));
    search?.addEventListener('input',apply);
    $$('[data-jump]').forEach(a=>a.addEventListener('click',e=>{const id=a.getAttribute('href');if(id?.startsWith('#')){const target=$(id);if(target){e.preventDefault();target.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'})}}}));
    $$('[data-copy-name]').forEach(btn=>btn.addEventListener('click',async()=>{const name=btn.dataset.copyName;try{await navigator.clipboard.writeText(name);const old=btn.textContent;btn.textContent='Copiado';setTimeout(()=>btn.textContent=old,1000)}catch{}}));
    apply();
    window.lucide?.createIcons({attrs:{'stroke-width':1.7}});
  };
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();