# ナレーション台本 — Azure Containers · 01 · Why Docker

**Source animation:** `static/v2/Container/WhyDocker.html`

<!-- Review sources: https://learn.microsoft.com/virtualization/windowscontainers/about/containers-vs-vm ; https://docs.docker.com/get-started/docker-concepts/building-images/understanding-image-layers/ ; https://buildah.io/ -->

---

**TTS status:** Audio regenerated 2026-09-17 after text review.

## Step 1 · problem

[confident] Contoso の開発チームは、.NET や Java でアプリを作り、コンパイルします。できあがった JAR ファイルや DLL ファイルを運用チームに渡して、デプロイを依頼します。
[600ms]
[calm] でも、その成果物にはコンパイル済みのコードしか入っていません。ビルドに使ったOSのライブラリやランタイムは入っていないのです。
[700ms]
[concerned] ところが、本番サーバーの OS やランタイムは開発環境と異なります。そのため、アプリが正常に動作しないのです。

## Step 2 · drift

[curious] なぜ動かないのでしょうか。原因は、環境ごとの構成のずれです。
[600ms]
[calm] あなたのアプリは、決してコードだけではありませんでした。コードに加えて、特定のランタイムと特定のライブラリ一式まで含めてアプリなのです。
[600ms]
[serious] 開発用ノートPC、テスト用VM、本番 — 環境ごとにそれらが少しずつ違います。どれか一つ変わるだけで、まったく同じビルドが違う動きをします。

## Step 3 · wrap

[confident] ここで Docker の解決策です。Dockerfile は、あなたのコードと依存関係を、ベースのOSとランタイムごと包み込むレシピです。
[600ms]
[calm] docker build コマンドで、それらを一つのイメージにまとめます。この例では、contoso-orders のバージョン一を作ります。
[700ms]
[reassuring] ランタイムとライブラリをイメージに含めることで、環境の違いを減らせます。ただし、ホストの OS、プロセッサのアーキテクチャ、コンテナーランタイムには互換性が必要です。

## Step 4 · layers

[curious] そのイメージの中をのぞくと、一枚の塊ではなく、読み取り専用レイヤーの積み重ねになっています。
[600ms]
[calm] ベースイメージのレイヤーに、依存関係やアプリのファイルを追加するレイヤーが重なります。Dockerfile には、ファイルを変更する命令のほかに、実行時の設定を指定する命令もあります。
[600ms]
[impressed] レイヤーは不変で共有されるので、同じレイヤーは一度だけ保存されます。だからプルは速く、再ビルドも安上がりなのです。

## Step 5 · vmvc

[confident] さて、コンテナーは軽量な仮想マシンではありません。
[600ms]
[calm] VM はそれぞれ独自のゲスト OS を持ち、複数のアプリを実行できます。プロセス分離型のコンテナーはホストのカーネルを共有するため、アプリと依存関係を含めても、独立したゲストカーネルは必要ありません。
[700ms]
[impressed] カーネルの共有によって、必要なリソースを減らせます。一般に VM より少ないリソースで素早く起動できますが、イメージの大きさや起動時間はアプリによって異なります。

## Step 6 · ports

[confident] そのイメージを実行するとコンテナーになり、そのコンテナーこそが Contoso Orders です。中では、アプリはポート3000で待ち受けています。
[600ms]
[calm] アプリはコンテナー内で待ち受けていますが、この例ではホスト側のポートはまだ公開されていません。ポートを公開すると、外部のクライアントがホストを経由してアプリに接続できます。
[600ms]
[encouraging] つまり docker run に -p 8080:3000 を付けます。外部トラフィックはホストのポート8080に届き、Docker がそれをコンテナーのポート3000へ転送します。

## Step 7 · oci

[curious] ここは見落とされがちですが — コンテナーを動かす方法は Docker だけではありません。
[600ms]
[calm] Open Container Initiative、略して OCI は、イメージの形式、コンテナーの実行、イメージの配布に関する仕様を定めています。
[600ms]
[impressed] ツールごとに役割は異なります。containerd と CRI-O はコンテナーを実行し、Podman は管理、Buildah はイメージの作成を担います。共通仕様で連携しやすくなりますが、ホストとの互換性の確認は必要です。

## Step 8 · targets

[confident] 互換性があれば、同じイメージを Azure などの異なる環境で再利用できます。まず、各サービスが対応する OS とイメージ形式を確認しましょう。
[600ms]
[calm] ここでは四つの選択肢を比べます。必要に応じてコンテナーを実行する Azure Container Instances、自動スケールを備えた Azure Container Apps、オーケストレーションを細かく制御する Azure Kubernetes Service、Web アプリ向けの App Service です。
[700ms]
[encouraging] 互換性、スケーリング、必要な制御の範囲で選びましょう。同じイメージを使えばアプリの構成をそろえられますが、デプロイ先ごとの設定は必要です。

## Step 9 · recap

[proud] 要点をまとめましょう。アプリと依存関係を、変更されないレイヤーで構成されたイメージにまとめます。互換性のある開発環境、テスト環境、Azure で再利用できるので、毎回手作業で環境を作り直す必要がありません。
[700ms]
[optimistic] このイメージこそ、この先の旅を通してあなたが保存し、守り、スケールし、実行していく単位です。
[600ms]
[curious] では、そのイメージはどこに保存するのでしょうか。次は Azure Container Registry を見ていきましょう。
