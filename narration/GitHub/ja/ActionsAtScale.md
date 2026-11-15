# Narrator Script — GitHub · Run Actions at Scale: Runners, Policies, Secrets and Variables

**Source animation:** [ActionsAtScale.html](../../../journeys/GitHub/ActionsAtScale.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/en-us/azure/developer/github/github-actions>

---

## Step 1 · From one team to a thousand repositories

[calm] Priyaのチームは、1つのランナーで、1つのワークフローを動かしていました。これなら簡単です。
[600ms]
[concerned] ところが今は、Contosoの1,000個のリポジトリがActionsを使いたがっていて、どのチームも同じ質問をしてきます。
[600ms]
[confident] Actionsを大規模に使うときのテーマは、ガバナンスです。マシン、アクセス、許可するアクション、シークレット、そしてコストを管理します。

## Step 2 · Hosted runners: what is preinstalled

[calm] GitHubのホステッドランナーには、ランナーアプリと多くのツールが最初から入っていて、メンテナンスもGitHubが行います。
[600ms]
[curious] 何かをインストールする前に、イメージに何が入っているかを確認しましょう。セットアップジョブのログと、イメージのreadmeで確認できます。
[600ms]
[confident] ツールは毎週更新されます。だから、セットアップアクションでバージョンを指定しておけば、イメージが変わっても、環境を安定させられます。

## Step 3 · Larger runners and installing software

[curious] もっとパワーが必要ですか。ラージランナーなら、コア、メモリ、ディスクが増えます。ランナーグループ、オートスケール、固定アドレスも使えます。
[600ms]
[confident] ラージランナーは、GitHub TeamとEnterprise Cloud向けです。課金は、ジョブが使った時間の分単位だけです。
[600ms]
[calm] ツールがもう1つ必要になったら、新しいイメージを作らなくても大丈夫です。ジョブの実行中に、セットアップアクションやパッケージマネージャー、コンテナでインストールできます。

## Step 4 · Self-hosted runners

[calm] セルフホステッドランナーでは、自分のマシンを、有効期間の短いトークンで登録して、ラベルを付けます。
[600ms]
[confident] ジョブは、ラベルでランナーを探します。すべてのラベルが一致する必要があります。スケールセットを使えば、オートスケールできます。
[600ms]
[serious] マシンのパッチ適用は、自分で行います。それと、セルフホステッドランナーはプライベートリポジトリで使いましょう。パブリックリポジトリのフォークから、自分のマシンでコードを実行されてしまうおそれがあるからです。

## Step 5 · Runner groups: who can use which runners

[calm] ランナーグループは、どのリポジトリが、どのランナーにジョブを送れるのかを決めます。
[600ms]
[confident] グループには、ラージランナーやセルフホステッドランナーを入れます。アクセスポリシーは、すべてのリポジトリか、選択したリストのどちらかです。ワークフローからは、グループ名で指定します。
[600ms]
[intrigued] エンタープライズのグループは、オーナーが使えるリポジトリを選ぶまで、組織からは使えない状態になっています。

## Step 6 · Networking: IP allow lists and static IPs

[calm] 既知のアドレスだけを許可するファイアウォールには、安定した送信元が必要です。
[600ms]
[concerned] 標準のホステッドランナーは、使うアドレス範囲が多いので、許可リストには向いていません。
[600ms]
[confident] ラージランナーなら、プールに固定のアドレス範囲を割り当てられます。セルフホステッドランナーなら、自分のIPアドレスが使えます。

## Step 7 · Troubleshoot a runner

[curious] ジョブがいつまでも待たされるのには、必ず原因があります。順番にたどっていきましょう。
[600ms]
[confident] 最初に、ラベルとグループを確認します。次に、ランナーの状態がアイドル、アクティブ、オフラインのどれかを見ます。そのあと、ネットワークと上限を確認します。
[600ms]
[reassuring] 手間のかからない確認から始めましょう。待機中のジョブは、ラベルのタイプミスか、ランナーの状態が原因のことがほとんどです。

## Step 8 · Policies: allow and deny lists

[calm] 管理者は、実行を許可するアクションと再利用可能なワークフローを選べます。
[600ms]
[confident] 許可リスト、拒否リスト、そしてSHAのピン留めで、不要なコードを、ワークフローが始まる前に止められます。
[600ms]
[serious] エンタープライズのポリシーは、組織の設定を上書きできます。また、ピン留めを必須にすると、自分の組織のアクションにも適用されます。

## Step 9 · Secrets and variables by scope

[calm] 値は、適切なレベルで、1回だけ定義します。組織、リポジトリ、環境のどれかです。
[600ms]
[confident] 組織の値は共有されます。環境の値は、1つのデプロイ先のものです。名前が重なったときは、いちばん範囲の狭いレベルが優先されます。
[600ms]
[curious] シークレットは機密性の高い値を保持し、GitHubに届く前に暗号化されます。変数は、ふつうの設定値を保持します。

## Step 10 · Use them, and manage them with the API

[calm] ワークフローでは、変数はvarsコンテキストで、シークレットはsecretsコンテキストで読み取ります。
[600ms]
[confident] どちらも、REST APIで作成できます。シークレットの場合は、公開キーを取得して、値を暗号化してから送信します。変数は、名前と、そのままの値を渡すだけです。
[600ms]
[serious] ログではシークレットがマスクされますが、確実とは限りません。だから、シークレットは絶対に出力しないでください。

## Step 11 · Usage and cost

[curious] ランナーの種類ごとに、カウントの仕方が違います。何が無料で、何が課金されるのかを、把握しておきましょう。
[600ms]
[confident] 標準ランナーは、パブリックリポジトリなら無料です。プライベートリポジトリでは、含まれている使用量から差し引かれます。ラージランナーは、分単位で課金されます。
[600ms]
[reflective] 使用量は、リポジトリの所有者に課金されます。セルフホステッドランナーは、Actionsで使うぶんには無料ですが、マシンの運用費用はかかります。

## Step 12 · Recap: an Actions governance checklist

[calm] Actionsを会社全体に広げる前に確認したい項目が、6つあります。どれも、設定の場所が分かっています。
[600ms]
[confident] ランナー、グループ、ネットワーク、ポリシー、シークレットと変数、そして使用量です。どれも、もう設定の見つけ方が分かっていますね。
[600ms]
[reassuring] 表示される選択肢は、GitHubのプランによって異なります。また、エンタープライズのポリシーが、組織の設定を上書きすることもあります。
