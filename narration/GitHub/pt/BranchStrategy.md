# Narrator Script — GitHub · Contoso Delivery · Branch with Intent · PT

**Source animation:** `journeys/GitHub/BranchStrategy.html`

Os títulos `## Step N` permanecem em inglês de propósito (índice do gerador de áudio e das legendas).

---

## Step 1 · Nobody Pushes Straight to main

[confident] O quadro diz que este cartão está In Progress. Hora de escrever código, e a primeira pergunta é onde colocá-lo.
[500ms]
[serious] Não na main. A main é o que vai para produção, então é o único branch em que ninguém escreve diretamente. A Contoso impõe isso com um ruleset: exigir pull request, exigir as verificações, exigir revisão, bloquear force push.
[500ms]
[thoughtful] Uma convenção com a qual as pessoas *concordam* se quebra numa sexta-feira ruim. Um ruleset não quebra. E vale também para os mantenedores.

## Step 2 · Three Tiers, Not Two

[confident] A maioria das equipes para em dois níveis: a main e um branch por mudança. A Contoso acrescenta um no meio.
[500ms]
[calm] A main, sempre implantável. Abaixo dela, um branch de épico, de vida longa, um por épico, integrando as subtarefas daquele épico. Abaixo disso, um branch de feature, de vida curta, um por subtarefa, nomeado pela issue que ele fecha.
[500ms]
[bright] Esse nível do meio é a ideia inteira: um épico completo pode ser montado e testado *como uma coisa só* antes que qualquer parte dele chegue à produção.

## Step 3 · Clone It — and All You Have Is main

[warm] Até agora tudo esteve no GitHub. Para escrever código, você precisa dele na sua máquina.
[500ms]
[calm] Clique no botão verde Code, copie o endereço, depois `git clone` e cole. O que você recebe não é um download: é uma cópia completa do repositório, com todo o histórico.
[500ms]
[reassuring] Agora digite `git branch`. Uma linha só: um asterisco e a palavra main. Um clone novo tem exatamente um branch, e é justamente o protegido. Então a próxima coisa a fazer é criar um seu.

## Step 4 · Cut the Epic Branch, Then the Feature Branch

[confident] Duas sequências de comandos, e a ordem importa.
[500ms]
[calm] Primeiro o branch de épico: faça checkout da main, dê pull para partir do que está implantado, crie o branch e faça push para que a equipe veja que ele existe.
[500ms]
[bright] Depois o branch de feature, e repare onde você está pisando: você está *no* branch de épico, e é dali que corta o branch de feature.
[500ms]
[serious] Corte do lugar errado e seu pull request se enche de commits dos outros, e a revisão fica ilegível.

## Step 5 · A Commit Is a Set of Changes

[confident] Então, o que é um commit, de verdade? Tem gente que fala como se fosse um arquivo. Não é.
[500ms]
[calm] A subtarefa um ponto um é o back-end: um servidor, uma rota de health, uma rota de cidades, o serviço do Azure Maps, o arquivo de pacotes, um arquivo de ambiente de exemplo e uma alteração no README.
[500ms]
[bright] Sete arquivos. Seis novos, um modificado. Os sete entram juntos, como *um* commit.
[500ms]
[serious] O que nos leva a três comandos que as pessoas confundem, porque acontecem em três lugares. O `git add` não salva nada: ele escolhe. O `git commit` grava o que você escolheu no histórico da sua própria máquina. E o `git push` é o único que toca no GitHub.

## Step 6 · Write the Issue Number Into the Commit

[confident] O trabalho está feito, e ele precisa de uma mensagem de commit.
[500ms]
[calm] O `feat` diz que tipo de mudança é esta, depois vem uma descrição simples e, no fim, entre parênteses, o número da issue. Essa referência traça a linha de volta: o commit agora aparece na issue dois.
[500ms]
[thoughtful] Daqui a seis meses, o `git log` é o único colega que ainda lembra por que esta linha mudou. O número da issue é o que permite que ele responda.

## Step 7 · One Number, Three Places

