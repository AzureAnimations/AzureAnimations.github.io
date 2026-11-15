# Narrator Script — Architect · Migration tooling: Azure Migrate and DMS

**Source animation:** [MigrationTooling.html](../../../journeys/Architect/MigrationTooling.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/migrate/migrate-services-overview>
- <https://learn.microsoft.com/azure/migrate/migrate-appliance>
- <https://learn.microsoft.com/azure/migrate/concepts-assessment-overview>
- <https://learn.microsoft.com/azure/dms/dms-overview>

---

## Step 1 · 300 servers, 20 databases: now what?

[curious] Contosoは、データセンターから撤退することになりました。移行対象は、数百台のサーバーと、数十のデータベースです。この数字は、レッスン用に作ったものです。
[600ms]
[serious] 何かを動かす前に、チームには、適切なツールと、正しい順序、そしてアプライアンスが実際に何をするのかの、はっきりした理解が必要です。
[600ms]
[confident] これは、オンプレミスのサーバー、データ、アプリケーションを、移行に向けて評価する、A Z 305のスキルです。

## Step 2 · Azure Migrate: one hub, four tool families

[calm] Azure Migrateは、移行の判断、計画、実行を、ひとつの場所で行えるサービスです。
[600ms]
[confident] サーバー、データベース、Webアプリ、大量のデータには、それぞれ専用のツール群があります。オフラインの大容量データは、Azure Data Boxで運べます。
[600ms]
[reflective] 作業は3つのフェーズで進みます。まず、検出とビジネスケースで判断します。次に、評価で計画を立てます。そして、移行を実行します。

## Step 3 · Create the Azure Migrate project

[calm] 検出したものは、すべて、リソースグループの中のひとつのプロジェクトに集まります。
[600ms]
[confident] 必要なツールを追加して、プロジェクトキーを生成します。アプライアンスは、このキーを使って登録します。
[600ms]
[reflective] ひとつのアプライアンスが登録できるプロジェクトは1つですが、ひとつのプロジェクトには、複数のアプライアンスを登録できます。その前に、アカウントに適切なロールが必要です。

## Step 4 · The appliance: a lightweight server on your network

[curious] アプライアンスは、軽量なサーバーです。自分のネットワークの中に、一度だけデプロイします。
[600ms]
[confident] テンプレートかPowerShellスクリプトを使ってデプロイし、ポータルで取得したプロジェクトキーで登録します。
[600ms]
[serious] 物理サーバーや、ほかのクラウド上のサーバーでは、必ずスクリプトを使います。また、レプリケーションアプライアンスなど、ほかのコンポーネントを同じサーバーにインストールしてはいけません。

## Step 5 · What the appliance actually does

[curious] では、実際には何をするのでしょうか。ハイパーバイザーから、構成とパフォーマンスのメタデータを読み取って、プロジェクトに送ります。
[600ms]
[reassuring] エージェントレスなので、仮想マシンには、何もインストールされません。
[600ms]
[calm] アプライアンスには、Azureへのインターネット接続が必要です。直接でも、プロキシ経由でもかまいません。必要なアドレスは許可しておきましょう。デプロイ時に、接続のチェックも自動で行われます。

## Step 6 · Two credentials, two levels of insight

[curious] アプライアンスは、2種類の資格情報を使います。どちらを使うかで、見える情報の深さが変わります。
[600ms]
[confident] インベントリとパフォーマンスのデータなら、読み取り専用のvCenterアカウントで十分です。
[600ms]
[impressed] サーバーの資格情報も追加すると、アプライアンスは、インストール済みのソフトウェアや依存関係、さらにSQL ServerやWebアプリも確認できるようになります。

## Step 7 · Dependency analysis: move what talks together

[curious] ここからは、アプライアンスが、サーバー間のTCP接続を監視します。
[600ms]
[serious] 互いに依存しているサーバーは、一緒に移行しなければなりません。そうしないと、カットオーバーのあとで、アプリケーションが動かなくなります。
[600ms]
[confident] おすすめは、エージェントレスの依存関係分析です。エージェントは不要で、結果はマップかCSVのエクスポートで確認できます。

## Step 8 · Assessments turn data into decisions

[calm] 評価は、集めたデータを、判断に変える作業です。サーバーのグループとターゲットを選びます。
[600ms]
[confident] Azure Migrateは、まず準備状況を確認して、次に適切なサイズを決め、月額のコストを見積もります。評価の種類は、Azure VM、Azure SQL、App Service、Azure VMware Solutionです。
[600ms]
[serious] 準備状況のチェックに通らなかったサーバーは、サイズもコストも算出されません。また、評価は、その時点のスナップショットです。

## Step 9 · Right-size by use, then make the business case

[curious] サイズの決め方は2通りあります。オンプレミス基準のサイズ設定では、プロビジョニング済みの構成をそのままコピーします。
[600ms]
[confident] パフォーマンス基準のサイズ設定では、サーバーが実際に使った量をもとにします。そのため、使っていない容量をAzureに持ち越さずに済みます。
[600ms]
[proud] そのうえで、ビジネスケースで、オンプレミスとAzureを比較します。総所有コスト、年ごとのキャッシュフロー、資本支出から運用費への移行を見ていきます。

## Step 10 · Migrate servers: replicate, test, cut over

[calm] サーバーを移行するには、まずレプリケーションを行います。最初に全体をコピーし、そのあとは変更分を送り続けます。その間もサーバーは稼働したままです。
[600ms]
[confident] 次に、隔離したネットワークでテストします。そのあと、計画した時間帯にカットオーバーします。データを失わないよう、必要に応じて、移行元をシャットダウンします。
[600ms]
[reassuring] 最後に、移行を完了して、後片付けをします。レプリケーションの方法は、VMware、Hyper-V、物理サーバーのどれを使っているかで変わります。

## Step 11 · Databases: assess first, then Azure DMS

[curious] SQL Serverには、専用の移行の流れがあります。まず準備状況を評価して、ターゲットを選びます。
[600ms]
[confident] そのあと、Azure Database Migration Serviceで、オフラインかオンラインで移行します。オフラインでは、SQL Database、SQL Managed Instance、Azure VM上のSQLが、ターゲットになります。オンラインでは、あとの2つがターゲットです。
[600ms]
[serious] Azure Data StudioのAzure SQL移行拡張機能は、ツールごと提供が終了しています。代わりに、SSMSかAzure Arcの評価を使いましょう。

## Step 12 · Web apps and bulk data have their own tools

[curious] すべてが、サーバーやSQLデータベースとは限りません。
[600ms]
[confident] Azure Migrateでは、IIS上のASP.NET Webアプリを評価して、App Serviceに移行できます。個別のサイトは、App Service Migration Assistantで扱います。
[600ms]
[impressed] 大量のデータには、Azure Data Boxを使います。デバイスが手元に届くので、データをコピーして返送すると、Azureがストレージアカウントにアップロードしてくれます。

## Step 13 · Pick your workload, see the path

[encouraging] では、ツールピッカーを試してみましょう。移行したいものを選んでください。
[600ms]
[confident] パネルに、対応するAzureのツールの流れと、最初に行う3つのアクションが表示されます。
[600ms]
[reflective] これが、A Z 305のスキルの実践です。ツールは、慣れではなく、ワークロードの種類で選びます。

## Step 14 · The runbook: discover, assess, migrate, cut over

[calm] これが、Contosoの答えです。まず、アプライアンスで検出と評価をします。
[600ms]
[confident] データベースはAzure DMSで移行し、それ以外は、依存関係のグループごとに、レプリケーション、テスト、カットオーバーと進めます。
[600ms]
[proud] これで、A Z 305の移行に関する目標を、一通りカバーできました。オンプレミス環境の評価から、サーバー、データベース、データそれぞれに合った移行方法の提案までです。
