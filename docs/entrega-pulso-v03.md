# Pulso v0.3 · rediseño de la propuesta móvil

## Causa y decisión

El usuario rechazó la v0.2 por parecer generada. La crítica identificó retícula y escala sin función, abundancia de rótulos en mayúsculas, numeración ornamental, frases promocionales y una maqueta de teléfono dentro de una página de marketing. La v0.3 sustituye esa composición por una herramienta de trabajo con contenido y acciones visibles. Conserva el icono como hipótesis de marca y la paleta básica; retira los patrones de consola de la propuesta activa.

## Cambios visibles

- En móvil, la app ocupa la pantalla completa. En escritorio, la ficha lateral es breve y la vista de la app concentra la atención.
- Inicio prioriza “Nueva captura” y presenta los estados ilustrativos en filas, con título y descripción.
- Captura usa etiquetas persistentes, obligatoriedad explícita, progreso de dos pasos y acción fija al pie.
- Revisión separa la lectura de datos de la confirmación. En ancho estrecho, los campos se apilan para conservar el texto completo.
- Entrada, navegación y salida conservan transiciones breves y respetan movimiento reducido.

## Evidencia

`evidence/pulso-v03-mobile-login.png`, `pulso-v03-mobile-home.png`, `pulso-v03-mobile-capture.png`, `pulso-v03-mobile-review.png`, `pulso-v03-desktop.png` y `pulso-v03-320-long.png`.

**Verificación ejecutada:** gate de sintaxis y assets aprobado; Playwright recorrió error de ingreso, ingreso válido, error de referencia, revisión, confirmación, perfil y salida en 320, 375, 390, 768 y 1280 px sin desbordamiento horizontal. Se probó contenido largo y caracteres acentuados en la ficha de revisión. La preferencia de movimiento reducido dejó la animación en `0.01ms`.

## Límites

Los campos, estados y datos siguen siendo ilustrativos. No hay autenticación, persistencia, sincronización ni validación en hardware. La marca, el icono y las reglas del producto aún necesitan aprobación.

## Ruta de trabajo

Modo Banasan dominante: `redesign` de prototipo aislado; secundario `evolve` por retiro de los patrones v0.2. Product Design resolvió la dirección, UI Engineering la jerarquía de acciones, Frontend implementó y Visual QA verificó el recorrido. `SELF` en agent-delegation-router: un solo repositorio y una decisión visual que requiere iteración continua sobre el estado local; delegarla añadiría un costo de contexto similar al trabajo directo.
