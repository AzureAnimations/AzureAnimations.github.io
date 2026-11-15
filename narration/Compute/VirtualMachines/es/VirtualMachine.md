# Narrator Script - Tu primera VM

**Source animation:** journeys/Compute/VirtualMachines/VirtualMachine.html

**Script status:** Authored voiceover.

Delivery cues appear in brackets; pauses are on separate lines.

## Step 1 · The shop needs OS control

[curious] Contoso Retail quiere gestionar su tienda online a su manera.
[600ms]
[confident] Una máquina virtual ofrece al equipo un sistema operativo completo que puede instalar, ajustar y actualizar según las necesidades de la aplicación.
[600ms]
[serious] Ese control implica una responsabilidad: Azure se ocupa de los hosts físicos, y tú administras lo que hay dentro del sistema invitado.

## Step 2 · Start with an image

[calm] Toda máquina empieza con una imagen.
[600ms]
[confident] La imagen aporta el sistema operativo y el software inicial, que se instalan en el disco del sistema al crear la máquina.
[600ms]
[reassuring] Para la tienda elegimos Linux, pero Windows también sería una opción habitual.

## Step 3 · Choose a size

[calm] Después viene el tamaño, una decisión totalmente independiente de la imagen.
[600ms]
[confident] Define la capacidad de procesamiento y memoria de la máquina, así que debe ajustarse a lo que la tienda necesita para atender a sus clientes.
[600ms]
[serious] Elígelo según las mediciones, la disponibilidad en la región y el presupuesto. No por intuición.

## Step 4 · Give data a durable home

[calm] Ahora toca el almacenamiento. Los tres tipos de disco cumplen funciones muy distintas.
[600ms]
[confident] El disco del sistema operativo permite arrancar la máquina. Los discos de datos guardan el catálogo y los pedidos. Ambos son discos administrados que conservan los datos tras un reinicio.
[600ms]
[serious] El disco temporal es espacio de trabajo desechable. Si la máquina dispone de uno, úsalo solo para datos que puedas perder sin consecuencias.

## Step 5 · Connect the private network

[calm] La máquina también necesita poder comunicarse.
[600ms]
[confident] Una interfaz de red le da una dirección privada dentro de una subred de la red virtual. Por ahí, la tienda se comunica con el resto de Contoso.
[600ms]
[reassuring] Este diseño no necesita una dirección pública en la máquina. Las reglas de seguridad de red se aplican igualmente.

## Step 6 · Connect, then authenticate

[curious] Entonces, ¿cómo entra el administrador?
[800ms]
[confident] Azure Bastion tiene su propia subred y permite abrir una sesión desde el portal. Así, la máquina no necesita una dirección accesible desde internet.
[600ms]
[serious] Bastion te lleva hasta la puerta. La clave SSH demuestra quién eres. Poder llegar a una máquina y tener permiso para entrar son cosas distintas.

## Step 7 · Stopped is not deallocated

[serious] Este detalle se nota en la factura.
[600ms]
[confident] Apagar desde el sistema invitado deja la máquina detenida, pero todavía asignada a un host. La capacidad de cómputo sigue facturándose.
[600ms]
[reassuring] Desasignarla desde Azure libera ese hardware y detiene el cargo por uso de cómputo. Los discos y los demás recursos que conservas siguen existiendo y pueden seguir generando cargos.

## Step 8 · Your VM - All in One

[reflective] Al mirar el conjunto, una máquina virtual reúne cinco decisiones relacionadas.
[600ms]
[confident] Una imagen, un tamaño, los discos, una ruta de red y una forma de autenticarse.
[600ms]
[determined] La tienda ya funciona, pero sigue dependiendo de una sola máquina en un solo host. Lo siguiente es diseñar su disponibilidad.
