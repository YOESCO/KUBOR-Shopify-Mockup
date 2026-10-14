# KUBOR Mockup Build Status

Current review build: `2026.10.14-sprint1Q-category-proportion`

## Source of truth

- Master execution checklist: `docs/ui-ux-master-checklist.md`
- Navigation index: `site-map.html`
- Shopify handoff map: `docs/shopify-handoff-map.md`
- Mobile grid/icon alignment: `docs/sprint-1k-mobile-grid.md`
- Home/PDP responsive: `docs/sprint-1l-home-pdp-responsive.md`
- Cart/Search/Account responsive: `docs/sprint-1m-cart-search-account-responsive.md`
- Discovery/motion: `docs/sprint-1n-1o-discovery-wow.md`
- Category hierarchy/proportion: `docs/sprint-1q-category-proportion.md`

Earlier sprint documents remain in `docs/` for history and rationale.

## Current shared architecture

`core-v4.js` owns the global shell. Later visual/data layers are loaded through `sprint1j.js`.

Current late-stage chain:

`1K + 1L + 1M + 1N + 1O + 1P + 1Q`

## Current visual direction

### Header / mobile menu
- safe-area-aware mobile gutter;
- image-led mobile shortcuts;
- desktop navigation collapses before tablet widths become compressed;
- cart/menu remain hard-right on mobile.

### Home
- **large visual category cards are again the primary category control**;
- all review categories live in one horizontal visual rail: Todas, MTB, Ruta, Gravel, Urbanas, Eléctricas, Fitness, Commuter, Trekking, Cargo / Utility, Kids and BMX / Stunt;
- category-card clicks filter the Home catalogue in place;
- `Mostrar todas` resets the same catalogue instead of navigating away;
- small chips are reserved for contextual subcategories only;
- MTB subcategories include Sport / XC / Doble suspensión / Trail light;
- Urban subcategories include Fitness / Commuter / Trekking / Cargo / Utility;
- concept-only entries remain labelled as concepts and do not impersonate live commercial products;
- scroll-driven technology storytelling and controlled motion remain available.

### Carousel system
- raw horizontal scrollbars are hidden while native touch scrolling remains;
- arrows are secondary controls, not focal UI;
- category controls are ~28–30 px;
- normal product/editorial controls are ~30–32 px;
- compact/spec controls are ~28 px;
- arrows remain in normal document flow and must not overlap cards.

### PLP
- fixed sidebar disappears before it squeezes the grid;
- Filter/Sort owns mid-width filtering;
- mobile card/grid proportions have been reopened;
- false live counts and fabricated filtering state remain removed.

### PDP
- Mallory R29 21V remains the verified example;
- strict width containment is applied to gallery, buybox, specs, tabs and related rails;
- internal rails cannot widen the document;
- sticky purchase bar respects safe areas;
- tablet uses a deliberate single-column purchase flow.

### Support / editorial
- image-led hero variants are available across shared support/content contracts;
- Technology, Size, Geometry, Journal, About, Community, Manuals, Assembly and Maintenance use a richer editorial language where appropriate;
- cyan / lime / violet / amber remain restrained accent colours rather than new brand primaries.

## Real / owned assets in repo

- `assets/media/kubor-hero.jpg`
- `assets/products/mallory-orange.jpg`
- `assets/logos/KUBOR_only_clear.svg`
- `assets/logos/KUBOR_only_dark.svg`
- `assets/logos/TERRAFIT_dark.svg`

HYPERGOGO exact standalone SVG is still pending; do not redraw or trace it.

## Do not mark visually approved yet

1. Real iPhone/browser screenshot QA after Sprint 1Q.
2. Confirm PDP document width equals viewport width in the actual browser.
3. Final category-card width, arrow placement, crops and vertical rhythm.
4. Verified clean product imagery for the rest of the KUBOR portfolio.
5. Current commercial SKU/price/variant validation from Shopify data.
6. Full accessibility/reduced-motion validation.
7. Real Shopify cart/search/customer/dealer integrations.
8. Transitional dependency cleanup only after regression QA.

## Next execution block

1. Review Home category rail and PDP on the next mobile screenshots.
2. Tune card widths, arrow position and visual hierarchy from the real render.
3. Continue replacing temporary imagery with verified KUBOR assets.
4. Extend richer UI only where it improves discovery or storytelling.
5. Freeze mockup contracts only when the visual gap is materially smaller.
6. Begin Liquid migration only when explicitly authorized.
