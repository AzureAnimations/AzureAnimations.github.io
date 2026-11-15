# Azure Networking Journey — narración del recorrido del hub (es)

Se empareja 1:1 con los pasos `TOUR` de `static/v2/Network/index.html`.
El paso 1 suena en la pantalla de introducción; los pasos 2–11 iluminan las paradas 01–10 del tablero; el paso 12 es el resumen.
Deliberadamente CORTO — unos 12–16 s por clip, para que el foco siga avanzando.

## Step 1 · Welcome

[confident] Te damos la bienvenida al recorrido por las redes de Azure.
[300ms]
[calm] Esta es la red con la que acaba casi toda carga de trabajo seria en Azure. Diez animaciones cortas la desmontan, en el orden en que realmente la construirías.

## Step 2 · Virtual Network

[confident] Parada uno. La red virtual.
[300ms]
[calm] Tu propia porción privada de Azure, dividida en subredes. Las subredes son a donde enrutas el tráfico, y donde aplicas la seguridad.

## Step 3 · NSG and ASG

[confident] Parada dos. Grupos de seguridad de red y de aplicación.
[300ms]
[calm] El NSG protege la subred. El ASG nombra la carga de trabajo, así escribes «permitir que la capa de aplicación llegue a la base de datos» en lugar de una regla llena de direcciones IP.

## Step 4 · VNet peering and Bastion

[confident] Parada tres. Emparejamiento, y Bastion.
[300ms]
[calm] El emparejamiento une redes virtuales de forma privada por la red troncal de Azure. Bastion te da RDP y SSH desde el portal, así ninguna máquina virtual necesita IP pública.

## Step 5 · DNS and Private Link

[confident] Parada cuatro. DNS, y Private Link.
[300ms]
[calm] Primero resuelves el nombre, luego lo alcanzas en privado. Un punto de conexión privado trae un servicio de plataforma a tu propia subred como una dirección privada normal.

## Step 6 · Load balancing

[confident] Parada cinco. El balanceo de carga.
[300ms]
[calm] Front Door, Traffic Manager, Application Gateway, Load Balancer. Global o regional, HTTP o no: responde esas dos preguntas y la elección se hace sola.

## Step 7 · WAF and Azure Firewall

[confident] Parada seis. El firewall de aplicaciones web, y Azure Firewall.
[300ms]
[calm] El WAF inspecciona la petición web. Azure Firewall controla todo lo demás, y solo protege aquello que tus tablas de rutas le envían de verdad.

## Step 8 · VPN Gateway and ExpressRoute

[confident] Parada siete. VPN Gateway, y ExpressRoute.
[300ms]
[calm] Dos formas de entrar desde tu propio centro de datos. Un túnel cifrado por internet, o un circuito privado que nunca la toca. Muchas organizaciones usan las dos.

## Step 9 · Azure Virtual WAN

[confident] Parada ocho. Azure Virtual WAN.
[300ms]
[calm] La alternativa gestionada a operar el hub tú mismo, con tránsito global incluido. Sucursales, usuarios de VPN, circuitos y radios se encuentran en un solo sitio.

## Step 10 · Network monitoring

[confident] Parada nueve. La supervisión.
[300ms]
[calm] Network Watcher te dice por qué se descartó un paquete ahora mismo. Azure Monitor y los registros de flujo te dicen qué pasó el martes pasado.

## Step 11 · Naming convention

[confident] Parada diez. La convención de nombres.
[300ms]
[calm] La parada menos técnica, y la que decide si las otras nueve siguen siendo mantenibles. Acuérdala pronto: renombrar un recurso suele significar recrearlo.

## Step 12 · The whole picture

[confident] Ese es el recorrido completo.
[300ms]
[calm] Constrúyela, protégela, conéctala, opérala. Elige cualquier parada del tablero para profundizar, o empieza por la número uno, la red virtual.
