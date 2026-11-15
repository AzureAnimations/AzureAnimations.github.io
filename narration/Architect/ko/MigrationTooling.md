# Narrator Script — Architect · Migration tooling: Azure Migrate and DMS

**Source animation:** [MigrationTooling.html](../../../journeys/Architect/MigrationTooling.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/migrate/migrate-services-overview>
- <https://learn.microsoft.com/azure/migrate/migrate-appliance>
- <https://learn.microsoft.com/azure/migrate/concepts-assessment-overview>
- <https://learn.microsoft.com/azure/dms/dms-overview>

---

## Step 1 · 300 servers, 20 databases: now what?

[curious] Contoso가 데이터 센터를 비우려고 합니다. 옮겨야 할 서버가 수백 대, 데이터베이스는 수십 개입니다. 이 수치는 수업을 위해 임의로 정한 값입니다.
[600ms]
[serious] 무엇이든 옮기기 전에 팀이 알아야 할 게 있습니다. 알맞은 도구와 올바른 순서, 그리고 어플라이언스가 실제로 무슨 일을 하는지입니다.
[600ms]
[confident] 온프레미스 서버와 데이터, 애플리케이션을 마이그레이션 관점에서 평가하는 A Z 305 기술입니다.

## Step 2 · Azure Migrate: one hub, four tool families

[calm] Azure Migrate는 이전을 결정하고, 계획하고, 실행하는 것까지 한곳에서 하는 도구입니다.
[600ms]
[confident] 서버와 데이터베이스, 웹 앱, 대용량 데이터는 각각 쓰는 도구 모음이 따로 있습니다. 오프라인으로 옮겨야 하는 대용량 데이터는 Azure Data Box로 보낼 수 있습니다.
[600ms]
[reflective] 작업은 세 단계로 진행됩니다. 먼저 검색과 비즈니스 케이스로 결정하고, 평가로 계획한 다음, 마이그레이션을 실행합니다.

## Step 3 · Create the Azure Migrate project

[calm] 검색한 내용은 모두 리소스 그룹 안의 프로젝트 하나에 모입니다.
[600ms]
[confident] 필요한 도구를 추가하고, 어플라이언스를 등록할 때 쓸 프로젝트 키를 생성합니다.
[600ms]
[reflective] 어플라이언스 하나는 프로젝트 하나에만 등록되지만, 프로젝트 하나에는 어플라이언스 여러 대를 둘 수 있습니다. 그리고 먼저 계정에 알맞은 역할이 있어야 합니다.

## Step 4 · The appliance: a lightweight server on your network

[curious] 어플라이언스는 여러분의 네트워크 안에 한 번만 배포하는 경량 서버입니다.
[600ms]
[confident] 템플릿이나 PowerShell 스크립트로 배포한 다음, 포털에서 받은 프로젝트 키로 등록하세요.
[600ms]
[serious] 물리 서버나 다른 클라우드의 서버라면 항상 스크립트를 사용합니다. 그리고 복제 어플라이언스 같은 다른 구성 요소를 같은 서버에 설치하면 안 됩니다.

## Step 5 · What the appliance actually does

[curious] 그럼 실제로 무슨 일을 할까요? 하이퍼바이저에서 구성과 성능 메타데이터를 읽어서 프로젝트로 보냅니다.
[600ms]
[reassuring] 에이전트가 필요 없는 방식이라서, 가상 머신에는 아무것도 설치하지 않습니다.
[600ms]
[calm] 다만 어플라이언스는 Azure에 직접, 또는 프록시를 거쳐 인터넷으로 접속할 수 있어야 합니다. 그러니 필요한 주소를 허용해 두세요. 배포할 때 연결 확인도 자동으로 실행됩니다.

## Step 6 · Two credentials, two levels of insight

[curious] 어플라이언스는 두 종류의 자격 증명을 사용하고, 어떤 것을 쓰느냐에 따라 얻는 정보의 깊이가 달라집니다.
[600ms]
[confident] 읽기 전용 vCenter 계정이면 인벤토리와 성능 데이터를 수집하기에 충분합니다.
[600ms]
[impressed] 서버 자격 증명까지 추가하면, 설치된 소프트웨어와 종속성은 물론 SQL Server와 웹 앱까지 볼 수 있습니다.

## Step 7 · Dependency analysis: move what talks together

[curious] 이제 어플라이언스가 서버 사이의 TCP 연결을 지켜봅니다.
[600ms]
[serious] 서로 의존하는 서버는 반드시 함께 옮겨야 합니다. 그렇지 않으면 컷오버 후에 애플리케이션이 멈춥니다.
[600ms]
[confident] 에이전트 없는 종속성 분석을 권장합니다. 에이전트를 설치할 필요가 없고, 결과를 맵이나 CSV 내보내기로 볼 수 있습니다.

## Step 8 · Assessments turn data into decisions

[calm] 평가는 이렇게 모은 데이터를 의사 결정으로 바꿔 줍니다. 서버 그룹과 대상을 고르면 됩니다.
[600ms]
[confident] Azure Migrate는 먼저 준비 상태를 확인하고, 그다음 크기를 맞추고, 마지막으로 월 비용을 추정합니다. 평가 종류는 Azure VM, Azure SQL, App Service, Azure VMware Solution이 있습니다.
[600ms]
[serious] 준비 상태 확인에서 실패한 서버는 크기도 비용도 산정되지 않습니다. 또 평가는 평가한 시점의 스냅샷입니다.

## Step 9 · Right-size by use, then make the business case

[curious] 크기를 맞추는 방법은 두 가지입니다. 온프레미스 기준은 프로비저닝해 둔 사양을 그대로 따라갑니다.
[600ms]
[confident] 성능 기반은 서버가 실제로 쓴 양을 기준으로 하니, 놀고 있는 용량이 Azure로 넘어가지 않습니다.
[600ms]
[proud] 그다음 비즈니스 케이스에서 온프레미스와 Azure를 비교합니다. 총 소유 비용과 연도별 현금 흐름, 그리고 자본 지출에서 운영 비용으로 바뀌는 부분을 다룹니다.

## Step 10 · Migrate servers: replicate, test, cut over

[calm] 서버를 마이그레이션하려면 먼저 복제합니다. 처음에 전체를 복사하고 이후 변경분을 보내는 동안, 서버는 계속 가동 상태입니다.
[600ms]
[confident] 다음은 격리된 네트워크에서 테스트하고, 계획한 시간대에 컷오버합니다. 데이터 손실이 없도록 원본 서버를 종료하는 방법도 선택할 수 있습니다.
[600ms]
[reassuring] 마지막으로 마이그레이션을 마무리하고 정리합니다. 복제 방식은 VMware인지, Hyper-V인지, 물리 서버인지에 따라 다릅니다.

## Step 11 · Databases: assess first, then Azure DMS

[curious] SQL Server는 별도 경로가 있습니다. 먼저 준비 상태를 평가하고 대상을 정하세요.
[600ms]
[confident] 그다음 Azure Database Migration Service로 오프라인 또는 온라인 마이그레이션을 합니다. 오프라인은 SQL Database, SQL Managed Instance, Azure VM의 SQL을 대상으로 할 수 있고, 온라인은 마지막 두 가지만 대상으로 합니다.
[600ms]
[serious] Azure Data Studio의 Azure SQL 마이그레이션 확장은 도구와 함께 종료되었습니다. 대신 SSMS나 Azure Arc 평가를 사용하세요.

## Step 12 · Web apps and bulk data have their own tools

[curious] 모든 워크로드가 서버나 SQL 데이터베이스는 아닙니다.
[600ms]
[confident] Azure Migrate는 IIS에서 돌아가는 ASP.NET 웹 앱을 평가해서 App Service로 옮길 수 있습니다. 개별 사이트는 App Service 마이그레이션 어시스턴트가 처리합니다.
[600ms]
[impressed] 데이터가 아주 크면 Azure Data Box가 장치를 보내 줍니다. 장치에 데이터를 복사해 돌려보내면, Azure가 스토리지 계정에 업로드합니다.

## Step 13 · Pick your workload, see the path

[encouraging] 이제 도구 선택기를 써 보세요. 무엇을 마이그레이션할지 고르세요.
[600ms]
[confident] 패널에 알맞은 Azure 도구 경로와, 가장 먼저 할 일 세 가지가 나옵니다.
[600ms]
[reflective] 이것이 A Z 305 기술을 실제로 쓰는 모습입니다. 습관대로 고르지 말고 워크로드 유형에 맞춰 도구를 고르세요.

## Step 14 · The runbook: discover, assess, migrate, cut over

[calm] Contoso의 답은 이렇습니다. 먼저 어플라이언스로 시작해서 검색하고 평가합니다.
[600ms]
[confident] 데이터베이스는 Azure DMS로 옮기고, 나머지는 모두 종속성 그룹 단위로 복제, 테스트, 컷오버 순서로 진행합니다.
[600ms]
[proud] 여기까지가 A Z 305의 마이그레이션 목표입니다. 온프레미스 환경을 평가하는 일부터, 서버와 데이터베이스, 데이터에 맞는 경로를 추천하는 일까지 다뤘습니다.
