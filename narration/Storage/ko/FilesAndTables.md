# Narrator Script — Storage · Files and Tables: Which Service?

**Source animation:** [FilesAndTables.html](../../../journeys/Storage/FilesAndTables.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/storage/files/storage-files-introduction>
- <https://learn.microsoft.com/azure/storage/file-sync/file-sync-introduction>
- <https://learn.microsoft.com/azure/storage/tables/table-storage-overview>
- <https://learn.microsoft.com/azure/azure-netapp-files/azure-netapp-files-introduction>

---

## Step 1 · Three needs, one question

[calm] Contoso는 Azure에 파일 공유와, 저렴한 NoSQL 테이블, 그리고 엔터프라이즈 NAS를 원하고, 모두 사무실에서 접근할 수 있어야 합니다.
[600ms]
[curious] 각 요구에는 어떤 서비스가 맞고, 어떻게 연결할까요?
[600ms]
[confident] 서비스 네 가지가 답을 줍니다. Azure Files, Azure File Sync, Table storage, Azure NetApp Files입니다. Contoso는 가상의 회사입니다.

## Step 2 · Four services, one map

[calm] Azure Files와 Table storage는 둘 다 스토리지 계정 안에 있습니다.
[600ms]
[confident] Azure File Sync는 Azure Files 앞에 Windows Server 캐시를 더해 주고, Azure NetApp Files는 독립된 엔터프라이즈 서비스입니다.
[600ms]
[reflective] Blob storage도 같은 계열이지만, 비정형 개체를 저장하기 때문에 성격이 다릅니다.

## Step 3 · Azure Files: a managed share

[calm] Azure Files는 스토리지 계정 안에 있는 완전 관리형 파일 공유입니다.
[600ms]
[confident] Windows, Linux, macOS의 클라우드와 온프레미스 클라이언트에서 동시에 마운트할 수 있고, 추가 소프트웨어도, 하드웨어도, 패치할 운영 체제도 필요 없습니다.
[600ms]
[reassuring] 읽기 전용 공유 스냅샷으로 보호하거나, Azure Backup이 스냅샷 예약과 보존을 맡게 할 수 있습니다.

## Step 4 · SMB or NFS, SSD or HDD

[curious] 공유마다 두 가지 선택이 구조를 정합니다. 먼저 공유 하나에 프로토콜 하나입니다. Windows 방식 접근에는 SMB, Linux에는 NFS를 씁니다.
[600ms]
[calm] 두 번째는 미디어 계층입니다. 지연 시간이 낮아야 하면 SSD, 비용 효율적인 일반 용도에는 HDD입니다. NFS 공유는 SSD만 됩니다.
[600ms]
[serious] 공유 하나에 두 프로토콜을 쓸 수는 없고, 계층도 직접 바꿀 수 없습니다. 새 공유를 만들어서 데이터를 복사해야 합니다.

## Step 5 · Who gets in: identity-based access

[calm] 리프트 앤 시프트를 해도 Windows ACL은 그대로 유지됩니다. 사용자는 원래 쓰던 ID로 로그인합니다.
[600ms]
[confident] Azure Files는 공유에서 Kerberos 티켓을 확인하고, 파일과 폴더마다 다시 확인합니다. 티켓만 받고, 사용자의 비밀번호는 받지 않습니다.
[600ms]
[serious] 스토리지 계정마다 ID 소스는 하나만 고릅니다. AD DS, Entra Domain Services, Entra Kerberos 중에서요. 이 방식은 SMB 공유에서만 되고, 계정 키는 권장하지 않습니다.

## Step 6 · Reaching it from on-premises

[calm] 온프레미스에서 SMB로 접근하려면, Azure 네트워크로 연결되는 VPN이나 ExpressRoute 링크가 필요합니다.
[600ms]
[confident] 그러면 Azure Files는 프라이빗 엔드포인트를 통해, 프라이빗 IP 주소로 노출됩니다.
[600ms]
[curious] 퍼블릭 엔드포인트도 있지만 SMB 3 이상에서만 됩니다. NFS는 인터넷에서 절대 접근할 수 없고, File Sync 캐시를 두면 지점에서도 로컬처럼 빠르게 접근할 수 있습니다.

## Step 7 · Azure File Sync: a cache on your server

[curious] 캐시를 만들려면 Storage Sync Service를 배포하고, Windows Server에 에이전트를 설치한 다음 등록합니다.
[600ms]
[calm] 동기화 그룹은 클라우드 엔드포인트 하나, 즉 Azure 파일 공유를, 서버 엔드포인트 하나 이상과 연결합니다. 서버 엔드포인트는 서버에 있는 폴더입니다.
[600ms]
[serious] 서버는 한 번에 서비스 하나에만 등록할 수 있고, 동기화할 수 있는 것은 SMB Azure 파일 공유뿐입니다.

## Step 8 · Cloud tiering: hot local, cool in Azure

[calm] 클라우드 계층화는 자주 쓰는 핫 파일을 서버에 보관합니다.
[600ms]
[curious] 자주 쓰지 않는 파일은 이름과 폴더만 로컬에 남고, 내용은 Azure 파일 공유에 있다가 누군가 열면 다시 내려옵니다.
[600ms]
[confident] 계층화 시점은 두 가지 정책이 정합니다. 볼륨 여유 공간 정책과, 정해진 일수 동안 접근하지 않은 파일에 적용하는 날짜 정책입니다.

## Step 9 · Multi-site sync and quick recovery

[calm] 모든 서버가 Azure 파일 공유를 통해 동기화하기 때문에, 서버끼리 따로 연결하지 않아도 모든 사무실이 같은 파일을 봅니다.
[600ms]
[confident] 서버 캐시는 필요한 만큼, 전 세계 어디에든 추가할 수 있습니다.
[600ms]
[reassuring] 서버가 고장 나면 새 Windows Server를 프로비저닝하고, 에이전트를 설치한 다음 등록하세요. Azure에서 네임스페이스가 내려오고, 파일은 접근할 때 다시 불러오기 때문에, 로컬 백업이 필요 없습니다.

## Step 10 · Table storage: entities and keys

[calm] Table storage는 스키마가 없는 NoSQL 키 속성 저장소이고, 스토리지 계정 안의 테이블에 데이터가 있습니다.
[600ms]
[confident] 엔터티는 속성으로 이루어진 행 하나이고, PartitionKey와 RowKey를 함께 써서 찾습니다. 한 테이블 안의 엔터티끼리 속성이 서로 달라도 됩니다.
[600ms]
[curious] PartitionKey가 같은 엔터티는 쿼리가 더 빠르고, 원자적 작업으로 삽입하거나 업데이트할 수 있습니다.

## Step 11 · Query by key, then outgrow it

[confident] 쿼리에는 항상 PartitionKey를 넣으세요. PartitionKey와 RowKey를 둘 다 쓰는 포인트 쿼리가 가장 빠른 조회입니다.
[600ms]
[serious] PartitionKey가 없는 쿼리는 모든 파티션을 스캔하기 때문에 가장 느립니다.
[600ms]
[optimistic] 결과는 이 키 순서로 정렬되어 나옵니다. 그리고 Table storage로 부족해지면, Azure Cosmos DB for Table은 같은 SDK를 그대로 쓰면서 글로벌 배포와 자동 보조 인덱스를 더해 줍니다.

## Step 12 · Azure NetApp Files: enterprise NAS

[calm] Azure NetApp Files는 엔터프라이즈급 파일 서비스입니다. NetApp 계정 안에 용량 풀이 있고, 풀마다 볼륨이 있습니다.
[600ms]
[confident] 서비스 수준은 풀에서 정하고, 볼륨은 NFS나 SMB, 또는 둘 다 제공할 수 있습니다.
[600ms]
[curious] 볼륨은 가상 네트워크의 위임된 서브넷에 있어서, 온프레미스 클라이언트는 ExpressRoute나 VPN으로 접근합니다.

## Step 13 · Which one do I pick?

[curious] 내 상황과 비슷한 요구를 고르면, 비교 표에서 알맞은 서비스에 불이 들어옵니다.
[600ms]
[confident] Azure NetApp Files로 이어지는 요구는 두 가지입니다. Linux 고성능 컴퓨팅, 그리고 SAP나 Oracle입니다. 둘 다 엔터프라이즈 NAS가 필요합니다.
[600ms]
[reflective] 가벼운 Linux 작업이라면, SSD 기반 Azure Files NFS 공유로도 충분할 수 있습니다.

## Step 14 · All in one

[calm] 요구에 맞는 서비스를 고르고, 온프레미스에 어떻게 연결할지 정하세요. 서비스는 네 가지이고, 질문은 하나입니다.
[600ms]
[confident] A Z 305에서는 반정형 데이터와 비정형 데이터를 위한 스토리지를 추천하고, 기능과 성능, 비용의 균형을 맞추라고 요구합니다.
[600ms]
[proud] A Z 104에서는 Azure Files의 파일 공유 만들기, 스냅샷, 일시 삭제, 스토리지 계층, ID 기반 액세스를 다룹니다.
