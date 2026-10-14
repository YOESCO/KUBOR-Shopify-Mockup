# Sprint 1L — Home + PDP mobile/tablet convergence

## Goal
Extend the safe-area/mobile-grid corrections from Sprint 1K to Home and PDP so the core flow uses one consistent horizontal rhythm at 390 / 768 / 1024 instead of mixing desktop compression, full-bleed exceptions and edge-hugging controls.

## Home
- hero copy/specs/actions now use the same mobile gutter as header and PLP;
- icon + text spec groups use a stable 20 px icon column and readable copy;
- CTA group stacks at <=430 px instead of forcing long labels side by side;
- category and product blocks remain horizontal rails on mobile with intentional snap widths;
- trust benefits become a horizontal rail instead of four squeezed columns;
- storytelling stats move into normal flow on mobile rather than floating over copy;
- section headings and editorial rails receive larger readable rhythm.

## PDP
- mobile gallery no longer bleeds past the content gutter;
- zoom/badge controls sit 14 px inside the gallery instead of hugging viewport edges;
- gallery thumbnails are a deliberate horizontal rail;
- buybox typography, swatches, size controls and CTA spacing were reopened;
- trust benefits use a horizontal rail rather than three compressed mini-columns;
- quick-spec strip uses a readable horizontal rail on mobile/tablet;
- tabs scroll horizontally with consistent hit areas;
- story/tech/related sections use responsive one-column/rail behavior;
- sticky mobile purchase bar respects left/right/bottom safe areas;
- sticky mobile Add button now uses the same `data-add-cart` commerce contract as desktop.

## Debug cleanup
- the old visible `SPRINT 1G · 2026.10.14` storefront badge is removed when present;
- the `Páginas` helper remains because it is still intentionally used to navigate the mockup.

## Breakpoint intent
- <=430: phone-first Home/PDP composition;
- 521–820: tablet portrait with 2-column/product rails where useful;
- 821–1120: deliberate single-column PDP and non-squeezed Home/tablet layout;
- >=1360: compact approved desktop composition with restored premium breathing.

## Architecture
`sprint1j.js` is now a small shared loader. The previous Sprint 1J behavior was preserved in `sprint1j-runtime.js`, while the loader chains:
- `sprint1k.css`;
- `sprint1l.css`;
- `sprint1j-runtime.js`;
- `sprint1l.js`.

This keeps later visual layers global without rewriting every HTML page.

## Still open
- actual browser screenshots at 390 / 768 / 1024 / 1440;
- final crop tuning against approved mockups;
- verified product packshots beyond Mallory;
- exact HYPERGOGO vector;
- final performance/dependency cleanup after visual approval.
