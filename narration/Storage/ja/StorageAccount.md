# ナレーション台本 — Azure Storage · 保存する（ストレージアカウント）

**Source animation:** `static/v2/Storage/StorageAccount.html`

---

## Step 1 · Overview

[warm] Azure Storage の基礎、ストレージアカウントから始めましょう。
[600ms]
[calm] これは、Contoso のクラウドデータすべて —blob、ファイル、キュー、テーブル— を、単一の名前空間と単一の請求のもとに収める、耐久性のある一つの家だと考えてください。
[600ms]
[confident] すべては、contoso ドット blob ドット core ドット windows ドット net のような、一つのアカウントエンドポイントの背後にあります。一つのアカウント、一つの請求、多くのサービス。パフォーマンス層を一度選べば、あとはワークロードが必要とするものを保存できます。

## Step 2 · Standard vs Premium

[confident] まず、アカウントの速さを選びます。
[600ms]
[calm] Standard はハードディスク上で動作し、すべてのサービスとすべてのアクセス層をサポートする、コスト効率の良い汎用ストレージです。Premium はソリッドステートドライブ上で動作し、アプリが求めるときにミリ秒一桁の低遅延を実現します。
[600ms]
[reassuring] Premium は専用アカウント —block blob、page blob、またはファイル共有— として提供され、生の容量ではなく遅延のために選びます。ですからルールは単純です。速さなら Premium、コストなら Standard。

## Step 3 · Four Data Services

[confident] Standard アカウントは、データを保存する四つの方法を提供します。仕事に合う形を選びましょう。
[600ms]
[calm] Blob は、画像、動画、バックアップ、ドキュメントといった大量の非構造化データの主役です。Files はマネージドな S-M-B と N-F-S のファイル共有を提供します。Queue はアプリのコンポーネント間で小さな非同期メッセージを渡します。そして Table はスキーマレスな NoSQL のキー・バリューストアです。
[600ms]
[impressed] 一つのアカウント、四つのサービス。ほとんどのワークロードは Blob に頼り、残りの三つが共有、メッセージング、NoSQL をカバーします。

## Step 4 · Three Kinds of Blob

[intrigued] Blob ストレージ自体は三つの型があり、それぞれ異なる書き込みパターンに合わせて調整されています。
[600ms]
[calm] block blob はテキストとバイナリデータを保持し、圧倒的に最も一般的です。append blob は末尾への追加に最適化されており、ログにぴったりです。そして page blob はランダムな読み書きをサポートするため、Azure の仮想マシンのディスクを支えます。
[600ms]
[reassuring] 目安はこうです。ファイルや画像をアップロードする? Block。ログ行をストリーミングする? Append。仮想ディスクを支える? Page。

## Step 5 · Access Tiers

[confident] block blob では、アクセス層がストレージコストと読み取りコスト、そして最小保持期間のバランスを取ります。
[600ms]
[calm] Hot は頻繁なアクセス向けで、最小期間はありません。Cool はアクセス頻度が低く、最低三十日。Cold はめったにアクセスしないもので、最低九十日。そして Archive はオフラインで最も安価 —最低百八十日で、読むにはリハイドレートします。
[600ms]
[reassuring] 冷たい層ほど保存は安く、読み取りは高く遅くなり、早期に削除すると料金が発生します。あるいは新しい Smart 層に任せれば、実際の使用状況に基づいて、管理するライフサイクル規則なしに、Hot、Cool、Cold の間でデータを自動的に移動します。

## Step 6 · Recap

[warm] というわけで、ストレージアカウントの全体像を一つのビューで見てきました。
[600ms]
[calm] パフォーマンスは Standard か Premium。四つのサービスは Blob、File、Queue、Table。三つの blob 型は Block、Append、Page。そして五つのアクセス層、Hot から Archive まで、さらに Smart。
[600ms]
[encouraging] いつもワークロードから始めましょう。どれだけ速く、どんな形のデータで、どれくらいの頻度で読むのか —すると請求はそれに従います。無料の Microsoft Learn パス「Azure にデータを格納する」でさらに深く学びましょう。
