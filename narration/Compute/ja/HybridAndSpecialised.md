# Narrator Script — Compute · Hybrid and Specialised Compute: Arc, VMware, Azure Local, Service Fabric

**Source animation:** [HybridAndSpecialised.html](../../../journeys/Compute/HybridAndSpecialised.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/azure-arc/overview>
- <https://learn.microsoft.com/azure/azure-vmware/introduction>
- <https://learn.microsoft.com/azure/azure-local/overview>
- <https://learn.microsoft.com/azure/service-fabric/service-fabric-overview>

---

## Step 1 · Some workloads can’t move to a region

[calm] ContosoはAzureを使いたいと考えていますが、4つのワークロードは、標準のAzureリージョンには置けません。
[600ms]
[curious] それぞれ、動かせない理由があり、その答えもそれぞれ違います。
[600ms]
[confident] だから、このページで考えるのは、ひとつだけです。どこで動かすのか、そして、何を選べばいいのか。

## Step 2 · A spectrum: from in Azure to your own hardware

[calm] 1本の線を思い浮かべてください。左側がAzure自身のハードウェアで、右側が自分たちのハードウェアです。
[600ms]
[curious] 選択肢ごとに、線上の位置が違います。Azure VMware SolutionはAzureのデータセンターで動き、Azure Localは、自分のサイトにあるパートナーのハードウェアで動きます。
[600ms]
[confident] Arcは、右側から手を伸ばして、場所を問わずサーバーを管理します。そしてService Fabricは、場所ではなく、プラットフォームです。

## Step 3 · Azure Arc: projected into Azure, not moved

[calm] Azure Arcは、何も移動しません。Azureの外にある各リソースに、Azure Resource Manager上の分身を作るだけです。
[600ms]
[curious] サーバー、Kubernetesクラスター、SQLは、今の場所にそのままです。でも、それぞれがAzure上に、自分のリソースとして表示されます。
[600ms]
[reassuring] サーバーでは、Connected Machineエージェントをインストールします。マシンは、ネイティブのAzureリソースと同じリソースグループに置けます。

## Step 4 · What Arc gives you: Azure’s tools, on your servers

[confident] サーバーがAzureリソースになると、Azureのツールが使えるようになります。インベントリ、Policy、Defender for Cloud、Azure Monitor、Update Managerです。
[600ms]
[intrigued] Policyでは、マシンの内部の設定を監査できます。Defender for Cloudでは、脅威を監視できます。
[600ms]
[reassuring] サーバー向けのArcコントロールプレーンの機能は、追加料金なしで使えます。その上で使うサービスは、それぞれの料金がかかります。

## Step 5 · Azure VMware Solution: VMware, running in Azure

[calm] Azure VMware Solutionは、Azure上の専用のベアメタルホストで構成された、プライベートクラウドです。VMwareのスタックが動きます。
[600ms]
[curious] プライベートクラウドには、必ずvCenter Server、vSAN、vSphere、NSXが含まれます。VMwareのチームは、使い慣れたツールをそのまま使えます。
[600ms]
[confident] Azureの仮想ネットワークや、オンプレミスのネットワークとは、ExpressRouteでつながります。

## Step 6 · Move VMs with VMware HCX

[calm] VMを移すには、VMware HCXを使います。オンプレミスのvSphereと、プライベートクラウドをつなぎます。
[600ms]
[impressed] VMは、ライブvMotionやコールドマイグレーションなどで、VMのまま移動します。そのため、プラットフォームの作り直しは発生しません。
[600ms]
[reassuring] コネクタをオンプレミスにデプロイして、クラウド側とペアリングします。HCXは、両側にまたがってネットワークを延伸することもできます。

## Step 7 · Who manages what in Azure VMware Solution

[calm] 責任は、分担されます。Microsoftが運用するのは、データセンターとホスト、そしてVMwareソフトウェアのライフサイクルです。
[600ms]
[serious] つまり、MicrosoftがESXi、vCenter、NSX、vSANのデプロイ、パッチ適用、アップグレードを行い、故障したホストも交換します。
[600ms]
[confident] その上で動くものは、すべて自分で運用します。NSXのネットワークとセキュリティ、VM、ゲストOS、アプリ、そしてHCXによる移行です。

## Step 8 · Azure Local: Azure on your own hardware

[calm] Azure Localは、Azureを、自分のサイトに持ってきます。以前は、Azure Stack HCIという名前でした。
[600ms]
[curious] 動くのはパートナーのハードウェアで、Azure Arcが、それをAzureにつなぐコントロールプレーンになります。
[600ms]
[confident] Azureポータル、CLI、ARMテンプレートが使えて、Policy、Defender for Cloud、Azure Monitorも追加できます。接続した状態でも、切断した状態でも、デプロイできます。

## Step 9 · What runs on Azure Local, and why there

[calm] オンサイトでは、仮想マシンを動かせます。Arc対応のAKSで、Kubernetesも動かせます。Azure Virtual Desktopも使えます。
[600ms]
[curious] ローカルを選ぶ理由は、4つあります。低遅延、障害時も動き続けること、データを手元に置くこと、そして、データの発生源でのAIです。
[600ms]
[confident] たとえば、工場の生産ライン、製造実行システム、厳しいデータ主権や規制のルールなどです。

## Step 10 · Service Fabric: the state lives with the code

[calm] Service Fabricの大きな違いは、状態をどこに持つかです。ステートレスなサービスは、状態を外部のストアに保存します。
[600ms]
[curious] ステートフルなサービスは、状態を自分の中に持ち、プラットフォームがノード間で複製します。プライマリレプリカが1つと、セカンダリが複数あります。
[600ms]
[reassuring] 書き込みはプライマリに送られて、コピーされます。プライマリが故障すると、セカンダリが昇格して、新しいセカンダリが作られます。

## Step 11 · Clusters, managed clusters and rolling upgrades

[calm] Service Fabricクラスターは、ノードの集まりです。Azure上にも、オンプレミスにも、ほかのクラウドにも作れます。
[600ms]
[curious] マネージドクラスターでは、スケールセット、ロードバランサー、パブリックIP、ストレージ、ネットワークを、Azureが1つのリソースとしてまとめて管理します。既存のクラスターからの移行パスはないので、新しく作成します。
[600ms]
[confident] ローリングアップグレードは、ドメインを1つずつ更新するので、アプリは動き続けます。

## Step 12 · Service Fabric next to AKS and Container Apps

[calm] Service Fabric、AKS、Container Appsは、どれもマイクロサービスを動かせます。
[600ms]
[curious] 違いは、状態の持ち方、開発に使うもの、そして、クラスターを置ける場所です。
[600ms]
[serious] Service Fabricは、状態管理を内蔵していて、独自のプログラミングモデルもあります。一方、AKSは、Kubernetes APIを使います。新しく設計するときは、各サービスの最新のガイダンスを確認してください。

## Step 13 · Which one fits your constraint?

[curious] では、やってみましょう。困っている制約を選ぶと、合う選択肢が点灯します。
[600ms]
[confident] これが、試験で問われるスキルです。要件を読んで、本当の制約を見つけ、それに合うプラットフォームを選びます。
[600ms]
[encouraging] 各タブの上に制約が書いてあり、その下に選択肢があります。4つとも試してみてください。

## Step 14 · Where it runs: four answers and four traps

[calm] まとめましょう。制約に合わせて選ぶのは、製品名ではなく、プラットフォームです。
[600ms]
[serious] どの選択肢にも、覚えておきたい落とし穴がひとつずつあります。そこに注意しておきましょう。
[600ms]
[reassuring] A Z 305では、この4つの製品名は出てきません。でも、コンピューティングソリューションと移行を設計するスキルに、つながっています。選択を迫られるシナリオ問題が、出ると思っておきましょう。
