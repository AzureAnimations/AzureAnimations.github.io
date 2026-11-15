# DNS & Private Link — narración (es)

## Step 1 · A name, and who is allowed to use it

[calm] Tu aplicación web necesita una cuenta de almacenamiento.
[400ms]
[curious] Hoy pregunta por el nombre público, recibe una dirección pública, y el tráfico sale a internet y vuelve — para dos recursos que están en la misma región.
[500ms]
[confident] Hay tres piezas que resuelven esto, y constantemente se confunden entre sí. Azure DNS publica nombres al mundo. Private DNS responde nombres dentro de una VNet. Y Private Link es lo que le da al recurso una dirección privada con la que responder.

## Step 2 · Azure DNS public zones

[calm] Una zona pública es el hospedaje autoritativo de un nombre de dominio que te pertenece.
[500ms]
[confident] Apuntas los servidores de nombres de tu registrador hacia Azure y, a partir de ahí, Azure responde las preguntas que el mundo hace sobre tu dominio.
[400ms]
[helpful] Los registros que hay aquí están hechos para verse. Cualquiera, desde cualquier sitio, puede consultarlos: ese es exactamente su trabajo. Una zona pública no es en ningún sentido un límite de seguridad.

## Step 3 · Azure Private DNS zones

[calm] Una zona privada se parece muchísimo, con una diferencia decisiva.
[500ms]
[confident] Sus registros no se pueden resolver desde internet. Solo responden desde las redes virtuales que enlazas explícitamente a la zona.
[400ms]
[helpful] Ese enlace es todo el modelo de acceso. Una red virtual sin enlazar no ve la zona en absoluto: no hay visibilidad parcial, no existe el "casi enlazada".

## Step 4 · Private endpoint

[confident] Un private endpoint es una interfaz de red, en tu subred, que lleva una dirección IP privada y que apunta a una instancia concreta de un servicio PaaS.
[500ms]
[calm] Azure además escribe en una private DNS zone el registro que asocia el nombre de ese servicio con esa dirección — por eso los dos se despliegan siempre juntos.
[400ms]
[helpful] Esta es la parte realmente nueva. Storage, SQL y los demás viven normalmente detrás de endpoints públicos. Un private endpoint mete a uno de ellos dentro de tu espacio de direcciones — y te deja apagar el acceso público del todo.

## Step 5 · What the lookup actually does

[calm] Sigue la resolución del nombre, porque aquí es donde encaja todo.
[500ms]
[confident] Tu aplicación sigue usando el mismo nombre público de siempre. Azure redirige ese nombre, sin hacer ruido, hacia una zona privatelink, y la zona privada responde con la IP privada.
[400ms]
[helpful] Por eso las cadenas de conexión nunca cambian. La aplicación hace la misma pregunta: lo único distinto es la respuesta.

## Step 6 · The link is the whole mechanism

[curious] Una zona privada con registros perfectos dentro no hace absolutamente nada hasta que hay una red virtual enlazada a ella.
[500ms]
[calm] Y si esa red usa servidores DNS propios, el enlace por sí solo tampoco basta: necesitas un reenviador.
[400ms]
[confident] Y una distinción más que conviene tener presente: resolver un nombre no es lo mismo que tener permiso para entrar. La cadena privatelink es resoluble desde cualquier sitio, y es a propósito. Que la consulta funcione demuestra que el recurso existe, no que puedas llegar a él.

## Step 7 · Same shape, opposite purpose

[calm] Zona pública, zona privada. Las dos son zonas DNS con registros dentro.
[500ms]
[confident] Todo lo que de verdad importa tiene que ver con quién tiene permiso para preguntar.
[400ms]
[helpful] Y puedes hospedar el mismo nombre de dominio como las dos cosas — split-horizon — respondiendo de forma distinta según de dónde venga la pregunta.

## Step 8 · It still resolves to a public IP

[concerned] Ahora el fallo clásico, y es el problema más común de Private Link con diferencia.
[500ms]
[calm] Casi siempre es DNS y no el endpoint en sí, y con cuatro causas cubres prácticamente todos los casos.
[400ms]
[helpful] El síntoma es muy reconocible: el portal muestra el private endpoint aprobado, pero tu aplicación sigue recibiendo una dirección pública — o un cuatrocientos tres de un servicio al que ya le habías deshabilitado el acceso público.

## Step 9 · Publish, resolve, or reach

[confident] Así que la idea con la que quedarte. Cada pieza responde a una pregunta distinta.
[400ms]
[calm] Di en voz alta qué pregunta estás haciendo y el servicio correcto se elige solo.
[600ms]
[encouraging] Y mantén estas dos cosas separadas, porque casi todo incidente confuso de Private Link viene de mezclarlas. El DNS decide qué dirección recibes. El firewall del servicio decide si entras.
