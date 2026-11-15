# Narrator Script — Network · Azure Front Door: endpoints, origins, rules and private origins

**Source animation:** [FrontDoorDeepDive.html](../../../journeys/Network/FrontDoorDeepDive.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/frontdoor/front-door-routing-architecture>
- <https://learn.microsoft.com/azure/frontdoor/private-link>
- <https://learn.microsoft.com/azure/web-application-firewall/afds/afds-overview>

---

## Step 1 · What Front Door adds

[calm] Três serviços, três funções. O Traffic Manager responde via DNS, no nível do domínio, então o failover depende do cache e do tempo de vida.
[600ms]
[confident] O Application Gateway é um proxy regional de camada sete, dentro da sua rede.
[600ms]
[impressed] O Azure Front Door é o ponto de entrada global de camada sete na borda da Microsoft, com offload de TLS, roteamento por caminho, cache e failover rápido.

## Step 2 · Standard vs Premium: what each buys

[curious] O Front Door tem dois níveis. Os dois roteiam globalmente, fazem cache, executam o mecanismo de regras e aceitam regras personalizadas de WAF.
[600ms]
[confident] Só o Premium acrescenta conjuntos de regras de WAF gerenciados pela Microsoft, proteção contra bots e Private Link até uma origem.
[600ms]
[encouraging] O Classic está sendo desativado, então comece os novos projetos no Standard ou no Premium. Clique em uma necessidade na matriz para ver qual nível atende.

## Step 3 · Endpoints, routes and origin groups

[calm] Um endpoint agrupa as rotas dos seus domínios. O Front Door gera um nome de domínio para ele, e você pode adicionar seus próprios domínios personalizados.
[600ms]
[confident] Uma rota combina um domínio e um padrão de caminho, e então envia a solicitação para um grupo de origem.
[600ms]
[reassuring] Um grupo de origem é um conjunto de origens, como um app do App Service, um armazenamento ou qualquer host, que são sondadas e balanceadas juntas.

## Step 4 · Health probes and latency routing

[curious] Cada localização de borda sonda cada origem. Uma origem com problema sai da escolha.
[600ms]
[confident] Aí o Front Door vai afunilando, nesta ordem: origens saudáveis, depois prioridade, depois latência e, por fim, peso.
[600ms]
[reflective] O método padrão é a menor latência, então a solicitação vai para a origem saudável mais rápida. Os números aqui são só ilustração.

## Step 5 · Caching and compression

[calm] Com o cache ligado em uma rota, a borda guarda uma cópia da resposta de um GET.
[600ms]
[confident] O próximo cliente recebe a resposta direto da borda, sem chamar a origem. A compressão também deixa a resposta menor.
[600ms]
[serious] Nunca coloque conteúdo pessoal em cache. Para qualquer coisa dinâmica, use uma rota separada com o cache desligado e, quando precisar atualizar, faça o purge dos caminhos.

## Step 6 · Traffic acceleration: edge and split TCP

[curious] Primeiro, o DNS leva o cliente até uma boa localização de borda.
[600ms]
[confident] Essa borda encerra a conexão TCP do cliente bem perto dele. É o split TCP: as idas e vindas lentas do início da conexão ficam curtas.
[600ms]
[impressed] Uma conexão longa e separada com a origem é aberta antes e reaproveitada por vários clientes.

## Step 7 · TLS at the edge and end to end

[calm] O Front Door encerra o TLS do cliente na borda, aplica roteamento e regras e abre uma segunda conexão TLS com a origem.
[600ms]
[confident] Defina HTTPS como protocolo de encaminhamento para ter criptografia de ponta a ponta.
[600ms]
[reassuring] Para um domínio personalizado, use um certificado gerenciado ou traga o seu do Key Vault. T L S 1 ponto dois e 1 ponto três são aceitos.

## Step 8 · Rules: rewrite, redirect, headers

[curious] Um conjunto de regras roda depois do WAF e da correspondência da rota, antes de a solicitação seguir adiante.
[600ms]
[confident] Uma regra tem condições de correspondência, que precisam ser todas verdadeiras, e ações.
[600ms]
[encouraging] As ações mais comuns são um redirecionamento de URL, uma reescrita de URL e mudanças nos cabeçalhos da solicitação ou da resposta.

## Step 9 · Secure an origin with Private Link

[calm] O Premium consegue chegar a uma origem por Private Link, que é a opção privada.
[600ms]
[confident] O Front Door pede um endpoint privado, a solicitação aparece na origem como pendente, e você aprova.
[600ms]
[proud] Depois disso, o tráfego fica no backbone da Microsoft, e a origem não precisa estar acessível pela internet pública.

## Step 10 · WAF policy and rule sets

[calm] Uma política de WAF verifica cada solicitação na borda, perto de onde ela se origina.
[600ms]
[confident] As regras personalizadas rodam primeiro, em ordem de prioridade, e depois os conjuntos de regras gerenciadas. O Standard só aceita regras personalizadas, e o Premium acrescenta conjuntos gerenciados e proteção contra bots.
[600ms]
[proud] Rode no modo de detecção para registrar em log, ou no modo de prevenção para agir, e anexe a política ao perfil, ao domínio ou à rota. Isso cobre a habilidade A Z 700 do Front Door.
