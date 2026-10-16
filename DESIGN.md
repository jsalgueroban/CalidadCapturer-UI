# Dirección visual · Pulso de captura

**Versión de paquete:** 0.9.0 · **Referencia visual:** prototipo v0.8 · **Plataforma destino:** React Native / Expo, iOS y Android · **Modo:** `redesign-in-progress`.

## Idea rectora

Calidad Capturer es una herramienta de campo: inicia una captura con una acción inequívoca, permite registrar el contexto y presenta una revisión legible. La identidad combina **carbón, coral y papel**, fotografía documental de trabajo real y tipografía Archivo Variable. La composición alterna escenas oscuras de orientación con superficies claras para introducir y revisar datos.

## Isotipo y assets

El isotipo deriva del símbolo anterior de la app y conserva su gesto de captura/inspección. La versión vigente es [SVG](assets/icono-capturer-v06.svg), con exportación [PNG de 1024 px](assets/icono-capturer-v06-1024.png). Los lockups [oscuro](assets/logo-capturer-ink-v06.svg) y [claro](assets/logo-capturer-light-v06.svg) tienen fondo transparente; no se encierran en un cuadrado negro en bienvenida o cabeceras. El icono para launcher y el lockup cumplen funciones distintas.

La bienvenida usa [fotografía documental](assets/welcome-documentary-v05.jpg) con atribución visible a David Brossard, CC BY-SA 2.0. La [caja de bananos](assets/banana-box-cutout-v04.png) ilustra la acción de captura; no representa un dato de inspección. Revisar licencias y sustitución de assets antes de distribuir la app.

## Tipografía

Archivo Variable define títulos, acciones y lectura. Títulos: peso 760, anchura condensada aproximada de 88 %, interletrado negativo moderado. Cuerpo: peso 400–500, altura de línea al menos 1,4. El prototipo web usa [WOFF2](assets/fonts/Archivo-Latin-Variable.woff2); Expo consume [TTF](assets/fonts/Archivo-Latin-Variable.ttf). La [licencia OFL](assets/fonts/OFL-Archivo.txt) acompaña ambas.

## Color

| Rol | Valor | Uso |
| --- | --- | --- |
| Tinta | `#232321` | Texto principal, botones primarios, escenas oscuras |
| Coral | `#F47E63` | Tarjeta de acción, progreso, énfasis puntual |
| Papel | `#F5F4F1` | Fondo de trabajo |
| Blanco | `#FFFFFF` | Superficies de lectura y formularios |
| Texto secundario | `#5E625E` | Ayuda y metadatos |
| Separador | `#DEDFDA` | Límites de campo y tarjeta |

Los valores y escalas adicionales están en [handoff/tokens.ts](handoff/tokens.ts). El coral no identifica por sí solo un estado: toda situación se nombra en texto.

## Composición

- Bienvenida: fotografía protagonista, marca compacta, promesa breve y una sola acción.
- Inicio: saludo personalizable, tarjeta coral de nueva captura y lista corta de inspecciones recientes. Las filas de ejemplo no simulan navegación a un detalle inexistente.
- Captura: el prototipo enseña un ejemplo de dos pasos. El recorrido de HU2654 usa Contexto → Cajas 1–5 → Revisión, según [su especificación](docs/recorridos-hu2654.md).
- Revisión: ficha de lectura, estado explícito «Sin guardar», edición secundaria y finalización ilustrativa.
- Cierre: resultado directo y salida al inicio; no afirma guardado ni transmisión.
- Navegación inferior sólo en vistas principales; retorno en cabecera dentro del flujo.

## Voz y movimiento

Hablarle a la persona y a su tarea. Usar verbos específicos: «Empezar captura», «Revisar datos», «Editar datos». Evitar títulos repetidos y explicaciones decorativas. «Hola de nuevo, John» y los identificadores de inspección son datos de demostración; en la app vienen de las fuentes reales.

Entrada/cambio de escena: 220 ms, opacidad y desplazamiento vertical de 8 px. Cierre: símbolo compuesto una vez en 350 ms. Pulsación: respuesta inmediata. Con movimiento reducido, omitir desplazamiento y acortar el cambio. Ninguna acción espera a la animación. Ver [docs/interacciones.md](docs/interacciones.md).

## Frontera

Este documento decide la apariencia de la propuesta. La matriz de pantallas y estados de HU2654 se propone en [docs/recorridos-hu2654.md](docs/recorridos-hu2654.md). Contrato funcional, permisos, manejo offline y capacidades de dispositivo se validan con la app. La traducción a primitives nativas conserva jerarquía, accesibilidad y estados, sin trasladar CSS o DOM a React Native.
