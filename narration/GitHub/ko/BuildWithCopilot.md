# Narrator Script — GitHub · Contoso Delivery · Build It with Copilot · KO

**Source animation:** `journeys/GitHub/BuildWithCopilot.html`

`## Step N` 제목은 의도적으로 영어로 유지합니다(음성 생성기와 자막의 색인).
모델 이름은 일부러 하나도 언급하지 않습니다. 라인업이 몇 달마다 바뀌기 때문입니다.

---

## Step 1 · Not Autocomplete. A Pair Programmer.

[warm] 보드는 채워졌습니다. 이제 누군가 실제로 코드를 써야 합니다. 그리고 여러분은 혼자 쓰지 않습니다.
[500ms]
[calm] 왼쪽은 평범한 자동 완성입니다. 입력하면 파일 안에서 이미 본 단어를 제시합니다. 오른쪽은 Copilot입니다. 무엇을 하고 싶은지 주석으로 적으면 함수를 써 줍니다.
[500ms]
[thoughtful] 차이는 똑똑함이 아니라 맥락입니다. 다만 이것은 제안 엔진이지 신탁이 아닙니다. 시간을 진짜로 아껴 줄 만큼은 맞고, 매 줄을 읽어야 할 만큼은 틀립니다.

## Step 2 · What Is Free, and What You Pay For

[calm] Copilot Free는 무료이고 쓸 만합니다. 한 달에 완성 2천 회, 모델은 AI가 고릅니다. 포함되지 않는 것은 클라우드 에이전트입니다.
[500ms]
[bright] Pro는 월 10달러에 AI 크레딧 1천5백. Pro Plus는 39달러에 7천과 프리미엄 모델. Max는 100달러에 2만. 직장에서는 좌석 단위로, Business가 19달러, Enterprise가 39달러입니다.
[500ms]
[reassuring] 그리고 학생이나 교직원이라면 결제하기 전에 잠깐 멈추세요. GitHub 인증을 받으면 Pro가 무료입니다.

## Step 3 · AI Credits: What Actually Costs You

[bright] 여기가 많은 분이 오해하는 지점입니다. 코드 완성, 그러니까 입력하는 동안 나타나는 회색 글자는 크레딧을 전혀 쓰지 않습니다. 유료 요금제에서는 무제한이라 하루 종일 코드를 써도 계량기는 돌지 않습니다.
[500ms]
[serious] 계량기를 돌리는 건 이쪽입니다. 채팅 메시지, 에이전트 실행, 그리고 Copilot의 코드 리뷰. 생각하는 작업이고, 각각이 그달 잔액에서 차감됩니다.
[500ms]
[thoughtful] 다 쓰면 추가 크레딧은 하나에 1센트지만, 직장 계정에서는 그것을 켤지 말지를 관리자가 정합니다.

## Step 4 · Who Picks the Model

[confident] Copilot은 단일 모델 위에서 돌지 않습니다. 여러 공급사의, 계속 바뀌는 라인업 위에서 돕니다. 그리고 저는 일부러 어느 것도 이름을 대지 않겠습니다. 그 목록은 다음 분기면 낡을 테니까요.
[500ms]
[calm] 바뀌지 않는 것은 누가 고르느냐입니다. Free와 Student에서는 선택지가 하나, Auto입니다. GitHub가 고르고, 게다가 잘 고릅니다. Pro와 Business에서는 모델 선택이 열리고, Pro Plus, Max, Enterprise에서는 프리미엄 모델까지 포함됩니다.
[500ms]
[thoughtful] 큰 모델이 자동으로 더 나은 답이 되지는 않습니다. 우선 Auto로 시작하세요.

## Step 5 · Copilot in VS Code

