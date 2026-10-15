# Slice: prototipo de identidad móvil Pulso de captura

## Contexto

- **Intención:** convertir la dirección A seleccionada en un prototipo móvil navegable y paquete inicial de icono.
- **Tipo:** spike de diseño implementado en un artefacto web aislado.
- **Perfil:** contrato `lite`; cambio `standard` por interacción visible en varias vistas.
- **Fuente:** petición del usuario, selección A del 15/10/2026, `DESIGN.md` y `CONTRATO-VISUAL.md`.
- **Owner de producto y diseño:** John; implementación del prototipo: este slice; operación: no aplica.
- **Skills Banasan activadas:** Dona Asistente, Software Delivery, Requirements Discovery, Product Design, UI Engineering, Frontend y Visual QA. Mobile se usó para el límite de traslación a nativo. UI/UX Pro Max, Awesome DESIGN.md y Emil aportaron criterio registrado en `referencias-aplicadas.md`.
- **Descartadas:** arquitectura/backend/contratos/seguridad de aplicación, porque no hay servicios, datos reales ni permisos; Package Engineering, porque no se agregó dependencia runtime; librerías SIAL, porque no se modifica una librería ni software SIAL.

## Frontend y dirección

- **Modo dominante:** `create` de prototipo; secundario `explore` para variantes de icono.
- **Modo visual:** `redesign-in-progress`; la dirección A fue seleccionada, los assets/tokens finales esperan aprobación.
- **Stack:** HTML, CSS y JavaScript estáticos, sin dependencias runtime. La plataforma de producción no se infiere de esta maqueta.
- **Patrones creados:** ingreso, navegación, captura ilustrativa, revisión, perfil/salida, catálogo de componentes y estados.
- **Estados:** default, validación, disabled, loading, empty, error y forbidden visibles; la maqueta no ejecuta servicios, por lo que loading/error/forbidden son ejemplos estáticos.
- **Viewports comprobados:** 375×667, 390×844, 768×1024 y 1280×800.

## Preflight de rama

- **Base:** `main` sincronizada; árbol limpio.
- **Rama:** `feature/capturer-identidad-movil-pulso` creada con `prepare_slice_branch.py`.

### Delegación

- **Evaluación router:** `SELF`. Slice: prototipo aislado de un repositorio con estado local y contexto visual iterativo; transferirlo a un agente independiente tendría un costo cercano al trabajo directo. Reevaluar para revisión de implementación móvil o comparación técnica extensa.

## Entrega

- `prototype/`: maqueta interactiva con datos ilustrativos y estilos propios.
- `assets/icono-pulso*`: cinco SVG editables y cinco PNG de 1024 px, incluidas capas adaptables.
- `CONTRATO-VISUAL.md`: tokens candidatos, motion, estados y decisiones pendientes.
- `evidence/pulso-v01/`: capturas y dictamen de QA.

## Aceptación del slice

- **Dado** un correo inválido o campos vacíos, **cuando** se intenta ingresar, **entonces** aparecen errores junto a los campos y se conserva el foco útil.
- **Dado** un ingreso demostrativo válido, **cuando** se continúa, **entonces** la vista Inicio aparece y el foco pasa a su título.
- **Dado** una referencia ilustrativa, **cuando** se continúa a revisión, **entonces** el valor aparece en el resumen y confirmar informa que no se guardaron datos.
- **Dado** movimiento reducido, **cuando** cambia la vista, **entonces** la transición se vuelve prácticamente inmediata.
- **Dado** el paquete de iconos, **cuando** se ejecuta el gate, **entonces** los SVG parsean y los PNG miden 1024×1024.

## Validaciones ejecutadas

- **Gate bloqueante:** `powershell -File scripts/verify-prototype.ps1` → `Verified 5 SVG and 5 PNG assets at 1024x1024. Prototype gate passed.` (exit 0).
- **QA interactiva:** recorrido Playwright sin reintentos; resultados y capturas en `evidence/pulso-v01/qa.md`.

## Dictamen de certificación

- Test: Aprobado
- QA: Aprobado para revisión de la maqueta web.
- Done: No

La construcción de la identidad móvil continúa con validación del paquete final y reglas funcionales. Este dictamen no certifica la app nativa.

## Validaciones omitidas

- Hardware móvil y launcher: no hay build nativa ni dispositivos objetivo confirmados.
- Autenticación, permisos, persistencia y sincronización: no forman parte de la maqueta.

## Rollback

- Revertir la rama retira el prototipo; no existen migraciones, servicios ni datos que preservar.

## Riesgos residuales

- No se ha probado en hardware móvil ni contra flujos, permisos y datos reales.
- Icono/tokens requieren aprobación final y prueba de launcher.

## Decisiones pendientes

- Producto: aprobar icono y tokens definitivos.
- Producto y Mobile: concretar acciones, estados offline y reglas de sesión.
