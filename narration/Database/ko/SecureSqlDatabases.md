# Narrator Script — Database · Secure Azure SQL: Network, Identity, Auditing and Defender

**Source animation:** [SecureSqlDatabases.html](../../../journeys/Database/SecureSqlDatabases.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/azure-sql/database/network-access-controls-overview>
- <https://learn.microsoft.com/azure/azure-sql/database/private-endpoint-overview>
- <https://learn.microsoft.com/azure/azure-sql/database/authentication-azure-ad-only-authentication>
- <https://learn.microsoft.com/azure/azure-sql/database/auditing-overview>

---

## Step 1 · The orders database is open to the internet

[calm] Contoso의 주문 데이터베이스는 Azure SQL Database에서 실행됩니다. 새 논리 서버는 허용 규칙을 추가하기 전까지 모든 연결을 거부합니다.
[600ms]
[concerned] 그런데 누군가 모든 주소를 허용하는 규칙 하나로 방화벽을 활짝 열어 버렸습니다. 이제 데이터와 인터넷 사이에는 SQL 비밀번호 하나뿐입니다.
[600ms]
[determined] 이 문을 한 겹씩 닫아 봅시다.

## Step 2 · Firewall rules and virtual network rules

[calm] 서버 방화벽은 목록에 올린 주소와 서브넷만 받아 줍니다. 이 규칙은 퍼블릭 엔드포인트를 지킵니다.
[600ms]
[serious] Allow Azure services는 조심하세요. 대부분의 팀이 생각하는 것보다 훨씬 범위가 넓습니다. 다른 고객의 리소스에서 오는 트래픽도 허용하기 때문입니다.
[600ms]
[confident] 가상 네트워크 규칙에는 서브넷의 서비스 엔드포인트가 필요하고, 적용 범위는 한 리전입니다. IP 규칙을 바꾸면 반영되기까지 몇 분 걸릴 수 있습니다.

## Step 3 · A private endpoint removes the public path

[curious] 프라이빗 엔드포인트를 만들면 서버가 Contoso의 가상 네트워크 안에서 프라이빗 IP 주소를 갖게 됩니다.
[600ms]
[serious] 하지만 프라이빗 엔드포인트를 추가한다고 퍼블릭 경로가 닫히지는 않습니다. 퍼블릭 네트워크 액세스도 따로 거부해야 합니다.
[600ms]
[reassuring] 연결할 때는 항상 서버의 정규화된 전체 이름을 쓰세요. 프라이빗 주소나 privatelink 이름으로 로그인하면 설계상 실패합니다.

## Step 4 · Entra-only sign-in and a managed identity

[confident] Microsoft Entra 전용 인증을 켜면 서버 전체에서 SQL 비밀번호 인증이 꺼집니다.
[600ms]
[calm] 앱은 관리 ID와 토큰으로 로그인하므로, 설정에 비밀을 둘 필요가 없습니다.
[600ms]
[serious] 먼저 Microsoft Entra 관리자를 설정하세요. 그리고 SQL Security Manager는 Entra 전용 인증을 켜고 끌 수 있지만, SQL Server Contributor는 그럴 수 없다는 점도 기억하세요.

## Step 5 · TDE, Always Encrypted and customer keys

[calm] 투명한 데이터 암호화는 데이터 파일, 로그, 백업을 저장된 상태에서 보호합니다.
[600ms]
[curious] Always Encrypted는 한 걸음 더 나아갑니다. 클라이언트 드라이버가 선택한 열을 암호화하기 때문에, 데이터베이스 엔진은 키를 갖고 있지 않습니다.
[600ms]
[serious] 주의할 점이 두 가지 있습니다. 서버가 고객 관리형 키에 접근하지 못하면 데이터베이스를 쓸 수 없게 됩니다. 그리고 암호화된 열에 대한 쿼리에는 제한이 있습니다.

## Step 6 · Auditing: what, where and for which scope

[calm] 감사는 데이터베이스 이벤트를 추적해서 선택한 로그 대상에 기록합니다. 스토리지 계정, Log Analytics 워크스페이스, Event Hubs 중에서 고를 수 있습니다.
[600ms]
[confident] 먼저 범위와 이벤트 범주를 정하세요. 그러면 불필요한 기록에 묻히지 않고 중요한 것만 남길 수 있습니다.
[600ms]
[reflective] 감사는 가용성을 우선하기 때문에, 부하가 아주 클 때는 일부 이벤트가 누락될 수 있습니다. Entra 로그인 실패는 여기가 아니라 Entra에 나타납니다.

## Step 7 · Read an audit record: who ran what

[curious] 감사 레코드 하나는 몇 가지 쉬운 질문에 답해 줍니다. 누가 했나요? 무엇을 실행했나요? 어디서, 언제 했나요?
[600ms]
[calm] Contoso 주문 데이터베이스의 레코드 하나입니다. 각 필드의 색을 따라가서 어떤 질문에 대한 답인지 확인해 보세요.
[600ms]
[serious] SQL 문은 텍스트로 저장되기 때문에, 문에 입력한 민감한 값이 로그에 남을 수 있습니다. 감사 로그를 읽을 수 있는 사람을 제한하세요.

## Step 8 · SQL Database vs SQL Managed Instance

[calm] 둘 다 Azure SQL이지만 설정 위치가 다릅니다. 각 제어를 어디에서 구성하는지, 기본값이 어떻게 다른지 알아 두세요.
[600ms]
[serious] SQL Database 네트워크 문서는 Managed Instance에는 해당하지 않습니다.
[600ms]
[confident] Managed Instance의 감사는 SQL Server Audit이기 때문에, Event Hubs와 Azure Monitor 로그의 설정 방식이 SQL Database와 다릅니다.

## Step 9 · Defender for Databases: assess and detect

[confident] Defender for Azure SQL Databases 플랜은 두 가지 일을 합니다. 먼저 취약성 평가가 취약한 설정을 검사합니다.
[600ms]
[curious] 위협 탐지는 데이터베이스가 실행되는 동안 공격을 감시합니다.
[600ms]
[reassuring] 플랜은 구독에서 한 번만 켜면 됩니다. 그러면 구독 안의 지원되는 모든 리소스가 보호되고, 나중에 만든 리소스도 포함됩니다.

## Step 10 · An alert end to end: SQL injection

[curious] 검색 상자가 입력한 텍스트를 SQL 문에 그대로 넘깁니다. 이것이 약점입니다.
[600ms]
[concerned] Defender는 먼저 결함이 있는 문을 잠재적 취약성으로 보고 중간 심각도로 경고합니다. 그다음 익스플로잇이 일어나면 잠재적 SQL 인젝션으로 보고하는데, 이때는 심각도가 높음입니다.
[600ms]
[determined] 팀이 조사해서 안전하지 않은 코드를 찾아 고칩니다.

## Step 11 · Which control answers which threat?

[excited] 위협 8개에 제어 5개입니다. 각 위협이 자신의 주된 제어를 찾아가는 모습을 보세요.
[600ms]
[encouraging] 그런 다음 위협을 아무거나 선택해서, 그 제어가 왜 정답인지 확인해 보세요.
[600ms]
[reflective] 실제 시스템은 제어를 겹겹이 쌓기 때문에 한 위협에 답이 여러 개일 수 있습니다. 여기서는 각 위협을 주된 제어 하나와 짝지었습니다.

## Step 12 · Recap: close, prove, encrypt, record, detect

[calm] 주문 데이터베이스는 다섯 가지 제어로 보호합니다. 네트워크 문을 닫고, 누가 로그인하는지 확인하고, 데이터를 암호화하세요.
[600ms]
[confident] 그리고 일어나는 일을 기록하고, 공격이 시작되는 순간 탐지하세요. 제어마다 막는 위협이 다릅니다.
[600ms]
[proud] S C 500 학습 가이드에서는 이 내용을 데이터베이스 보안 구현 항목에 넣고 있습니다.
