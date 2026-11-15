# Narrator Script — Network · Protect and observe your network: DDoS, flow logs and traffic analytics

**Source animation:** [NetworkProtection.html](../../../journeys/Network/NetworkProtection.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/ddos-protection/ddos-protection-overview>
- <https://learn.microsoft.com/azure/network-watcher/vnet-flow-logs-overview>

---

## Step 1 · A busy Friday, or an attack?

[calm] Es un viernes con mucho movimiento y la IP pública de Contoso Shop está saturada. Los clientes no pueden pagar.
[600ms]
[concerned] ¿Es por una venta o es un ataque? ¿Quién mandó este tráfico y qué puede absorberlo?
[600ms]
[serious] Un ataque DDoS manda más tráfico del que la aplicación puede manejar, y los usuarios reales no logran pasar.

## Step 2 · Three kinds of DDoS attack

[curious] Hay tres tipos de ataque: inundar la tubería, abusar del handshake o imitar a usuarios web reales.
[600ms]
[calm] Las capas tres y cuatro llevan paquetes y conexiones. La capa siete es la aplicación. Cada tipo se detiene en una capa distinta.
[600ms]
[confident] Azure DDoS Protection mitiga los ataques de las capas tres y cuatro. Para la capa siete, agregas un firewall de aplicaciones web.

## Step 3 · Three levels of DDoS cover

[calm] Toda IP pública recibe una protección básica de la plataforma.
[600ms]
[curious] Hay dos niveles de pago, DDoS IP Protection y DDoS Network Protection, que la ajustan a tu app y agregan alertas, registros y más.
[600ms]
[reassuring] Comparten la misma ingeniería de base y se diferencian en los servicios de valor agregado. Revisa la página de precios para ver los costos.

## Step 4 · Absorb, scrub, forward

[calm] Cuando se pasa del límite aprendido, Azure absorbe la inundación y la depura con su red global.
[600ms]
[confident] Solo el tráfico legítimo llega a tu app.
[600ms]
[impressed] El ajuste adaptativo en tiempo real usa perfiles de tráfico con aprendizaje automático para fijar los límites de cada IP pública protegida, así que no tienes que ajustar los umbrales a mano.

## Step 5 · See the attack while it happens

[curious] Las métricas, las alertas y los registros muestran un ataque en curso y qué se descartó.
[600ms]
[confident] Network Protection además incluye un equipo de respuesta rápida. Envía los registros de DDoS a un espacio de trabajo de Log Analytics con una configuración de diagnóstico.
[600ms]
[serious] Haz pruebas solo con un socio de simulación aprobado, nunca contra objetivos que no sean tuyos.

## Step 6 · Layer the defences

[calm] Ningún control lo cubre todo. DDoS Protection se encarga de las inundaciones en las capas tres y cuatro.
[600ms]
[curious] Un WAF lee las solicitudes web en la capa siete, y los NSG y un firewall deciden quién entra y quién sale.
[600ms]
[confident] Un diseño común pone una IP pública con protección DDoS en un Application Gateway con WAF, delante de subredes protegidas con NSG.

## Step 7 · What a flow log records

[curious] Cada flujo de IP que pasa por la red virtual se convierte en un registro pequeño: quién habló con quién, por qué puerto y si se permitió o se denegó.
[600ms]
[calm] Cada registro también incluye la interfaz de red, el protocolo, el estado del flujo, el estado del cifrado y el conteo de paquetes y de bytes.
[600ms]
[reassuring] Necesitas tener registrado el proveedor de recursos Microsoft.Insights y una cuenta de almacenamiento Standard en la misma región.

## Step 8 · One switch replaces many

[serious] Los registros de flujo de NSG se retiran el 30 de septiembre de 2027, y ya no se pueden crear nuevos.
[600ms]
[confident] Activa el registro de flujo una sola vez, en la red virtual, en vez de hacerlo por cada NSG.
[600ms]
[concerned] Desactiva los registros de flujo de NSG antes de habilitar los de la red virtual en las mismas cargas de trabajo; si no, podrías registrar el tráfico dos veces y pagarlo dos veces.

## Step 9 · Traffic analytics: patterns, not rows

[calm] Los registros de flujo en bruto son filas. Traffic analytics los convierte en patrones.
[600ms]
[curious] Lee los registros, combina los repetidos, agrega contexto geográfico y de seguridad, y guarda el resultado en un espacio de trabajo de Log Analytics.
[600ms]
[serious] Necesitas Network Watcher, un espacio de trabajo y una red virtual con el registro de flujo activado. Antes revisa la tabla de regiones, porque no todas lo admiten.

## Step 10 · Ask the network, check the posture

[calm] Network Watcher responde una pregunta en el momento, con herramientas como el diagnóstico de NSG, el siguiente salto y las reglas de seguridad efectivas.
[600ms]
[confident] Defender for Cloud revisa tu configuración de forma continua y te lista lo que hay que corregir.
[600ms]
[reassuring] La puntuación de seguridad resume esos hallazgos en un solo número. Mientras más alta, menor es el riesgo identificado.

## Step 11 · Pick a threat, see what reacts

[curious] Elige un ataque o un error.
[600ms]
[confident] La ruta muestra qué control reacciona y dónde lo verías.
[600ms]
[reflective] Cuatro amenazas comunes, cuatro respuestas distintas. La mayoría de las defensas reales combinan varias de ellas.

## Step 12 · Absorb, block, record, flag

[calm] Absorbe con DDoS Protection, bloquea con WAF, NSG y un firewall, registra con los registros de flujo y señala con Defender for Cloud.
[600ms]
[confident] Combina los controles en capas y luego usa los registros y las recomendaciones para ver qué pasa realmente en tu red.
[600ms]
[proud] A Z 700 menciona estas habilidades de forma directa, y A Z 305 te pide elegir la solución adecuada para la seguridad y el monitoreo de la red.
