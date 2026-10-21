# Narrator Script — A Contoso lança o assistente

**Source animation:** [ContosoShips.html](../../../journeys/Database/ContosoShips.html)
**Language:** pt

Legenda: `[confident]` e `[reflective]` orientam o tom; `[600ms]` indica uma pausa silenciosa entre as frases.

<!-- Sources: https://learn.microsoft.com/en-us/training/modules/build-query-azure-cosmos-db/ ; https://learn.microsoft.com/en-us/training/modules/implement-vector-search-azure-cosmos-db/ ; https://learn.microsoft.com/en-us/training/modules/implement-vector-search-azure-database-postgresql/ ; https://learn.microsoft.com/en-us/training/modules/build-query-azure-database-postgresql/ ; https://learn.microsoft.com/en-us/training/modules/optimize-query-performance-azure-cosmos-db/ ; https://learn.microsoft.com/en-us/training/modules/optimize-vector-search-azure-database-postgresql/ ; https://learn.microsoft.com/en-us/training/modules/design-data-storage-solution-for-relational-data/ ; https://learn.microsoft.com/en-us/training/modules/design-data-integration/ -->

## Step 1 · One question, two kinds of answer

[confident]
O cliente da Contoso quer uma barraca que fique seca na chuva e quer saber onde está um pedido.
[600ms]
O assistente divide a solicitação porque o significado do produto e os fatos do pedido precisam de formas diferentes de recuperação.
[600ms]
[reflective]
Corresponder à intenção ajuda a encontrar barracas, mas um pedido exige registros exatos.

## Step 2 · Cosmos DB remembers the conversation

[confident]
A nova conexão dá ao assistente um lugar para recuperar o histórico do chat no Azure Cosmos DB.
[600ms]
O item de chat mantém o texto e o embedding juntos, enquanto a chave de partição organiza o histórico do cliente.
[600ms]
[reflective]
Quando o identificador do item e a chave de partição são conhecidos, uma leitura pontual recupera aquele item específico.

## Step 3 · Find the tent by meaning

[confident]
A pergunta vira um embedding com o mesmo modelo dos vetores armazenados, permitindo comparar seus significados.
[600ms]
O filtro de metadados de barracas mantém a seleção relevante, com a barraca Alpine 2P liderando estas correspondências ilustrativas.
[600ms]
[reflective]
A pontuação de cosseno do Cosmos aumenta com a similaridade, enquanto a distância de cosseno do pgvector diminui com a proximidade.

## Step 4 · Look up the order with a tool

[confident]
O status do pedido vem de uma ferramenta Python que consulta o PostgreSQL, não da similaridade com a pergunta do cliente.
[600ms]
A conexão usa um token do Microsoft Entra e TLS, e os parâmetros mantêm os valores fornecidos separados do SQL.
[600ms]
[reflective]
As linhas retornadas fundamentam a resposta; a paginação por keyset permite percorrer históricos de pedidos mais longos.

## Step 5 · Fast and affordable on both engines

[confident]
Estas barras de antes e depois ilustram metas de ajuste, não promessas medidas para a carga de trabalho da Contoso.
[600ms]
As escolhas de indexação do Cosmos DB afetam o custo em RU, enquanto parâmetros, índices vetoriais e pool de conexões do PostgreSQL influenciam as consultas.
[600ms]
[reflective]
Meça primeiro o custo em RU e a latência, depois teste uma mudança por vez com dados representativos.

## Step 6 · Optional: zoom out to the architect view

[confident]
O mapa do assistente permanece enquanto a visão inferior se amplia para a arquitetura de dados da Contoso.
[600ms]
Os pedidos podem usar a família Azure SQL, enquanto chats e logs brutos passam pelo Data Factory até o Data Lake Storage.
[600ms]
[reflective]
O Databricks prepara e analisa esses dados, ampliando o cenário além das solicitações individuais dos clientes.

## Step 7 · Contoso ships the assistant

[confident]
O mapa completo conecta dividir a pergunta, gerar seu embedding, pesquisar, consultar fatos e ajustar os repositórios.
[600ms]
O Cosmos DB fornece memória e significado, enquanto o PostgreSQL fornece fatos e também pode pesquisar por significado.
[600ms]
[reflective]
A arquitetura opcional acompanha esse exemplo em funcionamento, mostrando que cada repositório tem um papel deliberado.
