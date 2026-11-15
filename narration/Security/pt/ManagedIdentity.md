# Narrator Script · Português (pt) — Journey 03 · Managed Identity

**Source animation:** `static/v2/Security/ManagedIdentity.html`
**Language:** Portuguese (pt). Traduzido do roteiro mestre em inglês. As indicações de interpretação `[tags]` e as pausas `[NNNms]` permanecem inalteradas (são direções, não são faladas). Os títulos das etapas ficam em inglês para o mapeamento 1:1.

Um bloco por etapa da animação.

---

## Step 1 · Where we start: an app that needs a database

[calm] Vamos começar onde a maioria dos apps começa.
[600ms]
[confident] O back-end da Contoso é executado dentro de uma Azure VM e precisa ler um Azure SQL Database.
[600ms]
[calm] Antes de conectar, um administrador de banco de dados emite a ele um login — um nome de usuário e uma senha — e concede a esse login permissão no banco de dados.
[600ms]
[reflective] É a configuração clássica: o app prova quem é com uma credencial que alguém lhe entrega.

## Step 2 · That login ships inside the app — in plain text

[concerned] Mas veja onde esse login acaba.
[600ms]
[serious] O nome de usuário e a senha ficam armazenados no app e são implantados com ele, muitas vezes como texto simples em um arquivo .env ou de configuração.
[600ms]
[concerned] Essa conta de serviço compartilhada é o que chamamos de ID funcional, e ela simplesmente não escala.
[800ms]
[serious] Qualquer um que possa ler o arquivo tem o login do banco de dados, e cada novo app precisa do seu próprio.

## Step 3 · Managed identity solves it — a role, not a password

[confident] A identidade gerenciada resolve isso, com uma função, não uma senha.
[600ms]
[calm] A mesma VM, o mesmo app da Contoso, o mesmo banco de dados, mas agora o app tem uma identidade gerenciada, sua própria identidade interna no Microsoft Entra ID.
[600ms]
[impressed] Em vez de emitir um usuário e senha, o administrador abre o Controle de acesso do banco de dados e atribui a essa identidade apenas a função de que ela precisa.
[600ms]
[reassuring] Nenhuma credencial é criada ou armazenada: apenas identidade, mais acesso com privilégio mínimo.

## Step 4 · Turn it on — enable the managed identity

[confident] E ativá-la é genuinamente simples.
[600ms]
[calm] No Azure Portal, abra o recurso, vá até Identidade, mude o status da atribuída pelo sistema para Ativado e salve: o Azure cria a identidade no Microsoft Entra ID.
[600ms]
[amused] Prefere a linha de comando? Uma linha do Azure CLI faz exatamente o mesmo.
[600ms]
[reassuring] A maioria dos serviços de computação e de aplicativos do Azure oferece suporte a isso: máquinas virtuais, App Service, Functions, Container Apps, AKS e muitos mais.

## Step 5 · The catch — one identity per resource

[concerned] Há um porém, no entanto, quando você cresce.
[600ms]
[calm] O back-end da Contoso é executado em muitos hosts: uma VM, App Service, Functions, Container Apps, AKS.
[600ms]
[serious] Com uma identidade atribuída pelo sistema, a equipe habilita uma em cada recurso, e o administrador concede acesso a cada uma separadamente.
[800ms]
[concerned] Adicione mais máquinas e tudo se repete: muito para manter para o que é, na verdade, um só app.

## Step 6 · One identity, shared — user-assigned

[confident] Então compartilhe uma única identidade: a atribuída pelo usuário.
[600ms]
[calm] A Contoso cria uma única identidade gerenciada atribuída pelo usuário e a anexa a cada host: a VM, App Service, Functions, Container Apps e AKS referenciam todos a mesma.
[600ms]
[impressed] O administrador concede acesso a essa única identidade uma só vez. Adicione outra máquina, e você apenas anexa a mesma identidade: sem nova concessão.
[600ms]
[reassuring] É seu próprio recurso do Azure, com um ID de objeto estável, vivendo independentemente de qualquer host.

## Step 7 · Recap — System-assigned vs User-assigned

[reflective] Vamos recapitular as duas variações de uma mesma ideia sem segredos.
[600ms]
[confident] Ambas permitem que uma carga de trabalho se autentique com um token do Microsoft Entra em vez de um segredo, e então obtenha uma função de privilégio mínimo.
[600ms]
[calm] Elas diferem apenas em como são criadas, no ciclo de vida e se podem ser compartilhadas.
[600ms]
[reassuring] A atribuída pelo sistema é a mais simples para um único recurso; a atribuída pelo usuário é a escolha recomendada e reutilizável quando vários recursos compartilham uma identidade.
