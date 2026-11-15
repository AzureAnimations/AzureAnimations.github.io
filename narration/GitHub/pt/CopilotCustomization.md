# Narrator Script — GitHub · Teach Copilot Your Project: Instructions, Prompts and Spaces

**Source animation:** [CopilotCustomization.html](../../../journeys/GitHub/CopilotCustomization.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-300>

---

## Step 1 · Same Question, Different Answers

[curious] A Maya e o Ravi fazem a mesma pergunta ao Copilot e recebem respostas diferentes, com ferramentas e estilos diferentes.
[600ms]
[calm] Nada diz ao Copilot como a Contoso compila, testa e nomeia as coisas. Os padrões não estão escritos em um lugar que o Copilot consiga ler.
[600ms]
[reflective] Instruções compartilhadas melhoram a consistência, mas não garantem que todas as respostas sejam iguais.

## Step 2 · Repository Instructions

[calm] Um único arquivo Markdown no repositório diz ao Copilot como a Contoso compila, testa e nomeia as coisas.
[600ms]
[confident] Você escreve regras em linguagem natural, e elas valem para toda solicitação feita nesse repositório.
[600ms]
[encouraging] É o lugar mais simples para começar.

## Step 3 · Path-Specific Instructions

[curious] Um arquivo específico por caminho traz um padrão apply to, então as regras dele alcançam só os arquivos que combinam com o padrão.
[600ms]
[calm] Separe vários padrões com vírgulas. Se também existir um arquivo para o repositório inteiro, os dois são usados.
[600ms]
[reflective] Quais recursos do Copilot leem esses arquivos depende do cliente.

## Step 4 · Prompt Files

[calm] Salve como um arquivo de prompt uma tarefa que você repete.
[600ms]
[confident] Em vez de digitar tudo de novo, execute pelo chat digitando uma barra e o nome dele.
[600ms]
[curious] Ao contrário das instruções, que valem automaticamente, é você quem escolhe quando um arquivo de prompt roda.

## Step 5 · Copilot Spaces

[calm] Uma Space reúne a documentação, o código, as issues e as anotações de uma tarefa, junto com instruções de como usá-los.
[600ms]
[confident] As fontes podem ser arquivos, repositórios, pull requests, issues, uploads e anotações, e as fontes do GitHub se atualizam conforme mudam.
[600ms]
[curious] O Copilot responde a partir desse contexto, no Copilot Chat do GitHub.

## Step 6 · Share a Space

[calm] Quem pode abrir a Space depende de quem é o dono dela.
[600ms]
[confident] As Spaces da organização usam funções: admin, editor, viewer ou sem acesso. As Spaces pessoais podem ser privadas, compartilhadas com pessoas ou abertas a qualquer um que tenha o link.
[600ms]
[reassuring] Quem só visualiza vê apenas as fontes às quais já tem acesso.

## Step 7 · Spark: A Prompt Becomes an App

[calm] O Spark transformava uma ideia em linguagem simples em um pequeno aplicativo funcional, que dava para visualizar.
[600ms]
[serious] O GitHub o desativou. Ele deixou de receber novos aplicativos a partir de 4 de agosto de 2026, mas o guia de estudo ainda cita o nome.
[600ms]
[encouraging] Hoje, você cria do mesmo jeito com o Copilot no VS Code, no Copilot CLI ou no aplicativo GitHub Copilot.

## Step 8 · MCP: Connect an Outside Tool

[curious] Um servidor MCP permite que o Copilot use uma ferramenta ou uma fonte de dados fora do editor, como um rastreador de issues.
[600ms]
[confident] Você deixa de copiar detalhes para o chat. O MCP é um padrão aberto para conectar modelos a ferramentas e dados.
[600ms]
[serious] Aprove só as ações que você entende. As organizações podem permitir ou bloquear o MCP com uma política.

## Step 9 · Agent Sessions

[calm] Inicie uma sessão para uma tarefa e continue trabalhando enquanto ela roda.
[600ms]
[confident] Cada sessão é independente, com o próprio histórico, então você pode sair, voltar e retomar.
[600ms]
[reassuring] Archive mantém a sessão, mas a esconde. Delete a remove de vez.

## Step 10 · Sub-Agents

[curious] O agente principal pode passar uma tarefa clara a um sub-agent.
[600ms]
[confident] O sub-agent trabalha no próprio contexto e devolve um resultado curto, então o chat principal continua enxuto. Passe a ele o objetivo, o contexto, as ações permitidas e o resultado esperado.
[600ms]
[reflective] Delegar aumenta o uso do modelo, então uma consulta rápida muitas vezes é melhor perguntar direto.

## Step 11 · Pick the Right Tool

[curious] Combine a necessidade com a ferramenta. Escolha uma necessidade à esquerda e veja qual ferramenta se encaixa.
[600ms]
[confident] Regras permanentes são instruções. Uma tarefa salva é um arquivo de prompt, fontes compartilhadas são uma Space, uma ferramenta externa é um servidor MCP, e uma passagem de trabalho é uma sessão de agente.
[600ms]
[encouraging] Comece pela menor ferramenta que resolva. Um requisito pontual pode simplesmente ir na própria solicitação.

## Step 12 · Recap: What Goes Where

[calm] Os arquivos no repositório dão ao Copilot regras permanentes e tarefas salvas.
[600ms]
[confident] Spaces, MCP, sessões e sub-agents trazem fontes, ferramentas e trabalho em segundo plano.
[600ms]
[proud] Essa é a área de usar os recursos do GitHub Copilot no guia de estudo do G H 300. O Spark ainda aparece lá, mesmo desativado.
