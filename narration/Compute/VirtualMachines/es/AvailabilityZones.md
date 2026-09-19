# Narrator Script - VM en zonas de disponibilidad

**Source animation:** journeys/Compute/VirtualMachines/AvailabilityZones.html

**Script status:** Authored voiceover.

Delivery cues appear in brackets; pauses are on separate lines.

## Step 1 · What if a whole zone fails?

[curious] Los dominios de error separaban el riesgo de un bastidor. ¿Y si el problema es mayor?
[800ms]
[serious] Un fallo de alimentación, refrigeración o red puede afectar a toda una ubicación de centro de datos.
[600ms]
[confident] Las zonas de disponibilidad dan a Contoso separación a ese nivel. Aquí diseñamos una nueva distribución de la tienda, no convertimos el conjunto de disponibilidad existente.

## Step 2 · Place one VM in a zone

[calm] Empecemos por una única máquina zonal.
[600ms]
[confident] Asignar una máquina virtual a una zona indica a Azure en qué ubicación físicamente separada de la región debe ejecutarla.
[600ms]
[serious] Eso solo decide la ubicación. Elegir una zona no crea automáticamente una segunda copia.

## Step 3 · Prepare VMs across zones

[determined] Por eso Contoso prepara expresamente la segunda instancia.
[600ms]
[confident] Una máquina con sus discos en una zona, otra con sus propios discos en una segunda zona, y la aplicación instalada y lista en ambas.
[600ms]
[reassuring] En este diseño, los discos también son zonales. Cada instancia tiene los suyos en lugar de compartirlos.

## Step 4 · Configure resilient routing

[curious] Las dos máquinas están preparadas, pero todavía necesitan recibir tráfico.
[800ms]
[confident] Un Standard Load Balancer con un frontend con redundancia zonal puede seguir funcionando cuando se pierde una zona y enviar conexiones nuevas a los servidores que superan el sondeo de estado.
[600ms]
[reassuring] El frontend también debe ser redundante entre zonas. De lo contrario, solo habrás trasladado el punto único de fallo.

## Step 5 · Do not forget the data

[serious] Este es el paso que suele olvidarse.
[600ms]
[calm] Los discos administrados normales no replican por sí solos el estado de la aplicación de la tienda entre zonas.
[600ms]
[confident] El sistema que guarda los pedidos, sea una base de datos o almacenamiento compartido, necesita su propia decisión de resiliencia, tomada de forma independiente.

## Step 6 · A zone goes unavailable

[curious] Ahora simula la pérdida de una zona y observa lo que ocurre.
[600ms]
[calm] Los sondeos detectan el fallo, el frontend deja de enviar tráfico a esa zona y las conexiones nuevas llegan a la zona sana.
[600ms]
[serious] Esto requiere capacidad de reserva para absorber la carga, una dependencia de datos disponible y sondeos configurados correctamente.

## Step 7 · Zonal VMs - All in One

[reflective] Este diseño se sostiene sobre cuatro elementos que deben funcionar juntos.
[600ms]
[confident] Ubicaciones separadas, aplicaciones preparadas, enrutamiento con redundancia zonal y un plan para los datos.
[600ms]
[proud] Si los cuatro están bien preparados, Contoso podrá afrontar la pérdida de una zona sin que eso signifique cerrar la tienda.
