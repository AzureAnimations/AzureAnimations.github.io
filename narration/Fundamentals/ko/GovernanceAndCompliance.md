# 내레이션 대본 - 거버넌스와 규정 준수

**Source animation:** journeys/Fundamentals/GovernanceAndCompliance.html
**Script status:** Authored voiceover.
**Language:** 한국어

대괄호 안의 내용은 읽지 않는 연출 지시입니다. 쉼 표시는 별도 줄에 둡니다. 각 블록은 애니메이션 한 단계에 대응합니다.
<!-- Sources: https://learn.microsoft.com/azure/governance/policy/overview ; https://learn.microsoft.com/azure/azure-resource-manager/management/lock-resources ; https://learn.microsoft.com/azure/cloud-adoption-framework/govern/monitor-cloud-governance -->

## Step 1 · Standards nobody checks

[calm] Contoso는 Environment 태그를 필수로 정했지만, 다음 배포에는 빠져 있습니다. 문서에 적힌 기준이 리소스를 자동으로 검사해 주지는 않습니다.
[600ms]
[confident] 리소스가 생성되는 곳에서 평가할 규칙이 필요합니다. 누락을 확인하거나 미리 방지하기 위해서입니다.

## Step 2 · Write the rule, then apply it

[calm] Azure Policy 정의는 지원되는 리소스에 Environment 태그를 요구하는 등의 규칙을 설명합니다. 할당은 그 규칙을 적용할 위치를 지정합니다.
[600ms]
[confident] Contoso는 매장 구독에 할당합니다. 정책을 정의하는 것과 적용하는 것은 별개이며, 할당으로 관리 범위를 정합니다.

## Step 3 · First, observe with Audit

[calm] Audit 효과는 태그 누락을 비준수로 보고하지만, 이 정책은 배포를 계속 허용합니다. Contoso는 기준이 지켜지지 않는 곳을 볼 수 있습니다.
[600ms]
[confident] 강제 적용 전에 규칙의 영향을 이해하는 데 유용합니다. 문제를 보고한다고 리소스가 자동으로 수정되지는 않습니다.

## Step 4 · Then enforce with Deny

[calm] Deny 효과는 필수 태그가 없으므로 이 요청을 차단합니다. Contoso는 태그를 추가하고 수정한 요청을 다시 제출합니다.
[600ms]
[confident] 비준수 변경을 막지만, 기존 리소스를 삭제하지는 않습니다. 이 규칙을 통과해도 다른 권한이나 정책 검사를 건너뛰지 않습니다.

## Step 5 · Protect what already exists

[calm] Contoso는 프로덕션 리소스의 실수로 인한 삭제도 막고 싶습니다. 삭제 방지 잠금이 적용되어 있는 동안에는 리소스를 삭제하는 관리 요청을 차단합니다.
[600ms]
[confident] 권한 있는 관리자는 잠금을 제거할 수 있습니다. 특정 관리 변경에 대한 보호이지, 영원히 삭제할 수 없다는 보장은 아닙니다.

## Step 6 · The resource is not its data

[calm] 데이터베이스 리소스를 잠가도 내부의 고객 기록을 모두 잠그는 것은 아닙니다. 리소스 잠금은 관리 작업에 적용되므로, 허가된 데이터 작업은 기록을 변경할 수 있습니다.
[600ms]
[confident] Contoso에는 별도의 데이터 권한과 복구 통제가 필요합니다. 리소스 잠금은 백업이나 완전한 데이터 보호 전략이 아닙니다.

## Step 7 · Govern the data too

[calm] Contoso는 어떤 정보를 보유하고 어디에 저장하는지도 알아야 합니다. Microsoft Purview는 연결된 지원 데이터 원본에서 데이터를 검색하고 분류할 수 있습니다.
[600ms]
[confident] 이 목록은 민감한 정보와 처리 방식을 결정하도록 돕습니다. 요건을 충족할 통제를 수립하고 운영하는 일은 여전히 팀의 책임입니다.

## Step 8 · Governance - All in One

[calm] Policy는 리소스의 기준을 확인하고, 잠금은 특정 관리 작업을 보호합니다. 데이터 거버넌스는 보유 정보의 이해를 돕습니다. 각각 해결하는 요구가 다릅니다.
[600ms]
[confident] 좋은 거버넌스를 지원하지만, 규정 준수를 자동 보장하지는 않습니다. 다음은 모든 수동 단계를 기억하지 않아도 되는 반복 가능한 배포를 만듭니다.