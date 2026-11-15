# Narrator Script - データを保持するディスク

**Source animation:** journeys/Compute/VirtualMachines/VirtualMachineDisks.html

**Script status:** Authored voiceover.

Delivery cues appear in brackets; pauses are on separate lines.

## Step 1 · The catalogue outgrows its disk

[curious] 店舗が成長すると、商品写真も増えていきます。
[600ms]
[serious] その写真が OS と同じディスクを埋め始めました。データには専用のディスクを用意したいところです。
[600ms]
[calm] 冗長化も、書き込みの間違いまでは防げません。後で取り消したい変更も、忠実に複製します。

## Step 2 · Three disks, three jobs

[calm] 仮想マシンには三種類のディスクがあり、役割を混同しがちです。
[600ms]
[confident] OS ディスクは起動用、データディスクはファイルや商品カタログの保存用です。一時ディスクは作業用の領域です。
[600ms]
[serious] 一時領域は永続保存先ではありません。メンテナンス、再デプロイ、停止などでデータを失うことがあるため、消えても困らないものだけを置きます。

## Step 3 · Match the disk to the work

[curious] マネージドディスクには複数の種類があり、速度と料金に違いがあります。
[600ms]
[confident] Standard HDD から Ultra Disk まで、毎秒の操作数、データ転送量、価格が変わります。
[600ms]
[serious] 性能はディスクの種類やサイズに左右されますが、仮想マシンのサイズが持つ上限も超えられません。

## Step 4 · Grow it, never shrink it

[calm] 一度選んだ容量が固定されるわけではありません。操作して、容量の変化を確認しましょう。
[600ms]
[confident] マネージドディスクは、測定結果に応じて拡張できます。最初から過大な容量を用意する必要はありません。
[600ms]
[serious] ただし、縮小はできません。拡張した後は、新しい領域を使えるように、ゲスト内のファイルシステムも拡張します。

## Step 5 · Freeze a point in time

[calm] リスクのある変更の前には、スナップショットを取ります。
[600ms]
[confident] その時点のディスクのコピーを残せるので、更新やスキーマ変更に備えられます。
[600ms]
[serious] これは、指定した時点の一枚のディスクのコピーです。定期バックアップでも、復元計画でもありません。それは次のレッスンで扱います。

## Step 6 · Encrypt at the host

[calm] 保存データは暗号化しましょう。ホスト側で保護する方法があります。
[600ms]
[confident] ホストでの暗号化は、OS ディスク、データディスク、一時ディスク、ホストキャッシュを保護します。
[600ms]
[reassuring] 処理はゲスト内ではなくホストで行うため、店舗の仮想マシンの CPU を使いません。

## Step 7 · VM Disks - All in One

[reflective] Contoso のデータの速さと安全性は、五つの判断にかかっています。
[600ms]
[confident] ディスクの役割、種類、拡張の余地、変更前のスナップショット、そして全体を守る暗号化です。
[600ms]
[determined] 用途に合ったストレージは、目立たず仕事をしてくれます。それが目指す姿です。
