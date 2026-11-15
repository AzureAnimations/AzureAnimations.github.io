# Narrator Script — GitHub · Security Administration: Roll It Out Across an Organisation

**Source animation:** [SecurityAdministration.html](../../../journeys/GitHub/SecurityAdministration.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://docs.github.com/en/code-security/securing-your-organization>
- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-500>

---

## Step 1 · Fifty Repositories, No Consistent Setup

[calm] Contosoにはリポジトリが50個あり、セキュリティの設定はチームごとにバラバラです。
[600ms]
[concerned] 守られているものもあれば、そうでないものもあります。各チームが機能を手作業でオンにしていれば、そうなります。Raviには、どれがどれなのか分かりません。
[600ms]
[determined] 必要なのは、どこでも通用する、1回のロールアウトです。

## Step 2 · Enterprise, Organisation, Repository

[calm] セキュリティ設定には、3つのレベルがあります。エンタープライズには、SettingsとPoliciesのページがあり、すべての組織に及びます。
[600ms]
[confident] 組織には、Configurations、グローバル設定、デフォルト設定があります。リポジトリには、そのリポジトリだけに効く、Advanced Securityの設定があります。
[600ms]
[serious] 覚えておきましょう。上のレベルが設定を強制すると、その下のレベルでは変更できません。

## Step 3 · Enterprise Cloud and Enterprise Server

[curious] GitHub Enterprise CloudとGitHub Enterprise Serverは、同じセキュリティ機能を使いますが、オンにする場所が違います。
[600ms]
[confident] Enterprise Cloudでは、github.comのエンタープライズ設定とポリシーです。セルフホストのServerには、ライセンスと、Management Console、GitHub Actionsが必要です。
[600ms]
[reassuring] 構成、ルールセット、REST APIは、どちらでも同じです。一部のオプションは、Serverの後のバージョンで提供されます。

## Step 4 · Security Configurations: One Named Bundle

[confident] セキュリティ構成は、有効化の設定をまとめた、名前付きのバンドルです。1回作れば、どんなリポジトリのグループにも適用できます。
[600ms]
[curious] 各設定は、有効、無効、未設定のどれかにできます。未設定なら、リポジトリの現在の状態がそのまま残ります。
[600ms]
[encouraging] 必要な保護が違うグループには、それぞれ別の構成を割り当てられます。

## Step 5 · Defaults for New Repositories, and Inheritance

[calm] デフォルトの構成を選んでおくと、新しいリポジトリは最初から保護された状態で始まります。対象は新しいリポジトリだけで、移管されたリポジトリには適用されません。
[600ms]
[confident] アタッチしたリポジトリは、設定を継承します。スイッチを切り替えてみましょう。強制しない場合は、リポジトリ管理者が設定を変更でき、ステータスはRemovedになります。
[600ms]
[serious] 強制すると、設定はロックされ、ステータスはEnforcedになります。

## Step 6 · Enable All Three Suites in Bulk

[calm] では、一括で適用しましょう。リポジトリを選ぶか、フィルターに一致するものをすべて選びます。
[600ms]
[confident] 構成を選んでApplyを押します。Secret Protection、サプライチェーンセキュリティ、Code Securityが、まとめてオンになります。
[600ms]
[reassuring] 各リポジトリに構成のステータスが表示されるので、結果を確認できます。アーカイブされたリポジトリも対象です。

## Step 7 · Default CodeQL Setup or an Approved Workflow

[confident] デフォルトセットアップが、一番手早い方法です。ワークフローファイルは不要で、言語はGitHubが選びます。
[600ms]
[curious] ビルドやマトリックス、スケジュールなど、自分のワークフローが必要なときだけ、高度なセットアップを選びましょう。
[600ms]
[calm] 大規模な環境では、そのワークフローのバージョンを1つ承認して、リポジトリのグループ全体に展開します。

## Step 8 · Policies and Rulesets: Enterprise and Organisation

[calm] ポリシーは、誰が機能をオンにできるかを決めます。ルールセットは、コードをマージする前に何を通過すべきかを決めます。
[600ms]
[confident] どちらも、複数の組織をまとめてカバーできます。組織のオーナーとセキュリティマネージャーは、ポリシーがどうであれ、いつでも機能を有効にできます。
[600ms]
[encouraging] 安全にロールアウトするには、ルールセットをまずEvaluateで始めて、影響を確認してから、Activeにします。例外は、バイパスリストで対応します。

## Step 9 · Roles: Administrator, Security Manager, Developer

[calm] 全員に、仕事ができる最小限のアクセスだけを与えましょう。
[600ms]
[confident] 管理者がルールを決めます。セキュリティマネージャーは、組織全体のセキュリティ機能とアラートを運用します。開発者は、リポジトリで作業して、アラートを修正します。
[600ms]
[reflective] セキュリティマネージャーのロールは組織に属していて、オーナーがメンバーやチームに付与できます。

## Step 10 · Who Can Dismiss or Reopen an Alert

[calm] ReadとTriageのアクセス権では、アラートを却下できません。Write、Maintain、Adminなら、できます。
[600ms]
[curious] もう1人の目で確認したいですか。「アラートの直接の却下を防止する」をオンにすると、却下するたびに、レビュアーの承認が必要になります。
[600ms]
[confident] この設定は、セキュリティ構成の中にあります。コードスキャン、シークレットスキャン、Dependabotに、それぞれ1つずつあります。

## Step 11 · Automate with the REST API and the CLI

[confident] 設定ページでクリックする操作は、すべてスクリプトにできます。GitHub CLIのapiコマンドが、REST APIを呼び出してくれます。
[600ms]
[calm] 構成の作成、リポジトリへの適用、新しいリポジトリのデフォルト設定は、それぞれ別の呼び出しです。
[600ms]
[serious] 設定が強制されている場合、それを変えようとするAPI呼び出しは、成功したように見えても、何も変わりません。だから、必ずステータスを読み戻して確認しましょう。

## Step 12 · Recap: A Rollout Checklist

[calm] 上から順に進めましょう。レベルを選び、バンドルを作り、デフォルトを設定して、一括で適用します。
[600ms]
[confident] そのあとCodeQLのセットアップを選び、ポリシー、ルールセット、ロール、却下のルールで統制します。
[600ms]
[proud] 最後に、REST APIで自動化します。これが、G H 500の学習ガイドの、セキュリティ管理の分野です。
