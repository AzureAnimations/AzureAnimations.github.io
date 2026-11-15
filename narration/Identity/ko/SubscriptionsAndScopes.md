# Narrator Script - 이건 어느 방이 내나요

**Source animation:** journeys/Identity/SubscriptionsAndScopes.html
**Script status:** Authored voiceover.

Delivery cues appear in brackets; pauses are on separate lines.
One block per on-screen step. Interactive choices are examples, not instructions to change real resources.

<!-- Reference: https://learn.microsoft.com/en-us/azure/governance/management-groups/overview -->
<!-- Reference: https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/overview -->
<!-- Reference: https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/tag-resources -->
<!-- Reference: https://learn.microsoft.com/en-us/azure/governance/policy/concepts/scope -->
<!-- Reference: https://learn.microsoft.com/en-us/azure/role-based-access-control/scope-overview -->
<!-- Reference: https://learn.microsoft.com/en-us/training/paths/az-104-manage-identities-governance/ -->

## Step 1 · One bill for the whole house

[curious] 가족은 누가 어떤 가전을 사용할 수 있는지 알게 되었지만, 비용은 여전히 하나의 공용 계정으로 청구됩니다.
[600ms]
리소스, 책임, 비용을 정리할 방법이 필요합니다. 범위는 권한이나 정책이 어디에 적용되는지 알려 줍니다.
[600ms]
[confident] 구독 하나에도 더 작은 범위가 있습니다. 같은 계정이라고 모든 리소스에 접근 권한을 줄 필요는 없습니다.

## Step 2 · Give each part of the house its own account

[calm] 구독은 사용량, 비용, 할당량을 구분해 관리할 수 있는 경계를 Contoso에 제공합니다.
[600ms]
집의 비유에서는 공용 공간과 개인 공간에 서로 다른 계정을 둡니다. ID는 여전히 테넌트에 속하며, 계정마다 새 가족을 만드는 것은 아닙니다.
[600ms]
[confident] 구독 경계는 계획적으로 정하세요. 나중에 리소스를 이동하려면 해당 리소스 종류와 이동 요구 사항이 이를 지원해야 합니다.

## Step 3 · A room for things that belong together

[calm] 리소스 그룹은 함께 관리할 리소스를 놓는 방입니다. 오븐은 주방에, TV와 스피커는 거실에 둡니다.
[600ms]
각 리소스 그룹은 하나의 구독에 속하고, 각 리소스는 하나의 리소스 그룹에 속합니다.
[600ms]
[confident] 보호 설정이나 종속성이 작업을 막지 않는다면, 그룹을 삭제할 때 그 안의 리소스도 삭제됩니다. 겉모습보다 수명 주기를 기준으로 묶으세요.

## Step 4 · Above every account sits the family

[calm] 관리 그룹은 구독 위에 있습니다. 집의 개별 계정 위에서 공통 방침을 정하는 가족과 같습니다.
[600ms]
구독과 다른 관리 그룹을 포함할 수 있어서, Contoso가 공통 규칙을 적용할 장소가 됩니다.
[600ms]
[confident] 그 아래에 놓인 구독은 적용 대상 할당을 상속합니다. 테넌트의 루트 관리 그룹이 계층의 기준점이 되어 계정들을 연결합니다.

## Step 5 · What the family decides reaches every room

[calm] 관리 그룹, 구독, 리소스 그룹, 리소스 순으로 계층을 따라 내려가 보세요.
[600ms]
위에 할당된 역할 권한은 아래에도 적용됩니다. 정책도 승인된 제외나 예외를 고려해 하위 범위에 적용됩니다.
[600ms]
[confident] 태그는 다릅니다. 자동으로 상속되지 않습니다. 모든 설정이 같은 방식으로 계층을 따라 내려간다고 생각하면 안 됩니다.

## Step 6 · Four levels — All in One

[calm] 가족, 계정, 방, 가전은 Azure 범위의 네 단계를 나타냅니다.
[600ms]
리소스 하나에 역할을 할당하면 범위가 좁지만, 위쪽에 할당하면 아래의 여러 리소스에 적용될 수 있습니다.
[600ms]
[confident] 목적에 맞는 가장 작은 범위를 선택하세요. 다음에는 같은 계층을 권한뿐 아니라 리소스 규칙과 지출 알림에도 사용합니다.

## Step 7 · The Contoso estate, end to end

[confident] 전체 환경 그림에서는 집의 비유를 실제 이름으로 바꿉니다. 테넌트 하나, 관리 그룹 하나, 환경별 구독 다섯 개입니다.
[600ms]
각 리소스 그룹에는 해당 환경의 가상 머신, 클러스터, 데이터베이스, 네트워크가 있습니다. 구독마다 부모는 하나입니다.
[600ms]
[confident] 공통 정책이나 접근 권한을 관리 그룹에 할당하면, 나중에 추가되는 구독을 포함해 아래의 구독들이 적용 대상 할당을 상속합니다.
