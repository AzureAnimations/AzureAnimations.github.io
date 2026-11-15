# Narrator Script — Microsoft 365 Copilot · Identity Operations

**Source animation:** [IdentityOperations.html](../../../journeys/Copilot/IdentityOperations.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/entra/fundamentals/what-is-entra>
- <https://learn.microsoft.com/entra/identity/conditional-access/overview>
- <https://learn.microsoft.com/entra/identity/monitoring-health/concept-sign-ins>
- <https://learn.microsoft.com/entra/fundamentals/concept-learn-about-groups>

---

## Step 1 · Which Entra tool do I open?

[calm] Priya헬프 데스크는 하루 종일 로그인과 보안 티켓을 받습니다.
[600ms]
[curious] 각 티켓 뒤에는 다른 Microsoft Entra 도구가 있는데, 어떤 도구를 열어야 할까요?
[600ms]
[confident] 이 수업은 시험 A B 900에서 핵심 보안 기술을 다룹니다. MFA와 테넌트 같은 개념은 아이덴티티 여정에 포함되어 있으므로, 여기서는 관리자가 무엇을 언제 열어두는지에 초점을 맞춥니다.

## Step 2 · Microsoft Entra ID: the front door

[calm] 모든 Microsoft 365 세입자는 이미 Microsoft Entra 세입자입니다.
[600ms]
[confident] Entra ID 정문입니다. 누가 출입하는지 확인하고, 규칙을 적용하며, 무슨 일이 있었는지 기록합니다.
[600ms]
[curious] 보이는 타일들은 하나씩 열어볼 특징들입니다.

## Step 3 · Pick the object that fits the job

[curious] 사용자는 하나의 ID이고, 그룹은 여러 ID를 하나로 관리합니다.
[600ms]
[confident] 개인 설정은 사용자의 상태를 유지하고, 그룹에 접근할 수 있도록 하세요.
[600ms]
[reassuring] 보안 그룹은 공유 리소스에 대한 접근을 관리하고, Microsoft 365 그룹은 협업을 지원하며, 라이선스, 역할 또는 정책은 각 개인이 아닌 그룹에 할당될 수 있습니다.

## Step 4 · One sign-in, many apps

[calm] 싱글 사인온을 통해 Alex 업무용 자격 증명으로 한 번 로그인하고 할당된 모든 앱을 엽니다.
[600ms]
[confident] Entra ID 신원 제공자입니다. 앱이 Alex를 그곳으로 보내고, Entra ID 그를 인증한 후 앱을 통해 접근 권한을 부여합니다.
[600ms]
[reassuring] 관리자들은 이 모든 접근 권한을 한 곳에서 관리합니다.

## Step 5 · Conditional Access: if, then

[curious] 조건부 접근은 '만약', 그 다음에 아이디어를 기반으로 작동합니다. Entra는 로그인에 대한 신호를 수집하고, 결정을 내리며, 이를 강제합니다.
[600ms]
[confident] 결정은 액세스를 차단하거나, 제어를 적용해 액세스를 허용하는 것이며, 정책은 첫 번째 로그인 단계 이후에 실행됩니다.
[600ms]
[reassuring] 정책 항목을 보고서 전용 모드로 시작할 수 있고, What If 도구는 로그인 시뮬레이션을 통해 어떤 정책이 적용되는지 보여줍니다.

## Step 6 · Three logs, three questions

[calm] 세 개의 로그가 세 가지 다른 질문에 답합니다.
[600ms]
[confident] 로그인 로그는 누가 로그인했고 무슨 일이 있었는지 보여줍니다. 감사 로그는 누가 무엇을 변경했는지 보여줍니다.
[600ms]
[reassuring] Microsoft Purview 감사는 서비스 전반에 걸쳐 사용자 및 관리자 활동을 추적합니다. 항목은 변경하거나 삭제할 수 없으며, 필요한 역할도 로그별로 다릅니다.

## Step 7 · When a sign-in looks risky

[concerned] 때때로 로그인이 위험해 보일 수 있습니다. Microsoft Entra ID 보호는 위험한 사용자와 로그인을 표시합니다.
[600ms]
[confident] 위험을 검토한 다음 해결합니다. 사용자가 직접 해결하거나 관리자가 개입합니다.
[600ms]
[serious] 전체 기능을 사용하려면 P 2 또는 Entra Suite 라이선스 Entra ID 필요하며, 위험 보고서를 읽으려면 최소한 글로벌 리더 역할이 필요합니다.

## Step 8 · Identity Secure Score

[curious] 신원 보안 점수는 임차인이 Microsoft의 신원 보안 권고사항을 얼마나 엄격히 따르는지를 나타내는 백분율입니다.
[600ms]
[confident] 점수가 높을수록 더 많은 점수를 달성하며, 24시간마다 재계산됩니다.
[600ms]
[reflective] 일부 권장 사항은 유료 라이선스가 필요하며, 수락한 위험에는 점수가 부여되지 않습니다. 여기 나온 백분율은 설명을 위한 예시일 뿐입니다.

## Step 9 · Admin power on demand

[curious] 왜 관리자 권한을 하루 종일 켜둔 채로 두나요? 특권 신원 관리(Privileged Identity Management)는 역할이 항상 켜져 있지 않고 자격이 됩니다.
[600ms]
[confident] Mei 필요할 때만 역할을 활성화하고, 접근 권한이 만료됩니다.
[600ms]
[reassuring] MFA요구, 정당화 요청, 알림 발송, 접근 검토, 감사 기록 유지 등이 가능합니다.

## Step 10 · Two objects for every app

[calm] 모든 앱은 두 개의 객체를 가지고 있습니다. 앱 등록은 앱의 홈 테넌트에 보관된 청사진입니다.
[600ms]
[confident] 엔터프라이즈 애플리케이션은 테넌트 내 인스턴스이며, 누가 사용할 수 있는지 관리하는 곳입니다.
[600ms]
[reassuring] 앱 등록은 애플리케이션 객체와 서비스 주체를 모두 생성합니다.

## Step 11 · Which tool do I open?

[curious] 이제 당신 차례입니다. 헬프 데스크 대기열에서 증상을 하나 골라보세요.
[600ms]
[confident] 응답하는 Entra 도구가 불이 켜지고, 어디를 찾아야 하는지 함께 표시됩니다.
[600ms]
[reflective] 어떤 증상은 두 가지 도구가 필요하고, 이름도 시간이 지나면서 바뀌니 Microsoft Learn경로를 확인하세요.

## Step 12 · Know the tool, fix the problem

[calm] 증상에 맞는 Entra 도구를 고르면 티켓을 더 쉽게 해결할 수 있습니다.
[600ms]
[confident] 그 다음 측정된 A B 900 기술과 공식 Microsoft Learn 훈련과 비교해 보세요.
[600ms]
[proud] 항상 현재 학습 가이드를 읽으세요. 측정된 기술은 시간이 지남에 따라 변하기 때문입니다.
