# Narrator Script · 한국어 (ko) — Journey 04 · Service Principal 및 페더레이션 자격 증명

**Source animation:** `static/v2/Security/ServicePrincipal.html`
**Language:** Korean (ko). 영어 마스터 대본에서 번역. 연기 지시 `[tags]` 와 멈춤 `[NNNms]` 는 그대로 유지(읽지 않는 연출 지시). 단계 제목은 1:1 매핑을 위해 영어로 둡니다.

애니메이션 한 단계당 한 블록.

---

## Step 1 · Ship Contoso from GitHub to Azure

[confident] 목표는 이것입니다. Contoso를 GitHub에서 Azure로 곧장 배송하기.
[600ms]
[calm] Contoso의 앱은 GitHub에 있고, 모든 푸시는 그것을 빌드하고 Azure에 배포하는 GitHub Actions 워크플로를 시작해야 합니다.
[600ms]
[optimistic] 아무도 파일을 손으로 복사하지 않습니다. 간단한 git push가 앱을 자동으로 Azure App Service로 배송합니다.
[800ms]
[curious] 쉬워 보이죠... 그렇다면 무엇이 가로막을까요?

## Step 2 · GitHub and Azure are two different platforms

[concerned] 함정은 GitHub와 Azure가 서로 다른 두 플랫폼이라는 것입니다.
[600ms]
[calm] GitHub Actions는 Azure 밖에서 실행됩니다. 워크플로가 배포하려고 하면, Azure는 다른 플랫폼에서 온, 다른 로그인을 가진 알 수 없는 호출자를 봅니다.
[600ms]
[serious] 그래서 Azure는 그것을 차단합니다. 자신이 인식하는 ID의 요청만 수락하기 때문입니다.
[800ms]
[reflective] 다른 플랫폼, 다른 ID 시스템. 그리고 그 사이에 공유 ID는 없습니다.

## Step 3 · Trust starts with an identity

[intrigued] 그렇다면 그 간격을 어떻게 메울까요?
[800ms]
[confident] 신뢰는 ID에서 시작됩니다. 배포가 작동하려면, Azure는 GitHub 워크플로를 권한을 부여할 수 있는 알려진 호출자로 인식해야 합니다.
[600ms]
[calm] 그리고 해결책은 공유 암호가 아닙니다.
[600ms]
[reassuring] 그것은 Azure가 이미 신뢰하는 Microsoft Entra ID의 ID를 워크플로에 부여하는 것입니다.

## Step 4 · App Registration defines the identity

[confident] 그 ID는 App Registration에서 시작됩니다.
[600ms]
[calm] Contoso는 Microsoft Entra ID에 하나의 App Registration을 만듭니다. 이것이 애플리케이션 ID를 정의합니다.
[600ms]
[impressed] 이 테넌트에서 Azure는 대응하는 Service Principal, 즉 실제로 액세스 결정을 받는 엔터프라이즈 애플리케이션 인스턴스를 평가합니다.
[600ms]
[reassuring] 청사진과 인스턴스로 생각하세요. App Registration이 정의이고, Service Principal은 테넌트 내부에서의 지역 표현입니다.

## Step 5 · GitHub signs in as the Service Principal

[confident] 이제 GitHub가 그 Service Principal로 로그인합니다.
[600ms]
[calm] Azure는 워크플로에 애플리케이션(클라이언트) ID와 개체 ID를 가진 Service Principal을 줍니다. 이것이 Azure 내부의 GitHub ID입니다.
[600ms]
[impressed] GitHub Actions는 페더레이션 자격 증명을 사용해 비밀 없이 그것으로 인증하고, 그런 다음 Azure가 특정 범위의 역할로 권한을 부여합니다.
[600ms]
[reassuring] Service Principal로 감싸지면, GitHub는 모든 Azure ID처럼 동작합니다. 인증하고, 그런 다음 역할로 권한이 부여됩니다.

## Step 6 · Where federation shines

[optimistic] 그리고 이 신뢰 모델은 GitHub을 훨씬 넘어섭니다.
[600ms]
[calm] 같은 페더레이션 자격 증명은 Microsoft Entra가 검증할 수 있는 모든 외부 ID 공급자에서 작동합니다.
[600ms]
[impressed] Contoso는 그것을 GitHub Actions, 다른 클라우드, Kubernetes, 온-프레미스에서 재사용합니다. 그 어디에도 저장된 비밀이 없습니다.
[600ms]
[reassuring] 원본이 무엇이든 패턴은 동일합니다. 워크로드는 자체 공급자에서 토큰을 가져오고, Entra는 그것을 Azure 액세스 토큰과 교환합니다.

## Step 7 · From GitHub to Azure — secretless, end to end

[reflective] GitHub에서 Azure로. 비밀 없이, 끝에서 끝까지.
[600ms]
[confident] 두 개의 별도 플랫폼이므로, 워크플로는 Microsoft Entra ID에 ID를 얻습니다. App Registration과 Service Principal입니다.
[600ms]
[proud] 페더레이션 자격 증명 덕분에 Azure는 GitHub 자체의 토큰을 신뢰할 수 있으므로, 배포는 저장된 비밀 없이 실행됩니다.
[600ms]
[optimistic] 외부 워크로드에 ID를 주고, 그런 다음 Azure가 그 토큰을 신뢰하게 하세요. 그리고 같은 패턴은 거의 어디에나 도달합니다.
