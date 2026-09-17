# Narrator Script - 테넌트, ID 및 Azure 액세스

**Source animation:** journeys/Identity/TenantsAndIdentity.html

Delivery cues appear in brackets; pauses are on separate lines.
Generated from scripts/_identity-journeys/content.mjs.

## Step 1 · Signed in. Still denied.

[calm] 로그인했지만 액세스는 거부됩니다.
[600ms]
Maya는 로그인했지만 shop-vm 구성을 읽을 수 없습니다. 이 예에서는 다른 역할이나 거부 할당이 적용되지 않습니다.
[600ms]
[serious] VM 구성 읽기: 액세스 거부됨.

## Step 2 · Start with the tenant

[calm] 테넌트부터 살펴보기.
[600ms]
Microsoft Entra ID는 ID 서비스입니다. Contoso 테넌트는 해당 디렉터리 인스턴스입니다.
[600ms]
[serious] 테넌트는 VM 지역이 아닙니다. Entra 역할이 Azure 리소스 액세스를 자동으로 부여하지는 않습니다.

## Step 3 · People and groups live here

[calm] 사용자와 그룹.
[600ms]
Maya 사용자와 운영 보안 그룹은 디렉터리 개체입니다. 그룹 멤버 자격 자체가 리소스 권한은 아닙니다.
[600ms]
[serious] Maya는 멤버입니다. 그룹에는 아직 Azure 역할 할당이 없습니다.

## Step 4 · One directory, two subscriptions

[calm] 하나의 디렉터리, 두 구독.
[600ms]
Contoso 개발 및 프로덕션 구독은 같은 테넌트를 신뢰하며 리소스 범위는 구분됩니다.
[600ms]
[serious] 각 구독은 하나의 테넌트를 신뢰하며 여러 구독이 같은 테넌트를 사용할 수 있습니다.

## Step 5 · Authentication answers who

[calm] 인증으로 사용자 확인.
[600ms]
Microsoft Entra ID가 Maya를 인증합니다. 이것만으로 VM 구성 읽기가 허용되지는 않습니다.
[600ms]
[serious] VM 구성 읽기: 액세스 거부됨.

## Step 6 · A role permits the read

[calm] 역할로 읽기 허용.
[600ms]
권한 있는 관리자가 Operations에 shop-vm 범위의 Reader 역할을 할당하면 Maya가 구성을 읽을 수 있습니다.
[600ms]
[serious] 권한이 적용되면 읽을 수 있습니다. Reader는 게스트 OS 로그인을 허용하지 않습니다.

## Step 7 · Identity and Access - All in One

[calm] ID와 액세스 - 전체 보기.
[600ms]
테넌트는 ID를 제공하고 구독은 리소스를 구성합니다. Azure RBAC는 지정된 범위에서 작업을 허용합니다.
[600ms]
[serious] 누구: Operations의 Maya. 작업: 읽기. 범위: shop-vm.
