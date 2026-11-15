# Narrator Script — Monitor · Log Analytics workspaces

**Source animation:** [LogAnalyticsWorkspaces.html](../../../journeys/Monitor/LogAnalyticsWorkspaces.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/azure-monitor/logs/log-analytics-workspace-overview>
- <https://learn.microsoft.com/azure/azure-monitor/logs/data-retention-configure>
- <https://learn.microsoft.com/azure/azure-monitor/logs/manage-access>
- <https://learn.microsoft.com/azure/azure-monitor/logs/daily-cap>

---

## Step 1 · Where do my logs live?

[curious] A Contoso tem uma máquina virtual, um web app e um Key Vault. Os três gravam logs.
[600ms]
[calm] Antes de alguém poder usar esses logs, três perguntas precisam de resposta. Onde eles ficam, quem pode lê-los e quanto custam?
[600ms]
[confident] Esta lição responde às três, começando pelo lugar onde os logs ficam.

## Step 2 · Two stores: metrics and logs

[calm] O Azure Monitor guarda números em um repositório de métricas. Métricas são valores amostrados em intervalos regulares.
[600ms]
[confident] Registros de eventos vão para os logs. Logs são registros com carimbo de data e hora, guardados em um workspace do Log Analytics e consultados com KQL.
[600ms]
[reassuring] Os insights, como o Application Insights, escondem essa diferença nos cenários mais comuns.

## Step 3 · A workspace is a box of tables

[calm] Um workspace do Log Analytics é o armazenamento de dados. Cada tipo de log vai para a sua própria tabela, com colunas nomeadas.
[600ms]
[curious] O Azure Monitor cria as tabelas de que precisa para os dados do Azure, e você cria tabelas personalizadas para os seus próprios dados.
[600ms]
[confident] Os nomes das tabelas diferenciam maiúsculas de minúsculas. O workspace em si não tem custo direto, porque você paga pelos dados que ingere e mantém.

## Step 4 · Three on-ramps feed the workspace

[calm] Os dados chegam ao workspace por três portas de entrada. Os recursos do Azure usam configurações de diagnóstico.
[600ms]
[curious] As máquinas usam um agente, e os apps usam o Application Insights ou uma API.
[600ms]
[confident] As regras de coleta de dados podem filtrar ou transformar os dados no caminho. Cada uma dessas portas de entrada tem a sua própria lição.

## Step 5 · Each table gets a plan

[calm] Cada tabela tem um plano. Analytics, Basic e Auxiliary trocam poder de consulta por custo de ingestão.
[600ms]
[confident] Você escolhe o plano de cada tabela, então logs barulhentos podem ficar em um plano mais barato do que os seus dados principais.
[600ms]
[serious] Basic e Auxiliary só funcionam em tabelas que oferecem suporte a eles, então confira antes a referência da tabela.

## Step 6 · How long do logs stay?

[calm] Os dados recentes ficam na retenção interativa, onde as consultas são rápidas.
[600ms]
[curious] Os dados mais antigos esperam na retenção de longo prazo, de baixo custo, até o fim da retenção total.
[600ms]
[reassuring] Você define a retenção por tabela, com um padrão do workspace. Ao encurtá-la, os dados só são removidos depois de um tempo de espera, então dá para desfazer um erro.

## Step 7 · Two doors into the same data

[calm] Há duas portas para os mesmos dados. Pelo workspace, você vê todas as tabelas que pode ler.
[600ms]
[curious] A partir de um único recurso, você vê só os registros desse recurso.
[600ms]
[confident] O contexto do workspace serve às equipes centrais. O contexto do recurso serve à equipe dona de um recurso, que só precisa de acesso a ele.

## Step 8 · Narrow it down: mode and tables

[calm] O modo de controle de acesso decide se os donos dos recursos podem ler os próprios logs.
[600ms]
[confident] Mesmo assim, o acesso em nível de tabela pode restringir uma tabela específica, usando o controle de acesso baseado em função do Azure.
[600ms]
[reassuring] Funções internas, como Log Analytics Reader e Log Analytics Contributor, cobrem as necessidades mais comuns.

## Step 9 · One workspace or several?

[calm] Comece com um workspace só, e use o menor número que atenda aos seus requisitos.
[600ms]
[curious] Escolha o fator que mais importa, e você vê o que se ganha e o que se perde. Divida apenas por um requisito que você consiga nomear.
[600ms]
[serious] Os critérios podem entrar em conflito, então pese cada um antes de acrescentar outro workspace.

## Step 10 · Ingestion drives the bill

[calm] Você paga pelos dados que ingere e pelo tempo em que os mantém.
[600ms]
[concerned] O custo depende de quantos recursos você monitora e de quantos dados cada um coleta.
[600ms]
[confident] Uma transformação em uma regra de coleta de dados filtra o ruído antes da cobrança, então você não paga pelos registros que descarta.

## Step 11 · Guardrails for the spend

[calm] Use as alavancas de custo em ordem. Primeiro, filtre o ruído; depois, escolha os planos das tabelas.
[600ms]
[confident] Depois disso, assuma um compromisso com um tier para ganhar desconto. Os tiers de compromisso se aplicam à ingestão de logs Analytics.
[600ms]
[serious] Use um limite diário só como última rede de segurança. Ao atingi-lo, a coleta para e o monitoramento fica às escuras até ser redefinido.

## Step 12 · All in one

[calm] Os logs ficam em tabelas, e as tabelas ficam dentro de um workspace do Log Analytics.
[600ms]
[confident] Acesso, retenção e custo são definidos por workspace ou por tabela.
[600ms]
[proud] Com essas peças claras, você consegue responder com confiança às três perguntas da Contoso.
