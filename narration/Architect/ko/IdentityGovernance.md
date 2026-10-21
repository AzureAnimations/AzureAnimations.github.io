# Narrator Script — Architect · Design access: roles, PIM and access reviews

**Source animation:** [IdentityGovernance.html](../../../journeys/Architect/IdentityGovernance.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/role-based-access-control/rbac-and-directory-admin-roles>
- <https://learn.microsoft.com/azure/role-based-access-control/overview>
- <https://learn.microsoft.com/entra/identity/managed-identities-azure-resources/overview>
- <https://learn.microsoft.com/azure/key-vault/general/overview>
- <https://learn.microsoft.com/azure/key-vault/managed-hsm/overview>
- <https://learn.microsoft.com/entra/id-governance/privileged-identity-management/pim-configure>
- <https://learn.microsoft.com/entra/id-governance/access-reviews-overview>
- <https://learn.microsoft.com/entra/id-governance/entitlement-management-overview>
- <https://learn.microsoft.com/entra/id-governance/what-are-lifecycle-workflows>
- <https://learn.microsoft.com/entra/id-governance/identity-governance-overview>

---

## Step 1 · Contoso: who has access to what?

[calm] Contoso의 액세스 권한은 명확한 계획 없이 늘어났습니다. 관리자들이 강력한 역할을 보유하고 있고, 이미 떠난 계약자도 여전히 목록에 남아 있습니다.
[600ms]
[curious] 문제는 단순히 누군가가 로그인할 수 있느냐가 아니라, 그 이후에 어디에 도달할 수 있느냐입니다.
[600ms]
[reassuring] 역할 범위, 워크로드 자격 증명, 특권 접근 권한, 권한 검토를 분리할 것입니다.

## Step 2 · Azure roles vs Microsoft Entra roles

[calm] Azure roles govern Azure resources, 반면 Microsoft Entra roles govern directory capabilities and administration.
[600ms]
[curious] 자원 계층 구조에서 역할 할당은 주체, 역할 정의, 그리고 적용되는 범위를 결합합니다.
[600ms]
[reassuring] 가장 좁은 범위에서 가장 작은 적절한 역할을 선택하며, 상속된 권한이 효과적인 접근 권한을 연장할 수 있음을 기억하세요.

## Step 3 · Workloads: use a managed identity

[calm] 스토어프론트는 주문 데이터베이스와 저장소에 접근할 필요가 있지, 코드에 내장된 또 다른 비밀번호가 아닙니다.
[600ms]
[curious] 관리형 신원은 애플리케이션에 정체성을 부여하고, 역할 할당은 각 목적지에 대한 접근 권한을 부여합니다.
[600ms]
[reassuring] 시스템 할당 신원은 하나의 자원의 수명주기를 따릅니다; 사용자 할당 신원은 별도로 관리되며 자원 간에 공유할 수 있습니다.

## Step 4 · Secrets, keys and certificates

[calm] 상점에는 여전히 여러 민감한 항목들이 있습니다: 비밀, 암호화 키, 인증서.
[600ms]
[curious] Key Vault는 이러한 항목들을 통제된 접근 방식으로 관리하며, 보호 옵션은 필요한 키 보안 유형에 따라 다릅니다.
[600ms]
[reassuring] 보호 모델과 권한을 신중하게 선택하세요. 볼트를 자격 증명을 자유롭게 넣는 장소로 취급하지 말고요.

## Step 5 · Privileged access: eligible, not always on

[calm] 관리 작업을 하지 않는 동안에도, 항상 켜져 있는 관리자 권한은 위험을 만듭니다.
[600ms]
[curious] 특권 신원 관리(Privileged Identity Management)에서는 자격 있는 관리자가 승인 또는 다중 인증 등의 요구사항을 포함하여 필요할 때 역할을 활성화합니다.
[600ms]
[reassuring] 시간이 지나가는 것을 지켜보세요: 특권은 영구적인 일상 허가가 되는 대신 끝납니다.

## Step 6 · Access reviews: does anyone still need this?

[calm] 사람들이 직무를 옮기거나 프로젝트가 끝나도, 권한은 원래 목적을 넘어 계속 남아 있습니다.
[600ms]
[curious] 접근 검토는 책임 있는 검토자에게 각 과제가 여전히 필요한지 묻고, 그 결과를 적용합니다.
[600ms]
[reassuring] 이를 반복되는 의사결정으로 만들면, Contoso는 누군가가 예전의 모든 권한 부여를 기억해 주기를 기대하지 않고도 오래된 액세스를 제거할 수 있습니다.

## Step 7 · Entitlement management: access packages

[calm] 파트너는 한 프로젝트에 대해 여러 개의 연결된 자원이 필요하며, 관련 없는 접근 요청 모음이 아닙니다.
[600ms]
[curious] 접근 패키지는 요청 정책, 승인자, 만료 조건과 함께 필요한 그룹, 애플리케이션 및 사이트를 묶어 제공합니다.
[600ms]
[reassuring] Contoso는 소유권과 승인을 투명하게 유지하면서 적절한 기간 동안 패키지를 제공할 수 있습니다.

## Step 8 · Lifecycle workflows: joiner, mover, leaver

[calm] 입사부터 역할 변경, 그리고 조직을 떠나는 직원들의 생애주기를 따라가세요.
[600ms]
[curious] 라이프사이클 워크플로우는 설정된 조건과 신원 속성이 일치할 때 관련 접근 작업을 실행합니다.
[600ms]
[reassuring] 핵심은 반복 가능한 실행 능력입니다: 올바른 작업이 수작업의 체크리스트에만 의존하는 대신 올바른 전환 시점에 이루어집니다.

## Step 9 · All in one: which tool answers which question

[calm] 완성된 지도는 접근 설계를 여러 질문으로 나누고, 각 질문에 대한 답변은 다른 도구로 나뉩니다.
[600ms]
[curious] 역할은 권한을 정의하고, 관리 신원은 애플리케이션 비밀을 피하며, Key Vault는 남아 있는 민감한 자료를 보호합니다.
[600ms]
[reassuring] PIM, 검토, 접근 패키지 및 라이프사이클 워크플로우는 접근 시작, 확인, 종료 시점을 제어합니다.

