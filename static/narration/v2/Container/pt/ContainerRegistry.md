# Roteiro de narração — Azure Containers · 02 · Azure Container Registry

**Source animation:** `static/v2/Container/ContainerRegistry.html`

---

## Step 1 · dockerhub

[confident] No capítulo anterior você construiu uma imagem chamada contoso-orders version one.
[600ms]
[curious] E para onde ela vai quando você executa docker push? Se o nome não tiver um registro na frente, o Docker a envia para docker dot io — o Docker Hub público.
[700ms]
[calm] É um bom padrão, mas significa que a sua imagem cai num repositório público — e isso quase nunca é o que você quer para o seu próprio app.

## Step 2 · acr

[confident] Aqui está a solução — coloque a sua imagem num lugar privado que seja seu.
[600ms]
[calm] Coloque na frente do nome o servidor de login do seu registro, contoso dot azure-c-r dot io, e agora o docker push envia direto para o seu próprio Azure Container Registry.
[700ms]
[reassuring] Você entra primeiro com az acr login, e o ACR autentica com o Microsoft Entra ID — sem senhas compartilhadas circulando por aí.

## Step 3 · tasks

[confident] Você nem precisa do Docker rodando na sua máquina para compilar.
[600ms]
[impressed] Com o ACR Tasks, um único comando — az acr build — compila a imagem lá no Azure e a envia por você.
[700ms]
[intrigued] E melhor ainda, ele pode recompilar automaticamente — num commit do git, num horário, ou quando uma imagem base recebe um patch — assim uma correção de segurança chega a cada imagem sem você mexer um dedo.

## Step 4 · tiers

[confident] Todo registro vem em um de três níveis — Basic, Standard ou Premium.
[600ms]
[calm] Todos falam exatamente a mesma API de registro. Você sobe de nível principalmente por mais armazenamento incluído e mais taxa de transferência de imagens.
[700ms]
[encouraging] Comece no Basic para desenvolvimento, Standard para a maior parte da produção — e vá de Premium quando precisar de replicação geográfica, Private Link ou chaves gerenciadas pelo cliente.

## Step 5 · features

[confident] O ACR é muito mais do que uma prateleira para guardar imagens.
[600ms]
[impressed] Ele protege o acesso com funções e tokens do Entra, replica entre regiões, e deixa o Microsoft Defender examinar cada imagem enviada em busca de vulnerabilidades.
[700ms]
[intrigued] E, por ser um registro OCI, ele também guarda gráficos do Helm e outros artefatos — não só imagens de contêiner.

## Step 6 · advanced

[confident] Quando você cresce além do simples push e pull, o ACR tem uma caixa de ferramentas mais profunda.
[600ms]
[impressed] O cache de artefatos é um favorito — espelhe imagens do Docker Hub ou outras públicas para o seu próprio registro, driblando limites de taxa e puxando rápido por redes privadas.
[700ms]
[intrigued] Também há streaming de artefatos para inícios mais rápidos, registros conectados para a borda, exclusão temporária para recuperar erros, e assinatura de imagens para verificar o que você implanta.

## Step 7 · recap

[proud] Essa é a sua cadeia de suprimentos de imagens — construa uma vez, envie para um registro privado no Azure, aplique patches na nuvem, escale com níveis e proteja de ponta a ponta.
[700ms]
[optimistic] Com as suas imagens armazenadas e construídas no Azure, você está pronto para de fato executar uma. Próxima parada: Azure Container Instances — a forma mais rápida de subir um único contêiner.
