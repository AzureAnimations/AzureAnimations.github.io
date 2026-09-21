# Narrator Script - Seu locatário é uma casa

**Source animation:** journeys/Identity/TenantsAndIdentity.html
**Script status:** Authored voiceover.

Delivery cues appear in brackets; pauses are on separate lines.
One block per on-screen step. Interactive choices are examples, not instructions to change real resources.

<!-- Reference: https://learn.microsoft.com/en-us/training/paths/az-104-manage-identities-governance/ -->
<!-- Reference: https://learn.microsoft.com/en-us/entra/fundamentals/add-custom-domain -->
<!-- Reference: https://learn.microsoft.com/en-us/azure/role-based-access-control/rbac-and-directory-admin-roles -->
<!-- Reference: https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/concept-understand-roles -->
<!-- Reference: https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/custom-overview -->

## Step 1 · One key opens everything

[curious] A Contoso se mudou para uma casa onde todos compartilham uma chave. Até Mia consegue ligar o forno.
[600ms]
Essa é a nossa imagem do acesso sem limites, não uma configuração de entrada recomendada.
[600ms]
[confident] Precisamos de identidades individuais e de permissões adequadas ao que cada pessoa deve fazer.

## Step 2 · The house is your tenant

[calm] Pense na casa como o locatário do Microsoft Entra da Contoso: seu próprio diretório de identidades.
[600ms]
A família pertence a ele, mas um vizinho pode ser convidado sem virar membro da família.
[600ms]
[confident] O locatário oferece um lugar para administrar essas identidades. Ele não concede automaticamente acesso a todos os recursos do Azure.

## Step 3 · Every house needs an address

[calm] A casa começa com um endereço: Contoso ponto on Microsoft ponto com.
[600ms]
A Contoso pode comprovar a propriedade de Contoso ponto com com um registro DNS e usar esse domínio personalizado nos nomes de entrada.
[600ms]
[confident] O domínio original permanece. Mudar o nome no portão não muda as permissões dentro da casa.

## Step 4 · Who lives here

[calm] Pai, Mãe, Noah e Mia precisam de uma identidade de usuário individual.
[600ms]
Os adultos e as crianças viram grupos, para que o acesso seja atribuído ao grupo em vez de administrado pessoa por pessoa.
[600ms]
[confident] Um grupo é uma lista de membros. O acesso dessa lista depende das permissões atribuídas a ela.

## Step 5 · House rules run the house

[calm] As funções do Microsoft Entra são o chaveiro de administração da casa. Elas permitem tarefas específicas do diretório, como administrar usuários.
[600ms]
Neste exemplo, o Pai é Administrador Global e a Mãe é Administradora de Usuários.
[600ms]
[confident] São trabalhos diferentes. Escolha a função menos privilegiada e um escopo compatível com a tarefa, sem entregar a casa inteira a cada ajudante.

## Step 6 · Appliance keys are a second keyring

[calm] Agora veja os aparelhos. Eles representam recursos do Azure, com outro chaveiro de permissões: o controle de acesso baseado em função do Azure.
[600ms]
Um administrador do Entra não pode administrar esses recursos automaticamente.
[600ms]
[confident] Uma atribuição de função do Azure combina quem, qual função e onde ela se aplica. Os dois sistemas de permissões são separados por padrão.

## Step 7 · The whole house — All in One

[calm] Lembre de três perguntas: quem pertence aqui, o que pode fazer e onde essa permissão se aplica?
[600ms]
Usuários e grupos respondem à primeira. Funções do Entra e funções de recursos do Azure respondem a partes diferentes da segunda.
[600ms]
[confident] O escopo responde à terceira. Agora vamos montar o cadastro da família, sem compartilhar uma identidade.

## Step 8 · The same house, in the Azure portal

[confident] A faixa superior mostra o Pai e a Mãe, suas funções do Entra e o locatário em que elas se aplicam.
[600ms]
Abaixo, os adultos têm Storage Blob Data Reader na conta de armazenamento; Noah tem Virtual Machine Contributor na máquina virtual.
[600ms]
[confident] Cada atribuição permite apenas as ações da função naquele escopo. Uma função do diretório não é uma permissão sobre recursos do Azure.
