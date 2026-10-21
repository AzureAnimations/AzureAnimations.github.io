# Narrator Script — PostgreSQL: 구축 및 쿼리

**Source animation:** [PostgresFoundations.html](../../../journeys/Database/PostgresFoundations.html)
**Language:** ko

대괄호 안은 전달 방식 안내이며, [600ms]는 문장 사이의 쉼을 나타냅니다.

<!-- Fact source: https://learn.microsoft.com/en-us/training/modules/build-query-azure-database-postgresql/ · Learning path: https://learn.microsoft.com/en-us/training/paths/develop-ai-solutions-azure-database-postgresql/ -->

## Step 1 · Why PostgreSQL behind the assistant?

[curious] Contoso Outfitters의 지원 어시스턴트에는 세부 정보를 추측하는 대신 직접 조회할 수 있는 주문과 제품 정보가 필요합니다.
[600ms]
[confident] PostgreSQL은 관계형 테이블, 트랜잭션 신뢰성, 유연한 JSON 데이터, 확장으로 어시스턴트의 도구를 지원합니다.
[600ms]
[reassuring] 도구 호출이 대화와 저장된 업무 레코드를 연결해, 어시스턴트가 사실에 기반한 답변을 만들 토대를 제공합니다.

## Step 2 · A managed PostgreSQL, compute apart from storage

[confident] Azure Database for PostgreSQL은 커뮤니티 PostgreSQL을 관리형 서비스로 실행하며, 컴퓨팅과 스토리지를 별도 구성 요소로 제공합니다.
[600ms]
[calm] 컴퓨팅 계층은 간헐적인 활동, 일반 애플리케이션, 메모리가 더 필요한 작업 등 서로 다른 워크로드에 맞춥니다.
[600ms]
[serious] 워크로드에 맞게 선택하고, 컴퓨팅 계층을 변경하면 짧은 재시작이 발생한다는 점을 기억하세요.

## Step 3 · Connect with a token, not a password

[confident] 애플리케이션은 Microsoft Entra ID에 수명이 짧은 토큰을 요청하고, PostgreSQL에 연결할 때 이 토큰을 제시합니다.
[600ms]
[calm] 저장된 암호 대신 토큰을 사용하고, 연결을 통해 이동하는 데이터는 암호화로 보호합니다.
[600ms]
[serious] 이 인증 흐름을 사용하기 전에 서버에 Microsoft Entra 관리자를 구성하세요.

## Step 4 · Model orders and products as tables

[confident] 스키마는 업무 정보를 형식이 지정된 열로 표현하고, 키와 제약 조건으로 유효한 레코드의 기준을 정합니다.
[600ms]
[calm] 외래 키는 주문과 제품을 연결하고, 필수 값과 허용된 상태는 데이터 구조를 보호합니다.
[600ms]
[serious] 실제 조회 패턴에 맞는 인덱스를 추가하되, 읽기가 빨라지면 스토리지와 쓰기 부담도 늘어난다는 점을 기억하세요.

## Step 5 · Page through orders the efficient way

[curious] 뒤쪽 페이지로 이동하려고 행을 건너뛰면 고객이 보지 않을 데이터까지 읽고 버려야 합니다.
[600ms]
[confident] 키셋 페이징은 마지막으로 반환한 주문의 타임스탬프와 고유 식별자를 함께 사용해 그다음부터 조회합니다.
[600ms]
[reassuring] 정렬과 필터에 같은 조합을 쓰면 타임스탬프가 같은 주문을 처리하면서 앞 페이지를 반복해서 건너뛰는 작업도 피할 수 있습니다.

## Step 6 · Call it from Python with psycopg

[confident] Python 어댑터는 애플리케이션을 PostgreSQL에 연결하고, 인증 토큰을 얻어 매개 변수화된 쿼리로 주문을 조회합니다.
[600ms]
[serious] 고객 입력을 문자열에 끼워 넣어 쿼리를 만들지 말고, 값과 쿼리 텍스트를 분리해서 전달하세요.
[600ms]
[reassuring] 컨텍스트 관리자가 정리를 담당하며, 체크리스트에서는 제한 시간, 다시 시도, 일괄 처리, 연결 재사용을 확인합니다.

## Step 7 · The exercise: an agent tool backend

[confident] 질문이 Python 도구를 거쳐 PostgreSQL에 도달하고, 조회한 정보가 어시스턴트로 돌아오는 흐름을 따라갑니다.
[600ms]
[calm] 주문 질문은 이 흐름을 보여 주는 예시이며, 실습에서는 대화, 메시지, 작업 체크포인트 같은 에이전트 메모리를 저장합니다.
[600ms]
[encouraging] Microsoft Entra 인증으로 도구 계층과 데이터베이스를 연결해 이 메모리 워크플로를 구축하고 테스트하세요.

## Step 8 · PostgreSQL: build and query, all in one

[confident] 하나의 상호 작용 뒤에서 어시스턴트, Python 도구, ID 인증, 관리형 PostgreSQL 데이터베이스가 함께 연결됩니다.
[600ms]
[calm] 제약 조건은 레코드를 정리하고, 인덱스는 조회를 지원하며, 효율적인 쿼리는 어시스턴트가 필요한 정보를 가져옵니다.
[600ms]
[encouraging] 이 관계형 기반을 갖췄다면 다음에는 벡터 검색을 추가해 관련 콘텐츠를 의미로 찾아보세요.
