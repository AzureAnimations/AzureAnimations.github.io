# Narrator Script — Cosmos DB: ベクトル検索

**Source animation:** [CosmosVectorSearch.html](../../../journeys/Database/CosmosVectorSearch.html)
**Language:** ja

読み方: 角かっこのスタイルは声の調子を示し、[600ms] は文の間の休止を示します。

<!-- Sources: https://learn.microsoft.com/en-us/training/paths/develop-ai-solutions-azure-cosmos-db/ ; https://learn.microsoft.com/en-us/training/modules/implement-vector-search-azure-cosmos-db/ -->

## Step 1 · Search by meaning, not keywords

[curious] 顧客は濡れずに過ごす方法を尋ねていますが、Contoso の製品には防水ジャケットという説明が付いています。
[600ms]
[calm] 顧客の言葉だけを一致させると、このつながりを見逃しますが、埋め込みはテキストの意味をベクトルで表します。
[600ms]
[reassuring] ベクトルを比較すれば、質問と説明の言い回しが異なっていても、関連する製品を検索できます。

## Step 2 · Tell the container about its vectors

[confident] ベクトルを保存する前に、埋め込みの場所と値の比較方法をコンテナーへ伝えます。
[600ms]
[calm] ポリシーには、プロパティのパス、数値型、距離関数、次元数を指定します。
[600ms]
[serious] アカウントでベクトル検索を有効にし、コンテナー作成時にポリシーを設定して、格納と比較の設定を埋め込みに合わせてください。

## Step 3 · Keep the embedding on the item

[confident] 製品テキストが Azure OpenAI の埋め込みモデルを通り、隣に表示された数値ベクトルへ変わります。
[600ms]
[calm] そのベクトルは、表しているコンテンツから切り離さず、製品情報と同じ項目に保存します。
[600ms]
[reassuring] モデルの出力をポリシーの次元数と一致させれば、格納した項目を互換性のある類似性クエリで検索できます。

## Step 4 · Rank items by similarity

[confident] まず、製品項目に使ったものと同じモデルで、顧客の質問を埋め込みに変換します。
[600ms]
[calm] ベクトル距離のクエリは、質問のベクトルと格納済みの埋め込みを比較し、件数を絞った一致候補を順位付きで返します。
[600ms]
[reassuring] 表示されたスコアは並び順の例であり回答品質の保証ではなく、結果を絞ることでアシスタントが検討する製品候補を用意できます。

## Step 5 · Narrow, rank, then match words

[confident] まずメタデータ フィルターで、適切なカテゴリ、公開状態、日付のデータに検索対象を絞ります。
[600ms]
[calm] ベクトルのランキングは意味を捉え、全文検索のランキングはコンテンツ内の重要な単語を捉えます。
[600ms]
[reassuring] 逆数順位融合で二つのランキングを統合すれば、Contoso は一方だけでなく、意味と単語の両方の手掛かりを利用できます。

## Step 6 · Keep embeddings fresh

[confident] 製品テキストが変わると、古い埋め込みは顧客が読む内容を表さなくなる可能性があります。
[600ms]
[calm] 変更フィードが変更された項目を Azure Functions に渡し、新しい埋め込みを取得して書き戻します。
[600ms]
[reassuring] コンテンツのハッシュを確認して変化のないテキストをスキップすれば、メタデータだけの更新で再度埋め込む必要がなく、不要な処理の繰り返しも避けられます。

## Step 7 · One semantic search pipeline

[confident] パイプライン全体では、取り込みと質問が、ベクトル ポリシーとインデックスを持つ一つのコンテナーへつながります。
[600ms]
[calm] 製品テキストと顧客の質問には同じ埋め込みモデルを使い、検索では適切なフィルターとともに一致候補を順位付きで返します。
[600ms]
[reassuring] 変更フィードの分岐が編集された項目を更新し、検索用のベクトルを、それが表すコンテンツと結び付け続けます。

## Step 8 · Vector search in Cosmos DB, all in one

[confident] ベクトル格納の設定、互換性のある埋め込みでの検索、結果の絞り込みと更新という三つの役割をまとめて捉えましょう。
[600ms]
[calm] ベクトル距離が順位を付け、フィルターと全文検索が選択の手掛かりを加え、変更フィードが変更された内容と最新の埋め込みを結び付けます。
[600ms]
[encouraging] 検索の流れができたので、次のレッスンではインデックス、要求のコスト、整合性へ進みます。
