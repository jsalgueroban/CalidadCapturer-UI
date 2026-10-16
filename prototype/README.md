# Prototipo navegable

La versión vigente es **v0.8**: tipografía Archivo Variable local y jerarquía ampliada para títulos, campos, historial y acciones. `v8.css` contiene esta iteración; los estilos previos permanecen como historia incremental.

Abrir `index.html` en un navegador o iniciar un servidor estático desde la raíz del repositorio:

```powershell
python -m http.server 8765
```

Luego abrir `http://127.0.0.1:8765/prototype/`.

Recorrido: **Comenzar** → completar un correo válido y cualquier contraseña → **Ingresar** → **Empezar captura** → escribir referencia → **Revisar datos** → **Finalizar ejemplo** → **Volver al inicio** → Perfil → **Cerrar sesión**. La pestaña **Elementos** muestra botones y estados. Los datos no salen del navegador ni se persisten.

Este artefacto es una maqueta web móvil aislada. No es implementación Expo/React Native ni conexión con servicios reales.
