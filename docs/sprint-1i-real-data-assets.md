# Sprint 1I — Real product data + asset convergence

Status: **implemented for Mallory and catalogue naming; more real packshots still required**

## Objective

Stop presenting fictional model names/specifications as if they were real KUBOR products while preserving the approved ecommerce UI contracts.

## Asset hierarchy

### Real / verified product asset
- `assets/products/mallory-orange.jpg`
- Source: KUBOR staging PDP capture already present in the user's Library.
- Used as the first real product packshot in Home, PLP and PDP.

### KUBOR-owned / brand lifestyle asset
- `assets/media/kubor-hero.jpg`
- Used for Home / MTB / storytelling only.
- It is never treated as a model-specific product packshot.

### Official logos
- KUBOR official SVGs retained.
- `assets/logos/TERRAFIT_dark.svg` added from the user's official SVG source and used on the Terrafit landing/Home brand universe.
- HYPERGOGO official SVG remains to be published into the repo; do not redraw it.

## Mallory PDP

The primary PDP mock now represents **KUBOR Mallory R29 21V** rather than the fictional X1 Pro.

Data represented in the mock is grounded in the user's consolidated TDS/audit sources:
- family: MTB FS Sport / recreational;
- wheel: 29 inch;
- aluminium full-suspension frame;
- suspension fork;
- rear spring shock;
- Shimano EF500 / TZ500;
- 3x7 / 21-speed drivetrain;
- 13–28T 7-speed freewheel;
- Kenda 29 x 2.10 tyres;
- aluminium double-wall rim specification;
- consolidated geometry: HTA 71°, effective top tube 588.45 mm, seat tube 432 mm, chainstay 505 mm, wheelbase 1165.6 mm, fork A-C 500 mm.

The staging capture supports:
- product name Mallory R29 21V KUBOR;
- orange / green / grey colour options;
- reference price shown in that capture: MXN 7,699;
- rating shown in that capture: 4.74 / 5 from 504 reviews.

Stock from the historic screenshot is **not** treated as current inventory. The mock explicitly leaves availability to Shopify inventory integration.

## Gallery treatment

Only one verified Mallory product photograph is currently available.

Instead of inventing additional bike images, the PDP gallery creates non-destructive detailed views of the same verified photo for:
- complete bike;
- frame;
- drivetrain;
- fork.

Green and grey colour swatches are shown as known colour options but disabled for imagery until real photos exist.

## Catalogue cleanup

Fictional placeholder names such as X1 Pro / Trail 7 / Trail 5 / Enduro 7 are removed from the visible core catalogue through the shared Sprint 1H layer.

Visible portfolio names now use real KUBOR model names:
- Mallory;
- Storm;
- Tornado;
- Calypso 4;
- Alpine 5;
- Sierra 7.

Where no verified product photograph / current commercial configuration exists, the card is explicitly marked **Concepto visual** and pricing is shown as **Precio por validar**.

## Product positioning guardrail

Mallory must not be described as modern Trail. The consolidated product data positions it as MTB FS Sport / recreational.

## Still required

1. real clean packshots for Tornado, Calypso 4, Alpine, Storm, Sierra 7 and remaining catalogue;
2. real colour-level imagery;
3. final price/inventory feed from Shopify;
4. verified commercial spec per current SKU/variant;
5. official HYPERGOGO logo publication from the supplied SVG;
6. replace remaining generic/Unsplash imagery with owned brand/discipline assets where appropriate;
7. screenshot QA at 390 / 768 / 1440 after the asset replacements.

## Rule going forward

A visual may be one of three things and must be treated accordingly:

- **Producto real** — identifiable model supported by owned/verified imagery and source data.
- **Concepto visual** — valid UX placeholder or future-development concept, clearly labelled.
- **Lifestyle de marca** — storytelling/discipline imagery, never used as a model packshot.

Do not blur these categories.