# Narrator Script - Que sala paga por isso?

**Source animation:** journeys/Identity/SubscriptionsAndScopes.html
**Script status:** Authored voiceover.

Delivery cues appear in brackets; pauses are on separate lines.
One block per on-screen step. Interactive choices are examples, not instructions to change real resources.

<!-- Reference: https://learn.microsoft.com/en-us/azure/governance/management-groups/overview -->
<!-- Reference: https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/overview -->
<!-- Reference: https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/tag-resources -->
<!-- Reference: https://learn.microsoft.com/en-us/azure/governance/policy/concepts/scope -->
<!-- Reference: https://learn.microsoft.com/en-us/azure/role-based-access-control/scope-overview -->
<!-- Reference: https://learn.microsoft.com/en-us/training/paths/az-104-manage-identities-governance/ -->

## Step 1 · One bill for the whole house

[curious] A família já sabe quem pode usar cada aparelho, mas tudo é cobrado em uma conta compartilhada.
[600ms]
Precisamos organizar recursos, responsabilidades e custos. O escopo diz onde uma permissão ou política se aplica.
[600ms]
[confident] Mesmo uma única assinatura pode conter escopos menores. Compartilhar uma conta não exige conceder acesso a tudo.

## Step 2 · Give each part of the house its own account

[calm] As assinaturas dão à Contoso limites separados para acompanhar uso, custos e cotas.
[600ms]
Na casa, as áreas comuns e particulares recebem contas diferentes. As identidades continuam no locatário; não surge uma nova família em cada conta.
[600ms]
[confident] Escolha esses limites com cuidado. Mover recursos depois só é possível quando seus tipos e os requisitos de movimentação permitem.

## Step 3 · A room for things that belong together

[calm] Um grupo de recursos é um cômodo para itens administrados juntos. O forno vai para a cozinha; a televisão e o alto-falante compartilham a sala.
[600ms]
Cada grupo pertence a uma assinatura, e cada recurso pertence a um grupo de recursos.
[600ms]
[confident] Excluir o grupo também exclui seus recursos, a menos que proteções ou dependências impeçam a operação. Agrupe pelo ciclo de vida, não apenas pela aparência.

## Step 4 · Above every account sits the family

[calm] Um grupo de gerenciamento fica acima das assinaturas, como a família acima das contas da casa.
[600ms]
Ele pode conter assinaturas e outros grupos de gerenciamento, criando um lugar para aplicar regras comuns.
[600ms]
[confident] Uma assinatura colocada abaixo dele herda as atribuições aplicáveis. O grupo de gerenciamento raiz do locatário organiza a hierarquia; as contas não ficam soltas.

## Step 5 · What the family decides reaches every room

[calm] Siga a hierarquia de cima para baixo: grupo de gerenciamento, assinatura, grupo de recursos e recurso.
[600ms]
Permissões de função atribuídas acima se aplicam abaixo. Políticas também alcançam os escopos filhos, respeitando exclusões ou isenções autorizadas.
[600ms]
[confident] Tags são diferentes: não são herdadas automaticamente. Nem toda configuração percorre a árvore da mesma maneira.

## Step 6 · Four levels — All in One

[calm] Família, conta, cômodo e aparelho: esses são os quatro níveis de escopo do Azure na nossa comparação.
[600ms]
Uma atribuição de função em um recurso é restrita; uma atribuição mais alta pode alcançar muitos recursos abaixo.
[600ms]
[confident] Escolha o menor escopo adequado. Agora usaremos a mesma hierarquia para regras de recursos e alertas de gastos, não apenas permissões.

## Step 7 · The Contoso estate, end to end

[confident] A visão do ambiente troca a casa pelos nomes reais: um locatário, um grupo de gerenciamento e cinco assinaturas de ambientes.
[600ms]
Cada grupo de recursos contém a máquina virtual, o cluster, o banco de dados e a rede do ambiente. Cada assinatura aparece sob um único pai.
[600ms]
[confident] Atribua políticas ou acesso comuns no grupo de gerenciamento, e as atribuições aplicáveis alcançarão as assinaturas abaixo, inclusive as adicionadas depois.
