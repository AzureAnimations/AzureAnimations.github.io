# Narrator Script — Security · Custom roles and least privilege in Azure and Microsoft Entra — Azure Security Journey

**Source animation:** [CustomRolesAndLeastPrivilege.html](../../../journeys/Security/CustomRolesAndLeastPrivilege.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/role-based-access-control/custom-roles>
- <https://learn.microsoft.com/azure/role-based-access-control/role-definitions>
- <https://learn.microsoft.com/entra/identity/role-based-access-control/custom-overview>
- <https://learn.microsoft.com/azure/role-based-access-control/rbac-and-directory-admin-roles>

---

## Step 1 · Contributor is too much, Reader is too little

[curious] Contoso 헬프 데스크의 Sam을 만나 보세요. Sam은 가상 머신을 보고 다시 시작할 수만 있으면 됩니다. 그 이상은 필요 없습니다.
[600ms]
[serious] Reader는 아무것도 다시 시작할 수 없습니다. Contributor는 다시 시작할 수 있지만, 거의 모든 것을 만들고 삭제할 수도 있습니다.
[600ms]
[confident] 업무에 맞는 기본 제공 역할이 없다면, 답은 사용자 지정 역할입니다.

## Step 2 · What is inside an Azure role

[calm] 역할 정의는 권한 목록일 뿐입니다. 무엇을 허용하는지, 무엇을 빼는지, 어떤 데이터에 접근하는지, 어디에 할당할 수 있는지가 담겨 있습니다.
[600ms]
[curious] Contributor를 보겠습니다. 와일드카드로 전부 허용한 다음, 그 안에서 짧은 목록을 빼는 구조입니다.
[600ms]
[serious] 이렇게 빼는 건 거부가 아닙니다. 다른 역할이 같은 작업을 허용하면, 그 사람은 여전히 할 수 있습니다.

## Step 3 · Build a custom role from a built-in one

[confident] 가장 쉬운 시작은 가장 가까운 기본 제공 역할을 복제하는 것입니다. 포털에서는 처음부터 만들거나 JSON으로 시작할 수도 있습니다.
[600ms]
[calm] Sam에게 필요한 것만 남기고 줄인 다음, 작업 두 개를 추가하고, 할당할 수 있는 범위를 제한합니다. 네 번 고치면 Contoso VM Operator가 완성됩니다.
[600ms]
[serious] 가능하면 작업을 하나하나 명시해서 나열하세요. 와일드카드는 나중에 추가되는 작업까지 허용하기 때문입니다.

## Step 4 · Test the role at one scope

[calm] 이제 리소스 그룹 하나에 이 역할을 Sam에게 할당하고, Sam으로 로그인해서 써 보세요.
[600ms]
[curious] 할당한 곳에서는 되고, 그 밖에서는 안 되어야 합니다. 할당은 사람, 역할, 범위를 하나로 묶고, 그 아래 모든 것에 적용됩니다.
[600ms]
[reassuring] 액세스 확인 탭에서는 어떤 범위에서 그 사람이 무엇을 할 수 있는지 볼 수 있습니다. 역할이 이상하게 동작하면 수정하고 다시 테스트하세요.

## Step 5 · Custom roles in Microsoft Entra ID

[calm] Microsoft Entra에도 사용자 지정 역할이 있습니다. 테넌트의 앱 등록 같은 Entra 리소스를 관리하는 역할입니다.
[600ms]
[curious] 미리 정해진 목록에서 권한을 고르고, 테넌트나 앱 범위에 할당합니다. 이 목록에는 엔터프라이즈 애플리케이션, 동의, 디바이스, 사용자, 그룹 같은 항목이 있습니다.
[600ms]
[serious] Premium 라이선스가 필요하고, 최소한 Privileged Role Administrator 역할이 있어야 합니다. 그리고 이런 할당은 Azure CLI로는 지원되지 않습니다.

## Step 6 · Azure roles vs Entra roles: which plane?

[curious] 시스템이 둘이니 권한 집합도 둘입니다. Azure 역할은 Azure Resource Manager를 통해 Azure 리소스를 관리합니다.
[600ms]
[calm] Entra 역할은 Microsoft Graph를 통해 Entra 리소스를 관리합니다. 기본적으로 둘은 겹치지 않고, 사용자 지정 역할 하나에 두 권한을 섞을 수도 없습니다.
[600ms]
[serious] 알아 둘 예외가 하나 있습니다. Global Administrator는 Azure 리소스 액세스 관리를 켜서, 모든 구독에서 User Access Administrator 권한을 얻을 수 있습니다.

## Step 7 · Find overprivileged assignments

[calm] 가장 큰 권한을 가진 곳부터 보세요. 소유자, 넓은 범위, 그리고 아무도 쓰지 않는 계정입니다.
[600ms]
[curious] Contoso는 액세스 제어에서 역할 할당 목록을 보고 위험 신호를 찾습니다. 범위별로 보려면 권한 있는 역할 탭이 도움이 됩니다.
[600ms]
[confident] Defender for Cloud 권장 사항과 Privileged Identity Management의 액세스 검토를 보면, 과한 권한을 더 찾을 수 있습니다.

## Step 8 · Replace broad access with narrow access

[calm] 권한이 과한 할당을 고칠 때는 안전한 순서를 따르세요. 먼저 범위가 좁은 할당을 추가합니다.
[600ms]
[confident] 제대로 동작하는지 확인한 다음 넓은 할당을 제거하세요. 그러면 Sam이 접근 권한을 잃는 순간이 없습니다.
[600ms]
[reassuring] 할당은 범위 아래로 전달되기 때문에, 구독에 있는 할당을 제거하면 그 아래에서 Sam이 가졌던 권한이 모두 끝납니다.

## Step 9 · Make access eligible, not permanent

[curious] Marcus는 Owner 권한이 매일이 아니라 한 달에 두 번 필요합니다. 그런데 왜 계속 켜 두는 걸까요?
[600ms]
[calm] Privileged Identity Management를 쓰면 Marcus는 자격만 가지고 있다가, 필요할 때만 역할을 활성화합니다. 활성화할 때 다단계 인증이나 사유, 승인을 요구할 수도 있습니다.
[600ms]
[reassuring] 정해진 시간 동안만 유지되고, 그 뒤에는 저절로 끝납니다.

## Step 10 · Guardrails: locks and deny assignments

[serious] 역할은 사람이 무엇을 할 수 있는지를 정하고, 가드레일은 누구도 실수로 하지 못하게 막을 일을 정합니다.
[600ms]
[calm] 잠금은 모든 역할보다 우선합니다. 삭제나 변경을 막을 수 있고, 상위 범위에서 아래로 전달되며, 컨트롤 플레인 작업에만 적용됩니다.
[600ms]
[curious] 거부 할당은 역할이 허용하더라도 작업을 막습니다. 거부 할당은 Azure가 관리하기 때문에 직접 만들 수는 없습니다.

## Step 11 · Which fix for which finding?

[excited] 이제 직접 해 볼 차례입니다. 발견 사항 여섯 개와 해결 방법 여섯 개가 있습니다.
[600ms]
[curious] 발견 사항을 하나 고른 다음, 그걸 해결하는 방법을 고르세요. 사용자 지정 역할, 제거, 적격 할당, 잠금, Entra 사용자 지정 역할, 거부 할당 중에서 고릅니다.
[600ms]
[encouraging] 해결 방법은 하나씩 한 번만 쓰고, 각각 한 가지 일을 합니다. 발견 사항에 알맞은 방법을 연결해 보세요.

## Step 12 · Recap: define narrowly, find excess, remove, repeat

[calm] 최소 권한은 한 번으로 끝나는 일이 아니라 반복하는 과정입니다. 업무에 맞는 역할을 만들고, 너무 넓은 권한을 찾아내세요.
[600ms]
[confident] 범위를 좁히거나 제거하고, 가드레일을 추가한 다음, 다시 확인하세요.
[600ms]
[proud] S C 500에서는 사용자 지정 역할을 관리하고, Azure RBAC로 과도한 접근 권한을 고치는 내용이 여기에 해당합니다. 기술 목록은 바뀔 수 있으니 최신 학습 가이드를 확인하세요.
