# Narrator Script — Cosmos DB: 구축 및 쿼리

**Source animation:** [CosmosFoundations.html](../../../journeys/Database/CosmosFoundations.html)
**Language:** ko

낭독 안내: 대괄호의 스타일은 말투를 지시하며, [600ms]는 문장 사이의 쉼을 나타냅니다.

<!-- Sources: https://learn.microsoft.com/en-us/training/paths/develop-ai-solutions-azure-cosmos-db/ ; https://learn.microsoft.com/en-us/training/modules/build-query-azure-cosmos-db/ -->

## Step 1 · Why a document database?

[confident] Contoso의 채팅 메시지와 제품 문서는 모두 지원 어시스턴트에 유용하지만, 데이터 형태는 서로 다릅니다.
[600ms]
[calm] Azure Cosmos DB for NoSQL은 모든 항목에 동일한 고정 스키마를 요구하지 않고 JSON 문서로 저장합니다.
[600ms]
[reassuring] 두 예시는 유연한 항목이 이 워크로드에 적합한 이유를 보여 주며, 익숙한 개발 도구로 해당 데이터에 액세스할 수 있습니다.

## Step 2 · Account, database, container, item

[confident] 중첩 구조를 바깥에서 안쪽으로 읽으면 계정, 데이터베이스, 컨테이너, 개별 항목 순서입니다.
[600ms]
[calm] 제품 카탈로그 데이터베이스에는 제품용 컨테이너와 사용자용 컨테이너가 따로 있으며, 각각 파티션 키를 선택합니다.
[600ms]
[reassuring] 이 계층은 애플리케이션의 탐색 지도이기도 하므로, 항목이 어디에 있는지 알면 뒤에 나오는 클라이언트 작업도 쉽게 따라갈 수 있습니다.

## Step 3 · Partition key: where items live

[confident] 텐트, 스토브, 배낭 그룹에서 보듯이 범주 값은 각 제품을 해당 논리 파티션으로 보냅니다.
[600ms]
[calm] 몇 가지 값에 활동을 집중시키기보다, 고유한 값이 많고 데이터가 균형 있게 분포하는 속성을 선택하세요.
[600ms]
[serious] 컨테이너를 만든 뒤 파티션 키를 바꾸려면 데이터를 옮겨야 하므로, 만들기 전에 신중하게 결정하세요.

## Step 4 · Connect with the SDK

[confident] 애플리케이션은 클라이언트를 준비하고 인증한 다음, 데이터베이스와 제품 컨테이너의 핸들을 가져옵니다.
[600ms]
[calm] Microsoft Entra ID는 코드에 계정 비밀을 넣지 않고 역할 기반 액세스를 제공하지만, 적절한 데이터 역할을 할당해야 합니다.
[600ms]
[reassuring] 클라이언트는 애플리케이션 전체에서 재사용하며, 리소스 핸들을 가져오는 것만으로는 네트워크 호출이 발생하지 않습니다.

## Step 5 · Create, read, replace, upsert, delete

[confident] 제품 하나를 따라가면, 생성은 항목을 추가하고 직접 읽기는 식별자와 파티션 키로 해당 항목을 가져옵니다.
[600ms]
[calm] 바꾸기는 기존 항목을 변경하고, 업서트는 항목의 존재 여부에 따라 삽입하거나 바꿉니다.
[600ms]
[serious] 삭제는 지정한 항목을 제거하므로, 모든 쓰기를 똑같이 취급하지 말고 의도에 맞는 작업을 선택하세요.

## Step 6 · Point read or query?

[curious] 항목의 식별자와 파티션 키를 이미 알고 있습니까, 아니면 조건에 맞는 항목을 찾아야 합니까?
[600ms]
[calm] 포인트 읽기는 항목 하나로 바로 접근하고, 쿼리는 조건에 따라 필터링하거나 필드를 선택하거나 정렬합니다.
[600ms]
[reassuring] 적합할 때는 직접 읽기를 사용하고, 쿼리도 가능하면 한 파티션 안에 유지해 불필요하게 여러 파티션으로 퍼지는 일을 피하세요.

## Step 7 · Query: filter and project

[confident] 이 쿼리는 가격 조건에 맞는 텐트를 남기고, 더 비싼 텐트는 결과에서 제외합니다.
[600ms]
[calm] 모든 속성을 어시스턴트에 보내는 대신, 식별자와 이름, 가격만 반환합니다.
[600ms]
[reassuring] 필터링은 조건에 맞는 항목을 고르고, 프로젝션은 반환할 필드를 고르며, 파티션 키는 이 예시를 관련 그룹으로 한정합니다.

## Step 8 · All in one: build and query

[confident] 리소스를 모델링하고, 재사용하는 클라이언트로 연결한 뒤, 항목을 읽고 쓰는 흐름이 하나로 모였습니다.
[600ms]
[calm] 이미 아는 항목에는 포인트 읽기를 사용하고, 어시스턴트가 조건에 맞는 데이터를 찾아야 할 때는 필터링된 쿼리를 사용합니다.
[600ms]
[encouraging] 이 기초를 갖추면 임베딩과 벡터 검색을 추가하면서도, 그것이 설명하는 문서와의 연결을 놓치지 않을 수 있습니다.
