# Narrator Script — Compute · Azure Virtual Desktop: Desktops for 500 Remote Staff

**Source animation:** [VirtualDesktop.html](../../../journeys/Compute/VirtualDesktop.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/virtual-desktop/>

---

## Step 1 · Desktops for 500 Remote Staff, No Laptops

[calm] Contoso는 원격 직원 500명을 채용하는데, 노트북은 지급하지 않습니다. 직원들이 쓰는 기기가 모두 제각각이거든요.
[600ms]
[curious] 그러면 이 직원들이 쓸 Windows 데스크톱은 어디에서 실행해야 할까요?
[600ms]
[confident] 방법은 Azure의 가상 머신에서 데스크톱을 실행하고, 어떤 기기로든 스트리밍하는 것입니다. 이것이 Azure Virtual Desktop이고, 하나씩 차례로 설계해 보겠습니다.

## Step 2 · Who Runs What: Microsoft vs You

[calm] Azure Virtual Desktop은 서비스이기 때문에, 가장 먼저 따져 볼 것은 누가 무엇을 운영하느냐입니다.
[600ms]
[confident] Microsoft가 컨트롤 플레인을 운영합니다. 웹 액세스, 브로커, 게이트웨이, 리소스 디렉터리입니다. 원격 데스크톱 서비스처럼 게이트웨이 서버를 직접 관리하지 않아도 됩니다.
[600ms]
[serious] 여러분이 운영하는 것은 세션 호스트 VM과 이미지, 앱, 가상 네트워크, 백업과 복구, 그리고 ID입니다.

## Step 3 · Five Objects Connect Users to a Desktop

[calm] 사용자를 데스크톱에 연결해 주는 개체는 다섯 가지입니다. 워크스페이스는 애플리케이션 그룹을 묶는 단위이고, 사용자에게 보이는 목록입니다.
[600ms]
[curious] 애플리케이션 그룹은 호스트 풀 하나에서 데스크톱이나 RemoteApp을 게시하고, 여기에 사용자를 할당합니다. 가능하면 그룹 단위로 할당하세요.
[600ms]
[confident] 호스트 풀은 같은 이미지로 만든 세션 호스트 VM의 모음입니다. 애플리케이션 그룹은 워크스페이스 하나에만 속할 수 있습니다.

## Step 4 · Pooled or Personal Host Pool?

[calm] 호스트 풀에는 두 종류가 있습니다. 풀링 방식에서는 여러 사용자가 세션 호스트를 함께 써서 비용을 줄입니다.
[600ms]
[curious] 풀링 방식에서는 부하 분산 방법도 고릅니다. 너비 우선은 새 세션을 고르게 나누고, 깊이 우선은 호스트 하나가 세션 한도에 찰 때까지 채운 다음 다음 호스트로 넘어갑니다.
[600ms]
[confident] 개인 풀은 사용자마다 VM을 하나씩 주기 때문에 부하 분산이 필요 없습니다. 다중 세션 Windows는 Azure Virtual Desktop에서만 쓸 수 있습니다.

## Step 5 · Profiles Follow the User: FSLogix

[curious] 풀링 방식에서는 사용자가 접속할 때마다 다른 호스트에 연결될 수 있습니다. 그러면 프로필은 어떻게 따라다닐까요?
[600ms]
[confident] 권장하는 방법은 FSLogix 프로필 컨테이너입니다. 로그인할 때 파일 공유에 있는 컨테이너가 가상 디스크로 연결되어서, 프로필이 로컬에 있는 것처럼 동작합니다.
[600ms]
[reassuring] 대부분의 고객에게는 Azure Files를 권장하고, Azure NetApp Files도 또 하나의 Azure 선택지입니다.

## Step 6 · Identity: Entra ID Signs Users In

[calm] 사용자 인증은 항상 Microsoft Entra ID가 하므로, 모든 사용자에게 Entra 계정이 필요합니다.
[600ms]
[serious] 개인 Microsoft 계정은 지원하지 않습니다.
[600ms]
[confident] 세션 호스트는 같은 Entra 테넌트나 Active Directory 도메인에 가입합니다. 도메인을 쓰면 사용자 계정이 하이브리드 ID여야 하는데, 쉽게 말해 동기화된 계정이어야 합니다.

## Step 7 · Three Ways to Join Session Hosts

[calm] 조인 유형은 ID와 앱이 어디에 있는지에 따라 고릅니다.
[600ms]
[curious] Entra 조인 호스트는 도메인 컨트롤러에 직접 연결되지 않아도 되고, Intune에 자동으로 등록할 수 있습니다. 도메인을 쓴다면 Microsoft Entra Connect가 계정을 동기화하거나, Entra Domain Services가 Entra ID에서 동기화합니다.
[600ms]
[serious] 가장 중요한 규칙은 이것입니다. 호스트 풀에는 한 가지 조인 유형의 세션 호스트만 넣으세요.

## Step 8 · Network: Outbound Only, Then Shortpath

[calm] 기본적으로 클라이언트와 세션 호스트가 모두 TLS로 게이트웨이에 아웃바운드로 연결되고, 게이트웨이가 세션을 중계합니다.
[600ms]
[reassuring] 이것을 리버스 커넥트라고 하며, 그래서 인바운드 RDP 포트를 열 필요가 없습니다.
[600ms]
[curious] RDP Shortpath를 쓰면 병렬 UDP 경로가 추가되어 안정성과 지연 시간이 좋아지고, TCP는 대체 경로로 남습니다. 그리고 Private Link를 쓰면 트래픽이 프라이빗 엔드포인트 안에만 머무릅니다.

## Step 9 · Autoscale: Pay for Hosts Only When Used

[calm] 크기 조정 계획이 세션 호스트를 켜고 끄기 때문에, 밤새 놀고 있는 호스트에 비용을 내지 않아도 됩니다.
[600ms]
[curious] 하루가 네 단계로 나뉩니다. 램프업, 피크, 램프다운, 오프피크입니다. 풀링 방식의 일정은 용량 임계값과 호스트 최소 비율을 사용합니다.
[600ms]
[confident] 개인 풀의 일정은 로그아웃이나 연결 끊김 같은 세션 상태를 기준으로 동작합니다. 여기 나오는 호스트 수는 예시일 뿐입니다.

## Step 10 · Run It: Images, Cost and Monitoring

[calm] 운영을 시작하려면 골든 이미지를 하나 만드세요. VM을 원하는 대로 구성하고, sysprep을 실행한 다음, Azure Compute Gallery에 캡처합니다.
[600ms]
[confident] 풀링 호스트는 업데이트한 이미지로 다시 배포해서 업데이트합니다. 다중 세션 호스트와 자동 크기 조정, Start VM on Connect를 쓰면 비용을 관리할 수 있습니다.
[600ms]
[reassuring] Azure Virtual Desktop Insights는 Log Analytics 워크스페이스를 사용해서 전체 상태를 보여 줍니다.

## Step 11 · Pick a Design for Each User Type

[curious] 사용자부터 시작해 보세요. 유형을 하나 고르면, 그에 맞는 프로필과 크기 조정 방식이 나옵니다.
[600ms]
[confident] 단순 업무 직원에게는 깊이 우선을 쓰는 풀링 다중 세션 호스트가 맞습니다. 개발자에게는 VM을 하나씩 쓰는 개인 호스트 풀을 줍니다. 계약직 직원은 브라우저에서 RemoteApp을 쓰면 되고, 외부 ID를 위해 Entra 조인 호스트를 씁니다.
[600ms]
[serious] 이것은 설계 제안일 뿐이니, 크기를 정하기 전에 여러분의 앱으로 직접 테스트해 보세요.

## Step 12 · Azure Virtual Desktop, All in One

[calm] Contoso 직원 500명을 위한 전체 설계는 이렇습니다. 다섯 가지 개체, 알맞은 호스트 풀 유형, 그리고 사용자를 따라다니는 프로필입니다.
[600ms]
[confident] 여기에 ID 계획 하나, 아웃바운드 전용 네트워크, 자동 크기 조정, 그리고 좋은 이미지를 더하세요.
[600ms]
[proud] 세 가지 질문을 기억하세요. Microsoft는 무엇을 운영하는지, 여러분은 무엇을 운영하는지, 그리고 무엇을 설계해야 하는지입니다. 이것이 컴퓨팅 솔루션 설계에 대한 A Z 305 기술의 핵심입니다.
