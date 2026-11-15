# Narrator Script — Containers · Troubleshoot AKS: pod not running

**Source animation:** [AksTroubleshooting.html](../../../journeys/Container/AksTroubleshooting.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/aks/monitor-aks>
- <https://learn.microsoft.com/troubleshoot/azure/azure-kubernetes/welcome-azure-kubernetes>
- <https://learn.microsoft.com/troubleshoot/azure/azure-kubernetes/create-upgrade-delete/pod-stuck-crashloopbackoff-mode>
- <https://learn.microsoft.com/troubleshoot/azure/azure-kubernetes/availability-performance/troubleshoot-pod-scheduler-errors>

---

## Step 1 · My pod is not running. Which command shows me why?

[calm] Contoso Shop이 AKS에서 실행 중입니다. 포드 네 개가 떠 있어야 하는데, 그중 하나가 올라오지 않습니다.
[600ms]
[concerned] 당직인 Mina는 그 이유를 빨리 알아내야 합니다.
[600ms]
[confident] 여기 나오는 이름과 터미널 출력은 모두 가상이지만, 실제 클러스터에서 보이는 패턴을 그대로 보여 줍니다.

## Step 2 · The troubleshooting loop

[calm] 다섯 단계로 이루어진 루프가 있고, 순서는 항상 같습니다.
[600ms]
[confident] 상태를 읽고, 포드를 describe하고, 이벤트를 확인하고, 로그를 읽은 다음, 고치고 다시 확인하세요.
[600ms]
[reassuring] describe 결과에는 이미 Events 섹션이 들어 있어서, 많은 문제가 두 번째 단계에서 끝납니다. 나머지 명령은 더 알아봐야 할 때 쓰면 됩니다.

## Step 3 · Move 1 · What state is the pod in?

[calm] 첫 번째 단계는 kubectl get pods입니다. 모든 포드가 READY, STATUS, RESTARTS와 함께 나열됩니다.
[600ms]
[curious] STATUS 값만 봐도 어떤 종류의 문제인지 짐작할 수 있습니다. 그리고 READY가 1분의 0이면, 포드 안에 아직 준비된 컨테이너가 없다는 뜻입니다.
[600ms]
[confident] 대시 대문자 A를 붙이면 모든 네임스페이스의 포드가 나오고, 대시 n을 붙이면 네임스페이스 하나만 나옵니다.

## Step 4 · Move 2 · Describe it, then read the Events

[calm] 두 번째 단계는 kubectl describe pod입니다. 컨테이너마다 현재 상태와 마지막 상태, 종료 코드, 재시작 횟수가 나옵니다.
[600ms]
[curious] 맨 아래에 있는 Events 섹션은 포드의 일기장 같은 곳입니다.
[600ms]
[confident] 이 부분부터 읽으세요. Kubernetes가 스케줄링하고, 이미지를 가져오고, 시작하고, 재시작하는 식으로 무엇을 시도했는지, 그리고 무엇이 잘못됐는지 나와 있습니다.

## Step 5 · Move 3 · Read the events, oldest to newest

[calm] 세 번째 단계는 네임스페이스의 이벤트를 읽는 것입니다. Kubernetes가 시도한 내용이 기록되어 있습니다. 스케줄됨, 이미지 가져옴, 시작됨, 백오프입니다.
[600ms]
[curious] 시간순으로 정렬하면 포드에 무슨 일이 있었는지 이야기처럼 읽힙니다.
[600ms]
[serious] 이벤트는 Normal이거나 Warning입니다. Warning 이벤트부터 보세요. 단서가 바로 여기 있습니다.

## Step 6 · Move 4 · Read the logs, even from the crashed run

[calm] 네 번째 단계는 kubectl logs입니다. 앱이 출력한 내용이 나옵니다.
[600ms]
[concerned] 그런데 크래시 루프에 빠진 컨테이너는 재시작할 때마다 로그가 새로 시작돼서, 거의 비어 있습니다.
[600ms]
[confident] 대시 대시 previous를 붙여서 크래시가 난 실행의 로그를 읽으세요. 마지막 기록이 거기에 남아 있습니다.

## Step 7 · Each failure happens at one stage of a pod’s life

[calm] 모든 실패는 포드의 수명 중 어느 한 단계에서 일어납니다. 포드가 멈춘 단계를 찾으면, 어떤 종류의 원인을 쫓아야 하는지 알 수 있습니다.
[600ms]
[curious] 그 단계는 STATUS와 Events를 보면 알 수 있습니다.
[600ms]
[confident] Pending은 아직 노드에 배치되지 않았다는 뜻이고, ImagePullBackOff는 이미지 문제입니다. CrashLoopBackOff와 OOMKilled는 시작한 뒤에 일어납니다.

## Step 8 · Triage simulator: pick a symptom

[curious] 이제 연습해 볼 시간입니다. 실제로 마주칠 만한 증상을 하나 골라 보세요.
[600ms]
[confident] 터미널에서 원인을 찾아내는 명령이 실행되고, 그 옆에 가능성 높은 해결 방법이 나타납니다.
[600ms]
[encouraging] 여섯 가지를 모두 해 보세요. 출력은 가상이지만, 실제 kubectl 명령이 내놓는 형태를 따릅니다.

## Step 9 · When the node is the problem

[calm] 포드가 문제가 아닐 때도 있습니다. NotReady 상태의 노드는 포드를 받을 수 없으니, 노드를 살펴보세요.
[600ms]
[confident] Cordon은 새 포드가 그 노드에 배치되지 않게 막고, Drain은 실행 중인 포드를 다른 곳으로 옮깁니다.
[600ms]
[reassuring] AKS는 노드 상태를 지켜보다가 비정상 노드를 자동으로 복구할 수 있습니다. 업그레이드할 때도 cordon과 drain을 사용합니다.

## Step 10 · Where logs and events live in Azure

[calm] kubectl로는 지금 클러스터의 모습을 볼 수 있고, Azure Monitor에는 기록이 남아 있어서 포드가 사라진 뒤에도 검색할 수 있습니다.
[600ms]
[serious] 컨트롤 플레인 로그는 진단 설정을 만들기 전에는 수집되지 않습니다.
[600ms]
[curious] AKS Automatic에서는 Container insights와 관리형 Prometheus가 기본으로 켜져 있습니다. AKS Standard에서는 직접 켜야 합니다.

## Step 11 · kubectl debug: a shell on the node

[calm] 로그와 이벤트만으로 부족하면 kubectl debug로 노드에 디버깅 포드를 띄우세요.
[600ms]
[serious] 이 포드는 권한이 높은 컨테이너로 실행되니 신중하게 쓰세요. 그 안에서 chroot slash host를 실행하면 노드 자체를 직접 다룰 수 있습니다.
[600ms]
[confident] 살펴본 다음에는 지우세요. Windows 노드는 문서에 나와 있는 SSH 프록시 우회 방법이 필요합니다.

## Step 12 · Your pod-not-running playbook

[calm] 이제 루프 하나와, 증상에서 원인을 찾는 지도, 그리고 Azure가 증거를 보관하는 위치를 알게 됐습니다.
[600ms]
[confident] 실행되지 않는 포드라면 어떤 경우든 이 순서로 하면 됩니다.
[600ms]
[proud] 이것은 A I 200의 기술과도 맞닿아 있습니다. 로그와 이벤트, 종단 간 연결을 살펴서 AKS와 Container Apps의 솔루션을 모니터링하고 문제를 해결하는 것입니다.
