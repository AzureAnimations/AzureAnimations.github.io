# Narrator Script — Copilot Studio · Copilot Studio — Plan an Agent Solution

**Source animation:** [PlanAgentSolutions.html](../../../journeys/CopilotStudio/PlanAgentSolutions.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/microsoft-copilot-studio/>

---

## Step 1 · Building is easy. Deciding comes first.

[calm] Contosoのメーカーは午後でヘルパーエージェントを作り上げた。うまくいき、みんな満足している。
[600ms]
[concerned] そして7つの質問が現れ、それぞれがエージェントの構築方法を変えます。
[600ms]
[reflective] これらはA B 620学習ガイドの「エージェントの計画」ソリューションスキルを反映しています。

## Step 2 · Seven decisions to make first

[confident] マップはこちらです:エンタープライズシステム、アイデンティティ、チャネル、責任あるAI、ガバナンス、再利用可能なコンポーネント、そしてオーディエンス。
[600ms]
[calm] それぞれの決定がビルドを形作ります。
[600ms]
[encouraging] すべてに答えれば、簡単な試作品が守れる計画になります。

## Step 3 · Decision 1 · Which systems will it touch?

[curious] まず、エージェントが読み取る必要や行動すべきすべてのシステムをリストアップします。
[600ms]
[confident] それぞれの質問について、知識を読むのか、それとも行動する道具なのかを決めてください。
[600ms]
[calm] 知識はCopilotコネクタ、 Power Platformコネクタ、あるいはAzure AI Searchから得られます。ツールはコネクタ、 MCPサーバー、またはREST APIでもあります。ここでContosoシステムは架空のものです。

## Step 4 · Decision 2 · How do people sign in?

[curious] 次に、ユーザーが自分が誰であるかを証明する方法を選びましょう。
[600ms]
[confident] その選択によって、どのチャネルが動作するか、そしてエージェントがユーザーの代わりに何をできるかが決まります。
[600ms]
[reassuring] 新しいエージェントのデフォルトは認証Microsoftです。変更は公開後にのみ有効になります。

## Step 5 · Decision 2 · Whose permissions do tools use?

[curious] ツールがシステムを呼び出すとき、それは誰かとして実行されます。誰のアクセス権を使うべきでしょうか?
[600ms]
[confident] サインインしたユーザーの認証情報では、人々は自分が見ることを許されたデータしかアクセスできません。
[600ms]
[reflective] 作成者の認証情報があれば、ツールが作成者として機能し、共有リソースに適しています。認証がなければツールはユーザー認証を使えないため、意図的に選択してください。

## Step 6 · Decision 3 · Where will it live?

[calm] チャネルとは、Teams、 Microsoft 365 Copilot、 SharePoint、またはウェブサイトなど、人々がエージェントと出会う場所です。
[600ms]
[confident] まず公開し、その後、すでに利用しているオーディエンスチャネルをつなげましょう。各チャネルには独自の体験があります。
[600ms]
[serious] デモサイトはテスト用で顧客向けではなく、管理者はデータポリシーでチャネルをブロックできます。

## Step 7 · Decision 4 · Who is it for?

[curious] まずは聴衆を選びましょう。内部でも外部でも。
[600ms]
[confident] チャンネル、サインイン、ツールの認証情報はすべてその選択から決定されます。それぞれ試してみてください。
[600ms]
[reflective] これらのペアリングはデフォルトを計画しています。TeamsはAuthenticate with Microsoftを使い、他のチャネルは手動認証が必要で、認証がないとリンクで誰もチャットできません。

## Step 8 · Decision 5 · How will it stay responsible?

[serious] ガードレールは発売前に計画し、何か問題が起きた後に計画しないでください。
[600ms]
[confident] コンテンツを管理し、承認された知識に基づいて回答し、 AIであることを伝え、連絡の届く範囲に置いてください。
[600ms]
[reassuring] コンテンツのモデレーションは、入力時とエージェントの応答前に2回チェックされます。また、クリエイターは知識源を制限したり、根拠のない回答をオフにすることもできます。

## Step 9 · Decision 6 · Who governs it?

[calm] 管理者はPower Platform管理センターでルールを設定します。
[600ms]
[confident] エージェントがどこに構築され、何に接続できるか、誰が共有できるかを決めます。
[600ms]
[serious] コネクタはビジネス、非ビジネス、ブロックに分類され、これらのグループ間でデータが流れません。

## Step 10 · Decision 7 · What can we reuse?

[curious] なぜすべてのエージェントで同じパーツを作り直す必要があるのでしょうか?共有の構成要素を一度パッケージ化するだけです。
[600ms]
[confident] コレクションにはトピック、知識、ツール、子エージェント、 MCPサーバー、コネクター、フロー、エンティティなどが含まれます。
[600ms]
[calm] 管理されたソリューションとしてエクスポートされ、ビューアやエディターの権限で共有可能です。著者はそのコンポーネントを使用できますが、変更はできません。

## Step 11 · Your plan on one page

[calm] 7つの回答済みの決定がプロトタイプを計画へと変える。
[600ms]
[encouraging] ご自身のエージェントをそれらと一つずつ照らし合わせ、足りない点を書き留めましょう。
[600ms]
[determined] その後、試験のスキルを学び、現在のA B 620学習ガイドを読んでください。試験やCopilot Studioの名前は変わるからです。
