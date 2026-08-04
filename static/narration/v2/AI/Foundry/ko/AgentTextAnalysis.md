# Narrator Script · 한국어 (ko) — Journey 05 · Azure AI Language를 사용한 텍스트 분석

**Source animation:** `static/v2/AI/Foundry/AgentTextAnalysis.html`
**Language:** Korean (ko). 영어 마스터 대본에서 번역. 연기 지시 `[tags]` 와 멈춤 `[NNNms]` 는 그대로 유지. 단계 제목은 1:1 매핑을 위해 영어로 둡니다.

애니메이션 한 단계당 한 블록.

---

## Step 1 · The Problem

[serious] 리뷰, 지원 티켓, 진료 기록, 계약서. 대부분의 비즈니스 데이터는 구조화되지 않은 텍스트입니다.
[600ms]
[concerned] 그것을 전부 손으로 읽는 것은 확장되지 않습니다.
[600ms]
[curious] 그렇다면 어떻게 자동으로 의미를 파악할 수 있을까요?

## Step 2 · One Service, Many Capabilities

[confident] 바로 그때 Azure AI Language가 등장합니다. Foundry 안에서 띄우는, 미리 만들어진 서비스입니다.
[600ms]
[impressed] 하나의 리소스, 하나의 엔드포인트와 키가, 텍스트 기능의 전체 모음을 열어 줍니다.
[600ms]
[reassuring] 모델은 사전 학습되어 있습니다. 모을 데이터도, 돌릴 학습도 없습니다.

## Step 3 · Language Detection

[confident] 간단한 것부터 시작하죠. 언어 감지입니다.
[600ms]
[calm] 어떤 텍스트를 주든, 언어와 표준 ISO 코드, 그리고 얼마나 확신하는지 알려 주는 신뢰도 점수를 반환합니다.
[600ms]
[optimistic] 기본처럼 들리지만, 거의 모든 다국어 파이프라인에서 필수적인 첫 단계입니다. 메시지를 번역하거나 라우팅하거나 분석하기 전에, 먼저 그것이 어떤 언어로 쓰였는지 알아야 하니까요.

## Step 4 · Key Phrases

[intrigued] 다음은 핵심 구문 추출입니다.
[600ms]
[confident] 구조화되지 않은 텍스트를 훑어서, 주요 논점, 즉 정말로 중요한 단어와 구문을, 학습 없이 자동으로 뽑아냅니다.
[600ms]
[optimistic] 문서에 태그를 달거나, 검색 인덱스를 만들거나, 수천 개의 리뷰나 티켓에 숨은 주제를 빠르게 드러내는 데 안성맞춤입니다.

## Step 5 · Entity Linking

[confident] 엔터티 연결은 한 걸음 더 나아갑니다.
[600ms]
[impressed] 텍스트 속의 알려진 엔터티, 여기서는 Microsoft, Bill Gates, Paul Allen을 찾아, 각각을 Wikipedia 같은 신뢰할 수 있는 지식 베이스의 해당 페이지에 연결합니다.
[600ms]
[reassuring] 바로 이 연결이 모호함을 해소합니다. 예를 들어 "Surface"나 "Word"라는 단어는 일상적인 사물일 수도, Microsoft 제품일 수도 있지만, 엔터티 연결은 앞뒤 문맥을 사용해 정확히 올바른 대상에 연결합니다.

## Step 6 · Sentiment

[confident] 감정 분석은 텍스트 속 감정을 읽어, 긍정, 부정, 중립으로, 각각 신뢰도 점수와 함께 평가합니다.
[600ms]
[intrigued] 그런데 이 리뷰를 자세히 보세요. "Contoso X2 헤드폰은 음질은 훌륭하지만, 배송은 지독하게 느렸다." 사실 한 번에 두 가지를 말하고 있습니다. 아주 좋아하는 음질과, 몹시 싫어하는 배송입니다.
[600ms]
[calm] 그래서 하나의 전체 라벨로는 맞지 않습니다. 기껏해야 "복합적"이라고밖에 할 수 없고, 그러면 실제로 무슨 일이 있었는지가 가려집니다.
[600ms]
[impressed] 바로 여기서 의견 마이닝이 더 깊이 들어갑니다. 리뷰를 대상별로 나눠, "음질", 즉 제품 자체는 긍정으로, "배송", 즉 배송 경험은 부정으로 나옵니다.
[600ms]
[optimistic] 두 측면, 두 개의 정반대 의견이 깔끔하게 분리됩니다. 그래서 리뷰가 복합적이라는 것뿐 아니라, 무엇을 칭찬하고 무엇을 고쳐야 하는지까지 정확히 알게 됩니다.

## Step 7 · PII Detection

[serious] 이제 개인정보 보호에 중요한 기능, PII 감지입니다.
[600ms]
[confident] 개인 식별 정보, 이름, 이메일 주소, 전화번호, 계정 ID 등을 자동으로 찾아냅니다.
[600ms]
[reassuring] 그리고 텍스트가 저장되거나 기록되거나 모델과 공유되기 전에, 그 모든 것을 가릴 수 있습니다. 그래서 민감한 고객 데이터가 파이프라인으로 새어 나가지 않고, 기본적으로 규정을 준수하도록 돕습니다.

## Step 8 · Summarization

[confident] 요약은 긴 문서를 두 가지 방식으로 다룹니다.
[600ms]
[calm] 추출 요약은 가장 중요한 문장을, 단어 그대로 뽑아냅니다.
[600ms]
[impressed] 추상 요약은 더 나아가, 완전히 새로운 단어로 간결한 요약을 새로 씁니다. 마치 사람이 하듯이.

## Step 9 · In the Real World

[optimistic] 이제 이 기능들을 결합하면, 실제 문제들이 스르르 풀리기 시작합니다.
[600ms]
[confident] 고객 피드백을 대규모로 분석하고, 임상 기록을 읽어 내고, 재무 문서를 처리하고, 긴 법률 파일을 몇 초 만에 요약합니다.
[600ms]
[encouraging] 각 기능은 하나의 구성 요소입니다. 함께라면, 진지한 일을 해냅니다.

## Step 10 · Skills via MCP

[intrigued] 바로 여기서 이 모든 것이 에이전트와 연결됩니다.
[600ms]
[confident] Foundry 에이전트는 MCP 서버를 통해 Azure AI Language에 접근할 수 있습니다. 지금까지 본 모든 기능을 호출 가능한 도구로 노출합니다.
[600ms]
[impressed] 그래서 에이전트 스스로가, 그 순간에 판단합니다. 언어를 감지할지, 핵심 구문을 뽑을지, PII를 가릴지, 문서를 요약할지. 딱딱하게 코딩된 파이프라인은 필요 없고, 알맞은 기술을 알맞은 때에 쓰는 것입니다.

## Step 11 · Get Started

[encouraging] 그럼, 직접 시도해 볼 준비가 되셨나요?
[800ms]
[confident] Language 리소스를 만들고, Language Studio에서 각 기능을 실험한 다음, 앱에서 곧바로 호출하세요. 또는 MCP를 통해 에이전트에 연결해 도구로 접근하게 하세요.
[600ms]
[optimistic] 모델 학습도, 무거운 설정도 없습니다. 오늘 당장, 여러분의 텍스트에서 진짜 인사이트를 뽑아내기 시작할 수 있습니다.
