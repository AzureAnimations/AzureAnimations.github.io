# Narrator Script - 백업하고 복원을 증명하기

**Source animation:** journeys/Compute/VirtualMachines/VirtualMachineBackup.html

**Script status:** Authored voiceover.

Delivery cues appear in brackets; pauses are on separate lines.

## Step 1 · Someone deletes the orders folder

[serious] 평범한 화요일에 누군가 주문 폴더를 삭제했습니다.
[600ms]
[calm] 스토리지 중복성은 설계대로 작동했습니다. 삭제도 다른 복제본에 충실하게 반영됩니다.
[600ms]
[confident] 중복성은 하드웨어 장애에 대비합니다. 이런 작업 실수에서 복구하려면 백업이 필요하며, 백업 구성은 별도의 결정입니다.

## Step 2 · Create the vault

[calm] 그래서 Contoso는 복구 지점을 안전하게 보관할 장소부터 마련합니다.
[600ms]
[confident] Recovery Services 자격 증명 모음은 가상 머신 외부에서 복구 지점과 이를 관리하는 규칙을 보관합니다.
[600ms]
[reassuring] 머신과 분리되어 있으므로 가상 머신을 삭제하는 것만으로 그 안의 복구 지점까지 삭제되지는 않습니다.

## Step 3 · Write the policy

[curious] 얼마나 자주 만들고, 얼마나 오래 보관할까요?
[800ms]
[confident] 백업 정책이 두 가지를 모두 정합니다. 일정은 백업 실행 시점을, 보존 기간은 각 복구 지점을 얼마나 오래 남길지 결정합니다.
[600ms]
[serious] 보존 기간은 비용과 복구 요구 사이의 균형입니다. 업무상 실제로 복구해야 하는 범위를 정하고 그 이유도 설명할 수 있어야 합니다.

## Step 4 · One run, two phases

[calm] 백업은 한순간에 끝나는 작업이 아닙니다.
[600ms]
[confident] Azure는 먼저 스냅샷을 만든 다음 데이터를 자격 증명 모음으로 전송합니다. 보통 전송 단계에 시간이 더 걸립니다.
[600ms]
[reassuring] 그래서 머신 쪽 작업이 끝난 것처럼 보여도 저장소로의 전송은 계속될 수 있습니다. 두 단계 모두 중요하며 완료 시점은 다릅니다.

## Step 5 · Restore only what you need

[curious] 문제가 생겼다면 어느 범위까지 되돌려야 할까요? 옵션을 바꿔 보며 확인하세요.
[600ms]
[confident] 머신 전체를 복원하거나, 디스크를 복구해 교체하거나, 복구 지점을 탑재해 파일 하나를 가져올 수 있습니다.
[600ms]
[determined] 피해 범위에 맞춰 복원하세요. 폴더 하나가 지워졌다고 상점 전체를 다시 만들 필요는 없습니다.

## Step 6 · Deleting a backup is a separate risk

[serious] 이번에는 백업 자체가 공격받거나 삭제되는 상황을 생각해 보세요.
[600ms]
[confident] 일시 삭제는 삭제된 백업 데이터를 일정 기간 보존합니다. 실수나 악의적인 삭제를 되돌릴 기회를 주는 것입니다.
[600ms]
[calm] 이미 만들어 둔 백업을 보호하는 기능입니다. 처음부터 백업하지 않은 머신을 복구해 주지는 못합니다.

## Step 7 · VM Backup - All in One

[reflective] 네 가지 준비가 큰 사고를 수습하는 데 도움이 됩니다.
[600ms]
[confident] 머신과 분리된 자격 증명 모음, 업무에 맞는 정책, 실제 존재를 확인한 복구 지점, 그리고 연습해 본 복원 절차입니다.
[600ms]
[proud] 특히 중요한 것은 복원 연습입니다. 시험하지 않은 백업은 아직 계획이 아니라 기대에 가깝습니다.
