# Narrator Script - 테넌트는 집입니다

**Source animation:** journeys/Identity/TenantsAndIdentity.html
**Script status:** Authored voiceover.

Delivery cues appear in brackets; pauses are on separate lines.
One block per on-screen step. Interactive choices are examples, not instructions to change real resources.

<!-- Reference: https://learn.microsoft.com/en-us/training/paths/az-104-manage-identities-governance/ -->
<!-- Reference: https://learn.microsoft.com/en-us/entra/fundamentals/add-custom-domain -->
<!-- Reference: https://learn.microsoft.com/en-us/azure/role-based-access-control/rbac-and-directory-admin-roles -->
<!-- Reference: https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/concept-understand-roles -->
<!-- Reference: https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/custom-overview -->

## Step 1 · One key opens everything

[curious] Contoso가 이사한 집에서는 모두가 열쇠 하나를 공유합니다. Mia도 오븐을 켤 수 있죠.
[600ms]
이는 접근 권한을 구분하지 않는 상황을 보여 주는 비유이며, 권장하는 로그인 방식이 아닙니다.
[600ms]
[confident] 사람마다 별도의 ID를 만들고, 각자 해야 할 일에 맞는 권한을 부여해야 합니다.

## Step 2 · The house is your tenant

[calm] 이 집을 Contoso의 Microsoft Entra 테넌트, 즉 독립된 ID 디렉터리라고 생각해 보세요.
[600ms]
가족은 이곳에 속하지만, 이웃을 가족 구성원으로 만들지 않고도 초대할 수 있습니다.
[600ms]
[confident] 테넌트는 ID를 관리하는 공간입니다. 테넌트에 속한다고 모든 Azure 리소스에 자동으로 접근할 수 있는 것은 아닙니다.

## Step 3 · Every house needs an address

[calm] 집에는 처음부터 Contoso 점 on Microsoft 점 com이라는 주소가 있습니다.
[600ms]
DNS 레코드로 Contoso 점 com의 소유권을 확인하면, 이 사용자 지정 도메인을 로그인 이름에 사용할 수 있습니다.
[600ms]
[confident] 원래 도메인은 그대로 남습니다. 대문에 붙인 이름이 바뀌어도 내부 권한까지 바뀌지는 않습니다.

## Step 4 · Who lives here

[calm] 아빠, 엄마, Noah와 Mia에게는 각자의 사용자 ID가 필요합니다.
[600ms]
어른들과 아이들을 그룹으로 묶으면, 사람마다 따로 관리하지 않고 그룹에 접근 권한을 할당할 수 있습니다.
[600ms]
[confident] 그룹은 구성원 목록입니다. 무엇에 접근할 수 있는지는 그 그룹에 할당된 권한이 결정합니다.

## Step 5 · House rules run the house

[calm] Microsoft Entra 역할은 집을 관리하는 열쇠 꾸러미입니다. 사용자 관리처럼 디렉터리의 특정 작업을 허용합니다.
[600ms]
이 예제에서 아빠는 전역 관리자이고, 엄마는 사용자 관리자입니다.
[600ms]
[confident] 두 역할은 같은 일을 하지 않습니다. 도와주는 사람 모두에게 집 전체를 맡기지 말고, 작업에 필요한 최소 권한의 역할과 지원되는 범위를 선택하세요.

## Step 6 · Appliance keys are a second keyring

[calm] 이제 가전을 보세요. Azure 리소스를 나타내며, 별도의 권한 꾸러미인 Azure 역할 기반 액세스 제어로 관리합니다.
[600ms]
Entra 관리자라고 해서 이러한 리소스도 자동으로 관리할 수 있는 것은 아닙니다.
[600ms]
[confident] Azure 역할 할당은 누구에게, 어떤 역할을, 어디에서 부여할지 정합니다. 두 권한 체계는 기본적으로 별개입니다.

## Step 7 · The whole house — All in One

[calm] 세 가지 질문을 기억하세요. 누가 속해 있고, 무엇을 할 수 있으며, 그 권한은 어디에 적용될까요?
[600ms]
첫 번째 답은 사용자와 그룹입니다. Entra 역할과 Azure 리소스 역할은 서로 다른 관리 대상에 대해 두 번째 질문에 답합니다.
[600ms]
[confident] 세 번째 답은 범위입니다. 다음에는 ID 하나를 공유하는 대신 가족 명부를 만듭니다.

## Step 8 · The same house, in the Azure portal

[confident] 위쪽에는 아빠와 엄마, 각자의 Entra 역할, 그리고 그 역할이 적용되는 테넌트가 있습니다.
[600ms]
아래쪽에서는 어른들 그룹에 스토리지 계정의 Storage Blob Data Reader를, Noah에게 가상 머신의 Virtual Machine Contributor를 할당합니다.
[600ms]
[confident] 각 할당은 해당 범위 안에서 역할이 허용하는 작업만 제공합니다. 디렉터리 역할은 Azure 리소스 권한과 다릅니다.
