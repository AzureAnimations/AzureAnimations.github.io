# Roteiro de narração — Azure PaaS Compute · 02 · App Service

**Source animation:** `static/v2/Compute/AppService.html`

---

## Step 1 · intro

[confident] Agora, a estrela do show — o App Service. Esta é a aplicação de verdade, a loja da Contoso, rodando sobre o Plano que você acabou de conhecer.
[600ms]
[reassuring] E ele é totalmente gerenciado. O Azure cuida do sistema operacional, do runtime e das correções, para você focar no seu código.
[700ms]
[calm] Construa em quase qualquer linguagem — .NET, Node, Python, Java, PHP — ou traga o seu próprio contêiner.

## Step 2 · deploy

[confident] Raramente você sobe arquivos na mão. Em vez disso, você conecta uma origem — Git, GitHub, Azure DevOps ou Bitbucket.
[600ms]
[calm] A partir daí, cada push para o seu branch compila, testa e implanta o seu app automaticamente.
[700ms]
[encouraging] Faça o commit da sua mudança, e o pipeline leva o resto do caminho até a produção.

## Step 3 · slotsIntro

[confident] Um único App Service pode executar mais de uma cópia viva de si mesmo, chamadas de slots de implantação.
[600ms]
[calm] A Produção continua atendendo o site atual da Contoso. Na hora de modernizar, você adiciona um slot de Staging para o redesenho — com endereço e configurações próprios — sem tocar na Produção.
[700ms]
[reassuring] O mesmo app, duas versões em execução, ambas seguras dentro de um único recurso.

## Step 4 · slots

[confident] É aqui que os slots brilham. Um visitante chega, e o App Service pode dividir o tráfego real por uma porcentagem que você escolhe.
[600ms]
[calm] Envie, digamos, noventa por cento para o site ao vivo confiável, e apenas dez por cento para o novo redesenho em staging.
[700ms]
[impressed] Observe como ele se comporta, depois aumente a nova versão — ou volte para zero — sem reimplantar. Quando estiver satisfeito, uma única troca a coloca no ar, na hora, sem tempo de inatividade.

## Step 5 · auth

[confident] Precisa de login? Você não precisa escrever nenhum código de autenticação.
[600ms]
[calm] Ative um provedor no portal — Microsoft, Google, Facebook, Apple ou qualquer provedor OpenID Connect.
[700ms]
[reassuring] O App Service fica na frente do seu app e verifica o token antes que uma requisição chegue ao seu código. É configuração, não código.

## Step 6 · security

[confident] Por padrão, seu app responde num endereço do azure-websites. Para usar a sua marca, adicione um domínio personalizado.
[600ms]
[calm] Aponte seu domínio para o app com um registro DNS, e o Azure emite — e renova automaticamente — um certificado T-L-S gerenciado e gratuito.
[700ms]
[reassuring] O HTTPS é aplicado por padrão, então os visitantes no seu domínio sempre têm uma conexão criptografada.

## Step 7 · traffic

[confident] Pronto para ir global? Execute o seu App Service em mais de uma região.
[600ms]
[calm] Depois deixe o Traffic Manager rotear cada visitante para a região saudável mais próxima.
[700ms]
[reassuring] E se uma região ficar não saudável, o tráfego a contorna automaticamente — sem mudança de código.

## Step 8 · recap

[proud] Junte tudo: um Plano para a computação, um App Service para o seu código, implantação contínua, slots, autenticação embutida, T-L-S gratuito e roteamento global.
[600ms]
[encouraging] Isso é um app web pronto para produção. Experimente você mesmo — crie um Plano, depois um App Service em cima, e você está no ar.
