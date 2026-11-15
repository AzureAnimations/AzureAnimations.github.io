# Narrator Script — Network · Protect and observe your network: DDoS, flow logs and traffic analytics

**Source animation:** [NetworkProtection.html](../../../journeys/Network/NetworkProtection.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/ddos-protection/ddos-protection-overview>
- <https://learn.microsoft.com/azure/network-watcher/vnet-flow-logs-overview>

---

## Step 1 · A busy Friday, or an attack?

[calm] 忙しい金曜日。Contoso Shop のパブリックIPにアクセスが殺到して、お客様がチェックアウトできません。
[600ms]
[concerned] これはセールの人気でしょうか、それとも攻撃でしょうか。このトラフィックは誰が送っているのか、そして、何なら吸収できるのでしょうか。
[600ms]
[serious] DDoS 攻撃は、アプリケーションが処理できる量を超えるトラフィックを送りつけるので、本物のユーザーが通れなくなります。

## Step 2 · Three kinds of DDoS attack

[curious] 攻撃には3種類あります。回線をあふれさせる攻撃、ハンドシェイクを悪用する攻撃、そして本物のウェブユーザーを装う攻撃です。
[600ms]
[calm] レイヤー3と4は、パケットと接続を運びます。レイヤー7はアプリケーションです。種類によって、止めるレイヤーが違います。
[600ms]
[confident] Azure DDoS Protection は、レイヤー3と4の攻撃を緩和します。レイヤー7には、ウェブアプリケーションファイアウォールを追加します。

## Step 3 · Three levels of DDoS cover

[calm] すべてのパブリックIPには、基本的なプラットフォーム保護が付いています。
[600ms]
[curious] 有料のティアは2つあります。DDoS IP Protection と DDoS Network Protection です。アプリに合わせて調整でき、アラートやログなども追加されます。
[600ms]
[reassuring] 2つは同じコアの技術を共有していて、付加価値のサービスが異なります。料金は、価格のページで確認してください。

## Step 4 · Absorb, scrub, forward

[calm] 学習した上限を超えると、Azure が、グローバルネットワークでその洪水を吸収して、除去します。
[600ms]
[confident] アプリに転送されるのは、正当なトラフィックだけです。
[600ms]
[impressed] アダプティブなリアルタイムチューニングは、機械学習によるトラフィックのプロファイリングで、保護対象のパブリックIPごとに上限を設定します。しきい値を手動で調整する必要はありません。

## Step 5 · See the attack while it happens

[curious] メトリクス、アラート、ログを見ると、攻撃が進行中であることと、何が破棄されたかがわかります。
[600ms]
[confident] Network Protection には、迅速対応チームも付いています。DDoS のログは、診断設定を使って Log Analytics ワークスペースに送ります。
[600ms]
[serious] テストは、承認されたシミュレーションパートナーとだけ行い、自分のものではない対象には、絶対に使わないでください。

## Step 6 · Layer the defences

[calm] すべてをカバーできるコントロールは、ありません。DDoS Protection が担当するのは、レイヤー3と4の洪水です。
[600ms]
[curious] WAF はレイヤー7でウェブリクエストを読み取り、NSG とファイアウォールが、誰が出入りできるかを決めます。
[600ms]
[confident] よくある設計では、DDoS 保護を有効にしたパブリックIPを、WAF 付きの Application Gateway に付けます。その後ろに、NSG で守られたサブネットが並びます。

## Step 7 · What a flow log records

[curious] 仮想ネットワークを通るIPフローは、どれも小さなレコードになります。誰が誰と、どのポートで通信して、許可されたのか拒否されたのかがわかります。
[600ms]
[calm] 各レコードには、ネットワークインターフェース、プロトコル、フローの状態、暗号化の状態、パケット数とバイト数も含まれます。
[600ms]
[reassuring] Microsoft.Insights リソースプロバイダーを登録しておく必要があります。また、同じリージョンに Standard のストレージアカウントが必要です。

## Step 8 · One switch replaces many

[serious] NSG フローログは 2027年9月30日に廃止され、新しく作成することもできません。
[600ms]
[confident] フローログは、NSG ごとではなく、仮想ネットワークで1度だけオンにしてください。
[600ms]
[concerned] 同じワークロードで仮想ネットワークフローログを有効にする前に、NSG フローログをオフにしてください。そうしないと、同じトラフィックを二重に記録して、二重に料金を払うことになりかねません。

## Step 9 · Traffic analytics: patterns, not rows

[calm] 生のフローログは、ただの行の羅列です。それをパターンに変えるのが、トラフィック分析です。
[600ms]
[curious] ログを読み込んで、重複をまとめ、地理情報やセキュリティの情報を加えて、結果を Log Analytics ワークスペースに保存します。
[600ms]
[serious] Network Watcher、ワークスペース、そしてフローログをオンにした仮想ネットワークが必要です。まずリージョンの表を確認してください。すべてのリージョンが対応しているわけではありません。

## Step 10 · Ask the network, check the posture

[calm] Network Watcher は、NSG 診断、次ホップ、有効なセキュリティルールなどのツールで、今まさに知りたいことに答えます。
[600ms]
[confident] Defender for Cloud は、設定を継続的にチェックして、直すべき点を一覧にします。
[600ms]
[reassuring] セキュアスコアは、そうした結果を1つの数値にまとめます。数値が高いほど、特定されたリスクは低くなります。

## Step 11 · Pick a threat, see what reacts

[curious] 攻撃か、設定ミスかを選んでみましょう。
[600ms]
[confident] 経路を見ると、どのコントロールが反応するか、そしてどこで確認できるかがわかります。
[600ms]
[reflective] よくある4つの脅威に、4つの異なる答えがあります。実際の防御の多くは、これらをいくつも重ねています。

## Step 12 · Absorb, block, record, flag

[calm] DDoS Protection で吸収し、WAF、NSG、ファイアウォールでブロックし、フローログで記録し、Defender for Cloud でフラグを立てます。
[600ms]
[confident] コントロールを重ねたうえで、ログと推奨事項を使って、ネットワークで実際に何が起きているかを確かめましょう。
[600ms]
[proud] A Z 700 では、これらのスキルが直接取り上げられています。A Z 305 では、ネットワークのセキュリティと監視に適したソリューションを選ぶことが求められます。
