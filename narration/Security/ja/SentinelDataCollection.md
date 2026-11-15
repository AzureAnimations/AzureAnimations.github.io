# Narrator Script — Security · Microsoft Sentinel data collection: workspaces, connectors, Syslog, CEF and Windows events

**Source animation:** [SentinelDataCollection.html](../../../journeys/Security/SentinelDataCollection.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/sentinel/quickstart-onboard>
- <https://learn.microsoft.com/azure/sentinel/roles>
- <https://learn.microsoft.com/azure/sentinel/sentinel-solutions-deploy>
- <https://learn.microsoft.com/azure/sentinel/cef-syslog-ama-overview>

---

## Step 1 · Sentinel is blind until data arrives

[calm] Contoso が Microsoft Sentinel をオンにしたばかりですが、ワークスペースはまだ空っぽです。
[600ms]
[serious] Sentinel が検出できるのは、見えているものだけです。データがなければ、アラートを出す対象もありません。
[600ms]
[determined] そこで Priya は、まず1つのデータコネクターから始めます。このレッスンでは、S C 500 のスキルのうち、Sentinel でのイベント収集を扱います。ここに出てくる名前は、すべて架空です。

## Step 2 · Create the workspace and add Microsoft Sentinel

[calm] Sentinel は、Log Analytics ワークスペース上で動きます。Priya はリソースグループにワークスペースを作成し、そこに Microsoft Sentinel を追加します。
[600ms]
[confident] Sentinel は複数のワークスペースで実行できますが、データは1つのワークスペースの中に分離されます。
[600ms]
[reassuring] Sentinel を有効にするには、ワークスペースがあるサブスクリプションで、Contributor ロールが必要です。

## Step 3 · Roles on the workspace

[calm] Sentinel で誰が何をできるかは、Azure のロールで決まります。仕事をこなせる範囲で、いちばん低いロールを選びましょう。
[600ms]
[confident] ロールは、ワークスペースのリソースグループに割り当てます。そうすれば、アクセスはワークスペースまでで、それ以上に広がりません。
[600ms]
[reflective] Playbook Operator と Automation Contributor は、自動化のための別のロールで、このレッスンでは扱いません。

## Step 4 · Content hub: install, then configure

[curious] コンテンツハブは、コネクター、ルール、ワークブックを、ソリューションとしてまとめています。
[600ms]
[confident] 1つのコンテンツアイテムを使うには、ソリューション全体をインストールします。ソリューションをインストールするとコネクターが追加されますが、設定は別に必要です。
[600ms]
[reassuring] ソリューションのインストールと管理には、リソースグループで Microsoft Sentinel Contributor ロールが必要です。

## Step 5 · Connectors for Azure resources

[calm] Azure 側のソースには、組み込みのコネクターがあります。ここでは、サブスクリプションのアクティビティ、Microsoft Entra ID のログ、Defender for Cloud のアラートを見ます。
[600ms]
[serious] Entra のサインインログには、Entra ID P 1 か P 2 のライセンスが必要な点に注意してください。
[600ms]
[curious] テナントベースの Defender for Cloud コネクターはプレビューで、サブスクリプションベースのコネクターは、レガシーのコネクターです。

## Step 6 · Syslog from Linux machines

[calm] Priya の Linux サーバーは、syslog に書き込みます。コネクターが、そのサーバーに Azure Monitor Agent をインストールします。
[600ms]
[confident] そのうえで、データ収集ルールが、ファシリティと最小の重大度ごとに、何を収集するかを決めます。
[600ms]
[curious] 最小レベルを選ぶと、それより高い重大度もすべて収集されます。エラーレベルを選べば、クリティカル、アラート、エマージェンシーも収集されます。

## Step 7 · CEF from appliances

[calm] ファイアウォールのようなアプライアンスは、Common Event Format のメッセージを送ります。送り先は、エージェントを実行している Linux のログフォワーダーです。
[600ms]
[curious] CEF は、SIEM ツール向けに作られた Syslog の拡張です。ベンダー、製品、バージョン、イベントクラス、重大度、ID を含むヘッダーに、拡張フィールドが加わります。
[600ms]
[confident] 通常の Syslog メッセージは Syslog テーブルに入り、CEF は CommonSecurityLog に入ります。

## Step 8 · Windows Security events

[calm] Windows セキュリティイベントは、データ収集ルールで各マシンから直接収集することも、Windows イベント転送で、コレクターに集めることもできます。
[600ms]
[encouraging] 両方の方法を試して、比べてみてください。
[600ms]
[confident] エージェントはソースでフィルターするので、選んだイベントだけが取り込まれます。Azure の外にあるマシンは、先に Azure Arc が必要です。

## Step 9 · Custom log tables

[calm] 組み込みのテーブルが合わないときは、Contoso が、サンプルレコードからカスタムテーブルを作ります。
[600ms]
[confident] そして、データ収集ルールを通して、そのテーブルにデータを送ります。
[600ms]
[curious] データは、Logs Ingestion API 経由で届けられます。プレビュー中の Custom Logs コネクターを使って、テキストファイルから取り込むこともできます。スキーマを定義するには、サンプルレコードが必要です。

## Step 10 · Retention and table plans

[calm] すべてのデータを、同じように扱う必要はありません。アラートやハンティングのために、新しいデータはすぐ使える状態にしておきます。
[600ms]
[confident] 古いデータは、低コストの長期ストレージに置き、保持期間は、テーブルごとに設定します。
[600ms]
[reflective] Defender ポータルでは、Sentinel のテーブルとカスタムテーブルを管理します。Basic プランのテーブルは、Log Analytics ワークスペースから管理します。

## Step 11 · Query Purview Audit in Defender XDR

[curious] Microsoft 365 のアクティビティの監査レコードは、Microsoft Purview Audit から取得します。Priya は、Defender ポータルから、フィルターか KQL で、それにアクセスします。
[600ms]
[serious] まず、Microsoft Purview ポータルで、監査を有効にしておく必要があります。
[600ms]
[confident] 監査ページを開くには、Exchange Online で、View-Only Audit Logs か Audit Logs のロールが必要です。

## Step 12 · Recap

[calm] 収集は、ワークスペース、コネクター、ルール、テーブル、保持という、つながりです。1つでも欠けると、データが届かないか、保持されません。
[600ms]
[confident] それぞれのつながりは、いま見てきたイベント収集の目的の、一部に対応しています。
[600ms]
[proud] S C 500 のスキルは時間とともに変わるので、必ず Microsoft Learn で、最新の学習ガイドを読んでください。
