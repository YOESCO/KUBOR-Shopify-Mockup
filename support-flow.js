document.addEventListener('DOMContentLoaded',()=>{
  const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];

  // Help center search/filter.
  const helpInput=$('[data-help-search]');
  const helpCards=$$('[data-help-card]');
  const filterHelp=()=>{const q=(helpInput?.value||'').trim().toLowerCase();let visible=0;helpCards.forEach(c=>{const show=!q||c.textContent.toLowerCase().includes(q);c.hidden=!show;if(show)visible++});const out=$('[data-help-count]');if(out)out.textContent=`${visible} tema${visible===1?'':'s'}`};
  helpInput?.addEventListener('input',filterHelp);

  // FAQ search + categories.
  const faqInput=$('[data-faq-search]');
  const faqItems=$$('[data-faq-item]');
  let faqCategory='all';
  const filterFaq=()=>{const q=(faqInput?.value||'').trim().toLowerCase();let visible=0;faqItems.forEach(item=>{const matchesCategory=faqCategory==='all'||item.dataset.category===faqCategory;const matchesQuery=!q||item.textContent.toLowerCase().includes(q);const show=matchesCategory&&matchesQuery;item.hidden=!show;if(show)visible++});const out=$('[data-faq-count]');if(out)out.textContent=`${visible} respuesta${visible===1?'':'s'}`};
  $$('[data-faq-category]').forEach(b=>b.addEventListener('click',()=>{$$('[data-faq-category]').forEach(x=>x.classList.remove('is-active'));b.classList.add('is-active');faqCategory=b.dataset.faqCategory;filterFaq()}));
  faqInput?.addEventListener('input',filterFaq);

  // Contact form mock validation.
  $$('[data-support-form]').forEach(form=>form.addEventListener('submit',e=>{e.preventDefault();form.querySelectorAll('.support-error').forEach(x=>x.remove());let valid=true;form.querySelectorAll('[required]').forEach(field=>{if(!field.value.trim()){valid=false;const er=document.createElement('div');er.className='support-error';er.textContent='Este campo es obligatorio.';field.after(er)}else if(field.type==='email'&&!/^\S+@\S+\.\S+$/.test(field.value)){valid=false;const er=document.createElement('div');er.className='support-error';er.textContent='Ingresa un correo válido.';field.after(er)}});const ok=form.parentElement.querySelector('[data-form-success]');if(ok)ok.hidden=!valid;if(valid)form.reset()}));

  // Dealer filtering.
  const dealerInput=$('[data-dealer-search]');
  const dealerCards=$$('[data-dealer-card]');
  const dealerFilters=new Set();
  const filterDealers=()=>{const q=(dealerInput?.value||'').trim().toLowerCase();let visible=0;dealerCards.forEach(card=>{const matchesQ=!q||card.textContent.toLowerCase().includes(q);const services=(card.dataset.services||'').split(',');const matchesService=!dealerFilters.size||[...dealerFilters].every(x=>services.includes(x));const show=matchesQ&&matchesService;card.hidden=!show;if(show)visible++});const out=$('[data-dealer-count]');if(out)out.textContent=`${visible} resultado${visible===1?'':'s'}`};
  dealerInput?.addEventListener('input',filterDealers);
  $$('[data-dealer-filter]').forEach(b=>b.addEventListener('click',()=>{const key=b.dataset.dealerFilter;if(dealerFilters.has(key))dealerFilters.delete(key);else dealerFilters.add(key);b.classList.toggle('is-active',dealerFilters.has(key));filterDealers()}));

  // Gift card amount selection and cart adapter.
  const amounts=$$('[data-gift-amount]');
  amounts.forEach(b=>b.addEventListener('click',()=>{amounts.forEach(x=>x.classList.remove('is-active'));b.classList.add('is-active');const price=$('[data-gift-price]');if(price)price.textContent=b.dataset.giftAmount;const hidden=$('[data-gift-value]');if(hidden)hidden.value=b.dataset.giftAmount}));
  const giftForm=$('[data-gift-form]');
  giftForm?.addEventListener('submit',e=>{e.preventDefault();const amount=$('[data-gift-value]')?.value||'$2,000 MXN';const recipient=$('[name="recipient"]')?.value.trim();const email=$('[name="recipient_email"]')?.value.trim();const status=$('[data-gift-success]');if(!recipient||!email){if(status){status.hidden=false;status.textContent='Completa nombre y correo del destinatario.';status.style.color='#b91c1c';status.style.background='#fef2f2';status.style.borderColor='#fecaca'}return}if(status){status.hidden=false;status.textContent=`Tarjeta ${amount} preparada para ${recipient}. En Shopify se agregará la variante correspondiente al carrito.`;status.style.color='#047857';status.style.background='#ecfdf5';status.style.borderColor='#bbf7d0'}});

  // Collection filter chips.
  let collectionFilter='all';
  const collectionTiles=$$('[data-collection-tile]');
  const applyCollectionFilter=()=>{collectionTiles.forEach(t=>{t.hidden=collectionFilter!=='all'&&t.dataset.group!==collectionFilter});const out=$('[data-collection-count]');if(out)out.textContent=`${collectionTiles.filter(t=>!t.hidden).length} colecciones`};
  $$('[data-collection-filter]').forEach(b=>b.addEventListener('click',()=>{$$('[data-collection-filter]').forEach(x=>x.classList.remove('is-active'));b.classList.add('is-active');collectionFilter=b.dataset.collectionFilter;applyCollectionFilter()}));

  // Compare differences + remove mock columns.
  const compare=$('[data-compare-grid]');
  if(compare){
    const rows=$$('[data-compare-row]',compare);
    rows.forEach(row=>{const vals=$$('[data-value]',row).map(x=>x.textContent.trim());if(new Set(vals).size>1)row.classList.add('compare-highlight')});
    $$('[data-remove-product]',compare).forEach(b=>b.addEventListener('click',()=>{const col=Number(b.dataset.removeProduct);$$(`[data-col="${col}"]`,compare).forEach(x=>{x.innerHTML='<div style="min-height:100px;display:grid;place-items:center;color:#81909a;font-size:10px;text-transform:uppercase;font-weight:900">Agregar bicicleta</div>';x.classList.remove('compare-highlight')})}));
  }

  window.lucide?.createIcons();
});