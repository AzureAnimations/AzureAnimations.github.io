# Narrator Script — Foundry · Prompt Engineering: Instructions a Model Follows

**Source animation:** [PromptEngineering.html](../../../../journeys/AI/Foundry/PromptEngineering.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/foundry/openai/concepts/prompt-engineering>
- <https://learn.microsoft.com/azure/foundry/openai/concepts/advanced-prompt-engineering>
- <https://learn.microsoft.com/azure/foundry/openai/concepts/system-message>
- <https://learn.microsoft.com/azure/foundry/openai/concepts/safety-system-message-templates>

---

## Step 1 · Same model, very different answers

[curious] Un modelo simplemente continúa desde las palabras que tiene delante.
[600ms]
[calm] Contoso Outfitters tiene un bot de ayuda y alguien le da una sugerencia vaga.
[600ms]
[concerned] Así que rellena los huecos con conjeturas, y el mismo modelo da respuestas muy diferentes.

## Step 2 · Two prompts, two authors

[calm] El desarrollador escribe el prompt del sistema una vez para establecer las reglas.
[600ms]
[curious] El cliente escribe una indicación de usuario en cada turno, y el modelo lee ambos.
[600ms]
[confident] Los modelos de chat llevan una lista de mensajes, cada uno con un papel. El mensaje del sistema viene primero y lleva las instrucciones de mayor prioridad.

## Step 3 · What a good system message contains

[calm] Cinco pequeños papeles realizan la mayor parte del trabajo: rol y tarea, público y tono, alcance y límites, un formato de salida y normas de seguridad.
[600ms]
[confident] Mantén cada parte específica.
[600ms]
[serious] Asegúrate de que nunca se contradigan entre sí e incluye un recurso de respaldo para cuando el bot dude.

## Step 4 · Show it, don’t just tell it

[curious] Zero-shot le da al modelo solo la tarea. Few-shot añade un par de pares de preguntas y respuestas de ejemplo.
[600ms]
[calm] El modelo copia el patrón en esos ejemplos, por lo que el tono y la forma de la respuesta se vuelven mucho más predecibles.
[600ms]
[reassuring] Los ejemplos no cambian el modelo. Solo dirigen esta petición.

## Step 5 · Give it the facts to use

[serious] Las modelos adivinan cuando les faltan datos.
[600ms]
[confident] Así que pon la política correcta en el prompt y dile al modelo que responda solo a partir de ella. Eso es un anclaje: la respuesta viene de tus datos, no de la memoria del modelo.
[600ms]
[calm] Y decir qué hacer cuando las fuentes no contienen la respuesta.

## Step 6 · Ask for the shape your app needs

[curious] El código no puede analizar un párrafo amistoso. Así que pide un formato fijo, como JSON con campos nombrados, y mantenlo pequeño y estable.
[600ms]
[calm] Una instrucción sencilla pregunta educadamente.
[600ms]
[confident] Para una garantía firme, Foundry soporta salidas estructuradas. Proporcionas un esquema JSON y la respuesta lo sigue.

## Step 7 · Try it: switch the parts on and off

[excited] Ahora te toca a ti. Mismo modelo, misma pregunta. Activa o desactiva cada parte del prompt y observa cómo cambia la respuesta.
[600ms]
[curious] ¿Qué interruptor soluciona qué problema?
[600ms]
[reassuring] Esta es una demo simplificada, no un modelo en vivo, pero puedes probar la versión real en el Foundry patio de juegos.

## Step 8 · Test it, then tune it

[calm] Cambia una cosa y luego repite las mismas pruebas.
[600ms]
[curious] Mezcla preguntas sencillas, casos límite e intentos de romper tus reglas. Trata un prompt como código, con un conjunto de pruebas que vuelvas a ejecutar tras cada cambio.
[600ms]
[serious] Learn dice que estas técnicas no se recomiendan para modelos de razonamiento, así que consulta las guías de tu modelo.

## Step 9 · Untrusted text can give orders

[concerned] Los correos, páginas web y archivos son solo más texto para un modelo. Las instrucciones ocultas dentro de ellos pueden intentar anular las tuyas.
[600ms]
[serious] Eso es inyección rápida, y se llama indirecta cuando las instrucciones se esconden en un documento.
[600ms]
[confident] Pila de defensas: etiqueta texto no confiable como datos, limita lo que puede hacer el modelo y añade detección como los escudos de prompt. Ninguna es perfecta.

## Step 10 · A prompt is one layer, not the wall

[serious] Un mensaje del sistema puede dirigir el bot, pero un usuario decidido aún puede hablar alrededor de él.
[600ms]
[calm] La verdadera protección viene de las capas que trabajan juntas.
[600ms]
[reassuring] Eso significa selección de modelos, puesta a tierra, clasificadores de contenido y mitigaciones de la experiencia de usuario, con el prompt como una capa más.

## Step 11 · Prompting at a glance

[calm] Escribe instrucciones claras. Muestra ejemplos. Proporciona los hechos. Pide el formato que necesita tu aplicación.
[600ms]
[determined] Prueba sin descanso y nunca te fíes solo del prompt.
[600ms]
[optimistic] A continuación, observa cómo las instrucciones, conocimientos y herramientas se combinan en un agente.
