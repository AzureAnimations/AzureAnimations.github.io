# Narrator Script — Containers · KEDA scaling in Container Apps — Azure Containers

**Source animation:** [KedaScaling.html](../../../journeys/Container/KedaScaling.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/container-apps/scale-app>
- <https://learn.microsoft.com/azure/container-apps/jobs>
- <https://learn.microsoft.com/azure/container-apps/metrics>
- <https://learn.microsoft.com/azure/container-apps/log-monitoring>

---

## Step 1 · A burst the CPU can’t see

[calm] El procesador de pedidos de Contoso está tranquilo, hasta que una venta relámpago deja cientos de mensajes en la cola en un solo minuto.
[600ms]
[concerned] Una réplica se queda atrás, pero su CPU se ve tranquila, porque el worker pasa la mayor parte del tiempo esperando la respuesta de una API de pagos.
[600ms]
[confident] O sea que la CPU es el punto ciego. La señal que importa es la longitud de la cola, y es con esa con la que deberíamos escalar.

## Step 2 · Three kinds of scale rule

[curious] Una regla de escalado le dice a Container Apps cuándo agregar réplicas. Hay tres tipos: HTTP, TCP y personalizada.
[600ms]
[calm] Las reglas HTTP y TCP cuentan el tráfico en vivo. Una regla personalizada conecta cualquier scaler de KEDA, como una cola.
[600ms]
[confident] Si hay varias reglas, el escalado empieza con la primera condición que se cumple. Y si no defines ninguna, una regla HTTP predeterminada escala entre cero y diez réplicas.

## Step 3 · The control loop: queue, KEDA, replicas

[calm] Este es el ciclo. KEDA consulta la fuente de eventos, calcula cuántas réplicas necesita el backlog, y la plataforma agrega o quita réplicas para igualarlo.
[600ms]
[curious] De forma predeterminada, una regla personalizada consulta cada treinta segundos. Las reglas HTTP y TCP no se consultan, porque la plataforma mide ese tráfico por sí misma.
[600ms]
[reassuring] Tu código nunca habla con el scaler. Solo procesa mensajes.

## Step 4 · Limits and the replica math

[curious] Le dices a KEDA cuántos mensajes debe atender una réplica. Divide el backlog entre ese número y redondea hacia arriba.
[600ms]
[calm] Luego tus réplicas mínima y máxima acotan el resultado. Por defecto, son cero y diez.
[600ms]
[serious] Ten en cuenta que el número de réplicas es un objetivo, no una garantía. El escalado real sube por etapas, a lo largo de varias consultas, hasta llegar a tu máximo.

## Step 5 · Scale to zero, and the cold start

[calm] Con las réplicas mínimas en cero, una cola vacía termina en cero réplicas, y sin cargos por uso.
[600ms]
[concerned] El precio es un arranque en frío. El primer mensaje después de un rato de calma espera mientras arranca una réplica.
[600ms]
[confident] El periodo de enfriamiento, de trescientos segundos por defecto, solo se aplica al pasar de la última réplica a cero. En cero ya no hay ningún proceso que medir, así que es la fuente de eventos la que despierta la aplicación.

## Step 6 · A Service Bus scale rule, field by field

[calm] Veamos ahora una regla real. Una regla personalizada indica el tipo de scaler de KEDA, aquí Azure Service Bus, y sus metadatos.
[600ms]
[curious] Los metadatos indican qué cola vigilar, en qué espacio de nombres y cuántos mensajes debe atender una réplica.
[600ms]
[confident] Una cola de Storage sigue la misma idea, con un nombre de cuenta, un nombre de cola y una longitud de cola. Los valores en pantalla son ficticios.

## Step 7 · How the scaler signs in

[curious] KEDA tiene que leer la longitud de la cola, así que la regla necesita credenciales.
[600ms]
[calm] Puedes pasar un secreto, al que la regla hace referencia. O dejar que inicie sesión una identidad administrada, sin nada que guardar ni rotar.
[600ms]
[serious] Con una cadena de conexión de Service Bus, la política de acceso compartido debe ser de tipo Manage. Con una identidad administrada, esa identidad debe tener permiso para leer la cola.

## Step 8 · Cron: scale by the clock

[curious] A veces el pico es predecible. Una regla cron sube las réplicas durante una ventana de tiempo y luego las libera.
[600ms]
[calm] Le das una zona horaria, un inicio, un fin y las réplicas que se mantendrán entre ambos.
[600ms]
[serious] El inicio y el fin no pueden ser iguales, y deja las réplicas mínimas en cero fuera de la ventana. Combínala con una regla de cola, para que los picos inesperados también estén cubiertos.

## Step 9 · Try it: the live scale simulator

[excited] Te toca a ti. Elige una regla, arrastra la carga y observa cómo el número de réplicas sigue las cuentas.
[600ms]
[curious] Prueba un backlog grande con el máximo en cinco, luego carga cero con mínimo cero, y después con mínimo uno.
[600ms]
[reassuring] Todo aquí es ficticio y se calcula en la página. Muestra dónde se estabiliza la aplicación, mientras que el escalado real sube en varias consultas.

## Step 10 · Apps scale replicas, jobs run executions

[calm] Una aplicación mantiene réplicas en ejecución, y cada réplica va vaciando eventos de la fuente.
[600ms]
[curious] Un trabajo basado en eventos es distinto. Inicia una ejecución por cada evento, la lleva hasta el final y se detiene.
[600ms]
[confident] Elige un trabajo cuando cada evento necesite su propio contenedor, o cuando se ejecute mucho tiempo. Los trabajos usan los mismos scalers de KEDA, pero es la regla la que decide cuántas ejecuciones iniciar.

## Step 11 · Verify it scales, and find what’s wrong

[calm] Para verificar, agrega algunos mensajes de prueba y luego observa la métrica del número de réplicas y los registros del sistema.
[600ms]
[concerned] Si nada se mueve, recorre el ciclo en orden: la cola, las credenciales, la regla y los límites.
[600ms]
[serious] Una trampa más. Con el ingress desactivado, sin réplicas mínimas y sin regla, la aplicación escala a cero y no hay forma de que vuelva a arrancar. Y editar una regla de escalado crea una revisión nueva.

## Step 12 · Burst out, then back to zero

[calm] Juntemos todo. Necesitas una regla, un umbral por réplica, límites mínimo y máximo, y credenciales.
[600ms]
[proud] KEDA hace las consultas, y la plataforma hace el escalado. Contoso se dispara con la venta relámpago y luego vuelve a cero.
[600ms]
[reassuring] Esta es una habilidad que se mide en A I 200. Practica con el simulador y luego abre la guía de estudio oficial.
