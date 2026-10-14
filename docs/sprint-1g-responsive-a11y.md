# Sprint 1G — Responsive + Accessibility Hardening

Status: **implemented at shared-core level; visual device QA still required**

## Goal

Harden the normalized mockup across small mobile, standard mobile, tablet and desktop without creating page-specific forks. Sprint 1G is loaded globally from `core-v4.js`, so pages already migrated to the shared shell inherit the same responsive and accessibility layer.

## New shared assets

- `sprint1g.css`
- `sprint1g.js`

`core-v4.js` now loads both automatically. Transitional loaders also remain in `sprint1b.js`, `sprint1c.js` and `account-shell.js`; they are guarded against duplicate loading and can be removed later during dependency cleanup.

## Responsive work

### Breakpoints explicitly covered in CSS

- <= 360 px
- <= 430 px
- <= 760 px
- <= 1024 px
- >= 1440 px

These rules are intended to cover the review targets 320 / 375 / 390 / 430 / 768 / 1024 / 1280 / 1440+ with interpolation between them.

### Global shell

- tighter small-mobile logo/header sizing;
- 44 px mobile icon/touch targets;
- announcement text truncation instead of overflow;
- full-width mobile drawers;
- mobile navigation targets increased;
- footer collapses to one column at very small widths;
- safer focus-visible treatment.

### Home

- mobile hero height/type adjusted for 320–430 px;
- category/product/editorial/brand/UGC modules remain horizontal rails instead of becoming long stacks;
- mobile card widths tuned by viewport;
- trust strip remains horizontally explorable;
- desktop density receives a 1440+ refinement.

### PLP

- two-column compact product grid retained on mobile;
- card typography and CTA density reduced progressively at <=430 and <=360;
- mobile ratings are removed at <=430 to avoid card overload;
- metadata is removed only at <=360;
- mobile toolbar remains sticky;
- mobile Sort now opens a dedicated native-dialog bottom sheet generated from the desktop sort select.

### PDP

- product gallery heights tuned for standard and very-small mobile;
- thumbnails become horizontal rail;
- color and size controls become larger touch targets;
- spec strip becomes horizontal rail;
- tabs remain horizontally scrollable and sticky;
- related products stay a horizontal rail;
- support/technology cards collapse progressively;
- sticky mobile purchase area respects safe-area inset.

## Accessibility / interaction work

### Global

- skip-to-content link;
- `main` target normalization;
- polite live region for cart/form feedback;
- ARIA state synchronization for shared drawers;
- keyboard focus trap inside open drawers;
- focus returns to the opener after closing;
- mega-menu `aria-expanded` synchronization;
- mobile menu accordion `aria-controls` / `aria-expanded`;
- existing reduced-motion support preserved.

### Product cards

A Sprint 1B regression was found: direct `stopPropagation()` listeners on card buttons could prevent document-level delegated actions from firing.

Sprint 1G removes that blockage for delegated commerce controls after initialization. The following mock actions can therefore reach the shared handlers again:

- Add to cart
- Wishlist
- Compare
- Quick view

Buttons also receive semantic labels / pressed states where relevant.

### PDP

- thumbnail buttons receive labels and pressed state;
- fullscreen image viewer implemented with native `<dialog>`;
- existing color/size state remains keyboard reachable;
- tabs keep the prior keyboard-arrow behavior from Sprint 1B.

### Newsletter

- button normalized to submit;
- HTML email validation;
- accessible mock confirmation via live region.

## Known limitations — not approved yet

1. This is code-level responsive hardening, not a screenshot/device-lab approval.
2. Final KUBOR-owned product images/crops are still missing.
3. PLP filter controls remain prototype-level; they do not represent Shopify storefront filtering yet.
4. Full screen-reader audit still requires a browser/a11y inspection pass.
5. Real forms need loading / failure / upload states where applicable.
6. Final policy/legal text remains outside the mockup scope until official content is supplied.
7. Transitional Sprint 1B / 1C / account loaders duplicate the global Sprint 1G loader defensively; clean them only after regression QA.
8. Legacy V2/V3 files still remain in the repo as compatibility artifacts and must not be deleted until dependency audit closes.

## Next visual pass

Prioritize comparison against the approved mockups in this order:

1. Header / topbar / mega menu
2. Home hero + overlapping category rail
3. Home product cards + trust strip + storytelling
4. PLP hero / filters / 4-column desktop grid / 2-column mobile grid
5. PDP first fold / gallery / buybox / spec strip
6. PDP tabs / geometry / specs / related products
7. Cart / Search / Account
8. Discipline / brand / support landings

For each surface, review crop, visual hierarchy, spacing, typography, contrast and interaction before adding new modules.
