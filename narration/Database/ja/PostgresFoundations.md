# Narrator Script — PostgreSQL: 構築とクエリ

**Source animation:** [PostgresFoundations.html](../../../journeys/Database/PostgresFoundations.html)
**Language:** ja

角かっこ内は話し方の指示です。[600ms] は文と文の間のポーズを表します。

<!-- Fact source: https://learn.microsoft.com/en-us/training/modules/build-query-azure-database-postgresql/ · Learning path: https://learn.microsoft.com/en-us/training/paths/develop-ai-solutions-azure-database-postgresql/ -->

## Step 1 · Why PostgreSQL behind the assistant?

[curious] Contoso Outfitters のサポート アシスタントには、詳細を推測するのではなく、取得できる注文や製品の事実が必要です。
[600ms]
[confident] PostgreSQL は、リレーショナル テーブル、トランザクションの信頼性、柔軟な JSON データ、拡張機能でアシスタントのツールを支えます。
[600ms]
[reassuring] ツール呼び出しが会話と保存された業務レコードを結び、アシスタントが回答するための事実に基づく土台になります。

## Step 2 · A managed PostgreSQL, compute apart from storage

[confident] Azure Database for PostgreSQL はコミュニティ版 PostgreSQL をマネージド サービスとして実行し、コンピューティングとストレージを分離しています。
[600ms]
[calm] コンピューティング レベルは、断続的な利用、一般的なアプリケーション、より多くのメモリが必要な処理などに対応します。
[600ms]
[serious] ワークロードに合わせて選び、レベルの変更には短い再起動が伴うことも覚えておきましょう。

## Step 3 · Connect with a token, not a password

[confident] アプリケーションは Microsoft Entra ID に有効期間の短いトークンを要求し、PostgreSQL への接続時に提示します。
[600ms]
[calm] 保存したパスワードの代わりにトークンを使い、接続を通るデータは暗号化で保護します。
[600ms]
[serious] この認証フローを利用する前に、サーバーに Microsoft Entra 管理者を設定しておく必要があります。

## Step 4 · Model orders and products as tables

[confident] スキーマは業務の事実を型付きの列で表し、キーと制約によって有効なレコードの条件を定めます。
[600ms]
[calm] 外部キーで注文と製品を結び付け、必須の値や許可されたステータスでデータの構造を守ります。
[600ms]
[serious] 実際の検索パターンに合うインデックスを追加し、読み取りの高速化にはストレージと書き込みの負担も伴うことを意識しましょう。

## Step 5 · Page through orders the efficient way

[curious] 後のページに進むために行をスキップすると、顧客に表示しないデータまで読み取り、破棄することになります。
[600ms]
[confident] キーセット ページングでは、最後に返した注文のタイムスタンプと一意の識別子を組み合わせ、その続きから取得します。
[600ms]
[reassuring] 並べ替えとフィルターに同じ組み合わせを使うと、同じ時刻の注文を扱いつつ、前のページを繰り返しスキップする処理を避けられます。

## Step 6 · Call it from Python with psycopg

[confident] Python のアダプターはアプリケーションを PostgreSQL に接続し、認証用トークンを取得して、パラメーター化クエリで注文を取り出します。
[600ms]
[serious] 顧客の入力を文字列に組み込んでクエリを作るのではなく、値はクエリのテキストと分けて渡します。
[600ms]
[reassuring] コンテキスト マネージャーが後片付けを担い、チェックリストではタイムアウト、再試行、バッチ処理、接続の再利用も確認できます。

## Step 7 · The exercise: an agent tool backend

[confident] 質問が Python のツールを通って PostgreSQL に届き、取得した事実がアシスタントへ戻る流れを追います。
[600ms]
[calm] 注文の質問は流れを示す例で、演習では会話、メッセージ、タスクのチェックポイントなどのエージェント メモリを保存します。
[600ms]
[encouraging] ツール層とデータベースを Microsoft Entra 認証でつなぎ、このメモリのワークフローを構築してテストしましょう。

## Step 8 · PostgreSQL: build and query, all in one

[confident] 一つのやり取りの背後で、アシスタント、Python のツール、ID による認証、マネージド PostgreSQL データベースがつながります。
[600ms]
[calm] 制約がレコードを整え、インデックスが検索を支え、効率的なクエリがアシスタントに必要な情報を取得します。
[600ms]
[encouraging] このリレーショナルな基盤ができたら、次はベクトル検索を加えて、意味で関連するコンテンツを見つけましょう。
