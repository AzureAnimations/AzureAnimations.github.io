# Narrator Script — Containers · Troubleshoot AKS: pod not running

**Source animation:** [AksTroubleshooting.html](../../../journeys/Container/AksTroubleshooting.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/aks/monitor-aks>
- <https://learn.microsoft.com/troubleshoot/azure/azure-kubernetes/welcome-azure-kubernetes>
- <https://learn.microsoft.com/troubleshoot/azure/azure-kubernetes/create-upgrade-delete/pod-stuck-crashloopbackoff-mode>
- <https://learn.microsoft.com/troubleshoot/azure/azure-kubernetes/availability-performance/troubleshoot-pod-scheduler-errors>

---

## Step 1 · My pod is not running. Which command shows me why?

[calm] Contoso ShopはAKSで動いています。ポッドは4つ動いているはずですが、1つだけ動いていません。
[600ms]
[concerned] オンコール担当のMinaは、急いで原因を突き止めなければなりません。
[600ms]
[confident] ここに出てくる名前やターミナルの出力は、すべて架空のものです。でも、実際のクラスターで起きるパターンと同じです。

## Step 2 · The troubleshooting loop

[calm] 調査には、5つのステップのループがあります。順番は、いつも同じです。
[600ms]
[confident] 状態を読み、ポッドをdescribeして、イベントを確認し、ログを読みます。そして、修正して、もう一度確かめます。
[600ms]
[reassuring] describeの出力には、すでにEventsセクションが含まれています。だから、多くの問題は、2つ目のステップで解決します。ほかのコマンドは、さらに情報が必要なときに使います。

## Step 3 · Move 1 · What state is the pod in?

[calm] 1つ目のステップは、kubectl get podsです。すべてのポッドが、READY、STATUS、RESTARTSとともに一覧で表示されます。
[600ms]
[curious] STATUSの言葉を見るだけで、問題の種類の見当がつきます。そして、READYが1分の0なら、ポッドの中のコンテナーが、まだ1つも準備できていないという意味です。
[600ms]
[confident] ダッシュ大文字のAを付けると、すべての名前空間のポッドが表示されます。ダッシュnなら、指定した名前空間だけです。

## Step 4 · Move 2 · Describe it, then read the Events

[calm] 2つ目のステップは、kubectl describe podです。各コンテナーの状態、直前の状態、終了コード、再起動の回数が表示されます。
[600ms]
[curious] いちばん下には、Eventsセクションがあります。ポッド自身の日記のようなものです。
[600ms]
[confident] まず、ここを読みましょう。Kubernetesが試したこと、たとえば、スケジューリング、プル、起動、再起動と、何がうまくいかなかったかが書かれています。

## Step 5 · Move 3 · Read the events, oldest to newest

[calm] 3つ目のステップは、名前空間のイベントを読むことです。Kubernetesが試したことが記録されています。スケジュール、プル、起動、そしてバックオフです。
[600ms]
[curious] 時間順に並べると、ポッドに何が起きたかが、ひとつの流れとして読めます。
[600ms]
[serious] 各イベントは、NormalかWarningです。まず、Warningのイベントから見ましょう。それが手がかりになります。

## Step 6 · Move 4 · Read the logs, even from the crashed run

[calm] 4つ目のステップは、kubectl logsです。アプリが出力した内容が表示されます。
[600ms]
[concerned] ただし、クラッシュを繰り返すコンテナーは、再起動のたびに、ほぼ空の新しいログになってしまいます。
[600ms]
[confident] そこで、ダッシュダッシュpreviousを付けて、クラッシュした実行のログを読みます。最後のメッセージが、そこに残っています。

## Step 7 · Each failure happens at one stage of a pod’s life

[calm] どの障害も、ポッドのライフサイクルのどこかの段階で起きます。ポッドが止まった段階がわかれば、どんな原因を追えばいいかがわかります。
[600ms]
[curious] その段階は、STATUSとイベントからわかります。
[600ms]
[confident] Pendingは、ノードにまだ届いていないという意味です。ImagePullBackOffは、イメージの問題です。CrashLoopBackOffとOOMKilledは、起動したあとに起きます。

## Step 8 · Triage simulator: pick a symptom

[curious] では、練習しましょう。見かけるかもしれない症状を、ひとつ選んでください。
[600ms]
[confident] ターミナルが、原因を明らかにするコマンドを実行して、その横に、考えられる修正方法が表示されます。
[600ms]
[encouraging] 6つすべて試してみましょう。出力は架空のものですが、実際のkubectlコマンドの出力と、同じ形をしています。

## Step 9 · When the node is the problem

[calm] ポッドそのものが、原因ではないこともあります。NotReadyのノードは、ポッドを受け付けられないので、ノードを確認しましょう。
[600ms]
[confident] cordonは、新しいポッドが、そのノードに配置されないようにします。drainは、動いているポッドを、ノードから退避させます。
[600ms]
[reassuring] AKSはノードの状態を監視していて、異常なノードを自動で修復できます。アップグレードのときも、cordonとdrainを使います。

## Step 10 · Where logs and events live in Azure

[calm] kubectlで見えるのは、今のクラスターの状態です。Azure Monitorには履歴が残るので、ポッドがなくなったあとでも、検索できます。
[600ms]
[serious] コントロールプレーンのログは、診断設定を作るまで、収集されません。
[600ms]
[curious] AKS Automaticでは、Container insightsとマネージドPrometheusが、デフォルトで有効です。AKS Standardでは、自分で有効にします。

## Step 11 · kubectl debug: a shell on the node

[calm] ログとイベントだけでは足りないときは、kubectl debugで、ノード上にデバッグ用のポッドを起動します。
[600ms]
[serious] これは、特権コンテナーを動かすので、慎重に使いましょう。その中でchroot スラッシュ hostを実行すると、ノード自体を操作できます。
[600ms]
[confident] 確認が終わったら、そのポッドは削除します。Windowsノードでは、ドキュメントにあるSSHプロキシの回避策が必要です。

## Step 12 · Your pod-not-running playbook

[calm] これで、1つのループと、症状から原因への対応表、そして、Azureが証拠を残している場所が、わかりました。
[600ms]
[confident] これが、動かないポッドに対する、基本の進め方です。
[600ms]
[proud] これは、A I 200のスキルにも対応しています。ログ、イベント、エンドツーエンドの接続を調べて、AKSとContainer Appsのソリューションを監視し、トラブルシューティングすることです。
