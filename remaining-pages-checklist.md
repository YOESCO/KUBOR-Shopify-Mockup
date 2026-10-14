# KUBOR Mockup — Remaining Pages & States

This checklist is the source of truth for unfinished visual/mockup coverage before Shopify migration.

## Decision support
- [x] Compare bikes
- [x] Size guide
- [x] Geometry guide
- [x] Dealers / store locator

## Content & brand
- [x] Blog index
- [x] Article detail
- [x] About / brand story
- [x] Technology / innovation
- [x] Community / social landing
- [x] Launch / campaign landing

## Customer access & account
- [x] Login
- [x] Register
- [x] Password recovery
- [x] Account hub
- [x] Orders list
- [x] Order detail
- [x] Tracking
- [x] Addresses
- [x] Wishlist / favorites
- [x] Warranties
- [x] Registered bikes
- [x] Technical support
- [x] Account preferences

## Help & service
- [x] Help center
- [x] FAQ
- [x] Contact
- [x] Shipping policy
- [x] Returns policy
- [x] Warranty policy
- [x] Privacy policy
- [x] Terms & conditions

## Commerce & discovery
- [x] Home
- [x] PLP / collection
- [x] PDP concept
- [x] Cart page
- [x] Search results
- [x] Predictive search concept
- [x] Outlet / offers
- [x] Accessories category
- [x] Components category
- [x] Gift card
- [x] All collections
- [x] Empty search state
- [x] Empty cart state
- [x] Empty wishlist state

## Discipline & brand landings
- [x] MTB
- [x] Road
- [x] Gravel
- [x] Urban / Fitness
- [x] Electric
- [x] KUBOR brand
- [x] Terrafit brand
- [x] HyperGogo brand

## System / edge cases
- [x] 404
- [ ] Password / coming soon storefront page
- [x] Global mega-menu baseline UX
- [x] Global footer baseline UX
- [x] Loading/error/success state gallery
- [x] Mobile sticky PDP action baseline
- [ ] Accessibility pass
- [ ] Final responsive QA
- [ ] Cross-page link integrity pass
- [ ] Performance pass
- [ ] Replace temporary photography / finalize owned assets

## Modular system
- [x] Component catalog
- [x] Technical/category SVG icon library
- [x] Shared native-JS shell baseline
- [x] Rotating announcement bar
- [x] Brand shortcuts
- [x] Shared footer
- [x] Home modular V3 blocks
- [x] PDP technical decision modules
- [x] PLP compare/decision tooling baseline
- [x] Shared mock form behavior
- [x] Exact Shopify handoff map
- [ ] Normalize all legacy pages to shared shell with no duplicate legacy behavior
- [ ] Final brand-specific presets for KUBOR / Terrafit / HYPERGOGO
- [ ] Theme Editor control matrix per section

## Next gate

The remaining work is now mainly **normalization, QA and migration-readiness**, not page-count expansion:

1. unify legacy/older page markup around the shared shell and modules;
2. verify every link/action on desktop and mobile;
3. accessibility + focus + keyboard + reduced-motion pass;
4. responsive layout QA at common widths;
5. performance/dependency cleanup;
6. finalize brand presets and asset requirements;
7. freeze approved mockup contracts before Liquid migration.

## Shopify mapping gate
Every mockup page/module must document the intended Shopify target: JSON template, section, block, snippet, native object, metafield/metaobject, customer account area, app/persistence layer, or policy page. See `docs/shopify-handoff-map.md`.
