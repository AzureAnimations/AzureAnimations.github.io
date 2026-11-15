# Narrator Script · 日本語 (ja) — Journey 05 · Zero Trust セキュリティ アーキテクチャ

**Source animation:** `static/v2/Security/ZeroTrustSecurity.html`
**Language:** Japanese (ja). 英語のマスター台本から翻訳。デリバリー指示 `[tags]` とポーズ `[NNNms]` はそのまま（読み上げず、演出指示です）。ステップ見出しは 1:1 対応のため英語のままにしています。

アニメーションの 1 ステップにつき 1 ブロック。

---

## Step 1 · Start from the assembled Contoso design

[confident] フィナーレでは、すべてを Zero Trust のもとに 1 つにまとめます。
[600ms]
[calm] これまでのステップで、すでにローカルのシークレットは取り除かれました。今や、機密性の高いすべての要求は、正しい ID、正しいネットワーク経路、正しいロールを依然として満たさなければなりません。
[600ms]
[serious] たとえ 1 つのコンポーネントが侵害されても、それは成り立たなければなりません。
[800ms]
[determined] ルールはシンプルです。アプリの内側から来たというだけで要求を信頼しない。毎回、ID、経路、承認を証明させるのです。

## Step 2 · Add Private Endpoint to the sensitive services

[confident] まずはネットワークの半分、Private Endpoint を追加します。
[600ms]
[calm] Key Vault と App Configuration の両方について、Private Endpoint を Contoso の仮想ネットワークに取り込みます。
[600ms]
[impressed] アプリはまったく同じサービスを使い続けますが、今や経路は VNet 内のプライベート IP に着地します。
[600ms]
[reassuring] 経路はプライベートで、ネットワークにローカルで、明示的です。

## Step 3 · Disable the public path too

[intrigued] しかし、プライベートな経路だけで十分でしょうか？
[800ms]
[serious] そうとも言えません。Private Endpoint は、パブリックなものを自動的には取り除きません。
[600ms]
[determined] ですから、Key Vault と App Configuration のパブリック ネットワーク アクセスも、[有効] から [無効] に切り替える必要があります。
[600ms]
[concerned] さもなければ、安全な経路と開かれた経路が並んで存在します。典型的な、誤った安心感です。

## Step 4 · Separate duties with Azure RBAC

[confident] 次に、Azure RBAC で職務を分離します。
[600ms]
[calm] 従来の Key Vault アクセス ポリシーを、ロールベースのアクセス制御に置き換えます。
[600ms]
[impressed] 実行時のアプリはシークレットを読み取るだけ、セキュリティ チームはローテーションを管理し、CI/CD は 1 つのタスクに必要な狭いスコープだけを得ます。
[600ms]
[reassuring] 最小権限とは、1 つの強力な ID のことではありません。異なる ID が異なる仕事をすることです。

## Step 5 · Assume breach operationally

[serious] 最後に、侵害を前提とします。運用の面でです。
[600ms]
[calm] 診断設定を Log Analytics と Microsoft Sentinel にストリーミングし、シークレットのローテーションを動かし続け、GitHub Actions には、保存された管理者資格情報の代わりにフェデレーション資格情報を使わせます。
[600ms]
[determined] Zero Trust は、単に設計上のものではなく、運用上のものです。
[600ms]
[reassuring] 設計が稼働した後も、証拠、アラート、そしてローテーションが依然として必要です。

## Step 6 · The hardened Contoso design — end to end

[reflective] そして、これが強化された Contoso の設計、端から端までです。
[600ms]
[proud] 同じ構成要素が、今やプライベートな経路、マネージド ID、分離された RBAC の職務、運用ログ、そしてシークレットレスな CI/CD の後ろにあります。
[600ms]
[confident] シークレットなし、最小権限、明示的に検証されたアクセスが、アプリの一方の端からもう一方の端まで。
[600ms]
[optimistic] それがこの道のり全体の要点であり、1 枚の絵にまとめられています。
