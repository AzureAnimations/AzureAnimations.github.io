# Narrator Script — GitHub · Use Copilot Responsibly: Risks, Validation and Safe Habits

**Source animation:** [UseCopilotResponsibly.html](../../../journeys/GitHub/UseCopilotResponsibly.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-300>
- <https://learn.microsoft.com/ai/playbook/technology-guidance/overreliance-on-ai/overreliance-on-ai>

---

## Step 1 · It Compiled, So It Shipped

[calm] Mayaが、熱警報のためのCopilotの提案を受け入れました。ビルドは緑で、テストも通っています。
[600ms]
[concerned] でも仕様では、35度以上で警報を出すことになっているのに、提案は「より大きい」かどうかしか見ていません。値が1つ間違っているのに、誰も確認していません。
[600ms]
[serious] Copilotは、見た目はまともでも、正しくないコードを書くことがあります。緑のチェックは、動いたことを示すだけで、正しいことまでは示しません。

## Step 2 · How a Model Goes Wrong

[calm] モデルは、ありそうなコードを予測します。それが仕組みですが、間違える原因でもあります。
[600ms]
[concerned] 存在しないメソッドを作り出したり、今では古くなったパターンを繰り返したり、間違っているのに自信たっぷりに見せたりします。
[600ms]
[serious] これがハルシネーションです。もっともらしく聞こえるのに、誤っていたり、でっち上げだったりする出力のことです。すべてをレビューすべき大きな理由です。

## Step 3 · Bias in Suggestions

[curious] 学習に使われたコードは、それを書いた人たちや習慣を反映しています。だから、提案が、ある特定のタイプのユーザーだけを、知らないうちに前提にしていることがあります。
[600ms]
[confident] 誰を対象にすべきかは、プロンプトの中ではっきり伝えましょう。そして、いろいろな名前や入力でテストします。
[600ms]
[reflective] さらに、そのコードが誰を取りこぼしているかも確認しましょう。Copilotは、学習データにあるバイアスや誤りを繰り返すことがあります。

## Step 4 · Insecure Code

[calm] 提案は、動いても安全とは限りません。ここでは、ユーザーの入力が、そのままデータベースのクエリに連結されています。
[600ms]
[serious] これがSQLインジェクションです。対策は、パラメーター化クエリです。入力をデータとして扱い、コマンドの一部には決してしません。
[600ms]
[confident] こうした問題は、レビュー、テスト、コードスキャンで見つけます。とくに、セキュリティに関わる作業では重要です。

## Step 5 · Licence and Public Code

[calm] Copilotは新しいコードを書きますが、ときどき、提案が公開コードと一致することがあります。確率は低いものの、実際に起こります。
[600ms]
[confident] それが表示されるかどうかは、設定で決まります。Blockなら、一致する提案は表示されません。Allowなら、ライセンスとリンクが表示されます。
[600ms]
[reassuring] 一致したコードも、自分が書いていないコードと同じように扱いましょう。テストして、スキャンして、脆弱性がないか確認します。組織のシートは、組織の設定を引き継ぎます。

## Step 6 · Privacy of What You Paste

[calm] プロンプトは、あなたのコードとコンテキストをまとめて、Copilotサービスに送るものです。
[600ms]
[serious] だから、キー、パスワード、トークン、顧客データは、入力したり貼り付けたりしないでください。
[600ms]
[reassuring] 代わりにプレースホルダーを使いましょう。プッシュ保護は、検出したシークレットを含むプッシュをブロックします。コンテンツの除外を使うと、選んだファイルをCopilotに渡さずに済みます。

## Step 7 · Over-Reliance

[curious] 提案をすべて受け入れていると、自分のスキルが鈍って、確認できないものまで受け入れてしまうことになります。
[600ms]
[confident] 主導権を手放さないでください。まず、コードが何をするはずかを自分で予想して、それからCopilotと比べます。
[600ms]
[encouraging] Copilot Chatに、コードの説明を頼むこともできます。Copilotは、あなたの専門知識の代わりになるようには作られていません。

## Step 8 · Validate Every Output

[calm] 提案は、新しい同僚が書いたコードだと思って扱いましょう。
[600ms]
[confident] 読んで、理解できているか、頼んだ内容になっているかを自問します。マージの前に、実行して、境界のケースをテストして、スキャンします。
[600ms]
[impressed] あの35度の境界に対するエッジケースのテストこそ、Mayaのバグを見つけられたはずのテストです。

## Step 9 · Mitigations: Harm and Control

[curious] このレッスンで取り上げた害には、それぞれ対策があります。害を1つ選ぶと、対応する対策と、誰が動くのかが分かります。
[600ms]
[confident] 害は6つあり、それぞれ前のステップに対応しています。対策は、習慣、テスト、スキャン、設定です。
[600ms]
[reassuring] 一部は管理者が設定します。たとえば、公開コードのフィルターやコンテンツの除外です。ほとんどは、あなた自身の習慣です。

## Step 10 · You Are the Author of Record

[calm] Copilotは、コードやテキスト、修正を提案します。レビューして、テストして、判断して、説明責任を負うのは、あなたです。
[600ms]
[serious] 変更にはあなたの名前が付くので、責任はあなたにあります。
[600ms]
[confident] そして、Raviのようなもう1人が、プルリクエストを読みます。目は1組ではなく、2組です。

## Step 11 · Recap: Responsible-Use Checklist

[calm] このレッスンのリスクは、6つの習慣でカバーできます。レビュー、テスト、スキャン、ライセンスへの注意、プライバシーの保護、そして主導権を手放さないことです。
[600ms]
[confident] どのCopilotの機能が出力したものでも、毎回これを使いましょう。
[600ms]
[proud] これが、G H 300の学習ガイドにある、GitHub Copilotを責任を持って使うという目標です。このチェックリストは、わかりやすい言葉でまとめたもので、公式のリストではありません。
