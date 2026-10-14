# KUBOR Mockup Build Status

Current review build: `2026.10.14-sprint1O-discovery-motion`

## Source of truth

- Master execution checklist: `docs/ui-ux-master-checklist.md`
- Navigation index: `site-map.html`
- Shopify handoff map: `docs/shopify-handoff-map.md`
- Sprint 1J breathing pass: `docs/sprint-1j-breathing-pass.md`
- Sprint 1K mobile grid/icon alignment: `docs/sprint-1k-mobile-grid.md`
- Sprint 1L Home/PDP responsive: `docs/sprint-1l-home-pdp-responsive.md`
- Sprint 1M Cart/Search/Account responsive: `docs/sprint-1m-cart-search-account-responsive.md`
- Sprint 1N/1O discovery & motion: `docs/sprint-1n-1o-discovery-wow.md`

Earlier sprint documents remain in `docs/` for history and rationale.

## Current shared architecture

`core-v4.js` owns the global shell and loads Sprint 1G. Later visual/data layers are loaded through `sprint1j.js`:

`Sprint 1G -> 1H -> 1I -> 1J loader -> 1K + 1L + 1M + 1N + 1O`

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
- `sprint1m.css`
- `sprint1n.css/js`
- `sprint1o.css/js`
- account / support / landing / content shared flows

## Core commerce state

### Header / mobile menu
- safe-area-aware gutter;
- one centered announcement on mobile;
- desktop nav collapses before it squeezes tablet widths;
- logo stays left and utility actions stay right;
- mobile menu begins with image-led MTB / Road / Gravel / Electric shortcuts;
- All Bikes and Bike Finder are promoted as first-class mobile actions.

### Home
- category cards now filter the Home catalogue rather than always navigating away;
- `Ver todas` resets to all visible catalogue items on the same page;
- category filters: Todas / MTB / Ruta / Gravel / Urbanas / Eléctricas;
- contextual subcategory row appears below filters;
- expanded portfolio grid distinguishes verified Mallory from concept/review visuals;
- horizontal rails use arrows + snap + hidden scrollbars; selected rails can autoplay and pause on user interaction;
- technology/support marquee adds controlled motion and secondary accent colour;
- scroll-driven technical storytelling moves Geometry / Frame / Suspension / Drivetrain / Brakes / Wheels / Fit cards horizontally as desktop users scroll;
- mobile uses the same technical component as a normal arrow-controlled carousel.

### PLP
- over-compression corrected;
- false live counts / fake preselected Trail state removed;
- <=1050 px fixed sidebar is replaced by Filter / Sort toolbar;
- <=820 px two-column grid; <=360 px one-column grid;
- Filter/Sort icon + label alignment fixed;
- hero chip states are explicit and scrollbars are hidden.

### PDP
- Mallory R29 21V remains the verified real-product example;
- strict containment now applies to first grid, gallery, buybox, quick specs, tabs, story and related rails;
- internal rails can scroll without widening the document;
- thumbnails / trust / quick specs / related products use explicit arrow controls where overflow exists;
- sticky purchase bar respects safe areas and uses the same cart contract as desktop;
- tablet uses a deliberate single-column purchase flow.

### Cart / Search / Account
- Cart rows and summary reflow without overlap;
- Search uses 2 columns on tablet and 1 on narrow phones;
- Account cards use 2 columns on tablet and 1 on phones;
- secondary commerce no longer exposes X1 Pro or fabricated premium prices.

### Support / guides
- shared support heroes can now become image-led while retaining dark overlay and readable content;
- image-led hero treatment is currently applied to Help, FAQ, Contact, Dealers, Compare and Gift Card where the shared hero contract exists.

## Real / owned assets in repo

- `assets/media/kubor-hero.jpg` — KUBOR brand/lifestyle asset, not a model packshot.
- `assets/products/mallory-orange.jpg` — verified Mallory image cropped from owned staging capture.
- `assets/logos/KUBOR_only_clear.svg`
- `assets/logos/KUBOR_only_dark.svg`
- `assets/logos/TERRAFIT_dark.svg`

HYPERGOGO: only a raster brand-reference board has been located. The original standalone SVG has not been found, so it must not be redrawn or traced.

## Do not mark visually approved yet

1. Real browser screenshot QA against approved mockups at 390 / 768 / 1024 / 1440.
2. Confirm PDP document width equals viewport width on real mobile browsers after all runtime layers.
3. Final crop / arrow placement / line-length / vertical-rhythm tuning.
4. Clean verified packshots for Tornado, Calypso 4, Alpine, Storm, Sierra 7 and the rest of the catalogue.
5. Current commercial price / SKU / variant validation from Shopify data.
6. Full accessibility and reduced-motion testing in real browsers.
7. Final form loading/error/upload states.
8. Real Shopify cart/search/customer/dealer integrations.
9. Dependency cleanup and deletion of transitional V2/V3 assets only after regression QA.
10. Exact official HYPERGOGO vector.

## Next execution block

1. Review the new Home catalogue/filter behaviour and PDP width on real iPhone screenshots.
2. Extend the image-led / richer component language to remaining content and brand landings.
3. Continue extracting verified KUBOR product imagery.
4. Freeze approved mockup contracts only after the visual gap is materially smaller.
5. Begin Liquid migration only when explicitly authorized.
