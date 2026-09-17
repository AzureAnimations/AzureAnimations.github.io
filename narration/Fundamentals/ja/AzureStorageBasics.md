# ナレーション原稿 - Azure Storageの基礎

**Source animation:** journeys/Fundamentals/AzureStorageBasics.html
**Script status:** Authored voiceover.
**Language:** 日本語

角括弧内は読み上げない演出指示です。間を置く位置は独立した行で示します。各ブロックはアニメーションの1ステップに対応します。
<!-- Sources: https://learn.microsoft.com/training/modules/describe-azure-storage-services/ ; https://learn.microsoft.com/azure/storage/blobs/access-tiers-overview ; https://learn.microsoft.com/azure/storage/common/storage-redundancy -->

## Step 1 · Where should the data live?

[calm] ショップには商品写真、倉庫の共有文書、処理を待つ注文関連の仕事があります。どれもデータですが、Contosoでの使い方は異なります。
[600ms]
[confident] ストレージは、どうアクセスするかから選びます。画像に適した保存先が、共有ファイルや作業メッセージにも適しているとは限りません。

## Step 2 · Start with a storage account

[calm] ストレージアカウントは、種類や冗長性など、Azure Storageの共通設定を持ちます。Contosoは、一般的な用途にStandardの汎用アカウントを使います。
[600ms]
[confident] Premiumアカウントは、特定の高性能サービス向けです。あらゆるストレージを一律に高速化する、万能のアップグレードではありません。

## Step 3 · Pick the service per kind of data

[calm] 商品写真には、画像や文書をオブジェクトとして保存するBlob Storageが適しています。倉庫の担当者が一般的なファイル共有方式で文書を開くなら、Azure Filesを使います。
[600ms]
[confident] どちらもデータを保存しますが、人やアプリがどう使うかによって、適したサービスが変わります。

## Step 4 · Separate work from records

[calm] Queue Storageは、後で処理する仕事を示すメッセージを保存します。Table Storageは、キーで整理された単純な記録に向いており、そのデータ形式が仕事に合う場合に使います。
[600ms]
[confident] 注文記録に必要なリレーショナルデータベースは残します。QueuesやTablesを、そのまま代わりに使えるわけではありません。

## Step 5 · Plan the move

[calm] データを移す前に、既存システムと作業規模を把握します。Azure Migrateは、Contosoの移行評価や計画を支援します。
[600ms]
[confident] 大量のデータをオフラインで運ぶのが適切なら、Azure Data Boxも選択肢です。評価とデータ輸送は、移行の異なる部分を担当します。

## Step 6 · Move and synchronize files

[calm] ツールも仕事に合わせて選びます。AzCopyはスクリプトによる転送、Storage Explorerは画面での操作、Azure File SyncはWindows Serverの共有ファイルとAzure Filesの同期に使います。
[600ms]
[confident] 一度だけコピーすることと、その後も共有ファイルを同期し続けることは、別の要件です。

## Step 7 · Match the tier to how often you read

[calm] 商品画像はすぐ表示する必要があります。Hot、Cool、Coldは、保存とアクセスの料金が異なるオンライン層です。Archiveはオフラインで、使う前にオンライン層へリハイドレートします。
[600ms]
[confident] 利用頻度と取り出し方で選びましょう。早期削除の料金もあり、保存単価だけでは総費用は決まりません。

## Step 8 · Decide how many copies to keep

[calm] ローカル冗長はローカルに、ゾーン冗長は複数ゾーンにコピーを置きます。地理冗長の構成では、それぞれに別リージョンのコピーを加えます。
[600ms]
[confident] リージョン間の複製は非同期なので、最新の変更が届いていない場合があります。冗長性は設備障害に役立ちますが、バックアップと復旧計画の代わりではありません。

## Step 9 · Storage Basics - All in One

[calm] 写真はBlobs、共有文書はFiles、待機中の仕事はQueues、キー付きの単純な記録はTablesに対応します。アカウント、アクセス層、冗長性は、選ぶサービスに合う組み合わせにします。
[600ms]
[confident] データの保存先が決まりました。次は、誰がショップのリソースにアクセスし、何をできるかを決めましょう。