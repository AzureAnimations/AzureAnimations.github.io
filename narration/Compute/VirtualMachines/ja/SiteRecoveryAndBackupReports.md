# Narrator Script — Virtual Machines · Site Recovery and Backup Reports

**Source animation:** [SiteRecoveryAndBackupReports.html](../../../../journeys/Compute/VirtualMachines/SiteRecoveryAndBackupReports.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/site-recovery/azure-to-azure-architecture>
- <https://learn.microsoft.com/azure/site-recovery/azure-to-azure-tutorial-failover-failback>
- <https://learn.microsoft.com/azure/site-recovery/site-recovery-overview>

---

## Step 1 · A region goes down

[calm] ContosoのショップVMは、Azureのひとつのリージョンで動いています。では、そのリージョン全体で障害が起きたら、どうなるでしょうか。
[600ms]
[concerned] VMは、どこで、どれくらい早く復旧するのでしょうか。
[600ms]
[confident] ここでは、Site Recoveryを使ったAzureからAzureへのディザスタリカバリーを見ていきます。そのあとで、Azure Backupのレポートとアラートです。ここに出てくるものは、すべて架空で、A Z 104とA Z 305に対応しています。

## Step 2 · Set up the recovery

[calm] 最初は、Recovery Servicesのボールトです。ソースとターゲットのリージョン、ターゲットのリソースグループとネットワーク、そして、レプリケーションポリシーを選びます。
[600ms]
[curious] ターゲットのリソースグループと仮想ネットワークは、Site Recoveryに作成してもらうことも、自分で選ぶこともできます。
[600ms]
[confident] ボールトは、ソースリージョン以外のリージョンに作ってください。

## Step 3 · Replicate every write

[calm] レプリケーションをオンにすると、Mobilityサービスの拡張機能が、VMに自動でインストールされます。
[600ms]
[curious] ディスクへの書き込みは、すべてキャッシュ用のストレージアカウントに送られて、そこからターゲットリージョンのレプリカ用マネージドディスクに送られます。キャッシュがあるので、レプリケーションが本番のVMの動作を遅くしません。
[600ms]
[reassuring] Site Recoveryに必要なのは、VMからの送信接続だけです。受信接続は必要ありません。

## Step 4 · Recovery points

[calm] スナップショットが、復旧ポイントになります。デフォルトは、クラッシュコンシステントな復旧ポイントです。
[600ms]
[curious] クラッシュコンシステントな復旧ポイントは、電源コードを抜いたときのように、ディスク上にあったものを保持します。アプリケーションコンシステントな復旧ポイントは、メモリと、処理中のトランザクションも取り込みます。こちらは、レプリケーションポリシーで、頻度を指定する必要があります。
[600ms]
[confident] 保持期間も、同じポリシーで設定します。

## Step 5 · Recovery plans

[calm] 復旧計画では、VMをグループに分けます。グループは順番に起動し、グループ内のVMは、同時に起動します。
[600ms]
[curious] グループの間に、スクリプトを実行できます。これは、Azure Automationのランブックです。または、誰かが確認するまで計画を一時停止する、手動のアクションを追加することもできます。
[600ms]
[confident] ひとつの計画で、テストフェイルオーバー、フェイルオーバー、フェイルバックを実行できます。

## Step 6 · Test failover: the safe drill

[calm] テストフェイルオーバーは、安全な予行演習です。隔離されたテスト用ネットワークに、VMのコピーを作ります。
[600ms]
[reassuring] 本番は動き続け、レプリケーションも続くので、本番には何も影響しません。演習には、本番ではないネットワークを使いましょう。
[600ms]
[confident] 問題がなければ、「テストフェイルオーバーのクリーンアップ」を選んで、テストVMを削除します。

## Step 7 · Failover and commit

[serious] 実際の障害では、フェイルオーバーによって、選んだ復旧ポイントから、ターゲットのリソースグループとネットワークに、VMが作成されます。
[600ms]
[curious] コミットするまでは、「復旧ポイントの変更」を選べます。
[600ms]
[confident] コミットで、フェイルオーバーが完了します。Site RecoveryにあるそのVMのすべての復旧ポイントが削除されるので、もう、やり直せません。

## Step 8 · Reprotect and fail back

[calm] コミットしたあとは、VMを再保護します。すると、元のリージョンに向かって、レプリケーションが始まります。
[600ms]
[curious] プライマリリージョンが復旧したら、フェイルバックします。このとき、変更を元のディスクに同期できるように、ソースのVMはシャットダウンしておく必要があります。
[600ms]
[confident] そのあと、もう一度、再保護します。マネージドディスクの場合は、Site Recoveryが、セカンダリリージョンのVMを片付けます。

## Step 9 · Run a failover drill

[curious] では、実際に試してみましょう。フェイルオーバーの種類を選んで、どのステージが変わるかを見てください。
[600ms]
[confident] 選んだ種類が、データ損失、つまりRPO、そして復旧にかかる時間、つまりRTOに、どう影響するかに注目してください。
[600ms]
[reassuring] ポータルでは、Azure VMに、テストフェイルオーバーとフェイルオーバーが表示されます。先にマシンをシャットダウンしておくと、計画的なフェイルオーバーになります。

## Step 10 · Backup or Site Recovery?

[curious] よくある質問が、BackupとSite Recoveryのどちらが必要か、というものです。この2つは、別の種類の障害に対応します。
[600ms]
[confident] Backupは、過去のコピーから復元します。Site Recoveryは、VMを別の場所で動かすので、障害の間も、ワークロードは動き続けます。
[600ms]
[reassuring] どちらも、事業継続とディザスタリカバリーの戦略に必要なので、ほとんどの設計で、両方を使います。

## Step 11 · Where reports come from

[calm] バックアップのレポートは、Azure Monitorのログをもとに作られます。ボールトの診断情報をLog Analyticsワークスペースに送ると、ブックが、そのデータをレポートにします。
[600ms]
[curious] ワークスペースは、別のサブスクリプションや別の場所に置けます。また、組み込みのAzure Policyを使えば、多くのボールトに、診断設定をまとめて設定できます。
[600ms]
[serious] ワークスペースのデータは、デフォルトでは、限られた期間しか保持されません。長期的な傾向を見たいなら、保持期間を延ばしましょう。

## Step 12 · Reading the report

[calm] レポートでは、ジョブ、インスタンス、使用状況、ポリシー、ポリシーの遵守状況、最適化を確認できます。ここの数字は架空のものです。
[600ms]
[curious] まず、赤くなっているところや、データが欠けているところを探して、そこを掘り下げます。
[600ms]
[confident] すぐに使えるレポートもあります。たとえば、Backup Job HistoryやBackup Configuration Statusです。Site Recoveryにも、Job HistoryとReplication Historyのレポートがあります。

## Step 13 · Backup alerts

[calm] Azure Backupは、重大なイベントに対して、Azure Monitorの組み込みアラートを出します。これは、デフォルトで有効です。
[600ms]
[serious] 対象は、バックアップの失敗、復元の失敗、バックアップデータの削除、論理的な削除の無効化です。
[600ms]
[confident] アラートは、Resiliencyで確認できます。自分で決めるのは、誰に通知するかです。アラート処理ルールとアクショングループを使って、メール、Webhook、ロジックアプリ、ランブックに送ります。

## Step 14 · All in one

[calm] 全体の流れは、こうです。レプリケート、計画、テスト、フェイルオーバー、そして再保護。そのあと、レポートとアラートで、バックアップが正常かどうかを確認します。
[600ms]
[confident] A Z 104では、Site Recoveryの構成、セカンダリリージョンへのフェイルオーバー、そして、バックアップのレポートとアラートの読み取りが範囲です。A Z 305では、バックアップとディザスタリカバリーの設計が範囲です。
[600ms]
[proud] 測定されるスキルは変わることがあるので、最新の学習ガイドで確認しましょう。
