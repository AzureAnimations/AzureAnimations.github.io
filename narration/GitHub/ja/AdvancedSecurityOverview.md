# Narrator Script — GitHub · GitHub Advanced Security: Three Suites, One Picture

**Source animation:** [AdvancedSecurityOverview.html](../../../journeys/GitHub/AdvancedSecurityOverview.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-500>

---

## Step 1 · One repo, three different risks

[calm] ContosoのMayaのリポジトリには、問題が3つあります。漏えいしたキー、古いパッケージ、そして安全でないコードです。
[600ms]
[concerned] 困ったことに、1つのチェックだけでは、3つ全部は見つかりません。種類ごとに、別のチェッカーが必要だからです。
[600ms]
[curious] では、GitHubは、これをどうカバーしているのでしょうか。このレッスンで、その全体像を見ていきます。

## Step 2 · Three suites, three questions

[calm] GitHubは、セキュリティツールを3つのスイートにまとめています。それぞれのスイートが、リポジトリについての1つの疑問に答えます。
[600ms]
[confident] Secret Protectionは、シークレットが漏れていないかを確認します。Supply Chain Securityは、パッケージが安全かを確認します。Code Securityは、自分のコードが安全かを確認します。
[600ms]
[reassuring] G H 500の学習ガイドでは、この3つの名前が使われています。Supply Chain Securityは、以前はDependabotと依存関係レビューと呼ばれていたグループです。

## Step 3 · The Security tab: where alerts live

[calm] リポジトリのアラートは、すべて1つのタブに集まります。これがセキュリティタブで、サイドバーには、アラートの種類とレポート用のツールが並んでいます。
[600ms]
[confident] Dependabot、コードスキャン、シークレットスキャンのアラートが、まとめて表示されます。レポートの窓口になるのは、セキュリティポリシーとアドバイザリーです。
[600ms]
[curious] GitHub dot comでは、このタブの名前は「Security and quality」です。古いドキュメントでは、単に「Security」と呼ばれています。

## Step 4 · Public, private, licensed: what you get

[calm] 使える機能は、リポジトリによって違います。どのプランでも使える機能もあります。依存関係グラフとDependabotアラートがそうです。
[600ms]
[confident] パブリックリポジトリでは、さらに多くの機能が無料で使えます。シークレットスキャン、プッシュ保護、コードスキャン、Autofixなどです。
[600ms]
[serious] プライベートリポジトリで残りの機能を使うには、Secret ProtectionかCode Securityのライセンスが必要です。価格は、ここでは扱いません。

## Step 5 · How each suite finds problems

[curious] スイートごとに、問題を見つける方法が違います。
[600ms]
[confident] シークレットは、パターンで照合します。脆弱なパッケージは、GitHub Advisory Databaseと照合します。安全でないコードは、CodeQLのクエリで見つけます。
[600ms]
[impressed] シークレットスキャンは、Gitの履歴をすべてチェックします。Dependabotは、新しいアドバイザリーが公開されたときや、依存関係グラフが変わったときに、アラートで知らせてくれます。

## Step 6 · Stop it early, or check before merge

[calm] アプローチは2つあります。1つ目は予防優先で、プッシュ保護がプッシュをブロックするように、問題を発生源で止めます。
[600ms]
[confident] もう1つはゲート方式です。いったん作業を受け入れて、マージの前に、プルリクエストでチェックします。コードスキャンのマージ保護や、依存関係レビューがこれにあたります。
[600ms]
[reassuring] 優れたチームは、両方を使っています。G H 500の試験では、この2つの比較が問われます。

## Step 7 · Security overview: risk and coverage

[calm] セキュリティ概要は、組織全体を見渡せるビューです。
[600ms]
[curious] リスクビューでは、あらゆる種類のアラートが、どこに溜まっているかが分かります。カバレッジビューでは、どのリポジトリが、どの機能を使っているかが分かります。
[600ms]
[confident] つまり、まだ保護が有効になっていないリポジトリを、見つけられるわけです。ここの数字は、架空のものです。

## Step 8 · Who does what

[calm] 1つのアラートに、3人が関わります。開発者のMayaは、コードを直します。
[600ms]
[confident] セキュリティマネージャーのNoorは、すべてのアラートを見渡して、追跡します。管理者のRaviは、機能を有効にして、ルールを設定します。
[600ms]
[reassuring] セキュリティマネージャーは、実際にある組織のロールです。機能を設定するのは、オーナーとリポジトリ管理者です。

## Step 9 · Who sees alerts, and delegated bypass

[calm] アラートを見られるのは、適切なアクセス権を持つ人だけです。書き込み、メンテナンス、管理者の権限を持つ人と、組織のオーナーです。設定で、ほかの人を追加することもできます。
[600ms]
[curious] 次は、プッシュ保護です。委任されたバイパスがない場合、コントリビューターは、誰にも確認せずに、自分の判断でブロックを回避できます。
[600ms]
[confident] 委任されたバイパスを有効にすると、バイパスするには、レビュー担当者がリクエストを承認するか、拒否します。

## Step 10 · Dismissing an alert: reason and note

[calm] 修正しないアラートを、閉じることもあります。そのときは、実態に合った理由を選びましょう。
[600ms]
[confident] そして、メモを追加します。メモはアラートのタイムラインに残るので、監査担当者が、理由を確認できます。
[600ms]
[serious] それと、忘れないでください。コミットしてしまったシークレットは、アラートを却下したあとでも、失効させるまでは、漏えいしたものとして扱います。

## Step 11 · A secure SDLC on one page

[calm] セキュリティは、計画から監視まで、すべての段階に関わります。そして、各段階に、3つのスイートの機能があります。
[600ms]
[confident] リポジトリが本格的に動き出す前に、シークレットを止めて、パッケージを最新に保ちます。マージの前には、スキャンとレビューを行い、ゲートで確認します。
[600ms]
[reassuring] マージのあとは、アラート、セキュリティ概要、キャンペーンを見守ります。この5つの段階は、学習用の枠組みです。

## Step 12 · Recap: pick the suite for each risk

[calm] Mayaのリポジトリに戻りましょう。リスクごとに、対応するスイートがあります。そして、スイートごとに、チェッカーとアラートがあります。
[600ms]
[confident] 漏えいしたキーは、Secret Protectionの担当です。古いパッケージは、Supply Chain Securityです。安全でないコードは、Code Securityです。
[600ms]
[proud] ここまでが、G H 500の最初のスキル分野、GitHubのセキュリティスイートと、機能、エコシステムです。
