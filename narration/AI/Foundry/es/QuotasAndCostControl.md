# Narrator Script — Foundry · Quotas, Rate Limits and Cost Control

**Source animation:** [QuotasAndCostControl.html](../../../../journeys/AI/Foundry/QuotasAndCostControl.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/foundry/openai/how-to/quota>
- <https://learn.microsoft.com/azure/foundry/openai/quotas-limits>
- <https://learn.microsoft.com/azure/foundry/concepts/manage-costs>
- <https://learn.microsoft.com/azure/foundry/foundry-models/how-to/monitor-models>

---

## Step 1 · Why did my call get a 429?

[curious] Es día de rebajas a las Contoso Retaily el dependiente acaba de ponerse en marcha. Las llamadas empiezan a llegar más rápido de lo que permite su despliegue modelo.
[600ms]
[concerned] Algunos están rechazados con un HTTP cuatro veintinueve, y resulta alarmante.
[600ms]
[reassuring] Pero cuatro veintinueve solo significa demasiadas solicitudes. Se ha alcanzado un límite. No significa que tu código esté roto.

## Step 2 · Tokens: the unit of cost and of limits

[calm] Los modelos no leen oraciones completas. Leen y escriben tokens, que son pequeños fragmentos de texto.
[600ms]
[confident] Tu factura y tus límites se cuentan tanto en tokens, tanto de entrada como de salida.
[600ms]
[reflective] La división que ves aquí es solo ilustrativa, ya que los tokenizadores reales cortan el texto de forma diferente. Las tasas varían según el modelo y el tipo de despliegue, así que búscalos en lugar de memorizar números.

## Step 3 · Quota: one pool, shared out in slices

[calm] Cuota es el conjunto de tokens por minuto que tu suscripción puede usar para un modelo y tipo de despliegue determinados.
[600ms]
[confident] Entregas partes de ese grupo a tus despliegues, y cada porción se convierte en el techo de ese despliegue.
[600ms]
[curious] Cómo se define un pool depende del tipo de despliegue. Los pools más nuevos pueden compartirse entre regiones o por zona de datos, así que revisa la página de cuotas y límites para tu modelo.

## Step 4 · Rate limits count what you reserve

[curious] Cada despliegue tiene un límite de tokens por minuto y un límite de solicitudes por minuto.
[600ms]
[serious] Una solicitud se cuenta cuando llega, usando el prompt más su configuración de tokens máximos. Eso es lo que reservas, no lo que finalmente usa el modelo.
[600ms]
[reflective] Como es una estimación, un límite puede dispararse antes de lo que sugiere un recuento exacto. Las ráfagas también importan, ya que las peticiones también se comprueban durante ventanas de unos segundos.

## Step 5 · Two kinds of 429, two different fixes

[curious] Un cuatro veintinueve puede significar dos cosas bastante diferentes, y la solución depende de cuál.
[600ms]
[confident] O has agotado tu propia porción, o el servicio compartido está ocupado brevemente. El mensaje de error y las cabeceras de respuesta te indican cuál, incluyendo los tokens restantes y el intento de nuevo después de la pista.
[600ms]
[serious] Los equipos suelen pedir más cuota cuando la verdadera causa es una falta de capacidad. Comprueba primero y luego actúa.

## Step 6 · Back off, then retry

[serious] Intentarlo de nuevo de inmediato empeora las cosas, porque las llamadas fallidas siguen contando en tu contra.
[600ms]
[confident] Espera todo el tiempo que el servicio sugiera, y luego espera un poco más cada vez, con un toque de aleatoriedad para que los clientes no intenten todos juntos.
[600ms]
[reassuring] Muchos SDKs pueden hacer esto por ti, así que revisa primero la biblioteca de tu cliente. Y mantén un límite, para que un mal día nunca se convierta en un bucle interminable.

## Step 7 · Pick the deployment type for your traffic

[curious] Ahora elige la forma de tu tráfico y dónde se permite procesar tus datos.
[600ms]
[confident] A medida que cambias esas opciones, el tipo de despliegue sugerido y sus palancas de escalado cambian con ellas.
[600ms]
[reflective] No todos los modelos admiten todos los tipos, así que comprueba la disponibilidad por modelo y región. Esta página trata sobre límites y costes, así que consulta las páginas de precios y cuotas para ver los números reales.

## Step 8 · Need more headroom? Raise it or spread it

[determined] ¿Necesitas más margen? Empieza reasignando cualquier token no utilizado por minuto, o pide más cuota al servicio.
[600ms]
[confident] Luego distribuye el tráfico entre varios despliegues o regiones, de modo que no haya un límite único que se convierta en el techo.
[600ms]
[calm] Las solicitudes de cuota se revisan en el pedido recibido y los clientes activos tienen prioridad. Un gateway como Azure API Management también puede imponer límites de tokens para cada consumidor.

## Step 9 · Spend fewer tokens, pay less

[calm] El coste son simplemente tokens multiplicados por la tasa de tu modelo y tipo de despliegue.
[600ms]
[encouraging] Así que hay tres formas de reducir la factura: usar menos tokens, elegir un modelo más barato o optar por un camino con descuento.
[600ms]
[reflective] No hay precios en pantalla a propósito, porque cambian. Consulta la página de precios y mide antes y después, ya que el ahorro depende de tu carga de trabajo.

## Step 10 · Watch tokens and budgets before the bill does

[curious] Foundry muestra el uso de tokens y el coste estimado de cada despliegue, para que puedas ver de dónde viene el gasto.
[600ms]
[confident] Azure Monitor rastrea las métricas y envía alertas, mientras que Gestión de Costes se encarga de los presupuestos.
[600ms]
[serious] Recuerda que los presupuestos te avisan pero no dejas de gastar, y Azure OpenAI no tiene un límite de costes estricto. Etiqueta por equipo o proyecto para poder cobrar costes de vuelta.

## Step 11 · Limits and cost at a glance

[calm] Los tokens fijan tanto tus límites como tu factura, y ese es el hilo conductor de toda esta lección.
[600ms]
[confident] Planifica tu cuota, gestiona cuatro errores de veintinueve con backoff, elige el tipo de despliegue adecuado, reduce tokens y luego vigila el uso y los presupuestos.
[600ms]
[reassuring] Los números cambian a menudo, así que guarda las cuotas, límites y páginas de precios en lugar de memorizar valores.
