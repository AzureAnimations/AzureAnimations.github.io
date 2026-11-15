# Narrator Script — Copilot Studio · Copilot Studio: Agent Flows

**Source animation:** [AgentFlows.html](../../../journeys/CopilotStudio/AgentFlows.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/microsoft-copilot-studio/flows-overview>
- <https://learn.microsoft.com/microsoft-copilot-studio/advanced-flow-create>
- <https://learn.microsoft.com/microsoft-copilot-studio/flows-request-for-information>
- <https://learn.microsoft.com/microsoft-copilot-studio/flow-manage-monitor>

---

## Step 1 · A refund can’t be improvised

[curious] Contoso Supportチャットは上手です。しかし返金は単なるチャットではなく、ルールのあるプロセスです。
[600ms]
[serious] 毎回同じ手順、同じ順序で、必ず同じことを踏まなければなりません。
[600ms]
[concerned] 場当たり的な対応に任せると、1件の返金リクエストがいくつもの異なる経路をたどる可能性があり、それがリスクになります。

## Step 2 · Agent flow or topic?

[calm] どちらも決定論的なので、同じ入力でも常に同じ出力が得られます。
[600ms]
[confident] 会話のためにトピックが構築されます。エージェントフローは、その背後で起こるビジネスプロセスのために構築されます。
[600ms]
[reflective] 良い目安として、仕事がユーザーと話すならトピックを使いましょう。ステップやシステム、人であればエージェントフローを作りましょう。

## Step 3 · Create the flow

[calm] 日常の言葉でフローを説明することもできますし、デザイナーで自分で構築することもできます。
[600ms]
[confident] エージェントが呼び出せるフローはトリガーから始まり、エージェントに応答して終了します。
[600ms]
[encouraging] エージェントのツールページから作成すると、トリガーと応答アクションCopilot Studio追加されます。

## Step 4 · Inputs in, outputs out

[curious] トリガーは入力パラメータを、応答アクションは出力パラメータを伝えます。
[600ms]
[confident] エージェントは入力を入力し、フローが応答すると出力を読み込みます。
[600ms]
[serious] 後でパラメータを変更した場合は、エージェント内でフローを更新して再公開してください。スキーマの不一致は悪いリクエストエラーの一般的な原因です。

## Step 5 · Configure actions and connectors

[calm] トリガーと応答の間には、4つのファミリーから選ばれた行動のためのレーンがあります。
[600ms]
[confident] コネクターアクションは接続を使って通信先のサービスに到達します。
[600ms]
[encouraging] エージェントフローはプレミアムフローなので、 Microsoft 365、サードパーティ、カスタムのいずれであれプレミアムコネクターも機能します。

## Step 6 · Hand the flow to the agent

[confident] フローが4つの要件を満たしたら、それを公開します。その後、エージェントのツールページから追加します。
[600ms]
[curious] その説明が重要で、それがオーケストレーターがいつ呼ぶべきかを知る方法だからです。
[600ms]
[calm] エージェントレベルでオーケストレーターが直接呼び出すか、あるトピック内でアクションノードとして追加できます。

## Step 7 · Ask a human, then carry on

[curious] 時には、正しい答えが人であることもあります。人間の介入、承認や情報の要請が流れを一時停止させます。
[600ms]
[confident] 誰かに質問し、その後その答えを続けます。
[600ms]
[reflective] エージェントは応答アクションのみを待つので、長い人間の待ち時間をその後に置いてください。そこに置かれたアクションは、30日間のフロー実行制限まで実行を続けられます。

## Step 8 · When a step fails

[concerned] 失敗は起こります。タイムアウトは起こり、データは悪いもので、レビュアーは時々返答しません。
[600ms]
[confident] 警告アイコンを選択すると、各ケースでフローがどのように反応するか確認できます。
[600ms]
[reassuring] パターンとしては、主要なステップをTryスコープにまとめ、Tryが失敗したときに実行されるCatchスコープにリカバリーを配置します。

## Step 9 · Watch every run

[calm] すべてのエージェントフローには、概要、アクティビティ履歴、分析ビューがあります。
[600ms]
[confident] これらが合わさることで、失敗を修正し、ラン全体の傾向を見つけるのに役立ちます。
[600ms]
[reflective] Analyticsは新しい実行を表示するのに最大30分かかることがあり、分析はソリューションフロー専用です。

## Step 10 · Agent flows: All in One

[calm] 振り返りましょう。決定論的なステップは毎回同じプロセスを保ちます。
[600ms]
[confident] 必要なときには人が介入し、失敗に備えて計画を立て、すべての実行を確認できます。
[600ms]
[proud] これら6つのスキルは、A B 620学習ガイドにある「エージェントフローの作成と監視」目標です。
