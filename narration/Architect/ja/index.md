# Narrator Script — Architect · AZ-305 hub tour

**Source animation:** [index.html](../../../journeys/Architect/index.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One short block per hub-tour stop: a welcome, one per lesson card in display order, and a closing. Stop N plays audio/index/step-NN.mp3.

## References

- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/az-305>
- <https://learn.microsoft.com/training/courses/az-305t00>

---

## Step 1 · Welcome

[calm] アーキテクトの学習コースへようこそ。Contoso の一つのストーリーを通じて、各ステップで設計の判断を学びます。
[600ms]
[encouraging] ガバナンスから始め、復旧と移行へ進み、最後にケーススタディで設計全体を組み立てましょう。

## Step 2 · Design governance: structure, policy and compliance

[calm] ガバナンス設計：構造、ポリシー、コンプライアンス。
[600ms]
[encouraging] 管理グループとサブスクリプションの構造、タグ付け戦略、そしてそれらを施行するポリシーおよびコンプライアンスツールを推奨してください。

## Step 3 · Design hybrid identity and on-premises access

[calm] ハイブリッドIDとオンプレミスアクセスの設計。
[600ms]
[encouraging] オンプレミスのディレクトリの同期、サインイン方法の選択、レガシーアプリの提供、オンプレミスリソースの安全公開。

## Step 4 · Design access: roles, PIM and access reviews

[calm] アクセス設計：ロール、PIM、アクセスレビュー。
[600ms]
[encouraging] 適切なロールシステムを選択し、ワークロードに秘密ではなくアイデンティティを与え、特権アクセスとパートナーアクセスは期限内に確認してください。

## Step 5 · Design logging and monitoring

[calm] ログ収集と監視の設計。
[600ms]
[encouraging] 信号の行き先を決める:ワークスペース設計、診断設定付きのルーティングログ、アラート、そしてその上にSIEMを配置する。

## Step 6 · Design relational data storage

[calm] リレーショナルデータストレージの設計。
[600ms]
[encouraging] VM上のSQLデータベース、マネージドインスタンス、またはSQL Server:サービス層、スケーリング、可用性、保護。

## Step 7 · Azure Storage redundancy and protection

[calm] Azure Storage redundancy and protection。
[600ms]
[encouraging] LRS、ZRS、GRS、GZRS、さらに階層、ソフト削除、バージョン管理、ブロブの不変性も可能です。

## Step 8 · Design data integration and data lake

[calm] 設計データ統合とデータレイク。
[600ms]
[encouraging] Data Factory、Data Lake、Databricks、Synapse、Stream Analytics、そしてホット・ウォーム・コールド・パス。

## Step 9 · Design for recovery: RTO, RPO and the right tool

[calm] 復旧の設計：RTO、RPO、適切なツール。
[600ms]
[encouraging] 「どれくらいの期間ダウンできるか?」という設計に変えましょう:Azure Backup、Azure Site Recovery、あるいはその両方。

## Step 10 · Keep data available: HA and DR for databases and storage

[calm] データの可用性：データベースとストレージのHA・DR。
[600ms]
[encouraging] ゾーン冗長性、ジオレプリケーションおよびフェイルオーバーグループ、マルチリージョンCosmos DB、PostgreSQLの高可用性をRTOおよびRPOにマッチングしています。

## Step 11 · Pick the right compute

[calm] 適切なコンピューティングサービスを選ぶ。
[600ms]
[encouraging] VMs、コンテナ、App Service、Functions、またはBatch:決定する質問は、5つのContosoワークロードに適用されました。

## Step 12 · Front the app: APIs, caching and deployment

[calm] アプリ基盤：API、キャッシュ、デプロイ。
[600ms]
[encouraging] API Management、キャッシュ、メッセージングとイベントの比較、設定、自動展開などです。

## Step 13 · Design a migration to Azure

[calm] Azureへの移行を設計する。
[600ms]
[encouraging] 持っているものを評価し、ワークロードごとに戦略を決め、その後サーバー、データベース、非構造化データを移動させましょう。

## Step 14 · Design the Contoso platform

[calm] Contosoプラットフォームの設計。
[600ms]
[encouraging] ブリーフを読み、各ドメインごとに一つの正当な決定を行い、全体の設計をWell-Architectedの柱と照らし合わせてください。

## Step 15 · Choose your next step

[calm] 今の設計課題に合うレッスンを選ぶか、学習コースを順番に進めてください。
[600ms]
[encouraging] リンク先の既存レッスンと公式教材で学習計画全体を確認し、選んだ構成が Contoso の要件を満たす理由を説明しましょう。

