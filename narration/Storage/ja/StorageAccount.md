# ナレーション台本 — Azure Storage · 保存する（ストレージアカウント）

**Source animation:** `static/v2/Storage/StorageAccount.html`

---

**TTS status:** Audio regenerated 2026-09-17 after text review.

<!-- Review sources: https://learn.microsoft.com/azure/storage/common/storage-account-overview ; https://learn.microsoft.com/azure/storage/blobs/access-tiers-overview ; https://learn.microsoft.com/azure/storage/blobs/access-tiers-smart -->

## Step 1 · Overview

[warm] Azure Storage の基礎、ストレージアカウントから始めましょう。
[600ms]
[calm] Contoso のストレージデータに、一意の名前空間を提供します。Standard の汎用バージョン二アカウントには、blob、ファイル、キュー、テーブルを保存できます。
[600ms]
[confident] エンドポイントはサービスごとに異なります。たとえば、コントーソ ドット ブロブ ドット コア ドット ウィンドウズ ドット ネットは Blob 用で、すべてのサービスに共通するアドレスではありません。用途に対応したアカウントの種類を選びましょう。

## Step 2 · Standard vs Premium

[confident] まず、必要な性能と、利用できるサービスを確認します。
[600ms]
[calm] Standard の汎用バージョン二は、多くの用途で候補になります。Premium は SSD を使い、安定した低遅延や大量のトランザクションが必要な処理に適しています。
[600ms]
[reassuring] Premium はブロック blob、ページ blob、ファイル共有のいずれかに特化したアカウントです。四つのサービスをすべてまとめて使えるわけではありません。速さだけでなく、機能と料金も比較しましょう。

## Step 3 · Four Data Services

[confident] Azure Storage には、データの種類に応じた四つのサービスがあります。
[600ms]
[calm] Blob は画像、動画、バックアップ、文書を保存します。Files はマネージドなファイル共有を提供し、N-F-S 共有には SSD ストレージが必要です。Queue はアプリの構成要素間で非同期メッセージをやり取りします。Table は固定スキーマを持たない NoSQL の構造化データを保存します。
[600ms]
[impressed] データに合うサービスを選び、そのアカウントの種類で必要な機能が使えるか確認してください。

## Step 4 · Three Kinds of Blob

[intrigued] Blob ストレージ自体は三つの型があり、それぞれ異なる書き込みパターンに合わせて調整されています。
[600ms]
[calm] block blob はテキストとバイナリデータを保持し、圧倒的に最も一般的です。append blob は末尾への追加に最適化されており、ログにぴったりです。そして page blob はランダムな読み書きをサポートするため、Azure の仮想マシンのディスクを支えます。
[600ms]
[reassuring] 目安はこうです。ファイルや画像をアップロードする? Block。ログ行をストリーミングする? Append。仮想ディスクを支える? Page。

## Step 5 · Access Tiers

[confident] ブロック blob のアクセス層は、保存と取得のコストを調整する選択肢です。最小期間は料金上の条件で、データの削除を禁止するものではありません。
[600ms]
[calm] Standard の汎用バージョン二では、Hot に最小期間の料金はありません。Cool は三十日、Cold は九十日、Archive は百八十日です。Hot、Cool、Cold はオンラインで、ミリ秒単位でアクセスできます。Archive は読み取り前にリハイドレートが必要で、数時間かかる場合があります。
[600ms]
[reassuring] 期間内の削除や層の変更には、追加料金がかかることがあります。ゾーン冗長に対応したアカウントでは、Smart が対象のブロック blob を Hot、Cool、Cold の間で自動管理します。層を移すルールは不要です。Archive は対象外で、料金の仕組みも異なります。

## Step 6 · Recap

[warm] というわけで、ストレージアカウントの全体像を一つのビューで見てきました。
[600ms]
[calm] パフォーマンスは Standard か Premium。四つのサービスは Blob、File、Queue、Table。三つの blob 型は Block、Append、Page。そして五つのアクセス層、Hot から Archive まで、さらに Smart。
[600ms]
[encouraging] 必要な性能、データの種類、アクセス頻度から考えましょう。この選択が、使える機能と料金に影響します。無料の Microsoft Learn ラーニングパス「Azure にデータを格納する」で、さらに学べます。
