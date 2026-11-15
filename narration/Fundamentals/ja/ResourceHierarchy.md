# ナレーション原稿 - リソースの階層

**Source animation:** journeys/Fundamentals/ResourceHierarchy.html
**Script status:** Authored voiceover.
**Language:** 日本語

角括弧内は読み上げない演出指示です。間を置く位置は独立した行で示します。各ブロックはアニメーションの1ステップに対応します。
<!-- Source: https://learn.microsoft.com/training/modules/describe-core-architectural-components-of-azure/ -->

## Step 1 · Which resources belong together?

[calm] Contosoは、テスト用ショップと、お客様が使う本番ショップを作っています。マシンやデータベースが増えても、単なる一覧では、どれが一緒に使われるのかわかりません。
[600ms]
[confident] 一時的なテスト環境の作業を本番と分けるために、管理の境界が必要です。

## Step 2 · Start with a resource

[calm] リソースとは、Azureで作成して管理できる項目です。仮想マシン、ネットワーク、ストレージアカウントなど、ショップを構成する個々の部品に当たります。
[600ms]
[confident] それぞれに設定があります。ただし、リソースであることと、個別の料金が発生することは同じではありません。

## Step 3 · Location is not ownership

[calm] Contosoには2つの問いがあります。リソースはどこで動くのか、どの管理上のまとまりに属するのか。場所を表すのがリージョン、管理を整理するのがリソースグループです。
[600ms]
[confident] リソースグループは、データセンターでも可用性ゾーンでもありません。同じグループに入れても、ネットワーク接続ができるわけではありません。

## Step 4 · Group what shares a lifecycle

[calm] テスト用のリソースをまとめ、本番用は別のグループに置きます。一緒に作り、更新し、廃止するものは、同じグループにまとめると管理しやすくなります。
[600ms]
[confident] テスト用グループを削除すると、その中のリソースが削除されます。本番グループは別ですが、削除前には依存関係も確認します。

## Step 5 · One subscription holds the groups

[calm] グループの外側にあるのがサブスクリプションです。リソースグループを含み、アクセス管理や利用料金を把握するための境界になります。
[600ms]
[confident] Contosoは、どのサブスクリプションに料金が発生するかを確認できます。その中でもテストと本番は別のグループであり、ライフサイクルまで一緒になるわけではありません。

## Step 6 · Management groups organize subscriptions

[calm] 規模が大きくなると、Contosoは複数のサブスクリプションを使うかもしれません。外側の管理グループにまとめれば、共通の管理ルールをそれぞれに繰り返し設定せずに済みます。
[600ms]
[confident] ポリシーやロールの割り当ては、階層の下へ適用できます。入れ子の枠は管理範囲を表し、物理的な建物ではありません。

## Step 7 · Resource Hierarchy - All in One

[calm] 外側から、管理グループ、サブスクリプション、リソースグループ、個々のリソースと読んでみましょう。Contosoのテストと本番は、この構造の中で別々のライフサイクルを持ちます。
[600ms]
[confident] 適用対象のポリシーやロールは下へ継承されますが、すべての設定ではありません。管理を整理できたら、次はショップを動かす場所を選びます。