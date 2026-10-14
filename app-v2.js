document.addEventListener('DOMContentLoaded',()=>{
  const BUILD='2026.10.13-shell1';
  window.KUBOR_BUILD=BUILD;
  const $=(s,r=document)=>r.querySelector(s);
  const $$=(s,r=document)=>[...r.querySelectorAll(s)];
  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const icon=()=>window.lucide&&lucide.createIcons({attrs:{'stroke-width':1.65}});

  const isHome=/home-v2\.html$|\/$/.test(location.pathname);

  /* Replace every legacy page header with one shared shell. */
  const oldHeader=$('header');
  const shell=document.createElement('header');
  shell.id='kubor-global-header';
  shell.className=`z-[170] w-full text-white border-b border-white/10 ${isHome?'absolute top-8 left-0 bg-transparent':'sticky top-0 bg-[#07131b]'}`;
  shell.innerHTML=`
    <div class="ref-section h-[68px] grid grid-cols-[132px_1fr_auto] lg:grid-cols-[170px_1fr_auto] items-center gap-4">
      <a href="home-v2.html" class="relative z-10"><img src="assets/logos/KUBOR_only_clear.svg" alt="KUBOR" class="w-[126px] md:w-[145px]"></a>
      <nav class="hidden lg:flex items-center justify-center gap-7 text-[11px] font-extrabold uppercase tracking-[.07em]">
        <button type="button" data-nav-mega class="py-6">MTB</button>
        <a href="discipline-road.html" class="py-6">Ruta</a>
        <a href="discipline-gravel.html" class="py-6">Gravel</a>
        <a href="discipline-urban.html" class="py-6">Urbanas</a>
        <a href="discipline-electric.html" class="py-6">Eléctricas</a>
        <a href="collection-v2.html" class="py-6">Accesorios</a>
        <a href="collection-v2.html" class="py-6 text-[#D7FF38]">Ofertas</a>
      </nav>
      <div class="flex items-center justify-end gap-1">
        <button type="button" data-nav-search aria-label="Buscar" class="w-10 h-10 grid place-items-center"><i data-lucide="search" class="w-5"></i></button>
        <a href="account.html" aria-label="Mi cuenta" class="hidden sm:grid w-10 h-10 place-items-center"><i data-lucide="user" class="w-5"></i></a>
        <a href="wishlist.html" aria-label="Favoritos" class="hidden md:grid w-10 h-10 place-items-center"><i data-lucide="heart" class="w-5"></i></a>
        <a href="cart.html" aria-label="Carrito" class="relative w-10 h-10 grid place-items-center"><i data-lucide="shopping-bag" class="w-5"></i><span data-cart-count class="absolute -top-0.5 -right-0.5 min-w-4 h-4 px-1 rounded-full bg-[#00E4FE] text-[#07131b] text-[8px] font-black grid place-items-center">0</span></a>
        <button type="button" data-nav-menu aria-label="Abrir menú" class="lg:hidden w-10 h-10 grid place-items-center"><i data-lucide="menu" class="w-5"></i></button>
      </div>
    </div>
    <div data-mega class="hidden absolute left-0 right-0 top-full bg-white text-[#253045] shadow-xl border-t border-slate-200">
      <div class="ref-section grid grid-cols-12 gap-7 py-7">
        <div class="col-span-3"><p class="text-[9px] uppercase tracking-[.14em] text-cyan-600 font-black mb-3">MTB</p><div class="space-y-3 text-sm font-bold"><a href="discipline-mtb.html" class="block">Todas las MTB</a><a href="collection-v2.html" class="block">Sport</a><a href="collection-v2.html" class="block">XC</a><a href="collection-v2.html" class="block">Trail</a></div></div>
        <div class="col-span-3"><p class="text-[9px] uppercase tracking-[.14em] text-cyan-600 font-black mb-3">Explora</p><div class="space-y-3 text-sm font-bold"><a href="size-guide.html" class="block">Guía de tallas</a><a href="comparison.html" class="block">Comparador</a><a href="brand-kubor.html" class="block">Tecnología KUBOR</a><a href="dealer-locator.html" class="block">Distribuidores</a></div></div>
        <a href="discipline-mtb.html" class="col-span-3 bg-[#07131b] text-white p-5 min-h-[180px] flex flex-col justify-end"><span class="text-[9px] uppercase text-[#00E4FE] font-black">Colección</span><b class="font-display text-3xl uppercase mt-1">Mountain Bike</b></a>
        <a href="product-v2.html" class="col-span-3 bg-slate-100 p-5 min-h-[180px] flex flex-col justify-end"><span class="text-[9px] uppercase text-cyan-700 font-black">Destacada</span><b class="font-display text-3xl uppercase mt-1">X1 Pro</b></a>
      </div>
    </div>`;
  if(oldHeader) oldHeader.replaceWith(shell); else document.body.prepend(shell);

  /* Global overlay for mobile menu and search. */
  const layer=document.createElement('div');
  layer.id='kubor-global-layer';
  layer.className='fixed inset-0 z-[220] hidden';
  layer.innerHTML=`
    <div data-backdrop class="absolute inset-0 bg-black/65"></div>
    <aside data-menu-panel class="absolute inset-y-0 right-0 w-[88vw] max-w-[400px] bg-[#07131b] text-white translate-x-full transition-transform duration-200 shadow-2xl overflow-y-auto">
      <div class="h-16 px-5 border-b border-white/10 flex items-center justify-between"><img src="assets/logos/KUBOR_only_clear.svg" alt="KUBOR" class="w-[120px]"><button data-close aria-label="Cerrar" class="w-11 h-11 grid place-items-center"><i data-lucide="x"></i></button></div>
      <nav class="p-5">
        <a href="discipline-mtb.html" class="flex justify-between py-4 border-b border-white/10 font-black uppercase">MTB <span>→</span></a>
        <a href="discipline-road.html" class="flex justify-between py-4 border-b border-white/10 font-black uppercase">Ruta <span>→</span></a>
        <a href="discipline-gravel.html" class="flex justify-between py-4 border-b border-white/10 font-black uppercase">Gravel <span>→</span></a>
        <a href="discipline-urban.html" class="flex justify-between py-4 border-b border-white/10 font-black uppercase">Urbanas <span>→</span></a>
        <a href="discipline-electric.html" class="flex justify-between py-4 border-b border-white/10 font-black uppercase">Eléctricas <span>→</span></a>
        <a href="collection-v2.html" class="flex justify-between py-4 border-b border-white/10 font-black uppercase">Accesorios <span>→</span></a>
      </nav>
      <div class="p-5 grid grid-cols-2 gap-2"><button data-menu-search class="h-12 border border-white/20 font-bold"><i data-lucide="search" class="inline w-4 mr-2"></i>Buscar</button><a href="account.html" class="h-12 border border-white/20 grid place-items-center font-bold">Mi cuenta</a></div>
      <div class="p-5 pt-0 grid grid-cols-2 gap-2"><a href="wishlist.html" class="h-12 border border-white/20 grid place-items-center font-bold">Wishlist</a><a href="cart.html" class="h-12 border border-white/20 grid place-items-center font-bold">Carrito (<span data-cart-count>0</span>)</a></div>
    </aside>
    <aside data-search-panel class="absolute inset-y-0 right-0 w-full max-w-[480px] bg-white translate-x-full transition-transform duration-200 shadow-2xl overflow-y-auto">
      <div class="h-16 px-5 border-b flex items-center justify-between"><b class="uppercase">Buscar</b><button data-close aria-label="Cerrar" class="w-11 h-11 grid place-items-center"><i data-lucide="x"></i></button></div>
      <div class="p-5"><label class="min-h-[52px] border flex items-center gap-3 px-4"><i data-lucide="search" class="w-5"></i><input data-search-input class="flex-1 outline-none text-base" placeholder="Buscar productos, categorías..."></label><div data-search-results class="mt-5"></div></div>
    </aside>`;
  document.body.appendChild(layer);

  const menuPanel=$('[data-menu-panel]',layer), searchPanel=$('[data-search-panel]',layer), mega=$('[data-mega]',shell);
  const lock=on=>{document.documentElement.classList.toggle('overflow-hidden',on);window.__kuborLenis&&(on?window.__kuborLenis.stop():window.__kuborLenis.start())};
  const closePanels=()=>{menuPanel.classList.add('translate-x-full');searchPanel.classList.add('translate-x-full');mega.classList.add('hidden');setTimeout(()=>{layer.classList.add('hidden');lock(false)},180)};
  const openMenu=()=>{layer.classList.remove('hidden');searchPanel.classList.add('translate-x-full');requestAnimationFrame(()=>menuPanel.classList.remove('translate-x-full'));lock(true)};
  const openSearch=()=>{layer.classList.remove('hidden');menuPanel.classList.add('translate-x-full');requestAnimationFrame(()=>searchPanel.classList.remove('translate-x-full'));lock(true);renderSearch('');setTimeout(()=>$('[data-search-input]',layer)?.focus(),220)};
  $('[data-nav-menu]',shell)?.addEventListener('click',openMenu);
  $('[data-nav-search]',shell)?.addEventListener('click',openSearch);
  $('[data-nav-mega]',shell)?.addEventListener('click',()=>mega.classList.toggle('hidden'));
  $('[data-menu-search]',layer)?.addEventListener('click',openSearch);
  $$('[data-close]',layer).forEach(b=>b.addEventListener('click',closePanels));
  $('[data-backdrop]',layer)?.addEventListener('click',closePanels);
  document.addEventListener('keydown',e=>{if(e.key==='Escape')closePanels()});
  document.addEventListener('click',e=>{if(!mega.classList.contains('hidden')&&!shell.contains(e.target))mega.classList.add('hidden')});

  /* Predictive search mock */
  const catalog=[
    {title:'KUBOR X1 Pro',meta:'MTB Trail · 29”',price:'$49,999 MXN',href:'product-v2.html'},
    {title:'KUBOR Tornado',meta:'XC Hardtail · 29”',price:'$24,999 MXN',href:'product-v2.html'},
    {title:'KUBOR Calypso 4',meta:'MTB · 29”',price:'$8,999 MXN',href:'product-v2.html'},
    {title:'KUBOR Mallory',meta:'Full Suspension',price:'$12,999 MXN',href:'product-v2.html'},
    {title:'Colección MTB',meta:'Explorar bicicletas',price:'',href:'collection-v2.html'},
    {title:'Ruta',meta:'Disciplina',price:'',href:'discipline-road.html'},
    {title:'Gravel',meta:'Disciplina',price:'',href:'discipline-gravel.html'}
  ];
  const searchMarkup=q=>{const s=q.trim().toLowerCase();const matches=s?catalog.filter(x=>(x.title+' '+x.meta).toLowerCase().includes(s)).slice(0,6):catalog.slice(0,5);return `<div class="text-[10px] uppercase tracking-[.14em] text-slate-400 font-black mb-2">${s?'Resultados':'Sugerencias'}</div>${matches.map(x=>`<a href="${x.href}" class="flex items-center justify-between gap-4 py-4 border-b"><div><b class="text-sm text-[#07131b]">${x.title}</b><p class="text-xs text-slate-400 mt-1">${x.meta}</p></div><span class="text-xs font-bold whitespace-nowrap">${x.price||'→'}</span></a>`).join('')||'<div class="py-8 text-sm text-slate-400">No encontramos resultados.</div>'}`};
  const renderSearch=q=>{$('[data-search-results]',layer).innerHTML=searchMarkup(q)};
  $('[data-search-input]',layer)?.addEventListener('input',e=>renderSearch(e.target.value));

  /* Cart state */
  const STORE='kubor-mock-cart-v1';
  const readCart=()=>{try{return JSON.parse(localStorage.getItem(STORE))||{items:[]}}catch{return{items:[]}}};
  const money=v=>Number(String(v||'').replace(/[^0-9.]/g,''))||0;
  const fmt=v=>new Intl.NumberFormat('es-MX',{style:'currency',currency:'MXN',maximumFractionDigits:0}).format(v);
  const cartCount=cart=>cart.items.reduce((n,x)=>n+(x.qty||1),0);
  const renderCart=cart=>{
    $$('[data-cart-count]').forEach(el=>el.textContent=cartCount(cart));
    const subtotal=cart.items.reduce((n,x)=>n+money(x.price)*(x.qty||1),0);
    $$('[data-cart-subtotal]').forEach(el=>el.textContent=`${fmt(subtotal)} MXN`);
    $$('[data-cart-items]').forEach(list=>{list.innerHTML=!cart.items.length?'<div class="py-12 text-center text-slate-400 text-sm">Tu carrito está vacío.</div>':cart.items.map((x,i)=>`<div data-cart-index="${i}" class="grid grid-cols-[72px_1fr_auto] gap-3 py-4 border-b"><img src="${x.image||''}" class="w-[72px] h-[64px] object-cover bg-slate-100" alt=""><div><b class="text-sm">${x.title}</b><p class="text-[10px] text-slate-500 mt-1">${x.size?`Talla ${x.size}`:''}${x.color?` · ${x.color}`:''}</p><div class="flex gap-2 items-center mt-2"><button data-cart-action="minus" class="w-8 h-8 border">−</button><span class="text-xs">${x.qty}</span><button data-cart-action="plus" class="w-8 h-8 border">+</button></div></div><div class="text-right"><b class="text-xs">${x.price||''}</b><button data-cart-action="remove" class="block ml-auto mt-3 text-[10px] uppercase text-slate-400">Quitar</button></div></div>`).join('')});
    icon();
  };
  const writeCart=cart=>{localStorage.setItem(STORE,JSON.stringify(cart));renderCart(cart);window.dispatchEvent(new CustomEvent('kubor:cart-change',{detail:cart}))};
  const currentSize=()=>$('.size-active')?.textContent.trim()||'M';
  const addToCart=button=>{const card=button.closest('[data-product-card],article')||document;const title=card.querySelector('h1,h2,h3')?.textContent.trim()||$('h1')?.textContent.trim()||'KUBOR Bike';const price=card.querySelector('[data-price],.price')?.textContent.trim()||[...card.querySelectorAll('*')].find(el=>/^\$[\d,.]+/.test(el.textContent.trim()))?.textContent.trim()||'';const image=card.querySelector('img')?.src||$('main img')?.src||'';const color=$('[data-selected-color]')?.textContent.trim()||'';const size=currentSize();const key=`${title}::${size}::${color}`;const cart=readCart();const old=cart.items.find(x=>x.key===key);old?old.qty++:cart.items.push({key,title,price,image,size,color,qty:1});writeCart(cart);toast(`${title} agregado al carrito`)};
  renderCart(readCart());
  window.addEventListener('storage',()=>renderCart(readCart()));

  /* Common interactions */
  const toastEl=document.createElement('div');
  toastEl.className='fixed left-1/2 bottom-6 z-[240] -translate-x-1/2 translate-y-6 opacity-0 pointer-events-none bg-[#07131b] text-white px-5 py-3 rounded-md shadow-2xl text-[10px] uppercase tracking-[.08em] font-black transition-all duration-300';
  document.body.appendChild(toastEl);
  let toastTimer; function toast(t){toastEl.textContent=t;toastEl.classList.remove('translate-y-6','opacity-0');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toastEl.classList.add('translate-y-6','opacity-0'),1600)}

  document.addEventListener('click',e=>{
    const action=e.target.closest('[data-cart-action]');
    if(action){e.preventDefault();const row=action.closest('[data-cart-index]');const cart=readCart();const idx=Number(row?.dataset.cartIndex);const item=cart.items[idx];if(!item)return;if(action.dataset.cartAction==='plus')item.qty++;if(action.dataset.cartAction==='minus')item.qty=Math.max(1,item.qty-1);if(action.dataset.cartAction==='remove')cart.items.splice(idx,1);writeCart(cart);return}
    const button=e.target.closest('button'); if(!button)return;
    const label=button.textContent.trim();
    if(/agregar al carrito|añadir al carrito|add to cart/i.test(label)){e.preventDefault();e.stopPropagation();addToCart(button)}
    if(/^(XS|S|M|L|XL)$/.test(label)){const group=button.parentElement;group?.querySelectorAll('button').forEach(b=>b.classList.remove('size-active','bg-kubor-cyan','text-[#07131b]'));button.classList.add('size-active')}
    if(button.querySelector('[data-lucide="heart"]')){button.classList.toggle('text-rose-500');button.classList.toggle('bg-rose-50')}
  });

  /* PDP gallery */
  $$('.grid.grid-cols-5,.grid.grid-cols-6').forEach(row=>{const imgs=$$('button img',row);if(imgs.length<2)return;const main=row.previousElementSibling?.querySelector('img');if(!main)return;$$('button',row).forEach(b=>b.addEventListener('click',()=>{const img=b.querySelector('img');if(!img)return;$$('button',row).forEach(x=>x.classList.remove('thumb-active'));b.classList.add('thumb-active');main.src=img.src.replace(/w=300/g,'w=1400')}))});

  /* Home transparent header becomes solid on scroll; all other pages stay solid. */
  const syncHeader=()=>{if(!isHome)return;shell.classList.toggle('bg-[#07131b]',scrollY>24);shell.classList.toggle('backdrop-blur-xl',scrollY>24);shell.classList.toggle('fixed',scrollY>24);shell.classList.toggle('absolute',scrollY<=24)};
  syncHeader();addEventListener('scroll',syncHeader,{passive:true});

  if(window.Lenis&&!reduced){const lenis=new Lenis({duration:.88,smoothWheel:true,wheelMultiplier:.82,touchMultiplier:1.05});window.__kuborLenis=lenis;lenis.on('scroll',()=>window.ScrollTrigger&&ScrollTrigger.update());const raf=t=>{lenis.raf(t);requestAnimationFrame(raf)};requestAnimationFrame(raf)}
  if(window.gsap&&window.ScrollTrigger&&!reduced){gsap.registerPlugin(ScrollTrigger);$$('[data-reveal]').forEach(el=>gsap.fromTo(el,{opacity:0,y:20},{opacity:1,y:0,duration:.55,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 90%',once:true}}))}

  const badge=document.createElement('div');badge.textContent=`KUBOR build ${BUILD}`;Object.assign(badge.style,{position:'fixed',right:'8px',bottom:'8px',zIndex:'250',padding:'5px 8px',background:'rgba(6,16,25,.8)',color:'rgba(255,255,255,.68)',font:'600 9px/1 Inter,system-ui',border:'1px solid rgba(255,255,255,.12)',borderRadius:'4px',pointerEvents:'none'});document.body.appendChild(badge);
  icon();setTimeout(icon,100);
});