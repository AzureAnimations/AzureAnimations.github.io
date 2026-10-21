# Narrator Script — Projetar integração de dados e data lake

**Source animation:** [DataIntegrationDesign.html](../../../journeys/Database/DataIntegrationDesign.html)
**Language:** pt

Legenda: `[confident]` e `[reflective]` orientam o tom; `[600ms]` indica uma pausa silenciosa entre as frases.

<!-- Source: https://learn.microsoft.com/en-us/training/modules/design-data-integration/ -->

## Step 1 · Contoso’s data journey

[confident]
Os pedidos, cliques do site e sensores do depósito da Contoso produzem dados diferentes, mas a jornada dá a eles uma direção comum.
[600ms]
Ingerir coleta, armazenar conserva, preparar transforma e enriquece, e servir disponibiliza os dados para análise.
[600ms]
[reflective]
A mesma linha continua visível para que cada serviço tenha uma função reconhecível.

## Step 2 · Azure Data Factory: the orchestrator

[confident]
O Azure Data Factory coordena o trabalho, em vez de deixar cada fonte e ferramenta de processamento operar de forma independente.
[600ms]
Pipelines agrupam atividades, conjuntos de dados descrevem os dados, serviços vinculados descrevem conexões e runtimes de integração conectam essas partes.
[600ms]
[reflective]
O fluxo inferior acompanha essa coordenação desde a coleta e a transformação até a publicação e o monitoramento.

## Step 3 · Azure Data Lake Storage: raw data at scale

[confident]
A Contoso pode manter arquivos brutos em seus formatos nativos antes de decidir como analisá-los.
[600ms]
O Data Lake Storage se baseia no Blob Storage e ativa um namespace hierárquico, dando aos diretórios um papel real, em vez de tratar pastas como prefixos de nome.
[600ms]
[reflective]
A comparação também destaca o acesso a arquivos e diretórios por permissões POSIX.

## Step 4 · Azure Databricks: Spark for big data

[confident]
O Azure Databricks reúne SQL, engenharia de dados e aprendizado de máquina em uma plataforma compartilhada do Spark.
[600ms]
O plano de controle gerencia o workspace, enquanto o plano de computação executa o processamento.
[600ms]
[reflective]
A computação clássica roda na assinatura do Azure da Contoso; a computação sem servidor roda na conta do Azure Databricks, portanto esses limites são diferentes.

## Step 5 · Azure Synapse Analytics: one analytics service

[confident]
O Azure Synapse Analytics combina integração de dados, armazenamento e análise, em vez de tratá-los como tarefas desconectadas.
[600ms]
O nó de controle coordena uma consulta entre nós de computação, mostrando como o processamento paralelo divide o trabalho.
[600ms]
[reflective]
Pools de SQL, pools do Spark, pipelines e links acompanham o Synapse Studio no conjunto compartilhado de ferramentas.

## Step 6 · Hot, warm and cold data paths

[confident]
A Contoso não precisa de todas as respostas na mesma velocidade, por isso o fluxo se divide em caminhos de dados diferentes.
[600ms]
O caminho quente atende a alertas em tempo real, enquanto o caminho morno analisa os dados em movimento e mantém um subconjunto recente.
[600ms]
[reflective]
O caminho frio conserva as mensagens originais para análises em lote de longo prazo.

## Step 7 · Azure Stream Analytics: insight from streams

[confident]
O Azure Stream Analytics transforma eventos recebidos em resultados que outros serviços podem usar.
[600ms]
Siga as setas de Event Hubs, IoT Hub ou Blob Storage até uma consulta baseada em SQL, onde janelas organizam o processamento ao longo do tempo.
[600ms]
[reflective]
As saídas levam os resultados a destinos como Power BI, Data Lake Storage e Cosmos DB.

## Step 8 · Which service for which job?

[confident]
Leia esta matriz partindo da tarefa até o serviço, não de um produto favorito para todos os problemas.
[600ms]
Data Factory coordena a movimentação, Data Lake Storage mantém os dados brutos e Databricks oferece processamento compartilhado com Spark.
[600ms]
[reflective]
Synapse reúne componentes de análise, enquanto Stream Analytics processa fluxos de eventos com consultas baseadas em SQL.

## Step 9 · All in One: Contoso’s data journey

[confident]
O quadro completo recoloca os serviços na jornada da Contoso: ingerir, armazenar, preparar e servir.
[600ms]
Data Factory e Event Hubs alimentam o fluxo, o armazenamento mantém os dados e o processamento prepara resultados úteis para análise.
[600ms]
[reflective]
Os caminhos abaixo lembram que a necessidade de respostas imediatas e a retenção definem onde cada parte se encaixa.
