# Narrator Script — Network · Outbound Connectivity: Public IPs, SNAT and NAT Gateway

**Source animation:** [OutboundConnectivity.html](../../../journeys/Network/OutboundConnectivity.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/nat-gateway/nat-overview>
- <https://learn.microsoft.com/azure/nat-gateway/nat-gateway-resource>
- <https://learn.microsoft.com/azure/virtual-network/ip-services/default-outbound-access>

---

## Step 1 · Which Address Do My VMs Call From?

[calm] As VMs de aplicativo da Contoso só têm endereços privados, e um endereço privado não é acessível pela internet.
[600ms]
[curious] O parceiro deles, a Fabrikam, só aceita chamadas de API vindas de um endereço público autorizado. Então, o que a Fabrikam vai enxergar de verdade?
[600ms]
[confident] Três perguntas guiam esta lição: de qual endereço as chamadas saem, quantas conexões as VMs conseguem manter abertas e o que mudou no acesso de saída padrão.

## Step 2 · Default Outbound Access

[calm] Se você não configurar nada, o Azure dá a cada VM, sem avisar, um IP público de saída implícito.
[600ms]
[serious] Esse IP não é um recurso seu. A Microsoft é dona do endereço e pode mudá-lo sem aviso, e ele não aceita ping nem pacotes fragmentados.
[600ms]
[concerned] É um risco real: no momento em que o endereço muda, a lista de permissões da Fabrikam deixa de bater e as chamadas falham.

## Step 3 · What Changed: Private Subnets

[curious] Esta é a grande mudança. As novas redes virtuais agora vêm com sub-redes privadas por padrão, ou seja, sem nenhum IP de saída padrão.
[600ms]
[calm] As redes existentes não são alteradas. As VMs delas continuam com a saída padrão até você tornar a sub-rede privada e desalocar as VMs.
[600ms]
[confident] De qualquer forma, a direção é clara: para tudo que for novo, planeje um método de saída explícito, como um gateway NAT.

## Step 4 · Public IPs: Standard, Static, Zone-Aware

[calm] Um método de saída explícito começa com um IP público, e o que você deve usar é o Standard.
[600ms]
[confident] Ele é estático, pode ser redundante entre zonas ou zonal e continua fechado para tráfego de entrada até você liberar. O Standard v2 é sempre redundante entre zonas.
[600ms]
[serious] O SKU Basic foi desativado em trinta de setembro de dois mil e vinte e cinco, então atualize os que ainda restarem.

## Step 5 · SNAT: When Ports Run Out

[calm] Muitas VMs compartilham um único IP público por meio do SNAT, que troca o endereço e a porta de origem privados por um endereço e uma porta públicos.
[600ms]
[curious] Cada conexão ativa para o mesmo endereço e porta de destino precisa da sua própria porta de origem, então esse pool é finito.
[600ms]
[concerned] Quando as portas acabam, novas conexões para esse destino falham. Reaproveite conexões, adicione endereços ou use um gateway NAT.

## Step 6 · Attach a NAT Gateway

[confident] A solução é associar um gateway NAT à sub-rede. Agora, toda VM dessa sub-rede sai pelo IP público estático do gateway.
[600ms]
[calm] Não há rotas para editar nem IPs públicos nas VMs, e ele é só de saída, então conexões de entrada não solicitadas são bloqueadas.
[600ms]
[impressed] As portas são distribuídas sob demanda entre todas as VMs, o que deixa o esgotamento bem menos provável.

## Step 7 · More Addresses: IPs and Prefixes

[curious] Cada IP público que você adiciona ao gateway NAT coloca mais portas no pool compartilhado.
[600ms]
[confident] Um prefixo de IP público é uma faixa contígua de IPs públicos Standard, então a Fabrikam pode liberar uma faixa só, em vez de vários endereços avulsos.
[600ms]
[reflective] Escolha o tamanho do prefixo com cuidado, porque depois não dá para redimensioná-lo.

## Step 8 · Bring Your Own IP Range

[calm] A Contoso pode já ter uma faixa de endereços públicos própria e pode trazer essa faixa para o Azure.
[600ms]
[confident] Você a registra em um registro regional da internet, valida, provisiona e comissiona. Não dá para associar o prefixo personalizado diretamente, então você deriva dele os IPs e os prefixos públicos.
[600ms]
[proud] A vantagem é que a Contoso mantém a reputação dos seus endereços e as listas de permissões que já existem.

## Step 9 · Which Outbound Method Wins?

[curious] O que acontece quando uma sub-rede tem vários métodos de saída ao mesmo tempo? Existe uma ordem clara.
[600ms]
[calm] Primeiro vence uma rota para um appliance ou gateway. Depois vem o gateway NAT, depois um IP no nível da instância, depois as regras de saída do balanceador de carga e, por último, a rota padrão.
[600ms]
[serious] Os fluxos existentes mantêm o método antigo, só as novas conexões mudam, e recursos do SKU Basic não funcionam com um gateway NAT.

## Step 10 · NAT Gateway: Zones and Idle Timeout

[calm] Um gateway NAT Standard fica em uma zona. Você escolhe a zona, ou escolhe nenhuma e o Azure a define, e depois não dá para mudar.
[600ms]
[confident] O StandardV2 é redundante entre todas as zonas e exige IPs públicos StandardV2.
[600ms]
[curious] Fluxos ociosos são descartados depois de um tempo limite que você pode ajustar para TCP. Qualquer atividade, como um keepalive, zera o contador, mas o tempo limite do UDP é fixo.

## Step 11 · Pick Your Outbound Method

[curious] Em vez de começar pelo produto, comece pela necessidade. Selecione uma, e o diagrama mostra o método, o caminho dele e o que observar.
[600ms]
[confident] Na maioria dos cenários, a Microsoft recomenda um gateway NAT. Um firewall acrescenta inspeção, e você chega até ele por uma rota.
[600ms]
[serious] O acesso de saída padrão não é recomendado para produção.

## Step 12 · Outbound Connectivity, All in One

[calm] Agora as VMs privadas da Contoso saem por uma sub-rede privada e um gateway NAT, usando IPs estáticos Standard.
[600ms]
[confident] As três respostas: o endereço é um IP estático Standard, um prefixo ou a sua própria faixa. As conexões usam portas SNAT, alocadas sob demanda. E as novas redes virtuais usam sub-redes privadas por padrão.
[600ms]
[proud] A Fabrikam libera uma única faixa na lista de permissões, e as chamadas da Contoso sempre chegam de um endereço conhecido.
