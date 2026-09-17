# Narrator Script - Locatário, identidade e acesso ao Azure

**Source animation:** journeys/Identity/TenantsAndIdentity.html

Delivery cues appear in brackets; pauses are on separate lines.
Generated from scripts/_identity-journeys/content.mjs.

## Step 1 · Signed in. Still denied.

[calm] Sessão iniciada. Acesso negado.
[600ms]
Maya entra, mas não pode ler a configuração de shop-vm. Neste exemplo, não se aplicam outras funções nem atribuições de negação.
[600ms]
[serious] Ler a configuração da VM: acesso negado.

## Step 2 · Start with the tenant

[calm] Comece pelo locatário.
[600ms]
Microsoft Entra ID fornece o serviço de identidade. O locatário da Contoso é sua instância de diretório.
[600ms]
[serious] Um locatário não é uma região de VM. Funções do Entra não concedem acesso automático a recursos do Azure.

## Step 3 · People and groups live here

[calm] Pessoas e grupos.
[600ms]
Maya e o grupo de segurança de operações são objetos do diretório. Ser membro não concede permissão sobre recursos.
[600ms]
[serious] Maya é membro. O grupo ainda não tem uma função do Azure atribuída.

## Step 4 · One directory, two subscriptions

[calm] Um diretório, duas assinaturas.
[600ms]
As assinaturas de desenvolvimento e produção confiam no mesmo locatário, com escopos de recursos separados.
[600ms]
[serious] Cada assinatura confia em um locatário; várias assinaturas podem usar o mesmo locatário.

## Step 5 · Authentication answers who

[calm] Autenticação responde quem.
[600ms]
Microsoft Entra ID autentica Maya. Isso, por si só, não autoriza ler a configuração da VM.
[600ms]
[serious] Ler a configuração da VM: acesso negado.

## Step 6 · A role permits the read

[calm] Uma função permite a leitura.
[600ms]
Um administrador autorizado atribui Reader a Operations no escopo de shop-vm. Maya pode ler sua configuração.
[600ms]
[serious] Leitura permitida após os direitos entrarem em vigor. Reader não permite login no SO convidado.

## Step 7 · Identity and Access - All in One

[calm] Identidade e acesso - Visão completa.
[600ms]
O locatário fornece identidades; as assinaturas organizam recursos. Azure RBAC permite ações em um escopo.
[600ms]
[serious] Quem: Maya via Operations. O quê: ler. Onde: shop-vm.
