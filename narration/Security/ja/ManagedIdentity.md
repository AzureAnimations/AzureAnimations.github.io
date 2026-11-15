# Narrator Script · 日本語 (ja) — Journey 03 · Managed Identity

**Source animation:** `static/v2/Security/ManagedIdentity.html`
**Language:** Japanese (ja). 英語のマスター台本から翻訳。デリバリー指示 `[tags]` とポーズ `[NNNms]` はそのまま（読み上げず、演出指示です）。ステップ見出しは 1:1 対応のため英語のままにしています。

アニメーションの 1 ステップにつき 1 ブロック。

---

## Step 1 · Where we start: an app that needs a database

[calm] ほとんどのアプリが始まる場所から始めましょう。
[600ms]
[confident] Contoso のバックエンドは Azure VM の中で実行され、Azure SQL Database を読み取る必要があります。
[600ms]
[calm] 接続する前に、データベース管理者がログイン（ユーザー名とパスワード）を発行し、そのログインにデータベースへのアクセス許可を付与します。
[600ms]
[reflective] これは典型的なセットアップです。アプリは、誰かが渡した資格情報で自分が誰であるかを証明します。

## Step 2 · That login ships inside the app — in plain text

[concerned] しかし、そのログインがどこに行き着くか見てください。
[600ms]
[serious] ユーザー名とパスワードはアプリに保存され、アプリと一緒にデプロイされます。多くの場合、.env や構成ファイルに平文で置かれます。
[600ms]
[concerned] この共有サービス アカウントを、私たちは機能 ID と呼びます。そしてこれは単純にスケールしません。
[800ms]
[serious] そのファイルを読める人は誰でもデータベースのログインを手に入れられ、新しいアプリごとに独自のものが必要になります。

## Step 3 · Managed identity solves it — a role, not a password

[confident] マネージド ID がこれを解決します。パスワードではなく、ロールで。
[600ms]
[calm] 同じ VM、同じ Contoso アプリ、同じデータベース。しかし今やアプリにはマネージド ID、つまり Microsoft Entra ID 内の独自の組み込み ID があります。
[600ms]
[impressed] ユーザー名とパスワードを発行する代わりに、管理者はデータベースのアクセス制御を開き、その ID に必要なロールだけを割り当てます。
[600ms]
[reassuring] 資格情報が作成・保存されることは一切ありません。あるのは ID と、最小権限のアクセスだけです。

## Step 4 · Turn it on — enable the managed identity

[confident] そして、オンにするのは本当に簡単です。
[600ms]
[calm] Azure Portal でリソースを開き、[ID] に移動し、システム割り当ての状態を [オン] に切り替えて保存します。すると Azure が Microsoft Entra ID に ID を作成します。
[600ms]
[amused] コマンド ラインがお好みですか？ Azure CLI の 1 行でまったく同じことができます。
[600ms]
[reassuring] ほとんどの Azure のコンピューティングおよびアプリ サービスがこれをサポートします。仮想マシン、App Service、Functions、Container Apps、AKS など、多数です。

## Step 5 · The catch — one identity per resource

[concerned] ただし、規模が大きくなると落とし穴があります。
[600ms]
[calm] Contoso のバックエンドは多くのホスト（VM、App Service、Functions、Container Apps、AKS）で実行されます。
[600ms]
[serious] システム割り当て ID では、チームがすべてのリソースで 1 つずつ有効化し、管理者が各 ID に個別にアクセスを付与します。
[800ms]
[concerned] マシンを増やすとすべて繰り返しになります。実際には 1 つのアプリなのに、維持するものが多すぎます。

## Step 6 · One identity, shared — user-assigned

[confident] そこで、代わりに 1 つの ID を共有します。ユーザー割り当てです。
[600ms]
[calm] Contoso は 1 つのユーザー割り当てマネージド ID を作成し、すべてのホストにアタッチします。VM、App Service、Functions、Container Apps、AKS がすべて同じ ID を参照します。
[600ms]
[impressed] 管理者はその 1 つの ID にアクセスを一度だけ付与します。別のマシンを追加しても、同じ ID をアタッチするだけ。新しい付与は不要です。
[600ms]
[reassuring] これは安定したオブジェクト ID を持つ、それ自身の Azure リソースであり、どの単一ホストからも独立して存在します。

## Step 7 · Recap — System-assigned vs User-assigned

[reflective] 1 つのシークレットレスな考え方の 2 つの形をまとめましょう。
[600ms]
[confident] どちらも、ワークロードがシークレットの代わりに Microsoft Entra トークンで認証し、その後、最小権限のロールを取得できるようにします。
[600ms]
[calm] 違うのは、作成方法、ライフサイクル、そして共有できるかどうかだけです。
[600ms]
[reassuring] システム割り当ては単一リソースに最もシンプルです。ユーザー割り当ては、複数のリソースが 1 つの ID を共有する場合に推奨される、再利用可能な選択肢です。
