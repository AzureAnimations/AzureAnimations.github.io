# Roteiro de narração - Computação do Azure

**Source animation:** journeys/Fundamentals/AzureCompute.html
**Script status:** Authored voiceover.
**Language:** Português (Brasil)

As indicações entre colchetes não são faladas. As pausas ficam em linhas separadas. Cada bloco corresponde a uma etapa da animação.
<!-- Sources: https://learn.microsoft.com/training/modules/describe-azure-compute-networking-services/ ; https://learn.microsoft.com/azure/virtual-machines/availability-set-overview -->

## Step 1 · How much do you want to manage?

[calm] A Contoso precisa executar um site, processar eventos de pedidos e dar aos funcionários acesso a aplicações de trabalho. Computação é a capacidade de processamento que executa essas tarefas.
[600ms]
[confident] Nem todas precisam do mesmo serviço. A equipe escolhe conforme as necessidades de cada trabalho e quanto quer gerenciar.

## Step 2 · Take the whole machine

[calm] O sistema de estoque precisa controlar o sistema operacional, então a Contoso escolhe uma máquina virtual. Processamento e memória executam o trabalho; discos guardam sistema e dados; uma interface de rede fornece conexão.
[600ms]
[confident] A Microsoft opera o hardware físico. A Contoso ainda configura e mantém a máquina virtual e seu sistema operacional convidado.

## Step 3 · Prepare the VM workload

[calm] Uma máquina virtual pode falhar. Conjuntos de disponibilidade distribuem máquinas entre grupos que separam determinadas falhas de hardware e atualizações de manutenção. Conjuntos de dimensionamento ajudam a gerenciar e ampliar uma frota.
[600ms]
[confident] Nenhuma opção projeta toda a recuperação da loja. A Contoso também precisa preparar a aplicação, os dados e o tratamento do tráfego.

## Step 4 · Package the app instead

[calm] Um contêiner reúne o código da aplicação e suas dependências. A Contoso pode levar esse pacote do teste a uma produção compatível, reduzindo diferenças na configuração do software.
[600ms]
[confident] Empacotar não é o mesmo que hospedar. O contêiner ainda precisa de um lugar para funcionar, além de configuração, conectividade e segurança adequadas.

## Step 5 · Let the platform run it

[calm] Para o site dos clientes, a Contoso escolhe App Service. Ele fornece hospedagem gerenciada para aplicações web e interfaces que outros programas podem chamar.
[600ms]
[confident] A equipe implanta o código e configura a aplicação em vez de manter o sistema operacional subjacente. O sistema de estoque continua na máquina virtual porque tem outras necessidades.

## Step 6 · React to an order

[calm] A chegada de um pedido é um evento: algo aconteceu e deve iniciar um trabalho. Azure Functions pode executar o código da Contoso em resposta, sobre infraestrutura gerenciada.
[600ms]
[confident] Sem servidor não significa que servidores não existem. O serviço cuida dessa infraestrutura; o dimensionamento e a cobrança ainda dependem do plano de hospedagem.

## Step 7 · Deliver desktops, not servers

[calm] Os funcionários do depósito precisam acessar seus desktops e aplicações de trabalho. Azure Virtual Desktop entrega essas experiências remotamente, sem exigir que cada funcionário trabalhe perto dos servidores da nuvem.
[600ms]
[confident] Isso atende a uma necessidade do ambiente de trabalho. Não é o serviço que a Contoso usa para hospedar a loja pública na web.

## Step 8 · Compute Options - All in One

[calm] Relacione serviço e tarefa: máquina virtual para controlar o sistema operacional, contêiner para empacotar, App Service para o site, Functions para eventos e Virtual Desktop para os funcionários.
[600ms]
[confident] A Contoso escolheu onde seu código funciona. Agora o sistema de estoque precisa de uma conexão aprovada com o banco de dados de estoque.