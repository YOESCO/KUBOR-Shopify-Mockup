(()=>{
  if(!document.body?.hasAttribute('data-reference-lock')) return;
  const removeLegacy=()=>{
    ['#v3-home-extras','#v3-pdp-specs','#v3-plp-tools','.v3-mobile-buy'].forEach(s=>document.querySelectorAll(s).forEach(el=>el.remove()));
  };
  const ensureNavigator=()=>{
    if(document.querySelector('#kubor-review-nav')) return;
    const a=document.createElement('a');
    a.id='kubor-review-nav';
    a.href='site-map.html';
    a.textContent='Páginas';
    Object.assign(a.style,{position:'fixed',left:'10px',bottom:'10px',zIndex:'270',background:'#00e4fe',color:'#07131b',padding:'8px 11px',borderRadius:'5px',font:'800 9px/1 Inter,system-ui',textTransform:'uppercase',letterSpacing:'.08em',boxShadow:'0 8px 24px rgba(0,0,0,.18)'});
    document.body.appendChild(a);
  };
  removeLegacy();ensureNavigator();
  const observer=new MutationObserver(()=>{removeLegacy();ensureNavigator()});
  observer.observe(document.documentElement,{childList:true,subtree:true});
  setTimeout(()=>{removeLegacy();ensureNavigator();observer.disconnect()},5000);
})();