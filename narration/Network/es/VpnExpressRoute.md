# VPN & ExpressRoute — narración (es)

## Step 1 · Two networks that cannot talk

[calm] Tu centro de datos está aquí. Tu red virtual de Azure está allí.
[400ms]
[confident] Las dos usan direcciones privadas, y lo único que hay entre ellas es la internet pública, en la que no quieres confiar sin más.
[500ms]
[helpful] Azure te da dos formas de cruzar, y en realidad no compiten entre sí. Una es cifrado sobre la internet que ya tienes. La otra es un circuito privado que hay que contratar.

## Step 2 · Site-to-site VPN

[confident] Una VPN gateway en Azure levanta un túnel IPsec hasta el dispositivo VPN de tu centro de datos.
[500ms]
[calm] La internet sigue transportando los paquetes. Solo que van cifrados durante todo el trayecto.
[400ms]
[helpful] Necesita tres cosas de tu lado: una IP pública, un dispositivo VPN compatible y rangos de direcciones que no se solapen con los de la VNet, o bien NAT en la gateway para resolver el solapamiento.

## Step 3 · Point-to-site VPN

[calm] Esa misma gateway también puede aceptar conexiones de máquinas individuales.
[500ms]
[confident] Una desarrolladora o un administrador instala un cliente, se autentica y aparece dentro de la red virtual.
[400ms]
[helpful] La diferencia con site-to-site está en lo que hay al otro extremo. Site-to-site une una red entera. Point-to-site deja entrar a una persona, en un dispositivo, desde cualquier sitio, sin ningún hardware de VPN.

## Step 4 · ExpressRoute

[confident] ExpressRoute es una conexión privada hacia Microsoft a través de un proveedor de conectividad.
[500ms]
[calm] No hay túnel, porque no hay internet pública en el camino de la que haya que protegerse.
[400ms]
[helpful] Esta es la frase que importa: con ExpressRoute, el tráfico nunca atraviesa la internet pública. Eso es lo que te da una latencia predecible, y lo que responde a la pregunta de cumplimiento normativo.

## Step 5 · Three edges make the circuit

[calm] Un circuito de ExpressRoute no es un solo cable.
[500ms]
[confident] Es una cadena de tres routers: el tuyo, el de tu proveedor y el de Microsoft, cada uno emparejado con el siguiente mediante BGP, hasta que tu red llega a la de Microsoft.
[400ms]
[helpful] Tu proveedor construye conexiones redundantes entre los tres. Azure anuncia los prefijos de tu VNet a tu router, tu router anuncia de vuelta las rutas locales, y ese intercambio en los dos sentidos es lo que hace que el tráfico fluya.

## Step 6 · One circuit, two peerings

[curious] Un circuito no llega automáticamente a todo.
[500ms]
[calm] Sobre él habilitas peerings, y cada peering te abre una parte distinta de Microsoft. El private peering llega a tus redes virtuales. El Microsoft peering llega a los servicios públicos.
[400ms]
[concerned] Un error habitual es dar por hecho que el circuito por sí solo te lleva a Microsoft trescientos sesenta y cinco. No es así: eso necesita Microsoft peering, y filtros de ruta para elegir qué prefijos de servicio quieres realmente.

## Step 7 · Five questions settle it

[calm] La propia comparativa de Microsoft se reduce a cinco consideraciones.
[500ms]
[confident] Lee hacia abajo la columna en la que tus respuestas vayan cayendo una y otra vez.
[400ms]
[helpful] Y fíjate en que solo una de las filas trata realmente de la red. Las otras cuatro hablan de dinero, de tiempo y de cumplimiento normativo, que es justo por lo que esta decisión casi nunca es solo del equipo de redes.

## Step 8 · Run both, on purpose

[confident] Estas dos opciones pueden terminar en la misma red virtual, y muchas veces deberían hacerlo.
[500ms]
[calm] ExpressRoute lleva el tráfico. La VPN queda por debajo, lista para tomar el relevo si el circuito se cae.
[400ms]
[helpful] Cuando los mismos prefijos se anuncian por ambos caminos, Azure prefiere ExpressRoute automáticamente. Tu lado tiene que corresponder, porque si no el tráfico sale por un camino y vuelve por el otro, y el enrutamiento asimétrico rompe la sesión.

## Step 9 · Encrypt the internet, or avoid it

[confident] Así que la idea para llevarte, y de verdad es toda la decisión.
[400ms]
[calm] Una VPN hace que la internet pública sea lo bastante segura como para usarla. ExpressRoute saca la internet pública del camino por completo.
[600ms]
[encouraging] Si tienes dudas, empieza con una VPN. Puede estar funcionando esta misma semana, y se convierte en el camino de respaldo el día en que por fin te entreguen el circuito. Así que el trabajo nunca se pierde.
