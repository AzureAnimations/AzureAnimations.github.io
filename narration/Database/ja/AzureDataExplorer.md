# Narrator Script — Database · Azure Data Explorer: Fast Analytics on Logs and Telemetry

**Source animation:** [AzureDataExplorer.html](../../../journeys/Database/AzureDataExplorer.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/data-explorer/data-explorer-overview>
- <https://learn.microsoft.com/azure/data-explorer/how-it-works>
- <https://learn.microsoft.com/azure/data-explorer/ingest-data-overview>
- <https://learn.microsoft.com/kusto/management/cache-policy>

---

## Step 1 · Billions of rows, one question

[calm] Contoso Fleetのトラックやゲートウェイ、アプリは、テレメトリーとログを休みなく書き込み続けています。行は、毎日一日中、どんどん積み上がっていきます。
[600ms]
[curious] そこで誰かが、簡単な質問をします。ここから時間との勝負です。この膨大なデータから、どれだけ早く答えを出せるでしょうか。
[600ms]
[confident] Contoso Fleetは架空の会社ですが、このレッスンで解説するAzure Data Explorerは、実在するサービスです。

## Step 2 · What Azure Data Explorer is for

[calm] Azure Data Explorerは、フルマネージドの分析サービスです。大量のデータが、次々と届く場面のために作られています。
[600ms]
[confident] そのデータは、ほとんどが追記のみです。そして、ほぼリアルタイムで、対話的に探索したいわけです。
[600ms]
[reassuring] Microsoft Learnでは、ログ分析、時系列分析、IoT、そして汎用的な探索的分析が、このサービスの得意分野だと紹介されています。

## Step 3 · Cluster, database, table, extent

[curious] では、データがどう整理されているかを見ていきましょう。クラスターの中にデータベースがあり、データベースの中に、型付きの列を持つテーブルがあります。
[600ms]
[confident] 各テーブルは、エクステントという単位で保存されます。エクステントは、圧縮されてインデックスが付いた、行のかたまりです。データは、取り込み時刻でパーティション分割されます。
[600ms]
[calm] エクステントは最初は小さいのですが、サービスがバックグラウンドで統合して、大きなものにしていきます。

## Step 4 · Compute and storage are separate

[curious] 内部では、役割が分かれています。エンジンノードは、クエリに応答して、ホットデータをキャッシュします。
[600ms]
[calm] データ管理ノードは、取り込みを担当します。すべてのエクステントは、Azure Blob Storageに永続化されます。
[600ms]
[confident] ストレージとコンピュートが分かれているので、それぞれ独立してスケールできます。コンピュートがキャッシュするのは、ストレージにすでにあるデータだけです。

## Step 5 · Ways to get data in

[calm] データは、Event HubsやIoT Hub、Event Grid、Kafkaなどから届きます。
[600ms]
[confident] キューによる取り込みは、スループットを重視してデータをバッチ処理します。ほとんどのシナリオで、こちらが推奨されています。
[600ms]
[curious] 一方、ストリーミング取り込みは、低遅延を重視します。テーブルごとのデータ量が少ない場合に、ほぼリアルタイムで結果が得られます。

## Step 6 · Try it: ingestion path and hot cache

[encouraging] ここからは、あなたの番です。データの届け方と、ホットに保つデータの量を選んでみましょう。
[600ms]
[curious] メーターの動きに注目してください。表示されるのは、それぞれのトレードオフの方向だけで、実際の数値ではありません。
[600ms]
[reflective] 実際の動作は、バッチ処理やキャッシュポリシー、ワークロード、クラスターのサイズによって変わります。

## Step 7 · Ask it in KQL

[curious] 質問するときは、Kusto Query Language、略してKQLを使います。上から下へ、順番に読んでいく言語です。
[600ms]
[confident] まずテーブルを指定して、そこからフィルターや集計へとパイプでつないでいきます。同じデータに対して、T-SQLも使えます。
[600ms]
[calm] KQLはオープンソースで、Azure Data Explorerのチームが作りました。Azure Monitor LogsやApplication Insightsでも使われています。

## Step 8 · Hot cache vs retention

[calm] 混同されやすいポリシーが2つあります。キャッシュポリシーは、ローカルSSD上で、どのデータを高速な状態に保つかを決めます。
[600ms]
[confident] 保持ポリシーは、データをいつまでクエリできるかを決めます。この2つは、互いに独立しています。
[600ms]
[serious] 保持ポリシーでクエリできる範囲が決まり、キャッシュは、その範囲の一部を高速化のために優先するだけです。それと、削除のタイミングは、ぴったり正確ではありません。

## Step 9 · Scale out, scale up

[calm] 容量が足りなくなったら、方向は2つあります。1つは、エンジンノードを増減するスケールアウトです。
[600ms]
[confident] もう1つは、VMのSKUを変更して、CPUとメモリを増やすスケールアップです。ストレージは、独立してスケールします。
[600ms]
[reassuring] 新しいクラスターでは、最適化された自動スケールが、既定で有効になります。使用率が低いときはスケールインし、負荷が高いときはスケールアウトします。範囲は、設定した上限と下限の間です。

## Step 10 · Security at a plain level

[serious] セキュリティは、3つのシンプルな考え方に集約されます。まず、ロールで、誰がデータをクエリしたり取り込んだりできるかを決めます。
[600ms]
[confident] プライベートエンドポイントを使えば、トラフィックがパブリックインターネットを通りません。マネージドIDを使えば、構成からシークレットをなくせます。
[600ms]
[calm] データロールは、クラスター、データベース、テーブルのスコープで適用できます。Azureのリソースロールとは別です。カスタマーマネージドキーにも対応しています。

## Step 11 · Where Azure Data Explorer fits

[curious] Azureのデータファミリーの中で、どこに位置づけられるのでしょうか。ファミリー全体をつなぐのが、KQLです。
[600ms]
[confident] 選ぶ基準は、どれだけ自分で運用したいかと、用途です。向いているのはテレメトリー分析で、ウェアハウスやアプリのデータには向きません。
[600ms]
[calm] Fabric Real-Time IntelligenceはSaaSの選択肢で、Azure Data Explorerは、より細かく制御できるPaaSの選択肢です。

## Step 12 · Azure Data Explorer at a glance

[calm] 全体像はこうです。追記が中心のテレメトリーやログが入ってきて、KQLで答えが返ってきます。
[600ms]
[confident] あなたが設計するのは、4つです。取り込みの経路、キャッシュと保持、スケール、そしてセキュリティです。
[600ms]
[proud] 次は、KQLの基本を学んでから、Databaseジャーニーのほかのデータストアと比べてみましょう。
