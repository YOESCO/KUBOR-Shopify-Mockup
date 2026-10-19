import fs from 'node:fs/promises';
import path from 'node:path';
import { Liquid } from 'liquidjs';
import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = (file) => fs.readFile(path.join(root, file), 'utf8');
const json = async (file) => JSON.parse(await read(file));
const escape = (value = '') => String(value).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const translations = await json('theme/locales/es.default.json');
const snapshot = await json('preview/catalog.json');
const engine = new Liquid({ root: path.join(root, 'theme/snippets'), extname: '.liquid', strictFilters: false, lenientIf: true });
const originalRead = engine.options.fs.readFile;
engine.options.fs = { ...engine.options.fs, readFile: async (...args) => preprocess(await originalRead(...args)) };
function preprocess(source) {
  return source.replace(/{%[-]?\s*(schema|doc)\s*[-]?%}[\s\S]*?{%[-]?\s*end\1\s*[-]?%}/g, '')
    .replace(/render 'cart-content',/g, "render 'cart-content', cart: cart, routes: routes,")
    .replace(/render 'facets',/g, "render 'facets', routes: routes,")
    .replace(/{%\s*paginate[^%]*%}/g, '').replace(/{%\s*endpaginate\s*%}/g, '')
    .replace(/{%\s*layout[^%]*%}/g, '')
    .replace(/{%\s*form\s+'([^']+)'([^%]*)%}/g, (_, type, attributes) => {
      const id = attributes.match(/id:\s*([^,]+)/)?.[1]?.trim();
      const cls = attributes.match(/class:\s*'([^']*)'/)?.[1] || '';
      const extra = type === 'product' ? ' data-product-form' : '';
      const action = type === 'product' ? '{{ routes.cart_add_url }}' : type === 'cart' ? '{{ routes.cart_url }}' : 'preview-submit.html';
      return '<form method="post" action="' + action + '"' + (id ? ' id="{{ ' + id + ' }}"' : '') + ' class="' + cls + '"' + extra + ' data-preview-form="' + type + '">';
    }).replace(/{%\s*endform\s*%}/g, '</form>');
}
engine.registerFilter('asset_url', (name) => 'theme/assets/' + name);
engine.registerFilter('stylesheet_tag', (url) => '<link rel="stylesheet" href="' + escape(url) + '">');
engine.registerFilter('image_url', (image) => image?.src || image || '');
engine.registerFilter('image_tag', (image, ...args) => {
  const options = Object.fromEntries(args.filter(Array.isArray));
  return '<img src="' + escape(image?.src || image) + '" width="' + (options.width || 1000) + '" height="' + (options.height || 1000) + '" alt="' + escape(options.alt || '') + '"' + (options.loading ? ' loading="' + options.loading + '"' : '') + (options.fetchpriority ? ' fetchpriority="' + options.fetchpriority + '"' : '') + (options.class ? ' class="' + escape(options.class) + '"' : '') + '>';
});
engine.registerFilter('money', (value) => new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(Number(value || 0) / 100));
engine.registerFilter('money_with_currency', (value) => new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(Number(value || 0) / 100) + ' MXN');
engine.registerFilter('t', (key, ...args) => {
  const values = Object.fromEntries(args.filter(Array.isArray));
  let text = key.split('.').reduce((obj, part) => obj?.[part], translations) || key;
  return text.replace(/{{\s*(\w+)\s*}}/g, (_, name) => escape(values[name] ?? ''));
});
engine.registerFilter('structured_data', () => '{}');
engine.registerFilter('default_errors', () => '');
engine.registerFilter('default_pagination', () => '');
engine.registerFilter('payment_button', () => '');
engine.registerFilter('payment_type_svg_tag', () => '');
engine.registerFilter('link_to_tag', (label) => '<a href="blog.html">' + escape(label) + '</a>');
engine.registerFilter('placeholder_svg_tag', (_, cls) => '<svg class="' + escape(cls) + '" viewBox="0 0 500 350" aria-hidden="true"><path fill="#e6ecec" d="M0 0h500v350H0z"/><path fill="none" stroke="#8b9da2" stroke-width="8" d="m120 240 90-130 80 130H120l45-95h150l65 95M200 110h45"/><circle fill="none" stroke="#8b9da2" stroke-width="8" cx="120" cy="240" r="60"/><circle fill="none" stroke="#8b9da2" stroke-width="8" cx="380" cy="240" r="60"/></svg>');
const routes = { root_url: 'index.html', all_products_collection_url: 'collection-v2.html', collections_url: 'all-collections.html', search_url: 'search.html', predictive_search_url: 'search-suggest', cart_url: 'cart.html', cart_add_url: 'cart/add', cart_change_url: 'cart/change', account_url: 'account.html', product_recommendations_url: 'recommendations/products' };
const routeMap = {
  '/':'index.html', '/collections/all':'collection-v2.html', '/collections':'all-collections.html',
  '/collections/mtb':'discipline-mtb.html','/collections/ruta':'discipline-road.html','/collections/gravel':'discipline-gravel.html','/collections/urbanas':'discipline-urban.html','/collections/hypergogo':'collection-hypergogo.html',
  '/pages/bike-finder':'bike-finder.html','/pages/nosotros':'about.html','/pages/guia-de-tallas':'size-guide.html','/pages/contacto':'contact.html','/pages/hypergogo':'brand-hypergogo.html'
};
const rewrite = (html) => html.replace(/(href|action)="(\/[^"]*)"/g, (match, attr, url) => routeMap[url] ? attr + '="' + routeMap[url] + '"' : match);
function prepareProduct(source, variantId) {
  const p = structuredClone(source);
  p.url = 'product-' + p.id + '.html';
  p.variants.forEach((v) => { v.quantity_rule = { min: 1, increment: 1, max: 5 }; v.url = p.url + '?variant=' + v.id; });
  const selected = p.variants.find((v) => String(v.id) === String(variantId)) || p.variants[0];
  p.selected_or_first_available_variant = selected;
  p.featured_media = selected.featured_media;
  p.featured_image = p.media[0];
  p.price = Math.min(...p.variants.map((v) => v.price));
  p.compare_at_price = Math.max(...p.variants.map((v) => v.compare_at_price));
  p.price_varies = new Set(p.variants.map((v) => v.price)).size > 1;
  p.available = p.variants.some((v) => v.available);
  p.has_only_default_variant = p.options.length === 1 && p.options[0].name === 'Title';
  p.options_with_values = p.options.map((option, i) => ({ name: option.name, position: i + 1, values: option.values.map((value, n) => ({ id: p.id * 10000 + i * 100 + n, selected: selected.options[i] === value, available: p.variants.some((v) => v.options[i] === value && v.available), product_url: p.url, toString() { return value; } })) }));
  return p;
}
export const products = snapshot.products.map((p) => prepareProduct(p));
const sortOptions = [{ value: 'manual', name: 'Selección KUBOR' }, { value: 'price-ascending', name: 'Precio: menor a mayor' }, { value: 'price-descending', name: 'Precio: mayor a menor' }, { value: 'title-ascending', name: 'Nombre: A–Z' }];
function collection(title, url, list = products.slice(0, 4)) {
  return { title, url, products: list, products_count: list.length, featured_image: list[0]?.featured_image, description: '<p>Compara modelos y encuentra el que mejor se adapta a tu forma de rodar.</p>', sort_options: sortOptions, default_sort_by: 'manual', filters: [
    { type: 'list', label: 'Disponibilidad', active_values: [], values: [{ label: 'Disponible', param_name: 'filter.v.availability', value: '1', count: list.length }] },
    { type: 'list', label: 'Marca', active_values: [], values: [...new Set(list.map((p) => p.vendor))].map((vendor) => ({ label: vendor, param_name: 'filter.p.vendor', value: vendor, count: list.filter((p) => p.vendor === vendor).length })) },
    { type: 'price_range', label: 'Precio (MXN)', range_max: 3000000, min_value: { param_name: 'filter.v.price.gte' }, max_value: { param_name: 'filter.v.price.lte' } }
  ] };
}
const collections = { frontpage: collection('Selección KUBOR', 'collection-v2.html'), mtb: collection('Mountain Bike', 'discipline-mtb.html'), ruta: collection('Ruta', 'discipline-road.html', []), gravel: collection('Gravel', 'discipline-gravel.html', []), urbanas: collection('Urbanas', 'discipline-urban.html', []), hypergogo: collection('HYPERGOGO', 'collection-hypergogo.html', products.filter((p) => p.vendor === 'HYPERGOGO')) };
const link = (title, url, links = []) => ({ title, url, links });
const menus = {
  'main-menu': { links: [link('Bicicletas', 'all-collections.html', [link('Montaña', 'discipline-mtb.html'), link('Ruta', 'discipline-road.html'), link('Gravel', 'discipline-gravel.html'), link('Urbana', 'discipline-urban.html')]), link('Encuentra tu bici', 'bike-finder.html'), link('HYPERGOGO', 'brand-hypergogo.html'), link('Journal', 'blog.html'), link('Soporte', 'help-center.html')] },
  'footer-shop': { links: [link('Todas las bicicletas', 'collection-v2.html'), link('Montaña', 'discipline-mtb.html'), link('HYPERGOGO', 'brand-hypergogo.html')] },
  'footer-support': { links: [link('Guía de tallas', 'size-guide.html'), link('Preguntas frecuentes', 'faq.html'), link('Contacto', 'contact.html')] },
  'footer-brand': { links: [link('Nuestra historia', 'about.html'), link('Journal', 'blog.html'), link('Terrafit', 'brand-terrafit.html')] }
};
const policy = (title, url) => ({ title, url, body: '<p>Consulta las condiciones vigentes de KUBOR antes de comprar. Los importes de envío se calculan en el checkout de la tienda.</p>' });
const policies = [policy('Envíos', 'shipping-policy.html'), policy('Devoluciones', 'returns-policy.html'), policy('Privacidad', 'privacy-policy.html'), policy('Términos', 'terms.html')];
const base = { routes, request: { locale: { iso_code: 'es' }, page_type: 'index', design_mode: false }, shop: { name: 'KUBOR', customer_accounts_enabled: true, enabled_payment_types: [], policies, shipping_policy: policies[0], refund_policy: policies[1], privacy_policy: policies[2] }, settings: {}, form: {}, cart: { 'empty?': true, items: [], item_count: 0 }, localization: { available_countries: [], available_languages: [] }, paginate: { pages: 1 }, content_for_header: '', canonical_url: '', page_description: 'KUBOR · Ride beyond. Bicicletas, movilidad y nuevas formas de explorar.', recommendations: { performed: true, products_count: 4, products: products.slice(0, 4) } };
const schemaCache = new Map();
async function section(type, id, configured = {}, context = {}) {
  const source = await read('theme/sections/' + type + '.liquid');
  let schema = schemaCache.get(type);
  if (!schema) { schema = JSON.parse(source.match(/{%\s*schema\s*%}([\s\S]*?){%\s*endschema\s*%}/)?.[1] || '{}'); schemaCache.set(type, schema); }
  function resolveSettings(definitions = [], settings = {}) {
    const values = Object.fromEntries(definitions.filter((d) => d.default !== undefined).map((d) => [d.id, d.default]));
    Object.assign(values, settings);
    for (const def of definitions) {
      if (def.type === 'collection') values[def.id] = collections[values[def.id]];
      if (def.type === 'link_list') values[def.id] = menus[values[def.id]];
      if (def.type === 'page' && values[def.id]) values[def.id] = { url: 'size-guide.html', content: '' };
    }
    return values;
  }
  const blocks = (configured.block_order || Object.keys(configured.blocks || {})).map((key) => {
    const b = configured.blocks[key];
    const definitions = schema.blocks?.find((s) => s.type === b.type)?.settings || [];
    return { id: key, type: b.type, settings: resolveSettings(definitions, b.settings), shopify_attributes: '' };
  });
  const data = { ...base, ...context, section: { id, index: 1, settings: resolveSettings(schema.settings, configured.settings), blocks } };
  return rewrite(await engine.parseAndRender(preprocess(source), data));
}
async function group(name, context) {
  const data = await json('theme/sections/' + name + '.json');
  return (await Promise.all(data.order.map((id) => section(data.sections[id].type, id, data.sections[id], context)))).join('\n');
}
export async function render(template, context = {}) {
  const config = await json('theme/templates/' + template + '.json');
  const data = { ...base, ...context };
  const body = (await Promise.all(config.order.map((id) => section(config.sections[id].type, id, config.sections[id], data)))).join('\n');
  const header = await group('header-group', data);
  const footer = await group('footer-group', data);
  const cart = await section('cart-drawer', 'cart-drawer', {}, data);
  const source = (await read('theme/layout/theme.liquid')).replace("{% sections 'header-group' %}", header).replace("{% sections 'footer-group' %}", footer).replace("{% section 'cart-drawer' %}", cart);
  let html = await engine.parseAndRender(source, { ...data, content_for_layout: body });
  html = html.replace('<body>', '<body><div class="preview-notice">VISTA PREVIA · Catálogo de referencia, inventario simulado. No se realizan compras ni envíos de formularios.</div>');
  html = html.replace('<script src="theme/assets/kubor.js"', '<script src="preview/adapter.js" defer></script><script src="theme/assets/kubor.js"');
  return rewrite(html);
}
const page = (title, content) => ({ page: { title, content }, page_title: title });
const pages = {
  'about.html': ['Nuestra forma de rodar.', '<p>Distintos caminos. La misma pasión por rodar. KUBOR reúne bicicletas y opciones de movilidad para que encuentres la tuya.</p><p>Explora los modelos por disciplina y consulta las características de cada bicicleta antes de elegir.</p><p><a href="collection-v2.html">Explorar bicicletas →</a></p>'],
  'size-guide.html': ['El ajuste hace la diferencia.', '<h2>Antes de elegir tu talla</h2><p>Mide tu estatura y tu entrepierna. Compara ambas medidas con la guía específica del modelo: una misma talla puede variar entre disciplinas y fabricantes.</p><h2>Si estás entre dos tallas</h2><p>Revisa el alcance (reach), la altura frontal (stack) y la altura del tubo superior. Una prueba de manejo o la asesoría de un especialista ayuda a confirmar una postura cómoda.</p><p>No usamos una tabla universal para recomendar una talla de cualquier bicicleta.</p><p><a href="contact.html">Pedir ayuda con mi talla →</a></p>'],
  'geometry-guide.html': ['Entiende tu geometría.', '<h2>Reach y stack</h2><p>El reach describe el alcance horizontal del cuadro y el stack su altura frontal. Juntos ayudan a entender la posición de manejo.</p><h2>Ángulos y distancia entre ejes</h2><p>Influyen en cómo responde la bicicleta. Interpreta las medidas en el contexto de su disciplina, talla y uso recomendado.</p><p><a href="contact.html">Consultar la geometría de un modelo →</a></p>'],
  'assembly-guide.html': ['Tu primera rodada empieza aquí.', '<p>Revisa el manual específico de tu modelo y el contenido del empaque. El armado y ajuste final deben realizarlos personas con experiencia y herramientas adecuadas.</p><p>Antes de usarla, confirma el ajuste de ruedas, dirección, frenos y transmisión. No adivines los valores de torque: consulta el manual o pide asistencia técnica.</p><p><a href="contact.html">Solicitar el manual de mi modelo →</a></p>'],
  'maintenance-guide.html': ['Cuida cada kilómetro.', '<p>Antes de salir, revisa presión de llantas, frenos y fijaciones. Limpia y lubrica la transmisión de acuerdo con las indicaciones del fabricante.</p><p>Si notas holguras, ruidos o una frenada irregular, deja de usar la bicicleta hasta que la revise un técnico.</p><p><a href="contact.html">Hablar con soporte →</a></p>'],
  'manuals.html': ['Todo sobre tu modelo.', '<p>Solicita el manual indicando el nombre del modelo y su año. Para asistencia con el armado, comparte también el componente sobre el que necesitas ayuda.</p><p><a href="contact.html">Solicitar mi manual →</a></p>'],
  'dealers.html': ['Encuentra atención KUBOR.', '<p>Contacta a KUBOR con tu ciudad y el servicio que necesitas para consultar opciones de atención y puntos de venta.</p><p><a href="contact.html">Consultar puntos de atención →</a></p>'],
  'technology.html': ['Cada componente cuenta.', '<h2>Un sistema, no una lista.</h2><p>Cuadro, suspensión, transmisión, frenos y ruedas deben responder al uso que darás a tu bicicleta. Compara las especificaciones de cada modelo sin asumir que una cifra mayor siempre será mejor para ti.</p><p><a href="geometry-guide.html">Entender la geometría →</a></p><p><a href="collection-v2.html">Explorar modelos →</a></p>'],
  'brand-terrafit.html': ['TERRAFIT. A tu ritmo.', '<p>Explora opciones para moverte y disfrutar cada día. Consulta a nuestro equipo por los modelos disponibles de Terrafit.</p><p><a href="contact.html">Consultar catálogo Terrafit →</a></p>'],
  'account.html': ['Tu cuenta KUBOR.', '<p>En Shopify, este acceso abre tu cuenta segura para consultar pedidos, direcciones y seguimiento.</p><p>Esta vista previa no solicita contraseñas ni simula pedidos. Tus datos se gestionarán directamente con Shopify Customer Accounts.</p><p><a href="contact.html">Ayuda con mi pedido →</a></p>'],
  'preview-submit.html': ['Vista previa sin transacciones.', '<p>Esta demo permite revisar el diseño y las interacciones. No procesa pagos ni envía mensajes. En el theme instalado, Shopify se encarga del checkout y los formularios.</p><p><a href="index.html">Volver al inicio →</a></p>'],
};
export async function build() {
  const output = new Map();
  output.set('index.html', await render('index', { page_title: 'El camino lo haces tú' }));
  output.set('home-v2.html', output.get('index.html'));
  output.set('collection-v2.html', await render('collection', { page_title: 'Bicicletas KUBOR', collection: collection('Bicicletas KUBOR', 'collection-v2.html') }));
  for (const [slug, file] of Object.entries({ mtb:'discipline-mtb.html',ruta:'discipline-road.html',gravel:'discipline-gravel.html',urbanas:'discipline-urban.html',hypergogo:'collection-hypergogo.html' })) output.set(file, await render('collection', { page_title: collections[slug].title, collection: collections[slug] }));
  for (const p of products) output.set(p.url, await render('product', { product: p, page_title: p.title }));
  output.set('product-v2.html', output.get(products[0].url));
  output.set('brand-hypergogo.html', await render('page.hypergogo', { page_title: 'HYPERGOGO · Electric fun' }));
  output.set('cart.html', await render('cart', { page_title: 'Tu carrito' }));
  output.set('search.html', await render('search', { page_title: 'Buscar', search: { performed: false, terms: '', results: products, results_count: products.length, sort_options: sortOptions, filters: [] } }));
  output.set('all-collections.html', await render('list-collections', { page_title: 'Todas las colecciones', collections: Object.values(collections).slice(1) }));
  output.set('contact.html', await render('page.contact', page('Hablemos.', '')));
  output.set('faq.html', await render('page.faq', page('Preguntas frecuentes.', '<p>Encuentra respuestas sobre cómo elegir, comprar y cuidar tu bicicleta.</p>')));
  output.set('404.html', await render('404', { page_title: 'Página no encontrada' }));
  for (const [file, [title, content]] of Object.entries(pages)) output.set(file, await render('page', page(title, content)));
  for (const policy of policies) output.set(policy.url, await render('page', page(policy.title, '<p>En la tienda, aquí encontrarás la política vigente configurada por KUBOR en Shopify. Esta demo no establece plazos, coberturas o tarifas comerciales.</p><p><a href="contact.html">Consultar condiciones →</a></p>')));
  const articles = [{title:'Cómo elegir tu próxima bicicleta',url:'article.html',image:{src:'theme/assets/ride-editorial.jpg'},published_at:'2026-10-16',excerpt_or_content:'Empieza por el terreno y tu forma de rodar. Después compara la talla y los componentes.',author:'KUBOR',content:'<p>Antes de comparar componentes, piensa dónde usarás tu bicicleta y con qué frecuencia. La disciplina es tu punto de partida.</p><h2>Después, el ajuste.</h2><p>La guía del modelo, tu estatura y tu entrepierna ayudan a elegir talla. Una prueba de manejo permite confirmar la comodidad.</p><p><a href="bike-finder.html">Explorar por tipo de uso →</a></p>'}];
  const blog={title:'Más allá del camino.',url:'blog.html',all_tags:[],articles};
  output.set('blog.html',await render('blog',{blog,page_title:'Journal KUBOR'}));
  output.set('article.html',await render('article',{blog,article:articles[0],page_title:articles[0].title}));
  output.set('bike-finder.html',await render('page.bike-finder',{page_title:'Encuentra tu bicicleta'}));
  const aliases={'collection.html':'collection-v2.html','product.html':'product-v2.html','brand-kubor.html':'about.html','support.html':'contact.html','help-center.html':'faq.html','warranty-policy.html':'contact.html','warranties.html':'contact.html','registered-bikes.html':'contact.html','tracking.html':'account.html','orders.html':'account.html','order-detail.html':'account.html','addresses.html':'account.html','login.html':'account.html','register.html':'account.html','recover.html':'account.html','reset-password.html':'account.html','account-preferences.html':'account.html','privacy-policy.html':'privacy-policy.html','policies.html':'shipping-policy.html','community.html':'blog.html','campaign.html':'index.html','compare.html':'bike-finder.html','wishlist.html':'collection-v2.html','gift-card.html':'contact.html','accessories.html':'all-collections.html','components.html':'all-collections.html','outlet.html':'collection-v2.html','discipline-electric.html':'collection-hypergogo.html','discipline-kids.html':'all-collections.html','discipline-fitness.html':'discipline-urban.html','discipline-commuter.html':'discipline-urban.html','discipline-trekking.html':'all-collections.html','discipline-bmx.html':'all-collections.html','discipline-cargo.html':'all-collections.html'};
  for(const [file,target] of Object.entries(aliases)) if(file!==target)output.set(file,'<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="refresh" content="0; url='+target+'"><title>KUBOR</title></head><body><a href="'+target+'">Continuar →</a></body></html>');
  for(const file of ['site-map.html','component-library.html','components-library.html','states.html'])output.set(file,await render('page',page('Explora el nuevo KUBOR.','<ul>'+['index.html','collection-v2.html','product-v2.html','brand-hypergogo.html','bike-finder.html','cart.html','search.html','contact.html','faq.html','size-guide.html','blog.html'].map(f=>'<li><a href="'+f+'">'+f+'</a></li>').join('')+'</ul>')));
  const fixture = {products: snapshot.products, variants:{}, cart:{}, templates:{}, predictions:{},cards:{}};
  fixture.templates.empty=await section('cart-drawer','cart-drawer');
  fixture.templates.emptyPage=await section('main-cart','main_cart_0');
  for (const source of snapshot.products) {
    fixture.cards[source.id]=await engine.parseAndRender(preprocess(await read('theme/snippets/card-product.liquid')),{...base,product:prepareProduct(source)});
    fixture.variants[source.id]={};
    for (const variant of source.variants) {
      const product=prepareProduct(source,variant.id);
      const variantData=product.selected_or_first_available_variant;
      const item={key:'preview-'+variant.id,quantity:1,url:product.url,product,variant:variantData,image:variant.featured_media,final_line_price:variant.price,original_line_price:variant.price,properties:[],line_level_discount_allocations:[],url_to_remove:'cart.html'};
      const cart={items:[item],item_count:1,total_price:variant.price,cart_level_discount_applications:[],'empty?':false};
      fixture.variants[source.id][variant.id]={html:await section('main-product','main_product_0',{settings:{size_guide:'guide'}},{product}),optionValues:product.options_with_values.map(o=>o.values.find(v=>v.selected).id),available:variant.available};
      fixture.cart[variant.id]={drawer:await section('cart-drawer','cart-drawer',{}, {cart}),page:await section('main-cart','main_cart_0',{}, {cart}),price:variant.price};
    }
    fixture.predictions[source.id]=await section('predictive-search','predictive-search',{}, {predictive_search:{performed:true,terms:source.title,resources:{products:[prepareProduct(source)],collections:[],articles:[],pages:[]}}});
  }
  for(const [file,html] of output) await fs.writeFile(path.join(root,file),html);
  await fs.writeFile(path.join(root,'preview/fixtures.json'),JSON.stringify(fixture));
  await fs.writeFile(path.join(root,'preview/pages.json'),JSON.stringify([...output.keys()],null,2));
  console.log('Rendered '+output.size+' pages from the actual Liquid theme.');
}
if (process.argv[1] === fileURLToPath(import.meta.url)) await build();
