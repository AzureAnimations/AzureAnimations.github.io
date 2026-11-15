# Narrator Script — Security · Security, Compliance and Identity Concepts: the shared vocabulary

**Source animation:** [SecurityConcepts.html](../../../journeys/Security/SecurityConcepts.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/training/modules/describe-security-concepts-methodologies/>
- <https://learn.microsoft.com/training/modules/describe-identity-principles-concepts/>

---

## Step 1 · Security, compliance and identity

[calm] Contoso가 곧 고객 포털을 엽니다. 출시 전에 서로 다른 세 가지 질문에 답해야 합니다.
[600ms]
[curious] 보안은 데이터와 시스템을 위협에서 지키는 것이고, 규정 준수는 적용되는 법과 표준을 지키는 것입니다. ID는 누가, 혹은 무엇이 관련되어 있는지를 나타냅니다.
[600ms]
[confident] 비슷하게 들리지만 같은 건 아닙니다. 특히 규정 준수는 보안과 같지 않습니다.

## Step 2 · Shared responsibility

[calm] 온프레미스에서 서비스형 소프트웨어로 갈수록, 클라우드 공급자가 맡는 스택의 범위가 커집니다.
[600ms]
[serious] 하지만 끝까지 내 몫으로 남는 일이 있습니다. 어떤 모델이든 데이터와 ID, 액세스, 엔드포인트, 구성 선택은 내가 책임집니다.
[600ms]
[reassuring] 책임의 경계가 정확히 어디인지는 서비스마다 다르니, 쓰는 서비스마다 공급자 문서를 확인하세요.

## Step 3 · Defense in depth

[calm] 심층 방어는 여러 겹의 보호를 함께 쓰는 방식입니다. 한 겹이 뚫려도 다음 겹이 공격자와 데이터 사이를 계속 막고 있습니다.
[600ms]
[curious] 여기서는 탈취한 비밀번호가 ID 계층을 통과하지만, 네트워크 분리가 여전히 공격자를 막습니다.
[600ms]
[confident] 이 계층들은 기밀성과 무결성, 가용성을 지키고, 데이터가 가장 안쪽 계층입니다.

## Step 4 · Zero Trust

[calm] 제로 트러스트는 절대 신뢰하지 않고 항상 검증한다는 뜻입니다. 관리되지 않는 기기에서, 낯선 위치에서 온 접근 요청 하나를 따라가 보겠습니다.
[600ms]
[confident] 세 가지 원칙이 기준이 됩니다. 명시적으로 확인하고, 최소 권한으로 접근하게 하고, 침해를 전제로 합니다.
[600ms]
[reflective] 제로 트러스트는 제품 하나가 아니라 전략입니다. 그래서 각 원칙이 과정 곳곳에서 서로 다른 확인 단계로 나타납니다.

## Step 5 · Encryption

[calm] 암호화는 키가 없으면 데이터를 쓸모없게 만듭니다. 대칭 암호화는 양방향에 같은 키 하나를 쓰기 때문에 빠르지만, 키를 공유하기가 어렵습니다.
[600ms]
[curious] 비대칭 암호화는 키 쌍을 씁니다. 공개 키로 암호화한 내용은 개인 키로만 복호화할 수 있어서, 공개 키는 마음껏 공유해도 됩니다.
[600ms]
[serious] 키는 Azure Key Vault 같은 관리형 서비스에 보관해서, 데이터와 떨어뜨려 두세요. 화면의 암호문은 예시로 만든 것입니다.

## Step 6 · Hashing

[curious] 해시는 한 방향으로만 만들 수 있는 지문입니다. 시스템은 비밀번호의 지문만 저장해 두고, 로그인할 때마다 비교합니다.
[600ms]
[confident] 해시에는 키가 필요 없고, 되돌릴 수도 없습니다. 같은 입력은 항상 같은 해시가 나옵니다.
[600ms]
[reassuring] 실제 시스템에서는 고유한 솔트도 더해서, 똑같은 비밀번호 두 개가 똑같은 해시가 되지 않게 합니다. 여기 나온 값은 예시로 만들고 줄인 것입니다.

## Step 7 · Encryption or hashing?

[curious] 일상적인 예시 여섯 개와 상자 두 개입니다. 하나씩 이렇게 물어보세요. 원본을 다시 꺼내야 하나요?
[600ms]
[confident] 답이 예라면 암호화 쪽입니다. 저장된 데이터나 HTTPS로 오가는 트래픽이 그렇습니다. 아니오라면 해시 쪽입니다. 비밀번호 저장이나 내려받은 파일 확인이 그렇습니다.
[600ms]
[encouraging] 먼저 직접 분류해 보고, 각각 어디로 들어가는지 확인하세요.

## Step 8 · Governance, risk and compliance

[calm] 거버넌스와 위험, 규정 준수는 세 가지 질문에 답합니다. 누가 규칙을 정하는지, 무엇이 잘못될 수 있는지, 그리고 우리가 규칙을 지킨다는 걸 증명할 수 있는지입니다.
[600ms]
[confident] 위험 관리는 위험을 식별하고, 평가하고, 대응하고, 모니터링합니다. 대응은 수용, 완화, 전가, 회피 중에서 고릅니다.
[600ms]
[serious] 규정 준수는 규칙이 요구하는 최소한일 뿐, 보안 전체가 아닙니다. 여기 나오는 Contoso 팀은 가상입니다.

## Step 9 · Identity is the new perimeter

[calm] 예전에는 경계가 네트워크였습니다. 그러다 클라우드 앱과 원격 근무, 개인 기기가 생기면서 경계가 옮겨 갔습니다.
[600ms]
[curious] 이제 질문은 이것입니다. 누가, 혹은 무엇이 요청하고 있나요? 사람일 수도, 디바이스나 워크로드, 에이전트일 수도 있습니다.
[600ms]
[serious] 성공한 공격은 거의 모두 결국 ID를 탈취하거나 악용합니다. ID가 그만큼 중요한 이유입니다.

## Step 10 · Authentication and authorization

[calm] 먼저 내가 누구인지 증명합니다. 이게 인증입니다. 그다음에 무엇을 할 수 있는지 확인합니다. 이게 권한 부여이고, 항상 인증 다음입니다.
[600ms]
[confident] 첫 단계는 ID 공급자가 처리하고, 클레임이 담긴 토큰을 발급합니다. ID 토큰은 로그인했다는 증명이고, 액세스 토큰은 리소스에 대한 권한을 줍니다.
[600ms]
[reflective] 흔히 쓰는 프로토콜은 OpenID Connect와 OAuth 2.0, SAML입니다.

## Step 11 · Active Directory and the cloud

[calm] Active Directory Domain Services는 온프레미스 네트워크를 위해 만들어졌습니다. 사용자와 디바이스, 그룹을 저장하고, 이걸 실행하는 서버가 도메인 컨트롤러입니다.
[600ms]
[curious] 서비스형 소프트웨어 로그인은 기본으로 처리하지 못합니다. 클라우드를 위해 만든 디렉터리가 Microsoft Entra ID입니다.
[600ms]
[reassuring] 둘을 동기화해서 연결할 수 있고, 이를 하이브리드 ID라고 합니다.

## Step 12 · Federation and recap

[calm] 페더레이션을 쓰면 Contoso가 파트너의 로그인을 그대로 받아들일 수 있어서, 새 계정을 만들 필요가 없습니다.
[600ms]
[serious] 서로 다른 ID 공급자 사이의 신뢰 관계인데, 신뢰가 자동으로 양방향이 되지는 않습니다. 양방향 신뢰는 일부러 설정해야 합니다.
[600ms]
[proud] 여기까지가 S C 900의 첫 번째 기술 영역인 보안, 규정 준수, ID의 개념입니다. 최신 학습 가이드를 확인하세요.
