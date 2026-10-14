document.addEventListener('DOMContentLoaded',()=>{
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

  /* Header lives over the hero and becomes solid only after scrolling. */
  const header=document.querySelector('header');
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
        const heroImage=document.querySelector('main > section:first-child img');
        const tl=gsap.timeline({defaults:{ease:'power3.out'}});
        if(heroImage)tl.fromTo(heroImage,{scale:1.055},{scale:1,duration:1.35,ease:'power2.out'});
        tl.from('[data-hero-kicker]',{opacity:0,y:12,duration:.36},'-=.92')
          .from(heroTitle,{opacity:0,y:42,duration:.76},'-=.18')
          .from('[data-hero-copy]',{opacity:0,y:18,duration:.48},'-=.38')
          .from('[data-hero-actions]',{opacity:0,y:12,duration:.42},'-=.28');
      }
    }
  }

  const toast=document.createElement('div');
  toast.className='fixed left-1/2 bottom-6 z-[120] -translate-x-1/2 translate-y-6 opacity-0 pointer-events-none bg-[#07131b] text-white px-5 py-3 rounded-md shadow-2xl text-[10px] uppercase tracking-[.08em] font-black transition-all duration-300';
  toast.textContent='Agregado al carrito';
  document.body.appendChild(toast);
  let toastTimer;
  const showToast=(text='Agregado al carrito')=>{
    toast.textContent=text;
    toast.classList.remove('translate-y-6','opacity-0');
    clearTimeout(toastTimer);
    toastTimer=setTimeout(()=>toast.classList.add('translate-y-6','opacity-0'),1700);
  };

  /* Shared prototype store: intentionally mirrors the responsibilities a Shopify cart API layer will own later. */
  const STORE_KEY='kubor-mock-cart-v1';
  const readCart=()=>{
    try{return JSON.parse(localStorage.getItem(STORE_KEY))||{items:[]}}catch(e){return{items:[]}}
  };
  const writeCart=cart=>{
    localStorage.setItem(STORE_KEY,JSON.stringify(cart));
    window.dispatchEvent(new CustomEvent('kubor:cart-change',{detail:cart}));
  };
  const cartCount=cart=>cart.items.reduce((sum,item)=>sum+(item.qty||1),0);
  const updateCartBadges=cart=>{
    const count=cartCount(cart);
    document.querySelectorAll('[data-cart-count], header span[class*="rounded-full"]').forEach(el=>{
      if(/^\d+$/.test(el.textContent.trim())||el.hasAttribute('data-cart-count'))el.textContent=String(count);
    });
  };
  updateCartBadges(readCart());
  window.addEventListener('kubor:cart-change',e=>updateCartBadges(e.detail));

  const addMockItem=(sourceButton)=>{
    const card=sourceButton.closest('[data-product-card], .product-card, .ref-card')||document;
    const title=card.querySelector('h1,h2,h3')?.textContent.trim()||document.querySelector('h1')?.textContent.trim()||'KUBOR Bike';
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

  /* PDP thumbnail gallery. */
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
        if(window.gsap&&!reduceMotion){
          gsap.to(main,{opacity:.25,duration:.12,onComplete:()=>{main.src=img.src.replace(/w=300/g,'w=1400');gsap.to(main,{opacity:1,duration:.18})}});
        }else main.src=img.src.replace(/w=300/g,'w=1400');
      });
    });
  });

  document.addEventListener('click',event=>{
    const button=event.target.closest('button');
    if(!button)return;
    const label=button.textContent.trim();

    if(/^(XS|S|M|L|XL)$/.test(label)){
      const group=button.parentElement;
      if(group&&group.querySelectorAll('button').length>=3){
        group.querySelectorAll('button').forEach(btn=>btn.classList.remove('size-active','bg-kubor-cyan','text-[#07131b]'));
        button.classList.add('size-active');
      }
    }

    const heart=button.querySelector('[data-lucide="heart"]')||event.target.closest('[data-lucide="heart"]');
    if(heart){
      button.classList.toggle('text-rose-500');
      button.classList.toggle('bg-rose-50');
    }

    if(/agregar al carrito|añadir al carrito|add to cart/i.test(label)) addMockItem(button);

    if(button.parentElement?.classList.contains('no-scrollbar') || button.parentElement?.classList.contains('overflow-x-auto')){
      const siblings=[...button.parentElement.querySelectorAll('button')];
      if(siblings.length>=3){
        siblings.forEach(btn=>btn.classList.remove('bg-[#07131b]','text-white','border-kubor-cyan','border-b-2'));
        if(button.classList.contains('pb-3')) button.classList.add('border-kubor-cyan','border-b-2');
      }
    }
  });

  setTimeout(()=>window.lucide&&lucide.createIcons({attrs:{'stroke-width':1.65}}),80);
});

document.addEventListener('alpine:init',()=>{
  Alpine.data('kuborShell',()=>({
    mega:false,
    drawer:null,
    scrolled:false,
    search:'',
    activeThumb:0,
    selectedSize:'M',
    selectedColor:'Obsidiana',
    filterOpen:false,
    init(){
      const updateScroll=()=>{this.scrolled=window.scrollY>26};
      updateScroll();
      window.addEventListener('scroll',updateScroll,{passive:true});
      this.$watch('drawer',value=>{
        document.documentElement.classList.toggle('overflow-hidden',!!value);
        if(window.__kuborLenis){value?window.__kuborLenis.stop():window.__kuborLenis.start()}
      });
      this.$watch('mega',value=>{if(value)this.drawer=null});
    },
    openDrawer(name){this.mega=false;this.drawer=name},
    closeDrawer(){this.drawer=null},
    toggleMega(){this.drawer=null;this.mega=!this.mega},
    closeAll(){this.mega=false;this.drawer=null}
  }))
});