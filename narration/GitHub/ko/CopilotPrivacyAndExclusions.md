# Narrator Script — GitHub · Copilot Privacy, Content Exclusions and Safeguards

**Source animation:** [CopilotPrivacyAndExclusions.html](../../../journeys/GitHub/CopilotPrivacyAndExclusions.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-300>
- <https://learn.microsoft.com/visualstudio/ide/visual-studio-github-copilot-admin>

---

## Step 1 · Two Worries, One Tool

[calm] Contoso는 모든 편집기에서 Copilot을 쓰고 싶어 합니다. 그런데 저장소에는 비밀 파일이 있고, Ravi는 라이선스가 있는 코드가 걱정됩니다.
[600ms]
[concerned] 걱정은 두 가지입니다. Copilot이 무엇을 읽을 수 있는지, 그리고 무엇을 제안할 수 있는지입니다.
[600ms]
[reassuring] Copilot에는 각각에 대한 설정이 있습니다. 콘텐츠 제외와 공개 코드 필터입니다.

## Step 2 · What Copilot Sends and Keeps

[curious] Copilot은 내 코드와 그 컨텍스트를 프롬프트로 보내고, 제안을 돌려받습니다.
[600ms]
[confident] 설정 세 가지가 무엇이 들어가고, 무엇이 나오고, 데이터가 어떻게 쓰이는지를 정합니다. 콘텐츠 제외, 공개 코드 필터, 데이터 사용입니다.
[600ms]
[reflective] 무엇을 보관하고 학습에 쓰는지는 플랜에 따라 다르니, GitHub Copilot Trust Center를 확인하세요.

## Step 3 · Content Exclusions: What They Are

[calm] 콘텐츠 제외는 Copilot에게 내가 고른 파일이나 저장소를 무시하라고 알려 줍니다.
[600ms]
[confident] 그래서 제외된 콘텐츠는 Copilot의 제안이나 답변에 영향을 줄 수 없습니다. 제외된 콘텐츠에는 제안도, 컨텍스트도, 답변도, 리뷰도 없습니다.
[600ms]
[serious] 콘텐츠 제외는 Copilot Business와 Copilot Enterprise 플랜에서 쓸 수 있습니다.

## Step 4 · Write an Exclusion Rule

[curious] 관리자는 저장소 설정의 Copilot, 콘텐츠 제외에서 경로를 나열합니다.
[600ms]
[calm] 한 줄에 따옴표로 묶은 경로나 패턴 하나를 쓰고, 일치하는 파일은 모두 제외됩니다. 해시 기호로 주석을 달 수도 있습니다.
[600ms]
[reassuring] 일치 여부는 fnmatch 패턴으로 판단하며, 대소문자를 구분하지 않습니다.

## Step 5 · Who Can Set Exclusions

[calm] 규칙은 저장소, 조직, 또는 엔터프라이즈 전체에 설정할 수 있습니다. 어느 단계에서 설정하느냐에 따라 적용되는 대상이 달라집니다.
[600ms]
[confident] 저장소 관리자는 해당 저장소에, 조직 소유자는 조직에서 좌석을 받은 사용자에게, 엔터프라이즈 소유자는 엔터프라이즈의 모든 Copilot 사용자에게 적용합니다.
[600ms]
[curious] 상속된 규칙은 수정할 수 없는 회색 상자로 표시됩니다.

## Step 6 · What the Exclusion Does

[curious] 일반 파일을 편집하면 제안이 나타납니다. 제외된 파일에서 똑같이 편집하면 아무 제안도 나오지 않습니다.
[600ms]
[confident] 채팅에서는 제외된 파일이 참조로 나타나지 않으므로, 채팅도 그 파일을 쓸 수 없습니다.
[600ms]
[serious] 편집기에서 Copilot을 끄는 설정은 개인 설정일 뿐, 규칙이 아닙니다.

## Step 7 · Matching Public Code

[calm] Copilot은 제안과 그 주변 코드를 GitHub의 공개 코드와 비교합니다.
[600ms]
[confident] 필터가 켜져 있으면 일치하는 제안은 표시되지 않습니다. 꺼져 있으면 일치하는 제안이 라이선스와 링크와 함께 표시됩니다.
[600ms]
[reassuring] 일치하는 코드가 없으면, 필터와 상관없이 제안이 나타납니다.

## Step 8 · Turn the Public Code Filter On

[curious] 이 설정을 누가 바꾸는지는 플랜에 따라 다릅니다. 플랜 버튼 세 개를 눌러 보고 누가 필터를 제어하는지 확인해 보세요.
[600ms]
[calm] 개인 플랜에서는 Copilot 설정에서 직접 허용이나 차단을 선택합니다.
[600ms]
[confident] 엔터프라이즈나 조직 관리자가 있으면 관리자가 모두에게 적용되게 설정합니다. 조직에서 좌석을 받았다면 설정이 상속되어 직접 바꿀 수 없습니다.

## Step 9 · Who Owns the Output

[calm] Copilot의 출력물은 GitHub가 소유하지 않습니다. 원래 가지고 있던 소유권은 그대로 유지됩니다.
[600ms]
[serious] 또한 만든 결과물에 대한 책임도 그대로 본인에게 있고, 필터는 위험을 줄여 줄 뿐입니다.
[600ms]
[reflective] 이것은 쉬운 말로 정리한 요약이지 법률 자문이 아닙니다. 그 이상의 내용은 본인이 맺은 계약에 따라 결정됩니다.

## Step 10 · When It Does Not Work

[curious] 증상에서 출발하세요. 제안이 없다면 제외된 파일이거나, 꺼진 언어이거나, 필터에 일치한 경우가 많습니다.
[600ms]
[confident] 제외된 파일이 여전히 쓰인다면 오래된 설정, 패턴, 심볼릭 링크, 간접 컨텍스트를 의심해 보세요. 창을 다시 불러오거나 앱을 다시 열어서 규칙을 새로 고치세요.
[600ms]
[serious] 그리고 기억하세요. 제외는 보안 경계가 아니라 안전장치입니다.

## Step 11 · Recap: Who Owns Which Setting

[calm] 관리자는 제외 규칙과 공개 코드 정책을 작성합니다.
[600ms]
[confident] 개발자는 규칙을 시험해 보고, 자기 필터를 설정하고, 배포하는 결과물을 검토합니다.
[600ms]
[proud] 이것으로 G H 300 학습 가이드의 기술 네 가지를 마칩니다. 한계는 꼭 기억하세요. 제외는 보안 경계가 아니라 안전장치입니다.
