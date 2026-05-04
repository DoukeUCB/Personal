# CHANGELOG

## Mejora 1
- Problema identificado: Proyecto inicial en plantilla Vite sin estructura administrativa ni rutas.
- Impacto: No cumplía requerimientos de SPA universitaria.
- Heurística aplicada: Consistencia y estándares.
- Solución implementada: Migración a arquitectura modular con `components`, `pages` y `data`, además de `App.tsx` y enrutamiento.
- Código relevante: `src/App.tsx`, `src/main.tsx`, `src/data/navigation.ts`.
- Resultado: Base escalable y mantenible.

## Mejora 2
- Problema identificado: Sin layout general reutilizable.
- Impacto: Experiencia fragmentada e inconsistente.
- Heurística aplicada: Reconocimiento en lugar de recuerdo.
- Solución implementada: Componentes reutilizables `Navbar`, `Sidebar`, `Footer`, `Card`.
- Código relevante: `src/components/Navbar.tsx`, `src/components/Sidebar.tsx`, `src/components/Footer.tsx`, `src/components/Card.tsx`.
- Resultado: Navegación y estructura visual unificadas.

## Mejora 3
- Problema identificado: Sin navegación entre módulos.
- Impacto: Flujo de uso limitado.
- Heurística aplicada: Control y libertad del usuario.
- Solución implementada: `react-router-dom` con rutas de Inicio, Usuarios/Clientes/Pacientes, Reportes, Configuración y 404 personalizada.
- Código relevante: `src/App.tsx`, `src/pages/*.tsx`.
- Resultado: SPA funcional con rutas claras.

## Mejora 4
- Problema identificado: Sin personalización de visualización.
- Impacto: Menor comodidad para diferentes condiciones de uso.
- Heurística aplicada: Flexibilidad y eficiencia de uso.
- Solución implementada: Modo oscuro global con estado en la app.
- Código relevante: `src/App.tsx`, `src/App.css`.
- Resultado: Mejor experiencia visual y accesibilidad percibida.

## Mejora 5
- Problema identificado: Ausencia de contenido dinámico reusable.
- Impacto: Código repetitivo y difícil de ampliar.
- Heurística aplicada: Prevención de errores.
- Solución implementada: Uso de arrays + `map()` para navegación, KPIs, usuarios, reportes y configuración.
- Código relevante: `src/data/universityData.ts`, `src/data/navigation.ts`, `src/pages/*.tsx`.
- Resultado: Código más limpio, mantenible y ampliable.

## Mejora 6
- Problema identificado: Estilos dispersos y no estandarizados.
- Impacto: Inconsistencia visual.
- Heurística aplicada: Visibilidad del estado del sistema.
- Solución implementada: Todo el diseño centralizado en `App.css` con estados visuales (activo/inactivo, dark mode, botones).
- Código relevante: `src/App.css`.
- Resultado: Interfaz coherente y responsive.
