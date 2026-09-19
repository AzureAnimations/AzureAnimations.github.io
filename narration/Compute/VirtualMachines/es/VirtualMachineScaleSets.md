# Narrator Script - Virtual Machine Scale Sets

**Source animation:** journeys/Compute/VirtualMachines/VirtualMachineScaleSets.html

**Script status:** Authored voiceover.

Delivery cues appear in brackets; pauses are on separate lines.

## Step 1 · Demand changes

[curious] El tráfico de Contoso no es constante: mañanas tranquilas, una campaña intensa y una semana más lenta después.
[800ms]
[serious] Dimensionar una máquina enorme para la hora más exigente significa pagar esa capacidad todo el mes, y aun así puedes equivocarte.
[600ms]
[confident] La tienda necesita capacidad que siga la demanda, en lugar de depender de una predicción.

## Step 2 · Manage a group of VMs

[calm] Un conjunto de escalado cambia la unidad que administras.
[600ms]
[confident] En vez de crear máquinas una a una, defines su configuración y el conjunto crea y administra instancias a partir de ella.
[600ms]
[serious] Administra las instancias. La aplicación que ejecutan y el equilibrador de carga que tienen delante siguen siendo componentes que debes configurar por separado.

## Step 3 · Choose an orchestration mode

[curious] La primera decisión importante es el modo de orquestación.
[800ms]
[confident] Las instancias de Flexible son recursos de máquina virtual normales que puedes inspeccionar y administrar individualmente. Las de Uniform son específicas del conjunto y se administran como grupo.
[600ms]
[serious] El modo se elige al crear el conjunto y no se puede cambiar después. Aquí seguimos con Flexible, el modo recomendado.

## Step 4 · Configure a bounded scaling policy

[calm] Ahora configura una regla para el conjunto.
[600ms]
[confident] Este ejemplo mantiene entre dos y cuatro máquinas. La directiva agrega o retira instancias según cambia la demanda.
[600ms]
[serious] No es instantáneo. Evaluar la regla, esperar el enfriamiento, crear una máquina y comprobar que está lista lleva tiempo. Prepara la capacidad antes del pico.

## Step 5 · Combine scaling with zone placement

[calm] Capacidad y ubicación son decisiones distintas, y un conjunto de escalado puede resolver ambas.
[600ms]
[confident] Si lo configuras para abarcar zonas de disponibilidad, las instancias se distribuyen entre ellas al crearse.
[600ms]
[serious] Esa distribución debe configurarse. Un conjunto no zonal no garantiza que las instancias estén repartidas entre zonas.

## Step 6 · Separate routing health from repair

[curious] Aquí hay dos mecanismos de estado, con funciones distintas.
[600ms]
[confident] Los sondeos del equilibrador deciden adónde va el tráfico nuevo. Las reparaciones automáticas deciden cuándo sustituir una instancia que no funciona.
[600ms]
[serious] En Flexible, las reparaciones requieren la extensión Application Health y una directiva habilitada, con un período de gracia para no confundir un arranque lento con un fallo. Cambia los estados y observa las dos respuestas.

## Step 7 · Scale in with the application in mind

[serious] Reducir el número de instancias es la mitad que suele olvidarse.
[600ms]
[calm] Cuando una regla elimina una instancia, se pierde lo que dependía de ella, incluidas las sesiones y los datos guardados solo en su disco local.
[600ms]
[determined] Diseña para esa retirada: termina o transfiere el trabajo pendiente, atiende la notificación de terminación y guarda el estado duradero fuera de la máquina.

## Step 8 · VM Scale Sets - All in One

[reflective] Seis decisiones forman un único diseño operativo.
[600ms]
[confident] La configuración de la máquina, la orquestación, la directiva de escalado, la distribución por zonas, el estado y la reparación, y dónde viven los datos.
[600ms]
[proud] Juntas permiten que la tienda de Contoso crezca durante la campaña y reduzca capacidad después, sin que alguien tenga que vigilar un gráfico a medianoche.
