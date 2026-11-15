# Narrator Script — Foundry · Choose the Right Model for the Job

**Source animation:** [ChooseTheRightModel.html](../../../../journeys/AI/Foundry/ChooseTheRightModel.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/foundry/concepts/foundry-models-overview>
- <https://learn.microsoft.com/azure/foundry/openai/concepts/model-router>
- <https://learn.microsoft.com/azure/foundry/foundry-models/concepts/deployment-types>
- <https://learn.microsoft.com/azure/foundry/openai/how-to/reasoning>

---

## Step 1 · One catalog, many models

[calm] Contoso 아웃피터스는 헬프 봇에 쓸 모델이 필요합니다. Foundry 카탈로그에는 수천 개의 모델이 있으니, 작업을 기준으로 후보를 좁혀 가세요.
[600ms]
[curious] 모델은 크게 두 부류입니다. 하나는 Azure가 직접 판매하는 모델로, Microsoft 지원과 엔터프라이즈 계약이 따라옵니다. 다른 하나는 파트너와 커뮤니티가 만든 모델로, 제공한 곳에서 지원합니다.
[600ms]
[serious] 어느 쪽이든 알맞은 모델을 고르고 모델 카드를 읽는 일은 여러분 몫입니다.

## Step 2 · Large, small and reasoning models

[curious] 크기와 비용, 대기 시간은 서로 같이 움직입니다. 작은 모델은 빠르고 저렴해서, 범위가 좁고 분명한 작업에 잘 맞습니다.
[600ms]
[calm] 큰 모델은 더 다양한 작업을 처리하고, 추론 모델은 답하기 전에 먼저 생각합니다.
[600ms]
[concerned] 이렇게 생각하는 과정에서 추론 토큰이 만들어지는데, 눈에는 보이지 않아도 출력으로 요금이 부과됩니다. 노력 수준을 높이면 그만큼 더 기다려야 하고요. 이 지표들은 측정값이 아니라 상대적인 비교입니다.

## Step 3 · Multimodal and code models

[calm] 무엇이 들어가고 무엇이 나오는지 확인하세요. 입력이 사진이나 오디오라면 멀티모달 모델이 필요합니다.
[600ms]
[confident] 코드를 쓰고 고치는 일은 코딩 도구에 맞게 조정된 코드 모델이 맡습니다. 이런 모델 중 일부는 Responses API로만 쓸 수 있습니다.
[600ms]
[reassuring] 모델 카드에서 입력과 출력 유형은 꼭 읽어 보세요.

## Step 4 · Foundry Tool or a model?

[curious] 어떤 작업은 이미 만들어진 서비스가 있습니다. 스캔한 송장이라면 Foundry 도구가 유형이 정해진 필드를 바로 돌려줍니다.
[600ms]
[calm] 생성형 모델로도 송장을 읽을 수는 있지만, 그러면 주변 기능을 전부 직접 만들어야 합니다.
[600ms]
[confident] Foundry 도구는 사전 학습된 상태라서 따로 학습시킬 필요가 없습니다. Microsoft Learn에서는 전문 서비스 대신 언어 모델을 쓰기 전에 이 도구들을 먼저 검토하라고 안내합니다.

## Step 5 · Leaderboards: read them carefully

[calm] 리더보드는 공개 테스트로 모델의 품질과 안전성, 성능, 비용을 순위로 보여 줍니다. 후보 목록을 만들 때 쓰기 좋습니다.
[600ms]
[serious] 하지만 여러분의 워크로드에 대한 결론은 아닙니다.
[600ms]
[confident] 리더보드에서 후보를 추린 다음, 여러분의 데이터로 평가하세요. 여기 보이는 화면은 가상의 모델로 만든 예시입니다.

## Step 6 · Model router and fallback

[curious] 쉬운 프롬프트와 어려운 프롬프트에 같은 모델이 필요하지는 않습니다. 모델 라우터가 요청마다 모델을 골라 주니, 배포는 하나만 하면 됩니다.
[600ms]
[calm] 라우팅 모드는 품질, 균형, 비용 중에서 고르고, 라우터가 쓸 수 있는 모델의 범위도 정합니다.
[600ms]
[reassuring] 모델에 일시적인 문제가 생기면 라우터가 자동으로 다른 모델로 전환합니다. 이런 대체 동작을 쓰려면 모델을 최소 두 개 선택하세요. 그리고 지금 쓰는 기준선과 비교해 보세요.

## Step 7 · Match the task

[excited] 이제 직접 해 볼 차례입니다. 왼쪽에서 Contoso 작업을 하나 골라 보세요.
[600ms]
[curious] 패널에 처음 고르면 좋은 모델과, 주의할 점이 나옵니다.
[600ms]
[reassuring] 이건 단순화한 안내일 뿐 규칙집이 아닙니다. 최종 판단은 여러분의 데이터로 직접 해 본 테스트가 합니다.

## Step 8 · Deployment option for the choice

[calm] 모델을 골랐다면 이제 어떻게 실행할지 정합니다. 옵션마다 가격과 위치, 예측 가능성이 서로 다르게 맞바뀝니다.
[600ms]
[confident] Global Standard가 기본 시작점입니다. Data Zone 유형은 처리를 US, EU, APAC 같은 지정 영역 안에서 하고, 프로비전 유형은 처리량을 미리 확보해 두며, 배치는 비동기 작업에 씁니다.
[600ms]
[serious] 관리형 컴퓨팅에서 오픈 모델을 쓰면 가상 머신 사용 시간만큼 요금이 청구됩니다. 그리고 모든 모델이 모든 배포 유형을 지원하지는 않습니다.

## Step 9 · Choosing at a glance

[calm] 작업에 맞는 모델 종류를 고르고, 근거를 확인한 다음, 실행 방식을 선택하세요.
[600ms]
[reflective] 이 세 단계가 Microsoft Learn의 A I 103 학습 가이드에 나오는 모델 선택 기술에 해당합니다.
[600ms]
[proud] 가이드의 최신 표현은 직접 확인해 보세요. 그러면 자신 있게 모델을 고를 수 있습니다.
