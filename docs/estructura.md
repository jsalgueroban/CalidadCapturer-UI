# Estructura de interfaz

**Alcance:** recorrido visible del prototipo v0.8. El recorrido funcional propuesto para HU2654 está en [recorridos-hu2654.md](recorridos-hu2654.md). Los nombres son responsabilidades de diseño, no imports existentes en la app.

## Mapa de pantallas

| Pantalla | Propósito | Contenido | Acción principal |
| --- | --- | --- | --- |
| Bienvenida | Reconocer marca y comenzar | Foto acreditada, logo, título | Comenzar |
| Ingreso | Acceder al ejemplo | Correo, contraseña, ver/ocultar | Ingresar |
| Inicio | Orientar al trabajo | Saludo, nueva captura, últimas inspecciones | Empezar captura |
| Captura | Registrar contexto | Paso 01, referencia, observación | Revisar datos |
| Revisión | Comprobar entrada | Paso 02, resumen, estado sin guardar | Finalizar ejemplo |
| Cierre | Comunicar resultado del ejemplo | Confirmación sin persistencia | Volver al inicio |
| Elementos | Mostrar patrones de diseño | Botones, estados, vacío/error/carga | Ninguna |
| Perfil | Exponer salida del ejemplo | Nombre y cierre de sesión simulado | Cerrar sesión |

## Capas de componentes

| Capa | Piezas | Contrato |
| --- | --- | --- |
| Tokens | Color, espacio, radio, tipo, movimiento | Valores en `handoff/tokens.ts` |
| Primitives | Button, IconButton, TextField, TextArea, Text | Sin datos, red, permisos ni dominio; etiqueta y estado accesibles |
| Compuestos | AppHeader, BottomNavigation, ActionDock, StepMap, ReviewSummary, RecentInspectionRow, Toast | Componen primitives; variantes con propósito y estados completos |
| Features | LoginForm, CaptureForm, RecentInspections | Mapean datos reales a la presentación; validan y coordinan efectos |
| Pantallas | Welcome, Login, Home, Capture, Review, Complete, Components, Profile | Ensamblan features y navegación |

Un elemento se comparte cuando su semántica, estados, accesibilidad y consumidores son estables; una coincidencia visual no basta. Los componentes de feature adaptan datos y permisos; los primitives no conocen servicios.

## Campos del ejemplo

| Campo | Presentación | Regla ilustrativa | Estado de error |
| --- | --- | --- | --- |
| Correo de acceso | teclado de email, autocapitalización desactivada | formato de correo antes de entrar al demo | mensaje bajo campo y foco |
| Contraseña | entrada segura con mostrar/ocultar | no vacía en el demo | mensaje bajo campo y foco |
| Referencia | texto de una línea | no vacía para avanzar en el demo | «Escribe una referencia.» y foco |
| Observación | texto multilínea | opcional en el demo | ayuda persistente |

Etiquetas siempre visibles; no usar placeholder como sustituto. Al volver desde Revisión se conservan los valores. El esquema real, longitudes, obligatoriedad y validación de servidor se definen con el contrato funcional de la app.

## Estados de datos

`RecentInspections` acepta **carga, vacío, contenido, error y acceso restringido**. En la propuesta se muestran dos filas de ejemplo, con identificador, tipo, estado textual y fecha. No se presupone una ruta de detalle. Para implementar una fila accionable se requiere destino, permiso y resultado definidos.

`CaptureForm` distingue edición, error local, envío y resultado. Si la app admite escritura offline, su feature deberá expresar guardado local, pendiente de envío, sincronizado y atención según estados reales; nunca inferir sincronización a partir de una animación o toast.
