# Acciones y feedback

## Jerarquía

Una acción primaria visible por contexto. Botón principal de al menos 50 pt de alto y objetivo táctil mínimo de 44 × 44 pt; separación candidata de 8 pt. Secundario para alternativa viable; terciario para navegación o edición. El estado deshabilitado indica por qué la acción no está disponible. Las acciones sólo con icono requieren nombre accesible.

## Matriz del recorrido ilustrativo

| Vista | Acción | Disponibilidad | Confirmación | Resultado visible |
| --- | --- | --- | --- | --- |
| Bienvenida | Comenzar | Siempre | No | Abre Ingreso |
| Ingreso | Ingresar | Siempre; valida al pulsar | No | Muestra errores en campos o abre Inicio; no autentica |
| Ingreso | Ver/Ocultar contraseña | Con campo montado | No | Cambia entrada segura y anuncio accesible |
| Inicio | Empezar captura | Siempre en el demo | No | Abre Captura |
| Captura | Revisar datos | Siempre; valida referencia al pulsar | No | Error local o abre Revisión conservando datos |
| Captura/Revisión | Volver / Editar datos | Siempre en el demo | No | Vuelve con valores conservados |
| Revisión | Finalizar ejemplo | Tras llegar a revisión | No | Abre Cierre; no guarda |
| Cierre | Volver al inicio | Siempre | No | Abre Inicio |
| Perfil | Cerrar sesión | Siempre en el demo | No | Limpia formularios simulados y abre Bienvenida |
| Elementos | Reintentar / botones de muestra | Sólo demostración | No | Toast explicativo sin efecto de red |

En producción cada acción necesita visibilidad, disponibilidad, confirmación, autorización del servidor, efecto local, efecto remoto y estado posterior. Esta tabla sólo fija el comportamiento del prototipo.

## Transiciones

| Momento | Propósito | Propuesta | Movimiento reducido |
| --- | --- | --- | --- |
| Primera entrada | Reconocimiento de marca | composición única, sin bloquear CTA | contenido inmediato |
| Cambio de vista | Continuidad espacial | 220 ms, opacidad + 8 px | sin desplazamiento |
| Login válido | Continuidad hacia Inicio | misma transición de vista | cambio inmediato |
| Error de formulario | Localizar problema | mensaje junto a campo y foco | igual, sin sacudida |
| Cierre | Señalar resultado | símbolo una vez, 350 ms | símbolo estático |
| Salida | Cambio de contexto | transición de vista | cambio inmediato |

El contenido está disponible desde el inicio de la transición. No animar filas de trabajo repetitivas. El gesto de volver no debe provocar pérdida de datos sin política funcional explícita.

## Toast

Uso: feedback breve de acciones de bajo riesgo que **ya terminaron** y cuyo resultado permanece comprensible. Duración del ejemplo: 3 s; se anuncia con `role=status` en web o región accesible equivalente en nativo. Mensaje breve y concreto, sin exponer detalles técnicos. Si existe error recuperable, trabajo pendiente, acción requerida o estado de sincronización, mostrarlo junto al objeto y mantenerlo visible; el toast no lo sustituye. No comunicar «Guardado» o «Sincronizado» sin confirmación real del sistema correspondiente.
