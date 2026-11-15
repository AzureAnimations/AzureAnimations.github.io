# Narrator Script — Containers · Troubleshoot AKS: pod not running

**Source animation:** [AksTroubleshooting.html](../../../journeys/Container/AksTroubleshooting.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/aks/monitor-aks>
- <https://learn.microsoft.com/troubleshoot/azure/azure-kubernetes/welcome-azure-kubernetes>
- <https://learn.microsoft.com/troubleshoot/azure/azure-kubernetes/create-upgrade-delete/pod-stuck-crashloopbackoff-mode>
- <https://learn.microsoft.com/troubleshoot/azure/azure-kubernetes/availability-performance/troubleshoot-pod-scheduler-errors>

---

## Step 1 · My pod is not running. Which command shows me why?

[calm] Contoso Shop corre en AKS. Deberían estar activos cuatro pods, pero uno no lo está.
[600ms]
[concerned] Mina está de guardia y necesita saber el motivo, rápido.
[600ms]
[confident] Los nombres y la salida de la terminal de aquí son inventados, pero muestran el patrón que siguen los clústeres reales.

## Step 2 · The troubleshooting loop

[calm] Hay un ciclo de cinco pasos, siempre en el mismo orden.
[600ms]
[confident] Lee el estado, describe el pod, revisa los eventos, lee los registros y luego corrige y vuelve a mirar.
[600ms]
[reassuring] Describe ya incluye una sección de Eventos, así que muchos problemas terminan en el paso dos. Los demás comandos son para cuando necesitas más.

## Step 3 · Move 1 · What state is the pod in?

[calm] El paso uno es kubectl get pods. Lista todos los pods con READY, ESTADO y REINICIOS.
[600ms]
[curious] La palabra ESTADO ya te indica el tipo de problema. Y READY cero de uno significa que todavía no hay ningún contenedor listo en el pod.
[600ms]
[confident] Agrega guion A mayúscula para listar los pods de todos los espacios de nombres, o guion n para uno solo.

## Step 4 · Move 2 · Describe it, then read the Events

[calm] El paso dos es kubectl describe pod. Muestra el estado de cada contenedor, su último estado, el código de salida y el número de reinicios.
[600ms]
[curious] Al final está la sección de Eventos, que es el diario del propio pod.
[600ms]
[confident] Léela primero. Enumera lo que Kubernetes intentó, como programar, descargar, iniciar y reiniciar, y qué salió mal.

## Step 5 · Move 3 · Read the events, oldest to newest

[calm] El paso tres es leer los eventos del espacio de nombres. Kubernetes registra lo que intentó: programado, descargado, iniciado, en espera para reintentar.
[600ms]
[curious] Si los ordenas por hora, se leen como la historia de lo que le pasó al pod.
[600ms]
[serious] Cada evento es Normal o Warning. Empieza por los eventos Warning, porque son tus pistas.

## Step 6 · Move 4 · Read the logs, even from the crashed run

[calm] El paso cuatro es kubectl logs, que muestra lo que imprimió la aplicación.
[600ms]
[concerned] Pero un contenedor que entra en bucle de fallos tiene, después de cada reinicio, un registro nuevo y casi vacío.
[600ms]
[confident] Agrega guion guion previous para leer la ejecución que falló. Ahí están sus últimas palabras.

## Step 7 · Each failure happens at one stage of a pod’s life

[calm] Todo fallo ocurre en una etapa de la vida de un pod. Encuentra la etapa en la que se detiene, y sabrás qué tipo de causa buscar.
[600ms]
[curious] La etapa sale del ESTADO y de los Eventos.
[600ms]
[confident] Pending significa que no llegó a un nodo. ImagePullBackOff es la imagen. CrashLoopBackOff y OOMKilled ocurren después de iniciar.

## Step 8 · Triage simulator: pick a symptom

[curious] Hora de practicar. Elige un síntoma que podrías encontrarte.
[600ms]
[confident] La terminal ejecuta los comandos que revelan la causa, y a su lado aparece la solución más probable.
[600ms]
[encouraging] Prueba los seis. La salida es ficticia, pero tiene la misma forma que produce kubectl de verdad.

## Step 9 · When the node is the problem

[calm] A veces el problema ni siquiera es el pod. Un nodo NotReady no puede recibir pods, así que revisa el nodo.
[600ms]
[confident] Cordon impide que lleguen pods nuevos a ese nodo. Drain saca los que ya están corriendo.
[600ms]
[reassuring] AKS vigila la salud de los nodos y puede reparar automáticamente los que no están sanos. También usa cordon y drain durante las actualizaciones.

## Step 10 · Where logs and events live in Azure

[calm] Kubectl te muestra el clúster en vivo. Azure Monitor guarda el historial, así que puedes consultarlo después de que el pod ya no exista.
[600ms]
[serious] Los registros del plano de control no se recopilan hasta que creas un ajuste de diagnóstico.
[600ms]
[curious] Container insights y Prometheus administrado vienen activados de forma predeterminada en AKS Automatic. En AKS Standard, los activas tú.

## Step 11 · kubectl debug: a shell on the node

[calm] Cuando los registros y los eventos no bastan, inicia un pod de depuración en el nodo con kubectl debug.
[600ms]
[serious] Ejecuta un contenedor con privilegios, así que úsalo con cuidado. Dentro, ejecuta chroot slash host para trabajar con el propio nodo.
[600ms]
[confident] Echa un vistazo y bórralo. Los nodos de Windows necesitan el truco del proxy SSH de la documentación.

## Step 12 · Your pod-not-running playbook

[calm] Ya tienes un ciclo, un mapa de síntoma a causa y los lugares donde Azure guarda la evidencia.
[600ms]
[confident] Ese es el manual para cualquier pod que no arranque.
[600ms]
[proud] También encaja con una habilidad de A I 200: monitorear y solucionar problemas en AKS y Container Apps revisando registros, eventos y conectividad de extremo a extremo.
