# Narrator Script — Compute · ARM templates and Bicep: read, change, deploy, export

**Source animation:** [ArmAndBicepDeployments.html](../../../journeys/Compute/ArmAndBicepDeployments.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/azure-resource-manager/bicep/overview>
- <https://learn.microsoft.com/azure/azure-resource-manager/templates/syntax>
- <https://learn.microsoft.com/azure/azure-resource-manager/templates/deployment-modes>
- <https://learn.microsoft.com/azure/azure-resource-manager/bicep/deploy-what-if>

---

## Step 1 · Built by hand, twice

[calm] A Priya, da Contoso, foi clicando pelo portal para criar a mesma conta de armazenamento no Dev e, depois, de novo no Prod.
[600ms]
[concerned] Feitos à mão, os dois foram se afastando sem ninguém ver. Uma configuração aqui, uma tag ali, e ninguém percebeu.
[600ms]
[confident] Um template acaba com o chute. Você descreve o recurso uma vez e o implanta do mesmo jeito sempre.

## Step 2 · Anatomy of an ARM template

[calm] Um template ARM é um arquivo JSON, e só três partes são obrigatórias: o schema, a versão do conteúdo e os recursos.
[600ms]
[confident] Os arquivos reais costumam ter também parâmetros, variáveis, funções e saídas, para que o mesmo arquivo sirva para o Dev e o Prod.
[600ms]
[reassuring] O JSON na tela está resumido para caber, mas o formato é exatamente o que você vai encontrar nos templates reais.

## Step 3 · The same thing in Bicep

[curious] Aqui está a mesma conta de armazenamento escrita em Bicep. Acompanhe o cursor de leitura, bloco por bloco.
[600ms]
[impressed] Ficou mais curto, e não há pontuação de JSON para equilibrar.
[600ms]
[confident] O Bicep é declarativo, então a ordem dos blocos não muda o jeito como a implantação roda. O Learn recomenda o Bicep para trabalhos novos: mesmos recursos, sintaxe mais simples.

## Step 4 · Modify an existing ARM template

[calm] Na maior parte do tempo, você edita um arquivo que já existe. Adicione um parâmetro, use esse parâmetro no SKU e adicione uma tag.
[600ms]
[confident] Depois, implante o mesmo arquivo de novo. Você também pode aumentar a versão do conteúdo para registrar a mudança.
[600ms]
[serious] Mas cuidado. Uma nova implantação reaplica todas as propriedades do arquivo, então uma propriedade que você deixou de fora volta ao valor padrão.

## Step 5 · Modify an existing Bicep file

[calm] Três recursos do Bicep que você vai editar toda semana.
[600ms]
[confident] Um módulo divide um arquivo em arquivos menores, que outro arquivo implanta. Um loop repete um recurso, e cada cópia precisa de um nome único.
[600ms]
[curious] E a palavra-chave existing aponta para algo que já foi implantado, então o recurso é referenciado, e não criado de novo.

## Step 6 · Deploy it: choose the scope

[calm] O comando decide onde a implantação vai parar, e os mesmos comandos implantam um template JSON ou um arquivo Bicep.
[600ms]
[confident] Por padrão, o arquivo vai para o grupo de recursos, e só vai para outro lugar quando define um escopo de destino.
[600ms]
[reflective] Em implantações de assinatura, de grupo de gerenciamento e de tenant, os comandos também pedem um local, porque o próprio registro da implantação precisa ficar em algum lugar.

## Step 7 · Incremental, Complete and what-if

[calm] O modo incremental é o padrão e não mexe nos recursos que o template não menciona.
[600ms]
[serious] O modo completo exclui tudo o que o template não lista, então não é recomendado e está sendo descontinuado. Use deployment stacks quando precisar excluir recursos.
[600ms]
[determined] Mude a chave para ver a diferença e rode sempre o what-if antes, para visualizar as mudanças.

## Step 8 · Export a deployment as a template

[curious] Os recursos existem, mas ninguém guardou o arquivo. E agora?
[600ms]
[confident] Exporte um template: ou como um instantâneo do grupo como ele está hoje, ou como o template exato de uma implantação anterior.
[600ms]
[reassuring] No portal, escolha Exportar template no grupo de recursos, ou abra Implantações, escolha uma e selecione Template.

## Step 9 · Convert: decompile and build

[calm] Para ir de um formato ao outro, use as ferramentas do Bicep.
[600ms]
[confident] O decompile transforma um template ARM em Bicep. O build transforma o Bicep em um template ARM, e os dois são funcionalmente equivalentes.
[600ms]
[hesitant] O decompile faz o possível, porque não existe um mapeamento garantido de JSON para Bicep. Corrija os avisos ou erros que ele reportar.

## Step 10 · Troubleshoot a failed deployment

[serious] Existem três tipos de erro de implantação, e cada um aparece em um lugar diferente.
[600ms]
[confident] Os erros de validação e de preflight aparecem no log de atividades, mas não no histórico de implantações.
[600ms]
[curious] Um arquivo Bicep com erro de sintaxe nem chega a compilar, então ele também não aparece no log de atividades. Primeiro descubra qual é o tipo do seu erro.

## Step 11 · ARM, Bicep or template spec: pick one

[calm] Escolha conforme o trabalho que você tem na frente. Templates ARM e Bicep têm os mesmos recursos, e o Learn recomenda o Bicep pela sintaxe mais simples.
[600ms]
[confident] Um template spec guarda um template no Azure, e assim você compartilha o template com o Azure RBAC e deixa as pessoas implantarem sem ter acesso de escrita ao template.
[600ms]
[proud] Agora confira o seu conhecimento com a habilidade A Z 104: automatizar a implantação de recursos usando templates ARM ou arquivos Bicep.
