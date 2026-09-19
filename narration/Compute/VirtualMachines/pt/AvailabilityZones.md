# Narrator Script - VMs entre zonas de disponibilidade

**Source animation:** journeys/Compute/VirtualMachines/AvailabilityZones.html

**Script status:** Authored voiceover.

Delivery cues appear in brackets; pauses are on separate lines.

## Step 1 · What if a whole zone fails?

[curious] Os domínios de falha separavam o risco de um rack. Mas e se o problema for maior?
[800ms]
[serious] Uma falha de energia, refrigeração ou rede pode interromper uma localização inteira de datacenter.
[600ms]
[confident] As zonas de disponibilidade dão à Contoso separação nesse nível. Aqui criamos uma nova distribuição da loja, em vez de converter o conjunto de disponibilidade existente.

## Step 2 · Place one VM in a zone

[calm] Comece com uma única máquina zonal.
[600ms]
[confident] Fixar uma máquina virtual em uma zona informa ao Azure em qual localização fisicamente separada, dentro da região, ela deve executar.
[600ms]
[serious] Isso define apenas a localização. Escolher uma zona não cria uma segunda cópia automaticamente.

## Step 3 · Prepare VMs across zones

[determined] Por isso, a Contoso prepara a segunda instância de propósito.
[600ms]
[confident] Uma máquina e seus discos em uma zona, outra máquina com seus próprios discos em uma segunda zona, e a aplicação instalada e pronta nas duas.
[600ms]
[reassuring] Neste projeto, os discos também são zonais. Cada instância tem os seus, em vez de compartilhá-los.

## Step 4 · Configure resilient routing

[curious] As duas máquinas estão prontas, mas o tráfego ainda precisa chegar até elas.
[800ms]
[confident] Um Standard Load Balancer com frontend redundante entre zonas pode continuar funcionando após a perda de uma zona e enviar novas conexões aos backends aprovados pela sonda de integridade.
[600ms]
[reassuring] O frontend também precisa de redundância entre zonas. Caso contrário, você apenas mudou o ponto único de falha de lugar.

## Step 5 · Do not forget the data

[serious] Esta é a etapa que muita gente esquece.
[600ms]
[calm] Os discos gerenciados comuns não replicam, por conta própria, o estado da aplicação da loja entre as zonas.
[600ms]
[confident] O sistema que guarda os pedidos, seja banco de dados ou armazenamento compartilhado, precisa de uma decisão própria de resiliência, tomada separadamente.

## Step 6 · A zone goes unavailable

[curious] Agora simule a perda de uma zona e acompanhe o resultado.
[600ms]
[calm] As sondas detectam a falha, o frontend deixa de enviar trabalho para aquela zona e as novas conexões chegam à zona saudável.
[600ms]
[serious] Isso depende de capacidade de reserva para absorver a carga, de dados ainda disponíveis e de sondas configuradas corretamente.

## Step 7 · Zonal VMs - All in One

[reflective] Este projeto se apoia em quatro elementos que precisam funcionar juntos.
[600ms]
[confident] Localizações separadas, aplicações preparadas, roteamento redundante entre zonas e um plano para os dados.
[600ms]
[proud] Com os quatro bem preparados, a Contoso pode enfrentar a perda de uma zona sem precisar fechar a loja.
