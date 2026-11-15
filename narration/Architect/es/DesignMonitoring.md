# Narrator Script — Architect · Design logging and monitoring

**Source animation:** [DesignMonitoring.html](../../../journeys/Architect/DesignMonitoring.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/azure-monitor/fundamentals/overview>
- <https://learn.microsoft.com/azure/azure-monitor/fundamentals/data-sources>
- <https://learn.microsoft.com/azure/azure-monitor/logs/data-platform-logs>
- <https://learn.microsoft.com/azure/azure-monitor/logs/workspace-design>
- <https://learn.microsoft.com/azure/azure-monitor/platform/diagnostic-settings>
- <https://learn.microsoft.com/azure/azure-monitor/alerts/alerts-types>
- <https://learn.microsoft.com/azure/azure-monitor/alerts/action-groups>
- <https://learn.microsoft.com/azure/sentinel/overview>

---

## Step 1 · An outage, and logs in five places

[calm] Las órdenes de Contoso fallaron de la noche a la mañana, y las pistas están dispersas en varios tipos de telemetría.
[600ms]
[curious] Las señales de plataforma, recurso, identidad, sistema operativo invitado y aplicación no llegan todas por la misma ruta de recopilación.
[600ms]
[reassuring] Antes de elegir un panel de control, identifica qué produce cada fuente y cómo esos datos llegarán al diseño de monitorización.

## Step 2 · Azure Monitor: metrics and logs

[calm] Azure Monitor funciona tanto con métricas numéricas como con registros de registro detallados, que se muestran como dos caminos complementarios.
[600ms]
[curious] Las métricas ayudan a Contoso a detectar un cambio rápidamente; los registros proporcionan el contexto necesario para investigarlo.
[600ms]
[reassuring] Usa ambos conjuntos: detecta el síntoma con una alerta adecuada y luego sigue los registros para entender qué ocurrió.

## Step 3 · Log Analytics: one workspace or many?

[calm] Un espacio de trabajo de Log Analytics ofrece a Contoso un lugar para consultar los registros recopilados.
[600ms]
[curious] Empieza con el menor número de espacios de trabajo que permitan los requisitos, y luego examina las razones que se muestran para separarlos.
[600ms]
[reassuring] La residencia, la propiedad y otros límites pueden justificar una separación, pero crear un espacio de trabajo para cada fuente también genera sobrecarga de gestión y consultas.

## Step 4 · Table plans: pay for the query you need

[calm] Cada tabla tiene un plan, y el plan adecuado depende de cómo Contoso pretenda usar los datos.
[600ms]
[curious] Compara Analytics para monitorización regular, Basic para la resolución de problemas y Auxiliary para registros detallados que se consultan con menos frecuencia.
[600ms]
[reassuring] Mira las necesidades de ingestión y consulta juntas, en lugar de elegir un plan solo porque su tasa de ingestión parece más baja.

## Step 5 · Route logs with diagnostic settings

[calm] Un ajuste de diagnóstico redirige los registros y métricas de un recurso a los destinos que se muestran aquí.
[600ms]
[curious] Un espacio de trabajo soporta investigación, almacenamiento soporta retención y Event Hubs soporta una integración en streaming.
[600ms]
[reassuring] Elige los destinos según el trabajo que debe realizar cada copia, y recuerda que los registros de recursos necesitan su colección y enrutamiento configurados.

## Step 6 · Application Insights and VM insights

[calm] La aplicación de tienda y la máquina virtual por lotes necesitan diferentes tipos de instrumentación.
[600ms]
[curious] Application Insights sigue el comportamiento de la aplicación, mientras que VM Insights recopila las señales a nivel de máquina necesarias para entender el servidor.
[600ms]
[reassuring] Sus datos pueden reunirse en el mismo espacio de trabajo, conectando un síntoma de aplicación con la infraestructura de la que depende.

## Step 7 · Alerts and action groups

[calm] La regla de alerta decide cuándo una señal es lo suficientemente importante como para actuar.
[600ms]
[curious] El grupo de acción se encarga del siguiente paso: notificar a la gente o invocar una respuesta automática.
[600ms]
[reassuring] Mantén esas responsabilidades separadas, para que Contoso pueda reutilizar la ruta de respuesta eligiendo el tipo de regla adecuada para cada señal.

## Step 8 · Microsoft Sentinel: the SIEM on your workspace

[calm] Microsoft Sentinel añade capacidades de detección y respuesta de seguridad alrededor de los datos del espacio de trabajo.
[600ms]
[curious] Sigue la secuencia desde la recogida de señales hasta la detección de amenazas, la investigación de incidentes y la realización de una respuesta.
[600ms]
[reassuring] Esto es más que otra pantalla de búsqueda de registros: el diseño debe soportar el flujo de trabajo de detección y gestión de incidentes del equipo de seguridad.

## Step 9 · All in one: from signal to action

[calm] El diseño de monitorización ahora conecta las señales con las acciones en lugar de dejar la evidencia en lugares separados.
[600ms]
[curious] Contoso ha elegido qué recoger, cómo enrutarlo, dónde retenerlo y qué responderá.
[600ms]
[reassuring] Estas cuatro decisiones hacen posible la resolución de problemas; después, decide cómo se recuperará el negocio cuando un incidente se convierta en un fracaso.

