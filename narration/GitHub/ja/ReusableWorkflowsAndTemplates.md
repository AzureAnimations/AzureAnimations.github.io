# Narrator Script — GitHub · Reuse Automation: Starter Workflows, Reusable Workflows and Composite Actions

**Source animation:** [ReusableWorkflowsAndTemplates.html](../../../journeys/GitHub/ReusableWorkflowsAndTemplates.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/en-us/azure/developer/github/github-actions>

---

## Step 1 · Twelve repos, twelve copies

[calm] ContosoのリポジトリはどれもCIファイルを、まったく同じものとして1つずつコピーして持っています。1つの仕組みが、12個のコピーになっているわけです。
[600ms]
[concerned] 今、1か所直すだけで、12回の編集が必要です。しかも、遅かれ早かれ、コピーはバラバラになっていきます。
[600ms]
[curious] 解決策は、コピーを増やすことではありません。GitHubには、自動化を再利用する方法が3つあって、G H 200の試験では、その違いが問われます。

## Step 2 · Starter workflows

[calm] 1つ目はスターターワークフローです。足場のようなもので、選んでコピーをコミットすると、それ以降はそのファイルはあなたのものです。
[600ms]
[confident] ActionsのNew workflowから見つかります。コピーしたあとは独立しているので、自由に編集してかまいません。
[600ms]
[reflective] GitHubのドキュメントでは、今はワークフローテンプレートと呼んでいますが、学習ガイドではまだスターターワークフローです。同じものです。

## Step 3 · Organization starter workflows

[curious] 組織でも、独自のものを提供できます。dot githubという名前のリポジトリの、ワークフローテンプレートのフォルダに置いて、テンプレートごとにプロパティファイルを付けます。
[600ms]
[confident] 各テンプレートの隣には小さなプロパティファイルがあり、名前と説明が必須です。
[600ms]
[serious] 公開範囲には注意してください。プライベートのdot githubリポジトリが提供できるのは、プライベートリポジトリだけです。テンプレートを使う人には、読み取りアクセスが必要です。

## Step 4 · Reusable workflows

[confident] 2つ目は、再利用可能なワークフローです。パイプラインは、中央のリポジトリで1回だけ定義します。
[600ms]
[curious] 呼び出し側は、それぞれusesの行で指定して、まったく同じコードを実行します。呼び出される側のファイルは、workflow callイベントで動くようにしておく必要があります。
[600ms]
[serious] 呼び出しを書く場所に注意しましょう。ジョブの中に書きます。ステップの中には書けません。

## Step 5 · workflow_call: inputs, secrets, outputs

[calm] 呼び出されるワークフローは、受け取るものと返すものを宣言します。
[600ms]
[confident] 呼び出し側は、withキーで入力を、secretsキーでシークレットを渡し、出力はneedsで受け取ります。
[600ms]
[intrigued] 入力は、宣言した型に合わせる必要があります。string、number、booleanのどれかです。それと、ステップの出力は、いったんジョブの出力に対応づけないと、ワークフローから返せません。

## Step 6 · Passing secrets

[calm] 呼び出されたワークフローには、シークレットは自動では渡りません。渡すものは、1つずつ名前を指定します。
[600ms]
[confident] あるいは、secrets inheritですべてまとめて渡すこともできます。これは、同じ組織かエンタープライズの中で使えます。
[600ms]
[serious] シークレットが届くのは、直接呼び出したワークフローだけです。A、B、Cと連鎖している場合、CがシークレットをもらえるのはBがそれを渡したときだけです。

## Step 7 · Pin the caller to a version

[calm] アットマークの後ろの文字列で、実行するバージョンが決まります。ブランチ、リリースタグ、コミットSHAのどれかです。
[600ms]
[curious] ブランチは、新しいコミットのたびに動きます。リリースタグは、自分で公開するバージョンです。タグとブランチが同じ名前なら、タグが優先されます。
[600ms]
[confident] 安定性にもセキュリティにも、完全なコミットSHAが一番安全な選択です。

## Step 8 · Composite actions

[calm] 3つ目は、コンポジットアクションです。複数のステップを、usesの1行にまとめます。
[600ms]
[confident] 呼び出し側のジョブの中で1つのステップとして動き、メタデータファイルに記述します。中のrunステップには、どれもシェルの指定が必要です。
[600ms]
[serious] 専用のリポジトリに置くことも、自分のリポジトリのフォルダに置くこともできます。ただし、中身はステップだけで、ジョブは含められません。

## Step 9 · Starter vs reusable vs composite

[curious] 目的は同じで、道具は3つ。では、どう選べばいいでしょうか。
[600ms]
[confident] 何を共有したいかで選びます。スターターワークフローは、コピーして自分のものにするファイルです。再利用可能なワークフローは、ジョブの中で呼び出す、中央のパイプライン全体です。
[600ms]
[reassuring] そして、コンポジットアクションは、いくつかのステップを1つにまとめたものにすぎません。

## Step 10 · Who can call what

[calm] 再利用にも、アクセスのルールがあります。呼び出し側は、ワークフローがあるリポジトリにアクセスできる必要があり、そのActionsの設定でも許可されていなければなりません。
[600ms]
[confident] パブリックの呼び出し側が使えるのは、パブリックのワークフローだけです。プライベートの呼び出し側は、パブリックもプライベートも使えます。呼び出されるプライベートリポジトリには、Accessの設定が必要です。
[600ms]
[concerned] GitHubからの注意が1つあります。プライベートリポジトリをほかのワークフローに開放すると、そこの外部コラボレーターは、それを使った実行のログを見られるようになります。

## Step 11 · Consume a shared workflow

[calm] 開発者は、プルリクエストで小さな呼び出し側を追加します。共有ファイルを呼び出すだけの、数行です。
[600ms]
[impressed] すると、共有ワークフローがそのプルリクエストで実行され、ジョブがチェックとして表示されます。
[600ms]
[serious] 呼び出し側もコードなので、レビューしましょう。アットマークの後ろの参照と、どのシークレットを渡しているかを確認します。

## Step 12 · Recap: pick the right tool

[calm] 似た仕組みが3つありました。スターターワークフローは、コピーして自分のものにするもの。再利用可能なワークフローは、呼び出して使う中央のワークフローです。
[600ms]
[confident] そして、コンポジットアクションは、数個のステップを1つにまとめたものです。
[600ms]
[proud] G H 200に向けて、これで3つを区別して、安全に使い、テンプレートや再利用できるコンポーネントを、自信を持って管理できるはずです。
