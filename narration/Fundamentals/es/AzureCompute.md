# Guion de narración - Proceso en Azure

**Source animation:** journeys/Fundamentals/AzureCompute.html
**Script status:** Authored voiceover.
**Language:** Español

Las indicaciones entre corchetes no se pronuncian. Las pausas van en líneas separadas. Un bloque por paso de la animación.
<!-- Sources: https://learn.microsoft.com/training/modules/describe-azure-compute-networking-services/ ; https://learn.microsoft.com/azure/virtual-machines/availability-set-overview -->

## Step 1 · How much do you want to manage?

[calm] Contoso necesita ejecutar un sitio web, procesar eventos de pedidos y dar al personal acceso a sus aplicaciones. El proceso es la capacidad de cálculo que realiza ese trabajo.
[600ms]
[confident] No todas las tareas necesitan el mismo servicio. El equipo elige según las necesidades y cuánto quiere administrar.

## Step 2 · Take the whole machine

[calm] El sistema de inventario necesita controlar su sistema operativo, así que Contoso elige una máquina virtual. El procesador y la memoria ejecutan el trabajo; los discos guardan el sistema y los datos; una interfaz de red permite conectarse.
[600ms]
[confident] Microsoft opera el hardware físico. Contoso configura y mantiene la máquina virtual y su sistema operativo invitado.

## Step 3 · Prepare the VM workload

[calm] Una máquina virtual puede fallar. Los conjuntos de disponibilidad distribuyen máquinas entre grupos que separan determinados fallos de hardware y actualizaciones de mantenimiento. Los conjuntos de escalado permiten administrar y escalar una flota.
[600ms]
[confident] Ninguna opción diseña toda la recuperación de la tienda. Contoso también debe preparar la aplicación, los datos y la gestión del tráfico.

## Step 4 · Package the app instead

[calm] Un contenedor empaqueta el código de una aplicación con sus dependencias. Contoso puede llevar ese paquete de pruebas a un entorno de producción compatible con menos diferencias de software.
[600ms]
[confident] Empaquetar no equivale a alojar. El contenedor sigue necesitando dónde ejecutarse, además de configuración, conectividad y seguridad adecuadas.

## Step 5 · Let the platform run it

[calm] Para el sitio web de los clientes, Contoso elige App Service. Ofrece alojamiento administrado para aplicaciones web e interfaces que otros programas pueden utilizar.
[600ms]
[confident] El equipo despliega su código y configura la aplicación en lugar de mantener el sistema operativo subyacente. El inventario sigue en su máquina virtual porque tiene otras necesidades.

## Step 6 · React to an order

[calm] La llegada de un pedido es un evento: ocurre algo que debe iniciar una tarea. Azure Functions puede ejecutar el código de Contoso como respuesta, sobre infraestructura administrada.
[600ms]
[confident] Sin servidor no significa que no existan servidores. El servicio los gestiona; el escalado y la facturación siguen dependiendo del plan de hospedaje.

## Step 7 · Deliver desktops, not servers

[calm] El personal del almacén necesita sus escritorios y aplicaciones de trabajo. Azure Virtual Desktop entrega esas experiencias de forma remota, sin exigir que cada empleado trabaje junto a los servidores de la nube.
[600ms]
[confident] Resuelve una necesidad del puesto de trabajo. No es el servicio que Contoso utiliza para alojar la tienda web pública.

## Step 8 · Compute Options - All in One

[calm] Relaciona cada servicio con su tarea: máquina virtual para controlar el sistema operativo, contenedor para empaquetar, App Service para la web, Functions para eventos y Virtual Desktop para el personal.
[600ms]
[confident] Contoso ya sabe dónde ejecutar el código. Ahora el sistema de inventario necesita una conexión aprobada a la base de datos de existencias.