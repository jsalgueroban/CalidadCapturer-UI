# Verificación del prototipo Pulso de captura v0.1

**Fecha:** 15/10/2026. **Alcance:** maqueta web aislada y assets; no app nativa ni operación real. **Fuente visual:** `CONTRATO-VISUAL.md` v0.1. **Modo visual:** `redesign-in-progress`.

## Recorrido comprobado

Playwright abrió `http://127.0.0.1:8765/prototype/` y ejecutó sin reintentos: ingreso vacío → errores junto a correo/contraseña → ingreso demostrativo → Inicio → Captura → validación de referencia → Revisión → confirmación de demostración → Perfil → salida. El resumen mostró la referencia escrita. El feedback confirmó explícitamente que no se guardaron datos. La salida regresó al ingreso.

El catálogo mostró estados vacío, error recuperable, acceso no disponible, carga y botón deshabilitado. Se comprobó por teclado que el primer foco llega a «Saltar al contenido», después al correo, y que los cambios de vista enfocan el título nuevo. `prefers-reduced-motion: reduce` redujo la duración calculada de animación a `0.01 ms`.

## Viewports y tacto

| Viewport | Desbordamiento horizontal | Resultado |
| --- | --- | --- |
| 375 × 667 | No | Ingreso y recorrido completos dentro de la maqueta |
| 390 × 844 | No | Controles de ingreso medidos |
| 768 × 1024 | No | Composición responsive sin desbordamiento |
| 1280 × 800 | No | Estudio y dispositivo en dos columnas |

En 390 × 844, «Ver contraseña» midió 45 × 44 px e «Ingresar» 274 × 48 px. Los controles ilustrados restantes requieren verificación táctil en dispositivo real antes de promoción nativa.

## Contraste de pares principales

| Par | Relación | Umbral relevante |
| --- | ---: | --- |
| Lima `#D8F178` / tinta `#10283F` | 12.00:1 | 4.5:1 texto |
| Texto secundario `#506172` / papel `#F7F8F3` | 5.97:1 | 4.5:1 texto |
| Eyebrow `#35655D` / papel `#F7F8F3` | 6.21:1 | 4.5:1 texto |
| Ayuda `#566A6D` / papel `#F7F8F3` | 5.35:1 | 4.5:1 texto |
| Placeholder `#BDCBD1` / control `#284258` | 6.28:1 | 4.5:1 texto |

Esta tabla registra pares principales comprobados matemáticamente; no sustituye auditoría automática completa ni prueba con lector de pantalla.

## Evidencia visual

- `login-default-375.png`, `login-validation-375.png`
- `home-375.png`, `components-375.png`
- `capture-375.png`, `review-375.png`
- `studio-login-1280.png`

## Dictamen

- **Test del prototipo:** aprobado para el recorrido demostrativo; `node --check prototype/app.js` y parsing XML de seis SVG sin errores.
- **QA visual del prototipo:** apto para revisión de dirección A en navegador. No certifica fidelidad móvil nativa, icono en launcher, tacto físico, VoiceOver/TalkBack ni rendimiento de release.
- **Done del paquete final:** no. Falta definir flujos reales y aprobar icono/tokens antes de integración móvil.

**Rollback:** revertir esta rama o retirar `prototype/`, `assets/icono-pulso*` y el contrato v0.1; no hay datos ni servicios afectados.
