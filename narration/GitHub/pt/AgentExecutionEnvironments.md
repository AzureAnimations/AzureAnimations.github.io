# Narrator Script — GitHub · Where the Agent Runs: Environments, Firewalls and Safe Failure

**Source animation:** [AgentExecutionEnvironments.html](../../../journeys/GitHub/AgentExecutionEnvironments.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/training/modules/agent-tooling-mcp-execution-environments/>

---

## Step 1 · Three places an agent can run

[calm] O Ravi passa a issue da Maya para um agente. Primeiro, decida onde ele vai rodar, porque isso define o que ele pode acessar e quem cuida da máquina.
[600ms]
[confident] São três lugares: o seu laptop, um runner do Actions ou um sandbox na nuvem. O sandbox é um ambiente Linux isolado que o GitHub cria e gerencia para a sessão.
[600ms]
[serious] Você escolhe onde a sessão roda quando ela começa, e depois não dá mais para mudar.

## Step 2 · A short-lived environment, set up first

[calm] No Actions, o agente de nuvem trabalha em um ambiente novo e temporário.
[600ms]
[confident] Antes, um arquivo de configuração prepara o ambiente, instalando as ferramentas e as dependências de que o agente precisa para compilar e testar. É um workflow comum, com um único job, e só vale na branch padrão.
[600ms]
[reassuring] Se uma etapa falhar, o agente pula as etapas de configuração que faltam e começa com o que tem.

## Step 3 · The firewall: allowed hosts only

[curious] Por padrão, um firewall limita o acesso do agente à internet.
[600ms]
[confident] Os hosts de que o Copilot precisa para o GitHub são sempre permitidos, e uma lista recomendada cobre registros de pacotes e outros hosts comuns. Proprietários e administradores do repositório podem adicionar mais, e as novas sessões já usam essas mudanças. Todo o resto é bloqueado e informado no pull request.
[600ms]
[serious] O firewall cobre os comandos que o agente executa, não os servidores MCP nem as etapas de configuração, e não é uma solução de segurança completa.

## Step 4 · Different limits per environment

[curious] Desenvolvimento, teste e produção não devem se comportar do mesmo jeito. Escolha um para comparar.
[600ms]
[confident] Um environment é uma etapa com nome, com segredos e regras de proteção próprios. Com revisores obrigatórios, uma pessoa precisa aprovar antes de o job rodar, então uma implantação pode ficar esperando.
[600ms]
[calm] O agente também tem seus próprios segredos e variáveis, definidos por repositório ou por organização.

## Step 5 · Start an agent from a workflow

[curious] Um workflow pode rodar o Copilot CLI em um runner do Actions, sem ninguém no teclado.
[600ms]
[confident] Primeiro vem um gatilho, depois a preparação do job, a instalação do CLI e a autenticação com um token guardado em um segredo. Por último, ele executa um prompt e lista as ferramentas que pode usar.
[600ms]
[reflective] O job recebe só as permissões mínimas de que precisa. Para a maioria das automações, o GitHub recomenda os Agentic Workflows, que estão em preview.

## Step 6 · Branches and pull requests it may create

[calm] O agente pode criar o trabalho, mas quem decide o que vai para produção é uma pessoa.
[600ms]
[confident] Ele faz push em uma branch própria, ou na branch do pull request em que foi pedido para trabalhar, e abre um pull request em rascunho. Uma pessoa revisa, marca como pronto e faz o merge.
[600ms]
[reassuring] As proteções de branch continuam valendo, e, por padrão, os workflows dele esperam até que alguém os aprove.

## Step 7 · When a step fails

[concerned] As coisas vão falhar, e isso é esperado.
[600ms]
[confident] O log da sessão registra cada comando e a saída dele, além do raciocínio e das ferramentas do agente. Leia primeiro o comando, a saída e o código de saída.
[600ms]
[calm] Depois, escolha o próximo passo: tentar de novo, reverter ou escalar.

## Step 8 · Retry, with a limit

[calm] Tentar de novo é uma segunda chance, não um loop sem fim.
[600ms]
[confident] Defina um número fixo de tentativas, espere um tempo entre elas e pare no limite. Só repita etapas que não causam problema se rodarem duas vezes.
[600ms]
[serious] Quando as tentativas acabarem, pare e passe para uma pessoa. Esse é um padrão que você escreve no script, não uma configuração pronta.

## Step 9 · Roll back

[serious] Se uma mudança já mesclada causar dano, você precisa desfazê-la.
[600ms]
[confident] Um revert cria um novo pull request que desfaz o commit de merge, então a correção passa pela mesma revisão e pelas mesmas verificações de qualquer alteração. Para isso, você precisa de permissão de escrita.
[600ms]
[calm] Se houver conflito, reverta pelo Git. Quando o pull request do agente for fechado ou mesclado, exclua a branch dele.

## Step 10 · Escalate to a person

[calm] Quando o limite for atingido ou o próximo passo não estiver claro, passe para uma pessoa.
[600ms]
[confident] Uma boa passagem de bastão diz o que foi pedido, o que foi tentado, qual foi o erro e o que mudou. E liga o log da sessão ao pull request.
[600ms]
[encouraging] Aí a pessoa pode guiar a sessão em andamento com um novo prompt ou assumir a branch.

## Step 11 · Trace every action

[curious] Quem mudou isso, e por quê? Três registros respondem.
[600ms]
[confident] O pull request guarda o histórico do que foi pedido, revisado e mesclado. O commit tem o Copilot como autor, a pessoa como coautora, e é assinado. Ele aponta para o log da sessão.
[600ms]
[reassuring] O log da sessão mostra o raciocínio e as ferramentas do agente, e os administradores também recebem eventos no log de auditoria.

## Step 12 · Recap: from error to escalation

[calm] Antes de rodar, decida onde ele vai rodar e, depois, as etapas de configuração, o firewall, os limites do environment, o workflow e as ações permitidas.
[600ms]
[confident] Quando falhar, leia o erro, tente de novo dentro de um limite, reverta e escale com os fatos.
[600ms]
[proud] Sempre rastreie tudo pelo pull request, pelo commit e pelo log da sessão. Isso cobre as habilidades de ambiente do G H 600.
