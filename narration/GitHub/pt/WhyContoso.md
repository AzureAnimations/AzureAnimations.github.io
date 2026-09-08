# Narrator Script — GitHub · Contoso Delivery · Why Contoso Is Building This · PT

**Source animation:** `journeys/GitHub/WhyContoso.html`

Os títulos `## Step N` permanecem em inglês de propósito (índice do gerador de áudio e das legendas).

---

## Step 1 · When It Rains, Contoso Loses Money

[warm] Vamos começar por um problema que não tem nada a ver com software.
[500ms]
[calm] A Contoso é uma varejista. Quando uma chuva forte se instala sobre a cidade, as pessoas não saem de casa. O fluxo de visitantes cai, e os números do caixa vão junto.
[500ms]
[thoughtful] O contorno claro é o dia que a Contoso esperava. A barra preenchida é o dia real. Não havia nada de errado com os produtos nem com os preços. Simplesmente choveu.

## Step 2 · The Same Rain, Two Different Days

[confident] Esta é a percepção sobre a qual o projeto inteiro se apoia: a chuva é um sinal, e a Contoso pode fazer uma de duas coisas com ele.
[500ms]
[serious] Se não fizer nada, aquela visita se perde. O estoque fica encalhado e o dia entra como prejuízo.
[500ms]
[bright] Ou ela age: encontra o cliente onde ele já está. Numa tarde de chuva, isso é online. O mesmo clima que esvaziou a loja passa a conversar com o dia que ele próprio criou.

## Step 3 · Sell What the Weather Calls For

[calm] Cada condição do tempo corresponde a um estoque que de repente faz sentido comprar. Chuva pede capa e guarda-chuva. Tempestade pede casacos pesados e entrega em casa. Onda de frio pede tricô.
[500ms]
[thoughtful] Repare na coluna da direita: o que *todos os canais* deveriam destacar. Guarde essa expressão. Dois passos adiante ela vira exatamente o problema de arquitetura.

## Step 4 · Storm Day Free Shipping

[bright] E quando a previsão piora, a Contoso pode ir além.
[500ms]
[calm] O Azure Maps avisa que vem tempestade. Esse único fato aciona a promoção Storm Day: o banner muda, os produtos certos vêm para a frente e o frete grátis remove o motivo para esperar.
[500ms]
[confident] Repare na ordem. Primeiro a tempestade se forma; só então a oferta aparece. É o tempo que dispara a campanha. Ninguém olhou a previsão e publicou nada à mão.

## Step 5 · Three Channels, Three Sets of Problems

[serious] Agora, o ponto em que as equipes erram. A Contoso tem três canais — web, aplicativo móvel e marketing — e, pelo caminho óbvio, cada um chamaria o Azure Maps diretamente.
[500ms]
[concerned] Veja o preço disso. Três cópias da chave de assinatura, e uma delas dentro do navegador, ou seja, onde a chave deixa de ser segredo. Três validações de entrada diferentes. E três equipes lendo a mesma previsão com significados ligeiramente distintos.
[500ms]
[thoughtful] Três canais, três conjuntos de problemas. E surge um quarto no instante em que a Contoso criar um quarto aplicativo.

## Step 6 · One API, One Source of Truth

[confident] Então a Contoso constrói uma coisa só: um único serviço Node.js, a Contoso Weather API, entre os canais e o Azure Maps.
[500ms]
[bright] Esse serviço faz quatro coisas exatamente uma vez. Mantém a chave no servidor. Valida a entrada. Normaliza a resposta num único formato. E decide o que aquela previsão *significa* para o negócio.
[500ms]
[reassuring] É o mesmo desenho do passo anterior. Os canais não mudaram. O que mudou é que três linhas vermelhas viraram uma linha azul, e a chave sumiu.

## Step 7 · What We Are Actually Building

[warm] Antes do planejamento, vamos olhar o produto em si. São duas telas.
[500ms]
[calm] Um painel chamado "Weather around the world", com as cidades agrupadas por país. Clicar numa cidade leva a uma tela de detalhe, com um mapa marcado e números mais completos.
[500ms]
[confident] É isso, o produto inteiro. Sem login, sem banco de dados, sem pagamentos. Tudo explicitamente fora de escopo.
[500ms]
[reassuring] E esse é o ponto: tudo o que vem a seguir existe para entregar *estas duas telas* com segurança. O documento de requisitos pode ser baixado neste passo.

## Step 8 · Weather In, Revenue Out

[warm] A história inteira em uma linha.
[500ms]
[calm] O Azure Maps informa o tempo. A API da Contoso lê e decide o significado. Todos os canais recebem a mesma resposta. E um dia de chuva vira um dia de vendas.
[500ms]
[confident] Esse é o *porquê*. Daqui em diante, tudo é sobre o *como*.
