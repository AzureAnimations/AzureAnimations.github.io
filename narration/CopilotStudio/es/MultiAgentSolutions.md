# Narrator Script — Copilot Studio · Copilot Studio — Multi-Agent Solutions

**Source animation:** [MultiAgentSolutions.html](../../../journeys/CopilotStudio/MultiAgentSolutions.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/microsoft-copilot-studio/authoring-add-other-agents>
- <https://learn.microsoft.com/microsoft-copilot-studio/guidance/multi-agent-patterns>
- <https://learn.microsoft.com/training/courses/ab-620t00>

---

## Step 1 · One agent, too many choices

[curious] Contoso Support sigue ganando herramientas, temas y otros agentes. Cada uno me pareció una buena idea en su momento.
[600ms]
[concerned] A partir de cierto punto, elegir el correcto se vuelve más difícil, no más fácil para el orquestador.
[600ms]
[serious] La regla general de Microsoft Learnes que el enrutamiento puede degradarse más allá de unas treinta o cuarenta opciones, o antes cuando las descripciones se parecen.

## Step 2 · When to split into more agents

[calm] Empieza con un solo agente. Eso es lo más sencillo que puede funcionar.
[600ms]
[confident] Divídelos solo cuando haya una necesidad clara, porque cada agente extra añade saltos para correr y gobernar.
[600ms]
[reflective] El consejo de Learn es revisar primero los nombres y las descripciones. La división añade latencia y amplía la superficie de pruebas, gestión y gobernanza.

## Step 3 · Child agent or connected agent?

[curious] Cuando haces split, tienes dos opciones. El padre llama a ambas mediante orquestación generativa.
[600ms]
[confident] Un agente niño es ligero y vive dentro de tu agente. Un agente conectado es un agente separado, con su propia orquestación, herramientas y conocimientos.
[600ms]
[reassuring] Difieren en lo independientes que son, y puedes mezclar ambas en una sola solución.

## Step 4 · Child agents and existing agents

[calm] Aquí el padre delega en un agente infantil que vive dentro de ella.
[600ms]
[confident] También puede delegar a un agente de Copilot Studio existente que otro equipo haya construido. Ese agente debe estar en el mismo entorno, publicado y autorizado a conectarse.
[600ms]
[encouraging] Añádelo desde la página de Agentes del padre y luego afila su descripción para que el enrutamiento funcione.

## Step 5 · Integrate a Foundry agent

[curious] Ahora un agente incorporado Microsoft Foundry se une al equipo. Este está en vista previa.
[600ms]
[confident] Ponle Copilot Studio el endpoint del proyecto y el ID del agente, luego describe cuándo debe llamarlo el padre.
[600ms]
[serious] El agente Foundry necesita activar su endpoint del protocolo de Actividad, y debe integrarse en el nuevo portal Foundry.

## Step 6 · Integrate a Fabric data agent

[curious] Un agente de datos de Fabric responde desde tus datos de Fabric. Esta conexión también está en vista previa.
[600ms]
[confident] Elige la información entre los agentes a los que puedas acceder y luego describe lo que sabe, para que el padre pueda redirigir las preguntas.
[600ms]
[serious] Algunas cosas aún no están soportadas, como redirigirlo desde un tema o nombrarlo en instrucciones. La orquestación generativa aún puede llamarlo.

## Step 7 · A2A: agents talking to agents

[curious] Agent2Agent, o A2A, es un estándar abierto para asignar una tarea a otro agente, incluso uno construido sobre un marco diferente.
[600ms]
[confident] Úsalo para agentes que ya hablan A2A, por ejemplo frameworks externos alojados fuera de Copilot Studio.
[600ms]
[reflective] MCP conecta herramientas en su lugar. Usa servidores MCP para herramientas y recursos, y conectores personalizados o herramientas HTTP para APIs simples.

## Step 8 · Trace one request across the team

[curious] Sigue un mensaje de cliente a través del equipo. Dos especialistas trabajan en ello y una respuesta responde.
[600ms]
[confident] Selecciona cada salto para ver qué ocurre allí y qué hay que vigilar.
[600ms]
[encouraging] Es un escenario ficticio, y en la vista del presentador los saltos pasan por ti.

## Step 9 · Ground answers with Azure AI Search

[calm] Indexa tus documentos una vez en Azure AI Search.
[600ms]
[confident] Copilot Studio usa ese índice para respuestas generativas, y un agente de Foundry puede usar el mismo índice.
[600ms]
[reflective] Añádelo como conocimiento a través de una conexión adecuada y nombra un índice vectorial. Para mostrar citas, el índice necesita un campo que contenga el documento URL.

## Step 10 · Custom prompts on Foundry models

[curious] Una herramienta de prompt puede ejecutarse en un modelo que elijas, no solo en el predeterminado.
[600ms]
[confident] Conecta un modelo desplegado en Foundry, luego usa ese prompt como herramienta o dentro de un tema.
[600ms]
[serious] Introduce el nombre del despliegue y el nombre del modelo base tal y como Foundry los muestra, y utiliza un endpoint de finalización de chat.

## Step 11 · Monitor agents with Application Insights

[calm] Una vez que el equipo esté en marcha, querrás verlo. Pega una cadena de conexión en la configuración del agente.
[600ms]
[confident] Elige qué registrar y luego consulta la telemetría con Kusto en Azure.
[600ms]
[encouraging] Los chats de canvas de prueba también se registran, así que filtralos con la dimensión personalizada del modo diseño. Una vista de panel, en vista previa, latencia de gráficos, uso de herramientas y excepciones.

## Step 12 · Multi-Agent Solutions — All in One

[calm] Diseña el equipo, conecta a los especialistas, anclles en Azurey observa cómo funcionan.
[600ms]
[confident] Esos son dos de los cuatro grupos de habilidades en el dominio A B 620, Integrar y extender agentes.
[600ms]
[determined] Las habilidades se actualizan con el tiempo, así que lee la guía de estudio en vivo. El examen puede incluir funciones de vista previa comunes, y las conexiones Foundry y Fabric están en vista previa hoy.
