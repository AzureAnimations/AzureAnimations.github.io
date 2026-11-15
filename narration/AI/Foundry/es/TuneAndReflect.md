# Narrator Script — Foundry · Tune the Model: Parameters, Reflection and Hybrid Flows

**Source animation:** [TuneAndReflect.html](../../../../journeys/AI/Foundry/TuneAndReflect.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/foundry/openai/how-to/reasoning>
- <https://learn.microsoft.com/azure/foundry/openai/concepts/prompt-engineering>
- <https://learn.microsoft.com/azure/architecture/ai-ml/guide/ai-agent-design-patterns>
- <https://learn.microsoft.com/azure/foundry/openai/concepts/model-router>

---

## Step 1 · Same prompt, different run: what a parameter changes

[curious] Un modelo elige cada palabra siguiente entre un abanico de opciones probables. Por eso un mismo prompt puede dar resultados distintos en cada ejecución.
[600ms]
[calm] Los parámetros son los ajustes que dan forma a esa elección. Los cinco nombres de abajo son ajustes reales que envías junto con la solicitud.
[600ms]
[reassuring] Estos eslóganes de Contoso Outfitters son solo ilustrativos, porque la salida de un modelo real cambia de una ejecución a otra.

## Step 2 · Temperature and top_p: spread versus focus

[calm] La temperatura modifica la probabilidad de cada palabra siguiente. Baja, es más enfocada; alta, más variada.
[600ms]
[curious] Top P recorta las palabras poco probables.
[600ms]
[serious] Cambia uno, no los dos. Los porcentajes son ilustrativos, calculados a partir de puntuaciones fijas, no medidos en un modelo real.

## Step 3 · Max tokens and stop sequences: length and cost

[calm] Los tokens máximos limitan cuánto puede escribir el modelo. Una secuencia de parada le indica dónde detenerse.
[600ms]
[confident] Juntos controlan la longitud y el costo que implica.
[600ms]
[concerned] Pero si el límite es demasiado bajo, la respuesta se corta. Aquí cada recuadro representa un token, aunque los tokens reales suelen ser fragmentos de palabras.

## Step 4 · Reasoning models: effort instead of temperature

[curious] La mayoría de los modelos de razonamiento no aceptan temperatura ni Top P. En cambio, tú defines cuánto piensan, con el esfuerzo de razonamiento.
[600ms]
[serious] Ese pensamiento cuenta como tokens de salida. En los modelos de razonamiento, el límite cubre tanto el razonamiento como la salida visible.
[600ms]
[calm] Los valores de esfuerzo admitidos varían según el modelo, y estas barras son ilustrativas.

## Step 5 · Think step by step: when it helps, when it does not

[calm] Si le pides a un modelo estándar que muestre sus pasos, es más fácil comprobar la respuesta.
[600ms]
[curious] Un modelo de razonamiento ya piensa primero, así que dale el objetivo, no los pasos.
[600ms]
[confident] Para ver el razonamiento de un modelo de razonamiento, usa el parámetro de resumen de razonamiento. No se admite ninguna otra forma de extraerlo.

## Step 6 · Self-critique: draft, critique, revise

[curious] Un creador hace el borrador, un verificador lo prueba con criterios claros y el creador lo corrige.
[600ms]
[confident] El ciclo termina cuando el verificador aprueba o se llega a un límite. También se le llama ciclo de reflexión o de crítica.
[600ms]
[serious] Necesita criterios de aceptación claros, un límite de iteraciones y un plan de respaldo, como un revisor humano.

## Step 7 · Grade the reasoning: chain-of-thought evaluators

[curious] Un juez L L M también puede calificar los pasos. Lee el razonamiento y devuelve una puntuación, una etiqueta de aprobado o reprobado y el motivo.
[600ms]
[calm] Puedes leer ese motivo y actuar en consecuencia. Esta tarjeta de resultados ilustra los campos que devuelven los evaluadores de Foundry.
[600ms]
[serious] Task Adherence está en versión preliminar. Un juez es en sí una llamada a un modelo, así que cada verificación consume inferencia.

## Step 8 · Try it: change one parameter, watch the answer

[excited] Ahora pruébalo. Cambia un ajuste a la vez y mira qué cambia: la redacción, la extensión y dónde termina la respuesta.
[600ms]
[amused] Esto es una demo con guion, no un modelo en vivo, así que las respuestas están escritas de antemano.
[600ms]
[encouraging] Prueba cada ajuste por separado y luego dos juntos.

## Step 9 · Hybrid flow: rules first, model for the gray area

[calm] Los casos claros siguen reglas fijas en el código, que es rápido, barato y predecible.
[600ms]
[curious] Solo la zona gris pasa al modelo, y una persona puede confirmar el resultado. En cada paso tú eliges quién decide: el modelo, el código normal o una persona.
[600ms]
[confident] Si los pasos son claros y siguen reglas estrictas, el código normal es más rápido, más barato y más confiable.

## Step 10 · Route by task: small first, big on escalation

[calm] No toda solicitud necesita el modelo más grande. Un router manda el trabajo fácil a un modelo pequeño y el difícil a uno más grande.
[600ms]
[curious] Model router elige un modelo para cada solicitud según su complejidad, su necesidad de razonamiento y el tipo de tarea.
[600ms]
[confident] La flecha de escalamiento es tu propia lógica de enrutamiento, no un ajuste del producto. Úsala cuando el modelo pequeño no esté seguro.

## Step 11 · Tuning at a glance

[calm] Tres hábitos: ajustar la configuración, revisar la salida y combinar modelos y reglas.
[600ms]
[reflective] Eso es lo que te pide esta parte de A I 103. Cada punto corresponde a un paso que acabas de ver.
[600ms]
[proud] La redacción de los objetivos viene de la guía de estudio, así que revísala para ver la versión vigente.
