# Narrator Script — Monitor · KQL Basics: Ask Your Logs a Question

**Source animation:** [KqlBasics.html](../../../journeys/Monitor/KqlBasics.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/kusto/query/>
- <https://learn.microsoft.com/azure/azure-monitor/logs/get-started-queries>
- <https://learn.microsoft.com/kusto/query/datatypes-string-operators>
- <https://learn.microsoft.com/kusto/query/join-operator>

---

## Step 1 · A query is a pipeline

[calm] KQLのクエリは、テーブルから始まります。そのあと、行が演算子を1つずつ通っていきます。
[600ms]
[curious] パイプ文字は、結果を次のステップに渡します。だから、クエリは上から下へ読みます。
[600ms]
[reassuring] クエリがするのは、データを読むことだけです。テーブルを変更することはないので、安心して試せます。

## Step 2 · where: keep only the rows you want

[calm] まず、時間で絞り込みます。agoとbetween、nowを使います。
[600ms]
[confident] そのあとの演算子は、ずっと小さくなったテーブルを相手にします。ago 30分は、今から30分前という意味で、betweenは両端を含みます。
[600ms]
[serious] ポータルのタイムピッカーも、クエリの範囲を制限します。クエリの中でも時間を指定した場合は、狭いほうの範囲が使われます。

## Step 3 · project and extend: choose and compute columns

[calm] projectは、名前を指定した列だけを残します。それ以外の列は、結果から外れます。
[600ms]
[curious] extendは、動きが違います。すべての列を残したうえで、計算した新しい列を追加します。
[600ms]
[confident] projectでは列名を変えることもできます。extendは、クエリの中で手軽に計算したいときに便利です。

## Step 4 · summarize: many rows become one row per group

[calm] summarizeは、たくさんの行を、グループごとの1行にまとめます。行を数えたり、値の平均を出したりできます。
[600ms]
[confident] Nameのような列でグループ化するか、binを使って、時間を区間に区切ります。
[600ms]
[serious] TimeGeneratedだけでグループ化すると、タイムスタンプごとに1グループになってしまいます。binは、先に時間を区間に丸めてくれます。

## Step 5 · order by, top, take, distinct: shape the answer

[calm] order byは、行を並べ替えます。topは、並べ替えて、先頭の数件だけを残します。
[600ms]
[curious] takeは、順序を問わず、適当に数行を取ります。distinctは、列の重複しない値を一覧にします。
[600ms]
[confident] 最新のレコードを取りたいときは、テーブル全体を並べ替えるのではなく、topを使います。

## Step 6 · Text matching: has, contains, startswith

[curious] hasは、単語全体に一致します。containsは、テキストの一部に一致しますが、スキャンが遅くなります。
[600ms]
[calm] startswithは、テキストの先頭を調べます。この3つは、どれも大文字と小文字を区別しません。
[600ms]
[serious] equalsは、完全一致で比較するので、大文字と小文字が区別されます。できるだけhasを使いましょう。すべての値をスキャンせずに、語句全体を検索できるからです。

## Step 7 · join and union: combine two tables

[calm] joinは、共通の列をもとに、2つのテーブルの行を結び付けます。
[600ms]
[confident] unionは、複数のテーブルの行を、そのまま上下に積み重ねます。
[600ms]
[serious] joinのデフォルトの種類では、左側の重複した行が取り除かれます。kind equals innerと指定すると、一致するものがすべて残ります。小さいほうのテーブルを左に置きましょう。

## Step 8 · render timechart: turn rows into a picture

[calm] 傾向を見るには、TimeGeneratedのbinでsummarizeします。区間は5分です。
[600ms]
[confident] そして、クエリの最後にrender timechartを付けます。最初の列が、時間軸になります。
[600ms]
[serious] renderは、必ず最後の演算子にします。データは変えず、どう描画するかをツールに伝えるだけです。

## Step 9 · Build a query yourself

[excited] では、ご自分で作ってみましょう。演算子をクリックして追加して、行をクリックすると削除できます。
[600ms]
[curious] 目標は、5分ごとの失敗したリクエスト数を、グラフにすることです。
[600ms]
[encouraging] 順序を覚えておきましょう。summarizeの前にフィルターして、renderは最後です。

## Step 10 · From answer to action

[calm] クエリが欲しい結果を返したら、そこで終わりにしないで、再利用しましょう。
[600ms]
[confident] 今のクエリから、新しいアラートルールを作れます。結果が変わったときに、通知してもらえます。
[600ms]
[optimistic] あるいは、クエリを保存して、ワークブックやダッシュボードに、タイルとしてピン留めすることもできます。

## Step 11 · Three beginner mistakes

[calm] 初心者なら誰でもやってしまう、3つのミスを見てみましょう。1つずつ見つけて、直してください。
[600ms]
[serious] KQLは、大文字と小文字を区別します。テーブル名、列名、そしてequalsも、大文字小文字が影響します。
[600ms]
[reassuring] どのミスも、起こしやすいですが、気をつけるポイントを知っていれば、避けるのも簡単です。

## Step 12 · KQL at a glance

[calm] パイプ1つにつき、質問は1つです。まずテーブルから始めて、時間で絞り込みます。
[600ms]
[confident] 列を整えて、行をまとめて、結果を描画します。
[600ms]
[proud] あとは、実際のワークスペースで練習しましょう。Log Analyticsの「はじめに」の記事からリンクされている、デモ環境でも練習できます。
