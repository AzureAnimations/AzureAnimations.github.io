# Narrator Script — GitHub · Security Operations: Prioritise, Remediate and Govern

**Source animation:** [SecurityOperations.html](../../../journeys/GitHub/SecurityOperations.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://docs.github.com/en/code-security/securing-your-organization>
- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-500>

---

## Step 1 · A thousand alerts, one team

[calm] Contosoは、すべてのスキャナーをオンにしました。すると今度は、セキュリティ概要に、4人では到底読み切れない数のオープンなアラートが並んでいます。
[600ms]
[concerned] さて、どこから手をつければいいのでしょうか。
[600ms]
[confident] このレッスンでは、4つのステップで進めます。アラートを特定し、優先順位をつけ、まとめて修正し、例外を認める人を管理します。

## Step 2 · CVE, CWE and GHSA

[curious] ほぼすべてのアラートに、3つの識別子が付いています。それぞれ、答えてくれる質問が違います。
[600ms]
[confident] CVEは、公開されている、特定の脆弱性1件です。CWEは、その背景にある弱点の種類です。GHSAは、GitHubにあるアドバイザリーのレコードです。
[600ms]
[calm] GitHubはCVE採番機関なので、CVE IDを割り当てられます。検索、フィルター、報告には、用途に合った識別子を使いましょう。

## Step 3 · Severity, EPSS and exposure

[calm] 重大度は、欠陥がどれだけ深刻かを、低から重大で示します。EPSSは、今後30日間に悪用される可能性の高さを示します。
[600ms]
[confident] 露出度は、自分のコードが実際に狙われうるかどうかを示します。パッケージは本番用なのか開発用なのか、欠陥のあるコードに到達できるのか、がポイントです。
[600ms]
[reflective] 到達可能性分析は、JavaScriptとTypeScript向けのパブリックプレビューです。キューの優先順位を決める前に、3つのシグナルをすべて確認しましょう。

## Step 4 · A remediation workflow

[confident] どのアラートも、同じ5つのステップをたどります。トリアージ、割り当て、修正、検証、クローズです。
[600ms]
[calm] アラートは、個人、チーム、あるいはAIエージェントに割り当てられます。修正のプルリクエストが新しいスキャンを動かすので、マージの前に変更がチェックされます。
[600ms]
[reassuring] 変更はすべて、アラートのタイムラインに残ります。修正しない場合は、理由とコメントを添えて却下しましょう。

## Step 5 · Security campaigns

[curious] セキュリティキャンペーンは、関連するアラートをまとめて、開発者に期限と連絡先を示し、セキュリティチームがバックログの減り具合を追えるようにします。
[600ms]
[confident] 作成は、セキュリティ概要から行います。テンプレートか自分のフィルターを選んで、名前、期限、キャンペーンマネージャーを設定します。
[600ms]
[impressed] アラートは、オープン、進行中、修正済み、却下のいずれかで追跡します。コードスキャンのアラートには、Copilot Autofixが自動で動きます。

## Step 6 · Bulk actions and auto-dismiss

[calm] 多数のアラートを、1つの理由でまとめて却下できます。あるいは、アラートが届いた時点で、ルールに任せることもできます。
[600ms]
[confident] 自動トリアージルールは、通知が出る前に、Dependabotのアラートを却下したりスヌーズしたりできます。プリセットはGitHubが用意していて、カスタムルールにはCode SecurityかAdvanced Securityが必要です。
[600ms]
[serious] どちらにしても、理由は記録しましょう。理由、コメント、タイムライン、監査ログが証跡になります。あとで必ず誰かに聞かれます。

## Step 7 · Alert ownership

[calm] すべてのアラートには、3つの役割が関わります。開発者が、修正します。
[600ms]
[confident] セキュリティチームは、キュー全体を管理します。セキュリティマネージャーのロールには、全リポジトリの読み取りアクセス、すべてのセキュリティアラートの書き込みアクセス、そしてセキュリティ概要へのアクセスがあります。
[600ms]
[curious] 管理者は、みんなが従うルールを決めます。セキュリティマネージャーのロールを割り当てるのは、組織のオーナーです。

## Step 8 · Delegated bypass and exceptions

[calm] プッシュやアラートが、本当に例外であることもあります。そんなときは委任して、指名したレビュアーに判断してもらいます。
[600ms]
[confident] 委任バイパスでは、ブロックされたプッシュからバイパスを申請でき、レビュアーが承認か拒否を決めます。委任された却下も、コードスキャン、シークレットスキャン、Dependabotのアラートで、同じように使えます。
[600ms]
[reassuring] バイパスも却下も記録されるので、すべての判断が記録に残ります。

## Step 9 · Rulesets that block a merge

[confident] ルールセットを使えば、重大度のポリシーをゲートにできます。しきい値を決めると、それを超えるプルリクエストはマージできません。
[600ms]
[curious] このルールは、Require code scanning resultsといいます。解析がまだ実行中のときや、設定されていないときも、ブロックされます。ボタンを押して、ゲートが変わる様子を見てみましょう。
[600ms]
[calm] 設定できるのは、リポジトリ管理者と組織のオーナーです。

## Step 10 · Tailor detection

[curious] 検出は、全員に同じ設定で済むものではありません。リスクに合ったCodeQLのクエリスイートを選びましょう。
[600ms]
[confident] デフォルトとsecurity-extendedは、デフォルトセットアップで使えます。security-and-qualityとカスタムスイートには、高度なセットアップが必要です。
[600ms]
[encouraging] シークレットスキャンに、自社のトークン形式を覚えさせることもできます。正規表現で書いたカスタムパターンを使います。

## Step 11 · Shift left, end to end

[calm] 一番早いチェックが、一番安く済みます。問題を早く見つければ、バックログに溜まりません。
[600ms]
[confident] プッシュの時点では、プッシュ保護がシークレットをブロックします。プルリクエストでは、依存関係レビューとコードスキャンが報告します。マージの時点では、ルールセットでブロックできます。
[600ms]
[reassuring] マージのあとも、Dependabotのアラートとスキャンが、見張り続けます。

## Step 12 · Recap: a monthly security review

[calm] Contosoのセキュリティチームは、今では月に1回集まっています。議題の1つ1つが、このレッスンのアイデアを、平易な言葉にしたものです。
[600ms]
[confident] アラートを特定し、優先順位をつけ、まとめて修正し、例外を認める人を見直します。そのうえで、強制して、検出をチューニングします。
[600ms]
[proud] これで、G H 500の学習ガイドにある、セキュリティ運用のスキルをカバーできました。次は、自分の組織で試してみましょう。
