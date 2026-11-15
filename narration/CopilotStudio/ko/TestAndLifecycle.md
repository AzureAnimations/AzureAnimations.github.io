# Narrator Script — Copilot Studio · Copilot Studio — Test and Manage Agents

**Source animation:** [TestAndLifecycle.html](../../../journeys/CopilotStudio/TestAndLifecycle.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/microsoft-copilot-studio/analytics-agent-evaluation-intro>
- <https://learn.microsoft.com/microsoft-copilot-studio/analytics-agent-evaluation-results>
- <https://learn.microsoft.com/microsoft-copilot-studio/authoring-solutions-overview>
- <https://learn.microsoft.com/microsoft-copilot-studio/authoring-solutions-import-export>

---

## Step 1 · Three good chats aren’t proof

[calm] Maya Contoso Support 에이전트가 테스트 채팅을 완벽하게 해냈어요. 그녀는 만족하지만, 진짜 고객들은 그녀와 다르게 말해요.
[600ms]
[concerned] 그리고 개발은 생산 분야가 아니에요. 그럼 어떻게 작동을 증명하고 안전하게 옮길 수 있을까요?
[600ms]
[confident] 평가로 증명하고, 솔루션, 변수, 파이프라인으로 이동하세요. 이것이 테스트 및 관리 에이전트 테스트 도메인으로, 20%에서 25%입니다.

## Step 2 · Test chat or evaluation? Use both

[curious] 테스트 채팅은 한 번에 한 질문씩 진행되는 실시간 대화입니다. 탐색하기에 아주 좋습니다.
[600ms]
[confident] 에이전트 평가는 전체 테스트 세트를 실행하고, 모든 답변을 점수 매기며, 변경 후 반복할 수 있습니다.
[600ms]
[reflective] Learn은 두 가지 모두를 사용할 것을 권장합니다. 평가는 로그인한 사용자로 실행되므로, 해당 사용자가 볼 수 있는 것만 봅니다.

## Step 3 · Create a test set

[calm] 테스트 케이스는 보통 기대하는 답변이 포함된 질문입니다. 테스트 세트에는 케이스를 최대 100개까지 담을 수 있습니다.
[600ms]
[confident] 에이전트에서 생성하거나, 채팅에서 캡처하거나, 파일을 가져오거나, 직접 작성할 수 있습니다.
[600ms]
[serious] 가져오기 파일은 CSV 또는 TXT 형식이며, 질문과 기대 응답이라는 두 개의 제목이 있습니다. 접근 권한이 있는 모든 제작자는 테스트 세트를 볼 수 있으니 민감한 데이터는 넣지 마세요.

## Step 4 · Choose how to grade the answers

[curious] 총 8가지 테스트 방법이 있으며, 한 테스트 세트는 여러 방법을 사용할 수 있습니다.
[600ms]
[confident] 어떤 사람은 단어를 확인하고, 어떤 사람은 의미나 품질을 판단하며, 한 사람은 사용된 도구를 확인하고, 또 다른 하나는 안전성을 확인합니다.
[600ms]
[reflective] 일반 품질은 기본적으로 켜져 있으며 기대되는 답변이 필요 없습니다. 기대 반환과 비교하는 메서드는 기대값이 없는 경우에는 무효입니다.

## Step 5 · Which method fits? Try it

[encouraging] 시나리오를 선택하면 알맞은 방법이 강조 표시됩니다.
[600ms]
[confident] 언제 사용해야 하고 무엇을 주의해야 하는지 알게 될 거예요.
[600ms]
[reflective] 실제 테스트 세트는 다양한 방법을 사용합니다. 정확한 표현이 중요할 때는 의미 비교와 텍스트 유사성을 조합하세요.

## Step 6 · Review the results

[calm] 각 사례는 합격, 실패, 무효, 오류 중 하나로 끝나며, 합격률이 매겨집니다.
[600ms]
[curious] 실패한 사건을 열어 예상과 실제를 비교하고, 이유를 읽어보며 상담원이 사용한 방식을 확인하세요.
[600ms]
[reassuring] 변경 후 같은 세트를 다시 실행하세요. 결과는 89일 동안 유지되므로, CSV 로 내보내면 더 오래 보관됩니다.

## Step 7 · Primer: environments and Dataverse

[calm] 에이전트들은 Power Platform 환경에서 살며, 에이전트, 플로우, 앱들이 각자의 데이터와 역할을 가진 공간입니다.
[600ms]
[confident] 각 환경은 하나의 Dataverse 데이터베이스를 가질 수 있습니다. Contoso 개발, 테스트, 프로덕션을 사용합니다.
[600ms]
[serious] 출시할 때 기본 생산 환경이 아닌 환경을 사용하세요. 솔루션은 Dataverse 테이블 데이터가 아니라 컴포넌트를 포함합니다.

## Step 8 · ALM: a solution carries the agent

[curious] 커스텀 솔루션을 만들고 '기존 추가'를 선택한 후 에이전트를 선택하세요.
[600ms]
[confident] 해결책은 에이전트를 환경 간 이동시키는 캐리어입니다. 필요한 객체를 추가하여 주제와 흐름도 함께 이동하게 하세요.
[600ms]
[serious] 새로운 솔루션은 관리되지 않으며, 관리된 솔루션을 Copilot Studio에서 내보낼 수 없습니다. 사용자 지정 주제나 지식 소스 같은 일부 구성 요소는 별도로 추가해야 할 수도 있습니다.

## Step 9 · Environment variables: same agent, new value

[curious] 어떤 값은 환경마다 변하는데, 예를 들어 API 엔드포인트 같은 경우입니다. 하드코딩하지 마세요.
[600ms]
[confident] 이 값들을 솔루션 안의 환경 변수에 보관하면, 각 환경이 자체 값을 제공합니다.
[600ms]
[reassuring] 변수는 이름, 타입, 선택적 기본값, 그리고 설정된 상태에서 우선하는 현재 값이 있습니다. 가져오기 시 값을 제공하거나, 파이프라인이 먼저 요청합니다.

## Step 10 · Pipelines: dev to test to production

[calm] 관리자가 파이프라인을 한 번 구축합니다. 그 후 Maya 개발에서 배포 버튼을 누릅니다.
[600ms]
[confident] 동일한 관리형 솔루션이 단계별로 진행되며, 연결과 변수가 먼저 검사됩니다.
[600ms]
[impressed] 요청이 제출될 때 솔루션이 내보내지므로, 어떤 단계도 우회할 수 없습니다. 파이프라인은 테이블 데이터가 아니라 솔루션과 설정을 이동시킵니다.

## Step 11 · Extend the pipeline with gates

[curious] 게이트 확장 기능은 파이프라인에 자신만의 단계를 추가할 수 있게 해줍니다.
[600ms]
[confident] 사전 내보내기 단계로 테스트 세트를 실행할 수 있습니다. 위임된 배포는 승인을 추가하고, Power Automate 흐름이 해당 단계를 완료하거나 거부합니다.
[600ms]
[reflective] 첫 번째 단계에서만 프리내보내기를 활성화하세요. 개인 파이프라인은 확장할 수 없습니다.

## Step 12 · Test and manage agents: all in one

[calm] 테스트 세트, 방법, 결과로 증명하세요.
[600ms]
[confident] 솔루션, 변수, 파이프라인을 함께 이동시키세요. 이것이 테스트와 에이전트 관리 도메인입니다.
[600ms]
[proud] A B 620 시험의 20%에서 25% 정도 되는 부분이니, 시험 보기 전에 최신 학습 가이드를 꼭 읽어보세요.
