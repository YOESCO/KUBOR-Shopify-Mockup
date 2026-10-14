# KUBOR Mockup Build Status

Current shell build: `2026.10.13-shell2`
Current modular integration revision: `modules-v3-r2`

The shell build ID is rendered in the lower-right corner by `app-v2.js`. The modular revision lives in `modules-v3.js`; if the shell ID is correct but a new section is missing, refresh the page so the updated module asset is requested.

## Flow currently under review

- Shared native-JS shell on all mockup pages
- Home → collection → product
- Shared cart state via localStorage
- Cart quantity and subtotal calculations
- Search drawer with predictive mock results
- Responsive mobile drawer and desktop mega menu
- Transparent Home header → solid sticky state on scroll
- Global announcement bar with rotating messages and brand shortcuts
- Global footer generated from one shared module
- Social rail desktop
- GSAP hero/reveal motion as progressive enhancement
- Lenis smooth scroll as progressive enhancement

## Modular V3 integration

### Home
- Brand universe: KUBOR / Terrafit / HYPERGOGO
- Expanded discipline/category rail
- Text scroller / marquee
- Technology module
- Campaign / launch feature
- Community + Journal blocks
- Dealer / size guide / support CTAs

### PDP
- Icon-led key specifications
- Frame, fork, rear shock, drivetrain, crankset, cassette, brakes and wheels
- Horizontal mobile spec rail
- Geometry and compare CTAs
- Shipping, warranty, fit and comparison decision-support block
- Financing concept block
- Review carousel / grid
- Mobile sticky purchase bar

### PLP
- Subcategory shortcut rail
- Mobile-first horizontal navigation
- Compare, size guide and technology shortcuts
- Per-product compare selector
- Floating compare tray

### Global footer
- Single shared footer
- Newsletter capture UI
- Product navigation
- Explore/support/brand groups
- Legal links
- Social links

## Review order

1. Confirm visible shell build ID is `2026.10.13-shell2`
2. Test global menu, search, account, wishlist and cart links
3. Home: review new modules and mobile horizontal rails
4. PDP: review specs, purchase-support block, reviews and sticky mobile purchase bar
5. PLP: test compare selector/tray and browsing flow
6. Test cart persistence between pages
7. Regression pass against component catalog and remaining-page checklist

## Shopify handoff

The mockup treats the global shell and modular V3 modules as reusable UI contracts. During migration these map to Shopify section groups, sections, blocks and snippets rather than being copied page by page.

The current localStorage cart remains an adapter only. It maps to Shopify cart endpoints later without changing the UI contract. Predictive search follows the same principle: mock catalog now, Shopify Predictive Search API later.
