# Narrator Script — Virtual Machines · Secure a virtual machine: encryption, JIT, Trusted launch and Defender for Servers

**Source animation:** [SecureVirtualMachines.html](../../../../journeys/Compute/VirtualMachines/SecureVirtualMachines.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/defender-for-cloud/just-in-time-access-overview>
- <https://learn.microsoft.com/azure/virtual-machines/disk-encryption-overview>
- <https://learn.microsoft.com/azure/virtual-machines/trusted-launch>
- <https://learn.microsoft.com/azure/virtual-machines/boot-integrity-monitoring-overview>

---

## Step 1 · A VM with the defaults

[calm] Contosoの新しいショップ用VMは、使いやすさを優先して作られました。パブリックIPアドレスがあり、RDPもSSHもどこからでも許可されていて、誰も監視していません。
[600ms]
[concerned] ポータルのデフォルトは変わることがあるので、自分のVMが何を公開しているか確認してください。
[600ms]
[serious] ここで大切なのは、攻撃者が何に届くかです。この状態だと、かなり広い範囲に届いてしまいます。

## Step 2 · Don’t leave RDP and SSH open

[serious] 攻撃者は、管理ポートが開いているマシンを、積極的に探しています。
[600ms]
[concerned] 1台のVMが侵害されると、そのVMから届くほかのすべてのものへの、入口になってしまいます。
[600ms]
[confident] とはいえ、管理者にはRDPとSSHが必要なので、ポートをなくすわけにはいきません。普段は閉じておいて、必要なときだけ、できるだけ短い時間だけ開けます。

## Step 3 · Just-in-time access

[calm] ジャストインタイムアクセスなら、管理ポートを閉じたままにできます。
[600ms]
[confident] 管理者は、自分のIPアドレスと短い時間枠を指定して、ポートを要求します。Defender for Cloudが、Azure RBACのアクセス許可を確認して、その送信元アドレスに対して、その時間だけポートを開きます。
[600ms]
[reassuring] 時間が終わると、ルールは元に戻ります。すでに開いている接続は、切断されません。これは、Defender for Servers Plan 2の機能です。

## Step 4 · Bastion or JIT?

[curious] どちらも、RDPとSSHをインターネットに開けたままにしない方法ですが、やり方が違います。シナリオを選んで、どちらが合うか見てみましょう。
[600ms]
[confident] Bastionは、TLSでポート443を使って、RDPとSSHを提供します。VMにはプライベートIPで接続するので、VMにパブリックIPは要りません。
[600ms]
[reflective] JITは、ネットワークセキュリティグループを閉じたままにして、限られた時間だけ、1つのアドレスに対してポートを開けます。Defender for Servers Plan 2が必要です。

## Step 5 · Disk encryption

[calm] マネージドディスクは、保存時は常に暗号化されます。ただし、一時ディスクとキャッシュは対象外です。
[600ms]
[confident] ホストでの暗号化を使うと、それらに加えて、ストレージに流れるデータも暗号化されます。Azure Disk Encryptionは、VMの中で、BitLockerやDM-Cryptを使って動きます。
[600ms]
[serious] Azure Disk Encryptionは、提供終了が予定されています。そのため、Learnでは、新しいVMにはホストでの暗号化を勧めています。自分のキーを使えば、管理も自分でできます。

## Step 6 · Security type

[curious] VMを作るときに、セキュリティタイプを選びます。これで、オペレーティングシステムが起動する前の、VMの保護が決まります。
[600ms]
[confident] Trusted launchは、第2世代のVM向けで、新しいVMのデフォルトです。機密VMは、ハードウェアで強制される境界を、VMの周りに追加します。
[600ms]
[concerned] 標準タイプには、こうしたブート保護がありません。いちばん弱い選択肢です。

## Step 7 · Secure Boot and vTPM

[calm] Secure Bootでは、署名されたブートコードだけが実行されます。ブートローダー、カーネル、ドライバーは、信頼できる発行元の署名が必要です。そうでないと、VMは起動しません。
[600ms]
[confident] vTPMは、仮想のTPM 2点0です。実行されたものを記録するので、あとから、ブートが正しかったことを証明できます。
[600ms]
[impressed] これで、キーと測定値は、どのVMからも手が届かない場所に置かれます。ルートキットへの対策になります。

## Step 8 · Integrity monitoring

[calm] 整合性監視をオンにすると、ゲスト構成証明の拡張機能が、ブートのたびに、Azureに対して証明します。
[600ms]
[confident] 証明に失敗すると、Defender for Cloudがアラートを出します。ポータルで、セキュリティタイプの設定にある「整合性監視」を選ぶと、拡張機能がインストールされます。
[600ms]
[serious] Secure BootとvTPMがオンの、Trusted launch VMが必要です。Secure Bootが無効だと、構成証明は失敗します。

## Step 9 · Defender for Servers

[calm] Defender for Serversは、Defender for Cloudから、WindowsとLinuxのマシンを保護します。サブスクリプションでオンにして、プランを選びます。
[600ms]
[confident] Plan 1は入門向けで、エンドポイントの検出と対応が中心です。Plan 2は、Plan 1の内容に加えて、エージェントレススキャン、JIT、ファイルの整合性監視が含まれます。
[600ms]
[reflective] Microsoftは、サブスクリプションのレベルで有効にすることを勧めています。トグルをオンにすると、デフォルトでPlan 2が有効になります。料金は、Defender for Cloudの料金ページで確認してください。

## Step 10 · Vulnerability scanning and EDR

[curious] Defender for Endpointのセンサーは、VMが動いている間の状態を見ます。エージェントレススキャンは、ディスクのコピーを読み取るので、何もインストールする必要がありません。
[600ms]
[confident] エージェントベースのスキャンとEDRは、どちらのプランにも含まれます。エージェントレススキャンはPlan 2で、マルウェアスキャンもPlan 2だけです。
[600ms]
[reassuring] スナップショットは、VMと同じリージョンにとどまり、メタデータを読み取ったあとに削除されます。

## Step 11 · Azure Machine Configuration

[calm] Machine Configurationは、オペレーティングシステム内の設定を、求める状態と照らし合わせて確認します。ずれたときは、元に戻すこともできます。
[600ms]
[confident] これは、Azure Policyの機能です。Azure VMには、マシン構成の拡張機能と、システム割り当てのマネージドIDが必要です。
[600ms]
[curious] 割り当てごとに、モードを選びます。Audit、Apply and Monitor、Apply and Autocorrectです。

## Step 12 · Arc-enabled servers, and the recap

[calm] Azure Arcを使うと、Azureの外にあるサーバーを、Azureの管理下に置けます。Connected Machineエージェントをインストールすると、サーバーがAzureリソースになります。
[600ms]
[confident] そうすれば、Defender for Servers、Azure Policy、Machine Configurationも、そのサーバーで使えます。
[600ms]
[proud] Trusted launchやホストでの暗号化といったVMの機能は、Azure VMのものです。ポートを閉じて、ブートを守り、ディスクを暗号化して、監視を続けましょう。
