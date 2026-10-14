# KUBOR — UI/UX Master Execution Checklist

> **Fuente única de verdad para cerrar el mockup antes de migrar a Shopify.**
>
> Regla: una casilla solo se marca `[x]` cuando el bloque o página está realmente terminado. Que exista un archivo HTML **no significa** que esté aprobado.

## Definición de “terminado”

Para marcar una página o módulo como `[x]` debe cumplir **todos** estos puntos:

- [ ] Coincide visualmente con el mockup aprobado / dirección visual vigente.
- [ ] Interacciones principales funcionan con mouse, touch y teclado.
- [ ] Mobile, tablet y desktop están resueltos como experiencias propias.
- [ ] No depende de GSAP/Alpine para funciones comerciales críticas.
- [ ] Estados loading / empty / error / disabled / sold-out están contemplados cuando aplican.
- [ ] Accesibilidad base: foco visible, labels, contraste, targets táctiles y reduced motion.
- [ ] Fuente de datos futura está definida: Shopify nativo / metafield / metaobject / Customer Account / app.
- [ ] El componente está pensado como section / block / snippet reutilizable, no hardcodeado a una sola página.

---

# P0 — GLOBAL SHELL

## Announcement / Top Bar
- [ ] Soporta 1–3 anuncios.
- [ ] Rotación configurable.
- [ ] Fondo/color por anuncio.
- [ ] CTA opcional por anuncio.
- [ ] Pausa hover/focus.
- [ ] Variante compacta mobile.
- [ ] Mensajes: envío, MSI, devoluciones, lanzamiento.

## Header Desktop
- [ ] Variante transparente sobre hero.
- [ ] Variante sólida para PLP/PDP/cuenta.
- [ ] Sticky / scrolled state.
- [ ] Logo oficial KUBOR.
- [ ] Nav por disciplinas.
- [ ] Accesorios / componentes / outlet.
- [ ] Search visible.
- [ ] Account.
- [ ] Wishlist.
- [ ] Cart badge real.
- [ ] Brand switcher opcional.

## Mega Menu
- [ ] MTB con Sport / XC / Trail / Enduro / Downhill.
- [ ] Ruta.
- [ ] Gravel.
- [ ] Urbana / Fitness / Commuter / Trekking.
- [ ] Eléctricas.
- [ ] Kids.
- [ ] BMX / Stunt.
- [ ] Cargo / Utility.
- [ ] Accesorios.
- [ ] Componentes.
- [ ] Cards promocionales / campañas.
- [ ] Guía de tallas / comparador / tecnología / distribuidores.
- [ ] KUBOR / Terrafit / HYPERGOGO.

## Mobile Navigation
- [ ] Drawer principal.
- [ ] Subniveles navegables.
- [ ] Back state claro.
- [ ] Búsqueda accesible.
- [ ] Cuenta.
- [ ] Wishlist.
- [ ] Carrito.
- [ ] Brand switcher.
- [ ] Social links.
- [ ] Cierre por botón / overlay / Escape.

## Search Drawer / Predictive Search
- [ ] Campo de búsqueda.
- [ ] Resultados predictivos.
- [ ] Productos.
- [ ] Colecciones.
- [ ] Artículos / guías.
- [ ] Estado sin resultados.
- [ ] Ver todos los resultados.

## Cart Drawer
- [ ] Imagen / producto / variante.
- [ ] Cantidad +/-.
- [ ] Eliminar.
- [ ] Subtotal.
- [ ] Progreso de envío gratis.
- [ ] Upsell / accesorios.
- [ ] Checkout CTA.
- [ ] Ver carrito.
- [ ] Estado vacío.

## Footer
- [ ] Newsletter.
- [ ] Comprar.
- [ ] Soporte.
- [ ] KUBOR.
- [ ] Marcas.
- [ ] Distribuidores.
- [ ] Legales.
- [ ] Redes sociales.
- [ ] Métodos de pago.
- [ ] Confianza / seguridad.
- [ ] País / moneda si aplica.
- [ ] Mobile accordion o layout optimizado.

---

# P0 — HOME

**Archivo actual:** `home-v2.html`

