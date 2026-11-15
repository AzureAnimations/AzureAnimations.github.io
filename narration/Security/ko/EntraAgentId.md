# Narrator Script — Security · Secure AI agents with Microsoft Entra Agent ID — Azure Security Journey

**Source animation:** [EntraAgentId.html](../../../journeys/Security/EntraAgentId.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/entra/agent-id/what-is-microsoft-entra-agent-id>
- <https://learn.microsoft.com/entra/agent-id/agent-owners-sponsors-managers>
- <https://learn.microsoft.com/entra/identity/conditional-access/agent-id>
- <https://learn.microsoft.com/entra/id-governance/agent-id-governance-overview>

---

## Step 1 · An agent that acts on its own

[curious] Contoso의 Invoice Agent는 아무도 로그인하지 않은 상태에서, 정해진 일정에 따라 메일과 파일, 재무 데이터를 읽습니다.
[600ms]
[serious] 이 에이전트가 탈취당하면, 공격자는 에이전트가 접근할 수 있는 모든 것을 그대로 물려받습니다.
[600ms]
[calm] 이번 레슨은 에이전트 하나를 따라가면서 ID 부여부터 차단까지 살펴봅니다. 아직 미리 보기인 기능에는 표시를 해 두었습니다.

## Step 2 · Why agents need identities of their own

[calm] 에이전트가 사람의 계정을 빌려 쓴다고 해 보세요. 로그를 보면, 사람이 한 일인지 에이전트가 한 일인지 구분할 수 없습니다.
[600ms]
[confident] 에이전트 ID를 따로 두면 에이전트의 작업이 사람의 작업과 구분되고, 접근 범위도 알맞게 조절할 수 있습니다.
[600ms]
[curious] 또 에이전트가 가장 중요한 역할에 접근하지 못하게 막아 주고, 에이전트는 자주 생기고 없어지기 때문에 규모가 커져도 감당할 수 있습니다.

## Step 3 · Microsoft Entra Agent ID: identities and blueprints

[calm] Entra Agent ID는 AI 에이전트를 위해 만든 전용 ID를 디렉터리에 만들어 줍니다.
[600ms]
[curious] 에이전트 ID 블루프린트는 템플릿입니다. 에이전트 ID는 모두 이 블루프린트에서 만들어지고, 각자 자격 증명과 권한을 가집니다.
[600ms]
[reflective] 일부 보호 기능에는 Microsoft Agent 365 라이선스가 필요하니, 최신 라이선스 페이지를 확인하세요. 에이전트는 Entra 관리 센터에서 볼 수 있습니다.

## Step 4 · Who owns and sponsors an agent

[calm] 에이전트 ID마다 책임지는 사람이 있어야 합니다. 소유자는 기술적인 운영을 맡고, 선택 사항입니다.
[600ms]
[confident] 스폰서는 비즈니스 담당자이고, 최소 한 명은 꼭 있어야 합니다. 에이전트의 목적과 수명 주기에 책임을 집니다.
[600ms]
[reassuring] 스폰서는 에이전트를 비활성화할 수는 있지만, 다시 활성화할 수는 없습니다. 스폰서가 떠나면 스폰서 역할은 그 사람의 관리자에게 넘어갑니다.

## Step 5 · What an agent may reach

[calm] 접근 권한은 액세스 패키지로 부여합니다. 기간이 정해져 있고, 승인을 거치며, 업무에 맞는 만큼만 줍니다.
[600ms]
[curious] Sam이 에이전트 대신 요청하면, 에이전트는 패키지에 적힌 것만 받습니다. 그룹, API 권한, Entra 역할까지 포함할 수 있습니다.
[600ms]
[confident] 블루프린트에서는 꼭 필요한 위임 범위만으로 시작하세요.

## Step 6 · Conditional Access for agents

[curious] 에이전트가 Entra에 액세스 토큰을 요청하면, 조건부 액세스가 먼저 신호를 확인합니다.
[600ms]
[calm] 그런 다음 허용하거나 차단합니다. 토큰을 발급하거나 갱신할 때마다 실행됩니다.
[600ms]
[confident] 정책은 에이전트 하나, 블루프린트 전체, 또는 직접 지정한 특성을 가진 에이전트를 대상으로 할 수 있습니다. 에이전트 위험은 아직 미리 보기입니다.

## Step 7 · Try it: change the risk level

[excited] 이제 직접 해 볼 차례입니다. Invoice Agent의 위험 수준을 하나 골라 보세요.
[600ms]
[curious] 정책은 지정한 수준만 차단하니, 어떤 수준에서는 여전히 토큰이 발급되는지 지켜보세요.
[600ms]
[reassuring] 실제 환경에서는 정책을 켜기 전에 먼저 보고 전용 모드로 시작하세요.

## Step 8 · Review access and remove what is not needed

[calm] 접근 권한이 필요한 기간보다 오래 남아 있으면 안 됩니다. 패키지는 만료되고, 끝날 때가 가까워지면 스폰서에게 알림이 갑니다.
[600ms]
[curious] 스폰서는 연장을 요청할 수 있고, 이때 새 승인 절차가 시작될 수 있습니다. 아니면 그냥 만료되게 둡니다.
[600ms]
[confident] 액세스 검토를 하면 Sam이 일정에 따라 권한을 하나씩 유지하거나 제거할 수 있습니다.

## Step 9 · The blast radius

[serious] 에이전트가 침해되면, 영향 범위는 에이전트가 직접 또는 몇 단계를 거쳐 닿을 수 있는 모든 시스템입니다.
[600ms]
[calm] 그 범위를 알아야 무엇부터 보호할지 정할 수 있습니다.
[600ms]
[reflective] 이건 가능한 경로일 뿐, 공격자가 반드시 이 경로를 택한다는 뜻은 아닙니다. 그래프도 내가 가진 데이터만큼만 완전합니다.

## Step 10 · Defender XDR: an agent in the attack path

[calm] 인시던트가 발생하면 에이전트를 선택하고 영향 범위 보기를 선택하세요.
[600ms]
[curious] Defender XDR이 에이전트에서 중요한 대상까지 이어지는 가능한 경로를 그려 줍니다.
[600ms]
[reflective] 이 기능에는 Microsoft Sentinel 데이터 레이크가 필요하고, 공격 경로 분석을 확장하면서 대체합니다.

## Step 11 · Contain it

[determined] 먼저 에이전트를 멈추고, 그다음 조사하세요. 침해를 확인하면 위험이 High로 설정되고, 정책이 에이전트를 차단합니다.
[600ms]
[serious] 비활성화하면 모든 로그인이 중단됩니다. ID 하나만 비활성화할 수도 있고, 블루프린트 전체를 비활성화할 수도 있습니다. 에이전트가 무엇을 했는지는 로그에 나옵니다.
[600ms]
[reassuring] 오탐이었다면 위험을 해제하고 다시 활성화하세요. 실제 침해였다면 먼저 자격 증명을 교체하거나, 에이전트를 폐기하세요.

## Step 12 · Recap: identity, policy, review, contain

[calm] 에이전트에 전용 ID를 주고, 정책으로 제어하고, 접근 권한을 항상 최신으로 유지하세요.
[600ms]
[confident] 그리고 침해됐을 때 차단하는 방법도 알아 두세요. 이 네 가지 조치는 어떤 에이전트에든 똑같이 적용됩니다.
[600ms]
[proud] 이 내용은 S C 500과 A B 650의 기술 항목에 해당합니다. 시험은 바뀔 수 있으니 최신 학습 가이드를 확인하세요.
