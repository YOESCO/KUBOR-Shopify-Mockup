# KUBOR Mockup QA / Regression Checklist

Run this checklist after each meaningful UI pass before treating a page as review-ready.

## Global shell

- announcement bar renders correctly
- header state is correct at page load
- transparent header is legible over hero when enabled
- scrolled header changes state cleanly
- logo variant has sufficient contrast
- mega menu opens/closes without layout jump
- Escape closes open overlays
- opening one drawer closes conflicting UI
- body/Lenis scrolling locks while a drawer is open
- mobile menu is usable at 320–430 px widths
- footer remains consistent across templates

## Cart

- add-to-cart adds the intended product
- repeated add increments quantity
- selected size/color are reflected where available
- cart persists across page navigation
- badge count equals total quantity
- plus/minus controls update quantity
- quantity does not go below zero
- remove deletes line item
- subtotal recalculates correctly
- empty state renders correctly
- cart drawer can be opened from Home/PLP/PDP

## Home

- hero begins beneath transparent header visually
- hero desktop and mobile crops preserve subject
- copy remains readable on all breakpoints
- CTAs remain above the fold where intended
- section rhythm does not feel empty or repetitive
- product cards use the shared card language
- editorial/media blocks maintain consistent radii and spacing
- animations do not hide content if GSAP fails

## Collection / PLP

- product grid is 4-up where intended on large desktop
- responsive columns collapse correctly
- filter/sidebar does not cover footer or overflow viewport
- filter drawer works on mobile
- sort/filter controls have clear active states
- quick add does not accidentally navigate to PDP
- product-card link remains usable around nested controls
- editorial card placement does not break grid

## PDP

- main gallery is usable with mouse and touch
- thumbnail selection updates main media
- buy box remains readable/sticky only where appropriate
- size selection state is obvious
- color selection state is obvious
- add-to-cart uses current selections
- spec strip does not overflow
- tabs/accordions are keyboard usable
- geometry/specification content is not clipped
- related products use same card component as PLP/Home

## Motion / performance

- prefers-reduced-motion disables nonessential motion
- GSAP animations do not cause visible layout shift
- Lenis does not break anchors, drawers or mobile touch scroll
- no animation duplicates after navigation/reinitialization
- image hover effects are disabled or harmless on touch
- no console errors from Lucide, Alpine, GSAP, Lenis or page scripts

## Responsive breakpoints

Manually review at minimum:

- 320×568
- 375×812
- 390×844
- 430×932
- 768×1024
- 1024×768
- 1280×800
- 1440×900
- 1728×1117

## Accessibility sanity pass

- visible focus states
- buttons are real buttons where interaction is intended
- links are real links where navigation is intended
- icons have labels when meaning is not obvious
- color contrast remains acceptable in light/dark states
- interactive target sizes remain comfortable on mobile
- drawers have a clear close control

## Shopify migration regression

When converting a mockup module to Liquid, confirm:

- no hardcoded product data remains unless intentionally demo-only
- settings have sensible defaults
- section schema validates
- block limits are intentional
- dynamic sources/metafields are compatible
- section can be reordered in Theme Editor when appropriate
- section works when optional fields are blank
- no duplicated snippet logic was introduced
- cart/search/filter behavior uses Shopify-native data endpoints

## Release gate

A page is review-ready only when:

1. no known blocking console/runtime errors remain
2. desktop and mobile have been checked
3. navigation and cart work across pages
4. visual consistency matches the approved system
5. new reusable patterns are documented before being duplicated elsewhere
