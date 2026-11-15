# Narrator Script — Architect · Design for recovery: RTO, RPO and the right tool

**Source animation:** [RecoveryObjectives.html](../../../journeys/Architect/RecoveryObjectives.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/well-architected/reliability/metrics>
- <https://learn.microsoft.com/azure/reliability/concept-service-level-agreements>
- <https://learn.microsoft.com/azure/backup/backup-overview>
- <https://learn.microsoft.com/azure/backup/backup-azure-backup-faq>
- <https://learn.microsoft.com/azure/backup/backup-azure-recovery-services-vault-overview>
- <https://learn.microsoft.com/azure/backup/backup-vault-overview>
- <https://learn.microsoft.com/azure/backup/backup-azure-immutable-vault-concept>
- <https://learn.microsoft.com/azure/site-recovery/site-recovery-overview>
- <https://learn.microsoft.com/azure/backup/backup-architecture>

---

## Step 1 · Recovery objectives: RTO, RPO and SLA

[calm] O cronograma de recuperação faz duas perguntas diferentes sobre negócios, não uma pergunta geral sobre disponibilidade.
[600ms]
[curious] RPO descreve quanto dados recentes Contoso pode se dar ao luxo de perder, enquanto RTO descreve quanto tempo de recuperação pode levar.
[600ms]
[reassuring] Um SLA é um compromisso de serviço, não um substituto para aqueles alvos de recuperação específicos de carga de trabalho.

## Step 2 · Tier the workloads by what they cost to lose

[calm] As cargas de trabalho da Contoso não causam todos os mesmos danos quando param ou perdem dados recentes.
[600ms]
[curious] Os quatro níveis definem metas de recuperação diferentes de acordo com o impacto do negócio, em vez de comprar a opção mais rígida para tudo.
[600ms]
[reassuring] Trate os números aqui como requisitos de exemplo e use cada nível para orientar o investimento em proteção e recuperação.

## Step 3 · Azure Backup: restore data from a point in time

[calm] O Azure Backup mantém pontos de recuperação que a Contoso pode restaurar quando dados ou uma carga de trabalho protegida precisam de recuperação.
[600ms]
[curious] Escolha o cofre e a política para corresponder ao que está sendo protegido, depois considere as proteções ao redor do próprio backup.
[600ms]
[reassuring] Manter um histórico recuperável resolve um problema diferente de simplesmente manter outra cópia em execução.

## Step 4 · Azure Site Recovery: fail over the workload

[calm] O Azure Site Recovery replica a carga de trabalho para que a Contoso possa fazer failover após um desastre.
[600ms]
[curious] O plano de recuperação ordena os níveis de aplicação e quaisquer ações necessárias, em vez de iniciar todos os componentes sem coordenação.
[600ms]
[reassuring] Um failover de teste permite que a equipe ensaie o caminho de recuperação sem tratar a primeira interrupção real como seu primeiro exercício.

## Step 5 · Backup or replication?

[calm] Esses dois caminhos de recuperação são complementares: restaurar um ponto de recuperação ou fazer failover para uma réplica.
[600ms]
[curious] O backup aborda dados perdidos ou danificados, enquanto a replicação ajuda a recuperar uma carga de trabalho após perder sua localização operacional.
[600ms]
[reassuring] Escolha de acordo com o alvo de falha e recuperação; uma segunda cópia em execução não substitui um histórico de backup protegido.

## Step 6 · Choose where the second copy lives

[calm] A posição da segunda cópia muda de quais falhas o projeto pode sobreviver.
[600ms]
[curious] Uma cópia local, uma cópia entre zonas e uma cópia em outra região oferecem diferentes limites de proteção.
[600ms]
[reassuring] Compare a distância e a opção de restauração ao objetivo de recuperação da Contoso, incluindo se a equipe deve realizar seu próprio exercício regional de recuperação.

## Step 7 · Protect on-premises servers too

[calm] Alguns servidores Contoso permanecerão on-premises, então o design de recuperação também deve ultrapassar esse limite.
[600ms]
[curious] O diagrama separa backup baseado em agente, um servidor de backup e a replicação de cargas de trabalho no Azure.
[600ms]
[reassuring] Escolha a rota que corresponde ao sistema protegido e se o objetivo é restaurar dados ou recuperar a carga de trabalho em execução.

## Step 8 · All in one: recover to the objective

[calm] Comece pelo alvo de negócio, depois siga o projeto por níveis de carga de trabalho, ferramentas de recuperação e locais de cópia.
[600ms]
[curious] A resposta da Contoso é uma abordagem de recuperação que se encaixa em cada carga de trabalho, não uma única ferramenta aplicada em todos os lugares.
[600ms]
[reassuring] A próxima lição adiciona os recursos de disponibilidade de banco de dados e armazenamento que mantêm a camada de dados pronta para falhas.

