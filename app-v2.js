document.addEventListener('DOMContentLoaded',()=>{
  const BUILD='2026.10.13-ui2';
  window.KUBOR_BUILD=BUILD;
  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
  const icon=()=>window.lucide&&lucide.createIcons({attrs:{'stroke-width':1.65}});

  /* Build marker */
  const badge=document.createElement('div');
  badge.textContent=`KUBOR build ${BUILD}`;
  Object.assign(badge.style,{position:'fixed',right:'8px',bottom:'8px',zIndex:'220',padding:'5px 8px',background:'rgba(6,16,25,.8)',color:'rgba(255,255,255,.68)',font:'600 9px/1 Inter,system-ui',border:'1px solid rgba(255,255,255,.12)',borderRadius:'4px',backdropFilter:'blur(8px)',pointerEvents:'none'});
  document.body.appendChild(badge);

  /* Smooth scroll */
  if(window.Lenis&&!reduced){
    const lenis=new Lenis({duration:.88,smoothWheel:true,wheelMultiplier:.82,touchMultiplier:1.05});
    window.__kuborLenis=lenis;
    lenis.on('scroll',()=>window.ScrollTrigger&&ScrollTrigger.update());
    const raf=t=>{lenis.raf(t);requestAnimationFrame(raf)};requestAnimationFrame(raf);
  }

  /* Universal fallback navigation: independent from Alpine/page markup. */
  const fallback=document.createElement('div');
  fallback.id='kubor-global-layer';
  fallback.className='fixed inset-0 z-[200] hidden';
  fallback.innerHTML=`<div data-global-backdrop class="absolute inset-0 bg-black/65"></div>
    <aside data-global-menu class="absolute inset-y-0 right-0 w-[88vw] max-w-[400px] bg-[#07131b] text-white translate-x-full transition-transform duration-200 shadow-2xl overflow-y-auto">
      <div class="h-16 px-5 border-b border-white/10 flex items-center justify-between"><img src="assets/logos/KUBOR_only_clear.svg" alt="KUBOR" class="w-[120px]"><button data-global-close class="w-11 h-11 grid place-items-center" aria-label="Cerrar"><i data-lucide="x"></i></button></div>
      <nav class="p-5"><a href="discipline-mtb.html" class="flex justify-between py-5 border-b border-white/10 text-lg font-black uppercase">MTB <span>→</span></a><a href="collection-v2.html" class="flex justify-between py-5 border-b border-white/10 text-lg font-black uppercase">Ruta <span>→</span></a><a href="collection-v2.html" class="flex justify-between py-5 border-b border-white/10 text-lg font-black uppercase">Gravel <span>→</span></a><a href="collection-v2.html" class="flex justify-between py-5 border-b border-white/10 text-lg font-black uppercase">Urbanas <span>→</span></a><a href="collection-v2.html" class="flex justify-between py-5 border-b border-white/10 text-lg font-black uppercase">Eléctricas <span>→</span></a></nav>
      <div class="p-5 grid grid-cols-2 gap-2"><button data-global-search class="h-12 border border-white/20 font-bold"><i data-lucide="search" class="inline w-4 mr-2"></i>Buscar</button><a href="cart.html" class="h-12 border border-white/20 grid place-items-center font-bold">Carrito (<span data-cart-count>0</span>)</a></div>
    </aside>
    <aside data-global-search-panel class="absolute inset-y-0 right-0 w-full max-w-[480px] bg-white translate-x-full transition-transform duration-200 shadow-2xl overflow-y-auto">
      <div class="h-16 px-5 border-b flex items-center justify-between"><b class="uppercase">Buscar</b><button data-global-close class="w-11 h-11 grid place-items-center" aria-label="Cerrar"><i data-lucide="x"></i></button></div>
      <div class="p-5"><label class="h-13 min-h-[52px] border flex items-center gap-3 px-4"><i data-lucide="search" class="w-5"></i><input data-global-search-input class="flex-1 outline-none text-base" placeholder="Buscar productos, categorías..."></label><div data-global-search-results class="mt-5"></div></div>
    </aside>`;
  document.body.appendChild(fallback);
  const menuPanel=$('[data-global-menu]',fallback), searchPanel=$('[data-global-search-panel]',fallback);
  const lock=on=>{document.documentElement.classList.toggle('overflow-hidden',on);window.__kuborLenis&&(on?window.__kuborLenis.stop():window.__kuborLenis.start())};
  const closeGlobal=()=>{menuPanel.classList.add('translate-x-full');searchPanel.classList.add('translate-x-full');setTimeout(()=>{fallback.classList.add('hidden');lock(false)},190)};
  const openMenu=()=>{fallback.classList.remove('hidden');searchPanel.classList.add('translate-x-full');requestAnimationFrame(()=>menuPanel.classList.remove('translate-x-full'));lock(true)};
  const openSearch=()=>{fallback.classList.remove('hidden');menuPanel.classList.add('translate-x-full');requestAnimationFrame(()=>{searchPanel.classList.remove('translate-x-full');setTimeout(()=>$('[data-global-search-input]',fallback)?.focus(),210)});lock(true);renderGlobalSearch('')};
  $$('[data-global-close]',fallback).forEach(b=>b.addEventListener('click',closeGlobal));
  $('[data-global-backdrop]',fallback).addEventListener('click',closeGlobal);
  $('[data-global-search]',fallback).addEventListener('click',openSearch);
  document.addEventListener('keydown',e=>{if(e.key==='Escape')closeGlobal()});

  const isMenuButton=b=>/openDrawer\(['"]menu['"]\)/.test(b.getAttribute('@click')||b.getAttribute('x-on:click')||'')||b.getAttribute('aria-label')?.toLowerCase().includes('menú')||b.querySelector('[data-lucide="menu"]');
  const isSearchButton=b=>/openDrawer\(['"]search['"]\)/.test(b.getAttribute('@click')||b.getAttribute('x-on:click')||'')||b.getAttribute('aria-label')?.toLowerCase().includes('buscar')||b.querySelector('[data-lucide="search"]');
  $$('header button').forEach(b=>{
    if(isMenuButton(b)) b.addEventListener('click',e=>{e.preventDefault();e.stopImmediatePropagation();openMenu()},{capture:true});
    else if(isSearchButton(b)) b.addEventListener('click',e=>{e.preventDefault();e.stopImmediatePropagation();openSearch()},{capture:true});
  });

  /* Ensure search icon exists in every header. */
  const header=$('header');
  if(header&&!$$('header button,header a').some(el=>el.getAttribute('aria-label')?.toLowerCase().includes('buscar')||el.querySelector('[data-lucide="search"]'))){
    const actions=$('header .flex.justify-end')||$('header .flex.items-center.justify-end');
    if(actions){const b=document.createElement('button');b.className='w-11 h-11 grid place-items-center';b.setAttribute('aria-label','Buscar');b.innerHTML='<i data-lucide="search" class="w-5"></i>';b.addEventListener('click',openSearch);actions.prepend(b)}
  }

  /* Predictive search */
  const catalog=[
    {title:'KUBOR X1 Pro',meta:'MTB Trail · 29”',price:'$49,999 MXN',href:'product-v2.html'},
    {title:'KUBOR Tornado',meta:'XC Hardtail · 29”',price:'$24,999 MXN',href:'product-v2.html'},
    {title:'KUBOR Calypso 4',meta:'MTB · 29”',price:'$8,999 MXN',href:'product-v2.html'},
    {title:'KUBOR Mallory',meta:'Full Suspension',price:'$12,999 MXN',href:'product-v2.html'},
    {title:'Colección MTB',meta:'Explorar bicicletas',price:'',href:'collection-v2.html'},
    {title:'Guía MTB',meta:'Elige tu disciplina',price:'',href:'discipline-mtb.html'}
  ];
  const searchMarkup=q=>{const s=q.trim().toLowerCase();const matches=s?catalog.filter(x=>(x.title+' '+x.meta).toLowerCase().includes(s)).slice(0,6):catalog.slice(0,5);return `<div class="text-[10px] uppercase tracking-[.14em] text-slate-400 font-black mb-2">${s?'Resultados':'Sugerencias'}</div>${matches.map(x=>`<a href="${x.href}" class="flex items-center justify-between gap-4 py-4 border-b"><div><b class="text-sm text-[#07131b]">${x.title}</b><p class="text-xs text-slate-400 mt-1">${x.meta}</p></div><span class="text-xs font-bold whitespace-nowrap">${x.price||'→'}</span></a>`).join('')||'<div class="py-8 text-sm text-slate-400">No encontramos resultados.</div>'}`};
  const renderGlobalSearch=q=>$('[data-global-search-results]',fallback).innerHTML=searchMarkup(q);
  $('[data-global-search-input]',fallback).addEventListener('input',e=>renderGlobalSearch(e.target.value));
  $$('aside input').forEach(input=>{if(/buscar/i.test(input.placeholder||'')){let out=input.closest('aside')?.querySelector('[data-search-results]');if(!out){out=document.createElement('div');out.dataset.searchResults='';out.className='mt-5';input.closest('label')?.after(out)}if(out){out.innerHTML=searchMarkup('');input.addEventListener('input',e=>out.innerHTML=searchMarkup(e.target.value))}}});

  /* Cart */
  const STORE='kubor-mock-cart-v1';
  const readCart=()=>{try{return JSON.parse(localStorage.getItem(STORE))||{items:[]}}catch{return{items:[]}}};
  const writeCart=cart=>{localStorage.setItem(STORE,JSON.stringify(cart));renderCart(cart);window.dispatchEvent(new CustomEvent('kubor:cart-change',{detail:cart}))};
  const money=v=>Number(String(v||'').replace(/[^0-9.]/g,''))||0;
  const fmt=v=>new Intl.NumberFormat('es-MX',{style:'currency',currency:'MXN',maximumFractionDigits:0}).format(v);
  const count=cart=>cart.items.reduce((n,x)=>n+(x.qty||1),0);
  const renderCart=cart=>{
    $$('[data-cart-count]').forEach(el=>el.textContent=count(cart));
    const subtotal=cart.items.reduce((n,x)=>n+money(x.price)*(x.qty||1),0);$$('[data-cart-subtotal]').forEach(el=>el.textContent=`${fmt(subtotal)} MXN`);
    $$('[data-cart-items]').forEach(list=>{list.innerHTML=!cart.items.length?'<div class="py-12 text-center text-slate-400 text-sm">Tu carrito está vacío.</div>':cart.items.map((x,i)=>`<div data-cart-index="${i}" class="grid grid-cols-[72px_1fr_auto] gap-3 py-4 border-b"><img src="${x.image||''}" class="w-[72px] h-[64px] object-cover bg-slate-100" alt=""><div><b class="text-sm">${x.title}</b><p class="text-[10px] text-slate-500 mt-1">Talla ${x.size||'M'}</p><div class="flex gap-2 items-center mt-2"><button data-cart-action="minus" class="w-8 h-8 border">−</button><span class="text-xs">${x.qty}</span><button data-cart-action="plus" class="w-8 h-8 border">+</button></div></div><div class="text-right"><b class="text-xs">${x.price}</b><button data-cart-action="remove" class="block ml-auto mt-3 text-[10px] uppercase text-slate-400">Quitar</button></div></div>`).join('')});icon();
  };
  const getSelection=()=>({size:$('[x-text="size"]')?.textContent.trim()||$('.size-active')?.textContent.trim()||'M',color:$('[x-text="color"]')?.textContent.trim()||''});
  const addToCart=button=>{const card=button.closest('[data-product-card],article')||document;const title=card.querySelector('h1,h2,h3')?.textContent.trim()||$('h1')?.textContent.trim()||'KUBOR Bike';const price=card.querySelector('[data-price],.price')?.textContent.trim()||[...card.querySelectorAll('*')].find(el=>/^\$[\d,.]+/.test(el.textContent.trim()))?.textContent.trim()||'';const image=card.querySelector('img')?.src||$('main img')?.src||'';const sel=getSelection();const key=`${title}::${sel.size}::${sel.color}`;const cart=readCart();const old=cart.items.find(x=>x.key===key);old?old.qty++:cart.items.push({key,title,price,image,size:sel.size,color:sel.color,qty:1});writeCart(cart);showToast(`${title} agregado al carrito`)};
  renderCart(readCart());window.addEventListener('storage',()=>renderCart(readCart()));

  /* Toast */
  const toast=document.createElement('div');toast.className='fixed left-1/2 bottom-6 z-[230] -translate-x-1/2 translate-y-6 opacity-0 pointer-events-none bg-[#07131b] text-white px-5 py-3 rounded-md shadow-2xl text-[10px] uppercase tracking-[.08em] font-black transition-all duration-300';document.body.appendChild(toast);let timer;function showToast(t){toast.textContent=t;toast.classList.remove('translate-y-6','opacity-0');clearTimeout(timer);timer=setTimeout(()=>toast.classList.add('translate-y-6','opacity-0'),1600)}

  document.addEventListener('click',e=>{
    const action=e.target.closest('[data-cart-action]');if(action){e.preventDefault();const row=action.closest('[data-cart-index]');const cart=readCart(),item=cart.items[Number(row?.dataset.cartIndex)];if(!item)return;if(action.dataset.cartAction==='plus')item.qty++;if(action.dataset.cartAction==='minus')item.qty=Math.max(1,item.qty-1);if(action.dataset.cartAction==='remove')cart.items.splice(Number(row.dataset.cartIndex),1);writeCart(cart);return}
    const button=e.target.closest('button');if(!button)return;const label=button.textContent.trim();if(/agregar al carrito|añadir al carrito|add to cart/i.test(label)){e.preventDefault();e.stopPropagation();addToCart(button)}if(button.querySelector('[data-lucide="heart"]')){button.classList.toggle('text-rose-500');button.classList.toggle('bg-rose-50')}
  });

  /* PDP gallery */
  $$('.grid.grid-cols-5,.grid.grid-cols-6').forEach(row=>{const imgs=$$('button img',row);if(imgs.length<2)return;const main=row.previousElementSibling?.querySelector('img');if(!main)return;$$('button',row).forEach(b=>b.addEventListener('click',()=>{const img=b.querySelector('img');if(!img)return;$$('button',row).forEach(x=>x.classList.remove('thumb-active'));b.classList.add('thumb-active');const src=img.src.replace(/w=300/g,'w=1400');if(window.gsap&&!reduced)gsap.to(main,{opacity:.25,duration:.12,onComplete:()=>{main.src=src;gsap.to(main,{opacity:1,duration:.18})}});else main.src=src}))});

  /* Header scroll + motion */
  const pageHeader=$('header');const sync=()=>pageHeader?.classList.toggle('kubor-header-scrolled',scrollY>26);sync();addEventListener('scroll',sync,{passive:true});
  if(window.gsap&&window.ScrollTrigger&&!reduced){gsap.registerPlugin(ScrollTrigger);$$('[data-reveal]').forEach(el=>gsap.fromTo(el,{opacity:0,y:22},{opacity:1,y:0,duration:.6,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 90%',once:true}}));const hero=$('[data-hero-title]');if(hero)gsap.fromTo(hero,{opacity:0,y:38},{opacity:1,y:0,duration:.8,ease:'power3.out'})}
  icon();setTimeout(icon,100);
});

document.addEventListener('alpine:init',()=>{
  Alpine.data('kuborShell',()=>({mega:false,drawer:null,scrolled:false,openDrawer(name){this.drawer=name;this.mega=false},closeDrawer(){this.drawer=null},toggleMega(){this.mega=!this.mega;this.drawer=null},closeAll(){this.mega=false;this.drawer=null},init(){const s=()=>this.scrolled=scrollY>26;s();addEventListener('scroll',s,{passive:true});this.$watch('drawer',v=>{document.documentElement.classList.toggle('overflow-hidden',!!v)})}}));
});
