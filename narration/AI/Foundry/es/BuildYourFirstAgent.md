# Narrator Script — Foundry · Build and test your first agent in the Foundry portal

**Source animation:** [BuildYourFirstAgent.html](../../../../journeys/AI/Foundry/BuildYourFirstAgent.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/foundry/quickstarts/get-started-code>
- <https://learn.microsoft.com/azure/foundry/agents/concepts/development-lifecycle>
- <https://learn.microsoft.com/azure/foundry/agents/how-to/tools/file-search>
- <https://learn.microsoft.com/azure/foundry/observability/concepts/trace-agent-concept>

---

## Step 1 · From a model to an agent

[calm] Contoso Outfitters ya tiene un modelo desplegado que responde casi cualquier cosa. Pero no sabe nada de Contoso.
[600ms]
[curious] Un agente cierra esa brecha: envuelve el modelo con instrucciones, conocimiento y herramientas.
[600ms]
[confident] Esto repasa la lección anterior sobre qué hace a un agente, y el mismo asistente de devoluciones nos acompaña en cada paso.

## Step 2 · Create the agent: name and model

[curious] En el portal de Foundry, abre Agentes y selecciona Crear agente. Ponle un nombre y elige el modelo desplegado que va a usar.
[600ms]
[serious] Elige bien el nombre, porque una vez que se lo pones al agente, ya no puedes cambiarlo.
[600ms]
[calm] Más adelante, en el código, ese mismo nombre es el que usarás para referirte al agente.

## Step 3 · Write the instructions

[calm] Las instrucciones le dan al agente su rol y sus límites. Aquí puedes activar y desactivar la regla de alcance.
[600ms]
[curious] Después haz una pregunta fuera de tema y compara. Con la regla activada, el agente se mantiene amablemente en lo suyo.
[600ms]
[reassuring] Un límite claro en las instrucciones es la forma más sencilla de mantener enfocado al agente.

## Step 4 · Add knowledge

[curious] El conocimiento hace que las respuestas se basen en tus propios archivos. Contoso sube sus documentos de políticas y se indexan.
[600ms]
[confident] Antes de responder, el agente busca el pasaje relevante y lo usa en su respuesta.
[600ms]
[calm] La búsqueda de archivos es una forma de agregar conocimiento, y requiere que los archivos estén subidos e indexados en un almacén vectorial.

## Step 5 · Add a tool

[calm] Las herramientas permiten que el agente consulte información o ejecute acciones. Elige una y termina de configurarla.
[600ms]
[serious] La herramienta tiene que quedar bien configurada antes de que puedas guardar un agente que la tenga conectada.
[600ms]
[confident] Luego, en las instrucciones, dile al agente cuándo usar la herramienta, para que eche mano de ella en el momento justo.

## Step 6 · Test in the playground: read the tool call

[curious] Ahora prueba en el patio de juegos. Haz una pregunta que requiera la herramienta, abre la llamada a la herramienta y revísala.
[600ms]
[intrigued] Ahí ves qué herramienta se ejecutó, qué se le envió y qué devolvió.
[600ms]
[confident] El trazado registra esas entradas y salidas, así que puedes confirmar que el agente llamó a la herramienta que esperabas.

## Step 7 · Save a version

[serious] Todo lo que hemos hecho hasta aquí es solo un borrador. Si sales del portal, pierdes los cambios sin guardar.
[600ms]
[confident] Al guardar se crea una versión nueva que nunca cambia, así que puedes comparar versiones y volver a una anterior cuando lo necesites.
[600ms]
[reassuring] Guarda primero una versión si quieres historial, monitoreo o evaluaciones completas.

## Step 8 · Call the agent by name

[calm] Una aplicación cliente pequeña no necesita el portal. Inicia sesión, se conecta al proyecto y pide el agente por su nombre.
[600ms]
[curious] Inicia sesión una sola vez con la línea de comandos de Azure. Después, la credencial predeterminada encuentra ese inicio de sesión por ti.
[600ms]
[confident] El código usa el paquete Azure AI Projects, versión dos punto x.

## Step 9 · Print the reply and follow the conversation

[curious] Crea una conversación, envía un mensaje e imprime la respuesta.
[600ms]
[impressed] Ahora envía un segundo mensaje en la misma conversación. El agente se acuerda, porque la conversación conserva el historial entre turnos.
[600ms]
[reassuring] Así que en el seguimiento no hace falta repetir la pregunta original.

## Step 10 · Troubleshoot: wrong tool, empty answer, auth error

[serious] La mayoría de los problemas con un primer agente se reducen a tres cosas: la herramienta equivocada, una respuesta vacía o un error de autenticación.
[600ms]
[confident] Revisa la configuración de la herramienta, revisa los datos y revisa el inicio de sesión. Las trazas muestran si el modelo generó una llamada a la herramienta, y qué recibió y devolvió la herramienta.
[600ms]
[proud] Si revisas esas tres cosas, podrás crear, probar y llamar a tu primer agente con confianza.
