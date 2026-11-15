# Narrator Script — Build and extend an AI agent

**Source animation:** [BuildAndExtendAgents.html](../../../journeys/lab-guide/AgentLab/BuildAndExtendAgents.html)
**Language:** es

Delivery cues and pause positions follow the English script; cues are not spoken.
Localized narration prepared for a later localization and recording pass; the animation currently offers English only.

Sources: [Companion lab](https://ivorb.github.io/mslearn-ai-agents/Instructions/Exercises/A-build-and-extend-ai-agents.html), [Foundry agents](https://learn.microsoft.com/azure/ai-foundry/agents/overview), [Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/fundamentals-what-is-copilot-studio).

---
## Step 1 · The problem

[curious] Tailwind Traders ya tiene un modelo de lenguaje. Lo que no tiene es un asistente.

[500ms]

Pregúntale por la devolución de una tienda de campaña y responde al instante: treinta días, noventa días, sin recibo. Suena convincente, pero todo es inventado.

[700ms]

[calm] El modelo no está roto. Simplemente nunca ha leído la política de la tienda de Tailwind, así que llena el vacío con algo plausible. Ese es el problema que este laboratorio tiene que solucionar.

## Step 2 · Lab at a glance

[confident] Seis tareas, un asistente.

[400ms]

Dos tareas son esenciales. Crea un agente en el portal, dale tus documentos como fuente y conéctalo a un servidor MCP remoto. En unos treinta y cinco minutos tendrás un agente que usa herramientas.

[600ms]

Las otras cuatro son opcionales: llamar al agente desde tu aplicación, añadir código Python propio, alojar tu servidor de herramientas y desplegar el conjunto como agente alojado.

[500ms]

[encouraging] Elige según el tiempo disponible: solo las tareas esenciales, las esenciales y las dos recomendadas, o las seis.

## Step 3 · The blueprint

[calm] Antes de la primera tarea, aquí tienes la forma de lo que estás montando.

[400ms]

Un agente, cuatro piezas. Instrucciones que dicen quién es. Conocimiento, extraído de tus propios documentos. Herramientas para que pueda ir más allá de lo que ya sabe. Y una aplicación cliente, donde la gente realmente habla con él.

[700ms]

[confident] Cada tarea añade o mejora una de estas piezas. Conserva este mapa como referencia mientras completas el resto del laboratorio.

## Step 4 · How the pieces fit together

[confident] Aquí es donde todo realmente reside.

[400ms]

Tu código se ejecuta en tu equipo: el chat, el cliente, las funciones y tu servidor. El agente, su conocimiento y las definiciones de herramientas están en Microsoft Foundry. Los documentos y el servidor de documentación de Learn quedan fuera de ambos.

[600ms]

[calm] Cada insignia indica qué tarea construye esa pieza. Selecciona una tarea para añadir sus elementos y vuelve a seleccionarla para quitarlos y comparar los cambios.

## Step 5 · Explore each task

[encouraging] Ahora elige una tarea y mira dentro de ella.

[400ms]

Cada viñeta muestra las mismas tres cosas: qué construyes, qué puedes hacer una vez terminado y el error que sorprende a la mayoría.

[600ms]

[calm] Las tareas principales son los botones sólidos, los opcionales están delineados. Cada tarea se sostiene por sí sola y comienza en la misma carpeta — así que empieza donde quieras, en el orden que prefieras.

## Step 6 · One assistant, six tasks

[confident] Un asistente, seis tareas, todos los componentes en su sitio.

[500ms]

Con las dos tareas esenciales, el agente responde a partir de tus documentos y llama a una herramienta externa: ahora tiene fuentes y capacidad de actuar.

[600ms]

Las cuatro tareas opcionales incorporan tu aplicación, tu código Python y tu servidor MCP, ejecutados en un contenedor que Foundry administra por ti.

[700ms]

[warm] El conocimiento es lo que lo hace preciso. Las herramientas son lo que lo hace útil. Ahora ve y hazlo.
