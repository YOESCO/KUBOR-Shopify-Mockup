# KUBOR Mockup → Shopify Theme Handoff Map

Este documento define dónde debe vivir cada pieza cuando el mockup aprobado migre a `YOESCO/KUBOR-Shopify-Theme`.

## Regla principal

El mockup HTML es la fuente visual/UX. Shopify será la fuente de datos y persistencia. No copiar HTML página por página: convertir cada contrato visual en sección, bloque, snippet, template o extensión.

## Shell global

| Mockup | Shopify destino | Datos/configuración |
|---|---|---|
| Announcement bar | section group header + section `announcement-bar` | blocks de anuncio: texto, link, color, activo, orden |
| Header | section group header + section `header` | settings de logo, sticky, transparent overlay, menu |
| Mega menu | snippet + blocks dentro de header | navigation + image/promo blocks |
| Mobile drawer | snippet | navigation + customer/cart links |
| Search drawer | snippet + Predictive Search API | search terms / products / collections |
| Brand switcher | block/snippet | metaobject `brand` o settings |
| Social rail | snippet/block | theme settings social URLs |
| Footer | section group footer + section `footer` | menus, social, newsletter, legal links |

## Home

| Módulo | Shopify destino | Fuente |
|---|---|---|
| Hero | `sections/hero-product.liquid` | section settings + product reference |
| Category rail | `sections/category-rail.liquid` | blocks collection/page |
| Featured products | `sections/featured-products.liquid` | collection/product_list |
| Brand universe | `sections/brand-universe.liquid` | metaobjects `brand` |
| Marquee | `sections/text-scroller.liquid` | repeatable text blocks |
| Technology | `sections/technology-grid.liquid` | metaobjects `technology` |
| Launch/campaign | `sections/campaign-feature.liquid` | page/metaobject/product |
| Community/blog | `sections/editorial-grid.liquid` | articles/blog + manual cards |
| Dealer/size/support CTAs | `sections/service-links.liquid` | link blocks |

## PLP / collection

- Template: `templates/collection.json` and discipline-specific alternate templates only when materially different.
- Hero: collection image, title, description, metafields.
- Discipline shortcuts: section blocks or collection metafield list.
- Filters: Shopify Search & Discovery / storefront filtering.
- Sort: native collection sort.
- Product card: `snippets/card-product.liquid`.
- Compare selector: JS UI + selected product handles/IDs; comparison data from metafields.
- Editorial inserts: configurable section between product-grid sections or merchandising blocks if supported.
- Empty state: reusable snippet.

## PDP

- Template: `templates/product.json` with brand/product-type presets.
- Main gallery/buybox: `sections/main-product.liquid`.
- Price: native product/variant price snippet.
- Color/size: product options/variants, not duplicated metafields unless display metadata is needed.
- Sticky mobile ATC: snippet reading current variant/form state.
- Specs: metaobject or structured product metafields.
- Spec icon: icon handle stored with spec definition; rendered through icon snippet.
- Geometry: metaobject `geometry` linked per model/size.
- Size guide: metaobject/page + product linkage.
- Technology cards: list of linked technology metaobjects.
- Downloads/manuals: file metafields/metaobjects.
- Warranty/shipping/returns: reusable policy/metaobject blocks.
- Reviews: review provider/app block, not hardcoded.
- Related/recommendations: Shopify Product Recommendations API.

## Icon system

Future theme target:
- `snippets/icon-bike-spec.liquid`
- `snippets/icon-category.liquid`

Input: stable icon handle (`frame`, `fork`, `drivetrain`, etc.).
Output: inline SVG. Do not make external SVG sprite loading a production dependency.

## Customer account

Modern Shopify customer accounts and account UI must not be implemented as ordinary Liquid theme pages when persistence/actions require account extensibility.

| Experience | Target |
|---|---|
| Login/authentication | Shopify customer accounts |
| Orders / order detail | native customer account data |
| Addresses | native customer account data |
| Tracking | order fulfillment/tracking data, carrier/app integration where needed |
| Preferences | customer account extension + consent/customer data |
| Wishlist | app/metafield/customer persistence layer |
| Registered bicycles | custom app/private KUBOR service + customer identity |
| Serial numbers | custom app data store/metaobject only if constraints allow |
| Warranty registrations/claims | custom app + customer account extension |
| Technical support cases | helpdesk/app + customer account extension or embedded portal |

## Warranty data model proposal

`RegisteredBike`
- customer_id
- product_id / product_handle
- variant_id
- model_name
- serial_number
- purchase_date
- purchase_channel
- proof_of_purchase
- warranty_status
- warranty_start
- warranty_end/ruleset

`WarrantyClaim`
- registered_bike_id
- claim_number
- issue_type
- description
- attachments
- status
- created_at
- updated_at
- service_location
- notes

Persistence should live outside the theme.

## Dealers

Recommended metaobject `dealer`:
- name
- address
- city/state/postal_code
- latitude/longitude
- phone
- WhatsApp
- hours
- services
- brands
- maps URL
- active

A locator requiring real geospatial search may use an app/service layer; theme renders UI.

## Blog/editorial

- Blog index: native `blog` template.
- Article: native `article` template.
- Related content: article tags/metafields + section logic.
- Campaign/editorial landing: JSON page template composed from reusable sections.

## Policies / system pages

- Shipping, returns, privacy, terms: Shopify policy pages when practical; custom page sections only for richer presentation.
- FAQ/help center: page template + FAQ metaobjects.
- 404: `templates/404.json` + section.
- Gift card product purchase: native gift card product PDP, themed like KUBOR.
- Gift card recipient extras: use Shopify-supported gift card recipient functionality where available; otherwise carefully scoped app/extension.
- All collections: `templates/list-collections.json`.
- Search: native search template + predictive search.

## JavaScript boundaries

Critical, dependency-free native JS:
- header/nav drawer
- search drawer shell
- variant UI bridges
- cart UI/actions
- quantity
- compare selection
- accordion/tabs accessibility

Progressive enhancement only:
- GSAP storytelling
- Lenis smooth scroll
- parallax
- marquee animation
- elaborate reveals

## Theme editor contract

Every section should expose only meaningful controls. Prefer presets over dozens of arbitrary settings.

Common controls:
- color scheme
- container width
- spacing top/bottom
- desktop/mobile media
- alignment
- heading/copy/CTA
- image ratio where relevant
- enable/disable motion
- mobile layout (`stack`, `carousel`, `grid`) where relevant

Avoid exposing low-level CSS values unless they solve a real merchant need.

## Migration order

1. Design tokens + CSS foundations
2. icon snippets
3. button/card snippets
4. global header/footer section groups
5. product card + collection tooling
6. main product
7. Home sections
8. brand/discipline page sections
9. editorial/support pages
10. customer-account extensions/app-backed experiences
11. QA/accessibility/performance
12. data migration/metaobject wiring

## Acceptance gate before porting a mockup module

A module is ready for Liquid only when:
- desktop/mobile UX approved
- interaction model defined
- empty/error/loading state defined if applicable
- data source identified
- Theme Editor controls identified
- no required hardcoded content remains
- accessibility behavior defined
- dependency strategy defined
