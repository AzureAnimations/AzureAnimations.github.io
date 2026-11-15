# Narrator Script — GitHub · Codespaces & Dev Containers

**Source animation:** [CodespacesAndDevContainers.html](../../../journeys/GitHub/CodespacesAndDevContainers.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/training/paths/github-foundations/>
- <https://learn.microsoft.com/training/paths/github-foundations-2/>

---

## Step 1 · Day One, the Old Way

[calm] Priya 방금 Contoso 기상 팀에 합류했습니다.
[600ms]
[concerned] 코드를 한 줄 작성하기 전에, 빈 노트북을 팀원들의 컴퓨터와 똑같은 환경으로 만들어야 합니다. 하루가 꼬박 걸릴 수 있습니다.
[600ms]
[serious] 그리고 위험도 현실입니다: 모든 수작업 세팅은 다음 세팅에서 조금씩 멀어집니다.

## Step 2 · What Is a Codespace?

[curious] 코드스페이스는 클라우드에 호스팅되는 개발 환경입니다.
[600ms]
[confident] 템플릿, 브랜치, 풀 리퀘스트, 커밋에서 하나를 열고, 브라우저, VS Code, 또는 GitHub CLI에 연결하세요.
[600ms]
[calm] 내부적으로는 호스트를 GitHub 가상 머신 위의 Docker 컨테이너입니다. 항상 Linux돌아가며, 본인 컴퓨터가 실행하는 대로 작동합니다.

## Step 3 · Open One With a Click

[calm] 저장소 페이지에서 코드를 선택한 후 Codespaces 탭을 선택한 뒤, 브랜치에 코드스페이스를 생성하세요.
[600ms]
[curious] 브랜치, 개발 컨테이너, 머신 유형을 선택하고 싶다면 '옵션과 함께 새롭다'를 선택하세요.
[600ms]
[reassuring] 대화 상자 내 메모가 누가 비용을 지불하는지 알려줍니다. 개인 계정은 월별 무료 할당량을 받으며, 조직은 회원 비용을 선택할 수 있습니다.

## Step 4 · What Happens When You Press Create

[curious] 생성 버튼을 누르면 GitHub 네 번의 움직임으로 환경을 조립합니다.
[600ms]
[confident] 가상 머신을 시작하고, 컨테이너를 구축하고, 연결한 뒤 설정을 마무리합니다. 세 번째 이사 후에 연결됩니다.
[600ms]
[reassuring] 몇 분이 걸릴 수 있지만, 저장소 관리자가 프리빌드를 켜서 대기 시간을 단축할 수 있습니다.

## Step 5 · Same Environment for Everyone

[calm] 개발 컨테이너는 개발을 위해 설정된 Docker 컨테이너입니다.
[600ms]
[confident] 그 설명을 저장소에 커밋하면, Priya, Sam, Ana의 모든 코드스페이스가 같은 레시피에서 만들어집니다.
[600ms]
[reassuring] 그 레시피는 devcontainer dot json이라는 파일입니다. 파일이 없으면 코드스페이스는 여러 공통 언어와 도구가 포함된 기본 이미지에서 시작합니다.

## Step 6 · Inside devcontainer.json

[curious] 작은 파일 하나가 팀 전체에 대해 '무엇을 설치해야 하는가'에 대한 답을 줍니다.
[600ms]
[confident] 각 속성은 설정의 한 부분을 처리합니다: 이미지, 기능, 확장, 포트, 명령어.
[600ms]
[reflective] 모두가 필요로 하는 범위에 맞추세요. 테마나 별칭 같은 개인 취향은 닷파일에 있어야 합니다. 변경 사항을 적용하려면 커밋하고 컨테이너를 다시 구축하세요.

## Step 7 · An Open Spec: One File, Many Tools

[curious] 이 파일은 Open 표준인 Development Containers specification(containers dot io)을 따릅니다.
[600ms]
[impressed] 즉, 같은 파일이 자신의 컴퓨터에서도 환경을 설정할 수 있다는 뜻입니다.
[600ms]
[calm] VS Code에서는 Dev Containers 확장 프로그램이 그 컨테이너로 만든 폴더 안의 폴더를 엽니다. Codespaces 클라우드에서도 같은 작업을 합니다.

## Step 8 · Stop, Resume, Delete — and the Meter

[calm] 코드스페이스는 유휴 상태일 때 멈추고, 멈춘 상태에서는 저장된 변경 사항을 유지하며, 삭제되면 사라집니다.
[600ms]
[confident] 컴퓨트는 실행 중에만 청구되고, 저장소는 실행 중에만 청구됩니다. 기본적으로 30분 유휴 후 종료됩니다.
[600ms]
[serious] 중단된 코드스페이스는 30일 후에 삭제되고, 한 세션은 12시간 후에 종료됩니다. 기본값을 변경할 수 있습니다.

## Step 9 · github.dev: Press the Period Key

[curious] 여기 지름길이 있습니다. 어떤 저장소나 풀 리퀘스트에서든 마침표키를 누르세요.
[600ms]
[impressed] VS Code for the Web은 github dot dev에서 브라우저에서 즉시 실행되며, 만들 것도 없습니다.
[600ms]
[serious] 파일을 탐색, 편집, 커밋은 할 수 있지만, 터미널이 없고 코드를 실행하거나 디버깅할 방법이 없습니다. 자주 커밋하세요. 그때까지 편집은 브라우저에 남아 있으니까요.

## Step 10 · Which Editor Should I Open?

[curious] 그렇다면 어떤 편집자를 열어야 할까요? 눈앞의 작업부터 시작하세요.
[600ms]
[confident] 빠른 편집은 github dot 개발에서 할 일입니다. 실행해야 하나요, 디버깅이 필요하신가요? 컴퓨트가 필요하니 코드스페이스를 열거나 자신의 컴퓨터를 사용하세요.
[600ms]
[reassuring] 그리고 모두에게 같은 세팅을 원한다면 개발 컨테이너에 설명하세요.

## Step 11 · All in One: Open It, Start Coding

[calm] 다시 Priya의 첫날로 돌아가 보겠습니다. 코드스페이스를 열자 환경이 이미 준비되어 있습니다.
[600ms]
[confident] 이제 코드스페이스와 개발 컨테이너를 설명하고, 언제 github dot dev가 충분한지 말할 수 있습니다.
[600ms]
[proud] 이것이 이 주제의 G H 900 기술 세트입니다. GitHub 기초 학습 경로가 다음 단계입니다.
