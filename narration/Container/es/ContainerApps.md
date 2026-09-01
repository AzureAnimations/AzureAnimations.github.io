# Guion de narración — Azure Containers · 04 · Azure Container Apps

**Source animation:** `static/v2/Container/ContainerApps.html`

---

## Step 1 · problem

[confident] Contoso ejecutaba contoso-orders versión uno en Azure Container Instances, y funcionaba… hasta que dejó de hacerlo.
[600ms]
[concerned] ACI ejecuta un conjunto fijo de contenedores: sin autoescalado, sin balanceador de carga, sin actualizaciones sin tiempo de inactividad.
[700ms]
[optimistic] Cuando el tráfico se dispara o necesitas versiones seguras, das el salto a Azure Container Apps: contenedores serverless que escalan por ti.

## Step 2 · replica

[confident] En Container Apps, tu aplicación se ejecuta como réplicas: cada réplica es tu contenedor con su propia CPU y memoria.
[600ms]
[calm] En el plan de consumo, una réplica obtiene de un cuarto a cuatro vCPU, y de medio a ocho gibibytes.
[700ms]
[impressed] Define un mínimo y un máximo, y Azure añade o quita réplicas según la carga: desde cero hasta mil.

## Step 3 · httpscale

[confident] Implementa la imagen con az containerapp create y asóciale una regla de escalado HTTP.
[600ms]
[calm] Define un http concurrency de cincuenta, y Container Apps añade una réplica cada vez que una revisión supera ese umbral.
[700ms]
[impressed] Los clientes llaman a una sola dirección —el FQDN— y el ingress integrado enruta cada solicitud solo a réplicas en buen estado.

## Step 4 · revision

[confident] Cambia la aplicación —una nueva imagen, configuración o variable de entorno— y obtienes una nueva revisión inmutable.
[600ms]
[calm] En modo único, Container Apps traslada el tráfico de la revisión antigua a la nueva automáticamente.
[700ms]
[reassuring] En modo múltiple, divides el tráfico por peso —blue-green o canary— así una implementación fallida simplemente se queda en la antigua.

## Step 5 · ingress

[confident] Activa el ingress y tu aplicación obtiene un punto de conexión HTTPS: sin balanceador de carga ni IP pública que crear.
[600ms]
[calm] El ingress externo da a internet; el ingress interno solo es accesible dentro del environment.
[700ms]
[intrigued] Dentro de ese environment, las aplicaciones se encuentran por nombre: llama a http://payments, y el tráfico nunca sale.

## Step 6 · serverless

[confident] Aquí el autoescalado lo impulsa KEDA: escala según HTTP, CPU y memoria, o eventos, hasta llegar a cero.
[600ms]
[impressed] Esos desencadenadores de eventos incluyen Service Bus, Event Hubs, Kafka y Redis: no pagas nada mientras las aplicaciones duermen.
[700ms]
[optimistic] Añade un sidecar de Dapr opcional y tus aplicaciones obtienen invocación de servicios, estado y pub/sub, sin infraestructura adicional.

## Step 7 · control

[confident] Container Apps es deliberadamente administrado y con opiniones: nunca tocas los nodos, la Kubernetes API ni las actualizaciones del clúster.
[600ms]
[calm] Ese es el objetivo: tú te centras en la aplicación y Azure gestiona la plataforma.
[700ms]
[curious] Pero cuando necesitas grupos de nodos, la Kubernetes API completa, redes personalizadas y operadores, la última parada es Azure Kubernetes Service.

## Step 8 · recap

[proud] Así que trae una imagen y Container Apps la ejecuta como réplicas serverless con autoescalado.
[600ms]
[encouraging] Revisiones para lanzamientos seguros, ingress para el tráfico, KEDA y Dapr integrados: la potencia de Kubernetes sin las operaciones.
[700ms]
[optimistic] Y cuando de verdad necesitas control a nivel de nodo, la parada final de este recorrido es Azure Kubernetes Service: control total del clúster.
