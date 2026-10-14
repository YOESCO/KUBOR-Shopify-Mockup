# KUBOR Mockup Build Status

Current review build: `2026.10.13-1842`

The build ID is rendered in the lower-right corner of the prototype by `app-v2.js`. If the visible ID does not match this file, the browser is showing an older cached asset.

## Flow currently under review

- Home → collection → product
- Shared cart state via localStorage
- Cart quantity and subtotal calculations
- Search drawer with predictive mock results
- Responsive drawers and menu state
- GSAP hero/reveal motion
- Lenis smooth scroll
- Shared Alpine shell

## Review order

1. Home shell, hero, header and mobile behavior
2. Collection hierarchy, filters and product cards
3. Product gallery, buy box, size selection and add to cart
4. Cart persistence between pages
5. Search drawer and navigation continuity
6. Regression pass against `qa-checklist.md`

## Shopify handoff

The current localStorage cart is an adapter only. It maps to Shopify cart endpoints later without changing the UI contract. Predictive search follows the same principle: mock catalog now, Shopify Predictive Search API later.
