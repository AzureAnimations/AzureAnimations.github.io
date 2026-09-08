# Narrator Script — GitHub · Contoso Delivery · Build It with Copilot · PT

**Source animation:** `journeys/GitHub/BuildWithCopilot.html`

Os títulos `## Step N` permanecem em inglês de propósito (índice do gerador de áudio e das legendas).
Nenhum nome de modelo é citado, de propósito: a lista muda a cada poucos meses.

---

## Step 1 · Not Autocomplete. A Pair Programmer.

[warm] O quadro está cheio. Alguém precisa efetivamente escrever o código. E você não vai escrever sozinho.
[500ms]
[calm] À esquerda, o autocompletar de sempre: você digita e ele oferece palavras que já viu no arquivo. À direita, o Copilot: você escreve num comentário o que quer fazer, e ele escreve a função.
[500ms]
[thoughtful] A diferença não é inteligência, é contexto. Mas isto é um motor de sugestões, não um oráculo. Ele acerta o suficiente para poupar tempo de verdade, e erra o suficiente para você precisar ler cada linha.

## Step 2 · What Is Free, and What You Pay For

[calm] O Copilot Free é gratuito e serve para trabalhar: duas mil completações por mês, com o modelo escolhido pela IA. O que não entra são os agentes na nuvem.
[500ms]
[bright] O Pro custa dez dólares por mês, com mil e quinhentos créditos de IA. O Pro Plus, trinta e nove, com sete mil e modelos premium. O Max, cem, com vinte mil. No trabalho é por assento: Business a dezenove, Enterprise a trinta e nove.
[500ms]
[reassuring] E se você é estudante ou docente, pare antes de pagar: com a verificação do GitHub, o Pro sai de graça.

## Step 3 · AI Credits: What Actually Costs You

[bright] Aqui é onde muita gente se confunde. A completação de código, aquele texto cinza que aparece enquanto você digita, não consome crédito nenhum. Nos planos pagos é ilimitada, então você pode programar o dia inteiro sem mexer no medidor.
[500ms]
[serious] O que mexe é isto: mensagens de chat, execuções de agente e a revisão de código do Copilot. Trabalho de raciocínio, e cada um desconta do seu saldo mensal.
[500ms]
[thoughtful] Se acabar, créditos extras custam um centavo cada, mas numa conta corporativa quem decide se isso fica habilitado é o administrador.

## Step 4 · Who Picks the Model

[confident] O Copilot não roda sobre um único modelo. Ele roda sobre uma lista rotativa, de vários fornecedores. E eu não vou citar nenhum, de propósito: essa lista já estará velha no próximo trimestre.
[500ms]
[calm] O que não muda é quem escolhe. No Free e no Student a opção é uma só, Auto: o GitHub escolhe, e escolhe bem. No Pro e no Business você ganha a seleção de modelo, e no Pro Plus, Max e Enterprise entram também os modelos premium.
[500ms]
[thoughtful] Modelo maior não significa automaticamente resposta melhor. Comece pelo Auto.

## Step 5 · Copilot in VS Code

[confident] Então vamos usar de verdade. Instale a extensão GitHub Copilot no VS Code, entre com uma conta que tenha plano e abra o chat. É toda a preparação.
[500ms]
[calm] Aqui está a subtarefa um ponto um, o servidor base. Repare no que é digitado no chat: não "escreve um servidor", e sim requisitos de verdade. Ler primeiro o código do backend. Carregar a configuração. Falhar de imediato se faltar variável. Escutar na porta configurada. Encerrar de forma limpa em SIGINT e SIGTERM.
[700ms]
[serious] E veja a ordem de trabalho. Ele não escreve primeiro; ele lê. A pasta de código, depois o app ponto js e os arquivos de configuração, acendendo um a um no explorador. Aí ele pensa em voz alta: o app ponto js já exporta a aplicação Express, então o server ponto js deve cuidar do processo, não das rotas.
[700ms]
[bright] Só então ele escreve: vinte linhas de server ponto js, e todas encaixam no projeto que ele acabou de ler. É essa a diferença entre uma ferramenta que adivinha e uma que olha antes de escrever.

## Step 6 · Ask, Plan, Agent

[confident] O chat não é uma coisa só. É o mesmo Copilot fazendo três trabalhos diferentes.
[500ms]
[calm] Ask apenas responde perguntas e não muda nada em disco. Plan lê o repositório com ferramentas somente de leitura e escreve um plano de implementação: o Plan propõe, você aprova. Agent trabalha de verdade: edita arquivos, executa comandos, lê os próprios erros e tenta de novo.
[500ms]
[reassuring] E os três se conectam: ao terminar o plano aparece um botão Start Implementation, que entrega tudo ao agente.

## Step 7 · Hand Sub-task 1.2 to the Coding Agent

[confident] Existe mais um lugar onde o Copilot trabalha, e não é o seu notebook.
[500ms]
[calm] De volta ao github ponto com, temos a próxima issue do quadro: a subtarefa um ponto dois.
[500ms]
[bright] Olhe em Assignees, à direita. Há um segundo botão: Assign to Agent. Esse botão é a passagem de bastão inteira. Clique e o Copilot vira o responsável.
[500ms]
[calm] A sessão começa na infraestrutura do GitHub, não na sua máquina. Você pode fechar o notebook e ir embora. Cerca de um minuto depois, abre-se um pull request em rascunho, o número catorze.
[500ms]
[thoughtful] Mas repare: esta issue não é uma linha vaga. São três critérios de aceitação, incluindo nunca expor a chave do Azure Maps. O que você escreveu no quadro é o próprio prompt.

## Step 8 · You Get a Draft, Not a Decision

[confident] E é isto que volta: um pull request marcado como Draft, com três arquivos, testes incluídos.
[500ms]
[serious] A palavra importante é Draft. É a proposta de um colega muito rápido, e ela não te dá nenhum atalho. Leia o diff, baixe o branch, execute.
[500ms]
[thoughtful] O Copilot escreveu as linhas, mas o autor no registro é você. O merge leva o seu nome. E o relatório de incidente das duas da manhã também.
[500ms]
[bright] O que leva à próxima pergunta: em qual branch esse código deveria estar, afinal?
