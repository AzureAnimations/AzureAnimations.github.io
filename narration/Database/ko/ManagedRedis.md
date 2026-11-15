# Narrator Script — Database · Azure Managed Redis for AI Apps

**Source animation:** [ManagedRedis.html](../../../journeys/Database/ManagedRedis.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/redis/overview>
- <https://learn.microsoft.com/azure/redis/tutorial-semantic-cache>
- <https://learn.microsoft.com/azure/redis/overview-vector-similarity>
- <https://learn.microsoft.com/azure/redis/entra-for-authentication>

---

## Step 1 · Why an AI app needs a cache

[calm] Contoso의 지원 어시스턴트는 하루 종일 똑같은 질문에 답합니다.
[600ms]
[curious] 그런데 같은 질문이 반복될 때마다 비용이 두 번 듭니다. 모델 호출 한 번, 데이터베이스 조회 한 번이죠.
[600ms]
[confident] Contoso와 어시스턴트는 가상의 예시입니다. 핵심은, 반복될 작업의 결과를 Redis가 메모리에 바로 보관해 준다는 것입니다.

## Step 2 · Azure Managed Redis

[calm] Azure Managed Redis는 Redis Enterprise를 기반으로 Microsoft가 운영하는 인메모리 데이터 저장소입니다.
[600ms]
[confident] 워크로드에 맞게 메모리와 컴퓨팅이 어떻게 균형을 이루는지를 보고 계층을 고릅니다.
[600ms]
[reassuring] 크기와 가격은 바뀔 수 있으니, 숫자를 외우기보다 공식 개요와 가격 페이지를 확인하세요.

## Step 3 · Cache-aside, one level deeper

[calm] 캐시 어사이드 방식에서는 앱이 캐시를 직접 관리합니다. 읽을 때는 먼저 Redis를 찾아봅니다.
[600ms]
[confident] 캐시에 없으면 데이터베이스에서 읽어 와서 결과를 저장합니다. 쓸 때는 데이터베이스를 먼저 바꾸고, 그다음에 캐시를 바로잡습니다.
[600ms]
[curious] 이 패턴은 API와 캐싱을 다룬 아키텍트 수업에서 소개했습니다. 여기서는 그 밑에 있는 Redis 명령어를 더 깊이 살펴봅니다.

## Step 4 · Set it, read it, let it expire

[curious] Redis에서 가장 단순한 값은 문자열입니다. 수명을 정해서 쓰고, 다시 읽어 옵니다.
[600ms]
[confident] 쓸 때 EX 옵션으로 TTL을 초 단위로 정합니다. TTL 명령은 남은 시간을 초로 알려 주고, 나중에 바꾸고 싶으면 EXPIRE를 씁니다.
[600ms]
[reassuring] 시간이 다 되면 키가 스스로 사라집니다. 그래서 메모리가 부족해지기 전에 오래된 키가 정리됩니다.

## Step 5 · Three ways to retire stale data

[serious] 캐시된 복사본은 오래돼서 낡을 수 있으니, 어떻게 캐시에서 내보낼지 정해야 합니다.
[600ms]
[confident] 쓸 때, 시간이 다 됐을 때, 새 버전이 나왔을 때 내보낼 수 있습니다.
[600ms]
[calm] 데이터, 모델, 프롬프트 버전별로 키에 버전을 붙이는 것은 시맨틱 캐시가 낡은 답을 다시 쓰지 않게 하는 방법이기도 합니다.

## Step 6 · More than strings

[curious] Redis는 단순히 문자열을 두는 곳이 아니라 데이터 구조 서버입니다.
[600ms]
[confident] 데이터의 모양을 작업에 맞게 고르세요. 대표적인 구조 여섯 가지를 볼까요?
[600ms]
[calm] 그림은 단순화한 것입니다. Redis에는 JSON, 비트맵, 시계열 등도 있습니다.

## Step 7 · Expire by clock, evict by memory

[encouraging] 이제 직접 해 볼 시간입니다. 수명이 다른 키를 추가한 다음, 메모리를 가득 채워 보세요.
[600ms]
[confident] 만료는 TTL이 끝나면 키를 지우는 것이고, 축출은 메모리가 가득 찼을 때 키를 내보내는 것입니다.
[600ms]
[reflective] 가상의 키와 슬롯 8개만 있는 시뮬레이션입니다. Azure Managed Redis의 기본 정책은 volatile LRU입니다.

## Step 8 · Vectors in Redis: index first

[curious] 의미로 검색하려면 각 임베딩을 메타데이터 바로 옆, 해시에 보관하세요.
[600ms]
[confident] 그다음 벡터 필드에 인덱스를 만들면 Redis에서 의미 기반 검색을 할 수 있습니다.
[600ms]
[serious] 벡터 검색은 RediSearch 모듈을 사용합니다. 모듈은 기존 인스턴스에 추가할 수 없으니, 캐시를 만들 때 활성화하세요.

## Step 9 · Nearest by meaning, then filtered

[curious] 쿼리 벡터는 의미상 가장 가까운 항목 K개, 즉 최근접 이웃을 찾아 달라고 요청합니다.
[600ms]
[confident] 메타데이터 필터를 더하면 같은 검색이 하이브리드 검색이 됩니다.
[600ms]
[calm] 이 지도는 가상의 지원 문서로 만든 단순한 예시입니다. 실제 임베딩은 차원이 훨씬 많고, 여기 나온 거리도 임의로 정한 값입니다.

## Step 10 · Semantic caching for LLM answers

[curious] 이제 AI 앱에서 얻는 이점입니다. 새 프롬프트가 이전 프롬프트와 의미가 거의 같으면, 저장해 둔 답을 그대로 돌려줍니다.
[600ms]
[impressed] 그러면 모델 호출을 아예 건너뛰니 시간과 비용을 모두 아낄 수 있습니다.
[600ms]
[calm] 이것은 Redis 기능이 아니라 애플리케이션이나 게이트웨이에서 구현하는 패턴입니다. Redis는 프롬프트를 저장하고 검색하며, Azure API Management가 그 단계를 정책으로 실행할 수 있습니다.

## Step 11 · Connect without secrets

[serious] 앱은 어떻게 연결해야 할까요? 액세스 키보다 Microsoft Entra ID를 권장합니다.
[600ms]
[confident] Entra 인증은 TLS 연결에서만 동작하니 TLS는 계속 켜 두고, 캐시로 가는 네트워크 경로도 제한하세요.
[600ms]
[reassuring] 액세스 키도 여전히 쓸 수 있지만, 직접 보관하고 주기적으로 교체해야 하는 비밀입니다.

## Step 12 · Is the cache earning its keep?

[calm] 캐시는 효과가 있어야 의미가 있습니다. 조회 적중률과 메모리 사용률, 이 두 가지를 지켜보세요.
[600ms]
[concerned] 메모리가 바닥나기 전에 경고를 설정하세요. 바닥난 뒤에는 늦습니다.
[600ms]
[reflective] 지표 이름은 모니터링 참조 문서에서 가져왔습니다. 여기 나오는 차트와 숫자는 설명용 예시일 뿐입니다.

## Step 13 · Redis for AI apps, all in one

[calm] 정리해 볼까요? 반복되는 작업은 메모리에 두고, 수명을 정하고, 의미로 검색하세요.
[600ms]
[confident] 캐싱, 만료, 벡터, 시맨틱 캐싱, 보안 액세스, 모니터링까지 모두 다뤘습니다.
[600ms]
[proud] 이것이 A I 200 기술인 AI 솔루션에 Azure Managed Redis 통합하기입니다. 데이터 관리 영역에 속하며, 시험의 25%에서 30%를 차지합니다.