## Match al mockup
- [ ] Header/topbar proporciones correctas.
- [ ] Hero oscuro con bicicleta protagonista y montaña.
- [ ] Titular grande condensado.
- [ ] Badge “Nueva”.
- [ ] Mini specs dentro del hero.
- [ ] CTA primario cyan + CTA secundario outline.
- [ ] Rail de categorías solapado al hero.
- [ ] Featured products compactos.
- [ ] Trust strip oscuro.
- [ ] Storytelling “Ingeniería que nace en la montaña”.
- [ ] Newsletter compacta.
- [ ] Footer oscuro completo.

## Densidad / módulos que faltan
- [ ] New arrivals / lanzamiento.
- [ ] Bike finder / cómo elegir tu bici.
- [ ] Tecnología / componentes.
- [ ] Guía de tallas / geometría CTA.
- [ ] Blog / Journal.
- [ ] Comunidad / social / UGC.
- [ ] Distribuidores.
- [ ] Garantía / soporte.
- [ ] Brand universe KUBOR / Terrafit / HYPERGOGO sin romper el mockup.
- [ ] Reviews / social proof.
- [ ] Recently viewed opcional.

## Mobile
- [ ] Hero crop específico mobile.
- [ ] CTA full-width / stacked donde convenga.
- [ ] Categorías como carrusel horizontal.
- [ ] Productos como carrusel horizontal en vez de filas interminables.
- [ ] Storytelling con imagen/copy reordenables.

---

# P0 — PLP / COLLECTION

**Archivo actual:** `collection-v2.html`

## Match al mockup
- [ ] Hero corto oscuro con rider / montaña.
- [ ] Breadcrumbs.
- [ ] Título + descripción + rating.
- [ ] Chips XC / Trail / Enduro / Downhill.
- [ ] Sidebar desktop ~220–240 px.
- [ ] Toolbar de productos / sort.
- [ ] Grid 4 columnas desktop.
- [ ] Cards compactos.
- [ ] Buying guide editorial dentro del flujo.
- [ ] Trust strip.
- [ ] Newsletter.
- [ ] Footer.

## Filtros necesarios
- [ ] Disciplina / ride style.
- [ ] Familia / categoría.
- [ ] Tipo de suspensión.
- [ ] Rodada.
- [ ] Talla.
- [ ] Material del cuadro.
- [ ] Transmisión.
- [ ] Frenos.
- [ ] Precio.
- [ ] Color.
- [ ] Disponibilidad.
- [ ] Marca.
- [ ] Motor / batería para eléctricas.
- [ ] Active filter chips.
- [ ] Limpiar todo.

## UX catálogo
- [ ] Sort completo.
- [ ] Compare selector.
- [ ] Wishlist.
- [ ] Quick add.
- [ ] Quick view.
- [ ] Swatches funcionales.
- [ ] Cambio de imagen por swatch.
- [ ] Load more / pagination.
- [ ] No results state.
- [ ] Mobile filter drawer.
- [ ] Sticky mobile toolbar.

---

# P0 — PDP / PRODUCT

**Archivo actual:** `product-v2.html`

## Above the fold
- [ ] Header sólido/legible.
- [ ] Breadcrumbs.
- [ ] Galería grande izquierda.
- [ ] Thumbnails compactos.
- [ ] Zoom / fullscreen.
- [ ] Swipe mobile.
- [ ] Nombre.
- [ ] Rating / reviews.
- [ ] Descripción corta.
- [ ] Precio / compare-at.
- [ ] MSI / financiamiento.
- [ ] Color swatches funcionales.
- [ ] Cambio real de media por color.
- [ ] Size selector funcional.
- [ ] Guía de tallas.
- [ ] Inventario / stock.
- [ ] Add to cart.
- [ ] Buy now.
- [ ] Wishlist.
- [ ] Delivery / returns / warranty compactos.

## Spec Strip
- [ ] Cuadro.
- [ ] Suspensión.
- [ ] Transmisión.
- [ ] Frenos.
- [ ] Ruedas.
- [ ] Peso.
- [ ] Iconos SVG consistentes.
- [ ] Horizontal scroll mobile.

