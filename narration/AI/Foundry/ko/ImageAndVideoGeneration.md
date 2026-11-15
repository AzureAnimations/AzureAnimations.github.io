# Narrator Script — Foundry · Image and Video Generation

**Source animation:** [ImageAndVideoGeneration.html](../../../../journeys/AI/Foundry/ImageAndVideoGeneration.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/ai-foundry/openai/how-to/dall-e>
- <https://learn.microsoft.com/azure/ai-foundry/openai/concepts/video-generation>
- <https://learn.microsoft.com/azure/ai-foundry/openai/concepts/content-credentials>

---

## Step 1 · Models that read, models that make

[calm] 어떤 모델은 읽습니다. 비전 모델은 이미지와 텍스트로 답변을 봅니다.
[600ms]
[curious] 생성형 이미지 모델은 그 반대를 합니다. 당신의 말을 받아 완전히 새로운 그림을 만듭니다.
[600ms]
[confident] Contoso Outdoor는 우리의 가상 회사이며, 모든 사진은 단순한 그림으로 모델 결과를 대신합니다.

## Step 2 · Noise in, image out

[curious] 많은 이미지 모델이 확산 모델입니다. 무작위 잡음에서 시작해 단계별로 다듬어 그림이 나타날 때까지 진행합니다.
[600ms]
[calm] 당신의 프롬프트는 그 모든 단계를 안내하며, 다른 무작위 시작은 다른 이미지를 제공합니다.
[600ms]
[reflective] 모델마다 디자인이 다르니, 이건 레시피가 아니라 아이디어로 생각하세요.

## Step 3 · Describe what you want

[calm] 좋은 프롬프트는 주제, 스타일, 구도, 그리고 제외할 것을 명확히 짚어 줍니다.
[600ms]
[curious] 여기에서 선택지를 시도해 보고, 각 선택지마다 화면이 변하는 것을 지켜보세요.
[600ms]
[serious] 제약 조건은 프롬프트 안에 넣습니다. 예를 들어 텍스트 금지 같은 것입니다. 하지만 모델이 요청하지 않은 것을 추가할 수 있으니 항상 결과를 검토하세요.

## Step 4 · Size, quality, how many

[calm] 프롬프트 옆에서 몇 가지 옵션을 설정합니다. 크기, 품질 수준, 요청할 이미지 수입니다.
[600ms]
[curious] 요청이 바뀌는 것을 원하는 대로 지켜보세요. 한 통화는 1장에서 10장까지 다양한 이미지를 반환할 수 있습니다.
[600ms]
[reassuring] 저화질과 정사각형 이미지가 더 빠르게 생성되고, 일부 모델은 커스텀 크기를 지원하므로 배포 시 지원하는 내용을 확인하세요.

## Step 5 · Edit with a mask

[curious] 사진의 한 부분만 바꾸려면, 이미지 자체, 해당 영역을 표시하는 마스크, 그리고 프롬프트 세 가지를 보내세요.
[600ms]
[calm] 마스크 바깥의 모든 것은 그대로 유지됩니다. 여기서는 분홍색 브러시가 마스크 역할을 합니다.
[600ms]
[confident] 편집 API에서는 마스크가 이미지와 같은 크기의 PNG 이고, 완전히 투명한 픽셀이 변경할 영역을 표시합니다.

## Step 6 · Remix with image-to-image

[curious] 모델에게 기존 이미지와 프롬프트를 주면, 이를 새롭게 해석한 결과를 만들어 줍니다.
[600ms]
[calm] 한 번에 여러 개의 입력 이미지를 보낼 수 있으며, 한 번의 편집 호출로 최대 16장까지 전송할 수 있습니다.
[600ms]
[reassuring] 입력 충실도가 높아 원본의 세부 사항을 더 많이 유지하지만, 모든 모델이 이 설정을 지원하는 것은 아니니 본인 모델을 확인해 보세요.

## Step 7 · From prompt to short clip

[curious] 비디오 모델은 텍스트, 이미지 또는 기존 클립을 짧은 영상으로 변환합니다.
[600ms]
[calm] 작업으로 실행됩니다. 제출하고 상태를 확인한 후 결과를 다운로드하면 됩니다.
[600ms]
[serious] Sora 2의 비디오 생성은 Foundry에서 미리보기 기능으로, 세부 사항과 이용 가능 여부가 변동될 수 있습니다.

## Step 8 · Filters on the way in and out

[serious] 가드레일은 모델 실행 전에 프롬프트를 확인하고, 제작 후 사진을 확인합니다.
[600ms]
[calm] 안전하지 않은 요청이나 결과는 차단되고, 애플리케이션에는 오류가 반환됩니다.
[600ms]
[confident] 이 기능은 Azure AI 콘텐츠 안전(Content Safety)으로 구동되며, 증오, 성, 폭력, 자해 콘텐츠를 분류하며, 배포 시 수준을 설정할 수 있습니다.

## Step 9 · Show it was made by AI

[curious] Azure OpenAI 이미지 모델의 이미지는 Content Credentials(서명된 메타데이터)를 포함하며, 이는 해당 이미지가 AI생성됨을 나타냅니다.
[600ms]
[calm] 지원되는 모델은 메타데이터가 제거되어도 보이지 않는 워터마크를 추가할 수 있습니다.
[600ms]
[reassuring] 콘텐츠 자격 증명은 오픈 C2PA 표준을 따르므로, 누구나 검증 도구로 확인할 수 있습니다.

## Step 10 · Deploy it, try it, call it

[calm] Foundry에서는 이미지 모델을 배포하고, 이미지 플레이그라운드에서 프롬프트를 시도한 뒤, 생성된 코드를 복사합니다.
[600ms]
[confident] 그 코드는 당신의 앱에서 동일한 배포를 호출합니다. 여기에는 키나 실제 엔드포인트가 표시되지 않습니다.
[600ms]
[serious] 키 Microsoft Entra ID 없는 API 로그인을 선호하고, 속도 제한이 있을 것으로 예상하니 백오프 상태로 다시 시도하세요.

## Step 11 · Create, protect, ship

[calm] 프롬프트를 하고 옵션을 조정하세요. 마스크와 변형으로 편집하세요. 가드레일과 출처를 추가하세요.
[600ms]
[confident] 그 다음 Foundry를 통해 모두 배포해서 앱이 호출할 수 있게 하세요.
[600ms]
[proud] 기술이 변하니, 공식 학습 가이드를 열어 오늘날 시험에서 무엇을 다루는지 확인하세요.
