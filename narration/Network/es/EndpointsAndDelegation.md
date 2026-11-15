# Narrator Script — Network · Service Endpoints, Private Endpoints and Delegation

**Source animation:** [EndpointsAndDelegation.html](../../../journeys/Network/EndpointsAndDelegation.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/virtual-network/virtual-network-service-endpoints-overview>
- <https://learn.microsoft.com/azure/virtual-network/virtual-network-service-endpoint-policies-overview>
- <https://learn.microsoft.com/azure/virtual-network/subnet-delegation-overview>
- <https://learn.microsoft.com/azure/virtual-network/vnet-integration-for-azure-services>

---

## Step 1 · PaaS answers on a public address

[calm] Contoso tiene una VM en vnet-app, y necesita acceder a Storage, SQL y Key Vault.
[600ms]
[curious] Esos servicios responden en un endpoint público. Tu VM puede usarlo, pero cualquier otra red también, hasta que agregues reglas.
[600ms]
[serious] Estas direcciones son rangos de documentación, no reales. Lo importante es esto: público por defecto significa abierto hasta que digas lo contrario.

## Step 2 · Three doors to the same service

[curious] Hay tres formas de llegar al mismo servicio: mantener la dirección pública y filtrarla, darle a una subred un atajo hacia el servicio, o poner una IP privada por delante.
[600ms]
[confident] Cada puerta responde a una necesidad distinta, así que ninguna es siempre la mejor.
[600ms]
[calm] La delegación de subred es otro tema. Permite que un servicio viva dentro de tu subred, y lo veremos más adelante.

## Step 3 · Service endpoint: switch it on for a subnet

[calm] Un endpoint de servicio se activa por subred. Desde ese momento, el tráfico de la subred viaja al servicio por la red troncal de Azure.
[600ms]
[impressed] Ahora el servicio ve la dirección privada de la subred, así que una regla de VNet puede permitir justo esa subred.
[600ms]
[serious] El servicio conserva su IP pública y su nombre DNS público. Y ojo: al habilitar o quitar el endpoint, las conexiones abiertas de esa subred se reinician un momento.

## Step 4 · A service endpoint stops at the subnet

[calm] Los endpoints de servicio solo ayudan con el tráfico que sale de una subred.
[600ms]
[concerned] El tráfico desde el entorno local llega con direcciones NAT públicas, así que el endpoint ni lo ve. En su lugar, necesitas una regla de IP o un endpoint privado.
[600ms]
[reassuring] Con ExpressRoute Microsoft peering, permite en el firewall IP del recurso las direcciones NAT que uses.

## Step 5 · Endpoint policies narrow it to your accounts

[curious] Un endpoint de servicio llega a todo el servicio, incluidas las cuentas de todos los demás clientes. Es más amplio de lo que casi todos esperan.
[600ms]
[confident] Una política de endpoint de servicio enumera las cuentas de almacenamiento a las que puede llegar tu subred, y bloquea el resto.
[600ms]
[serious] Es una lista de permitidos, así que incluye todas las cuentas de las que depende la app. Se aplica a Azure Storage, pero no a las cuentas clásicas.

## Step 6 · Private endpoint: a private IP for one resource

[calm] Un endpoint privado coloca en tu subred una interfaz de red con una IP privada, y la vincula a un recurso concreto.
[600ms]
[confident] Private Link lleva el tráfico. Pero el DNS tiene que devolver esa IP privada; si no, los clientes siguen yendo a la dirección pública.
[600ms]
[reassuring] Esto es solo un repaso. En la lección de DNS y Private Link vemos con detalle la zona DNS privada y el vínculo con la VNet.

## Step 7 · Service endpoint or private endpoint?

[curious] Si los pones lado a lado, resaltan las diferencias que definen la elección.
[600ms]
[calm] Los dos mantienen el tráfico entre servicios de Azure en la red troncal de Azure.
[600ms]
[confident] Microsoft recomienda Private Link siempre que puedas usarlo. Los endpoints de servicio siguen siendo útiles cuando quieres algo sencillo y sin costo adicional.

## Step 8 · Which door should the VNet use?

[curious] Elige la necesidad que más se parezca a la tuya y aparece la puerta que le corresponde, con un dibujo y las preguntas que ayudan a decidir.
[600ms]
[calm] ¿Necesitas acceso desde el entorno local? ¿Solo una cuenta? ¿Una dirección privada?
[600ms]
[reflective] Los diseños reales suelen combinarlos: endpoints privados para datos de producción y endpoints de servicio para una subred de desarrollo de bajo riesgo.

## Step 9 · Subnet delegation: let a service live in your subnet

[calm] Los endpoints permiten que tu VNet llegue a un servicio. La delegación va en sentido contrario: deja que un servicio se configure dentro de tu subred.
[600ms]
[confident] Tú indicas la subred, y el servicio crea ahí sus propios recursos.
[600ms]
[serious] Cada servicio establece sus propias reglas. Algunos necesitan una subred dedicada y otros un tamaño mínimo, así que revisa su documentación antes de planificar el espacio de direcciones.

## Step 10 · Three ways this goes wrong

[concerned] Casi todos los tickets que dicen que debería funcionar se reducen a tres causas.
[600ms]
[curious] Revisa la subred, el tipo de regla y la respuesta de DNS. ¿El tráfico sale de la subred correcta? ¿Usaste una regla de VNet donde hacía falta una regla de IP? ¿El nombre se resuelve de forma privada?
[600ms]
[serious] Activar o desactivar un endpoint de servicio cierra las conexiones TCP abiertas de esa subred, así que hazlo fuera de los momentos críticos.

## Step 11 · Reaching PaaS privately, at a glance

[calm] Este es el panorama completo. Elige la puerta según la necesidad: un endpoint de servicio, una política de endpoint de servicio o un endpoint privado.
[600ms]
[confident] Y suma la delegación cuando un servicio tenga que vivir en tu subred.
[600ms]
[reassuring] Lo siguiente es DNS y Private Link, que muestra la mitad de DNS de los endpoints privados.
