# Peering & Bastion — narración (es)

## Step 1 · Two problems, one afternoon

[calm] Dos problemas hoy, y resulta que comparten un mismo atajo.
[400ms]
[confident] Tu aplicación está en una red virtual, tu base de datos en otra, y no se ven entre sí. Y cuando necesitas abrir una sesión en una VM, la solución más rápida es también la peor: una IP pública.
[500ms]
[helpful] Los dos problemas tienen la misma respuesta tentadora. Y los dos tienen otra mejor, que se configura en unos diez minutos.

## Step 2 · Peering joins two networks privately

[confident] El peering conecta dos redes virtuales para que sus recursos se hablen como si estuvieran en una sola red.
[500ms]
[calm] El tráfico se queda en la red troncal de Microsoft. Sin internet público, sin puerta de enlace y sin cifrado que tengas que configurar tú.
[400ms]
[helpful] La latencia entre VNets emparejadas en la misma región es la misma que dentro de una sola VNet, y el peering en sí no impone ningún límite de ancho de banda. El límite lo pone el tamaño de la VM.

## Step 3 · What peering asks of you

[calm] La lista de requisitos es corta y, sinceramente, solo el primero suele darte problemas.
[500ms]
[confident] Los espacios de direcciones no pueden solaparse. Una planificación de direcciones mal hecha es la razón principal por la que muchos peerings no se pueden crear más adelante.
[400ms]
[helpful] Puedes cambiar el tamaño del espacio de direcciones de una VNet emparejada sin tiempo de inactividad, pero luego hay que volver a sincronizar los dos peerings. Planificar rangos que no se solapen desde el principio sigue saliendo mucho más barato.

## Step 4 · Peering is not transitive

[curious] Aquí está la trampa. Emparejas A con B, y luego B con C. ¿Puede A llegar a C?
[500ms]
[confident] No. Cada pareja que necesite hablarse necesita su propio peering, o un router en medio que pongas ahí a propósito.
[400ms]
[helpful] Por eso exactamente los diseños de hub and spoke colocan Azure Firewall o un dispositivo virtual de red en el hub. Le dan al tráfico entre spokes algo por donde enrutarse, porque el hub no lo reenvía por sí solo.

## Step 5 · Now, how do you get in?

[calm] Así que la red ya es privada. De eso se trataba.
[400ms]
[curious] Pero alguien tiene que abrir una sesión en una VM, y las dos respuestas tradicionales hacen que todo el entorno sea menos seguro.
[500ms]
[concerned] Cada IP pública que añades para administrar es una puerta permanente. Y un jump box es un servidor más que ahora tienes que parchear, supervisar y defender.

## Step 6 · Azure Bastion is the managed front door

[confident] Azure Bastion es un servicio totalmente administrado que abre sesiones RDP y SSH a tus VMs sobre TLS, en el puerto cuatrocientos cuarenta y tres.
[500ms]
[calm] Te conectas desde el portal de Azure o desde un cliente nativo. Tus VMs conservan sus IPs privadas y no cambia nada más en ellas.
[400ms]
[helpful] La conexión se hace a la IP privada de la VM. Por eso la VM no necesita IP pública, ni agente, ni software cliente adicional.

## Step 7 · Four SKUs, four different answers

[calm] Hay cuatro niveles, y responden a preguntas realmente distintas.
[500ms]
[confident] Developer es gratuito y no necesita ninguna subred, pero atiende una VM cada vez y no puede cruzar un peering. Todo lo que está por encima va de escala y de funcionalidades.
[400ms]
[helpful] Dos cosas que conviene saber antes de elegir. No puedes bajar de SKU: hay que eliminar y volver a crear. Y solo Standard y Premium admiten el cliente nativo de SSH o RDP.

## Step 8 · One bastion, every peered network

[confident] Ahora mira cómo se juntan las dos ideas.
[400ms]
[calm] Pon Bastion en el hub y empareja los spokes con él. Desde ese único host puedes abrir una sesión en cualquier VM de cualquier red virtual emparejada, y ninguna necesita una IP pública.
[500ms]
[helpful] El acceso lo siguen gobernando las asignaciones de roles, no solo la conectividad de red. El usuario necesita el rol Lector en la VM, en su NIC, en el recurso de Bastion y en la red de destino.

## Step 9 · Private reach, and a door you did not build

[confident] Así que, la idea con la que quedarte.
[400ms]
[calm] El peering da a tus redes un camino privado entre ellas. Bastion te da un camino privado hacia dentro.
[600ms]
[encouraging] Y si un diseño todavía necesita una IP pública en una VM solo para administrarla, eso es lo primero que merece la pena revisar.
