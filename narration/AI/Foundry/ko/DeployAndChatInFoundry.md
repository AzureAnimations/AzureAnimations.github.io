# Narrator Script — Foundry · Deploy a model and chat with it in Foundry

**Source animation:** [DeployAndChatInFoundry.html](../../../../journeys/AI/Foundry/DeployAndChatInFoundry.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/foundry/concepts/foundry-models-overview>
- <https://learn.microsoft.com/azure/foundry/concepts/concept-playgrounds>
- <https://learn.microsoft.com/azure/foundry/foundry-models/how-to/deploy-foundry-models>
- <https://learn.microsoft.com/azure/foundry/foundry-models/concepts/deployment-types>

---

## Step 1 · Contoso needs a model

[calm] Mia는 Contoso 아웃도어스 지원팀에서 쓸 채팅 도우미를 만들고 있습니다. Foundry 모델 카탈로그에는 모델이 정말 많습니다.
[600ms]
[curious] 추론 모델, 멀티모달 모델, 소형 언어 모델 등이 있는데요. 이 작업에는 어떤 모델이 맞을까요?
[600ms]
[encouraging] 이어지는 단계에서 모델을 고르고, 배포하고, 테스트하는 방법을 알아봅니다.

## Step 2 · Browse the catalog

[curious] 모델의 기능을 시나리오에 맞춰 보세요. 필요한 것을 고르면 알맞은 모델 유형과 카탈로그에서 찾아볼 위치가 나옵니다.
[600ms]
[calm] 카탈로그에서는 컬렉션, 추론이나 도구 호출 같은 지원 기능, 추론 작업별로 필터링할 수 있습니다.
[600ms]
[reassuring] 후보를 어떻게 추렸든, 고르기 전에 모델 카드를 꼭 읽어 보세요.

## Step 3 · Compare on the leaderboard

[calm] 모델 리더보드는 품질과 비용, 처리량을 기준으로 모델 순위를 보여 줍니다. 이 기능은 미리 보기 상태입니다.
[600ms]
[curious] 모든 항목에서 1등인 모델은 없으니, 무엇을 얻고 무엇을 내줄지 직접 정해야 합니다. 품질 지수는 높을수록 좋고, 비용은 출력 토큰 하나당 입력 토큰 세 개를 가정한 추정치입니다.
[600ms]
[reassuring] 카탈로그에서 리더보드 보기(View leaderboard)나 모델 비교(Compare models)를 선택하세요. 여기 나온 숫자는 예시로 만든 값입니다.

## Step 4 · Deploy it: name and type

[confident] Deploy를 선택하고 배포 이름을 정하세요. 그다음 배포 유형을 고릅니다. 데이터를 어디에서 처리할지, 토큰마다 요금을 낼지 용량을 예약할지를 정하는 단계입니다.
[600ms]
[calm] 데이터 상주나 예약 처리량, 배치가 필요한 경우가 아니라면 Global Standard로 시작하세요. 모든 모델이 모든 유형을 지원하지는 않습니다.
[600ms]
[serious] 정한 이름은 기억해 두세요. 코드에서 model 매개변수에 이 배포 이름을 넣어 보내기 때문입니다.

## Step 5 · You land in the playground

[excited] 배포가 성공하면 Foundry가 모델 플레이그라운드를 엽니다.
[600ms]
[confident] 코드를 한 줄도 쓰지 않고 채팅하고, 모델을 설정하고, 모델을 비교하고, 코드를 볼 수 있습니다.
[600ms]
[curious] 플레이그라운드는 모델에 따라 달라집니다. 이미지 모델이면 이미지 플레이그라운드가, 비디오 모델이면 비디오 플레이그라운드가 열립니다.

## Step 6 · Set a system prompt and chat

[calm] 시스템 프롬프트는 모든 응답의 역할과 규칙을 정하고, 사용자 프롬프트는 고객이 묻는 내용입니다.
[600ms]
[curious] 하나 보내 보고 답변을 읽어 보세요.
[600ms]
[encouraging] 시스템 프롬프트는 매 턴마다 적용되고, 사용자 프롬프트는 이번 메시지에만 해당합니다. 한 번에 하나씩만 바꿔야 무엇 때문에 답이 달라졌는지 알 수 있습니다.

## Step 7 · Tune the response

[curious] 온도와 Top P는 표현이 얼마나 다양하게 나올지를 조절합니다. 온도가 낮을수록 답이 안정적이고, 높을수록 다양해집니다.
[600ms]
[calm] 최대 출력 토큰 수는 응답의 최대 길이를 정합니다. 설정은 하나씩 바꾸세요. 온도와 Top P는 둘 중 하나만 조절하고, 둘 다 건드리지는 마세요.
[600ms]
[serious] 추론 모델 중에는 온도나 Top P를 지원하지 않는 모델이 많으니, 먼저 모델 카드를 확인하세요.

## Step 8 · Watch tokens in and out

[calm] 텍스트는 토큰 단위로 나뉩니다. 일반적인 영어에서는 토큰 하나가 대략 네 글자입니다.
[600ms]
[confident] 입력 토큰은 시스템 프롬프트와 대화 기록, 사용자 메시지이고, 출력 토큰은 응답입니다. 둘 다 컨텍스트 창을 채우고, 토큰 단위로 요금을 내는 배포에서는 둘 다 비용이 됩니다.
[600ms]
[concerned] 추론 토큰도 출력으로 요금이 부과됩니다. 여기 나온 숫자는 예시일 뿐입니다.

## Step 9 · Compare two models

[curious] 모델 비교를 쓰면 같은 프롬프트와 시스템 메시지, 설정을 각 모델에 한꺼번에 보냅니다.
[600ms]
[impressed] 품질과 속도, 토큰 수를 나란히 놓고 비교할 수 있습니다. 모델은 최대 세 개까지 비교할 수 있습니다.
[600ms]
[calm] 플레이그라운드 오른쪽 위에서 모델 비교를 선택하세요. 동기화는 모델의 설정 창에서 끌 수 있습니다. 여기 나온 숫자는 예시로 만든 값입니다.

## Step 10 · View code

[calm] 코드 탭에는 같은 호출이 코드로 나옵니다. model 매개변수에 배포 이름이 들어가기 때문에, 앱이 바로 이 배포에 연결됩니다.
[600ms]
[curious] 언어 탭을 고른 다음, Open in VS Code for the Web을 누르면 샘플과 엔드포인트가 편집기로 넘어갑니다.
[600ms]
[serious] 키는 소스 제어에 올리지 마세요.

## Step 11 · Clean up: delete the deployment

[calm] 배포가 더 필요하지 않으면, 배포를 열어서 삭제하세요.
[600ms]
[reassuring] 배포마다 할당량을 일부씩 차지하니, 안 쓰는 배포는 지워서 깔끔하게 관리하세요. 포털에서는 Build 아래 Models에서 찾을 수 있습니다.
[600ms]
[proud] 이제 무엇을 할 수 있게 됐는지 돌아볼까요? 모델을 찾고, 비교하고, 배포하고, 채팅해 보고, 코드까지 확인할 수 있습니다.
