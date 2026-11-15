# Narrator Script — Compute · Run a Container on App Service: Settings and Secrets

**Source animation:** [AppServiceContainers.html](../../../journeys/Compute/AppServiceContainers.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/app-service/tutorial-custom-container>

---

## Step 1 · From a Registry Image to a Running Web App

[calm] Contoso empaquetó su API de pedidos como una imagen de contenedor, versión uno punto cuatro, y la subió a un Azure Container Registry.
[600ms]
[curious] Una aplicación web para contenedores no usa una pila de lenguaje integrada. En su lugar, ejecuta tu propia imagen.
[600ms]
[confident] Así que el camino es sencillo: App Service descarga la imagen del registro, la inicia y la sirve a tus usuarios.

## Step 2 · Create a Web App for Containers

[calm] Al crear la aplicación web, elige Contenedor como forma de publicar, en lugar de Código, y elige Linux para esta lección.
[600ms]
[confident] Luego apunta la aplicación a tu imagen, indicando el registro, el nombre y la etiqueta.
[600ms]
[reassuring] El portal y la línea de comandos dan el mismo resultado. La CLI simplemente crea primero un plan de Linux y luego una aplicación web que apunta a la imagen.

## Step 3 · Pull from ACR with a Managed Identity

[curious] ¿Cómo inicia sesión App Service en el registro? Lo mejor: no necesita contraseña en absoluto.
[600ms]
[confident] Dale una identidad a la aplicación, asignada por el sistema o por el usuario, y concédele a esa identidad el rol AcrPull en el registro. Luego activa la configuración de identidad administrada para las descargas del registro.
[600ms]
[serious] Una identidad asignada por el usuario también necesita que configures su ID de cliente. Y si el registro rechaza el token, la descarga falla con un error de no autorizado.

## Step 4 · WEBSITES_PORT and the Container Port

[calm] App Service supone que tu contenedor escucha en el puerto ochenta.
[600ms]
[confident] Si el tuyo escucha en otro puerto, digamos el ocho mil, avísale a la plataforma con el ajuste de aplicación websites port.
[600ms]
[reflective] Ten presentes los límites. Solo un puerto recibe solicitudes HTTP, y TLS termina en el front end de App Service, así que tu contenedor solo sirve HTTP simple.

## Step 5 · App Settings Become Environment Variables

[calm] Cada ajuste de aplicación que defines se le entrega al contenedor como variable de entorno cuando arranca.
[600ms]
[confident] Los nombres pueden llevar letras, números, puntos y guiones bajos, así que elige nombres que tu código pueda leer sin problema.
[600ms]
[serious] Ojo con el efecto secundario. Agregar o cambiar un ajuste reinicia la aplicación, así que cuenta con un reinicio breve cuando edites uno.

## Step 6 · Secrets: Key Vault References Instead of Values

[serious] No pegues un secreto en un ajuste de aplicación.
[600ms]
[confident] Mejor pon ahí una referencia a Key Vault. Indica la bóveda y el secreto, y el valor se queda en la bóveda; se lee con la identidad administrada de la aplicación, con el rol Key Vault Secrets User.
[600ms]
[concerned] Cuidado con los fallos. Si una referencia no se puede resolver, la aplicación recibe el texto de la referencia como cadena simple, y eso es un error esperando a pasar.

## Step 7 · Slot Settings: What Stays with the Slot on Swap

[curious] Cuando intercambias ranuras de despliegue, la aplicación se mueve y la mayoría de los ajustes viajan con ella.
[600ms]
[confident] Marca un ajuste como ajuste de ranura de despliegue y se queda en su propia ranura. La casilla del portal se llama exactamente así, y la CLI usa slot settings.
[600ms]
[reflective] Algunas cosas nunca se intercambian: los nombres de dominio personalizados, los ajustes de escala y las identidades administradas.

## Step 8 · Continuous Deployment: Webhook from ACR

[calm] Activa el despliegue continuo en el Centro de despliegue, y App Service agrega un webhook a tu registro.
[600ms]
[impressed] Desde ese momento, cada push de una imagen lo activa. La aplicación se reinicia, el reinicio descarga la imagen nueva y la nueva versión se ejecuta.
[600ms]
[reassuring] Si no activas esa opción, reinicia la aplicación tú mismo. Con otro registro, envía una solicitud a la URL del webhook desde tu pipeline.

## Step 9 · Logs and the Container Startup Check

[curious] Después de un reinicio, App Service hace ping a tu contenedor hasta que responde.
[600ms]
[concerned] Si no responde a tiempo, el intento falla, la plataforma reintenta y los visitantes ven un error cinco cero tres.
[600ms]
[determined] Así que activa el registro de la aplicación con la opción del sistema de archivos, y luego mira el Log stream y los registros de App Service para ver qué pasó.

## Step 10 · Container on App Service at a Glance

[calm] Este es el recorrido completo: una imagen en el registro, una aplicación web para contenedores y un servicio en ejecución.
[600ms]
[confident] Los ajustes de la aplicación se vuelven variables de entorno, y los secretos vienen de referencias a Key Vault, nunca de valores pegados.
[600ms]
[proud] Ese es el objetivo del examen A I 200 dicho en llano: ejecutar un contenedor en App Service y darle sus variables y secretos.
