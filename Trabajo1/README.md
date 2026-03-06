# PORTAFOLIO PROFESIONAL WEB - Douglas Mendez Cespedes

## Estructura del Proyecto

```
Trabajo1/
├── portfolio.html          ← HTML principal
├── css/
│   ├── estilos.css         ← CSS compilado (generado por SCSS)
│   └── estilos.css.map     ← Source map
├── scss/
│   └── estilos.scss        ← Archivo fuente SCSS
├── img/                    ← Carpeta para imágenes
└── README.md               ← Este archivo
```

---

## 1. HTML5 Semántico (20 pts)

**Archivo:** `portfolio.html`

| Etiqueta    | Ubicación en el archivo              | Descripción                            |
|-------------|-------------------------------------|----------------------------------------|
| `<header>`  | Línea 12                            | Header principal con logo y navegación |
| `<nav>`     | Línea 15                            | Menú de navegación con anclas          |
| `<main>`    | Línea 25                            | Contenedor principal del contenido     |
| `<section>` | Líneas 28, 42, 81, 137, 187, 226   | Hero, Sobre mí, Habilidades, Proyectos, Experiencia, Contacto |
| `<article>` | Líneas 84, 155, 199                 | Tarjetas de habilidades, proyectos y timeline |
| `<footer>`  | Línea 257                           | Footer con información y redes sociales |
| `<form>`    | Línea 240                           | Formulario de contacto con validación  |

### Secciones obligatorias implementadas:
- **Header con marca personal** → `portfolio.html` línea 12-23
- **Menú de navegación** → `portfolio.html` línea 15-22
- **Sección "Sobre mí"** → `portfolio.html` línea 42-79
- **Sección de habilidades (skills)** → `portfolio.html` línea 81-135 (6 habilidades)
- **Sección de proyectos** → `portfolio.html` línea 137-185 (4 proyectos)
- **Sección de experiencia/formación** → `portfolio.html` línea 187-224
- **Formulario de contacto** → `portfolio.html` línea 226-255
- **Footer con redes sociales** → `portfolio.html` línea 257-268

---

## 2. SCSS (20 pts)

**Archivo:** `scss/estilos.scss`

### Variables (17 variables - mínimo 5 requeridas)

| Variable          | Línea | Descripción              |
|-------------------|-------|--------------------------|
| `$primary`        | 3     | Color principal (#0d6efd)|
| `$secondary`      | 4     | Color secundario         |
| `$dark`           | 5     | Color oscuro             |
| `$light`          | 6     | Color claro              |
| `$text`           | 7     | Color de texto           |
| `$text-light`     | 8     | Texto secundario         |
| `$accent`         | 9     | Color de acento          |
| `$white`          | 10    | Blanco                   |
| `$font-main`      | 12    | Tipografía principal     |
| `$font-heading`   | 13    | Tipografía de títulos    |
| `$section-padding` | 15   | Padding de secciones     |
| `$container`      | 16    | Ancho máximo contenedor  |
| `$radius`         | 17    | Border radius            |
| `$radius-sm`      | 18    | Border radius pequeño    |
| `$shadow-card`    | 19    | Sombra de tarjetas       |
| `$shadow-hover`   | 20    | Sombra en hover          |
| `$transition`     | 21    | Transición por defecto   |

### Mixins (3 mixins - mínimo 2 requeridos)

| Mixin              | Línea | Descripción                              |
|--------------------|-------|------------------------------------------|
| `@mixin flex()`    | 24    | Mixin reutilizable para Flexbox con parámetros `$justify`, `$align`, `$dir` |
| `@mixin btn`       | 32    | Mixin para generar botones con estilos base |
| `@mixin section-padding` | 45 | Mixin para padding y centrado de secciones |

### Anidación (jerarquía SCSS)

Se usa anidación SCSS con selectores descendientes (estilo visto en clase). Ejemplos:

- `.header { .header-container { ... } .logo { span { ... } } .menu { a { ... } } }` (líneas ~115-170)
- `.skills { .skills-grid { ... } .card { h3 { ... } } }` (líneas ~260-310)
- `.project-card { .project-body { h3 { ... } p { ... } } .project-tags { span { ... } } }` (líneas ~340-395)
- `.timeline-item { .timeline-dot { ... } .timeline-content { h3 { ... } } }` (líneas ~425-475)
- `.contact { .contact-grid { ... } .contact-info { h3 { ... } } }` (líneas ~480-535)
- `.footer { .footer-left { h3 { span { ... } } } .footer-right { a { ... } } }` (líneas ~570-615)

### CSS compilado

- **Archivo fuente:** `scss/estilos.scss`
- **Archivo compilado:** `css/estilos.css` (generado con comando `sass`)

---

## 3. Flexbox (20 pts) - Mínimo 2 implementaciones

| # | Componente           | Archivo SCSS (línea aprox.) | Descripción                                      |
|---|----------------------|----------------------------|--------------------------------------------------|
| 1 | **Header container** | ~130                       | `@include flex(space-between)` - Logo y menú horizontal |
| 2 | **Menú de navegación**| ~145                      | `@include flex(flex-end, center, row)` - Links en fila |
| 3 | **Hero centrado**    | ~180                       | `@include flex(center, center, column)` - Centrado vertical y horizontal |
| 4 | **Tags de proyectos**| ~375                       | `@include flex(flex-start, center, row)` con `flex-wrap: wrap` |
| 5 | **Timeline**         | ~400                       | `@include flex(flex-start, stretch, column)` - Layout vertical |
| 6 | **Links sociales**   | ~510                       | `@include flex(flex-start, center, row)` con gap |
| 7 | **Footer**           | ~580                       | `@include flex(space-between)` - Izquierda y derecha |

---

## 4. CSS Grid (20 pts) - Mínimo 2 implementaciones

| # | Componente             | Archivo SCSS (línea aprox.) | Propiedad Grid usada                              |
|---|------------------------|-----------------------------|---------------------------------------------------|
| 1 | **Sobre mí**           | ~220                        | `grid-template-columns: 300px 1fr` - Foto + texto |
| 2 | **Info personal**      | ~250                        | `grid-template-columns: 1fr 1fr` - Datos en 2 columnas |
| 3 | **Habilidades**        | ~275                        | `grid-template-columns: 1fr 1fr 1fr` - 3 columnas |
| 4 | **Proyectos**          | ~335                        | `grid-template-columns: 1fr 1fr` - 2 columnas     |
| 5 | **Contacto**           | ~490                        | `grid-template-columns: 1fr 1fr` - Info + formulario |

---

## 5. Diseño Visual y Usabilidad (20 pts)

- **Hero** con gradiente y llamado a la acción
- **Barras de progreso** en habilidades
- **Timeline** visual para experiencia/formación
- **Efectos hover** con `transform: translateY(-5px)` y sombras
- **Scroll suave** con `scroll-behavior: smooth`
- **Header sticky** que permanece visible al hacer scroll
- **Formulario** con estados `:focus` y placeholders
- **Diseño consistente** con variables de color y tipografía

---

## Restricciones cumplidas

- [x] No se usan frameworks CSS (Bootstrap, Tailwind, etc.)
- [x] No se usan plantillas prediseñadas
- [x] Trabajo original
