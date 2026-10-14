# Sprint 1 — Core visual convergence

Objetivo: acercar el mockup a las imágenes aprobadas y convertir Home / PLP / PDP en una sola familia UI/UX antes de seguir refinando páginas secundarias.

## Regla de aceptación
Una casilla `[x]` significa **implementado en el mockup**, no aprobado final. El cierre definitivo vive en `docs/ui-ux-master-checklist.md` y requiere QA visual, responsive, accesibilidad y mapeo Shopify.

## Infraestructura nueva
- [x] `core-v4.css` compartido por Home / PLP / PDP.
- [x] `core-v4.js` en JavaScript nativo para shell e interacciones críticas.
- [x] Eliminada dependencia de Alpine en las tres páginas núcleo.
- [x] Assets versionados por query string `20261014-s1`.
- [x] Header y footer compartidos desde una sola fuente JS.
- [x] Botón global `Páginas` hacia `site-map.html`.
- [ ] Consolidar páginas secundarias sobre `core-v4`.
- [ ] Retirar definitivamente `app-v2.js`, `v2.css`, `modules-v3.js`, `reference-lock.js` cuando ya no tengan consumidores.

## Global shell
### Topbar
- [x] Rotación de mensajes: envío / MSI / devoluciones.
- [x] Variante compacta mobile.
- [ ] CTA por mensaje configurable.
- [ ] Color independiente por anuncio.
- [ ] Pausa por hover/focus.

### Header
- [x] Home overlay / transparente.
- [x] PLP y PDP sólidos.
- [x] Sticky state.
- [x] Logo SVG oficial.
- [x] Search.
- [x] Account.
- [x] Wishlist.
- [x] Cart badge desde localStorage mock.
- [x] Mega menu MTB.
- [x] Mobile drawer.
- [x] Brand links dentro de mobile drawer.
- [x] Social links mobile.
- [ ] Mega menu completo por todas las disciplinas.
- [ ] Brand switcher visible/configurable desktop.
- [ ] Refinar densidad y estados hover/focus después de revisión visual.

### Search
- [x] Drawer.
- [x] Predictive mock results.
- [x] Productos + colecciones + guías.
- [x] Empty state.
- [x] Link a Search results.
- [ ] Agrupar resultados por tipo visualmente.
- [ ] Historial / búsquedas populares.

### Cart drawer
- [x] Persistencia mock localStorage.
- [x] Cantidad +/-.
- [x] Eliminar.
- [x] Subtotal.
- [x] Free-shipping message.
- [x] Ver carrito.
- [x] Checkout CTA visual.
- [x] Empty state.
- [ ] Cross-sell / accesorios.
- [ ] Barra gráfica de progreso a envío gratis.

### Footer
- [x] Newsletter.
- [x] Comprar.
- [x] Soporte.
- [x] KUBOR / editorial.
- [x] Marcas.
- [x] Legales.
- [x] Social.
- [x] Payment badges concept.
- [ ] Footer accordion mobile.
- [ ] País / moneda si se decide usar.

---

# HOME — `home-v2.html`
## Match al mockup
- [x] Hero oscuro / montaña.
- [x] Headline condensado grande.
- [x] Badge Nueva.
- [x] Mini specs.
- [x] CTA cyan + secondary outline.
- [x] Rail de 5 categorías solapado.
- [x] 4 featured product cards.
- [x] Trust strip oscuro.
- [x] Storytelling Ingeniería que nace en la montaña.
- [x] Newsletter / footer global.

## Densidad agregada sin romper referencia
- [x] Guía de compra / bike decision module.
- [x] Tecnología CTA.
- [x] Geometría CTA.
- [x] Journal / blog.
- [x] Comunidad.
- [x] Lanzamientos.
- [x] Brand universe KUBOR / Terrafit / HYPERGOGO.
- [x] Distribuidores / garantía / soporte.
- [ ] Reviews / UGC realista.
- [ ] New arrivals dedicado.
- [ ] Launch banner configurable.

## Mobile
- [x] Hero crop propio.
- [x] Categorías en rail horizontal.
- [x] Productos en rail horizontal.
- [x] Editorial en rail horizontal.
- [x] Marcas en rail horizontal.
- [ ] QA visual 320 / 375 / 390 / 430.

---

