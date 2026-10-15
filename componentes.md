# Catálogo inicial de componentes

Estructura candidata de la suite Banasan: **tokens → primitives → compuestos → feature → pantalla**. Se documenta intención y estados; las propiedades y la implementación se definirán contra el stack real después de seleccionar dirección.

| Capa | Pieza candidata | Responsabilidad | Estados y accesibilidad |
| --- | --- | --- | --- |
| Primitive | Button, IconButton | Expresar jerarquía y feedback de pulsación | loading, disabled, focus, press; etiqueta accesible |
| Primitive | TextField, Select, Checkbox/Switch | Entrada con etiqueta persistente y ayuda | vacío, foco, validación, error, disabled; teclado adecuado |
| Primitive | Badge, StatusDot, Divider | Señales de estado o separación | texto + color; no estado sólo cromático |
| Compuesto | FormField, ActionBar | Agrupar control, validación y acciones | orden de foco, lectura y anchura adaptable |
| Compuesto | StatusBanner, EmptyState, ErrorState | Explicar situación y recuperación | mensaje específico, acción de reintento segura |
| Compuesto | AppHeader, BottomNavigation, Sheet | Orientación y navegación | título, back, selección, safe areas, lector de pantalla |
| Feature | LoginForm, SessionMenu | Conectar piezas a reglas de acceso | estados de sesión y errores funcionales; permisos fuera del primitive |
| Feature | CaptureStepper, CaptureSummary | Candidatos sujetos a flujo aprobado | progreso, guardado, error, extremo de contenido |

## Patrones transversales

- **Navegación:** jerarquía clara, retorno predecible y título visible. Barra inferior sólo si hay secciones principales estables; de lo contrario, navegación contextual.
- **Formularios:** etiqueta siempre visible, validación cerca del campo, teclado y foco coherentes, acción principal accesible con teclado abierto.
- **Carga:** indicador local al contenido que espera; evitar bloquear la pantalla completa durante una acción pequeña.
- **Vacío/error:** explicar qué falta o falló y ofrecer un siguiente paso real.
- **Confirmación:** sheet o diálogo para pérdida de trabajo y efectos difíciles de deshacer; botón destructivo con consecuencia explícita.
- **Mediciones y datos:** cifras tabulares, unidades persistentes, valores largos y ausentes previstos desde el diseño.
- **Touch:** objetivos táctiles mínimos de 44 × 44 pt y separación que evite pulsación accidental.

## Criterio de promoción

Una pieza pasa a componente compartido cuando tiene semántica estable, estados completos, accesibilidad, más de un consumidor real y owner. La coincidencia visual aislada no basta. Los componentes de feature contienen reglas y datos; primitives no conocen permisos, API ni dominio.
