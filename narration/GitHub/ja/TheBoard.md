# Narrator Script — GitHub · Contoso Delivery · Track It on a Board · JA

**Source animation:** `journeys/GitHub/TheBoard.html`

`## Step N` の見出しは意図的に英語のままです（音声生成と字幕の索引）。

---

## Step 1 · An Unorganized List of Issues

[warm] 計画はうまくいきました。すべてのエピックとサブタスクが実際のイシューになっています。そして手元に残るのがこれ。新しい順に並んだ、平らな一覧です。
[500ms]
[serious] チームが実際にする質問に答えてみてください。誰が何をしているのか。次はどれを取ればいいのか。何が詰まっているのか。エピック 一 はどこまで進んだのか。
[500ms]
[thoughtful] この画面からは一つも答えられません。イシューに問題はありません。問題は*見せ方*です。リストは流れを映せないのです。

## Step 2 · One Board, Five Columns

[confident] そこで Contoso はプロジェクトを追加し、ボード表示に切り替えます。列は五つ。Backlog、Ready for Sprint、In Progress、In Review、Done。
[500ms]
[bright] 三つではなく五つです。Ready for Sprint は整えられた作業が待つ場所、In Review は仕上がった作業が人を待つ場所。ちょうどこの二か所で、ものごとは静かに溜まります。だから名前を与えるのです。
[500ms]
[reassuring] 規則は単純です。どの項目もちょうど一つの列にいる。

## Step 3 · Status Is a Column, Not a Comment

[confident] それで何が手に入るのか。
[600ms]
[calm] サブタスク 二 は Backlog から始まります。整えられて Ready for Sprint へ。誰かが取って In Progress。プルリクエストを開いて In Review。マージされて Done。
[600ms]
[bright] カードを動かすこと、それ自体が進捗報告です。誰も「いま始めます」とコメントに書きません。誰も状況を尋ねるメッセージを送りません。
[600ms]
[reassuring] 一項目、一か所。レビュー中のものを知りたければ、見ればいい。

## Step 4 · Tell the Board What Kind of Work This Is

[confident] ボードはまだ、エピックと一日仕事を見分けられません。そこで Contoso はフィールドを追加します。
[500ms]
[calm] Work Type、単一選択。選択肢は Epic と Sub-Task。一度定義すれば、すべてのカードがそれを持てます。
[500ms]
[thoughtful] これがないと、三週間のエピックと三時間の修正が列の中で同じ見た目になります。あれば、絞り込み、まとめ、別々に数えられます。

## Step 5 · Put the Work in a Timebox

[confident] もう一つフィールドを。今度は時間を加えます。
[500ms]
[calm] Sprint は二週間周期のイテレーションフィールドです。スプリント 一 はバックエンドの中核、スプリント 二 はダッシュボードとパイプライン。これでボードを*この二週間だけ*に絞れます。
[500ms]
[reassuring] 「いつか」を約束に変えるのがこれであり、正直な工数計画を成り立たせるのもこれです。

## Step 6 · Group the Board by Parent

[confident] 最後の一手。ボードのまとめ方を変えます。
[500ms]
[calm] ステータスの列の代わりに、同じカードが所属するエピックの下に並び替わります。何も入力し直していません。何も複製していません。まったく同じデータを、別の問いに答えるために並べ替えただけです。
[500ms]
[confident] 一日を回すならステータスで、エピック 一 の進み具合を聞かれたら親でまとめる。

## Step 7 · Your Turn: Create the Board

[warm] 前の解説は、十二個のイシューと、それを回す手段がない状態で終わりました。あなたのリポジトリで直しましょう。
[500ms]
[calm] Projects タブを開いて「Link a project」、続いて「New project」。Kanban があればそれを、なければ Board を選びます。列は同じ三つ、Todo、In Progress、Done。
[500ms]
[reassuring] 「Contoso Weather App」と名付けて作成します。空のボードが出るはずです。カードは一枚もありません。それが想定どおりで、次のステップの要点です。

## Step 8 · Your Turn: Put the Issues on It

[thoughtful] ではなぜボードは空なのか。GitHub が自分でイシューを載せてはくれないからです。
[500ms]
[calm] 組織なら作成時に「Import items from repository」にチェックを入れられます。そうでなければプロジェクトを開き、三点メニュー、Workflows、「Auto-add to project」、絞り込みを「is issue, is open」にして有効化します。
[500ms]
[reassuring] 十二個すべてが Todo に出ましたか。一枚を In Progress にドラッグして再読み込みを。そのままなら、ボードは生きています。

## Step 9 · Your Turn: Split the Board by Epic

[thoughtful] 長い Todo 列にカードが十二枚。どれがどのエピックのものか、何も教えてくれません。
[500ms]
[calm] View options を開き、「Column by」は Status のままで、Swimlanes をクリックして Parent issue を選びます。列が四本の横帯に分かれます。エピックごとに一本。横方向がステータス、縦方向がエピックです。
[500ms]
[careful] 注意が一つ。カードを横に動かすとステータスが変わりますが、上下に動かすと、そのイシューの親を変えてしまいます。

## Step 10 · Now the Team Can See the Work

[warm] これでボードは完成です。
[600ms]
[calm] 平らな一覧が五つの列になりました。Work Type がエピックとサブタスクを分け、Sprint が二週間の枠に収め、スイムレーンが、誰も表計算を組み立てることなくエピックの状況を報告します。
[600ms]
[confident] 計画は目に見え、ステータスは正直です。次は、*In Progress* のカードを、マージされデプロイされたコードに変えるブランチモデルへ。
