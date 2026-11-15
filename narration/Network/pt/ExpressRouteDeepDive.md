# Narrator Script — Network · ExpressRoute: models, SKUs, peerings and resilience

**Source animation:** [ExpressRouteDeepDive.html](../../../journeys/Network/ExpressRouteDeepDive.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/expressroute/expressroute-introduction>

---

## Step 1 · What a Circuit Really Is

[calm] A Contoso pede um circuito ExpressRoute. É um par de links que um provedor de conectividade entrega à Microsoft.
[600ms]
[curious] O circuito é identificado por uma chave de serviço, um G U I I D que não é segredo.
[600ms]
[confident] A largura de banda é fixa, e todos os peerings do circuito dividem essa capacidade.

## Step 2 · Connectivity Models

[curious] A Contoso pode chegar ao mesmo circuito de três maneiras, todas via provedor: um cloud exchange, um link Ethernet ponto a ponto ou uma VPN IP any-to-any.
[600ms]
[confident] O modelo define como é o caminho e quem cuida do roteamento.
[600ms]
[reflective] Com um provedor de Camada Dois, o roteamento fica por sua conta. Com Camada Três gerenciada, o provedor cuida disso para você.

## Step 3 · SKU and Tier

[calm] A Contoso escolhe o SKU do circuito conforme a distância que ele precisa alcançar.
[600ms]
[confident] O Local chega às regiões próximas ao local de peering. O Standard chega a todas as regiões da área geopolítica. O Premium chega a todas as regiões do mundo, com limites mais altos.
[600ms]
[reassuring] Depois, escolha um plano de dados: com medição ou ilimitado. Dá para migrar do plano com medição para o ilimitado, mas não o contrário.

## Step 4 · Private Peering

[calm] O peering privado liga a rede da Contoso aos endereços privados de uma rede virtual.
[600ms]
[confident] Você reserva duas sub-redes pequenas, uma para cada link, e escolhe uma VLAN e o seu A S N. O lado da Microsoft usa um A S N próprio.
[600ms]
[serious] As sub-redes de peering não podem se sobrepor à sua rede virtual. Para chegar até ela, adicione um gateway na sub-rede do gateway e uma conexão com o circuito.

## Step 5 · Microsoft Peering and Route Filters

[curious] O Microsoft peering alcança endpoints públicos, como o Microsoft três sessenta e cinco e os serviços de plataforma do Azure.
[600ms]
[confident] Os prefixos de cada serviço carregam comunidades BGP, e um filtro de rota é uma lista de permissão dessas comunidades.
[600ms]
[serious] Enquanto nenhum filtro estiver associado, um circuito novo não anuncia prefixo nenhum.

## Step 6 · Route Advertisement and BGP Communities

[calm] A Contoso anuncia prefixos por BGP. A Microsoft marca com comunidades as rotas que devolve e ignora qualquer tag que você adicionar.
[600ms]
[curious] Quando o mesmo prefixo chega por dois circuitos, o Azure prefere a rota mais específica.
[600ms]
[confident] Você também pode direcionar o tráfego pelo peso da conexão, ou fazendo prepend do caminho S A no outro circuito. Com rotas idênticas, o Azure balanceia a carga entre os dois.

## Step 7 · Resilience Design

[serious] A Contoso elimina os pontos únicos de falha, uma camada por vez.
[600ms]
[confident] Cada circuito tem dois links ativo-ativo, então termine cada um em um dispositivo diferente. Adicione um segundo circuito em outro local de peering para resistir a uma queda de local.
[600ms]
[reassuring] Termine com um gateway ExpressRoute com redundância de zona, para que o gateway não vire o elo fraco.

## Step 8 · Global Reach and FastPath

[curious] O Global Reach conecta os escritórios da Contoso pelos circuitos deles, e os sites trocam dados pela rede global da Microsoft.
[600ms]
[confident] O FastPath faz os dados pularem o gateway e irem direto para as máquinas virtuais. O gateway continua trocando rotas.
[600ms]
[reflective] O FastPath exige um SKU de gateway de alto desempenho, e o Global Reach entre regiões exige o Premium.

## Step 9 · ExpressRoute Direct and Encryption

[calm] O ExpressRoute Direct conecta os roteadores da Contoso direto à Microsoft, com portas duplas, para ingestão de grandes volumes de dados ou isolamento físico.
[600ms]
[serious] Por padrão, o tráfego não vai criptografado.
[600ms]
[confident] O MAC sec protege o link físico e só funciona no Direct, com a sua chave no Key Vault. O IPsec protege o caminho inteiro, de ponta a ponta. Dá para usar os dois juntos.

## Step 10 · Bidirectional Forwarding Detection

[concerned] Quando um link cai, só o BGP pode levar até cerca de três minutos para perceber.
[600ms]
[impressed] A Detecção de Encaminhamento Bidirecional verifica o link o tempo todo e percebe a falha em menos de um segundo.
[600ms]
[reflective] Do lado da Microsoft, ela já vem ativada por padrão nos novos peerings, mas nos seus próprios dispositivos você precisa configurar. A detecção fica mais rápida, mas o failover completo ainda leva um tempo.

## Step 11 · Diagnose a Circuit

[serious] O Azure não consegue alcançar uma sub-rede da Contoso. Trabalhe de baixo para cima.
[600ms]
[confident] Comece pelo circuito: ele precisa estar Ativado, e o status do provedor, Provisionado. Depois confira se os valores de peering batem nos dois lados e olhe a tabela A R P nos dois caminhos.
[600ms]
[determined] Termine com o estado do BGP e a tabela de rotas. Um estado Ativo ou Ocioso indica divergência nas sub-redes, na VLAN, nos A S Ns ou na chave M D 5.
