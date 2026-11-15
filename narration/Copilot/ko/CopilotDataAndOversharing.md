# Narrator Script — Microsoft 365 Copilot · Copilot, Data and Oversharing

**Source animation:** [CopilotDataAndOversharing.html](../../../journeys/Copilot/CopilotDataAndOversharing.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/microsoft-365/copilot/microsoft-365-copilot-privacy>
- <https://learn.microsoft.com/microsoft-365/copilot/architecture-data-protection-auditing>
- <https://learn.microsoft.com/sharepoint/data-access-governance-reports>

---

## Step 1 · It answered. Should it have?

[calm] Alex영업팀에서 내년 급여 구간에 대해 Copilot 물었습니다. Copilot 인사 사이트의 파일을 사용해 답변했습니다.
[600ms]
[concerned] Priya, 관리자는 그 일이 어떻게 일어났는지 알아야 합니다.
[600ms]
[confident] 이 수업은 시험 A B 900의 데이터 보안과 과도한 공유 기술을 다룹니다. 시험에서 Copilot이라고 부르는 것을 Learn에서는 이제 Microsoft Copilot이라고 부릅니다.

## Step 2 · Copilot sees what Alex sees

[calm] Copilot 로그인한 사용자의 접근 권한으로 작동합니다. Alex 열 수 있는 파일이 그의 답변을 근거로 삼을 수 있습니다.
[600ms]
[curious] 열지 못하는 파일은 손이 닿지 않는 곳에 머무릅니다. Copilot 사용자는 최소한 볼 권한이 있는 조직 데이터만 보여줍니다.
[600ms]
[reassuring] 다른 Microsoft 365 서비스와 동일한 접근 제어를 사용하며, 새로운 접근 권한을 부여하지 않습니다.

## Step 3 · Follow one prompt through Microsoft Graph

[curious] 한 가지 프롬프트를 따라가 봅시다. Copilot이 이를 Microsoft Graph로 보내면, Graph가 Alex가 볼 수 있는 관련 콘텐츠를 찾습니다.
[600ms]
[calm] 그 그라운딩 데이터가 프롬프트와 함께 모델로 전달됩니다.
[600ms]
[confident] 그라운딩은 사용자의 작업 콘텐츠(문서, 이메일, 캘린더, 채팅, 회의 등)에 응답을 고정시키는 것을 의미합니다. 의미 색인화는 동일한 접근 경계를 존중합니다.

## Step 4 · Stays in the tenant, not used for training

[calm] Microsoft Graph를 통해 접근된 프롬프트, 응답, 데이터는 기초 모델 학습에 사용되지 않습니다.
[600ms]
[reassuring] 권한은 사용자, 그룹, 테넌트 간 콘텐츠의 유출을 막아줍니다.
[600ms]
[curious] Copilot 활동 기록은 다른 Microsoft 365 콘텐츠와 함께 저장되며, 관리자가 Microsoft Purview로 관리할 수 있습니다.

## Step 5 · Layers that protect it

[calm] Copilot 먼저 Microsoft 365 허가를 존중합니다. 그게 바로 기초입니다.
[600ms]
[curious] Microsoft Purview와 Microsoft Defender 위에 각자의 컨트롤을 추가합니다. 어떤 기능을 얻느냐는 라이선스에 따라 다릅니다.
[600ms]
[serious] 암호화된 콘텐츠는 사용자가 VIEW 및 EXTRACT 사용 권한을 모두 보유해야 Copilot 작업을 할 수 있습니다.

## Step 6 · Built on six responsible AI principles

[calm] Microsoft책임 있는 AI 원칙이 Copilot을 안내합니다. 총 여섯 명이 있습니다.
[600ms]
[curious] 이 교훈은 단 하나, 즉 프라이버시와 보안에 실려 있습니다.
[600ms]
[reassuring] A B 900 원칙을 이해하도록 요구합니다. 전체 투어는 Foundry 여정의 책임 있는 AI 수업에 포함되어 있습니다.

## Step 7 · Why oversharing happens

[serious] 핵심 아이디어는 이렇습니다. Copilot이 접근 범위를 넓히는 것이 아닙니다. 이미 넓은 접근 범위를 눈에 보이게 만들 뿐입니다.
[600ms]
[curious] 세 가지 습관은 누구도 의도하지 않은 사람들에게 콘텐츠를 공개하게 만듭니다. 권한은 사이트에서 라이브러리, 폴더, 파일로 흘러가며, 누군가 상속을 깨지 않는 한 진행됩니다.
[600ms]
[concerned] 링크 공유는 누구에게나, 조직 내 사람들에게, 혹은 특정 인물에게도 가능해요. 더 넓은 링크는 쉽게 잊혀질 수 있어요.

## Step 8 · Four tools to find oversharing

[calm] 먼저 콘텐츠가 노출된 위치를 보여주는 보고서와 평가부터 시작하세요.
[600ms]
[curious] 그 다음 인사이트와 대시보드를 활용해 먼저 고칠 부분을 결정하세요.
[600ms]
[confident] 역할이 중요합니다. Copilot 대시보드의 보안 섹션은 Global Reader가 보기와 관리자 변경 AI 필요합니다. SharePoint 보고서는 SharePoint 관리자 역할이 필요합니다.

## Step 9 · Run a data access governance report

[calm] SharePoint 관리자 센터에서 보고서를 열고 데이터 접근 거버넌스를 선택하세요.
[600ms]
[curious] 사이트 권한 보고서부터 시작해서 어떤 사이트가 가장 넓게 열려 있는지 확인하세요.
[600ms]
[serious] 스냅샷 보고서는 오늘의 상태를 보여주고, 활동 보고서는 지난 28일간의 활동을 포함합니다. SharePoint Advanced Management없이, 먼저 데이터 수집을 활성화하세요.

## Step 10 · SharePoint Advanced Management

[calm] SharePoint Advanced Management또는 SAM은 콘텐츠 확산을 관리하고, 콘텐츠 수명 주기를 관리하며, 과도한 공유를 방지하는 데 도움을 줍니다.
[600ms]
[curious] 이것들이 Learn에서 언급된 옵션들입니다.
[600ms]
[reassuring] Copilot 배포를 위한 SAM 기능은 Copilot 라이선스와 함께 제공됩니다. 제한된 사이트 생성과 같은 일부 기능은 Plan One 애드온이 필요하므로, 현재 목록을 확인하려면 Learn을 확인하세요.

## Step 11 · Restricted access control

[calm] 이제 해결책을 알려드리겠습니다. 사이트를 한 Microsoft 365 그룹이나 Microsoft Entra 보안 그룹으로 제한하세요.
[600ms]
[impressed] 다른 모든 사람은 직접 허가나 공유 링크가 있어도 차단되고, 파일들은 검색과 Copilot에서 사라집니다.
[600ms]
[confident] 공유 채널 사이트와 프라이빗 채널 사이트는 자체 설정이 필요합니다.

## Step 12 · Try it: change the protection

[excited] 이제 직접 해 보세요. 급여 파일에 적용할 해결 방법을 고르세요.
[600ms]
[curious] Alex가 읽을 수 있는지, 그리고 Copilot가 그에게 보여줄 수 있는지 확인해 보세요.
[600ms]
[serious] 제한된 콘텐츠 발견은 일시적입니다. 권한은 변경되지 않으며, 접근 권한이 있는 사람은 여전히 파일을 열 수 있습니다. 실제 권한을 수정하는 동안 이 기능을 사용하세요.

## Step 13 · See it, find it, fix it

[calm] 정리해 봅시다. 먼저 확인하고, 찾아내고, 그다음 해결합니다.
[600ms]
[proud] Copilot 접근성을 존중하니, 좋은 접근성이 해결책입니다. Priya 이제 그 답이 어떻게 일어났는지, 그리고 어떻게 막을 수 있는지 알게 되었습니다.
[600ms]
[determined] 측정된 A B 900 기술과 공식 Microsoft Learn 훈련 결과를 스스로 검증하세요.
