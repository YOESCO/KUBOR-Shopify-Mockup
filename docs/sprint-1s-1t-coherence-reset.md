# Sprint 1S / 1T — Coherence reset

## Why this reset exists
Late-stage mockup layers had begun to compete with one another. Home behaved partly like a PLP, category controls were duplicated, hero/trust/category sections overlapped, mobile navigation mixed desktop and drawer patterns, PDP sections collided visually, and several controls had become too small or too numerous.

The objective of this reset is **coherence before additional features**.

## Global shell
- Topbar announcement is visually centered.
- Brand links are removed from the topbar; brands remain in navigation/brand surfaces.
- Social icons live at the topbar edge without competing with the centered message.
- Desktop navigation is simplified to Bikes / Bike Finder / Technology / Community / Support / Offers.
- Hamburger is hidden on full desktop and used only after navigation collapses.
- Mobile search icon is restored to header actions.
- Mobile menu opens from the left.
- Mobile menu begins with search and reliable icon-led discipline shortcuts instead of remote images that could break.

## Home contract
Home is no longer a full catalogue.

Order:
1. Full-viewport hero.
2. Trust ticker inside the first viewport.
3. Large category cards.
4. Featured products carousel.
5. Three-brand showcase.
6. Technology/storytelling.
7. Community / Journal.
8. FAQ.
9. Global footer.

### Home hero
- close to full viewport height;
- copy is left aligned and uses the available viewport instead of a narrow centered column;
- glass/pill details are accents rather than the base UI language;
- trust moves at the bottom of the first viewport, visible before the first scroll.

### Categories
- no overlap with hero;
- only principal categories are shown on Home;
- subdisciplines live inside category/PLP surfaces;
- horizontal rail keeps arrows in normal document flow;
- raw scrollbars stay hidden while swipe remains native.

### Products
- Home contains only Featured Products;
- complete catalogue routes to collection/all-collections;
- verified Mallory remains the real-product example;
- models without verified imagery remain clearly Concept Visual and use intentional graphic media rather than pretending temporary lifestyle photography is a product packshot.

### Brands
- KUBOR, Terrafit and HYPERGOGO receive distinct visual panels;
- Terrafit uses the supplied official logo;
- HYPERGOGO remains typographic until the exact official SVG is available.

## PLP contract
Order:
1. Collection hero.
2. Experience / subcategory discovery cards.
3. Sticky filter/sort toolbar.
4. Desktop filter panel or mobile filter sheet.
5. Product grid.
6. Editorial buying/geometry guidance.

### Filters
- broad Sport / XC / Full Suspension / Trail-light filters work in the mock;
- no fabricated commercial counts;
- real vs concept state can be reviewed separately;
- mobile filter surface is a bottom sheet;
- commercial attributes such as live price, stock, SKU, variant, full size and colour filters remain for Shopify/Search & Discovery integration.

## PDP contract
The Mallory PDP is rebuilt so layout hierarchy is explicit rather than layered.

Order:
1. Gallery + buybox.
2. Separate quick-spec row.
3. Separate tab row.
4. Description / specs / geometry / reviews / FAQ panels.
5. Related products.
6. Mobile sticky buy.

### Gallery
- the historic staging crop is deliberately displayed smaller inside a clean product surface to avoid magnifying blur;
- no invented alternate product photos;
- thumbnails reuse the verified source only as layout examples.

### Buy box
- larger readable title/copy;
- verified colour options from the staging reference;
- no invented size list;
- larger trust cards and icons;
- add-to-cart continues to use the shared mock cart contract.

### Specs / geometry
- quick specs are in normal flow and never overlap the tabs;
- only consolidated Mallory values are shown;
- geometry is not fabricated per size.

### Reviews
- historical 4.74 / 5 and 504 review reference is presented as historical staging context;
- individual reviews and rating distribution are not invented;
- the final module contract reserves filters/photos/verified-review content for the connected review source.

### FAQ
Expanded to cover use, wheel size, fit, assembly, warranty, maintenance and support without hardcoding unvalidated legal/commercial policy.

## PLP benchmark rationale
Specialized currently presents principal bike categories before the full listing and collection-specific subcategories/experiences before filters/products. The reset follows that discovery principle without copying visual design.

## Still open
- real-device screenshot QA;
- verify PDP width on the user's actual mobile browser;
- final hero crops and image art direction;
- verified packshots for the rest of KUBOR;
- official HYPERGOGO SVG;
- final live Shopify product/filter/review data;
- regression cleanup of older sprint layers after the new Home/PLP/PDP contract is visually accepted.
