# Narrator Script — Monitor · Application Insights and OpenTelemetry

**Source animation:** [AppInsightsAndOtel.html](../../../journeys/Monitor/AppInsightsAndOtel.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/azure-monitor/app/opentelemetry-sampling>
- <https://learn.microsoft.com/azure/azure-monitor/app/opentelemetry-enable>
- <https://learn.microsoft.com/azure/azure-monitor/app/app-insights-overview>

---

## Step 1 · A slow checkout across five services

[calm] Un cliente de Contoso toca Pagar, y la solicitud pasa por cinco servicios distintos.
[600ms]
[concerned] Tarda dos coma cuatro segundos, que es lento, aunque cada servicio se ve sano cuando lo revisas por separado.
[600ms]
[curious] Entonces, ¿dónde se fue el tiempo? Esa es la pregunta que seguiremos durante toda la lección, con esta misma solicitud de pago.

## Step 2 · Three signals, one trace ID

[calm] La telemetría viene en tres tipos. Las trazas siguen una sola solicitud, las métricas cuentan lo que pasa con el tiempo, y los registros guardan lo que dijo el código.
[600ms]
[curious] Por separado, cada una es solo un montón de datos. Un ID de traza compartido es lo que te permite saltar de una traza a sus registros.
[600ms]
[impressed] Esa correlación convierte tres montones en una sola historia, porque el ID de un span coincide con el ID de sus líneas de registro.

## Step 3 · The trace ID travels with the request

[calm] Sigue un camino a través de la traza. Cada servicio agrega su propio span y luego pasa el contexto de la traza en el encabezado traceparent.
[600ms]
[confident] El ID de traza sigue igual, mientras que el ID del padre cambia en cada salto. Así es como las piezas se mantienen enlazadas.
[600ms]
[reassuring] El encabezado viene del estándar W Three C Trace Context, y las bibliotecas de OpenTelemetry lo leen y lo escriben por ti.

## Step 4 · Spans become a timeline

[calm] Un span es una operación con tiempo medido. Tiene un inicio, una duración y un padre.
[600ms]
[curious] Alinea los spans de una traza en un eje de tiempo y obtienes una cascada. El anidamiento muestra quién llamó a quién.
[600ms]
[confident] Un span padre dura por lo menos lo mismo que los hijos a los que espera, así que hijos lentos dan padres lentos.

## Step 5 · OpenTelemetry: instrument once, export anywhere

[calm] OpenTelemetry es un estándar neutral con respecto a los proveedores. La instrumentación crea la telemetría, y el SDK la procesa.
[600ms]
[confident] Después, un exportador la envía a un backend, como Application Insights.
[600ms]
[optimistic] Como el formato es un estándar, cambiar de backend es cambiar el exportador. No tienes que volver a instrumentar la app.

## Step 6 · Auto-instrument first, add manual spans

[calm] Empieza con la instrumentación automática. Las bibliotecas de HTTP, bases de datos y mensajería ya crean spans por ti.
[600ms]
[confident] Agrega spans o atributos manuales solo en los pasos que de verdad son tuyos, como una regla de precios en el código del pago.
[600ms]
[serious] Una distro incluye la configuración ya lista. Eso sí, no inicialices dos distros en la misma app.

## Step 7 · Connect the app, land the data

[calm] Application Insights es la función de Azure Monitor para la monitorización del rendimiento de aplicaciones.
[600ms]
[confident] Una cadena de conexión le dice a tu app a dónde enviar su telemetría. Application Insights guarda esos datos en un espacio de trabajo de Log Analytics.
[600ms]
[curious] Como los datos llegan a un espacio de trabajo, puedes consultarlos con KQL, que tiene su propio recorrido.

## Step 8 · Application map: where is the trouble?

[curious] El mapa de aplicación dibuja cada componente con su nombre de rol en la nube, y las llamadas entre ellos.
[600ms]
[calm] El estado de salud se ve de un vistazo, así que un nodo lento o con fallos resalta entre los demás.
[600ms]
[confident] Empieza aquí para pasar de cinco servicios a uno, y luego selecciona ese nodo para investigar sus fallos o su rendimiento.

## Step 9 · Read the trace: end-to-end transaction

[calm] La búsqueda encuentra la transacción que te interesa. Ábrela y la vista de extremo a extremo muestra los spans como un diagrama de Gantt.
[600ms]
[curious] Selecciona cualquier barra de un span y verás lo que esa operación te dice: su duración, su llamada a una dependencia o su excepción.
[600ms]
[impressed] Ahora los dos coma cuatro segundos ya tienen un culpable, porque puedes ver cuál es el span largo.

## Step 10 · Probe from outside, watch live

[calm] Una prueba de disponibilidad llama a tu endpoint desde varias ubicaciones. Te avisa cuando el endpoint falla o se pone lento.
[600ms]
[confident] Las pruebas estándar son la opción actual, y reemplazan a las pruebas de ping de URL, que ya están obsoletas.
[600ms]
[curious] Las métricas en vivo muestran lo que pasa ahora mismo. Esos datos no se guardan, porque solo se transmiten mientras el panel está abierto.

## Step 11 · Sampling keeps whole traces, not every trace

[calm] El muestreo reduce cuánta telemetría envías, para mantener el costo bajo control.
[600ms]
[confident] El sampler de Application Insights conserva o descarta una traza completa, así que cada traza que conservas queda íntegra.
[600ms]
[serious] El muestreo de tasa fija conserva un porcentaje, y el de tasa limitada pone un tope de trazas por segundo. Las métricas no se muestrean, así que crea las alertas a partir de ellas.

## Step 12 · All in one: follow the request

[calm] Volvamos al pago lento. Instrumenta los servicios con OpenTelemetry y envía la telemetría a Application Insights.
[600ms]
[confident] Luego lee el mapa de aplicación para encontrar el servicio con problemas, y abre la transacción para encontrar el span lento.
[600ms]
[proud] Así es como ves en qué se fue el tiempo de una solicitud lenta, una solicitud a la vez.
