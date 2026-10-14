# Sprint 1F — Cross-site Normalization & QA Gate

Status: **normalization implemented; full browser QA still required**

## Goal

Remove the last obvious visual islands before calling the mockup a coherent site and establish a safe cleanup gate for legacy V2/V3 assets.

## Pages normalized in this pass

- `404.html`
- `states.html`
- `policies.html`
- `shipping-policy.html`
- `returns-policy.html`
- `warranty-policy.html`
- `privacy-policy.html`
- `terms.html`
- `outlet.html`
- `accessories.html`
- `components.html`
- `component-library.html`

These pages now use `core-v4` and one of the shared support/content systems rather than their previous V2/Tailwind one-off shells.

## Global navigation

`core-v4.js` now owns the V5 navigation contract globally.

It includes:

- topbar brand shortcuts;
- desktop mega menu;
- grouped mobile menu;
- Performance / Urban & Utility / Youth & Gear;
- KUBOR / Terrafit / HYPERGOGO;
- Bike Finder / Compare / Size / Geometry / Technology / Dealers / Help / All Collections;
- shared Search / Account / Wishlist / Cart actions.

### Accessibility improvements already applied in core

- `aria-haspopup` / `aria-expanded` on mega trigger;
- dialog roles on drawers;
- Escape closes drawers/mega;
- labels on search and cart quantity actions;
- current page state on matching nav links;
- `prefers-reduced-motion` already exists in core CSS;
- visible focus styles exist globally.

## Responsive architecture found in shared CSS

`core-v4.css` currently defines major changes around:

- <= 1100 px: hide desktop nav / move core grids toward tablet;
- <= 760 px: mobile header, horizontal category/product rails, compact hero, mobile PLP toolbar, PDP mobile gallery/spec/related rails, sticky mobile ATC, mobile footer behavior.

`sprint1b.css` adds additional tuning around:

- <= 1180 px;
- <= 960 px;
- mobile PLP / PDP / Home visual refinements.

This is a good static foundation, but it is **not a substitute for browser/device QA**.

## Static issues / cleanup backlog

### Transitional legacy files still present

Do not delete yet until reference scan confirms no page depends on them:

- `v2.css`
- `app-v2.js`
- `modules-v3.js`
- `shell-v2.js`
- `reference-lock.js`
- `styles.css`
- `app.js`
- `forms-v1.js`

### Transitional navigation file

- `nav-v5.js`

The global V5 contract now lives in `core-v4.js`. Some newer pages still explicitly load `nav-v5.js`; it is currently compatible but redundant. Remove those references in cleanup after full regression.

### Tailwind-era utility remnants

`core-v4.js` still emits a few class names such as `w-4` / `w-5` on Lucide source elements. Critical shell icon buttons have explicit CSS sizing, so this is not a commerce blocker, but those utility remnants should be removed so the core has zero implicit Tailwind assumptions.

### Browser QA still required

Must validate at minimum:

- 320
- 375
- 390
- 430
- 768
- 1024
- 1280
- 1440+

For:

- header/topbar/mega/mobile menu;
- drawer overflow and closing;
- Home hero/category/product rails;
- PLP filters/cards/compare tray;
- PDP gallery/tabs/spec strip/sticky ATC;
- Cart / Search;
- Account subnav/forms;
- Compare table;
- All Collections;
- discipline / brand landings;
- content/article layouts;
- legal/support pages.

## Interaction QA still required

- keyboard focus order;
- drawer focus containment / return focus;
- menu and accordion state announcements;
- PDP tabs with screen reader;
- form validation announcement;
- disabled/loading states;
- file uploads in warranty/support concepts;
- product swatch/media behavior;
- no-JS degradation for non-critical content.

## Data/content validation still required

- final product names/prices;
- geometry;
- specifications;
- warranty/legal copy;
- dealer data;
- stock/availability;
- final owned KUBOR imagery.

## Cleanup gate

Legacy assets may only be deleted after:

1. every visible HTML page has been checked for references;
2. Home → PLP → PDP → Cart → Search → Account path works after deletion in a test copy;
3. support / brand / discipline pages render without missing assets;
4. GitHub Pages has been checked after cache refresh;
5. no user-approved mockup contract is lost.

## Next execution step

1. browser-level responsive / accessibility review where tooling permits;
2. remove transitional `nav-v5.js` includes;
3. eliminate utility-class remnants from core shell;
4. complete reference scan before removing V2/V3 assets;
5. produce the final asset-replacement list against the supplied mockups;
6. only then begin Liquid migration in `KUBOR-Shopify-Theme` when explicitly authorized.
