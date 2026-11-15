# Narrator Script — Foundry · Prompt Engineering: Instructions a Model Follows

**Source animation:** [PromptEngineering.html](../../../../journeys/AI/Foundry/PromptEngineering.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/foundry/openai/concepts/prompt-engineering>
- <https://learn.microsoft.com/azure/foundry/openai/concepts/advanced-prompt-engineering>
- <https://learn.microsoft.com/azure/foundry/openai/concepts/system-message>
- <https://learn.microsoft.com/azure/foundry/openai/concepts/safety-system-message-templates>

---

## Step 1 · Same model, very different answers

[curious] モデルは単に前の文字から続くだけです。
[600ms]
[calm] Contoso Outfittersにはヘルプボットがあり、誰かが曖昧なプロンプトを出しています。
[600ms]
[concerned] そのため、推測で空白を埋め、同じモデルでも全く異なる答えが出されます。

## Step 2 · Two prompts, two authors

[calm] 開発者はルールを設定するためにシステムプロンプトを一度書きます。
[600ms]
[curious] 顧客は毎ターンユーザープロンプトをタイプし、モデルは両方を読み取ります。
[600ms]
[confident] チャットモデルは役割を持つメッセージのリストを受け取ります。システムメッセージが最初に来て、最も優先度の高い指示を運びます。

## Step 3 · What a good system message contains

[calm] 5つの小さな部分がほとんどの仕事を担っています:役割とタスク、聴衆とトーン、範囲と境界、アウトプットフォーマット、そして安全ルールです。
[600ms]
[confident] 各パートは具体的に書きましょう。
[600ms]
[serious] 両者が矛盾しないようにし、ボットが迷った時のための代替手段も用意してください。

## Step 4 · Show it, don’t just tell it

[curious] ゼロショットでは、モデルにタスクだけを与えます。フューショットでは、質問と回答の例をいくつか追加します。
[600ms]
[calm] モデルはこれらの例のパターンをコピーするため、返答のトーンや形がより予測しやすくなります。
[600ms]
[reassuring] 例はモデルを変えません。彼らはこの一つのリクエストだけを導きます。

## Step 5 · Give it the facts to use

[serious] モデルは事実が足りないときに推測します。
[600ms]
[confident] だからプロンプトに正しいポリシーを入れ、モデルにはそれだけから答えるように指示してください。それが現実的です:答えはモデルの記憶ではなく、あなたのデータから来ます。
[600ms]
[calm] 情報源に答えが含まれていない場合にどうするかも指示しましょう。

## Step 6 · Ask for the shape your app needs

[curious] コードはフレンドリーな段落を解析できません。ですので、名前付きフィールド付きのJSON固定フォーマットを要求し、小さく安定させるようにしてください。
[600ms]
[calm] シンプルな指示は、丁寧にお願いする形です。
[600ms]
[confident] 確固たる保証として、 Foundry構造化出力をサポートします。 JSONスキーマを提供し、それに続く返信が続きます。

## Step 7 · Try it: switch the parts on and off

[excited] 次はあなたの番です。同じモデル、同じ質問。プロンプトの各部分をオン・オフに切り替えて、答えが変わるのを見てください。
[600ms]
[curious] どのスイッチがどの問題を解決するのでしょうか?
[600ms]
[reassuring] これは簡略化されたデモで、ライブモデルではありませんが、 Foundry遊び場で本物を試すことができます。

## Step 8 · Test it, then tune it

[calm] 一つ変えてから同じテストをもう一度実行します。
[600ms]
[curious] 簡単な質問、例外的なケース、ルールを破ろうとする試みを混ぜ合わせましょう。プロンプトはコードのように扱い、変更ごとにテストセットを再度実行します。
[600ms]
[serious] Learnではこれらの手法は推論モデルには推奨されていないと書かれているので、モデルのガイダンスを確認してください。

## Step 9 · Untrusted text can give orders

[concerned] メールやウェブページ、ファイルはモデルにとって単なるテキストに過ぎません。それらの中の隠れた指示は、あなたの指示を上書きしようと試みることがあります。
[600ms]
[serious] これはプロンプト注入であり、指示が文書内に隠れている場合は間接注入と呼ばれます。
[600ms]
[confident] 防御のスタック:信頼できないテキストをデータとしてラベル付けし、モデルの行動を制限し、プロンプトシールドのような検知を追加する。完璧なものは一つではない。

## Step 10 · A prompt is one layer, not the wall

[serious] システムメッセージでボットを誘導できますが、その気になったユーザーはそれを回避して話しかけることもできます。
[600ms]
[calm] 本当の保護は層が連携することで生まれます。
[600ms]
[reassuring] つまり、モデル選択、グラウンディング、コンテンツ分類器、ユーザー体験の緩和が含まれ、そのうちの一層としてプロンプトが存在します。

## Step 11 · Prompting at a glance

[calm] 明確な指示を書きましょう。例を示しましょう。事実を提示してください。アプリに必要なフォーマットを尋ねてください。
[600ms]
[determined] とことんテストを重ね、プロンプトだけに頼らないでください。
[600ms]
[optimistic] 次に、指示、知識、ツールがどのようにエージェントで結びつくかを見てみましょう。