## Tabs / Accordions
- [ ] Descripción.
- [ ] Especificaciones.
- [ ] Geometría.
- [ ] Envíos y devoluciones.
- [ ] Garantía.
- [ ] Click/touch funcional.
- [ ] Tamaño de texto y hit areas correctos.

## Contenido PDP extendido
- [ ] Storytelling técnico.
- [ ] Imagen/video full width.
- [ ] Tabla completa de especificaciones.
- [ ] Geometry diagram.
- [ ] Geometry table por talla.
- [ ] Reach / stack / HTA / STA / wheelbase.
- [ ] Size recommendation.
- [ ] Technology cards.
- [ ] Manuales / downloads.
- [ ] Compatible accessories.
- [ ] Related bikes.
- [ ] Compare CTA.
- [ ] Reviews.
- [ ] FAQ contextual.
- [ ] Support CTA.
- [ ] Dealer CTA.
- [ ] Sticky mobile ATC.

---

# P0 — PRODUCT CARD SYSTEM

- [ ] Ratio configurable.
- [ ] Segunda imagen hover.
- [ ] Badge nuevo.
- [ ] Badge oferta.
- [ ] Badge bestseller.
- [ ] Wishlist.
- [ ] Swatches.
- [ ] Rating.
- [ ] Precio / compare-at.
- [ ] MSI opcional.
- [ ] Quick add.
- [ ] Quick view.
- [ ] Compare.
- [ ] Sold out.
- [ ] Low stock.
- [ ] Mobile card compacta.

---

# P1 — CART / CHECKOUT ENTRY

**Archivo actual:** `cart.html`

- [ ] Match al mockup de carrito.
- [ ] Items editables.
- [ ] Quantity stepper.
- [ ] Remove.
- [ ] Coupon / promo code visual.
- [ ] Shipping estimate.
- [ ] Free shipping progress.
- [ ] Subtotal / shipping / total.
- [ ] Financing message.
- [ ] Secure payments.
- [ ] Cross-sell.
- [ ] Empty cart.
- [ ] Mobile checkout sticky CTA.

---

# P1 — SEARCH

**Archivo actual:** `search.html`

- [ ] Predictive search consistente con drawer.
- [ ] Search results page.
- [ ] Products / collections / content tabs.
- [ ] Sort.
- [ ] Filters.
- [ ] Suggestions / popular searches.
- [ ] Empty state útil.
- [ ] Typo tolerance concept.

---

# P1 — COMPARE

**Archivo actual:** `compare.html`

- [ ] Add/remove products.
- [ ] Máximo de productos definido.
- [ ] Sticky product header desktop.
- [ ] Horizontal comparison mobile.
- [ ] Diferencias resaltadas.
- [ ] Specs estructuradas.
- [ ] Geometry comparison.
- [ ] CTA PDP por producto.
- [ ] Empty compare state.

---

# P1 — WISHLIST

**Archivo actual:** `wishlist.html`

- [ ] Add/remove funcional mock.
- [ ] Empty state.
- [ ] Move to cart.
- [ ] Variant selection.
- [ ] Persistencia mock.
- [ ] Estrategia futura app/customer persistence definida.

---

# P1 — CUSTOMER ACCOUNT

## Acceso
**Archivos:** `login.html`, `register.html`, `recover.html`
- [ ] Login terminado.
- [ ] Register terminado.
- [ ] Recover password terminado.
- [ ] Reset password state.
- [ ] Errors / success states.

## Account Dashboard
**Archivo:** `account.html`
- [ ] Resumen claro.
- [ ] Pedido reciente.
- [ ] Tracking.
- [ ] Wishlist.
- [ ] Garantías.
- [ ] Bicis registradas.
- [ ] Soporte.
- [ ] Direcciones.
- [ ] Preferencias.

## Orders
**Archivos:** `orders.html`, `order-detail.html`, `tracking.html`
- [ ] Order history.
- [ ] Order detail.
- [ ] Timeline / fulfillment status.
- [ ] Tracking link.
- [ ] Invoice / receipt concept.
- [ ] Return/support action.
- [ ] Empty orders.

## Addresses
**Archivo:** `addresses.html`
- [ ] List.
- [ ] Add.
- [ ] Edit.
- [ ] Delete confirm.
- [ ] Default address.
- [ ] Empty state.

