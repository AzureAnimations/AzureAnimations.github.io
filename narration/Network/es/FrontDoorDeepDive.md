# Narrator Script — Network · Azure Front Door: endpoints, origins, rules and private origins

**Source animation:** [FrontDoorDeepDive.html](../../../journeys/Network/FrontDoorDeepDive.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/frontdoor/front-door-routing-architecture>
- <https://learn.microsoft.com/azure/frontdoor/private-link>
- <https://learn.microsoft.com/azure/web-application-firewall/afds/afds-overview>

---

## Step 1 · What Front Door adds

[calm] Tres servicios, tres trabajos. Traffic Manager responde con DNS, a nivel de dominio, así que la conmutación por error depende de la caché y del tiempo de vida.
[600ms]
[confident] Application Gateway es un proxy regional de capa siete dentro de tu red.
[600ms]
[impressed] Azure Front Door es la puerta de entrada global de capa siete, en el borde de Microsoft, con descarga de TLS, enrutamiento por ruta, caché y conmutación por error rápida.

## Step 2 · Standard vs Premium: what each buys

[curious] Front Door tiene dos niveles. Los dos enrutan de forma global, usan caché, ejecutan el motor de reglas y admiten reglas personalizadas de WAF.
[600ms]
[confident] Solo Premium agrega los conjuntos de reglas de WAF administrados por Microsoft, protección contra bots y Private Link hacia un origen.
[600ms]
[encouraging] Classic se va a retirar, así que empieza los diseños nuevos con Standard o Premium. Haz clic en una necesidad de la matriz para ver qué nivel la cubre.

## Step 3 · Endpoints, routes and origin groups

[calm] Un endpoint agrupa las rutas de tus dominios. Front Door le genera un nombre de dominio, y tú puedes agregar tus propios dominios personalizados.
[600ms]
[confident] Una ruta empareja un dominio con un patrón de ruta, y manda la solicitud a un grupo de orígenes.
[600ms]
[reassuring] Un grupo de orígenes es un conjunto de orígenes, como una app de App Service, un almacenamiento o cualquier host, que se sondean y se balancean juntos.

## Step 4 · Health probes and latency routing

[curious] Cada ubicación de borde sondea cada origen. Si un origen no está sano, queda fuera de la elección.
[600ms]
[confident] Luego Front Door va acotando en este orden: orígenes sanos, después prioridad, luego latencia y por último peso.
[600ms]
[reflective] El método por defecto es la latencia más baja, así que la solicitud va al origen sano más rápido. Los números de aquí son solo ilustrativos.

## Step 5 · Caching and compression

[calm] Con la caché activada en una ruta, el borde guarda una copia de la respuesta a un GET.
[600ms]
[confident] El siguiente comprador la recibe desde el borde, sin llamar al origen. Además, la compresión reduce el tamaño de la respuesta.
[600ms]
[serious] Nunca guardes en caché contenido personal. Para lo dinámico, usa una ruta aparte con la caché desactivada, y purga las rutas cuando necesites refrescar.

## Step 6 · Traffic acceleration: edge and split TCP

[curious] Primero, el DNS manda al comprador a una buena ubicación de borde.
[600ms]
[confident] Ese borde termina ahí cerca la conexión TCP del comprador. Esto se llama split TCP, así que los viajes de ida y vuelta de la conexión inicial, que son lentos, se quedan cortos.
[600ms]
[impressed] Aparte, se abre de antemano una conexión larga hacia el origen, y se reutiliza para muchos compradores.

## Step 7 · TLS at the edge and end to end

[calm] Front Door termina el TLS del comprador en el borde, aplica el enrutamiento y las reglas, y luego abre una segunda conexión TLS hacia el origen.
[600ms]
[confident] Configura HTTPS como protocolo de reenvío para tener cifrado de extremo a extremo.
[600ms]
[reassuring] Para un dominio personalizado, usa un certificado administrado, o trae el tuyo desde Key Vault. Se admiten T L S uno punto dos y uno punto tres.

## Step 8 · Rules: rewrite, redirect, headers

[curious] Un conjunto de reglas se ejecuta después del WAF y de la coincidencia de ruta, antes de que la solicitud siga su camino.
[600ms]
[confident] Una regla tiene condiciones de coincidencia que deben cumplirse todas, y además acciones.
[600ms]
[encouraging] Las acciones más comunes son una redirección de URL, una reescritura de URL y cambios en los encabezados de la solicitud o de la respuesta.

## Step 9 · Secure an origin with Private Link

[calm] Premium puede llegar a un origen por Private Link, que es la opción privada.
[600ms]
[confident] Front Door pide un endpoint privado, la solicitud aparece en el origen como pendiente y tú la apruebas.
[600ms]
[proud] Después de eso, el tráfico se queda en la red troncal de Microsoft, y el origen ya no necesita ser accesible desde la internet pública.

## Step 10 · WAF policy and rule sets

[calm] Una política de WAF revisa cada solicitud en el borde, cerca de quien la envía.
[600ms]
[confident] Primero se ejecutan las reglas personalizadas, por orden de prioridad, y luego los conjuntos de reglas administradas. Standard admite solo reglas personalizadas; Premium agrega conjuntos administrados y protección contra bots.
[600ms]
[proud] Usa el modo de detección para registrar o el modo de prevención para actuar, y asócialo al perfil, al dominio o a la ruta. Con eso cubres la habilidad A Z 700 de Front Door.
