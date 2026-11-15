# Narrator Script — Network · Outbound Connectivity: Public IPs, SNAT and NAT Gateway

**Source animation:** [OutboundConnectivity.html](../../../journeys/Network/OutboundConnectivity.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/nat-gateway/nat-overview>
- <https://learn.microsoft.com/azure/nat-gateway/nat-gateway-resource>
- <https://learn.microsoft.com/azure/virtual-network/ip-services/default-outbound-access>

---

## Step 1 · Which Address Do My VMs Call From?

[calm] Las VM de aplicación de Contoso solo tienen direcciones privadas, y a una dirección privada no se puede llegar desde internet.
[600ms]
[curious] Su socio, Fabrikam, solo acepta llamadas de API desde una dirección pública incluida en una lista de permitidos. Entonces, ¿qué va a ver realmente Fabrikam?
[600ms]
[confident] Esta lección gira en torno a tres preguntas: desde qué dirección salen las llamadas, cuántas conexiones pueden mantener abiertas las VM y qué cambió con el acceso saliente predeterminado.

## Step 2 · Default Outbound Access

[calm] Si no configuras nada, Azure le asigna en silencio a cada VM una IP pública de salida implícita.
[600ms]
[serious] No es un recurso tuyo. La dirección es de Microsoft, que puede cambiarla sin avisar, y no admite ping ni paquetes fragmentados.
[600ms]
[concerned] Eso es un riesgo real: en cuanto cambia la dirección, la lista de permitidos de Fabrikam deja de coincidir y las llamadas fallan.

## Step 3 · What Changed: Private Subnets

[curious] Aquí está el gran cambio. Las redes virtuales nuevas ahora usan subredes privadas por defecto, y eso significa que no tienen ninguna IP de salida predeterminada.
[600ms]
[calm] Las redes existentes no se tocan. Sus VM conservan la salida predeterminada hasta que conviertas la subred en privada y desasignes las VM.
[600ms]
[confident] Sea como sea, la dirección es clara: para todo lo nuevo, planifica un método de salida explícito, como un NAT gateway.

## Step 4 · Public IPs: Standard, Static, Zone-Aware

[calm] Un método de salida explícito empieza con una IP pública, y la que hay que usar es Standard.
[600ms]
[confident] Es estática, puede ser redundante por zona o zonal, y se mantiene cerrada al tráfico de entrada hasta que lo permitas. Standard v2 siempre es redundante por zona.
[600ms]
[serious] El SKU Basic se retiró el 30 de septiembre de 2025, así que actualiza las que te queden.

## Step 5 · SNAT: When Ports Run Out

[calm] Muchas VM comparten una IP pública mediante SNAT, que cambia la dirección y el puerto de origen privados de cada conexión por unos públicos.
[600ms]
[curious] Cada conexión activa hacia la misma dirección y puerto de destino necesita su propio puerto de origen, así que el pool es finito.
[600ms]
[concerned] Cuando se acaban los puertos, las conexiones nuevas hacia ese destino fallan. Reutiliza conexiones, agrega direcciones o usa un NAT gateway.

## Step 6 · Attach a NAT Gateway

[confident] La solución es asociar un NAT gateway a la subred. Ahora todas las VM de esa subred salen con la IP pública estática del gateway.
[600ms]
[calm] No hay rutas que editar ni IP públicas en las VM, y es solo de salida, así que las conexiones de entrada no solicitadas se bloquean.
[600ms]
[impressed] Los puertos se reparten bajo demanda entre todas las VM, y eso hace mucho menos probable que se agoten.

## Step 7 · More Addresses: IPs and Prefixes

[curious] Cada IP pública que agregas al NAT gateway suma más puertos al pool compartido.
[600ms]
[confident] Un prefijo de IP pública es un rango contiguo de IP públicas Standard, así que Fabrikam puede permitir un solo rango en lugar de muchas direcciones sueltas.
[600ms]
[reflective] Elige bien el tamaño del prefijo, porque después no se puede cambiar.

## Step 8 · Bring Your Own IP Range

[calm] Puede que Contoso ya tenga un rango de direcciones públicas propio, y puede traer ese rango a Azure.
[600ms]
[confident] Lo registras en un registro regional de internet, lo validas, lo aprovisionas y lo pones en servicio. El prefijo personalizado no se puede asociar directamente, así que de él derivas IP y prefijos públicos.
[600ms]
[proud] La ventaja es que Contoso conserva la reputación de sus direcciones y sus listas de permitidos actuales.

## Step 9 · Which Outbound Method Wins?

[curious] ¿Qué pasa cuando una subred tiene varios métodos de salida a la vez? Hay un orden claro.
[600ms]
[calm] Primero gana una ruta hacia un appliance o gateway. Después el NAT gateway, luego una IP a nivel de instancia, luego las reglas de salida del balanceador de carga y, al final, la ruta predeterminada.
[600ms]
[serious] Los flujos existentes conservan su método anterior y solo las conexiones nuevas cambian. Además, los recursos con SKU Basic no funcionan con un NAT gateway.

## Step 10 · NAT Gateway: Zones and Idle Timeout

[calm] Un NAT gateway Standard vive en una sola zona. Tú eliges la zona, o eliges no especificar y Azure lo coloca, y después no se puede cambiar.
[600ms]
[confident] StandardV2 es redundante entre todas las zonas, y requiere IP públicas StandardV2.
[600ms]
[curious] Los flujos inactivos se cortan después de un tiempo de espera que puedes ajustar para TCP. Cualquier actividad, como un keepalive, reinicia el temporizador, pero el tiempo de espera de UDP es fijo.

## Step 11 · Pick Your Outbound Method

[curious] En lugar de empezar por el producto, empieza por la necesidad. Elige una y el diagrama muestra el método, su ruta y a qué debes estar atento.
[600ms]
[confident] En la mayoría de los escenarios, Microsoft recomienda un NAT gateway. Un firewall agrega inspección, y llegas a él con una ruta.
[600ms]
[serious] No se recomienda el acceso saliente por defecto para producción.

## Step 12 · Outbound Connectivity, All in One

[calm] Ahora las VM privadas de Contoso salen por una subred privada y un NAT gateway, con IP estáticas Standard.
[600ms]
[confident] Las tres respuestas: la dirección es una IP estática Standard, un prefijo o tu propio rango. Las conexiones usan puertos SNAT, que se asignan bajo demanda. Y las redes virtuales nuevas usan subredes privadas por defecto.
[600ms]
[proud] Fabrikam permite un solo rango, y las llamadas de Contoso siempre llegan desde una dirección conocida.
