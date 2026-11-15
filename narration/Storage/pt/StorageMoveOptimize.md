# Roteiro de narração — Azure Storage · Nível avançado · Mover e otimizar

**Source animation:** `static/v2/Storage/StorageMoveOptimize.html`

---

## Step 1 · goal

[confident] Você está armazenando terabytes de blobs — uma parte de acesso frequente, a maioria envelhecendo aos poucos.
[600ms]
[calm] Então vamos mover e otimizar: ponha cada blob no lugar certo, e pague o preço certo por ele.
[700ms]
[reassuring] Algumas poucas ferramentas integradas fazem todo o trabalho pesado — por custo, por resiliência e por conhecimento.

## Step 2 · tiers

[confident] Comece pelas camadas de acesso. O blob storage cobra os dados conforme a frequência com que você realmente os lê.
[600ms]
[calm] Hot é para dados que você toca constantemente. Cool é mais barato de armazenar mas espera ao menos trinta dias. Cold vai mais longe, noventa dias. E Archive é o mais barato de todos — offline, para dados que você quase nunca precisa.
[700ms]
[serious] A troca é simples: quanto mais fria a camada, menos você paga para armazenar, mas mais você paga — e espera — para ler.

## Step 3 · lifecycle

[confident] Você não vai mover tudo isso à mão. As regras de ciclo de vida fazem isso por você.
[600ms]
[calm] Uma política de ciclo de vida é um conjunto de regras — mover um blob para Cool após trinta dias, para Archive após noventa, excluí-lo após um ano — impulsionadas pela idade ou pela data do último acesso.
[700ms]
[reassuring] Configure uma vez, e o Azure ajusta silenciosamente o tamanho do seu armazenamento todo dia. Só dê a uma política nova até um dia para fazer efeito.

## Step 4 · replication

[confident] Agora, manter uma cópia em outro lugar. A replicação de objetos copia de forma assíncrona block blobs de uma conta de origem para uma conta de destino.
[600ms]
[calm] Pense em uma região com muitas gravações replicando para uma região de leitura, ou uma segunda região para resiliência.
[700ms]
[serious] Um requisito a lembrar — ela precisa do controle de versão de blobs ativado, tanto na origem quanto no destino.

## Step 5 · azcopy

[confident] Às vezes você só precisa mover muitos dados, rápido. Isso é o AzCopy.
[600ms]
[calm] É a ferramenta de linha de comando feita para transferências de alto desempenho — uploads, downloads e cópias de conta para conta.
[700ms]
[impressed] E para cópias de servidor para servidor, o AzCopy move os dados diretamente entre contas, então eles nunca precisam passar pela sua máquina.

## Step 6 · inventory

[confident] Antes de otimizar, ajuda saber exatamente o que você tem. O inventário de blobs te diz isso.
[600ms]
[calm] É um relatório agendado — diário ou semanal — que lista seus blobs e suas propriedades: tamanho, camada, última modificação e mais.
[700ms]
[reassuring] Ele gera arquivos CSV ou Parquet que você pode analisar, então as revisões de custo e a governança funcionam sobre números reais.

## Step 7 · recap

[proud] Aí está o panorama completo: ajuste o custo com as camadas de acesso, automatize com as regras de ciclo de vida, replique para resiliência, mova dados em volume com o AzCopy, e conheça o que você tem com o inventário.
[700ms]
[encouraging] Nivele por custo, replique por segurança, e deixe a política manter tudo em ordem — em qualquer escala.

## Step 8 · spec

[confident] Um pouco mais a fundo. Quatro camadas de acesso, com preço conforme a frequência com que você lê: Hot, Cool, Cold e Archive.
[600ms]
[calm] Cada camada mais fria espera uma estadia mínima — trinta dias para Cool, noventa para Cold, e mais para Archive — e o Archive está offline, então ler significa reidratar primeiro.
[700ms]
[reassuring] E a replicação de objetos, mais uma vez, precisa do controle de versão de blobs em ambas as contas. Acerte nisso, e o custo se cuida sozinho.
