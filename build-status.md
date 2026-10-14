# KUBOR Mockup Build Status

Current review build: `2026.10.14-sprint1F-normalized`

## Source of truth

- Execution checklist: `docs/ui-ux-master-checklist.md`
- Sprint 1 core: `docs/sprint-1-core-convergence.md`
- Sprint 1B visual convergence: `docs/sprint-1b-visual-convergence.md`
- Sprint 1C commerce/account: `docs/sprint-1c-commerce-account.md`
- Sprint 1D support/landings: `docs/sprint-1d-support-landings.md`
- Sprint 1E content/knowledge: `docs/sprint-1e-content-knowledge.md`
- Sprint 1F normalization/QA gate: `docs/sprint-1f-normalization-qa.md`
- Navigation index: `site-map.html`
- Shopify mapping: `docs/shopify-handoff-map.md`

## Global shell

`core-v4.js` now owns the V5 navigation contract globally for pages using the shared core.

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
- `account-flow.css`
- `account-shell.js`
- `support-flow.css`
- `support-flow.js`
- `landing-flow.css`
- `content-flow.css`
- `content-flow.js`
- `assets/icons/kubor-icons.svg`

Transitional:
- `nav-v5.js` — global V5 navigation now lives in `core-v4.js`; some pages still load this compatibility file.

## Sprint 1F summary

- global V5 navigation moved into core shell;
- 404 normalized;
- UI state gallery expanded;
- policies hub normalized;
- shipping / returns / warranty / privacy / terms moved to shared policy shell without inventing final legal terms;
- Outlet / Accessories / Components moved off V2;
- Component Library moved off Tailwind/V2;
- reduced-motion support confirmed in core CSS;
- static responsive breakpoints confirmed in core + Sprint 1B CSS;
- cleanup gate documented before deleting legacy assets.

## Still not final / do not mark approved yet

1. browser/device visual QA against supplied mockups;
2. final owned KUBOR product photography / controlled crops;
3. exact spacing and typography refinement;
4. validated product specs and geometry;
5. full responsive review at 320 / 375 / 390 / 430 / 768 / 1024 / 1280 / 1440+;
6. focus trap / focus return / screen-reader validation;
7. form loading / disabled / upload / failure states;
8. real Shopify integrations for cart/search/customer data;
9. real dealer/map integration;
10. complete dependency/reference scan before deleting legacy V2/V3 assets;
11. remove redundant `nav-v5.js` includes and Tailwind-era utility remnants;
12. performance/dependency cleanup.

## Next block

1. full responsive/accessibility review where tooling permits;
2. final asset-gap list against supplied mockups;
3. remove transitional dependencies only after regression;
4. freeze approved mockup contracts;
5. begin Liquid migration only when explicitly authorized.

## Shopify handoff

All current files remain HTML mockup contracts. Approved UI will map to Shopify section groups, sections, blocks, snippets, metafields/metaobjects, Customer Accounts and app-backed features per `docs/shopify-handoff-map.md`.
