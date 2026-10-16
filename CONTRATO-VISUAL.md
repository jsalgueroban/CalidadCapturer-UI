# Contrato visual · Pulso de captura · v0.8

## Evolución v0.8 · voz tipográfica

Archivo Variable sustituye la pila de sistema del prototipo como **candidata** de identidad móvil. Los titulares usan un ancho ligeramente compacto y peso firme; etiquetas, valores y acciones ganan tamaño y separación de roles. La fuente WOFF2 se distribuye localmente con su licencia OFL. [Entrega v0.8](docs/entrega-pulso-v08.md) especifica los roles y su procedencia. La composición y las acciones de v0.7 siguen vigentes; la tipografía final requiere revisión en dispositivos y aprobación de Producto.

La lectura vigente es la evolución tipográfica v0.8, la composición v0.7, la paleta coral/carbón de v0.4 y la marca adaptativa v0.6. Las secciones v0.1–v0.3 conservan decisiones históricas y no definen tokens actuales. La [validación de los nueve elementos del paquete](docs/validacion-paquete-v07.md) distingue lo propuesto de lo pendiente para integración.

## Evolución v0.7 · títulos que orientan sin repetir

Se retiraron las preguntas grandes de Inicio, Contexto y Revisión a petición del usuario. Inicio conserva el saludo personalizado breve, la tarjeta `Nueva captura` y el historial. El formulario conserva la cabecera `Nueva captura`, el paso `Contexto` y las etiquetas persistentes; se retiró también `Datos de la captura`. Revisión conserva el paso `Revisión` y el resumen con `Editar datos`. El CTA del formulario dice `Revisar datos`, coherente con la pantalla de destino.

Cada vista mantiene un `h2` oculto visualmente para nombre accesible y foco al navegar. El espacio liberado acerca el contenido principal a la cabecera sin añadir texto decorativo. La tarjeta coral, la imagen y el historial mantienen su composición v0.6.

## Evolución v0.6 · marca adaptativa e historial breve

El símbolo para interfaz ya no lleva una placa carbón. Hay una versión SVG transparente para superficies claras (`logo-capturer-ink-v06.svg`) y otra para superficies oscuras (`logo-capturer-light-v06.svg`); ambas simplifican la lista a dos checks para legibilidad a 32 px. El icono de launcher usa la composición completa sobre marfil (`icono-capturer-v06.svg`). Conservan el plano verde, la lista coral y la lente del icono anterior.

Inicio reemplaza la nota preparatoria por dos filas de inspecciones recientes con referencia, tipo, estado y fecha. La cabecera las identifica como **datos de ejemplo**. No se conectaron a datos reales ni se presentan como inspecciones de John. El estado se expresa con texto y punto, sin depender del color únicamente. La tarjeta principal se mantiene como en v0.4.

## Evolución v0.5 · fotografía real, marca heredada y copy

La imagen de bienvenida y login procede de una fotografía documental de selección de banano, con atribución y licencia registradas en `docs/entrega-pulso-v05.md`. La tarjeta coral de Inicio conserva su composición v0.4 y su objeto; el usuario confirmó que esa pieza debía mantenerse. El archivo fotográfico generado v0.4 queda como antecedente, sin uso en el prototipo actual.

El icono v0.5 se dibujó en SVG a partir de tres rasgos reconocibles del icono anterior: plano verde, lista de verificación naranja y lente. El fondo carbón y el coral lo integran con Pulso de captura. El original raster se guarda como `assets/referencia-icono-original.png` para comparar trazos y proporciones; no se tomaron pantallas del producto anterior como autoridad de UX.

La voz se dirige al usuario: saludo ilustrativo “Hola de nuevo, John”, pregunta que abre la tarea y títulos de pasos en forma de decisiones. Cada vista conserva una acción principal. John es una persona de demostración; en producto el nombre debe venir del perfil autenticado. El formulario, autenticación y guardado siguen siendo demostrativos.

