# Load balancing — narração (pt)

## Step 1 · One name, many servers

[calm] Os usuários digitam um único endereço. Atrás dele existem muitas instâncias — em uma região, ou em várias.
[500ms]
[confident] Alguma coisa precisa escolher qual delas responde, e parar de mandar gente para uma instância que caiu.
[400ms]
[curious] E o Azure não tem um balanceador de carga. Tem quatro. Escolher o errado normalmente não é fatal, mas custa latência, ou recursos, ou um ponto único de falha em uma única região.

## Step 2 · Two questions decide it

[confident] A Microsoft categoriza esses serviços em exatamente dois eixos.
[500ms]
[calm] O tráfego é global ou regional? E é HTTP, ou é qualquer protocolo?
[400ms]
[helpful] Responda nessa ordem. Primeiro o escopo: um serviço global na frente de um regional é um desenho normal e saudável. Já um serviço regional fingindo ser global faz todos os usuários passarem por uma única região.

## Step 3 · Four services, four quadrants

[calm] Junte os dois eixos e cada serviço cai no seu próprio quadrante.
[500ms]
[confident] Essa grade é o mapa. Os próximos quatro passos percorrem ela, um quadrado de cada vez.
[400ms]
[helpful] Duas ressalvas honestas que a grade simplifica: o Azure Load Balancer também tem um front-end entre regiões, e o Application Gateway faz proxy de TCP e TLS além de HTTP. A grade mostra onde cada um é a escolha recomendada.

## Step 4 · Azure Load Balancer

[confident] O Azure Load Balancer é um serviço de camada quatro para todo o tráfego TCP e UDP.
[500ms]
[calm] Ele foi feito para throughput altíssimo e latência ultrabaixa, e repassa os pacotes em vez de encerrá-los.
[400ms]
[helpful] Esse é o detalhe-chave: a conexão do cliente chega ao próprio servidor de back-end. É o que mantém a latência tão baixa — e é também por isso que ele não consegue ler um caminho de URL.

## Step 5 · Contoso, balanced at Layer 4

[calm] Veja isso em uma arquitetura real.
[500ms]
[confident] Um Load Balancer público recebe o tráfego da internet, e dois internos ficam na frente das camadas seguintes. Cada salto aqui é TCP — nada nesta imagem lê uma URL.
[400ms]
[helpful] Conte com atenção: são três balanceadores de carga, não um. Só o primeiro tem um front-end público. Os dois internos usam IPs privados, então nada por trás da camada web é alcançável a partir da internet.

## Step 6 · Application Gateway

[confident] O Application Gateway é um proxy reverso regional.
[500ms]
[calm] Ele encerra a conexão, lê a requisição HTTP e decide para onde ela vai — pelo caminho da URL, ou pelo nome do host.
[400ms]
[helpful] Como ele encerra o TLS, consegue fazer o que um balanceador de camada quatro não faz: inspecionar a requisição, passar um WAF sobre ela, reescrever cabeçalhos e enviar caminhos diferentes para pools diferentes.

## Step 7 · One hostname, three back-end pools

[calm] Um único nome de host resolve para um único Application Gateway.
[500ms]
[confident] Ele encerra o TLS, passa o WAF sobre a requisição e então lê o caminho, escolhendo um backend pool diferente para cada parte do site.
[400ms]
[helpful] Essa é a jogada que um balanceador de camada quatro não consegue fazer. Barra api e barra images chegam pela mesma conexão, no mesmo endereço — só algo que lê a requisição HTTP consegue separá-los.

## Step 8 · Traffic Manager

[confident] O Traffic Manager é um balanceador de tráfego baseado em DNS.
[500ms]
[calm] Ele nunca toca nos seus pacotes. Responde à consulta de nome com o endpoint que o cliente deve usar, e então sai do caminho.
[400ms]
[helpful] Esse desenho é ao mesmo tempo a força e o limite dele. Qualquer protocolo funciona, porque ele só responde DNS. Mas o failover depende do cache de DNS e do TTL — então não dá para alternar tão rápido quanto o Front Door.

## Step 9 · One global profile, many regions

[calm] A Contoso roda a mesma aplicação em várias regiões.
[500ms]
[confident] O Traffic Manager é global. Fica fora de todas as regiões, é dono do nome, e responde cada consulta com a região que deve atender aquele usuário.
[400ms]
[helpful] Siga os números. Os passos um e dois são DNS, desenhados tracejados porque nenhum tráfego de aplicação se move. O passo três é a conexão de verdade — e vai direto para a região. O Traffic Manager nunca está no caminho dos dados.

## Step 10 · Azure Front Door

[confident] O Front Door é uma rede de entrega de aplicações.
[500ms]
[calm] Balanceamento de carga global de camada sete, mais aceleração do site, entregue a partir da borda da Microsoft, perto do usuário.
[400ms]
[helpful] Diferente do Traffic Manager, ele carrega a requisição — então consegue fazer failover em segundos, em vez de esperar o DNS, e consegue cachear. Pense nele como a fachada da aplicação inteira, no mundo todo.

## Step 11 · One edge in front of the whole world

[calm] Cada usuário, onde quer que esteja, chega ao ponto de borda da Microsoft mais próximo.
[500ms]
[confident] O Front Door inspeciona a requisição, responde do cache quando dá, e caso contrário encaminha para a origem mais saudável.
[400ms]
[helpful] Coloque isso ao lado do diagrama do Traffic Manager. Aqui o tráfego realmente passa pelo serviço — e é exatamente por isso que ele consegue cachear, rodar um WAF e mover um usuário para outra região em segundos, em vez de esperar um registro DNS expirar.

## Step 12 · They stack, they do not compete

[confident] A maioria das arquiteturas reais usa mais de um desses.
[500ms]
[calm] Cada camada faz o trabalho que a de baixo não consegue — alcance global, depois roteamento regional de camada sete, e então a distribuição pura entre máquinas.
[400ms]
[helpful] Uma única camada raramente precisa dos quatro. Mas uma aplicação pública séria muitas vezes acaba com o Front Door na frente do Application Gateway, e o Load Balancer atrás disso.

## Step 13 · Scope first, then protocol

[confident] Então, o que fica.
[400ms]
[calm] Pergunte onde o tráfego precisa ser balanceado, e depois quão fundo o serviço precisa olhar. Essas duas respostas escolhem o serviço — todo o resto é detalhe.
[600ms]
[encouraging] Quando estiver em dúvida, diga o requisito em voz alta. "Global, web, precisa de cache" é Front Door. "Regional, SQL, menor latência" é Load Balancer. A frase nomeia o serviço.
