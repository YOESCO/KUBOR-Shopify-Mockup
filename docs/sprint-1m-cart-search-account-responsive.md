# Sprint 1M — Cart / Search / Account responsive pass

## Goal
Bring Cart, Search and Account onto the same responsive rules established by Sprints 1K/1L: readable type, safe horizontal rhythm, useful touch targets and breakpoint-specific composition instead of desktop layouts squeezed into smaller widths.

## Cart
- single-column layout below tablet widths;
- product rows preserve image, title, quantity and price hierarchy without overlap;
- quantity controls use larger touch targets;
- coupon becomes one-column on narrow phones;
- payment chips become 2×2 on small screens;
- summary and accessory CTA retain readable spacing.

## Search
- search box/icon/input spacing was reopened;
- result grid uses 2 columns on tablet and 1 column on narrow phones;
- search side navigation moves above results on smaller widths;
- chips/tabs remain horizontally scrollable instead of wrapping into compressed rows;
- empty/content states use larger body copy.

## Account
- account cards use two columns on tablet and one column on phones;
- sub-navigation stays horizontal and touch-friendly;
- recent order rows retain usable image/text proportions;
- quick actions and account cards receive larger body copy and hit areas;
- status metrics become a horizontal rail on narrow screens rather than squeezed three-column cells.

## Breakpoint intent
- <=960: single-column page layout where sidebars would compress content;
- <=820: tablet-first readable controls/cards;
- <=520: phone-specific one-column search/account and simplified cart rows;
- <=390: final narrow-phone tightening without reducing body copy below readable levels.

## Shared loading
`sprint1m.css` is loaded globally through `sprint1j.js` after Sprint 1K/1L.

## Still open
- rendered screenshot QA at 390 / 768 / 1024 / 1440;
- final content/crop tuning after visual review;
- live Shopify data wiring;
- final removal of transitional/legacy dependencies after regression.
