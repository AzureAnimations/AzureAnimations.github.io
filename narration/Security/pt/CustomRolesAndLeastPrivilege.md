# Narrator Script — Security · Custom roles and least privilege in Azure and Microsoft Entra — Azure Security Journey

**Source animation:** [CustomRolesAndLeastPrivilege.html](../../../journeys/Security/CustomRolesAndLeastPrivilege.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/role-based-access-control/custom-roles>
- <https://learn.microsoft.com/azure/role-based-access-control/role-definitions>
- <https://learn.microsoft.com/entra/identity/role-based-access-control/custom-overview>
- <https://learn.microsoft.com/azure/role-based-access-control/rbac-and-directory-admin-roles>

---

## Step 1 · Contributor is too much, Reader is too little

[curious] Esse é o Sam, do help desk da Contoso. O Sam precisa ver as máquinas virtuais e reiniciá-las, nada além disso.
[600ms]
[serious] A função Leitor não consegue reiniciar nada. A função Colaborador reinicia, mas também pode criar e excluir quase tudo.
[600ms]
[confident] Quando nenhuma função interna se encaixa no trabalho, a resposta é uma função personalizada.

## Step 2 · What is inside an Azure role

[calm] Uma definição de função é só uma lista de permissões: o que ela permite, o que ela subtrai, os dados que pode acessar e onde pode ser atribuída.
[600ms]
[curious] Aqui está o Colaborador. Veja como um curinga permite tudo, e depois uma lista curta é subtraída dele.
[600ms]
[serious] Essa subtração não é uma negação. Se uma segunda função concede a mesma ação, a pessoa continua podendo fazê-la.

## Step 3 · Build a custom role from a built-in one

[confident] O jeito mais fácil de começar é clonar a função interna mais parecida. No portal, você também pode começar do zero ou a partir de um JSON.
[600ms]
[calm] Reduza a função ao que o Sam precisa, adicione as duas ações e limite onde ela pode ser atribuída. Com quatro edições, temos o Contoso VM Operator.
[600ms]
[serious] Sempre que puder, liste as ações explicitamente, porque um curinga também concede as ações que forem adicionadas no futuro.

## Step 4 · Test the role at one scope

[calm] Agora atribua a função ao Sam em um grupo de recursos, entre como o Sam e teste.
[600ms]
[curious] Ela deve funcionar onde foi atribuída e parar em todo o resto. Uma atribuição junta uma pessoa, uma função e um escopo, e vale para tudo que está abaixo.
[600ms]
[reassuring] A aba Verificar acesso mostra o que alguém pode fazer em um escopo. Se a função não se comportar como esperado, atualize e teste de novo.

## Step 5 · Custom roles in Microsoft Entra ID

[calm] O Microsoft Entra também tem funções personalizadas. Elas gerenciam recursos do Entra, como os registros de aplicativo do seu tenant.
[600ms]
[curious] Você escolhe as permissões em uma lista predefinida e atribui no escopo do tenant ou do app. Essa lista cobre coisas como aplicativos empresariais, consentimento, dispositivos, usuários e grupos.
[600ms]
[serious] Você precisa de uma licença Premium e, no mínimo, da função de Administrador de Função Privilegiada. E a Azure CLI não é compatível com essas atribuições.

## Step 6 · Azure roles vs Entra roles: which plane?

[curious] São dois sistemas e dois conjuntos de permissões. As funções do Azure gerenciam recursos do Azure por meio do Azure Resource Manager.
[600ms]
[calm] As funções do Entra gerenciam recursos do Entra por meio do Microsoft Graph. Por padrão, as duas não se sobrepõem, e você não pode misturar as permissões delas em uma mesma função personalizada.
[600ms]
[serious] Tem uma exceção que vale conhecer. Um Administrador Global pode ativar o gerenciamento de acesso para os recursos do Azure e ganhar o Administrador de Acesso de Usuário em todas as assinaturas.

## Step 7 · Find overprivileged assignments

[calm] Comece por quem tem mais poder: proprietários, escopos amplos e contas que ninguém usa.
[600ms]
[curious] A Contoso lista suas atribuições de função em Controle de acesso e procura sinais de alerta. A aba Privilegiado ajuda em um escopo.
[600ms]
[confident] As recomendações do Defender for Cloud e as revisões de acesso do Privileged Identity Management apontam mais excessos.

## Step 8 · Replace broad access with narrow access

[calm] Para corrigir uma atribuição com privilégio demais, siga uma ordem segura. Adicione primeiro a mais restrita.
[600ms]
[confident] Confira se funciona e só depois remova a mais ampla. Assim, o Sam nunca fica sem acesso.
[600ms]
[reassuring] As atribuições descem pelo escopo, então remover a da assinatura acaba com tudo o que o Sam tinha abaixo dela.

## Step 9 · Make access eligible, not permanent

[curious] O Marcus precisa de Proprietário duas vezes por mês, não todo dia. Então por que deixar a função ligada o tempo todo?
[600ms]
[calm] Com o Privileged Identity Management, ele fica elegível e só ativa a função quando precisa. A ativação pode exigir autenticação multifator, uma justificativa ou uma aprovação.
[600ms]
[reassuring] Ela dura um tempo determinado e depois termina sozinha.

## Step 10 · Guardrails: locks and deny assignments

[serious] As funções dizem o que uma pessoa pode fazer. As proteções dizem o que ninguém pode fazer por acidente.
[600ms]
[calm] Um bloqueio vale mais do que qualquer função. Ele pode impedir exclusões ou alterações, desce de um escopo pai e cobre apenas operações do plano de controle.
[600ms]
[curious] Uma atribuição de negação bloqueia ações mesmo quando uma função as permite. Você não pode criar as suas, porque o Azure as gerencia.

## Step 11 · Which fix for which finding?

[excited] Hora de você mesmo experimentar. São seis achados e seis correções.
[600ms]
[curious] Escolha um achado e depois a correção que o resolve: uma função personalizada, uma remoção, uma atribuição elegível, um bloqueio, uma função personalizada do Entra ou uma atribuição de negação.
[600ms]
[encouraging] Cada correção é usada uma vez, e cada uma faz um trabalho. Associe o trabalho ao achado.

## Step 12 · Recap: define narrowly, find excess, remove, repeat

[calm] Privilégio mínimo é um ciclo, não algo que se faz uma vez só. Crie funções sob medida para o trabalho e depois procure o que está amplo demais.
[600ms]
[confident] Restrinja ou remova, coloque proteções e depois verifique de novo.
[600ms]
[proud] Para o S C 500, isso cobre o gerenciamento de funções personalizadas e a correção de acessos com privilégios em excesso usando o Azure RBAC. As listas de habilidades mudam, então leia o guia de estudo atual.
