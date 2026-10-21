# Narrator Script — Architect · Pick the right compute

**Source animation:** [PickCompute.html](../../../journeys/Architect/PickCompute.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/architecture/guide/technology-choices/compute-decision-tree>

---

## Step 1 · Control or effort: choose your spot

[calm] Contosoのワークロードはすべてコンピュートを求めますが、すべてがサーバーを運用するためにContosoを必要としているわけではありません。
[600ms]
[curious] スペクトラムは、インフラからマネージドプラットフォーム、イベント駆動型機能に至るまで、管理の努力と直接的なコントロールを交換します。
[600ms]
[reassuring] まずは、すべてのワークロードが仮想マシン上にあると決めるのではなく、チームが実際にどの責任を負うべきかを決めましょう。

## Step 2 · Six questions that decide

[calm] これら6つの質問は、漠然とした計算要求を設計要件のセットに変えます。
[600ms]
[curious] オペレーティングシステムの制御、スタートアップの挙動、スケーリング、状態、価格設定、そしてそれを運営するチームのスキルを確認してください。
[600ms]
[reassuring] 各ワークロードを個別に評価してください。なぜなら、1つの完全なアプリケーションが複数の計算サービスを正当に使用できるからです。

## Step 3 · Virtual machines: when, which size, how many

[calm] 仮想マシンは、Contosoがオペレーティングシステムアクセスやそのレベルの制御を必要とするソフトウェアを必要とする場合に適しています。
[600ms]
[curious] 次に、リソース要件に合わせてサイズファミリーをマッチさせ、複数のインスタンスをどれだけ利用可能にするか計画します。
[600ms]
[reassuring] スケールセットは繰り返しのインスタンスやスケーリングに対応しますが、ゲストOSの責任を取り除くものではありません。

## Step 4 · Containers: four services, one choice

[calm] 4つの選択肢はいずれもコンテナを運用しますが、異なる運用上の責任を露わにします。
[600ms]
[curious] AKS Kubernetes APIを必要とするチームに適しており、Container Appsはクラスターインターフェースを操作する必要をなくします。
[600ms]
[reassuring] ContosoのカタログAPIは管理型コンテナプラットフォームを必要としているため、ワークロードやチーム要件はContainer Appsに向けられています。

## Step 5 · Serverless: code that runs when something happens

[calm] Azure Functionsはイベントでトリガーされるコードに適していますが、Logic Appsはローコードワークフローアプローチを提供します。
[600ms]
[curious] ゼロへのスケールパスはアイドル容量を減らしますが、起動時の挙動や状態要件は依然として重要です。
[600ms]
[reassuring] サーバーレスがすべての運用上の制約を取り除くと約束するのではなく、そのニーズに合わせて計画や適用パターンを選択してください。

## Step 6 · Batch: a pool of VMs for the nightly job

[calm] Contosoの夜間エクスポートは独立したタスクに分割できるため、Azure Batchはそれをプール、ジョブ、タスクとして整理しています。
[600ms]
[curious] プールが機械に供給し、スケジューラーが作業を分配し、処理完了時に処理能力が縮小することがあります。
[600ms]
[reassuring] スポット容量は再試可能な作業のコストを下げますが、作業設計は立ち退きに耐えなければなりません。

## Step 7 · Five workloads, five services

[calm] 同じ6つの質問が、Contosoの5つのワークロードを異なるニーズに応えるサービスに割り当てています。
[600ms]
[curious] 答えはすべてのワークロードに最大のプラットフォームがあるわけではありません。各課題には特定の要件があります。
[600ms]
[reassuring] 各サービスに添付された理由を確認し、よりシンプルな選択肢がその要件を満たすかどうかを尋ねてみてください。

## Step 8 · All in one: pick the simplest service that fits

[calm] 完成したマップはサービス選択の隣にワークロード要件を保持し、トレードオフを明確にします。
[600ms]
[curious] 制御が必要な場合はインフラストラクチャを使い、プラットフォームがチームの負担を軽減できる場合はマネージドサービスを活用しましょう。
[600ms]
[reassuring] 次に、アプリケーションをAPIゲートウェイ、キャッシュ、設定、繰り返し可能なリリースパスで囲みます。

