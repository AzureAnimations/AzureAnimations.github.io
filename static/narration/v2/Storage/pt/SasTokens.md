# Roteiro de narração — Azure Storage · Compartilhe (tokens SAS)

**Source animation:** `static/v2/Storage/SasTokens.html`

---

## Step 1 · The Players

[warm] Aqui está um problema comum. Você tem dados em uma conta de armazenamento e alguém precisa de apenas um contêiner ou um blob, por tempo limitado.
[600ms]
[calm] Como conceder isso sem entregar as chaves da sua conta? As chaves desbloqueiam tudo, para sempre, então compartilhá-las está fora de questão.
[600ms]
[confident] Vamos montar o quadro. Siga as setas: cada passo conecta a conta da esquerda ao usuário da direita. O objetivo: acesso delimitado e temporário.

## Step 2 · The Keys

[confident] Tudo começa com as chaves da conta.
[600ms]
[calm] Uma conta de armazenamento tem duas chaves, e elas desbloqueiam tudo, sem expiração, que é exatamente por que você nunca as distribui. Em vez disso, elas assinam os tokens que você vai criar.
[600ms]
[reassuring] Duas chaves permitem girar uma enquanto a outra mantém seus aplicativos funcionando. E regenerar uma chave é como você vai revogar o acesso mais adiante.

## Step 3 · Generate a Token

[confident] Então, em vez da chave, você cria uma assinatura de acesso compartilhado: um token SAS.
[600ms]
[calm] É uma URL, assinada pela conta, que aponta exatamente para um contêiner ou blob, não para a conta inteira. Você pode simplesmente distribuí-la.
[600ms]
[reassuring] O token aponta para um único recurso. Compartilhe a URL, não a chave.

## Step 4 · Inside the Token

[intrigued] Vamos olhar por dentro. O token detalha exatamente o que é permitido.
[600ms]
[calm] Quais permissões — ler, escrever, listar. A hora de início e de expiração. E quais endereços I-P e qual protocolo podem usá-lo — apenas HTTPS.
[600ms]
[reassuring] Mude qualquer um deles e a assinatura quebra, então o token não pode ser adulterado.

## Step 5 · The User Gets In

[confident] Agora entregue o token ao usuário.
[600ms]
[calm] Ele pode alcançar o contêiner ou blob compartilhado, mas apenas com os direitos que você concedeu, e só até expirar.
[600ms]
[reassuring] Nenhuma chave de conta foi compartilhada, e o acesso termina sozinho. Esse é o objetivo de uma SAS.

## Step 6 · Stored Access Policy

[confident] Precisa de muitos tokens com as mesmas regras? Use uma política de acesso armazenado.
[600ms]
[calm] Coloque as permissões e a expiração em uma política no contêiner, e faça seus tokens referenciarem a política em vez de carregar suas próprias regras. Lembre-se: isso é apenas no nível de contêiner.
[600ms]
[reassuring] Mude a política uma vez e cada token que a referencia é atualizado. Também é a forma limpa de revogar um conjunto inteiro de tokens: basta excluir a política.

## Step 7 · The Whole Picture

[warm] Então aqui está a SAS, de ponta a ponta.
[600ms]
[calm] Da conta, para as chaves, para um token assinado, delimitado e com expiração, e o usuário alcança apenas o que você permitiu. Adicione uma política de acesso armazenado para o controle central, e tenha claro como revogar: regenere a chave para os tokens ad hoc, ou exclua a política para os baseados em política.
[600ms]
[encouraging] A prática recomendada? Prefira uma SAS de delegação de usuário, sobre HTTPS, com privilégio mínimo e uma expiração curta, sempre com um plano de revogação.

## Step 8 · SAS Types & Scope

[confident] Por fim, a visão técnica: três tipos de SAS, e eles funcionam nos quatro serviços de armazenamento, não apenas em blobs.
[600ms]
[calm] Uma SAS de delegação de usuário é assinada com o Microsoft Entra ID — a mais segura e a recomendação da Microsoft. Uma SAS de serviço é assinada com a chave da conta e se limita a um recurso em um serviço. E uma SAS de conta, também assinada com a chave da conta, pode abranger vários serviços.
[600ms]
[reassuring] As três cobrem Blob, Queue, Table e Files. As políticas de acesso armazenado se aplicam apenas a uma SAS de serviço, até cinco por recurso. Na dúvida, recorra à delegação de usuário.
