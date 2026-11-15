# Narrator Script — GitHub · Guardrails and Autonomy Levels for Agents

**Source animation:** [AgentGuardrailsAndAutonomy.html](../../../journeys/GitHub/AgentGuardrailsAndAutonomy.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-600>
- <https://learn.microsoft.com/azure/machine-learning/concept-responsible-ai>

---

## Step 1 · Fast and safe

[calm] 에이전트 팀은 모두 속도와 안전을 동시에 원합니다. 가드레일이 그 둘을 모두 잡는 방법입니다.
[600ms]
[concerned] 검사가 없으면 잘못된 변경 하나가 프로덕션까지 갑니다. 모든 단계마다 사람이 끼면 작업이 그냥 멈춰 있게 되고요.
[600ms]
[confident] Contoso Delivery의 목표는 위험을 줄일 수 있는 곳에서만 사람에게 묻는 것입니다.

## Step 2 · Classify actions by risk

[curious] 에이전트에게 얼마나 자유를 줄지 정하기 전에, 먼저 각 동작이 일으킬 수 있는 피해 정도에 따라 분류하세요.
[600ms]
[calm] 질문은 세 가지입니다. 배포나 서비스가 망가질 수 있나요? 데이터가 노출되거나 접근 권한이 바뀔 수 있나요? 규칙이나 정책을 어길 수 있나요?
[600ms]
[serious] 세 점수 중 가장 높은 것이 전체 위험이 됩니다. 이 등급은 예시일 뿐이고, 등급은 팀마다 직접 정합니다.

## Step 3 · Autonomy levels

[calm] 자율성을 다이얼이라고 생각해 보세요. 한 단계 올라갈수록 에이전트가 할 일은 늘고 사람이 할 일은 줄어듭니다.
[600ms]
[confident] 1단계에서는 에이전트가 제안하고 사람이 변경합니다. 2단계에서는 에이전트가 실행하기 전에 먼저 물어봅니다.
[600ms]
[reflective] 3단계에서는 사람이 사후에 검토하고, 4단계에서는 에이전트가 혼자 실행합니다. 이것은 설명을 위한 단계표이지 공식 목록이 아닙니다.

## Step 4 · Match the level to the risk

[curious] 이제 위험에 맞는 단계를 고르세요. 여기서 동작을 하나 선택하면 해당 단계가 나타납니다.
[600ms]
[confident] 읽기와 검색은 위험이 낮아서 에이전트가 혼자 실행합니다. 브랜치에서 하는 편집은 중간 위험이라서 사람이 사후에 검토합니다.
[600ms]
[serious] 배포나 비용 지출은 먼저 승인을 받아야 합니다. 삭제나 정책 변경은 제안만 합니다. 모든 동작에 단계 하나를 쓰지 말고, 동작 종류별로 단계를 정하세요.

## Step 5 · Actions that need a person

[calm] 대부분의 동작은 사람 없이 진행해도 안전합니다.
[600ms]
[serious] 하지만 되돌릴 수 없는 동작도 있고, 컴플라이언스 규칙을 어길 수 있는 동작도 있습니다. 그런 동작은 사람이 결정합니다.
[600ms]
[reassuring] 이 목록을 짧게 유지해야 나머지가 빠르게 돌아갑니다.

## Step 6 · Require authorization

[curious] 이제 중요한 지점에 사람을 배치하세요. 에이전트의 변경이 프로덕션까지 가는 경로를 따라가 보세요.
[600ms]
[confident] 규칙 집합이나 브랜치 보호로 풀 리퀘스트와 승인을 필수로 할 수 있습니다. 코드 소유자는 자기 파일의 변경을 승인해야 하고, 환경 승인은 검토자가 승인할 때까지 배포 작업을 대기시킵니다.
[600ms]
[reassuring] 모두 실제 GitHub 제어 기능입니다.

## Step 7 · Block what must not happen

[serious] 에이전트가 하더라도 절대 일어나면 안 되는 변경이 있습니다. 규칙 집합이 이를 막아 줍니다.
[600ms]
[confident] 풀 리퀘스트를 필수로 하고, 강제 푸시를 금지하고, 병합 전에 검사 통과를 요구할 수 있습니다. 필수 정책 검사는 우리 정책에 맞게 직접 작성하는 상태 검사입니다.
[600ms]
[reassuring] 에이전트에게도 사람과 똑같은 규칙 집합이 적용됩니다.

## Step 8 · Least privilege for agents

[calm] 에이전트에게는 작업에 필요한 접근 권한만, 가장 좁은 범위로 주세요. 여기 이슈에 라벨을 붙이는 분류 에이전트가 있습니다.
[600ms]
[confident] 토큰 권한은 작업에 필요한 최소한으로 설정하고, 에이전트가 쓸 도구만 나열하세요.
[600ms]
[reassuring] 저장소 하나에서 시작해서 자기 브랜치에만 푸시하고, 방화벽을 켠 상태로 실행됩니다.

## Step 9 · Responsible AI standards

[curious] 표준은 에이전트가 읽는 곳에 적어 두세요. 저장소 사용자 지정 지침이 그런 곳입니다. 그리고 결과를 확인하세요.
[600ms]
[calm] Microsoft의 여섯 가지 원칙은 공정성, 신뢰성과 안전, 프라이버시와 보안, 포용성, 투명성, 책임성입니다.
[600ms]
[serious] 지침은 에이전트를 안내할 뿐이고, 실제로 확인해 주는 것은 검사와 사람의 검토입니다.

## Step 10 · Too many approvals

[concerned] 승인 요청이 뜰 때마다 시간이 듭니다. 너무 많으면 사람들이 읽지 않게 됩니다.
[600ms]
[confident] 비용이 크거나 되돌리기 어려운 동작에만 승인을 남기고, 안전하고 반복되는 동작에서는 없애세요. VS Code에서는 승인 범위를 한 번, 한 세션, 항상 중에서 고를 수 있습니다.
[600ms]
[serious] 프롬프트를 줄이는 것과 모든 것을 허용하는 것은 다릅니다.

## Step 11 · Recap: an autonomy matrix

[calm] 팀 하나에 매트릭스 하나입니다. 모든 동작에는 위험, 단계, 가드레일이 있습니다.
[600ms]
[confident] 먼저 분류하고 단계를 정하세요. 그다음 지키세요. 민감한 변경에는 사람을 두고, 규칙 위반은 차단하고, 최소 권한을 적용합니다. 그리고 안전에 보탬이 안 되는 승인은 없애서 속도를 유지하세요.
[600ms]
[proud] 이것으로 G H 600 학습 가이드의 가드레일과 책임성 구현 기술 영역을 마칩니다.
