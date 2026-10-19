> Documento histórico del mockup anterior. El estado vigente se describe en [README](README.md), [auditoría](docs/auditoria.md) y [QA](qa-checklist.md).

# KUBOR Theme Editor settings plan

This document defines which parts of the HTML mockup must become editable Shopify Theme Editor settings instead of hardcoded values.

## Global design tokens

Expose through theme settings where practical:

- primary navy
- secondary navy
- KUBOR cyan
- accent/lime
- background/surface colors
- body text color
- border color
- heading font family
- body font family
- base type scale
- max content width
- section spacing scale
- button radius
- card radius
- border/shadow intensity
- motion level: off / subtle / standard

Brand templates may override the global tokens, but must inherit the same component system.

## Header

Settings:

- transparent over hero: on/off
- sticky: on/off
- initial theme: light / dark / transparent
- scrolled theme: light / dark
- logo: light / dark asset
- logo width desktop/mobile
- header height desktop/mobile
- navigation alignment: left / center
- search mode: icon / compact field / expanded field
- show/hide account
- show/hide wishlist
- show/hide cart
- show/hide country/currency
- show/hide brand selector
- border/shadow intensity

Navigation mode:

- standard dropdown
- mega menu
- drawer
- optional sidebar-style navigation for selected templates

Mega menu blocks:

- menu column
- featured image card
- promo card
- category card
- CTA

Each menu item can choose its linked Shopify menu and optional visual content.

## Announcement bar

Settings:

- enabled
- background/text colors
- 1–5 rotating messages
- icon per message
- optional link/CTA
- autoplay speed
- desktop/mobile visibility

## Hero section

Settings:

- desktop media
- mobile media
- image/video mode
- focal point
- desktop height: compact / medium / large / viewport
- mobile height
- overlay strength
- content position
- copy alignment
- eyebrow
- heading
- body copy
- primary CTA label/link/style
- secondary CTA label/link/style
- show/hide specifications row
- show/hide scroll indicator
- animation preset: none / fade / editorial / product reveal

Blocks:

- hero stat/spec
- badge
- CTA

## Product cards

Settings controlled by parent section/template:

- image ratio: square / portrait / landscape / natural
- show second image on hover
- show vendor
- show subtitle/metafield
- show rating
- show compare-at price
- show color swatches
- show sizes
- show quick add
- show wishlist
- card radius
- card border/shadow
- desktop columns
- mobile columns or horizontal rail

## Collection / PLP

Settings:

- collection hero on/off
- hero image source: collection image / custom image
- hero height
- show description
- show subcategory chips
- sticky filters on/off
- filter layout: sidebar / drawer / top bar
- desktop product columns
- mobile product columns
- products per page
- show editorial cards inside grid
- editorial card frequency/position
- sticky toolbar
- sort control on/off
- quick add on/off

Native Shopify facets remain the data source.

## PDP main product

Settings:

- gallery layout: grid / thumbnails left / thumbnails bottom
- desktop media ratio
- mobile media ratio
- sticky buy box
- sticky add-to-cart mobile
- show breadcrumbs
- show ratings
- show financing text
- show inventory state
- show pickup/delivery state
- show wishlist
- show buy-now button
- show trust icons
- show accordions
- show spec strip

Blocks inside main product:

- title
- subtitle/metafield
- rating
- price
- installment copy
- variant picker
- size guide
- inventory status
- quantity
- add-to-cart
- buy-now
- trust item
- custom text

## PDP storytelling sections

Reusable sections:

- product-spec-strip
- product-story
- split-media-story
- feature-grid
- product-specifications
- product-geometry
- comparison-table
- product-recommendations
- recently-viewed
- product-trust
- FAQ

Every media/story section should expose:

- desktop/mobile media
- media position
- ratio
- background/text colors
- eyebrow
- heading
- copy
- CTA
- animation preset
- spacing top/bottom

## Footer

Settings:

- logo variant
- short brand statement
- newsletter on/off
- social links
- footer color theme
- country/currency selector
- payment icons
- legal menu

Blocks:

- menu column
- text block
- social block
- trust/payment block

## Brand configuration

KUBOR, Terrafit and HYPERGOGO should use the same shared snippets and JS modules.

Differences should come from:

- product JSON template
- section order
- section settings
- brand tokens
- metafields/metaobjects
- content/media

Do not fork the cart, menu, search, product-card or motion code per brand.

## Rule

If a visual property is expected to change from the Shopify Theme Editor, it must not be permanently encoded in page-specific HTML/CSS. It should be represented as a section setting, block setting, theme setting, product/collection data, metafield or metaobject.