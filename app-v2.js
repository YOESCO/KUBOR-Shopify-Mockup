document.addEventListener('DOMContentLoaded',()=>{
  const BUILD='2026.10.13-qa1';
  window.KUBOR_BUILD=BUILD;
  if(window.lucide) lucide.createIcons({attrs:{'stroke-width':1.65}});

  const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let lenis=null;

  if(window.Lenis&&!reduceMotion){
    lenis=new Lenis({duration:.88,smoothWheel:true,wheelMultiplier:.82,touchMultiplier:1.05});
    window.__kuborLenis=lenis;
    lenis.on('scroll',()=>window.ScrollTrigger&&ScrollTrigger.update());
    const raf=time=>{lenis.raf(time);requestAnimationFrame(raf)};
    requestAnimationFrame(raf);
  }

  const buildBadge=document.createElement('div');
  buildBadge.textContent=`KUBOR build ${BUILD}`;
  buildBadge.setAttribute('data-build',BUILD);
  Object.assign(buildBadge.style,{position:'fixed',right:'8px',bottom:'8px',zIndex:'140',padding:'5px 8px',background:'rgba(6,16,25,.78)',color:'rgba(255,255,255,.66)',font:'600 9px/1 Inter,system-ui,sans-serif',letterSpacing:'.04em',border:'1px solid rgba(255,255,255,.12)',borderRadius:'4px',backdropFilter:'blur(8px)',pointerEvents:'none'});
  document.body.appendChild(buildBadge);

  const header=document.querySelector('.kubor-header, header');
  const syncHeader=()=>{
    if(!header)return;
    header.classList.toggle('kubor-header-scrolled',window.scrollY>26);
  };
  syncHeader();
  window.addEventListener('scroll',syncHeader,{passive:true});

  if(window.gsap&&window.ScrollTrigger){
    gsap.registerPlugin(ScrollTrigger);
    if(!reduceMotion){
      document.querySelectorAll('section').forEach(section=>{
        const items=section.querySelectorAll('[data-reveal]');
        if(!items.length)return;
        gsap.fromTo(items,{opacity:0,y:22},{opacity:1,y:0,duration:.64,stagger:.055,ease:'power3.out',scrollTrigger:{trigger:section,start:'top 86%',once:true}});
      });

      gsap.utils.toArray('[data-parallax]').forEach(el=>{
        gsap.fromTo(el,{yPercent:-2},{yPercent:5,ease:'none',scrollTrigger:{trigger:el.parentElement||el,start:'top bottom',end:'bottom top',scrub:.7}});
      });

      const heroTitle=document.querySelector('[data-hero-title]');
      if(heroTitle){
        const heroImage=document.querySelector('.kubor-hero-media, main > section:first-child img');
        const tl=gsap.timeline({defaults:{ease:'power3.out'}});
        if(heroImage)tl.fromTo(heroImage,{scale:1.06},{scale:1,duration:1.45,ease:'power2.out'});
        tl.from('[data-hero-kicker]',{opacity:0,y:12,duration:.36},'-=.96')
          .from(heroTitle,{opacity:0,y:46,duration:.78},'-=.18')
          .from('[data-hero-copy]',{opacity:0,y:18,duration:.48},'-=.38')
          .from('.kubor-hero-spec',{opacity:0,y:12,duration:.38,stagger:.05},'-=.26')
          .from('[data-hero-actions]',{opacity:0,y:12,duration:.42},'-=.28');
      }
    }
  }

  const toast=document.createElement('div');
  toast.className='fixed left-1/2 bottom-6 z-[120] -translate-x-1/2 translate-y-6 opacity-0 pointer-events-none bg-[#07131b] text-white px-5 py-3 rounded-md shadow-2xl text-[10px] uppercase tracking-[.08em] font-black transition-all duration-300';
  document.body.appendChild(toast);
  let toastTimer;
  const showToast=(text='Agregado al carrito')=>{
    toast.textContent=text;
    toast.classList.remove('translate-y-6','opacity-0');
    clearTimeout(toastTimer);
    toastTimer=setTimeout(()=>toast.classList.add('translate-y-6','opacity-0'),1700);
  };

  const STORE_KEY='kubor-mock-cart-v1';
  const readCart=()=>{
    try{return JSON.parse(localStorage.getItem(STORE_KEY))||{items:[]}}catch(e){return{items:[]}}
  };
  const writeCart=cart=>{
    localStorage.setItem(STORE_KEY,JSON.stringify(cart));
    window.dispatchEvent(new CustomEvent('kubor:cart-change',{detail:cart}));
  };
  const cartCount=cart=>cart.items.reduce((sum,item)=>sum+(item.qty||1),0);
  const parseMoney=value=>Number(String(value||'').replace(/[^0-9.]/g,''))||0;
  const formatMoney=value=>new Intl.NumberFormat('es-MX',{style:'currency',currency:'MXN',maximumFractionDigits:0}).format(value);

  const renderCart=cart=>{
    const count=cartCount(cart);
    document.querySelectorAll('[data-cart-count], header span[class*="rounded-full"]').forEach(el=>{
      if(el.hasAttribute('data-cart-count')||/^\d+$/.test(el.textContent.trim()))el.textContent=String(count);
    });

    const list=document.querySelector('[data-cart-items]');
    if(list){
      if(!cart.items.length){
        list.innerHTML='<div class="py-12 text-center text-slate-400 text-xs">Tu carrito está vacío.</div>';
      }else{
        list.innerHTML=cart.items.map((item,index)=>`<div class="cart-line grid grid-cols-[76px_1fr_auto] gap-3 py-4 border-b" data-cart-index="${index}">
          ${item.image?`<img src="${item.image}" alt="" class="w-[76px] h-[66px] object-cover bg-slate-100">`:'<div class="w-[76px] h-[66px] bg-slate-100"></div>'}
          <div><b class="text-sm">${item.title}</b><p class="text-[10px] text-slate-500 mt-1">Talla ${item.size||'M'}</p><div class="cart-qty flex items-center gap-2 mt-2"><button data-cart-action="minus" class="w-6 h-6 border" aria-label="Restar">−</button><span class="text-xs">${item.qty}</span><button data-cart-action="plus" class="w-6 h-6 border" aria-label="Sumar">+</button></div></div>
          <div class="text-right"><b class="text-xs">${item.price||''}</b><button data-cart-action="remove" class="block ml-auto mt-3 text-[9px] uppercase text-slate-400">Quitar</button></div>
        </div>`).join('');
      }
    }

    const subtotal=cart.items.reduce((sum,item)=>sum+parseMoney(item.price)*(item.qty||1),0);
    const subtotalEl=document.querySelector('[data-cart-subtotal]');
    if(subtotalEl)subtotalEl.textContent=`${formatMoney(subtotal)} MXN`;
    if(window.lucide) lucide.createIcons({attrs:{'stroke-width':1.65}});
  };

  const addMockItem=(sourceButton)=>{
    const card=sourceButton.closest('[data-product-card], .product-card, .ref-card, article, a.plp-card')||document;
    const title=card.querySelector('h1,h2,h3,b')?.textContent.trim()||document.querySelector('h1')?.textContent.trim()||'KUBOR Bike';
    const price=card.querySelector('[data-price], .price')?.textContent.trim()||[...card.querySelectorAll('*')].find(el=>/^\$[\d,.]+/.test(el.textContent.trim()))?.textContent.trim()||'';
    const image=card.querySelector('img')?.src||document.querySelector('main img')?.src||'';
    const size=document.querySelector('.size-active')?.textContent.trim()||'M';
    const cart=readCart();
    const key=`${title}::${size}`;
    const existing=cart.items.find(item=>item.key===key);
    if(existing)existing.qty+=1;
    else cart.items.push({key,title,price,image,size,qty:1});
    writeCart(cart);
    showToast(`${title} agregado al carrito`);
  };

  renderCart(readCart());
  window.addEventListener('kubor:cart-change',e=>renderCart(e.detail));
  window.addEventListener('storage',()=>renderCart(readCart()));

  const searchCatalog=[
    {title:'KUBOR X1 Pro',meta:'MTB Trail · 29”',price:'$49,999 MXN',href:'product-v2.html'},
    {title:'KUBOR Trail 7',meta:'MTB Trail · 29”',price:'$29,999 MXN',href:'product-v2.html'},
    {title:'KUBOR Trail 5',meta:'MTB · 29”',price:'$24,999 MXN',href:'product-v2.html'},
    {title:'Colección MTB',meta:'36 productos',price:'',href:'collection-v2.html'},
    {title:'Guía de tallas',meta:'Encuentra tu talla ideal',price:'',href:'#'}
  ];

  const searchInput=[...document.querySelectorAll('aside input')].find(input=>/buscar productos|buscar productos, categorías/i.test(input.getAttribute('placeholder')||''));
  const searchAside=searchInput?.closest('aside');
  if(searchAside&&searchInput){
    const input=searchInput;
    let results=searchAside.querySelector('[data-search-results]');
    if(!results){
      results=document.createElement('div');
      results.setAttribute('data-search-results','');
      results.className='mt-5';
      input.closest('label')?.insertAdjacentElement('afterend',results);
    }
    const renderSearch=query=>{
      const q=query.trim().toLowerCase();
      const matches=q?searchCatalog.filter(item=>(item.title+' '+item.meta).toLowerCase().includes(q)).slice(0,5):searchCatalog.slice(0,4);
      results.innerHTML=`<div class="text-[9px] uppercase tracking-[.14em] text-slate-400 font-black mb-2">${q?'Resultados':'Sugerencias'}</div>${matches.map(item=>`<a href="${item.href}" class="flex items-center justify-between gap-4 py-3 border-b border-slate-100"><div><b class="text-xs text-[#07131b]">${item.title}</b><p class="text-[10px] text-slate-400 mt-1">${item.meta}</p></div><span class="text-[10px] font-bold text-[#07131b] whitespace-nowrap">${item.price||'→'}</span></a>`).join('')||'<div class="py-6 text-xs text-slate-400">No encontramos resultados.</div>'}`;
    };
    renderSearch('');
    input.addEventListener('input',e=>renderSearch(e.target.value));
  }

  document.addEventListener('click',event=>{
    const cartAction=event.target.closest('[data-cart-action]');
    if(cartAction){
      event.preventDefault();
      event.stopPropagation();
      const row=cartAction.closest('[data-cart-index]');
      const index=Number(row?.dataset.cartIndex);
      const cart=readCart();
      const item=cart.items[index];
      if(!item)return;
      if(cartAction.dataset.cartAction==='plus') item.qty+=1;
      if(cartAction.dataset.cartAction==='minus') item.qty=Math.max(1,item.qty-1);
      if(cartAction.dataset.cartAction==='remove') cart.items.splice(index,1);
      writeCart(cart);
      return;
    }

    const button=event.target.closest('button');
    if(!button)return;
    const label=button.textContent.trim();
    const isQuickAdd=/agregar al carrito|añadir al carrito|add to cart/i.test(label);
    const isHeart=!!(button.querySelector('[data-lucide="heart"]')||event.target.closest('[data-lucide="heart"]'));

    if(isQuickAdd||isHeart){
      const linkedCard=button.closest('a[href]');
      if(linkedCard){event.preventDefault();event.stopPropagation();}
    }

    if(/^(XS|S|M|L|XL)$/.test(label)){
      const group=button.parentElement;
      if(group&&group.querySelectorAll('button').length>=3){
        group.querySelectorAll('button').forEach(btn=>btn.classList.remove('size-active','bg-kubor-cyan','text-[#07131b]'));
        button.classList.add('size-active');
      }
    }

    if(isHeart){
      button.classList.toggle('text-rose-500');
      button.classList.toggle('bg-rose-50');
    }

    if(isQuickAdd)addMockItem(button);
  });

  document.querySelectorAll('.grid.grid-cols-6').forEach(row=>{
    const thumbs=[...row.querySelectorAll('button img')];
    if(thumbs.length<3)return;
    const gallery=row.previousElementSibling;
    const main=gallery&&gallery.querySelector('img');
    if(!main)return;
    row.querySelectorAll('button').forEach(button=>{
      button.addEventListener('click',()=>{
        const img=button.querySelector('img');
        if(!img)return;
        row.querySelectorAll('button').forEach(b=>b.classList.remove('thumb-active'));
        button.classList.add('thumb-active');
        if(window.gsap&&!reduceMotion){gsap.to(main,{opacity:.25,duration:.12,onComplete:()=>{main.src=img.src.replace(/w=300/g,'w=1400');gsap.to(main,{opacity:1,duration:.18})}})}else main.src=img.src.replace(/w=300/g,'w=1400');
      });
    });
  });

  setTimeout(()=>window.lucide&&lucide.createIcons({attrs:{'stroke-width':1.65}}),80);
});

document.addEventListener('alpine:init',()=>{
  Alpine.data('kuborShell',()=>({
    mega:false,drawer:null,scrolled:false,search:'',activeThumb:0,selectedSize:'M',selectedColor:'Obsidiana',filterOpen:false,
    init(){
      const updateScroll=()=>{this.scrolled=window.scrollY>26};
      updateScroll();
      window.addEventListener('scroll',updateScroll,{passive:true});
      this.$watch('drawer',value=>{document.documentElement.classList.toggle('overflow-hidden',!!value);if(window.__kuborLenis){value?window.__kuborLenis.stop():window.__kuborLenis.start()}});
      this.$watch('mega',value=>{if(value)this.drawer=null});
    },
    openDrawer(name){this.mega=false;this.drawer=name},closeDrawer(){this.drawer=null},toggleMega(){this.drawer=null;this.mega=!this.mega},closeAll(){this.mega=false;this.drawer=null}
  }))
});
