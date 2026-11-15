# Narrator Script — Microsoft 365 Copilot · Purview: Risk and Compliance Tools

**Source animation:** [PurviewRiskAndCompliance.html](../../../journeys/Copilot/PurviewRiskAndCompliance.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/purview/dlp-alerts-dashboard-get-started>
- <https://learn.microsoft.com/purview/insider-risk-management>
- <https://learn.microsoft.com/purview/communication-compliance>
- <https://learn.microsoft.com/purview/data-classification-activity-explorer>

---

## Step 1 · Something happened. Where do I look?

[calm] PriyaはContosoのMicrosoft 365管理者です。アラートが発動し、メッセージが報告され、法務部門がファイルの提供を求めます。
[600ms]
[curious] Microsoft Purview には、それぞれに対応するツールがあり、それぞれ異なる情報を示します。
[600ms]
[confident] このレッスンでは、試験A B 900からデータ保護およびガバナンスリスクを特定する方法を扱います。

## Step 2 · Eight tools, three kinds of job

[calm] 道具は8種類あり、それぞれ3種類の仕事に分けられます。
[600ms]
[confident] アラートや確認すべき一致を表示するものもあれば、データやアクティビティ、AI の利用状況を探索できるものもあります。
[600ms]
[curious] 2つはコンテンツ検索やコンプライアンスの測定ができます。

## Step 3 · DLP alerts: a policy matched

[curious] 誰かの行動がデータ損失防止ポリシーと一致すると、アラートが発令されます。
[600ms]
[confident] DLPアラートダッシュボードでは、開いてイベントを読み、判断し、閉じます。
[600ms]
[reassuring] アラートはメール、 SharePoint、 OneDrive、Teamsなどをカバーしており、閲覧にはコンプライアンス管理者やセキュリティ管理者などの役割が必要です。

## Step 4 · Insider Risk Management: risky activity

[concerned] インサイダーリスク管理は、データの漏洩や盗難などのリスクのあるユーザー活動を監視します。
[600ms]
[confident] ポリシーはパターンが一致するとアラートを発し、アナリストがトリアージを行います。レビュアーはより深い調査のためにケースを開くことができます。
[600ms]
[reassuring] ユーザー名はデフォルトで仮名化されており、プライバシー保護に役立ちます。

## Step 5 · Communication Compliance: policy violations

[calm] コミュニケーションコンプライアンスは、メッセージをあなたのポリシーと照合します。
[600ms]
[confident] それらは、嫌がらせの言葉遣い、機密情報、規制規則をメール、Teams、Viva Engage、 Copilotなどに含むことがあります。
[600ms]
[reassuring] マッチはレビュアーに渡され、レビューアーがそれを読んで行動します。ポリシーの設定とマッチのレビューは別々の業務です。

## Step 6 · Activity explorer: what users did

[curious] アクティビティエクスプローラーでは、ラベル付きのコンテンツに対してラベルを適用、変更、削除など、どのように扱ったかが表示されます。
[600ms]
[confident] ユーザー、アクティビティ、ラベル、場所、日付で絞り込みが可能です。
[600ms]
[reflective] リアルタイムではありません。データは統合監査ログから得られ、最大30日間をカバーしています。

## Step 7 · Data Explorer: where sensitive data is

[calm] データエクスプローラーは、機密データの現在のスナップショットを表示します。
[600ms]
[confident] センシティブラベルが付いている項目、保持ラベルが付いている項目、または機密情報の種類に適合する項目を一覧にしています。
[600ms]
[serious] アイテムを表示するには、ファイルの内容を読み取れるため、追加の制限付きロールが必要です。

## Step 8 · DSPM for AI: see AI activity

[curious] データセキュリティ・ポスチャー・マネジメント・フォー・AIは、人々がCopilotやその他のAIアプリをどのように利用しているかを示しています。
[600ms]
[confident] 活動、関わる機密データ、過剰共有のリスクがどこにあるかが見えます。
[600ms]
[reflective] Learnでは現在、新しいエクスペリエンスをD S P Mと呼んでいますが、試験の目標では、今もD S P M for A Iという名称が使われています。

## Step 9 · eDiscovery: search files and emails

[calm] 法務部門からファイルの提供を求められたら、 Microsoft Purview eDiscoveryのコンテンツ検索に切り替えます。
[600ms]
[confident] メールボックス、サイト、 OneDrive 、Teamsのファイル、メール、チャットをキーワードで検索できます。
[600ms]
[reassuring] 統計を確認し、結果をプレビューしてからエクスポートしてください。従来のContent Searchは廃止されたため、今はeDiscoveryの中に収まっています。

## Step 10 · Compliance Manager: score and actions

[curious] Compliance Managerは、規制を、改善アクション付きの評価に変えます。
[600ms]
[confident] アクションを完了するとポイントが入り、コンプライアンススコアが上がり、各アクションの価値は異なります。
[600ms]
[optimistic] ですので、 Microsoft 365データ保護ベースラインに基づくスコアから次に何をすべきかが常にわかります。

## Step 11 · Which Purview tool shows me what happened?

[curious] 状況を選ぶと、対応するPurviewツールが点灯します。
[600ms]
[confident] 最後の行には、それに対して何をすればよいかが書かれています。
[600ms]
[reflective] 多くのリスクには複数のツールが関わっています。 DLPアラートはインサイダーリスク管理に導くこともあるので、まずはご質問に合ったツールから始めましょう。

## Step 12 · Eight tools, one question each

[calm] 道具を8つ、それぞれ質問を1つずつ。状況を道具に合わせろ。
[600ms]
[confident] そして、測定されたA B 900スキルや公式の訓練と照らし合わせて自分をMicrosoft Learn 。
[600ms]
[determined] スキルは時間とともに変化するので、必ず最新の学習ガイドを読んでください。
