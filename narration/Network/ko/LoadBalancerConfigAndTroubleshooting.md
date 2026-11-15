# Narrator Script — Network · Configure and troubleshoot Azure Load Balancer

**Source animation:** [LoadBalancerConfigAndTroubleshooting.html](../../../journeys/Network/LoadBalancerConfigAndTroubleshooting.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/load-balancer/load-balancer-overview>

---

## Step 1 · One Front End, Many Backends

[calm] Contoso 웹 쇼핑몰은 가상 머신 세 대에서 돌아갑니다. 로드 밸런서는 고객에게 프런트엔드 주소 하나만 보여 줍니다.
[600ms]
[confident] 새 연결은 백엔드 풀에서 정상인 머신들에 고르게 나눠 보냅니다.
[600ms]
[curious] 규칙이 트래픽을 어디로 보낼지 정하고, 상태 프로브가 어느 머신이 정상인지 판단합니다. 이 두 가지를 구성해 보겠습니다.

## Step 2 · Public or Internal, Standard SKU

[curious] 프런트엔드 IP가 유형을 정합니다. 공용 IP면 공용 로드 밸런서, 프라이빗 IP면 내부 로드 밸런서가 됩니다.
[600ms]
[confident] 내부 로드 밸런서는 가상 네트워크 안에서만 동작하고, 인터넷에서 오는 트래픽은 받지 않습니다.
[600ms]
[serious] Standard SKU를 쓰세요. Basic은 2025년 9월 30일에 종료되었습니다. 세 번째 SKU인 Gateway는 어플라이언스용입니다.

## Step 3 · Backend Pools: NIC or IP

[calm] 백엔드 풀은 트래픽을 처리할 대상 목록입니다. 네트워크 인터페이스로 채우거나, IP 주소와 가상 네트워크로 채웁니다.
[600ms]
[confident] 네트워크 인터페이스 풀에는 VM이나 확장 집합 인스턴스를 연결합니다. IP 기반 풀은 주소를 미리 채워 둘 수 있고, Standard가 필요합니다.
[600ms]
[reflective] 로드 밸런서 하나에 두 종류의 풀을 다 둘 수는 있지만, 한 풀 안에서 섞을 수는 없습니다.

## Step 4 · Health Probes

[curious] 로드 밸런서는 모든 백엔드를 프로브합니다. 여기서는 web-2가 응답하지 않으니, 새 연결을 받지 않습니다.
[600ms]
[confident] 프로브에는 프로토콜, 포트, 간격, 임계값이 있습니다. TCP 프로브는 응답이 없으면 실패하고, HTTP 프로브는 200이 아닌 응답이 오면 실패합니다.
[600ms]
[reassuring] Standard에서는 이미 맺어진 TCP 흐름은 계속 유지됩니다. 스위치를 눌러 두 상태를 모두 확인해 보세요.

## Step 5 · Load-Balancing Rules

[calm] 규칙은 프런트엔드 IP와 포트를 백엔드 포트에 연결하고, 상태 프로브 하나를 사용합니다.
[600ms]
[curious] 기본적으로 새 연결마다 값 다섯 개로 해시를 계산하기 때문에, 같은 클라이언트도 다른 머신으로 갈 수 있습니다.
[600ms]
[confident] 클라이언트가 계속 같은 머신에 붙어 있어야 한다면, 클라이언트 IP 기준 세션 지속성으로 바꾸세요. 모드를 바꿔도 다운타임은 없습니다.

## Step 6 · Inbound NAT Rules

[curious] 부하 분산 규칙은 정상인 VM 아무거나 고릅니다. 하지만 특정 머신 하나가 필요할 때도 있습니다.
[600ms]
[confident] 인바운드 NAT 규칙은 프런트엔드 포트 하나를 내가 고른 VM 한 대로 전달합니다. 예를 들어 지정한 서버 한 대로 가는 S S H나 R D P가 그렇습니다.
[600ms]
[encouraging] 풀 전체를 대상으로 하고 포트를 미리 할당하는 버전 2를 쓰세요. 그리고 부하 분산 규칙과 달리 프로브가 필요 없습니다.

## Step 7 · Outbound Rules and SNAT Ports

[calm] 백엔드 VM은 S N A T를 이용해 로드 밸런서의 공용 IP로 나갈 수 있습니다.
[600ms]
[confident] 아웃바운드 규칙을 쓰면 어느 프런트엔드로 나갈지 고르고, VM마다 S N A T 포트를 몇 개 줄지 정할 수 있습니다.
[600ms]
[reassuring] 더 확장하려면 프런트엔드 IP를 추가하거나, 서브넷에 NAT 게이트웨이를 두세요. NAT 게이트웨이가 우선 적용됩니다.

## Step 8 · HA Ports and Gateway Load Balancer

[curious] 방화벽 같은 어플라이언스는 모든 포트가 필요합니다.
[600ms]
[confident] H A 포트 규칙은 내부 Standard 로드 밸런서에서 프로토콜은 all, 포트는 0으로 설정합니다. 그러면 규칙 하나로 모든 흐름을 분산합니다.
[600ms]
[impressed] 그런 다음 Gateway Load Balancer가 이 어플라이언스들을 공용 프런트엔드에 체인으로 연결하고, 사용자 정의 경로는 필요 없습니다.

## Step 9 · Troubleshoot: Probe Failing

[concerned] 이번에는 web-2가 Down으로 나옵니다. 프로브가 들어가는 길에 관문을 세 개 통과해야 합니다.
[600ms]
[confident] 첫째는 네트워크 보안 그룹, 둘째는 게스트 방화벽, 셋째는 올바른 포트의 리스너입니다. 세 곳 모두 프로브 주소를 허용해야 합니다.
[600ms]
[determined] 이 순서대로 확인하고, 인스턴스별 상태 프로브 상태를 살펴보세요.

## Step 10 · Troubleshoot: Backend Unreachable

[serious] 프로브는 Up인데 사용자는 여전히 실패합니다. 데이터 포트와 네트워크 보안 그룹, 그리고 자기 자신으로 되돌아오는 흐름이 있는지 확인하세요.
[600ms]
[concerned] 자기 풀에 속한 VM에서 내부 프런트엔드를 호출하지 마세요. 흐름이 같은 머신으로 되돌아와서 시간 초과가 날 수 있습니다.
[600ms]
[confident] VM이 밖으로 나가지 못한다면, 아웃바운드 규칙이나 서브넷의 NAT 게이트웨이처럼 명시적인 아웃바운드 방법이 필요합니다.

## Step 11 · Where Do I Look First?

[calm] 증상에서 시작하세요. 가지마다 가장 먼저 확인할 것을 알려 줍니다.
[600ms]
[confident] 클라이언트가 연결하지 못하면 프로브 상태를 보세요. VM이 밖으로 나가지 못하면 아웃바운드 방법과 S N A T 메트릭을 확인하세요. 트래픽이 고르지 않다면 세션 지속성을 확인하세요.
[600ms]
[proud] A Z 104와 A Z 700 모두에 나오는 로드 밸런서 내용을 이것으로 다뤘습니다.