## Registered Bikes
**Archivo:** `registered-bikes.html`
- [ ] Bike list.
- [ ] Serial number.
- [ ] Model / variant / purchase date.
- [ ] Warranty status.
- [ ] Manuals.
- [ ] Service history concept.
- [ ] Register bike flow.
- [ ] Empty state.
- [ ] App/backend ownership defined.

## Warranties
**Archivo:** `warranties.html`
- [ ] Warranty cards.
- [ ] Coverage status.
- [ ] Claim CTA.
- [ ] Claim form.
- [ ] Upload evidence concept.
- [ ] Claim timeline/status.
- [ ] App/backend ownership defined.

## Preferences
**Archivo:** `account-preferences.html`
- [ ] Communication preferences.
- [ ] Interests.
- [ ] Privacy.
- [ ] Save feedback.

---

# P1 — ALL COLLECTIONS / DISCIPLINES

**Archivo:** `all-collections.html`

- [ ] MTB.
- [ ] Road.
- [ ] Gravel.
- [ ] Urban.
- [ ] Fitness.
- [ ] Commuter.
- [ ] Trekking.
- [ ] Electric.
- [ ] Kids.
- [ ] BMX / Stunt.
- [ ] Cargo / Utility.
- [ ] Accessories.
- [ ] Components.
- [ ] Outlet.
- [ ] KUBOR.
- [ ] Terrafit.
- [ ] HYPERGOGO.

## Discipline landings actuales
- [ ] `discipline-mtb.html`
- [ ] `discipline-road.html`
- [ ] `discipline-gravel.html`
- [ ] `discipline-urban.html`
- [ ] `discipline-electric.html`

## Discipline landings aún por contemplar / validar
- [ ] Kids.
- [ ] BMX / Stunt.
- [ ] Cargo / Utility.
- [ ] Fitness dedicated.
- [ ] Commuter dedicated.
- [ ] Trekking dedicated.

---

# P1 — BRAND LANDINGS

## KUBOR
**Archivo:** `brand-kubor.html`
- [ ] Premium/performance visual language.
- [ ] Product architecture.
- [ ] Technology.
- [ ] Storytelling.
- [ ] Community.

## Terrafit
**Archivo:** `brand-terrafit.html`
- [ ] Accessible/value visual language.
- [ ] Everyday use.
- [ ] Product families.
- [ ] Support/benefits.

## HYPERGOGO
**Archivo:** `brand-hypergogo.html`
- [ ] Más cercano al storytelling HYPERGOGO US.
- [ ] Gradient typography.
- [ ] Motion / playful visual language.
- [ ] Product showcase.
- [ ] Safety / support content.

---

# P1 — DECISION SUPPORT

## Size Guide
**Archivo:** `size-guide.html`
- [ ] Height ranges.
- [ ] Discipline context.
- [ ] Reach / stack education.
- [ ] Frame size recommendation.
- [ ] Wheel size explanation.
- [ ] Link from PDP.

## Geometry Guide
**Archivo:** `geometry-guide.html`
- [ ] Diagram.
- [ ] HTA.
- [ ] STA.
- [ ] Reach.
- [ ] Stack.
- [ ] Wheelbase.
- [ ] Chainstay.
- [ ] BB drop/height.
- [ ] Standover.
- [ ] Discipline examples.

## Bike Finder / Quiz
- [ ] Objetivo del rider.
- [ ] Terreno.
- [ ] Frecuencia.
- [ ] Presupuesto.
- [ ] Experiencia.
- [ ] Electric / analog.
- [ ] Resultado con 2–4 recomendaciones.
- [ ] CTA compare.

---

# P2 — CONTENT / BRAND / COMMUNITY

## Blog
**Archivos:** `blog.html`, `article.html`
- [ ] Blog index.
- [ ] Tags / categories.
- [ ] Featured article.
- [ ] Article template.
- [ ] TOC.
- [ ] Related content.
- [ ] Share controls.
- [ ] Product/article cross-links.

## About
**Archivo:** `about.html`
- [ ] Brand story.
- [ ] Values.
- [ ] Timeline.
- [ ] Manufacturing / engineering story.
- [ ] CTA products / technology.

