# Narrator Script — GitHub · Contoso Delivery · Track It on a Board · PT

**Source animation:** `journeys/GitHub/TheBoard.html`

Os títulos `## Step N` permanecem em inglês de propósito (índice do gerador de áudio e das legendas).

---

## Step 1 · An Unorganized List of Issues

[warm] O planejamento funcionou. Cada épico e cada subtarefa agora é uma issue de verdade. E é isto que você recebe: uma lista plana, do mais novo para o mais antigo.
[500ms]
[serious] Tente responder às perguntas que uma equipe realmente faz. Quem está trabalhando em quê? O que devo pegar agora? O que está travado? Quão perto está o épico um?
[500ms]
[thoughtful] Você não consegue responder a nenhuma delas nesta tela. As issues estão ótimas; o problema é a *visão*. Uma lista não mostra fluxo.

## Step 2 · One Board, Five Columns

[confident] Então a Contoso adiciona um Project e muda para a visão de quadro: cinco colunas — Backlog, Ready for Sprint, In Progress, In Review e Done.
[500ms]
[bright] Cinco, não três. Ready for Sprint é onde o trabalho já refinado espera, e In Review é onde o trabalho pronto espera por um ser humano. É exatamente nesses dois pontos que as coisas se acumulam em silêncio, então eles ganham nome.
[500ms]
[reassuring] E a regra é simples: cada item mora em exatamente uma coluna.

## Step 3 · Status Is a Column, Not a Comment

[confident] Veja o que isso te dá.
[600ms]
[calm] A subtarefa dois começa no Backlog. É refinada para Ready for Sprint. Alguém a assume: In Progress. Abre um pull request: In Review. Faz merge: Done.
[600ms]
[bright] Mover o cartão *é* a atualização de status. Ninguém escreve "começando agora" num comentário. Ninguém manda mensagem perguntando.
[600ms]
[reassuring] Um item, um lugar. Se você quer saber o que está em revisão, é só olhar.

## Step 4 · Tell the Board What Kind of Work This Is

[confident] O quadro ainda não distingue um épico de uma tarefa de um dia. Então a Contoso adiciona um campo.
[500ms]
[calm] Work Type, seleção única, com as opções Epic e Sub-Task. Defina uma vez e todo cartão pode carregá-lo.
[500ms]
[thoughtful] Sem ele, um épico de três semanas e uma correção de três horas ficam idênticos dentro de uma coluna. Com ele, dá para filtrar, agrupar e contar separadamente.

## Step 5 · Put the Work in a Timebox

[confident] Mais um campo, e este acrescenta tempo.
[500ms]
[calm] Sprint é um campo de iteração com cadência de duas semanas. A sprint um leva o núcleo do back-end; a sprint dois pega o painel e o pipeline. Agora o quadro pode ser filtrado para *só esta quinzena*.
[500ms]
[reassuring] É isso que transforma "algum dia" em compromisso, e o que torna possível um planejamento de capacidade honesto.

## Step 6 · Group the Board by Parent

[confident] Último movimento: mude a forma de agrupar o quadro.
[500ms]
[calm] Em vez de colunas por status, os mesmos cartões se reorganizam sob o épico ao qual pertencem. Nada foi redigitado, nada foi duplicado: dados idênticos, ordenados para responder a outra pergunta.
[500ms]
[confident] Agrupe por Status para tocar o dia. Agrupe por Parent quando alguém perguntar como vai o épico um.

## Step 7 · Your Turn: Create the Board

[warm] Você saiu da explicação anterior com doze issues e nenhum jeito de trabalhá-las. Vamos resolver isso no seu repositório.
[500ms]
[calm] Abra a aba Projects, clique em "Link a project" e depois em "New project". Escolha Kanban se aparecer; se não, escolha Board. As mesmas três colunas: Todo, In Progress e Done.
[500ms]
[reassuring] Dê o nome "Contoso Weather App" e crie. Você deve ver um quadro vazio, sem nenhum cartão. Isso é esperado, e é justamente o ponto do próximo passo.

## Step 8 · Your Turn: Put the Issues on It

[thoughtful] Então por que o quadro está vazio? Porque o GitHub não move suas issues para lá sozinho.
[500ms]
[calm] Numa organização, dá para marcar "Import items from repository" na criação. Fora isso, abra o projeto, menu de três pontos, Workflows, "Auto-add to project", filtro "is issue, is open", e ligue.
[500ms]
[reassuring] As doze apareceram em Todo? Arraste uma para In Progress e recarregue. Se ela ficar, seu quadro está no ar.

## Step 9 · Your Turn: Split the Board by Epic

[thoughtful] Doze cartões numa única coluna Todo bem comprida, e nada indica a qual épico cada um pertence.
[500ms]
[calm] Abra View options, deixe "Column by" em Status, clique em Swimlanes e escolha Parent issue. A coluna se divide em quatro faixas horizontais, uma por épico: status na horizontal, épico na vertical.
[500ms]
[careful] Um aviso: arrastar um cartão para os lados muda o status, mas para cima ou para baixo, e você acabou de trocar o pai daquela issue.

## Step 10 · Now the Team Can See the Work

[warm] Pronto, o quadro está completo.
[600ms]
[calm] Uma lista plana virou cinco colunas. Work Type separa os épicos das subtarefas, Sprint as coloca dentro de uma quinzena, e as swimlanes reportam o andamento de um épico sem ninguém montar planilha nenhuma.
[600ms]
[confident] O plano está visível e o status é honesto. A seguir: o modelo de branches que transforma um cartão em *In Progress* em código integrado e implantado.
