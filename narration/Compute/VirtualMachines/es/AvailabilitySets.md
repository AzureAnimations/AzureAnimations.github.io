# Narrator Script - Conjuntos de disponibilidad

**Source animation:** journeys/Compute/VirtualMachines/AvailabilitySets.html

**Script status:** Authored voiceover.

Delivery cues appear in brackets; pauses are on separate lines.

## Step 1 · One host, one point of failure

[serious] La tienda funciona, y depende de una sola máquina virtual.
[600ms]
[curious] ¿Qué pasa si falla el host físico o si la plataforma necesita detenerlo para hacer mantenimiento?
[800ms]
[calm] La tienda se detiene con él. Una sola máquina es un punto único de fallo, por muy bien configurada que esté.

## Step 2 · Prepare another application instance

[confident] El primer paso es preparar otra máquina con la misma aplicación.
[600ms]
[serious] Azure no copia la tienda por ti. El equipo despliega la segunda máquina virtual, instala la aplicación y coloca un equilibrador de carga delante de ambas.
[600ms]
[reassuring] Dos instancias preparadas son la base de todo lo que veremos en esta lección.

## Step 3 · Separate fault domains

[calm] Ahora le pedimos a Azure que separe esas dos máquinas.
[600ms]
[confident] Un conjunto de disponibilidad las distribuye entre dominios de error. Cada dominio agrupa hardware que comparte una fuente de alimentación y un conmutador de red.
[600ms]
[reassuring] Si un fallo afecta a un bastidor, la instancia del otro dominio puede seguir atendiendo a los clientes.

## Step 4 · Separate update domains

[calm] El mismo conjunto también organiza las máquinas en dominios de actualización.
[600ms]
[confident] El mantenimiento planificado de la plataforma recorre estos grupos de uno en uno, para no reiniciar todas las instancias al mismo tiempo.
[600ms]
[serious] No son zonas de disponibilidad. Los dominios de error y de actualización separan riesgos dentro del ámbito de un centro de datos.

## Step 5 · A hardware failure unfolds

[curious] Avanza por los estados del escenario y observa el orden de los acontecimientos.
[600ms]
[serious] Primero cae la instancia. Después, los sondeos de estado detectan el fallo y dejan de enviarle tráfico.
[600ms]
[calm] Las conexiones nuevas van a la máquina sana. Las que dependían de la máquina caída pueden perderse, así que la aplicación debe estar preparada para reintentar.

## Step 6 · Know the boundary

[reflective] También hay que entender lo que este diseño no cubre.
[600ms]
[serious] Un conjunto de disponibilidad separa fallos de hardware y mantenimiento planificado dentro del ámbito de un centro de datos. No cubre la pérdida de una zona completa ni repara una aplicación averiada.
[600ms]
[confident] Microsoft recomienda conjuntos de escalado con orquestación Flexible para disponer de más opciones de disponibilidad. Los conjuntos de disponibilidad siguen vigentes y no están en desuso.

## Step 7 · Availability Sets - All in One

[reflective] Ahora reunamos todas las piezas.
[600ms]
[confident] Los dominios de error separan el riesgo de hardware, los de actualización separan el mantenimiento planificado, y el equilibrador envía tráfico a las instancias sanas.
[600ms]
[determined] La aplicación, sus réplicas y sus datos siguen siendo responsabilidad del equipo. A continuación veremos las zonas.
