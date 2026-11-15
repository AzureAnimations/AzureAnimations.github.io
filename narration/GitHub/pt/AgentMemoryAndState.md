# Narrator Script — GitHub · Agent Memory and State: Remember, Resume and Avoid Drift

**Source animation:** [AgentMemoryAndState.html](../../../journeys/GitHub/AgentMemoryAndState.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/training/modules/agent-tooling-mcp-execution-environments/>

---

## Step 1 · The agent that forgot

[calm] Na primeira sessão, o agente lê o código, define o limite e escreve os testes.
[600ms]
[concerned] A segunda sessão começa com o contexto vazio, sem lugar onde guardar o que foi aprendido. Ela refaz o mesmo trabalho.
[600ms]
[serious] O custo é esforço desperdiçado e uma decisão que pode mudar sem ninguém perceber.

## Step 2 · Short-term, long-term, external

[curious] Escolha a prateleira conforme o tempo que um fato precisa durar e quem precisa dele.
[600ms]
[confident] Curto prazo é o contexto desta sessão. Longo prazo é o Copilot Memory, para fatos e preferências guardados para as próximas sessões. Externo são os arquivos, as issues e os pull requests do repositório.
[600ms]
[reflective] Nenhuma prateleira é a melhor. Use arquivos externos para as decisões que as pessoas precisam ler e revisar.

## Step 3 · Copilot Memory

[calm] O Copilot Memory guarda fatos sobre um repositório, com citações, e as suas próprias preferências.
[600ms]
[confident] Os fatos do repositório são compartilhados com os colaboradores e usados só nesse repositório. Suas preferências são só suas e acompanham você entre os repositórios.
[600ms]
[curious] O Copilot cria as memórias sozinho enquanto trabalha. Você pode excluir uma nas configurações, mas não pode editar, e um fork não herda as memórias.

## Step 4 · Keep only what the task needs

[serious] Um contexto cheio demais prejudica a resposta. Um contexto maior não é um contexto melhor.
[600ms]
[confident] Mantenha os arquivos, os critérios e as decisões de que a tarefa depende. Limpe os chats antigos, as perguntas sem relação e as saídas enormes, usando comandos para ver, limpar ou resumir.
[600ms]
[reassuring] O Copilot CLI resume o histórico automaticamente conforme a janela enche, e a memória deve guardar só o que continua verdadeiro.

## Step 5 · Expiry and reset

[calm] Uma memória não é verdadeira para sempre.
[600ms]
[confident] Ela expira depois de um período sem reforço. Quando o Copilot confirma que ela ainda vale, o relógio recomeça. Só consultar a memória não reinicia a contagem.
[600ms]
[encouraging] Os proprietários podem definir a expiração, e vale o menor valor se a organização e o enterprise forem diferentes. Você pode excluir uma memória a qualquer momento nas configurações.

## Step 6 · Durable artifacts

[calm] Registre as decisões onde elas durem mais do que o chat.
[600ms]
[confident] Um arquivo de plano lista as etapas e quais já foram concluídas. Uma issue guarda a tarefa e os critérios de aceitação. Um pull request registra o que mudou, por quê e as verificações.
[600ms]
[reflective] O Copilot CLI salva um plano na pasta da sessão, então mantenha no repositório o que a equipe precisa compartilhar.

## Step 7 · Resume the work

[curious] Uma nova sessão lê os artefatos: o plano, a issue e o pull request.
[600ms]
[confident] Ela pula tudo o que já foi feito e combinado, acha o primeiro item sem marca e segue em frente.
[600ms]
[calm] No Copilot CLI, você pode continuar uma sessão anterior ou começar do zero e apontar o agente para os artefatos. De qualquer forma, confira o plano primeiro.

## Step 8 · Drift

[curious] Numa execução longa, cada passo parece razoável sozinho.
[600ms]
[concerned] Mas, juntos, eles saem do plano. A execução termina num lugar aonde o plano nunca foi, porque ninguém comparou as pequenas escolhas com ele.
[600ms]
[serious] O sinal é uma diferença entre o trabalho e o plano original. O drift é um padrão, não uma configuração.

## Step 9 · Detect and correct drift

[calm] Compare o trabalho com o plano em pontos de verificação, e não só no final.
[600ms]
[confident] Sinalize toda mudança que o plano não prevê. Depois, redirecione: diga ao agente para reverter e continuar.
[600ms]
[encouraging] Você pode enviar um novo prompt enquanto o Copilot ainda trabalha e revisar o diff antes de criar um pull request.

## Step 10 · Share state across tools

[curious] O que uma ferramenta aprende pode ajudar as outras.
[600ms]
[confident] A memória pertence a um repositório, e não a uma ferramenta só. As instruções, a issue, o plano e o pull request são visíveis para todas as ferramentas, então todas enxergam o mesmo cenário.
[600ms]
[calm] Uma sessão iniciada na nuvem também pode continuar em outro cliente.

## Step 11 · Conflicting and stale context

[concerned] Quando duas fontes discordam, em geral uma delas está desatualizada.
[600ms]
[confident] Confira com o código atual e depois corrija a fonte antiga. O Copilot confere as citações de uma memória com a branch atual, mas isso é uma avaliação, não uma garantia.
[600ms]
[serious] O Copilot CLI combina os arquivos de instruções sem uma ordem geral, então remova a linha antiga em vez de torcer para a nova prevalecer.

## Step 12 · Recap

[calm] Aqui vai uma lista de verificação para o trabalho com agentes. Lembre-se: escolha a prateleira, defina o escopo e defina a expiração.
[600ms]
[confident] Persista: anote as decisões, retome a partir delas e verifique se há drift.
[600ms]
[proud] Mantenha tudo correto compartilhando o estado e removendo o contexto desatualizado ou conflitante. Isso cobre o objetivo do G H 600 sobre gerenciar memória, estado e execução.
