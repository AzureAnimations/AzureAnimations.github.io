# Narrator Script — Foundry · Secure a Foundry Project: Identity, Network and Guardrails

**Source animation:** [SecureAFoundryProject.html](../../../../journeys/AI/Foundry/SecureAFoundryProject.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/foundry/concepts/authentication-authorization-foundry>
- <https://learn.microsoft.com/azure/foundry/concepts/rbac-foundry>
- <https://learn.microsoft.com/azure/foundry/how-to/configure-private-link>
- <https://learn.microsoft.com/azure/foundry/guardrails/guardrails-overview>

---

## Step 1 · Keys in a screenshot: why keyless

[serious] API 키는 고정된 비밀입니다. 스크린샷이나 채팅, 리포지토리에 키가 노출되면, 그 키를 가진 사람은 누구나 모든 권한을 갖게 됩니다.
[600ms]
[concerned] 게다가 누가 썼는지도 알 수 없습니다. 이 키는 예시용 자리 표시자이고, Contoso는 가상의 회사입니다.
[600ms]
[confident] Microsoft는 대신 Microsoft Entra ID를 쓰라고 권장하며, 프로덕션 워크로드에는 이 방식이 맞습니다.

## Step 2 · Managed identity: for the project and your app

[calm] 웹 앱과 Foundry 프로젝트에 각각 관리 ID를 부여하세요. 자격 증명은 Azure가 관리하니, 직접 보관하거나 교체할 필요가 없습니다.
[600ms]
[confident] 그다음 역할 할당으로 각 ID가 무엇을 할 수 있는지 정합니다.
[600ms]
[curious] ID는 시스템 할당일 수도, 사용자 할당일 수도 있습니다. 토큰으로 로그인하려면 Foundry 리소스에 사용자 지정 하위 도메인이 있어야 합니다.

## Step 3 · Roles: who deploys, who calls, who builds

[calm] Foundry에는 기본 제공 역할이 있습니다. 작업마다 가장 권한이 작은 역할을 고르세요.
[600ms]
[confident] 그리고 그 작업이 이뤄지는 범위에 역할을 할당하세요. 그래야 사용자와 앱이 필요한 만큼만 권한을 갖습니다.
[600ms]
[serious] 역할은 Microsoft Entra ID로 로그인할 때 적용됩니다. API 키는 역할을 건너뛰고 모든 권한을 줍니다.

## Step 4 · Private endpoints: close the public door

[calm] 퍼블릭 네트워크 액세스를 사용 안 함으로 설정하고, 프라이빗 엔드포인트를 추가하세요.
[600ms]
[confident] 이제 호출하는 쪽은 열린 인터넷이 아니라 여러분의 가상 네트워크를 거쳐 Foundry 리소스에 접속합니다.
[600ms]
[curious] 네트워크 안에서는 같은 엔드포인트 이름이 프라이빗 링크 DNS 영역을 거쳐 프라이빗 주소로 확인됩니다.

## Step 5 · Data and egress: what leaves the network

[curious] 에이전트 클라이언트는 여러분의 서브넷에 삽입됩니다. 그래서 Storage, AI Search, Cosmos DB에 프라이빗 엔드포인트로 접속합니다.
[600ms]
[confident] 방화벽은 무엇이 네트워크 밖으로 나갈 수 있는지 결정합니다.
[600ms]
[reassuring] 표준 구성에서는 Storage, AI Search, Cosmos DB를 직접 준비합니다. 그래서 에이전트 데이터가 여러분의 Azure 테넌트 안에 남습니다.

## Step 6 · Content filters: categories, severity, blocking

[calm] Foundry에서는 이것을 가드레일이라고 부릅니다. 컨트롤이 네 가지 유해 범주마다 심각도 점수를 매깁니다.
[600ms]
[curious] 그런 다음 선택한 차단 수준에 따라 결과에 주석을 달거나 차단합니다. 스위치를 직접 눌러 보세요.
[600ms]
[confident] 컨트롤은 사용자 입력과 출력을 검사합니다. 에이전트라면 도구 호출과 도구 응답도 검사할 수 있는데, 이 기능은 미리 보기입니다. 모델은 따로 바꾸지 않으면 기본 가드레일을 사용합니다.

## Step 7 · Prompt Shields and groundedness

[serious] 프롬프트 실드는 악의적이거나 숨겨진 지시를, 모델이 따르기 전에 잡아냅니다.
[600ms]
[concerned] 문서 공격 감지는 기본적으로 꺼져 있으니, 꼭 켜세요.
[600ms]
[calm] 근거성 감지는 답변을 원본 텍스트와 대조해서 확인합니다. 미리 보기 기능이고, 에이전트에는 적용되지 않으며, 2027년 4월 30일에 종료됩니다.

## Step 8 · Custom blocklists and risk detection

[calm] 금지어를 직접 추가할 수도 있습니다. 정확히 일치하는 단어나 정규식을 쓸 수 있습니다.
[600ms]
[curious] 그다음 보호 대상 자료와 개인 데이터를 찾는 감지기를 켜세요. 개인 데이터 감지는 미리 보기입니다.
[600ms]
[confident] 감지기마다 응답에 주석을 달거나 차단할 수 있습니다. 여기 나오는 이름과 숫자는 모두 가상입니다.

## Step 9 · Audit it: logs, traces and approval gates

[calm] 리소스 로그를 Azure Monitor로 보내고, 에이전트가 실행될 때마다 추적하세요.
[600ms]
[serious] 위험한 도구 호출은 사람이 승인할 때까지 기다리게 하세요. 예제에서는 항상 승인을 요구하도록 설정한 MCP 도구를 사용합니다.
[600ms]
[confident] 승인 내역과 도구 호출을 기록해 두면, 나중에 감사할 수 있습니다.

## Step 10 · Secure project at a glance

[calm] 네 겹의 보호가 함께 작동합니다. 누가 호출하는지, 어느 네트워크인지, 어떤 콘텐츠인지, 그리고 나중에 무엇을 증명할 수 있는지입니다.
[600ms]
[reflective] 어느 한 겹만으로는 충분하지 않습니다.
[600ms]
[proud] ID와 네트워크, 가드레일, 감사가 서로 보완하면서, 믿고 지켜 낼 수 있는 프로젝트가 만들어집니다.
