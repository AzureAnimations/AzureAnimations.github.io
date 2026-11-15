# Narrator Script - O quarto de hóspedes

**Source animation:** journeys/Identity/ExternalIdentities.html
**Script status:** Authored voiceover.

Delivery cues appear in brackets; pauses are on separate lines.
One block per on-screen step. Interactive choices are examples, not instructions to change real resources.

<!-- Reference: https://learn.microsoft.com/en-us/entra/external-id/user-properties -->
<!-- Reference: https://learn.microsoft.com/en-us/entra/external-id/redemption-experience -->
<!-- Reference: https://learn.microsoft.com/en-us/entra/external-id/tenant-configurations -->
<!-- Reference: https://learn.microsoft.com/en-us/azure/role-based-access-control/role-assignments-external-users -->
<!-- Reference: https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles/general -->
<!-- Reference: https://learn.microsoft.com/en-us/entra/external-id/cross-tenant-access-overview -->

## Step 1 · The neighbour who needs to help

[curious] Alex trabalha na Partner e já tem uma identidade lá. A Contoso precisa de ajuda para inspecionar a máquina virtual da loja.
[600ms]
Não devemos compartilhar uma conta da família nem copiar a senha de Alex para a Contoso.
[600ms]
[confident] A colaboração entre empresas permite convidar essa identidade existente e conceder apenas o acesso necessário ao trabalho.

## Step 2 · Invite Alex over

[calm] Uma pessoa autorizada a convidar cria um registro de convidado para Alex no diretório da Contoso.
[600ms]
O convite está pendente. O registro existe, mas Alex ainda não o aceitou com sua identidade de origem.
[600ms]
[confident] Nenhuma senha é copiada. Restrições de convite e configurações entre locatários continuam valendo; não é uma porta aberta sem limites.

## Step 3 · Alex accepts, using their own key

[calm] Alex aceita o convite entrando com a identidade da Partner e concluindo o consentimento necessário.
[600ms]
Isso vincula o convite à pessoa que vai utilizá-lo.
[600ms]
[confident] Aceitar não concede permissão sobre recursos. A Contoso ainda decide qual recurso Alex pode acessar e quais ações são permitidas.

## Step 4 · One person, two house registers

[calm] Uma pessoa agora aparece em dois diretórios: a identidade de origem na Partner e o objeto de convidado na Contoso.
[600ms]
Convidado e Membro descrevem a relação e as permissões padrão do diretório, não a origem das credenciais.
[600ms]
[confident] Mudar esse rótulo não transfere a identidade de Alex para a Contoso nem cria uma senha nova ali.

## Step 5 · Access exactly one appliance

[calm] A Contoso atribui Reader a Alex no escopo apenas da máquina virtual da loja.
[600ms]
Depois das verificações de entrada e da propagação das permissões, Alex pode consultar a configuração, mas não excluir a máquina com Reader.
[600ms]
[confident] A função não concede entrada no sistema operacional nem acesso aos dados. Remover a atribuição retira essa permissão, não o registro de convidado.

## Step 6 · A guest, not a resident

[calm] Separe as três peças: a Partner comprova a identidade de Alex, a Contoso mantém o registro de convidado e uma função com escopo concede acesso ao recurso.
[600ms]
Isso é colaboração no locatário de força de trabalho da Contoso.
[600ms]
[confident] Um locatário externo para cadastro de clientes é outro cenário. Convidar um colega não transforma este diretório em um sistema de identidades de clientes.

## Step 7 · The guest, in Microsoft Entra ID

[confident] Siga o desenho do diretório de origem de Alex até o objeto de convidado e a atribuição Reader na máquina virtual.
[600ms]
A senha continua na Partner. Aceitar a comprovação de autenticação multifator da Partner depende das configurações de confiança entre locatários.
[600ms]
[confident] As últimas linhas comparam leituras de configuração permitidas com exclusão recusada. Ser convidado nunca significou poder fazer tudo.
