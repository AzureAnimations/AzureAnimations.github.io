# Narrator Script — Network · Configure and troubleshoot Azure Load Balancer

**Source animation:** [LoadBalancerConfigAndTroubleshooting.html](../../../journeys/Network/LoadBalancerConfigAndTroubleshooting.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/load-balancer/load-balancer-overview>

---

## Step 1 · One Front End, Many Backends

[calm] Contoso のウェブショップは、3台の仮想マシンで動いています。ロードバランサーは、お客様に1つのフロントエンドアドレスを提供します。
[600ms]
[confident] そして、バックエンドプールの正常なマシンに、新しい接続を振り分けます。
[600ms]
[curious] フローの行き先を決めるのがルールで、どのマシンが正常かを判断するのがヘルスプローブです。設定するのは、この2つです。

## Step 2 · Public or Internal, Standard SKU

[curious] フロントエンドIPで、タイプが決まります。パブリックIPならパブリックロードバランサー、プライベートIPなら内部ロードバランサーになります。
[600ms]
[confident] 内部ロードバランサーは仮想ネットワークの中で動き、インターネットからのトラフィックは受け付けられません。
[600ms]
[serious] SKU は Standard を使ってください。Basic は 2025年9月30日に廃止されました。3つ目の SKU が Gateway で、アプライアンス向けです。

## Step 3 · Backend Pools: NIC or IP

[calm] バックエンドプールは、トラフィックを処理する対象の一覧です。ネットワークインターフェースで追加するか、IPアドレスと仮想ネットワークで追加します。
[600ms]
[confident] ネットワークインターフェースのプールには、VM やスケールセットのインスタンスを追加します。IPベースのプールなら、アドレスをあらかじめ登録できますが、Standard が必要です。
[600ms]
[reflective] 1つのロードバランサーで両方のタイプのプールを持てますが、同じプールに混在させることはできません。

## Step 4 · Health Probes

[curious] ロードバランサーは、すべてのバックエンドをプローブします。ここでは web-2 が応答しなくなったので、新しい接続を受け取らなくなります。
[600ms]
[confident] プローブには、プロトコル、ポート、間隔、しきい値があります。TCP プローブは応答がなければ失敗し、HTTP プローブは 200 以外が返ると失敗します。
[600ms]
[reassuring] Standard では、確立済みの TCP フローはそのまま続きます。スイッチで、両方の状態を見比べてください。

## Step 5 · Load-Balancing Rules

[calm] ルールは、フロントエンドのIPとポートを、バックエンドのポートに対応づけます。使うヘルスプローブは1つです。
[600ms]
[curious] 既定では、新しい接続ごとに5つの値でハッシュするので、同じクライアントでも別のマシンに振り分けられることがあります。
[600ms]
[confident] クライアントを同じマシンに留めたいときは、クライアントIPによるセッション永続化に切り替えます。モードを変えても、ダウンタイムはありません。

## Step 6 · Inbound NAT Rules

[curious] 負荷分散ルールは、正常な VM ならどれでも選びます。でも、特定の1台を指定したいこともあります。
[600ms]
[confident] インバウンド NAT ルールは、1つのフロントエンドポートを、選んだ1台の VM に転送します。たとえば S S H や R D P を、指定した1台のサーバーに転送する場合です。
[600ms]
[encouraging] バージョン2を使いましょう。プール全体を対象にして、ポートをあらかじめ割り当てます。しかも負荷分散ルールと違って、プローブは不要です。

## Step 7 · Outbound Rules and SNAT Ports

[calm] バックエンドの VM は、S N A T を使って、ロードバランサーのパブリックIP経由で外に出られます。
[600ms]
[confident] アウトバウンドルールでは、フロントエンドを選べますし、各 VM に割り当てる S N A T ポートの数も決められます。
[600ms]
[reassuring] さらにスケールするには、フロントエンドIPを追加するか、サブネットに NAT ゲートウェイを置きます。NAT ゲートウェイのほうが優先されます。

## Step 8 · HA Ports and Gateway Load Balancer

[curious] ファイアウォールなどのアプライアンスは、すべてのポートが必要です。
[600ms]
[confident] H A ポートルールは、内部の Standard ロードバランサーで、プロトコルをすべて、ポートを0にして使います。1つのルールで、すべてのフローを分散できます。
[600ms]
[impressed] Gateway Load Balancer を使うと、そうしたアプライアンスをパブリックフロントエンドにつなげられます。ユーザー定義ルートは不要です。

## Step 9 · Troubleshoot: Probe Failing

[concerned] 今度は web-2 が Down と表示されています。プローブは、届くまでに3つの関門を通る必要があります。
[600ms]
[confident] まずネットワークセキュリティグループ、次にゲストファイアウォール、そして正しいポートのリスナーです。それぞれ、プローブのアドレスを許可していなければなりません。
[600ms]
[determined] この順番で確認し、インスタンスごとのヘルスプローブの状態を見てください。

## Step 10 · Troubleshoot: Backend Unreachable

[serious] プローブは Up なのに、ユーザーはまだ失敗します。データポート、ネットワークセキュリティグループ、そして自分自身に戻ってくるフローを確認しましょう。
[600ms]
[concerned] 同じプールにある VM から、内部フロントエンドを呼び出さないでください。フローが同じマシンに戻って、タイムアウトすることがあります。
[600ms]
[confident] VM が外に出られないときは、アウトバウンドルールや、サブネットの NAT ゲートウェイのような、明示的なアウトバウンド手段が必要です。

## Step 11 · Where Do I Look First?

[calm] 症状から考えましょう。各分岐に、最初に確認する項目が書かれています。
[600ms]
[confident] クライアントが接続できないなら、プローブの状態を見ます。VM が外に出られないなら、アウトバウンド手段と S N A T のメトリクスを確認します。トラフィックが偏るなら、セッション永続化を確認します。
[600ms]
[proud] これで、A Z 104 と A Z 700 の両方のロードバランサーのスキルをカバーできました。
