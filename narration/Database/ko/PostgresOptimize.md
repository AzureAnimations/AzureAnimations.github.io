# Narrator Script — PostgreSQL: 벡터 검색 최적화

**Source animation:** [PostgresOptimize.html](../../../journeys/Database/PostgresOptimize.html)
**Language:** ko

대괄호 안은 전달 방식 안내이며, [600ms]는 문장 사이의 쉼을 나타냅니다.

<!-- Fact source: https://learn.microsoft.com/en-us/training/modules/optimize-vector-search-azure-database-postgresql/ · Learning path: https://learn.microsoft.com/en-us/training/paths/develop-ai-solutions-azure-database-postgresql/ -->

## Step 1 · Where a vector query spends its time

[curious] 느린 제품 검색은 벡터 비교 자체뿐 아니라 여러 지점에서 시간을 소비할 수 있습니다.
[600ms]
[calm] 연결 설정, 계획, 벡터 비교, 데이터 읽기를 따라가며 어디에서 시간이 걸리는지 확인합니다.
[600ms]
[encouraging] 먼저 기준선을 측정해, 각 조정이 실제로 관찰한 지연 원인을 해결하도록 하세요.

## Step 2 · Tune PostgreSQL for pgvector

[confident] 메모리, 플래너 동작, 벡터 검색의 탐색량을 통해 Contoso는 같은 쿼리를 여러 관점에서 조정할 수 있습니다.
[600ms]
[serious] 이 설정들은 메모리, 대기 시간, 재현율 사이의 균형을 바꾸므로 응답 속도만 측정해서는 충분하지 않습니다.
[600ms]
[encouraging] 한 번에 매개 변수 하나씩 바꾸고, 실행 계획을 확인한 뒤 대표성 있는 데이터로 결과를 테스트하세요.

## Step 3 · Choose and configure the vector index

[confident] 벡터 인덱스는 메모리, 빌드 시간, 재현율, 데이터 변경 빈도를 기준으로 선택합니다.
[600ms]
[calm] 비교표는 인덱스 빌드 시의 결정과 쿼리 시의 탐색량을 나누어 보여 주며, 정확한 스캔을 비교 기준으로 사용할 수 있습니다.
[600ms]
[serious] 거리 측정 기준을 쿼리에 맞추고, 인덱스 이름만으로 고르기보다 절충점을 직접 테스트하세요.

## Step 4 · Shape the table for vectors and filters

[confident] 자주 필터링하는 제품 속성은 형식이 지정된 열에 두고, 임베딩과 유연한 JSON에는 각자의 역할을 맡깁니다.
[600ms]
[calm] 범주와 가격에는 B-tree를, 재고가 있는 제품에는 부분 인덱스를, JSON 포함 조건에는 GIN을 사용합니다.
[600ms]
[serious] 벡터 인덱스가 모든 필터를 빠르게 처리한다고 기대하지 말고, 각 인덱스를 액세스 패턴에 맞추세요.

## Step 5 · Scale for high-volume workloads

[confident] 개별 쿼리가 느리거나 벡터와 인덱스가 가용 메모리를 압박한다면 먼저 스케일 업합니다.
[600ms]
[calm] 그런 다음 그림처럼 읽기 물량에는 읽기 복제본을, 반복 조회에는 Azure Managed Redis를 사용합니다.
[600ms]
[serious] 쓰기는 주 서버에서 처리하고, 추가 용량이 워크로드의 어느 부분에 실제로 도움이 되는지 측정하세요.

## Step 6 · Pool connections and manage sessions

[confident] PgBouncer는 많은 클라이언트가 더 적은 서버 연결을 공유하게 하여, 반복적인 연결 설정과 연결용 메모리 부담을 줄입니다.
[600ms]
[calm] 트랜잭션 모드는 트랜잭션 사이에서 연결을 공유하고, 세션 모드는 클라이언트 연결이 끊길 때까지 하나를 유지합니다.
[600ms]
[serious] 쿼리별 설정은 트랜잭션 범위로 제한해, 풀의 연결이 의도하지 않은 설정을 다음 작업에 전달하지 않도록 하세요.

## Step 7 · Contoso’s product search, tuned

[confident] Contoso의 비교는 조정한 매개 변수, 벡터 인덱스, 형식이 지정된 필터, 적절한 용량, 연결 풀을 함께 적용합니다.
[600ms]
[calm] 테이블과 제품 질문은 그대로 유지하면서, 각 변경이 서로 다른 대기 원인을 개선합니다.
[600ms]
[serious] 이 예시는 정성적인 설명이므로, 자체 데이터로 벤치마크하고 각각의 변경이 어떤 효과를 내는지 기록하세요.

## Step 8 · All in One: Optimize vector search

[confident] 마지막 그림은 하나의 PostgreSQL 워크로드를 매개 변수, 벡터 인덱스, 테이블 구조, 확장, 연결 풀이라는 다섯 가지 방법으로 둘러쌉니다.
[600ms]
[calm] 성능 개선은 예시 설정을 모두 그대로 복사하는 것이 아니라, 관찰한 동작에 맞게 선택하는 데서 시작합니다.
[600ms]
[encouraging] 먼저 측정하고, 운영 환경과 비슷한 데이터로 변경을 하나씩 테스트한 뒤, 효과를 기록하고 다음 조정으로 넘어가세요.
