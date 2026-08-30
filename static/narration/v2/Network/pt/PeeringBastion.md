# Peering & Bastion — narração (pt)

## Step 1 · Two problems, one afternoon

[calm] Dois problemas hoje, e acontece que eles compartilham o mesmo atalho.
[400ms]
[confident] Sua aplicação está em uma rede virtual, seu banco de dados em outra, e os dois não se enxergam. E quando você precisa abrir uma sessão em uma VM, a solução mais rápida também é a pior: um IP público.
[500ms]
[helpful] Os dois problemas têm a mesma resposta tentadora. E os dois têm uma resposta melhor, que leva uns dez minutos para configurar.

## Step 2 · Peering joins two networks privately

[confident] O peering conecta duas redes virtuais para que os recursos delas conversem como se estivessem em uma única rede.
[500ms]
[calm] O tráfego fica no backbone da Microsoft. Sem internet pública, sem gateway e sem criptografia para você configurar.
[400ms]
[helpful] A latência entre VNets emparelhadas na mesma região é a mesma de dentro de uma única VNet, e o peering em si não impõe nenhum limite de banda. Quem define o limite é o tamanho da VM.

## Step 3 · What peering asks of you

[calm] A lista de requisitos é curta e, sinceramente, só o primeiro costuma te pegar.
[500ms]
[confident] Os espaços de endereços não podem se sobrepor. Um planejamento de endereçamento malfeito é o principal motivo pelo qual muitos peerings não podem ser criados depois.
[400ms]
[helpful] Você pode redimensionar o espaço de endereços de uma VNet emparelhada sem tempo de inatividade, mas depois é preciso ressincronizar os dois peerings. Ainda assim, planejar faixas que não se sobrepõem desde o início sai muito mais barato.

## Step 4 · Peering is not transitive

[curious] Aqui está a armadilha. Você emparelha A com B e depois B com C. Será que A alcança C?
[500ms]
[confident] Não. Cada par que precisa conversar precisa do seu próprio peering, ou de um roteador no meio que você colocou ali de propósito.
[400ms]
[helpful] É exatamente por isso que os desenhos hub and spoke colocam o Azure Firewall ou um dispositivo virtual de rede no hub. Eles dão ao tráfego entre spokes um caminho por onde passar, porque o hub sozinho não encaminha nada.

## Step 5 · Now, how do you get in?

[calm] Então a rede já está privada. Era essa a ideia.
[400ms]
[curious] Mas alguém ainda precisa abrir uma sessão em uma VM, e as duas respostas tradicionais deixam todo o ambiente menos seguro.
[500ms]
[concerned] Cada IP público que você anexa para administração é uma porta permanente. E um jump box é mais um servidor que agora você tem que corrigir, monitorar e defender.

## Step 6 · Azure Bastion is the managed front door

[confident] O Azure Bastion é um serviço totalmente gerenciado que abre sessões RDP e SSH para as suas VMs sobre TLS, na porta quatrocentos e quarenta e três.
[500ms]
[calm] Você se conecta pelo portal do Azure ou por um cliente nativo. Suas VMs mantêm os IPs privados e nada mais nelas muda.
[400ms]
[helpful] A conexão é feita para o IP privado da VM. É por isso que a VM não precisa de IP público, nem de agente, nem de software cliente adicional.

## Step 7 · Four SKUs, four different answers

[calm] São quatro camadas, e elas respondem a perguntas realmente diferentes.
[500ms]
[confident] O Developer é gratuito e não precisa de sub-rede nenhuma, mas atende uma VM por vez e não consegue atravessar um peering. Tudo acima disso é questão de escala e de recursos.
[400ms]
[helpful] Duas coisas para saber antes de escolher. Você não pode fazer downgrade de SKU: é preciso excluir e recriar. E só o Standard e o Premium suportam o cliente nativo de SSH ou RDP.

## Step 8 · One bastion, every peered network

[confident] Agora veja as duas ideias se encontrarem.
[400ms]
[calm] Coloque o Bastion no hub e emparelhe os spokes com ele. A partir desse único host você abre uma sessão em qualquer VM de qualquer rede virtual emparelhada, e nenhuma delas precisa de IP público.
[500ms]
[helpful] O acesso continua sendo governado pelas atribuições de função, não apenas pelo alcance da rede. O usuário precisa da função Leitor na VM, na NIC dela, no recurso do Bastion e na rede de destino.

## Step 9 · Private reach, and a door you did not build

[confident] Então, o que fica.
[400ms]
[calm] O peering dá às suas redes um caminho privado entre elas. O Bastion dá a você um caminho privado para dentro.
[600ms]
[encouraging] E se um desenho ainda precisa de um IP público em uma VM só para administração, é justamente isso que vale a pena revisitar primeiro.
