# Narrator Script — Compute · Hybrid and Specialised Compute: Arc, VMware, Azure Local, Service Fabric

**Source animation:** [HybridAndSpecialised.html](../../../journeys/Compute/HybridAndSpecialised.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/azure-arc/overview>
- <https://learn.microsoft.com/azure/azure-vmware/introduction>
- <https://learn.microsoft.com/azure/azure-local/overview>
- <https://learn.microsoft.com/azure/service-fabric/service-fabric-overview>

---

## Step 1 · Some workloads can’t move to a region

[calm] Contoso quiere usar Azure, pero cuatro de sus cargas de trabajo no pueden ir a una región estándar de Azure.
[600ms]
[curious] Cada una tiene su propia razón para quedarse donde está, y cada una tiene su propia respuesta.
[600ms]
[confident] Así que la única pregunta de esta página es sencilla: ¿dónde se ejecuta y qué elijo?

## Step 2 · A spectrum: from in Azure to your own hardware

[calm] Imagina una línea. A la izquierda está el hardware de Azure, y a la derecha, el tuyo.
[600ms]
[curious] Cada opción cae en un punto distinto. Azure VMware Solution funciona en los centros de datos de Azure, mientras que Azure Local funciona en hardware de un socio, en tu sitio.
[600ms]
[confident] Arc llega desde la derecha para administrar servidores dondequiera que estén, y Service Fabric es una plataforma, no un lugar.

## Step 3 · Azure Arc: projected into Azure, not moved

[calm] Azure Arc no mueve nada. Le da a cada recurso fuera de Azure un gemelo en Azure Resource Manager.
[600ms]
[curious] Los servidores, los clústeres de Kubernetes y SQL se quedan exactamente donde están, pero ahora cada uno aparece en Azure con su propio recurso.
[600ms]
[reassuring] En los servidores instalas el agente Connected Machine, y la máquina puede estar en un grupo de recursos junto a recursos nativos de Azure.

## Step 4 · What Arc gives you: Azure’s tools, on your servers

[confident] Cuando un servidor ya es un recurso de Azure, se le aplican las herramientas de Azure: inventario, Policy, Defender for Cloud, Azure Monitor y Update Manager.
[600ms]
[intrigued] Policy puede auditar la configuración dentro de la máquina, y Defender for Cloud puede vigilarla en busca de amenazas.
[600ms]
[reassuring] Las funciones del plano de control de Arc para servidores no cuestan nada extra. Los servicios que uses encima se cobran a su propio precio.

## Step 5 · Azure VMware Solution: VMware, running in Azure

[calm] Azure VMware Solution es una nube privada formada por hosts bare-metal dedicados en Azure, que ejecutan la pila de VMware.
[600ms]
[curious] Cada nube privada incluye vCenter Server, vSAN, vSphere y NSX, así que tu equipo de VMware sigue con las herramientas que ya conoce.
[600ms]
[confident] Se conecta a tus redes virtuales de Azure, y a tu red local a través de ExpressRoute.

## Step 6 · Move VMs with VMware HCX

[calm] Para llevar allí las máquinas virtuales, usas VMware HCX, que enlaza tu vSphere local con la nube privada.
[600ms]
[impressed] Las máquinas virtuales se mueven tal cual, como máquinas virtuales, por ejemplo con vMotion en vivo o con migración en frío, así que no hay que cambiar nada de plataforma en el camino.
[600ms]
[reassuring] Despliegas el conector en tu entorno local y lo emparejas con la nube. HCX también puede extender una red a ambos lados.

## Step 7 · Who manages what in Azure VMware Solution

[calm] La responsabilidad se reparte. Microsoft se encarga de los centros de datos, los hosts y el ciclo de vida del software de VMware.
[600ms]
[serious] Eso significa que Microsoft despliega, aplica parches y actualiza ESXi, vCenter, NSX y vSAN, y reemplaza los hosts que fallan.
[600ms]
[confident] Tú administras todo lo de encima: la red y la seguridad de NSX, tus VMs, los sistemas operativos invitados y las apps, y las migraciones con HCX.

## Step 8 · Azure Local: Azure on your own hardware

[calm] Azure Local lleva Azure a tu propio sitio. Antes se llamaba Azure Stack HCI.
[600ms]
[curious] Ahí funciona hardware de socios, y Azure Arc es el plano de control que lo conecta de vuelta con Azure.
[600ms]
[confident] Usas el portal de Azure, la CLI y las plantillas ARM, y puedes agregar Policy, Defender for Cloud y Azure Monitor. Se admiten despliegues conectados y desconectados.

## Step 9 · What runs on Azure Local, and why there

[calm] En el sitio puedes ejecutar máquinas virtuales, Kubernetes con AKS habilitado por Arc, y Azure Virtual Desktop.
[600ms]
[curious] Se elige lo local por cuatro razones: baja latencia, seguir funcionando durante interrupciones, mantener los datos cerca e IA en el origen.
[600ms]
[confident] Piensa en líneas de producción de una fábrica, en sistemas de ejecución de manufactura o en reglas estrictas de soberanía y regulación.

## Step 10 · Service Fabric: the state lives with the code

[calm] La diferencia clave de Service Fabric es dónde vive el estado. Un servicio sin estado guarda su estado en un almacén externo.
[600ms]
[curious] Un servicio con estado lo guarda por dentro, y la plataforma lo replica entre nodos. Hay una réplica principal y varias secundarias.
[600ms]
[reassuring] Las escrituras van a la principal y se copian. Si la principal falla, se promueve una secundaria y se crea una nueva.

## Step 11 · Clusters, managed clusters and rolling upgrades

[calm] Un clúster de Service Fabric es un conjunto de nodos que puedes crear en Azure, en tu entorno local o en otras nubes.
[600ms]
[curious] En un clúster administrado, Azure se encarga del conjunto de escalado, el balanceador de carga, la IP pública, el almacenamiento y la red, todo detrás de un único recurso. No hay una ruta de migración desde un clúster existente, así que creas uno nuevo.
[600ms]
[confident] Una actualización gradual actualiza un dominio a la vez, así que la aplicación sigue disponible.

## Step 12 · Service Fabric next to AKS and Container Apps

[calm] Service Fabric, AKS y Container Apps ejecutan microservicios.
[600ms]
[curious] Se diferencian en cómo manejan el estado, con qué desarrollas y dónde puede vivir el clúster.
[600ms]
[serious] Service Fabric trae el estado integrado y sus propios modelos, mientras que AKS usa la API de Kubernetes. Para un diseño nuevo, revisa la guía actual de cada servicio.

## Step 13 · Which one fits your constraint?

[curious] Ahora te toca a ti. Elige la restricción que te tiene atascado, y se ilumina la opción que corresponde.
[600ms]
[confident] Esta es la habilidad del examen: leer el requisito, detectar la restricción real y luego asociarla con la plataforma.
[600ms]
[encouraging] Cada pestaña nombra una restricción arriba, y la opción está debajo. Prueba las cuatro.

## Step 14 · Where it runs: four answers and four traps

[calm] Juntemos todo. Relaciona la restricción con la plataforma, no con el nombre de un producto.
[600ms]
[serious] Cada opción tiene una trampa que conviene recordar, así que presta atención a esas.
[600ms]
[reassuring] A Z 305 no nombra estos cuatro productos, pero respaldan sus habilidades de diseño de soluciones de cómputo y de migraciones. Prepárate para preguntas de escenarios en las que tienes que elegir.
