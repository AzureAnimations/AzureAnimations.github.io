# Narrator Script — Compute · App Service · Custom Domains, TLS & Backup

**Source animation:** [AppServiceDomainsAndBackup.html](../../../journeys/Compute/AppServiceDomainsAndBackup.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/app-service/configure-ssl-bindings>
- <https://learn.microsoft.com/azure/app-service/manage-backup>
- <https://learn.microsoft.com/azure/app-service/faq-configuration-and-management>

---

## Step 1 · Your App Has a Name. Just Not Yours.

[curious] App Serviceのアプリには、どれも、azurewebsites dot netで終わるデフォルトの名前が付いています。
[600ms]
[confident] Contosoは、同じアプリに、自社のwww名を付けたいと考えています。しかも、ブラウザに鍵のマークが出る、HTTPSの状態でです。
[600ms]
[reassuring] そのためには、まずDNS、次に証明書が必要です。さらに、何かあったときにアプリを元に戻す方法も、あわせて学びます。

## Step 2 · Which Tiers Allow It?

[calm] カスタム名、証明書、バックアップは、どれも、アプリが動いているApp Serviceプランの価格レベルによって変わります。
[600ms]
[confident] Freeでは、カスタムドメインは使えません。Sharedでは、カスタムドメインは使えますが、カスタムTLSは使えません。Basic以上になると、TLSバインドとバックアップが追加されます。
[600ms]
[reflective] 計画を立てる前に、価格レベルを確認しましょう。価格は、あえて表示していません。公式の料金ページを見てください。

## Step 3 · The Custom-Domain Walk

[curious] DNSレコードから、鍵のかかったドアまでは、6つのステップです。
[600ms]
[confident] レコードを追加して、検証し、ドメインを追加します。証明書を取得してバインドし、最後に、HTTPSのみを強制します。各ステップを選ぶと、そこで何をするのか、何が失敗しやすいのかがわかります。
[600ms]
[serious] 順番が大切です。まず、DNSです。App Serviceは、名前を追加する前に、DNSを確認するからです。

## Step 4 · Two Records, One Proof

[calm] DNSレコードを1つ作って、自分の名前をアプリに結びつけます。サブドメインならCNAME、ルートドメインならAレコードです。
[600ms]
[confident] ドメイン検証IDを入れたTXTレコードで、そのドメインの所有者であることを証明します。
[600ms]
[reflective] これらのレコードは、DNSプロバイダーで追加します。値は、「カスタムドメインの追加」ダイアログに出てきます。検証して追加すると、その行には、まだバインドがない状態で表示されます。

## Step 5 · Choose a Certificate

[curious] App Serviceで証明書を用意する方法は、4つあります。
[600ms]
[confident] マネージド証明書は、無料で自動更新されますが、ワイルドカードには対応していません。そのほかに、App Service証明書を購入する、Key Vaultから取り込む、自分のP F Xファイルをアップロードする、という方法があります。
[600ms]
[serious] 公開証明書もアップロードできます。ただし、それは、コードがほかのサービスを呼び出すためのもので、カスタムドメインを保護するためのものではありません。

## Step 6 · Bind It: SNI or IP-Based

[calm] TLSバインドは、証明書をカスタムドメインに結びつけるものです。これで、はじめてドメインが保護されます。
[600ms]
[confident] ほとんどのアプリは、SNIを使います。ブラウザがホスト名を送るので、ひとつのIPアドレスで、複数の証明書を扱えます。
[600ms]
[reflective] IPベースのSSLでは、証明書ごとに専用のアドレスが割り当てられます。これには、Standard以上のレベルが必要です。

## Step 7 · Lock the Door

[serious] 次は、ドアに鍵をかけます。クライアントの接続方法は、全般設定の3つの項目で決まります。
[600ms]
[confident] HTTPS Onlyは、暗号化されていない通信を、すべてHTTPSにリダイレクトします。Minimum TLSは、アプリが受け付ける最も低いバージョンを決めます。
[600ms]
[calm] クライアント証明書を使うと、相互認証ができます。証明書の検証は、コードで行います。これには、Basic以上のレベルが必要です。

## Step 8 · Keep the Padlock Fresh

[concerned] 証明書には有効期限があり、期限が切れると、鍵のマークが警告に変わって、訪問者が離れてしまいます。
[600ms]
[confident] 更新が自動で行われるかどうかは、証明書の入手元によって決まります。マネージド証明書は自動で更新され、バインドもそれに追従します。
[600ms]
[serious] Key VaultとApp Serviceの証明書は、24時間ごとに同期されます。アップロードしたP F Xは、自分で管理します。差し替えて、もう一度バインドしてください。

## Step 9 · Your Safety Net: Backups

[calm] App Serviceは、設定なしで、アプリを自動的にバックアップします。さらに、自分で管理しているストレージアカウントへ、カスタムバックアップを追加できます。
[600ms]
[confident] 自動バックアップは1時間ごとに実行されますが、ダウンロードはできません。カスタムバックアップは、自分で決めたスケジュールで実行され、一部だけをバックアップすることもできます。
[600ms]
[reflective] バックアップは、毎回、全体のコピーです。差分ではありません。バックアップにはBasic以上が必要で、Basicでバックアップされるのは、本番スロットだけです。

## Step 10 · What a Backup Holds

[curious] では、バックアップには何が入っているのでしょうか。アプリのコンテンツと、一部の設定が復元されます。
[600ms]
[serious] ネットワーク、ID、スロット、カスタムドメインとTLSの設定は、復元されません。だから、リストアのあとで、もう一度確認する必要があります。
[600ms]
[reflective] リンクされたデータベースは、カスタムバックアップでしか対象にならず、その機能は廃止される予定です。代わりに、データベース自身のバックアップを使いましょう。

## Step 11 · Get It Back

[determined] 復旧するときは、既存のアプリに上書きするか、新しいアプリに復元するか、スロットに復元するかを選べます。
[600ms]
[confident] 本番環境では、まずスロットに復元して、そのあとスワップします。復元の間、対象のアプリまたはスロットは停止します。
[600ms]
[serious] 復元のあとは、カスタムドメインとTLSバインドを、もう一度確認してください。

## Step 12 · All in One

[calm] 名前を付けて、証明して、保護して、更新して、バックアップする。そうすれば、復旧もできます。
[600ms]
[confident] つまり、CNAMEかAレコードに、証明用のTXTレコード、証明書とバインド、HTTPS Only、そして最低TLSバージョンです。
[600ms]
[proud] バックアップで復元されるのは、ファイルと一部の設定で、ドメインやTLSは含まれません。ここまでが、すべて、A Z 104のApp Serviceの目標に含まれます。
