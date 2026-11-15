# Narrator Script — Network · Configure and troubleshoot Azure Load Balancer

**Source animation:** [LoadBalancerConfigAndTroubleshooting.html](../../../journeys/Network/LoadBalancerConfigAndTroubleshooting.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/load-balancer/load-balancer-overview>

---

## Step 1 · One Front End, Many Backends

[calm] La tienda web de Contoso corre sobre tres máquinas virtuales. Un balanceador de carga les da a los clientes una sola dirección de front end.
[600ms]
[confident] Reparte las conexiones nuevas entre las máquinas sanas del pool de backend.
[600ms]
[curious] Las reglas deciden a dónde va cada flujo, y las sondas de estado deciden quién está sano. Esas son las partes que vamos a configurar.

## Step 2 · Public or Internal, Standard SKU

[curious] La IP del front end define el tipo. Una IP pública crea un balanceador de carga público, y una IP privada, uno interno.
[600ms]
[confident] Un balanceador de carga interno funciona dentro de una red virtual y no puede recibir tráfico de internet.
[600ms]
[serious] Usa el SKU Standard. Basic se retiró el 30 de septiembre de 2025. Gateway es el tercer SKU, para appliances.

## Step 3 · Backend Pools: NIC or IP

[calm] Un pool de backend indica quién atiende el tráfico. Se llena por interfaz de red, o por dirección IP más red virtual.
[600ms]
[confident] Un pool por interfaz de red agrega VM o instancias de un conjunto de escalado. Un pool basado en IP te permite precargar direcciones, y requiere Standard.
[600ms]
[reflective] Un balanceador de carga puede tener los dos tipos de pool, pero nunca mezclados dentro del mismo pool.

## Step 4 · Health Probes

[curious] El balanceador de carga sondea cada backend. Aquí web-2 deja de responder, así que ya no recibe conexiones nuevas.
[600ms]
[confident] Una sonda tiene protocolo, puerto, intervalo y umbral. Una sonda TCP falla si no hay respuesta, y una HTTP falla con cualquier respuesta que no sea 200.
[600ms]
[reassuring] En Standard, los flujos TCP ya establecidos continúan. Usa el interruptor para ver los dos estados.

## Step 5 · Load-Balancing Rules

[calm] Una regla asocia una IP y un puerto de front end con un puerto de backend, usando una sonda de estado.
[600ms]
[curious] Por defecto, cada conexión nueva se distribuye con un hash de cinco valores, así que un mismo cliente puede terminar en máquinas distintas.
[600ms]
[confident] Si necesitas que un cliente siempre llegue a la misma máquina, cambia a persistencia de sesión por IP de cliente. Cambiar el modo no causa tiempo de inactividad.

## Step 6 · Inbound NAT Rules

[curious] Una regla de balanceo de carga elige cualquier VM sana. A veces quieres una máquina en particular.
[600ms]
[confident] Una regla NAT de entrada reenvía un puerto del front end a una VM concreta, por ejemplo S S H o R D P a un único servidor que tú indicas.
[600ms]
[encouraging] Usa la versión dos, que apunta a todo el pool y preasigna los puertos. Y a diferencia de una regla de balanceo de carga, no necesita sonda.

## Step 7 · Outbound Rules and SNAT Ports

[calm] Las VM del backend pueden salir por la IP pública del balanceador de carga, usando S N A T.
[600ms]
[confident] Una regla de salida te deja elegir el front end y decidir cuántos puertos S N A T recibe cada VM.
[600ms]
[reassuring] Para escalar más, agrega IP de front end, o pon un NAT gateway en la subred, que tiene prioridad.

## Step 8 · HA Ports and Gateway Load Balancer

[curious] Los firewalls y otros appliances necesitan todos los puertos.
[600ms]
[confident] Una regla de puertos H A usa el protocolo all y el puerto cero en un balanceador de carga Standard interno, así que una sola regla balancea todos los flujos.
[600ms]
[impressed] Luego, un Gateway Load Balancer encadena esos appliances a un front end público, sin necesidad de rutas definidas por el usuario.

## Step 9 · Troubleshoot: Probe Failing

[concerned] Ahora web-2 aparece como Down. La sonda tiene que pasar tres puertas para llegar.
[600ms]
[confident] Primero el grupo de seguridad de red, luego el firewall del sistema invitado y, por último, un servicio escuchando en el puerto correcto. Cada uno debe permitir la dirección de la sonda.
[600ms]
[determined] Revísalos en ese orden y mira el estado de la sonda de estado por instancia.

## Step 10 · Troubleshoot: Backend Unreachable

[serious] La sonda está Up, pero los usuarios siguen fallando. Revisa el puerto de datos, el grupo de seguridad de red y cualquier flujo que vuelva a sí mismo.
[600ms]
[concerned] No llames a un front end interno desde una VM de su propio pool. El flujo puede regresar a la misma máquina y agotar el tiempo de espera.
[600ms]
[confident] Si una VM no puede salir, necesita un método de salida explícito, como una regla de salida o un NAT gateway en la subred.

## Step 11 · Where Do I Look First?

[calm] Empieza por el síntoma. Cada rama indica lo primero que debes revisar.
[600ms]
[confident] Si los clientes no pueden conectarse, mira el estado de la sonda. Si las VM no pueden salir, revisa el método de salida y las métricas de S N A T. Si el tráfico está desigual, revisa la persistencia de sesión.
[600ms]
[proud] Con eso cubres las habilidades de balanceador de carga de A Z 104 y de A Z 700.
