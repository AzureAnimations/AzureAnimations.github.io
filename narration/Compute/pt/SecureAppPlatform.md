# Narrator Script — Compute · Secure Azure Functions, Logic Apps, App Service and API Management

**Source animation:** [SecureAppPlatform.html](../../../journeys/Compute/SecureAppPlatform.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/app-service/overview-authentication-authorization>
- <https://learn.microsoft.com/azure/azure-functions/security-concepts>
- <https://learn.microsoft.com/azure/logic-apps/logic-apps-securing-a-logic-app>
- <https://learn.microsoft.com/azure/api-management/mitigate-owasp-api-threats>

---

## Step 1 · Who can call it, and what can it reach?

[calm] A Contoso Shop roda em quatro plataformas: App Service, Functions, Logic Apps e API Management.
[600ms]
[curious] Para cada uma, você precisa de duas respostas. Quem pode chamar essa plataforma, e a que ela pode ter acesso?
[600ms]
[confident] Todo controle desta lição responde a uma dessas duas perguntas, na entrada ou na saída.

## Step 2 · App Service: sign-in, HTTPS and managed identity

[calm] No App Service, os navegadores precisam usar HTTPS, com uma versão mínima de TLS. Essas são configurações do app.
[600ms]
[confident] Os usuários precisam fazer login, então você ativa a autenticação integrada, em vez de escrever você mesmo.
[600ms]
[impressed] E o app acessa o Key Vault por meio de uma identidade gerenciada do Microsoft Entra ID. Não há credencial para guardar nem rotacionar no seu código.

## Step 3 · Functions: authorization levels and keys

[calm] Toda função com gatilho HTTP tem um nível de autorização, e o nível anônimo não exige chave.
[600ms]
[confident] Os níveis de função e de administrador exigem uma chave de acesso, enviada em um cabeçalho ou no parâmetro code da consulta. Trate a chave mestra como a senha de um administrador.
[600ms]
[serious] Mas uma chave é um segredo compartilhado, e não um login. Para ter identidade de verdade, ative a autenticação integrada.

## Step 4 · Functions network: inbound and outbound

[calm] Quem chama pela rede pública passa por uma lista de permissão e bloqueio, ordenada por prioridade.
[600ms]
[confident] Quem chama pela rede privada usa um endpoint privado, que dá ao app um endereço privado para o tráfego de entrada.
[600ms]
[serious] As chamadas para serviços privados usam a integração com rede virtual. Mas ela só afeta o tráfego de saída, então não torna o app privado.

## Step 5 · Logic Apps: who can start a workflow

[curious] Um gatilho de requisição é simplesmente uma URL, então quem pode chamá-la?
[600ms]
[confident] Escolha como os chamadores comprovam quem são: OAuth com o Microsoft Entra ID, assinaturas de acesso compartilhado, restrições de IP de entrada, ou coloque o workflow atrás do API Management.
[600ms]
[reassuring] Para as conexões que o workflow faz, use uma identidade gerenciada, em vez de uma credencial guardada.

## Step 6 · Logic Apps: keep secrets out of run history

[calm] O histórico de execução mostra todas as entradas e saídas de cada ação.
[600ms]
[serious] Isso é um problema para valores sensíveis, então ative as entradas seguras e as saídas seguras para escondê-los. Uma ação que usa uma saída segura também tem as entradas ocultas.
[600ms]
[confident] Defina os seus segredos como parâmetros do tipo secure string. Todos os valores na tela aqui são fictícios.

## Step 7 · API Management: validate the token

[calm] Agora, o gateway. Ele confere o token do chamador antes de o backend sequer ver a requisição.
[600ms]
[confident] A política validate JWT confere a assinatura, o emissor, o público e a validade, além das claims que você exigir.
[600ms]
[reassuring] Sem um token válido, a chamada para no gateway e, por padrão, o chamador recebe um quatro zero um.

## Step 8 · API Management: limits, IP filter, backend

[calm] Outras políticas protegem a mesma porta. Um filtro de IP permite ou bloqueia endereços.
[600ms]
[confident] Um limite de taxa restringe o número de chamadas, e quem passa do limite recebe um quatro vinte e nove, Too Many Requests.
[600ms]
[curious] E em direção ao backend, o gateway também se identifica, com um token de identidade gerenciada ou com um certificado de cliente para TLS mútuo.

## Step 9 · Put a WAF in front

[calm] Um firewall de aplicativo web inspeciona cada requisição em busca de ataques comuns, antes de ela chegar aos seus apps, funções ou gateway.
[600ms]
[confident] O Azure Web Application Firewall roda no Application Gateway ou no Front Door. Ele protege contra ataques como SQL injection e cross-site scripting.
[600ms]
[serious] Depois, trave os seus apps para que aceitem tráfego somente por essa porta de entrada.

## Step 10 · Try it: where is the request blocked?

[curious] Escolha uma requisição e acompanhe o caminho. Ele mostra a primeira camada que a rejeita.
[600ms]
[confident] As camadas seguintes nem chegam a ver a requisição, então uma chamada ruim para o mais cedo possível.
[600ms]
[reflective] É por isso que se empilham as camadas. Cada uma pega o que a anterior não consegue pegar.

## Step 11 · Which control for which platform?

[calm] Oito controles, quatro plataformas. Veja cada controle cair na plataforma em que você o configura.
[600ms]
[confident] Algumas configurações se sobrepõem, como as restrições de acesso, que existem tanto no App Service quanto no Functions.
[600ms]
[reassuring] Esses oito são só a combinação mais clara para cada plataforma, e uma boa forma de lembrar onde cada um fica.

## Step 12 · Recap: identity, network, front door

[calm] Cada controle responde a uma pergunta. Quem é você? De onde você vem? Essa requisição parece segura?
[600ms]
[confident] Isso é identidade, rede e a porta de entrada. Use as três camadas juntas em todas as plataformas.
[600ms]
[proud] Esta lição segue as habilidades de computação segura do guia de estudo da S C 500.
