# Arquitectura Shopify

`theme/` es la fuente Online Store 2.0. El layout incorpora metadatos, contenido de Shopify, grupos de encabezado/footer y carrito. Las plantillas JSON componen secciones; snippets comparten precios, tarjetas, filtros e iconos.

`kubor.css` concentra el diseño. `kubor.js` mejora formularios nativos con diálogos, búsqueda predictiva, variantes mediante `option_values` y Section Rendering, y carrito por clave de línea. No requiere framework. Las rutas AJAX parten de `routes` de Shopify para respetar idioma.

La selección cancela solicitudes previas y bloquea compra mientras se resuelve. Las mutaciones de carrito se serializan. Si una operación tuvo éxito pero falla recuperar HTML, se navega al carrito nativo para evitar repetir adición. Formularios conservan acciones nativas. El selector sin JavaScript usa `product.variants`, sujeto al límite Liquid; catálogos con muchas variantes requieren comprobación específica.

`preview/adapter.js` y `preview/catalog.json` son exclusivamente de demo. `scripts/render-preview.mjs` usa LiquidJS, filtros compatibles y fixtures. No es un emulador completo de Shopify: formularios, paginación, recomendaciones y checkout tienen límites explícitos.

`scripts/check.mjs` ejecuta Theme Check, sintaxis JS y referencias locales. Playwright/axe prueban diez páginas y flujos en dos tamaños. El empaquetador incluye solo directorios permitidos de `theme/`, comprueba integridad y escribe SHA-256.

No se incluyen credenciales, rastreadores externos ni backend. Apps y políticas se configuran en Shopify. [Instalación](docs/instalacion-shopify.md) · [QA](qa-checklist.md).
