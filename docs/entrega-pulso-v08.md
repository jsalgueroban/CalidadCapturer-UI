# Pulso v0.8 · tipografía con más carácter

## Diagnóstico y decisión

El usuario señaló que la forma de las letras hacía que la app se percibiera humilde. La v0.7 usaba una pila de sistema que declaraba Inter sin incluir la fuente, con microtextos operativos entre 10 y 12 px. La fotografía y la tarjeta conservan la composición aceptada; el cambio se concentra en la voz tipográfica y su jerarquía.

Se eligió **Archivo Variable** para esta exploración: tiene trazos firmes y un eje de ancho que permite titulares ligeramente compactos sin convertir la interfaz en una composición decorativa. Se guarda una copia WOFF2 latina en el repositorio para que el prototipo funcione sin cargar fuentes de terceros en tiempo de ejecución. El archivo proviene de [Google Fonts](https://github.com/google/fonts/tree/main/ofl/archivo) y se distribuye bajo [SIL Open Font License 1.1](https://github.com/google/fonts/blob/main/ofl/archivo/OFL.txt), copiada en `assets/fonts/OFL-Archivo.txt`. Es una candidata para la propuesta, pendiente de aprobación visual y prueba en el stack móvil real.

## Roles tipográficos candidatos

| Rol | Propuesta en el prototipo | Uso |
| --- | --- | --- |
| Display | Archivo 760, ancho 88 %, 35–41 px, altura 1.02 | Bienvenida y resultado; bloque corto de lectura |
| Título de acción | Archivo 760, ancho 88 %, 27–29 px | `Nueva captura` en la tarjeta coral |
| Título de sección | Archivo 730, ancho 92 %, 17 px | `Últimas inspecciones` |
| Cuerpo | Archivo 400–500, 14–15 px, altura 1.5 | Instrucciones y descripciones |
| Etiqueta | Archivo 690, 14–15 px | Campos y decisiones de formulario |
| Acción | Archivo 700, 14–15 px | Botones principales y secundarios |
| Metadato | Archivo 470–650, 11–12 px | Obligatoriedad, fecha y estados secundarios |

Los números de referencia y paso usan cifras tabulares. Se evita convertir todas las etiquetas en mayúsculas; la jerarquía depende del tamaño, el peso y el espacio. Los valores son candidatos del prototipo web, no tokens nativos aprobados.

## Cobertura y límites

Se actualizaron bienvenida, ingreso, Inicio, Contexto, Revisión y catálogo de componentes; el recorrido y las acciones se conservaron. `concept/v08.html` reúne las cuatro pantallas clave y `evidence/pulso-v08-*.png` conserva capturas. El tamaño de texto ampliado, VoiceOver/TalkBack y la lectura en campo requieren dispositivo real. No se han modificado las reglas de negocio ni la aplicación móvil productiva.

La fuente cargó desde el archivo local en el navegador. Se recorrieron ingreso, Inicio, captura y revisión a 320×667, 390×844 y 768×1024; no hubo desbordamiento horizontal. Una referencia larga permaneció visible en Revisión. El botón de ingreso quedó dentro de la pantalla a 320 px y `prefers-reduced-motion` redujo la animación a duración prácticamente nula. El gate de assets verifica también la firma WOFF2 y la presencia de la licencia.

Modo frontend dominante `improve`, secundario `edit`; modo visual `redesign-in-progress`. Banasan Product Design resolvió la dirección tipográfica; UI Engineering la tradujo a roles; Frontend aplicó la fuente y escala en el prototipo; Visual QA revisó tamaños y recorrido. Dona mantiene la tarea en Calidad Capturer. `SELF` tras evaluar agent-delegation-router: un solo repositorio, cambios acotados a tipografía y validación visual interactiva local; el costo de trasladar contexto sería similar al trabajo directo.

Se consultaron `sial-design-proposals` y `sial-mobile-library` para la frontera de propuesta y componente nativo: este cambio pertenece al prototipo HTML de Calidad Capturer, y no altera la librería móvil SIAL ni declara equivalencia React Native.
