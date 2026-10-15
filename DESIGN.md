# Dirección visual · exploración 01

## Evolución v0.7

La jerarquía de las tres vistas se centra en acción y contenido: saludo breve → nueva captura → historial; paso Contexto → campos; paso Revisión → resumen. Se retiraron los titulares interrogativos que repetían la información del stepper o de la tarjeta. La corrección conserva la dirección Pulso y la composición aprobada de Inicio.

## Evolución v0.6

Se separaron icono de app y símbolo de interfaz: el primero usa fondo marfil; el segundo es transparente y tiene variantes para fondos claros y oscuros. En Inicio, la nota inferior fue sustituida por un historial corto con dos registros ilustrativos, claramente rotulados. La tarjeta coral y la fotografía documental se conservaron.

## Evolución v0.5

Se mantiene la dirección A y la composición de la tarjeta coral de Inicio, confirmada por el usuario. La fotografía de apertura es ahora documental y acreditada; el icono deriva del símbolo anterior. La voz se acerca al usuario con un saludo ilustrativo para John y títulos que orientan las decisiones de captura y revisión. El contrato detallado está en `CONTRATO-VISUAL.md` y la procedencia en `docs/entrega-pulso-v05.md`.

## Referencia de calidad visual y exploración v0.4

La imagen proporcionada por el usuario fija una aspiración de diseño: dirección de arte, fotografía contextual, profundidad controlada y ritmo entre pantallas, no la semántica de transporte que aparece en ella. La exploración v0.4 aplica esos principios a Calidad Capturer con dos assets originales de banano y una variante cálida del icono. Sigue en modo `redesign-in-progress`; el usuario aún debe valorar esta versión frente al uso real y aprobar identidad y contenido definitivos.


## Evolución de la dirección A · v0.3

La selección de “Pulso de captura” se mantiene como nombre de exploración, pero la ejecución v0.2 fue rechazada por el usuario: la metáfora de instrumento se volvió decoración. La v0.3 concentra la marca en el icono y un acento funcional; presenta la captura como tarea, con etiquetas, progreso y acción persistente. La página de escritorio pasa de hero promocional a ficha de revisión. La comparación visual y el motivo del retiro están en `docs/entrega-pulso-v03.md`.


## Brief de producto

**Objetivo confirmado.** Construir una identidad móvil moderna para Calidad Capturer, con icono, patrones y componentes coherentes, y con acciones definidas antes de dibujar pantallas. El movimiento debe dar continuidad al ingreso, autenticación, salida y navegación.

**Pregunta de diseño.** ¿Cómo hacer que la captura de calidad se sienta precisa, confiable y ágil en una operación móvil, sin que el acabado visual distraiga de la lectura y la acción?

**Audiencia y contexto.** Personas que usan la app móvil; rol, frecuencia, luz ambiental, tamaño de pantalla, plataforma principal y operación sin conexión: pendientes de confirmar. La palabra “Capturer” sugiere registro de evidencia, pero no autoriza inferir flujos ni campos.

**Fuente visual.** Ninguna aprobada en este repositorio. iOS se usa como referente de jerarquía, tactilidad y transiciones, no como plantilla de marca ni promesa de material nativo en Android.

**Requisitos confirmados por el usuario:** icono, identidad, patrones, componentes, catálogo inicial de botones/acciones, transiciones de ingreso, login, salida y cambio de vista. **Hipótesis reversibles:** el azul profundo comunica confianza y el verde lima ayuda a marcar captura/avance; se probarán contra alternativas. **Decisiones de producto pendientes:** nombre visible definitivo, público prioritario, plataformas/dispositivos, superficies iniciales, estados offline y aprobador de la dirección.

## Tres territorios

| Dirección | Tesis y firma | Composición y jerarquía | Color / tipografía | Motion | Costo y riesgo |
| --- | --- | --- | --- | --- | --- |
| **A. Pulso de captura** | Un marco abierto y un punto central forman una C abstracta: enfocar, registrar y comprobar. | Cabecera compacta, acción primaria fija cuando el flujo lo requiera, contenido en tarjetas sobrias, indicadores de estado muy legibles. | Azul tinta, blanco cálido y acento cítrico; sans técnica de alta legibilidad con números tabulares para métricas. | Composición breve del marco sólo en entrada; transiciones de contenido por continuidad espacial. | Medio. El acento debe reservarse para acciones y estados, no decorar todo el flujo. |
| **B. Cuaderno de campo** | La interfaz evoca una ficha de inspección contemporánea: claridad, anotación y trazabilidad. | Superficies planas, secciones numeradas, barras de progreso y separación tipográfica; pocas tarjetas. | Marfil, grafito y verde hoja; sans humanista con títulos editoriales. | Aparece por bloques, como una ficha que se completa; mínimo en tareas repetidas. | Bajo. Puede parecer genérico si el icono y la tipografía no construyen una firma propia. |
| **C. Lente operativo** | Una lente translúcida revela contexto y estado; profundidad reservada a navegación y confirmación. | Plano principal sólido, controles flotantes puntuales y capas de contexto. | Azul noche, turquesa y superficies translúcidas; sans geométrica. | Capas que se desplazan y comprimen para señalar cambios de nivel. | Alto. Contraste, batería, rendimiento y equivalencia sin transparencia deben probarse en hardware. |

