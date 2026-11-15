# Narrator Script — Monitor · KQL Basics: Ask Your Logs a Question

**Source animation:** [KqlBasics.html](../../../journeys/Monitor/KqlBasics.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/kusto/query/>
- <https://learn.microsoft.com/azure/azure-monitor/logs/get-started-queries>
- <https://learn.microsoft.com/kusto/query/datatypes-string-operators>
- <https://learn.microsoft.com/kusto/query/join-operator>

---

## Step 1 · A query is a pipeline

[calm] Uma consulta KQL começa com uma tabela. Depois, as linhas passam por um operador atrás do outro.
[600ms]
[curious] Cada caractere de pipe entrega o resultado para o próximo passo, então você lê a consulta de cima para baixo.
[600ms]
[reassuring] Uma consulta só lê dados. Ela nunca altera uma tabela, então é seguro experimentar.

## Step 2 · where: keep only the rows you want

[calm] Filtre por tempo primeiro, usando ago, between e now.
[600ms]
[confident] Todo operador seguinte trabalha com uma tabela bem menor. Ago de trinta minutos significa trinta minutos antes de agora, e o between inclui as duas pontas.
[600ms]
[serious] O seletor de tempo do portal também limita a consulta. Se você também definir um tempo na consulta, vale o intervalo menor.

## Step 3 · project and extend: choose and compute columns

[calm] O project mantém só as colunas que você nomear. Todo o resto sai do resultado.
[600ms]
[curious] O extend funciona de outro jeito. Ele mantém todas as colunas e acrescenta uma nova, que você calcula.
[600ms]
[confident] O project também pode renomear colunas, e o extend é ótimo para cálculos rápidos dentro de uma consulta.

## Step 4 · summarize: many rows become one row per group

[calm] O summarize transforma muitas linhas em uma linha por grupo. Você pode contar as linhas ou tirar a média de um valor.
[600ms]
[confident] Agrupe por uma coluna, como Name, ou use bin para cortar o tempo em fatias.
[600ms]
[serious] Agrupar só por TimeGenerated criaria um grupo por timestamp. O bin primeiro arredonda os horários em fatias.

## Step 5 · order by, top, take, distinct: shape the answer

[calm] O order by ordena as linhas. O top ordena e mantém só as primeiras.
[600ms]
[curious] O take pega algumas linhas quaisquer, sem ordem definida, e o distinct lista os valores únicos de uma coluna.
[600ms]
[confident] Para pegar os registros mais recentes, use top em vez de ordenar a tabela inteira.

## Step 6 · Text matching: has, contains, startswith

[curious] O has corresponde a uma palavra inteira. O contains corresponde a qualquer pedaço do texto, mas faz a varredura mais devagar.
[600ms]
[calm] O startswith confere o começo do texto. Os três ignoram maiúsculas e minúsculas.
[600ms]
[serious] O equals compara exatamente, então aí maiúsculas e minúsculas importam. Sempre que puder, prefira o has, porque ele procura termos inteiros em vez de varrer todos os valores.

## Step 7 · join and union: combine two tables

[calm] O join junta linhas de duas tabelas por uma coluna em comum.
[600ms]
[confident] O union simplesmente empilha as linhas de várias tabelas, uma sobre a outra.
[600ms]
[serious] O tipo de join padrão remove as linhas duplicadas da esquerda. Diga kind igual a inner para manter todas as correspondências, e coloque a tabela menor à esquerda.

## Step 8 · render timechart: turn rows into a picture

[calm] Para ver uma tendência, faça summarize por bin de TimeGenerated, com fatias de cinco minutos.
[600ms]
[confident] Depois, termine a consulta com render timechart. A primeira coluna vira o eixo do tempo.
[600ms]
[serious] O render precisa ser o último operador. Ele não altera os dados, só diz à ferramenta como desenhá-los.

## Step 9 · Build a query yourself

[excited] Agora é a sua vez. Clique nos operadores para adicioná-los e clique em uma linha para removê-la.
[600ms]
[curious] O objetivo é mostrar as requisições com falha a cada cinco minutos, desenhadas como um gráfico.
[600ms]
[encouraging] Lembre a ordem. Filtre antes de resumir, e o render vem por último.

## Step 10 · From answer to action

[calm] Quando uma consulta devolve o que você precisa, não jogue fora. Reutilize.
[600ms]
[confident] Você pode criar uma nova regra de alerta a partir da consulta atual, para ser avisado quando o resultado mudar.
[600ms]
[optimistic] Ou salve a consulta e fixe-a como um bloco em um workbook ou em um dashboard.

## Step 11 · Three beginner mistakes

[calm] Aqui estão três erros que todo iniciante comete. Identifique cada um e depois corrija.
[600ms]
[serious] O KQL diferencia maiúsculas de minúsculas. Nomes de tabelas, nomes de colunas e o equals se importam com isso.
[600ms]
[reassuring] Cada erro é fácil de cometer e igualmente fácil de evitar, depois que você sabe onde procurar.

## Step 12 · KQL at a glance

[calm] Uma pergunta por pipe. Comece pela tabela e depois filtre por tempo.
[600ms]
[confident] Dê forma às colunas, resuma as linhas e renderize o resultado.
[600ms]
[proud] Agora pratique em um workspace de verdade ou no ambiente de demonstração indicado no artigo de introdução do Log Analytics.
