# Narrator Script — GitHub · Agent Memory and State: Remember, Resume and Avoid Drift

**Source animation:** [AgentMemoryAndState.html](../../../journeys/GitHub/AgentMemoryAndState.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/training/modules/agent-tooling-mcp-execution-environments/>

---

## Step 1 · The agent that forgot

[calm] 첫 번째 세션에서 에이전트는 코드를 읽고, 상한을 정하고, 테스트를 작성합니다.
[600ms]
[concerned] 두 번째 세션은 빈 컨텍스트에서 시작하고, 배운 것을 둘 곳이 없습니다. 그래서 같은 작업을 되풀이합니다.
[600ms]
[serious] 그 대가는 헛수고, 그리고 조용히 바뀔 수 있는 결정입니다.

## Step 2 · Short-term, long-term, external

[curious] 사실이 얼마나 오래 유지돼야 하는지, 누가 필요로 하는지에 따라 보관 위치를 고르세요.
[600ms]
[confident] 단기는 이 세션의 컨텍스트입니다. 장기는 Copilot Memory로, 이후 세션을 위해 사실과 선호도를 남겨 둡니다. 외부는 저장소에 있는 파일, 이슈, 풀 리퀘스트를 말합니다.
[600ms]
[reflective] 어느 한 곳이 최선은 아닙니다. 사람이 읽고 검토해야 하는 결정은 외부 파일에 두세요.

## Step 3 · Copilot Memory

[calm] Copilot Memory는 저장소에 관한 사실을 출처와 함께 저장하고, 사용자의 선호도도 저장합니다.
[600ms]
[confident] 저장소 사실은 협업자와 공유되고 그 저장소에서만 쓰입니다. 선호도는 나만의 것이고, 저장소를 옮겨 다녀도 따라옵니다.
[600ms]
[curious] Copilot은 작업하면서 스스로 메모리를 만듭니다. 설정에서 메모리를 삭제할 수는 있지만 편집할 수는 없고, 포크는 메모리를 물려받지 않습니다.

## Step 4 · Keep only what the task needs

[serious] 컨텍스트가 복잡하면 답이 나빠집니다. 컨텍스트가 길다고 더 좋은 것은 아닙니다.
[600ms]
[confident] 작업이 의존하는 파일, 기준, 결정만 남기세요. 오래된 대화, 관련 없는 질문, 방대한 출력은 정리하세요. 명령으로 확인하고, 지우고, 요약할 수 있습니다.
[600ms]
[reassuring] Copilot CLI는 창이 차면 기록을 자동으로 요약해 주고, 메모리에는 계속 사실인 것만 담아야 합니다.

## Step 5 · Expiry and reset

[calm] 메모리가 영원히 사실인 것은 아닙니다.
[600ms]
[confident] 일정 기간 보강되지 않으면 만료됩니다. Copilot이 여전히 유효하다고 확인하면 기간이 다시 시작됩니다. 메모리를 불러오는 것만으로는 다시 시작되지 않습니다.
[600ms]
[encouraging] 소유자가 만료 기간을 설정할 수 있고, 조직과 엔터프라이즈 값이 다르면 낮은 값이 우선합니다. 메모리는 설정에서 언제든 삭제할 수 있습니다.

## Step 6 · Durable artifacts

[calm] 결정은 대화보다 오래 남는 곳에 적어 두세요.
[600ms]
[confident] 계획 파일에는 단계와 완료된 단계가 나열됩니다. 이슈에는 작업과 인수 조건이 담기고, 풀 리퀘스트에는 무엇이 왜 바뀌었는지와 검사 결과가 기록됩니다.
[600ms]
[reflective] Copilot CLI는 계획을 세션 폴더에 저장하므로, 팀이 공유해야 할 내용은 저장소에 두세요.

## Step 7 · Resume the work

[curious] 새 세션은 계획, 이슈, 풀 리퀘스트 같은 산출물을 읽습니다.
[600ms]
[confident] 이미 끝났거나 합의된 것은 건너뛰고, 체크되지 않은 첫 항목을 찾아 이어서 진행합니다.
[600ms]
[calm] Copilot CLI에서는 이전 세션을 이어서 하거나, 새로 시작한 뒤 에이전트에게 산출물을 알려 줄 수 있습니다. 어느 쪽이든 먼저 계획을 확인하세요.

## Step 8 · Drift

[curious] 오래 실행하다 보면, 각 단계는 따로 보면 다 그럴듯해 보입니다.
[600ms]
[concerned] 그런데 합쳐 놓고 보면 계획에서 벗어나 있습니다. 작은 선택들을 아무도 계획과 비교하지 않아서, 계획에 없던 곳에서 실행이 끝납니다.
[600ms]
[serious] 신호는 작업물과 원래 계획의 차이입니다. 드리프트는 설정이 아니라 패턴입니다.

## Step 9 · Detect and correct drift

[calm] 작업을 계획과 비교하는 일은 마지막에만 하지 말고, 체크포인트마다 하세요.
[600ms]
[confident] 계획에 없는 변경은 모두 표시하세요. 그런 다음 방향을 잡아 주세요. 에이전트에게 되돌리고 계속하라고 알려 주면 됩니다.
[600ms]
[encouraging] Copilot이 작업하는 중에도 후속 프롬프트를 보낼 수 있고, 풀 리퀘스트를 만들기 전에 변경 내용을 검토할 수 있습니다.

## Step 10 · Share state across tools

[curious] 한 도구에서 알게 된 사실이 다른 도구에도 도움이 될 수 있습니다.
[600ms]
[confident] 메모리는 도구 하나가 아니라 저장소에 속합니다. 지침, 이슈, 계획, 풀 리퀘스트는 모든 도구에서 보이므로, 도구마다 같은 상황을 보게 됩니다.
[600ms]
[calm] 클라우드에서 시작한 세션을 다른 클라이언트에서 이어서 할 수도 있습니다.

## Step 11 · Conflicting and stale context

[concerned] 두 출처가 서로 맞지 않으면, 대개 한쪽이 오래된 정보입니다.
[600ms]
[confident] 현재 코드와 대조해 보고, 오래된 출처를 고치세요. Copilot은 메모리의 인용 출처를 현재 브랜치와 대조하지만, 이것은 판단일 뿐 보장은 아닙니다.
[600ms]
[serious] Copilot CLI는 지침 파일을 일정한 우선순위 없이 합치므로, 새 줄이 이기기를 바라지 말고 오래된 줄을 지우세요.

## Step 12 · Recap

[calm] 에이전트 작업 체크리스트입니다. 먼저 보관 위치를 고르고, 범위를 정하고, 만료 기간을 설정하세요.
[600ms]
[confident] 그다음 유지하세요. 결정을 적어 두고, 그 기록에서 이어서 작업하고, 드리프트가 없는지 확인하세요.
[600ms]
[proud] 마지막으로 상태를 공유하고, 오래되었거나 충돌하는 컨텍스트를 없애서 정확하게 유지하세요. 이것으로 메모리, 상태, 실행 관리에 관한 G H 600 목표를 마칩니다.
