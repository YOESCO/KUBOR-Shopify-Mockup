# KUBOR — Catálogo maestro de secciones y bloques

Este archivo es la fuente de verdad del sistema modular del mockup y del futuro theme Shopify.

## Principios

- Mobile-first real.
- Ninguna interacción comercial crítica depende de GSAP, Lenis o Alpine.
- Header, announcement bar, footer, cart/search/account drawers y navegación son globales.
- Todas las secciones deben poder convertirse a `sections/`, `blocks/` o `snippets/` en Shopify OS 2.0.
- Contenido comercial y técnico debe venir de settings, metafields o metaobjects; evitar hardcode.
- Cada sección debe definir comportamiento desktop, tablet y mobile.
- Cards múltiples deben poder degradar a carrusel horizontal en mobile cuando mejore la UX.
- Cada módulo debe tener estados vacío, loading, error y fallback cuando aplique.

## Shell global

1. Announcement / top bar
   - mensajes múltiples
   - colores por mensaje
   - auto-rotación opcional
   - CTA opcional
   - pausa en hover/focus
2. Header
   - transparente / sólido
   - sticky
   - mega menú desktop
   - drawer mobile
   - búsqueda
   - cuenta
   - wishlist
   - carrito
3. Brand switcher
   - KUBOR
   - Terrafit
   - HYPERGOGO
4. Social rail
   - Instagram
   - Facebook
   - TikTok
   - YouTube
   - WhatsApp
5. Footer
   - navegación
   - newsletter
   - marcas
   - soporte
   - legales
   - social
   - métodos de pago

## Secciones editoriales / storytelling

1. Hero editorial
2. Hero producto
3. Hero colección
4. Hero campaña / lanzamiento
5. Hero video
6. Hero split
7. Hero parallax ligero
8. Text scroller / marquee
9. Image + text
10. Full-bleed storytelling
11. Split storytelling
12. Timeline
13. Stats / números clave
14. Quote / manifiesto
15. Video storytelling
16. Gallery editorial
17. Hotspots / lookbook
18. Before / after
19. Technology feature
20. Gradient headline / branded typography

## Secciones comerciales

1. Featured collection
2. Product carousel
3. Product grid
4. Category cards
5. Collection cards
6. Brand cards
7. Promo mosaic
8. Offer banner
9. Countdown promo
10. Compare cards
11. Bike finder CTA
12. Recently viewed
13. Recommended products
14. Cross-sell / upsell
15. Accessories carousel
16. Gift card feature
17. Outlet / sale section

## PDP

1. Gallery desktop + swipe mobile
2. Product identity
3. Price / compare-at / promo
4. Variant color swatches
5. Size selector
6. Stock / delivery
7. Buy box
8. Sticky buy box mobile
9. Finance / payment options
10. Benefits / trust row
11. Description
12. Highlights
13. Specs with icons
14. Geometry table
15. Geometry diagram
16. Size recommendation
17. Technology cards
18. Documents / downloads
19. Warranty
20. Shipping / returns
21. Reviews
22. FAQ
23. Related products
24. Compare CTA
25. Support CTA

## Especificaciones e iconografía

Iconos mínimos requeridos:

- frame
- fork
- rear-shock
- drivetrain
- shifter
- derailleur-front
- derailleur-rear
- crankset
- bottom-bracket
- cassette
- chain
- brakes
- brake-rotor
- wheels
- tires
- hubs
- handlebar
- stem
- saddle
- seatpost
- pedals
- weight
- material
- travel
- speed
- battery
- motor
- range
- charging
- payload
- warranty
- shipping

## Categorías e iconografía

- MTB
- XC
- Trail
- Road
- Gravel
- Urban
- Fitness
- Electric
- Kids
- BMX / Stunt
- Cargo / Utility
- Accessories
- Components

## PLP / Collections

1. Collection hero
2. Intro / SEO copy collapsible
3. Filter drawer mobile
4. Filters desktop
5. Sort
6. Active filter chips
7. Product grid
8. Product carousel blocks
9. Empty state
10. Pagination / load more
11. Editorial inserts inside grid
12. Compare selection tray
13. Category shortcuts

## Home

1. Hero
2. Category navigation
3. Featured products
4. Launch / new arrivals
5. Brand universe cards
6. Storytelling
7. Technology highlight
8. Social / community
9. Blog / editorial
10. Testimonials / reviews
11. Newsletter
12. Dealer locator CTA
13. Support / warranty CTA

## Cuenta y postventa

1. Login
2. Register
3. Recover password
4. Dashboard
5. Orders
6. Order detail
7. Tracking
8. Addresses
9. Wishlist
10. Registered bikes
11. Warranty dashboard
12. Warranty claim
13. Technical support
14. Preferences
15. Empty states

## Soporte / confianza

1. Help center
2. FAQ
3. Contact
4. Dealer locator
5. Size guide
6. Geometry guide
7. Warranty
8. Shipping
9. Returns
10. Privacy
11. Terms
12. Accessibility

## Editorial

1. Blog index
2. Article
3. Category / tag landing
4. Related articles
5. Author / metadata row
6. Share controls

## Estados y edge cases

- 404
- empty cart
- empty wishlist
- no search results
- no orders
- no addresses
- no registered bikes
- no warranties
- collection empty
- product sold out
- unavailable variant
- form error
- form success
- offline / degraded JS fallback

## Presets de marca

### KUBOR
- performance / premium
- alto contraste
- motion preciso
- CTAs claros
- producto protagonista

### Terrafit
- accesible / funcional
- mensajes claros
- menor densidad visual
- foco en valor y uso cotidiano

### HYPERGOGO
- expresivo / experiencial
- gradientes y color
- headline treatments
- motion juguetón pero controlado
- storytelling más visual

## Mapeo futuro a Shopify

- `sections/`: módulos editoriales y comerciales configurables.
- `blocks/`: subcomponentes reordenables dentro de secciones.
- `snippets/`: iconos, cards, botones, badges, pricing, specs, formularios y utilidades.
- metafields: datos por producto/colección/cliente.
- metaobjects: tecnologías, specs estructuradas, geometría, garantías, FAQs, campañas, familias y contenido reutilizable.
- Customer Accounts: pedidos, direcciones, tracking y extensiones de cuenta.
- app privada KUBOR: registro de bicicletas, números de serie, garantías y soporte cuando el dato no corresponda al theme.

## Criterio de aceptación por componente

Todo componente debe aprobar:

- desktop
- tablet
- mobile
- touch targets
- teclado
- focus visible
- contraste
- reduced motion
- contenido largo
- contenido corto
- estado vacío
- sin JS crítico
- Theme Editor compatible al migrar
- fuente de datos definida
