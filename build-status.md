> Documento histórico del mockup anterior. El estado vigente se describe en [README](README.md), [auditoría](docs/auditoria.md) y [QA](qa-checklist.md).

# KUBOR Mockup Build Status

Current review build: `2026.10.15-sprint1V-visual-consolidation`

## Source of truth
- Master checklist: `docs/ui-ux-master-checklist.md`
- Navigation index: `site-map.html`
- Shopify handoff: `docs/shopify-handoff-map.md`
- Coherence reset: `docs/sprint-1s-1t-coherence-reset.md`
- Visual Section & Block Library: `component-library.html`

Older sprint documents remain in `docs/` for history only.

## Current late-stage chain
`core-v4 -> Sprint 1G -> ... -> 1S + 1T -> 1U -> 1V`

Sprint 1V is a visual consolidation pass. It does not add new page architecture; it reduces prototype artefacts, internal copy, dead space and control clutter.

## Theme Section / Block Library
`component-library.html` is now the visual planning source for Theme Editor architecture.

Current target:
- ~26 configurable Shopify sections;
- ~34 reusable block types;
- 50+ visual patterns produced through variants instead of duplicated section files;
- presets for KUBOR / Terrafit / HYPERGOGO.

The library covers global shell, hero variants, discovery/category patterns, PLP, PDP, storytelling, conversion/support, brand presets, reusable blocks and the proposed Shopify build map.

## Global shell
- slimmer mobile topbar/header proportions;
- centered announcement remains;
- mobile search/cart/menu preserved;
- mobile footer converted to accordion sections;
- storefront debug `Páginas` helper remains removed.

## Home
Order remains:
1. hero;
2. moving trust ticker;
3. principal categories;
4. featured products;
5. three brands;
6. technology/storytelling;
7. community / Journal;
8. FAQ;
9. footer.

Sprint 1V changes:
- category and product cards reduced to more balanced mobile proportions;
- concept products now render as intentional `Próximamente` roadmap cards instead of empty placeholders;
- broken category imagery falls back to a branded gradient/icon treatment instead of alt-text artefacts;
- internal prototype copy is removed from storefront headings;
- brand cards, technology cards, editorial cards and FAQ spacing are tightened;
- footer height is reduced through mobile accordions.

## PLP
- discovery cards and product grid are tightened without returning to over-compression;
- toolbar/sidebar radius and spacing are simplified;
- concept product treatment follows the same branded fallback system as Home.

## PDP
Mallory R29 21V remains the verified reference example.

Sprint 1V changes:
- gallery and buybox are more compact and balanced;
- internal prototype language is removed from customer-facing copy;
- title, rating, price, swatches, trust cards and tabs are rescaled;
- mobile sticky purchase waits until the complete first product section leaves the viewport;
- photo placeholders clearly communicate that more imagery is pending instead of duplicating the same thumbnail.

## Data / imagery policy
- verified Mallory data remains reference data;
- concept products never impersonate verified packshots;
- lifestyle/category imagery may use review-safe references until owned KUBOR assets are supplied;
- final product imagery must use verified KUBOR photography;
- no invented live stock, review text, size grid, price or variants.

## Still open
1. new real-iPhone screenshots after Sprint 1V;
2. verified high-resolution Mallory photography;
3. verified packshots for Tornado / Calypso 4 / Alpine / Storm / Sierra 7 and remaining catalogue;
4. final hero art direction using owned KUBOR photography;
5. current Shopify SKU / price / variant validation;
6. accessibility/reduced-motion regression;
7. live Shopify integrations;
8. obsolete sprint/V2/V3 cleanup after visual acceptance.
