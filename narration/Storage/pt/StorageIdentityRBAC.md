# Roteiro de narração — Azure Storage · Nível avançado · Identidade e RBAC

**Source animation:** `static/v2/Storage/StorageIdentityRBAC.html`

---

## Step 1 · goal

[confident] Seu app precisa ler blobs de um contêiner — e o objetivo é fazer isso sem uma única chave.
[600ms]
[calm] A forma antiga distribui uma chave de conta ou um token SAS — um segredo que pode vazar. A forma moderna dá ao app uma identidade e concede a ele um papel.
[700ms]
[curious] Vamos montar esse diagrama, seta por seta — a identidade à esquerda ganhando acesso ao contêiner da direita.

## Step 2 · identity

[confident] Primeiro, o app precisa de uma entidade de segurança — simplesmente, quem está pedindo.
[600ms]
[calm] Pode ser um usuário, um grupo ou um service principal. Mas para um app, a melhor opção é uma identidade gerenciada: o Azure gerencia a credencial, então não há nenhum segredo no seu código.
[700ms]
[reassuring] E com o auxiliar DefaultAzureCredential, o mesmo código roda no seu notebook e no Azure.

## Step 3 · token

[confident] Agora o app chama o Storage. O Microsoft Entra ID autentica sua identidade e devolve um token OAuth de curta duração.
[600ms]
[calm] O Storage confia no Entra, então esse token — não uma chave — viaja com cada solicitação.
[700ms]
[reassuring] Ele expira rápido e é limitado ao storage, então você não tem nada para guardar ou girar.

## Step 4 · role

[confident] Um token sozinho ainda não basta — a identidade precisa de um papel. E aqui está a armadilha que pega todo mundo.
[600ms]
[serious] Use um papel de plano de dados, como Storage Blob Data Reader. O papel de plano de controle Contributor gerencia a conta, mas não lê seus blobs.
[700ms]
[amused] Então um Contributor pode gerenciar o recurso e ainda receber um 403 sobre os dados. Atribua um papel de dados.

## Step 5 · scope

[confident] Cada papel é atribuído em um escopo — do grupo de gerenciamento, descendo por assinatura, grupo de recursos e conta, até um único contêiner.
[600ms]
[calm] Atribua-o no escopo mais estreito que funcione — aqui, o contêiner — e a permissão é herdada para baixo a partir dali.
[700ms]
[reassuring] Precisa de precisão por caminho de blob? Adicione uma condição baseada em atributos, ou ABAC, na própria atribuição.

## Step 6 · assign

[confident] Junte tudo e você tem uma atribuição de papel: a entidade, mais o papel, mais o escopo.
[600ms]
[calm] Agora cada solicitação carrega o token do Entra, o Azure verifica a atribuição, e o app lê os blobs — sem que uma chave jamais intervenha.
[700ms]
[reassuring] Uma atribuição de papel é simplesmente quem, o quê e onde — e o Azure a avalia a cada chamada.

## Step 7 · recap

[proud] Aí está o panorama completo: identidade do app, para um token do Entra, para um papel de plano de dados no escopo do contêiner, para os blobs.
[600ms]
[calm] Sem chaves, com privilégio mínimo, e totalmente auditado.
[700ms]
[encouraging] O movimento final — desative a chave compartilhada, para que a identidade seja a única entrada.

## Step 8 · spec

[confident] Um nível mais a fundo, porque importa. O controle de acesso baseado em papéis do Azure tem dois planos.
[600ms]
[calm] Os papéis de plano de controle, como Owner e Contributor, gerenciam o recurso. Os papéis de plano de dados — Reader, Contributor, Owner para blobs, e seus equivalentes para arquivos, filas e tabelas — concedem acesso aos dados de dentro.
[700ms]
[serious] Lembre-se: Owner e Contributor podem listar as chaves da conta, então ainda podem chegar aos dados pela via antiga. Desative a chave compartilhada para forçar todos a passar por um papel de dados.
