# Narrator Script - VM サイズを最適化する

**Source animation:** journeys/Compute/VirtualMachines/VirtualMachineSizes.html

**Script status:** Authored voiceover.

Delivery cues appear in brackets; pauses are on separate lines.

## Step 1 · The invoice arrives

[serious] セールは成功しました。その後、一か月分の請求が届きます。
[600ms]
[curious] Contoso は、CPU の平均使用率が九パーセントだったマシンに、通常どおりの料金を払っていました。
[800ms]
[confident] 適正なサイズ選びは、実際の利用状況の測定から始まります。必要かもしれない容量を想像するだけではありません。

## Step 2 · Pick the family first

[calm] サイズの前に、ファミリを選びます。
[600ms]
[confident] シリーズは用途に応じてハードウェアをまとめたものです。負荷が低い時間が多いならバースト型、バランスなら汎用、大きなデータならメモリ最適化、重い処理ならコンピューティング最適化を検討します。
[600ms]
[reassuring] ファミリが合っていれば、サイズは当てずっぽうではなく、根拠を持って調整できます。

## Step 3 · The size sets the ceiling

[curious] サイズが決めるのは CPU とメモリだけではありません。スライダーで、ほかに何が変わるか見てみましょう。
[600ms]
[confident] 接続できるデータディスクの数、ネットワークインターフェイスの数、ネットワーク帯域幅にも上限があります。
[600ms]
[serious] こうした上限は見落とされがちです。CPU に余裕があっても、店舗はディスクやネットワークの上限に達することがあります。

## Step 4 · Resizing restarts the machine

[calm] サイズは変更できますが、影響がないわけではありません。
[600ms]
[serious] 新しいサイズに対応するハードウェアを使うためにマシンが再起動するので、店舗の中断を計画しておきます。
[600ms]
[confident] 現在のホストクラスターにそのサイズがなければ、先に割り当て解除が必要です。動的アドレスへの影響も確認し、セールの最中ではなく、事前に作業時間を決めて周知しましょう。

## Step 5 · Quota limits what you can deploy

[curious] 計画どおりにマシンを動かすには、もう一つ確認が必要です。
[800ms]
[confident] クォータはリージョンやファミリごとに設定され、予算とは別の制限です。
[600ms]
[serious] 予算が承認されていても、デプロイできないことがあります。空きを確認し、公開日のかなり前に必要な増加を申請しましょう。

## Step 6 · Right-Sizing - All in One

[reflective] 四つの習慣を、この順番で実践します。
[600ms]
[confident] 実際の負荷を測り、合ったファミリを選び、サイズの上限を確認し、変更に伴う再起動を計画します。
[600ms]
[proud] そうすれば Contoso は、想像した店舗ではなく、実際に運営している店舗に見合う料金を払えます。
