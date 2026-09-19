# Narrator Script - 可用性ゾーンに VM を分散

**Source animation:** journeys/Compute/VirtualMachines/AvailabilityZones.html

**Script status:** Authored voiceover.

Delivery cues appear in brackets; pauses are on separate lines.

## Step 1 · What if a whole zone fails?

[curious] 障害ドメインはラック単位のリスクを分けました。では、もっと大きな障害ならどうでしょうか。
[800ms]
[serious] 電源、冷却、ネットワークの問題で、データセンターの拠点全体が停止することもあります。
[600ms]
[confident] 可用性ゾーンは、その規模で Contoso の構成を分離します。ここでは既存の可用性セットをその場で変換するのではなく、新しい配置を設計します。

## Step 2 · Place one VM in a zone

[calm] まず、ゾーンを指定した一台のマシンから始めます。
[600ms]
[confident] ゾーンを指定すると、リージョン内のどの独立した場所で仮想マシンを動かすかを Azure に伝えられます。
[600ms]
[serious] これは配置先の指定にすぎません。ゾーンを選んでも、二つ目のコピーは自動で作られません。

## Step 3 · Prepare VMs across zones

[determined] そこで Contoso は、二台目を明示的に準備します。
[600ms]
[confident] 一つのゾーンにマシンとディスクを置き、別のゾーンにもマシンと専用ディスクを用意します。両方でアプリを実行できるようにします。
[600ms]
[reassuring] この構成ではディスクもゾーン単位です。共有するのではなく、各インスタンスが自分のディスクを持ちます。

## Step 4 · Configure resilient routing

[curious] 二台の準備ができても、トラフィックを届ける経路が必要です。
[800ms]
[confident] ゾーン冗長のフロントエンドを持つ Standard Load Balancer は、一つのゾーンが停止しても動作を続け、正常性プローブに合格したバックエンドへ新しい接続を送れます。
[600ms]
[reassuring] フロントエンド自体もゾーン冗長にする必要があります。そうしなければ、単一障害点の場所を変えただけです。

## Step 5 · Do not forget the data

[serious] 見落とされがちなのが、このデータの部分です。
[600ms]
[calm] 通常のマネージドディスクだけでは、店舗アプリの状態がゾーン間で自動的に複製されるわけではありません。
[600ms]
[confident] 注文を保存するデータベースや共有ストレージには、それぞれ別に回復性の設計が必要です。意識して決めておきましょう。

## Step 6 · A zone goes unavailable

[curious] ゾーンが停止した状態に切り替え、何が起きるか追ってみましょう。
[600ms]
[calm] プローブが停止を検出すると、そのゾーンへの送信が止まり、新しい接続は正常なゾーンに向かいます。
[600ms]
[serious] ただし、負荷を引き受ける余裕、正常なデータ依存先、適切に設定されたプローブが必要です。

## Step 7 · Zonal VMs - All in One

[reflective] この設計を支えるのは、組み合わせて使う四つの要素です。
[600ms]
[confident] 分離した配置、準備済みのアプリ、ゾーン冗長の経路、そしてデータの計画です。
[600ms]
[proud] 四つをそろえることで、ゾーンを一つ失っても、Contoso は店舗の営業を続けやすくなります。
