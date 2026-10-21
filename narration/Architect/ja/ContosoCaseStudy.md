# Narrator Script — Architect · Case study: design the Contoso platform

**Source animation:** [ContosoCaseStudy.html](../../../journeys/Architect/ContosoCaseStudy.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/az-305>
- <https://learn.microsoft.com/azure/well-architected/what-is-well-architected-framework>
- <https://learn.microsoft.com/entra/identity/hybrid/connect/choose-ad-authn>
- <https://learn.microsoft.com/azure/azure-sql/azure-sql-iaas-vs-paas-what-is-overview>
- <https://learn.microsoft.com/azure/azure-sql/managed-instance/business-continuity-high-availability-disaster-recover-hadr-overview>
- <https://learn.microsoft.com/azure/app-service/overview-patch-os-runtime>
- <https://learn.microsoft.com/azure/networking/design-guide/app-delivery>
- <https://learn.microsoft.com/azure/vpn-gateway/vpn-gateway-about-vpngateways>
- <https://learn.microsoft.com/azure/architecture/networking/architecture/hub-spoke>
- <https://learn.microsoft.com/azure/cloud-adoption-framework/migrate/plan-migration>
- <https://learn.microsoft.com/azure/dms/dms-overview>
- <https://learn.microsoft.com/azure/storage/common/storage-migration-overview>
- <https://learn.microsoft.com/azure/well-architected/>

---

## Step 1 · Read the brief: requirements and constraints

[calm] お気に入りのAzureサービスを探す前に、Contosoのブリーフを読んでみてください。
[600ms]
[curious] 下線で示された要件は、設計が何をすべきかと、それを納品する方法の制約から区別しています。
[600ms]
[reassuring] まずは不適切な選択肢を除外するためにその言葉を使い、その後、残りの設計を同じ証拠と比較してください。

## Step 2 · Identity and governance: pick the sign-in method

[calm] Contosoのスタッフはすでにオンプレミスアカウントを使用しているため、サインインの選択はその要件から始まります。
[600ms]
[curious] 各メソッドがユーザーを検証する場所を比較し、そのニーズを満たす最もシンプルな方法を選びます。
[600ms]
[reassuring] ガバナンスのガードレールはその認証の決定を中心に置かれています。馴染みのある製品名だけでは正当化にはなりません。

## Step 3 · Data: match the SQL target to the need

[calm] データベースの要件は、単にリレーショナルテーブルを格納する場所ではなく、インスタンスレベルのSQL Server機能を必要とします。
[600ms]
[curious] これにより、仮想マシンのオペレーティングシステムの責任を負わずにSQLマネージドインスタンスに絞られます。
[600ms]
[reassuring] 選択の根拠となる要件を示し、他の選択肢が必要な機能を満たさない、または運用負荷の制約に合わない理由を説明してください。

## Step 4 · Business continuity: meet the RTO and RPO

[calm] Contosoはリージョン故障から1時間以内に復旧し、注文データを5分以内に失う必要があります。
[600ms]
[curious] 各選択肢を、回収目標とブリーフで説明されたリージョン的な失敗の両方と比較して検証してください。
[600ms]
[reassuring] ゾーン冗長性は異なる境界に対応し、フェイルオーバーグループはこの設計で考慮されるクロスリージョン復旧アプローチを提供します。

## Step 5 · Compute: the least to operate that fits

[calm] 小規模なオペレーションチームとリライトなしのローンチが計算の意思決定を形作ります。
[600ms]
[curious] 適切なウェブアプリケーションの場合、App ServiceはContosoのタスクリストからオペレーティングシステムおよびランタイムのメンテナンスを削除します。
[600ms]
[reassuring] レガシーバッチワークロードは異なる初期ルートを取ることができ、なぜ一つのソリューションがすべての場所で一つの計算サービスを必要としないのかを示しています。

## Step 6 · Network: private link, global front door

[calm] ネットワークは2つの要件を満たす必要があります:プライベートデータセンター接続と顧客向けのグローバルエントリーポイントです。
[600ms]
[curious] ExpressRouteはプライベート接続を担当し、Front Doorはグローバルなアプリケーションルーティングの役割を提供します。
[600ms]
[reassuring] リージョナルゲートウェイとインターネットベースのVPNは異なる問題を解決するため、各選択肢をブリーフの正確な文言と照らし合わせて確認してください。

## Step 7 · Migration: the lightest route per workload

[calm] 移行計画は、リリース前にすべてを書き直すのではなく、プラットフォームの各部分に実用的なルートを割り当てます。
[600ms]
[curious] Azure Migrateがサーバーを処理し、Database Migration Serviceがデータベースを移動し、データ転送パスがファイルを処理します。
[600ms]
[reassuring] 各ツールを選択する際には、依存関係の順序、検証、カットオーバー要件を可視化しておく。

## Step 8 · All in one: the Contoso platform

[calm] 組み立てられたContosoプラットフォームは、4つのデザイン領域に一つの選択肢セットで答えます。
[600ms]
[curious] 信頼性、セキュリティ、コスト最適化、運用の卓越性、パフォーマンス効率の各点でレビューしてください。
[600ms]
[reassuring] 擁護可能な設計は、これらの柱とブリーフのバランスを取り、すべての次元が最大化されると主張するのではなく、トレードオフを説明します。

