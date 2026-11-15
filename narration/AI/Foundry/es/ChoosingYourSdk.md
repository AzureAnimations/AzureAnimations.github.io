# Elegir tu SDK de IA — Narración

Source animation: `journeys/AI/Foundry/ChoosingYourSdk.html`

Un bloque por paso, emparejado 1:1 con `STEPS[]`. Los `[NNNms]` son pausas.

---

## Step 1 · Three SDKs, One Application

Azure OpenAI SDK. Foundry SDK. Microsoft Agent Framework.
[500ms]
Tres nombres que parecen hacer lo mismo: llamar a un modelo y recibir una respuesta.
[600ms]
No son competidores. Son tres capas de una misma pila, y la mayoría de las aplicaciones reales acaban usando más de una.
[400ms]
Así que la pregunta no es cuál es mejor. Es detrás de qué endpoint vive la función que necesitas.

---

## Step 2 · One Resource, Two Endpoints

Todo se deduce de esta imagen.
[500ms]
Un recurso de Foundry expone dos endpoints distintos. El endpoint del proyecto, que sirve agentes, herramientas, evaluaciones y conexiones. Y el endpoint de Azure OpenAI, que sirve modelos directamente.
[600ms]
El SDK de OpenAI habla con el segundo. El SDK de Foundry habla con el primero. Y el Agent Framework no habla directamente con ninguno: depende del SDK de Foundry y se apoya encima.
[400ms]
Elige primero el endpoint. El SDK viene después.

---

## Step 3 · Azure OpenAI SDK

La capa inferior es el cliente de OpenAI de siempre, apuntando a tu recurso de Azure.
[500ms]
Aquí no hay abstracciones específicas de Azure. Es la misma forma de código que escribirías contra OpenAI directamente, y por eso es el camino más rápido si ya tienes código de OpenAI.
[600ms]
Úsalo cuando quieras máxima compatibilidad, la menor latencia o embeddings. Y ojo con los embeddings, porque el endpoint del proyecto no los enruta en absoluto.
[400ms]
Lo que no obtienes: agentes, evaluaciones, conexiones. Nada de eso existe en este endpoint.

---

## Step 4 · Foundry SDK

Una capa más arriba, el SDK de Foundry es un cliente ligero sobre todas las API del proyecto, a través de un único endpoint.
[500ms]
Te entrega dos clientes, y la mayoría de las aplicaciones usan ambos. El cliente de proyecto para lo propio de Foundry: conexiones, despliegues, trazabilidad. Y un cliente compatible con OpenAI para todo lo que tiene forma de OpenAI: respuestas, agentes, evaluaciones, ajuste fino.
[600ms]
Esta es la capa donde aparecen las herramientas de la plataforma: búsqueda de archivos, intérprete de código, búsqueda web, memoria, servidores MCP.
[400ms]
Un endpoint, una credencial, todo el proyecto.

---

## Step 5 · Microsoft Agent Framework

La capa superior convierte un cliente de modelo en un agente, y varios agentes en un flujo de trabajo.
[500ms]
Es de código abierto, funciona en .NET y Python, y es el sucesor de Semantic Kernel y AutoGen. Si estabas combinando esos dos para orquestar, aquí es donde consolidarlo.
[600ms]
Se conecta mediante FoundryChatClient, lo que significa que depende del SDK de Foundry por debajo: es una capa encima, no una alternativa.
[400ms]
Y cuando estés listo, el mismo código se empaqueta como agente hospedado de Foundry con un endpoint gestionado.

---

## Step 6 · How They Fit Together

Aquí están los mismos tres SDK como diagrama de componentes.
[500ms]
Tu aplicación depende del Agent Framework. El Agent Framework requiere una interfaz que proporciona el SDK de Foundry. El SDK de Foundry requiere la API de proyecto del recurso de Foundry.
[600ms]
Y fíjate en el segundo camino: tu aplicación también puede depender directamente del SDK de OpenAI, que llega al modelo por la interfaz OpenAI v1, saltándose el proyecto por completo.
[400ms]
Dos rutas al mismo recurso, para dos trabajos distintos.

---

## Step 7 · In a Real Application

Ahora colócalo en un sistema desplegado.
[500ms]
El navegador no tiene SDK ni secretos. Tu servicio — FastAPI, ASP.NET, lo que ejecutes — se encarga de la autenticación, los límites de uso y las reglas de negocio, y es la única capa que sostiene un cliente de SDK.
[600ms]
Por debajo, los tres SDK pueden convivir en el mismo servicio, porque todos apuntan al mismo proyecto de Foundry y todos aceptan la misma credencial.
[400ms]
Usa DefaultAzureCredential, no una clave de API. Las claves siguen funcionando en el endpoint de OpenAI, pero en producción lo que quieres es identidad administrada.

---

## Step 8 · So Which One Do I Use?

Aquí está la decisión, como una tabla que puedes usar de verdad.
[500ms]
Empieza por la fila — lo que necesitas hacer — y lee hacia la derecha.
[400ms]
¿Embeddings o la menor latencia? SDK de OpenAI. ¿Herramientas de Foundry, evaluaciones, trazabilidad, conexiones? SDK de Foundry. ¿Varios agentes en un flujo, o un endpoint hospedado y gestionado? Agent Framework.
[600ms]
Y donde una fila tenga dos marcas, quédate con la más sencilla. Un guion no significa imposible: significa endpoint equivocado, y estarías peleándote con el SDK para llegar.

---

## Step 9 · Pick Your Layer

Así que la regla es simple: empieza en la capa más baja que resuelva el trabajo.
[500ms]
¿Solo el modelo? Quédate en el SDK de OpenAI. ¿Necesitas el proyecto, sus herramientas, sus evaluaciones, sus conexiones? Sube al SDK de Foundry. ¿Coordinas varios agentes? Deja que el Agent Framework lleve el bucle.
[600ms]
Y subir de capa más adelante sale barato, porque el mismo endpoint de proyecto y la misma credencial siguen valiendo.
[400ms]
Elige la capa más baja que funcione. Sube solo cuando algo te obligue.
