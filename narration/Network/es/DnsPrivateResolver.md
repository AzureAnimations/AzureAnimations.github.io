# Narrator Script — Network · DNS Private Resolver and Hybrid DNS

**Source animation:** [DnsPrivateResolver.html](../../../journeys/Network/DnsPrivateResolver.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/dns/dns-private-resolver-overview>
- <https://learn.microsoft.com/azure/dns/private-resolver-endpoints-rulesets>
- <https://learn.microsoft.com/azure/dns/private-resolver-hybrid-dns>
- <https://learn.microsoft.com/azure/dns/private-resolver-architecture>

---

## Step 1 · The network works. The names don't.

[calm] El centro de datos de Contoso está conectado a Azure por VPN o ExpressRoute, y el enlace funciona.
[600ms]
[concerned] Sin embargo, cada lado usa su propio DNS. Desde el entorno local no se ven los nombres privados de Azure, y desde Azure no se ve corp dot contoso dot local.
[600ms]
[curious] La conexión lleva los paquetes, pero todavía falta algo que lleve las preguntas.

## Step 2 · The old answer: DNS servers you run

[calm] La solución de antes eran máquinas virtuales de reenvío de DNS en Azure. El DNS local les reenvía los nombres de Azure.
[600ms]
[curious] Luego las redes virtuales apuntan su DNS personalizado a esas máquinas, y así se cierra la brecha.
[600ms]
[serious] Funciona, pero ahora tienes que operar servidores. Eso implica parches, disponibilidad, licencias y cambios manuales con cada actualización de DNS.

## Step 3 · Swap the servers for a service

[calm] Azure DNS Private Resolver es un servicio totalmente gestionado y de alta disponibilidad.
[600ms]
[confident] No hay máquinas DNS que desplegar, parchear ni escalar, y tampoco hay que cambiar la configuración de cliente DNS en tus máquinas virtuales.
[600ms]
[reassuring] Necesita una red virtual, además de ExpressRoute o una VPN. Todo lo demás es configuración, mediante endpoints y reglas.

## Step 4 · Inbound endpoint: the door into Azure

[calm] Un endpoint de entrada es una dirección IP privada en tu red virtual, dentro de su propia subred dedicada.
[600ms]
[confident] El DNS local le reenvía los nombres privados de Azure, y Azure DNS responde con las zonas privadas vinculadas a esa red.
[600ms]
[curious] En el entorno local, creas un reenviador condicional para esa zona que apunte a esta dirección.

## Step 5 · Outbound endpoint: the door out of Azure

[calm] Un endpoint de salida envía consultas desde Azure hacia el entorno local, hacia otra nube o hacia cualquier servidor DNS externo.
[600ms]
[curious] Tiene su propia subred dedicada, pero no tiene una dirección IP propia, y es a propósito.
[600ms]
[confident] Eso sí, no decide a dónde va una consulta. Eso lo hace un conjunto de reglas de reenvío.

## Step 6 · Forwarding rulesets: which domain goes where

[calm] Un conjunto de reglas de reenvío de DNS es una lista de reglas. Cada regla dice: para este dominio, pregunta a estos servidores DNS.
[600ms]
[confident] Por ejemplo, corp dot contoso dot local va a tu servidor DNS local, en el puerto cincuenta y tres.
[600ms]
[serious] Cuando varias reglas coinciden con un nombre, gana el sufijo más largo. El conjunto de reglas se asocia a un endpoint de salida, que manda la consulta a su destino.

## Step 7 · Ruleset links: put the rules to work

[calm] Vincula un conjunto de reglas a una red virtual y las máquinas virtuales de ahí usan esas reglas. No cambias ninguna configuración de DNS.
[600ms]
[curious] Una regla que apunte al endpoint de entrada hasta permite que un spoke resuelva zonas privadas que viven en el hub.
[600ms]
[reassuring] Las redes vinculadas no tienen que hacer peering con la red del resolver, aunque en hub-and-spoke normalmente sí lo hacen.

## Step 8 · Where the resolver sits in hub-and-spoke

[calm] Pon el resolver en el hub. Entonces los spokes pueden llegar a él de dos maneras.
[600ms]
[confident] El modelo distribuido deja cada spoke con el DNS que provee Azure y usa vínculos con el conjunto de reglas. El centralizado configura el endpoint de entrada como DNS personalizado de cada spoke.
[600ms]
[serious] Los dos diseños necesitan que la red del hub esté vinculada a la zona privada.

## Step 9 · Private endpoints across the tunnel

[calm] Los clientes locales llegan a un endpoint privado con el nombre normal, por ejemplo contosodata dot blob dot core dot windows dot net.
[600ms]
[serious] Reenvía el nombre de la zona pública, blob dot core dot windows dot net, no el de privatelink.
[600ms]
[impressed] Azure agrega un CNAME hacia el nombre de privatelink, y la zona privada del hub responde con la IP privada del endpoint.

## Step 10 · Trace a query through the resolver

[excited] Elige una consulta y mira a dónde va. Luego selecciona cualquier salto numerado para ver qué pasa ahí.
[600ms]
[calm] Los nombres de las VM de Azure pasan por Azure DNS y los vínculos del conjunto de reglas. Los nombres locales entran por el endpoint de entrada.
[600ms]
[impressed] Y el resolver es la única pieza que no tuviste que construir.

## Step 11 · Resolver, private zones, Firewall DNS proxy

[calm] Estos tres suenan parecido y se traslapan, pero cada uno hace un trabajo distinto.
[600ms]
[curious] Una zona privada guarda los registros. El resolver reenvía consultas entre redes, en ambos sentidos. Un proxy DNS de Azure Firewall se encarga del filtrado y el reenvío.
[600ms]
[confident] Se combinan bien: el firewall agrega filtrado por nombre de dominio en sus reglas.

## Step 12 · Hybrid DNS, nothing to patch

[calm] Un resolver gestionado reemplaza tus máquinas virtuales de DNS.
[600ms]
[confident] El endpoint de entrada responde las consultas locales. El endpoint de salida y los conjuntos de reglas manejan las consultas de Azure, y los vínculos aplican las reglas a tus redes.
[600ms]
[proud] Para el examen, ten claro qué endpoint atiende cada dirección y dónde se ubica el resolver en hub-and-spoke.
