# Narrator Script - ID 관리

**Source animation:** journeys/Identity/IdentityAdministration.html

Delivery cues appear in brackets; pauses are on separate lines.
Generated from scripts/_identity-journeys/administration.mjs.

## Step 1 · Three requests. Different responsibilities.

[calm] 세 요청, 서로 다른 책임.
[600ms]
Maya에게 계정 지원이 필요합니다. Contoso는 헬프데스크 암호 재설정, 라이선스 할당, 인증 방법 관리를 구분해야 합니다.
[600ms]
[serious] Maya에게 특권 역할이나 역할 할당 가능 그룹 멤버 자격이 없습니다. 운영자와 지원 대상 사용자는 다른 사람입니다.

## Step 2 · Delegate the task, not the whole directory

[calm] 전체 디렉터리 대신 작업 위임.
[600ms]
최소 권한 역할은 작업에 따라 다릅니다. 권한 있는 관리자가 운영자에게 역할을 할당합니다. 여기서 작업을 선택해도 할당된 역할은 바뀌지 않습니다.
[600ms]
[serious] 할당 범위에 Maya가 포함된다고 가정합니다. Authentication Administrator도 암호를 재설정할 수 있으나 Password Administrator가 더 제한적입니다. Azure Reader는 해당 작업을 허용하지 않습니다.

## Step 3 · A license is an assignment with a result

[calm] 라이선스 할당 결과 확인.
[600ms]
이 예제는 Maya에게 Microsoft 365 Business Standard를 할당합니다. 여유 라이선스나 운영자 권한이 없으면 실패하며, 용량만 확보해도 할당되지는 않습니다.
[600ms]
[serious] 유효한 사용 위치와 서비스 충돌 없음을 가정합니다. 오류는 확인 후 재시도해야 합니다. 라이선스는 Azure 리소스 역할을 할당하지 않습니다.

## Step 4 · Register before recovery is needed

[calm] 복구가 필요하기 전에 등록.
[600ms]
Maya는 클라우드 전용 일반 사용자입니다. 이 예제에서 Contoso는 전자 메일과 휴대폰을 사용 설정하고 SSPR에 두 등록 방법을 요구합니다.
[600ms]
[serious] 두 방법은 Contoso 예제 정책이며 보편적 기본값이 아닙니다. 등록은 복구 정보 저장이며 향후 재설정 완료가 아닙니다.

## Step 5 · Verify, then reset

[calm] 확인한 후 재설정.
[600ms]
라이선스와 SSPR 대상 범위만으로는 충분하지 않습니다. 방법 등록과 본인 확인을 마친 뒤 정책에 맞는 새 암호를 선택할 수 있습니다. 여기서는 암호를 수집하지 않습니다.
[600ms]
[serious] Business Standard는 클라우드 전용 SSPR을 지원합니다. 하이브리드 쓰기 저장에는 P1/P2 또는 Business Premium과 구성 및 사전 요구 사항이 필요합니다. Entra Free의 암호 변경은 분실 암호 재설정과 다릅니다.

## Step 6 · Support without blanket administration

[calm] 광범위한 관리 권한 없이 지원.
[600ms]
디렉터리 역할은 운영자의 작업을 허용하고 라이선스는 서비스를 제공합니다. 등록은 복구 준비이며 확인은 재설정 시 소유를 증명합니다. 각각 다른 책임입니다.
[600ms]
[serious] 유효한 클라우드 전용 계정과 정책에 맞는 새 암호를 가정합니다. 실제 역할, 라이선스, 확인 메시지 또는 암호는 변경하지 않습니다.
