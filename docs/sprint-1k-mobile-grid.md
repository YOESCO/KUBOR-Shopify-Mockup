# Sprint 1K — Mobile grid / icon alignment

## Trigger
A real iPhone review screenshot of the PLP showed that the mobile shell still lacked one consistent horizontal grid. The clearest issues were the announcement icon/text sitting too close to the left edge, utility icons not reading as hard-right header actions, Filter/Sort icon groups feeling offset, a blank-looking Trail chip state, and the floating `Páginas` helper covering the first product card.

## Rule
Mobile UI uses one safe-area-aware left/right gutter. Icon + text groups are centered as a unit. Review/debug helpers may never cover commerce content.

## Changes shipped

### Topbar
- mobile brand shortcuts are hidden from the announcement bar;
- the rotating message gets the full topbar width;
- message/icon group is centered;
- safe-area-aware horizontal gutters are respected;
- the desktop brand switcher remains available in navigation/menu instead of competing with announcement copy.

### Header
- mobile header explicitly uses `logo | flexible space | actions`;
- desktop nav is removed from mobile layout instead of retaining an invisible column;
- utility actions are forced to the right edge of the content grid;
- cart/menu controls use consistent 42–44 px touch targets;
- icon SVGs are centered inside their hit area.

### PLP toolbar
- Filter and Sort buttons center icon + label together;
- icon margin utility residue is neutralized;
- buttons receive consistent internal padding and 44–48 px mobile hit area.

### PLP hero chips
- inactive hero chips now have explicit dark/translucent styling;
- active chip has explicit white/cyan styling;
- this fixes the blank white Trail-style chip seen in the screenshot.

### Review helper
- `Páginas` helper moves to the mobile right side and above browser/mobile-buy areas;
- it no longer covers the first product card.

### Product image treatment
- the verified Mallory staging crop uses `object-fit: contain`, centered on white, avoiding the appearance of an over-zoomed crop in cards.

## Breakpoint intent
- <=820 px: one mobile master grid and right-aligned header actions;
- <=520 px: 18 px visual gutter target where safe area permits;
- <=390 px: tighter action spacing without losing alignment;
- <=360 px: 14 px minimum gutter and smaller header utilities.

## Still open
- screenshot comparison at 390 / 768 / 1024 / 1440;
- final PLP hero crop and line-length tuning;
- product-card image quality remains limited by source asset quality for Mallory;
- verified clean packshots are still required for the rest of the catalogue;
- HYPERGOGO exact vector remains pending until the original SVG is available.
