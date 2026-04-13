# Changelog UX/UI - Portafolio

## Mejora 1 - Menú hamburguesa en mobile
- Problema identificado: En pantallas pequeñas, la navegación ocupaba demasiado espacio visual.
- Impacto: Menor claridad inicial y menor control en móviles.
- Heurística aplicada: Control y libertad del usuario.
- Solución implementada:
  - Botón de menú para abrir/cerrar navegación en mobile.
  - Cierre automático al elegir una opción en móvil.
- Código relevante:
  - HTML: header con `#menu-toggle` y `#main-menu`.
  - JS: `menu-open` y control de `aria-expanded`.
  - SCSS: `body.js-enabled .header .menu`.
- Resultado: Navegación más limpia en mobile y mejor usabilidad.

## Mejora 2 - Modo oscuro con persistencia
- Problema identificado: No existía personalización visual para distintos entornos de uso.
- Impacto: Menor comodidad visual en condiciones de baja luz.
- Heurística aplicada: Flexibilidad y eficiencia de uso.
- Solución implementada:
  - Toggle de tema claro/oscuro.
  - Persistencia con `localStorage`.
- Código relevante:
  - HTML: `#theme-toggle`.
  - JS: clase `dark-mode` y `portfolio-theme` en `localStorage`.
  - SCSS: bloque `body.dark-mode`.
- Resultado: Mejor adaptación visual según preferencia del usuario.

## Mejora 3 - Validación en tiempo real del formulario de contacto
- Problema identificado: El formulario no guiaba al usuario en errores de entrada.
- Impacto: Mayor fricción y errores de envío.
- Heurística aplicada: Prevención de errores.
- Solución implementada:
  - Validación en tiempo real para nombre, email y mensaje.
  - Feedback visual por campo (`input-error` / `input-ok`).
  - Mensajes de ayuda y estado de envío.
- Código relevante:
  - HTML: mensajes por campo y `#contact-feedback`.
  - JS: validadores y `setFieldState`.
  - SCSS: `.field-error`, `.form-feedback`, `.input-error`, `.input-ok`.
- Resultado: Menos errores y mayor claridad al completar el formulario.

## Mejora 4 - Filtro dinámico de proyectos
- Problema identificado: La sección de proyectos exigía revisar todo el contenido para encontrar categorías.
- Impacto: Menor eficiencia para explorar portafolio.
- Heurística aplicada: Reconocimiento antes que memoria.
- Solución implementada:
  - Filtros por categoría (Todos, Frontend, Backend, IA).
  - Indicador visual del filtro activo.
- Código relevante:
  - HTML: `#project-filters` y `data-category` por tarjeta.
  - JS: filtros con `data-filter`.
  - SCSS: `.filter-btn.active` y `.project-card.is-hidden`.
- Resultado: Exploración de proyectos más rápida y ordenada.

## Mejora 5 - Botón de scroll hacia arriba
- Problema identificado: En páginas largas, volver al inicio requería desplazamiento manual excesivo.
- Impacto: Menor eficiencia de navegación.
- Heurística aplicada: Control y libertad del usuario.
- Solución implementada:
  - Botón flotante visible después de cierto scroll.
  - Retorno suave al inicio.
- Código relevante:
  - HTML: `#scroll-top`.
  - JS: visibilidad por `scrollY` y `window.scrollTo` suave.
  - SCSS: `.scroll-top` y `.scroll-top.visible`.
- Resultado: Navegación más fluida en secciones extensas.

## Mejora 6 - Cotizador interactivo
- Problema identificado: No existía una herramienta rápida para estimar costos de servicios.
- Impacto: Menor claridad de oferta y menor feedback inmediato.
- Heurística aplicada: Visibilidad del estado del sistema.
- Solución implementada:
  - Módulo de cotización con selección de servicio, velocidad de entrega y extras.
  - Cálculo dinámico de total.
  - Validación en tiempo real y mensajes claros.
  - Feedback visual de estados.
- Código relevante:
  - HTML: sección `#cotizador` y formulario `#quote-form`.
  - JS: `calculateQuote`, `validateQuote`, listeners de cambio.
  - SCSS: `.quote`, `.quote-error`, `.quote-feedback`.
- Resultado: Experiencia más informativa y orientada a conversión.
