# Roteiro do narrador — Episódio 5 · A cola sem servidor

**Source animation:** `journeys/Integration/ServerlessGlue.html`

**Script status:** Authored voiceover.

---

## Step 1 · Four brokers, and a thousand lines of plumbing

[calm] A Contoso agora tem uma fila, um barramento, um hub e uma grade. Mas olhe o que está segurando tudo isso junto.
[500ms]
[serious] Cada trabalhador ainda abre o próprio cliente, consulta mensagens, renova bloqueios, repete e registra. As mesmas duzentas linhas, escritas de cinco formas ligeiramente diferentes, rodando em uma máquina que fica ligada mesmo com a fila vazia.
[600ms]
[confident] Cada linha de laço de recebimento é uma linha que você mantém para sempre. O runtime de integração pode mantê-la por você, e já resolveu as partes difíceis.

## Step 2 · Exactly one trigger. Any number of bindings.

[calm] Uma função tem exatamente um gatilho: aquilo que a inicia.
[500ms]
[confident] Ao redor dele você declara associações opcionais de entrada e saída que a conectam a outros serviços, sem nenhum código de SDK dentro do corpo da função. Uma fila do Service Bus a dispara, o Cosmos DB fornece o cliente, e os resultados saem para uma fila do Storage e para o Event Grid.
[600ms]
[reflective] Se você estiver criando um cliente dentro de uma função para ler ou gravar em outro serviço do Azure, verifique se já não existe uma associação que faça isso por você.

## Step 3 · A trigger for every service in the series

[calm] Cada broker que você conheceu tem um gatilho correspondente, e cada um entrega um formato diferente de trabalho.
[500ms]
[confident] O gatilho de fila dá uma mensagem, repetida até dar certo. O do Service Bus cuida do peek-lock por você: retorne sem erro para concluir, lance uma exceção para abandonar. O do Event Hubs dá um lote de uma partição e faz checkpoint. O do Event Grid dá um evento roteado.
[600ms]
[serious] Então o gatilho que você escolhe decide o seu comportamento em falhas. Vale saber isso antes de escrever o manipulador.

## Step 4 · Stop shipping secrets to production

[serious] Agora, a parte que acaba na captura de tela da apresentação de alguém.
[500ms]
[calm] Uma associação pode apontar para uma cadeia de conexão: um segredo compartilhado, copiável, registrável, difícil de rotacionar, e que normalmente concede muito mais acesso do que você precisa. Ou pode apontar para um endpoint e deixar a identidade gerenciada do aplicativo autenticar com um token do Entra ID em tempo de execução.
[600ms]
[confident] Uma delas pode vazar. A outra não existe para ser roubada. Só conceda o verbo que você usa: receber não é a mesma permissão que enviar.

## Step 5 · The backlog drives the instance count

[optimistic] E ninguém mais dimensiona um cluster para a Black Friday.
[500ms]
[confident] O controlador de escala observa a profundidade da fila ou o atraso de eventos e adiciona instâncias enquanto há trabalho esperando, depois as remove. Às duas da manhã você roda perto de zero. Quando o evento começa e o acúmulo sobe, instâncias aparecem em paralelo. Quando ele zera, elas somem.
[600ms]
[calm] É o mesmo sinal que o KEDA usa para escalar contêineres. Seja com Functions ou Container Apps, o tamanho da fila é a entrada do autoescalador.

## Step 6 · At least once means expect it twice

[calm] Idempotente significa que repetir a mesma solicitação não repete seu efeito de negócio. Use um ID estável de mensagem ou pedido. Grave resultado e ID processado atomicamente, evitando inconsistência após falha. Para uma API externa de pagamentos, use também a chave de idempotência dela. A garantia de entrega sozinha não protege uma cobrança.

## Step 7 · Episode 5: Functions are the wiring

[proud] E essa é a reconstrução da Contoso Retail, do início ao fim.
[500ms]
[calm] Os brokers decidem o que uma mensagem significa. O Functions decide o que acontece em seguida, com o laço de recebimento, a escala e as credenciais resolvidos por você. Um gatilho, associações declarativas, uma identidade gerenciada, e escala orientada a eventos que volta a zero.
[600ms]
[encouraging] Coloque o trabalho na fila, garanta a ordem, registre o fluxo, reaja à mudança e deixe o Functions ser a cola. Na próxima jornada, a loja ganha um agente de IA, e os mesmos músculos de integração o sustentam.
