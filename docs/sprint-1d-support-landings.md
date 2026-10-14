# Sprint 1D — Support, Discovery, Discipline & Brand Landings

Status: **implemented, pending visual QA / asset replacement**

## Purpose

Expand the mockup without returning to isolated one-off pages. Support/discovery pages now use `core-v4 + support-flow`; discipline/brand landings use `core-v4 + landing-flow`.

## Support / discovery normalized

- `compare.html`
- `help-center.html`
- `faq.html`
- `contact.html`
- `dealers.html`
- `gift-card.html`
- `all-collections.html`
- `site-map.html`

Shared assets:

- `support-flow.css`
- `support-flow.js`

### Compare

- 3-product comparison frame;
- sticky product headers;
- horizontal mobile comparison;
- structured rows for use / suspension / drivetrain / brakes / wheels / geometry;
- difference highlighting concept;
- remove-product mock;
- links to PDP, geometry and size guide.

### Help Center / FAQ

- search/filter mock;
- support topic cards;
- categorized FAQ;
- native details/summary pattern;
- escalation to contact / technical support.

### Contact

- routing cards by intent;
- form validation states;
- order/serial reference field;
- success state;
- future support-platform routing noted.

### Dealers

- search by place text;
- service filters;
- dealer service labels;
- conceptual map area;
- future dealer metaobject contract.

### Gift Card

- amount selection;
- recipient / email / message;
- validation / prepared state;
- maps to Shopify native gift-card product later.

### All Collections

- 14 discoverable collection/discipline routes;
- client-side group filters;
- dedicated links for Fitness, Commuter, Trekking, Cargo, Kids and BMX;
- KUBOR / Terrafit / HYPERGOGO brand access.

## Discipline landings normalized

Existing pages migrated to shared landing system:

- `discipline-mtb.html`
- `discipline-road.html`
- `discipline-gravel.html`
- `discipline-urban.html`
- `discipline-electric.html`

New dedicated pages added:

- `discipline-fitness.html`
- `discipline-commuter.html`
- `discipline-trekking.html`
- `discipline-cargo.html`
- `discipline-kids.html`
- `discipline-bmx.html`

Shared asset:

- `landing-flow.css`

Each discipline now has a reusable pattern:

1. hero;
2. subcategory navigation;
3. category/use explanation;
4. decision-support / technology blocks;
5. CTA into PLP / compare / size / support;
6. mobile horizontal rails where useful.

## Brand landings normalized

- `brand-kubor.html`: performance / premium / technical.
- `brand-terrafit.html`: accessible / everyday / value-led.
- `brand-hypergogo.html`: gradients / expressive electric storytelling while retaining common commerce/support shell.

## Navigation expansion

New `nav-v5.js` provides a richer navigation contract covering:

- MTB / Road / Gravel / Electric;
- Urban / Fitness / Commuter / Trekking / Cargo;
- Kids / BMX;
- Accessories / Components / Outlet;
- KUBOR / Terrafit / HYPERGOGO;
- Compare / Size / Geometry / Technology / Dealers / Help.

Integration into every legacy/shared script context is still in progress; do not call V5 navigation fully global until that pass is complete.

## Not final yet

- stock photography remains temporary;
- visual comparison against supplied mockups is still required;
- exact copy/specs/pricing are placeholders in some conceptual products;
- landing pages need breakpoint QA;
- core-v4 mega-menu still needs V5 injection on every page context;
- support forms are mock interactions only;
- dealer map/location data is conceptual;
- gift-card flow does not create a real Shopify gift card yet.

## Next pass

1. finish V5 navigation injection across every shared context;
2. normalize decision/content pages: Size Guide, Geometry, Technology, About, Blog/Article, Community, Campaign;
3. add Bike Finder / Quiz;
4. add Manuals / Assembly / Maintenance support surfaces;
5. first full responsive + accessibility QA pass;
6. controlled asset strategy for final KUBOR imagery.
