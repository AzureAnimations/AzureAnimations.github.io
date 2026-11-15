# ナレーション台本 — Azure Containers · 06 · Azure Red Hat OpenShift

**Source animation:** `journeys/Container/AzureRedHatOpenShift.html`

---

## Step 1 · stack

[confident] Azure Red Hat OpenShift の土台は、AKS で見たのと同じ Kubernetes です。
[600ms]
[calm] その周りに、Web コンソール、イメージ レジストリ、ルーティング、ビルド、パイプライン、Operator、監視、ログといったプラットフォーム全体を加え、1 つの製品にまとめています。
[600ms]
[reassuring] Microsoft と Red Hat が共同で設計、運用、サポートし、サポート窓口も 1 つです。
[700ms]
[confident] あなたのサブスクリプションで動き、Azure の請求書に載り、稼働率 99.95% の SLA が付きます。

## Step 2 · resp

[confident] では、誰が何を担うのでしょうか。Microsoft と Red Hat のサイト信頼性エンジニアが、クラスター全体を運用します。
[600ms]
[calm] コントロール プレーンのパッチ適用とスケール、ワーカー ノードの OS 更新、そしてプラットフォームのアラートと監査ログの監視を担当します。
[600ms]
[calm] いくつかは共有です。SRE がテスト済みのバージョンを公開し、アップグレードを始めるのはあなた。ワーカーの追加も、仮想ネットワークの接続もあなたです。
[700ms]
[reassuring] アプリ、データ、開発者サービスはあなたのもの。SRE はプライベート エンドポイント経由でのみクラスターに入ります。

## Step 3 · arch

[confident] AKS と違い、ここでは何も隠れていません。すべてがあなたの仮想ネットワークで動きます。
[600ms]
[calm] 3 つのコントロール プレーン ノードが専用サブネットで API サーバーと etcd を動かし、3 つ以上のワーカー ノードが別のサブネットで Pod を動かします。
[600ms]
[calm] 任意のインフラストラクチャ ノードがルーター、レジストリ、監視をホストし、Azure ロード バランサーが API 呼び出しとアプリの通信を運びます。
[700ms]
[intrigued] クラスターの各部分を選んで、役割と注意点を確認してみましょう。

## Step 4 · hcp

[confident] ARO には 2 つのアーキテクチャがあり、どちらも同じ OpenShift エクスペリエンスを提供します。
[600ms]
[calm] 標準アーキテクチャはすべてをあなたのサブスクリプションに置き、コントロール プレーン 3 台とワーカー 3 台以上で構成され、作成には約 45 分かかります。
[600ms]
[intrigued] プレビュー中のホステッド コントロール プレーンでは、コントロール プレーンが Red Hat 所有の Azure アカウントに移ります。
[700ms]
[confident] ワーカー 2 台から始められ、クラスターは約 15〜20 分で準備でき、ノード プールは別々にアップグレードできます。

## Step 5 · projects

[confident] 次はチームを迎え入れましょう。開発者は職場アカウントと MFA を使い、Microsoft Entra ID でサインインします。
[600ms]
[calm] OpenShift に組み込まれた OAuth サーバーが、その OpenID Connect トークンを受け取ってアクセスを許可します。
[600ms]
[calm] チームはプロジェクトの中で作業します。自分たちで作成できる Kubernetes 名前空間で、クォータとネットワーク ポリシーが付いています。
[700ms]
[reassuring] プロジェクトごとに admin、edit、view を割り当てれば、各チームに必要なアクセスだけを与えられます。

## Step 6 · s2i

[confident] ここが開発者にとって OpenShift の真骨頂です。Git から実行中のアプリまで、Dockerfile なしで進みます。
[600ms]
[calm] webhook が Source-to-Image ビルドを始め、言語別のビルダー イメージとコードを組み合わせます。
[600ms]
[calm] イメージは組み込みレジストリに入り、ImageStream が追跡します。その新しいイメージが、Pod のローリング更新を起動します。
[700ms]
[impressed] 最後に Route が HTTPS の URL で公開します。各段階を選んで、仕組みを確かめてみましょう。

