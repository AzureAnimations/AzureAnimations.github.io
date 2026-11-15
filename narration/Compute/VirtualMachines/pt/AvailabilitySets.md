# Narrator Script - Conjuntos de disponibilidade

**Source animation:** journeys/Compute/VirtualMachines/AvailabilitySets.html

**Script status:** Authored voiceover.

Delivery cues appear in brackets; pauses are on separate lines.

## Step 1 · One host, one point of failure

[serious] A loja funciona, mas depende de uma única máquina virtual.
[600ms]
[curious] O que acontece se o host físico falhar ou se a plataforma precisar interrompê-lo para manutenção?
[800ms]
[calm] A loja para junto. Uma máquina só é um ponto único de falha, por mais bem configurada que esteja.

## Step 2 · Prepare another application instance

[confident] O primeiro passo é preparar outra máquina com a mesma aplicação.
[600ms]
[serious] O Azure não copia a loja por você. A equipe implanta a segunda máquina virtual, instala a aplicação e coloca um balanceador de carga na frente das duas.
[600ms]
[reassuring] Duas instâncias preparadas são a base de tudo nesta lição.

## Step 3 · Separate fault domains

[calm] Agora pedimos ao Azure para manter essas máquinas separadas.
[600ms]
[confident] Um conjunto de disponibilidade distribui as máquinas entre domínios de falha. Cada domínio agrupa hardware que compartilha uma fonte de energia e um switch de rede.
[600ms]
[reassuring] Se um rack falhar, a instância no outro domínio pode continuar atendendo.

## Step 4 · Separate update domains

[calm] O mesmo conjunto também organiza as máquinas em domínios de atualização.
[600ms]
[confident] A manutenção planejada da plataforma percorre esses grupos um de cada vez, evitando reiniciar todas as instâncias ao mesmo tempo.
[600ms]
[serious] Nenhum deles é uma zona de disponibilidade. Domínios de falha e de atualização separam riscos dentro do limite de um datacenter.

## Step 5 · A hardware failure unfolds

[curious] Avance pelos estados do cenário e observe a sequência dos acontecimentos.
[600ms]
[serious] Primeiro a instância para. Depois, as sondas de integridade detectam a falha e deixam de enviar tráfego para ela.
[600ms]
[calm] Novas conexões vão para a máquina saudável. As conexões que dependiam da máquina que caiu podem ser perdidas, então a aplicação precisa estar pronta para tentar novamente.

## Step 6 · Know the boundary

[reflective] Também precisamos reconhecer o que este projeto não cobre.
[600ms]
[serious] Um conjunto de disponibilidade separa riscos de hardware e manutenção planejada dentro de um datacenter. Não cobre a perda de uma zona inteira nem corrige uma aplicação com defeito.
[600ms]
[confident] A Microsoft recomenda conjuntos de dimensionamento com orquestração Flexible para oferecer mais opções de disponibilidade. Os conjuntos de disponibilidade continuam válidos e não foram descontinuados.

## Step 7 · Availability Sets - All in One

[reflective] Vamos juntar as peças.
[600ms]
[confident] Domínios de falha separam o risco de hardware, domínios de atualização separam a manutenção planejada, e o balanceador envia tráfego às instâncias saudáveis.
[600ms]
[determined] A aplicação, suas réplicas e seus dados continuam sob responsabilidade da equipe. As zonas vêm a seguir.
