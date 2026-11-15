# Narrator Script — Security · Secure AI workloads in Azure: gateway, guardrails and Defender for AI

**Source animation:** [SecureAiWorkloads.html](../../../journeys/Security/SecureAiWorkloads.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/api-management/genai-gateway-capabilities>
- <https://learn.microsoft.com/azure/foundry/guardrails/guardrails-overview>
- <https://learn.microsoft.com/azure/defender-for-cloud/ai-threat-protection>
- <https://learn.microsoft.com/azure/defender-for-cloud/ai-onboarding>

---

## Step 1 · A Foundry app goes live

[calm] Contoso Assist는 호출자에게 열려 있고, 곧 실제 트래픽이 들어옵니다. 보안 엔지니어 Priya는 먼저 세 가지를 알고 싶어 합니다.
[600ms]
[curious] 누가 호출할 수 있는지, 대화 중에 무엇이 잘못될 수 있는지, 그리고 누가 공격하면 어떻게 알 수 있는지입니다.
[600ms]
[confident] 이번 레슨은 S C 500에서 AI에 해당하는 부분을 다룹니다. Contoso와 Priya, 그리고 앱은 모두 가상입니다.

## Step 2 · Three layers around one app

[calm] 답은 앱 하나를 둘러싼 세 개의 계층입니다. 앞에는 게이트웨이가 있고, 안에서는 가드레일이 동작하고, 주변은 Defender가 감시합니다.
[600ms]
[confident] 계층마다 질문 하나에 답하고, 각각 다른 Azure 기능이라서 설정하는 위치도 다릅니다.
[600ms]
[curious] 게이트웨이는 API Management 기능이고, 가드레일은 Microsoft Foundry에 속하며, Defender for AI services는 Defender for Cloud의 플랜입니다.

## Step 3 · AI gateway: one front door

[calm] 먼저 게이트입니다. API Management를 모델과 에이전트, 도구 앞에 두면, 모든 AI 호출이 내가 통제하는 한곳을 거치게 됩니다.
[600ms]
[confident] AI 게이트웨이는 별도 제품이 아니라 API Management 기능 모음입니다.
[600ms]
[curious] Foundry에서는 미리 보기 기능이고, Manage 아래에서 켭니다. 현재 지원하는 계층은 Microsoft Learn에서 확인하세요.

## Step 4 · Gateway policies on every call

[calm] 정책은 요청마다 순서대로 실행됩니다. 먼저 누가 호출하는지 확인하고, 다음으로 토큰을 제한하고, 마지막으로 무슨 일이 있었는지 기록합니다.
[600ms]
[confident] 게이트웨이는 관리 ID로 모델에 접근할 수 있어서, 앱에 API 키를 둘 필요가 없습니다.
[600ms]
[reassuring] 토큰 메트릭은 모니터링으로 보내고, 프롬프트와 응답도 로그로 남길 수 있어서, 사용량을 확인하고 오남용을 찾아낼 수 있습니다.

## Step 5 · Content filters and guardrails

[calm] 다음은 가드입니다. 가드레일은 Foundry 안에서 이름을 붙여 만든 컨트롤 모음입니다. 컨트롤마다 어떤 위험을, 어디서 검사하고, 걸리면 어떻게 할지를 정합니다.
[600ms]
[confident] 혐오, 성적인 내용, 폭력, 자해에 대해서는 차단 수준이 어떤 심각도를 차단할지 정합니다. Low는 높은 심각도만 차단하고, High는 낮음과 중간, 높음을 모두 차단합니다.
[600ms]
[serious] 분류기가 틀릴 수도 있으니, 내 콘텐츠로 직접 테스트해 보세요.

## Step 6 · Agent guardrails: four checkpoints

[calm] 에이전트에는 프롬프트 검사만으로는 부족합니다. 가드레일은 사용자 입력과 도구 호출, 도구 응답, 최종 출력까지 검사할 수 있습니다.
[600ms]
[serious] 이 기능은 미리 보기입니다. 도구 검사 지점은 조정을 지원하는 도구에서만 동작해서, 다른 도구는 검사하지 않습니다.
[600ms]
[confident] 가드레일은 Foundry Agent Service에서 만든 에이전트에 적용되므로, 기대기 전에 에이전트 유형을 먼저 확인하세요.

## Step 7 · Try it: guardrail on, prompt replayed

[curious] 이제 직접 해 보세요. 같은 위험한 프롬프트를 두 번 보내 보세요. 한 번은 가드레일을 끄고, 한 번은 켜고요.
[600ms]
[impressed] 스위치를 켜 보면서 무엇이 달라지는지 확인하세요. 컨트롤이 작동하면 채팅에 어떤 위험이 감지됐는지, 어느 검사 지점에서 감지됐는지 표시됩니다.
[600ms]
[reassuring] 이건 모의 화면입니다. Foundry에서는 가드레일을 만들고 할당한 다음, 플레이그라운드에서 프로덕션이 아닌 모델이나 에이전트로 테스트합니다.

## Step 8 · Defender for AI services

[calm] 이번에는 감시자입니다. 플랜 하나를 켜면 Defender for Cloud가 프롬프트와 응답에서 공격을 감시하고, 경고를 띄웁니다.
[600ms]
[confident] Prompt Shields와 Microsoft 위협 인텔리전스를 함께 쓰고, Owner나 Contributor 역할이 있으면 Defender 플랜에서 켤 수 있습니다.
[600ms]
[serious] 텍스트만 검사합니다. 그리고 의심스러운 프롬프트 증거를 켜지 않았다면, 경고에서 프롬프트 내용이 가려집니다.

## Step 9 · An AI alert, end to end

[serious] 여기서는 탈옥 시도가 차단되고 경고가 올라옵니다. Priya가 경고를 열어 증거를 보면서 조사합니다.
[600ms]
[curious] 경고 이름과 심각도, 전술은 AI 서비스용 Defender for Cloud 경고에서 가져옵니다.
[600ms]
[concerned] 탐지된 변종이라고 나오면, Prompt Shields가 시도를 알아챘지만 차단하지는 않았다는 뜻입니다. 가드레일 설정을 살펴보라는 신호입니다.

## Step 10 · Data and AI security dashboard

[calm] Defender for Cloud의 한 화면에서 데이터와 AI 리소스를 한데 모아, 얼마나 잘 보호되는지 보여 주고 무엇부터 고쳐야 하는지 알려 줍니다.
[600ms]
[confident] 구독 단위로 켜고, 켜 둔 플랜이 반영됩니다. 그래서 모든 기능을 쓰려면 플랜 여러 개와 Security explorer 역할이 필요합니다.
[600ms]
[reflective] 화면에 나온 숫자는 가상입니다.

## Step 11 · Which control answers which risk?

[curious] 위험 여섯 가지에 계층은 세 개입니다. 각 위험이 가장 잘 맞는 컨트롤로 들어가는 모습을 보세요.
[600ms]
[confident] 호출자 ID와 토큰 예산은 게이트웨이의 몫이고, 유해한 프롬프트와 위험한 도구 호출은 가드레일의 몫입니다. 실시간 공격과 보안 상태는 Defender의 몫입니다.
[600ms]
[reflective] 실제 설계에서는 계층이 겹치기도 하니, 카드마다 유일한 답이 아니라 가장 잘 맞는 하나를 보여 줍니다.

## Step 12 · Recap: gate it, guard it, watch it

[calm] 게이트로 막고, 가드레일로 지키고, Defender로 감시하세요. 게이트웨이는 호출자와 예산을, 가드레일은 프롬프트와 도구를, Defender는 경고와 보안 상태를 맡습니다.
[600ms]
[confident] 이렇게 Priya의 세 가지 질문에 답했고, 이는 S C 500 기술 항목 중 AI 워크로드 보안에 해당합니다.
[600ms]
[proud] 기술 목록은 시간이 지나면 바뀌니, 최신 학습 가이드를 확인하세요.
