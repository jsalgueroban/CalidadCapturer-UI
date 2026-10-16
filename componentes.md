# Componentes

El catálogo vigente y sus estados está en [docs/estructura.md](docs/estructura.md). Jerarquía de construcción: **tokens → primitives → compuestos → features → pantallas**.

| Pieza | Capa | Uso |
| --- | --- | --- |
| Button, IconButton, TextField, TextArea | Primitive | Acción y entrada accesibles |
| AppHeader, BottomNavigation, ActionDock | Compuesto | Orientación y acción contextual |
| StepMap, ReviewSummary, RecentInspectionRow, Toast | Compuesto | Progreso, lectura, historial y feedback |
| LoginForm, CaptureForm, RecentInspections | Feature | Coordinación de datos y validación |

Los nombres describen responsabilidades para el handoff. La implementación Expo ajusta props y dependencias al proyecto real; ninguna pieza se promueve a librería compartida por aparecer una vez en el prototipo.
