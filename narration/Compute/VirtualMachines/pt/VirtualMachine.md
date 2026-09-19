# Narrator Script - Monte sua primeira VM

**Source animation:** journeys/Compute/VirtualMachines/VirtualMachine.html

**Script status:** Authored voiceover.

Delivery cues appear in brackets; pauses are on separate lines.

## Step 1 · The shop needs OS control

[curious] A Contoso Retail quer operar sua loja online do seu jeito.
[600ms]
[confident] Uma máquina virtual dá à equipe um sistema operacional completo para instalar, ajustar e atualizar conforme a aplicação precisa.
[600ms]
[serious] Esse controle traz uma responsabilidade: o Azure cuida dos hosts físicos, e você administra o que está dentro do sistema convidado.

## Step 2 · Start with an image

[calm] Toda máquina começa com uma imagem.
[600ms]
[confident] A imagem fornece o sistema operacional e os primeiros softwares, que vão para o disco do sistema quando a máquina é criada.
[600ms]
[reassuring] Escolhemos Linux para a loja, mas Windows também seria uma escolha comum.

## Step 3 · Choose a size

[calm] Depois vem o tamanho, uma decisão totalmente separada da imagem.
[600ms]
[confident] Ele define a capacidade de processamento e a memória da máquina, então precisa atender à demanda real da loja.
[600ms]
[serious] Escolha com base nas medições, na disponibilidade regional e no orçamento. Não por intuição.

## Step 4 · Give data a durable home

[calm] Agora, o armazenamento. Os três tipos de disco têm funções bem diferentes.
[600ms]
[confident] O disco do sistema operacional inicia a máquina. Os discos de dados guardam o catálogo e os pedidos. Ambos são discos gerenciados que preservam os dados após uma reinicialização.
[600ms]
[serious] O disco temporário é uma área de trabalho descartável. Quando ele existir, guarde ali apenas o que pode perder sem consequências.

## Step 5 · Connect the private network

[calm] A máquina também precisa se comunicar.
[600ms]
[confident] Uma interface de rede fornece um endereço privado dentro de uma sub-rede da rede virtual. É por ali que a loja conversa com os outros sistemas da Contoso.
[600ms]
[reassuring] Este projeto não precisa de um endereço público na máquina. As regras de segurança de rede continuam valendo.

## Step 6 · Connect, then authenticate

[curious] Então, como o administrador entra?
[800ms]
[confident] O Azure Bastion fica em sua própria sub-rede e permite abrir uma sessão pelo portal. Assim, a máquina não precisa de um endereço exposto à internet.
[600ms]
[serious] O Bastion leva você até a porta. A chave SSH comprova sua identidade. Alcançar uma máquina e ter permissão para entrar são coisas diferentes.

## Step 7 · Stopped is not deallocated

[serious] Este detalhe aparece na fatura.
[600ms]
[confident] Desligar pelo sistema convidado deixa a máquina parada, mas ainda alocada em um host. A computação continua sendo cobrada.
[600ms]
[reassuring] Desalocar pelo Azure libera o hardware e interrompe a cobrança pelo uso de computação. Mas os discos e os demais recursos mantidos continuam existindo e podem continuar gerando custos.

## Step 8 · Your VM - All in One

[reflective] Olhando o conjunto, uma máquina virtual reúne cinco decisões conectadas.
[600ms]
[confident] Uma imagem, um tamanho, discos, um caminho de rede e uma forma de autenticação.
[600ms]
[determined] A loja está funcionando, mas ainda depende de uma máquina em um único host. O próximo passo é projetar a disponibilidade.
