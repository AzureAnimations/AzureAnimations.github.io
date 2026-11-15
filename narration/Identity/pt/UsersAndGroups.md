# Narrator Script - Quem mora aqui

**Source animation:** journeys/Identity/UsersAndGroups.html
**Script status:** Authored voiceover.

Delivery cues appear in brackets; pauses are on separate lines.
One block per on-screen step. Interactive choices are examples, not instructions to change real resources.

<!-- Reference: https://learn.microsoft.com/en-us/entra/fundamentals/concept-learn-about-groups -->
<!-- Reference: https://learn.microsoft.com/en-us/entra/identity/users/groups-dynamic-membership -->
<!-- Reference: https://learn.microsoft.com/en-us/entra/fundamentals/how-to-manage-groups -->
<!-- Reference: https://learn.microsoft.com/en-us/entra/external-id/use-dynamic-groups -->

## Step 1 · The family lives here. The register doesn’t know them.

[curious] Noah mora na casa, mas ainda não aparece no cadastro.
[600ms]
Sem uma identidade própria, o sistema não consegue diferenciá-lo de outra pessoa usando a mesma conta compartilhada.
[600ms]
[confident] Alex já tem uma identidade na casa ao lado. Noah precisa do seu próprio registro na Contoso antes de decidirmos o que ele pode acessar.

## Step 2 · Give Noah his own record

[calm] Um administrador autorizado cria o usuário de Noah, com nome, entrada e departamento.
[600ms]
Esses atributos descrevem quem ele é. Definir o departamento como Kids não concede uma permissão do Azure.
[600ms]
[confident] Estabelecemos quem Noah é no diretório, mas ainda não quais aparelhos ele pode usar.

## Step 3 · One group for the children

[calm] As crianças formam um grupo de segurança, reunindo Noah e Mia em uma lista.
[600ms]
O proprietário administra a lista; o membro pertence a ela. São relações diferentes.
[600ms]
[confident] Grupos de segurança podem receber permissões sobre recursos. Grupos do Microsoft 365 atendem à colaboração, então escolha o tipo adequado à finalidade.

## Step 4 · Write his name, or write a rule

[calm] Há duas maneiras de preencher a lista: adicionar pessoas manualmente ou usar uma regra de associação dinâmica.
[600ms]
Aqui, a regra seleciona usuários cujo departamento é Kids. Mudar um atributo pode mudar quem atende à condição.
[600ms]
[confident] A associação dinâmica exige as licenças apropriadas e leva tempo para ser processada. Proteja quem pode editar os atributos que determinam o acesso.

## Step 5 · Check who is really on the list

[calm] Confira a lista real de membros, não apenas se os atributos de Noah correspondem à regra.
[600ms]
A regra precisa ser processada para que o resultado apareça. Em um grupo dinâmico, a associação é administrada pela regra, não manualmente.
[600ms]
[confident] Alex não corresponde neste exemplo, mas outras regras podem incluir convidados. Ser proprietário não significa ser membro.

## Step 6 · Everybody has a key — to the house

[calm] Noah agora tem sua própria identidade e está na lista certa. Pense na entrada como a prova de quem possui a chave da porta.
[600ms]
Nenhuma função de recurso foi atribuída neste exemplo, então os aparelhos continuam indisponíveis.
[600ms]
[confident] A associação pode transmitir uma permissão já atribuída ao grupo. Sem uma atribuição, a lista não concede acesso a recursos.

## Step 7 · The register, in Microsoft Entra ID

[confident] As linhas superiores comparam a associação atribuída dos adultos com a associação por regra das crianças.
[600ms]
Abaixo, Storage Blob Data Reader permite que os adultos leiam dados no escopo da conta de armazenamento.
[600ms]
[confident] As crianças não têm função na máquina virtual. A associação define quem está incluído; a atribuição define o que pode fazer e onde.
