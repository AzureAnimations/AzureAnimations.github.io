# Narrator Script — GitHub · Copilot in the Command Line

**Source animation:** [CopilotInTheCli.html](../../../journeys/GitHub/CopilotInTheCli.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-300>

---

## Step 1 · Why the terminal needs a partner

[calm] Ravi는 정확한 git 명령이 기억나지 않습니다. 그래서 터미널을 나가서 검색하다가, 하던 흐름을 놓치고 맙니다.
[600ms]
[curious] 대부분의 개발자에게 이 비용은 현실입니다. 탭을 오가고, 검색하고, 집중이 깨지죠.
[600ms]
[optimistic] 아이디어는 간단합니다. 일하는 바로 그 자리에서 물어보세요.

## Step 2 · What Copilot CLI is

[calm] GitHub Copilot CLI는 Copilot을 터미널로 가져옵니다.
[600ms]
[confident] 원하는 것을 쉬운 말로 설명하면, Copilot이 답하고, 코드를 작성하고, GitHub dot com과도 연동해서 작업합니다.
[600ms]
[reflective] 화면에 보이는 응답은 예시입니다. 실제 출력은 다를 수 있습니다.

## Step 3 · Install it

[calm] 먼저 Copilot 구독이 있어야 하고, 조직에서 CLI를 꺼 두지 않아야 합니다.
[600ms]
[confident] 그다음 WinGet, Homebrew, npm 중 하나로 설치하세요.
[600ms]
[reassuring] macOS와 Linux용 설치 스크립트도 있습니다.

## Step 4 · Sign in and start a session

[calm] 신뢰하는 폴더에서 copilot을 실행하세요.
[600ms]
[curious] 슬래시 login 명령으로 로그인합니다. 데스크톱에서는 브라우저 방식이 기본이고, 디바이스 코드 방식은 브라우저에 입력할 일회용 코드를 보여 줍니다.
[600ms]
[encouraging] 그다음 첫 번째 프롬프트를 입력하세요.

## Step 5 · Ask, explain, suggest

[curious] 목표를 쉬운 말로 설명하세요. Copilot이 명령을 제안하고, 각 부분을 설명해 줍니다.
[600ms]
[confident] 그러면 승인하기 전에 그 명령을 이해할 수 있습니다.
[600ms]
[serious] 이 응답은 예시이고 표현은 달라질 수 있으니, 항상 실제 명령을 먼저 읽어 보세요.

## Step 6 · Interactive mode

[calm] copilot을 입력하면 대화가 시작됩니다. 프롬프트가 앞의 내용을 이어받기 때문에, 그 경우 같은 표현도 그대로 이해합니다.
[600ms]
[confident] 컨텍스트는 Copilot CLI가 알아서 관리하고, 가득 차면 기록을 압축합니다. 슬래시 context 명령으로 사용량을 볼 수 있습니다.
[600ms]
[intrigued] Shift와 Tab을 누르면 계획 모드로 전환됩니다.

## Step 7 · Slash commands and options

[calm] 슬래시 명령으로 세션을 관리합니다. login, model, context가 그 예입니다.
[600ms]
[confident] 프롬프트 안에서 앳 기호는 파일을 추가하고, 느낌표는 셸 명령을 실행합니다.
[600ms]
[encouraging] 한 번만 답을 받고 싶다면 copilot을 dash p 옵션과 프롬프트로 실행하세요. 전체 목록은 더 길지만, 먼저 이 몇 가지부터 익히세요.

## Step 8 · Generate a script

[curious] 원하는 스크립트를 설명하면, Copilot이 파일을 작성합니다.
[600ms]
[confident] 무엇이든 실행되기 전에, 변경 내용을 diff로 보며 검토합니다.
[600ms]
[serious] 생성된 코드는 항상 먼저 읽고, 승인한 뒤에만 실행하세요.

## Step 9 · Manage files

[calm] Copilot은 새 파일을 만들고, 이름을 바꾸고, 줄을 제자리에서 수정할 수 있습니다.
[600ms]
[confident] 파일을 바꾸거나 실행하는 도구는 먼저 승인을 요청할 수 있습니다.
[600ms]
[reassuring] 현재 폴더 밖의 파일에는 추가 승인이 필요합니다. 슬래시 add dir 명령으로 신뢰하는 폴더를 추가할 수 있습니다.

## Step 10 · Stay in control

[calm] Copilot은 도구를 쓰기 전에 먼저 물어볼 수 있습니다. 명령을 읽어 보고 선택하세요.
[600ms]
[confident] 한 번만 허용하거나, 세션 동안 허용하거나, 거부하고 대신 무엇을 하라고 Copilot에게 알려 줄 수 있습니다.
[600ms]
[concerned] 세션 동안 허용은 조심하세요. remove 명령을 승인하면, Copilot이 그 폴더와 하위 폴더의 어떤 파일이든 다시 묻지 않고 삭제할 수 있습니다.

## Step 11 · Organization policy

[calm] 관리자는 조직 설정의 Copilot 정책에서 Copilot CLI를 켜거나 끌 수 있습니다.
[600ms]
[serious] 꺼져 있으면 그 조직 사람들은 CLI를 쓸 수 없습니다.
[600ms]
[reflective] 엔터프라이즈 정책이 설정되어 있으면 그 정책이 우선하므로, 조직이 바꿀 수 없습니다.

## Step 12 · Recap: one Copilot, three places

[calm] Copilot은 하나이고, 편집기, 터미널, GitHub dot com에서 동작합니다.
[600ms]
[confident] 코드를 쓰고 편집할 때는 편집기를, 명령, 스크립트, 파일에는 CLI를, 저장소, 이슈, 풀 리퀘스트에는 GitHub dot com을 쓰세요.
[600ms]
[proud] 작업에 맞는 곳을 고르세요. 쓸 수 있는 기능은 플랜, 클라이언트, 조직 정책에 따라 다릅니다.
