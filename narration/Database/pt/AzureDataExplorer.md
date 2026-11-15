# Narrator Script — Database · Azure Data Explorer: Fast Analytics on Logs and Telemetry

**Source animation:** [AzureDataExplorer.html](../../../journeys/Database/AzureDataExplorer.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/data-explorer/data-explorer-overview>
- <https://learn.microsoft.com/azure/data-explorer/how-it-works>
- <https://learn.microsoft.com/azure/data-explorer/ingest-data-overview>
- <https://learn.microsoft.com/kusto/management/cache-policy>

---

## Step 1 · Billions of rows, one question

[calm] Os caminhões, os gateways e os aplicativos da Contoso Fleet não param de gerar telemetria e logs. As linhas se acumulam o dia inteiro, todo dia.
[600ms]
[curious] Aí alguém faz uma pergunta simples, e o relógio começa a correr. Em quanto tempo você consegue uma resposta no meio de todos esses dados?
[600ms]
[confident] A Contoso Fleet é fictícia. O Azure Data Explorer é o serviço real que esta lição explica.

## Step 2 · What Azure Data Explorer is for

[calm] O Azure Data Explorer é um serviço de análise totalmente gerenciado, feito para grandes volumes de dados que chegam rápido.
[600ms]
[confident] Esses dados são, na maior parte, só de acréscimo, e você quer explorá-los de forma interativa, quase em tempo real.
[600ms]
[reassuring] O Microsoft Learn indica como pontos fortes dele a análise de logs, a análise de séries temporais, a IoT e a análise exploratória em geral.

## Step 3 · Cluster, database, table, extent

[curious] Vamos ver como os dados são organizados. Um cluster contém bancos de dados, e os bancos de dados contêm tabelas com colunas tipadas.
[600ms]
[confident] Cada tabela é armazenada em extents, que são blocos de linhas compactados e indexados. Os dados são particionados pelo horário de ingestão.
[600ms]
[calm] Os extents começam pequenos, e o serviço os une em segundo plano, formando extents maiores.

## Step 4 · Compute and storage are separate

[curious] Por baixo dos panos, o trabalho é dividido. Os nós de engine atendem às suas consultas e mantêm os dados quentes em cache.
[600ms]
[calm] Os nós de gerenciamento de dados cuidam da ingestão. Cada extent é gravado de forma persistente no Azure Blob Storage.
[600ms]
[confident] Como armazenamento e computação são separados, cada um escala de forma independente. A computação só mantém em cache o que o armazenamento já tem.

## Step 5 · Ways to get data in

[calm] Os dados chegam de fontes como Event Hubs, IoT Hub, Event Grid e Kafka.
[600ms]
[confident] A ingestão em fila agrupa os dados em lotes para ganhar throughput, e é a recomendada para a maioria dos cenários.
[600ms]
[curious] Já a ingestão por streaming prioriza a baixa latência, com resultados quase em tempo real quando cada tabela recebe pouco dado.

## Step 6 · Try it: ingestion path and hot cache

[encouraging] Agora é a sua vez. Escolha como os dados chegam e quanto deles fica quente.
[600ms]
[curious] Veja os medidores se mexerem. Eles mostram a direção de cada compromisso, nunca números reais.
[600ms]
[reflective] O comportamento real depende do batching, das políticas de cache, da sua carga de trabalho e do tamanho do cluster.

## Step 7 · Ask it in KQL

[curious] Para fazer perguntas, você usa o Kusto Query Language, o KQL. Ele é lido de cima para baixo.
[600ms]
[confident] Você começa por uma tabela e passa os dados por filtros e resumos, um depois do outro. O T-SQL também funciona sobre os mesmos dados.
[600ms]
[calm] O KQL é open source e foi criado pela equipe do Azure Data Explorer. O Azure Monitor Logs e o Application Insights também usam o KQL.

## Step 8 · Hot cache vs retention

[calm] Duas políticas costumam ser confundidas. A política de cache decide o que fica rápido no SSD local.
[600ms]
[confident] A política de retenção decide por quanto tempo os dados continuam disponíveis para consulta. As duas são independentes.
[600ms]
[serious] A retenção define o período consultável, e o cache só prioriza uma parte desse período para ganhar velocidade. Além disso, a exclusão não acontece no instante exato.

## Step 9 · Scale out, scale up

[calm] Quando você precisa de mais capacidade, tem dois caminhos. Escalar horizontalmente, adicionando ou removendo nós de engine.
[600ms]
[confident] Ou escalar verticalmente, trocando o SKU da VM para ter mais CPU e memória. O armazenamento escala por conta própria.
[600ms]
[reassuring] Os clusters novos usam o autoscale otimizado por padrão. Ele reduz quando há pouco uso e aumenta quando há sobrecarga, dentro dos limites que você define.

## Step 10 · Security at a plain level

[serious] A segurança se resume a três ideias simples. Primeiro, as funções definem quem pode consultar ou ingerir os dados.
[600ms]
[confident] Os endpoints privados mantêm o tráfego fora da internet pública, e as identidades gerenciadas tiram os segredos da sua configuração.
[600ms]
[calm] As funções de dados valem no escopo de cluster, banco de dados ou tabela, separadas das funções de recursos do Azure. Chaves gerenciadas pelo cliente também são compatíveis.

## Step 11 · Where Azure Data Explorer fits

[curious] Onde ele se encaixa na família de dados do Azure? O KQL é o que une essa família.
[600ms]
[confident] Escolha conforme o quanto você quer operar sozinho e conforme a tarefa. Ele serve para análise de telemetria, não para data warehouse nem para dados de aplicativo.
[600ms]
[calm] O Fabric Real-Time Intelligence é o caminho SaaS, e o Azure Data Explorer é o caminho PaaS, com mais controle.

## Step 12 · Azure Data Explorer at a glance

[calm] Este é o quadro completo. Telemetria e logs, quase só de acréscimo, entram, e as respostas em KQL saem.
[600ms]
[confident] O seu trabalho é projetar quatro coisas: o caminho de ingestão, o cache e a retenção, a escala e a segurança.
[600ms]
[proud] Em seguida, aprenda o básico de KQL e compare os outros repositórios de dados na jornada de Banco de Dados.
