# Roteiro de narração - Hierarquia de recursos

**Source animation:** journeys/Fundamentals/ResourceHierarchy.html
**Script status:** Authored voiceover.
**Language:** Português (Brasil)

As indicações entre colchetes não são faladas. As pausas ficam em linhas separadas. Cada bloco corresponde a uma etapa da animação.
<!-- Source: https://learn.microsoft.com/training/modules/describe-core-architectural-components-of-azure/ -->

## Step 1 · Which resources belong together?

[calm] A Contoso está construindo uma loja de teste e outra para os clientes reais. Surgem máquinas, bancos de dados e outros recursos, mas uma lista simples não mostra quais pertencem ao mesmo conjunto.
[600ms]
[confident] A equipe precisa de limites de gerenciamento para manter o trabalho no ambiente temporário de teste separado da produção.

## Step 2 · Start with a resource

[calm] Um recurso é algo que você pode criar e gerenciar no Azure, como uma máquina virtual, uma rede ou uma conta de armazenamento. São os componentes individuais da loja.
[600ms]
[confident] Cada um tem sua configuração. Ser um recurso não significa necessariamente ter uma cobrança separada.

## Step 3 · Location is not ownership

[calm] A Contoso precisa responder a duas perguntas: onde este recurso funciona e a qual grupo de recursos pertence? A região responde sobre localização; o grupo de recursos organiza o gerenciamento.
[600ms]
[confident] Um grupo de recursos não é um datacenter, uma zona de disponibilidade ou uma conexão de rede.

## Step 4 · Group what shares a lifecycle

[calm] Reúna os recursos de teste e mantenha a produção em outro grupo. Recursos criados, atualizados e desativados juntos costumam fazer sentido no mesmo grupo.
[600ms]
[confident] Excluir o grupo de teste remove seus recursos, não o grupo de produção. Ainda assim, a Contoso verifica as dependências antes de excluir qualquer coisa.

## Step 5 · One subscription holds the groups

[calm] Olhe um nível acima dos grupos de recursos. A assinatura contém esses grupos e fornece um limite para gerenciar acesso e acompanhar o uso cobrado.
[600ms]
[confident] A Contoso identifica em qual assinatura esses custos aparecem. Os grupos de teste e produção continuam separados; a assinatura não une seus ciclos de vida.

## Step 6 · Management groups organize subscriptions

[calm] Conforme cresce, a Contoso pode usar várias assinaturas. O grupo de gerenciamento mais externo as reúne, evitando repetir a mesma governança separadamente em cada assinatura.
[600ms]
[confident] Atribuições de políticas e funções podem se aplicar aos níveis inferiores. As caixas representam escopos de gerenciamento, não prédios com servidores físicos.

## Step 7 · Resource Hierarchy - All in One

[calm] Leia de fora para dentro: grupo de gerenciamento, assinatura, grupos de recursos e recursos individuais. Dentro dessa estrutura, os recursos de teste e produção da Contoso têm ciclos de vida separados.
[600ms]
[confident] Políticas e atribuições de funções aplicáveis podem ser herdadas para baixo; nem toda configuração funciona assim. Organizado o gerenciamento, a próxima decisão é onde executar a loja.