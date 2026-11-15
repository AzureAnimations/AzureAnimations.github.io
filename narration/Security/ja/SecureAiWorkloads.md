# Narrator Script — Security · Secure AI workloads in Azure: gateway, guardrails and Defender for AI

**Source animation:** [SecureAiWorkloads.html](../../../journeys/Security/SecureAiWorkloads.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/api-management/genai-gateway-capabilities>
- <https://learn.microsoft.com/azure/foundry/guardrails/guardrails-overview>
- <https://learn.microsoft.com/azure/defender-for-cloud/ai-threat-protection>
- <https://learn.microsoft.com/azure/defender-for-cloud/ai-onboarding>

---

## Step 1 · A Foundry app goes live

[calm] Contoso Assist は呼び出し元に公開されていて、まもなく本番のトラフィックが届きます。セキュリティエンジニアの Priya が、まず知りたいことが3つあります。
[600ms]
[curious] 誰が呼び出してよいのか。会話の中で何が問題になりうるのか。そして、誰かが攻撃したとき、どうやって気づくのか、です。
[600ms]
[confident] このレッスンでは、S C 500 の AI の部分を扱います。Contoso、Priya、アプリは、すべて架空のものです。

## Step 2 · Three layers around one app

[calm] 答えは、1つのアプリを囲む3つの層です。前面にゲートウェイ、内側にガードレール、そして周囲を見守る Defender です。
[600ms]
[confident] 各層が1つの問いに答えます。それぞれ別の Azure の機能なので、設定する場所も別々です。
[600ms]
[curious] ゲートウェイは API Management の機能、ガードレールは Microsoft Foundry の機能、Defender for AI services は Defender for Cloud のプランです。

## Step 3 · AI gateway: one front door

[calm] まずゲートです。API Management をモデル、エージェント、ツールの前に置けるので、すべての AI 呼び出しが、自分で管理できる1か所を通ります。
[600ms]
[confident] AI ゲートウェイは、独立した製品ではなく、API Management の機能のセットです。
[600ms]
[curious] Foundry では、プレビュー機能で、管理の下でオンにします。現在対応しているティアは、Microsoft Learn で確認してください。

## Step 4 · Gateway policies on every call

[calm] ポリシーは、リクエストのたびに順番に実行されます。まず誰が呼び出しているかを確認し、次にトークンを制限し、そのあと何が起きたかを記録します。
[600ms]
[confident] ゲートウェイは、マネージド ID でモデルにアクセスできるので、アプリの中に API キーは必要ありません。
[600ms]
[reassuring] トークンのメトリクスは監視に送られます。プロンプトと応答も記録できるので、使用状況を把握し、悪用を見つけられます。

## Step 5 · Content filters and guardrails

[calm] 次はガードです。ガードレールは、Foundry の中の名前付きのコントロールのセットです。各コントロールは、リスクを選び、どこでチェックするか、一致したときに何をするかを決めます。
[600ms]
[confident] 憎悪、性的、暴力、自傷行為では、ブロックのレベルで、どの重大度までブロックするかが決まります。Low は High だけをブロックし、High は Low、Medium、High をブロックします。
[600ms]
[serious] 分類器は間違えることもあるので、自分のコンテンツでテストしてください。

## Step 6 · Agent guardrails: four checkpoints

[calm] エージェントには、プロンプトのチェックだけでは足りません。ガードレールは、ユーザーの入力、ツール呼び出し、ツールの応答、最終出力を検査できます。
[600ms]
[serious] これはプレビューです。ツールのチェックポイントは、モデレーションに対応したツールでしか動かないので、それ以外のツールはスキャンされません。
[600ms]
[confident] ガードレールが適用されるのは、Foundry Agent Service で作ったエージェントです。頼りにする前に、自分のエージェントの種類を確認してください。

## Step 7 · Try it: guardrail on, prompt replayed

[curious] では、試してみましょう。同じ危険なプロンプトを2回送ります。1回はガードレールをオフ、もう1回はオンにして送ります。
[600ms]
[impressed] スイッチを切り替えて、何が変わるか見てください。コントロールが作動すると、チャットに、どのリスクが、どのチェックポイントで検出されたかが表示されます。
[600ms]
[reassuring] これはモックです。Foundry では、ガードレールを作成して割り当て、プレイグラウンドで、本番ではないモデルやエージェントを使ってテストします。

## Step 8 · Defender for AI services

[calm] 次は見張り役です。プランを1つオンにすると、Defender for Cloud が、プロンプトと応答の中の攻撃を監視して、アラートを出します。
[600ms]
[confident] Prompt Shields や Microsoft の脅威インテリジェンスと連携します。有効にするには、Defender プランで、Owner か Contributor のロールが必要です。
[600ms]
[serious] スキャンするのは、テキストだけです。また、疑わしいプロンプトの証拠がオフになっていると、アラートの中のプロンプトの内容はマスクされます。

## Step 9 · An AI alert, end to end

[serious] ここでは、脱獄の試みが止められ、アラートが上がります。Priya がそれを開いて、証拠をもとに調べます。
[600ms]
[curious] アラートの名前、重大度、戦術は、AI サービス向けの Defender for Cloud のアラートから来ています。
[600ms]
[concerned] 検出されたバリアントが表示されたら、Prompt Shields が試みに気づいたものの、ブロックはしなかったということです。ガードレールの設定を見直すきっかけです。

## Step 10 · Data and AI security dashboard

[calm] Defender for Cloud のビューの1つで、データと AI リソースをまとめて表示します。どれだけ保護されているかがわかり、何から直すべきかも教えてくれます。
[600ms]
[confident] サブスクリプションごとに有効にし、オンにしたプランが反映されます。すべてを見るには、複数のプランと、セキュリティエクスプローラーのロールが必要です。
[600ms]
[reflective] 画面の数字は、架空のものです。

## Step 11 · Which control answers which risk?

[curious] 6つのリスクと、3つの層。それぞれのリスクが、いちばん合うコントロールに収まるところを見てください。
[600ms]
[confident] 呼び出し元の識別とトークンの予算は、ゲートウェイの担当です。有害なプロンプトと危険なツール呼び出しは、ガードレール。実際の攻撃と態勢は、Defender の担当です。
[600ms]
[reflective] 実際の設計では層が重なるので、各カードが示すのは最も近い1つで、唯一の答えではありません。

## Step 12 · Recap: gate it, guard it, watch it

[calm] ゲートを設け、守り、見張る。ゲートウェイは呼び出し元と予算、ガードレールはプロンプトとツール、Defender はアラートと態勢を担当します。
[600ms]
[confident] これで Priya の3つの質問に答えられました。S C 500 のスキルのうち、AI ワークロードのセキュリティに当たります。
[600ms]
[proud] スキルの一覧は時間とともに変わるので、最新の学習ガイドを読んでください。
