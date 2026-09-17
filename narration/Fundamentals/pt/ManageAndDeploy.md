# Roteiro de narração - Gerenciar e implantar

**Source animation:** journeys/Fundamentals/ManageAndDeploy.html
**Script status:** Authored voiceover.
**Language:** Português (Brasil)

As indicações entre colchetes não são faladas. As pausas ficam em linhas separadas. Cada bloco corresponde a uma etapa da animação.
<!-- Sources: https://learn.microsoft.com/azure/azure-resource-manager/management/overview ; https://learn.microsoft.com/azure/azure-resource-manager/bicep/overview ; https://learn.microsoft.com/azure/azure-arc/overview -->

## Step 1 · Built by hand, twice

[calm] A Contoso montou teste e produção separadamente, à mão. As configurações já diferem, então um teste bem-sucedido não explica exatamente o que acontecerá em produção.
[600ms]
[confident] A equipe precisa de uma definição repetível do que implanta, registrando diferenças intencionais em vez de esconder diferenças acidentais.

## Step 2 · Start in the portal

[calm] Maya abre o portal do Azure para inspecionar os recursos e as configurações da loja. A interface no navegador ajuda a entender o que existe e como cada recurso está configurado.
[600ms]
[confident] O portal é útil para explorar e executar tarefas individuais. Porém, repetir uma longa sequência manual dificulta manter a consistência.

## Step 3 · Repeat it with commands

[calm] A interface de linha de comando do Azure e o Azure PowerShell permitem gerenciar recursos com comandos salvos e reutilizáveis. Cloud Shell oferece um ambiente para usar essas ferramentas no navegador.
[600ms]
[confident] Os comandos salvos tornam o trabalho repetível, mas a equipe ainda revisa ordem, entradas, permissões e efeitos.

## Step 4 · Describe it as code

[calm] Infraestrutura como código descreve os recursos desejados, em vez de depender da memória de cliques. Bicep ou um modelo do Azure Resource Manager fornece uma definição que a Contoso pode revisar e versionar.
[600ms]
[confident] Essa definição descreve infraestrutura. Sozinha, não copia dados de negócio nem entrega todas as partes do código da aplicação.

## Step 5 · Same definition, intentional differences

[calm] A Contoso reutiliza uma definição revisada em teste e produção. Parâmetros fornecem diferenças deliberadas, como nomes, tags e capacidade, mantendo a estrutura compreensível.
[600ms]
[confident] Os ambientes não precisam ter o mesmo tamanho. Suas diferenças devem ficar explícitas para que a equipe consiga explicá-las e reproduzi-las.

## Step 6 · Everything goes through Resource Manager

[calm] Ações do portal, comandos e implantações de modelos enviam solicitações de gerenciamento ao Azure Resource Manager. Permissões e políticas aplicáveis são verificadas antes de os provedores criarem ou atualizarem recursos.
[600ms]
[confident] Esse é o caminho de gerenciamento. O pagamento do cliente usa a aplicação e seus serviços, não esse caminho de implantação de recursos.

## Step 7 · Reach beyond Azure

[calm] O servidor do depósito não foi movido para o Azure. Azure Arc pode trazer servidores compatíveis que funcionam em outros lugares para a experiência de gerenciamento do Azure, apoiando o ambiente híbrido.
[600ms]
[confident] Conectar o servidor ao Arc não o muda de lugar. Ele continua funcionando no depósito, com suas responsabilidades operacionais existentes.

## Step 8 · Manage and Deploy - All in One

[calm] Use o portal para explorar, comandos para repetir operações e definições de infraestrutura revisadas para implantar com consistência. Arc amplia o gerenciamento a recursos compatíveis fora do Azure.
[600ms]
[confident] A Contoso já consegue explicar como a loja foi construída. A última pergunta é como saber se ela funciona bem para os clientes.