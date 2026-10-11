# CotizaFlow — flujo de automatización previsto

1. **Entrada:** una persona registra la cotización con empresa, contacto mínimo, importe, estado, responsable y fecha de seguimiento.
2. **Validar:** comprobar campos obligatorios, formato y posibles duplicados.
3. **Guardar:** persistir el registro en la fuente autorizada y registrar cambios.
4. **Revisar vencimientos:** un proceso programado consulta oportunidades abiertas cuya fecha de seguimiento llegó.
5. **Filtrar:** excluir aceptadas, rechazadas, canceladas o ya gestionadas para esa fecha.
6. **Crear tarea:** asignar una acción al responsable.
7. **Preparar mensaje:** usar una plantilla; opcionalmente, IA limitada a hechos confirmados.
8. **Human in the Loop:** el responsable revisa, edita, aprueba o descarta. No se infieren descuentos, plazos ni condiciones.
9. **Contactar:** durante el piloto, el usuario envía manualmente por su canal habitual. La integración futura debe ser autorizada y respetar las reglas del canal.
10. **Registrar resultado:** guardar fecha, canal, resultado y próxima acción.
11. **Medir:** tiempo de seguimiento, contactos a tiempo, respuestas, conversión y errores.

## Qué requiere reglas y qué podría usar IA
- Reglas deterministas: fechas, estados, validación, duplicados y métricas.
- IA opcional: resumir notas o proponer un borrador de mensaje.
- Persona responsable: aprobar contacto y cualquier decisión comercial.

## Requisitos antes de producción
Autenticación, separación de datos por empresa, auditoría, idempotencia, zona horaria, reintentos seguros, alertas, backups, retención de datos y procedimiento manual alternativo.
