# Narrator Script · 한국어 (ko) — Journey 06 · Azure AI Speech로 말하는 앱

**Source animation:** `static/v2/AI/Foundry/AgentSpeech.html`
**Language:** Korean (ko). 영어 마스터 대본에서 번역. 연기 지시 `[tags]` 와 멈춤 `[NNNms]` 는 그대로 유지. 단계 제목은 1:1 매핑을 위해 영어로 둡니다.

애니메이션 한 단계당 한 블록.

---

## Step 1 · Why Give Software a Voice?

[curious] 사람은 자연스럽게 말하고 듣습니다.
[600ms]
[confident] Azure AI Speech는 그것을 여러분의 앱으로 가져옵니다. 음성 명령을 받고, 말로 된 질문에 답하고, 텍스트를 소리 내어 읽습니다.
[600ms]
[reassuring] 누구에게나 자연스럽고 접근하기 쉽게 느껴지는 소프트웨어입니다.

## Step 2 · Two Core Capabilities

[confident] Speech는 두 방향으로 동작합니다.
[600ms]
[calm] Speech to Text는 오디오를 텍스트로 바꾸고,
[600ms]
[impressed] Text to Speech는 텍스트를 자연스러운 목소리로 소리 내어 읽습니다.

## Step 3 · How Speech to Text Works

[intrigued] 그렇다면 Speech to Text는 실제로 어떻게 동작할까요?
[800ms]
[confident] 먼저 음향 모델이 원시 오디오를 음소, 즉 소리의 기본 구성 요소로 나눕니다.
[600ms]
[calm] 그다음 언어 모델이 그 음소들을 단어와 문장으로 조립합니다.
[600ms]
[optimistic] 두 모델이 힘을 합쳐, 우리가 듣는 방식 그대로 듣는 것입니다.

## Step 4 · Speech to Text in the Real World

[optimistic] 음성을 텍스트로 바꾸면 많은 것이 열립니다.
[600ms]
[confident] 핸즈프리 워크플로, 접근성을 위한 실시간 자막, 그리고 통화와 회의의 검색 가능한 기록.
[600ms]
[encouraging] 말한 단어가, 행동으로 옮길 수 있는 데이터가 됩니다.

## Step 5 · How Text to Speech Works

[confident] 반대 방향에서, Text to Speech는 먼저 텍스트를 토큰화한 다음, 음성적, 운율적 단위, 즉 개별 소리와 말의 리듬과 멜로디로 변환합니다.
[600ms]
[impressed] 거기서부터, 로봇 같은 단조로움이 아니라, 매끄럽고 자연스러운 오디오를 생성합니다.
[600ms]
[reassuring] 그리고 여러분이 완전히 주도권을 쥡니다. 목소리, 말하는 속도, 음높이, 음량을 브랜드에 맞게 선택하세요.

## Step 6 · The TTS API

[confident] Foundry 포털에서, 목소리를 고르고 text-to-speech API를 호출합니다.
[600ms]
[impressed] 수십 개 언어와 억양의 사전 정의된 목소리에 더해, 실제 같은 뉴럴 보이스가 있습니다.
[600ms]
[intrigued] 심지어 맞춤형 브랜드 보이스를 만들 수도 있습니다.

## Step 7 · Speech-Capable Agents

[excited] 이 둘을 이어 붙이면, 에이전트는 진정한 음성 파트너가 됩니다.
[600ms]
[confident] Speech to Text가 사용자가 말한 것을 포착하고, 에이전트가 그것을 두고 추론하며,
[600ms]
[impressed] Text to Speech가 그 답을 소리 내어 말합니다.

## Step 8 · Speech-to-Speech Scenarios

[optimistic] 에이전트가 듣고 말할 수 있게 되면, 새로운 경험이 열립니다.
[600ms]
[confident] 운전 중의 핸즈프리 도움, 또는 두 언어 사이의 실시간 번역.
[600ms]
[encouraging] 음성은 키보드를 완전히 없앱니다.

## Step 9 · Voice Live

[serious] 음성 에이전트를 손으로 만들려면, speech-to-text, 추론, text-to-speech를, 모두 저지연으로 유지하며 꿰매야 합니다.
[600ms]
[confident] Voice Live는 그 셋을 Azure가 관리하는 하나의 서비스로 결합합니다.
[600ms]
[impressed] 매끄럽고 실시간인 음성 대화를, 연결할 배관 없이.

## Step 10 · How It Fits Together

[calm] 모든 것이 깔끔하게 층층이 맞물립니다.
[600ms]
[confident] Azure AI Speech는 귀와 입이고, 여러분의 에이전트 로직이 결정을 내리며,
[600ms]
[reassuring] Foundry 도구나 MCP 서버가, 음성을 에이전트가 필요할 때 호출할 수 있는 기능으로 노출합니다.

## Step 11 · Get Started

[encouraging] 그럼, 시작하는 방법은 이렇습니다.
[600ms]
[confident] Azure AI Speech 리소스를 만들고, Foundry 포털에서 다양한 목소리를 바로 시험해 본 다음, 자신의 앱에서 speech to text와 text to speech를 호출하세요.
[600ms]
[optimistic] 또는 그것들을 곧바로 에이전트에 연결해, 마침내 진짜 목소리를 주세요. 듣고, 말로 답할 수 있도록.
