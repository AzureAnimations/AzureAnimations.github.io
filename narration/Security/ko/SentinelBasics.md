# Narrator Script — Security · Microsoft Sentinel basics

**Source animation:** [SentinelBasics.html](../../../journeys/Security/SentinelBasics.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/sentinel/overview>
- <https://learn.microsoft.com/azure/sentinel/connect-data-sources>
- <https://learn.microsoft.com/azure/sentinel/automate-incident-handling-with-automation-rules>
- <https://learn.microsoft.com/azure/sentinel/microsoft-sentinel-defender-portal>

---

## Step 1 · Thousands of alerts, one team

[calm] Contoso의 ID와 클라우드, 네트워크, 디바이스에서 경고가 계속 올라오는데, 규모가 작은 보안 팀이 다 읽을 수는 없습니다.
[600ms]
[curious] 보려면 보안 데이터를 수집하고 위협을 탐지하는 SIEM이 필요하고, 대응하려면 반복적인 대응을 자동화하는 SOAR가 필요합니다.
[600ms]
[confident] Microsoft Sentinel은 클라우드 네이티브 SIEM이면서 SOAR 플랫폼이기도 합니다. Contoso와 여기 나오는 데이터는 모두 가상입니다.

## Step 2 · Connectors bring the signals in

[calm] Sentinel은 처음에는 비어 있습니다. 데이터 커넥터가 소스에서 신호를 가져와 한곳에 모아 줍니다.
[600ms]
[confident] 커넥터는 보통 콘텐츠 허브 솔루션에 들어 있어서, 솔루션을 설치한 다음 그 커넥터를 구성하면 됩니다.
[600ms]
[serious] 예전 HTTP Data Collector API 지원은 2026년 9월 14일에 끝납니다. 그러니 사용자 지정 소스는 Logs Ingestion API나 Codeless Connector Framework를 쓰세요.

## Step 3 · One workspace holds the data

[curious] Sentinel은 별도의 데이터베이스가 아닙니다. Log Analytics 워크스페이스에 켜서 씁니다.
[600ms]
[calm] 모든 커넥터가 그 워크스페이스의 테이블에 데이터를 쓰고, 보존과 요금도 워크스페이스를 따릅니다.
[600ms]
[reflective] 그래서 워크스페이스를 어디에 두는지가 중요하고, 설계 단계에서 다시 다루겠습니다.

## Step 4 · Analytics rules look for threats

[calm] 분석 규칙은 데이터에 계속 던지는 질문입니다. 답이 예이면 경고를 띄웁니다.
[600ms]
[confident] 규칙 유형마다 묻는 방식이 다르고, 처음에는 콘텐츠 허브 솔루션의 규칙 템플릿으로 시작해서 조정하는 게 가장 좋습니다.
[600ms]
[curious] Defender 포털에서는 새 규칙을 만들 때 Microsoft가 사용자 지정 검색을 권장합니다.

## Step 5 · A match becomes an alert with entities

[calm] 규칙의 쿼리가 임계값을 넘는 결과를 반환하면, 규칙이 경고를 띄웁니다. 심각도는 정보부터 높음까지입니다.
[600ms]
[confident] 엔터티 매핑은 어떤 필드가 계정이고, IP 주소이고, 호스트인지 Sentinel에 알려 줍니다.
[600ms]
[impressed] 이 엔터티는 인시던트 그룹화와 조사 그래프, 자동화의 기본 재료가 됩니다.

## Step 6 · Related alerts group into one incident

[curious] 같은 엔터티에 대한 경고는 하나의 인시던트로 묶입니다.
[600ms]
[confident] 경고가 따로따로 쌓이는 대신, 심각도와 상태, 담당자가 있는 사건 파일 하나가 됩니다.
[600ms]
[reassuring] 댓글과 작업, 활동 로그도 여기에 담겨서, 팀 전체가 한곳에서 일합니다.

## Step 7 · Investigate the incident, hunt for the next one

[calm] 조사 그래프는 연결된 항목을 시간순으로 보여 줘서, 분석가가 공격이 어디까지 번졌는지 파악할 수 있습니다.
[600ms]
[curious] 헌팅은 다릅니다. 헌팅 쿼리는 경고가 울리기 전에 먼저 질문을 던지고, 북마크는 찾아낸 증거를 보관합니다.
[600ms]
[confident] Notebooks는 Python과 머신 러닝, 시각화로 헌팅을 확장해 줍니다.

## Step 8 · Automation does the routine work

[calm] 자동화 규칙은 인시던트에 즉시, 내가 정한 순서대로 반응합니다. 플레이북 없이도 인시던트에 태그를 달거나, 담당자를 지정하거나, 닫을 수 있습니다.
[600ms]
[confident] 작업에 단계가 더 필요하면 플레이북으로 넘기는데, 플레이북은 Azure Logic Apps 워크플로로 만듭니다.
[600ms]
[serious] 플레이북을 분석 규칙에 직접 연결하는 건 예전 방식입니다. 대신 자동화 규칙을 쓰세요.

## Step 9 · Follow one attack through Sentinel

[curious] Contoso에서 가상으로 벌어진 계정 탈취를 단계별로 따라가면서, 단계마다 Sentinel이 무엇을 하는지 보겠습니다.
[600ms]
[calm] 신호가 들어오고, 규칙이 작동하고, 인시던트가 만들어지고, 자동화가 대응합니다.
[600ms]
[reflective] 계정을 비활성화하는 건 확산을 막는 봉쇄일 뿐, 끝이 아닙니다. 분석가는 얼마나 퍼졌는지 계속 조사합니다.

## Step 10 · Watch the whole picture: workbooks and UEBA

[calm] 워크북은 데이터를 팀용 대시보드로 바꿔 줍니다. 데이터 소스를 연결하면 기본 제공 템플릿이 나타나고, 직접 만들 수도 있습니다.
[600ms]
[intrigued] UEBA는 사용자와 호스트마다 정상 상태를 학습해서, 활동을 그 대상의 과거 이력, 동료, 조직과 비교합니다.
[600ms]
[confident] 그러고 나서 이상한 활동에 점수를 매깁니다. 기능을 켜고 Microsoft Entra ID 같은 소스를 연결하세요.

## Step 11 · Design it: placement, cost, tenants, access

[calm] Sentinel 설계는 네 가지를 결정해야 합니다. 워크스페이스를 어디에 둘지, 무엇을 수집하고 보관할지, 어떤 테넌트를 다룰지, 누가 무엇을 할 수 있는지입니다.
[600ms]
[confident] 여러 소스에 걸친 위협을 탐지하고 대응해야 한다면 Sentinel을 떠올리세요. 운영 상태가 목적이라면 Azure Monitor 경고를 떠올리면 됩니다.
[600ms]
[reassuring] Sentinel 역할은 워크스페이스가 있는 리소스 그룹에 할당하세요.

## Step 12 · Sentinel is moving to the Defender portal

[curious] Sentinel이 새 자리를 잡았습니다. Microsoft Defender 포털에서 정식 출시되었고, 워크스페이스와 KQL은 그대로입니다.
[600ms]
[serious] Azure 포털에서는 2027년 3월 31일 이후 지원이 중단되므로, 기존 고객은 전환 계획을 세워야 합니다.
[600ms]
[calm] 상관 분석을 거치면 인시던트 제목이 바뀔 수 있어서, 자동화의 동작이 조금 다릅니다. 조건에는 분석 규칙 이름과 태그를 사용하세요.

## Step 13 · Signals to incidents to action

[calm] Sentinel은 수천 개의 원시 신호를, 사람이 바로 조치할 수 있는 몇 개의 인시던트로 줄여 줍니다.
[600ms]
[confident] 방법은 네 단계입니다. 데이터를 연결하고, 규칙으로 탐지하고, 조사하고 헌팅한 다음, 대응을 자동화합니다.
[600ms]
[proud] Sentinel이 두 학습 가이드에 직접 나오지는 않지만, A Z 305는 로깅과 모니터링을 추천하라고 하고, A Z 104는 Azure Monitor 로그와 경고를 다룹니다.
