# Firewall & WAF — narração (pt)

## Step 1 · Two firewalls, two different jobs

[calm] O Azure tem um serviço chamado Firewall e outro chamado Web Application Firewall.
[400ms]
[curious] Os nomes dão a entender que você precisa escolher entre os dois. Não precisa: cada um lê coisas completamente diferentes de um pacote.
[500ms]
[confident] A forma mais limpa de separar os dois: um pergunta "essa máquina deveria estar conversando com aquele lugar, para começar?". O outro pergunta "essa requisição HTTP está tentando atacar a minha aplicação?".

## Step 2 · Web Application Firewall

[confident] Uma política de WAF inspeciona a própria requisição HTTP: a URI, os cabeçalhos, os cookies, o corpo.
[500ms]
[calm] E compara tudo isso com conjuntos de regras derivados do projeto OWASP.
[400ms]
[helpful] E ela não é um serviço isolado. Uma política de WAF se associa ao Application Gateway para uma aplicação regional, ou ao Front Door para barrar ataques lá na borda, antes que eles cheguem à sua região.

## Step 3 · Detection logs. Prevention blocks.

[calm] Toda política de WAF funciona em um de dois modos, e a diferença não é sutil.
[500ms]
[confident] O modo de detecção escreve uma linha de log e deixa a requisição passar. O modo de prevenção bloqueia com um quatrocentos e três.
[400ms]
[concerned] A armadilha é publicar e esquecer. O modo de detecção não oferece proteção nenhuma. Ele existe para você encontrar falsos positivos antes que virem indisponibilidade, e não para ficar ligado para sempre.

## Step 4 · Azure Firewall

[confident] O Azure Firewall é um firewall de rede gerenciado e com estado para todo o seu conjunto de redes virtuais.
[500ms]
[calm] Ele fica no hub, e o tráfego é roteado através dele: entrando da internet, saindo para a internet e entre os spokes.
[400ms]
[helpful] A palavra para guardar é direção. Um WAF olha as requisições que chegam a uma aplicação. O Azure Firewall governa o tráfego norte-sul e leste-oeste, incluindo o que as suas próprias máquinas virtuais originam.

## Step 5 · Nothing reaches the firewall by accident

[curious] Aqui está a parte que quase todo mundo deixa passar. Implantar o firewall não roteia nada para ele.
[500ms]
[calm] O Azure dá a cada sub-rede rotas de sistema que você não pode excluir e que, se ninguém mexer, mandam o tráfego destinado à internet direto para fora. Uma tabela de rotas é como você sobrepõe isso e aponta o tráfego para o firewall.
[400ms]
[helpful] Quando duas rotas coincidem, o Azure pega primeiro o prefixo mais longo e depois compara a origem: a definida pelo usuário vence a BGP, e a BGP vence a do sistema. Essa ordem explica a surpresa clássica: uma rota padrão não captura o tráfego entre sub-redes, porque a rota de sistema da VNet é mais específica.

## Step 6 · Three rule collections, one order

[confident] As regras do Azure Firewall vêm em três tipos, e são sempre avaliadas na mesma sequência.
[500ms]
[calm] Primeiro DNAT, depois as regras de rede e por último as regras de aplicação. Conhecer essa ordem explica a maioria dos resultados surpreendentes.
[400ms]
[concerned] Como as regras de rede são avaliadas antes das de aplicação, uma permissão de rede ampla demais pode contornar silenciosamente a filtragem por FQDN que você escreveu com tanto cuidado: o pacote já foi permitido antes que as regras de aplicação sejam consultadas.

## Step 7 · The distinction, in one table

[calm] A Microsoft explica a diferença de forma direta.
[500ms]
[confident] Leia uma linha e fica óbvio a qual serviço aquela linha pertence.
[400ms]
[helpful] A última linha é a que encerra as discussões: eles bloqueiam ataques diferentes. Nenhum dos dois teria pegado aquilo que o outro pega.

## Step 8 · In a hub, they sit in series

[calm] Em um desenho de hub real, eles não são alternativas: ficam em série.
[500ms]
[confident] Uma requisição vinda da internet é traduzida e filtrada primeiro no nível de rede, depois entregue ao gateway, onde o WAF lê o próprio HTTP, e só então chega à carga de trabalho.
[400ms]
[helpful] Cada salto remove algo que o seguinte não consegue enxergar. Quando a requisição chega à sua aplicação, tanto "quem pode conversar" quanto "o que essa requisição está tentando fazer" já foram respondidos.

## Step 9 · The mistakes that cost you

[concerned] Os dois serviços falham em silêncio, não aos gritos.
[500ms]
[calm] Nada dá erro. Você simplesmente não está protegido do jeito que imaginava.
[400ms]
[confident] O erro mais comum também é o mais invisível. Se a sua origem ainda aceita tráfego de qualquer lugar, um atacante pode pular o Front Door por completo, chegar direto no IP de origem, e toda regra de WAF que você escreveu é contornada.

## Step 10 · One reads requests, one reads traffic

[confident] Então, a conclusão, em uma frase.
[400ms]
[calm] Um lê requisições. O outro lê tráfego. Isso resolve quase toda dúvida sobre qual serviço você precisa, e a resposta honesta costuma ser os dois, em série.
[600ms]
[encouraging] Se você só puder fazer uma coisa hoje: coloque um WAF em modo de prevenção na frente de tudo que for público, e tranque a origem para que ninguém consiga passar por fora.
