# Virtual WAN — narración (es)

## Step 1 · The hub you built by hand

[calm] Un hub que gestionas tú mismo funciona de maravilla con tres radios.
[500ms]
[concerned] Con treinta radios, dos regiones y cuarenta sucursales, mantener los emparejamientos, las tablas de rutas y las puertas de enlace se convierte en un trabajo a tiempo completo.
[400ms]
[confident] Aquí no hay nada mal: hub-and-spoke es la forma correcta. La pregunta es quién opera el hub. Virtual WAN es la propuesta de Microsoft para encargarse de esa parte por ti.

## Step 2 · Azure Virtual WAN

[confident] Azure Virtual WAN es un servicio de red que reúne conectividad, enrutamiento y seguridad en un único hub gestionado por Microsoft.
[500ms]
[calm] Tú le conectas cosas. Microsoft se hace cargo de lo que ocurre dentro.
[400ms]
[helpful] La forma que obtienes sigue siendo hub-and-spoke. Lo que cambia es que Microsoft gestiona los emparejamientos y el enrutamiento dentro del hub, incluidas las conexiones entre hubs de regiones distintas.

## Step 3 · What may live in the hub

[calm] Un virtual hub es una red virtual que Microsoft crea y controla.
[500ms]
[confident] Y ese es todo el intercambio. Te llevas el enrutamiento gratis, y renuncias a poder meter dentro lo que quieras.
[400ms]
[concerned] Esto pilla a muchos equipos por sorpresa. No puedes colocar una VM, un controlador de dominio ni Azure Bastion dentro de un virtual hub. Eso va en un radio: lo que Microsoft llama el patrón de extensión del virtual hub.

## Step 4 · One network, two regions, every branch

[calm] Contoso conecta las VPN de sus sucursales, un circuito de ExpressRoute y sus usuarios remotos a hubs en dos regiones.
[500ms]
[confident] Microsoft une esos hubs entre sí, y cada radio que hay detrás puede alcanzar a todos los demás.
[400ms]
[helpful] La línea entre los dos hubs es la que nunca tienes que construir. Microsoft la crea y la mantiene, y es lo que convierte dos hubs regionales en una única red de tránsito global.

## Step 5 · Four paths you get for nothing

[confident] Virtual WAN Standard es una malla completa.
[500ms]
[calm] En cuanto dos elementos están conectados a la misma Virtual WAN, pueden alcanzarse entre sí, en la misma región o entre regiones.
[400ms]
[helpful] Compáralo con el emparejamiento normal, que no es transitivo. Dos radios emparejados con el mismo hub siguen sin poder hablar sin una tabla de rutas que apunte a algo intermedio. En Virtual WAN, ese camino ya existe.

## Step 6 · Secured virtual hub

[confident] Convierte un hub en un secured virtual hub y Firewall Manager despliega Azure Firewall dentro de él.
[500ms]
[calm] A partir de ahí, cada radio y cada sucursal conectada a ese hub queda inspeccionada por un único firewall compartido.
[400ms]
[helpful] Y aquí está la parte que conviene saber: un secured virtual hub trae enrutamiento integrado. No tienes que escribir rutas definidas por el usuario para forzar el tráfico a través de él, como harías en un hub construido por ti.

## Step 7 · Basic buys almost nothing

[calm] Virtual WAN se ofrece en dos SKU, y la diferencia entre ellas no es sutil.
[500ms]
[confident] Basic existe para un caso muy concreto. Casi cualquier diseño que recurra a Virtual WAN necesita Standard.
[400ms]
[helpful] Si quieres más de un hub, o ExpressRoute, o punto a sitio, o tránsito entre radios, eso es Standard. Basic te da VPN de sitio a sitio contra un único hub, y ahí se acaba.

## Step 8 · Managed hub, or one you own

[calm] Las dos opciones te dan hub-and-spoke.
[500ms]
[confident] La elección va sobre cuánto control necesitas dentro del hub, frente a cuánto de él quieres operar tú.
[400ms]
[helpful] La pregunta que de verdad decide no es la escala, sino si necesitas poner algo tuyo dentro del hub. Si es así, Virtual WAN es la respuesta equivocada, por muchos radios que tengas.

## Step 9 · The same shape, someone else's problem

[confident] Así que, en resumen.
[400ms]
[calm] Virtual WAN no inventa una topología. Toma el hub que ibas a construir de todos modos y le entrega su operación a Microsoft, con el tránsito y los enlaces entre regiones incluidos.
[600ms]
[encouraging] Decídelo con una sola pregunta. ¿Hay algo tuyo que tenga que vivir dentro del hub? Si no, quédate con el gestionado. Si sí, constrúyelo tú y conserva el control.
