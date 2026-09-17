# ナレーション原稿 - クラウドサービスの種類

**Source animation:** journeys/Fundamentals/CloudServiceModels.html
**Script status:** Authored voiceover.
**Language:** 日本語

角括弧内は読み上げない演出指示です。間を置く位置は独立した行で示します。各ブロックはアニメーションの1ステップに対応します。
<!-- Source: https://learn.microsoft.com/azure/security/fundamentals/shared-responsibility -->

## Step 1 · Who patches the server?

[calm] Contosoの担当者は次のセールを準備したいのですが、サーバーのセキュリティ更新も必要です。アプリを支える各層には、保守する人が欠かせません。
[600ms]
[confident] クラウドサービスの種類を理解すると、どの仕事をContosoが担当し、どの仕事をMicrosoftに任せるかを判断できます。

## Step 2 · Run it yourself

[calm] 図の下から見てみましょう。物理設備、その上に基本ソフトであるOS、そしてアプリとデータがあります。自社設備で動かす場合、Contosoがすべての層を担当します。
[600ms]
[confident] 自由に制御できる一方で、保守、セキュリティ、システム全体を動かし続ける責任も引き受けます。

## Step 3 · Rent the infrastructure

[calm] 今度は、Microsoftが物理基盤を担当します。Contosoは仮想マシンを借りますが、そのOS、アプリ、データは引き続き自分たちで管理します。
[600ms]
[confident] これが、インフラストラクチャをサービスとして利用するIaaSです。ハードウェアの仕事は移りますが、仮想マシン内のOS更新はContosoの担当です。

## Step 4 · Use a managed platform

[calm] もう1つ上の層に進みましょう。PaaSでは、MicrosoftがOSに加え、アプリを動かす実行環境も運用します。アプリ向けの基盤をサービスとして使う形です。
[600ms]
[confident] Contosoはコードとデータに集中できます。ただし、アプリの設定、アクセス、安全性に関する自分たちの責任は残ります。

## Step 5 · Subscribe to finished software

[calm] 倉庫の担当者に必要なのは、新しく開発するアプリではなく、すぐ使える業務ソフトです。SaaSでは、完成したアプリと、その下の基盤を事業者が運用します。
[600ms]
[confident] Contosoは利用者や使い方を管理します。独自開発したショップが、そのまま完成済みのSaaS製品になるわけではありません。

## Step 6 · Some work stays with Contoso

[calm] 任せる層が増えても、責任がなくなるわけではありません。誰がサインインし、何にアクセスし、お客様の情報をどう扱うかは、Contosoが決めます。
[600ms]
[confident] データ、ID、アクセス、関係する端末は引き続き保護が必要です。共有責任とは境界を理解することであり、すべてを事業者任せにすることではありません。

## Step 7 · Cloud Service Models - All in One

[calm] 層を比べると、IaaSはインフラ、PaaSは管理されたアプリ基盤、SaaSは完成したソフトを提供します。Microsoftに移る運用作業の範囲が異なります。
[600ms]
[confident] Contosoは仕事に応じて組み合わせられます。次は、作成したリソースをわかりやすく整理する方法を考えましょう。