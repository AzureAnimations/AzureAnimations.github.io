# Roteiro de narração - Redes do Azure

**Source animation:** journeys/Fundamentals/AzureNetworking.html
**Script status:** Authored voiceover.
**Language:** Português (Brasil)

As indicações entre colchetes não são faladas. As pausas ficam em linhas separadas. Cada bloco corresponde a uma etapa da animação.
<!-- Sources: https://learn.microsoft.com/azure/private-link/private-endpoint-overview ; https://learn.microsoft.com/training/modules/describe-azure-compute-networking-services/ ; https://learn.microsoft.com/azure/expressroute/secure-expressroute#data-protection -->

## Step 1 · An order needs the stock count

[calm] Um cliente chega ao pagamento. O site no App Service chama a máquina virtual de estoque, mas esse sistema ainda precisa se conectar ao banco SQL para consultar a quantidade disponível.
[600ms]
[confident] Esta aula constrói o caminho que falta entre o sistema de estoque e o banco. Executar a aplicação e guardar registros não conecta os dois automaticamente.

## Step 2 · Give the backend a private address

[calm] A Contoso coloca a máquina virtual de estoque em uma rede virtual, chamada VNet. Seu endereço privado a identifica dentro da rede privada conectada.
[600ms]
[confident] O banco SQL continua sendo um serviço gerenciado separado. Dar um endereço ao sistema não move o banco para a rede nem concede acesso aos registros.

## Step 3 · Organize the address space

[calm] Uma sub-rede é um intervalo menor de endereços dentro da rede virtual. A Contoso usa um intervalo para a aplicação e reserva outro para a conexão privada com o serviço.
[600ms]
[confident] Sub-redes organizam endereços, mas não são regras de segurança por si só. Ainda são necessários controles de tráfego para determinar o que pode se comunicar.

## Step 4 · Find inventory by name

[calm] A aplicação conhece o banco pelo nome, sem decorar seu endereço. O DNS privado traduz esse nome para o endereço do ponto de extremidade privado mostrado aqui.
[600ms]
[confident] A resposta DNS indica onde tentar a conexão. Ela não cria uma rota de rede nem dá permissão para ler os registros de estoque.

## Step 5 · Connect privately to the database

[calm] Um ponto de extremidade privado aprovado fornece conexão privada ao SQL por uma interface de rede na sub-rede da Contoso. O banco gerenciado continua fora dessa sub-rede.
[600ms]
[confident] A Contoso desabilita o acesso pela rede pública separadamente e verifica as permissões do banco. Caminho privado e acesso autorizado aos dados são requisitos diferentes.

## Step 6 · Reach the fulfilment network

[calm] A aplicação de processamento de pedidos funciona em outra rede virtual. O emparelhamento conecta as redes pelo backbone da Microsoft, permitindo comunicação privada quando as regras relevantes autorizam.
[600ms]
[confident] Cada rede mantém seu espaço de endereços. Conectá-las não as transforma em um grupo de recursos nem elimina as verificações de segurança.

## Step 7 · Keep the warehouse connected

[calm] O depósito ainda mantém sistemas locais. Uma rede privada virtual de site a site, ou VPN, conecta essa rede ao Azure por um túnel criptografado sobre a internet.
[600ms]
[confident] O depósito pode ficar onde está e participar do ambiente híbrido da loja. Roteamento e controles de acesso ainda precisam ser configurados.

## Step 8 · Consider a private circuit

[calm] Para outros requisitos de conectividade, a Contoso pode contratar ExpressRoute por um provedor. Ele fornece conexão privada aos serviços de nuvem da Microsoft, em vez do caminho pela internet usado pela VPN.
[600ms]
[confident] Privado não significa automaticamente criptografado. Quando essa proteção é necessária, o tráfego do ExpressRoute precisa de um projeto de criptografia adequado.

## Step 9 · The order can reach inventory

[calm] Junte as partes: o sistema tem endereço, o DNS resolve o nome do banco e o ponto de extremidade aprovado fornece o caminho. Com as permissões necessárias, a consulta devolve o estoque ao pagamento.
[600ms]
[confident] O depósito usa VPN neste exemplo. Agora a Contoso escolhe armazenamento para os outros tipos de dados da loja.