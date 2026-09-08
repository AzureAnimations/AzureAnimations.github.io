# Narrator Script — GitHub · Contoso Delivery · Plan the Work · PT

**Source animation:** `journeys/GitHub/PlanTheWork.html`

Os títulos `## Step N` permanecem em inglês de propósito (índice do gerador de áudio e das legendas).

---

## Step 1 · One Issue Nobody Can Pick Up

[warm] Os requisitos estão acordados. Aí alguém abre uma issue e cola o documento inteiro dentro dela.
[500ms]
[thoughtful] Cada linha está correta. E, juntas, elas tornam a issue inútil.
[500ms]
[serious] Ninguém consegue assumi-la, porque é trabalho de quatro pessoas. Ela nunca cabe numa revisão. Ninguém consegue trabalhar em paralelo. E, até o último dia, não há jeito honesto de dizer o quanto já andou.

## Step 2 · Cut It Into Four Epics

[confident] Então corte em épicos. Um épico é uma fatia do tamanho de um marco: grande o bastante para importar, pequeno o bastante para você saber dizer quando terminou.
[500ms]
[bright] A API REST em Node.js. O front-end pronto para o varejo. Qualidade e segurança automatizadas. Containerização e implantação na nuvem.
[500ms]
[thoughtful] Guarde essas cores. Cada épico vira um branch de vida longa e um grupo no quadro, então o nome que você escolher vai te acompanhar até a produção.

## Step 3 · Split Each Epic Into Sub-Tasks

[confident] Um épico ainda não é algo que dá para começar numa segunda de manhã. Então cada um se divide de novo.
[500ms]
[calm] Uma subtarefa é um pedaço de trabalho com foco único: um branch, um pull request, uma revisão. O épico um vira exatamente dois: o esqueleto do serviço com os endpoints de cidades e de health, e depois o proxy de clima do Azure Maps.
[500ms]
[thoughtful] O teste para saber se você cortou fundo o suficiente: uma pessoa conseguiria terminar? E um revisor conseguiria manter tudo isso na cabeça de uma vez?

## Step 4 · What Goes Inside a Sub-Task

[confident] E o que vai dentro da issue? O título diz o quê: uma frase, começando por um verbo.
[500ms]
[serious] Depois os critérios de aceitação, e é justamente essa a parte que as pessoas pulam. Health devolve duzentos com um payload de status. Cities devolve as cidades suportadas em JSON. Ambos cobertos por testes unitários que rodam na CI.
[500ms]
[thoughtful] O truque é só esse. Sem critérios de aceitação, "pronto" vira opinião, e a revisão vira negociação.

## Step 5 · Make the Hierarchy Real

[confident] Até aqui, épicos e subtarefas só estão relacionados na nossa cabeça. Dois caracteres resolvem isso.
[500ms]
[calm] No corpo do épico, escreva uma lista de tarefas com referências de issue: um traço, um par de colchetes e o número. O GitHub renderiza um checklist vivo: feche a número dois e a caixa se marca sozinha, e a barra de progresso anda.
[500ms]
[thoughtful] Você nunca escolhe esses números. O GitHub carimba cada issue nova com o próximo do repositório, e os pull requests saem do mesmo contador, e é por isso que o primeiro pull request aqui será o número treze.
[500ms]
[reassuring] Repare no que não aconteceu: ninguém editou a barra de progresso. É por isso que o quadro que você vai montar pode ser levado a sério.

## Step 6 · Say What Blocks What

[serious] Falta registrar mais uma coisa: a ordem.
[600ms]
[calm] A issue seis é a página de detalhe da cidade, e ela precisa do clima para exibir. A issue três é o endpoint que devolve esse clima. A seis simplesmente não pode terminar primeiro.
[600ms]
[confident] Então, no corpo da seis, você escreve: bloqueada pela três. O GitHub mostra essa relação nas duas issues.
[600ms]
[thoughtful] Ordem é informação. Uma issue que *avisa* que está bloqueada custa muito menos do que uma descoberta no meio da sprint.

## Step 7 · Your Turn: Generate This Backlog

[warm] Você já viu o formato. Agora torne isso real, no seu repositório.
[500ms]
[calm] Se ainda não fez a preparação, pare e faça "Set Up Your Repo" primeiro: você precisa de um repositório vazio e do `gh auth login` concluído.
[500ms]
[bright] Depois baixe o importador, em PowerShell ou Bash, execute e responda a uma pergunta: seu usuário, barra, weather map app.
[500ms]
[serious] Duas coisas costumam derrubar as pessoas. Seu repositório precisa de um campo Effort com High, Medium e Low, e do tipo de issue Feature. Faltando qualquer um dos dois, o script para e diz qual.
[500ms]
[reassuring] Cerca de um minuto depois: cinco de cinco, sucesso. Vá executar. Eu espero.

## Step 8 · Twelve Issues — and No Way to Work Them

[confident] Abra a aba Issues. Tudo o que planejamos está lá: quatro épicos, oito subtarefas, rótulos, estimativas, critérios de aceitação, a cadeia de bloqueios.
[500ms]
[thoughtful] Agora olhe como alguém que precisa fazer o trabalho. Qual já começou? Qual é a próxima? Qual está travada, e quem está nela?
[500ms]
[serious] Você não tem como saber. Doze issues abertas, todas do mesmo tom de cinza. Uma lista diz o que *existe*. Ela não consegue dizer o que está *acontecendo*.

## Step 9 · From One Idea to Work You Can Assign

[warm] Veja a distância percorrida. Uma ideia só, grande demais para alguém assumir, virou quatro épicos e subtarefas que valem um branch e uma revisão cada, ligadas por listas de tarefas e ordenadas pelo que bloqueia o quê.
[500ms]
[confident] Próxima parada: colocar tudo isso num quadro, para que o status pare de morar na cabeça de alguém.
