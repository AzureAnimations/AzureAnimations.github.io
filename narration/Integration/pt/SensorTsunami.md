# Roteiro do narrador — Episódio 3 · O tsunami de sensores

**Source animation:** `journeys/Integration/SensorTsunami.html`

**Script status:** Authored voiceover.

---

## Step 1 · The telemetry flood drowns the queue

[curious] A Contoso liga prateleiras inteligentes, caixas e o fluxo de cliques da web.
[500ms]
[serious] Cada leitura é minúscula. Mas são cem mil por segundo, e a fila de pedidos para em cerca de duas mil mensagens por segundo. O resultado é limitação, leituras perdidas e painéis que ficam às cegas.
[600ms]
[calm] Uma fila tem preço e formato de itens de trabalho. Telemetria não é trabalho: é uma mangueira de fatos, e cada um custa uma ida e volta que você não pode pagar nesse ritmo.

## Step 2 · Stop delivering. Start recording.

[optimistic] Então Maya muda o formato do problema.
[500ms]
[confident] Um broker entrega uma mensagem a um trabalhador e a exclui. Um log acrescenta cada evento e deixa qualquer número de leitores avançar no próprio ritmo.
[500ms]
[calm] Essa é a verdadeira linha divisória nas mensagens do Azure. Os serviços intermediados removem o que entregam. Os serviços de transmissão mantêm e distribuem um marcador. Um reembolso é uma mensagem. A leitura de uma prateleira é um evento.

## Step 3 · Partitions turn one pipe into parallel lanes

[calm] Um hub de eventos é um log somente de acréscimo, dividido em partições.
[500ms]
[confident] A chave de partição decide a faixa, e dentro de uma faixa a ordem é exata: então toda leitura da prateleira A quatorze continua em sequência. O Standard dá de uma a trinta e duas partições, eventos de até um megabyte, e fala AMQP, Kafka e HTTPS.
[600ms]
[serious] Escolha essa chave pensando em ordem e distribuição. O ID da loja mantém os eventos de uma loja juntos, mas uma chave popular demais cria uma partição quente enquanto as outras ficam ociosas.

## Step 4 · Offsets and consumer groups: read it twice

[calm] Os consumidores mantêm posições independentes. Aqui realtime está no deslocamento quarenta e dois e batch no trinta e seis: seis posições atrás. Ler não exclui eventos. Um checkpoint registra onde retomar após reiniciar. Salve os checkpoints conscientemente e torne o reprocessamento seguro: um evento pode ser lido de novo.

## Step 5 · Capture archives the stream without consumer code

[calm] Capture arquiva o fluxo sem código de consumidor, não sem custo. Grava lotes Avro no Blob Storage ou Data Lake ao atingir a janela de tempo ou tamanho. É cobrado separadamente no Standard e incluído no Premium e Dedicated. O armazenamento de destino continua sendo cobrado. Leitores ao vivo preservam sua capacidade de saída.

## Step 6 · Episode 3: Event Hubs is the firehose

[confident] Quando o volume é enorme, o conteúdo é minúsculo e mais de um sistema quer os mesmos dados, você quer um log, não uma fila.
[500ms]
[calm] Os eventos são registrados e nunca removidos na leitura. As partições dão faixas paralelas com ordem exata dentro de cada uma. Os grupos de consumidores dão a cada time a própria visão e o próprio deslocamento. O Capture deixa o arquivo automaticamente.
[600ms]
[encouraging] O Event Hubs responde o que está acontecendo, em escala. O próximo episódio responde a uma pergunta bem diferente: algo mudou, quem precisa saber?
