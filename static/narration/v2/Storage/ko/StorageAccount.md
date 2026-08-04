# 내레이션 대본 — Azure Storage · 저장하세요(스토리지 계정)

**Source animation:** `static/v2/Storage/StorageAccount.html`

---

## Step 1 · Overview

[warm] Azure Storage의 기초인 스토리지 계정부터 시작해 보겠습니다.
[600ms]
[calm] 이것을 Contoso의 모든 클라우드 데이터 —blob, 파일, 큐, 테이블— 를 단일 네임스페이스와 단일 청구서 아래 담는, 내구성 있는 하나의 집이라고 생각하세요.
[600ms]
[confident] 모든 것은 contoso 닷 blob 닷 core 닷 windows 닷 net 같은 하나의 계정 엔드포인트 뒤에 있습니다. 하나의 계정, 하나의 청구서, 여러 서비스 —성능 계층을 한 번 선택한 다음, 워크로드가 필요로 하는 것을 저장하세요.

## Step 2 · Standard vs Premium

[confident] 먼저 계정이 얼마나 빨라야 하는지 선택하세요.
[600ms]
[calm] Standard는 하드 디스크에서 실행되며, 모든 서비스와 모든 액세스 계층을 지원하는 비용 효율적인 범용 스토리지입니다. Premium은 솔리드 스테이트 드라이브에서 실행되어, 앱이 요구할 때 한 자릿수 밀리초의 지연 시간을 제공합니다.
[600ms]
[reassuring] Premium은 전용 계정 —block blob, page blob 또는 파일 공유— 으로 제공되며, 원시 용량이 아니라 지연 시간을 위해 선택합니다. 그러니 규칙은 간단합니다. 속도는 Premium, 비용은 Standard.

## Step 3 · Four Data Services

[confident] Standard 계정은 데이터를 저장하는 네 가지 방법을 제공합니다. 작업에 맞는 형태를 선택하세요.
[600ms]
[calm] Blob은 이미지, 비디오, 백업, 문서 같은 대용량 비정형 데이터의 주력입니다. Files는 관리형 S-M-B 및 N-F-S 파일 공유를 제공합니다. Queue는 앱 구성 요소 간에 작은 비동기 메시지를 전달합니다. 그리고 Table은 스키마 없는 NoSQL 키-값 저장소입니다.
[600ms]
[impressed] 하나의 계정, 네 가지 서비스 —대부분의 워크로드는 Blob에 의존하고, 나머지 셋이 공유, 메시징, NoSQL을 담당합니다.

## Step 4 · Three Kinds of Blob

[intrigued] Blob 스토리지 자체는 세 가지 유형이 있으며, 각각 다른 쓰기 패턴에 맞게 조정되어 있습니다.
[600ms]
[calm] block blob은 텍스트와 이진 데이터를 담으며, 단연 가장 일반적입니다. append blob은 끝에 추가하는 데 최적화되어 있어 로그에 안성맞춤입니다. 그리고 page blob은 임의 읽기와 쓰기를 지원하므로 Azure 가상 머신 디스크를 뒷받침합니다.
[600ms]
[reassuring] 경험칙은 이렇습니다. 파일이나 이미지를 업로드하나요? Block. 로그 줄을 스트리밍하나요? Append. 가상 디스크를 뒷받침하나요? Page.

## Step 5 · Access Tiers

[confident] block blob의 경우, 액세스 계층은 스토리지 비용을 읽기 비용 및 최소 보존 기간과 맞바꿉니다.
[600ms]
[calm] Hot은 자주 액세스하는 데이터용으로 최소 기간이 없습니다. Cool은 자주 액세스하지 않는 데이터로 최소 삼십 일입니다. Cold는 거의 액세스하지 않는 데이터로 최소 구십 일입니다. 그리고 Archive는 오프라인이며 가장 저렴합니다 —최소 백팔십 일이며, 읽으려면 리하이드레이션해야 합니다.
[600ms]
[reassuring] 더 차가운 계층은 저장은 더 싸지만 읽기는 더 비싸고 느리며, 일찍 삭제하면 요금이 부과됩니다. 아니면 새로운 Smart 계층이 실제 사용량에 따라 관리할 수명 주기 규칙 없이 Hot, Cool, Cold 사이에서 데이터를 자동으로 이동하도록 두세요.

## Step 6 · Recap

[warm] 자, 스토리지 계정 전체를 한 화면에서 살펴봤습니다.
[600ms]
[calm] 성능은 Standard 또는 Premium. 네 가지 서비스는 Blob, File, Queue, Table. 세 가지 blob 유형은 Block, Append, Page. 그리고 다섯 가지 액세스 계층, Hot부터 Archive까지, 여기에 Smart.
[600ms]
[encouraging] 항상 워크로드에서 시작하세요. 얼마나 빠르게, 어떤 형태의 데이터를, 얼마나 자주 읽을지 —그러면 청구서가 따라옵니다. 무료 Microsoft Learn 경로 'Azure에 데이터 저장'에서 더 깊이 알아보세요.
