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

### PLP review-state clarity
- removed the fake live `36 productos / Trail` claim;
- the mock now identifies the surface as a portfolio review;
- fake filter counts and preselected Trail state were removed;
- filters remain UX prototypes until Shopify Search & Discovery supplies live data.

### Account readability
- increased panel spacing and heading size;
- raised table/body metadata sizes;
- enlarged status pills and timeline controls;
- made bike registration cards less cramped;
- increased form control height and label size;
- raised KPI/side-nav readability without turning the dashboard into oversized cards.

### Support / help readability
- increased card/panel padding and body size;
- widened FAQ side rail on desktop and improved accordion spacing;
- increased form control and dealer-card readability;
- increased intermediate-width spacing for contact/support layouts.

### Discipline / brand landings
- increased section rhythm and sub-navigation hit areas;
- added more gap between category/product rails;
- improved story/technology body copy size;
- preserved horizontal rails on mobile instead of stacking every module vertically.

### Search / predictive search
- removed `X1 Pro` and fabricated premium prices from visible search results;
- Mallory R29 21V is the verified real-product result;
- Tornado / Calypso 4 / Storm are labelled as review/concept results where commercial data remains unverified;
- predictive search uses the same real-vs-concept distinction instead of an independent fictional catalogue.

### Compare
- replaced the fictional Carbon / 1×12 / four-piston comparison with Mallory / Calypso 4 / Storm;
- Mallory uses verified TDS-derived data;
- Calypso 4 and Storm use only available consolidated data, with uncertain values explicitly marked `por validar`;
- only Mallory links to the real PDP; concept columns return to the catalogue instead of pretending to have a finished PDP.

### Cart
- removed the fabricated `Casco KUBOR Pro $2,499` upsell;
- cart now points to the Accessories surface until real accessory catalogue data is connected.

## Still open in this density pass
- Browser screenshot QA at 390 / 768 / 1024 / 1440 is still required before approval.
- Final crop and line-length tuning must follow the screenshot pass.
- A few content/editorial pages still need the same final rhythm review after core commerce pages are approved.

## Asset note
The Library contains a visual reference showing the official HYPERGOGO wordmark, but no standalone raw `HyperGogo_Logo.svg` was found in indexed Library search. Do not recreate or trace the logo. Keep the exact SVG asset pending until the original vector file is available.
