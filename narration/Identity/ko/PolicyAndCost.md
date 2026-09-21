# Narrator Script - 돈에 관한 집안 규칙

**Source animation:** journeys/Identity/PolicyAndCost.html
**Script status:** Authored voiceover.

Delivery cues appear in brackets; pauses are on separate lines.
One block per on-screen step. Interactive choices are examples, not instructions to change real resources.

<!-- Reference: https://learn.microsoft.com/en-us/azure/governance/policy/overview -->
<!-- Reference: https://learn.microsoft.com/en-us/azure/governance/policy/concepts/effect-basics -->
<!-- Reference: https://learn.microsoft.com/en-us/azure/governance/policy/concepts/scope -->
<!-- Reference: https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/lock-resources -->
<!-- Reference: https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/tutorial-acm-create-budgets -->

## Step 1 · Nobody said no

[curious] Mia는 자기 방에 들어갈 수 있고 가전을 주문할 권한도 있습니다. 하지만 게임 콘솔이 부적절하다는 규칙은 아직 없습니다.
[600ms]
행동할 권한과 리소스에 적용할 규칙은 다른 질문입니다.
[600ms]
[confident] Azure 역할은 누가 행동할지, 조건부 액세스는 로그인 요구 사항을, Azure Policy는 리소스 규정 준수를 확인합니다. 이 세 책임을 명확히 구분해야 합니다.

## Step 2 · Write the rule, then choose where it lands

[calm] 먼저 정책 정의로 규칙을 작성합니다. 그다음 어디에 적용할지 정하는 할당을 만듭니다.
[600ms]
여기서 범위는 리소스 그룹에 해당하는 Mia의 방입니다. 아빠의 작업실은 이번 할당에 포함되지 않습니다.
[600ms]
[confident] 정의를 저장하는 것만으로 적용되지는 않습니다. 할당이 재사용할 규칙, 설정, 평가할 리소스를 연결합니다.

## Step 3 · Stopped, or just written down?

[calm] 평가 대상 요청이 규칙을 어겼을 때 어떤 일이 일어날지는 효과가 결정합니다.
[600ms]
Deny는 요청을 거부하고, Audit은 허용하되 비준수를 기록합니다. Owner 권한도 적용 중인 Deny 정책을 우회하지 못합니다.
[600ms]
[confident] 문제를 관찰하는 것과 차단하는 것은 다릅니다. 어느 쪽도 기존 리소스가 모두 자동으로 복구되었다는 뜻은 아닙니다.

## Step 4 · One rule is not a standard

[calm] 집안 표준에는 여러 규칙이 필요할 수 있습니다. 이니셔티브는 정책 정의들을 하나의 규칙집으로 묶습니다.
[600ms]
그림에서는 정의가 책 안에 있고, 할당은 밖에 있습니다.
[600ms]
[confident] 이니셔티브를 범위에 할당하면 규칙들을 함께 평가합니다. 정의를 묶는 일과 적용할 곳을 정하는 일은 서로 다릅니다.

## Step 5 · Label the receipt, then monitor spending

[calm] 아빠는 콘솔을 살 수 있지만, Contoso는 누구의 비용인지와 지출이 언제 늘어나는지도 알아야 합니다.
[600ms]
소유자 태그는 비용의 담당자를 나타냅니다. 이 예제의 예산은 팔십 퍼센트에서 알림을 보내지만, 구매를 막거나 리소스를 끄지는 않습니다.
[600ms]
[confident] 예산 평가는 즉시 이루어지지 않으며, 태그도 자동으로 상속되지 않습니다.

## Step 6 · Protect an existing resource

[calm] 보일러는 실수로 변경하면 안 되는 기존 리소스를 나타냅니다. ReadOnly 잠금이 유지되는 동안에는 Owner라도 제어 평면의 업데이트와 삭제가 제한됩니다.
[600ms]
CanNotDelete 잠금은 삭제를 막지만 업데이트는 허용합니다.
[600ms]
[confident] 이 잠금은 데이터 평면을 보호하지 않습니다. 권한이 있는 사람은 잠금을 제거할 수 있으므로, 절대 열리지 않는 금고가 아니라 변경을 막는 보호 장치입니다.

## Step 7 · Keyrings, rules, locks — All in One

[calm] 제어 수단을 나란히 비교하세요. 역할은 작업을 허용하고, 정책은 리소스 규칙을 평가하며, 잠금은 기존 리소스의 변경을 제한합니다.
[600ms]
태그는 담당자를 식별하고 예산은 지출을 알립니다. 예산은 소비를 중단시키는 한도가 아닙니다.
[600ms]
[confident] 각 수단이 실제로 하는 일에 맞게 선택하세요. 어느 하나도 나머지를 대신하지 않습니다.

## Step 8 · How it really looks in Azure

[confident] 마지막 그림은 Contoso 관리 그룹에서 재사용 가능한 정책 정의를 이니셔티브로 묶은 모습을 보여 줍니다.
[600ms]
한 할당은 두 구독에 적용됩니다. 다른 할당은 리소스 그룹 하나에 더 엄격한 요구 사항을 추가합니다.
[600ms]
[confident] 정의는 규칙을 설명하고, 할당은 범위를 선택합니다. 이 구분을 통해 ID, 권한, 비용 알림을 혼동하지 않고 환경을 관리할 수 있습니다.
