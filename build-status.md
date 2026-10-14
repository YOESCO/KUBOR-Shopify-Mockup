# KUBOR Mockup Build Status

Current review build: `2026.10.14-sprint1C-account`

## Source of truth

- Execution checklist: `docs/ui-ux-master-checklist.md`
- Sprint 1 core: `docs/sprint-1-core-convergence.md`
- Sprint 1B visual convergence: `docs/sprint-1b-visual-convergence.md`
- Sprint 1C commerce/account: `docs/sprint-1c-commerce-account.md`
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

Shared assets:

- `core-v4.css`
- `core-v4.js`
- `sprint1b.css`
- `sprint1b.js`
- `sprint1c.css`
- `sprint1c.js`
- `account-flow.css`
- `account-shell.js`

## Sprint 1B summary

Home / PLP / PDP were rebuilt closer to the approved mockups with tighter proportions, richer cards and states, mobile rails, PLP filtering/compare UI, PDP tabs/specs/geometry/reviews and support modules.

## Sprint 1C summary

### Cart
- shared cart state;
- quantity / remove;
- totals;
- shipping progress;
- coupon demo;
- cross-sell;
- empty state.

### Search
- instant mock filtering;
- result tabs;
- popular chips;
- products / collections / content;
- no-results recovery.

### Customer Account
- reusable account shell / subnavigation;
- dashboard;
- orders and order detail;
- tracking timeline;
- addresses;
- wishlist;
- registered bikes and serial-number concept;
- warranties and claim concept;
- support cases;
- preferences;
- login / register / password recovery.

## Still not final / do not mark approved yet

1. visual QA against supplied mockups;
2. final owned KUBOR product photography / controlled crops;
3. exact spacing and typography refinement;
4. real PLP filtering/sort if needed in the prototype;
5. PDP fullscreen/zoom/video behavior;
6. validated product specs and geometry;
7. responsive QA at 320 / 375 / 390 / 430 / 768 / 1024 / 1280 / 1440+;
8. account form success/error/disabled states;
9. normalize Compare / Help Center / FAQ / Contact / Dealers / Gift Card / All Collections;
10. normalize discipline and brand landings;
11. performance/dependency cleanup;
12. remove legacy V2/V3 only after no page depends on them.

## Next block

Normalize support/decision pages and then begin first full-site responsive/accessibility QA pass.

## Shopify handoff

All current files remain HTML mockup contracts. Approved UI will map to Shopify section groups, sections, blocks, snippets, metafields/metaobjects, Customer Accounts and app-backed features per `docs/shopify-handoff-map.md`.
