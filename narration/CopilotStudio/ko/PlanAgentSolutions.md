# Narrator Script — Copilot Studio · Copilot Studio — Plan an Agent Solution

**Source animation:** [PlanAgentSolutions.html](../../../journeys/CopilotStudio/PlanAgentSolutions.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/microsoft-copilot-studio/>

---

## Step 1 · Building is easy. Deciding comes first.

[calm] Contoso의 메이커가 오후 한나절 만에 도우미 에이전트를 만듭니다. 잘 작동하고, 모두가 만족합니다.
[600ms]
[concerned] 그러다 질문 일곱 개가 들어오고, 각 질문 때문에 에이전트를 만드는 방식이 달라집니다.
[600ms]
[reflective] 이 과정들은 A B 620 학습 가이드에 나오는 'Plan an agent' 솔루션 스킬을 반영합니다.

## Step 2 · Seven decisions to make first

[confident] 지도는 다음과 같습니다: 엔터프라이즈 시스템, 아이덴티티, 채널, 책임 있는 AI, 거버넌스, 재사용 가능한 구성 요소, 그리고 대상 사용자.
[600ms]
[calm] 각 결정이 빌드를 형성합니다.
[600ms]
[encouraging] 모두 답하면 빠른 프로토타입이 방어할 수 있는 계획이 됩니다.

## Step 3 · Decision 1 · Which systems will it touch?

[curious] 먼저, 에이전트가 읽거나 행동해야 할 모든 시스템을 나열하세요.
[600ms]
[confident] 각 항목마다 결정하세요: 읽어야 할 지식인가요, 아니면 행동하는 도구인가요?
[600ms]
[calm] 지식은 Copilot 커넥터, Power Platform 커넥터, 또는 Azure AI Search에서 나올 수 있습니다. 도구는 커넥터, MCP 서버, 또는 REST API일 수 있습니다. Contoso시스템의 시스템은 만들어진 것입니다.

## Step 4 · Decision 2 · How do people sign in?

[curious] 다음으로, 사용자가 자신이 누구인지 어떻게 증명할지 선택하세요.
[600ms]
[confident] 그 선택이 어떤 채널이 작동할지, 그리고 에이전트가 사용자를 대신해 무엇을 할 수 있는지를 결정합니다.
[600ms]
[reassuring] 신규 에이전트의 기본 설정은 Microsoft 인증입니다. 변경 사항은 게시 후에만 적용됩니다.

## Step 5 · Decision 2 · Whose permissions do tools use?

[curious] 도구가 시스템을 호출할 때, 그 도구는 누군가의 이름으로 실행됩니다. 누구의 접근 권한을 사용해야 할까요?
[600ms]
[confident] 로그인한 사용자의 자격 증명으로 사람들은 자신이 볼 수 있는 데이터만 접근할 수 있습니다.
[600ms]
[reflective] 제작자의 자격 증명을 사용하면 도구가 작성자 역할을 하며, 이는 공유 리소스에 적합합니다. 인증 없이는 도구가 사용자 자격 증명을 사용할 수 없기 때문에 의도적으로 선택하세요.

## Step 6 · Decision 3 · Where will it live?

[calm] 채널은 사람들이 에이전트를 만나는 곳으로, 예를 들어 Teams, Microsoft 365 Copilot, SharePoint또는 웹사이트가 있습니다.
[600ms]
[confident] 먼저 게시하고, 그 다음에 이미 이용하는 청중의 채널을 연결하세요. 각 채널은 고유한 경험을 가지고 있습니다.
[600ms]
[serious] 데모 웹사이트는 고객을 위한 것이 아니라 테스트용이며, 관리자는 데이터 정책으로 채널을 차단할 수 있습니다.

## Step 7 · Decision 4 · Who is it for?

[curious] 먼저 대상 사용자를 정하세요, 내부 사용자인지 외부 사용자인지.
[600ms]
[confident] 채널, 로그인, 도구 자격 증명 모두 그 선택에서 따라옵니다. 하나하나 시도해 보세요.
[600ms]
[reflective] 이 조합들은 기본적으로 계획된 것입니다. Teams는 Authenticate with Microsoft을 사용하고, 다른 채널들은 수동 인증이 필요하며, 인증이 없으면 링크 사용자와 채팅할 수 없습니다.

## Step 8 · Decision 5 · How will it stay responsible?

[serious] 문제가 생긴 후가 아니라 출시 전에 가드레일을 계획하세요.
[600ms]
[confident] 콘텐츠를 중재하고, 승인된 지식에 기반한 답변을 하며, AI있다고 말하고, 사람을 계속 연락할 수 있게 하세요.
[600ms]
[reassuring] 콘텐츠 중재는 입력 시와 에이전트가 응답하기 전에 두 번 점검됩니다. 메이커는 지식 출처를 제한하고 근거 없는 응답을 끌 수도 있습니다.

## Step 9 · Decision 6 · Who governs it?

[calm] 관리자는 Power Platform 관리자 센터에서 규칙을 정합니다.
[600ms]
[confident] 그들은 에이전트가 어디에 구축되는지, 무엇과 연결될 수 있는지, 그리고 누가 이를 공유할 수 있는지를 결정합니다.
[600ms]
[serious] 커넥터는 비즈니스, 비비즈니스, 차단으로 분류되며, 이 그룹 간에 데이터가 흐를 수 없습니다.

## Step 10 · Decision 7 · What can we reuse?

[curious] 왜 모든 에이전트에서 같은 조각을 다시 만들까요? 한 번만 공유하는 구성 요소를 패키지화하면 됩니다.
[600ms]
[confident] 컬렉션에는 주제, 지식, 도구, 자식 에이전트, MCP 서버, 커넥터, 플로우, 엔티티가 포함될 수 있습니다.
[600ms]
[calm] 관리형 솔루션으로 내보내지며, 뷰어나 에디터 권한과 공유할 수 있습니다. 작가는 컴포넌트를 사용할 수 있지만 변경할 수는 없습니다.

## Step 11 · Your plan on one page

[calm] 7개의 답변된 결정이 프로토타입을 계획으로 바꿉니다.
[600ms]
[encouraging] 자신의 에이전트를 하나씩 비교해 보면서 빈틈을 파악하세요.
[600ms]
[determined] 그다음 시험 기술을 공부하고, 현재 A B 620 학습 가이드를 읽으세요. 시험과 Copilot Studio 이름은 바뀌니까요.
