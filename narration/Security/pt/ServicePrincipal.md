# Narrator Script · Português (pt) — Journey 04 · Service Principal e credenciais federadas

**Source animation:** `static/v2/Security/ServicePrincipal.html`
**Language:** Portuguese (pt). Traduzido do roteiro mestre em inglês. As indicações de interpretação `[tags]` e as pausas `[NNNms]` permanecem inalteradas (são direções, não são faladas). Os títulos das etapas ficam em inglês para o mapeamento 1:1.

Um bloco por etapa da animação.

---

## Step 1 · Ship Contoso from GitHub to Azure

[confident] Este é o objetivo: enviar a Contoso do GitHub direto para o Azure.
[600ms]
[calm] O app da Contoso vive no GitHub, e cada push deveria iniciar um fluxo de trabalho do GitHub Actions que o compila e implanta no Azure.
[600ms]
[optimistic] Ninguém copiando arquivos à mão: um simples git push envia o app automaticamente para o Azure App Service.
[800ms]
[curious] Parece fácil... então, o que está no caminho?

## Step 2 · GitHub and Azure are two different platforms

[concerned] O problema é que o GitHub e o Azure são duas plataformas diferentes.
[600ms]
[calm] O GitHub Actions é executado fora do Azure. Quando o fluxo de trabalho tenta implantar, o Azure vê um chamador desconhecido de outra plataforma, com logins diferentes.
[600ms]
[serious] Então o Azure o bloqueia: ele só aceita solicitações de uma identidade que reconhece.
[800ms]
[reflective] Plataformas diferentes, sistemas de identidade diferentes. E nenhuma identidade compartilhada entre elas.

## Step 3 · Trust starts with an identity

[intrigued] Então, como fazemos a ponte sobre essa lacuna?
[800ms]
[confident] A confiança começa com uma identidade. Para a implantação funcionar, o Azure precisa reconhecer o fluxo de trabalho do GitHub como um chamador conhecido que ele pode autorizar.
[600ms]
[calm] E a correção não é uma senha compartilhada.
[600ms]
[reassuring] É dar ao fluxo de trabalho uma identidade no Microsoft Entra ID em que o Azure já confia.

## Step 4 · App Registration defines the identity

[confident] Essa identidade começa com uma App Registration.
[600ms]
[calm] A Contoso cria uma App Registration no Microsoft Entra ID: ela define a identidade do aplicativo.
[600ms]
[impressed] Neste locatário, o Azure avalia o Service Principal correspondente, a instância de aplicativo empresarial que realmente recebe as decisões de acesso.
[600ms]
[reassuring] Pense em planta e instância: a App Registration é a definição; o Service Principal é sua representação local dentro do locatário.

## Step 5 · GitHub signs in as the Service Principal

[confident] Agora o GitHub entra como esse Service Principal.
[600ms]
[calm] O Azure dá ao fluxo de trabalho um Service Principal com um ID de aplicativo (cliente) e um ID de objeto: a identidade do GitHub dentro do Azure.
[600ms]
[impressed] O GitHub Actions se autentica como ele usando uma credencial federada — sem segredo — e o Azure então o autoriza com uma função em um escopo específico.
[600ms]
[reassuring] Uma vez envolvido por um Service Principal, o GitHub se comporta como qualquer identidade do Azure: ele se autentica e então é autorizado por função.

## Step 6 · Where federation shines

[optimistic] E esse modelo de confiança vai muito além do GitHub.
[600ms]
[calm] A mesma credencial federada funciona para qualquer provedor de identidade externo que o Microsoft Entra possa validar.
[600ms]
[impressed] A Contoso a reutiliza no GitHub Actions, em outras nuvens, no Kubernetes e no local, sem nenhum segredo armazenado em qualquer um deles.
[600ms]
[reassuring] Seja qual for a origem, o padrão é idêntico: a carga de trabalho traz um token do seu próprio provedor, e o Entra o troca por um token de acesso do Azure.

## Step 7 · From GitHub to Azure — secretless, end to end

[reflective] Do GitHub ao Azure: sem segredos, de ponta a ponta.
[600ms]
[confident] Duas plataformas separadas, então o fluxo de trabalho obtém uma identidade no Microsoft Entra ID: uma App Registration e um Service Principal.
[600ms]
[proud] Uma credencial federada permite que o Azure confie no próprio token do GitHub, então a implantação é executada sem nenhum segredo armazenado.
[600ms]
[optimistic] Dê uma identidade à carga de trabalho externa e deixe o Azure confiar no seu token, e o mesmo padrão chega a quase qualquer lugar.