## Technology
**Archivo:** `technology.html`
- [ ] Geometry.
- [ ] Suspension.
- [ ] Drivetrain.
- [ ] Braking.
- [ ] Wheels.
- [ ] Electric systems.
- [ ] Reusable technology metaobjects concept.

## Community
**Archivo:** `community.html`
- [ ] UGC / social grid.
- [ ] Riders / ambassadors concept.
- [ ] Events / rides.
- [ ] Social links.
- [ ] Journal cross-link.

## Campaign / Launch
**Archivo:** `campaign.html`
- [ ] Hero.
- [ ] Story.
- [ ] Features.
- [ ] Product CTA.
- [ ] Video / motion slot.
- [ ] Countdown optional.

---

# P2 — SUPPORT / TRUST

## Help Center
**Archivo:** `help-center.html`
- [ ] Search help.
- [ ] Buying help.
- [ ] Orders / shipping.
- [ ] Returns.
- [ ] Warranty.
- [ ] Technical support.
- [ ] Manuals.
- [ ] Contact escalation.

## FAQ
**Archivo:** `faq.html`
- [ ] Search.
- [ ] Categories.
- [ ] Functional accordions.
- [ ] Contact fallback.

## Contact
**Archivo:** `contact.html`
- [ ] Contact form.
- [ ] WhatsApp.
- [ ] Email.
- [ ] Phone.
- [ ] Hours.
- [ ] FAQ preview.

## Dealers
**Archivo:** `dealers.html`
- [ ] Search by city / ZIP.
- [ ] Use location optional.
- [ ] Map.
- [ ] Dealer cards.
- [ ] Services offered.
- [ ] Directions.
- [ ] Dealer detail concept.

## Gift Card
**Archivo:** `gift-card.html`
- [ ] Amount presets.
- [ ] Custom amount.
- [ ] Recipient.
- [ ] Delivery date concept.
- [ ] Message.
- [ ] Shopify native gift card mapping.
- [ ] Gift card balance/help page concept.

---

# P2 — ACCESSORIES / COMPONENTS / OUTLET

## Accessories
**Archivo:** `accessories.html`
- [ ] Helmets.
- [ ] Lights.
- [ ] Bags.
- [ ] Bottles / cages.
- [ ] Pumps / tools.
- [ ] Protection.
- [ ] Compatible-with-bike UX concept.

## Components
**Archivo:** `components.html`
- [ ] Drivetrain.
- [ ] Brakes.
- [ ] Suspension.
- [ ] Wheels / tires.
- [ ] Cockpit.
- [ ] Saddle / seatpost.
- [ ] Compatibility messaging.

## Outlet
**Archivo:** `outlet.html`
- [ ] Sale landing.
- [ ] Original / sale pricing.
- [ ] Discount badges.
- [ ] Availability/last units.
- [ ] Outlet-specific filters.

---

# P2 — ICONOGRAPHY SYSTEM

**Archivo actual:** `assets/icons/kubor-icons.svg`

## Technical icons
- [ ] Frame.
- [ ] Fork.
- [ ] Rear shock.
- [ ] Drivetrain.
- [ ] Shifter.
- [ ] Front derailleur.
- [ ] Rear derailleur.
- [ ] Crankset.
- [ ] Bottom bracket.
- [ ] Cassette.
- [ ] Chain.
- [ ] Brakes.
- [ ] Rotor.
- [ ] Wheels.
- [ ] Tires.
- [ ] Hubs.
- [ ] Handlebar.
- [ ] Stem.
- [ ] Saddle.
- [ ] Seatpost.
- [ ] Pedals.
- [ ] Weight.
- [ ] Frame material.
- [ ] Travel.
- [ ] Speed.
- [ ] Battery.
- [ ] Motor.
- [ ] Range.
- [ ] Charging.
- [ ] Payload.
- [ ] Warranty.
- [ ] Shipping.

## Discipline icons
- [ ] MTB.
- [ ] XC.
- [ ] Trail.
- [ ] Road.
- [ ] Gravel.
- [ ] Urban.
- [ ] Fitness.
- [ ] Electric.
- [ ] Kids.
- [ ] BMX / Stunt.
- [ ] Cargo / Utility.
- [ ] Accessories.
- [ ] Components.

