# Sprint 1J — Breathing / density correction

## Why this pass exists
Sprint 1H intentionally tightened the mockup to move closer to the approved reference images, but some surfaces crossed the line from compact to compressed. The clearest case was the Collection / PLP shell: header, sidebar, chips, toolbar and 4-column product cards were competing for space at the same time.

## Rule
**Compact premium ≠ compressed.**

A page is not considered visually converged if hierarchy is achieved by making text too small, collapsing useful whitespace or forcing too many columns into a width that cannot support them.

## Changes shipped
### Global header
- topbar: 30 px;
- desktop header: 64 px;
- wider logo/navigation columns;
- slightly larger navigation type;
- more space between nav groups and utility icons;
- mega-menu links restored to a more readable 12 px;
- mega-menu promo block given more vertical room.

### Product cards
- title/meta/price scale increased slightly;
- body padding restored;
- action controls restored to 34 px;
- badges/swatches given more separation.

### PLP desktop
- hero increased to ~290 px;
- sidebar increased to 240–250 px where space permits;
- main/sidebar gap increased;
- filters receive more internal vertical spacing;
- toolbar height increased;
- active filter chips receive larger hit area and spacing;
- product grid gap increased;
- card copy and CTA size increased;
- buying guide/editorial modules receive more breathing room.

### Mid-width behavior
At roughly 1050 px and below, the fixed sidebar is removed from the layout. Filters move to the sticky Filters / Sort toolbar and the product grid uses the full content width. This prevents the common failure mode of a narrow sidebar plus squeezed cards.

### Mobile
- 2-column PLP retained where it remains usable;
- active chips become a horizontal rail;
- copy remains visible instead of being hidden aggressively;
- at <=360 px the grid becomes 1 column rather than forcing unreadable 2-column cards.

## Still open in this density pass
- Account flow has several 7–9 px metadata/KPI labels that need a readability pass.
- Support/help pages contain a few over-dense multi-column panels at intermediate widths.
- Brand/discipline landings need final desktop/tablet rhythm review.
- Browser screenshot QA at 390 / 768 / 1024 / 1440 is still required before approval.

## Asset note
The Library contains a visual reference showing the official HYPERGOGO wordmark, but no standalone raw `HyperGogo_Logo.svg` was found in indexed Library search. Do not recreate or trace the logo. Keep the exact SVG asset pending until the original vector file is available.
