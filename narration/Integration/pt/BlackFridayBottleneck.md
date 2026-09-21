# Roteiro do narrador — Episódio 1 · O gargalo da Black Friday

**Source animation:** `journeys/Integration/BlackFridayBottleneck.html`

**Script status:** Authored voiceover.

---

## Step 1 · Black Friday breaks the checkout

[serious] Faltam dois minutos para a meia-noite da Black Friday, e o checkout da Contoso Retail parou de responder.
[500ms]
[calm] Cada clique em Comprar agora chama o banco de dados de estoque e então espera por ele. Com doze mil e quatrocentos compradores por minuto, é essa espera que mata o site. Duzentas threads de trabalho, nenhuma livre, e compradores recebendo um tempo limite de gateway em vez de um recibo.
[600ms]
[curious] Não há código quebrado aqui. É um problema de acoplamento.

## Step 2 · 99% of a checkout is spent waiting

[calm] O diagrama mostra nove mil e cem milissegundos esperando num total de nove mil cento e noventa: cerca de noventa e nove por cento. A espera ocupa threads. Com duzentas threads e cerca de nove segundos por solicitação, cabem aproximadamente mil e trezentas solicitações por minuto. São números ilustrativos, não limites do Azure.

## Step 3 · Maya cuts the wire

[optimistic] Então Maya faz uma pergunta melhor. O checkout realmente precisa que o banco de dados responda?
[600ms]
[confident] Não precisa. Ele precisa de uma promessa de que o pedido será processado. E essa promessa é uma mensagem em uma fila.
[500ms]
[calm] Desacoplar não é sobre velocidade. É sobre quem precisa estar saudável no mesmo momento. Depois do corte, só a fila precisa estar de pé quando o comprador clica.

## Step 4 · Meet the Azure Storage queue

[calm] Uma fila é uma lista durável de mensagens pequenas na sua conta de armazenamento, e quatro comportamentos bastam para entendê-la.
[400ms]
[confident] Uma mensagem tem até sessenta e quatro kilobytes. Obter uma mensagem a esconde de todos os outros durante o tempo limite de visibilidade, trinta segundos por padrão. Excluir significa que o trabalho deu certo. E um contador de entregas pega as mensagens que falham repetidamente.
[500ms]
[serious] A entrega é pelo menos uma vez, e a ordem é geralmente, mas nem sempre, a de chegada. Projete o trabalhador para ser seguro se ele vir o mesmo pedido duas vezes.

## Step 5 · The same night, buffered

[optimistic] Mesma noite. Os mesmos doze mil e quatrocentos compradores por minuto.
[500ms]
[confident] Mas agora o checkout grava uma mensagem e responde em cento e vinte milissegundos. Os trabalhadores de estoque esvaziam o acúmulo no ritmo que o banco de dados realmente sustenta, e a gravação cai de nove segundos e meio para quarenta milissegundos.
[600ms]
[calm] O pico não desapareceu. Ele mudou de lugar. A profundidade da fila agora é o seu sinal de carga: escale por ela, gere alertas por ela, e deixe que ela absorva o pico no lugar dos seus clientes.

## Step 6 · Episode 1: buffer the work, keep the sale

[confident] Uma fila do Storage é a maneira mais barata e simples de impedir que um back-end lento derrube o seu front-end junto.
[500ms]
[calm] O produtor grava uma mensagem pequena e responde imediatamente. O buffer comporta até quinhentos tebibytes e move duas mil mensagens por segundo. O consumidor obtém, processa e exclui, e cuida das mensagens suspeitas por conta própria.
[600ms]
[encouraging] Escolha isso quando o trabalho em segundo plano for simples. Quando precisar de ordem estrita, transações ou publicação e assinatura, isso é o episódio dois.
