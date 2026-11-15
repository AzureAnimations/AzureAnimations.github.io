# ナレーション台本 — Azure Containers · 03 · Azure Container Instances

**Source animation:** `static/v2/Container/ContainerInstance.html`

---

## Step 1 · what

[confident] コンテナーを 1 つだけ実行したい——クラスターも仮想マシンも、面倒を見るものは何もいらない。そんな場面を思い浮かべてください。
[600ms]
[calm] それが Azure Container Instances です。イメージ——たとえば contoso-orders バージョン ワン——を渡すだけで、単一のコンテナーが数秒で動き出します。
[700ms]
[impressed] これはサーバーレスの単一コンテナー コンピューティングで、ハイパーバイザーで分離され、実行中の間だけ秒単位で課金されます。

## Step 2 · config

[confident] デプロイするのは単なるイメージではありません——container group、それが ACI の扱う単位です。
[600ms]
[calm] そこにイメージと実行時の設定を渡します。CPU とメモリ、環境変数、公開するポート、そして再起動ポリシーです。
[700ms]
[reassuring] その再起動ポリシーが、プロセス終了時の動作を決めます。Always なら実行を維持し、OnFailure ならエラー時に再試行し、Never なら一度だけ実行——バッチ ジョブに最適です。

## Step 3 · pull

[confident] 私たちのイメージ、contoso-orders バージョン ワン は、プライベート レジストリ——contoso ドット アジュール-シー-アール ドット アイオー——にあります。
[600ms]
[calm] そこで ACI は Azure Container Registry からそれを取得します。インスタンスに managed identity を割り当て、AcrPull ロールを付与すれば、プルはそのまま成功します。
[700ms]
[reassuring] 何よりの利点は——レジストリのパスワードをどこにも保存しないこと。シークレットではなく、アイデンティティなのです。

## Step 4 · run

[confident] では実際に起動しましょう——たった 1 つのコマンドがすべてを行います。az container create です。
[600ms]
[calm] クリック操作がお好みですか。Azure Portal には「確認と作成」のフローがありますし、同じ構成を YAML、Bicep、あるいは ARM テンプレートとしてデプロイすることもできます。
[700ms]
[serious] ただし DNS name label はリージョン内でグローバルに一意である必要があります——それがコンテナーを名前で到達可能にする鍵です。

## Step 5 · reach

[confident] ポートを公開すると、ACI はすぐにグループへパブリック IP を割り当てます。
[600ms]
[calm] その DNS name label を加えれば、わかりやすい完全修飾名——contoso-orders ドット イースト-ユーエス ドット アジュール-コンテナー ドット アイオー、ポート エイティ-エイティ で応答——が手に入ります。
[700ms]
[concerned] 一点だけ注意を。グループが再起動するとパブリック IP は変わることがあります。安定したアドレスには、前段に Application Gateway を置いてください。

## Step 6 · limit

[serious] ここが要注意点です。ACI は固定数のコンテナーを実行します——自動スケーリングも、ロード バランサーも、トラフィック分割もありません。
[700ms]
[calm] 単発の、短命な、あるいは固定的なジョブには最適です。でも弾力的な Web トラフィックには、いずれ手狭になります。
[600ms]
[encouraging] そうなったらステップアップしましょう。自動スケーリングするコンテナーなら Azure Container Apps、マネージドな Web アプリなら App Service、フルオーケストレーションなら AKS です。

## Step 7 · recap

[proud] これが Azure Container Instances の全体像です——イメージを渡せば、構成され、ACR から取得され、DNS で到達可能なコンテナーが数秒で稼働します。
[700ms]
[optimistic] Azure でコンテナーを動かす最速の方法です。そしてスケールが必要になった瞬間、次の目的地が引き継ぎます——Azure Container Apps、自動スケールを備えたサーバーレス コンテナーです。
