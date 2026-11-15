# Narrator Script — Monitor · Alerts and Action Groups

**Source animation:** [AlertsAndActionGroups.html](../../../journeys/Monitor/AlertsAndActionGroups.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/azure-monitor/alerts/alerts-overview>
- <https://learn.microsoft.com/azure/azure-monitor/alerts/alerts-types>
- <https://learn.microsoft.com/azure/azure-monitor/alerts/action-groups>
- <https://learn.microsoft.com/azure/azure-monitor/alerts/alerts-processing-rules>

---

## Step 1 · Something broke at 3 a.m.

[serious] O checkout da Contoso Retail caiu durante a noite. Mina, a engenheira de plantão, estava dormindo, e nada a avisou.
[600ms]
[curious] Então, quem deve saber, como e com que frequência?
[600ms]
[confident] Um alerta é o Azure Monitor avisando uma pessoa ou um script de que os seus dados indicam que algo está errado. Você fica sabendo pelo Azure primeiro, e não pelos clientes.

## Step 2 · What can Azure Monitor watch?

[calm] Um alerta começa com um sinal, e cada tipo de sinal tem o seu próprio tipo de alerta.
[600ms]
[confident] Os alertas de métrica avaliam números em intervalos regulares. Os alertas de busca em logs executam uma consulta KQL. Os alertas de log de atividades correspondem a um evento da plataforma.
[600ms]
[reassuring] Os alertas do Prometheus executam PromQL. Escolher o tipo certo já é metade do trabalho.

## Step 3 · Anatomy of an alert rule

[calm] Uma regra de alerta observa um sinal em alguns recursos. Quando a condição é atendida, um alerta dispara.
[600ms]
[confident] O alerta disparado então aciona os grupos de ação que você escolheu.
[600ms]
[curious] Se uma regra observa vários recursos, cada um é avaliado separadamente e dispara o seu próprio alerta. Os alertas disparados são somente leitura e ficam armazenados por trinta dias.

## Step 4 · A threshold: fixed or learned

[calm] Um limite estático é um número que você escolhe. Use quando você souber o limite exato.
[600ms]
[intrigued] Um limite dinâmico aprende o padrão normal a partir do histórico da métrica, então o batch job normal das três da manhã deixa de acordar alguém.
[600ms]
[confident] Ele pode alertar acima de um limite superior ou abaixo de um limite inferior. Os números na tela são fictícios.

## Step 5 · Action group: who gets told, what runs

[curious] Um grupo de ação é uma lista salva de notificações e ações automáticas. A regra de alerta só aponta para ele.
[600ms]
[confident] Os destinatários de e-mail são verificados uma vez, com uma senha de uso único, então teste o grupo pelo portal antes de confiar nele.
[600ms]
[reassuring] Webhooks seguros usam o Microsoft Entra ID. E SMS e voz não estão disponíveis em todos os países ou regiões.

## Step 6 · One action group, many rules

[calm] Regras diferentes podem apontar para o mesmo grupo de ação.
[600ms]
[confident] Duas regras que notificam os mesmos três engenheiros compartilham um único grupo. Mude a lista de plantão uma vez, e todas as regras acompanham.
[600ms]
[reassuring] Os grupos de ação também atendem o Azure Service Health e o Azure Advisor, não só as regras de alerta.

## Step 7 · One alert shape for every type

[curious] Antes, os alertas de métrica, de log e de log de atividades enviavam payloads diferentes.
[600ms]
[confident] O esquema de alerta comum dá ao e-mail e à automação uma única estrutura para ler. Ative por destinatário no grupo de ação.
[600ms]
[calm] Use a seção essentials para direcionar alertas por grupo de recursos ou por severidade. Os alertas do VM insights não oferecem suporte a isso.

## Step 8 · The life of an alert

[calm] Enquanto o problema durar, um alerta stateless continua disparando toda vez que a condição é atendida.
[600ms]
[confident] Um alerta stateful dispara uma vez, não envia mais nada e, quando a condição se resolve, envia uma notificação de resolvido.
[600ms]
[serious] Os alertas de log de atividades são sempre stateless. À parte, você marca a sua própria resposta, e ela nunca muda sozinha.

## Step 9 · Alert processing rules

[curious] Uma regra de processamento altera os alertas conforme eles disparam. Você pode silenciar notificações durante uma manutenção ou adicionar um grupo de ação a vários alertas de uma só vez.
[600ms]
[confident] Antes, elas se chamavam regras de ação. O escopo delas precisa estar na mesma assinatura da regra.
[600ms]
[concerned] Uma regra nova ou alterada pode levar até trinta minutos para começar a funcionar, então se planeje para isso.

## Step 10 · Build an alert: pick a symptom

[excited] Hora de montar um alerta. Escolha o que deu errado.
[600ms]
[confident] Você vai ver o sinal, a condição e o grupo de ação que a Contoso usaria.
[600ms]
[calm] As severidades e os nomes dos grupos são exemplos, não regras. Orçamentos também podem acionar um grupo de ação, mas só notificam. Eles não param os gastos.

## Step 11 · Page fewer people, page them better

[serious] Fadiga de alertas significa que alertas reais acabam ignorados. Cada alavanca filtra o ruído antes que ele chegue ao celular da Mina.
[600ms]
[confident] As severidades de zero a quatro você mesmo define. Reserve voz e SMS para os níveis mais altos e mande o resto para o e-mail ou um painel.
[600ms]
[reassuring] O custo acompanha o que você monitora, então confira a página de preços do Azure Monitor para ver os valores atuais.

## Step 12 · Alerts and action groups: all in one

[calm] Um sinal alimenta uma regra. Uma regra de processamento molda o alerta, e um grupo de ação o entrega.
[600ms]
[confident] Para as provas: o A Z 104 lista regras de alerta, grupos de ação e regras de processamento. O A Z 305 cobre o design de soluções de monitoramento, e o A I 200 cobre o KQL por trás de um alerta de busca em logs.
[600ms]
[proud] Mantenha o ruído baixo, e a Mina dorme tranquila, a não ser pelo que realmente importa.
