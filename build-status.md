# KUBOR Mockup Build Status

Current core review build: `2026.10.14-sprint1B`

## Source of truth

- Execution checklist: `docs/ui-ux-master-checklist.md`
- Sprint 1 core: `docs/sprint-1-core-convergence.md`
- Sprint 1B visual convergence: `docs/sprint-1b-visual-convergence.md`
- Navigation index: `site-map.html`
- Shopify mapping: `docs/shopify-handoff-map.md`

## Core pages currently on the shared system

- `home-v2.html`
- `collection-v2.html`
- `product-v2.html`

Shared assets:

- `core-v4.css`
- `core-v4.js`
- `sprint1b.css`
- `sprint1b.js`

## Sprint 1B changes now active

### Global shell

- tighter header proportions;
- compact search icon treatment;
- expanded desktop MTB mega-menu;
- Kids / BMX-Stunt / Cargo-Utility / Fitness-Commuter category shortcuts;
- KUBOR / Terrafit / HYPERGOGO brand shortcuts;
- native-JS menu, search and cart interactions remain critical-path;
- drawer dialog semantics and ARIA state improvements;
- active-page navigation treatment.

### Home

- hero proportions tightened toward approved mockup;
- mini-specs and dual CTA;
- overlapping category rail;
- richer product-card states and actions;
- dark trust strip;
- engineering storytelling;
- bike-selection / geometry decision-support;
- Journal / community / launch modules;
- brand universe and social/UGC strip;
- dealer / support / warranty CTAs;
- horizontal mobile rails.

### PLP

- compact MTB hero with discipline chips;
- 230px desktop filter sidebar;
- filters for discipline, suspension, wheel size, size, frame material, drivetrain, brakes, price and availability;
- sort + active filter chips;
- product cards with new / bestseller / sale / low-stock / sold-out visual states;
- wishlist, quick-view, quick-add and compare controls;
- embedded editorial card;
- buying guide;
- mobile sticky Filters / Sort toolbar;
- floating compare tray.

### PDP

- dark two-column first fold;
- gallery + thumbnail rail;
- price / MSI / color / size / stock / SKU hierarchy;
- color image-swap mock and size state;
- add-to-cart / wishlist / buy-now presentation;
- icon-led six-cell spec strip;
- keyboard-operable sticky tabs;
- description/storytelling panel;
- complete specification table including crankset, cassette, brakes and wheels;
- geometry table by size;
- shipping / returns and warranty panels;
- related-products rail;
- richer reviews;
- FAQ and support/dealer/compare CTAs;
- sticky mobile add-to-cart delegates to main cart action.

## Not final / do not mark approved yet

The core pages are still pending visual QA. Major remaining gaps:

1. final owned KUBOR bike/product photography and controlled crops;
2. desktop/mobile visual comparison against supplied screenshots;
3. exact spacing and typography refinement;
4. real PLP filter/sort behavior if needed for the HTML prototype;
5. PDP fullscreen/zoom and media/video behavior;
6. validated real product specs and geometry;
7. responsive QA at 320 / 375 / 390 / 430 / 768 / 1024 / 1280 / 1440+;
8. migrate Cart, Search and Account/customer pages to the same visual core;
9. performance/dependency cleanup;
10. remove legacy V2/V3 only when no remaining page depends on it.

## Next block

Sprint 1C will focus on visual QA/proportion tuning and then migrate Cart + Search + Account shell onto the same system before broader secondary-page normalization.

## Shopify handoff

These files remain mockup code. Approved UI contracts will later map to Shopify section groups, sections, blocks, snippets, metafields/metaobjects, Customer Accounts and app-backed features according to `docs/shopify-handoff-map.md`.
