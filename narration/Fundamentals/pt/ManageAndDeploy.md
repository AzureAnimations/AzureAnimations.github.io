# Roteiro de narração - Gerenciar e implantar

**Source animation:** journeys/Fundamentals/ManageAndDeploy.html
**Script status:** Authored voiceover.
**Language:** Português (Brasil)

As indicações entre colchetes não são faladas. As pausas ficam em linhas separadas. Cada bloco corresponde a uma etapa da animação.
<!-- Sources: https://learn.microsoft.com/azure/azure-resource-manager/management/overview ; https://learn.microsoft.com/azure/azure-resource-manager/bicep/overview ; https://learn.microsoft.com/azure/cloud-shell/overview ; https://learn.microsoft.com/powershell/module/az.resources/get-azresourcegroup ; https://learn.microsoft.com/azure/azure-arc/servers/overview -->

## Step 1 · Built by hand, twice

[calm] A Contoso tem uma máquina virtual em teste e duas em produção. A capacidade extra foi planejada, mas a marca Environment ausente em produção foi um erro da configuração manual.
[600ms]
[confident] Uma definição de infraestrutura revisada registra o projeto. Parâmetros tornam explícitas as diferenças aprovadas, permitindo distinguir uma escolha intencional de um desvio de configuração.

## Step 2 · Start in the portal

[calm] Maya usa o portal do Azure, uma interface gráfica no navegador, para consultar a VM de produção. Ela confere assinatura, grupo de recursos, região, tamanho e marcas, e revisa quem pode gerenciá-la em Controle de acesso.
[600ms]
[confident] Escolha o portal para inspeção visual e tarefas individuais. As solicitações ainda usam o Resource Manager; a interface não ignora permissões nem políticas.

## Step 3 · Repeat it with commands

[calm] Os dois comandos listam grupos de recursos da assinatura atual. A CLI do Azure usa comandos que começam com a zê. O Azure PowerShell usa cmdlets do Az que retornam objetos para seu pipeline.
[600ms]
[confident] O Cloud Shell é o ambiente hospedado no navegador, com Bash ou PowerShell e ferramentas instaladas. As ferramentas também funcionam localmente. Entrada e permissões continuam necessárias; o Cloud Shell não torna os recursos do Azure gratuitos.

## Step 4 · Describe it as code

[calm] Infraestrutura como código registra o estado desejado. Bicep oferece sintaxe declarativa concisa e é compilado em um modelo ARM JSON. Parâmetros recebem entradas, recursos declaram o que implantar e saídas retornam valores.
[600ms]
[confident] Versione e revise a definição. Idempotência significa que repetir a implantação com as mesmas entradas pode chegar ao mesmo estado, em vez de criar recursos duplicados.

## Step 5 · Same definition, intentional differences

[calm] Este exemplo cobre o armazenamento da Contoso. Escolha teste ou produção e selecione a redundância. O arquivo de parâmetros fornece os valores à mesma definição, que aplica nome, marca Environment e SKU de armazenamento.
[600ms]
[confident] Confira a prévia antes de implantar. A prévia não cria recursos, e este modelo não implanta as VMs da loja nem copia dados de clientes. Essas definições e tarefas são separadas.

## Step 6 · The management request path

[calm] A Contoso solicita a criação de armazenamento. Com Reader, a autorização falha. Com Contributor sem a marca Environment, a política Deny do exemplo bloqueia. Com permissão e marca, a solicitação simulada chega ao Microsoft Storage e é concluída.
[600ms]
[confident] Código válido não ignora autorização nem política. Esta simulação não reproduz todos os erros do Azure. A compra do cliente segue um caminho de dados separado, não a implantação pelo Resource Manager.

## Step 7 · Reach beyond Azure

[calm] A Contoso instala o agente Connected Machine no servidor do depósito para conectá-lo ao Azure Arc. O servidor passa a ser representado como recurso do Azure para inventário, acesso e serviços de gestão compatíveis. O Arc também suporta Kubernetes e SQL Server.
[600ms]
[confident] Gerenciar não é migrar. O servidor continua no depósito, o sistema operacional precisa de cuidados e os serviços conectados podem ter cobranças próprias.

## Step 8 · Manage and Deploy - All in One

[calm] Escolha a ferramenta adequada: portal para inspeção visual, CLI ou PowerShell para comandos repetíveis, ARM ou Bicep para infraestrutura declarativa. O Arc estende a gestão a recursos compatíveis fora do Azure.
[600ms]
[confident] As ferramentas se complementam; nenhuma ignora permissões nem políticas. A Contoso pode explicar suas escolhas de gestão. Depois, o monitoramento ajuda a entender como a loja funciona.