# Narrator Script — GitHub · Contoso Delivery · Set Up Your Repo · PT

**Source animation:** `journeys/GitHub/TryItYourself.html`

Os títulos `## Step N` permanecem em inglês de propósito (índice do gerador de áudio e das legendas).

---

## Step 1 · Start With an Empty Repository

[warm] Até aqui tudo foi no repositório da Contoso. Agora vamos deixar isso seu.
[500ms]
[calm] Você só precisa de uma conta gratuita e um repositório vazio. Vá em github ponto com barra new e dê o nome "weather map app". Deixe "Add a README file" desmarcado: o script precisa de um lugar vazio.
[500ms]
[reassuring] Anote o nome completo: seu usuário, barra, weather map app. O importador vai pedir exatamente nesse formato.

## Step 2 · Who Owns the Repository?

[warm] Antes de clicar em Create, olhe o campo do topo. Owner, o proprietário.
[500ms]
[calm] O seu usuário sempre está lá. Abaixo dele aparecem as organizações às quais você pertence. Uma organização é uma conta compartilhada, e ninguém faz login nela. As pessoas entram como elas mesmas e depois recebem papéis e times, o que permite conceder o acesso de dez pessoas de uma vez.
[500ms]
[bright] Organizações são gratuitas, e aqui qualquer uma das opções serve. Se você está sozinho, a conta pessoal basta. Mas há uma diferença que aparece mais adiante: numa organização, um projeto novo pergunta se deve importar todas as issues; num projeto pessoal esse botão não existe.

## Step 3 · Install the GitHub CLI

[confident] O script não clica em nada. Ele conversa com o GitHub através do `gh`, a ferramenta de linha de comando oficial.
[500ms]
[calm] No Windows, winget install GitHub ponto cli. No Mac, brew install gh. No Ubuntu, apt install gh. Ou baixe o instalador em cli ponto github ponto com.
[500ms]
[reassuring] E confirme: digite `gh --version`. Se voltar um número de versão, está pronto.

## Step 4 · Sign the CLI Into Your Account

[warm] Agora você autoriza a ferramenta a agir em seu nome. Digite `gh auth login`.
[500ms]
[calm] São quatro perguntas: GitHub ponto com, HTTPS, autenticar o Git também e, a importante, escolha "Login with a web browser".
[500ms]
[thoughtful] Aqui está a parte engenhosa. O terminal mostra um código descartável, o navegador abre e é *o navegador* que pede esse código. Duas janelas, um código, nenhuma senha em lugar nenhum.

## Step 5 · Your Repository Is Ready

[warm] É toda a preparação: um repositório vazio, o CLI instalado e uma sessão autenticada que não deixa senha nenhuma no disco.
[500ms]
[bright] Daqui em diante esta jornada deixa de ser demonstração. Cada explicação faz o mesmo no seu próprio repositório e convida você a comparar com a tela.
[500ms]
[reassuring] Comece por Plan the Work: ele entrega o script que preenche esse repositório com doze itens de trabalho.
