import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import fs from 'node:fs';
const fixtures = JSON.parse(fs.readFileSync('preview/fixtures.json', 'utf8'));
const pages = ['index.html', 'collection-v2.html', 'product-v2.html', 'brand-hypergogo.html', 'bike-finder.html', 'contact.html', 'cart.html', 'faq.html', 'search.html', 'all-collections.html'];

for (const file of pages) {
  test(file + ': responsive, images, accessibility and runtime', async ({ page }, testInfo) => {
    const errors = [];
    page.on('pageerror', (error) => errors.push(error.message));
    await page.goto('/' + file);
    await page.evaluate(() => document.fonts.ready);
    await expect(page.locator('h1')).toHaveCount(1);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1);
    expect(overflow).toBe(false);
    const brokenImages = await page.locator('img:visible').evaluateAll((images) => images.filter((image) => image.complete && !image.naturalWidth).map((image) => image.src));
    expect(brokenImages).toEqual([]);
    const result = await new AxeBuilder({ page }).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();
    expect(result.violations.map((v) => ({ id: v.id, nodes: v.nodes.map((node) => node.target) }))).toEqual([]);
    expect(errors).toEqual([]);
    await page.screenshot({ path: 'docs/evidence/after-' + file.replace('.html','') + '-' + testInfo.project.name + '.png', fullPage: true });
  });
}

test('variant changes, sold-out state, cart quantity, remove, persistence and checkout boundary', async ({ page }) => {
  await page.goto('/product-v2.html');
  await page.locator('[data-option-value][value="10001"]').check();
  await expect(page.locator('[name="add"]')).toHaveText(/Agotado/);
  await expect(page.locator('[name="add"]')).toBeDisabled();
  await page.locator('[data-option-value][value="10002"]').check();
  await expect(page.locator('[data-product-form] [name="id"]')).toHaveValue('102');
  await expect(page).toHaveURL(/variant=102/);
  await page.getByRole('button', { name: 'Agregar al carrito' }).click();
  const drawer = page.locator('#CartDrawer');
  await expect(drawer).toBeVisible();
  await expect(drawer.locator('.cart-line')).toHaveCount(1);
  await expect(drawer.locator('.cart-line')).toContainText('Naranja');
  await drawer.getByRole('button', { name: 'Aumentar cantidad' }).click();
  await expect(drawer.locator('[data-line-key]')).toHaveValue('2');
  await expect(drawer.locator('.subtotal')).toContainText('15,398');
  await page.keyboard.press('Escape');
  await expect(page.getByRole('button', { name: 'Agregar al carrito' })).toBeFocused();
  await page.goto('/cart.html');
  await expect(page.locator('[data-main-cart] [data-line-key]')).toHaveValue('2');
  await page.locator('[data-main-cart] [name="note"]').fill('Entregar en recepción');
  await page.locator('[data-main-cart]').getByRole('button', { name: 'Aumentar cantidad' }).click();
  await expect(page.locator('[data-main-cart] [data-line-key]')).toHaveValue('3');
  await expect(page.locator('[data-main-cart] [name="note"]')).toHaveValue('Entregar en recepción');
  await page.locator('[data-main-cart]').getByRole('button', { name: 'Finalizar compra' }).click();
  await expect(page).toHaveURL(/preview-submit.html/);
  await expect(page.locator('main')).toContainText('No procesa pagos');
  await page.goto('/cart.html');
  await page.locator('[data-main-cart] [data-remove-key]').click();
  await expect(page.locator('[data-main-cart] .empty-state')).toBeVisible();
});

test('search supports suggestions, no results and full results', async ({ page }) => {
  await page.goto('/index.html');
  await page.locator('[data-open-dialog="SearchDrawer"]').click();
  await expect(page.locator('#PredictiveSearch')).toBeFocused();
  await page.locator('#PredictiveSearch').fill('Mallory');
  await expect(page.locator('#PredictiveResults .predictive-product')).toHaveCount(1);
  await page.locator('#PredictiveSearch').fill('zzzznothing');
  await expect(page.locator('#PredictiveResults')).toContainText('Sin coincidencias');
  await page.locator('#PredictiveSearch').fill('HYPERGOGO');
  await expect(page.locator('#PredictiveResults .predictive-product')).toHaveCount(2);
  await page.locator('#PredictiveResults .button').click();
  await expect(page.locator('main .product-card')).toHaveCount(2);
});

test('filters and sorting produce correct visible products', async ({ page }) => {
  await page.goto('/collection-v2.html?filter.v.price.lte=8000&sort_by=price-ascending');
  await expect(page.locator('.collection-layout .product-card')).toHaveCount(2);
  await expect(page.locator('.collection-layout .product-card').first()).toContainText('Alpine');
  await page.goto('/collection-v2.html?filter.v.price.lte=1');
  await expect(page.locator('.collection-layout .product-card')).toHaveCount(0);
  await expect(page.locator('.collection-layout')).toContainText('No hay modelos');
});

