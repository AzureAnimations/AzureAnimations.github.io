# Roteiro do narrador — Azure Integration & Messaging · Tour do hub

**Source animation:** `journeys/Integration/index.html`

**Script status:** Authored voiceover.

---

## Step 1 · Welcome

[calm] Integração é fazer programas separados trabalharem juntos. Um produtor envia trabalho; um consumidor processa; um intermediário transporta. Siga a Contoso em cinco episódios: guardar tarefas, coordenar pedidos, registrar medições, reagir a mudanças e conectar manipuladores com Functions. Os números da história são exemplos, não promessas de desempenho.

## Step 2 · The Black Friday Bottleneck

[calm] Episódio um. O gargalo da Black Friday.
[400ms]
[serious] Cada clique em Comprar agora espera pelo banco de dados de estoque, e é essa espera que derruba o site. Você vai colocar uma fila do Storage no meio, para que o comprador receba o recibo enquanto o trabalho acontece por trás.

## Step 3 · The VIP Transaction Disaster

[calm] No episódio dois, um pedido e seu cancelamento são processados na ordem errada. Sessões do Service Bus coordenam mensagens relacionadas. Peek-lock separa receber de concluir, e a fila de mensagens mortas isola falhas. Ordem não impede todo efeito duplicado: o trabalhador ainda precisa de idempotência.

## Step 4 · The Sensor Tsunami

[calm] Episódio três. O tsunami de sensores.
[400ms]
[curious] Cem mil leituras de sensores por segundo chegam, e até o Service Bus é a ferramenta errada. O Event Hubs para de entregar e começa a registrar, para que cada time leia o mesmo fluxo no próprio ritmo.

## Step 5 · The Reactive Smart Store

[calm] Episódio quatro. A loja inteligente reativa.
[400ms]
[optimistic] Três serviços passam o dia perguntando a uma conta de armazenamento se um arquivo já chegou. O Event Grid deixa o evento se anunciar, para que o manipulador certo acorde no instante em que algo muda.

## Step 6 · The Serverless Glue

[calm] Episódio cinco. A cola sem servidor.
[400ms]
[confident] Quatro brokers ainda precisam de código entre eles. O Azure Functions fornece o gatilho, as associações e a escala, para que você escreva apenas a decisão.

## Step 7 · Keep Going on Microsoft Learn

[reflective] Todos os números e limites desta jornada vêm da própria documentação da Microsoft.
[500ms]
[encouraging] Quando estiver pronto para construir esses pipelines de verdade, os roteiros de aprendizagem abaixo percorrem os mesmos serviços com exercícios práticos. Escolha um episódio e vamos começar.
