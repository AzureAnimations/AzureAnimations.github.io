# Narrator Script — GitHub · Workflow Syntax: Triggers, Jobs, Matrices and Contexts

**Source animation:** [WorkflowTriggersAndJobs.html](../../../journeys/GitHub/WorkflowTriggersAndJobs.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://docs.github.com/en/actions/writing-workflows/workflow-syntax-for-github-actions>
- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-200>

---

## Step 1 · One workflow file

[calm] 워크플로우는 YAML 파일 하나이고, dot github 폴더 안의 workflows 폴더에 둡니다. 파일 이름은 dot yml이나 dot yaml로 끝나야 합니다.
[600ms]
[confident] 핵심 키 네 개가 전체 내용을 말해 줍니다. name, on, jobs, steps입니다.
[600ms]
[curious] on 키가 실행을 시작하고, jobs가 실제 작업을 합니다. name을 생략하면 GitHub가 Actions 탭에 파일 경로를 대신 보여 줍니다.

## Step 2 · Triggers

[curious] on 키는 무엇이 실행을 시작하는지 정합니다. 코드 이벤트, 저장소 이벤트, 일정, 또는 GitHub 외부의 호출일 수 있습니다.
[600ms]
[confident] 브랜치, 태그, 경로 필터로 푸시와 풀 리퀘스트 트리거의 범위를 좁힐 수 있습니다. 일정은 cron 구문을 쓰고 기본 브랜치에서 실행됩니다.
[600ms]
[calm] 일치하는 이벤트가 하나만 있어도 실행이 시작됩니다. 저장소 디스패치 웹훅에는 이벤트 유형이 들어 있습니다.

## Step 3 · Run it by hand

[confident] workflow dispatch 트리거를 쓰면 Run workflow 버튼이 생깁니다.
[600ms]
[curious] 입력마다 유형이 있고, 선택 사항인 기본값과 필수 여부 플래그가 있습니다. 유형은 boolean, choice, number, environment, string입니다. 작업은 inputs 컨텍스트에서 값을 읽습니다.
[600ms]
[reflective] 이 버튼은 워크플로우 파일이 기본 브랜치에 있을 때만 나타납니다.

## Step 4 · Jobs and needs

[calm] 작업은 기본적으로 병렬로 실행됩니다.
[600ms]
[confident] needs를 추가하면, 작업은 의존하는 작업이 성공할 때까지 기다립니다.
[600ms]
[serious] 작업이 실패하거나 건너뛰어지면, 그 작업을 needs로 가진 작업도 모두 건너뛰어집니다. 단, always 같은 조건을 쓰면 예외입니다.

## Step 5 · Conditional logic

[calm] if 키는 단계나 작업의 실행 여부를 정합니다. 상태 함수를 쓰지 않으면 GitHub가 success를 대신 붙여 줍니다.
[600ms]
[confident] failure 함수는 실패한 뒤에 단계를 실행하고, always 함수는 앞에서 무슨 일이 있었든 실행합니다.
[600ms]
[serious] 소스 가져오기처럼 심하게 실패할 수 있는 작업에는 always를 피하세요. 문서에서는 앞 단계의 통과 여부와 상관없이 단계를 실행하려면 not cancelled를 권장합니다.

## Step 6 · Variables and commands

[confident] env 키는 워크플로우 전체, 작업 하나, 또는 단계 하나에 변수를 설정합니다. 가장 구체적인 설정이 우선합니다.
[600ms]
[curious] 워크플로우 명령을 쓰면 단계가 로그를 통해 러너와 소통할 수 있습니다. notice, warning, error는 주석을 만듭니다.
[600ms]
[calm] GitHub 환경 파일에 이름과 값을 쓰면, 이후 단계에서 쓸 수 있는 변수가 됩니다. 값을 쓴 그 단계에서는 쓸 수 없습니다.

## Step 7 · Service containers

[curious] services 블록은 데이터베이스 같은 컨테이너를 작업 바로 옆에서 시작합니다.
[600ms]
[confident] 포트를 매핑하고 localhost로 접속하세요. 상태 확인 옵션을 추가하면, 서비스가 준비될 때까지 작업이 기다립니다.
[600ms]
[reassuring] GitHub는 작업마다 새 컨테이너를 만들고, 작업이 끝나면 삭제합니다. 서비스 컨테이너에는 Linux 러너가 필요합니다.

## Step 8 · A matrix

[curious] 매트릭스는 작업 정의 하나를 여러 개로 늘려 줍니다.
[600ms]
[confident] 여기서는 운영 체제가 둘이고 Node 버전이 셋입니다. 그러면 조합마다 하나씩, 작업이 여섯 개 생깁니다.
[600ms]
[impressed] 각 작업은 matrix 컨텍스트에서 자기 값을 읽습니다.

## Step 9 · Shape the matrix

[calm] exclude는 매트릭스에서 조합을 빼고, include는 조합을 추가합니다.
[600ms]
[confident] fail-fast와 max-parallel은 작업이 실행되는 방식을 제어합니다. fail-fast의 기본값은 true입니다.
[600ms]
[reflective] 그대로 유지하고 싶다면 러너 버전을 고정하세요. latest 라벨은 가장 최신의 안정 이미지를 뜻하기 때문에, 그 뒤의 내용이 시간이 지나면서 바뀔 수 있습니다.

## Step 10 · Contexts

[curious] 컨텍스트는 실행에 대한 데이터를 담은 객체입니다.
[600ms]
[confident] 표현식에서 읽으면 브랜치, 러너, 변수, 앞선 작업과 단계의 결과를 얻을 수 있습니다.
[600ms]
[serious] 컨텍스트를 쓸 수 있는지는 키에 따라 다릅니다. 작업 수준의 if는 github, needs, vars, inputs는 읽을 수 있지만, secrets는 읽을 수 없습니다.

## Step 11 · Expressions

[calm] GitHub는 달러 기호와 이중 중괄호를 먼저 평가해서 그 텍스트를 값으로 바꿔 넣습니다.
[600ms]
[confident] 이 일은 러너의 셸이 그 줄을 보기 전에 일어납니다. 그냥 달러 기호와 이름만 쓴 것은 나중에 셸이 확장합니다.
[600ms]
[serious] 비밀은 로그에 남기지 마세요. 절대 출력하지 말고, 생성된 값은 마스킹하세요.

## Step 12 · Anchors and editor help

[calm] 앵커는 YAML 블록에 이름을 붙이고, 별칭은 다른 곳에서 그것을 반복합니다. 한 워크플로우 파일 안에서 반복을 줄여 줍니다.
[600ms]
[curious] VS Code용 GitHub Actions 확장은 입력하는 동안 강조 표시, 유효성 검사, 자동 완성을 제공합니다.
[600ms]
[determined] 저장소를 로컬에 복제해 두면 가장 잘 동작합니다. 이제 직접 워크플로우를 만들어 보세요.
