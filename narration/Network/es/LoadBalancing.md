# Load balancing — narración (es)

## Step 1 · One name, many servers

[calm] Los usuarios escriben una sola dirección. Detrás de ella hay muchas instancias: en una región, o en varias.
[500ms]
[confident] Algo tiene que elegir cuál responde, y dejar de mandar a nadie a una instancia que está caída.
[400ms]
[curious] Y Azure no tiene un balanceador de carga. Tiene cuatro. Elegir el que no toca no suele ser fatal, pero te cuesta latencia, o funcionalidades, o un único punto de fallo en una sola región.

## Step 2 · Two questions decide it

[confident] Microsoft clasifica estos servicios exactamente en dos ejes.
[500ms]
[calm] ¿El tráfico es global o regional? ¿Y es HTTP, o es cualquier protocolo?
[400ms]
[helpful] Respóndelas en ese orden. Primero el alcance: un servicio global por delante de uno regional es un diseño normal y sano. Un servicio regional que finge ser global hace pasar a todos los usuarios por una sola región.

## Step 3 · Four services, four quadrants

[calm] Junta los dos ejes y cada servicio cae en su propio cuadrante.
[500ms]
[confident] Esta cuadrícula es el mapa. Los siguientes cuatro pasos la recorren, casilla por casilla.
[400ms]
[helpful] Dos matices honestos que la cuadrícula simplifica: Azure Load Balancer también tiene un front-end entre regiones, y Application Gateway hace de proxy para TCP y TLS además de HTTP. La cuadrícula muestra dónde encaja mejor cada uno.

## Step 4 · Azure Load Balancer

[confident] Azure Load Balancer es un servicio de capa cuatro para todo el tráfico TCP y UDP.
[500ms]
[calm] Está pensado para un rendimiento muy alto y una latencia ultrabaja, y deja pasar los paquetes en lugar de terminarlos.
[400ms]
[helpful] Ese es el detalle clave: la conexión del cliente aterriza en el propio servidor de back-end. Es lo que mantiene la latencia tan baja, y es también la razón por la que no puede leer una ruta de URL.

## Step 5 · Contoso, balanced at Layer 4

[calm] Aquí lo tienes en una arquitectura real.
[500ms]
[confident] Un Load Balancer público recoge el tráfico de internet, y dos internos se sitúan delante de las capas que hay detrás. Cada salto aquí es TCP: nada en esta imagen lee una URL.
[400ms]
[helpful] Cuéntalos: tres balanceadores de carga, no uno. Solo el primero tiene un front-end público. Los dos internos tienen IP privadas, así que nada de lo que hay detrás de la capa web es accesible desde internet.

## Step 6 · Application Gateway

[confident] Application Gateway es un proxy inverso regional.
[500ms]
[calm] Termina la conexión, lee la petición HTTP y decide a dónde va: por ruta de URL, o por nombre de host.
[400ms]
[helpful] Como termina TLS, puede hacer lo que un balanceador de capa cuatro no puede: inspeccionar la petición, pasarle un WAF, reescribir cabeceras y enviar rutas distintas a grupos distintos.

## Step 7 · One hostname, three back-end pools

[calm] Un solo nombre de host resuelve a un único Application Gateway.
[500ms]
[confident] Termina TLS, pasa el WAF sobre la petición, y luego lee la ruta y elige un backend pool diferente para cada parte del sitio.
[400ms]
[helpful] Esta es la jugada que un balanceador de capa cuatro no puede hacer. Barra api y barra images llegan por la misma conexión a la misma dirección: solo algo que lea la petición HTTP puede separarlas.

## Step 8 · Traffic Manager

[confident] Traffic Manager es un balanceador de tráfico basado en DNS.
[500ms]
[calm] Nunca toca tus paquetes. Responde a la consulta de nombre con el punto de conexión que el cliente debería usar, y luego se aparta.
[400ms]
[helpful] Ese diseño es a la vez su fuerza y su límite. Funciona cualquier protocolo, porque solo responde DNS. Pero la conmutación por error depende de la caché de DNS y del TTL, así que no puede reaccionar tan rápido como Front Door.

## Step 9 · One global profile, many regions

[calm] Contoso ejecuta la misma aplicación en varias regiones.
[500ms]
[confident] Traffic Manager es global. Se sitúa fuera de todas las regiones, es el dueño del nombre, y responde a cada consulta con la región que debería atender a ese usuario.
[400ms]
[helpful] Sigue los números. Los pasos uno y dos son DNS, dibujados con línea discontinua porque no se mueve tráfico de aplicación. El paso tres es la conexión real, y va directa a la región. Traffic Manager nunca está en la ruta de datos.

## Step 10 · Azure Front Door

[confident] Front Door es una red de entrega de aplicaciones.
[500ms]
[calm] Balanceo de carga global de capa siete, más aceleración del sitio, servido desde el perímetro de Microsoft, cerca del usuario.
[400ms]
[helpful] A diferencia de Traffic Manager, transporta la petición, así que puede conmutar por error en segundos en lugar de esperar al DNS, y puede cachear. Piénsalo como la fachada de toda la aplicación, en todo el mundo.

## Step 11 · One edge in front of the whole world

[calm] Cada usuario, esté donde esté, aterriza en la ubicación perimetral de Microsoft más cercana.
[500ms]
[confident] Front Door inspecciona la petición, responde desde la caché cuando puede, y si no la reenvía al origen más sano.
[400ms]
[helpful] Compáralo con el diagrama de Traffic Manager. Aquí el tráfico sí pasa por el servicio, y por eso mismo puede cachear, ejecutar un WAF y llevar a un usuario a otra región en segundos, en lugar de esperar a que caduque un registro DNS.

## Step 12 · They stack, they do not compete

[confident] La mayoría de las arquitecturas reales usan más de uno de estos.
[500ms]
[calm] Cada capa hace el trabajo que la de debajo no puede: alcance global, luego enrutamiento regional de capa siete, y luego el reparto puro entre máquinas.
[400ms]
[helpful] Una sola capa rara vez necesita los cuatro. Pero una aplicación pública seria acaba a menudo con Front Door por delante de Application Gateway, y Load Balancer por detrás.

## Step 13 · Scope first, then protocol

[confident] Así que, la idea para llevarte.
[400ms]
[calm] Pregunta dónde hay que balancear el tráfico, y luego hasta qué profundidad tiene que mirar el servicio. Esas dos respuestas eligen el servicio; todo lo demás son detalles.
[600ms]
[encouraging] Cuando dudes, di el requisito en voz alta. "Global, web, necesita caché" es Front Door. "Regional, SQL, la latencia más baja" es Load Balancer. La frase te nombra el servicio.
