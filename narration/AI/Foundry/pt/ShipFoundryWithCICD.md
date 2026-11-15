# Narrator Script — Foundry · Ship a Foundry Project with CI/CD

**Source animation:** [ShipFoundryWithCICD.html](../../../../journeys/AI/Foundry/ShipFoundryWithCICD.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/foundry/agents/how-to/set-up-ci-cd-cli>
- <https://learn.microsoft.com/azure/foundry/how-to/evaluation-github-action>
- <https://learn.microsoft.com/azure/foundry/how-to/create-resource-template>
- <https://learn.microsoft.com/azure/foundry/agents/how-to/configure-agent>

---

## Step 1 · Portal clicks do not scale: why pipelines

[calm] Montar um projeto Foundry na mão funciona uma vez. Na terceira cópia, desenvolvimento, teste e produção já saíram do alinhamento sem você perceber.
[600ms]
[serious] É essa divergência que faz as surpresas chegarem à produção.
[600ms]
[confident] Um pipeline repete os mesmos passos sempre. A Contoso Outfitters e o bot de ajuda dela são o exemplo do começo ao fim.

## Step 2 · What lives in the repo

[curious] A infraestrutura, a definição do agente e os dados de avaliação ficam todos no Git, junto com o pipeline.
[600ms]
[confident] O repositório vira a fonte única da verdade.
[600ms]
[calm] Os nomes das pastas aqui são um layout fictício. O seu repositório pode organizar essas mesmas quatro partes de outro jeito.

## Step 3 · Provision the Foundry project as code

[calm] Um arquivo Bicep descreve o recurso Foundry e o projeto dele. O pipeline implanta esse arquivo com o Azure CLI ou o azd, usando um arquivo de parâmetros para cada ambiente.
[600ms]
[confident] Já criou um recurso no portal? O Microsoft Learn sugere exportar esse recurso para um arquivo Bicep.
[600ms]
[encouraging] Depois, transforme os valores fixos no código em parâmetros.

## Step 4 · Deploy a model: name, version, type, capacity

[curious] Uma implantação de modelo também é código. Quatro valores definem o que o agente recebe por trás do nome que ele chama: o nome, a versão, o tipo e a capacidade.
[600ms]
[calm] O mesmo modelo pode ser implantado mais de uma vez, desde que cada implantação tenha o seu próprio nome.
[600ms]
[confident] O agente só pede o nome da implantação.

## Step 5 · Create or update the agent from code

[calm] Uma etapa do pipeline chama o SDK para criar o agente.
[600ms]
[impressed] Toda alteração, até a edição de uma frase, salva uma nova versão em vez de sobrescrever a anterior.
[600ms]
[confident] O código se refere a um agente pelo nome e pela versão. O agente mantém um único endereço de endpoint, mesmo quando as versões mudam.

## Step 6 · Dev, test, prod: one pipeline, three projects

[calm] Uma única revisão do código-fonte avança de desenvolvimento para teste e depois para produção.
[600ms]
[confident] Cada ambiente aponta para o seu próprio projeto Foundry, com configurações e permissões próprias.
[600ms]
[serious] Só o nome do ambiente não isola nada. Cada ambiente precisa estar vinculado a um projeto Foundry separado.

## Step 7 · Evaluation as a quality gate

[curious] Depois de implantar em teste, o pipeline passa um conjunto fixo de perguntas de teste pelos avaliadores.
[600ms]
[serious] Se a taxa de aprovação ficar abaixo do limite, o pipeline para. Essas pontuações são fictícias.
[600ms]
[calm] A GitHub Action de avaliação está em versão prévia. Para economizar, não rode a avaliação a cada commit.

## Step 8 · Secrets and identity in the pipeline

[calm] O workflow faz login com um token de curta duração, em que o Microsoft Entra confia por meio de uma credencial federada.
[600ms]
[proud] Não existe segredo de cliente para você guardar, rotacionar ou deixar vazar.
[600ms]
[serious] O subject da credencial federada precisa corresponder ao token que o workflow realmente envia. Dê à identidade só as funções necessárias, no menor escopo possível.

## Step 9 · Roll back and watch after release

[curious] Envie uma pequena parte do tráfego para a nova versão e acompanhe. Noventa por dez é só um exemplo de divisão.
[600ms]
[confident] Depois, aumente essa parte ou aponte o endpoint de volta para a versão estável.
[600ms]
[reassuring] Trocar a versão que o endpoint atende não recompila o código nem cria outra versão.

## Step 10 · Pipeline at a glance

[calm] Do commit até uma versão acompanhada: toda etapa é código, toda promoção passa por uma aprovação e não há segredos armazenados.
[600ms]
[reflective] Esse é um padrão, não o único pipeline possível. As mesmas ideias funcionam no GitHub Actions ou no Azure DevOps.
[600ms]
[determined] Coloque o seu projeto em um pipeline, e cada release passa a ser repetível.
