# Narrator Script — GitHub · Several Agents, One Repository

**Source animation:** [MultiAgentOnGitHub.html](../../../journeys/GitHub/MultiAgentOnGitHub.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-600>

---

## Step 1 · Three Agents, One Repository

[calm] Contoso 날씨 팀이 밀려 있는 작업을 에이전트 세 개에게 넘겼고, Maya는 이 모든 걸 빨리 끝내고 싶어 합니다.
[600ms]
[curious] 에이전트마다 맡은 작업은 따로지만, 코드베이스와 브랜치, 풀 리퀘스트 목록은 모두 함께 씁니다.
[600ms]
[serious] 문제는 여기서 시작됩니다. 작업이 충돌하거나, 중복되거나, 아무도 모르는 사이에 실패할 수 있습니다.

## Step 2 · Choose a Pattern

[calm] 이슈 세 개에 에이전트 세 개입니다. 시작하기 전에, 이슈들이 서로 어떻게 의존하는지에 맞는 패턴을 고르세요.
[600ms]
[confident] 오케스트레이터는 목표를 작업으로 나누고, 서로 독립적인 작업은 병렬로 실행한 다음, 결과를 검토하고 합칩니다. 핸드오프는 작업 하나를 다음 전문가에게 넘기는 방식입니다.
[600ms]
[reflective] 작업이 정말 순차적이라면, 병렬 에이전트로 얻는 이점은 거의 없습니다.

## Step 3 · Isolate Parallel Work

[confident] 에이전트마다 자기 브랜치를 주세요. 그러면 풀 리퀘스트로 합치기 전까지 병렬 작업이 서로를 덮어쓸 수 없습니다.
[600ms]
[calm] GitHub에서는 Copilot 클라우드 에이전트가 작업마다 브랜치 하나에 푸시하고, 풀 리퀘스트 하나를 엽니다. 내 컴퓨터에서는 git 워크트리로 에이전트마다 별도의 폴더를 줄 수 있습니다.
[600ms]
[reassuring] 어느 쪽이든 최종 병합은 사람이 합니다.

## Step 4 · Overlapping Changes

[curious] 여기서는 에이전트 두 개가 같은 파일의 같은 줄을 수정합니다. 풀 리퀘스트는 각각 따로 보면 문제가 없어 보입니다.
[600ms]
[calm] Git은 서로 다른 파일이나 다른 줄은 알아서 병합합니다. 하지만 같은 줄을 서로 다르게 고치면 도움이 필요합니다.
[600ms]
[intrigued] 겹치는 부분은 각 풀 리퀘스트의 변경된 파일 탭에서 볼 수 있습니다.

## Step 5 · Resolve Conflicts

[serious] 충돌이 나면 병합이 막힙니다. Git이 두 수정 중 어느 쪽을 택해야 안전한지 알 수 없기 때문입니다.
[600ms]
[confident] 병합 순서를 정해서, 풀 리퀘스트 하나가 먼저 들어가고 다음 것이 그 위에 맞춰 업데이트되게 하세요. CODEOWNERS로 그 파일의 소유자에게 물어볼 수도 있고, 병합 상자에서 Copilot의 도움을 받을 수도 있습니다.
[600ms]
[reassuring] 결국 최종 내용은 사람이 고릅니다.

## Step 6 · Duplicated and Contradictory Work

[curious] 이제 풀 리퀘스트 목록에서 경고 신호 두 가지를 찾아보세요. 같은 이슈를 닫는 풀 리퀘스트가 두 개 있으면 중복입니다.
[600ms]
[concerned] 서로 어긋나는 두 개는 모순입니다. 코드에는 시속 킬로미터로, 가이드에는 시속 마일로 적혀 있는 경우가 그렇습니다.
[600ms]
[determined] 하나만 남기고 나머지는 닫고, 이유를 적어 두세요. 검색 한정자를 쓰면 목록을 좁힐 수 있습니다.

## Step 7 · Leave an Audit Trail

[calm] 에이전트의 결정과 핸드오프 노트는 해당 풀 리퀘스트에 기록되니, 나중에 누구나 검토할 수 있습니다.
[600ms]
[confident] Copilot 클라우드 에이전트의 커밋은 서명되고, 작업을 시작한 사람이 공동 작성자로 표시되며, 세션 로그 링크가 붙습니다. 이 로그에는 에이전트의 추론 과정과 사용한 도구가 나옵니다.
[600ms]
[serious] 로그가 도움은 되지만, 직접 하는 리뷰를 대신하지는 못합니다.

## Step 8 · Spot a Stalled or Failed Run

[calm] 정상적인 실행은 로그 줄이 계속 이어집니다. 모든 세션을 팀이 정한 임계값과 비교하세요.
[600ms]
[concerned] 문제는 세 가지를 살펴보세요. 실패는 검사가 실패로 끝났다는 뜻입니다. 부분 완료는 커밋 일부를 푸시한 채 일찍 멈췄다는 뜻입니다. 정체는 너무 오랫동안 새 로그 줄이 없다는 뜻입니다.
[600ms]
[reassuring] 에이전트 패널에서 세션을 열면 진행 상황과 로그를 볼 수 있습니다.

## Step 9 · Recover: Roll Back and Hand On

[serious] 실행에 문제가 생기면 먼저 중지하세요. 중지하면 실행은 끝나고, 이미 푸시한 커밋은 그대로 남습니다.
[600ms]
[confident] 그런 다음 그 에이전트의 작업만 롤백하세요. 병합된 풀 리퀘스트를 되돌리면 그 변경을 취소하는 새 풀 리퀘스트가 열리기 때문에, 이력은 그대로 남습니다.
[600ms]
[reassuring] 마지막으로 노트를 남겨 작업을 넘기세요. 병합은 사람이 합니다. Copilot은 자기 풀 리퀘스트를 스스로 승인할 수 없기 때문입니다.

## Step 10 · Add an Agent

[curious] 전문 에이전트가 필요하다면, 프로필 파일을 새로 하나 추가하고 Markdown으로 작성하세요.
[600ms]
[calm] 이미 일하고 있는 에이전트는 자기 파일과 자기 브랜치를 그대로 유지합니다. 새 에이전트에게는 분명한 역할과, 꼭 필요한 도구만 주세요.
[600ms]
[optimistic] 파일을 병합한 다음, 본격적으로 쓰기 전에 작업 하나를 먼저 시험해 보세요.

## Step 11 · Update, Replace or Retire an Agent

[calm] 에이전트를 바꾸려면 풀 리퀘스트로 프로필을 수정하세요. Git이 모든 버전을 보관하고, 이전 풀 리퀘스트와 로그도 그대로 남습니다.
[600ms]
[confident] 작업은 시작할 때 쓴 버전을 계속 사용합니다. 에이전트를 교체할 때는 새 에이전트를 먼저 도입하고, 그다음에 이전 에이전트를 퇴역시키세요.
[600ms]
[reflective] 퇴역은 파일은 삭제하되 기록은 남긴다는 뜻입니다. 세션은 보관 처리할 수 있어서 계속 읽을 수 있습니다.

## Step 12 · Recap: A Multi-Agent Run, Reviewed After the Fact

[calm] Contoso의 실행 과정을 여섯 가지 질문으로 되짚어 보면, 모든 답이 저장소 안에 있습니다.
[600ms]
[confident] 패턴을 정하고 에이전트마다 브랜치 하나를 주세요. 충돌, 중복, 정체를 지켜보세요. 풀 리퀘스트, 커밋, 세션 로그는 보관하세요.
[600ms]
[proud] 이것이 G H 600 스터디 가이드에서 말하는 멀티 에이전트 조율 기술 영역입니다.
