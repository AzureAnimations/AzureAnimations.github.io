# Narrator Script — Foundry · Image and Video Generation

**Source animation:** [ImageAndVideoGeneration.html](../../../../journeys/AI/Foundry/ImageAndVideoGeneration.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/ai-foundry/openai/how-to/dall-e>
- <https://learn.microsoft.com/azure/ai-foundry/openai/concepts/video-generation>
- <https://learn.microsoft.com/azure/ai-foundry/openai/concepts/content-credentials>

---

## Step 1 · Models that read, models that make

[calm] 一部のモデルは読みます。ビジョンモデルは画像を見てテキストで答えます。
[600ms]
[curious] 生成イメージモデルはその逆を行います。あなたの言葉を新しいイメージに変換します。
[600ms]
[confident] Contoso Outdoorは私たちの架空の会社で、すべての写真はモデルの代わりになるシンプルな図面です。

## Step 2 · Noise in, image out

[curious] 多くの画像モデルは拡散モデルです。ランダムなノイズから始めて、段階的に洗練させて画像を作り上げます。
[600ms]
[calm] あなたのプロンプトはそのすべてのステップを案内し、ランダムなスタートが違うと違うイメージが生まれます。
[600ms]
[reflective] モデルはデザインが異なるので、これはレシピではなくアイデアとして扱ってください。

## Step 3 · Describe what you want

[calm] 良いプロンプトは、被写体、スタイル、構図、そして除外したい内容を明確に示します。
[600ms]
[curious] ここで選択肢を試してみてください。それぞれの選択肢に合わせて写真が変わっていくのを見てください。
[600ms]
[serious] 制約はプロンプト内に入ります。例えばテキストは不要です。しかしモデルは求めていないものを追加できるので、必ず結果を見直してください。

## Step 4 · Size, quality, how many

[calm] プロンプトの横には、サイズ、品質レベル、リクエストする画像数などのオプションを設定します。
[600ms]
[curious] 選択に応じてリクエストが変わる様子をご覧ください。1回の呼び出しで1枚から10枚の画像が返ってくることがあります。
[600ms]
[reassuring] 低品質で正方形の画像は生成が速く、カスタムサイズも対応しているモデルもあるので、デプロイメントで何をサポートしているか確認してください。

## Step 5 · Edit with a mask

[curious] 画像の一部だけを変更するには、画像、そのエリアを示すマスク、そしてプロンプトの3つを送ってください。
[600ms]
[calm] マスクの外側は全く変わらない。ここではピンクの筆がマスクの代わりをしている。
[600ms]
[confident] 編集APIでは、マスクは画像と同じPNGで、完全に透明なピクセルが変化する領域を示します。

## Step 6 · Remix with image-to-image

[curious] 既存の画像とプロンプトをモデルに渡すと、それをもとにした新しいバージョンが生成されます。
[600ms]
[calm] 一度に複数の入力画像を送ることができ、1回の編集コールで最大16枚まで送ることができます。
[600ms]
[reassuring] 高い入力精度でオリジナルの細部がより多く残りますが、すべてのモデルが対応しているわけではないので、ご自身のモデルを確認してください。

## Step 7 · From prompt to short clip

[curious] ビデオモデルはテキスト、画像、既存のクリップを短い動画に変換します。
[600ms]
[calm] ジョブとして動作します。提出して状況を確認し、結果をダウンロードします。
[600ms]
[serious] Sora 2の動画生成はFoundryプレビュー機能なので、詳細や入手可能範囲は変わる可能性があります。

## Step 8 · Filters on the way in and out

[serious] ガードレールは、モデルの実行前にプロンプトを確認し、画像が生成された後にもその画像を確認します。
[600ms]
[calm] 安全でないリクエストや結果はブロックされ、アプリにはエラーが返ってきます。
[600ms]
[confident] これらはAzure AI Content Safetyによって機能しており、ヘイト、性的、暴力、自傷行為のコンテンツを分類しており、デプロイ時のレベルを設定できます。

## Step 9 · Show it was made by AI

[curious] Azure OpenAI画像モデルの画像はContent Credentials(署名済みメタデータ)を持ちます。これは画像がAI生成されたことを示す署名済みメタデータです。
[600ms]
[calm] サポートモデルは、メタデータが削除されても残る不可視の透かしを追加することも可能です。
[600ms]
[reassuring] コンテンツ認証はオープンC2PA標準に準拠しているため、誰でも認証ツールで確認できます。

## Step 10 · Deploy it, try it, call it

[calm] Foundryでは、イメージモデルをデプロイし、Images Playgroundでプロンプトを試し、生成されたコードをコピーします。
[600ms]
[confident] そのコードはあなたのアプリから同じデプロイメントを呼び出します。ここにはキーや実際のエンドポイントは表示されていません。
[600ms]
[serious] キーなしサインインMicrosoft Entra ID 、 APIキーよりも好み、レート制限があるので、バックオフで再試行してください。

## Step 11 · Create, protect, ship

[calm] プロンプトを出してオプションを調整します。マスクやバリエーションで編集します。ガードレールと出所を追加しましょう。
[600ms]
[confident] そして、すべてFoundryにデプロイして、アプリが呼び出せるようにします。
[600ms]
[proud] スキルは変化しますので、公式の学習ガイドを開き、今日の試験で何を扱っているか確認してください。
