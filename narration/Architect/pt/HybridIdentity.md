# Narrator Script — Architect · Design hybrid identity and on-premises access

**Source animation:** [HybridIdentity.html](../../../journeys/Architect/HybridIdentity.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/entra/identity/hybrid/whatis-hybrid-identity>
- <https://learn.microsoft.com/entra/identity/hybrid/cloud-sync/what-is-cloud-sync>
- <https://learn.microsoft.com/entra/identity/hybrid/cloud-sync/connect-to-cloud-sync-decision-guide>
- <https://learn.microsoft.com/entra/identity/hybrid/connect/choose-ad-authn>
- <https://learn.microsoft.com/entra/identity/hybrid/connect/how-to-connect-sso>
- <https://learn.microsoft.com/entra/identity/domain-services/overview>
- <https://learn.microsoft.com/entra/identity/app-proxy/overview-what-is-app-proxy>
- <https://learn.microsoft.com/entra/global-secure-access/concept-private-access>
- <https://learn.microsoft.com/entra/identity/conditional-access/overview>

---

## Step 1 · Two directories, one workforce

[calm] Os funcionários da Contoso já existem no Active Directory local, mas seus aplicativos em nuvem usam o Microsoft Entra ID.
[600ms]
[curious] Os dois diretórios devem representar a mesma força de trabalho, em vez de criar um segundo conjunto de contas não relacionadas.
[600ms]
[reassuring] Vamos escolher sincronização, login e acesso à aplicação separadamente, porque eles resolvem partes diferentes desse problema.

## Step 2 · Sync: Cloud Sync or Connect Sync?

[calm] Ambas as opções de sincronização trazem usuários e grupos para o Microsoft Entra ID, mas o modelo operacional é diferente.
[600ms]
[curious] Cloud Sync utiliza agentes leves com configuração gerenciada na nuvem, enquanto Connect Sync executa um motor de sincronização mais completo em um servidor.
[600ms]
[reassuring] Compare os requisitos e necessidades de personalização antes de escolher; sincronizar uma identidade não escolhe sozinho seu método de login.

## Step 3 · Sign-in: who checks the password?

[calm] Siga cada caminho de login e faça uma pergunta: onde a senha é realmente verificada?
[600ms]
[curious] A sincronização de hash de senha valida na nuvem, a autenticação pass-through alcança controladores de domínio on-premises e a federação transfere a autenticação para outro sistema.
[600ms]
[reassuring] Escolha o método mais simples que atenda aos requisitos da Contoso, incluindo qualquer requisito para verificar o estado da conta local.

## Step 4 · Single sign-on: no repeat prompts

[calm] O login único evita pedir aos funcionários que se autenticem novamente toda vez que abrem um aplicativo na nuvem.
[600ms]
[curious] O diagrama separa o token de atualização primário usado por dispositivos conectados do Seamless SSO em dispositivos corporativos conectados ao domínio.
[600ms]
[reassuring] Escolha o mecanismo que corresponde ao dispositivo e ao design de login, em vez de assumir que toda forma de SSO funciona da mesma forma.

## Step 5 · Legacy apps: managed domain or your own DCs?

[calm] A aplicação legada da Contoso ainda espera serviços de domínio como LDAP, Kerberos ou integração de domínio.
[600ms]
[curious] Um domínio gerenciado reduz a administração, enquanto executar controladores de domínio Active Directory em máquinas virtuais Azure oferece mais controle.
[600ms]
[reassuring] A questão decisiva é quais capacidades a aplicação precisa e quem operará os controladores de domínio dos quais ela depende.

## Step 6 · On-premises apps: reach them without a VPN

[calm] Funcionários remotos precisam dos aplicativos dentro da rede da Contoso, sem abrir conexões de entrada para esses aplicativos.
[600ms]
[curious] O proxy de aplicação publica aplicações web, enquanto o Private Access aborda um conjunto mais amplo de aplicações e recursos privados.
[600ms]
[reassuring] Siga o caminho do conector de saída e escolha a abordagem de acesso que se encaixe nos requisitos da aplicação e do dispositivo.

## Step 7 · Conditional Access: one policy layer

[calm] O Acesso Condicional pega os sinais mostrados à esquerda e os transforma em uma decisão de acesso.
[600ms]
[curious] Um usuário, dispositivo, localização ou condição de risco pode levar a um bloqueio ou a um requisito adicional, como autenticação multifator.
[600ms]
[reassuring] A mesma abordagem política pode proteger aplicações em nuvem e as aplicações on-premises que a Contoso publicou.

## Step 8 · All in one: Contoso’s hybrid identity

[calm] A Contoso agora tem uma força de trabalho representada em ambos os diretórios, com sincronização e login escolhidos deliberadamente.
[600ms]
[curious] Os caminhos das aplicações diferem, mas eles se baseiam nas mesmas decisões de acesso baseadas em identidade.
[600ms]
[reassuring] Isso completa a autenticação e a alcancabilidade; a próxima lição pergunta o que cada pessoa ou carga de trabalho pode fazer, e por quanto tempo.

