# Narrator Script — Network · Application Gateway: Listeners, Rules, Settings and Rewrites

**Source animation:** [ApplicationGatewayDeepDive.html](../../../journeys/Network/ApplicationGatewayDeepDive.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/application-gateway/configuration-overview>
- <https://learn.microsoft.com/azure/web-application-firewall/ag/ag-overview>

---

## Step 1 · A reverse proxy in its own subnet

[calm] Application Gateway es un proxy inverso de capa siete para tráfico web, y vive dentro de tu red virtual.
[600ms]
[confident] Los clientes nunca hablan directamente con el servidor. El gateway termina la conexión del cliente y luego abre una completamente nueva hacia un servidor del pool de backend.
[600ms]
[reassuring] Tiene su propia subred dedicada, y cada instancia ocupa una dirección privada, así que deja espacio para poder escalar.

## Step 2 · v2 SKU, scaling and capacity units

[curious] Empieza eligiendo un SKU de versión dos: Standard v2 o WAF v2. La versión uno anterior ya se retiró.
[600ms]
[confident] Luego elige cómo escala: con un número fijo de instancias, o con autoescalado entre un mínimo y un máximo.
[600ms]
[reflective] Las unidades de capacidad miden lo que el gateway realmente usa en cómputo, conexiones y rendimiento, y cuenta la más alta de las tres.

## Step 3 · Frontend IP and listeners

[calm] La IP de frontend es por donde llegan los clientes. Puede ser pública, privada o ambas.
[600ms]
[curious] Después, un listener revisa el puerto, el protocolo y el nombre de host. Un listener básico acepta cualquier host, mientras que uno multisitio compara el nombre de host, así que varios sitios pueden compartir una misma dirección.
[600ms]
[serious] En la versión dos, la prioridad de la regla define el orden, así que a los listeners con comodín ponles un número mayor que a los de un sitio específico.

## Step 4 · Backend pools

[calm] Un pool de backend es el grupo de servidores que reciben el tráfico.
[600ms]
[confident] Los miembros pueden ser máquinas virtuales, un conjunto de escalado, una aplicación de App Service o cualquier dirección IP o nombre de dominio que elijas.
[600ms]
[reassuring] Vinculas el pool a una o más reglas de enrutamiento, y cuando una regla coincide, el gateway envía la solicitud solo a los miembros que están sanos.

## Step 5 · HTTP settings

[curious] La configuración del backend le dice al gateway cómo hablar con los servidores: el protocolo, el puerto y cuánto esperar una respuesta.
[600ms]
[confident] La afinidad de cookies mantiene a un usuario en el mismo servidor, con una cookie que el gateway administra por ti.
[600ms]
[serious] Cuida también el nombre de host. Puedes sobrescribirlo, pero la mejor práctica es mantener el mismo nombre de host del cliente al servidor.

## Step 6 · Health probes

[curious] Las sondas deciden qué servidores reciben tráfico. Sin una sonda personalizada, el gateway solo pide la ruta raíz, y cualquier respuesta de doscientos a trescientos noventa y nueve cuenta como sana.
[600ms]
[confident] Una sonda personalizada revisa una ruta de salud real, en tu host, con tu intervalo, y puede validar el código de estado o el cuerpo de la respuesta.
[600ms]
[determined] Sondea algo que ejercite las dependencias de la app, y un servidor que no esté sano sale de la rotación automáticamente.

## Step 7 · Routing rules

[calm] Una regla de enrutamiento une un listener con un pool de backend y su configuración.
[600ms]
[confident] Una regla básica manda todo a un solo pool. Una regla basada en rutas manda distintas rutas de URL a distintos pools, con un pool predeterminado para todo lo demás.
[600ms]
[encouraging] Cada regla tiene una prioridad única, y siempre hay una que se evalúa primero. Usa los botones para comparar los dos tipos.

## Step 8 · TLS termination and end-to-end TLS

[calm] Para la terminación de TLS, agregas un certificado a un listener HTTPS. El gateway descifra la solicitud, aplica sus reglas y puede seguir enviando HTTP simple hacia adelante.
[600ms]
[confident] Para TLS de extremo a extremo, además eliges HTTPS en la configuración del backend, así el gateway abre una sesión cifrada nueva hacia un servidor que tiene su propio certificado.
[600ms]
[reassuring] Si ese certificado viene de una autoridad privada, sube el certificado raíz. Los clientes y los backends necesitan TLS uno punto dos o superior.

## Step 9 · Rewrite rule sets

[curious] Un conjunto de reescritura cambia solicitudes y respuestas a su paso. Puede tocar encabezados, la ruta de la URL y la cadena de consulta.
[600ms]
[confident] Las condiciones deciden cuándo se aplica, y las acciones agregan, establecen o quitan encabezados. Usos típicos: agregar HSTS u ocultar un encabezado que revela el backend.
[600ms]
[impressed] Reevaluar el path map incluso permite que una ruta reescrita elija otro pool. Requiere la versión dos, y una regla solo puede tener un conjunto de reescritura.

## Step 10 · WAF, and when to add Front Door

[calm] WAF v2 agrega un firewall de aplicaciones web al gateway, dentro de tu región.
[600ms]
[confident] Una política de WAF contiene reglas gestionadas basadas en el conjunto de reglas básico de OWASP, más tus propias reglas personalizadas, que se revisan primero.
[600ms]
[proud] Application Gateway se mantiene regional. Cuando necesitas un punto de entrada global, pon Azure Front Door delante, con un gateway detrás en cada región. Ahí está el corazón de la habilidad A Z 700.
