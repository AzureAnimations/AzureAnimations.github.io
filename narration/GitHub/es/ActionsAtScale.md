# Narrator Script — GitHub · Run Actions at Scale: Runners, Policies, Secrets and Variables

**Source animation:** [ActionsAtScale.html](../../../journeys/GitHub/ActionsAtScale.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/en-us/azure/developer/github/github-actions>

---

## Step 1 · From one team to a thousand repositories

[calm] El equipo de Priya ejecutaba un solo flujo de trabajo en un solo runner. Algo muy sencillo.
[600ms]
[concerned] Ahora mil repositorios de Contoso quieren usar Actions, y todos los equipos hacen las mismas preguntas.
[600ms]
[confident] Actions a gran escala se trata de gobernanza: máquinas, acceso, acciones permitidas, secretos y costos.

## Step 2 · Hosted runners: what is preinstalled

[calm] Los runners alojados en GitHub vienen con la aplicación del runner y muchas herramientas preinstaladas, y GitHub se encarga de mantenerlos.
[600ms]
[curious] Antes de instalar algo, revisa qué trae la imagen. El log del trabajo de configuración y el readme de la imagen te lo muestran.
[600ms]
[confident] Las herramientas se actualizan cada semana, así que usa acciones de configuración para elegir una versión y mantener la tuya estable cuando cambie la imagen.

## Step 3 · Larger runners and installing software

[curious] ¿Necesitas más potencia? Los runners más grandes suman núcleos, memoria y disco, y además incluyen grupos de runners, escalado automático y direcciones estáticas.
[600ms]
[confident] Son para GitHub Team y Enterprise Cloud, y se facturan por minuto, solo mientras los trabajos los usan.
[600ms]
[calm] ¿Falta una herramienta? Instálala mientras corre el trabajo, con una acción de configuración, un administrador de paquetes o un contenedor, en vez de crear una imagen nueva.

## Step 4 · Self-hosted runners

[calm] Con los runners autoalojados, registras tu propia máquina con un token de corta duración y le pones etiquetas.
[600ms]
[confident] Los trabajos lo encuentran por etiqueta, y todas las etiquetas tienen que coincidir. Los scale sets agregan el escalado automático.
[600ms]
[serious] Tú te encargas de mantener la máquina con los parches al día. Y úsalos con repositorios privados, porque un fork de uno público puede ejecutar código en tu máquina.

## Step 5 · Runner groups: who can use which runners

[calm] Un grupo de runners decide qué repositorios pueden enviar trabajos a un conjunto de runners.
[600ms]
[confident] Reúne runners más grandes o autoalojados, y su política de acceso es todos los repositorios o una lista seleccionada. Luego, un flujo de trabajo pide el grupo por su nombre.
[600ms]
[intrigued] Un grupo de empresa sigue cerrado para una organización hasta que un propietario elige qué repositorios pueden usarlo.

## Step 6 · Networking: IP allow lists and static IPs

[calm] Un firewall que solo permite direcciones conocidas necesita un origen estable.
[600ms]
[concerned] Los runners estándar alojados usan muchos rangos, y eso los hace poco útiles para una lista de permitidos.
[600ms]
[confident] Los runners más grandes pueden darle a tu grupo un rango estático, y un runner autoalojado usa tu propia dirección IP.

## Step 7 · Troubleshoot a runner

[curious] Un trabajo que se queda esperando siempre tiene una causa. Síguela paso a paso.
[600ms]
[confident] Revisa primero las etiquetas y el grupo, luego si el runner está inactivo, activo o desconectado, y después la red y los límites.
[600ms]
[reassuring] Empieza por las revisiones más sencillas. Un error de tipeo en la etiqueta y el estado del runner explican la mayoría de los trabajos que se quedan esperando.

## Step 8 · Policies: allow and deny lists

[calm] Los administradores eligen qué acciones y flujos de trabajo reutilizables se pueden ejecutar.
[600ms]
[confident] Las entradas permitidas, las denegadas y el fijado con SHA detienen el código no deseado antes de que el flujo de trabajo siquiera empiece.
[600ms]
[serious] Una política de empresa puede anular la configuración de una organización, y exigir el fijado también se aplica a las acciones de tu propia organización.

## Step 9 · Secrets and variables by scope

[calm] Define un valor una sola vez, en el nivel correcto: organización, repositorio o entorno.
[600ms]
[confident] Un valor de organización se comparte, un valor de entorno pertenece a un solo destino de despliegue, y cuando hay nombres repetidos, gana el nivel más específico.
[600ms]
[curious] Los secretos guardan valores sensibles y se cifran antes de llegar a GitHub. Las variables guardan configuración normal.

## Step 10 · Use them, and manage them with the API

[calm] Los flujos de trabajo leen las variables con el contexto vars y los secretos con el contexto secrets.
[600ms]
[confident] La API REST crea ambos. Para un secreto, obtén la clave pública, cifra tu valor y luego envíalo. Una variable solo necesita un nombre y un valor en texto plano.
[600ms]
[serious] Los logs enmascaran los secretos, pero el enmascaramiento no está garantizado, así que nunca los imprimas.

## Step 11 · Usage and cost

[curious] Cada tipo de runner cuenta distinto, así que conviene saber qué es gratis y qué se cobra.
[600ms]
[confident] Los runners estándar son gratis en repositorios públicos, usan el consumo incluido en los privados, y los runners más grandes cobran por minuto.
[600ms]
[reflective] El uso se cobra al propietario del repositorio. Usar runners autoalojados con Actions no cuesta nada, pero sí pagas por mantener las máquinas funcionando.

## Step 12 · Recap: an Actions governance checklist

[calm] Seis revisiones que debes hacer antes de que Actions se extienda por toda la empresa, cada una con una configuración que puedes encontrar.
[600ms]
[confident] Runners, grupos, redes, políticas, secretos y variables, y uso. Cada uno es una configuración que ya sabes dónde encontrar.
[600ms]
[reassuring] Las opciones que veas dependen de tu plan de GitHub, y una política de empresa puede anular la de una organización.
