# Narrator Script - 壊さずに移動する

**Source animation:** journeys/Compute/VirtualMachines/MoveVirtualMachines.html

**Script status:** Authored voiceover.

Delivery cues appear in brackets; pauses are on separate lines.

## Step 1 · It landed in the wrong place

[curious] 店舗は、まだ実験だった頃に、検証用のリソースグループで作られました。
[600ms]
[serious] 今は実際の注文を受け付けているので、本番のリソースと同じ管理ルールや請求の枠組みに移す必要があります。
[600ms]
[calm] まず、リソースグループは管理上の境界であり、物理的な場所ではありません。グループを変えても、データの所在地が変わるわけではありません。

## Step 2 · Move between resource groups

[calm] 最も単純なのは、リソースの所属先だけを変える移動です。
[600ms]
[confident] Azure は、仮想マシンを動かしたまま所属グループを変更します。この移動自体のためにマシンを停止する必要はありません。
[600ms]
[serious] ただし、移動中は両方のグループで管理操作の書き込みがロックされます。その間は、どちらにも新しいデプロイを行わないようにします。

## Step 3 · Move between subscriptions

[calm] サブスクリプション間の移動も、管理の階層を一つ上げた同じ考え方です。
[600ms]
[confident] マシンと、一緒に移す必要があるディスクやネットワークインターフェイスなどの依存リソースを、移動先へまとめて準備します。
[600ms]
[serious] まず移動先を確認しましょう。必要なクォータがなければ、移動を完了できません。

## Step 4 · Changing region is a rebuild

[serious] リージョンを変える場合は、別の操作になります。
[600ms]
[confident] Azure Resource Mover はワークロードをコピーし、新しいリージョンにリソースを作り直します。識別子やアドレスの変更も想定します。
[600ms]
[calm] 再構築として計画しましょう。切り替え、名前解決、古いアドレスを直接書き込んだ設定まで確認します。

## Step 5 · Check before you commit

[curious] 事前確認の習慣で、多くの問題を避けられます。チェックを実行し、検証結果を見てみましょう。
[600ms]
[confident] すべてのリソースが、すべての移動方法に対応するわけではありません。開始前に全体を検証し、対象リソースの移動サポート一覧を確認します。
[600ms]
[reassuring] 検証で非対応のリソースに気づけば、修正は短時間で済みます。途中で気づくと、長い作業になるかもしれません。

## Step 6 · Moving - All in One

[reflective] 三種類の移動を、区別して考えましょう。
[600ms]
[confident] グループやサブスクリプションの変更は管理上の所属を変えます。リージョンの変更は、別の場所にリソースを作り直します。
[600ms]
[proud] Contoso の店舗は、構築、障害への備え、拡張、適正化、バックアップ、監視を終えました。そして、必要な場所で運営できるようになりました。
