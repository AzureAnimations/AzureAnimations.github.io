# Narrator Script — Copilot Studio · Copilot Studio — Test and Manage Agents

**Source animation:** [TestAndLifecycle.html](../../../journeys/CopilotStudio/TestAndLifecycle.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/microsoft-copilot-studio/analytics-agent-evaluation-intro>
- <https://learn.microsoft.com/microsoft-copilot-studio/analytics-agent-evaluation-results>
- <https://learn.microsoft.com/microsoft-copilot-studio/authoring-solutions-overview>
- <https://learn.microsoft.com/microsoft-copilot-studio/authoring-solutions-import-export>

---

## Step 1 · Three good chats aren’t proof

[calm] El agente Contoso Support de Maya ha sacado nota en el chat de prueba. Está contenta, pero los clientes reales lo expresan de forma diferente a ella.
[600ms]
[concerned] Y desarrollador no es producción. Entonces, ¿cómo demuestra que funciona y luego lo mueve con seguridad?
[600ms]
[confident] Demuéstralo con evaluación y muévelo con soluciones, variables y canales. Ese es el dominio de examen de Prueba y gestión de agentes, entre veinte y cinco por ciento.

## Step 2 · Test chat or evaluation? Use both

[curious] El chat de prueba es una conversación en directo, una pregunta a la vez. Es genial para explorar.
[600ms]
[confident] La evaluación del agente realiza todo un conjunto de pruebas, puntua todas las respuestas y puede repetirse tras cada cambio.
[600ms]
[reflective] Learn recomienda usar ambos. La evaluación se ejecuta como el usuario iniciado sesión, así que solo ve lo que ese usuario puede ver.

## Step 3 · Create a test set

[calm] Un caso de prueba es una pregunta, normalmente con la respuesta que esperas. Un set de prueba puede aguantar hasta cien casos.
[600ms]
[confident] Generarlos desde el agente, capturarlos desde chats, importar un archivo o escribirlos tú mismo.
[600ms]
[serious] Un archivo de importación se CSV o TXT, con dos encabezados: Pregunta y Respuesta esperada. Cualquier fabricante con acceso puede ver los conjuntos de prueba, así que no hay datos sensibles.

## Step 4 · Choose how to grade the answers

[curious] Existen ocho métodos de prueba, y un conjunto de pruebas puede usar varios de ellos.
[600ms]
[confident] Algunos revisan las palabras, otros juzgan el significado o la calidad, uno revisa las herramientas usadas y otro la seguridad.
[600ms]
[reflective] La calidad general está activada por defecto y no necesita respuesta esperada. Los métodos que se comparan con una expectativa devuelven Inválido para cualquier caso sin una.

## Step 5 · Which method fits? Try it

[encouraging] Selecciona un escenario y el método que encaje se enciende.
[600ms]
[confident] Verás cuándo usarlo y qué debes vigilar.
[600ms]
[reflective] Los conjuntos reales de pruebas mezclan métodos. Cuando importa la formulación precisa, combina Comparar significado con similitud de texto.

## Step 6 · Review the results

[calm] Cada caso termina como Aprobado, Suspenso, Inválido o Error, y el conjunto obtiene una tasa de aprobado.
[600ms]
[curious] Abre un caso fallido para comparar lo esperado con el real, lee el razonamiento y ve qué usó el agente.
[600ms]
[reassuring] Repite el mismo conjunto tras cada cambio. Los resultados permanecen ochenta y nueve días, así que exporta a CSV para mantenerlos más tiempo.

## Step 7 · Primer: environments and Dataverse

[calm] Los agentes viven en un entorno Power Platform, un espacio para agentes, flujos y aplicaciones con sus propios datos y roles.
[600ms]
[confident] Cada entorno puede tener una base de datos Dataverse. Contoso utiliza desarrollo, prueba y producción.
[600ms]
[serious] Utiliza un entorno de producción no predeterminado para lo que envíes. Las soluciones llevan componentes, no Dataverse datos de tablas.

## Step 8 · ALM: a solution carries the agent

[curious] Crea una solución personalizada, luego elige Añadir existente y elige Agente.
[600ms]
[confident] La solución es el portador que mueve tu agente entre entornos. Añade objetos necesarios para que los temas y flujos también viajen.
[600ms]
[serious] Las nuevas soluciones no están gestionadas y no puedes exportar una gestionada desde Copilot Studio. Algunos componentes, como temas personalizados y fuentes de conocimiento, pueden necesitar añadirse por separado.

## Step 9 · Environment variables: same agent, new value

[curious] Algunos valores cambian según cada entorno, como un punto final API. No los programes de forma fija.
[600ms]
[confident] Si los mantienes en una variable de entorno dentro de la solución, cada entorno aporta su propio valor.
[600ms]
[reassuring] Una variable tiene un nombre, un tipo, un valor por defecto opcional y un valor actual, que gana cuando está activado. Proporcionas valores al importar, o un pipeline lo pide primero.

## Step 10 · Pipelines: dev to test to production

[calm] Un administrador construye la pipeline una vez. Luego Maya pulsa Desplegar en desarrollo.
[600ms]
[confident] La misma solución gestionada avanza etapa a etapa, y primero se comprueban las conexiones y variables.
[600ms]
[impressed] La solución se exporta cuando se envía la solicitud, por lo que ninguna etapa puede ser evitada. Las canalizaciones mueven soluciones y configuraciones, no datos de tablas.

## Step 11 · Extend the pipeline with gates

[curious] Las extensiones con filtro te permiten añadir tus propios pasos a la canalización.
[600ms]
[confident] Un paso previo a la exportación puede ejecutar tu conjunto de pruebas. El despliegue delegado añade una aprobación, y tu flujo de Power Automate completa o rechaza el paso.
[600ms]
[reflective] Activa la preexportación solo en la primera etapa. Las canalizaciones personales no se pueden extender.

## Step 12 · Test and manage agents: all in one

[calm] Demuéstralo con conjuntos de prueba, métodos y resultados.
[600ms]
[confident] Muévelo con soluciones, variables y pipelines. Juntos, ese es el dominio de los agentes de Prueba y Gestione.
[600ms]
[proud] Es entre el veinte y el veinticinco por ciento del examen de A B 620, así que lee la guía de estudio actual antes de presentarte.
