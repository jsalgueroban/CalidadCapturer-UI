# Referencias aplicadas de la suite Banasan

Consulta realizada el 15 de octubre de 2026. Estas fuentes son apoyo de diseño, no autoridad de producto ni identidad aprobada.

| Fuente / operación | Resultado observado | Decisión que cambió |
| --- | --- | --- |
| UI/UX Pro Max: `--design-system` para “mobile field quality inspection operational capture precise modern” | Recomendó un patrón de newsletter, Glassmorphism y una paleta verde con rojo de CTA. | Se rechazaron patrón y paleta: no corresponden a una herramienta de captura; Glassmorphism permanece sólo como territorio C, sujeto a contraste y rendimiento. No se persistió el sistema generado. |
| UI/UX Pro Max: `--domain ux` para controles táctiles y formularios de inspección | Cinco resultados, entre ellos objetivos de 44 × 44 y separación mínima de 8. | Se añadió separación entre controles al catálogo y se conservó el objetivo táctil mínimo. Las sugerencias web (`inputmode`, `overscroll-behavior`) no se trasladan literalmente a una app nativa. |
| UI/UX Pro Max: `--domain icons` para captura/cámara/verificación | Devolvió cámara, check y check-circle como iconos outline. | Se reservan como candidatos para acciones y estados; el icono de marca mantiene dibujo propio. No se añadió una librería React web a una propuesta móvil. |
| Awesome DESIGN.md: `apple/DESIGN.md` | Referencia de jerarquía, contenido protagonista y poco chrome; el archivo describe sobre todo marketing de Apple. | Se adopta la contención de controles. Se descartan fotografía de producto, colores, tipografía y assets de Apple como identidad de Capturer. |
| Awesome DESIGN.md: `linear.app/DESIGN.md` | Acento usado con moderación y superficies de herramienta densas. | Se refuerza la reserva del acento para acción, selección y estado; no se copia el oscuro por defecto ni la marca Linear. |
| Emil Design Engineering: marco de decisión de animación | Pide evaluar frecuencia y propósito antes del timing; recomienda movimiento breve en UI repetida. | La composición del icono pasa a primera presentación; navegación frecuente se limita a 150–250 ms y pulsación a 100–160 ms. |

## Crítica del boceto actual

El marco, punto y check comunican captura y comprobación, pero el check puede leerse como un resultado ya aprobado antes de iniciar una inspección. En la siguiente iteración se comparará una variante sin check y otra con el check reservado para estados de éxito. También falta prueba real a 32/48/64 px, monocromo y fondos de launcher. El SVG es una hipótesis, no un asset listo para tienda.

## Capacidades consideradas y descartadas en esta fase

- **Impeccable:** útil para criticar una superficie ejecutable; el repositorio aún no contiene pantallas o componentes implementados, de modo que no se le atribuye una auditoría visual.
- **Bencho:** catálogo React web; no hay control concreto confirmado ni runtime web para adaptar. No se inspeccionó un bloque.
- **Liquid Glass:** sólo hipótesis del territorio C. No se instaló motor ni se promete material nativo fuera de iOS.

El diagnóstico de capacidades `check_capabilities.py` solicitado por Banasan Product Design no estuvo disponible en la ruta de suite consultada. La disponibilidad de estas tres referencias se comprobó mediante lectura de sus archivos y ejecución de la consulta UI/UX Pro Max; esto no equivale a ejecutar el diagnóstico ausente.
