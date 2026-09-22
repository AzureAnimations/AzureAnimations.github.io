# ナレーション原稿 - 管理とデプロイ

**Source animation:** journeys/Fundamentals/ManageAndDeploy.html
**Script status:** Authored voiceover.
**Language:** 日本語

角括弧内は読み上げない演出指示です。間を置く位置は独立した行で示します。各ブロックはアニメーションの1ステップに対応します。
<!-- Sources: https://learn.microsoft.com/azure/azure-resource-manager/management/overview ; https://learn.microsoft.com/azure/azure-resource-manager/bicep/overview ; https://learn.microsoft.com/azure/cloud-shell/overview ; https://learn.microsoft.com/powershell/module/az.resources/get-azresourcegroup ; https://learn.microsoft.com/azure/azure-arc/servers/overview -->

## Step 1 · Built by hand, twice

[calm] Contoso はテストに VM を一台、本番に二台用意しました。
容量の増加は計画どおりですが、本番の Environment タグがないのは手作業による設定ミスです。
[600ms]
[confident] レビュー済みのインフラ定義に設計を記録し、パラメーターで承認済みの違いを明示します。
これで意図した選択と、設定のずれを区別できます。

## Step 2 · Start in the portal

[calm] Maya はブラウザーの画面で操作できる Azure portal を使い、本番 VM を確認します。
サブスクリプション、リソース グループ、リージョン、サイズ、タグを調べ、アクセス制御で管理権限を確認します。
[600ms]
[confident] 画面での確認や個別作業にはポータルが便利です。
管理要求は Resource Manager を使うため、画面を変えても権限やポリシーを回避できません。

## Step 3 · Repeat it with commands

[calm] この二つのコマンドは、現在のサブスクリプションのリソース グループを一覧表示します。
Azure CLI はエーゼットで始まるコマンドを使い、Azure PowerShell は Az コマンドレットからオブジェクトを取得してパイプラインで扱います。
[600ms]
[confident] Cloud Shell は Bash や PowerShell とツールを備えた、ブラウザー用の実行環境です。
ツールはローカルでも使えます。サインインと権限は必要で、Azure リソースが無料になるわけではありません。

## Step 4 · Describe it as code

[calm] インフラストラクチャをコードで管理すると、望む状態を記録できます。
Bicep は簡潔な宣言型の言語で、ARM JSON テンプレートに変換されます。パラメーターは入力、リソースは配置する定義、出力は返される値です。
[600ms]
[confident] 定義をバージョン管理し、変更をレビューします。
同じ入力で繰り返しデプロイしても、重複を作らず同じ状態に到達できる性質を、冪等性と呼びます。

## Step 5 · Same definition, intentional differences

[calm] この例は Contoso のストレージ部分です。
テストか本番を選び、冗長性を指定します。パラメーター ファイルの値を同じ定義に渡し、名前、Environment タグ、ストレージ SKU を設定します。
[600ms]
[confident] デプロイ前に結果をプレビューします。プレビューではリソースを作成しません。
このテンプレートは店舗 VM の配置や顧客データのコピーも行いません。それらは別の定義と作業です。

## Step 6 · The management request path

[calm] Contoso がストレージの作成を要求します。Reader では認可に失敗します。
Contributor でも Environment タグがなければ、例の Deny ポリシーが拒否します。権限とタグがそろうと、模擬要求は Microsoft Storage に届き成功します。
[600ms]
[confident] 有効なコードでも認可やポリシーを回避できません。このシミュレーションは Azure の全エラーを再現しません。
顧客の購入処理は、この管理経路とは別のデータ経路を使います。

## Step 7 · Reach beyond Azure

[calm] Contoso は倉庫サーバーに Connected Machine エージェントを入れ、Azure Arc に接続します。
サーバーは Azure リソースとして表示され、インベントリ、アクセス制御、対応する管理サービスを利用できます。Arc は Kubernetes や SQL Server にも対応します。
[600ms]
[confident] 管理と移行は別です。
サーバーは倉庫で動き続け、OS の管理も必要です。接続する Azure サービスには別途料金がかかる場合があります。

## Step 8 · Manage and Deploy - All in One

[calm] 作業に最も合うツールを選びます。
画面での確認はポータル、コマンドの反復は CLI や PowerShell、宣言型インフラは ARM や Bicep、Azure 外の対応リソースの管理は Arc です。
[600ms]
[confident] ツールは互いを補完し、どれを選んでも権限やポリシーを回避できません。
Contoso は管理の選択を説明できるようになりました。次は監視で店舗の稼働状況を把握します。