# Validación del paquete

## Automatizada

Ejecutar `./scripts/verify-prototype.ps1`. Verifica sintaxis JS, integridad y dimensiones del icono, SVG, fuentes, licencia, referencias del manifest y enlaces locales del prototipo. La validación no requiere npm ni instala dependencias.

## Recorrido visual e interactivo

Comprobar en `prototype/`: bienvenida, ingreso, validación de correo/contraseña, inicio, nueva captura, error de referencia vacía, edición desde revisión, cierre sin guardado, perfil/salida y estados del catálogo. Revisar anchuras de 320, 390 y 768 px, sin desbordamiento horizontal ni CTA tapada por teclado. Con movimiento reducido, la navegación debe seguir siendo usable.

Las capturas vigentes están en `evidence/pulso-v08-*.png`. Son evidencia del prototipo web, no sustituyen pruebas de la app Expo en dispositivo.

**Comprobación de esta entrega:** puerta automatizada aprobada; a 390 × 844 px el prototipo cargó Archivo y la fotografía, sin desbordamiento horizontal. El recorrido llegó de Bienvenida a Cierre. El ingreso vacío mostró los dos errores; la referencia vacía mostró «Escribe una referencia.»; la revisión presentó «Lote 042» y «Empaque correcto». El tablero conservó sus cuatro vistas vigentes.

## Criterios antes de producción

- Icono reconocible a tamaños pequeños y correcto con máscaras de plataforma.
- Fuente Archivo cargada y legible con texto dinámico; resolver diferencias de anchura nativa.
- Contraste, foco, etiquetas, orden de lectura y anuncios revisados con VoiceOver y TalkBack.
- Botones de al menos 44 × 44 pt y acción principal visible con teclado y safe areas.
- Estados reales de carga, vacío, error, permisos, offline, sesión y sincronización conectados al contrato funcional.
- Acciones verificadas con autorización de servidor; feedback coherente con persistencia real.
- Licencias y atribuciones de imágenes/font confirmadas para el canal de distribución.

El paquete está listo para consumo de diseño. La implementación y certificación nativa pertenecen al repositorio de la aplicación.
