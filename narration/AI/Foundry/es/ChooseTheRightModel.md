# Narrator Script — Foundry · Choose the Right Model for the Job

**Source animation:** [ChooseTheRightModel.html](../../../../journeys/AI/Foundry/ChooseTheRightModel.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/foundry/concepts/foundry-models-overview>
- <https://learn.microsoft.com/azure/foundry/openai/concepts/model-router>
- <https://learn.microsoft.com/azure/foundry/foundry-models/concepts/deployment-types>
- <https://learn.microsoft.com/azure/foundry/openai/how-to/reasoning>

---

## Step 1 · One catalog, many models

[calm] Contoso Outfitters necesita un modelo para su bot de ayuda. El catálogo de Foundry tiene miles, así que empieza por la tarea y ve acotando.
[600ms]
[curious] Los modelos vienen en dos grupos. Unos los vende Azure, con soporte de Microsoft y acuerdos empresariales. Otros vienen de socios y de la comunidad, y los respaldan sus proveedores.
[600ms]
[serious] De cualquier forma, elegir un modelo adecuado y leer su tarjeta de modelo es responsabilidad tuya.

## Step 2 · Large, small and reasoning models

[curious] Tamaño, costo y espera van de la mano. Un modelo pequeño es rápido y barato, y sirve para tareas acotadas y bien definidas.
[600ms]
[calm] Un modelo grande cubre una gama más amplia, y un modelo de razonamiento piensa antes de responder.
[600ms]
[concerned] Ese pensar genera tokens de razonamiento que nunca ves, pero que pagas como salida, y a mayor esfuerzo, más espera. Estos medidores son relativos, no son mediciones reales.

## Step 3 · Multimodal and code models

[calm] Fíjate en qué entra y qué sale. Si la entrada son fotos o audio, necesitas un modelo multimodal.
[600ms]
[confident] Para escribir y corregir código, lo ideal es un modelo de código, ajustado para herramientas de programación. Algunos solo están disponibles con la Responses API.
[600ms]
[reassuring] Lee siempre los tipos de entrada y salida en la tarjeta del modelo.

## Step 4 · Foundry Tool or a model?

[curious] Algunas tareas ya tienen un servicio prediseñado. Para facturas escaneadas, una herramienta de Foundry te da campos tipificados de inmediato.
[600ms]
[calm] Un modelo generativo también podría leer una factura, pero entonces tendrías que construir todo lo demás a su alrededor.
[600ms]
[confident] Las herramientas de Foundry vienen preentrenadas, sin entrenamiento personalizado. Microsoft Learn recomienda considerarlas antes de usar un modelo de lenguaje en lugar de un servicio especializado.

## Step 5 · Leaderboards: read them carefully

[calm] Una tabla de clasificación ordena los modelos según pruebas públicas de calidad, seguridad, rendimiento y costo. Es una buena forma de armar una lista corta.
[600ms]
[serious] Pero no es un veredicto sobre tu carga de trabajo.
[600ms]
[confident] Arma la lista corta con la tabla de clasificación y luego evalúa con tus propios datos. La pantalla de aquí es solo una ilustración, con modelos inventados.

## Step 6 · Model router and fallback

[curious] Los prompts fáciles y los difíciles no necesitan el mismo modelo. Model router elige uno para cada solicitud, así que solo despliegas una cosa.
[600ms]
[calm] Tú eliges un modo de enrutamiento, calidad, equilibrado o costo, y el subconjunto de modelos que puede usar.
[600ms]
[reassuring] Si un modelo tiene un problema transitorio, el router cambia a otro automáticamente. Elige al menos dos modelos para tener ese respaldo, y compara con tu línea base actual.

## Step 7 · Match the task

[excited] Ahora te toca a ti. Elige una tarea de Contoso a la izquierda.
[600ms]
[curious] El panel te muestra una buena primera opción y el detalle al que hay que prestar atención.
[600ms]
[reassuring] Es una guía simplificada, no un reglamento. Tus propias pruebas con tus propios datos tienen la última palabra.

## Step 8 · Deployment option for the choice

[calm] Una vez elegido el modelo, decide cómo ejecutarlo. Cada opción es un equilibrio entre precio, ubicación y previsibilidad.
[600ms]
[confident] El estándar global es el punto de partida predeterminado. Los tipos de zona de datos mantienen el procesamiento en la zona US, EU o APAC, los aprovisionados reservan rendimiento y batch es para trabajos asíncronos.
[600ms]
[serious] Los modelos abiertos en cómputo administrado se facturan por horas de máquina virtual, y no todos los modelos admiten todos los tipos de despliegue.

## Step 9 · Choosing at a glance

[calm] Elige el tipo de modelo para la tarea, revisa la evidencia y después decide cómo ejecutarlo.
[600ms]
[reflective] Esos tres pasos cubren las habilidades de selección de modelos de la guía de estudio A I 103 en Microsoft Learn.
[600ms]
[proud] Revisa en la guía cómo está redactada hoy, y sabrás elegir con confianza.
