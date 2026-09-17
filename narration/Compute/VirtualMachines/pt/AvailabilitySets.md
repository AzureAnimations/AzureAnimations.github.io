# Narrator Script - Conjuntos de disponibilidade

**Source animation:** journeys/Compute/VirtualMachines/AvailabilitySets.html

Delivery cues appear in brackets; pauses are on separate lines.
Generated from scripts/_vm-journeys/content.mjs.

## Step 1 · One host, one point of failure

[calm] Um host, um ponto de falha.
[600ms]
A loja depende de uma VM. Uma falha do host pode interromper a aplicação.
[600ms]
[serious] Uma VM funcionando não é um projeto completo de alta disponibilidade.

## Step 2 · Prepare another application instance

[calm] Prepare outra instância.
[600ms]
A Contoso implanta outra VM e configura aplicação e balanceamento separadamente.
[600ms]
[serious] Réplicas e balanceamento são configurados separadamente.

## Step 3 · Separate fault domains

[calm] Separe domínios de falha.
[600ms]
Um conjunto distribui VMs entre grupos de dependências compartilhadas de hardware.
[600ms]
[serious] Domínios de falha e atualização não são zonas.

## Step 4 · Separate update domains

[calm] Separe domínios de atualização.
[600ms]
Eles agrupam VMs para manutenção planejada da plataforma; não são zonas geográficas.
[600ms]
[serious] Domínios de falha e atualização não são zonas.

## Step 5 · A hardware failure unfolds

[calm] Uma falha de hardware acontece.
[600ms]
Primeiro a VM falha, depois as sondas detectam. Novas conexões usam a instância saudável.
[600ms]
[serious] A detecção leva tempo. Conexões existentes não são transferidas intactas.

## Step 6 · Know the boundary

[calm] Conheça o limite.
[600ms]
Conjuntos não protegem contra falhas de uma zona inteira nem corrigem a aplicação convidada.
[600ms]
[serious] A Microsoft recomenda VMSS Flexible para mais recursos. Conjuntos não foram descontinuados.

## Step 7 · Availability Sets - All in One

[calm] Conjuntos - Visão completa.
[600ms]
Domínios de falha separam riscos de hardware; os de atualização separam manutenção. A aplicação ainda exige preparo.
[600ms]
[serious] Réplicas e balanceamento são configurados separadamente.
