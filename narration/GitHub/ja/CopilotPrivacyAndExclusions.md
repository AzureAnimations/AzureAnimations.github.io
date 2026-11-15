# Narrator Script — GitHub · Copilot Privacy, Content Exclusions and Safeguards

**Source animation:** [CopilotPrivacyAndExclusions.html](../../../journeys/GitHub/CopilotPrivacyAndExclusions.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-300>
- <https://learn.microsoft.com/visualstudio/ide/visual-studio-github-copilot-admin>

---

## Step 1 · Two Worries, One Tool

[calm] ContosoはCopilotを、すべてのエディターで使いたいと考えています。ただ、リポジトリにはシークレットのファイルがあります。それに、Raviは、ライセンスのあるコードのことも気にしています。
[600ms]
[concerned] 心配なことは、2つあります。Copilotが何を読めるのか、そして、何を提案するのか、です。
[600ms]
[reassuring] Copilotには、それぞれに対応する設定があります。コンテンツ除外と、パブリックコードフィルターです。

## Step 2 · What Copilot Sends and Keeps

[curious] Copilotは、コードとそのコンテキストを、プロンプトとして送信して、提案を受け取ります。
[600ms]
[confident] 設定は3つあります。何を送るか、何が返ってくるか、そして、データをどう使うかを決めます。除外、パブリックコードフィルター、データの利用です。
[600ms]
[reflective] 何が保存されて、学習に使われるかは、プランによって違います。GitHub Copilot Trust Centerで確認してください。

## Step 3 · Content Exclusions: What They Are

[calm] コンテンツ除外を設定すると、選んだファイルやリポジトリを、Copilotが無視するようになります。
[600ms]
[confident] つまり、除外された内容は、Copilotの提案にも回答にも影響しません。提案も、コンテキストも、回答も、レビューも、除外されたコンテンツからは得られません。
[600ms]
[serious] 除外が使えるのは、Copilot BusinessとCopilot Enterpriseのプランです。

## Step 4 · Write an Exclusion Rule

[curious] 管理者は、リポジトリの設定の、Copilotの中にあるContent exclusionで、パスを登録します。
[600ms]
[calm] 1行が、引用符で囲んだパスかパターン1つです。それに一致するファイルは、すべて除外されます。ハッシュ記号で、コメントも書けます。
[600ms]
[reassuring] 一致の判定には、fnmatchのパターンが使われ、大文字と小文字は区別されません。

## Step 5 · Who Can Set Exclusions

[calm] ルールは、リポジトリ、組織、またはエンタープライズ全体に設定できます。どのレベルで設定するかで、対象になる人が決まります。
[600ms]
[confident] リポジトリ管理者は、そのリポジトリが対象です。組織のオーナーは、その組織からシートを受け取ったユーザーが対象です。エンタープライズのオーナーは、エンタープライズ内でCopilotを使うユーザー全員が対象です。
[600ms]
[curious] 継承されたルールは、グレーのボックスで表示されて、編集はできません。

## Step 6 · What the Exclusion Does

[curious] 通常のファイルを編集すると、提案が表示されます。除外されたファイルで、同じ編集をしても、提案は表示されません。
[600ms]
[confident] チャットでは、除外されたファイルは、参照として表示されません。だから、チャットも、そのファイルを使えません。
[600ms]
[serious] エディターで、Copilotをオフにする設定は、個人の設定です。ルールではありません。

## Step 7 · Matching Public Code

[calm] Copilotは、提案とその周辺のコードを、GitHub上のパブリックコードと比較します。
[600ms]
[confident] フィルターをオンにすると、一致する提案は表示されません。オフにすると、一致した提案が、ライセンスとリンクつきで表示されます。
[600ms]
[reassuring] 一致するものがなければ、フィルターのオンオフにかかわらず、提案は表示されます。

## Step 8 · Turn the Public Code Filter On

[curious] この設定を切り替えられる人は、プランによって違います。3つのプランのボタンを押して、誰がフィルターを管理するのか、確認してみましょう。
[600ms]
[calm] 個人プランでは、CopilotのSettingsで、自分でAllowかBlockを選びます。
[600ms]
[confident] エンタープライズや組織の管理者がいる場合は、その管理者が全員分を設定します。組織からシートを受け取っているなら、その設定が引き継がれ、自分では変更できません。

## Step 9 · Who Owns the Output

[calm] Copilotの出力の所有権は、GitHubにはありません。あなたが元から持っている権利は、そのままです。
[600ms]
[serious] また、自分が作ったものの責任は、自分にあります。フィルターは、リスクを減らすだけです。
[600ms]
[reflective] これは、分かりやすい言葉でまとめたもので、法的助言ではありません。これ以外のことは、あなた自身の契約で決まります。

## Step 10 · When It Does Not Work

[curious] まず、症状から考えましょう。提案が出ないときは、ファイルが除外されている、その言語がオフになっている、フィルターに一致した、のどれかであることが多いです。
[600ms]
[confident] 除外したファイルが、まだ使われているなら、古い設定、パターン、シンボリックリンク、間接的なコンテキストが原因かもしれません。ウィンドウを再読み込みするか、アプリを開き直して、ルールを更新しましょう。
[600ms]
[serious] そして、忘れないでください。除外は、ガードレールであって、セキュリティの境界ではありません。

## Step 11 · Recap: Who Owns Which Setting

[calm] 管理者は、除外のルールと、パブリックコードのポリシーを作成します。
[600ms]
[confident] 開発者は、ルールをテストして、自分のフィルターを設定して、出荷するものをレビューします。
[600ms]
[proud] ここまでで、G H 300の学習ガイドの4つのスキルを取り上げました。限界だけは、忘れないでください。除外は、ガードレールであって、セキュリティの境界ではありません。
