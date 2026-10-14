# KUBOR Mockup Build Status

Current review build: `2026.10.14-sprint1T-coherence-reset`

## Source of truth
- Master checklist: `docs/ui-ux-master-checklist.md`
- Navigation index: `site-map.html`
- Shopify handoff: `docs/shopify-handoff-map.md`
- Coherence reset: `docs/sprint-1s-1t-coherence-reset.md`

Older sprint documents remain in `docs/` for history only.

## Current late-stage chain
`core-v4 -> Sprint 1G -> ... -> 1R -> 1S + 1T`

Sprint 1S deliberately rebuilds Home, shell details and PDP instead of adding more overlapping patches. Sprint 1T rebuilds the MTB PLP/discovery flow.

## Global shell
- topbar message centered;
- topbar brand links removed;
- social icons restored at the topbar edge;
- desktop header navigation simplified;
- hamburger hidden on full desktop;
- mobile search icon restored;
- mobile menu opens from the left;
- mobile menu begins with search and icon-led discipline shortcuts;
- footer text scale increased and brand universe strip added.

## Home contract
Order:
1. near-full-viewport hero;
2. moving trust ticker inside first viewport;
3. principal category cards below hero;
4. featured-products carousel only;
5. KUBOR / Terrafit / HYPERGOGO showcase;
6. technology/storytelling;
7. community / Journal;
8. FAQ;
9. footer.

Home no longer renders the full product catalogue or duplicate compact category filters.

## PLP contract
Order:
1. MTB collection hero;
2. Sport / XC / Full Suspension / Trail-light discovery cards;
3. sticky filter/sort toolbar;
4. desktop filter panel / mobile bottom sheet;
5. product grid;
6. editorial buying and geometry guidance.

The mock filters broad usage and real-vs-concept state without pretending live commercial counts exist.

## PDP contract
Mallory R29 21V remains the verified product example.

Order:
1. gallery + buybox;
2. quick specs in normal flow;
3. tab row in normal flow;
4. description / specs / geometry / reviews / FAQ;
5. related products;
6. mobile sticky buy.

The staging Mallory image is intentionally displayed smaller instead of being stretched. No alternate model photography is invented.

## Data policy
- verified Mallory data remains real/reference data;
- staging price/rating remain explicitly historical references;
- unverified products remain labelled Concept Visual;
- no invented review text or rating distribution;
- no invented size grid for Mallory;
- final live product, variant, inventory, dealer and review data remain for Shopify integrations.

## Real / owned assets
- `assets/media/kubor-hero.jpg`
- `assets/products/mallory-orange.jpg`
- `assets/logos/KUBOR_only_clear.svg`
- `assets/logos/KUBOR_only_dark.svg`
- `assets/logos/TERRAFIT_dark.svg`

Exact standalone HYPERGOGO SVG is still pending and must not be redrawn/traced.

## Not approved yet
1. real iPhone screenshots of new Home / PLP / PDP;
2. confirm PDP width equals viewport in the user's browser;
3. final hero crops and typography rhythm;
4. verified packshots for Tornado / Calypso 4 / Alpine / Storm / Sierra 7 and remaining catalogue;
5. current Shopify price / SKU / variant validation;
6. accessibility and reduced-motion regression;
7. live cart/search/customer/dealer/review integrations;
8. cleanup of obsolete sprint/V2/V3 layers only after visual acceptance.

## Next block
1. tune the new Home / PLP / PDP from actual device screenshots;
2. refine header/mega-menu spacing and footer after screenshot review;
3. replace remaining temporary lifestyle imagery where owned assets exist;
4. freeze approved mockup contracts;
5. begin Liquid migration only when explicitly authorized.
