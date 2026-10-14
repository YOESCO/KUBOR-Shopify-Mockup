(()=>{if(!document.querySelector('link[href^="sprint1g.css"]')){const l=document.createElement('link');l.rel='stylesheet';l.href='sprint1g.css?v=20261014-s1g';document.head.appendChild(l)}if(!document.querySelector('script[src^="sprint1g.js"]')){const s=document.createElement('script');s.src='sprint1g.js?v=20261014-s1g';s.async=false;document.head.appendChild(s)}})();

document.addEventListener('DOMContentLoaded',()=>{
  const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
  const CART_KEY='kubor-core-v4-cart';
  const money=v=>Number(String(v||'').replace(/[^0-9.]/g,''))||0;
  const fmt=v=>new Intl.NumberFormat('es-MX',{style:'currency',currency:'MXN',maximumFractionDigits:0}).format(v);
  const getCart=()=>{try{return JSON.parse(localStorage.getItem(CART_KEY))||{items:[]}}catch{return{items:[]}}};
  const setCart=c=>{localStorage.setItem(CART_KEY,JSON.stringify(c));renderCartPage();window.dispatchEvent(new StorageEvent('storage',{key:CART_KEY,newValue:JSON.stringify(c)}))};

  function renderCartPage(){
    const list=$('[data-cart-page-items]'); if(!list)return;
    const c=getCart(); const count=c.items.reduce((n,x)=>n+(x.qty||1),0); const subtotal=c.items.reduce((n,x)=>n+money(x.price)*(x.qty||1),0);
    $$('[data-cart-page-count]').forEach(x=>x.textContent=count);
    $$('[data-cart-page-subtotal]').forEach(x=>x.textContent=`${fmt(subtotal)} MXN`);
    const remain=Math.max(0,1499-subtotal),progress=Math.min(100,subtotal/1499*100);
    const ship=$('[data-cart-page-ship]');if(ship)ship.innerHTML=remain?`Te faltan <b>${fmt(remain)}</b> para envío gratis.`:'<b>¡Ya tienes envío gratis!</b>';
    const bar=$('[data-cart-progress]');if(bar)bar.style.width=`${progress}%`;
    if(!c.items.length){list.innerHTML='<div class="cart-empty"><i data-lucide="shopping-bag"></i><h2 class="k-display">Tu carrito está vacío</h2><p>Explora bicicletas, accesorios y componentes para empezar.</p><a href="all-collections.html" class="k-btn k-btn-dark mt-5">Explorar colecciones</a></div>';window.lucide?.createIcons();return}
    list.innerHTML=c.items.map((x,i)=>`<article class="cart-page-line" data-cart-page-index="${i}"><img src="${x.image||''}" alt="${x.title}"><div><h3>${x.title}</h3><p>${x.size?`Talla ${x.size}`:''}${x.color?` · ${x.color}`:''}</p><b style="font-size:11px">${x.price}</b><div class="cart-qty-page"><button data-cart-page-action="minus" aria-label="Reducir cantidad">−</button><span>${x.qty}</span><button data-cart-page-action="plus" aria-label="Aumentar cantidad">+</button></div><button data-cart-page-action="remove" class="cart-remove">Eliminar</button></div><div style="text-align:right"><b style="font-size:12px">${fmt(money(x.price)*(x.qty||1))}</b></div></article>`).join('');
  }
  document.addEventListener('click',e=>{const b=e.target.closest('[data-cart-page-action]');if(!b)return;const row=b.closest('[data-cart-page-index]'),idx=Number(row?.dataset.cartPageIndex),c=getCart(),item=c.items[idx];if(!item)return;if(b.dataset.cartPageAction==='plus')item.qty++;if(b.dataset.cartPageAction==='minus')item.qty=Math.max(1,item.qty-1);if(b.dataset.cartPageAction==='remove')c.items.splice(idx,1);setCart(c)});
  renderCartPage();addEventListener('storage',e=>{if(!e.key||e.key===CART_KEY)renderCartPage()});

  // Coupon feedback only for HTML prototype.
  const coupon=$('[data-coupon-form]');coupon?.addEventListener('submit',e=>{e.preventDefault();const out=$('[data-coupon-feedback]');if(out){out.textContent='Código aplicado en modo demostración.';out.hidden=false}});

  // Search results filtering.
  const input=$('[data-search-page-input]'),cards=$$('[data-search-result]'),rows=$$('[data-search-content]'),count=$('[data-search-count]'),empty=$('[data-search-empty]');
  const filterSearch=term=>{const q=(term||'').trim().toLowerCase();let visible=0;cards.forEach(el=>{const hay=(el.dataset.search||el.textContent).toLowerCase();const show=!q||hay.includes(q);el.hidden=!show;if(show)visible++});rows.forEach(el=>{const hay=(el.dataset.search||el.textContent).toLowerCase();el.hidden=!!q&&!hay.includes(q)});if(count)count.textContent=`${visible} resultado${visible===1?'':'s'}`;if(empty)empty.hidden=visible>0};
  input?.addEventListener('input',e=>filterSearch(e.target.value));
  $$('[data-search-chip]').forEach(b=>b.addEventListener('click',()=>{const q=b.dataset.searchChip||b.textContent.trim();$$('[data-search-chip]').forEach(x=>x.classList.toggle('is-active',x===b));if(input){input.value=q;filterSearch(q);input.focus()}}));
  $$('[data-search-tab]').forEach(b=>b.addEventListener('click',()=>{$$('[data-search-tab]').forEach(x=>x.classList.toggle('is-active',x===b));const type=b.dataset.searchTab;cards.forEach(el=>{const show=type==='all'||el.dataset.type===type;el.hidden=!show});const visible=cards.filter(x=>!x.hidden).length;if(count)count.textContent=`${visible} resultado${visible===1?'':'s'}`;if(empty)empty.hidden=visible>0}));
  if(input)filterSearch(input.value);

  const badge=document.createElement('div');badge.textContent='Sprint 1C · 2026.10.14';badge.style.cssText='position:fixed;right:10px;bottom:30px;z-index:174;background:rgba(6,16,25,.78);color:#fff;padding:5px 7px;font:800 7px Inter,sans-serif;letter-spacing:.08em;text-transform:uppercase;pointer-events:none';document.body.appendChild(badge);
});