# Narrator Script - Identidades externas

**Source animation:** journeys/Identity/ExternalIdentities.html

Delivery cues appear in brackets; pauses are on separate lines.
Generated from scripts/_identity-journeys/external.mjs.

## Step 1 · A partner needs to collaborate

[calm] Um parceiro precisa colaborar.
[600ms]
Alex trabalha na Partner e já tem uma conta. A Contoso precisa que ele revise a configuração de shop-vm sem criar uma conta compartilhada.
[600ms]
[serious] Este exemplo usa uma conta Entra da Partner. O B2B também aceita outros provedores de identidade configurados.

## Step 2 · Invite Alex into Contoso

[calm] Convidar Alex para a Contoso.
[600ms]
Um responsável autorizado cria o registro B2B de Alex na Contoso. O convite está pendente e a conta de origem permanece na Partner.
[600ms]
[serious] Permissões de convite, restrições de domínio e configurações entre locatários continuam válidas. Nenhuma senha é copiada para a Contoso.

## Step 3 · Redeem the invitation

[calm] Resgatar o convite.
[600ms]
Alex entra com a identidade de origem e conclui o consentimento. Aceitar o convite não cria uma atribuição de função do Azure.
[600ms]
[serious] O seletor compara estados do exemplo; não revoga consentimento real. A Contoso precisa autorizar recursos separadamente.

## Step 4 · One person, two directory records

[calm] Uma pessoa, dois registros.
[600ms]
A identidade de origem autentica Alex. A Contoso mantém outro objeto de usuário. Guest ou Member descreve a relação, não o provedor de identidade.
[600ms]
[serious] Guest e Member têm permissões padrão de diretório diferentes. Alterar UserType não muda o provedor; deve refletir a relação organizacional real.

## Step 5 · Authorize just the intended resource

[calm] Autorizar apenas o recurso previsto.
[600ms]
A Contoso atribui Reader a Alex no escopo de shop-vm. Ele pode ler a configuração, mas não excluir a VM. Remover a função não desfaz a aceitação do convite.
[600ms]
[serious] Supõe políticas satisfeitas, alterações propagadas e nenhuma outra função ou negação. Reader não concede entrada no SO convidado nem acesso a dados.

## Step 6 · External identity. Bounded collaboration.

[calm] Identidade externa. Colaboração limitada.
[600ms]
Alex mantém sua identidade de origem, a Contoso gerencia sua representação e uma função com escopo fornece a permissão. São responsabilidades distintas.
[600ms]
[serious] A colaboração B2B ocorre em um locatário de força de trabalho. Um locatário externo separado atende ao cadastro e à entrada de clientes.
