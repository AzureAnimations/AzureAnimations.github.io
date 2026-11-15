# Narrator Script — Network · DNS Private Resolver and Hybrid DNS

**Source animation:** [DnsPrivateResolver.html](../../../journeys/Network/DnsPrivateResolver.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/dns/dns-private-resolver-overview>
- <https://learn.microsoft.com/azure/dns/private-resolver-endpoints-rulesets>
- <https://learn.microsoft.com/azure/dns/private-resolver-hybrid-dns>
- <https://learn.microsoft.com/azure/dns/private-resolver-architecture>

---

## Step 1 · The network works. The names don't.

[calm] ContosoのデータセンターはVPNかExpressRouteでAzureにつながっていて、リンクは正常に動いています。
[600ms]
[concerned] でも、双方がそれぞれ別のDNSを運用しています。オンプレミスからはAzureのプライベート名が見えず、Azureからはcorp dot contoso dot localが見えません。
[600ms]
[curious] 接続はパケットを運んでくれますが、名前の問い合わせを運ぶものが、まだ必要です。

## Step 2 · The old answer: DNS servers you run

[calm] 昔のやり方は、AzureにDNSフォワーダーの仮想マシンを置くことでした。オンプレミスは、Azureの名前をそのマシンに転送します。
[600ms]
[curious] 仮想ネットワークは、カスタムDNSをそのマシンに向けて、これで橋渡しができます。
[600ms]
[serious] 動きはしますが、今度はサーバーを運用することになります。パッチ適用、可用性、ライセンス、それにDNSを更新するたびの手作業での変更が必要です。

## Step 3 · Swap the servers for a service

[calm] Azure DNS Private Resolverは、フルマネージドで高可用性のサービスです。
[600ms]
[confident] DNSのマシンをデプロイしたり、パッチを当てたり、スケールしたりする必要はなく、VM側のDNSクライアント設定を変える必要もありません。
[600ms]
[reassuring] 必要なのは、仮想ネットワークと、ExpressRouteかVPNです。あとはすべて、エンドポイントとルールで設定します。

## Step 4 · Inbound endpoint: the door into Azure

[calm] インバウンドエンドポイントは、仮想ネットワークの中の、専用のサブネットに置くプライベートIPアドレスです。
[600ms]
[confident] オンプレミスのDNSは、Azureのプライベート名をこのアドレスに転送します。Azure DNSは、そのネットワークにリンクしたプライベートゾーンから応答します。
[600ms]
[curious] オンプレミス側では、このアドレスを指す、そのゾーン用の条件付きフォワーダーを作ります。

## Step 5 · Outbound endpoint: the door out of Azure

[calm] アウトバウンドエンドポイントは、Azureから、オンプレミス、別のクラウド、あるいは外部のDNSサーバーへ、クエリを送ります。
[600ms]
[curious] 専用のサブネットはありますが、自分のIPアドレスは持ちません。これは設計どおりです。
[600ms]
[confident] ただし、クエリの行き先を決めるのは、このエンドポイントではありません。それは、転送ルールセットの仕事です。

## Step 6 · Forwarding rulesets: which domain goes where

[calm] DNS転送ルールセットは、ルールの一覧です。各ルールは、このドメインなら、これらのDNSサーバーに聞く、と決めています。
[600ms]
[confident] たとえば、corp dot contoso dot localは、オンプレミスのDNSサーバーのポート53に送ります。
[600ms]
[serious] 複数のルールが同じ名前に一致する場合は、サフィックスが一番長いものが優先されます。ルールセットはアウトバウンドエンドポイントにアタッチされ、そこからクエリが送り出されます。

## Step 7 · Ruleset links: put the rules to work

[calm] ルールセットを仮想ネットワークにリンクすると、そこのVMは、そのルールを使います。DNSの設定を変える必要はありません。
[600ms]
[curious] インバウンドエンドポイントを指すルールがあれば、スポークから、ハブにあるプライベートゾーンを解決することもできます。
[600ms]
[reassuring] リンクするネットワークは、リゾルバのネットワークとピアリングしていなくても構いません。ただし、ハブアンドスポークでは、たいていピアリングしています。

## Step 8 · Where the resolver sits in hub-and-spoke

[calm] リゾルバは、ハブに置きましょう。スポークからは、2通りの方法でアクセスできます。
[600ms]
[confident] 分散型では、各スポークはAzureが提供するDNSのままにして、ルールセットのリンクを使います。集中型では、各スポークのカスタムDNSを、インバウンドエンドポイントにします。
[600ms]
[serious] どちらの設計でも、ハブのネットワークを、プライベートゾーンにリンクしておく必要があります。

## Step 9 · Private endpoints across the tunnel

[calm] オンプレミスのクライアントは、プライベートエンドポイントに、いつもの名前でアクセスします。たとえば、contosodata dot blob dot core dot windows dot netです。
[600ms]
[serious] 転送するのは、パブリックゾーンの名前、blob dot core dot windows dot netです。privatelinkのほうではありません。
[600ms]
[impressed] AzureがprivatelinkのCNAMEを追加して、ハブのプライベートゾーンが、エンドポイントのプライベートIPで応答します。

## Step 10 · Trace a query through the resolver

[excited] クエリを1つ選んで、どこを通るか見てみましょう。それから、番号のついたホップを選ぶと、そこで何が起きているかが分かります。
[600ms]
[calm] AzureのVMの名前は、Azure DNSとルールセットのリンクを通ります。オンプレミスの名前は、インバウンドエンドポイントから入ってきます。
[600ms]
[impressed] そして、リゾルバは、自分で作らなくていい部分です。

## Step 11 · Resolver, private zones, Firewall DNS proxy

[calm] この3つは、名前が似ていて、重なる部分もありますが、役割はそれぞれ違います。
[600ms]
[curious] プライベートゾーンは、レコードを持っています。リゾルバは、ネットワーク間でクエリを、双方向に転送します。ファイアウォールのDNSプロキシは、フィルタリングと転送を担当します。
[600ms]
[confident] 組み合わせるとうまく働きます。ファイアウォールのルールでは、ドメイン名によるフィルタリングが追加されます。

## Step 12 · Hybrid DNS, nothing to patch

[calm] マネージドのリゾルバが、DNSの仮想マシンの代わりになります。
[600ms]
[confident] インバウンドエンドポイントは、オンプレミスからのクエリに応答します。アウトバウンドエンドポイントとルールセットは、Azureからのクエリを処理して、リンクがネットワークにルールを適用します。
[600ms]
[proud] 試験では、どのエンドポイントがどちら向きかと、ハブアンドスポークのどこにリゾルバを置くかを、押さえておきましょう。
