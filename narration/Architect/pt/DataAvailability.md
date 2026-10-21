# Narrator Script — Architect · Keep data available: HA and DR for databases and storage

**Source animation:** [DataAvailability.html](../../../journeys/Architect/DataAvailability.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/azure-sql/database/business-continuity-high-availability-disaster-recover-hadr-overview>
- <https://learn.microsoft.com/azure/azure-sql/managed-instance/business-continuity-high-availability-disaster-recover-hadr-overview>
- <https://learn.microsoft.com/azure/azure-sql/database/automated-backups-overview>
- <https://learn.microsoft.com/azure/azure-sql/virtual-machines/windows/business-continuity-high-availability-disaster-recovery-hadr-overview>
- <https://learn.microsoft.com/azure/cosmos-db/high-availability>
- <https://learn.microsoft.com/azure/postgresql/backup-restore/concepts-business-continuity>
- <https://learn.microsoft.com/azure/storage/common/storage-redundancy>

---

## Step 1 · Zone redundancy: survive a zone failure

[calm] O banco de dados de pedidos deve permanecer disponível quando uma zona de disponibilidade falha.
[600ms]
[curious] A redundância de zonas distribui a proteção do banco de dados entre as zonas dentro da região, para que a colocação sobrevivente continue servindo a aplicação.
[600ms]
[reassuring] Isso resolve uma falha de zona; ela não cria sozinha uma segunda região para um desastre regional.

## Step 2 · Across regions: geo-replication or failover group?

[calm] Uma interrupção regional exige uma cópia do banco de dados em outra região, não apenas em outra zona da mesma região.
[600ms]
[curious] Compare um banco de dados geo-replicado com um grupo de failover que coordena os bancos de dados e fornece endpoints estáveis de ouvinte.
[600ms]
[reassuring] Escolha deliberadamente a abordagem de unidade de failover e conexão de aplicação e leve em conta as mudanças que ainda não foram replicadas.

## Step 3 · Backups: pick the restore for the problem

[calm] Os caminhos de backup do banco de dados respondem a diferentes perguntas de recuperação, mesmo quando as réplicas de disponibilidade já estão disponíveis.
[600ms]
[curious] A restauração em um momento no tempo volta antes de um erro, a retenção de longo prazo mantém o histórico antigo de recuperação e a restauração geográfica usa a cópia remota de backup.
[600ms]
[reassuring] Escolha a restauração que corresponde ao incidente, em vez de confundir um backup com um standby imediatamente disponível.

## Step 4 · SQL Server on VMs: availability groups

[calm] O SQL Server em máquinas virtuais dá controle à Contoso, mas também torna o projeto de disponibilidade responsabilidade da Contoso.
[600ms]
[curious] Grupos de disponibilidade usam réplicas de banco de dados, enquanto uma instância de cluster de failover protege no nível da instância.
[600ms]
[reassuring] Escolha os bancos de dados que precisam fazer failover juntos, depois planeje como operar, monitorar e manter suas réplicas.

## Step 5 · Azure Cosmos DB: replicate and choose consistency

[calm] O Azure Cosmos DB pode colocar cópias entre regiões, mas a configuração de escrita altera o design.
[600ms]
[curious] Uma única região de escrita e múltiplas regiões de escrita apresentam diferentes considerações de failover e conflito.
[600ms]
[reassuring] Escolha o requisito de consistência junto com a topologia regional, porque disponibilidade, expectativas de perda de dados e comportamento da aplicação devem concordar.

## Step 6 · PostgreSQL flexible server: layers of recovery

[calm] A recuperação PostgreSQL utiliza várias camadas em vez de um switch universal.
[600ms]
[curious] Um standby redundante por zona aborda a disponibilidade local, enquanto uma réplica de leitura entre regiões e backups atendem a diferentes situações de recuperação.
[600ms]
[reassuring] Compare o limite de falha e as expectativas de recuperação de cada camada antes de afirmar que todo o design do banco de dados atende ao objetivo.

## Step 7 · Storage redundancy: one decision row

[calm] A redundância de armazenamento é outra decisão de fronteira de falha: um datacenter, uma zona ou uma região.
[600ms]
[curious] Siga as cópias do LRS e ZRS até a proteção regional adicional no GRS e GZRS.
[600ms]
[reassuring] Uma cópia remota e um endpoint remoto legível não são a mesma promessa, então considere as opções de acesso de leitura separadamente.

## Step 8 · All in one: pick by RTO and RPO

[calm] O resumo começa com RTO e RPO, depois mapeia cada serviço de dados para a camada de proteção apropriada.
[600ms]
[curious] Alvos mais apertados geralmente precisam de mais capacidade pronta para uso, enquanto a recuperação baseada em backup segue um caminho diferente.
[600ms]
[reassuring] Contoso deve justificar o projeto de disponibilidade diante de seus alvos antes de passar a escolher a plataforma de computação da aplicação.

