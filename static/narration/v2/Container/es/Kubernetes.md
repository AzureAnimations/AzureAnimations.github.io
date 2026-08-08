# Guion de narración — Azure Containers · 05 · Azure Kubernetes Service

**Source animation:** `static/v2/Container/Kubernetes.html`

---

## Step 1 · arch

[confident] Azure Kubernetes Service es Kubernetes administrado, y esa división lo es todo.
[600ms]
[calm] Azure ejecuta y escala el control plane por ti — el API server, etcd, el scheduler y los controladores — en un nivel Free, Standard o Premium.
[600ms]
[reassuring] Tú eres dueño de los node pools de abajo: las VMs de trabajo donde realmente se ejecutan tus Pods.
[700ms]
[confident] Y todo lo manejas con una sola herramienta: kubectl, hablando con ese API server administrado.

## Step 2 · nodepools

[confident] Esos nodos vienen agrupados en node pools, y cada pool no es más que un Virtual Machine Scale Set de VMs idénticas.
[600ms]
[calm] Siempre hay un system pool — solo Linux — que aloja servicios del clúster como CoreDNS y metrics-server.
[600ms]
[calm] Luego agregas user pools para tus propias apps, y esos pueden ser Linux o Windows.
[700ms]
[impressed] Cada pool escala por su cuenta, hasta mil nodos.

## Step 3 · pod

[confident] Ahora despleguemos la app. Cada Deployment declara cuántas réplicas quiere — frontend con dos, orders con tres, backend con dos.
[600ms]
[calm] Nuestra imagen de orders es contoso-orders versión uno, y la aplicamos con un solo comando de kubectl.
[600ms]
[intrigued] A partir de ahí toma el control el kube-scheduler, decidiendo en qué nodo cae cada Pod.
[700ms]
[reassuring] Reparte cada app entre ambos nodos — así, perder un nodo nunca tumba la app.

## Step 4 · scale

[confident] AKS escala de tres formas distintas, y conviene tenerlas claras.
[600ms]
[calm] El Horizontal Pod Autoscaler — el HPA — agrega réplicas de Pods cuando la CPU, la memoria o un evento de KEDA indican que sube la demanda.
[600ms]
[calm] Cuando esos Pods ya no caben, el Cluster Autoscaler agrega nuevos nodos VM al scale set — eso tarda minutos.
[700ms]
[impressed] Y para un pico repentino, los virtual nodes lanzan Pods extra directamente a Azure Container Instances en segundos — serverless, pago por segundo.

## Step 5 · service

[confident] Los Pods son efímeros — aparecen y desaparecen, cada vez con una IP nueva.
[600ms]
[calm] Por eso nunca hablas con un Pod directamente. Un Service es la puerta de entrada estable que balancea la carga entre los Pods sanos que tiene detrás.
[600ms]
[reassuring] Solo envía tráfico a los Pods que pasan sus sondas de readiness, liveness y startup.
[700ms]
[curious] Hay tres tipos — ClusterIP, NodePort y LoadBalancer — cada uno con un alcance mayor. Veámoslos uno por uno.

## Step 6 · svcCip

[confident] Primero, ClusterIP — y es el tipo por defecto.
[600ms]
[calm] Da a tus Pods una dirección interna estable, para que frontend, orders y backend puedan llamarse entre sí a través de los nodos — de forma segura.
[700ms]
[serious] Pero fíjate en la tarjeta roja: este tráfico nunca sale del clúster. Ningún usuario de internet puede alcanzar estos Pods.
[600ms]
[reassuring] Eso es justo lo que quieres para la comunicación privada, de Pod a Pod.

## Step 7 · svcNp

[confident] Después, NodePort — nuestro primer paso hacia el mundo exterior.
[600ms]
[calm] Abre el mismo puerto estático — en algún punto del rango treinta mil a treinta y dos mil setecientos sesenta y siete — en la IP de cada nodo.
[600ms]
[concerned] Pero aquí está el inconveniente: con dos nodos obtienes dos IPs públicas distintas, y ninguna dirección estable única para repartir.
[700ms]
[amused] Los nodos van y vienen, y sus IPs cambian con ellos. Está bien para una prueba rápida — pero el tráfico real quiere una entrada limpia.

## Step 8 · svcLb

[confident] Y esa entrada limpia es un Service de tipo LoadBalancer.
[600ms]
[impressed] Elígelo para el frontend, y AKS aprovisiona automáticamente una IP pública de Azure — una dirección única y estable.
[600ms]
[calm] Los usuarios llegan a esa única IP, y dentro del clúster el LoadBalancer reparte cada solicitud entre los Pods sanos del frontend — pod uno o pod dos.
[700ms]
[reassuring] Privado, luego público pero desordenado, y ahora una IP pública con balanceo. Ese es el recorrido.

## Step 9 · ingress

[confident] Para un enrutamiento más rico, subes a la capa siete.
[600ms]
[calm] Application Gateway for Containers es un gateway alojado en Azure — enrutamiento por host y por ruta, TLS, mTLS — que maneja el tráfico norte-sur que entra al clúster.
[600ms]
[calm] La malla de servicios Istio administrada maneja el tráfico este-oeste, asegurando las llamadas entre tus servicios con mTLS.
[700ms]
[optimistic] Ambos se alinean con la Kubernetes Gateway API — el estándar hacia el que AKS se dirige.

## Step 10 · why

[confident] Entonces, ¿por qué AKS? Porque Kubernetes reconcilia constantemente la realidad con tu estado deseado.
[600ms]
[reassuring] Se autorrepara — reinicia los Pods que fallan y los reprograma fuera de los nodos muertos, automáticamente.
[600ms]
[impressed] Despliega actualizaciones con cero tiempo de inactividad y rollback instantáneo a la última versión buena.
[700ms]
[confident] Y en Azure sumas Microsoft Entra ID con RBAC, integración con VNet mediante Azure CNI, y actualizaciones administradas.

## Step 11 · monitor

[confident] Por último, necesitas ver qué está pasando — al estilo de la CNCF.
[600ms]
[calm] Prometheus recoge tus métricas, Grafana las visualiza, Jaeger rastrea las solicitudes entre servicios, y Kiali mapea tu malla de servicios.
[600ms]
[reassuring] En Azure, el Prometheus administrado y el Grafana administrado significan que no hay servidores que tengas que operar.
[700ms]
[proud] Todo de código abierto — respaldado por la CNCF, la Linux Foundation y Microsoft.

## Step 12 · recap

[proud] Y eso es Azure Kubernetes Service, de principio a fin.
[600ms]
[calm] Un control plane administrado, node pools de VMs Linux o Windows, tu imagen ejecutándose como Pods autorreparables, autoescalado, Services e ingress, y observabilidad completa.
[700ms]
[encouraging] Has ido desde un Dockerfile hasta un clúster completo y orquestado — eso completa el viaje de contenedores.
[600ms]
[optimistic] Ahora ve a construir algo, y deja que Azure haga el trabajo pesado.
