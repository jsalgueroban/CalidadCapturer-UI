# Iteración visual Pulso v0.2

**Motivo.** La primera maqueta se percibía genérica. Se aplicó la crítica de Banasan Product Design e Impeccable `bolder`/`animate` a la superficie ejecutable.

**Cambio.** La acción principal se integra en una consola de foco con retícula y escala ilustrativa. Contexto y Revisión comparten un mapa de secuencia; el formulario usa una barra de acción fija y la revisión una ficha de lectura. El catálogo muestra los patrones nuevos. Se mantuvo la paleta y la pila tipográfica del contrato v0.1.

**Evidencia visual.** `evidence/pulso-v02-mobile-home.png`, `evidence/pulso-v02-mobile-capture.png`, `evidence/pulso-v02-mobile-review.png` y `evidence/pulso-v02-home.png`.

**Verificación.** `scripts/verify-prototype.ps1` pasó: sintaxis JavaScript, cinco SVG y cinco PNG de 1024 px. Playwright recorrió ingreso, captura vacía, validación, revisión y confirmación en 375, 390, 768 y 1280 px: sin desbordamiento horizontal. La reducción de movimiento estableció la duración de animación en `0.01ms`.

**Límite.** Es una maqueta sin autenticación ni guardado. La escala, los campos y el número de pasos son ilustrativos. El icono y los tokens finales siguen pendientes de aprobación; no hay validación en launcher ni hardware móvil.

**Delegación.** `SELF`: iteración visual sobre un único prototipo local; la transferencia de contexto costaría tanto como la edición y verificación directa.