[thoughtful] E por que a mensagem termina em parêntese cerquilha dois? Porque o GitHub lê isso.
[500ms]
[calm] No instante em que o commit sobe, o GitHub acrescenta uma linha à issue dois: um commit que referenciou esta issue. Abra a issue e você vê o código que a respondeu; abra o commit e você vê a tarefa que o pediu. Daqui a seis meses, a anotação de blame nesta linha ainda carrega aquele número.
[500ms]
[careful] Um cuidado: uma cerquilha dois sozinha apenas *vincula*. Para de fato fechar a issue é preciso uma palavra-chave — closes cerquilha dois — que o pull request traz a seguir.

## Step 8 · Open the Pull Request Into the Epic

[confident] Hora de abrir o pull request. E aqui está o passo que as pessoas erram.
[500ms]
[serious] O branch base é o branch de épico. Não a main. Toda subtarefa aterrissa primeiro no seu épico.
[500ms]
[bright] No corpo, duas palavras e um número: Closes cerquilha dois. Assim, quando isto entrar, a issue se fecha sozinha, sua caixa é marcada na lista de tarefas do épico, e o cartão vai para Done. Três coisas, a partir de uma linha de texto.

## Step 9 · The Checks Decide, Not the Author

[confident] Abrir o pull request dispara o pipeline.
[600ms]
[calm] O projeto é compilado. Os testes unitários rodam. O CodeQL varre o código atrás de problemas de segurança. E um colega lê.
[600ms]
[serious] Enquanto cada um deles não estiver verde, o botão de merge fica desabilitado. Para todo mundo, inclusive para quem escreveu.
[600ms]
[reassuring] É por isso que o ruleset do passo um importava. Sem ele, essas verificações seriam conselho. Com ele, são um portão.

## Step 10 · When the Epic Is Whole, Promote It

[confident] A subtarefa dois entra. A subtarefa três entra. O branch de épico agora contém um back-end completo e integrado, e foi testado como uma unidade, não como fragmentos.
[600ms]
[calm] Então um último pull request leva o `epic/backend-api` para a main.
[600ms]
[bright] E *esse* é o merge que entrega. Tudo antes dele era integração. Este dispara o fluxo de implantação.

## Step 11 · Epic 1, From Cut to Merge

[warm] Vamos juntar os últimos cinco passos numa única imagem e seguir apenas o épico um.
[500ms]
[calm] No topo, a main. Um commit, e depois nada: ela fica parada durante toda a história. Abaixo dela, cortado da main, o branch de épico. Vazio no começo, porque ele é um recipiente, não uma área de trabalho.
[500ms]
[calm] A subtarefa dois ganha o próprio branch curto, saindo do épico. Um commit. O pull request treze a traz de volta e, como o corpo dizia "Closes #2", a issue se fecha sozinha.
[500ms]
[bright] Depois a subtarefa três faz o mesmo: branch próprio, commit próprio, pull request catorze — aquele que o agente do Copilot abriu.
[500ms]
[confident] Conte a faixa do meio: dois commits, um por subtarefa. E só agora, só com o épico inteiro, é que o pull request quinze o leva para a main.

## Step 12 · How It Actually Played Out

[confident] Agora afaste a câmera. O épico um era um de quatro, e todos têm exatamente esse formato.
[500ms]
[calm] A API de back-end. O front-end. Testes e pipeline. Segurança e implantação. Cada um cortado da main, cada um se enchendo com as próprias subtarefas, cada um voltando por exatamente um pull request revisado: quinze, dezoito, vinte e um e vinte e quatro.
[500ms]
[thoughtful] Os branches de feature não sumiram: eles vivem *dentro* dessas faixas. Esta visão está afastada, mostrando os merges que chegaram à main.
[500ms]
[calm] Repare na ordem. Cada épico termina e é promovido antes do seguinte. A main só avança em pedaços inteiros e testados.
[500ms]
[reassuring] Uma exceção: apenas o primeiro commit aterrissou direto na main, antes de o ruleset ser ligado.

## Step 13 · One Issue, One Branch, One Safe Merge

[warm] Este é o modelo inteiro.
[500ms]
[calm] A main protegida por um ruleset. Um branch de épico por épico, integrando suas partes. Um branch de feature curto por issue, nomeado pelo número dela. E um conjunto de verificações que decide se algo disso passa.
[500ms]
[confident] Tudo se apoia naquelas verificações verdes. Então, a seguir: o que o pipeline realmente executa.
