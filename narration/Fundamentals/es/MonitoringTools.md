# Guion de narración - Herramientas de supervisión

**Source animation:** journeys/Fundamentals/MonitoringTools.html
**Script status:** Authored voiceover.
**Language:** Español

Las indicaciones entre corchetes no se pronuncian. Las pausas van en líneas separadas. Un bloque por paso de la animación.
<!-- Sources: https://learn.microsoft.com/azure/azure-monitor/fundamentals/overview ; https://learn.microsoft.com/azure/app-service/monitor-app-service#insights ; https://learn.microsoft.com/azure/advisor/advisor-overview ; https://learn.microsoft.com/azure/service-health/overview -->

## Step 1 · Was it broken, or was it us?

[calm] Un cliente espera demasiado al pagar. La tienda está desplegada, pero el síntoma no indica si la demora viene del código, de una dependencia o del servicio subyacente.
[600ms]
[confident] Contoso necesita pruebas antes de cambiar nada. La supervisión transforma una queja imprecisa en preguntas que el equipo puede investigar.

## Step 2 · Collect the evidence

[calm] Las métricas son medidas numéricas a lo largo del tiempo, como la duración del pago. Los registros describen eventos con su fecha y hora, aportando detalles de lo ocurrido.
[600ms]
[confident] Azure Monitor reúne esas señales. La tendencia permite localizar el periodo lento y los registros ayudan a entender lo sucedido durante él.

## Step 3 · Look inside the checkout request

[calm] Antes del lanzamiento, Contoso configuró la aplicación para enviar telemetría a Application Insights, parte de Azure Monitor. Esa preparación vincula ahora la solicitud de pago con la llamada al inventario de la que depende.
[600ms]
[confident] Son pruebas de la aplicación, no información obtenida solo por crear un recurso. La instrumentación correspondiente debe existir previamente.

## Step 4 · Store it where you can query it

[calm] Un área de trabajo de Log Analytics almacena los registros recopilados para consultarlos después. Maya puede examinar el periodo relevante en lugar de adivinar a partir de un síntoma.
[600ms]
[confident] Lo que encuentre depende de lo recopilado y conservado. Guardar pruebas útiles forma parte de preparar la operación de la tienda.

## Step 5 · Follow the evidence

[calm] Maya sigue el pago lento hasta su dependencia de inventario. En este ejemplo, la llamada tarda dos coma ocho segundos, lo que le da un punto concreto para investigar.
[600ms]
[confident] Es una cifra ilustrativa, no un límite de rendimiento de Azure. Compara los registros antes de decidir si atender al código, a la capacidad o a otra dependencia.

## Step 6 · Decide what is worth a phone call

[calm] Contoso crea una alerta para una lentitud sostenida en el pago y conecta un grupo de acciones. La alerta evalúa la condición; el grupo define las notificaciones o respuestas configuradas.
[600ms]
[confident] Soporte recibe la señal e investiga. La alerta indica que algo requiere atención, pero no determina la causa ni garantiza una solución.

## Step 7 · Improve before the next promotion

[calm] Azure Advisor examina recursos desplegados y recomienda mejoras de confiabilidad, seguridad, rendimiento y coste, entre otras áreas. Contoso evalúa cuáles encajan con su tienda.
[600ms]
[confident] Esto apoya la mejora continua. Las recomendaciones de Advisor no diagnostican este pago lento concreto ni sustituyen la investigación.

## Step 8 · Is Azure reporting an issue?

[calm] Service Health informa de eventos de Azure relevantes para la suscripción de Contoso. Resource Health se centra en un recurso individual y aporta otra perspectiva de lo afectado.
[600ms]
[confident] Maya compara esas señales con las pruebas de la aplicación. El estado de la plataforma por sí solo no demuestra que toda la experiencia del cliente funcione correctamente.

## Step 9 · Monitoring - All in One

[calm] Contoso empezó comprando servidores para su mayor promoción. Ahora puede elegir servicios, organizar y conectar recursos, proteger el acceso, reducir desperdicios, desplegar con coherencia e investigar problemas de clientes.
[600ms]
[confident] Operar en la nube es un ciclo: recopilar pruebas, investigar, responder y mejorar. La próxima promoción parte de una tienda mejor comprendida, no simplemente de más equipos.