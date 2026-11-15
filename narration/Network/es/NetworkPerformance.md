# Narrator Script — Network · Design for network performance: latency, throughput and the path

**Source animation:** [NetworkPerformance.html](../../../journeys/Network/NetworkPerformance.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/virtual-network/accelerated-networking-overview>
- <https://learn.microsoft.com/azure/frontdoor/front-door-traffic-acceleration>
- <https://learn.microsoft.com/azure/expressroute/about-fastpath>

---

## Step 1 · Is It Slow, or Is It Far?

[calm] La tienda en línea de Contoso se siente lenta para los clientes que están lejos de su región de hospedaje.
[600ms]
[curious] La latencia es el tiempo de ida y vuelta entre dos puntos. El rendimiento es cuántos datos se mueven por segundo. Y la pérdida de paquetes es el porcentaje de paquetes que nunca llegan.
[600ms]
[confident] Cada uno tiene una solución distinta, así que primero identifica el síntoma y después elige la solución.

## Step 2 · Measure First

[calm] Connection Monitor prueba la latencia y la pérdida de paquetes a lo largo de la ruta, y te la muestra salto por salto.
[600ms]
[confident] Network Insights muestra la topología, el estado y las métricas de tus recursos de red, sin configurar nada.
[600ms]
[curious] Para medir la latencia entre VM, usa Latte en Windows o SockPerf en Linux. Un ping común usa ICMP, así que no es la misma prueba que con TCP o UDP.

## Step 3 · Keep Chatty VMs Close

[curious] Las VM que se comunican mucho pagan cada viaje de ida y vuelta. Una región queda cerca, y una zona, más cerca todavía.
[600ms]
[reflective] Pero una zona puede abarcar varios centros de datos, así que dos máquinas de la misma zona pueden estar a unos cuantos saltos.
[600ms]
[serious] Un grupo de ubicación por proximidad las mantiene en un solo centro de datos, con la menor latencia. A cambio, la asignación puede fallar y pierdes algo de resiliencia.

## Step 4 · Accelerated Networking

[calm] Normalmente, cada paquete pasa por el switch virtual del host.
[600ms]
[impressed] Con la red acelerada, la tarjeta de red manda el tráfico directo a la VM y aplica en hardware políticas como los grupos de seguridad de red.
[600ms]
[confident] Obtienes menor latencia, menos jitter y menor uso de CPU. Actívala en las dos VM de la misma red virtual, con un tamaño compatible y con la VM detenida y desasignada.

## Step 5 · VM Size Sets the Ceiling

[calm] Cada tamaño de VM tiene su propio límite de ancho de banda de salida.
[600ms]
[serious] Cuenta todo el tráfico que sale de la VM, hacia cualquier destino, y se comparte entre todas las tarjetas de red. Agregar tarjetas o usar la red acelerada no lo aumenta.
[600ms]
[encouraging] Si estás llegando al límite, elige un tamaño con más ancho de banda de red.

## Step 6 · Edge Acceleration

[curious] Las ubicaciones de borde de Front Door y de CDN están cerca de tus usuarios y sirven desde ahí los archivos en caché.
[600ms]
[confident] Con tráfico dinámico, split TCP termina la conexión del usuario en un borde cercano y reutiliza una conexión más duradera hacia el origen.
[600ms]
[serious] Guarda en caché archivos estáticos, nunca datos personales. Y empieza los diseños nuevos con Front Door, porque el Azure CDN clásico se va a retirar.

## Step 7 · Pick Routing for Speed

[calm] Varios servicios pueden mandar a los usuarios al lugar más rápido, pero trabajan en capas distintas.
[600ms]
[confident] Traffic Manager responde con DNS y entrega el endpoint de menor latencia. Front Door recibe a los usuarios de HTTP y HTTPS en un borde cercano.
[600ms]
[curious] Un balanceador de carga entre regiones les da a las apps TCP y UDP una sola IP global estática. Elige una pestaña para compararlos.

## Step 8 · Private Path to On-Premises

[calm] Un circuito privado tiene ancho de banda fijo, así que dimensiónalo para el tráfico pico. Si lo sobresuscribes, se pierden paquetes.
[600ms]
[confident] FastPath hace que los datos se salten el gateway, que sigue intercambiando rutas, y requiere un SKU de gateway de alto rendimiento.
[600ms]
[reassuring] Global Reach conecta tus sitios locales entre sí a través de la red de Microsoft.

## Step 9 · Where Inspection Adds Latency

[concerned] Pasar el tráfico por un firewall en el hub agrega un salto.
[600ms]
[confident] Si haces peering directo entre los spokes sensibles a la latencia, no hay ningún salto extra, y es lo que se recomienda para minimizar la latencia.
[600ms]
[reflective] Virtual WAN agrega un router de hub administrado por Microsoft, y la intención de enrutamiento puede volver a sumar inspección donde la necesites.

## Step 10 · All in One

[calm] Identifica el síntoma: latencia, rendimiento o pérdida de paquetes. Luego mídelo con Connection Monitor y Network Insights.
[600ms]
[confident] Después corrígelo con la ubicación, la tarjeta de red, el tamaño de la VM, el borde, el enrutamiento o una ruta privada, cambiando una sola cosa a la vez.
[600ms]
[proud] Si relacionas cada síntoma con su solución, puedes recomendar una que optimice el rendimiento de la red, una habilidad de A Z 305.
