# Narrator Script - VM en zonas de disponibilidad

**Source animation:** journeys/Compute/VirtualMachines/AvailabilityZones.html

Delivery cues appear in brackets; pauses are on separate lines.
Generated from scripts/_vm-journeys/content.mjs.

## Step 1 · What if a whole zone fails?

[calm] ¿Y si falla toda una zona?
[600ms]
Contoso necesita separación más allá de la infraestructura de un centro de datos.
[600ms]
[serious] Un nuevo diseño zonal, no una migración directa del conjunto.

## Step 2 · Place one VM in a zone

[calm] Ubicar una VM en una zona.
[600ms]
Una VM zonal se ejecuta en la zona elegida. No se crea una segunda VM.
[600ms]
[serious] Elegir una zona no crea otra instancia.

## Step 3 · Prepare VMs across zones

[calm] Preparar VM entre zonas.
[600ms]
Despliega pares de VM y disco en zonas separadas, con la aplicación preparada en cada una.
[600ms]
[serious] Las réplicas y el balanceo se configuran por separado.

## Step 4 · Configure resilient routing

[calm] Configurar rutas resilientes.
[600ms]
Standard Load Balancer con frontend de redundancia zonal envía conexiones nuevas a backends sanos.
[600ms]
[serious] Frontend con redundancia zonal

## Step 5 · Do not forget the data

[calm] No olvidar los datos.
[600ms]
Los datos requieren resiliencia aparte. Los discos normales no replican el estado de la aplicación.
[600ms]
[serious] Resiliencia por separado

## Step 6 · A zone goes unavailable

[calm] Una zona deja de estar disponible.
[600ms]
Con capacidad libre y datos sanos, las conexiones nuevas usan la zona sana tras la detección.
[600ms]
[serious] Supone capacidad libre, datos disponibles y sondeos configurados.

## Step 7 · Zonal VMs - All in One

[calm] VM zonales - Todo junto.
[600ms]
Ubicación separada, aplicaciones preparadas, rutas resilientes y plan de datos trabajan juntos.
[600ms]
[serious] Prepara la aplicación, los datos y la conmutación.
