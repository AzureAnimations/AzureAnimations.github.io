# Roteiro de narração - Governança e conformidade

**Source animation:** journeys/Fundamentals/GovernanceAndCompliance.html
**Script status:** Authored voiceover.
**Language:** Português (Brasil)

As indicações entre colchetes não são faladas. As pausas ficam em linhas separadas. Cada bloco corresponde a uma etapa da animação.
<!-- Sources: https://learn.microsoft.com/azure/governance/policy/overview ; https://learn.microsoft.com/azure/azure-resource-manager/management/lock-resources ; https://learn.microsoft.com/azure/cloud-adoption-framework/govern/monitor-cloud-governance -->

## Step 1 · Standards nobody checks

[calm] A Contoso combinou que os recursos precisam da tag Environment, mas ela falta na próxima implantação. Um padrão escrito em um documento não verifica automaticamente um recurso.
[600ms]
[confident] A equipe precisa de uma regra avaliada onde os recursos são criados, para tornar omissões visíveis ou impedir que aconteçam.

## Step 2 · Write the rule, then apply it

[calm] Uma definição do Azure Policy descreve a regra, como exigir Environment nos recursos compatíveis. Uma atribuição determina onde a regra se aplica.
[600ms]
[confident] A Contoso a atribui à assinatura da loja. Definir e aplicar são passos separados; a atribuição dá à regra seu escopo de gerenciamento.

## Step 3 · First, observe with Audit

[calm] Com o efeito Audit, a falta da tag é relatada como não conformidade, mas essa política permite continuar a implantação. A Contoso consegue ver onde seu padrão não é seguido.
[600ms]
[confident] Auditar ajuda a entender o impacto antes de impor uma regra. Relatar o problema não corrige automaticamente o recurso.

## Step 4 · Then enforce with Deny

[calm] Com Deny, a política bloqueia esta solicitação porque falta a tag obrigatória. A Contoso adiciona a tag e envia novamente a solicitação corrigida.
[600ms]
[confident] Isso impede a alteração fora do padrão. Não exclui recursos existentes, e passar nessa regra não ignora outras verificações de permissões ou políticas.

## Step 5 · Protect what already exists

[calm] A Contoso também quer evitar excluir acidentalmente um recurso de produção. Um bloqueio de exclusão impede a solicitação de gerenciamento que tenta removê-lo enquanto estiver aplicado.
[600ms]
[confident] Um administrador autorizado pode retirar o bloqueio. Ele protege contra certas mudanças de gerenciamento, mas não garante de forma irreversível que o recurso nunca será excluído.

## Step 6 · The resource is not its data

[calm] Bloquear o recurso do banco não bloqueia todos os registros de clientes dentro dele. Uma operação de dados autorizada ainda pode alterar registros, porque bloqueios de recursos se aplicam a operações de gerenciamento.
[600ms]
[confident] A Contoso precisa de permissões de dados e controles de recuperação separados. Um bloqueio não é backup nem uma estratégia completa de proteção de dados.

## Step 7 · Govern the data too

[calm] A Contoso também precisa saber quais informações possui e onde elas estão. Microsoft Purview pode descobrir e classificar dados de fontes compatíveis que foram conectadas.
[600ms]
[confident] Esse inventário orienta decisões sobre informações sensíveis e seu tratamento. A equipe ainda estabelece e opera os controles necessários para atender aos requisitos.

## Step 8 · Governance - All in One

[calm] Policy verifica como os recursos devem ser; bloqueios protegem determinadas operações de gerenciamento; governança de dados ajuda a entender as informações mantidas. Cada um atende a uma necessidade diferente.
[600ms]
[confident] Esses controles apoiam a governança, sem garantir conformidade automática. Agora a Contoso torna as implantações repetíveis para não depender de lembrar cada passo manual.