# Narrator Script — Containers · KEDA scaling in Container Apps — Azure Containers

**Source animation:** [KedaScaling.html](../../../journeys/Container/KedaScaling.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/container-apps/scale-app>
- <https://learn.microsoft.com/azure/container-apps/jobs>
- <https://learn.microsoft.com/azure/container-apps/metrics>
- <https://learn.microsoft.com/azure/container-apps/log-monitoring>

---

## Step 1 · A burst the CPU can’t see

[calm] Contosoの注文処理は、普段は静かです。ところが、フラッシュセールが始まると、1分間に数百件のメッセージがキューに届きます。
[600ms]
[concerned] レプリカが1つだと処理が追いつきません。それでも、CPUは落ち着いています。ワーカーは、ほとんどの時間を、決済APIの待ち時間に使っているからです。
[600ms]
[confident] つまり、CPUは盲点です。大事なのは、キューの長さです。スケールの基準にするべきなのは、こちらです。

## Step 2 · Three kinds of scale rule

[curious] スケールルールは、Container Appsに、いつレプリカを追加するかを伝えます。種類は3つです。HTTP、TCP、カスタムです。
[600ms]
[calm] HTTPとTCPのルールは、実際のトラフィックを数えます。カスタムルールでは、キューなど、好きなKEDAスケーラーを組み込めます。
[600ms]
[confident] ルールを複数指定した場合は、最初に満たされた条件でスケールが始まります。ルールをひとつも定義しなかった場合は、デフォルトのHTTPルールで、レプリカ数が0から10の間でスケールします。

## Step 3 · The control loop: queue, KEDA, replicas

[calm] 流れは、こうです。KEDAがイベントソースをポーリングして、バックログに必要なレプリカ数を計算します。そして、プラットフォームが、それに合わせてレプリカを増減します。
[600ms]
[curious] カスタムルールは、デフォルトで30秒ごとにポーリングされます。HTTPとTCPのルールは、ポーリングされません。プラットフォームが、そのトラフィックを自分で測定するからです。
[600ms]
[reassuring] コードが、スケーラーとやりとりすることはありません。メッセージを処理するだけです。

## Step 4 · Limits and the replica math

[curious] 1つのレプリカが処理するメッセージ数を、KEDAに伝えます。KEDAは、バックログをその数で割って、切り上げます。
[600ms]
[calm] その結果を、最小レプリカ数と最大レプリカ数で制限します。デフォルトは、0と10です。
[600ms]
[serious] レプリカ数は、目標値であって、保証ではありません。実際のスケールアウトは、何回かのポーリングをかけて、段階的に増え、最大値に近づいていきます。

## Step 5 · Scale to zero, and the cold start

[calm] 最小レプリカ数を0にすると、キューが空のときは、レプリカも0になり、使用料金もかかりません。
[600ms]
[concerned] その代わり、コールドスタートが発生します。しばらく静かだったあとの最初のメッセージは、レプリカが起動するまで待たされます。
[600ms]
[confident] クールダウン期間は、デフォルトで300秒です。これが適用されるのは、最後のレプリカから0に下がるときだけです。0になると、測定するプロセスがないので、イベントソースがアプリを起こします。

## Step 6 · A Service Bus scale rule, field by field

[calm] では、実際のルールを見てみましょう。カスタムルールには、KEDAスケーラーの種類と、そのメタデータを指定します。ここでは、Azure Service Busです。
[600ms]
[curious] メタデータには、どのキューを監視するか、どの名前空間か、そして、1つのレプリカが処理するメッセージ数を指定します。
[600ms]
[confident] Storageキューも、同じ考え方です。アカウント名、キュー名、キューの長さを指定します。画面の値は、架空のものです。

## Step 7 · How the scaler signs in

[curious] KEDAはキューの長さを読み取る必要があるので、ルールには資格情報が必要です。
[600ms]
[calm] ルールから参照するシークレットを渡すこともできます。または、マネージドIDでサインインさせれば、保存もローテーションも不要です。
[600ms]
[serious] Service Busの接続文字列を使う場合、共有アクセスポリシーは、Manageタイプでなければなりません。マネージドIDを使う場合は、そのIDに、キューの読み取りを許可する必要があります。

## Step 8 · Cron: scale by the clock

[curious] 急増の時間帯が、あらかじめわかっている場合もあります。cronルールを使うと、指定した時間帯だけレプリカを増やして、終わったら戻します。
[600ms]
[calm] タイムゾーン、開始時刻、終了時刻、そして、その間に保持するレプリカ数を指定します。
[600ms]
[serious] 開始と終了を同じにはできません。また、時間帯の外では、最小レプリカ数を0にしておきます。さらに、キューのルールと組み合わせれば、予想外の急増にも対応できます。

## Step 9 · Try it: the live scale simulator

[excited] では、試してみましょう。ルールを選んで、負荷をドラッグすると、計算どおりにレプリカ数が変わります。
[600ms]
[curious] まず、最大を5にして、大きなバックログを試してみましょう。次に、負荷をゼロにして、最小を0にします。そのあと、最小を1にしてみてください。
[600ms]
[reassuring] ここにあるものはすべて架空で、ページ内で計算しています。表示されるのは、アプリが落ち着く先です。実際のスケールアウトは、何回かのポーリングをかけて、段階的に進みます。

## Step 10 · Apps scale replicas, jobs run executions

[calm] アプリは、レプリカを動かし続けて、各レプリカが、ソースからイベントを取り出していきます。
[600ms]
[curious] イベント駆動型のジョブは、違います。イベントごとに1回の実行を開始して、最後まで実行して、終了します。
[600ms]
[confident] イベントごとに、専用のコンテナーが必要な場合や、長時間かかる処理には、ジョブを選びます。ジョブも、同じKEDAスケーラーを使います。ただし、何回実行するかは、ルールが決めます。

## Step 11 · Verify it scales, and find what’s wrong

[calm] 確認するには、テスト用のメッセージを追加して、レプリカ数のメトリックとシステムログを見ます。
[600ms]
[concerned] 何も動かないときは、順番にたどります。キュー、資格情報、ルール、そして上限と下限です。
[600ms]
[serious] もうひとつ、落とし穴があります。イングレスがオフで、最小レプリカもルールもないと、アプリは0にスケールして、再び起動する方法がなくなります。また、スケールルールを編集すると、新しいリビジョンが作られます。

## Step 12 · Burst out, then back to zero

[calm] まとめましょう。必要なのは、ルール、レプリカごとのしきい値、最小と最大の制限、そして資格情報です。
[600ms]
[proud] ポーリングはKEDAが行い、スケールはプラットフォームが行います。Contosoは、フラッシュセールで一気にスケールアウトして、そのあと、0に戻ります。
[600ms]
[reassuring] これは、A I 200で測定されるスキルです。シミュレーターで練習して、そのあと、公式の学習ガイドを開いてみましょう。
