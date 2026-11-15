# Narrator Script — GitHub · Copilot for Tests, Refactoring and Legacy Code

**Source animation:** [CopilotForTestingAndModernization.html](../../../journeys/GitHub/CopilotForTestingAndModernization.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-300>
- <https://learn.microsoft.com/sql/tools/visual-studio-code-extensions/github-copilot/test-and-mocking-data-generator>

---

## Step 1 · A Function Nobody Dares Touch

[calm] Contosoで、Mayaは、名前が分かりにくくて、テストもドキュメントもない、料金計算の関数を引き継ぎました。
[600ms]
[concerned] 1行変えただけで、チェックアウトが壊れるかもしれません。しかも、それを知らせてくれるものは、何もありません。
[600ms]
[curious] これが、レガシーコードです。ドキュメントが少なくて、テストカバレッジも弱いから、みんな触るのを怖がります。Copilotがどう助けてくれるか、見ていきましょう。

## Step 2 · Understand It First

[calm] 何かを変更する前に、Mayaは、コードを選択して、Copilot Chatに説明を頼みます。
[600ms]
[confident] Visual Studio Codeでは、スラッシュのexplainコマンドが、アクティブなエディターのコードを説明してくれます。Python 3の開発者です、というように、自分の背景を伝えておくこともできます。そうすれば、自分に合った答えが返ってきます。
[600ms]
[serious] そのあと、説明の内容を、1つずつコードと照らし合わせます。説明は、事実ではなく、手がかりです。

## Step 3 · Generate Unit Tests

[confident] ファイルを開いた状態で、スラッシュのtestsコマンドを使うと、選択したコードのユニットテストの下書きを作ってくれます。
[600ms]
[calm] コードの隣に、既存のテストファイルを開いておくと、Copilotがテストフレームワークに合わせやすくなります。
[600ms]
[serious] テストが、すべてのシナリオを網羅しているとは限りません。だから、Mayaは、テストを実行して、1つずつ読んで、足りないものを追加します。

## Step 4 · Edge Cases

[curious] 次に、何が足りないかを聞いてみます。空の値、null、ゼロ、そして境界値の入力です。
[600ms]
[confident] Copilotが、ケースを提案してくれます。レガシーコードには、暗黙の前提が隠れています。だから、コードが何を前提にしているかも聞いて、その答えを書き留めておきます。
[600ms]
[reassuring] 動作がはっきりしないときは、どうあるべきかを、チームで決めます。それは、Copilotが決めることではありません。

## Step 5 · Assertions

[calm] アサーションが弱いと、答えが間違っていても、テストは通ってしまいます。
[600ms]
[serious] 失敗しないテストは、何も証明しません。だから、Copilotが書いたテストは、テスト名だけでなく、アサーションの中身まで読んでください。
[600ms]
[confident] 正確な値と、例外を確認するように頼みましょう。そうすれば、本当のミスがあったときに、テストが失敗します。

## Step 6 · Integration Tests

[calm] 結合テストでは、2つの部分をまとめて呼び出します。ここでは、チェックアウトと、プロモーションの適用です。
[600ms]
[curious] 通知の処理には、モックを使います。だから、テストに実際の接続は必要ありません。通知が1回だけ呼ばれること、または、まったく呼ばれないことを検証します。
[600ms]
[confident] 何をモックして、何を検証するかを、はっきり伝えましょう。無効な入力に対するテストも、もう1つ追加します。大きなリクエストは、小さく分けましょう。

## Step 7 · Refactor Safely

[calm] ここから、Mayaは、テストを動かしながら、リファクタリングします。下のバージョンを切り替えて、比べてみましょう。
[600ms]
[impressed] コードがシンプルになっても、同じ5つのテストは成功したままです。ミスがあれば、リリースの前に、そのうちの2つが失敗します。
[600ms]
[reassuring] テストがあれば、コードの動作を変えずに、書き方だけを変えられます。変更するたびに、テストを実行しましょう。

## Step 8 · Document It

[calm] Mayaは、関数を選択して、Copilotにdocstringを頼みます。続いて、コードベースのREADMEのセクションも頼みます。
[600ms]
[serious] そのあと、コードと照らして、正確でない部分を直します。
[600ms]
[optimistic] いいドキュメントは、次に読む人の助けになります。それに、コメントやドキュメントがあると、Copilotも、より良い提案をしてくれます。

## Step 9 · Sample Data

[curious] テストデータが必要ですか。テーブルの構造を説明するか、JSONのサンプルを貼り付けて、モックの行を頼みましょう。
[600ms]
[confident] 行数を指定したり、エッジケースを含めたりもできます。結果は、テスト用データベースに投入できる、架空の行です。
[600ms]
[serious] 必ず、架空の値を使ってください。実際のお客様のデータは、プロンプトに絶対に貼り付けないでください。

## Step 10 · Modernize

[calm] Mayaは、Copilotに、古い書き方を、新しい書き方に書き換えてもらいます。たとえば、Python 2のコードを、Python 3にします。近くには、テストを置いておきます。
[600ms]
[confident] よくある変更は、import、printステートメント、そして削除されたメソッドです。
[600ms]
[serious] 魔法の杖ではありません。コンテキストや、古いライブラリに合わせた調整が必要になると思っておきましょう。何が本当に変わったかは、テストで確認します。

## Step 11 · Security and Performance

[calm] Mayaは、Copilotに、セキュリティ上のリスクと、より速いバージョンについて聞きます。
[600ms]
[concerned] Copilot Chatは、SQLインジェクションのような、よくある問題を見つける助けになります。ただし、完全なセキュリティ分析を、これに頼るべきではありません。回答は毎回同じとは限らないので、あなたの結果は、違うかもしれません。
[600ms]
[determined] だから、検証しましょう。テストを実行して、コードスキャンを実行して、速度を測定します。

## Step 12 · Recap: Review Every Change

[calm] Copilotは、説明して、下書きを作って、作業を速くしてくれます。すべての変更をレビューするのは、あなたです。そして、テストが、その証拠になります。
[600ms]
[confident] まず、コードを理解します。作業中は、Copilotが下書きを作って、あなたがテストを実行します。最後に、テストと人が承認したものだけを、マージします。
[600ms]
[proud] G H 300の試験では、テスト、エッジケース、サンプルデータ、リファクタリング、ドキュメント作成、レガシーのモダナイゼーション、そして、セキュリティとパフォーマンスの提案が範囲です。
