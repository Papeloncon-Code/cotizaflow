# CotizaFlow — pruebas manuales

- [ ] Abrir index.html en Chrome o Edge.
- [ ] Confirmar que se identifica claramente como demo y que no envía mensajes.
- [ ] Buscar una cotización y filtrar por estado.
- [ ] Crear una cotización válida y confirmar que aparece en la tabla.
- [ ] Intentar guardar sin campos obligatorios.
- [ ] Abrir un registro y cambiar estado, fecha o notas.
- [ ] Confirmar que una cotización cerrada no aparece como pendiente.
- [ ] Preparar un borrador y comprobar que no inventa condiciones.
- [ ] Copiar el borrador y confirmar que no se presenta como enviado.
- [ ] Registrar un contacto y verificar el historial.
- [ ] Ejecutar la revisión manual y confirmar que no envía mensajes.
- [ ] Exportar CSV y comprobar encabezados y acentos.
- [ ] Recargar y verificar persistencia local.
- [ ] Abrir en otro navegador y comprobar que los datos no se sincronizan.
- [ ] Revisar en móvil.
- [ ] Compartir públicamente solo con datos ficticios.

## Limitaciones conocidas
La persistencia usa localStorage: no hay copia de seguridad, acceso multiusuario ni sincronización. La revisión es manual; no existe un proceso programado. El prototipo no es apto para operaciones reales.


## Pruebas E2E automatizadas

Workflow: [CotizaFlow public smoke tests](https://github.com/Papeloncon-Code/cotizaflow/actions/workflows/cotizaflow-smoke.yml)

Última ejecución completada durante la validación inicial: **3 pruebas pasadas** en Chromium contra la URL pública:
- Respuesta HTTP 200, título, aviso de demo y botón de alta.
- Crear cotización, registrar contacto y verificar persistencia local tras recargar.
- Descargar CSV y verificar el nombre de archivo esperado.

Estas pruebas verifican el comportamiento básico del frontend desplegado. No validan autenticación, multiusuario, base de datos remota, tareas programadas, integración real de WhatsApp/correo ni impacto comercial. Las pruebas se ejecutan en GitHub Actions cuando cambian los archivos cubiertos por el workflow o mediante ejecución manual.
