# Narrator Script — Foundry · Ship a Foundry Project with CI/CD

**Source animation:** [ShipFoundryWithCICD.html](../../../../journeys/AI/Foundry/ShipFoundryWithCICD.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/foundry/agents/how-to/set-up-ci-cd-cli>
- <https://learn.microsoft.com/azure/foundry/how-to/evaluation-github-action>
- <https://learn.microsoft.com/azure/foundry/how-to/create-resource-template>
- <https://learn.microsoft.com/azure/foundry/agents/how-to/configure-agent>

---

## Step 1 · Portal clicks do not scale: why pipelines

[calm] Montar un proyecto de Foundry a mano funciona una vez. Para cuando llegas a la tercera copia, desarrollo, pruebas y producción ya se fueron desviando sin que nadie lo notara.
[600ms]
[serious] Esa desviación es justo lo que lleva las sorpresas a producción.
[600ms]
[confident] Un pipeline repite los mismos pasos cada vez. Contoso Outfitters y su bot de ayuda son el ejemplo en toda la lección.

## Step 2 · What lives in the repo

[curious] La infraestructura, la definición del agente y los datos de evaluación viven en Git, junto al pipeline.
[600ms]
[confident] El repositorio se convierte en la única fuente de verdad.
[600ms]
[calm] Los nombres de carpetas de aquí son una estructura ficticia. En tu propio repositorio puedes organizar esas mismas cuatro partes de otra manera.

## Step 3 · Provision the Foundry project as code

[calm] Un archivo Bicep describe el recurso de Foundry y su proyecto. El pipeline lo despliega con Azure CLI o azd, con un archivo de parámetros para cada entorno.
[600ms]
[confident] ¿Ya creaste un recurso en el portal? Microsoft Learn sugiere exportarlo a un archivo Bicep.
[600ms]
[encouraging] Después convierte los valores escritos a mano en parámetros.

## Step 4 · Deploy a model: name, version, type, capacity

[curious] Un despliegue de modelo también es código. Cuatro valores determinan lo que recibe el agente detrás del nombre al que llama: el nombre, la versión, el tipo y la capacidad.
[600ms]
[calm] Puedes desplegar el mismo modelo más de una vez, siempre que cada despliegue tenga su propio nombre.
[600ms]
[confident] El agente solo pide el nombre del despliegue.

## Step 5 · Create or update the agent from code

[calm] Un paso del pipeline llama al SDK para crear el agente.
[600ms]
[impressed] Cada cambio, aunque sea una sola frase editada, guarda una versión nueva en vez de sobrescribir la anterior.
[600ms]
[confident] El código se refiere al agente por nombre y versión. El agente conserva la misma dirección de endpoint aunque cambien sus versiones.

## Step 6 · Dev, test, prod: one pipeline, three projects

[calm] Una misma revisión del código fuente avanza de desarrollo a pruebas y luego a producción.
[600ms]
[confident] Cada entorno apunta a su propio proyecto de Foundry, con su propia configuración y sus propios permisos.
[600ms]
[serious] Solo con ponerle nombre a un entorno no se aísla nada. Cada entorno tiene que estar vinculado a un proyecto de Foundry distinto.

## Step 7 · Evaluation as a quality gate

[curious] Después de desplegar en pruebas, el pipeline pasa un conjunto fijo de preguntas de prueba por los evaluadores.
[600ms]
[serious] Si la tasa de aprobación queda por debajo del umbral, el pipeline se detiene. Estas puntuaciones son ficticias.
[600ms]
[calm] La GitHub Action de evaluación está en versión preliminar. Para ahorrar costos, no ejecutes la evaluación en cada commit.

## Step 8 · Secrets and identity in the pipeline

[calm] El flujo de trabajo inicia sesión con un token de corta duración, en el que Microsoft Entra confía mediante una credencial federada.
[600ms]
[proud] No hay ningún secreto de cliente que tengas que guardar, rotar o que se pueda filtrar.
[600ms]
[serious] El sujeto de la credencial federada tiene que coincidir con el token que el flujo de trabajo realmente envía. Dale a la identidad solo los roles que necesita, en el ámbito más reducido.

## Step 9 · Roll back and watch after release

[curious] Envía una pequeña parte del tráfico a la versión nueva y obsérvala. Noventa y diez es solo un ejemplo de reparto.
[600ms]
[confident] Después sube el porcentaje, o vuelve a apuntar el endpoint a la versión estable.
[600ms]
[reassuring] Cambiar qué versión atiende el endpoint no recompila el código ni crea otra versión.

## Step 10 · Pipeline at a glance

[calm] Desde un commit hasta una publicación supervisada: cada paso es código, cada promoción tiene una puerta de control y no hay secretos guardados.
[600ms]
[reflective] Esto es un patrón, no el único pipeline posible. Las mismas ideas sirven en GitHub Actions o en Azure DevOps.
[600ms]
[determined] Pon tu proyecto en un pipeline, y cada lanzamiento se vuelve repetible.
