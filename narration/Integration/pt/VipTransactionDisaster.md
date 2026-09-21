# Roteiro do narrador — Episódio 2 · O desastre da transação VIP

**Source animation:** `journeys/Integration/VipTransactionDisaster.html`

**Script status:** Authored voiceover.

---

## Step 1 · The cancellation beat the order

[calm] O cancelamento chega depois do pedido, mas termina primeiro. Ainda não existe pedido para cancelar. O pedido então é confirmado. Isso é uma disputa de ordem, não prova de cobrança dupla. Agrupe mensagens relacionadas numa sessão e trate também as reentregas com segurança.

## Step 2 · What a simple queue does not give you

[calm] O Queue Storage é excelente para armazenar em buffer trabalho independente. Dinheiro não é trabalho independente.
[500ms]
[confident] Dinheiro precisa de ordem, de bloqueios que você possa estender e de um lugar seguro para colocar uma mensagem quebrada. O Service Bus traz ordem de chegada dentro de uma sessão, mensagens de até duzentos e cinquenta e seis kilobytes, uma fila de mensagens mortas integrada, detecção de duplicatas, transações e tópicos com duas mil assinaturas.
[600ms]
[reflective] Troque para o Service Bus quando uma única mensagem valer mais do que a computação que a processa. O que você paga a mais é a confiabilidade, não a taxa de transferência.

## Step 3 · Sessions put the VIP back in order

[optimistic] A solução é uma única propriedade. Marque cada mensagem com um id de sessão: aqui, o id do cliente.
[500ms]
[confident] O Service Bus então entrega a sessão inteira a exatamente um receptor, na ordem em que chegou. O pedido oito oito zero um é processado primeiro, o cancelamento depois, e a sessão de outro cliente continua rodando em paralelo em outro receptor.
[600ms]
[calm] Uma sessão é um bloqueio sobre uma conversa, não sobre uma mensagem. Um receptor é dono daquele cliente até liberá-lo.

## Step 4 · Peek-lock, and a cell for bad messages

[calm] Peek-lock permite receber sem excluir. Complete remove a mensagem processada com sucesso. Abandon libera o bloqueio imediatamente; após falha, a reentrega pode esperar a expiração. Falhas repetidas podem levar a mensagem à fila de mensagens mortas. Inspecione, corrija e reenvie: a recuperação não é automática.

## Step 5 · One order, three teams, zero coupling

[curious] Faturamento, envio e fidelidade precisam do mesmo pedido. Então publique uma vez só.
[500ms]
[confident] Um tópico distribui essa única mensagem para assinaturas independentes, cada uma com o próprio filtro, o próprio acúmulo e a própria fila de mensagens mortas. Faturamento leva tudo, envio filtra por produtos físicos, e fidelidade por pedidos acima de cem.
[600ms]
[optimistic] Como as assinaturas são filas independentes, fidelidade pode ficar fora do ar por uma hora e suas mensagens simplesmente esperam. Faturamento nem percebe, e ninguém precisa mudar o publicador.

## Step 6 · Episode 2: Service Bus is the safe lane

[calm] Escolha Service Bus para mensagens de negócio que precisam de coordenação. Sessões preservam a ordem dentro da sessão; peek-lock separa receber de concluir. Filas de mensagens mortas isolam falhas e tópicos dão cópias independentes aos assinantes. Manipuladores idempotentes continuam necessários: uma repetição não deve cobrar o cliente novamente.

