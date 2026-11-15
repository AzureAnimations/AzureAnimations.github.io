# Narrator Script — Network · Service Endpoints, Private Endpoints and Delegation

**Source animation:** [EndpointsAndDelegation.html](../../../journeys/Network/EndpointsAndDelegation.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/virtual-network/virtual-network-service-endpoints-overview>
- <https://learn.microsoft.com/azure/virtual-network/virtual-network-service-endpoint-policies-overview>
- <https://learn.microsoft.com/azure/virtual-network/subnet-delegation-overview>
- <https://learn.microsoft.com/azure/virtual-network/vnet-integration-for-azure-services>

---

## Step 1 · PaaS answers on a public address

[calm] Contoso tem uma VM na vnet-app, e ela precisa acessar Armazenamento, SQL e Key Vault.
[600ms]
[curious] Esses serviços respondem em um endpoint público. Sua VM consegue usá-lo, mas qualquer outra rede também, até você adicionar regras.
[600ms]
[serious] Os endereços aqui são faixas de documentação, não endereços reais. O ponto é: público por padrão significa aberto, até você dizer o contrário.

## Step 2 · Three doors to the same service

[curious] Existem três jeitos de chegar ao mesmo serviço. Você mantém o endereço público e filtra o acesso, dá a uma sub-rede um atalho até ele, ou coloca um IP privado na frente.
[600ms]
[confident] Cada porta atende a uma necessidade diferente, então nenhuma é simplesmente melhor que a outra.
[600ms]
[calm] A delegação de sub-rede é outra tarefa. Ela deixa um serviço viver dentro da sua sub-rede, e veremos isso mais adiante.

## Step 3 · Service endpoint: switch it on for a subnet

[calm] O endpoint de serviço é ativado por sub-rede. Aí o tráfego dessa sub-rede vai até o serviço pelo backbone do Azure.
[600ms]
[impressed] Agora o serviço enxerga o endereço privado da sub-rede, então uma regra de VNet consegue liberar exatamente essa sub-rede.
[600ms]
[serious] O serviço continua com o IP público e o nome DNS público. E ativar ou remover o endpoint reinicia, por um instante, as conexões abertas nessa sub-rede.

## Step 4 · A service endpoint stops at the subnet

[calm] Endpoints de serviço só ajudam com o tráfego que parte de uma sub-rede.
[600ms]
[concerned] O tráfego do ambiente local chega de endereços NAT públicos, então o endpoint nunca o enxerga. Aí você precisa de uma regra de IP ou de um endpoint privado.
[600ms]
[reassuring] Com o ExpressRoute Microsoft peering, libere no firewall de IP do recurso os endereços NAT que você usa.

## Step 5 · Endpoint policies narrow it to your accounts

[curious] Um endpoint de serviço chega ao serviço inteiro, inclusive às contas de todos os outros clientes. É um alcance maior do que a maioria das pessoas imagina.
[600ms]
[confident] Uma política de endpoint de serviço lista as contas de armazenamento que sua sub-rede pode acessar e bloqueia o resto.
[600ms]
[serious] É uma lista de permissões, então inclua todas as contas de que o app depende. Ela vale para o Azure Storage, mas não para contas clássicas.

## Step 6 · Private endpoint: a private IP for one resource

[calm] Um endpoint privado coloca na sua sub-rede uma interface de rede com um IP privado e a associa a um único recurso, pelo nome.
[600ms]
[confident] O Private Link transporta o tráfego. Mas o DNS precisa devolver esse IP privado, senão os clientes continuam indo para o endereço público.
[600ms]
[reassuring] Isto é só um resumo. A lição de DNS e Private Link detalha a zona DNS privada e o link da VNet.

## Step 7 · Service endpoint or private endpoint?

[curious] Coloque os dois lado a lado, e as diferenças que decidem a escolha ficam evidentes.
[600ms]
[calm] Os dois mantêm o tráfego de Azure para Azure no backbone do Azure.
[600ms]
[confident] A Microsoft recomenda o Private Link sempre que dá para usá-lo. Os endpoints de serviço continuam úteis quando você quer a opção simples, sem custo extra.

## Step 8 · Which door should the VNet use?

[curious] Escolha a necessidade mais próxima da sua, e a porta certa aparece, com uma imagem e as perguntas que decidem a escolha.
[600ms]
[calm] Você precisa de acesso a partir do ambiente local? Só de uma conta? De um endereço privado?
[600ms]
[reflective] Na prática, os projetos costumam combinar as duas opções: endpoints privados para dados de produção e endpoints de serviço para uma sub-rede de desenvolvimento de baixo risco.

## Step 9 · Subnet delegation: let a service live in your subnet

[calm] Os endpoints deixam sua VNet alcançar um serviço. A delegação faz o caminho inverso: deixa um serviço se instalar dentro da sua sub-rede.
[600ms]
[confident] Você indica a sub-rede, e o serviço cria ali os próprios recursos.
[600ms]
[serious] Cada serviço tem suas regras. Alguns exigem uma sub-rede dedicada, outros definem um tamanho mínimo, então consulte a documentação antes de planejar o espaço de endereçamento.

## Step 10 · Three ways this goes wrong

[concerned] A maioria dos chamados em que parece que deveria funcionar se resume a três causas.
[600ms]
[curious] Verifique a sub-rede, o tipo de regra e a resposta do DNS. O tráfego vem da sub-rede certa? Você usou uma regra de VNet onde precisava de uma regra de IP? O nome resolve para o endereço privado?
[600ms]
[serious] Ativar ou desativar um endpoint de serviço fecha as conexões TCP abertas nessa sub-rede, então faça isso fora de momentos críticos.

## Step 11 · Reaching PaaS privately, at a glance

[calm] Aqui está o quadro completo. Escolha a porta pela necessidade: endpoint de serviço, política de endpoint de serviço ou endpoint privado.
[600ms]
[confident] Depois, acrescente a delegação quando um serviço precisar viver dentro da sua sub-rede.
[600ms]
[reassuring] Na sequência, a lição de DNS e Private Link mostra a parte de DNS dos endpoints privados.
