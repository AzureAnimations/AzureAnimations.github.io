# Narrator Script - Cuidar da casa

**Source animation:** journeys/Identity/IdentityAdministration.html
**Script status:** Authored voiceover.

Delivery cues appear in brackets; pauses are on separate lines.
One block per on-screen step. Interactive choices are examples, not instructions to change real resources.

<!-- Reference: https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/delegate-by-task -->
<!-- Reference: https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/permissions-reference#authentication-administrator -->
<!-- Reference: https://learn.microsoft.com/en-us/entra/identity/authentication/concept-sspr-licensing -->
<!-- Reference: https://learn.microsoft.com/en-us/entra/identity/authentication/concept-sspr-howitworks -->
<!-- Reference: https://learn.microsoft.com/en-us/microsoft-365/admin/manage/assign-licenses-to-users -->

## Step 1 · Three favours, three different jobs

[curious] Mia precisa de três tipos de ajuda: redefinir a senha, receber uma licença de produto e atualizar um método de recuperação.
[600ms]
A pessoa que a ajuda tem outra identidade, com suas próprias permissões administrativas.
[600ms]
[confident] Neste exemplo, Mia é uma usuária somente na nuvem, sem função privilegiada. Podemos delegar o trabalho sem entregar o controle do locatário inteiro.

## Step 2 · Hand over one chore, not the house

[calm] Combine a função do ajudante com a tarefa. Administrador de Senhas é a opção mais restrita para redefinir a senha desta usuária não administradora.
[600ms]
Administrador de Licenças cuida das atribuições; Administrador de Autenticação pode executar as tarefas suportadas sobre métodos de autenticação.
[600ms]
[confident] Escolher outra tarefa não muda a função do operador. A atribuição real precisa autorizar aquela tarefa para Mia.

## Step 3 · A seat at the table has to exist

[calm] Uma licença de produto é um assento que precisa estar disponível e ser atribuído a Mia.
[600ms]
O operador precisa de permissão, e a conta deve cumprir requisitos como um local de uso válido. Comprar assentos não atribui nenhum automaticamente.
[600ms]
[confident] Um erro de atribuição exige investigação e nova tentativa. Uma licença do Microsoft 365 também não concede uma função de recurso do Azure.

## Step 4 · Register the spare key before you need it

[calm] A recuperação funciona melhor quando Mia se prepara antes de esquecer a senha.
[600ms]
A política de exemplo da Contoso permite email e celular e exige dois métodos registrados. Esse número é uma escolha do exemplo, não um padrão universal.
[600ms]
[confident] O registro guarda as informações de recuperação. Ele não comprova que uma futura solicitação de redefinição vem realmente de Mia.

## Step 5 · Prove it is you, then cut a new key

[calm] Agora Mia precisa redefinir uma senha esquecida. Ela deve estar habilitada, ter métodos registrados e concluir a verificação exigida.
[600ms]
Só então poderá escolher uma nova senha que cumpra a política. Esta demonstração nunca solicita uma senha real.
[600ms]
[confident] Business Standard oferece suporte a essa redefinição somente na nuvem. O writeback de senhas híbridas exige licenciamento e configuração adicionais.

## Step 6 · Help out without holding every key

[calm] Separe quatro trabalhos: funções autorizam o ajudante, licenças habilitam serviços, registro prepara a recuperação e verificação comprova a identidade.
[600ms]
Ter uma peça não garante as outras. Uma licença não substitui a verificação da identidade.
[600ms]
[confident] Este painel ilustra as verificações; ele não altera contas reais. O objetivo é delegar tarefas úteis sem privilégios desnecessários.

## Step 7 · Running the house, in Microsoft Entra ID

[confident] As linhas superiores mostram as funções de senha e licença do operador, além de Mia redefinindo sua própria senha pelo autoatendimento.
[600ms]
Abaixo, o operador começa sem permissão sobre recursos do Azure. Uma atribuição Reader separada passa a permitir consultas à configuração da máquina virtual da loja.
[600ms]
[confident] Administração do diretório, licenciamento de produtos e acesso a recursos do Azure continuam sendo responsabilidades diferentes.
