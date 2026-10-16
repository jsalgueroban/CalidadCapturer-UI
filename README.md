# Calidad Capturer · identidad móvil

Paquete de diseño **Pulso de captura**, versión `0.9.0`, preparado para React Native / Expo. Define identidad, composición, tokens, componentes y la propuesta de recorridos y estados de HU2654. El [prototipo web](prototype/) y el [tablero visual](concept/) muestran la dirección visual v0.8; su captura de dos pasos sigue siendo ilustrativa y no representa la inspección completa de cinco cajas.

## Punto de entrada

| Necesidad | Fuente vigente |
| --- | --- |
| Dirección visual, voz e isotipo | [DESIGN.md](DESIGN.md) |
| Tokens para importar en Expo | [handoff/tokens.ts](handoff/tokens.ts) |
| Mapa de assets y estado de uso | [handoff/manifest.json](handoff/manifest.json) |
| Estructura de pantallas, componentes y campos | [docs/estructura.md](docs/estructura.md) |
| Recorrido Contexto → Cajas 1–5 → Revisión, bandeja, actividades y estados | [docs/recorridos-hu2654.md](docs/recorridos-hu2654.md) |
| Tablero de siete vistas del recorrido HU2654 | [concept/hu2654.html](concept/hu2654.html) |
| Acciones, estados, movimiento y toast | [docs/interacciones.md](docs/interacciones.md) |
| Integración React Native / Expo | [docs/integracion-expo.md](docs/integracion-expo.md) |
| Verificación y límites | [docs/validacion.md](docs/validacion.md) |

`CONTRATO-VISUAL.md`, `componentes.md` e `interacciones.md` son referencias rápidas. Los contratos detallados viven en `docs/` y los valores importables en `handoff/`.

## Estado

La dirección visual A está seleccionada. El prototipo v0.8 es la referencia visual; la matriz HU2654 de v0.9.0 está propuesta para revisión de Producto. `handoff/tokens.ts` es la fuente de diseño de este repositorio. Antes de aprobar el paquete se requiere validar estados con Producto y revisar la identidad en hardware real. Autenticación, persistencia, permisos, sincronización y esquema de inspecciones pertenecen al contrato funcional de la app; aquí se representan con datos de demostración.

## Ejecutar y validar

Desde la raíz:

```powershell
python -m http.server 8765
./scripts/verify-prototype.ps1
```

Abrir `http://127.0.0.1:8765/prototype/` y `http://127.0.0.1:8765/concept/`. El paquete no instala dependencias ni modifica la app Expo. Las iteraciones anteriores permanecen en el historial de Git; el árbol actual contiene la propuesta vigente.
