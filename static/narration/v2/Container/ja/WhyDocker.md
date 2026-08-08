# ナレーション台本 — Azure Containers · 01 · Why Docker

**Source animation:** `static/v2/Container/WhyDocker.html`

---

## Step 1 · problem

[confident] Contoso を見てみましょう。チームは .NET や Java でアプリを書いてコンパイルし、その成果物 — dot jar や dot d-l-l — を運用チームに渡してデプロイします。
[600ms]
[calm] でも、その成果物にはコンパイル済みのコードしか入っていません。ビルドに使ったOSのライブラリやランタイムは入っていないのです。
[700ms]
[concerned] だから本番サーバーでは別のOS、別のランタイムに出会って — 壊れてしまいます。

## Step 2 · drift

[curious] では、なぜ壊れるのでしょう。一言で言えば「ドリフト」です。
[600ms]
[calm] あなたのアプリは、決してコードだけではありませんでした。コードに加えて、特定のランタイムと特定のライブラリ一式まで含めてアプリなのです。
[600ms]
[serious] 開発用ノートPC、テスト用VM、本番 — 環境ごとにそれらが少しずつ違います。どれか一つ変わるだけで、まったく同じビルドが違う動きをします。

## Step 3 · wrap

[confident] ここで Docker の解決策です。Dockerfile は、あなたのコードと依存関係を、ベースのOSとランタイムごと包み込むレシピです。
[600ms]
[calm] そして docker build が、そのすべてを一つのイメージに封じ込めます。Contoso なら contoso-orders version one です。
[700ms]
[reassuring] これでランタイムもライブラリもイメージの中を一緒に運ばれます。ホストにはコンテナーランタイムさえあればよく、あのOSの不一致はもう起こりようがありません。

## Step 4 · layers

[curious] そのイメージの中をのぞくと、一枚の塊ではなく、読み取り専用レイヤーの積み重ねになっています。
[600ms]
[calm] Dockerfile の各行がレイヤーを一つずつ足していきます。ベース、依存関係、その上にあなたのアプリ、という順です。
[600ms]
[impressed] レイヤーは不変で共有されるので、同じレイヤーは一度だけ保存されます。だからプルは速く、再ビルドも安上がりなのです。

## Step 5 · vmvc

[confident] さて、コンテナーは軽量な仮想マシンではありません。
[600ms]
[calm] VM はハードウェアを仮想化し、アプリごとに完全なゲストOSを動かします。コンテナーはホストのカーネルを共有し、アプリとそのライブラリだけを詰めます — まるごとのマシンではなく、隔離されたプロセスです。
[700ms]
[impressed] その共有カーネルこそが肝です。コンテナーは数秒で起動し、ギガバイトではなくメガバイト級で、一台のホストにずっと多く詰め込めます。

## Step 6 · ports

[confident] そのイメージを実行するとコンテナーになり、そのコンテナーこそが Contoso Orders です。中では、アプリはポート3000で待ち受けています。
[600ms]
[calm] でも、コンテナー内のポートは閉じています。リクエストを入れるには、イメージを実行するときにそのポートを公開します。
[600ms]
[encouraging] つまり docker run に -p 8080:3000 を付けます。外部トラフィックはホストのポート8080に届き、Docker がそれをコンテナーのポート3000へ転送します。

## Step 7 · oci

[curious] ここは見落とされがちですが — コンテナーを動かす方法は Docker だけではありません。
[600ms]
[calm] あなたのイメージは Open Container Initiative、つまり OCI 標準に従い、この標準は image、runtime、distribution の三つの仕様を定めています。
[600ms]
[impressed] だから OCI 準拠のランタイムなら、どれでもそのまま動かせます — Docker の中や AKS ノードで動くエンジンの containerd、さらに CRI-O、Podman、Buildah です。多くは Linux Foundation と CNCF のもとにあるオープンソースです。

## Step 8 · targets

[confident] オープン標準だからこそ、一つのイメージはどこでも — Azure のあちこちでも動きます。
[600ms]
[calm] 同じ成果物に、四つの入り口があります。単一コンテナーの Azure Container Instances、サーバーレスで自動スケールする Azure Container Apps、完全な制御ができる Azure Kubernetes Service、そして管理された Web アプリとして動かす App Service です。
[700ms]
[encouraging] あとは必要なオーケストレーションの度合いで選ぶだけ — イメージは決して変わりません。

## Step 9 · recap

[proud] というわけで、これがすべての考え方です。アプリと依存関係を、不変でレイヤー化されたイメージとして一度だけパッケージし、その同じイメージをどこでも — ノートPCでも、CIでも、Azure でも動かします。
[700ms]
[optimistic] このイメージこそ、この先の旅を通してあなたが保存し、守り、スケールし、実行していく単位です。
[600ms]
[curious] でも、そこで一つ疑問が湧きます — そのイメージたちは、実際どこに住んでいるのでしょう。次の目的地は Azure Container Registry です。
