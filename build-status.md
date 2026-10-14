# KUBOR Mockup Build Status

Current review build: `2026.10.14-sprint1G-responsive-a11y`

## Source of truth

- Execution checklist: `docs/ui-ux-master-checklist.md`
- Sprint 1 core: `docs/sprint-1-core-convergence.md`
- Sprint 1B visual convergence: `docs/sprint-1b-visual-convergence.md`
- Sprint 1C commerce/account: `docs/sprint-1c-commerce-account.md`
- Sprint 1D support/landings: `docs/sprint-1d-support-landings.md`
- Sprint 1E content/knowledge: `docs/sprint-1e-content-knowledge.md`
- Sprint 1F normalization/QA gate: `docs/sprint-1f-normalization-qa.md`
- Sprint 1G responsive/a11y: `docs/sprint-1g-responsive-a11y.md`
- Navigation index: `site-map.html`
- Shopify mapping: `docs/shopify-handoff-map.md`

## Global shell

`core-v4.js` owns the V5 navigation contract and now also loads the Sprint 1G hardening layer globally.

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

## Sprint 1G summary

### Responsive
- explicit hardening for <=360, <=430, <=760, <=1024 and >=1440;
- mobile header/logo/touch target adjustments;
- Home rails retained instead of long mobile stacks;
- PLP two-column compact mobile grid retained with progressive content reduction;
- mobile sort uses a dedicated bottom sheet;
- PDP gallery/specs/tabs/related modules tuned for small screens;
- mobile PDP sticky purchase area respects safe-area inset.

### Accessibility / interaction
- skip-to-content link;
- shared live region;
- drawer dialog semantics;
- focus trap and focus return;
- mega/mobile accordion expanded-state synchronization;
- PDP thumbnail state labels;
- native-dialog PDP image zoom;
- newsletter validation/feedback;
- product action ARIA states.

### Regression fixed

A Sprint 1B listener was blocking delegated commerce actions by stopping propagation on card buttons. Sprint 1G restores delegated behavior for:
- Add to cart
- Wishlist
- Compare
- Quick view

## Still not final / do not mark approved yet

1. actual browser/device visual QA against supplied mockups;
2. final owned KUBOR product photography / controlled crops;
3. exact spacing and typography refinement;
4. validated product specs and geometry;
5. screenshot comparison at 320 / 375 / 390 / 430 / 768 / 1024 / 1280 / 1440+;
6. full screen-reader/browser accessibility validation;
7. form loading / disabled / upload / failure states;
8. real Shopify integrations for cart/search/customer data;
9. real dealer/map integration;
10. complete dependency/reference scan before deleting legacy V2/V3 assets;
11. remove redundant transitional loaders / `nav-v5.js` only after regression;
12. performance/dependency cleanup.

## Next block

1. visual crop/spacing/type comparison against approved Home / PLP / PDP mockups;
2. build a final asset-gap list for KUBOR-owned product imagery;
3. tighten Cart / Search / Account after core visual approval;
4. remove transitional dependencies after regression;
5. freeze approved mockup contracts;
6. begin Liquid migration only when explicitly authorized.

## Shopify handoff

All current files remain HTML mockup contracts. Approved UI will map to Shopify section groups, sections, blocks, snippets, metafields/metaobjects, Customer Accounts and app-backed features per `docs/shopify-handoff-map.md`.
