# Pulso v0.5 · evolución puntual

## Decisión y alcance

El usuario identificó como artificial la fotografía que aparece al abrir la app. Se reemplazó por una toma documental de trabajo con banano. La tarjeta coral de Inicio volvió a su composición v0.4 —título, caja de banano, descripción y botón— tras la corrección expresa del usuario. La mejora de copy se aplicó a saludo, ingreso, captura, revisión, cierre y perfil sin alterar esa tarjeta.

## Marca y fotografía

- `assets/referencia-icono-original.png`: copia del icono anterior del proyecto, usada sólo como fuente de marca.
- `assets/icono-capturer-evolucion-v05.svg`: icono vectorial propio que conserva el plano verde, lista naranja y lente del original; exportación de revisión en PNG de 1024 px.
- `assets/welcome-documentary-v05.jpg`: fotografía real de trabajadoras limpiando bananos para empaque, tomada por **David Brossard** en Ecuador, 2015. Fuente: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Banana_Processing.jpg). Licencia [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0/). Se muestra con un recorte responsivo CSS; no se editaron sus píxeles. La atribución se ve en la pantalla de bienvenida. El uso en la propuesta no implica que la fotografía represente a personal o instalaciones de Banasan.

## Lenguaje y recorrido

Inicio saluda a John, persona ilustrativa de la demo, y pregunta qué registrará. La tarjeta mantiene “Nueva captura” y “Empezar captura”. La guía inferior recuerda el único dato obligatorio del ejemplo, la referencia. Captura pregunta qué se registra; Revisión pregunta si todo está correcto y permite editar. El cierre indica que el ejemplo terminó y que no hubo guardado. El perfil usa John y explica adónde lleva la salida.

## Suite aplicada y trazabilidad

Modo frontend dominante `improve`, secundario `edit`. Banasan Product Design resolvió la procedencia visual y la preservación de la tarjeta; Banasan UI Engineering conservó la jerarquía de acción y el patrón de pasos; Banasan Frontend integró las piezas en el prototipo HTML/CSS/JS; Banasan Visual QA recorrió las vistas y tamaños. La fuente de identidad proviene del icono anterior únicamente. Dona Asistente mantiene la tarea del proyecto en su espacio de planificación.

Agent-delegation-router: `SELF`, slice de evolución visual del prototipo local. La revisión de imagen, marca, copy y pantallas comparte el mismo estado visual; separar el slice no aportaría una comprobación independiente proporcional al costo de traspaso.

## Evidencia y límites

`concept/v05.html` compara cuatro pantallas; `evidence/pulso-v05-*.png` conserva capturas de la versión. Se comprobó el flujo de ingreso, captura, revisión, cierre y salida en 320×667, 390×844 y 768×1024 sin desbordamiento horizontal. El icono es una propuesta vectorial para revisar en launcher real; los campos y textos funcionales definitivos siguen pendientes de Producto.
