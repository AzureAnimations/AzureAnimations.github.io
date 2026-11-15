# Narrator Script — GitHub · Configure Copilot Agents: Instructions, Custom Agents and Setup Steps

**Source animation:** [CustomAgentsAndInstructions.html](../../../journeys/GitHub/CustomAgentsAndInstructions.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/create-custom-agents>

---

## Step 1 · One Agent, Many Jobs

[calm] A Maya entrega a um agente genérico três tarefas diferentes: testes, documentação e revisão.
[600ms]
[concerned] Esse agente não conhece nenhuma das regras da Contoso e, se você não o limitar, ele pode usar todas as ferramentas disponíveis em qualquer tarefa.
[600ms]
[serious] O resultado é uma saída que não condiz com o jeito de trabalhar da equipe. Vamos resolver isso com configuração.

## Step 2 · Repository Instructions

[curious] A primeira solução é um arquivo que diz ao Copilot como a Contoso compila, testa e nomeia as coisas.
[600ms]
[confident] É um Markdown simples, na pasta do GitHub do repositório, escrito como regras em linguagem natural. Ele vale para toda solicitação feita neste repositório.
[600ms]
[encouraging] Diga como compilar, testar e validar o trabalho. O agente vai seguir isso sempre.

## Step 3 · Path and Agent Instructions

[calm] As regras mais específicas ficam mais perto do código.
[600ms]
[confident] Um arquivo de instruções por caminho vale para os arquivos que combinam com o padrão dele. Um arquivo de instruções do agente pode ficar em qualquer lugar do repositório, e vale o mais próximo.
[600ms]
[curious] Se um caminho combina e existe um arquivo para o repositório inteiro, o Copilot usa os dois. Você também pode excluir um arquivo por caminho do agente de nuvem ou do code review.

## Step 4 · A Custom Agent

[curious] Agora, dê um papel ao agente. Um agente personalizado é um arquivo Markdown com frontmatter.
[600ms]
[confident] Ele tem um nome, uma descrição da finalidade e um prompt que define como ele trabalha. A descrição é obrigatória.
[600ms]
[reflective] Os perfis ficam na pasta agents e terminam em dot agent dot md. O suporte nas IDEs JetBrains, no Eclipse e no Xcode está em preview pública.

## Step 5 · Choose Its Tools

[calm] A propriedade tools lista o que o agente pode usar. Um revisor que só pode ler e pesquisar não consegue alterar um arquivo.
[600ms]
[confident] Se você omitir a propriedade, ou usar um asterisco, o agente recebe todas as ferramentas. Uma lista habilita só as ferramentas dela.
[600ms]
[serious] Uma lista vazia desativa todas elas, e os nomes de ferramenta não reconhecidos são simplesmente ignorados.

## Step 6 · Pick the Model and the Scope

[calm] O modelo é opcional. Se você não definir, o agente herda o modelo padrão.
[600ms]
[confident] O local do arquivo decide quem pode usar o agente: um repositório, uma organização ou um enterprise. Os agentes da organização ficam em uma pasta especial, no repositório dot github da organização.
[600ms]
[curious] Se o mesmo nome existir em dois níveis, vale o nível mais baixo.

## Step 7 · Copilot Setup Steps

[calm] Agora, o ambiente. Um arquivo de workflow com um único job chamado copilot setup steps prepara tudo antes de o agente começar.
[600ms]
[confident] Essas etapas rodam no GitHub Actions, então valem para as sessões que rodam lá, e não para as sessões em sandbox na nuvem.
[600ms]
[serious] Se uma etapa falhar, o Copilot pula o resto e começa com o que tem.

## Step 8 · Scope to a Repository and a Branch

[calm] Os arquivos do agente ficam na branch padrão, então faça antes o merge do perfil e do arquivo das etapas de configuração nela.
[600ms]
[confident] Uma sessão começa em um repositório, e o Copilot cria uma branch nova a partir da branch base que você escolher.
[600ms]
[reassuring] O resultado é um pull request para essa branch base. Em um sandbox na nuvem, as sessões podem abranger repositórios de uma mesma organização.

## Step 9 · Invoke It

[curious] Há várias formas de iniciar o seu agente personalizado. Escolha-o ao atribuir uma issue ou ao iniciar uma tarefa.
[600ms]
[confident] Em um pull request, mencione o Copilot para pedir mudanças. Em um workflow, a API de issues aceita um agente personalizado e uma branch base, e isso é um recurso em preview.
[600ms]
[encouraging] Você também pode escolhê-lo no menu da aba de agentes ou usar o comando agent no Copilot CLI.

## Step 10 · Test the Agent

[calm] Teste o agente com uma tarefa pequena que você consiga conferir.
[600ms]
[curious] Leia o resultado. Quando o Copilot abre um pull request, ele indica qual agente personalizado foi usado.
[600ms]
[determined] Se estiver errado, corrija as instruções em vez da saída e rode de novo.

## Step 11 · Recap: The Files That Make an Agent

[calm] Quatro coisas formam um agente. As instruções definem as regras, e o perfil define o papel e as ferramentas.
[600ms]
[confident] As etapas de configuração deixam o ambiente pronto, e o escopo define o repositório, a branch base e como o agente é iniciado.
[600ms]
[proud] O guia de estudo do G H 600 lista isso em implementar o uso de ferramentas e a interação com o ambiente.
