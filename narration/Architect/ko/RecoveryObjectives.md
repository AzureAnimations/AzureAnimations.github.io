# Narrator Script — Architect · Design for recovery: RTO, RPO and the right tool

**Source animation:** [RecoveryObjectives.html](../../../journeys/Architect/RecoveryObjectives.html)
**Language:** ko

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

[calm] 복구 타임라인은 가용성에 대한 일반적인 질문 하나가 아니라, 서로 다른 두 가지 비즈니스 질문을 던집니다.
[600ms]
[curious] RPO는 Contoso가 감당할 수 있는 최근 데이터 양을 설명하고, RTO는 복구에 걸리는 시간을 설명합니다.
[600ms]
[reassuring] SLA는 서비스 약속이지, 해당 워크로드별 복구 목표를 대체하는 것이 아닙니다.

## Step 2 · Tier the workloads by what they cost to lose

[calm] Contoso의 워크로드가 최근 데이터를 중단하거나 손실할 때 모두 같은 피해를 일으키지는 않습니다.
[600ms]
[curious] 네 가지 단계는 모든 것에 대해 가장 엄격한 옵션을 구매하는 대신 비즈니스 영향에 따라 서로 다른 복구 목표를 설정합니다.
[600ms]
[reassuring] 여기 수치를 예시 요구사항으로 삼고, 각 계층을 보호와 회수 투자 지침으로 활용하세요.

## Step 3 · Azure Backup: restore data from a point in time

[calm] Azure Backup은 데이터나 보호된 워크로드가 복구가 필요할 때 Contoso가 복원할 수 있는 복구 지점을 보관합니다.
[600ms]
[curious] 보호 대상에 맞는 볼트와 정책을 선택한 다음, 백업 자체를 보호하는 방안도 고려하세요.
[600ms]
[reassuring] 복구 가능한 이력을 유지하는 것은 단순히 또 다른 실행 중인 복사본을 유지하는 것과는 다른 문제를 해결합니다.

## Step 4 · Azure Site Recovery: fail over the workload

[calm] Azure Site Recovery는 워크로드를 복제하여 재난 후 Contoso가 실패 복구를 할 수 있도록 합니다.
[600ms]
[curious] 복구 계획은 모든 컴포넌트를 조정 없이 시작하는 대신, 애플리케이션 계층과 필요한 작업을 순서로 지정합니다.
[600ms]
[reassuring] 테스트 페이얼오버는 팀이 첫 번째 실제 장애를 첫 훈련으로 여기지 않고 복구 경로를 리허설할 수 있게 해줍니다.

## Step 5 · Backup or replication?

[calm] 이 두 복구 경로는 상호 보완적입니다: 복구 지점을 복원하거나 복제본으로 페일오버하는 방식입니다.
[600ms]
[curious] 백업은 손실되거나 손상된 데이터를 처리하며, 복제는 작업 위치를 잃은 후 워크로드를 되돌리는 데 도움을 줍니다.
[600ms]
[reassuring] 실패 및 복구 대상에 따라 선택하며; 두 번째 실행 복사본은 보호된 백업 기록을 대체하지 않습니다.

## Step 6 · Choose where the second copy lives

[calm] 두 번째 복사본이 어디에 있느냐에 따라 설계가 견딜 수 있는 장애의 범위가 달라집니다.
[600ms]
[curious] 로컬 복사본, 존 간 복사본, 다른 지역 복사본은 서로 다른 보호 경계를 제공합니다.
[600ms]
[reassuring] 거리 복구 및 복원 옵션을 Contoso의 복구 목표에 맞추고, 팀이 자체 지역 복구 훈련을 수행해야 하는지 여부도 포함합니다.

## Step 7 · Protect on-premises servers too

[calm] 일부 Contoso 서버는 온프레미스에 머무르므로, 복구 설계도 그 경계를 넘어야 합니다.
[600ms]
[curious] 이 다이어그램은 에이전트 기반 백업, 백업 서버, 워크로드 복제를 Azure로 분리합니다.
[600ms]
[reassuring] 보호하려는 시스템에 맞는 경로를 고르되, 목표가 데이터 복원인지 실행 중인 워크로드 복구인지도 고려하세요.

## Step 8 · All in one: recover to the objective

[calm] 비즈니스 목표에서 시작해 워크로드 계층, 복구 도구, 복사 위치를 따라 설계를 따라가세요.
[600ms]
[curious] Contoso의 해답은 각 업무에 맞는 복구 접근법이며, 모든 곳에 적용되는 단일 도구가 아닙니다.
[600ms]
[reassuring] 다음 강의에서는 데이터 계층을 장애에 대비시키는 데이터베이스와 저장 공간 가용성 기능을 추가합니다.

