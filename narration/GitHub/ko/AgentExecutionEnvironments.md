# Narrator Script — GitHub · Where the Agent Runs: Environments, Firewalls and Safe Failure

**Source animation:** [AgentExecutionEnvironments.html](../../../journeys/GitHub/AgentExecutionEnvironments.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/training/modules/agent-tooling-mcp-execution-environments/>

---

## Step 1 · Three places an agent can run

[calm] Ravi가 Maya의 이슈를 에이전트에게 넘깁니다. 먼저 어디서 실행할지 정해야 합니다. 그에 따라 접근할 수 있는 범위와, 머신을 누가 관리하는지가 달라지기 때문입니다.
[600ms]
[confident] 실행할 수 있는 곳은 세 군데입니다. 내 노트북, Actions 러너, 클라우드 샌드박스입니다. 샌드박스는 GitHub가 세션마다 만들고 관리하는 격리된 Linux 환경입니다.
[600ms]
[serious] 세션을 시작할 때 실행 위치를 고르며, 한번 정하면 나중에 바꿀 수 없습니다.

## Step 2 · A short-lived environment, set up first

[calm] Actions에서는 클라우드 에이전트가 새로 만든 임시 환경에서 작업합니다.
[600ms]
[confident] 먼저 설정 파일이 환경을 준비해서, 에이전트가 빌드하고 테스트하는 데 필요한 도구와 의존성을 설치합니다. 작업이 하나뿐인 일반 워크플로우이고, 기본 브랜치에서만 적용됩니다.
[600ms]
[reassuring] 단계 하나가 실패하면 에이전트는 남은 설정 단계를 건너뛰고, 준비된 것만으로 시작합니다.

## Step 3 · The firewall: allowed hosts only

[curious] 기본적으로 방화벽이 에이전트의 인터넷 접근을 제한합니다.
[600ms]
[confident] Copilot이 GitHub에 쓰는 호스트는 항상 허용되고, 권장 목록에는 패키지 레지스트리와 그 밖의 일반적인 호스트가 들어 있습니다. 소유자와 저장소 관리자가 더 추가할 수 있고, 새 세션부터 반영됩니다. 나머지는 모두 차단되고 풀 리퀘스트에 보고됩니다.
[600ms]
[serious] 방화벽은 에이전트가 실행하는 명령에만 적용되고 MCP 서버나 설정 단계에는 적용되지 않으며, 완전한 보안 솔루션도 아닙니다.

## Step 4 · Different limits per environment

[curious] 개발, 테스트, 프로덕션이 똑같이 동작해서는 안 됩니다. 하나를 골라 비교해 보세요.
[600ms]
[confident] 환경은 고유한 비밀과 보호 규칙을 가진, 이름이 붙은 단계입니다. 필수 검토자를 지정하면 작업이 실행되기 전에 사람이 승인해야 하므로, 배포가 대기할 수 있습니다.
[600ms]
[calm] 에이전트에도 저장소나 조직 단위로 설정하는 고유한 비밀과 변수가 있습니다.

## Step 5 · Start an agent from a workflow

[curious] 워크플로우는 아무도 키보드 앞에 없어도 Actions 러너에서 Copilot CLI를 실행할 수 있습니다.
[600ms]
[confident] 먼저 트리거가 있고, 이어서 작업 설정, CLI 설치, 비밀에 담긴 토큰으로 인증하는 순서로 진행됩니다. 마지막으로 프롬프트 하나를 실행하고, 사용할 수 있는 도구를 나열합니다.
[600ms]
[reflective] 작업에는 필요한 최소한의 권한만 주세요. 대부분의 자동화에는 GitHub가 Agentic Workflows를 권장하는데, 현재 미리 보기 단계입니다.

## Step 6 · Branches and pull requests it may create

[calm] 에이전트가 작업물을 만들 수는 있지만, 무엇을 배포할지는 사람이 결정합니다.
[600ms]
[confident] 에이전트는 자신의 브랜치 하나, 또는 작업을 요청받은 풀 리퀘스트의 브랜치에 푸시하고, 초안 풀 리퀘스트를 엽니다. 사람이 검토한 뒤 준비 완료로 표시하고 병합합니다.
[600ms]
[reassuring] 브랜치 보호 규칙은 그대로 적용되고, 기본적으로 에이전트의 워크플로우는 누군가 승인할 때까지 대기합니다.

## Step 7 · When a step fails

[concerned] 실패는 일어나기 마련이고, 예상된 일입니다.
[600ms]
[confident] 세션 로그에는 명령과 그 출력, 그리고 에이전트의 추론과 사용한 도구가 기록됩니다. 먼저 명령, 출력, 종료 코드를 읽어 보세요.
[600ms]
[calm] 그다음 대응을 고르세요. 재시도, 롤백, 아니면 에스컬레이션입니다.

## Step 8 · Retry, with a limit

[calm] 재시도는 두 번째 기회이지, 끝없이 도는 반복이 아닙니다.
[600ms]
[confident] 시도 횟수를 정해 두고, 시도 사이에 간격을 두고, 한도에 이르면 멈추세요. 두 번 실행해도 문제가 없는 단계만 재시도해야 합니다.
[600ms]
[serious] 시도 횟수를 다 쓰면 멈추고 사람에게 넘기세요. 이것은 기본 제공 설정이 아니라, 스크립트에 직접 작성하는 패턴입니다.

## Step 9 · Roll back

[serious] 병합한 변경이 문제를 일으키면 되돌려야 합니다.
[600ms]
[confident] 리버트를 하면 병합 커밋을 되돌리는 새 풀 리퀘스트가 만들어져서, 수정도 다른 변경과 똑같이 검토와 검사를 거칩니다. 쓰기 권한이 있어야 합니다.
[600ms]
[calm] 충돌이 나면 Git으로 직접 되돌리세요. 에이전트의 풀 리퀘스트가 닫히거나 병합되고 나면 그 브랜치를 삭제하세요.

## Step 10 · Escalate to a person

[calm] 한도에 이르렀거나 다음에 할 일이 분명하지 않으면 사람에게 넘기세요.
[600ms]
[confident] 좋은 인수인계에는 무엇을 요청했는지, 무엇을 시도했는지, 오류 내용, 그리고 무엇이 바뀌었는지가 담겨 있습니다. 세션 로그와 풀 리퀘스트 링크도 함께 겁니다.
[600ms]
[encouraging] 그러면 담당자가 후속 프롬프트로 진행 중인 세션을 이끌거나, 브랜치를 직접 넘겨받을 수 있습니다.

## Step 11 · Trace every action

[curious] 누가 이걸 바꿨고, 왜 바꿨을까요? 세 가지 기록이 답해 줍니다.
[600ms]
[confident] 풀 리퀘스트에는 요청, 검토, 병합의 이력이 남습니다. 커밋은 Copilot이 작성하고 담당자가 공동 작성자로 들어가며, 서명도 됩니다. 커밋에는 세션 로그 링크도 있습니다.
[600ms]
[reassuring] 세션 로그에는 에이전트의 추론과 도구가 나오고, 관리자는 감사 로그 이벤트도 볼 수 있습니다.

## Step 12 · Recap: from error to escalation

[calm] 실행하기 전에는 실행 위치를 정하고, 그다음 설정 단계, 방화벽, 환경별 제한, 워크플로우, 허용할 동작을 정하세요.
[600ms]
[confident] 실패하면 오류를 읽고, 한도 안에서 재시도하고, 롤백하고, 사실을 정리해서 에스컬레이션하세요.
[600ms]
[proud] 항상 풀 리퀘스트, 커밋, 세션 로그로 추적하세요. 여기까지가 G H 600의 환경 관련 기술입니다.
