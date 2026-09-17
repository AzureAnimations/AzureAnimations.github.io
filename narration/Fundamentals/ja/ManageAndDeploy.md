# ナレーション原稿 - 管理とデプロイ

**Source animation:** journeys/Fundamentals/ManageAndDeploy.html
**Script status:** Authored voiceover.
**Language:** 日本語

角括弧内は読み上げない演出指示です。間を置く位置は独立した行で示します。各ブロックはアニメーションの1ステップに対応します。
<!-- Sources: https://learn.microsoft.com/azure/azure-resource-manager/management/overview ; https://learn.microsoft.com/azure/azure-resource-manager/bicep/overview ; https://learn.microsoft.com/azure/azure-arc/overview -->

## Step 1 · Built by hand, twice

[calm] Contosoはテストと本番を別々に手作業で作りました。設定に違いがあるため、テストに成功しても、本番でまったく同じ結果になるとは説明できません。
[600ms]
[confident] 必要なのは、繰り返し使える構成の定義です。偶然の違いを隠さず、意図した違いとして記録します。

## Step 2 · Start in the portal

[calm] MayaがAzureポータルで、ショップのリソースと設定を調べます。ブラウザーの画面から、何が存在し、どう構成されているかを理解できます。
[600ms]
[confident] ポータルは確認や個別作業に便利です。ただし、長い手順を何度も手作業で繰り返すと、一貫性を保ちにくくなります。

## Step 3 · Repeat it with commands

[calm] Azure CLIとAzure PowerShellなら、保存して再実行できるコマンドでリソースを管理します。Cloud Shellは、これらをブラウザー内で使う環境を提供します。
[600ms]
[confident] 作業を繰り返せるようになりますが、順序、入力、権限、実行の影響はチームが確認します。

## Step 4 · Describe it as code

[calm] インフラストラクチャをコードとして管理すると、クリック操作を覚える代わりに、必要なリソースを記述できます。BicepやAzure Resource Managerテンプレートなら、その定義をレビューし、版管理できます。
[600ms]
[confident] 記述するのはインフラです。それだけで業務データをコピーしたり、アプリのコードをすべて配布したりするものではありません。

## Step 5 · Same definition, intentional differences

[calm] Contosoはレビュー済みの1つの定義を、テストと本番に再利用します。名前、タグ、能力などの意図的な違いはパラメーターで指定し、構造は理解しやすく保ちます。
[600ms]
[confident] 両環境のサイズが同じである必要はありません。違いを明示し、説明して再現できることが重要です。

## Step 6 · Everything goes through Resource Manager

[calm] ポータル、コマンド、テンプレートは、Azure Resource Managerへ管理要求を送ります。権限や適用対象のポリシーを確認してから、リソースプロバイダーが作成や更新を行います。
[600ms]
[confident] これは管理の経路です。お客様の購入要求はアプリとサービスを使い、このリソース配置の経路を通るわけではありません。

## Step 7 · Reach beyond Azure

[calm] 倉庫のサーバーはAzureに移していません。Azure Arcなら、Azure外で動く対応サーバーをAzureの管理環境につなぎ、ハイブリッド環境を管理できます。
[600ms]
[confident] Arcで接続しても、サーバーの場所は変わりません。倉庫で動き続け、既存の運用責任も残ります。

## Step 8 · Manage and Deploy - All in One

[calm] 確認にはポータル、操作の繰り返しにはコマンド、一貫した配置にはレビュー済みのインフラ定義を使います。Arcは、Azure外の対応リソースにも管理を広げます。
[600ms]
[confident] Contosoはショップの構築方法を説明できるようになりました。最後は、お客様にとって正常に動いているかを確かめます。