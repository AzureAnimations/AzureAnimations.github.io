# Narrator Script - Virtual Machine Scale Sets

**Source animation:** journeys/Compute/VirtualMachines/VirtualMachineScaleSets.html

Delivery cues appear in brackets; pauses are on separate lines.
Generated from scripts/_vm-journeys/content.mjs.

## Step 1 · Demand changes

[calm] A demanda muda.
[600ms]
A Contoso precisa de capacidade que cresça com a demanda; uma VM grande nem sempre basta.
[600ms]
[serious] Política ilustrativa; avaliação, espera, provisionamento e prontidão levam tempo.

## Step 2 · Manage a group of VMs

[calm] Gerencie um grupo de VMs.
[600ms]
Um conjunto gerencia instâncias. A aplicação e o balanceador são configurados separadamente.
[600ms]
[serious] Réplicas e balanceamento são configurados separadamente.

## Step 3 · Choose an orchestration mode

[calm] Escolha o modo de orquestração.
[600ms]
Flexible usa recursos VM padrão; Uniform usa recursos específicos do conjunto. Seguimos com Flexible.
[600ms]
[serious] Escolha o modo na criação; não pode ser alterado depois. Aqui usamos Flexible.

## Step 4 · Configure a bounded scaling policy

[calm] Configure uma política limitada.
[600ms]
Após a avaliação, a meta é de 2 a 4 VMs. Novas instâncias só recebem tráfego quando estão prontas.
[600ms]
[serious] Política ilustrativa; avaliação, espera, provisionamento e prontidão levam tempo.

## Step 5 · Combine scaling with zone placement

[calm] Combine escala e zonas.
[600ms]
Um conjunto pode abranger zonas quando configurado assim. Capacidade e localização são decisões distintas.
[600ms]
[serious] A distribuição entre zonas é configurada; um conjunto não zonal não a garante.

## Step 6 · Separate routing health from repair

[calm] Separe roteamento e reparo.
[600ms]
Sondas orientam o tráfego. Reparos no Flexible usam a extensão Application Health e uma política.
[600ms]
[serious] Reparos no Flexible exigem a extensão Application Health e política com período de carência.

## Step 7 · Scale in with the application in mind

[calm] Reduza considerando a aplicação.
[600ms]
Antes de remover capacidade, planeje drenagem, terminação e estado durável fora da VM.
[600ms]
[serious] Planeje a terminação, drene o trabalho e mantenha estado durável fora das VMs descartáveis.

## Step 8 · VM Scale Sets - All in One

[calm] VMSS - Visão completa.
[600ms]
Configuração, orquestração, escala, zonas, integridade e dados formam um projeto operacional.
[600ms]
[serious] Prepare aplicação, dados e failover.
