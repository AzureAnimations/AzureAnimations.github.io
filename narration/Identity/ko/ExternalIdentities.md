# Narrator Script - 손님방

**Source animation:** journeys/Identity/ExternalIdentities.html
**Script status:** Authored voiceover.

Delivery cues appear in brackets; pauses are on separate lines.
One block per on-screen step. Interactive choices are examples, not instructions to change real resources.

<!-- Reference: https://learn.microsoft.com/en-us/entra/external-id/user-properties -->
<!-- Reference: https://learn.microsoft.com/en-us/entra/external-id/redemption-experience -->
<!-- Reference: https://learn.microsoft.com/en-us/entra/external-id/tenant-configurations -->
<!-- Reference: https://learn.microsoft.com/en-us/azure/role-based-access-control/role-assignments-external-users -->
<!-- Reference: https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles/general -->
<!-- Reference: https://learn.microsoft.com/en-us/entra/external-id/cross-tenant-access-overview -->

## Step 1 · The neighbour who needs to help

[curious] Alex는 Partner에서 일하며 그곳의 로그인 ID를 이미 가지고 있습니다. Contoso는 매장 가상 머신을 살펴볼 도움이 필요합니다.
[600ms]
가족 계정을 공유하거나 Alex의 암호를 Contoso로 복사해서는 안 됩니다.
[600ms]
[confident] 기업 간 협업을 이용하면 기존 ID를 초대하고, 업무에 필요한 접근 권한만 부여할 수 있습니다.

## Step 2 · Invite Alex over

[calm] 초대 권한이 있는 담당자가 Contoso 디렉터리에 Alex의 게스트 기록을 만듭니다.
[600ms]
초대는 아직 보류 중입니다. 게스트 기록은 있지만, Alex가 자신의 홈 ID로 수락하지 않은 상태입니다.
[600ms]
[confident] 암호는 복사되지 않습니다. 초대 제한과 테넌트 간 접근 설정도 계속 적용되므로, 아무 조건 없이 열린 문은 아닙니다.

## Step 3 · Alex accepts, using their own key

[calm] Alex는 Partner ID로 로그인하고 필요한 동의를 완료해 초대를 수락합니다.
[600ms]
이 과정에서 초대가 실제로 사용할 사람과 연결됩니다.
[600ms]
[confident] 수락은 리소스 권한이 아닙니다. Alex가 어떤 리소스에 접근하고 무엇을 할 수 있는지는 Contoso가 따로 정해야 합니다.

## Step 4 · One person, two house registers

[calm] 한 사람이 두 디렉터리에 나타납니다. Partner에는 홈 ID가 있고, Contoso에는 게스트 개체가 있습니다.
[600ms]
게스트와 멤버는 관계와 기본 디렉터리 권한을 나타내며, 자격 증명의 출처를 뜻하지 않습니다.
[600ms]
[confident] 이 이름표를 바꿔도 Alex의 ID가 Contoso로 이동하거나 그곳에 새 암호가 생기지는 않습니다.

## Step 5 · Access exactly one appliance

[calm] Contoso는 매장 가상 머신 하나만 범위로 정해 Alex에게 Reader를 할당합니다.
[600ms]
로그인 검사를 통과하고 권한 변경이 반영되면 구성을 조회할 수 있지만, Reader로 삭제할 수는 없습니다.
[600ms]
[confident] 이 역할은 운영 체제 로그인이나 데이터 접근도 허용하지 않습니다. 할당을 제거하면 이 권한이 사라질 뿐, 게스트 기록은 남습니다.

## Step 6 · A guest, not a resident

[calm] 세 요소를 구분하세요. Partner는 Alex의 신원을 확인하고, Contoso는 게스트 기록을 보관하며, 범위가 정해진 역할은 리소스 접근을 허용합니다.
[600ms]
이는 Contoso의 인력 테넌트에서 이루어지는 협업입니다.
[600ms]
[confident] 고객 가입을 위한 외부 테넌트는 다른 시나리오입니다. 동료를 초대한다고 이 디렉터리가 고객용 ID 시스템으로 바뀌지는 않습니다.

## Step 7 · The guest, in Microsoft Entra ID

[confident] Alex의 홈 디렉터리에서 게스트 개체를 거쳐 가상 머신의 Reader 할당까지 그림을 따라가 보세요.
[600ms]
암호는 Partner에 남습니다. Partner의 다단계 인증 결과를 Contoso가 신뢰할지는 테넌트 간 신뢰 설정에 달려 있습니다.
[600ms]
[confident] 마지막 두 행은 허용되는 구성 조회와 거부되는 삭제를 비교합니다. 초대받았다는 것이 모든 작업을 허용받았다는 뜻은 아닙니다.
