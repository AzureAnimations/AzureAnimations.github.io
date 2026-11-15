# Narrator Script — Network · Microsoft Entra Private Access and Private Link services

**Source animation:** [EntraPrivateAccess.html](../../../journeys/Network/EntraPrivateAccess.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/entra/global-secure-access/concept-private-access>
- <https://learn.microsoft.com/azure/private-link/private-link-service-overview>
- <https://learn.microsoft.com/entra/global-secure-access/how-to-configure-per-app-access>

---

## Step 1 · Two requests, two tools

[calm] Contoso tiene dos solicitudes de acceso privado. Maya trabaja desde casa y necesita una sola app interna.
[600ms]
[curious] Y un socio necesita llegar a un servicio que Contoso tiene en Azure. Cada solicitud necesita su propio camino privado.
[600ms]
[confident] Microsoft Entra Private Access resuelve la primera. Un servicio de Azure Private Link resuelve la segunda.

## Step 2 · The VPN problem

[calm] Una VPN a nivel de red mete todo el dispositivo en la red.
[600ms]
[concerned] Maya solo necesita una app, pero ahora tiene a su alcance todos los servidores de esa red. Es mucho más acceso del que el trabajo requiere.
[600ms]
[confident] Private Access, en cambio, funciona por segmento de aplicación. Esta es la idea general del acceso a nivel de red, no una afirmación sobre todos los productos de VPN.

## Step 3 · Microsoft Entra Private Access

[curious] El dispositivo de Maya ejecuta el cliente de Global Secure Access. Este manda las solicitudes de las apps privadas a través del servicio, así que no hay ninguna VPN a la que conectarse.
[600ms]
[confident] Tú enumeras los nombres y direcciones que consideras privados, y las solicitudes a los destinos de una app se enrutan hacia esa app.
[600ms]
[reassuring] No puede conectarse a nada más en tu red.

## Step 4 · The connector

[calm] Un conector es un agente pequeño que se ejecuta en un Windows Server dentro de tu red.
[600ms]
[confident] Abre conexiones salientes hacia el servicio, así que no tienes que abrir ningún puerto de entrada. Los usuarios llegan al servicio en la nube, y este enruta el tráfico a la app a través del conector.
[600ms]
[serious] Para alta disponibilidad, usa al menos dos conectores en el grupo.

## Step 5 · Define an app segment

[curious] Un segmento define qué es la app: un nombre de dominio completo o una dirección IP, más sus puertos.
[600ms]
[confident] Puede ser un nombre con comodín o un rango de direcciones, y los puertos pueden ser valores sueltos o rangos. Agregas los segmentos a una aplicación empresarial y eliges su grupo de conectores.
[600ms]
[encouraging] Después asignas los usuarios y grupos que pueden usarla.

## Step 6 · Conditional Access on a private app

[calm] Una app privada es una aplicación empresarial, así que el Acceso Condicional también se aplica.
[600ms]
[confident] Una política puede exigir autenticación multifactor o un dispositivo compatible antes de dejar entrar al usuario.
[600ms]
[reassuring] Crea la política desde la app en Global Secure Access y la app ya queda como destino. Excluye las cuentas de acceso de emergencia y empieza en modo de solo informe.

## Step 7 · Quick Access or per-app access?

[curious] Hay dos formas de configurarlo. Acceso Rápido es una sola app que cubre tu grupo principal de recursos privados.
[600ms]
[confident] En cambio, con una app de Global Secure Access por aplicación, solo un subconjunto de recursos tiene sus propias reglas.
[600ms]
[reflective] Piensa en Acceso Rápido como un paso de transición. Úsalo para reemplazar la VPN y luego pasa al acceso por aplicación para tener un control más fino. Los dos usan un grupo de conectores.

## Step 8 · Publish a Private Link service

[calm] Ahora, el lado del proveedor. Pon tu servicio detrás de un balanceador de carga estándar.
[600ms]
[confident] Luego crea un servicio de Private Link sobre su frontend IP, y Azure genera un alias que puedes compartir.
[600ms]
[serious] El Balanceador de Carga Básico no sirve aquí, y el servicio, la red virtual y el balanceador de carga tienen que estar en la misma región.

## Step 9 · Who may connect: NAT, visibility, approval

[curious] Tres controles deciden quién puede conectarse. La visibilidad define quién puede siquiera pedir una conexión: solo acceso basado en roles, suscripciones específicas o cualquiera que tenga tu alias.
[600ms]
[confident] Con la aprobación automática, las suscripciones de confianza se saltan tu revisión. Las demás solicitudes quedan en Pendiente hasta que las apruebes o las rechaces.
[600ms]
[reflective] Las IP de NAT salen de tu propia subred, así que tu servicio ve como origen una dirección NAT y no la del consumidor.

## Step 10 · The partner's private endpoint

[calm] Del lado del consumidor, el socio crea un punto final privado en su propia red virtual.
[600ms]
[confident] Ese punto final apunta a tu servicio mediante el alias o el identificador del recurso. Si usa el alias, la aprobación es manual, así que la conexión empieza como Pendiente.
[600ms]
[reassuring] Si la suscripción del socio está en tu lista de aprobación automática, se aprueba al instante. Solo las conexiones aprobadas pueden enviar tráfico.

## Step 11 · Which one for which request?

[curious] Seis escenarios, dos herramientas. Mira cómo cada uno cae donde le corresponde.
[600ms]
[confident] Si es el personal que entra a tus apps privadas según quién es, eso es Private Access.
[600ms]
[proud] Si se trata de publicar tu propio servicio hacia el punto final privado de otra persona, eso es un servicio de Private Link.

## Step 12 · Recap: identity in, private endpoint out

[calm] Private Access lleva al personal a una sola app privada, según su identidad, sin ninguna VPN de por medio.
[600ms]
[confident] Un servicio de Private Link permite que un socio llegue a tu servicio desde su propio punto final privado.
[600ms]
[proud] Entre los dos cubren dos puntos de la guía de estudio de S C 500, y ya sabes qué herramienta resuelve cada solicitud.