# PLP — `collection-v2.html`
## Match / catálogo
- [x] Hero corto.
- [x] Breadcrumbs.
- [x] Título + descripción + rating.
- [x] Chips XC / Trail / Enduro / Downhill.
- [x] Sidebar ~235 px.
- [x] Toolbar + sort.
- [x] Active filter chips visuales.
- [x] Grid 4 columnas desktop.
- [x] Cards compactas.
- [x] Buying guide integrado.
- [x] Trust strip.

## Filtros representados
- [x] Ride style.
- [x] Suspensión.
- [x] Rodada.
- [x] Talla.
- [x] Material.
- [x] Transmisión.
- [x] Frenos.
- [x] Color.
- [x] Disponibilidad.
- [x] Precio.
- [ ] Faceting funcional real.
- [ ] Conteos derivados de catálogo real.
- [ ] Filtro específico motor/batería para e-bike.

## Product-card UX
- [x] Badges.
- [x] Swatches visuales.
- [x] Wishlist mock.
- [x] Quick view mock.
- [x] Quick add mock.
- [x] Compare selector mock.
- [x] Compare tray.
- [ ] Cambio real de media por swatch.
- [ ] Sold out / low stock card states.
- [ ] Second-image hover.

## Mobile
- [x] 2-column compact grid.
- [x] Filter drawer.
- [x] Sticky toolbar.
- [ ] QA real en dispositivos / breakpoints.

---

# PDP — `product-v2.html`
## Above the fold
- [x] Header sólido.
- [x] Breadcrumbs.
- [x] Dark two-column first fold.
- [x] Gallery principal.
- [x] Thumbnails funcionales.
- [x] Rating.
- [x] Price / MSI concept.
- [x] Swatches funcionales.
- [x] Size selector funcional.
- [x] Size-guide CTA.
- [x] Stock.
- [x] Add-to-cart mock.
- [x] Buy-now visual.
- [x] Wishlist mock.
- [x] Delivery / returns / warranty mini row.
- [ ] Fullscreen / zoom real.
- [ ] Swipe gallery mobile.
- [ ] Cambio de imágenes por color.

## Spec strip
- [x] Cuadro.
- [x] Suspensión.
- [x] Transmisión.
- [x] Frenos.
- [x] Ruedas.
- [x] Peso.
- [x] SVG icon library aplicada.
- [x] Horizontal mobile behavior.

## Tabs
- [x] Descripción.
- [x] Especificaciones.
- [x] Geometría.
- [x] Envíos y devoluciones.
- [x] Garantía.
- [x] Click funcional JS nativo.
- [ ] ARIA tab semantics completas.

## Contenido extendido
- [x] Storytelling técnico.
- [x] Geometry highlight.
- [x] Tabla de specs.
- [x] Geometry table.
- [x] Reach / stack / HTA / STA / wheelbase / chainstay / standover.
- [x] Technology cards.
- [x] Related bikes / accessories rail.
- [x] FAQ contextual.
- [x] Support CTA.
- [x] Dealer CTA.
- [x] Warranty registration CTA.
- [x] Sticky mobile ATC.
- [ ] Reviews section completa.
- [ ] Manuals / downloads reales.
- [ ] Video / full-width media storytelling.
- [ ] Dealer stock / local availability concept.

---

# Referencias externas usadas solo como UX benchmark
Los mockups KUBOR siguen siendo la referencia visual primaria.

- Trek: trust / warranty / human support / retailer locator.
  - https://www.trekbikes.com/
- Specialized: taxonomy, category icons, filters, support + store UX.
  - https://www.specialized.com/
- Canyon: mega taxonomy, PLP faceting/sort, editorial + commerce.
  - https://www.canyon.com/
- Santa Cruz: cinematic storytelling, technology and product narrative.
  - https://www.santacruzbicycles.com/

---

# Próxima pasada Sprint 1B
- [ ] Revisar visualmente Home contra mockup a 1440 y mobile.
- [ ] Revisar visualmente PLP contra mockup a 1440 y mobile.
- [ ] Revisar visualmente PDP contra mockup a 1440 y mobile.
- [ ] Ajustar tamaños, whitespace, crop y densidad según diferencias observadas.
- [ ] Completar mega-menu multideporte.
- [ ] Añadir states de cards: sold-out / low-stock / sale / bestseller.
- [ ] Añadir review block PDP.
- [ ] Añadir product media/storytelling full-width PDP.
- [ ] Homologar cart/search/account pages al nuevo shell `core-v4`.
- [ ] Homologar páginas de cuenta al nuevo shell `core-v4`.
