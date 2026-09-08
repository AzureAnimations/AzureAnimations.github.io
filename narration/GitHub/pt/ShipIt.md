# Narrator Script — GitHub · Contoso Delivery · Shift Left · PT

**Source animation:** `journeys/GitHub/ShipIt.html`

Os títulos `## Step N` permanecem em inglês de propósito (índice do gerador de áudio e das legendas).

---

## Step 1 · What You Have, and What Is Missing

[confident] Antes de acrescentar qualquer coisa nova, olhe onde você já está.
[500ms]
[calm] Você cortou um branch da main. Fez commits nomeando a issue em cada um. Abriu um pull request, e um revisor aprovou. Paradas um, dois, três e cinco deste mapa.
[500ms]
[thoughtful] Mas olhe a parada quatro. Há uma lacuna. Até aqui, nada de fato *verificou* que o código continua funcionando.
[500ms]
[serious] Um revisor lê a mudança. Um revisor não executa a suíte de testes, e não vai perceber uma dependência vulnerável três níveis abaixo.
[500ms]
[bright] Então esta página acrescenta um portão automático no próprio pull request. Verde, e ele segue. Vermelho, e volta para correção.
[500ms]
[reassuring] E repare onde ele fica: *antes* do merge. Assim que uma mudança aterrissa na main, todo mundo a puxa, e um bug pequeno vira a tarde de todos.

## Step 2 · The Later You Find It, the More It Costs

[confident] Pegue um bug. Ou uma vulnerabilidade; o comportamento é o mesmo.
[500ms]
[bright] Encontre no seu notebook e o custo é quase zero. Encontre no pull request e custa um ciclo de revisão. Encontre depois do merge e você está desentranhando aquilo do trabalho dos outros. Encontre em produção e o custo entra em outra categoria.
[500ms]
[thoughtful] Por isso, shift left. E sendo preciso: não é "testar mais", é testar *mais cedo*. E vale para segurança exatamente tanto quanto para correção.

## Step 3 · What the Pipeline Does — and Why You Want One

[confident] Então o que roda nesse portão? Quatro etapas, em ordem fixa.
[400ms]
[calm] Source: um push ou um pull request inicia a execução. Build: dependências restauradas e a aplicação compilada do mesmo jeito que a produção vai compilar. Test: os testes unitários rodam. E Scan: o CodeQL lê o código e o Dependabot confere os pacotes.
[500ms]
[bright] O Deploy fica no fim, tracejado: ele é da próxima página. Tudo aqui acontece *antes* do merge.
[500ms]
[serious] Por que se dar ao trabalho, se dá para rodar as quatro à mão? Porque uma pessoa esquece a etapa quatro numa sexta-feira. E porque uma pessoa pode decidir, só desta vez, pular.
[500ms]
[reassuring] Um arquivo de workflow não faz nem uma coisa nem outra. As mesmas etapas, sempre. E a proteção de branch segura o merge até elas voltarem verdes.
[500ms]
[thoughtful] Uma última coisa: Build, Test e Scan precisam de um computador de verdade. Então quem fornece isso?

## Step 4 · The Machine That Actually Runs It

[confident] Um runner. Um runner é simplesmente a máquina onde o seu job é executado.
[500ms]
[calm] Normalmente você deixa o GitHub fornecer: peça ubuntu, windows ou macos e receba uma máquina virtual limpa para aquele job — criada para ele, destruída ao fim.
[500ms]
[thoughtful] E é por isso que "funciona no meu notebook" e "passa na CI" são afirmações diferentes. Seu notebook tem anos de histórico. O runner não tem nenhum.
[500ms]
[calm] Ele é alugado por minuto. Linux é o mais barato, Windows não chega ao dobro, e um minuto de macOS custa cerca de dez vezes um de Linux. Em repositórios públicos, é gratuito.
[500ms]
[serious] Precisa de GPU, ou de um caminho para a sua rede privada? Hospede o runner você mesmo. Sem conta por minuto, mas é você que aplica patches, que protege a máquina e que limpa o que o job anterior deixou para trás.

## Step 5 · What a Pipeline Actually Is

[confident] Um pipeline é só um arquivo YAML em ponto github barra workflows. Três coisas o definem.
[500ms]
[bright] O gatilho: quando ele roda — um push, um pull request, um agendamento. O runner: onde ele roda. E o job: o que ele roda — etapas em ordem, checkout, preparar o Node, instalar, testar. Uma falha interrompe o job.
[500ms]
[thoughtful] E as duas letras que as pessoas confundem: a CI prova que a mudança está boa. O CD libera a mudança provada. Mesmo pipeline, continuado.

## Step 6 · Tests That Run Themselves

[confident] Agora a primeira verificação. O workflow de CI roda a cada push e a cada pull request: instala as dependências e executa os testes.
[500ms]
[bright] No back-end: que uma resposta de clima é interpretada corretamente, e o que acontece quando o provedor falha. No front-end: que um cartão de cidade é renderizado, e que clicar nele navega.
[500ms]
[serious] Esse teste de falha do provedor vale o que custa. O Azure Maps *vai* ficar indisponível algum dia, e a Contoso precisa já saber como a aplicação se comporta.

## Step 7 · Let GitHub Read the Code for You

[confident] Testes provam que o código faz o que você esperava. Eles não dizem que ele é seguro.
[500ms]
[calm] Então um segundo workflow executa o CodeQL, a cada pull request e mais uma vez por semana. Ele procura injeção e caminhos de entrada inseguros, segredos comitados por acidente e fluxo de dados inseguro até a chamada do provedor.
[500ms]
[thoughtful] O que ele encontra é levantado no pull request, antes de um humano ler. Segurança deslocada para a esquerda: a varredura acontece enquanto a mudança ainda é uma proposta.

## Step 8 · Keep the Dependencies Honest

[confident] Terceira verificação. A maior parte das vulnerabilidades não chega no código que sua equipe escreveu: chega nos pacotes.
[500ms]
[calm] Então o Dependabot observa os manifestos e abre um pull request sempre que algo precisa ser atualizado.
[500ms]
[bright] Repare no formato disso: a atualização chega *como um pull request*, então passa pelos mesmos testes e pela mesma varredura de qualquer mudança humana. Nada pula o portão. Nem uma correção de segurança.

## Step 9 · Where Secrets Are Allowed to Live

[serious] Há uma coisa de que o pipeline precisa e que jamais pode estar no repositório: credenciais.
[500ms]
[calm] Nem a chave do Azure Maps. Nem um client secret. Nem um arquivo ponto env comitado só por enquanto — porque "só por enquanto" é justamente como ele acaba no histórico para sempre.
[500ms]
[confident] Elas vão para os secrets do Actions: criptografados e somente de escrita. Depois de salvo, você não consegue ler de volta, só substituir. Se alguma etapa tentar imprimir um deles, o GitHub mascara.
[500ms]
[thoughtful] É a regra da primeiríssima explicação — a chave do Azure Maps fica no servidor — agora aplicada ao pipeline.

## Step 10 · Every Change Arrives Already Proven

[warm] Pronto, a metade da esquerda está completa.
[600ms]
[calm] As verificações foram para a esquerda até onde dá. Testes, análise de segurança e atualização de dependências rodam todos no pull request, num runner limpo, com segredos que nunca encostam no código.
[600ms]
[confident] Isso é integração contínua, concluída. A seguir: entrega contínua — empacotar esta mudança e levá-la ao Azure com segurança.
