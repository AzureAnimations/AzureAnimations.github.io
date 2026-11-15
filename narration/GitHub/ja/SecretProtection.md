# Narrator Script — GitHub · Secret Protection: Stop the Leak, Then Clean It Up

**Source animation:** [SecretProtection.html](../../../journeys/GitHub/SecretProtection.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-500>

---

## Step 1 · A Token in a Commit: Who Finds It

[calm] Mayaが、うっかりトークンをコミットしてしまいました。それを見つけられるのは3者です。リポジトリを読める人、GitHubのシークレットスキャン、そして公開リポジトリなら、そのトークンの提供元です。
[600ms]
[confident] シークレットスキャンは、すべてのブランチの、Git履歴全体を調べます。
[600ms]
[serious] ここで最初のルールです。コミットされたシークレットは、漏えいしたシークレットです。スキャンで気づくことはできますが、なかったことにはできません。

## Step 2 · What Secret Scanning Looks For

[curious] 何をシークレットとみなすかは、4種類のパターンで決まります。プロバイダーのパターン、汎用パターン、自分で書くパターン、そしてAIで見つける汎用シークレットです。
[600ms]
[confident] 調べるのはコードだけではありません。イシュー、プルリクエスト、ディスカッション、ウィキ、シークレットのgistも対象です。
[600ms]
[reassuring] 汎用パターンやAIで見つけたアラートは、誤検知が多くなりがちなので、別のリストに表示されます。

## Step 3 · Turn It On at Three Levels

[calm] Secret Protectionは、1つのリポジトリ単位で有効にできます。リポジトリ管理者が、Settingsページから設定します。
[600ms]
[confident] または、オーナーが、組織またはエンタープライズのセキュリティ構成を使って、多数のリポジトリにまとめて有効にできます。
[600ms]
[reassuring] パブリックリポジトリでは、シークレットスキャンが自動で、無料で使えます。プライベートとインターナルのリポジトリでは、GitHub Secret Protectionを有効にします。

## Step 4 · Push Protection: Stop the Push

[curious] プッシュ保護をオフとオンで切り替えて、2つの結果を比べてみましょう。
[600ms]
[serious] オフだと、シークレットが先にリポジトリに入り、そのあとでアラートが出ます。オンなら、リポジトリに届く前に、プッシュがブロックされます。
[600ms]
[confident] デフォルトではオフで、Secret Protectionが必要です。リポジトリ管理者、組織のオーナー、セキュリティマネージャー、エンタープライズのオーナーが、有効にできます。

## Step 5 · Bypass: Give a Reason or Ask First

[calm] デフォルトでは、書き込みアクセスがある人なら誰でも、理由を示せばブロックを回避できます。理由は、テストで使用、誤検知、あとで修正、などです。
[600ms]
[confident] 委任バイパスでは承認のステップが加わり、プッシュを許可する前にレビュアーが判断します。リクエストは、7日たつと期限切れになります。
[600ms]
[reassuring] どちらの場合も、バイパスはすべて監査ログに記録され、ウォッチしているオーナー、セキュリティマネージャー、リポジトリ管理者にメールで通知されます。

## Step 6 · The Alert: Created, Open, Closed

[calm] 検出されたシークレットはアラートになります。作られるのは、スキャンがシークレットを見つけたときと、プッシュ保護がバイパスされたときです。
[600ms]
[serious] アラートは、誰かが閉じるまで開いたままです。閉じるときは、理由、任意のコメント、そして誰がいつ閉じたかが記録されます。トークンがコードから消えたあとでも、閉じるのは手動です。
[600ms]
[curious] パートナーアラートは、提供元に送られ、リポジトリには表示されません。

## Step 7 · Validity Checks: Is It Still Live?

[curious] 有効性チェックは、検出したシークレットがまだ使えるかどうかを、トークンの発行元に問い合わせます。
[600ms]
[serious] アクティブは、まだ悪用される可能性があるということなので、最優先で対応しましょう。非アクティブはもう使えませんが、悪用されていないかは確認してください。
[600ms]
[calm] 不明は、サポートされていないか、確認できなかったということです。GitHubのトークンは、デフォルトでチェックされます。パートナーパターンでは、有効性チェックを有効にする必要があります。

## Step 8 · Respond in Order: Revoke, Then Clean Up

[serious] コミットされたシークレットは、漏えいしたものとして扱いましょう。まず、無効化してローテーションして、使えなくします。
[600ms]
[confident] そのあと、ログを見て不正利用がないか確認し、アラートを閉じます。
[600ms]
[reassuring] Git履歴のクリーンアップは最後です。時間がかかりますし、トークンを無効化したあとなら、不要なことも多いです。

## Step 9 · Dismiss With Care

[calm] アラートを閉じるのは、あとで説明を求められるかもしれない判断です。だから、正直な理由を選びましょう。
[600ms]
[confident] 理由は、誤検知、テストで使用、無効化済み、修正しない、の4つです。必ずメモを残しましょう。メモはアラートのタイムラインに記録されて、監査に使えます。
[600ms]
[serious] それと、閉じる前に、有効性を確認してください。

## Step 10 · Alert Recipients and Path Exclusions

[curious] 漏えいを誰に知らせるかを決めましょう。管理者、セキュリティマネージャー、一部のオーナー、そしてコミットした本人です。
[600ms]
[calm] メールが届くのは、その人がリポジトリをウォッチしていて、メール通知をオンにしている場合だけです。
[600ms]
[confident] シークレットスキャンの対象外にしたいパスも、リストにできます。そこで出たアラートは、設定により無視として閉じられます。

## Step 11 · Custom Patterns: Write, Dry Run, Publish

[calm] 組み込みのパターンで検出できないシークレットは、自分でパターンを書きます。名前と、シークレットの形式を表す正規表現が必要です。
[600ms]
[confident] 次に、保存してドライランをします。アラートを出さずに一致を確認できるので、安全にパターンを調整できます。
[600ms]
[optimistic] 調整できたら公開して、必要ならプッシュ保護も有効にします。パターンは、組織やエンタープライズ向けにも定義できます。

## Step 12 · Public vs Private, and What You Can Now Do

[calm] パブリックとプライベートのリポジトリでは、スキャン、アラート、トークンの動きが違います。ご自分のプランについては、ドキュメントで確認してください。
[600ms]
[confident] では、G H 500の目標で、自分の理解を確認しましょう。Secret Protectionを構成して使う、です。
[600ms]
[proud] 有効にして、プッシュ保護で漏えいを止め、アラートをトリアージして、正しい順序で対応できるようになりました。
