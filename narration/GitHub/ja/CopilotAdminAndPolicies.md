# Narrator Script — GitHub · Administer Copilot: Policies, Audit Logs and the REST API

**Source animation:** [CopilotAdminAndPolicies.html](../../../journeys/GitHub/CopilotAdminAndPolicies.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-300>

---

## Step 1 · Contoso Rolls Out Copilot

[calm] Contosoでは、200人の開発者にCopilotを使わせたいと考えています。組織のオーナーであるRaviは、誰かにシートを割り当てる前に、4つの質問に答える必要があります。
[600ms]
[curious] どのプランにするか。誰にシートを割り当てて、どの機能を有効にするか。そして、それらをどうやって把握していくか。
[600ms]
[confident] この質問に答えることこそが、Copilotの管理者の本当の仕事です。このレッスンでは、1つずつステップを踏んで見ていきます。

## Step 2 · Plans for Teams

[calm] Copilot BusinessとCopilot Enterpriseが、チーム向けの2つのプランです。
[600ms]
[confident] どちらも、組織での一元管理とポリシーの制御ができます。EnterpriseはBusinessに、エンタープライズ向けの機能が加わります。たとえば、より大きなクレジットプールです。
[600ms]
[reassuring] Free、Pro、Pro plus、Maxは、個人アカウント向けのプランです。価格は変わるので、最新の金額は、GitHubのプランのページで確認してください。

## Step 3 · Assign Seats

[calm] 誰がCopilotを使えるかは、組織のオーナーが、組織のCopilot Accessの設定で選びます。
[600ms]
[confident] 現在と将来のメンバー全員にシートを割り当てることも、特定の人やチームを選ぶこともできます。ファイルをアップロードして選ぶことも可能です。
[600ms]
[serious] 覚えておいてください。シートの課金は、最初に使ったときではなく、アクセスを許可した時点から始まります。

## Step 4 · Feature Policies

[curious] ポリシーでは、シートを持つ全員に対して、Copilotの機能を有効にしたり、無効にしたりできます。チャット、エージェントモード、コマンドライン、コードレビューなどです。
[600ms]
[confident] 機能ごとに、オーナーが設定するスイッチが1つあります。コードレビューを使うには、そのポリシーを有効にする必要があります。公開コードに一致する提案は、許可することも、ブロックすることもできます。
[600ms]
[serious] そして、エンタープライズのオーナーがすでにポリシーを設定している場合、組織は、それを上書きできません。

## Step 5 · Availability Across IDEs and GitHub.com

[calm] ポリシーが意味を持つのは、その機能がある場所だけです。だから、人々がCopilotを使う場所ごとに、ポリシーを確認しましょう。IDE、GitHub dot com上のクラウド、コマンドライン、そしてコードレビューです。
[600ms]
[curious] この4つのうち、公開コードフィルターが使えるのは、IDEだけです。MCPサーバーとコンテンツ除外は、4つすべてで使えます。
[600ms]
[reassuring] 覚えておきたいルールは、すべてのポリシーが、すべての場所に適用されるわけではない、ということです。

## Step 6 · Enterprise Over Organization

[calm] ポリシーは、まずエンタープライズで設定します。そこで有効や無効にしたものは、組織では上書きできません。
[600ms]
[curious] 「Let organizations decide」を選ぶと、判断が組織に委ねられます。3つのエンタープライズの設定を試して、ContosoでCopilotのコマンドラインを無効にしたいというRaviの希望が通るかどうか、確かめてみましょう。
[600ms]
[serious] 2つの組織からシートを受け取っている人の場合、通常は、制限がより緩い設定が優先されます。ただし、機密性の高いポリシーは、最も厳しい設定が使われます。

## Step 7 · Content Exclusions at Org Level

[calm] オーナーは、選んだファイルやリポジトリを、Copilotの対象から外せます。同じ制御が、3つのレベルに用意されています。
[600ms]
[confident] リポジトリ管理者、組織のオーナー、エンタープライズのオーナーが、それぞれ設定できます。使うには、Copilot BusinessかCopilot Enterpriseが必要です。
[600ms]
[reassuring] 変更はすべて監査ログに書き込まれるので、記録が残ります。ルールの書き方は、プライバシーのレッスンで紹介しています。

## Step 8 · The Audit Log

[calm] 監査ログには、Copilotのプランの変更が記録されます。たとえば、シートやポリシーの変更です。
[600ms]
[curious] Copilotのイベントを検索して、1つ開くと、誰が何をしたのかが分かります。アクターで検索すれば、GitHubでのエージェントの動きも確認できます。
[600ms]
[serious] プロンプトや、クライアントのセッションデータなどは、含まれません。また、イベントは、限られた期間だけ保持されます。長期間の履歴が必要なら、ログをSIEMにストリーミングしましょう。

## Step 9 · Subscriptions by REST API (Preview)

[calm] 組織のオーナーは、REST APIで、シートを追加したり削除したりできます。
[600ms]
[confident] POSTリクエストでユーザーを追加して、DELETEリクエストでは、そのシートが、キャンセル保留中の状態になります。
[600ms]
[serious] これらのエンドポイントは、パブリックプレビューで、変更される可能性があります。画面のトークンは、プレースホルダーです。実際のトークンは、コードやスライドに、絶対に貼り付けないでください。

## Step 10 · Billing and Usage

[calm] メーターが2つ、並んで動いています。シートは、毎月の課金サイクルごとに、割り当てた組織またはエンタープライズに請求されます。
[600ms]
[curious] AIクレジットは、それとは別です。チャット、コマンドライン、クラウドエージェントなどで、人がCopilotを使うたびに、共有のプールから消費されます。
[600ms]
[confident] 予算を設定すると、ユーザー、コストセンター、組織、エンタープライズの単位で、支出に上限を設けられます。このステップで見せているのは、仕組みであって、価格ではありません。

## Step 11 · Recap: The Admin’s Weekly Checklist

[calm] Copilotの管理は、定期的な作業です。まず、シートを確認します。誰が持っていて、実際に使っているのは誰か。
[600ms]
[confident] 次に、ポリシーを確認します。最初にエンタープライズ、それから組織です。そのあと、記録を見直します。監査ログと、請求です。
[600ms]
[proud] ここまでが、組織全体の設定とポリシーを管理する、G H 300のスキルです。チェックリストは、学習の助けとして使ってください。
