# Interacciones

La [matriz de acciones, estados, transiciones y toast](docs/interacciones.md) es el contrato vigente. Recorrido del prototipo:

`Bienvenida → Ingreso → Inicio → Captura → Revisión → Cierre → Inicio`

El formulario conserva lo escrito al volver desde Revisión. La referencia es obligatoria sólo en esta demostración y se valida junto al campo. El cierre indica que no se guardaron datos. Salir limpia la sesión simulada. Estas reglas no establecen autorización, persistencia ni sincronización en la app móvil.
