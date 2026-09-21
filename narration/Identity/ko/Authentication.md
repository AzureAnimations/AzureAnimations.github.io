# Narrator Script - 현관문

**Source animation:** journeys/Identity/Authentication.html
**Script status:** Authored voiceover.

Delivery cues appear in brackets; pauses are on separate lines.
One block per on-screen step. Interactive choices are examples, not instructions to change real resources.

<!-- Reference: https://learn.microsoft.com/en-us/entra/identity/authentication/concept-authentication-strengths -->
<!-- Reference: https://learn.microsoft.com/en-us/entra/identity/conditional-access/overview -->
<!-- Reference: https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/what-is-single-sign-on -->
<!-- Reference: https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles/general -->
<!-- Reference: https://learn.microsoft.com/en-us/entra/identity/authentication/concept-authentication-passkeys-fido2 -->

## Step 1 · Unlocking the same door twice

[curious] 엄마가 주문 앱을 연 다음 Azure 관리 화면을 열자, 다시 로그인하라는 요청이 나타납니다.
[600ms]
두 진입점 모두 신원을 확인해야 하지만, 암호를 다시 입력한다고 각 서비스에서 할 수 있는 일이 정해지지는 않습니다.
[600ms]
[confident] 인증은 신원을 증명합니다. 권한 부여는 그 ID가 수행할 수 있는 작업을 결정합니다.

## Step 2 · Reuse an eligible session

[calm] 앱이 지원한다면 Single Sign-On으로 엄마의 유효한 세션을 재사용할 수 있습니다.
[600ms]
앱의 권한 검사를 없애지 않으면서 다시 로그인하는 수고를 줄이는 것이죠.
[600ms]
[confident] 세션이 만료되거나 새 정책 요구 사항이 생기면 다시 인증을 요청할 수 있습니다. 재사용 조건을 만족할 때 이용하는 것이지, 영원히 확인하지 않는다는 약속은 아닙니다.

## Step 3 · Not every key is equally convincing

[calm] 엄마가 제시할 수 있는 증거를 비교해 보세요. 암호, 암호와 Authenticator, 또는 PIN으로 잠금을 해제하는 FIDO 투 보안 키입니다.
[600ms]
보안 키는 소유와 로컬 확인을 결합하므로, 암호 없는 인증이면서 다단계 인증일 수 있습니다.
[600ms]
[confident] 인증 방법은 사용하도록 설정하고 등록해야 합니다. 암호 두 개를 쓴다고 서로 다른 두 종류의 인증 요소가 되지는 않습니다.

## Step 4 · A doorbell that decides how hard to check

[calm] 조건부 액세스는 상황을 확인하고 이번 로그인에 필요한 증거를 정합니다.
[600ms]
Contoso의 예제에서는 사무실에서 다단계 인증을 허용하고, 카페에서는 피싱 방지 인증을 요구합니다. Azure 기본값이 아니라 예제의 정책입니다.
[600ms]
[confident] 사무실이라고 무조건 안전한 것은 아닙니다. 실제 정책은 관련 신호를 고려하며, 적절한 Entra 라이선스도 필요합니다.

## Step 5 · Getting in is not the same as being allowed

[calm] 엄마가 로그인 검사를 통과했지만, 가상 머신은 다른 질문을 합니다. 여기에서 무엇을 할 수 있을까요?
[600ms]
이 범위에 Reader를 할당하면 머신의 구성을 조회할 수 있습니다.
[600ms]
[confident] 변경, 운영 체제 로그인, 데이터 접근은 허용되지 않습니다. 현관을 통과했다고 가전 열쇠 꾸러미까지 받는 것은 아닙니다.

## Step 6 · Session, proof, policy, permission

[calm] 이제 네 가지 계층이 함께 작동합니다. 재사용 가능한 세션, 인증 방법, 조건부 액세스 요구 사항, 그리고 리소스 권한입니다.
[600ms]
하나를 바꾼다고 나머지를 대체하지는 않습니다. 더 강한 신원 증명이 역할 할당을 만들어 주지도 않습니다.
[600ms]
[confident] 로그인 계층으로 신뢰를 확인하고, 범위가 정해진 권한 부여로 그 ID가 할 수 있는 작업을 제한하세요.

## Step 7 · The front door, in Microsoft Entra ID

[confident] 위쪽은 엄마의 FIDO 투 키, 조건부 액세스, 그리고 조건이 맞을 때 두 앱 사이에서 재사용되는 Single Sign-On을 연결합니다.
[600ms]
아래쪽은 매장 가상 머신에 별도로 할당한 Reader와, 아무 역할도 할당하지 않은 스토리지 계정을 보여 줍니다.
[600ms]
[confident] 같은 로그인 사용자라도 리소스에 따라 결과가 다릅니다. 신원 증명과 권한은 여전히 별개의 결정입니다.
