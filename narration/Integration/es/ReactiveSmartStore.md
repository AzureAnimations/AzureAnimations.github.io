# Guion del narrador — Episodio 4 · La tienda inteligente reactiva

**Source animation:** `journeys/Integration/ReactiveSmartStore.html`

**Script status:** Authored voiceover.

---

## Step 1 · Nobody is streaming. Everyone is knocking.

[curious] Este no es un problema de volumen. Es un problema de cortesía.
[500ms]
[calm] Los proveedores dejan un catálogo nuevo en el almacenamiento un par de veces al día. Tres servicios distintos sondean ese contenedor cada treinta segundos, todo el día, por si acaso: ocho mil seiscientas cuarenta llamadas, de las cuales exactamente dos encuentran algo.
[600ms]
[serious] El sondeo te cuesta tres veces: las llamadas a la API, el proceso que las hace y los minutos de latencia entre que el archivo llega y alguien se entera.

## Step 2 · Let the event announce itself

[optimistic] Así que Maya activa un tema del sistema.
[500ms]
[confident] Ahora Storage emite un evento de blob creado en el instante en que el archivo aterriza, y Event Grid lo envía a todos los suscritos, casi en tiempo real y sin nada de sondeo. Una función reindexa el catálogo, un webhook despierta al back-end móvil y una cola de Service Bus amortigua el portal de proveedores.
[600ms]
[calm] Event Grid es un enrutador, no una cola tuya. Nunca aprovisionas rendimiento. Declaras un origen, una suscripción con filtros y un sitio al que entregar.

## Step 3 · A tiny envelope, and rules about who opens it

[calm] Un evento de Event Grid es una notificación, no una carga.
[500ms]
[confident] Quién, qué, dónde y cuándo: normalmente uno o dos kilobytes, en el formato estándar CloudEvents. El asunto te dice de qué blob se trata, los datos llevan la dirección y el tamaño, y eso es deliberadamente todo.
[500ms]
[serious] Después, cada suscripción filtra por esos campos. Filtra en la suscripción, nunca dentro del controlador: un controlador que arranca, inspecciona un evento y sale sigue siendo un arranque en frío que has pagado.

## Step 4 · At least once, and a schedule to prove it

[calm] Event Grid espera treinta segundos a que tu controlador responda.
[500ms]
[confident] Si no lo hace, el evento se reintenta con una espera creciente: diez segundos, treinta, un minuto, cinco, y así sucesivamente, hasta que tenga éxito, hasta que caduque el tiempo de vida de veinticuatro horas, o hasta llegar a treinta intentos.
[500ms]
[serious] En ese punto el evento se descarta, salvo que hayas configurado un contenedor de mensajes fallidos. Eso es opcional. Y al menos una vez significa que tu controlador verá duplicados algún día, así que indexa el trabajo por el id del evento.

## Step 5 · When the handler cannot be reached, pull instead

[calm] Un consumidor privado puede extraer eventos por HTTP de un tema de espacio de nombres. Receive devuelve eventos y tokens de bloqueo. Acknowledge completa, release los libera y reject trata eventos que no se pueden procesar. MQTT es una capacidad separada de publicación y suscripción; sus clientes no usan esta API HTTP.

## Step 6 · Four services, one question each

[reflective] Esta es toda la serie en una tabla.
[500ms]
[confident] Pregúntate qué es realmente la carga. Una tarea simple va a una cola de Storage. Una transacción de negocio va a Service Bus. Un flujo de mediciones va a Event Hubs. Un aviso de que algo cambió va a Event Grid.
[600ms]
[calm] La regla general: un mensaje significa que alguien tiene que actuar sobre él. Un evento significa que algo ocurrió, y a los interesados quizá les importe. La mayoría de los sistemas reales usan varios a la vez.

## Step 7 · Episode 4: Event Grid is the nervous system

[proud] Contoso Retail ha pasado de un monolito que agotaba el tiempo de espera a cuatro canalizaciones desacopladas.
[500ms]
[confident] Trabajo con búfer, pedidos garantizados, telemetría registrada y reacciones instantáneas. Enrutamiento por inserción con quinientas suscripciones por tema, filtrado en el sobre, reintentos con mensajes fallidos opcionales, y entrega de extracción para los consumidores a los que no puedes llegar.
[600ms]
[encouraging] Todos estos servicios son de al menos una vez. La costumbre que hace seguros a los cuatro es la misma: controladores idempotentes, indexados por un id.
