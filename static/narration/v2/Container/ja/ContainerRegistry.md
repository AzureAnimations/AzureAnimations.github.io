# ナレーション台本 — Azure Containers · 02 · Azure Container Registry

**Source animation:** `static/v2/Container/ContainerRegistry.html`

---

## Step 1 · dockerhub

[confident] 前の章では、contoso-orders version one というイメージをビルドしましたね。
[600ms]
[curious] では、docker push を実行するとそれはどこへ行くのでしょう? 名前の前にレジストリが付いていなければ、Docker は docker dot io — つまり公開の Docker Hub に送ります。
[700ms]
[calm] これは便利な既定値ですが、あなたのイメージが公開リポジトリに置かれるということでもあります。自分のアプリではたいていそれは望ましくありません。

## Step 2 · acr

[confident] 解決策はこうです — 自分が所有するプライベートな場所にイメージを置きましょう。
[600ms]
[calm] 名前の前にレジストリのログインサーバー、contoso dot azure-c-r dot io を付けます。すると docker push は、あなた自身の Azure Container Registry に直接アップロードします。
[700ms]
[reassuring] まず az acr login でサインインすると、ACR は Microsoft Entra ID で認証します — 共有パスワードが飛び交うことはありません。

## Step 3 · tasks

[confident] ビルドするのに、自分のマシンで Docker を動かす必要すらありません。
[600ms]
[impressed] ACR Tasks なら、たった一つのコマンド — az acr build — が Azure 上でイメージをビルドし、あなたのためにプッシュしてくれます。
[700ms]
[intrigued] さらに、自動で再ビルドもできます — git のコミット時、スケジュール、あるいはベースイメージにパッチが当たったとき。だからセキュリティ修正が、指一本動かさずにすべてのイメージへ行き渡ります。

## Step 4 · tiers

[confident] どのレジストリも、Basic、Standard、Premium という三つのレベルのいずれかで提供されます。
[600ms]
[calm] すべてまったく同じレジストリ API を話します。上のレベルへ移るのは、主に含まれるストレージとイメージのスループットを増やすためです。
[700ms]
[encouraging] 開発には Basic、たいていの本番には Standard から始めましょう。そして geo レプリケーション、Private Link、またはカスタマー マネージド キーが必要になったら Premium を選びます。

## Step 5 · features

[confident] ACR は、イメージを置くだけの棚をはるかに超えたものです。
[600ms]
[impressed] Entra のロールとトークンでアクセスを保護し、リージョン間でレプリケートし、Microsoft Defender がプッシュされた各イメージの脆弱性をスキャンします。
[700ms]
[intrigued] そして OCI レジストリなので、Helm チャートやその他のアーティファクトも保持します — コンテナー イメージだけではありません。

## Step 6 · advanced

[confident] 単純な push と pull を超えて成長すると、ACR にはより奥深いツールボックスがあります。
[600ms]
[impressed] アーティファクト キャッシュは人気の機能です — Docker Hub などの公開イメージを自分のレジストリにミラーし、レート制限を回避してプライベート ネットワーク越しに素早く取得します。
[700ms]
[intrigued] さらに、起動を速くするアーティファクト ストリーミング、エッジ向けの connected registry、ミスを取り戻すソフト削除、そしてデプロイ内容を検証するイメージ署名もあります。

## Step 7 · recap

[proud] これがあなたのイメージ サプライ チェーンです — 一度ビルドし、Azure のプライベート レジストリにプッシュし、クラウドでパッチを当て、レベルでスケールし、端から端まで保護します。
[700ms]
[optimistic] イメージを Azure に保存してビルドしたら、いよいよ実行の準備が整いました。次の目的地は Azure Container Instances — 単一のコンテナーを最速で立ち上げる方法です。
