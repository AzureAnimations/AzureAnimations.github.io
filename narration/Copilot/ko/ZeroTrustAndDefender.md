# Narrator Script — Microsoft 365 Copilot · Zero Trust and Defender XDR

**Source animation:** [ZeroTrustAndDefender.html](../../../journeys/Copilot/ZeroTrustAndDefender.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/security/zero-trust/zero-trust-overview>
- <https://learn.microsoft.com/entra/identity-platform/authentication-vs-authorization>
- <https://learn.microsoft.com/defender-xdr/microsoft-365-defender>
- <https://learn.microsoft.com/defender-xdr/incidents-overview>

---

## Step 1 · One password, every door

[curious] Contoso의 Alex, Mei, Jo, 그리고 침입자를 만나 보세요. 예전 모델에서는 네트워크 안에 있는 사람은 누구나 신뢰했습니다.
[600ms]
[serious] 오늘날의 공격은 신원 확인을 노립니다. 피싱 이메일 한 통, 도난당한 로그인 한 통, 침입자가 모든 문을 통과합니다.
[600ms]
[calm] 이 수업은 A B 900 시험의 Microsoft 365 보안 원칙 기술을 따라갑니다.

## Step 2 · Three Zero Trust principles

[confident] 제로 트러스트는 세 가지 원칙에 기반합니다: 명시적으로 확인하고, 최소 권한 액세스를 사용하고, 침해를 가정합니다.
[600ms]
[calm] Microsoft 365모든 접근 결정과 보안 통제를 안내합니다.
[600ms]
[reflective] 가장 큰 변화는 기본 신뢰에서 예외적 신뢰로 바뀐다는 것입니다. 위치 때문에 그냥 들어올 수 있는 것은 없습니다.

## Step 3 · Authentication, then authorization

[curious] 비슷하게 들리지만 역할은 다른 두 단어입니다. 인증은 당신이 누구인지 증명합니다.
[600ms]
[confident] 승인은 당신이 알려진 후에 무엇을 할 수 있는지를 결정합니다. 요청은 둘 다 필요하며, 어느 하나가 다른 하나를 대체하지 않습니다.
[600ms]
[calm] Microsoft 365에서는 Microsoft Entra 역할, Exchange 역할, 사이트 권한 등과 같은 것들에서 승인이 이루어집니다.

## Step 4 · Password, MFA, passwordless

[calm] 로그인 방법의 사다리를 상상해 보세요. 하단에는 공격자가 가장 쉽게 훔치기 쉬운 비밀번호가 있습니다.
[600ms]
[confident] 단계가 올라갈수록 도난당한 비밀번호의 유용성은 줄어듭니다. 다중인증은 두 번째 증거를 추가하고, 비밀번호 없는 인증은 비밀번호를 완전히 제거합니다.
[600ms]
[encouraging] Microsoft Windows Hello for Business와 패스키 같은 피싱 저항 방법을 권장합니다. 관리자는 인증 방법 정책에서 허용된 방법을 선택합니다.

## Step 5 · Four ways in, four defenders

[curious] 공격자들은 이메일, 기기, 신원, 앱의 네 경로를 따라 Microsoft 365에 도달합니다.
[600ms]
[confident] 위협 보호는 각 경로에 Microsoft Defender 제품을 두고, 각 제품이 자신의 영역을 감시합니다.
[600ms]
[calm] Microsoft Defender XDR 이 둘을 연결하며, Microsoft Entra ID 보호는 신원 보호에도 도움을 줍니다.

## Step 6 · Threat intelligence

[curious] 공격자가 무엇을 하는지 아는 것은 전투의 절반입니다. 위협 인텔리전스는 또한 그것이 당신에게 영향을 미치는지 알려줍니다.
[600ms]
[confident] Microsoft Defender위협 분석은 이러한 보고서를 제공합니다. 이 보고서들은 Microsoft 보안 연구자들과 엄선된 오픈소스 소스에서 나옵니다.
[600ms]
[calm] 화면에 나오는 캠페인, 답변, 보고서는 가상의 예시입니다.

## Step 7 · Defender XDR: one incident

[concerned] 각 Defender 제품은 자체 경고를 발생시키며, 여러 개의 별도 경고가 하나의 공격으로 해석되기 어렵습니다.
[600ms]
[confident] Microsoft Defender XDR 관련 경고들을 하나의 사건으로 연관 짓습니다. 이렇게 하면 여러 조각이 아닌 하나의 공격 이야기를 얻을 수 있습니다.
[600ms]
[impressed] 경고는 하나의 신호이고, 사건은 전체 그림이며, Microsoft Defender 포털에서 그것에 대해 작업합니다.

## Step 8 · Automated investigation and response

[curious] Defender XDR은 분석가를 기다릴 필요가 없습니다. 인시던트를 스스로 조사할 수 있기 때문입니다.
[600ms]
[confident] 각 증거에는 악의적, 의심스러운 것, 또는 위협이 발견되지 않은 판결이 내려집니다. 그 후에는 시정 조치를 취할 수 있습니다.
[600ms]
[reassuring] 설정에 따라 행동은 자동으로 실행되거나 보안팀의 승인을 기다립니다. 모든 행동은 액션 센터에 나열되어 있습니다.

## Step 9 · Advanced hunting

[curious] 때로는 팀이 자체적으로 질문을 갖기도 합니다. 고급 헌팅은 Defender 제품에서 수집한 원시 데이터를 검색할 수 있게 해줍니다.
[600ms]
[confident] 이는 Office 365용 Endpoint, Identity, Cloud Apps용 Defender 앱을 포함하며, 최대 30일간의 원시 데이터를 제공합니다.
[600ms]
[encouraging] 가이드 모드는 쿼리 빌더이며, 고급 모드는 Kusto 쿼리 언어를 사용합니다. 좋은 쿼리는 맞춤형 탐지 규칙이 될 수도 있습니다.

## Step 10 · Which principle applies?

[encouraging] 이제 당신 차례입니다. 시나리오를 선택한 다음, 적용되는 제로 트러스트 원칙을 선택하세요.
[600ms]
[curious] 각 Microsoft 365: MFA 및 조건부 접근 모드에서 명시적으로 검증, 역할과 권한이 최소 권한에 어떻게 표시되는지 확인할 수 있습니다.
[600ms]
[confident] Defender XDR에서의 탐지와 대응이 침해를 추정하는 방법입니다.

## Step 11 · Zero Trust, then Defender XDR

[calm] 정리해 봅시다. 명시적으로 확인하고, 최소 권한을 사용하고, 침해를 가정하세요.
[600ms]
[confident] Defender XDR 그 원칙들을 적용합니다: 탐지하고, 상관관계를 맺고, 반응하고, 사냥합니다.
[600ms]
[proud] 측정된 A B 900 기술과 비교해 자신을 확인하고, 현재 Microsoft Learn학습 가이드를 읽어보세요. 기술은 시간이 지나면서 변합니다.
