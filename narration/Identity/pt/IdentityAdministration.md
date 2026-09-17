# Narrator Script - Administração de identidades

**Source animation:** journeys/Identity/IdentityAdministration.html

Delivery cues appear in brackets; pauses are on separate lines.
Generated from scripts/_identity-journeys/administration.mjs.

## Step 1 · Three requests. Different responsibilities.

[calm] Três solicitações. Responsabilidades distintas.
[600ms]
Maya precisa de suporte de conta. A Contoso distingue a redefinição pelo suporte, a atribuição de licença e o gerenciamento dos métodos de autenticação.
[600ms]
[serious] Maya não tem função privilegiada nem pertence a grupo atribuível a funções. Operador e usuária são pessoas distintas.

## Step 2 · Delegate the task, not the whole directory

[calm] Delegar a tarefa, não todo o diretório.
[600ms]
A função de menor privilégio depende da tarefa. Um administrador autorizado a atribui ao operador; escolher uma tarefa aqui nunca muda a função atribuída.
[600ms]
[serious] Supõe que as atribuições abrangem Maya. Authentication Administrator também redefine sua senha; Password Administrator é mais restrita. Azure Reader não concede essas tarefas.

## Step 3 · A license is an assignment with a result

[calm] Uma licença tem um resultado de atribuição.
[600ms]
Neste exemplo, atribua Microsoft 365 Business Standard à Maya. Sem licença disponível ou permissão, a tentativa falha; corrigir a capacidade não aplica a licença.
[600ms]
[serious] Supõe local de uso válido e nenhum serviço conflitante. Erros exigem análise e nova tentativa; licença não atribui função de recurso do Azure.

## Step 4 · Register before recovery is needed

[calm] Registrar antes de precisar recuperar.
[600ms]
Maya é uma usuária somente na nuvem e sem função administrativa. A Contoso habilita email e celular neste exemplo e exige dois métodos registrados para SSPR.
[600ms]
[serious] Dois métodos é a política do exemplo, não um padrão universal. Registrar informações de recuperação não conclui uma tentativa futura.

## Step 5 · Verify, then reset

[calm] Verificar, depois redefinir.
[600ms]
Uma usuária licenciada e no escopo do SSPR ainda precisa de métodos registrados e verificação bem-sucedida. Só então escolhe uma senha conforme a política; aqui nenhuma senha é coletada.
[600ms]
[serious] Business Standard oferece SSPR somente na nuvem. Writeback híbrido exige P1/P2 ou Business Premium, configuração e pré-requisitos. Alterar senha no Entra Free não é redefinir uma senha esquecida.

## Step 6 · Support without blanket administration

[calm] Suporte sem administração irrestrita.
[600ms]
Funções autorizam operadores. Licenças habilitam serviços. O registro prepara a recuperação; a verificação comprova o controle durante a tentativa. São responsabilidades distintas.
[600ms]
[serious] O exemplo supõe conta válida somente na nuvem e nova senha conforme a política. Nenhuma função, licença, mensagem ou senha real é alterada.
