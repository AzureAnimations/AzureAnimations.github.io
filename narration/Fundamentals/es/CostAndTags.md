# Guion de narración - Costes y etiquetas

**Source animation:** journeys/Fundamentals/CostAndTags.html
**Script status:** Authored voiceover.
**Language:** Español

Las indicaciones entre corchetes no se pronuncian. Las pausas van en líneas separadas. Un bloque por paso de la animación.
<!-- Sources: https://learn.microsoft.com/azure/cost-management-billing/costs/tutorial-acm-create-budgets ; https://learn.microsoft.com/azure/well-architected/saas/governance#cost-governance -->

## Step 1 · Where did the money go?

[calm] La promoción de Contoso terminó, pero el gasto no ha vuelto al nivel previsto. La tienda activa sigue necesitando recursos; parte de la capacidad de pruebas quizá ya no hace trabajo útil.
[600ms]
[confident] Antes de recortar nada, el equipo debe identificar qué recursos generan los cargos y quién los está utilizando.

## Step 2 · What actually drives cost

[calm] La factura no depende solo del número de servidores. El tamaño y las horas de proceso, los datos almacenados, el tráfico, el uso de servicios y la región pueden influir en el coste.
[600ms]
[confident] Contoso revisa los medidores de cada servicio. Cambiar una parte del diseño puede afectar a varios cargos, no solo al precio principal.

## Step 3 · Estimate before you deploy

[calm] Contoso introduce capacidad, horas, almacenamiento y tráfico previstos en la calculadora de precios. Compara un mes normal con el trabajo adicional de una promoción.
[600ms]
[confident] El resultado es una estimación basada en esas suposiciones, no una factura garantizada. Conservar las suposiciones permite compararlas después con lo ocurrido.

## Step 4 · Organize what you deploy

[calm] Las etiquetas añaden información a los recursos compatibles, como el nombre de la carga de trabajo y si el entorno es de pruebas o producción. Contoso las aplica de forma coherente para agrupar los gastos.
[600ms]
[confident] Ayudan a entender la responsabilidad, pero no trasladan recursos ni limitan automáticamente su consumo.

## Step 5 · Watch the real spending

[calm] Compara los costes reales de Cost Management con la estimación. Agrupar por servicio o etiqueta ayuda a descubrir qué parte de la tienda ha cambiado.
[600ms]
[confident] El total indica que subió el gasto; el desglose ayuda a explicar por qué. Contoso utiliza esa información antes de decidir qué recursos ajustar.

## Step 6 · An alert is not a stop switch

[calm] Contoso establece un umbral de presupuesto y elige quién recibirá una alerta. Cuando se cumple la condición de coste configurada, la persona responsable recibe una notificación para investigar.
[600ms]
[confident] El presupuesto no es un tope estricto. No apaga la tienda ni detiene el consumo; debe actuar una persona o una automatización configurada por separado.

## Step 7 · Find the cause, then act

[calm] El desglose revela capacidad de pruebas sin utilizar desde la promoción. Contoso comprueba las dependencias y qué datos debe conservar antes de retirar lo que ya no necesita.
[600ms]
[confident] El objetivo es eliminar desperdicio sin interrumpir producción. Una factura menor solo es un buen resultado si la tienda sigue funcionando.

## Step 8 · Cost and Tags - All in One

[calm] Estima antes de desplegar, etiqueta de forma coherente y compara el gasto real con el plan. Las alertas llaman la atención sobre un cambio; la investigación determina la respuesta.
[600ms]
[confident] Contoso ya entiende sus costes. Ahora convertirá los estándares acordados en comprobaciones de gobernanza para que también se cumplan en futuros despliegues.