# Narrator Script — AI 앱을 위한 데이터베이스 선택

**Source animation:** [PickYourDatabase.html](../../../journeys/Database/PickYourDatabase.html)
**Language:** ko

낭독 안내: 대괄호의 스타일은 말투를 지시하며, [600ms]는 문장 사이의 쉼을 나타냅니다.

<!-- Sources: https://learn.microsoft.com/en-us/training/paths/develop-ai-solutions-azure-cosmos-db/ ; https://learn.microsoft.com/en-us/training/paths/develop-ai-solutions-azure-database-postgresql/ ; https://learn.microsoft.com/azure/azure-sql/azure-sql-iaas-vs-paas-what-is-overview ; https://learn.microsoft.com/training/modules/design-data-integration/ -->

## Step 1 · One assistant, four kinds of data

[curious] Contoso Outfitters의 지원 어시스턴트에는 채팅 기록, 주문 기록, 의미 기반 검색, 대용량 원시 파일이 필요합니다.
[600ms]
[calm] 이 요청들은 한 어시스턴트로 모이지만, 필요한 저장 형태와 액세스 패턴은 서로 다릅니다.
[600ms]
[reassuring] 검색 타일의 두 가지 색에 주목하면, 벡터가 한 엔진만의 기능이 아니므로 워크로드를 기준으로 선택해야 한다는 점을 알 수 있습니다.

## Step 2 · Documents and vectors: Cosmos DB

[confident] 채팅 메시지는 Azure Cosmos DB for NoSQL의 문서가 되고, 텍스트 옆에 임베딩도 함께 저장됩니다.
[600ms]
[calm] 파티션 키는 각 문서를 따로 취급하는 대신, 같은 고객의 관련 데이터와 함께 묶어 줍니다.
[600ms]
[reassuring] 유연한 문서 저장과 벡터 검색이 결합되므로, 어시스턴트는 벡터를 해당 항목에서 분리하지 않고도 의미로 검색할 수 있습니다.

## Step 3 · Tables plus vectors: PostgreSQL

[confident] 여기서는 제품 카탈로그를 관계형 테이블에 유지하고, 익숙한 제품 필드 옆에 임베딩 열을 둡니다.
[600ms]
[calm] Azure Database for PostgreSQL은 pgvector로 의미 기반 순위 지정과 범주 필터, 관계형 쿼리를 결합합니다.
[600ms]
[reassuring] 테이블 관계와 벡터 검색을 함께 사용해야 하는 팀에 적합하지만, 사용하는 각 데이터베이스에서 확장 기능을 활성화해야 합니다.

## Step 4 · Relational at scale: Azure SQL family

[confident] Contoso의 주문과 고객 데이터에서는 데이터베이스 환경을 팀이 어디까지 관리할 것인지가 또 다른 판단 기준이 됩니다.
[600ms]
[calm] Azure SQL Database와 Azure SQL Managed Instance는 관리형 서비스이며, SQL Server on Azure VMs는 운영 체제 액세스를 제공합니다.
[600ms]
[reassuring] 특히 기존 SQL Server 워크로드를 이전할 때는 애플리케이션 요구 사항과 이 관리 경계를 맞춰 선택하세요.

## Step 5 · Raw files and pipelines: the data lake

[confident] 채팅 내보내기, 로그, 제품 사진은 Azure Data Lake Storage의 원시 파일에서 시작합니다.
[600ms]
[calm] Azure Data Factory는 분석으로 이어지는 흐름을 연결하고 수집하며, 변환하고 게시하고 모니터링합니다.
[600ms]
[reassuring] 뒤쪽에 Databricks, Synapse, Stream Analytics가 나타나는 이유는 파일 모음을 어시스턴트의 트랜잭션 데이터베이스로 취급하는 대신 분석용 데이터로 준비하는 경로이기 때문입니다.

## Step 6 · Which one, when?

[curious] 비교 화면에서 필요한 것을 고른 다음, 해당 엔진의 유용한 시나리오와 주의 사항을 확인하세요.
[600ms]
[calm] 문서, 관계형 데이터와 벡터, 업무용 주문, 원시 파일 파이프라인에는 서로 다른 절충이 필요합니다.
[600ms]
[encouraging] Contoso는 여러 옵션을 함께 쓸 수 있으므로, 모든 작업을 한 제품으로 통일하지 말고 워크로드별로 결정하세요.
