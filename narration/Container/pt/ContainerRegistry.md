# Roteiro de narração — Azure Containers · 02 · Azure Container Registry

**Source animation:** `static/v2/Container/ContainerRegistry.html`

---

<!-- Review source: https://docs.docker.com/docker-hub/repos/ -->

**TTS status:** Audio regenerated 2026-09-17 after text review.

## Step 1 · dockerhub

[confident] No capítulo anterior, você criou a primeira versão da imagem contoso-orders.
[600ms]
[curious] Para onde o comando docker push envia a imagem? Se o nome não incluir o servidor de um registro, o Docker usa o Docker Hub. Você também precisa de permissão no repositório de destino.
[700ms]
[calm] O Docker Hub oferece repositórios públicos e privados. Confira a visibilidade do repositório antes de enviar a imagem do seu aplicativo.

## Step 2 · acr

[confident] Aqui está a solução — coloque a sua imagem num lugar privado que seja seu.
[600ms]
[calm] Acrescente ao início do nome o servidor de login do registro: contoso ponto azure cê erre ponto i ó. Agora o comando docker push envia a imagem diretamente para o seu Azure Container Registry.
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
