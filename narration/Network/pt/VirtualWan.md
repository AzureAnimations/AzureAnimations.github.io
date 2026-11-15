# Virtual WAN — narração (pt)

## Step 1 · The hub you built by hand

[calm] Um hub que você mesmo gerencia funciona muito bem com três spokes.
[500ms]
[concerned] Com trinta spokes, duas regiões e quarenta filiais, manter os emparelhamentos, as tabelas de rotas e os gateways vira um trabalho de tempo integral.
[400ms]
[confident] Nada aqui está errado. Hub-and-spoke é o formato certo. A pergunta é quem opera o hub. O Virtual WAN é a proposta da Microsoft de cuidar dessa parte por você.

## Step 2 · Azure Virtual WAN

[confident] O Azure Virtual WAN é um serviço de rede que reúne conectividade, roteamento e segurança em um único hub gerenciado pela Microsoft.
[500ms]
[calm] Você conecta as coisas nele. O que acontece lá dentro é responsabilidade da Microsoft.
[400ms]
[helpful] O formato que você obtém continua sendo hub-and-spoke. O que muda é que a Microsoft gerencia os emparelhamentos e o roteamento dentro do hub, incluindo as conexões entre hubs de regiões diferentes.

## Step 3 · What may live in the hub

[calm] Um virtual hub é uma rede virtual que a Microsoft cria e controla.
[500ms]
[confident] E essa é a troca inteira. Você ganha o roteamento de graça e abre mão de poder colocar qualquer coisa lá dentro.
[400ms]
[concerned] Isso pega muitas equipes de surpresa. Você não pode colocar uma VM, um controlador de domínio ou o Azure Bastion dentro de um virtual hub. Isso vai para um spoke, no que a Microsoft chama de padrão de extensão do virtual hub.

## Step 4 · One network, two regions, every branch

[calm] A Contoso conecta as VPNs das filiais, um circuito ExpressRoute e seus usuários remotos a hubs em duas regiões.
[500ms]
[confident] A Microsoft une esses hubs, e cada spoke por trás deles consegue alcançar todos os outros.
[400ms]
[helpful] A linha entre os dois hubs é justamente a que você nunca precisa construir. A Microsoft cria e mantém essa linha, e é ela que transforma dois hubs regionais em uma única rede de trânsito global.

## Step 5 · Four paths you get for nothing

[confident] O Virtual WAN Standard é uma malha completa.
[500ms]
[calm] Assim que duas coisas estão conectadas ao mesmo Virtual WAN, elas conseguem se alcançar, na mesma região ou entre regiões.
[400ms]
[helpful] Compare isso com o emparelhamento comum, que não é transitivo. Dois spokes emparelhados ao mesmo hub ainda não conversam sem uma tabela de rotas apontando para algo no meio do caminho. No Virtual WAN, esse caminho já existe.

## Step 6 · Secured virtual hub

[confident] Transforme um hub em um secured virtual hub e o Firewall Manager implanta o Azure Firewall dentro dele.
[500ms]
[calm] A partir daí, cada spoke e cada filial conectada àquele hub passa a ser inspecionada por um único firewall compartilhado.
[400ms]
[helpful] E aqui está a parte que vale conhecer: um secured virtual hub tem roteamento embutido. Você não precisa escrever rotas definidas pelo usuário para forçar o tráfego por ele, como faria em um hub construído por você.

## Step 7 · Basic buys almost nothing

[calm] O Virtual WAN vem em duas SKUs, e a distância entre elas não é sutil.
[500ms]
[confident] O Basic existe para um caso bem estreito. Quase todo projeto que recorre ao Virtual WAN precisa do Standard.
[400ms]
[helpful] Se você quer mais de um hub, ou ExpressRoute, ou ponto a site, ou trânsito entre spokes, isso é Standard. O Basic entrega VPN site a site para um único hub, e para por aí.

## Step 8 · Managed hub, or one you own

[calm] As duas opções entregam hub-and-spoke.
[500ms]
[confident] A escolha é sobre quanto controle você precisa ter dentro do hub, comparado a quanto dele você quer operar.
[400ms]
[helpful] A pergunta que realmente decide não é a escala. É se você precisa colocar algo seu dentro do hub. Se precisa, o Virtual WAN é a resposta errada, não importa quantos spokes você tenha.

## Step 9 · The same shape, someone else's problem

[confident] Então, o resumo.
[400ms]
[calm] O Virtual WAN não inventa uma topologia. Ele pega o hub que você construiria de qualquer jeito e entrega a operação dele para a Microsoft, com trânsito e links entre regiões incluídos.
[600ms]
[encouraging] Decida com uma única pergunta. Existe algo seu que precisa viver dentro do hub? Se não, fique com o gerenciado. Se sim, construa você mesmo e mantenha o controle.
