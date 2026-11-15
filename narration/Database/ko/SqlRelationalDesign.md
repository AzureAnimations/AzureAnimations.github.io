# Narrator Script — 관계형 데이터 스토리지 설계

**Source animation:** [SqlRelationalDesign.html](../../../journeys/Database/SqlRelationalDesign.html)
**Language:** ko

큐 안내: `[confident]`, `[reflective]`, `[serious]`는 전달할 어조를 나타내며, `[600ms]`는 문장 사이의 무음 쉼을 나타냅니다.

<!-- Sources: https://learn.microsoft.com/en-us/training/modules/design-data-storage-solution-for-relational-data/ ; https://learn.microsoft.com/en-us/azure/azure-sql/database/security-best-practice#data-protection -->

## Step 1 · Three ways to run SQL on Azure

[confident]
Contoso 주문 시스템에는 테이블, 행, 키가 필요하지만, 이것만으로 데이터베이스를 누가 관리할지는 결정되지 않습니다.
[600ms]
SQL Database는 데이터베이스 플랫폼을 관리하고, Managed Instance는 인스턴스 기능을 유지하며, SQL Server on Azure VMs는 운영 체제에 대한 액세스를 제공합니다.
[600ms]
[reflective]
이 갈림길은 제어권과 유지 관리 책임의 범위가 서로 다르다는 뜻입니다.

## Step 2 · Azure SQL Database

[confident]
Azure SQL Database를 사용하면 Contoso는 운영 체제나 SQL Server 인스턴스를 관리하지 않고 리소스를 선택합니다.
[600ms]
vCore와 DTU는 리소스 구매 방식을 나타내고, 서버리스는 단일 데이터베이스의 컴퓨팅을 자동으로 조정합니다.
[600ms]
[reflective]
탄력적 풀에서는 지역별 데이터베이스가 설정한 한도 안에서 리소스를 공유합니다.

## Step 3 · Azure SQL Managed Instance

[confident]
Contoso의 기존 애플리케이션은 개별 테이블 외의 기능에도 의존하므로, 마이그레이션에서는 인스턴스 관점이 필요합니다.
[600ms]
Managed Instance는 SQL Server Agent와 연결된 서버 같은 기능을 관리형 SQL Server 인스턴스에서 제공합니다.
[600ms]
[reflective]
주문, 재고, 반품 데이터베이스는 해당 인스턴스의 컴퓨팅과 스토리지를 공유합니다.

## Step 4 · SQL Server on Azure VMs

[confident]
Contoso에 운영 체제 액세스와 특정 SQL Server 기능이 필요하다면 가상 머신을 선택해야 할 수 있습니다.
[600ms]
쌓여 있는 계층은 데이터베이스 엔진, 운영 체제, 선택한 Azure 가상 머신까지 제어 범위에 포함된다는 것을 보여 줍니다.
[600ms]
[reflective]
그 대신 SQL Server와 운영 체제를 업데이트할 책임도 Contoso가 맡습니다.

## Step 5 · Recommend a scaling approach

[confident]
각 시나리오의 화살표가 보여 주듯이, 성장 문제가 다르면 해결 방법도 달라집니다.
[600ms]
탄력적 풀은 리소스를 공유하고, 수직 확장은 컴퓨팅 크기를 바꾸며, 분할을 사용하는 수평 확장은 데이터를 여러 데이터베이스로 나눕니다.
[600ms]
[reflective]
재무 보고서에 여러 데이터베이스의 행이 필요하다면 단순히 컴퓨팅을 늘리는 대신 탄력적 쿼리로 그 요구를 해결합니다.

## Step 6 · Recommend an availability tier

[confident]
서비스 계층은 Contoso 데이터베이스의 컴퓨팅 크기뿐 아니라 그 아래의 아키텍처도 바꿉니다.
[600ms]
범용은 컴퓨팅과 원격 스토리지를 분리하고, 중요 비즈니스용은 직접 연결 스토리지와 복제본을 사용합니다.
[600ms]
[reflective]
SQL Database의 Hyperscale은 페이지 서버를 통해 스토리지와 읽기를 확장합니다.

## Step 7 · Protect data in every state

[serious]
스토리지에서 연결을 거쳐 오른쪽에 표시된 민감한 열까지 데이터의 흐름을 따라가 보세요.
[600ms]
TDE는 저장된 데이터베이스 파일을, TLS는 전송 중인 데이터를, Always Encrypted는 클라이언트가 암호화한 선택된 열을 보호합니다.
[600ms]
[reflective]
동적 데이터 마스킹은 쿼리 결과의 값만 숨길 뿐이며, 암호화가 아닙니다.

## Step 8 · When relational is not the answer

[confident]
모든 워크로드에 Contoso 주문 시스템과 같은 관계형 접근 방식이 필요한 것은 아닙니다.
[600ms]
Azure Table Storage와 Azure Cosmos DB for Table은 테이블 데이터 모델을 공유하지만, 인덱싱, 배포, 대기 시간, 일관성은 다릅니다.
[600ms]
[reflective]
비교표를 가로로 살펴보면서 이러한 추가 기능이 애플리케이션의 요구에 맞는지 판단하세요.

## Step 9 · All in one: pick the right store

[confident]
각 결정은 왼쪽의 요구 사항에서 시작하고, 화살표를 따라 적합한 옵션을 찾으세요.
[600ms]
클라우드 데이터베이스, 공유 풀, 인스턴스 기능, 운영 체제 액세스는 서로 다른 선택으로 이어집니다.
[600ms]
[reflective]
가용성 아키텍처, 데이터 보호, 글로벌 테이블 액세스는 최초의 워크로드 결정을 대신하는 것이 아니라 설계를 완성하는 요소입니다.
