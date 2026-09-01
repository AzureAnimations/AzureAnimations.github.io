# Roteiro de narração — Azure Storage · Guarde (conta de armazenamento)

**Source animation:** `static/v2/Storage/StorageAccount.html`

---

## Step 1 · Overview

[warm] Vamos começar pela base do Azure Storage: a conta de armazenamento.
[600ms]
[calm] Pense nela como um único lar durável para todos os dados na nuvem da Contoso — blobs, arquivos, filas e tabelas — sob um único namespace e uma única fatura.
[600ms]
[confident] Tudo fica atrás de um único ponto de conexão da conta, como contoso ponto blob ponto core ponto windows ponto net. Uma conta, uma fatura, muitos serviços: escolha uma camada de desempenho uma vez e depois armazene o que a carga de trabalho precisar.

## Step 2 · Standard vs Premium

[confident] Primeiro, escolha quão rápida a conta deve ser.
[600ms]
[calm] Standard roda em discos rígidos — armazenamento econômico e de uso geral que suporta todos os serviços e todas as camadas de acesso. Premium roda em unidades de estado sólido, para uma latência de milissegundos de um só dígito quando os aplicativos exigem.
[600ms]
[reassuring] Premium vem como uma conta especializada — block blob, page blob ou compartilhamentos de arquivos — escolhida por latência, não por capacidade bruta. Então a regra é simples: Premium para velocidade, Standard para custo.

## Step 3 · Four Data Services

[confident] Uma conta Standard te dá quatro formas de armazenar dados: escolha o formato que se ajusta ao trabalho.
[600ms]
[calm] Blob é o carro-chefe para grandes volumes de dados não estruturados — imagens, vídeo, backups, documentos. Files oferece compartilhamentos de arquivos gerenciados S-M-B e N-F-S. Queue passa pequenas mensagens assíncronas entre componentes do aplicativo. E Table é um armazenamento NoSQL de chave-valor sem esquema.
[600ms]
[impressed] Uma conta, quatro serviços: a maioria das cargas de trabalho se apoia em Blob, e os outros três cobrem compartilhamentos, mensageria e NoSQL.

## Step 4 · Three Kinds of Blob

[intrigued] O próprio blob storage vem em três tipos, cada um ajustado a um padrão de gravação diferente.
[600ms]
[calm] Os block blobs guardam dados de texto e binários, de longe os mais comuns. Os append blobs são otimizados para adicionar ao final, perfeitos para logs. E os page blobs suportam leitura e escrita aleatórias, então sustentam os discos das máquinas virtuais do Azure.
[600ms]
[reassuring] Regra geral: está subindo um arquivo ou uma imagem? Block. Transmitindo linhas de log? Append. Sustentando um disco virtual? Page.

## Step 5 · Access Tiers

[confident] Para os block blobs, uma camada de acesso equilibra o custo de armazenamento com o custo de leitura e uma retenção mínima.
[600ms]
[calm] Hot é para acesso frequente, sem mínimo. Cool é para acesso pouco frequente, ao menos trinta dias. Cold é para acesso raro, ao menos noventa. E Archive fica offline e é o mais barato: ao menos cento e oitenta dias, e você o reidrata para ler.
[600ms]
[reassuring] As camadas mais frias armazenam mais barato, mas leem mais caro e mais devagar, e excluir antes do tempo gera uma cobrança. Ou deixe a nova camada Smart mover os dados entre Hot, Cool e Cold automaticamente, conforme o uso real, sem regras de ciclo de vida para gerenciar.

## Step 6 · Recap

[warm] Então aí está a conta de armazenamento inteira, em uma única visão.
[600ms]
[calm] Desempenho: Standard ou Premium. Quatro serviços: Blob, File, Queue, Table. Três tipos de blob: Block, Append, Page. E cinco camadas de acesso, de Hot a Archive, mais Smart.
[600ms]
[encouraging] Comece sempre pela carga de trabalho: quão rápida, que formato de dados e com que frequência você vai ler, e a fatura vem depois. Aprofunde-se na trilha gratuita do Microsoft Learn, Armazenar dados no Azure.
