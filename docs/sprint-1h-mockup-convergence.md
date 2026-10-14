# Sprint 1H — Mockup Visual Convergence

Status: **implemented as shared visual layer; asset replacement and screenshot QA still required**

## Primary references

Sprint 1H is based on the supplied KUBOR design-system/mockup boards, not on generic ecommerce patterns.

Key visual contracts used:

- compact dark header + thin announcement bar;
- premium black/navy shell with cyan as principal accent and lime only for promo states;
- hero dominated by cycling imagery with left-aligned high-impact headline;
- overlapping Home category rail;
- clean, compact product cards;
- dense PLP with narrow filters + 4-column desktop grid;
- dark two-column PDP first fold with gallery/buybox + overlapping spec strip;
- image-led mega menu;
- horizontal content rails on mobile instead of long stacked pages;
- dark structured footer with support/newsletter/payment cues.

## New shared assets

- `sprint1h.css`
- `sprint1h.js`

`sprint1g.js` loads Sprint 1H automatically, therefore all normalized `core-v4` pages inherit the visual layer. Page-specific rules are scoped to Home / PLP / PDP where appropriate.

## Global shell changes

- topbar reduced to 28 px;
- header reduced to 58 px;
- logo/nav/icon scale tightened;
- desktop mega menu spacing reduced;
- primary mega promo card now receives photographic treatment;
- drawers reduced in visual padding while preserving 44 px touch targets through Sprint 1G;
- footer density reduced to match the reference boards more closely.

## Home changes

- desktop hero reduced from prototype-scale height to a compact ~468–485 px target;
- hero crop shifted toward rider/action area;
- headline reduced and tightened;
- body copy/spec row/CTA spacing reduced;
- overlapping category strip made shallower and denser;
- category imagery reduced to reference-like tile height;
- featured product cards tightened;
- trust strip compacted;
- storytelling reduced to banner-like proportion;
- secondary editorial/decision modules reduced in height so the Home reads as a premium storefront rather than a dashboard.

Mobile keeps a taller photographic hero because the supplied references specify distinct vertical mobile crops rather than a desktop hero simply scaled down.

## PLP changes

- hero targeted near the compact reference height;
- sidebar narrowed to ~220 px;
- filter vertical rhythm tightened;
- toolbar/chips reduced;
- four-column desktop density retained;
- cards and add-to-cart controls reduced in height;
- editorial interruption and buying guide reduced so product browsing remains primary.

## PDP changes

- first fold tightened;
- gallery targeted around 396–420 px on desktop;
- thumbnails reduced;
- buybox type/spacing reduced;
- variant controls tightened without reducing touch accessibility;
- spec strip now visually overlaps the dark first fold;
- sticky tabs reduced;
- story/technology/related/support spacing reduced;
- mobile gallery remains intentionally taller and vertically composed.

## Interaction corrections

Sprint 1H reinforces Sprint 1G commerce normalization:

- visible `+` and “Agregar al carrito” controls get the shared cart action when missing;
- PDP primary add-to-cart is wired;
- secondary images use lazy loading;
- principal hero/product image is eager/high priority;
- visual add-to-cart confirmation appears briefly after activation.

## Remaining visual gap

The largest remaining difference is **assets**, not layout architecture.

The approved references use:

1. isolated or tightly controlled bicycle packshots;
2. deliberate MTB / road / urban / electric photography;
3. product-detail closeups for cockpit, drivetrain, wheels, suspension and frame;
4. controlled hero crops with rider and product positioned for copy;
5. brand-specific imagery for KUBOR / Terrafit / HYPERGOGO.

Current mockup still uses temporary Unsplash imagery in many surfaces. Final visual approval should not happen until owned/approved assets replace those placeholders.

## Next visual QA

Review screenshots at:

- 390 px mobile;
- 768 px tablet;
- 1440 px desktop.

Then tune only:

- crop;
- whitespace;
- typography scale;
- card density;
- hero balance;
- CTA prominence;
- contrast.

Do not add more modules to Home / PLP / PDP during this pass unless a supplied reference clearly requires them.
