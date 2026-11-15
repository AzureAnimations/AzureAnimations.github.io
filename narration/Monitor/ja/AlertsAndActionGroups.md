# Narrator Script — Monitor · Alerts and Action Groups

**Source animation:** [AlertsAndActionGroups.html](../../../journeys/Monitor/AlertsAndActionGroups.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/azure-monitor/alerts/alerts-overview>
- <https://learn.microsoft.com/azure/azure-monitor/alerts/alerts-types>
- <https://learn.microsoft.com/azure/azure-monitor/alerts/action-groups>
- <https://learn.microsoft.com/azure/azure-monitor/alerts/alerts-processing-rules>

---

## Step 1 · Something broke at 3 a.m.

[serious] Contoso Retailのチェックアウトが、夜中にダウンしました。オンコール担当のMinaは寝ていて、誰も彼女に知らせませんでした。
[600ms]
[curious] では、誰に、どうやって、どのくらいの頻度で知らせるべきでしょうか。
[600ms]
[confident] アラートは、データの中に異常があることを、Azure Monitorが人やスクリプトに知らせる仕組みです。お客様より先に、Azureから知ることができます。

## Step 2 · What can Azure Monitor watch?

[calm] アラートはシグナルから始まります。シグナルの種類ごとに、アラートのタイプがあります。
[600ms]
[confident] メトリックアラートは、一定の間隔で数値を評価します。ログ検索アラートは、KQLのクエリを実行します。アクティビティログアラートは、プラットフォームのイベントに一致したときに動きます。
[600ms]
[reassuring] PrometheusアラートはPromQLを実行します。タイプを正しく選べば、仕事は半分終わったようなものです。

## Step 3 · Anatomy of an alert rule

[calm] アラートルールは、いくつかのリソースのシグナルを監視します。条件を満たすと、アラートが発火します。
[600ms]
[confident] 発火したアラートは、選んでおいたアクショングループを呼び出します。
[600ms]
[curious] ルールが複数のリソースを監視している場合は、リソースごとに別々に評価され、それぞれ別のアラートが発火します。発火したアラートは読み取り専用で、30日間保存されます。

## Step 4 · A threshold: fixed or learned

[calm] 静的しきい値は、自分で決める数値です。限界値がはっきり分かっているときに選びます。
[600ms]
[intrigued] 動的しきい値は、メトリックの履歴から、普段のパターンを学習します。だから、毎日午前3時の通常のバッチジョブで、誰かが呼び出されることがなくなります。
[600ms]
[confident] 上限を超えたときにも、下限を下回ったときにも、アラートを出せます。画面の数字は、架空のものです。

## Step 5 · Action group: who gets told, what runs

[curious] アクショングループは、通知と自動化アクションを保存したリストです。アラートルールは、それを指すだけです。
[600ms]
[confident] メールの受信者は、ワンタイムパスコードで1回だけ確認します。だから、頼りにする前に、ポータルからグループをテストしましょう。
[600ms]
[reassuring] セキュアなWebhookは、Microsoft Entra IDを使います。SMSと音声は、すべての国やリージョンで使えるわけではありません。

## Step 6 · One action group, many rules

[calm] 違うルールが、同じアクショングループを指すこともできます。
[600ms]
[confident] 同じ3人のエンジニアに通知する2つのルールなら、1つのグループを共有します。オンコールの一覧を1回変えれば、すべてのルールに反映されます。
[600ms]
[reassuring] アクショングループは、アラートルールだけでなく、Azure Service HealthやAzure Advisorでも使えます。

## Step 7 · One alert shape for every type

[curious] 以前は、メトリック、ログ、アクティビティログのアラートで、送られるペイロードがバラバラでした。
[600ms]
[confident] 共通アラートスキーマを使うと、メールや自動化が読む構造が、1つになります。アクショングループの受信者ごとに、オンにします。
[600ms]
[calm] essentialsセクションを使えば、リソースグループや重大度で、アラートを振り分けられます。VM insightsのアラートは、これに対応していません。

## Step 8 · The life of an alert

[calm] 問題が続いている間、ステートレスなアラートは、条件を満たすたびに、発火し続けます。
[600ms]
[confident] ステートフルなアラートは、1回だけ発火して、それ以上は通知しません。そして、条件が解消されると、解決の通知を送ります。
[600ms]
[serious] アクティビティログのアラートは、常にステートレスです。これとは別に、対応状況は自分でマークします。それが自動で変わることはありません。

## Step 9 · Alert processing rules

[curious] 処理ルールは、アラートが発火したときに、その内容を変えます。メンテナンス中は通知をミュートしたり、複数のアラートにまとめてアクショングループを追加したりできます。
[600ms]
[confident] 以前は、アクションルールと呼ばれていました。スコープは、ルールと同じサブスクリプションの中でなければなりません。
[600ms]
[concerned] 新しいルールや変更したルールが動き出すまでに、最大30分かかることがあります。そのつもりで計画しましょう。

## Step 10 · Build an alert: pick a symptom

[excited] では、作ってみましょう。何が起きたかを選んでください。
[600ms]
[confident] シグナル、条件、そしてContosoが使うアクショングループが表示されます。
[600ms]
[calm] 重大度やグループ名は例であって、決まりではありません。予算もアクショングループを呼び出せますが、通知するだけです。支出は止まりません。

## Step 11 · Page fewer people, page them better

[serious] アラート疲れとは、本当に必要なアラートまで無視されるようになることです。どの調整も、Minaのスマートフォンに届く前に、ノイズを取り除きます。
[600ms]
[confident] 重大度の0から4は、自分で定義できます。音声とSMSは上位のレベルだけにして、残りはメールやダッシュボードに送りましょう。
[600ms]
[reassuring] コストは、監視する対象に応じて変わります。最新の金額は、Azure Monitorの料金ページで確認してください。

## Step 12 · Alerts and action groups: all in one

[calm] シグナルがルールに入ります。処理ルールがアラートを整えて、アクショングループが届けます。
[600ms]
[confident] 試験では、A Z 104に、アラートルール、アクショングループ、処理ルールがあります。A Z 305は、監視ソリューションの設計、A I 200は、ログ検索アラートの裏にあるKQLを扱います。
[600ms]
[proud] ノイズを減らせば、Minaは、大事なもの以外では起こされずにぐっすり眠れます。
