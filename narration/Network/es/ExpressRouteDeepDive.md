# Narrator Script — Network · ExpressRoute: models, SKUs, peerings and resilience

**Source animation:** [ExpressRouteDeepDive.html](../../../journeys/Network/ExpressRouteDeepDive.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/expressroute/expressroute-introduction>

---

## Step 1 · What a Circuit Really Is

[calm] Contoso pide un circuito de ExpressRoute. Es un par de enlaces que un proveedor de conectividad entrega a Microsoft.
[600ms]
[curious] El circuito se identifica con una clave de servicio, un G U I D que no es un secreto.
[600ms]
[confident] Su ancho de banda es fijo, y todos los peerings del circuito lo comparten.

## Step 2 · Connectivity Models

[curious] Contoso puede llegar al mismo circuito de tres maneras, siempre con un proveedor: un intercambio en la nube, un enlace Ethernet punto a punto o una I P VPN de cualquiera a cualquiera.
[600ms]
[confident] El modelo define cómo es el camino y quién se encarga del enrutamiento.
[600ms]
[reflective] Con un proveedor de capa dos, el enrutamiento lo manejas tú. Con uno de capa tres administrada, lo hace el proveedor.

## Step 3 · SKU and Tier

[calm] Contoso elige el SKU del circuito según hasta dónde necesita llegar.
[600ms]
[confident] Local llega a las regiones cercanas a la ubicación de peering. Standard llega a todas las regiones del área geopolítica. Premium llega a todas las regiones del mundo, y con límites más altos.
[600ms]
[reassuring] Luego elige un plan de datos: medido o ilimitado. Puedes pasar de medido a ilimitado, pero no al revés.

## Step 4 · Private Peering

[calm] El peering privado conecta la red de Contoso con las direcciones privadas de una red virtual.
[600ms]
[confident] Reservas dos subredes pequeñas, una por cada enlace, y luego eliges una VLAN y tu A S N. Del lado de Microsoft se usa su propio A S N.
[600ms]
[serious] Las subredes de peering no deben solaparse con tu red virtual. Para llegar a ella, agrega un gateway en la subred del gateway y una conexión al circuito.

## Step 5 · Microsoft Peering and Route Filters

[curious] Microsoft peering llega a endpoints públicos, como Microsoft 365 y los servicios de plataforma de Azure.
[600ms]
[confident] Los prefijos de cada servicio llevan comunidades BGP, y un filtro de rutas es una lista de permitidos de esas comunidades.
[600ms]
[serious] Mientras no se asocie un filtro, un circuito nuevo no anuncia ningún prefijo.

## Step 6 · Route Advertisement and BGP Communities

[calm] Contoso anuncia prefijos por BGP. Microsoft marca con comunidades las rutas que devuelve, e ignora cualquier etiqueta que tú agregues.
[600ms]
[curious] Cuando un mismo prefijo llega por dos circuitos, Azure prefiere la ruta más específica.
[600ms]
[confident] También puedes dirigir el tráfico con el peso de la conexión, o alargando el camino A S del otro circuito. Con rutas idénticas, Azure reparte la carga entre los dos.

## Step 7 · Resilience Design

[serious] Contoso elimina los puntos únicos de falla, una capa a la vez.
[600ms]
[confident] Cada circuito tiene dos enlaces activo-activo, así que termínalos en dispositivos distintos. Agrega un segundo circuito en otra ubicación de peering para sobrevivir a una caída de ubicación.
[600ms]
[reassuring] Y cierra con un gateway de ExpressRoute con redundancia de zona, para que el gateway no sea el eslabón débil.

## Step 8 · Global Reach and FastPath

[curious] Global Reach conecta entre sí las oficinas de Contoso mediante sus circuitos, y así los sitios intercambian datos por la red global de Microsoft.
[600ms]
[confident] FastPath hace que los datos se salten el gateway y vayan directo a las máquinas virtuales. El gateway sigue intercambiando rutas.
[600ms]
[reflective] FastPath requiere un SKU de gateway de gama alta, y Global Reach entre regiones requiere Premium.

## Step 9 · ExpressRoute Direct and Encryption

[calm] ExpressRoute Direct conecta los routers de Contoso directo a Microsoft, con puertos dobles, para ingerir grandes volúmenes de datos o lograr aislamiento físico.
[600ms]
[serious] El tráfico no está cifrado por defecto.
[600ms]
[confident] MACsec protege el enlace físico y solo funciona en Direct, con tu clave en Key Vault. IPsec protege todo el camino, de punta a punta. Puedes usar los dos juntos.

## Step 10 · Bidirectional Forwarding Detection

[concerned] Cuando falla un enlace, a BGP solo le puede tomar hasta unos tres minutos darse cuenta.
[600ms]
[impressed] La detección de reenvío bidireccional vigila el enlace todo el tiempo y detecta la falla en menos de un segundo.
[600ms]
[reflective] Del lado de Microsoft viene activada por defecto en los peerings nuevos, pero en tus propios dispositivos la configuras tú. La detección es más rápida, aunque la conmutación por error completa igual toma tiempo.

## Step 11 · Diagnose a Circuit

[serious] Azure no puede llegar a una subred de Contoso. Diagnostica de abajo hacia arriba.
[600ms]
[confident] Empieza por el circuito: debe estar habilitado, y el estado del proveedor en Provisionado. Luego revisa que los valores del peering coincidan en ambos lados, y mira la tabla A R P en los dos caminos.
[600ms]
[determined] Termina con el estado de BGP y la tabla de rutas. Si el estado es Activo o Inactivo, hay un desajuste en las subredes, la VLAN, los A S N o la clave M D 5.