## Exploración v0.4 · fotografía y contraste de escenas

El usuario aportó una imagen de referencia para elevar el **nivel de acabado**, no para copiar su producto logístico. Se adoptaron fotografía protagonista, alternancia intencional de superficies oscuras y claras, una tarjeta cálida para la acción principal y botones de tacto amplio. Se descartaron camiones, mapa de seguimiento, precios, microtexto e iconografía de esa pieza. Las dos imágenes del prototipo son originales y se generaron para esta exploración.

**Escenas:** bienvenida fotográfica → login con continuidad de la imagen → Inicio oscuro con acción coral y objeto de producto → captura sobre superficie neutra con progreso coral → revisión blanca de lectura → cierre oscuro con resultado explícito. El cierre dice que la demostración no guardó datos.

**Tokens experimentales:** carbón `#232321`, coral `#F47E63`, superficie `#F5F4F1`, blanco `#FFFFFF`, separador `#DEDFDA`. Los controles de acción principal son pastillas; las tarjetas funcionales usan radios entre 11 y 17 px. La fotografía y el objeto se cargan como PNG locales; no son evidencia del producto real. El icono cálido `assets/icono-pulso-v04.svg` es una variante candidata, no una identidad aprobada.

**Movimiento:** entrada y cambio de escena de 220 ms con opacidad y 8 px; el resultado de cierre se compone una vez en 350 ms. La preferencia de movimiento reducido elimina esas transiciones. El prototipo mantiene las mismas reglas ilustrativas de formulario, sin autenticación ni persistencia.

## Iteración v0.3 · herramienta de trabajo

El usuario rechazó la v0.2 por percibirse generada y genérica. Se retiraron la retícula, la escala 00–100, los rótulos ornamentales, la consola oscura y los titulares promocionales. En móvil, el prototipo ocupa la pantalla completa; el marco de teléfono queda sólo en la vista de revisión de escritorio.

La firma de Pulso se concentra en el icono, una dosis pequeña de lima para la acción de crear y el estado, y transiciones breves de pantalla. La jerarquía se apoya en tareas visibles: nueva captura, campos con etiqueta persistente, progreso de contexto a revisión y una acción primaria fija en el formulario. El inicio muestra estados ilustrativos en filas de lectura; no finge registros reales.

**Decisión visual:** fondo blanco, tinta para texto y acciones, separadores finos, radios de hasta 10 px en controles y superficies, sin sombras decorativas. Se conserva la paleta base, con menor proporción de color oscuro y acento. El movimiento de entrada es una transición de 180 ms con 5 px de desplazamiento; se elimina con reducción de movimiento. Esta iteración sustituye la v0.2 como propuesta visible, pero no aprueba icono, tokens ni reglas funcionales finales.

## Iteración v0.2 · consola de captura

La crítica visual del prototipo inicial detectó una composición intercambiable: titular amplio, tarjeta de llamada a la acción y lista de estados. La dirección A se expresa ahora como **instrumento de lectura**: retícula de enfoque, escala 00–100 ilustrativa, contador de secuencia y acción integrada. La escala es un recurso gráfico de demostración, no una medición de calidad ni un dato real.

Tres patrones conectan el recorrido: **consola de foco** para empezar, **mapa de secuencia** para orientar los dos pasos ilustrativos y **barra de acción contextual** para mantener visible “Continuar” durante la entrada. La revisión adopta una ficha con cabecera de registro y lectura por filas. En navegación principal, el destino activo ocupa una pastilla de tinta; durante la captura, el retorno superior y la barra contextual sustituyen esa navegación.

Se conservaron los tokens de color y tipografía de v0.1. El motivo de foco se compone en 350–400 ms al abrir la vista y se elimina con `prefers-reduced-motion`. La interfaz sigue siendo una maqueta con datos ilustrativos.

