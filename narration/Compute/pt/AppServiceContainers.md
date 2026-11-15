# Narrator Script — Compute · Run a Container on App Service: Settings and Secrets

**Source animation:** [AppServiceContainers.html](../../../journeys/Compute/AppServiceContainers.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/app-service/tutorial-custom-container>

---

## Step 1 · From a Registry Image to a Running Web App

[calm] A Contoso empacotou a API de pedidos dela como uma imagem de contêiner, versão um vírgula quatro, e enviou essa imagem para um Azure Container Registry.
[600ms]
[curious] Um aplicativo web para contêineres não usa uma pilha de linguagem pronta. Ele executa a sua própria imagem.
[600ms]
[confident] Então o caminho é simples: o App Service puxa a imagem do registro, inicia o contêiner e entrega o serviço para os seus usuários.

## Step 2 · Create a Web App for Containers

[calm] Ao criar o aplicativo web, escolha Container como forma de publicação, e não código, e escolha Linux para esta lição.
[600ms]
[confident] Depois, aponte o app para a sua imagem, informando o registro, o nome e a tag.
[600ms]
[reassuring] O portal e a linha de comando dão o mesmo resultado. A CLI só cria primeiro um plano Linux e depois um aplicativo web que aponta para a imagem.

## Step 3 · Pull from ACR with a Managed Identity

[curious] Como o App Service faz login no registro? A melhor resposta: ele nem precisa de senha.
[600ms]
[confident] Dê uma identidade ao app, atribuída pelo sistema ou pelo usuário, e conceda a essa identidade a função AcrPull no registro. Depois, ative a configuração de identidade gerenciada para o pull do registro.
[600ms]
[serious] Uma identidade atribuída pelo usuário também precisa ter o client ID definido. E se o registro rejeitar o token, o pull falha com um erro de não autorizado.

## Step 4 · WEBSITES_PORT and the Container Port

[calm] O App Service presume que o seu contêiner escuta na porta oitenta.
[600ms]
[confident] Se o seu escuta em outra porta, digamos oito mil, avise a plataforma com a configuração de app websites port.
[600ms]
[reflective] Lembre-se dos limites. Só uma porta recebe requisições HTTP, e o TLS termina no front-end do App Service, então o seu contêiner só precisa servir HTTP simples.

## Step 5 · App Settings Become Environment Variables

[calm] Cada configuração de app que você define é entregue ao contêiner como variável de ambiente quando ele inicia.
[600ms]
[confident] Os nomes podem ter letras, números, pontos e sublinhados, então escolha nomes que o seu código consiga ler.
[600ms]
[serious] Atenção ao efeito colateral. Adicionar ou alterar uma configuração reinicia o app, então espere uma breve reinicialização quando editar uma.

## Step 6 · Secrets: Key Vault References Instead of Values

[serious] Não cole um segredo em uma configuração de app.
[600ms]
[confident] Coloque no lugar uma referência ao Key Vault. Ela indica o cofre e o segredo, e o valor continua no cofre, lido pela identidade gerenciada do app com a função Key Vault Secrets User.
[600ms]
[concerned] Fique de olho nas falhas. Se uma referência não puder ser resolvida, o app recebe o texto da referência como uma string simples, e isso é um bug esperando para acontecer.

## Step 7 · Slot Settings: What Stays with the Slot on Swap

[curious] Quando você troca os slots de implantação, o app é que se move, e a maioria das configurações vai junto.
[600ms]
[confident] Marque uma configuração como configuração do slot de implantação e ela fica no próprio slot. A caixa de seleção do portal tem exatamente esse nome, e a CLI usa slot settings.
[600ms]
[reflective] Algumas coisas nunca trocam de slot: nomes de domínio personalizados, configurações de escala e identidades gerenciadas.

## Step 8 · Continuous Deployment: Webhook from ACR

[calm] Ative a implantação contínua no Deployment Center, e o App Service adiciona um webhook ao seu registro.
[600ms]
[impressed] A partir daí, cada push de imagem aciona o webhook. O app reinicia, a reinicialização puxa a imagem nova e a nova versão entra no ar.
[600ms]
[reassuring] Se você não ativar essa opção, é só reiniciar o app por conta própria. Com outro registro, faça um post na URL do webhook a partir do seu pipeline.

## Step 9 · Logs and the Container Startup Check

[curious] Depois de reiniciar, o App Service faz ping no seu contêiner até ele responder.
[600ms]
[concerned] Se ele não responder a tempo, a tentativa falha, a plataforma tenta de novo, e os visitantes veem um erro cinco zero três.
[600ms]
[determined] Então ative o log do aplicativo com a opção de sistema de arquivos e acompanhe o Log stream e os logs do App Service para descobrir o motivo.

## Step 10 · Container on App Service at a Glance

[calm] Aí está o caminho completo: uma imagem no registro, um aplicativo web para contêineres e um serviço em execução.
[600ms]
[confident] As configurações do app viram variáveis de ambiente, e os segredos vêm de referências ao Key Vault, nunca de valores colados.
[600ms]
[proud] Esse é o objetivo do exame A I 200 em poucas palavras: rodar um contêiner no App Service e fornecer as variáveis e os segredos dele.
