# Narrator Script — Network · Protect and observe your network: DDoS, flow logs and traffic analytics

**Source animation:** [NetworkProtection.html](../../../journeys/Network/NetworkProtection.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/ddos-protection/ddos-protection-overview>
- <https://learn.microsoft.com/azure/network-watcher/vnet-flow-logs-overview>

---

## Step 1 · A busy Friday, or an attack?

[calm] 바쁜 금요일, Contoso Shop의 공용 IP에 트래픽이 몰려 마비됐습니다. 고객이 결제를 하지 못합니다.
[600ms]
[concerned] 세일 때문일까요, 공격일까요? 이 트래픽은 누가 보냈고, 무엇이 이걸 받아 낼 수 있을까요?
[600ms]
[serious] DDoS 공격은 애플리케이션이 감당할 수 있는 양보다 많은 트래픽을 보내서, 실제 사용자가 들어오지 못하게 만듭니다.

## Step 2 · Three kinds of DDoS attack

[curious] 공격은 세 가지로 나뉩니다. 통로를 가득 채우는 공격, 핸드셰이크를 악용하는 공격, 실제 웹 사용자를 흉내 내는 공격입니다.
[600ms]
[calm] 3계층과 4계층은 패킷과 연결을 다룹니다. 7계층은 애플리케이션입니다. 공격 종류마다 막는 계층이 다릅니다.
[600ms]
[confident] Azure DDoS Protection은 3계층과 4계층 공격을 완화합니다. 7계층에는 웹 애플리케이션 방화벽을 추가합니다.

## Step 3 · Three levels of DDoS cover

[calm] 공용 IP에는 모두 기본 플랫폼 보호가 적용됩니다.
[600ms]
[curious] 유료 계층은 두 가지, DDoS IP Protection과 DDoS Network Protection입니다. 앱에 맞게 보호를 조정하고, 경고와 로그 같은 기능을 더해 줍니다.
[600ms]
[reassuring] 두 계층은 핵심 기술이 같고, 부가 서비스에서 차이가 납니다. 비용은 가격 페이지에서 확인하세요.

## Step 4 · Absorb, scrub, forward

[calm] 학습된 한도를 넘으면, Azure가 글로벌 네트워크로 폭주 트래픽을 흡수하고 걸러 냅니다.
[600ms]
[confident] 정상 트래픽만 앱으로 전달됩니다.
[600ms]
[impressed] 적응형 실시간 튜닝은 머신 러닝 기반 트래픽 프로파일링으로 보호하는 공용 IP마다 한도를 정해 주기 때문에, 임계값을 직접 조정할 필요가 없습니다.

## Step 5 · See the attack while it happens

[curious] 메트릭과 경고, 로그를 보면 지금 공격이 진행 중인지, 무엇이 차단됐는지 알 수 있습니다.
[600ms]
[confident] Network Protection에는 신속 대응 팀도 포함됩니다. 진단 설정으로 DDoS 로그를 Log Analytics 워크스페이스에 보내세요.
[600ms]
[serious] 테스트는 승인된 시뮬레이션 파트너와만 하고, 내 소유가 아닌 대상에는 절대 하지 마세요.

## Step 6 · Layer the defences

[calm] 모든 걸 혼자 막아 주는 통제는 없습니다. DDoS Protection은 3계층과 4계층의 폭주를 처리합니다.
[600ms]
[curious] WAF는 7계층에서 웹 요청을 읽고, NSG와 방화벽은 누가 들어오고 나갈지 결정합니다.
[600ms]
[confident] 흔한 설계는 DDoS 보호를 적용한 공용 IP를 WAF가 있는 Application Gateway에 붙이고, 그 뒤에 NSG로 지키는 서브넷을 두는 것입니다.

## Step 7 · What a flow log records

[curious] 가상 네트워크를 지나는 IP 흐름은 모두 작은 레코드로 남습니다. 누가 누구와 어느 포트로 통신했고, 허용됐는지 거부됐는지가 담깁니다.
[600ms]
[calm] 레코드에는 네트워크 인터페이스, 프로토콜, 흐름 상태, 암호화 상태, 패킷 수와 바이트 수도 들어 있습니다.
[600ms]
[reassuring] Microsoft.Insights 리소스 공급자가 등록되어 있어야 하고, 같은 리전에 Standard 스토리지 계정이 필요합니다.

## Step 8 · One switch replaces many

[serious] NSG 흐름 로그는 2027년 9월 30일에 종료되고, 새로 만들 수도 없습니다.
[600ms]
[confident] 흐름 로그는 NSG마다 켜지 말고, 가상 네트워크에서 한 번만 켜세요.
[600ms]
[concerned] 같은 워크로드에 가상 네트워크 흐름 로그를 켜기 전에 NSG 흐름 로그를 먼저 끄세요. 그러지 않으면 같은 트래픽을 두 번 기록하고, 비용도 두 번 내게 될 수 있습니다.

## Step 9 · Traffic analytics: patterns, not rows

[calm] 원시 흐름 로그는 그냥 행입니다. 트래픽 분석이 이를 패턴으로 바꿔 줍니다.
[600ms]
[curious] 로그를 읽어 중복을 합치고, 지리 정보와 보안 맥락을 덧붙여서, 결과를 Log Analytics 워크스페이스에 저장합니다.
[600ms]
[serious] Network Watcher와 워크스페이스, 그리고 흐름 로그를 켠 가상 네트워크가 필요합니다. 모든 리전이 지원하는 건 아니니, 먼저 리전 표를 확인하세요.

## Step 10 · Ask the network, check the posture

[calm] Network Watcher는 지금 당장의 질문에 답해 줍니다. NSG 진단, 다음 홉, 유효 보안 규칙 같은 도구가 있습니다.
[600ms]
[confident] Defender for Cloud는 설정을 계속 점검해서 고쳐야 할 부분을 목록으로 보여 줍니다.
[600ms]
[reassuring] 보안 점수는 그 결과를 숫자 하나로 합쳐 줍니다. 점수가 높을수록 확인된 위험은 낮습니다.

## Step 11 · Pick a threat, see what reacts

[curious] 공격이나 실수 중에서 하나를 골라 보세요.
[600ms]
[confident] 어떤 통제가 반응하는지, 그리고 어디서 확인할 수 있는지 경로로 보여 줍니다.
[600ms]
[reflective] 흔한 위협 네 가지에 대응도 네 가지로 다릅니다. 실제 방어는 대부분 이 중 여러 가지를 겹쳐 씁니다.

## Step 12 · Absorb, block, record, flag

[calm] DDoS Protection으로 흡수하고, WAF와 NSG, 방화벽으로 차단하고, 흐름 로그로 기록하고, Defender for Cloud로 문제를 알립니다.
[600ms]
[confident] 통제를 여러 겹으로 쌓고, 로그와 권장 사항으로 내 네트워크에서 실제로 무슨 일이 벌어지는지 확인하세요.
[600ms]
[proud] A Z 700은 이 기술들을 직접 언급하고, A Z 305는 네트워크 보안과 모니터링에 알맞은 솔루션을 고르게 합니다.
