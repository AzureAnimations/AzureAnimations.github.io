# Narrator Script — GitHub · Review with Copilot: Pull Request Summaries and Review Standards

**Source animation:** [CopilotCodeReview.html](../../../journeys/GitHub/CopilotCodeReview.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-300>

---

## Step 1 · A Pull Request Nobody Wants to Read

[calm] Contosoで、Mayaが、変更ファイルが40個で、説明が空のプルリクエストを開きます。
[600ms]
[concerned] Raviは、コードだけを手がかりに、何が変わったのか、なぜ変わったのかを、推測しながら読み解くしかありません。
[600ms]
[curious] レビュアーには、細部より先に、全体のストーリーが必要です。そこで、Copilotに要約を書いてもらってから、コードをレビューしましょう。

## Step 2 · Generate a Summary

[confident] 説明欄で、MayaがCopilotのメニューを開いて、「Summary」を選びます。
[600ms]
[calm] Copilotは、欄にすでに入っているテキストは無視します。だから、彼女は、空の状態から始めます。
[600ms]
[reassuring] そのあと、下書きを読んで、自分で補足を加えてから、投稿します。要約はあくまで出発点で、最終版ではありません。

## Step 3 · Ask Copilot to Review

[calm] プルリクエストで、Mayaは、右のサイドバーにあるReviewersを開いて、Copilotの横の「Request」をクリックします。
[600ms]
[curious] チームメイトに頼むときと、同じ操作です。Copilotがプルリクエストを読んで、コメントを残します。
[600ms]
[confident] 新しいコミットが追加されたら、Copilotの横にある再リクエストのボタンで、もう一度レビューしてもらえます。

## Step 4 · Read the Comments

[calm] コメントは、それぞれ特定の行に付いていて、重大度が表示されます。High、Medium、Lowのどれかです。
[600ms]
[confident] 可能なときは、Copilotが、変更の提案も追加します。それをコミットすることも、ほかの提案とまとめてバッチに追加することもできます。
[600ms]
[serious] レビューの種類に注目してください。デフォルトでは、Commentのレビューです。承認でも、変更のリクエストでもありません。返信したり、解決したりはできますが、Copilotは、あなたの返信を読みません。

## Step 5 · Suggestions Versus Your Judgment

[calm] Copilotが提案して、Mayaが、コメントごとに判断します。
[600ms]
[confident] 提案をそのままコミットすることも、自分でコードを直してからコミットすることもできます。当てはまらない場合は、会話を解決済みにします。
[600ms]
[serious] Copilotは、実際には存在しない問題を指摘することがあります。また、再レビューで、解決済みのコメントが繰り返されることもあります。どのコメントも、人が確認する必要があります。

## Step 6 · Set the Review Standard

[curious] 同じフィードバックを、毎回手で書くのは、大変です。そこで、チームは、レビューのルールを、リポジトリの指示ファイルに書いておきます。
[600ms]
[confident] ファイルには、リポジトリ全体用のもの、特定のフォルダだけに当てはまるパス指定のもの、そして、ルートに置くエージェント用のものがあります。
[600ms]
[reassuring] Copilotは、レビュー対象のブランチから、これらを読み込みます。だから、ルールの変更を、同じプルリクエストの中で試せます。ルールは、短くて具体的なものが、いちばん効果的です。

## Step 7 · See the Standard at Work

[curious] 同じプルリクエストを、指示ファイルを追加する前と後でレビューしたものです。スイッチを切り替えて、比べてみましょう。
[600ms]
[impressed] 追加する前は、コメントが一般的で、どんなコードにも当てはまるような内容です。追加したあとは、チーム独自のルールに沿った内容になります。
[600ms]
[serious] 1つ注意点があります。指示は、Copilotの方向づけをするだけで、何かを保証するものではありません。ルールが飛ばされることもあります。コメントは、引き続き確認してください。

## Step 8 · Automatic Review

[calm] 誰も、頼むのを忘れないようにしたいものです。リポジトリのルールセットで、すべてのプルリクエストに、Copilotをレビュアーとして自動で追加できます。
[600ms]
[confident] 設定の、Rulesets、新しいブランチのルールセットの順に進んで、Copilotのコードレビューを自動でリクエストするオプションを選びます。
[600ms]
[reassuring] 新しいプッシュのレビューをオンにしないと、Copilotは、プルリクエストを1回しかレビューしません。ドラフトのプルリクエストは、任意です。ルールセットがない場合、Copilotは、頼まれたときだけレビューします。

## Step 9 · Organization Policy

[calm] Copilotを組織経由で使っている場合は、先に、組織でCopilotのコードレビューのポリシーを有効にする必要があります。
[600ms]
[confident] このポリシーは、組織の、Copilotのポリシーの設定にあります。GitHub dot comと、GitHub Mobileでのレビューに適用されます。
[600ms]
[curious] 組織のルールセットでも、名前がパターンに一致するすべてのリポジトリに、自動レビューを設定できます。

## Step 10 · What It Can Miss

[serious] CopilotはCommentのレビューを残します。デフォルトでは、承認としてはカウントされません。
[600ms]
[concerned] 間違えることもありますし、本当の問題を見逃すことも、指示を飛ばすこともあります。
[600ms]
[determined] Copilotが承認のレビューを残せるのは、リポジトリ、組織、エンタープライズの設定で許可している場合だけです。これは、意図して選ぶ設定です。Copilotは、人によるレビューを補うものです。最終的に承認するのは、人です。

## Step 11 · Recap: A Review Loop with Copilot and a Person

[calm] レビューの前には、Copilotの要約が、ストーリーを伝えます。レビューの最中は、Copilotがコメントして、あなたが判断します。
[600ms]
[confident] レビューの前後を支えるのは、指示ファイルの基準、ルールセット、そして組織のポリシーです。これで、運用が安定します。
[600ms]
[proud] 最終的な判断は、人が行います。G H 300の試験では、GitHub Copilotの機能の使用に含まれる、コードレビューのトピックが出題されます。
