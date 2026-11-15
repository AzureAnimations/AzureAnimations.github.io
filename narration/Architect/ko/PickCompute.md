# Narrator Script — Architect · Pick the right compute

**Source animation:** [PickCompute.html](../../../journeys/Architect/PickCompute.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/architecture/guide/technology-choices/compute-decision-tree>

---

## Step 1 · Control or effort: choose your spot

[calm] Contoso의 모든 워크로드는 컴퓨트를 요구하지만, 서버 운영에 Contoso가 꼭 필요한 것은 아닙니다.
[600ms]
[curious] 스펙트럼은 인프라를 통해 관리되는 플랫폼부터 이벤트 기반 기능에 이르기까지 직접적인 통제와 관리 노력을 맞이합니다.
[600ms]
[reassuring] 모든 업무가 가상 머신에 있어야 한다고 가정하기보다는 팀이 실제로 어떤 책임을 맡아야 하는지 결정하는 것부터 시작하세요.

## Step 2 · Six questions that decide

[calm] 이 여섯 가지 질문은 모호한 컴퓨팅 요청을 설계 요구사항의 집합으로 바꿉니다.
[600ms]
[curious] 운영 시스템 제어, 스타트업 동작, 확장, 상태, 가격 책정, 그리고 이를 운영할 팀의 역량을 점검하세요.
[600ms]
[reassuring] 각 워크로드를 별도로 평가하세요. 하나의 완전한 애플리케이션이 여러 컴퓨트 서비스를 정당하게 사용할 수 있기 때문입니다.

## Step 3 · Virtual machines: when, which size, how many

[calm] 가상 머신은 Contoso가 운영 시스템 접근이나 해당 수준의 제어가 필요한 소프트웨어가 필요할 때 적합합니다.
[600ms]
[curious] 그 다음 크기 가족을 리소스 요구량에 맞추고 여러 인스턴스가 어떻게 계속 사용 가능할지 계획하세요.
[600ms]
[reassuring] 스케일 세트는 반복되는 인스턴스와 스케일링을 해결하지만, 게스트 운영체제에 대한 책임을 제거하지는 않습니다.

## Step 4 · Containers: four services, one choice

[calm] 네 가지 옵션 모두 컨테이너를 운영하지만, 서로 다른 운영 책임을 드러냅니다.
[600ms]
[curious] AKS는 Kubernetes API가 필요한 팀에 적합하고, Container Apps는 클러스터 인터페이스를 직접 운영할 필요가 없게 해 줍니다.
[600ms]
[reassuring] Contoso의 카탈로그 API는 관리형 컨테이너 플랫폼이 필요하므로, 워크로드와 팀 요구사항은 Container Apps에 의존합니다.

## Step 5 · Serverless: code that runs when something happens

[calm] Azure Functions는 이벤트에 의해 트리거되는 코드를 지원하고, Logic Apps는 저코드 워크플로우 방식을 제공합니다.
[600ms]
[curious] 제로 확장 경로는 유휴 용량을 줄이지만, 시동 동작과 상태 요구사항은 여전히 중요합니다.
[600ms]
[reassuring] 서버리스가 모든 운영 제약을 제거한다고 약속하기보다는 이러한 요구에 맞춘 계획과 적용 패턴을 선택하세요.

## Step 6 · Batch: a pool of VMs for the nightly job

[calm] Contoso의 야간 내보내기는 독립적인 작업으로 나눌 수 있어, Azure Batch는 이를 풀, 작업, 작업으로 조직합니다.
[600ms]
[curious] 풀이 컴퓨팅 리소스를 제공하고, 스케줄러가 작업을 분배하며, 처리가 끝나면 용량이 줄어들 수 있습니다.
[600ms]
[reassuring] 스팟 용량은 재시도 가능한 작업의 비용을 낮추지만, 작업 설계는 퇴거를 허용해야 합니다.

## Step 7 · Five workloads, five services

[calm] 같은 여섯 가지 질문이 이제 Contoso의 다섯 가지 업무량을 서로 다른 요구를 충족하는 서비스에 할당합니다.
[600ms]
[curious] 정답은 모든 워크로드에 가장 큰 플랫폼을 쓰는 것이 아닙니다. 각 배정에는 구체적인 요구 사항이라는 근거가 있습니다.
[600ms]
[reassuring] 각 서비스에 첨부된 이유를 확인하고 더 간단한 옵션이 그 요구사항을 충족할 수 있는지 물어보세요.

## Step 8 · All in one: pick the simplest service that fits

[calm] 완성된 지도는 서비스 선택 옆에 워크로드 요구사항을 유지하여 그 트레이드오프를 명확히 보여줍니다.
[600ms]
[curious] 통제가 필요할 때는 인프라를, 플랫폼이 팀의 업무를 대신할 때는 관리형 서비스를 사용하세요.
[600ms]
[reassuring] 다음으로, 애플리케이션을 API 게이트웨이, 캐싱, 구성, 반복 가능한 릴리스 경로로 둘러싸세요.

