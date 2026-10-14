# KUBOR Mockup Build Status

Current review build: `2026.10.14-sprint1E-content-knowledge`

## Source of truth

- Execution checklist: `docs/ui-ux-master-checklist.md`
- Sprint 1 core: `docs/sprint-1-core-convergence.md`
- Sprint 1B visual convergence: `docs/sprint-1b-visual-convergence.md`
- Sprint 1C commerce/account: `docs/sprint-1c-commerce-account.md`
- Sprint 1D support/landings: `docs/sprint-1d-support-landings.md`
- Sprint 1E content/knowledge: `docs/sprint-1e-content-knowledge.md`
- Navigation index: `site-map.html`
- Shopify mapping: `docs/shopify-handoff-map.md`

## Global shell

`core-v4.js` is now the global V5 navigation source of truth for pages using the shared core.

Desktop mega menu includes:
- Performance: MTB / Road / Gravel / Electric;
- Urban & Utility: Urban / Fitness / Commuter / Trekking / Cargo;
- Youth & Gear: Kids / BMX / Accessories / Components / Outlet;
- decision/support: Bike Finder / Compare / Size / Geometry / Technology / Dealers / Help / All Collections;
- KUBOR / Terrafit / HYPERGOGO.

Mobile navigation exposes the same architecture through grouped accordion sections.

## Shared visual core currently active on

### Commerce core
- `home-v2.html`
- `collection-v2.html`
- `product-v2.html`
- `cart.html`
- `search.html`

### Account core
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

### Support / discovery normalized
- `compare.html`
- `help-center.html`
- `faq.html`
- `contact.html`
- `dealers.html`
- `gift-card.html`
- `all-collections.html`
- `site-map.html`

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

### Brand landings
- `brand-kubor.html`
- `brand-terrafit.html`
- `brand-hypergogo.html`

### Decision / editorial / knowledge
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

### Special storefront state
- `password.html`

## Shared assets

- `core-v4.css`
- `core-v4.js`
- `sprint1b.css`
- `sprint1b.js`
- `sprint1c.css`
- `sprint1c.js`
- `account-flow.css`
- `account-shell.js`
- `support-flow.css`
- `support-flow.js`
- `landing-flow.css`
- `content-flow.css`
- `content-flow.js`
- `nav-v5.js` (transitional compatibility; global V5 now lives in `core-v4.js`)

## Sprint 1E summary

### Decision support
- interactive Size Guide mock;
- expanded Geometry Guide;
- Technology library with technical SVG icons;
- interactive Bike Finder quiz.

### Editorial
- About / brand story;
- KUBOR Journal;
- Article template;
- Community / social concept;
- Campaign / launch template.

### Knowledge / post-sale
- Manuals & downloads hub;
- Assembly Guide;
- Maintenance Guide.

### System states
- Storefront Password / Coming Soon;
- Reset Password state.

## Still not final / do not mark approved yet

1. visual QA against supplied mockups at desktop and mobile widths;
2. final owned KUBOR product photography / controlled crops;
3. exact spacing and typography refinement;
4. validated product specs and geometry;
5. responsive QA at 320 / 375 / 390 / 430 / 768 / 1024 / 1280 / 1440+;
6. keyboard / focus / ARIA / screen-reader pass;
7. form loading / disabled / upload / failure states;
8. real Shopify integrations for cart/search/customer data;
9. real dealer/map integration;
10. normalize any remaining legacy surfaces: 404 / states / policies / outlet / accessories / components;
11. remove transitional `nav-v5.js` duplication;
12. performance/dependency cleanup;
13. remove legacy V2/V3 only after no page depends on them.

## Next block

Sprint 1F = cross-site normalization and QA:

1. normalize the remaining legacy surfaces onto shared core;
2. static link/integration audit;
3. responsive/touch target pass;
4. keyboard/focus/ARIA pass;
5. dependency cleanup;
6. asset replacement plan against supplied mockups.

## Shopify handoff

All current files remain HTML mockup contracts. Approved UI will map to Shopify section groups, sections, blocks, snippets, metafields/metaobjects, Customer Accounts and app-backed features per `docs/shopify-handoff-map.md`.
