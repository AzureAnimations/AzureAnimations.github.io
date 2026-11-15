# Narrator Script — GitHub · Teach Copilot Your Project: Instructions, Prompts and Spaces

**Source animation:** [CopilotCustomization.html](../../../journeys/GitHub/CopilotCustomization.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-300>

---

## Step 1 · Same Question, Different Answers

[curious] Maya와 Ravi가 Copilot에게 같은 질문을 했는데, 서로 다른 도구와 스타일로 다른 답이 나옵니다.
[600ms]
[calm] Contoso가 어떻게 빌드하고, 테스트하고, 이름을 짓는지 Copilot에게 알려 주는 것이 없습니다. Copilot이 읽을 수 있는 곳에 표준이 적혀 있지 않기 때문입니다.
[600ms]
[reflective] 공유 지침은 일관성을 높여 주지만, 모든 답이 똑같아진다고 보장하지는 않습니다.

## Step 2 · Repository Instructions

[calm] 저장소에 Markdown 파일 하나를 두면, Contoso가 빌드하고 테스트하고 이름 짓는 방식을 Copilot에게 알려 줄 수 있습니다.
[600ms]
[confident] 자연어로 규칙을 쓰면, 그 저장소에서 하는 모든 요청에 적용됩니다.
[600ms]
[encouraging] 가장 간단한 출발점입니다.

## Step 3 · Path-Specific Instructions

[curious] 경로별 지침 파일에는 적용 대상 패턴이 들어 있어서, 규칙이 패턴에 일치하는 파일에만 적용됩니다.
[600ms]
[calm] 패턴이 여러 개면 쉼표로 구분하세요. 저장소 전체 지침 파일도 있으면 둘 다 사용됩니다.
[600ms]
[reflective] 어떤 Copilot 기능이 이 파일을 읽는지는 클라이언트에 따라 다릅니다.

## Step 4 · Prompt Files

[calm] 자주 반복하는 작업은 프롬프트 파일로 저장해 두세요.
[600ms]
[confident] 다시 입력하는 대신, 채팅에서 슬래시와 파일 이름을 입력해 실행하면 됩니다.
[600ms]
[curious] 자동으로 적용되는 지침과 달리, 프롬프트 파일은 실행할 시점을 직접 정합니다.

## Step 5 · Copilot Spaces

[calm] Space에는 한 가지 작업에 필요한 문서, 코드, 이슈, 노트가 모여 있고, 이를 어떻게 쓸지에 대한 지침도 들어갑니다.
[600ms]
[confident] 소스로는 파일, 저장소, 풀 리퀘스트, 이슈, 업로드한 자료, 노트를 쓸 수 있고, GitHub 소스는 바뀔 때마다 업데이트됩니다.
[600ms]
[curious] Copilot은 이 컨텍스트를 바탕으로 GitHub의 Copilot Chat에서 답합니다.

## Step 6 · Share a Space

[calm] 누가 Space를 열 수 있는지는 소유자가 누구냐에 따라 달라집니다.
[600ms]
[confident] 조직 Space는 관리자, 편집자, 뷰어, 접근 없음 중 하나의 역할을 씁니다. 개인 Space는 비공개로 두거나, 특정 사람과 공유하거나, 링크가 있는 누구에게나 열 수 있습니다.
[600ms]
[reassuring] 뷰어에게는 이미 접근 권한이 있는 소스만 보입니다.

## Step 7 · Spark: A Prompt Becomes an App

[calm] Spark는 평범한 말로 적은 아이디어를 미리 볼 수 있는 작은 앱으로 만들어 주었습니다.
[600ms]
[serious] GitHub는 Spark 서비스를 종료했습니다. 2026년 8월 4일부터 새 앱을 받지 않지만, 학습 가이드에는 여전히 이름이 나옵니다.
[600ms]
[encouraging] 지금은 VS Code의 Copilot, Copilot CLI, 또는 GitHub Copilot 앱으로 같은 방식으로 만들 수 있습니다.

## Step 8 · MCP: Connect an Outside Tool

[curious] MCP 서버를 연결하면 Copilot이 이슈 트래커 같은, 편집기 밖의 도구나 데이터 소스를 쓸 수 있습니다.
[600ms]
[confident] 더 이상 세부 정보를 채팅에 복사해 붙여 넣을 필요가 없습니다. MCP는 모델을 도구와 데이터에 연결하는 개방형 표준입니다.
[600ms]
[serious] 이해한 동작만 승인하세요. 조직은 정책으로 MCP를 허용하거나 차단할 수 있습니다.

## Step 9 · Agent Sessions

[calm] 작업 하나에 세션을 하나 시작하고, 실행되는 동안 다른 일을 계속하세요.
[600ms]
[confident] 세션은 각각 독립적이고 자기만의 기록이 있어서, 다른 세션으로 갔다가 돌아와 이어서 할 수 있습니다.
[600ms]
[reassuring] 보관은 세션을 남겨 두되 숨기는 것이고, 삭제는 완전히 지우는 것입니다.

## Step 10 · Sub-Agents

[curious] 메인 에이전트는 분명한 작업을 서브 에이전트에게 맡길 수 있습니다.
[600ms]
[confident] 서브 에이전트는 자기 컨텍스트에서 작업하고 짧은 결과만 돌려주기 때문에, 메인 채팅이 가볍게 유지됩니다. 목표, 컨텍스트, 허용된 동작, 기대하는 결과를 알려 주세요.
[600ms]
[reflective] 위임하면 모델 사용량이 늘어나니, 간단한 조회는 직접 물어보는 편이 나은 경우가 많습니다.

## Step 11 · Pick the Right Tool

[curious] 필요에 맞는 도구를 짝지어 보세요. 왼쪽에서 필요한 것을 고르면 어떤 도구가 맞는지 보여 줍니다.
[600ms]
[confident] 항상 적용할 규칙은 지침입니다. 저장해 둔 작업은 프롬프트 파일, 공유하는 소스는 Space, 외부 도구는 MCP 서버, 작업 인계는 에이전트 세션입니다.
[600ms]
[encouraging] 맞는 도구 중 가장 작은 것부터 시작하세요. 한 번만 필요한 요구 사항은 그냥 요청에 적으면 됩니다.

## Step 12 · Recap: What Goes Where

[calm] 저장소의 파일은 Copilot에게 항상 적용할 규칙과 저장된 작업을 줍니다.
[600ms]
[confident] Space, MCP, 세션, 서브 에이전트는 소스, 도구, 백그라운드 작업을 끌어옵니다.
[600ms]
[proud] 여기까지가 G H 300 학습 가이드의 GitHub Copilot 기능 사용 영역입니다. Spark는 종료됐지만, 학습 가이드에는 여전히 이름이 나옵니다.
