# KUBOR mockup → Shopify architecture

The mockup is being authored as a functional prototype first, but each visible module maps to a future Shopify responsibility so the implementation can be converted without redesigning the page.

## Global shell

- `layout/theme.liquid`
  - document shell
  - CSS/JS includes
  - global Alpine state hooks
- `sections/announcement-bar.liquid`
- `sections/header.liquid`
- `snippets/mega-menu.liquid`
- `snippets/mobile-menu-drawer.liquid`
- `snippets/predictive-search.liquid`
- `snippets/account-drawer.liquid`
- `snippets/cart-drawer.liquid`
- `sections/footer.liquid`

## Shared UI snippets

- `snippets/product-card.liquid`
- `snippets/product-price.liquid`
- `snippets/product-badges.liquid`
- `snippets/icon.liquid`
- `snippets/button.liquid`
- `snippets/media.liquid`
- `snippets/spec-item.liquid`
- `snippets/trust-item.liquid`
- `snippets/breadcrumbs.liquid`

## Home template

`templates/index.json`

Recommended section order:

1. `hero-product`
2. `category-navigation`
3. `featured-products`
4. `split-story`
5. `technology-banner`
6. `buying-guide`
7. `feature-icons`
8. `community-blog`
9. `newsletter`

Each repeated card in the mockup should become a Shopify block or product-driven setting rather than hardcoded markup.

## Collection template

`templates/collection.json`

- `collection-hero`
- `collection-toolbar`
- `facets`
- `product-grid`
- `collection-editorial-card`
- `recently-viewed`

Facets and sorting should use Shopify's native collection/filter URLs. Product cards reuse the global `product-card` snippet.

## Product templates

Use separate JSON templates while keeping the same section/snippet system:

- `templates/product.kubor.json`
- `templates/product.terrafit.json`
- `templates/product.hypergogo.json`
- optional `templates/product.electric.json`

Shared product sections:

- `main-product`
- `product-spec-strip`
- `product-story`
- `product-specifications`
- `product-geometry`
- `product-media-story`
- `product-recommendations`
- `product-trust`

Brand-specific differences should be configuration and content, not duplicated JavaScript.

## Cart state handoff

Current prototype behavior:

- cart state persists in `localStorage`
- add-to-cart updates quantity
- drawer renders items
- plus/minus/remove update state
- subtotal is recalculated

Shopify replacement:

- `POST /cart/add.js`
- `POST /cart/change.js`
- `GET /cart.js`
- section rendering API for cart drawer refresh

The UI contract stays the same; only the data adapter changes.

## Motion responsibility

- Alpine.js: UI state, drawers, menus, tabs, selectors
- GSAP/ScrollTrigger: entrance, reveal, storytelling, restrained parallax
- Lenis: scroll only
- CSS: hover/focus/micro-transitions

Avoid using GSAP for stateful ecommerce interactions.

## Mobile rules

Mobile is not a compressed desktop layout. The Shopify sections should expose settings/blocks that support:

- mobile crop / focal point
- mobile hero height
- mobile copy alignment
- hide/show secondary CTAs
- horizontal card rails where appropriate
- mobile-specific media

## Migration principle

The prototype should never depend on page-specific duplicated UI logic. If a visual pattern appears twice, it should become a shared snippet, section, block, token, or JS module before the Shopify migration.
