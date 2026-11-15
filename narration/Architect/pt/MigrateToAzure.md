# Narrator Script — Architect · Design a migration to Azure

**Source animation:** [MigrateToAzure.html](../../../journeys/Architect/MigrateToAzure.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/cloud-adoption-framework/migrate/plan-migration>
- <https://learn.microsoft.com/azure/cloud-adoption-framework/plan/select-cloud-migration-strategy>
- <https://learn.microsoft.com/azure/migrate/migrate-services-overview>
- <https://learn.microsoft.com/azure/migrate/concepts-vmware-agentless-migration>
- <https://learn.microsoft.com/azure/dms/dms-overview>
- <https://learn.microsoft.com/azure/azure-sql/azure-sql-iaas-vs-paas-what-is-overview>
- <https://learn.microsoft.com/azure/storage/common/storage-migration-overview>
- <https://learn.microsoft.com/azure/cloud-adoption-framework/migrate/>

---

## Step 1 · Plan the move: 120 servers, one method

[calm] A Contoso possui cento e vinte servidores, mas primeiro precisa de um método de migração, em vez de uma ferramenta de mudança.
[600ms]
[curious] A sequência do Cloud Adoption Framework vai do planejamento e preparação até a execução, otimização e aposentadoria do código-fonte.
[600ms]
[reassuring] Prepare a zona de aterrissagem e o plano de adoção antes de tratar o primeiro servidor copiado como uma migração bem-sucedida.

## Step 2 · Discover and assess with Azure Migrate

[calm] O Azure Migrate coleta evidências de configuração e desempenho por meio de descoberta e avaliação.
[600ms]
[curious] Use essas evidências para entender a prontidão, o tamanho adequado, o custo e as dependências que afetam a mudança.
[600ms]
[reassuring] Contoso precisa de uma imagem defensável do estado atual antes de decidir o que migrar, como migrar e em qual ordem.

## Step 3 · Dependencies decide the move groups

[calm] O mapa de dependências mostra por que uma lista de servidores não é suficiente para planejar as ondas de migração.
[600ms]
[curious] Componentes intimamente conectados devem se mover juntos, enquanto dependências mais frouxas podem permitir ondas separadas.
[600ms]
[reassuring] Comece com cargas de trabalho mais simples e de menor risco para que a Contoso possa praticar o processo antes de mover a plataforma de pedidos críticos.

## Step 4 · Pick a strategy for each workload

[calm] Escolha uma estratégia de migração para cada carga de trabalho, usando a mudança mais leve que ainda atinja seu objetivo.
[600ms]
[curious] Algumas cargas de trabalho podem ser rehospedadas ou replatformadas; outras podem justificar alterações no código, um redesign maior ou não mover nada.
[600ms]
[reassuring] O destino e a mudança necessária devem concordar, em vez de chamar cada mudança para um serviço gerenciado de simples lift and shift.

## Step 5 · Migrate servers: replicate, test, cut over

[calm] A migração do servidor começa com a replicação, depois mantém o alvo sincronizado enquanto a fonte continua rodando.
[600ms]
[curious] Uma migração de teste valida a carga de trabalho copiada na rede de teste antes do corte real.
[600ms]
[reassuring] Aposente o servidor original somente depois que a Contoso tiver verificado o serviço migrado e suas dependências.

## Step 6 · Migrate the order database

[calm] Os requisitos de características do banco de dados de pedidos restringiram o destino antes da escolha do modo de migração.
[600ms]
[curious] Compare o Banco de Dados SQL, o SQL Managed Instance e o SQL Server em uma máquina virtual, e então considere o tempo de inatividade que a empresa aceita.
[600ms]
[reassuring] Verifique quais modos de migração o Serviço de Migração de Banco de Dados suporta para o alvo; a ferramenta não elimina a necessidade de escolher o destino correto.

## Step 7 · Migrate files and images

[calm] Mover arquivos e imagens depende do volume, da rede e se o acesso local deve continuar.
[600ms]
[curious] Data Box, Storage Mover, AzCopy e Azure File Sync atendem diferentes partes dessa decisão.
[600ms]
[reassuring] Uma semente offline e um caminho de sincronização online podem funcionar juntos, então a migração não precisa ser totalmente offline ou totalmente online.

## Step 8 · Cut over with a way back

[calm] O plano de transição deve indicar como a Contoso vai validar o sucesso e quando ele vai voltar.
[600ms]
[curious] Ajuste o método de migração à tolerância de tempo de inatividade e depois torne explícitos os checkpoints de ir ou não.
[600ms]
[reassuring] A otimização e a desativação da fonte vêm após a validação, não antes da equipe saber que a nova plataforma atende aos requisitos acordados.

## Step 9 · All in one: the migration route

[calm] O caminho completo começa com a avaliação e as dependências, não com a cópia de servidores.
[600ms]
[curious] Contoso escolhe uma estratégia e ferramenta para cada carga de trabalho, ensaia a mudança e faz um caminho de recuperação.
[600ms]
[reassuring] O estudo de caso agora reúne essas escolhas com identidade, dados, continuidade e infraestrutura em um único projeto.

