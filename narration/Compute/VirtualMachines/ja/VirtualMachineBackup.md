# Narrator Script - バックアップと復元を確かめる

**Source animation:** journeys/Compute/VirtualMachines/VirtualMachineBackup.html

**Script status:** Authored voiceover.

Delivery cues appear in brackets; pauses are on separate lines.

## Step 1 · Someone deletes the orders folder

[serious] いつもの火曜日、誰かが注文フォルダーを削除してしまいました。
[600ms]
[calm] ストレージの冗長化は、設計どおりに動きます。削除も、ほかのレプリカへ忠実に反映されます。
[600ms]
[confident] 冗長化はハードウェア障害への備えです。このような操作ミスから戻すにはバックアップが必要で、その準備は別に行います。

## Step 2 · Create the vault

[calm] そこで Contoso は、回復ポイントを安全に保管する場所を用意します。
[600ms]
[confident] Recovery Services コンテナーは仮想マシンの外にあり、回復ポイントと、その管理ルールを保持します。
[600ms]
[reassuring] マシンとは別なので、仮想マシンを削除しただけで、コンテナー内の回復ポイントまで消えるわけではありません。

## Step 3 · Write the policy

[curious] どのくらいの頻度で取り、どのくらい残すのでしょうか。
[800ms]
[confident] 両方を決めるのがバックアップポリシーです。スケジュールが実行時刻を決め、保持期間が各回復ポイントを残す長さを決めます。
[600ms]
[serious] 保持期間は、コストと安心のバランスです。業務で本当に戻す必要がある範囲を考え、その理由も説明できるようにしましょう。

## Step 4 · One run, two phases

[calm] バックアップは、一瞬で完結する処理ではありません。
[600ms]
[confident] Azure は、まずスナップショットを取り、その後でデータをコンテナーへ転送します。通常、転送にはより長い時間がかかります。
[600ms]
[reassuring] そのため、マシン側の処理が終わったように見えても、コンテナーへの転送は続いていることがあります。両方の段階が重要で、完了時刻も違います。

## Step 5 · Restore only what you need

[curious] 問題が起きたら、どこまで戻す必要があるでしょうか。選択肢を切り替えて確認しましょう。
[600ms]
[confident] マシン全体を復元する、ディスクを戻して置き換える、回復ポイントをマウントしてファイルを取り出す、といった方法があります。
[600ms]
[determined] 被害の範囲に合った復元を選びます。フォルダー一つの削除で、店舗全体を作り直す必要はありません。

## Step 6 · Deleting a backup is a separate risk

[serious] バックアップ自体が攻撃されたり、削除されたりする場合も考えましょう。
[600ms]
[confident] 論理的な削除は、削除されたバックアップデータを一定期間保持します。誤操作や悪意のある削除から、データを戻せる余地を残します。
[600ms]
[calm] 守るのは、すでにあるバックアップです。一度もバックアップしていないマシンを復元できるわけではありません。

## Step 7 · VM Backup - All in One

[reflective] 四つの備えが、大きな事故から立ち直る助けになります。
[600ms]
[confident] マシンの外にあるコンテナー、業務に合ったポリシー、存在を確認した回復ポイント、そして実際に試した復元手順です。
[600ms]
[proud] 特に大切なのは復元の練習です。試していないバックアップは、まだ期待であって計画ではありません。
