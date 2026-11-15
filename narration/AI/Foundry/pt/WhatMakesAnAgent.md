# Narrator Script · Português (pt) — Journey 04 · O que faz um agente (Assistente de Compras da Contoso)

**Source animation:** `static/v2/AI/Foundry/WhatMakesAnAgent.html`
**Language:** Portuguese (pt). Traduzido do roteiro mestre em inglês. As indicações `[tags]` e as pausas `[NNNms]` permanecem inalteradas. Os títulos das etapas ficam em inglês para o mapeamento 1:1.

Um bloco por etapa da animação.

---

## Step 1 · The Problem

[curious] Apresentamos o Assistente de Compras com IA da Contoso; por enquanto, é apenas uma simples implantação de modelo.
[600ms]
[amused] O problema? Sem instruções, ele responde de bom grado perguntas sobre viagens, finanças ou saúde...
[600ms]
[laughter] qualquer coisa, menos compras.
[600ms]
[serious] Para um assistente de loja, isso é um problema de verdade.
[600ms]
[determined] Então, vamos transformá-lo em um agente de verdade.

## Step 2 · What Is an Agent?

[confident] Um modelo puro não tem estado e responde qualquer coisa.
[600ms]
[determined] Um agente do Foundry envolve esse mesmo modelo com quatro ingredientes: Instruções, Conhecimento, Ferramentas e Memória.
[600ms]
[proud] Juntos, eles o transformam no especialista em compras focado da Contoso.

## Step 3 · Instructions

[confident] Primeiro: as Instruções, o prompt de sistema durável que está sempre em vigor.
[600ms]
[calm] Este é o briefing de compras da Contoso. Ele diz ao assistente para atuar como especialista em produtos e para se manter estritamente no tema.
[600ms]
[determined] E, fundamentalmente, diz ao modelo para recusar educadamente qualquer coisa fora do tema: viagens, finanças ou saúde.

## Step 4 · Knowledge

[intrigued] A seguir: o Conhecimento.
[600ms]
[confident] Sozinho, um modelo só consegue adivinhar a partir de dados de treinamento desatualizados; por isso, nós o embasamos no próprio catálogo de produtos da Contoso, no histórico de pedidos ao vivo e na política de devoluções.
[600ms]
[reassuring] Agora, cada resposta vem de dados reais e atuais da empresa: o preço certo, o estoque certo, a política de verdade.
[600ms]
[serious] Essa é a diferença entre um assistente em quem você pode confiar e um que inventa coisas silenciosamente.

## Step 5 · Tools

[confident] Depois vêm as Ferramentas: o poder de realmente fazer coisas, não apenas falar.
[600ms]
[calm] Uma ferramenta é simplesmente uma função que você registra no agente: código real, uma API ou um aplicativo inteiro, conectado e pronto para executar.
[600ms]
[proud] Então o agente não só fala: ele lê a intenção do cliente, escolhe a ferramenta certa e executa software real em nome dele — fazer um pedido, enviar um email, atualizar um sistema ao vivo.
[600ms]
[impressed] Veja o primeiro cenário: um cliente pergunta "onde está o meu pedido?"
[600ms]
[confident] O agente interpreta essa intenção e recorre à ferramenta de status do pedido, passando o número do pedido que o cliente mencionou.
[600ms]
[determined] Nos bastidores, essa ferramenta chama o sistema de pedidos ao vivo da Contoso, recebe o status de envio real e o entrega ao modelo.
[600ms]
[reassuring] O modelo transforma esses dados brutos em uma resposta calorosa e em linguagem simples, sem suposições, direto da fonte.
[600ms]
[proud] E esta é a resposta que o cliente vê: o pedido foi enviado e chega em três de junho.
[600ms]
[encouraging] Agora é a sua vez: clique no Cenário 2 e no Cenário 3 para ver como o mesmo agente lida com uma devolução e uma oferta proativa.

## Step 5s2 · Tools — Scenario 2

[confident] Cenário 2, uma devolução. O cliente diz: "Quero devolver meu pedido recente".
[500ms]
[impressed] Desta vez um único pedido precisa de duas ações, então o agente encadeia duas ferramentas: primeiro inicia a devolução para abrir o caso e depois passa esse resultado direto para um email.
[500ms]
[determined] Repare na ordem: a segunda ferramenta só é executada quando a primeira tem sucesso, e o novo número de devolução flui direto para a mensagem.
[500ms]
[reassuring] Momentos depois, a devolução é aberta, sai um email de confirmação com a etiqueta de envio, e o assistente avisa o cliente que está tudo a caminho: uma mensagem, duas ações reais executadas.

## Step 5s3 · Tools — Scenario 3

[intrigued] Cenário 3, uma oferta proativa. Desta vez não há pergunta; o cliente está apenas olhando jaquetas de inverno.
[500ms]
[confident] Aqui o agente age só pelo contexto: ninguém perguntou nada. Ao ler esse sinal de navegação, ele decide que vale a pena executar três ferramentas.
[500ms]
[impressed] Então dispara todas juntas: recomendar produtos para achar uma opção, verificar o estoque para garantir que há, e consultar os pontos de fidelidade para ver quanto valem.
[500ms]
[proud] Ele chega à Aurora Parka, confirma que está disponível, e vê que os pontos do cliente podem dar vinte e quatro dólares de desconto; e então a oferece, na hora certa e sem ninguém pedir.

## Step 6 · Memory

[curious] Mas uma única chamada ao modelo esquece tudo no instante em que termina.
[600ms]
[confident] Então, adicionamos a Memória: um thread que armazena toda a conversa, mensagem por mensagem.
[600ms]
[reassuring] Agora o assistente lembra o tamanho do cliente, seu carrinho e as perguntas anteriores, de modo que a conversa parece contínua.

## Step 7 · Build It

[encouraging] Agora, junte tudo no Foundry.
[600ms]
[confident] Envolva aquela mesma implantação de modelo como um Agente: adicione instruções, conhecimento, ferramentas e memória, e então execute o loop.
[600ms]
[proud] Publique-o em contoso.com: enfim fiel à marca, focado no tema e fazendo trabalho de verdade.
