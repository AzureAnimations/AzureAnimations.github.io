# Narrator Script — Network · Outbound Connectivity: Public IPs, SNAT and NAT Gateway

**Source animation:** [OutboundConnectivity.html](../../../journeys/Network/OutboundConnectivity.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/nat-gateway/nat-overview>
- <https://learn.microsoft.com/azure/nat-gateway/nat-gateway-resource>
- <https://learn.microsoft.com/azure/virtual-network/ip-services/default-outbound-access>

---

## Step 1 · Which Address Do My VMs Call From?

[calm] Contoso のアプリの VM には、プライベートアドレスしかありません。プライベートアドレスには、インターネットから届きません。
[600ms]
[curious] パートナーの Fabrikam は、許可リストに載っているパブリックアドレスからの API 呼び出ししか受け付けません。では、Fabrikam からは、実際に何が見えるのでしょうか。
[600ms]
[confident] このレッスンでは、3つの問いを軸に進めます。呼び出しはどのアドレスから出るのか。VM はいくつの接続を開いたままにできるのか。そして、既定のアウトバウンドアクセスで何が変わったのか、です。

## Step 2 · Default Outbound Access

[calm] 何も設定しないと、Azure は、各 VM に暗黙のアウトバウンド用パブリックIPを、こっそり割り当てます。
[600ms]
[serious] これは、自分で所有するリソースではありません。アドレスの所有者は Microsoft で、予告なく変更できますし、ping や断片化されたパケットにも対応していません。
[600ms]
[concerned] これは大きなリスクです。アドレスが変わった瞬間、Fabrikam の許可リストと一致しなくなり、呼び出しが失敗するからです。

## Step 3 · What Changed: Private Subnets

[curious] ここが大きな変更点です。新しい仮想ネットワークは、既定でプライベートサブネットになります。つまり、既定のアウトバウンドIPが、まったくありません。
[600ms]
[calm] 既存のネットワークには影響しません。そこの VM は、サブネットをプライベートにして VM の割り当てを解除するまで、既定のアウトバウンドを使い続けます。
[600ms]
[confident] どちらの場合も、方針は明確です。新しいものには、NAT ゲートウェイのような、明示的なアウトバウンド方式を計画しましょう。

## Step 4 · Public IPs: Standard, Static, Zone-Aware

[calm] 明示的なアウトバウンド方式は、パブリックIPから始まります。使うのは Standard です。
[600ms]
[confident] 静的で、ゾーン冗長にもゾーン指定にもでき、許可するまでは、インバウンドのトラフィックに対して閉じています。Standard v2 は、常にゾーン冗長です。
[600ms]
[serious] Basic SKU は 2025年9月30日に廃止されたので、残っているものはアップグレードしてください。

## Step 5 · SNAT: When Ports Run Out

[calm] 多くの VM が、SNAT で1つのパブリックIPを共有します。SNAT は、プライベートの送信元アドレスとポートを、パブリックのものに置き換える仕組みです。
[600ms]
[curious] 同じ宛先アドレスとポートへのアクティブな接続は、1つ1つが専用の送信元ポートを必要とするので、ポートのプールには限りがあります。
[600ms]
[concerned] ポートが尽きると、その宛先への新しい接続は失敗します。接続を再利用するか、アドレスを追加するか、NAT ゲートウェイを使いましょう。

## Step 6 · Attach a NAT Gateway

[confident] 解決策は、サブネットに NAT ゲートウェイを1つ関連付けることです。そのサブネットのすべての VM が、ゲートウェイの静的パブリックIP経由で外に出るようになります。
[600ms]
[calm] 編集するルートはなく、VM にパブリックIPも要りません。アウトバウンド専用なので、外から一方的に来るインバウンド接続は、ブロックされます。
[600ms]
[impressed] ポートは、すべての VM に対して必要に応じて割り当てられるので、枯渇する可能性がぐっと低くなります。

## Step 7 · More Addresses: IPs and Prefixes

[curious] NAT ゲートウェイにパブリックIPを追加するたびに、共有プールのポートが増えます。
[600ms]
[confident] パブリックIPプレフィックスは、Standard のパブリックIPを連続して確保した範囲です。そのため Fabrikam は、たくさんの単一アドレスではなく、1つの範囲を許可リストに登録できます。
[600ms]
[reflective] プレフィックスのサイズは、慎重に選んでください。あとからサイズを変更できません。

## Step 8 · Bring Your Own IP Range

[calm] Contoso が、すでにパブリックアドレスの範囲を所有している場合は、その範囲を Azure に持ち込むこともできます。
[600ms]
[confident] 地域インターネットレジストリに登録して、検証し、プロビジョニングし、コミッションします。カスタムプレフィックスは直接アタッチできないので、そこからパブリックIPやプレフィックスを派生させて使います。
[600ms]
[proud] メリットは、Contoso がアドレスの評判と、既存の許可リストをそのまま維持できることです。

## Step 9 · Which Outbound Method Wins?

[curious] 1つのサブネットに、複数のアウトバウンド方式が同時にあると、どうなるのでしょうか。優先順位がはっきり決まっています。
[600ms]
[calm] 最初に優先されるのは、アプライアンスやゲートウェイへのルートです。次が NAT ゲートウェイ、その次がインスタンスレベルのIP、続いてロードバランサーのアウトバウンドルール、最後が既定のルートです。
[600ms]
[serious] 既存のフローは古い方式のままで、移るのは新しい接続だけです。また、Basic SKU のリソースは、NAT ゲートウェイでは使えません。

## Step 10 · NAT Gateway: Zones and Idle Timeout

[calm] Standard の NAT ゲートウェイは、1つのゾーンに置かれます。ゾーンを選ぶか、ゾーンなしを選んで Azure に配置を任せるかのどちらかで、あとから変更はできません。
[600ms]
[confident] StandardV2 は、すべてのゾーンにわたってゾーン冗長で、StandardV2 のパブリックIPが必要です。
[600ms]
[curious] アイドル状態のフローは、タイムアウト後に切断されます。TCP では、このタイムアウトを調整できます。キープアライブなど、何か通信があればタイマーはリセットされますが、UDP のタイムアウトは固定です。

## Step 11 · Pick Your Outbound Method

[curious] 製品からではなく、必要なことから考えましょう。1つ選ぶと、図で、方式とその経路、注意点がわかります。
[600ms]
[confident] ほとんどのシナリオで、Microsoft は NAT ゲートウェイをおすすめしています。ファイアウォールを使うと検査も加わり、ルートで経由させます。
[600ms]
[serious] 既定のアウトバウンドアクセスは、本番環境にはおすすめできません。

## Step 12 · Outbound Connectivity, All in One

[calm] Contoso のプライベート VM は、いまではプライベートサブネットと NAT ゲートウェイを経由して外に出ます。使うのは Standard の静的IPです。
[600ms]
[confident] 答えは3つです。アドレスは、Standard の静的IP、プレフィックス、または自分の範囲。接続は SNAT ポートを使い、必要に応じて割り当てられます。そして、新しい仮想ネットワークは、既定でプライベートサブネットです。
[600ms]
[proud] Fabrikam が許可リストに登録するのは1つの範囲だけで、Contoso からの呼び出しは、常に既知のアドレスから届きます。
