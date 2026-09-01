# Guion de narración — Azure PaaS Compute · 04 · Function App

**Source animation:** `static/v2/Compute/FunctionApp.html`

---

## Step 1 · intro

[confident] Última parada — un tipo distinto de cómputo: la Function App.
[600ms]
[calm] Aloja pequeños fragmentos de código, llamados funciones, que se ejecutan solo cuando ocurre un evento. No hay servidores que administrar, y pagas solo mientras tu código realmente se ejecuta.
[700ms]
[amused] Serverless no significa que no haya servidores — significa que Azure los ejecuta y escala por ti, de forma invisible.

## Step 2 · triggers

[confident] Cada función empieza con exactamente un desencadenador — el evento que la ejecuta.
[600ms]
[calm] Puede ser una solicitud HTTP, un temporizador, un mensaje en una cola o un archivo nuevo subido al almacenamiento.
[500ms]
[calm] Luego, enlaces opcionales conectan la función a los datos, como entrada o salida — una base de datos, almacenamiento, una cola de mensajes.
[700ms]
[impressed] Los enlaces son declarativos: describes la conexión y el runtime la conecta por ti — sin código de integración.

## Step 3 · scaling

[confident] Aquí está la verdadera magia del serverless. Un controlador de escala observa qué tan rápido llegan los eventos.
[600ms]
[calm] Cuando la carga sube, agrega instancias; cuando baja, las quita — hasta llegar a cero.
[700ms]
[impressed] En Consumption y Flex Consumption, una app inactiva no cuesta nada. Sin eventos, sin instancias, sin factura.

## Step 4 · plans

[confident] Functions te da varios planes de hospedaje, para que ajustes el plan a la carga de trabajo.
[600ms]
[calm] Flex Consumption es la opción serverless recomendada — escalado rápido, soporte de red virtual, pago por uso. Premium elimina los arranques en frío con instancias precalentadas. Dedicated reutiliza un App Service Plan para un costo predecible.
[700ms]
[encouraging] ¿No sabes por dónde empezar? Comienza con Flex Consumption y ajusta después.

## Step 5 · compare

[confident] Entonces, ¿cuándo eliges Functions en lugar de una App Service?
[600ms]
[calm] Usa Functions cuando el trabajo es corto, basado en eventos y en ráfagas — y puede escalar a cero cuando está inactivo.
[500ms]
[calm] Usa App Service cuando ejecutas una app web o API continua que siempre está activa.
[700ms]
[reassuring] Y comparten la misma plataforma — incluso puedes ejecutar ambas en un mismo grupo de recursos y conectarlas.

## Step 6 · recap

[proud] Eso completa el panorama: los desencadenadores inician tu código, los enlaces lo conectan a los datos, el escalado por eventos lo dimensiona de cero a miles, y Flex Consumption lo mantiene económico.
[700ms]
[encouraging] Despliega una función, apúntale un desencadenador y deja que Azure maneje los servidores y la escala. Ese es el recorrido de Azure PaaS Compute — bien hecho.
