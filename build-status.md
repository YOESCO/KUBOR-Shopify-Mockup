# KUBOR Mockup Build Status

Current review build: `2026.10.14-sprint1H-mockup-convergence`

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
- Navigation index: `site-map.html`
- Shopify mapping: `docs/shopify-handoff-map.md`

## Global shell

`core-v4.js` owns the V5 navigation contract. It loads Sprint 1G globally, and Sprint 1G now loads the Sprint 1H visual-convergence layer.

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
- PDP spec strip now visually overlaps the dark first fold;
- PDP tabs/story/tech/related/support spacing reduced;
- footer density reduced.

### Interaction/performance reinforcement
- visible Add to cart controls normalized where missing;
- PDP primary Add to cart normalized;
- secondary images use lazy loading;
- primary hero/product image receives eager/high-priority loading;
- add-to-cart confirmation state added.

## Still not final / do not mark approved yet

1. actual browser/device screenshot QA against supplied mockups;
2. final owned KUBOR product photography / controlled crops;
3. exact spacing and typography refinement after screenshot comparison;
4. validated product specs and geometry;
5. screenshot comparison at 390 / 768 / 1440 first, then full 320 / 375 / 430 / 1024 / 1280+ sweep;
6. full screen-reader/browser accessibility validation;
7. form loading / disabled / upload / failure states;
8. real Shopify integrations for cart/search/customer data;
9. real dealer/map integration;
10. complete dependency/reference scan before deleting legacy V2/V3 assets;
11. remove redundant transitional loaders / `nav-v5.js` only after regression;
12. performance/dependency cleanup.

## Largest remaining visual gap

The approved mockups rely on controlled image assets: isolated bicycle packshots, component closeups, deliberate action photography, and brand-specific crops. Many current surfaces still use temporary Unsplash imagery. Layout is now closer to the approved composition, but final visual approval should wait until those assets are replaced.

## Next block

1. screenshot-based crop/spacing/type comparison at 390 / 768 / 1440 where tooling permits;
2. produce a final asset-gap list for KUBOR-owned product imagery;
3. tighten Cart / Search / Account after core visual approval;
4. remove transitional dependencies after regression;
5. freeze approved mockup contracts;
6. begin Liquid migration only when explicitly authorized.

## Shopify handoff

All current files remain HTML mockup contracts. Approved UI will map to Shopify section groups, sections, blocks, snippets, metafields/metaobjects, Customer Accounts and app-backed features per `docs/shopify-handoff-map.md`.
