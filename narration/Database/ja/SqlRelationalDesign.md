# Narrator Script — リレーショナル データ ストレージの設計

**Source animation:** [SqlRelationalDesign.html](../../../journeys/Database/SqlRelationalDesign.html)
**Language:** ja

キューの凡例：`[confident]`、`[reflective]`、`[serious]` は話し方の指示、`[600ms]` は文と文の間の無音の間です。

<!-- Sources: https://learn.microsoft.com/en-us/training/modules/design-data-storage-solution-for-relational-data/ ; https://learn.microsoft.com/en-us/azure/azure-sql/database/security-best-practice#data-protection -->

## Step 1 · Three ways to run SQL on Azure

[confident]
Contoso の注文システムにはテーブル、行、キーが必要ですが、それだけではデータベースを誰が管理するかは決まりません。
[600ms]
SQL Database はデータベース基盤を管理し、Managed Instance はインスタンスの機能を保ち、SQL Server on Azure VMs は OS へのアクセスを提供します。
[600ms]
[reflective]
この分岐は、制御と保守を担当する範囲の違いを表しています。

## Step 2 · Azure SQL Database

[confident]
Azure SQL Database では、Contoso は OS や SQL Server インスタンスを管理せずにリソースを選べます。
[600ms]
vCore と DTU はリソースの購入方法を表し、サーバーレスは単一データベースのコンピューティングを調整します。
[600ms]
[reflective]
エラスティック プールでは、各リージョンのデータベースが設定した上限の範囲内でリソースを共有します。

## Step 3 · Azure SQL Managed Instance

[confident]
Contoso の既存アプリは個々のテーブル以外にも依存しているため、移行ではインスタンス全体を考える必要があります。
[600ms]
Managed Instance は、SQL Server Agent やリンク サーバーなどの機能をマネージドの SQL Server インスタンスで提供します。
[600ms]
[reflective]
注文、在庫、返品のデータベースは、そのインスタンスのコンピューティングとストレージを共有します。

## Step 4 · SQL Server on Azure VMs

[confident]
Contoso が OS へのアクセスや特定の SQL Server 機能を必要とする場合には、仮想マシンが選択肢になります。
[600ms]
積み重なった層は、その制御範囲であるデータベース エンジン、オペレーティング システム、選択した Azure 仮想マシンを示しています。
[600ms]
[reflective]
その分、SQL Server と OS の更新にも Contoso が責任を持ちます。

## Step 5 · Recommend a scaling approach

[confident]
シナリオの矢印が示すように、増加の課題が違えば、必要な対処も変わります。
[600ms]
エラスティック プールはリソースを共有し、垂直スケーリングはコンピューティングのサイズを変え、シャーディングによる水平スケーリングはデータを複数のデータベースに分けます。
[600ms]
[reflective]
財務レポートに複数のデータベースの行が必要なら、単にコンピューティングを増やすのではなく、エラスティック クエリがその用途に対応します。

## Step 6 · Recommend an availability tier

[confident]
サービス レベルは、Contoso のデータベースのコンピューティング サイズだけでなく、その下のアーキテクチャも変えます。
[600ms]
汎用はコンピューティングとリモート ストレージを分離し、ビジネス クリティカルはローカル接続のストレージとレプリカを使います。
[600ms]
[reflective]
SQL Database の Hyperscale は、ページ サーバーによってストレージと読み取りをスケールさせます。

## Step 7 · Protect data in every state

[serious]
ストレージから接続を通り、右側にある機密性の高い列まで、データの流れを追ってみましょう。
[600ms]
TDE は保存済みのデータベース ファイルを、TLS は転送中のデータを、Always Encrypted はクライアントで暗号化された選択した列を保護します。
[600ms]
[reflective]
動的データ マスクはクエリ結果の値を隠すだけで、暗号化ではありません。

## Step 8 · When relational is not the answer

[confident]
すべてのワークロードに、Contoso の注文システムと同じリレーショナルな方法が必要なわけではありません。
[600ms]
Azure Table Storage と Azure Cosmos DB for Table は同じテーブル データ モデルを使いますが、インデックス作成、配布、待ち時間、一貫性が異なります。
[600ms]
[reflective]
比較表を横に見ながら、追加の機能がアプリの要件に合うかを判断してください。

## Step 9 · All in one: pick the right store

[confident]
判断は左側の要件から始め、矢印をたどって適した選択肢を見つけましょう。
[600ms]
クラウドのデータベース、共有プール、インスタンスの機能、OS へのアクセスでは、それぞれ選ぶものが変わります。
[600ms]
[reflective]
可用性のアーキテクチャ、データ保護、テーブルへのグローバルなアクセスは、最初のワークロードの判断を置き換えるのではなく、設計を完成させる要素です。
