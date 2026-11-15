# Narrator Script — Foundry · Evaluate and Observe

**Source animation:** [EvaluateAndObserve.html](../../../../journeys/AI/Foundry/EvaluateAndObserve.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/ai-foundry/concepts/observability>
- <https://learn.microsoft.com/azure/ai-foundry/concepts/built-in-evaluators>
- <https://learn.microsoft.com/azure/ai-foundry/concepts/evaluation-evaluators/risk-safety-evaluators>

---

## Step 1 · It looked fine in the demo

[calm] Contoso creado un asistente de soporte llamado Ask Contoso. Responde a preguntas de pedidos y devuelves desde documentos de póliza y una herramienta de pedidos.
[600ms]
[confident] En la demo acertó tres preguntas y todos aplaudieron.
[600ms]
[concerned] Luego llegaron clientes reales con preguntas que nadie había probado, y ahí fue donde empezaron los problemas.

## Step 2 · One loop: test, ship, trace, watch

[curious] Una buena AI app nunca se termina realmente. Vive en un bucle: prueba antes del lanzamiento, rastrea lo que se ejecuta, observa la producción, corrige lo que aprendes y vuelve a probarlo.
[600ms]
[calm] Microsoft Foundry nombra las tres partes de evaluación, rastreo y monitorización.
[600ms]
[confident] Juntas te dan observabilidad para AI aplicaciones.

## Step 3 · Write the test cases first

[curious] Empieza con un conjunto de datos de evaluación. Es un archivo de preguntas de examen, una por línea, más la respuesta esperada donde tengas una.
[600ms]
[calm] Foundry mantiene la versión actualizada, así que cada partida usa exactamente las mismas pruebas, y los conjuntos de datos son archivos JSONL o CSV.
[600ms]
[serious] Pon casos límite y ataques en el set, no solo los caminos felices.

## Step 4 · A judge model grades the answers

[curious] Muchos controles de calidad utilizan un segundo modelo como juez. Lee la pregunta, el texto fuente y la respuesta, los califica según una rúbrica y explica por qué.
[600ms]
[calm] Para la estabilidad en la tierra, traes tu propio despliegue de modelo como juez. La puntuación va del uno al cinco, y un umbral lo convierte en aprobado o suspenso.
[600ms]
[reflective] Algunos evaluadores no usan ningún modelo en absoluto. Solo miden la superposición de palabras, como F1, BLEU y ROUGE.

## Step 5 · Pick the evaluator for the symptom

[calm] Cada evaluador de calidad integrado comprueba una cosa. Así que el truco es emparejar el síntoma que vio tu equipo con el evaluador que lo detecta.
[600ms]
[curious] Pruébalo aquí. Elige una queja y el evaluador adecuado se ilumina.
[600ms]
[confident] Si nada encaja, también puedes escribir un evaluador personalizado, que sigue en vista previa.

## Step 6 · Grade the agent’s steps, not just its words

[curious] Un agente puede sonar perfectamente bien y aun así elegir la herramienta equivocada, o saltarse una instrucción por el camino.
[600ms]
[calm] Los evaluadores de agentes analizan cada paso de la ejecución: resolución de intenciones, cumplimiento de la tarea, precisión de las llamadas a herramientas, utilización de la salida de herramientas y finalización de tareas.
[600ms]
[serious] Ten en cuenta que la resolución de intenciones, la adherencia a las tareas y la finalización de tareas siguen en proceso de previsualización.

## Step 7 · Safety evaluations: what could go wrong?

[serious] Los evaluadores de seguridad escanean las respuestas en busca de contenido dañino, texto copiado y jailbreaks ocultos dentro de documentos. Este último caso se llama ataque indirecto, o XPIA.
[600ms]
[calm] El resultado es una tasa de defectos: cuántas respuestas se marcaron.
[600ms]
[reassuring] El servicio de evaluación de Foundry aloja estas comprobaciones, así que no necesitas un despliegue de modelo de juez para ellas.

## Step 8 · Red teaming: attack it before others do

[serious] Antes de que los atacantes reales encuentren tus puntos débiles, un agente del equipo rojo actúa como atacante decidido. Envía muchas sondas, algunas disfrazadas.
[600ms]
[calm] Luego informa con qué frecuencia funcionan. Ese número es la tasa de éxito de ataques. Está basado en PyRIT, el kit de herramientas de código abierto de Microsoft, además de los evaluadores de seguridad.
[600ms]
[reflective] Funciona mejor junto a revisión humana, y los escaneos programados tras el lanzamiento están en vista previa.

## Step 9 · Read a trace, span by span

[curious] Un trazado es la historia de una petición, y cada tramo es un paso dentro de ella. Elige un tramo y mira qué te dice.
[600ms]
[calm] El trazado se basa en OpenTelemetry y se almacena en Application Insights. Generalmente está disponible para agentes de prompt y alojados.
[600ms]
[concerned] Los trazos pueden contener texto sensible, así que redacta antes de compartirlos o almacenarlos.

## Step 10 · Monitor production: usage, speed, drift

[calm] Tras el lanzamiento, los paneles registran tokens, latencia, errores y puntuaciones de calidad. Los números que aparecen aquí en pantalla son inventados.
[600ms]
[curious] La evaluación continua puntua una muestra del tráfico en vivo, así que notas cambios en la calidad sin esperar quejas.
[600ms]
[serious] El drift, donde las respuestas empeoran poco a poco, debería activar una alerta. El panel de control del agente y estas alertas están en vista previa.

## Step 11 · Close the loop: gate every release

[determined] Cuando la monitorización detecte un problema, cambia una cosa: el prompt, los datos o el modelo. Luego vuelve a ejecutar las mismas pruebas.
[600ms]
[curious] Compara las ejecuciones lado a lado para ver si el cambio ha ayudado, y usa el análisis de clústeres para agrupar fallos en patrones.
[600ms]
[confident] Por último, una CI y una CD ejecutan los mismos evaluadores en cada cambio, y solo se liberan si las puntuaciones se cumplen.

## Step 12 · Evaluate, trace, monitor, repeat

[calm] Prueba antes del lanzamiento. Rastrea lo que se ejecutó. Observa la producción. Luego lo soluciona y crea la siguiente versión con una puerta de acceso.
[600ms]
[reflective] Así fue como Ask Contoso pasó de ser una buena demo a algo en lo que los clientes pueden confiar.
[600ms]
[proud] Ese bucle es como una app AI sigue siendo buena, mucho después del día de lanzamiento.
