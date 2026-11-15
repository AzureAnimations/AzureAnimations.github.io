# Narrator Script · 한국어 (ko) — Journey 07 · Computer Vision으로 보고 만들기

**Source animation:** `static/v2/AI/Foundry/AgentVision.html`
**Language:** Korean (ko). 영어 마스터 대본에서 번역. 연기 지시 `[tags]` 와 멈춤 `[NNNms]` 는 그대로 유지. 단계 제목은 1:1 매핑을 위해 영어로 둡니다.

애니메이션 한 단계당 한 블록.

---

## Step 1 · What Is Computer Vision?

[curious] 만약 여러분의 소프트웨어가 정말로 볼 수 있다면 어떨까요?
[800ms]
[confident] 그것이 Computer Vision입니다. 이미지, 동영상, 실시간 카메라 영상을 해석하고,
[600ms]
[impressed] 물체를 감지하고, 텍스트를 읽고, 장면 전체를 이해합니다.

## Step 2 · In the Real World

[optimistic] 그리고 이런 기능은 어디에나 나타납니다.
[600ms]
[confident] 결함을 찾아내는 공장 현장부터 스캔 영상을 판독하는 병원까지, 비전 모델은 물리 세계를 검사하고 모니터링합니다.
[600ms]
[impressed] 수작업 검토보다 더 빠르고 더 일관되게.

## Step 3 · What Vision Models Can Do

[confident] 한 장의 이미지를, 한 번에 여러 방식으로 분석할 수 있습니다.
[600ms]
[impressed] 모델은 물체를 찾고, 패턴을 인식하고, 인쇄되거나 손으로 쓴 텍스트를 OCR로 읽고,
[600ms]
[calm] 장면 전체를 쉬운 말로 설명할 수 있습니다.
[600ms]
[optimistic] 한 장의 그림에서, 여러 종류의 인사이트를 얻습니다.

## Step 4 · Multimodal GPT

[intrigued] 이제 여기서부터 강력해집니다.
[600ms]
[confident] 멀티모달 모델은 텍스트와 이미지를 하나의 요청으로 함께 받아, 둘 다 동시에 추론합니다.
[600ms]
[impressed] 이미지를 가리키고, 그것에 대해 질문하면, 자연어 답변이 돌아옵니다.

## Step 5 · The Foundry Catalog

[confident] Microsoft Foundry는 비전 지원 모델의 전체 카탈로그를 제공합니다.
[600ms]
[calm] 간단한 작업을 위한 빠르고 저렴한 옵션부터, 대표적인 추론 모델과 파트너 모델까지.
[600ms]
[reassuring] 그리고 모두 하나의 일관된 API로 호출할 수 있습니다.

## Step 6 · The Responses API

[confident] 비전 모델을 호출하는 것은 놀라울 만큼 간단합니다.
[600ms]
[calm] 지시문과 이미지, URL이든 base64든,를 하나의 Responses API 요청으로 보냅니다.
[600ms]
[impressed] 모델은 쉬운 말로 답합니다.

## Step 7 · Generating Images & Video

[excited] 하지만 비전은 보는 것만이 아닙니다. 만들 수도 있습니다.
[600ms]
[confident] GPT-Image는 여러분의 텍스트 프롬프트를 완전히 새로운 이미지로 바꾸고, 기존 이미지를 편집하기까지 합니다.
[600ms]
[impressed] 그리고 Sora는, 텍스트, 이미지, 클립으로부터 완전한 동영상을 생성합니다.

## Step 8 · Build a Vision App

[encouraging] 그럼, 무언가를 만들어 봅시다.
[600ms]
[confident] Foundry 리소스를 세우고, 플레이그라운드에서 비전 모델을 바로 시험한 다음, 자신의 앱에서 Responses API를 호출하세요.
[600ms]
[optimistic] 또는 주변 세계를 보는 동시에 완전히 새로운 비주얼을 만들어 낼 수 있는 에이전트에 연결하고, 실제 문제에 풀어놓아 보세요.
