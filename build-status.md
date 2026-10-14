# KUBOR Mockup Build Status

Current review build: `2026.10.14-sprint1L-home-pdp-responsive`

## Source of truth

- Master execution checklist: `docs/ui-ux-master-checklist.md`
- Navigation index: `site-map.html`
- Shopify handoff map: `docs/shopify-handoff-map.md`
- Sprint 1J breathing pass: `docs/sprint-1j-breathing-pass.md`
- Sprint 1K mobile grid/icon alignment: `docs/sprint-1k-mobile-grid.md`
- Sprint 1L Home/PDP responsive: `docs/sprint-1l-home-pdp-responsive.md`

Earlier sprint documents remain in `docs/` for history and rationale.

## Current shared architecture

`core-v4.js` owns the global shell and loads Sprint 1G. The later visual/data chain is:

`Sprint 1G -> 1H -> 1I -> 1J loader -> 1K + 1L`

`sprint1j.js` is now a small loader. Its previous catalogue/search/compare cleanup lives in `sprint1j-runtime.js`.

Shared systems currently include:
- `core-v4.css/js`
- `sprint1g.css/js`
- `sprint1h.css/js`
- `sprint1i.js`
- `sprint1j.css`
- `sprint1j-readability.css`
- `sprint1j.js`
- `sprint1j-runtime.js`
- `sprint1k.css`
- `sprint1l.css/js`
- account / support / landing / content shared flows

## Core commerce state

### Header / shell
- safe-area-aware mobile gutter;
- topbar uses one centered announcement on mobile;
- full desktop nav collapses before it begins squeezing the shell;
- logo remains left while cart/menu actions are hard-right;
- mobile drawers inherit safe-area padding;
- debug `Páginas` helper remains available but no longer covers the first card.

### Home
- uses the same mobile grid as Header/PLP;
- hero specs and CTAs no longer hug edges;
- CTAs stack on narrow phones;
- categories, products and trust benefits use horizontal rails on mobile;
- storytelling stats move into normal flow on mobile;
- desktop keeps the compact approved composition.

### PLP
- over-compression from Sprint 1H has been corrected;
- no fake live `36 productos / Trail` state;
- fake filter counts/preselected Trail state removed;
- <=1050 px: fixed sidebar is removed and Filter/Sort toolbar owns filtering UI;
- <=820 px: two-column product grid;
- <=360 px: one-column grid;
- Filter/Sort icon + label groups are centered;
- hero chip states are explicit and no longer show blank white inactive chips.

### PDP
- Mallory R29 21V is the verified real-product example;
- mobile gallery stays inside the master gutter;
- zoom/badge controls have safe internal offsets;
- thumbnails, trust items, quick specs, tabs and related products use deliberate mobile rails;
- swatches/sizes/CTAs have larger touch targets;
- sticky Add bar respects safe areas and now uses the same cart contract as desktop;
- tablet uses a deliberate single-column purchase flow rather than squeezing gallery + buybox.

### Secondary commerce
- Search/predictive search no longer show X1 Pro or fabricated premium pricing;
- Compare uses Mallory / Calypso 4 / Storm with unknown values clearly marked `por validar`;
- Cart no longer promotes a fabricated accessory product;
- old visible `SPRINT 1G · 2026.10.14` storefront badge is removed when present.

## Real / owned assets in repo

- `assets/media/kubor-hero.jpg` — KUBOR brand/lifestyle asset, not a model packshot.
- `assets/products/mallory-orange.jpg` — verified Mallory image cropped from owned staging capture.
- `assets/logos/KUBOR_only_clear.svg`
- `assets/logos/KUBOR_only_dark.svg`
- `assets/logos/TERRAFIT_dark.svg`

HYPERGOGO: only a raster brand-reference board has been located. The original standalone SVG has not been found, so it must not be redrawn or traced.

## Do not mark visually approved yet

1. Browser screenshot QA against the approved mockups at 390 / 768 / 1024 / 1440.
2. Final crop / line-length / vertical rhythm tuning after those screenshots.
3. Clean verified packshots for Tornado, Calypso 4, Alpine, Storm, Sierra 7 and the rest of the catalogue.
4. Current commercial price / SKU / variant validation from Shopify data.
5. Full accessibility test in a real browser/screen reader.
6. Final form loading/error/upload states.
7. Real Shopify cart/search/customer/dealer integrations.
8. Dependency cleanup and deletion of transitional V2/V3 assets only after regression QA.
9. Exact official HYPERGOGO vector.

## Next execution block

1. Continue 390 / 768 / 1024 / 1440 visual tuning, now that Header/Home/PLP/PDP share the same grid.
2. Review Cart/Search/Account at the same breakpoints.
3. Continue extracting verified KUBOR product imagery.
4. Freeze approved mockup contracts.
5. Begin Liquid migration only when explicitly authorized.
