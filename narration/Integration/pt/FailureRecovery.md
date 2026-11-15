# Narrator Script — Integration · Failure & Recovery: when a message fails

**Source animation:** [FailureRecovery.html](../../../journeys/Integration/FailureRecovery.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/service-bus-messaging/message-transfers-locks-settlement>
- <https://learn.microsoft.com/azure/service-bus-messaging/service-bus-dead-letter-queues>
- <https://learn.microsoft.com/azure/service-bus-messaging/service-bus-message-loss-and-duplicates>

---

## Step 1 · The broker can’t see inside your handler

[calm] É Black Friday, faltam dois minutos para a meia-noite. Uma função cobra o cartão de um cliente e trava antes de conseguir dizer que terminou.
[600ms]
[serious] Para o broker, silêncio é exatamente igual a falha, então ele entrega a mensagem de novo.
[600ms]
[confident] Isso é a entrega at-least-once, ou seja, pelo menos uma vez. É uma garantia, não um bug, então o seu handler precisa saber lidar com uma repetição.

## Step 2 · Peek-lock: borrow the message, don’t take it

[curious] No modo peek-lock, o receptor pega uma mensagem emprestada sob um lock exclusivo, e nenhum outro consumidor consegue vê-la.
[600ms]
[confident] Depois, ele resolve a mensagem de uma de quatro formas: complete, abandon, defer ou dead-letter. Ou então o lock simplesmente expira.
[600ms]
[concerned] O receive-and-delete é diferente. Ele resolve a mensagem no instante em que o broker a envia, então uma transferência que falha perde a mensagem. Use só para dados de pouco valor.

## Step 3 · Every failed lap adds one

[calm] Toda vez que uma entrega termina em abandon ou com o lock expirado, a contagem de entregas sobe em um.
[600ms]
[serious] Quando chega ao máximo de entregas, o Service Bus move a mensagem para a fila de dead-letter. O padrão é dez.
[600ms]
[reassuring] A duração do lock é de um minuto por padrão e vai no máximo a cinco, então configure um valor acima do seu tempo normal de processamento, ou renove o lock.

## Step 4 · Break it and watch what happens

[curious] Agora é a sua vez. Ative uma falha e envie o pedido. Esta fila de demonstração usa no máximo cinco entregas, para ficar curto.
[600ms]
[intrigued] Veja a mensagem ser tentada várias e várias vezes, até cair na fila de dead-letter.
[600ms]
[confident] Reenviar sem corrigir nada só manda a mensagem para o mesmo ciclo de novo. E um payload ruim não vale a pena tentar de novo, então o seu código pode mandá-lo direto para o dead-letter, com um motivo próprio.

## Step 5 · Dead-letter queue: a parking lot with labels

[calm] Toda fila e toda assinatura tem uma subfila de dead-letter. As mensagens ficam lá até você removê-las. Não existe limpeza automática.
[600ms]
[confident] Cada mensagem traz um motivo que você pode ler. Para receber dela, use um receptor apontado para a subfila de dead-letter.
[600ms]
[reassuring] Quando você define o seu próprio motivo, inclua o tipo da exceção. Isso facilita muito a triagem.

## Step 6 · Recover without losing or duplicating

[calm] A ordem importa. Leia o motivo, corrija a causa e depois envie uma cópia nova para a fila principal.
[600ms]
[confident] Só conclua a cópia do dead-letter depois que o envio funcionar. Se houver uma falha no meio, você recebe uma duplicata, nunca uma perda.
[600ms]
[serious] Um reenvio é uma mensagem totalmente nova, então faça o seu handler conferir primeiro, depois agir, e ignorar qualquer repetição.

## Step 7 · Two helpers: duplicate detection and sessions

[curious] Dois recursos ajudam. A detecção de duplicatas barra na porta uma mensagem reenviada quando ela tem o mesmo ID de mensagem dentro da janela.
[600ms]
[confident] Ela exige o tier Standard ou Premium, e a janela padrão é de dez minutos.
[600ms]
[calm] As sessões mantêm mensagens relacionadas juntas, em ordem, com um único receptor. Depois de ativadas, toda mensagem precisa de um ID de sessão.

## Step 8 · Event Grid retries on a schedule

[calm] O Event Grid entrega cada evento pelo menos uma vez e espera trinta segundos por uma resposta.
[600ms]
[confident] Se não vem resposta, ele tenta de novo com backoff, até a sua política de retry mandar parar: até trinta tentativas, ou um time to live de até um dia.
[600ms]
[concerned] A ordem não é garantida, e duplicatas ainda podem chegar, então o mesmo hábito de idempotência vale aqui também.

## Step 9 · Publish your own events

[curious] Um tópico personalizado é um endpoint para onde o seu app envia eventos. Você pode autenticar com a chave de acesso do tópico.
[600ms]
[confident] Melhor ainda: use uma identidade do Microsoft Entra com a função EventGrid Data Sender, assim não há chaves no código.
[600ms]
[calm] Os tópicos aceitam CloudEvents ou o esquema do Event Grid. O CloudEvents é o formato recomendado.

## Step 10 · Who retries? The service that delivers

[curious] Então, de quem são os retries? Não da sua função. Um trigger do Service Bus não acrescenta nenhum próprio.
[600ms]
[confident] O runtime conclui a mensagem quando a sua função tem sucesso e a abandona quando ela lança uma exceção. Quem faz a contagem é o Service Bus.
[600ms]
[reassuring] Do mesmo jeito, os retries de um trigger do Event Grid vêm da assinatura do evento. As políticas de retry de funções cobrem os outros triggers.

## Step 11 · Tune it, connect it, ship it safely

[calm] Algumas configurações do host dot json definem como as mensagens são puxadas: concorrência, auto-complete e renovação de lock.
[600ms]
[confident] Use uma identidade gerenciada em vez de um segredo. Uma connection string ainda funciona, mas o Learn recomenda identidade sempre que possível.
[600ms]
[serious] E faça o release por um slot de staging. Marque as configurações da origem de eventos como configurações de slot antes do swap, porque um swap pode cortar funções em execução.

## Step 12 · See failures before customers do

[curious] As falhas deixam números. No Service Bus, observe as mensagens em dead-letter, as mensagens abandonadas e os erros de servidor.
[600ms]
[confident] No Event Grid, observe os eventos com falha na entrega, em dead-letter e descartados.
[600ms]
[reassuring] Depois, deixe uma regra de alerta acionar uma pessoa. Um alerta disparado executa um grupo de ação, como e-mail, SMS ou uma função.

## Step 13 · Failure and recovery, in one view

[calm] Uma mensagem com falha é reenviada pelo serviço que a entrega, guardada com um motivo e reprocessada com segurança por um handler idempotente.
[600ms]
[confident] Isso faz parte da prova A I 200, no domínio que vale de vinte a vinte e cinco por cento. O guia de estudo cita o tratamento de dead-letter, os filtros do Event Grid, os eventos personalizados e os retries.
[600ms]
[proud] Guarde o ciclo: tentar de novo, guardar, corrigir, reenviar e repetir com segurança.
