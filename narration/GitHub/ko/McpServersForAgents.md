# Narrator Script — GitHub · MCP Servers for Agents: GitHub Remote, Registries and Allow Lists

**Source animation:** [McpServersForAgents.html](../../../journeys/GitHub/McpServersForAgents.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/training/modules/agent-tooling-mcp-execution-environments/>
- <https://docs.github.com/en/copilot/how-tos/provide-context/use-mcp>

---

## Step 1 · The Agent Cannot Reach Your Tools

[calm] Contoso의 코딩 에이전트는 채팅에 있는 내용과 열려 있는 파일만 알고 있습니다.
[600ms]
[concerned] 빌드 로그, 이슈, 문서는 에이전트가 닿을 수 없는 다른 도구에 있습니다. 표준 연결이 없으면 도구마다 별도의 연결을 만들거나, 누군가 컨텍스트를 직접 붙여 넣어야 합니다.
[600ms]
[curious] 필요한 것은 에이전트를 도구에 연결하는 표준 방식 하나입니다.

## Step 2 · What MCP Is: Client, Server, Tools

[curious] 그 표준이 Model Context Protocol입니다. AI 앱을 도구에 연결하기 위한 개방형 표준입니다.
[600ms]
[confident] 호스트는 에이전트가 있는 IDE 같은 AI 앱입니다. 연결하는 MCP 서버마다 클라이언트를 하나씩 만듭니다.
[600ms]
[calm] 각 서버는 자신이 제공하는 도구를 목록으로 알려 주는 프로그램입니다. 여기 나오는 도구 이름은 예시일 뿐입니다.

## Step 3 · Add an MCP Server to an Agent

[calm] 서버를 추가하려면 에디터에 항목 하나만 넣으면 됩니다. 서버의 이름과 URL을 적습니다.
[600ms]
[confident] Visual Studio Code에서는 이 항목을 MCP 설정 파일에 넣고, list servers 명령으로 설정된 서버를 확인합니다. 다른 에디터도 비슷한 항목을 사용합니다.
[600ms]
[reassuring] 서버를 시작하고 신뢰할 수 있는지 확인하면, 에이전트에 그 서버의 도구가 나타납니다.

## Step 4 · The GitHub Remote MCP Server

[curious] GitHub는 MCP 서버를 직접 호스팅하기 때문에 설치할 것이 없습니다. 로컬 서버는 대신 내 컴퓨터에서 실행됩니다.
[600ms]
[confident] 서버 URL에 연결하고 로그인하세요. 기본은 OAuth이고, 개인용 액세스 토큰을 쓸 수도 있습니다.
[600ms]
[encouraging] 그리고 모든 도구 그룹이 아니라, 에이전트에 필요한 도구 세트만 고르세요.

## Step 5 · Read-Only Versus Write

[calm] 읽는 도구가 있고, 쓰는 도구가 있습니다. 읽기는 파일, 이슈, 풀 리퀘스트를 조회하고, 쓰기는 그것들을 만들거나 변경합니다.
[600ms]
[curious] 스위치를 켜 보세요. 읽기 전용 모드에서는 무언가를 바꾸는 도구가 아예 제공되지 않습니다.
[600ms]
[confident] URL에 읽기 전용 경로를 붙이거나 헤더로 켤 수 있습니다. 에이전트는 서버가 제공하는 도구만 호출할 수 있습니다.

## Step 6 · Authentication and Token Scope

[calm] 에이전트는 내 로그인이나 토큰으로 동작합니다.
[600ms]
[serious] 에이전트가 가진 스코프는, 잘못되었거나 속아서 한 도구 호출이 할 수 있는 최대치입니다. 그러니 작업에 필요한 것만 부여하세요.
[600ms]
[reassuring] 클라우드 에이전트의 기본 GitHub 서버는 현재 저장소 전용으로 스코프를 좁힌 읽기 전용 토큰을 사용합니다. 화면에 나오는 스코프 이름은 예시입니다.

## Step 7 · A Registry of Approved Servers

[curious] 이번에는 조직의 관점입니다. 레지스트리는 조직이 승인한 MCP 서버의 카탈로그입니다.
[600ms]
[confident] 개발자는 인터넷을 검색하지 않고 여기서 서버를 찾습니다. 레지스트리는 MCP 레지스트리 사양을 따르는 HTTPS 엔드포인트 모음입니다.
[600ms]
[reflective] 직접 호스팅해도 되고, Azure API Center를 사용해도 됩니다. 레지스트리는 공개 미리보기 단계이고, 여기 나오는 서버 이름은 가상의 이름입니다.

## Step 8 · Configure the Registry

[calm] 조직 소유자가 MCP를 켜고, GitHub가 레지스트리 주소를 가리키게 한 다음, 제한 방식을 고릅니다.
[600ms]
[confident] 모든 서버를 허용할 수도 있고, 레지스트리의 서버만 허용할 수도 있습니다. 조직에서는 Copilot 정책 아래에 설정이 있고, 엔터프라이즈 소유자는 AI 제어에서 찾을 수 있습니다.
[600ms]
[serious] 레지스트리 전용은 서버 이름이나 ID로 비교하기 때문에, 완벽한 차단은 아닙니다.

## Step 9 · Allow Lists: Only Approved Servers

[calm] 허용 목록은 실행할 수 있는 서버를 이름, URL, 또는 시작 명령으로 지정합니다.
[600ms]
[serious] 일치하지 않는 서버는 차단되고, 일치하는 거부 항목이 있으면 항상 그쪽이 우선합니다.
[600ms]
[confident] 이 목록은 엔터프라이즈의 관리형 설정 파일에 있습니다. 사용자 설정과 저장소 설정에는 적용되지만, 저장소의 사용자 지정 에이전트 프로필 안에 있는 서버에는 적용되지 않습니다.

## Step 10 · See a Blocked Server

[concerned] Maya가 목록에 없는 서버를 추가했기 때문에, 그 서버는 시작되지 않습니다.
[600ms]
[confident] 해결은 정책 쪽에서 합니다. 소유자가 그 서버를 레지스트리나 허용 목록에 추가하면, Maya가 다시 불러옵니다.
[600ms]
[encouraging] 문제를 해결할 때는 먼저 Copilot에서 MCP 서버가 사용 설정되어 있는지 확인하고, 그다음 레지스트리나 허용 목록을 확인한 뒤, list servers 명령을 실행하세요.

## Step 11 · Recap: A Safe-by-Default MCP Checklist

[calm] 서버는 의도를 가지고 추가하세요. 항목을 넣고, 신뢰 확인을 거치세요.
[600ms]
[confident] 도구 세트, 읽기 전용 모드, 범위를 좁힌 토큰으로 제한하세요. 그다음 레지스트리와 허용 목록으로 관리하세요.
[600ms]
[proud] 이것으로 MCP 서버 구성에 관한 G H 600 기술을 다뤘습니다. 레지스트리는 공개 미리보기이고, 허용 목록은 정식 출시된 제어 수단이라는 점을 기억하세요.
