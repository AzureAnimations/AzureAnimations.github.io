# Narrator Script · Português (pt) — Journey 05 · Arquitetura de segurança Zero Trust

**Source animation:** `static/v2/Security/ZeroTrustSecurity.html`
**Language:** Portuguese (pt). Traduzido do roteiro mestre em inglês. As indicações de interpretação `[tags]` e as pausas `[NNNms]` permanecem inalteradas (são direções, não são faladas). Os títulos das etapas ficam em inglês para o mapeamento 1:1.

Um bloco por etapa da animação.

---

## Step 1 · Start from the assembled Contoso design

[confident] Para o final, reunimos tudo sob o Zero Trust.
[600ms]
[calm] As paradas anteriores já removeram os segredos locais. Agora, cada solicitação sensível ainda precisa satisfazer a identidade certa, o caminho de rede certo e a função certa.
[600ms]
[serious] Mesmo que um componente seja comprometido, isso precisa se manter.
[800ms]
[determined] A regra é simples: não confie em uma solicitação só porque ela veio de dentro do app; faça-a provar identidade, caminho e autorização toda vez.

## Step 2 · Add Private Endpoint to the sensitive services

[confident] Primeiro, a metade de rede: adicione o Private Endpoint.
[600ms]
[calm] Traga o Private Endpoint para a rede virtual da Contoso, tanto para o Key Vault quanto para o App Configuration.
[600ms]
[impressed] O app continua usando exatamente os mesmos serviços, mas agora o caminho chega a um IP privado dentro da VNet.
[600ms]
[reassuring] A rota é privada, local à rede e explícita.

## Step 3 · Disable the public path too

[intrigued] Mas um caminho privado, sozinho, é suficiente?
[800ms]
[serious] Não exatamente: o Private Endpoint não remove automaticamente o público.
[600ms]
[determined] Então o acesso de rede público no Key Vault e no App Configuration também precisa passar de Ativado para Desativado.
[600ms]
[concerned] Caso contrário, o caminho seguro e o caminho aberto vivem lado a lado: uma clássica falsa sensação de segurança.

## Step 4 · Separate duties with Azure RBAC

[confident] Em seguida, separe responsabilidades com o Azure RBAC.
[600ms]
[calm] Substitua as políticas de acesso herdadas do Key Vault por controle de acesso baseado em função.
[600ms]
[impressed] O app em execução só lê segredos, a equipe de segurança gerencia a rotação, e o CI/CD recebe apenas o escopo estreito de que precisa para uma tarefa.
[600ms]
[reassuring] Privilégio mínimo não é uma identidade poderosa: são identidades diferentes fazendo trabalhos diferentes.

## Step 5 · Assume breach operationally

[serious] Por fim, presuma a violação, de forma operacional.
[600ms]
[calm] Faça o streaming das configurações de diagnóstico para o Log Analytics e o Microsoft Sentinel, mantenha a rotação de segredos em movimento, e deixe o GitHub Actions usar uma credencial federada em vez de uma credencial de administrador armazenada.
[600ms]
[determined] O Zero Trust é operacional, não apenas arquitetural.
[600ms]
[reassuring] Depois que o design entra em produção, você ainda precisa de evidências, alertas e rotação.

## Step 6 · The hardened Contoso design — end to end

[reflective] E aqui está o design da Contoso reforçado, de ponta a ponta.
[600ms]
[proud] Os mesmos blocos de construção agora ficam atrás de um caminho privado, identidades gerenciadas, responsabilidades RBAC separadas, logs operacionais e CI/CD sem segredos.
[600ms]
[confident] Acesso sem segredos, de privilégio mínimo e verificado explicitamente, de uma ponta do app à outra.
[600ms]
[optimistic] Esse é o ponto de toda a jornada, reunido em uma única imagem.
