# Calidad Capturer · nuevo frente UI/UX móvil

Propuesta exploratoria iniciada el 15 de octubre de 2026. Este repositorio contiene el trabajo de identidad móvil; no es código de la aplicación ni una librería compartida.

## Punto de partida

La petición de producto confirma cuatro entregables: icono de app, identidad móvil, patrones de diseño y componentes. También pide definir botones y acciones desde el planteamiento, y estudiar transiciones al ingresar, iniciar sesión, salir y cambiar de vista. El estilo iOS es una referencia de comportamiento y materialidad, sujeto a adaptación a la identidad propia y a la plataforma real.

El repositorio se recibió vacío. Por instrucción del responsable, esta propuesta no toma como fuente el código ni la documentación de la aplicación local. Por eso los recorridos concretos, actores, dispositivos y reglas operativas siguen como decisiones abiertas; ningún ejemplo de este paquete afirma un comportamiento funcional existente.

## Documentos

- [DESIGN.md](DESIGN.md): brief, territorios visuales, comparación y dirección recomendada para revisión.
- [interacciones.md](interacciones.md): botones, acciones, estados y motion.
- [componentes.md](componentes.md): catálogo inicial y frontera entre piezas.
- [referencias-aplicadas.md](referencias-aplicadas.md): consultas concretas a herramientas de la suite, adopciones y rechazos.
- [CONTRATO-VISUAL.md](CONTRATO-VISUAL.md): dirección A seleccionada, tokens candidatos, motion, assets y límites.
- [prototype/](prototype/README.md): maqueta móvil navegable para revisar pantallas, estados y transiciones.
- [assets/icono-pulso.svg](assets/icono-pulso.svg): concepto vectorial seleccionado para el prototipo, con variantes y exportaciones en `assets/`. El [boceto inicial](assets/icono-concepto.svg) se conserva para comparar la retirada del check.

## Estado y siguiente gate

La dirección A fue seleccionada el 15/10/2026. El prototipo usa modo de trabajo `create` dentro de `redesign-in-progress`. El icono, los tokens y las reglas funcionales todavía requieren revisión de producto antes de implementarse en la app.

**Decisión de delegación:** `SELF`. Slice: análisis y paquete inicial de dirección visual en un repositorio vacío. La fuente operativa es la petición de este chat; el costo de trasladar ese contexto a un agente independiente no aportaría revisión material en esta fase. Se evaluará de nuevo al comparar prototipos o revisar una implementación extensa.

**Suite aplicada:** Dona Asistente para reconocer el frente y evitar duplicar tareas; Banasan Requirements Discovery, Product Design, UI Engineering, Frontend y Mobile para brief, modos de trabajo, acciones, componentes y límites de plataforma. Se consultaron UI/UX Pro Max, Awesome DESIGN.md y Emil Design Engineering; sus resultados y efecto están en `referencias-aplicadas.md`. La capacidad de diagnóstico `check_capabilities.py` no se encontró en la instalación consultada; no se declara ejecutada.
