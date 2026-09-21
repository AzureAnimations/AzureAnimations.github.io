# Guion del narrador — Episodio 5 · El pegamento sin servidor

**Source animation:** `journeys/Integration/ServerlessGlue.html`

**Script status:** Authored voiceover.

---

## Step 1 · Four brokers, and a thousand lines of plumbing

[calm] Contoso ya tiene una cola, un bus, un centro y una cuadrícula. Pero fíjate en lo que los mantiene unidos.
[500ms]
[serious] Cada trabajador sigue abriendo su propio cliente, sondeando mensajes, renovando bloqueos, reintentando y registrando. Las mismas doscientas líneas, escritas de cinco formas ligeramente distintas, en una máquina que se queda encendida aunque la cola esté vacía.
[600ms]
[confident] Cada línea de bucle de recepción es una línea que mantienes para siempre. El runtime de integración puede mantenerla por ti, y ya ha resuelto las partes difíciles.

## Step 2 · Exactly one trigger. Any number of bindings.

[calm] Una función tiene exactamente un desencadenador: lo que la arranca.
[500ms]
[confident] A su alrededor declaras enlaces opcionales de entrada y salida que la conectan con otros servicios, sin nada de código de SDK dentro del cuerpo de la función. Una cola de Service Bus la desencadena, Cosmos DB aporta el cliente, y los resultados salen a una cola de Storage y a Event Grid.
[600ms]
[reflective] Si te ves creando un cliente dentro de una función para leer o escribir en otro servicio de Azure, comprueba si ya hay un enlace que lo haga por ti.

## Step 3 · A trigger for every service in the series

[calm] Cada agente que has conocido tiene un desencadenador equivalente, y cada uno te entrega una forma distinta de trabajo.
[500ms]
[confident] El de cola te da un mensaje, reintentado hasta que tenga éxito. El de Service Bus gestiona el peek-lock por ti: vuelve sin errores para completar, lanza una excepción para abandonar. El de Event Hubs te da un lote de una partición y marca el punto de control. El de Event Grid te da un evento enrutado.
[600ms]
[serious] Así que el desencadenador que elijas decide tu comportamiento ante fallos. Merece la pena saberlo antes de escribir el controlador.

## Step 4 · Stop shipping secrets to production

[serious] Y ahora, la parte que acaba en la captura de pantalla de la presentación de alguien.
[500ms]
[calm] Un enlace puede nombrar una cadena de conexión: un secreto compartido, copiable, registrable, difícil de rotar y que normalmente concede mucho más acceso del necesario. O puede nombrar un punto de conexión y dejar que la identidad administrada de la aplicación se autentique con un token de Entra ID en tiempo de ejecución.
[600ms]
[confident] Una de las dos se puede filtrar. La otra no existe para ser robada. Eso sí, concede solo el verbo que usas: recibir no es el mismo permiso que enviar.

## Step 5 · The backlog drives the instance count

[optimistic] Y ya nadie dimensiona un clúster para el Black Friday.
[500ms]
[confident] El controlador de escalado vigila la profundidad de la cola o el retraso de eventos y añade instancias mientras haya trabajo esperando; después las retira. A las dos de la madrugada funcionas casi a cero. Cuando abre la campaña y la acumulación sube, aparecen instancias en paralelo. Cuando se resuelve, se van.
[600ms]
[calm] Es la misma señal que usa KEDA para escalar contenedores. Tanto si ejecutas Functions como Container Apps, la longitud de la cola es la entrada del escalador automático.

## Step 6 · At least once means expect it twice

[calm] Idempotente significa que repetir la misma solicitud no repite su efecto de negocio. Usa un ID estable del mensaje o pedido. Guarda el resultado y el ID procesado atómicamente, para que un fallo no los deje incoherentes. En una API de pagos externa, usa también su clave de idempotencia. La entrega por sí sola no protege un cobro.

## Step 7 · Episode 5: Functions are the wiring

[proud] Y esa es la reconstrucción de Contoso Retail, de principio a fin.
[500ms]
[calm] Los agentes deciden qué significa un mensaje. Functions decide qué pasa después, con el bucle de recepción, el escalado y las credenciales resueltos por ti. Un desencadenador, enlaces declarativos, una identidad administrada y escalado por eventos que baja hasta cero.
[600ms]
[encouraging] Pon el trabajo en cola, garantiza el orden, registra el flujo, reacciona al cambio y deja que Functions haga de pegamento. En el próximo recorrido, la tienda gana un agente de IA, y los mismos músculos de integración lo sostienen.
