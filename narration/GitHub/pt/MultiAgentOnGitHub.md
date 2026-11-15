# Narrator Script — GitHub · Several Agents, One Repository

**Source animation:** [MultiAgentOnGitHub.html](../../../journeys/GitHub/MultiAgentOnGitHub.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-600>

---

## Step 1 · Three Agents, One Repository

[calm] A equipe de meteorologia da Contoso entrega um backlog para três agentes, e a Maya quer tudo pronto rápido.
[600ms]
[curious] Cada agente recebe a sua tarefa, mas todos compartilham a mesma base de código, os mesmos branches e a mesma lista de pull requests.
[600ms]
[serious] É aí que os problemas começam. O trabalho pode colidir, ser duplicado ou falhar sem ninguém perceber.

## Step 2 · Choose a Pattern

[calm] Três issues, três agentes. Antes de começar, escolha um padrão que combine com a forma como as issues dependem umas das outras.
[600ms]
[confident] Um orquestrador divide o objetivo em tarefas, roda as independentes em paralelo e depois revisa e combina os resultados. Um hand-off passa um item para o próximo especialista.
[600ms]
[reflective] Se o trabalho é de fato sequencial, agentes em paralelo ajudam muito pouco.

## Step 3 · Isolate Parallel Work

[confident] Dê a cada agente o seu próprio branch. Assim, o trabalho em paralelo não se sobrescreve, até que um pull request junte tudo.
[600ms]
[calm] No GitHub, o Copilot cloud agent faz push para um branch por tarefa e abre um pull request para ela. Na sua máquina, um git worktree dá a cada agente uma pasta própria.
[600ms]
[reassuring] De qualquer jeito, quem faz o merge final é uma pessoa.

## Step 4 · Overlapping Changes

[curious] Aqui, dois agentes editam a mesma linha do mesmo arquivo. Cada pull request, sozinho, parece estar certo.
[600ms]
[calm] O Git junta sozinho arquivos diferentes ou linhas diferentes. Mas edições diferentes na mesma linha precisam de ajuda.
[600ms]
[intrigued] É na aba Files changed de cada pull request que você enxerga a sobreposição.

## Step 5 · Resolve Conflicts

[serious] Um conflito bloqueia o merge, porque o Git não consegue escolher com segurança entre duas edições.
[600ms]
[confident] Defina a ordem dos merges: um pull request entra primeiro, e o seguinte é atualizado. Pergunte ao dono do arquivo pelo CODEOWNERS. O Copilot pode ajudar a partir da caixa de merge.
[600ms]
[reassuring] No fim, é uma pessoa que escolhe o texto final.

## Step 6 · Duplicated and Contradictory Work

[curious] Agora, leia a lista de pull requests procurando dois sinais de alerta. Dois pull requests que fecham a mesma issue são duplicados.
[600ms]
[concerned] Dois que discordam são contraditórios, como quilômetros por hora no código e milhas por hora no guia.
[600ms]
[determined] Fique com um, feche o outro e anote o motivo. Qualificadores de busca ajudam a filtrar a lista.

## Step 7 · Leave an Audit Trail

[calm] As decisões e as notas de hand-off de cada agente ficam registradas no pull request dele, então qualquer pessoa pode revisar depois.
[600ms]
[confident] Os commits do Copilot cloud agent são assinados, listam como coautor quem iniciou a tarefa e trazem um link para o log da sessão. Esse log mostra o raciocínio dele e as ferramentas que usou.
[600ms]
[serious] Os logs ajudam, mas não substituem a sua própria revisão.

## Step 8 · Spot a Stalled or Failed Run

[calm] Uma execução saudável continua gerando linhas de log. Compare cada sessão com um limite que o seu time define.
[600ms]
[concerned] Fique de olho em três tipos de problema. Falha quer dizer que uma verificação termina com erro. Parcial quer dizer que parou cedo, com alguns commits já enviados. Travada quer dizer que não há nenhuma linha de log nova há tempo demais.
[600ms]
[reassuring] Abra uma sessão no painel de agentes para ver o progresso e o log.

## Step 9 · Recover: Roll Back and Hand On

[serious] Quando uma execução dá errado, primeiro pare. Parar encerra a execução e mantém os commits que já foram enviados.
[600ms]
[confident] Depois, reverta só o trabalho daquele agente. Reverter um pull request já mesclado abre um novo que desfaz o anterior, então o histórico continua.
[600ms]
[reassuring] Por fim, passe a tarefa adiante com anotações. Quem faz o merge são as pessoas, porque o Copilot não pode aprovar o próprio pull request.

## Step 10 · Add an Agent

[curious] Precisa de um especialista? Adicione um novo arquivo de perfil, escrito em Markdown.
[600ms]
[calm] Os agentes que já estão trabalhando continuam com seus próprios arquivos e branches. Dê ao novo uma função clara e só as ferramentas de que ele precisa.
[600ms]
[optimistic] Faça o merge do arquivo e teste com uma tarefa antes de passar a depender dele.

## Step 11 · Update, Replace or Retire an Agent

[calm] Para mudar um agente, altere o perfil dele por um pull request. O Git guarda todas as versões, e os pull requests e logs antigos continuam onde estão.
[600ms]
[confident] Uma tarefa continua usando a versão com que começou. Para substituir um agente, traga o novo primeiro e só depois aposente o antigo.
[600ms]
[reflective] Aposentar é apagar o arquivo, mas manter o rastro. As sessões podem ser arquivadas e continuam legíveis.

## Step 12 · Recap: A Multi-Agent Run, Reviewed After the Fact

[calm] Olhe de novo para a execução da Contoso com seis perguntas, e todas as respostas estão no repositório.
[600ms]
[confident] Planeje com um padrão e um branch para cada agente. Fique de olho em conflitos, duplicatas e travamentos. Guarde os pull requests, os commits e os logs de sessão.
[600ms]
[proud] Essa é a área de habilidade de orquestração e coordenação multiagente do guia de estudo do G H 600.
