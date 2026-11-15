# Narrator Script — Compute · Hybrid and Specialised Compute: Arc, VMware, Azure Local, Service Fabric

**Source animation:** [HybridAndSpecialised.html](../../../journeys/Compute/HybridAndSpecialised.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/azure-arc/overview>
- <https://learn.microsoft.com/azure/azure-vmware/introduction>
- <https://learn.microsoft.com/azure/azure-local/overview>
- <https://learn.microsoft.com/azure/service-fabric/service-fabric-overview>

---

## Step 1 · Some workloads can’t move to a region

[calm] A Contoso quer usar o Azure, mas quatro das cargas de trabalho dela não podem ir para uma região padrão do Azure.
[600ms]
[curious] Cada uma tem um motivo próprio para ficar onde está, e cada uma tem uma resposta própria.
[600ms]
[confident] Então, a única pergunta desta página é simples: onde isso roda, e o que eu escolho?

## Step 2 · A spectrum: from in Azure to your own hardware

[calm] Imagine uma linha. O hardware do próprio Azure fica à esquerda, e o seu hardware fica à direita.
[600ms]
[curious] Cada opção cai em um ponto diferente. O Azure VMware Solution roda em datacenters do Azure, enquanto o Azure Local roda em hardware de parceiro no seu local.
[600ms]
[confident] O Arc sai da direita para gerenciar servidores onde quer que estejam, e o Service Fabric é uma plataforma, não um lugar.

## Step 3 · Azure Arc: projected into Azure, not moved

[calm] O Azure Arc não move nada. Ele dá a cada recurso fora do Azure um gêmeo no Azure Resource Manager.
[600ms]
[curious] Servidores, clusters Kubernetes e SQL continuam exatamente onde estão, mas agora cada um aparece no Azure como um recurso próprio.
[600ms]
[reassuring] Nos servidores, você instala o agente Connected Machine, e a máquina pode ficar em um grupo de recursos ao lado dos recursos nativos do Azure.

## Step 4 · What Arc gives you: Azure’s tools, on your servers

[confident] Quando um servidor vira um recurso do Azure, as ferramentas do Azure passam a valer para ele: inventário, Policy, Defender for Cloud, Azure Monitor e Update Manager.
[600ms]
[intrigued] A Policy consegue auditar as configurações dentro da máquina, e o Defender for Cloud consegue monitorar a máquina contra ameaças.
[600ms]
[reassuring] Os recursos do plano de controle do Arc para servidores não têm custo extra. Os serviços que você usa por cima são cobrados pelo preço de cada um.

## Step 5 · Azure VMware Solution: VMware, running in Azure

[calm] O Azure VMware Solution é uma nuvem privada feita de hosts bare-metal dedicados no Azure, rodando a stack da VMware.
[600ms]
[curious] Toda nuvem privada inclui vCenter Server, vSAN, vSphere e NSX, então a sua equipe de VMware continua com as ferramentas que já conhece.
[600ms]
[confident] Ele se conecta às suas redes virtuais do Azure e à sua rede on-premises por meio do ExpressRoute.

## Step 6 · Move VMs with VMware HCX

[calm] Para levar as VMs até lá, você usa o VMware HCX. Ele liga o seu vSphere on-premises à nuvem privada.
[600ms]
[impressed] As VMs se movem como VMs, por exemplo com vMotion ao vivo ou com migração a frio, então nada precisa ser replataformado no caminho.
[600ms]
[reassuring] Você implanta o conector no ambiente on-premises e o pareia com a nuvem. O HCX também pode estender uma rede pelos dois lados.

## Step 7 · Who manages what in Azure VMware Solution

[calm] A responsabilidade é dividida. A Microsoft cuida dos datacenters, dos hosts e do ciclo de vida do software VMware.
[600ms]
[serious] Ou seja, a Microsoft implanta, aplica patches e atualiza ESXi, vCenter, NSX e vSAN, e substitui os hosts que falham.
[600ms]
[confident] Você cuida de tudo o que roda por cima: rede e segurança do NSX, as suas VMs, os sistemas operacionais convidados e os aplicativos, além das migrações com HCX.

## Step 8 · Azure Local: Azure on your own hardware

[calm] O Azure Local leva o Azure para o seu próprio site. Ele mudou de nome: antes era Azure Stack HCI.
[600ms]
[curious] Lá roda hardware de parceiro, e o Azure Arc é o plano de controle que liga esse hardware de volta ao Azure.
[600ms]
[confident] Você usa o portal do Azure, a CLI e templates ARM, e pode adicionar Policy, Defender for Cloud e Azure Monitor. Há suporte tanto para implantações conectadas quanto desconectadas.

## Step 9 · What runs on Azure Local, and why there

[calm] No local, você pode rodar máquinas virtuais, Kubernetes pelo AKS habilitado pelo Arc e o Azure Virtual Desktop.
[600ms]
[curious] As pessoas escolhem o local por quatro motivos: baixa latência, continuar funcionando durante interrupções, manter os dados por perto e IA na origem.
[600ms]
[confident] Pense em linhas de produção de fábrica, em sistemas de execução de manufatura ou em regras rígidas de soberania e de regulamentação.

## Step 10 · Service Fabric: the state lives with the code

[calm] A principal diferença do Service Fabric é onde o estado fica. Um serviço sem estado guarda o estado em um armazenamento externo.
[600ms]
[curious] Um serviço com estado guarda o estado dentro dele, e a plataforma replica esse estado entre os nós. Existe uma réplica primária e várias secundárias.
[600ms]
[reassuring] As gravações vão para a primária e são copiadas. Se a primária falhar, uma secundária é promovida e uma nova é criada.

## Step 11 · Clusters, managed clusters and rolling upgrades

[calm] Um cluster do Service Fabric é um conjunto de nós que você pode criar no Azure, on-premises ou em outras nuvens.
[600ms]
[curious] Em um cluster gerenciado, o Azure cuida do conjunto de dimensionamento, do balanceador de carga, do IP público, do armazenamento e da rede, tudo atrás de um único recurso. Não existe caminho de migração a partir de um cluster existente, então você cria um novo.
[600ms]
[confident] Uma atualização gradual atualiza um domínio de cada vez, então o app continua no ar.

## Step 12 · Service Fabric next to AKS and Container Apps

[calm] Service Fabric, AKS e Container Apps rodam microsserviços.
[600ms]
[curious] Eles se diferenciam pela forma de guardar o estado, pelo que você usa para desenvolver e por onde o cluster pode ficar.
[600ms]
[serious] O Service Fabric tem estado embutido e modelos próprios, enquanto o AKS usa a API do Kubernetes. Em um projeto novo, confira as orientações atuais de cada serviço.

## Step 13 · Which one fits your constraint?

[curious] Agora é a sua vez. Escolha a restrição em que você está travado, e a opção correspondente acende.
[600ms]
[confident] Esta é a habilidade do exame: ler o requisito, identificar a restrição real e ligá-la à plataforma certa.
[600ms]
[encouraging] Cada aba traz uma restrição em cima, e a opção fica embaixo. Experimente as quatro.

## Step 14 · Where it runs: four answers and four traps

[calm] Vamos resumir. Ligue a restrição à plataforma, e não ao nome do produto.
[600ms]
[serious] Cada opção tem uma pegadinha para lembrar, então fique de olho nelas.
[600ms]
[reassuring] A A Z 305 não cita esses quatro produtos, mas eles sustentam as habilidades dela em projetar soluções de computação e migrações. Espere perguntas de cenário que obriguem você a escolher.
