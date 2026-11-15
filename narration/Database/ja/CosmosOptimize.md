# Narrator Script — Cosmos DB: パフォーマンスの最適化

**Source animation:** [CosmosOptimize.html](../../../journeys/Database/CosmosOptimize.html)
**Language:** ja

角かっこ内は話し方の指示です。[600ms] は文と文の間のポーズを表します。

<!-- Fact source: https://learn.microsoft.com/en-us/training/modules/optimize-query-performance-azure-cosmos-db/ · Learning path: https://learn.microsoft.com/en-us/training/paths/develop-ai-solutions-azure-cosmos-db/ -->

## Step 1 · Measure before you tune

[curious] Contoso の製品検索が遅いと感じたら、設定を推測で変えるのではなく、まずクエリ メトリックを確認します。
[600ms]
[calm] 取得したドキュメント数と返されたドキュメント数を、インデックスの使用状況や要求課金とともに比較します。
[600ms]
[encouraging] 不足しているインデックスを追加し、変換が完了するまで待ってから、もう一度測定しましょう。

## Step 2 · The indexing policy decides what is indexed

[confident] インデックス ポリシーでは、すべてのプロパティを同じように扱わず、どの製品プロパティにインデックスを付けるかを決めます。
[600ms]
[calm] 広く対象にする既定のポリシーと、このワークロードが実際にクエリするフィールドを対象にした選択的なポリシーを比較します。
[600ms]
[reassuring] 不要なプロパティを範囲インデックスから外すと、重要な検索用のインデックスを残しながら、維持に必要な処理を減らせます。

## Step 3 · Composite index for filter + sort

[curious] Contoso は製品をカテゴリで絞り込み、価格順に並べますが、フィルターだけを支援しても並べ替えの処理は残ります。
[600ms]
[confident] 修正したクエリでは、並べ替えにフィルター対象のプロパティも含め、対応する複合インデックスを組み合わせます。
[600ms]
[serious] プロパティの順序と並べ替えの方向を両方合わせ、要求課金が改善するかを測定しましょう。

## Step 4 · Pick a vector index by dataset size

[confident] ベクトル インデックスは、データセットの規模と、検索精度、速度、要求課金のバランスで選びます。
[600ms]
[calm] カードでは、全件を正確に比較するフラット方式、圧縮したフラット方式、大きなコレクション向けの diskANN を比較しています。
[600ms]
[encouraging] どのワークロードでも同じインデックスが最適だと考えず、同じベクトルとクエリで適切な候補を試しましょう。

## Step 5 · Every index trades read speed for write cost

[serious] インデックスは検索コストを下げる助けになりますが、追加するたびに製品の書き込み時の処理も増えます。
[600ms]
[calm] 書き込みが多いワークロードでは絞ったポリシーが適し、読み取りが多い場合はクエリを支えるインデックスを増やす意味があります。
[600ms]
[reassuring] インデックスを置き換えるときは、先に新しいものを追加し、変換が完了してから古いものを削除します。

## Step 6 · Consistency is a latency and RU dial

[confident] 一貫性もワークロードに合わせて選び、読み取りに求める新しさと、待ち時間や要求課金のバランスを取ります。
[600ms]
[calm] 表では五つのレベルを比較し、Contoso のチャットで自分の書き込みを読み取るために、セッションが強調されています。
[600ms]
[serious] 複数のサービスがそのやり取りを処理する場合は、セッションのコンテキストを引き継げるよう、セッション トークンも渡します。

## Step 7 · Contoso tunes the product container

[confident] Contoso は、製品コンテナーの既定の設定を、実際のクエリの使われ方に沿った判断へ置き換えます。
[600ms]
[calm] 選択的なパス、独立したベクトル インデックス、対応する複合インデックス、セッションの一貫性が、それぞれ異なる処理を支えます。
[600ms]
[serious] この比較は説明用の例なので、読み取りと書き込みへの効果は、実測した要求課金で確認しましょう。

## Step 8 · Optimizing Cosmos DB, all in one

[confident] 一つのコンテナーを中心に、クエリを測定し、インデックス ポリシーを整え、並べ替えを支援する判断を組み合わせます。
[600ms]
[calm] すべての設定を最大にするのではなく、検索体験に合うベクトル インデックスと一貫性レベルを選びます。
[600ms]
[encouraging] 変更後はメトリックを再確認し、根拠に基づくこの進め方を PostgreSQL のテーブルとクエリにも生かしましょう。
