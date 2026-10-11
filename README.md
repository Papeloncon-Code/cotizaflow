# CotizaFlow

Prototipo demostrativo para seguimiento de cotizaciones comerciales en pequeñas empresas.

## Estado

**Prototipo de validación, no apto para operaciones reales.** Incluye datos ficticios y persistencia local del navegador. No cuenta con autenticación, base de datos compartida, tareas programadas, IA conectada ni envío automático de mensajes.

## Ejecutar

Abre `public/index.html` en un navegador moderno. No requiere instalación ni API keys.

## Publicar con Cloudflare Workers

El repositorio está preparado para Workers Static Assets:

- `wrangler.jsonc` define `public/` como directorio de archivos estáticos.
- `package.json` incorpora Wrangler y scripts de despliegue.
- Comando de despliegue: `npx wrangler deploy`.
- No requiere comando de compilación para la página estática.

En el asistente de Cloudflare, selecciona este repositorio, deja el comando de compilación vacío, conserva `npx wrangler deploy` como comando de implementación y desactiva las compilaciones de vista previa para el primer despliegue.

## Funciones del prototipo

- Listar, buscar y filtrar cotizaciones.
- Crear y editar oportunidades.
- Identificar cotizaciones pendientes de seguimiento.
- Preparar un borrador de mensaje y copiarlo.
- Registrar manualmente un seguimiento.
- Exportar datos a CSV.

Los cambios se guardan en `localStorage` del navegador y no se sincronizan entre dispositivos.

## Documentación

- `docs/01-propuesta.md`: problema, alcance e hipótesis.
- `docs/02-flujo.md`: pasos del flujo, nodos, IA y aprobación humana.
- `docs/03-validacion.md`: investigación de mercado y entrevistas.
- `docs/04-pruebas.md`: pruebas manuales y límites conocidos.

## Próximos pasos

1. Publicar y revisar la demo.
2. Entrevistar a empresas del mismo segmento.
3. Medir la línea base con una empresa piloto.
4. Solo después diseñar autenticación, base de datos, ejecución programada e integraciones.

**Seguridad:** no introduzcas nombres, teléfonos, importes, documentos ni otra información real de clientes en la demo pública.
