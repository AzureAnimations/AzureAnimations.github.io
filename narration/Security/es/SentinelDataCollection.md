# Narrator Script — Security · Microsoft Sentinel data collection: workspaces, connectors, Syslog, CEF and Windows events

**Source animation:** [SentinelDataCollection.html](../../../journeys/Security/SentinelDataCollection.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/sentinel/quickstart-onboard>
- <https://learn.microsoft.com/azure/sentinel/roles>
- <https://learn.microsoft.com/azure/sentinel/sentinel-solutions-deploy>
- <https://learn.microsoft.com/azure/sentinel/cef-syslog-ama-overview>

---

## Step 1 · Sentinel is blind until data arrives

[calm] Contoso acaba de activar Microsoft Sentinel, pero su espacio de trabajo está vacío.
[600ms]
[serious] Sentinel solo puede detectar lo que ve. Sin datos, no hay nada de qué alertar.
[600ms]
[determined] Por eso Priya empieza con un conector de datos. Esta lección cubre la recopilación de eventos en Sentinel, de las habilidades de S C 500. Todos los nombres de aquí son ficticios.

## Step 2 · Create the workspace and add Microsoft Sentinel

[calm] Sentinel se ejecuta sobre un espacio de trabajo de Log Analytics. Priya crea el espacio de trabajo en un grupo de recursos y luego le agrega Microsoft Sentinel.
[600ms]
[confident] Puedes usar Sentinel en más de un espacio de trabajo, pero los datos quedan aislados en un solo espacio de trabajo.
[600ms]
[reassuring] Para habilitar Sentinel necesitas el rol de Contributor en la suscripción que contiene el espacio de trabajo.

## Step 3 · Roles on the workspace

[calm] Los roles de Azure controlan quién puede hacer qué en Sentinel. Elige el rol más bajo que sirva para el trabajo.
[600ms]
[confident] Asígnalo en el grupo de recursos del espacio de trabajo, para que el acceso cubra el espacio de trabajo y nada más.
[600ms]
[reflective] Playbook Operator y Automation Contributor son roles aparte para la automatización, y no se ven en esta lección.

## Step 4 · Content hub: install, then configure

[curious] El content hub empaqueta conectores, reglas y workbooks en soluciones.
[600ms]
[confident] Para usar un elemento de contenido, instalas toda la solución. Al instalar una solución se agrega el conector, pero todavía tienes que configurarlo.
[600ms]
[reassuring] Para instalar y administrar soluciones se necesita el rol Microsoft Sentinel Contributor en el grupo de recursos.

## Step 5 · Connectors for Azure resources

[calm] Las fuentes de Azure tienen conectores integrados. Aquí vemos la actividad de la suscripción, los registros de Microsoft Entra ID y las alertas de Defender for Cloud.
[600ms]
[serious] Ojo: los registros de inicio de sesión de Entra requieren una licencia Entra ID P uno o P dos.
[600ms]
[curious] El conector de Defender for Cloud basado en tenant está en vista previa, y el basado en suscripción es el conector heredado.

## Step 6 · Syslog from Linux machines

[calm] Los servidores Linux de Priya escriben en syslog. El conector instala en ellos el Azure Monitor Agent.
[600ms]
[confident] Después, una regla de recopilación de datos decide qué se recopila, por facility y por severidad mínima.
[600ms]
[curious] Si eliges un nivel mínimo, también se recopilan todas las severidades superiores. Si eliges el nivel de error, también obtienes crítico, alerta y emergencia.

## Step 7 · CEF from appliances

[calm] Los appliances, como los firewalls, envían mensajes en Common Event Format. Los mandan a un reenviador de logs en Linux, que ejecuta el agente por ellos.
[600ms]
[curious] CEF es una extensión de Syslog creada para herramientas SIEM. Agrega un encabezado con el proveedor, el producto, la versión, la clase de evento, la severidad y el ID, además de extensiones.
[600ms]
[confident] Los mensajes Syslog normales caen en la tabla Syslog, mientras que los de CEF caen en CommonSecurityLog.

## Step 8 · Windows Security events

[calm] Los eventos de seguridad de Windows pueden venir directamente de cada máquina con una regla de recopilación de datos, o por Windows Event Forwarding hacia un recopilador.
[600ms]
[encouraging] Prueba ambos caminos y compáralos.
[600ms]
[confident] El agente filtra en el origen, así que solo se ingieren los eventos que elijas. Las máquinas fuera de Azure necesitan primero Azure Arc.

## Step 9 · Custom log tables

[calm] Cuando ninguna tabla integrada encaja, Contoso crea una tabla personalizada a partir de un registro de muestra.
[600ms]
[confident] Luego envía datos a esa tabla con una regla de recopilación de datos.
[600ms]
[curious] Los datos pueden llegar por la Logs Ingestion API, o desde archivos de texto con el conector Custom Logs, que está en vista previa. Necesitas un registro de muestra para definir el esquema.

## Step 10 · Retention and table plans

[calm] No todos los datos necesitan el mismo tratamiento. Mantén los datos recientes en la capa activa, para alertas y búsqueda de amenazas.
[600ms]
[confident] Guarda los datos más antiguos en almacenamiento a largo plazo de bajo costo, y define la retención por tabla.
[600ms]
[reflective] En el portal de Defender administras las tablas de Sentinel y las personalizadas, mientras que las tablas con el plan Basic se administran desde el espacio de trabajo de Log Analytics.

## Step 11 · Query Purview Audit in Defender XDR

[curious] Los registros de auditoría de la actividad de Microsoft 365 vienen de Microsoft Purview Audit. Priya accede a ellos desde el portal de Defender, con filtros o con KQL.
[600ms]
[serious] Primero hay que activar la auditoría en el portal de Microsoft Purview.
[600ms]
[confident] Para abrir la página de auditoría, necesitas el rol View-Only Audit Logs o Audit Logs en Exchange Online.

## Step 12 · Recap

[calm] La recopilación es una cadena: espacio de trabajo, conector, regla, tabla y retención. Si falta un eslabón, los datos no llegan o no se conservan.
[600ms]
[confident] Cada eslabón corresponde a una parte del objetivo de recopilación de eventos que acabas de recorrer.
[600ms]
[proud] Las habilidades de S C 500 cambian con el tiempo, así que lee siempre la guía de estudio vigente en Microsoft Learn.
