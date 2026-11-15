# Guion del narrador — Episodio 2 · El desastre de la transacción VIP

**Source animation:** `journeys/Integration/VipTransactionDisaster.html`

**Script status:** Authored voiceover.

---

## Step 1 · The cancellation beat the order

[calm] La cancelación llega después del pedido, pero termina antes. Aún no existe un pedido que cancelar. El pedido se confirma después. Es una carrera de orden, no una prueba de cobro doble. Agrupa los mensajes relacionados en una sesión y protege también las reentregas.

## Step 2 · What a simple queue does not give you

[calm] Queue Storage es excelente para amortiguar trabajo independiente. El dinero no es trabajo independiente.
[500ms]
[confident] El dinero necesita orden, bloqueos que puedas ampliar y un sitio seguro donde dejar un mensaje roto. Service Bus aporta orden de llegada dentro de una sesión, mensajes de hasta doscientos cincuenta y seis kilobytes, una cola de mensajes fallidos integrada, detección de duplicados, transacciones y temas con dos mil suscripciones.
[600ms]
[reflective] Cambia a Service Bus cuando un solo mensaje valga más que el proceso que lo trata. Lo que pagas de más es la fiabilidad, no el rendimiento.

## Step 3 · Sessions put the VIP back in order

[optimistic] La solución es una sola propiedad. Marca cada mensaje con un id de sesión: aquí, el id del cliente.
[500ms]
[confident] Service Bus entrega entonces esa sesión completa a un único receptor, en el orden en que llegó. El pedido ocho ocho cero uno se procesa primero, su cancelación después, y la sesión de otro cliente sigue ejecutándose en paralelo en otro receptor.
[600ms]
[calm] Una sesión es un bloqueo sobre una conversación, no sobre un mensaje. Un receptor posee a ese cliente hasta que lo libera.

## Step 4 · Peek-lock, and a cell for bad messages

[calm] Peek-lock permite recibir sin eliminar. Complete elimina un mensaje procesado con éxito. Abandon libera el bloqueo inmediatamente; tras un fallo, la reentrega puede esperar a su vencimiento. Los fallos repetidos pueden llevar el mensaje a la cola de mensajes fallidos. Revísalo, corrígelo y reenvíalo; la recuperación no es automática.

## Step 5 · One order, three teams, zero coupling

[curious] Facturación, envíos y fidelización necesitan el mismo pedido. Así que publícalo una vez.
[500ms]
[confident] Un tema reparte ese único mensaje a suscripciones independientes, cada una con su filtro, su acumulación y su cola de mensajes fallidos. Facturación se lo lleva todo, envíos filtra por productos físicos y fidelización por pedidos de más de cien.
[600ms]
[optimistic] Como las suscripciones son colas independientes, fidelización puede estar caído una hora y sus mensajes simplemente esperan. Facturación ni se entera, y nadie tiene que cambiar al publicador.

## Step 6 · Episode 2: Service Bus is the safe lane

[calm] Elige Service Bus para mensajes de negocio que necesitan coordinación. Las sesiones conservan el orden dentro de cada sesión; peek-lock separa recibir de completar. Las colas de mensajes fallidos aíslan errores y los temas dan copias independientes a los suscriptores. Sigue necesitando controladores idempotentes: un reintento no debe cobrar otra vez.

