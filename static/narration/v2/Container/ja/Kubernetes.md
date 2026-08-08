# ナレーション台本 — Azure Containers · 05 · Azure Kubernetes Service

**Source animation:** `static/v2/Container/Kubernetes.html`

---

## Step 1 · arch

[confident] Azure Kubernetes Service はマネージドな Kubernetes で、この役割分担がすべてです。
[600ms]
[calm] Azure が control plane を運用しスケールします。API server、etcd、scheduler、そしてコントローラーを、Free、Standard、Premium のいずれかのレベルで。
[600ms]
[reassuring] その下の node pools はあなたのもの。Pod が実際に動くワーカー VM です。
[700ms]
[confident] そしてすべてを一つのツールで操作します。kubectl が、そのマネージドな API server と対話するのです。

## Step 2 · nodepools

[confident] それらのノードは node pools にまとめられ、各プールは同一の VM からなる Virtual Machine Scale Set にすぎません。
[600ms]
[calm] 必ず system pool があり、これは Linux 専用で、CoreDNS や metrics-server といったクラスターサービスをホストします。
[600ms]
[calm] さらに自分のアプリ用に user pools を追加でき、これは Linux でも Windows でもかまいません。
[700ms]
[impressed] 各プールは独立してスケールし、最大で千ノードまで拡張できます。

## Step 3 · pod

[confident] ではアプリをデプロイしましょう。各 Deployment が必要なレプリカ数を宣言します。frontend は二つ、orders は三つ、backend は二つです。
[600ms]
[calm] orders のイメージは contoso-orders バージョンワンで、たった一つの kubectl コマンドで適用します。
[600ms]
[intrigued] そこからは kube-scheduler が引き継ぎ、各 Pod をどのノードに置くかを決めます。
[700ms]
[reassuring] 各アプリを両方のノードに分散させるので、ノードを一つ失ってもアプリは止まりません。

## Step 4 · scale

[confident] AKS は三つの異なる方法でスケールします。それぞれをきちんと区別しておくと役立ちます。
[600ms]
[calm] Horizontal Pod Autoscaler、つまり HPA は、CPU やメモリ、あるいは KEDA のイベントが需要の上昇を示すと Pod のレプリカを増やします。
[600ms]
[calm] その Pod がもう収まらなくなると、Cluster Autoscaler がスケールセットに新しい VM ノードを追加します。これには数分かかります。
[700ms]
[impressed] そして急なスパイクには、virtual nodes が余分な Pod を Azure Container Instances へ数秒で送り出します。サーバーレスで、秒単位の課金です。

## Step 5 · service

[confident] Pod は一時的なものです。現れては消え、そのたびに新しい IP を持ちます。
[600ms]
[calm] だから Pod と直接やり取りすることはありません。Service が安定した玄関口となり、背後の健全な Pod へ負荷を分散します。
[600ms]
[reassuring] readiness、liveness、startup の各プローブに合格した Pod にだけトラフィックを送ります。
[700ms]
[curious] 種類は三つ。ClusterIP、NodePort、LoadBalancer で、それぞれ届く範囲が少しずつ広がります。一つずつ見ていきましょう。

## Step 6 · svcCip

[confident] まずは ClusterIP で、これがデフォルトです。
[600ms]
[calm] Pod に安定した内部アドレスを与え、frontend、orders、backend がノードをまたいで安全に呼び合えるようにします。
[700ms]
[serious] でも赤いカードに注目。このトラフィックはクラスターから外に出ません。インターネットのユーザーはこれらの Pod に届きません。
[600ms]
[reassuring] それこそが、プライベートな Pod 間通信に求めるものです。

## Step 7 · svcNp

[confident] 次は NodePort。外の世界への最初の一歩です。
[600ms]
[calm] すべてのノードの IP 上に、同じ静的ポートを開きます。範囲はおよそ三万から三万二千七百六十七です。
[600ms]
[concerned] ですが落とし穴があります。ノードが二つあると公開 IP も二つになり、配れる安定した単一アドレスがありません。
[700ms]
[amused] ノードは現れては消え、その IP も一緒に変わります。手早いテストには十分ですが、本番のトラフィックはきれいな入り口を求めます。

## Step 8 · svcLb

[confident] そのきれいな入り口が、LoadBalancer タイプの Service です。
[600ms]
[impressed] frontend にこれを選ぶと、AKS が Azure の公開 IP を一つ自動的にプロビジョニングします。単一で安定したアドレスです。
[600ms]
[calm] ユーザーはその一つの IP にアクセスし、クラスター内では LoadBalancer が各リクエストを健全な frontend の Pod へ分散します。pod ワンか pod ツーへです。
[700ms]
[reassuring] プライベート、次に公開だけれど雑然、そして今は負荷分散された公開 IP。これがその流れです。

## Step 9 · ingress

[confident] より高度なルーティングには、レイヤー7 へ上がります。
[600ms]
[calm] Application Gateway for Containers は Azure がホストするゲートウェイで、ホストとパスのルーティング、TLS、mTLS を扱い、クラスターに入る南北トラフィックを処理します。
[600ms]
[calm] マネージドな Istio サービスメッシュは東西トラフィックを扱い、サービス間の呼び出しを mTLS で保護します。
[700ms]
[optimistic] どちらも Kubernetes Gateway API に沿っています。AKS が向かっている標準です。

## Step 10 · why

[confident] では、なぜ AKS なのか。Kubernetes が現実をあなたの望む状態へ絶えず調整し続けるからです。
[600ms]
[reassuring] 自己修復します。失敗した Pod を再起動し、死んだノードから自動的に再スケジュールします。
[600ms]
[impressed] ダウンタイムゼロで更新を展開し、直前の正常なバージョンへ即座にロールバックします。
[700ms]
[confident] そして Azure では、Microsoft Entra ID と RBAC、Azure CNI による VNet 統合、マネージドなアップグレードを重ねられます。

## Step 11 · monitor

[confident] 最後に、何が起きているかを見る必要があります。CNCF 流でです。
[600ms]
[calm] Prometheus がメトリクスを収集し、Grafana が可視化し、Jaeger がサービス間のリクエストをトレースし、Kiali がサービスメッシュを地図にします。
[600ms]
[reassuring] Azure では、マネージドな Prometheus と マネージドな Grafana のおかげで、自分で運用するサーバーはありません。
[700ms]
[proud] すべてオープンソースで、CNCF、Linux Foundation、そして Microsoft が支えています。

## Step 12 · recap

[proud] これが Azure Kubernetes Service の全体像です。
[600ms]
[calm] マネージドな control plane、Linux か Windows の VM からなる node pools、自己修復する Pod として動くあなたのイメージ、自動スケーリング、Services と ingress、そして完全な可観測性。
[700ms]
[encouraging] Dockerfile から、完全にオーケストレーションされたクラスターまで、ずっと歩んできました。これでコンテナの旅は完結です。
[600ms]
[optimistic] さあ、何かを作りましょう。重い仕事は Azure に任せて。
