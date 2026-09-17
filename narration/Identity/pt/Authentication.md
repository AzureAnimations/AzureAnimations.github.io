# Narrator Script - Autenticação e acesso

**Source animation:** journeys/Identity/Authentication.html

Delivery cues appear in brackets; pauses are on separate lines.
Generated from scripts/_identity-journeys/authentication.mjs.

## Step 1 · Two apps. Repeated sign-ins.

[calm] Dois apps. Entradas repetidas.
[600ms]
Maya abre o app de pedidos e o gerenciamento do Azure. Entradas separadas interrompem o trabalho; autenticar-se não define o que ela pode fazer.
[600ms]
[serious] Os apps são pontos de entrada distintos. A autenticação comprova a identidade; cada serviço mantém suas próprias permissões.

## Step 2 · Reuse an eligible session

[calm] Reutilizar uma sessão válida.
[600ms]
Com o SSO do Microsoft Entra, apps compatíveis reutilizam a sessão de Maya. Isso reduz solicitações repetidas, mas não elimina requisitos das políticas.
[600ms]
[serious] A reutilização depende da integração e da validade da sessão. Novos requisitos, expiração ou políticas podem exigir outra entrada.

## Step 3 · Compare the authentication evidence

[calm] Comparar evidências de autenticação.
[600ms]
Uma senha é um fator. Senha com Authenticator acrescenta outro. Uma chave FIDO2 desbloqueada com PIN pode ser sem senha e multifator.
[600ms]
[serious] Os métodos precisam estar habilitados e registrados. Sem senha e MFA podem coincidir; duas senhas não são fatores diferentes.

## Step 4 · Evaluate the required strength

[calm] Avaliar a força exigida.
[600ms]
Após a autenticação inicial, a regra hipotética da Contoso exige MFA no escritório e MFA resistente a phishing remotamente. A sessão deve atender ao requisito aplicável.
[600ms]
[serious] Regra ilustrativa, não um padrão do Azure. O Acesso Condicional requer Entra ID P1 ou licença incluída; políticas de risco exigem P2.

## Step 5 · Check the resource permission too

[calm] Verificar também a permissão.
[600ms]
Atender à política não atribui uma função do Azure. Maya precisa de Reader no escopo de shop-vm para ler sua configuração neste exemplo limitado.
[600ms]
[serious] Supõe nenhuma outra função ou negação e propagação concluída. Reader permite leitura do plano de controle, não alteração, entrada na VM ou acesso a dados.

## Step 6 · Session, method, policy, permission

[calm] Sessão, método, política e permissão.
[600ms]
O SSO reutiliza a sessão; a autenticação fornece evidências; o Acesso Condicional verifica requisitos; o Azure RBAC concede permissões. Nenhuma camada substitui as outras.
[600ms]
[serious] Estar no escritório não garante segurança. Políticas reais consideram os sinais necessários e todas as políticas aplicáveis; este exemplo é limitado.
