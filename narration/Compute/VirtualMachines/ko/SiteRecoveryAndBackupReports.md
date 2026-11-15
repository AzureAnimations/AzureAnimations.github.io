# Narrator Script — Virtual Machines · Site Recovery and Backup Reports

**Source animation:** [SiteRecoveryAndBackupReports.html](../../../../journeys/Compute/VirtualMachines/SiteRecoveryAndBackupReports.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/site-recovery/azure-to-azure-architecture>
- <https://learn.microsoft.com/azure/site-recovery/azure-to-azure-tutorial-failover-failback>
- <https://learn.microsoft.com/azure/site-recovery/site-recovery-overview>

---

## Step 1 · A region goes down

[calm] Contoso의 매장 VM은 Azure 리전 한 곳에서 실행됩니다. 이제 그 리전 전체에 장애가 났다고 상상해 보세요.
[600ms]
[concerned] VM은 어디서, 얼마나 빨리 다시 올라올까요?
[600ms]
[confident] Site Recovery로 Azure 간 재해 복구를 따라가 보고, 이어서 Azure Backup의 보고서와 경고도 살펴보겠습니다. 여기 나오는 내용은 모두 가상이고, A Z 104와 A Z 305에 맞춘 내용입니다.

## Step 2 · Set up the recovery

[calm] 시작은 Recovery Services 자격 증명 모음입니다. 원본 리전과 대상 리전, 대상 리소스 그룹과 네트워크, 복제 정책을 선택합니다.
[600ms]
[curious] Site Recovery가 대상 리소스 그룹과 가상 네트워크를 대신 만들어 줄 수도 있고, 직접 고를 수도 있습니다.
[600ms]
[confident] 자격 증명 모음은 원본 리전을 뺀 어느 리전에든 만들 수 있습니다.

## Step 3 · Replicate every write

[calm] 복제를 켜면 Mobility 서비스 확장이 VM에 자동으로 설치됩니다.
[600ms]
[curious] 이 확장은 디스크에 쓰는 내용을 하나하나 캐시 스토리지 계정으로 보내고, 거기서 대상 리전의 복제본 관리 디스크로 보냅니다. 캐시 덕분에 복제가 프로덕션 VM을 느리게 만들지 않습니다.
[600ms]
[reassuring] Site Recovery는 VM에서 나가는 아웃바운드 연결만 있으면 되고, 인바운드는 전혀 필요하지 않습니다.

## Step 4 · Recovery points

[calm] 스냅샷이 복구 지점이 됩니다. 기본은 충돌 일관성 지점입니다.
[600ms]
[curious] 충돌 일관성 지점에는 전원 코드를 뽑았을 때처럼 디스크에 있던 내용이 담깁니다. 앱 일관성 지점은 메모리와 진행 중인 트랜잭션까지 캡처하고, 복제 정책에 빈도를 지정해야 합니다.
[600ms]
[confident] 보존 기간도 같은 정책에서 설정합니다.

## Step 5 · Recovery plans

[calm] 복구 계획은 VM을 그룹으로 나눕니다. 그룹은 순서대로 시작하고, 한 그룹 안의 VM은 함께 시작합니다.
[600ms]
[curious] 그룹 사이에는 스크립트, 즉 Azure Automation 런북을 실행하거나, 누군가 확인할 때까지 계획을 멈추는 수동 작업을 넣을 수 있습니다.
[600ms]
[confident] 계획 하나로 테스트 페일오버, 페일오버, 페일백을 모두 실행할 수 있습니다.

## Step 6 · Test failover: the safe drill

[calm] 테스트 페일오버는 안전한 훈련입니다. 격리된 테스트 네트워크에 VM의 복사본을 만듭니다.
[600ms]
[reassuring] 프로덕션은 계속 실행되고 복제도 계속되니, 프로덕션에는 아무 영향이 없습니다. 훈련에는 프로덕션이 아닌 네트워크를 쓰세요.
[600ms]
[confident] 확인이 끝나면 Cleanup test failover를 선택해서 테스트 VM을 삭제하세요.

## Step 7 · Failover and commit

[serious] 실제 장애에서는 페일오버가 선택한 복구 지점으로 대상 리소스 그룹과 네트워크에 VM을 만듭니다.
[600ms]
[curious] 커밋하기 전까지는 Change recovery point를 선택해서 복구 지점을 바꿀 수 있습니다.
[600ms]
[confident] 커밋하면 작업이 끝납니다. Site Recovery에서 그 VM의 복구 지점이 모두 삭제되니, 더 이상 마음을 바꿀 수 없습니다.

## Step 8 · Reprotect and fail back

[calm] 커밋한 다음에는 VM을 다시 보호해서, 원래 리전 방향으로 복제되게 합니다.
[600ms]
[curious] 주 리전이 다시 정상이 되면 페일백합니다. 변경 내용이 원래 디스크에 동기화되도록, 원본 VM은 종료되어 있어야 합니다.
[600ms]
[confident] 그다음 다시 한번 재보호합니다. 관리형 디스크라면 Site Recovery가 보조 리전의 VM을 정리해 줍니다.

## Step 9 · Run a failover drill

[curious] 이제 직접 해 보세요. 페일오버 유형을 하나 고르고 어떤 단계가 바뀌는지 지켜보세요.
[600ms]
[confident] 선택에 따라 데이터 손실인 RPO와, 복구 시간인 RTO가 어떻게 달라지는지 눈여겨보세요.
[600ms]
[reassuring] 포털에서 Azure VM은 Test failover와 Failover를 제공합니다. 먼저 머신을 종료하고 실행하면 계획된 페일오버가 됩니다.

## Step 10 · Backup or Site Recovery?

[curious] 백업이 필요한지 Site Recovery가 필요한지 묻는 분이 많습니다. 두 가지는 서로 다른 종류의 장애에 대한 해법입니다.
[600ms]
[confident] Backup은 과거의 복사본을 복원합니다. Site Recovery는 VM을 다른 곳에서 실행하니, 장애가 나도 워크로드가 계속 돌아갑니다.
[600ms]
[reassuring] 둘 다 비즈니스 연속성 및 재해 복구 전략에 속해서, 대부분의 설계에서는 둘 다 사용합니다.

## Step 11 · Where reports come from

[calm] 백업 보고서는 Azure Monitor 로그를 바탕으로 만들어집니다. 자격 증명 모음의 진단 데이터를 Log Analytics 워크스페이스로 보내면, 통합 문서가 그 데이터를 보고서로 바꿔 줍니다.
[600ms]
[curious] 워크스페이스는 다른 구독이나 다른 위치에 있어도 됩니다. 그리고 기본 제공 Azure Policy로 여러 자격 증명 모음의 진단 설정을 한꺼번에 구성할 수 있습니다.
[600ms]
[serious] 워크스페이스는 기본적으로 데이터를 일정 기간만 보관하니, 장기 추세를 보고 싶다면 보존 기간을 늘리세요.

## Step 12 · Reading the report

[calm] 보고서는 작업과 인스턴스, 사용량, 정책, 정책 준수, 최적화를 다룹니다. 여기 나오는 숫자는 가상입니다.
[600ms]
[curious] 먼저 빨간색으로 표시됐거나 빠져 있는 곳을 찾고, 거기서 자세히 파고들어 보세요.
[600ms]
[confident] 바로 쓸 수 있는 보고서도 있습니다. Backup Job History나 Backup Configuration Status 같은 보고서입니다. Site Recovery에는 Job History와 Replication History 보고서가 있습니다.

## Step 13 · Backup alerts

[calm] Azure Backup은 중요한 이벤트에 대해 기본 제공 Azure Monitor 경고를 발생시키고, 이 경고는 기본으로 켜져 있습니다.
[600ms]
[serious] 백업 실패, 복원 실패, 백업 데이터 삭제, 일시 삭제 비활성화 같은 것들입니다.
[600ms]
[confident] 경고는 Resiliency에서 볼 수 있습니다. 여러분이 정할 것은 누구에게 알릴지입니다. 경고 처리 규칙과 작업 그룹을 쓰면 이메일, 웹후크, 논리 앱, 런북으로 보낼 수 있습니다.

## Step 14 · All in one

[calm] 전체 흐름은 이렇습니다. 복제하고, 계획하고, 테스트하고, 페일오버하고, 재보호합니다. 그다음 보고서와 경고를 설정해서 백업이 정상인지 알 수 있게 합니다.
[600ms]
[confident] A Z 104에서는 Site Recovery 구성, 보조 리전으로의 페일오버, 백업 보고서와 경고 해석을 다룹니다. A Z 305에서는 백업과 재해 복구 설계를 다룹니다.
[600ms]
[proud] 시험에서 측정하는 기술은 바뀌니, 최신 학습 가이드와 대조해서 직접 점검하세요.
