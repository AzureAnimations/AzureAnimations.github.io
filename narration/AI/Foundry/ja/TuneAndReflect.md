# Narrator Script — Foundry · Tune the Model: Parameters, Reflection and Hybrid Flows

**Source animation:** [TuneAndReflect.html](../../../../journeys/AI/Foundry/TuneAndReflect.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/foundry/openai/how-to/reasoning>
- <https://learn.microsoft.com/azure/foundry/openai/concepts/prompt-engineering>
- <https://learn.microsoft.com/azure/architecture/ai-ml/guide/ai-agent-design-patterns>
- <https://learn.microsoft.com/azure/foundry/openai/concepts/model-router>

---

## Step 1 · Same prompt, different run: what a parameter changes

[curious] モデルは、次の単語を、候補の中から1つずつ選んでいきます。だから、同じプロンプトでも、実行のたびに結果が変わることがあります。
[600ms]
[calm] パラメータは、その選び方を左右する設定です。下に並ぶ5つの名前は、リクエストと一緒に送る、実際の設定です。
[600ms]
[reassuring] ここに出てくるContoso Outfittersのタグラインは、あくまでイメージです。実際のモデルの出力は、実行のたびに変わるからです。

## Step 2 · Temperature and top_p: spread versus focus

[calm] Temperatureは、次の単語の選ばれやすさを調整します。低いと内容が絞られ、高いとバラエティが増えます。
[600ms]
[curious] Top Pは、可能性の低い単語を切り落とします。
[600ms]
[serious] 調整するのは、どちらか一方だけにしましょう。ここのパーセンテージは、固定のスコアから計算した例で、実際のモデルで測った値ではありません。

## Step 3 · Max tokens and stop sequences: length and cost

[calm] 最大トークン数は、モデルが書ける量の上限です。停止シーケンスは、どこで止めるかを伝えます。
[600ms]
[confident] この2つで、出力の長さと、それに伴うコストを抑えられます。
[600ms]
[concerned] ただし、上限が小さすぎると、答えが途中で切れてしまいます。ここでは1つのチップが1トークンを表していますが、実際のトークンは、単語の一部であることがよくあります。

## Step 4 · Reasoning models: effort instead of temperature

[curious] 推論モデルの多くは、TemperatureやTop Pを受け付けません。代わりに、reasoning effortで、どのくらい深く考えさせるかを設定します。
[600ms]
[serious] 考えている分も、出力トークンとして数えられます。推論モデルでは、上限は推論と、見える出力の両方を合わせた量です。
[600ms]
[calm] 指定できるeffortの値はモデルによって違います。ここにあるバーは、あくまでイメージです。

## Step 5 · Think step by step: when it helps, when it does not

[calm] 標準モデルに、考えた手順を示してもらうと、答えを確かめやすくなります。
[600ms]
[curious] 推論モデルは、もともと先に考えてから答えます。だから、手順ではなく、目標を伝えましょう。
[600ms]
[confident] 推論モデルの思考を見るには、reasoning summaryパラメータを使います。ほかの方法で取り出すことは、サポートされていません。

## Step 6 · Self-critique: draft, critique, revise

[curious] 作る側が下書きを作り、チェックする側が、はっきりした基準で下書きを確かめます。そして、作る側が直します。
[600ms]
[confident] チェックする側が承認するか、上限に達すると、ループは終わります。リフレクションループや、クリティックループとも呼ばれます。
[600ms]
[serious] 明確な合格基準と、繰り返しの上限、そして、人間のレビュアーなどの代替手段が必要です。

## Step 7 · Grade the reasoning: chain-of-thought evaluators

[curious] L L Mのジャッジに、各ステップを採点させることもできます。推論を読み取って、スコア、合格か不合格かのラベル、その理由を返します。
[600ms]
[calm] その理由を読めば、次の対応を決められます。この結果カードは、Foundryの評価器が返すフィールドを示した例です。
[600ms]
[serious] Task Adherenceは、プレビューです。ジャッジ自体もモデルの呼び出しなので、チェックのたびに推論のコストがかかります。

## Step 8 · Try it: change one parameter, watch the answer

[excited] では、試してみましょう。設定をひとつずつ切り替えて、何が変わるかを見てください。言葉づかい、長さ、そして答えの終わり方です。
[600ms]
[amused] これは、ライブのモデルではなく、台本どおりのデモです。回答はあらかじめ用意されています。
[600ms]
[encouraging] まず設定をひとつずつ試して、そのあと2つを組み合わせてみましょう。

## Step 9 · Hybrid flow: rules first, model for the gray area

[calm] はっきりしたケースは、コードの固定ルールで処理します。速くて、安くて、結果も予測できます。
[600ms]
[curious] モデルに回すのは、グレーゾーンだけです。その結果は、人が確認することもできます。ステップごとに、誰が決めるかを選びます。モデルか、通常のコードか、人間かです。
[600ms]
[confident] 手順がはっきりしていて、厳格なルールに従うなら、通常のコードのほうが速くて安く、信頼性も高くなります。

## Step 10 · Route by task: small first, big on escalation

[calm] どのリクエストにも、最大のモデルが必要なわけではありません。ルーターは、簡単な作業を小さなモデルに、難しい作業を大きなモデルに振り分けます。
[600ms]
[curious] モデルルーターは、リクエストごとに、複雑さ、必要な推論、タスクの種類を見て、モデルを選びます。
[600ms]
[confident] エスカレートの矢印は、製品の設定ではなく、自分で組むルーティングのロジックです。小さなモデルが判断に迷ったときに使います。

## Step 11 · Tuning at a glance

[calm] 習慣は3つです。設定を調整する、出力を確認する、モデルとルールを組み合わせる。
[600ms]
[reflective] A I 103のこの部分では、まさにこれが求められています。どのポイントも、今見てきたステップに対応しています。
[600ms]
[proud] 試験の目標の表現は、学習ガイドから取っています。最新の内容は、ガイドで確認してください。
