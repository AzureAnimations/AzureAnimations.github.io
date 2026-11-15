# Narrator Script — GitHub · Evaluate and Tune a GitHub Agent

**Source animation:** [EvaluateAndTuneAgents.html](../../../journeys/GitHub/EvaluateAndTuneAgents.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/training/modules/agent-tooling-mcp-execution-environments/>

---

## Step 1 · It Merged, Then It Broke

[calm] ContosoのストアフロントチームがイシューをCopilotに割り当てました。プルリクエスト231はレビューを通り、マージされました。
[600ms]
[concerned] ところが月曜日、mainのビルドが失敗します。マージが緑でも、良い仕事とは限りません。
[600ms]
[curious] レビューは形だけの手続きではなく、証拠をもとに評価する場面です。では、エージェントの仕事はどう評価すればいいのでしょうか。

## Step 2 · Define Success First

[calm] エージェントが作業を始める前に、期待する結果と制約をイシューに書いておきましょう。
[600ms]
[confident] イシューはプロンプトだと考えてください。良い解決策とはどういうものかを示す受け入れ基準と、どのファイルを変更すべきかという指示を加えます。
[600ms]
[encouraging] こうしておけば、作業を採点するための物差しができます。

## Step 3 · Qualitative and Quantitative Signals

[curious] 数字は何が起きたかを教えてくれます。それが正しいかどうかは、人の判断です。両方使いましょう。
[600ms]
[confident] 定量的なシグナルは測定値で、テスト結果、所要時間、スキャンの件数、変更の大きさなどです。定性的なシグナルは判断によるもので、アプローチや命名、意図についてのレビューコメントがそうです。
[600ms]
[reflective] どちらも、イシューが求めていた内容と照らして読みましょう。ここに出てくる数字は、説明用に作ったものです。

## Step 4 · Automated Scans as Signals

[calm] Copilot cloud agentは、CodeQL、依存関係のチェック、シークレットスキャンで、自分のコードを検査します。
[600ms]
[confident] CodeQLは、コードのセキュリティ上の問題を探します。依存関係は、GitHub Advisory Databaseと照合されます。シークレットスキャンは、キーやトークン、その他の機密情報を探します。
[600ms]
[serious] 結果は判定ではなく、シグナルとして読んでください。変更がイシューの求めどおりに動くかどうかまでは、分かりません。

## Step 5 · Read the Evidence

[curious] 症状から始めて、原因へとさかのぼりましょう。
[600ms]
[confident] まずワークフローの実行と差分を見て、次に計画、最後にセッションログです。Copilotのコミットメッセージには、どれもそのログへのリンクがあります。
[600ms]
[serious] デフォルトでは、書き込み権限のある人が承認するまで、Copilotのプッシュでワークフローは実行されません。だから、先に変更内容を確認しましょう。

## Step 6 · Classify the Root Cause

[calm] 失敗は、最初に間違えたのがどこかで分類します。クラスを選ぶと、手がかりが表示されます。
[600ms]
[confident] 推論ミスは、エージェントが違う問題を解いたということです。ツールの誤用は、コマンドが違うか、アクセス権が広すぎるということです。コンテキストや環境は、セットアップ不足、ブロックされたリクエスト、古いコンテキストを指します。
[600ms]
[determined] 見つかったクラスに対して修正しましょう。一度にあちこち変えると、何が効いたのか分からなくなります。

## Step 7 · Walk Through One Failure

[curious] ここでは、セッションログに間違ったツール呼び出しが残っています。
[600ms]
[concerned] エージェントは、pnpmを使うリポジトリでnpm installを実行し、生成されたフォルダまで編集していました。症状は、2つ目のロックファイルができてビルドが壊れたことです。
[600ms]
[confident] 原因は、ルールが足りなかったことです。どのパッケージマネージャーを使うか、指示のどこにも書かれていませんでした。直すべきは原因です。

## Step 8 · Tune the Instructions

[calm] 足りないルールは、エージェントが読む場所に書きます。リポジトリのカスタム指示ファイルです。
[600ms]
[confident] インストール、テスト、ビルドの方法と、どのフォルダが生成物かを書き足しましょう。パス別の指示ファイルや、エージェント用の指示ファイルも使えます。
[600ms]
[encouraging] Copilotが自分の環境でビルドとテストできれば、すぐにマージできるプルリクエストを出せる可能性が高くなります。

## Step 9 · Tune the Tools and Access

[calm] エージェントには、タスクに必要なツールだけを渡しましょう。
[600ms]
[confident] タスクで使わないツールは外します。別のツールは、サーバー全体ではなく1つの操作だけに絞ります。カスタムエージェントのプロファイルでは、ツールを指定しないと、すべてが有効になります。
[600ms]
[reassuring] 原則は、仕事をこなせる範囲で最小限のアクセスにすることです。

## Step 10 · Tune the Memory

[calm] メモリは、助けになるものでなければいけません。惑わせてはいけません。
[600ms]
[confident] Copilotがリポジトリについて覚えている内容を、引用元とあわせて確認し、古いものは削除しましょう。書き込み権限のある人なら、リポジトリの設定からできます。
[600ms]
[reflective] Copilotは引用を現在のブランチと照合しますが、それも1つの判断にすぎません。常に守らせたいことは、カスタム指示に書きましょう。

## Step 11 · Re-run and Compare

[curious] チューニングしたセットアップで同じタスクをもう一度実行し、2回の実行を同じ物差しで採点します。
[600ms]
[impressed] 1回目は6項目のチェックのうち3つに合格しました。指示、ツール、メモリを変更した2回目は、6つすべてに合格です。
[600ms]
[serious] 良くなった実行が1回あっても、それは証明ではなくシグナルです。できれば変えるのは一度に1つにして、似たタスクを何度か試してから信頼しましょう。

## Step 12 · Recap: Evaluate, Diagnose, Tune

[calm] 成果、制約、シグナル、スキャンという物差しで、作業を評価します。
[600ms]
[confident] ログ、計画、差分、ワークフローの実行から原因を突き止め、クラスを決めます。調整するのは1つだけです。指示、ツールとアクセス、メモリのどれかです。
[600ms]
[proud] そして、もう一度実行します。これで、G H 600の評価、エラー分析、チューニングの範囲をカバーできました。
