# Narrator Script — GitHub · Supply Chain Security: Dependency Graph, Dependabot and Dependency Review

**Source animation:** [SupplyChainSecurity.html](../../../journeys/GitHub/SupplyChainSecurity.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://docs.github.com/en/code-security/supply-chain-security>
- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-500>

---

## Step 1 · Most of your code is somebody else’s code

[calm] Contosoのorders-apiを見てみましょう。チームが意図して選んだ、いくつかのパッケージを使っています。
[600ms]
[curious] ところが、それぞれのパッケージが、さらに別のパッケージを取り込み、そのパッケージもまた別のパッケージを取り込みます。自分で選んだものが直接依存、ついてくるものが推移的依存です。
[600ms]
[serious] これは重要です。その連鎖のどこかに欠陥があれば、それがそのままアプリの欠陥になるからです。

## Step 2 · The dependency graph: direct and transitive packages

[confident] GitHubは、マニフェストファイルとロックファイルから、依存関係グラフを作ります。依存関係送信APIを使えば、追加のデータも送れます。
[600ms]
[curious] パッケージごとに、バージョン、ライセンス、そして直接依存か推移的依存かが表示されます。Show pathsを使うと、推移的パッケージまでの経路が分かります。
[600ms]
[calm] 脆弱なパッケージは上に並ぶので、リスクの高いものから見られます。

## Step 3 · The Advisory Database: how a package becomes an alert

[calm] セキュリティアドバイザリーは、いくつもの情報源からGitHubに届き、GitHub Advisory Databaseに登録されます。
[600ms]
[confident] Dependabotアラートが出るのは、レビュー済みのアドバイザリーだけで、しかも自分のグラフにあるパッケージと一致したときだけです。レビューされていないアドバイザリーでは、何も出ません。
[600ms]
[serious] マルウェアのアドバイザリーは、別の種類のアラートで、別にオンにする必要があります。

## Step 4 · Dependabot alerts: severity, EPSS and what to fix first

[curious] これがDependabotアラートの一覧です。重大度は良い出発点ですが、あくまで判断材料の1つです。
[600ms]
[confident] EPSSと合わせて見ましょう。EPSSは、今後30日間に悪用される可能性を推定したものです。そのうえで、そのパッケージが本番で動いているか、グラフにどう入ってきたかを確認します。
[600ms]
[encouraging] アラートをクリックして、見比べてみましょう。そうやって、何から直すかを決めます。

## Step 5 · Security updates: the pull request Dependabot opens

[calm] Dependabotのセキュリティアップデートをオンにすると、パッチがあるアラートすべてについて、Dependabotが修正を試みます。
[600ms]
[impressed] パッチ済みの最小バージョンに上げるプルリクエストを開いて、アラートにリンクします。そのプルリクエストをマージすれば、アラートは閉じます。
[600ms]
[reflective] 推移的パッケージの場合は、代わりに親パッケージを更新するプルリクエストになることもあります。

## Step 6 · Version updates: dependabot.yml, schedule, groups, ignore

[confident] バージョンアップデートは、リポジトリにあるDependabotの構成ファイル1つから始まります。
[600ms]
[calm] そこで、Dependabotがチェックする頻度、どの更新を1つのプルリクエストにまとめるか、どのパッケージをスキップするかを決めます。
[600ms]
[reflective] 新しいリリースは、まずクールダウンの期間を待ちますが、セキュリティアップデートはこの待ち時間を飛ばします。ただし注意してください。ignoreルールを入れると、そのパッケージのセキュリティアップデートのプルリクエストまで止まることがあります。

## Step 7 · Alert rules: auto-dismiss and auto-triage

[curious] 通知が多すぎますか。自動トリアージルールなら、通知が出る前に、アラートを却下したりスヌーズしたりしてくれます。
[600ms]
[confident] まずは、GitHubが用意したプリセットから始めましょう。重大度、パッケージ、弱点の種類などで一致させる、カスタムルールを書くこともできます。
[600ms]
[serious] ルールで何が見えなくなるのかは、知っておきましょう。自動で却下されたアラートも、フィルターで絞り込んだり、確認したり、再オープンしたりできます。

## Step 8 · Dependency Review: stop a bad package before the merge

[calm] ここからはプルリクエストの話です。依存関係レビューでは、どのパッケージが追加、削除、更新されたかが分かります。
[600ms]
[confident] 既知の脆弱性やライセンスにフラグを立て、依存関係レビューのアクションでチェックを失敗させることもできます。
[600ms]
[determined] このチェックを必須にすれば、問題のあるパッケージはマージできません。ライセンスについては、許可リストか拒否リストのどちらかを使い、両方は使いません。

## Step 9 · SBOM: export the graph as SPDX

[calm] SBOMはソフトウェア部品表で、プロジェクトが何に依存しているかを、機械で読める形でまとめたものです。
[600ms]
[confident] GitHubは、現在の依存関係グラフを、SPDX形式でエクスポートできます。画面、REST API、GitHub Actionsのどれからでも可能です。
[600ms]
[reflective] バージョン、識別子、ライセンス、パスは載っていますが、自分に依存しているプロジェクトは載っていません。

## Step 10 · Who sees alerts, who owns them, and how they are notified

[calm] Dependabotアラートを有効にして、誰が見られるかを決めるのは、リポジトリ管理者と組織のオーナーです。
[600ms]
[confident] 書き込みアクセスがある人は、アラートをユーザー、チーム、AIエージェントに割り当てられます。そのためには、Code SecurityかAdvanced Securityのライセンスが必要です。
[600ms]
[curious] 通知は、メール、週次ダイジェスト、webhook、REST APIで届きます。

## Step 11 · Fix many alerts at once

[curious] アラートが何百件もあったらどうしますか。セキュリティアップデートをグループにまとめれば、パッケージエコシステムごとのプルリクエストが少なくなります。
[600ms]
[confident] 複数のアラートを選んで、1つの理由でまとめて却下することもできます。AIエージェントにアラートを任せることもできます。
[600ms]
[encouraging] セキュリティキャンペーンは、コードスキャンやシークレットスキャンのアラートに対して、同じことを大規模にやってくれます。

## Step 12 · Recap: graph, alert, update, review

[calm] まとめましょう。グラフは、自分が何に依存しているかを示します。
[600ms]
[confident] アラートは何が脆弱かを教えて、アップデートが修正を届けます。依存関係レビューは、プルリクエストの段階で、新しいリスクが入り込むのを防ぎます。
[600ms]
[proud] これが、G H 500の学習ガイドの、サプライチェーンセキュリティの分野です。自分のリポジトリで、ぜひ練習してみてください。
