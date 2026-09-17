# Narrator Script - Virtual Machine Scale Sets

**Source animation:** journeys/Compute/VirtualMachines/VirtualMachineScaleSets.html

Delivery cues appear in brackets; pauses are on separate lines.
Generated from scripts/_vm-journeys/content.mjs.

## Step 1 · Demand changes

[calm] La demanda cambia.
[600ms]
Contoso necesita capacidad que crezca con la demanda; una VM grande no siempre basta.
[600ms]
[serious] Regla ilustrativa; evaluar, esperar, crear y preparar lleva tiempo.

## Step 2 · Manage a group of VMs

[calm] Administrar un grupo de VM.
[600ms]
Un conjunto administra instancias. La aplicación y el balanceador se configuran por separado.
[600ms]
[serious] Las réplicas y el balanceo se configuran por separado.

## Step 3 · Choose an orchestration mode

[calm] Elegir modo de orquestación.
[600ms]
Flexible usa recursos VM estándar; Uniform, recursos específicos del conjunto. Seguimos con Flexible.
[600ms]
[serious] El modo se elige al crear y no se cambia después. Aquí usamos Flexible.

## Step 4 · Configure a bounded scaling policy

[calm] Configurar una regla acotada.
[600ms]
La regla fija un objetivo de 2 a 4 VM tras la evaluación. Las nuevas instancias reciben tráfico cuando están listas.
[600ms]
[serious] Regla ilustrativa; evaluar, esperar, crear y preparar lleva tiempo.

## Step 5 · Combine scaling with zone placement

[calm] Combinar escala y zonas.
[600ms]
El conjunto puede abarcar zonas si se configura así. Capacidad y ubicación son decisiones diferentes.
[600ms]
[serious] La distribución zonal se configura; un conjunto no zonal no la garantiza.

## Step 6 · Separate routing health from repair

[calm] Separar rutas y reparación.
[600ms]
Los sondeos guían el tráfico. La reparación en Flexible usa la extensión de estado y una regla.
[600ms]
[serious] Flexible requiere extensión de estado y regla de reparación con período de gracia.

## Step 7 · Scale in with the application in mind

[calm] Reducir pensando en la aplicación.
[600ms]
Antes de quitar capacidad, diseña drenaje, terminación y estado duradero fuera de la VM.
[600ms]
[serious] Diseña la terminación, drena el trabajo y guarda el estado duradero fuera de las VM.

## Step 8 · VM Scale Sets - All in One

[calm] VMSS - Todo junto.
[600ms]
Configuración, orquestación, escala, zonas, estado y datos forman un diseño operativo.
[600ms]
[serious] Prepara la aplicación, los datos y la conmutación.
