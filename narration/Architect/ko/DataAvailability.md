# Narrator Script — Architect · Keep data available: HA and DR for databases and storage

**Source animation:** [DataAvailability.html](../../../journeys/Architect/DataAvailability.html)
**Language:** ko

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

[calm] 주문 데이터베이스는 한 가용성 구역이 실패할 때 계속 이용 가능해야 합니다.
[600ms]
[curious] 존 중복은 데이터베이스 보호를 지역 내 존 간에 분산시켜 남아 있는 배치가 애플리케이션을 계속 지원할 수 있도록 합니다.
[600ms]
[reassuring] 이는 존 장애를 해결하는 방법이며, 그것만으로 리전 장애에 대비한 두 번째 리전이 생기지는 않습니다.

## Step 2 · Across regions: geo-replication or failover group?

[calm] 지역 장애는 같은 지역 내 다른 지역뿐만 아니라 다른 지역의 데이터베이스 복사본이 필요합니다.
[600ms]
[curious] 지리복제된 데이터베이스와 데이터베이스를 조정하고 안정적인 리스너 엔드포인트를 제공하는 장애 조치 그룹을 비교해 보세요.
[600ms]
[reassuring] 장애 조치 유닛과 애플리케이션 연결 방식을 신중히 선택하고, 아직 복제되지 않은 변경 사항을 고려하세요.

## Step 3 · Backups: pick the restore for the problem

[calm] 데이터베이스 백업 경로는 가용성 복제본이 이미 설치되어 있어도 다양한 복구 질문에 답합니다.
[600ms]
[curious] 시점 복원은 실수 이전으로 거슬러 올라가고, 장기 보존은 이전 복구 기록을 유지하며, 지오 복원은 원격 백업 복사본을 사용합니다.
[600ms]
[reassuring] 백업과 즉시 사용 가능한 대기 파일을 혼동하지 말고, 사고와 일치하는 복원을 선택하세요.

## Step 4 · SQL Server on VMs: availability groups

[calm] 가상 머신 위의 SQL Server는 Contoso에게 제어권을 주지만, 가용성 설계는 Contoso의 책임이 됩니다.
[600ms]
[curious] 가용성 그룹은 데이터베이스 복제본을 사용하고, 장애 조치 클러스터 인스턴스는 인스턴스 수준에서 보호합니다.
[600ms]
[reassuring] 함께 페일오버해야 하는 데이터베이스를 선택한 후, 복제본을 어떻게 운영하고 모니터링하며 유지할지 계획하세요.

## Step 5 · Azure Cosmos DB: replicate and choose consistency

[calm] Azure Cosmos DB는 영역 간에 복사본을 배치할 수 있지만, 쓰기 구성이 설계를 변경합니다.
[600ms]
[curious] 단일 쓰기 영역과 여러 쓰기 영역은 장애 조치와 충돌 고려사항이 다릅니다.
[600ms]
[reassuring] 가용성, 데이터 손실 기대치, 애플리케이션 동작이 일치해야 하므로 일관성 요구사항을 지역 토폴로지와 함께 선택하세요.

## Step 6 · PostgreSQL flexible server: layers of recovery

[calm] PostgreSQL 복구는 하나의 범용 스위치가 아니라 여러 계층을 사용합니다.
[600ms]
[curious] 존 중복 대기본은 로컬 가용성을 담당하고, 리전 간 읽기 복제본과 백업은 서로 다른 복구 상황에 쓰입니다.
[600ms]
[reassuring] 전체 데이터베이스 설계가 목표를 충족한다고 주장하기 전에 각 계층의 실패 경계와 복구 기대치를 비교하세요.

## Step 7 · Storage redundancy: one decision row

[calm] 스토리지 중복도 또 다른 실패 경계 결정입니다: 데이터센터, 존 또는 영역 중 하나입니다.
[600ms]
[curious] LRS와 ZRS의 복사본에서 시작해, GRS와 GZRS가 추가로 제공하는 리전 간 보호까지 순서대로 살펴보세요.
[600ms]
[reassuring] 원격 복사본과 읽기 가능한 원격 엔드포인트는 같은 약속이 아니므로, 읽기 접근 옵션을 별도로 고려하세요.

## Step 8 · All in one: pick by RTO and RPO

[calm] 요약은 RTO와 RPO로 시작하여 각 데이터 서비스를 적절한 보호 계층에 매핑합니다.
[600ms]
[curious] 더 좁은 타겟은 보통 더 많은 즉시 사용 가능한 용량이 필요하지만, 백업 기반 복구는 다른 경로를 따릅니다.
[600ms]
[reassuring] Contoso는 애플리케이션의 컴퓨팅 플랫폼을 선택하기 전에 목표에 따른 가용성 설계를 정당화해야 합니다.

