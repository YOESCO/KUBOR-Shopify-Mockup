# Fuentes y recursos

Investigación y descarga: 16 de octubre de 2026. Los sitios pueden cambiar.

| Fuente | Uso |
| --- | --- |
| [Repositorio original](https://github.com/YOESCO/KUBOR-Shopify-Mockup) | Identidad, logotipos, requisitos e historial. |
| [Canyon](https://www.canyon.com/en-us/) | Navegación por disciplina y ayuda de talla. |
| [Trek](https://www.trekbikes.com/us/en_US/) | Soporte alrededor del producto y confianza comercial. |
| [HYPERGOGO](https://www.hypergogo.com/) | Categorías eléctricas infantiles e información de uso. El degradado responde al requisito del usuario y al mockup inicial. |
| [KUBOR Bikes](https://kuborbikes.com/) | Fotos, títulos, descripciones y precios públicos de seis productos. URLs por producto y medio en `preview/catalog.json`. |
| [Shopify product_option_value](https://shopify.dev/docs/api/liquid/objects/product_option_value) | Selección sin exportar todas las variantes al navegador. |
| [Shopify Section Rendering](https://shopify.dev/docs/api/ajax/section-rendering) | Actualización de producto y carrito mediante HTML de Shopify. |
| [Shopify Cart API](https://shopify.dev/docs/api/ajax/reference/cart) | Operaciones y errores del carrito. |

## Recursos empaquetados

- `theme/assets/kubor-logo-{light,dark}.svg`: logotipos del repositorio original, sin redibujar.
- `theme/assets/ride-editorial.jpg`: fotografía de la referencia Unsplash del proyecto: [origen](https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?auto=format&fit=crop&w=1920&q=85). No representa un producto KUBOR específico. Reemplazable desde el editor. No se atribuye fotógrafo sin identidad verificada; [licencia](https://unsplash.com/license).
- `theme/assets/barlow-condensed-800.ttf`: Google Fonts, SIL Open Font License. [Fuente/licencia](https://github.com/google/fonts/tree/main/ofl/barlowcondensed); copia en `docs/licenses/Barlow-Condensed-OFL.txt` y `theme/assets/barlow-license.txt`.
- `preview/assets/`: medios públicos de KUBOR para revisar este proyecto. No entran en el ZIP: Shopify sirve el catálogo propio. URLs originales en `preview/catalog.json`.

No importes el snapshot como inventario comercial. Los IDs son sintéticos y el stock se alteró para probar estados; `source_available` conserva el valor observado. Imágenes y marcas se usan para el proyecto KUBOR solicitado, no se presentan como dominio público.
