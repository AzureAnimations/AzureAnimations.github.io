# Narrator Script — GitHub · Copilot in the Command Line

**Source animation:** [CopilotInTheCli.html](../../../journeys/GitHub/CopilotInTheCli.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-300>

---

## Step 1 · Why the terminal needs a partner

[calm] O Ravi esquece o comando exato do git. Aí ele sai do terminal para pesquisar e perde o fio da meada.
[600ms]
[curious] Para a maioria dos desenvolvedores, o custo é real: abas abertas, pesquisa e perda de foco.
[600ms]
[optimistic] A ideia é simples. Pergunte exatamente onde você trabalha.

## Step 2 · What Copilot CLI is

[calm] O GitHub Copilot CLI traz o Copilot para o seu terminal.
[600ms]
[confident] Você descreve o que quer com palavras simples, e o Copilot responde, escreve código e trabalha com o GitHub ponto com.
[600ms]
[reflective] A resposta na tela é uma ilustração. O resultado real varia.

## Step 3 · Install it

[calm] Primeiro, você precisa de uma assinatura do Copilot, e a sua organização não pode ter desativado o CLI.
[600ms]
[confident] Depois, instale com o WinGet, o Homebrew ou o npm.
[600ms]
[reassuring] Também há um script de instalação para macOS e Linux.

## Step 4 · Sign in and start a session

[calm] Execute o copilot em uma pasta em que você confia.
[600ms]
[curious] Entre com o comando slash login. No computador, o padrão é o fluxo pelo navegador, e o fluxo de código do dispositivo mostra um código de uso único para digitar no navegador.
[600ms]
[encouraging] Depois, digite o seu primeiro prompt.

## Step 5 · Ask, explain, suggest

[curious] Descreva o objetivo com palavras simples. O Copilot sugere um comando e explica cada parte.
[600ms]
[confident] Assim, você entende o comando antes de aprovar.
[600ms]
[serious] A resposta é só um exemplo e o texto varia, então leia sempre o comando de verdade antes.

## Step 6 · Interactive mode

[calm] Digite copilot para iniciar uma conversa. Cada prompt se apoia no anterior, então uma expressão como esse caso continua fazendo sentido.
[600ms]
[confident] O Copilot CLI cuida do contexto para você e compacta o histórico conforme ele enche. O comando slash context mostra o uso.
[600ms]
[intrigued] Pressione Shift e Tab para alternar para o modo de plano.

## Step 7 · Slash commands and options

[calm] Os comandos com barra gerenciam a sessão, como login, model e context.
[600ms]
[confident] Dentro de um prompt, o arroba adiciona um arquivo, e o ponto de exclamação executa um comando de shell.
[600ms]
[encouraging] Para uma resposta única, execute o copilot com a opção dash p e um prompt. A lista completa é maior, então aprenda primeiro estes poucos.

## Step 8 · Generate a script

[curious] Descreva o script que você quer. O Copilot escreve o arquivo.
[600ms]
[confident] Você revisa o diff antes de qualquer coisa rodar.
[600ms]
[serious] Leia sempre o código gerado primeiro e só execute depois de aprovar.

## Step 9 · Manage files

[calm] O Copilot pode criar um arquivo novo, renomear um arquivo e editar as linhas diretamente.
[600ms]
[confident] As ferramentas que alteram ou executam arquivos podem pedir a sua aprovação antes.
[600ms]
[reassuring] Arquivos fora da pasta atual exigem uma aprovação extra. O comando slash add dir adiciona uma pasta confiável.

## Step 10 · Stay in control

[calm] O Copilot pode perguntar antes de usar uma ferramenta. Leia o comando e depois escolha.
[600ms]
[confident] Permita uma vez, permita durante a sessão, ou diga não e diga ao Copilot o que fazer no lugar.
[600ms]
[concerned] Cuidado com a opção durante a sessão. Se você aprovar o comando remove, o Copilot pode excluir qualquer arquivo dessa pasta, ou das pastas abaixo dela, sem perguntar de novo.

## Step 11 · Organization policy

[calm] Os administradores podem ativar ou desativar o Copilot CLI com uma política, em Copilot policies, nas configurações da organização.
[600ms]
[serious] Quando ele está desativado, as pessoas dessa organização não podem usá-lo.
[600ms]
[reflective] Uma política do enterprise que já foi definida prevalece, então a organização não pode alterá-la.

## Step 12 · Recap: one Copilot, three places

[calm] Um só Copilot funciona no seu editor, no seu terminal e no GitHub ponto com.
[600ms]
[confident] Use o editor para escrever e editar código, o CLI para comandos, scripts e arquivos, e o GitHub ponto com para repositórios, issues e pull requests.
[600ms]
[proud] Escolha o lugar que combina com o trabalho. O que você pode usar depende do seu plano, do seu cliente e das políticas da sua organização.
