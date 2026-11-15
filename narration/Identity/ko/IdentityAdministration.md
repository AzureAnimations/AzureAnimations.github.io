# Narrator Script - 집을 운영하기

**Source animation:** journeys/Identity/IdentityAdministration.html
**Script status:** Authored voiceover.

Delivery cues appear in brackets; pauses are on separate lines.
One block per on-screen step. Interactive choices are examples, not instructions to change real resources.

<!-- Reference: https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/delegate-by-task -->
<!-- Reference: https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/permissions-reference#authentication-administrator -->
<!-- Reference: https://learn.microsoft.com/en-us/entra/identity/authentication/concept-sspr-licensing -->
<!-- Reference: https://learn.microsoft.com/en-us/entra/identity/authentication/concept-sspr-howitworks -->
<!-- Reference: https://learn.microsoft.com/en-us/microsoft-365/admin/manage/assign-licenses-to-users -->

## Step 1 · Three favours, three different jobs

[curious] Mia에게 세 가지 도움이 필요합니다. 암호 재설정, 제품 라이선스 할당, 복구 방법 업데이트입니다.
[600ms]
도와주는 담당자는 Mia와 다른 사람이며, 자신의 관리 권한을 가지고 있습니다.
[600ms]
[confident] 이 예제의 Mia는 특권 역할이 없는 클라우드 전용 사용자입니다. 담당자에게 테넌트 전체의 통제권을 주지 않고도 업무를 위임할 수 있습니다.

## Step 2 · Hand over one chore, not the house

[calm] 담당자의 역할을 작업에 맞추세요. 관리자가 아닌 Mia의 암호를 재설정할 때는 암호 관리자가 더 제한적인 선택입니다.
[600ms]
라이선스 관리자는 라이선스 할당을 처리하고, 인증 관리자는 지원되는 인증 방법 관리 작업을 수행할 수 있습니다.
[600ms]
[confident] 작업을 다르게 선택해도 담당자의 역할은 바뀌지 않습니다. 실제 역할 할당이 Mia에 대한 해당 작업을 허용해야 합니다.

## Step 3 · A seat at the table has to exist

[calm] 제품 라이선스는 사용할 수 있는 좌석입니다. 빈 좌석이 있어야 하고, Mia에게 할당해야 합니다.
[600ms]
담당자에게 권한이 있어야 하며, 계정도 유효한 사용 위치 같은 조건을 충족해야 합니다. 좌석을 구매하는 것만으로 할당되지는 않습니다.
[600ms]
[confident] 할당 오류는 원인을 조사하고 다시 시도해야 합니다. Microsoft 365 라이선스가 Azure 리소스 역할을 부여하는 것도 아닙니다.

## Step 4 · Register the spare key before you need it

[calm] Mia가 암호를 잊기 전에 복구 방법을 준비해 두는 것이 좋습니다.
[600ms]
Contoso의 예제 정책은 이메일과 휴대폰을 허용하며 두 가지 방법을 등록하도록 요구합니다. 이 수는 예제의 선택이지 모든 환경의 기본값이 아닙니다.
[600ms]
[confident] 등록은 복구 정보를 저장하는 과정입니다. 나중의 재설정 요청이 실제로 Mia에게서 왔다는 증명은 아닙니다.

## Step 5 · Prove it is you, then cut a new key

[calm] 이제 Mia가 잊어버린 암호를 재설정하려 합니다. 대상 사용자여야 하고, 방법이 등록되어 있으며, 필요한 확인을 성공적으로 마쳐야 합니다.
[600ms]
그 후에야 정책에 맞는 새 암호를 선택할 수 있습니다. 이 데모는 실제 암호를 입력받지 않습니다.
[600ms]
[confident] Business Standard는 이 클라우드 전용 재설정을 지원합니다. 하이브리드 암호 쓰기 저장에는 추가 라이선스와 구성 조건이 필요합니다.

## Step 6 · Help out without holding every key

[calm] 네 가지 일을 구분하세요. 역할은 담당자에게 권한을 주고, 라이선스는 서비스를 활성화하며, 등록은 복구를 준비하고, 확인은 본인임을 증명합니다.
[600ms]
하나가 있다고 나머지까지 보장되지는 않습니다. 라이선스가 신원 확인을 대신할 수는 없습니다.
[600ms]
[confident] 이 화면은 검사 과정을 설명할 뿐, 실제 계정을 변경하지 않습니다. 불필요한 특권 없이 유용한 업무를 위임하는 것이 목적입니다.

## Step 7 · Running the house, in Microsoft Entra ID

[confident] 위쪽은 담당자의 암호 및 라이선스 역할과, 셀프 서비스로 자신의 암호를 재설정하는 Mia를 보여 줍니다.
[600ms]
아래쪽에서 담당자는 처음에 Azure 리소스 권한이 없습니다. 별도의 Reader 할당 후에 매장 가상 머신의 구성을 조회할 수 있습니다.
[600ms]
[confident] 디렉터리 관리, 제품 라이선스, Azure 리소스 접근은 서로 다른 책임입니다.
