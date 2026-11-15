# Narrator Script - 데이터를 보관하는 디스크

**Source animation:** journeys/Compute/VirtualMachines/VirtualMachineDisks.html

**Script status:** Authored voiceover.

Delivery cues appear in brackets; pauses are on separate lines.

## Step 1 · The catalogue outgrows its disk

[curious] 상점이 성장하면서 상품 사진도 계속 늘어납니다.
[600ms]
[serious] 사진들이 운영 체제가 설치된 디스크를 채우고 있습니다. 이런 데이터에는 별도의 데이터 디스크를 마련하는 편이 좋습니다.
[600ms]
[calm] 중복성도 잘못된 쓰기를 되돌려 주지는 못합니다. 나중에 취소하고 싶은 변경까지 충실하게 복제하기 때문입니다.

## Step 2 · Three disks, three jobs

[calm] 가상 머신에는 세 종류의 디스크가 있을 수 있습니다. 역할을 혼동하기 쉽습니다.
[600ms]
[confident] 운영 체제 디스크는 부팅용입니다. 데이터 디스크는 파일과 상품 목록을 저장합니다. 임시 디스크는 작업용 공간입니다.
[600ms]
[serious] 임시는 영구 저장소가 아닙니다. 유지 관리, 재배포, 중지 등으로 데이터가 사라질 수 있으므로 잃어도 되는 것만 보관하세요.

## Step 3 · Match the disk to the work

[curious] 관리 디스크는 여러 종류가 있으며 속도와 비용 차이가 있습니다.
[600ms]
[confident] Standard HDD부터 Ultra Disk까지 초당 작업 수, 처리량, 가격이 달라집니다.
[600ms]
[serious] 성능은 디스크 종류와 크기의 영향을 받으며, 가상 머신 크기가 제공하는 한도도 넘을 수 없습니다.

## Step 4 · Grow it, never shrink it

[calm] 처음 선택한 용량이 영구적으로 고정되는 것은 아닙니다. 컨트롤을 조작해 용량 변화를 확인해 보세요.
[600ms]
[confident] 관리 디스크는 측정 결과에 따라 확장할 수 있으므로 처음부터 너무 크게 잡을 필요가 없습니다.
[600ms]
[serious] 다만 줄일 수는 없습니다. 확장한 뒤에는 새 공간을 사용하도록 게스트 내부의 파일 시스템도 확장해야 합니다.

## Step 5 · Freeze a point in time

[calm] 위험한 변경 전에는 스냅샷을 만드세요.
[600ms]
[confident] 스냅샷은 해당 시점의 디스크 복사본을 보존하므로 업그레이드나 스키마 변경에 대비할 수 있습니다.
[600ms]
[serious] 이것은 요청한 시점의 디스크 하나를 복사한 것입니다. 정기 백업이나 복원 계획을 대신하지는 않습니다. 그 부분은 다음 레슨에서 다룹니다.

## Step 6 · Encrypt at the host

[calm] 저장된 데이터는 암호화해야 합니다. 호스트에서 보호하는 방법이 있습니다.
[600ms]
[confident] 호스트 암호화는 운영 체제 디스크, 데이터 디스크, 임시 디스크와 호스트 캐시를 보호합니다.
[600ms]
[reassuring] 처리가 게스트 내부가 아닌 호스트에서 이루어지므로 상점의 가상 머신 프로세서를 사용하지 않습니다.

## Step 7 · VM Disks - All in One

[reflective] Contoso 데이터의 속도와 안전성은 다섯 가지 결정에 달려 있습니다.
[600ms]
[confident] 각 디스크의 역할, 종류, 확장 여유, 위험한 변경 전의 스냅샷, 그리고 전체를 보호하는 암호화입니다.
[600ms]
[determined] 업무에 맞는 스토리지는 눈에 띄지 않게 제 역할을 합니다. 바로 그것이 목표입니다.
