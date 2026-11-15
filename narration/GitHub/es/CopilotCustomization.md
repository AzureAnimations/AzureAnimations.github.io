# Narrator Script — GitHub · Teach Copilot Your Project: Instructions, Prompts and Spaces

**Source animation:** [CopilotCustomization.html](../../../journeys/GitHub/CopilotCustomization.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-300>

---

## Step 1 · Same Question, Different Answers

[curious] Maya y Ravi le hacen la misma pregunta a Copilot, y reciben respuestas distintas, con herramientas y estilos diferentes.
[600ms]
[calm] Nadie le dice a Copilot cómo construye, prueba y nombra las cosas Contoso. Esos estándares no están escritos donde Copilot los pueda leer.
[600ms]
[reflective] Las instrucciones compartidas mejoran la consistencia, pero no garantizan que todas las respuestas sean iguales.

## Step 2 · Repository Instructions

[calm] Un solo archivo Markdown en el repositorio le dice a Copilot cómo construye, prueba y nombra las cosas Contoso.
[600ms]
[confident] Escribes las reglas en lenguaje natural, y se aplican a toda solicitud que se haga en ese repositorio.
[600ms]
[encouraging] Es el lugar más sencillo para empezar.

## Step 3 · Path-Specific Instructions

[curious] Un archivo específico por ruta lleva un patrón de aplicación, para que sus reglas solo lleguen a los archivos que coinciden.
[600ms]
[calm] Separa varios patrones con comas. Si además existe un archivo para todo el repositorio, se usan los dos.
[600ms]
[reflective] Qué funciones de Copilot leen estos archivos depende del cliente.

## Step 4 · Prompt Files

[calm] Guarda como archivo de prompt una tarea que repites.
[600ms]
[confident] En vez de escribirla de nuevo, ejecútala desde el chat escribiendo una barra diagonal y su nombre.
[600ms]
[curious] A diferencia de las instrucciones, que se aplican solas, tú decides cuándo se ejecuta un archivo de prompt.

## Step 5 · Copilot Spaces

[calm] Un Space reúne la documentación, el código, los issues y las notas de un trabajo, junto con instrucciones de cómo usarlos.
[600ms]
[confident] Las fuentes pueden ser archivos, repositorios, pull requests, issues, archivos subidos y notas, y las fuentes de GitHub se actualizan cuando cambian.
[600ms]
[curious] Copilot responde con base en ese contexto, en Copilot Chat en GitHub.

## Step 6 · Share a Space

[calm] Quién puede abrir el Space depende de quién es su dueño.
[600ms]
[confident] Los Spaces de una organización usan roles: administrador, editor, lector o sin acceso. Los Spaces personales pueden ser privados, compartidos con personas, o abiertos para cualquiera que tenga el enlace.
[600ms]
[reassuring] Los lectores solo ven las fuentes a las que ya tienen acceso.

## Step 7 · Spark: A Prompt Becomes an App

[calm] Spark convertía una idea en lenguaje común en una pequeña aplicación funcional que podías previsualizar.
[600ms]
[serious] GitHub lo retiró. Dejó de aceptar aplicaciones nuevas el cuatro de agosto de dos mil veintiséis, pero la guía de estudio todavía lo nombra.
[600ms]
[encouraging] Hoy se construye igual con Copilot en VS Code, Copilot CLI o la app de GitHub Copilot.

## Step 8 · MCP: Connect an Outside Tool

[curious] Un servidor MCP permite que Copilot use una herramienta o una fuente de datos fuera del editor, como un sistema de seguimiento de issues.
[600ms]
[confident] Ya no tienes que copiar detalles al chat. MCP es un estándar abierto para conectar modelos con herramientas y datos.
[600ms]
[serious] Aprueba solo las acciones que entiendas. Las organizaciones pueden permitir o bloquear MCP con una política.

## Step 9 · Agent Sessions

[calm] Inicia una sesión para una tarea y sigue trabajando mientras se ejecuta.
[600ms]
[confident] Cada sesión es independiente y tiene su propio historial, así que puedes irte a otra, volver y retomarla.
[600ms]
[reassuring] Archivar conserva la sesión, pero la oculta. Eliminar la borra para siempre.

## Step 10 · Sub-Agents

[curious] El agente principal puede delegar una tarea clara a un subagente.
[600ms]
[confident] El subagente trabaja en su propio contexto y devuelve un resultado corto, así que el chat principal se mantiene pequeño. Explícale el objetivo, el contexto, las acciones permitidas y el resultado esperado.
[600ms]
[reflective] Delegar suma consumo del modelo, así que para una consulta rápida muchas veces conviene preguntar directamente.

## Step 11 · Pick the Right Tool

[curious] Relaciona la necesidad con la herramienta. Elige una necesidad a la izquierda y mira qué herramienta le corresponde.
[600ms]
[confident] Las reglas permanentes significan instrucciones. Una tarea guardada es un archivo de prompt, las fuentes compartidas son un Space, una herramienta externa es un servidor MCP y un traspaso es una sesión de agente.
[600ms]
[encouraging] Empieza con la herramienta más pequeña que sirva. Un requisito de una sola vez puede ir simplemente en la solicitud.

## Step 12 · Recap: What Goes Where

[calm] Los archivos del repositorio le dan a Copilot reglas permanentes y tareas guardadas.
[600ms]
[confident] Los Spaces, MCP, las sesiones y los subagentes aportan fuentes, herramientas y trabajo en segundo plano.
[600ms]
[proud] Esa es el área de usar las funciones de GitHub Copilot de la guía de estudio de G H 300. Spark todavía aparece ahí, aunque ya está retirado.
