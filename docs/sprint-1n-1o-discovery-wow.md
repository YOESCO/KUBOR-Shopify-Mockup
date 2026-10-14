# Sprint 1N / 1O — Discovery, motion and visual depth

## Why
The site was structurally broader but still felt like a prototype: visible horizontal scrollbars, category cards that navigated away instead of helping discovery, a PDP that could still produce horizontal overflow, flat support headers, and too few image/motion moments compared with the approved references.

## External UX reference
Specialized currently exposes category shortcuts above its product catalogue (Electric / Mountain / Road / Gravel / City / Kids), while its MTB catalogue adds experience shortcuts such as Cross-Country, Trail, Downhill and Dirt Jump before the product list. KUBOR uses the same UX principle, not a visual copy: category/subcategory discovery before filtering the product set.

## Sprint 1N shipped
- strict PDP containment to stop internal rails/tables/gallery from widening the document;
- raw horizontal scrollbars hidden while native touch scrolling remains;
- reusable arrow controls added to horizontal rails;
- optional autoplay for appropriate Home/spec rails, paused by user interaction and disabled for reduced motion;
- mobile menu now starts with image-led category shortcuts plus All Bikes / Bike Finder actions;
- Home category cards act as filters/shortcuts instead of immediately navigating away;
- Home `Ver todas` resets the catalogue on the same page;
- category filters: Todas / MTB / Ruta / Gravel / Urbanas / Eléctricas;
- contextual subcategory row, including MTB Sport / XC / Double Suspension / Trail light;
- Home catalogue expanded with portfolio model names, clearly separating verified Mallory from concept/review imagery;
- moving technology/support ribbon with controlled cyan/lime/violet/amber accents;
- PDP thumbnails, trust, quick specs and related products receive carousel arrows where overflow exists.

## Sprint 1O shipped
- scroll-driven technical storytelling block on Home;
- desktop: sticky section moves technical cards horizontally as vertical scroll progresses;
- mobile: the same component becomes a normal touch carousel with explicit arrows;
- content is brand-level decision criteria, not fabricated model specs: Geometry / Frame / Suspension / Drivetrain / Brakes / Wheels / Fit & Size;
- Help / FAQ / Contact / Dealers / Compare / Gift Card support heroes gain image-led variants when the page uses the shared support hero contract;
- image heroes keep dark overlays and readable copy instead of turning support pages into full-screen posters.

## Colour rule
KUBOR cyan/navy remain the system foundation. Lime stays promotional/technical. Violet and amber are secondary accents used only in motion, icon or micro-label moments; they must not become new dominant brand colours.

## Remaining QA
- real browser screenshots at 390 / 768 / 1024 / 1440;
- verify PDP document width equals viewport width after all runtime layers;
- tune arrow placement after real-device screenshots;
- verify autoplay stops during touch/keyboard interaction;
- replace remaining concept imagery with owned product assets;
- final accessibility and reduced-motion regression.
