# Narrator Script — Microsoft 365 Copilot · Microsoft Purview: Protect Your Data

**Source animation:** [PurviewProtectData.html](../../../journeys/Copilot/PurviewProtectData.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/purview/sensitivity-labels>
- <https://learn.microsoft.com/purview/dlp-learn-about-dlp>
- <https://learn.microsoft.com/purview/retention>
- <https://learn.microsoft.com/purview/trainable-classifiers-learn-about>

---

## Step 1 · Data roams

[calm] Contoso顧客リストはメールで送られ、共有され、コピーされ、その後放置されます。
[600ms]
[concerned] Priyaには三つの答えが必要です。機密データはどこにあるのか、誰が使えるのか、そしてどのくらいの期間保管するのか?
[600ms]
[confident] Microsoft Purviewは、これらの問題に答えるデータセキュリティおよびガバナンスツールのファミリーです。このレッスンでは保護面について触れています。

## Step 2 · Four jobs, one data journey

[curious] Purview Priyaの質問に順番に答えます。まず、データを見つけてください。
[600ms]
[confident] そしてマークして保護し、リスクの高い共有をやめ、必要がなくなったら保存するか削除しましょう。
[600ms]
[reassuring] これらの職種は情報保護、データ損失防止、データライフサイクル管理に対応しており、試験のスキルリストで見かける名前です。

## Step 3 · Find it: classification

[calm] Purview物が何かを知ってから行動を起こす必要があります。
[600ms]
[confident] パターンはクレジットカード番号のようなものを捉え、訓練可能な分類器は例から文書の種類を学習します。
[600ms]
[impressed] 項目が分類されると、ラベル、DLP、保持のすべてが、その結果を条件として使用できます。

## Step 4 · Mark it: a label travels with the file

[curious] センシティビュティラベルとは、ファイルのメタデータに保存されるスタンプのことです。
[600ms]
[confident] 保存、メール、共有、またはCopilot質問すれば、ラベルは保護に伴います。
[600ms]
[reassuring] Copilotラベルも認識します。ラベルがアイテムを暗号化する場合、 Copilotユーザーがコピー権を持っている場合にのみデータを返します。

## Step 5 · What a label can do

[calm] ラベルを適用するだけで十分です。ラベルは管理者が選択した設定を強制します。
[600ms]
[confident] 暗号化は誰が何をどのくらいの期間行けるかを制御し、コンテンツマーキングはOfficeアプリにヘッダーやフッター、ウォーターマークを追加します。
[600ms]
[curious] ラベルは自動的に適用されるか、プロンプトでユーザーに推奨されることもできます。

## Step 6 · One label, four places

[curious] ラベルの範囲が、その使用場所を決定します。
[600ms]
[confident] それはファイル、メール、会議、グループやサイトなどです。
[600ms]
[serious] サイトやグループの場合、ラベルはコンテナを設定で保護し、内部の各ファイルではなく、まずラベルサポートをオンにする必要があります。

## Step 7 · Publish labels to the right people

[calm] 管理者は優先順位でラベルを作成し、最も制限の厳しいラベル(例えば「高度機密」など)を下部に置きます。
[600ms]
[confident] そして、ラベルポリシーとともにユーザーやグループにラベルを公開します。人々は手作業でラベルを付けたり、 Purview自動的にラベルを適用したりします。
[600ms]
[reflective] アイテムは1つの敏感度ラベルしか持てず、変更が現れるまでに最大24時間かかることがあります。

## Step 8 · Guard it: Data Loss Prevention

[curious] データ損失防止は、人々が機密性の高い物品に対してどのように扱われているかを監視します。
[600ms]
[confident] ルールは条件とアクションを保持し、ポリシーはそれらを各場所に適用します。アクションには、ポリシーヒント、ブロック、またはオーバーライド付きブロックがあります。
[600ms]
[reassuring] まずシミュレーションモードでデプロイし、その後チューニングするのが良い計画です。

## Step 9 · Keep it, or delete it: retention

[calm] データライフサイクル管理は、保持と削除の2つのアクションを使用します。
[600ms]
[confident] これらを組み合わせると、3つの結果が得られます:保持のみ、削除のみ、または保持してから削除します。
[600ms]
[serious] 設定が衝突した場合、保持が削除より優先され、最も長い保持期間が勝ちます。

## Step 10 · Retention policy or retention label?

[curious] リテンションポリシーは、サイトや郵便受けのように、その場所全体に対して一つのルールを設定します。
[600ms]
[confident] 保持ラベルは各アイテムにルールを設定し、アイテムと共に移動します。そのため、アイテムごとに異なる場合や、処分レビューやレコードが必要な場合に適しています。
[600ms]
[reassuring] アイテムは同時に感度ラベルと保持ラベルを付けることができます。

## Step 11 · Which Purview capability?

[curious] Contoso がやるべきことを選んでください。
[600ms]
[confident] マッチング機能が点灯し、動作の画像が表示されます。
[600ms]
[reflective] ほとんどの現実的なニーズはこれらのツールを組み合わせており、分類はラベル、 DLP 、保持を生み出します。

## Step 12 · Find, mark, guard, keep

[calm] Purviewデータを見つけ出し、ラベルで保護し、リスクの高い共有を止めDLP 、データライフサイクル管理が保持または削除を行います。
[600ms]
[confident] では、測定されるスキルの A B 900 と公式の Learn の資料に照らして、自己チェックしてください。
[600ms]
[determined] Purviewの名前やライセンスはすぐに変わるので、Microsoft Learnに関するPurviewドキュメントが真実の情報源となります。
