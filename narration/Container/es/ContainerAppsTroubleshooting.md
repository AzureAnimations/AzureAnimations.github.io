# Narrator Script — Containers · Troubleshoot Container Apps: app not responding

**Source animation:** [ContainerAppsTroubleshooting.html](../../../journeys/Container/ContainerAppsTroubleshooting.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/container-apps/troubleshooting>
- <https://learn.microsoft.com/azure/container-apps/revisions>
- <https://learn.microsoft.com/azure/container-apps/log-streaming>
- <https://learn.microsoft.com/azure/container-apps/ingress-overview>

---

## Step 1 · The app is up but the URL fails: where to look first

[calm] El orders-api de Contoso aparece como Running en el portal, pero su URL no responde.
[600ms]
[concerned] Mina está de guardia, y un estado en verde no le sirve cuando los clientes no ven nada.
[600ms]
[determined] Lo que necesita es una lista corta de lugares para revisar, en un orden lógico. Armemos esa lista juntos.

## Step 2 · The troubleshooting loop for Container Apps

[confident] Son cinco pasos, siempre en el mismo orden. Lee el estado de la revisión, lee los registros, revisa el ingress, revisa las réplicas y las sondas.
[600ms]
[calm] El quinto paso es corregir una sola cosa y volver a mirar. Todos los comandos de Azure CLI de aquí empiezan con az containerapp.
[600ms]
[reassuring] El portal tiene las mismas paradas, desde Administración de revisiones hasta Diagnosticar y solucionar problemas, así que usa el que prefieras.

## Step 3 · Revision status and provisioning state

[curious] Cada despliegue crea una revisión, y la revisión te cuenta la primera parte de la historia.
[600ms]
[calm] El estado de aprovisionamiento indica si pasó sus comprobaciones de arranque y de preparación. El estado de ejecución indica cómo van sus réplicas: Running, Degraded o Failed.
[600ms]
[confident] Cuando el estado se vea mal, abre los detalles del estado de ejecución. Ahí viene la razón exacta.

## Step 4 · Console logs versus system logs

[calm] Hay dos tipos de registros. Los registros de consola son lo que tu aplicación imprime en la salida estándar y en el error estándar.
[600ms]
[curious] Los registros del sistema son lo que dice el servicio Container Apps sobre tu aplicación. El sistema te dice qué pasó; la consola te dice por qué.
[600ms]
[reassuring] En el portal, abre Flujo de registro y elige Consola o Sistema. Si dice que la revisión está escalada a cero, despliega una revisión con al menos una réplica.

## Step 5 · Query ContainerAppConsoleLogs and ContainerAppSystemLogs with KQL

[calm] Con Log Analytics, tus registros llegan a dos tablas: una para los registros del sistema y otra para los de consola.
[600ms]
[confident] Filtra por nombre de la aplicación y de la revisión, y luego lee la columna Log. Los registros de consola también te dicen qué réplica y qué imagen escribió cada línea.
[600ms]
[encouraging] Las mismas consultas funcionan desde la línea de comandos, así que puedes automatizarlas en tu rutina de guardia.

## Step 6 · Ingress: external, internal, target port, IP restrictions

[calm] El ingress es un conjunto de reglas delante de tu aplicación, así que revísalas en orden. Primero, ¿está activado?
[600ms]
[curious] Después, ¿quién puede llegar a ella? Externo significa desde cualquier lugar; interno, solo desde el entorno de Container Apps. Luego, ¿el puerto de destino coincide con el puerto en el que escucha tu aplicación?
[600ms]
[serious] Por último, revisa si una restricción de IP está bloqueando al cliente. Cualquiera de estas cosas puede dejar muda a una aplicación sana.

## Step 7 · Replicas, probes and restarts

[curious] Las sondas de estado permiten que Container Apps revise cada réplica. Una réplica que no las pasa no está sana y puede reiniciarse.
[600ms]
[concerned] Un puerto de sonda incorrecto, o un arranque lento, puede hacer que una buena aplicación parezca rota. Las aplicaciones Java con arranques largos suelen necesitar un retraso inicial mayor.
[600ms]
[confident] Con el ingress activado, las sondas predeterminadas usan el puerto de destino del ingress. Recuerda que solo puedes agregar una sonda de cada tipo por contenedor.

## Step 8 · Scaling that never starts (min replicas, scale rule credentials)

[concerned] Los mensajes esperan en la cola, pero no aparece ninguna réplica. Eso es un problema de escalado, no de código.
[600ms]
[calm] O el número mínimo de réplicas es cero y nada despierta la aplicación, o la regla de escalado no puede leer su fuente de eventos.
[600ms]
[reassuring] Las reglas de escalado inician sesión con secretos o con una identidad administrada. Si cambias un secreto, reinicia la revisión para que tome el valor nuevo.

## Step 9 · Triage simulator: pick a symptom

[excited] Ahora te toca a ti. Elige un síntoma, y el simulador te muestra la evidencia que encontrarías.
[600ms]
[curious] Cada síntoma trae la primera corrección que conviene probar, así que ves cómo funciona el ciclo de principio a fin.
[600ms]
[reflective] Los nombres y la salida son ficticios. La salida real cambia en los detalles, pero lo que importa es el patrón.

## Step 10 · Troubleshooting playbook

[confident] Ahora tienes un ciclo que seguir, un mapa de cada síntoma a su primer sospechoso y los lugares donde Azure guarda la evidencia.
[600ms]
[calm] Las habilidades de A I 200 incluyen monitorear y solucionar problemas en AKS y Container Apps. Esta lección es la mitad de Container Apps.
[600ms]
[proud] La próxima vez que una aplicación en verde tenga una URL muda, sabrás exactamente dónde mirar primero.
