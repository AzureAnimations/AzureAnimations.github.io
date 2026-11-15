# Narrator Script — Network · Microsoft Entra Private Access and Private Link services

**Source animation:** [EntraPrivateAccess.html](../../../journeys/Network/EntraPrivateAccess.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/entra/global-secure-access/concept-private-access>
- <https://learn.microsoft.com/azure/private-link/private-link-service-overview>
- <https://learn.microsoft.com/entra/global-secure-access/how-to-configure-per-app-access>

---

## Step 1 · Two requests, two tools

[calm] Contosoには、プライベートアクセスの依頼が2つあります。Maya は在宅勤務で、社内アプリが1つ必要です。
[600ms]
[curious] もう1つは、Contoso が Azure で運用しているサービスに、パートナーがアクセスしたいという依頼です。どちらも、それぞれ専用のプライベートな経路が必要です。
[600ms]
[confident] 1つ目には Microsoft Entra Private Access、2つ目には Azure Private Link サービスで応えます。

## Step 2 · The VPN problem

[calm] ネットワークレベルのVPNは、デバイス丸ごとをネットワークに参加させます。
[600ms]
[concerned] Maya が使いたいのは1つのアプリだけなのに、そのネットワーク上のすべてのサーバーに手が届いてしまいます。仕事に必要な範囲を大きく超えたアクセスです。
[600ms]
[confident] Private Access は、アプリケーションセグメント単位で動きます。これはネットワークレベルのアクセスの一般的な考え方で、すべてのVPN製品に当てはまるという意味ではありません。

## Step 3 · Microsoft Entra Private Access

[curious] Maya のデバイスでは、Global Secure Access クライアントが動いています。プライベートアプリへのリクエストはサービス経由で送られるので、VPNに接続する必要はありません。
[600ms]
[confident] プライベート扱いにする名前とアドレスを登録しておくと、そのアプリの宛先へのリクエストが、そのアプリにルーティングされます。
[600ms]
[reassuring] ネットワーク上のほかのものには、接続できません。

## Step 4 · The connector

[calm] コネクタは、ネットワーク内の Windows Server で動く小さなエージェントです。
[600ms]
[confident] コネクタからサービスへのアウトバウンド接続を開くので、インバウンドポートはまったく開けません。ユーザーはクラウドサービスに接続し、サービスがコネクタ経由でアプリにトラフィックを届けます。
[600ms]
[serious] 高可用性のために、グループには少なくとも2つのコネクタを置いてください。

## Step 5 · Define an app segment

[curious] セグメントは、アプリが何かを示すものです。完全修飾ドメイン名かIPアドレスと、そのポートで表します。
[600ms]
[confident] ワイルドカード名やアドレス範囲も使えますし、ポートは単一の値でも範囲でも指定できます。エンタープライズアプリにセグメントを追加し、コネクタグループを選びます。
[600ms]
[encouraging] そのあとで、利用を許可するユーザーとグループを割り当てます。

## Step 6 · Conditional Access on a private app

[calm] プライベートアプリはエンタープライズアプリなので、条件付きアクセスが適用されます。
[600ms]
[confident] ポリシーでは、アクセスの前に多要素認証や準拠デバイスを求めることができます。
[600ms]
[reassuring] Global Secure Access のアプリからポリシーを作り始めると、そのアプリが最初から対象になっています。緊急アクセスアカウントは除外して、レポート専用モードで始めましょう。

## Step 7 · Quick Access or per-app access?

[curious] 設定方法は2つあります。Quick Access は、主なプライベートリソース全体をまとめて扱う1つのアプリです。
[600ms]
[confident] アプリごとの Global Secure Access アプリでは、リソースの一部だけに専用のルールを設定します。
[600ms]
[reflective] Quick Access は移行用の段階と考えてください。まずVPNの置き換えに使い、もっと細かく制御したくなったら、アプリごとのアクセスに移します。どちらもコネクタグループを使います。

## Step 8 · Publish a Private Link service

[calm] 次はプロバイダー側です。サービスを Standard Load Balancer の背後に置きます。
[600ms]
[confident] そのフロントエンドIPに Private Link サービスを作ると、Azure が共有用のエイリアスを生成します。
[600ms]
[serious] Basic Load Balancer はここでは使えません。また、サービス、仮想ネットワーク、ロードバランサーは、すべて同じリージョンに置く必要があります。

## Step 9 · Who may connect: NAT, visibility, approval

[curious] 誰が接続できるかは、3つの設定で決まります。1つ目は可視性で、接続をリクエストできる相手を決めます。ロールベースのアクセスだけにするのか、特定のサブスクリプションにするのか、エイリアスを知っている人なら誰でもにするのか、という設定です。
[600ms]
[confident] 自動承認を使うと、信頼できるサブスクリプションは確認なしで通ります。それ以外のリクエストは、承認または拒否するまで保留になります。
[600ms]
[reflective] NAT IP は自分のサブネットから割り当てられます。そのため、サービス側から見える送信元は NATアドレスで、利用者自身のアドレスではありません。

## Step 10 · The partner's private endpoint

[calm] 利用者側では、パートナーが自分の仮想ネットワークにプライベートエンドポイントを作ります。
[600ms]
[confident] そのエンドポイントを、エイリアスかリソース識別子でこちらのサービスに向けます。エイリアスを使うと手動承認になるので、接続は保留から始まります。
[600ms]
[reassuring] パートナーのサブスクリプションが自動承認リストに入っていれば、すぐに承認されます。トラフィックを送れるのは、承認された接続だけです。

## Step 11 · Which one for which request?

[curious] 6つのシナリオに、2つのツール。それぞれがどちらに当てはまるか、見ていきましょう。
[600ms]
[confident] スタッフが、本人のIDに基づいて社内のプライベートアプリにアクセスするなら、Private Access です。
[600ms]
[proud] 自分のサービスを、相手のプライベートエンドポイントに公開するなら、Private Link サービスです。

## Step 12 · Recap: identity in, private endpoint out

[calm] Private Access は、スタッフをIDに基づいて1つのプライベートアプリにつなぎます。VPNは必要ありません。
[600ms]
[confident] Private Link サービスを使うと、パートナーは自分のプライベートエンドポイント経由でサービスにアクセスできます。
[600ms]
[proud] この2つで、S C 500 の学習ガイドの2項目をカバーしました。どのツールがどのリクエストに応えるのか、これでわかりますね。
