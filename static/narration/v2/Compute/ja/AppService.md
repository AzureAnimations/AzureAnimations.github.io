# ナレーション台本 — Azure PaaS Compute · 02 · App Service

**Source animation:** `static/v2/Compute/AppService.html`

---

## Step 1 · intro

[confident] さあ、主役の登場です。App Service。これは実際のアプリケーション、Contoso のストアフロントで、いま見たプランの上で動いています。
[600ms]
[reassuring] しかも完全マネージドです。Azure がオペレーティングシステム、ランタイム、パッチ適用を引き受けるので、あなたはコードに集中できます。
[700ms]
[calm] ほぼどんな言語でも作れます。.NET、Node、Python、Java、PHP、あるいは自分のコンテナーでも。

## Step 2 · deploy

[confident] 手作業でファイルをアップロードすることはめったにありません。代わりにソースを接続します。Git、GitHub、Azure DevOps、または Bitbucket です。
[600ms]
[calm] それ以降は、ブランチへの push ごとに、アプリが自動でビルド、テスト、デプロイされます。
[700ms]
[encouraging] 変更をコミットすれば、あとはパイプラインが本番まで運んでくれます。

## Step 3 · slotsIntro

[confident] 一つの App Service は、自分自身のライブなコピーを複数実行できます。これをデプロイスロットと呼びます。
[600ms]
[calm] 本番スロットは Contoso の現在のサイトを配信し続けます。刷新のときが来たら、リデザイン用のステージングスロットを、独自のアドレスと設定で追加します。本番には一切触れません。
[700ms]
[reassuring] 同じアプリ、実行中の二つのバージョン、どちらも一つのリソースの中で安全に。

## Step 4 · slots

[confident] スロットの真価はここです。訪問者が来ると、App Service は実際のトラフィックを、あなたが決めた割合で振り分けられます。
[600ms]
[calm] たとえば九十パーセントを信頼できるライブサイトへ、そして十パーセントだけをステージングの新しいリデザインへ。
[700ms]
[impressed] 動きを見ながら、新バージョンの割合を上げる、あるいはゼロに戻す。再デプロイは不要です。満足したら、一度のスワップで即座に、ダウンタイムなしで本番に切り替わります。

## Step 5 · auth

[confident] サインインが必要ですか。認証コードを書く必要はまったくありません。
[600ms]
[calm] ポータルでプロバイダーを有効にするだけです。Microsoft、Google、Facebook、Apple、あるいは任意の OpenID Connect プロバイダー。
[700ms]
[reassuring] App Service はアプリの前に立ち、リクエストがコードに届く前にトークンを検証します。コードではなく、設定です。

## Step 6 · security

[confident] 既定では、アプリは azure-websites のアドレスで応答します。自分のブランドを使うには、カスタムドメインを追加します。
[600ms]
[calm] DNS レコードでドメインをアプリに向けると、Azure が無料のマネージド T-L-S 証明書を発行し、自動更新します。
[700ms]
[reassuring] HTTPS は既定で強制されるので、あなたのドメインの訪問者は常に暗号化された接続になります。

## Step 7 · traffic

[confident] グローバルに展開する準備はできましたか。App Service を複数のリージョンで実行しましょう。
[600ms]
[calm] あとは Traffic Manager が、各訪問者を最も近い正常なリージョンへ振り分けます。
[700ms]
[reassuring] そして、あるリージョンが異常になれば、自動でそこを迂回します。コードの変更はいりません。

## Step 8 · recap

[proud] すべてをまとめましょう。コンピューティングのプラン、コードの App Service、継続的デプロイ、スロット、組み込み認証、無料の T-L-S、そしてグローバルなルーティング。
[600ms]
[encouraging] これで本番対応のウェブアプリです。ぜひ自分で試してください。プランを作り、その上に App Service を作れば、もう公開です。
