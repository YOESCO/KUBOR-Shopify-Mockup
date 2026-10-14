# KUBOR Shopify Mockup

Repositorio público dedicado a visualizar el sistema UI/UX del nuevo KUBOR Shopify Theme sin tocar el repositorio productivo ni el trabajo activo de Codex.

## Objetivo
Validar en HTML/CSS/JS el shell global, Home, PLP, PDP, ecommerce, cuenta, soporte y contenido antes de traducir el diseño aprobado a Liquid/Shopify.

## Fuente de verdad de avance

**[`docs/ui-ux-master-checklist.md`](docs/ui-ux-master-checklist.md)** es el checklist maestro. Una página no se considera terminada por el simple hecho de existir: debe aprobar visual, interacción, responsive, accesibilidad y mapeo Shopify.

Para navegar las pantallas del mockup usa `site-map.html`.

`remaining-pages-checklist.md` queda únicamente como inventario de archivos existentes.

## Shell / sistema actual
- Topbar / announcement.
- Header.
- Mega menú desktop.
- Menú móvil drawer.
- Cart drawer.
- Predictive search drawer.
- Account entry.
- Filter drawer.
- Footer modular.
- Responsive baseline.
- Librería de iconos SVG.
- Mapa de handoff a Shopify.

## Logos
Los logos no se generan con IA. Se usan los SVG oficiales entregados por el usuario, conservando geometría y colores.

## GitHub Pages
Este repo es público y el sitio está en la raíz (`index.html`), por lo que puede publicarse directamente con GitHub Pages usando `main` / root.

## Regla visual
Los mockups aprobados por el usuario son la autoridad visual primaria. Trek, Specialized, Canyon, Santa Cruz y otras referencias se usan para mejorar UX, arquitectura y componentes, pero no para sustituir la dirección visual aprobada.

## Regla de implementación
Este repositorio es un mockup visual/funcional. No es código productivo de Shopify y no debe sustituir ni modificar el theme hasta que el usuario apruebe los contratos visuales y funcionales que después se migrarán a Liquid, sections, blocks, snippets, metafields/metaobjects o extensiones/apps cuando corresponda.
