# VPN & ExpressRoute — narração (pt)

## Step 1 · Two networks that cannot talk

[calm] O seu datacenter está aqui. A sua rede virtual do Azure está ali.
[400ms]
[confident] As duas usam endereços privados, e a única coisa entre elas é a internet pública — na qual você não quer simplesmente confiar.
[500ms]
[helpful] O Azure oferece dois caminhos para atravessar, e eles não são bem rivais. Um é criptografia sobre a internet que você já tem. O outro é um circuito privado que precisa ser contratado.

## Step 2 · Site-to-site VPN

[confident] Um gateway de VPN no Azure levanta um túnel IPsec até o dispositivo de VPN do seu datacenter.
[500ms]
[calm] A internet continua carregando os pacotes. Só que agora eles vão criptografados o caminho inteiro.
[400ms]
[helpful] Do seu lado são necessárias três coisas: um IP público, um dispositivo de VPN compatível e faixas de endereços que não se sobreponham às da VNet — ou NAT no gateway para resolver a sobreposição.

## Step 3 · Point-to-site VPN

[calm] Esse mesmo gateway também consegue aceitar conexões de máquinas individuais.
[500ms]
[confident] Uma desenvolvedora ou um administrador instala um cliente, se autentica e cai dentro da rede virtual.
[400ms]
[helpful] A diferença para o site a site está no que existe do outro lado. O site a site liga uma rede inteira. O ponto a site admite uma pessoa, num dispositivo, de qualquer lugar — sem nenhum hardware de VPN.

## Step 4 · ExpressRoute

[confident] O ExpressRoute é uma conexão privada até a Microsoft através de um provedor de conectividade.
[500ms]
[calm] Não existe túnel, porque não há internet pública no caminho contra a qual se proteger.
[400ms]
[helpful] Esta é a frase que importa: com o ExpressRoute, o tráfego nunca atravessa a internet pública. É isso que garante a latência previsível — e é isso que responde à pergunta de conformidade.

## Step 5 · Three edges make the circuit

[calm] Um circuito do ExpressRoute não é um cabo só.
[500ms]
[confident] É uma corrente de três roteadores — o seu, o do seu provedor e o da Microsoft — cada um fazendo peering com o seguinte por BGP, até a sua rede alcançar a da Microsoft.
[400ms]
[helpful] O seu provedor monta conexões redundantes entre os três. O Azure anuncia os prefixos da sua VNet para o seu roteador, o seu roteador anuncia de volta as rotas locais — e é essa troca nos dois sentidos que faz o tráfego fluir.

## Step 6 · One circuit, two peerings

[curious] Um circuito não chega automaticamente a tudo.
[500ms]
[calm] Você habilita peerings sobre ele, e cada peering abre uma parte diferente da Microsoft para você. O private peering alcança as suas redes virtuais. O Microsoft peering alcança os serviços públicos.
[400ms]
[concerned] Um erro comum é achar que só o circuito já leva você até o Microsoft trezentos e sessenta e cinco. Não leva — isso exige Microsoft peering e filtros de rota para escolher quais prefixos de serviço você realmente quer.

## Step 7 · Five questions settle it

[calm] A própria comparação da Microsoft se resume a cinco considerações.
[500ms]
[confident] Leia de cima a baixo a coluna em que as suas respostas ficam caindo.
[400ms]
[helpful] E repare que só uma das linhas fala mesmo de rede. As outras quatro falam de dinheiro, de tempo e de conformidade — e é por isso que essa decisão quase nunca é só do time de redes.

## Step 8 · Run both, on purpose

[confident] Os dois podem terminar na mesma rede virtual, e muitas vezes é isso que faz sentido.
[500ms]
[calm] O ExpressRoute carrega o tráfego. A VPN fica embaixo, pronta para assumir se o circuito cair.
[400ms]
[helpful] Quando os mesmos prefixos são anunciados pelos dois caminhos, o Azure prefere o ExpressRoute automaticamente. O seu lado precisa fazer o mesmo — senão o tráfego sai por um caminho e volta pelo outro, e o roteamento assimétrico quebra a sessão.

## Step 9 · Encrypt the internet, or avoid it

[confident] Então, o recado final — e ele é, de verdade, a escolha inteira.
[400ms]
[calm] Uma VPN deixa a internet pública segura o bastante para ser usada. O ExpressRoute tira a internet pública do caminho por completo.
[600ms]
[encouraging] Se estiver em dúvida, comece pela VPN. Ela pode estar no ar esta semana, e vira o caminho de failover no dia em que o circuito finalmente for entregue. Ou seja, o trabalho nunca é desperdiçado.
