# Narrator Script — Compute · Azure Virtual Desktop: Desktops for 500 Remote Staff

**Source animation:** [VirtualDesktop.html](../../../journeys/Compute/VirtualDesktop.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/virtual-desktop/>

---

## Step 1 · Desktops for 500 Remote Staff, No Laptops

[calm] Contosoは、500人のリモートスタッフを採用しますが、ノートパソコンは配りません。スタッフの端末は、みんなバラバラです。
[600ms]
[curious] では、全員のWindowsデスクトップを、どこで動かせばいいのでしょうか。
[600ms]
[confident] 答えは、デスクトップをAzure上の仮想マシンで動かして、どんな端末にもストリーミングすることです。それがAzure Virtual Desktopです。ひとつずつ設計していきましょう。

## Step 2 · Who Runs What: Microsoft vs You

[calm] Azure Virtual Desktopはサービスなので、まず、誰が何を運用するのかを整理します。
[600ms]
[confident] Microsoftが運用するのは、コントロールプレーンです。Webアクセス、ブローカー、ゲートウェイ、リソースディレクトリです。リモートデスクトップサービスのように、ゲートウェイサーバーを自分で管理する必要はありません。
[600ms]
[serious] 自分で運用するのは、セッションホストのVM、そのイメージとアプリ、仮想ネットワーク、バックアップと復旧、そしてIDです。

## Step 3 · Five Objects Connect Users to a Desktop

[calm] ユーザーとデスクトップをつなぐのは、5つのオブジェクトです。ワークスペースは、アプリケーショングループをまとめたもので、ユーザーに見えるリストです。
[600ms]
[curious] アプリケーショングループは、ひとつのホストプールから、デスクトップやRemoteAppを公開します。ユーザーの割り当ては、ここで行います。できれば、グループ単位で割り当てましょう。
[600ms]
[confident] ホストプールは、同じイメージから作ったセッションホストVMの集まりです。アプリケーショングループは、ひとつのワークスペースにしか所属できません。

## Step 4 · Pooled or Personal Host Pool?

[calm] ホストプールには、2種類あります。プール型では、複数のユーザーがセッションホストを共有するので、コストを抑えられます。
[600ms]
[curious] プール型では、負荷分散の方法も選びます。幅優先は、新しいセッションを均等に分散します。深さ優先は、ひとつのホストをセッション数の上限まで埋めてから、次のホストを使います。
[600ms]
[confident] 個人用プールでは、ユーザーごとに専用のVMを割り当てるので、負荷分散は関係ありません。マルチセッションのWindowsは、Azure Virtual Desktopでしか使えません。

## Step 5 · Profiles Follow the User: FSLogix

[curious] プール型のホストプールでは、ユーザーが毎回、別のホストに接続することがあります。では、プロファイルは、どうやって一緒に移動するのでしょうか。
[600ms]
[confident] おすすめは、FSLogixのプロファイルコンテナーです。サインインすると、ファイル共有からコンテナーが仮想ディスクとしてアタッチされるので、プロファイルが、ローカルにあるかのように使えます。
[600ms]
[reassuring] ほとんどのお客様には、Azure Filesをおすすめします。Azure NetApp Filesも、Azureでの選択肢のひとつです。

## Step 6 · Identity: Entra ID Signs Users In

[calm] ユーザーの認証は、必ずMicrosoft Entra IDが行います。そのため、すべてのユーザーにEntraアカウントが必要です。
[600ms]
[serious] 個人のMicrosoftアカウントは、サポートされていません。
[600ms]
[confident] セッションホストは、同じEntraテナントか、Active Directoryドメインに参加させます。ドメインを使う場合、ユーザーアカウントはハイブリッドIDで、つまり同期されている必要があります。

## Step 7 · Three Ways to Join Session Hosts

[calm] 参加の種類は、IDとアプリがどこにあるかで選びます。
[600ms]
[curious] Entra参加のホストは、ドメインコントローラーへの直接の接続が不要で、Intuneにも自動で登録できます。ドメインを使う場合は、Microsoft Entra Connectでアカウントを同期します。または、Entra Domain Servicesが、Entra IDから同期します。
[600ms]
[serious] いちばん大切なルールは、ホストプールには、参加の種類が同じセッションホストだけを入れることです。

## Step 8 · Network: Outbound Only, Then Shortpath

[calm] デフォルトでは、クライアントとセッションホストの両方が、ゲートウェイへTLSで外向きに接続します。ゲートウェイが、セッションを中継します。
[600ms]
[reassuring] これがリバース接続です。受信用のRDPポートを開ける必要はありません。
[600ms]
[curious] RDP Shortpathを使うと、並行してUDPの経路を追加できます。信頼性と遅延が改善され、TCPはフォールバックになります。また、Private Linkを使えば、通信をプライベートエンドポイントの中にとどめられます。

## Step 9 · Autoscale: Pay for Hosts Only When Used

[calm] スケーリングプランは、セッションホストの電源を、オンやオフにします。夜間に、使っていないホストの料金を払わずに済みます。
[600ms]
[curious] 1日は4つのフェーズで動きます。ランプアップ、ピーク、ランプダウン、オフピークです。プール型のスケジュールでは、容量のしきい値と、ホストの最小割合を使います。
[600ms]
[confident] 個人用のスケジュールでは、代わりにセッションの状態を見ます。たとえば、サインアウトや切断です。ここに出てくるホストの数は、あくまで例です。

## Step 10 · Run It: Images, Cost and Monitoring

[calm] 運用するために、ゴールデンイメージを1つ作ります。VMをカスタマイズして、sysprepを実行し、Azure Compute Galleryにキャプチャします。
[600ms]
[confident] プール型のホストは、更新したイメージから再デプロイして更新します。マルチセッションのホスト、自動スケール、Start VM on Connectを使うと、コストを抑えられます。
[600ms]
[reassuring] そして、Azure Virtual Desktop Insightsを使えば、全体の状況を確認できます。Log Analyticsワークスペースを使います。

## Step 11 · Pick a Design for Each User Type

[curious] ユーザーから考えましょう。タイプを選ぶと、それに合うプロファイルとスケーリングの方針が表示されます。
[600ms]
[confident] タスクワーカーには、深さ優先のプール型マルチセッションホストが合います。開発者には、1人に1台のVMを割り当てる、個人用のホストプールです。外部の委託先には、ブラウザーからRemoteAppを使ってもらい、外部IDに対応するEntra参加のホストを使います。
[600ms]
[serious] これらは設計の提案です。サイズを決める前に、自分たちのアプリでテストしてください。

## Step 12 · Azure Virtual Desktop, All in One

[calm] これが、Contosoの500人のスタッフに向けた、設計の全体像です。5つのオブジェクト、適切なホストプールの種類、そして、ユーザーについてくるプロファイルです。
[600ms]
[confident] そこに、IDの計画、外向きだけのネットワーク、自動スケール、そして品質のよいイメージを加えます。
[600ms]
[proud] 3つの問いを覚えておきましょう。Microsoftが運用するものは何か。自分で運用するものは何か。そして、自分で設計しなければならないものは何か。これが、コンピューティングソリューションを設計する、A Z 305のスキルの核心です。
