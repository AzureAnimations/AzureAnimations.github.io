# Narrator Script — Microsoft 365 Copilot · Purview: Risk and Compliance Tools

**Source animation:** [PurviewRiskAndCompliance.html](../../../journeys/Copilot/PurviewRiskAndCompliance.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/purview/dlp-alerts-dashboard-get-started>
- <https://learn.microsoft.com/purview/insider-risk-management>
- <https://learn.microsoft.com/purview/communication-compliance>
- <https://learn.microsoft.com/purview/data-classification-activity-explorer>

---

## Step 1 · Something happened. Where do I look?

[calm] Priya Contoso의 Microsoft 365 관리자입니다. 경고가 울리고, 메시지가 보고되며, 법무팀이 파일 요청합니다.
[600ms]
[curious] Microsoft Purview 각각에 맞는 도구가 있고, 각각은 서로 다른 것을 보여줍니다.
[600ms]
[confident] 이 수업은 시험 A B 900부터 데이터 보호 및 거버넌스 위험을 식별하는 방법을 다룹니다.

## Step 2 · Eight tools, three kinds of job

[calm] 도구는 여덟 가지가 있으며, 세 가지 역할로 나뉩니다.
[600ms]
[confident] 어떤 곳은 알림이나 일치 항목을 열어 검토할 수 있게 합니다. 어떤 곳은 데이터, 활동, AI 사용을 탐색할 수 있게 합니다.
[600ms]
[curious] 두 번째는 콘텐츠 검색이나 준수 측정을 할 수 있습니다.

## Step 3 · DLP alerts: a policy matched

[curious] 누군가의 행동이 데이터 손실 방지 정책과 일치하면 경고가 발령됩니다.
[600ms]
[confident] DLP 알림 대시보드에서 열고, 이벤트를 읽고, 판단한 뒤 닫습니다.
[600ms]
[reassuring] 알림은 이메일, SharePoint, OneDrive, Teams 등 다양한 항목을 포함하며, 이를 보기 위해서는 컴플라이언스 관리자나 보안 관리자 같은 역할이 필요합니다.

## Step 4 · Insider Risk Management: risky activity

[concerned] 내부자 리스크 관리는 데이터 유출이나 도난과 같은 위험한 사용자 활동을 조사합니다.
[600ms]
[confident] 패턴이 일치하면 정책이 경고를 발령하고, 분석가가 이를 분류합니다. 검토자는 더 깊은 조사를 위한 사건을 열 수 있습니다.
[600ms]
[reassuring] 사용자 이름은 기본적으로 가명으로 되어 있어 개인정보 보호에 도움이 됩니다.

## Step 5 · Communication Compliance: policy violations

[calm] 커뮤니케이션 컴플라이언스는 메시지를 귀하의 정책과 대조합니다.
[600ms]
[confident] 이 규칙들은 이메일, Teams, Viva Engage, Copilot전반에 걸쳐 괴롭힘 언어, 민감한 정보, 규제 규칙 등을 포함할 수 있습니다.
[600ms]
[reassuring] 일치 항목은 검토자에게 전달되고, 검토자가 이를 읽고 조치합니다. 정책을 설정하는 일과 일치 항목을 검토하는 일은 별개의 업무입니다.

## Step 6 · Activity explorer: what users did

[curious] 활동 탐색기는 라벨이 붙은 콘텐츠를 적용, 변경, 제거 등 사용자가 어떻게 처리했는지 보여줍니다.
[600ms]
[confident] 사용자, 활동, 라벨, 위치 또는 날짜별로 필터링할 수 있습니다.
[600ms]
[reflective] 데이터는 통합 감사 로그에서 나오고 최대 30일까지 포함되기 때문에 실시간은 아닙니다.

## Step 7 · Data Explorer: where sensitive data is

[calm] 데이터 탐색기는 민감한 데이터가 현재 어디에 위치해 있는지 스냅샷을 보여줍니다.
[600ms]
[confident] 민감성 라벨이 붙은 항목, 보존 라벨이 붙은 항목, 또는 민감한 정보 유형에 맞는 항목을 나열합니다.
[600ms]
[serious] 항목을 보는 데는 추가적이고 제한된 역할이 필요한데, 이는 파일 내용을 읽을 수 있기 때문입니다.

## Step 8 · DSPM for AI: see AI activity

[curious] 데이터 보안 포스처 관리(Data Security Posture Management)는 AI 사람들이 Copilot 및 기타 AI 앱을 어떻게 사용하는지 보여줍니다.
[600ms]
[confident] 활동, 관련된 민감한 데이터, 그리고 과도한 공유 위험이 어디에 있는지 볼 수 있습니다.
[600ms]
[reflective] Learn에서는 이제 새로운 환경을 D S P M이라고 부르지만, 시험 목표에서는 여전히 A I용 D S P M이라는 이름을 사용합니다.

## Step 9 · eDiscovery: search files and emails

[calm] 법률 부서에서 파일 요청이 있을 때, Microsoft Purview eDiscovery에서 콘텐츠 검색을 시작합니다.
[600ms]
[confident] 메일박스, 사이트, OneDrive, Teams 등 키워드별로 파일, 이메일, 채팅을 찾아냅니다.
[600ms]
[reassuring] 통계를 확인하고 결과를 미리 본 후 내보내세요. 클래식 콘텐츠 검색은 이미 폐지되어 eDiscovery 안에 남아 있습니다.

## Step 10 · Compliance Manager: score and actions

[curious] 컴플라이언스 매니저는 규정을 개선 조치가 포함된 평가로 전환합니다.
[600ms]
[confident] 행동을 완료하면 점수를 얻어 준수 점수를 올리며, 각 행동은 서로 다른 점수를 부여합니다.
[600ms]
[optimistic] 그래서 항상 다음에 무엇을 해야 할지 알 수 있으며, Microsoft 365 데이터 보호 기준선을 기반으로 한 점수부터 시작합니다.

## Step 11 · Which Purview tool shows me what happened?

[curious] 상황을 선택하면 해당 Purview 도구가 켜집니다.
[600ms]
[confident] 마지막 줄은 그 카드로 무엇을 할지 알려 줍니다.
[600ms]
[reflective] 많은 위험 요소는 여러 도구가 필요합니다. DLP 알림은 내부자 위험 관리(Insider Risk Management)로 안내할 수 있으니, 질문에 맞는 도구부터 시작하세요.

## Step 12 · Eight tools, one question each

[calm] 도구는 여덟 가지이며, 각각 질문이 하나씩 있습니다. 상황에 맞는 도구를 짝지어 보세요.
[600ms]
[confident] 그 다음 측정된 A B 900 기술과 공식 Microsoft Learn 훈련과 비교해 보세요.
[600ms]
[determined] 기술은 시간이 지나면서 변하니 항상 최신 학습 가이드를 읽어보세요.
