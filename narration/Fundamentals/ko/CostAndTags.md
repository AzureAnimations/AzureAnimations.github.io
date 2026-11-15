# 내레이션 대본 - 비용과 태그

**Source animation:** journeys/Fundamentals/CostAndTags.html
**Script status:** Authored voiceover.
**Language:** 한국어

대괄호 안의 내용은 읽지 않는 연출 지시입니다. 쉼 표시는 별도 줄에 둡니다. 각 블록은 애니메이션 한 단계에 대응합니다.
<!-- Sources: https://learn.microsoft.com/azure/cost-management-billing/costs/tutorial-acm-create-budgets ; https://learn.microsoft.com/azure/well-architected/saas/governance#cost-governance -->

## Step 1 · Where did the money go?

[calm] Contoso의 행사는 끝났지만 지출이 예상 수준으로 돌아오지 않았습니다. 운영 중인 매장에는 리소스가 필요하지만, 일부 테스트 용량은 더 이상 유용한 일을 하지 않을 수 있습니다.
[600ms]
[confident] 줄이기 전에 어떤 리소스에서 요금이 발생하고 누가 사용하는지 확인해야 합니다.

## Step 2 · What actually drives cost

[calm] 청구액은 서버 대수만으로 정해지지 않습니다. 컴퓨팅 크기와 실행 시간, 저장 데이터, 네트워크 트래픽, 서비스 사용량, 지역이 모두 영향을 줄 수 있습니다.
[600ms]
[confident] Contoso는 서비스별 과금 항목을 살펴봅니다. 설계 하나를 바꾸면 대표 가격뿐 아니라 여러 요금이 함께 달라질 수 있습니다.

## Step 3 · Estimate before you deploy

[calm] 가격 계산기에 예상 용량, 운영 시간, 스토리지, 트래픽을 넣습니다. Contoso는 평소 한 달과 행사 때 늘어나는 업무를 비교합니다.
[600ms]
[confident] 결과는 가정에 기반한 예상액이지, 보장된 청구액이 아닙니다. 가정을 남겨 두면 나중에 실제 사용과 비교할 수 있습니다.

## Step 4 · Organize what you deploy

[calm] 태그는 지원되는 리소스에 붙이는 이름표입니다. 업무 이름이나 테스트와 프로덕션의 구분을 기록합니다. Contoso는 일관되게 태그를 붙여 지출을 의미 있게 묶습니다.
[600ms]
[confident] 담당을 파악하기 쉬워지지만, 태그가 리소스를 이동시키거나 지출을 자동으로 제한하지는 않습니다.

## Step 5 · Watch the real spending

[calm] 이제 Cost Management의 실제 비용을 예상액과 비교합니다. 서비스나 태그로 묶으면 매장의 어느 부분이 달라졌는지 찾기 쉬워집니다.
[600ms]
[confident] 합계는 지출이 늘었다는 것을 알려 주고, 내역은 이유를 설명하도록 돕습니다. 이 근거를 보고 조정할 리소스를 결정합니다.

## Step 6 · An alert is not a stop switch

[calm] Contoso는 예산 임계값과 알림을 받을 담당자를 설정합니다. 구성한 비용 조건을 충족하면 담당자에게 조사하라는 알림이 갑니다.
[600ms]
[confident] 예산은 강제 지출 한도가 아닙니다. 매장이나 소비를 멈추지 않으며, 사람이나 별도로 설정한 자동화가 조치해야 합니다.

## Step 7 · Find the cause, then act

[calm] 내역에서 행사 후 남아 있는 미사용 테스트 용량을 발견했습니다. Contoso는 종속 관계와 보존할 데이터를 확인한 다음, 불필요한 자원을 제거합니다.
[600ms]
[confident] 목표는 프로덕션을 방해하지 않고 낭비를 줄이는 것입니다. 매장이 계속 잘 작동해야 비용 절감도 좋은 결과입니다.

## Step 8 · Cost and Tags - All in One

[calm] 배포 전에 예상하고, 일관된 태그를 붙이고, 실제 지출을 계획과 비교하세요. 예산 알림은 변화에 주의를 끌고, 조사는 적절한 대응을 정합니다.
[600ms]
[confident] Contoso는 비용을 이해했습니다. 다음은 합의한 기준을 거버넌스 검사로 만들어, 앞으로 배포할 때도 같은 규칙을 따르게 합니다.