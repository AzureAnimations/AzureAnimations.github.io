# Narrator Script — Copilot Studio · Copilot Studio: Agent Flows

**Source animation:** [AgentFlows.html](../../../journeys/CopilotStudio/AgentFlows.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/microsoft-copilot-studio/flows-overview>
- <https://learn.microsoft.com/microsoft-copilot-studio/advanced-flow-create>
- <https://learn.microsoft.com/microsoft-copilot-studio/flows-request-for-information>
- <https://learn.microsoft.com/microsoft-copilot-studio/flow-manage-monitor>

---

## Step 1 · A refund can’t be improvised

[curious] Contoso Support chatea bien. Pero un reembolso no es solo un chat, es un proceso con reglas.
[600ms]
[serious] Tiene que seguir los mismos pasos, en el mismo orden, cada vez.
[600ms]
[concerned] Si se deja improvisar, una solicitud de reembolso puede tomar varios caminos diferentes, y eso supone un riesgo.

## Step 2 · Agent flow or topic?

[calm] Ambos son deterministas, por lo que la misma entrada siempre da la misma salida.
[600ms]
[confident] Se construye un tema para la conversación. Un flujo de agente se construye para el proceso de negocio que ocurre detrás.
[600ms]
[reflective] Una buena regla general: si la obra habla con el usuario, usa un tema. Si son pasos, sistemas y personas, crea un flujo de agentes.

## Step 3 · Create the flow

[calm] Puedes describir un flujo en lenguaje cotidiano, o construirlo tú mismo en el diseñador.
[600ms]
[confident] Un flujo que el agente puede llamar comienza con un disparador y termina respondiendo al agente.
[600ms]
[encouraging] Créalo desde la página de Herramientas del agente, y Copilot Studio añade el disparador y la acción de respuesta por ti.

## Step 4 · Inputs in, outputs out

[curious] El disparador lleva los parámetros de entrada, y la acción de respuesta lleva los parámetros de salida.
[600ms]
[confident] El agente rellena las entradas y luego lee las salidas cuando responde el flujo.
[600ms]
[serious] Si cambias un parámetro más adelante, actualiza el flujo en el agente y vuelve a publicarlo. Una descoordinación de esquema es una causa común de un error de solicitud incorrecta.

## Step 5 · Configure actions and connectors

[calm] Entre el detonante y la respuesta hay un carril para tus acciones, extraído de cuatro familias.
[600ms]
[confident] Las acciones del conector utilizan una conexión para llegar al servicio con el que hablan.
[600ms]
[encouraging] Los flujos de agente son flujos premium, así que los conectores premium también funcionan, ya sean Microsoft 365, terceros o personalizados.

## Step 6 · Hand the flow to the agent

[confident] Una vez que el flujo cumpla los cuatro requisitos, publícalo. Luego añádelo desde la página de Herramientas del agente.
[600ms]
[curious] Su descripción importa, porque así es como el orquestador sabe cuándo llamarlo.
[600ms]
[calm] Puedes añadirlo a nivel de agente para que el orquestador lo llame directamente, o dentro de un tema como nodo de Acción.

## Step 7 · Ask a human, then carry on

[curious] A veces la respuesta correcta es una persona. Una acción humana en el bucle, una aprobación o una solicitud de información, pausa el flujo.
[600ms]
[confident] Pregunta a alguien y luego continúa con su respuesta.
[600ms]
[reflective] El agente solo espera la acción de respuesta, así que pon la larga espera humana después. Las acciones colocadas allí pueden seguir funcionando, hasta el límite de flujo de treinta días.

## Step 8 · When a step fails

[concerned] Las cosas fallan. Los tiempos de espera ocurren, los datos son malos y a veces un revisor nunca responde.
[600ms]
[confident] Selecciona un icono de advertencia para ver cómo reacciona el flujo en cada caso.
[600ms]
[reassuring] El patrón consiste en agrupar los pasos principales en un osciloscopio Try y poner la recuperación en un osciloscopio Catch que se ejecuta cuando falla Try.

## Step 9 · Watch every run

[calm] Cada flujo de agente tiene una visión general, un historial de actividad y una vista de Analítica.
[600ms]
[confident] Juntos te ayudan a corregir fallos y detectar tendencias a lo largo de las etapas.
[600ms]
[reflective] Ten en cuenta que Analytics puede tardar hasta treinta minutos en mostrar nuevas ejecuciones, y el análisis solo es para flujos de solución.

## Step 10 · Agent flows: All in One

[calm] Recapitulemos. Los pasos deterministas mantienen el proceso igual cada vez.
[600ms]
[confident] Una persona interviene cuando es necesario, tú planeas el fracaso y puedes ver cada carrera.
[600ms]
[proud] Estas seis habilidades son los objetivos de crear y monitorizar flujos de agentes en la guía de estudio A B 620.
