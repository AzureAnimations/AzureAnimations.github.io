# Narrator Script — Security · Microsoft Entra applications: registrations, enterprise apps and consent — Azure Security Journey

**Source animation:** [EntraApplicationsAndConsent.html](../../../journeys/Security/EntraApplicationsAndConsent.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/entra/identity-platform/app-objects-and-service-principals>
- <https://learn.microsoft.com/entra/identity-platform/permissions-consent-overview>
- <https://learn.microsoft.com/entra/identity/enterprise-apps/user-admin-consent-overview>
- <https://learn.microsoft.com/entra/identity-platform/quickstart-register-app>

---

## Step 1 · An app wants your mailbox

[curious] A Ana entra no MailTidy, um app novo, e ele pede acesso à caixa de correio dela.
[600ms]
[calm] A Priya cuida de identidade na Contoso. Então, alguém deve dizer sim? E quem decide?
[600ms]
[confident] Esta lição acompanha um aplicativo pelo registro, pelo consentimento, pela atribuição e pela revisão no Microsoft Entra ID.

## Step 2 · App registration: the app’s identity

[calm] O Sam, o desenvolvedor, registra o MailTidy uma única vez. O registro define o app.
[600ms]
[curious] Ele define o nome do app, para onde o login retorna e como o app prova quem é.
[600ms]
[confident] O registro cria o objeto de aplicativo no tenant de origem, com um ID de cliente único no mundo todo.

## Step 3 · Enterprise application: the app in your tenant

[calm] Cada tenant que usa o MailTidy recebe a sua própria cópia local, chamada de principal de serviço.
[600ms]
[curious] No Entra, ele aparece em Aplicativos empresariais, e é ali que a Contoso o gerencia.
[600ms]
[confident] Pense no objeto de aplicativo como o modelo global e no principal de serviço como a instância local.

## Step 4 · Delegated or application permissions

[calm] Existem dois tipos de permissão. Com a delegada, o aplicativo age como o usuário conectado.
[600ms]
[serious] Com a de aplicativo, ele age por conta própria, sem nenhum usuário presente. Ela vale para todos os dados que cobre, como todas as caixas de correio.
[600ms]
[confident] O acesso delegado só alcança o que aquele usuário já conseguiria alcançar.

## Step 5 · Consent: who can say yes

[calm] O consentimento é como as permissões são concedidas. Um usuário pode consentir sobre os próprios dados.
[600ms]
[curious] Um administrador pode consentir por todos, e alguns pedidos exigem um administrador.
[600ms]
[serious] As permissões de aplicativo, e muitas permissões delegadas de alto privilégio, só podem ser aprovadas por um administrador.

## Step 6 · User consent settings

[calm] A Priya decide se os usuários podem consentir ou não. Existem três opções internas.
[600ms]
[curious] Nenhum consentimento de usuário. Editores verificados com permissões de baixo impacto. Ou qualquer aplicativo.
[600ms]
[confident] Na opção do meio, você classifica quais permissões contam como de baixo impacto. Os administradores também podem criar políticas de consentimento personalizadas.

## Step 7 · Admin consent and the workflow

[calm] Quando os usuários não podem consentir, o fluxo de consentimento do administrador permite que eles peçam aprovação.
[600ms]
[curious] Os revisores são notificados, um deles decide, e o usuário recebe a resposta.
[600ms]
[serious] Ser nomeado revisor não aumenta os privilégios de ninguém. Para aprovar, a pessoa precisa ter as permissões para conceder esse consentimento.

## Step 8 · Try it: approve or deny

[excited] Chegam três pedidos de consentimento. Decida cada um e depois veja o porquê.
[600ms]
[curious] Faça três perguntas. Quem age? O editor é verificado? A permissão é de baixo impacto?
[600ms]
[reassuring] As respostas certas seguem a configuração da Contoso, que deixa os usuários consentirem só para editores verificados e permissões de baixo impacto.

## Step 9 · Review and revoke permissions

[serious] Uma concessão dura até alguém removê-la. Então, revise o que cada aplicativo tem.
[600ms]
[confident] Depois, revogue o excesso. Você precisa, no mínimo, da função de Administrador de Aplicativo na Nuvem.
[600ms]
[calm] O portal revoga as permissões consentidas pelo administrador. As concessões de usuário são revogadas pelo Microsoft Graph ou pelo PowerShell.

## Step 10 · Assign users and require assignment

[calm] O consentimento diz o que o aplicativo pode fazer. A atribuição diz quem pode usá-lo.
[600ms]
[confident] Com a atribuição obrigatória, só os usuários e grupos atribuídos conseguem entrar.
[600ms]
[reflective] Aí os usuários não conseguem consentir por conta própria, então um administrador precisa conceder o consentimento para todo o tenant. A atribuição por grupo exige uma licença Premium.

## Step 11 · Secrets, certificates or federated credentials

[calm] Um aplicativo prova quem é com uma credencial. Escolha a que tem menos risco de vazar.
[600ms]
[curious] Não guardar nada é melhor do que um certificado, e um certificado é melhor do que um segredo de cliente.
[600ms]
[serious] Identidades gerenciadas e credenciais federadas eliminam os segredos armazenados. Segredos de cliente não devem ser usados em produção.

## Step 12 · Recap: register, consent, assign, review

[calm] Quatro movimentos mantêm um app sob controle. Registre, defina quem pode consentir, atribua quem pode usar e revise o que ele tem.
[600ms]
[confident] Juntos, eles cobrem as habilidades do S C 500 sobre identidade de aplicativo e consentimento.
[600ms]
[proud] Elas ficam no domínio de gerenciamento de identidade, acesso e governança.
