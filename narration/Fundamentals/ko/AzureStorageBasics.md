# 내레이션 대본 - Azure Storage 기본 사항

**Source animation:** journeys/Fundamentals/AzureStorageBasics.html
**Script status:** Authored voiceover.
**Language:** 한국어

대괄호 안의 내용은 읽지 않는 연출 지시입니다. 쉼 표시는 별도 줄에 둡니다. 각 블록은 애니메이션 한 단계에 대응합니다.
<!-- Sources: https://learn.microsoft.com/training/modules/describe-azure-storage-services/ ; https://learn.microsoft.com/azure/storage/blobs/access-tiers-overview ; https://learn.microsoft.com/azure/storage/common/storage-redundancy -->

## Step 1 · Where should the data live?

[calm] 매장에는 상품 사진, 창고의 공유 문서, 처리를 기다리는 주문 관련 작업이 있습니다. 모두 데이터지만, Contoso는 서로 다른 방식으로 사용합니다.
[600ms]
[confident] 스토리지는 접근 방식부터 살펴보고 고릅니다. 이미지에 적합한 저장소가 공유 파일이나 작업 메시지에도 적합한 것은 아닙니다.

## Step 2 · Start with a storage account

[calm] 스토리지 계정은 계정 유형과 중복성 같은 Azure Storage의 공통 설정을 제공합니다. Contoso는 일반적인 저장 요구에 Standard 범용 계정을 사용합니다.
[600ms]
[confident] Premium 계정 유형은 특정 고성능 서비스를 위한 것입니다. 모든 종류의 스토리지를 빠르게 만드는 범용 업그레이드는 아닙니다.

## Step 3 · Pick the service per kind of data

[calm] 상품 사진은 이미지나 문서를 개체로 저장하는 Blob Storage에 어울립니다. 창고 직원이 익숙한 파일 공유 프로토콜로 공유 문서를 열어야 한다면 Azure Files를 사용합니다.
[600ms]
[confident] 둘 다 데이터를 보관하지만, 사람과 앱이 데이터에 접근하는 방식에 따라 적합한 서비스가 달라집니다.

## Step 4 · Separate work from records

[calm] Queue Storage는 나중에 처리할 작업을 설명하는 메시지를 저장합니다. Table Storage는 키로 정리한 간단한 레코드를 저장하며, 그 데이터 모델이 업무에 맞을 때 유용합니다.
[600ms]
[confident] 관계형 데이터베이스가 필요한 주문 기록은 기존 데이터베이스에 둡니다. Queues와 Tables는 그대로 바꿔 끼울 대체품이 아닙니다.

## Step 5 · Plan the move

[calm] 데이터를 옮기기 전에 기존 시스템과 작업 규모를 알아야 합니다. Azure Migrate는 Contoso의 마이그레이션 평가와 계획을 돕습니다.
[600ms]
[confident] 대규모 데이터를 오프라인으로 옮기는 것이 적합하다면 Azure Data Box를 선택할 수 있습니다. 평가와 데이터 운송은 이전 작업의 서로 다른 부분입니다.

## Step 6 · Move and synchronize files

[calm] 작업에 맞춰 도구를 고릅니다. AzCopy는 스크립트 전송, Storage Explorer는 그래픽 화면을 통한 작업, Azure File Sync는 Windows Server 파일 공유와 Azure Files의 동기화에 사용합니다.
[600ms]
[confident] 데이터를 한 번 복사하는 것과 공유 파일을 계속 동기화하는 것은 다른 요구 사항입니다.

## Step 7 · Match the tier to how often you read

[calm] 고객은 상품 이미지를 바로 봐야 합니다. Hot, Cool, Cold는 저장과 접근 비용이 다른 온라인 Blob 계층입니다. Archive는 오프라인이며, 온라인 계층으로 리하이드레이션한 뒤 사용합니다.
[600ms]
[confident] 접근 빈도와 검색 필요에 맞춰 선택하세요. 조기 삭제 요금도 생길 수 있으므로, 저장 단가만이 전체 비용은 아닙니다.

## Step 8 · Decide how many copies to keep

[calm] 로컬 중복은 로컬에 복사본을 두고, 영역 중복은 여러 영역에 나눠 둡니다. 지역 중복 옵션은 각각의 구성에 다른 지역의 복사본을 추가합니다.
[600ms]
[confident] 지역 간 복제는 비동기이므로 최신 변경이 아직 도착하지 않았을 수 있습니다. 중복성은 인프라 장애에 도움이 되지만, 백업과 복구 계획을 대신하지는 않습니다.

## Step 9 · Storage Basics - All in One

[calm] 사진은 Blobs, 공유 문서는 Files, 대기 작업은 Queues, 간단한 키 기반 레코드는 Tables에 연결됩니다. 계정 유형과 액세스 계층, 중복성은 선택한 서비스에 맞는 조합이어야 합니다.
[600ms]
[confident] 데이터의 자리를 정했습니다. 다음은 누가 매장 리소스에 접근하고 무엇을 할 수 있는지 결정합니다.