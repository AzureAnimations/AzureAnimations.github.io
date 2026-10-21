# Narrator Script — Architect · Design governance: structure, policy and compliance

**Source animation:** [DesignGovernance.html](../../../journeys/Architect/DesignGovernance.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/governance/management-groups/overview>
- <https://learn.microsoft.com/azure/cloud-adoption-framework/ready/landing-zone/design-area/resource-org-management-groups>
- <https://learn.microsoft.com/azure/cloud-adoption-framework/ready/landing-zone/design-area/resource-org-subscriptions>
- <https://learn.microsoft.com/azure/azure-resource-manager/management/overview>
- <https://learn.microsoft.com/azure/azure-resource-manager/management/tag-resources>
- <https://learn.microsoft.com/azure/cloud-adoption-framework/ready/azure-best-practices/resource-tagging>
- <https://learn.microsoft.com/azure/governance/policy/concepts/effect-basics>
- <https://learn.microsoft.com/azure/defender-for-cloud/regulatory-compliance-dashboard>
- <https://learn.microsoft.com/purview/compliance-manager>
- <https://learn.microsoft.com/azure/cloud-adoption-framework/ready/landing-zone/>

---

## Step 1 · One subscription, no structure

[calm] Contoso는 스토어프론트, 데이터베이스, 실험을 하나의 구독으로 통합했으며, 공유 구조는 없었습니다.
[600ms]
[curious] 그 옆에 있는 세 가지 문제를 주목하세요: 프로덕션 위험, 불분명한 비용, 그리고 팀마다 변하는 규칙들.
[600ms]
[reassuring] 설계는 소유권, 격리, 정책이 놓일 자리를 분명하게 정하는 것에서 시작됩니다.

## Step 2 · Management groups: rules that flow down

[calm] 경영진 그룹은 회사 조직도를 복사하기보다는 공유하는 규칙에 따라 구독을 조직합니다.
[600ms]
[curious] 정책을 따라 가계도를 따라가세요: 구독은 위에 할당된 가드레일을 상속받습니다.
[600ms]
[reassuring] 계층 구조는 얕게 유지하고, 개발과 프로덕션 구독은 적절한 공유 그룹 아래에 따로 두세요.

## Step 3 · Subscriptions: billing, limits and isolation

[calm] 구독은 청구, 한도, 격리의 경계를 만든다는 점에서 이 세 카드가 보여줍니다.
[600ms]
[curious] Contoso는 예산과 접근 요건이 다르기 때문에 주문 플랫폼, 개발 작업, 실험을 분리합니다.
[600ms]
[reassuring] 경계가 변경될 때 새 구독을 선택하세요. 단지 다른 지역이 관련되어 있다고 해서 그런 것이 아닙니다.

## Step 4 · Resource groups: one shared lifecycle

[calm] 이 애플리케이션 리소스들은 함께 배포, 업데이트, 삭제되기 때문에 리소스 그룹을 공유합니다.
[600ms]
[curious] 공유 네트워크는 라이프사이클이 달라서 별도의 그룹에 남아 있습니다.
[600ms]
[reassuring] 애플리케이션 그룹을 삭제하면 자원이 함께 제거되고, 별도로 관리되는 네트워크는 자체 라이프사이클을 유지합니다.

## Step 5 · Tags: decide what, then let policy apply them

[calm] 태그는 기능, 분류, 회계, 비즈니스 목적과 같은 범주를 통해 자원을 설명합니다.
[600ms]
[curious] 리소스 그룹 태그를 주의하세요: 아래 리소스에는 자동으로 표시되지 않습니다.
[600ms]
[reassuring] Contoso는 Azure Policy를 사용해 필요한 태그를 복사하여 태깅 전략을 플랫폼이 강제할 수 있는 것으로 전환합니다.

## Step 6 · Azure Policy: pick the effect for each rule

[calm] Contoso 기준선은 여러 정책 정의를 하나의 이니셔티브로 수집하여 공유 범위에 할당합니다.
[600ms]
[curious] audit는 문제를 보고하고, deny는 요청을 차단하며, modify는 속성을 변경하고, deployIfNotExists는 누락된 관련 리소스를 추가합니다.
[600ms]
[reassuring] 모든 컴플라이언스 문제를 차단된 배포로 간주하지 말고, 규칙에 맞는 효과를 선택하세요.

## Step 7 · Compliance: who answers which question

[calm] 이 두 도구는 서로 연관되어 있지만 서로 다른 준수 질문에 답합니다.
[600ms]
[curious] Microsoft Defender for Cloud는 Azure 자원을 통제 기준으로 평가하며, Microsoft Purview Compliance Manager는 평가 및 개선 조치를 조직합니다.
[600ms]
[reassuring] Contoso는 기술적 결과에 대한 시각과 개선 책임자를 추적할 방법이 필요합니다.

## Step 8 · All in one: Contoso’s landing zone

[calm] 이는 Contoso의 거버넌스 설계를 하나의 랜딩 존으로 모은 것으로, 각 범위가 서로 다른 역할을 맡습니다.
[600ms]
[curious] 관리 그룹은 공통 규칙을 가지고 있고, 구독은 경계를 구분하며, 리소스 그룹은 수명 주기를 따르고 태그는 소유권을 설명합니다.
[600ms]
[reassuring] 정책 및 준수 도구는 이러한 결정들을 집행 가능하고 검토 가능하게 만듭니다; 다음으로, 이 부동산을 사용할 사람들을 연결하세요.

