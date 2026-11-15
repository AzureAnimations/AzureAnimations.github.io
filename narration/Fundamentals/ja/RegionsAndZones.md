# ナレーション原稿 - リージョンとゾーン

**Source animation:** journeys/Fundamentals/RegionsAndZones.html
**Script status:** Authored voiceover.
**Language:** 日本語

角括弧内は読み上げない演出指示です。間を置く位置は独立した行で示します。各ブロックはアニメーションの1ステップに対応します。
<!-- Sources: https://learn.microsoft.com/azure/reliability/availability-zones-overview ; https://learn.microsoft.com/azure/architecture/aws-professional/regions-zones#multi-region-deployment-and-paired-regions -->

## Step 1 · Where should the shop run?

[calm] リソースは整理できましたが、お客様には応答のよいショップが必要で、データにも適切な保管場所が必要です。配置場所の選択は、技術だけでなく事業上の判断でもあります。
[600ms]
[confident] Contosoは、利用者、必要なサービス、そしてその場所が使えなくなった場合を考えます。

## Step 2 · Choose a region

[calm] Azureのリージョンは、データセンターを含む地理的な領域です。Contosoは、お客様との距離、データや法律上の要件、使いたいサービスの提供状況を比較します。
[600ms]
[confident] 近い場所なら通信の遅延を抑えやすくなりますが、距離だけでは決められません。ほかの要件も満たす必要があります。

## Step 3 · Look inside the region

[calm] クラウドサービスの裏側には、設備が詰まった実際の建物があります。データセンターには、処理するサーバー、データを保存するストレージ、それらを結ぶネットワークがあります。
[600ms]
[confident] 図の建物の数は説明用であり、すべてのリージョンで同じではありません。クラウドも物理的な基盤で動いています。

## Step 4 · Separate the infrastructure

[calm] 可用性ゾーンは、リージョン内のデータセンター群を分離し、電源、冷却、ネットワークを独立させます。1つのゾーンの問題が、ほかへ広がりにくくする仕組みです。
[600ms]
[confident] Contosoは、選ぶリージョンやサービスがゾーンに対応しているかを確認します。利用できる構成は、サービスやデプロイ設定によって異なります。

## Step 5 · One location is not redundancy

[calm] アプリを1つのゾーンに1つ配置しても、インスタンスは1つのままです。ゾーンを選ぶだけでは、ショップやデータの別のコピーは作られません。
[600ms]
[confident] その場所の障害に備えるには、別の場所の処理能力と、アプリやデータを使い続けるための設計を準備します。

## Step 6 · What if a zone fails?

[calm] 正常な状態、ゾーン障害、そして検知後の経路切り替えを比べましょう。準備済みの2つ目のインスタンスがあれば別の行き先になりますが、経路制御が障害を認識する必要があります。
[600ms]
[confident] 利用できるデータも含め、仕組み全体で可用性を支えます。場所を増やすだけで、購入処理の成功が保証されるわけではありません。

## Step 7 · The regional boundary matters

[calm] 複数のゾーンは、リージョン内の障害に役立ちます。しかし、リージョン全体が停止すると、それらのゾーンも同じ地域的な境界の中にあります。
[600ms]
[confident] もっと大きな障害に備えるには、別リージョンへのアプリ配置、データ複製、検証済みの切り替え方法を含む復旧設計が必要です。

## Step 8 · Check the geography before committing

[calm] Contosoは、復旧先を決める前に地理的要件と法的要件を確認します。リージョンペアがあってもアプリは自動複製されず、すべてのリージョンにペアがあるわけでもありません。
[600ms]
[confident] ソブリン環境には独自の利用資格とサービス提供範囲があります。地図だけでなく、仕事の要件に合わせて判断します。

## Step 9 · Regions and Zones - All in One

[calm] まず、どの障害に備えるかを決めます。局所的な設備障害、ゾーン停止、あるいはリージョン全体の停止です。その範囲に合わせて、アプリ、データ、経路を準備します。
[600ms]
[confident] Contosoには配置方針ができました。次は、ショップの仕事を実際に動かすコンピューティングサービスを選びましょう。