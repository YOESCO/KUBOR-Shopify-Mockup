(()=>{
  const page=location.pathname.split('/').pop()||'home-v2.html';
  const home=page==='home-v2.html'||page==='index.html'||page==='';
  const brand=page.includes('terrafit')?'TERRAFIT':page.includes('hypergogo')?'HYPERGOGO':'KUBOR';
  const logo=brand==='KUBOR'?'assets/logos/KUBOR_only_clear.svg':brand==='TERRAFIT'?'assets/logos/KUBOR_only_clear.svg':'assets/logos/KUBOR_only_clear.svg';
  const headerClass=home?'kubor-header':'sticky top-0 z-50 bg-[#07131b] text-white border-b border-white/10';
  const announcement=document.querySelector('.kubor-announcement, body > div:first-child');
  if(announcement){announcement.outerHTML='<div class="kubor-announcement bg-kubor-cyan text-[#061019] text-[10px] font-extrabold tracking-[.07em] uppercase"><div class="ref-section h-full flex items-center justify-center md:justify-between"><span>Envío gratis a todo México en compras mayores a $1,499 MXN</span><span class="hidden md:block normal-case tracking-normal font-semibold">Hasta 6 MSI con tarjetas participantes</span></div></div>';}
  const old=document.querySelector('header');
  if(!old)return;
  const header=document.createElement('header');
  header.className=headerClass;
  header.dataset.sharedShell='true';
  header.innerHTML=`<div class="ref-section kubor-header-inner h-[66px] grid grid-cols-[145px_1fr_auto] lg:grid-cols-[170px_1fr_auto] items-center gap-5">
    <a href="home-v2.html"><img src="${logo}" alt="${brand}" class="w-[126px] md:w-[145px]"></a>
    <nav class="hidden lg:flex items-center justify-center gap-7 text-[11px] font-extrabold uppercase tracking-[.07em]">
      <a href="discipline-mtb.html" class="nav-link py-6">MTB</a><a href="discipline-road.html" class="nav-link py-6">Ruta</a><a href="discipline-gravel.html" class="nav-link py-6">Gravel</a><a href="discipline-urban.html" class="nav-link py-6">Urbanas</a><a href="discipline-electric.html" class="nav-link py-6">Eléctricas</a><a href="collection-v2.html" class="nav-link py-6">Accesorios</a><a href="collection-v2.html" class="py-6 text-kubor-lime">Ofertas</a>
    </nav>
    <div class="flex items-center justify-end gap-1">
      <button type="button" data-shell-search aria-label="Buscar" class="w-10 h-10 grid place-items-center"><i data-lucide="search" class="w-[19px]"></i></button>
      <a href="account.html" aria-label="Mi cuenta" class="w-10 h-10 grid place-items-center"><i data-lucide="user" class="w-[19px]"></i></a>
      <a href="cart.html" aria-label="Carrito" class="relative w-10 h-10 grid place-items-center"><i data-lucide="shopping-bag" class="w-[19px]"></i><span data-cart-count class="absolute -top-0.5 -right-0.5 min-w-4 h-4 px-1 rounded-full bg-kubor-cyan text-[#061019] text-[9px] font-black grid place-items-center">0</span></a>
      <button type="button" data-shell-menu aria-label="Abrir menú" class="lg:hidden w-10 h-10 grid place-items-center"><i data-lucide="menu" class="w-5"></i></button>
    </div></div>`;
  old.replaceWith(header);

  const layer=document.createElement('div');
  layer.id='shared-shell-layer';layer.className='fixed inset-0 z-[260] hidden';
  layer.innerHTML=`<div data-shell-backdrop class="absolute inset-0 bg-black/65"></div><aside data-shell-drawer class="absolute inset-y-0 right-0 w-[88vw] max-w-[410px] bg-[#07131b] text-white translate-x-full transition-transform duration-200 shadow-2xl overflow-y-auto"><div class="h-16 px-5 border-b border-white/10 flex items-center justify-between"><img src="assets/logos/KUBOR_only_clear.svg" class="w-[120px]" alt="KUBOR"><button data-shell-close class="w-11 h-11 grid place-items-center" aria-label="Cerrar"><i data-lucide="x"></i></button></div><nav class="p-5"><a href="discipline-mtb.html" class="flex justify-between py-4 border-b border-white/10 font-black uppercase">MTB <span>→</span></a><a href="discipline-road.html" class="flex justify-between py-4 border-b border-white/10 font-black uppercase">Ruta <span>→</span></a><a href="discipline-gravel.html" class="flex justify-between py-4 border-b border-white/10 font-black uppercase">Gravel <span>→</span></a><a href="discipline-urban.html" class="flex justify-between py-4 border-b border-white/10 font-black uppercase">Urbanas <span>→</span></a><a href="discipline-electric.html" class="flex justify-between py-4 border-b border-white/10 font-black uppercase">Eléctricas <span>→</span></a><a href="brand-kubor.html" class="flex justify-between py-4 border-b border-white/10 font-black uppercase">KUBOR <span>→</span></a><a href="brand-terrafit.html" class="flex justify-between py-4 border-b border-white/10 font-black uppercase">Terrafit <span>→</span></a><a href="brand-hypergogo.html" class="flex justify-between py-4 border-b border-white/10 font-black uppercase">HYPERGOGO <span>→</span></a></nav><div class="p-5 grid grid-cols-2 gap-2"><a href="account.html" class="h-12 border border-white/20 grid place-items-center font-bold">Mi cuenta</a><a href="cart.html" class="h-12 border border-white/20 grid place-items-center font-bold">Carrito</a></div></aside><aside data-shell-search-panel class="absolute inset-y-0 right-0 w-full max-w-[480px] bg-white translate-x-full transition-transform duration-200 shadow-2xl"><div class="h-16 px-5 border-b flex items-center justify-between"><b class="uppercase">Buscar</b><button data-shell-close class="w-11 h-11 grid place-items-center" aria-label="Cerrar"><i data-lucide="x"></i></button></div><div class="p-5"><label class="min-h-[52px] border flex items-center gap-3 px-4"><i data-lucide="search" class="w-5"></i><input class="flex-1 outline-none text-base" placeholder="Buscar productos, categorías..."></label><div class="mt-5 grid gap-2 text-sm"><a href="collection-v2.html" class="py-3 border-b">Bicicletas</a><a href="discipline-mtb.html" class="py-3 border-b">MTB</a><a href="discipline-gravel.html" class="py-3 border-b">Gravel</a><a href="brand-kubor.html" class="py-3 border-b">KUBOR</a></div></div></aside>`;
  document.body.appendChild(layer);
  const drawer=layer.querySelector('[data-shell-drawer]'), search=layer.querySelector('[data-shell-search-panel]');
  const lock=on=>document.documentElement.classList.toggle('overflow-hidden',on);
  const close=()=>{drawer.classList.add('translate-x-full');search.classList.add('translate-x-full');setTimeout(()=>{layer.classList.add('hidden');lock(false)},190)};
  const openDrawer=()=>{layer.classList.remove('hidden');search.classList.add('translate-x-full');requestAnimationFrame(()=>drawer.classList.remove('translate-x-full'));lock(true)};
  const openSearch=()=>{layer.classList.remove('hidden');drawer.classList.add('translate-x-full');requestAnimationFrame(()=>search.classList.remove('translate-x-full'));lock(true)};
  header.querySelector('[data-shell-menu]').addEventListener('click',openDrawer);
  header.querySelector('[data-shell-search]').addEventListener('click',openSearch);
  layer.querySelector('[data-shell-backdrop]').addEventListener('click',close);
  layer.querySelectorAll('[data-shell-close]').forEach(b=>b.addEventListener('click',close));
  document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
  window.lucide&&lucide.createIcons({attrs:{'stroke-width':1.65}});
})();