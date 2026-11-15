# Narrator Script — GitHub · Harden Your Workflows: Tokens, Pinning, Injection and Attestations

**Source animation:** [HardenYourWorkflows.html](../../../journeys/GitHub/HardenYourWorkflows.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/en-us/azure/developer/github/connect-from-azure-openid-connect>

---

## Step 1 · A pipeline is a path into production

[calm] ワークフローはコードを実行し、シークレットを持ち、お客様向けにリリースもできます。つまり、本番環境への入り口です。
[600ms]
[serious] 外部の人が入力できるテキストは、プルリクエストでもイシューでも、サードパーティのアクションでも、すべて侵入経路になりえます。
[600ms]
[determined] このレッスンでは、Contoso Weather Shopのリリースワークフローを題材に、弱点を1つずつ強化していきます。

## Step 2 · GITHUB_TOKEN: per run, scoped, short-lived

[calm] GitHubは、ジョブが始まる前に、ジョブごとに新しいトークンを作ります。
[600ms]
[confident] このトークンがアクセスできるのは、ワークフローがあるリポジトリだけで、ジョブが終わると期限切れになります。
[600ms]
[serious] どのアクションも、githubトークンのコンテキストから読み取れます。自分で渡していなくてもです。だから、できることを制限しておきましょう。

## Step 3 · Least privilege with permissions

[calm] permissionsキーを使って、ジョブに必要な権限だけをトークンに与えます。
[600ms]
[confident] おすすめは、トークンをデフォルトで読み取り専用にして、必要なジョブだけ権限を引き上げることです。権限を1つでも指定すると、指定しなかった権限はすべてなしになります。
[600ms]
[serious] パーソナルアクセストークンは別物です。人に紐づいた、保存されたシークレットだからです。GitHubのトークンでは足りないときだけ使いましょう。

## Step 4 · Script injection: untrusted input in run:

[curious] 攻撃はこうして起こります。GitHubは、シェルが始まる前に、式をその値に置き換えます。
[600ms]
[serious] 攻撃者がその値を書き込んでいれば、それがそのままスクリプトの一部になります。ブランチ名にさえ、シェルの構文を仕込めます。
[600ms]
[concerned] タイトル、本文、ブランチ名、ラベルには注意してください。これらが危険な入力です。

## Step 5 · The fix: an environment variable, quoted

[calm] 対策は、値を環境変数に入れて、データとして読むことです。
[600ms]
[impressed] これで、同じ悪意あるタイトルもただの文字列になり、余計なものは何も実行されません。
[600ms]
[confident] シェルでは変数を二重引用符で囲みます。アクションに渡すときは、入力として値を渡しましょう。

## Step 6 · Trust an action before you run it

[serious] 侵害されたアクションが1つあるだけで、ワークフローが使うシークレットを見られてしまい、トークンでリポジトリに書き込まれるおそれもあります。
[600ms]
[confident] だから、誰が書いたアクションかを確認して、認証済みクリエイターのバッジを探しましょう。シークレットが意図しないホストに送られていないかも、監査してください。
[600ms]
[calm] そのうえで、許可の範囲を絞ります。GitHubが作ったアクション、認証済みのMarketplaceクリエイター、または名前を指定したアクションだけです。

## Step 7 · Pin to a full commit SHA

[calm] アクションのリポジトリに誰かがアクセスできてしまうと、タグは後から別のコードに付け替えられます。
[600ms]
[confident] 完全なコミットSHAなら、指すコミットはただ1つです。そのSHAが、フォークではなく、アクション本来のリポジトリのものかどうかも確認しましょう。
[600ms]
[determined] そのうえで、アクションを完全な長さのコミットSHAにピン留めするよう求めるポリシーで、強制します。

## Step 8 · Immutable releases

[curious] 不変リリースを公開すると、そのタグとファイルはロックされます。
[600ms]
[impressed] バージョン4.2.0が何を指すのか、誰にも気づかれずに書き換えることはできなくなります。
[600ms]
[confident] タイトルとノートは編集できます。また、リリースのアテステーションが自動で作られるので、ユーザーが検証できます。

## Step 9 · Environments: a gate before production

[calm] 環境を使えば、人が承認する、タイマーが終わる、ブランチが許可されている、という条件がそろうまで、デプロイを保留できます。
[600ms]
[confident] シークレットは、これらのルールを通るまでロックされたままです。承認は、必須レビュアーが1人いれば十分です。
[600ms]
[serious] Prevent self-reviewをオンにして、自分の実行を自分で承認できないようにしましょう。

## Step 10 · OIDC: no stored cloud secret

[curious] OIDCでは、ジョブがGitHubに短期間有効なトークンを要求して、それをAzureに提示します。
[600ms]
[confident] Azureは、あなたがMicrosoft Entra IDに設定したフェデレーション資格情報とそのトークンを照合します。だから、クラウドのパスワードをGitHubに保存する必要はありません。
[600ms]
[serious] ジョブには、idトークンの書き込み権限が必要です。それから、信頼できないリポジトリがトークンを要求できないように、トラストに条件を加えましょう。

## Step 11 · Artifact attestations: sign it, verify it

[calm] ビルドでは、何をビルドしたのか、どこから来たのかを示す声明に署名します。
[600ms]
[confident] デプロイする前に、GitHubのコマンドラインツールでその声明を検証しましょう。
[600ms]
[reflective] 署名するのは、リリースするものだけです。テストビルドのすべてに署名する必要はありません。それから、アテステーションが結びつけるのはソースとビルドです。コードが安全だという証明ではありません。

## Step 12 · Recap: a hardening checklist

[calm] トークンからデプロイまで、1つのワークフローを守る8つの習慣です。
[600ms]
[confident] トークンは最小権限に、信頼できないテキストは環境変数経由に、信頼して許可したアクションはSHAにピン留めして、リリースは不変にします。
[600ms]
[proud] さらに、環境のゲート、OIDC、そしてデプロイ前に検証するアテステーションです。これが、G H 200のオートメーションの保護と最適化のスキル領域です。
