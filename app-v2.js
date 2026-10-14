document.addEventListener('DOMContentLoaded',()=>{
  if(window.lucide) lucide.createIcons();
  if(window.Lenis){
    const lenis=new Lenis({duration:1.05,smoothWheel:true,wheelMultiplier:.9});
    window.__kuborLenis=lenis;
    function raf(t){lenis.raf(t);requestAnimationFrame(raf)}
    requestAnimationFrame(raf);
  }
  if(window.gsap&&window.ScrollTrigger){
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray('[data-reveal]').forEach((el,i)=>{
      gsap.fromTo(el,{opacity:0,y:34},{opacity:1,y:0,duration:.85,delay:(i%4)*.04,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 88%',once:true}})
    });
    gsap.utils.toArray('[data-parallax]').forEach(el=>{
      gsap.to(el,{yPercent:8,ease:'none',scrollTrigger:{trigger:el,start:'top bottom',end:'bottom top',scrub:true}})
    });
    const heroTitle=document.querySelector('[data-hero-title]');
    if(heroTitle){
      gsap.timeline({defaults:{ease:'power4.out'}})
        .from('[data-hero-kicker]',{opacity:0,y:18,duration:.5})
        .from(heroTitle,{opacity:0,y:70,duration:1},'-=.15')
        .from('[data-hero-copy]',{opacity:0,y:28,duration:.7},'-=.55')
        .from('[data-hero-actions]',{opacity:0,y:18,duration:.6},'-=.4');
    }
  }
});

document.addEventListener('alpine:init',()=>{
  Alpine.data('kuborShell',()=>({
    mega:false,drawer:null,scrolled:false,search:'',activeThumb:0,selectedSize:'M',selectedColor:'Graphite',filterOpen:false,
    init(){
      this.scrolled=window.scrollY>20;
      window.addEventListener('scroll',()=>this.scrolled=window.scrollY>20,{passive:true});
      this.$watch('drawer',value=>document.documentElement.classList.toggle('overflow-hidden',!!value));
    },
    openDrawer(name){this.mega=false;this.drawer=name},
    closeDrawer(){this.drawer=null},
    toggleMega(){this.drawer=null;this.mega=!this.mega},
    closeAll(){this.mega=false;this.drawer=null}
  }))
});