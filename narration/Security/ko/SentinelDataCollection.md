# Narrator Script — Security · Microsoft Sentinel data collection: workspaces, connectors, Syslog, CEF and Windows events

**Source animation:** [SentinelDataCollection.html](../../../journeys/Security/SentinelDataCollection.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/sentinel/quickstart-onboard>
- <https://learn.microsoft.com/azure/sentinel/roles>
- <https://learn.microsoft.com/azure/sentinel/sentinel-solutions-deploy>
- <https://learn.microsoft.com/azure/sentinel/cef-syslog-ama-overview>

---

## Step 1 · Sentinel is blind until data arrives

[calm] Contoso가 Microsoft Sentinel을 막 켰는데, 워크스페이스가 비어 있습니다.
[600ms]
[serious] Sentinel은 볼 수 있는 것만 탐지할 수 있습니다. 데이터가 없으면 경고를 띄울 것도 없습니다.
[600ms]
[determined] 그래서 Priya는 데이터 커넥터 하나로 시작합니다. 이번 레슨은 S C 500 기술 항목 중 Sentinel의 이벤트 수집을 다룹니다. 여기 나오는 이름은 모두 가상입니다.

## Step 2 · Create the workspace and add Microsoft Sentinel

[calm] Sentinel은 Log Analytics 워크스페이스 위에서 동작합니다. Priya는 리소스 그룹에 워크스페이스를 만든 다음, 거기에 Microsoft Sentinel을 추가합니다.
[600ms]
[confident] Sentinel을 워크스페이스 여러 개에서 실행할 수는 있지만, 데이터는 워크스페이스 하나 안에서만 분리되어 있습니다.
[600ms]
[reassuring] Sentinel을 사용하려면, 워크스페이스가 있는 구독에서 Contributor 역할이 필요합니다.

## Step 3 · Roles on the workspace

[calm] Sentinel에서 누가 무엇을 할 수 있는지는 Azure 역할이 정합니다. 일을 할 수 있는 가장 낮은 역할을 고르세요.
[600ms]
[confident] 역할은 워크스페이스의 리소스 그룹에 할당하세요. 그러면 워크스페이스까지만 접근이 가능하고, 그 이상으로 넓어지지 않습니다.
[600ms]
[reflective] Playbook Operator와 Automation Contributor는 자동화를 위한 별도의 역할이고, 이번 레슨에서는 다루지 않습니다.

## Step 4 · Content hub: install, then configure

[curious] 콘텐츠 허브는 커넥터와 규칙, 워크북을 솔루션으로 묶어서 제공합니다.
[600ms]
[confident] 콘텐츠 항목 하나를 쓰려면 솔루션 전체를 설치해야 합니다. 솔루션을 설치하면 커넥터가 추가되지만, 구성은 따로 해야 합니다.
[600ms]
[reassuring] 솔루션을 설치하고 관리하려면, 리소스 그룹에서 Microsoft Sentinel Contributor 역할이 필요합니다.

## Step 5 · Connectors for Azure resources

[calm] Azure 쪽 소스에는 기본 제공 커넥터가 있습니다. 여기서는 구독 활동, Microsoft Entra ID 로그, Defender for Cloud 경고를 보겠습니다.
[600ms]
[serious] Entra의 로그인 로그에는 Entra ID P1이나 P2 라이선스가 필요하다는 점에 유의하세요.
[600ms]
[curious] 테넌트 기반 Defender for Cloud 커넥터는 미리 보기이고, 구독 기반 커넥터는 이전 방식의 커넥터입니다.

## Step 6 · Syslog from Linux machines

[calm] Priya의 Linux 서버는 syslog에 로그를 씁니다. 커넥터가 그 서버에 Azure Monitor Agent를 설치합니다.
[600ms]
[confident] 그다음 데이터 수집 규칙이 시설과 최소 심각도 기준으로 무엇을 수집할지 정합니다.
[600ms]
[curious] 최소 수준을 고르면 그보다 높은 심각도도 모두 수집됩니다. 오류 수준을 고르면, 심각, 경고, 긴급 수준도 함께 수집됩니다.

## Step 7 · CEF from appliances

[calm] 방화벽 같은 어플라이언스는 Common Event Format 메시지를 보냅니다. 에이전트가 실행되는 Linux 로그 포워더로 보냅니다.
[600ms]
[curious] CEF는 SIEM 도구를 위해 만든 Syslog 확장입니다. 공급업체, 제품, 버전, 이벤트 클래스, 심각도, ID가 담긴 헤더와 확장 필드가 추가됩니다.
[600ms]
[confident] 일반 Syslog 메시지는 Syslog 테이블에 저장되고, CEF는 CommonSecurityLog에 저장됩니다.

## Step 8 · Windows Security events

[calm] Windows 보안 이벤트는 데이터 수집 규칙으로 각 머신에서 바로 가져올 수도 있고, Windows 이벤트 전달로 수집기를 거쳐 가져올 수도 있습니다.
[600ms]
[encouraging] 두 방법을 모두 해 보고 비교해 보세요.
[600ms]
[confident] 에이전트가 소스에서 필터링하기 때문에, 내가 고른 이벤트만 수집됩니다. Azure 밖에 있는 머신은 먼저 Azure Arc가 필요합니다.

## Step 9 · Custom log tables

[calm] 기본 제공 테이블 중에 맞는 게 없으면, Contoso는 샘플 레코드로 사용자 지정 테이블을 만듭니다.
[600ms]
[confident] 그런 다음 데이터 수집 규칙으로 그 테이블에 데이터를 보냅니다.
[600ms]
[curious] 데이터는 Logs Ingestion API로 들어올 수도 있고, 미리 보기인 Custom Logs 커넥터로 텍스트 파일에서 가져올 수도 있습니다. 스키마를 정의하려면 샘플 레코드가 필요합니다.

## Step 10 · Retention and table plans

[calm] 모든 데이터를 똑같이 다룰 필요는 없습니다. 경고와 헌팅에 쓰는 최신 데이터는 바로 쓸 수 있게 핫 상태로 두세요.
[600ms]
[confident] 오래된 데이터는 저렴한 장기 스토리지에 보관하고, 보존 기간은 테이블마다 설정하세요.
[600ms]
[reflective] Defender 포털에서는 Sentinel과 사용자 지정 테이블을 관리하고, Basic 플랜 테이블은 Log Analytics 워크스페이스에서 관리합니다.

## Step 11 · Query Purview Audit in Defender XDR

[curious] Microsoft 365 활동의 감사 레코드는 Microsoft Purview Audit에서 가져옵니다. Priya는 Defender 포털에서 필터나 KQL로 이 레코드를 조회합니다.
[600ms]
[serious] 먼저 Microsoft Purview 포털에서 감사를 켜야 합니다.
[600ms]
[confident] Audit 페이지를 열려면 Exchange Online의 View-Only Audit Logs나 Audit Logs 역할이 필요합니다.

## Step 12 · Recap

[calm] 수집은 사슬처럼 이어집니다. 워크스페이스, 커넥터, 규칙, 테이블, 보존입니다. 고리 하나라도 빠지면 데이터가 들어오지 않거나, 보관되지 않습니다.
[600ms]
[confident] 고리 하나하나가 방금 살펴본 이벤트 수집 목표의 각 부분에 해당합니다.
[600ms]
[proud] S C 500 기술 항목은 시간이 지나면 바뀌니, 항상 Microsoft Learn에서 최신 학습 가이드를 확인하세요.
