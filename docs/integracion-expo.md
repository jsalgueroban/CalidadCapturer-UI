# Integración React Native / Expo

Este repositorio entrega diseño y assets; no incluye una aplicación Expo ni declara versiones de Expo, React Native, navegación o paquetes de la app destino. Verificar sus dependencias instaladas antes de implementar componentes o importar APIs.

## Orden de adopción

1. Copiar `handoff/tokens.ts` y los assets indicados en `handoff/manifest.json` al proyecto móvil, conservando la licencia de Archivo y la atribución de la fotografía.
2. Configurar el icono del launcher con `assets/icono-capturer-v06-1024.png`. Validar máscara, área segura y lectura a 32/48/64 px en iOS y Android. El SVG es fuente vectorial, no el icono que se entrega al launcher.
3. Registrar `Archivo-Latin-Variable.ttf` con el mecanismo de fuentes que use la versión instalada de Expo. Los pesos del archivo de tokens usan valores que React Native acepta; el prototipo web afina pesos intermedios y `font-stretch` CSS. Probar pesos y anchuras en los dos sistemas y, si se requiere mayor fidelidad, preparar archivos estáticos específicos tras la prueba nativa.
4. Implementar tokens y primitives accesibles; luego compuestos, features y pantallas. Mantener servicios, persistencia y permisos fuera de los primitives.
5. Integrar navegación y datos reales. El historial consume la fuente aprobada; nombre de usuario, inspecciones y estados de ejemplo no se codifican en producción.
6. Validar en hardware real: tamaño dinámico de texto, VoiceOver/TalkBack, teclado, safe areas, contraste, movimiento reducido, icono y rendimiento de transiciones.

## Assets nativos

El PNG de icono y las imágenes raster pueden ser recursos estáticos de React Native. Los lockups SVG requieren el soporte SVG que ya exista en la app o exportaciones raster aprobadas; no se añade una dependencia desde este paquete. La foto CC BY-SA requiere atribución visible y revisión de uso al integrar. La ilustración de la caja es un recurso de composición, no una señal de estado.

## Contrato funcional por cerrar

La [matriz HU2654](recorridos-hu2654.md) define la presentación propuesta para Contexto, Cajas 1–5, Revisión, bandeja y actividades. Antes de conectarla se necesitan: fuente de identidad/sesión; entidad real de captura e inspección; reglas de campos; destinos de navegación; permisos por acción; comportamiento al salir con trabajo pendiente; política offline; guardado local, envío, reintento y sincronización; estados vacíos y de error por endpoint. Este paquete no fija esos contratos ni declara implementada ninguna de esas capacidades.

## Compatibilidad

Los tokens de tipo expresan intención en puntos de diseño. React Native interpreta tamaño y peso según plataforma y fuente. Ajustar métricas tras comparar capturas de iOS y Android con el tablero vigente. Las duraciones son objetivos de experiencia, no obligación de instalar una biblioteca de animación.
