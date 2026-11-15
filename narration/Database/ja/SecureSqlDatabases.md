# Narrator Script — Database · Secure Azure SQL: Network, Identity, Auditing and Defender

**Source animation:** [SecureSqlDatabases.html](../../../journeys/Database/SecureSqlDatabases.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/azure-sql/database/network-access-controls-overview>
- <https://learn.microsoft.com/azure/azure-sql/database/private-endpoint-overview>
- <https://learn.microsoft.com/azure/azure-sql/database/authentication-azure-ad-only-authentication>
- <https://learn.microsoft.com/azure/azure-sql/database/auditing-overview>

---

## Step 1 · The orders database is open to the internet

[calm] Contosoの注文データベースは、Azure SQL Databaseで動いています。新しい論理サーバーは、許可しない限り、すべての接続を拒否します。
[600ms]
[concerned] ところが、誰かが、すべてのアドレスを許可するルールを1つ追加して、ファイアウォールを広げてしまいました。これでは、データとインターネットの間を隔てるのは、SQLのパスワードだけです。
[600ms]
[determined] この入り口を、1層ずつ閉じていきましょう。

## Step 2 · Firewall rules and virtual network rules

[calm] サーバーのファイアウォールは、リストに載せたアドレスとサブネットだけを通します。このルールで守られるのは、パブリックエンドポイントです。
[600ms]
[serious] 「Allow Azure services」には注意が必要です。多くのチームが思っているより、ずっと範囲が広く、ほかのお客様のリソースからのトラフィックも通してしまいます。
[600ms]
[confident] 仮想ネットワークルールを使うには、サブネットにサービスエンドポイントが必要で、対象は1つのリージョンです。IPルールの変更が反映されるまで、数分かかることがあります。

## Step 3 · A private endpoint removes the public path

[curious] プライベートエンドポイントを使うと、Contosoの仮想ネットワーク内に、サーバー用のプライベートIPアドレスができます。
[600ms]
[serious] ただし、追加しただけでは、パブリックな経路は閉じません。パブリックネットワークアクセスも、拒否する必要があります。
[600ms]
[reassuring] 接続は、必ずサーバーの完全修飾名で行ってください。プライベートアドレスやprivatelinkの名前でサインインしようとすると、仕様どおり失敗します。

## Step 4 · Entra-only sign-in and a managed identity

[confident] Microsoft Entraのみの認証にすると、サーバー全体でSQLパスワードが無効になります。
[600ms]
[calm] アプリは、マネージドIDとトークンでサインインします。だから、設定にシークレットを置く必要がありません。
[600ms]
[serious] 最初に、Microsoft Entra管理者を設定してください。それから、SQLセキュリティマネージャーは、Entraのみの認証を有効にも無効にもできますが、SQL Server共同作成者にはできません。この点も覚えておきましょう。

## Step 5 · TDE, Always Encrypted and customer keys

[calm] 透過的なデータ暗号化は、保存されているデータファイルやログ、バックアップを保護します。
[600ms]
[curious] Always Encryptedは、さらに一歩進んでいます。クライアントドライバーが、選んだ列を暗号化するので、データベースエンジンが鍵を持つことはありません。
[600ms]
[serious] 注意点が2つあります。カスタマーマネージドキーにサーバーがアクセスできなくなると、データベースが使えなくなります。それと、暗号化した列に対するクエリには、制限があります。

## Step 6 · Auditing: what, where and for which scope

[calm] 監査では、データベースのイベントを追跡して、選んだ保存先にログとして書き込みます。保存先は、ストレージアカウント、Log Analyticsワークスペース、Event Hubsのどれかです。
[600ms]
[confident] 最初に、スコープとイベントのカテゴリを選びましょう。そうすれば、大事なものだけを記録できて、ノイズに埋もれません。
[600ms]
[reflective] 監査は可用性を優先します。そのため、負荷が非常に高いときは、一部のイベントが記録されないことがあります。Entraでのサインイン失敗は、ここではなく、Entra側に表示されます。

## Step 7 · Read an audit record: who ran what

[curious] 監査レコードの1件1件が、基本的な疑問に答えてくれます。誰がやったのか。何を実行したのか。どこで、いつ行われたのか。
[600ms]
[calm] これは、Contosoの注文データベースの監査レコードの1件です。各フィールドの色をたどって、どの疑問に答えているかを確認しましょう。
[600ms]
[serious] ステートメントはテキストとして保存されるので、そこに入力された機密の値が、ログに残ることがあります。監査ログを読める人は、限定しておきましょう。

## Step 8 · SQL Database vs SQL Managed Instance

[calm] どちらもAzure SQLですが、設定の場所は違います。それぞれの設定をどこで行うのか、そして既定値がどう違うのかを、把握しておきましょう。
[600ms]
[serious] SQL Databaseのネットワークに関する記事は、Managed Instanceには当てはまりません。
[600ms]
[confident] Managed Instanceの監査は、SQL Server Auditです。そのため、Event HubsやAzure Monitorログの設定は、SQL Databaseとは別のものになります。

## Step 9 · Defender for Databases: assess and detect

[confident] Defender for Azure SQL Databasesのプランには、2つの役割があります。1つ目は、脆弱性評価で、弱い設定がないかをスキャンします。
[600ms]
[curious] もう1つは脅威検出で、データベースが動いている間、攻撃を監視します。
[600ms]
[reassuring] サブスクリプションでプランを1回有効にするだけで、対象のリソースはすべて保護されます。あとから作成したものも含まれます。

## Step 10 · An alert end to end: SQL injection

[curious] 検索ボックスに入力したテキストが、そのままSQLステートメントに渡されています。ここが弱点です。
[600ms]
[concerned] Defenderは、まず問題のあるステートメントを、脆弱性の可能性があるとして、重大度「中」で警告します。続いて、その悪用をSQLインジェクションの可能性として、重大度「高」で報告します。
[600ms]
[determined] チームは調査して、安全でないコードを見つけ、修正します。

## Step 11 · Which control answers which threat?

[excited] 脅威が8つに、コントロールが5つ。それぞれの脅威が、主なコントロールにたどり着く様子を見てみましょう。
[600ms]
[encouraging] そのあとで、任意の脅威を選ぶと、そのコントロールが答えになる理由が分かります。
[600ms]
[reflective] 実際のシステムでは、コントロールを重ねて使うので、1つの脅威に答えが複数あることもあります。ここでは、それぞれの脅威に、主なコントロールを1つ対応させています。

## Step 12 · Recap: close, prove, encrypt, record, detect

[calm] 注文データベースは、5つのコントロールで守られています。ネットワークの入り口を閉じ、誰がサインインしているかを確認して、データを暗号化します。
[600ms]
[confident] さらに、何が起きたかを記録して、攻撃が始まったらすぐに検出します。コントロールごとに、対応する脅威が違います。
[600ms]
[proud] S C 500の学習ガイドでは、これらがデータベースのセキュリティの実装の項目に載っています。
