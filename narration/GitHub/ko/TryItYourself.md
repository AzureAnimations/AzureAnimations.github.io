# Narrator Script — GitHub · Contoso Delivery · Set Up Your Repo · KO

**Source animation:** `journeys/GitHub/TryItYourself.html`

`## Step N` 제목은 의도적으로 영어로 유지합니다(음성 생성기와 자막의 색인).

---

## Step 1 · Start With an Empty Repository

[warm] 지금까지는 모두 Contoso의 저장소였습니다. 이제 여러분의 것으로 만들어 봅시다.
[500ms]
[calm] 필요한 것은 무료 계정 하나와 빈 저장소 하나뿐입니다. github 점 com 슬래시 new 로 가서 이름을 "weather map app"으로 지정하세요. "Add a README file"은 체크하지 않은 채로 둡니다. 스크립트는 비어 있는 곳이 필요합니다.
[500ms]
[reassuring] 전체 이름을 적어 두세요. 여러분의 사용자 이름, 슬래시, weather map app. 가져오기 스크립트가 정확히 그 형식으로 물어봅니다.

## Step 2 · Who Owns the Repository?

[warm] Create를 누르기 전에 맨 위 항목을 보세요. Owner, 소유자입니다.
[500ms]
[calm] 본인 사용자 이름은 항상 있습니다. 그 아래로는 여러분이 속한 조직이 나열됩니다. 조직은 공유 계정이며, 아무도 조직 계정으로 로그인하지 않습니다. 사람들은 각자 본인으로 로그인해 참여하고, 그다음 역할과 팀을 부여받아 열 명분의 접근 권한을 한 번에 줄 수 있게 됩니다.
[500ms]
[bright] 조직은 무료이고, 여기서는 어느 쪽을 골라도 괜찮습니다. 혼자 진행한다면 개인 계정으로 충분합니다. 다만 나중에 드러나는 차이가 하나 있습니다. 조직에서는 새 프로젝트가 모든 이슈를 가져올지 물어보지만, 개인 프로젝트에는 그 버튼이 없습니다.

## Step 3 · Install the GitHub CLI

[confident] 스크립트는 아무것도 클릭하지 않습니다. GitHub의 공식 명령줄 도구인 `gh`를 통해 GitHub와 대화합니다.
[500ms]
[calm] Windows에서는 winget install GitHub 점 cli. Mac에서는 brew install gh. Ubuntu에서는 apt install gh. 아니면 cli 점 github 점 com 에서 설치 프로그램을 받으세요.
[500ms]
[reassuring] 그리고 확인합니다. `gh --version`을 입력해 버전 번호가 돌아오면 준비가 된 것입니다.

## Step 4 · Sign the CLI Into Your Account

[warm] 이제 그 도구에게 여러분을 대신할 권한을 줍니다. `gh auth login`을 입력하세요.
[500ms]
[calm] 질문은 네 가지입니다. GitHub 점 com, HTTPS, Git도 인증하기, 그리고 중요한 것 하나. "Login with a web browser"를 선택하세요.
[500ms]
[thoughtful] 여기가 재미있는 부분입니다. 터미널에 일회용 코드가 표시되고, 브라우저가 열리며, *브라우저 쪽이* 그 코드를 입력하라고 요구합니다. 창은 둘, 코드는 하나, 비밀번호는 어디에도 없습니다.

## Step 5 · Your Repository Is Ready

[warm] 준비는 이것으로 전부입니다. 빈 저장소, 설치된 CLI, 그리고 디스크에 비밀번호를 남기지 않는 로그인 세션.
[500ms]
[bright] 이제부터 이 여정은 시연이 아닙니다. 각 설명은 여러분의 저장소에서 같은 작업을 수행하고, 화면과 비교해 보라고 안내합니다.
[500ms]
[reassuring] Plan the Work부터 시작하세요. 이 저장소를 열두 개의 작업 항목으로 채워 주는 스크립트를 줍니다.
