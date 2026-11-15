# Narrator Script — Network · Managed Networking — Virtual Network Manager and Route Server

**Source animation:** [ManagedNetworking.html](../../../journeys/Network/ManagedNetworking.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/virtual-network-manager/overview>
- <https://learn.microsoft.com/azure/virtual-network-manager/concept-security-admins>
- <https://learn.microsoft.com/azure/route-server/overview>
- <https://learn.microsoft.com/azure/route-server/route-server-faq>

---

## Step 1 · Many VNets, Managed by Hand

[calm] Contoso sigue agregando redes virtuales. Cada una necesita sus propios peerings y su propia copia de las reglas de seguridad.
[600ms]
[concerned] Los peerings se crean uno por uno, en cada región, y las copias de los NSG se van desfasando poco a poco.
[600ms]
[serious] Y cada VNet nueva repite todo ese trabajo otra vez.

## Step 2 · One Manager, One Scope

[calm] Azure Virtual Network Manager agrupa, configura e implementa tus redes virtuales desde un solo lugar.
[600ms]
[confident] Su alcance es un grupo de administración o una lista de suscripciones, y ese es el límite de lo que puede ver y cambiar.
[600ms]
[curious] Una VNet fuera del alcance no se administra. El flujo va en orden: alcance, grupos de red, configuraciones e implementación.

## Step 3 · Network Groups Choose Who Gets What

[calm] Un grupo de red es un contenedor de redes virtuales. Las configuraciones se aplican al grupo, así que todos sus miembros las reciben.
[600ms]
[curious] En la pertenencia estática, tú eliges las VNet una por una. En la dinámica, una condición de Azure Policy, como una etiqueta, las elige por ti.
[600ms]
[confident] Y una VNet puede estar en varios grupos a la vez.

## Step 4 · Connectivity, Defined Once

[calm] Una configuración de conectividad define la topología de cada grupo.
[600ms]
[curious] Con hub-and-spoke, cada spoke hace peering con el hub. Con mesh, cada VNet del grupo se conecta con todas las demás.
[600ms]
[confident] La conectividad directa agrega una malla entre los spokes de un mismo grupo, para que se comuniquen sin pasar por el hub. Aquí, Producción la tiene y Prueba no.

## Step 5 · Security Admin Rules Go First

[calm] Las reglas de administración son reglas globales que maneja el equipo central de red. Se evalúan antes que las reglas de NSG, que siguen en manos de los equipos de aplicaciones.
[600ms]
[confident] Pueden permitir, denegar o permitir siempre, y eso es lo que decide el tráfico.
[600ms]
[serious] Una regla de Permitir deja que los NSG sigan decidiendo. Pero una regla de Denegar o de Permitir siempre cierra la evaluación, así que un NSG no puede anularla.

## Step 6 · Nothing Applies Until You Deploy

[serious] Hasta que implementes, una configuración es solo un plan.
[600ms]
[calm] Confirma las configuraciones en las regiones que elijas. Impleméntalas poco a poco, una región a la vez, y solo cambian las regiones donde implementas.
[600ms]
[reassuring] El estado objetivo son las configuraciones implementadas más la pertenencia a los grupos. Para quitar todo de una región, implementa ninguna configuración en ella.

## Step 7 · Change the Group, the Rules Follow

[curious] Pruébalo. Agrega o quita una red virtual de un grupo.
[600ms]
[impressed] Una vez implementadas las configuraciones, un miembro nuevo las recibe sin volver a implementar, y uno que sale las pierde. El peering, los enlaces directos y la regla de administración siguen a la pertenencia.
[600ms]
[reassuring] La pertenencia estática se actualiza al instante. La dinámica espera a Azure Policy, y eso puede tardar unos minutos.

## Step 8 · Routes by Hand Go Stale

[calm] Un dispositivo virtual de red, o NVA, aprende rutas de las sucursales. Puede ser un dispositivo SD-WAN o un firewall.
[600ms]
[concerned] Para usar esas rutas, alguien tiene que editar las tablas de rutas, las UDR, cada vez que una ruta cambia.
[600ms]
[serious] Un prefijo nuevo no tiene ruta hasta que alguien la agrega. Esa es la brecha.

## Step 9 · Azure Route Server in Its Own Subnet

[calm] Route Server es un servicio administrado en una subred dedicada llamada RouteServerSubnet, de barra 26 o más grande.
[600ms]
[confident] Tu NVA hace peering con él por BGP, y tú haces peering con sus dos instancias. Cualquier NVA que admita BGP puede hacerlo.
[600ms]
[impressed] La ventaja es que no tienes que mantener UDR para las rutas que aprende el NVA.

## Step 10 · Routes Flow In and Out Automatically

[curious] El NVA anuncia los prefijos que conoce. Route Server programa esas rutas en la red virtual, y los prefijos de la VNet viajan de regreso.
[600ms]
[confident] Solo intercambia rutas.
[600ms]
[reassuring] Los datos nunca pasan por Route Server. El tráfico va directo entre la VM y el NVA.

## Step 11 · Gateways and Branch-to-Branch

[calm] Por defecto, cada componente intercambia rutas solo con Route Server.
[600ms]
[curious] Activa el intercambio de rutas y Route Server pasa rutas entre tu NVA, el gateway de VPN y el gateway de ExpressRoute. Así, los sitios locales pueden verse entre sí a través de Azure.
[600ms]
[serious] Los gateways deben estar en la misma VNet que Route Server. De circuito a circuito no se transporta, así que para eso usa Global Reach.

## Step 12 · Which Tool for Which Job?

[curious] Son las mismas redes, pero trabajos distintos. Relaciona la pregunta que te haces con el servicio que la responde.
[600ms]
[confident] Si tienes muchas VNet propias, la respuesta es Virtual Network Manager, con Azure Policy para grupos basados en etiquetas. Si quieres un hub administrado, es Virtual WAN.
[600ms]
[calm] Para las rutas, usa UDR en rutas fijas y Route Server cuando quieras aprender rutas por BGP.

## Step 13 · Managed Networking, All in One

[calm] Virtual Network Manager administra muchas VNet de forma consistente, con alcance, grupos, conectividad, reglas de administración e implementación.
[600ms]
[confident] Azure Route Server permite que los NVA y los gateways aprendan rutas sin editar tablas a mano, con RouteServerSubnet, peering BGP e intercambio de rutas.
[600ms]
[proud] Estos son los temas de A Z 700, además del diseño de redes para A Z 305. Las guías de estudio son la siguiente parada.
