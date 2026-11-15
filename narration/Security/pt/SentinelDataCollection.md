# Narrator Script — Security · Microsoft Sentinel data collection: workspaces, connectors, Syslog, CEF and Windows events

**Source animation:** [SentinelDataCollection.html](../../../journeys/Security/SentinelDataCollection.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/sentinel/quickstart-onboard>
- <https://learn.microsoft.com/azure/sentinel/roles>
- <https://learn.microsoft.com/azure/sentinel/sentinel-solutions-deploy>
- <https://learn.microsoft.com/azure/sentinel/cef-syslog-ama-overview>

---

## Step 1 · Sentinel is blind until data arrives

[calm] A Contoso acabou de ativar o Microsoft Sentinel, mas o workspace dele está vazio.
[600ms]
[serious] O Sentinel só detecta o que consegue ver. Sem dados, não há nada para gerar alerta.
[600ms]
[determined] Então a Priya começa com um conector de dados. Esta lição cobre a coleta de eventos no Sentinel, das habilidades do S C 500. Todos os nomes aqui são fictícios.

## Step 2 · Create the workspace and add Microsoft Sentinel

[calm] O Sentinel roda em um workspace do Log Analytics. A Priya cria o workspace em um grupo de recursos e depois adiciona o Microsoft Sentinel a ele.
[600ms]
[confident] Você pode usar o Sentinel em mais de um workspace, mas os dados ficam isolados em um único workspace.
[600ms]
[reassuring] Para ativar o Sentinel, você precisa da função Colaborador na assinatura que contém o workspace.

## Step 3 · Roles on the workspace

[calm] As funções do Azure controlam quem pode fazer o quê no Sentinel. Escolha a função de menor privilégio que resolve o trabalho.
[600ms]
[confident] Atribua a função no grupo de recursos do workspace, assim o acesso cobre o workspace e nada além dele.
[600ms]
[reflective] Playbook Operator e Automation Contributor são funções separadas para automação, e não entram nesta lição.

## Step 4 · Content hub: install, then configure

[curious] O hub de conteúdo reúne conectores, regras e workbooks em soluções.
[600ms]
[confident] Para usar um item de conteúdo, você instala a solução inteira. Instalar uma solução adiciona o conector, mas você ainda precisa configurá-lo.
[600ms]
[reassuring] Instalar e gerenciar soluções exige a função de Colaborador do Microsoft Sentinel no grupo de recursos.

## Step 5 · Connectors for Azure resources

[calm] As fontes do lado do Azure têm conectores nativos. Aqui vemos a atividade da assinatura, os logs do Microsoft Entra ID e os alertas do Defender for Cloud.
[600ms]
[serious] Atenção: os logs de login do Entra exigem uma licença Entra ID P um ou P dois.
[600ms]
[curious] O conector do Defender for Cloud baseado em tenant está em versão prévia, e o baseado em assinatura é o conector legado.

## Step 6 · Syslog from Linux machines

[calm] Os servidores Linux da Priya gravam no syslog. O conector instala neles o Azure Monitor Agent.
[600ms]
[confident] Depois, uma regra de coleta de dados decide o que é coletado, por facility e por gravidade mínima.
[600ms]
[curious] Escolher um nível mínimo também coleta todas as gravidades acima dele. Escolha o nível de erro, e você recebe também crítico, alerta e emergência.

## Step 7 · CEF from appliances

[calm] Appliances como firewalls enviam mensagens no formato Common Event Format. Eles as enviam para um encaminhador de logs Linux, que executa o agente no lugar deles.
[600ms]
[curious] O CEF é uma extensão do Syslog criada para ferramentas de SIEM. Ele adiciona um cabeçalho com fornecedor, produto, versão, classe do evento, gravidade e ID, além de extensões.
[600ms]
[confident] As mensagens Syslog simples vão para a tabela Syslog, e as mensagens CEF vão para a CommonSecurityLog.

## Step 8 · Windows Security events

[calm] Os eventos de segurança do Windows podem vir direto de cada máquina, com uma regra de coleta de dados, ou pelo Windows Event Forwarding até um coletor.
[600ms]
[encouraging] Experimente os dois caminhos e compare.
[600ms]
[confident] O agente filtra na origem, então só os eventos que você escolhe são ingeridos. Máquinas fora do Azure precisam primeiro do Azure Arc.

## Step 9 · Custom log tables

[calm] Quando nenhuma tabela nativa se encaixa, a Contoso cria uma tabela personalizada a partir de um registro de exemplo.
[600ms]
[confident] Depois, envia os dados para essa tabela por meio de uma regra de coleta de dados.
[600ms]
[curious] Os dados podem chegar pela API de Ingestão de Logs ou de arquivos de texto, com o conector Custom Logs, que está em versão prévia. Você precisa de um registro de exemplo para definir o esquema.

## Step 10 · Retention and table plans

[calm] Nem todo dado precisa do mesmo tratamento. Mantenha os dados recentes à mão, para alertas e caça.
[600ms]
[confident] Guarde os dados mais antigos em armazenamento de longo prazo e baixo custo, e defina a retenção por tabela.
[600ms]
[reflective] No portal do Defender, você gerencia o Sentinel e as tabelas personalizadas, enquanto as tabelas do plano Basic são gerenciadas pelo workspace do Log Analytics.

## Step 11 · Query Purview Audit in Defender XDR

[curious] Os registros de auditoria da atividade do Microsoft 365 vêm do Microsoft Purview Audit. A Priya acessa esses registros pelo portal do Defender, com filtros ou com KQL.
[600ms]
[serious] A auditoria precisa ser ativada primeiro no portal do Microsoft Purview.
[600ms]
[confident] Para abrir a página de Auditoria, você precisa da função View-Only Audit Logs ou Audit Logs no Exchange Online.

## Step 12 · Recap

[calm] A coleta é uma cadeia: workspace, conector, regra, tabela, retenção. Se faltar um elo, os dados não chegam ou não são mantidos.
[600ms]
[confident] Cada elo corresponde a uma parte do objetivo de coleta de eventos que você acabou de percorrer.
[600ms]
[proud] As habilidades do S C 500 mudam com o tempo, então leia sempre o guia de estudo atual no Microsoft Learn.
