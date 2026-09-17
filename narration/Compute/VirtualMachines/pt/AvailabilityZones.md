# Narrator Script - VMs entre zonas de disponibilidade

**Source animation:** journeys/Compute/VirtualMachines/AvailabilityZones.html

Delivery cues appear in brackets; pauses are on separate lines.
Generated from scripts/_vm-journeys/content.mjs.

## Step 1 · What if a whole zone fails?

[calm] E se uma zona inteira falhar?
[600ms]
A Contoso precisa de separação além da infraestrutura compartilhada de um datacenter.
[600ms]
[serious] Um novo projeto zonal, não uma migração direta do conjunto.

## Step 2 · Place one VM in a zone

[calm] Coloque uma VM em uma zona.
[600ms]
Uma VM zonal executa na zona escolhida. Essa escolha não cria uma segunda VM.
[600ms]
[serious] Selecionar uma zona não cria outra instância.

## Step 3 · Prepare VMs across zones

[calm] Prepare VMs entre zonas.
[600ms]
Implante pares de VM e disco em zonas distintas, com a aplicação pronta em cada uma.
[600ms]
[serious] Réplicas e balanceamento são configurados separadamente.

## Step 4 · Configure resilient routing

[calm] Configure rotas resilientes.
[600ms]
Standard Load Balancer com frontend redundante entre zonas envia novas conexões a backends íntegros.
[600ms]
[serious] Frontend redundante entre zonas

## Step 5 · Do not forget the data

[calm] Não esqueça os dados.
[600ms]
A dependência de dados exige resiliência separada. Discos comuns não replicam o estado da aplicação.
[600ms]
[serious] Resiliência configurada à parte

## Step 6 · A zone goes unavailable

[calm] Uma zona fica indisponível.
[600ms]
Com capacidade livre e dados íntegros, novas conexões usam a zona saudável após a detecção.
[600ms]
[serious] Pressupõe capacidade livre, dados íntegros e sondas configuradas.

## Step 7 · Zonal VMs - All in One

[calm] VMs zonais - Visão completa.
[600ms]
Posicionamento separado, aplicações prontas, rotas resilientes e plano de dados atuam juntos.
[600ms]
[serious] Prepare aplicação, dados e failover.
