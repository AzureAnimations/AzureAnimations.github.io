# 내레이션 대본 — Azure Storage · 저장하세요(스토리지 계정)

**Source animation:** `static/v2/Storage/StorageAccount.html`

---

**TTS status:** Audio regenerated 2026-09-17 after text review.

<!-- Review sources: https://learn.microsoft.com/azure/storage/common/storage-account-overview ; https://learn.microsoft.com/azure/storage/blobs/access-tiers-overview ; https://learn.microsoft.com/azure/storage/blobs/access-tiers-smart -->

## Step 1 · Overview

[warm] Azure Storage의 기초인 스토리지 계정부터 시작해 보겠습니다.
[600ms]
[calm] 스토리지 계정은 Contoso의 저장 데이터에 고유한 네임스페이스를 제공합니다. Standard 범용 버전 이 계정에는 blob, 파일, 큐, 테이블을 저장할 수 있습니다.
[600ms]
[confident] 엔드포인트는 서비스마다 다릅니다. 예를 들어 콘토소 점 블롭 점 코어 점 윈도우즈 점 넷은 Blob용 주소이지, 모든 서비스의 공통 주소가 아닙니다. 워크로드에 필요한 기능을 지원하는 계정 유형을 선택하세요.

## Step 2 · Standard vs Premium

[confident] 먼저 필요한 성능과 지원되는 서비스를 비교하세요.
[600ms]
[calm] Standard 범용 버전 이 계정은 여러 용도에서 우선 검토할 수 있습니다. Premium은 SSD를 사용하며, 일관되게 짧은 지연 시간이나 높은 트랜잭션 처리량이 필요한 워크로드에 적합합니다.
[600ms]
[reassuring] Premium 계정은 블록 blob, 페이지 blob 또는 파일 공유에 특화되어 있습니다. 네 가지 서비스를 모두 제공하는 계정은 아닙니다. 속도뿐 아니라 기능과 비용도 함께 비교하세요.

## Step 3 · Four Data Services

[confident] Azure Storage는 데이터 유형에 맞춰 선택할 수 있는 네 가지 서비스를 제공합니다.
[600ms]
[calm] Blob은 이미지, 동영상, 백업, 문서를 저장합니다. Files는 관리형 파일 공유를 제공하며, N-F-S 공유에는 SSD 스토리지가 필요합니다. Queue는 앱 구성 요소 간에 비동기 메시지를 전달합니다. Table은 고정 스키마 없이 구조화된 NoSQL 데이터를 저장합니다.
[600ms]
[impressed] 데이터에 맞는 서비스를 고른 뒤, 해당 계정 유형에서 필요한 기능을 사용할 수 있는지 확인하세요.

## Step 4 · Three Kinds of Blob

[intrigued] Blob 스토리지 자체는 세 가지 유형이 있으며, 각각 다른 쓰기 패턴에 맞게 조정되어 있습니다.
[600ms]
[calm] block blob은 텍스트와 이진 데이터를 담으며, 단연 가장 일반적입니다. append blob은 끝에 추가하는 데 최적화되어 있어 로그에 안성맞춤입니다. 그리고 page blob은 임의 읽기와 쓰기를 지원하므로 Azure 가상 머신 디스크를 뒷받침합니다.
[600ms]
[reassuring] 경험칙은 이렇습니다. 파일이나 이미지를 업로드하나요? Block. 로그 줄을 스트리밍하나요? Append. 가상 디스크를 뒷받침하나요? Page.

## Step 5 · Access Tiers

[confident] 블록 blob의 액세스 계층은 저장 비용과 검색 비용을 조절하는 선택지입니다. 최소 기간은 요금 계산 기준이며, 그동안 삭제할 수 없다는 뜻은 아닙니다.
[600ms]
[calm] Standard 범용 버전 이 계정에서 Hot에는 최소 기간 요금이 없습니다. Cool은 삼십 일, Cold는 구십 일, Archive는 백팔십 일입니다. Hot, Cool, Cold는 온라인 상태로 밀리초 단위의 액세스를 제공합니다. Archive는 읽기 전에 리하이드레이션이 필요하며, 몇 시간이 걸릴 수 있습니다.
[600ms]
[reassuring] 최소 기간 전에 삭제하거나 계층을 바꾸면 요금이 발생할 수 있습니다. 지원되는 영역 중복 계정에서는 Smart가 대상 블록 blob을 Hot, Cool, Cold 사이에서 자동으로 관리하므로 계층 이동 규칙이 필요 없습니다. Archive는 사용하지 않으며, 요금 체계도 다릅니다.

## Step 6 · Recap

[warm] 자, 스토리지 계정 전체를 한 화면에서 살펴봤습니다.
[600ms]
[calm] 성능은 Standard 또는 Premium. 네 가지 서비스는 Blob, File, Queue, Table. 세 가지 blob 유형은 Block, Append, Page. 그리고 다섯 가지 액세스 계층, Hot부터 Archive까지, 여기에 Smart.
[600ms]
[encouraging] 필요한 성능, 데이터 유형, 액세스 빈도부터 살펴보세요. 이 선택에 따라 사용할 수 있는 기능과 비용이 달라집니다. 무료 Microsoft Learn 학습 경로 'Azure에 데이터 저장'에서 더 알아보세요.
