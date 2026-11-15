# Narrator Script — GitHub · Agents in the SDLC: Plan, Act, Evaluate

**Source animation:** [AgentsInTheSdlc.html](../../../journeys/GitHub/AgentsInTheSdlc.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-cloud-agent>

---

## Step 1 · Assistant or agent

[calm] Contoso의 Maya를 만나 보세요. Maya는 Copilot을 두 가지 방식으로 쓸 수 있는데, 둘 다 쓸모가 있습니다.
[600ms]
[curious] 어시스턴트는 프롬프트에 제안으로 답하고, 그 제안은 직접 적용하고 확인해야 합니다. 에이전트는 조사하고, 계획하고, 파일을 편집하고, 테스트까지 스스로 실행합니다.
[600ms]
[confident] 그래서 에이전트와 일할 때는 내 역할이 달라집니다. 모든 단계를 손으로 하는 대신, 완성된 결과를 검토하게 됩니다.

## Step 2 · Where agents fit

[curious] 그렇다면 소프트웨어 라이프사이클의 어느 단계에서 에이전트를 일하게 해야 할까요? 범위가 분명한 단계를 맡기세요.
[600ms]
[confident] 에이전트는 조사와 계획, 작은 버그 수정, 테스트와 문서 추가, 검사 실행, 초안 풀 리퀘스트 열기를 할 수 있습니다. 우선순위, 설계, 성공 기준, 승인, 프로덕션 위험은 사람이 계속 맡습니다.
[600ms]
[serious] 이것은 정해진 규칙이 아니라 출발점이 되는 지도입니다. 보안, 개인 데이터, 인시던트 대응은 보통 사람이 맡습니다.

## Step 3 · GitHub as the system of record

[calm] 에이전트가 하는 모든 일은 GitHub에 남기 때문에, 팀은 언제든 무슨 일이 있었는지 볼 수 있습니다.
[600ms]
[confident] 이슈에는 작업이 담기고, 브랜치는 에이전트의 작업을 기본 브랜치와 분리해 줍니다. 풀 리퀘스트는 사람이 결정을 내리는 곳입니다.
[600ms]
[reassuring] 커밋은 Copilot이 작성하고 요청한 사람이 공동 작성자로 들어가며, 커밋마다 세션 로그 링크가 있습니다. 관리자는 감사 로그 이벤트도 받습니다.

## Step 4 · Inputs, outputs and success criteria

[curious] 이슈를 프롬프트라고 생각하세요. 무엇이 들어가고, 무엇이 나와야 하고, 잘 됐는지 어떻게 알 수 있을까요?
[600ms]
[confident] 문제, 관련 파일, 제약 조건을 적으세요. 에이전트가 무엇을 내놓아야 하는지 쓰고, 작업이 끝났는지 알려 주는 검사도 추가하세요.
[600ms]
[encouraging] 명확한 인수 조건을 적고 올바른 파일을 짚어 주면 큰 도움이 됩니다. Copilot이 코드베이스를 직접 검색할 수도 있지만요.

## Step 5 · Plan before act

[calm] 코드를 바꾸기 전에, 에이전트는 사람이 읽을 수 있는 계획을 먼저 작성합니다.
[600ms]
[confident] 좋은 계획에는 구조가 있습니다. 목표, 파일, 단계, 검사, 그리고 범위에 포함되지 않는 것이 들어갑니다. 코드 변경이 아니라 제안입니다.
[600ms]
[reassuring] 사람이 승인하기 전까지는 실행이 잠겨 있습니다. 코드를 쓰기 전에 접근 방식부터 합의하는 것입니다.

## Step 6 · Validate the plan

[curious] 이제 사람이 계획을 읽고 결정합니다. 두 버튼을 모두 눌러 보세요.
[600ms]
[confident] 승인하면 게이트가 열리고 에이전트가 실행할 수 있습니다. 댓글과 함께 돌려보내면 에이전트가 계획을 수정하고, 실행은 계속 잠긴 상태로 남습니다.
[600ms]
[reflective] 계획을 검토하는 데는 비용이 적게 듭니다. 잘못된 변경을 나중에 고치는 데는 그렇지 않습니다. 그러니 계획이 내 의도와 맞을 때까지 계속 다듬으세요.

## Step 7 · Act inside boundaries

[calm] 계획이 승인되면 에이전트는 자기 브랜치에서 작업을 시작합니다.
[600ms]
[serious] 푸시할 수 있는 곳은 Copilot 브랜치 하나, 또는 업데이트하라고 요청받은 풀 리퀘스트의 브랜치뿐입니다. 풀 리퀘스트를 준비 완료로 표시하거나, 승인하거나, 병합할 수는 없습니다.
[600ms]
[reassuring] 브랜치 보호와 필수 검사는 사람에게 적용되는 것처럼 에이전트에게도 똑같이 적용됩니다.

## Step 8 · Evaluate the result

[curious] 작업이 푸시되면 풀 리퀘스트에서 검사와 스캔이 실행됩니다.
[600ms]
[confident] 기본적으로 에이전트는 CodeQL, 비밀 스캔, 새 의존성에 대한 보안 권고 검사로 자기 코드를 점검하고, Copilot 코드 리뷰가 두 번째 의견을 줍니다. 워크플로우는 사람이 승인한 뒤에 실행됩니다.
[600ms]
[serious] 그다음 사람이 변경 내용을 읽고 결정합니다. 세션 로그가 직접 하는 리뷰와 테스트를 대신하지는 않습니다.

## Step 9 · Governance by pull request

[calm] 저장소 제어 네 가지가, 에이전트가 풀 리퀘스트를 열었다는 사실을 검토와 승인을 거친 변경으로 바꿔 줍니다.
[600ms]
[confident] 검토 전에는 템플릿이 같은 질문을 하고, 코드 소유자가 알맞은 검토자를 요청합니다. 병합 전에는 규칙 집합이 승인과 검사 통과를 요구합니다. 배포 전에는 환경에서 검토자를 요구할 수 있습니다.
[600ms]
[reflective] 사람 이름 없이 Copilot이 여는 풀 리퀘스트에 승인을 하나 더 요구하는 기능은 아직 공개 미리 보기입니다.

## Step 10 · Anti-patterns and their fixes

[calm] 에이전트 작업이 잘못되는 흔한 경우 세 가지입니다. 각각 이를 막아 주는 습관과 짝을 이룹니다.
[600ms]
[concerned] 모호한 작업은 범위를 정하고 인수 조건을 적은 이슈로 해결합니다. 중단 규칙이 없을 때는 한도를 정하고, 그다음 사람에게 넘기는 것으로 해결합니다.
[600ms]
[serious] 검토 없는 병합은 필수 검토, 코드 소유자, 검사로 막습니다. 이것은 예시일 뿐 공식 목록이 아닙니다.

## Step 11 · Recap: plan, act, evaluate

[calm] 루프는 하나이고, 게이트마다 사람이 있으며, GitHub가 모든 것을 기록합니다.
[600ms]
[confident] 입력, 출력, 성공 기준을 정의해서 계획하고, 그 계획을 검증하세요. 에이전트는 병합 권한 없이 자기 브랜치에서 실행합니다. 평가는 검사, 스캔, 변경 내용 검토, 풀 리퀘스트 거버넌스로 합니다.
[600ms]
[proud] 이것으로 G H 600에서 에이전트를 라이프사이클에 맞추는 기술, 즉 작업 정의부터 풀 리퀘스트 거버넌스까지를 마칩니다.
