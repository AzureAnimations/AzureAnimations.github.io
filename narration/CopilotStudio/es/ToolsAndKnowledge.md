# Narrator Script — Copilot Studio · Copilot Studio: Knowledge and Tools

**Source animation:** [ToolsAndKnowledge.html](../../../journeys/CopilotStudio/ToolsAndKnowledge.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/training/modules/add-knowledge-copilots-online-workshop/>
- <https://learn.microsoft.com/training/modules/copilot-tools-online-workshop/>

---

## Step 1 · The answers live outside the agent

[calm] Contoso Support está activo, y los clientes han empezado a preguntar cosas que su mensaje simplemente no puede responder.
[600ms]
[curious] Algunas preguntas necesitan hechos que se guarden en wikis, bases de datos y archivos. Otras requieren acciones, como iniciar una devolución, que estén detrás de APIs y aplicaciones.
[600ms]
[confident] Contoso y todos los sistemas que verás aquí son ficticios, y el mismo agente recorre los doce pasos.

## Step 2 · Two jobs: know it, or do it

[curious] Cualquier necesidad externa se reduce a uno de dos trabajos. O el agente necesita saber algo, o tiene que hacer algo.
[600ms]
[calm] El conocimiento le da contenido para leer y citar. Las herramientas le permiten llamar a un servicio y cambiar cosas. Viven en dos páginas separadas del agente.
[600ms]
[confident] Con la orquestación generativa, el agente elige entre ellas leyendo tus descripciones, así que esas palabras realmente importan.

## Step 3 · Copilot connectors: index first, then answer

[calm] La primera ruta de conocimiento es Copilot conectores, que antes se llamaban conectores Microsoft Graph.
[600ms]
[confident] Un administrador de inquilinos conecta un sistema noMicrosoft y su contenido se indexa en Microsoft Graph. Los agentes pueden entonces responder desde él, citarlo y respetar el acceso de cada persona.
[600ms]
[serious] Como el administrador lo configura primero, solo aparece en el cuadro de diálogo de Añadir conocimiento después.

## Step 4 · Power Platform connectors: ask the live system

[curious] Esta ruta es diferente, porque nada se copia. Es una opción de vista previa en tiempo real.
[600ms]
[confident] Copilot Studio indexa solo los nombres de tablas y columnas. Luego cada pregunta se ejecuta contra el sistema en vivo, usando el inicio de sesión propio del usuario.
[600ms]
[calm] Reutiliza las mismas políticas de conexión y datos que las herramientas de conectores, y funciona con sistemas como Salesforce, ServiceNow, Azure SQL, SAP y Dataverse.

## Step 5 · Azure AI Search: bring your own index

[calm] Aquí traes tu propio índice. Preparas un índice vectorial en Azure y lo añades a través de una conexión de datos.
[600ms]
[confident] Obtienes un índice por fuente de conocimiento, y puede devolver citas, siempre que el índice tenga un campo URL al que apuntar.
[600ms]
[reassuring] Usa el asistente de importación y vectorización para que el mismo modelo de incrustación también empiece la pregunta. También se admiten endpoints privados.

## Step 6 · Connector tools: prebuilt or custom

[calm] Ahora pasamos de leer a actuar. Un conector envuelve un REST API para que el agente pueda llamarlo.
[600ms]
[curious] ¿Pero qué pasa si no hay un conector preconstruido para APIde retornos de Contoso? Entonces simplemente añades el conector personalizado que tu equipo ya ha construido.
[600ms]
[reassuring] Por defecto, la herramienta funciona con la conexión de cada usuario, así que la gente solo hace lo que se le permite.

## Step 7 · REST API tool: an OpenAPI file becomes tools

[curious] Quizá no tengas ningún conector, solo un archivo OpenAPI. Esta ruta de vista previa convierte ese archivo en herramientas.
[600ms]
[confident] Subes la especificación, escribes una descripción clara, no eliges ninguna, una clave de API u OAuth para autenticación, y mantienes solo los endpoints que quieres. Cada uno se convierte en una herramienta.
[600ms]
[serious] Esa descripción es lo que el orquestador lee para decidir cuándo llamar a la herramienta, así que añade los sinónimos que la gente realmente usa.

## Step 8 · MCP: connect once, choose the tools

[curious] Un servidor MCP publica sus propias herramientas y recursos, cada uno con un nombre, una descripción y entradas.
[600ms]
[confident] Lo añades una vez con el asistente y luego desactivas cualquier herramienta que no quieras que use el agente. Cuando el servidor cambia, el agente ve la actualización.
[600ms]
[calm] La orquestación generativa tiene que estar activada y los prompts aún no están soportados. Un recurso solo se vuelve utilizable cuando una herramienta lo devuelve.

## Step 9 · Computer use: when there is no API

[curious] ¿Y si no hay conector, ni API ni servidor MCP ? Ahí es donde entra el uso del ordenador.
[600ms]
[impressed] El agente mira una pantalla Windows, decide qué hacer y luego hace clic y teclea como lo haría una persona. Un modelo de visión y razonamiento le ayuda a sobrellevar cuando cambian las pantallas.
[600ms]
[calm] Necesita una máquina Windows y orquestación generativa, y cada paso utiliza Copilot Credits. Las máquinas alojadas se adaptan a los prototipos; usa la tuya propia en producción.

## Step 10 · Computer use: set guardrails, watch every run

[serious] Un agente que navegue por pantallas necesita barreras de seguridad. Ejecutarlo en una máquina dedicada y limitar lo que puede tocar con una lista de permisos.
[600ms]
[concerned] Deja que una persona intervenga cuando no esté segura, pero no te fíes solo de eso. La supervisión es probabilística, y la lista de permisos no impide que el modelo abra un sitio.
[600ms]
[reassuring] Después, revisa cada partida en Activity, con una transcripción y repetición de la sesión. Los registros de ejecución van a Dataverse y se mantienen durante siete días.

## Step 11 · Which route should I pick?

[calm] Empieza por lo que necesita el agente, no por la tecnología. Elige una necesidad y verás la ruta, cuándo elegirla y a qué debes prestar atención.
[600ms]
[confident] La regla general es sencilla. Usa una fuente de conocimiento para leer.
[600ms]
[determined] Usa un conector, un REST API o un servidor MCP para llamar a un servicio. Y elige usar el ordenador solo cuando nada más pueda conectarse.

## Step 12 · Knowledge and tools: all in one

[calm] Vamos a concentrarnos. Lee con conocimiento, actúa con herramientas.
[600ms]
[confident] Elige la ruta más ligera que funcione y supervisa la más pesada, que es el uso del ordenador.
[600ms]
[proud] Para el examen, A B 620, Integrar y extender agentes en Copilot Studio, es entre el cuarenta y el cuarenta y cinco por ciento. Estas rutas cubren la conexión con fuentes de conocimiento y la incorporación de herramientas.
