# Narrator Script — GitHub · Build and Publish a Custom Action

**Source animation:** [BuildCustomActions.html](../../../journeys/GitHub/BuildCustomActions.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/en-us/azure/developer/github/github-actions>

---

## Step 1 · Why package an action

[calm] Contoso는 같은 검사 스크립트를 저장소 세 곳에 붙여 넣었습니다. 이제 수정할 때마다 세 번씩 붙여 넣어야 합니다.
[600ms]
[concerned] 복사한 스크립트는 시간이 지나면서 서로 달라지고, 어느 버전이 맞는지 아무도 확신하지 못합니다.
[600ms]
[confident] 액션으로 한 번 패키징해 두면, 각 워크플로우에서 uses 한 줄로 호출하면 됩니다.

## Step 2 · Three types of action

[curious] 만들 수 있는 액션은 세 종류입니다. JavaScript 액션, Docker 컨테이너 액션, 컴포지트 액션입니다.
[600ms]
[confident] 실행 방식이 서로 다릅니다. JavaScript는 러너에서 바로 실행되고, Docker는 컨테이너에서 실행되며, 컴포지트는 단계와 다른 액션을 조합합니다.
[600ms]
[serious] Docker 컨테이너 액션은 Linux 러너에서만 실행되고, 셀프 호스팅 Linux 러너에는 Docker가 설치되어 있어야 합니다.

## Step 3 · The action.yml file

[calm] 모든 액션에는 메타데이터 파일이 하나 필요하고, 이름은 action dot yml 또는 action dot yaml입니다.
[600ms]
[confident] 필수 항목은 세 가지입니다. 이름, 설명, 그리고 액션을 실행하는 방법입니다. 입력, 출력, 작성자, 브랜딩은 선택 사항입니다.
[600ms]
[serious] 주의하세요. 입력을 필수로 표시한다고 해서 실행이 저절로 중단되지는 않으므로, 코드에서 직접 확인해야 합니다.

## Step 4 · A JavaScript action

[calm] Actions 툴킷을 사용해 Node로 코드를 작성한 다음, 의존성과 함께 dist 폴더로 번들하세요.
[600ms]
[confident] 러너는 액션을 내려받아서 그 파일 하나를 완성된 패키지로 실행합니다.
[600ms]
[serious] 그러니 의존성도 함께 들어 있어야 합니다. 번들한 파일은 커밋하고, node modules는 커밋하지 마세요.

## Step 5 · A Docker container action

[calm] Dockerfile은 코드와 실행 환경, 즉 운영 체제, 도구, 버전을 한데 묶어 패키징합니다.
[600ms]
[curious] 러너가 이미지를 빌드하거나 가져온 다음, 지정한 entrypoint와 인수로 컨테이너를 시작합니다.
[600ms]
[serious] Linux 러너에서만 실행되고 JavaScript보다 느립니다. USER 명령은 쓰지 말고, entrypoint 스크립트는 실행 가능하게 만드세요.

## Step 6 · A composite action

[calm] 컴포지트 액션은 셸 명령과 다른 액션을 포함해 여러 단계를 재사용 가능한 단계 하나로 묶어 줍니다.
[600ms]
[serious] 모든 run 단계에는 사용할 셸을 반드시 지정해야 합니다.
[600ms]
[intrigued] 그리고 컴포지트 액션 안에서는 환경 변수가 아니라 inputs 컨텍스트로 입력을 읽으세요.

## Step 7 · Workflow commands in an action

[curious] 액션은 워크플로우 명령으로 러너와 통신합니다. 출력을 쓰고, 값을 마스킹하고, 주석을 추가할 수 있습니다.
[600ms]
[confident] 툴킷이 각 명령을 알아서 감싸 줍니다. 출력은 러너가 알려 주는 파일에 기록되고, 주석은 notice, warning, error로 표시됩니다.
[600ms]
[serious] 값을 출력하기 전에 마스크를 등록하세요. 출력한 다음에 등록해서는 안 됩니다.

## Step 8 · Pick a type

[calm] 속도, 플랫폼, 의존성 중에서 가장 중요한 것을 기준으로 고르세요.
[600ms]
[confident] JavaScript가 Docker보다 빠르고, 순수 JavaScript 액션은 GitHub 호스팅 러너에서 모두 동작합니다.
[600ms]
[curious] Docker는 Linux 전용이지만, 필요한 의존성을 직접 함께 가져갑니다.

## Step 9 · Troubleshoot an action that fails

[calm] 액션이 실패하면 먼저 로그를 읽으세요. 실패한 단계부터 보면 됩니다.
[600ms]
[confident] 그다음 디버그 로깅을 켜고 다시 실행해서 더 자세한 내용을 확인하세요.
[600ms]
[intrigued] 마지막으로 보이는 내용을 흔한 원인과 맞춰 보세요. 권한, 셸, 의존성, 러너 운영 체제가 대표적입니다. 여기 나오는 로그 텍스트는 샘플일 뿐입니다.

## Step 10 · Distribute your action

[curious] 이제 누가 사용할 수 있게 할지 고르세요. 퍼블릭 저장소는 누구나 쓸 수 있어서 가장 범위가 넓습니다.
[600ms]
[confident] 프라이빗 또는 내부 저장소는 조직이나 엔터프라이즈 안에서만 쓸 수 있고, Marketplace에 올리면 검색으로 찾을 수 있게 됩니다.
[600ms]
[concerned] 한 가지 주의할 점이 있습니다. 공유된 프라이빗 액션을 쓰는 저장소의 외부 협업자는 그 액션의 실행 로그를 읽을 수 있습니다.

## Step 11 · Publish to the Marketplace

[calm] 게시하려면 요건을 갖춰야 합니다. 퍼블릭 저장소, 루트에 있는 액션 파일, 고유한 이름이 필요합니다.
[600ms]
[confident] 액션 파일에 브랜딩과 카테고리를 추가한 다음, 릴리스 초안을 만들고 GitHub Marketplace에 이 액션 게시를 선택하세요.
[600ms]
[impressed] 게시하려면 2단계 인증이 필요하고, 요건을 충족한 액션은 검토 없이 바로 게시됩니다.

## Step 12 · Release strategy

[calm] 릴리스마다 시맨틱 버전으로 태그를 붙이고, v one 같은 주 버전 태그도 계속 옮겨 가며 유지하세요.
[600ms]
[confident] 사용자는 v one을 선택해서 수정 사항을 자동으로 받거나, 안정성이 필요하면 정확한 태그나 커밋 SHA를 선택합니다.
[600ms]
[proud] v2 같은 새 주 버전 태그는 기존 워크플로우를 깨뜨리는 변경에 쓰고, 불변 릴리스는 태그를 영구히 고정합니다.