test('dialog keyboard focus stays inside and returns to opener', async ({ page }) => {
  await page.goto('/index.html');
  const opener = page.locator('[data-open-dialog="SearchDrawer"]');
  await opener.click();
  for (let i = 0; i < 8; i++) {
    await page.keyboard.press('Tab');
    expect(await page.evaluate(() => !!document.activeElement.closest('#SearchDrawer'))).toBe(true);
  }
  await page.keyboard.press('Escape');
  await expect(opener).toBeFocused();
});

test('contact does not invent a successful submission in the preview', async ({ page }) => {
  await page.goto('/contact.html');
  const form = page.locator('.contact-form');
  await form.locator('[name="contact[name]"]').fill('Prueba KUBOR');
  await form.locator('[name="contact[email]"]').fill('test@example.com');
  await form.locator('[name="contact[body]"]').fill('Necesito ayuda para elegir la talla.');
  await form.locator('input[type="checkbox"]').check();
  await form.getByRole('button', { name: 'Enviar mensaje' }).click();
  await expect(form.locator('[role="status"]')).toContainText('no se ha enviado');
});

test('native Ajax rejects inventory errors without losing the product form', async ({ page }) => {
  await page.route('**/preview/adapter.js', (route) => route.fulfill({ contentType: 'application/javascript', body: '' }));
  await page.route('**/cart/add.js', (route) => route.fulfill({ status: 422, contentType: 'application/json', body: JSON.stringify({ description: 'Esta variante ya no tiene inventario.' }) }));
  await page.goto('/product-v2.html');
  await page.getByRole('button', { name: 'Agregar al carrito' }).click();
  await expect(page.locator('[data-product-error]')).toHaveText('Esta variante ya no tiene inventario.');
  await expect(page.getByRole('button', { name: 'Agregar al carrito' })).toBeEnabled();
  await expect(page.locator('#CartDrawer')).not.toBeVisible();
});

test('native failed variant rendering blocks purchase of the previous variant', async ({ page }) => {
  await page.route('**/preview/adapter.js', (route) => route.fulfill({ contentType: 'application/javascript', body: '' }));
  await page.route('**/*section_id=main_product_0*', (route) => route.fulfill({ status: 500, body: '' }));
  await page.goto('/product-v2.html');
  await page.locator('[data-option-value][value="10002"]').check();
  await expect(page.locator('[data-product-error]')).toContainText('No pudimos');
  await expect(page.locator('[name="add"]')).toBeDisabled();
  await expect(page.locator('[data-product-form] [name="id"]')).toBeDisabled();
});

test('native cart rendering failure after successful add goes to canonical cart', async ({ page }) => {
  await page.route('**/preview/adapter.js', (route) => route.fulfill({ contentType: 'application/javascript', body: '' }));
  await page.route('**/cart/add.js', (route) => route.fulfill({ contentType: 'application/json', body: '{"id":100}' }));
  await page.route('**/cart.html?sections=*', (route) => route.fulfill({ contentType: 'application/json', body: '{"cart-drawer":null}' }));
  await page.goto('/product-v2.html');
  await page.getByRole('button', { name: 'Agregar al carrito' }).click();
  await expect(page).toHaveURL(/cart.html$/);
});

test('native stale variant requests cannot overwrite the latest selection', async ({ page }) => {
  await page.route('**/preview/adapter.js', (route) => route.fulfill({ contentType: 'application/javascript', body: '' }));
  await page.route('**/product-1.html?*', async (route) => {
    const url = new URL(route.request().url());
    const id = url.searchParams.get('option_values') === '10001' ? 101 : 102;
    if (id === 101) await new Promise((resolve) => setTimeout(resolve, 350));
    await route.fulfill({ contentType: 'text/html', body: fixtures.variants[1][id].html }).catch(() => {});
  });
  await page.goto('/product-v2.html');
  await page.locator('[data-option-value][value="10001"]').check();
  await page.locator('[data-option-value][value="10002"]').check();
  await expect(page.locator('[data-product-form] [name="id"]')).toHaveValue('102');
  await page.waitForTimeout(450);
  await expect(page.locator('[data-product-form] [name="id"]')).toHaveValue('102');
});

test('no-JavaScript browsing, variant fallback and product form remain usable', async ({ browser }, testInfo) => {
  const context = await browser.newContext({ javaScriptEnabled: false, viewport: testInfo.project.use.viewport });
  const page = await context.newPage();
  await page.goto('/product-v2.html');
  await expect(page.locator('h1')).toContainText('Mallory');
  await expect(page.locator('#VariantFallback')).toBeVisible();
  await expect(page.locator('[data-product-form]')).toHaveAttribute('action', 'cart/add');
  await expect(page.locator('[data-product-form] [name="id"]')).toHaveValue('100');
  await expect(page.locator('[data-open-dialog="CartDrawer"]')).toHaveAttribute('href', 'cart.html');
  await context.close();
});
