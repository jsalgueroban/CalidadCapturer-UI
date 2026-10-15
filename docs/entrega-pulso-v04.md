# Pulso v0.4 · exploración de alta fidelidad

## Dirección

La referencia visual aportada por el usuario se trató como objetivo de calidad de diseño. Se tradujeron fotografía contextual, alternancia de escenas oscuras y claras, una tarjeta de acción cálida, profundidad acotada y controles táctiles amplios. No se copiaron camiones, contenido de transporte, precios, mapa, textos ni marcas de la referencia.

La propuesta sigue siendo una maqueta: no representa capturas, reglas, permisos o datos reales. El color coral y el icono v0.4 son candidatos por aprobar.

## Artefactos

- `concept/v04.html`: lámina de cuatro pantallas para evaluar la identidad como conjunto.
- `prototype/`: recorrido navegable de bienvenida, login, Inicio, Contexto, Revisión, cierre, Perfil y catálogo.
- `assets/packing-editorial-v04.png`: fotografía original para bienvenida y login.
- `assets/banana-box-cutout-v04.png`: objeto original para la acción principal de Inicio.
- `assets/icono-pulso-v04.svg` y `assets/icono-pulso-v04-1024.png`: variante cálida editable y exportación de revisión.
- `evidence/pulso-v04-*.png`: capturas de cada estado y de la lámina.

## Generación de imágenes

Se utilizó la herramienta integrada de generación de imágenes. No se usó la imagen adjunta como objetivo de edición ni se copió su contenido. Los prompts finales fueron:

1. **Fotografía:** “Photorealistic editorial photograph for a premium mobile app onboarding screen about banana quality capture. A real banana packing and selection area in Latin America, neatly arranged fresh green banana bunches and a few kraft export cartons on a clean working table, soft natural late-afternoon light entering from the side, subtle human presence only as hands working in the background, documentary authenticity, rich physical texture, sophisticated color grading with deep charcoal shadows and warm coral highlights from the light, composition with clear subject in the lower middle and quieter upper space suitable for overlay UI. Vertical 4:5 crop. No text, no logos, no user interface, no trucks, no brand marks, no fake labels, no surreal elements.”
2. **Objeto:** “Premium photorealistic product cutout for a mobile quality inspection interface: one open kraft produce carton with a neatly arranged cluster of fresh green bananas visible inside, viewed three-quarter from slightly above, realistic agricultural export packing details, precise natural texture, subtle soft studio lighting. Isolated object only, full object visible, centered, no people, no logos, no labels, no text, no UI, no shadows outside the object. Transparent background.”

## Roles y decisiones

Banasan Product Design: dirección a partir de la referencia y criterios de adaptación. UI Engineering: tokens y patrones candidatos. Frontend: prototipo aislado HTML/CSS/JS. Visual QA: recorrido, tamaños, imágenes y movimiento reducido. Imagegen: dos assets raster originales. Agent-delegation-router: `SELF`, porque la exploración visual requiere iteración sobre el mismo prototipo local y el traspaso de contexto tendría un costo comparable al trabajo directo.

## Verificación

`scripts/verify-prototype.ps1` comprobó sintaxis JavaScript, seis SVG y seis exportaciones PNG de 1024 px. Playwright recorrió bienvenida, error e ingreso válido, validación de captura, revisión con texto largo, cierre, retorno, perfil y salida en 320×667, 375×667, 390×844, 768×1024 y 1280×800; no se observó desbordamiento horizontal. La preferencia de movimiento reducido estableció la duración de transición en `0.01ms`. La lámina `concept/v04.html` se abrió en 1440×900 sin desbordamiento.

## Límites para promoción

Antes de llevar la identidad a la app real faltan aprobación visual, contenido y flujos reales, validación del icono en launcher, soporte de dispositivos, derechos/uso final de imágenes, accesibilidad con lector de pantalla y prueba de rendimiento en hardware.
