# KUBOR Mockup Build Status

Current core review build: `2026.10.14-sprint1-core-v4`

## Source of truth

- Execution checklist: `docs/ui-ux-master-checklist.md`
- Sprint 1 status: `docs/sprint-1-core-convergence.md`
- Navigation index: `site-map.html`
- Shopify mapping: `docs/shopify-handoff-map.md`

## Core V4 now active on

- `home-v2.html`
- `collection-v2.html`
- `product-v2.html`

These three pages now share:

- `core-v4.css`
- `core-v4.js`
- native-JS header / mega menu / mobile menu
- predictive search drawer
- cart drawer with localStorage mock persistence
- shared footer
- official KUBOR SVG logo
- direct link to `site-map.html`

## Home

- Rebuilt around approved mockup proportions and composition.
- Hero + mini specs + dual CTA.
- Overlapping 5-category rail.
- Featured product cards.
- Dark trust strip.
- `Ingeniería que nace en la montaña` storytelling module.
- Decision-support modules: size / geometry / technology.
- Journal / community / launch modules.
- KUBOR / Terrafit / HYPERGOGO brand universe.
- Dealer / warranty / help CTAs.
- Horizontal mobile rails for categories, products, editorial and brands.

## PLP

- Short MTB hero + rating + subdiscipline chips.
- ~235px desktop faceted sidebar.
- Sort toolbar + active-filter chips.
- 4-column desktop product grid / 2-column mobile grid.
- Wishlist, quick-view, quick-add and compare mock actions.
- Floating compare tray.
- Mobile filter drawer.
- Integrated MTB buying guide.
- Trust strip.

## PDP

- Dark two-column first fold.
- Gallery + thumbnails.
- Product identity, rating, price, MSI, stock.
- Functional mock color swatches and size selector.
- Add-to-cart mock + wishlist + buy-now presentation.
- Icon-led spec strip using `assets/icons/kubor-icons.svg`.
- Functional native-JS tabs: description / specs / geometry / shipping / warranty.
- Full spec table.
- Geometry table.
- Technology cards including crankset / cassette / brakes / wheels.
- Related products.
- Context FAQ + support / dealer CTAs.
- Warranty registration CTA.
- Mobile sticky add-to-cart.

## Still not considered final

Do **not** treat the core pages as approved yet. Remaining Sprint 1B work includes:

1. visual comparison against the supplied mockup images at desktop and mobile widths;
2. precise spacing / crop / type / density tuning;
3. replace temporary photography with owned/final product assets;
4. full multi-discipline mega menu;
5. card states: sale / bestseller / sold-out / low-stock;
6. richer reviews block and media storytelling on PDP;
7. ARIA / keyboard / accessibility pass;
8. responsive QA at 320 / 375 / 390 / 430 / 768 / 1024 / 1280 / 1440+;
9. migrate Cart / Search / Account and secondary pages onto `core-v4`;
10. remove old V2/V3 assets only after no page depends on them.

## Shopify handoff

`core-v4` is still mockup code. Approved UI contracts will later map into Shopify section groups, sections, blocks, snippets, metafields/metaobjects, Customer Accounts and app-backed features according to `docs/shopify-handoff-map.md`.
