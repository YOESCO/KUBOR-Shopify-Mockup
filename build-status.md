# KUBOR Mockup Build Status

Current review build: `2026.10.14-sprint1D-support-landings`

## Source of truth

- Execution checklist: `docs/ui-ux-master-checklist.md`
- Sprint 1 core: `docs/sprint-1-core-convergence.md`
- Sprint 1B visual convergence: `docs/sprint-1b-visual-convergence.md`
- Sprint 1C commerce/account: `docs/sprint-1c-commerce-account.md`
- Sprint 1D support/landings: `docs/sprint-1d-support-landings.md`
- Navigation index: `site-map.html`
- Shopify mapping: `docs/shopify-handoff-map.md`

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
- `nav-v5.js`

## Sprint 1D summary

### Support / decision
- richer compare table;
- Help Center search/filter;
- categorized FAQ;
- contact form validation/success state;
- dealer search/service filters + map concept;
- configurable Gift Card mock;
- expanded All Collections index.

### New category coverage
Dedicated pages now exist for:
- Fitness;
- Commuter;
- Trekking;
- Cargo / Utility;
- Kids;
- BMX / Stunt.

### Brand differentiation
- KUBOR: performance / premium / technical;
- Terrafit: everyday / accessible / value-led;
- HYPERGOGO: expressive gradients / electric storytelling.

### Navigation
`nav-v5.js` defines the expanded navigation contract for disciplines, urban/use categories, youth, gear, brands and decision/support tools. It is not yet injected into every page context, so global V5 nav is still an open item.

## Still not final / do not mark approved yet

1. visual QA against supplied mockups;
2. final owned KUBOR product photography / controlled crops;
3. exact spacing and typography refinement;
4. validated product specs and geometry;
5. responsive QA at 320 / 375 / 390 / 430 / 768 / 1024 / 1280 / 1440+;
6. finish V5 mega/mobile navigation injection everywhere;
7. normalize Size Guide / Geometry / Technology / About / Blog / Article / Community / Campaign;
8. add Bike Finder / Quiz;
9. add Manuals / Assembly / Maintenance surfaces;
10. account/support form error/disabled/upload states;
11. performance/dependency cleanup;
12. remove legacy V2/V3 only after no page depends on them.

## Next block

Finish global V5 navigation, normalize decision/content pages, create Bike Finder and support knowledge surfaces, then start the first full responsive/accessibility QA pass.

## Shopify handoff

All current files remain HTML mockup contracts. Approved UI will map to Shopify section groups, sections, blocks, snippets, metafields/metaobjects, Customer Accounts and app-backed features per `docs/shopify-handoff-map.md`.
