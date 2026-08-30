# Azure Networking Journey — narração do tour do hub (pt)

Emparelha 1:1 com os passos `TOUR` de `static/v2/Network/index.html`.
O passo 1 toca na tela de introdução; os passos 2–11 destacam as paradas 01–10 no quadro; o passo 12 é o resumo.
Deliberadamente CURTO — cerca de 12–16 s por clipe, para o holofote continuar andando.

## Step 1 · Welcome

[confident] Boas-vindas à jornada de redes do Azure.
[300ms]
[calm] Esta é a rede em que quase toda carga de trabalho séria do Azure acaba. Dez animações curtas a desmontam, na ordem em que você realmente a construiria.

## Step 2 · Virtual Network

[confident] Parada um. A rede virtual.
[300ms]
[calm] Sua própria fatia privada do Azure, dividida em sub-redes. É para as sub-redes que você roteia o tráfego, e é nelas que você aplica a segurança.

## Step 3 · NSG and ASG

[confident] Parada dois. Grupos de segurança de rede e de aplicativo.
[300ms]
[calm] O NSG protege a sub-rede. O ASG dá nome à carga de trabalho, então você escreve "permitir que a camada de aplicativo alcance o banco de dados" em vez de uma regra cheia de endereços IP.

## Step 4 · VNet peering and Bastion

[confident] Parada três. Emparelhamento, e Bastion.
[300ms]
[calm] O emparelhamento une redes virtuais de forma privada pelo backbone do Azure. O Bastion dá RDP e SSH pelo portal, então nenhuma máquina virtual precisa de IP público.

## Step 5 · DNS and Private Link

[confident] Parada quatro. DNS, e Private Link.
[300ms]
[calm] Primeiro você resolve o nome, depois alcança o serviço de forma privada. Um ponto de extremidade privado traz um serviço de plataforma para dentro da sua sub-rede como um endereço privado comum.

## Step 6 · Load balancing

[confident] Parada cinco. Balanceamento de carga.
[300ms]
[calm] Front Door, Traffic Manager, Application Gateway, Load Balancer. Global ou regional, HTTP ou não: responda essas duas perguntas e a escolha se resolve sozinha.

## Step 7 · WAF and Azure Firewall

[confident] Parada seis. O firewall de aplicativo web, e o Azure Firewall.
[300ms]
[calm] O WAF inspeciona a requisição web. O Azure Firewall controla todo o resto, e só protege aquilo que suas tabelas de rotas realmente enviam por ele.

## Step 8 · VPN Gateway and ExpressRoute

[confident] Parada sete. VPN Gateway, e ExpressRoute.
[300ms]
[calm] Dois caminhos de entrada a partir do seu próprio datacenter. Um túnel criptografado pela internet, ou um circuito privado que nunca a toca. Muitas organizações usam os dois.

## Step 9 · Azure Virtual WAN

[confident] Parada oito. Azure Virtual WAN.
[300ms]
[calm] A alternativa gerenciada a operar o hub você mesmo, com trânsito global embutido. Filiais, usuários de VPN, circuitos e spokes se encontram em um só lugar.

## Step 10 · Network monitoring

[confident] Parada nove. Monitoramento.
[300ms]
[calm] O Network Watcher diz por que um pacote foi descartado agora. O Azure Monitor e os logs de fluxo dizem o que aconteceu na terça passada.

## Step 11 · Naming convention

[confident] Parada dez. A convenção de nomes.
[300ms]
[calm] A parada menos técnica, e a que decide se as outras nove continuam sustentáveis. Combine cedo: renomear um recurso normalmente significa recriá-lo.

## Step 12 · The whole picture

[confident] Essa é a jornada inteira.
[300ms]
[calm] Construir, proteger, conectar, operar. Escolha qualquer parada do quadro para se aprofundar, ou comece pela número um, a rede virtual.
