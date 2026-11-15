# Narrator Script — Monitor · KQL Basics: Ask Your Logs a Question

**Source animation:** [KqlBasics.html](../../../journeys/Monitor/KqlBasics.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/kusto/query/>
- <https://learn.microsoft.com/azure/azure-monitor/logs/get-started-queries>
- <https://learn.microsoft.com/kusto/query/datatypes-string-operators>
- <https://learn.microsoft.com/kusto/query/join-operator>

---

## Step 1 · A query is a pipeline

[calm] KQL 쿼리는 테이블로 시작합니다. 그다음 행이 연산자를 하나씩 차례로 거쳐 갑니다.
[600ms]
[curious] 파이프 문자는 결과를 다음 단계로 넘기기 때문에, 쿼리는 위에서 아래로 읽으면 됩니다.
[600ms]
[reassuring] 쿼리는 데이터를 읽기만 합니다. 테이블을 절대 바꾸지 않으니 마음 놓고 실험해 보세요.

## Step 2 · where: keep only the rows you want

[calm] 시간 필터를 가장 먼저 거세요. ago, between, now를 사용합니다.
[600ms]
[confident] 그러면 뒤에 오는 연산자는 훨씬 작아진 테이블에서 동작합니다. ago에 30분을 주면 지금으로부터 30분 전을 뜻하고, between은 양쪽 끝을 모두 포함합니다.
[600ms]
[serious] 포털의 시간 선택기도 쿼리 범위를 제한합니다. 쿼리 안에서도 시간을 지정했다면, 더 좁은 범위가 적용됩니다.

## Step 3 · project and extend: choose and compute columns

[calm] project는 이름을 지정한 열만 남기고, 나머지는 결과에서 뺍니다.
[600ms]
[curious] extend는 다르게 동작합니다. 모든 열을 그대로 두고, 직접 계산한 새 열을 하나 추가합니다.
[600ms]
[confident] project로 열 이름을 바꿀 수도 있고, extend는 쿼리 안에서 간단한 계산을 하기에 좋습니다.

## Step 4 · summarize: many rows become one row per group

[calm] summarize는 여러 행을 그룹마다 한 행으로 줄여 줍니다. 행 수를 세거나 값의 평균을 낼 수 있습니다.
[600ms]
[confident] Name 같은 열로 그룹을 나누거나, bin으로 시간을 구간으로 자르세요.
[600ms]
[serious] TimeGenerated만으로 그룹을 나누면 타임스탬프마다 그룹이 하나씩 생깁니다. bin은 시간을 먼저 구간으로 반올림해 줍니다.

## Step 5 · order by, top, take, distinct: shape the answer

[calm] order by는 행을 정렬합니다. top은 정렬하고 앞의 몇 개만 남깁니다.
[600ms]
[curious] take는 순서와 상관없이 아무 행이나 몇 개 가져오고, distinct는 열의 고유한 값을 나열합니다.
[600ms]
[confident] 최신 레코드를 가져올 때는 테이블 전체를 정렬하지 말고 top을 쓰세요.

## Step 6 · Text matching: has, contains, startswith

[curious] has는 단어 전체와 일치합니다. contains는 텍스트의 어느 부분과도 일치하지만, 스캔이 더 느립니다.
[600ms]
[calm] startswith는 텍스트의 시작 부분을 확인합니다. 이 세 가지는 모두 대소문자를 구분하지 않습니다.
[600ms]
[serious] equals는 정확히 비교하기 때문에 대소문자를 구분합니다. 가능하면 has를 쓰세요. 모든 값을 스캔하지 않고 단어 전체를 찾아보기 때문입니다.

## Step 7 · join and union: combine two tables

[calm] join은 두 테이블의 행을 공통 열을 기준으로 맞춥니다.
[600ms]
[confident] union은 여러 테이블의 행을 그냥 위아래로 쌓습니다.
[600ms]
[serious] 기본 조인 종류는 왼쪽의 중복 행을 제거합니다. 일치하는 행을 전부 유지하려면 kind equals inner를 지정하고, 더 작은 테이블을 왼쪽에 두세요.

## Step 8 · render timechart: turn rows into a picture

[calm] 추세를 보려면 TimeGenerated를 5분 구간으로 bin해서 summarize하세요.
[600ms]
[confident] 그다음 쿼리를 render timechart로 끝내세요. 첫 번째 열이 시간 축이 됩니다.
[600ms]
[serious] render는 반드시 마지막 연산자여야 합니다. 데이터를 바꾸지 않고, 도구에 어떻게 그릴지만 알려 줍니다.

## Step 9 · Build a query yourself

[excited] 이제 직접 해 볼 차례입니다. 연산자를 클릭해 추가하고, 줄을 클릭해 제거하세요.
[600ms]
[curious] 목표는 5분마다 실패한 요청 수를 차트로 그리는 것입니다.
[600ms]
[encouraging] 순서를 기억하세요. summarize하기 전에 필터링하고, render는 마지막입니다.

## Step 10 · From answer to action

[calm] 쿼리가 필요한 결과를 반환했다면, 그냥 버리지 말고 다시 쓰세요.
[600ms]
[confident] 현재 쿼리에서 새 경고 규칙을 시작해서, 결과가 바뀔 때 알림을 받을 수 있습니다.
[600ms]
[optimistic] 아니면 쿼리를 저장해서 워크북이나 대시보드에 타일로 고정하세요.

## Step 11 · Three beginner mistakes

[calm] 초보자가 모두 한 번씩 하는 실수가 세 가지 있습니다. 하나씩 찾아서 고쳐 보세요.
[600ms]
[serious] KQL은 대소문자를 구분합니다. 테이블 이름, 열 이름, equals 모두 대소문자를 따집니다.
[600ms]
[reassuring] 실수는 하나같이 하기 쉽지만, 어디를 봐야 하는지만 알면 피하기도 쉽습니다.

## Step 12 · KQL at a glance

[calm] 파이프 하나에 질문 하나입니다. 테이블로 시작하고, 시간으로 필터링하세요.
[600ms]
[confident] 열의 모양을 정하고, 행을 summarize하고, 결과를 render하세요.
[600ms]
[proud] 이제 실제 워크스페이스에서, 또는 Log Analytics 시작하기 문서에 연결된 데모 환경에서 연습해 보세요.
