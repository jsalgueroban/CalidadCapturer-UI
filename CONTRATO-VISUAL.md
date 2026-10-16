# Contrato visual vigente

**Fuente:** [DESIGN.md](DESIGN.md) y [handoff/tokens.ts](handoff/tokens.ts) · **Referencia visual:** [prototipo](prototype/) y [tablero](concept/) · **Estado:** dirección seleccionada, validación nativa pendiente.

| Capa | Responsabilidad | Fuente |
| --- | --- | --- |
| Tokens | Color, tipo, espacio, radio y movimiento | `handoff/tokens.ts` |
| Primitives | Botones, campos, icon buttons, texto y separadores | `docs/estructura.md` |
| Compuestos | Cabecera, barra de acción, mapa de pasos, fila de inspección y toast | `docs/estructura.md` |
| Features | Ingreso, captura, revisión e historial reciente | `docs/estructura.md` |
| Pantallas | Ensamblaje y navegación | `docs/estructura.md` |

La app Expo implementa componentes nativos contra sus versiones y librerías instaladas. El HTML es evidencia visual e interactiva; no establece una API React Native ni una regla de negocio. Cualquier cambio de identidad actualiza primero `DESIGN.md` y tokens, luego prototipo, documentación y evidencia.
