(()=>{
  const init=()=>{
    const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
    document.body.classList.add('sprint1j-breathing');
    const page=(location.pathname.split('/').pop()||'').toLowerCase();
    if(page!=='collection-v2.html') return;

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
    if(heroChips[0]){
      heroChips[0].classList.add('is-active');
      heroChips[0].setAttribute('aria-pressed','true');
      heroChips[0].textContent='Todos';
    }

    const activeRow=$('.plp-active-chips');
    if(activeRow){
      const sortLabel=$('[data-sort-label]',activeRow);
      activeRow.innerHTML='<button data-filter-chip aria-pressed="true" class="plp-active-chip is-active">MTB ×</button><button data-filter-chip aria-pressed="false" class="plp-active-chip">R29</button><button data-filter-chip aria-pressed="false" class="plp-active-chip">Aluminio</button>';
      if(sortLabel) activeRow.appendChild(sortLabel);
    }

    // Remove fake filter counts/check state while the collection is not connected to Shopify data.
    $$('.plp-filter-list label').forEach(label=>{
      label.childNodes.forEach(n=>{if(n.nodeType===Node.TEXT_NODE)n.textContent=n.textContent.replace(/\s*\(\d+\)/g,'')});
    });
    $$('.plp-filters input[type="checkbox"]').forEach(input=>input.checked=false);
  };
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
