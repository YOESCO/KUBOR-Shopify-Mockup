(() => {
  'use strict';
  const base = new URL('../', document.currentScript.src);
  const originalFetch = window.fetch.bind(window);
  const fixtures = originalFetch(new URL('preview/fixtures.json', base)).then((r) => r.json());
  const key = 'kubor-preview-v2';
  const parse = (html) => new DOMParser().parseFromString(html, 'text/html');
  const money = (value) => new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(value / 100) + ' MXN';
  let memory = { items: [], note: '' };
  function load() {
    try {
      const value = JSON.parse(localStorage.getItem(key));
      if (value && Array.isArray(value.items)) return value;
    } catch {}
    return memory;
  }
  function save(value) { memory = value; try { localStorage.setItem(key, JSON.stringify(value)); } catch {} }
  const response = (value, status = 200, html = false) => new Response(html ? value : JSON.stringify(value), { status, headers: { 'Content-Type': html ? 'text/html' : 'application/json' } });
  function renderCart(data, context) {
    const cart = load();
    const valid = cart.items.filter((item) => data.cart[item.id] && Number.isInteger(item.quantity) && item.quantity > 0);
    if (!valid.length) return context === 'drawer' ? data.templates.empty : data.templates.emptyPage;
    const document = parse(data.cart[valid[0].id][context]);
    const lines = document.querySelector('.cart-lines');
    lines.replaceChildren();
    let total = 0;
    for (const [index, item] of valid.entries()) {
      const source = parse(data.cart[item.id][context]);
      const line = source.querySelector('.cart-line');
      const input = line.querySelector('[data-line-key]');
      const id = context + '-quantity-' + (index + 1);
      input.id = id;
      input.value = item.quantity;
      input.setAttribute('value', item.quantity);
      line.querySelector('label').htmlFor = id;
      line.querySelectorAll('[data-input]').forEach((button) => { button.dataset.input = id; });
      const price = data.cart[item.id].price * item.quantity;
      line.querySelector('.cart-line__price strong').textContent = money(price);
      total += price;
      lines.append(line);
    }
    document.querySelectorAll('[data-cart-count]').forEach((count) => { count.textContent = valid.reduce((n, item) => n + item.quantity, 0); });
    document.querySelector('.subtotal strong:last-child').textContent = money(total);
    document.querySelector('[name="note"]').textContent = cart.note || '';
    return document.body.innerHTML;
  }
  window.fetch = async (input, options = {}) => {
    const url = new URL(typeof input === 'string' || input instanceof URL ? input : input.url, location.href);
    if (url.origin !== location.origin) return originalFetch(input, options);
    const endpoint = url.pathname;
    const isMock = /cart\/(add|change)\.js$/.test(endpoint) || (endpoint.endsWith('cart.html') && url.searchParams.has('sections')) || url.searchParams.has('section_id') || endpoint.endsWith('search-suggest') || endpoint.endsWith('recommendations/products');
    if (!isMock) return originalFetch(input, options);
    const data = await fixtures;
    if (options.signal?.aborted) throw new DOMException('Aborted', 'AbortError');
    if (endpoint.endsWith('cart/add.js')) {
      const id = Number(options.body.get('id'));
      const quantity = Number(options.body.get('quantity') || 1);
      const product = data.products.find((p) => p.variants.some((v) => v.id === id));
      const variant = product?.variants.find((v) => v.id === id);
      const cart = load();
      const existing = cart.items.find((item) => item.id === id);
      if (!variant?.available || !Number.isInteger(quantity) || quantity < 1 || quantity + (existing?.quantity || 0) > 5) return response({ description: 'No hay unidades suficientes para esta selección de prueba.' }, 422);
      if (existing) existing.quantity += quantity;
      else cart.items.push({ id, quantity });
      save(cart);
      return response({ id, quantity });
    }
    if (endpoint.endsWith('cart/change.js')) {
      const { id: lineKey, quantity } = JSON.parse(options.body);
      const id = Number(String(lineKey).replace('preview-', ''));
      if (!Number.isInteger(quantity) || quantity < 0 || quantity > 5) return response({ description: 'Puedes agregar hasta 5 unidades en esta demo.' }, 422);
      const cart = load();
      const item = cart.items.find((item) => item.id === id);
      if (!item) return response({ description: 'El producto ya no está en el carrito.' }, 422);
      item.quantity = quantity;
      cart.items = cart.items.filter((item) => item.quantity > 0);
      save(cart);
      return response(cart);
    }
    if (endpoint.endsWith('cart.html') && url.searchParams.has('sections')) return response({ 'cart-drawer': renderCart(data, 'drawer'), main_cart_0: renderCart(data, 'page') });
    if (endpoint.endsWith('search-suggest')) {
      const q = url.searchParams.get('q')?.toLowerCase() || '';
      const found = data.products.filter((p) => (p.title + ' ' + p.vendor).toLowerCase().includes(q));
      const node = parse(data.predictions[1]);
      node.querySelectorAll('.predictive-product').forEach((item) => item.remove());
      const heading = node.querySelector('h3');
      heading.textContent = found.length ? 'Productos' : 'Sin coincidencias. Prueba otra búsqueda.';
      for (const p of found) heading.after(parse(data.predictions[p.id]).querySelector('.predictive-product'));
      node.querySelector('.button').setAttribute('href', 'search.html?q=' + encodeURIComponent(q));
      return response(node.body.innerHTML, 200, true);
    }
    if (endpoint.endsWith('recommendations/products')) return response('<div data-recommendations></div>', 200, true);
    if (url.searchParams.get('section_id') === 'main_product_0') {
      const productId = Number(endpoint.match(/product-(\d+)\.html/)?.[1] || 1);
      const variants = data.variants[productId];
      const requested = url.searchParams.get('option_values');
      const match = Object.entries(variants).find(([id, v]) => requested ? v.optionValues.join(',') === requested : id === url.searchParams.get('variant')) || Object.entries(variants)[0];
      return response(match[1].html, 200, true);
    }
    return originalFetch(input, options);
  };
  document.addEventListener('submit', async (event) => {
    const form = event.target;
    if (form.matches('.cart-form')) {
      event.preventDefault();
      const cart = load();
      cart.note = form.querySelector('[name="note"]').value;
      save(cart);
      if (event.submitter?.name === 'checkout') location.href = 'preview-submit.html';
      else {
        const data = await fixtures;
        const fresh = parse(renderCart(data, 'page')).querySelector('[data-main-cart]');
        document.querySelector('[data-main-cart]')?.replaceWith(fresh);
        const notice = document.getElementById('SiteStatus');
        notice.textContent = 'Carrito de prueba actualizado.';
      }
    } else if (form.matches('[data-preview-form]:not([data-preview-form="product"])')) {
      event.preventDefault();
      let notice = form.querySelector('[data-preview-message]');
      if (!notice) { notice = document.createElement('p'); notice.dataset.previewMessage = ''; notice.setAttribute('role', 'status'); form.append(notice); }
      notice.textContent = 'Vista previa: el formulario es válido, pero no se ha enviado. En Shopify se conectará al formulario nativo.';
    }
  });
  document.addEventListener('DOMContentLoaded', async () => {
    const data = await fixtures;
    const cart = parse(renderCart(data, 'drawer'));
    const target = document.querySelector('#CartDrawer [data-cart-content]');
    if (target) target.innerHTML = cart.querySelector('[data-cart-content]').innerHTML;
    const count = load().items.reduce((n, item) => n + item.quantity, 0);
    document.querySelectorAll('[data-cart-count]').forEach((el) => { el.textContent = count; });
    const mainCart = document.querySelector('[data-main-cart]');
    if (mainCart) mainCart.replaceWith(parse(renderCart(data, 'page')).querySelector('[data-main-cart]'));
    const params = new URLSearchParams(location.search);
    const productSection = document.querySelector('[data-product-section]');
    if (productSection && params.has('variant')) {
      const productId = Number(location.pathname.match(/product-(\d+)\.html/)?.[1] || 1);
      const variant = data.variants[productId]?.[params.get('variant')];
      if (variant) productSection.replaceWith(parse(variant.html).querySelector('[data-product-section]'));
    }
    const grid = document.querySelector('.collection-layout .product-grid');
    if (grid) {
      const productByUrl = new Map(data.products.map((p) => ['product-' + p.id + '.html', p]));
      const cards = [...grid.querySelectorAll('.product-card')];
      let shown = cards.map((card) => ({ card, product: productByUrl.get(card.querySelector('a').getAttribute('href')) }));
      const vendor = params.get('filter.p.vendor');
      const min = params.get('filter.v.price.gte');
      const max = params.get('filter.v.price.lte');
      shown = shown.filter(({ product }) => product && (!vendor || product.vendor === vendor) && (!min || product.variants[0].price >= Number(min) * 100) && (!max || product.variants[0].price <= Number(max) * 100));
      const sort = params.get('sort_by');
      if (sort?.startsWith('price-')) shown.sort((a, b) => (a.product.variants[0].price - b.product.variants[0].price) * (sort.endsWith('descending') ? -1 : 1));
      if (sort === 'title-ascending') shown.sort((a, b) => a.product.title.localeCompare(b.product.title));
      if (cards.length) {
        grid.replaceChildren(...shown.map(({ card }) => card));
        const count = document.querySelector('.collection-toolbar p');
        if (count) count.textContent = shown.length + ' productos';
        if (!shown.length) { const empty = document.createElement('div'); empty.className = 'empty-state'; empty.textContent = 'No hay modelos con estos filtros. Prueba otra selección.'; grid.append(empty); }
      }
      document.querySelectorAll('.facets input,.facets select').forEach((input) => { const value = params.get(input.name); if (input.type === 'checkbox') input.checked = value === input.value; else if (value) input.value = value; });
    }
    if (location.pathname.endsWith('search.html') && params.has('q')) {
      const q = params.get('q');
      document.querySelector('#SearchPage').value = q;
      const matches = data.products.filter((p) => (p.title + ' ' + p.vendor).toLowerCase().includes(q.toLowerCase()));
      const results = document.createElement('div'); results.className = 'product-grid';
      for (const product of matches) results.append(parse(data.cards[product.id]).querySelector('.product-card'));
      const heading = document.createElement('p'); heading.textContent = matches.length + ' resultados para «' + q + '»';
      document.querySelector('.page-search').after(heading, results);
    }
  });
})();
