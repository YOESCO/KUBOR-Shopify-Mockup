# KUBOR Mockup Build Status

Current review build: `2026.10.14-sprint1I-real-data-assets`

## Source of truth

- Execution checklist: `docs/ui-ux-master-checklist.md`
- Sprint 1 core: `docs/sprint-1-core-convergence.md`
- Sprint 1B visual convergence: `docs/sprint-1b-visual-convergence.md`
- Sprint 1C commerce/account: `docs/sprint-1c-commerce-account.md`
- Sprint 1D support/landings: `docs/sprint-1d-support-landings.md`
- Sprint 1E content/knowledge: `docs/sprint-1e-content-knowledge.md`
- Sprint 1F normalization/QA gate: `docs/sprint-1f-normalization-qa.md`
- Sprint 1G responsive/a11y: `docs/sprint-1g-responsive-a11y.md`
- Sprint 1H mockup convergence: `docs/sprint-1h-mockup-convergence.md`
- Sprint 1I real data/assets: `docs/sprint-1i-real-data-assets.md`
- Navigation index: `site-map.html`
- Shopify mapping: `docs/shopify-handoff-map.md`

## Global shell

`core-v4.js` owns the V5 navigation contract. It loads Sprint 1G globally, and the shared visual layer now applies the Sprint 1H/1I catalogue normalization.

Desktop mega menu includes:
- Performance: MTB / Road / Gravel / Electric;
- Urban & Utility: Urban / Fitness / Commuter / Trekking / Cargo;
- Youth & Gear: Kids / BMX / Accessories / Components / Outlet;
- decision/support: Bike Finder / Compare / Size / Geometry / Technology / Dealers / Help / All Collections;
- KUBOR / Terrafit / HYPERGOGO.

Mobile navigation exposes the same architecture through grouped accordion sections.

## Normalized page coverage

### Commerce
- `home-v2.html`
- `collection-v2.html`
- `product-v2.html`
- `cart.html`
- `search.html`
- `outlet.html`
- `accessories.html`
- `components.html`
- `gift-card.html`
- `all-collections.html`

### Account
- `account.html`
- `orders.html`
- `order-detail.html`
- `tracking.html`
- `addresses.html`
- `wishlist.html`
- `warranties.html`
- `registered-bikes.html`
- `support.html`
- `account-preferences.html`
- `login.html`
- `register.html`
- `recover.html`
- `reset-password.html`

### Support / legal / states
- `compare.html`
- `help-center.html`
- `faq.html`
- `contact.html`
- `dealers.html`
- `policies.html`
- `shipping-policy.html`
- `returns-policy.html`
- `warranty-policy.html`
- `privacy-policy.html`
- `terms.html`
- `404.html`
- `states.html`

### Discipline landings
- `discipline-mtb.html`
- `discipline-road.html`
- `discipline-gravel.html`
- `discipline-urban.html`
- `discipline-electric.html`
- `discipline-fitness.html`
- `discipline-commuter.html`
- `discipline-trekking.html`
- `discipline-cargo.html`
- `discipline-kids.html`
- `discipline-bmx.html`

### Brand / editorial / decision
- `brand-kubor.html`
- `brand-terrafit.html`
- `brand-hypergogo.html`
- `size-guide.html`
- `geometry-guide.html`
- `technology.html`
- `bike-finder.html`
- `about.html`
- `blog.html`
- `article.html`
- `community.html`
- `campaign.html`
- `manuals.html`
- `assembly-guide.html`
- `maintenance-guide.html`

### System / review
- `password.html`
- `component-library.html`
- `site-map.html`

## Shared systems

- `core-v4.css`
- `core-v4.js`
- `sprint1b.css`
- `sprint1b.js`
- `sprint1c.css`
- `sprint1c.js`
- `sprint1g.css`
- `sprint1g.js`
- `sprint1h.css`
- `sprint1h.js`
- `account-flow.css`
- `account-shell.js`
- `support-flow.css`
- `support-flow.js`
- `landing-flow.css`
- `content-flow.css`
- `content-flow.js`
- `assets/icons/kubor-icons.svg`

## Real/owned assets now in the repo

- `assets/media/kubor-hero.jpg` — KUBOR lifestyle/brand asset; not treated as a model packshot.
- `assets/products/mallory-orange.jpg` — verified Mallory product image derived only by cropping the KUBOR staging capture.
- `assets/logos/KUBOR_only_clear.svg`
- `assets/logos/KUBOR_only_dark.svg`
- `assets/logos/TERRAFIT_dark.svg` — official supplied Terrafit mark.

