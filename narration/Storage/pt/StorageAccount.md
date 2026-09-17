# Roteiro de narração — Azure Storage · Guarde (conta de armazenamento)

**Source animation:** `static/v2/Storage/StorageAccount.html`

---

**TTS status:** Audio regenerated 2026-09-17 after text review.

<!-- Review sources: https://learn.microsoft.com/azure/storage/common/storage-account-overview ; https://learn.microsoft.com/azure/storage/blobs/access-tiers-overview ; https://learn.microsoft.com/azure/storage/blobs/access-tiers-smart -->

## Step 1 · Overview

[warm] Vamos começar pela base do Azure Storage: a conta de armazenamento.
[600ms]
[calm] Ela fornece um namespace exclusivo para os dados de armazenamento da Contoso. Uma conta Standard de uso geral, versão dois, pode armazenar blobs, arquivos, filas e tabelas.
[600ms]
[confident] Cada serviço tem seu próprio ponto de conexão. Por exemplo, contoso ponto blob ponto core ponto windows ponto net é o endereço do Blob, não de todos os serviços. Escolha um tipo de conta que atenda à sua carga de trabalho.

## Step 2 · Standard vs Premium

[confident] Primeiro, compare as necessidades de desempenho e os serviços disponíveis.
[600ms]
[calm] Standard de uso geral, versão dois, é um ponto de partida comum. Premium usa armazenamento de estado sólido para cargas que precisam de latência baixa e consistente ou de muitas transações.
[600ms]
[reassuring] As contas Premium são especializadas em blobs de blocos, blobs de páginas ou compartilhamentos de arquivos; elas não reúnem os quatro serviços. Compare também os recursos e os custos, não apenas a velocidade.

## Step 3 · Four Data Services

[confident] O Azure Storage oferece quatro serviços para diferentes tipos de dados.
[600ms]
[calm] Blob armazena imagens, vídeos, backups e documentos. Files oferece compartilhamentos gerenciados; os de N-F-S exigem armazenamento SSD. Queue troca mensagens assíncronas entre componentes do aplicativo. Table armazena dados NoSQL estruturados sem um esquema fixo.
[600ms]
[impressed] Escolha o serviço adequado aos dados e confira se o tipo de conta oferece os recursos necessários.

## Step 4 · Three Kinds of Blob

[intrigued] O próprio blob storage vem em três tipos, cada um ajustado a um padrão de gravação diferente.
[600ms]
[calm] Os block blobs guardam dados de texto e binários, de longe os mais comuns. Os append blobs são otimizados para adicionar ao final, perfeitos para logs. E os page blobs suportam leitura e escrita aleatórias, então sustentam os discos das máquinas virtuais do Azure.
[600ms]
[reassuring] Regra geral: está subindo um arquivo ou uma imagem? Block. Transmitindo linhas de log? Append. Sustentando um disco virtual? Page.

## Step 5 · Access Tiers

[confident] Nos blobs de blocos, as camadas de acesso equilibram os custos de armazenamento e recuperação. Os períodos mínimos são regras de cobrança, não bloqueios que impeçam a exclusão dos dados.
[600ms]
[calm] Em uma conta Standard de uso geral, versão dois, Hot não tem cobrança por período mínimo. Cool tem trinta dias; Cold, noventa; e Archive, cento e oitenta. Hot, Cool e Cold ficam online, com acesso em milissegundos. Archive precisa de reidratação antes da leitura, o que pode levar horas.
[600ms]
[reassuring] Excluir ou mudar de camada antes do prazo pode gerar uma cobrança. Em contas compatíveis com redundância de zona, Smart gerencia automaticamente os blobs de blocos elegíveis entre Hot, Cool e Cold, sem regras de transição. Não usa Archive e tem uma cobrança diferente.

## Step 6 · Recap

[warm] Então aí está a conta de armazenamento inteira, em uma única visão.
[600ms]
[calm] Desempenho: Standard ou Premium. Quatro serviços: Blob, File, Queue, Table. Três tipos de blob: Block, Append, Page. E cinco camadas de acesso, de Hot a Archive, mais Smart.
[600ms]
[encouraging] Comece pelo desempenho necessário, pelo tipo de dados e pela frequência de acesso. Essas escolhas afetam os recursos disponíveis e o custo. Saiba mais na trilha gratuita do Microsoft Learn, Armazenar dados no Azure.
