# Narrator Script - 監視して更新を保つ

**Source animation:** journeys/Compute/VirtualMachines/VirtualMachineMonitoring.html

**Script status:** Authored voiceover.

Delivery cues appear in brackets; pauses are on separate lines.

## Step 1 · Checkout feels slow

[serious] 顧客から、購入手続きが遅いと言われました。チームは原因をつかめていません。
[600ms]
[curious] マシンでしょうか。ディスクでしょうか。それともアプリ自体でしょうか。
[800ms]
[calm] 観測データがなければ、議論を繰り返すだけです。Contoso が判断できるよう、状況を見えるようにしましょう。

## Step 2 · Host signals need no agent

[reassuring] 幸い、一部の情報はすでにあります。
[600ms]
[confident] Azure は、マシンの下にあるホストから CPU、ディスク、ネットワークのメトリックを収集します。ゲスト内へのインストールは不要です。
[600ms]
[calm] これだけでも、マシンに負荷がかかっているかを調べ始められます。ゲスト側の追加設定も必要ありません。

## Step 3 · Inside the guest needs an agent

[curious] ただし、ホストのメトリックだけではゲスト内部のすべては見えません。テレメトリを有効にして、何が増えるか確認しましょう。
[600ms]
[confident] OS が把握しているメモリ使用量や内部ログを集めるには、Azure Monitor Agent と、収集内容を指定するデータ収集ルールが必要です。
[600ms]
[serious] ルールを忘れないことが大切です。エージェントを入れるだけで、必要なデータが自動的にそろうわけではありません。

## Step 4 · Compare guest performance

[calm] データが届くと、VM Insights でまとめて確認できます。
[600ms]
[confident] CPU、メモリ、ディスクの性能を並べて見れば、購入手続きの遅さがマシン側なのか、コード側なのかを調査できます。
[600ms]
[serious] 性能監視は引き続きサポートされています。一方、従来の Map ビューと Dependency Agent は非推奨なので、新しい設計の前提にはしません。

## Step 5 · Turn a threshold into action

[curious] 午前三時までダッシュボードを見張るわけにはいきません。しきい値を変え、いつアラートが出るか見てみましょう。
[600ms]
[confident] アラートルールはシグナルが条件を満たすかを判断します。アクショングループは、メール、チケット、自動処理など、その後の対応を決めます。
[600ms]
[reassuring] ルールと対応が分かれているため、準備した一つのアクショングループを複数のルールで使えます。

## Step 6 · Patch on a schedule

[calm] 最後は、気づかないうちに積み残される更新です。
[600ms]
[confident] Azure Update Manager は、未適用の OS 更新を評価し、指定したスケジュールでインストールできます。独自の処理パイプラインを維持する必要はありません。
[600ms]
[determined] パッチ適用を毎回の緊急作業にしないようにしましょう。計画して続ける運用習慣です。

## Step 7 · Monitoring - All in One

[reflective] 四つの層で、店舗の予想外の問題に備えます。
[600ms]
[confident] 最初から得られるホストのシグナル、エージェントで集めるゲストの性能情報、人に届くアラート、そして計画的な更新です。
[600ms]
[proud] それが、マシンを動かすことと、サービスを運用することの違いです。
