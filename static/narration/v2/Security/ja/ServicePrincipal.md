# Narrator Script · 日本語 (ja) — Journey 04 · Service Principal とフェデレーション資格情報

**Source animation:** `static/v2/Security/ServicePrincipal.html`
**Language:** Japanese (ja). 英語のマスター台本から翻訳。デリバリー指示 `[tags]` とポーズ `[NNNms]` はそのまま（読み上げず、演出指示です）。ステップ見出しは 1:1 対応のため英語のままにしています。

アニメーションの 1 ステップにつき 1 ブロック。

---

## Step 1 · Ship Contoso from GitHub to Azure

[confident] 目標はこうです。Contoso を GitHub から Azure へまっすぐ出荷すること。
[600ms]
[calm] Contoso のアプリは GitHub にあり、すべての push が、それをビルドして Azure にデプロイする GitHub Actions ワークフローを起動すべきです。
[600ms]
[optimistic] 誰も手作業でファイルをコピーしません。単純な git push が、アプリを自動的に Azure App Service へ出荷します。
[800ms]
[curious] 簡単そうですね... では、何が立ちはだかるのでしょう？

## Step 2 · GitHub and Azure are two different platforms

[concerned] 落とし穴は、GitHub と Azure が 2 つの異なるプラットフォームだということです。
[600ms]
[calm] GitHub Actions は Azure の外で実行されます。ワークフローがデプロイしようとすると、Azure は別のプラットフォームからの、異なるログインを持つ未知の呼び出し元を見ます。
[600ms]
[serious] そこで Azure はそれをブロックします。認識している ID からの要求しか受け入れないのです。
[800ms]
[reflective] 異なるプラットフォーム、異なる ID システム。そして両者の間に共有 ID はありません。

## Step 3 · Trust starts with an identity

[intrigued] では、そのギャップをどう埋めるのでしょう？
[800ms]
[confident] 信頼は ID から始まります。デプロイが機能するには、Azure が GitHub ワークフローを、承認できる既知の呼び出し元として認識する必要があります。
[600ms]
[calm] そして、解決策は共有パスワードではありません。
[600ms]
[reassuring] それは、Azure が既に信頼している Microsoft Entra ID の ID を、ワークフローに与えることです。

## Step 4 · App Registration defines the identity

[confident] その ID は App Registration から始まります。
[600ms]
[calm] Contoso は Microsoft Entra ID に 1 つの App Registration を作成します。これがアプリケーション ID を定義します。
[600ms]
[impressed] このテナントでは、Azure が対応する Service Principal、つまり実際にアクセスの決定を受け取るエンタープライズ アプリケーション インスタンスを評価します。
[600ms]
[reassuring] 設計図とインスタンスと考えてください。App Registration が定義で、Service Principal がテナント内部でのそのローカルな表現です。

## Step 5 · GitHub signs in as the Service Principal

[confident] 今度は GitHub がその Service Principal としてサインインします。
[600ms]
[calm] Azure はワークフローに、アプリケーション（クライアント）ID とオブジェクト ID を持つ Service Principal を与えます。これが Azure 内の GitHub の ID です。
[600ms]
[impressed] GitHub Actions はフェデレーション資格情報を使って、シークレットなしでそれとして認証し、その後 Azure が特定のスコープでのロールで承認します。
[600ms]
[reassuring] Service Principal で包まれると、GitHub はあらゆる Azure ID のように振る舞います。認証し、その後ロールで承認されます。

## Step 6 · Where federation shines

[optimistic] そしてこの信頼モデルは、GitHub をはるかに超えて広がります。
[600ms]
[calm] 同じフェデレーション資格情報は、Microsoft Entra が検証できるあらゆる外部 ID プロバイダーで機能します。
[600ms]
[impressed] Contoso はそれを GitHub Actions、他のクラウド、Kubernetes、オンプレミスで再利用します。どれにも保存されたシークレットはありません。
[600ms]
[reassuring] ソースが何であれ、パターンは同じです。ワークロードは自身のプロバイダーからトークンを持ち込み、Entra はそれを Azure アクセス トークンと交換します。

## Step 7 · From GitHub to Azure — secretless, end to end

[reflective] GitHub から Azure へ。シークレットなしで、端から端まで。
[600ms]
[confident] 2 つの別々のプラットフォームなので、ワークフローは Microsoft Entra ID に ID を得ます。App Registration と Service Principal です。
[600ms]
[proud] フェデレーション資格情報によって Azure は GitHub 自身のトークンを信頼できるので、デプロイは保存されたシークレットなしで実行されます。
[600ms]
[optimistic] 外部ワークロードに ID を与え、その後 Azure にそのトークンを信頼させる。そして同じパターンはほぼどこにでも届きます。
