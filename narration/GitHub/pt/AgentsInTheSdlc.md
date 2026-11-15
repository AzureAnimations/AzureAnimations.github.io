# Narrator Script — GitHub · Agents in the SDLC: Plan, Act, Evaluate

**Source animation:** [AgentsInTheSdlc.html](../../../journeys/GitHub/AgentsInTheSdlc.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-cloud-agent>

---

## Step 1 · Assistant or agent

[calm] Conheça a Maya, da Contoso. Ela pode usar o Copilot de duas formas, e as duas são úteis.
[600ms]
[curious] Um assistente responde a um prompt com uma sugestão, e você mesmo aplica e confere. Um agente pesquisa, planeja, edita arquivos e roda testes por conta própria.
[600ms]
[confident] Então, com um agente, o seu papel muda. Em vez de fazer cada passo na mão, você revisa o resultado pronto.

## Step 2 · Where agents fit

[curious] Então, em que parte do ciclo de vida do software o agente deve trabalhar? Dê a ele as etapas bem delimitadas.
[600ms]
[confident] Ele pode pesquisar e planejar, corrigir bugs pequenos, adicionar testes e documentação, rodar verificações e abrir um pull request em rascunho. Com você ficam as prioridades, o design, os critérios de sucesso, as aprovações e o risco em produção.
[600ms]
[serious] Isto é um mapa para começar, não uma regra. Segurança, dados pessoais e resposta a incidentes normalmente ficam com uma pessoa.

## Step 3 · GitHub as the system of record

[calm] Tudo o que o agente faz fica registrado no GitHub, então a equipe sempre consegue ver o que aconteceu.
[600ms]
[confident] A issue guarda a tarefa. A branch mantém o trabalho do agente separado da branch padrão. O pull request é onde a pessoa decide.
[600ms]
[reassuring] Os commits têm o Copilot como autor e quem pediu como coautor, e cada um aponta para o log da sessão. Os administradores também recebem eventos no log de auditoria.

## Step 4 · Inputs, outputs and success criteria

[curious] Pense na issue como o prompt. O que entra, o que precisa sair e como alguém vai saber que funcionou?
[600ms]
[confident] Descreva o problema, os arquivos envolvidos e os limites. Diga o que o agente deve entregar e acrescente verificações que mostrem que o trabalho está pronto.
[600ms]
[encouraging] Critérios de aceitação claros e uma indicação dos arquivos certos ajudam muito, embora o Copilot também consiga pesquisar no código sozinho.

## Step 5 · Plan before act

[calm] Antes de mexer em qualquer código, o agente escreve um plano que você pode ler.
[600ms]
[confident] Um bom plano é estruturado: o objetivo, os arquivos, as etapas, as verificações e o que fica fora do escopo. É uma proposta, não uma mudança no código.
[600ms]
[reassuring] A ação continua bloqueada até uma pessoa aprovar. Vocês combinam a abordagem antes de qualquer coisa ser escrita.

## Step 6 · Validate the plan

[curious] Agora uma pessoa lê o plano e decide. Experimente os dois botões.
[600ms]
[confident] Aprove, e o portão se abre para o agente agir. Devolva com um comentário, e o agente revisa o plano enquanto a ação continua bloqueada.
[600ms]
[reflective] Revisar um plano é barato. Corrigir uma mudança errada depois não é, então continue refinando até o plano refletir o que você quer.

## Step 7 · Act inside boundaries

[calm] Com o plano aprovado, o agente começa a trabalhar na própria branch.
[600ms]
[serious] Ele pode fazer push em uma branch do Copilot, ou na branch do pull request que pediram para ele atualizar, e em nenhum outro lugar. Ele não pode marcar um pull request como pronto, aprová-lo nem fazer o merge.
[600ms]
[reassuring] As proteções de branch e as verificações obrigatórias valem para o agente do mesmo jeito que valem para você.

## Step 8 · Evaluate the result

[curious] Quando o trabalho é enviado, as verificações e as varreduras rodam no pull request.
[600ms]
[confident] Por padrão, o agente confere o próprio código com o CodeQL, o secret scanning e uma verificação de advisories nas novas dependências, e o Copilot code review dá uma segunda opinião. Os workflows rodam depois que uma pessoa os aprova.
[600ms]
[serious] Então uma pessoa lê o diff e decide. Os logs da sessão não substituem a sua própria revisão e os seus testes.

## Step 9 · Governance by pull request

[calm] Quatro controles do repositório transformam "o agente abriu um pull request" em uma mudança revisada e aprovada.
[600ms]
[confident] Antes da revisão, um template faz as mesmas perguntas e os code owners pedem os revisores certos. Antes do merge, um ruleset exige aprovações e verificações aprovadas. Antes do deploy, um environment pode exigir revisores.
[600ms]
[reflective] Uma aprovação extra para os pull requests que o Copilot abre sem o nome de uma pessoa ainda está em preview pública.

## Step 10 · Anti-patterns and their fixes

[calm] Aqui estão três jeitos comuns de o trabalho com agentes dar errado. Cada um vem com um hábito que evita o problema.
[600ms]
[concerned] Uma tarefa vaga se resolve com uma issue bem delimitada e com critérios de aceitação. A falta de uma regra de parada se resolve com um limite e depois a passagem para uma pessoa.
[600ms]
[serious] Um merge sem revisão se resolve com revisão obrigatória, code owners e verificações. Esses são exemplos, não uma lista oficial.

## Step 11 · Recap: plan, act, evaluate

[calm] Um só ciclo, uma pessoa em cada portão, e o GitHub registra tudo.
[600ms]
[confident] Planeje definindo entradas, saídas e critérios de sucesso, e depois valide o plano. Aja na própria branch, sem direito de merge. Avalie com verificações, varreduras, revisão do diff e a governança do pull request.
[600ms]
[proud] Isso cobre as habilidades do G H 600 para encaixar um agente no ciclo de vida, de definir a tarefa dele até governar o pull request.
