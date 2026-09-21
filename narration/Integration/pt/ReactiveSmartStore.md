# Roteiro do narrador — Episódio 4 · A loja inteligente reativa

**Source animation:** `journeys/Integration/ReactiveSmartStore.html`

**Script status:** Authored voiceover.

---

## Step 1 · Nobody is streaming. Everyone is knocking.

[curious] Este não é um problema de volume. É um problema de educação.
[500ms]
[calm] Os fornecedores deixam um novo catálogo no armazenamento algumas vezes por dia. Três serviços diferentes consultam esse contêiner a cada trinta segundos, o dia todo, por via das dúvidas: oito mil seiscentas e quarenta chamadas, das quais exatamente duas encontram alguma coisa.
[600ms]
[serious] A consulta constante custa três vezes: as chamadas de API, a computação que as faz e os minutos de latência entre o arquivo chegar e alguém perceber.

## Step 2 · Let the event announce itself

[optimistic] Então Maya ativa um tópico do sistema.
[500ms]
[confident] Agora o Storage emite um evento de blob criado no instante em que o arquivo chega, e o Event Grid o envia a todos os inscritos, quase em tempo real e sem consulta nenhuma. Uma Function reindexa o catálogo, um webhook acorda o back-end móvel, e uma fila do Service Bus armazena em buffer o portal do fornecedor.
[600ms]
[calm] O Event Grid é um roteador, não uma fila sua. Você nunca provisiona taxa de transferência. Você declara uma origem, uma assinatura com filtros e um lugar para entregar.

## Step 3 · A tiny envelope, and rules about who opens it

[calm] Um evento do Event Grid é uma notificação, não um conteúdo.
[500ms]
[confident] Quem, o quê, onde e quando: normalmente um ou dois kilobytes, no formato padrão CloudEvents. O subject diz qual blob, o data carrega o endereço e o tamanho, e isso é deliberadamente tudo.
[500ms]
[serious] Depois, cada assinatura filtra por esses campos. Filtre na assinatura, nunca dentro do manipulador: um manipulador que inicia, inspeciona um evento e sai ainda é uma inicialização a frio que você pagou.

## Step 4 · At least once, and a schedule to prove it

[calm] O Event Grid espera trinta segundos por uma resposta do seu manipulador.
[500ms]
[confident] Se ela não vier, o evento é repetido em um cronograma de recuo: dez segundos, trinta, um minuto, cinco, e assim por diante, até dar certo, até o tempo de vida de vinte e quatro horas expirar, ou até chegar a trinta tentativas.
[500ms]
[serious] Nesse ponto o evento é descartado, a menos que você tenha configurado um contêiner de mensagens mortas. Isso é opcional. E pelo menos uma vez significa que o seu manipulador vai ver duplicatas um dia, então use o id do evento como chave.

## Step 5 · When the handler cannot be reached, pull instead

[calm] Um consumidor privado pode buscar eventos por HTTP num tópico de namespace. Receive retorna eventos e tokens de bloqueio. Acknowledge conclui, release disponibiliza novamente e reject trata eventos impossíveis de processar. MQTT é uma capacidade separada de publicação e assinatura; clientes MQTT não usam esta API HTTP de recebimento.

## Step 6 · Four services, one question each

[reflective] Esta é a série inteira em uma tabela.
[500ms]
[confident] Pergunte o que o conteúdo realmente é. Uma tarefa simples vai para uma fila do Storage. Uma transação de negócio vai para o Service Bus. Um fluxo de medições vai para o Event Hubs. Um aviso de que algo mudou vai para o Event Grid.
[600ms]
[calm] A regra prática: uma mensagem significa que alguém precisa agir sobre ela. Um evento significa que algo aconteceu, e os interessados podem se importar. A maioria dos sistemas reais usa vários ao mesmo tempo.

## Step 7 · Episode 4: Event Grid is the nervous system

[proud] A Contoso Retail saiu de um monólito que expirava para quatro pipelines desacoplados.
[500ms]
[confident] Trabalho em buffer, pedidos garantidos, telemetria registrada e reações instantâneas. Roteamento por push com quinhentas assinaturas por tópico, filtragem no envelope, novas tentativas com mensagens mortas opcionais, e entrega por pull para os consumidores que você não alcança.
[600ms]
[encouraging] Todos esses serviços são de pelo menos uma vez. O hábito que torna os quatro seguros é o mesmo: manipuladores idempotentes, com chave em um id.
