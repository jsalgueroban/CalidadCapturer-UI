# Pulso v0.7 · depuración de copy

## Decisión

El usuario aprobó retirar las tres preguntas grandes de Inicio, captura y revisión. Los encabezados de vista, la secuencia de pasos, los campos y el resumen ya comunicaban ubicación y siguiente acción. Se conservó `Hola de nuevo, John` como saludo breve, y la tarjeta coral y el historial mantienen su composición.

En captura se retiró también `Datos de la captura` y el CTA pasó de `Continuar` a `Revisar datos`. El mensaje de referencia obligatoria ahora es `Escribe una referencia.`. Revisión abre directamente con el paso y la tarjeta de resumen. Los títulos semánticos permanecen como `h2` ocultos visualmente para `aria-labelledby` y foco al navegar.

## Suite y verificación

Modo frontend `edit` con mejora de claridad. Banasan Product Design decidió la jerarquía; Frontend aplicó HTML/CSS y la etiqueta del CTA; UI Engineering conservó stepper, tarjeta y dock; Visual QA comprobó el recorrido, foco, validación, captura y revisión. `sial-design-proposals` y `sial-mobile-library` se consultaron para la frontera propuesta/componente: el copy queda en la vista y no se modifica librería SIAL. Dona Asistente mantiene la tarea de Calidad Capturer. Agent-delegation-router: `SELF`, slice de copy y espaciado sobre un único prototipo local, sin beneficio independiente de delegación.

`concept/v07.html` reúne cuatro pantallas. Se verificó el flujo a 320×667, 390×844 y 768×1024, sin desbordamiento horizontal; el foco llegó a los tres encabezados semánticos y la validación mantuvo mensaje junto al campo. El contenido funcional definitivo y datos reales siguen pendientes de Producto.
