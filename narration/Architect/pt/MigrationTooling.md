# Narrator Script — Architect · Migration tooling: Azure Migrate and DMS

**Source animation:** [MigrationTooling.html](../../../journeys/Architect/MigrationTooling.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/migrate/migrate-services-overview>
- <https://learn.microsoft.com/azure/migrate/migrate-appliance>
- <https://learn.microsoft.com/azure/migrate/concepts-assessment-overview>
- <https://learn.microsoft.com/azure/dms/dms-overview>

---

## Step 1 · 300 servers, 20 databases: now what?

[curious] A Contoso está saindo do datacenter, com centenas de servidores e algumas dezenas de bancos de dados para migrar. Os números são inventados para esta lição.
[600ms]
[serious] Antes de mover qualquer coisa, a equipe precisa das ferramentas certas, da ordem certa e de uma ideia clara do que o appliance realmente faz.
[600ms]
[confident] Esta é a habilidade A Z 305 de avaliar servidores, dados e aplicativos on-premises para a migração.

## Step 2 · Azure Migrate: one hub, four tool families

[calm] O Azure Migrate é o lugar único para decidir, planejar e executar uma migração.
[600ms]
[confident] Servidores, bancos de dados, aplicativos web e dados em massa têm, cada um, a sua própria família de ferramentas, e grandes volumes de dados offline podem viajar no Azure Data Box.
[600ms]
[reflective] O trabalho tem três fases. Decidir, com a descoberta e um business case. Planejar, com as avaliações. E depois executar a migração.

## Step 3 · Create the Azure Migrate project

[calm] Tudo o que você descobre vai para um único projeto, dentro de um grupo de recursos.
[600ms]
[confident] Você adiciona as ferramentas de que precisa e gera uma chave de projeto, que o appliance usa para se registrar.
[600ms]
[reflective] Um appliance se registra em um único projeto, mas um projeto pode ter vários appliances. Antes, sua conta precisa ter as funções certas.

## Step 4 · The appliance: a lightweight server on your network

[curious] O appliance é um servidor leve, que você implanta uma única vez, dentro da sua própria rede.
[600ms]
[confident] Use um modelo ou um script PowerShell e depois registre o appliance com a chave do projeto, que você pega no portal.
[600ms]
[serious] Para servidores físicos ou de outras nuvens, você sempre usa o script. E não instale outros componentes, como o appliance de replicação, no mesmo servidor.

## Step 5 · What the appliance actually does

[curious] Então, o que ele faz de fato? Ele lê os metadados de configuração e de desempenho do seu hipervisor e envia tudo para o projeto.
[600ms]
[reassuring] Ele não usa agente. Nada é instalado nas próprias máquinas virtuais.
[600ms]
[calm] O appliance precisa de acesso à internet para chegar ao Azure, direto ou por proxy, então libere os endereços necessários. A implantação já faz uma verificação de conectividade para você.

## Step 6 · Two credentials, two levels of insight

[curious] O appliance usa dois tipos de credenciais, e cada uma dá um nível diferente de visibilidade.
[600ms]
[confident] Uma conta somente leitura do vCenter basta para os dados de inventário e de desempenho.
[600ms]
[impressed] Adicione também as credenciais dos servidores, e o appliance passa a enxergar os softwares instalados e as dependências, além do SQL Server e dos aplicativos web.

## Step 7 · Dependency analysis: move what talks together

[curious] Agora o appliance observa as conexões TCP entre os seus servidores.
[600ms]
[serious] Servidores que dependem uns dos outros precisam ser migrados juntos. Se não, o aplicativo quebra depois do cutover.
[600ms]
[confident] A análise de dependência sem agente é a opção recomendada. Ela não precisa de agentes e mostra um mapa ou uma exportação em CSV.

## Step 8 · Assessments turn data into decisions

[calm] As avaliações transformam todos esses dados em decisões. Você escolhe um grupo de servidores e um destino.
[600ms]
[confident] O Azure Migrate verifica primeiro a prontidão, depois ajusta o tamanho e só então estima o custo mensal. Há avaliações para Azure VMs, Azure SQL, App Service e Azure VMware Solution.
[600ms]
[serious] Um servidor que reprova na prontidão não recebe dimensionamento nem custo. E uma avaliação é uma foto de um momento.

## Step 9 · Right-size by use, then make the business case

[curious] Há duas formas de dimensionar. No dimensionamento como on-premises, o tamanho é uma cópia do que você provisionou.
[600ms]
[confident] O dimensionamento baseado em desempenho usa o que o servidor realmente consumiu, então a capacidade ociosa não vai junto para o Azure.
[600ms]
[proud] Um business case compara depois o on-premises com o Azure, incluindo o custo total de propriedade, o fluxo de caixa ano a ano e a passagem de despesa de capital para despesa operacional.

## Step 10 · Migrate servers: replicate, test, cut over

[calm] Para migrar servidores, você começa replicando: o servidor continua no ar enquanto uma cópia inicial e, depois, as alterações são enviadas.
[600ms]
[confident] Em seguida, você testa em uma rede isolada. Depois faz o cutover em uma janela planejada, desligando a origem, se quiser, para evitar perda de dados.
[600ms]
[reassuring] Por fim, você conclui a migração e faz a limpeza. O método de replicação depende de você usar VMware, Hyper-V ou servidores físicos.

## Step 11 · Databases: assess first, then Azure DMS

[curious] O SQL Server tem um caminho próprio. Primeiro avalie a prontidão e escolha um destino.
[600ms]
[confident] Depois, migre com o Azure Database Migration Service, offline ou online. No modo offline, o destino pode ser o SQL Database, a SQL Managed Instance ou o SQL em uma Azure VM. No modo online, só os dois últimos.
[600ms]
[serious] A extensão de migração do Azure SQL no Azure Data Studio foi desativada junto com a ferramenta, então use no lugar a avaliação do SSMS ou do Azure Arc.

## Step 12 · Web apps and bulk data have their own tools

[curious] Nem tudo é servidor ou banco de dados SQL.
[600ms]
[confident] O Azure Migrate consegue avaliar aplicativos web ASP.NET no IIS e movê-los para o App Service. O App Service Migration Assistant cuida de sites individuais.
[600ms]
[impressed] Para volumes de dados muito grandes, o Azure Data Box envia um dispositivo até você. Você copia os dados, devolve o dispositivo, e o Azure envia tudo para a sua conta de armazenamento.

## Step 13 · Pick your workload, see the path

[encouraging] Agora experimente o seletor de ferramentas. Escolha o que você vai migrar.
[600ms]
[confident] O painel mostra o caminho de ferramentas do Azure que combina com a escolha e as três primeiras ações a executar.
[600ms]
[reflective] Essa é a habilidade A Z 305 na prática: escolha a ferramenta pelo tipo de carga de trabalho, e não por hábito.

## Step 14 · The runbook: discover, assess, migrate, cut over

[calm] Esta é a resposta da Contoso. Comece pelo appliance, para descobrir e avaliar.
[600ms]
[confident] Os bancos de dados passam pelo Azure DMS, e todo o resto segue o seu grupo de dependências, com replicação, teste e cutover.
[600ms]
[proud] Isso cobre os objetivos de migração da A Z 305, desde avaliar ambientes on-premises até recomendar o caminho certo para servidores, bancos de dados e dados.
