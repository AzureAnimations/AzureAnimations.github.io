# Roteiro de narração - Fundamentos do Azure Storage

**Source animation:** journeys/Fundamentals/AzureStorageBasics.html
**Script status:** Authored voiceover.
**Language:** Português (Brasil)

As indicações entre colchetes não são faladas. As pausas ficam em linhas separadas. Cada bloco corresponde a uma etapa da animação.
<!-- Sources: https://learn.microsoft.com/training/modules/describe-azure-storage-services/ ; https://learn.microsoft.com/azure/storage/blobs/access-tiers-overview ; https://learn.microsoft.com/azure/storage/common/storage-redundancy -->

## Step 1 · Where should the data live?

[calm] A loja tem fotos de produtos, documentos compartilhados do depósito e trabalho de pedidos aguardando processamento. Tudo isso é dado, mas a Contoso usa cada tipo de maneira diferente.
[600ms]
[confident] A escolha do armazenamento começa pelo acesso. O lugar certo para uma imagem não é necessariamente o melhor para um arquivo compartilhado ou uma mensagem de trabalho.

## Step 2 · Start with a storage account

[calm] Uma conta de armazenamento reúne configurações do Azure Storage, como tipo de conta e redundância. A Contoso começa com uma conta Standard de uso geral para suas necessidades comuns.
[600ms]
[confident] Contas Premium atendem a serviços específicos de alto desempenho. Não são um upgrade universal que acelera qualquer tipo de armazenamento.

## Step 3 · Pick the service per kind of data

[calm] Fotos de produtos combinam com Blob Storage, que guarda objetos como imagens e documentos. O depósito usa Azure Files quando precisa abrir arquivos compartilhados por protocolos conhecidos de compartilhamento.
[600ms]
[confident] Ambos guardam dados, mas a forma como pessoas e aplicações acessam esses dados determina o serviço adequado.

## Step 4 · Separate work from records

[calm] Queue Storage guarda mensagens que descrevem trabalho para processar depois. Table Storage armazena registros simples organizados por chaves, quando esse modelo de dados atende à tarefa.
[600ms]
[confident] A Contoso mantém o banco relacional para os registros de pedidos que precisam dele. Queues e Tables não são substitutos diretos desse banco.

## Step 5 · Plan the move

[calm] Antes de mover os dados, a Contoso precisa entender seus sistemas atuais e o tamanho do trabalho. Azure Migrate ajuda a avaliar e planejar a migração.
[600ms]
[confident] Para uma grande transferência em que o transporte offline faça sentido, Azure Data Box é uma opção. Avaliação e transporte resolvem partes diferentes da mudança.

## Step 6 · Move and synchronize files

[calm] A Contoso escolhe a ferramenta pela tarefa. AzCopy atende a transferências por scripts; Storage Explorer oferece uma interface gráfica; Azure File Sync sincroniza compartilhamentos do Windows Server com Azure Files.
[600ms]
[confident] Copiar dados uma vez e manter um compartilhamento sincronizado continuamente são necessidades diferentes.

## Step 7 · Match the tier to how often you read

[calm] Clientes precisam ver imagens imediatamente. Hot, Cool e Cold são camadas online de blobs com diferentes custos de armazenamento e acesso. Archive mantém dados offline até sua reidratação para uma camada online.
[600ms]
[confident] Escolha pela frequência de acesso e pela necessidade de recuperação. A exclusão antecipada também pode gerar cobrança; armazenar barato não é toda a conta.

## Step 8 · Decide how many copies to keep

[calm] A redundância local mantém cópias localmente; a de zona distribui cópias entre zonas. Opções georredundantes acrescentam uma cópia em outra região a cada uma dessas configurações.
[600ms]
[confident] A replicação regional é assíncrona, então as alterações mais recentes podem não ter chegado. Redundância ajuda em falhas de infraestrutura, mas não substitui um plano de backup e recuperação.

## Step 9 · Storage Basics - All in One

[calm] A Contoso relaciona fotos a Blobs, documentos compartilhados a Files, trabalho pendente a Queues e registros simples por chave a Tables. Tipo de conta, camada de acesso e redundância precisam funcionar juntos no serviço escolhido.
[600ms]
[confident] Os dados têm lugares adequados. Agora vamos decidir quem pode acessar os recursos da loja e o que pode fazer.