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

  /* lightweight prototype interactions */
  document.addEventListener('click',event=>{
    const size=event.target.closest('button');
    if(size&&/^(XS|S|M|L|XL)$/.test(size.textContent.trim())){
      const group=size.parentElement;
      if(group&&group.querySelectorAll('button').length>=3){
        group.querySelectorAll('button').forEach(btn=>btn.classList.remove('size-active','bg-kubor-cyan','text-[#07131b]'));
        size.classList.add('size-active');
      }
    }

    const heart=event.target.closest('button')?.querySelector('[data-lucide="heart"]')||event.target.closest('[data-lucide="heart"]');
    if(heart){
      const btn=heart.closest('button');
      if(btn){
        btn.classList.toggle('text-rose-500');
        btn.classList.toggle('bg-rose-50');
      }
    }
  });
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