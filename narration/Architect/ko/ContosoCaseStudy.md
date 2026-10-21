# Narrator Script — Architect · Case study: design the Contoso platform

**Source animation:** [ContosoCaseStudy.html](../../../journeys/Architect/ContosoCaseStudy.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/az-305>
- <https://learn.microsoft.com/azure/well-architected/what-is-well-architected-framework>
- <https://learn.microsoft.com/entra/identity/hybrid/connect/choose-ad-authn>
- <https://learn.microsoft.com/azure/azure-sql/azure-sql-iaas-vs-paas-what-is-overview>
- <https://learn.microsoft.com/azure/azure-sql/managed-instance/business-continuity-high-availability-disaster-recover-hadr-overview>
- <https://learn.microsoft.com/azure/app-service/overview-patch-os-runtime>
- <https://learn.microsoft.com/azure/networking/design-guide/app-delivery>
- <https://learn.microsoft.com/azure/vpn-gateway/vpn-gateway-about-vpngateways>
- <https://learn.microsoft.com/azure/architecture/networking/architecture/hub-spoke>
- <https://learn.microsoft.com/azure/cloud-adoption-framework/migrate/plan-migration>
- <https://learn.microsoft.com/azure/dms/dms-overview>
- <https://learn.microsoft.com/azure/storage/common/storage-migration-overview>
- <https://learn.microsoft.com/azure/well-architected/>

---

## Step 1 · Read the brief: requirements and constraints

[calm] 좋아하는 Azure 서비스를 찾기 전에 Contoso의 브리핑을 읽어보세요.
[600ms]
[curious] 밑줄이 그어진 요구사항은 설계가 해야 할 일과 그것을 전달하는 방식에 대한 제약을 구분합니다.
[600ms]
[reassuring] 먼저 부적합한 옵션을 제거하고, 남은 설계를 같은 증거와 비교하세요.

## Step 2 · Identity and governance: pick the sign-in method

[calm] Contoso 직원들은 이미 온프레미스 계정을 사용하고 있으므로, 로그인 선택은 그 요구사항부터 시작됩니다.
[600ms]
[curious] 각 메서드가 사용자를 검증하는 지점을 비교한 후, 명시된 요구를 충족하는 가장 간단한 방법을 선택하세요.
[600ms]
[reassuring] 거버넌스 보호장치는 그 인증 결정에 위치해 있습니다; 익숙한 제품명만으로는 정당화가 되지 않습니다.

## Step 3 · Data: match the SQL target to the need

[calm] 데이터베이스 요구사항은 단순히 관계형 테이블을 저장하는 공간이 아니라 인스턴스 수준의 SQL Server 기능을 요구합니다.
[600ms]
[curious] 이렇게 하면 가상 머신의 운영 시스템 책임을 추가하지 않고도 선택지를 SQL 관리 인스턴스로 좁혀줍니다.
[600ms]
[reassuring] 그것을 선택한 요구사항을 가리키고, 다른 선택지들이 기능이나 운영 노력 제약 조건을 놓치는 이유를 설명하세요.

## Step 4 · Business continuity: meet the RTO and RPO

[calm] Contoso는 리전 장애 발생 후 1시간 이내에 서비스를 복구하고, 주문 데이터 손실을 최대 5분으로 제한해야 합니다.
[600ms]
[curious] 각 옵션이 두 가지 복구 목표를 모두 충족하고 요구 사항에 명시된 리전 장애에 대응하는지 확인하세요.
[600ms]
[reassuring] 존 중복은 다른 경계를 다루는 반면, 장애 조치 그룹은 이 설계에서 고려된 교차 지역 복구 방식을 제공합니다.

## Step 5 · Compute: the least to operate that fits

[calm] 소규모 운영팀과 재작성 없는 런칭이 컴퓨팅 결정을 형성합니다.
[600ms]
[curious] 적합한 웹 애플리케이션의 경우, App Service는 Contoso의 작업 목록에서 운영 체제 및 런타임 유지보수를 제거합니다.
[600ms]
[reassuring] 레거시 배치 워크로드는 초기 경로가 달라질 수 있어, 한 솔루션이 모든 곳에 하나의 컴퓨트 서비스가 필요하지 않은 이유를 보여줍니다.

## Step 6 · Network: private link, global front door

[calm] 네트워크는 두 가지 요구사항을 충족해야 합니다: 개인 데이터센터 연결과 고객을 위한 글로벌 진입 지점.
[600ms]
[curious] ExpressRoute는 개인 연결을 담당하고, Front Door는 전역 애플리케이션 라우팅 역할을 제공합니다.
[600ms]
[reassuring] 지역 게이트웨이와 인터넷 기반 VPN은 서로 다른 문제를 해결하므로, 각 선택지를 요약서의 정확한 문구와 비교해 보세요.

## Step 7 · Migration: the lightest route per workload

[calm] 마이그레이션 계획은 출시 전에 모든 것을 다시 작성하는 대신 플랫폼의 각 부분에 실용적인 경로를 할당합니다.
[600ms]
[curious] Azure Migrate가 서버를 처리하고, Database Migration Service가 데이터베이스를 이동하며, 데이터 전송 경로가 파일을 처리합니다.
[600ms]
[reassuring] 각 도구를 선택할 때 의존성 순서, 검증, 컷오버 요구사항을 보이도록 하세요.

## Step 8 · All in one: the Contoso platform

[calm] 조립된 Contoso 플랫폼은 네 가지 디자인 영역에 하나의 연결된 선택지로 응답합니다.
[600ms]
[curious] 신뢰성, 보안, 비용 최적화, 운영 우수성, 성과 효율성 측면에서 검토하세요.
[600ms]
[reassuring] 방어 가능한 설계는 이러한 기둥들을 요구사항과 균형 있게 맞추며, 모든 차원이 최대화된다고 주장하는 대신 그 절충점을 설명합니다.

