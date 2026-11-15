# Narrator Script — GitHub · Run Actions at Scale: Runners, Policies, Secrets and Variables

**Source animation:** [ActionsAtScale.html](../../../journeys/GitHub/ActionsAtScale.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/en-us/azure/developer/github/github-actions>

---

## Step 1 · From one team to a thousand repositories

[calm] Priya의 팀은 러너 하나에서 워크플로우 하나를 실행했습니다. 간단했죠.
[600ms]
[concerned] 이제 Contoso의 저장소 천 개가 Actions를 쓰려고 하고, 팀마다 같은 질문을 합니다.
[600ms]
[confident] 대규모 Actions의 핵심은 거버넌스입니다. 머신, 액세스, 허용할 액션, 비밀, 비용을 관리하는 것이죠.

## Step 2 · Hosted runners: what is preinstalled

[calm] GitHub 호스팅 러너에는 러너 앱과 여러 도구가 미리 설치되어 있고, GitHub가 이를 관리합니다.
[600ms]
[curious] 무언가를 설치하기 전에 이미지에 뭐가 있는지 먼저 확인하세요. 작업 설정 로그와 이미지 readme에서 볼 수 있습니다.
[600ms]
[confident] 도구는 매주 업데이트되므로, setup 액션으로 버전을 지정하면 이미지가 바뀌어도 내 환경을 안정적으로 유지할 수 있습니다.

## Step 3 · Larger runners and installing software

[curious] 성능이 더 필요한가요? 더 큰 러너는 코어, 메모리, 디스크를 늘려 주고, 러너 그룹, 자동 스케일링, 고정 주소도 지원합니다.
[600ms]
[confident] GitHub Team과 Enterprise Cloud에서 쓸 수 있고, 작업이 사용하는 시간에 대해서만 분 단위로 청구됩니다.
[600ms]
[calm] 도구가 하나 더 필요한가요? 새 이미지를 만들지 말고, 작업이 실행되는 동안 setup 액션, 패키지 관리자, 컨테이너로 설치하세요.

## Step 4 · Self-hosted runners

[calm] 셀프 호스팅 러너는 직접 가진 머신을 수명이 짧은 토큰으로 등록하고, 라벨을 붙입니다.
[600ms]
[confident] 작업은 라벨로 러너를 찾고, 라벨이 모두 일치해야 합니다. 스케일 세트를 쓰면 자동 스케일링도 됩니다.
[600ms]
[serious] 머신의 패치는 직접 관리해야 합니다. 그리고 셀프 호스팅 러너는 프라이빗 저장소에서만 쓰세요. 퍼블릭 저장소의 포크가 내 머신에서 코드를 실행할 수 있기 때문입니다.

## Step 5 · Runner groups: who can use which runners

[calm] 러너 그룹은 어떤 저장소가 러너 묶음에 작업을 보낼 수 있는지 정합니다.
[600ms]
[confident] 그룹에는 더 큰 러너나 셀프 호스팅 러너를 담고, 액세스 정책은 모든 저장소 또는 선택한 목록으로 정합니다. 워크플로우는 그룹을 이름으로 요청합니다.
[600ms]
[intrigued] 엔터프라이즈 그룹은 소유자가 사용할 저장소를 고르기 전까지 조직에는 닫혀 있습니다.

## Step 6 · Networking: IP allow lists and static IPs

[calm] 알려진 주소만 허용하는 방화벽에는 변하지 않는 출발지 주소가 필요합니다.
[600ms]
[concerned] 표준 호스팅 러너는 주소 범위가 많아서 허용 목록으로 쓰기에 적합하지 않습니다.
[600ms]
[confident] 더 큰 러너는 풀에 고정 주소 범위를 줄 수 있고, 셀프 호스팅 러너는 내 IP 주소를 그대로 씁니다.

## Step 7 · Troubleshoot a runner

[curious] 작업이 끝없이 대기한다면 반드시 원인이 있습니다. 단계별로 따라가 보세요.
[600ms]
[confident] 먼저 라벨과 그룹을 확인하고, 그다음 러너가 유휴, 활성, 오프라인 중 어느 상태인지 보고, 마지막으로 네트워크와 제한을 확인하세요.
[600ms]
[reassuring] 품이 적게 드는 확인부터 시작하세요. 대기 중인 작업은 대부분 라벨 오타나 러너 상태로 설명됩니다.

## Step 8 · Policies: allow and deny lists

[calm] 관리자는 실행을 허용할 액션과 재사용 가능한 워크플로우를 정합니다.
[600ms]
[confident] 허용 항목, 거부 항목, SHA 고정을 쓰면 워크플로우가 시작되기도 전에 원치 않는 코드를 막을 수 있습니다.
[600ms]
[serious] 엔터프라이즈 정책은 조직 설정보다 우선할 수 있고, 고정을 필수로 하는 정책은 우리 조직 자체의 액션에도 적용됩니다.

## Step 9 · Secrets and variables by scope

[calm] 값은 알맞은 수준에서 한 번만 정의하세요. 조직, 저장소, 환경 중에서 고르면 됩니다.
[600ms]
[confident] 조직 값은 공유되고, 환경 값은 배포 대상 하나에 속합니다. 이름이 겹치면 가장 좁은 수준의 값이 우선합니다.
[600ms]
[curious] 비밀에는 민감한 값을 담으며, GitHub에 도착하기 전에 암호화됩니다. 변수에는 일반 구성값을 담습니다.

## Step 10 · Use them, and manage them with the API

[calm] 워크플로우에서는 vars 컨텍스트로 변수를, secrets 컨텍스트로 비밀을 읽습니다.
[600ms]
[confident] REST API로 둘 다 만들 수 있습니다. 비밀은 공개 키를 받아서 값을 암호화한 다음 전송하고, 변수는 이름과 일반 값만 보내면 됩니다.
[600ms]
[serious] 로그에서는 비밀이 가려지지만, 마스킹이 보장되는 것은 아니니 절대 출력하지 마세요.

## Step 11 · Usage and cost

[curious] 러너 유형마다 계산 방식이 다르니, 무엇이 무료이고 무엇이 청구되는지 알아 두세요.
[600ms]
[confident] 표준 러너는 퍼블릭 저장소에서 무료이고, 프라이빗 저장소에서는 포함된 사용량에서 차감되며, 더 큰 러너는 분 단위로 청구됩니다.
[600ms]
[reflective] 사용량은 저장소 소유자에게 청구됩니다. 셀프 호스팅 러너는 Actions에서 쓰는 데 비용이 들지 않지만, 머신을 운영하는 비용은 직접 내야 합니다.

## Step 12 · Recap: an Actions governance checklist

[calm] Actions가 회사 전체로 퍼지기 전에 확인할 항목이 여섯 가지 있고, 항목마다 찾아볼 수 있는 설정이 있습니다.
[600ms]
[confident] 러너, 그룹, 네트워킹, 정책, 비밀과 변수, 사용량입니다. 이제 각각 어디서 설정하는지 알고 계십니다.
[600ms]
[reassuring] 어떤 옵션이 보이는지는 GitHub 플랜에 따라 다르고, 엔터프라이즈 정책이 조직 설정보다 우선할 수 있습니다.
