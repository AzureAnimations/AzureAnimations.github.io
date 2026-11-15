# Narrator Script — Database · Azure Data Explorer: Fast Analytics on Logs and Telemetry

**Source animation:** [AzureDataExplorer.html](../../../journeys/Database/AzureDataExplorer.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/data-explorer/data-explorer-overview>
- <https://learn.microsoft.com/azure/data-explorer/how-it-works>
- <https://learn.microsoft.com/azure/data-explorer/ingest-data-overview>
- <https://learn.microsoft.com/kusto/management/cache-policy>

---

## Step 1 · Billions of rows, one question

[calm] Los camiones, gateways y aplicaciones de Contoso Fleet nunca dejan de generar telemetría y registros. Las filas se acumulan todo el día, todos los días.
[600ms]
[curious] Entonces alguien hace una pregunta sencilla, y empieza a correr el reloj. ¿Qué tan rápido puedes obtener una respuesta de todos esos datos?
[600ms]
[confident] Contoso Fleet es ficticia. Azure Data Explorer es el servicio real que explica esta lección.

## Step 2 · What Azure Data Explorer is for

[calm] Azure Data Explorer es un servicio de análisis totalmente gestionado, pensado para grandes volúmenes de datos que llegan rápido.
[600ms]
[confident] Casi siempre son datos a los que solo se les agregan filas, y quieres explorarlos de forma interactiva, casi en tiempo real.
[600ms]
[reassuring] Según Microsoft Learn, donde mejor funciona es en el análisis de logs, las series temporales, IoT y el análisis exploratorio en general.

## Step 3 · Cluster, database, table, extent

[curious] Veamos cómo se organizan los datos. Un clúster contiene bases de datos, y las bases de datos contienen tablas con columnas tipadas.
[600ms]
[confident] Cada tabla se guarda en extensiones, que son fragmentos de filas comprimidos e indexados. Los datos se particionan por tiempo de ingestión.
[600ms]
[calm] Las extensiones empiezan siendo pequeñas, y el servicio las va combinando en segundo plano para formar otras más grandes.

## Step 4 · Compute and storage are separate

[curious] Por dentro, el trabajo está dividido. Los nodos del motor atienden tus consultas y guardan en caché los datos calientes.
[600ms]
[calm] Los nodos de gestión de datos se encargan de la ingestión. Cada extensión se guarda de forma persistente en Azure Blob Storage.
[600ms]
[confident] Como el almacenamiento y el cómputo están separados, cada uno escala por su cuenta. El cómputo solo guarda en caché lo que el almacenamiento ya tiene.

## Step 5 · Ways to get data in

[calm] Los datos llegan de fuentes como Event Hubs, IoT Hub, Event Grid y Kafka.
[600ms]
[confident] La ingestión en cola agrupa los datos en lotes para lograr mayor rendimiento, y es la opción recomendada en la mayoría de los casos.
[600ms]
[curious] En cambio, la ingestión en streaming prioriza la baja latencia: da resultados casi en tiempo real cuando cada tabla recibe pocos datos.

## Step 6 · Try it: ingestion path and hot cache

[encouraging] Ahora te toca a ti. Elige cómo llegan los datos y cuánto se mantiene caliente.
[600ms]
[curious] Mira cómo se mueven los medidores. Muestran la tendencia de cada compensación, nunca cifras reales.
[600ms]
[reflective] El comportamiento real depende del batching, las políticas de caché, tu carga de trabajo y el tamaño de tu clúster.

## Step 7 · Ask it in KQL

[curious] Para hacer preguntas usas Kusto Query Language, o KQL. Se lee de arriba hacia abajo.
[600ms]
[confident] Empiezas con una tabla y la vas encadenando con filtros y resúmenes. T-SQL también funciona sobre los mismos datos.
[600ms]
[calm] KQL es de código abierto y lo creó el equipo de Azure Data Explorer. Azure Monitor Logs y Application Insights también lo usan.

## Step 8 · Hot cache vs retention

[calm] Hay dos políticas que a menudo se confunden. La política de caché decide qué datos se mantienen rápidos en el SSD local.
[600ms]
[confident] La política de retención decide cuánto tiempo se pueden consultar los datos. Son independientes entre sí.
[600ms]
[serious] La retención define el rango consultable, mientras que la caché solo da prioridad a una parte de ese rango para ganar velocidad. Y ojo: la eliminación no ocurre en el momento exacto.

## Step 9 · Scale out, scale up

[calm] Cuando necesitas más capacidad, puedes escalar en dos direcciones. Escala hacia afuera agregando o quitando nodos del motor.
[600ms]
[confident] O escala hacia arriba cambiando el SKU de la VM, para tener más CPU y memoria. El almacenamiento escala por su cuenta.
[600ms]
[reassuring] Los clústeres nuevos usan el autoescalado optimizado por defecto. Reduce la escala cuando hay poco uso y la amplía cuando hay sobrecarga, dentro de los límites que definas.

## Step 10 · Security at a plain level

[serious] La seguridad se resume en tres ideas sencillas. Primero, los roles definen quién puede consultar o ingerir los datos.
[600ms]
[confident] Los endpoints privados mantienen el tráfico fuera de internet público, y las identidades gestionadas eliminan los secretos de tu configuración.
[600ms]
[calm] Los roles de datos se aplican en el ámbito de clúster, de base de datos o de tabla, y son independientes de los roles de recursos de Azure. También se admiten claves gestionadas por el cliente.

## Step 11 · Where Azure Data Explorer fits

[curious] ¿Dónde encaja dentro de la familia de datos de Azure? KQL es lo que une a toda la familia.
[600ms]
[confident] Elige según cuánto quieres gestionar tú mismo y según el trabajo que necesites. Sirve para análisis de telemetría, no para data warehouse ni para datos de aplicaciones.
[600ms]
[calm] Fabric Real-Time Intelligence es la ruta SaaS, y Azure Data Explorer es la ruta PaaS, con más control.

## Step 12 · Azure Data Explorer at a glance

[calm] Este es el panorama completo. Entran telemetría y registros a los que solo se agregan filas, y salen respuestas en KQL.
[600ms]
[confident] Tu trabajo es diseñar cuatro cosas: la ruta de ingestión, la caché y la retención, la escala y la seguridad.
[600ms]
[proud] Lo siguiente es aprender lo básico de KQL y luego comparar los demás almacenes de datos en el recorrido de Database.
