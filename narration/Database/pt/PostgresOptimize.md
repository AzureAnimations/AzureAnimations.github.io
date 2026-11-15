# Narrator Script — PostgreSQL: otimizar a pesquisa vetorial

**Source animation:** [PostgresOptimize.html](../../../journeys/Database/PostgresOptimize.html)
**Language:** pt

As marcações entre colchetes orientam a interpretação; [600ms] indica uma pausa entre as frases.

<!-- Fact source: https://learn.microsoft.com/en-us/training/modules/optimize-vector-search-azure-database-postgresql/ · Learning path: https://learn.microsoft.com/en-us/training/paths/develop-ai-solutions-azure-database-postgresql/ -->

## Step 1 · Where a vector query spends its time

[curious] Uma pesquisa de produtos lenta pode gastar tempo em vários pontos, não só na comparação dos vetores.
[600ms]
[calm] Acompanhe conexão, planejamento, comparações vetoriais e leituras de dados para descobrir para onde vai o tempo.
[600ms]
[encouraging] Estabeleça uma linha de base para que cada ajuste trate uma causa de atraso observada.

## Step 2 · Tune PostgreSQL for pgvector

[confident] Memória, comportamento do planejador e esforço de pesquisa vetorial oferecem à Contoso diferentes formas de ajustar a mesma consulta.
[600ms]
[serious] Essas configurações equilibram memória, latência e recall, então a velocidade de resposta não é a única medida importante.
[600ms]
[encouraging] Mude um parâmetro de cada vez, examine o plano de execução e teste o resultado com dados representativos.

## Step 3 · Choose and configure the vector index

[confident] Escolha o índice vetorial por memória, tempo de criação, recall e frequência com que os dados mudam.
[600ms]
[calm] A comparação separa decisões de criação do esforço de pesquisa por consulta, com uma varredura exata como referência.
[600ms]
[serious] Faça a medida de distância corresponder à consulta e teste os compromissos, sem escolher apenas pelo nome do índice.

## Step 4 · Shape the table for vectors and filters

[confident] Mantenha atributos de produto filtrados com frequência em colunas tipadas, deixando embeddings e JSON flexível com seus próprios papéis.
[600ms]
[calm] Use B-tree para categoria e preço, um índice parcial para produtos em estoque e GIN para contenção JSON.
[600ms]
[serious] Associe cada índice ao padrão de acesso, sem esperar que o índice vetorial acelere todos os filtros.

## Step 5 · Scale for high-volume workloads

[confident] Primeiro, escale verticalmente quando consultas individuais estiverem lentas ou vetores e índices pressionarem a memória disponível.
[600ms]
[calm] Depois, use réplicas de leitura para o volume de leituras e Azure Managed Redis para consultas repetidas, como no diagrama.
[600ms]
[serious] Mantenha as gravações no servidor primário e meça onde a capacidade adicional realmente ajuda a carga.

## Step 6 · Pool connections and manage sessions

[confident] O PgBouncer permite que muitos clientes compartilhem menos conexões de servidor, reduzindo a preparação repetida e o uso de memória pelas conexões.
[600ms]
[calm] O modo Transação compartilha conexões entre transações; o modo Sessão mantém uma até o cliente se desconectar.
[600ms]
[serious] Limite configurações específicas à transação, para que conexões do pool não levem ajustes indesejados para trabalhos posteriores.

## Step 7 · Contoso’s product search, tuned

[confident] A comparação da Contoso reúne as alavancas: parâmetros ajustados, índice vetorial, filtros tipados, capacidade adequada e conexões em pool.
[600ms]
[calm] Cada mudança trata uma fonte diferente de espera, mantendo a mesma tabela e a mesma pergunta sobre produtos.
[600ms]
[serious] É uma ilustração qualitativa, então faça benchmarks com seus dados e registre a contribuição de cada mudança.

## Step 8 · All in One: Optimize vector search

[confident] A visão final reúne cinco alavancas em uma carga PostgreSQL: parâmetros, índices vetoriais, estrutura da tabela, escalabilidade e pool de conexões.
[600ms]
[calm] O desempenho melhora ao alinhar essas escolhas ao comportamento observado, não ao copiar todas as configurações de exemplo sem mudanças.
[600ms]
[encouraging] Meça primeiro, teste mudanças individualmente com dados semelhantes aos de produção e documente os efeitos antes do próximo ajuste.
