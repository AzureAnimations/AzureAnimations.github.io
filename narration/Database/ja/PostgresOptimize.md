# Narrator Script — PostgreSQL: ベクトル検索の最適化

**Source animation:** [PostgresOptimize.html](../../../journeys/Database/PostgresOptimize.html)
**Language:** ja

角かっこ内は話し方の指示です。[600ms] は文と文の間のポーズを表します。

<!-- Fact source: https://learn.microsoft.com/en-us/training/modules/optimize-vector-search-azure-database-postgresql/ · Learning path: https://learn.microsoft.com/en-us/training/paths/develop-ai-solutions-azure-database-postgresql/ -->

## Step 1 · Where a vector query spends its time

[curious] 商品検索の遅さは、ベクトルの比較だけでなく、さまざまな箇所で費やす時間から生じることがあります。
[600ms]
[calm] 接続の確立、計画、ベクトルの比較、データの読み取りを追って、どこで時間がかかるかを確認します。
[600ms]
[encouraging] まずベースラインを測り、それぞれの調整を、実際に観測した遅延の原因に結び付けましょう。

## Step 2 · Tune PostgreSQL for pgvector

[confident] メモリ、プランナーの動作、ベクトル検索の探索量によって、Contoso は同じクエリを異なる観点から調整できます。
[600ms]
[serious] これらの設定にはメモリ、待ち時間、再現率のトレードオフがあるため、応答速度だけを測ればよいわけではありません。
[600ms]
[encouraging] パラメーターを一つずつ変え、実行プランを確認し、実際の利用を代表するデータで結果をテストしましょう。

## Step 3 · Choose and configure the vector index

[confident] ベクトル インデックスは、メモリ、構築時間、再現率、データの更新頻度を基準に選びます。
[600ms]
[calm] 比較表は構築時の判断とクエリ時の探索量を分けて示し、完全スキャンも比較の基準として使えます。
[600ms]
[serious] 距離の尺度をクエリに合わせ、インデックスの名前だけで決めず、トレードオフをテストしましょう。

## Step 4 · Shape the table for vectors and filters

[confident] よく絞り込む商品の属性は型付きの列に置き、埋め込みと柔軟な JSON にはそれぞれの役割を持たせます。
[600ms]
[calm] カテゴリと価格には B-tree、在庫のある商品には部分インデックス、JSON の包含条件には GIN を使います。
[600ms]
[serious] ベクトル インデックスがすべてのフィルターを速くすると考えず、アクセス パターンごとに合うインデックスを用意しましょう。

## Step 5 · Scale for high-volume workloads

[confident] 個々のクエリが遅い場合や、ベクトルとインデックスがメモリを圧迫する場合は、まずスケールアップを検討します。
[600ms]
[calm] 次に、図のように読み取り量には読み取りレプリカを、繰り返しの検索には Azure Managed Redis を使います。
[600ms]
[serious] 書き込みはプライマリで処理し、追加した容量がワークロードのどこに役立つかを測定しましょう。

## Step 6 · Pool connections and manage sessions

[confident] PgBouncer は多数のクライアントで少数のサーバー接続を共有し、接続確立の繰り返しや接続用メモリの負担を減らします。
[600ms]
[calm] トランザクション モードはトランザクション間で接続を共有し、セッション モードはクライアントの切断まで一つの接続を保持します。
[600ms]
[serious] クエリ固有の設定はトランザクション内に限定し、プールされた接続が意図しない設定を後の処理へ持ち越さないようにします。

## Step 7 · Contoso’s product search, tuned

[confident] Contoso の比較では、パラメーターの調整、ベクトル インデックス、型付きフィルター、適切な容量、接続プールを組み合わせています。
[600ms]
[calm] テーブルと商品の質問は同じまま、それぞれの変更が異なる待ち時間の原因に対処します。
[600ms]
[serious] これは定性的な説明なので、自分のデータでベンチマークし、一つひとつの変更が与える効果を記録しましょう。

## Step 8 · All in One: Optimize vector search

[confident] 最後の図は、一つの PostgreSQL ワークロードを、パラメーター、ベクトル インデックス、テーブル設計、スケーリング、接続プールという五つの手段で囲んでいます。
[600ms]
[calm] 性能の改善は、例の設定をそのまま写すことではなく、観測した動作にこれらの選択を合わせることで目指します。
[600ms]
[encouraging] まず測定し、本番に近いデータで変更を一つずつテストし、効果を記録してから次の調整に進みましょう。
