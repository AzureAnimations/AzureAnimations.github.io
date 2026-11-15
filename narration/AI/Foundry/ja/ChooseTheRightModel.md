# Narrator Script — Foundry · Choose the Right Model for the Job

**Source animation:** [ChooseTheRightModel.html](../../../../journeys/AI/Foundry/ChooseTheRightModel.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/foundry/concepts/foundry-models-overview>
- <https://learn.microsoft.com/azure/foundry/openai/concepts/model-router>
- <https://learn.microsoft.com/azure/foundry/foundry-models/concepts/deployment-types>
- <https://learn.microsoft.com/azure/foundry/openai/how-to/reasoning>

---

## Step 1 · One catalog, many models

[calm] Contoso Outfittersは、ヘルプボット用のモデルを探しています。Foundryカタログには数千のモデルがあるので、まずタスクから考えて絞り込みましょう。
[600ms]
[curious] モデルは大きく2つに分かれます。ひとつはAzureが販売するモデルで、Microsoftのサポートとエンタープライズ契約が付きます。もうひとつはパートナーやコミュニティのモデルで、サポートは各プロバイダーが行います。
[600ms]
[serious] どちらを選ぶにしても、適切なモデルを選んでモデルカードを読むのは、あなたの役目です。

## Step 2 · Large, small and reasoning models

[curious] サイズ、コスト、待ち時間は、セットで増減します。小さなモデルは速くて安く、範囲が狭く、はっきり決まったタスクに向いています。
[600ms]
[calm] 大きなモデルは幅広いタスクをこなします。推論モデルは、答える前にじっくり考えます。
[600ms]
[concerned] その思考の間に推論トークンが生成されます。目には見えませんが、出力として料金がかかります。しかも、推論の度合いを上げるほど、待ち時間も長くなります。これらのメーターは実測値ではなく、相対的な目安です。

## Step 3 · Multimodal and code models

[calm] まず、入力と出力を確認しましょう。入力が写真や音声なら、マルチモーダルモデルが必要です。
[600ms]
[confident] コードの作成や修正は、コーディングツール向けに調整されたコードモデルの出番です。その一部は、Responses APIでしか使えません。
[600ms]
[reassuring] モデルカードの入力タイプと出力タイプは、必ず確認してください。

## Step 4 · Foundry Tool or a model?

[curious] 用途によっては、すでに用意されたサービスがあります。スキャンした請求書なら、Foundry Toolを使えば、型付きのフィールドがすぐに取り出せます。
[600ms]
[calm] 生成モデルでも請求書は読めますが、その場合は、周りの仕組みを全部自分で作ることになります。
[600ms]
[confident] Foundry Toolsは学習済みで、カスタムトレーニングは必要ありません。Microsoft Learnでは、専門的なサービスの代わりに言語モデルを使う前に、まずこちらを検討するよう案内しています。

## Step 5 · Leaderboards: read them carefully

[calm] リーダーボードは、公開テストをもとに、品質、安全性、パフォーマンス、コストでモデルを順位づけします。候補を絞り込むには、いい方法です。
[600ms]
[serious] ただし、それはあなたのワークロードに対する答えではありません。
[600ms]
[confident] リーダーボードで候補を絞り、そのあとは自分のデータで評価します。ここに出ている画面は、架空のモデルを使った例です。

## Step 6 · Model router and fallback

[curious] 簡単なプロンプトと難しいプロンプトでは、向いているモデルが違います。モデルルーターがリクエストごとに最適なモデルを選ぶので、デプロイするのは1つだけで済みます。
[600ms]
[calm] ルーティングモードは、品質、バランス、コストの中から選びます。使えるモデルの範囲も指定できます。
[600ms]
[reassuring] モデルに一時的な問題が起きても、ルーターが自動でフェイルオーバーします。このフォールバックを使うには、モデルを2つ以上選んでください。あわせて、今のベースラインとも比べてみましょう。

## Step 7 · Match the task

[excited] では、やってみましょう。左側から、Contosoの仕事をひとつ選んでください。
[600ms]
[curious] パネルに、最初の選択肢としておすすめのモデルと、注意すべき落とし穴が表示されます。
[600ms]
[reassuring] これは簡略化したガイドで、絶対のルールではありません。最後は、自分のデータで自分でテストして決めましょう。

## Step 8 · Deployment option for the choice

[calm] モデルが決まったら、次は実行方法を選びます。どの選択肢も、価格、場所、予測のしやすさのバランスが違います。
[600ms]
[confident] デフォルトの出発点は、Global Standardです。Data Zone型は、処理をUS、EU、APACのゾーン内にとどめます。プロビジョニング型はスループットを確保し、バッチは非同期ジョブ向けです。
[600ms]
[serious] マネージドコンピュート上のオープンモデルは、仮想マシンの稼働時間で課金されます。また、すべてのモデルがすべてのデプロイタイプに対応しているわけではありません。

## Step 9 · Choosing at a glance

[calm] まず用途に合うモデルの種類を選び、根拠を確認して、最後に実行方法を決めます。
[600ms]
[reflective] この3つの手順で、Microsoft Learnにある A I 103 の学習ガイドの、モデル選択に関するスキルをカバーできます。
[600ms]
[proud] ガイドの最新の記載を確認しておけば、自信を持ってモデルを選べるようになります。
