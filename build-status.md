# KUBOR Mockup Build Status

Current review build: `2026.10.14-sprint1C`

## Source of truth

- Execution checklist: `docs/ui-ux-master-checklist.md`
- Sprint 1 core: `docs/sprint-1-core-convergence.md`
- Sprint 1B visual convergence: `docs/sprint-1b-visual-convergence.md`
- Sprint 1C commerce/account: `docs/sprint-1c-commerce-account.md`
- Navigation index: `site-map.html`
- Shopify mapping: `docs/shopify-handoff-map.md`

## Shared core now active on

- `home-v2.html`
- `collection-v2.html`
- `product-v2.html`
- `cart.html`
- `search.html`
- `account.html`

Shared assets:

- `core-v4.css`
- `core-v4.js`
- `sprint1b.css`
- `sprint1b.js`
- `sprint1c.css`
- `sprint1c.js`

## Current visual/UX state

### Shell

- tighter header proportions;
- compact search action;
- expanded desktop mega-menu;
- native-JS mobile navigation / search / cart;
- category and brand shortcuts;
- shared footer;
- accessibility state improvements for drawers and navigation.

### Home / PLP / PDP

Sprint 1B is active: visual proportions, richer product-card states, mobile rails, PLP filters/compare, PDP tabs/specs/geometry/reviews and support modules.

### Cart

- uses same mock cart state as core pages;
- quantity +/- and remove;
- subtotal / total;
- shipping progress;
- empty state;
- coupon feedback concept;
- cross-sell and trust modules;
- responsive summary layout.

### Search

- instant mock filtering;
- search chips;
- result-type tabs;
- product / collection / content results;
- no-results recovery state;
- shared shell and mobile behavior.

### Account

- shared shell;
- account hero and sticky subnavigation;
- Orders / Tracking / Wishlist / Warranties / Registered Bikes / Addresses cards;
- recent order;
- post-sale bike registration concept;
- Customer Account / app ownership clearly separated.

## Still not final / do not mark approved yet

1. visual QA against supplied desktop/mobile mockups;
2. final owned KUBOR product imagery and controlled crops;
3. exact spacing/type refinement;
4. real PLP filtering/sort if required in HTML prototype;
5. PDP fullscreen/zoom/media behavior;
6. validated real specs/geometry data;
7. responsive QA at 320 / 375 / 390 / 430 / 768 / 1024 / 1280 / 1440+;
8. normalize all customer account subpages;
9. normalize login/register/recover;
10. normalize Compare / Wishlist / Help / FAQ / Contact / Dealers;
11. performance/dependency cleanup;
12. remove legacy V2/V3 only after no page depends on them.

## Next block

Normalize the full customer-account flow and decision/support pages onto the same visual core, then do the first full responsive/accessibility QA pass.

## Shopify handoff

All current files remain HTML mockup contracts. Approved UI will later map to Shopify section groups, sections, blocks, snippets, metafields/metaobjects, Customer Accounts and app-backed features per `docs/shopify-handoff-map.md`.
