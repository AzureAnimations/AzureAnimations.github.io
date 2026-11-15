# ナレーション台本 — Azure Containers · 04 · Azure Container Apps

**Source animation:** `static/v2/Container/ContainerApps.html`

---

## Step 1 · problem

[confident] Contoso は contoso-orders バージョン ワン を Azure Container Instances で動かしていて、うまくいっていました。動かなくなるまでは。
[600ms]
[concerned] ACI は固定数のコンテナーを実行します。オートスケールもロードバランサーも、ダウンタイムなしの更新もありません。
[700ms]
[optimistic] トラフィックが急増したり、安全なリリースが必要になったら、Azure Container Apps へステップアップします。あなたの代わりにスケールする、サーバーレスのコンテナーです。

## Step 2 · replica

[confident] Container Apps では、アプリはレプリカとして実行されます。各レプリカは、独自の CPU とメモリを持つあなたのコンテナーです。
[600ms]
[calm] 従量課金プランでは、1 つのレプリカに 4 分の 1 から 4 vCPU、そして 0.5 から 8 ギビバイトが割り当てられます。
[700ms]
[impressed] 最小値と最大値を設定すれば、Azure が負荷に応じてレプリカを増減します。ゼロから 1,000 まで、すべて自動です。

## Step 3 · httpscale

[confident] az containerapp create でイメージをデプロイし、HTTP スケール ルールを付けます。
[600ms]
[calm] http concurrency of fifty を設定すると、リビジョンがそのしきい値を超えるたびに Container Apps がレプリカを追加します。
[700ms]
[impressed] クライアントは 1 つのアドレス、つまり FQDN を呼び出し、組み込みの ingress が各リクエストを正常なレプリカだけにルーティングします。

## Step 4 · revision

[confident] アプリを変更すると、新しいイメージ、構成、環境変数のいずれでも、新しい不変のリビジョンが作られます。
[600ms]
[calm] シングル モードでは、Container Apps が古いリビジョンから新しいリビジョンへトラフィックを自動的に移します。
[700ms]
[reassuring] マルチプル モードでは、重みでトラフィックを分割します。ブルーグリーンやカナリアです。失敗したデプロイは、古いリビジョンにとどまるだけです。

## Step 5 · ingress

[confident] ingress を有効にすると、アプリは HTTPS エンドポイントを得ます。ロードバランサーもパブリック IP も作る必要はありません。
[600ms]
[calm] 外部 ingress はインターネットに面し、内部 ingress は environment の中だけから到達できます。
[700ms]
[intrigued] その environment の中では、アプリは名前で互いを見つけます。http://payments を呼び出しても、トラフィックは外に出ません。

## Step 6 · serverless

[confident] ここでのオートスケールは KEDA が支えます。HTTP、CPU とメモリ、あるいはイベントに応じて、ゼロまでスケールします。
[600ms]
[impressed] そのイベント トリガーには Service Bus、Event Hubs、Kafka、Redis が含まれます。アプリが休んでいる間は料金がかかりません。
[700ms]
[optimistic] 任意の Dapr サイドカーを追加すれば、アプリはサービス呼び出し、状態、pub/sub を得られます。追加のインフラは不要です。

## Step 7 · control

[confident] Container Apps はあえてマネージドで、意見を持った設計です。ノードにも Kubernetes API にも、クラスターのアップグレードにも触れません。
[600ms]
[calm] それが狙いです。あなたはアプリに集中し、Azure がプラットフォームを運用します。
[700ms]
[curious] しかし、ノード プール、完全な Kubernetes API、カスタム ネットワーク、オペレーターが必要になったら、最後の目的地は Azure Kubernetes Service です。

## Step 8 · recap

[proud] つまり、イメージを持ち込めば、Container Apps がそれをサーバーレスでオートスケールするレプリカとして実行します。
[600ms]
[encouraging] 安全なロールアウトのためのリビジョン、トラフィックのための ingress、組み込みの KEDA と Dapr。運用の手間なく Kubernetes の力が手に入ります。
[700ms]
[optimistic] そして本当にノード レベルの制御が必要になったとき、この旅の最終地点が Azure Kubernetes Service です。クラスターの完全な制御です。
