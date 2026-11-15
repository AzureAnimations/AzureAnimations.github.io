# Narrator Script — Security · Microsoft Sentinel basics

**Source animation:** [SentinelBasics.html](../../../journeys/Security/SentinelBasics.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/sentinel/overview>
- <https://learn.microsoft.com/azure/sentinel/connect-data-sources>
- <https://learn.microsoft.com/azure/sentinel/automate-incident-handling-with-automation-rules>
- <https://learn.microsoft.com/azure/sentinel/microsoft-sentinel-defender-portal>

---

## Step 1 · Thousands of alerts, one team

[calm] Las identidades, la nube, la red y los dispositivos de Contoso generan alertas todo el tiempo, y un equipo de seguridad pequeño no puede leerlas todas.
[600ms]
[curious] Necesita un SIEM para ver, que recopile datos de seguridad y detecte amenazas, y un SOAR para actuar, que automatice la respuesta de rutina.
[600ms]
[confident] Microsoft Sentinel es un SIEM nativo de la nube que además es una plataforma SOAR. Contoso y todos los datos de aquí son ficticios.

## Step 2 · Connectors bring the signals in

[calm] Sentinel empieza vacío. Un conector de datos toma las señales de una fuente y las deja en un solo lugar.
[600ms]
[confident] Los conectores suelen venir en las soluciones del content hub, así que instalas la solución y luego configuras su conector.
[600ms]
[serious] El soporte de la API heredada HTTP Data Collector termina el 14 de septiembre de 2026, así que las fuentes personalizadas deberían usar la Logs Ingestion API o el Codeless Connector Framework.

## Step 3 · One workspace holds the data

[curious] Sentinel no es una base de datos aparte. Lo activas sobre un espacio de trabajo de Log Analytics.
[600ms]
[calm] Cada conector escribe en las tablas de ese espacio de trabajo, y la retención y la facturación dependen de él.
[600ms]
[reflective] Por eso importa dónde pones el espacio de trabajo, y volveremos a eso en el paso de diseño.

## Step 4 · Analytics rules look for threats

[calm] Una regla de análisis es una pregunta permanente que se le hace a tus datos. Cuando la respuesta es sí, genera una alerta.
[600ms]
[confident] Cada tipo de regla pregunta a su manera, y lo mejor es empezar con una plantilla de regla de una solución del content hub y luego ajustarla.
[600ms]
[curious] En el portal de Defender, Microsoft recomienda usar detecciones personalizadas para crear reglas nuevas.

## Step 5 · A match becomes an alert with entities

[calm] Cuando la consulta de la regla devuelve resultados por encima del umbral, la regla genera una alerta con una severidad que va de informativa a alta.
[600ms]
[confident] El mapeo de entidades le indica a Sentinel qué campos son la cuenta, la dirección IP o el host.
[600ms]
[impressed] Esas entidades son la base para agrupar incidentes, para el grafo de investigación y para la automatización.

## Step 6 · Related alerts group into one incident

[curious] Las alertas sobre las mismas entidades se correlacionan en un solo incidente.
[600ms]
[confident] Es un solo expediente con una severidad, un estado y un responsable, en lugar de un montón de alertas sueltas.
[600ms]
[reassuring] También guarda comentarios, tareas y un registro de actividad, para que todo el equipo trabaje desde un mismo lugar.

## Step 7 · Investigate the incident, hunt for the next one

[calm] El grafo de investigación muestra qué está conectado, en orden cronológico, para que el analista vea hasta dónde llegó un ataque.
[600ms]
[curious] La búsqueda proactiva es distinta. Las consultas de búsqueda hacen preguntas antes de que salte cualquier alerta, y los marcadores guardan la evidencia que encuentres.
[600ms]
[confident] Los notebooks amplían la búsqueda con Python, aprendizaje automático y visualización.

## Step 8 · Automation does the routine work

[calm] Una regla de automatización reacciona a un incidente al instante, en el orden que definas. Puede etiquetar, asignar o cerrar incidentes sin ningún playbook.
[600ms]
[confident] Cuando una tarea necesita más pasos, se la pasa a un playbook, que se crea como un flujo de trabajo de Azure Logic Apps.
[600ms]
[serious] Asociar playbooks directamente a las reglas de análisis es el método antiguo. Mejor usa una regla de automatización.

## Step 9 · Follow one attack through Sentinel

[curious] Sigamos paso a paso la toma de control de una cuenta de Contoso, ficticia, y veamos qué hace Sentinel en cada uno.
[600ms]
[calm] Llega una señal, se dispara una regla, se forma un incidente y la automatización responde.
[600ms]
[reflective] Deshabilitar la cuenta es contención, no el final. El analista todavía investiga hasta dónde se extendió.

## Step 10 · Watch the whole picture: workbooks and UEBA

[calm] Los workbooks convierten los datos en paneles para el equipo. Las plantillas integradas aparecen en cuanto conectas una fuente de datos, y también puedes crear las tuyas.
[600ms]
[intrigued] UEBA aprende qué es normal para cada usuario y cada host, y compara su actividad con su propio historial, con sus pares y con la organización.
[600ms]
[confident] Luego asigna una puntuación a los casos raros. Actívalo y conecta fuentes como Microsoft Entra ID.

## Step 11 · Design it: placement, cost, tenants, access

[calm] Cuatro decisiones definen un diseño de Sentinel: dónde vive el espacio de trabajo, qué ingieres y conservas, qué inquilinos cubres y quién puede hacer qué.
[600ms]
[confident] Piensa en Sentinel cuando tengas que detectar amenazas y responder a ellas en muchas fuentes. Para la salud operativa, piensa en las alertas de Azure Monitor.
[600ms]
[reassuring] Asigna los roles de Sentinel en el grupo de recursos que contiene el espacio de trabajo.

## Step 12 · Sentinel is moving to the Defender portal

[curious] Sentinel tiene casa nueva. Ya está disponible de forma general en el portal de Microsoft Defender, con el mismo espacio de trabajo y el mismo KQL.
[600ms]
[serious] El portal de Azure deja de admitirlo después del 31 de marzo de 2027, así que los clientes actuales deberían planificar la transición.
[600ms]
[calm] La automatización se comporta un poco distinto, porque los títulos de los incidentes pueden cambiar después de la correlación. Usa los nombres y las etiquetas de las reglas de análisis como condiciones.

## Step 13 · Signals to incidents to action

[calm] Sentinel reduce miles de señales sin procesar a unos pocos incidentes sobre los que alguien puede actuar.
[600ms]
[confident] Lo logra en cuatro pasos: conectar los datos, detectar con reglas, investigar y buscar amenazas, y luego automatizar la respuesta.
[600ms]
[proud] Sentinel no aparece por nombre en ninguna de las dos guías de estudio, pero A Z 305 te pide recomendar registro y monitoreo, y A Z 104 cubre los registros y las alertas de Azure Monitor.
