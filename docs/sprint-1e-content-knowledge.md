# Sprint 1E — Decision, Editorial & Knowledge Surfaces

Status: **implemented, pending full responsive / accessibility / visual QA**

## Goal

Close the remaining high-value content and post-sale gaps so the mockup behaves like a complete cycling brand ecosystem rather than only an ecommerce catalog.

## Global navigation change

`core-v4.js` is now the global source of truth for V5 navigation.

Desktop mega navigation now exposes:

- MTB / Road / Gravel / Electric;
- Urban / Fitness / Commuter / Trekking / Cargo;
- Kids / BMX;
- Accessories / Components / Outlet;
- KUBOR / Terrafit / HYPERGOGO;
- Bike Finder / Compare / Size / Geometry / Technology / Dealers / Help / All Collections.

Mobile navigation uses grouped accordions for Performance, Urban & Utility, Youth & Gear and Brands, plus direct links to decision/support tools.

The topbar includes brand shortcuts on desktop.

`nav-v5.js` remains temporarily for compatibility on pages that already referenced it, but `core-v4.js` now contains the global contract. Remove duplicate transitional loading during dependency cleanup.

## Decision support rebuilt

### Size Guide — `size-guide.html`

- interactive mock height + discipline calculator;
- MTB / Road / Gravel / Urban / Kids contexts;
- conceptual size table;
- Reach / Stack / Standover / wheel-size education;
- Bike Finder / Geometry / Compare / Contact links;
- explicit note that final ranges must be sourced from validated product geometries.

### Geometry Guide — `geometry-guide.html`

- HTA / STA / Reach / Stack / Wheelbase;
- Chainstay / BB Drop or Height / Standover / Seat Tube;
- discipline comparison table;
- visual explainer;
- mapping to structured product geometry data.

### Bike Finder — `bike-finder.html`

Interactive three-step mock quiz:

1. terrain;
2. frequency/use;
3. riding priority.

Returns a recommended starting category and links to the corresponding discipline / compare flow.

Future Shopify implementation may be a theme section or lightweight app/rules layer depending on desired administration complexity.

## Technology library rebuilt — `technology.html`

Topics:

- geometry;
- suspension;
- drivetrain;
- braking;
- wheels / tires;
- frame materials;
- electric systems;
- standards / confidence.

Technical SVG icon examples use `assets/icons/kubor-icons.svg`, including frame, fork, drivetrain, crankset, cassette, brakes, wheels and weight.

## Editorial / brand content rebuilt

### About — `about.html`

- brand story;
- useful design / clear product / discipline / community pillars;
- portfolio → technology → purchase → post-sale ecosystem.

### Journal — `blog.html`

- featured editorial composition;
- Product / Technical / Routes / Community / Electric filters;
- reusable editorial cards;
- links into guides / community / technology.

### Article — `article.html`

- article template;
- sticky desktop TOC;
- long-form content pattern;
- callouts;
- embedded technical cards;
- related content / discipline / technology actions.

### Community — `community.html`

- image/social rail;
- routes / events / riders / local dealer concepts;
- Instagram / TikTok / YouTube / local content surfaces;
- explicit external-feed fallback principle.

### Campaign — `campaign.html`

- cinematic launch hero;
- Story / Technology / Media / Conversion framework;
- hero / hotspots / countdown / product rail / dealer / community component concepts.

## Knowledge / post-sale surfaces added

### Manuals — `manuals.html`

- searchable manual/download hub;
- manual / geometry / assembly / maintenance / electric / warranty cards;
- future link to registered bicycle model/serial context.

### Assembly Guide — `assembly-guide.html`

- receiving inspection;
- handlebar/stem;
- front wheel;
- pedals;
- saddle;
- tire pressure;
- brakes/shifting;
- final safety check;
- explicit warning that model/component torque values require validated documentation.

### Maintenance Guide — `maintenance-guide.html`

- before-ride checks;
- cleaning/lubrication;
- periodic wear inspection;
- tires / brakes / drivetrain / steering / suspension / electric;
- when to escalate to a qualified dealer/service center.

## System states added

### Storefront Password / Coming Soon — `password.html`

- branded launch state;
- newsletter capture mock;
- password-entry concept.

### Reset Password — `reset-password.html`

- new-password / confirmation state;
- mismatch validation;
- future mapping to Customer Accounts.

## Shared assets introduced

- `content-flow.css`
- `content-flow.js`

## Still not final

Do **not** consider the following approved yet:

1. supplied-mockup visual comparison at each target breakpoint;
2. final owned product / lifestyle photography;
3. exact type scale / spacing / crops;
4. real geometry/spec data;
5. accessibility focus-order / screen-reader / keyboard audit across every page;
6. form disabled/loading/error/upload states;
7. cart/search/account real Shopify integrations;
8. real dealer/map integration;
9. external social feed integration;
10. performance/dependency cleanup;
11. duplicate `nav-v5.js` references cleanup;
12. legacy V2/V3 removal only after no page depends on them.

## Next pass

Sprint 1F should be a cross-site normalization/QA pass:

1. static link/integration audit;
2. responsive CSS pass for 320 / 375 / 390 / 430 / 768 / 1024 / 1280 / 1440+;
3. touch-target / keyboard / focus / ARIA pass;
4. remove redundant navigation scripts;
5. normalize 404 / states / policies / outlet / accessories / components onto shared core if still legacy;
6. identify remaining missing surfaces from the master checklist;
7. asset replacement plan against supplied mockups.
