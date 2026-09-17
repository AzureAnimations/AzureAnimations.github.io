# Narrator Script - 인증 및 액세스

**Source animation:** journeys/Identity/Authentication.html

Delivery cues appear in brackets; pauses are on separate lines.
Generated from scripts/_identity-journeys/authentication.mjs.

## Step 1 · Two apps. Repeated sign-ins.

[calm] 두 앱, 반복되는 로그인.
[600ms]
Maya가 주문 앱과 Azure 관리 화면을 엽니다. 별도 로그인 요청이 작업을 중단시킵니다. 로그인 성공만으로 수행 가능한 작업이 정해지지는 않습니다.
[600ms]
[serious] 두 앱은 별도 진입점입니다. 인증은 ID를 확인하며 각 서비스는 자체 권한을 관리합니다.

## Step 2 · Reuse an eligible session

[calm] 사용 가능한 세션 재사용.
[600ms]
Microsoft Entra SSO를 사용하면 호환 앱이 Maya의 로그인 세션을 재사용합니다. 반복 요청은 줄지만 액세스 정책 요구 사항은 유지됩니다.
[600ms]
[serious] 세션 재사용에는 앱 통합과 유효한 세션이 필요합니다. 새 요구, 만료 또는 정책 검사로 다시 요청될 수 있습니다.

## Step 3 · Compare the authentication evidence

[calm] 인증 증거 비교.
[600ms]
암호는 하나의 요소입니다. 암호와 Authenticator를 조합하면 다른 요소가 추가됩니다. PIN으로 잠금 해제하는 FIDO2 키는 암호 없이 MFA를 충족할 수 있습니다.
[600ms]
[serious] 방법이 사용 설정되고 등록되어야 합니다. 암호 없는 인증과 MFA는 겹칠 수 있으며 암호 두 개는 서로 다른 요소가 아닙니다.

## Step 4 · Evaluate the required strength

[calm] 필요한 인증 강도 평가.
[600ms]
초기 인증 후 Contoso의 가상 규칙은 사내에서 MFA, 원격에서 피싱 방지 MFA를 요구합니다. 기존 세션의 인증 증거도 해당 요구를 충족해야 합니다.
[600ms]
[serious] Azure 기본값이 아닌 예제 규칙입니다. 조건부 액세스에는 Entra ID P1 또는 포함 라이선스가 필요하고 위험 기반 정책에는 P2가 필요합니다.

## Step 5 · Check the resource permission too

[calm] 리소스 권한도 확인.
[600ms]
로그인 정책을 충족해도 Azure 역할은 할당되지 않습니다. 이 제한된 예제에서 구성을 읽으려면 shop-vm 범위의 Reader가 필요합니다.
[600ms]
[serious] 다른 역할이나 거부 할당이 없고 전파가 완료되었다고 가정합니다. Reader는 제어 평면 읽기만 허용하며 수정, VM 로그인, 데이터 액세스는 허용하지 않습니다.

## Step 6 · Session, method, policy, permission

[calm] 세션, 방법, 정책, 권한.
[600ms]
SSO는 세션을 재사용하고 인증은 증거를 제공합니다. 조건부 액세스는 요구를 확인하며 Azure RBAC는 리소스 권한을 부여합니다. 서로를 대체하지 않습니다.
[600ms]
[serious] 사내 위치만으로 보안을 보장하지 않습니다. 실제로는 필요한 신호와 적용되는 모든 정책을 고려합니다. 이 예제는 범위를 제한합니다.
