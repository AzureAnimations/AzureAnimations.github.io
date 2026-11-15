# Narrator Script — GitHub · Review with Copilot: Pull Request Summaries and Review Standards

**Source animation:** [CopilotCodeReview.html](../../../journeys/GitHub/CopilotCodeReview.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-300>

---

## Step 1 · A Pull Request Nobody Wants to Read

[calm] Na Contoso, a Maya abre um pull request com quarenta arquivos alterados e a descrição vazia.
[600ms]
[concerned] O Ravi precisa montar a história só pelo código, tentando adivinhar o que mudou e por quê.
[600ms]
[curious] Quem revisa precisa da história antes dos detalhes. Então vamos pedir ao Copilot que escreva o resumo e só depois revisar o código.

## Step 2 · Generate a Summary

[confident] Na caixa de descrição, a Maya abre o menu do Copilot e escolhe Summary.
[600ms]
[calm] O Copilot ignora qualquer texto que já esteja na caixa, então ela começa com a caixa vazia.
[600ms]
[reassuring] Depois, ela lê o rascunho, acrescenta o próprio contexto e só então publica. O resumo é um ponto de partida, não a palavra final.

## Step 3 · Ask Copilot to Review

[calm] No pull request, a Maya abre Reviewers na barra lateral direita e clica em Request ao lado do Copilot.
[600ms]
[curious] É o mesmo gesto que ela faria para pedir a revisão de um colega. O Copilot lê o pull request e deixa os comentários dele.
[600ms]
[confident] Depois que chegam novos commits, ela pode usar o botão de nova solicitação ao lado do Copilot para uma nova rodada de revisão.

## Step 4 · Read the Comments

[calm] Cada comentário fica em uma linha específica e traz uma gravidade: High, Medium ou Low.
[600ms]
[confident] Quando dá, o Copilot inclui uma sugestão de mudança que você pode aplicar com um commit ou juntar a um lote com outras.
[600ms]
[serious] Repare no tipo de revisão. Por padrão, é uma revisão Comment, não uma aprovação nem um pedido de mudanças. Você pode responder e resolver, mas o Copilot não lê as suas respostas.

## Step 5 · Suggestions Versus Your Judgment

[calm] O Copilot sugere, e a Maya decide, comentário por comentário.
[600ms]
[confident] Ela pode aplicar uma sugestão do jeito que está, mudar o código ela mesma e depois fazer o commit, ou resolver a conversa quando ela simplesmente não se aplica.
[600ms]
[serious] O Copilot pode apontar problemas que não existem, e uma nova revisão pode repetir um comentário que você já resolveu. Todo comentário precisa de uma pessoa.

## Step 6 · Set the Review Standard

[curious] Repetir o mesmo feedback na mão cansa. Por isso, a equipe escreve as regras de revisão em arquivos de instruções no repositório.
[600ms]
[confident] Há um arquivo para o repositório inteiro, arquivos específicos por caminho, que valem para certas pastas, e um arquivo agents na raiz.
[600ms]
[reassuring] O Copilot lê esses arquivos na branch que está em revisão, então você pode testar uma mudança de regra no mesmo pull request. Regras curtas e específicas funcionam melhor.

## Step 7 · See the Standard at Work

[curious] Aqui está o mesmo pull request, revisado antes e depois do arquivo de instruções. Mude a chave para comparar.
[600ms]
[impressed] Antes, os comentários são genéricos e serviriam para qualquer código. Depois, eles citam as regras da própria equipe.
[600ms]
[serious] Um cuidado. As instruções orientam o Copilot, mas não garantem nada, e ele pode ignorar uma regra. Continue lendo os comentários dele.

## Step 8 · Automatic Review

[calm] Ninguém deveria precisar lembrar de pedir. Um ruleset do repositório pode solicitar o Copilot em todo pull request.
[600ms]
[confident] Você encontra isso em Settings, Rulesets, depois um novo branch ruleset, e marca a opção para solicitar automaticamente o Copilot code review.
[600ms]
[reassuring] Ative a revisão de novos pushes, senão o Copilot revisa o pull request uma única vez. Os pull requests em rascunho são opcionais. Sem um ruleset, o Copilot só revisa quando é solicitado.

## Step 9 · Organization Policy

[calm] Se as pessoas recebem o Copilot por uma organização, a organização precisa antes ativar a política de Copilot code review.
[600ms]
[confident] Ela fica nas configurações de política do Copilot da organização e vale para as revisões no GitHub dot com e no GitHub Mobile.
[600ms]
[curious] Os rulesets da organização também podem solicitar revisões automáticas em todos os repositórios cujo nome siga um padrão.

## Step 10 · What It Can Miss

[serious] O Copilot deixa uma revisão Comment e, por padrão, ela não conta como aprovação.
[600ms]
[concerned] Ele pode errar, deixar passar problemas reais ou ignorar as suas instruções.
[600ms]
[determined] O Copilot só pode deixar revisões de aprovação se as configurações do repositório, da organização e do enterprise permitirem, e isso é uma escolha deliberada. O Copilot complementa a revisão humana. Quem dá a palavra final ainda é uma pessoa.

## Step 11 · Recap: A Review Loop with Copilot and a Person

[calm] Antes da revisão, um resumo do Copilot conta a história. Durante a revisão, o Copilot comenta e você decide.
[600ms]
[confident] Em volta da revisão, padrões em arquivos de instruções, um ruleset e uma política da organização mantêm o ciclo consistente.
[600ms]
[proud] A decisão continua sendo de uma pessoa. Para o exame G H 300, esses são os tópicos de code review dentro de usar os recursos do GitHub Copilot.
