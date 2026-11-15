# Narrator Script — Storage · Files and Tables: Which Service?

**Source animation:** [FilesAndTables.html](../../../journeys/Storage/FilesAndTables.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/storage/files/storage-files-introduction>
- <https://learn.microsoft.com/azure/storage/file-sync/file-sync-introduction>
- <https://learn.microsoft.com/azure/storage/tables/table-storage-overview>
- <https://learn.microsoft.com/azure/azure-netapp-files/azure-netapp-files-introduction>

---

## Step 1 · Three needs, one question

[calm] Contoso は、Azure に、ファイル共有、安価な NoSQL テーブル、エンタープライズ向けの NAS がほしいと考えています。どれも、オフィスからアクセスできる必要があります。
[600ms]
[curious] どのニーズにどのサービスが合うのか、そして、それぞれどうやって接続するのでしょうか。
[600ms]
[confident] 答えるのは、4つのサービスです。Azure Files、Azure File Sync、Table storage、Azure NetApp Files です。Contoso は架空の会社です。

## Step 2 · Four services, one map

[calm] Azure Files と Table storage は、どちらもストレージアカウントの中にあります。
[600ms]
[confident] Azure File Sync は、Azure Files の前に Windows Server のキャッシュを置きます。Azure NetApp Files は、独立したエンタープライズ向けのサービスです。
[600ms]
[reflective] Blob storage も同じファミリーですが、非構造化のオブジェクトを格納するので、形が違います。

## Step 3 · Azure Files: a managed share

[calm] Azure Files は、ストレージアカウントの中にある、フルマネージドのファイル共有です。
[600ms]
[confident] クラウドとオンプレミスのクライアントから、Windows、Linux、macOS を問わず、同時にマウントできます。追加のソフトウェアもハードウェアも要らず、OS にパッチを当てる必要もありません。
[600ms]
[reassuring] 読み取り専用の共有スナップショットで保護できます。Azure Backup にスケジュールを任せて、保持期間も管理してもらうこともできます。

## Step 4 · SMB or NFS, SSD or HDD

[curious] すべての共有には、2つの選択があります。1つ目は、共有ごとに1つのプロトコルです。Windows 形式のアクセスなら SMB、Linux なら NFS です。
[600ms]
[calm] 2つ目は、メディアの階層です。低遅延なら SSD、コスト効率のよい一般用途なら HDD です。NFS の共有は、SSD だけです。
[600ms]
[serious] 1つの共有で、両方のプロトコルは使えず、階層を直接変更することもできません。新しい共有を作って、データをコピーします。

## Step 5 · Who gets in: identity-based access

[calm] リフトアンドシフトなら、Windows の ACL がそのまま残ります。ユーザーは、すでに持っている ID でサインインします。
[600ms]
[confident] Azure Files は、共有のところで Kerberos チケットを確認し、さらに各ファイルとフォルダーでも確認します。受け取るのはチケットだけで、ユーザーのパスワードは受け取りません。
[600ms]
[serious] ストレージアカウントごとに、ID ソースを1つ選びます。AD DS、Entra Domain Services、Entra Kerberos のいずれかです。これは SMB の共有だけで使え、アカウントキーはおすすめしません。

## Step 6 · Reaching it from on-premises

[calm] オンプレミスから SMB で使うには、Azure ネットワークへの VPN か ExpressRoute の接続が必要です。
[600ms]
[confident] その場合、Azure Files は、プライベートIPアドレス上のプライベートエンドポイントで公開されます。
[600ms]
[curious] パブリックエンドポイントもありますが、SMB 3 以降だけです。NFS は、インターネットから到達できません。File Sync のキャッシュを使うと、ブランチでもローカルで高速にアクセスできます。

## Step 7 · Azure File Sync: a cache on your server

[curious] キャッシュを作るには、Storage Sync Service をデプロイして、Windows Server にエージェントをインストールし、登録します。
[600ms]
[calm] 同期グループは、1つのクラウドエンドポイントである Azure ファイル共有と、1つ以上のサーバーエンドポイントをつなぎます。サーバーエンドポイントは、それぞれサーバー上のフォルダーです。
[600ms]
[serious] サーバーは、一度に1つのサービスにしか登録できません。また、同期できるのは、SMB の Azure ファイル共有だけです。

## Step 8 · Cloud tiering: hot local, cool in Azure

[calm] クラウド階層化は、頻繁に使うホットなファイルを、サーバーに残します。
[600ms]
[curious] あまり使わないファイルは、名前とフォルダー構造をローカルに残し、中身は Azure ファイル共有に置きます。誰かが開くと、中身が戻ってきます。
[600ms]
[confident] 階層化のタイミングは、2つのポリシーで決まります。ボリュームの空き領域ポリシーと、指定した日数アクセスされていないファイルに対する日付ポリシーです。

## Step 9 · Multi-site sync and quick recovery

[calm] すべてのサーバーが Azure ファイル共有を経由して同期するので、サーバー間のリンクがなくても、どのオフィスにも同じファイルが見えます。
[600ms]
[confident] サーバーキャッシュは、世界中に、必要なだけ追加できます。
[600ms]
[reassuring] サーバーが故障したら、新しい Windows Server をプロビジョニングして、エージェントをインストールし、登録します。名前空間は Azure からダウンロードされ、ファイルはアクセス時に呼び戻されるので、ローカルのバックアップは必要ありません。

## Step 10 · Table storage: entities and keys

[calm] Table storage は、スキーマレスの NoSQL キー属性ストアで、ストレージアカウント内のテーブルに入っています。
[600ms]
[confident] 各エンティティはプロパティの行で、PartitionKey と RowKey の組み合わせで見つけます。1つのテーブルの中でも、エンティティごとにプロパティが違っていてかまいません。
[600ms]
[curious] 同じ PartitionKey を持つエンティティは、クエリが速く、アトミックな操作で挿入や更新ができます。

## Step 11 · Query by key, then outgrow it

[confident] クエリには、必ず PartitionKey を含めてください。PartitionKey と RowKey を指定するポイントクエリが、最速の検索です。
[600ms]
[serious] PartitionKey を指定しないクエリは、すべてのパーティションをスキャンするので、いちばん遅くなります。
[600ms]
[optimistic] 結果は、そのキー順に並んで返ります。Table storage では足りなくなったら、Azure Cosmos DB for Table が、同じ SDK のまま、グローバル分散と自動セカンダリインデックスを加えてくれます。

## Step 12 · Azure NetApp Files: enterprise NAS

[calm] Azure NetApp Files は、エンタープライズクラスのファイルサービスです。NetApp アカウントが容量プールを持ち、各プールがボリュームを持ちます。
[600ms]
[confident] サービスレベルはプールで設定し、ボリュームは、NFS、SMB、またはその両方を提供します。
[600ms]
[curious] ボリュームは、仮想ネットワークの委任されたサブネットに置かれるので、オンプレミスのクライアントは、ExpressRoute か VPN 経由でアクセスします。

## Step 13 · Which one do I pick?

[curious] 自分に近いニーズを選ぶと、比較表で、合うサービスがハイライトされます。
[600ms]
[confident] Azure NetApp Files に当てはまるニーズは2つあります。Linux の高性能コンピューティングと、SAP や Oracle です。どちらも、エンタープライズ向けの NAS を求めています。
[600ms]
[reflective] もっと軽い Linux の作業なら、SSD 上の Azure Files の NFS 共有で、十分かもしれません。

## Step 14 · All in one

[calm] ニーズをサービスに合わせて、オンプレミスにどう届くかを選びます。4つのサービス、1つの質問です。
[600ms]
[confident] A Z 305 では、半構造化データと非構造化データのストレージを推奨し、機能、パフォーマンス、コストのバランスを取ることが求められます。
[600ms]
[proud] A Z 104 では、Azure Files のファイル共有の作成、スナップショット、ソフトデリート、ストレージ階層、IDベースのアクセスを扱います。
