(()=>{
  const loadStyle=(href)=>{if(document.querySelector(`link[href^="${href}"]`))return;const l=document.createElement('link');l.rel='stylesheet';l.href=`${href}?v=20261015`;document.head.appendChild(l)};
  const loadScript=(src)=>{if(document.querySelector(`script[src^="${src}"]`))return;const s=document.createElement('script');s.src=`${src}?v=20261015`;s.async=false;document.head.appendChild(s)};

  loadStyle('sprint1k.css');
  loadStyle('sprint1l.css');
  loadStyle('sprint1m.css');
  loadStyle('sprint1n.css');
  loadStyle('sprint1o.css');
  loadStyle('sprint1p.css');
  loadStyle('sprint1q.css');
  loadStyle('sprint1r.css');
  loadStyle('sprint1s.css');
  loadStyle('sprint1t.css');
  loadStyle('sprint1u.css');
  loadStyle('sprint1v.css');
  loadStyle('sprint1v-extra.css');
  loadScript('sprint1j-runtime.js');
  loadScript('sprint1l.js');
  loadScript('sprint1n.js');
  loadScript('sprint1o.js');
  loadScript('sprint1p.js');
  loadScript('sprint1q.js');
  loadScript('sprint1r.js');
  loadScript('sprint1s.js');
  loadScript('sprint1t.js');
  loadScript('sprint1u.js');
  loadScript('sprint1v.js');
})();
