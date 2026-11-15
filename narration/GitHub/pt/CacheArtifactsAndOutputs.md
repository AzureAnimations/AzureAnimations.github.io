# Narrator Script — GitHub · Move Data: Cache, Artifacts, Outputs and Job Summaries

**Source animation:** [CacheArtifactsAndOutputs.html](../../../journeys/GitHub/CacheArtifactsAndOutputs.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/passing-information-between-jobs>
- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-200>

---

## Step 1 · Every Job Starts Clean

[calm] Nos runners hospedados no GitHub, cada job começa em uma instância nova de uma imagem de runner.
[600ms]
[serious] Os arquivos e as variáveis de um job anterior simplesmente não estão lá. O runner é descartado quando o job termina.
[600ms]
[confident] Por isso, os dados precisam ser repassados de propósito, com outputs, artefatos ou um cache.

## Step 2 · Step Outputs: GITHUB_OUTPUT

[calm] Uma etapa grava um nome e um valor no arquivo de saída do GitHub.
[600ms]
[confident] Uma etapa posterior, no mesmo job, lê esse valor no contexto steps, usando o id da etapa que o gravou.
[600ms]
[serious] A etapa que grava precisa ter um id, senão ninguém consegue ler a saída dela.

## Step 3 · GITHUB_ENV: Set It for Later Steps

[curious] Grave um nome e um valor no arquivo de ambiente do GitHub, e ele vira uma variável de ambiente para todas as etapas seguintes do job.
[600ms]
[serious] A etapa que gravou não enxerga o novo valor. Também não dá para sobrescrever, desse jeito, as variáveis padrão do GitHub e do runner.
[600ms]
[reflective] E ele só vale dentro deste job. O próximo job começa limpo de novo.

## Step 4 · Job Outputs: Pass a Value On

[calm] Para passar um valor a outro job, o primeiro job lista os outputs e liga cada um a uma saída de etapa.
[600ms]
[confident] O segundo job cita o primeiro em needs e lê o valor no contexto needs.
[600ms]
[serious] Sem o needs, o segundo job não consegue ler os outputs do primeiro. Os workflows reutilizáveis também podem devolver outputs ao job que os chama.

## Step 5 · Artifacts: Upload, Then Download

[curious] Para arquivos, use artefatos. O upload artifact salva arquivos de um job na execução.
[600ms]
[confident] Um job posterior espera com o needs e depois usa o download artifact para trazer esses arquivos para o próprio runner limpo.
[600ms]
[reassuring] Os artefatos continuam disponíveis depois da execução, então dá para baixar o resultado da build, os logs ou os testes na página da execução.

## Step 6 · Cache Dependencies With a Key

[curious] A action de cache procura primeiro a chave exata e depois as restore keys. Uma correspondência exata é um cache hit.
[600ms]
[confident] Se não encontra, um novo cache é salvo quando o job termina com sucesso. Normalmente a chave junta o sistema operacional do runner com um hash do lock file, então dependências diferentes geram uma chave nova.
[600ms]
[serious] Um cache nunca muda depois de criado. O job ainda precisa funcionar sem ele, e segredos nunca devem ir para dentro dele.

## Step 7 · Cache or Artifact? Pick the Right One

[calm] O cache acelera as execuções seguintes, reaproveitando arquivos que são caros de recriar.
[600ms]
[confident] Um artefato guarda o que um job produziu, para você repassar ou baixar. Um valor de texto curto é melhor passar como output.
[600ms]
[reflective] Cache e artefatos guardam arquivos, mas não são intercambiáveis. Escolha conforme o que você precisa fazer em seguida.

## Step 8 · Job Summaries: A Markdown Report

[curious] Acrescente Markdown no formato do GitHub ao arquivo de resumo da etapa.
[600ms]
[confident] Quando o job termina, os resumos das etapas são reunidos e exibidos na página de resumo da execução.
[600ms]
[encouraging] É ótimo para resultados de testes, cobertura e links, para ninguém ter que vasculhar os logs.

## Step 9 · A Status Badge for the README

[calm] Um badge de workflow mostra se o workflow está passando ou falhando.
[600ms]
[confident] Por padrão, ele mostra a branch padrão. Adicione o parâmetro branch ou event para escolher outra.
[600ms]
[curious] A URL do badge usa o nome do arquivo do workflow, e a aba Actions pode gerar o Markdown para você. Incorpore como imagem no seu README.

## Step 10 · Retention: How Long Files Stay

[calm] Por padrão, os artefatos e os logs são mantidos por noventa dias.
[600ms]
[confident] Um repositório ou uma organização pode mudar esse prazo, dentro do limite definido acima dele. Cada upload também pode definir os próprios dias de retenção.
[600ms]
[reflective] Uma nova configuração vale só para artefatos e logs novos. Você pode definir isso nas configurações do Actions ou pela REST API.

## Step 11 · Cost: Faster Runs, Less Storage

[calm] Runners limpos baixam as dependências a cada execução. Isso aumenta o uso de rede, o tempo de execução e o custo.
[600ms]
[confident] Um cache substitui esse download, e as execuções ficam mais rápidas. Retenção menor e menos arquivos reduzem o que você armazena.
[600ms]
[encouraging] O upload artifact aceita padrões com curinga e exclusões, então você envia só o que precisa.

## Step 12 · All in One: Pass It On, Don’t Rebuild

[calm] O pipeline da Contoso agora usa todas as ferramentas desta lição. Os outputs levam valores, e um cache guarda as dependências.
[600ms]
[confident] Um artefato leva a build. Um resumo do job mostra o relatório, e um badge diz ao README como o workflow está indo.
[600ms]
[proud] Essa é a habilidade do G H 200 de gerenciar a execução e os resultados dos workflows. Repasse, não reconstrua.
