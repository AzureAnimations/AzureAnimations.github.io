# Narrator Script - Tu primera VM

**Source animation:** journeys/Compute/VirtualMachines/VirtualMachine.html

Delivery cues appear in brackets; pauses are on separate lines.
Generated from scripts/_vm-journeys/content.mjs.

## Step 1 · The shop needs OS control

[calm] La tienda necesita control del SO.
[600ms]
Contoso elige una VM para instalar y administrar su aplicación.
[600ms]
[serious] Tú administras el SO invitado y la aplicación; Azure, los hosts.

## Step 2 · Start with an image

[calm] Empezar con una imagen.
[600ms]
La imagen aporta el sistema operativo y software inicial del disco del SO.
[600ms]
[serious] Este ejemplo usa Linux; Windows es otra opción.

## Step 3 · Choose a size

[calm] Elegir un tamaño.
[600ms]
CPU y memoria deben ajustarse a la carga; el tamaño es independiente de la imagen.
[600ms]
[serious] Elige el tamaño según la carga, la disponibilidad regional y el presupuesto.

## Step 4 · Give data a durable home

[calm] Guardar datos de forma duradera.
[600ms]
Los discos del SO y de datos tienen funciones distintas. El almacenamiento temporal no es una copia duradera.
[600ms]
[serious] El almacenamiento temporal, si existe, no es duradero.

## Step 5 · Connect the private network

[calm] Conectar la red privada.
[600ms]
Una NIC da a la VM una IP privada en una subred de la red virtual.
[600ms]
[serious] Esta VM no necesita IP pública. Las reglas de seguridad siguen aplicándose.

## Step 6 · Connect, then authenticate

[calm] Conectar y autenticar.
[600ms]
Bastion aporta la ruta de administración. Una clave SSH autentica al administrador en Linux.
[600ms]
[serious] Bastion Basic en su subred; la clave SSH autentica en Linux. Conectividad no significa permiso.

## Step 7 · Stopped is not deallocated

[calm] Detener no es desasignar.
[600ms]
El estado cambia la facturación de cómputo. Los discos y otros recursos permanecen.
[600ms]
[serious] Pago por uso: se facturan cómputo y discos.

## Step 8 · Your VM - All in One

[calm] Tu VM - Todo junto.
[600ms]
Imagen, tamaño, discos, red y acceso forman la VM. Después viene la disponibilidad.
[600ms]
[serious] Una VM funcional no es un diseño completo de alta disponibilidad.
