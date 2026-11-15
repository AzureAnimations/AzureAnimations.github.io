# Narrator Script — GitHub · Guardrails and Autonomy Levels for Agents

**Source animation:** [AgentGuardrailsAndAutonomy.html](../../../journeys/GitHub/AgentGuardrailsAndAutonomy.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-600>
- <https://learn.microsoft.com/azure/machine-learning/concept-responsible-ai>

---

## Step 1 · Fast and safe

[calm] Toda equipe de agentes quer velocidade e segurança ao mesmo tempo. Com barreiras de proteção, dá para ter as duas.
[600ms]
[concerned] Sem verificações, uma mudança ruim chega à produção. Com uma pessoa em cada etapa, o trabalho fica parado esperando.
[600ms]
[confident] O objetivo da Contoso Delivery é pedir a opinião de uma pessoa só onde isso reduz o risco.

## Step 2 · Classify actions by risk

[curious] Antes de decidir quanta liberdade dar a um agente, classifique cada ação pelo dano que ela pode causar.
[600ms]
[calm] Faça três perguntas. Ela pode quebrar a entrega ou um serviço? Pode expor dados ou mudar quem tem acesso? Pode violar uma regra ou uma política?
[600ms]
[serious] A maior das três notas define o risco geral. Essas classificações são exemplos, e cada equipe classifica as suas.

## Step 3 · Autonomy levels

[calm] Pense na autonomia como um botão de ajuste. A cada passo para cima, o agente faz mais e a pessoa faz menos.
[600ms]
[confident] No nível um, o agente sugere e uma pessoa faz a mudança. No nível dois, ele pergunta antes de agir.
[600ms]
[reflective] Nos níveis três e quatro, uma pessoa revisa depois ou o agente age sozinho. É uma escala didática, não uma lista oficial.

## Step 4 · Match the level to the risk

[curious] Agora escolha o nível que combina com o risco. Escolha uma ação aqui e veja o nível dela aparecer.
[600ms]
[confident] Leituras e buscas têm risco baixo, então o agente age sozinho. Edições em uma branch têm risco médio, então uma pessoa revisa depois.
[600ms]
[serious] Fazer deploy ou gastar dinheiro exige aprovação antes. Excluir ou mudar uma política é só sugestão. Defina um nível para cada tipo de ação, e não um só para tudo.

## Step 5 · Actions that need a person

[calm] A maioria das ações é segura e pode seguir sem uma pessoa.
[600ms]
[serious] Mas algumas não dá para desfazer, e outras podem violar uma regra de conformidade. Nesses casos, quem decide é uma pessoa.
[600ms]
[reassuring] Manter essa lista curta é o que deixa todo o resto andar rápido.

## Step 6 · Require authorization

[curious] Agora ponha uma pessoa no caminho onde isso importa. Acompanhe aqui o caminho da mudança do agente até a produção.
[600ms]
[confident] Um ruleset ou uma proteção de branch pode exigir um pull request e aprovações. Os code owners precisam aprovar as mudanças nos arquivos deles. A aprovação do environment segura um job de deploy até que os revisores digam sim.
[600ms]
[reassuring] Esses são controles reais do GitHub.

## Step 7 · Block what must not happen

[serious] Algumas mudanças nunca podem acontecer, nem pelas mãos de um agente. Os rulesets impedem isso.
[600ms]
[confident] As regras podem exigir um pull request, proibir force push e exigir que as verificações passem antes do merge. Uma verificação de política obrigatória é um status check que você escreve para a sua própria política.
[600ms]
[reassuring] O agente está sujeito aos mesmos rulesets que uma pessoa.

## Step 8 · Least privilege for agents

[calm] Dê ao agente só o acesso de que a tarefa precisa, no menor espaço possível. Este é um agente de triagem que aplica rótulos em issues.
[600ms]
[confident] Defina as permissões do token no mínimo que a tarefa exige e liste só as ferramentas que o agente deve usar.
[600ms]
[reassuring] Ele começa em um repositório, faz push na própria branch e roda com o firewall ativado.

## Step 9 · Responsible AI standards

[curious] Escreva o padrão onde o agente vai ler, como nas instruções personalizadas do repositório. Depois, confira o resultado.
[600ms]
[calm] Os seis princípios da Microsoft são: equidade, confiabilidade e segurança, privacidade e proteção, inclusão, transparência e responsabilidade.
[600ms]
[serious] As instruções orientam o agente, mas quem confirma são as verificações e a revisão de uma pessoa.

## Step 10 · Too many approvals

[concerned] Cada pedido de aprovação custa tempo. Se forem demais, as pessoas param de ler.
[600ms]
[confident] Deixe as aprovações para as ações caras ou difíceis de desfazer. Tire-as das ações seguras e repetitivas. No VS Code, você pode limitar uma aprovação a um único uso, a uma sessão ou deixá-la valer sempre.
[600ms]
[serious] Reduzir os pedidos de aprovação não é o mesmo que liberar tudo.

## Step 11 · Recap: an autonomy matrix

[calm] Uma equipe, uma matriz. Cada ação tem um risco, um nível e uma barreira de proteção.
[600ms]
[confident] Classifique e atribua. Depois proteja: com uma pessoa nas mudanças sensíveis, bloqueios para quem quebra regras e privilégio mínimo. E mantenha tudo ágil, tirando as aprovações que não somam segurança.
[600ms]
[proud] Isso cobre a área de habilidade de implementar barreiras de proteção e responsabilização no guia de estudo do G H 600.
