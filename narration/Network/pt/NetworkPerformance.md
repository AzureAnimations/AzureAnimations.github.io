# Narrator Script — Network · Design for network performance: latency, throughput and the path

**Source animation:** [NetworkPerformance.html](../../../journeys/Network/NetworkPerformance.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/virtual-network/accelerated-networking-overview>
- <https://learn.microsoft.com/azure/frontdoor/front-door-traffic-acceleration>
- <https://learn.microsoft.com/azure/expressroute/about-fastpath>

---

## Step 1 · Is It Slow, or Is It Far?

[calm] A loja online da Contoso parece lenta para os clientes que estão longe da região onde ela está hospedada.
[600ms]
[curious] Latência é o tempo de ida e volta entre dois pontos. Throughput é quanto dado trafega por segundo. Perda de pacotes é a fatia de pacotes que nunca chegam.
[600ms]
[confident] Cada um tem uma correção diferente, então dê nome ao sintoma antes de escolher a solução.

## Step 2 · Measure First

[calm] O Connection Monitor testa latência e perda de pacotes ao longo do caminho e mostra tudo salto a salto.
[600ms]
[confident] O Network Insights mostra topologia, saúde e métricas dos recursos da sua rede, sem configuração nenhuma.
[600ms]
[curious] Para medir latência entre VMs, use o Latte no Windows ou o SockPerf no Linux. O ping comum usa ICMP, então não é o mesmo teste que TCP ou UDP.

## Step 3 · Keep Chatty VMs Close

[curious] VMs muito conversadoras pagam por cada ida e volta. Uma região é perto, e uma zona é mais perto ainda.
[600ms]
[reflective] Mas uma zona pode abranger vários datacenters, então máquinas na mesma zona ainda podem ficar a alguns saltos de distância.
[600ms]
[serious] Um grupo de posicionamento por proximidade mantém as máquinas em um único datacenter, com a menor latência. Em compensação, a alocação pode falhar, e você abre mão de um pouco de resiliência.

## Step 4 · Accelerated Networking

[calm] Normalmente, todo pacote passa pelo switch virtual do host.
[600ms]
[impressed] O Accelerated Networking deixa a placa de rede enviar o tráfego direto para a VM e aplica políticas, como os grupos de segurança de rede, no hardware.
[600ms]
[confident] Você ganha menos latência, menos jitter e menos uso de CPU. Ative nas duas VMs da mesma rede virtual, em um tamanho compatível, com a VM parada e desalocada.

## Step 5 · VM Size Sets the Ceiling

[calm] Cada tamanho de VM tem seu próprio limite de largura de banda de saída.
[600ms]
[serious] Esse limite conta todo o tráfego que sai da VM, para qualquer destino, e é compartilhado entre todas as placas de rede. Placas extras e o Accelerated Networking não aumentam esse limite.
[600ms]
[encouraging] Se você está batendo no teto, escolha um tamanho com mais largura de banda de rede.

## Step 6 · Edge Acceleration

[curious] Os locais de borda do Front Door e da CDN ficam perto dos seus usuários e entregam dali os arquivos em cache.
[600ms]
[confident] Para tráfego dinâmico, o split TCP encerra a conexão do usuário em uma borda próxima e reaproveita uma conexão mais duradoura até a origem.
[600ms]
[serious] Coloque em cache arquivos estáticos, nunca dados pessoais. E comece os novos projetos no Front Door, porque o Azure CDN clássico está sendo desativado.

## Step 7 · Pick Routing for Speed

[calm] Vários serviços conseguem levar os usuários ao lugar mais rápido, mas trabalham em camadas diferentes.
[600ms]
[confident] O Traffic Manager responde o DNS com o endpoint de menor latência. O Front Door recebe usuários HTTP e HTTPS em uma borda próxima.
[600ms]
[curious] Um balanceador de carga entre regiões dá aos aplicativos TCP e UDP um único IP global estático. Escolha uma aba para compará-los.

## Step 8 · Private Path to On-Premises

[calm] Um circuito privado tem largura de banda fixa, então dimensione para o tráfego de pico. Se o tráfego passar da capacidade, há perda de pacotes.
[600ms]
[confident] O FastPath deixa os dados pularem o gateway, que continua trocando rotas, e exige um SKU de gateway de alto desempenho.
[600ms]
[reassuring] O Global Reach conecta seus sites locais entre si pela rede da Microsoft.

## Step 9 · Where Inspection Adds Latency

[concerned] Passar o tráfego por um firewall no hub acrescenta um salto.
[600ms]
[confident] Fazer peering direto dos spokes sensíveis à latência não acrescenta salto nenhum, e é o recomendado para minimizar a latência.
[600ms]
[reflective] O Virtual WAN acrescenta um roteador de hub gerenciado pela Microsoft, e a intenção de roteamento pode trazer a inspeção de volta onde você precisar.

## Step 10 · All in One

[calm] Dê nome ao sintoma: latência, throughput ou perda de pacotes. Depois meça com o Connection Monitor e o Network Insights.
[600ms]
[confident] Depois corrija com posicionamento, placa de rede, tamanho da VM, a borda, roteamento ou um caminho privado, mudando uma coisa de cada vez.
[600ms]
[proud] Associe cada sintoma à sua correção, e você consegue recomendar uma solução que otimiza o desempenho da rede, uma habilidade do A Z 305.
