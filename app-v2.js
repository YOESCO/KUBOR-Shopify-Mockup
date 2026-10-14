document.addEventListener('DOMContentLoaded',()=>{
  const BUILD='2026.10.13-nav1';
  window.KUBOR_BUILD=BUILD;
  const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let lenis=null;

  const allButtons=()=>[...document.querySelectorAll('button')];
  const alpineAction=(button,name)=>String(button?.getAttribute('@click')||button?.getAttribute('x-on:click')||'').includes(`openDrawer('${name}')`);
  const findDrawerButton=name=>allButtons().find(button=>alpineAction(button,name));

  /* Global control safety net: every page gets a visible mobile search icon and menu trigger. */
  const header=document.querySelector('.kubor-header, header');
  const headerActions=header?.querySelector('.flex.justify-end, .flex.items-center.justify-end');
  if(header&&headerActions){
    let searchButton=findDrawerButton('search');
    if(searchButton&&searchButton.classList.contains('hidden')){
      const mobileSearch=document.createElement('button');
      mobileSearch.type='button';
      mobileSearch.setAttribute('aria-label','Buscar');
      mobileSearch.className='md:hidden w-9 h-9 grid place-items-center';
      mobileSearch.innerHTML='<i data-lucide="search" class="w-[19px]"></i>';
      mobileSearch.addEventListener('click',()=>searchButton.click());
      headerActions.insertBefore(mobileSearch,headerActions.firstChild);
    }else if(!searchButton){
      const directSearch=document.createElement('a');
      directSearch.href='search.html';
      directSearch.setAttribute('aria-label','Buscar');
      directSearch.className='w-9 h-9 grid place-items-center';
      directSearch.innerHTML='<i data-lucide="search" class="w-[19px]"></i>';
      headerActions.insertBefore(directSearch,headerActions.firstChild);
    }

    let menuButton=findDrawerButton('menu');
    if(!menuButton){
      menuButton=document.createElement('button');
      menuButton.type='button';
      menuButton.setAttribute('aria-label','Abrir menú');
      menuButton.className='lg:hidden w-9 h-9 grid place-items-center';
      menuButton.innerHTML='<i data-lucide="menu" class="w-5"></i>';
      headerActions.appendChild(menuButton);
    }

    if(!document.querySelector('[data-global-mobile-menu]')){
      const overlay=document.createElement('div');
      overlay.setAttribute('data-global-mobile-menu','');
      overlay.className='fixed inset-0 z-[160] hidden';
      overlay.innerHTML=`<div data-menu-backdrop class="absolute inset-0 bg-black/60"></div><aside class="absolute inset-y-0 right-0 w-[88%] max-w-[390px] bg-[#07131b] text-white shadow-2xl overflow-y-auto"><div class="h-16 px-5 border-b border-white/10 flex items-center justify-between"><img src="assets/logos/KUBOR_only_clear.svg" alt="KUBOR" class="w-[120px]"><button data-menu-close aria-label="Cerrar menú" class="w-9 h-9 grid place-items-center"><i data-lucide="x" class="w-5"></i></button></div><nav class="p-5 space-y-1"><a href="discipline-mtb.html" class="flex items-center justify-between py-4 border-b border-white/10 font-black uppercase text-sm">MTB <span>→</span></a><a href="collection-v2.html" class="flex items-center justify-between py-4 border-b border-white/10 font-black uppercase text-sm">Ruta <span>→</span></a><a href="collection-v2.html" class="flex items-center justify-between py-4 border-b border-white/10 font-black uppercase text-sm">Gravel <span>→</span></a><a href="collection-v2.html" class="flex items-center justify-between py-4 border-b border-white/10 font-black uppercase text-sm">Urbanas <span>→</span></a><a href="collection-v2.html" class="flex items-center justify-between py-4 border-b border-white/10 font-black uppercase text-sm">Eléctricas <span>→</span></a><a href="search.html" class="flex items-center gap-3 py-4 border-b border-white/10 font-black uppercase text-sm"><i data-lucide="search" class="w-4"></i> Buscar</a><a href="cart.html" class="flex items-center gap-3 py-4 border-b border-white/10 font-black uppercase text-sm"><i data-lucide="shopping-bag" class="w-4"></i> Carrito <span class="ml-auto" data-cart-count>0</span></a></nav><div class="p-5 text-[10px] text-white/45 uppercase tracking-[.12em]">KUBOR México · Mockup</div></aside>`;
      document.body.appendChild(overlay);
      const openFallback=()=>{overlay.classList.remove('hidden');document.documentElement.classList.add('overflow-hidden');window.__kuborLenis?.stop?.();};
      const closeFallback=()=>{overlay.classList.add('hidden');document.documentElement.classList.remove('overflow-hidden');window.__kuborLenis?.start?.();};
      menuButton.addEventListener('click',event=>{
        const action=menuButton.getAttribute('@click')||'';
        const hasNativeDrawer=!!document.querySelector('[x-show*="menu"], [data-mobile-menu]');
        if(!hasNativeDrawer||!action){event.preventDefault();openFallback();}
      });
      overlay.querySelector('[data-menu-close]').addEventListener('click',closeFallback);
      overlay.querySelector('[data-menu-backdrop]').addEventListener('click',closeFallback);
      document.addEventListener('keydown',event=>{if(event.key==='Escape')closeFallback();});
    }
  }

  if(window.lucide) lucide.createIcons({attrs:{'stroke-width':1.65}});

  if(window.Lenis&&!reduceMotion){
    lenis=new Lenis({duration:.88,smoothWheel:true,wheelMultiplier:.82,touchMultiplier:1.05});
    window.__kuborLenis=lenis;
    lenis.on('scroll',()=>window.ScrollTrigger&&ScrollTrigger.update());
    const raf=time=>{lenis.raf(time);requestAnimationFrame(raf)};
    requestAnimationFrame(raf);
  }

  const buildBadge=document.createElement('div');
  buildBadge.textContent=`KUBOR build ${BUILD}`;
  Object.assign(buildBadge.style,{position:'fixed',right:'8px',bottom:'8px',zIndex:'140',padding:'5px 8px',background:'rgba(6,16,25,.78)',color:'rgba(255,255,255,.66)',font:'600 9px/1 Inter,system-ui,sans-serif',letterSpacing:'.04em',border:'1px solid rgba(255,255,255,.12)',borderRadius:'4px',backdropFilter:'blur(8px)',pointerEvents:'none'});
  document.body.appendChild(buildBadge);

  const syncHeader=()=>{if(header)header.classList.toggle('kubor-header-scrolled',window.scrollY>26)};
  syncHeader();window.addEventListener('scroll',syncHeader,{passive:true});

  if(window.gsap&&window.ScrollTrigger){
    gsap.registerPlugin(ScrollTrigger);
    if(!reduceMotion){
      document.querySelectorAll('section').forEach(section=>{const items=section.querySelectorAll('[data-reveal]');if(items.length)gsap.fromTo(items,{opacity:0,y:22},{opacity:1,y:0,duration:.64,stagger:.055,ease:'power3.out',scrollTrigger:{trigger:section,start:'top 86%',once:true}})});
      gsap.utils.toArray('[data-parallax]').forEach(el=>gsap.fromTo(el,{yPercent:-2},{yPercent:5,ease:'none',scrollTrigger:{trigger:el.parentElement||el,start:'top bottom',end:'bottom top',scrub:.7}}));
      const heroTitle=document.querySelector('[data-hero-title]');
      if(heroTitle){const heroImage=document.querySelector('.kubor-hero-media, main > section:first-child img');const tl=gsap.timeline({defaults:{ease:'power3.out'}});if(heroImage)tl.fromTo(heroImage,{scale:1.06},{scale:1,duration:1.45,ease:'power2.out'});tl.from('[data-hero-kicker]',{opacity:0,y:12,duration:.36},'-=.96').from(heroTitle,{opacity:0,y:46,duration:.78},'-=.18').from('[data-hero-copy]',{opacity:0,y:18,duration:.48},'-=.38').from('.kubor-hero-spec',{opacity:0,y:12,duration:.38,stagger:.05},'-=.26').from('[data-hero-actions]',{opacity:0,y:12,duration:.42},'-=.28');}
    }
  }

  const toast=document.createElement('div');
  toast.className='fixed left-1/2 bottom-6 z-[120] -translate-x-1/2 translate-y-6 opacity-0 pointer-events-none bg-[#07131b] text-white px-5 py-3 rounded-md shadow-2xl text-[10px] uppercase tracking-[.08em] font-black transition-all duration-300';
  document.body.appendChild(toast);let toastTimer;
  const showToast=text=>{toast.textContent=text||'Agregado al carrito';toast.classList.remove('translate-y-6','opacity-0');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.add('translate-y-6','opacity-0'),1700)};

  const STORE_KEY='kubor-mock-cart-v1';
  const readCart=()=>{try{return JSON.parse(localStorage.getItem(STORE_KEY))||{items:[]}}catch(e){return{items:[]}}};
  const writeCart=cart=>{localStorage.setItem(STORE_KEY,JSON.stringify(cart));window.dispatchEvent(new CustomEvent('kubor:cart-change',{detail:cart}))};
  const cartCount=cart=>cart.items.reduce((sum,item)=>sum+(item.qty||1),0);
  const parseMoney=value=>Number(String(value||'').replace(/[^0-9.]/g,''))||0;
  const formatMoney=value=>new Intl.NumberFormat('es-MX',{style:'currency',currency:'MXN',maximumFractionDigits:0}).format(value);
  const renderCart=cart=>{
    const count=cartCount(cart);document.querySelectorAll('[data-cart-count]').forEach(el=>el.textContent=String(count));
    document.querySelectorAll('[data-cart-items]').forEach(list=>{list.innerHTML=!cart.items.length?'<div class="py-12 text-center text-slate-400 text-xs">Tu carrito está vacío.</div>':cart.items.map((item,index)=>`<div class="cart-line grid grid-cols-[76px_1fr_auto] gap-3 py-4 border-b" data-cart-index="${index}">${item.image?`<img src="${item.image}" alt="" class="w-[76px] h-[66px] object-cover bg-slate-100">`:'<div class="w-[76px] h-[66px] bg-slate-100"></div>'}<div><b class="text-sm">${item.title}</b><p class="text-[10px] text-slate-500 mt-1">Talla ${item.size||'M'}</p><div class="cart-qty flex items-center gap-2 mt-2"><button data-cart-action="minus" class="w-6 h-6 border" aria-label="Restar">−</button><span class="text-xs">${item.qty}</span><button data-cart-action="plus" class="w-6 h-6 border" aria-label="Sumar">+</button></div></div><div class="text-right"><b class="text-xs">${item.price||''}</b><button data-cart-action="remove" class="block ml-auto mt-3 text-[9px] uppercase text-slate-400">Quitar</button></div></div>`).join('')});
    const subtotal=cart.items.reduce((sum,item)=>sum+parseMoney(item.price)*(item.qty||1),0);document.querySelectorAll('[data-cart-subtotal]').forEach(el=>el.textContent=`${formatMoney(subtotal)} MXN`);if(window.lucide)lucide.createIcons({attrs:{'stroke-width':1.65}});
  };
  const addMockItem=button=>{const card=button.closest('[data-product-card], .product-card, .ref-card, article, a.plp-card')||document;const title=card.querySelector('h1,h2,h3,b')?.textContent.trim()||document.querySelector('h1')?.textContent.trim()||'KUBOR Bike';const price=card.querySelector('[data-price], .price')?.textContent.trim()||[...card.querySelectorAll('*')].find(el=>/^\$[\d,.]+/.test(el.textContent.trim()))?.textContent.trim()||'';const image=card.querySelector('img')?.src||document.querySelector('main img')?.src||'';const size=document.querySelector('.size-active')?.textContent.trim()||'M';const cart=readCart();const key=`${title}::${size}`;const existing=cart.items.find(item=>item.key===key);if(existing)existing.qty+=1;else cart.items.push({key,title,price,image,size,qty:1});writeCart(cart);showToast(`${title} agregado al carrito`)};
  renderCart(readCart());window.addEventListener('kubor:cart-change',e=>renderCart(e.detail));window.addEventListener('storage',()=>renderCart(readCart()));

  const searchCatalog=[{title:'KUBOR X1 Pro',meta:'MTB Trail · 29”',price:'$49,999 MXN',href:'product-v2.html'},{title:'KUBOR Trail 7',meta:'MTB Trail · 29”',price:'$29,999 MXN',href:'product-v2.html'},{title:'KUBOR Trail 5',meta:'MTB · 29”',price:'$24,999 MXN',href:'product-v2.html'},{title:'Colección MTB',meta:'36 productos',price:'',href:'collection-v2.html'},{title:'Guía de tallas',meta:'Encuentra tu talla ideal',price:'',href:'#'}];
  document.querySelectorAll('aside input').forEach(input=>{if(!/buscar productos|buscar productos, categorías/i.test(input.getAttribute('placeholder')||''))return;const aside=input.closest('aside');if(!aside)return;let results=aside.querySelector('[data-search-results]');if(!results){results=document.createElement('div');results.setAttribute('data-search-results','');results.className='mt-5';input.closest('label')?.insertAdjacentElement('afterend',results)}const renderSearch=query=>{const q=query.trim().toLowerCase();const matches=q?searchCatalog.filter(item=>(item.title+' '+item.meta).toLowerCase().includes(q)).slice(0,5):searchCatalog.slice(0,4);results.innerHTML=`<div class="text-[9px] uppercase tracking-[.14em] text-slate-400 font-black mb-2">${q?'Resultados':'Sugerencias'}</div>${matches.map(item=>`<a href="${item.href}" class="flex items-center justify-between gap-4 py-3 border-b border-slate-100"><div><b class="text-xs text-[#07131b]">${item.title}</b><p class="text-[10px] text-slate-400 mt-1">${item.meta}</p></div><span class="text-[10px] font-bold text-[#07131b] whitespace-nowrap">${item.price||'→'}</span></a>`).join('')||'<div class="py-6 text-xs text-slate-400">No encontramos resultados.</div>'}`};renderSearch('');input.addEventListener('input',e=>renderSearch(e.target.value))});

  document.addEventListener('click',event=>{
    const action=event.target.closest('[data-cart-action]');if(action){event.preventDefault();event.stopPropagation();const row=action.closest('[data-cart-index]');const index=Number(row?.dataset.cartIndex);const cart=readCart();const item=cart.items[index];if(!item)return;if(action.dataset.cartAction==='plus')item.qty+=1;if(action.dataset.cartAction==='minus')item.qty=Math.max(1,item.qty-1);if(action.dataset.cartAction==='remove')cart.items.splice(index,1);writeCart(cart);return}
    const button=event.target.closest('button');if(!button)return;const label=button.textContent.trim();const isQuickAdd=/agregar al carrito|añadir al carrito|add to cart/i.test(label);const isHeart=!!(button.querySelector('[data-lucide="heart"]')||event.target.closest('[data-lucide="heart"]'));if(isQuickAdd||isHeart){if(button.closest('a[href]')){event.preventDefault();event.stopPropagation()}}if(/^(XS|S|M|L|XL)$/.test(label)){const group=button.parentElement;if(group&&group.querySelectorAll('button').length>=3){group.querySelectorAll('button').forEach(btn=>btn.classList.remove('size-active','bg-kubor-cyan','text-[#07131b]'));button.classList.add('size-active')}}if(isHeart){button.classList.toggle('text-rose-500');button.classList.toggle('bg-rose-50')}if(isQuickAdd)addMockItem(button);
  });

  document.querySelectorAll('.grid.grid-cols-6').forEach(row=>{const thumbs=[...row.querySelectorAll('button img')];if(thumbs.length<3)return;const gallery=row.previousElementSibling;const main=gallery&&gallery.querySelector('img');if(!main)return;row.querySelectorAll('button').forEach(button=>button.addEventListener('click',()=>{const img=button.querySelector('img');if(!img)return;row.querySelectorAll('button').forEach(b=>b.classList.remove('thumb-active'));button.classList.add('thumb-active');if(window.gsap&&!reduceMotion){gsap.to(main,{opacity:.25,duration:.12,onComplete:()=>{main.src=img.src.replace(/w=300/g,'w=1400');gsap.to(main,{opacity:1,duration:.18})}})}else main.src=img.src.replace(/w=300/g,'w=1400')}))});
  setTimeout(()=>window.lucide&&lucide.createIcons({attrs:{'stroke-width':1.65}}),80);
});

document.addEventListener('alpine:init',()=>{
  Alpine.data('kuborShell',()=>({mega:false,drawer:null,scrolled:false,search:'',activeThumb:0,selectedSize:'M',selectedColor:'Obsidiana',filterOpen:false,init(){const updateScroll=()=>{this.scrolled=window.scrollY>26};updateScroll();window.addEventListener('scroll',updateScroll,{passive:true});this.$watch('drawer',value=>{document.documentElement.classList.toggle('overflow-hidden',!!value);if(window.__kuborLenis){value?window.__kuborLenis.stop():window.__kuborLenis.start()}});this.$watch('mega',value=>{if(value)this.drawer=null})},openDrawer(name){this.mega=false;this.drawer=name},closeDrawer(){this.drawer=null},toggleMega(){this.drawer=null;this.mega=!this.mega},closeAll(){this.mega=false;this.drawer=null}}))
});