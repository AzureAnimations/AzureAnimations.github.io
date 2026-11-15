# Narrator Script — Database · Azure Database for MySQL: Design for Availability and Growth

**Source animation:** [MySqlFlexible.html](../../../journeys/Database/MySqlFlexible.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/mysql/flexible-server/overview>
- <https://learn.microsoft.com/azure/mysql/flexible-server/concepts-high-availability>
- <https://learn.microsoft.com/azure/mysql/flexible-server/concepts-read-replicas>
- <https://learn.microsoft.com/azure/mysql/flexible-server/concepts-backup-restore>

---

## Step 1 · Contoso Shop already speaks MySQL

[calm] Contoso Shop은 이미 MySQL로 돌아가고 있는 PHP 쇼핑몰입니다.
[600ms]
[serious] 지금은 팀이 패치도, 백업도, 장애 조치도 직접 손으로 하고 있고, 이 일은 끝이 없습니다.
[600ms]
[reassuring] Azure Database for MySQL 유연한 서버는 같은 커뮤니티 엔진을 쓰지만, 관리형 서비스로 제공됩니다.

## Step 2 · When is MySQL the right pick?

[curious] 그렇다면 MySQL은 언제 맞는 선택일까요? 앱이 이미 쓰고 있는 엔진에서 출발하세요.
[600ms]
[confident] MySQL용으로 만든 앱이라면 유연한 서버에서 드라이버, SQL, 도구를 그대로 쓸 수 있습니다.
[600ms]
[calm] 다른 종류의 앱은 다른 서비스가 맞고, 그 장단점은 Pick your database 페이지에서 살펴봅니다.

## Step 3 · A managed engine with compute apart from storage

[calm] 서비스 구조는 이렇습니다. MySQL 버전, 컴퓨트, 스토리지를 선택합니다.
[600ms]
[confident] 서버 매개변수로 엔진을 조정합니다. 동적 매개변수는 바로 적용되고, 정적 매개변수는 재시작해야 적용됩니다.
[600ms]
[serious] 한 가지 주의할 점이 있습니다. MySQL 5.7은 유료 확장 지원 단계라서 주 버전 업그레이드를 계획해야 합니다. 그리고 InnoDB만 지원합니다.

## Step 4 · Three compute tiers, matched to the workload

[curious] 컴퓨트는 세 가지 계층으로 나뉩니다. Burstable은 대부분 유휴 상태인 개발 및 테스트 서버용입니다.
[600ms]
[confident] General Purpose는 대부분의 프로덕션 앱에 알맞고, Memory-Optimized는 인메모리 속도와 높은 동시성이 필요할 때 씁니다.
[600ms]
[serious] 고가용성과 읽기 복제본은 General Purpose나 Memory-Optimized에서만 쓸 수 있고, 컴퓨트를 바꾸면 서버가 재시작됩니다.

## Step 5 · High availability: a standby that takes over

[calm] 고가용성을 켜면 주 서버의 로그를 계속 재생하는 수동 대기 서버가 추가됩니다.
[600ms]
[impressed] 주 서버에 장애가 나면 대기 서버가 넘겨받고, 커밋된 데이터는 그대로 유지됩니다. 영역 중복 HA는 영역 전체 장애도 견딥니다.
[600ms]
[serious] 영역 중복 HA는 서버를 만들 때 선택하세요. 그리고 연결할 때는 항상 서버 이름을 쓰고, IP 주소는 쓰지 마세요.

## Step 6 · Read replicas: scale reads and cover a region

[curious] 읽기 복제본은 원본을 비동기로 복사해서 읽기 요청을 처리하기 때문에, 원본은 쓰기에 집중할 수 있습니다.
[600ms]
[confident] 다른 리전에 복제본을 두면 재해 복구에 도움이 되고, 복제본은 최대 10개까지 만들 수 있습니다.
[600ms]
[serious] 하지만 자동으로 장애 조치되는 것은 없습니다. 전환하려면 복제본에서 복제를 중지하고, 앱이 그 복제본을 바라보게 해야 합니다.

## Step 7 · Backups and point-in-time restore

[calm] 스냅샷과 트랜잭션 로그 덕분에 보존 기간 안의 원하는 시점으로 복원할 수 있습니다.
[600ms]
[confident] 복원하면 그 백업으로 완전히 새 서버가 만들어지므로, 원본 서버는 그대로 남습니다.
[600ms]
[serious] 복원하고 나면 HA 서버는 HA가 꺼진 상태로 돌아오니, 다시 켜 줘야 한다는 점을 기억하세요.

## Step 8 · Who can reach the server?

[curious] 누가 서버에 접근할 수 있을까요? 방화벽 규칙을 쓰는 퍼블릭 액세스, 프라이빗 엔드포인트, VNet 통합 중 하나를 고르세요.
[600ms]
[confident] 트래픽은 TLS로 암호화되고, 로그인은 기본 MySQL 인증 대신 Microsoft Entra ID를 쓸 수도 있습니다.
[600ms]
[reassuring] Entra 로그인에는 사용자 할당 관리 ID와 Entra 관리자가 필요합니다. 어느 네트워크 방식이든 접근 제어는 서버 단위이고, 테이블별로 하는 것은 아닙니다.

## Step 9 · Grow and patch without rebuilding

[calm] 다시 구축하지 않고도 규모를 키울 수 있습니다. 컴퓨트는 짧은 재시작만으로 스케일 업이나 스케일 다운이 됩니다.
[600ms]
[impressed] 스토리지는 온라인으로 늘어나고 자동 확장도 되지만, 늘기만 할 뿐 줄일 수는 없습니다.
[600ms]
[reassuring] 패치는 직접 정한 유지 관리 기간에 실행되고, 개발 및 테스트용 서버는 중지해서 컴퓨트 요금을 멈출 수도 있습니다.

## Step 10 · Moving a MySQL database in

[curious] MySQL 데이터베이스는 어떻게 옮길까요? 쇼핑몰이 감당할 수 있는 다운타임에 따라 방법을 고르세요.
[600ms]
[confident] Azure Database Migration Service는 전환하는 동안에도 계속 동기화할 수 있고, 덤프와 복원은 가장 간단한 방법입니다.
[600ms]
[serious] Single Server는 2024년 9월에 종료되었기 때문에 해당 서버는 반드시 옮겨야 합니다. 먼저 InnoDB가 아닌 테이블을 변환하고 나서 이전을 시작하세요.

## Step 11 · Which flexible server design fits the requirement?

[curious] 이제 직접 해 보세요. 내 상황에 가장 가까운 요구사항을 고르세요.
[600ms]
[intrigued] 그에 맞는 유연한 서버 설정이 켜지고, 설계 그림과 조심해야 할 함정도 함께 나옵니다.
[600ms]
[reflective] 실제 설계에서는 이런 요소를 함께 씁니다. 프로덕션 쇼핑몰이라면 영역 중복 HA, 읽기 복제본, 프라이빗 액세스를 같이 쓰는 식이죠.

## Step 12 · MySQL on Azure: pick it, protect it, grow it

[calm] 정리해 봅시다. 앱이 이미 MySQL을 쓰고 있다면 유연한 서버를 선택하세요.
[600ms]
[confident] 그다음에는 요구사항에 맞춰 설계하세요. 컴퓨트 계층, 고가용성, 복제본, 백업, 그리고 네트워크 접근 방식입니다.
[600ms]
[proud] 다음 PostgreSQL 페이지에서는 엔진만 다를 뿐, 같은 유연한 서버 모델을 다룹니다.
