# Narrator Script — Monitor · Alerts and Action Groups

**Source animation:** [AlertsAndActionGroups.html](../../../journeys/Monitor/AlertsAndActionGroups.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/azure-monitor/alerts/alerts-overview>
- <https://learn.microsoft.com/azure/azure-monitor/alerts/alerts-types>
- <https://learn.microsoft.com/azure/azure-monitor/alerts/action-groups>
- <https://learn.microsoft.com/azure/azure-monitor/alerts/alerts-processing-rules>

---

## Step 1 · Something broke at 3 a.m.

[serious] El proceso de pago de Contoso Retail se cayó durante la noche. Mina, la ingeniera de guardia, estaba dormida, y nada se lo avisó.
[600ms]
[curious] Entonces, ¿a quién hay que avisar, cómo y cada cuánto?
[600ms]
[confident] Una alerta es Azure Monitor avisándole a una persona o a un script que tus datos indican que algo anda mal. Te enteras primero por Azure, no por los clientes.

## Step 2 · What can Azure Monitor watch?

[calm] Una alerta empieza con una señal, y cada tipo de señal tiene su propio tipo de alerta.
[600ms]
[confident] Las alertas de métricas evalúan números a intervalos regulares. Las alertas de búsqueda de registros ejecutan una consulta KQL. Las alertas del registro de actividad detectan un evento de la plataforma.
[600ms]
[reassuring] Las alertas de Prometheus ejecutan PromQL. Elegir el tipo correcto es la mitad del trabajo.

## Step 3 · Anatomy of an alert rule

[calm] Una regla de alerta vigila una señal en ciertos recursos. Cuando se cumple su condición, se dispara una alerta.
[600ms]
[confident] La alerta disparada llama entonces a los grupos de acciones que elegiste.
[600ms]
[curious] Si una regla vigila varios recursos, cada uno se evalúa por separado y dispara su propia alerta. Las alertas disparadas son de solo lectura y se guardan treinta días.

## Step 4 · A threshold: fixed or learned

[calm] Un umbral estático es un número que tú eliges. Úsalo cuando conoces el límite exacto.
[600ms]
[intrigued] Un umbral dinámico aprende el patrón habitual del historial de la métrica, así que el trabajo por lotes normal de las tres de la mañana deja de avisarle a alguien.
[600ms]
[confident] Puede alertar por encima de un límite superior o por debajo de uno inferior. Los números en pantalla son ficticios.

## Step 5 · Action group: who gets told, what runs

[curious] Un grupo de acciones es una lista guardada de notificaciones y acciones automatizadas. La regla de alerta solo apunta a él.
[600ms]
[confident] Los destinatarios de correo se verifican una sola vez con un código de acceso de un solo uso, así que prueba el grupo desde el portal antes de confiar en él.
[600ms]
[reassuring] Los webhooks seguros usan Microsoft Entra ID. Y los SMS y la voz no están disponibles en todos los países o regiones.

## Step 6 · One action group, many rules

[calm] Reglas distintas pueden apuntar al mismo grupo de acciones.
[600ms]
[confident] Dos reglas que avisan a los mismos tres ingenieros comparten un solo grupo. Cambias la lista de guardia una vez y todas las reglas se actualizan.
[600ms]
[reassuring] Los grupos de acciones también sirven a Azure Service Health y Azure Advisor, no solo a las reglas de alerta.

## Step 7 · One alert shape for every type

[curious] Antes, las alertas de métricas, de registros y del registro de actividad enviaban cargas distintas.
[600ms]
[confident] El esquema de alerta común le da al correo y a la automatización una sola estructura que leer. Se activa por destinatario en el grupo de acciones.
[600ms]
[calm] Usa la sección de esenciales para dirigir las alertas por grupo de recursos o por severidad. Las alertas de VM insights no lo admiten.

## Step 8 · The life of an alert

[calm] Mientras dura un problema, una alerta sin estado se sigue disparando cada vez que se cumple la condición.
[600ms]
[confident] Una alerta con estado se dispara una vez, no envía nada más, y luego manda una notificación de resuelta cuando la condición se normaliza.
[600ms]
[serious] Las alertas del registro de actividad siempre son sin estado. Aparte, tú marcas tu propia respuesta, y eso nunca cambia solo.

## Step 9 · Alert processing rules

[curious] Una regla de procesamiento modifica las alertas al dispararse. Puedes silenciar las notificaciones durante un mantenimiento, o agregar un grupo de acciones a muchas alertas a la vez.
[600ms]
[confident] Antes se llamaban reglas de acción. Su alcance debe estar en la misma suscripción que la regla.
[600ms]
[concerned] Una regla nueva o modificada puede tardar hasta treinta minutos en empezar a funcionar, así que ten eso en cuenta.

## Step 10 · Build an alert: pick a symptom

[excited] Hora de construir una. Elige qué salió mal.
[600ms]
[confident] Verás la señal, la condición y el grupo de acciones que usaría Contoso.
[600ms]
[calm] Las severidades y los nombres de los grupos son ejemplos, no reglas. Los presupuestos también pueden llamar a un grupo de acciones, pero solo notifican. No frenan el gasto.

## Step 11 · Page fewer people, page them better

[serious] La fatiga de alertas hace que se ignoren las alertas reales. Cada palanca filtra ruido antes de que llegue al teléfono de Mina.
[600ms]
[confident] Las severidades de cero a cuatro las defines tú. Reserva la voz y los SMS para los niveles más altos, y manda el resto por correo o a un panel.
[600ms]
[reassuring] El costo depende de lo que vigilas, así que consulta la página de precios de Azure Monitor para ver los valores actuales.

## Step 12 · Alerts and action groups: all in one

[calm] Una señal alimenta una regla. Una regla de procesamiento le da forma a la alerta, y un grupo de acciones la entrega.
[600ms]
[confident] Para los exámenes, A Z 104 incluye las reglas de alerta, los grupos de acciones y las reglas de procesamiento. A Z 305 cubre el diseño de soluciones de monitorización, y A I 200 cubre el KQL detrás de una alerta de búsqueda de registros.
[600ms]
[proud] Mantén el ruido bajo, y Mina dormirá tranquila con todo, menos con lo que importa.
