(() => {
  'use strict';
  document.documentElement.classList.replace('no-js', 'js');
  const config = JSON.parse(document.getElementById('KuborConfig')?.textContent || '{}');
  const status = document.getElementById('SiteStatus');
  const announce = (text) => { if (status) status.textContent = text; };
  const parse = (html) => new DOMParser().parseFromString(html, 'text/html');
  let cartBusy = false;
  const openers = new WeakMap();

  function closeDialog(dialog) {
    dialog.close();
    document.documentElement.classList.remove('dialog-open');
    const opener = openers.get(dialog);
    if (opener?.isConnected) opener.focus();
  }
  function openDialog(dialog, opener) {
    if (!dialog?.showModal) return false;
    document.querySelectorAll('dialog[open]').forEach(closeDialog);
    openers.set(dialog, opener || document.activeElement);
    dialog.showModal();
    document.documentElement.classList.add('dialog-open');
    (dialog.querySelector('input[type="search"]') || dialog.querySelector('button'))?.focus();
    return true;
  }
  document.addEventListener('click', (event) => {
    const open = event.target.closest('[data-open-dialog]');
    if (open && openDialog(document.getElementById(open.dataset.openDialog), open)) event.preventDefault();
    const close = event.target.closest('[data-close-dialog]');
    if (close) closeDialog(close.closest('dialog'));
    if (event.target.matches('dialog[open]')) {
      const rect = event.target.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closeDialog(event.target);
    }
    const stepper = event.target.closest('[data-quantity-step]');
    if (stepper && !cartBusy) {
      const input = document.getElementById(stepper.dataset.input);
      if (!input) return;
      const next = Math.max(0, Number(input.value) + Number(stepper.dataset.quantityStep));
      input.value = String(next);
      input.dispatchEvent(new Event('change', { bubbles: true }));
    }
    const remove = event.target.closest('[data-remove-key]');
    if (remove) {
      event.preventDefault();
      if (!cartBusy) changeCart(remove.dataset.removeKey, 0);
    }
    if (!event.target.closest('.nav-group')) document.querySelectorAll('.nav-group[open]').forEach((group) => { group.open = false; });
  });
  document.addEventListener('cancel', (event) => {
    if (event.target.matches('dialog')) { event.preventDefault(); closeDialog(event.target); }
  }, true);
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Tab') {
      const dialog = document.querySelector('dialog[open]');
      if (dialog) {
        const controls = [...dialog.querySelectorAll('a[href],button,input,select,textarea,[tabindex]')].filter((el) => !el.disabled && el.tabIndex >= 0 && el.getClientRects().length);
        const first = controls[0];
        const last = controls.at(-1);
        if (first && (event.shiftKey && document.activeElement === first || !event.shiftKey && document.activeElement === last || !dialog.contains(document.activeElement))) {
          event.preventDefault();
          (event.shiftKey ? last : first).focus();
        }
      }
    }
    if (event.key === 'Escape') document.querySelectorAll('.nav-group[open]').forEach((group) => { group.open = false; group.querySelector('summary').focus(); });
  });
  document.addEventListener('toggle', (event) => {
    if (event.target.matches('.nav-group[open]')) document.querySelectorAll('.nav-group[open]').forEach((other) => { if (other !== event.target) other.open = false; });
  }, true);

  async function request(url, options = {}) {
    const response = await fetch(url, { credentials: 'same-origin', ...options });
    let data;
    try { data = await response.json(); } catch { throw new Error(config.error); }
    if (!response.ok) throw new Error(typeof data.description === 'string' ? data.description : config.error);
    return data;
  }
  function cartState(busy) {
    cartBusy = busy;
    document.querySelectorAll('[data-cart-content], [data-main-cart]').forEach((area) => {
      area.setAttribute('aria-busy', String(busy));
      area.querySelectorAll('button,input,textarea').forEach((control) => { control.disabled = busy; });
    });
    if (busy) document.querySelectorAll('[data-cart-error]').forEach((error) => { error.textContent = ''; });
  }
  async function refreshCart() {
    const notes = [...document.querySelectorAll('.cart-form [name="note"]')].map((input) => [input.id, input.value]);
    const main = document.querySelector('[data-main-cart]');
    const sectionIds = ['cart-drawer', main?.dataset.sectionId].filter(Boolean);
    const url = new URL(config.cart, location.origin);
    url.searchParams.set('sections', sectionIds.join(','));
    const sections = await request(url);
    const current = document.querySelector('#CartDrawer [data-cart-content]');
    const fresh = sections['cart-drawer'] ? parse(sections['cart-drawer']) : null;
    if (!current || !fresh?.querySelector('[data-cart-content]')) throw new Error('cart-render');
    const activeId = document.activeElement?.id;
    current.innerHTML = fresh.querySelector('[data-cart-content]').innerHTML;
    const count = fresh.querySelector('[data-cart-count]')?.textContent || '0';
    document.querySelectorAll('[data-cart-count]').forEach((el) => { el.textContent = count; });
    if (main) {
      const next = sections[main.dataset.sectionId] && parse(sections[main.dataset.sectionId]).querySelector('[data-main-cart]');
      if (!next) throw new Error('cart-render');
      main.replaceWith(next);
    }
    if (activeId) document.getElementById(activeId)?.focus();
    notes.forEach(([id, value]) => { const input = document.getElementById(id); if (input) input.value = value; });
  }
  async function changeCart(key, quantity) {
    if (cartBusy || !Number.isInteger(quantity) || quantity < 0) return;
    cartState(true);
    let mutated = false;
    try {
      await request(config.cartChange + '.js', { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify({ id: key, quantity }) });
      mutated = true;
      await refreshCart();
      announce(config.updated);
    } catch (error) {
      if (mutated) { location.assign(config.cart); return; }
      try { await refreshCart(); } catch {}
      document.querySelectorAll('[data-cart-error]').forEach((el) => { el.textContent = error.message; });
    } finally { cartState(false); }
  }
  document.addEventListener('change', (event) => {
    const input = event.target.closest('[data-line-key]');
    if (input && input.checkValidity()) changeCart(input.dataset.lineKey, Number(input.value));
  });
  document.addEventListener('submit', async (event) => {
    const form = event.target.closest('[data-product-form]');
    if (!form) return;
    event.preventDefault();
    if (cartBusy || form.dataset.busy || !form.reportValidity()) return;
    const body = new FormData(form);
    if (!body.get('id')) return;
    const button = form.querySelector('[name="add"]');
    const errorBox = form.querySelector('[data-product-error]');
    errorBox.textContent = '';
    form.dataset.busy = 'true';
    form.setAttribute('aria-busy', 'true');
    button.disabled = true;
    cartState(true);
    let added = false;
    try {
      await request(config.cartAdd + '.js', { method: 'POST', body, headers: { Accept: 'application/json' } });
      added = true;
      await refreshCart();
      openDialog(document.getElementById('CartDrawer'), button);
      announce(config.added);
    } catch (error) {
      if (added) { location.assign(config.cart); return; }
      errorBox.textContent = error.message;
    } finally {
      delete form.dataset.busy;
      form.setAttribute('aria-busy', 'false');
      button.disabled = false;
      cartState(false);
    }
  });

  let variantRequest;
  document.addEventListener('change', async (event) => {
    if (!event.target.matches('[data-option-value]')) return;
    const section = event.target.closest('[data-product-section]');
    variantRequest?.abort();
    const controller = new AbortController();
    variantRequest = controller;
    const values = [...section.querySelectorAll('[data-option-value]:checked')].map((input) => input.value);
    const url = new URL(event.target.dataset.productUrl || section.dataset.productUrl, location.origin);
    if (url.origin !== location.origin) return;
    url.searchParams.set('option_values', values.join(','));
    url.searchParams.set('section_id', section.dataset.sectionId);
    const optionName = event.target.name;
    const optionValue = event.target.value;
    const quantity = section.querySelector('[name="quantity"]')?.value;
    section.setAttribute('aria-busy', 'true');
    section.querySelectorAll('[data-product-form] button, [data-product-form] [name="id"]').forEach((el) => { el.disabled = true; });
    const accelerated = section.querySelector('.shopify-payment-button');
    if (accelerated) accelerated.hidden = true;
    const errorBox = section.querySelector('[data-product-error]');
    errorBox.textContent = '';
    try {
      const response = await fetch(url, { signal: controller.signal, credentials: 'same-origin' });
      if (!response.ok) throw new Error(config.error);
      const next = parse(await response.text()).querySelector('[data-product-section]');
      if (!next) throw new Error(config.error);
      if (controller.signal.aborted) return;
      const nextQuantity = next.querySelector('[name="quantity"]');
      if (nextQuantity && quantity) {
        const minimum = Number(nextQuantity.min || 1);
        const maximum = Number(nextQuantity.max || Infinity);
        const step = Number(nextQuantity.step || 1);
        nextQuantity.value = String(Math.min(maximum, Math.max(minimum, minimum + Math.floor((Number(quantity) - minimum) / step) * step)));
      }
      section.replaceWith(next);
      const selected = [...next.querySelectorAll('[data-option-value]')].find((el) => el.name === optionName && el.value === optionValue);
      selected?.focus({ preventScroll: true });
      url.searchParams.delete('section_id');
      if (next.dataset.variantId) { url.searchParams.delete('option_values'); url.searchParams.set('variant', next.dataset.variantId); }
      history.replaceState({}, '', url);
      window.Shopify?.PaymentButton?.init();
      announce(next.querySelector('.availability')?.textContent || '');
    } catch (error) {
      if (error.name !== 'AbortError') { errorBox.textContent = config.error; section.setAttribute('aria-busy', 'false'); }
    }
  });

  let searchTimer;
  let searchRequest;
  document.addEventListener('input', (event) => {
    if (!event.target.matches('[data-predictive-input]')) return;
    clearTimeout(searchTimer);
    searchRequest?.abort();
    const query = event.target.value.trim();
    const results = document.querySelector('[data-predictive-results]');
    results.replaceChildren();
    results.removeAttribute('aria-busy');
    if (query.length < 2) return;
    searchTimer = setTimeout(async () => {
      const controller = new AbortController();
      searchRequest = controller;
      results.setAttribute('aria-busy', 'true');
      const url = new URL(config.searchSuggest, location.origin);
      url.searchParams.set('q', query);
      url.searchParams.set('section_id', 'predictive-search');
      url.searchParams.set('resources[type]', 'product,collection,article,page');
      url.searchParams.set('resources[limit]', '6');
      try {
        const response = await fetch(url, { signal: controller.signal });
        if (!response.ok) throw new Error(config.error);
        const next = parse(await response.text()).querySelector('.predictive-results');
        if (controller.signal.aborted) return;
        if (next) results.replaceChildren(next);
      } catch (error) {
        if (error.name !== 'AbortError') results.textContent = config.error;
      } finally { if (!controller.signal.aborted) results.removeAttribute('aria-busy'); }
    }, 250);
  });
  function initialize(root = document) {
    if (matchMedia('(max-width: 700px)').matches) root.querySelectorAll('.filter-panel').forEach((panel) => { panel.open = false; });
    root.querySelectorAll('[data-recommendations]').forEach((element) => {
      if (element.dataset.initialized) return;
      element.dataset.initialized = 'true';
      const observer = new IntersectionObserver(async (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        observer.disconnect();
        try {
          const response = await fetch(element.dataset.url);
          if (!response.ok) return;
          const next = parse(await response.text()).querySelector('[data-recommendations]');
          if (next) element.innerHTML = next.innerHTML;
        } catch {}
      }, { rootMargin: '300px' });
      observer.observe(element);
    });
  }
  initialize();
  document.addEventListener('shopify:section:load', (event) => initialize(event.target));
})();
