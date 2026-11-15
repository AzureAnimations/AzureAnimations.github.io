# Narrator Script — Monitor · Agents and Data Collection Rules

**Source animation:** [AgentsAndDcr.html](../../../journeys/Monitor/AgentsAndDcr.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/azure-monitor/agents/azure-monitor-agent-overview>
- <https://learn.microsoft.com/azure/azure-monitor/essentials/data-collection-rule-overview>
- <https://learn.microsoft.com/azure/azure-monitor/data-collection/data-collection-transformations>
- <https://learn.microsoft.com/azure/azure-monitor/vm/data-collection>

---

## Step 1 · Azure sees the box, not what’s inside

[calm] Contoso의 가상 머신 vm-web-01을 보겠습니다. Azure는 호스트 메트릭인 CPU, 네트워크, 디스크를 알아서 수집합니다.
[600ms]
[concerned] 하지만 게스트 운영 체제 안에 있는 Windows 이벤트, 성능 카운터, 로그는 보이지 않습니다.
[600ms]
[confident] 머신을 보는 것과 그 안에서 돌아가는 것을 보는 것은 다릅니다. 게스트 데이터는 추가 설정이 필요합니다.

## Step 2 · An agent reads from the inside

[curious] 머신 안에서 실행되는 소프트웨어는 플랫폼이 읽을 수 없는 것을 읽을 수 있습니다.
[600ms]
[confident] Azure Monitor Agent는 Azure와 하이브리드 머신의 게스트 운영 체제 데이터를 수집해서 Azure Monitor로 전달합니다.
[600ms]
[reassuring] 에이전트가 없으면 호스트의 데이터만 수집할 수 있습니다.

## Step 3 · One agent to know: Azure Monitor Agent

[calm] 예전에는 에이전트가 여러 개였지만, 이제는 하나만 알면 됩니다. Azure Monitor Agent, 줄여서 AMA입니다.
[600ms]
[serious] AMA는 MMA 또는 OMS라고도 부르던 Log Analytics 에이전트를 대체합니다. 이 에이전트는 Microsoft가 2024년 8월 31일에 사용 중단했습니다.
[600ms]
[encouraging] 마이그레이션하는 중이라면, Migration Helper 워크북과 DCR Config Generator가 기존 워크스페이스 설정을 데이터 수집 규칙으로 바꿔 줍니다.

## Step 4 · Getting the agent onto machines

[curious] 에이전트를 설치하는 방법은 세 가지입니다. 포털에서 설치하거나, Azure Arc로 외부 머신을 가져오거나, Azure Policy로 대규모로 배포합니다.
[600ms]
[confident] 에이전트는 실행되면 머신의 관리 ID로 로그인합니다.
[600ms]
[reassuring] 시스템 할당과 사용자 할당 ID 모두 쓸 수 있고, 대규모 배포에는 사용자 할당이 잘 맞습니다.

## Step 5 · A rule decides: the data collection rule

[curious] 핵심 개념은 이겁니다. 에이전트는 무엇을 수집할지 스스로 정하지 않습니다.
[600ms]
[confident] 데이터 수집 규칙, 즉 DCR이 무엇을 모으고, 어떤 형태로 가공하고, 어디로 보낼지 알려 줍니다.
[600ms]
[calm] DCR은 파이프가 아니라 구성입니다. 에이전트가 내려받고, Azure Monitor가 적용합니다.

## Step 6 · Four parts make up a DCR

[calm] DCR은 네 부분으로 이루어집니다. 데이터 원본은 무엇을 수집할지 정합니다.
[600ms]
[confident] 스트림은 데이터를 정해진 형태로 실어 나르고, 선택 사항인 변환이 데이터를 걸러 냅니다. 대상은 데이터가 도착할 곳을 정합니다.
[600ms]
[curious] 예를 들어 Windows 이벤트는 Microsoft Event 스트림을 거쳐 Event 테이블에 들어갑니다. 카운터는 Perf 테이블에 들어갑니다.

## Step 7 · Filter before you pay

[curious] 변환은 데이터를 워크스페이스에 수집하기 전에 걸러 내거나 모양을 바꾸는 KQL 문입니다.
[600ms]
[confident] 읽을 일이 없는 데이터는 버리세요. 수집할 양도, 저장할 양도 줄어듭니다.
[600ms]
[calm] 수집 시간 변환은 Azure Monitor에서 실행됩니다. 아직 프리뷰인 다단계 변환은 에이전트에서도 실행할 수 있어서, 네트워크 트래픽도 줄여 줍니다.

## Step 8 · One rule, many machines

[calm] DCR은 연결로 머신에 이어 주기 전까지는 아무 일도 하지 않습니다. 지금 빠진 부분이 바로 그것입니다.
[600ms]
[confident] DCR 하나가 여러 머신을 담당할 수 있고, 머신 하나가 여러 DCR을 따를 수도 있습니다. 전체적으로 다대다 관계입니다.
[600ms]
[reassuring] 연결을 제거하면, 그 수집은 중단됩니다.

## Step 9 · Compose your own DCR

[excited] 이제 직접 해 볼 차례입니다. 데이터 원본과 대상을 켜고 꺼 보세요.
[600ms]
[confident] 조작할 때마다 흐름과 간단히 줄인 DCR 요약이 바뀝니다.
[600ms]
[curious] 제한 사항에 주목하세요. Syslog는 Linux 전용이고, Windows 이벤트는 Windows 전용이며, 성능 카운터는 프리뷰 단계에서 메트릭으로도 보낼 수 있습니다.

## Step 10 · Platform logs take another road

[calm] Azure 리소스는 에이전트 없이도 플랫폼 데이터를 보냅니다. 여기서는 Key Vault가 스스로 보내고 있고, 그게 핵심입니다.
[600ms]
[confident] 진단 설정은 어떤 데이터를 내보낼지, 그리고 어디로 보낼지를 고릅니다. 워크스페이스, 스토리지 계정, 이벤트 허브가 대상입니다.
[600ms]
[serious] 리소스 로그는 진단 설정을 만들기 전에는 수집되지 않습니다. 플랫폼 메트릭과 활동 로그만 저절로 들어옵니다.

## Step 11 · The quick start: VM insights

[curious] 빠르게 시작하고 싶나요? VM insights를 켜면 Azure가 연결을 다 해 줍니다.
[600ms]
[confident] 에이전트를 설치하고, 미리 정해진 데이터 세트로 DCR을 만들어 줍니다.
[600ms]
[reassuring] 더 많이 수집하고 싶나요? 그 DCR은 수정하지 마세요. 직접 DCR을 만들어서 더 수집하세요.

## Step 12 · Agents and DCRs in one view

[calm] 게스트 데이터에는 에이전트가 필요합니다. 데이터 수집 규칙이 무엇을, 어떻게, 어디로 보낼지 정합니다.
[600ms]
[confident] 연결은 규칙을 머신에 이어 주고, 플랫폼 데이터는 진단 설정을 사용합니다.
[600ms]
[proud] 이 네 가지만 정확히 알아 두면, 데이터가 Azure Monitor에 도달하는 과정을 정확히 설명할 수 있습니다.