> Los iconos existentes deben validarse visualmente; “estar en el sprite” no equivale a aprobación.

---

# P2 — REUSABLE CONTENT BLOCK LIBRARY

- [ ] Hero product.
- [ ] Hero collection.
- [ ] Hero editorial.
- [ ] Hero video.
- [ ] Hero split.
- [ ] Text scroller / marquee.
- [ ] Image + text.
- [ ] Full bleed story.
- [ ] Split storytelling.
- [ ] Stats.
- [ ] Timeline.
- [ ] Quote / manifesto.
- [ ] Video block.
- [ ] Gallery.
- [ ] Hotspots.
- [ ] Before/after.
- [ ] Technology feature.
- [ ] Gradient headline preset.
- [ ] Product carousel.
- [ ] Collection carousel.
- [ ] Promo mosaic.
- [ ] Compare block.
- [ ] Countdown.
- [ ] Reviews/testimonials.
- [ ] Logo wall.
- [ ] Newsletter.
- [ ] Dealer CTA.
- [ ] Support CTA.

---

# P3 — LEGAL / SYSTEM / EDGE CASES

## Legal
**Archivos actuales:** `policies.html`, `shipping-policy.html`, `returns-policy.html`, `warranty-policy.html`, `privacy-policy.html`, `terms.html`
- [ ] Policies hub.
- [ ] Shipping.
- [ ] Returns.
- [ ] Warranty.
- [ ] Privacy.
- [ ] Terms.
- [ ] Cookies concept.
- [ ] Accessibility statement concept.

## System pages / states
- [ ] 404 — `404.html`.
- [ ] Password / coming soon page.
- [ ] 500/general error state.
- [ ] Offline/degraded state concept.
- [ ] Empty cart.
- [ ] Empty wishlist.
- [ ] Empty search.
- [ ] Empty collection.
- [ ] No orders.
- [ ] No addresses.
- [ ] No registered bikes.
- [ ] No warranties.
- [ ] Sold out.
- [ ] Unavailable variant.
- [ ] Form error.
- [ ] Form success.
- [ ] Skeleton/loading states.

---

# P0/P1 — RESPONSIVE & MOBILE UX PASS

Test widths:
- [ ] 320 px.
- [ ] 375 px.
- [ ] 390 px.
- [ ] 430 px.
- [ ] 768 px.
- [ ] 1024 px.
- [ ] 1280 px.
- [ ] 1440 px.
- [ ] 1728 px.

Global mobile rules:
- [ ] Horizontal rails where better than stacked grids.
- [ ] No accidental horizontal overflow.
- [ ] Touch targets ≥ ~44 px where practical.
- [ ] Sticky CTAs never cover content.
- [ ] Drawers scroll independently.
- [ ] Header fits without icon collisions.
- [ ] Tables transform to scroll/cards.
- [ ] Typography remains readable.
- [ ] Image focal point mobile-specific.

---

# P0/P1 — ACCESSIBILITY PASS

- [ ] Skip link.
- [ ] Semantic headings.
- [ ] Alt text strategy.
- [ ] Form labels.
- [ ] Accessible errors.
- [ ] Keyboard nav.
- [ ] Visible focus.
- [ ] Drawer focus trap concept.
- [ ] Escape closes overlays.
- [ ] ARIA labels icon-only buttons.
- [ ] Color contrast.
- [ ] Reduced motion.
- [ ] No interaction only on hover.

---

# P1 — PERFORMANCE PASS

- [ ] Responsive image sizing strategy.
- [ ] Lazy loading below fold.
- [ ] Hero image priority/preload strategy.
- [ ] Avoid oversized remote images.
- [ ] Minimize layout shift.
- [ ] GSAP only where justified.
- [ ] Lenis optional/progressive.
- [ ] No duplicated shell scripts.
- [ ] No duplicated modules injected after render.
- [ ] No unused legacy CSS/JS in final mockup contract.

---

# SHOPIFY MIGRATION GATE

Before a component is considered frozen:

