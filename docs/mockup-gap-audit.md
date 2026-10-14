# KUBOR Mockup — Gap Audit vs Approved Image References

## Reference set

- Home: `01-home-hero-products.jpg`
- PLP MTB: `03-collection-mtb-plp.jpg`
- PDP X1 Pro: `04-product-pdp-x1-pro.jpg`
- Contact sheet: `20-reference-contact-sheet.jpg`

## Main finding

The prototype drifted because new V3 modules were appended after legacy page compositions. This increased coverage but weakened visual fidelity. The approved images use much tighter page architecture with fewer, stronger modules.

## Home target

Reference order:
1. cyan topbar
2. compact dark header
3. single strong hero
4. overlapping 5-card category rail
5. one-row featured products
6. dark trust strip
7. one strong storytelling banner
8. newsletter
9. footer

Corrections applied:
- removed V3 appended Home extras on reference-locked page
- rebuilt hero hierarchy and proportions
- restored overlapping category rail
- reduced content density
- restored single featured product row
- restored trust + storytelling + newsletter sequence
- kept mobile category/product rails horizontal

Remaining visual gap:
- product packshots are still not true isolated KUBOR product photography
- hero image composition is approximate because current repo lacks final product assets

## PLP target

Reference order:
1. short MTB hero with subdiscipline pills
2. left filter sidebar
3. 4-column product grid
4. 2 visible product rows
5. buying-guide insert
6. trust strip
7. newsletter
8. footer

Corrections applied:
- removed extra V3 PLP shortcut layer
- sidebar reduced to target density
- 4-column desktop grid restored
- cards tightened vertically
- buying guide restored directly below product rows
- mobile remains 2-column with horizontal controls where needed

Remaining visual gap:
- final filter drawer interaction needs QA
- isolated product photography remains approximate

## PDP target

Reference order:
1. dark first fold
2. gallery left / buybox right
3. thumbnail strip
4. compact white spec strip
5. horizontal tabs
6. copy + large geometry/story image
7. related products
8. trust strip
9. footer

Corrections applied:
- removed duplicate V3 spec layer
- first fold rebuilt to target 2-column structure
- gallery reduced to target height
- buybox tightened
- spec strip placed immediately after first fold
- tabs increased in usability while keeping reference rhythm
- geometry overlay restored
- related products restored as one row / mobile rail

Remaining visual gap:
- product image is not an isolated exact KUBOR packshot
- color selector should later swap actual product media
- geometry diagram will need final model-specific SVG/data

## Navigation / discoverability

Problem: many pages existed but were not discoverable through the current navigation.

Correction:
- added `site-map.html` with all prototype pages grouped by function
- reference-locked Home, PLP and PDP now expose a persistent `Páginas` review shortcut

## Rule going forward

Do not append new visual modules to Home, PLP or PDP without replacing an approved slot. New components may live in `component-library.html`, but core page composition remains locked to the approved image references until explicitly changed.
