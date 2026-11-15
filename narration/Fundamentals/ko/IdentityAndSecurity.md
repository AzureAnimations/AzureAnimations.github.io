# 내레이션 대본 - ID와 보안

**Source animation:** journeys/Fundamentals/IdentityAndSecurity.html
**Script status:** Authored voiceover.
**Language:** 한국어

대괄호 안의 내용은 읽지 않는 연출 지시입니다. 쉼 표시는 별도 줄에 둡니다. 각 블록은 애니메이션 한 단계에 대응합니다.
<!-- Sources: https://learn.microsoft.com/azure/role-based-access-control/overview ; https://learn.microsoft.com/security/zero-trust/zero-trust-overview ; https://learn.microsoft.com/azure/security/fundamentals/management-monitoring-overview -->

## Step 1 · Who are you, and what may you do?

[calm] Maya는 프로덕션 매장을 확인해야 하지만 변경할 필요는 없습니다. 접근을 허용하기 전에 누구인지, 요청한 작업이 허용되는지를 확인해야 합니다.
[600ms]
[confident] 두 질문은 다릅니다. 인증은 신원을 확인하고, 권한 부여는 접근을 결정합니다. 로그인에 성공해도 모든 작업을 할 수 있는 것은 아닙니다.

## Step 2 · The directory holds the identities

[calm] Microsoft Entra ID는 사용자, 그룹, 앱 ID를 담는 Contoso의 ID 디렉터리입니다. Maya는 리소스마다 무관한 계정을 만드는 대신, 조직에서 관리하는 ID를 가집니다.
[600ms]
[confident] 디렉터리는 누가 요청하는지 확인하도록 돕습니다. 그 ID가 Azure 리소스에서 무엇을 할 수 있는지는 적절한 권한으로 제어합니다.

## Step 3 · Prove who is asking

[calm] Maya가 로그인하며 신원을 증명합니다. 다단계 인증은 서로 다른 종류의 증명을 사용하고, Single Sign-On은 연결된 앱에서 반복 로그인을 줄여 줍니다.
[600ms]
[confident] 암호 없는 인증도 선택할 수 있습니다. 인증에 성공한 뒤에도, Maya가 요청한 작업을 할 수 있는지는 따로 평가해야 합니다.

## Step 4 · Check the sign-in conditions

[calm] 모든 로그인 시도의 상황이 같지는 않습니다. 조건부 액세스는 접근 시도의 신호를 바탕으로, 다단계 인증을 요구하는 등의 조건을 적용합니다.
[600ms]
[confident] 조건을 충족하면 진입을 보호하는 데 도움이 됩니다. 그러나 접근한 뒤 Maya가 할 수 있는 일을 결정하는 권한을 대신하지는 않습니다.

## Step 5 · Then allow the action

[calm] Contoso는 프로덕션 리소스 그룹에 Maya의 읽기 권한자 역할을 할당합니다. 역할은 허용된 작업을, 범위는 그 작업이 적용되는 위치를 정합니다.
[600ms]
[confident] 리소스를 확인할 수 있지만, 이 역할은 변경 권한을 주지 않습니다. 리소스 설정을 읽는다고 그 안의 모든 고객 데이터까지 자동으로 읽는 것도 아닙니다.

## Step 6 · Same person, different actions

[calm] Maya의 ID는 그대로지만, 요청하는 작업이 중요합니다. 읽기 권한자는 설정 확인을 허용하지만, 수정 권한은 주지 않습니다.
[600ms]
[confident] 이 예에서는 다른 역할이 추가 권한을 주지 않는다고 가정합니다. 권한은 합쳐질 수 있으므로, 읽기 권한자를 할당해도 기존 권한이 취소되지는 않습니다.

## Step 7 · Assume nothing is safe by default

[calm] 제로 트러스트는 명시적으로 검증하고, 필요한 최소 권한만 사용하며, 침해 가능성을 가정하는 것입니다. 네트워크 내부라는 이유만으로 요청을 신뢰하지 않습니다.
[600ms]
[confident] Contoso는 여러 겹의 보호를 적용합니다. 한 통제가 실패해도 매장 전체가 노출되지 않도록 하기 위해서입니다.

## Step 8 · Keep checking the security posture

[calm] 권한을 설정했다고 보안 업무가 끝나지는 않습니다. Microsoft Defender for Cloud는 보안 태세 점검과 권장 사항 확인, 활성화한 보호 기능을 통한 위협 식별을 돕습니다.
[600ms]
[confident] 팀은 경고를 조사하고 개선해야 합니다. 권장 사항은 검토할 작업을 알려 주는 것이지, 문제가 이미 해결됐다는 뜻은 아닙니다.

## Step 9 · Identity and Security - All in One

[calm] Maya의 흐름을 따라가 보세요. ID를 마련하고, 로그인을 검증하고, 접근 조건을 적용한 다음, 올바른 범위에서 요청한 작업을 허가합니다. 여러 겹의 보호도 계속 유지하고 검토합니다.
[600ms]
[confident] Contoso는 이제 의도적으로 접근을 관리할 수 있습니다. 다음은 매장 비용도 같은 수준으로 명확히 파악할 차례입니다.