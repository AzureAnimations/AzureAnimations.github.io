# Narrator Script - Supervisa y mantén al día

**Source animation:** journeys/Compute/VirtualMachines/VirtualMachineMonitoring.html

**Script status:** Authored voiceover.

Delivery cues appear in brackets; pauses are on separate lines.

## Step 1 · Checkout feels slow

[serious] Los clientes dicen que el pago va lento. El equipo no sabe por qué.
[600ms]
[curious] ¿Es la máquina, el disco o la propia aplicación?
[800ms]
[calm] Sin señales, esa discusión no se puede resolver: solo se repite. Vamos a darle a Contoso datos que observar.

## Step 2 · Host signals need no agent

[reassuring] La buena noticia es que parte de la información ya está disponible.
[600ms]
[confident] Azure recopila métricas de procesador, disco y red desde el host, sin instalar nada dentro de la máquina.
[600ms]
[calm] Permiten empezar a ver si la máquina está saturada, sin configuración adicional dentro del sistema invitado.

## Step 3 · Inside the guest needs an agent

[curious] Las métricas del host no muestran todo lo que ocurre dentro del sistema invitado. Activa la telemetría y observa qué aparece.
[600ms]
[confident] Para ver el uso de memoria desde el sistema operativo o recopilar registros internos, necesitas Azure Monitor Agent y una regla de recopilación de datos que indique qué recoger.
[600ms]
[serious] Recuerda la regla. Instalar el agente sin indicarle qué recopilar no te dará esas señales.

## Step 4 · Compare guest performance

[calm] Cuando llegan los datos, VM Insights los reúne.
[600ms]
[confident] El rendimiento de procesador, memoria y disco aparece junto, para investigar si la lentitud del pago está en la máquina o en el código.
[600ms]
[serious] La supervisión del rendimiento sigue siendo compatible. La antigua vista Map y Dependency Agent están en desuso, así que no bases un diseño nuevo en ellos.

## Step 5 · Turn a threshold into action

[curious] Nadie quiere vigilar un panel a las tres de la mañana. Ajusta el umbral y observa cuándo se activa la alerta.
[600ms]
[confident] Una regla comprueba una señal frente a una condición. El grupo de acciones decide la respuesta: un correo, un ticket o una automatización.
[600ms]
[reassuring] La regla y el grupo de acciones están separados a propósito. Una respuesta bien preparada puede servir a muchas reglas.

## Step 6 · Patch on a schedule

[calm] Queda una tarea pendiente que se acumula silenciosamente.
[600ms]
[confident] Azure Update Manager evalúa qué actualizaciones del sistema operativo faltan y permite instalarlas según la programación elegida, sin mantener una canalización propia.
[600ms]
[determined] Aplicar parches no debería ser siempre una emergencia. Es una rutina que planificas y mantienes.

## Step 7 · Monitoring - All in One

[reflective] Cuatro capas ayudan a que la tienda dé menos sorpresas.
[600ms]
[confident] Señales del host disponibles de entrada, datos del sistema invitado mediante el agente, alertas que llegan a una persona y actualizaciones programadas.
[600ms]
[proud] Esa es la diferencia entre tener una máquina encendida y operar un servicio.