[confident] 그럼 실제로 써 봅시다. VS Code에 GitHub Copilot 확장을 설치하고, 요금제가 있는 계정으로 로그인하고, 채팅을 엽니다. 준비는 그게 전부입니다.
[500ms]
[calm] 여기 서브태스크 1.1, 기반이 되는 서버가 있습니다. 채팅에 무엇이 입력되는지 보세요. "서버 써 줘"가 아니라 실제 요구사항입니다. 먼저 backend 소스를 읽을 것. 설정을 불러올 것. 변수가 없으면 즉시 실패할 것. 지정된 포트에서 수신할 것. SIGINT와 SIGTERM에서 깔끔하게 종료할 것.
[700ms]
[serious] 그리고 일하는 순서를 보세요. 먼저 쓰지 않습니다. 읽습니다. 소스 폴더, 이어서 app 점 js와 설정 파일. 탐색기에서 차례로 밝아집니다. 그다음 소리 내어 생각합니다. app 점 js가 이미 Express 앱을 내보내고 있으니, server 점 js가 가질 것은 라우트가 아니라 프로세스라고요.
[700ms]
[bright] 그러고 나서야 씁니다. server 점 js의 스무 줄, 그 전부가 방금 읽은 프로젝트에 들어맞습니다. 추측하는 도구와, 보고 나서 쓰는 도구의 차이가 바로 여기 있습니다.

## Step 6 · Ask, Plan, Agent

[confident] 채팅은 하나가 아닙니다. 같은 Copilot이 세 가지 다른 일을 하고 있습니다.
[500ms]
[calm] Ask는 질문에 답할 뿐 디스크 위의 어떤 것도 바꾸지 않습니다. Plan은 읽기 전용 도구로 저장소를 읽고 구현 계획을 씁니다. 제안은 Plan이 하고, 승인은 여러분이 합니다. Agent는 실제로 작업합니다. 파일을 고치고, 명령을 실행하고, 자기 오류를 읽고 다시 시도합니다.
[500ms]
[reassuring] 그리고 이들은 이어집니다. 계획이 끝나면 Start Implementation 버튼이 나타나고, 그대로 에이전트에게 넘길 수 있습니다.

## Step 7 · Hand Sub-task 1.2 to the Coding Agent

[confident] Copilot이 일하는 곳이 하나 더 있습니다. 그리고 그곳은 여러분의 노트북이 아닙니다.
[500ms]
[calm] github 점 com으로 돌아가면 보드 위의 다음 이슈, 서브태스크 1.2가 있습니다.
[500ms]
[bright] 오른쪽 Assignees를 보세요. 두 번째 버튼, Assign to Agent가 있습니다. 이 버튼 하나가 인계의 전부입니다. 누르면 Copilot이 담당자가 됩니다.
[500ms]
[calm] 세션은 여러분의 컴퓨터가 아니라 GitHub의 인프라에서 시작합니다. 노트북을 덮고 자리를 떠도 됩니다. 1분쯤 뒤에 초안 풀 리퀘스트 14번이 열립니다.
[500ms]
[thoughtful] 다만 이 이슈는 모호한 한 줄이 아닙니다. 인수 조건이 셋이고, Azure Maps 키를 절대 노출하지 말라는 것까지 적혀 있습니다. 보드에 적은 것이 곧 프롬프트인 셈입니다.

## Step 8 · You Get a Draft, Not a Decision

[confident] 그리고 돌아오는 것이 이것입니다. Draft라고 붙은 풀 리퀘스트. 파일 셋, 테스트 포함.
[500ms]
[serious] 중요한 단어는 Draft입니다. 아주 빠른 동료의 제안일 뿐, 지름길은 하나도 주지 않습니다. 차이를 읽고, 브랜치를 가져와서, 실행해 보세요.
[500ms]
[thoughtful] 줄을 쓴 것은 Copilot이지만, 기록상의 작성자는 여러분입니다. 병합에 여러분 이름이 붙습니다. 그리고 새벽 두 시에 무너졌을 때의 장애 보고서에도요.
[500ms]
[bright] 그래서 다음 질문이 나옵니다. 이 코드는 애초에 어느 브랜치에 있었어야 했을까요.
