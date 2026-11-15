# Narrator Script — Foundry · Evaluate and Observe

**Source animation:** [EvaluateAndObserve.html](../../../../journeys/AI/Foundry/EvaluateAndObserve.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/ai-foundry/concepts/observability>
- <https://learn.microsoft.com/azure/ai-foundry/concepts/built-in-evaluators>
- <https://learn.microsoft.com/azure/ai-foundry/concepts/evaluation-evaluators/risk-safety-evaluators>

---

## Step 1 · It looked fine in the demo

[calm] Contoso Ask Contosoというサポートアシスタントを開発しました。これは注文に答え、ポリシー文書や注文ツールからの質問を返します。
[600ms]
[confident] デモでは3つの質問に完璧に答え、みんな拍手を送りました。
[600ms]
[concerned] しかし、誰もテストしていない質問を持って本物のお客様がやって来て、そこから問題が始まりました。

## Step 2 · One loop: test, ship, trace, watch

[curious] 良いAIアプリは決して完成しません。ループの中にいます:リリース前にテストし、何が動いているかを追跡し、本番環境を監視し、学んだことを修正し、またテストします。
[600ms]
[calm] Microsoft Foundry評価、追跡、モニタリングの3つの部分を名付けています。
[600ms]
[confident] これらが合わさることで、 AIアプリの観察可能性が高まります。

## Step 3 · Write the test cases first

[curious] まずは評価データセットから始めましょう。テスト問題のファイルで、1行に1つずつ、そして期待される答えがある場所に記載されています。
[600ms]
[calm] Foundryはバージョン管理をしているので、すべての実行でまったく同じテストが使われ、データセットはJSONLまたはCSVファイルになっています。
[600ms]
[serious] セットには、ハッピーパスだけでなく、エッジケースや攻撃も入れましょう。

## Step 4 · A judge model grades the answers

[curious] 多くの品質チェックでは、審査員として第二のモデルが使われます。それは質問、ソーステキスト、回答を読み、ルーブリックに照らして採点し、その理由を説明します。
[600ms]
[calm] 地に足をつけるために、審査員として自分のモデルデプロイを持ち込みます。スコアは1から5までで、閾値で合格か不合格に変わります。
[600ms]
[reflective] 一部の評価者はモデルを全く使いません。彼らは単語の重なりを測定するだけで、例えばF1、 BLEU 、 ROUGE。

## Step 5 · Pick the evaluator for the symptom

[calm] 各内蔵の品質評価者は一つの点をチェックします。つまり、チームが見た症状とそれを検出した評価者を一致させるのがコツです。
[600ms]
[curious] ここで試してみてください。苦情を選べば、適切な評価者が輝きます。
[600ms]
[confident] もし何も合わなければ、カスタム評価ツールも作成できますが、まだプレビュー段階です。

## Step 6 · Grade the agent’s steps, not just its words

[curious] エージェントは完璧に正しい音を立てても、間違った道具を選んだり、途中で指示を飛ばしたりすることもあります。
[600ms]
[calm] エージェント評価者は、意図の解決、タスクの遵守、ツールコールの正確性、ツール出力の活用、タスク完了など、各段階を詳細にチェックします。
[600ms]
[serious] 意図の解決、タスクの遵守、タスク完了はまだプレビュー段階であることを念頭に置いてください。

## Step 7 · Safety evaluations: what could go wrong?

[serious] 安全性評価者は、返信をスキャンして有害な内容、コピーされたテキスト、文書内に隠された脱獄を探ります。最後のものは間接攻撃( XPIA)と呼ばれます。
[600ms]
[calm] その結果、欠陥率が生まれます。つまり、フラグが立てられた返信の数です。
[600ms]
[reassuring] Foundry評価サービスがこれらのチェックをホストしているため、ジャッジモデルのデプロイは必要ありません。

## Step 8 · Red teaming: attack it before others do

[serious] 本物の攻撃者が弱点を見つける前に、赤チームのエージェントが決意の強い攻撃者を演じます。多くのプローブを送り込み、その中には変装したものもあります。
[600ms]
[calm] そして、どれくらいの頻度で機能するかを報告します。その数値が攻撃成功率です。これはPyRITというMicrosoftのオープンソースツールキットと安全性評価ツールに基づいて構築されています。
[600ms]
[reflective] 人間のレビューと組み合わせて最も効果的に機能し、ローンチ後のスケジュールスキャンはプレビュー段階です。

## Step 9 · Read a trace, span by span

[curious] トレースは一つのリクエストの物語であり、各スパンはその中の一歩です。スパンを選んで、それが何を示しているか見てみましょう。
[600ms]
[calm] トレーシングはOpenTelemetry上に構築され、 Application Insightsに保存されます。一般的にはプロンプトエージェントやホストエージェント向けに利用可能です。
[600ms]
[concerned] トレースには機密性の高いテキストが含まれることがあるため、共有や保存の前に必ずマスクしてください。

## Step 10 · Monitor production: usage, speed, drift

[calm] ローンチ後、ダッシュボードはトークン、遅延、エラー、品質スコアを記録します。画面上の数字は架空のものです。
[600ms]
[curious] 継続的な評価はライブトラフィックのサンプルをスコアリングするため、苦情を待つことなく品質の変化を察知できます。
[600ms]
[serious] Driftは回答が徐々に悪化していくため、アラートを作動させるはずです。エージェント監視ダッシュボードとこれらのアラートはプレビュー段階です。

## Step 11 · Close the loop: gate every release

[determined] 監視で問題が見つかったら、プロンプト、データ、モデルのいずれかを変えます。そして同じテストを再度実行します。
[600ms]
[curious] 実行を並べて比較し、変更が効果的かどうかを確認し、クラスタ分析を使って失敗をパターンにまとめましょう。
[600ms]
[confident] 最後に、CI と CD のゲートがすべての変更で同じ評価ツールを実行し、スコアが維持される場合にのみリリースします。

## Step 12 · Evaluate, trace, monitor, repeat

[calm] リリース前にテストします。実行されたものを追跡します。生産状況を監視します。次に修正し、次のリリースをゲートします。
[600ms]
[reflective] こうしてAsk Contosoは良いデモから顧客が信頼できるものへと変わったのです。
[600ms]
[proud] このループこそが、 AIアプリが発売日後も長く良好なまま維持される理由です。
