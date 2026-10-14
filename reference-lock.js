(()=>{
  if(!document.body?.hasAttribute('data-reference-lock')) return;
  const removeLegacy=()=>{
    ['#v3-home-extras','#v3-pdp-specs','#v3-plp-tools','.v3-mobile-buy'].forEach(s=>document.querySelectorAll(s).forEach(el=>el.remove()));
  };
  removeLegacy();
  const observer=new MutationObserver(removeLegacy);
  observer.observe(document.documentElement,{childList:true,subtree:true});
  setTimeout(()=>{removeLegacy();observer.disconnect()},5000);
})();