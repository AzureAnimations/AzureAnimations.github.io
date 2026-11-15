# Guion de narración — Azure Storage · Nivel avanzado · Red y Private Link

**Source animation:** `static/v2/Storage/StorageNetworkSecurity.html`

---

## Step 1 · goal

[confident] De forma predeterminada, tu cuenta de almacenamiento tiene un punto de conexión público — accesible desde cualquier lugar de internet.
[600ms]
[calm] Nuestro objetivo es sacarla de la internet pública, para que solo las redes en las que confías puedan alcanzarla.
[700ms]
[serious] Y una idea clave antes de empezar: las reglas de red y la identidad son capas independientes. Una controla desde dónde llega una solicitud; la otra, quién tiene permiso para actuar.

## Step 2 · firewall

[confident] La primera capa es el firewall de almacenamiento. Al activarlo, la acción predeterminada pasa a denegar.
[600ms]
[calm] Ahora solo los rangos de I-P y las redes virtuales que permitas pueden alcanzar la cuenta — todo lo demás se rechaza.
[700ms]
[reassuring] Añade una excepción de servicios de confianza para que los servicios propios de Azure, como copia de seguridad y supervisión, sigan pasando.

## Step 3 · pe

[confident] A continuación, añade un punto de conexión privado. A través de Azure Private Link, coloca una I-P privada de tu propia subred delante de la cuenta.
[600ms]
[calm] El tráfico hacia storage ahora viaja por tu red privada en lugar de por la internet pública.
[700ms]
[serious] Un detalle que conviene saber — crear un punto de conexión privado no apaga por sí solo el punto de conexión público. Eso es un paso aparte.

## Step 4 · dns

[confident] Para que esa I-P privada se use realmente, el nombre tiene que resolverse hacia ella. De eso se encarga una zona de DNS privada.
[600ms]
[calm] La zona private-link apunta el nombre de host de la cuenta a la dirección privada, así los clientes dentro de tu red la alcanzan de forma privada y automática.
[700ms]
[reassuring] Desde fuera de la red virtual, el mismo nombre sigue resolviéndose públicamente — que es justo por lo que importa el siguiente paso.

## Step 5 · lockdown

[confident] Ahora cierra la puerta principal. Cambia el acceso a la red pública a deshabilitado.
[600ms]
[calm] A partir de aquí, la ruta privada es la única entrada.
[700ms]
[serious] Recuerda que la resolución de nombres y el control de acceso son independientes — deshabilitar el acceso público es lo que de verdad lo blinda.

## Step 6 · connect

[confident] Veámoslo funcionar, de extremo a extremo. Tu app, ejecutándose en la subred, resuelve la URL de storage a la I-P privada.
[600ms]
[calm] Se conecta directamente por tu red privada — sin ningún salto por la internet pública.
[700ms]
[encouraging] ¿Quieres un control aún más estricto entre muchos recursos? Añade un perímetro de seguridad de red.

## Step 7 · recap

[proud] Ahí está el panorama completo: firewall con denegación predeterminada, luego un punto de conexión privado, luego DNS privado, y luego el acceso público apagado.
[700ms]
[encouraging] Prefiere puntos de conexión privados con un firewall de denegación predeterminada — es el patrón que mantiene el almacenamiento verdaderamente privado.

## Step 8 · spec

[confident] Un nivel más a fondo. Hay tres formas de controlar la red de almacenamiento.
[600ms]
[calm] El firewall con reglas de I-P y de red virtual; los puntos de conexión de servicio, que mantienen la dirección pública pero restringen quién puede usarla; y los puntos de conexión privados, que te dan una I-P privada sin ninguna exposición a internet.
[700ms]
[reassuring] Para un aislamiento real, gana el punto de conexión privado — una dirección privada, accesible solo desde tu red.
