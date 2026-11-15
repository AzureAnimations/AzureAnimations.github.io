# Narrator Script — AI アプリ向けデータベースを選ぶ

**Source animation:** [PickYourDatabase.html](../../../journeys/Database/PickYourDatabase.html)
**Language:** ja

読み方: 角かっこのスタイルは声の調子を示し、[600ms] は文の間の休止を示します。

<!-- Sources: https://learn.microsoft.com/en-us/training/paths/develop-ai-solutions-azure-cosmos-db/ ; https://learn.microsoft.com/en-us/training/paths/develop-ai-solutions-azure-database-postgresql/ ; https://learn.microsoft.com/azure/azure-sql/azure-sql-iaas-vs-paas-what-is-overview ; https://learn.microsoft.com/training/modules/design-data-integration/ -->

## Step 1 · One assistant, four kinds of data

[curious] Contoso Outfitters のサポート アシスタントには、チャット履歴、注文記録、意味ベースの検索、大容量の未加工ファイルが必要です。
[600ms]
[calm] これらの要求は一つのアシスタントに集まりますが、必要な格納形式やアクセス パターンは同じではありません。
[600ms]
[reassuring] 検索タイルの二つの色に注目すると、ベクトルが一つのエンジン専用ではなく、ワークロードを基準に選ぶべきだとわかります。

## Step 2 · Documents and vectors: Cosmos DB

[confident] チャット メッセージは Azure Cosmos DB for NoSQL のドキュメントになり、テキストの隣に埋め込みも格納されます。
[600ms]
[calm] パーティション キーによって同じ顧客に関係するデータとまとまり、ドキュメントをばらばらに扱わずに済みます。
[600ms]
[reassuring] 柔軟なドキュメント格納とベクトル検索が一緒になるので、ベクトルを項目から切り離さずに意味で検索できます。

## Step 3 · Tables plus vectors: PostgreSQL

[confident] こちらでは製品カタログをリレーショナル テーブルに保ち、いつもの製品フィールドの隣に埋め込み列を追加します。
[600ms]
[calm] Azure Database for PostgreSQL は pgvector を使い、意味によるランク付けをカテゴリ フィルターやリレーショナル クエリと組み合わせます。
[600ms]
[reassuring] テーブルの関係とベクトル検索を一緒に使うチームに適していますが、利用する各データベースで拡張機能を有効にする必要があります。

## Step 4 · Relational at scale: Azure SQL family

[confident] Contoso の注文と顧客のデータでは、チームがデータベース環境のどこまで管理したいかが、次の判断になります。
[600ms]
[calm] Azure SQL Database と Azure SQL Managed Instance はマネージド サービスで、SQL Server on Azure VMs ではオペレーティング システムにアクセスできます。
[600ms]
[reassuring] 既存の SQL Server ワークロードを移すときは特に、アプリの要件と管理の境界を合わせて選びましょう。

## Step 5 · Raw files and pipelines: the data lake

[confident] チャットのエクスポート、ログ、製品写真は、Azure Data Lake Storage の未加工ファイルから始まります。
[600ms]
[calm] Azure Data Factory が分析に向かう流れを接続、収集、変換、公開し、監視します。
[600ms]
[reassuring] その先に Databricks、Synapse、Stream Analytics があるのは、ファイルの集まりをアシスタントのトランザクション データベースと見なすのではなく、分析用に整えるルートだからです。

## Step 6 · Which one, when?

[curious] 比較画面でニーズを選び、対応するエンジン、役立つ場面、注意点を確認してください。
[600ms]
[calm] ドキュメント、リレーショナル データとベクトル、業務の注文、未加工ファイルのパイプラインには、それぞれ異なる判断が必要です。
[600ms]
[encouraging] Contoso は複数の選択肢を使えるので、すべての作業を一つの製品に統一せず、ワークロードごとに決めましょう。
