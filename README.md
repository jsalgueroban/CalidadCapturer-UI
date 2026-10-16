# Calidad Capturer · nuevo frente UI/UX móvil

Propuesta exploratoria iniciada el 15 de octubre de 2026. Este repositorio contiene el trabajo de identidad móvil; no es código de la aplicación ni una librería compartida.

## Punto de partida

La petición de producto confirma cuatro entregables: icono de app, identidad móvil, patrones de diseño y componentes. También pide definir botones y acciones desde el planteamiento, y estudiar transiciones al ingresar, iniciar sesión, salir y cambiar de vista. El estilo iOS es una referencia de comportamiento y materialidad, sujeto a adaptación a la identidad propia y a la plataforma real.

El repositorio se recibió vacío. Por instrucción del responsable, esta propuesta no toma como fuente el código ni la documentación de la aplicación local. La única excepción posterior es el icono anterior, que el usuario pidió evolucionar como fuente de marca. Los recorridos concretos, actores, dispositivos y reglas operativas siguen como decisiones abiertas; ningún ejemplo de este paquete afirma un comportamiento funcional existente.

## Documentos

- [DESIGN.md](DESIGN.md): brief, territorios visuales, comparación y dirección recomendada para revisión.
- [interacciones.md](interacciones.md): botones, acciones, estados y motion.
- [componentes.md](componentes.md): catálogo inicial y frontera entre piezas.
- [referencias-aplicadas.md](referencias-aplicadas.md): consultas concretas a herramientas de la suite, adopciones y rechazos.
- [CONTRATO-VISUAL.md](CONTRATO-VISUAL.md): dirección A seleccionada, tokens candidatos, motion, assets y límites.
- [Validación del paquete v0.7](docs/validacion-paquete-v07.md): diagnóstico anterior de nueve elementos; la tipografía evolucionó en v0.8 y las demás brechas siguen abiertas.
- [prototype/](prototype/README.md): maqueta móvil navegable para revisar pantallas, estados y transiciones.
- [concept/](concept/index.html): enlace estable a la lámina vigente.
- [concept/v05.html](concept/v05.html): lámina anterior con cuatro pantallas. [Entrega v0.5](docs/entrega-pulso-v05.md) documenta fotografía, icono, copy y verificación.
- [concept/v06.html](concept/v06.html): enlace anterior que abre la lámina vigente. [Entrega v0.6](docs/entrega-pulso-v06.md) conserva la documentación de esa iteración; su lámina original permanece en el historial de Git.
- [concept/v07.html](concept/v07.html): lámina anterior con jerarquía de copy depurada. [Entrega v0.7](docs/entrega-pulso-v07.md) explica la decisión.
- [concept/v08.html](concept/v08.html): lámina vigente con tipografía Archivo Variable y escala de lectura reforzada. [Entrega v0.8](docs/entrega-pulso-v08.md) registra roles, fuente y límites.
- [assets/icono-capturer-v06.svg](assets/icono-capturer-v06.svg): candidato de icono de app; las variantes transparentes para interfaz están en `assets/logo-capturer-ink-v06.svg` y `assets/logo-capturer-light-v06.svg`.
- [assets/icono-capturer-evolucion-v05.svg](assets/icono-capturer-evolucion-v05.svg): evolución vectorial del icono anterior, aún candidata a aprobación.
- [assets/icono-pulso.svg](assets/icono-pulso.svg): exploración vectorial inicial, conservada como antecedente junto al [boceto](assets/icono-concepto.svg).

## Estado y siguiente gate

La dirección A fue seleccionada el 15/10/2026. El prototipo permanece en `redesign-in-progress`; la v0.8 aplica `improve` a su tipografía. El icono, la fuente, los tokens y las reglas funcionales todavía requieren revisión de producto antes de implementarse en la app.

**Decisión de delegación:** `SELF`. Slice: análisis y paquete inicial de dirección visual en un repositorio vacío. La fuente operativa es la petición de este chat; el costo de trasladar ese contexto a un agente independiente no aportaría revisión material en esta fase. Se evaluará de nuevo al comparar prototipos o revisar una implementación extensa.

**Suite aplicada:** Dona Asistente para reconocer el frente y evitar duplicar tareas; Banasan Requirements Discovery, Product Design, UI Engineering, Frontend y Mobile para brief, modos de trabajo, acciones, componentes y límites de plataforma. Se consultaron UI/UX Pro Max, Awesome DESIGN.md y Emil Design Engineering; sus resultados y efecto están en `referencias-aplicadas.md`. La capacidad de diagnóstico `check_capabilities.py` no se encontró en la instalación consultada; no se declara ejecutada.
