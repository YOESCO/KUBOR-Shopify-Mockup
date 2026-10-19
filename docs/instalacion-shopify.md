# Instalar KUBOR Ride Beyond

El paquete es un theme Online Store 2.0. No migra catálogo, clientes, pedidos, menús ni políticas. No requiere credenciales dentro del código.

## 1. Importar como borrador

1. Conserva una copia del theme vigente desde Shopify.
2. Ejecuta `npm run package` o usa `dist/KUBOR-Ride-Beyond-1.0.0.zip`.
3. En **Tienda online → Temas → Importar tema → Subir archivo ZIP**, selecciona el paquete. Los nombres pueden variar con el idioma.
4. Abre **Personalizar** sin publicarlo. Alternativa autenticada: `shopify theme push --unpublished --path theme --store TU-TIENDA.myshopify.com`.

## 2. Vincular contenido real

| Elemento | Configuración |
| --- | --- |
| Encabezado | Selecciona menú principal de hasta tres niveles. Usa el selector de Shopify para enlaces reales. |
| Portada | Selecciona colección destacada; valor inicial `frontpage`. Reemplaza enlaces de categorías si tus handles difieren. |
| Colecciones | Ejemplos: `mtb`, `ruta`, `gravel`, `urbanas`, `hypergogo`. Oculta categorías sin catálogo disponible. |
| Hero | Sube fotografía propia de escritorio/móvil y ajusta textos/botones. El recurso editorial es reemplazable. |
| HYPERGOGO | Crea/selecciona `/pages/hypergogo`, plantilla `page.hypergogo`. Selecciona colección y conserva Degradado activo. |
| Orientación | Crea `/pages/bike-finder`, plantilla `page.bike-finder`. Selecciona colección real en cada bloque. |
| Contacto | Crea `/pages/contacto`, plantilla `page.contact`. Revisa correo receptor y envía consulta de prueba. |
| FAQ | Crea página con `page.faq`; completa respuestas con condiciones vigentes. |
| Nosotros | Crea `/pages/nosotros`, con `page.brand` o estándar. Completa historia real. |
| Tallas | Crea `/pages/guia-de-tallas` y vincula en Producto → Guía de tallas. Usa plantillas de producto distintas si cambia por familia. |
| Producto | Revisa descripción, medios, variantes, precios, impuestos, peso, inventario y cantidad. Conecta especificaciones mediante fuentes dinámicas en bloques de información. |
| Footer | Asigna menús y revisa newsletter. Configura políticas en Ajustes → Políticas; los enlaces se generan desde Shopify. |
| Filtros | Configura Shopify Search & Discovery. El theme muestra filtros expuestos por Shopify; no los crea. |
| Cuentas | Configura cuentas en Shopify; el enlace aparece cuando están habilitadas. |
| Idiomas/mercados | Publica los necesarios y traduce catálogo/editoriales. `en.json` cubre interfaz, no toda la tienda. |

Instalar el ZIP no crea automáticamente estas páginas o colecciones. Recorre todos los enlaces después de vincularlos.

## 3. Validar dentro de Shopify

- Abre vista previa en escritorio/móvil; guarda y reordena secciones desde el editor.
- Prueba producto simple, varias opciones, agotado y sin imagen. Comprueba concordancia entre variante, URL, imagen, precio, carrito y checkout.
- Añade dos variantes, cambia cantidades, elimina una, añade nota y recarga. Comprueba inventario y reglas reales.
- Revisa búsqueda vacía/con resultados, filtros, ordenación y paginación con suficientes productos.
- Comprueba envío, impuestos, descuentos, moneda, pasarela y pedido de prueba usando las herramientas de Shopify.
- Verifica contacto, newsletter, consentimiento, cuentas y apps. El newsletter registra contactos; no envía campañas por sí mismo.
- Prueba contraseña y una gift card real si se usan. Revisa legales, favicon, textos alternativos y metadatos.
- Si hay apps de reseñas, suscripción o preventa, comprueba sus bloques y flujo completo. No se certifica compatibilidad con apps no instaladas.

## 4. Publicación y reversión

Publica después de revisar contenido comercial y completar QA. Para revertir diseño, publica el theme anterior. Los cambios de catálogo, menús y políticas son datos de tienda y no se revierten al cambiar de theme.

Esta entrega no ejecutó importación ni publicación: no se recibió acceso a un administrador Shopify conectado para ese fin.
