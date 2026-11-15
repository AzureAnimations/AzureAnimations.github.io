# Narrator Script — Escolha seu banco de dados para apps de IA

**Source animation:** [PickYourDatabase.html](../../../journeys/Database/PickYourDatabase.html)
**Language:** pt

Indicações: os estilos entre colchetes orientam a voz; [600ms] marca uma pausa entre frases.

<!-- Sources: https://learn.microsoft.com/en-us/training/paths/develop-ai-solutions-azure-cosmos-db/ ; https://learn.microsoft.com/en-us/training/paths/develop-ai-solutions-azure-database-postgresql/ ; https://learn.microsoft.com/azure/azure-sql/azure-sql-iaas-vs-paas-what-is-overview ; https://learn.microsoft.com/training/modules/design-data-integration/ -->

## Step 1 · One assistant, four kinds of data

[curious] O assistente de suporte da Contoso Outfitters precisa de histórico de chat, pedidos, pesquisa por significado e grandes arquivos brutos.
[600ms]
[calm] Essas solicitações chegam a um assistente, mas não exigem o mesmo formato de armazenamento nem padrão de acesso.
[600ms]
[reassuring] Observe as duas cores da pesquisa: vetores não são exclusivos de um mecanismo, então a carga de trabalho deve orientar a escolha.

## Step 2 · Documents and vectors: Cosmos DB

[confident] A mensagem de chat vira um documento no Azure Cosmos DB for NoSQL, com um embedding armazenado junto do texto.
[600ms]
[calm] A chave de partição agrupa o item com dados relacionados do cliente, em vez de tratar cada documento isoladamente.
[600ms]
[reassuring] Isso combina armazenamento flexível de documentos com recuperação vetorial, para o assistente pesquisar significado sem separar o vetor do seu item.

## Step 3 · Tables plus vectors: PostgreSQL

[confident] Aqui o catálogo continua em tabelas relacionais, com uma coluna de embeddings ao lado dos campos conhecidos de produto.
[600ms]
[calm] Azure Database for PostgreSQL usa pgvector para combinar classificação por significado, filtros de categoria e consultas relacionais.
[600ms]
[reassuring] Essa opção atende a equipes que precisam de relações entre tabelas e pesquisa vetorial juntas, mas a extensão deve ser habilitada em cada banco que a utiliza.

## Step 4 · Relational at scale: Azure SQL family

[confident] Os pedidos e clientes da Contoso levam a outra decisão: quanto do ambiente de banco de dados a equipe quer gerenciar?
[600ms]
[calm] Azure SQL Database e Azure SQL Managed Instance são serviços gerenciados, enquanto SQL Server on Azure VMs oferece acesso ao sistema operacional.
[600ms]
[reassuring] Combine as necessidades da aplicação com esse limite de gerenciamento, especialmente ao mover uma carga existente de SQL Server.

## Step 5 · Raw files and pipelines: the data lake

[confident] Exportações de chat, logs e fotos de produtos começam como arquivos brutos no Azure Data Lake Storage.
[600ms]
[calm] Azure Data Factory conecta, coleta, transforma, publica e monitora o fluxo em direção à análise.
[600ms]
[reassuring] Databricks, Synapse e Stream Analytics aparecem depois porque essa rota prepara dados para análise, em vez de tratar arquivos como o banco transacional do assistente.

## Step 6 · Which one, when?

[curious] Escolha uma necessidade na comparação e observe o mecanismo correspondente, os cenários úteis e o cuidado indicado.
[600ms]
[calm] Documentos, vetores relacionais, pedidos de negócios e pipelines de arquivos exigem escolhas e compromissos diferentes.
[600ms]
[encouraging] A Contoso pode usar mais de uma opção, então decida por carga de trabalho em vez de padronizar todas as tarefas em um produto.
