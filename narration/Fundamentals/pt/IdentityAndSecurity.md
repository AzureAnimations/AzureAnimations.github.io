# Roteiro de narração - Identidade e segurança

**Source animation:** journeys/Fundamentals/IdentityAndSecurity.html
**Script status:** Authored voiceover.
**Language:** Português (Brasil)

As indicações entre colchetes não são faladas. As pausas ficam em linhas separadas. Cada bloco corresponde a uma etapa da animação.
<!-- Sources: https://learn.microsoft.com/azure/role-based-access-control/overview ; https://learn.microsoft.com/security/zero-trust/zero-trust-overview ; https://learn.microsoft.com/azure/security/fundamentals/management-monitoring-overview -->

## Step 1 · Who are you, and what may you do?

[calm] Maya precisa inspecionar a loja de produção, não alterá-la. Antes de permitir o acesso, o sistema verifica quem ela é e se a ação solicitada é permitida.
[600ms]
[confident] São perguntas separadas: autenticação comprova a identidade; autorização decide o acesso. Entrar com sucesso não dá permissão para fazer tudo.

## Step 2 · The directory holds the identities

[calm] Microsoft Entra ID é o diretório de identidades da Contoso, com usuários, grupos e identidades de aplicações. Maya tem uma identidade gerenciada pela organização, em vez de contas desconectadas para cada recurso.
[600ms]
[confident] O diretório ajuda a estabelecer quem está solicitando. Permissões apropriadas controlam o que essa identidade pode fazer nos recursos do Azure.

## Step 3 · Prove who is asking

[calm] Maya entra e comprova sua identidade. A autenticação multifator usa tipos diferentes de comprovação, enquanto o logon único reduz entradas repetidas em aplicações conectadas.
[600ms]
[confident] Métodos sem senha oferecem outra opção. Depois de autenticar, o sistema ainda precisa avaliar se Maya pode executar a ação solicitada.

## Step 4 · Check the sign-in conditions

[calm] Nem toda tentativa de acesso tem o mesmo contexto. O Acesso Condicional permite aplicar requisitos conforme os sinais da tentativa, como exigir autenticação multifator.
[600ms]
[confident] Atender a essas condições ajuda a proteger a entrada. Isso não substitui as permissões que definem o que Maya pode fazer depois de obter acesso.

## Step 5 · Then allow the action

[calm] A Contoso atribui a Maya a função Leitor no grupo de recursos de produção. A função define as ações permitidas; o escopo define onde elas se aplicam.
[600ms]
[confident] Ela pode inspecionar recursos sem receber dessa função permissão para alterá-los. Ler configurações não significa ler automaticamente todos os dados de clientes dentro dos recursos.

## Step 6 · Same person, different actions

[calm] A identidade de Maya continua a mesma, mas a ação solicitada importa. Leitor permite inspecionar configurações; essa função não concede permissão para modificá-las.
[600ms]
[confident] O exemplo pressupõe que nenhuma outra atribuição ofereça acesso adicional. Permissões podem se somar, então atribuir Leitor não cancela permissões que Maya já tenha por outras vias.

## Step 7 · Assume nothing is safe by default

[calm] Confiança Zero significa verificar explicitamente, conceder o mínimo de acesso necessário e presumir que uma violação pode ocorrer. Estar dentro de uma rede não basta para confiar em uma solicitação.
[600ms]
[confident] A Contoso usa camadas de proteção para que a falha de um controle não deixe toda a loja exposta.

## Step 8 · Keep checking the security posture

[calm] Permissões não encerram o trabalho de segurança. Microsoft Defender for Cloud ajuda a revisar a postura de segurança, encontrar recomendações e identificar ameaças com as proteções habilitadas.
[600ms]
[confident] A equipe ainda investiga alertas e faz melhorias. Uma recomendação indica trabalho a considerar, não que o problema já foi corrigido.

## Step 9 · Identity and Security - All in One

[calm] Siga o caminho de Maya: estabelecer a identidade, verificar a entrada, aplicar condições e autorizar a ação no escopo correto. Mantenha as proteções em camadas e revise-as ao longo do tempo.
[600ms]
[confident] A Contoso já gerencia o acesso de forma deliberada. Agora precisa da mesma clareza sobre quanto custa a loja.