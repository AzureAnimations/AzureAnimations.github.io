# Narrator Script - A porta da frente

**Source animation:** journeys/Identity/Authentication.html
**Script status:** Authored voiceover.

Delivery cues appear in brackets; pauses are on separate lines.
One block per on-screen step. Interactive choices are examples, not instructions to change real resources.

<!-- Reference: https://learn.microsoft.com/en-us/entra/identity/authentication/concept-authentication-strengths -->
<!-- Reference: https://learn.microsoft.com/en-us/entra/identity/conditional-access/overview -->
<!-- Reference: https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/what-is-single-sign-on -->
<!-- Reference: https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles/general -->
<!-- Reference: https://learn.microsoft.com/en-us/entra/identity/authentication/concept-authentication-passkeys-fido2 -->

## Step 1 · Unlocking the same door twice

[curious] A Mãe abre o aplicativo de pedidos, depois a administração do Azure, e recebe outra solicitação de entrada.
[600ms]
As duas entradas precisam saber quem ela é, mas repetir a senha não diz o que ela pode fazer em cada serviço.
[600ms]
[confident] A autenticação comprova a identidade. A autorização decide quais ações essa identidade pode executar.

## Step 2 · Reuse an eligible session

[calm] O logon único pode reutilizar a sessão válida da Mãe quando os aplicativos oferecem suporte.
[600ms]
Isso evita outra entrada sem desativar as verificações de permissão do aplicativo.
[600ms]
[confident] Uma sessão expirada ou um novo requisito de política ainda pode exigir outra comprovação. O logon único permite reutilização quando possível, não promete ausência de novos desafios.

## Step 3 · Not every key is equally convincing

[calm] Compare as provas da Mãe: senha, senha com Authenticator ou uma chave FIDO dois desbloqueada por PIN.
[600ms]
A chave combina posse com verificação local, por isso pode ser sem senha e multifator ao mesmo tempo.
[600ms]
[confident] Os métodos precisam estar habilitados e registrados. Duas senhas continuam sendo o mesmo tipo de fator.

## Step 4 · A doorbell that decides how hard to check

[calm] O Acesso Condicional avalia a situação e define a prova necessária para esta entrada.
[600ms]
No exemplo da Contoso, o escritório aceita autenticação multifator; a cafeteria exige prova resistente a phishing. É uma política escolhida, não um padrão do Azure.
[600ms]
[confident] Estar no escritório não garante segurança. Políticas reais consideram os sinais aplicáveis e exigem a licença adequada do Entra.

## Step 5 · Getting in is not the same as being allowed

[calm] A Mãe passou pelas verificações de entrada, mas a máquina virtual faz outra pergunta: o que ela pode fazer aqui?
[600ms]
Uma atribuição Reader nesse escopo permite consultar a configuração da máquina.
[600ms]
[confident] Ela não permite alterações, entrada no sistema operacional nem acesso aos dados. Passar pela porta não entrega o chaveiro dos aparelhos.

## Step 6 · Session, proof, policy, permission

[calm] Agora quatro camadas trabalham juntas: sessão reutilizável, método de autenticação, requisitos de Acesso Condicional e permissões sobre recursos.
[600ms]
Mudar uma não substitui as outras. Uma prova mais forte não cria uma atribuição de função.
[600ms]
[confident] Use as camadas de entrada para estabelecer confiança e a autorização com escopo para limitar o que essa identidade pode fazer.

## Step 7 · The front door, in Microsoft Entra ID

[confident] A faixa superior reúne a chave FIDO dois da Mãe, o Acesso Condicional e o logon único entre os dois aplicativos quando a sessão pode ser reutilizada.
[600ms]
A faixa inferior mostra uma atribuição Reader separada na máquina virtual da loja, e nenhuma na conta de armazenamento.
[600ms]
[confident] A mesma pessoa autenticada tem resultados diferentes conforme o recurso. Provar a identidade e conceder permissão continuam sendo decisões separadas.
