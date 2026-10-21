# Narrator Script — Contoso がアシスタントをリリース

**Source animation:** [ContosoShips.html](../../../journeys/Database/ContosoShips.html)
**Language:** ja

キューの凡例：`[confident]` と `[reflective]` は話し方の指示、`[600ms]` は文と文の間の無音の間です。

<!-- Sources: https://learn.microsoft.com/en-us/training/modules/build-query-azure-cosmos-db/ ; https://learn.microsoft.com/en-us/training/modules/implement-vector-search-azure-cosmos-db/ ; https://learn.microsoft.com/en-us/training/modules/implement-vector-search-azure-database-postgresql/ ; https://learn.microsoft.com/en-us/training/modules/build-query-azure-database-postgresql/ ; https://learn.microsoft.com/en-us/training/modules/optimize-query-performance-azure-cosmos-db/ ; https://learn.microsoft.com/en-us/training/modules/optimize-vector-search-azure-database-postgresql/ ; https://learn.microsoft.com/en-us/training/modules/design-data-storage-solution-for-relational-data/ ; https://learn.microsoft.com/en-us/training/modules/design-data-integration/ -->

## Step 1 · One question, two kinds of answer

[confident]
Contoso のお客様は、雨でも濡れないテントを探すと同時に、注文がどこにあるかを知りたいと考えています。
[600ms]
商品の意味と注文の事実では必要な検索方法が違うため、アシスタントはこの依頼を分けます。
[600ms]
[reflective]
テント探しには意図との一致が役立ちますが、注文には正確な記録が必要です。

## Step 2 · Cosmos DB remembers the conversation

[confident]
新しい接続によって、アシスタントは Azure Cosmos DB からチャット履歴を取り戻せるようになります。
[600ms]
チャット項目はテキストと埋め込みを一緒に保存し、パーティション キーがお客様の履歴を整理します。
[600ms]
[reflective]
項目の識別子とパーティション キーが分かれば、ポイント読み取りでその項目を取得できます。

## Step 3 · Find the tent by meaning

[confident]
質問を保存済みベクトルと同じモデルで埋め込みに変換すると、互いの意味を比較できます。
[600ms]
テントだけのメタデータ フィルターで候補を絞り、この例ではアルパイン 2P テントが最良の一致として先頭に並びます。
[600ms]
[reflective]
Cosmos のコサイン スコアは類似するほど高くなり、pgvector のコサイン距離は近いほど小さくなります。

## Step 4 · Look up the order with a tool

[confident]
注文状況は、お客様の質問との類似性ではなく、PostgreSQL を照会する Python ツールから取得します。
[600ms]
接続には Microsoft Entra トークンと TLS を使い、クエリのパラメーターで入力値を SQL から分離します。
[600ms]
[reflective]
返された行が回答の根拠となり、長い注文履歴をたどる際にはキーセット ページネーションを使えます。

## Step 5 · Fast and affordable on both engines

[confident]
この調整前後の棒は、Contoso のワークロードで実測した保証ではなく、調整の目標を表しています。
[600ms]
Cosmos DB のインデックス選択は RU 課金に影響し、PostgreSQL のパラメーター、ベクトル インデックス、接続プーリングはクエリの動作に影響します。
[600ms]
[reflective]
まず RU 課金と待ち時間を測定し、実際の利用を代表するデータで一度に一つずつ変更を試してください。

## Step 6 · Optional: zoom out to the architect view

[confident]
アシスタントの図を残したまま、下のビューでは Contoso 全体のデータ アーキテクチャに視野を広げます。
[600ms]
注文には Azure SQL ファミリを選べ、生のチャットやログは Data Factory を経由して Data Lake Storage に流れます。
[600ms]
[reflective]
Databricks がそのデータを準備、分析することで、個々のお客様の依頼を超えた構成が見えてきます。

## Step 7 · Contoso ships the assistant

[confident]
完成した図は、質問の分割、埋め込み、検索、事実の取得、ストアの調整をつないでいます。
[600ms]
Cosmos DB は記憶と意味を担い、PostgreSQL は事実を担うと同時に、意味の検索にも使えます。
[600ms]
[reflective]
任意のアーキテクチャ ビューもこの動作例に並び、各ストアの役割が意図して選ばれていることを示しています。
