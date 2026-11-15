# Narrator Script — Cosmos DB: 構築とクエリ

**Source animation:** [CosmosFoundations.html](../../../journeys/Database/CosmosFoundations.html)
**Language:** ja

読み方: 角かっこのスタイルは声の調子を示し、[600ms] は文の間の休止を示します。

<!-- Sources: https://learn.microsoft.com/en-us/training/paths/develop-ai-solutions-azure-cosmos-db/ ; https://learn.microsoft.com/en-us/training/modules/build-query-azure-cosmos-db/ -->

## Step 1 · Why a document database?

[confident] Contoso のチャット メッセージと製品ドキュメントは、どちらもサポート アシスタントに役立ちますが、データの形は異なります。
[600ms]
[calm] Azure Cosmos DB for NoSQL は、すべての項目に同じ固定スキーマを求めず、JSON ドキュメントとして格納します。
[600ms]
[reassuring] 二つの例から、この用途に柔軟な項目が適している理由がわかり、使い慣れた開発ツールでそれらにアクセスできます。

## Step 2 · Account, database, container, item

[confident] 入れ子の構造を外側から見ると、アカウント、データベース、コンテナー、個々の項目という順番になっています。
[600ms]
[calm] 製品カタログのデータベースには製品用とユーザー用のコンテナーがあり、それぞれ独自のパーティション キーを選びます。
[600ms]
[reassuring] この階層はアプリケーションの道案内にもなるので、項目の場所がわかれば、この後のクライアント操作も追いやすくなります。

## Step 3 · Partition key: where items live

[confident] テント、ストーブ、バックパックのグループのように、カテゴリの値が各製品を論理パーティションへ振り分けます。
[600ms]
[calm] 少数の値に処理を集中させず、異なる値が多く、データが均等に分散するプロパティを選びます。
[600ms]
[serious] コンテナーの作成後にパーティション キーを変えるにはデータ移行が必要なので、作成前に慎重に決めましょう。

## Step 4 · Connect with the SDK

[confident] アプリケーションはクライアントを用意して認証し、データベースと製品コンテナーのハンドルを取得します。
[600ms]
[calm] Microsoft Entra ID ならコードにアカウントのシークレットを置かずにロールでアクセスできますが、適切なデータ ロールの割り当ては必要です。
[600ms]
[reassuring] クライアントはアプリケーション全体で再利用し、リソースのハンドルを取得するだけではネットワーク呼び出しが発生しないことも覚えておきましょう。

## Step 5 · Create, read, replace, upsert, delete

[confident] 一つの製品を追うと、作成で追加し、識別子とパーティション キーを使う直接読み取りで取得します。
[600ms]
[calm] 置換は既存の項目を変更し、アップサートは項目が存在するかどうかに応じて挿入または置換します。
[600ms]
[serious] 削除は指定した項目を取り除くので、書き込みをすべて同じものと考えず、意図に合う操作を選んでください。

## Step 6 · Point read or query?

[curious] 項目の識別子とパーティション キーがすでにわかっていますか、それとも条件に合う項目を探す必要がありますか。
[600ms]
[calm] ポイント読み取りは一つの項目へ直接アクセスし、クエリは条件に沿ってフィルター、射影、並べ替えを行います。
[600ms]
[reassuring] 適していれば直接読み取りを使い、クエリも可能な限り一つのパーティション内に収めて、不要な分散を避けましょう。

## Step 7 · Query: filter and project

[confident] このクエリは価格条件に合うテントを残し、より高価なテントを結果から除外します。
[600ms]
[calm] すべてのプロパティをアシスタントに返すのではなく、識別子、名前、価格だけを返します。
[600ms]
[reassuring] フィルターが対象の項目を決め、射影が返すフィールドを選び、パーティション キーがこの例を関連するグループに絞っています。

## Step 8 · All in one: build and query

[confident] リソースをモデル化し、再利用するクライアントで接続して、項目を読み書きする流れが一つにまとまりました。
[600ms]
[calm] 既知の項目にはポイント読み取りを使い、アシスタントが条件に合うデータを探すときはフィルター付きクエリを使います。
[600ms]
[encouraging] この基礎があれば、埋め込みやベクトル検索を追加しても、それらが表すドキュメントを見失わずに進めます。
