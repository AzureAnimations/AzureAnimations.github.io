# Narrator Script — Cosmos DB: pesquisa vetorial

**Source animation:** [CosmosVectorSearch.html](../../../journeys/Database/CosmosVectorSearch.html)
**Language:** pt

Indicações: os estilos entre colchetes orientam a voz; [600ms] marca uma pausa entre frases.

<!-- Sources: https://learn.microsoft.com/en-us/training/paths/develop-ai-solutions-azure-cosmos-db/ ; https://learn.microsoft.com/en-us/training/modules/implement-vector-search-azure-cosmos-db/ -->

## Step 1 · Search by meaning, not keywords

[curious] Um cliente pergunta como ficar seco, mas o produto da Contoso é descrito como uma jaqueta impermeável.
[600ms]
[calm] Procurar só as palavras do cliente perde essa conexão, enquanto embeddings representam o significado do texto como vetores.
[600ms]
[reassuring] Comparar esses vetores permite ao assistente recuperar um produto relacionado mesmo quando a pergunta e a descrição usam palavras diferentes.

## Step 2 · Tell the container about its vectors

[confident] Antes de armazenar vetores, informe ao contêiner onde fica o embedding e como comparar seus valores.
[600ms]
[calm] A política especifica o caminho da propriedade, o tipo numérico, a função de distância e o número de dimensões.
[600ms]
[serious] Habilite a pesquisa vetorial na conta e defina a política ao criar o contêiner, para que armazenamento e comparação correspondam aos embeddings.

## Step 3 · Keep the embedding on the item

[confident] O texto do produto passa por um modelo de embedding do Azure OpenAI e vira o vetor numérico mostrado ao lado.
[600ms]
[calm] Salve esse vetor no mesmo item das informações do produto, sem separá-lo do conteúdo que representa.
[600ms]
[reassuring] A saída do modelo deve corresponder às dimensões da política, deixando o item armazenado pronto para consultas de similaridade compatíveis.

## Step 4 · Rank items by similarity

[confident] Primeiro gere o embedding da pergunta do cliente com o mesmo modelo usado para os produtos.
[600ms]
[calm] A consulta de distância vetorial compara esse vetor com os embeddings armazenados e retorna um conjunto limitado de correspondências classificadas.
[600ms]
[reassuring] As pontuações ilustram a ordem, não prometem qualidade na resposta; manter o resultado focado oferece ao assistente produtos candidatos para considerar.

## Step 5 · Narrow, rank, then match words

[confident] Comece com filtros de metadados para pesquisar a categoria, o status de publicação e a data apropriados.
[600ms]
[calm] A classificação vetorial captura o significado, enquanto a classificação de texto completo reconhece as palavras importantes no conteúdo.
[600ms]
[reassuring] A fusão de classificação recíproca combina as duas classificações, permitindo à Contoso usar evidências semânticas e palavras juntas, em vez de escolher apenas um sinal.

## Step 6 · Keep embeddings fresh

[confident] Quando o texto do produto muda, seu embedding antigo pode deixar de descrever o que o cliente vai ler.
[600ms]
[calm] O feed de alterações entrega o item alterado ao Azure Functions, que solicita um embedding novo e o grava de volta.
[600ms]
[reassuring] Verificar o hash do conteúdo permite ignorar texto inalterado, então atualizações só de metadados não exigem outro embedding e o ciclo evita repetir trabalho desnecessário.

## Step 7 · One semantic search pipeline

[confident] O pipeline completo conecta a ingestão e as perguntas a um contêiner com política e índice vetoriais.
[600ms]
[calm] Texto de produto e perguntas de clientes usam o mesmo modelo de embedding, enquanto a recuperação retorna correspondências classificadas com os filtros relevantes.
[600ms]
[reassuring] A ramificação do feed de alterações atualiza itens editados, mantendo os vetores pesquisáveis ligados ao conteúdo que representam.

## Step 8 · Vector search in Cosmos DB, all in one

[confident] Mantenha três responsabilidades juntas: configurar o armazenamento vetorial, pesquisar com embeddings compatíveis e refinar e atualizar os resultados.
[600ms]
[calm] A distância vetorial fornece a classificação, filtros e texto completo acrescentam sinais de seleção, e o feed de alterações mantém embeddings atualizados com o conteúdo.
[600ms]
[encouraging] Com esse fluxo de recuperação pronto, a próxima lição aborda indexação, custos de solicitações e consistência.
