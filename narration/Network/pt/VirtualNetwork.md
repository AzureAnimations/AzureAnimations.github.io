# Virtual Network — narração (pt)

## Step 1 · Start With a Virtual Network

[confident] Tudo nas redes do Azure começa aqui, com uma rede virtual.
[500ms]
[calm] Uma VNet é a sua própria fatia privada e isolada da rede do Azure. Você lhe dá um espaço de endereços em notação CIDR: aqui, dez ponto zero ponto zero ponto zero barra dezesseis.
[400ms]
[helpful] Fique com os intervalos privados RFC 1918 e, se precisar, o Azure roda pilha dupla IPv4 e IPv6.

## Step 2 · Segment It Into Subnets

[calm] Uma rede única e enorme não é um projeto. Então você divide a VNet em sub-redes: intervalos menores, como dez ponto zero ponto um ponto zero barra vinte e quatro.
[500ms]
[confident] É nas sub-redes que o trabalho de verdade acontece. Elas agrupam recursos relacionados, dão a você para onde rotear o tráfego e dão uma fronteira onde aplicar segurança.
[400ms]
[helpful] Lembre-se disto: todo recurso que você cria no Azure vive dentro de uma sub-rede.

## Step 3 · Place a Virtual Machine

[calm] Agora vamos colocar algo dentro. Ponha uma máquina virtual na sub-rede.
[400ms]
[confident] Para se comunicar na rede, essa VM precisa de pelo menos um endereço IP privado. O IP público é opcional e, na maior parte das vezes, você não quer um.
[500ms]
[curious] Mas aqui está a pegadinha, e ela confunde quase todo mundo: o endereço IP nunca é atribuído à máquina virtual em si.

## Step 4 · The NIC Holds the IPs

[confident] É para isso que existe a interface de rede. A NIC.
[400ms]
[calm] É a NIC que de fato carrega o IP privado e o IP público opcional, e ela pode ter mais de uma configuração de IP, se você precisar.
[500ms]
[helpful] Uma NIC se conecta a exatamente uma máquina virtual. Um para um. É essa conexão que dá à VM o seu lugar na sub-rede.

## Step 5 · Filter Traffic With an NSG

[curious] Então, como você controla o que realmente pode chegar até aquela VM?
[400ms]
[confident] Você associa um grupo de segurança de rede. Um NSG é uma lista de regras de permitir e negar: por porta, por protocolo e por direção, tanto de entrada quanto de saída.
[500ms]
[calm] As regras são avaliadas por prioridade, do número mais baixo para o mais alto. Associe à NIC e você estará filtrando o tráfego daquela única máquina virtual.

## Step 6 · One NSG for the Whole Subnet

[curious] Agora adicione uma segunda VM. E uma terceira. Você vai mesmo associar o mesmo NSG a cada NIC na mão?
[500ms]
[confident] Claro que não. Associe o NSG à sub-rede.
[400ms]
[calm] Agora cada NIC dessa sub-rede herda as mesmas regras automaticamente, e continua funcionando por mais máquinas virtuais que você adicione.

## Step 7 · The Whole Picture

[confident] Então vamos juntar o quadro completo.
[500ms]
[calm] Uma VNet dá a você um espaço de endereços. As sub-redes o segmentam. As máquinas virtuais ficam dentro dessas sub-redes, e os endereços IP delas vivem numa NIC, nunca na VM diretamente.
[400ms]
[calm] E os NSGs filtram o tráfego, associados a uma única NIC ou à sub-rede inteira quando você quer que aquilo escale.
[600ms]
[encouraging] Esse é o núcleo das redes do Azure. Todos os outros serviços que você vai conhecer são construídos exatamente sobre isto.
