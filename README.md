# KUBOR — Ride Beyond

Theme nativo para Shopify Online Store 2.0 con vista previa estática reproducible. Conserva la identidad navy/cyan, los logotipos originales y el degradado de HYPERGOGO. Sustituye los parches del mockup por secciones Liquid, una hoja de estilos y JavaScript sin dependencias de ejecución.

**Estado:** preparado para importar como borrador. Validación local: 40 pruebas aprobadas en Chromium escritorio/móvil, cero hallazgos de Theme Check y 77 rutas sin enlaces locales a archivos inexistentes. Falta validar instalación y pedido de prueba dentro de Shopify; no se ha publicado ni modificado su catálogo.

- [Auditoría y capturas](docs/auditoria.md)
- [Instalación en Shopify](docs/instalacion-shopify.md)
- [Fuentes y recursos](docs/fuentes.md)
- [Arquitectura](shopify-architecture.md) · [Sistema visual](design-system.md) · [QA](qa-checklist.md)

## Entrega

`npm run package` genera `dist/KUBOR-Ride-Beyond-1.0.0.zip`. Importa ese ZIP en **Tienda online → Temas → Importar tema → Subir archivo ZIP**. Contiene solo el theme, sin catálogo de demostración, pruebas ni dependencias de desarrollo.

`theme/` es la fuente de verdad. Los HTML de la raíz son la demo generada: no se suben a Shopify ni se editan directamente. Las rutas antiguas relevantes se mantienen como vistas o redirecciones locales.

## Desarrollo

Requiere Node.js 20.19+ y Python 3.

```sh
npm ci
npm run build
npm run dev
```

Abre http://127.0.0.1:4173. La demo usa LiquidJS y un adaptador local: simula inventario, carrito y formularios; no procesa pagos ni envía mensajes. Fotos y precios de seis productos son una referencia pública del 16 de octubre de 2026, no disponibilidad vigente.

```sh
npm run check
npx playwright install chromium
npm test
npm run package
```

Las pruebas guardan capturas en `docs/evidence/` y resultados en `test-results/`. El navegador móvil es emulación Chromium, no un iPhone físico. Las pruebas locales no sustituyen verificar Liquid, apps, checkout y datos reales en Shopify.

El workflow `Validate KUBOR theme` repite build, validación y pruebas en GitHub Actions. Cuando pasa, adjunta el ZIP como artefacto descargable de esa ejecución. No publica en Shopify.

## Funcionalidad

Portada modular; navegación de tres niveles; colecciones con filtros y ordenación nativos; producto con medios, variantes, stock, guía de tallas y bloques de apps; búsqueda con sugerencias; carrito lateral y completo; contacto y newsletter nativos; blog, artículos, FAQ, páginas de marca, orientación por uso, contraseña y gift card. Las cuentas usan las rutas de Shopify. Interfaz en español e inglés; el contenido editorial se traduce desde la tienda.

Se retiran reseñas inventadas, comparación sin especificaciones verificadas, wishlist simulada y seguimiento/garantías ficticios. Esos servicios requieren datos o integraciones reales.

El historial anterior se conserva en Git, referencia inicial `28ad4bd3687cb22a65b3a1cccbfdcd5394438804`. Los documentos de sprints son históricos y no certifican esta entrega.
