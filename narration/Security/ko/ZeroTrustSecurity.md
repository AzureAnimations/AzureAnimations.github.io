# Narrator Script · 한국어 (ko) — Journey 05 · Zero Trust 보안 아키텍처

**Source animation:** `static/v2/Security/ZeroTrustSecurity.html`
**Language:** Korean (ko). 영어 마스터 대본에서 번역. 연기 지시 `[tags]` 와 멈춤 `[NNNms]` 는 그대로 유지(읽지 않는 연출 지시). 단계 제목은 1:1 매핑을 위해 영어로 둡니다.

애니메이션 한 단계당 한 블록.

---

## Step 1 · Start from the assembled Contoso design

[confident] 피날레에서는 모든 것을 Zero Trust 아래 하나로 모읍니다.
[600ms]
[calm] 앞선 단계에서 이미 로컬 비밀은 제거되었습니다. 이제 모든 민감한 요청은 여전히 올바른 ID, 올바른 네트워크 경로, 올바른 역할을 만족해야 합니다.
[600ms]
[serious] 한 구성 요소가 손상되더라도, 그것은 유지되어야 합니다.
[800ms]
[determined] 규칙은 간단합니다. 앱 내부에서 왔다는 이유만으로 요청을 신뢰하지 마세요. 매번 ID, 경로, 권한 부여를 증명하게 하세요.

## Step 2 · Add Private Endpoint to the sensitive services

[confident] 먼저, 네트워크 절반입니다. Private Endpoint를 추가합니다.
[600ms]
[calm] Key Vault과 App Configuration 모두에 대해, Private Endpoint를 Contoso의 가상 네트워크로 가져옵니다.
[600ms]
[impressed] 앱은 완전히 동일한 서비스를 계속 사용하지만, 이제 경로는 VNet 내부의 프라이빗 IP에 도달합니다.
[600ms]
[reassuring] 경로는 프라이빗이고, 네트워크에 로컬이며, 명시적입니다.

## Step 3 · Disable the public path too

[intrigued] 하지만 프라이빗 경로만으로 충분할까요?
[800ms]
[serious] 꼭 그렇지는 않습니다. Private Endpoint는 공용 경로를 자동으로 제거하지 않습니다.
[600ms]
[determined] 그래서 Key Vault과 App Configuration의 공용 네트워크 액세스도 [사용]에서 [사용 안 함]으로 전환해야 합니다.
[600ms]
[concerned] 그렇지 않으면 안전한 경로와 열린 경로가 나란히 존재합니다. 전형적인 잘못된 안도감입니다.

## Step 4 · Separate duties with Azure RBAC

[confident] 다음으로, Azure RBAC로 직무를 분리합니다.
[600ms]
[calm] 기존 Key Vault 액세스 정책을 역할 기반 액세스 제어로 교체합니다.
[600ms]
[impressed] 런타임 앱은 비밀을 읽기만 하고, 보안 팀은 회전을 관리하며, CI/CD는 한 작업에 필요한 좁은 범위만 얻습니다.
[600ms]
[reassuring] 최소 권한은 하나의 강력한 ID가 아닙니다. 서로 다른 ID가 서로 다른 일을 하는 것입니다.

## Step 5 · Assume breach operationally

[serious] 마지막으로, 침해를 가정합니다. 운영 면에서요.
[600ms]
[calm] 진단 설정을 Log Analytics와 Microsoft Sentinel로 스트리밍하고, 비밀 회전을 계속 진행하며, GitHub Actions가 저장된 관리자 자격 증명 대신 페더레이션 자격 증명을 사용하게 하세요.
[600ms]
[determined] Zero Trust는 단지 설계상이 아니라 운영상의 것입니다.
[600ms]
[reassuring] 설계가 가동된 후에도, 여전히 증거, 경고, 회전이 필요합니다.

## Step 6 · The hardened Contoso design — end to end

[reflective] 그리고 여기 강화된 Contoso 설계가, 끝에서 끝까지 있습니다.
[600ms]
[proud] 같은 구성 요소들이 이제 프라이빗 경로, 관리 ID, 분리된 RBAC 직무, 운영 로그, 그리고 비밀 없는 CI/CD 뒤에 있습니다.
[600ms]
[confident] 비밀 없고, 최소 권한이며, 명시적으로 검증된 액세스가, 앱의 한쪽 끝에서 다른 쪽 끝까지.
[600ms]
[optimistic] 그것이 이 여정 전체의 요점이며, 하나의 그림으로 모아졌습니다.
