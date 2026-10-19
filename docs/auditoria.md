# Auditoría y refactorización KUBOR

Entrega: 19 de octubre de 2026. Inspección, investigación y primera batería de pruebas: 16 de octubre. [Repositorio](https://github.com/YOESCO/KUBOR-Shopify-Mockup), referencia inicial `28ad4bd3687cb22a65b3a1cccbfdcd5394438804`.

El problema principal era estructural: el proyecto ofrecía pantallas de comercio, pero no un theme importable ni operaciones respaldadas por Shopify. La entrega produce un theme Online Store 2.0 y conserva una demo que comparte sus plantillas. La jerarquía comercial sigue descubrir una disciplina, explorar catálogo, elegir variante y comprar con información verificable.

## Hallazgos y resolución

| Prioridad | Evidencia y efecto | Cambio |
| --- | --- | --- |
| Crítica | No existía estructura Liquid importable; operaciones comerciales simuladas. | Layouts, secciones, snippets, templates JSON y configuración. Producto, carrito y formularios con contratos nativos de Shopify. |
| Alta | 28 CSS y 30 JS acumulaban modificaciones sobre las mismas vistas. | Una hoja de estilos y un módulo de interacción. Retirada de los parches activos antiguos. |
| Alta | Cuenta, garantías, comparación y wishlist prometían servicios sin backend. | Cuentas nativas; retirada de acciones ficticias. Las rutas históricas de demo conducen a vistas soportadas. |
| Alta | Precios, reseñas, disponibilidad y promesas mezclados con contenido de ejemplo. | El theme consulta productos, variantes, políticas y pagos reales. La demo declara su referencia e inventario simulado. Sin reseñas ni promesas universales inventadas. |
| Alta | Jerarquía y navegación inconsistentes; decisión de compra poco clara. | Navegación por uso; precio, variante y stock junto a compra; detalles en acordeones; filtros y búsqueda visibles. |
| Alta | Medios ausentes en capturas y recurso principal local defectuoso. | Imágenes locales verificadas en demo y medios responsivos de Shopify en el theme. |
| Alta | Riesgo de selección/carrito desactualizados ante respuestas asíncronas. | Última variante prevalece; compra bloqueada ante fallo; mutaciones de carrito serializadas; errores 422 y recuperación al carrito nativo sin repetir adición. |
| Media | Foco, teclado y móvil necesitaban consistencia. | Escape, retorno de foco, etiquetas, avisos, foco visible, movimiento reducido y corrección del desbordamiento móvil en recomendaciones. |
| Media | HYPERGOGO debía mantener personalidad propia. | Degradado en portada y landing con jerarquía editorial y orientación de uso por modelo. |

## Recorrido y evidencia

Las capturas antiguas corresponden al mockup servido localmente. Algunos recursos externos no cargaron en ese navegador; no se atribuye automáticamente ese fallo a la tienda pública. Las nuevas corresponden al theme renderizado por LiquidJS con datos de demo, no a una instalación Shopify.

1. **Descubrir.** Acción principal, disciplinas, productos y soporte. [Antes](evidence/before-home-v2.png) · [Escritorio](evidence/after-index-desktop.png) · [Móvil](evidence/after-index-mobile.png).
2. **Explorar.** Resultados, filtros y ordenación; dos columnas en móvil. [Antes](evidence/before-collection-v2.png) · [Escritorio](evidence/after-collection-v2-desktop.png) · [Móvil](evidence/after-collection-v2-mobile.png).
3. **Elegir.** Fotografía, variantes, stock, cantidad, talla e información detallada. [Antes](evidence/before-product-v2.png) · [Escritorio](evidence/after-product-v2-desktop.png) · [Móvil](evidence/after-product-v2-mobile.png).
4. **Comprar.** Carrito lateral y completo; edición, eliminación, persistencia y errores verificados por pruebas. [Estado vacío escritorio](evidence/after-cart-desktop.png) · [Estado vacío móvil](evidence/after-cart-mobile.png). La demo termina antes del pago.
5. **HYPERGOGO.** Se conserva el degradado con una jerarquía más clara. [Antes](evidence/before-brand-hypergogo.png) · [Escritorio](evidence/after-brand-hypergogo-desktop.png) · [Móvil](evidence/after-brand-hypergogo-mobile.png).
6. **Resolver dudas.** Orientación por terreno sin recomendar talla automáticamente. [Selector por uso](evidence/after-bike-finder-mobile.png) · [Contacto](evidence/after-contact-mobile.png) · [FAQ](evidence/after-faq-mobile.png).

## Referencias del sector

[Canyon](https://www.canyon.com/en-us/) aportó patrones de navegación por disciplina y ayuda de talla; [Trek](https://www.trekbikes.com/us/en_US/), soporte alrededor de la compra; [HYPERGOGO](https://www.hypergogo.com/), presentación de movilidad eléctrica infantil e información de uso por modelo. Son referencias cualitativas, no un benchmark de conversión ni pruebas de usabilidad con sus clientes. No se copiaron su código, reseñas, condiciones ni fotografías. [Fuentes](fuentes.md).

## Comprobación y límites

- 40/40 pruebas aprobadas el 16 de octubre: 20 en escritorio y 20 en móvil emulado. Sin fallos, omitidas ni resultados inestables.
- El 19 de octubre se repitieron las seis comprobaciones de portada, orientación por uso y contacto tras ajustar textos; todas pasaron. [Resumen de ambas ejecuciones](test-summary.json).
- Diez páginas en ambas resoluciones: axe WCAG 2 A/AA y 2.1 AA sin infracciones detectadas, sin errores JavaScript ni desbordamiento. No constituye certificación de accesibilidad.
- Compra: variantes agotadas/disponibles, precio, carrito, cantidades, eliminación, nota y persistencia; búsqueda, filtros, teclado y formularios.
- Fallos simulados: 422, sección vacía, selección fallida, respuestas fuera de orden y recuperación del carrito. Fallback sin JavaScript comprobado en la demo.
- Theme Check: cero hallazgos; JavaScript válido; 77 páginas sin enlaces locales a archivos inexistentes. [Resultado](validation.json).
- Toolkit de Shopify: VALID. El validador recurrió a esquemas empaquetados al no disponer de caché local. [Registro](shopify-toolkit-validation.txt).
- ZIP comprobado por integridad, estructura y exclusión de archivos de demo.

No se han comprobado instalación real, editor de Shopify, pagos, impuestos, correo, apps, mercados, gift card emitida ni stock real. Tampoco se midieron Core Web Vitals de producción, ni se probó manualmente lector de pantalla o Safari físico. [QA pendiente](../qa-checklist.md).

## Alcance de servicios

La orientación por uso es editorial, no un recomendador personalizado. La comparación técnica necesita especificaciones normalizadas; wishlist persistente necesita app/backend. Registro de bicicleta, garantías, distribuidores y seguimiento requieren sus procesos reales. Shopify gestiona cuenta, pedidos y checkout. El theme admite bloques de apps de producto.

La primera revisión con usuarios debería observar si encuentran su disciplina, eligen talla/variante con confianza y llegan al checkout sin ayuda. No hay datos para afirmar todavía un aumento de conversión.
