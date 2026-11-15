# Guion de narración - Redes de Azure

**Source animation:** journeys/Fundamentals/AzureNetworking.html
**Script status:** Authored voiceover.
**Language:** Español

Las indicaciones entre corchetes no se pronuncian. Las pausas van en líneas separadas. Un bloque por paso de la animación.
<!-- Sources: https://learn.microsoft.com/azure/private-link/private-endpoint-overview ; https://learn.microsoft.com/training/modules/describe-azure-compute-networking-services/ ; https://learn.microsoft.com/azure/expressroute/secure-expressroute#data-protection -->

## Step 1 · An order needs the stock count

[calm] Un cliente llega al pago. La web de App Service llama a la máquina virtual de inventario, pero ese sistema todavía necesita conectarse a SQL para consultar las existencias.
[600ms]
[confident] Esta lección construye esa ruta pendiente entre el sistema de inventario y la base de datos. Ejecutar la aplicación y guardar los registros no los conecta automáticamente.

## Step 2 · Give the backend a private address

[calm] Contoso sitúa la máquina virtual de inventario en una red virtual, o VNet. Su dirección privada la identifica dentro de la red privada conectada.
[600ms]
[confident] SQL sigue siendo un servicio administrado independiente. Dar una dirección al sistema de inventario no introduce la base de datos en la red ni concede acceso a sus registros.

## Step 3 · Organize the address space

[calm] Una subred es un intervalo menor de direcciones dentro de una red virtual. Contoso utiliza uno para la aplicación y reserva otro para la conexión privada al servicio.
[600ms]
[confident] Las subredes organizan direcciones, pero no son reglas de seguridad por sí solas. Contoso necesita controles de tráfico que determinen qué puede comunicarse.

## Step 4 · Find inventory by name

[calm] La aplicación conoce la base de datos por su nombre, sin memorizar su dirección. El DNS privado traduce ese nombre a la dirección del punto de conexión privado que aparece aquí.
[600ms]
[confident] La respuesta DNS indica dónde intentar conectarse. No crea una ruta de red ni concede permiso para leer las existencias.

## Step 5 · Connect privately to the database

[calm] Un punto de conexión privado aprobado conecta con SQL mediante una interfaz de red en la subred de Contoso. La base de datos administrada sigue fuera de esa subred.
[600ms]
[confident] Contoso desactiva el acceso de red público por separado y comprueba los permisos de la base de datos. Una ruta privada y el acceso autorizado son requisitos distintos.

## Step 6 · Reach the fulfilment network

[calm] La aplicación de preparación de pedidos funciona en otra red virtual. El emparejamiento conecta ambas por la red troncal de Microsoft para que sus recursos se comuniquen de forma privada cuando las reglas lo permitan.
[600ms]
[confident] Conservan sus propios espacios de direcciones. Conectarlas no las convierte en un grupo de recursos ni elimina las comprobaciones de seguridad.

## Step 7 · Keep the warehouse connected

[calm] El almacén mantiene sistemas en sus instalaciones. Una red privada virtual de sitio a sitio, o VPN, conecta su red con Azure mediante un túnel cifrado sobre internet.
[600ms]
[confident] El almacén puede permanecer donde está y participar en el entorno híbrido de la tienda. El enrutamiento y los controles de acceso también deben configurarse.

## Step 8 · Consider a private circuit

[calm] Para otras necesidades de conectividad, Contoso podría contratar ExpressRoute con un proveedor. Ofrece una conexión privada a los servicios en la nube de Microsoft, en lugar de la ruta por internet de la VPN.
[600ms]
[confident] Privado no significa cifrado automáticamente. Cuando se requiere esa protección, ExpressRoute necesita un diseño de cifrado adecuado.

## Step 9 · The order can reach inventory

[calm] Unamos las piezas: el sistema de inventario tiene dirección, DNS resuelve el nombre de la base de datos y el punto de conexión aprobado proporciona la ruta. Con los permisos necesarios, la consulta devuelve el resultado al pago.
[600ms]
[confident] En este ejemplo, el almacén utiliza VPN. Ahora Contoso elegirá almacenamiento para los demás tipos de datos de la tienda.