document.addEventListener('DOMContentLoaded',()=>{
  if(window.lucide) lucide.createIcons({attrs:{'stroke-width':1.7}});

  const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let lenis=null;

  if(window.Lenis&&!reduceMotion){
    lenis=new Lenis({duration:1.0,smoothWheel:true,wheelMultiplier:.88,touchMultiplier:1.1});
    window.__kuborLenis=lenis;
    const raf=time=>{lenis.raf(time);requestAnimationFrame(raf)};
    requestAnimationFrame(raf);
  }

  if(window.gsap&&window.ScrollTrigger){
    gsap.registerPlugin(ScrollTrigger);
    if(lenis){
      lenis.on('scroll',ScrollTrigger.update);
      gsap.ticker.add(time=>lenis.raf(time*1000));
      gsap.ticker.lagSmoothing(0);
    }

    if(!reduceMotion){
      document.querySelectorAll('section').forEach(section=>{
        const items=section.querySelectorAll('[data-reveal]');
        if(!items.length) return;
        gsap.fromTo(items,{opacity:0,y:26},{opacity:1,y:0,duration:.72,stagger:.07,ease:'power3.out',scrollTrigger:{trigger:section,start:'top 82%',once:true}});
      });

      gsap.utils.toArray('[data-parallax]').forEach(el=>{
        gsap.fromTo(el,{yPercent:-3},{yPercent:7,ease:'none',scrollTrigger:{trigger:el.parentElement||el,start:'top bottom',end:'bottom top',scrub:.8}});
      });

      const heroTitle=document.querySelector('[data-hero-title]');
      if(heroTitle){
        const tl=gsap.timeline({defaults:{ease:'power4.out'}});
        tl.from('[data-hero-kicker]',{opacity:0,y:16,duration:.45})
          .from(heroTitle,{opacity:0,y:54,duration:.9},'-=.08')
          .from('[data-hero-copy]',{opacity:0,y:22,duration:.58},'-=.5')
          .from('[data-hero-actions]',{opacity:0,y:16,duration:.5},'-=.34');
      }

      gsap.utils.toArray('.product-card').forEach(card=>{
        const image=card.querySelector('img');
        if(!image) return;
        card.addEventListener('mouseenter',()=>gsap.to(image,{scale:1.045,duration:.55,ease:'power3.out'}));
        card.addEventListener('mouseleave',()=>gsap.to(image,{scale:1,duration:.55,ease:'power3.out'}));
      });
    }
  }
});

document.addEventListener('alpine:init',()=>{
  Alpine.data('kuborShell',()=>({
    mega:false,
    drawer:null,
    scrolled:false,
    search:'',
    activeThumb:0,
    selectedSize:'M',
    selectedColor:'Graphite',
    filterOpen:false,
    init(){
      const updateScroll=()=>{this.scrolled=window.scrollY>18};
      updateScroll();
      window.addEventListener('scroll',updateScroll,{passive:true});
      this.$watch('drawer',value=>{
        document.documentElement.classList.toggle('overflow-hidden',!!value);
        if(window.__kuborLenis){value?window.__kuborLenis.stop():window.__kuborLenis.start()}
      });
      this.$watch('mega',value=>{
        if(value) this.drawer=null;
      });
    },
    openDrawer(name){this.mega=false;this.drawer=name},
    closeDrawer(){this.drawer=null},
    toggleMega(){this.drawer=null;this.mega=!this.mega},
    closeAll(){this.mega=false;this.drawer=null}
  }))
});