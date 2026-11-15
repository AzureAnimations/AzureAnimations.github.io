# Narrator Script — Foundry · Build and test your first agent in the Foundry portal

**Source animation:** [BuildYourFirstAgent.html](../../../../journeys/AI/Foundry/BuildYourFirstAgent.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/foundry/quickstarts/get-started-code>
- <https://learn.microsoft.com/azure/foundry/agents/concepts/development-lifecycle>
- <https://learn.microsoft.com/azure/foundry/agents/how-to/tools/file-search>
- <https://learn.microsoft.com/azure/foundry/observability/concepts/trace-agent-concept>

---

## Step 1 · From a model to an agent

[calm] Contoso Outfittersにはデプロイ済みのモデルがあり、ほとんどの質問に答えられます。でも、Contosoのことは何も知りません。
[600ms]
[curious] このギャップを埋めるのがエージェントです。モデルに、指示と知識とツールを組み合わせます。
[600ms]
[confident] これは、エージェントとは何かを扱った前回のレッスンのおさらいです。返品ヘルパーが、どのステップにも同じように登場します。

## Step 2 · Create the agent: name and model

[curious] Foundryポータルで「エージェント」を開き、「エージェントを作成」を選びます。名前を付けて、使うデプロイ済みモデルを選んでください。
[600ms]
[serious] 名前は慎重に決めましょう。いったん付けたエージェント名は、あとから変更できません。
[600ms]
[calm] コードでも、この名前でエージェントを呼び出すことになります。

## Step 3 · Write the instructions

[calm] 指示は、エージェントの役割と制限を決めるものです。ここでは、スコープのルールをオンとオフで切り替えられます。
[600ms]
[curious] 次に、関係のない質問をして、結果を比べてみましょう。ルールがオンなら、エージェントは丁寧に本来の仕事へ話を戻します。
[600ms]
[reassuring] 指示にはっきり制限を書いておく。それが、エージェントを本題から逸らさない、いちばん簡単な方法です。

## Step 4 · Add knowledge

[curious] 知識を追加すると、エージェントは自分たちのファイルに基づいて答えます。Contosoはポリシー文書をアップロードし、インデックスが作成されます。
[600ms]
[confident] エージェントは回答する前に、関連する箇所を検索して、その内容を返信に使います。
[600ms]
[calm] ファイル検索は、知識を追加する方法のひとつです。先にファイルをアップロードして、ベクターストアでインデックス化しておく必要があります。

## Step 5 · Add a tool

[calm] ツールを使うと、エージェントは情報を調べたり、操作を実行したりできます。ツールをひとつ選んで、セットアップを済ませましょう。
[600ms]
[serious] ツールを追加したエージェントは、そのツールの設定が正常に完了しないと保存できません。
[600ms]
[confident] さらに、どんなときにツールを使うのかを、指示に書いておきます。そうすれば、適切なタイミングでツールを使ってくれます。

## Step 6 · Test in the playground: read the tool call

[curious] ではプレイグラウンドでテストします。ツールが必要な質問をして、ツール呼び出しを開き、中身を読んでみましょう。
[600ms]
[intrigued] どのツールが実行されて、何が渡されて、何が返ってきたのかを確認できます。
[600ms]
[confident] トレースには、その入力と出力が記録されます。想定したツールをエージェントが呼び出したかどうか、確認できます。

## Step 7 · Save a version

[serious] ここまでの内容は、まだ下書きです。ポータルを離れると、保存していない変更は失われます。
[600ms]
[confident] 保存すると、変更されない新しいバージョンが作られます。バージョンどうしを比べたり、必要に応じてロールバックしたりできます。
[600ms]
[reassuring] 履歴やモニタリング、完全な評価が必要なら、まずバージョンを保存してください。

## Step 8 · Call the agent by name

[calm] 小さなクライアントアプリなら、ポータルは要りません。サインインしてプロジェクトに接続し、名前を指定してエージェントを呼び出します。
[600ms]
[curious] まず、Azureコマンドラインで一度サインインします。すると、デフォルトの認証情報が、そのサインインを自動で見つけてくれます。
[600ms]
[confident] コードでは、Azure AI Projectsの2ポイントxパッケージを使います。

## Step 9 · Print the reply and follow the conversation

[curious] 会話を作成してメッセージを送り、返信を出力します。
[600ms]
[impressed] 同じ会話で、2つ目のメッセージを送ってみましょう。エージェントは覚えています。会話が、ターンをまたいで履歴を保持しているからです。
[600ms]
[reassuring] だから、フォローアップの質問で、最初の質問をもう一度言う必要はありません。

## Step 10 · Troubleshoot: wrong tool, empty answer, auth error

[serious] 最初のエージェントでつまずく原因は、ほとんどが次の3つのどれかです。ツールの間違い、空の回答、認証エラーです。
[600ms]
[confident] ツールの設定、データ、サインインを順に確認しましょう。トレースを見れば、モデルがツール呼び出しを生成したか、ツールが何を受け取って何を返したかがわかります。
[600ms]
[proud] この3点を押さえれば、最初のエージェントを自信を持って作り、テストして、呼び出せます。
