# Narrator Script — PostgreSQL: pesquisa vetorial com pgvector

**Source animation:** [PostgresVectorSearch.html](../../../journeys/Database/PostgresVectorSearch.html)
**Language:** pt

As marcações entre colchetes orientam a interpretação; [600ms] indica uma pausa entre as frases.

<!-- Fact source: https://learn.microsoft.com/en-us/training/modules/implement-vector-search-azure-database-postgresql/ · Learning path: https://learn.microsoft.com/en-us/training/paths/develop-ai-solutions-azure-database-postgresql/ -->

## Step 1 · Meaning search, plus relational joins

[curious] O assistente da Contoso precisa encontrar produtos pelo significado do pedido, mesmo quando a descrição usa palavras diferentes.
[600ms]
[confident] O pgvector adiciona pesquisa por similaridade ao PostgreSQL, mantendo embeddings junto dos registros relacionais que o aplicativo já utiliza.
[600ms]
[reassuring] O resultado combina descoberta pelo significado e junções relacionais, sem introduzir outro repositório vetorial para gerenciar.

## Step 2 · Enable pgvector, add a vector column

[confident] Comece permitindo o pgvector no servidor, habilitando a extensão no banco e verificando se está instalada.
[600ms]
[calm] O conteúdo do produto passa por um modelo de embedding, e o vetor resultante fica junto dos metadados da linha.
[600ms]
[serious] Faça as dimensões da coluna vetorial corresponderem à saída do modelo, para acomodar os embeddings gerados.

## Step 3 · Three metrics, three operators

[curious] A proximidade é uma escolha: distância euclidiana, distância de cosseno e produto interno negativo comparam vetores de maneiras diferentes.
[600ms]
[calm] O cosseno considera a direção, não o comprimento, sendo uma escolha comum para embeddings de texto.
[600ms]
[serious] Siga a métrica recomendada pelo modelo e lembre que, nestes exemplos, distâncias menores classificam correspondências mais próximas.

## Step 4 · Fast search: IVFFlat or HNSW

[confident] Uma varredura exata compara todas as linhas, enquanto um índice aproximado pode acelerar a pesquisa sacrificando um pouco de recall.
[600ms]
[calm] O IVFFlat agrupa vetores existentes; o HNSW cria um grafo em camadas e geralmente exige mais memória.
[600ms]
[encouraging] Comece com HNSW, salvo quando suas restrições favorecerem IVFFlat, e faça a medida de distância do índice corresponder à consulta.

## Step 5 · Keep embeddings and the index fresh

[serious] A qualidade da pesquisa pode mudar quando o conteúdo editado mantém embeddings antigos ou a distribuição dos dados se altera.
[600ms]
[confident] Atualize o conteúdo alterado em lotes e considere recriar o índice conforme os dados evoluem.
[600ms]
[reassuring] Ao mudar de modelo de embedding, preencha e valide uma coluna paralela antes de trocar, sem misturar modelos em uma coluna.

## Step 6 · Semantic retrieval with a filter

[confident] A pergunta vira um embedding, enquanto os metadados limitam os produtos elegíveis à categoria que interessa ao cliente.
[600ms]
[calm] Um limite de distância elimina correspondências fracas, e a classificação retorna as restantes mais próximas, não todas as linhas elegíveis.
[600ms]
[encouraging] Ajuste esse limite com seus dados para equilibrar a recuperação de correspondências relevantes e uma filtragem restritiva demais.

## Step 7 · RAG: PostgreSQL is the retriever

[confident] Acompanhe a pergunta pelo embedding e pela recuperação, até um prompt com os trechos mais próximos e seus metadados.
[600ms]
[calm] O PostgreSQL recupera o contexto; o modelo de linguagem usa esse contexto para compor a resposta.
[600ms]
[serious] Mantenha os trechos ligados aos documentos de origem para permitir citações e avalie a recuperação antes de atribuir problemas à geração.

## Step 8 · All in one: vector search in PostgreSQL

[confident] Um banco PostgreSQL agora armazena linhas relacionais e embeddings, conectando a pergunta do assistente ao contexto recuperado e à resposta.
[600ms]
[calm] Extensão, métrica de distância, índice, atualização e filtros de metadados contribuem para esse caminho de recuperação.
[600ms]
[encouraging] A seguir, ajuste o banco e a carga vetorial juntos para tratar a latência sem perder de vista a relevância dos resultados.
