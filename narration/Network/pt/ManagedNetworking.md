# Narrator Script — Network · Managed Networking — Virtual Network Manager and Route Server

**Source animation:** [ManagedNetworking.html](../../../journeys/Network/ManagedNetworking.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/virtual-network-manager/overview>
- <https://learn.microsoft.com/azure/virtual-network-manager/concept-security-admins>
- <https://learn.microsoft.com/azure/route-server/overview>
- <https://learn.microsoft.com/azure/route-server/route-server-faq>

---

## Step 1 · Many VNets, Managed by Hand

[calm] A Contoso não para de adicionar redes virtuais. Cada uma precisa dos seus próprios peerings e da sua própria cópia das regras de segurança.
[600ms]
[concerned] Os peerings são criados um a um, em cada região, e as cópias dos NSGs vão se distanciando aos poucos.
[600ms]
[serious] E cada nova VNet repete todo esse trabalho de novo.

## Step 2 · One Manager, One Scope

[calm] O Azure Virtual Network Manager agrupa, configura e implanta suas redes virtuais a partir de um só lugar.
[600ms]
[confident] O escopo dele é um grupo de gerenciamento ou uma lista de assinaturas, e esse é o limite do que ele consegue ver e alterar.
[600ms]
[curious] Uma VNet fora do escopo não é gerenciada. O fluxo segue uma ordem: escopo, grupos de rede, configurações e deploy.

## Step 3 · Network Groups Choose Who Gets What

[calm] Um grupo de rede é um contêiner de redes virtuais. As configurações têm o grupo como alvo, então todos os membros as recebem.
[600ms]
[curious] Na associação estática, você mesmo escolhe cada VNet. Na dinâmica, uma condição do Azure Policy, como uma tag, escolhe por você.
[600ms]
[confident] E uma VNet pode estar em vários grupos ao mesmo tempo.

## Step 4 · Connectivity, Defined Once

[calm] Uma configuração de conectividade escolhe a topologia de cada grupo.
[600ms]
[curious] O hub-and-spoke faz o peering de cada spoke com o hub. O mesh conecta cada VNet do grupo a todas as outras.
[600ms]
[confident] A conectividade direta adiciona uma malha entre os spokes de um grupo, para que eles se alcancem sem passar pelo hub. Aqui, Produção tem isso e Teste não.

## Step 5 · Security Admin Rules Go First

[calm] Regras de administrador são regras globais, de responsabilidade da equipe central de rede. Elas são avaliadas antes das regras de NSG, que ficam com as equipes de aplicativos.
[600ms]
[confident] Elas podem permitir, negar ou sempre permitir, e é isso que decide o tráfego.
[600ms]
[serious] Uma regra Permitir ainda deixa os NSGs decidirem. Já uma regra Negar ou Sempre permitir encerra a avaliação, então um NSG não consegue sobrescrevê-la.

## Step 6 · Nothing Applies Until You Deploy

[serious] Enquanto você não implanta, a configuração é só um plano.
[600ms]
[calm] Faça o commit das configurações nas regiões que você escolher. Implante aos poucos, uma região por vez, e só mudam as regiões em que você implantar.
[600ms]
[reassuring] O estado desejado é o conjunto das configurações implantadas mais a associação aos grupos. Para remover tudo de uma região, não implante nenhuma configuração nela.

## Step 7 · Change the Group, the Rules Follow

[curious] Experimente. Adicione ou remova uma rede virtual de um grupo.
[600ms]
[impressed] Depois de implantadas as configurações, um novo membro as recebe sem novo deploy, e um membro removido as perde. O peering, os links diretos e a regra de administrador acompanham a associação.
[600ms]
[reassuring] A associação estática é atualizada na hora. A dinâmica espera o Azure Policy, o que pode levar alguns minutos.

## Step 8 · Routes by Hand Go Stale

[calm] Um appliance virtual de rede, ou NVA, aprende rotas das filiais. Pode ser um dispositivo SD-WAN ou um firewall.
[600ms]
[concerned] Para usar essas rotas, alguém precisa editar as tabelas de rotas, as UDRs, toda vez que uma rota muda.
[600ms]
[serious] Um prefixo novo fica sem rota até alguém adicioná-lo. Essa é a lacuna.

## Step 9 · Azure Route Server in Its Own Subnet

[calm] O Route Server é um serviço gerenciado, em uma sub-rede dedicada chamada RouteServerSubnet, barra vinte e seis ou maior.
[600ms]
[confident] Seu NVA faz peering com ele por BGP, e você faz peering com as duas instâncias dele. Qualquer NVA que aceite BGP consegue fazer isso.
[600ms]
[impressed] A vantagem é não precisar manter UDRs para as rotas que o NVA aprende.

## Step 10 · Routes Flow In and Out Automatically

[curious] O NVA anuncia os prefixos que conhece. O Route Server programa essas rotas na rede virtual, e os prefixos da VNet voltam no sentido contrário.
[600ms]
[confident] Ele só troca rotas.
[600ms]
[reassuring] Os dados nunca passam pelo Route Server. O tráfego vai direto entre a VM e o NVA.

## Step 11 · Gateways and Branch-to-Branch

[calm] Por padrão, cada componente troca rotas só com o Route Server.
[600ms]
[curious] Ative a troca de rotas, e o Route Server repassa rotas entre o NVA, o gateway VPN e o gateway ExpressRoute. Aí os sites on-premises conseguem se alcançar entre si pelo Azure.
[600ms]
[serious] Os gateways precisam estar na mesma VNet do Route Server. Circuito a circuito não é transportado, então use o Global Reach para isso.

## Step 12 · Which Tool for Which Job?

[curious] As mesmas redes, mas funções diferentes. Associe a pergunta que você está fazendo ao serviço que a responde.
[600ms]
[confident] Muitas VNets suas apontam para o Virtual Network Manager, com o Azure Policy para grupos baseados em tag. Um hub gerenciado aponta para o Virtual WAN.
[600ms]
[calm] Para rotas, use UDRs para caminhos fixos e o Route Server para aprender rotas por BGP.

## Step 13 · Managed Networking, All in One

[calm] O Virtual Network Manager administra muitas VNets de forma consistente, com escopo, grupos, conectividade, regras de administrador e deploy.
[600ms]
[confident] O Azure Route Server permite que NVAs e gateways aprendam rotas sem tabelas editadas à mão, usando a RouteServerSubnet, o peering BGP e a troca de rotas.
[600ms]
[proud] Esses são os tópicos do A Z 700, mais o design de rede do A Z 305. Os guias de estudo são a próxima parada.
