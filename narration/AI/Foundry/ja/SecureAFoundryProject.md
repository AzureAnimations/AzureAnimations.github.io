# Narrator Script — Foundry · Secure a Foundry Project: Identity, Network and Guardrails

**Source animation:** [SecureAFoundryProject.html](../../../../journeys/AI/Foundry/SecureAFoundryProject.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/foundry/concepts/authentication-authorization-foundry>
- <https://learn.microsoft.com/azure/foundry/concepts/rbac-foundry>
- <https://learn.microsoft.com/azure/foundry/how-to/configure-private-link>
- <https://learn.microsoft.com/azure/foundry/guardrails/guardrails-overview>

---

## Step 1 · Keys in a screenshot: why keyless

[serious] APIキーは、変わらない固定のシークレットです。スクリーンショットやチャット、リポジトリに載ってしまうと、持っている人は誰でも、すべてにアクセスできてしまいます。
[600ms]
[concerned] しかも、誰が使ったのかもわかりません。ここにあるキーはダミーで、Contosoは架空の会社です。
[600ms]
[confident] Microsoftは、代わりにMicrosoft Entra IDを使うことを推奨しています。本番のワークロードなら、これが正しい選択です。

## Step 2 · Managed identity: for the project and your app

[calm] WebアプリとFoundryプロジェクトには、それぞれ専用のマネージドIDを付けましょう。資格情報はAzureが管理するので、保存もローテーションも必要ありません。
[600ms]
[confident] そのうえで、ロールの割り当てによって、各IDに許可する操作を決めます。
[600ms]
[curious] IDには、システム割り当てとユーザー割り当ての2種類があります。トークンでサインインするには、Foundryリソースにカスタムサブドメインが必要です。

## Step 3 · Roles: who deploys, who calls, who builds

[calm] Foundryには、組み込みのロールがあります。作業ごとに、いちばん権限の小さいロールを選びましょう。
[600ms]
[confident] そして、その作業を行うスコープでロールを割り当てます。そうすれば、人もアプリも、必要以上の権限を持ちません。
[600ms]
[serious] ロールが適用されるのは、Microsoft Entra IDでサインインしたときです。APIキーはロールを素通りして、すべての権限を与えてしまいます。

## Step 4 · Private endpoints: close the public door

[calm] パブリックネットワークアクセスを「無効」にして、プライベートエンドポイントを追加します。
[600ms]
[confident] これで、呼び出し元は、開かれたインターネットではなく、仮想ネットワーク経由でFoundryリソースにアクセスします。
[600ms]
[curious] ネットワークの中では、同じエンドポイント名が、プライベートリンクのDNSゾーンによって、プライベートアドレスに解決されます。

## Step 5 · Data and egress: what leaves the network

[curious] エージェントクライアントは、自分のサブネットに配置されます。Storage、AI Search、Cosmos DBへは、プライベートエンドポイントで接続します。
[600ms]
[confident] ネットワークから外へ出てよい通信は、ファイアウォールが決めます。
[600ms]
[reassuring] 標準構成では、Storage、AI Search、Cosmos DBを自分で用意します。そのため、エージェントのデータは、自分のAzureテナントの中に残ります。

## Step 6 · Content filters: categories, severity, blocking

[calm] Foundryでは、これをガードレールと呼びます。コントロールが、4つの有害カテゴリーそれぞれを、重大度でスコア付けします。
[600ms]
[curious] そのあと、選んだブロックレベルに応じて、結果に注釈を付けるか、ブロックします。スイッチを試してみましょう。
[600ms]
[confident] コントロールは、ユーザーの入力と出力をスキャンします。エージェントでは、プレビュー機能として、ツール呼び出しとツールの応答もスキャンできます。モデルは、変更しない限り、デフォルトのガードレールを使います。

## Step 7 · Prompt Shields and groundedness

[serious] Prompt Shieldsは、敵意のある指示や隠された指示を、モデルが実行する前に見つけ出します。
[600ms]
[concerned] ドキュメント攻撃の検出は、デフォルトではオフです。必ずオンにしましょう。
[600ms]
[calm] グラウンデッドネス検出は、回答をソーステキストと照らし合わせて確認します。プレビュー機能で、エージェントには適用されず、2027年4月30日に提供終了となります。

## Step 8 · Custom blocklists and risk detection

[calm] 独自の禁止用語も追加できます。完全一致でも、正規表現でも指定できます。
[600ms]
[curious] 次に、保護された素材と個人データの検出をオンにします。個人データの検出は、プレビューです。
[600ms]
[confident] どの検出も、返信に注釈を付けるか、ブロックするかを選べます。ここに出てくる名前や数字は、すべて架空のものです。

## Step 9 · Audit it: logs, traces and approval gates

[calm] リソースログをAzure Monitorに送って、エージェントの実行をすべてトレースします。
[600ms]
[serious] リスクの高いツール呼び出しは、人が承認するまで待たせましょう。この例では、常に承認を必須にしたMCPツールを使っています。
[600ms]
[confident] 承認とツール呼び出しはログに残しておくと、あとで監査できます。

## Step 10 · Secure project at a glance

[calm] 4つの層が連携して守ります。誰が呼び出しているか、どのネットワークか、どんなコンテンツか、そして、あとから何を証明できるかです。
[600ms]
[reflective] どれか1つの層だけでは、十分ではありません。
[600ms]
[proud] ID、ネットワーク、ガードレール、監査は、互いに補い合います。この4つがそろって、はじめて説明のつくプロジェクトになります。
