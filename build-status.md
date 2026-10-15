# KUBOR Mockup Build Status

Current review build: `2026.10.15-sprint1U-real-device-stabilization`

## Source of truth
- Master checklist: `docs/ui-ux-master-checklist.md`
- Navigation index: `site-map.html`
- Shopify handoff: `docs/shopify-handoff-map.md`
- Coherence reset: `docs/sprint-1s-1t-coherence-reset.md`

Older sprint documents remain in `docs/` for history only.

## Current late-stage chain
`core-v4 -> Sprint 1G -> ... -> 1R -> 1S + 1T -> 1U`

Sprint 1U is a real-device stabilization pass based on the user's iPhone screenshots. It does not introduce a new information architecture.

## Global shell
- centered topbar message;
- simplified desktop navigation;
- hamburger only after navigation collapses;
- mobile search restored;
- mobile menu opens from the left;
- storefront debug `Páginas` helper removed from normal review;
- duplicated footer brand universe strip removed;
- footer/newsletter type scale improved.

## Home contract
Order remains:
1. near-full-viewport hero;
2. moving trust ticker inside first viewport;
3. principal category cards;
4. featured-products carousel;
5. KUBOR / Terrafit / HYPERGOGO showcase;
6. technology/storytelling;
7. community / Journal;
8. FAQ;
9. footer.

### Sprint 1U fixes
- hero no longer depends on the broken local lifestyle image;
- category imagery is replaced by reliable cycling lifestyle sources;
- KUBOR / Terrafit / HYPERGOGO brand panels receive working visual backgrounds;
- Community / Journal imagery is repaired;
- section vertical gaps are reduced on mobile;
- category/product cards are resized to reveal more of the next item without becoming tiny;
- technology remains swipe-led on mobile and redundant arrow rows are removed;
- FAQ receives a safe sticky-header scroll offset.

## PLP contract
Order:
1. MTB hero;
2. Sport / XC / Full Suspension / Trail-light discovery;
3. sticky filter/sort toolbar;
4. desktop filters / mobile sheet;
5. product grid;
6. editorial guidance.

Sprint 1U replaces the broken PLP hero/editorial lifestyle imagery with working sources.

## PDP contract
Mallory R29 21V remains the verified product example.

Order:
1. gallery + buybox;
2. quick specs;
3. tab row;
4. description / specs / geometry / reviews / FAQ;
5. related products;
6. mobile sticky buy.

### Sprint 1U fixes
- verified low-resolution staging photo is intentionally shown smaller with a soft ambient treatment instead of being enlarged;
- repeated fake-looking thumbnails are replaced by explicit `Foto detalle pendiente` placeholders;
- story/lifestyle image is repaired;
- buybox spacing/type/trust cards are reopened for readability;
- quick specs and tabs stay in normal flow;
- old mobile sticky buy remains hidden while the real buybox is visible and only appears after it leaves the viewport.

## Data / imagery policy
- verified Mallory data remains reference data;
- staging price/rating remain explicitly historical;
- concept products do not impersonate verified packshots;
- lifestyle/category imagery may use review-safe stock references until owned KUBOR assets are supplied;
- final product imagery must use verified KUBOR product photography;
- no invented reviews, live stock, size grid, commercial pricing or variant data.

## Real / owned assets
- `assets/products/mallory-orange.jpg`
- `assets/logos/KUBOR_only_clear.svg`
- `assets/logos/KUBOR_only_dark.svg`
- `assets/logos/TERRAFIT_dark.svg`

`assets/media/kubor-hero.jpg` proved unreliable in the real-device render and is no longer trusted as the primary Home/PLP lifestyle source in Sprint 1U.

Exact standalone HYPERGOGO SVG is still pending and must not be redrawn/traced.

## Not approved yet
1. new real-iPhone screenshots after Sprint 1U;
2. verified high-resolution Mallory/product packshots;
3. verified packshots for Tornado / Calypso 4 / Alpine / Storm / Sierra 7 and remaining catalogue;
4. final hero crop and art direction using owned KUBOR photography;
5. current Shopify price / SKU / variant validation;
6. accessibility/reduced-motion regression;
7. live cart/search/customer/dealer/review integrations;
8. obsolete sprint/V2/V3 cleanup only after visual acceptance.

## Next block
1. compare Sprint 1U against the next iPhone screenshots;
2. fix remaining crop/spacing/overflow issues from the rendered result;
3. continue replacing stock/reference imagery with verified KUBOR assets;
4. freeze Home / PLP / PDP contracts only after the visual render is materially closer to the approved direction;
5. begin Liquid migration only when explicitly authorized.
