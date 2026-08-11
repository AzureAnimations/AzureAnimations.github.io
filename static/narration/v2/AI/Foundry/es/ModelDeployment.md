# Narrator Script · Español (es) — Journey 03 · Implementación de modelo vs. Agente

**Source animation:** `static/v2/AI/Foundry/ModelDeployment.html`
**Language:** Spanish (es). Traducido del guion maestro en inglés. Las indicaciones `[tags]` y las pausas `[NNNms]` se mantienen sin cambios. Los títulos de paso se conservan en inglés para el mapeo 1:1.

Un bloque por paso de la animación.

---

## Step 1 · Why an Agent?

[confident] Foundry te ofrece los modelos más avanzados del mundo, pero hay un detalle.
[600ms]
[serious] Un modelo, por sí solo, es solo un predictor: toma un prompt y adivina el siguiente token.
[600ms]
[curious] No puede recordar, planificar ni actuar.
[600ms]
[determined] Para hacer trabajo real —razonar, usar herramientas y llevar las cosas a término— necesitas un agente.

## Step 2 · Deployment

[confident] Antes de poder llamar a un modelo como GPT, creas una implementación.
[600ms]
[calm] Eliges dos cosas: dónde se procesan tus datos —de forma global o en una región específica— y cómo se gestiona el rendimiento, estándar o aprovisionado.
[600ms]
[reassuring] Combínalos y obtienes tu tipo: Global más Estándar da una implementación "Global Standard".

## Step 3 · Tokens

[intrigued] Pero antes de que un modelo lea tu texto, hay una idea clave: el token.
[600ms]
[confident] El modelo divide todo lo que envías en tokens: pequeños fragmentos de palabras, a veces de apenas unos pocos caracteres.
[600ms]
[serious] Y los tokens son la moneda de los modelos de lenguaje: tu precio, tus límites de frecuencia y tu ventana de contexto se miden en tokens.
[600ms]
[optimistic] Así que menos tokens significa respuestas más baratas y más rápidas.

## Step 4 · Inference

[curious] Entonces, ¿qué ocurre en realidad cuando el modelo se ejecuta?
[600ms]
[confident] En lo profundo de un centro de datos, miles de chips especializados toman tus tokens, los convierten en vectores y los hacen pasar por capa tras capa de cálculo.
[600ms]
[serious] Ese proceso se llama inferencia, y todos esos cálculos llevan a una sola cosa: predecir la única palabra siguiente más probable.
[600ms]
[reflective] No es tan distinto de cómo tú terminarías una frase de memoria, salvo que es pura matemática, ejecutándose miles de millones de veces por segundo.

## Step 5 · Chat Flow

[confident] Ahora sigamos un solo mensaje.
[600ms]
[calm] Tu aplicación lo divide en tokens y los envía a un endpoint de Foundry; el modelo ejecuta la inferencia y transmite de vuelta los tokens de respuesta.
[600ms]
[serious] Ese es el viaje de ida y vuelta, y se te cobra por cada token, tanto de entrada como de salida.

## Step 6 · AI Agents

[confident] Llamar directamente a una implementación es sencillo, y funciona.
[600ms]
[hesitant] Pero las aplicaciones empresariales reales necesitan mucho más que respuestas en bruto.
[600ms]
[determined] Necesitan instrucciones para no salirse del tema, conocimiento acotado para mantener la precisión, además de contexto del usuario, historial de chat, resúmenes y memoria.
[600ms]
[confident] Envuelve todo eso alrededor del modelo y habrás creado un agente de IA.
[600ms]
[encouraging] Y eso es exactamente lo que haremos a continuación.
