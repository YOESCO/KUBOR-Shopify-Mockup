# Sprint 1B — Visual Convergence

Status: **implemented, pending visual QA**

Primary references remain the supplied KUBOR mockup images. External cycling sites are used only for UX patterns that do not change the approved visual language.

## Shared layer

Added:

- `sprint1b.css`
- `sprint1b.js`

These sit on top of `core-v4.css` / `core-v4.js` and are intentionally limited to visual convergence, state handling and accessibility polish.

## Global shell refinements

Implemented:

- compact search icon treatment closer to approved header;
- tighter logo / navigation proportions;
- richer MTB mega-menu with Sport, XC, Trail, Enduro, Downhill, Kids, BMX/Stunt, Cargo/Utility, Fitness/Commuter, Accessories and Components;
- brand shortcuts for KUBOR / Terrafit / HYPERGOGO;
- active navigation state;
- dialog semantics for drawers;
- official SVG logo remains unchanged;
- menu/search/cart remain native-JS critical interactions.

Still pending:

- final brand switcher placement in the shell;
- exact topbar multi-color/promotion presets for Theme Editor mapping;
- final visual QA of header heights and spacing at each breakpoint.

## Home

Rebuilt / refined:

- shorter hero proportion closer to reference;
- larger rider/bike visual field and stronger dark gradient;
- large condensed headline;
- four compact hero specification highlights;
- cyan primary CTA + outlined secondary CTA;
- overlapping five-category rail;
- featured cards with badges, swatches, rating, wishlist, quick view and quick add state;
- dark trust strip;
- mountain/engineering storytelling;
- decision-support block;
- Journal / community / launch blocks;
- KUBOR / Terrafit / HYPERGOGO brand universe;
- social/UGC strip;
- dealer / support / warranty CTAs;
- mobile horizontal rails instead of repeated long grids.

Pending:

- replace temporary stock photography with owned/final KUBOR assets;
- exact crop comparison against approved home screenshot;
- final typographic rhythm and spacing QA;
- validate whether every extended Home module stays enabled in the default preset or becomes optional in Theme Editor.

## PLP

Rebuilt / refined:

- compact category hero;
- breadcrumbs, description, rating and discipline chips;
- 230px desktop filter sidebar;
- filters for discipline, suspension, wheel size, size, frame material, drivetrain, brakes, price and availability;
- sort control;
- active filter chips;
- four-column desktop / two-column mobile product grid;
- new / bestseller / sale / low-stock / sold-out visual states;
- wishlist;
- compare;
- quick view;
- quick add;
- editorial card embedded inside product grid;
- buying-guide banner;
- mobile sticky Filters / Sort toolbar;
- compare tray.

Pending:

- filter data does not yet change the mock catalog;
- sort is feedback-only in the mockup;
- pagination/load-more behavior;
- swatch-driven image change on cards;
- final card photography and white-background product assets;
- exact mobile spacing QA.

## PDP

Rebuilt / refined:

- compact dark first fold;
- gallery + thumbnail rail;
- fullscreen affordance;
- product hierarchy closer to mockup;
- price, MSI, color, size, stock and SKU;
- functional color label and image swap mock;
- functional size state;
- add to cart / buy now / wishlist presentation;
- trust mini-row;
- six-cell technical spec strip using KUBOR SVG icon sprite;
- sticky tab bar with keyboard-operable tabs;
- description/storytelling panel;
- complete specifications table including crankset, cassette, brakes and wheels;
- geometry table by size;
- shipping / returns panel;
- warranty / registered-bike concept panel;
- technology cards;
- related product mobile rail;
- richer reviews section;
- FAQ;
- dealer / support / compare CTAs;
- mobile sticky add-to-cart delegates to the primary cart action.

Pending:

- final KUBOR product image gallery assets;
- zoom/fullscreen gallery implementation;
- product media/video block;
- real validated geometry and spec data;
- review data source decision;
- sold-out/unavailable variant behavior on PDP;
- final accessibility and mobile swipe QA.

## Accessibility improvements in this sprint

- aria-expanded for mega-menu;
- aria-current for current navigation item;
- role=dialog / aria-modal / aria-hidden state for drawers;
- keyboard arrow/Home/End support for PDP tabs;
- aria-selected states for tabs;
- aria-pressed for color, size and wishlist controls;
- semantic details open-state reporting;
- reduced-motion continues to be respected in CSS.

## Definition of done

This sprint is **not approved/final yet**. Do not mark Home, PLP, PDP or global shell complete in `docs/ui-ux-master-checklist.md` until visual QA is performed against the supplied images and responsive behavior is checked at the defined widths.

## Next execution block — Sprint 1C

1. visual QA / proportion correction at desktop + mobile;
2. migrate Cart and Search to the same core visual system;
3. normalize Account shell and customer pages;
4. refine product-card image/background strategy;
5. define owned asset requirements for Home / PLP / PDP;
6. performance/dependency pass and remove old V2/V3 only after no page depends on them.
