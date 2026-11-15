# Narrator Script - As regras da casa sobre dinheiro

**Source animation:** journeys/Identity/PolicyAndCost.html
**Script status:** Authored voiceover.

Delivery cues appear in brackets; pauses are on separate lines.
One block per on-screen step. Interactive choices are examples, not instructions to change real resources.

<!-- Reference: https://learn.microsoft.com/en-us/azure/governance/policy/overview -->
<!-- Reference: https://learn.microsoft.com/en-us/azure/governance/policy/concepts/effect-basics -->
<!-- Reference: https://learn.microsoft.com/en-us/azure/governance/policy/concepts/scope -->
<!-- Reference: https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/lock-resources -->
<!-- Reference: https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/tutorial-acm-create-budgets -->

## Step 1 · Nobody said no

[curious] Mia pode entrar no quarto e tem permissão para pedir um aparelho. Ainda não existe uma regra dizendo que um videogame é inadequado.
[600ms]
Permissão para agir e regras sobre o recurso são perguntas diferentes.
[600ms]
[confident] Funções do Azure decidem quem pode agir, Acesso Condicional verifica a entrada e Azure Policy avalia a conformidade dos recursos. Essas três responsabilidades precisam ficar claras.

## Step 2 · Write the rule, then choose where it lands

[calm] Primeiro escreva a regra como uma definição de política. Depois crie uma atribuição para dizer onde ela se aplica.
[600ms]
Aqui o escopo é o quarto de Mia, nosso grupo de recursos. A oficina do Pai fica fora dessa atribuição.
[600ms]
[confident] Salvar a definição não a impõe. A atribuição conecta a regra reutilizável, suas configurações e os recursos que ela deve avaliar.

## Step 3 · Stopped, or just written down?

[calm] O efeito determina o que acontece quando uma solicitação avaliada quebra a regra.
[600ms]
Deny recusa a solicitação; Audit permite e registra a não conformidade. Nem as permissões de Owner contornam uma política Deny em vigor.
[600ms]
[confident] Observar um problema não é o mesmo que bloqueá-lo. E nenhuma dessas ações significa que todos os recursos existentes foram corrigidos automaticamente.

## Step 4 · One rule is not a standard

[calm] Um padrão da casa pode exigir várias regras. Uma iniciativa reúne definições de política em um único livro.
[600ms]
O desenho coloca as definições dentro do livro e a atribuição fora dele.
[600ms]
[confident] Atribua a iniciativa a um escopo para avaliar as regras juntas. Agrupar definições e escolher onde elas se aplicam são operações diferentes.

## Step 5 · Label the receipt, then monitor spending

[calm] O Pai pode comprar o videogame, mas a Contoso ainda precisa saber de quem é o custo e quando o gasto aumenta.
[600ms]
Uma tag de proprietário ajuda a atribuir esse custo. O orçamento do exemplo alerta em oitenta por cento; ele não impede a compra nem desliga recursos.
[600ms]
[confident] A avaliação do orçamento não é instantânea, e as tags não são herdadas automaticamente.

## Step 6 · Protect an existing resource

[calm] A caldeira representa um recurso existente que não deve mudar por acidente. Um bloqueio ReadOnly impede atualizações e exclusão no plano de controle, até para um Owner enquanto estiver aplicado.
[600ms]
CanNotDelete impede excluir, mas permite atualizar.
[600ms]
[confident] Esses bloqueios não protegem o plano de dados. Uma pessoa autorizada pode removê-los: são uma proteção contra alterações, não um cofre impossível de abrir.

## Step 7 · Keyrings, rules, locks — All in One

[calm] Compare os controles. Funções concedem ações, políticas avaliam regras de recursos e bloqueios restringem mudanças em recursos existentes.
[600ms]
Tags identificam responsabilidades e orçamentos avisam sobre gastos. Um orçamento não interrompe o consumo.
[600ms]
[confident] Escolha cada controle para o trabalho que ele realmente faz. Nenhum substitui os outros.

## Step 8 · How it really looks in Azure

[confident] O último diagrama mostra definições reutilizáveis reunidas em uma iniciativa no grupo de gerenciamento da Contoso.
[600ms]
Uma atribuição alcança as duas assinaturas. Outra aponta para um único grupo de recursos e acrescenta ali um requisito mais restrito.
[600ms]
[confident] Definições descrevem as regras; atribuições escolhem o escopo. Use essa diferença para governar o ambiente sem confundir identidade, permissões e alertas de custos.
