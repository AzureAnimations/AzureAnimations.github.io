# Narrator Script — Database · Azure Database for MySQL: Design for Availability and Growth

**Source animation:** [MySqlFlexible.html](../../../journeys/Database/MySqlFlexible.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/mysql/flexible-server/overview>
- <https://learn.microsoft.com/azure/mysql/flexible-server/concepts-high-availability>
- <https://learn.microsoft.com/azure/mysql/flexible-server/concepts-read-replicas>
- <https://learn.microsoft.com/azure/mysql/flexible-server/concepts-backup-restore>

---

## Step 1 · Contoso Shop already speaks MySQL

[calm] Contoso Shopは、すでにMySQLで動いているPHPのストアです。
[600ms]
[serious] 今は、パッチの適用も、バックアップも、フェールオーバーも、チームが手作業で行っています。この作業には、終わりがありません。
[600ms]
[reassuring] Azure Database for MySQL フレキシブルサーバーは、同じコミュニティ版のエンジンを、マネージドサービスとして動かします。

## Step 2 · When is MySQL the right pick?

[curious] では、MySQLを選ぶべきなのは、どんなときでしょうか。まず、アプリがもともと使っているエンジンから考えましょう。
[600ms]
[confident] アプリがMySQL向けに作られているなら、フレキシブルサーバーでも、ドライバーもSQLもツールも、今のまま使えます。
[600ms]
[calm] ほかのタイプのアプリなら、別のサービスが向いています。そのトレードオフは、「データベースを選ぶ」のページで解説しています。

## Step 3 · A managed engine with compute apart from storage

[calm] サービスの全体像です。MySQLのバージョン、コンピュート、ストレージを選びます。
[600ms]
[confident] サーバーパラメーターで、エンジンを調整します。動的なパラメーターはすぐに反映され、静的なパラメーターは再起動が必要です。
[600ms]
[serious] 注意点です。MySQL 5.7は拡張サポートの対象で、有料です。メジャーバージョンのアップグレードを計画しておきましょう。また、サポートされるのはInnoDBだけです。

## Step 4 · Three compute tiers, matched to the workload

[curious] コンピュートには、3つのティアがあります。Burstableは、ほとんどの時間アイドル状態になっている、開発やテスト用のサーバー向けです。
[600ms]
[confident] General Purposeは、ほとんどの本番アプリに向いています。Memory-Optimizedは、インメモリの速度と、高い同時実行性が必要な場合に選びます。
[600ms]
[serious] 高可用性とリードレプリカを使うには、General PurposeかMemory-Optimizedが必要です。また、コンピュートを変更すると、サーバーが再起動します。

## Step 5 · High availability: a standby that takes over

[calm] 高可用性を有効にすると、プライマリのログを再生し続ける、パッシブなスタンバイが追加されます。
[600ms]
[impressed] プライマリに障害が起きても、スタンバイが引き継ぎ、コミット済みのデータは失われません。ゾーン冗長のHAなら、ゾーン全体の障害にも耐えられます。
[600ms]
[serious] ゾーン冗長のHAは、サーバーを作成するときに選びます。そして接続は、必ずサーバー名で行ってください。IPアドレスは使わないでください。

## Step 6 · Read replicas: scale reads and cover a region

[curious] リードレプリカは、ソースを非同期でコピーして、読み取りを受け持ちます。だから、ソースは書き込みに専念できます。
[600ms]
[confident] 別のリージョンにレプリカを置けば、ディザスターリカバリーにも役立ちます。レプリカは、最大10台まで作れます。
[600ms]
[serious] ただし、自動でフェールオーバーすることはありません。切り替えるには、レプリカでレプリケーションを停止して、アプリの接続先をそのレプリカに向けます。

## Step 7 · Backups and point-in-time restore

[calm] スナップショットとトランザクションログがあるので、保持期間内なら、好きな時点に復元できます。
[600ms]
[confident] 復元では、そのバックアップから、まったく新しいサーバーが作られます。元のサーバーには、手が加わりません。
[600ms]
[serious] 覚えておいてください。HAのサーバーを復元すると、HAが無効の状態で戻ってきます。もう一度、有効にしましょう。

## Step 8 · Who can reach the server?

[curious] サーバーに接続できるのは、誰でしょうか。入り口は1つ選びます。ファイアウォール規則を使うパブリックアクセス、プライベートエンドポイント、VNet統合のどれかです。
[600ms]
[confident] 通信はTLSで暗号化されます。サインインには、既定のMySQL認証の代わりに、Microsoft Entra IDも使えます。
[600ms]
[reassuring] Entraでサインインするには、ユーザー割り当てのマネージドIDと、Entra管理者が必要です。どちらのネットワーク経路でも、アクセス制御はサーバー単位で、テーブルごとではありません。

## Step 9 · Grow and patch without rebuilding

[calm] 作り直さなくても、拡張できます。コンピュートは、短い再起動でスケールアップもスケールダウンもできます。
[600ms]
[impressed] ストレージはオンラインで拡張でき、自動拡張にもできます。ただし、増えるだけで、縮小はできません。
[600ms]
[reassuring] パッチの適用は、自分で決めたメンテナンスウィンドウに行われます。開発やテストなら、サーバーを停止して、コンピュートの課金を止めることもできます。

## Step 10 · Moving a MySQL database in

[curious] MySQLのデータベースは、どう移行すればいいでしょうか。ストアが許容できるダウンタイムの長さで、方法を選びます。
[600ms]
[confident] Azure Database Migration Serviceなら、カットオーバーするまで同期を続けられます。ダンプと復元は、いちばんシンプルな方法です。
[600ms]
[serious] シングルサーバーは、2024年9月に廃止されました。該当するサーバーは、必ず移行が必要です。まずInnoDB以外のテーブルを変換してから、移行を始めてください。

## Step 11 · Which flexible server design fits the requirement?

[curious] では、実際に試してみましょう。自分の要件に一番近いものを選んでください。
[600ms]
[intrigued] 対応するフレキシブルサーバーの設定が光って、設計のイメージと、注意すべきポイントが表示されます。
[600ms]
[reflective] 実際の設計では、これらを組み合わせます。たとえば本番のストアなら、ゾーン冗長のHAに、リードレプリカ、そしてプライベートアクセスといった具合です。

## Step 12 · MySQL on Azure: pick it, protect it, grow it

[calm] まとめましょう。アプリがすでにMySQLを使っているなら、フレキシブルサーバーを選びます。
[600ms]
[confident] そのうえで、要件に合わせて設計します。コンピュートのティア、高可用性、レプリカ、バックアップ、そしてネットワークの入り口です。
[600ms]
[proud] 次のPostgreSQLのページでは、同じフレキシブルサーバーのモデルを、別のエンジンで見ていきます。
