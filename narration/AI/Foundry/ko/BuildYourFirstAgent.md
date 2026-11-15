# Narrator Script — Foundry · Build and test your first agent in the Foundry portal

**Source animation:** [BuildYourFirstAgent.html](../../../../journeys/AI/Foundry/BuildYourFirstAgent.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/foundry/quickstarts/get-started-code>
- <https://learn.microsoft.com/azure/foundry/agents/concepts/development-lifecycle>
- <https://learn.microsoft.com/azure/foundry/agents/how-to/tools/file-search>
- <https://learn.microsoft.com/azure/foundry/observability/concepts/trace-agent-concept>

---

## Step 1 · From a model to an agent

[calm] Contoso 아웃피터스에는 이미 배포한 모델이 있고, 이 모델은 거의 모든 질문에 답할 수 있습니다. 하지만 Contoso에 대해서는 아무것도 모릅니다.
[600ms]
[curious] 에이전트는 모델에 지침과 지식, 도구를 입혀서 이 간극을 메워 줍니다.
[600ms]
[confident] 에이전트란 무엇인가를 다뤘던 앞선 수업을 복습하는 시간입니다. 모든 단계에서 같은 반품 도우미와 함께합니다.

## Step 2 · Create the agent: name and model

[curious] Foundry 포털에서 Agents를 열고 Create agent를 선택하세요. 이름을 정한 다음, 사용할 배포 모델을 고릅니다.
[600ms]
[serious] 에이전트 이름은 한 번 정하면 바꿀 수 없으니 신중하게 정하세요.
[600ms]
[calm] 코드에서도 나중에 이 이름으로 에이전트를 불러옵니다.

## Step 3 · Write the instructions

[calm] 지침은 에이전트에게 역할과 한계를 정해 줍니다. 여기서는 범위 규칙을 켜고 끌 수 있습니다.
[600ms]
[curious] 이제 주제와 상관없는 질문을 하고 결과를 비교해 보세요. 규칙을 켜 두면 에이전트가 정중하게 본연의 업무에 집중합니다.
[600ms]
[reassuring] 지침에 한계를 분명히 적어 두는 것이 에이전트를 집중시키는 가장 간단한 방법입니다.

## Step 4 · Add knowledge

[curious] 지식을 추가하면 에이전트가 여러분의 파일을 근거로 답할 수 있습니다. Contoso가 정책 문서를 업로드하면 문서가 색인됩니다.
[600ms]
[confident] 에이전트는 답하기 전에 관련 대목을 먼저 찾아보고, 그 내용을 답변에 사용합니다.
[600ms]
[calm] 파일 검색은 지식을 추가하는 방법 중 하나입니다. 먼저 파일을 업로드해서 벡터 저장소에 색인해 두어야 합니다.

## Step 5 · Add a tool

[calm] 도구를 쓰면 에이전트가 정보를 조회하거나 직접 작업을 실행할 수 있습니다. 하나를 골라 설정을 마무리하세요.
[600ms]
[serious] 도구를 연결한 에이전트를 저장하려면, 먼저 그 도구의 설정이 성공적으로 끝나야 합니다.
[600ms]
[confident] 그리고 지침에 도구를 언제 써야 하는지 적어 두세요. 그러면 에이전트가 알맞은 순간에 도구를 사용합니다.

## Step 6 · Test in the playground: read the tool call

[curious] 이제 플레이그라운드에서 테스트해 봅니다. 도구가 필요한 질문을 던지고, 도구 호출을 열어서 내용을 확인하세요.
[600ms]
[intrigued] 어떤 도구가 실행됐는지, 무엇을 전달했는지, 무엇이 돌아왔는지 한눈에 볼 수 있습니다.
[600ms]
[confident] 트레이싱은 이런 입력과 출력을 기록합니다. 그래서 에이전트가 의도한 도구를 호출했는지 확인할 수 있습니다.

## Step 7 · Save a version

[serious] 지금까지 한 작업은 아직 초안일 뿐입니다. 포털을 나가면 저장하지 않은 변경 사항은 사라집니다.
[600ms]
[confident] 저장하면 절대 바뀌지 않는 새 버전이 만들어집니다. 그래서 버전끼리 비교할 수 있고, 필요하면 이전 버전으로 되돌릴 수도 있습니다.
[600ms]
[reassuring] 기록이나 모니터링, 전체 평가가 필요하다면 먼저 버전을 저장하세요.

## Step 8 · Call the agent by name

[calm] 작은 클라이언트 앱에는 포털이 필요 없습니다. 로그인해서 프로젝트에 연결한 뒤, 이름으로 에이전트를 불러오면 됩니다.
[600ms]
[curious] Azure 명령줄로 한 번만 로그인하세요. 그러면 기본 자격 증명이 그 로그인 정보를 알아서 찾아 줍니다.
[600ms]
[confident] 코드에서는 Azure AI Projects 2점 x 패키지를 사용합니다.

## Step 9 · Print the reply and follow the conversation

[curious] 대화를 만들고, 메시지를 보내고, 응답을 출력하세요.
[600ms]
[impressed] 이번에는 같은 대화에서 두 번째 메시지를 보내 보세요. 대화가 턴마다 기록을 유지하기 때문에, 에이전트가 앞의 내용을 기억합니다.
[600ms]
[reassuring] 그래서 후속 질문에서는 처음 질문을 다시 말할 필요가 없습니다.

## Step 10 · Troubleshoot: wrong tool, empty answer, auth error

[serious] 첫 에이전트에서 생기는 문제는 대부분 세 가지 중 하나입니다. 도구가 잘못됐거나, 답변이 비어 있거나, 인증 오류가 난 경우입니다.
[600ms]
[confident] 도구 설정과 데이터, 로그인 상태를 차례로 확인하세요. 트레이스를 보면 모델이 도구 호출을 만들었는지, 도구가 무엇을 받아서 무엇을 돌려줬는지 알 수 있습니다.
[600ms]
[proud] 이 세 가지만 짚어 보면, 첫 에이전트를 자신 있게 만들고 테스트하고 호출할 수 있습니다.
