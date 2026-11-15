# Narrator Script — GitHub · How a Copilot Suggestion Is Made

**Source animation:** [HowCopilotWorks.html](../../../journeys/GitHub/HowCopilotWorks.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/training/modules/introduction-prompt-engineering-with-github-copilot/3-github-copilot-user-prompt-process-flow>
- <https://learn.microsoft.com/agent-framework/journey/llm-fundamentals>

---

## Step 1 · You type, a suggestion appears

[calm] Contoso 개발자 Maya가 주석을 입력하자, 회색 글씨가 나타납니다.
[600ms]
[curious] 그런데 그 사이에 일곱 단계가 진행되고, 우리 눈에는 보이지 않습니다.
[600ms]
[confident] 이번 수업에서는 그 단계를 하나씩 열어 보면서, 내 코드에 어떤 일이 일어나는지 알아봅니다.

## Step 2 · Gather the context

[calm] 무엇이든 전송하기 전에, Copilot은 커서 주변의 단서를 모읍니다. 코드, 파일, 근처 탭, 그리고 프로젝트입니다.
[600ms]
[confident] 채팅에서는 선택한 영역, at 기호로 언급한 파일, 채팅 기록도 함께 사용합니다.
[600ms]
[encouraging] 그러니 중요한 파일은 열고, 그렇지 않은 파일은 닫아 두세요.

## Step 3 · Build the prompt

[curious] 이 단서들은 규칙, 내 코드와 함께 하나의 프롬프트로 묶입니다.
[600ms]
[confident] 커서 앞의 코드와 뒤의 코드가 빈 구간을 감싸고, 모델이 그 구간을 채웁니다. 이것을 중간 채우기라고 부릅니다.
[600ms]
[reflective] 실제 프롬프트 형식은 내부용이라서, 이 그림은 개념만 보여 줍니다.

## Step 4 · Pass the proxy

[calm] 완성된 프롬프트는 HTTPS로 에디터를 떠납니다.
[600ms]
[confident] 모델이 보기 전에, GitHub가 소유한 Microsoft Azure 테넌트의 프록시 서버에 먼저 도착합니다.
[600ms]
[reassuring] 이 프록시가 에디터와 모델 사이에 있는 첫 번째 검문소입니다.

## Step 5 · Filter on the way in

[serious] 프록시는 시스템을 조작하려는 시도를 차단합니다. 그래서 교묘하게 만든 프롬프트로는 Copilot의 동작을 바꿀 수 없습니다.
[600ms]
[confident] 콘텐츠 필터는 불쾌한 텍스트와 개인 정보를 걸러 내고, 그다음에야 프롬프트가 더 나아갑니다.
[600ms]
[reassuring] 모델에는 깨끗한 프롬프트만 도달합니다.

## Step 6 · The model writes

[calm] 모델은 제안을 토큰 하나씩 써 내려갑니다. 토큰은 작은 텍스트 조각입니다.
[600ms]
[curious] 매번 다음에 올 가능성이 높은 것을 예측합니다.
[600ms]
[serious] 가능성이 높다고 해서 정답은 아니니, 제안은 모두 검토하고 테스트하세요.

## Step 7 · Post-process on the way out

[calm] 모든 제안은 여러분에게 보이기 전에 검사를 거칩니다.
[600ms]
[confident] 유해한 콘텐츠, 버그, 보안 결함을 확인하고, 설정이 켜져 있으면 공개 코드와 일치하는지도 확인합니다.
[600ms]
[reassuring] 검사에 실패하면 제안은 중간에 잘리거나 버려집니다.

## Step 8 · Back to the editor

[calm] 모든 검사를 통과한 제안만 에디터에 도착해서, 회색 텍스트로 표시됩니다.
[600ms]
[confident] 전체나 일부를 수락할 수도 있고, 거부할 수도 있고, 그냥 계속 입력해서 무시할 수도 있습니다.
[600ms]
[reassuring] 직접 선택하기 전에는 파일에 아무것도 바뀌지 않습니다.

## Step 9 · Chat is different

[curious] 채팅에서는 새 프롬프트마다 이전 대화 턴이 함께 들어갑니다.
[600ms]
[concerned] 그래서 주제에서 벗어난 오래된 대화가 답변을 엉뚱한 방향으로 끌고 갈 수 있습니다.
[600ms]
[encouraging] 새 작업을 시작할 때는 새 대화를 시작하세요.

## Step 10 · Where your data goes

[calm] 프롬프트와 제안은 어떤 요금제에서든 같은 경로를 지납니다.
[600ms]
[confident] 그 데이터로 모델을 학습시킬 수 있는지는 요금제에 따라 다릅니다. Business와 Enterprise에서는 학습에 사용되지 않습니다.
[600ms]
[serious] Free, Pro, Pro Plus에서는 거부하지 않으면 사용되니, 최신 문구는 Copilot 설정에서 확인하세요.

## Step 11 · Recap: the lifecycle in one picture

[calm] 전체 흐름은 이렇게 한 바퀴를 돕니다. 에디터가 컨텍스트를 모아 프롬프트를 만들고, 프록시와 필터가 들어가는 문과 나오는 문을 모두 지킵니다.
[600ms]
[confident] 모델이 쓰고, 결정은 여러분이 합니다. 채팅도 같은 흐름이고, 프롬프트마다 대화 기록이 추가될 뿐입니다.
[600ms]
[proud] 이제 입력부터 회색 텍스트가 나타나기까지, 그 사이에 벌어지는 일을 알게 되었습니다.
