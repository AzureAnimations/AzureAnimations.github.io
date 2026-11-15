# Narrator Script — Security · Microsoft Sentinel basics

**Source animation:** [SentinelBasics.html](../../../journeys/Security/SentinelBasics.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/sentinel/overview>
- <https://learn.microsoft.com/azure/sentinel/connect-data-sources>
- <https://learn.microsoft.com/azure/sentinel/automate-incident-handling-with-automation-rules>
- <https://learn.microsoft.com/azure/sentinel/microsoft-sentinel-defender-portal>

---

## Step 1 · Thousands of alerts, one team

[calm] As identidades, a nuvem, a rede e os dispositivos da Contoso geram alarmes o tempo todo, e uma equipe de segurança pequena não consegue ler todos.
[600ms]
[curious] Ela precisa de um SIEM para enxergar, que coleta dados de segurança e detecta ameaças, e de um SOAR para agir, que automatiza a resposta de rotina.
[600ms]
[confident] O Microsoft Sentinel é um SIEM nativo da nuvem que também é uma plataforma SOAR. A Contoso e todos os dados aqui são fictícios.

## Step 2 · Connectors bring the signals in

[calm] O Sentinel começa vazio. Um conector de dados puxa sinais de uma fonte e reúne tudo em um só lugar.
[600ms]
[confident] Os conectores normalmente vêm em soluções do hub de conteúdo, então você instala a solução e depois configura o conector.
[600ms]
[serious] O suporte à antiga API HTTP Data Collector termina em 14 de setembro de 2026, então fontes personalizadas devem usar a API de Ingestão de Logs ou o Codeless Connector Framework.

## Step 3 · One workspace holds the data

[curious] O Sentinel não é um banco de dados separado. Você o ativa em um workspace do Log Analytics.
[600ms]
[calm] Todo conector grava nas tabelas desse workspace, e a retenção e a cobrança acompanham o workspace.
[600ms]
[reflective] Por isso, o lugar onde você coloca o workspace importa, e voltaremos a isso na etapa de design.

## Step 4 · Analytics rules look for threats

[calm] Uma regra de análise é uma pergunta fixa feita aos seus dados. Quando a resposta é sim, ela gera um alerta.
[600ms]
[confident] Cada tipo de regra pergunta de um jeito, e o melhor ponto de partida é um modelo de regra de uma solução do hub de conteúdo, que você depois ajusta.
[600ms]
[curious] No portal do Defender, a Microsoft recomenda usar detecções personalizadas para criar regras novas.

## Step 5 · A match becomes an alert with entities

[calm] Quando a consulta da regra retorna resultados acima do limite, a regra gera um alerta com gravidade de informativa a alta.
[600ms]
[confident] O mapeamento de entidades diz ao Sentinel quais campos são a conta, o endereço IP ou o host.
[600ms]
[impressed] Essas entidades são a base do agrupamento de incidentes, do grafo de investigação e da automação.

## Step 6 · Related alerts group into one incident

[curious] Alertas sobre as mesmas entidades são correlacionados em um único incidente.
[600ms]
[confident] É uma única pasta de caso, com gravidade, status e responsável, em vez de uma pilha de alertas separados.
[600ms]
[reassuring] Ele também guarda comentários, tarefas e um log de atividades, então a equipe inteira trabalha em um só lugar.

## Step 7 · Investigate the incident, hunt for the next one

[calm] O grafo de investigação mostra o que está conectado, em ordem de tempo, para o analista ver até onde o ataque chegou.
[600ms]
[curious] A caça é diferente. As consultas de caça fazem perguntas antes de qualquer alerta disparar, e os marcadores guardam as evidências que você encontrar.
[600ms]
[confident] Os notebooks ampliam a caça com Python, aprendizado de máquina e visualização.

## Step 8 · Automation does the routine work

[calm] Uma regra de automação reage a um incidente na hora, na ordem que você definir. Ela pode marcar, atribuir ou fechar incidentes sem nenhum playbook.
[600ms]
[confident] Quando uma tarefa precisa de mais etapas, ela passa para um playbook, criado como um fluxo de trabalho do Azure Logic Apps.
[600ms]
[serious] Anexar playbooks direto às regras de análise é o método antigo. Use uma regra de automação.

## Step 9 · Follow one attack through Sentinel

[curious] Vamos acompanhar o sequestro de conta fictício da Contoso, passo a passo, e ver o que o Sentinel faz em cada um.
[600ms]
[calm] Chega um sinal, uma regra dispara, um incidente se forma e a automação responde.
[600ms]
[reflective] Desabilitar a conta é contenção, não é o fim. O analista ainda investiga até onde o ataque se espalhou.

## Step 10 · Watch the whole picture: workbooks and UEBA

[calm] Os workbooks transformam os dados em painéis para a equipe. Os modelos prontos aparecem assim que uma fonte de dados é conectada, e você também pode criar os seus.
[600ms]
[intrigued] O UEBA aprende o que é normal para cada usuário e host, comparando a atividade com o histórico dele, com os pares e com a organização.
[600ms]
[confident] Depois, ele pontua o que foge do padrão. Ative-o e conecte fontes como o Microsoft Entra ID.

## Step 11 · Design it: placement, cost, tenants, access

[calm] Quatro decisões definem um design do Sentinel: onde fica o workspace, o que você ingere e guarda, quais tenants você cobre e quem pode fazer o quê.
[600ms]
[confident] Pense no Sentinel quando você precisa detectar e responder a ameaças em muitas fontes. Para a saúde operacional, pense nos alertas do Azure Monitor.
[600ms]
[reassuring] Atribua as funções do Sentinel no grupo de recursos que contém o workspace.

## Step 12 · Sentinel is moving to the Defender portal

[curious] O Sentinel tem uma casa nova. Ele está disponível de forma geral no portal do Microsoft Defender, com o mesmo workspace e o mesmo KQL.
[600ms]
[serious] O portal do Azure deixa de dar suporte a ele depois de 31 de março de 2027, então os clientes atuais devem planejar a transição.
[600ms]
[calm] A automação se comporta de um jeito um pouco diferente, porque os títulos dos incidentes podem mudar depois da correlação. Use os nomes e as tags das regras de análise como condições.

## Step 13 · Signals to incidents to action

[calm] O Sentinel transforma milhares de sinais brutos em poucos incidentes sobre os quais alguém pode agir.
[600ms]
[confident] Quatro movimentos fazem isso: conectar os dados, detectar com regras, investigar e caçar, e depois automatizar a resposta.
[600ms]
[proud] O Sentinel não aparece pelo nome em nenhum dos dois guias de estudo, mas o A Z 305 pede que você recomende log e monitoramento, e o A Z 104 cobre logs e alertas do Azure Monitor.
