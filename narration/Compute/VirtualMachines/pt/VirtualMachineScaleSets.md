# Narrator Script - Virtual Machine Scale Sets

**Source animation:** journeys/Compute/VirtualMachines/VirtualMachineScaleSets.html

**Script status:** Authored voiceover.

Delivery cues appear in brackets; pauses are on separate lines.

## Step 1 · Demand changes

[curious] O tráfego da Contoso não é constante: manhãs tranquilas, uma promoção movimentada e uma semana mais calma depois.
[800ms]
[serious] Escolher uma máquina enorme para a hora mais exigente significa pagar por essa capacidade o mês inteiro, e ainda correr o risco de errar.
[600ms]
[confident] A loja precisa de capacidade que acompanhe a demanda, em vez de depender apenas de previsões.

## Step 2 · Manage a group of VMs

[calm] Um conjunto de dimensionamento muda a unidade que você administra.
[600ms]
[confident] Em vez de criar máquinas uma por vez, você define a configuração e o conjunto cria e gerencia instâncias a partir dela.
[600ms]
[serious] Ele gerencia as instâncias. A aplicação e o balanceador de carga à frente delas continuam sendo componentes configurados separadamente.

## Step 3 · Choose an orchestration mode

[curious] A primeira decisão importante é o modo de orquestração.
[800ms]
[confident] As instâncias de Flexible são recursos comuns de máquina virtual, que podem ser inspecionados e gerenciados individualmente. As de Uniform são específicas do conjunto e administradas como grupo.
[600ms]
[serious] O modo é escolhido na criação e não pode ser alterado depois. Aqui seguimos com Flexible, o modo recomendado.

## Step 4 · Configure a bounded scaling policy

[calm] Agora configure uma regra para o conjunto seguir.
[600ms]
[confident] Este exemplo mantém entre duas e quatro máquinas. A política adiciona ou remove instâncias conforme a demanda muda.
[600ms]
[serious] Nada disso é instantâneo. Avaliar a regra, aguardar o intervalo de resfriamento, provisionar a máquina e confirmar sua prontidão leva tempo. Prepare a capacidade antes do pico.

## Step 5 · Combine scaling with zone placement

[calm] Capacidade e localização são decisões diferentes, e um conjunto pode atender às duas.
[600ms]
[confident] Quando configurado para abranger zonas de disponibilidade, ele distribui as instâncias entre essas zonas durante a criação.
[600ms]
[serious] Essa distribuição precisa ser configurada. Um conjunto não zonal não garante distribuição entre zonas.

## Step 6 · Separate routing health from repair

[curious] Aqui existem dois mecanismos de integridade com funções diferentes.
[600ms]
[confident] As sondas do balanceador decidem para onde vai o tráfego novo. Os reparos automáticos decidem quando substituir uma instância com problemas.
[600ms]
[serious] Em Flexible, os reparos exigem a extensão Application Health e uma política habilitada, com um período de carência para não confundir uma inicialização lenta com uma falha. Alterne os estados e observe as duas respostas.

## Step 7 · Scale in with the application in mind

[serious] Reduzir a quantidade de instâncias é a metade que costuma ser esquecida.
[600ms]
[calm] Quando a regra remove uma instância, o que dependia daquela máquina vai junto, incluindo sessões e dados guardados apenas no disco local.
[600ms]
[determined] Projete para essa remoção: conclua o trabalho pendente, trate a notificação de término e mantenha o estado durável fora da máquina.

## Step 8 · VM Scale Sets - All in One

[reflective] Seis decisões formam um único projeto operacional.
[600ms]
[confident] A configuração da máquina, o modo de orquestração, a política de dimensionamento, as zonas, a integridade e os reparos, e a localização dos dados.
[600ms]
[proud] Juntas, elas permitem que a loja da Contoso cresça durante a promoção e diminua depois, sem alguém precisar vigiar um gráfico à meia-noite.
