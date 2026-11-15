# Narrator Script — Foundry · Deploy a model and chat with it in Foundry

**Source animation:** [DeployAndChatInFoundry.html](../../../../journeys/AI/Foundry/DeployAndChatInFoundry.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/foundry/concepts/foundry-models-overview>
- <https://learn.microsoft.com/azure/foundry/concepts/concept-playgrounds>
- <https://learn.microsoft.com/azure/foundry/foundry-models/how-to/deploy-foundry-models>
- <https://learn.microsoft.com/azure/foundry/foundry-models/concepts/deployment-types>

---

## Step 1 · Contoso needs a model

[calm] Mia está creando un asistente de chat para el soporte de Contoso Outdoors. El catálogo de modelos de Foundry tiene muchísimos modelos.
[600ms]
[curious] Hay modelos de razonamiento, multimodales y modelos de lenguaje pequeños, entre otros. ¿Cuál sirve para este trabajo?
[600ms]
[encouraging] En los siguientes pasos verás cómo elegirlo, desplegarlo y probarlo.

## Step 2 · Browse the catalog

[curious] Haz coincidir la capacidad del modelo con el escenario. Elige una necesidad y verás qué tipo de modelo es y dónde buscarlo en el catálogo.
[600ms]
[calm] El catálogo permite filtrar por colección, por características compatibles como razonamiento y llamada a herramientas, y por tarea de inferencia.
[600ms]
[reassuring] Sea cual sea tu lista corta, lee la tarjeta del modelo antes de elegir.

## Step 3 · Compare on the leaderboard

[calm] Las tablas de clasificación ordenan los modelos por calidad, costo y rendimiento. Esta función está en versión preliminar.
[600ms]
[curious] Ningún modelo gana en todas las filas, así que tú decides qué sacrificar. Un índice de calidad más alto es mejor, y el costo es una estimación que supone tres tokens de entrada por cada token de salida.
[600ms]
[reassuring] En el catálogo, selecciona Ver tabla de clasificación o Comparar modelos. Los números de aquí son inventados.

## Step 4 · Deploy it: name and type

[confident] Selecciona Desplegar y ponle nombre al despliegue. Luego elige un tipo de despliegue: dónde se procesan los datos y si pagas por token o reservas capacidad.
[600ms]
[calm] Empieza con Global Standard, a menos que necesites residencia de datos, rendimiento reservado o procesamiento por lotes. No todos los modelos admiten todos los tipos.
[600ms]
[serious] Acuérdate del nombre que elijas, porque tu código envía el nombre del despliegue en el parámetro del modelo.

## Step 5 · You land in the playground

[excited] Cuando el despliegue termina bien, Foundry abre el patio de juegos del modelo.
[600ms]
[confident] Puedes chatear, configurar el modelo, comparar modelos y ver el código, todo sin escribir código.
[600ms]
[curious] El patio de juegos depende del modelo. Un modelo de imagen abre el patio de juegos de imágenes, y uno de video abre el de video.

## Step 6 · Set a system prompt and chat

[calm] El prompt del sistema define el rol y las reglas de cada respuesta. El prompt del usuario es lo que pregunta el cliente.
[600ms]
[curious] Envía uno y lee la respuesta.
[600ms]
[encouraging] El prompt del sistema se aplica en cada turno, mientras que el del usuario es solo este mensaje. Cambia uno a la vez, para ver qué fue lo que movió la respuesta.

## Step 7 · Tune the response

[curious] La temperatura y Top P cambian qué tan aleatoria es la redacción. Con una temperatura más baja, las respuestas son más estables; con una más alta, son más variadas.
[600ms]
[calm] Los tokens de salida máximos ponen un tope a la longitud de la respuesta. Cambia un control a la vez, y ajusta la temperatura o Top P, pero no los dos.
[600ms]
[serious] Muchos modelos de razonamiento no admiten temperatura ni Top P, así que revisa primero la tarjeta del modelo.

## Step 8 · Watch tokens in and out

[calm] El texto se divide en tokens. Un token equivale a unos cuatro caracteres de inglés típico.
[600ms]
[confident] Los tokens de entrada son tu prompt del sistema, el historial y el mensaje del usuario. Los tokens de salida son la respuesta. Los dos ocupan la ventana de contexto, y los dos influyen en el costo en despliegues de pago por token.
[600ms]
[concerned] Los tokens de razonamiento también se cobran como salida. Los números de aquí son solo ejemplos.

## Step 9 · Compare two models

[curious] Comparar modelos envía a cada modelo, a la vez, el mismo prompt, el mismo mensaje del sistema y la misma configuración.
[600ms]
[impressed] Así puedes juzgar calidad, velocidad y tokens lado a lado. Puedes comparar hasta tres modelos.
[600ms]
[calm] Selecciona Comparar modelos en la esquina superior derecha del patio de juegos. Puedes desactivar la sincronización desde el panel de Configuración de un modelo. Los números de aquí son inventados.

## Step 10 · View code

[calm] La pestaña Código muestra la misma llamada en código. El nombre de tu despliegue va en el parámetro del modelo, así que una aplicación llega justo a este despliegue.
[600ms]
[curious] Elige una pestaña de lenguaje y usa Open in VS Code for the Web para llevar el ejemplo y el endpoint a un editor.
[600ms]
[serious] Mantén las claves fuera del control de versiones.

## Step 11 · Clean up: delete the deployment

[calm] Cuando ya no necesites un despliegue, ábrelo y elimínalo.
[600ms]
[reassuring] Cada despliegue ocupa una parte de tu cuota, así que eliminar los que no usas mantiene todo en orden. En el portal los encuentras en Construir y luego Modelos.
[600ms]
[proud] Mira lo que ya sabes hacer: encontrar un modelo, compararlo, desplegarlo, chatear con él y ver el código.
