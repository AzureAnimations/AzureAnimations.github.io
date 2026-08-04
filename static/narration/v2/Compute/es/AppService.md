# Guion de narración — Azure PaaS Compute · 02 · App Service

**Source animation:** `static/v2/Compute/AppService.html`

---

## Step 1 · intro

[confident] Ahora, la estrella del espectáculo: la App Service. Esta es la aplicación real — la tienda de Contoso — ejecutándose sobre el Plan que acabas de conocer.
[600ms]
[reassuring] Y está totalmente administrada. Azure se encarga del sistema operativo, el runtime y los parches, para que tú te concentres en tu código.
[700ms]
[calm] Constrúyela en casi cualquier lenguaje — .NET, Node, Python, Java, PHP — o trae tu propio contenedor.

## Step 2 · deploy

[confident] Rara vez subes archivos a mano. En su lugar, conectas un origen — Git, GitHub, Azure DevOps o Bitbucket.
[600ms]
[calm] A partir de ahí, cada push a tu rama compila, prueba e implementa tu app automáticamente.
[700ms]
[encouraging] Confirma tu cambio, y la canalización lo lleva el resto del camino hasta producción.

## Step 3 · slotsIntro

[confident] Una sola App Service puede ejecutar más de una copia viva de sí misma, llamadas ranuras de implementación.
[600ms]
[calm] Producción sigue atendiendo el sitio actual de Contoso. Cuando llega el momento de modernizar, agregas una ranura de Staging para el rediseño — con su propia dirección y configuración — sin tocar Producción.
[700ms]
[reassuring] La misma app, dos versiones en ejecución, ambas a salvo dentro de un solo recurso.

## Step 4 · slots

[confident] Aquí es donde brillan las ranuras. Llega un visitante, y App Service puede repartir el tráfico real según un porcentaje que tú eliges.
[600ms]
[calm] Envía, digamos, el noventa por ciento al sitio en vivo de confianza, y solo el diez por ciento al nuevo rediseño en staging.
[700ms]
[impressed] Observa cómo se comporta, luego sube la nueva versión — o vuelve a cero — sin volver a implementar. Cuando estés conforme, un solo intercambio la pone en vivo, al instante y sin tiempo de inactividad.

## Step 5 · auth

[confident] ¿Necesitas inicio de sesión? No tienes que escribir nada de código de autenticación.
[600ms]
[calm] Activa un proveedor en el portal — Microsoft, Google, Facebook, Apple o cualquier proveedor OpenID Connect.
[700ms]
[reassuring] App Service se coloca frente a tu app y verifica el token antes de que una solicitud llegue a tu código. Es configuración, no código.

## Step 6 · security

[confident] De forma predeterminada, tu app responde en una dirección de azure-websites. Para usar tu propia marca, agrega un dominio personalizado.
[600ms]
[calm] Apunta tu dominio a la app con un registro DNS, y Azure emite — y renueva automáticamente — un certificado T-L-S administrado y gratuito.
[700ms]
[reassuring] HTTPS se aplica de forma predeterminada, así que los visitantes en tu dominio siempre obtienen una conexión cifrada.

## Step 7 · traffic

[confident] ¿Listo para volverte global? Ejecuta tu App Service en más de una región.
[600ms]
[calm] Luego deja que Traffic Manager dirija a cada visitante a la región saludable más cercana.
[700ms]
[reassuring] Y si una región deja de estar saludable, el tráfico la rodea automáticamente — sin cambiar el código.

## Step 8 · recap

[proud] Júntalo todo: un Plan para el cómputo, una App Service para tu código, implementación continua, ranuras, autenticación integrada, T-L-S gratis y enrutamiento global.
[600ms]
[encouraging] Eso es una app web lista para producción. Pruébalo tú mismo — crea un Plan, luego una App Service encima, y ya estás en vivo.