HYPERGOGO official SVG has been located in the user's Library but is not yet published into the repo; do not redraw it.

Transitional:
- `nav-v5.js` — global V5 navigation now lives in `core-v4.js`; compatibility file can be removed after regression QA.
- defensive Sprint 1G loaders also remain in `sprint1b.js`, `sprint1c.js` and `account-shell.js`; duplicate loading is prevented by guards.

## Sprint 1H summary

### Visual convergence against supplied mockups
- topbar/header reduced to compact reference proportions;
- desktop mega menu tightened and primary promo made image-led;
- Home hero reduced to a compact storefront proportion;
- Home copy/spec/CTA spacing tightened;
- overlapping category rail made shallower and denser;
- product cards cleaned and compacted;
- Home trust/storytelling/secondary modules reduced in height;
- PLP hero/sidebar/chips/toolbar/cards/buying-guide made denser;
- PDP first fold/gallery/buybox tightened;
- PDP spec strip visually overlaps the dark first fold;
- PDP tabs/story/tech/related/support spacing reduced;
- footer density reduced.

## Sprint 1I summary

### Real product normalization
- Mallory R29 21V replaces the fictional X1 Pro as the primary PDP product;
- Home and PLP use the real Mallory packshot as the first verified product card;
- Mallory visible specs and geometry now come from consolidated KUBOR technical sources rather than fictional Trail/Carbon/XT data;
- the Mallory PDP is explicitly positioned as MTB FS Sport / recreational, not modern Trail;
- Mallory gallery uses the same verified product image for full/frame/drivetrain/fork views rather than inventing additional bikes;
- historical staging rating/price are treated as mock reference data, not live Shopify inventory;
- stock is left for Shopify integration rather than copied from the historic screenshot.

### Catalogue cleanup
Visible fictional names were replaced in the core PLP/Home with real portfolio names:
- Mallory;
- Storm;
- Tornado;
- Calypso 4;
- Alpine 5;
- Sierra 7.

Cards without verified model imagery/current commercial data are explicitly marked **Concepto visual** and use **Precio por validar** rather than pretending the temporary content is final.

### Interaction/performance reinforcement
- visible Add to cart controls normalized where missing;
- PDP primary Add to cart normalized;
- secondary images use lazy loading;
- primary hero/product image receives eager/high-priority loading;
- add-to-cart confirmation state added.

## Still not final / do not mark approved yet

1. actual browser/device screenshot QA against supplied mockups;
2. real clean packshots for Tornado / Calypso 4 / Alpine / Storm / Sierra 7 and the rest of the catalogue;
3. final colour-level product photography;
4. exact spacing and typography refinement after screenshot comparison;
5. current commercial price/spec/SKU validation per Shopify variant;
6. screenshot comparison at 390 / 768 / 1440 first, then full 320 / 375 / 430 / 1024 / 1280+ sweep;
7. full screen-reader/browser accessibility validation;
8. form loading / disabled / upload / failure states;
9. real Shopify integrations for cart/search/customer data;
10. real dealer/map integration;
11. complete dependency/reference scan before deleting legacy V2/V3 assets;
12. remove redundant transitional loaders / `nav-v5.js` only after regression;
13. publish official HYPERGOGO SVG and replace text-only brand marks;
14. performance/dependency cleanup.

## Largest remaining visual gap

The primary layout now follows the supplied mockups more closely and the core catalogue no longer relies entirely on invented products. The main remaining visual gap is **verified owned product photography**: isolated model packshots, real colour variants, component closeups and controlled discipline imagery.

## Next block

1. remove remaining fictional product references in secondary surfaces/search/related-product modules;
2. publish official HYPERGOGO logo from the supplied SVG;
3. continue extracting/verifying real model imagery from owned KUBOR sources;
4. screenshot-based crop/spacing/type comparison at 390 / 768 / 1440 where tooling permits;
5. tighten Cart / Search / Account after core visual approval;
6. remove transitional dependencies after regression;
7. freeze approved mockup contracts;
8. begin Liquid migration only when explicitly authorized.

## Shopify handoff

All current files remain HTML mockup contracts. Approved UI will map to Shopify section groups, sections, blocks, snippets, metafields/metaobjects, Customer Accounts and app-backed features per `docs/shopify-handoff-map.md`.