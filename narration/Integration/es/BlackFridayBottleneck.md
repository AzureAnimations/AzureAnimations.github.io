# Guion del narrador — Episodio 1 · El cuello de botella del Black Friday

**Source animation:** `journeys/Integration/BlackFridayBottleneck.html`

**Script status:** Authored voiceover.

---

## Step 1 · Black Friday breaks the checkout

[serious] Faltan dos minutos para medianoche el Black Friday, y la caja de Contoso Retail ha dejado de responder.
[500ms]
[calm] Cada clic en Comprar ahora llama a la base de datos de inventario y luego la espera. Con doce mil cuatrocientos compradores por minuto, esa espera es lo que mata el sitio. Doscientos subprocesos de trabajo, ninguno libre, y compradores que reciben un error de tiempo de espera en lugar de un recibo.
[600ms]
[curious] Aquí no hay código roto. Es un problema de acoplamiento.

## Step 2 · 99% of a checkout is spent waiting

[calm] El diagrama muestra nueve mil cien milisegundos de espera de un total de nueve mil ciento noventa: cerca del noventa y nueve por ciento. La espera ocupa subprocesos. Con doscientos subprocesos y unos nueve segundos por solicitud, caben unas mil trescientas solicitudes por minuto. Son cifras ilustrativas, no un límite de Azure.

## Step 3 · Maya cuts the wire

[optimistic] Así que Maya se hace una pregunta mejor. ¿De verdad la caja necesita que la base de datos responda?
[600ms]
[confident] No lo necesita. Necesita una promesa de que el pedido se procesará. Y esa promesa es un mensaje en una cola.
[500ms]
[calm] Desacoplar no va realmente de velocidad. Va de quién tiene que estar sano en el mismo instante. Tras el corte, solo la cola debe estar disponible cuando el comprador hace clic.

## Step 4 · Meet the Azure Storage queue

[calm] Una cola es una lista duradera de mensajes pequeños en tu cuenta de almacenamiento, y con cuatro comportamientos basta para entenderla.
[400ms]
[confident] Un mensaje admite hasta sesenta y cuatro kilobytes. Obtener un mensaje lo oculta a los demás durante el tiempo de espera de visibilidad, treinta segundos de forma predeterminada. Eliminarlo significa que el trabajo salió bien. Y un contador de entregas detecta los mensajes que fallan una y otra vez.
[500ms]
[serious] La entrega es al menos una vez, y el orden suele ser, pero no siempre, el de llegada. Diseña el trabajador para que sea seguro si ve el mismo pedido dos veces.

## Step 5 · The same night, buffered

[optimistic] La misma noche. Los mismos doce mil cuatrocientos compradores por minuto.
[500ms]
[confident] Pero ahora la caja escribe un mensaje y responde en ciento veinte milisegundos. Los trabajadores de inventario vacían la acumulación al ritmo que la base de datos puede sostener de verdad, y la escritura baja de nueve segundos y medio a cuarenta milisegundos.
[600ms]
[calm] El pico no desapareció. Se movió. La profundidad de la cola es ahora tu señal de carga: escala con ella, alerta con ella y deja que absorba el pico en lugar de tus clientes.

## Step 6 · Episode 1: buffer the work, keep the sale

[confident] Una cola de Storage es la forma más barata y sencilla de evitar que un back-end lento se lleve por delante tu front-end.
[500ms]
[calm] El productor escribe un mensaje pequeño y responde de inmediato. El búfer admite hasta quinientos tebibytes y mueve dos mil mensajes por segundo. El consumidor obtiene, procesa y elimina, y gestiona él mismo los mensajes dañados.
[600ms]
[encouraging] Recurre a esto cuando el trabajo en segundo plano sea sencillo. Cuando necesites orden estricto, transacciones o publicación y suscripción, eso es el episodio dos.
