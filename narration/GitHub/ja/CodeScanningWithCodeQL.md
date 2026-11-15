# Narrator Script — GitHub · Code Security: Code Scanning with CodeQL

**Source animation:** [CodeScanningWithCodeQL.html](../../../journeys/GitHub/CodeScanningWithCodeQL.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://docs.github.com/en/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning-with-codeql>
- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-500>

---

## Step 1 · Tests prove it works; scanning asks if it is safe

[calm] Raviのテストは、すべて成功しています。すべて、期待したとおりに動いています。
[600ms]
[concerned] それでも、攻撃されるおそれのあるコードが1行あります。しかも、それを探すテストは、書かれていません。
[600ms]
[confident] コードスキャンは、コードそのものを読んで、危険なパターンを探します。そして、アラートを、該当の行に直接表示します。

## Step 2 · How CodeQL works: build a database, then query it

[curious] CodeQLは、コードをデータとして扱います。まず、コードからデータベースを作ります。言語ごとに、1つずつです。
[600ms]
[confident] 次に、そのデータベースに対して、クエリを実行します。クエリ1つ1つが、特定の種類の危険なパターンを探します。
[600ms]
[calm] 結果は、リポジトリにコードスキャンのアラートとして表示されます。

## Step 3 · Default setup: one click, languages detected

[calm] いちばん手軽なのは、デフォルトのセットアップです。言語、クエリスイート、トリガーは、GitHubが選んでくれます。
[600ms]
[confident] 概要を確認して、有効にするだけです。
[600ms]
[reassuring] GitHub Actionsが有効になっていることが必要で、リポジトリは、パブリックか、Code Securityを使っている必要があります。

## Step 4 · Advanced setup: workflow, triggers and a matrix

[confident] 高度なセットアップでは、ワークフローファイルがリポジトリに追加されます。それ以降は、自分で管理します。
[600ms]
[curious] トリガーは、編集できます。プッシュ、プルリクエスト、スケジュールなどです。言語のマトリックスも、編集できます。
[600ms]
[impressed] マトリックスでは、言語ごとにジョブが1つずつ実行されて、すべて並列で動きます。

## Step 5 · Compiled languages and build modes

[curious] コンパイルが必要な言語では、CodeQLがデータベースを作る前に、ビルドが必要になることがあります。
[600ms]
[calm] マトリックスの言語ごとに、ビルドモードを選びます。Noneは、ビルドをまったく行いません。Autobuildは、CodeQLが自動でビルドします。
[600ms]
[confident] Manualは、ビルドコマンドを自分で書くモードです。言語ごとに、どのモードに対応しているかは、ドキュメントに載っています。

## Step 6 · Third-party scanners and SARIF upload

[curious] すでに別のスキャナーを使っていますか。その場合は、結果をSARIFファイルに出力させます。SARIFは、結果用のJSON形式です。
[600ms]
[confident] そのファイルは、アクション、API、またはCodeQLのコマンドラインで、アップロードできます。
[600ms]
[impressed] アップロードすると、検出結果が、コードスキャンのアラートとして表示されます。CodeQLのアラートのすぐ隣です。

## Step 7 · Reading an alert: severity, rule and data-flow path

[calm] どのアラートにも、検出したルールと、重大度が表示されます。セキュリティアラートには、緊急から低までのレベルも表示されます。
[600ms]
[confident] データフローのアラートでは、「パスを表示」を選びます。データがソースからシンクまで流れる経路が、順に分かります。
[600ms]
[encouraging] パスのステップを1つずつクリックしていくと、信頼できない入力が、どこで危険になるのかが、はっきり分かります。

## Step 8 · Fixing with Copilot Autofix, then re-scan

[curious] Copilot Autofixは、いま見ているアラートに対して、コードの修正を提案してくれます。
[600ms]
[confident] 提案を確認して、修正を含むプルリクエストを開くと、コードスキャンが、もう一度チェックします。
[600ms]
[reflective] あくまでベストエフォートなので、あらゆる状況のすべてのアラートを直せるわけではありません。マージする前に、必ず変更内容を読んでください。

## Step 9 · Dismiss an alert: reasons and the audit trail

[calm] 修正しないアラートも、あります。たとえば、コードがテストでしか使われていない場合や、リスクを許容できる場合です。
[600ms]
[confident] その場合は、アラートを却下して、理由を選びます。コメントを追加することもできます。
[600ms]
[reassuring] 理由もコメントも、アラートのタイムラインに残ります。だから、誰が、何を、なぜ決めたのかが、記録として残ります。

## Step 10 · Query suites: from default to security-and-quality

[curious] クエリスイートは、名前の付いたクエリのまとまりで、どこまで広く検出するかを選べます。
[600ms]
[confident] デフォルトは、精度がとても高いスイートです。セキュリティ拡張は、精度の低いクエリを追加するので、より多くの問題を検出できます。
[600ms]
[calm] セキュリティと品質は、さらに広がって、コード品質のクエリも加わります。

## Step 11 · Custom queries and configuration files

[confident] 設定ファイルを使うと、独自のクエリやパックを追加できます。逆に、クエリを除外したり、フォルダごとスキップしたりもできます。
[600ms]
[calm] ワークフローからは、1つの設定で、そのファイルを指定します。
[600ms]
[serious] 1つ落とし穴があります。ワークフローで指定したクエリは、ファイル内のクエリを置き換えてしまいます。マージしたいときは、前にプラス記号を付けます。

## Step 12 · When a scan fails or is slow: where to look

[calm] スキャンが失敗したときは、失敗したステップ、ビルドモード、ログの順に見ていきましょう。
[600ms]
[confident] ビルドが失敗するなら、Manualのビルドモードを試します。ログの情報が足りないなら、デバッグログを有効にします。
[600ms]
[determined] スキャンが遅すぎるときは、スコープを絞るか、言語ごとに分けるか、より大きなランナーを使いましょう。変更できる内容は、デフォルトのセットアップか、高度なセットアップかによって変わります。
