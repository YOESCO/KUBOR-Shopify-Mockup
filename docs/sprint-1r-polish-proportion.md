# Sprint 1R — Polish & proportion

## Why this pass exists
Sprint 1Q restored the correct category hierarchy, but the review still showed two visual problems: carousel arrows could feel too large relative to their cards, and secondary controls could compete with content. The goal of Sprint 1R is to make controls supportive rather than dominant and to improve mobile menu/PDP hierarchy without changing the approved discovery logic.

## Home category rail
- large photographic category cards remain the primary category filters;
- all categories remain in the same horizontal rail;
- small chips remain subcategory-only;
- category rail now gets a dedicated `Explora por categoría` header;
- category navigation uses 26–28 px controls aligned to the header, not floating over cards;
- a subtle progress line shows position through the category rail;
- a soft edge fade indicates more content without showing a raw scrollbar;
- selecting a category updates the catalogue heading below.

## Carousel hierarchy
Not every horizontal rail needs visible arrows.

- category rail: dedicated small arrows next to its heading;
- product/related rail: secondary 30 px arrows;
- quick-spec rail: compact ~28 px arrows;
- PDP gallery thumbnails: direct swipe/drag on mobile, no extra arrow row;
- PDP tabs: direct horizontal swipe on mobile, no extra arrows;
- PDP trust rail: direct swipe on mobile, no extra arrows.

The design principle is: **content is primary; navigation controls are secondary.**

## Mobile menu
- visual discipline cards remain at the top;
- the menu now separates `Comprar por disciplina` from `Explorar y elegir`;
- quick actions expose Comparar, Tallas and Distribuidores;
- accordion navigation remains below those high-value shortcuts;
- spacing and borders are adjusted to make the menu read as a designed navigation surface instead of one long list.

## PDP containment
- all major PDP grid/rail children explicitly allow shrinking;
- wide tables/legacy min-width utilities are prevented from widening the page shell;
- mobile wrappers use the same safe-area gutter as the global header;
- a defensive runtime width guard rechecks the PDP after dynamic layers render and contains accidental wide descendants.

## Still open
- validate actual iPhone screenshot after this pass;
- confirm no right-side document overflow in the rendered PDP;
- tune category card width/crop if the real device shows too much or too little next-card preview;
- continue improving real product imagery and final content density;
- do not freeze the mockup contract until the visual gap versus approved references is materially smaller.
