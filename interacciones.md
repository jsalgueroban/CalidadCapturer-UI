# Interacciones, botones y acciones · contrato inicial

## Etiquetas activas en v0.7

Inicio muestra el saludo y una acción principal `Empezar captura`. En el formulario, `Revisar datos` valida la referencia y abre el resumen; el error dice `Escribe una referencia.` y enfoca el campo. Revisión conserva `Editar datos` y `Finalizar ejemplo`. Los títulos visuales redundantes se retiraron; los `h2` ocultos conservan nombre accesible y foco al cambiar de vista.

## Etiquetas activas en v0.5

`Comenzar` abre el ingreso; `Ingresar` lleva a Inicio tras la validación ilustrativa; `Empezar captura` abre el formulario; `Continuar` muestra el resumen; `Editar datos` vuelve al formulario; `Finalizar ejemplo` muestra el cierre sin guardar; `Volver al inicio` reinicia el recorrido visible. La tarjeta de Inicio conserva su etiqueta y disposición v0.4 por decisión del usuario.

## Secuencia ilustrativa v0.4

`Comenzar` abre el login; `Ingresar` valida campos de la maqueta y entra a Inicio; `Empezar captura` abre Contexto; `Continuar` valida la referencia y abre Revisión; `Terminar recorrido` muestra un cierre explícito sin guardar información; `Volver al inicio` retorna al trabajo. Salir desde Perfil limpia los campos y vuelve a la bienvenida. La composición de entrada y cierre nunca retrasa la disponibilidad del botón y desaparece con movimiento reducido.


## Recorrido del prototipo v0.2

| Vista | Acción dominante | Acción secundaria | Transición |
| --- | --- | --- | --- |
| Inicio | `Iniciar captura` dentro de la consola | Abrir perfil o cambiar sección | El foco gráfico se compone al entrar; abre Contexto |
| Contexto | `Continuar a revisión` en barra fija | Volver al inicio desde cabecera | Validación junto al campo y foco en el error; abre Revisión |
| Revisión | `Confirmar demostración` | `Editar ejemplo` | Confirmar vuelve a Inicio con aviso; editar conserva valores |
| Perfil | `Cerrar sesión` | Volver | Limpia campos ilustrativos y vuelve a ingreso |

El mapa visual 01–02 describe exclusivamente el ejemplo navegable; no fija el número de pasos del producto final. Las transiciones se pueden interrumpir y desaparecen con reducción de movimiento.


Las acciones siguientes son patrones de experiencia, no permisos ni funciones de negocio confirmadas. Cada pantalla futura debe completar recurso, autorización, precondición, efecto local, efecto remoto y estado posterior. La API conserva la autoridad de autorización.

## Jerarquía de botones

| Nivel | Uso | Apariencia candidata | Estado requerido |
| --- | --- | --- | --- |
| Primario | Una acción principal por contexto, como continuar o confirmar | Relleno sólido, etiqueta con verbo y consecuencia | normal, presionado, cargando, deshabilitado, éxito/error |
| Secundario | Alternativa disponible sin competir con la principal | Superficie tonal o borde visible | normal, presionado, deshabilitado |
| Terciario | Navegación o acción de baja prominencia | Texto e icono si aporta comprensión | normal, foco, presionado, deshabilitado |
| Destructivo | Salida con pérdida potencial, descarte o eliminación | Texto explícito y tratamiento de peligro | confirmación cuando haya consecuencias; no usar solo rojo |
| Icono | Acción frecuente y conocida con poco espacio | Contenedor táctil y etiqueta accesible | tooltip/label, foco, presionado, deshabilitado |

Reglas: una pantalla no tendrá dos primarios simultáneos; la etiqueta explica el resultado (`Guardar borrador`, no `Aceptar`); el loading conserva el ancho del botón; `disabled` explica el motivo cerca del control cuando afecte una tarea. La confirmación se reserva para acciones con pérdida o efecto difícil de revertir.

## Matriz de acciones a completar por vista

| Contexto candidato | Acción | Visibilidad y disponibilidad | Confirmación | Resultado y estado posterior |
| --- | --- | --- | --- | --- |
| Ingreso | Iniciar sesión | Visible con formulario válido; error de credenciales se muestra en contexto | No | Entrada a destino autorizado; si falla, conserva valores no sensibles y foco útil |
| Vista principal | Abrir una sección | Sólo si la sesión y capacidad lo permiten | No | Nueva vista con título y navegación coherente |
| Flujo de captura | Continuar / volver | Según paso y validación del formulario | No salvo pérdida de datos | Preserva el trabajo al cambiar de paso según contrato funcional aprobado |
| Sesión | Cerrar sesión | Visible desde perfil/menú; disponibilidad según política de sesión | Sí sólo si existen cambios sin guardar o trabajo pendiente sensible | Cierra sesión, limpia contexto y vuelve a ingreso |

La semántica de captura, persistencia, modo offline y sincronización queda abierta. No se mostrará `Sincronizado` para algo solamente guardado en dispositivo.

## Motion por momento

| Momento | Intención | Composición candidata | Límite |
| --- | --- | --- | --- |
| Primera presentación de la app | Reconocer marca y orientar | El marco del icono se compone una vez y converge al encabezado | No repetir en cada apertura ni bloquear contenido |
| Login correcto | Dar continuidad entre identidad y área de trabajo | Formulario se repliega; destino entra desde el eje de navegación | La navegación responde de inmediato; no depende de redibujar marca |
| Login fallido | Ubicar el problema | Mensaje aparece junto al campo; microdesplazamiento opcional | Evitar sacudidas extensas y error sólo cromático |
| Cambio de vista | Mantener orientación | Desplazamiento corto para jerarquía; disolución para cambio lateral | No animar cada tarjeta en una lista operativa |
| Salir | Confirmar cambio de contexto | El contenido se desvanece y regresa el ingreso | Estado y datos se limpian según contrato de sesión, no por duración del efecto |

Los tiempos iniciales para prototipo serán 150–250 ms para cambios de vista; la composición de primera presentación podrá durar hasta 300 ms si no retrasa la tarea. El feedback de pulsación será inmediato y breve (100–160 ms). Son hipótesis para prueba en dispositivo, no tokens universales. El movimiento debe ser interrumpible; no se animan acciones repetidas decenas de veces al día salvo feedback mínimo de pulsación. Con `reduce motion`, sustituir desplazamientos/composición por cambio inmediato o disolución breve. Ninguna información aparece únicamente por animación.

## Patrón de feedback

Toda acción de datos distingue `guardado localmente`, `enviando`, `sincronizado` y `requiere atención` únicamente cuando el flujo confirmado admita esos estados. El feedback permanece cerca del objeto afectado, con mensaje entendible y acción de recuperación específica; toasts efímeros no sustituyen un estado persistente.