## Step 7 · routes

[confident] Route は Service を公開します。通信は Azure ロード バランサーから入り、インフラ ノード上の OpenShift ルーターに届きます。
[600ms]
[calm] edge 終端では、ルーターが証明書を持ち、平文の HTTP を Pod に送ります。最も一般的な選択です。
[600ms]
[calm] passthrough では、ルーターは一切復号せず、アプリがエンドツーエンドで TLS を保ちます。
[700ms]
[reassuring] そして re-encrypt では両方の区間が暗号化されますが、証明書を 2 つ管理する必要があります。

## Step 8 · operators

[confident] Operator は、ソフトウェアを運用するソフトウェアです。
[600ms]
[calm] カスタム リソースで望む状態を宣言すると、Operator がそれを読み、アプリを作成・修復し、状態を報告します。これを調整ループとして繰り返します。
[600ms]
[calm] OpenShift 自体もクラスター Operator で動いていて、SRE が管理状態を保っています。
[700ms]
[impressed] さらに OperatorHub から、Pipelines、GitOps、Serverless、Service Mesh、Virtualization、パートナーの Operator を数クリックで追加できます。

## Step 9 · security

[confident] OpenShift は既定でセキュアです。すべての Pod は実行前にセキュリティ コンテキスト制約を通ります。
[600ms]
[calm] root での実行を求める Pod は、既定の制約 restricted-v2 によって拒否されます。
[600ms]
[reassuring] ユーザーを指定しない Pod は許可され、プロジェクトの範囲から割り当てられた、root ではないランダムなユーザー ID で動きます。
[700ms]
[confident] さらに Entra ID でのサインイン、プライベート API とイングレス、送信のロックダウン、ネットワーク ポリシー、イミュータブルな RHCOS ノード、マネージド ID が加わります。

## Step 10 · day2

[confident] Day 2 のアップグレードは、あなたの都合で進められます。
[600ms]
[calm] Red Hat と Microsoft がテスト済みのバージョンを公開し、あなたがタイミングを選ぶと、OpenShift はコントロール プレーンを更新し、ワーカーを 1 台ずつドレインして更新するので、アプリは提供を続けられます。
[600ms]
[calm] Prometheus と Alertmanager はプリインストール済みで、プラットフォーム ログと監査ログは自動的に SRE に届きます。
[700ms]
[reassuring] Azure Arc で接続すれば Azure Monitor が使え、アプリのログは Log Analytics に送れます。

## Step 11 · vsaks

[confident] では、AKS と ARO のどちらを選ぶべきでしょうか。同じ Kubernetes でも、提供形態が違います。
[600ms]
[calm] AKS は身軽です。Azure が見えないコントロール プレーンを運用し、アドオンはすべて自分で選びます。必要なら Windows ノード プールも使えます。
[600ms]
[calm] ARO は完全な OpenShift プラットフォームで、Microsoft と Red Hat の SRE がクラスター全体を運用します。
[700ms]
[reassuring] すでに OpenShift に慣れているか、すべてを組み込みでほしいなら ARO を。ただし最小構成が大きく、ワーカーごとに OpenShift 料金がかかる点を考慮しましょう。

## Step 12 · recap

[confident] これが Azure Red Hat OpenShift の全体像です。
[600ms]
[calm] 共同で運用され、あなたのサブスクリプションで動き、ビルド、レジストリ、Route、Operator という完全なプラットフォームを開発者に提供します。
[600ms]
[reassuring] 既定でセキュアで、Day 2 のアップグレード時期はあなたが決め、監視も組み込まれています。
[700ms]
[impressed] これでコンテナーのジャーニーは完了です。さらに詳しくは Microsoft Learn へ。
