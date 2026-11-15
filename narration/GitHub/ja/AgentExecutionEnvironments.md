# Narrator Script — GitHub · Where the Agent Runs: Environments, Firewalls and Safe Failure

**Source animation:** [AgentExecutionEnvironments.html](../../../journeys/GitHub/AgentExecutionEnvironments.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/training/modules/agent-tooling-mcp-execution-environments/>

---

## Step 1 · Three places an agent can run

[calm] Raviは、Mayaのissueをエージェントに任せます。最初に決めるのは、どこで動かすかです。それによって、エージェントがどこまで届くか、そして誰がそのマシンの面倒を見るかが決まるからです。
[600ms]
[confident] 場所は3つあります。自分のノートパソコン、Actionsランナー、そしてクラウドのサンドボックスです。サンドボックスは、セッションのためにGitHubが作成して管理する、隔離されたLinux環境です。
[600ms]
[serious] セッションをどこで動かすかは、開始するときに選びます。あとから変更することはできません。

## Step 2 · A short-lived environment, set up first

[calm] Actionsの場合、クラウドエージェントは、新しく用意された一時的な環境で動きます。
[600ms]
[confident] 最初に、セットアップファイルで環境を準備します。エージェントがビルドやテストに必要とする、ツールと依存関係をインストールします。これは、ジョブが1つだけの通常のワークフローで、デフォルトブランチでのみ有効になります。
[600ms]
[reassuring] ステップが失敗した場合、エージェントは残りのセットアップステップを飛ばして、その時点の環境で作業を始めます。

## Step 3 · The firewall: allowed hosts only

[curious] デフォルトでは、ファイアウォールが、エージェントのインターネットアクセスを制限します。
[600ms]
[confident] CopilotがGitHubで必要とするホストは、常に許可されます。推奨リストには、パッケージレジストリなど、よく使うホストが含まれています。オーナーとリポジトリ管理者は、さらに追加でき、新しいセッションから反映されます。それ以外はすべてブロックされ、プルリクエストで報告されます。
[600ms]
[serious] ファイアウォールの対象は、エージェントが実行するコマンドです。MCPサーバーやセットアップステップは対象外です。また、完全なセキュリティ対策ではありません。

## Step 4 · Different limits per environment

[curious] 開発、テスト、本番は、同じ動きをするべきではありません。1つ選んで、比べてみましょう。
[600ms]
[confident] 環境は、名前のついたステージで、それぞれにシークレットと保護ルールがあります。必須レビュアーを設定すると、ジョブが実行される前に人が承認するので、デプロイは待機状態になります。
[600ms]
[calm] エージェントにも、専用のシークレットと変数があります。リポジトリごと、または組織ごとに設定します。

## Step 5 · Start an agent from a workflow

[curious] ワークフローでは、キーボードの前に誰もいなくても、ActionsランナーでCopilot CLIを実行できます。
[600ms]
[confident] まずトリガーがあり、次にジョブのセットアップ、CLIのインストール、そしてシークレットのトークンによる認証と進みます。最後に、プロンプトを1つ実行して、使ってよいツールを一覧にします。
[600ms]
[reflective] ジョブに与えるのは、必要最小限の権限です。ほとんどの自動化では、GitHubはAgentic Workflowsを推奨しています。こちらはプレビュー中です。

## Step 6 · Branches and pull requests it may create

[calm] エージェントは作業を作ることはできますが、何をリリースするかは、人が決めます。
[600ms]
[confident] エージェントは、自分専用のブランチか、作業を頼まれたプルリクエストのブランチにプッシュして、ドラフトのプルリクエストを開きます。人がそれをレビューして、準備完了にして、マージします。
[600ms]
[reassuring] ブランチ保護は、そのまま適用されます。また、デフォルトでは、エージェントのワークフローは、誰かが承認するまで待機します。

## Step 7 · When a step fails

[concerned] 失敗することはあります。それは想定のうちです。
[600ms]
[confident] セッションログには、各コマンドとその出力、さらにエージェントの推論とツールが記録されます。まず、コマンド、出力、終了コードを読みましょう。
[600ms]
[calm] そのうえで、次の一手を選びます。再試行、ロールバック、エスカレーションのどれかです。

## Step 8 · Retry, with a limit

[calm] 再試行は、やり直しのチャンスであって、終わりのないループではありません。
[600ms]
[confident] 試行回数を決めて、試行の間は待ち、上限に達したら止めます。再試行するのは、2回実行しても害のないステップだけにしましょう。
[600ms]
[serious] 試行回数を使い切ったら、止めて、人に引き継ぎます。これはスクリプトに自分で書き込むパターンで、組み込みの設定ではありません。

## Step 9 · Roll back

[serious] マージした変更が問題を起こしたら、元に戻す必要があります。
[600ms]
[confident] リバートすると、マージコミットを取り消す新しいプルリクエストが作られます。だから、その修正も、ほかの変更と同じレビューとチェックを受けます。実行するには、書き込み権限が必要です。
[600ms]
[calm] 競合する場合は、代わりにGitでリバートしましょう。エージェントのプルリクエストがクローズまたはマージされたら、そのブランチは削除してください。

## Step 10 · Escalate to a person

[calm] 上限に達したときや、次の手が分からないときは、人に引き継ぎます。
[600ms]
[confident] いい引き継ぎには、何を頼まれたのか、何を試したのか、エラー内容、そして何が変わったのかが書かれています。さらに、セッションログとプルリクエストへのリンクも付けます。
[600ms]
[encouraging] そのあとで、担当者は、フォローアップのプロンプトで実行中のセッションを軌道修正することも、ブランチを引き継ぐこともできます。

## Step 11 · Trace every action

[curious] 誰がこれを変更して、なぜ変更したのか。その答えは、3つの記録にあります。
[600ms]
[confident] プルリクエストには、何を依頼して、どうレビューされ、何がマージされたのかという履歴が残ります。コミットの作成者はCopilotで、共同作成者が担当者で、署名も付いています。そしてセッションログへのリンクもあります。
[600ms]
[reassuring] セッションログには、エージェントの推論とツールが残ります。管理者は、監査ログのイベントも確認できます。

## Step 12 · Recap: from error to escalation

[calm] 実行する前に、まず、どこで動かすかを決めます。続いて、セットアップのステップ、ファイアウォール、環境の制限、ワークフロー、そして許可するアクションを決めます。
[600ms]
[confident] 失敗したら、エラーを読んで、上限の範囲内で再試行します。それでもだめなら、ロールバックして、事実を添えてエスカレーションします。
[600ms]
[proud] 追跡は、必ず、プルリクエスト、コミット、セッションログの3つでたどります。これで、G H 600の環境に関するスキルは、一通り押さえました。
