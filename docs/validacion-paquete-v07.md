# Validación del paquete móvil Pulso v0.7

**Fecha:** 16/10/2026. **Fuente:** archivos versionados de esta propuesta y prototipo HTML/CSS/JS. **Alcance:** dirección visual exploratoria; no se valida implementación de la app ni reglas funcionales del producto. Los ejemplos de captura y de historial son ilustrativos.

| Elemento solicitado | Evidencia en el repositorio | Dictamen | Falta para entrega integrable |
| --- | --- | --- | --- |
| Isotipo | `assets/icono-capturer-v06.svg`, exportado PNG de 1024 px y `logo-capturer-{ink,light}-v06.svg`; origen comparado con `assets/referencia-icono-original.png` | **Propuesto** | Aprobación de marca y prueba de lectura a 32/48/64 px en launchers reales; definir exportaciones finales por plataforma. |
| Fuentes | Pila CSS `Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif`; tamaños repartidos en CSS | **Parcial** | Elegir familia y licencia/distribución, definir escala tipográfica y pesos como tokens, comprobar texto ampliado en dispositivos. Inter aparece como preferencia CSS, pero el repositorio no incluye ni carga sus archivos. |
| Colores | Paleta visible de v0.7: carbón `#232321`, coral `#F47E63`, superficie `#F5F4F1`, blanco `#FFFFFF`, separador `#DEDFDA`; sobrescribe los tokens iniciales de `prototype/styles.css` desde `prototype/v4.css` | **Parcial** | Consolidar una sola tabla de tokens semánticos, variantes claro/oscuro y estados; medir contraste de combinaciones reales. La tabla antigua azul/lima en `CONTRATO-VISUAL.md` es historial, no paleta vigente. |
| Diseño | `concept/v07.html`, cuatro capturas, prototipo navegable y contrato visual; escenas de bienvenida, ingreso, Inicio, Contexto y Revisión | **Propuesto** | Aprobación visual y cobertura de pantallas/estados del producto real: bandeja, cajas, calidad, transmisión, offline, vacío, carga, error y contenido extremo según alcance confirmado. |
| Transiciones | `prototype/v4.css` aplica entrada de vista de 220 ms y cierre de 350 ms; `prototype/app.js` cambia escenas; `prefers-reduced-motion` reduce duración | **Parcial** | Especificar transición por evento (abrir, login, error, cambio de vista, volver, salir), interrupciones y equivalencia nativa; validar tacto y rendimiento en hardware. El prototipo reutiliza una entrada general. |
| Estructura | `componentes.md` plantea tokens → primitives → compuestos → feature → pantalla; `prototype/index.html` representa las vistas | **Parcial** | Definir árbol vigente de navegación, jerarquía de pantallas, ownership de componentes y handoff técnico contra el stack móvil real. La estructura actual es de un prototipo web. |
| Campos | Ingreso: correo y contraseña. Captura: referencia obligatoria y observación opcional; hay etiquetas, error local y foco en el campo | **Parcial** | Confirmar con Producto el esquema real, tipos, longitudes, obligatoriedad, teclado, formato, valores vacíos, persistencia y comportamiento offline. Los campos visibles son ejemplos. |
| Acciones | `interacciones.md` y prototipo definen comenzar, ingresar, empezar captura, revisar datos, editar, finalizar ejemplo, volver y salir; jerarquía de botones documentada | **Parcial** | Completar matriz por vista con visibilidad, disponibilidad, permisos, confirmación, efecto y estado posterior reales. `Finalizar ejemplo` no guarda datos. |
| Toast | `prototype/index.html` contiene el componente y `prototype/app.js` muestra un mensaje de demostración durante 3 s | **Solo demostración** | Definir qué eventos merecen toast, mensaje, prioridad, duración, cierre, accesibilidad y recuperación. Los resultados de guardado/sincronización deben permanecer junto al registro; un toast temporal no los sustituye. |

## Decisión de la validación

La propuesta comunica una dirección visual y un recorrido corto, pero **ninguno de los nueve puntos tiene todavía un contrato final aprobado para implementación móvil**. Isotipo y diseño cuentan con artefactos revisables; fuentes, colores, transiciones, estructura, campos y acciones requieren consolidación o decisión de producto; el toast solo demuestra el patrón. El estado correcto del paquete integral es **En Progreso**. Esta auditoría no aprueba la marca, el diseño funcional ni la integración en la aplicación.

La comprobación en navegador confirmó la carga del logo transparente, los valores CSS vigentes de carbón y coral, y un toast visible con `role="status"` y `aria-live="polite"` al pulsar una acción de demostración. El servidor local estaba apagado al comenzar la auditoría; se levantó solo para esta comprobación. La prueba verifica el prototipo web, no el comportamiento de una app instalada.

## Orden para completar el paquete

1. Confirmar alcance funcional, plataforma/dispositivos y pantallas reales; con ello cerrar estructura, campos y matriz de acciones.
2. Aprobar isotipo y sistema visual; consolidar tipografía, color y componentes en tokens actuales, con contraste y pruebas de tamaño.
3. Especificar motion y feedback por evento, incluidos errores, sesión, offline y transmisión; comprobar movimiento reducido y hardware.
4. Completar estados y pantallas faltantes, validar con Producto y preparar guía de integración para el stack móvil real.

**Delegación:** `SELF`. Slice: auditoría de nueve elementos de un único repositorio y su prototipo local. La evidencia depende de archivos pequeños y de una decisión conjunta sobre madurez; trasladar el contexto a otro agente no aporta revisión independiente suficiente en este paso.
