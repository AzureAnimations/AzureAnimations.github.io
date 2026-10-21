# Narrator Script — Cosmos DB: 성능 최적화

**Source animation:** [CosmosOptimize.html](../../../journeys/Database/CosmosOptimize.html)
**Language:** ko

대괄호 안은 전달 방식 안내이며, [600ms]는 문장 사이의 쉼을 나타냅니다.

<!-- Fact source: https://learn.microsoft.com/en-us/training/modules/optimize-query-performance-azure-cosmos-db/ · Learning path: https://learn.microsoft.com/en-us/training/paths/develop-ai-solutions-azure-cosmos-db/ -->

## Step 1 · Measure before you tune

[curious] Contoso의 제품 검색이 느리다면, 어떤 설정을 바꿀지 추측하지 말고 먼저 쿼리 메트릭을 확인하세요.
[600ms]
[calm] 검색한 문서 수와 반환한 문서 수를 인덱스 활용도, 요청 요금과 함께 비교합니다.
[600ms]
[encouraging] 누락된 인덱스를 추가하고 변환이 끝날 때까지 기다린 다음, 다시 측정하세요.

## Step 2 · The indexing policy decides what is indexed

[confident] 인덱싱 정책은 모든 속성을 똑같이 유용하다고 보지 않고, 어떤 제품 속성에 인덱스를 만들지 결정합니다.
[600ms]
[calm] 폭넓게 인덱싱하는 기본 정책과, 이 워크로드에서 실제로 쿼리하는 필드만 포함하는 선택적 정책을 비교합니다.
[600ms]
[reassuring] 불필요한 속성을 범위 인덱스에서 제외하면 중요한 검색용 인덱스는 유지하면서 관리 작업을 줄일 수 있습니다.

## Step 3 · Composite index for filter + sort

[curious] Contoso는 제품을 범주로 필터링하고 가격순으로 정렬하지만, 필터만 지원하면 정렬 작업은 여전히 남습니다.
[600ms]
[confident] 수정한 쿼리는 필터 속성을 정렬에도 포함하고, 여기에 일치하는 복합 인덱스를 함께 사용합니다.
[600ms]
[serious] 속성 순서와 정렬 방향을 모두 맞춘 다음, 요청 요금이 개선되는지 측정하세요.

## Step 4 · Pick a vector index by dataset size

[confident] 벡터 인덱스는 데이터 세트 크기와 검색 정확도, 속도, 요청 요금 사이의 균형을 기준으로 선택합니다.
[600ms]
[calm] 카드에서는 정확한 플랫 방식, 압축된 플랫 방식, 더 큰 컬렉션을 위한 diskANN을 비교합니다.
[600ms]
[encouraging] 하나의 인덱스가 모든 워크로드에서 최고라고 가정하지 말고, 같은 벡터와 쿼리로 적합한 후보를 테스트하세요.

## Step 5 · Every index trades read speed for write cost

[serious] 인덱스는 검색 비용을 줄일 수 있지만, 인덱스를 추가할 때마다 제품을 쓰는 작업도 늘어납니다.
[600ms]
[calm] 쓰기가 많은 워크로드에는 간결한 정책이 적합하고, 읽기가 많다면 쿼리를 지원하는 인덱스를 더 둘 이유가 있습니다.
[600ms]
[reassuring] 인덱스를 교체할 때는 새 인덱스를 먼저 추가하고 변환이 끝난 뒤 기존 인덱스를 제거합니다.

## Step 6 · Consistency is a latency and RU dial

[confident] 일관성도 워크로드에 맞게 선택하며, 읽기에 필요한 최신성과 대기 시간, 요청 요금 사이의 균형을 조정합니다.
[600ms]
[calm] 표는 다섯 가지 수준을 비교하며, Contoso 채팅에서 자신의 쓰기를 읽도록 세션 일관성을 강조합니다.
[600ms]
[serious] 여러 서비스가 이 상호 작용을 처리한다면 세션 컨텍스트가 이어지도록 세션 토큰도 함께 전달하세요.

## Step 7 · Contoso tunes the product container

[confident] 이제 Contoso는 제품 컨테이너의 기본 설정을 실제 쿼리 사용 방식에 맞춘 선택으로 바꿉니다.
[600ms]
[calm] 선택적 경로, 별도의 벡터 인덱스, 일치하는 복합 인덱스, 세션 일관성이 워크로드의 서로 다른 부분을 지원합니다.
[600ms]
[serious] 이 비교는 설명용 예시이므로, 측정한 요청 요금으로 읽기와 쓰기에 미치는 영향을 확인하세요.

## Step 8 · Optimizing Cosmos DB, all in one

[confident] 하나의 컨테이너를 중심으로 쿼리를 측정하고, 인덱싱 정책을 조정하고, 정렬을 지원하는 선택을 함께 적용합니다.
[600ms]
[calm] 모든 설정을 최대로 높이기보다, 검색 경험에 맞는 벡터 인덱스와 일관성 수준을 선택합니다.
[600ms]
[encouraging] 변경 후 메트릭을 다시 확인하고, 이 근거 중심 접근 방식을 PostgreSQL의 테이블과 쿼리에도 적용하세요.
