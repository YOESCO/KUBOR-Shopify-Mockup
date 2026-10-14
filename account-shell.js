document.addEventListener('DOMContentLoaded',()=>{
  const mount=document.querySelector('[data-account-shell]');if(!mount)return;
  const page=(location.pathname.split('/').pop()||'account.html').toLowerCase();
  const items=[
    ['account.html','Resumen'],['orders.html','Pedidos'],['tracking.html','Tracking'],['addresses.html','Direcciones'],['wishlist.html','Wishlist'],['warranties.html','Garantías'],['registered-bikes.html','Mis bicicletas'],['support.html','Soporte'],['account-preferences.html','Preferencias']
  ];
  const label=items.find(([href])=>href===page)?.[1]||'Mi cuenta';
  mount.innerHTML=`<section class="account-hero"><div class="k-wrap account-hero-inner"><div><span class="k-eyebrow text-cyan-300">Customer hub</span><h1 class="k-display">${label==='Resumen'?'Mi cuenta':label}</h1><p class="text-[11px] text-white/55 mt-3 max-w-xl">Pedidos, bicicletas registradas, garantías, favoritos y soporte desde un solo lugar.</p></div><div class="text-right"><span class="k-eyebrow text-white/40">Sesión activa</span><b class="block mt-2 text-sm">Cuenta KUBOR</b><a href="login.html" class="text-[8px] text-cyan-300 uppercase font-black mt-1 inline-block">Cerrar sesión</a></div></div></section><div class="account-subnav"><div class="k-wrap"><nav>${items.map(([href,name])=>`<a href="${href}" class="${href===page?'is-active':''}" ${href===page?'aria-current="page"':''}>${name}</a>`).join('')}</nav></div></div>`;
});
