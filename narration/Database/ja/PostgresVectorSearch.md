# Narrator Script — PostgreSQL: pgvector によるベクトル検索

**Source animation:** [PostgresVectorSearch.html](../../../journeys/Database/PostgresVectorSearch.html)
**Language:** ja

角かっこ内は話し方の指示です。[600ms] は文と文の間のポーズを表します。

<!-- Fact source: https://learn.microsoft.com/en-us/training/modules/implement-vector-search-azure-database-postgresql/ · Learning path: https://learn.microsoft.com/en-us/training/paths/develop-ai-solutions-azure-database-postgresql/ -->

## Step 1 · Meaning search, plus relational joins

[curious] Contoso のアシスタントは、商品の説明と依頼の言葉が違っても、顧客の意図に合う商品を見つける必要があります。
[600ms]
[confident] pgvector は PostgreSQL に類似性検索を追加し、アプリケーションで使うリレーショナルなレコードの隣に埋め込みを保存します。
[600ms]
[reassuring] 意味による発見とリレーショナルな結合を組み合わせられ、管理するベクトル ストアを別に増やす必要がありません。

## Step 2 · Enable pgvector, add a vector column

[confident] まずサーバーで pgvector を許可し、データベースで有効にして、インストールされていることを確認します。
[600ms]
[calm] 商品のコンテンツを埋め込みモデルに渡し、生成されたベクトルを行のメタデータと一緒に保存します。
[600ms]
[serious] ベクトル列の次元数をモデルの出力に合わせ、生成する埋め込みを格納できるようにしましょう。

## Step 3 · Three metrics, three operators

[curious] 近さの測り方は選べ、ユークリッド距離、コサイン距離、負の内積ではベクトルを異なる方法で比較します。
[600ms]
[calm] コサインは長さではなく方向に着目するため、テキスト埋め込みでよく使われます。
[600ms]
[serious] 埋め込みモデルが推奨する尺度に従い、この例では距離が小さいほど近い一致として並ぶことを覚えておきましょう。

## Step 4 · Fast search: IVFFlat or HNSW

[confident] 完全スキャンはすべての行を比較しますが、近似インデックスは再現率の一部と引き換えに検索を高速化できます。
[600ms]
[calm] IVFFlat は既存のベクトルをクラスタリングし、HNSW は階層型グラフを構築するため、通常はより多くのメモリを必要とします。
[600ms]
[encouraging] 制約によって IVFFlat が有利な場合を除き HNSW から始め、インデックスとクエリの距離の尺度を合わせましょう。

## Step 5 · Keep embeddings and the index fresh

[serious] 編集したコンテンツに古い埋め込みが残ったり、データ分布が変わったりすると、検索品質も変化することがあります。
[600ms]
[confident] 変更されたコンテンツをバッチで再埋め込みし、データの変化に応じてインデックスの再構築を検討します。
[600ms]
[reassuring] 埋め込みモデルを変えるときは、一つの列にモデルを混在させず、並列の列にデータを入れて検証してから切り替えます。

## Step 6 · Semantic retrieval with a filter

[confident] 質問を埋め込みに変換し、メタデータで顧客が関心を持つカテゴリの商品に候補を絞ります。
[600ms]
[calm] 距離のしきい値で弱い一致を外し、候補をすべて返すのではなく、残った中から近い順に結果を返します。
[600ms]
[encouraging] 自分のデータでしきい値を調整し、関連する一致を取得することと、絞り込みすぎないことのバランスを取りましょう。

## Step 7 · RAG: PostgreSQL is the retriever

[confident] 質問の埋め込みと取得を経て、近いチャンクとそのメタデータがプロンプトに入るまでの流れを追います。
[600ms]
[calm] PostgreSQL がコンテキストを取得し、言語モデルがそのコンテキストを使って回答を組み立てます。
[600ms]
[serious] 出典を引用できるようチャンクを元のドキュメントに結び付け、生成の問題と決めつける前に取得品質を評価しましょう。

## Step 8 · All in one: vector search in PostgreSQL

[confident] 一つの PostgreSQL データベースがリレーショナルな行と埋め込みを保持し、アシスタントの質問を取得したコンテキストと回答へつなぎます。
[600ms]
[calm] 拡張機能、距離の尺度、インデックス、更新処理、メタデータ フィルターが、この取得経路をそれぞれ支えます。
[600ms]
[encouraging] 次はデータベースとベクトル ワークロードを合わせて調整し、関連性も意識しながら待ち時間に対処しましょう。
