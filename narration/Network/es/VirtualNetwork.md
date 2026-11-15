# Virtual Network — narración (es)

## Step 1 · Start With a Virtual Network

[confident] Todo en las redes de Azure empieza aquí, con una red virtual.
[500ms]
[calm] Una VNet es tu propia porción privada y aislada de la red de Azure. Le das un espacio de direcciones en notación CIDR: aquí, diez punto cero punto cero punto cero barra dieciséis.
[400ms]
[helpful] Quédate con los rangos privados RFC 1918 y, si lo necesitas, Azure funciona en doble pila IPv4 e IPv6.

## Step 2 · Segment It Into Subnets

[calm] Una sola red enorme no es un diseño. Así que divides la VNet en subredes: rangos más pequeños, como diez punto cero punto uno punto cero barra veinticuatro.
[500ms]
[confident] En las subredes ocurre el trabajo de verdad. Agrupan recursos relacionados, te dan dónde enrutar el tráfico y te dan un límite donde aplicar seguridad.
[400ms]
[helpful] Recuerda esto: todo recurso que crees en Azure vive dentro de una subred.

## Step 3 · Place a Virtual Machine

[calm] Ahora pongamos algo dentro. Coloca una máquina virtual en la subred.
[400ms]
[confident] Para hablar en la red, esa VM necesita al menos una dirección IP privada. La IP pública es opcional, y la mayoría de las veces no la quieres.
[500ms]
[curious] Pero aquí está el truco, y confunde a casi todo el mundo: la dirección IP nunca se asigna a la máquina virtual en sí.

## Step 4 · The NIC Holds the IPs

[confident] Para eso está la interfaz de red. La NIC.
[400ms]
[calm] La NIC es la que realmente lleva la IP privada y la IP pública opcional, y puede tener más de una configuración de IP si la necesitas.
[500ms]
[helpful] Una NIC se conecta exactamente a una máquina virtual. Uno a uno. Esa conexión es la que le da a la VM su lugar en la subred.

## Step 5 · Filter Traffic With an NSG

[curious] ¿Y cómo controlas lo que realmente puede llegar a esa VM?
[400ms]
[confident] Le asocias un grupo de seguridad de red. Un NSG es una lista de reglas de permitir y denegar: por puerto, por protocolo y por dirección, tanto de entrada como de salida.
[500ms]
[calm] Las reglas se evalúan por prioridad, primero el número más bajo. Asócialo a la NIC y estarás filtrando el tráfico de esa única máquina virtual.

## Step 6 · One NSG for the Whole Subnet

[curious] Ahora añade una segunda VM. Y una tercera. ¿De verdad vas a asociar el mismo NSG a cada NIC a mano?
[500ms]
[confident] Claro que no. Asocia el NSG a la subred.
[400ms]
[calm] Ahora cada NIC de esa subred hereda las mismas reglas automáticamente, y sigue funcionando por muchas máquinas virtuales que añadas.

## Step 7 · The Whole Picture

[confident] Juntemos entonces la imagen completa.
[500ms]
[calm] Una VNet te da un espacio de direcciones. Las subredes lo segmentan. Las máquinas virtuales viven dentro de esas subredes, y sus direcciones IP están en una NIC, nunca en la VM directamente.
[400ms]
[calm] Y los NSG filtran el tráfico, asociados a una sola NIC o a toda la subred cuando quieres que escale.
[600ms]
[encouraging] Ese es el núcleo de las redes de Azure. Todos los demás servicios que conocerás se construyen exactamente sobre esto.
