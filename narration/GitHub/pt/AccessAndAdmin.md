# Narrator Script — GitHub · Access and Admin

**Source animation:** [AccessAndAdmin.html](../../../journeys/GitHub/AccessAndAdmin.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/training/paths/github-foundations/>
- <https://learn.microsoft.com/training/paths/github-foundations-2/>

---

## Step 1 · Contoso Is Growing

[calm] Contoso está crescendo. Há Maya, Ravi, Noor, Ivy e Sam, além de uma organização, um contratado e um código privado.
[600ms]
[curious] Então, quem pode fazer o quê, e quem está no comando das configurações?
[600ms]
[confident] Essas três perguntas na linha de baixo são as três partes dessa jornada: contas, acesso e administração.

## Step 2 · Passwords Alone Fall Short

[calm] Comece pela conta. Uma senha pode ser adivinhada, reutilizada ou falsificada de phishing.
[600ms]
[serious] Se for a única fechadura, quem a segura pode entrar como Ravi.
[600ms]
[reassuring] A autenticação de dois fatores adiciona um segundo bloqueio, algo que só você conhece ou tem, então só uma senha roubada não é suficiente.

## Step 3 · Add a Second Factor

[curious] Após a senha, GitHub pede algo que só você tem: um código de um aplicativo, uma mensagem de texto, uma chave de segurança ou GitHub Mobile.
[600ms]
[calm] Aplicativos de autenticação criam códigos de uso único, e chaves de segurança usam WebAuthn. Mantenha seus códigos de recuperação como backup.
[600ms]
[confident] Os proprietários de organizações podem exigir dois fatores para membros, gerentes de faturamento e colaboradores externos.

## Step 4 · Passkeys: One Step, No Password

[curious] Uma chave de acesso é um par de chaves. A chave privada permanece no seu dispositivo, e GitHub mantém a chave pública.
[600ms]
[impressed] Uma etapa cobre tanto a senha quanto o segundo fator. Você desbloqueia com um PIN, uma senha ou um biométrico.
[600ms]
[serious] As chaves de acesso estão vinculadas ao domínio real, então um navegador recusa um site semelhante. Ainda assim, mantenha um método de reserva para evitar bloqueios.

## Step 5 · Organization Roles

[calm] Agora, o acesso. Uma organização reúne as pessoas e os repositórios da Contoso em um único lugar.
[600ms]
[confident] Os proprietários detêm acesso administrativo completo, enquanto os membros são o papel padrão, não administrativo.
[600ms]
[serious] Mantenha poucos donos, mas nunca menos que dois, para que a propriedade nunca seja perdida. Também existem funções especializadas, como moderador e gerente de faturamento.

## Step 6 · Repository Roles: Try It

[curious] Repositórios têm seus próprios papéis. Escolha um e observe o que ele pode fazer.
[600ms]
[confident] De menor para maior acesso, eles são Leitura, Triagem, Gravação, Manutenção e Administrador.
[600ms]
[determined] O princípio é o menor privilégio: dar às pessoas o menor papel que cumpra a tarefa.

## Step 7 · Teams: Grant Access to Groups

[calm] Conceder acesso pessoa por pessoa não escala, então é aí que as equipes entram.
[600ms]
[confident] Dê um papel a uma equipe uma vez e todos que fazem nela o terão. Equipes filhas herdam o acesso da equipe de origem dos pais.
[600ms]
[serious] As equipes possuem apenas membros da organização, então colaboradores externos não podem entrar em uma.

## Step 8 · Least Privilege for a Contractor

[curious] Sam é um contratado, não um funcionário.
[600ms]
[confident] Assim, Sam se torna um colaborador externo, adicionado ao único repositório que o trabalho precisa, com um papel que você escolhe, e nada mais.
[600ms]
[reassuring] Sam não é membro e não pode entrar em equipes. Se a organização exigir dois fatores, Sam deve ativar antes de aceitar.

## Step 9 · Visibility and Branch Protection

[calm] Duas configurações protegem o próprio código. A visibilidade decide quem pode ver um repositório: público, privado ou interno.
[600ms]
[confident] Uma regra de proteção de ramos decide o que pode cair na principal, como revisões e passar em checagens de status antes da fusão.
[600ms]
[serious] Pessoas com acesso de administrador de repositório configurado ambos. Repositórios internos precisam de uma conta empresarial no GitHub Enterprise Cloud.

## Step 10 · Enterprise Managed Users

[curious] Contas pessoais são criadas e pertencentes à pessoa. Usuários gerenciados pela empresa funcionam de forma diferente.
[600ms]
[confident] O provedor de identidade da Contoso cria e controla as contas, e as pessoas fazem login por meio dele.
[600ms]
[reflective] Usuários gerenciados não podem colaborar fora da empresa, então não é a melhor opção para todas as empresas. GitHub documenta como escolher.

## Step 11 · Owners Hold the Controls

[calm] Os proprietários definem os padrões da organização, como permissões base, dois fatores exigidos e equipes.
[600ms]
[curious] Depois, eles decidem quem fica Copilot, se são todos, alguns ou nenhum dos membros, e quais políticas se aplicam.
[600ms]
[serious] Um detalhe: se um proprietário já escolheu uma apólice, a organização não pode anulá-la.

## Step 12 · Access and Admin: All in One

[calm] Vamos juntar isso. Proteja as contas com dois fatores e chaves de acesso.
[600ms]
[confident] Compartilhe apenas o acesso que as pessoas precisam por meio de cargos organizacionais, funções de repositório e equipes.
[600ms]
[proud] E mantenha as configurações com os donos e administradores. Esse é o domínio de privacidade, segurança e administração do exame G H 900.
