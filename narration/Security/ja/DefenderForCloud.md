# Narrator Script — Security · Microsoft Defender for Cloud — Azure Security Journey

**Source animation:** [DefenderForCloud.html](../../../journeys/Security/DefenderForCloud.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/defender-for-cloud/defender-for-cloud-introduction>
- <https://learn.microsoft.com/azure/defender-for-cloud/secure-score-security-controls>
- <https://learn.microsoft.com/azure/defender-for-cloud/exempt-resource>
- <https://learn.microsoft.com/azure/defender-for-cloud/concept-regulatory-compliance-standards>

---

## Step 1 · Is my Azure estate secure?

[calm] Contoso は、多くのサブスクリプションにまたがって、サーバー、コンテナー、データ、アプリを運用しています。Priya は、どこが弱く、何が攻撃されているのかを把握しなければなりません。
[600ms]
[curious] それを担うのが Microsoft Defender for Cloud です。このレッスンでは、試験の A Z 305、A Z 104、A Z 700 の範囲で説明します。
[600ms]
[reassuring] Microsoft 365 の Defender XDR については、代わりにゼロトラストのジャーニーをご覧ください。

## Step 2 · Two pillars: posture and protection

[confident] Defender for Cloud には、2つの役割があります。1つ目は、CSPM と呼ばれる態勢管理で、弱点を見つけて修正します。
[600ms]
[calm] 2つ目は、CWPP と呼ばれるワークロード保護で、脅威を検出して対応します。
[600ms]
[reflective] Microsoft Learn では、このクラウドネイティブアプリケーション保護プラットフォームの3つ目の要素として、コードとパイプラインのセキュリティを指す DevSecOps も挙げられています。

## Step 3 · Secure score and recommendations

[calm] Defender for Cloud は、リソースをセキュリティベンチマークと照らし合わせて確認します。既定では、Microsoft クラウドセキュリティベンチマークが適用されます。
[600ms]
[confident] 推奨事項を出して、結果を1つのセキュアスコアにまとめます。修正が進むほどスコアが上がり、それは特定されたリスクが低いことを意味します。
[600ms]
[encouraging] 基本の CSPM には、スコアと推奨事項が含まれます。画面の数字は、あくまで一例です。

## Step 4 · Four ways to act on a recommendation

[calm] 各推奨事項には、問題の内容、深刻度、影響を受けるリソース、修正の手順が載っています。
[600ms]
[confident] 修正するほか、Azure Policy の拒否や強制でブロックしたり、免除として受け入れたり、所有者を割り当てたりもできます。
[600ms]
[serious] 拒否と強制は、Azure リソースと一部の推奨事項にしか適用できません。ガバナンスルールには、Defender CSPM プランが必要です。

## Step 5 · Regulatory compliance dashboard

[curious] 標準とはコントロールの集まりで、各コントロールは、推奨事項のグループです。
[600ms]
[calm] ダッシュボードには、リソースがどのコントロールに合格しているかが表示されます。自動で評価できないコントロールは、グレーで利用不可と表示されます。
[600ms]
[confident] Microsoft クラウドセキュリティベンチマークは既定でオンです。追加の規制準拠評価には、Defender CSPM が必要です。

## Step 6 · Attack paths and cloud security explorer

[curious] Defender CSPM は、クラウドをグラフとしてマッピングして、攻撃者が重要な資産にたどり着けるルートを見つけます。
[600ms]
[impressed] そのうえで、そのルートを断ち切る修正を提案してくれるので、最も重要な1点を直せます。
[600ms]
[serious] 攻撃パス分析とクラウドセキュリティエクスプローラーは、有料の Defender CSPM プランの機能です。エージェントレススキャンか、Defender for Servers の脆弱性評価が必要です。

## Step 7 · One Defender plan per workload

[calm] ワークロード保護は、プランごとにオンにします。各プランが、1種類のリソースに対する脅威検出を追加します。
[600ms]
[confident] サーバー、ストレージ、データベース、コンテナー、AIサービスなど、それぞれに専用のプランがあります。Defender for Servers には、プラン1とプラン2があります。
[600ms]
[reassuring] サブスクリプションでプランを有効にすると、そのリソースタイプが、サブスクリプション全体で保護されます。

## Step 8 · Alerts, incidents and your SOC

[calm] 有効にしたプランは、深刻度順のアラートを出します。影響を受けるリソースと、修復の手順も表示されます。
[600ms]
[confident] Defender for Cloud は、関連するアラートを1つのインシデントにまとめるので、チームは、アラートの山ではなく、1つのストーリーとして状況を把握できます。
[600ms]
[impressed] アラートは、Microsoft Sentinel のような SIEM や、SOAR、ITSM のツールにストリーミングできます。Defender ポータルにも表示されます。

## Step 9 · Enable once, cover everything

[confident] プランをサブスクリプションレベルでオンにすれば、そのリソースが保護されます。
[600ms]
[curious] 管理グループ全体を対象にするには、Defender for Cloud を有効にする組み込みの Azure Policy を、修復タスク付きで割り当てます。
[600ms]
[reassuring] エージェントレススキャンは、各マシンにエージェントを入れる必要がありません。Defender CSPM と、Defender for Servers プラン2に含まれます。

## Step 10 · One view across clouds

[calm] 環境は、Azure だけとは限らないでしょう。AWS アカウントや GCP プロジェクトを接続し、オンプレミスのサーバーは Azure Arc 経由で追加します。
[600ms]
[confident] AWS と GCP には、エージェントレスのコネクターを使うので、Azure の外でも、態勢の分析とワークロード保護が得られます。
[600ms]
[impressed] すべてが1か所に集まります。

## Step 11 · What you pay for

[calm] 態勢管理の基本機能は無料です。高度な態勢管理と、各ワークロードプランは有料で、料金は、オンにしたプランとリソースに応じて決まります。
[600ms]
[reflective] 料金は変わるので、ここには、あえて価格を載せていません。価格のページと、コスト計算ツールを使ってください。
[600ms]
[encouraging] 新しいサブスクリプションは、Defender for Cloud を30日間無料で試せます。ただし、Defender for Storage のマルウェアスキャンは、初日から課金されます。

## Step 12 · Which plan protects it?

[curious] 次はあなたの番です。リソースの種類を選んで、どの Defender プランが保護しているかを見てみましょう。
[600ms]
[calm] プランが検出する内容に加えて、そのリソースの推奨事項の例も表示されます。
[600ms]
[confident] どのプランにも、そのプランをオンにすることを促す専用の推奨事項があります。表示される結果は一例で、全リストではありません。

## Step 13 · Posture, protection, response

[calm] 弱点を見つけて修正し、脅威を検出して対応し、それらを大規模にオンにする。これが、全体の流れです。
[600ms]
[confident] そのうえで、自分が受ける試験の測定対象スキルと照らし合わせましょう。A Z 700 のガイドには、セキュアスコア、攻撃パス分析、クラウドセキュリティエクスプローラーが挙げられています。
[600ms]
[reassuring] A Z 305 にはコンプライアンスの管理が含まれ、A Z 104 はガバナンスと監視を扱います。試験は変わるので、最新の学習ガイドを読んでください。
