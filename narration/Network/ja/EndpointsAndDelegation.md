# Narrator Script — Network · Service Endpoints, Private Endpoints and Delegation

**Source animation:** [EndpointsAndDelegation.html](../../../journeys/Network/EndpointsAndDelegation.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/virtual-network/virtual-network-service-endpoints-overview>
- <https://learn.microsoft.com/azure/virtual-network/virtual-network-service-endpoint-policies-overview>
- <https://learn.microsoft.com/azure/virtual-network/subnet-delegation-overview>
- <https://learn.microsoft.com/azure/virtual-network/vnet-integration-for-azure-services>

---

## Step 1 · PaaS answers on a public address

[calm] Contosoの VMは vnet-app にあり、ストレージ、SQL、Key Vaultを使う必要があります。
[600ms]
[curious] これらのサービスは、パブリックエンドポイントで応答します。VMも使えますが、ルールを追加するまでは、ほかのどのネットワークからでも使えてしまいます。
[600ms]
[serious] ここのアドレスはドキュメント用の範囲で、実在のものではありません。大事なのは、既定でパブリックということは、指定するまで開いたままだということです。

## Step 2 · Three doors to the same service

[curious] 同じサービスに届く方法は3つあります。パブリックアドレスのまま絞り込む、サブネットにショートカットを作る、あるいは手前にプライベートIPを置く方法です。
[600ms]
[confident] それぞれ役割が違うので、どれか1つが一番というわけではありません。
[600ms]
[calm] サブネットの委任は、また別の作業です。サービスをサブネットの中に置けるようにするもので、これは後ほど説明します。

## Step 3 · Service endpoint: switch it on for a subnet

[calm] サービスエンドポイントは、サブネットごとにオンにします。そのサブネットからのトラフィックは、Azureバックボーン経由でサービスに届きます。
[600ms]
[impressed] サービス側にはサブネットのプライベートアドレスが見えるので、VNetルールでそのサブネットだけを許可できます。
[600ms]
[serious] サービスのパブリックIPとパブリックDNS名は、そのままです。また、エンドポイントを有効にしたり削除したりすると、そのサブネットの開いている接続が一瞬リセットされます。

## Step 4 · A service endpoint stops at the subnet

[calm] サービスエンドポイントが効くのは、サブネットから出るトラフィックだけです。
[600ms]
[concerned] オンプレミスからのトラフィックはパブリックNATアドレスから届くので、エンドポイントには見えません。代わりに、IPルールかプライベートエンドポイントが必要です。
[600ms]
[reassuring] ExpressRoute の Microsoftピアリングでは、使っているNATアドレスをリソースのIPファイアウォールで許可します。

## Step 5 · Endpoint policies narrow it to your accounts

[curious] サービスエンドポイントはサービス全体に届くので、ほかのお客様のアカウントも対象に含まれます。多くの方が思うより、広い範囲です。
[600ms]
[confident] サービスエンドポイントポリシーでは、サブネットから届いてよいストレージアカウントを列挙し、それ以外は拒否します。
[600ms]
[serious] 許可リストなので、アプリが使うアカウントはすべて入れてください。対象は Azure Storage で、クラシックアカウントには適用されません。

## Step 6 · Private endpoint: a private IP for one resource

[calm] プライベートエンドポイントは、プライベートIPを持つネットワークインターフェースをサブネットに置き、名前の付いたリソースに対応づけます。
[600ms]
[confident] トラフィックを運ぶのは Private Link です。ただし、DNS がそのプライベートIPを返さないと、クライアントは引き続きパブリックアドレスに向かいます。
[600ms]
[reassuring] ここは概要だけです。プライベートDNSゾーンと VNetリンクの詳細は、DNS と Private Link のレッスンで扱います。

## Step 7 · Service endpoint or private endpoint?

[curious] 2つを並べると、選び方を左右する違いが見えてきます。
[600ms]
[calm] どちらも、Azure から Azure へのトラフィックを Azureバックボーンに載せたままにします。
[600ms]
[confident] 使える場面では、Microsoft は Private Link をおすすめしています。追加料金なしでシンプルにしたいときは、サービスエンドポイントが今でも便利です。

## Step 8 · Which door should the VNet use?

[curious] 自分のニーズにいちばん近いものを選ぶと、合う扉が表示されます。写真と、決め手になる質問も一緒に出ます。
[600ms]
[calm] オンプレミスからのアクセスは必要ですか？アカウントは1つだけですか？プライベートアドレスが必要ですか？
[600ms]
[reflective] 実際の設計では、組み合わせることがよくあります。たとえば、本番データにはプライベートエンドポイント、リスクの低い開発用サブネットにはサービスエンドポイント、という具合です。

## Step 9 · Subnet delegation: let a service live in your subnet

[calm] エンドポイントは、VNet からサービスに届くようにする仕組みです。委任はその逆で、サービスがサブネットの中でセットアップできるようにします。
[600ms]
[confident] サブネットを指定すると、サービスはそこに自分のリソースを作ります。
[600ms]
[serious] ルールはサービスごとに違います。専用のサブネットが必要だったり、最小サイズが決まっていたりするので、アドレス空間を計画する前に、必ずドキュメントを確認してください。

## Step 10 · Three ways this goes wrong

[concerned] 「動くはずなのに」というチケットの多くは、3つの原因に絞られます。
[600ms]
[curious] 確認するのは、サブネット、ルールの種類、DNS の応答です。トラフィックは正しいサブネットから来ていますか？IPルールが必要なのに VNetルールを使っていませんか？名前はプライベートに解決されますか？
[600ms]
[serious] サービスエンドポイントを有効または無効にすると、そのサブネットの開いている TCP 接続が切れます。重要な作業のない時間に行いましょう。

## Step 11 · Reaching PaaS privately, at a glance

[calm] 全体像です。必要なものから扉を選びます。サービスエンドポイント、サービスエンドポイントポリシー、プライベートエンドポイントです。
[600ms]
[confident] そして、サービスをサブネットの中に置く必要があるときは、委任を追加します。
[600ms]
[reassuring] 次は DNS と Private Link で、プライベートエンドポイントの DNS 側を見ていきます。
