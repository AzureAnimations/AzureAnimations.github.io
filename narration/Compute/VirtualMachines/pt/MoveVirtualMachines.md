# Narrator Script - Mova sem quebrar

**Source animation:** journeys/Compute/VirtualMachines/MoveVirtualMachines.html

**Script status:** Authored voiceover.

Delivery cues appear in brackets; pauses are on separate lines.

## Step 1 · It landed in the wrong place

[curious] A loja foi criada em um grupo de recursos de testes, quando ainda era um experimento.
[600ms]
[serious] Agora recebe pedidos reais e precisa ficar com os recursos de produção, sob as regras e a cobrança de produção.
[600ms]
[calm] Primeiro, uma distinção: grupo de recursos é um limite de gerenciamento, não uma localização física. Mudar de grupo não leva os dados para outro lugar.

## Step 2 · Move between resource groups

[calm] A movimentação mais simples muda apenas o grupo que administra o recurso.
[600ms]
[confident] O Azure altera o grupo da máquina enquanto ela continua funcionando, sem interrompê-la por causa dessa movimentação.
[600ms]
[serious] Durante a operação, os dois grupos ficam bloqueados para gravações de gerenciamento. Evite implantar recursos em qualquer um deles até a conclusão.

## Step 3 · Move between subscriptions

[calm] Mudar de assinatura leva a mesma ideia um nível acima.
[600ms]
[confident] A máquina e os recursos dependentes que precisam acompanhá-la, como discos e interfaces de rede, são preparados em conjunto para a assinatura de destino.
[600ms]
[serious] Verifique o destino primeiro. Se faltar cota para essas máquinas, a movimentação não poderá ser concluída.

## Step 4 · Changing region is a rebuild

[serious] Mudar de região é uma operação diferente.
[600ms]
[confident] O Azure Resource Mover copia a carga e recria os recursos na nova região. Planeje para mudanças de identificadores e endereços.
[600ms]
[calm] Trate como reconstrução: planeje a virada do serviço, a resolução de nomes e qualquer configuração com endereços antigos escritos diretamente.

## Step 5 · Check before you commit

[curious] Um hábito evita boa parte dos problemas: execute as verificações e observe a validação.
[600ms]
[confident] Nem todo tipo de recurso aceita qualquer movimentação. Valide o conjunto inteiro antes de começar e consulte a referência de suporte para os recursos envolvidos.
[600ms]
[reassuring] Encontrar um recurso incompatível na validação custa minutos. Encontrá-lo no meio da movimentação pode custar a noite inteira.

## Step 6 · Moving - All in One

[reflective] Existem três tipos de movimentação, e vale distingui-los.
[600ms]
[confident] Mudanças de grupo ou assinatura alteram a associação administrativa. Mudar de região cria o recurso em outro lugar.
[600ms]
[proud] A loja da Contoso já foi construída, preparada para falhas, dimensionada, ajustada, protegida por backup e monitorada. Agora também está no lugar certo.