**Decisión:** el responsable seleccionó A · Pulso de captura el 15/10/2026. Esta selección autoriza construir el prototipo de dirección. La aprobación del paquete final y de las reglas funcionales sigue pendiente. **Modo visual:** `redesign-in-progress`. **Modo de trabajo:** `create` de prototipo aislado, con exploración secundaria de icono. **Plataforma del artefacto:** navegador; las pantallas representan una app móvil, sin afirmar paridad con iOS/Android nativos.

## Firma y uso

El marco C abierto y un punto de enfoque forman la marca. El check se retiró del icono porque podría comunicar que un registro ya fue aprobado; queda reservado para estados de éxito. La composición se presenta una vez por sesión de demostración. En uso repetido se prioriza acceso directo a la tarea.

## Tokens candidatos

| Rol | Valor | Uso |
| --- | --- | --- |
| Tinta / acción principal | `#10283F` | Texto principal, panel de marca y botones sólidos |
| Papel | `#F7F8F3` | Fondo de lectura |
| Blanco | `#FFFFFF` | Superficies de entrada y contraste |
| Lima | `#D8F178` | Acción sobre tinta, foco de marca |
| Lima oscuro | `#A6CF3B` | Acento sobre fondo claro, sujeto a contraste |
| Texto secundario | `#506172` | Descripciones |
| Borde | `#DCE3E3` | Separadores y controles |
| Error | `#AD3D35` | Texto y bordes de validación |

Los valores son de prototipo. El color no actúa como única señal de estado. La tipografía del prototipo usa la pila del sistema; la familia definitiva se elegirá tras pruebas de lectura en dispositivos reales. Espaciado base: 4 px; área táctil: 44 × 44 como mínimo; separación candidata: 8 px.

## Motion

- Primera presentación: composición del lockup hasta 300 ms; no retrasa la interfaz.
- Cambio de vista: 150–250 ms con continuidad espacial y foco en el nuevo título.
- Pulsación: feedback breve e inmediato, 100–160 ms.
- Reducción de movimiento: transiciones prácticamente inmediatas.
- Salida: vuelve a ingreso y limpia los campos del prototipo. El producto real requiere política de sesión y trabajo pendiente aprobada.

## Componentes demostrados

Button primario, secundario, terciario y disabled; IconButton; TextField con validación contextual; navegación inferior; cabecera con retorno; tarjeta de acción; estados confirmado/pendiente/atención; banner contextual y toast de resultado. El prototipo separa estilos comunes de contenido de pantalla. La implementación móvil deberá traducir estas intenciones a primitives nativos y validar sus APIs contra el stack real.

## Archivos de marca

| Archivo | Propósito |
| --- | --- |
| `assets/icono-pulso.svg` | Concepto principal oscuro |
| `assets/icono-pulso-claro.svg` | Variante clara |
| `assets/icono-pulso-monocromo.svg` | Variante monocroma transparente |
| `assets/icono-pulso-foreground.svg` | Primer plano del icono adaptable Android |
| `assets/icono-pulso-background.svg` | Fondo del icono adaptable Android |

Los SVG de color incluyen fondo cuadrado completo; el sistema operativo aplica la máscara del launcher. Se incluyen exportaciones PNG de 1024 px para revisión, más capas editables para icono adaptable Android. Las áreas seguras y las exportaciones de producción deben validarse por plataforma. El icono todavía necesita prueba de reconocimiento a 32/48/64 px y aprobación final.

## Límites funcionales

El prototipo usa datos ilustrativos y credenciales de demostración. No autentica, guarda, sincroniza ni representa permisos reales. El formulario de captura sólo muestra patrones de entrada, validación y revisión. Ningún campo o estado ilustrativo establece una regla del producto.

## Decisiones pendientes

1. Recorridos y acciones reales por vista, con visibilidad, permiso, precondición y resultado.
2. Dispositivos y plataformas objetivo; pruebas de tacto, texto dinámico y rendimiento.
3. Reglas de offline, sesión y trabajo pendiente.
4. Aprobación de icono, tipografía y tokens finales por Producto.
