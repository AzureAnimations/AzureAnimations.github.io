# Narrator Script — Foundry · Build lightweight Foundry apps in Python

**Source animation:** [FoundryCodeAlong.html](../../../../journeys/AI/Foundry/FoundryCodeAlong.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/foundry/quickstarts/get-started-code>
- <https://learn.microsoft.com/azure/developer/python/sdk/authentication/credential-chains>
- <https://learn.microsoft.com/azure/foundry/openai/how-to/responses>
- <https://learn.microsoft.com/azure/foundry/openai/audio-completions-quickstart>

---

## Step 1 · A small app, three things to start

[calm] Un cliente ligero es solo un script corto de Python para Contoso Outfitters. Todos los datos de aquí son inventados.
[600ms]
[confident] El trabajo pesado se ejecuta en Foundry. Tu código envía una solicitud y usa la respuesta.
[600ms]
[curious] Microsoft Learn describe el Foundry SDK como un cliente ligero sobre las APIs del proyecto. Esta lección usa el paquete Azure AI Projects, versión dos punto x.

## Step 2 · Set up and sign in

[calm] Ejecuta az login una sola vez e instala el paquete. Luego deja que DefaultAzureCredential encuentre tu identidad.
[600ms]
[confident] Funciona como una cadena. Prueba las fuentes de inicio de sesión en orden: la configuración del entorno, una identidad administrada en Azure o tu inicio de sesión de la línea de comandos de Azure.
[600ms]
[reassuring] Así funciona igual en local y en producción, y ninguna clave llega a estar en el código.

## Step 3 · Chat with a model

[curious] Crea el cliente del proyecto y pídele un cliente de OpenAI.
[600ms]
[confident] Envía un prompt con la llamada responses create e imprime la respuesta.
[600ms]
[serious] En el argumento del modelo, pon el nombre de tu propio despliegue de modelo. Es la misma llamada que usa el inicio rápido de Learn.

## Step 4 · Analyze text

[curious] El cliente de Azure Language lee la reseña de un cliente y devuelve su sentimiento, sus frases clave y sus datos personales, cada uno con una sola llamada a un método.
[600ms]
[calm] Para iniciar sesión con Microsoft Entra ID, se necesita un endpoint con un subdominio personalizado.
[600ms]
[concerned] Learn incluye el análisis de sentimiento y la extracción de frases clave entre las funciones que se van a retirar, mientras que la detección de datos personales sigue. Revisa la página actual de Learn antes de empezar un proyecto nuevo.

## Step 5 · Speak and transcribe

[calm] El cliente de Azure Speech convierte texto en un archivo de audio y luego vuelve a convertir ese audio en texto.
[600ms]
[curious] Los dos sentidos comparten una misma configuración de voz. Learn la arma con una clave y un endpoint guardados en variables de entorno.
[600ms]
[confident] Reconocer una vez procesa una sola frase, que dura hasta treinta segundos o hasta que haya silencio.

## Step 6 · Ask about an image

[curious] Un despliegue de modelo que acepta imágenes puede responder preguntas sobre ellas.
[600ms]
[confident] Envía la imagen y tu pregunta juntas, en un solo mensaje.
[600ms]
[calm] Learn enumera tres formas de proporcionar la imagen: una URL pública, un URI de datos en Base64 o el ID de un archivo de la Files API. Usa un despliegue con visión habilitada.

## Step 7 · Send a spoken prompt

[curious] Un modelo con audio recibe la grabación directamente como entrada. No hay un paso aparte de transcripción antes de la respuesta.
[600ms]
[calm] El inicio rápido de Learn usa chat completions con modalidades de texto y audio, y un archivo WAV codificado en Base64 como audio de entrada.
[600ms]
[serious] La disponibilidad de los modelos varía según la región, así que primero revisa la página de modelos.

## Step 8 · Extract from files

[curious] Un solo cliente de Content Understanding maneja tres tipos de entrada. Elige el analizador prediseñado para el tipo de archivo y lee el resultado estructurado.
[600ms]
[confident] El analizador de facturas devuelve campos, el de imágenes describe una imagen y el de audio transcribe y agrega un resumen.
[600ms]
[serious] Primero tienes que configurar en tu recurso de Foundry los despliegues de modelos que necesitan los analizadores. El README de Learn indica qué modelos necesita cada uno.

## Step 9 · Call an agent

[calm] El agente ya existe en tu proyecto, con sus instrucciones y su modelo.
[600ms]
[confident] El cliente solo necesita su nombre, una conversación y un mensaje. Obtienes un cliente de OpenAI vinculado a ese agente.
[600ms]
[impressed] La conversación conserva el historial entre turnos, así que las preguntas de seguimiento funcionan sin más.

## Step 10 · Handle errors and clean up

[serious] Captura los errores ante los que puedas hacer algo. Learn recomienda no reintentar con cuatrocientos, cuatro cero uno, cuatro cero tres o cuatro cero cuatro.
[600ms]
[calm] Considera reintentar con backoff para el cuatro veintinueve y para los errores del servidor. Un cuatro cero tres significa que falta un permiso, así que inicia sesión con Entra ID en vez de usar claves, y elimina lo que hayas creado.
[600ms]
[proud] Estos seis clientes son las habilidades prácticas de la guía de estudio A I 901.
