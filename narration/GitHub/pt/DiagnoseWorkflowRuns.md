# Narrator Script — GitHub · Troubleshoot Workflow Runs: Logs, Re-runs and Artifacts

**Source animation:** [DiagnoseWorkflowRuns.html](../../../journeys/GitHub/DiagnoseWorkflowRuns.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/en-us/azure/developer/github/github-actions>

---

## Step 1 · A Red Cross on the Pull Request

[calm] Maya abre um pull request na Contoso, e uma das checagens aparece com uma cruz vermelha. Ravi, colega dela, está esperando por isso.
[600ms]
[curious] Cada job de uma execução de workflow é uma checagem. Então essa cruz leva você a um job, depois a um passo e, por fim, ao log.
[600ms]
[confident] Seu objetivo é simples: achar o primeiro passo que falhou e ler a partir dele.

## Step 2 · The Actions Tab: Workflows, Runs and History

[calm] Abra a aba Actions e escolha um workflow na barra lateral esquerda. As execuções aparecem em uma lista, uma linha por execução.
[600ms]
[curious] Toda execução fica nessa lista, então o histórico mostra exatamente quando o workflow começou a falhar.
[600ms]
[reassuring] Para olhar, basta ter acesso de leitura ao repositório. E a linha de comando mostra as mesmas execuções.

## Step 3 · Read a Run: Jobs, Steps, First Failure

[confident] Clique em uma execução e o resumo lista os jobs. Abra o job que falhou, e o passo com falha já aparece expandido.
[600ms]
[serious] Comece pelo primeiro passo vermelho, porque as falhas seguintes muitas vezes vêm dele.
[600ms]
[curious] O GitHub adiciona um set up job e um complete job a cada job. A busca nos logs só procura dentro dos passos que você expandiu, e você pode copiar o link de qualquer linha do log.

## Step 4 · What Triggered This Run?

[calm] O cabeçalho da execução mostra por que ela começou: o evento, quem a disparou e qual commit.
[600ms]
[confident] Eles correspondem aos valores de nome do evento, ator e commit que você pode usar no seu próprio workflow.
[600ms]
[intrigued] Em uma reexecução, o ator continua sendo a pessoa que iniciou a primeira execução. Um valor separado indica quem reexecutou.

## Step 5 · Matrix Runs: Names, Axes and Failures

[curious] Uma matriz cria um job para cada combinação de valores. O nome de cada job traz esses valores.
[600ms]
[confident] Assim, um job vermelho leva direto aos eixos dele, e você pode comparar com os verdes, eixo por eixo.
[600ms]
[serious] Repare nos jobs cinza. Com o fail-fast ativado, que é o padrão, uma falha cancela os demais, então cinza não é causa.

## Step 6 · Re-run Only What Failed

[calm] Você pode reexecutar todos os jobs, só os que falharam ou um único job, como uma célula da matriz.
[600ms]
[confident] Uma reexecução usa o mesmo commit, e os jobs que você não reexecutou mantêm o resultado. Os jobs que dependem de um job reexecutado rodam de novo.
[600ms]
[serious] As reexecuções usam os privilégios de quem disparou a execução original, e você não consegue reexecutar enquanto o workflow estiver desativado.

## Step 7 · Debug Logging: Read the Extra Output

[curious] Às vezes o log simplesmente não basta. Aí você liga o log de depuração.
[600ms]
[excited] Teste a chave aqui e veja o mesmo passo imprimir mais detalhes.
[600ms]
[reassuring] Quem pode rodar o workflow pode marcar Habilitar log de depuração ao reexecutar. Ou então configure de forma permanente com um segredo ou uma variável. Se existirem os dois, o segredo prevalece.

## Step 8 · Common Causes of a Failed Run

[calm] Quatro causas aparecem o tempo todo. Compare o que você vê na sua execução com um destes cartões.
[600ms]
[curious] O token pode não ter uma permissão, um segredo pode não ter sido definido ou repassado, nenhum runner pode corresponder ao rótulo, ou o token pode ter expirado.
[600ms]
[serious] São exemplos, então sempre confirme a causa no seu próprio log.

## Step 9 · YAML Anchors: What Actually Runs

[calm] Uma âncora dá nome a um bloco, e um alias repete esse bloco em outro ponto do arquivo.
[600ms]
[confident] O GitHub executa o resultado já expandido, então leia um job com falha como se o alias estivesse escrito por extenso.
[600ms]
[reassuring] A forma expandida se comporta igual a um arquivo escrito sem âncoras. Expanda de cabeça, e a falha passa a fazer sentido.

## Step 10 · Find Artifacts and Logs in the UI

[calm] Os artefatos ficam no fim do resumo da execução. O arquivo de logs fica no menu do log de um job.
[600ms]
[confident] Com acesso de leitura, você já consegue baixar qualquer um dos dois.
[600ms]
[serious] Os dois ficam guardados por um período de retenção que dá para alterar, e depois expiram. Então baixe o que precisar a tempo.

## Step 11 · The Same Through the API and gh CLI

[curious] Tudo o que você acabou de fazer no navegador também existe como comando na ferramenta de linha de comando do GitHub e como endpoint REST.
[600ms]
[confident] Pelo terminal, você lista as execuções, visualiza, baixa os artefatos e reexecuta.
[600ms]
[impressed] Mesmas execuções, mesmos logs, mesmos artefatos. Dá para automatizar a rotina inteira com um script.

## Step 12 · Disable vs Delete, and the History

[calm] Desativar um workflow só o pausa. O arquivo e o histórico continuam exatamente onde estão.
[600ms]
[serious] Excluir uma execução remove só aquela execução, de forma permanente, e exige acesso de gravação. Desativar não cancela execuções que já estão em andamento.
[600ms]
[proud] Juntas, essas habilidades formam o que o G H 200 chama de consumir e solucionar problemas de workflows.
