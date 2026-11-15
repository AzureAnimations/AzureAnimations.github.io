# Narrator Script — Security · Microsoft Security Copilot: workspaces, roles, plugins and agents — Azure Security Journey

**Source animation:** [SecurityCopilot.html](../../../journeys/Security/SecurityCopilot.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/copilot/security/microsoft-security-copilot>
- <https://learn.microsoft.com/copilot/security/plugin-overview>
- <https://learn.microsoft.com/copilot/security/manual-onboarding>
- <https://learn.microsoft.com/copilot/security/authentication>

---

## Step 1 · Forty open incidents and one afternoon

[calm] Priya는 Contoso의 보안 분석가인데, 처리하지 못한 인시던트가 40건이고 시간은 오늘 오후뿐입니다. 인시던트마다 열어야 하는 콘솔도 다릅니다.
[600ms]
[concerned] 하루가 끝나기 전에, 인시던트마다 요약과 쿼리, 판단이 필요합니다.
[600ms]
[determined] 이번 레슨은 분석가 한 명과 관리자 한 명이 Security Copilot을 쓰는 과정을 따라가며, S C 500 기술 항목을 다룹니다. 등장하는 인물은 모두 가상입니다.

## Step 2 · What Security Copilot is

[calm] Microsoft Security Copilot은 생성형 AI 보안 솔루션입니다. 평소 쓰는 말로 물어보면 됩니다.
[600ms]
[curious] 질문을 플러그인으로 내 보안 데이터에 연결해서 맥락을 더한 다음, 언어 모델에 보냅니다.
[600ms]
[confident] 응답도 플러그인으로 한 번 더 처리한 뒤에 돌려주고, 그 결과는 내가 검토하고 평가합니다.

## Step 3 · Capacity and workspace

[calm] 용량은 내가 프로비저닝하는 컴퓨팅이고, Security Compute Units 단위로 측정합니다. 워크스페이스는 테넌트에 묶인 공간으로, 사용자와 자동화, 에이전트가 이 안에서 동작합니다.
[600ms]
[confident] 라이선스에 Security Copilot이 포함되어 있지 않다면, Azure 구독과 리소스 그룹으로 유닛을 직접 프로비저닝합니다.
[600ms]
[reassuring] Microsoft 365 E5나 E7 고객은 기본으로 포함되어 자동으로 프로비저닝될 수 있습니다.

## Step 4 · Configure a workspace

[calm] 처음 실행하면 관리자가 네 가지를 선택합니다. 워크스페이스 이름, 용량, 데이터 공유, 그리고 역할 검토입니다.
[600ms]
[serious] 이 중 두 가지는 신경 써야 합니다. 워크스페이스를 만든 뒤에는 데이터를 저장하는 위치를 바꿀 수 없습니다.
[600ms]
[concerned] 그리고 E5나 E7이 없는 고객은 Microsoft와의 데이터 공유가 기본으로 켜져 있습니다. Copilot 소유자는 언제든 바꿀 수 있습니다.

## Step 5 · Roles: owner and contributor

[calm] 플랫폼에 들어가는 Security Copilot 역할은 소유자와 기여자 두 가지입니다. Microsoft Entra 역할은 아닙니다.
[600ms]
[serious] 둘 중 어느 쪽도 그것만으로는 보안 데이터에 접근할 수 없습니다. 그건 여전히 Entra와 Azure, 각 서비스의 역할에서 옵니다.
[600ms]
[confident] 설정에서 역할을 할당하되, 가능하면 보안 그룹에 할당하세요. Copilot은 소유자를 항상 최소 두 명 유지하고, 일부 관리자 역할은 소유자 권한을 자동으로 이어받습니다.

## Step 6 · Embedded or standalone

[curious] Security Copilot은 전용 포털에서 쓸 수도 있고, 이미 쓰고 있는 Microsoft 보안 도구 안에서 쓸 수도 있습니다.
[600ms]
[confident] Defender XDR, Sentinel, Entra, Intune, Purview 같은 제품에는 내장 경험이 들어 있고, 보통 사이드카 형태로 나타납니다.
[600ms]
[reassuring] 어느 쪽이든 같은 Security Copilot이고, 제품마다 필요한 역할과 라이선스가 따로 안내되어 있습니다.

## Step 7 · Plugins: Microsoft, third-party, custom

[calm] 플러그인은 Copilot이 데이터에 접근하거나 작업을 실행하게 해 주는 관련 도구 모음이고, 스킬이라고도 합니다. 종류는 세 가지로, Microsoft, 타사, 사용자 지정이 있습니다.
[600ms]
[confident] Microsoft 플러그인은 위임 인증을 쓰기 때문에, 내가 이미 접근할 수 있는 것에만 닿습니다.
[600ms]
[serious] 사용자 지정 플러그인은 소유자가 관리합니다. 워크스페이스 전체에 공개하기 전에 먼저 사용자 수준에서 검증하세요.

## Step 8 · Enable a plugin, change the answer

[curious] 플러그인을 끄면, Copilot은 일반적인 수준으로만 답할 수 있습니다.
[600ms]
[impressed] 켜면 같은 프롬프트가 Contoso의 실제 인시던트를 바탕으로 답합니다. 스위치를 눌러서 두 답변을 비교해 보세요.
[600ms]
[reassuring] 설정 버튼이 있는 플러그인은 사용자별로 구성하고, 이때도 내 역할이 반환할 수 있는 데이터를 제한합니다.

## Step 9 · Agents that work without being asked

[calm] 에이전트는 트리거가 작동하면 반복되는 작업을 처리합니다. 트리거는 일정이나 이벤트, 아니면 수동 실행입니다.
[600ms]
[confident] 에이전트를 만들려면 트리거와 ID, 권한을 고르고, 필요한 플러그인과 역할도 정합니다. 한도는 내가 정하고, 통제권도 내가 가집니다.
[600ms]
[reflective] 에이전트도 다른 기능처럼 Security Compute Units를 쓰고, 일부는 아직 미리 보기입니다.

## Step 10 · The Security Store

[calm] Security Store에서 에이전트를 찾아 받고, 알맞은 담당자가 권한을 승인한 다음에 설정합니다.
[600ms]
[confident] Microsoft 에이전트는 Active agents로 들어갑니다. 파트너 에이전트는 스토어에서 구매하거나 구독합니다.
[600ms]
[curious] 파트너 에이전트에 Microsoft 데이터가 필요하면 Global Administrator가 승인합니다. 구독은 스토어에서 관리하고, 에이전트를 실행하면 용량이 쓰입니다.

## Step 11 · Try it: pick the right tool for six tasks

[curious] 작업이 여섯 개이고, Security Copilot의 구성 요소는 다섯 가지입니다. 작업을 읽고, 이걸 해결하는 구성 요소를 고르세요.
[600ms]
[encouraging] 역할, 워크스페이스, 플러그인, 에이전트, Security Store 중에서 고르세요. 작업마다 가장 잘 맞는 답이 하나씩 있습니다.
[600ms]
[reassuring] 고를 때마다 이유를 알려 주니, 틀려도 배우는 게 있습니다.

## Step 12 · Recap: workspace, role, plugin, agent

[calm] 설정할 것은 네 가지이고, 순서는 워크스페이스, 역할, 플러그인, 에이전트입니다. 각각 관리자가 받는 질문에 하나씩 답합니다.
[600ms]
[confident] 이게 S C 500 학습 가이드의 Microsoft Security Copilot 구현 기술 항목이고, Security Store 에이전트도 포함됩니다.
[600ms]
[proud] 시험은 바뀔 수 있으니, 이 목록을 믿기 전에 최신 학습 가이드를 읽어 보세요.
