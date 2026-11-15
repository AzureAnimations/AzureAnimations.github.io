# Narrator Script — Microsoft 365 Copilot · Copilot, Data and Oversharing

**Source animation:** [CopilotDataAndOversharing.html](../../../journeys/Copilot/CopilotDataAndOversharing.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/microsoft-365/copilot/microsoft-365-copilot-privacy>
- <https://learn.microsoft.com/microsoft-365/copilot/architecture-data-protection-auditing>
- <https://learn.microsoft.com/sharepoint/data-access-governance-reports>

---

## Step 1 · It answered. Should it have?

[calm] 営業のAlexCopilot来年の給与帯について尋ねます。Copilot人事サイトのファイルを使って答えます。
[600ms]
[concerned] Priya、管理者はどうしてそうなったのかを知る必要があります。
[600ms]
[confident] このレッスンは、試験A B 900のデータセキュリティと過剰共有のスキルについて学びます。Learn Nowは、試験がCopilotと呼ぶものについてMicrosoft Copilotと言っています。

## Step 2 · Copilot sees what Alex sees

[calm] Copilotサインインしたユーザー自身のアクセスで動作します。 Alex開けるファイルが彼の回答を根拠にできます。
[600ms]
[curious] 開けないファイルは手の届かないままです。 Copilot表示されるのは、ユーザーが少なくとも閲覧権限を持つ組織データだけです。
[600ms]
[reassuring] 他のMicrosoft 365サービスと同じアクセス制御を使っており、新規アクセスは認められません。

## Step 3 · Follow one prompt through Microsoft Graph

[curious] 一つのプロンプトに従いましょう。 CopilotそれをMicrosoft Graphに送り、 そのサイトはAlexが見ることができる関連コンテンツを見つけます。
[600ms]
[calm] その根拠はプロンプトとともにモデルに渡ります。
[600ms]
[confident] グラウンディングとは、ユーザー自身の仕事内容(ドキュメント、メール、カレンダー、チャット、会議など)に応答を固定することを意味します。セマンティックインデックスは同じアクセス境界を尊重します。

## Step 4 · Stays in the tenant, not used for training

[calm] Microsoft Graphを通じてアクセスされたプロンプト、応答、データは基礎モデルの訓練には使われません。
[600ms]
[reassuring] 権限はユーザー、グループ、テナント間でコンテンツの漏洩を防ぎます。
[600ms]
[curious] Copilotアクティビティ履歴は他のMicrosoft 365コンテンツと一緒に保存され、管理者はMicrosoft Purviewで管理できます。

## Step 5 · Layers that protect it

[calm] CopilotまずMicrosoft 365許可を尊重する。それが基盤だ。
[600ms]
[curious] Microsoft PurviewとMicrosoft Defenderそれぞれが独自のコントロールを上に追加します。どの機能が利用できるかはライセンスによって異なります。
[600ms]
[serious] 暗号化されたコンテンツは、ユーザーがVIEW権とEXTRACT使用権の両方を保持している必要がありますCopilot作業ができません。

## Step 6 · Built on six responsible AI principles

[calm] Microsoftの責任あるAI原則がCopilotを導いています。6人います。
[600ms]
[curious] このレッスンは、ただ一つ、プライバシーとセキュリティに宿っています。
[600ms]
[reassuring] A B 900は原則を理解することを求められます。完全なツアーは、Foundryの旅の責任あるレッスンAIに含まれています。

## Step 7 · Why oversharing happens

[serious] ここが重要なポイントです。Copilot がアクセスを広げるわけではありません。広すぎるアクセスを見える化するのです。
[600ms]
[curious] 三つの習慣が、誰もが意図した以上に多くの人にコンテンツを開かせてしまう。権限はサイトからライブラリ、フォルダ、ファイルへと流れていくが、誰かが継承を破らない限り。
[600ms]
[concerned] リンクの共有は誰にでも、組織内の人向けでも、特定の人向けでも可能です。広いリンクは忘れがちです。

## Step 8 · Four tools to find oversharing

[calm] まずは、コンテンツがどこに露出しているかを示すレポートや評価から始めましょう。
[600ms]
[curious] その後、インサイトとダッシュボードを使って、まず何を修正すべきか決めます。
[600ms]
[confident] ここでは役割が重要です。CopilotダッシュボードのセキュリティセクションはGlobal Readerで表示し、管理者をAIに変更する必要があります。レポートSharePointSharePoint管理者の役割が必要です。

## Step 9 · Run a data access governance report

[calm] SharePoint管理センターで「レポート」を開き、「データアクセスガバナンス」を選択してください。
[600ms]
[curious] まずはサイト許可レポートから始めて、どのサイトが最も広く開放されているかを確認しましょう。
[600ms]
[serious] スナップショットレポートは今日の状態を示し、活動レポートは過去28日間をカバーしています。 SharePoint Advanced Managementがなければ、まずデータ収集を有効にしてください。

## Step 10 · SharePoint Advanced Management

[calm] SharePoint Advanced Management、またはSAMは、コンテンツの拡散管理、コンテンツライフサイクルの管理、過剰共有の防止に役立ちます。
[600ms]
[curious] これらはLearnで挙げられた選択肢です。
[600ms]
[reassuring] CopilotデプロイのためのSAM機能はCopilotライセンスで提供されます。制限付きサイト作成などの一部の機能はPlan Oneアドオンが必要なため、現在のリストはLearnを確認してください。

## Step 11 · Restricted access control

[calm] さて、解決策をご紹介します。サイトを1つのMicrosoft 365グループかMicrosoft Entraセキュリティグループに限定してください。
[600ms]
[impressed] それ以外の人は、直接の許可や共有リンクがあってもブロックされ、ファイルは検索やCopilotから消えてしまいます。
[600ms]
[confident] 共有チャンネルサイトとプライベートチャンネルサイトには、それぞれ独自の環境が必要です。

## Step 12 · Try it: change the protection

[excited] 君の番だ。給料ファイルの修正案を決めろ。
[600ms]
[curious] Alex読めるか、Copilotが彼に見せられるか見てみて。
[600ms]
[serious] 制限されたコンテンツの発見は一時的なものです。権限は変わりませんし、アクセス権のある人はファイルを開くことができます。本当の権限を修正する間、この方法を使ってください。

## Step 13 · See it, find it, fix it

[calm] 振り返りましょう。見て、見つけて、そして直すのです。
[600ms]
[proud] Copilotアクセスを尊重するので、良いアクセスが解決策です。 Priya今、その答えがどのようにして起こったのか、そしてそれを防ぐ方法を知っています。
[600ms]
[determined] 測定されたA B 900スキルや公式のMicrosoft Learnトレーニングと比較して自分を検証してください。
