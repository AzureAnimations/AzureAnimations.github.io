# Narrator Script - 仮想マシン スケール セット

**Source animation:** journeys/Compute/VirtualMachines/VirtualMachineScaleSets.html

**Script status:** Authored voiceover.

Delivery cues appear in brackets; pauses are on separate lines.

## Step 1 · Demand changes

[curious] Contoso のアクセス数は一定ではありません。静かな朝もあれば、セールの混雑や、その後の落ち着いた週もあります。
[800ms]
[serious] 最も忙しい一時間に合わせて大きなマシンを用意すると、その容量に一か月分の料金を払い続けます。それでも予測が外れるかもしれません。
[600ms]
[confident] 店舗に必要なのは、予測に頼るだけでなく、需要の変化に合わせて増減できる容量です。

## Step 2 · Manage a group of VMs

[calm] スケールセットでは、管理する単位が変わります。
[600ms]
[confident] マシンを一台ずつ作る代わりに構成を定義し、それを基にスケールセットがインスタンスを作成して管理します。
[600ms]
[serious] 管理するのはインスタンスです。そこで動くアプリや、手前のロードバランサーは、それぞれ別に構成します。

## Step 3 · Choose an orchestration mode

[curious] 最初の重要な選択は、オーケストレーションモードです。
[800ms]
[confident] Flexible のインスタンスは通常の仮想マシンリソースなので、個別に確認して管理できます。Uniform はスケールセット専用のリソースをグループとして管理します。
[600ms]
[serious] モードは作成時に選び、後から変更できません。このレッスンでは、推奨されている Flexible を使います。

## Step 4 · Configure a bounded scaling policy

[calm] 次に、セットが従うルールを用意します。
[600ms]
[confident] この例では二台から四台の範囲を保ち、需要に応じてポリシーがインスタンスを増減させます。
[600ms]
[serious] どの処理も瞬時には終わりません。ルールの評価、クールダウン、作成、準備完了の確認には時間がかかります。混雑する前に容量を確保しましょう。

## Step 5 · Combine scaling with zone placement

[calm] 容量と配置は別の問題ですが、スケールセットは両方に対応できます。
[600ms]
[confident] 複数の可用性ゾーンを使う構成にすると、作成されるインスタンスがそのゾーンに分散されます。
[600ms]
[serious] ただし、明示的な構成が必要です。ゾーンを指定しないセットでは、ゾーン間の分散は保証されません。

## Step 6 · Separate routing health from repair

[curious] ここには、役割の違う二つの正常性の仕組みがあります。
[600ms]
[confident] ロードバランサーのプローブは新しい通信の送り先を決めます。自動インスタンス修復は、異常なマシンをいつ置き換えるかを判断します。
[600ms]
[serious] Flexible の修復には Application Health 拡張機能と、有効な修復ポリシーが必要です。起動の遅れを障害と誤認しないよう猶予期間も設けます。状態を切り替えて、両方の反応を確認しましょう。

## Step 7 · Scale in with the application in mind

[serious] 忘れられがちなのが、台数を減らすスケールインです。
[600ms]
[calm] インスタンスが削除されると、そのマシンに依存するセッションや、ローカルディスクだけに保存したデータも失われます。
[600ms]
[determined] 削除を前提に設計しましょう。処理中の仕事を終わらせ、終了通知に対応し、永続的な状態はマシンの外に保存します。

## Step 8 · VM Scale Sets - All in One

[reflective] 六つの判断が、一つの運用設計につながります。
[600ms]
[confident] マシン構成、オーケストレーション、スケーリングポリシー、ゾーン配置、正常性と修復、そしてデータの保存先です。
[600ms]
[proud] これらを組み合わせれば、Contoso の店舗はセール中に拡大し、その後は縮小できます。誰かが深夜までグラフを見張る必要も減らせます。
