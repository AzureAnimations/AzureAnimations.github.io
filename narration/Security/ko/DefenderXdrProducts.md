# Narrator Script — Security · Defender XDR products one by one: Office 365, Endpoint, Identity, Cloud Apps and Vulnerability Management

**Source animation:** [DefenderXdrProducts.html](../../../journeys/Security/DefenderXdrProducts.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/defender-xdr/microsoft-365-defender>
- <https://learn.microsoft.com/defender-office-365/mdo-about>
- <https://learn.microsoft.com/defender-endpoint/overview-endpoint-detection-response>
- <https://learn.microsoft.com/defender-for-identity/what-is>

---

## Step 1 · One attack, four doors

[curious] 공격자는 문 네 개를 통해 Contoso의 Priya에게 접근할 수 있습니다. 이메일, 노트북, 로그인, 클라우드 앱. 모두 침투 경로가 됩니다.
[600ms]
[calm] 문마다 지키는 Defender 제품이 다릅니다. 하나씩 만나 보겠습니다.
[600ms]
[confident] 이번 레슨은 S C 900에 나오는 Microsoft Defender XDR의 위협 방어 기술을 다룹니다.

## Step 2 · Defender for Office 365

[calm] Defender for Office 365는 이메일과 협업 도구를 보호합니다. 여기서는 Priya에게 온 메시지를 검사합니다.
[600ms]
[curious] 보낸 사람과 링크, 첨부 파일을 살펴봅니다. Safe Links는 웹 주소를 검사하고, Safe Attachments는 전달하기 전에 안전한 가상 환경에서 파일을 열어 봅니다.
[600ms]
[reassuring] 그래서 위험한 메시지는 Priya가 열기 전에 일찌감치 걸러집니다.

## Step 3 · Defender for Endpoint

[calm] Defender for Endpoint는 디바이스를 보호합니다. Priya의 노트북에 설치된 센서가 동작을 Defender 서비스에 보고합니다.
[600ms]
[serious] 노트북이 침해당했다면 격리할 수 있습니다. 네트워크에서는 차단되지만, Defender 서비스와의 연결은 유지됩니다.
[600ms]
[reassuring] 그리고 정상으로 확인되면 격리를 다시 해제할 수 있습니다.

## Step 4 · Defender for Identity

[calm] Defender for Identity는 도메인 컨트롤러에 센서를 설치해서, 로그인이 일어나는 대로 지켜봅니다.
[600ms]
[serious] 여기서는 공격자가 탈취한 계정으로 한 컴퓨터에서 다음 컴퓨터로 옮겨 다닙니다. 이를 수평 이동이라고 합니다.
[600ms]
[confident] 행동 분석은 ID 공격의 각 단계에서 이런 움직임을 포착합니다.

## Step 5 · Defender for Cloud Apps

[curious] 사람들은 IT 팀이 아는 것보다 훨씬 많은 클라우드 앱을 씁니다. Defender for Cloud Apps는 실제로 쓰이는 앱을 찾아냅니다.
[600ms]
[calm] 찾아낸 앱마다 위험 등급을 매기기 때문에, 어떤 앱을 살펴봐야 하는지 알 수 있습니다.
[600ms]
[confident] 사용자가 세션 안에서 할 수 있는 일을 제한할 수도 있습니다. 예를 들어 접근은 허용하되 모니터링하고, 다운로드는 차단할 수 있습니다.

## Step 6 · Defender Vulnerability Management

[calm] Defender Vulnerability Management는 디바이스의 취약점을 찾는데, 멈추지 않고 계속 찾습니다.
[600ms]
[curious] 위협 인텔리전스와 침해 가능성, 비즈니스 맥락을 반영해서 가장 위험한 것부터 순서를 매깁니다.
[600ms]
[confident] 그런 다음 IT 팀이 고치도록 돕습니다. 예를 들어 Intune에서 작업을 만들거나, 취약한 앱을 차단하는 식입니다.

## Step 7 · Microsoft Threat Intelligence

[calm] 이 제품들 뒤에는 Microsoft 위협 연구가 있습니다. 공격자가 누구이고 무엇을 하는지 설명해 줍니다.
[600ms]
[curious] 이렇게 쌓은 지식은 Defender 제품에 반영되어, 주소와 도메인, 파일에 대한 보강된 페이지와 Microsoft 연구원의 보고서로 나타납니다.
[600ms]
[reflective] 이 영역의 일부 기능은 아직 미리 보기 상태입니다.

## Step 8 · The Defender portal

[calm] Microsoft Defender 포털이 하나의 콘솔입니다. 모든 제품의 경고가 여기로 모입니다.
[600ms]
[impressed] 경고는 하나의 인시던트로 합쳐져서, 팀은 별개의 이야기 네 개가 아니라 공격 전체를 봅니다.
[600ms]
[confident] 제품 전반에 걸친 자동 공격 중단과 헌팅 기능도 제공합니다.

## Step 9 · Which product sees it?

[excited] 이제 직접 해 볼 차례입니다. 공격 단계를 클릭해 보세요.
[600ms]
[curious] 대응하는 Defender 제품에 불이 들어오고, 모든 경고는 여전히 같은 포털로 모입니다.
[600ms]
[reflective] 실제 공격은 여러 제품이 동시에 관여하는 경우가 많으니, 모든 단계를 눌러 보세요.

## Step 10 · Four defenders, one portal

[calm] 정리해 보겠습니다. Office 365, Endpoint, Identity, Cloud Apps가 각각 문 하나씩을 지킵니다.
[600ms]
[confident] Vulnerability Management와 Threat Intelligence가 이들을 뒷받침하고, 포털이 모든 것을 하나로 연결합니다.
[600ms]
[proud] 이것이 S C 900에서 만나게 될 Defender XDR 이야기입니다.
