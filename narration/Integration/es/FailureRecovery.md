# Narrator Script — Integration · Failure & Recovery: when a message fails

**Source animation:** [FailureRecovery.html](../../../journeys/Integration/FailureRecovery.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/service-bus-messaging/message-transfers-locks-settlement>
- <https://learn.microsoft.com/azure/service-bus-messaging/service-bus-dead-letter-queues>
- <https://learn.microsoft.com/azure/service-bus-messaging/service-bus-message-loss-and-duplicates>

---

## Step 1 · The broker can’t see inside your handler

[calm] Es Black Friday, faltan dos minutos para la medianoche. Una función cobra la tarjeta de un cliente y se cae justo antes de avisar que terminó.
[600ms]
[serious] Para el broker, el silencio es idéntico a un fallo, así que entrega el mensaje otra vez.
[600ms]
[confident] Eso es entrega al menos una vez. Es una garantía, no un error, así que tu handler tiene que saber manejar una repetición.

## Step 2 · Peek-lock: borrow the message, don’t take it

[curious] En modo peek-lock, el receptor toma prestado un mensaje con un bloqueo exclusivo, así que ningún otro consumidor puede verlo.
[600ms]
[confident] Luego lo resuelve de una de cuatro maneras: completar, abandonar, aplazar o enviar a letra muerta. O simplemente se vence el bloqueo.
[600ms]
[concerned] Recibir y eliminar es distinto. Se resuelve en cuanto el broker lo envía, así que si la transferencia falla, el mensaje se pierde. Úsalo solo para datos de poco valor.

## Step 3 · Every failed lap adds one

[calm] Cada vez que una entrega termina en abandono o con el bloqueo vencido, el contador de entregas sube en uno.
[600ms]
[serious] Cuando llega al número máximo de entregas, Service Bus mueve el mensaje a la cola de letras muertas. Por defecto es diez.
[600ms]
[reassuring] La duración del bloqueo es de un minuto por defecto y llega como máximo a cinco, así que configúrala por encima de tu tiempo normal de procesamiento, o renuévala.

## Step 4 · Break it and watch what happens

[curious] Ahora pruébalo tú. Activa un fallo y luego envía el pedido. Esta cola de demostración usa un máximo de cinco entregas para que sea más corto.
[600ms]
[intrigued] Mira cómo el mensaje se reintenta una y otra vez, hasta que termina en la cola de letras muertas.
[600ms]
[confident] Reenviarlo sin arreglar nada solo lo hace dar otra vuelta. Y un payload defectuoso no vale la pena reintentarlo, así que tu código puede mandarlo de inmediato a letra muerta, con su propio motivo.

## Step 5 · Dead-letter queue: a parking lot with labels

[calm] Cada cola y cada suscripción tiene una subcola de letras muertas. Los mensajes esperan ahí hasta que los quites. No hay limpieza automática.
[600ms]
[confident] Cada uno lleva un motivo que puedes leer. Recibes de ella con un receptor apuntado a la subcola de letras muertas.
[600ms]
[reassuring] Cuando pongas tu propio motivo, incluye el tipo de excepción. Así el triaje es mucho más fácil.

## Step 6 · Recover without losing or duplicating

[calm] El orden importa. Lee el motivo, corrige la causa y luego envía una copia nueva a la cola principal.
[600ms]
[confident] Completa la copia de letra muerta solo después de que ese envío haya funcionado. Si hay una caída en medio, tendrás un duplicado, nunca una pérdida.
[600ms]
[serious] Un reenvío es un mensaje totalmente nuevo, así que haz que tu handler primero verifique, luego actúe, y no se inmute ante una repetición.

## Step 7 · Two helpers: duplicate detection and sessions

[curious] Hay dos funciones que ayudan. La detección de duplicados frena en la puerta un mensaje reenviado cuando tiene el mismo ID de mensaje dentro de la ventana.
[600ms]
[confident] Requiere el nivel Standard o Premium, y la ventana es de diez minutos por defecto.
[600ms]
[calm] Las sesiones mantienen juntos y en orden los mensajes relacionados, con un solo receptor. Una vez activadas, cada mensaje necesita un ID de sesión.

## Step 8 · Event Grid retries on a schedule

[calm] Event Grid entrega cada evento al menos una vez y espera treinta segundos una respuesta.
[600ms]
[confident] Si no llega ninguna, reintenta con un backoff, hasta que tu política de reintentos diga basta: hasta treinta intentos, o un tiempo de vida de hasta un día.
[600ms]
[concerned] El orden no está garantizado y todavía pueden llegar duplicados, así que aquí también aplica el mismo hábito idempotente.

## Step 9 · Publish your own events

[curious] Un tema personalizado es un endpoint al que tu app publica eventos. Puedes autenticarte con la clave de acceso del tema.
[600ms]
[confident] Mejor aún, usa una identidad de Microsoft Entra con el rol de Remitente de Datos EventGrid, y así no hay claves en el código.
[600ms]
[calm] Los temas aceptan CloudEvents o el esquema de Event Grid. CloudEvents es el formato recomendado.

## Step 10 · Who retries? The service that delivers

[curious] ¿Entonces, quién se encarga de los reintentos? Tu función no. Un trigger de Service Bus no agrega ninguno propio.
[600ms]
[confident] El runtime completa el mensaje cuando tu función termina bien, y lo abandona cuando lanza una excepción. Service Bus lleva la cuenta.
[600ms]
[reassuring] Igualmente, los reintentos de un trigger de Event Grid vienen de la suscripción al evento. Las políticas de reintento de las funciones cubren otros triggers.

## Step 11 · Tune it, connect it, ship it safely

[calm] Unos cuantos ajustes de host dot json determinan cómo se leen los mensajes: concurrencia, autocompletado y renovación del bloqueo.
[600ms]
[confident] Usa una identidad gestionada en lugar de un secreto. Una cadena de conexión todavía funciona, pero Learn recomienda la identidad siempre que sea posible.
[600ms]
[serious] Y publica a través de una ranura de staging. Marca la configuración del origen de eventos como configuración de ranura antes de hacer el swap, porque un swap puede cortar funciones en ejecución.

## Step 12 · See failures before customers do

[curious] Los fallos dejan números. En Service Bus, vigila los mensajes enviados a letra muerta, los mensajes abandonados y los errores del servidor.
[600ms]
[confident] En Event Grid, vigila los eventos con entrega fallida, enviados a letra muerta y descartados.
[600ms]
[reassuring] Después, haz que una regla de alerta avise a una persona. Una alerta disparada ejecuta un grupo de acciones, como un correo, un mensaje de texto o una función.

## Step 13 · Failure and recovery, in one view

[calm] Un mensaje fallido lo reintenta el servicio que lo entrega, se aparta con un motivo y un handler idempotente lo reproduce de forma segura.
[600ms]
[confident] Esto forma parte del examen A I 200, en el dominio que vale entre un veinte y un veinticinco por ciento. La guía de estudio menciona el manejo de letras muertas, los filtros de Event Grid, los eventos personalizados y los reintentos.
[600ms]
[proud] Recuerda el ciclo: reintentar, apartar, corregir, reenviar y repetir con seguridad.
