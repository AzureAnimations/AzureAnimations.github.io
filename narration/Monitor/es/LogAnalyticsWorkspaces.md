# Narrator Script — Monitor · Log Analytics workspaces

**Source animation:** [LogAnalyticsWorkspaces.html](../../../journeys/Monitor/LogAnalyticsWorkspaces.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/azure-monitor/logs/log-analytics-workspace-overview>
- <https://learn.microsoft.com/azure/azure-monitor/logs/data-retention-configure>
- <https://learn.microsoft.com/azure/azure-monitor/logs/manage-access>
- <https://learn.microsoft.com/azure/azure-monitor/logs/daily-cap>

---

## Step 1 · Where do my logs live?

[curious] Contoso tiene una máquina virtual, una aplicación web y un Key Vault. Los tres escriben registros.
[600ms]
[calm] Antes de que alguien pueda usar esos registros, hay que responder tres preguntas. ¿Dónde están, quién puede leerlos y cuánto cuestan?
[600ms]
[confident] Esta lección responde las tres, empezando por el lugar donde viven los registros.

## Step 2 · Two stores: metrics and logs

[calm] Azure Monitor guarda los números en un almacén de métricas. Las métricas son valores que se muestrean a intervalos regulares.
[600ms]
[confident] Los registros de eventos van a los logs. Los logs son registros con marca de tiempo, que se guardan en un espacio de trabajo de Log Analytics y se consultan con KQL.
[600ms]
[reassuring] Las soluciones Insights, como Application Insights, ocultan la diferencia en los escenarios más comunes.

## Step 3 · A workspace is a box of tables

[calm] Un espacio de trabajo de Log Analytics es el almacén de datos. Cada tipo de registro va a su propia tabla, con columnas con nombre.
[600ms]
[curious] Azure Monitor crea las tablas que necesita para los datos de Azure, y tú creas tablas personalizadas para tus propios datos.
[600ms]
[confident] Los nombres de las tablas distinguen mayúsculas y minúsculas. El espacio de trabajo en sí no tiene un costo directo, porque pagas por los datos que ingieres y conservas.

## Step 4 · Three on-ramps feed the workspace

[calm] Los datos llegan al espacio de trabajo por tres vías de entrada. Los recursos de Azure usan configuraciones de diagnóstico.
[600ms]
[curious] Las máquinas usan un agente, y las apps usan Application Insights o una API.
[600ms]
[confident] Las reglas de recogida de datos pueden filtrar o transformar los datos en el camino. Cada una de esas vías tiene su propia lección.

## Step 5 · Each table gets a plan

[calm] Cada tabla tiene un plan. Los planes Analytics, Basic y Auxiliary cambian capacidad de consulta por menor costo de ingesta.
[600ms]
[confident] Eliges el plan de cada tabla, así que los registros ruidosos pueden ir en un plan más barato que tus datos clave.
[600ms]
[serious] Basic y Auxiliary solo funcionan con las tablas que los admiten, así que revisa primero la referencia de tablas.

## Step 6 · How long do logs stay?

[calm] Los datos recientes se quedan en retención interactiva, donde las consultas son rápidas.
[600ms]
[curious] Los datos más antiguos esperan en retención a largo plazo, de bajo costo, hasta que termina la retención total.
[600ms]
[reassuring] Configuras la retención por tabla, con un valor predeterminado del espacio de trabajo. Si la acortas, hay una espera antes de eliminar los datos, así que un error se puede deshacer.

## Step 7 · Two doors into the same data

[calm] Hay dos puertas a los mismos datos. Desde el espacio de trabajo, ves todas las tablas que tienes permiso de leer.
[600ms]
[curious] Desde un solo recurso, ves únicamente los registros de ese recurso.
[600ms]
[confident] El contexto de espacio de trabajo va bien para los equipos centrales. El contexto de recurso va bien para el equipo dueño de un recurso, que solo necesita acceso a ese recurso.

## Step 8 · Narrow it down: mode and tables

[calm] El modo de control de acceso decide si los dueños de los recursos pueden leer sus propios registros.
[600ms]
[confident] Aun así, el acceso a nivel de tabla puede bloquear una tabla en particular, con el control de acceso basado en roles de Azure.
[600ms]
[reassuring] Los roles integrados, como Log Analytics Reader y Log Analytics Contributor, cubren las necesidades más comunes.

## Step 9 · One workspace or several?

[calm] Empieza con un solo espacio de trabajo y usa la menor cantidad que cumpla tus requisitos.
[600ms]
[curious] Elige el factor que más te importe y verás el equilibrio. Divide solo por un requisito que puedas nombrar.
[600ms]
[serious] Los criterios pueden chocar entre sí, así que sopesa cada uno antes de agregar otro espacio de trabajo.

## Step 10 · Ingestion drives the bill

[calm] Pagas por los datos que ingieres y por el tiempo que los conservas.
[600ms]
[concerned] El costo depende de cuántos recursos monitorizas y de cuántos datos recopila cada uno.
[600ms]
[confident] Una transformación en una regla de recogida de datos filtra el ruido antes de que se facture, así que no pagas por los registros que descartas.

## Step 11 · Guardrails for the spend

[calm] Usa las palancas de costo en orden. Primero filtra el ruido y luego elige los planes de las tablas.
[600ms]
[confident] Después, comprométete con un nivel para obtener un descuento. Los niveles de compromiso se aplican a la ingesta de registros de Analytics.
[600ms]
[serious] Deja un límite diario solo como última red de seguridad. Cuando se alcanza, la recogida se detiene y la monitorización queda a oscuras hasta que se reinicia.

## Step 12 · All in one

[calm] Los registros viven en tablas, y las tablas viven dentro de un espacio de trabajo de Log Analytics.
[600ms]
[confident] El acceso, la retención y el costo se definen por espacio de trabajo o por tabla.
[600ms]
[proud] Con estas piezas claras, puedes responder con confianza las tres preguntas de Contoso.
