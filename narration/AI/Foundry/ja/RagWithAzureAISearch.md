# Narrator Script — Foundry · RAG with Azure AI Search

**Source animation:** [RagWithAzureAISearch.html](../../../../journeys/AI/Foundry/RagWithAzureAISearch.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/search/retrieval-augmented-generation-overview>
- <https://learn.microsoft.com/azure/search/search-indexer-overview>
- <https://learn.microsoft.com/azure/search/vector-search-integrated-vectorization>

---

## Step 1 · A model that has never read your files

[curious] MayaはContosoのアシスタントにリモートワークポリシーについて簡単な質問をします。
[600ms]
[concerned] モデルはトレーニングデータしか知らず、それには締め切り日があります。 Contosoのプライベートで変化する人事ファイルはそこにありません。
[600ms]
[serious] つまり、モデルが知らないときにやることをします。つまり推測し、答えは自信があるが根拠がないのです。

## Step 2 · RAG: retrieve, augment, generate

[calm] リトリーバル・アグメンテッド・ジェネレーション( RAG)は、これを3つの手で解決します。
[600ms]
[confident] まずは適切な文章を調べます。それからそれらをプロンプトに追加します。そしてモデルにそこから答えさせます。
[600ms]
[reassuring] モデルは再学習されません。事実は質問の時間にプロンプトに反映されるため、内容は毎日変わることがあります。

## Step 3 · Ingest: from files to a search index

[curious] インデクサーはデータソースからコンテンツをAzure AI Searchの検索インデックスに引き寄せます。
[600ms]
[confident] スケジュールで再実行できるため、ファイルが変わってもインデックスが新鮮なままになります。
[600ms]
[calm] インデックスは検索サービス上の別の検索可能なコピーです。これがクエリを速くする理由で、サービスは質問時に元の情報源に戻らないからです。

## Step 4 · Enrich: read, chunk, and embed

[curious] 次に、スキルセットがすべてのドキュメントに対して AI スキルを実行します。
[600ms]
[confident] あるスキルはスキャンしたテキストを読み、別のスキルはそれをパッセージに分割し、さらに別のスキルは各パッセージをベクトルに変換します。
[600ms]
[impressed] 表や図のスキルもあります。統合ベクトル化では、インデックス時に埋め込みが繰り返し行われ、クエリ時にも繰り返し行われます。

## Step 5 · The index: one chunk, one document

[calm] 各チャンクはインデックス内の独立した検索ドキュメントとなります。
[600ms]
[confident] フィールド属性は、検索、フィルタリング、引用の返し方を決定します。ベクトルフィールドは埋め込みを保持し、その寸法は埋め込みモデルと一致しなければなりません。
[600ms]
[serious] 返せるのは取得可能なフィールドだけなので、引用が戻りたい場合はソースリンクフィールドを残しておきましょう。

## Step 6 · Four ways to ask the index

[curious] インデックスに質問をする方法は4つあります。
[600ms]
[confident] 全文は単語に一致します。ベクターは意味に一致します。ハイブリッドは両方のリクエストで対応します。
[600ms]
[impressed] そしてセマンティック・ランカーは最良の結果を並べ替え、最も有用な文章が上位に上がるようにします。

## Step 7 · Try it: which mode finds the answer?

[encouraging] さあ、自分でやってみて。質問を選んで、検索モードを選んで。
[600ms]
[curious] どのチャンクがモデルに到達するかを見て、答えチャンクがランキングのどこに位置するかに注目してください。
[600ms]
[reflective] ここでのランキングは、作り話のContoso塊に基づく示すものだ。実際の結果は、あなたのコンテンツ、分野、そして埋め込みモデルに依存している。

## Step 8 · Ground a Foundry agent on the index

[confident] エージェントを根付かせるために、検索サービスにプロジェクト関連を追加しましょう。
[600ms]
[calm] 次にエージェントのAzure AI Searchツールを索引に向けると、引用付きの回答が返ってきます。
[600ms]
[serious] キーよりもプロジェクトのマネージドアイデンティティを優先してください。プライベートネットワーキングにはMicrosoft Entraが必要ですので、正確なロールの割り当てはLearnで確認してください。

## Step 9 · When one search is not enough

[curious] 複雑な質問に対して、一度の検索では十分でないこともあります。
[600ms]
[confident] エージェント検索は、情報源の前に知識ベースを配置します。サブクエリを計画し、並列に実行し、再ランク付けし、根拠のある結果を返します。
[600ms]
[reflective] Foundryでは、FoundryIQがエージェントにその知識ベースを提供し、その下にAzure AI Searchがエンジンとして機能しています。一部の部分はまだプレビューなので、ターゲットにするAPIバージョンを確認してください。

## Step 10 · Only retrieve what the caller may see

[serious] 取得にはリスクが伴います。すべての人がすべてのドキュメントを見てよいわけではありません。
[600ms]
[confident] つまり、クエリ時の呼び出し者の身元で結果をフィルターしてください。制限されたチャンクは、誰がモデルに尋ねてもプロンプトには届きません。
[600ms]
[calm] セキュリティフィルターは、フィルター可能なフィールド上のユーザーまたはグループの値にマッチします。プレビューでは、組み込みのドキュメントレベルのアクセス制御が利用可能です。

## Step 11 · Measure it, then tune cost and latency

[curious] 次は測定です。取得の品質と回答を、取得、グラウンディング、関連性などの評価ツールでスコアリングします。
[600ms]
[confident] そして、回答の質とコストや応答時間をトレードするレバーを調整します。
[600ms]
[reflective] 評価はそれ自体が独立したテーマなので、このステップはその位置を示すだけです。ここでのバーの高さは例示です。

## Step 12 · RAG with Azure AI Search, all in one

[calm] 一度だけコンテンツを取り込み、充実させてください。各質問に必要な方法でクエリを行ってください。
[600ms]
[confident] エージェントをグラウンディングし、ID に基づいて結果を絞り込み、その後測定と調整を行います。
[600ms]
[proud] それがA I 103回収目標の背後にあるパイプラインであり、他のベクターストアで同じRAGアイデアを実践するA I 200とも相性が良いです。
