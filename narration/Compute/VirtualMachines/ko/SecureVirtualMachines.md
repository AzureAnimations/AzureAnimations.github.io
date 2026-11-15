# Narrator Script — Virtual Machines · Secure a virtual machine: encryption, JIT, Trusted launch and Defender for Servers

**Source animation:** [SecureVirtualMachines.html](../../../../journeys/Compute/VirtualMachines/SecureVirtualMachines.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/defender-for-cloud/just-in-time-access-overview>
- <https://learn.microsoft.com/azure/virtual-machines/disk-encryption-overview>
- <https://learn.microsoft.com/azure/virtual-machines/trusted-launch>
- <https://learn.microsoft.com/azure/virtual-machines/boot-integrity-monitoring-overview>

---

## Step 1 · A VM with the defaults

[calm] Contoso의 새 매장용 VM은 편의를 우선해서 만들었습니다. 공용 IP 주소가 있고, RDP와 SSH가 어디서든 허용되고, 아무도 지켜보지 않았습니다.
[600ms]
[concerned] 포털의 기본값은 조금씩 다르니, 여러분의 VM이 무엇을 노출하는지 직접 확인해 보세요.
[600ms]
[serious] 중요한 건 공격자가 어디까지 닿을 수 있느냐인데, 여기서는 정말 많은 곳에 닿습니다.

## Step 2 · Don’t leave RDP and SSH open

[serious] 위협 행위자는 관리 포트가 열려 있는 머신을 적극적으로 찾아다닙니다.
[600ms]
[concerned] VM 하나가 침해되면, 그 VM이 닿을 수 있는 모든 곳으로 들어가는 입구가 됩니다.
[600ms]
[confident] 하지만 관리자에게는 RDP와 SSH가 필요하니 포트를 없앨 수는 없습니다. 평소에는 닫아 두고, 필요할 때만 최대한 짧게 여세요.

## Step 3 · Just-in-time access

[calm] Just-in-time 액세스는 관리 포트를 닫아 둡니다.
[600ms]
[confident] 관리자는 자기 IP 주소와 짧은 시간대를 지정해서 포트를 요청합니다. Defender for Cloud가 관리자의 Azure RBAC 권한을 확인한 다음, 그 시간 동안 해당 원본 주소에 대해서만 포트를 엽니다.
[600ms]
[reassuring] 시간이 끝나면 규칙이 원래대로 돌아가고, 이미 연결된 세션은 끊기지 않습니다. 이 기능은 Defender for Servers Plan 2에 포함되어 있습니다.

## Step 4 · Bastion or JIT?

[curious] 둘 다 RDP와 SSH를 인터넷에 열어 두지 않게 해 주지만, 방식이 다릅니다. 시나리오를 하나 골라서 어느 쪽이 맞는지 확인해 보세요.
[600ms]
[confident] Bastion은 443번 포트에서 TLS로 RDP와 SSH를 제공하고, 프라이빗 IP로 VM에 연결합니다. 그래서 VM에 공용 IP가 필요 없습니다.
[600ms]
[reflective] JIT는 네트워크 보안 그룹을 닫아 두었다가, 정해진 시간 동안 주소 하나에 대해서만 포트를 엽니다. Defender for Servers Plan 2가 필요합니다.

## Step 5 · Disk encryption

[calm] 관리형 디스크는 항상 저장 시 암호화되지만, 임시 디스크와 캐시는 여기에 포함되지 않습니다.
[600ms]
[confident] 호스트 암호화를 쓰면 이 부분까지 암호화되고, 스토리지로 전송되는 데이터도 암호화됩니다. Azure Disk Encryption은 VM 안에서 BitLocker나 DM-Crypt로 동작합니다.
[600ms]
[serious] Azure Disk Encryption은 사용 중단이 예정되어 있어서, Learn에서는 새 VM에 호스트 암호화를 권장합니다. 자체 키를 쓰면 직접 통제할 수 있습니다.

## Step 6 · Security type

[curious] VM을 만들 때 보안 유형을 선택합니다. 이 유형이 운영 체제가 시작되기도 전에 VM을 무엇으로 보호할지 정합니다.
[600ms]
[confident] Trusted Launch는 2세대 VM용이고, 새 VM의 기본값입니다. 기밀 VM은 VM 둘레에 하드웨어로 강제하는 경계를 하나 더합니다.
[600ms]
[concerned] Standard 유형에는 이런 부팅 보호가 하나도 없어서, 가장 약한 선택입니다.

## Step 7 · Secure Boot and vTPM

[calm] Secure Boot는 서명된 부팅 코드만 실행되게 합니다. 부트 로더와 커널, 드라이버는 신뢰할 수 있는 게시자가 서명해야 하고, 그렇지 않으면 VM이 부팅되지 않습니다.
[600ms]
[confident] vTPM은 가상 TPM 2.0입니다. 무엇이 실행됐는지 기록해 두니까, 나중에 부팅 과정을 증명할 수 있습니다.
[600ms]
[impressed] 그래서 키와 측정값이 어떤 VM도 닿을 수 없는 곳에 보관됩니다. 이것이 루트킷에 대한 방어책입니다.

## Step 8 · Integrity monitoring

[calm] 무결성 모니터링을 켜면 Guest Attestation 확장이 부팅할 때마다 Azure에 부팅이 정상임을 증명합니다.
[600ms]
[confident] 증명에 실패하면 Defender for Cloud가 경고를 보냅니다. 포털에서 보안 유형 설정의 무결성 모니터링을 선택하면 확장이 설치됩니다.
[600ms]
[serious] 이 기능은 Secure Boot와 vTPM을 켠 Trusted Launch VM이 필요합니다. Secure Boot를 끄면 증명에 실패합니다.

## Step 9 · Defender for Servers

[calm] Defender for Servers는 Defender for Cloud에서 Windows와 Linux 머신을 보호합니다. 구독에 대해 켠 다음, 플랜을 고르세요.
[600ms]
[confident] Plan 1은 기본 단계로, 엔드포인트 탐지 및 대응이 중심입니다. Plan 2는 Plan 1을 포함하고, 에이전트 없는 검사와 JIT, 파일 무결성 모니터링을 더합니다.
[600ms]
[reflective] Microsoft는 구독 수준에서 켜기를 권장하고, 토글을 켜면 기본으로 Plan 2가 켜집니다. 가격은 Defender for Cloud 가격 페이지에서 확인하세요.

## Step 10 · Vulnerability scanning and EDR

[curious] Defender for Endpoint 센서는 VM이 실행되는 동안 상태를 봅니다. 에이전트 없는 검사는 디스크의 복사본을 읽기 때문에 아무것도 설치할 필요가 없습니다.
[600ms]
[confident] 에이전트 기반 검사와 EDR은 두 플랜 모두에 들어 있습니다. 에이전트 없는 검사는 Plan 2에 있고, 맬웨어 검사는 Plan 2에만 있습니다.
[600ms]
[reassuring] 스냅샷은 VM이 있는 리전 안에만 있고, 메타데이터를 읽고 나면 삭제됩니다.

## Step 11 · Azure Machine Configuration

[calm] Machine Configuration은 운영 체제 안의 설정을 요구하는 상태와 비교해서 확인하고, 설정이 어긋나면 원래대로 되돌릴 수도 있습니다.
[600ms]
[confident] 이 기능은 Azure Policy의 일부입니다. Azure VM에는 Machine Configuration 확장과 시스템 할당 관리 ID가 있어야 합니다.
[600ms]
[curious] 할당마다 모드가 있습니다. Audit, Apply and Monitor, 또는 Apply and Autocorrect입니다.

## Step 12 · Arc-enabled servers, and the recap

[calm] Azure Arc를 쓰면 Azure 밖에 있는 서버도 Azure에서 관리할 수 있습니다. Connected Machine 에이전트를 설치하면 서버가 Azure 리소스가 됩니다.
[600ms]
[confident] 그러면 Defender for Servers, Azure Policy, Machine Configuration도 그 서버에 적용할 수 있습니다.
[600ms]
[proud] Trusted Launch나 호스트 암호화 같은 VM 기능은 Azure VM에서만 쓸 수 있습니다. 포트를 닫고, 부팅을 보호하고, 디스크를 암호화하고, 계속 지켜보세요.
