# Narrator Script — Architect · Design access: roles, PIM and access reviews

**Source animation:** [IdentityGovernance.html](../../../journeys/Architect/IdentityGovernance.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/role-based-access-control/rbac-and-directory-admin-roles>
- <https://learn.microsoft.com/azure/role-based-access-control/overview>
- <https://learn.microsoft.com/entra/identity/managed-identities-azure-resources/overview>
- <https://learn.microsoft.com/azure/key-vault/general/overview>
- <https://learn.microsoft.com/azure/key-vault/managed-hsm/overview>
- <https://learn.microsoft.com/entra/id-governance/privileged-identity-management/pim-configure>
- <https://learn.microsoft.com/entra/id-governance/access-reviews-overview>
- <https://learn.microsoft.com/entra/id-governance/entitlement-management-overview>
- <https://learn.microsoft.com/entra/id-governance/what-are-lifecycle-workflows>
- <https://learn.microsoft.com/entra/id-governance/identity-governance-overview>

---

## Step 1 · Contoso: who has access to what?

[calm] O acesso da Contoso cresceu sem um plano claro: administradores ocupam papéis poderosos e um ex-contratado ainda aparece na história.
[600ms]
[curious] O problema não é apenas se alguém pode fazer login, mas o que pode alcançar depois.
[600ms]
[reassuring] Vamos separar o escopo do cargo, credenciais de carga de trabalho, acesso privilegiado e a revisão contínua das permissões.

## Step 2 · Azure roles vs Microsoft Entra roles

[calm] Os papéis Azure governam os recursos Azure, enquanto os papéis Microsoft Entra governam as capacidades e administração dos diretórios.
[600ms]
[curious] Na hierarquia de recursos, uma atribuição de papéis combina um principal, uma definição de função e o escopo onde ele se aplica.
[600ms]
[reassuring] Escolha o menor papel apropriado no escopo mais restrito, lembrando que permissões herdadas podem estender o acesso efetivo.

## Step 3 · Workloads: use a managed identity

[calm] A loja precisa de acesso ao banco de dados de pedidos e armazenamento, não de outra senha embutida em seu código.
[600ms]
[curious] Uma identidade gerenciada dá identidade à aplicação, e uma atribuição de função concede acesso a cada destino.
[600ms]
[reassuring] A identidade atribuída ao sistema segue o ciclo de vida de um recurso; a identidade atribuída pelo usuário é gerenciada separadamente e pode ser compartilhada pelos recursos.

## Step 4 · Secrets, keys and certificates

[calm] A vitrine ainda possui vários itens sensíveis diferentes: um segredo, uma chave de criptografia e um certificado.
[600ms]
[curious] O Key Vault mantém esses itens sob acesso controlado, e as opções de proteção diferem conforme o tipo de segurança de chave exigida.
[600ms]
[reassuring] Escolha o modelo de proteção e a autorização deliberadamente, em vez de tratar um cofre como um lugar irrestrito para colocar credenciais.

## Step 5 · Privileged access: eligible, not always on

[calm] O acesso constante do administrador cria riscos mesmo quando não há trabalho administrativo em ocorrência.
[600ms]
[curious] Com a Gestão de Identidade Privilegiada, um administrador elegível ativa a função quando necessário, com requisitos como aprovação ou autenticação multifator.
[600ms]
[reassuring] Observe a janela de tempo se fechar: o privilégio termina em vez de se tornar uma permissão permanente do dia a dia.

## Step 6 · Access reviews: does anyone still need this?

[calm] Permissões permanecem além de seu propósito original quando as pessoas mudam de trabalho ou projetos terminam.
[600ms]
[curious] Uma revisão de acesso pergunta a um revisor responsável se cada tarefa ainda é necessária e então aplica o resultado.
[600ms]
[reassuring] Faça disso uma decisão recorrente, para que a Contoso possa remover o acesso obsoleto em vez de depender de alguém para lembrar de cada subsídio antigo.

## Step 7 · Entitlement management: access packages

[calm] Um parceiro precisa de vários recursos conectados para um projeto, em vez de uma coleção de solicitações de acesso não relacionadas.
[600ms]
[curious] Um pacote de acesso agrupa os grupos, aplicações e sites necessários com uma política de requisição, um aprovador e um prazo de expiração.
[600ms]
[reassuring] Contoso pode oferecer o pacote pelo tempo certo, mantendo a propriedade e a aprovação visíveis.

## Step 8 · Lifecycle workflows: joiner, mover, leaver

[calm] Acompanhe o ciclo de vida do funcionário, desde a entrada, passando pela mudança de funções, até a saída da organização.
[600ms]
[curious] Fluxos de trabalho do ciclo de vida executam as tarefas de acesso relacionadas quando as condições configuradas e os atributos de identidade coincidem.
[600ms]
[reassuring] O objetivo é a execução repetível: as tarefas certas acontecem na transição certa, em vez de depender apenas de uma lista de verificação manual.

## Step 9 · All in one: which tool answers which question

[calm] O mapa finalizado separa o design de acesso em perguntas, com uma ferramenta diferente respondendo a cada uma.
[600ms]
[curious] Os papéis definem permissão, identidades gerenciadas evitam segredos de aplicação, e o Key Vault protege o material sensível que permanece.
[600ms]
[reassuring] PIM, resenhas, pacotes de acesso e fluxos de trabalho do ciclo de vida controlam quando o acesso começa, quando é verificado e quando termina.

