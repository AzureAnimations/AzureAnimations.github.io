# Narrator Script — Network · Design for network performance: latency, throughput and the path

**Source animation:** [NetworkPerformance.html](../../../journeys/Network/NetworkPerformance.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/virtual-network/accelerated-networking-overview>
- <https://learn.microsoft.com/azure/frontdoor/front-door-traffic-acceleration>
- <https://learn.microsoft.com/azure/expressroute/about-fastpath>

---

## Step 1 · Is It Slow, or Is It Far?

[calm] Contoso의 온라인 쇼핑몰은 호스팅 리전에서 먼 고객에게는 느리게 느껴집니다.
[600ms]
[curious] 지연 시간은 두 지점 사이의 왕복 시간입니다. 처리량은 초당 이동하는 데이터의 양이고, 패킷 손실은 도착하지 못하는 패킷의 비율입니다.
[600ms]
[confident] 문제마다 해결책이 다르니, 해결책을 고르기 전에 어떤 증상인지부터 정하세요.

## Step 2 · Measure First

[calm] Connection Monitor는 경로를 따라 지연 시간과 패킷 손실을 테스트하고, 홉 단위로 보여 줍니다.
[600ms]
[confident] Network Insights는 네트워크 리소스의 토폴로지와 상태, 메트릭을 별도 설정 없이 보여 줍니다.
[600ms]
[curious] VM 간 지연 시간은 Windows에서는 Latte, Linux에서는 SockPerf로 측정하세요. 일반 ping은 ICMP를 쓰기 때문에, TCP나 UDP 테스트와는 같은 테스트가 아닙니다.

## Step 3 · Keep Chatty VMs Close

[curious] 통신이 잦은 VM은 왕복할 때마다 시간을 씁니다. 같은 리전이면 가깝고, 같은 영역이면 더 가깝습니다.
[600ms]
[reflective] 그런데 영역 하나가 여러 데이터센터에 걸쳐 있을 수 있어서, 같은 영역의 머신끼리도 몇 홉 떨어져 있을 수 있습니다.
[600ms]
[serious] 근접 배치 그룹은 VM들을 한 데이터센터에 모아서 지연 시간을 가장 낮춥니다. 대신 할당이 실패할 수 있고, 복원력을 어느 정도 포기해야 합니다.

## Step 4 · Accelerated Networking

[calm] 보통은 모든 패킷이 호스트의 가상 스위치를 거칩니다.
[600ms]
[impressed] 가속 네트워킹을 켜면 네트워크 카드가 트래픽을 VM으로 바로 보내고, 네트워크 보안 그룹 같은 정책도 하드웨어에서 적용합니다.
[600ms]
[confident] 그만큼 지연 시간과 지터, CPU 사용량이 줄어듭니다. 같은 가상 네트워크의 두 VM 모두에 켜야 하고, 지원되는 크기여야 하며, VM을 중지해서 할당을 해제한 상태에서 설정해야 합니다.

## Step 5 · VM Size Sets the Ceiling

[calm] VM 크기마다 아웃바운드 대역폭 한도가 따로 있습니다.
[600ms]
[serious] 이 한도는 VM에서 나가는 모든 트래픽을 목적지와 상관없이 합산하고, 모든 네트워크 카드가 나눠 씁니다. 카드를 더 붙이거나 가속 네트워킹을 켜도 한도는 올라가지 않습니다.
[600ms]
[encouraging] 한도에 걸린다면 네트워크 대역폭이 더 큰 크기를 고르세요.

## Step 6 · Edge Acceleration

[curious] Front Door와 CDN 엣지 위치는 사용자 가까이에 있어서, 거기서 캐시된 파일을 바로 제공합니다.
[600ms]
[confident] 동적 트래픽에는 분할 TCP가 쓰입니다. 사용자의 연결을 가까운 엣지에서 끝내고, 오리진까지는 오래 유지되는 연결을 재사용합니다.
[600ms]
[serious] 정적 파일만 캐시하고, 개인 데이터는 절대 캐시하지 마세요. 그리고 새로 설계한다면 Front Door로 시작하세요. 클래식 Azure CDN은 종료될 예정입니다.

## Step 7 · Pick Routing for Speed

[calm] 사용자를 가장 빠른 곳으로 보내 주는 서비스는 여러 가지인데, 각각 동작하는 계층이 다릅니다.
[600ms]
[confident] Traffic Manager는 DNS 응답으로 지연 시간이 가장 짧은 엔드포인트를 알려 줍니다. Front Door는 HTTP와 HTTPS 사용자를 가까운 엣지로 받아들입니다.
[600ms]
[curious] 리전 간 로드 밸런서는 TCP와 UDP 앱에 고정된 글로벌 IP 하나를 제공합니다. 탭을 골라 서로 비교해 보세요.

## Step 8 · Private Path to On-Premises

[calm] 프라이빗 회선은 대역폭이 고정이라서, 최대 트래픽에 맞춰 크기를 정해야 합니다. 넘치게 쓰면 패킷이 버려집니다.
[600ms]
[confident] FastPath를 쓰면 데이터가 게이트웨이를 건너뜁니다. 경로 교환은 여전히 게이트웨이가 하고, 고성능 게이트웨이 SKU가 필요합니다.
[600ms]
[reassuring] Global Reach는 온프레미스 사이트들을 Microsoft 네트워크를 통해 서로 연결해 줍니다.

## Step 9 · Where Inspection Adds Latency

[concerned] 트래픽을 허브의 방화벽으로 보내면 홉이 하나 늘어납니다.
[600ms]
[confident] 지연 시간에 민감한 스포크끼리 직접 피어링하면 홉이 늘지 않아서, 지연 시간을 최소화하려면 이 방법을 권장합니다.
[600ms]
[reflective] Virtual WAN은 Microsoft가 관리하는 허브 라우터를 더해 주고, 라우팅 의도를 쓰면 검사가 필요한 곳에 검사를 다시 넣을 수 있습니다.

## Step 10 · All in One

[calm] 증상이 지연 시간인지, 처리량인지, 패킷 손실인지부터 정하세요. 그런 다음 Connection Monitor와 Network Insights로 측정하세요.
[600ms]
[confident] 그다음 배치, 네트워크 카드, VM 크기, 엣지, 라우팅, 프라이빗 경로 중에서 한 번에 하나씩만 바꾸면서 해결합니다.
[600ms]
[proud] 증상마다 알맞은 해결책을 연결할 수 있으면, 네트워크 성능을 최적화하는 솔루션을 추천할 수 있습니다. A Z 305에서 다루는 역량입니다.
