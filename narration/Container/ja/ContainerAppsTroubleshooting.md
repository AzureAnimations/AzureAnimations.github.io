# Narrator Script — Containers · Troubleshoot Container Apps: app not responding

**Source animation:** [ContainerAppsTroubleshooting.html](../../../journeys/Container/ContainerAppsTroubleshooting.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/container-apps/troubleshooting>
- <https://learn.microsoft.com/azure/container-apps/revisions>
- <https://learn.microsoft.com/azure/container-apps/log-streaming>
- <https://learn.microsoft.com/azure/container-apps/ingress-overview>

---

## Step 1 · The app is up but the URL fails: where to look first

[calm] Contosoのorders-apiは、ポータルではRunningと表示されています。それなのに、URLにアクセスしても応答がありません。
[600ms]
[concerned] オンコール担当のMinaにとって、ステータスが緑でも、お客様に何も表示されないなら意味がありません。
[600ms]
[determined] 彼女に必要なのは、適切な順番で確認する場所の、短いリストです。一緒に作っていきましょう。

## Step 2 · The troubleshooting loop for Container Apps

[confident] ステップは5つで、順番はいつも同じです。リビジョンの状態を読み、ログを読み、イングレスを確認して、レプリカとプローブを確認します。
[600ms]
[calm] 5つ目は、ひとつだけ直して、もう一度確かめることです。ここに出てくるAzure CLIのコマンドは、すべてaz containerappで始まります。
[600ms]
[reassuring] ポータルにも、同じ確認ポイントがあります。リビジョン管理から、「問題の診断と解決」までです。使いやすいほうを使ってください。

## Step 3 · Revision status and provisioning state

[curious] デプロイするたびに、リビジョンが作られます。そのリビジョンが、状況を読み解く最初の手がかりになります。
[600ms]
[calm] プロビジョニング状態は、起動チェックと準備完了チェックに合格したかどうかを示します。実行状態は、レプリカの状況を示し、Running、Degraded、Failedなどがあります。
[600ms]
[confident] 状態がおかしいときは、実行状態の詳細を開きます。正確な理由が表示されます。

## Step 4 · Console logs versus system logs

[calm] ログには、2種類あります。コンソールログは、アプリが標準出力と標準エラー出力に書き出したものです。
[600ms]
[curious] システムログは、Container Appsサービスが、アプリについて出力するものです。システムログでは、何が起きたかがわかり、コンソールログでは、なぜ起きたかがわかります。
[600ms]
[reassuring] ポータルでLog streamを開いて、ConsoleかSystemを選びます。リビジョンがゼロにスケールされていると表示されたら、レプリカが1つ以上あるリビジョンをデプロイしてください。

## Step 5 · Query ContainerAppConsoleLogs and ContainerAppSystemLogs with KQL

[calm] Log Analyticsでは、ログは2つのテーブルに入ります。システムログ用と、コンソールログ用です。
[600ms]
[confident] アプリ名とリビジョン名で絞り込んで、Log列を読みます。コンソールログでは、どのレプリカとどのイメージが、その行を書いたかもわかります。
[600ms]
[encouraging] 同じクエリは、コマンドラインからも実行できます。オンコールの手順に、スクリプトとして組み込めます。

## Step 6 · Ingress: external, internal, target port, IP restrictions

[calm] イングレスは、アプリの手前にあるルールの集まりなので、順番に確認しましょう。まず、そもそもオンになっていますか。
[600ms]
[curious] 次に、誰がアクセスできるのか。外部は、どこからでも、内部は、Container Appsの環境内からだけです。そして、ターゲットポートが、アプリの待ち受けポートと一致しているかを確認します。
[600ms]
[serious] 最後に、IP制限が、クライアントをブロックしていないか確認します。このどれかひとつだけで、正常なアプリが応答しなくなることがあります。

## Step 7 · Replicas, probes and restarts

[curious] ヘルスプローブを使うと、Container Appsが、レプリカごとに状態を確認します。プローブに失敗したレプリカは、異常とみなされ、再起動されることがあります。
[600ms]
[concerned] プローブのポートが違っていたり、起動が遅かったりすると、正常なアプリが壊れているように見えます。起動に時間がかかるJavaアプリは、初期遅延を長くする必要があることが多いです。
[600ms]
[confident] イングレスがオンの場合、デフォルトのプローブは、イングレスのターゲットポートを使います。プローブは、コンテナーごとに、種類ごとに1つしか追加できないことも覚えておきましょう。

## Step 8 · Scaling that never starts (min replicas, scale rule credentials)

[concerned] メッセージはキューで待っているのに、レプリカが現れない。これは、コードの問題ではなく、スケーリングの問題です。
[600ms]
[calm] 原因は、最小レプリカ数が0で、アプリを起こすものがないか、スケールルールがイベントソースを読み取れないか、のどちらかです。
[600ms]
[reassuring] スケールルールは、シークレットかマネージドIDでサインインします。シークレットを変更したら、新しい値が反映されるように、リビジョンを再起動してください。

## Step 9 · Triage simulator: pick a symptom

[excited] では、やってみましょう。症状を選ぶと、シミュレーターが、確認できる証拠を表示します。
[600ms]
[curious] 症状ごとに、最初に試す修正方法も表示されます。ループが、最初から最後まで動くのを確認できます。
[600ms]
[reflective] 名前や出力は架空のものです。実際の出力は、細かい点が違いますが、大事なのはパターンです。

## Step 10 · Troubleshooting playbook

[confident] これで、たどるべきループがひとつ、症状から最初に疑うべき原因への対応表、そして、Azureが証拠を残している場所が、わかりました。
[600ms]
[calm] A I 200のスキルには、AKSとContainer Appsのソリューションの監視とトラブルシューティングが含まれています。このレッスンは、そのうちのContainer Appsの部分です。
[600ms]
[proud] 次に、ステータスが緑なのにURLが応答しないときは、最初にどこを見ればいいか、もうわかります。
