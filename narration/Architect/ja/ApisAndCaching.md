# Narrator Script — Architect · Front the app: APIs, caching and deployment

**Source animation:** [ApisAndCaching.html](../../../journeys/Architect/ApisAndCaching.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/api-management/api-management-key-concepts>

---

## Step 1 · API Management: one front door

[calm] 現在、Contosoのクライアントはバックエンドに直接連絡しており、ポリシーの執行はアプリケーション内の各所に分散しています。
[600ms]
[curious] API Managementはゲートウェイを前面に配置し、リクエストパスとレスポンスパスにチェックや変換を適用します。
[600ms]
[reassuring] 製品、サブスクリプション、開発者ポータルがAPIの利用を整理し、バックエンドは自らの役割に集中できます。

## Step 2 · API Management: choose the tier

[calm] API Managementの階層は、容量、ネットワーク、提供する可用性機能に違いがあります。
[600ms]
[curious] 比較を使って、不適切な階層を排除する要件を特定し、それが本番トラフィックかどうかも含まれます。
[600ms]
[reassuring] すべての階層が同じネットワークやレジリエンスのオプションを提供していると仮定するのではなく、現在の機能比較を確認してからのみ選択してください。

## Step 3 · Caching: check the cache first

[calm] ストアフロントがデータベースに求める前にキャッシュに商品データを要求するのを見てください。
[600ms]
[curious] キャッシュヒットは迅速に答えを返します。失敗するとアプリケーションはデータストアに送られ、その後キャッシュに入力されます。
[600ms]
[reassuring] このキャッシュアサイドパターンは繰り返しの読み取りを減らしますが、アプリケーションには有効期限と無効化の戦略が引き続き必要です。

## Step 4 · Caching: what belongs in memory

[calm] キャッシュは、頻繁に読み取られ、多少古くなっても問題ないデータに適しています。
[600ms]
[curious] これはContosoの注文やその他のデータの権威ある記録ではありません。
[600ms]
[reassuring] Azure Managed Redisに何を割り当てるかは、アクセスパターンと正確性の要件に基づいて選びましょう。単にメモリが速いからだけでなく。

## Step 5 · Messaging and events: pick by the message

[calm] コマンド、離散イベント、ストリームは異なる通信ニーズを表します。
[600ms]
[curious] Service Busは貴重なビジネスメッセージをサポートし、Event Gridはイベント通知を配信し、Event Hubsはストリームを取り込みます。
[600ms]
[reassuring] ストレージキューはよりシンプルなキューイングニーズに対応できます。サービスを選択する前に、メッセージの意味と必要な保証から始めましょう。

## Step 6 · Configuration: keep settings out of the code

[calm] 同じアプリケーションビルドは、ソースコードに秘密を持たずに環境間で動作すべきです。
[600ms]
[curious] App Configurationは設定と機能フラグを保持し、Key Vaultの参照は別途保護された秘密を指しています。
[600ms]
[reassuring] アプリケーションの各サービスへのアクセスを追いましょう。参照は秘密を設定ストアにコピーしません。

## Step 7 · Deployment: ship safely, roll back fast

[calm] リリースパスは手動の変更をインフラコードとアプリケーションパイプラインに置き換えます。
[600ms]
[curious] デプロイメントスロットは、Contosoが本番トラフィックを切り替える前に新しいバージョンを準備できるようにします。
[600ms]
[reassuring] リリースとロールバックの経路を繰り返し可能に保つことで、緊急の変更を直接ライブアプリケーションに行うよりも設計が安全になります。

## Step 8 · All in one: a fast, safe partner API

[calm] ContosoのパートナーAPIは、単なる高速なバックエンドだけでなく、協調されたサポート決定のセットを備えています。
[600ms]
[curious] ゲートウェイ、キャッシュ、メッセージング、設定、展開パスはそれぞれ異なる問題を解決します。
[600ms]
[reassuring] サービス選択の隣に理由を置いてください。次に、既存のワークロードをどのようにAzure設計に移行させるかを計画します。

