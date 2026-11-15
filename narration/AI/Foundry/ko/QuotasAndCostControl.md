# Narrator Script — Foundry · Quotas, Rate Limits and Cost Control

**Source animation:** [QuotasAndCostControl.html](../../../../journeys/AI/Foundry/QuotasAndCostControl.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/foundry/openai/how-to/quota>
- <https://learn.microsoft.com/azure/foundry/openai/quotas-limits>
- <https://learn.microsoft.com/azure/foundry/concepts/manage-costs>
- <https://learn.microsoft.com/azure/foundry/foundry-models/how-to/monitor-models>

---

## Step 1 · Why did my call get a 429?

[curious] Contoso Retail세일 날이고, 점원이 막 영업을 시작했습니다. 모델 배포 속도보다 전화가 빠르게 도착하기 시작합니다.
[600ms]
[concerned] 일부는 HTTP 429 오류로 거부되고 있는데, 상황이 심각해 보입니다.
[600ms]
[reassuring] 하지만 429는 요청이 너무 많다는 뜻일 뿐입니다. 한도에 도달했다는 의미이지, 코드가 고장 났다는 의미가 아닙니다.

## Step 2 · Tokens: the unit of cost and of limits

[calm] 모델은 전체 문장을 읽지 않습니다. 그들은 작은 텍스트 조각인 토큰을 읽고 씁니다.
[600ms]
[confident] 청구서와 한도는 모두 토큰으로 계산되며, 입력과 출력 모두가 포함됩니다.
[600ms]
[reflective] 여기서 보이는 분할은 단지 설명일 뿐이며, 실제 토큰 제작자들은 텍스트를 다르게 자르기 때문입니다. 비율은 모델과 배포 유형에 따라 다르므로, 숫자를 외우기보다는 직접 찾아보세요.

## Step 3 · Quota: one pool, shared out in slices

[calm] 쿼터는 특정 모델과 배포 유형에 대해 구독이 분당 사용할 수 있는 토큰 풀입니다.
[600ms]
[confident] 그 풀의 일부를 배포에 나누어 주고, 각 조각이 해당 배포의 한도가 됩니다.
[600ms]
[curious] 풀의 범위 설정은 배포 유형에 따라 다릅니다. 최신 풀은 지역 간 또는 데이터 존별로 공유할 수 있으니, 모델의 할당량과 제한 페이지를 확인하세요.

## Step 4 · Rate limits count what you reserve

[curious] 모든 배포에는 분당 토큰 수와 분당 요청 수 제한이 있습니다.
[600ms]
[serious] 요청은 도착할 때 프롬프트와 최대 토큰 설정을 합쳐 집계됩니다. 이는 모델이 최종적으로 사용하는 양이 아니라 예약하는 양입니다.
[600ms]
[reflective] 추정치이기 때문에 제한이 정확한 수보다 일찍 작동할 수 있습니다. 버스트도 중요합니다. 요청도 몇 초 단위로 검사되기 때문입니다.

## Step 5 · Two kinds of 429, two different fixes

[curious] 429는 전혀 다른 두 가지 의미일 수 있으며, 해결 방법은 어느 쪽인지에 따라 달라집니다.
[600ms]
[confident] 본인이 자신의 슬라이스를 사용했거나, 공유 서비스가 잠시 사용 중일 수도 있습니다. 오류 메시지와 응답 헤더가 남은 토큰과 힌트 후 재시도 등을 알려줍니다.
[600ms]
[serious] 진짜 원인이 인원 부족일 때는 팀들이 더 많은 할당량을 요구하는 경우가 많습니다. 먼저 확인하고, 그 다음에 행동하세요.

## Step 6 · Back off, then retry

[serious] 한 번에 다시 시도하면 상황이 더 악화됩니다. 실패한 전화도 여전히 불리하게 작용하기 때문입니다.
[600ms]
[confident] 서비스가 권장하는 만큼 기다렸다가 매번 조금씩 더 기다리면서 고객이 모두 동시에 재시도하지 않도록 약간의 무작위성을 적용하세요.
[600ms]
[reassuring] 많은 SDK가 이런 작업을 해줄 수 있으니, 먼저 클라이언트 라이브러리를 확인하세요. 그리고 한도를 유지해서 나쁜 날이 끝없는 반복이 되지 않도록 하세요.

## Step 7 · Pick the deployment type for your traffic

[curious] 이제 트래픽 형태와 데이터 처리가 허용되는 위치를 선택하세요.
[600ms]
[confident] 이러한 선택을 바꾸면 권장 배포 유형과 그 확장 옵션도 함께 바뀝니다.
[600ms]
[reflective] 모든 모델이 모든 유형을 지원하는 것은 아니므로, 모델과 지역별로 가용성을 확인하세요. 이 페이지는 한도와 비용에 관한 것이니, 실제 수치는 가격 및 할당량 페이지를 참고하세요.

## Step 8 · Need more headroom? Raise it or spread it

[determined] 더 많은 여유가 필요하신가요? 우선 분당 사용하지 않는 토큰을 재할당하거나 서비스에 할당량을 더 요청하세요.
[600ms]
[confident] 그 다음 여러 배포나 지역에 트래픽을 분산시켜 단일 제한이 상한선이 되지 않도록 합니다.
[600ms]
[calm] 할당량 요청은 받은 순서대로 검토되며, 활성 고객이 우선권을 가집니다. Azure API 관리와 같은 게이트웨이는 각 소비자에 대해 토큰 한도를 강제할 수도 있습니다.

## Step 9 · Spend fewer tokens, pay less

[calm] 비용은 단순히 토큰에 모델과 배포 유형의 요금을 곱한 값입니다.
[600ms]
[encouraging] 그래서 지폐를 줄이는 세 가지 방법이 있습니다: 토큰 수를 줄이거나, 더 저렴한 모델을 선택하거나, 할인된 경로를 택하는 것입니다.
[600ms]
[reflective] 가격이 변하기 때문에 일부러 화면에 가격이 표시되지 않습니다. 가격 페이지를 확인하고, 비용 절감 비용은 업무량에 따라 다르니 전후 측정을 하세요.

## Step 10 · Watch tokens and budgets before the bill does

[curious] Foundry 각 배포마다 토큰 사용과 예상 비용을 보여주어, 지출 출처를 알 수 있습니다.
[600ms]
[confident] Azure Monitor 지표를 추적하고 알림을 보내며, 비용 관리는 예산을 관리합니다.
[600ms]
[serious] 예산은 알림을 주지만 지출을 멈추지 말고, Azure OpenAI 고정된 비용 상한선이 없다는 점을 기억하세요. 팀이나 프로젝트별로 태그를 지정해 비용을 환급할 수 있습니다.

## Step 11 · Limits and cost at a glance

[calm] 토큰은 한도와 청구서를 모두 설정하며, 이것이 이 수업 전체의 핵심입니다.
[600ms]
[confident] 할당량을 계획하고, 4개의 29 오류를 백오프로 처리하며, 적절한 배포 유형을 선택하고, 토큰을 다듬고, 사용량과 예산을 모니터링하세요.
[600ms]
[reassuring] 숫자는 자주 바뀌므로, 할당량, 한도, 가격 페이지를 외우기보다는 책마크에 두세요.
