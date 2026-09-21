# Guion del narrador — Episodio 3 · El tsunami de sensores

**Source animation:** `journeys/Integration/SensorTsunami.html`

**Script status:** Authored voiceover.

---

## Step 1 · The telemetry flood drowns the queue

[curious] Contoso enciende estanterías inteligentes, líneas de caja y el flujo de clics de la web.
[500ms]
[serious] Cada lectura es diminuta. Pero hay cien mil por segundo, y la cola de pedidos se queda en unos dos mil mensajes por segundo. El resultado es limitación, lecturas perdidas y paneles que se quedan a ciegas.
[600ms]
[calm] Una cola tiene el precio y la forma de los elementos de trabajo. La telemetría no es trabajo: es una manguera de hechos, y cada uno cuesta una ida y vuelta que a este ritmo no te puedes permitir.

## Step 2 · Stop delivering. Start recording.

[optimistic] Así que Maya cambia la forma del problema.
[500ms]
[confident] Un agente entrega un mensaje a un trabajador y lo elimina. Un registro añade cada evento y deja que cualquier número de lectores avance a su propio ritmo.
[500ms]
[calm] Esa es la verdadera línea divisoria en la mensajería de Azure. Los servicios intermediados eliminan lo que entregan. Los servicios de transmisión lo conservan y reparten un marcador. Un reembolso es un mensaje. La lectura de una estantería es un evento.

## Step 3 · Partitions turn one pipe into parallel lanes

[calm] Un centro de eventos es un registro de solo anexión, dividido en particiones.
[500ms]
[confident] La clave de partición decide el carril, y dentro de un carril el orden es exacto: así cada lectura de la estantería A catorce se mantiene en secuencia. Standard te da de una a treinta y dos particiones, eventos de hasta un megabyte, y habla AMQP, Kafka y HTTPS.
[600ms]
[serious] Elige esa clave por orden y por reparto. Un id de tienda mantiene juntos los eventos de una tienda, pero una clave demasiado popular crea una partición caliente mientras las demás están ociosas.

## Step 4 · Offsets and consumer groups: read it twice

[calm] Los consumidores mantienen posiciones independientes. Aquí realtime está en el desplazamiento cuarenta y dos y batch en el treinta y seis: seis posiciones por detrás. Leer no elimina eventos. Un punto de control guarda dónde reanudar tras reiniciar. Guarda esos puntos deliberadamente y permite reprocesar con seguridad: un evento puede leerse otra vez.

## Step 5 · Capture archives the stream without consumer code

[calm] Capture archiva el flujo sin código de consumidor, no sin coste. Escribe lotes Avro en Blob Storage o Data Lake al alcanzar el tiempo o tamaño configurado. Se cobra aparte en Standard y está incluido en Premium y Dedicated. El almacenamiento de destino se cobra también. Los lectores conservan su capacidad de salida.

## Step 6 · Episode 3: Event Hubs is the firehose

[confident] Cuando el volumen es enorme, la carga es diminuta y más de un sistema quiere los mismos datos, lo que quieres es un registro, no una cola.
[500ms]
[calm] Los eventos se registran y nunca se eliminan al leerlos. Las particiones te dan carriles paralelos con orden exacto dentro de cada uno. Los grupos de consumidores dan a cada equipo su propia vista y su propio desplazamiento. Capture deja el archivo automáticamente.
[600ms]
[encouraging] Event Hubs responde a qué está pasando, a escala. El próximo episodio responde a una pregunta muy distinta: algo ha cambiado, ¿quién necesita saberlo?
