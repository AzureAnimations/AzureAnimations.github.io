# Narrator Script — GitHub · Configure Copilot Agents: Instructions, Custom Agents and Setup Steps

**Source animation:** [CustomAgentsAndInstructions.html](../../../journeys/GitHub/CustomAgentsAndInstructions.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/create-custom-agents>

---

## Step 1 · One Agent, Many Jobs

[calm] Maya는 범용 에이전트 하나에 서로 다른 작업 세 가지를 맡깁니다. 테스트, 문서, 리뷰입니다.
[600ms]
[concerned] 이 에이전트는 Contoso의 규칙을 전혀 모르고, 제한하지 않으면 모든 작업에서 쓸 수 있는 도구를 전부 쓸 수 있습니다.
[600ms]
[serious] 결과물은 팀이 일하는 방식과 맞지 않습니다. 구성으로 이 문제를 해결해 봅시다.

## Step 2 · Repository Instructions

[curious] 첫 번째 해결책은 Contoso가 빌드하고 테스트하고 이름 짓는 방식을 Copilot에게 알려 주는 파일 하나입니다.
[600ms]
[confident] 저장소의 GitHub 폴더에 두는 일반 Markdown 파일이고, 자연어 규칙으로 씁니다. 이 저장소에서 하는 모든 요청에 적용됩니다.
[600ms]
[encouraging] 작업을 어떻게 빌드하고, 테스트하고, 검증하는지 적어 두세요. 에이전트는 매번 그 내용을 따릅니다.

## Step 3 · Path and Agent Instructions

[calm] 범위가 좁은 규칙일수록 코드와 가까운 곳에 둡니다.
[600ms]
[confident] 경로별 지침 파일은 그 패턴에 일치하는 파일에 적용됩니다. 에이전트 지침 파일은 저장소 어디에나 둘 수 있고, 가장 가까운 파일이 우선합니다.
[600ms]
[curious] 경로가 일치하고 저장소 전체 파일도 있으면, Copilot은 둘 다 사용합니다. 경로별 파일을 클라우드 에이전트나 코드 리뷰에서 제외할 수도 있습니다.

## Step 4 · A Custom Agent

[curious] 이제 에이전트에게 역할을 주세요. 커스텀 에이전트는 프런트매터가 있는 Markdown 파일입니다.
[600ms]
[confident] 이름, 목적을 설명하는 description, 그리고 작업 방식을 정하는 프롬프트가 들어 있습니다. 설명은 필수입니다.
[600ms]
[reflective] 프로필은 agents 폴더에 두고, 파일 이름은 dot agent dot md로 끝납니다. JetBrains IDE, Eclipse, Xcode에서의 지원은 공개 미리 보기입니다.

## Step 5 · Choose Its Tools

[calm] tools 속성에는 에이전트가 쓸 수 있는 도구를 나열합니다. 읽기와 검색만 할 수 있는 리뷰어는 파일을 바꿀 수 없습니다.
[600ms]
[confident] 이 속성을 생략하거나 별표를 쓰면 에이전트가 모든 도구를 쓸 수 있습니다. 목록을 적으면 그 도구만 켜집니다.
[600ms]
[serious] 빈 목록은 도구를 모두 끄고, 인식되지 않는 도구 이름은 그냥 무시됩니다.

## Step 6 · Pick the Model and the Scope

[calm] 모델은 선택 사항입니다. 지정하지 않으면 에이전트가 기본 모델을 그대로 씁니다.
[600ms]
[confident] 파일을 어디에 두느냐에 따라 에이전트를 쓸 수 있는 범위가 정해집니다. 저장소 하나, 조직, 엔터프라이즈 중 하나입니다. 조직 에이전트는 조직의 dot github 저장소 안 특별한 폴더에 둡니다.
[600ms]
[curious] 같은 이름이 두 단계에 있으면, 가장 낮은 단계가 우선합니다.

## Step 7 · Copilot Setup Steps

[calm] 다음은 환경입니다. 작업이 하나 있고 이름이 copilot setup steps인 워크플로우 파일이, 에이전트가 시작하기 전에 환경을 준비합니다.
[600ms]
[confident] 이 단계는 GitHub Actions에서 실행되기 때문에, 클라우드 샌드박스 세션이 아니라 Actions에서 실행되는 세션에 적용됩니다.
[600ms]
[serious] 단계가 하나라도 실패하면 Copilot은 나머지를 건너뛰고, 준비된 것만으로 시작합니다.

## Step 8 · Scope to a Repository and a Branch

[calm] 에이전트 파일은 기본 브랜치에 있어야 하니, 먼저 프로필과 설정 단계 파일을 거기에 병합하세요.
[600ms]
[confident] 세션은 저장소 하나에서 시작되고, Copilot은 선택한 베이스 브랜치에서 새 브랜치를 만듭니다.
[600ms]
[reassuring] 결과는 그 베이스 브랜치를 대상으로 한 풀 리퀘스트입니다. 클라우드 샌드박스에서는 같은 조직 안의 여러 저장소에 걸쳐 세션이 실행될 수 있습니다.

## Step 9 · Invoke It

[curious] 커스텀 에이전트를 시작하는 방법은 여러 가지입니다. 이슈를 할당하거나 작업을 시작할 때 선택하세요.
[600ms]
[confident] 풀 리퀘스트에서는 Copilot을 멘션해서 변경을 요청하세요. 워크플로우에서는 이슈 API에 커스텀 에이전트와 베이스 브랜치를 넘길 수 있는데, 이것은 미리 보기 기능입니다.
[600ms]
[encouraging] 에이전트 탭의 드롭다운에서 고르거나, Copilot CLI의 agent 명령을 쓸 수도 있습니다.

## Step 10 · Test the Agent

[calm] 확인할 수 있는 작은 작업 하나로 에이전트를 테스트하세요.
[600ms]
[curious] 결과를 읽어 보세요. Copilot이 풀 리퀘스트를 열면 어떤 커스텀 에이전트를 썼는지 적어 줍니다.
[600ms]
[determined] 결과가 틀렸다면 결과물이 아니라 지침을 고친 다음, 다시 실행하세요.

## Step 11 · Recap: The Files That Make an Agent

[calm] 에이전트를 이루는 것은 네 가지입니다. 지침은 규칙을 정하고, 프로필은 역할과 도구를 정합니다.
[600ms]
[confident] 설정 단계는 환경을 준비하고, 범위는 저장소, 베이스 브랜치, 에이전트를 시작하는 방식을 정합니다.
[600ms]
[proud] G H 600 학습 가이드에서는 이 내용을 도구 사용과 환경 상호작용 구현 항목에 넣고 있습니다.
