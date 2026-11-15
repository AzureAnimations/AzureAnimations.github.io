# Narrator Script — Foundry · Quotas, Rate Limits and Cost Control

**Source animation:** [QuotasAndCostControl.html](../../../../journeys/AI/Foundry/QuotasAndCostControl.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/foundry/openai/how-to/quota>
- <https://learn.microsoft.com/azure/foundry/openai/quotas-limits>
- <https://learn.microsoft.com/azure/foundry/concepts/manage-costs>
- <https://learn.microsoft.com/azure/foundry/foundry-models/how-to/monitor-models>

---

## Step 1 · Why did my call get a 429?

[curious] Contoso Retail のセール当日、店舗アシスタントが稼働を開始したばかりです。モデルのデプロイが処理できる速度を上回る勢いで、呼び出しが届き始めます。
[600ms]
[concerned] 一部は HTTP 429 で拒否され、見た目に不安を感じさせます。
[600ms]
[reassuring] でも429はリクエストが多すぎるという意味だ。限界に達した。それはコードが壊れているという意味ではない。

## Step 2 · Tokens: the unit of cost and of limits

[calm] モデルは文全体を読むわけではありません。彼らはトークン、つまり小さなテキストの塊を読み書きします。
[600ms]
[confident] 請求額も限度額も、入出力の両方がトークンとしてカウントされます。
[600ms]
[reflective] ここで見られる分割はあくまで説明的なもので、実際のトークナイザーはテキストの切り方が異なります。レートはモデルやデプロイタイプによって異なるので、数字を暗記するよりも調べてみてください。

## Step 3 · Quota: one pool, shared out in slices

[calm] クオータとは、特定のモデルとデプロイタイプに対して、サブスクリプションが1分あたりに使用できるトークンのプールのことです。
[600ms]
[confident] そのプールの一部をデプロイに割り当てると、それぞれの割り当てがそのデプロイの上限になります。
[600ms]
[curious] プールのスコープ設定はデプロイメントの種類によって異なります。新しいプールはリージョン間やデータゾーンごとに共有できるので、モデルのクォータとリミットページを確認してください。

## Step 4 · Rate limits count what you reserve

[curious] すべてのデプロイメントには1分あたりのトークン数と1分あたりのリクエスト数の制限があります。
[600ms]
[serious] リクエストは到着時にカウントされ、プロンプトと最大トークン設定の合計で計算されます。これは、モデルが最終的に使う量ではなく、予約される量です。
[600ms]
[reflective] 推定であるため、正確なカウントよりも早く制限が出ることがあります。バーストも重要で、リクエストは数秒間のウィンドウでチェックされます。

## Step 5 · Two kinds of 429, two different fixes

[curious] 429 は2つのまったく異なる意味を持つことがあり、対処法はどちらかによって変わります。
[600ms]
[confident] 自分のスライスを使い切ったか、共有サービスが一時的に忙しいかのどちらかです。エラーメッセージとレスポンスヘッダーは、残りのトークンやヒント後の再試行を含めて、どちらかを教えてくれます。
[600ms]
[serious] 本当の原因が収容能力不足の場合、チームはしばしばより多くのノルマを求めます。まず確認してから行動しましょう。

## Step 6 · Back off, then retry

[serious] 一度に再挑戦すると状況が悪化します。なぜなら、失敗した呼び出しは依然として不利にカウントされるからです。
[600ms]
[confident] サービスが推奨するだけ待ってから、毎回少しずつ長く待ちましょう。クライアント全員が一緒に再試ししないように、少しランダム性を加えていきましょう。
[600ms]
[reassuring] 多くのSDKがこれを代わりにやってくれるので、まずクライアントライブラリを確認してください。そして上限を設けて、悪い日が終わりのないループにならないようにしましょう。

## Step 7 · Pick the deployment type for your traffic

[curious] 次にトラフィック形状を選び、データ処理が許可される場所を選びます。
[600ms]
[confident] これらの選択肢を変えると、提案されるデプロイタイプやスケーリングレバーもそれに合わせて変わります。
[600ms]
[reflective] すべてのモデルがすべてのタイプに対応しているわけではないので、モデルやリージョンごとに在庫を確認してください。このページは限度額とコストについてなので、実際の数値は価格と割当のページを参照してください。

## Step 8 · Need more headroom? Raise it or spread it

[determined] もっと余裕が必要ですか?まずは未使用トークンを1分あたり再割り当てするか、サービスに追加のノルマをお願いしましょう。
[600ms]
[confident] その後、複数のデプロイメントやリージョンにトラフィックを分散させ、単一の上限が上限にならないようにします。
[600ms]
[calm] クォータ申請は受信順に審査され、アクティブな顧客が優先されます。 Azure API Managementのようなゲートウェイは、各消費者に対してトークン制限を強制することも可能です。

## Step 9 · Spend fewer tokens, pay less

[calm] コストは単にトークンにモデルとデプロイメントタイプのレートを掛けたものです。
[600ms]
[encouraging] つまり、請求額を抑える方法は3つあります。トークン数を減らす、より安価なモデルを選ぶ、または割引のある方法を利用することです。
[600ms]
[reflective] 画面に価格が表示されないのは意図的に変わるからです。価格ページを確認し、節約はワークロードによって変わるので、前後に測定してください。

## Step 10 · Watch tokens and budgets before the bill does

[curious] Foundryは各デプロイメントのトークン使用量と推定コストを示しているので、どこから支出が出ているかがわかります。
[600ms]
[confident] Azure Monitorは指標を追跡しアラートを送信し、コスト管理は予算を管理します。
[600ms]
[serious] 予算は通知をくれますが、支出を止めないでください。 Azure OpenAIにはハードコストの上限はありません。チームやプロジェクトごとにタグ付けして、コストを請求できるようにしましょう。

## Step 11 · Limits and cost at a glance

[calm] トークンは限度額と請求額の両方を設定し、これがこのレッスン全体のテーマです。
[600ms]
[confident] ノルマを計画し、4つの29エラーをバックオフで処理し、適切なデプロイタイプを選び、トークンを削減し、使用状況と予算を監視します。
[600ms]
[reassuring] 数字は頻繁に変わるので、ノルマや制限、価格ページは暗記するのではなくブックマークしておきましょう。
