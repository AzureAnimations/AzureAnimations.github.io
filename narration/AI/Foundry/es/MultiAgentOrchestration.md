# Narrator Script — Foundry · Multi-Agent Orchestration

**Source animation:** [MultiAgentOrchestration.html](../../../../journeys/AI/Foundry/MultiAgentOrchestration.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/agent-framework/workflows/orchestrations/>
- <https://learn.microsoft.com/azure/architecture/ai-ml/guide/ai-agent-design-patterns>
- <https://learn.microsoft.com/azure/foundry/observability/concepts/trace-agent-concept>
- <https://learn.microsoft.com/agent-framework/workflows/human-in-the-loop>

---

## Step 1 · One agent, too many hats

[calm] En Contoso Retail, un agente llamado Helper gestiona cada pregunta de devoluciones de forma independiente: pedidos, política, reembolsos y correos electrónicos.
[600ms]
[concerned] Eso significa un prompt, un montón de herramientas y un contexto en crecimiento.
[600ms]
[reflective] Cuantos más sombreros lleve, más difícil es mantenerlo fiable.

## Step 2 · Three reasons to split the job

[curious] La solución es dar a cada agente una tarea, con un prompt enfocado, solo las herramientas que necesita y solo el contexto que utiliza.
[600ms]
[calm] Incluso puedes dimensionar el modelo según la tarea.
[600ms]
[confident] Aprender nombra tres razones: especialización, optimización y límites de seguridad separados.

## Step 3 · When one agent is enough

[calm] Antes de dividir nada, empieza por lo más sencillo que funcione.
[600ms]
[serious] Cada escalón en la escalera añade coordinación, latencia, coste y nuevas formas de fracasar.
[600ms]
[reassuring] Utiliza el nivel más bajo de complejidad que cumpla con tus requisitos de forma fiable.

## Step 4 · In a line, or side by side

[curious] La orquestación secuencial ejecuta agentes uno tras otro, cada uno construyéndose sobre el anterior.
[600ms]
[calm] Concurrent ejecuta agentes con la misma entrada a la vez, y luego un paso final combina sus respuestas.
[600ms]
[confident] Ambos están integrados en Microsoft Marco de Agentes. Usa secuenciales cuando el orden importa, y concurrentes cuando los trabajos son independientes.

## Step 5 · Who decides who goes next?

[curious] En un traspaso, el agente activo pasa toda la tarea a un compañero más adecuado, sin jefe central.
[600ms]
[calm] En el chat grupal y en Magentic, un encargado elige quién actúa a continuación, y Magentic añade un responsable de planificación encima.
[600ms]
[serious] La herramienta clásica de Agentes Conectados no está disponible en el nuevo Servicio de Agentes de Foundry, así que usa flujos de trabajo, Marco de Agentes o la herramienta A2A.

## Step 6 · How agents pass context

[curious] Cada agente añade su propio razonamiento y resultados de herramientas. Si pasas todo adelante, el contexto se infla.
[600ms]
[calm] Pasa solo un resumen y se mantiene escaso. Los tamaños de barra aquí son solo ilustrativos.
[600ms]
[reflective] Por defecto, cada agente en una secuencia consume toda la conversación del agente anterior, aunque solo puedes pasar sus respuestas. Los flujos de trabajo también ofrecen estado compartido.

## Step 7 · Tools: the agent asks, your code acts

[curious] Con la llamada de función, el agente solicita una función de orden get con orden mil dieciocho cuarenta y dos.
[600ms]
[calm] Tu código ejecuta la función y devuelve el resultado.
[600ms]
[confident] El agente entonces usa ese resultado para terminar su respuesta. El agente pregunta, pero tu código actúa.

## Step 8 · Sensitive tools pause for a human

[serious] Marca las herramientas arriesgadas como aprobación requerida. Cuando un agente llama a una, la ejecución se pausa.
[600ms]
[calm] Una solicitud muestra la herramienta y sus argumentos, y una persona decide.
[600ms]
[concerned] El generador de flujos de trabajo visual de Foundry está en vista previa y se retira el 1 de diciembre de 2026, por lo que las nuevas versiones deberían usar Microsoft Agent Framework.

## Step 9 · You are the approver

[curious] Ahora te toca a ti. El agente de reembolsos quiere reembolsar doscientos cuarenta dólares en el pedido mil ocho cuarenta y dos, y la tirada se pausa.
[600ms]
[calm] Elige Aprobar o Rechazar y observa la rama de flujo de trabajo.
[600ms]
[encouraging] Luego prueba la otra opción, así ves ambos caminos.

## Step 10 · Read the whole run as a trace

[calm] Un trazo registra cada paso de una ejecución en orden: llamadas a modelos, llamadas a herramientas, tokens y tiempo.
[600ms]
[curious] En un equipo, muestra qué agente hizo qué y dónde salieron las cosas mal.
[600ms]
[reassuring] Foundry almacena rastros en Application Insights, y el rastreo está generalmente disponible para agentes prompt y alojados.

## Step 11 · Where teams go wrong, and the guardrails

[serious] Más agentes significan más formas de fallar. Así que nombra primero el fallo y luego añade el control que lo detecte.
[600ms]
[calm] Establece límites de iteración con un recurso como un humano, mantén los chats grupales a tres agentes o menos, y controla los tokens por agente.
[600ms]
[confident] Asigna modelos por tarea y valida cada salida antes de que el siguiente agente la utilice.

## Step 12 · Multi-agent orchestration at a glance

[calm] Es un solo trabajo, compartido por un pequeño equipo de agentes que se centran en una sola cosa.
[600ms]
[reassuring] Un humano en el bucle donde importa, y una pista que muestra lo que pasó.
[600ms]
[proud] Así fue como Helper se convirtió en un equipo en el que realmente puedes confiar.
