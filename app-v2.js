document.addEventListener('DOMContentLoaded',()=>{
  if(window.lucide) lucide.createIcons({attrs:{'stroke-width':1.65}});

  const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let lenis=null;

  if(window.Lenis&&!reduceMotion){
    lenis=new Lenis({duration:.92,smoothWheel:true,wheelMultiplier:.86,touchMultiplier:1.08});
    window.__kuborLenis=lenis;
    lenis.on('scroll',()=>window.ScrollTrigger&&ScrollTrigger.update());
    const raf=time=>{lenis.raf(time);requestAnimationFrame(raf)};
    requestAnimationFrame(raf);
  }

  if(window.gsap&&window.ScrollTrigger){
    gsap.registerPlugin(ScrollTrigger);
    if(!reduceMotion){
      document.querySelectorAll('section').forEach(section=>{
        const items=section.querySelectorAll('[data-reveal]');
        if(!items.length)return;
        gsap.fromTo(items,{opacity:0,y:18},{opacity:1,y:0,duration:.58,stagger:.045,ease:'power3.out',scrollTrigger:{trigger:section,start:'top 88%',once:true}});
      });

      gsap.utils.toArray('[data-parallax]').forEach(el=>{
        gsap.fromTo(el,{yPercent:-1.5},{yPercent:4,ease:'none',scrollTrigger:{trigger:el.parentElement||el,start:'top bottom',end:'bottom top',scrub:.65}});
      });

      const heroTitle=document.querySelector('[data-hero-title]');
      if(heroTitle){
        gsap.timeline({defaults:{ease:'power3.out'}})
          .from('[data-hero-kicker]',{opacity:0,y:10,duration:.34})
          .from(heroTitle,{opacity:0,y:32,duration:.66},'-=.08')
          .from('[data-hero-copy]',{opacity:0,y:14,duration:.42},'-=.34')
          .from('[data-hero-actions]',{opacity:0,y:10,duration:.38},'-=.24');
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

  /* PDP thumbnail gallery without extra markup */
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

  /* Tabs, chips, sizes, wishlists and add-to-cart affordances */
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

    if(/agregar al carrito/i.test(label)){
      showToast();
      const badge=document.querySelector('header span[class*="rounded-full"]');
      if(badge&&/^\d+$/.test(badge.textContent.trim())) badge.textContent=String(Number(badge.textContent.trim())+1);
    }

    if(button.parentElement?.classList.contains('no-scrollbar') || button.parentElement?.classList.contains('overflow-x-auto')){
      const siblings=[...button.parentElement.querySelectorAll('button')];
      if(siblings.length>=3){
        siblings.forEach(btn=>btn.classList.remove('bg-[#07131b]','text-white','border-kubor-cyan','border-b-2'));
        if(button.classList.contains('pb-3')) button.classList.add('border-kubor-cyan','border-b-2');
      }
    }
  });

  /* Keep icon weight identical after Alpine renders */
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
      const updateScroll=()=>{this.scrolled=window.scrollY>14};
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