## Comparación inicial

| Criterio | A | B | C |
| --- | --- | --- | --- |
| Claridad para acciones frecuentes | Alta | Alta | Media |
| Firma reconocible en icono y UI | Alta | Media | Alta |
| Adaptación entre iOS y Android | Alta | Alta | Media |
| Complejidad de implementación | Media | Baja | Alta |
| Riesgo de movimiento excesivo | Bajo si se limita a entrada/continuidad | Muy bajo | Alto |

**Dirección seleccionada el 15/10/2026 por el responsable:** A, *Pulso de captura*. Su motivo gráfico conecta icono, foco y navegación sin convertir la interfaz en una animación permanente. B y C quedan como alternativas evaluadas. La selección de dirección autoriza el prototipo; el icono y el paquete funcional finales aún requieren aprobación.

## Boceto de icono A

El boceto inicial `assets/icono-concepto.svg` utilizó un marco abierto, punto de foco y check integrado. La crítica detectó que el check podía sugerir aprobación previa. La iteración seleccionada para prototipo está en `assets/icono-pulso.svg`, con variantes clara y monocroma. Debe comprobarse a 32/48/64 px y sobre los fondos de launcher; los radios exteriores finales los administra cada plataforma.

## Sistema candidato, sujeto a selección

- **Roles de color:** fondo, superficie, texto principal/secundario, borde, acción, foco, éxito, advertencia, error y estado pendiente. El color no será la única señal de estado.
- **Tipografía:** jerarquía de título, sección, cuerpo, etiqueta y dato; tamaño dinámico y números tabulares donde haya mediciones. La familia se decide tras probar legibilidad en dispositivos reales.
- **Espaciado:** base de 4 pt, zonas táctiles de al menos 44 × 44 pt, separación entre acciones destructivas y primarias.
- **Superficies:** contenido opaco; profundidad y translucidez limitadas a navegación/overlays cuando mantengan contraste y reduzcan complejidad.
- **Accesibilidad:** contraste AA como mínimo, foco visible, lector de pantalla, tamaño de texto ampliado, reducción de movimiento y transparencia, estados que combinan texto/icono/color.

## Gate de selección

1. Elegir o combinar una dirección con razones específicas.
2. Confirmar audiencias, plataforma y tres recorridos reales para convertir el catálogo inicial en pantallas.
3. Aprobar icono e identidad antes de fijar tokens y APIs de componentes.
4. Probar la identidad y motion en el dispositivo soportado más lento antes de promover a la app.

## Ledger de capacidades

| Capacidad | Estado | Señal | Aporte / límite | Evidencia |
| --- | --- | --- | --- | --- |
| Banasan Product Design | Activada | Nueva identidad | Tres direcciones, comparación y selección pendiente | Este documento |
| Banasan UI Engineering | Activada | Patrones y componentes | Capas y contrato candidato; sin API inventada | `componentes.md` |
| Banasan Frontend | Activada como criterio | Acciones por vista | Matriz inicial de visibilidad, estado y efecto | `interacciones.md` |
| Banasan Mobile | Activada como criterio | Producto móvil con motion | Perfil de estados y gate en hardware | `interacciones.md` |
| Banasan Visual QA | Pendiente | No hay superficie ejecutable | Validará accesibilidad y fidelidad tras selección | Sin evidencia aún |
| Banasan Delivery | Pendiente | No hay construcción de software | Convertirá diseño aprobado en slices | Sin evidencia aún |
| Liquid Glass / renderizado avanzado | Evaluado, no seleccionado | Referencia iOS | Sólo C lo usa como hipótesis; requiere fallback | Matriz de territorios |
| UI/UX Pro Max | Consultada | Catálogo de producto, toque e iconos | Se adoptó separación táctil; se rechazó el patrón newsletter y la paleta automática | `referencias-aplicadas.md` |
| Awesome DESIGN.md | Consultada | Referencia iOS y herramientas operativas | Se adaptó jerarquía y uso reservado del acento; se rechazó copiar estilos de marketing | `referencias-aplicadas.md` |
| Emil Design Engineering | Consultada | Motion de ingreso y navegación | Se limitó composición a primera presentación y se redujeron duraciones frecuentes | `referencias-aplicadas.md` |
