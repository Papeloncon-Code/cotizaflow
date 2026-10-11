# CotizaFlow

Prototipo demostrativo para seguimiento de cotizaciones comerciales en pequeñas empresas.

## Estado

**Prototipo de validación, no apto para operaciones reales.** Incluye datos ficticios y persistencia local del navegador. No cuenta con autenticación, base de datos compartida, tareas programadas, IA conectada ni envío automático de mensajes.

## Ejecutar

Abre `index.html` en un navegador moderno. No requiere instalación ni API keys.

## Publicar la demo

1. Importa este repositorio en Vercel o Cloudflare Pages.
2. Usa la raíz del repositorio como directorio raíz.
3. No configures comando de build ni variables de entorno: es una web estática.
4. Comprueba la URL en escritorio y móvil. Mantén únicamente datos ficticios.

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