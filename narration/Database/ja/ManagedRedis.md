# Narrator Script — Database · Azure Managed Redis for AI Apps

**Source animation:** [ManagedRedis.html](../../../journeys/Database/ManagedRedis.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/redis/overview>
- <https://learn.microsoft.com/azure/redis/tutorial-semantic-cache>
- <https://learn.microsoft.com/azure/redis/overview-vector-similarity>
- <https://learn.microsoft.com/azure/redis/entra-for-authentication>

---

## Step 1 · Why an AI app needs a cache

[calm] Contosoのサポートアシスタントは、一日中、同じような質問に答え続けています。
[600ms]
[curious] しかも、繰り返しのたびに二重にコストがかかります。モデルの呼び出しで1回、データベースへのアクセスで1回です。
[600ms]
[confident] Contosoもアシスタントも架空のものです。ポイントは、繰り返しになる処理の結果を、Redisがメモリ上に持っておいてくれることです。

## Step 2 · Azure Managed Redis

[calm] Azure Managed Redisは、Microsoftが運用するインメモリのデータストアで、Redis Enterpriseをベースにしています。
[600ms]
[confident] ティアは、ワークロードに合わせて、メモリとコンピュートのバランスで選びます。
[600ms]
[reassuring] サイズや価格は変わるので、数字を覚えるより、公式の概要ページや料金ページで確認しましょう。

## Step 3 · Cache-aside, one level deeper

[calm] キャッシュアサイドでは、キャッシュを管理するのはアプリです。読み取るときは、まずRedisを見に行きます。
[600ms]
[confident] 見つからなければ、データベースから取得して、その結果をキャッシュに保存します。書き込むときは、データベースを更新してから、キャッシュを直します。
[600ms]
[curious] このパターンは、アーキテクト向けのAPIとキャッシュのレッスンで紹介しました。ここでは、その裏で使われているRedisのコマンドを、もう少し詳しく見ていきます。

## Step 4 · Set it, read it, let it expire

[curious] Redisで一番シンプルな値は、文字列です。有効期間を付けて書き込んで、あとから読み出します。
[600ms]
[confident] 書き込むときにEXオプションを付けると、TTLを秒単位で設定できます。TTLコマンドで残りの秒数が分かり、あとからEXPIREで変更もできます。
[600ms]
[reassuring] 時間が切れると、キーは自動的に消えます。メモリが足りなくなって困る前に、古いキーを片付けられるわけです。

## Step 5 · Three ways to retire stale data

[serious] キャッシュしたコピーは、古くなることがあります。だから、どうやってキャッシュから外すかを決めておきましょう。
[600ms]
[confident] 外れるタイミングは、書き込んだとき、期限が切れたとき、または新しいバージョンが登場したときです。
[600ms]
[calm] データやモデル、プロンプトのバージョンをキーに含めておくのは、セマンティックキャッシュが古い回答を使い回さないための方法でもあります。

## Step 6 · More than strings

[curious] Redisは、単に文字列を置いておく場所ではなく、データ構造サーバーです。
[600ms]
[confident] データの形を、用途に合わせて選びましょう。ここでは、昔からある6つの構造を紹介します。
[600ms]
[calm] 図は簡略化しています。Redisには、ほかにもJSONやビットマップ、時系列などがあります。

## Step 7 · Expire by clock, evict by memory

[encouraging] では、試してみましょう。有効期間の違うキーを追加して、そのあとメモリを埋めてみます。
[600ms]
[confident] 有効期限切れは、TTLが終わったときにキーを消します。エビクションは、メモリがいっぱいになったときにキーを消します。
[600ms]
[reflective] これは、架空のキーとたった8つのスロットを使ったシミュレーションです。Azure Managed Redisの既定のポリシーは、volatile LRUです。

## Step 8 · Vectors in Redis: index first

[curious] 意味で検索したいときは、各埋め込みを、メタデータのすぐ隣のハッシュに入れておきます。
[600ms]
[confident] そのうえで、ベクトルのフィールドにインデックスを作れば、Redisで意味による検索ができます。
[600ms]
[serious] ベクトル検索には、RediSearchモジュールを使います。モジュールは既存のインスタンスに追加できないので、キャッシュを作成するときに有効にしてください。

## Step 9 · Nearest by meaning, then filtered

[curious] クエリベクトルは、意味が近い上位K件、つまり最近傍を探します。
[600ms]
[confident] メタデータのフィルターを加えれば、同じ検索がハイブリッド検索になります。
[600ms]
[calm] このマップは、架空のサポート記事を使った簡単なイメージです。実際の埋め込みは次元がずっと多く、ここにある距離も作り物です。

## Step 10 · Semantic caching for LLM answers

[curious] ここからが、AIアプリでの見返りです。新しいプロンプトが、以前のものとほぼ同じ意味なら、保存しておいた回答を返します。
[600ms]
[impressed] こうすれば、モデルの呼び出しを丸ごと省けるので、時間もコストも節約できます。
[600ms]
[calm] これは、アプリやゲートウェイ側のパターンで、Redisだけの機能ではありません。Redisがプロンプトを保存して検索し、Azure API Managementが、その手順をポリシーとして実行できます。

## Step 11 · Connect without secrets

[serious] アプリは、どうやって接続すればいいでしょうか。アクセスキーよりも、Microsoft Entra IDを優先しましょう。
[600ms]
[confident] TLSはオンのままにしてください。Entra認証はTLS接続でしか使えないからです。あわせて、キャッシュへのネットワーク経路も絞り込みましょう。
[600ms]
[reassuring] アクセスキーも引き続き使えますが、自分で保管してローテーションしなければならないシークレットです。

## Step 12 · Is the cache earning its keep?

[calm] キャッシュは、効果があって初めて意味があります。見るべきポイントは2つ。ルックアップのヒット率と、メモリの使用量です。
[600ms]
[concerned] アラートは、メモリが足りなくなってからではなく、なくなる前に設定しておきましょう。
[600ms]
[reflective] メトリック名は、モニタリングのリファレンスにあるものです。ここのグラフと数値は、あくまでイメージです。

## Step 13 · Redis for AI apps, all in one

[calm] それでは、まとめましょう。繰り返す処理はメモリに置いて、有効期間を持たせ、意味で検索します。
[600ms]
[confident] ここまでで、キャッシュ、有効期限、ベクトル、セマンティックキャッシュ、セキュアなアクセス、そして監視を取り上げました。
[600ms]
[proud] これは、A I 200のスキル、AIソリューションでのAzure Managed Redisの統合にあたります。データ管理の分野に含まれ、試験の25〜30%を占めます。
