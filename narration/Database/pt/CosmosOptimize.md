# Narrator Script — Cosmos DB: otimizar o desempenho

**Source animation:** [CosmosOptimize.html](../../../journeys/Database/CosmosOptimize.html)
**Language:** pt

As marcações entre colchetes orientam a interpretação; [600ms] indica uma pausa entre as frases.

<!-- Fact source: https://learn.microsoft.com/en-us/training/modules/optimize-query-performance-azure-cosmos-db/ · Learning path: https://learn.microsoft.com/en-us/training/paths/develop-ai-solutions-azure-cosmos-db/ -->

## Step 1 · Measure before you tune

[curious] A pesquisa de produtos da Contoso parece lenta, então comece pelas métricas de consulta, sem adivinhar qual configuração mudar.
[600ms]
[calm] Compare os documentos recuperados com os retornados, junto com a utilização do índice e o custo da solicitação.
[600ms]
[encouraging] Adicione o índice que falta, espere a transformação terminar e faça a medição novamente.

## Step 2 · The indexing policy decides what is indexed

[confident] A política de indexação controla quais propriedades dos produtos recebem índices, sem tratar todas como igualmente úteis.
[600ms]
[calm] Compare a política padrão, mais abrangente, com uma política seletiva que cubra os campos realmente consultados por essa carga.
[600ms]
[reassuring] Excluir propriedades desnecessárias do índice de intervalo reduz a manutenção, preservando os índices das pesquisas que importam.

## Step 3 · Composite index for filter + sort

[curious] A Contoso filtra produtos por categoria e ordena por preço, mas atender só ao filtro ainda deixa trabalho de ordenação.
[600ms]
[confident] A consulta revisada inclui a propriedade filtrada na ordenação e a combina com um índice composto correspondente.
[600ms]
[serious] Faça a ordem das propriedades e a direção da ordenação corresponderem ao índice e meça se o custo da solicitação melhora.

## Step 4 · Pick a vector index by dataset size

[confident] A escolha do índice vetorial depende do tamanho do conjunto de dados e do equilíbrio entre precisão, velocidade e custo da solicitação.
[600ms]
[calm] Os cartões comparam uma abordagem plana exata, outra plana comprimida e diskANN para coleções maiores.
[600ms]
[encouraging] Teste as opções adequadas com os mesmos vetores e consultas, sem presumir que um índice vence em toda carga.

## Step 5 · Every index trades read speed for write cost

[serious] Um índice pode baratear as pesquisas, mas cada índice adicional também aumenta o trabalho ao gravar produtos.
[600ms]
[calm] Cargas com muitas gravações favorecem uma política enxuta; cargas voltadas a leituras podem justificar mais índices para suas consultas.
[600ms]
[reassuring] Ao substituir um índice, adicione o novo primeiro e espere a transformação terminar antes de remover o antigo.

## Step 6 · Consistency is a latency and RU dial

[confident] A consistência também depende da carga, equilibrando a atualização exigida nas leituras com a latência e o custo da solicitação.
[600ms]
[calm] A tabela compara cinco níveis e destaca Sessão para o chat da Contoso e a leitura das próprias gravações.
[600ms]
[serious] Se vários serviços participam dessa interação, encaminhe o token de sessão para que mantenham o contexto da sessão.

## Step 7 · Contoso tunes the product container

[confident] Agora, a Contoso substitui a configuração padrão por decisões ligadas às consultas reais do seu contêiner de produtos.
[600ms]
[calm] Caminhos seletivos, um índice vetorial separado, um índice composto correspondente e consistência de Sessão atendem a partes diferentes da carga.
[600ms]
[serious] A comparação é ilustrativa, então confirme o efeito nas leituras e gravações usando os custos de solicitação medidos.

## Step 8 · Optimizing Cosmos DB, all in one

[confident] Essas escolhas atuam juntas em um contêiner: medir a consulta, ajustar a política de indexação e atender à ordenação.
[600ms]
[calm] Escolha um índice vetorial e um nível de consistência adequados à experiência de pesquisa, em vez de maximizar cada configuração.
[600ms]
[encouraging] Confira as métricas após as mudanças e leve essa abordagem baseada em evidências às tabelas e consultas do PostgreSQL.
