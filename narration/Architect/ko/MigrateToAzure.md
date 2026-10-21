# Narrator Script — Architect · Design a migration to Azure

**Source animation:** [MigrateToAzure.html](../../../journeys/Architect/MigrateToAzure.html)
**Language:** ko

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

[calm] Contoso는 120대의 서버를 보유하고 있지만, 먼저 이동 도구가 아니라 마이그레이션 방법이 필요합니다.
[600ms]
[curious] Cloud Adoption Framework의 순서는 계획과 준비부터 실행, 최적화, 소스 종료까지 이어집니다.
[600ms]
[reassuring] 첫 번째 복사된 서버를 성공적인 마이그레이션으로 간주하기 전에 착륙 구역과 채택 계획을 준비하세요.

## Step 2 · Discover and assess with Azure Migrate

[calm] Azure Migrate는 검색 및 평가를 통해 구성 및 성능 증거를 수집합니다.
[600ms]
[curious] 그 증거를 활용해 준비 상태, 적절한 규모, 비용, 그리고 이사에 영향을 미치는 의존성을 이해하세요.
[600ms]
[reassuring] Contoso는 무엇을 어떻게 마이그레이션할지, 어떤 순서로 마이그레이션할지 결정하기 전에 현재 부동산에 대한 방어 가능한 그림을 파악해야 합니다.

## Step 3 · Dependencies decide the move groups

[calm] 의존성 맵은 서버 리스트만으로는 마이그레이션 파동을 계획하기에 충분하지 않은 이유를 보여줍니다.
[600ms]
[curious] 밀접하게 연결된 구성 요소들은 함께 움직여야 하며, 느슨한 의존성은 별도의 파동을 허용할 수 있습니다.
[600ms]
[reassuring] Contoso가 중요한 주문 플랫폼을 옮기기 전에 프로세스를 연습할 수 있도록 더 단순하고 위험이 낮은 작업부터 시작하세요.

## Step 4 · Pick a strategy for each workload

[calm] 각 워크로드별로 목표 달성에 가장 가벼운 변경 사항을 사용하여 마이그레이션 전략을 선택하세요.
[600ms]
[curious] 일부 워크로드는 재호스팅되거나 플랫폼 변경이 가능하며; 다른 작업은 코드 변경, 대규모 재설계, 또는 아예 이동하지 않는 정당화가 필요할 수 있습니다.
[600ms]
[reassuring] 목적지와 필요한 변경 사항이 서로 맞아야 합니다. 매니지드 서비스로의 모든 이동을 단순한 리프트 앤 시프트라고 부르면 안 됩니다.

## Step 5 · Migrate servers: replicate, test, cut over

[calm] 서버 마이그레이션은 복제에서 시작하여 소스가 계속 실행되는 동안 대상을 동기화하는 상태를 유지합니다.
[600ms]
[curious] 테스트 마이그레이션은 실제 컷오버 전에 테스트 네트워크에서 복사된 워크로드를 검증합니다.
[600ms]
[reassuring] Contoso가 마이그레이션된 서비스와 그 의존성을 점검한 후에만 원래 서버를 종료하세요.

## Step 6 · Migrate the order database

[calm] 주문 데이터베이스의 기능 요구사항은 마이그레이션 모드를 선택하기 전에 목적지를 좁힙니다.
[600ms]
[curious] 가상 머신에서 SQL 데이터베이스, SQL 관리 인스턴스, SQL Server를 비교한 후, 비즈니스가 허용하는 다운타임을 고려하세요.
[600ms]
[reassuring] 데이터베이스 마이그레이션 서비스가 대상에 대해 지원하는 마이그레이션 모드를 확인하세요; 이 도구는 올바른 목적지를 선택할 필요를 없애지 않습니다.

## Step 7 · Migrate files and images

[calm] 파일과 이미지 이동은 볼륨, 네트워크, 그리고 로컬 접근이 계속되어야 하는지 여부에 따라 달라집니다.
[600ms]
[curious] Data Box, Storage Mover, AzCopy, Azure File Sync는 그 결정의 다른 부분을 담당합니다.
[600ms]
[reassuring] 오프라인 시드와 온라인 동기화 경로가 함께 작동할 수 있어, 마이그레이션이 완전히 오프라인이거나 완전히 온라인일 필요는 없습니다.

## Step 8 · Cut over with a way back

[calm] 전환 계획에는 Contoso가 성공 여부를 어떻게 검증하고 언제 이전 상태로 되돌릴지가 명시되어야 합니다.
[600ms]
[curious] 마이그레이션 방식을 다운타임 허용 범위에 맞추고, 실행 여부 체크포인트를 명확히 설정하세요.
[600ms]
[reassuring] 최적화와 소스 폐기는 검증 후에 이루어지며, 팀이 새 플랫폼이 합의된 요구사항을 충족한다는 것을 알기 전에는 이루어지지 않습니다.

## Step 9 · All in one: the migration route

[calm] 전체 경로는 서버를 복제하는 것이 아니라 평가와 종속성 파악에서 시작됩니다.
[600ms]
[curious] Contoso는 워크로드마다 전략과 도구를 선택하고, 이전을 리허설한 뒤, 복구 경로를 확보한 상태에서 전환합니다.
[600ms]
[reassuring] 사례 연구는 이제 이러한 선택지들을 신원, 데이터, 연속성, 인프라와 하나의 설계로 통합합니다.

