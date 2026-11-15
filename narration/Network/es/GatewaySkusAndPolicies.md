# Narrator Script — Network · VPN gateway SKUs and policies

**Source animation:** [GatewaySkusAndPolicies.html](../../../journeys/Network/GatewaySkusAndPolicies.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/vpn-gateway/vpn-gateway-about-vpn-gateway-settings>
- <https://learn.microsoft.com/azure/vpn-gateway/about-gateway-skus>
- <https://learn.microsoft.com/azure/vpn-gateway/design>
- <https://learn.microsoft.com/azure/vpn-gateway/point-to-site-about>

---

## Step 1 · Which gateway, which settings?

[calm] Contoso Retail tiene una sucursal y un equipo de trabajadores remotos, y los dos necesitan llegar a Azure.
[600ms]
[curious] La sucursal se conecta con un túnel de sitio a sitio desde su dispositivo VPN. Los trabajadores remotos usan punto a sitio, con un túnel de cliente y un inicio de sesión.
[600ms]
[confident] Cuatro decisiones sobre un gateway de VPN determinan qué tan bien sale todo. Las vamos a tomar una por una.

## Step 2 · Route-based or policy-based?

[calm] El tipo de VPN define cómo se asocia el tráfico a un túnel y qué funciones existen. Defínelo antes de elegir un SKU.
[600ms]
[confident] El tipo basado en rutas es el que habilita punto a sitio, BGP y activo-activo.
[600ms]
[serious] El tipo basado en políticas solo existe en el SKU Basic, con un solo túnel y sin punto a sitio. No se puede convertir: lo eliminas y creas un gateway basado en rutas.

## Step 3 · What a bigger SKU buys you

[curious] Un nivel superior trae más CPU y más ancho de banda. Eso sube cuatro límites: túneles de sitio a sitio, conexiones de punto a sitio, la clase de rendimiento y las máquinas virtuales detrás del gateway.
[600ms]
[serious] Todos los niveles por encima de Basic agregan además funciones de producción que Basic no tiene, como BGP, activo-activo, redundancia de zona, RADIUS, políticas personalizadas e IPv6.
[600ms]
[reassuring] Las cifras de rendimiento son referencias, no garantías, así que consulta la tabla vigente cuando dimensiones un gateway real.

## Step 4 · Generation and the AZ suffix

[calm] Un nombre de SKU se lee en dos partes: la generación y si termina en AZ.
[600ms]
[confident] La generación dos da más rendimiento en el mismo nivel y suma los niveles más grandes. AZ significa redundante por zona, en las regiones que tienen zonas de disponibilidad.
[600ms]
[serious] Los SKU AZ, redundantes por zona, son los que se crean hoy. Basic no se retira, pero está pensado para desarrollo y pruebas.

## Step 5 · Active-standby or active-active?

[calm] Todo gateway de VPN tiene dos instancias. Por defecto una trabaja y la otra espera: eso es activo-en espera.
[600ms]
[confident] Activo-activo pone a trabajar las dos, cada una con su propia IP pública. Requiere un gateway basado en rutas que no sea Basic, además de IP públicas estáticas Standard.
[600ms]
[serious] Cuando la instancia en espera toma el control, hay una breve interrupción, y los usuarios de punto a sitio tienen que volver a conectarse.

## Step 6 · Dual redundancy and BGP failover

[curious] Si combinas un gateway activo-activo con dos dispositivos locales, tienes cuatro túneles, todos activos.
[600ms]
[impressed] BGP retira las rutas de un túnel caído, así que el tráfico pasa solo a los demás.
[600ms]
[serious] Necesitas dos gateways de red local, dos conexiones y BGP, para que ambas conexiones puedan llevar los mismos prefijos. Verifica que los dos dispositivos admitan BGP.

## Step 7 · How the tunnel is built: IKE, then IPsec

[calm] Los dos dispositivos se ponen de acuerdo en sus reglas en dos fases.
[600ms]
[curious] En la fase uno, IKE, acuerdan cómo comunicarse: cifrado, integridad y un grupo DH. En la fase dos, IPsec, acuerdan cómo proteger los datos, con un grupo PFS.
[600ms]
[reassuring] Si no pides nada especial, Azure ofrece un conjunto de propuestas predeterminado, elegido para funcionar con la mayoría de los dispositivos.

## Step 8 · When the partner device dictates

[calm] A veces una regla de cumplimiento o un firewall antiguo solo acepta una combinación.
[600ms]
[confident] Una política personalizada de IPsec e IKE en la conexión indica exactamente cuál. Es una política por conexión, y no está disponible en Basic.
[600ms]
[reflective] Los valores que se muestran son un ejemplo, no una recomendación. Los selectores basados en políticas también permiten que un gateway basado en rutas se comunique con firewalls basados en políticas, sin tránsito.

## Step 9 · Point-to-site tunnel types

[calm] Un trabajador remoto inicia el túnel desde una laptop. El tipo de túnel decide qué dispositivos pueden conectarse y qué firewalls lo dejan pasar.
[600ms]
[confident] OpenVPN se basa en TLS por el puerto cuatro cuatro tres, así que atraviesa casi todos los firewalls y admite la mayor variedad de clientes. IKEv2 se basa en estándares, pero algunas redes bloquean sus puertos UDP.
[600ms]
[serious] SSTP es solo para Windows y se está retirando. No se puede habilitar a partir del 31 de agosto de 2026, y deja de funcionar el 31 de marzo de 2027.

## Step 10 · Who gets in: three sign-in methods

[calm] Antes de aceptar un túnel, el gateway tiene que autenticar al usuario. Elige el método que coincida con el sistema de identidad que ya usas.
[600ms]
[confident] Microsoft Entra ID incluye Acceso Condicional y MFA, pero solo funciona con OpenVPN y el Azure VPN Client. RADIUS usa credenciales de AD, agrega MFA con NPS y no está disponible en Basic.
[600ms]
[reassuring] Puedes habilitar varios métodos a la vez, siempre que cada cliente admita al menos uno.

## Step 11 · ExpressRoute gateway, with VPN beside it

[calm] ExpressRoute tiene su propio tipo de gateway y sus propios SKU: ErGw1Az, ErGw2Az, ErGw3Az y ErGwScale. Un SKU más alto significa más CPU y más ancho de banda.
[600ms]
[curious] Un gateway de VPN de sitio a sitio al lado puede servir de respaldo si el circuito falla.
[600ms]
[serious] Para eso necesitas un gateway de VPN basado en rutas que no sea Basic, y una subred de gateway de barra 27 o más grande. Y prefiere las rutas de ExpressRoute en el entorno local.

## Step 12 · Try your own requirements

[curious] Ahora te toca a ti. Define los requisitos a la izquierda: sucursales, clase de rendimiento, resiliencia, dispositivo de la sucursal y trabajadores remotos.
[600ms]
[impressed] Los cuatro ajustes de la derecha se iluminan con lo que debes elegir y por qué.
[600ms]
[reassuring] Es un modelo para enseñar, basado en las guías de Learn, no una herramienta de dimensionamiento. Confirma los límites y precios en las páginas vigentes antes de implementar.

## Step 13 · One gateway, four decisions

[calm] Este es el resumen: basado en rutas y redundante por zona, activo-activo con BGP donde importa.
[600ms]
[confident] Agrega una política personalizada solo cuando un socio lo exija, y elige un método de inicio de sesión que coincida con tu sistema de identidad.
[600ms]
[proud] Tanto A Z 700 como A Z 305 esperan que elijas estos ajustes a partir de los requisitos. Las guías de estudio de Learn son la siguiente parada.