- [ ] Shopify ownership assigned.
- [ ] Theme setting schema identified.
- [ ] Blocks identified.
- [ ] Dynamic source/metafield identified.
- [ ] Metaobject identified where applicable.
- [ ] Product/collection/customer native object usage identified.
- [ ] App dependency identified where necessary.
- [ ] Mobile settings defined separately when useful.
- [ ] No hardcoded brand-specific logic that should be a preset.

## Expected ownership examples

- Header/footer/topbar → section groups.
- Hero / story / promo / editorial → sections + blocks.
- Product cards / icon / price / badges → snippets.
- Specs / geometry → product metafields + structured metaobjects.
- Technology / FAQs / reusable editorial content → metaobjects.
- Orders / addresses → Shopify Customer Accounts.
- Registered bikes / serials / warranty claims → KUBOR app/backend.
- Wishlist / compare → custom persistence/app strategy.
- Cart → Shopify Ajax Cart API.
- Predictive search → Shopify Predictive Search API.

---

# REFERENCE DIRECTION

## Approved KUBOR mockups remain primary
The supplied mockups are the first visual authority for Home, PLP, PDP, cart, contact, distributors, legal, FAQ and 404.

## External inspiration — use selectively, do not clone
- **Santa Cruz:** cinematic storytelling, technology narrative, product attitude.
- **Canyon:** navigation architecture, category clarity, PLP/filter UX.
- **Specialized:** ecommerce density, category/filter taxonomy, product discovery.
- **Trek:** trust, warranty, support, retailer/dealer confidence and editorial depth.

---

# EXECUTION ORDER

## Sprint 1 — Convergence (P0)
- [ ] Global shell.
- [ ] Home match.
- [ ] PLP match.
- [ ] PDP match.
- [ ] Product card system.
- [ ] Mobile core flow.

## Sprint 2 — Commerce & decision (P1)
- [ ] Cart.
- [ ] Search.
- [ ] Compare.
- [ ] Wishlist.
- [ ] All Collections.
- [ ] Size guide.
- [ ] Geometry guide.
- [ ] Bike Finder.

## Sprint 3 — Account & after-sales (P1)
- [ ] Customer access.
- [ ] Account dashboard.
- [ ] Orders.
- [ ] Tracking.
- [ ] Addresses.
- [ ] Registered bikes.
- [ ] Warranties.
- [ ] Support.

## Sprint 4 — Brand/content/support (P2)
- [ ] Brand landings.
- [ ] Blog/article.
- [ ] About.
- [ ] Technology.
- [ ] Community.
- [ ] Campaigns.
- [ ] Dealers.
- [ ] FAQ/contact/help.
- [ ] Accessories/components/outlet.

## Sprint 5 — Release gate
- [ ] Empty/error/system states.
- [ ] Full responsive pass.
- [ ] Accessibility pass.
- [ ] Performance pass.
- [ ] Visual regression against mockups.
- [ ] Shopify ownership validated.
- [ ] Freeze UI contracts for Liquid migration.

---

# CURRENT REPO INVENTORY — FILE EXISTS ≠ COMPLETE

The following files currently exist and therefore **do not need to be rediscovered**, but still need to pass the checklist above:

`home-v2.html`, `collection-v2.html`, `product-v2.html`, `cart.html`, `search.html`, `compare.html`, `wishlist.html`, `all-collections.html`, `account.html`, `orders.html`, `order-detail.html`, `tracking.html`, `addresses.html`, `registered-bikes.html`, `warranties.html`, `support.html`, `account-preferences.html`, `login.html`, `register.html`, `recover.html`, `size-guide.html`, `geometry-guide.html`, `dealers.html`, `blog.html`, `article.html`, `about.html`, `technology.html`, `community.html`, `campaign.html`, `help-center.html`, `faq.html`, `contact.html`, `accessories.html`, `components.html`, `outlet.html`, `gift-card.html`, `404.html`, policy/legal pages, discipline pages and brand pages.

---

# CHANGE LOG

- **2026-10-13:** Master UI/UX execution checklist created after visual comparison against supplied mockups and review of current Trek, Specialized, Canyon and Santa Cruz interaction/content patterns.
