# Narrator Script · Español (es) — Journey 04 · Qué hace a un agente (Asistente de Compras de Contoso)

**Source animation:** `static/v2/AI/Foundry/WhatMakesAnAgent.html`
**Language:** Spanish (es). Traducido del guion maestro en inglés. Las indicaciones `[tags]` y las pausas `[NNNms]` se mantienen sin cambios. Los títulos de paso se conservan en inglés para el mapeo 1:1.

Un bloque por paso de la animación.

---

## Step 1 · The Problem

[curious] Te presentamos el Asistente de Compras con IA de Contoso; ahora mismo, es solo una simple implementación de modelo.
[600ms]
[amused] ¿El problema? Sin instrucciones, responderá encantado preguntas de viajes, finanzas o salud...
[600ms]
[laughter] cualquier cosa menos compras.
[600ms]
[serious] Para un asistente de tienda, eso es un problema real.
[600ms]
[determined] Así que convirtámoslo en un verdadero agente.

## Step 2 · What Is an Agent?

[confident] Un modelo por sí solo no tiene estado y responde cualquier cosa.
[600ms]
[determined] Un agente de Foundry envuelve ese mismo modelo con cuatro ingredientes: Instrucciones, Conocimiento, Herramientas y Memoria.
[600ms]
[proud] Juntos, lo convierten en el experto en compras enfocado de Contoso.

## Step 3 · Instructions

[confident] Lo primero: las Instrucciones, el prompt de sistema duradero que siempre está en vigor.
[600ms]
[calm] Este es el resumen de compras de Contoso. Le indica al asistente que actúe como experto en productos y que se mantenga estrictamente en el tema.
[600ms]
[determined] Y, fundamentalmente, le indica al modelo que rechace con cortesía cualquier cosa fuera de tema: viajes, finanzas o salud.

## Step 4 · Knowledge

[intrigued] Lo siguiente: el Conocimiento.
[600ms]
[confident] Por sí solo, un modelo solo puede adivinar a partir de datos de entrenamiento desactualizados; así que lo fundamentamos en el propio catálogo de productos de Contoso, el historial de pedidos en vivo y la política de devoluciones.
[600ms]
[reassuring] Ahora cada respuesta proviene de datos reales y actuales de la empresa: el precio correcto, el stock correcto, la política real.
[600ms]
[serious] Esa es la diferencia entre un asistente en el que puedes confiar y uno que inventa cosas en silencio.

## Step 5 · Tools

[confident] Luego vienen las Herramientas: el poder de hacer cosas de verdad, no solo hablar.
[600ms]
[calm] Una herramienta es simplemente una función que registras en el agente: código real, una API o una aplicación entera, conectada y lista para ejecutarse.
[600ms]
[proud] Así que el agente no solo habla: lee la intención del cliente, elige la herramienta adecuada y ejecuta software real en su nombre — hacer un pedido, enviar un email, actualizar un sistema en vivo.
[600ms]
[impressed] Toma el primer escenario: un cliente pregunta "¿dónde está mi pedido?"
[600ms]
[confident] El agente interpreta esa intención y recurre a la herramienta de estado del pedido, pasándole el número de pedido que mencionó el cliente.
[600ms]
[determined] Entre bastidores, esa herramienta consulta el sistema de pedidos en vivo de Contoso, recibe el estado de envío real y se lo entrega al modelo.
[600ms]
[reassuring] El modelo convierte esos datos en bruto en una respuesta cálida y en lenguaje sencillo, sin suposiciones, directamente de la fuente.
[600ms]
[proud] Y esta es la respuesta que ve el cliente: el pedido se envió y llega el tres de junio.
[600ms]
[encouraging] Ahora te toca a ti: haz clic en el Escenario 2 y el Escenario 3 para ver cómo el mismo agente gestiona una devolución y una oferta proactiva.

## Step 5s2 · Tools — Scenario 2

[confident] Escenario 2: una devolución. El cliente dice: "Quiero devolver mi pedido reciente".
[500ms]
[impressed] Esta vez una sola petición necesita dos acciones, así que el agente encadena dos herramientas: primero inicia la devolución para abrir el caso y luego pasa ese resultado directamente a un email.
[500ms]
[determined] Fíjate en el orden: la segunda herramienta solo se ejecuta cuando la primera tiene éxito, y el nuevo número de devolución fluye directamente al mensaje.
[500ms]
[reassuring] Momentos después, la devolución se abre, sale un email de confirmación con la etiqueta de envío, y el asistente le dice al cliente que todo está en camino: un mensaje, dos acciones reales realizadas.

## Step 5s3 · Tools — Scenario 3

[intrigued] Escenario 3: una oferta proactiva. Esta vez no hay pregunta; el cliente solo está mirando chaquetas de invierno.
[500ms]
[confident] Aquí el agente actúa solo por el contexto: nadie le preguntó nada. Al leer esa señal de navegación, decide que vale la pena ejecutar tres herramientas.
[500ms]
[impressed] Así que las lanza juntas: recomendar productos para encontrar una opción, comprobar el inventario para asegurarse de que hay stock, y consultar los puntos de fidelidad para ver cuánto valen.
[500ms]
[proud] Llega a la Aurora Parka, confirma que está disponible, y ve que los puntos del cliente pueden descontar veinticuatro dólares; y entonces se la ofrece, en el momento justo y sin que se lo pidan.

## Step 6 · Memory

[curious] Pero una sola llamada al modelo olvida todo en el momento en que termina.
[600ms]
[confident] Así que añadimos Memoria: un hilo que almacena toda la conversación, mensaje a mensaje.
[600ms]
[reassuring] Ahora el asistente recuerda la talla del comprador, su carrito y las preguntas anteriores, de modo que el chat se siente continuo.

## Step 7 · Build It

[encouraging] Ahora reúne todo en Foundry.
[600ms]
[confident] Envuelve esa misma implementación de modelo como un Agente: añade instrucciones, conocimiento, herramientas y memoria, y luego ejecuta el bucle.
[600ms]
[proud] Publícalo en contoso.com: por fin fiel a la marca, centrado en el tema y haciendo trabajo real.
