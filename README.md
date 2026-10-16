# Calidad Capturer · identidad móvil

Paquete de diseño **Pulso de captura**, versión `0.8.0`, preparado para React Native / Expo. Define identidad, composición, tokens, componentes, textos y comportamiento del recorrido ilustrativo. El [prototipo web](prototype/) y el [tablero visual](concept/) sirven para revisar la intención; no son código de la app móvil.

## Punto de entrada

| Necesidad | Fuente vigente |
| --- | --- |
| Dirección visual, voz e isotipo | [DESIGN.md](DESIGN.md) |
| Tokens para importar en Expo | [handoff/tokens.ts](handoff/tokens.ts) |
| Mapa de assets y estado de uso | [handoff/manifest.json](handoff/manifest.json) |
| Estructura de pantallas, componentes y campos | [docs/estructura.md](docs/estructura.md) |
| Acciones, estados, movimiento y toast | [docs/interacciones.md](docs/interacciones.md) |
| Integración React Native / Expo | [docs/integracion-expo.md](docs/integracion-expo.md) |
| Verificación y límites | [docs/validacion.md](docs/validacion.md) |

`CONTRATO-VISUAL.md`, `componentes.md` e `interacciones.md` son referencias rápidas. Los contratos detallados viven en `docs/` y los valores importables en `handoff/`.

## Estado

La dirección visual A está seleccionada. El prototipo v0.8 es la referencia vigente de la propuesta. `handoff/tokens.ts` es la fuente de diseño de este repositorio. Antes de publicarlo en producción se requiere validación en hardware real. Autenticación, persistencia, permisos, sincronización y esquema de inspecciones pertenecen al contrato funcional de la app; aquí se representan con datos de demostración.

## Ejecutar y validar

Desde la raíz:

```powershell
python -m http.server 8765
./scripts/verify-prototype.ps1
```

Abrir `http://127.0.0.1:8765/prototype/` y `http://127.0.0.1:8765/concept/`. El paquete no instala dependencias ni modifica la app Expo. Las iteraciones anteriores permanecen en el historial de Git; el árbol actual contiene la propuesta vigente.
