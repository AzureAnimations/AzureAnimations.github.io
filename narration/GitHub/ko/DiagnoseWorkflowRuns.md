# Narrator Script — GitHub · Troubleshoot Workflow Runs: Logs, Re-runs and Artifacts

**Source animation:** [DiagnoseWorkflowRuns.html](../../../journeys/GitHub/DiagnoseWorkflowRuns.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/en-us/azure/developer/github/github-actions>

---

## Step 1 · A Red Cross on the Pull Request

[calm] Contoso의 Maya가 풀 리퀘스트를 열었는데, 검사 하나에 빨간 X 표시가 떴습니다. 동료 Ravi가 그 결과를 기다리고 있습니다.
[600ms]
[curious] 워크플로우 실행의 작업 하나가 곧 검사 하나입니다. 그래서 빨간 X를 따라가면 작업, 단계, 그리고 로그까지 차례로 나옵니다.
[600ms]
[confident] 목표는 간단합니다. 처음 실패한 단계를 찾아서, 거기서부터 읽으세요.

## Step 2 · The Actions Tab: Workflows, Runs and History

[calm] Actions 탭을 열고 왼쪽 사이드바에서 워크플로우를 고르세요. 실행 목록이 한 줄에 실행 하나씩 나타납니다.
[600ms]
[curious] 실행은 모두 이 목록에 남습니다. 그래서 워크플로우가 언제부터 실패하기 시작했는지 기록에서 바로 알 수 있습니다.
[600ms]
[reassuring] 확인만 한다면 저장소 읽기 권한으로 충분합니다. 명령줄에서도 같은 실행 목록을 볼 수 있습니다.

## Step 3 · Read a Run: Jobs, Steps, First Failure

[confident] 실행을 클릭하면 요약에 작업 목록이 나옵니다. 실패한 작업을 열면 실패한 단계가 자동으로 펼쳐집니다.
[600ms]
[serious] 맨 처음 나오는 빨간 단계부터 보세요. 뒤에 나오는 실패는 대부분 그 단계에서 이어진 결과입니다.
[600ms]
[curious] GitHub는 모든 작업에 설정 단계와 완료 단계를 자동으로 추가합니다. 로그 검색은 펼쳐 둔 단계 안에서만 동작하고, 로그 줄마다 링크를 복사할 수 있습니다.

## Step 4 · What Triggered This Run?

[calm] 실행 헤더를 보면 왜 시작됐는지 알 수 있습니다. 어떤 이벤트인지, 누가 실행했는지, 어느 커밋인지가 나옵니다.
[600ms]
[confident] 이 값들은 직접 만드는 워크플로우에서 쓰는 이벤트 이름, 액터, 커밋 값과 같습니다.
[600ms]
[intrigued] 재실행해도 액터는 처음 실행을 시작한 사람 그대로입니다. 재실행한 사람은 별도의 값에 따로 기록됩니다.

## Step 5 · Matrix Runs: Names, Axes and Failures

[curious] 매트릭스는 값의 조합마다 작업을 하나씩 만듭니다. 작업 이름에 그 값이 들어 있습니다.
[600ms]
[confident] 그래서 빨간 작업은 이름만 봐도 어떤 축인지 알 수 있고, 초록 작업과 축별로 비교할 수 있습니다.
[600ms]
[serious] 회색 작업을 눈여겨보세요. fail-fast는 기본으로 켜져 있어서, 하나가 실패하면 나머지가 취소됩니다. 그러니 회색 작업은 원인이 아닙니다.

## Step 6 · Re-run Only What Failed

[calm] 모든 작업을 다시 실행할 수도 있고, 실패한 작업만 실행할 수도 있습니다. 매트릭스 셀 하나처럼 작업 하나만 골라 실행하는 것도 가능합니다.
[600ms]
[confident] 재실행은 같은 커밋으로 진행되고, 다시 실행하지 않은 작업은 결과가 그대로 유지됩니다. 재실행한 작업에 의존하는 작업은 함께 다시 실행됩니다.
[600ms]
[serious] 재실행은 처음 실행을 시작한 사람의 권한으로 진행됩니다. 그리고 워크플로우가 비활성화되어 있으면 재실행할 수 없습니다.

## Step 7 · Debug Logging: Read the Extra Output

[curious] 로그만으로는 부족할 때가 있습니다. 그럴 때 디버그 로깅을 켜면 됩니다.
[600ms]
[excited] 여기서 스위치를 직접 켜 보세요. 같은 단계에서 자세한 내용이 더 출력되는 걸 볼 수 있습니다.
[600ms]
[reassuring] 워크플로우를 실행할 수 있는 사람이라면 재실행할 때 '디버그 로깅 활성화'를 체크할 수 있습니다. 비밀이나 변수로 항상 켜 둘 수도 있는데, 둘 다 있으면 비밀이 우선합니다.

## Step 8 · Common Causes of a Failed Run

[calm] 실패 원인은 네 가지가 계속 반복됩니다. 내 실행에서 본 증상을 이 카드 중 하나에 맞춰 보세요.
[600ms]
[curious] 토큰에 권한이 없거나, 비밀이 설정되지 않았거나 전달되지 않았을 수 있습니다. 라벨에 맞는 러너가 없거나, 토큰이 만료됐을 수도 있습니다.
[600ms]
[serious] 어디까지나 예시입니다. 원인은 항상 내 로그에서 직접 확인하세요.

## Step 9 · YAML Anchors: What Actually Runs

[calm] 앵커는 블록에 이름을 붙이고, 별칭은 파일의 다른 곳에서 그 블록을 다시 가져다 씁니다.
[600ms]
[confident] GitHub는 펼쳐진 결과를 실행합니다. 그러니 실패한 작업은 별칭이 전부 풀려 있다고 생각하고 읽으세요.
[600ms]
[reassuring] 펼친 형태는 앵커 없이 파일을 쓴 것과 똑같이 동작합니다. 머릿속으로 펼쳐 보면 실패 원인이 이해됩니다.

## Step 10 · Find Artifacts and Logs in the UI

[calm] 아티팩트는 실행 요약 맨 아래에 있습니다. 로그 아카이브는 작업 로그의 메뉴에 있습니다.
[600ms]
[confident] 둘 다 읽기 권한만 있으면 내려받을 수 있습니다.
[600ms]
[serious] 둘 다 보존 기간이 있고, 이 기간은 바꿀 수 있습니다. 기간이 지나면 만료되니, 필요한 건 제때 받아 두세요.

## Step 11 · The Same Through the API and gh CLI

[curious] 방금 브라우저에서 한 일은 모두 GitHub 명령줄 도구의 명령과 REST 엔드포인트로도 할 수 있습니다.
[600ms]
[confident] 터미널에서 실행 목록을 보고, 내용을 확인하고, 아티팩트를 내려받고, 다시 실행할 수 있습니다.
[600ms]
[impressed] 실행도 로그도 아티팩트도 똑같으니, 이 과정 전체를 스크립트로 만들 수 있습니다.

## Step 12 · Disable vs Delete, and the History

[calm] 워크플로우를 비활성화하면 일시 중지될 뿐입니다. 파일과 기록은 그대로 남아 있습니다.
[600ms]
[serious] 실행을 삭제하면 그 실행만 영구적으로 사라지고, 쓰기 권한이 필요합니다. 비활성화해도 이미 진행 중인 실행은 취소되지 않습니다.
[600ms]
[proud] 이런 기술이 모여 G H 200에서 말하는 워크플로우 활용과 문제 해결이 됩니다.
