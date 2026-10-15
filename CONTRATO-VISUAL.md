# Contrato visual · Pulso de captura · v0.1

## Iteración v0.2 · consola de captura

La crítica visual del prototipo inicial detectó una composición intercambiable: titular amplio, tarjeta de llamada a la acción y lista de estados. La dirección A se expresa ahora como **instrumento de lectura**: retícula de enfoque, escala 00–100 ilustrativa, contador de secuencia y acción integrada. La escala es un recurso gráfico de demostración, no una medición de calidad ni un dato real.

Tres patrones conectan el recorrido: **consola de foco** para empezar, **mapa de secuencia** para orientar los dos pasos ilustrativos y **barra de acción contextual** para mantener visible “Continuar” durante la entrada. La revisión adopta una ficha con cabecera de registro y lectura por filas. En navegación principal, el destino activo ocupa una pastilla de tinta; durante la captura, el retorno superior y la barra contextual sustituyen esa navegación.

Se conservaron los tokens de color y tipografía de v0.1. El motivo de foco se compone en 350–400 ms al abrir la vista y se elimina con `prefers-reduced-motion`. La interfaz sigue siendo una maqueta con datos ilustrativos.

**Decisión:** el responsable seleccionó A · Pulso de captura el 15/10/2026. Esta selección autoriza construir el prototipo de dirección. La aprobación del paquete final y de las reglas funcionales sigue pendiente. **Modo visual:** `redesign-in-progress`. **Modo de trabajo:** `create` de prototipo aislado, con exploración secundaria de icono. **Plataforma del artefacto:** navegador; las pantallas representan una app móvil, sin afirmar paridad con iOS/Android nativos.

## Firma y uso

El marco C abierto y un punto de enfoque forman la marca. El check se retiró del icono porque podría comunicar que un registro ya fue aprobado; queda reservado para estados de éxito. La composición se presenta una vez por sesión de demostración. En uso repetido se prioriza acceso directo a la tarea.

## Tokens candidatos

| Rol | Valor | Uso |
| --- | --- | --- |
| Tinta / acción principal | `#10283F` | Texto principal, panel de marca y botones sólidos |
| Papel | `#F7F8F3` | Fondo de lectura |
| Blanco | `#FFFFFF` | Superficies de entrada y contraste |
| Lima | `#D8F178` | Acción sobre tinta, foco de marca |
| Lima oscuro | `#A6CF3B` | Acento sobre fondo claro, sujeto a contraste |
| Texto secundario | `#506172` | Descripciones |
| Borde | `#DCE3E3` | Separadores y controles |
| Error | `#AD3D35` | Texto y bordes de validación |

Los valores son de prototipo. El color no actúa como única señal de estado. La tipografía del prototipo usa la pila del sistema; la familia definitiva se elegirá tras pruebas de lectura en dispositivos reales. Espaciado base: 4 px; área táctil: 44 × 44 como mínimo; separación candidata: 8 px.

## Motion

- Primera presentación: composición del lockup hasta 300 ms; no retrasa la interfaz.
- Cambio de vista: 150–250 ms con continuidad espacial y foco en el nuevo título.
- Pulsación: feedback breve e inmediato, 100–160 ms.
- Reducción de movimiento: transiciones prácticamente inmediatas.
- Salida: vuelve a ingreso y limpia los campos del prototipo. El producto real requiere política de sesión y trabajo pendiente aprobada.

## Componentes demostrados

Button primario, secundario, terciario y disabled; IconButton; TextField con validación contextual; navegación inferior; cabecera con retorno; tarjeta de acción; estados confirmado/pendiente/atención; banner contextual y toast de resultado. El prototipo separa estilos comunes de contenido de pantalla. La implementación móvil deberá traducir estas intenciones a primitives nativos y validar sus APIs contra el stack real.

## Archivos de marca

| Archivo | Propósito |
| --- | --- |
| `assets/icono-pulso.svg` | Concepto principal oscuro |
| `assets/icono-pulso-claro.svg` | Variante clara |
| `assets/icono-pulso-monocromo.svg` | Variante monocroma transparente |
| `assets/icono-pulso-foreground.svg` | Primer plano del icono adaptable Android |
| `assets/icono-pulso-background.svg` | Fondo del icono adaptable Android |

Los SVG de color incluyen fondo cuadrado completo; el sistema operativo aplica la máscara del launcher. Se incluyen exportaciones PNG de 1024 px para revisión, más capas editables para icono adaptable Android. Las áreas seguras y las exportaciones de producción deben validarse por plataforma. El icono todavía necesita prueba de reconocimiento a 32/48/64 px y aprobación final.

## Límites funcionales

El prototipo usa datos ilustrativos y credenciales de demostración. No autentica, guarda, sincroniza ni representa permisos reales. El formulario de captura sólo muestra patrones de entrada, validación y revisión. Ningún campo o estado ilustrativo establece una regla del producto.

## Decisiones pendientes

1. Recorridos y acciones reales por vista, con visibilidad, permiso, precondición y resultado.
2. Dispositivos y plataformas objetivo; pruebas de tacto, texto dinámico y rendimiento.
3. Reglas de offline, sesión y trabajo pendiente.
4. Aprobación de icono, tipografía y tokens finales por Producto.
