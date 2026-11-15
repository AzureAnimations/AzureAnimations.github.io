# Narrator Script — Network · Microsoft Entra Private Access and Private Link services

**Source animation:** [EntraPrivateAccess.html](../../../journeys/Network/EntraPrivateAccess.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/entra/global-secure-access/concept-private-access>
- <https://learn.microsoft.com/azure/private-link/private-link-service-overview>
- <https://learn.microsoft.com/entra/global-secure-access/how-to-configure-per-app-access>

---

## Step 1 · Two requests, two tools

[calm] Contoso tem dois pedidos de acesso privado. Maya trabalha de casa e precisa de um aplicativo interno.
[600ms]
[curious] E um parceiro precisa acessar um serviço que a Contoso roda no Azure. Cada pedido precisa do seu próprio caminho privado.
[600ms]
[confident] O Microsoft Entra Private Access resolve o primeiro. Um serviço Azure Private Link resolve o segundo.

## Step 2 · The VPN problem

[calm] Uma VPN em nível de rede coloca o dispositivo inteiro dentro da rede.
[600ms]
[concerned] Maya só precisa de um app, mas agora todos os servidores dessa rede ficam ao alcance dela. É muito mais acesso do que o trabalho pede.
[600ms]
[confident] Já o Private Access funciona por segmento de aplicativo. Essa é a ideia geral do acesso em nível de rede, não uma afirmação sobre todo produto de VPN.

## Step 3 · Microsoft Entra Private Access

[curious] O dispositivo da Maya roda o cliente do Global Secure Access. Ele manda as solicitações dos aplicativos privados pelo serviço, então não existe VPN para conectar.
[600ms]
[confident] Você lista os nomes e endereços que considera privados, e as solicitações para os destinos de um app são encaminhadas para esse app.
[600ms]
[reassuring] Ela não consegue se conectar a mais nada na sua rede.

## Step 4 · The connector

[calm] O conector é um pequeno agente que roda em um Windows Server dentro da sua rede.
[600ms]
[confident] Ele abre conexões de saída para o serviço, então você não precisa abrir nenhuma porta de entrada. Os usuários acessam o serviço em nuvem, que encaminha o tráfego até o app pelo conector.
[600ms]
[serious] Para alta disponibilidade, use pelo menos dois conectores no grupo.

## Step 5 · Define an app segment

[curious] Um segmento diz o que é o app: um nome de domínio totalmente qualificado ou um endereço IP, mais as portas.
[600ms]
[confident] Pode ser um nome com curinga ou uma faixa de endereços, e as portas podem ser valores únicos ou intervalos. Você adiciona os segmentos a um aplicativo empresarial e escolhe o grupo de conectores dele.
[600ms]
[encouraging] Depois, você atribui os usuários e grupos que podem usá-lo.

## Step 6 · Conditional Access on a private app

[calm] Um aplicativo privado é um aplicativo empresarial, então o Acesso Condicional vale para ele.
[600ms]
[confident] Uma política pode exigir autenticação multifator ou um dispositivo em conformidade antes de o usuário entrar.
[600ms]
[reassuring] Crie a política a partir do app no Acesso Seguro Global, e o app já vem como alvo. Exclua as contas de acesso de emergência e comece no modo somente relatório.

## Step 7 · Quick Access or per-app access?

[curious] Há duas formas de configurar. O Acesso Rápido é um único aplicativo que cobre seu principal grupo de recursos privados.
[600ms]
[confident] Um aplicativo do Acesso Seguro Global por app dá regras próprias a apenas um subconjunto de recursos.
[600ms]
[reflective] Pense no Acesso Rápido como uma fase de transição. Use-o para substituir a VPN e depois passe para o acesso por app, com controle mais fino. Cada um usa um grupo de conectores.

## Step 8 · Publish a Private Link service

[calm] Agora o lado do provedor. Coloque seu serviço atrás de um Balanceador de Carga Padrão.
[600ms]
[confident] Depois, crie um serviço Private Link no IP de frontend, e o Azure gera um alias que você pode compartilhar.
[600ms]
[serious] O Balanceador de Carga Básico não funciona aqui, e o serviço, a rede virtual e o balanceador de carga precisam estar todos na mesma região.

## Step 9 · Who may connect: NAT, visibility, approval

[curious] Três controles decidem quem pode se conectar. A visibilidade define quem consegue pedir uma conexão: só quem tem acesso baseado em função, assinaturas específicas ou qualquer pessoa que tenha o seu alias.
[600ms]
[confident] A aprovação automática deixa assinaturas confiáveis pularem a sua revisão. Os outros pedidos ficam como Pendentes até você aprovar ou rejeitar.
[600ms]
[reflective] Os IPs NAT vêm da sua própria sub-rede, então seu serviço enxerga um endereço NAT como origem, e não o do próprio consumidor.

## Step 10 · The partner's private endpoint

[calm] Do lado do consumidor, o parceiro cria um endpoint privado na própria rede virtual.
[600ms]
[confident] Ele aponta para o seu serviço pelo alias ou pelo ID do recurso. Usar o alias exige aprovação manual, então a conexão começa como Pendente.
[600ms]
[reassuring] Se a assinatura do parceiro estiver na sua lista de aprovação automática, a conexão é aprovada na hora. Só conexões aprovadas conseguem enviar tráfego.

## Step 11 · Which one for which request?

[curious] Seis cenários, duas ferramentas. Veja cada um cair no lugar certo.
[600ms]
[confident] Se são funcionários acessando seus aplicativos privados de acordo com quem eles são, é o Private Access.
[600ms]
[proud] Se você está publicando seu próprio serviço para o endpoint privado de outra pessoa, é um serviço Private Link.

## Step 12 · Recap: identity in, private endpoint out

[calm] O Private Access leva os funcionários a um único aplicativo privado, por identidade, sem VPN no caminho.
[600ms]
[confident] Um serviço Private Link permite que um parceiro acesse seu serviço pelo próprio endpoint privado.
[600ms]
[proud] Juntos, eles cobrem dois itens do guia de estudos S C 500, e agora você sabe qual ferramenta atende a cada pedido.
