# Narrator Script — Network · DNS Private Resolver and Hybrid DNS

**Source animation:** [DnsPrivateResolver.html](../../../journeys/Network/DnsPrivateResolver.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/dns/dns-private-resolver-overview>
- <https://learn.microsoft.com/azure/dns/private-resolver-endpoints-rulesets>
- <https://learn.microsoft.com/azure/dns/private-resolver-hybrid-dns>
- <https://learn.microsoft.com/azure/dns/private-resolver-architecture>

---

## Step 1 · The network works. The names don't.

[calm] O datacenter da Contoso está conectado ao Azure por VPN ou ExpressRoute, e o link está de pé.
[600ms]
[concerned] Mesmo assim, cada lado roda o seu próprio DNS. O on-premises não enxerga os nomes privados do Azure, e o Azure não enxerga corp dot contoso dot local.
[600ms]
[curious] A conexão leva os pacotes, mas alguma coisa ainda precisa levar as perguntas.

## Step 2 · The old answer: DNS servers you run

[calm] A resposta antiga eram máquinas virtuais encaminhadoras de DNS no Azure. O on-premises encaminha os nomes do Azure para elas.
[600ms]
[curious] Depois, as redes virtuais apontam o DNS personalizado delas para essas máquinas, e a lacuna é fechada.
[600ms]
[serious] Funciona, mas agora você precisa manter servidores. Isso significa aplicar patches, garantir disponibilidade, cuidar de licenças e fazer mudanças manuais a cada atualização de DNS.

## Step 3 · Swap the servers for a service

[calm] O Azure DNS Private Resolver é um serviço totalmente gerenciado e altamente disponível.
[600ms]
[confident] Não há máquinas de DNS para implantar, atualizar ou escalar, nem configurações de cliente DNS para mudar nas suas VMs.
[600ms]
[reassuring] Ele precisa de uma rede virtual, mais ExpressRoute ou uma VPN. Todo o resto é configuração, por meio de endpoints e regras.

## Step 4 · Inbound endpoint: the door into Azure

[calm] Um endpoint de entrada é um endereço IP privado na sua rede virtual, em uma sub-rede dedicada só dele.
[600ms]
[confident] O DNS on-premises encaminha para ele os nomes privados do Azure, e o Azure DNS responde com base nas zonas privadas vinculadas àquela rede.
[600ms]
[curious] No on-premises, você cria um encaminhador condicional para a zona, apontando para esse endereço.

## Step 5 · Outbound endpoint: the door out of Azure

[calm] Um endpoint de saída envia consultas do Azure para o on-premises, para outra nuvem ou para qualquer servidor DNS externo.
[600ms]
[curious] Ele tem uma sub-rede dedicada própria, mas não tem endereço IP próprio, e isso é proposital.
[600ms]
[confident] Mas ele não decide para onde a consulta vai. Isso é trabalho de um conjunto de regras de encaminhamento.

## Step 6 · Forwarding rulesets: which domain goes where

[calm] Um conjunto de regras de encaminhamento de DNS é uma lista de regras. Cada regra diz: para este domínio, pergunte a estes servidores DNS.
[600ms]
[confident] Por exemplo, corp dot contoso dot local vai para o seu servidor DNS on-premises, na porta cinquenta e três.
[600ms]
[serious] Quando várias regras correspondem a um nome, vence o sufixo mais longo. O conjunto de regras fica associado a um endpoint de saída, que manda a consulta adiante.

## Step 7 · Ruleset links: put the rules to work

[calm] Vincule um conjunto de regras a uma rede virtual, e as VMs dela passam a usar essas regras. Você não muda nenhuma configuração de DNS.
[600ms]
[curious] Uma regra que aponta para o endpoint de entrada até permite que um spoke resolva zonas privadas que ficam no hub.
[600ms]
[reassuring] As redes vinculadas não precisam fazer peering com a rede do resolver, embora em hub-and-spoke normalmente façam.

## Step 8 · Where the resolver sits in hub-and-spoke

[calm] Coloque o resolver no hub. Os spokes podem então chegar a ele de duas formas.
[600ms]
[confident] No modelo distribuído, cada spoke continua no DNS fornecido pelo Azure e usa vínculos de conjunto de regras. No centralizado, o DNS personalizado de cada spoke aponta para o endpoint de entrada.
[600ms]
[serious] Os dois modelos exigem que a rede do hub esteja vinculada à zona privada.

## Step 9 · Private endpoints across the tunnel

[calm] Os clientes on-premises chegam a um private endpoint pelo nome normal, como contosodata dot blob dot core dot windows dot net.
[600ms]
[serious] Encaminhe o nome da zona pública, blob dot core dot windows dot net, e não a versão privatelink.
[600ms]
[impressed] O Azure adiciona um CNAME para o nome privatelink, e a zona privada do hub responde com o IP privado do endpoint.

## Step 10 · Trace a query through the resolver

[excited] Escolha uma consulta e veja por onde ela vai. Depois, selecione qualquer hop numerado para ver o que acontece ali.
[600ms]
[calm] Os nomes de VMs do Azure passam pelo Azure DNS e pelos vínculos do conjunto de regras. Os nomes on-premises entram pelo endpoint de entrada.
[600ms]
[impressed] E o resolver é a única peça que você não precisou montar.

## Step 11 · Resolver, private zones, Firewall DNS proxy

[calm] Esses três parecem iguais e se sobrepõem, mas cada um tem uma função diferente.
[600ms]
[curious] Uma zona privada guarda os registros. O resolver encaminha consultas entre redes, nos dois sentidos. Um DNS proxy de firewall cuida da filtragem e do encaminhamento.
[600ms]
[confident] Eles combinam bem, com o firewall acrescentando filtragem por nome de domínio nas suas regras.

## Step 12 · Hybrid DNS, nothing to patch

[calm] Um resolver gerenciado substitui as suas máquinas virtuais de DNS.
[600ms]
[confident] O endpoint de entrada responde às consultas do on-premises. O endpoint de saída e os conjuntos de regras tratam as consultas do Azure, e os vínculos aplicam as regras às suas redes.
[600ms]
[proud] Para a prova, saiba qual endpoint atende cada sentido e onde o resolver fica em hub-and-spoke.
